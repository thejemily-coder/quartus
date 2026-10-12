# Whitlock writers' room: how an episode is made

The game page (`whitlock/whitlock.html`) has no live AI. It plays finished, pre-written branching episodes from `whitlock/episodes/`, and records every choice the player makes to the artifact's database. Between episodes the writers' room (subagents) reads those choices and writes the next episode to follow from them.

Read `CANON.md` first. Everything there is known to the player and is binding.

## The vault (secrets)

The player must never see the secret bible, the season plans, or the ledger. They live encoded in `writers-room/vault/`. Use only:

```
python3 whitlock/writers-room/vault.py list
python3 whitlock/writers-room/vault.py get <name>            # prints decoded text (only inside a subagent)
python3 whitlock/writers-room/vault.py put <name> <file>     # encodes <file> into the vault and deletes <file>
```

Vault entries:

| Name | Owner | Contents |
|---|---|---|
| `bible` | Showrunner | Secret series bible: endgame romance, held-back relationships, love interests, every arc (truth, who knows, planned clues, clues planted, status, reveal window), new cast not yet introduced, private notes on every character, motifs, Cal's arc |
| `season-NN` | Showrunner | Season outline: title, medium arc, 10 episode outlines (revised after every episode) |
| `plan-sNNeNN` | Showrunner | The beat plan for one episode before it's written |
| `ledger` | Script coordinator | Canon ledger: cast (introduced, met Cal, where things stand), the FACTS list (who knows what), open threads, timeline, flags set so far, places |

Never print vault contents to the main conversation. Subagent reports to the main thread must be spoiler-free: say what was done and any problems, without plot details, arc names, or who the endgame is.

Write scratch files in the session scratchpad, never in the repo, and `put` them into the vault.

## Roles

| Agent | Model | Job |
|---|---|---|
| Showrunner | Opus | Owns the bible and season outlines. Plans each episode. Updates the arcs after each episode from the player's choices; closes arcs and writes their reveals |
| Head writer | Opus | Writes the whole branching episode from the plan |
| Continuity editor | Sonnet | Audits the episode against the ledger and bible (knowledge leaks, contradictions, intro limits, ages, branch logic), fixes it in place, runs the validator |
| Script coordinator | Sonnet | After the player plays, logs exactly what happened on their path into the ledger and writes the recap |

## Episode file format (`whitlock/episodes/sNNeNN.json`)

```json
{
  "id": "s01e01", "season": 1, "ep": 1,
  "title": "", "logline": "spoiler-light, one sentence",
  "date": "2026-08-24", "dateEnd": "2026-08-25",
  "previously": ["NORA: You don't get to be tired.", "Cal lies to Dev about the car."],
  "calNow": "2-3 spoiler-free sentences: who Cal is right now",
  "cast": [{"id":"nora","name":"Nora Castellanos","role":"","impression":"where things stand with Cal, as the audience has seen it","metCal":true}],
  "castNew": [{"id":"","name":"","role":"","impression":"first impression","metCal":true,"node":"n4"}],
  "places": ["Lowell House"],
  "music": {"song":"","artist":""},
  "titleAfter": "n1",
  "start": "n1",
  "nodes": { },
  "phone": [{"from":"priya","name":"Priya Raman","msgs":["u up"],"options":[{"id":"a","text":""},{"id":"b","text":""},{"id":"c","text":""}]}]
}
```

- `cast` lists everyone introduced before this episode, with an `impression` that reflects the player's choices so far. `castNew` lists people who appear for the first time in this episode, with the node where they first appear. Never reveal secrets in `impression`.
- `previously` replays moments from the previous episode **as the player actually played it**. It's empty for the pilot.
- `titleAfter` is the cold-open node. The title card appears after it.

### Nodes

```json
"n3": {
  "act": 1,
  "blocks": [ ...blocks... ],
  "choices": [
    {"id":"a","label":"Tell her the truth about the car","reaction":[...blocks...],"remember":"Nora will remember that.","set":{"e1_told_nora":true},"next":"n4"},
    {"id":"b","label":"...","reaction":[...],"next":"n5"}
  ]
}
"n4": {"blocks":[...], "next":"n6"}                          // no choice: the player taps Continue
"n5": {"route":[{"if":{"e1_told_nora":true},"next":"n6a"},{"next":"n6b"}]}   // invisible router
"n20": {"blocks":[...], "end": true}                        // the episode's final node (tag scene)
```

- `act` (1, 2 or 3) goes on the first node of each act. The page shows an act card when it changes.
- Choices: 2–4 (usually 3). `label` is 4–14 words, concrete, in the player's voice. `reaction` (50–150 words, up to 280 when pivotal) is the immediate consequence. `remember` is a soft signal used only for consequential choices. `set` records flags. A choice's `next` overrides the node's `next`.
- Any block or choice can carry `"if": {"flag": value}`. It shows only when every listed flag matches, and an unset flag counts as `false`. Only test flags set **earlier on every path to that point** or in earlier episodes.
- Flags persist across the whole series. Prefix them with the episode: `e1_`, `e2_`, … `s2e3_`.

### Blocks

Use the block format in `CANON.md` standards: `slug` (with `"cut":true` for a cutaway Cal isn't in), `a` (action), `line` (`who`, `name`, optional `paren`, `text`), `texts` (`thread`, `onCal`, `msgs`), `music`, `card`.

### Shape and length

- 3 acts. Every path through the episode has **15–20 choice points**. About 9,000–12,000 words per path (beats run 200–450 words before a choice).
- Branching should be real, not cosmetic:
  - **Local choices** whose reactions differ and then reconverge. This is the majority.
  - **Detours**: 2–4 choices per episode open a 1–4 node branch (a different scene, a different person, a different night) before reconverging.
  - **1–2 major forks** per episode that lead to substantially different second halves of an act, or different endings of the episode, and set flags the next episode must honor.
  - **Conditional blocks** so later scenes reflect earlier choices (someone mentions the lie Cal told; a hookup is awkward the morning after).
- 1–3 cutaways per episode. The audience sees them; Cal doesn't know what happened in them.
- `phone`: 2–4 threads after the episode ends, from people who'd have Cal's number. Each has 3 reply options in distinct tones. Replies are recorded and feed the next episode.
- At most 2 new major characters per episode. Build the cast gradually.

## Making the next episode (the loop)

1. **Read the choices.** Read the artifact database (`plays/sNNeNN`, `progress/main`). Save a copy to `writers-room/played/sNNeNN.json`. Choices aren't secret.
2. **Script coordinator** reads the played episode file plus the recorded path, logs exactly what happened on the player's path into `ledger` (cast, facts, who knows what, flags, threads, places, timeline), and writes a 150–250 word recap for the episode guide plus the `previously` lines.
3. **Showrunner** updates the `bible`: arc progress and status, clues actually planted on the player's path, closed arcs with reveals, and private notes on how choices bent the relationships and endgame. It revises the season outline, then writes `plan-sNNeNN` for the next episode. At a season's end it breaks the next season first.
4. **Head writer** writes the next episode from the plan to `whitlock/episodes/sNNeNN.json`. Write it in parts (one act at a time) and merge, to stay within output limits.
5. **Continuity editor** audits and fixes the episode, then runs `node whitlock/writers-room/validate.mjs whitlock/episodes/sNNeNN.json` until it passes.
6. **Index.** Update `whitlock/episodes/index.json`: add the new episode, add the finished episode's `recap`, and add any newly closed arcs to `unlocked`.
7. **Publish** the page with `files` for `episodes/index.json` and the new episode file to the same artifact URL. Then commit and push.
