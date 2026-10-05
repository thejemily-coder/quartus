#!/usr/bin/env node
// Full-season playthrough: E1 -> hub -> E2 ... -> E8 -> season end, carrying state like a real player.
// In each hub visit it plays some side content and a few Wilds trips, levels up, and buys poultices.
// Usage: node tools/season_playtest.js [runs=2] [--seed-choice=first|random]
const { chromium } = require('playwright');
const path = require('path');
const runs = +(process.argv[2] || 2);
const firstChoice = process.argv.includes('--first');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  let failures = 0;
  for (let r = 0; r < runs; r++) {
    const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
    const errs = [];
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    page.on('console', m => { if ((m.type() === 'error' && !/Failed to load resource/.test(m.text())) || (m.type() === 'warning' && /cond error|Missing|Unknown/.test(m.text()))) errs.push(m.type() + ': ' + m.text()); });
    await page.goto('file://' + path.join(__dirname, '..', 'tithe.html'));
    await page.evaluate(() => { try { localStorage.clear(); } catch (e) {} });
    await page.reload();
    await page.click('#ts-new');
    let steps = 0, deaths = 0, sideRuns = 0, wildRuns = 0, lastEp = 1, hubVisits = 0, done = false;
    const visited = new Set();
    const spendPoints = () => page.evaluate(() => {
      const T = window.TITHE, S = T._debug.S;
      const order = ['might', 'grit', 'finesse', 'wits', 'presence'];
      let k = 0; while (S.statPts > 0) { S.stats[order[k++ % order.length]]++; S.statPts--; }
      const prefs = ['s1', 'b1', 's2', 'b3', 'c1', 'u1', 'u3', 'b2', 's4', 'c2', 'u2', 'b4', 'u4', 's5', 'b5', 's3', 'c3', 'c4', 'c5'];
      for (const id of prefs) {
        if (S.sp <= 0) break; if (S.skills[id]) continue;
        const br = Object.values(T.SKILLS).find(b => b.list.some(s => s.id === id)); if (br.hidden && !S.f[br.hidden]) continue;
        const idx = br.list.findIndex(s => s.id === id), owned = br.list.filter(s => S.skills[s.id]).length;
        if (owned >= idx) { S.skills[id] = 1; S.sp--; }
      }
      S.hp = Math.min(S.hp, T._debug.maxHp());
    });
    while (steps++ < 9000 && !done) {
      const st = await page.evaluate(() => {
        const S = window.TITHE._debug.S, ov = document.querySelector('#overlay');
        return { node: S.ctx + ':' + S.node, mode: S.mode, ep: S.ep, ov: !ov.hidden, ovText: ov.hidden ? '' : ov.textContent.slice(0, 200) };
      });
      if (st.mode === 'story') visited.add(st.node);
      if (st.ov) {
        if (/Not Counted/.test(st.ovText)) { deaths++; if (deaths > 40) { errs.push('too many deaths near ' + st.node); break; } await page.click('#d-retry'); continue; }
        if (/End of Season One · The Marches/.test(st.ovText)) { done = true; break; }
        await page.click('#card-go').catch(() => {}); continue;
      }
      // combat
      const act = await page.$$('#actions button:not([disabled])');
      if (act.length) {
        const labels = await Promise.all(act.map(a => a.innerText()));
        const info = await page.evaluate(() => { const T = window.TITHE._debug; return { hp: T.S.hp / T.maxHp(), heavy: document.querySelectorAll('#combat .intent .heavy').length, low: [...document.querySelectorAll('#combat .foe[data-i] .hpn')].some(e => { const [a, b] = e.textContent.split('/').map(Number); return a / b < .35; }) }; });
        let pick = labels.findIndex(l => /^Strike/.test(l));
        const find = re => labels.findIndex(l => re.test(l));
        if (info.hp < .4 && find(/^Second Wind/) >= 0) pick = find(/^Second Wind/);
        else if (info.hp < .35 && find(/^Item/) >= 0) pick = find(/^Item/);
        else if (info.low && find(/^Execute/) >= 0) pick = find(/^Execute/);
        else if (find(/^Uncount/) >= 0 && Math.random() < .7) pick = find(/^Uncount/);
        else if (info.heavy && Math.random() < .6) pick = find(/^Guard/);
        else if (find(/^Cleave/) >= 0 && Math.random() < .4) pick = find(/^Cleave/);
        else if (find(/^Heavy/) >= 0 && Math.random() < .3) pick = find(/^Heavy/);
        await act[Math.max(0, pick)].click();
        const items = await page.$$('#actions button:not([disabled])');
        const il = await Promise.all(items.map(a => a.innerText()));
        if (il.some(l => /^Back/.test(l))) {
          const pi = il.findIndex(l => /Black Draught|Poultice/.test(l));
          await items[pi >= 0 ? pi : il.findIndex(l => /^Back/.test(l))].click();
        }
        continue;
      }
      // hub
      if (st.mode === 'hub') {
        const onMain = await page.$('#story .hubgrid');
        if (onMain) {
          hubVisits++;
          await spendPoints();
          const plan = await page.evaluate(() => window.__plan = window.__plan || {});
          const key = 'ep' + st.ep;
          const visits = await page.evaluate(k => (window.__plan[k] = (window.__plan[k] || 0) + 1), key);
          // sequence per hub: board x2, companions x2, wilds x3, market, then next episode
          const cards = await page.$$('#story .hubcard');
          const names = await Promise.all(cards.map(c => c.innerText()));
          const idx = n => names.findIndex(x => x.startsWith(n));
          if (visits <= 2 && !/Nothing posted/.test(names[idx('Notice Board')])) { await cards[idx('Notice Board')].click(); const rows = await page.$$('#story .listrow:not([disabled])'); if (rows.length) { sideRuns++; await rows[0].click(); } else await page.click('#story .choice.cont'); continue; }
          if (visits <= 5 && !/Nobody needs/.test(names[idx('Companions')])) { await cards[idx('Companions')].click(); const rows = await page.$$('#story .listrow:not([disabled])'); if (rows.length) { sideRuns++; await rows[0].click(); } else await page.click('#story .choice.cont'); continue; }
          if (visits <= 8) { wildRuns++; await cards[idx('The Wilds')].click(); const rows = await page.$$('#story .listrow'); await rows[Math.floor(Math.random() * rows.length)].click(); continue; }
          if (visits === 9) { const sv = await page.evaluate(() => window.TITHE._debug.S.silver); if (sv >= 30) { await cards[idx('Wyck')].click(); const b = await page.$$('#story .listrow.item:not([disabled])'); if (b.length) await b[0].click(); await page.click('#story .choice.cont').catch(() => {}); } continue; }
          if (visits === 10) { const sv = await page.evaluate(() => window.TITHE._debug.S.silver); if (sv >= 8) { await cards[idx('The Gutted Hen')].click().catch(() => {}); await page.click('#story .choice.cont').catch(() => {}); } continue; }
          const nx = await page.$('#story .choice.next-ep:not([disabled])');
          if (nx) { lastEp = st.ep; await nx.click(); continue; }
          errs.push('hub: next episode disabled at ep ' + st.ep); break;
        }
      }
      const ch = await page.$$('#story .choices:not(.done) button.choice:not([disabled])');
      if (!ch.length) {
        await page.waitForTimeout(400);
        const again = await page.$$('#story .choices:not(.done) button.choice:not([disabled]), #actions button:not([disabled]), #story .hubcard');
        if (!again.length && !(await page.evaluate(() => !document.querySelector('#overlay').hidden))) { errs.push('STUCK at ' + st.node + ' mode ' + st.mode); break; }
        continue;
      }
      await ch[firstChoice ? 0 : Math.floor(Math.random() * ch.length)].click();
    }
    const S = await page.evaluate(() => { const S = window.TITHE._debug.S; return { lvl: S.lvl, xp: S.xp, silver: S.silver, f: S.f, bond: S.bond, party: S.party, wounds: S.wounds, kills: Object.values(S.kills).reduce((a, b) => a + b, 0), quests: Object.values(S.q).map(q => q.state) }; });
    if (!done) errs.push('season not completed; last ep ' + lastEp);
    console.log(`\nRUN ${r + 1}: ${done ? 'SEASON COMPLETED' : 'INCOMPLETE'} | story nodes seen ${visited.size} | side scenes ${sideRuns} | wilds ${wildRuns} | deaths ${deaths} | lvl ${S.lvl} xp ${S.xp} silver ${S.silver} kills ${S.kills}`);
    console.log('  bonds: ' + JSON.stringify(S.bond));
    console.log('  party: ' + S.party.join(',') + ' | quests: ' + ['active', 'done', 'failed'].map(k => k + ' ' + S.quests.filter(q => q === k).length).join(', '));
    console.log('  flags: ' + JSON.stringify(S.f));
    if (errs.length) { failures++; console.log('  ERRORS:\n   ' + [...new Set(errs)].slice(0, 25).join('\n   ')); }
    await page.close();
  }
  await browser.close();
  process.exit(failures ? 1 : 0);
})();
