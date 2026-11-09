# The Lie We Told

An interactive prestige-TV college drama. Hollis University, fall 2005.

**Play:** https://claude.ai/artifact/SBENzwasZt31RADJQQChRA

## For the player
- Your save is stored with the game page (your account) and in your browser, and updates after every choice. **Save → Move your save** gives you a code to carry it to another browser or account.
- When you finish an episode, open a Claude Code session on this repository (branch `claude/gifted-cori-ldbw2e`) and say **"next episode."**
- Please don't open `SPOILERS-showrunner-only/`. It holds the writers' room's secrets.

## For the room (any future session)
1. Read `room/writers-room.md` (process), `room/episode-format.md` (the `.ep` spec) and `canon/series-canon.md` (binding canon).
2. Read the player's save: `ArtifactData get` on the artifact above, `collection: saves`, `doc_id: main`. `completed.<id>` holds `log` (the choices in plain text), `flags`, `echoes`, `mixes` and `polaroids`. Copy it to `SPOILERS-showrunner-only/saves/after-<id>.json`.
3. Run the room (showrunner memo in `SPOILERS-showrunner-only/memos/after-<prev>.md`). Draft into `src/<id>/NN-*.ep`; compile with `node tools/build.mjs <id>`.
4. Put the previous episode's "Next Time On" lines (`SPOILERS-showrunner-only/episodes/<prev>-teaser.txt`) into the new episode's `@teaser` lines.
5. Publish: Artifact publish with `url` set to the link above, `file_path: the-lie-we-told/engine/index.html`, and `files` including every `episodes/*.json`. Omit `capabilities` so the save rules carry forward.

## Layout
- `engine/index.html`: the game page
- `episodes/`: compiled episodes + `index.json`
- `src/`: episode sources (`.ep`)
- `tools/`: compiler/validator
- `canon/`: spoiler-free canon
- `room/`: process, format and period research
- `SPOILERS-showrunner-only/`: bible, season plans, arcs, knowledge ledger, voice bible, beat sheets, memos
