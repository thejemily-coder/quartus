"""Count recurring prose tics in an episode (all branches) against the previous one.
Usage: python3 tools/tics.py s2e03 [s2e02]
Feeds the Line/Tic reviewer hard numbers; the TIC REGISTRY in writers/room.md stays the authority."""
import json, re, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PATTERNS = {
    'counted words/sentences ("three words")': r"\b(one|two|three|four|five|six|seven|eight|nine|ten)\s+(word|words|sentence|sentences|syllable|syllables)\b",
    'reversal "It isn\'t X. It\'s Y"': r"\b(It|That|This)\s+(isn['’]t|wasn['’]t|is not|was not)\b[^.?!]{0,80}[.?!]\s+(It|That|This)['’]s\b",
    '"the way" comparisons': r"\bthe way (you|a|an|people|men|women|somebody|someone|he|she|they)\b",
    'trailing ", which"': r",\s+which\b[^.?!]{0,60}[.?!]",
    '"whole"': r"\bwhole\b",
    '"before X can"': r"\bbefore (he|she|they|anybody|anyone|either|it) can\b",
    '"out loud"': r"\bout loud\b",
    '"nobody/no one" clauses': r"\b(nobody|no one)\b",
    '"holds on"/"keeps it there"': r"\b(holds on|keeps it there)\b",
    'laughter overflow ("laughs"/"laughing")': r"\blaugh(s|ing|ed)?\b",
    '"a while"': r"\ba while\b",
    '"without looking"': r"\bwithout looking\b",
    'hands flat': r"\bhands? flat\b",
    '"in the cold"': r"\bin the cold\b",
}


def text_of(ep):
    out = []
    def walk(x):
        if isinstance(x, str): out.append(x)
        elif isinstance(x, list): [walk(i) for i in x]
        elif isinstance(x, dict):
            for k, v in x.items():
                if k not in ('if', 'goto', 'next', 'set', 'id', 'start', 'type', 'duel'): walk(v)
    walk(ep.get('scenes', {}))
    return '\n'.join(out)


def counts(epname):
    p = os.path.join(ROOT, 'episodes', f'{epname}.json')
    if not os.path.exists(p):
        return None, 0
    t = text_of(json.load(open(p)))
    words = len(t.split())
    return {k: len(re.findall(v, t, re.I)) for k, v in PATTERNS.items()}, words


def main():
    cur = sys.argv[1]
    prev = sys.argv[2] if len(sys.argv) > 2 else None
    c, cw = counts(cur)
    if c is None:
        sys.exit(f'no episodes/{cur}.json')
    p, pw = counts(prev) if prev else (None, 0)
    print(f'{cur}: {cw} words in file (all branches)' + (f' | {prev}: {pw}' if p else ''))
    for k in PATTERNS:
        per10k = c[k] * 10000 / max(cw, 1)
        line = f'  {k:45s} {c[k]:4d}  ({per10k:5.1f}/10k)'
        if p:
            line += f'   prev {p[k]:4d} ({p[k] * 10000 / max(pw, 1):5.1f}/10k)'
        print(line)


if __name__ == '__main__':
    main()
