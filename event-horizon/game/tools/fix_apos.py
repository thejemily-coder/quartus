"""Escape contraction apostrophes (letter'letter) so they can't terminate single-quoted strings.
Harmless inside template literals, where \\' renders as '."""
import re, sys
for p in sys.argv[1:]:
    t = open(p).read()
    n = re.sub(r"(?<=[A-Za-z])'(?=[A-Za-z])", r"\\'", t)
    if n != t:
        open(p, 'w').write(n); print(p, 'escaped', len(re.findall(r"(?<=[A-Za-z])'(?=[A-Za-z])", t)))
