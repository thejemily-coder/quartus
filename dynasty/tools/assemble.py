#!/usr/bin/env python3
"""Merge drafts/<ep>_header.json + drafts/<ep>_act*.json into episodes/<ep>.json, then validate.
Usage (from dynasty/): python3 tools/assemble.py s1e01"""
import glob, json, os, subprocess, sys

ep = sys.argv[1]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
header = json.load(open(f'{root}/drafts/{ep}_header.json', encoding='utf-8'))
scenes = {}
for f in sorted(glob.glob(f'{root}/drafts/{ep}_act*.json')):
    part = json.load(open(f, encoding='utf-8'))
    dup = set(scenes) & set(part['scenes'])
    if dup:
        sys.exit(f'duplicate scene ids in {f}: {sorted(dup)}')
    scenes.update(part['scenes'])
header['scenes'] = dict(sorted(scenes.items()))
out = f'{root}/episodes/{ep}.json'
json.dump(header, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('wrote', out)
sys.exit(subprocess.call([sys.executable, f'{root}/tools/validate.py', out]))
