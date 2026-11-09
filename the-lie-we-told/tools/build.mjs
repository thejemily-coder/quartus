#!/usr/bin/env node
// Compile src/<id>.ep (or src/<id>/*.ep) -> episodes/<id>.json, validate, and update episodes/index.json.
// Usage: node tools/build.mjs s1e1 [--check]   (--check validates without writing)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, identifiers } from './expr.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2];
const checkOnly = process.argv.includes('--check');
if (!id) { console.error('usage: build.mjs <episode-id> [--check]'); process.exit(2); }

function readSource(id) {
  const single = path.join(ROOT, 'src', id + '.ep');
  const dir = path.join(ROOT, 'src', id);
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ep')).sort();
    return files.map((f) => ({ file: path.join('src', id, f), text: fs.readFileSync(path.join(dir, f), 'utf8') }));
  }
  if (fs.existsSync(single)) return [{ file: path.join('src', id + '.ep'), text: fs.readFileSync(single, 'utf8') }];
  throw new Error('No source for ' + id);
}

const errors = []; const warnings = [];
const err = (loc, m) => errors.push(`${loc}: ${m}`);
const warn = (loc, m) => warnings.push(`${loc}: ${m}`);

function attrs(s) {
  const out = {}; const re = /(\w+)=("([^"]*)"|(\S+))/g; let m;
  while ((m = re.exec(s))) out[m[1]] = m[3] !== undefined ? m[3] : m[4];
  return out;
}
function parseOps(s, loc) {
  const ops = [];
  for (const part of s.split(',').map((x) => x.trim()).filter(Boolean)) {
    const m = /^([A-Za-z_][A-Za-z0-9_.]*)\s*(\+=|-=|=)\s*(.+)$/.exec(part);
    if (!m) { err(loc, `bad set op '${part}'`); continue; }
    let v = m[3].trim();
    if (v === 'true') v = true; else if (v === 'false') v = false;
    else if (/^-?\d+(\.\d+)?$/.test(v)) v = parseFloat(v);
    else if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
    else err(loc, `bad value '${v}' (strings must be quoted)`);
    if ((m[2] !== '=') && typeof v !== 'number') err(loc, `${m[2]} needs a number`);
    ops.push({ k: m[1], op: m[2], v });
  }
  return ops;
}
function checkExpr(src, loc) { try { parse(src); } catch (e) { err(loc, e.message); } }

const EXTRA_TAGS = ['aim', 'away', 'sms', 'voicemail', 'fb', 'note', 'polaroid', 'mixtape'];

function compile(parts) {
  const meta = { previously: [], teaser: [] };
  const nodes = {}; const order = [];
  let node = null;
  let stack = null; // block containers for {if}
  let extra = null; // open extra tag {tag, attrs, lines, loc}
  let para = [];
  const flushPara = () => { if (para.length) { stack[stack.length - 1].push({ t: 'p', text: para.join(' ').trim() }); para = []; } };

  for (const { file, text } of parts) {
    const lines = text.replace(/\r\n/g, '\n').split('\n');
    lines.forEach((raw, i) => {
      const loc = `${file}:${i + 1}`;
      const line = raw.replace(/\s+$/, '');
      if (extra) {
        const close = new RegExp(`^\\s*\\[/${extra.tag}\\]\\s*$`);
        const inlineClose = line.indexOf(`[/${extra.tag}]`);
        if (close.test(line)) { finishExtra(); return; }
        if (inlineClose >= 0) { extra.lines.push(line.slice(0, inlineClose)); finishExtra(); return; }
        extra.lines.push(line); return;
      }
      if (/^\s*\/\//.test(line)) return;
      if (!node) {
        const m = /^@(\w+)\s+(.*)$/.exec(line.trim());
        if (m) {
          if (m[1] === 'previously' || m[1] === 'teaser') meta[m[1]].push(m[2].trim());
          else meta[m[1]] = m[2].trim();
          return;
        }
        if (/^===\s*\S+/.test(line)) { /* fallthrough to node start */ }
        else if (line.trim() === '') return;
        else { err(loc, 'text before first node'); return; }
      }
      const nm = /^===\s*([a-z0-9_]+)\s*$/.exec(line);
      if (nm) { closeNode(loc); startNode(nm[1], loc); return; }
      if (/^===/.test(line)) { err(loc, 'bad node id (use lower_snake_case)'); return; }
      const t = line.trim();
      if (node.exit && t !== '' && !t.startsWith('* ') && !t.startsWith('*\t')) { err(loc, 'content after exit'); return; }
      if (t === '') { flushPara(); return; }
      let m;
      if ((m = /^@(pov|slug|act)\s+(.*)$/.exec(t))) { node[m[1]] = m[2].trim(); return; }
      if ((m = /^\{if\s+(.+)\}$/.exec(t))) { flushPara(); checkExpr(m[1], loc); const blk = { t: 'if', cond: m[1].trim(), then: [], else: [] }; stack[stack.length - 1].push(blk); stack.push(blk.then); blk._loc = loc; node._ifs.push(blk); return; }
      if (t === '{else}') { flushPara(); const blk = node._ifs[node._ifs.length - 1]; if (!blk || stack.length < 2) { err(loc, '{else} without {if}'); return; } stack.pop(); stack.push(blk.else); return; }
      if (t === '{/if}') { flushPara(); if (stack.length < 2) { err(loc, '{/if} without {if}'); return; } stack.pop(); node._ifs.pop(); return; }
      if ((m = /^\[set\s+(.+)\]$/.exec(t))) { flushPara(); stack[stack.length - 1].push({ t: 'set', ops: parseOps(m[1], loc) }); return; }
      if ((m = /^\[needle\]\s*(.+)$/.exec(t))) {
        flushPara(); const [song, artist, where] = m[1].split('|').map((s) => (s || '').trim());
        if (!song || !artist) err(loc, 'needle needs Song | Artist | where');
        stack[stack.length - 1].push({ t: 'needle', song, artist, where: where || '' }); return;
      }
      if ((m = /^\[(\w+)([^\]]*)\](.*)$/.exec(t)) && EXTRA_TAGS.includes(m[1])) {
        flushPara(); extra = { tag: m[1], attrs: attrs(m[2]), lines: [], loc };
        const rest = m[3];
        const ci = rest.indexOf(`[/${m[1]}]`);
        if (ci >= 0) { extra.lines.push(rest.slice(0, ci)); finishExtra(); }
        else if (rest.trim()) extra.lines.push(rest);
        return;
      }
      if (t === '[end]') { flushPara(); setExit(loc, { type: 'end' }); return; }
      if ((m = /^->\s*([a-z0-9_]+)\s*$/.exec(t))) { flushPara(); setExit(loc, { type: 'next', to: m[1] }); return; }
      if ((m = /^\*\s+(.+)$/.exec(t))) {
        flushPara();
        if (node.exit && node.exit.type !== 'choices') { err(loc, 'choice after another exit'); return; }
        if (!node.exit) setExit(loc, { type: 'choices', choices: [] });
        let body = m[1]; let cond;
        const cm = /^\{if\s+([^}]+)\}\s*(.*)$/.exec(body);
        if (cm) { cond = cm[1].trim(); checkExpr(cond, loc); body = cm[2]; }
        const segs = body.split('|').map((s) => s.trim());
        const head = /^(.*?)\s*->\s*([a-z0-9_]+)$/.exec(segs[0]);
        if (!head) { err(loc, `choice needs 'Label -> target': ${segs[0]}`); return; }
        const ch = { label: head[1].trim(), to: head[2], _loc: loc };
        if (cond) ch.cond = cond;
        for (const s of segs.slice(1)) {
          let mm;
          if ((mm = /^set:\s*(.+)$/.exec(s))) ch.set = parseOps(mm[1], loc);
          else if ((mm = /^echo:\s*(.+)$/.exec(s))) ch.echo = mm[1].trim();
          else err(loc, `unknown choice segment '${s}'`);
        }
        node.exit.choices.push(ch); return;
      }
      if (/^\[[\w/]+/.test(t) && !/^\[\.\.\.\]/.test(t)) warn(loc, `line starts with '[' but is not a known tag — treated as prose: ${t.slice(0, 40)}`);
      if (/^@\w+/.test(t)) warn(loc, `unknown directive treated as prose: ${t.slice(0, 40)}`);
      para.push(t);
    });
    if (extra) { err(extra.loc, `unclosed [${extra.tag}]`); extra = null; }
  }
  closeNode('EOF');

  function finishExtra() {
    const { tag, attrs: a, lines, loc } = extra; extra = null;
    const textBody = lines.join('\n').trim();
    const blk = { t: tag, ...a };
    if (tag === 'aim') {
      blk.lines = lines.map((l) => l.trim()).filter(Boolean).map((l) => {
        if (/^\*.*\*$/.test(l)) return { sys: l.slice(1, -1) };
        const mm = /^([^:]{1,40}):\s?(.*)$/.exec(l);
        if (!mm) { warn(loc, `aim line without 'name:' — shown as system line: ${l}`); return { sys: l }; }
        return { who: mm[1].trim(), text: mm[2] };
      });
    } else if (tag === 'mixtape') {
      blk.pick = parseInt(a.pick || '3', 10);
      blk.tracks = lines.map((l) => l.trim()).filter((l) => l.startsWith('-')).map((l) => {
        const [key, song, artist, year] = l.slice(1).split('|').map((s) => (s || '').trim());
        if (!/^[a-z0-9_]+$/.test(key || '')) err(loc, `mixtape track key must be lower_snake: ${key}`);
        return { key, song, artist, year };
      });
      if (!a.id) err(loc, 'mixtape needs id');
      if (blk.tracks.length < blk.pick + 1) err(loc, 'mixtape needs more tracks than pick');
    } else {
      blk.text = textBody;
      if (tag === 'polaroid' && !a.id) err(loc, 'polaroid needs id');
    }
    stack[stack.length - 1].push(blk);
  }
  function startNode(nid, loc) {
    if (nodes[nid]) err(loc, `duplicate node '${nid}'`);
    node = { id: nid, pov: 'cal', body: [], _ifs: [], _loc: loc };
    stack = [node.body]; para = []; nodes[nid] = node; order.push(nid);
  }
  function closeNode(loc) {
    if (!node) return; flushPara();
    if (stack.length > 1) err(node._loc, `unclosed {if} in node '${node.id}'`);
    if (!node.exit) err(node._loc, `node '${node.id}' has no exit (choices, '-> next' or [end])`);
    delete node._ifs; node = null;
  }
  function setExit(loc, ex) { if (node.exit) { err(loc, 'node already has an exit'); return; } node.exit = ex; }
  return { meta, nodes, order };
}

function words(blocks) {
  let n = 0;
  for (const b of blocks) {
    if (b.t === 'if') n += Math.max(words(b.then), words(b.else));
    else if (b.text) n += b.text.split(/\s+/).filter(Boolean).length;
    else if (b.lines) n += b.lines.map((l) => (l.text || l.sys || '')).join(' ').split(/\s+/).filter(Boolean).length;
  }
  return n;
}
function collect(blocks, fn) { for (const b of blocks) { fn(b); if (b.t === 'if') { collect(b.then, fn); collect(b.else, fn); } } }

const parts = readSource(id);
const { meta, nodes, order } = compile(parts);
for (const k of ['id', 'season', 'episode', 'title', 'date', 'start']) if (!meta[k]) err('header', `missing @${k}`);
if (meta.id && meta.id !== id) err('header', `@id ${meta.id} != ${id}`);
if (meta.start && !nodes[meta.start]) err('header', `@start '${meta.start}' not found`);

// graph checks
const setFlags = new Set(); const usedFlags = new Set();
for (const nid of order) {
  const n = nodes[nid];
  if (!['cal', 'del'].includes(n.pov) && !/^other:.+/.test(n.pov)) err(n._loc, `bad @pov '${n.pov}'`);
  collect(n.body, (b) => {
    if (b.t === 'set') b.ops.forEach((o) => setFlags.add(o.k));
    if (b.t === 'if') identifiers(parse(b.cond)).forEach((x) => usedFlags.add(x));
    if (b.t === 'mixtape') { setFlags.add(b.id); b.tracks.forEach((t) => setFlags.add(`${b.id}__${t.key}`)); }
  });
  if (n.exit && n.exit.type === 'next' && !nodes[n.exit.to]) err(n._loc, `'${nid}' -> unknown node '${n.exit.to}'`);
  if (n.exit && n.exit.type === 'choices') {
    const cs = n.exit.choices;
    if (cs.length < 2) err(n._loc, `'${nid}' has only ${cs.length} choice(s); use '-> next' for a single path`);
    if (cs.every((c) => c.cond)) warn(n._loc, `'${nid}': every choice is conditional — make sure one is always visible`);
    for (const c of cs) {
      if (!nodes[c.to]) err(c._loc, `choice -> unknown node '${c.to}'`);
      (c.set || []).forEach((o) => setFlags.add(o.k));
      if (c.cond) identifiers(parse(c.cond)).forEach((x) => usedFlags.add(x));
      delete c._loc;
    }
  }
}
const pids = new Set();
for (const nid of order) collect(nodes[nid].body, (b) => { if (b.t === 'polaroid') { if (pids.has(b.id)) err(nid, `duplicate polaroid id ${b.id}`); pids.add(b.id); } });

const succ = (n) => !n.exit ? [] : n.exit.type === 'next' ? [n.exit.to] : n.exit.type === 'choices' ? [...new Set(n.exit.choices.map((c) => c.to))] : [];
const seen = new Set(); const q = meta.start && nodes[meta.start] ? [meta.start] : [];
while (q.length) { const x = q.shift(); if (seen.has(x)) continue; seen.add(x); succ(nodes[x]).filter((y) => nodes[y]).forEach((y) => q.push(y)); }
for (const nid of order) if (!seen.has(nid)) err(nodes[nid]._loc, `node '${nid}' is unreachable`);
if (!order.some((nid) => nodes[nid].exit && nodes[nid].exit.type === 'end')) err('graph', 'no [end] node');

// cycle detection + path stats
const W = {}; for (const nid of order) W[nid] = words(nodes[nid].body);
const state = {}; let cyclic = false;
const memo = {};
function stats(nid) {
  if (memo[nid]) return memo[nid];
  if (state[nid] === 1) { cyclic = true; return { minW: 0, maxW: 0, minC: 0, maxC: 0 }; }
  state[nid] = 1;
  const n = nodes[nid]; const isC = n.exit && n.exit.type === 'choices' ? 1 : 0;
  const kids = succ(n).filter((y) => nodes[y]).map(stats);
  const r = kids.length
    ? { minW: W[nid] + Math.min(...kids.map((k) => k.minW)), maxW: W[nid] + Math.max(...kids.map((k) => k.maxW)), minC: isC + Math.min(...kids.map((k) => k.minC)), maxC: isC + Math.max(...kids.map((k) => k.maxC)) }
    : { minW: W[nid], maxW: W[nid], minC: isC, maxC: isC };
  state[nid] = 2; memo[nid] = r; return r;
}
const st = meta.start && nodes[meta.start] ? stats(meta.start) : null;
if (cyclic) warn('graph', 'graph contains a cycle (allowed for hub scenes, but path stats are approximate)');
for (const f of usedFlags) if (!setFlags.has(f) && !f.startsWith('s0') && !/^s\d+e\d+_/.test(f) === false) { /* prior-episode flags allowed */ }
const thisPrefix = id + '_';
for (const f of usedFlags) if (f.startsWith(thisPrefix) && !setFlags.has(f)) warn('flags', `flag '${f}' is tested but never set in this episode`);

// output
for (const nid of order) delete nodes[nid]._loc;
const totalWords = Object.values(W).reduce((a, b) => a + b, 0);
const report = {
  nodes: order.length, totalWords,
  path: st ? { words: [st.minW, st.maxW], choices: [st.minC, st.maxC] } : null,
  flagsSet: [...setFlags].sort(),
};
console.log(`\n${id}: ${order.length} nodes, ${totalWords} words total`);
if (st) console.log(`path words: ${st.minW}–${st.maxW}; choices along a path: ${st.minC}–${st.maxC}`);
console.log(`flags set: ${setFlags.size}`);
warnings.forEach((w) => console.log('WARN  ' + w));
errors.forEach((e) => console.log('ERROR ' + e));
if (errors.length) { console.log(`\n${errors.length} error(s).`); process.exit(1); }

if (!checkOnly) {
  const out = { format: 1, meta, nodes, order, stats: report };
  fs.mkdirSync(path.join(ROOT, 'episodes'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'episodes', id + '.json'), JSON.stringify(out));
  const idxPath = path.join(ROOT, 'episodes', 'index.json');
  const idx = fs.existsSync(idxPath) ? JSON.parse(fs.readFileSync(idxPath, 'utf8')) : { show: 'The Lie We Told', episodes: [] };
  const entry = { id, season: +meta.season, episode: +meta.episode, title: meta.title, title_credit: meta.title_credit || '', date: meta.date, teaser: meta.teaser };
  idx.episodes = idx.episodes.filter((e) => e.id !== id).concat(entry).sort((a, b) => a.season - b.season || a.episode - b.episode);
  fs.writeFileSync(idxPath, JSON.stringify(idx, null, 2));
  console.log(`wrote episodes/${id}.json and updated index.json`);
}
