#!/usr/bin/env python3
"""Validate an episode JSON file against writers/schema.md.
Usage: python3 tools/validate.py episodes/s1e01.json"""
import json, re, sys

ATOM = re.compile(r'^(!?)([a-zA-Z_][\w.]*)\s*(?:(==|!=|>=|<=|>|<)\s*(.+))?$')
REL_AXES = {'trust', 'warmth', 'heat', 'friction'}
SOUL = {'grace', 'honesty', 'restraint'}
TRAITS = {'wit', 'sincerity', 'charm', 'candor', 'reckless', 'control'}
DUEL_AXES = {'rigor', 'wit', 'heart', 'lena'}
INSERTS = {'sms': ('from', 'text'), 'fb': ('name', 'text'), 'aim': ('name', 'text'), 'doc': ('text',), 'break': ()}
JOURNAL_KINDS = {'person', 'clue', 'note'}
COUNT_TIC = re.compile(r'\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+) (words?|syllables?)\b', re.I)


def check_var(name, where, ep, errs):
    parts = name.split('.')
    head = parts[0]
    if head == 'rel':
        if len(parts) != 3 or parts[2] not in REL_AXES:
            errs.append(f'{where}: bad rel var {name!r} (rel.<castId>.<trust|warmth|heat|friction>)')
        elif parts[1] not in ep['_tracked']:
            errs.append(f'{where}: rel var {name!r} uses untracked cast id')
    elif head == 'soul':
        if len(parts) != 2 or parts[1] not in SOUL:
            errs.append(f'{where}: bad soul var {name!r}')
    elif head == 'trait':
        if len(parts) != 2 or parts[1] not in TRAITS:
            errs.append(f'{where}: bad trait var {name!r}')
    elif head == 'resolve':
        if len(parts) != 2 or parts[1] not in ('jack', 'lena'):
            errs.append(f'{where}: bad resolve var {name!r}')
    elif head == 'duel':
        opp = ep.get('duels', {}).get(parts[1], {}).get('opponent') if len(parts) == 3 else None
        if len(parts) != 3 or (parts[2] not in DUEL_AXES and parts[2] != opp):
            errs.append(f'{where}: bad duel var {name!r} (axis must be rigor|wit|heart|lena or the duel\'s opponent id)')
        elif parts[1] not in ep.get('duels', {}):
            ep['_ext_duels'].add(parts[1])
    elif '.' in name:
        errs.append(f'{where}: unknown dotted var {name!r}')


def check_expr(expr, where, ep, errs):
    for disj in expr.split('||'):
        for atom in disj.split('&&'):
            a = atom.strip()
            m = ATOM.match(a)
            if not m:
                errs.append(f'{where}: bad expression atom {a!r} in {expr!r}')
            else:
                check_var(m.group(2), where, ep, errs)


def check_set(s, where, ep, errs):
    if not isinstance(s, dict):
        errs.append(f'{where}: set must be an object')
        return
    for k, v in s.items():
        check_var(k, where, ep, errs)
        if isinstance(v, str) and not re.match(r'^[+-]\d+$', v) and (k.startswith(('rel.', 'soul.', 'trait.', 'resolve.', 'duel.'))):
            errs.append(f'{where}: {k} must be a number or "+N"/"-N", got {v!r}')


def text_of(item):
    if isinstance(item, str):
        return [item]
    if isinstance(item, dict):
        return [item.get(k, '') for k in ('text', 'else', 'title') if isinstance(item.get(k), str)]
    return []


def check_body(items, where, ep, errs, warns, counter):
    for b in items:
        if isinstance(b, str):
            pass
        elif isinstance(b, dict):
            t = b.get('type')
            if t is None:
                if 'text' not in b or 'if' not in b:
                    errs.append(f'{where}: conditional body item needs if+text')
            elif t not in INSERTS:
                errs.append(f'{where}: unknown insert type {t!r}')
            else:
                for req in INSERTS[t]:
                    if req not in b:
                        errs.append(f'{where}: {t} insert missing {req!r}')
            if 'if' in b:
                check_expr(b['if'], where, ep, errs)
        else:
            errs.append(f'{where}: body item must be string or object')
            continue
        for t in text_of(b):
            counter[0] += len(t.split())
            for m in COUNT_TIC.finditer(t):
                warns.append(f'{where}: word-count tic {m.group(0)!r} — verify it is literally correct or cut it')
            if '"' in t:
                warns.append(f'{where}: straight double quote in prose (use typographic quotes)')


def check_journal(js, where, ep, errs):
    for j in js or []:
        if j.get('kind') not in JOURNAL_KINDS:
            errs.append(f'{where}: journal kind must be one of {sorted(JOURNAL_KINDS)}')
        if not j.get('title') or not j.get('text'):
            errs.append(f'{where}: journal entry needs title and text')
        if 'if' in j:
            check_expr(j['if'], where, ep, errs)


def main(path):
    errs, warns = [], []
    try:
        ep = json.load(open(path, encoding='utf-8'))
    except json.JSONDecodeError as e:
        print(f'INVALID JSON: {e}')
        return 1
    for k in ('id', 'season', 'episode', 'title', 'showTitle', 'dates', 'logline', 'cast', 'start', 'scenes', 'endCard'):
        if k not in ep:
            errs.append(f'missing top-level key {k}')
    ep['_tracked'] = {c['id'] for c in ep.get('cast', []) if c.get('tracked')}
    ep['_ext_duels'] = set()
    scenes = ep.get('scenes', {})
    duels = ep.get('duels', {})
    for h in (ep.get('seasonRecap') or {}).get('highlights', []):
        if not h.get('text'):
            errs.append('seasonRecap highlight missing text')
        if h.get('if'):
            check_expr(h['if'], 'seasonRecap', ep, errs)
    for p in ep.get('previously', []):
        if 'if' in p:
            check_expr(p['if'], 'previously', ep, errs)
    if ep.get('start') not in scenes:
        errs.append(f'start {ep.get("start")!r} is not a scene')
    reached, counter, ends, choices_n, keys, cues = set(), [0], 0, 0, 0, 0
    duel_scenes = {}
    for sid, sc in scenes.items():
        w = f'scene {sid}'
        if not sc.get('slug'):
            errs.append(f'{w}: missing slug')
        if sc.get('duel'):
            if sc['duel'] not in duels:
                errs.append(f'{w}: duel {sc["duel"]!r} not defined in top-level duels')
            duel_scenes.setdefault(sc['duel'], []).append(sid)
        if 'set' in sc:
            check_set(sc['set'], w, ep, errs)
        check_body(sc.get('body', []), w, ep, errs, warns, counter)
        check_journal(sc.get('journal'), w, ep, errs)
        ch = sc.get('choices') or []
        if not ch and not sc.get('next') and not sc.get('end'):
            errs.append(f'{w}: needs choices, next, or end')
        if ch and sc.get('next'):
            warns.append(f'{w}: has both choices and next; next is ignored')
        if sc.get('end'):
            ends += 1
        if sc.get('next') and not ch:
            if sc['next'] not in scenes:
                errs.append(f'{w}: next {sc["next"]!r} missing')
            reached.add(sc['next'])
        for i, c in enumerate(ch):
            choices_n += 1
            cw = f'{w} choice {i}'
            if not c.get('text'):
                errs.append(f'{cw}: missing text')
            g = c.get('goto')
            if g not in scenes:
                errs.append(f'{cw}: goto {g!r} missing')
            reached.add(g)
            if 'if' in c:
                check_expr(c['if'], cw, ep, errs)
            if 'set' in c:
                check_set(c['set'], cw, ep, errs)
            if c.get('key'):
                keys += 1
            if c.get('cue'):
                cues += 1
            check_body(c.get('response', []), cw, ep, errs, warns, counter)
            check_journal(c.get('journal'), cw, ep, errs)
        if ch and all('if' in c for c in ch):
            errs.append(f'{w}: every choice is conditional — at least one must be always available')
    unreached = set(scenes) - reached - {ep.get('start')}
    if unreached:
        errs.append(f'unreachable scenes: {sorted(unreached)}')
    if ends < 1:
        errs.append('no scene has "end": true')
    for d in duels:
        if d not in duel_scenes:
            warns.append(f'duel {d!r} defined but no scene uses it')
    if not ep.get('endCard', {}).get('tag'):
        warns.append('endCard has no tag')
    if cues > 10:
        warns.append(f'{cues} whispers — the brief asks for restraint (about 5–8)')
    for e in errs:
        print('ERROR', e)
    for wv in warns:
        print('WARN ', wv)
    print(f'{len(scenes)} scenes, ~{counter[0]} words, {choices_n} choices, {keys} key choices, {cues} whispers, duels: {", ".join(f"{k}({len(v)})" for k, v in duel_scenes.items()) or "none"}')
    print('OK' if not errs else f'{len(errs)} error(s)')
    return 1 if errs else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))
