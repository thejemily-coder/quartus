/* QUARTUS — browser UI. */
(function () {
  'use strict';
  var Q = window.Q, S = null;
  var $ = function (s) { return document.querySelector(s); };
  var KEY = 'quartus.';

  /* ---------- storage (wrapped: may be unavailable) ---------- */
  var Store = Q.Store;
  var settings = { size: 'm', theme: 'night', motion: true };
  var adult = false;
  function mergePrefs(p) {
    if (p.settings) for (var k in p.settings) settings[k] = p.settings[k];
    if (p.adult) adult = true;
  }
  mergePrefs(Store.localPrefs());
  function applySettings(persist) {
    document.documentElement.dataset.size = settings.size;
    document.documentElement.dataset.skin = settings.theme;
    document.documentElement.dataset.motion = settings.motion ? 'on' : 'off';
    if (persist) Store.putPrefs({ settings: settings, adult: adult });
  }

  /* ---------- text ---------- */
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function md(t) {
    return esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
  }
  function povColor(id) { return (Q.chars[id] && Q.chars[id].color) || '#8a8378'; }

  /* ---------- saves ---------- */
  function save(slot) {
    return Store.put(slot, { t: Date.now(), label: Q.label(S), state: JSON.parse(JSON.stringify(S)) });
  }
  function loadRec(slot) { return Store.get(slot); }

  /* ---------- rendering ---------- */
  var stage = $('#stage');
  var staggered = 0;

  function blocksHtml(blocks, first) {
    var out = '', i = 0, firstPara = first;
    blocks.forEach(function (b) {
      var delay = settings.motion ? ' style="animation-delay:' + (i++ * 90) + 'ms"' : '';
      if (b.card) out += '<div class="epigraph rise"' + delay + '>' + md(b.card) + '</div>';
      else if (b.h) out += '<h3 class="subhead rise"' + delay + '>' + md(b.h) + '</h3>';
      else if (b.rule) out += '<hr class="rise"' + delay + '>';
      else if (b.say) out += '<p class="say rise"' + delay + '><span class="who">' + esc(b.say) + '</span> ' + md(b.t) + '</p>';
      else if (b.quiet) out += '<p class="quiet rise"' + delay + '>' + md(b.quiet) + '</p>';
      else { out += '<p class="rise' + (firstPara && b.t.length > 140 ? ' drop' : '') + '"' + delay + '>' + md(b.t) + '</p>'; firstPara = false; }
    });
    return out;
  }

  function hpPips(hp, max, cls) {
    var h = '<span class="pips ' + (cls || '') + '" aria-label="' + hp + ' of ' + max + '">';
    for (var i = 0; i < max; i++) h += '<i class="' + (i < hp ? 'on' : '') + '"></i>';
    return h + '</span>';
  }

  function header(v) {
    var povTxt = '';
    if (v.pov && Q.chars[v.pov] && !Q.chars[v.pov].guest) {
      var c = S.chars[v.pov];
      povTxt = '<span class="povname" style="color:' + povColor(v.pov) + '">' + esc(Q.chars[v.pov].short) + '</span>' + (c ? hpPips(c.hp, c.maxHp, 'sm') : '');
    }
    $('#povbar').innerHTML = povTxt;
  }

  function render() {
    var v = Q.view(S);
    $('#app').dataset.mode = v.kind;
    stage.className = 'stage k-' + v.kind;
    var h = '', first = true;
    header(v);
    drainToasts();
    window.scrollTo(0, 0);

    if (v.kind === 'ep_title') {
      h += '<div class="card epcard"><div class="small">' + esc(v.season) + '</div>' +
        '<div class="epnum">Episode ' + v.num + '</div><h1>' + esc(v.title) + '</h1>' +
        '<p class="logline">' + md(v.logline) + '</p>';
      if (v.recap.length) h += '<div class="recap"><div class="small">Previously</div><ul>' + v.recap.map(function (r) { return '<li>' + md(r) + '</li>'; }).join('') + '</ul></div>';
      h += '<button class="btn primary" data-act="adv">Begin</button></div>';
    } else if (v.kind === 'ch_title') {
      h += '<div class="card chcard" style="--pov:' + povColor(v.pov) + '">' +
        (v.povName ? '<div class="small">' + esc(v.povName) + '</div>' : '') +
        '<h2>' + esc(v.title) + '</h2><div class="place">' + esc(v.place || '') + '</div>' +
        '<button class="btn" data-act="adv">Continue</button></div>';
    } else if (v.kind === 'scene') {
      h += '<article class="scene" style="--pov:' + povColor(v.pov) + '">';
      if (v.place) h += '<div class="place">' + esc(v.place) + '</div>';
      if (v.title) h += '<h2 class="stitle">' + esc(v.title) + '</h2>';
      h += blocksHtml(v.blocks, true);
      h += '<div class="choices">';
      if (v.cont) h += '<button class="btn primary" data-act="adv"' + (v.end ? ' data-end="1"' : '') + '>' + esc(v.cont) + '</button>';
      v.choices.forEach(function (c) {
        h += '<button class="choice' + (c.locked ? ' locked' : '') + '" data-i="' + c.i + '"' + (c.locked ? ' disabled' : '') + '>' +
          '<span class="num">' + (c.i + 1) + '</span><span class="lbl">' +
          (c.tag ? '<b class="tag">' + esc(c.tag) + '</b> ' : '') + md(c.label) +
          (c.hint ? ' <em class="hint">[' + esc(c.hint) + ']</em>' : '') +
          (c.locked && c.reason ? ' <em class="hint">(' + esc(c.reason) + ')</em>' : '') + '</span></button>';
      });
      h += '</div></article>';
    } else if (v.kind === 'check') {
      var r = v.r;
      h += '<div class="card checkcard ' + (r.success ? 'win' : 'loss') + '"><div class="small">' + esc(v.label) + ' — ' + v.diff + ' (' + v.dc + ')</div>' +
        '<div class="dice"><span class="die">' + r.dice[0] + '</span><span class="die">' + r.dice[1] + '</span></div>' +
        '<div class="sum">' + r.dice[0] + ' + ' + r.dice[1] + ' + ' + r.base + ' ' + esc(v.stat) + (r.why.length ? ' ' + esc(r.why.join(' ')) : '') + ' = <b>' + r.total + '</b></div>' +
        '<div class="verdict">' + (r.crit ? 'Fortune favors you' : r.fumble ? 'Disaster' : r.success ? 'Success' : 'Failure') + '</div>' +
        '<div class="row">' +
        (v.canFortune ? '<button class="btn" data-act="fortune">Call on Fortune (' + v.fortune + ')</button>' : '') +
        '<button class="btn primary" data-act="adv">Continue</button></div></div>';
    } else if (v.kind === 'combat') {
      h += '<article class="scene combat" style="--pov:' + povColor(v.pov) + '">';
      if (v.place) h += '<div class="place">' + esc(v.place) + '</div>';
      h += '<div class="duel"><div class="side"><div class="small">You</div>' + hpPips(v.you.hp, v.you.maxHp) + '</div>' +
        '<div class="vs">⚔</div><div class="side"><div class="small">' + esc(v.enemy.name) + '</div>' + hpPips(v.enemy.hp, v.enemy.maxHp, 'foe') + '</div></div>';
      if (!v.log.length) h += blocksHtml(v.blocks, true);
      v.log.forEach(function (l, idx) { h += '<div class="round">' + l.map(function (t) { return '<p class="rise">' + md(t) + '</p>'; }).join('') + '</div>'; });
      if (v.off) h += '<p class="quiet">Your foe is off-balance.</p>';
      h += '<div class="choices">';
      if (v.over) h += '<button class="btn primary" data-act="adv">Continue</button>';
      v.actions.forEach(function (a, i) {
        h += '<button class="choice" data-a="' + a.id + '"><span class="num">' + (i + 1) + '</span><span class="lbl">' + esc(a.label) + ' <em class="hint">[' + esc(a.hint) + ']</em></span></button>';
      });
      h += '</div></article>';
    } else if (v.kind === 'death') {
      h += '<div class="card deathcard"><div class="small">In memoriam</div><h2>' + esc(v.name) + '</h2><p class="quiet">' + md(v.cause || 'The story goes on without them.') + '</p><button class="btn primary" data-act="adv">Continue</button></div>';
    } else if (v.kind === 'ep_end') {
      h += '<div class="card epend"><div class="small">End of Episode ' + v.num + '</div><h2>' + esc(v.title) + '</h2>';
      if (v.echoes.length) h += '<div class="recap"><div class="small">The realm will remember</div><ul>' + v.echoes.map(function (e) { return '<li>' + md(e) + '</li>'; }).join('') + '</ul></div>';
      h += '<div class="cast">' + v.cast.map(function (c) {
        return '<div class="castrow ' + (c.alive ? '' : 'dead') + '" style="--pov:' + povColor(c.id) + '"><span>' + esc(c.name) + '</span><span>' + (c.alive ? hpPips(c.hp, c.maxHp, 'sm') : 'Dead') + '</span></div>';
      }).join('') + '</div>';
      if (v.teaser) h += '<p class="quiet">' + md(v.teaser) + '</p>';
      h += '<button class="btn primary" data-act="adv">' + (v.hasNext ? 'Next: ' + esc(v.next) : 'Continue') + '</button></div>';
    } else if (v.kind === 'gameover') {
      h += '<div class="card deathcard"><div class="small">' + esc(Q.SEASON_NAME) + '</div><h2>The Season Ends in Ash</h2><p class="quiet">There is no one left to carry the story. The bell will ring again, and there will be no one in Highgarrow who knows what it counts.</p><div class="cast">' +
        v.cast.map(function (c) { return '<div class="castrow dead" style="--pov:' + povColor(c.id) + '"><span>' + esc(c.name) + '</span><span>Dead</span></div>'; }).join('') +
        '</div><div class="row"><button class="btn" data-act="menu">Main menu</button></div></div>';
    } else if (v.kind === 'tbc') {
      h += '<div class="card epend"><div class="small">' + esc(Q.SEASON_NAME) + '</div><h2>To be continued</h2><p class="quiet">The next episode is still being written. Your save is safe; come back and the story will carry on from here.</p>' +
        '<div class="row"><button class="btn" data-act="menu">Main menu</button></div></div>';
    }
    stage.innerHTML = h;
    if (v.kind !== 'ep_title' && v.kind !== 'ch_title') autosave();
  }

  function autosave() { if (S) Store.queueAuto(S, Q.label(S)); }

  function drainToasts() {
    var box = $('#toasts');
    while (Q.toasts.length) {
      var t = Q.toasts.shift();
      var el = document.createElement('div');
      el.className = 'toast ' + t.kind; el.textContent = t.text;
      box.appendChild(el);
      (function (el) { setTimeout(function () { el.classList.add('out'); setTimeout(function () { el.remove(); }, 600); }, 3600); })(el);
    }
  }

  /* ---------- actions ---------- */
  function adv() { Q.advance(S); render(); }
  function choose(i) { Q.choose(S, i); render(); }

  stage.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || b.disabled) return;
    if (b.dataset.act === 'adv') adv();
    else if (b.dataset.act === 'fortune') { Q.useFortune(S); render(); }
    else if (b.dataset.act === 'menu') showTitle();
    else if (b.dataset.i !== undefined) choose(+b.dataset.i);
    else if (b.dataset.a) { Q.combatAct(S, b.dataset.a); render(); }
  });

  document.addEventListener('keydown', function (e) {
    if (!S || $('#modal').classList.contains('open') || $('#title').classList.contains('open')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 9) {
      var btns = stage.querySelectorAll('.choice:not(.locked)');
      var all = stage.querySelectorAll('.choice');
      if (all[n - 1] && !all[n - 1].disabled) all[n - 1].click();
    } else if (e.key === 'Enter' || e.key === ' ') {
      var p = stage.querySelector('.btn.primary,.btn[data-act="adv"]');
      if (p && !stage.querySelector('.choice')) { e.preventDefault(); p.click(); }
    }
  });

  /* ---------- modals ---------- */
  function openModal(html) {
    var m = $('#modal'); m.innerHTML = '<div class="sheet" role="dialog" aria-modal="true"><button class="x" data-close aria-label="Close">×</button>' + html + '</div>';
    m.classList.add('open');
  }
  function closeModal() { $('#modal').classList.remove('open'); }
  $('#modal').addEventListener('click', function (e) {
    if (e.target.id === 'modal' || e.target.hasAttribute('data-close')) { closeModal(); return; }
    var b = e.target.closest('[data-do]'); if (!b) return;
    var d = b.dataset.do;
    if (d === 'tab') journal(b.dataset.tab);
    else if (d === 'save') { save(b.dataset.slot).then(saves); }
    else if (d === 'load') { loadRec(b.dataset.slot).then(function (r) { if (r) { S = r.state; closeModal(); hideTitle(); render(); } }); }
    else if (d === 'newok') { closeModal(); S = Q.newState(); hideTitle(); render(); }
    else if (d === 'cancel') { closeModal(); }
    else if (d === 'size') { settings.size = b.dataset.v; applySettings(true); settingsModal(); }
    else if (d === 'theme') { settings.theme = b.dataset.v; applySettings(true); settingsModal(); }
    else if (d === 'motion') { settings.motion = !settings.motion; applySettings(true); settingsModal(); }
    else if (d === 'export') { var ta = $('#codebox'); ta.value = btoa(unescape(encodeURIComponent(Q.serialize(S)))); ta.select(); }
    else if (d === 'import') {
      try { var st = Q.deserialize(decodeURIComponent(escape(atob($('#codebox').value.trim())))); S = st; closeModal(); hideTitle(); render(); }
      catch (err) { $('#codemsg').textContent = 'That code could not be read.'; }
    }
  });

  function journal(tab) {
    tab = tab || 'cast';
    var tabs = [['cast', 'Company'], ['bonds', 'Bonds'], ['whispers', 'Whispers'], ['chron', 'Chronicle']];
    var h = '<h2>Journal</h2><div class="tabs">' + tabs.map(function (t) { return '<button data-do="tab" data-tab="' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div><div class="tabbody">';
    if (tab === 'cast') {
      Q.POVS.forEach(function (id) {
        var c = S.chars[id], d = Q.chars[id];
        h += '<div class="member" style="--pov:' + d.color + '"><div class="mh"><b>' + esc(d.name) + '</b><span class="ep">' + esc(d.epithet) + '</span></div>';
        if (!c.alive) h += '<div class="quiet">Dead.</div>';
        else {
          h += '<div class="stats">' + ['blade', 'wit', 'guile', 'faith'].map(function (s) { return '<span>' + s + ' <b>' + c.stats[s] + '</b></span>'; }).join('') + '<span>coin <b>' + c.coin + '</b></span></div>' + hpPips(c.hp, c.maxHp) + ' <span class="quiet">Fortune ' + c.fortune + '</span>';
        }
        h += '<p class="blurb">' + esc(d.blurb) + '</p></div>';
      });
      var items = Object.keys(S.items);
      h += '<h3 class="subhead">Keepsakes</h3>' + (items.length ? '<ul>' + items.map(function (i) { return '<li>' + md(S.items[i]) + '</li>'; }).join('') + '</ul>' : '<p class="quiet">Nothing yet.</p>');
      h += '<h3 class="subhead">Omens</h3><p class="quiet">' + (S.omens ? 'You have counted ' + S.omens + ' things that should not be.' : 'None you could swear to.') + '</p>';
    } else if (tab === 'bonds') {
      var any = false;
      function lab(n) { return n >= 4 ? 'Devoted' : n === 3 ? 'Trusting' : n === 2 ? 'Friendly' : n === 1 ? 'Warm' : n === 0 ? 'Unsettled' : n === -1 ? 'Wary' : n === -2 ? 'Cold' : n === -3 ? 'Hostile' : 'Sworn enemy'; }
      Q.POVS.forEach(function (p) {
        var rows = Object.keys(S.rel).filter(function (k) { return k.indexOf(p + '>') === 0; });
        if (!rows.length) return; any = true;
        h += '<h3 class="subhead" style="color:' + povColor(p) + '">' + esc(Q.chars[p].short) + '</h3><ul class="bonds">' + rows.map(function (k) {
          var n = S.rel[k], id = k.split('>')[1];
          return '<li><span>' + esc(Q.npcName(id)) + '</span><span class="b' + (n > 0 ? ' pos' : n < 0 ? ' neg' : '') + '">' + lab(n) + '</span></li>';
        }).join('') + '</ul>';
      });
      if (!any) h += '<p class="quiet">No one has yet decided what they think of you.</p>';
    } else if (tab === 'whispers') {
      var cl = Object.keys(S.clues);
      h += cl.length ? '<ul>' + cl.map(function (c) { return '<li>' + md(S.clues[c]) + '</li>'; }).join('') + '</ul>' : '<p class="quiet">You have heard nothing worth writing down. Yet.</p>';
    } else {
      var eps = {};
      S.echoes.forEach(function (e) { (eps[e.ep] = eps[e.ep] || []).push(e.text); });
      var ks = Object.keys(eps);
      h += ks.length ? ks.map(function (k) { return '<h3 class="subhead">Episode ' + k + '</h3><ul>' + eps[k].map(function (t) { return '<li>' + md(t) + '</li>'; }).join('') + '</ul>'; }).join('') : '<p class="quiet">Nothing has been decided that cannot be undone.</p>';
    }
    openModal(h + '</div>');
  }

  function saves() {
    openModal('<h2>Saves</h2><p class="quiet">Loading…</p>');
    Promise.all([Store.get('slot1'), Store.get('slot2'), Store.get('slot3'), Store.get('auto')]).then(function (recs) {
      var d = Store.describe();
      var h = '<h2>Saves</h2><p class="syncnote ' + (d.cloud ? 'on' : '') + '">' + (d.cloud ? '☁ ' : '') + esc(d.text) + '</p><p class="quiet">The game autosaves after every step. Manual slots are for branching your own story.</p>';
      [1, 2, 3].forEach(function (n) {
        var r = recs[n - 1];
        h += '<div class="slot"><div><b>Slot ' + n + '</b><div class="quiet">' + (r ? esc(r.label) + ' — ' + new Date(r.t).toLocaleString() : 'Empty') + '</div></div><div>' +
          (S ? '<button class="btn sm" data-do="save" data-slot="slot' + n + '">Save</button>' : '') +
          (r ? '<button class="btn sm" data-do="load" data-slot="slot' + n + '">Load</button>' : '') + '</div></div>';
      });
      var a = recs[3];
      h += '<div class="slot"><div><b>Autosave</b><div class="quiet">' + (a ? esc(a.label) + ' — ' + new Date(a.t).toLocaleString() : 'Empty') + '</div></div><div>' + (a ? '<button class="btn sm" data-do="load" data-slot="auto">Load</button>' : '') + '</div></div>';
      h += '<h3 class="subhead">Save code</h3><p class="quiet">A save code is plain text you can paste anywhere. Use it as a backup, or to move a game between accounts.</p><textarea id="codebox" rows="3" ' + (S ? '' : 'placeholder="Paste a save code here"') + '></textarea><div class="row">' + (S ? '<button class="btn sm" data-do="export">Show my code</button>' : '') + '<button class="btn sm" data-do="import">Load from code</button></div><div id="codemsg" class="quiet"></div>';
      openModal(h);
    });
  }

  function settingsModal() {
    function seg(name, opts, cur) { return '<div class="seg">' + opts.map(function (o) { return '<button data-do="' + name + '" data-v="' + o[0] + '" class="' + (cur === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>'; }
    openModal('<h2>Settings</h2><h3 class="subhead">Text size</h3>' + seg('size', [['s', 'Small'], ['m', 'Medium'], ['l', 'Large']], settings.size) +
      '<h3 class="subhead">Theme</h3>' + seg('theme', [['night', 'Night'], ['parchment', 'Parchment']], settings.theme) +
      '<h3 class="subhead">Motion</h3>' + seg('motion', [['x', settings.motion ? 'Fades on — click to turn off' : 'Fades off — click to turn on']], 'x'));
  }

  $('#btn-journal').addEventListener('click', function () { if (S) journal('cast'); });
  $('#btn-saves').addEventListener('click', saves);
  $('#btn-settings').addEventListener('click', settingsModal);
  $('#btn-menu').addEventListener('click', showTitle);

  /* ---------- title screen ---------- */
  var titleAuto = null;
  function showTitle() {
    var a = titleAuto;
    var t = $('#title');
    var d = Store.describe();
    var checked = ($('#adult') ? $('#adult').checked : adult);
    t.innerHTML = '<div class="titlecard"><div class="small">A drama in ten episodes</div><h1>' + esc(Q.GAME_TITLE) + '</h1><div class="small">' + esc(Q.SEASON_NAME) + '</div>' +
      '<div class="gate"><label><input type="checkbox" id="adult"' + (checked ? ' checked' : '') + '> I am 18 or older, and I understand this story contains graphic violence, explicit sexual content, cruelty, and religious and political atrocity.</label></div>' +
      '<div class="tmenu"><button class="btn primary" id="t-new"' + (checked ? '' : ' disabled') + '>New Game</button>' +
      (a ? '<button class="btn" id="t-cont"' + (checked ? '' : ' disabled') + '>Continue <span class="quiet">' + esc(a.label) + '</span></button>' : '') +
      '<button class="btn" id="t-saves">Saves</button><button class="btn" id="t-set">Settings</button></div>' +
      '<p class="syncnote ' + (d.cloud ? 'on' : '') + '">' + (d.cloud ? '☁ Cloud saves on' : (Store.ready && Store.mode === 'local' && Store.reason ? 'Saves on this device only' : 'Checking saves…')) + '</p>' +
      '<p class="quiet foot">Choices carry across episodes. Characters can die, and they stay dead.</p></div>';
    t.classList.add('open');
    $('#adult').onchange = function () {
      adult = this.checked; applySettings(true);
      $('#t-new').disabled = !this.checked; if ($('#t-cont')) $('#t-cont').disabled = !this.checked;
    };
    $('#t-new').onclick = function () {
      if (!a) { S = Q.newState(); hideTitle(); render(); return; }
      openModal('<h2>Start a new game?</h2><p>Your autosave (' + esc(a.label) + ') will be replaced as you play. Manual save slots are not touched.</p><div class="row"><button class="btn primary" data-do="newok">Start new game</button><button class="btn" data-do="cancel">Keep my game</button></div>');
    };
    if ($('#t-cont')) $('#t-cont').onclick = function () { S = a.state; hideTitle(); render(); };
    $('#t-saves').onclick = saves; $('#t-set').onclick = settingsModal;
  }
  function hideTitle() { $('#title').classList.remove('open'); }

  applySettings(false);
  showTitle();
  // Connect to cloud saves in the background, then refresh the title screen and preferences.
  Store.onChange = function () { if ($('#title').classList.contains('open')) showTitle(); };
  Store.init().then(function () {
    return Promise.all([Store.getPrefs(), Store.get('auto')]);
  }).then(function (r) {
    mergePrefs(r[0]); applySettings(false);
    titleAuto = r[1];
    if ($('#title').classList.contains('open')) showTitle();
  }).catch(function () { if ($('#title').classList.contains('open')) showTitle(); });
  // Local mirror is available immediately, before the cloud answers.
  (function () { try { var a = JSON.parse(localStorage.getItem('quartus.save.auto')); if (a && !titleAuto) { titleAuto = a; showTitle(); } } catch (e) {} })();
  window.Q.dbg = function () { return S; };
})();
