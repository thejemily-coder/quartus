# TITHE — Episode Authoring Guide (for writers and agents)

Every episode is one file: `tithe/src/episodes/epN.js`. It calls `TITHE.episode({...})` once. Read `TITHE_Series_Bible.md` first (canon, cast, flags). Read `src/data.js` for valid ids (cast, items, enemies, codex, regions). Read `src/episodes/ep1.js` as the reference for voice, density and structure.

Run `node tools/validate.js` after writing. It must report 0 errors.

## Episode object

```js
TITHE.episode({
  n: 2, title: 'Harrowgate',
  logline: 'One sentence.',
  start: 'cold',                        // first node id
  credits: ['ansel','tamsin','isolde'], // cast ids for the end credits (featured this ep)
  previously: [                         // "Previously on TITHE" clips, shown at start; filtered by `if`
    { t: 'Six years ago, at Corran\'s Ford, Ansel Dray died.' },
    { if: "f.e1_spared_wat", t: 'He let a starving boy go.' }
  ],
  nextTime: ['Line of teaser.', 'Another.'],   // shown in the credits
  nodes: { /* id: node */ },
  side: [ /* hub content unlocked AFTER this episode ends; see below */ ]
});
```

## Nodes

```js
nodeId: {
  loc: 'The Gutted Hen — Night',   // optional slug line (location — time); use when the scene changes
  card: { kind: 'titles' },             // optional: full-screen card before the node renders
                                        //   'titles' = main title sequence + episode title (use ONCE, after the cold open)
                                        //   'cut'    = black card: { kind:'cut', title:'SIX YEARS LATER', sub:'The Kingsroad' }
                                        //   'act'    = act break: { kind:'act', title:'Part Two', sub:'The Cisterns' }
  fx: { ... },                          // effects applied on entering (see Effects)
  route: [ { if: "f.x==='a'", go: 'n1' }, { go: 'n2' } ],  // optional immediate redirect after fx (first true wins; last should have no if)
  text: [ ...lines ],
  // then exactly ONE of:
  choices: [ ...choices ],
  next: 'nodeId',  nextLabel: 'optional button text',
  fight: { ... },
  end: true        // in the main story: ends the episode (credits). In a side scene: returns to the hub.
}
```

### Text lines
- Plain string = narration (present tense, second person: "You…"). Ansel is "you".
- `'@tamsin: "Dialogue."'` = dialogue with speaker label. Include the quote marks inside. Speaker ids from `TITHE.CAST`. Use `@ansel:` for Ansel's own spoken lines when it reads better as script.
- `'~ CUT TO: THE CISTERNS.'` = screen direction (rendered small caps). Use sparingly for TV grammar: CUT TO, SMASH CUT, LATER, INTERCUT.
- `'> Thought.'` = Ansel's inner voice (italic). Sparingly.
- `*italics*`, `**bold**`, `--` becomes an em dash (avoid overusing).
- Conditional: `{ if: "f.e1_spared_wat", t: 'line or [lines]', else: 'optional' }`.

### Choices
```js
{ t: 'Choice text (what Ansel does or says).', go: 'node',
  if: "expr",            // hidden unless true
  req: "expr", reqLabel: 'Needs Silver Oil',   // shown but disabled unless true
  once: true,            // disappears after being picked (for conversation hubs that loop back)
  fx: { ... },           // effects applied when picked
  cost: 20,              // silver cost (disabled if can't pay)
  check: { stat: 'presence', dc: 13, pass: 'nodeA', fail: 'nodeB', intimidate: true, uncanny: true, xp: 15 }
                         // d20 + stat*2 vs DC. A check replaces `go`. Both outcomes must be interesting; failure must never dead-end.
}
```
Stats: might, finesse, grit, wits, presence. DCs: 10 easy, 13 moderate, 16 hard, 19 very hard, 22 heroic. Ansel starts Might 3 Finesse 2 Grit 3 Wits 2 Presence 1 (so +6 +4 +6 +4 +2); he grows ~+1 stat per two levels.

### Fights
```js
fight: { foes: ['ghoul','ghoul'], win: 'node', lose: 'node'(optional), flee: 'node'(optional), title: 'The Ditch',
         intro: 'One-line combat log opener.', allies: ['tamsin'] /* override party */, solo: true /* no allies */,
         noWound: true, noLoot: true, xp: 100 /* override */ }
```
- `lose` only for story-survivable losses (sparring, melee, capture). Without `lose`, defeat = retry screen.
- Enemy ids from `TITHE.ENEMIES`. Up to 4 foes. Bosses alone or with 1–2 minions.
- Approx. player level by episode (with some grinding): E1 1–2, E2 2–3, E3 3–4, E4 4–5, E5 5–6, E6 6–7, E7 7–8, E8 8–9. Main-story fights must be beatable without grinding; side contracts may be harder.

### Effects (`fx`)
```js
{ set: { e2_hob_hired: 1 }, add: { counter: 1 },
  bond: { tamsin: 1 }, rep: { town: 1, lamp: -1, varane: 1, fen: 1 },
  xp: 50, silver: 20, give: { poultice: 2 } | 'poultice', take: { ledger: 1 } | 'ledger',
  equip: 'item', heal: 10 | 'full', hp: -5, st: 1, rest: true, wound: 'random'|'ribs'|..., cure: true|'all',
  party: { add: ['hob'], remove: ['tamsin'] },
  know: { cast: ['pell'], beast: ['ghoul'], codex: ['kindling'] },
  quest: { id: 'annet', title: 'The Missing Maid', state: 'active'|'done'|'failed', note: 'Journal line.' } (or an array),
  quiet: true   // suppresses the "X will remember that." toast for bond changes in this fx
}
```
Bonds: ±1 for meaningful moments, ±2 for defining ones. Bond values matter: the bible's gates (e.g. Hob survives E7 if bond.hob>=3; Pell survives E8 if bond.pell>=3).

### Expressions (`if`, `req`, `route`)
JavaScript, evaluated with: `f` (flags), `bond`, `rep`, `q`, `ep`, `lvl`, `silver`, `hp`, `stat('wits')`, `has('item')`, `skill('b3')`, `inParty('tamsin')`, `kills('ghoul')`, `done('sideId')`. Missing flags are `undefined` (falsy). Compare strings with `===`.

### Side content (hub, between episodes)
Unlocked once this episode ends (available in the hub before the next episode, and after).
```js
side: [
  { id: 'e2_c_toll', kind: 'contract', title: 'The Toll on Thornwood Road', desc: 'One-line notice text.', level: 3, start: 'c_toll_1', if: "expr" },
  { id: 'e2_t_tamsin', kind: 'talk', who: 'tamsin', title: 'A walk on the walls', start: 't_tam_1', if: "inParty('tamsin')" }
]
```
- Side nodes live in the same `nodes` object (prefix ids: `c_…` for contracts, `t_…` for talks).
- A side scene ends with a node that has `end: true` (returns to the hub) or a choice with `go: '@hub'`.
- Contracts = monster-of-the-week and quest content: 3–8 nodes, a real little story with a choice and a fight, rewards (silver, xp, items, sometimes a recipe-material cache or trinket).
- Talks = companion bond scenes: 3–6 nodes, intimate, funny, revealing; bond +1/+2; may set flags used later.

## House style
- Prestige-TV structure: cold open → main titles card → acts → a strong final image → credits. The cold open is 2–5 nodes and often features characters other than Ansel.
- Prose: tight, concrete, sensory, unsentimental. Short paragraphs. Every line of dialogue should sound like a particular person. Subtext over exposition. Humor in the dark.
- Each node: 1–8 lines. Big scenes are made of many nodes, not huge nodes.
- Choices must matter: they change bonds, flags, rewards, later lines. Include at least 3 conversation choices in every major character scene, and give the player real moral dilemmas.
- Violence is specific and graphic. Sex is frank and adult in an HBO register; render desire and bodies honestly, then cut before it becomes a catalogue. Everyone sexual is an adult. Never depict or eroticize sexual violence.
- Tamsin is the hidden true romance. Never label her as such. Give her small, true moments. She does NOT sleep with Ansel in Season One.
- The Tallyman is rare, quiet, never explains himself.
- Never contradict the bible. Use flag names exactly as in the registry. If you need a new flag, prefix it with the episode (`e5_...`) and document it in your report.
- Each episode: ~45–90 nodes main story, 2–3 fights minimum in the main story plus a boss, 2+ side contracts and 2+ companion talks.
