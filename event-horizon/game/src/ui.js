/* THE EVENT HORIZON: browser engine (UI, sound, saves). Depends on core.js and the episode files. */
(function () {
  'use strict';
  const EH = window.EH;
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const LS_KEY = 'eh_save_v1', LS_TRAIL = 'eh_trail_v1';
  let S = null, TRAIL = [], DB = null, dbTimer = null, syncState = 'local', busy = false, playing = false, remoteNewer = null;

  /* ================= Persistence ================= */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { } }
  function save() {
    if (!S) return;
    S.updated = Date.now();
    lsSet(LS_KEY, JSON.stringify(S));
    lsSet(LS_TRAIL, JSON.stringify(TRAIL));
    queueDb();
  }
  function compact(st) { return EH.clone(st); }
  function queueDb() {
    if (!DB) return;
    clearTimeout(dbTimer);
    dbTimer = setTimeout(pushDb, 1200);
  }
  async function pushDb() {
    if (!DB || !S) return;
    try {
      setSync('saving');
      await DB.doc('playthrough/state').set({
        state: compact(S), ep: S.ep, scene: S.scene, savedAt: new Date().toISOString(), engine: EH.version
      });
      setSync('ok');
    } catch (e) { setSync(e && (e.code === 'invalid_argument' || e.code === 'not_granted') ? 'local' : 'err'); }
  }
  async function pushEpisodeDoc(id, summary) {
    if (!DB) return;
    try {
      await DB.doc('playthrough/ep_' + id).set({
        id, finishedAt: new Date().toISOString(), summary,
        log: EH.clone(S.epLog), rolls: EH.clone(S.epRolls), flags: EH.clone(S.flags), hidden: EH.clone(S.hidden)
      });
    } catch (e) { setSync('err'); }
  }
  async function initDb() {
    try {
      if (!window.claude || typeof window.claude.use !== 'function') { setSync('local'); return; }
      const db = await window.claude.use('db');
      if (!db) { setSync('local'); return; }
      DB = db;
      const snap = await db.doc('playthrough/state').get();
      if (snap && snap.exists) {
        const R = snap.data();
        if (R && R.state && (!S || (R.state.updated || 0) > (S.updated || 0) + 2000)) {
          if (playing) { remoteNewer = R.state; toast('A newer save exists on another device. Return to the title screen to load it.'); }
          else adoptRemote(R.state);
        }
      }
      setSync('ok');
    } catch (e) { setSync('err'); }
  }
  function adoptRemote(R) {
    const sameScene = S && S.ep === R.ep && S.scene === R.scene;
    S = R; remoteNewer = null;
    if (!sameScene) TRAIL = [];
    lsSet(LS_KEY, JSON.stringify(S)); lsSet(LS_TRAIL, JSON.stringify(TRAIL));
    renderTitle();
  }
  function setSync(st) {
    syncState = st;
    const n = $('#sync'); if (!n) return;
    n.className = 'sync' + (st === 'ok' ? ' ok' : '');
    n.textContent = st === 'ok' ? 'Synced' : st === 'saving' ? 'Saving…' : st === 'err' ? 'Sync error' : 'Saved on this device';
  }

  /* ================= Sound (Web Audio, muted by default) ================= */
  const Snd = {
    ctx: null, hum: null,
    on() { return S && S.settings && S.settings.sound; },
    init() {
      if (this.ctx) return true;
      try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return false; }
      return true;
    },
    noiseBuf(sec, brown) {
      const c = this.ctx, n = Math.floor(c.sampleRate * sec), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
      let last = 0; for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; }
      return b;
    },
    startHum() {
      if (!this.on() || !this.init() || this.hum) return;
      const c = this.ctx, src = c.createBufferSource(); src.buffer = this.noiseBuf(4, true); src.loop = true;
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380;
      const g = c.createGain(); g.gain.value = 0; g.gain.linearRampToValueAtTime(0.05, c.currentTime + 2);
      const o = c.createOscillator(); o.frequency.value = 60; const og = c.createGain(); og.gain.value = 0.006;
      src.connect(lp).connect(g).connect(c.destination); o.connect(og).connect(c.destination);
      src.start(); o.start(); this.hum = { src, o, g, og };
    },
    stopHum() { if (this.hum) { try { this.hum.src.stop(); this.hum.o.stop(); } catch (e) { } this.hum = null; } },
    tone(f, t0, dur, type, vol) {
      const c = this.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = type || 'triangle'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, c.currentTime + t0); g.gain.exponentialRampToValueAtTime(vol || 0.08, c.currentTime + t0 + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + dur);
      o.connect(g).connect(c.destination); o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + 0.05);
    },
    play(name) {
      if (!this.on() || !this.init()) return;
      const c = this.ctx; if (c.state === 'suspended') c.resume();
      if (name === 'sting') { [220, 261.6, 329.6].forEach((f, i) => this.tone(f, i * 0.03, 2.4, 'triangle', 0.05)); this.tone(110, 0, 2.8, 'sine', 0.08); }
      else if (name === 'title') { [110, 164.8, 220, 246.9, 329.6, 493.9].forEach((f, i) => this.tone(f, i * 0.9, 7 - i * 0.6, i % 2 ? 'sine' : 'triangle', 0.045)); }
      else if (name === 'success') { this.tone(523.3, 0, 0.25, 'square', 0.03); this.tone(784, 0.1, 0.4, 'square', 0.03); }
      else if (name === 'fail') { this.tone(98, 0, 0.6, 'sawtooth', 0.04); this.tone(92, 0.05, 0.6, 'sawtooth', 0.03); }
      else if (name === 'gold') { [1046, 1318, 1568, 2093].forEach((f, i) => this.tone(f, i * 0.06, 0.6, 'sine', 0.025)); }
      else if (name === 'dice' || name === 'whoosh' || name === 'rewind') {
        const src = c.createBufferSource(); src.buffer = this.noiseBuf(name === 'dice' ? 0.5 : 0.9, false);
        const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = name === 'dice' ? 6 : 1.4;
        const g = c.createGain(); const t = c.currentTime;
        if (name === 'dice') { bp.frequency.value = 2400; g.gain.setValueAtTime(0, t); for (let i = 0; i < 6; i++) { g.gain.setValueAtTime(0.18, t + i * 0.07); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.04); } }
        else { const up = name === 'whoosh'; bp.frequency.setValueAtTime(up ? 200 : 3200, t); bp.frequency.exponentialRampToValueAtTime(up ? 3200 : 180, t + 0.8); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.85); }
        src.connect(bp).connect(g).connect(c.destination); src.start(); src.stop(t + 1);
      }
    }
  };

  /* ================= Shell ================= */
  const app = () => $('#app');
  function episode() { return S && EH.episodes[S.ep]; }
  function epCode(ep) { return 'S' + ep.season + ' · E' + ep.number; }

  function renderMast() {
    const m = $('#mast'); const ep = episode();
    if (!S || !ep) { m.hidden = true; return; }
    m.hidden = false;
    const pip = (n, max) => Array.from({ length: max }, (_, i) => '<i class="pip' + (i < n ? ' on' : '') + '"></i>').join('');
    m.innerHTML =
      '<button class="brand" id="toTitle" aria-label="Title screen"><span class="orb"></span><span class="ep">' + esc(ep.title) + '<small>' + epCode(ep) + ' · THE EVENT HORIZON</small></span></button>' +
      '<div class="pools" aria-label="Pools">' +
      '<div class="pool st" title="Stamina">Stamina<span class="pips">' + pip(S.pools.stamina, EH.maxPool(S, 'stamina')) + '</span></div>' +
      '<div class="pool fo" title="Focus">Focus<span class="pips">' + pip(S.pools.focus, EH.maxPool(S, 'focus')) + '</span></div>' +
      '<div class="pool ne" title="Nerve">Nerve<span class="pips">' + pip(S.pools.nerve, EH.maxPool(S, 'nerve')) + '</span></div>' +
      '</div>' +
      '<div class="clock">' + (S.clock.day ? '<b>' + esc(S.clock.day + ' ' + S.clock.date) + '</b>' + esc(S.clock.time) : '') + (S.sleepDebt >= 3 ? ' · <span style="color:var(--bad)">Tired −' + Math.floor(S.sleepDebt / 3) + '</span>' : '') + (S.injuries.length ? ' · <span style="color:var(--bad)">Hurt</span>' : '') + '<br><span id="sync" class="sync"></span></div>' +
      '<div class="tools">' +
      '<button class="tbtn" data-tab="sheet">Sheet</button><button class="tbtn" data-tab="bonds">Bonds</button><button class="tbtn" data-tab="notes">Notes</button>' +
      '<button class="tbtn" id="sndBtn" aria-pressed="' + (S.settings.sound ? 'true' : 'false') + '" title="Sound">' + (S.settings.sound ? '♪ On' : '♪ Off') + '</button>' +
      '</div>';
    setSync(syncState);
    $('#toTitle').onclick = () => renderTitle();
    m.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => openDrawer(b.dataset.tab));
    $('#sndBtn').onclick = toggleSound;
    document.body.classList.toggle('drift3', S.drift >= 3);
  }
  function toggleSound() {
    S.settings.sound = !S.settings.sound;
    if (S.settings.sound) { Snd.init(); Snd.startHum(); Snd.play('sting'); } else Snd.stopHum();
    save(); renderMast();
  }
  function toast(t) {
    const box = $('#toasts'); const n = el('div', 'toast', esc(t)); box.appendChild(n); setTimeout(() => n.remove(), 3800);
  }

  /* ================= Title screen ================= */
  function renderTitle() {
    closeDrawer(); playing = false;
    if (remoteNewer) { const R = remoteNewer; remoteNewer = null; adoptRemote(R); return; }
    $('#mast').hidden = true;
    const a = app(); a.innerHTML = '';
    const wrap = el('div', 'titlescreen');
    const inProg = S && S.ep;
    const ep = inProg ? EH.episodes[S.ep] : EH.episodes[EH.order[0]];
    wrap.innerHTML =
      '<div class="logo"><div class="hole" aria-hidden="true"></div><div class="pre">A Prestige Drama in Twenty-Some Seasons</div><h1>The Event Horizon</h1>' +
      '<div class="sub">Philadelphia. Freshman year. Every clock in the city is about to stop for seven-tenths of a second, and you\'re going to keep moving.</div></div>' +
      '<div class="advisory"><b>VIEWER ADVISORY · TV-MA</b><br>Strong language, sexual content, graphic violence, grief, and horror. Uncut. Every character in a sexual situation is an adult.</div>' +
      '<div class="menu" id="menu"></div>';
    a.appendChild(wrap);
    const menu = $('#menu');
    if (inProg && ep) {
      const b = el('button', 'choice', '<span class="ct">Continue</span><span class="sub">' + esc(epCode(ep) + ' · ' + ep.title + (S.done.includes(S.ep) ? ' · finished' : '')) + '</span>');
      b.onclick = () => resume(); menu.appendChild(b);
      const n = el('button', 'choice', '<span class="ct">New Game</span><span class="sub">Erase this playthrough and start the series over</span>');
      n.onclick = () => confirmBox(menu, 'This erases your playthrough on this device and in sync. Your choices are canon, so there is no undo.', 'Erase and start over', () => { newGame(); });
      menu.appendChild(n);
    } else {
      const b = el('button', 'choice', '<span class="ct">Begin Season One</span><span class="sub">S1 · E1 · Pilot · premiere-length</span>');
      b.onclick = () => newGame(); menu.appendChild(b);
    }
    const snd = el('button', 'choice', '<span class="ct">' + (S && S.settings.sound ? 'Sound: On' : 'Sound: Off') + '</span><span class="sub">Score stings, city hum, power effects</span>');
    snd.onclick = () => { if (!S) S = EH.newState(); toggleSound(); renderTitle(); };
    menu.appendChild(snd);
    const how = el('details', 'advisory');
    how.innerHTML = '<summary><b>HOW IT PLAYS</b></summary><p>Choices are permanent and canon. Three kinds of dice: <b>d10 pools</b> for action (7+ is a success, 10 counts twice), <b>2d6 moves</b> for people (10+ strong, 7–9 weak), <b>d20 checks</b> for knowledge. Before a roll, spend <b>Stamina</b>, <b>Focus</b>, and <b>Nerve</b> to push your odds. Bonds have four axes. Lies build Suspicion. Sleep matters. Every episode is written after you finish the last one, from what you actually did.</p>';
    wrap.appendChild(how);
  }
  function confirmBox(host, msg, okLabel, onOk) {
    const old = $('.confirm', host.parentNode); if (old) old.remove();
    const c = el('div', 'confirm', '<div>' + esc(msg) + '</div><div class="row"></div>');
    const ok = el('button', 'btn danger', esc(okLabel)); const no = el('button', 'btn', 'Cancel');
    ok.onclick = () => { c.remove(); onOk(); }; no.onclick = () => c.remove();
    $('.row', c).append(ok, no); host.after(c);
  }
  function newGame() {
    const snd = S ? S.settings.sound : false;
    S = EH.newState(); S.settings.sound = snd; TRAIL = [];
    lsDel(LS_TRAIL);
    startEpisode(EH.order[0]);
  }
  function resume() {
    if (!S.ep) return newGame();
    playing = true;
    if (S.done.includes(S.ep)) { return showEndCard(true); }
    if (S.settings.sound) Snd.startHum();
    buildStage();
    const log = $('#log');
    TRAIL.forEach(h => { const w = el('div'); w.innerHTML = h; while (w.firstChild) log.appendChild(w.firstChild); });
    log.querySelectorAll('.scene').forEach(s => s.classList.add('past'));
    renderScene(S.scene, true);
  }
  function buildStage() {
    closeDrawer();
    const a = app(); a.innerHTML = '';
    const st = el('main', 'stage'); st.innerHTML = '<div class="log" id="log" aria-live="polite"></div>';
    a.appendChild(st); renderMast();
  }

  /* ================= Episodes ================= */
  function startEpisode(id) {
    const ep = EH.episodes[id];
    playing = true;
    const firstEp = !S.done.length && !S.ep;
    S.ep = id; S.season = ep.season; S.scene = ep.start; S.epLog = []; S.epRolls = []; S.hubs = {}; S.hub = null; S.marked = {}; delete S.pending;
    delete S.flags._failxp;
    if (!firstEp) S.injuries = S.injuries.map(i => Object.assign({}, i, { heal: (i.heal || 1) - 1 })).filter(i => i.heal > 0);
    S.pools.nerve = EH.maxPool(S, 'nerve') - (S.sleepDebt >= 6 ? 1 : 0);
    const snap = EH.clone(S); delete snap.epStart; S.epStart = snap;
    TRAIL = [];
    save();
    buildStage();
    const lines = previously(ep);
    const go = () => { if (!$('#log')) return; if (S.settings.sound) Snd.startHum(); goto(ep.start); };
    if (lines.length) playPreviously(lines, go); else go();
  }
  function previously(ep) {
    const g = EH.api(S);
    if (ep.previously) return ep.previously(g) || [];
    const prior = S.recap.filter(r => r.ep !== ep.id);
    return prior.slice(-6).map(r => r.t);
  }
  function goto(id) {
    const ep = episode();
    if (id === '@hub') id = S.hub;
    if (!id) { console.warn('No target'); return; }
    const sc = ep.scenes[id];
    if (!sc) { console.error('Missing scene', id); toast('Missing scene: ' + id); return; }
    S.scene = id;
    if (sc.card && sc.card.kind === 'title') {
      S.scene = sc.next; save();
      playTitle(ep, () => { TRAIL.push('<div class="card cold"><span class="k">— Main Titles —</span></div>'); $('#log').appendChild(el('div', 'card cold', '<span class="k">— Main Titles —</span>')); goto(sc.next); });
      return;
    }
    renderScene(id, false);
  }

  function runEnter(id, sc, g) {
    const key = S.ep + ':' + id;
    if (sc.clock) Object.assign(S.clock, sc.clock);
    if (sc.enter && (!S.entered[key] || sc.repeat)) { sc.enter(g); }
    S.entered[key] = true;
  }

  function renderScene(id, resumed) {
    const ep = episode(); const sc = ep.scenes[id];
    const log = $('#log');
    log.querySelectorAll('.scene.cur').forEach(n => n.classList.replace('cur', 'past'));
    const notes = [];
    const g = EH.api(S, notes);
    if (!resumed) runEnter(id, sc, g); else if (sc.clock) Object.assign(S.clock, sc.clock);
    const box = el('section', 'scene cur'); box.dataset.id = id;
    if (sc.card) box.appendChild(cardEl(sc.card));
    const hasText = sc.text || sc.loc;
    if (hasText) {
      const body = el('div', sc.night ? 'panel-night' : '');
      if (sc.loc) body.appendChild(el('div', 'slug', '<span>' + esc(sc.loc) + '</span>' + (sc.clock ? '<span class="t">' + esc([sc.clock.day, sc.clock.date, sc.clock.time].filter(Boolean).join(' · ')) + '</span>' : '')));
      const pr = el('div', 'prose'); pr.innerHTML = EH.markup(EH.text(sc, g)); body.appendChild(pr);
      box.appendChild(body);
    }
    if (notes.length) box.appendChild(notesEl(notes));
    log.appendChild(box);
    if (sc.card && !resumed) Snd.play(sc.card.kind === 'act' ? 'sting' : sc.card.kind === 'tag' ? 'sting' : '');
    if (sc.sfx && !resumed) Snd.play(sc.sfx);
    if (sc.hub) renderHub(id, sc, box);
    else renderChoices(id, sc, box);
    renderMast();
    save();
    if (!resumed) box.scrollIntoView({ behavior: S.settings.motion ? 'smooth' : 'auto', block: 'start' });
    else box.scrollIntoView({ block: 'start' });
  }
  function cardEl(c) {
    if (c.kind === 'cold') return el('div', 'card cold', '<span class="rec"></span><span class="k">Cold Open</span>');
    const k = c.kind === 'tag' ? 'Tag' : c.label || '';
    const n = el('div', 'card' + (c.kind === 'tag' ? ' tag-card' : ''), '<div class="k">' + esc(k) + '</div>' + (c.title ? '<div class="h">' + esc(c.title) + '</div>' : ''));
    return n;
  }
  function notesEl(notes) {
    const w = el('div', 'notes');
    notes.forEach(n => {
      const cls = n.kind === 'fact' ? 'fact' : n.kind === 'heat' ? 'heat' : n.dir > 0 ? 'up' : n.dir < 0 ? 'down' : '';
      w.appendChild(el('span', 'chip ' + cls, esc(n.text)));
    });
    return w;
  }

  /* ---------- choices ---------- */
  function lockReason(ch, g) {
    if (ch.lock) { const r = ch.lock(g); if (r) return r; }
    if (ch.cost) {
      if (ch.cost.cash && S.money.cash < ch.cost.cash) return 'Needs $' + ch.cost.cash + ' cash';
      for (const p of ['stamina', 'focus', 'nerve']) if (ch.cost[p] && S.pools[p] < ch.cost[p]) return 'Needs ' + ch.cost[p] + ' ' + p;
    }
    const n = ch.need; if (!n) { if (ch.slip) { if (!g.has('slip')) return 'You can\'t do that. Not yet.'; if (S.pools.focus < 2) return 'Needs 2 Focus'; } return null; }
    if (n.attr) for (const k in n.attr) if (S.attrs[k] < n.attr[k]) return 'Needs ' + EH.ATTR_NAMES[k] + ' ' + n.attr[k];
    if (n.skill) for (const k in n.skill) if ((S.skills[k] || 0) < n.skill[k]) return 'Needs ' + EH.SKILLS[k] + ' ' + n.skill[k];
    if (n.cash && S.money.cash < n.cash) return 'Needs $' + n.cash + ' cash';
    if (n.focus && S.pools.focus < n.focus) return 'Needs ' + n.focus + ' Focus';
    if (n.stamina && S.pools.stamina < n.stamina) return 'Needs ' + n.stamina + ' Stamina';
    if (n.nerve && S.pools.nerve < n.nerve) return 'Needs ' + n.nerve + ' Nerve';
    if (ch.slip) { if (!g.has('slip')) return 'You can\'t do that. Not yet.'; if (S.pools.focus < 2) return 'Needs 2 Focus'; }
    return null;
  }
  function checkTags(c) {
    const out = [];
    const calc = EH.checkCalc(S, c);
    if (c.kind === 'pool') {
      out.push('<span class="tag pool">d10 Pool · ' + esc(EH.ATTR_NAMES[c.attr] + (c.skill ? ' + ' + EH.SKILLS[c.skill] : '')) + '</span>');
      out.push('<span class="tag cost">' + Math.max(1, calc.base) + 'd10 vs ' + c.diff + '</span>');
    } else if (c.kind === 'move') {
      out.push('<span class="tag move">2d6 · ' + esc(c.move || 'Move') + '</span>');
      out.push('<span class="tag cost">' + esc(EH.ATTR_NAMES[c.attr] + (c.skill ? ' + ' + EH.SKILLS[c.skill] : '')) + ' ' + (calc.base >= 0 ? '+' : '') + calc.base + '</span>');
    } else {
      out.push('<span class="tag d20">d20 · ' + esc(EH.ATTR_NAMES[c.attr] + (c.skill ? ' + ' + EH.SKILLS[c.skill] : '')) + '</span>');
      out.push('<span class="tag cost">' + (calc.base >= 0 ? '+' : '') + calc.base + ' vs DC ' + c.dc + '</span>');
    }
    const p = EH.successChance(c, c.kind === 'pool' ? Math.max(1, calc.base) : calc.base);
    out.push('<span class="tag odds">≈' + Math.round(p * 100) + '%</span>');
    return out.join('');
  }
  function renderChoices(id, sc, box) {
    const g = EH.api(S);
    const wrap = el('div', 'choices');
    const list = (sc.choices || []).filter(ch => !ch.if || ch.if(g));
    if (sc.end) {
      const b = el('button', 'choice cont', 'End of Episode');
      b.onclick = () => finishScene(box, null, () => showEndCard(false));
      wrap.appendChild(b);
    } else if (!list.length) {
      const b = el('button', 'choice cont', 'Continue');
      b.onclick = () => { if (busy) return; finishScene(box, null, () => goto(typeof sc.next === 'function' ? sc.next(g) : sc.next)); };
      wrap.appendChild(b);
    } else {
      list.forEach(ch => {
        const lock = lockReason(ch, g);
        const meta = [];
        if (ch.check) meta.push(checkTags(ch.check));
        if (ch.slip) meta.push('<span class="tag slip">Slip · 2 Focus · +1 Drift</span>');
        if (ch.tag) meta.push('<span class="tag">' + esc(ch.tag) + '</span>');
        if (ch.cost) Object.keys(ch.cost).forEach(k => meta.push('<span class="tag cost">' + (k === 'cash' ? '$' + ch.cost[k] : ch.cost[k] + ' ' + k) + '</span>'));
        const b = el('button', 'choice', '<span class="ct">' + EH.inline(typeof ch.text === 'function' ? ch.text(g) : ch.text) + '</span>' + (meta.length ? '<span class="meta">' + meta.join('') + '</span>' : '') + (lock ? '<span class="lock">' + esc(lock) + '</span>' : ''));
        if (lock) b.disabled = true;
        b.onclick = () => { if (!busy) choose(id, sc, ch, box); };
        wrap.appendChild(b);
      });
    }
    box.appendChild(wrap);
    if (S.pending && S.pending.scene === id) {
      const ch = (sc.choices || [])[S.pending.idx];
      if (ch && ch.check) { const res = S.pending.res; setTimeout(() => choose(id, sc, ch, box, res), 0); }
      else delete S.pending;
    }
  }
  function finishScene(box, choiceText, then) {
    const c = $('.choices', box); if (c) c.remove();
    if (choiceText) box.appendChild(el('div', 'choice-made', '▸ <b>' + EH.inline(choiceText) + '</b>'));
    TRAIL.push(box.outerHTML.replace(' cur', ' past'));
    then();
  }
  function choose(id, sc, ch, box, preset) {
    busy = true;
    const notes = []; const g = EH.api(S, notes);
    const txt = typeof ch.text === 'function' ? ch.text(g) : ch.text;
    const entry = { ep: S.ep, scene: id, choice: txt.replace(/<[^>]+>/g, ''), t: Date.now() };
    const c = $('.choices', box); if (c) c.remove();
    box.appendChild(el('div', 'choice-made', '▸ <b>' + EH.inline(txt) + '</b>'));
    if (!preset) {
      if (ch.cost) { if (ch.cost.cash) g.money(-ch.cost.cash); ['stamina', 'focus', 'nerve'].forEach(p => { if (ch.cost[p]) g.pool(p, -ch.cost[p]); }); }
      if (ch.slip) { S.pools.focus = Math.max(0, S.pools.focus - 2); g.drift(1); g.mastery(2); Snd.play('whoosh'); }
    }
    const after = (target, res) => {
      try {
        if (res) entry.roll = { label: ch.check.label || '', kind: res.kind, dice: res.dice, tier: res.tier, nudged: !!res.nudged, rewound: !!res.rewound };
        S.epLog.push(entry);
        delete S.pending;
        if (notes.length) box.appendChild(notesEl(notes));
        TRAIL.push(box.outerHTML.replace(' cur', ' past'));
      } finally { busy = false; }
      save();
      if (target === '@end') return showEndCard(false);
      goto(target);
    };
    const resolve = res => {
      try {
        g.last = res;
        const k = ch.check;
        if (k.skill) S.marked[k.skill] = true;
        box.appendChild(rollRec(k, res));
        // Failing forward: a missed roll still teaches you something (max 2 XP per episode).
        if (!EH.isGood(res.tier) && k.skill && (S.flags._failxp || 0) < 2) { S.flags._failxp = (S.flags._failxp || 0) + 1; g.xp(1); }
        // Lies build Suspicion automatically when the check names who is being lied to.
        if (k.liesTo) k.liesTo.forEach(w => g.heat(w, { strong: 1, weak: 2, miss: 3 }[res.tier] || 0));
        if (ch.fx) ch.fx(g, res.tier, res);
        if (k.fx && k.fx[res.tier]) k.fx[res.tier](g, res);
        S.epRolls.push({ ep: S.ep, scene: id, label: k.label || '', kind: res.kind, dice: res.dice, tier: res.tier, mod: res.mod, s: res.s, pushes: res.pushes || null, nudged: !!res.nudged, rewound: !!res.rewound });
        after(EH.route(k.on, res.tier) || ch.go, res);
      } catch (e) { busy = false; console.error(e); toast('Something broke: ' + e.message); }
    };
    if (ch.check) {
      if (preset) { resolve(preset); return; }
      const idx = (sc.choices || []).indexOf(ch);
      save();
      openTray(ch.check, resolve, res => { S.pending = { scene: id, idx, res: EH.clone(res) }; save(); });
    } else {
      S.lastRoll = null;
      try { if (ch.fx) ch.fx(g); } catch (e) { busy = false; console.error(e); toast('Something broke: ' + e.message); return; }
      after(typeof ch.go === 'function' ? ch.go(g) : ch.go);
    }
  }
  function rollRec(c, res) {
    const w = el('div', 'rollrec');
    const dice = res.dice.map((v, i) => {
      let cls = 'mini-die';
      if (res.gold && res.gold.includes(i)) cls += ' gold';
      else if (res.kind === 'pool') cls += v === 10 ? ' dbl' : v >= 7 ? ' hit' : v === 1 ? ' one' : '';
      else if (res.kind === 'd20') cls += v === 20 ? ' dbl' : v === 1 ? ' one' : '';
      return '<span class="' + cls + '">' + v + '</span>';
    }).join('');
    const tot = res.kind === 'pool' ? res.s + ' succ.' : '= ' + res.total;
    w.innerHTML = '<span>' + esc(c.label || 'Roll') + '</span>' + dice + '<span>' + tot + '</span><span class="tier">' + esc(EH.TIER_NAMES[res.tier]) + '</span>' + (res.rewound ? '<span class="chip">◀◀ Rewound</span>' : '');
    return w;
  }

  /* ---------- hubs ---------- */
  function renderHub(id, sc, box) {
    const H = sc.hub; const g = EH.api(S);
    const st = S.hubs[id] || (S.hubs[id] = { left: H.slots, used: [] });
    S.hub = id;
    const wrap = el('div', 'hub');
    const pips = Array.from({ length: H.slots }, (_, i) => '<span class="slotpip' + (i < st.left ? ' on' : '') + '"></span>').join('');
    wrap.innerHTML = '<h3>' + esc(H.label) + '</h3><div class="slots">' + pips + '<span>' + st.left + ' of ' + H.slots + ' time slots left</span></div>' + (H.blurb ? '<div class="prose"><p>' + EH.inline(H.blurb) + '</p></div>' : '');
    const grid = el('div', 'hub-grid');
    const opts = H.options.filter(o => !st.used.includes(o.id) && (!o.if || o.if(g)));
    const avail = opts.filter(o => (o.cost || 1) <= st.left);
    opts.forEach(o => {
      const cost = o.cost || 1;
      const lock = cost > st.left ? 'Not enough time' : null;
      const b = el('button', 'choice', '<span class="ct">' + EH.inline(o.text) + '</span><span class="meta"><span class="tag cost">' + cost + ' slot' + (cost > 1 ? 's' : '') + '</span>' + (o.tag ? '<span class="tag">' + esc(o.tag) + '</span>' : '') + '</span>' + (lock ? '<span class="lock">' + lock + '</span>' : ''));
      if (lock) b.disabled = true;
      b.onclick = () => {
        if (busy) return;
        st.used.push(o.id); st.left -= cost;
        S.flags['did_' + o.id] = true;
        S.epLog.push({ ep: S.ep, scene: id, choice: o.text, t: Date.now(), hub: true });
        finishScene(box, o.text, () => goto(o.go));
      };
      grid.appendChild(b);
    });
    wrap.appendChild(grid);
    box.appendChild(wrap);
    const done = el('div', 'choices');
    if (!avail.length || H.canEnd) {
      const b = el('button', 'choice cont', avail.length ? esc(H.endLabel || 'Done for now') : 'Continue');
      b.onclick = () => {
        if (busy) return;
        H.options.forEach(o => { if (!st.used.includes(o.id) && (!o.if || o.if(g))) S.flags['skipped_' + o.id] = true; });
        finishScene(box, null, () => goto(H.done));
      };
      done.appendChild(b);
    }
    box.appendChild(done);
  }

  /* ================= Dice tray ================= */
  function openTray(c, cb, onRolled) {
    const calc = EH.checkCalc(S, c);
    const g = EH.api(S);
    const state = { push: false, burst: false, grit: false, focus: false };
    const wrap = el('div', 'tray-wrap'); wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true');
    const kindLbl = c.kind === 'pool' ? 'd10 Pool · Difficulty ' + c.diff : c.kind === 'move' ? '2d6 Move · ' + (c.move || '') : 'd20 Check · DC ' + c.dc;
    wrap.innerHTML = '<div class="tray"><div class="hd"><span class="lbl">' + esc(c.label || 'Roll') + '</span><span class="kind">' + esc(kindLbl) + '</span></div><div class="bd"><div class="calc" id="calc"></div><div id="oddsBox"></div><div class="pushes" id="pushes"></div><div class="dicefield" id="field" aria-live="polite"></div><div id="verdict"></div></div><div class="ft" id="tft"></div></div>';
    document.body.appendChild(wrap);
    const mod = () => {
      let m = calc.base;
      if (state.push) m += c.kind === 'd20' ? 2 : 1;
      if (state.burst) m += 2;
      if (state.focus) m += 2;
      return c.kind === 'pool' ? Math.max(1, m) : m;
    };
    const drawCalc = () => {
      const rows = calc.rows.slice();
      if (state.push) rows.push(['Push (1 Nerve)', c.kind === 'd20' ? 2 : 1]);
      if (state.burst) rows.push(['Burst (1 Stamina)', 2]);
      if (state.focus) rows.push(['Concentrate (1 Focus)', 2]);
      $('#calc', wrap).innerHTML = rows.map(r => '<div class="r"><span>' + esc(r[0]) + '</span><span class="' + (r[1] < 0 ? 'neg' : 'pos') + '">' + (r[1] >= 0 ? '+' : '') + r[1] + '</span></div>').join('') +
        (state.grit ? '<div class="r"><span>Dig Deep (1 Stamina)</span><span class="pos">reroll 1s</span></div>' : '') +
        '<div class="r tot"><span>' + (c.kind === 'pool' ? 'Dice' : 'Modifier') + '</span><span>' + (c.kind === 'pool' ? mod() + ' dice' : (mod() >= 0 ? '+' : '') + mod()) + '</span></div>';
      const o = EH.odds(c, mod());
      const pc = v => Math.round(v * 100);
      let bar, leg;
      if (c.kind === 'move') { bar = '<span class="o-succ" style="width:' + pc(o.success) + '%"></span><span class="o-part" style="width:' + pc(o.partial) + '%"></span>'; leg = '<span><i style="background:var(--cyan)"></i>Strong ' + pc(o.success) + '%</span><span><i style="background:var(--yellow)"></i>Weak ' + pc(o.partial) + '%</span><span><i></i>Miss ' + pc(o.fail) + '%</span>'; }
      else if (c.kind === 'pool') { bar = '<span class="o-crit" style="width:' + pc(o.crit) + '%"></span><span class="o-succ" style="width:' + pc(o.success) + '%"></span><span class="o-part" style="width:' + pc(o.partial) + '%"></span>'; leg = '<span><i style="background:var(--magenta)"></i>Crit ' + pc(o.crit) + '%</span><span><i style="background:var(--cyan)"></i>Success ' + pc(o.success) + '%</span><span><i style="background:var(--yellow)"></i>Partial ' + pc(o.partial) + '%</span><span><i></i>Fail ' + pc(o.fail) + '%</span>'; }
      else { bar = '<span class="o-crit" style="width:' + pc(o.crit) + '%"></span><span class="o-succ" style="width:' + pc(o.success) + '%"></span>'; leg = '<span><i style="background:var(--cyan)"></i>Pass ' + pc(o.crit + o.success) + '%</span><span><i></i>Fail ' + pc(o.fail) + '%</span>'; }
      $('#oddsBox', wrap).innerHTML = '<div class="oddsbar">' + bar + '</div><div class="oddsleg">' + leg + (c.forceRewind ? '<span>· something else may happen</span>' : '') + '</div>';
    };
    const pushes = $('#pushes', wrap);
    const keys = { push: 'nerve', burst: 'stamina', grit: 'stamina', focus: 'focus' };
    const btns = {};
    const canAfford = () => { const need = { stamina: 0, focus: 0, nerve: 0 }; Object.keys(state).forEach(k => { if (state[k]) need[keys[k]]++; }); return need; };
    const refresh = () => {
      const need = canAfford();
      Object.keys(btns).forEach(k => { const p = keys[k]; btns[k].disabled = !state[k] && S.pools[p] < need[p] + 1; });
    };
    const mkPush = (key, title, sub) => {
      const b = el('button', 'push', esc(title) + '<small>' + esc(sub) + '</small>'); b.setAttribute('aria-pressed', 'false');
      b.onclick = () => { state[key] = !state[key]; b.setAttribute('aria-pressed', state[key] ? 'true' : 'false'); drawCalc(); refresh(); };
      btns[key] = b; pushes.appendChild(b);
    };
    mkPush('push', 'Push', 'Spend 1 Nerve · ' + (c.kind === 'pool' ? '+1 die' : c.kind === 'move' ? '+1' : '+2'));
    if (c.kind === 'pool' && c.power && g.has('burst')) mkPush('burst', 'Burst', 'Spend 1 Stamina · +2 dice');
    if (c.kind === 'pool' && (c.attr === 'body' || c.attr === 'reflex')) mkPush('grit', 'Dig Deep', 'Spend 1 Stamina · reroll every 1');
    if (c.kind === 'd20') mkPush('focus', 'Concentrate', 'Spend 1 Focus · +2');
    refresh(); drawCalc();
    const ft = $('#tft', wrap);
    const rollBtn = el('button', 'btn primary', 'Roll'); ft.appendChild(rollBtn);
    rollBtn.focus();
    rollBtn.onclick = () => {
      rollBtn.remove(); pushes.querySelectorAll('button').forEach(b => b.disabled = true);
      if (state.push) S.pools.nerve -= 1;
      if (state.burst) { S.pools.stamina -= 1; EH.api(S).mastery(1); }
      if (state.grit) S.pools.stamina -= 1;
      if (state.focus) S.pools.focus -= 1;
      const m = mod();
      const res = EH.roll(c, m); res.pushes = { push: state.push, burst: state.burst, grit: state.grit, focus: state.focus };
      if (state.grit) { res.dice = res.dice.map(v => v === 1 ? 1 + Math.floor(Math.random() * 10) : v); const p = res.pushes; Object.assign(res, EH.scorePool(res.dice, c.diff)); res.pushes = p; }
      if (onRolled) onRolled(res);
      animateDice(wrap, c, res, () => afterRoll(wrap, c, res, m, cb, onRolled));
    };
  }
  function dieCls(c, res, v, i) {
    let cls = 'die' + (c.kind === 'move' ? ' d6' : c.kind === 'd20' ? ' d20' : '');
    if (res.gold && res.gold.includes(i)) return cls + ' gold';
    if (c.kind === 'pool') cls += v === 10 ? ' dbl' : v >= 7 ? ' hit' : v === 1 ? ' one' : '';
    if (c.kind === 'd20') cls += v === 20 ? ' dbl' : v === 1 ? ' one' : '';
    return cls;
  }
  function animateDice(wrap, c, res, done) {
    const field = $('#field', wrap); field.innerHTML = '';
    const faces = c.kind === 'pool' ? 10 : c.kind === 'move' ? 6 : 20;
    const nodes = res.dice.map(() => { const n = el('div', 'die roll' + (c.kind === 'move' ? ' d6' : c.kind === 'd20' ? ' d20' : ''), '?'); field.appendChild(n); return n; });
    Snd.play('dice');
    const reduce = !S.settings.motion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticks = 0; const max = reduce ? 1 : 9;
    const iv = setInterval(() => {
      ticks++;
      nodes.forEach(n => n.textContent = 1 + Math.floor(Math.random() * faces));
      if (ticks >= max) {
        clearInterval(iv);
        nodes.forEach((n, i) => { n.className = dieCls(c, res, res.dice[i], i); n.textContent = res.dice[i]; });
        done();
      }
    }, 70);
  }
  function showVerdict(wrap, c, res, quiet) {
    const v = $('#verdict', wrap);
    const sm = res.kind === 'pool' ? res.s + ' success' + (res.s === 1 ? '' : 'es') + ' vs ' + res.diff : 'Total ' + res.total + (res.kind === 'd20' ? ' vs DC ' + res.dc : '');
    v.innerHTML = '<div class="verdict"><div class="big ' + res.tier + '">' + esc(EH.TIER_NAMES[res.tier]) + '</div><div class="sm">' + esc(sm) + '</div></div>';
    if (!quiet) Snd.play(EH.isGood(res.tier) ? 'success' : 'fail');
  }
  function afterRoll(wrap, c, res, m, cb, onRolled) {
    const nudged = EH.tryNudge(S, c, res);
    if (onRolled) onRolled(res);
    const field = $('#field', wrap);
    const mustForce = () => c.forceRewind && c.kind === 'pool' && !res.rewound && !EH.isClean(res.tier);
    const forced = () => {
      showVerdict(wrap, c, res, true);
      setTimeout(() => {
        S.drift = Math.min(10, S.drift + 2); S.hidden.revenant_drift += 1;
        doRewind(wrap, c, res, m + 2, cb, true, onRolled);
      }, 1100);
    };
    const finish = () => {
      showVerdict(wrap, c, res);
      const ft = $('#tft', wrap); ft.innerHTML = '';
      const canRewind = c.kind === 'pool' && !res.rewound && !EH.isClean(res.tier) && EH.api(S).has('rewind') && S.pools.focus >= 3 && !c.noRewind;
      if (canRewind) {
        const rb = el('button', 'btn', '◀◀ Rewind · 3 Focus · +2 Drift');
        rb.onclick = () => { S.pools.focus -= 3; EH.api(S).drift(2); doRewind(wrap, c, res, m, cb, false, onRolled); };
        ft.appendChild(rb);
      }
      const ok = el('button', 'btn primary', 'Continue');
      ok.onclick = () => { wrap.remove(); renderMast(); cb(res); };
      ft.appendChild(ok); ok.focus();
    };
    if (nudged) {
      setTimeout(() => {
        res.gold.forEach(i => { const n = field.children[i]; n.className = dieCls(c, res, res.dice[i], i); n.textContent = res.dice[i]; n.title = '?'; });
        Snd.play('gold');
        mustForce() ? forced() : finish();
      }, 650);
    } else if (mustForce()) forced();
    else finish();
  }
  function doRewind(wrap, c, res, m, cb, forced, onRolled) {
    const tray = $('.tray', wrap);
    tray.classList.add('rewinding'); Snd.play('rewind');
    $('#verdict', wrap).innerHTML = '<div class="rewtext">◀◀ ' + (forced ? 'NO. AGAIN.' : 'REWIND') + '</div>';
    $('#tft', wrap).innerHTML = '';
    setTimeout(() => {
      tray.classList.remove('rewinding');
      const p = res.pushes;
      const r2 = EH.roll(c, m); r2.rewound = true; r2.forced = !!forced; r2.pushes = p;
      Object.keys(res).forEach(k => delete res[k]); Object.assign(res, r2);
      if (onRolled) onRolled(res);
      animateDice(wrap, c, res, () => afterRoll(wrap, c, res, m, cb, onRolled));
    }, 1150);
  }

  /* ================= Overlays ================= */
  function playTitle(ep, done) {
    Snd.play('title');
    const o = el('div', 'overlay'); o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Main titles');
    const seasonWords = ['', 'Season One', 'Season Two', 'Season Three', 'Season Four', 'Season Five', 'Season Six', 'Season Seven', 'Season Eight'];
    o.innerHTML = '<div class="seq"><div class="dots"></div><div class="ring"></div><div class="credit" id="cr"></div><div class="ttl">The Event<br>Horizon</div><div class="stamp">' + esc(seasonWords[ep.season] || 'Season ' + ep.season) + '</div></div>';
    const skip = el('button', 'skip', 'Skip titles'); o.appendChild(skip);
    document.body.appendChild(o);
    const cast = (ep.cast || []).map(id => EH.CAST[id] && EH.CAST[id].full).filter(Boolean);
    const cr = $('#cr', o);
    // Each name holds long enough to read (about 1.4s fully visible), then the title lands.
    const per = 1900, lead = 700, titleLen = 5200;
    const creditsEnd = lead + cast.length * per, total = creditsEnd + titleLen;
    $('.ring', o).style.animationDuration = total + 'ms';
    $('.dots', o).style.animationDuration = total + 'ms';
    [$('.ttl', o), $('.stamp', o)].forEach(n => { n.style.animationDuration = titleLen + 'ms'; n.style.animationDelay = creditsEnd + 'ms'; n.style.animationFillMode = 'both'; });
    const timers = [];
    cast.forEach((nm, k) => timers.push(setTimeout(() => {
      cr.style.transition = 'none'; cr.style.opacity = 0; cr.innerHTML = 'Starring<b>' + esc(nm) + '</b>';
      requestAnimationFrame(() => requestAnimationFrame(() => { cr.style.transition = 'opacity .4s'; cr.style.opacity = 1; }));
      timers.push(setTimeout(() => { cr.style.opacity = 0; }, per - 400));
    }, lead + k * per)));
    timers.push(setTimeout(() => Snd.play('title'), Math.max(0, creditsEnd - 1500)));
    let closed = false;
    const end = () => { if (closed) return; closed = true; timers.forEach(clearTimeout); o.remove(); done(); };
    skip.onclick = end; skip.focus();
    timers.push(setTimeout(end, total + 300));
  }
  function playPreviously(lines, done) {
    const o = el('div', 'overlay');
    const p = el('div', 'prev', '<div class="k">Previously on The Event Horizon</div>');
    lines.forEach((t, i) => { const ln = el('div', 'ln', EH.inline(t)); ln.style.animationDelay = (0.4 + i * 1.1) + 's'; p.appendChild(ln); });
    o.appendChild(p);
    const skip = el('button', 'skip', 'Continue'); o.appendChild(skip);
    document.body.appendChild(o);
    let closed = false; const end = () => { if (closed) return; closed = true; o.remove(); done(); };
    skip.onclick = end;
    setTimeout(end, 1800 + lines.length * 1700);
  }

  /* ================= End of episode ================= */
  function summarize() {
    const A = S.epStart || S, out = { bonds: [], money: S.money.cash + S.money.bank - (A.money.cash + A.money.bank), choices: S.epLog.length, rolls: S.epRolls.length };
    Object.keys(S.bonds).forEach(id => {
      const b = S.bonds[id], a = (A.bonds && A.bonds[id]) || { trust: 0, affection: 0, respect: 0, tension: 0 };
      const d = { trust: b.trust - a.trust, affection: b.affection - a.affection, respect: b.respect - a.respect, tension: b.tension - a.tension };
      if (Object.values(d).some(v => v)) out.bonds.push({ id, d, now: { trust: b.trust, affection: b.affection, respect: b.respect, tension: b.tension } });
    });
    out.crits = S.epRolls.filter(r => EH.isClean(r.tier)).length;
    out.fails = S.epRolls.filter(r => !EH.isGood(r.tier)).length;
    return out;
  }
  function showEndCard(revisit) {
    const ep = episode();
    if (!revisit) {
      const g = EH.api(S);
      if (!S.done.includes(S.ep)) {
        g.xp(ep.xp ?? 3);
        if (ep.onEnd) ep.onEnd(g);
        const sum = summarize();
        S.eps[S.ep] = { title: ep.title, finished: new Date().toISOString(), summary: sum };
        S.done.push(S.ep);
        clearTimeout(dbTimer); save(); clearTimeout(dbTimer); pushDb(); pushEpisodeDoc(S.ep, sum);
      }
    }
    closeDrawer();
    $('#mast').hidden = false; renderMast();
    const a = app(); a.innerHTML = '';
    const st = el('main', 'stage'); a.appendChild(st);
    const sum = (S.eps[S.ep] && S.eps[S.ep].summary) || summarize();
    const box = el('div', 'endcard');
    box.innerHTML = '<div class="card"><div class="k">' + esc(epCode(ep)) + ' · End of Episode</div><div class="h">' + esc(ep.title) + '</div></div>' +
      '<div class="stat-row">' +
      '<div class="stat"><div class="n">Choices made</div><div class="v">' + sum.choices + '</div></div>' +
      '<div class="stat"><div class="n">Rolls · successes</div><div class="v">' + sum.rolls + ' · ' + sum.crits + '</div></div>' +
      '<div class="stat"><div class="n">Net money</div><div class="v">' + (sum.money < 0 ? '−$' + (-sum.money) : '+$' + sum.money) + '</div></div>' +
      '<div class="stat"><div class="n">XP to spend</div><div class="v">' + (S.xp) + '</div></div></div>';
    st.appendChild(box);
    if (sum.bonds.length) {
      const sec = el('div', 'sec', '<h4>Where you stand</h4>');
      const list = el('div', 'notelist');
      sum.bonds.forEach(b => {
        const nm = EH.CAST[b.id] ? EH.CAST[b.id].full : b.id;
        const parts = Object.keys(b.d).filter(k => b.d[k]).map(k => k[0].toUpperCase() + k.slice(1) + ' ' + (b.d[k] > 0 ? '+' : '') + b.d[k]);
        list.appendChild(el('div', 'it', '<small>' + esc(nm) + '</small>' + esc(parts.join(' · '))));
      });
      sec.appendChild(list); box.appendChild(sec);
    }
    if (ep.polls) {
      const g = EH.api(S);
      const sec = el('div', 'sec', '<h4>How viewers chose</h4>');
      ep.polls.forEach(p => {
        const q = el('div', 'pct', '<div class="q">' + esc(p.q) + '</div>');
        p.opts.forEach(o => {
          const mine = o.if(g);
          q.appendChild(el('div', 'a' + (mine ? ' mine' : ''), '<span>' + (mine ? '▸ ' : '') + esc(o.label) + '</span><span class="mono">' + o.pct + '%</span><div class="bar"><span style="width:' + o.pct + '%"></span></div>'));
        });
        sec.appendChild(q);
      });
      box.appendChild(sec);
    }
    box.appendChild(advancementEl());
    const nextId = EH.order[EH.order.indexOf(S.ep) + 1];
    const nx = el('div', 'sec');
    if (nextId && EH.episodes[nextId]) {
      const ne = EH.episodes[nextId];
      nx.innerHTML = '<h4>Next episode</h4>';
      const b = el('button', 'choice', '<span class="ct">' + esc(epCode(ne) + ' · ' + ne.title) + '</span><span class="meta"><span class="tag">Play next</span></span>');
      b.onclick = () => startEpisode(nextId);
      nx.appendChild(b);
    } else {
      nx.innerHTML = '<h4>Next episode · in production</h4><div class="advisory">The next episode is written from what you just did. Your choices, rolls, and who knows what are ' +
        (syncState === 'ok' ? '<b>synced</b>' : 'saved on this device') + '. When you\'re ready, tell Claude: <b>"I finished ' + esc(epCode(ep)) + '."</b> When it\'s published, it will appear here.</div>';
    }
    box.appendChild(nx);
    window.scrollTo(0, 0);
  }
  function advancementEl() {
    const sec = el('div', 'sec', '<h4>Advancement</h4>');
    const box = el('div', 'adv');
    const draw = () => {
      box.innerHTML = '<div class="mono" style="font-size:.74rem">XP available: <b>' + S.xp + '</b>. You can raise skills you used this episode (marked ●). Cost: new rating × 2 XP.</div>';
      const marked = Object.keys(S.marked).filter(k => S.marked[k]);
      if (!marked.length) box.appendChild(el('div', 'mono', 'No marked skills yet.'));
      marked.forEach(k => {
        const cur = S.skills[k] || 0, cost = (cur + 1) * 2;
        const r = el('div', 'r', '<span>● ' + esc(EH.SKILLS[k]) + ' ' + cur + ' → ' + (cur + 1) + '</span>');
        const b = el('button', 'btn', 'Raise · ' + cost + ' XP');
        if (S.xp < cost || cur >= 5) b.disabled = true;
        b.onclick = () => { S.xp -= cost; S.xpSpent += cost; S.skills[k] = cur + 1; S.marked[k] = false; save(); draw(); toast(EH.SKILLS[k] + ' raised to ' + (cur + 1)); };
        r.appendChild(b); box.appendChild(r);
      });
      (S.powers.slip.offered || []).forEach(n => {
        if (S.powers.slip.nodes.includes(n)) return;
        const N = EH.NODES[n];
        const r = el('div', 'r', '<span>Power · ' + esc(N.name) + ': ' + esc(N.desc) + '</span>');
        const b = el('button', 'btn', 'Learn · ' + N.xp + ' XP');
        if (S.xp < N.xp) b.disabled = true;
        b.onclick = () => { S.xp -= N.xp; S.xpSpent += N.xp; S.powers.slip.nodes.push(n); save(); draw(); toast(N.name + ' learned'); };
        r.appendChild(b); box.appendChild(r);
      });
    };
    draw(); sec.appendChild(box); return sec;
  }

  /* ================= Drawer ================= */
  function closeDrawer() { const d = $('.drawer-wrap'); if (d) d.remove(); }
  function openDrawer(tab) {
    closeDrawer();
    const w = el('div', 'drawer-wrap');
    w.innerHTML = '<aside class="drawer" role="dialog" aria-label="Character"><div class="tabs" role="tablist">' +
      ['sheet', 'bonds', 'notes', 'settings'].map(t => '<button role="tab" data-t="' + t + '" aria-selected="' + (t === tab) + '">' + { sheet: 'Sheet', bonds: 'Bonds', notes: 'Notebook', settings: 'Settings' }[t] + '</button>').join('') +
      '<button class="x" aria-label="Close">✕</button></div><div class="body" id="dbody"></div></aside>';
    document.body.appendChild(w);
    w.addEventListener('click', e => { if (e.target === w) closeDrawer(); });
    $('.x', w).onclick = closeDrawer;
    w.querySelectorAll('[data-t]').forEach(b => b.onclick = () => openDrawer(b.dataset.t));
    const body = $('#dbody', w);
    ({ sheet: drawSheet, bonds: drawBonds, notes: drawNotes, settings: drawSettings })[tab](body);
  }
  const dots5 = n => '<div class="dots5">' + [1, 2, 3, 4, 5].map(i => '<i class="' + (i <= n ? 'on' : '') + '"></i>').join('') + '</div>';
  const bar = (v, max, cls) => '<div class="bar ' + (cls || '') + '"><span style="width:' + Math.max(0, Math.min(100, v / max * 100)) + '%"></span></div>';
  function drawSheet(b) {
    b.innerHTML =
      '<div class="sec"><h4>Sam Kearney</h4><div class="mono" style="font-size:.74rem;color:var(--ink-soft)">18 · Temple University, undeclared · Cardone Hall 9-14 · Ciro\'s Pizza, delivery</div></div>' +
      '<div class="sec"><h4>Attributes</h4><div class="attrs">' + EH.ATTRS.map(k => '<div class="attr"><span class="n">' + EH.ATTR_NAMES[k] + '</span><span class="v">' + S.attrs[k] + '</span>' + dots5(S.attrs[k]) + '</div>').join('') + '</div></div>' +
      '<div class="sec"><h4>Pools</h4><div style="display:flex;flex-direction:column;gap:8px">' +
      ['stamina', 'focus', 'nerve'].map((p, i) => '<div class="meter"><div class="row"><span>' + p + '</span><span>' + S.pools[p] + ' / ' + EH.maxPool(S, p) + '</span></div>' + bar(S.pools[p], EH.maxPool(S, p), ['m', 'c', 'y'][i]) + '</div>').join('') +
      '<div class="meter"><div class="row"><span>Sleep Debt</span><span>' + S.sleepDebt + ' / 10</span></div>' + bar(S.sleepDebt, 10, 'r') + '</div>' +
      (S.powers.slip.nodes.length ? '<div class="meter"><div class="row"><span>Drift</span><span>' + S.drift + ' / 10</span></div>' + bar(S.drift, 10, 'c') + '</div>' : '') +
      '</div></div>' +
      '<div class="sec"><h4>Skills</h4><div class="skills">' + Object.keys(EH.SKILLS).map(k => '<div class="s' + (S.skills[k] ? '' : ' zero') + '"><span>' + (S.marked[k] ? '<span class="mk">●</span> ' : '') + EH.SKILLS[k] + '</span><span>' + S.skills[k] + '</span></div>').join('') + '</div>' +
      '<div class="mono" style="font-size:.66rem;color:var(--ink-faint);margin-top:6px">● marked: used this episode, can be raised at episode end.</div></div>' +
      (S.powers.slip.nodes.length ? '<div class="sec"><h4>Powers · the Slip</h4><div style="display:flex;flex-direction:column;gap:6px">' +
        Object.keys(EH.NODES).map(n => { const has = S.powers.slip.nodes.includes(n); const N = EH.NODES[n]; return '<div class="node' + (has ? '' : ' locked') + '"><b>' + (has ? N.name : '???') + '</b><span>' + (has ? N.desc : 'Locked') + '</span></div>'; }).join('') +
        '<div class="meter"><div class="row"><span>Mastery</span><span>' + S.powers.slip.mastery + ' / 100</span></div>' + bar(S.powers.slip.mastery, 100, 'm') + '</div></div></div>' : '') +
      '<div class="sec"><h4>Life</h4><dl class="kv">' +
      '<dt>Cash</dt><dd>$' + S.money.cash + '</dd><dt>Bank</dt><dd>$' + S.money.bank + '</dd>' +
      Object.keys(EH.COURSES).map(k => '<dt>' + esc(EH.COURSES[k].split(' ').slice(0, 2).join(' ')) + '</dt><dd>' + S.grades[k] + '</dd>').join('') +
      '<dt>XP</dt><dd>' + S.xp + '</dd>' +
      '<dt>Injuries</dt><dd>' + (S.injuries.length ? S.injuries.map(i => esc(i.name)).join(', ') : 'None') + '</dd></dl></div>';
  }
  function drawBonds(b) {
    const ids = Object.keys(S.bonds).filter(id => S.bonds[id].met);
    const watchers = Object.keys(S.heat).filter(id => id !== 'halcyon' && S.heat[id] > 0);
    b.innerHTML = '<div class="sec"><h4>Bonds</h4><div class="mono" style="font-size:.7rem;color:var(--ink-soft)">Trust, Affection, and Respect run −10 to +10. Tension (0–10) is unresolved friction, whatever kind it is.</div></div>';
    const list = el('div', '', ''); list.style.cssText = 'display:flex;flex-direction:column;gap:10px';
    ids.forEach(id => {
      const B = S.bonds[id], C = EH.CAST[id] || { full: id, role: '' };
      const row = (k, v, bi) => '<span>' + k + '</span>' + (bi ? '<div class="bar bi ' + (v >= 0 ? 'c' : 'r') + '"><span style="' + (v >= 0 ? 'left:50%;width:' + v * 5 + '%' : 'left:' + (50 + v * 5) + '%;width:' + (-v * 5) + '%') + '"></span></div>' : bar(v, 10, 'm')) + '<span class="num">' + (bi && v > 0 ? '+' : '') + v + '</span>';
      list.appendChild(el('div', 'bondcard', '<div class="nm"><span style="color:var(--c-' + id + ')">' + esc(C.full) + '</span><small>' + esc(C.role) + '</small></div><div class="bgrid">' +
        row('Trust', B.trust, true) + row('Affection', B.affection, true) + row('Respect', B.respect, true) + row('Tension', B.tension, false) +
        (S.heat[id] ? '<span>Suspicion</span>' + bar(S.heat[id], 10, 'y') + '<span class="num">' + S.heat[id] + '</span>' : '') + '</div>'));
    });
    if (!ids.length) list.appendChild(el('div', 'mono', 'You haven\'t met anyone yet.'));
    b.appendChild(list);
    if (watchers.length) {
      const sec = el('div', 'sec', '<h4>Suspicion</h4>');
      sec.appendChild(el('dl', 'kv', watchers.map(w => '<dt>' + esc(EH.WATCHERS[w] || (EH.CAST[w] && EH.CAST[w].full) || w) + '</dt><dd>' + S.heat[w] + ' / 10</dd>').join('')));
      b.appendChild(sec);
    }
  }
  function drawNotes(b) {
    const facts = Object.keys(S.facts).filter(k => S.facts[k].knownBy.includes('sam'));
    const secretFacts = facts.filter(k => S.facts[k].track);
    let h = '';
    if (secretFacts.length) {
      h += '<div class="sec"><h4>Who knows</h4><div class="notelist">' + secretFacts.map(k => { const F = S.facts[k]; const who = F.knownBy.filter(w => w !== 'sam' && (!F.hiddenFrom || !F.hiddenFrom.includes(w))).map(w => EH.CAST[w] ? EH.CAST[w].label : w); return '<div class="it"><small>' + esc(F.text) + '</small>' + (who.length ? esc(who.join(', ')) : 'Nobody. Just you.') + '</div>'; }).join('') + '</div></div>';
    }
    h += '<div class="sec"><h4>What you know</h4><div class="notelist">' + (facts.filter(k => !S.facts[k].track).map(k => '<div class="it">' + esc(S.facts[k].text) + '</div>').join('') || '<div class="mono">Nothing yet.</div>') + '</div></div>';
    const ep = episode();
    h += '<div class="sec"><h4>This episode</h4><div class="notelist">' + (S.epLog.filter(e => e.choice).map(e => '<div class="it"><small>' + esc((ep && ep.scenes[e.scene] && ep.scenes[e.scene].loc) || '') + '</small>' + esc(e.choice) + (e.roll ? ' <span class="mono">[' + esc(EH.TIER_NAMES[e.roll.tier]) + ']</span>' : '') + '</div>').join('') || '<div class="mono">No choices yet.</div>') + '</div></div>';
    if (S.recap.length) h += '<div class="sec"><h4>The story so far</h4><div class="notelist">' + S.recap.map(r => '<div class="it"><small>' + esc(EH.episodes[r.ep] ? epCode(EH.episodes[r.ep]) : r.ep) + '</small>' + EH.inline(r.t) + '</div>').join('') + '</div></div>';
    b.innerHTML = h;
  }
  function drawSettings(b) {
    b.innerHTML = '<div class="sec"><h4>Settings</h4></div>';
    const row = (label, ctl) => { const r = el('div', 'setrow', '<span>' + esc(label) + '</span>'); r.appendChild(ctl); b.appendChild(r); };
    const snd = el('button', 'btn', S.settings.sound ? 'On' : 'Off'); snd.onclick = () => { toggleSound(); openDrawer('settings'); }; row('Sound', snd);
    const mot = el('button', 'btn', S.settings.motion ? 'On' : 'Off'); mot.onclick = () => { S.settings.motion = !S.settings.motion; save(); openDrawer('settings'); }; row('Animation', mot);
    const sz = el('div', 'row'); sz.style.cssText = 'display:flex;gap:6px';
    [['A−', 0.92], ['A', 1], ['A+', 1.1], ['A++', 1.22]].forEach(([l, v]) => { const x = el('button', 'btn', l); if (S.settings.size === v) x.style.background = 'var(--yellow)'; x.onclick = () => { S.settings.size = v; applySize(); save(); openDrawer('settings'); }; sz.appendChild(x); });
    row('Text size', sz);
    row('Save sync', el('span', 'mono', syncState === 'ok' ? 'Synced to your account' : syncState === 'err' ? 'Sync error; saved on this device' : 'Saved on this device'));
    const rs = el('button', 'btn danger', 'Restart episode');
    rs.onclick = () => confirmBox(rs.parentNode, 'Restart this episode from the top? Everything you did in it is undone.', 'Restart', () => {
      const keep = S.settings, start = S.epStart, id = S.ep;
      if (!start) return;
      S = EH.clone(start); S.settings = keep; S.done = S.done.filter(x => x !== id); delete S.eps[id];
      startEpisode(id);
    });
    row('This episode', rs);
    const tt = el('button', 'btn', 'Title screen'); tt.onclick = () => renderTitle(); row('Menu', tt);
  }
  function applySize() { document.documentElement.style.setProperty('--fs', (1.075 * ((S && S.settings.size) || 1)) + 'rem'); }

  /* ================= Boot ================= */
  function start(data) {
    document.querySelectorAll('.tray-wrap,.overlay,.drawer-wrap').forEach(n => n.remove());
    busy = false;
    const raw = (data && data.S) ? null : lsGet(LS_KEY);
    if (data && data.S) { S = data.S; TRAIL = data.TRAIL || []; }
    else if (raw) { try { S = JSON.parse(raw); TRAIL = JSON.parse(lsGet(LS_TRAIL) || '[]'); } catch (e) { S = null; TRAIL = []; } }
    if (S && !S.settings) S.settings = { sound: false, size: 1, motion: true };
    if (S) S.settings.sound = false; // audio needs a fresh gesture each session
    applySize();
    renderTitle();
    initDb();
  }
  const H = window.claude && window.claude.hot;
  if (H && typeof H.snapshot === 'function') { try { H.snapshot(() => ({ S, TRAIL })); } catch (e) { } }
  if (H && typeof H.ready === 'function') H.ready(start); else start((H && H.data) || {});
})();
