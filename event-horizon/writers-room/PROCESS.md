# Episode Production Pipeline (SEALED)

Each episode is written **after** the player finishes the previous one, against their real save. Follow these steps in order.

## 0. Trigger
The player says they finished episode N, or asks for N+1.

## 1. Pull the save
- Use `ArtifactData` `get` on `playthrough/state` (the full current state) and `playthrough/ep_<id>` (the finished episode's summary) on the published game artifact. The artifact URL is in `../game/ARTIFACT_URL.txt`.
- Save a copy to `canon/episodes/<id>.save.json`.

## 2. Update canon
- Write `canon/episodes/<id>.md`: a factual account of what happened in *this* playthrough. Cover choices, roll outcomes that mattered, who learned what, bond changes, injuries, money, grades, flags, and hidden stats.
- Update `canon/ledger.json`: character states, the knowledge graph (merged from the save's `facts`), open threads (new, advanced, closed), timeline.
- If the save diverged from `SEASON_01.md` (or a later season plan), revise the plan *forward* to absorb it. Never retcon what the player did.

## 3. Write episode N+1
- The writer agent (strongest available model) reads the bible, CHARACTERS, MECHANICS, the season plan, the ledger, and the last two episode canon files.
- It writes `game/episodes/sXXeYY.js` in the authoring format. It should open with a "Previously on" built from the save's `recap` entries. The engine generates this automatically, but the episode may override it with `previously: g => [...]`.
- Length varies by episode type. A bottle episode can be short, a premiere or finale long.

## 4. QA (run in parallel, each its own agent)
1. **Continuity & knowledge:** every reference to a past event matches the save. **No character says or reacts to a fact they aren't on** (check `knowledge` in the ledger). Dates, injuries, money, and bond states are consistent.
2. **Voice & character:** every line checked against CHARACTERS.md. Growth is consistent with history.
3. **Mechanics & balance:** run `node game/tools/check.js <ep>`. It must find no dead ends, no unreachable scenes, no missing targets, and odds within sane bands (a mandatory-path check should have ≥ 35% success or a non-punishing fail branch). Effects use valid IDs.
4. **Prose & craft:** line edit, scene function, pacing, jokes landing, grief landing. Uncut where it should be.

Fix everything flagged, then re-run check.js.

## 5. Build & publish
- `node game/tools/build.js` → `game/dist/index.html` (the engine plus all episodes inlined).
- Republish to the same artifact URL (omit `capabilities` to keep them).
- Commit and push.

## 6. Hand off
Tell the player the episode is live. **Never** mention secret arcs.
