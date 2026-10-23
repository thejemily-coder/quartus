// Random-playthrough smoke test of one episode on a real save.
// Usage: python3 tools/build.py && node tools/sim.js S2E03 saves/after-s2e02.json [runs=400]
// Prints one JSON line: {ok, stuck, missing, words:[min,avg,max], whispers:[min,max], keys:[min,max], errors}
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const [epId, savePath, runsArg] = process.argv.slice(2);
if (!epId || !savePath) { console.error('usage: node tools/sim.js <EPID> <save.json> [runs]'); process.exit(2) }
const root = path.resolve(__dirname, '..');
const save = JSON.parse(fs.readFileSync(path.resolve(root, savePath), 'utf8'));
const html = fs.readFileSync(path.join(root, 'game/play.html'), 'utf8').replace(/animation:[^;]*fade[^;]*;/g, 'animation:none;');
const tmp = path.join(require('os').tmpdir(), `hs-sim-${process.pid}.html`);
fs.writeFileSync(tmp, html);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + tmp);
  const r = await p.evaluate(({ id, vars, completed, runs }) => {
    const out = { ok: 0, stuck: [], visited: new Set(), words: [], whispers: [], keys: [] };
    let seed = 7; const rnd = n => { seed = (seed * 1103515245 + 12345) % 2147483648; return Math.floor(seed / 65536) % n };
    const wc = () => document.getElementById('stage').innerText.split(/\s+/).length;
    if (!EP[id]) return { error: 'episode not in build: ' + id };
    for (let run = 0; run < runs; run++) {
      S = fresh(); ui.view = 'play'; Object.assign(S.vars, vars); S.completed = completed.filter(c => c !== id);
      startEpisode(id); S.cur.stage = 'card'; enterScene(EP[id].start);
      let steps = 0, w = 0, wh = 0;
      while (steps++ < 400) {
        const sc = EP[id].scenes[S.cur.scene];
        out.visited.add(S.cur.scene);
        if (S.cur.stage === 'end') break;
        if (S.cur.stage === 'response') { w += wc(); enterScene(S.cur.choice.goto); continue }
        const ch = visibleChoices(sc);
        if (ch.length) { const i = rnd(ch.length); if (ch[i].cue) wh++; choose(i); if (S.cur.stage !== 'response') w += wc(); continue }
        w += wc();
        if (sc.end) { endEpisode(); break }
        if (sc.next) { enterScene(sc.next); continue }
        out.stuck.push(S.cur.scene); break;
      }
      if (S.cur.stage === 'end') out.ok++;
      out.words.push(w); out.whispers.push(wh); out.keys.push((S.logs[id] || []).filter(l => l.key).length);
    }
    const all = Object.keys(EP[id].scenes);
    const avg = a => Math.round(a.reduce((x, y) => x + y, 0) / a.length);
    return { ok: out.ok, runs, stuck: [...new Set(out.stuck)], missing: all.filter(s => !out.visited.has(s)), words: [Math.min(...out.words), avg(out.words), Math.max(...out.words)], whispers: [Math.min(...out.whispers), Math.max(...out.whispers)], keys: [Math.min(...out.keys), Math.max(...out.keys)] };
  }, { id: epId, vars: save.vars, completed: save.completed || [], runs: Number(runsArg) || 400 });
  r.errors = [...new Set(errs)];
  console.log(JSON.stringify(r));
  await b.close(); fs.unlinkSync(tmp);
  process.exit(r.ok === r.runs && !r.errors.length ? 0 : 1);
})();
