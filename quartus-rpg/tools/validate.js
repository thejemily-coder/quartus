/* Static graph check + randomized bot playthroughs. Usage: node tools/validate.js [runs] */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..', 'js');
const ctx = vm.createContext({ console, setTimeout });
ctx.globalThis = ctx; ctx.window = undefined;
function load(f) { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); }
load(path.join(root, 'engine.js'));
load(path.join(root, 'data', 'world.js'));
fs.readdirSync(path.join(root, 'data')).filter(d => /^ep\d+$/.test(d)).sort().forEach(d =>
  fs.readdirSync(path.join(root, 'data', d)).filter(f => f.endsWith('.js')).sort().forEach(f => load(path.join(root, 'data', d, f))));
const Q = ctx.Q;
let errors = 0;
const err = m => { errors++; console.error('ERROR:', m); };

/* ---- static ---- */
const refs = new Set();
function ref(from, id) { if (!id) return; if (!Q.scenes[id]) err(`${from} -> missing scene "${id}"`); refs.add(id); }
Object.values(Q.scenes).forEach(sc => {
  const kinds = ['choices', 'next', 'end', 'combat', 'route'].filter(k => sc[k] && (k !== 'choices' || sc.choices.length));
  if (kinds.length !== 1) err(`${sc.id}: needs exactly one of choices/next/end/combat/route (has ${kinds.join(',') || 'none'})`);
  ref(sc.id, sc.next);
  (sc.to || []).forEach(t => ref(sc.id, t));
  if (sc.route && !sc.to) err(`${sc.id}: route scene must declare "to"`);
  (sc.choices || []).forEach((c, i) => {
    if (!c.label) err(`${sc.id} choice ${i}: no label`);
    if (c.check) { const k = c.check; if (!Q.chars.wystan.stats[k.stat] && Q.chars.wystan.stats[k.stat] !== 0) err(`${sc.id}: bad stat ${k.stat}`); ['pass', 'fail', 'crit', 'fumble'].forEach(x => ref(sc.id, k[x])); if (!k.pass || !k.fail) err(`${sc.id} choice ${i}: check needs pass+fail`); }
    else if (!c.goto) err(`${sc.id} choice ${i}: no goto`); else ref(sc.id, c.goto);
  });
  if (sc.combat) ['win', 'lose', 'yieldTo', 'fleeTo'].forEach(x => ref(sc.id, sc.combat[x]));
  if (sc.combat && !sc.combat.win) err(sc.id + ': combat needs win');
});
Object.values(Q.episodes).forEach(ep => ep.chapters.forEach(ch => { ref('ep' + ep.num, ch.start); if (ch.deadAlt) ref('ep' + ep.num, ch.deadAlt.start); }));
Object.keys(Q.scenes).forEach(id => { if (!refs.has(id)) err(`unreachable scene: ${id}`); });
console.log(`Static: ${Object.keys(Q.scenes).length} scenes, ${Object.keys(Q.episodes).length} episodes.`);

/* ---- bot ---- */
let seed = 12345;
function rng() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
Q.rng = rng;
const visitedAll = new Set();
const runs = +process.argv[2] || 600;
let endings = 0, deaths = {};
for (let r = 0; r < runs; r++) {
  seed = 1000 + r * 7919;
  let S = Q.newState(), steps = 0;
  const bias = r % 3; // 0 random, 1 prefer unvisited, 2 prefer last choice
  try {
    while (S.mode !== 'tbc') {
      if (++steps > 8000) throw new Error('step limit; stuck at ' + S.scene);
      const v = Q.view(S);
      if (S.scene) visitedAll.add(S.scene);
      if (v.kind === 'scene' && v.choices.length) {
        const open = v.choices.filter(c => !c.locked);
        if (!open.length) throw new Error('all choices locked at ' + S.scene);
        let c;
        if (bias === 1) { const sc = Q.scenes[S.scene]; c = open.map(x => x).sort((a, b) => rng() - 0.5)[0]; }
        else if (bias === 2) c = open[open.length - 1]; else c = open[Math.floor(rng() * open.length)];
        Q.choose(S, c.i);
      } else if (v.kind === 'combat' && !v.over) {
        const acts = v.actions; Q.combatAct(S, acts[Math.floor(rng() * acts.length)].id);
      } else if (v.kind === 'check' && v.canFortune && rng() < 0.5) Q.useFortune(S);
      else Q.advance(S);
      // serialization round trip
      if (steps % 25 === 0) { const t = Q.deserialize(Q.serialize(S)); Q.view(t); }
    }
    endings++;
    Object.keys(S.chars).forEach(id => { if (!S.chars[id].alive) deaths[id] = (deaths[id] || 0) + 1; });
  } catch (e) { err(`run ${r}: ${e.stack.split('\n').slice(0, 3).join(' | ')}`); if (errors > 10) break; }
}
const never = Object.keys(Q.scenes).filter(id => !visitedAll.has(id));
console.log(`Bot: ${endings}/${runs} runs reached the end. Deaths by POV:`, deaths);
if (never.length) console.log(`Never reached by bots (${never.length}):`, never.join(', '));

/* ---- permanent-death behaviour ---- */
function playOut(S) {
  let n = 0;
  while (S.mode !== 'tbc' && S.mode !== 'gameover') {
    if (++n > 6000) throw new Error('stuck');
    const v = Q.view(S);
    if (v.kind === 'scene' && v.choices.length) { const o = v.choices.filter(c => !c.locked); Q.choose(S, o[Math.floor(rng() * o.length)].i); }
    else if (v.kind === 'combat' && !v.over) Q.combatAct(S, v.actions[0].id);
    else Q.advance(S);
  }
}
[['maren'], ['wystan', 'corr'], ['wystan', 'ysolde', 'maren', 'corr']].forEach(dead => {
  try {
    const S = Q.newState();
    dead.forEach(d => { Q.ctx(S).kill(d, 'test'); });
    const seen = new Set();
    let n = 0;
    while (S.mode !== 'tbc' && S.mode !== 'gameover') {
      if (++n > 6000) throw new Error('stuck');
      const v = Q.view(S);
      if (S.mode === 'ch_title') seen.add(S.md.pov);
      if (v.kind === 'scene' && v.choices.length) { const o = v.choices.filter(c => !c.locked); Q.choose(S, o[Math.floor(rng() * o.length)].i); }
      else if (v.kind === 'combat' && !v.over) Q.combatAct(S, v.actions[0].id);
      else Q.advance(S);
    }
    dead.forEach(d => { if (seen.has(d)) err('dead POV ' + d + ' still got a chapter'); });
    console.log(`Death test [${dead.join(',')}] ok; chapters seen: ${[...seen].join(',') || '(none)'}`);
  } catch (e) { err('death test ' + dead + ': ' + e.message); }
});
process.exit(errors ? 1 : 0);
