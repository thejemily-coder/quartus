# The Hard Saying

A choice-driven prestige-TV college drama, played in episodes. Fall 2009, California State University at Marisol.

**Player warning:** `writers/bible.md`, `writers/outlines/`, `writers/continuity.md`, `writers/knowledge.md`, `writers/nola_ledger.md` and `drafts/`
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

## Production cadence (player directive, 2026-10-28)
**Strictly one episode at a time** from S2E09 on: no pre-production while the player is playing. When the player
finishes an episode: read the save, run the notes session, then run `writers/next-episode.workflow.js` once for the
next episode (plan → pack → blueprint → drafts → checks → review → revision), build, test, publish, commit. (S2E08 was
the last pre-produced episode; it is finalized with `finalize.workflow.js`.)

## Pre-production (retired from S2E09; kept for reference)
- `writers/preprod.workflow.js` with args `{prevPlayed, lastSave, eps:[{ep,id,season,episode},...], notes}`: plans and
  researches each listed episode (sequentially) and blueprints + drafts the first one save-agnostically. No assembly or
  review.
- When the player finishes the episode before, read the save, run the notes session, then
  `writers/finalize.workflow.js` with `{ep,id,season,episode,prev,save,notes}`: save-delta patch, assembly, the review
  board, revision. Then build, test, publish, commit.

## Save format
- The main doc `saves/main` holds the state minus finished-episode logs and the restart checkpoint (the db caps a
  document at 256 KiB). Logs: `saves/main/log/<EP>`; checkpoint: `saves/main/aux/checkpoint`. When reading the save,
  merge the log docs into `logs` (state.split == 2).

## Pipeline versions
- **v2 (current, 2026-10-23):** per-episode context pack; Opus only for planning, blueprint, romance writing,
  knowledge/voice review and the head writer; Sonnet/Haiku elsewhere; scripted checks (`tools/sim.js`, `tools/tics.py`).
- **v1 (archived):** `writers/pipeline-v1/` (every agent reads the full canon; most roles on Opus). Restore with
  `cp writers/pipeline-v1/*.workflow.js writers/` if episode quality dips.
- Smoke test by hand: `python3 tools/build.py && node tools/sim.js <EPID> saves/after-<prev>.json`.

## Files
- `game/engine.html`: the player (template); `game/play.html`: built page with every episode baked in.
- `tools/validate.py`, `tools/assemble.py`, `tools/build.py`.
- Save: the artifact's db, doc `saves/main` (owner-only read/write), logs in `saves/main/log/<EPISODE_ID>`; a copy
  lives in the browser's localStorage, and the Menu offers a backup save code.

## Shared play and the planned fork (player directives, 2026-10-28)
- **Shared save:** db rule `saves` read/write = `interact`, so anyone the owner shares the page with as **Contributor**
  plays the same save (one shared Jack; take turns, never simultaneously). Viewers cannot read it.
- **Alternate timeline fork ("Jack does NOT go to New Orleans"):** when the player finishes **S2E09**, before S2E10 is
  written: create a new private repo on the player's GitHub (e.g. `thejemily-coder/hard-saying-alt`) holding a full
  copy of `hard-saying/` (bible, brief, ledgers, outlines, episodes, engine, tools, workflows, saves through
  after-s2e09); add a top-of-brief fork directive ("this timeline: Jack does not go to New Orleans; all hard rules
  stand"); publish a separate artifact seeded from after-s2e09; start a separate Claude session on the new repo with
  a handoff prompt. The main game continues here unchanged.
