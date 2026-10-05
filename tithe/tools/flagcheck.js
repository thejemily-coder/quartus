#!/usr/bin/env node
// Cross-checks flag VALUES: every f.x === 'v' / f.x == 'v' comparison must match a value some episode sets.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../src/data.js'), 'utf8'), ctx);
const dir = path.join(__dirname, '../src/episodes');
fs.readdirSync(dir).filter(f => /^ep\d+\.js$/.test(f)).sort().forEach(f => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx));
const T = ctx.TITHE, sets = {}, reads = [];
const addSet = (k, v, ep) => { (sets[k] = sets[k] || { vals: new Set(), eps: new Set() }).vals.add(String(v)); sets[k].eps.add(ep); };
const walk = (o, ep, where) => {
  if (!o || typeof o !== 'object') return;
  if (Array.isArray(o)) return o.forEach((x, i) => walk(x, ep, where));
  for (const k of Object.keys(o)) {
    const v = o[k];
    if ((k === 'set') && v && typeof v === 'object') Object.keys(v).forEach(f => addSet(f, v[f], ep));
    if (k === 'add' && v && typeof v === 'object') Object.keys(v).forEach(f => addSet(f, '#num', ep));
    if ((k === 'if' || k === 'req') && typeof v === 'string') reads.push({ e: v, ep, where });
    walk(v, ep, where);
  }
};
Object.values(T.EPISODES).forEach(E => { Object.entries(E.nodes).forEach(([id, n]) => walk(n, E.n, 'ep' + E.n + ':' + id)); walk(E.previously, E.n, 'ep' + E.n + ':previously'); walk(E.recap, E.n, 'ep' + E.n + ':recap'); walk(E.side, E.n, 'ep' + E.n + ':side'); });
let bad = 0;
const re = /f\.([a-zA-Z0-9_]+)\s*(===|==|!==|!=)\s*(['"])([^'"]*)\3/g;
for (const r of reads) {
  let m; re.lastIndex = 0;
  while ((m = re.exec(r.e))) {
    const s = sets[m[1]];
    if (!s) { bad++; console.log(`NEVER SET   ${m[1]} (compared to '${m[4]}') at ${r.where}`); continue; }
    if (!s.vals.has(m[4]) && !s.vals.has('#num')) { bad++; console.log(`BAD VALUE   ${m[1]} === '${m[4]}' at ${r.where}; set values: ${[...s.vals].join('|')}`); }
    const firstSet = Math.min(...s.eps);
    if (firstSet > r.ep && !/^e8:recap|recap/.test(r.where)) { bad++; console.log(`READ BEFORE SET ${m[1]} read in ep${r.ep} but first set in ep${firstSet} at ${r.where}`); }
  }
  const re2 = /\bf\.([a-zA-Z0-9_]+)/g; let m2;
  while ((m2 = re2.exec(r.e))) { const s = sets[m2[1]]; if (s && Math.min(...s.eps) > r.ep && !['unreckoned','uncount','season1_done'].includes(m2[1])) { bad++; console.log(`READ BEFORE SET ${m2[1]} in ep${r.ep}, first set ep${Math.min(...s.eps)} at ${r.where}`); } }
}
// registry flags never read after their episode
const reg = ['e1_spared_wat','e1_ashby','e1_told_tam_roll','e1_saw_crow','e1_hask_meeting','e2_hob_hired','e2_ratking','e2_told_isolde_truth','e2_mags','e3_edda','e3_gall_charm','e3_suspect_tam','e3_oriel_met','e3_rusk','e4_ulla','e4_ledger','e4_miners','e5_melee','e5_ledger_to','e5_isolde_kiss','e5_delphine','e5_brannagh_spar','e6_ring','e6_hollin','e6_tam_stopped','e6_companion','e7_hob','e7_moll_turned','e7_last_words','e8_gall','e8_pell','e8_hask','e8_abbess'];
for (const k of reg) { const later = reads.filter(r => r.e.includes('f.' + k) && sets[k] && r.ep > Math.min(...sets[k].eps)); if (!later.length) console.log(`NO PAYOFF   registry flag ${k} is never read in a later episode`); else console.log(`payoff      ${k}: read ${later.length}x in eps ${[...new Set(later.map(r => r.ep))].join(',')}`); }
console.log('\n' + bad + ' problems');
