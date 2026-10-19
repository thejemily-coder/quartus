# The Hard Saying

A choice-driven prestige-TV college drama, played in episodes. Fall 2009, California State University at Marisol.

**Player warning:** `writers/bible.md`, `writers/outlines/`, `writers/continuity.md`, `writers/knowledge.md` and `drafts/`
and `episodes/` contain hidden canon and unplayed story. Reading them spoils the show. `writers/brief.md` (your own
decisions), `writers/room.md` and `writers/schema.md` are safe.

Game artifact: https://claude.ai/artifact/3MQUVCyw8UxRfXjX7fr9bH

## Making the next episode (for Claude)
1. **Read the save.** `ArtifactData get` on doc `saves/main` of the artifact above (the page writes the whole game state
   to `state`, with a readable `summary`), plus `ArtifactData list` on collection `saves/main/log` (one document per
   finished episode with every choice). Write both to `saves/after-<ep>.json` (e.g. `saves/after-s1e01.json`).
   If the save is empty, ask the player to open the game once while signed in, or to paste a save code from the
   in-game Menu.
2. **Notes session.** A short AskUserQuestion round before every episode (pace of the romance, characters they want more
   of, places to see, tone). Never reveal or hint at hidden canon in the questions.
3. **Run the writers' room**: Workflow with `scriptPath: hard-saying/writers/next-episode.workflow.js` and args
   `{ep, id, season, episode, prev, save, notes}`. Roles and models are in `writers/room.md`.
4. **Build and test**: `python3 tools/build.py`, then a random-playthrough smoke test of every episode with a headless
   browser (no console errors, every path reaches the end card).
5. **Publish** `game/play.html` to the same artifact URL (omit `capabilities` on redeploy to keep the db rules), then
   commit and push.

## Files
- `game/engine.html`: the player (template); `game/play.html`: built page with every episode baked in.
- `tools/validate.py`, `tools/assemble.py`, `tools/build.py`.
- Save: the artifact's db, doc `saves/main` (owner-only read/write), logs in `saves/main/log/<EPISODE_ID>`; a copy
  lives in the browser's localStorage, and the Menu offers a backup save code.
