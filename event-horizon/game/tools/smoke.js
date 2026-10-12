// Browser smoke test: plays the built game end to end with random choices and reports page errors.
// Usage: node tools/smoke.js [--shots dir] [--seed n] [--mobile] [--dark]
const { chromium } = require(process.env.PW_PATH || 'playwright');
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2);
const shots = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
const mobile = args.includes('--mobile'), dark = args.includes('--dark');
(async () => {
  const html = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  const page_ = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>' + html + '</body></html>';
  const tmp = path.join(require('os').tmpdir(), 'eh_smoke.html'); fs.writeFileSync(tmp, page_);
  const browser = await chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium') ? undefined : undefined });
  const ctx = await browser.newContext({ viewport: mobile ? { width: 390, height: 844 } : { width: 1280, height: 900 }, colorScheme: dark ? 'dark' : 'light', reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_NAME|net::/.test(m.text())) errs.push('console: ' + m.text()); });
  await page.goto('file://' + tmp);
  const shot = async n => { if (shots) { fs.mkdirSync(shots, { recursive: true }); await page.screenshot({ path: path.join(shots, n + '.png'), fullPage: false }); } };
  await shot('00-title');
  await page.click('.menu .choice');
  let steps = 0, scenes = new Set(), rolls = 0;
  while (steps++ < 700) {
    await page.waitForTimeout(30);
    if (await page.$('.overlay .skip')) { await shot('01-overlay-' + steps); await page.click('.overlay .skip'); continue; }
    if (await page.$('.tray-wrap')) {
      const roll = await page.$('.tray .ft .btn.primary');
      if (roll) {
        const t = await roll.textContent();
        if (t === 'Roll') { if (rolls === 1) await shot('02-tray'); rolls++; await roll.click(); await page.waitForTimeout(450); }
        else { if (rolls === 1) await shot('03-tray-result'); await roll.click(); }
      } else await page.waitForTimeout(400);
      continue;
    }
    if (await page.$('.endcard')) { await shot('09-endcard'); break; }
    const cur = await page.$('.scene.cur');
    if (cur) { const id = await cur.getAttribute('data-id'); scenes.add(id); }
    const opts = await page.$$('.scene.cur .choice:not([disabled])');
    if (!opts.length) { errs.push('no clickable choices in ' + (cur && await cur.getAttribute('data-id'))); break; }
    if (steps === 6) await shot('04-scene');
    if (steps === 40) { await page.click('[data-tab="sheet"]'); await shot('05-sheet'); await page.click('.drawer .x'); }
    if (steps === 41) { await page.click('[data-tab="bonds"]'); await shot('06-bonds'); await page.click('.drawer .x'); }
    if (steps === 60) { await page.click('[data-tab="notes"]'); await shot('07-notes'); await page.click('.drawer .x'); }
    const o = opts[Math.floor(Math.random() * opts.length)];
    await o.click();
  }
  const ended = !!(await page.$('.endcard'));
  const wide = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  console.log(JSON.stringify({ ended, steps, scenes: scenes.size, rolls, horizontalOverflow: wide, errors: errs }, null, 1));
  await browser.close();
  process.exit(errs.length || !ended ? 1 : 0);
})();
