# Episode Authoring Format (`.ep`)

Writers draft episodes in `src/<id>.ep` (or in parts: `src/<id>/NN-name.ep`, concatenated in filename order). `node tools/build.mjs <id>` compiles them to `episodes/<id>.json` and validates the graph. Keep to this spec exactly — the build script is strict.

## File header (first part only)
```
@id s1e1
@season 1
@episode 1
@title Somebody Told Me
@title_credit "Somebody Told Me" — The Killers (2004)
@date Saturday, August 27, 2005
@start cold_open
@previously Line shown in the "Previously On" montage (omit for the pilot). Repeatable.
@teaser A cryptic "Next Time On" line. Repeatable. (Written by the room for THIS episode once it exists; shown on the title screen before the player starts it.)
```

## Nodes
A node is one beat/scene the player reads before a choice or a Continue. Start each with `=== node_id` (lower_snake_case, unique in the episode).
```
=== cold_open
@pov cal
@slug SOUTH STATION, BOSTON — 6:50 A.M.
```
- `@pov` — `cal` (default), `del` (playable Del cutaway — gold grade), or `other:Name` (read-only cutaway to another character).
- `@slug` — optional scene heading, ALL CAPS, `PLACE — TIME`. Use it when the scene/time changes; omit for continuous action.
- `@act` — optional, e.g. `@act COLD OPEN`, `@act ACT ONE`, `@act TAG`. Put it on the first node of each act.

### Prose
Plain paragraphs separated by a blank line. `*italic*` and `**bold**` only. Dialogue is written in prose with quotation marks (“curly” or "straight" both fine). Close third person, past tense, on the `@pov` character.

### Period extras (block tags; content between open and close tag)
```
[needle] Song Title | Artist | where/how it's playing
[aim title="optional window title"]
dellybean22: what she typed
CalR3ardon: what he typed
*dellybean22 has signed off*
[/aim]
[away name="screenname"]Away message text (song lyric, inside joke)[/away]
[sms from="Deck" time="11:42 PM"]text as typed on a 2005 flip phone[/sms]
[sms to="Deck" time="11:44 PM"]Cal's outgoing text[/sms]
[voicemail from="Patty" time="2:13 AM"]transcribed voicemail[/voicemail]
[fb from="Rafe Delacroix-Moore" to="Cal Reardon"]a 2005 Facebook wall post[/fb]
[note from="optional"]a handwritten note, napkin, Post-it[/note]
[polaroid id="p_s1e1_roof" caption="Del's handwriting on the back"]What the photo shows.[/polaroid]
```
- Polaroids go into the player's permanent scrapbook. `id` must be unique across the series (`p_<ep>_<slug>`).
- `[needle]` cues are also collected into the end-of-episode tracklist. Songs must be released on or before the in-world date.

### Mixtape (interactive)
```
[mixtape id="mix_cal_del_1" pick=3 title="for D. (don't laugh)" from="Cal" to="Del"]
- mrbrightside | Mr. Brightside | The Killers | 2004
- maps | Maps | Yeah Yeah Yeahs | 2003
[/mixtape]
```
The player must pick exactly `pick` tracks. Each pick sets the flag `<mixtape_id>__<track_key>` = true (e.g. `mix_cal_del_1__maps`), and `<mixtape_id>` = true.

### Flags
```
[set met_del_on_roof=true]
[set del_trust+=1, lied_about_bus=false]
```
- Applied when the node is entered. Values: `true`, `false`, numbers, or `"strings"`. `+=` / `-=` for numbers (an unset value counts as 0).
- **Flags persist for the whole series.** Name them so a writer three seasons from now understands them: `s1e1_told_del_about_twins`, not `t2`. Prefer the `s1e1_` prefix for episode-specific facts; use unprefixed names only for long-running counters agreed in the continuity ledger.

### Conditionals (inside a node)
```
{if s1e1_kissed_del && !s1e1_lied_to_teddy}
Paragraphs / extras shown only if true.
{else}
Otherwise.
{/if}
```
Expressions: flag names, numbers, `"strings"`, `true/false`, `!`, `&&`, `||`, `==`, `!=`, `<`, `>`, `<=`, `>=`, parentheses. Unset flags are `false`/`0`. Nesting allowed. Conditions may test flags set in earlier episodes.

### Exits (at the end of every node — exactly one kind)
Choices:
```
* Tell her the truth about the bus. -> roof_truth | set: s1e1_told_del_bus=true, del_trust+=1 | echo: You told Del where you really came from.
* Lie. Smoothly. -> roof_lie | set: s1e1_lied_del_bus=true
* {if s1e1_has_flask} Offer her the flask. -> roof_flask
```
- Label text is what the player clicks — write it in Cal's (or Del's) intent, short and specific, no spoilers about outcome.
- `| set:` and `| echo:` are optional, in either order. `echo` text appears on the episode's cryptic end card ("choices that will echo") — use it for 3–5 truly consequential choices per path, written cryptically in second person past tense.
- `{if ...}` before a label shows that choice only when true. A node must always have at least one visible choice.

Or an automatic continue:
```
-> next_node
```
Or the end of the episode:
```
[end]
```

## Rules the validator enforces
- Every target exists; every node is reachable from `@start`; every node has exactly one exit type; at least one path reaches `[end]`.
- Every choice node has ≥2 choices (conditional ones count only if they can be true — be careful).
- Expressions parse. Polaroid ids are unique.
- Reports word counts and choice counts along the shortest and longest paths. Target: 8,000–12,000 words and 12–18 choices along a typical path.

## Branch design guidance
- Branch, then **reconverge with memory**: different paths may rejoin at a shared node, but the shared node must use `{if}` blocks so the reconverged scene reflects what happened. No choice may be erased.
- Some choices should lock the player out of whole scenes (where Cal goes, who he's with). Other characters' scenes still happen off-screen; record it in flags so later episodes can surface the consequences.
- Do not write two full parallel episodes. A typical episode: a spine of ~10–14 major nodes, with 2–4 substantial branch scenes, and many small choices that set flags and color the next few paragraphs.
