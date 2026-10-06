#!/bin/sh
# Builds the playable Brightwater page from the engine and episode scripts.
cd "$(dirname "$0")"
python3 - <<'PY'
import glob
e=open('src/engine.html').read()
eps=''.join(open(f).read()+'\n' for f in sorted(glob.glob('src/s*e*.js')))
open('brightwater.html','w').write(e.replace('/*@EPISODES@*/',eps))
PY
