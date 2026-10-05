#!/usr/bin/env node
// Automated playthrough. Usage: node tools/playtest.js [episode=1] [runs=3] [--hub]
// Plays an episode start->credits with random choices and simple combat AI; reports console errors and stuck states.
const { chromium } = require('playwright');
const path = require('path');
const ep = +(process.argv[2] || 1), runs = +(process.argv[3] || 3), doHub = process.argv.includes('--hub');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  let fails = 0;
  for (let r = 0; r < runs; r++) {
    const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
    const errs = [];
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    page.on('console', m => { if ((m.type() === 'error' && !/Failed to load resource/.test(m.text())) || (m.type() === 'warning' && /cond error|Missing|Unknown/.test(m.text()))) errs.push(m.type() + ': ' + m.text()); });
    await page.goto('file://' + path.join(__dirname, '..', 'tithe.html'));
    await page.evaluate(n => {
      try { localStorage.clear(); } catch (e) {}
      const T = window.TITHE._debug; document.querySelector('#overlay').hidden = true;
      if (n > 1) { const S = T.S; S.lvl = Math.min(2 + n, 9); S.xp = 0; S.sp = 0; S.stats.might += Math.floor(n / 2); S.stats.grit += Math.floor(n / 3); S.stats.finesse += Math.floor(n / 3); S.party = ['tamsin']; if (n >= 3) S.party.push('pell'); if (n >= 5) S.party.push('ulla'); S.inv.poultice = 4; S.inv.firebomb = 2; S.equip.armor = 'leather_jack'; S.hp = T.maxHp(); S.f.unreckoned = n > 4 ? 1 : 0; }
      T.startEpisode(n);
    }, ep);
    let steps = 0, ended = false, visited = new Set(), fights = 0;
    while (steps++ < 1500) {
      const st = await page.evaluate(() => {
        const S = window.TITHE._debug.S; const ov = document.querySelector('#overlay');
        return { node: S.ctx + ':' + S.node, mode: S.mode, ov: !ov.hidden, ovText: ov.hidden ? '' : ov.textContent.slice(0, 60), hp: S.hp };
      });
      visited.add(st.node);
      if (st.ov) {
        if (/Not Counted/.test(st.ovText)) { await page.click('#d-retry'); continue; }
        if (/Episode \d+ ·|End of Season/.test(st.ovText) && /Next time|Your season|Episode/.test(await page.evaluate(() => document.querySelector('#overlay').textContent))) {
          const txt = await page.evaluate(() => document.querySelector('#overlay').textContent);
          if (/Between episodes|End of Season One/.test(txt)) { ended = true; if (doHub) await page.click('#card-go'); break; }
        }
        await page.click('#card-go').catch(() => {}); continue;
      }
      const act = await page.$$('#actions button:not([disabled])');
      if (act.length) {
        fights++;
        const labels = await Promise.all(act.map(a => a.innerText()));
        const heavy = await page.evaluate(() => [...document.querySelectorAll('#combat .intent .heavy')].length);
        let i = labels.findIndex(l => /^Strike/.test(l));
        const hp = await page.evaluate(() => { const T = window.TITHE._debug; return T.S.hp / T.maxHp(); });
        if (hp < .35 && labels.some(l => /^Item/.test(l))) i = labels.findIndex(l => /^Item/.test(l));
        else if (heavy && Math.random() < .6) i = labels.findIndex(l => /^Guard/.test(l));
        else if (labels.some(l => /^Heavy/.test(l)) && Math.random() < .3) i = labels.findIndex(l => /^Heavy/.test(l));
        await act[Math.max(0, i)].click();
        const items = await page.$$('#actions button:not([disabled])');
        const il = await Promise.all(items.map(a => a.innerText()));
        const pi = il.findIndex(l => /Poultice|Draught/.test(l));
        if (pi >= 0 && /Back/.test(il.join())) await items[pi].click(); else if (/Back/.test(il.join())) await items[0].click();
        continue;
      }
      const ch = await page.$$('#story .choices:not(.done) button.choice:not([disabled])');
      if (!ch.length) { await page.waitForTimeout(400); const again = await page.$$('#story .choices:not(.done) button.choice:not([disabled]), #actions button:not([disabled])'); if (!again.length) { errs.push('STUCK at ' + st.node); break; } continue; }
      await ch[Math.floor(Math.random() * ch.length)].click();
      await page.waitForTimeout(30);
    }
    const S = await page.evaluate(() => { const S = window.TITHE._debug.S; return { lvl: S.lvl, xp: S.xp, silver: S.silver, flags: S.f, bond: S.bond }; });
    if (!ended) errs.push('did not reach credits (steps ' + steps + ')');
    console.log(`run ${r + 1}: ep${ep} ${ended ? 'COMPLETED' : 'INCOMPLETE'} nodes=${visited.size} fightTurns=${fights} lvl=${S.lvl} xp=${S.xp} silver=${S.silver}`);
    console.log('   flags: ' + JSON.stringify(S.flags));
    if (errs.length) { fails++; console.log('   ERRORS:\n   ' + [...new Set(errs)].slice(0, 15).join('\n   ')); }
    await page.close();
  }
  await browser.close();
  process.exit(fails ? 1 : 0);
})();
