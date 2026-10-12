// Headless episode checker: structure, targets, reachability, check validity, markup speakers,
// and thousands of random full playthroughs that run every text/enter/fx function.
// Usage: node tools/check.js [s01e01] [--runs 2000] [--verbose]
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { console, Math, JSON, Date, setTimeout, globalThis: null };
ctx.globalThis = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'src/core.js'), 'utf8'), ctx, { filename: 'core.js' });
const files = fs.readdirSync(path.join(root, 'episodes')).filter(f => /^s\d\de\d\d[a-z]?\.js$/.test(f)).sort();
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, 'episodes', f), 'utf8'), ctx, { filename: f }));
const EH = ctx.EH;
const args = process.argv.slice(2);
const only = args.find(a => /^s\d\de\d\d$/.test(a));
const runs = +(args[args.indexOf('--runs') + 1] || 0) || 3000;
const verbose = args.includes('--verbose');
const fromPath = args.includes('--from') ? args[args.indexOf('--from') + 1] : null;
let BASE = null;
if (fromPath) { const raw = JSON.parse(fs.readFileSync(fromPath, 'utf8')); BASE = (raw.data || raw).state || raw.data || raw; console.log('Seeding runs from save:', fromPath, '(ep', BASE.ep + ')'); }
let errors = 0, warns = 0;
const err = m => { errors++; console.log('  ✗ ' + m); };
const warn = m => { warns++; console.log('  ! ' + m); };

for (const id of EH.order) {
  if (only && id !== only) continue;
  const ep = EH.episodes[id];
  console.log(`\n== ${id} · ${ep.title} ==`);
  const sc = ep.scenes;
  if (!sc[ep.start]) err('start scene missing: ' + ep.start);
  const targets = new Map(); // scene -> [targets]
  const tgt = (from, t, what) => {
    if (typeof t === 'function') return; // dynamic, covered by simulation
    if (t === '@hub' || t === '@end') return;
    if (!t) { err(`${from}: ${what} has no target`); return; }
    if (!sc[t]) err(`${from}: ${what} → missing scene "${t}"`);
    (targets.get(from) || targets.set(from, []).get(from)).push(t);
  };
  for (const [sid, s] of Object.entries(sc)) {
    if (s.hub) {
      tgt(sid, s.hub.done, 'hub.done');
      s.hub.options.forEach(o => tgt(sid, o.go, 'hub option ' + o.id));
      continue;
    }
    if (s.card && s.card.kind === 'title') { tgt(sid, s.next, 'title.next'); continue; }
    const ch = s.choices || [];
    if (!ch.length && !s.next && !s.end) err(`${sid}: no choices, next, or end`);
    if (s.next) tgt(sid, s.next, 'next');
    (s.nextTargets || []).forEach(t => tgt(sid, t, 'nextTargets'));
    ch.forEach((c, i) => {
      const lbl = `choice ${i + 1}`;
      if (c.check) {
        const k = c.check;
        if (!['pool', 'move', 'd20'].includes(k.kind)) err(`${sid}: ${lbl} bad check kind ${k.kind}`);
        if (!EH.ATTRS.includes(k.attr)) err(`${sid}: ${lbl} bad attr ${k.attr}`);
        if (k.skill && !EH.SKILLS[k.skill]) err(`${sid}: ${lbl} bad skill ${k.skill}`);
        if (k.kind === 'pool' && !k.diff) err(`${sid}: ${lbl} pool without diff`);
        if (k.kind === 'd20' && !k.dc) err(`${sid}: ${lbl} d20 without dc`);
        for (const t of EH.TIERS_FOR[k.kind] || []) {
          const r = EH.route(k.on, t) || c.go;
          if (!r) err(`${sid}: ${lbl} no route for tier ${t}`); else tgt(sid, r, `${lbl}/${t}`);
        }
        if (k.on) Object.keys(k.on).forEach(t => { if (!EH.TIER_NAMES[t]) err(`${sid}: ${lbl} unknown tier key ${t}`); });
      } else tgt(sid, c.go, lbl);
    });
  }
  // reachability (static + hub returns)
  const seen = new Set([ep.start]); const q = [ep.start];
  while (q.length) { const s = q.shift(); (targets.get(s) || []).forEach(t => { if (!seen.has(t)) { seen.add(t); q.push(t); } }); }
  Object.keys(sc).forEach(s => { if (!seen.has(s)) warn(`unreachable (statically): ${s}`); });
  if (!Object.values(sc).some(s => s.end)) err('no end scene');

  // markup speaker scan
  const speakerRe = /^([a-z_]+):\s+/gm;
  const sim = () => {
    let S;
    if (BASE) { S = EH.clone(BASE); delete S.epStart; S.hubs = {}; S.hub = null; S.marked = {}; S.epLog = []; S.epRolls = []; delete S.pending; delete S.flags._failxp; S.pools.nerve = EH.maxPool(S, 'nerve') - (S.sleepDebt >= 6 ? 1 : 0); S.injuries = S.injuries.map(i => Object.assign({}, i, { heal: (i.heal || 1) - 1 })).filter(i => i.heal > 0); }
    else S = EH.newState();
    S.ep = id; return S;
  };
  for (const [sid, s] of Object.entries(sc)) {
    let t = '';
    try { t = typeof s.text === 'function' ? s.text(EH.api(sim())) : (s.text || ''); } catch (e) { /* runtime covered below */ }
    let m; while ((m = speakerRe.exec(t))) { if (!EH.CAST[m[1]]) warn(`${sid}: unknown speaker id "${m[1]}"`); }
  }

  // Monte Carlo playthroughs
  let ended = 0; const visits = {}; const tierCount = {}; const endings = {}; const stuck = {}; const exc = {};
  const flagStats = {};
  for (let r = 0; r < runs; r++) {
    const S = sim(); S.scene = ep.start; S.hubs = {}; S.hub = null;
    let cur = ep.start, steps = 0;
    try {
      while (steps++ < 600) {
        if (cur === '@hub') cur = S.hub;
        const s = sc[cur]; if (!s) { (stuck['missing:' + cur] = (stuck['missing:' + cur] || 0) + 1); break; }
        visits[cur] = (visits[cur] || 0) + 1;
        const g = EH.api(S);
        if (s.clock) Object.assign(S.clock, s.clock);
        const key = id + ':' + cur;
        if (s.enter && (!S.entered[key] || s.repeat)) s.enter(g);
        S.entered[key] = true;
        if (s.card && s.card.kind === 'title') { cur = s.next; continue; }
        EH.text(s, g);
        if (s.hub) {
          S.hub = cur;
          const st = S.hubs[cur] || (S.hubs[cur] = { left: s.hub.slots, used: [] });
          const opts = s.hub.options.filter(o => !st.used.includes(o.id) && (!o.if || o.if(g)) && (o.cost || 1) <= st.left);
          if (!opts.length || (s.hub.canEnd && Math.random() < 0.15)) { cur = s.hub.done; continue; }
          const o = opts[Math.floor(Math.random() * opts.length)];
          st.used.push(o.id); st.left -= (o.cost || 1); S.flags['did_' + o.id] = true; cur = o.go; continue;
        }
        if (s.end) { ended++; endings[cur] = (endings[cur] || 0) + 1; if (ep.onEnd) ep.onEnd(g); break; }
        const list = (s.choices || []).filter(c => !c.if || c.if(g));
        if (!list.length) { if (!s.next) { stuck[cur] = (stuck[cur] || 0) + 1; break; } cur = typeof s.next === 'function' ? s.next(g) : s.next; continue; }
        const open = list.filter(c => {
          if (c.cost) { if (c.cost.cash && S.money.cash < c.cost.cash) return false; for (const p of ['stamina','focus','nerve']) if (c.cost[p] && S.pools[p] < c.cost[p]) return false; }
          if (c.slip && (!g.has('slip') || S.pools.focus < 2)) return false;
          if (c.lock && c.lock(g)) return false;
          const n = c.need; if (!n) return true;
          if (n.attr) for (const k in n.attr) if (S.attrs[k] < n.attr[k]) return false;
          if (n.skill) for (const k in n.skill) if ((S.skills[k] || 0) < n.skill[k]) return false;
          if (n.cash && S.money.cash < n.cash) return false;
          if (n.focus && S.pools.focus < n.focus) return false;
          if (n.stamina && S.pools.stamina < n.stamina) return false;
          if (n.nerve && S.pools.nerve < n.nerve) return false;
          return true;
        });
        if (!open.length) { stuck['all-locked:' + cur] = (stuck['all-locked:' + cur] || 0) + 1; break; }
        const c = open[Math.floor(Math.random() * open.length)];
        if (c.cost) { if (c.cost.cash) g.money(-c.cost.cash); ['stamina', 'focus', 'nerve'].forEach(p => { if (c.cost[p]) g.pool(p, -c.cost[p]); }); }
        if (c.slip) { S.pools.focus -= 2; g.drift(1); }
        if (c.check) {
          const calc = EH.checkCalc(S, c.check);
          let res = EH.roll(c.check, calc.base);
          EH.tryNudge(S, c.check, res);
          if (c.check.forceRewind && c.check.kind === 'pool' && !EH.isClean(res.tier)) { res = EH.roll(c.check, calc.base + 2); res.rewound = true; }
          if (c.check.skill) S.marked[c.check.skill] = true;
          if (c.check.liesTo) c.check.liesTo.forEach(w => g.heat(w, { strong: 1, weak: 2, miss: 3 }[res.tier] || 0));
          const tk = cur + ':' + res.tier; tierCount[tk] = (tierCount[tk] || 0) + 1;
          g.last = res;
          if (c.fx) c.fx(g, res.tier, res);
          if (c.check.fx && c.check.fx[res.tier]) c.check.fx[res.tier](g, res);
          cur = EH.route(c.check.on, res.tier) || c.go;
        } else { S.lastRoll = null; if (c.fx) c.fx(g); cur = typeof c.go === 'function' ? c.go(g) : c.go; }
        if (cur === '@end') { ended++; break; }
      }
      if (steps >= 600) stuck['loop'] = (stuck['loop'] || 0) + 1;
      Object.keys(S.flags).forEach(k => flagStats[k] = (flagStats[k] || 0) + 1);
    } catch (e) {
      const k = cur + ': ' + e.message; exc[k] = (exc[k] || 0) + 1;
    }
  }
  Object.entries(exc).forEach(([k, n]) => err(`exception ×${n} at ${k}`));
  Object.entries(stuck).forEach(([k, n]) => err(`stuck ×${n} at ${k}`));
  const never = Object.keys(sc).filter(s => !visits[s]);
  if (never.length) warn(`never visited in ${runs} random runs: ${never.join(', ')}`);
  console.log(`  ${ended}/${runs} random runs reached the end. Scenes: ${Object.keys(sc).length}.`);
  if (verbose) {
    console.log('  endings:', endings);
    console.log('  check outcome spread:'); Object.keys(tierCount).sort().forEach(k => console.log('   ', k, tierCount[k]));
    console.log('  flag frequency:'); Object.keys(flagStats).sort().forEach(k => console.log('   ', k, (flagStats[k] / runs * 100).toFixed(0) + '%'));
  }
  // word count
  let words = 0; const S0 = sim();
  for (const s of Object.values(sc)) { try { words += EH.text(s, EH.api(S0)).split(/\s+/).filter(Boolean).length; } catch (e) { } }
  console.log(`  ~${words} words of scene text (one state; branches vary).`);
}
console.log(`\n${errors} error(s), ${warns} warning(s).`);
process.exit(errors ? 1 : 0);
