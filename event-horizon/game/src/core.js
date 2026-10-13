/* THE EVENT HORIZON: core rules (no DOM). Shared by the browser engine and the headless checker. */
(function (root) {
  'use strict';
  const EH = root.EH = root.EH || {};
  EH.version = '1.0.0';
  EH.episodes = EH.episodes || {};
  EH.order = EH.order || [];
  EH.episode = function (def) {
    EH.episodes[def.id] = def;
    if (!EH.order.includes(def.id)) EH.order.push(def.id);
    EH.order.sort();
  };
  // Episodes may be split across part files (s01e01.js, s01e01b.js, ...): parts add scenes.
  EH.scenes = function (id, scenes) {
    const ep = EH.episodes[id];
    if (!ep) throw new Error('EH.scenes before EH.episode for ' + id);
    Object.keys(scenes).forEach(k => { if (ep.scenes[k]) throw new Error('Duplicate scene ' + k); ep.scenes[k] = scenes[k]; });
  };

  /* ---------------- Reference data ---------------- */
  EH.ATTRS = ['body', 'reflex', 'wits', 'heart', 'nerve', 'charm'];
  EH.ATTR_NAMES = { body: 'Body', reflex: 'Reflex', wits: 'Wits', heart: 'Heart', nerve: 'Nerve', charm: 'Charm' };
  EH.SKILLS = {
    athletics: 'Athletics', brawl: 'Brawl', parkour: 'Parkour', ride: 'Ride', stealth: 'Stealth',
    study: 'Study', investigate: 'Investigate', tech: 'Tech', medicine: 'Medicine',
    banter: 'Banter', persuade: 'Persuade', lie: 'Lie', empathy: 'Empathy', intimidate: 'Intimidate',
    cook: 'Cook', hustle: 'Hustle', streetwise: 'Streetwise', perform: 'Perform'
  };
  EH.CAST = {
    sam: { label: 'Sam', full: 'Sam Kearney', role: 'You' },
    jules: { label: 'Jules', full: 'Juliet Pemberton', role: '9th floor, Cardone Hall' },
    nik: { label: 'Nik', full: 'Nikhil Bhattacharya', role: 'Your roommate' },
    simone: { label: 'Simone', full: 'Simone Okonkwo-Hayes', role: "Jules's roommate" },
    vinnie: { label: 'Vinnie', full: 'Vinnie Russo', role: 'Best friend since kindergarten' },
    grace: { label: 'Grace', full: 'Grace Lim', role: 'Your RA' },
    rosa: { label: 'Ma', full: 'Rosa Kearney', role: 'Your mother' },
    frank: { label: 'Pop', full: 'Frank Kearney', role: 'Your father' },
    nonna: { label: 'Nonna', full: 'Teresa DiNardo', role: 'Your grandmother' },
    mikey: { label: 'Mikey', full: 'Michael Kearney', role: 'Your brother, PPD' },
    gigi: { label: 'Gigi', full: 'Gianna Kearney', role: 'Your sister' },
    ciro: { label: 'Ciro', full: 'Ciro Bianchi', role: "Your boss at Ciro's Pizza" },
    catherine: { label: 'Dr. Pemberton', full: 'Dr. Catherine Pemberton', role: "Jules's mother" },
    whitney: { label: 'Whitney', full: 'Whitney Pemberton', role: "Jules's father" },
    hugh: { label: 'Hugh', full: 'Hugh Pemberton', role: "Jules's twin" },
    constance: { label: 'Constance', full: 'Constance Pemberton', role: "Jules's grandmother" },
    callum: { label: 'Callum', full: 'Callum Whitford', role: "Jules's boyfriend" },
    teddy: { label: 'Teddy', full: 'Teddy Kowal', role: '' },
    bree: { label: 'Bree', full: 'Bree Kowal', role: '' },
    heck: { label: 'Heck', full: 'Hector Ramos', role: '' },
    femi: { label: 'Femi', full: 'Femi Ojo', role: '' },
    dana: { label: 'Dana', full: 'Dana Fiorillo', role: 'Inquirer metro reporter' },
    weisz: { label: 'Dr. Weisz', full: 'Dr. Alan Weisz', role: 'Philadelphia Neighborhoods' },
    jayden: { label: 'Jayden', full: 'Jayden Torres', role: 'The boy on Broad Street' },
    carmen: { label: 'Carmen', full: 'Carmen Torres', role: "Jayden's grandmother" },
    old_sam: { label: '???', full: 'The Man Across the Street', role: '' }
  };
  EH.WATCHERS = { press: 'The Press', police: 'Police' };
  EH.NODES = {
    burst: { name: 'Burst', desc: '+2 dice on a physical pool. 1 Stamina.', xp: 0 },
    slip: { name: 'Slip', desc: 'Step between the seconds: auto-succeed on SLIP options. 2 Focus, +1 Drift.', xp: 0 },
    rewind: { name: 'Rewind', desc: 'Reroll a failed or partial pool. 3 Focus, +2 Drift.', xp: 6 },
    afterimage: { name: 'Afterimage', desc: '+2 Stealth/Lie while fleeing. 1 Focus.', xp: 8 },
    freeze: { name: 'Freeze', desc: '???', xp: 12 },
    echo: { name: 'Echo', desc: '???', xp: 15 }
  };
  EH.COURSES = {
    eng: 'ENG 0802 Analytical Reading & Writing', calc: 'MATH 1041 Calculus I',
    psy: 'PSY 1001 Intro to Psychology', phl: 'GU 1003 Philadelphia Neighborhoods'
  };

  /* ---------------- State ---------------- */
  EH.newState = function () {
    const skills = {}; Object.keys(EH.SKILLS).forEach(k => skills[k] = 0);
    Object.assign(skills, { athletics: 1, brawl: 1, ride: 2, banter: 2, cook: 1, hustle: 1, streetwise: 2, empathy: 1 });
    const S = {
      v: 1, created: Date.now(), updated: Date.now(),
      ep: null, scene: null, done: [], season: 1,
      clock: { day: '', date: '', time: '' },
      attrs: { body: 2, reflex: 3, wits: 2, heart: 3, nerve: 2, charm: 3 },
      skills, marked: {}, xp: 0, xpSpent: 0,
      pools: { stamina: 0, focus: 0, nerve: 0 },
      drift: 0, sleepDebt: 0,
      money: { cash: 60, bank: 312 },
      grades: { eng: 70, calc: 70, psy: 70, phl: 70 },
      injuries: [],
      powers: { slip: { nodes: [], mastery: 0 } },
      bonds: {}, heat: {},
      flags: {}, facts: {}, recap: [],
      hidden: { revenant_drift: 0, jules_luck: 0.35, nudges: 0, halcyon_heat: 0 },
      hubs: {}, entered: {},
      epLog: [], epRolls: [], eps: {},
      settings: { sound: false, size: 1, motion: true }
    };
    EH.refill(S, true);
    return S;
  };
  EH.maxPool = (S, p) => p === 'stamina' ? S.attrs.body * 2 + 2 : p === 'focus' ? S.attrs.wits * 2 + 2 : S.attrs.nerve * 2 + 2;
  EH.refill = function (S, all) {
    ['stamina', 'focus', 'nerve'].forEach(p => { if (all || p !== 'nerve') S.pools[p] = EH.maxPool(S, p); });
  };
  EH.bondOf = function (S, id) {
    if (!S.bonds[id]) S.bonds[id] = { trust: 0, affection: 0, respect: 0, tension: 0, met: false };
    return S.bonds[id];
  };
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const sgn = n => (n > 0 ? '+' : '') + n;
  EH.clone = o => JSON.parse(JSON.stringify(o));

  /* ---------------- Effect API ---------------- */
  EH.api = function (S, sink) {
    const notes = sink || [];
    const note = (text, kind, dir) => notes.push({ text, kind: kind || 'stat', dir: dir || 0 });
    const g = {
      S, notes,
      get last() { return S.lastRoll || null; },
      set last(v) { S.lastRoll = v; },
      get ep() { return S.ep; },
      flag(k, v) { S.flags[k] = (v === undefined ? true : v); return g; },
      f(k) { return S.flags[k]; },
      inc(k, n) { S.flags[k] = (S.flags[k] || 0) + (n === undefined ? 1 : n); return g; },
      meet(id) { const b = EH.bondOf(S, id); if (!b.met) { b.met = true; if (EH.CAST[id]) note('Met ' + EH.CAST[id].full, 'fact'); } return g; },
      met(id) { return !!(S.bonds[id] && S.bonds[id].met); },
      bond(id, d) {
        const b = EH.bondOf(S, id); if (!b.met) g.meet(id);
        for (const k in d) {
          if (!d[k]) continue;
          const lo = k === 'tension' ? 0 : -10;
          const before = b[k] || 0;
          b[k] = clamp(before + d[k], lo, 10);
          if (b[k] === before) continue;
          const nm = (EH.CAST[id] && EH.CAST[id].label) || id;
          note(nm + ' · ' + k[0].toUpperCase() + k.slice(1) + ' ' + sgn(b[k] - before), 'bond', k === 'tension' ? 0 : Math.sign(d[k]));
        }
        return g;
      },
      b(id) { return EH.bondOf(S, id); },
      heat(id, n) {
        if (!n) return g;
        const was = S.heat[id] || 0;
        S.heat[id] = clamp(was + n, 0, 10);
        const nm = EH.WATCHERS[id] || (EH.CAST[id] && EH.CAST[id].label) || id;
        note(nm + ' · Suspicion ' + sgn(n), 'heat', -Math.sign(n));
        if (S.heat[id] >= 10 && was < 10) { S.flags['heat_max_' + id] = true; note(nm + ' has figured something out.', 'heat', -1); }
        return g;
      },
      h(id) { return S.heat[id] || 0; },
      know(fact, who, text, opts) {
        const F = S.facts[fact] || (S.facts[fact] = { text: text || fact, knownBy: [], ep: S.ep });
        if (text) F.text = text;
        if (opts && opts.track) F.track = true;
        const samBefore = F.knownBy.includes('sam');
        const added = (who || []).filter(w => !F.knownBy.includes(w));
        added.forEach(w => F.knownBy.push(w));
        if (!samBefore && added.includes('sam')) note('Noted: ' + F.text, 'fact');
        else if (samBefore) added.filter(w => w !== 'sam' && EH.CAST[w]).forEach(w => note(EH.CAST[w].label + ' now knows: ' + F.text, 'fact'));
        return g;
      },
      knows(fact, who) { const F = S.facts[fact]; return !!(F && F.knownBy.includes(who || 'sam')); },
      money(n) { S.money.cash += n; note('Cash ' + (n < 0 ? '−$' + (-n) : '+$' + n), 'money', Math.sign(n)); return g; },
      bank(n) { S.money.bank += n; note('Bank ' + (n < 0 ? '−$' + (-n) : '+$' + n), 'money', Math.sign(n)); return g; },
      cash() { return S.money.cash; },
      grade(c, n) { S.grades[c] = clamp((S.grades[c] ?? 70) + n, 0, 100); note((EH.COURSES[c] || c).split(' ').slice(0, 2).join(' ') + ' standing ' + sgn(n), 'stat', Math.sign(n)); return g; },
      sleep(h) {
        const before = S.sleepDebt;
        if (h < 7) S.sleepDebt = clamp(S.sleepDebt + (7 - h), 0, 10); else S.sleepDebt = clamp(S.sleepDebt - (h - 6), 0, 10);
        if (h >= 7) { S.pools.stamina = EH.maxPool(S, 'stamina'); S.pools.focus = EH.maxPool(S, 'focus'); S.pools.nerve = Math.min(EH.maxPool(S, 'nerve'), S.pools.nerve + 2); S.drift = Math.max(0, S.drift - 1); }
        else { S.pools.stamina = Math.min(EH.maxPool(S, 'stamina'), S.pools.stamina + Math.floor(h / 2)); S.pools.focus = Math.min(EH.maxPool(S, 'focus'), S.pools.focus + Math.floor(h / 2)); }
        note('Slept ' + h + 'h · Sleep Debt ' + S.sleepDebt + (S.sleepDebt !== before ? ' (' + sgn(S.sleepDebt - before) + ')' : ''), 'stat', S.sleepDebt > before ? -1 : 1);
        return g;
      },
      nap(h) {
        const b = S.sleepDebt; S.sleepDebt = clamp(S.sleepDebt - Math.ceil(h / 2), 0, 10);
        S.pools.stamina = Math.min(EH.maxPool(S, 'stamina'), S.pools.stamina + h); S.pools.focus = Math.min(EH.maxPool(S, 'focus'), S.pools.focus + h);
        note('Napped ' + h + 'h · Sleep Debt ' + S.sleepDebt + ' (' + sgn(S.sleepDebt - b) + ')', 'stat', 1); return g;
      },
      pool(p, n) { S.pools[p] = clamp(S.pools[p] + n, 0, EH.maxPool(S, p)); if (n) note(p[0].toUpperCase() + p.slice(1) + ' ' + sgn(n), 'stat', Math.sign(n)); return g; },
      drift(n) { S.drift = clamp(S.drift + n, 0, 10); S.hidden.revenant_drift += Math.max(0, n) * 0.5; if (n) note('Drift ' + sgn(n), 'stat', -Math.sign(n)); return g; },
      hidden(k, n) { S.hidden[k] = (S.hidden[k] || 0) + n; return g; },
      hset(k, v) { S.hidden[k] = v; return g; },
      hv(k) { return S.hidden[k] || 0; },
      injure(o) { S.injuries.push(Object.assign({ pen: 1, heal: 1 }, o)); note('Injury · ' + o.name, 'injury', -1); return g; },
      heal(id) { S.injuries = S.injuries.filter(i => i.id !== id); return g; },
      hurt(id) { return S.injuries.some(i => i.id === id); },
      xp(n) { S.xp += n; note('XP ' + sgn(n), 'stat', 1); return g; },
      unlock(node) { const P = S.powers.slip; if (!P.nodes.includes(node)) { P.nodes.push(node); note('Power unlocked · ' + EH.NODES[node].name, 'power', 1); } return g; },
      has(node) { return S.powers.slip.nodes.includes(node); },
      offer(node) { const P = S.powers.slip; P.offered = P.offered || []; if (!P.offered.includes(node) && !P.nodes.includes(node)) { P.offered.push(node); note('New power available to learn · ' + EH.NODES[node].name, 'power', 1); } return g; },
      mastery(n) { S.powers.slip.mastery = clamp(S.powers.slip.mastery + n, 0, 100); return g; },
      attr(k, n) {
        const P = ['stamina', 'focus', 'nerve'], before = P.map(p => EH.maxPool(S, p));
        S.attrs[k] = clamp(S.attrs[k] + n, 1, 5);
        P.forEach((p, i) => { S.pools[p] = clamp(S.pools[p] + EH.maxPool(S, p) - before[i], 0, EH.maxPool(S, p)); });
        note(EH.ATTR_NAMES[k] + ' ' + sgn(n), 'stat', Math.sign(n)); return g;
      },
      skill(k, n) { S.skills[k] = clamp((S.skills[k] || 0) + n, 0, 5); note(EH.SKILLS[k] + ' ' + sgn(n), 'stat', Math.sign(n)); return g; },
      a(k) { return S.attrs[k]; }, sk(k) { return S.skills[k] || 0; },
      recap(t) { S.recap.push({ ep: S.ep, t }); return g; },
      log(t) { S.epLog.push({ ep: S.ep, scene: S.scene, note: t, t: Date.now() }); return g; },
      clock(o) { Object.assign(S.clock, o); return g; },
      note(t, kind) { note(t, kind || 'stat'); return g; },
      rand() { return Math.random(); }
    };
    return g;
  };

  /* ---------------- Dice ---------------- */
  const d = n => 1 + Math.floor(Math.random() * n);
  EH.attrMod = r => r - 2;
  EH.skillBonus = s => (s >= 4 ? 2 : s >= 2 ? 1 : 0);
  EH.injPen = (S, attr) => S.injuries.filter(i => !i.affects || i.affects.includes(attr)).reduce((a, i) => a + (i.pen || 0), 0);

  // Build the modifier breakdown for a check (before pushes).
  EH.checkCalc = function (S, c) {
    const rows = []; let base = 0;
    const A = S.attrs[c.attr] || 0, K = c.skill ? (S.skills[c.skill] || 0) : 0;
    if (c.kind === 'pool') {
      rows.push([EH.ATTR_NAMES[c.attr], A]); if (c.skill) rows.push([EH.SKILLS[c.skill], K]);
      base = A + K;
      if (c.bonus) { rows.push([c.bonusLabel || 'Situation', c.bonus]); base += c.bonus; }
      const sp = Math.floor(S.sleepDebt / 3); if (sp) { rows.push(['Sleep Debt', -sp]); base -= sp; }
      const ip = EH.injPen(S, c.attr); if (ip && c.physical !== false) { rows.push(['Injuries', -ip]); base -= ip; }
      if (S.drift >= 5 && c.attr === 'wits') { rows.push(['Drift', -1]); base -= 1; }
    } else if (c.kind === 'move') {
      const am = EH.attrMod(A), sb = c.skill ? EH.skillBonus(K) : 0;
      rows.push([EH.ATTR_NAMES[c.attr] + ' (' + A + ')', am]); if (c.skill) rows.push([EH.SKILLS[c.skill] + ' (' + K + ')', sb]);
      base = am + sb;
      if (c.bonus) { rows.push([c.bonusLabel || 'Situation', c.bonus]); base += c.bonus; }
      const sp = Math.floor(S.sleepDebt / 4); if (sp) { rows.push(['Sleep Debt', -sp]); base -= sp; }
    } else {
      rows.push([EH.ATTR_NAMES[c.attr], A]); if (c.skill) rows.push([EH.SKILLS[c.skill], K]);
      base = A + K;
      if (c.bonus) { rows.push([c.bonusLabel || 'Situation', c.bonus]); base += c.bonus; }
      const sp = Math.floor(S.sleepDebt / 2); if (sp) { rows.push(['Sleep Debt', -sp]); base -= sp; }
    }
    return { rows, base };
  };

  // Exact outcome probabilities.
  EH.odds = function (c, mod) {
    if (c.kind === 'pool') {
      const n = Math.max(1, mod); let dist = [1];
      for (let i = 0; i < n; i++) {
        const nd = new Array(dist.length + 2).fill(0);
        dist.forEach((p, s) => { nd[s] += p * 0.6; nd[s + 1] += p * 0.3; nd[s + 2] += p * 0.1; });
        dist = nd;
      }
      const D = c.diff; let crit = 0, succ = 0, part = 0;
      dist.forEach((p, s) => { if (s >= D + 2) crit += p; else if (s >= D) succ += p; else if (s === D - 1 && s > 0) part += p; });
      return { crit, success: succ, partial: part, fail: 1 - crit - succ - part };
    }
    if (c.kind === 'move') {
      let strong = 0, weak = 0;
      for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) { const t = a + b + mod; if (t >= 10) strong++; else if (t >= 7) weak++; }
      return { success: strong / 36, partial: weak / 36, crit: 0, fail: 1 - (strong + weak) / 36 };
    }
    let s = 0; for (let r = 1; r <= 20; r++) { if (r === 20 || (r !== 1 && r + mod >= c.dc)) s++; }
    return { crit: 1 / 20, success: s / 20 - 1 / 20, partial: 0, fail: 1 - s / 20 };
  };
  EH.successChance = function (c, mod) { const o = EH.odds(c, mod); return o.crit + o.success + (c.kind === 'move' ? o.partial : 0); };

  EH.roll = function (c, mod) {
    if (c.kind === 'pool') {
      const dice = Array.from({ length: Math.max(1, mod) }, () => d(10));
      return EH.scorePool(dice, c.diff);
    }
    if (c.kind === 'move') {
      const dice = [d(6), d(6)];
      return EH.scoreMove(dice, mod);
    }
    const dice = [d(20)];
    return EH.scoreD20(dice, mod, c.dc);
  };
  EH.scorePool = function (dice, diff) {
    let s = 0, ones = 0;
    dice.forEach(v => { if (v === 10) s += 2; else if (v >= 7) s += 1; if (v === 1) ones++; });
    let tier;
    if (s >= diff + 2) tier = 'crit'; else if (s >= diff) tier = 'success';
    else if (s === diff - 1 && s > 0) tier = 'partial';
    else if (s === 0 && ones > 0) tier = 'botch'; else tier = 'fail';
    return { dice, s, tier, kind: 'pool', diff };
  };
  EH.scoreMove = function (dice, mod) {
    const total = dice[0] + dice[1] + mod;
    return { dice, total, mod, tier: total >= 10 ? 'strong' : total >= 7 ? 'weak' : 'miss', kind: 'move' };
  };
  EH.scoreD20 = function (dice, mod, dc) {
    const r = dice[0], total = r + mod;
    const tier = r === 20 ? 'crit' : r === 1 ? 'fumble' : total >= dc ? 'success' : 'fail';
    return { dice, total, mod, dc, tier, kind: 'd20' };
  };
  EH.isGood = t => ['crit', 'success', 'strong', 'weak', 'partial'].includes(t);
  EH.isClean = t => ['crit', 'success', 'strong'].includes(t);
  EH.TIER_NAMES = { crit: 'Critical!', success: 'Success', partial: 'Partial', fail: 'Fail', botch: 'Botch!', strong: 'Strong Hit', weak: 'Weak Hit', miss: 'Miss', fumble: 'Fumble!' };
  const CHAINS = {
    crit: ['crit', 'success', 'strong'], success: ['success', 'strong'], partial: ['partial', 'weak', 'success', 'strong'],
    fail: ['fail', 'miss'], botch: ['botch', 'fail', 'miss'], strong: ['strong', 'success'], weak: ['weak', 'partial', 'strong', 'success'],
    miss: ['miss', 'fail'], fumble: ['fumble', 'fail', 'miss']
  };
  EH.route = function (on, tier) {
    for (const k of CHAINS[tier] || [tier]) if (on && on[k]) return on[k];
    return null;
  };
  EH.TIERS_FOR = { pool: ['crit', 'success', 'partial', 'fail', 'botch'], move: ['strong', 'weak', 'miss'], d20: ['crit', 'success', 'fail', 'fumble'] };

  // Jules's hidden nudge (Season 1 rules). In a Jules-POV episode, her luck never lets her lose:
  // every unclean pool or move is nudged until it's clean, and each save adds to her hidden Debt.
  EH.tryNudge = function (S, c, res) {
    const pov = S.pov === 'jules';
    if (!pov && (!c.near || !c.near.includes('jules'))) return false;
    if (EH.isClean(res.tier)) return false;
    if (!pov) {
      const jb = S.bonds.jules || { affection: 0, trust: 0 };
      const luck = S.hidden.jules_luck + Math.max(0, jb.affection + jb.trust) * 0.01;
      if (Math.random() >= luck) return false;
    }
    const gold = [];
    const step = () => {
      if (res.kind === 'pool') {
        let idx = -1, lo = 99; res.dice.forEach((v, i) => { if (v < 7 && v < lo) { lo = v; idx = i; } });
        if (idx < 0) return false;
        res.dice[idx] = 10; Object.assign(res, EH.scorePool(res.dice, res.diff)); gold.push(idx); return true;
      } else if (res.kind === 'move') {
        const idx = res.dice[0] <= res.dice[1] ? 0 : 1; if (res.dice[idx] === 6) return false;
        res.dice[idx] = 6; Object.assign(res, EH.scoreMove(res.dice, res.mod)); gold.push(idx); return true;
      } else if (res.kind === 'd20' && pov) {
        if (res.dice[0] === 20) return false;
        res.dice[0] = 20; Object.assign(res, EH.scoreD20 ? EH.scoreD20(res.dice, res.mod, res.dc) : {}); gold.push(0); return true;
      }
      return false;
    };
    if (!step()) return false;
    if (pov) { let n = 0; while (!EH.isClean(res.tier) && n++ < 6 && step()); S.hidden.jules_debt = (S.hidden.jules_debt || 0) + 1; }
    res.gold = gold;
    S.hidden.nudges = (S.hidden.nudges || 0) + 1;
    res.nudged = true;
    return true;
  };

  /* ---------------- Point of view ---------------- */
  EH.JULES_SHEET = {
    attrs: { body: 2, reflex: 3, wits: 4, heart: 2, nerve: 3, charm: 4 },
    skills: { athletics: 2, banter: 2, brawl: 0, cook: 0, empathy: 1, hustle: 3, intimidate: 1, investigate: 2, lie: 3, medicine: 1, parkour: 0, perform: 1, persuade: 2, ride: 0, stealth: 1, streetwise: 0, study: 3, tech: 1 }
  };
  // Swap Sam's sheet out for another character's for one episode. Sam's sheet is restored by povExit.
  EH.povEnter = function (S, ep) {
    if (!ep || !ep.pov || ep.pov === 'sam' || S.pov) return;
    S.pov = ep.pov;
    S.samSheet = EH.clone({ attrs: S.attrs, skills: S.skills, pools: S.pools, injuries: S.injuries, drift: S.drift, sleepDebt: S.sleepDebt, marked: S.marked });
    const J = S.julesSheet || EH.JULES_SHEET;
    S.attrs = EH.clone(J.attrs); S.skills = EH.clone(J.skills);
    S.injuries = []; S.drift = 0; S.sleepDebt = 0; S.marked = {}; S.pools = {};
    EH.refill(S, true);
  };
  EH.povExit = function (S) {
    if (!S.pov || !S.samSheet) return;
    S.julesSheet = { attrs: EH.clone(S.attrs), skills: EH.clone(S.skills) };
    Object.assign(S, S.samSheet);
    delete S.samSheet; delete S.pov;
  };

  /* ---------------- Text markup ---------------- */
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = s => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/--/g, '—');
  EH.inline = inline;
  EH.markup = function (src) {
    if (!src) return '';
    const blocks = String(src).replace(/\r/g, '').split(/\n\s*\n/);
    const out = [];
    blocks.forEach(raw => {
      const b = raw.replace(/^\s+|\s+$/g, '');
      if (!b) return;
      if (b === '~~') { out.push('<hr class="beat">'); return; }
      const lines = b.split('\n').map(l => l.trim());
      // A block may contain several dialogue / text lines.
      let para = [];
      const flush = () => { if (para.length) { out.push('<p>' + inline(para.join(' ')) + '</p>'); para = []; } };
      lines.forEach(l => {
        let m;
        if (l.startsWith('@ ')) { flush(); out.push('<div class="slug"><span>' + esc(l.slice(2)) + '</span></div>'); return; }
        if (l.startsWith('> ')) { flush(); out.push('<div class="cap">' + inline(l.slice(2)) + '</div>'); return; }
        if (l.startsWith('!! ')) { flush(); const t = l.slice(3); const cy = t.startsWith('~'); out.push('<div class="sfx' + (cy ? ' cy' : '') + '" aria-label="' + esc(t.replace(/^~/, '')) + '">' + esc(t.replace(/^~/, '')) + '</div>'); return; }
        if ((m = l.match(/^TXT ([a-z_]+|[A-Z][A-Za-z .'\-]*):\s*(.*)$/))) {
          flush(); const id = m[1]; const me = id === 'sam';
          const nm = EH.CAST[id] ? EH.CAST[id].label : id;
          out.push('<div class="txt' + (me ? ' me' : '') + '"><span class="from">' + esc(me ? 'You' : nm) + '</span><span class="bub">' + inline(m[2]) + '</span></div>'); return;
        }
        if ((m = l.match(/^([a-z_]+)\[([^\]]+)\]:\s+(.*)$/)) && EH.CAST[m[1]]) {
          flush(); out.push('<div class="line"><span class="who" style="color:var(--c-' + m[1] + ')">' + esc(m[2]) + '</span><span class="say">' + inline(m[3]) + '</span></div>'); return;
        }
        if ((m = l.match(/^([a-z_]+):\s+(.*)$/)) && EH.CAST[m[1]]) {
          flush(); const id = m[1];
          out.push('<div class="line"><span class="who" style="color:var(--c-' + id + ')">' + esc(EH.CAST[id].label) + '</span><span class="say">' + inline(m[2]) + '</span></div>'); return;
        }
        if ((m = l.match(/^([A-Z][A-Z0-9 .'()\-]{1,30}):\s+(.*)$/))) {
          flush(); out.push('<div class="line"><span class="who">' + esc(m[1]) + '</span><span class="say">' + inline(m[2]) + '</span></div>'); return;
        }
        para.push(l);
      });
      flush();
    });
    return out.join('');
  };

  EH.text = function (scene, g) {
    const t = typeof scene.text === 'function' ? scene.text(g) : scene.text;
    return t || '';
  };
})(typeof window !== 'undefined' ? window : globalThis);
