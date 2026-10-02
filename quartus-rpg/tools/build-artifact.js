/* Bundles the game into one self-contained HTML file for publishing as a claude.ai Artifact.
   Usage: node tools/build-artifact.js  ->  dist/quartus-artifact.html */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const scripts = [...index.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const body = index.match(/<body>\s*([\s\S]*?)\s*<script src=/)[1];
const css = fs.readFileSync(path.join(root, 'css', 'style.css'), 'utf8');
const js = scripts.map(s => '/* ' + s + ' */\n' + fs.readFileSync(path.join(root, s), 'utf8')).join('\n');
if (/<\/script/i.test(js)) throw new Error('script source contains </script');

const out = `<title>Quartus</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap">
<style>
${css}
</style>
${body}
<script>
${js}
</script>
`;
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'quartus-artifact.html'), out);
console.log('wrote dist/quartus-artifact.html', (out.length / 1024).toFixed(0) + ' KB,', scripts.length, 'scripts');
