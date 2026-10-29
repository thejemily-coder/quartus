# The Writers' Room

How *The Hard Saying* gets made. Each role is a subagent on the model that suits its task. The orchestrator (the main
Claude session) runs the notes session with the player, reads the save, runs the pipeline, builds, publishes and commits.

## Roles (pipeline v2, 2026-10-23; v1 archived in `writers/pipeline-v1/`)
Every agent after planning reads the episode's **context pack** (`drafts/<ep>_pack.md`) instead of the full bible,
ledgers and brief, consulting those only by targeted lookup.

| Role | Model | Job |
|---|---|---|
| **Showrunner** | opus | Owns the secret bible: hidden arcs, the central mystery, twists, the arc registry. Plans each episode; in finalize, patches drafts to the actual save and the newest notes (medium effort). |
| **Story Editor** | sonnet | Look-ahead sketches for the episode after next in pre-production (the Showrunner plans it fully on the next run). |
| **Period Researcher** | sonnet | Keeps `period/` accurate: dates, news, Church calendar, weather, songs released by each date, sports. Flags anachronisms. |
| **Context Packer** | sonnet | Builds the per-episode pack in pre-production and updates it at finalize (never rebuilds it): player directives, style guide, on-page voices, hidden-canon constraints, ledger entries, tic registry, period facts. |
| **Episode Architect** | opus | Scene-by-scene blueprint: choice maps, flags, effects, duels, act split, header JSON. |
| **Romance Writer** | opus | Every Jack/Lena and Jack/Skye scene. Heat, subtext, argument, restraint. |
| **Ensemble Writers** | sonnet | The remaining chunks in parallel, matching pack voices. |
| **Assembler + checks** | haiku | Merges drafts, runs the validator, `tools/sim.js` (400 random playthroughs) and `tools/tics.py`. |
| **Continuity Auditor** | sonnet | Facts, names, dates, geography, timeline, prior choices honored exactly. |
| **Knowledge Auditor** | opus | Who knows what, when, and how (see checklist below). |
| **Voice Editor** | opus (medium) | Each character sounds like themselves; relationship temperatures; player directives honored. |
| **Line Editor & Tic Hunter** | sonnet | Starts from the scripted tic counts; prose polish plus the registry below. |
| **Standards & Spoiler Guard** | sonnet | Content standards and hard lines; hidden canon never leaks into journal, cues, keys, recaps, teasers. |
| **Mechanics Designer** | haiku | Reads the scripted playthrough results; choice distinctness, gates, resolve economy, whispers, keys. |
| **Head Writer** | opus | Applies notes, final polish, validates. |
| **Ledger Clerk** | sonnet | Appends the episode's canon to `continuity.md`, who-learned-what to `knowledge.md`, new tics to the registry. |

## Knowledge Auditor checklist
For every line of dialogue or narration that implies knowledge, ask: **how does this character know this?**
- A character may only reference what they witnessed, were told on-page, or could plausibly learn off-page (and if it's
  off-page, the text must make the route clear: "Laney told me").
- **Banned move:** a character says something they can't know, then plays it off as a joke, guess or intuition
  ("Lucky guess." "I'm psychic." "Call it a hunch."). Cut it or give them a real route.
- Jack's narration knows only what Jack knows. No narrating others' inner states as fact ("she's thinking about…").
  Use observation and inference: "something in her face says…".
- Names: a character doesn't use a name before it's been introduced to them. Jack doesn't know Lena's name until she
  gives it (or someone says it in his hearing).
- Track it in `knowledge.md`: per character, the major facts they know and the episode/scene where they learned it.

## Tic registry (Line Editor hunts these; add new ones as found)
1. **Wrong word counts.** Narration or dialogue that counts words ("three words," "two syllables," "she said it in
   four words") must be literally correct, or cut. Prefer cutting: counting words is itself a tic.
2. **Knowledge-then-deflection** (see Knowledge Auditor): impossible knowledge covered with "joke/guess."
3. **Pet phrasing repeated across scenes or episodes:** "something shifts," "the air changes," "a beat," "doesn't
   quite reach his eyes" (Kevin's look in the brief is the only sanctioned use), "he realizes he's been holding his
   breath," "the ghost of a smile," "for a long moment," "it's not nothing," "and isn't that something," "Jack files that
   away," "she's not wrong," "he doesn't say…; he says…" constructions more than once an episode.
4. **Overused "jaw tightens," "throat works," "swallows hard," "lets out a breath."** Max once per episode each.
5. **Characters narrating subtext aloud** or therapy-speak in 2009 mouths ("boundaries," "toxic," "triggered," "I hear
   you," "unpack," "valid," "lived experience") unless the character would say it in 2009 (Margot might; mark it).
6. **Everyone is witty in the same register.** Each character's humor must be distinct (see bible voices).
7. **Ending scenes on a one-line paragraph zinger** every time. Vary scene endings.
8. **Anachronisms:** smartphones in common use (the iPhone exists in 2009 but isn't universal; Jack has a flip phone),
   "texting" slang later than 2009, apps, memes, songs or events after the scene's date.
9. **Expert-appraisal similes** (added S1E01): "looks at him the way a [jeweler/customs officer/trainer/mechanic] looks at
   [object]." Max two per episode, and never two in the same act.
10. **"That's not X. That's Y." reversals** (S1E01): max one per episode outside a character's signature line (Theo owns
   this shape; Lena's duel thesis "That's not hypocrisy. That's showing up" is the sanctioned exception for S1E01).
11. **Courtroom imagery** (S1E01): appellate, verdict, evidence, summons, judge, gavel, the record. It is Lena's motif
   (future public defender). Max three uses per episode in prose and dialogue (journal excluded), and only around Lena.
12. **Summing-up closers** (S1E01): "That's all." / "That's the whole X." ending a beat. Max two per episode.
13. **Clue-flag tags** (S1E01): narration pointing at its own plants ("He doesn't know why he notices," "It means nothing to
   him," "He doesn't know what that means. He doesn't let himself try."). Cut them; show the object and move on.
14. **The suppressed laugh** (S1E01): someone laughs against their will, is furious about laughing, hides it in a cup or
   behind a hand. Once per character per episode.
15. **"…for nobody / at nothing" melancholy cadence** (S1E01). Once per episode.
16. **"[Body part] does something [adjective]"** ("his face does something enormous"). Once per episode.
17. **Narrating the theme** (S1E01): the narration explaining Jack's habits ("That's the Costigan way," "It's the family
   trade," "He's good at not going further in"). Show it. One character may diagnose it aloud per season.
18. **Same image twice in one episode** (S1E01): "thick enough to stop a bullet," "stairs in the dark," the lighthouse
   "white and blind," coin/pencil for the cigarette, door/shutter for a face closing. One use per image per episode;
   give each character their own figures (Frank's garage door, Lena's tablecloth).
19. **Mirror-cadence beats** (S1E01): "it reaches her face the same instant it reaches his." Once per episode.
20. **Shared stock phrases flattening voices** (S1E01): "God help him/you/them" belongs to Frank; "designated adult" is
   Kevin's; laminating is Priya's; "sugar" is Laney's, "hon" is Gloria's.
21. **Ranking tags** (S1E02): ", which is worse," "the worst of it," "the dangerous part," "more alarming." Max one per
   episode. Lena's polite-is-terrifying beat doesn't need the tag at all.
22. **Voice-delivery openers** (S1E02): "It comes out [quiet/cold/plain]," "His voice comes out…," "the voice that comes out
   when…." Max one per episode; never open several responses to the same choice this way.
23. **Acting before deciding** (S1E02): "before he can decide not to," "before he's thought," "before the better part of
   him…." Max two per episode.
24. **"Watches her not [X]"** (S1E02): "watches it not help," "watches her not skip it." Max one per episode.
25. **Comic personification similes** (S1E02): "a goose being audited," "a car wash losing an argument," "a mosquito with a
   grievance." Each is good; together they flatten the narration into one register of wit. Max four per episode.
26. **"The way you'd…" similes** (S1E02): the narration's default simile shape. Max three per episode.
27. **Lena's watched exit** (S1E02): "doesn't look back… she does," "and then she isn't," "then the fog/gold has her."
   Once per episode, and never from the second-floor landing again.
28. **Reaction-shot endings** (S1E02): responses ending on "Across the table, Lena…" or "Nobody moves." Max three per
   episode, especially inside a duel.
29. **"…, and is." twist endings** (S1E03): "looks around to see if she's doing it right, and is." Max one per episode.
30. **Margot writes it down as the button** (S1E03): Margot noting, underlining or timing a beat as its ending. Max two per
   episode; once in a while let her not write.
31. **Gesture words "two fingers" and "ceremony/ceremonially"** (S1E03). Max two each per episode (Richard's two-finger tuck
   is the sanctioned one in E03).
32. **Speech addressed to an object or room** (S1E03): "to the oven," "asks the pie," "informs the kitchen," "to the
   windshield." Max three per episode.
33. **"A second longer than [X] needs/has to"** (S1E03; seven uses by E03). Max one per episode.
34. **"Nobody X. Everybody Y." pairs** (S1E03). Max one per episode.
35. **Negation inventories for restraint** (S1E03): "doesn't touch it, doesn't top it," "doesn't add anything." Say it once,
   then show.
36. **"Lets it sit (there)"** (S1E03). Max one per episode.
37. **Negative-action buttons** (S1E04): ending a beat on something a character *doesn't* do ("doesn't write it down,"
   "doesn't say so," "for once, doesn't rate anything"). Max three per episode.
38. **The hollow or aborted laugh** (S1E04): laughs or smiles with nothing in them, or that don't arrive ("the laugh doesn't
   arrive," "the place where a laugh would go," "she laughs, with no laugh in it"). Max two per episode.
39. **"Which from X is Y" verdicts** (S1E04): the narrator grading a minimal gesture as big for that character ("which from
   Priya is a signed permission slip," "on a warmer person would be pride"). Max one per episode.
40. **"…and stay(s) there"** (S1E04; heavy in E01–E02 too): a look, a question, a number or a name that goes somewhere and
   "stays there." Once per episode.
41. **"The [face/look/laugh/pleasure] of a man/somebody who…"** (S1E04; twelve in one draft). Max three per episode.
42. **Hale's scorekeeping as the button** (S1E05): roster marks, whiteboard underlines, a lifted finger, "makes no mark at all"
   ending a duel response. Max two per duel (same rule as Margot's notebook, #30). End duel beats on the combatants.
43. **Give-and-take figures for dialogue** (S1E05; ~ten in one draft): lines "handed back," "banked," "signed for," given back
   "like change," folded "like a receipt," taken "like a letter somebody forwarded," "filed." Max two per episode.
44. **"Like a man / like somebody [verb]-ing" similes** (S1E05): "like a man laying bricks," "like somebody counting what they
   cost," "like a man late for his own wedding." Max two per episode (tic #41 covers "the X of a man who").
45. **"Lets the room / lets that [wait / land / picture it]" timing tags** (S1E05). Max one per episode.
46. **Rereading as an emotion tag** (S1E05): "reads it again," "reads it twice," "then she reads it again." Max one per episode.
47. **"Between them"** (S1E06; 10 in E05, 13 in E06): the default spatial tag for every two-person beat. Max two per episode;
   keep the one that earns it (E06: "a whole person's worth of bench between them").
48. **"He can hear (that) X" interpretation tags** (S1E06; 8–9 an episode since E03): the narration hears the subtext, then names
   it ("It's respect; Jack can hear that much"). Max two per episode; let the dialogue carry it.
49. **Superlative verdicts** (S1E06): "the most tact Jack has ever seen," "the first real question of the night," "the longest
   train he has ever heard." Max two in narration per episode; dialogue gets its own budget of three (Hale, Margot, Lena).
50. **Measuring the Jack–Lena gap** (S1E06): "eight inches of folding-chair gap," "a foot of splintered boards," "a careful foot
   apart." One measured distance per episode; prefer unmeasured.
51. **Speaking while looking away from him** (S1E06): "She doesn't look at him to say it," "looks at the fog instead of at him."
   Max two per episode; never the "doesn't look at him to [verb] it" frame twice.
52. **"In the voice of a [profession]"** (S1E06): "the voice of a funeral director," "a flight attendant doing the exits,"
   "bulletin voice." Max two per episode; profession similes for the cast ("a candidate working a county fair," "like a
   maître d'") count toward it.
53. **"Plain / plainly" as a sincerity tag** (S1E06; 4–7 an episode): "He says it plainly," "plain as a handshake." Max two per
   episode; let the line itself be plain.
54. **"Neither of them [verb]"** (S1E07; 10 in one draft, 11 in E01): the default button for shared restraint ("Neither of them
   says so," "neither of them moves to end it"). Max two per episode; let the scene show it.
55. **Glasses business as a beat marker** (S1E07; ~10 an episode since E01): Osei's reading glasses on/off the cord, Margot's
   frames off / turned over / cleaned / back on, Hale's glasses up on his head, Evan rubbing the marks. One glasses gesture per
   character per episode, and only where it earns it (E07: Margot's glasses off on the roof).
56. **Inch-sized gestures** (S1E07): "raises his thermos an inch," "lifts his coffee an inch," "lowers the phone an inch," "chin
   a quarter inch." Max two per episode. Dale's coffee-inch (E05–E07) is retired.
57. **"Finds (that) he…" discovery tags** (S1E07): "he finds that he would like to," "finds that he means it," "Jack finds he
   doesn't mind." Once per episode.
58. **"Don't know what to do with"** (S1E07): once per season unless it is a deliberate callback (E07: Lena's "I don't know what
   to do with both" on the roof).
59. **Theo's thumbs on the iPhone as a scene button** (S1E08; five in one draft): the alliance tell. Max two per episode; show the
   alliance other ways (he photographs a receipt, asks a time too casually, a phone lit face-up with a text Jack can't read).
60. **"As if / as though" clauses** (S1E08; 32 in one draft, 31 in E04): max twelve per episode, never two in one paragraph.
61. **Time-fillers "(after) a while" and "all the way"** (S1E08; 12 and 13 in one draft): max three each per episode.
62. **"She looks at X. She looks at him."** (S1E08): the look-then-look double beat. Once per episode (Osei's crab double take was
   E08's). "Considers" counts toward it when stacked on the same character in one scene.
63. **"…the trouble" closers** (S1E08; three in one draft): count under #12 summing-up closers. E08 keeps Lena's "It's been a very
   good one. That's the trouble."
64. **One character's figure given to another** (S1E08): Lena's E04 "the way she does everything, all the way" handed to Becca twice.
   Character-defining figures stay with their owner; Becca and Lena never share a simile (the brief depends on the difference).
65. **Reaction adverbs on Becca** (S1E09; "delighted" 35× and "thrilled" 16× across E01–E09): "says Becca, delighted," "thrilled with
   him," "happily," "overjoyed," "glowing." Max two per episode; let her lines carry the joy. Her goodness is the knife, never the tag.
66. **"Jack can't read Lena's face"** (S1E09; four in one draft): "Her face doesn't do anything Jack has a word for," "he couldn't say
   what it's doing," "too quick to name." Once per episode; otherwise give her an action.
67. **Dialogue that opens on "Nobody…"** (S1E09; 45 openers E01–E09): every character's universal-negative aphorism ("Nobody saw it
   coming," "Nobody drives my grandfather's car," "Nobody threads that needle"). Max three per episode, narration included.
68. **"Somebody has to"** (S1E09; 24 uses E01–E09). Max one per episode.
69. **"Whole" as an intensifier** (S1E09; ~20 per path in one draft: "her whole face," "the whole cove," "the whole Grove"). Max six per
   episode. **"For once"**: max one per episode.
70. **Transit codas** (S1E10; about half the scenes in one draft): a scene ending on Jack's logistics to the next place (the bus, the
   elevator, the stairs, "he walks home the long way"). Max three per episode. **"Then the [noun]." sentence fragments** ("Then the 11
   bus." "Then the doors, and the cold."): max five per episode (~17 per path in one draft against 3–10 in E01–E09).
71. **Smell-inventory openers** (S1E10; 3–7 every episode since E01): "[Room] smells like/of [list]" in a scene's first or second
   sentence. Max three per episode, never two scenes in a row; rotate the opener among light, weather and smell (bible §4.2).
72. **"Then, quieter,"** as a dialogue lead-in (S1E10; E02, E04, E05, E06, E08 ×2, E09, E10 ×2). Max one per episode.
73. **Callback glosses** (S1E10): narration identifying where a quoted line came from ("It's Becca's own line, from the stool by the
   stove on Sunday," "her own line, from the laundry room"). Max one per episode; the player binges — trust their memory.
74. **"Chin on his fist" as the listening pose** (S1E11; E02, E05, E06, E07 ×2, E11). Max one per episode.
75. **"Hands / palm flat on [surface]"** as the default steadying gesture (S1E11; 3–5 every episode since E02). Max two per episode.
76. **Indifferent-world codas** (S1E11; 8–14 "goes on / keeps on" per episode since E04): "the sea keeps on," "the stars go on doing
   what they do," "the zebras go on grazing," "keeps coming onto the sand." Max two as scene endings per episode.
77. **"Like a girl at [event]" similes** (S1E11; E01 Jonas Brothers, E03 prizefight, E11 Wimbledon, cut). Once a season.
78. **Ring / velvet-box callbacks** (S1E11): Wes's ring as Jack's motive is narration only, once or twice per episode, each time a new
   image; never the E09/E10 "velvet box on a lace runner" wording again, never aloud, never named to Lena.
79. **"A rumor" for something obscured** (S1E11; E02, E05, E10, E11). Once a season.
80. **Superlatives with a geography tag** ("in America," "in California," "in American letters"; S1E11 had six): count under #49,
   max one per episode outside a character's signature line (Becca's "only honest fruitcake in America" is E11's).
81. **The costume look-over** (S1E12; seven in one draft): a character inspecting Jack (or anyone) head to toe, item by item ("looks him
   over: the feed sack, the rope belt, the hat," "takes them in: hat and hoe, glasses and bird"). Max two per episode; let the line land.
82. **"With great / enormous [noun]" comic gravitas** (S1E12; "with great tenderness," "with great dignity," "with enormous care"). Max two
   per episode. Laney's sunglasses get one adjective per episode, or none.
83. **"Before X can" pre-emption** (S1E12; seven in one draft): "before Jack can ask," "before he has to," "takes another bite before he
   can answer." Max two per episode (Lena's are hers to spend); counts with #23.
84. **"Walks [a distance] with / on it"** as the processing beat (S1E12; four in one duel): "walks three steps with it," "walks half a
   block on it," "walks the next block with it." Once per episode.
85. **The laugh that startles a bystander** (S1E12): Lena laughs out loud and a costumed stranger turns, wakes, sits up. Once per episode.
86. **Osei's delight tags** (S1E12; #65 applied to him): "entirely serene," "to enjoy what comes next," "enjoying every one of them,"
   "never once looked anything but glad." Max two per episode; let his lines carry the joy.
87. **"Which is how X" glosses** (S1E13; seven in one draft, plus E04 ×2, E05 ×2, E07, E09): the narration explaining a gesture and
   buttoning on it ("which is how he applauds," "which is how Gloria ends a conversation," "which is a kind of trust," "which is generous of
   her"). Max one per episode (E13 keeps Lena's "She is funny now, which is how Jack knows how bad it is").
88. **Door-closer exits** (S1E13; E07 had twelve "on its closer"): a door that "sighs shut," "eases shut on its closer," "swings shut on
   its felt" as the button on somebody leaving. Max two per episode; let the person go without the hardware.
89. **Reductive glosses on touch** (S1E13): "It's a shoulder. It's what the step has room for." / "It isn't that kind of holding. It's a
   hand." / "It isn't much to look at. It's what a man… has to give." The #10 "not X, it's Y" shape aimed at intimacy. Once per episode;
   the touch is enough.
90. **Decision recaps** (S1E13): once Jack has decided something on the page, later scenes re-explain it ("he spends it the way he
   decided to at six this morning," "at six this morning he decided not to say anything"). Trust the player who watched him decide; a
   later scene may show the decision acting, never restate it (a character may quote it back, once).
91. **Trailing "which…" commentary clauses** (S1E14; ~14 per path in one draft: "which costs her," "which Jack gathers is rare," "which means she
   was sitting beside it"): the narration glossing an action and stopping there. Max four per episode (#87's "which is how X" counts here too).
92. **"Lightly" as a delivery tag** (S1E14; six in one draft, "Then, lightly," twice — a cousin of #72). Max two per episode; keep it for the line
   where the lightness *is* the hurt.
93. **"Never once" / "has never once seen him do that"** (S1E14; four in one draft, two of them a talker going quiet). Max one per episode.
94. **"Stays where he/she/it is"** (S1E14; four in one draft; 3–4 in E02, E04, E10, E12). Max one per episode.
95. **Becca's "has never [X] in her life"** characterization (S1E14 ×3, E08 ×3, E09 ×2, E13). Max one per episode.
96. **"And goes in" as the exit button** (S1E14 ×4, E10 ×5). Counts with #88 door-closer exits (max two combined per episode).
97. **"Ask me [tomorrow / after X / again in a week]" deferrals** (S1E14 ×3 in draft). Max two per episode, kept for the lines that matter (E14 keeps Theo's "Ask me after Thanksgiving" and Lena's text).
98. **Phone-call silence beats** ("a silence on the line," "a pause in Breaux Bridge," "a silence on Glenwood Avenue"; S1E14 ×4). Max one per episode.
99. **"A sound like…" similes and "inside a minute"** (S1E14 ×3 each). Max one each per episode.
100. **"Doesn't ask" as the all-purpose tact marker** (S1E15; 9 in one draft, ~54 across E01–E15): "and doesn't ask what Jack is doing," "hasn't asked since,"
   "she doesn't ask him what's wrong," usually with a gloss after it. Max two per episode, kept where the not-asking is the point (E15: Lena at the bus shelter, Lena
   about Thanksgiving).
101. **Physical laughter overflow as the button** (S1E15; six or more per path in one draft): Lena grabs the rope to stay on the chair, holds on to the wall, puts her
   forehead on the table, slaps the table so the saint falls over. Max two per episode; otherwise let her top the bit in her own register.
102. **Light-goes-out endings** (S1E15): "the line goes out," the seals "go gray and then go out," a falling star "and out," "the dome light goes off," "the screen goes
   dark." Max two per episode (E15 keeps Delgado's door in s13 and the Ranger's dome light in s28c).
103. **"The voice [X] uses for [Y]" / named voices** (S1E15; a cousin of #52): "the voice she uses to call cattle," "the voice she uses for procedure, the voice from the
   beach cleanup," "his dinner-party voice," "his brightest voice." Max two per episode; never with an appositive second voice.
104. **"Out loud" as an intensifier** (S1E15; 10 in one draft; "laughs out loud" 17× across E01–E15). Max three per episode, kept where the volume is the point (a Glory Be
   at the TV, a deadpan prayer that carries to the pool table).
105. **Waits for more — "There isn't."** (S1E16; 8 "There isn't" buttons and 10 "waits for / waits to see" in one draft, against 0–2 per episode in E01–E15): "He
   waits for the bit. There isn't one." / "She waits to see if there's more. There isn't." Max one per episode (E16 keeps s19's "and she lets there not be").
106. **"X nobody Y" emptiness inventories** (S1E16; rising since E11): "a pool nobody swims in," "two ovens nobody has ever turned on," "a rowing machine and nobody rowing,"
   "a fireplace nobody has lit." Max two per episode; give rich rooms positive details instead (the plastic still on the dials, birch stacked for looks).
107. **Essence glosses — "because she's [Name]" / "because she can't help it" / "because of course she does"** (S1E16 ×4, E15 ×3; a cousin of #72). Max one per episode,
   never as a dialogue lead-in ("And then, because she's Lena:").
108. **"For a second"** (S1E16; 7–8 per path in one draft, three in one scene; E01–E15 ran 1–5). Max two per episode.
109. **The act-drop announced** (S1E16; Skye): negation inventories that tell the reader she has stopped performing — "She doesn't do a voice for it, or a face, or a
   joke," "no bit, no voice of any kind," "not the anchor, not the host," "it isn't any of the laughs she's been doing tonight." Six to eight a path in one draft. Skye's
   real drop is spent at most once an episode (E16: s21a, "And then she drops it"); everywhere else show an action (she caps the Sharpie, takes her thumb off his eyebrow)
   and never grade a laugh or grin against "the earlier ones."
110. **Draft-and-delete beats** (S1E17; five in one draft — s01, s02 ×2, s03a, s11 — after E16 ended on one). Jack types a text and takes it back out "a letter at a
   time." Once an episode, plus the send.
111. **"and means it" / "means every word" / "seems to mean it"** as a sincerity tag (E14 ×6, E15 ×4, E16 ×5, E17 heavier; a cousin of #53). Max two per episode; let the
   line carry the sincerity.
112. **"Then" as the default sentence opener** (S1E17 ≈25–30 per path; E16 higher). Max twelve per episode. Also **"the way [someone] [did]" comparison clauses** (a
   cousin of #26; ≈12 per path in E17) max five, and **"all of it" as an intensifier** once.
113. **The misread tell glossed** — "Jack figures / decides [the wrong reading]" after a fame tell (S1E17 ×3 in two scenes: "He figures she likes the dark end of things,"
   the kid at the counter, "Jack decides it's two in the morning"; a cousin of #13). Once an episode; let the player catch the tell. E17 keeps only s18's.
114. **Narrating Skye's inner state as fact** — "she means every word," "a line she means to understand later," "he watches her decide [X]," "they both know it." Give
   Jack an observation (her face clears; she smiles against his mouth and he can tell). "Watches her decide" once an episode at most.
115. **"The color of [X]" similes** (S1E18; ≈38 across E01–E18 — nickel, oatmeal, dishwater in one draft). Max two per episode; **"dishwater" is retired** (E10, E15,
   E18). Name the thing instead ("The window over the sink is gray").
116. **"Which in this [house / family / wind] means / is" local-custom glosses** (S1E18 ×3: "saved for report cards," "a decorative choice," "two hours and one hinge").
   Max one per episode; it counts under #91. Keep the one with a joke in it.
117. **"Nobody" relative clauses in the narration** (S1E18 ×8: "the one nobody asks Frank anymore," "a coffee nobody asked for," "the one place in the house nobody sleeps
   next to"; a cousin of #106). Max three per episode, and keep them off the scenes where "nobody" is the thread (Gina's "Nobody." oath; Skye's "I liked being nobody to
   you").
118. **"Without looking (up)" as a delivery tag** (S1E19 ×14 in one draft, three of them Kevin's in one scene; E03 ×4). Max three per episode; keep it where the not-looking
   is the point (Kevin's COSTIGAN — LEFT 4Q entry; Lena not looking at Jack after the Personal). Otherwise give the hand something to do or cut the tag.
119. **"It isn't a question." as a narrator's gloss** (S1E19 ×4; a cousin of #10). The line already carries its tone; cut the gloss. A character may say it (Frank's
   "it isn't a question") — the narration may not.
120. **The "has nothing to say / says nothing at all" button** (S1E19 ≈9; a cousin of #37 and #105). Max three per episode; never two in one paragraph (Frank was the father
   who "says nothing at all" twice in s04/s05).
121. **Skye's superlative-verdict formula — "the best/worst X I've ever gotten / that's ever happened to me"** (S1E19 ×8 in Skye's mouth alone; part of #49). Once an episode,
   where it pays off (E19 kept "the best no I've ever gotten" for the PM2 caption). Recast the rest as actions or a flat line ("I'm having that framed").
122. **"At four in the morning" as a figure** (S1E20 ×17 in one draft; E19 ×12, E10 ×13 — "a table read at four in the morning" repeated E19's
   *Questions Only* figure). Name the hour once a scene at most, as a clock time, never as a simile or a mood.
123. **Skye's "since I was eleven / since she was eleven"** (3–4 every episode E16–E20). Once an episode, where it pays (E20 kept s19's "I've been
   looked at for a living since I was eleven"); elsewhere "since I was a kid," or nothing. Never next to her body and money in one clause (Standards).
124. **"In her own voice" as Skye's act-drop tag** (E12, E18, E20 ×3; a cousin of #109/#103). Once an episode, on the drop that matters (E20: "*Jack
   Costigan*," s17). Otherwise just "she says."
125. **"That's the deal" / "deal"** as Jack's and Skye's shared button (S1E20 ×6 across s18a–s19a). Once a path; it is Skye's word (her "better deal
   than my industry," "Good deal") — Jack gets it only as her setup.
126. **The picture-text template** (E19 PM2 → E20 PM3: the phone "low at her hip, taking it," the face "not doing" a character, "looking straight out
   at whoever opens this"). Each picture gets a new camera action, a new specific expression, and how it arrives on a RAZR (stamp-sized, grainy, tilted
   to a light) before any detail. No "isn't doing [X]'s face" negation.
127. **"Considers [object]" as the default comic look** (rising E16→E21: 3, 2, 1, 4, 4, 7 per path; S1E21's draft had Osei and the refrigerator, Becca, the
   sprig, the sprinkler, Theo and the pocket, Laney and the hands, Skye and the fork). Max two per episode (E21 kept Osei's refrigerator and Theo's pocket); otherwise an action, or
   "looks at." Counts toward #62 when stacked on a second look.
128. **"Lets it go by / lets it be / lets that be the [answer / prayer]" as the tactful-silence button** (S1E21 ×5–6 per path; a cousin of #36 and #37). Max two per episode, where the
   letting is the point (E21 kept Skye's in s07 — she sees him skip the doorway — and s13b's "lets that be the prayer").
129. **The Saab exit as a scene button** (S1E21 ×5: "honks twice… and goes," the U-turn on Mission Street, "pulls his door shut herself, and goes," "around the corner before the light has
   changed," "goes south toward Studio City"; the same shape #27 caught with Lena's watched exit). Once an episode; keep it when the exit is her action (E21: s13's door-pull).
130. **A character's default listening pose** (S1E21: Skye's chin/head "on her knees" five times in s07c; cf. #74 "chin on his fist"). Once a scene; turn the rest into actions (she turns the
   jar, pulls the blanket up).
131. **"[N] years of [X]" credential bits** (S1E21: Skye's "EIGHT YEARS of gift bags," Kevin's "Seven years of Vietnamese choir," Margot's "Six years of Suzuki" — three speakers, one register
   of wit; #6, #25). Once an episode (E21 kept Kevin's: it's the reveal).
132. **"In the cold" as the default location tag** (S1E22: 15 in one draft against 0–3 in E16–E21; every s17 roof option left the unsaid thing "out in the cold"; "cold" overall ×69). Max three per episode; a
   withheld word can be left "on the parapet," "under the bulb," or nowhere at all. Watch "cold" overall (≈40 a finale is already a lot).
133. **", once," as the gesture's emphatic beat adverb** (E16 2 → E20 5 → E21 5 → E22 7: "laughs, once," "taps the card on the wheel, once," "nods, once," "shakes her head at the hills, once"). Max two per episode; the gesture is
   already singular (E22 kept Lena's laugh into her sleeve and Kevin's look across the party).
134. **"And nowhere else" as a focus intensifier** (E20 1, E21 4, E22 3 plus a journal carry: "eyes on the keys and nowhere else," "a little light along the edge of her jaw and nowhere else"). Once an episode (E22 kept s20's
   "The one eye is on the lens and nowhere else" — the frame depends on it).
135. **"Hold(s) on" as the default grip** (E22 ×11 in one draft; Julian's and Kevin's goodbye handshakes used the same beat scenes apart; hands "hold on" to wrists, rails, curbs, backs). Max three per episode (E22 kept touch One — her
   arm "holds on" — and the SBA hug "He holds on."); otherwise grips, takes hold, or nothing.
136. **Jack's grin as the default joy marker** (S2E01 draft ≈10 "grin(ning)" a path; nearly every Skye beat ended on it: "grinning at the little screen," "grinning at Glenwood Avenue," "the grin still on him," "grinning at it in
   the dark"). Max two an episode (S2E01 kept s03b's top step); give each joy its own action (squid thumbs and Theo's towel, the phone close to his face) — the double state needs Skye's joy fully true, not stamped.
137. **"Rather be here than anywhere" contentment closers** (S2E01: "nothing in him wants to be anywhere but here," "he could stand out here till Easter," "he wouldn't trade a minute of it"). Once an episode (S2E01 kept s08a).
138. **"Gives him/her [content]" as the summary verb for reported talk** (S1E22 ×16; S2E01 draft ×9+, s12b repeating E22's "gives her Glenwood Avenue back"). Max three an episode; otherwise tell it, start the inventory, or let the
   dialogue carry it ("Then godmother:").
139. **Truck silences measured in road** ("Frank drives a mile… Another mile," "for the length of an overpass," "A mile goes by," "Nobody in the cab says anything for a mile"). One road-distance silence an episode (S2E01 kept s01);
   use the wipers, the heater, Frank's thumb on the wheel, the salt truck.
140. **Frank's radio knob as his all-purpose reaction** ("turns KDKA up a notch," "turns the radio up"). Once an episode (S2E01 kept s05's "The twenty-seventh.").
141. **Per-scene stamps on Nonna** (her chin ×4 with "allows it"; Theo's cashmere over her knees re-established in ≈10 scenes; cf. her "good hand" in S1E18). One chin a scene; name a running prop only at its load-bearing points
   (S2E01: the cashmere at s02 arrival, s06a "*Lo sapevo*," s09 Theo seeing it, s17 Theo tucking it in).
142. **Furniture-limit gags** ("sits back as far as a bolted chair goes," "turns over as far as a chair allows" — S2E01 and S2E02 draft). Retired; give the body a real action ("crosses his arms over the state blues").
143. **"She hangs up first" as Lena's default call button** (S2E01 ×2, S2E02 draft ×4). One an episode at most; end on a sound ("The line clicks over to nothing," "The river goes, and then the dial tone") or on Jack.
144. **Phone perception — "I can hear [X]" through the line — is Skye's** ("I can hear it when you don't use your hand"). Lena never uses it, and Jack never uses it on Lena (#64); Maria's "I can see it" is in person and hers. Lena's register is the verdict and the margin ("You underline when you cheat").
145. **The "never said any of it… to anybody" confession tag** (S2E01 s05; S2E02 draft s08a narration + s08b choice, ahead of Skye's sanctioned "I've only ever done it"). Once an episode, and never in the same scene as a character's own first-time drop.
146. **Moonlight measured by the shadows it throws** (salt, parked cars, his shadow on the walk, breath vs smoke — four in one act in the S2E02 draft). One shadow-measure an episode (S2E02 kept s12a's walk home); otherwise the moon is just full, high, white.
147. **Nonna's breath "the long way out" as a per-scene stamp** (five times across S2E02 s03–s06a in draft; cousin of #141). One breath a scene at most; let the ornaments, the furnace or the chair carry her sleep.
148. **T9 / keypad jokes must use real same-key-sequence words** (S2E02 draft offered *cafe* for 2-2-7-3). *cape* = 2273 → *card*, *acre*, *care*, *case*, *bare*. Note that 7 (pqrs) and 9 (wxyz) are four-letter keys.
149. **The party door letting the noise out and in** (S2E01 "a door opens on a party two streets over and closes again"; S2E02 draft ×3 + the song "comes out the door with her and goes back in"). Once an episode (S2E02 kept s13 home); give other exits a different sound.
150. **"Don't tell [X] (I said)" as a shared coy button** (≈11 uses across Skye, Lena, Danny and Jack in the S2E02 draft). Max two an episode, Skye's (S2E02: "dont tell him i said that," "Don't tell anyone I said *worse*"); Danny commands ("Keep it that way"); Lena's Mémère shriek is the one Lena exception.
151. **Shared "read me" requests between the two women** (S2E02 draft: Skye "read me the next good part," Lena "Read me something," Lena "Read it to me" in two days). The read-aloud set piece belongs to one woman an episode; the other goes straight to performing or asks a different question ("What did I write in it?").
152. **Lena repeating her own line verbatim across a call and a text** (S2E02 draft: "so the year can see we tried" at dawn and again in the 12:00 text). A text is never a paste of the call; give it a new image ("carrying the chairs up the levee like the Ark").
153. **Relay lines ("Tell him/her…", "tell your daddy…")** as a texting button (S2E03 draft: a dozen across Skye, Lena, Danny and Frank). Max five an episode; a relay must carry information the receiver can use, not just a coy sign-off (cousin of #150).
154. **Bare-noun sound tags inside a speech** ("The cricket." / "The refrigerator." between sentences of one speaker's talk; S2E03 s03: five in one scene). Max two a scene; a speaker's speech is broken by an action or a reaction, not by naming the room's noise.
155. **Skye's barefoot stamp** (S2E03 draft: s14 and s19 repeated it). Max three an episode; give her a new physical tell for impatience.
156. **Measured "inch"** ("by the inch," "an inch at a time," folders and doors moving inch by inch; S2E03 s14a). Once an episode.
157. **Narrator's verdict button after a guess** (a character guesses; narration then rules "He's right." / "She is wrong."). Max one an episode; let the next line of dialogue do the ruling.
158. **Two speakers packed into one paragraph** (a reply and the answer sharing a paragraph break-free; S2E03 s18). A QA check, not a prose rule: every speaker change starts a new paragraph.
159. **"Then" as a sentence opener** (≈20 a path in S2E03 against the 12 under #112). Not swept in S2E03; swept in S2E04 (verify the path count stays at or under 12).
160. **"Square" / "squared" as the all-purpose verb and adjective** (S2E04 draft 27 across paths; swept to 9). At most 3 an episode.
161. **Clock-time sentence openers** ("At ten past one he...", "By 2:15..."; S2E04 draft 22, swept to 14). At most 6 an episode, and never restating the slug's time.
162. **"[X], and goes [back / on / out]" exits** (S2E04; swept only in part). At most 2 an episode; end a beat on the action or the line, not on a departure.
163. **The clipped "Then [imperative]." retort** (S2E04 draft 18, swept to 7; cousin of #159). At most 4 an episode, and never Lena's except the argued line.
164. **Identical post-choice tails** (the same closing beats pasted after each branch of a choice). Flag them for hoisting into a shared tail when the target scenes share a slug, time and place; S2E04 declined to hoist because the targets differ.
165. **"In writing" passed around as a shared joke** (Skye, Jack and Theo in S2E04). One owner an episode; give the others their own register.
166. **"[Era] administration" age jokes** (S2E05). Once an episode, and Theo's only.
167. **"Gets as far as [her mouth / the door]"** as an interrupted-gesture beat (S2E05). Once an episode.
168. **"In capitals" for written signs and texts** (S2E05). Once an episode.
169. **Skye "bites her lip on it"** (S2E05). Once a path.
170. **"All the way [up / down / through / around]"** (S2E05). At most 3 an episode.
171. **"The first X of the year" echoing a song title** (S2E05, Julian's "First of the Year"). Once an episode.
172. **Skye's "for the record" bit** (S2E05). One payoff an episode.
173. **"All at once" openers** (S2E06). At most 4 an episode.
174. **"He has learned / he knows" tags on reading Skye** (S2E06; a refrain in s01, s12, s15, s18, cut). One per Skye scene, and as an action (what he does about it), never as a tag.
175. **Rain as "sheets" or "ropes," and rain personified** (S2E06). At most 3 "sheets" an episode; vary the storm vocabulary scene to scene.
176. **One tick or knock source per episode** (S2E06: extra tick sources cut). Establish one, use it once more.
177. **Emotion placed "lower down," "under the breastbone" or in the "ribs"** (S2E06). Once an episode.
178. **Per-scene prop or costume stamps** (S2E06: the cardigan and the "level" egg stamps, trimmed). Name it once an episode, then let it go or change it.
179. **Fork tails that reach the same scene must hoist the shared paragraphs** (S2E06; extends #164). Check every `goto` target for pasted paragraphs before the fork text goes in.
180. **"Wet to the skin" in every storm scene** (S2E06). At most 2 an episode.
181. **A character's blush as a reaction stamp** (S2E07). At most 2 an episode.
182. **"Has opinions" object personification** (S2E07). Retire it; the couch got the last one.
183. **One owner per micro-gesture** (S2E07: mouth-corner, "face clears"). Give each small gesture to one character.
184. **Running-gag line with a stage-business tail** (S2E07: "Ten past… on his circuit"). At most 3 an episode.
185. **A catchphrase repeated as a bit** (S2E07: "I read ahead"). At most 2 an episode, and one must pay off.
186. **Every named landmark checked against the direction of travel** (S2E07: the Cuesta Grade is Santa Maria to Gaviota northbound; Pismo, King City, Burger King stop). Check before the line goes in.
187. **"He lets her [verb]"** (S2E08). At most 2 an episode.
188. **Theo's "short" delivery tag** (S2E08). One an episode.
189. **"Pleasant / pleasantly" as the mask word** (S2E08). At most 2 an episode.
190. **"She stops (there)" as an interrupted-speech beat shared by Lena and Skye** (S2E08). Give each her own beat (Lena: the pencil, the door); at most 3 an episode.
191. **Corinne "reads it off the pad"** (S2E08). Once an episode.
192. **A song "circling / going round"** (S2E08). Once an episode.
193. **The hand that comes down "flat," shared by Lena and Skye** (S2E08). Give it one owner (Lena); at most 2 an episode.
194. **The absent-conscience formula** ("nothing in him says anything back") (S2E09). Once an episode, and never to end a kiss.
195. **Retellings** (S2E09). Retelling an event to a new listener must add a fact or a new reaction; otherwise it is a one-line summary.
196. **Skye's touch as the button on every duel beat** (S2E09). At most 2 a duel.
197. **A borrowed garment as a scene stamp** (S2E09). Name it twice an episode, then "the jacket".
198. **The moon as the default light on bodies** (S2E09). One bodies-in-moonlight line a scene, three across a night run.
199. **The same punchline across scenes** (S2E09). One callback, and only with a change.
200. **The "she says it and waits" beat in heat scenes** (S2E09). Once per rung.
201. **Time-zone arithmetic** ("It's after four there") (S2E09). Once an episode; currently in s06a, s19h and s19s.
Note on #50 (S2E07): "a hand's width / a hand's breadth" is the same figure; count both together.
Small repeats to watch (S2E01): Lena borrowing Skye's coinages (#64 — "a whole thing" is Skye's from S1E22; "in order" is Skye's register, not Lena's: Lena says "Start at the stairs"); both girls' calls opening on the same demand or
asking "what did your mother say" (never template the two Christmas calls); the phone-call silence (#98 — one an episode: S2E01 spent it on the levee, plus the sanctioned near-say at the levee goodbye; Brentwood got a leaf blower);
"before X can" pre-emptions (#83, ≈14 a path in draft); trailing "which" (#91, ≈15 in draft); "the way [someone did]" (#112, ≈12 in draft); laughter overflow buttons (#101, 6+ in draft — characters top it in their own register:
"Do it again," "The *valets*," "*Allegedly*"); courtroom figures away from Lena (#11 — the Santa-hat officer "like a ruling," Gina's "for the record"); counted numbers (#1 — seven fishes must be seven on the table; 286 was Harrison's,
not the team's; "Seventeen days" from Dec 23 to Jan 9; Gina kept it thirty days by Christmas); the face-down Santa (establish once, spend once — S2E01: s02, the weather report, s16b's puddle); "Local 1112" (once — the bar);
snow "crust" (one a scene); Ma's dish towel (one a scene); "snoring in two parts" (S1E18's — once, s08); "sleeping weather" (S1E18's — retired); "He makes himself say the rest in order" (S1E21's confession — retired);
"Fourteen" as number noise (the Costigan stairs are just "the stairs"; Tariq's fourteen belong to Yusuf); defroster half-moons (once); Rosie's half-beat Gloria (once in narration).
Small repeats to watch (S1E22): the RAZR "finds its bar" (E05, E20, E21, E22 ×3 — once an episode, at the payoff; E22 kept Denver's "*Searching.* It finds Denver."); the power-off chime's "four notes going downstairs" (E20's
phrase — retired; E22: "four notes, high to low"); the oil platforms as "a town" (E12, E15, E16, E22 ×2 — retired after s07's "a town that came loose and floated off"); "two thousand miles" (once an episode — Skye's cousin speech);
the Café du Monde can (one can per episode — E22's is Lena's white-elephant coffee in Jack's duffel); the heater "like a hair dryer in another room" (E07, E10, E16, E18 — retired); "thinks better of it" (E11, E13, E21 — retired);
the sea "working at" rocks and pilings (eleven episodes — the surf breaks, pulls back, or is loud); "in no hurry" (Wes's vowels own it); "with tremendous dignity" (E02, E09 — retired); "an inch" (Lena's "didn't give an inch" at the
wake is the canon line; nobody else gives inches); "makes a small sound / noise" (six+ episodes — once an episode); "laughs into [collar / hair / shoulder]" (once per scene run); foreheads together (once an episode, at a goodbye);
transit codas (#70 — the outline's three); the narration stating Lena's reasons or perceptions on the last night (#114's cousin: "She sees it all on him," "they both hear," "She is very pleased" — show the hands and eyes only);
Lena citing an exchange the page never showed (her proofs must be scenes the player saw); props that move between paragraphs (the timer in the drawer, then "beside the timer").
Small repeats to watch (S1E20): speech addressed to objects stacked in the Skye act (#32 — "to the boot," "to the lit half of the window," "to the
Christmas lights," "to the jar of beach glass"; keep the one where her turning away is the point, s19 "to the wall"); Skye's "first/only/never"
verdicts (spend the superlative once — E20 kept "the only person who's ever told me no and meant it"); "laughs into his neck" twice in one scene;
Skye's "Don't" as a default deflection (three an episode; her deflection is a bit or a voice); Lena's holy-number litany (once an episode — E20 kept
"Twelve tribes… Matthias" in s04); "forty" as number noise around the forty buttons (buttons and the test room only); "like a man [doing X]" (#44)
and comic personification of weather, gulls, washers and bed frames (#25); transit codas ending Jack's scenes (#70); Margot "not writing it down" as a
button (spend once, as the payoff); Theo's heckles are pitches and loglines, never "that's what she said" shapes; Skye's genre-voice bits must not
borrow Theo's logline register (E20 swapped the trailer voice for a nature narrator).
Small repeats to watch (S1E19): one tick source per episode (the halyards ticked ×5 — establish once, spend once); a working lighthouse "comes around" — establish once, spend once (×5 in one draft); hazard-light orange on a face ×4; sea lions "arguing" on the bait dock (E02, E04, E16, E19 ×2 — give the harbor another sound); animals or sky that "bought a ticket / paid to get in"; the roaring heater (one car per episode); "palm / hand flat" (≈8; #75); "a while" (#61); Lena and Skye never share a figure ("Lutheran," trying a word on, cards, "the only question") — #64.
Small repeats to watch (S1E18): Nonna's "good hand" (≈17 in one draft) — once a scene, otherwise "her hand" / "her left"; Theo's bow from the waist (keep one an episode, where
it pays — E18 s04); "Theo in the middle" of the bench seat (the rule once, the payoff once); Theo noticing the phone and saying nothing (build it in three beats, not six);
"goes by" for passing scenery; Frank "with his eyes on the road"; phones "face down" (two an episode); turning an object "over in his fingers" (once); the buzz felt "in his
teeth / through the bone" (once); Lena's "Youngstown" (two a path, one a button); Skye's "ok/Okay" (three a path, held); "Counselor" is Lena's register — Theo titles people
by their role in the scene ("Madam Interpreter"); the river towns "strung in orange" (once a trip); "Then, [delivery]:" lead-ins (one an episode, under #72).
Small repeats to watch (S1E16): Skye's "Okay" as her default turn (three per episode, on acceptances); "looks at him like [comic simile]" for Skye (two per episode — her
reactions are things she does); Skye trying a line in her mouth (establish once, pay once — E16 keeps s16 and "snares"); one character per bit (the game-show host was
spent four times in one draft — rotate: librarian, tent preacher, ring announcer, weather girl, audio guide; never a judge, which is Lena's, or a pageant host, Laney's);
"pageant" figures in the narration for Laney (one per episode — E16 keeps s10's director; give her glamour threats in her own mouth); Lena's "Don't you dare / don't tell
Laney" (once an episode — the clap); the platforms "burning" on the horizon (twice a beach); "There's no moon" (once); the heater "roaring at their shins" (one car per
episode — the rule is Skye's); the cold down the back of Jack's neck (once, where it's earned); "the color of wet sand" and "soft as a dish towel/dishrag" (one fabric
figure each); speech addressed to the ceiling (Laney's, once); "as if / like it's" substitutes count under #60; Theo's "with no irony at all" (the bible's short list only:
*Point Break*, the Madonna Inn, Poppy); consecutive scenes repeating an inventory (Jack's soaked clothes: once, in the room where someone sees them).
Small repeats to watch (S1E17): Skye's total-presence figure (the lights in a room switched off one at a time till only he is lit — E16 s17, E17 s18a; retired
after E17); Lena's cold props (Kleenex ≈19 in one draft — one prop beat per scene; "points the Kleenex at him" once); the tick source (one per episode: establish, use once
more — E17's is the Anacapa lamp); "Ohio" as Skye's vocative (it was Wes's; three per episode where it lands — E17: the orphan text, "Go home, Ohio," the caps); "two at
a time" on stairs; "about once a semester"; the cup turned by its handle (and the E04 quarter-turn); Margot's notebook/timing (#30 binds: E17 spends only the
whiteboard); Kevin's "Respectfully" (once a beat); the exit coda "stands where she left him until he can't hear the engine" (retired; also the taillight, once a
scene); "Somebody has to" (#68) and geography superlatives (#80) — one each; lips summarized ("thinking about her mouth" ×4 — after the reverie, one new specific per
scene); callback glosses for the bingeing player ("it's the window seat again," "he asked her for that in a parking lot") — #73, keep one (E17: the Cassidy click).
Small repeats to watch (S1E15): the untouched drink (Lena's Bastille coffee, the Corona, Laney's mimosa, Lena's mug — one is the trace; the others must not be "full"); the
heater/toaster/espresso tick (one source per episode, established once and used once more — E15 gives it to the Ranger); "twenty-four hundred miles" (once an episode);
"one degree" cooler/off (once); ranch figures in the narration at Becca's joy or grief (her own lines only — "farm hand's grip," the calf's ear tag and the feed bill were
cut); "Hale's reader" as the full epithet (name it once, then "the reader"); the pink envelope sliding out by accident (once); "homework" figures in the narration ahead of
Becca's own line (none); "perfectly courteous/friendly" for a fixed-pleasant mask; "not X, it's Y" in Lena's facts ("It isn't superstition, it's French history" — cut);
recaps of a decision already shown (#90: "He did that honest… in a truck with the heater running" — cut); a falling star as a sign from heaven (cut; one per sky, and not
at a decision).
Small repeats to watch (S1E13): Lena's hand to the medal (budget it to the lie-tell; nine straight episodes of "her hand goes to the
medal"); "the oatmeal cardigan" (name it once, then "the cardigan"); "the one angle where the screen lights" (retired after E13);
"for exactly as long as it takes to" (E02, E04, E11, E13 — retired); Gloria "comes down the counter with the pot" (E04, E11, E12, E13 —
give her a new entrance); sunlight that "lies down" a long room; "warm from her" (once an episode); "the first real cold" (once); the
suppressed laugh built from stock parts (#14: "before she can stop it," "the back of her wrist," "when she can").
Small repeats to watch (S1E12): the clock — **2:00 a.m. happens once** at a DST fall-back; only the 1 o'clock hour repeats (never "the
second two o'clock"); Lupe's "Para los novios" / "We're friends" / "Claro" (E08 — a callback must move); Lena's untouched champagne
(observe it once, pay it once); the Act Three tableau (barefoot, saddle shoes in hand, the yellow line — establish, spend once more);
Theo's "says, short" (#22 — the short register shows in the line, not the tag); "considers / regards / surveys" (#62); Laney's pageant
formula ("And our next contestant," "Her talent is *being X*" — retired for a few episodes; use the judges, the sash, Miss Congeniality,
the swimsuit round); "Between [the pair], [one combined thing]" epigrams (#47 — one per episode); Laney's blessing gag (two blessings an
episode, never a narrator simile that makes the rite the joke); ranch/county-fair similes at Becca's joy (her own lines only); Kevin's
white mask (one image — point at it twice, not eleven times); "sugar" (one per episode) and "fireman" (one); the "It's true" sincerity
tag (once); callback glosses (#73).
Small repeats to watch (S1E11): weekday shorthand across a weekend ("Thursday" on a Sunday means three days ago — anchor to the event:
"the bells," "the library"); Caleb's "Selah" (E10) and "looks betrayed by it" (E02) — give him new reflexes; the candle flame leaning
in a draft as a closer (E04, E11 cut); the heater/radiator/shutter tick as a beat marker (establish once, use once more); "the six of
them" (once); Kevin "leaning over the wheel" (once); a meteor "comes loose" (one per sky); "Theodore" is Laney's (Lena says "Theo");
"Costigan" is not Laney's word ("fireman," "sugar," "Jack"); "It isn't a joke" sincerity tags; Margot not writing as a button (spend it
once, as the payoff); "Then [noun]." fragments still drift high; "the long way" (E10 tic #70, seven in one E11 draft).
Small repeats to watch (S1E10): dawn colors "pewter" (E01, E03, E06, E07, E09, E10) and "the blue at the bottom of a gas flame" (E09,
E10) — find new dawns; "something crosses her face" (retired after E10); "with her whole body" (once a season); "hands at ten and two"
(retired); the prayer "like a man talking to someone in the next room" (the bible's description — retired from prose); eucalyptus
(two a scene, max); "Lena's green sweatshirt under the oatmeal cardigan" as a formula (once an episode); "on its slow arm" for doors
(once); Priya "over the orgo text" and Marcus "asleep over orgo" (once each); "Ziploc" (spend it); stacked teeth-holds (LG, flashlight,
highlighter in the teeth — one per episode); "his brother's jacket" as an epithet (name the Carhartt once, then "the Carhartt" or
nothing); "kindly" as a delivery tag shared by Lena and Becca (never both in one episode); "four hundred" (twice a scene); Theo's
"option it" (once an episode; give him loglines and pitches; he lies at length, tells the truth short).
Small repeats to watch (S1E09): the moon laying a road on the water (once an episode); "in no hurry" (Wes's vowels own it); "the real
one / her real smile / a real one" as a sincerity stamp; "the four of them"; Hale's Williams in the back pocket (the inventory epithet
— once or twice an episode, where it pays); "scuffed (black) flip phone" (once); Wes's chipped tooth (introduce, then farewell only);
Wes's "Ohio" (~8 a path), "podna" and "dawlin'" (≤4 each) — spend them where they land; feet that stop swinging (one per path); Kevin's
napkin as the scoring button (one); "pageant" as Laney's label (give her the register instead); "Lena goes still"; "the kitchen /
booth / room" as addressee (#32 covers it).
Small repeats to watch (S1E08): the landing window "opens its six inches" (spend once an episode); the RAZR "buzzes itself toward
the edge"; "the one angle where the screen lights" (E01's phrase; once an episode); Lena's laugh "coming up the concrete" (E07 owns
it); stairwell door bangs as a scene ending (retired with the footsteps); the Driftwood cats (once an episode, give them a new
action); a stranger's highlighter (one joke); "pink to the hairline" (E03 Laney, E06, E08 — retire); Gloria's role-naming glosses
("the one you bring home to your mother" is the brief's own tag — never in a character's mouth); ranch-comedy similes at Becca's
devotion ("as if a cow had been sold at a fair price") — her goodness is the knife, never the joke; Lupe's gold tooth (once); Becca's
"Okay! Yes! *Okay.*" (once per scene); "Jack knows where the margin is" (spend the suspense once); "exactly" (max five).
Small repeats to watch (S1E02): Laney's pageant wave is "wrist, wrist, elbow, elbow" (pilot order; spell it once per
episode); "in installments"; "Of course"; "a real one" for laughs; the fixed-smile-as-mask (Laney's neon sign is hers,
Kevin's tell is speed); hand-to-heart "as if shot"; "for no reason he could defend"; "no bit" as shorthand for sincerity;
the lighthouse "with nothing in it" as a closer; weight figures (carry / set down) for confession and grief.
Small repeats to watch (S1E03): the near-touch restraint beat (one "what it costs" sentence per episode); "first ring" /
"first try"; "informs"; "in that order"; "delighted" for Lena (find a specific verb); "flat and white"; the surf "coming in
and going out"; "has never been so [adj]"; "without being asked"; the fixed-pleasant mask for Theo ("perfectly pleasant");
Lena laughing "head back"; "a real one" for laughs; the tin ticking in her pocket (once or twice an episode).
Small repeats to watch (S1E05): "Noted" as Lena's crutch (spend it once, ideally as a callback); "allows it" (Lena, Laney,
Kevin all "allowed" in one draft); "face down" for phones and books; "comes up into her face"; Lena taking things "in both
hands" (keep one, the holy one); Hale's wine-stained cuff (once an episode unless it changes); Hale's 1:07 entrance; Yusuf's
head on/off his arms; the radiator knock as a beat; "spine still white"; "squared up for October"; the stalled ship;
"for a while"; Lincoln–Douglas-at-thirteen; the Greek-participle simile for Lena studying Jack (one per episode).
Small repeats to watch (S1E06): the freight beat (E04, E05, E06 — rebuild from new parts or skip it; never "two long, one
short, one long," "steel on steel," "a share of the weight," "since he was six," "thins"); Lena's head/chin "on her knees"
(stage a pose once); the vocative "Costigan" in Lena's mouth (fight register, the VERBATIM lines and the tag only — "Jack"
when it matters, "Youngstown" for flirting); a sensory anchor used as a beat marker (the tower shutter: establish it, use it
once more); "the Williams" as the back-pocket inventory; "exactly"; "fireman" (two a scene) and "sugar" for Laney (give her
fresh lines in her pageant-host register); weather similes (Danny's "like I'm the weather" owns the image in E06).
Small repeats to watch (S1E07): Becca's "rosary wound twice around her wrist" and the braid description in every Becca
scene (once each per episode; never "thick as a bell rope" again); Laney's "fireman"/"sugar" (one each per episode); "the
same words in the same order" claims (quote the earlier episode exactly or don't claim it); "would give a good deal";
"without any music in it" (the voice-stripped figure); the same exit gesture ("one hand on the doorframe/frame") across
episodes; "a second longer"; "on top of the blanket in his clothes" as the sleep shot; stairwell footsteps fading as a scene
ending; profession voices for Lena reading ("like a lector").
Small repeats to watch (S1E04): Lena's thank-yous (spend "thank you" sparingly in her mouth; save the plain one); the
voice-stripped-to-sincerity figure ("all the New Orleans goes out of her voice," "the Oxford worn off it," "the voice with
nothing on it" — once per episode); Margot looking "over the black frames"; "goes still / not a flinch" for Lena; the
"owes him money" simile; "reading somebody else's mail"; tide similes; the quarter-turn of a glass; Priya's bureaucracy
figures in the narration (let her own lines carry it); "doesn't say anything" as the default reaction; medal touches beyond
the budgeted thinking/lying beats; "dark kitchen" for the Anchor seen from the pier.

Small repeats to watch (S1E21): Osei's physician figures (12 "doctor," 9 "patient" in one draft — "the doctor first / has stepped out / again," "removed from a patient";
about three an episode, carried in his own lines: E21 kept "I prescribe daylight" and "I don't diagnose at parties" — never narrated as a mode switch); narration borrowing Skye's showbiz
register ("a professional with a note she can play," "walks back to the tape for another take," "as pleased as if she's been cast," "like a line she has been given too early" — keep it in
her mouth; Jack's narration uses his own frames); courtroom words in Skye's mouth ("Exhibit A," "evidence" — #11, Lena's); "Youngstown" in Lena's mouth (cap two a path, one a button — in the
withdrawal stretch "Jack" is the word that hurts); "without turning around / not turning around" (#118; keep it where not-turning is the point); Laney's "in mourning" (once) and "fireman"
(one a path); "Nobody…" dialogue openers (#67); the "only time all night" claim must be literally true — route the rest of a withheld person through sound and the edge of the eye; the
"to the letter" limit stated once in narration, never re-explained (no procedural consent beats); a heat step must name what is new against the last scene (E21: the jeans; her ease;
the duration), never re-describe the previous rung's beats.

Small repeats to watch (S2E02): Danny's laugh (one big one a visit — at the officer's newspaper; the rest are lines); "four feet" for Nonna's distance (once, in dialogue); "parked in his cheek" for Fr. Dom's cough drop (once a season now — six in S2E01); "buttons her coat to the top" for Ma; "underlined it twice" (Lena's *spoiled* owns it); "a letter at a time" (#110's erase); "as if it might go off" for phones and cups; "the step creaks" as a beat marker (#98 cousin — set a sound up once, spend it once); "forty" as the party number (Kevin's thirty-one; "everybody down there"); callback glosses that explain an earlier episode to the player (#73 — "Jack has seen that face once for real…"); a counted claim ("Pop came in four times") must match the entries on the page; side-door "Be careful" is **Christmas afternoon, hand on the frame** — quote the published scene, not the rain on the step.

## Episode pipeline
1. Orchestrator: read save (`ArtifactData get saves/main`), write `saves/after-<ep>.json`; notes session with the player.
2. Showrunner plan, then Researcher period sheet (parallel), then Architect blueprint.
3. Writers draft acts in parallel (the Romance Writer takes the Jack/Lena-heavy act or scenes).
4. Assembler merges and validates.
5. Review board in parallel (Continuity, Knowledge, Voice, Line/Tic, Standards & Spoiler, Mechanics).
6. Head Writer revises; validator; canon ledgers updated.
7. Orchestrator: build, random-playthrough smoke test, publish to the same artifact URL, commit and push.
