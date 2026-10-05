/* TITHE — engine. Story runner, RPG systems, combat, hub, journal, saves. */
(function () {
'use strict';
var T = window.TITHE;
T.EPISODES = T.EPISODES || {};

var XP_TABLE = [0, 0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5300, 6800, 8600];
var MAX_LVL = 12;
var BOND_IDS = Object.keys(T.CAST).filter(function (k) { return T.CAST[k].bond; });

/* ---------- utilities ---------- */
function $(s, r) { return (r || document).querySelector(s); }
function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
function d20() { return rnd(1, 20); }
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function fmt(s) {
  s = esc(s);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
  return s.replace(/--/g, '—');
}
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

/* ---------- state ---------- */
var S;
function newState() {
  var bond = {}, i;
  for (i = 0; i < BOND_IDS.length; i++) bond[BOND_IDS[i]] = 0;
  return {
    v: 1, ep: 1, ctx: 1, node: null, mode: 'title', side: null,
    hp: 42, st: 4, lvl: 1, xp: 0, sp: 1, statPts: 0,
    stats: { might: 3, finesse: 2, grit: 3, wits: 2, presence: 1 },
    skills: {}, inv: { widow: 1, leather_jack: 1, roll_case: 1, poultice: 2, spirits: 1 },
    equip: { weapon: 'widow', armor: 'leather_jack', trinket: 'roll_case' },
    up: { weapon: 0, armor: 0, silver: 0 },
    silver: 12, wounds: [], f: {}, bond: bond, rep: { town: 0, varane: 0, lamp: 0, fen: 0 },
    q: {}, party: [], known: { cast: { ansel: 1 }, beast: {}, codex: {} }, kills: {},
    taken: {}, sideDone: {}, epDone: {}, tx: [], days: 0
  };
}

/* ---------- derived stats ---------- */
function stat(n) {
  var v = S.stats[n] || 0, it = T.ITEMS[S.equip.trinket];
  if (it && it.mods && it.mods[n]) v += it.mods[n];
  S.wounds.forEach(function (w) { var W = T.WOUNDS[w]; if (W && W.mods[n]) v += W.mods[n]; });
  return Math.max(0, v);
}
function maxHp() { return 30 + S.stats.grit * 4 + (S.lvl - 1) * (5 + Math.floor(S.stats.grit / 2)) + (S.skills.s1 ? 10 : 0); }
function maxSt() { return 3 + Math.floor(stat('grit') / 2) + (S.lvl >= 6 ? 1 : 0); }
function weapon() { return T.ITEMS[S.equip.weapon] || T.ITEMS.widow; }
function armorVal() { var a = T.ITEMS[S.equip.armor]; return (a ? a.arm : 0) + S.up.armor + (S.skills.s4 ? 1 : 0); }
function has(id, n) { return (S.inv[id] || 0) >= (n || 1); }

/* ---------- conditions ---------- */
var condCache = {};
function scope() {
  return {
    f: S.f, bond: S.bond, rep: S.rep, q: S.q, ep: S.ep, lvl: S.lvl, silver: S.silver, hp: S.hp,
    stat: stat, has: has, skill: function (id) { return !!S.skills[id]; },
    inParty: function (id) { return S.party.indexOf(id) >= 0; },
    kills: function (id) { return S.kills[id] || 0; },
    done: function (id) { return !!S.sideDone[id]; },
    wounded: function () { return S.wounds.length > 0; }
  };
}
function cond(expr) {
  if (expr == null || expr === true) return true;
  if (expr === false) return false;
  try {
    var fn = condCache[expr] || (condCache[expr] = new Function('$', 'with($){return (' + expr + ');}'));
    return !!fn(scope());
  } catch (e) { console.warn('cond error', expr, e); return false; }
}

/* ---------- effects ---------- */
function toast(msg, kind) {
  var t = el('div', 'toast ' + (kind || ''), msg);
  $('#toasts').appendChild(t);
  setTimeout(function () { t.classList.add('out'); }, 3200);
  setTimeout(function () { t.remove(); }, 3800);
}
function give(id, n) {
  n = n || 1;
  if (!T.ITEMS[id]) { console.warn('unknown item', id); return; }
  S.inv[id] = (S.inv[id] || 0) + n;
  toast('Received: ' + T.ITEMS[id].name + (n > 1 ? ' ×' + n : ''), 'item');
}
function take(id, n) {
  n = n || 1; S.inv[id] = Math.max(0, (S.inv[id] || 0) - n);
  if (!S.inv[id]) { delete S.inv[id]; ['weapon', 'armor', 'trinket'].forEach(function (k) { if (S.equip[k] === id) S.equip[k] = k === 'weapon' ? 'widow' : null; }); }
}
var XP_RATE = 0.7;
function gainXp(n) {
  if (!n) return;
  n = Math.max(1, Math.round(n * XP_RATE));
  S.xp += n; toast('+' + n + ' XP', 'xp');
  while (S.lvl < MAX_LVL && S.xp >= XP_TABLE[S.lvl + 1]) {
    S.lvl++; S.sp++; if (S.lvl % 2 === 0) S.statPts++;
    S.hp = maxHp(); S.st = maxSt();
    toast('Level ' + S.lvl + ' — open the Journal to spend your points', 'lvl');
  }
}
function fx(e) {
  if (!e) return;
  var k;
  if (e.set) for (k in e.set) S.f[k] = e.set[k];
  if (e.add) for (k in e.add) S.f[k] = (S.f[k] || 0) + e.add[k];
  if (e.bond) for (k in e.bond) {
    if (S.bond[k] == null) S.bond[k] = 0;
    S.bond[k] = clamp(S.bond[k] + e.bond[k], -5, 12);
    var nm = T.CAST[k] ? T.CAST[k].name : k;
    if (!e.quiet) toast(nm + (e.bond[k] > 0 ? ' will remember that.' : ' will not forget that.'), e.bond[k] > 0 ? 'bond' : 'bondneg');
  }
  if (e.rep) for (k in e.rep) { S.rep[k] = (S.rep[k] || 0) + e.rep[k]; }
  if (e.silver) { S.silver = Math.max(0, S.silver + e.silver); toast((e.silver > 0 ? '+' : '') + e.silver + ' silver', 'silver'); }
  if (e.give) { if (typeof e.give === 'string') give(e.give, 1); else for (k in e.give) give(k, e.give[k]); }
  if (e.take) { if (typeof e.take === 'string') take(e.take, 1); else for (k in e.take) take(k, e.take[k]); }
  if (e.equip) { var it = T.ITEMS[e.equip]; if (it && has(e.equip)) S.equip[it.type] = e.equip; }
  if (e.hp) { S.hp = clamp(S.hp + e.hp, 1, maxHp()); }
  if (e.heal) { S.hp = e.heal === 'full' ? maxHp() : clamp(S.hp + e.heal, 1, maxHp()); }
  if (e.st) S.st = clamp(S.st + e.st, 0, maxSt());
  if (e.rest) { S.hp = maxHp(); S.st = maxSt(); }
  if (e.wound && S.wounds.length < 3) { var w = e.wound === 'random' ? pick(Object.keys(T.WOUNDS)) : e.wound; if (S.wounds.indexOf(w) < 0) { S.wounds.push(w); toast('Wound: ' + T.WOUNDS[w].name, 'bad'); } }
  if (e.cure) { if (e.cure === 'all') S.wounds = []; else S.wounds.shift(); }
  if (e.party) {
    (e.party.add || []).forEach(function (p) { if (S.party.indexOf(p) < 0) { S.party.push(p); toast(T.CAST[p].name + ' joins you.', 'bond'); } });
    (e.party.remove || []).forEach(function (p) { var i = S.party.indexOf(p); if (i >= 0) S.party.splice(i, 1); });
  }
  if (e.know) {
    ['cast', 'beast', 'codex'].forEach(function (t) {
      (e.know[t] || []).forEach(function (id) {
        if (!S.known[t][id]) { S.known[t][id] = 1; if (t === 'codex') toast('Codex: ' + (T.CODEX[id] ? T.CODEX[id].title : id), 'codex'); }
      });
    });
  }
  if (e.quest) {
    (Array.isArray(e.quest) ? e.quest : [e.quest]).forEach(function (q) {
      var cur = S.q[q.id] || { title: q.title || q.id, state: 'active', notes: [], ep: S.ep };
      if (q.title) cur.title = q.title;
      var isNew = !S.q[q.id], was = cur.state;
      if (q.state) cur.state = q.state;
      if (q.note && cur.notes.indexOf(q.note) < 0) cur.notes.push(q.note);
      S.q[q.id] = cur;
      if (isNew || was !== cur.state) toast((cur.state === 'done' ? 'Quest complete: ' : cur.state === 'failed' ? 'Quest failed: ' : 'New in your journal: ') + cur.title, 'quest');
      else if (q.note) toast('Journal updated: ' + cur.title, 'quest');
    });
  }
  if (e.skill) { S.skills[e.skill] = 1; }
  if (e.xp) gainXp(e.xp);
  hud();
}

/* ---------- story rendering ---------- */
function ep() { return T.EPISODES[S.ctx]; }
function getNode(id) { var E = ep(); return E && E.nodes[id]; }
function story() { return $('#story'); }
function pushBlock(node, scroll) {
  story().appendChild(node);
  S.tx.push(node.outerHTML); if (S.tx.length > 80) S.tx.shift();
  if (scroll !== false) setTimeout(function () { node.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); }, 30);
}
function speaker(id) { return T.CAST[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), color: '#d8c7a3' }; }
function renderLine(line, wrap) {
  if (line == null) return;
  if (typeof line === 'object' && !Array.isArray(line)) {
    var ok = cond(line.if);
    var body = ok ? line.t : line.else;
    if (body == null) return;
    (Array.isArray(body) ? body : [body]).forEach(function (b) { renderLine(b, wrap); });
    return;
  }
  if (Array.isArray(line)) { line.forEach(function (b) { renderLine(b, wrap); }); return; }
  var m = /^@([a-z_]+):\s*([\s\S]*)$/.exec(line), p;
  if (m) {
    var c = speaker(m[1]);
    p = el('p', 'line dia');
    p.innerHTML = '<span class="who" style="color:' + c.color + '">' + esc(c.name) + '</span>' + fmt(m[2]);
    if (m[1] !== 'narrator' && T.CAST[m[1]] && !S.known.cast[m[1]]) S.known.cast[m[1]] = 1;
  } else if (/^~/.test(line)) {
    p = el('p', 'line dir', fmt(line.replace(/^~\s*/, '')));
  } else if (/^>/.test(line)) {
    p = el('p', 'line inner', fmt(line.replace(/^>\s*/, '')));
  } else {
    p = el('p', 'line', fmt(line));
  }
  wrap.appendChild(p);
}

function goTo(id) {
  if (id === '@end') return endEpisode();
  if (id === '@hub') return returnHub();
  var n = getNode(id);
  if (!n) { console.error('Missing node', S.ctx, id); toast('Missing scene: ' + id, 'bad'); return; }
  S.node = id;
  enterNode(n, true);
}

function enterNode(n, apply) {
  if (apply && n.fx) fx(n.fx);
  if (apply && n.route) {
    for (var i = 0; i < n.route.length; i++) if (cond(n.route[i].if)) { if (n.route[i].fx) fx(n.route[i].fx); return goTo(n.route[i].go); }
  }
  if (n.card && apply) { return showCard(n.card, function () { renderNode(n); }); }
  renderNode(n);
}

function renderNode(n) {
  var block = el('section', 'beat');
  if (n.loc) block.appendChild(el('div', 'slug', esc(n.loc)));
  var body = el('div', 'prose');
  (n.text || []).forEach(function (l) { renderLine(l, body); });
  block.appendChild(body);
  pushBlock(block);
  save('auto');
  if (n.fight) return startFight(n.fight);
  if (n.end) return choiceRow([{ t: n.endLabel || (S.mode === 'side' ? 'Return to Harrowgate' : 'End of episode'), go: S.mode === 'side' ? '@hub' : '@end' }]);
  if (n.choices) return choiceRow(n.choices, n);
  if (n.next) return choiceRow([{ t: n.nextLabel || 'Continue', go: n.next, cont: true }]);
  choiceRow([{ t: 'Continue', go: S.mode === 'side' ? '@hub' : '@end' }]);
}

function choiceLabel(c) {
  var tag = '';
  if (c.check) {
    var st = T.STATS[c.check.stat];
    tag = '<span class="tag chk">' + (st ? st.name : c.check.stat) + ' ' + c.check.dc + '</span>';
  }
  if (c.cost) tag += '<span class="tag cost">' + c.cost + ' silver</span>';
  if (c.tag) tag += '<span class="tag">' + esc(c.tag) + '</span>';
  return tag + '<span class="ct">' + fmt(c.t) + '</span>';
}

function choiceRow(list, node) {
  var box = el('div', 'choices');
  var key = S.ctx + ':' + S.node;
  var shown = 0;
  list.forEach(function (c, i) {
    if (!cond(c.if)) return;
    if (c.once && S.taken[key + ':' + i]) return;
    var b = el('button', 'choice' + (c.cont ? ' cont' : ''), choiceLabel(c));
    var locked = (c.req && !cond(c.req)) || (c.cost && S.silver < c.cost);
    if (locked) { b.disabled = true; b.classList.add('locked'); if (c.reqLabel) b.title = c.reqLabel; }
    b.onclick = function () {
      if (box.dataset.used) return; box.dataset.used = 1;
      if (c.once) S.taken[key + ':' + i] = 1;
      box.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
      b.classList.add('picked'); box.classList.add('done');
      if (!c.cont) { var echo = el('p', 'echo', '› ' + fmt(c.t)); box.after(echo); }
      if (c.cost) fx({ silver: -c.cost });
      if (c.fx) fx(c.fx);
      if (c.check) return doCheck(c.check);
      goTo(c.go);
    };
    box.appendChild(b); shown++;
  });
  if (!shown) { var b = el('button', 'choice cont', '<span class="ct">Continue</span>'); b.onclick = function () { goTo(S.mode === 'side' ? '@hub' : '@end'); }; box.appendChild(b); }
  story().appendChild(box);
  hud();
}

function checkBonus(ch) {
  var b = 0;
  if (ch.stat === 'presence' && S.skills.c2) b += 2;
  if (ch.intimidate && S.skills.c2) b += 1;
  if (ch.intimidate && S.skills.c5) b += 2;
  if (ch.uncanny && S.skills.u1) b += 2;
  if (ch.bonus) b += ch.bonus;
  return b;
}
function doCheck(ch) {
  var sv = stat(ch.stat), roll = d20(), bonus = checkBonus(ch), total = roll + sv * 2 + bonus;
  var pass = roll === 20 || (roll !== 1 && total >= ch.dc);
  var st = T.STATS[ch.stat] ? T.STATS[ch.stat].name : ch.stat;
  var r = el('div', 'roll ' + (pass ? 'pass' : 'fail'),
    '<span class="die">' + roll + '</span><span>' + st + ' check · DC ' + ch.dc + ' · ' + roll + ' + ' + (sv * 2) + (bonus ? ' + ' + bonus : '') + ' = <b>' + total + '</b></span><span class="res">' + (pass ? 'Success' : 'Failure') + '</span>');
  story().appendChild(r);
  if (pass && ch.xp !== 0) gainXp(ch.xp || 10);
  setTimeout(function () { goTo(pass ? ch.pass : ch.fail); }, 350);
}

/* ---------- cards & overlays ---------- */
function overlay(html, cls) {
  var o = $('#overlay'); o.className = 'overlay show ' + (cls || ''); o.innerHTML = html; o.hidden = false; o.scrollTop = 0; return o;
}
function closeOverlay() { var o = $('#overlay'); o.className = 'overlay'; o.hidden = true; o.innerHTML = ''; }
function showCard(card, done) {
  var E = ep(), html;
  if (card.kind === 'titles') {
    html = '<div class="titles"><div class="t-show">TITHE</div><div class="t-rule"></div>' +
      '<div class="t-ep">Season One · Episode ' + E.n + '</div><div class="t-name">' + esc(E.title) + '</div>' +
      (card.sub ? '<div class="t-sub">' + fmt(card.sub) + '</div>' : '') + '<button class="btn ghost" id="card-go">Continue</button></div>';
  } else {
    html = '<div class="cardx ' + esc(card.kind || 'cut') + '">' + (card.title ? '<div class="c-title">' + fmt(card.title) + '</div>' : '') +
      (card.sub ? '<div class="c-sub">' + fmt(card.sub) + '</div>' : '') + '<button class="btn ghost" id="card-go">Continue</button></div>';
  }
  overlay(html, 'card');
  var go = function () { closeOverlay(); done(); };
  $('#card-go').onclick = go; $('#card-go').focus();
}

/* ---------- episodes ---------- */
function startEpisode(n) {
  var E = T.EPISODES[n];
  if (!E) return seasonEnd();
  S.ep = n; S.ctx = n; S.mode = 'story'; S.side = null; S.tx = [];
  story().innerHTML = '';
  var prev = (E.previously || []).filter(function (p) { return cond(p.if); });
  var begin = function () { closeOverlay(); goTo(E.start || 'start'); };
  if (n > 1 && prev.length) {
    var h = '<div class="prevon"><div class="p-head">Previously on <span>TITHE</span></div>' +
      prev.map(function (p) { return '<p class="p-clip">' + fmt(p.t) + '</p>'; }).join('') +
      '<button class="btn ghost" id="card-go">Continue</button></div>';
    overlay(h, 'card'); $('#card-go').onclick = begin;
  } else begin();
  hud();
}
function endEpisode() {
  var E = ep();
  S.epDone[E.n] = 1;
  S.hp = Math.max(S.hp, Math.round(maxHp() * .5));
  var nx = (E.nextTime || []).map(function (l) { return '<p>' + fmt(l) + '</p>'; }).join('');
  var cast = (E.credits || ['ansel', 'tamsin']).map(function (c) { return '<li><span>' + esc(T.CAST[c] ? T.CAST[c].full : c) + '</span></li>'; }).join('');
  overlay('<div class="credits"><div class="cr-show">TITHE</div><div class="cr-ep">Episode ' + E.n + ' · ' + esc(E.title) + '</div>' +
    '<ul class="cr-cast">' + cast + '</ul>' +
    (nx ? '<div class="nexttime"><div class="nt-head">Next time on TITHE</div>' + nx + '</div>' : '') +
    '<button class="btn" id="card-go">' + (T.EPISODES[E.n + 1] ? 'Between episodes: Harrowgate' : 'End of Season One') + '</button></div>', 'card');
  $('#card-go').onclick = function () { closeOverlay(); if (T.EPISODES[E.n + 1]) { S.ep = E.n + 1; hub(); } else seasonEnd(); };
  save('auto');
}
function seasonEnd() {
  var last = T.EPISODES[8] || ep();
  var lines = (last && last.recap ? last.recap : []).filter(function (r) { return cond(r.if); }).map(function (r) { return '<p>' + fmt(r.t) + '</p>'; }).join('');
  overlay('<div class="credits"><div class="cr-show">TITHE</div><div class="cr-ep">End of Season One · The Marches</div>' +
    '<div class="nexttime"><div class="nt-head">Your season</div>' + (lines || '<p>The Dead Men hold Harrowgate. One star is missing.</p>') + '</div>' +
    '<div class="nexttime"><div class="nt-head">Season Two · The Crown</div><p>In development.</p></div>' +
    '<button class="btn" id="card-go">Return to Harrowgate</button></div>', 'card');
  $('#card-go').onclick = function () { closeOverlay(); S.ep = 9; hub(); };
  S.f.season1_done = 1; save('auto');
}

/* ---------- hub ---------- */
function sideList(kind) {
  var out = [];
  for (var n = 1; n < S.ep && n <= 8; n++) {
    var E = T.EPISODES[n]; if (!E || !E.side) continue;
    E.side.forEach(function (s) {
      if (s.kind !== kind) return;
      if (s.once !== false && S.sideDone[s.id]) return;
      var saveCtx = S.ctx; S.ctx = n; var ok = cond(s.if); S.ctx = saveCtx;
      if (ok) out.push({ ep: n, s: s });
    });
  }
  return out;
}
function hub() {
  S.mode = 'hub'; S.ctx = Math.min(S.ep, 8); S.side = null;
  story().innerHTML = '';
  var next = T.EPISODES[S.ep];
  var h = el('section', 'beat hub');
  h.appendChild(el('div', 'slug', 'Harrowgate — between episodes'));
  h.appendChild(el('div', 'prose', '<p class="line">' + fmt(next ? 'The town goes on around you: bells, carts, gulls over the Tanners\' Bottom. There is work if you want it, and there is the next thing coming whether you want it or not.' : 'Harrowgate is quiet. One star is missing over the Lanternhold, and nobody talks about it.') + '</p>'));
  var g = el('div', 'hubgrid');
  function card(title, sub, fn, dis) {
    var b = el('button', 'hubcard', '<b>' + title + '</b><span>' + sub + '</span>'); if (dis) b.disabled = true; b.onclick = fn; g.appendChild(b);
  }
  var contracts = sideList('contract'), talks = sideList('talk');
  card('Notice Board', contracts.length ? contracts.length + ' contract' + (contracts.length > 1 ? 's' : '') + ' posted' : 'Nothing posted', board);
  card('Companions', talks.length ? talks.length + ' conversation' + (talks.length > 1 ? 's' : '') + ' waiting' : 'Nobody needs you right now', companions);
  card('The Wilds', 'Hunt, forage, and get into trouble', wilds);
  card('The Gutted Hen', 'Rest: 8 silver (full health, treat a wound)', rest, S.silver < 8 && !(S.f.e2_mags));
  card('Market Stair', 'Supplies', function () { shop('market'); });
  card('Gerta\'s Forge', 'Arms, armor, upgrades', function () { shop('smith'); });
  card('Wyck\'s Apothecary', 'Remedies and crafting', function () { shop('apothecary'); });
  card('Journal', 'Level up, gear, quests, people', function () { openJournal('ansel'); });
  h.appendChild(g);
  var go = el('div', 'choices');
  var b = el('button', 'choice next-ep', next ? '<span class="tag">Episode ' + next.n + '</span><span class="ct">' + esc(next.title) + '</span>' : '<span class="ct">Season Two is in development</span>');
  if (!next) b.disabled = true;
  b.onclick = function () { startEpisode(S.ep); };
  go.appendChild(b); h.appendChild(go);
  story().appendChild(h);
  window.scrollTo(0, 0);
  save('auto'); hud();
}
function returnHub() { if (S.side) { var sd = S.side; if (sd.once !== false) S.sideDone[sd.id] = 1; } S.ctx = Math.min(S.ep, 8); hub(); }
function panel(title, sub) {
  story().innerHTML = '';
  var h = el('section', 'beat hub'); h.appendChild(el('div', 'slug', esc(title)));
  if (sub) h.appendChild(el('div', 'prose', '<p class="line">' + fmt(sub) + '</p>'));
  story().appendChild(h); window.scrollTo(0, 0); return h;
}
function backBtn(h) { var b = el('button', 'choice cont', '<span class="ct">Back to Harrowgate</span>'); b.onclick = hub; var c = el('div', 'choices'); c.appendChild(b); h.appendChild(c); }
function runSide(item) {
  S.mode = 'side'; S.ctx = item.ep; S.side = { id: item.s.id, once: item.s.once };
  story().innerHTML = '';
  goTo(item.s.start);
}
function board() {
  var h = panel('The Notice Board, Market Stair', 'Old Tibb reads the notices aloud for a penny, and you pay him the penny because his voice does the monsters properly.');
  var list = sideList('contract');
  var g = el('div', 'list');
  if (!list.length) g.appendChild(el('p', 'muted', 'Nothing new. Tibb suggests you try the Wilds, where there is always something that wants killing.'));
  list.forEach(function (it) {
    var s = it.s, b = el('button', 'listrow', '<b>' + esc(s.title) + '</b><span>' + fmt(s.desc || '') + '</span>' + (s.level ? '<i>Suggested level ' + s.level + '</i>' : ''));
    b.onclick = function () { runSide(it); }; g.appendChild(b);
  });
  h.appendChild(g); backBtn(h);
}
function companions() {
  var h = panel('Your people', 'Whoever is still talking to you.');
  var list = sideList('talk'), g = el('div', 'list');
  if (!list.length) g.appendChild(el('p', 'muted', 'Everyone is busy, or asleep, or avoiding you.'));
  list.forEach(function (it) {
    var s = it.s, c = T.CAST[s.who] || {};
    var b = el('button', 'listrow', '<b style="color:' + (c.color || 'inherit') + '">' + esc(c.full || s.who) + '</b><span>' + fmt(s.title) + '</span>');
    b.onclick = function () { runSide(it); }; g.appendChild(b);
  });
  h.appendChild(g); backBtn(h);
}
function rest() {
  var free = S.f.e2_mags;
  if (!free) fx({ silver: -8 });
  S.hp = maxHp(); S.st = maxSt(); if (S.wounds.length) { var w = S.wounds.shift(); toast(T.WOUNDS[w].name + ' treated', 'good'); }
  S.days++;
  var lines = [
    'Mags puts a bowl of mutton in front of you and a hot brick wrapped in flannel in your bed. You sleep twelve hours. Nobody dies in your dreams, for once.',
    'The Hen is loud until midnight and silent after. You lie awake listening to the house settle, and then you don\'t.',
    'You wake at noon. Somebody has darned your stockings. Mags denies it.'
  ];
  if (free) lines.push('Mags won\'t take your silver. "You can pay me in other ways," she says, and later, upstairs, you do.');
  var h = panel('The Gutted Hen', pick(lines)); backBtn(h); hud(); save('auto');
}
function wilds() {
  var h = panel('The Wilds', 'Where do you ride?');
  var g = el('div', 'list');
  Object.keys(T.REGIONS).forEach(function (k) {
    var R = T.REGIONS[k]; if (!cond(R.unlock)) return;
    var b = el('button', 'listrow', '<b>' + esc(R.name) + '</b><span>' + fmt(R.desc) + '</span>');
    b.onclick = function () { wildTrip(k); }; g.appendChild(b);
  });
  h.appendChild(g); backBtn(h);
}
function wildTrip(k) {
  var R = T.REGIONS[k], r = Math.random();
  S.mode = 'wild'; S.days++;
  var h = panel(R.name);
  if (r < 0.62) {
    var foes = pick(R.foes);
    h.appendChild(el('div', 'prose', '<p class="line">' + fmt(pick([
      'You hear them before you see them.', 'Ox shies. You trust Ox.', 'The track narrows between two banks of thorn. Of course it does.',
      'Something has been following you for a mile. It stops pretending.', 'You smell them first.'])) + '</p>'));
    startFight({ foes: foes, win: '@wildwin', flee: '@hub', wild: true, tier: R.tier || 1 });
  } else if (r < 0.85) {
    var got = {}; for (var i = 0; i < rnd(2, 3); i++) { var m = pick(R.forage); got[m] = (got[m] || 0) + 1; }
    h.appendChild(el('div', 'prose', '<p class="line">You spend the day foraging and scavenging. It is quiet, cold, and almost pleasant.</p>'));
    fx({ give: got, xp: 10 });
    backBtn(h);
  } else {
    var evs = T.WILD_EVENTS.filter(function (e) { return cond(e.if); }), ev = pick(evs);
    h.appendChild(el('div', 'prose', '<p class="line">' + fmt(ev.t) + '</p>'));
    fx(ev.fx); gainXp(10); backBtn(h);
  }
  hud();
}

/* ---------- shops & crafting ---------- */
function shop(id) {
  var SH = T.SHOPS[id];
  var h = panel(SH.name, id === 'smith' ? 'Gerta looks at your sword, then at you, and the price goes up.' : id === 'apothecary' ? 'Silas Wyck wipes his hands on his apron. Everything smells of vinegar.' : 'Stalls stacked up the Market Stair, cheapest at the bottom.');
  var g = el('div', 'list');
  g.appendChild(el('div', 'subhead', 'Buy · you have ' + S.silver + ' silver'));
  SH.stock.forEach(function (iid) {
    var it = T.ITEMS[iid], price = it.price;
    var b = el('button', 'listrow item', '<b>' + esc(it.name) + ' <i>' + price + ' s</i></b><span>' + fmt(it.desc) + statline(it) + '</span>');
    if (S.silver < price) b.disabled = true;
    b.onclick = function () { S.silver -= price; give(iid, 1); shop(id); };
    g.appendChild(b);
  });
  if (id === 'apothecary' || id === 'smith') {
    g.appendChild(el('div', 'subhead', id === 'smith' ? 'Upgrades' : 'Craft from materials'));
    Object.keys(T.RECIPES).forEach(function (rid) {
      var R = T.RECIPES[rid]; if (R.where !== id) return;
      var needs = Object.keys(R.needs).map(function (m) { return T.ITEMS[m].name + ' ' + (S.inv[m] || 0) + '/' + R.needs[m]; }).join(', ') + (R.silver ? ', ' + R.silver + ' silver' : '');
      var ok = Object.keys(R.needs).every(function (m) { return has(m, R.needs[m]); }) && S.silver >= (R.silver || 0);
      if (R.upgrade === 'weapon' && S.up.weapon >= 3) ok = false;
      if (R.upgrade === 'armor' && S.up.armor >= 2) ok = false;
      if (R.upgrade === 'silver' && S.up.silver) ok = false;
      var name = R.name || ('Craft ' + T.ITEMS[R.out].name + (R.n > 1 ? ' ×' + R.n : ''));
      var b = el('button', 'listrow item', '<b>' + esc(name) + '</b><span>' + esc(needs) + '</span>');
      b.disabled = !ok;
      b.onclick = function () {
        Object.keys(R.needs).forEach(function (m) { take(m, R.needs[m]); });
        if (R.silver) S.silver -= R.silver;
        if (R.out) give(R.out, R.n); else { S.up[R.upgrade] = (S.up[R.upgrade] || 0) + 1; toast('Upgraded', 'good'); }
        shop(id);
      };
      g.appendChild(b);
    });
  }
  g.appendChild(el('div', 'subhead', 'Sell'));
  Object.keys(S.inv).forEach(function (iid) {
    var it = T.ITEMS[iid]; if (!it || it.type === 'quest' || !it.price) return;
    if (S.equip.weapon === iid || S.equip.armor === iid || S.equip.trinket === iid) return;
    var p = Math.max(1, Math.floor(it.price / 2));
    var b = el('button', 'listrow item sell', '<b>' + esc(it.name) + ' ×' + S.inv[iid] + ' <i>+' + p + ' s</i></b>');
    b.onclick = function () { take(iid, 1); S.silver += p; shop(id); };
    g.appendChild(b);
  });
  h.appendChild(g); backBtn(h); hud();
}
function statline(it) {
  if (it.type === 'weapon') return ' <em class="stl">Damage ' + it.dmg[0] + '–' + it.dmg[1] + ', to-hit ' + (it.hit >= 0 ? '+' : '') + it.hit + (it.pierce ? ', pierce ' + it.pierce : '') + (it.tags ? ', ' + it.tags.join(', ') : '') + '</em>';
  if (it.type === 'armor') return ' <em class="stl">Armor ' + it.arm + '</em>';
  if (it.type === 'trinket' && it.mods) return ' <em class="stl">' + Object.keys(it.mods).map(function (k) { return (it.mods[k] > 0 ? '+' : '') + it.mods[k] + ' ' + T.STATS[k].name; }).join(', ') + '</em>';
  return '';
}

/* ---------- combat ---------- */
var C = null;
function foeDef(id) { var d = T.ENEMIES[id]; if (!d) console.error('Unknown enemy', id); return d; }
var foeScale = 1;
function makeFoe(id, i) {
  var d = foeDef(id);
  if (foeScale !== 1) { d = Object.assign({}, d, { hp: Math.round(d.hp * foeScale), dmg: [Math.round(d.dmg[0] * (1 + (foeScale - 1) / 2)), Math.round(d.dmg[1] * (1 + (foeScale - 1) / 2))], acc: d.acc + Math.floor((foeScale - 1) * 4), xp: Math.round(d.xp * foeScale) }); }
  return { id: id, d: d, name: d.name, hp: d.hp, max: d.hp, st: {}, intent: null, next: null, key: id + '_' + i + '_' + Math.random().toString(36).slice(2, 6) };
}
/* Wild fights scale to the player so grinding stays dangerous; XP shrinks for easy regions. */
function wildScale(tier) { return 1 + 0.14 * Math.max(0, S.lvl - tier); }
function makeAlly(id) {
  var a = T.ALLIES[id]; if (!a) return null;
  var mx = a.hp + a.hpLvl * (S.lvl - 1);
  return { id: id, a: a, name: a.name, hp: mx, max: mx, st: {}, cd: 0, used: false };
}
function startFight(spec) {
  foeScale = spec.wild ? wildScale(spec.tier || 1) : 1;
  var foes = (spec.foes || []).map(makeFoe);
  foeScale = 1;
  var allyIds = spec.solo ? [] : (spec.allies || S.party);
  C = {
    spec: spec, foes: foes, allies: allyIds.map(makeAlly).filter(Boolean).slice(0, 3),
    st: {}, round: 1, target: 0, guard: false, once: {}, crit: false, rally: 0, snap: JSON.stringify(S), wounded: false, log: []
  };
  foes.forEach(function (f) { if (!S.known.beast[f.id]) S.known.beast[f.id] = 1; });
  C.foes.forEach(chooseIntent);
  var box = el('section', 'combat'); box.id = 'combat';
  story().appendChild(box);
  if (spec.intro) clog(spec.intro, 'sys');
  drawFight();
  setTimeout(function () { box.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 30);
}
function chooseIntent(f) {
  var moves = f.d.moves, tot = 0, i, r;
  var pickMove = function () { tot = 0; moves.forEach(function (m) { tot += m.w; }); r = Math.random() * tot; for (i = 0; i < moves.length; i++) { r -= moves[i].w; if (r <= 0) return moves[i]; } return moves[0]; };
  f.intent = f.next || pickMove();
  if (f.intent.self === 'heal' && f.hp > f.max * .7) f.intent = moves[0];
  f.next = pickMove();
}
function clog(msg, cls) { C.log.push({ m: msg, c: cls || '' }); if (C.log.length > 60) C.log.shift(); }
function living(list) { return list.filter(function (x) { return x.hp > 0; }); }
function hpbar(cur, max, cls) { return '<div class="bar ' + (cls || '') + '"><i style="width:' + clamp(cur / max * 100, 0, 100) + '%"></i></div>'; }
function stTags(st) {
  return Object.keys(st).filter(function (k) { return st[k] > 0; }).map(function (k) { return '<span class="st st-' + k + '">' + k + (st[k] > 1 ? ' ' + st[k] : '') + '</span>'; }).join('');
}
function drawFight() {
  var box = $('#combat'); if (!box) return;
  var foresee = S.skills.u1 || C.allies.some(function (a) { return a.id === 'oriel' && a.hp > 0; });
  var html = '<div class="c-head"><span>' + (C.spec.title ? esc(C.spec.title) : 'Combat') + '</span><span>Round ' + C.round + '</span></div><div class="foes">';
  C.foes.forEach(function (f, i) {
    if (f.hp <= 0) { html += '<div class="foe dead"><b>' + esc(f.name) + '</b><span class="muted">' + (f.fled ? 'broken and fled' : 'down') + '</span></div>'; return; }
    var tel = f.intent ? (f.intent.heavy ? '<span class="heavy">HEAVY</span> ' : '') + esc(f.intent.tele || f.intent.n) : '';
    html += '<button class="foe' + (i === C.target ? ' sel' : '') + '" data-i="' + i + '"><b>' + esc(f.name) + '</b>' + hpbar(f.hp, f.max, 'foebar') +
      '<span class="hpn">' + f.hp + ' / ' + f.max + '</span><span class="intent">' + tel + '</span>' +
      (foresee && f.next ? '<span class="intent2">then: ' + esc(f.next.n) + '</span>' : '') + '<span class="sts">' + stTags(f.st) + '</span></button>';
  });
  html += '</div><div class="party"><div class="pc me"><b>Ansel</b>' + hpbar(S.hp, maxHp(), 'hpbar') + '<span class="hpn">' + S.hp + ' / ' + maxHp() + '</span>' +
    '<span class="pips">' + pips(S.st, maxSt()) + '</span><span class="sts">' + stTags(C.st) + (C.guard ? '<span class="st st-guard">guarding</span>' : '') + '</span></div>';
  C.allies.forEach(function (a) {
    html += '<div class="pc' + (a.hp <= 0 ? ' dead' : '') + '"><b style="color:' + T.CAST[a.id].color + '">' + esc(a.name) + '</b>' + hpbar(a.hp, a.max, 'hpbar') + '<span class="hpn">' + Math.max(0, a.hp) + ' / ' + a.max + '</span><span class="sts">' + stTags(a.st) + '</span></div>';
  });
  html += '</div><div class="clog" aria-live="polite">' + C.log.slice(-7).map(function (l) { return '<p class="' + l.c + '">' + fmt(l.m) + '</p>'; }).join('') + '</div><div class="actions" id="actions"></div>';
  box.innerHTML = html;
  box.querySelectorAll('.foe[data-i]').forEach(function (b) { b.onclick = function () { C.target = +b.dataset.i; drawFight(); }; });
  drawActions();
  hud();
}
function pips(n, m) { var s = ''; for (var i = 0; i < m; i++) s += '<i class="' + (i < n ? 'on' : '') + '"></i>'; return s; }
function drawActions() {
  var a = $('#actions'); if (!a) return;
  a.innerHTML = '';
  function btn(label, sub, fn, dis, cls) {
    var b = el('button', 'act ' + (cls || ''), '<b>' + label + '</b>' + (sub ? '<span>' + sub + '</span>' : ''));
    b.disabled = !!dis; b.onclick = function () { a.querySelectorAll('button').forEach(function (x) { x.disabled = true; }); fn(); }; a.appendChild(b);
  }
  if (C.st.stun) { btn('Reel', 'You are stunned', function () { C.st.stun = 0; endPlayerTurn(); }); return; }
  btn('Strike', weapon().name, function () { playerAttack({ mult: 1 }); });
  btn('Heavy Blow', '2 stamina · +60% dmg, pierce', function () { S.st -= 2; playerAttack({ mult: 1.6, pierce: 2, hit: -2 }); }, S.st < 2);
  btn('Guard', '+2 stamina · brace', function () { C.guard = true; S.st = Math.min(maxSt(), S.st + 1); clog('You set your feet and bring Widow up.'); endPlayerTurn(); });
  var acts = [];
  ['blade', 'survivor', 'captain', 'unreckoned'].forEach(function (br) { T.SKILLS[br].list.forEach(function (sk) { if (sk.kind === 'active' && S.skills[sk.id]) acts.push(sk); }); });
  acts.forEach(function (sk) {
    var dis = S.st < sk.cost || (sk.id === 's2' && C.once.s2) || (sk.id === 'c4' && !living(C.allies).length) || (sk.id === 'c1' && !living(C.allies).length);
    btn(sk.name, sk.cost + ' stamina', function () { useSkill(sk); }, dis, 'skill');
  });
  var cons = Object.keys(S.inv).filter(function (k) { var it = T.ITEMS[k]; return it && it.type === 'consumable' && !it.cureWound; });
  if (cons.length) btn('Item', cons.length + ' kinds', itemMenu);
  if (C.spec.flee) btn('Run', 'Finesse 12', function () {
    var r = d20() + stat('finesse') * 2;
    if (r >= 12) { clog('You break and run. Nobody follows far.', 'sys'); endFight('flee'); } else { clog('You try to run. They don\'t let you.', 'bad'); endPlayerTurn(); }
  });
}
function itemMenu() {
  var a = $('#actions'); a.innerHTML = '';
  Object.keys(S.inv).forEach(function (k) {
    var it = T.ITEMS[k]; if (!it || it.type !== 'consumable' || it.cureWound) return;
    var b = el('button', 'act', '<b>' + esc(it.name) + ' ×' + S.inv[k] + '</b><span>' + esc(it.desc.split('.').slice(0, 1).join('.')) + '</span>');
    b.onclick = function () { useItem(k); }; a.appendChild(b);
  });
  var back = el('button', 'act ghost', '<b>Back</b>'); back.onclick = drawActions; a.appendChild(back);
}
function curTarget() { var f = C.foes[C.target]; if (!f || f.hp <= 0) { var i = C.foes.findIndex(function (x) { return x.hp > 0; }); C.target = Math.max(0, i); f = C.foes[C.target]; } return f; }
function weaponSilver() { var w = weapon(); return (w.tags && w.tags.indexOf('silver') >= 0) || S.up.silver || C.st.silvered; }
function dmgMods(f, base, kinds) {
  var d = f.d, m = 1;
  kinds.forEach(function (k) { if (d.weak && d.weak.indexOf(k) >= 0) m *= 1.5; if (d.resist && d.resist.indexOf(k) >= 0) m *= .5; });
  if (S.skills.u3 && (d.tags.indexOf('undead') >= 0 || d.tags.indexOf('under') >= 0)) m *= 1.5;
  return Math.round(base * m);
}
function playerAttack(o) {
  var f = curTarget(), w = weapon();
  var hitStat = w.stat === 'finesse' ? stat('finesse') + 1 : stat('finesse');
  var roll = d20(), tohit = roll + hitStat + Math.floor(S.lvl / 2) + (w.hit || 0) + (S.skills.b1 ? 1 : 0) + 2 + (o.hit || 0) - (C.st.fear ? 3 : 0);
  var crit = roll === 20 || C.crit || o.auto === 'crit';
  if (o.auto || crit || (roll !== 1 && tohit >= f.d.def)) {
    var power = w.stat === 'finesse' ? stat('finesse') : stat('might');
    var dmg = rnd(w.dmg[0], w.dmg[1]) + power + S.up.weapon + (S.skills.b1 ? 1 : 0);
    dmg = Math.round(dmg * (o.mult || 1) * (C.st.weaken ? .6 : 1));
    if (crit) dmg *= 2;
    var kinds = []; if (weaponSilver()) kinds.push('silver'); if (w.tags) kinds = kinds.concat(w.tags);
    dmg = dmgMods(f, dmg, kinds);
    dmg = Math.max(1, dmg - Math.max(0, f.d.arm - (w.pierce || 0) - (o.pierce || 0)));
    if (f.st.guard) dmg = Math.ceil(dmg / 2);
    C.crit = false;
    hurtFoe(f, dmg, (crit ? '**Critical.** ' : '') + pick(['You cut', 'Widow bites into', 'You hack at', 'You drive the edge into', 'You hit']).replace('Widow', w.name) + ' the ' + f.name.replace(/^The /, '').toLowerCase() + ' for **' + dmg + '**.');
    if (o.after) o.after(f, dmg);
  } else {
    clog(pick(['You swing wide.', 'It slips your cut.', 'Steel meets nothing.', 'Your blow glances off.']) + ' <span class="muted">(' + tohit + ' vs ' + f.d.def + ')</span>', 'miss');
  }
  endPlayerTurn();
}
function hurtFoe(f, dmg, msg) {
  f.hp -= dmg; if (msg) clog(msg, 'hit');
  if (f.hp <= 0) { f.hp = 0; clog('**' + f.name + '** ' + (f.d.nonlethal ? 'yields.' : pick(['goes down and stays down.', 'falls.', 'dies.', 'collapses.'])), 'kill'); }
}
function useSkill(sk) {
  S.st -= sk.cost;
  var f = curTarget();
  switch (sk.id) {
    case 'b3': living(C.foes).forEach(function (x) { var w = weapon(); var dmg = Math.max(1, Math.round((rnd(w.dmg[0], w.dmg[1]) + stat('might')) * .7) - x.d.arm); dmg = dmgMods(x, dmg, weaponSilver() ? ['silver'] : []); hurtFoe(x, dmg, 'Cleave catches the ' + x.name.toLowerCase() + ' for **' + dmg + '**.'); }); endPlayerTurn(); break;
    case 'b4': playerAttack({ mult: 1, after: function (t) { t.st.weaken = 3; clog('It staggers, hamstrung.', 'sys'); } }); break;
    case 'b5': if (f.hp <= f.max * .35) playerAttack({ mult: 3, auto: true }); else { clog('It is not weak enough yet. You overextend.', 'miss'); endPlayerTurn(); } break;
    case 's2': C.once.s2 = 1; var h = Math.round(maxHp() * .3); S.hp = Math.min(maxHp(), S.hp + h); clog('You find a second wind. **+' + h + ' HP**.', 'good'); endPlayerTurn(); break;
    case 's3': playerAttack({ mult: .4, after: function (t) { if (Math.random() < .6 && t.d.tags.indexOf('boss') < 0 || Math.random() < .3) { t.st.stun = 1; clog('It reels, stunned.', 'sys'); } } }); break;
    case 'c1': C.rally = 3; C.allies.forEach(function (a) { a.st.fear = 0; }); C.st.fear = 0; clog('"On me!" Your voice comes out of the old place: the sergeant\'s voice. Your people answer it.', 'good'); endPlayerTurn(); break;
    case 'c4': var al = living(C.allies); if (al.length) { pick(al).twice = true; clog('You point. They go.', 'good'); } endPlayerTurn(); break;
    case 'u4': C.crit = true; clog('You step where nothing is watching. For a breath, the world forgets you are there.', 'cosmic'); endPlayerTurn(); break;
    case 'u5':
      var tg = f.d.tags;
      if (tg.indexOf('choir') >= 0 || tg.indexOf('hollow') >= 0) { var dmg = rnd(30, 45) + S.lvl * 3; hurtFoe(f, dmg, 'You lay your burned palm against it. The light inside it goes looking for somewhere to be counted, and finds nowhere. **' + dmg + '**.'); }
      else clog('You lay your palm against it. Nothing happens. It isn\'t theirs.', 'miss');
      endPlayerTurn(); break;
    default: endPlayerTurn();
  }
}
function useItem(k) {
  var it = T.ITEMS[k], f = curTarget();
  take(k, 1);
  if (it.heal) { S.hp = Math.min(maxHp(), S.hp + it.heal); clog('You use ' + it.name.toLowerCase() + '. **+' + it.heal + ' HP**.', 'good'); }
  if (it.st) { S.st = Math.min(maxSt(), S.st + it.st); }
  if (it.cure) it.cure.forEach(function (c) { C.st[c] = 0; });
  if (it.combat === 'firebomb') living(C.foes).forEach(function (x) { var d = dmgMods(x, rnd(7, 12), ['fire']); hurtFoe(x, d, 'Fire washes over the ' + x.name.toLowerCase() + ': **' + d + '**.'); x.st.burn = 2; });
  if (it.combat === 'silveroil') { C.st.silvered = 99; clog('You run silver oil down the blade. It smokes.', 'sys'); }
  if (it.combat === 'witchsalt') { var fey = f.d.tags.some(function (t) { return t === 'fey' || t === 'under' || t === 'undead'; }); var d = fey ? dmgMods(f, rnd(10, 16), ['witchsalt']) : 2; hurtFoe(f, d, 'Witch-salt hisses on the ' + f.name.toLowerCase() + ': **' + d + '**.'); if (fey) f.st.stun = 1; }
  if (it.combat === 'knives') { var d2 = Math.max(1, rnd(5, 9) - Math.floor(f.d.arm / 2)); hurtFoe(f, d2, 'A thrown knife takes it: **' + d2 + '**.'); }
  endPlayerTurn();
}
function endPlayerTurn() {
  if (checkEnd()) return;
  alliesAct();
  if (checkEnd()) return;
  foesAct();
  if (checkEnd()) return;
  tick();
  if (checkEnd()) return;
  C.round++; C.guard = false;
  S.st = Math.min(maxSt(), S.st + 1);
  if (C.rally) C.rally--;
  living(C.foes).forEach(chooseIntent);
  drawFight();
}
function alliesAct() {
  C.allies.forEach(function (a) {
    var times = a.twice ? 2 : 1; a.twice = false;
    for (var t = 0; t < times; t++) {
      if (a.hp <= 0) return;
      if (a.st.stun) { a.st.stun = 0; clog(a.name + ' is reeling.', 'sys'); return; }
      var f = curTarget(); if (!f || f.hp <= 0) return;
      var A = a.a; a.cd++;
      var sp = A.special;
      if (sp && sp.once === 'heal') {
        if (!a.used && S.hp < maxHp() * .55) { a.used = true; S.hp = Math.min(maxHp(), S.hp + sp.amount); clog(a.name + ' ' + sp.note + ' **+' + sp.amount + ' HP**.', 'good'); continue; }
      } else if (sp && sp.every && a.cd % sp.every === 0) {
        if (sp.effect === 'foresee') { clog('Oriel: "' + (f.intent ? f.intent.n : 'Nothing') + '. Then ' + (f.next ? f.next.n : 'nothing') + '."', 'cosmic'); continue; }
        var dmg = rnd(A.dmg[0], A.dmg[1]) + (C.rally ? 3 : 0);
        if (sp.effect === 'starfire') { dmg = dmgMods(f, dmg + 3, ['starfire']); }
        dmg = Math.max(1, dmg - f.d.arm);
        hurtFoe(f, dmg, a.name + ' ' + sp.note + ': **' + dmg + '**.');
        if (sp.effect === 'stun' && f.d.tags.indexOf('boss') < 0) f.st.stun = 1;
        if (sp.effect === 'stun' && f.d.tags.indexOf('boss') >= 0 && Math.random() < .35) f.st.stun = 1;
        if (sp.effect === 'bleed') f.st.bleed = 3;
        if (sp.effect === 'weaken') f.st.weaken = 2;
        continue;
      }
      if (!A.dmg[1]) continue;
      if (d20() + A.hit - (a.st.fear ? 3 : 0) >= f.d.def) {
        var d = Math.max(1, rnd(A.dmg[0], A.dmg[1]) + (C.rally ? 3 : 0) - f.d.arm);
        hurtFoe(f, d, a.name + ': ' + A.act.toLowerCase() + ' — **' + d + '**.');
      } else clog(a.name + ' misses.', 'miss');
    }
  });
}
function foesAct() {
  living(C.foes).forEach(function (f) {
    if (f.hp <= 0) return;
    if (f.st.stun) { f.st.stun = 0; clog('The ' + f.name.toLowerCase() + ' reels.', 'sys'); return; }
    f.st.guard = 0;
    // Dread Reputation
    if (S.skills.c5 && f.d.tags.indexOf('human') >= 0 && f.d.tags.indexOf('boss') < 0 && f.hp < f.max / 2 && Math.random() < .25) {
      f.hp = 0; f.fled = true; clog('The ' + f.name.toLowerCase() + ' looks at your face, and throws down his weapon, and runs.', 'kill'); return;
    }
    var mv = f.intent || f.d.moves[0];
    if (mv.self) {
      if (mv.self === 'heal') { var h = Math.round(f.max * .2); f.hp = Math.min(f.max, f.hp + h); clog('The ' + f.name.toLowerCase() + ' ' + (mv.n === 'Feed' ? 'feeds. It is horrible to watch.' : 'recovers.') + ' (+' + h + ')', 'bad'); }
      else if (mv.self === 'guard') { f.st.guard = 1; clog('The ' + f.name.toLowerCase() + ' gathers itself: ' + mv.n.toLowerCase() + '.', 'sys'); }
      else if (/^summon:/.test(mv.self)) { if (C.foes.length < 6) { var nf = makeFoe(mv.self.split(':')[1], C.foes.length); chooseIntent(nf); C.foes.push(nf); clog(mv.n + ': a ' + nf.name.toLowerCase() + ' joins the fight.', 'bad'); } }
      return;
    }
    var targets = mv.aoe ? ['me'].concat(living(C.allies)) : [pickTarget()];
    targets.forEach(function (t) { foeHits(f, mv, t); });
  });
}
function pickTarget() {
  var al = living(C.allies).filter(function (a) { return a.id !== 'oriel' || Math.random() < .3; });
  var ulla = al.find(function (a) { return a.a.taunt; });
  if (ulla && Math.random() < .5) return ulla;
  if (al.length && Math.random() < .3) return pick(al);
  return 'me';
}
function starRevealedNow() { return !!(S.f.e7_brannagh_doubt || (S.f.unreckoned && S.ep >= 7)); }
function foeHits(f, mv, t) {
  var me = t === 'me';
  var def = me ? 10 + stat('finesse') + Math.floor(S.lvl / 3) : 11;
  var acc = f.d.acc + (f.st.fear ? -3 : 0);
  if (me && S.skills.u2 && (f.d.tags.indexOf('choir') >= 0 || (mv.starfire && starRevealedNow()))) acc -= 5;
  if (me && S.skills.u2 && f.d.tags.indexOf('hollow') >= 0) acc -= 3;
  var roll = d20();
  if (roll !== 20 && (roll === 1 || roll + acc < def)) { clog('The ' + f.name.toLowerCase() + '\'s ' + mv.n.toLowerCase() + ' misses ' + (me ? 'you' : t.name) + '.', 'miss'); return; }
  var dmg = rnd(f.d.dmg[0], f.d.dmg[1]) * mv.m * (f.st.weaken ? .6 : 1);
  var starRevealed = S.f.e7_brannagh_doubt || S.f.unreckoned && S.ep >= 7;
  if (mv.starfire && me && starRevealed) { dmg *= .5; }
  if (me) {
    if (C.guard) dmg *= mv.heavy ? .25 : .5;
    dmg = Math.max(mv.m ? 1 : 0, Math.round(dmg) - armorVal());
    if (mv.starfire && starRevealed) clog('Blue starfire washes over you. It feels like nothing much. It feels like it is looking for someone else.', 'cosmic');
    else if (mv.starfire) clog('Cold blue fire. It hurts less than it should, and you have no time to wonder why.', 'cosmic');
    S.hp -= dmg;
    clog('The ' + f.name.toLowerCase() + '\'s ' + mv.n.toLowerCase() + ' hits you for **' + dmg + '**.', 'bad');
    if (mv.fx) applyStatus(C.st, mv.fx, true);
    if (C.guard && S.skills.b2 && !mv.aoe && f.hp > 0) { var w = weapon(); var r = Math.max(1, Math.round((rnd(w.dmg[0], w.dmg[1]) + stat('might')) * .6) - f.d.arm); hurtFoe(f, r, 'Riposte: **' + r + '**.'); }
    if (S.hp <= 0 && S.skills.s5 && !C.once.s5) { C.once.s5 = 1; S.hp = 1; clog('You should be dead. You have been dead before. You refuse.', 'cosmic'); }
    if (S.hp > 0 && S.hp < maxHp() * .3 && !C.wounded && Math.random() < .5 && S.wounds.length < 3 && !C.spec.noWound) {
      C.wounded = true; var wk = pick(Object.keys(T.WOUNDS).filter(function (k) { return S.wounds.indexOf(k) < 0; }));
      if (wk) { S.wounds.push(wk); clog('**Wound:** ' + T.WOUNDS[wk].name + '. ' + T.WOUNDS[wk].desc, 'bad'); }
    }
  } else {
    if (C.guard && S.skills.c3) dmg *= .6;
    dmg = Math.max(1, Math.round(dmg) - 1);
    t.hp -= dmg; clog('The ' + f.name.toLowerCase() + ' hits ' + t.name + ' for **' + dmg + '**.' + (t.hp <= 0 ? ' ' + t.name + ' goes down.' : ''), 'bad');
    if (mv.fx && t.hp > 0) applyStatus(t.st, mv.fx, false);
  }
}
function applyStatus(st, k, me) {
  if (k === 'bleed' && me && S.skills.s4) return;
  if (k === 'bleed') st.bleed = 3;
  if (k === 'stun') st.stun = 1;
  if (k === 'fear') st.fear = 2;
  if (k === 'weaken') st.weaken = 2;
  if (k === 'burn') st.burn = 2;
  if (k === 'drain' && me) { S.st = Math.max(0, S.st - 1); clog('Something is drawn out of you. **−1 stamina**.', 'cosmic'); }
}
function tick() {
  function t(st, hurt, who) {
    if (st.bleed) { hurt(2); st.bleed--; clog(who + ' bleeds (2).', 'bad'); }
    if (st.burn) { hurt(3); st.burn--; clog(who + ' burns (3).', 'bad'); }
    if (st.fear) st.fear--; if (st.weaken) st.weaken--;
  }
  t(C.st, function (d) { S.hp -= d; }, 'You');
  if (S.hp <= 0 && S.skills.s5 && !C.once.s5) { C.once.s5 = 1; S.hp = 1; }
  C.foes.forEach(function (f) { if (f.hp > 0) t(f.st, function (d) { f.hp = Math.max(0, f.hp - d); }, 'The ' + f.name.toLowerCase()); });
  C.allies.forEach(function (a) { if (a.hp > 0) t(a.st, function (d) { a.hp -= d; }, a.name); });
}
function checkEnd() {
  if (S.hp <= 0) { endFight('lose'); return true; }
  if (!living(C.foes).length) { endFight('win'); return true; }
  return false;
}
function endFight(res) {
  var spec = C.spec, box = $('#combat');
  if (res === 'lose' && spec.lose) {
    S.hp = Math.max(1, Math.round(maxHp() * .25));
    finishBox(box, 'Defeat'); C = null; goTo(spec.lose); return;
  }
  if (res === 'lose') { drawFight(); return death(); }
  if (res === 'flee') { finishBox(box, 'Fled'); var fl = spec.flee; C = null; if (fl === '@hub') return hub(); return goTo(fl); }
  // victory
  var xp = 0, silver = 0, loot = {};
  C.foes.forEach(function (f) {
    var d = f.d; xp += f.fled ? Math.round(d.xp / 2) : d.xp;
    if (!f.fled) {
      S.kills[f.id] = (S.kills[f.id] || 0) + 1;
      silver += rnd(d.silver[0], d.silver[1]);
      (d.loot || []).forEach(function (L) { if (Math.random() < L[1]) loot[L[0]] = (loot[L[0]] || 0) + L[2]; });
    }
  });
  if (spec.noLoot) { loot = {}; silver = 0; }
  if (spec.wild) xp = Math.round(xp * Math.max(0.35, 1 - 0.12 * Math.max(0, S.lvl - (spec.tier || 1) - 1)) * 0.85);
  if (spec.xp != null) xp = spec.xp;
  finishBox(box, 'Victory');
  var sum = el('div', 'spoils', '<b>Spoils</b> ' + xp + ' XP' + (silver ? ' · ' + silver + ' silver' : '') + Object.keys(loot).map(function (k) { return ' · ' + T.ITEMS[k].name + (loot[k] > 1 ? ' ×' + loot[k] : ''); }).join(''));
  story().appendChild(sum);
  if (silver) S.silver += silver;
  Object.keys(loot).forEach(function (k) { S.inv[k] = (S.inv[k] || 0) + loot[k]; });
  var win = spec.win; C = null;
  gainXp(xp);
  S.st = maxSt();
  if (win === '@wildwin') {
    var h = el('div', 'choices'); var b = el('button', 'choice cont', '<span class="ct">Ride back to Harrowgate</span>'); b.onclick = hub; h.appendChild(b); story().appendChild(h); save('auto'); hud(); return;
  }
  setTimeout(function () { goTo(win); }, 200);
}
function finishBox(box, label) {
  if (!box) return;
  box.removeAttribute('id'); box.classList.add('over');
  var a = box.querySelector('.actions'); if (a) a.innerHTML = '<div class="c-result">' + label + '</div>';
  box.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
}
function death() {
  var lines = [
    'The world goes grey and quiet. Somewhere a pen scratches. Then stops. A polite voice, puzzled: "No. Not you. You\'re not in here." The pen scratches again, irritated, crossing something out.',
    'You die. You know the feeling. A tall man in a rain-dark coat turns the pages of his ledger, back, forward, back. He frowns. He closes the book.',
    'Dark, and the stars, and the sound of pages. "Again?" says someone. "You can\'t keep doing this."'
  ];
  overlay('<div class="deathx"><div class="d-title">Not Counted</div><p>' + pick(lines) + '</p><div class="d-btns"><button class="btn" id="d-retry">Try the fight again</button><button class="btn ghost" id="d-load">Load a save</button></div></div>', 'card death');
  $('#d-retry').onclick = function () {
    var spec = C.spec, snap = C.snap; closeOverlay(); S = JSON.parse(snap); var box = $('#combat'); if (box) box.remove(); C = null; startFight(spec);
  };
  $('#d-load').onclick = function () { closeOverlay(); openJournal('save'); };
}

/* ---------- HUD ---------- */
function hud() {
  if (!S) return;
  var E = T.EPISODES[S.ctx];
  $('#hud-ep').textContent = S.mode === 'title' ? '' : (S.mode === 'hub' || S.mode === 'wild' || S.mode === 'side' ? 'Between episodes' : (E ? 'E' + E.n + ' · ' + E.title : ''));
  $('#hud-hp').innerHTML = '<span class="lbl">HP</span>' + hpbar(S.hp, maxHp(), 'hpbar') + '<span class="num">' + Math.max(0, S.hp) + '/' + maxHp() + '</span>';
  $('#hud-st').innerHTML = '<span class="lbl">ST</span><span class="pips">' + pips(S.st, maxSt()) + '</span>';
  $('#hud-sv').innerHTML = '<span class="lbl">Silver</span><span class="num">' + S.silver + '</span>';
  $('#hud-lv').innerHTML = '<span class="lbl">Lv</span><span class="num">' + S.lvl + '</span>' + (S.sp || S.statPts ? '<span class="dot" title="Points to spend"></span>' : '');
}

/* ---------- journal ---------- */
var JTABS = [['ansel', 'Ansel'], ['pack', 'Pack'], ['skills', 'Skills'], ['quests', 'Quests'], ['people', 'People'], ['beasts', 'Bestiary'], ['codex', 'Codex'], ['save', 'Save']];
function openJournal(tab) {
  var j = $('#journal'); j.hidden = false; document.body.classList.add('jopen');
  $('#jtabs').innerHTML = JTABS.map(function (t) { return '<button data-t="' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + t[1] + '</button>'; }).join('');
  $('#jtabs').querySelectorAll('button').forEach(function (b) { b.onclick = function () { openJournal(b.dataset.t); }; });
  var body = $('#jbody'); body.innerHTML = '';
  ({ ansel: jAnsel, pack: jPack, skills: jSkills, quests: jQuests, people: jPeople, beasts: jBeasts, codex: jCodex, save: jSave })[tab](body);
  body.scrollTop = 0;
}
function closeJournal() { $('#journal').hidden = true; document.body.classList.remove('jopen'); hud(); }
function jAnsel(b) {
  var nxt = XP_TABLE[S.lvl + 1];
  var h = '<div class="jh"><h2>Ansel Dray</h2><p class="muted">' + esc(T.CAST.ansel.bio) + '</p></div>';
  h += '<div class="kv"><span>Level</span><b>' + S.lvl + '</b><span>Experience</span><b>' + S.xp + (nxt ? ' / ' + nxt : '') + '</b><span>Health</span><b>' + S.hp + ' / ' + maxHp() + '</b><span>Stamina</span><b>' + S.st + ' / ' + maxSt() + '</b><span>Armor</span><b>' + armorVal() + '</b><span>Silver</span><b>' + S.silver + '</b></div>';
  h += '<h3>Attributes' + (S.statPts ? ' <em class="pts">' + S.statPts + ' point' + (S.statPts > 1 ? 's' : '') + ' to spend</em>' : '') + '</h3><div class="stats">';
  Object.keys(T.STATS).forEach(function (k) {
    var base = S.stats[k], eff = stat(k);
    h += '<div class="statrow"><b>' + T.STATS[k].name + '</b><span class="sv">' + eff + (eff !== base ? ' <i>(' + base + ')</i>' : '') + '</span><span class="muted">' + T.STATS[k].blurb + '</span>' + (S.statPts && base < 8 ? '<button class="mini" data-st="' + k + '">+1</button>' : '') + '</div>';
  });
  h += '</div><h3>Wounds</h3>' + (S.wounds.length ? S.wounds.map(function (w) { var W = T.WOUNDS[w]; return '<p><b>' + W.name + '</b> — ' + W.desc + ' <span class="muted">(' + Object.keys(W.mods).map(function (k) { return W.mods[k] + ' ' + T.STATS[k].name; }).join(', ') + ')</span>' + (has('surgeon_kit') ? ' <button class="mini" data-cure="' + w + '">Treat</button>' : '') + '</p>'; }).join('') : '<p class="muted">None. For now.</p>');
  h += '<h3>Reputation</h3><div class="kv">' + [['town', 'Harrowgate folk'], ['varane', 'House Varane'], ['lamp', 'The Lamp'], ['fen', 'The fen']].map(function (r) { return '<span>' + r[1] + '</span><b>' + repWord(S.rep[r[0]] || 0) + '</b>'; }).join('') + '</div>';
  b.innerHTML = h;
  b.querySelectorAll('[data-st]').forEach(function (x) { x.onclick = function () { S.stats[x.dataset.st]++; S.statPts--; if (x.dataset.st === 'grit') S.hp = Math.min(maxHp(), S.hp + 4); openJournal('ansel'); }; });
  b.querySelectorAll('[data-cure]').forEach(function (x) { x.onclick = function () { take('surgeon_kit', 1); S.wounds = S.wounds.filter(function (w) { return w !== x.dataset.cure; }); openJournal('ansel'); }; });
}
function repWord(v) { return v <= -4 ? 'Hated' : v <= -2 ? 'Distrusted' : v < 2 ? 'Unknown' : v < 4 ? 'Known' : v < 7 ? 'Respected' : 'Beloved'; }
function jPack(b) {
  var groups = { weapon: 'Weapons', armor: 'Armor', trinket: 'Trinkets', consumable: 'Consumables', material: 'Materials', quest: 'Keepsakes & Evidence' };
  var h = '<div class="kv"><span>Weapon</span><b>' + esc(weapon().name) + (S.up.weapon ? ' +' + S.up.weapon : '') + (S.up.silver ? ' (silvered)' : '') + '</b><span>Armor</span><b>' + esc(S.equip.armor ? T.ITEMS[S.equip.armor].name : 'None') + (S.up.armor ? ' +' + S.up.armor : '') + '</b><span>Trinket</span><b>' + esc(S.equip.trinket ? T.ITEMS[S.equip.trinket].name : 'None') + '</b></div>';
  Object.keys(groups).forEach(function (g) {
    var ids = Object.keys(S.inv).filter(function (k) { return T.ITEMS[k] && T.ITEMS[k].type === g; });
    if (!ids.length) return;
    h += '<h3>' + groups[g] + '</h3>';
    ids.forEach(function (k) {
      var it = T.ITEMS[k], eq = S.equip[g] === k, act = '';
      if ((g === 'weapon' || g === 'armor' || g === 'trinket') && !eq) act = '<button class="mini" data-eq="' + k + '">Equip</button>';
      if (eq) act = '<span class="tag">equipped</span>';
      if (g === 'consumable' && (it.heal || it.cureWound || it.st)) act = '<button class="mini" data-use="' + k + '">Use</button>';
      h += '<div class="itemrow"><b>' + esc(it.name) + (S.inv[k] > 1 ? ' ×' + S.inv[k] : '') + '</b>' + act + '<p class="muted">' + fmt(it.desc) + statline(it) + '</p></div>';
    });
  });
  b.innerHTML = h;
  b.querySelectorAll('[data-eq]').forEach(function (x) { x.onclick = function () { var it = T.ITEMS[x.dataset.eq]; S.equip[it.type] = x.dataset.eq; S.hp = Math.min(S.hp, maxHp()); openJournal('pack'); }; });
  b.querySelectorAll('[data-use]').forEach(function (x) {
    x.onclick = function () {
      var it = T.ITEMS[x.dataset.use];
      if (it.cureWound) { if (!S.wounds.length) return toast('No wounds to treat.'); S.wounds.shift(); }
      if (it.heal) S.hp = Math.min(maxHp(), S.hp + it.heal);
      if (it.st) S.st = Math.min(maxSt(), S.st + it.st);
      take(x.dataset.use, 1); openJournal('pack');
    };
  });
}
function jSkills(b) {
  var h = '<p class="muted">Skill points: <b>' + S.sp + '</b>. Each tier opens when you hold as many skills in that branch as its position (tier 3 needs two earlier skills in the branch).</p>';
  Object.keys(T.SKILLS).forEach(function (br) {
    var B = T.SKILLS[br];
    if (B.hidden && !S.f[B.hidden]) { h += '<div class="branch locked"><h3>???</h3><p class="muted">Something you do not understand yet.</p></div>'; return; }
    var owned = B.list.filter(function (s) { return S.skills[s.id]; }).length;
    h += '<div class="branch"><h3>' + B.name + '</h3><p class="muted">' + esc(B.blurb) + '</p>';
    B.list.forEach(function (sk, i) {
      var have = S.skills[sk.id], can = !have && S.sp > 0 && owned >= i && (!sk.req || S.f[sk.req]);
      h += '<div class="skill' + (have ? ' have' : '') + '"><b>' + esc(sk.name) + '</b> <span class="tag">' + (sk.kind === 'active' ? sk.cost + ' stamina' : 'passive') + '</span><p class="muted">' + esc(sk.desc) + (sk.req && !S.f[sk.req] ? ' <i>(Locked by the story.)</i>' : '') + '</p>' + (can ? '<button class="mini" data-sk="' + sk.id + '">Learn</button>' : '') + '</div>';
    });
    h += '</div>';
  });
  b.innerHTML = h;
  b.querySelectorAll('[data-sk]').forEach(function (x) { x.onclick = function () { S.skills[x.dataset.sk] = 1; S.sp--; if (x.dataset.sk === 's1') S.hp += 10; openJournal('skills'); }; });
}
function jQuests(b) {
  var ids = Object.keys(S.q);
  if (!ids.length) { b.innerHTML = '<p class="muted">Nothing yet.</p>'; return; }
  var order = { active: 0, done: 1, failed: 2 };
  ids.sort(function (a, c) { return (order[S.q[a].state] - order[S.q[c].state]) || (S.q[c].ep - S.q[a].ep); });
  b.innerHTML = ids.map(function (id) { var q = S.q[id]; return '<div class="quest ' + q.state + '"><b>' + esc(q.title) + '</b><span class="tag">' + q.state + '</span>' + q.notes.map(function (n) { return '<p class="muted">' + fmt(n) + '</p>'; }).join('') + '</div>'; }).join('');
}
function jPeople(b) {
  var ids = Object.keys(S.known.cast).filter(function (k) { return T.CAST[k] && k !== 'narrator' && k !== 'ansel'; });
  b.innerHTML = ids.map(function (k) {
    var c = T.CAST[k], bd = S.bond[k];
    return '<div class="person"><b style="color:' + c.color + '">' + esc(c.full) + '</b><span class="tag">' + esc(c.role) + '</span><p class="muted">' + esc(c.bio) + '</p>' + (c.bond && bd != null ? '<div class="bondm" title="Bond">' + bondWord(bd) + '</div>' : '') + '</div>';
  }).join('') || '<p class="muted">No one yet.</p>';
}
function bondWord(v) { return v <= -3 ? 'Hostile' : v < 0 ? 'Wary' : v < 2 ? 'Acquainted' : v < 4 ? 'Warming' : v < 6 ? 'Close' : v < 9 ? 'Devoted' : 'Bound'; }
function jBeasts(b) {
  var ids = Object.keys(S.known.beast);
  b.innerHTML = ids.map(function (k) { var d = T.ENEMIES[k]; if (!d) return ''; return '<div class="beast"><b>' + esc(d.name) + '</b><span class="tag">' + (S.kills[k] || 0) + ' slain</span><p class="muted">' + fmt(d.lore) + '</p>' + ((S.kills[k] || 0) >= 1 ? '<p class="stl">HP ' + d.hp + ' · Armor ' + d.arm + (d.weak ? ' · Weak to ' + d.weak.join(', ') : '') + (d.resist ? ' · Resists ' + d.resist.join(', ') : '') + '</p>' : '') + '</div>'; }).join('') || '<p class="muted">Nothing yet. That will change.</p>';
}
function jCodex(b) {
  var ids = Object.keys(S.known.codex);
  b.innerHTML = ids.map(function (k) { var c = T.CODEX[k]; return c ? '<div class="codex"><b>' + esc(c.title) + '</b><p>' + fmt(c.text) + '</p></div>' : ''; }).join('') || '<p class="muted">Nothing yet.</p>';
}
function slotInfo(k) { try { var s = JSON.parse(store('tithe_' + k)); var E = T.EPISODES[Math.min(s.ep, 8)]; return 'Level ' + s.lvl + ' · ' + (s.mode === 'hub' ? 'Between episodes before E' + s.ep : 'E' + s.ctx + ' ' + (E ? E.title : '')) + (s.when ? ' · ' + new Date(s.when).toLocaleString() : ''); } catch (e) { return null; } }
function jSave(b) {
  var h = '<p class="muted">The game autosaves at every scene. Saves live in this browser only; use the save code to move between devices.</p>';
  ['auto', 's1', 's2', 's3'].forEach(function (k) {
    var info = slotInfo(k);
    h += '<div class="slot"><b>' + (k === 'auto' ? 'Autosave' : 'Slot ' + k.slice(1)) + '</b><span class="muted">' + (info || 'Empty') + '</span>' +
      (k !== 'auto' ? '<button class="mini" data-sv="' + k + '">Save here</button>' : '') + (info ? '<button class="mini" data-ld="' + k + '">Load</button>' : '') + '</div>';
  });
  h += '<h3>Save code</h3><textarea id="code" rows="4" spellcheck="false" aria-label="Save code"></textarea><div class="row"><button class="mini" id="exp">Show my code</button><button class="mini" id="cpy">Copy</button><button class="mini" id="imp">Load from code</button></div>';
  h += '<h3>Start over</h3><div class="row"><button class="mini danger" id="newg">New game</button><span class="muted" id="newg-c"></span></div>';
  b.innerHTML = h;
  b.querySelectorAll('[data-sv]').forEach(function (x) { x.onclick = function () { save(x.dataset.sv); toast('Saved', 'good'); openJournal('save'); }; });
  b.querySelectorAll('[data-ld]').forEach(function (x) { x.onclick = function () { load(store('tithe_' + x.dataset.ld)); closeJournal(); }; });
  $('#exp').onclick = function () { $('#code').value = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); };
  $('#cpy').onclick = function () { var t = $('#code'); if (!t.value) t.value = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); try { navigator.clipboard.writeText(t.value).then(function () { toast('Copied'); }, function () { t.select(); }); } catch (e) { t.select(); } };
  $('#imp').onclick = function () { try { load(decodeURIComponent(escape(atob($('#code').value.trim())))); closeJournal(); } catch (e) { toast('That code didn\'t work. Check it was copied whole.', 'bad'); } };
  var armed = false;
  $('#newg').onclick = function () { if (!armed) { armed = true; $('#newg-c').textContent = 'Click again to confirm. Your autosave will be replaced.'; return; } closeJournal(); newGame(); };
}
function save(k) { if (!S || S.mode === 'title') return; S.when = Date.now(); store('tithe_' + k, JSON.stringify(S)); }
function load(json) {
  if (!json) return;
  var s = JSON.parse(json); var base = newState();
  for (var k in base) if (s[k] === undefined) s[k] = base[k];
  S = s; C = null; restoreView();
}
function restoreView() {
  closeOverlay();
  if (S.mode === 'hub' || S.mode === 'wild') return hub();
  story().innerHTML = (S.tx || []).slice(-12).join('');
  story().querySelectorAll('button').forEach(function (b) { b.disabled = true; });
  story().querySelectorAll('.combat').forEach(function (b) { b.removeAttribute('id'); });
  var n = getNode(S.node);
  if (!n) return hub();
  if (n.fight) { var last = S.tx[S.tx.length - 1] || ''; story().appendChild(el('p', 'echo', '…')); }
  renderNode(n);
  hud();
}

/* ---------- title screen ---------- */
function titleScreen() {
  S = newState();
  var auto = store('tithe_auto');
  overlay('<div class="titlescr"><div class="ts-kicker">A drama in seasons</div><div class="ts-show">TITHE</div><div class="ts-rule"></div><div class="ts-sub">Season One · The Marches</div>' +
    '<p class="ts-log">A broken sellsword who died for a night and came back wrong takes a job guarding a wagon into a frontier town where people are being emptied of their souls. The man who sold his company to the slaughter is waiting at the gate. And the stars have stopped being able to see him.</p>' +
    '<div class="ts-btns">' + (auto ? '<button class="btn" id="ts-cont">Continue</button>' : '') + '<button class="btn ' + (auto ? 'ghost' : '') + '" id="ts-new">' + (auto ? 'New game' : 'Begin') + '</button></div>' +
    '<p class="ts-warn">For adults. Contains graphic violence, gore, sexual content, religious horror, and themes of torture, abuse and grief.</p></div>', 'card title');
  $('#ts-new').onclick = function () { closeOverlay(); newGame(); };
  if (auto) $('#ts-cont').onclick = function () { load(auto); };
}
function newGame() { S = newState(); S.hp = maxHp(); S.st = maxSt(); startEpisode(1); }

/* ---------- boot ---------- */
function boot(data) {
  $('#jclose').onclick = closeJournal;
  $('#hud-j').onclick = function () { openJournal('ansel'); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('#journal').hidden) closeJournal();
    if (/^[1-9]$/.test(e.key) && $('#journal').hidden && $('#overlay').hidden) {
      var bs = Array.prototype.filter.call(document.querySelectorAll('#story .choices:not(.done) button.choice, #actions button'), function (b) { return !b.disabled; });
      var b = bs[+e.key - 1]; if (b) b.click();
    }
  });
  if (data && data.S) { S = data.S; restoreView(); } else titleScreen();
  hud();
}
T._debug = { get S() { return S; }, set S(v) { S = v; }, goTo: goTo, startEpisode: startEpisode, hub: hub, fx: fx, cond: cond, maxHp: maxHp, load: load, restoreView: restoreView };
if (window.claude && window.claude.hot) { try { window.claude.hot.snapshot(function () { return { S: S && S.mode !== 'title' ? S : null }; }); } catch (e) {} }
var start = function (d) { boot(d || {}); };
if (window.claude && window.claude.hot && window.claude.hot.ready) window.claude.hot.ready(start); else document.addEventListener('DOMContentLoaded', function () { start(window.claude && window.claude.hot && window.claude.hot.data || {}); });
})();
