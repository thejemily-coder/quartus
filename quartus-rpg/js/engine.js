/* QUARTUS — narrative engine. Pure logic: no DOM access, so it can be tested headlessly. */
(function (root) {
  'use strict';
  var Q = root.Q = root.Q || {};

  Q.VERSION = 1;
  Q.chars = {};      // POV definitions (see data/world.js)
  Q.npcs = {};       // NPC registry: id -> {name, role}
  Q.scenes = {};     // every scene, all episodes
  Q.episodes = {};   // by episode number
  Q.rng = Math.random;
  Q.toasts = [];     // ephemeral UI notifications, drained by the UI
  Q.TOTAL_EPISODES = 10;

  /* ---------- registration ---------- */
  Q._parts = {};
  // Episodes may be split across files: Q.part(n, scenes) per file, then Q.defineEpisode(meta) last.
  Q.part = function (n, scenes) {
    var p = Q._parts[n] = Q._parts[n] || {};
    Object.keys(scenes).forEach(function (k) {
      if (p[k]) throw new Error('Duplicate scene id in part: ' + k);
      p[k] = scenes[k];
    });
  };
  Q.defineEpisode = function (ep) { ep.scenes = Q._parts[ep.num] || {}; Q.addEpisode(ep); };

  Q.addEpisode = function (ep) {
    Object.keys(ep.scenes).forEach(function (id) {
      if (Q.scenes[id]) throw new Error('Duplicate scene id: ' + id);
      ep.scenes[id].id = id;
      ep.scenes[id].ep = ep.num;
      Q.scenes[id] = ep.scenes[id];
    });
    Q.episodes[ep.num] = ep;
  };

  /* ---------- state ---------- */
  Q.newState = function () {
    var S = {
      v: Q.VERSION, ep: 1, ci: -1, scene: null, pov: null,
      mode: 'ep_title', md: null,
      f: {}, rel: {}, met: {}, chars: {}, items: {}, clues: {},
      omens: 0, echoes: [], chron: [], visited: {}, deaths: []
    };
    Object.keys(Q.chars).forEach(function (id) {
      var c = Q.chars[id];
      if (c.guest) return;
      S.chars[id] = {
        alive: true, hp: c.hp, maxHp: c.hp, fortune: 1,
        stats: JSON.parse(JSON.stringify(c.stats)), coin: c.coin || 0
      };
    });
    Q.beginEpisode(S, 1);
    return S;
  };

  Q.beginEpisode = function (S, n) {
    var ep = Q.episodes[n];
    S.ep = n; S.ci = -1; S.scene = null; S.mode = 'ep_title';
    Object.keys(S.chars).forEach(function (id) {
      var c = S.chars[id];
      if (!c.alive) return;
      if (n > 1) c.hp = Math.min(c.maxHp, c.hp + 4);
      c.fortune = 1;
    });
    if (ep.setup) ep.setup(Q.ctx(S));
    var prev = S.echoes.filter(function (e) { return e.ep === n - 1; }).slice(-6);
    S.md = { recap: n > 1 ? prev.map(function (e) { return e.text; }) : [] };
  };

  /* ---------- context passed to scene functions ---------- */
  Q.ctx = function (S) {
    var s = {
      S: S, f: S.f,
      get pov() { return S.pov; },
      get omens() { return S.omens; },
      alive: function (id) { return !!(S.chars[id] && S.chars[id].alive); },
      char: function (id) { return S.chars[id || S.pov]; },
      hp: function (id) { var c = S.chars[id || S.pov]; return c ? c.hp : 0; },
      visits: function (id) { return S.visited[id] || 0; },
      seen: function (id) { return (S.visited[id] || 0) > 0; },
      has: function (id) { return !!S.items[id]; },
      hasClue: function (id) { return !!S.clues[id]; },
      met: function (id) { return !!S.met[id]; },
      rel: function (npc, who) { return S.rel[relKey(S, npc, who)] || 0; },
      addRel: function (npc, n, who) {
        var k = relKey(S, npc, who);
        var old = S.rel[k] || 0, nv = Math.max(-5, Math.min(5, old + n));
        S.rel[k] = nv; S.met[k.split('>')[1]] = true;
        if (nv !== old) toast((n > 0 ? '+ ' : '− ') + npcName(k.split('>')[1]) + ' will remember that.', n > 0 ? 'good' : 'bad');
      },
      meet: function (npc) { S.met[npc] = true; },
      give: function (id, text) { if (!S.items[id]) { S.items[id] = text; toast('Gained: ' + text.split(' — ')[0], 'item'); } },
      take: function (id) { delete S.items[id]; },
      clue: function (id, text) { if (!S.clues[id]) { S.clues[id] = text; toast('A whisper noted.', 'clue'); } },
      omen: function (n) { S.omens = Math.max(0, S.omens + (n === undefined ? 1 : n)); },
      hurt: function (n, who) { var c = S.chars[who || S.pov]; if (!c) return; c.hp = Math.max(1, c.hp - n); toast('Wounded (−' + n + ')', 'bad'); },
      heal: function (n, who) { var c = S.chars[who || S.pov]; if (!c) return; c.hp = Math.min(c.maxHp, c.hp + n); },
      pay: function (n, who) { var c = S.chars[who || S.pov]; if (c) c.coin = Math.max(0, c.coin + n); },
      boost: function (stat, n, who) { var c = S.chars[who || S.pov]; if (c) { c.stats[stat] = Math.max(0, c.stats[stat] + n); toast(cap(stat) + (n > 0 ? ' +' : ' ') + n, 'good'); } },
      kill: function (who, cause) {
        var c = S.chars[who]; if (!c || !c.alive) return;
        c.alive = false; c.hp = 0;
        S.deaths.push({ who: who, ep: S.ep, cause: cause || '' });
        S.chron.push({ ep: S.ep, text: Q.chars[who].name + ' died. ' + (cause || '') });
      },
      echo: function (text) { S.echoes.push({ ep: S.ep, text: text }); },
      stat: function (name, who) { return effStat(S, name, who || S.pov); }
    };
    return s;
  };

  function relKey(S, npc, who) { return npc.indexOf('>') >= 0 ? npc : (who || S.pov) + '>' + npc; }
  function npcName(id) { return (Q.npcs[id] && Q.npcs[id].name) || (Q.chars[id] && Q.chars[id].name) || id; }
  function cap(x) { return x.charAt(0).toUpperCase() + x.slice(1); }
  function toast(text, kind) { Q.toasts.push({ text: text, kind: kind || '' }); }
  Q.npcName = npcName;

  function effStat(S, name, who) {
    var c = S.chars[who]; if (!c) return 0;
    var v = c.stats[name] || 0;
    if (c.hp <= 3 && name === 'blade') v -= 1;
    if (c.hp <= 1) v -= 1;
    return Math.max(0, v);
  }

  /* declarative effects: set, rel, omens, hurt, heal, coin, give, take, clue, echo, kill, boost, meet, fx */
  Q.applyFx = function (s, o) {
    if (!o) return;
    var k;
    if (o.set) for (k in o.set) s.f[k] = o.set[k];
    if (o.rel) for (k in o.rel) s.addRel(k, o.rel[k]);
    if (o.meet) o.meet.forEach(function (n) { s.meet(n); });
    if (o.omens) s.omen(o.omens);
    if (o.hurt) s.hurt(o.hurt);
    if (o.heal) s.heal(o.heal);
    if (o.coin) s.pay(o.coin);
    if (o.give) for (k in o.give) s.give(k, o.give[k]);
    if (o.take) o.take.forEach(function (i) { s.take(i); });
    if (o.clue) for (k in o.clue) s.clue(k, o.clue[k]);
    if (o.boost) for (k in o.boost) s.boost(k, o.boost[k]);
    if (o.echo) s.echo(o.echo);
    if (o.kill) { if (typeof o.kill === 'string') s.kill(o.kill); else s.kill(o.kill.who, o.kill.cause); }
    if (o.fx) o.fx(s);
  };

  /* ---------- dice ---------- */
  function d6() { return 1 + Math.floor(Q.rng() * 6); }
  Q.diffName = function (dc) { return dc <= 7 ? 'Easy' : dc <= 9 ? 'Fair' : dc <= 11 ? 'Hard' : 'Dire'; };

  function rollCheck(S, spec, who) {
    var s = Q.ctx(S);
    var base = effStat(S, spec.stat, who), mod = 0, why = [];
    (spec.mods || []).forEach(function (m) {
      if (!m.if || m.if(s)) { mod += m.n; why.push((m.n > 0 ? '+' : '') + m.n + ' ' + m.why); }
    });
    var a = d6(), b = d6();
    var total = a + b + base + mod;
    var crit = (a === 6 && b === 6), fumble = (a === 1 && b === 1);
    var success = crit || (!fumble && total >= spec.dc);
    return { dice: [a, b], base: base, mod: mod, why: why, total: total, success: success, crit: crit, fumble: fumble };
  }

  /* ---------- flow ---------- */
  Q.goto = function (S, id) {
    var guard = 0, sc;
    for (;;) {
      sc = Q.scenes[id];
      if (!sc) throw new Error('Missing scene: ' + id);
      if (++guard > 20) throw new Error('Route loop at ' + id);
      S.scene = id;
      S.visited[id] = (S.visited[id] || 0) + 1;
      if (sc.pov) S.pov = sc.pov;
      var s = Q.ctx(S);
      Q.applyFx(s, sc);
      if (sc.route) { id = sc.route(s); continue; }
      break;
    }
    if (sc.combat) {
      var e = sc.combat.enemy;
      S.mode = 'combat';
      S.md = { hp: e.hp, maxHp: e.hp, off: false, wary: false, round: 0, log: [], over: null };
    } else {
      S.mode = 'scene'; S.md = null;
    }
  };

  function nextChapter(S) {
    var ep = Q.episodes[S.ep];
    for (;;) {
      S.ci++;
      if (S.ci >= ep.chapters.length) { S.mode = 'ep_end'; S.md = null; S.scene = null; return; }
      var ch = ep.chapters[S.ci], s = Q.ctx(S);
      if (ch.if && !ch.if(s)) continue;
      var chosen = ch;
      var pc = S.chars[ch.pov];
      if (pc && !pc.alive) { if (ch.deadAlt) chosen = ch.deadAlt; else continue; }
      S.pov = chosen.pov;
      S.mode = 'ch_title'; S.md = { start: chosen.start, title: chosen.title, place: chosen.place, pov: chosen.pov };
      return;
    }
  }

  function endChapter(S) {
    var ep = Q.episodes[S.ep], ch = ep.chapters[S.ci];
    var pov = ch && ch.pov, c = pov && S.chars[pov];
    if (c && !c.alive && !(S.md && S.md.shown) && S.deaths.some(function (d) { return d.who === pov && d.ep === S.ep && !d.shown; })) {
      var d = S.deaths.filter(function (x) { return x.who === pov && !x.shown; })[0];
      d.shown = true;
      S.mode = 'death'; S.md = { who: pov, cause: d.cause };
      return;
    }
    nextChapter(S);
  }

  Q.advance = function (S) {
    var sc;
    switch (S.mode) {
      case 'ep_title': nextChapter(S); break;
      case 'ch_title': Q.goto(S, S.md.start); break;
      case 'scene':
        sc = Q.scenes[S.scene];
        if (sc.end) endChapter(S);
        else if (sc.next) Q.goto(S, sc.next);
        break;
      case 'death': nextChapter(S); break;
      case 'check': resolveCheck(S); break;
      case 'combat':
        if (S.md.over) {
          var cb = Q.scenes[S.scene].combat, o = S.md.over;
          if (o === 'lose' && cb.lethal) Q.ctx(S).kill(S.pov, cb.deathCause || 'Cut down in single combat.');
          Q.goto(S, o === 'win' ? cb.win : o === 'yield' ? (cb.yieldTo || cb.lose) : o === 'flee' ? cb.fleeTo : cb.lose);
        }
        break;
      case 'ep_end':
        if (Q.episodes[S.ep + 1]) Q.beginEpisode(S, S.ep + 1);
        else { S.mode = 'tbc'; S.md = null; }
        break;
    }
  };

  Q.choose = function (S, idx) {
    var sc = Q.scenes[S.scene], s = Q.ctx(S);
    var list = visibleChoices(S, sc);
    var ch = list[idx];
    if (!ch || ch.locked) return;
    var src = ch.src;
    Q.applyFx(s, src);
    if (src.check) {
      var spec = src.check, r = rollCheck(S, spec, S.pov);
      S.mode = 'check';
      S.md = {
        stat: spec.stat, dc: spec.dc, label: spec.label || cap(spec.stat), r: r, fortuneUsed: false,
        pass: spec.pass, fail: spec.fail, crit: spec.crit, fumble: spec.fumble,
        passFx: spec.passFx, failFx: spec.failFx, spec: null
      };
      S.md.specIdx = ch.raw; // raw index into sc.choices, so mods can be recomputed on a Fortune reroll
      return;
    }
    Q.goto(S, src.goto);
  };

  function resolveCheck(S) {
    var m = S.md, s = Q.ctx(S), r = m.r;
    var sc = Q.scenes[S.scene];
    var src = sc.choices[m.specIdx];
    var dest;
    if (r.success) { Q.applyFx(s, src.check.passFx); dest = (r.crit && m.crit) || m.pass; }
    else { Q.applyFx(s, src.check.failFx); dest = (r.fumble && m.fumble) || m.fail; }
    Q.goto(S, dest);
  }

  Q.useFortune = function (S) {
    var m = S.md, c = S.chars[S.pov];
    if (S.mode !== 'check' || m.r.success || m.fortuneUsed || !c || c.fortune < 1) return;
    var sc = Q.scenes[S.scene];
    var src = sc.choices[m.specIdx];
    c.fortune--;
    m.fortuneUsed = true;
    m.r = rollCheck(S, src.check, S.pov);
  };

  function visibleChoices(S, sc) {
    var s = Q.ctx(S), out = [];
    (sc.choices || []).forEach(function (c, raw) {
      if (c.req && !c.req(s)) return;
      var locked = false, reason = '';
      if (c.lock && c.lock.if(s)) { locked = true; reason = c.lock.reason || ''; }
      out.push({ src: c, raw: raw, locked: locked, reason: reason });
    });
    return out;
  }

  /* ---------- text rendering ---------- */
  function flatten(items, s, out) {
    (items || []).forEach(function (it) {
      if (typeof it === 'function') it = it(s);
      if (!it) return;
      if (Array.isArray(it)) { flatten(it, s, out); return; }
      if (typeof it === 'string') out.push({ t: it });
      else out.push(it);
    });
    return out;
  }
  Q.blocks = function (S, sc) {
    var t = sc.text;
    var s = Q.ctx(S);
    if (typeof t === 'function') t = t(s);
    return flatten(Array.isArray(t) ? t : [t], s, []);
  };

  /* ---------- views (pure) ---------- */
  Q.view = function (S) {
    var ep = Q.episodes[S.ep], sc, s = Q.ctx(S), povDef = S.pov && Q.chars[S.pov];
    switch (S.mode) {
      case 'ep_title':
        return { kind: 'ep_title', num: ep.num, title: ep.title, logline: ep.logline, recap: S.md.recap, season: Q.SEASON_NAME };
      case 'ch_title':
        return { kind: 'ch_title', pov: S.md.pov, povName: povDef && povDef.name, title: S.md.title, place: S.md.place };
      case 'scene':
        sc = Q.scenes[S.scene];
        var list = visibleChoices(S, sc).map(function (c, i) {
          var cs = c.src, tag = cs.tag || '', hint = '';
          if (cs.check) hint = cap(cs.check.stat) + ' · ' + Q.diffName(cs.check.dc);
          return { i: i, label: cs.label, tag: tag, hint: hint, locked: c.locked, reason: c.reason };
        });
        return {
          kind: 'scene', pov: S.pov, place: sc.place, title: sc.title, blocks: Q.blocks(S, sc),
          choices: list, cont: (!list.length) ? (sc.continue || 'Continue') : null, end: !!sc.end
        };
      case 'check':
        var m = S.md, c = S.chars[S.pov];
        return {
          kind: 'check', label: m.label, stat: m.stat, dc: m.dc, diff: Q.diffName(m.dc), r: m.r,
          canFortune: !m.r.success && !m.fortuneUsed && c && c.fortune > 0, fortune: c ? c.fortune : 0
        };
      case 'combat':
        sc = Q.scenes[S.scene];
        return Q.combatView(S, sc);
      case 'death':
        return { kind: 'death', who: S.md.who, name: Q.chars[S.md.who].name, cause: S.md.cause };
      case 'ep_end':
        return {
          kind: 'ep_end', num: ep.num, title: ep.title,
          echoes: S.echoes.filter(function (e) { return e.ep === ep.num; }).map(function (e) { return e.text; }),
          cast: castStatus(S), hasNext: !!Q.episodes[S.ep + 1], next: Q.episodes[S.ep + 1] && Q.episodes[S.ep + 1].title,
          teaser: ep.teaser
        };
      case 'tbc':
        return { kind: 'tbc', cast: castStatus(S) };
    }
  };

  function castStatus(S) {
    return Object.keys(S.chars).map(function (id) {
      var c = S.chars[id];
      return { id: id, name: Q.chars[id].name, alive: c.alive, hp: c.hp, maxHp: c.maxHp };
    });
  }

  /* ---------- combat ---------- */
  var PROSE = {
    pHit: ['Your {pw} finds a gap beneath {e}\'s guard and bites.', '{e} overreaches; you answer with a short, vicious cut.', 'Steel rings, slides, and then catches flesh.', 'You drive in under the swing and your {pw} opens {e} to the meat.'],
    pMiss: ['{e} turns the blow aside with a shriek of metal.', 'You swing and meet only air.', '{e} gives a step and the stroke dies against nothing.', 'Your {pw} skids off a raised guard.'],
    guard: ['You give ground and let {e}\'s blows break against your guard.', 'You settle low and let the storm spend itself.'],
    counter: ['A mistimed lunge — and you are inside it, slamming a short counter home.'],
    feintOk: ['You sell a lie of a strike. {e} bites on it, and is suddenly out of position.', 'A dropped shoulder, a glance to the wrong side — {e} commits to the wrong answer.'],
    feintNo: ['{e} is not fooled, and the false step costs you ground.', 'The feint is read like a letter. You pay for it.'],
    reckOk: ['You throw everything behind it. {e} does not so much parry as get hit.'],
    reckNo: ['You throw everything behind it and {e} sidesteps; you stagger through the empty space where a man was.'],
    eHit: ['{e}\'s {w} opens a line of fire across you.', 'You are too slow; {e}\'s {w} finds you and the pain arrives a heartbeat after.', 'A hammering blow. Something in you gives and then holds.'],
    eMiss: ['{e}\'s {w} whistles past your ear.', 'You twist and {e}\'s attack scores nothing but cloth.', '{e} presses, but you are not where the blow lands.']
  };
  function pick(a) { return a[Math.floor(Q.rng() * a.length)]; }
  function fmt(t, cb) { return t.replace(/\{e\}/g, cb.enemy.name).replace(/\{pw\}/g, cb.pw || 'steel').replace(/\{w\}/g, cb.enemy.w || 'blade'); }

  Q.combatView = function (S, sc) {
    var cb = sc.combat, m = S.md, c = S.chars[S.pov], st = cb.stats || { strike: 'blade', feint: 'guile' };
    var acts = [];
    if (!m.over) {
      acts.push({ id: 'strike', label: 'Strike', hint: cap(st.strike) });
      acts.push({ id: 'guard', label: 'Guard', hint: 'Blunt the blows' });
      acts.push({ id: 'feint', label: 'Feint', hint: cap(st.feint) });
      acts.push({ id: 'reckless', label: 'Reckless blow', hint: 'Hit harder, open yourself' });
      if (cb.yieldTo) acts.push({ id: 'yield', label: 'Yield', hint: 'Lay down your arms' });
      if (cb.fleeTo) acts.push({ id: 'flee', label: 'Break away', hint: cap(st.feint) + ' check' });
    }
    return {
      kind: 'combat', pov: S.pov, place: sc.place, title: sc.title, blocks: Q.blocks(S, sc),
      enemy: { name: cb.enemy.name, desc: cb.enemy.desc || '', hp: Math.max(0, m.hp), maxHp: m.maxHp },
      you: { hp: c.hp, maxHp: c.maxHp }, log: m.log.slice(-2), off: m.off, wary: m.wary,
      actions: acts, over: m.over
    };
  };

  Q.combatAct = function (S, action) {
    var sc = Q.scenes[S.scene], cb = sc.combat, m = S.md, c = S.chars[S.pov];
    if (S.mode !== 'combat' || m.over) return;
    var st = cb.stats || { strike: 'blade', feint: 'guile' }, e = cb.enemy;
    var pb = cb.bonus ? cb.bonus(Q.ctx(S)) : 0;
    var strikeStat = effStat(S, st.strike, S.pov) + pb, feintStat = effStat(S, st.feint, S.pov) + pb;
    var lines = [], guard = false, eBonus = 0;
    m.round++;

    if (action === 'yield') { m.over = 'yield'; m.log.push([fmt('You lower your {pw} and open your hand.', cb)]); return; }
    if (action === 'flee') {
      var ra = d6() + d6() + feintStat;
      if (ra >= (e.cun || 9)) { m.over = 'flee'; m.log.push(['You break away and run, and {e} does not catch you.'.replace('{e}', e.name)]); return; }
      lines.push('You try to break away. ' + e.name + ' is on you before you have taken two steps.');
      eBonus = 2;
    } else if (action === 'guard') {
      guard = true; lines.push(fmt(pick(PROSE.guard), cb));
    } else if (action === 'feint') {
      var rf = d6() + d6() + feintStat;
      if (rf >= (e.cun || 9)) { m.off = true; lines.push(fmt(pick(PROSE.feintOk), cb)); }
      else { eBonus = 2; lines.push(fmt(pick(PROSE.feintNo), cb)); }
    } else { // strike or reckless
      var rec = action === 'reckless';
      var a = d6(), b = d6();
      var tot = a + b + strikeStat + (rec ? 1 : 0);
      var hit = m.off || (a === 6 && b === 6) || (!(a === 1 && b === 1) && tot >= e.def);
      if (hit) {
        var dmg = 2 + (tot - e.def >= 4 ? 1 : 0) + (m.off ? 1 : 0) + (rec ? 1 : 0) + (a === 6 && b === 6 ? 2 : 0);
        m.hp -= dmg;
        lines.push(fmt(pick(rec ? PROSE.reckOk : PROSE.pHit), cb) + (m.off ? ' (Off-balance.)' : ''));
        m.off = false;
      } else {
        lines.push(fmt(pick(rec ? PROSE.reckNo : PROSE.pMiss), cb));
        if (rec) eBonus = 2;
      }
    }

    if (m.hp <= 0) { m.over = 'win'; m.log.push(lines); return; }

    // enemy turn
    var ea = d6() + d6() + (e.atk || 0) + eBonus;
    var defense = 9 + (guard ? 3 : 0);
    if (ea >= defense) {
      var ed = (e.dmg || 2) + (ea - defense >= 4 ? 1 : 0);
      if (guard) ed = Math.max(1, ed - 1);
      c.hp = Math.max(0, c.hp - ed);
      lines.push(fmt(pick(PROSE.eHit), cb) + ' (−' + ed + ')');
    } else {
      if (guard && defense - ea >= 3 && Q.rng() < 0.6) { m.hp -= 1; lines.push(fmt(pick(PROSE.counter), cb)); if (m.hp <= 0) { m.over = 'win'; m.log.push(lines); return; } }
      else lines.push(fmt(pick(PROSE.eMiss), cb));
    }
    if (c.hp <= 0) { c.hp = 0; m.over = 'lose'; }
    m.log.push(lines);
  };

  /* ---------- saves ---------- */
  Q.serialize = function (S) { return JSON.stringify(S); };
  Q.deserialize = function (str) {
    var S = JSON.parse(str);
    if (!S || S.v !== Q.VERSION || !S.chars || !S.mode) throw new Error('Not a valid Quartus save.');
    return S;
  };
  Q.label = function (S) {
    var p = S.pov && Q.chars[S.pov];
    return 'Ep ' + S.ep + (p ? ' · ' + p.name : '') + (S.scene && Q.scenes[S.scene] && Q.scenes[S.scene].place ? ' · ' + Q.scenes[S.scene].place : '');
  };
})(typeof window !== 'undefined' ? window : globalThis);
