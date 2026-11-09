# The Writers' Room — production process

Every episode of THE LIE WE TOLD is produced by a room of agents. Opus invents and writes, Sonnet checks and edits, Haiku assembles.

| Seat | Model | Job |
|---|---|---|
| Showrunner | Opus | Owns the hidden series bible (secrets, mystery truth, antagonist, arc registry). Reads the player's save, breaks the episode, takes the final pass, updates the knowledge ledger and flag registry, writes the memo for next time. |
| Story room | Opus | Beat sheet + node graph for the episode from the save, the bible and the season plan; splits the episode into writing parts. |
| Head writers | Opus | Draft the prose in `.ep` format, one part each (including intimate scenes). |
| Del-side writer | Opus | Writes Del's playable cutaways. |
| Period researcher | Sonnet + web | Verifies dates, songs, tech, news, slang, places for the episode's in-world dates. |
| Voice bible keeper | Sonnet | Maintains the voice bible. |
| Continuity editor | Sonnet | Who-knows-what-when-and-how; timeline; flags vs. prior episodes; hard lines. |
| Voice editors (2) | Sonnet | Dialogue against the voice bible, each owning a group of characters. |
| Period checker | Sonnet + web | Anachronism sweep. |
| Line editors | Sonnet | Apply notes and polish each part. |
| Assembly | Haiku | Compile with `tools/build.mjs`, fix markup errors, report stats. |

## Per-episode run
1. **Read the save.** `ArtifactData get saves/main` on the game artifact; the record lists each finished episode's choices (`path`), final flags, echoes, mixtape picks and polaroids. Write it to `SPOILERS-showrunner-only/saves/after-<id>.json`.
2. **Development:** showrunner memo + period research for the new in-world dates.
3. **Story room:** beat sheet and parts.
4. **Writing:** parts drafted in parallel into `src/<id>/NN-name.ep`.
5. **Assembly check:** compile; fix markup.
6. **Notes:** continuity, voice ×2, period, in parallel.
7. **Polish:** line editors apply notes per part.
8. **Showrunner pass:** final call; ledger, flag registry, arc registry, memo-for-next.
9. **Assembly:** compile, write the *previous* episode's "Next Time On" teaser lines into this episode's `@teaser`, publish `episodes/<id>.json` + `episodes/index.json` to the game artifact.

## Season boundaries
At the end of each season, the showrunner proposes a spoiler-free check-in with the player (tone, focus, more/less of whom), asked via AskUserQuestion before the next season is broken.

## Spoiler firewall
Everything under `SPOILERS-showrunner-only/` is for the room only. Nothing from it is shown to the player in chat. The canon (`canon/series-canon.md`), this file and the format spec are spoiler-free.
