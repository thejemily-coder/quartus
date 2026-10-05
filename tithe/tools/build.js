#!/usr/bin/env node
// Builds tithe/tithe.html: shell + style + data + engine + episodes (in order).
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const src = p => fs.readFileSync(path.join(root, 'src', p), 'utf8');
const epDir = path.join(root, 'src', 'episodes');
const eps = fs.readdirSync(epDir).filter(f => /^ep\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(2)) - parseInt(b.slice(2)));
const js = [src('data.js'), ...eps.map(f => '/* ' + f + ' */\n' + fs.readFileSync(path.join(epDir, f), 'utf8')), src('engine.js')].join('\n;\n');
const out = src('shell.html').replace('/*@@CSS@@*/', () => src('style.css')).replace('/*@@JS@@*/', () => js.replace(/<\/script/gi, '<\\/script'));
fs.writeFileSync(path.join(root, 'tithe.html'), out);
console.log('Built tithe.html (' + Math.round(out.length / 1024) + ' KB) with ' + eps.length + ' episodes: ' + eps.join(', '));
