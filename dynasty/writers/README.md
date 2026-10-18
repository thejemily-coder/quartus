# Writers' room — how each episode gets made

**Player warning:** everything in `writers/` except this file and `brief.md` is hidden canon (bible, outlines, continuity). Reading it spoils the show.

Game artifact: https://claude.ai/artifact/XiHGH4dAt1RmoaATwot4QT (save lives in its db at `saves/<player id>`; only the owner can read it).

## Making the next episode (for Claude)
1. Read the save: `ArtifactData list` on collection `saves` for the artifact above. Write it to `saves/after-<prev>.json`
   (e.g. `saves/after-s1e01.json`). The picked pitch is `pitches["S1E01"]`.
2. Offer the player the pitch menu only if they haven't picked one in-game; collect optional notes.
3. Run the workflow `writers/next-episode.workflow.js` with args
   `{ep, id, season, episode, prev, save, pitch, notes}`. Agents and models:
   - Showrunner (opus): reads the save, revises the bible for the path taken, plans the episode.
   - Episode architect (opus): scene blueprint, choice map, act split, header JSON.
   - Staff writers ×3 (opus, parallel): one act each.
   - Assembler (haiku): merge + validate (`tools/assemble.py`).
   - Reviewers (parallel): continuity (sonnet), voice & tone (opus), line edit (sonnet), game mechanics (sonnet), standards (haiku).
   - Head writer (opus): applies notes, validates, updates `continuity.md`.
4. `python3 tools/build.py <ep>` → publish `game/play.html` to the same artifact URL (keep capabilities).
5. Smoke-test with random playthroughs before publishing; commit.

## Files
- `brief.md` — the player's binding creative brief.
- `schema.md` — episode JSON format. `tools/validate.py` enforces it.
- `bible.md`, `outlines/`, `continuity.md` — hidden canon.
- `episodes/*.json` — finished episodes. `game/engine.html` — the player; `game/play.html` — built page.
