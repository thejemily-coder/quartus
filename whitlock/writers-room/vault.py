#!/usr/bin/env python3
"""Spoiler vault for the Whitlock writers' room.

Entries are zlib-compressed and base64-encoded so the secret bible can't be read
at a glance in the repo. Usage:
  vault.py list
  vault.py get <name>
  vault.py put <name> <file>   (encodes the file into the vault, then deletes it)
"""
import base64, os, sys, zlib

VAULT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vault")

def path(name):
    if not name.replace("-", "").replace("_", "").isalnum():
        sys.exit("bad name")
    return os.path.join(VAULT, name + ".vault")

def main(argv):
    if len(argv) < 2 or argv[1] not in ("list", "get", "put"):
        sys.exit(__doc__)
    os.makedirs(VAULT, exist_ok=True)
    if argv[1] == "list":
        for f in sorted(os.listdir(VAULT)):
            if f.endswith(".vault"):
                print(f[:-6], os.path.getsize(os.path.join(VAULT, f)), "bytes")
    elif argv[1] == "get":
        with open(path(argv[2]), "rb") as f:
            sys.stdout.write(zlib.decompress(base64.b64decode(f.read())).decode("utf-8"))
    else:
        src = argv[3]
        with open(src, "rb") as f:
            data = f.read()
        with open(path(argv[2]), "wb") as f:
            f.write(base64.b64encode(zlib.compress(data, 9)))
        os.remove(src)
        print("stored", argv[2], len(data), "bytes")

if __name__ == "__main__":
    main(sys.argv)
