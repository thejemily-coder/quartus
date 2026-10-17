# Episode file format (episodes/sXeYY.json)

Every episode is one JSON file. The engine (game/engine.html) renders it; build.py injects it into the published page.
Write valid JSON: double quotes, no trailing commas, no comments. Use typographic quotes/apostrophes (’ “ ”) inside prose so
straight double quotes never need escaping. Em dashes allowed in prose.

```json
{
  "id": "S1E01",
  "season": 1,
  "episode": 1,
  "title": "Episode title",
  "showTitle": "Show title",
  "logline": "One spoiler-free sentence for the title card.",
  "previously": [
    { "text": "Recap line built from the player's path.", "if": "flag_expr (optional)" }
  ],
  "cast": [
    { "id": "lowercase_id", "name": "Full Name", "role": "Short public role", "tracked": true }
  ],
  "dossier": [
    { "id": "cast_id", "text": "Note the player now knows.", "if": "optional expr" }
  ],
  "start": "s01",
  "scenes": {
    "s01": {
      "slug": "EXT. RANCH — DAWN",
      "cutaway": false,
      "body": [
        "A paragraph of prose. Dialogue lives inside the prose, novel-style.",
        { "if": "flag_expr", "text": "Paragraph shown only if the expression is true.", "else": "Optional alternative paragraph." }
      ],
      "dossier": [ { "id": "cast_id", "text": "Note unlocked on visiting this scene." } ],
      "choices": [
        {
          "text": "What the player chooses (short, active, in his idiom).",
          "if": "optional expr — choice hidden unless true",
          "cue": "Optional Telltale-style cue, e.g. ‘Nora will remember that.’",
          "set": { "flag_name": true, "counter_name": "+1" },
          "tone": { "cast_id": 1, "other_id": -1 },
          "ledger": "In-world record line, e.g. ‘You told Wade the well was dry.’",
          "response": [ "1–4 paragraphs showing the immediate reaction before moving on." ],
          "goto": "s02"
        }
      ],
      "next": "s02",
      "end": false
    }
  },
  "endCard": {
    "tag": "A closing line for the end card.",
    "pitches": [
      { "id": "a", "title": "Pitch title", "blurb": "Spoiler-free direction for next episode." },
      { "id": "b", "title": "...", "blurb": "..." },
      { "id": "c", "title": "...", "blurb": "..." }
    ]
  }
}
```

## Rules
- A scene has either `choices` (each with `goto`) or `next`, or `"end": true` (final scene only).
- Choices may be used purely for tone/flags and converge (`goto` the same scene) — prefer that. Branch scenes only where it matters.
- `body` items are strings or conditional objects. Conditional text reads flags from THIS and EARLIER episodes.
- `set` values: `true`/`false`, a number, a string, or `"+N"`/`"-N"` to increment a counter.
- `tone` changes a persistent per-character integer. Typical step ±1; ±2 for big moments. Only use ids in `cast` with `tracked: true`.
- Expressions (`if`): `flag`, `!flag`, `counter>=2`, `tone.nora<=-1`, `route=="quiet"`, joined by `&&` and `||` (no parentheses; `&&` binds tighter).
- Flag names: snake_case, prefixed with the episode, e.g. `e1_lied_to_wade`. Persistent flags that long arcs use may be unprefixed (`affair_heat`).
- `cutaway: true` marks a scene outside the protagonist's POV (rare; for dread). Never reveal hidden canon outright in a cutaway.
- Never put hidden-canon facts in `dossier`, `cue`, `ledger`, or `pitches` before the story reveals them.
