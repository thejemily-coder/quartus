// Browser smoke test that loads a real save, opens the end card, and plays the NEXT episode to its end.
// Usage: PW_PATH=... node tools/smoke_from_save.js <state.json> [--shots dir]
const { chromium } = require(process.env.PW_PATH || 'playwright');
const fs = require('fs'), path = require('path'), os = require('os');
const args = process.argv.slice(2);
const raw = JSON.parse(fs.readFileSync(args[0], 'utf8')); const S = (raw.data || raw).state || raw;
const shots = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
(async () => {
  const html = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  const tmp = path.join(os.tmpdir(), 'eh_smoke2.html');
  fs.writeFileSync(tmp, '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + html + '</body></html>');
  const b = await chromium.launch(); const ctx = await b.newContext({ reducedMotion: 'reduce', viewport: { width: 1200, height: 900 } });
  await ctx.addInitScript(s => { try { if (!localStorage.getItem('eh_seeded')) { localStorage.setItem('eh_save_v1', s); localStorage.setItem('eh_seeded', '1'); } } catch (e) {} }, JSON.stringify(S));
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + tmp);
  await p.click('.menu .choice');            // Continue -> end card of finished ep
  await p.waitForTimeout(300);
  const next = await p.$('.endcard .sec .choice');
  if (!next) { console.log(JSON.stringify({ error: 'no next-episode button' })); process.exit(1); }
  await next.click();
  let steps = 0, rolls = 0; const seen = new Set();
  while (steps++ < 600) {
    await p.waitForTimeout(25);
    if (await p.$('.overlay .skip')) { await p.click('.overlay .skip'); continue; }
    if (await p.$('.tray-wrap')) { const btn = await p.$('.tray .ft .btn.primary'); if (btn) { const t = await btn.textContent(); if (t === 'Roll') rolls++; await btn.click(); await p.waitForTimeout(t === 'Roll' ? 500 : 50); } else await p.waitForTimeout(400); continue; }
    if (await p.$('.endcard')) break;
    const cur = await p.$('.scene.cur'); if (cur) seen.add(await cur.getAttribute('data-id'));
    if (shots && steps === 8) { fs.mkdirSync(shots, { recursive: true }); await p.screenshot({ path: path.join(shots, 'e2-scene.png') }); }
    const o = await p.$$('.scene.cur .choice:not([disabled])');
    if (!o.length) { errs.push('stuck at ' + (cur && await cur.getAttribute('data-id'))); break; }
    await o[Math.floor(Math.random() * o.length)].click();
  }
  const ep = await p.evaluate(() => JSON.parse(localStorage.getItem('eh_save_v1')).done);
  console.log(JSON.stringify({ ended: !!(await p.$('.endcard')), done: ep, steps, rolls, scenes: seen.size, errs }));
  await b.close(); process.exit(errs.length ? 1 : 0);
})();
