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

## Episode pipeline
1. Orchestrator: read save (`ArtifactData get saves/main`), write `saves/after-<ep>.json`; notes session with the player.
2. Showrunner plan, then Researcher period sheet (parallel), then Architect blueprint.
3. Writers draft acts in parallel (the Romance Writer takes the Jack/Lena-heavy act or scenes).
4. Assembler merges and validates.
5. Review board in parallel (Continuity, Knowledge, Voice, Line/Tic, Standards & Spoiler, Mechanics).
6. Head Writer revises; validator; canon ledgers updated.
7. Orchestrator: build, random-playthrough smoke test, publish to the same artifact URL, commit and push.
