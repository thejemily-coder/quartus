// Structural validator for a Whitlock episode file. Prints statistics only (no story text).
// Usage: node validate.mjs path/to/sNNeNN.json
import fs from 'node:fs';

const file = process.argv[2];
const ep = JSON.parse(fs.readFileSync(file, 'utf8'));
const errors = [], warns = [];
const err = m => errors.push(m), warn = m => warns.push(m);
const BLOCKS = new Set(['slug', 'a', 'line', 'texts', 'music', 'card']);

for (const k of ['id', 'season', 'ep', 'title', 'logline', 'date', 'start', 'nodes', 'titleAfter'])
  if (ep[k] === undefined || ep[k] === '') err(`missing top-level field: ${k}`);
if (!/^s\d\de\d\d$/.test(ep.id || '')) err('id must look like s01e01');
const nodes = ep.nodes || {};
const ids = Object.keys(nodes);
if (!nodes[ep.start]) err('start node does not exist');
if (ep.titleAfter && !nodes[ep.titleAfter]) err('titleAfter node does not exist');

const words = bs => (bs || []).reduce((n, b) => n + String(b.text || '').split(/\s+/).filter(Boolean).length + (b.msgs || []).reduce((m, x) => m + String(x.text || '').split(/\s+/).length, 0), 0);
function checkBlocks(bs, where) {
  if (!Array.isArray(bs)) { err(`${where}: blocks must be an array`); return; }
  bs.forEach((b, i) => {
    if (!b || !BLOCKS.has(b.t)) err(`${where}[${i}]: unknown block type ${b && b.t}`);
    else if (b.t === 'line' && (!b.text || !(b.who || b.name))) err(`${where}[${i}]: line needs who/name and text`);
    else if (b.t === 'texts' && !Array.isArray(b.msgs)) err(`${where}[${i}]: texts needs msgs`);
    else if (['slug', 'a', 'card'].includes(b.t) && !b.text) err(`${where}[${i}]: empty ${b.t}`);
  });
}

const flagsSet = new Set(), flagsTested = new Set();
const noteTests = o => o && Object.keys(o).forEach(f => flagsTested.add(f));
const edges = {};
for (const id of ids) {
  const n = nodes[id]; edges[id] = [];
  if (n.route) {
    if (!Array.isArray(n.route) || !n.route.length) err(`${id}: route must be a non-empty array`);
    else {
      if (n.route[n.route.length - 1].if) warn(`${id}: route has no unconditional fallback`);
      n.route.forEach(r => { noteTests(r.if); edges[id].push(r.next); });
    }
    continue;
  }
  checkBlocks(n.blocks, `${id}.blocks`);
  (n.blocks || []).forEach(b => noteTests(b.if));
  if (n.end) { if (n.choices) err(`${id}: end node cannot have choices`); continue; }
  if (n.choices) {
    if (n.choices.length < 2 || n.choices.length > 4) err(`${id}: needs 2-4 choices (has ${n.choices.length})`);
    const cids = new Set();
    for (const c of n.choices) {
      if (!c.id || cids.has(c.id)) err(`${id}: choice id missing or duplicated`); cids.add(c.id);
      if (!c.label) err(`${id}/${c.id}: missing label`);
      checkBlocks(c.reaction || [], `${id}/${c.id}.reaction`);
      noteTests(c.if); (c.reaction || []).forEach(b => noteTests(b.if));
      Object.keys(c.set || {}).forEach(f => flagsSet.add(f));
      const nx = c.next || n.next; if (!nx) err(`${id}/${c.id}: no next`); else edges[id].push(nx);
    }
    if (n.choices.every(c => c.if)) warn(`${id}: every choice is conditional; a path could show none`);
  } else if (n.next) edges[id].push(n.next);
  else err(`${id}: node needs choices, next, route, or end`);
}
for (const [id, es] of Object.entries(edges)) for (const e of es) if (!nodes[e]) err(`${id}: next "${e}" does not exist`);

// Reachability
const seen = new Set(); const stack = [ep.start];
while (stack.length) { const id = stack.pop(); if (!id || seen.has(id) || !nodes[id]) continue; seen.add(id); stack.push(...edges[id]); }
ids.filter(id => !seen.has(id)).forEach(id => warn(`unreachable node: ${id}`));
if (!ids.some(id => nodes[id].end)) err('no end node');

// Path enumeration (ignoring flag conditions on routes: every route branch counts as possible)
let paths = 0, minC = Infinity, maxC = 0, minW = Infinity, maxW = 0, cycle = false, totalWords = 0;
const nodeWords = {};
for (const id of ids) { const n = nodes[id]; nodeWords[id] = words(n.blocks) ; }
for (const id of ids) totalWords += words(nodes[id].blocks) + (nodes[id].choices || []).reduce((s, c) => s + words(c.reaction), 0);
function walk(id, onPath, choicesSoFar, wordsSoFar) {
  if (paths > 20000) return;
  if (onPath.has(id)) { cycle = true; return; }
  const n = nodes[id]; if (!n) return;
  onPath.add(id);
  if (n.end) { paths++; const w = wordsSoFar + nodeWords[id]; minC = Math.min(minC, choicesSoFar); maxC = Math.max(maxC, choicesSoFar); minW = Math.min(minW, w); maxW = Math.max(maxW, w); }
  else if (n.route) for (const r of n.route) walk(r.next, onPath, choicesSoFar, wordsSoFar);
  else if (n.choices) { const seenNext = new Map(); for (const c of n.choices) { const nx = c.next || n.next; const w = words(c.reaction); if (!seenNext.has(nx) || seenNext.get(nx) < w) seenNext.set(nx, w); } for (const [nx, w] of seenNext) walk(nx, onPath, choicesSoFar + 1, wordsSoFar + nodeWords[id] + w); }
  else walk(n.next, onPath, choicesSoFar, wordsSoFar + nodeWords[id]);
  onPath.delete(id);
}
walk(ep.start, new Set(), 0, 0);
if (cycle) err('cycle detected in the node graph');
if (paths && minC < 15) err(`some path has only ${minC} choice points (need 15-20)`);
if (paths && maxC > 22) warn(`some path has ${maxC} choice points (target 15-20)`);
[...flagsTested].filter(f => !flagsSet.has(f) && !/^e\d+_|^s\d+e\d+_/.test(f) ).forEach(f => warn(`flag tested but never set here, and not namespaced to an earlier episode: ${f}`));
const epPrefix = ep.season === 1 ? `e${ep.ep}_` : `s${ep.season}e${ep.ep}_`;
[...flagsSet].filter(f => !f.startsWith(epPrefix)).forEach(f => warn(`flag not prefixed with ${epPrefix}: ${f}`));
[...flagsTested].filter(f => f.startsWith(epPrefix) && !flagsSet.has(f)).forEach(f => err(`flag tested but never set: ${f}`));
if (!Array.isArray(ep.phone) || ep.phone.length < 2) warn('phone interlude should have 2-4 threads');
(ep.phone || []).forEach((t, i) => { if (!t.name || !Array.isArray(t.msgs) || !Array.isArray(t.options) || t.options.length < 2) err(`phone[${i}] malformed`); });
(ep.castNew || []).forEach(c => { if (!nodes[c.node]) err(`castNew ${c.id}: node ${c.node} does not exist`); });
const choicesTotal = ids.reduce((s, id) => s + (nodes[id].choices || []).length, 0);
const forks = ids.filter(id => new Set((nodes[id].choices || []).map(c => c.next || nodes[id].next)).size > 1).length;

console.log(JSON.stringify({file, nodes: ids.length, choiceNodes: ids.filter(id => nodes[id].choices).length, choices: choicesTotal,
  branchingNodes: forks, routers: ids.filter(id => nodes[id].route).length, paths: paths > 20000 ? '20000+' : paths,
  choicePointsPerPath: [minC, maxC], wordsPerPath: [minW, maxW], totalWords, flagsSet: flagsSet.size, flagsTested: flagsTested.size,
  castNew: (ep.castNew || []).length, phoneThreads: (ep.phone || []).length}, null, 1));
warns.forEach(w => console.log('WARN', w));
errors.forEach(e => console.log('ERROR', e));
console.log(errors.length ? `FAIL (${errors.length} errors)` : 'PASS');
process.exit(errors.length ? 1 : 0);
