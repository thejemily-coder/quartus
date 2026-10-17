#!/usr/bin/env python3
"""Bake an episode into the game page. Usage (from dynasty/): python3 tools/build.py s1e01
Writes game/play.html — the file published as the artifact. Season list comes from every episodes/*.json present."""
import glob, json, os, sys

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ep_id = sys.argv[1]
ep = json.load(open(f'{root}/episodes/{ep_id}.json', encoding='utf-8'))
series = {'showTitle': ep['showTitle'], 'episodes': []}
for f in sorted(glob.glob(f'{root}/episodes/s*e*.json')):
    e = json.load(open(f, encoding='utf-8'))
    series['episodes'].append({'id': e['id'], 'title': e['title']})


def js(o):
    return json.dumps(o, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')


html = open(f'{root}/game/engine.html', encoding='utf-8').read()
html = html.replace('__SHOW_TITLE__', ep['showTitle']).replace('__SERIES__', js(series)).replace('__EPISODE__', js(ep))
out = f'{root}/game/play.html'
open(out, 'w', encoding='utf-8').write(html)
print('wrote', out, f'{len(html) // 1024} KB')
