// Build: inline styles, core, all episodes, and UI into dist/index.html (one self-contained page).
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const eps = fs.readdirSync(path.join(root, 'episodes')).filter(f => /^s\d\de\d\d[a-z]?\.js$/.test(f)).sort();
const guard = s => s.replace(/<\/script/gi, '<\\/script');
let html = read('src/shell.html')
  .replace('/*__STYLES__*/', () => read('src/styles.css'))
  .replace('/*__CORE__*/', () => guard(read('src/core.js')))
  .replace('/*__EPISODES__*/', () => eps.map(f => '/* ' + f + ' */\n' + guard(read('episodes/' + f))).join('\n'))
  .replace('/*__UI__*/', () => guard(read('src/ui.js')));
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/index.html'), html);
console.log('Built dist/index.html with', eps.length, 'episode file(s),', (html.length / 1024).toFixed(1), 'KB');
