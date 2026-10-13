# Converts `text: \`...${g...}...\`` into `text: g => \`...\`` wherever a template uses g but isn't a function yet.
import re, glob, sys
for p in sorted(glob.glob(sys.argv[1] if len(sys.argv) > 1 else 'episodes/*.js')):
    s = open(p).read(); out = []; i = 0; n = 0
    while True:
        j = s.find("text: `", i)
        if j < 0: out.append(s[i:]); break
        k = s.find("`", j + 7)
        body = s[j + 7:k]
        out.append(s[i:j])
        if re.search(r'\$\{[^}]*\bg\.', body): out.append("text: g => `"); n += 1
        else: out.append("text: `")
        out.append(body + "`"); i = k + 1
    if n: open(p, 'w').write(''.join(out)); print(p, 'converted', n)
