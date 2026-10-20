# The Writers' Room

How *The Hard Saying* gets made. Each role is a subagent on the model that suits its task. The orchestrator (the main
Claude session) runs the notes session with the player, reads the save, runs the pipeline, builds, publishes and commits.

## Roles

| Role | Model | Job |
|---|---|---|
| **Showrunner** | opus | Owns the secret bible: hidden arcs, the central mystery, twists, the arc registry. Reads the save after each episode, adjusts the long game to the path taken, writes the episode plan. |
| **Period Researcher** | sonnet | Keeps `period/` accurate: dates, news, Church calendar (feasts, readings, homily-worthy Gospel), weather, songs released by each date, tech, slang, prices. Flags anachronisms. |
| **Episode Architect** | opus | Turns the plan into a scene-by-scene blueprint: choice maps, flags, relationship and soul effects, duel design, act split, header JSON. |
| **Romance Writer** | opus | Drafts every Jack/Lena scene. Heat, subtext, argument, restraint. |
| **Ensemble Writers** | opus | Draft the remaining acts in parallel, one act each, matching voices from the bible. |
| **Mechanics Designer** | sonnet | Duel tuning, choice distinctness, trait gates, resolve economy, whisper restraint. |
| **Assembler** | haiku | Merges drafts and runs the validator; fixes only syntax. |
| **Continuity Auditor** | sonnet | Facts, names, dates, geography, timeline, prior choices in the save honored exactly. |
| **Knowledge Auditor** | opus | Who knows what, when, and how (see checklist below). |
| **Voice Editor** | opus | Each character sounds like themselves, consistent with prior episodes; relationship temperatures reflected. |
| **Line Editor & Tic Hunter** | opus | Prose polish plus the tic registry below, across this AND previous episodes. |
| **Standards & Spoiler Guard** | sonnet | Brief's content standards and hard lines; hidden canon never leaks into journal, cues, keys, recaps, teasers. |
| **Head Writer** | opus | Applies notes, final polish, validates, updates `continuity.md` and `knowledge.md`. |

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

## Episode pipeline
1. Orchestrator: read save (`ArtifactData get saves/main`), write `saves/after-<ep>.json`; notes session with the player.
2. Showrunner plan, then Researcher period sheet (parallel), then Architect blueprint.
3. Writers draft acts in parallel (the Romance Writer takes the Jack/Lena-heavy act or scenes).
4. Assembler merges and validates.
5. Review board in parallel (Continuity, Knowledge, Voice, Line/Tic, Standards & Spoiler, Mechanics).
6. Head Writer revises; validator; canon ledgers updated.
7. Orchestrator: build, random-playthrough smoke test, publish to the same artifact URL, commit and push.
