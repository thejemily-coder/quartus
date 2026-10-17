#!/usr/bin/env python3
"""Validate an episode JSON file against writers/schema.md. Usage: validate.py episodes/s1e01.json"""
import json, re, sys

ATOM = re.compile(r'^(!?)([a-zA-Z_][\w.]*)\s*(?:(==|!=|>=|<=|>|<)\s*(.+))?$')


def check_expr(expr, where, errs):
    for disj in expr.split('||'):
        for atom in disj.split('&&'):
            a = atom.strip()
            if not ATOM.match(a):
                errs.append(f'{where}: bad expression atom {a!r} in {expr!r}')


def main(path):
    errs, warns = [], []
    try:
        ep = json.load(open(path, encoding='utf-8'))
    except json.JSONDecodeError as e:
        print(f'INVALID JSON: {e}')
        return 1
    for k in ('id', 'season', 'episode', 'title', 'showTitle', 'logline', 'cast', 'start', 'scenes', 'endCard'):
        if k not in ep:
            errs.append(f'missing top-level key {k}')
    scenes = ep.get('scenes', {})
    cast_ids = {c['id'] for c in ep.get('cast', []) if c.get('tracked')}
    all_cast = {c['id'] for c in ep.get('cast', [])}
    if ep.get('start') not in scenes:
        errs.append(f'start {ep.get("start")!r} is not a scene')
    reached, words = set(), 0
    ends = 0
    for sid, sc in scenes.items():
        w = f'scene {sid}'
        if 'slug' not in sc:
            errs.append(f'{w}: missing slug')
        for b in sc.get('body', []):
            if isinstance(b, str):
                words += len(b.split())
            elif isinstance(b, dict):
                if 'text' not in b or 'if' not in b:
                    errs.append(f'{w}: conditional body item needs if+text')
                else:
                    check_expr(b['if'], w, errs)
                    words += len(b['text'].split())
            else:
                errs.append(f'{w}: body item must be string or object')
        for d in sc.get('dossier', []):
            if d.get('id') not in all_cast:
                errs.append(f'{w}: dossier id {d.get("id")!r} not in cast')
        ch = sc.get('choices') or []
        if not ch and not sc.get('next') and not sc.get('end'):
            errs.append(f'{w}: needs choices, next, or end')
        if sc.get('end'):
            ends += 1
        if sc.get('next'):
            if sc['next'] not in scenes:
                errs.append(f'{w}: next {sc["next"]!r} missing')
            reached.add(sc['next'])
        for i, c in enumerate(ch):
            cw = f'{w} choice {i}'
            if not c.get('text'):
                errs.append(f'{cw}: missing text')
            g = c.get('goto')
            if g not in scenes:
                errs.append(f'{cw}: goto {g!r} missing')
            reached.add(g)
            if 'if' in c:
                check_expr(c['if'], cw, errs)
            for t in (c.get('tone') or {}):
                if t not in cast_ids:
                    errs.append(f'{cw}: tone id {t!r} not a tracked cast id')
            for r in c.get('response', []):
                if not isinstance(r, str):
                    errs.append(f'{cw}: response items must be strings')
                else:
                    words += len(r.split())
        if ch and all('if' in c for c in ch):
            warns.append(f'{w}: every choice is conditional — make sure at least one is always available')
    unreached = set(scenes) - reached - {ep.get('start')}
    if unreached:
        errs.append(f'unreachable scenes: {sorted(unreached)}')
    if ends < 1:
        errs.append('no scene has "end": true')
    pitches = ep.get('endCard', {}).get('pitches', [])
    if len(pitches) != 3:
        warns.append(f'endCard has {len(pitches)} pitches (expected 3)')
    for e in errs:
        print('ERROR', e)
    for wv in warns:
        print('WARN ', wv)
    print(f'{len(scenes)} scenes, ~{words} words, {sum(len(s.get("choices") or []) for s in scenes.values())} choices')
    print('OK' if not errs else f'{len(errs)} error(s)')
    return 1 if errs else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))
