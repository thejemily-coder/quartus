# Episode file format (episodes/sXeYY.json)

One JSON file per episode. `game/engine.html` renders it; `tools/build.py` bakes every episode into `game/play.html`.
Write valid JSON: double quotes, no trailing commas, no comments. Use typographic quotes and apostrophes (’ “ ”) inside
prose so straight double quotes never need escaping. Em dashes are allowed. Do not use markdown inside prose except
`*italics*` (single asterisks), which the engine renders.

```json
{
  "id": "S1E01",
  "season": 1,
  "episode": 1,
  "title": "Pilot",
  "showTitle": "The Hard Saying",
  "dates": "Saturday, August 29 – Sunday, August 30, 2009",
  "logline": "One spoiler-free sentence for the title card.",
  "previously": [ { "text": "Recap line built from the player's path.", "if": "optional expr" } ],
  "cast": [ { "id": "lena", "name": "Lena Broussard", "role": "Short public role", "tracked": true } ],
  "duels": { "homily": { "title": "On the Homily", "opponent": "lena", "topic": "Whether …" } },
  "start": "s01",
  "scenes": {
    "s01": {
      "slug": "SATURDAY · 7:40 AM · I-80 WEST, SOMEWHERE IN NEVADA",
      "music": "Phoenix — “1901”",
      "duel": "homily",
      "set": { "flag_name": true },
      "body": [
        "A paragraph of prose. Dialogue lives inside the prose, novel-style.",
        { "if": "expr", "text": "Shown only if expr is true.", "else": "Optional alternative." },
        { "type": "sms", "from": "Mom", "text": "did u get there ok. call ur nonna", "time": "7:52 PM", "if": "optional" },
        { "type": "fb", "name": "Theo Vance", "text": "is a free man in Marisol.", "meta": "Saturday at 4:12pm · 3 people like this" },
        { "type": "aim", "name": "lenabroussard09", "text": "Away message text" },
        { "type": "doc", "title": "PHIL 10: Syllabus", "text": "A printed or handwritten document, flyer, note." },
        { "type": "break" }
      ],
      "journal": [ { "kind": "person", "id": "lena", "title": "The girl on the porch", "text": "What Jack now knows.", "if": "optional" } ],
      "choices": [
        {
          "text": "What the player chooses (short, active, in Jack's idiom).",
          "if": "optional expr; choice hidden unless true",
          "tag": "optional small label shown before the text, e.g. ‘Wit’, ‘Press’, ‘Concede’, ‘Lie’, ‘Go’",
          "cue": "Optional Telltale whisper, e.g. ‘Lena will remember that.’",
          "set": { "rel.lena.heat": "+1", "soul.honesty": "-1", "trait.wit": "+1", "e1_flag": true },
          "key": "Optional recap line for the episode-end summary and Story So Far, e.g. ‘You told Lena the truth about the scar.’",
          "response": [ "1–4 paragraphs (or inserts) showing the immediate reaction before moving on." ],
          "goto": "s02"
        }
      ],
      "next": "s02",
      "end": false
    }
  },
  "endCard": {
    "tag": "A closing line for the end card.",
    "nextTime": [ "Spoiler-free ‘Next time on The Hard Saying’ fragments. 3–5 short lines, deliberately oblique." ]
  }
}
```

## Scenes
- A scene has `choices` (each with `goto`), or `next`, or `"end": true` (final scene only).
- `slug` is the chyron: `DAY · TIME · PLACE`, all caps, with middle dots. The place is specific ("DELGADO HALL, 4TH FLOOR LOUNGE").
- `music` (optional) is a needle-drop, shown when the scene opens. The song must have been released by the scene's date.
  Use about 4–8 per episode, at moments that earn them.
- `duel` (optional) marks the scene as part of an argument duel and shows the duel HUD. Every scene in the duel carries
  the same duel id. See Duels below.
- `set` on a scene applies when the scene is entered (writer-controlled state such as Lena's resolve).
- `journal` entries are added when the scene is visited (or when a choice's response is shown, if put on a choice).
  The same `id` + `kind` replaces an earlier entry (use it to update a person's card). Kinds: `person`, `clue`, `note`.
  Journal text is Jack's knowledge and impressions, in his voice, and never contains hidden canon he couldn't know.
- POV is Jack only. No cutaways.

## Season recap (finales only)
A season finale may carry a top-level `seasonRecap`; the engine then adds a recap to the finale's end card:
`"seasonRecap": { "title": "Where Jack stands", "people": ["lena","skye","theo",...], "highlights": [ { "if": "e20_no==\"control\"", "text": "You said no, and meant right now." } ] }`
- `people`: tracked cast ids in display order (the engine describes each in words from rel.*; numbers are never shown).
- `highlights`: 6–10 lines naming the season's biggest choices, second person past tense, each gated on real flags so
  only the path the player took shows. Spoiler-safe: no hidden canon. The engine also shows soul and Jack's resolve in words.

## Choices
- Prefer choices that change tone, state and flags and then **converge**. Branch scenes only where it really matters
  (2–4 genuine forks per episode). "Where to go" choices fork into different scenes, then converge.
- Every scene with choices has at least one choice with no `if`.
- `cue` whispers are rare: about 5–8 per episode, reserved for choices that will truly be remembered.
- `key` lines are the episode's 6–12 most consequential choices, written in second person past tense.
- `response` is optional but usual: the immediate reaction, then the engine shows Continue → `goto`.
- A choice may carry `journal`, like a scene.

## State variables (all live in one flat map; `set` writes them)
Values in `set` are `true`/`false`, a number, a string, or `"+N"`/`"-N"` to increment (missing counts as 0, except
resolve, which starts at its default).
- **Flags:** snake_case, prefixed by episode: `e1_lied_to_theo`. Long-arc flags may be unprefixed (`smoked_with_lena`).
- **Relationships:** `rel.<castId>.<axis>`, with axis one of `trust`, `warmth`, `heat`, `friction`. `castId` must be a
  tracked cast id. Typical step ±1; ±2 for big moments. `heat` is romantic/sexual charge; use it only where it makes sense.
- **Soul:** `soul.grace` (grace vs. drift), `soul.honesty` (honesty vs. performance), `soul.restraint` (restraint vs.
  abandon). Signed: negative values mean the opposite pole.
- **Traits:** `trait.wit`, `trait.sincerity`, `trait.charm`, `trait.candor`, `trait.reckless`, `trait.control`.
  Gate a special option on a trait, e.g. `"if": "trait.wit>=2"`, and give it a `tag` naming the trait.
- **Resolve:** `resolve.jack` and `resolve.lena`, 0–10, both default **7**. Prayer, Mass, confession, rest and good
  friendship raise it; alcohol, loneliness, stress, fights and charged near-misses lower it. Jack's moves by the
  player's choices; Lena's is set by writers via scene `set`. When both are ≤ 3, the dangerous night becomes possible.
  The engine never shows resolve.
- **Duels:** `duel.<duelId>.rigor`, `duel.<duelId>.wit`, `duel.<duelId>.heart` (scored by choices), and optionally
  `duel.<duelId>.lena` (points Lena scores, set by writers).

## Duels (argument mini-game)
- Define each in top-level `duels`. A duel runs over 3–6 consecutive scenes, all carrying `"duel": "<id>"`.
- Each duel scene shows Lena's (or the opponent's) move in prose, then 3–4 choices tagged with a move: **Press**
  (rigor), **Riposte** (wit), **Concede** (heart: give her the point, gain trust and warmth), **Reframe**,
  **Personal** (risky: wins the point, hurts her), and so on. Choices `set` duel scores plus relationship effects.
- Concede is never a dead option. Winning isn't always good for the relationship; sometimes conceding the right point
  is the most romantic thing Jack can do.
- The final duel scene branches or varies on the scores, e.g. `duel.homily.rigor>=2`. The HUD shows Rigor, Wit and
  Heart pips while the duel is active.

## Expressions (`if`)
`flag`, `!flag`, `counter>=2`, `rel.lena.heat>=1`, `resolve.jack<=3`, `route=="party"`, joined by `&&` and `||`
(`&&` binds tighter; no parentheses). Unknown variables are 0/false.

## Rules
- Conditional text reads flags from THIS and EARLIER episodes (the save keeps everything).
- Never put hidden canon in `journal`, `cue`, `key`, `previously`, `nextTime` or `logline` before the story reveals it.
- Every character fact must be consistent with `continuity.md` and the knowledge ledger `knowledge.md`:
  a character can only say what they could know.
