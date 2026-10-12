---
name: whitlock-next-episode
description: Run the Whitlock writers' room to produce the next pre-written episode of the Whitlock branching drama from the player's recorded choices. Use when the user says "Write the next Whitlock episode", asks for the next Whitlock episode, or pastes "Whitlock choices:" JSON.
---

# Write the next Whitlock episode

Whitlock is a branching narrative game the user plays as a published artifact:
**https://claude.ai/artifact/Ja3b8MQsbjm8Lx5uP71csv**. The page has no live AI. It plays pre-written episodes from `whitlock/episodes/` and records every choice in the artifact's database. Your job is to run the writers' room (subagents) so the next episode follows from those choices, then publish it.

Read `whitlock/writers-room/PROCESS.md` and `whitlock/writers-room/CANON.md` before starting.

## The one rule: no spoilers in the main conversation

The user reads this conversation and must not learn the secrets. The bible, season plans, episode plans and ledger live in the encoded vault (`whitlock/writers-room/vault.py`).

- In the main thread, never run `vault.py get`, never print episode file contents, and never summarize upcoming plot.
- All vault work happens inside subagents.
- Tell every subagent that its final reply must be spoiler-free: what it did, sizes and counts, problems. No plot, no arc names, no hints about the endgame.
- Your messages to the user stay at the level of "Episode 3 is written, validated and published."

## Steps

1. **Find the episode just played.**
   - Load `ArtifactData` (ToolSearch `select:ArtifactData`). Read `progress/main`, then `plays/<id>` for every id in `progress.done`, using the artifact URL above.
   - The newest finished episode is the last id in `done`. The next episode is `progress.cur`.
   - If the user pasted `Whitlock choices: {...}`, use that instead.
   - If the newest finished episode has no recorded play, stop. Tell the user the choices aren't saved yet, and that they can use **Copy my choices** in Extras.
   - Save each play as `whitlock/writers-room/played/<id>.json`. This is not secret, but don't echo it.

2. **Script coordinator** (Agent, model `sonnet`). Inputs: the played episode file, `played/<id>.json`, and the vault `ledger`.
   - Update `ledger` with exactly what happened on the player's path:
     - cast (introduced, metCal, where things stand)
     - FACTS (who knows what, including lies and cutaway knowledge Cal lacks)
     - flags set
     - phone replies Cal sent
     - threads, places, the timeline, and the list of episodes
   - Write a 150–250 word spoiler-safe recap of the episode as played, plus 4–6 "previously" lines. Put both in `vault` entry `recap-<id>`; they're consumed by the next steps.

3. **Showrunner** (Agent, model `opus`).
   - Update `bible`: arc progress and status, clues actually planted on the player's path, newly closed arcs with an 80–160 word reveal and the clue list, and private notes on how the choices bent the relationships and endgame. The endgame stays reachable.
   - Revise the season outline (`season-NN`).
   - If the episode just played was episode 10, first compact the ledger's facts and timeline into a season summary, then break the next season (`season-NN+1`).
   - Write `plan-<next id>` per PROCESS.md: nodes, forks, flags, conditional callbacks, cutaways, castNew, clues, phone threads.

4. **Head writer** (Agent, model `opus`).
   - Write `whitlock/episodes/<next id>.json` from the plan, the bible, the ledger, CANON.md standards and the PROCESS.md format.
   - Fill `previously` from `recap-<id>`, and `cast` and `calNow` from the ledger.
   - Write it act by act into scratch files and merge with a script, so no single write is too large.
   - Run `node whitlock/writers-room/validate.mjs <file>` and fix until it reports PASS.

5. **Continuity editor** (Agent, model `sonnet`).
   - Audit the episode against the ledger, bible and the earlier played episodes:
     - knowledge leaks (someone saying what they can't know; Cal knowing cutaway content)
     - contradictions with established facts, flags or earlier choices
     - characters introduced who shouldn't be
     - anyone under 18 in sexual content
     - conditional blocks that test flags not yet set on every path
     - branch logic
   - Fix in place and re-run the validator to PASS. Report counts only.

6. **Index.** With a short script (don't print story text), update `whitlock/episodes/index.json`:
   - Append the new episode `{id, season, ep, title, logline, file}`.
   - Set `recap` on the episode just played, from `recap-<id>`.
   - Add a season title to `seasons` when a season starts. The showrunner subagent can supply it, since the season title isn't a spoiler.
   - Append newly closed arcs to `unlocked` as `{title, scope, closedAt, reveal, clues}`. Have the showrunner write these into a small file for you to merge.

7. **Publish.**
   - In a new session, first read the artifact (`Artifact` action `read`, url above).
   - Publish with `url` = the artifact URL, `file_path` = `whitlock/whitlock.html`, and `files` = `{"episodes/index.json": "whitlock/episodes/index.json", "episodes/<next id>.json": "whitlock/episodes/<next id>.json"}`.
   - Omit `capabilities` so the stored `{db: {}}` is kept.
   - The `files` sources resolve against the current working directory. If the shell has moved into `whitlock/`, use `episodes/...` instead of `whitlock/episodes/...`.

8. **Commit and push** to the session's branch (vault, played, episodes, index). Then tell the user in a sentence or two that the next episode is up, with the link, and nothing about its contents.
