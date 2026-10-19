#!/usr/bin/env python3
"""Bake every finished episode into the game page.
Usage (from hard-saying/): python3 tools/build.py
Writes game/play.html — the file published as the artifact."""
import glob, json, os, re

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def order(path):
    m = re.search(r's(\d+)e(\d+)\.json$', path)
    return (int(m.group(1)), int(m.group(2)))


episodes = [json.load(open(f, encoding='utf-8')) for f in sorted(glob.glob(f'{root}/episodes/s*e*.json'), key=order)]
if not episodes:
    raise SystemExit('no episodes')


def js(o):
    return json.dumps(o, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')


html = open(f'{root}/game/engine.html', encoding='utf-8').read()
html = html.replace('__EPISODES__', js(episodes))
out = f'{root}/game/play.html'
open(out, 'w', encoding='utf-8').write(html)
print('wrote', out, f'{len(html) // 1024} KB,', len(episodes), 'episode(s):', ', '.join(e['id'] for e in episodes))
