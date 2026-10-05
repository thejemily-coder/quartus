#!/usr/bin/env node
// Static validator for TITHE episodes. Usage: node tools/validate.js [epN ...]
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'src/data.js'), 'utf8'), ctx, { filename: 'data.js' });
const T = ctx.TITHE;
const epDir = path.join(root, 'src/episodes');
let files = fs.readdirSync(epDir).filter(f => /^ep\d+\.js$/.test(f));
const only = process.argv.slice(2);
let errors = 0, warns = 0;
const err = (m) => { errors++; console.log('  ERROR ' + m); };
const warn = (m) => { warns++; console.log('  warn  ' + m); };
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(epDir, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { console.log(f + ': SYNTAX/RUNTIME ' + e.message); errors++; }
}
const allSet = new Set(), allUsed = new Map();
const flagRe = /\bf\.([a-zA-Z0-9_]+)/g;
function scanExpr(expr, where) {
  if (expr == null || expr === true || expr === false) return;
  if (typeof expr !== 'string') { err(where + ': condition is not a string'); return; }
  try { new Function('$', 'with($){return (' + expr + ');}'); } catch (e) { err(where + ': bad expression ' + JSON.stringify(expr) + ' ' + e.message); }
  let m; while ((m = flagRe.exec(expr))) { if (!allUsed.has(m[1])) allUsed.set(m[1], where); }
}
function scanFx(fx, where) {
  if (!fx) return;
  const known = ['set', 'add', 'bond', 'rep', 'xp', 'silver', 'give', 'take', 'equip', 'heal', 'hp', 'st', 'rest', 'wound', 'cure', 'party', 'know', 'quest', 'skill', 'quiet'];
  Object.keys(fx).forEach(k => { if (!known.includes(k)) err(where + ': unknown fx key ' + k); });
  if (fx.set) Object.keys(fx.set).forEach(k => allSet.add(k));
  if (fx.add) Object.keys(fx.add).forEach(k => allSet.add(k));
  if (fx.bond) Object.keys(fx.bond).forEach(k => { if (!T.CAST[k] || !T.CAST[k].bond) err(where + ': bond with non-bond cast ' + k); });
  if (fx.rep) Object.keys(fx.rep).forEach(k => { if (!['town', 'varane', 'lamp', 'fen'].includes(k)) err(where + ': unknown rep ' + k); });
  const items = x => typeof x === 'string' ? [x] : Object.keys(x || {});
  items(fx.give).concat(items(fx.take)).concat(fx.equip ? [fx.equip] : []).forEach(i => { if (!T.ITEMS[i]) err(where + ': unknown item ' + i); });
  if (fx.party) [].concat(fx.party.add || [], fx.party.remove || []).forEach(p => { if (!T.ALLIES[p]) err(where + ': party member without combat kit ' + p); });
  if (fx.know) {
    (fx.know.cast || []).forEach(c => { if (!T.CAST[c]) err(where + ': unknown cast ' + c); });
    (fx.know.beast || []).forEach(c => { if (!T.ENEMIES[c]) err(where + ': unknown beast ' + c); });
    (fx.know.codex || []).forEach(c => { if (!T.CODEX[c]) err(where + ': unknown codex ' + c); });
  }
  if (fx.quest) [].concat(fx.quest).forEach(q => { if (!q.id) err(where + ': quest without id'); if (q.state && !['active', 'done', 'failed'].includes(q.state)) err(where + ': bad quest state ' + q.state); });
  if (fx.wound && fx.wound !== 'random' && !T.WOUNDS[fx.wound]) err(where + ': unknown wound ' + fx.wound);
  if (fx.skill && !Object.values(T.SKILLS).some(b => b.list.some(s => s.id === fx.skill))) err(where + ': unknown skill ' + fx.skill);
}
function scanText(lines, where) {
  (lines || []).forEach((l, i) => {
    if (l == null) return;
    if (typeof l === 'object' && !Array.isArray(l)) { scanExpr(l.if, where + ' text[' + i + ']'); scanText([].concat(l.t || []), where); scanText([].concat(l.else || []), where); return; }
    if (Array.isArray(l)) return scanText(l, where);
    if (typeof l !== 'string') return err(where + ': text line not a string');
    const m = /^@([a-z_]+):/.exec(l);
    if (m && !T.CAST[m[1]]) warn(where + ': speaker not in CAST: ' + m[1]);
    if (/^@[A-Za-z]+ /.test(l)) warn(where + ': speaker line missing colon: ' + l.slice(0, 30));
  });
}
const nums = Object.keys(T.EPISODES).map(Number).sort((a, b) => a - b);
let totalNodes = 0, totalWords = 0;
for (const n of nums) {
  const E = T.EPISODES[n];
  if (only.length && !only.includes('ep' + n)) continue;
  console.log('Episode ' + n + ': ' + E.title);
  const nodes = E.nodes || {}, ids = Object.keys(nodes);
  totalNodes += ids.length;
  const refs = new Map();
  const ref = (to, from) => { if (to == null) return; if (to === '@end' || to === '@hub' || to === '@wildwin') return; if (!nodes[to]) err(from + ' -> missing node "' + to + '"'); else { if (!refs.has(to)) refs.set(to, []); refs.get(to).push(from); } };
  if (!nodes[E.start || 'start']) err('start node missing: ' + (E.start || 'start'));
  (E.previously || []).forEach((p, i) => scanExpr(p.if, 'previously[' + i + ']'));
  (E.recap || []).forEach((p, i) => scanExpr(p.if, 'recap[' + i + ']'));
  (E.credits || []).forEach(c => { if (!T.CAST[c]) err('credits: unknown cast ' + c); });
  let titles = 0, fights = 0, ends = 0, words = 0;
  for (const id of ids) {
    const N = nodes[id], w = 'ep' + n + ':' + id;
    const outs = ['choices', 'next', 'fight', 'end'].filter(k => N[k]);
    if (outs.length > 1) err(w + ': node has more than one of choices/next/fight/end: ' + outs.join(','));
    if (!outs.length && !N.route) warn(w + ': node has no exit (will default to end/hub)');
    if (N.route && (N.text || N.choices || N.next || N.fight || N.card)) err(w + ': node has route plus text/exits/card; route fires immediately so they are skipped. Put the route in a separate node.');
    if (N.route && N.route.length && N.route[N.route.length - 1].if) warn(w + ': route has no unconditional fallback');
    if (N.card && N.card.kind === 'titles') titles++;
    if (N.end) ends++;
    scanFx(N.fx, w); scanText(N.text, w);
    JSON.stringify(N.text || []).replace(/"[^"]*"/g, s => { words += s.split(/\s+/).length; });
    (N.route || []).forEach((r, i) => { scanExpr(r.if, w + ' route'); ref(r.go, w); scanFx(r.fx, w + ' route'); });
    if (N.next) ref(N.next, w);
    (N.choices || []).forEach((c, i) => {
      const cw = w + ' choice[' + i + ']';
      if (!c.t) err(cw + ': no text');
      scanExpr(c.if, cw); scanExpr(c.req, cw); scanFx(c.fx, cw);
      if (c.check) {
        if (!T.STATS[c.check.stat]) err(cw + ': bad check stat ' + c.check.stat);
        if (typeof c.check.dc !== 'number') err(cw + ': check dc not a number');
        ref(c.check.pass, cw); ref(c.check.fail, cw);
        if (!c.check.pass || !c.check.fail) err(cw + ': check missing pass/fail');
      } else if (!c.go) err(cw + ': choice without go'); else ref(c.go, cw);
    });
    if (N.fight) {
      fights++;
      const F = N.fight;
      (F.foes || []).forEach(e => { if (!T.ENEMIES[e]) err(w + ': unknown enemy ' + e); });
      if (!F.foes || !F.foes.length) err(w + ': fight without foes');
      if (F.foes && F.foes.length > 4) warn(w + ': more than 4 foes');
      (F.allies || []).forEach(a => { if (!T.ALLIES[a]) err(w + ': unknown ally ' + a); });
      ref(F.win, w); if (!F.win) err(w + ': fight without win'); ref(F.lose, w); ref(F.flee, w);
    }
  }
  const sideStarts = new Set();
  (E.side || []).forEach((s, i) => {
    const sw = 'side[' + (s.id || i) + ']';
    if (!s.id) err(sw + ': no id'); if (!['contract', 'talk'].includes(s.kind)) err(sw + ': bad kind ' + s.kind);
    if (!nodes[s.start]) err(sw + ': start node missing ' + s.start); else sideStarts.add(s.start);
    if (s.kind === 'talk' && !T.CAST[s.who]) err(sw + ': unknown who ' + s.who);
    scanExpr(s.if, sw);
  });
  // reachability
  const seen = new Set(), stack = [E.start || 'start', ...sideStarts];
  while (stack.length) {
    const id = stack.pop(); if (seen.has(id) || !nodes[id]) continue; seen.add(id);
    const N = nodes[id];
    const push = x => { if (x && nodes[x]) stack.push(x); };
    push(N.next); (N.route || []).forEach(r => push(r.go));
    (N.choices || []).forEach(c => { push(c.go); if (c.check) { push(c.check.pass); push(c.check.fail); } });
    if (N.fight) { push(N.fight.win); push(N.fight.lose); push(N.fight.flee); }
  }
  ids.filter(id => !seen.has(id)).forEach(id => warn('unreachable node ' + id));
  // main path must reach an end
  const mainSeen = new Set(), st2 = [E.start || 'start']; let reachesEnd = false;
  while (st2.length) {
    const id = st2.pop(); if (mainSeen.has(id) || !nodes[id]) continue; mainSeen.add(id);
    const N = nodes[id]; if (N.end) reachesEnd = true;
    [N.next, ...(N.route || []).map(r => r.go), ...(N.choices || []).flatMap(c => [c.go, c.check && c.check.pass, c.check && c.check.fail]), ...(N.fight ? [N.fight.win, N.fight.lose] : [])].forEach(x => x && st2.push(x));
    if ((N.choices || []).some(c => c.go === '@end')) reachesEnd = true;
  }
  if (!reachesEnd) err('main story never reaches an end node');
  if (titles !== 1) warn('expected exactly 1 titles card, found ' + titles);
  totalWords += words;
  console.log('  ' + ids.length + ' nodes, ~' + words + ' words, ' + fights + ' fights, ' + (E.side || []).length + ' side entries');
}
const used = [...allUsed.keys()].filter(k => !allSet.has(k) && k !== 'unreckoned' && k !== 'uncount' && k !== 'season1_done');
used.forEach(k => warn('flag read but never set anywhere: ' + k + ' (first at ' + allUsed.get(k) + ')'));
console.log('\nTotal: ' + nums.length + ' episodes, ' + totalNodes + ' nodes, ~' + totalWords + ' words. ' + errors + ' errors, ' + warns + ' warnings.');
process.exit(errors ? 1 : 0);
