# S2E21 "LAETARE" — CONTEXT PACK (writers' room only; hidden canon inside — never surfaces on the page, in a cue, key, previously, logline, nextTime or choice text. THE JOURNAL IS RETIRED: no journal array or card anywhere.)

Built INCREMENTALLY from `drafts/s2e20_pack.md` for the writers' room of *The Hard Saying*. Every later agent reads THIS instead of the 1 MB bible. Plan of record: `writers/outlines/s2e21.md` (rev. 1, 2026-11-02; the Episode Architect's §2B will win on any conflict once written). Its §5 THE CONDITION, §6 THE FIRST SESSION (the pitch, Low Tide and the gown, the duel `cat1`, the verdict, counters) and §7 THE FORUM are pasted verbatim in §4.1; §8 (date #2) is pasted verbatim in §4.1b; its §0 (dates/shape/entering state), §1 (directive map), §2 (beats), §3, §4 (previously/nextTime/end card/header), §9–§16 (characters, chunks, state, save-dependencies, knowledge, tics, period, handoffs) are the scene-level source and are NOT pasted except the short digests in §5/§6: read them in the plan. Save: `saves/after-s2e20.json` (S2E20 PLAYED; read flat).

Hard rules (binding on every agent): frank, literary heat, never pornographic mechanics; everyone in any sexual content is 18+; no sex for Jack or Lena with anyone; no procedural consent beats unless a scene would otherwise read as assault; never mock the faith; no strawmen; Jack and Lena never die. **THE JOURNAL IS RETIRED (player, 2026-10-30):** write no `journal` arrays or journal cards in any scene, choice, blueprint or brief; key lines ("Story so far") remain and carry the recap as complete, spoiler-safe second-person sentences. Older excerpts below that mention journals are superseded. Do not touch anything outside `hard-saying/`; do not run git.

Sections: 1 PLAYER DIRECTIVES · 2 STYLE · 3 VOICES · 4 HIDDEN CANON (🔒) · 5 ARCS AND SEASON MAP · 6 LEDGERS · 7 TIC REGISTRY · 8 PERIOD. Each excerpt is tagged `[SOURCE § heading]`. Sections 1, 2, 4 and 7 are verbatim; 3, 5, 6, 8 are tight digests (the source wins on a conflict, except where §1.0 supersedes).
Changes vs the S2E20 pack: §1.0 rewritten for S2E21; §1.3 EXTENDED through **"After S2E20"** (newest, in full, with the CORRECTION) and PRUNED of date #1's spec (played); §2 unchanged; §3 re-cast (Skye in full — the campaign begins; Hale, Caleb in full; Ed/Connie/the Dean added; Clare, Fenner, Gloria/Rudy short); §4 = this plan's §5/§6/§7.2–7.6/§8 + bible S2E21 notes + registry #92–#93 (S2E20 specs dropped, played); §5, §6, §8 refreshed; §7 re-copied (registry grew to #291).

---

# 1. PLAYER DIRECTIVES

## 1.0 PLAYER NOTES FOR THIS EPISODE (from the orchestrating task; binding)
- **Player after S2E20 (brief "After S2E20", newest entry, §1.3): "Good to have Skye back."** plus the S2E21 answers and the CORRECTION, all pasted in full in §1.3.
- **PROCESS: the notes session with the player is COMPLETE.** Every agent, including Assembly, runs its full step now; do not pause for a notes session.
- **MAIN TIMELINE (ignore `hard-saying/fork/` entirely).**
- **THE JOURNAL IS RETIRED:** no journal arrays anywhere; key lines ("Story so far") carry the recap.
- The period sheet `writers/period/s2e21-mar8-14-2010.md` already exists (extend only if needed). If the bible already has a partial S2E21 revision from an interrupted run, revise it rather than duplicating.
- **S2E21 'Laetare', Mon Mar 8 – Sun Mar 14, 2010 (Laetare Sunday, Luke 15: the prodigal son; rose vestments), per the bible season map and S2E20's handoffs.** Read the end of `writers/brief.md` from "### After S2E07" to the end IN FULL (newest entries win). Binding:
  - **THE CATECHISM CAMPAIGN BEGINS** (Skye's design steps 6 and 8 and "S2E21 answers"): Skye buys herself a Catechism and argues it with Jack one section at a time, **STARTING FROM THE BEGINNING AND GOING IN ORDER** (Part One, Section One: the desire for God, how God can be known...), here for the whole thing, unworried how long it takes; each session is an argument **DUEL with Skye as opponent** (scored rigor/wit/heart; she wins some; distinct register from Jack–Lena duels: improv, actor's logic, sincerity under performance; real philosophy on both sides; never a strawman; Jack doesn't always win); track the campaign with cumulative counters (e.g. `skye_cat_jack` / `skye_cat_skye` and a section counter `cat_section`) so future episodes continue in order; her aim: argue into understanding, so either she's persuaded of his faith or he's dissuaded; their regular coffees and studying for the shared class continue; her FIRST SESSION outfit is obvious and funny (outrageous for a coffee shop; they both know; she says so; argues brilliantly anyway; never touches him).
  - **JACK TELLS LENA FIRST, the same day, before anyone else can; LENA tells JACK her condition:** if Skye ever makes a move, the meet-ups stop (calmly, and isn't calm); Lena isn't thrilled but doesn't make it a thing; no Lena jokes about Skye yet.
  - **CRITICAL CORRECTION: JACK DOES NOT TELL SKYE THE CONDITION in this episode; Skye does not know it exists;** the "I can work with that" reveal scene happens MUCH LATER, after several meetings (not in S2E21): **do NOT stage Skye reacting to the condition or saying "I can work with that" about it here.**
  - Jack and Lena: dating, kissing frequently, heat very slow; not official until the Easter Vigil. Lent continues. **Kevin NOT in the alliance.** Player's S2E20 path: `saves/after-s2e20.json`. **Length ~22-26k words per path. No corners cut.**
- **The plan of record is `writers/outlines/s2e21.md` (rev. 1, 2026-11-02); its specs are pasted in §4.1.** Rulings: Tue Mar 9 the pitch and (same afternoon, Sandoval Hall 1's empty stage) Jack tells Lena first; her condition verbatim — **"Then here's mine." / "If she ever makes a move, it stops. The coffees, the book, all of it. Promise me." / "I promise."** — Jack does NOT tell Skye; nothing in any Skye scene, key, cue, previously or nextTime alludes to a promise or condition; Wed Mar 10 session 1 (¶27–30) at Low Tide, the gown, duel `cat1`, counters `skye_cat_jack`/`skye_cat_skye`/`cat_section` 1/`cat_sessions`; Thu the Forum (Lena wins); Sat date #2 Mission Lanes; Sun Laetare and Skye's text. **No "love" between Jack and Lena; nothing hints at Theo's off-page call; "I can work with that" appears nowhere.**
- **E20 nextTime (all four) to pay:** "Rose, for one Sunday." (s16) · "Miss Broussard has the floor." (s11a) · "Something small, and his." (s15–s15c) · "One section at a time." (s04).
- **Hard rules (every agent):** frank, literary heat (never pornographic mechanics); everyone 18+; no sex for Jack or Lena with anyone; no procedural consent beats unless a scene would otherwise read as assault; never mock the faith; no strawmen; Jack and Lena never die.

## 1.1 CONTENT STANDARDS AND SHOW FORMAT

[brief.md L170–183 "Content standards"]
## Content standards
- **Explicitness:** the player asked for the narrative to be as graphic, explicit and unflinching as permitted, always in
  service of character, story and emotion. In practice: sex, desire, bodies, drug use, violence, addiction, overdose,
  death and grief are written frankly, with real sensory and physical detail, at the level of literary fiction or
  HBO drama. Sex scenes can be on the page and charged, but they are written as literature (emotion, sensation, the
  specific people), not pornographic mechanics. The ensemble's sex lives are shown frankly (Euphoria-honest): the fun,
  the morning after, the loneliness. Neither preachy nor glamorized.
- **Everyone in any sexual content is an adult (18+).** All freshmen are 18 or older; say so in the bible.
- **Sexual assault** may be a storyline, handled seriously and centered on the person's experience and aftermath.
  Never titillating, never a cheap twist.
- Addiction and overdose (someone may not make it), death and grief, crime and violence (a mystery thread) are all allowed.
- **Hard lines:** the narrative never mocks the faith (critics can be sharp and right; the story never sneers). No cheap
  villains or secular strawmen; everyone has their reasons. **Jack and Lena never die.**



## 1.2 STANDING AND CHARACTER-RELEVANT BRIEF ENTRIES (verbatim, in brief order; pruned to entries that still bear on S2E20; brief wins over bible on any conflict; newer entries in §1.3 supersede older ones here; any journal wording is superseded by the retirement notice)
- **Faith tests: bent, never broken.** Grief, scandal and argument shake both of them, but neither ever truly stops
  believing. The tests are about *living* it (fidelity, temptation, anger at God, the Church's failures), not whether it's
  true.

[brief.md L215–215]
- **Explicitness, refined.** "As set, dialed up": frank, literary, on the page when the story calls for it, a notch
  more than so far. **POV stays Jack-only** (confirmed: no other POV has been used). Never cut to another character's
  POV just for a sex scene. The ensemble's sex lives appear as Jack witnesses, hears, or lives the before and after,
  and in Jack's own scenes when they come.

[brief.md L346–353]
- **HARD RULE: neither Jack nor Lena ever sleeps with anyone else.** Not with Wes, Julian, the tryer, the magnetic girl,
  the magnetic guy, or anyone. Sleeping with someone else would undermine the entire premarital-temptation arc when they
  are finally together: their first time (whenever and however the player's choices make it happen) is with each
  other. Kissing, making out, real physical temptation and near-misses with others are allowed and can be charged; the
  line holds short of sex, and the resolve system should make it cost something. No backstory sex either: neither has
  slept with anyone before the series. **No sexual assault or rape in either of their backgrounds** (or happening to
  them during the series). Other serious wounds are fine: family rupture, grief, violence, addiction in the family,
  crime, illness, emotional or other non-sexual harm from a past relationship, faith crises, and so on.

[brief.md L370–372]
- **No consent beats unless needed (player, standing).** Going forward, **don't write explicit consent beats** (asking
  permission, checking in, "is this okay," narrated pauses for consent) **unless the situation would otherwise read
  as sexual assault.** Desire, mutual escalation and Jack's "no" stopping things remain as written; it's the
  procedural check-ins that go. Supersedes any earlier "consent guard" phrasing that called for on-page beats; the
  hard rules (no coercion, no assault, the line never breaks) are unchanged.

[brief.md L1319 "Skye and Jack: keep the whole mix"]
- **Skye and Jack: keep the whole mix, every episode she's in (player; standing through the end of their
  relationship).** The relationship is **sex appeal + intellect + wit/playfulness + unrestrained fun**, all four, all
  the way through. **Jack is falling for her hard, and for every part of her**, and **she is falling for him too.**
  Never let the heat/resolve thread crowd out the arguments, the jokes, the dares and the plain joy of being with
  her. Each Skye episode should carry at least one beat of each (Voice Editor and Showrunner check this).
  - **CORRECTION: Jack is not lonely (player).** He loves Lena and is hurt he can't be with her, but **Skye is
    entirely different from Becca: Jack *wants* to be with Skye.** He enjoys her company, enjoys doing things with
    her, and enjoys **learning about her, body and mind**. Never write Skye as a consolation or a cure for loneliness.
    **Osei's tenderness in E21 speaks to that**: he hears a young man who genuinely delights in this girl and is
    trying to do right by her, and speaks to the real good in it (love wills the good of the other) more than to the
    sin, which is exactly why the occasion is so dangerous.



## 1.3 BRIEF, "### After S2E07" TO THE END (newest entries; binding; PRUNED of entries that are played or no longer bear on S2E21 — the full text is in `writers/brief.md` L1946–2359; dropped as not bearing: After S2E07, the New Orleans arc contact rules, the porch's content bullet, the near-kiss, Mardi Gras item 1, Hale-notices, the S2E18 answers, the Julian co-design, Deepwater Horizon, the S2 finale, the asking and its refinements, the tabloid bit, the proxy fights, the S2E08/S2E10/S2E14 patches, and Date #1's spec (PLAYED in S2E20)) [brief.md L1946–2359]

### After S2E10 (player feedback + S2E11 answers)
- **CORRECTION (player): Kevin is NOT in the secret alliance.** The alliance is **Theo and Laney**. Kevin has told them
  "Respectfully, leave it alone" repeatedly throughout, and keeps getting **dragged along with their antics anyway, same
  as Margot.** Never list Kevin as a member, never have him scheme, recruit or report for it; he can be present,
  unwilling, and dry about it. (Fix any earlier brief/ledger wording that bunches him in, e.g. "the alliance (Theo,
  Laney, Kevin)".)


### After S2E11 (player feedback)
- **Feedback:** "Great episode!" The player left Skye's darkroom "No." as written (subtle, reasons in pieces).
  The player is "very sad about the beginning of the end of the Skye era": **honor that.** Skye's exit (the breakup on
  the porch, the anger, the campaign, the friendship later) must be written with full love for her; she leaves the
  story as magnificent as she entered it, and the player should feel the loss.

### Season 2 back-half decisions (player, during S2E12 production)
- **Skye's line moves to her RETURN** (the quieter "sit somewhere and explain it" talk, not the porch): *"I just
  thought I'd be better than her at something. Explain to me, slowly, why it took you a parade."*
- **SKYE'S LONG ARC (player; supersedes "not close" and "let it find its level").** It's hard, and it's **clearly still
  part of her fight to get him back**, but **Skye and Jack end up friends by the end of the spring semester (S2) and
  going forward, and eventually close friends.** **She never joins the friend group** (not much of a change: she has her
  own very full life), **but she makes time for Jack and Theo.** She stays a **recurring character throughout the
  game**: her efforts to get Jack back **continue loosely for a very long time**, and even after that she is **still
  around every so often.** (Lena's dislike stays honest; nothing physical; never at Lena's expense; the hard lines
  hold.)
  - *(Long-term arc, not this episode: Skye's Flannery O'Connor biopic — a fictional film; never name the real one in-world; timing is a later season's; see `writers/brief.md` "Season 2 back-half decisions".)*
- **CORRECTION: the first kiss (player; supersedes "first kiss at the end of date #1, Lena kisses him").** The first
  kiss comes **right after Lena "rejects" him** ("No.", straight-faced) **and tells him to ask her out properly
  instead.** It's **not short, not particularly long.** **Lena breaks it off by pulling away just slightly, foreheads
  touching, and murmurs playfully that he's being very familiar for a man who hasn't asked her on a date yet.** Then they
  go back to the dorm for **Theo and Laney's planned celebration scene that doesn't quite come off yet** (the champagne
  wake on the misheard "No."), as already designed.
  - **Then the dates and hangouts, kissing frequently.** The "she's given up kissing for Lent, in principle" bit is
    retired (or said and broken at once, as a joke; room's call).
  - **Heat escalation for Jack and Lena is VERY slow.** They don't really cross from kissing into what would be "making
    out" **until their summer visits to each other (Season 3).** (The S4 restraint framing and the slow-intimacy
    entries stand.)

### After S2E12 (player feedback)
- **First "I love you" for Jack and Lena: during a SUMMER 2010 VISIT (S3)** (supersedes Thanksgiving 2010 as the
  default). The first time they're together after weeks apart, on one of the long visits (the Fourth in New Orleans
  or August in Youngstown; room's call by path). Until then the word stays unsaid between them.


### After S2E17 (player feedback)
- **Theo and Skye's call (player; staged OFF-PAGE now, revealed MUCH LATER, likely not this season).** A day or two
  after the breakup, **Skye calls Theo to ask what happened.** Theo tells her he **genuinely doesn't know**, but he
  **dismisses her cheating theory**; all he tells her is that **Jack seemed miserable both the day before and the night
  after the breakup.** This is **part of why Skye comes back** a couple of weeks later to ask Jack for an explanation
  (step 5 of her design): she now believes what he said (he never did lie to her); she just can't understand what
  happened. **Theo admits the call to Jack much later.** Until then: nothing on the page reveals it (no hint from Skye
  or Theo the Knowledge Auditor would flag), though Skye's return can be shaped by it invisibly.

### After S2E18 (player feedback) [brief.md L2333–2335, verbatim]
- **Feedback:** "That was devastating. Skye is simply the best. I teared up." Keep honoring Skye at this level in
  her absence and her return.

### After S2E19 (player feedback) [brief.md L2337–2338, verbatim]
- **Feedback:** "Great episode."

### After S2E20 (player feedback)
- **Feedback:** "Good to have Skye back."
- **S2E21 answers (player): the Catechism campaign begins.**
  - **Order:** Skye **starts from the beginning of the Catechism and goes in order** (Part One, Section One: "The
    Desire for God", man's capacity for God, how God can be known, Revelation, Scripture and Tradition, the Creed...).
    **She's here for the whole thing and not worried about how long it takes** (a long arc: one section or theme per
    session duel, across many episodes and seasons; track it).
  - **Lena learns from Jack first:** he tells her the same day, before anyone else can (speaking plainly is their new
    rule). Lena sets the condition (if Skye ever makes a move, the meet-ups stop) calmly, and isn't calm. Skye later
    seizes on the phrasing: she's the only one who CAN'T make a move, and "I can work with that."
  - **Skye's dressing strategy, first session: obvious and funny.** Something outrageous for a coffee shop; they both
    know exactly what she's doing; she says so, and argues brilliantly anyway. Never touches him.
- **CORRECTION (player): when Skye learns Lena's condition (supersedes "Skye seizes on the phrasing" in S2E21).**
  Lena tells JACK the condition for the ongoing Catechism meetings/coffees. **Jack does NOT tell Skye the condition
  until much later, after several meetings** (S2E22 at the earliest; the room places it). The reveal scene: a charged
  moment, right before a kiss; Jack quietly: *"Don't. If you do that, I have to stop meeting you for this. I
  promised."* / Skye: *"You promised?"* / **He quotes Lena's words to him exactly.** / Skye: *"So I'm the one not
  allowed to make a move?"* / Jack: *"You know that's not what she meant."* / **Skye, with the ghost of a grin and a
  very familiar expression on her face:** *"I can work with that."* (echo of S1E20). Until then Skye doesn't know the
  condition exists; nothing on the page has her react to it.

### EXACT-TEXT ENTRIES FOR THE S2E21 WRITERS (pasted from earlier brief sections at the Packer handoff; binding; the CORRECTION "the first kiss" is above in "Season 2 back-half decisions"; where "After S2E20" above conflicts with any of these, "After S2E20" wins)

- **Lent 2010 observance (player; Ash Wednesday Feb 17 → Easter Apr 4).** Minimums: abstain from meat every Friday of
  Lent; fast on Ash Wednesday and Good Friday. **Lena does more than the minimum, and Jack does something more too**:
  e.g., fasting every Friday of Lent and/or a traditional devotion or a popular modern one. **Their dates avoid Fridays
  during Lent.** (Specific practices: see the suggestions pending player approval, or room's call.)
  - **First Lent (2010): separate practices, no joint plan (player).** They're just starting out, so each keeps their own
    Lent. Individual practices (player-approved): **Lena:** fasting every Friday (perhaps the old bread-and-water
    way); Stations of the Cross on Friday evenings at St. Brendan's (Jack may tag along unplanned; a Friday not-date);
    giving up Facebook for Lent (a real 2010 trend; Laney appalled; keeps the relationship off Facebook until Easter).
    **Jack:** giving up cigarettes (withdrawal, itchy hands, an unopened pack he carries, Lena quietly moved); fasting
    Fridays too, matching her out of devotion and pride. **No shared Lent plan or joint Friday dinners this year.**

[brief.md L325–338 and L404–408 — the alliance (reveal and false dawns)]
- **The alliance reveal (reserved payoff).** In the **first ensemble set-piece episode after Jack and Lena finally get
  together**, Theo and Laney openly reveal their secret alliance, toasting themselves with champagne for pulling it
  off, and discover **everyone already knew**, Jack and Lena included. The beat (the player's lines; keep them):
  "We know." / "Everyone knows." / "People outside of California know." / "It was obvious after five minutes."
  Until then, the alliance's maneuvering should be visible to the player and to the ensemble but never acknowledged
  aloud, so the reveal pays off years of comic evidence.
- **Running bit: the alliance's false dawns.** Every time Jack or Lena gets out of a relationship, **Theo and Laney are
  absolutely pumped** (celebrations, plans, maybe premature champagne) and then **deeply bummed** when they realize the
  other one *isn't* immediately breaking up with whoever they're with to chase after them. It escalates each time and
  pairs with the timing tragedy. The first instance is likely when Lena and Wes end while Jack is with someone. Pays
  off in the champagne at the alliance reveal.

[brief.md L2239–2257 — "Date #2", Skye's birthday and the Easter dinner (After S2E12); Date #1 is PLAYED and dropped]
- **Date #2: Jack plans it Youngstown-humble** (something small and his), and **Lena is undone by how much thought
  went into so little.** They are themselves, **completely at ease, and for the first time with no significant others
  looming over the evening.**
- **Skye's birthday (Apr 4, Easter Sunday 2010):** by then they're back in touch and the Catechism study may already
  have started, so **he texts, maybe even calls**, depending on how much they're talking by then (supersedes "struggles
  whether to text"; the struggle can be a beat, the answer is yes).
- **Easter Sunday 2010 (Apr 4) (player).** Away from family, **Jack and Lena plan an Easter dinner together in the
  dorm, as best they can, with the friend group, after Mass** (their first holiday hosted as a couple: a dorm-kitchen
  feast with improvised Youngstown and New Orleans touches; the whole group; comic logistics, real joy). Fits with the
  Easter Vigil/official beat and Skye's birthday text the same day.
  - **CORRECTED (player): keep the original plan** (official at the Easter Vigil; the "in a relationship" status
    Easter morning). **The Easter dinner is the response to it becoming public:** Theo and Laney's **long-awaited
    victory champagne toast and the alliance "reveal"** (the meetings, the whiteboard, the seating sheet, the champagne
    bought for the misheard "No." wake, finally drunk for the right reason) **and the discovery that everybody knew all
    along** (Kevin's "Respectfully, leave it alone"; Margot's field notes; et al.).


[bible.md §21 registry row #69 — running bit (verbatim)]
- **"Never ask Laney for girl advice" (brief running bit; registry #69):** S1E09 the bonfire poem ("about her eyes… and then, sugar, one knee"); callbacks: E16 *New Moon* (Laney offers; "No."); S2E05 Skye at Sully's; **S2E12/date #1: "Don't." before she opens her mouth** (S2E20 s04a pays it, verbatim, on every path); S2E17 Laney confirms it was sabotage.

### SKYE'S BREAKUP AND AFTER AND RELATED ENTRIES (pasted exact; steps 1–5 are PLAYED (S2E18–S2E20); **STEPS 6 AND 8 AND THE MECHANIC BEGIN IN THIS EPISODE (S2E21)**; step 7 is SUPERSEDED by the "After S2E20" CORRECTION above (Lena tells JACK; Jack does not tell Skye until much later); the "side of the road" staging note is SUPERSEDED: the porch is set)

[brief.md L1758–1802 — "SKYE'S BREAKUP AND AFTER" and the entries that follow it (the "side of the road" staging note in the last bullet is SUPERSEDED: the player set the porch, so "dumped me on the side of the road" is her later exaggeration of the porch, per bible §10.2 S2E18 note)]
- **SKYE'S BREAKUP AND AFTER (player's design; supersedes "room decides how Skye takes it"; S2E18 onward; adapt to
  voices, not verbatim). The balance of the breakup's reaction is Skye's.**
  1. **She thinks he's doing a bit**, and **laughs at first**, then tells him **to stop, because it isn't funny.** (It
     hurts more from the first second.)
  2. **Truly heartbroken as it sets in**, she doesn't understand how: everything he said to her before he left was true
     (she can tell), so how can this be happening. He tries to explain, **badly**.
  3. **Then she gets angry:** you're in love with me, you're happy, and you don't want to be with me. She **yells at him
     for a while, most of it not making sense**, because she's crying through it and can't understand what he's trying
     to say. **She decides he must have cheated in New Orleans** and just feels guilty. **She tells him to get out and
     leave her alone.**
  4. **A week or two without a word from her; she misses their shared class.**
  5. **Then she shows back up.** After class she talks to him again, devastated and angry but not shouting: **he doesn't
     lie**, so if he was telling the truth (and she knows he was), **he owes it to her to sit somewhere and explain it
     until she understands.** They talk a long while; she cries; Jack isn't doing well with himself; **she sort of gets
     there.** They're still forced to work together in the class. **She'll respect what he said, as she always does,
     "but this isn't done."**
  6. **She fights within the framework of their relationship and her own understanding** (the "same direction" idea):
     at class, their regular coffees and studying for the class, **she buys herself a Catechism and argues it with him,
     one section at a time.** Her plan: **argue into understanding, so either she's persuaded of his faith or he's
     dissuaded from it.** She also **dresses fairly provocatively but never touches him** (that part worked before too).
  7. **Lena isn't thrilled but doesn't make it a thing.** She makes Jack promise that **if Skye ever makes a move, the
     meet-ups stop.** Skye seizes on the phrasing: she's the only one who *can't* make a move, and **"I can work with
     that"** (echoing her line from their first conversation about sex, S1E20).
  [PACK NOTE — step 7's "Skye seizes on the phrasing…" is SUPERSEDED by brief "After S2E20" CORRECTION (§1.3 above): Jack does NOT tell Skye the condition until much later (S2E22 at the earliest; the room places it). Nothing in S2E21 has Skye know or react to it.]
  8. **Fun, fraught, and eventually it leads to their friendship** (not close; the long thaw already in the brief). It
     stays within the hard lines (no cheating, nothing physical), keeps Skye a real pull on Jack (the "dangerous" entry)
     and keeps Lena's dislike honest. Every Catechism session is a real argument with real philosophy on both sides;
     Skye is never a strawman, and Jack doesn't always win.
  - **Mechanic (player-approved): the Catechism sessions run as argument duels.** Each session (one Catechism section
    or theme) is a short duel with **Skye as the opponent**, scored on rigor/wit/heart like Lena's duels; **she wins
    some.** Track the campaign across episodes with cumulative counters (e.g. `skye_cat_jack` / `skye_cat_skye`: how
    close each comes to being persuaded), feeding how her arc resolves into friendship. Keep each duel distinct from
    Jack–Lena duels in register (Skye's improv, actor's logic, sincerity under performance; real arguments).
- **Lena won't joke about Skye yet (player; timing for the running joke).** The "Lena brings up Skye as a running
  joke / cheap fallback argument" bit **does not start until Skye's Catechism campaign is over** and the meet-ups have
  ended. Until then Skye is **a live fear** for Lena, never a punchline; she's careful, quiet or sharp about it, never
  funny. The joke only becomes possible once the threat is truly past.

- **Skye–Jack friendship may end up closer than planned (player; open, "we'll see").** The earlier "not close"
  directive softens to **let it find its level** (still never a threat once the campaign ends, and never at Lena's
  expense). **Running bit while they're at the same school:** whenever he balks at something she asks, she comes back
  with **"So remember that time you told me you loved me and then dumped me on the side of the road?"** (Staging
  note: the player's phrasing suggests the breakup itself happens **in the Saab, pulled over on the side of a road**;
  room, consider staging it there so the line is literal.)

---

---

# 2. STYLE [bible.md Part I §4 "Style guide", L76–227, verbatim in full]

## 4. Style guide

### 4.1 POV and tense
- **Close third, present tense, Jack only.** "Jack watches her cross the porch." The camera never leaves Jack. No
  cutaways, no "meanwhile," no dreams that show what Jack cannot know (a dream may show only what Jack fears).
- Narration knows what Jack knows and sees what Jack sees. It may infer ("something in her face says she has done this
  before"); it may never assert another person's thoughts as fact.
- Jack's interiority is allowed and important, but **dramatized**, not essayed. One sentence of thought, then action.
- The narration's intelligence is Jack's intelligence: a well-read nineteen-year-old from the Rust Belt. It can quote
  Chesterton; it should also notice the price of the gas.

### 4.2 Prose register
- **Literary, warm, funny, sensory. A TV hour on the page.** Scenes are built like television scenes: an establishing
  image (the chyron does the place and time, the first sentence does the light, the weather, the smell), a turn, an exit.
- **Specific nouns.** Not "a drink" — a red Solo cup of Natty Light gone warm. Not "a car" — a 1999 Chevy Silverado with
  rust blooming over the rear wheel wells like a rash. Not "music" — whatever is actually playing.
- **Sensory anchors at Marisol:** eucalyptus (menthol, cat-pee, rain), kelp at low tide, sunscreen, fog that beads on
  wool, the 2 a.m. train horn, sea lions barking off the wharf, jasmine on the Las Olas fences, the sweet chemical smell
  of the Delgado laundry room. **At Youngstown:** wet leaves, the cold metal smell of the garage, Nonna's gravy, Folgers,
  diesel, snow that is gray by noon. **At New Orleans:** sweet olive, boiled crab, rain on hot asphalt, mold, chicory.
- **Sentence music:** vary length. Allow a long, accumulating sentence when Jack is overwhelmed; then a short one.
- **Paragraphs:** dialogue lives inside prose, novel-style. One speaker per paragraph unless it's a rapid-fire exchange
  that reads better stacked.
- **Banned:** the tic registry in `room.md`. Also: "orbs," "padded," "smirked" more than once an episode, "gaze" as a
  verb, "electric" for touch, "a jolt," "time stood still," "the world fell away," "let out a breath he didn't know he
  was holding." No eyes that "darken with desire." No "core."

### 4.3 Dialogue rules
- **Everyone has their own funny.** See voices in Part II. Jack is wry and allusive with Rust Belt bluntness; Lena is
  fast, Southern, combative, theatrical and suddenly tender; Theo is epigrammatic and luxurious; Laney is pageant-Texan
  with filthy timing; Margot is deadpan and polysyllabic; Kevin is dad-joke sunny with a scalpel under it; Osei is
  proverbial and mischievous; Hale is Oxbridge cut-glass with gutter vocabulary.
- **Subtext over text.** People rarely say what they mean when it matters. They talk about the pie. Nobody says "I'm
  scared." They say "Is it cold in here or is it Ohio."
- **2009 mouths.** No therapy-speak ("boundaries," "triggered," "valid," "unpack," "toxic," "lived experience") except
  Margot, who uses academic jargon deliberately and is mocked for it. No "lowkey," "vibe check," "it's giving," "slay,"
  "rizz," "ghosting" (as a verb), "situationship." Era slang is allowed and sparing: "epic fail," "that's what she said,"
  "FML," "sexiled," "hella" (NorCal kids only — Kevin, Julian), "legit," "creeper," "facebook stalking," "the Twilight
  thing," "Team Edward." Jack says "wicked" never; he's from Ohio. Jack says "pop," not "soda." Lena says "y'all," "cher,"
  "making groceries," "neutral ground," "where y'at." Laney says "y'all" too, but Dallas, not New Orleans: "fixin' to."
- **Names:** Lena calls him "Costigan" when fighting, "Jack" when it matters, "Youngstown" when flirting, and once a
  season, "John." Jack calls her "Broussard," "Lena," and, rarely, "Magdalena" — which she allows only from him and only
  when he means it. Theo calls Jack "Costigan," "Father Jack," "my moral compass." People call Theo "Theodore" when he's
  in trouble.
- **Speeches are rare and earned.** One real speech per episode, maximum, usually in the duel or the climax.

### 4.4 How heat is written: restraint is the fire
- The heat is in the **near**: the inch, the almost, the hand that does not move, the breath on a neck in a crowded
  room, the door that stays shut. Proximity, not contact. Specific bodies, specific details: the freckle at the hinge of
  her jaw, the cold of the medal against her collarbone, the way she pushes her sleeves up when she's about to win, the
  stubble he hasn't dealt with, the smell of smoke he can't get out of his jacket.
- **Withholding is active.** When Jack doesn't kiss her, the prose must make the not-kissing an event: show the cost.
- **Desire is good.** Never write desire as dirty. The Catholic claim is that desire is so good it's worth ordering. Jack
  wants her — the prose says so plainly. The restraint is a choice made by a man who wants, not a man who doesn't.
- **When sex is on the page** (other characters, other couples, and later possibly Jack and Lena per player choices):
  frank, literary, adult, specific to the people. Sensation and emotion, the comedy of bodies, the vulnerability, the
  morning after, the loneliness of the wrong bed. Never pornographic mechanics. Never glamorized and never punished by
  the narration; consequences come from character, not from the author's thumb.
- Everyone in sexual content is **18 or older** (see §9 birthdays).
- **HARD RULE (brief): Jack and Lena sleep only with each other, ever.** Neither has slept with anyone before the series,
  and neither sleeps with anyone else during it: not Wes, not Becca, not Skye, not Julian, not a
  stranger at a party. Their first time, whenever and however the player's choices bring it, is with each other. With
  other people the ceiling is **kissing, making out, real physical temptation and the near-miss** — charged, on the page,
  costing resolve — and then the line holds: an interruption, her stop, his stop, a door, a phone, a confession of the
  wrong name. "The loneliness of the wrong bed" belongs to the ensemble, never to Jack or Lena. Jealousy-as-POV may let
  Jack *fear* (a door closing, her coming home late in someone's jacket); the narration must never state or imply as fact
  that Lena slept with anyone, and the fear is answered on the page once they're together (S2E19: "Never. Not with anyone." — both of them).

### 4.5 How faith is written: true, and hard
- **Flannery O'Connor, not a pamphlet.** Grace is real and it is violent, inconvenient, funny, and usually arrives
  through the wrong person. Sin has weight; so does mercy.
- **The sacraments work.** Confession actually absolves. The Eucharist is actually Christ. The narration never winks.
  But the narration never *proves* it either: Jack experiences grace the way people do — as peace he can't account for,
  as a sentence that arrives when he needed it, as the strength to not do the thing.
- **Prayer on the page:** short, real, unpolished. Jack prays like a man talking to someone in the next room. He uses the
  Hail Mary when he can't think, the Jesus Prayer when he's scared, and on bad nights the St. Michael prayer like a
  bouncer's checklist. Lena prays the Memorare and argues with God out loud.
- **Liturgy is accurate:** the real readings for the real Sunday, the real feast days, the real colors. Homilies are
  excerpted, never transcribed whole: two or three sentences that land.
- **Catholics are not the good guys.** Newman has hypocrites, bores, saints, fools, a gossip, a missionary who means it
  and a missionary who's faking it. The faith is true; the faithful are people.
- **The critics get their best arguments.** Margot is often right. Hale is often right. Julian is often the most
  Christ-like person in the room and doesn't believe a word of it. The story never sneers at belief or unbelief.

### 4.6 How the arguments are written
- **Both brilliant, both real.** Real philosophy, real texts, real citations: Aquinas (*ST* I-II q.94 on natural law,
  q.109–114 on grace; *Summa contra Gentiles*), Augustine (*Confessions* VIII, *City of God* XIV, *Enchiridion*,
  "Dilige, et quod vis fac" — *Tractates on 1 John* 7.8), Pascal (*Pensées*, the wager, "cela vous abêtira"), Aristotle
  (*NE* II on habituation), Kierkegaard (*Attack upon "Christendom"*), Newman (*Grammar of Assent*, *Apologia*),
  Anscombe ("Modern Moral Philosophy"), MacIntyre (*After Virtue*), Bernard Williams ("Moral Luck," *Ethics and the
  Limits of Philosophy*), Nietzsche (*Genealogy*), Hume (*Dialogues*), Russell, Mackie (*The Miracle of Theism*), Dennett,
  Hitchens (*god is not Great*, 2007), Simone de Beauvoir (*The Second Sex*), Judith Butler, bell hooks, Mary Daly,
  Dorothy Day, Chesterton (*Orthodoxy*, *The Everlasting Man*), C.S. Lewis, Lewis vs. Tolkien on allegory, O'Connor
  (*Mystery and Manners*, "A Good Man Is Hard to Find," "Revelation," "Parker's Back"), Waugh (*Brideshead*), Greene
  (*The Power and the Glory*, *The End of the Affair*), Percy (*The Moviegoer*, *Love in the Ruins*), Dostoevsky (the
  Grand Inquisitor; Zosima), Weil, Benedict XVI (*Deus Caritas Est*, *Spe Salvi*, *Caritas in Veritate* — July 7, 2009),
  John Paul II (*Theology of the Body*, *Veritatis Splendor*, *Evangelium Vitae*).
- **Quote accurately or paraphrase honestly.** If a writer isn't sure of a quote, paraphrase it in-character ("Pascal says
  something like…").
- **Lena wins about as often as Jack does.** Across a season, tally. Lena's default mode is Thomist-with-a-machete: she
  trusts reason, nature, the body, form, the visible Church; she is merciful toward persons and merciless toward
  arguments. Jack's default mode is Augustinian-with-a-smoker's-cough: he trusts grace, distrusts nature (his own
  especially), feels the fall in his bones, is merciful toward arguments and hard on himself. **They swap positions when
  the facts get personal** — that's where the best duels live.
- **The arguments are flirtation and also real.** Every duel has a moment where it stops being a game. Winning isn't
  always good. Conceding the right point at the right moment is the most romantic thing either of them can do.
- **Politics (reconciled with the brief's map after S1E01):** both are *nearly* politically homeless, both deeply
  pro-life, both convinced that both parties betray the Church, and each thinks the other is wrong for leaning where they
  lean. **Lena** is a Catholic Worker type (Dorothy Day), a pro-life Louisiana Democrat in her bones — union fishermen,
  Charity Hospital, the levees, the death penalty (against), immigrants (for), Katrina as proof the state abandons the
  poor — and ferocious about abortion and euthanasia. **Jack** is more comfortable on the right: a law-and-order Rust Belt
  conservative raised in a Kennedy-Democrat union house (Frank) who broke with it at the kitchen table. Labor is still in
  his blood (his father's layoff is personal) and he distrusts the market's mercy as much as the government's, but his
  instincts run to order, crime and punishment and the culture war, and he votes like it. 🔒 The irony the show never
  states: the law-and-order boy is the reason his brother is in prison. **Over the run (brief):** Lena's struggle deepens
  as the Democrats harden on abortion and as the LGBT movement shifts, in her view, from human dignity to remaking sex and
  the family; Jack keeps hearing racial overtones inside what he considers reasonable disagreements with Obama; the Trump
  years are very hard on Jack (immigration enforcement turning, as he sees it, into dehumanization); Dobbs (2022) is joy
  for both, then ash (mailed pills backed by Republicans too, IVF's expansion); both grow disgusted with the whole system.
  These are convictions written from inside; Margot, Theo, Hale, Kevin, Julian and Yusuf get their best arguments. They
  fight about the health-care bill and Stupak, Notre Dame and Obama (May 2009), Ted Kennedy's funeral, the death penalty,
  immigration, Traficant (Jack: a crook; Frank: *our* crook), and whether the bishops are cowards or courageous about the
  abuse scandal (they agree the bishops failed; they disagree about what that means for obedience).

### 4.7 How comedy works
- **Character comedy, never mockery.** The funniest people are funny on purpose (Lena, Theo, Laney, Margot) and the
  second-funniest are funny by accident (Priya's laminated notes, Joey Abruzzo's volume, Doug Pruitt existing).
- **Running jokes pay off** (see Part IV §26). The scar story. The cigarette reliquary. Margot's whiteboard. The 3 a.m.
  fire alarm. The Anchor's pie ratings.
- **Banter has rhythm**: set, turn, topper — then break the pattern; let someone fail to land one.
- **Jack is funny in a way that keeps people at arm's length.** The show eventually notices that.
- **The sacred is never the butt of the joke**; Catholics are, often.

### 4.8 Content standards (per the brief)
- Sex, desire, bodies, drug use, violence, addiction, overdose, death and grief: frank and literary, HBO-level, always
  in service of character and emotion. Morning-afters, bad sex, good sex, funny sex, the loneliness of a hookup. Never
  pornographic mechanics.
- **Everyone in any sexual content is 18+.** Every freshman in the show is 18 or older at move-in (see §9).
- **Sexual assault:** may be a storyline; if used, it is centered on the survivor's experience and aftermath, never
  titillating, never a twist. **Currently no assault storyline is scheduled.** If one is introduced, it requires a
  Showrunner note and a revision-log entry. **HARD RULE (brief): never in Jack's or Lena's backgrounds, and never
  happening to either of them** — not as a wound, not as the cause of a wound, not as the event behind a secret. Their
  wounds are family rupture, grief, violence, crime, illness, addiction in the family, non-sexual harm, faith crises.
- **HARD RULE (brief): Jack and Lena sleep only with each other** (see §4.4). Applies to backstory and to every season.
- Addiction and overdose: real, unglamorous. Someone may not make it (see §19, Death register).
- **Hard lines:** the narrative never mocks the faith. No cheap villains, no secular strawmen. **Jack and Lena never
  die.**
- Real people (politicians, clergy, journalists, celebrities) appear only through the news, TV, the radio, the paper,
  and characters' opinions about public events. Never invent private conduct for a real person. Never assert, in-world,
  any fact about a real private event that the public record does not support.

---

---


---

---

# 3. VOICES (characters on the page or texted/called this episode; verbatim bible "Voice" blocks, then digest notes. On the page: Jack, Lena, **Skye (the pitch Tue s04; the first session Wed s07–s07d; Thu s09; by text Sun s19)**, Theo ([theo] fork s08t; Forum s11), Laney (s10–s11c, s15), Margot (s10–s11c), Kevin (s06 the Anchor, the Forum, Mass), **Hale (full — Mon s02/s02a, the Forum, [hale] loading dock)**, **Caleb (full — s02, the Forum, [caleb] steps)**, Yusuf, Evan (roster/cards only; 🔒), Osei ([osei] office, the Forum, Stations, rose), Fenner, Gloria/Rudy, Clare (Forum, Mass), Gus (organ), new walk-ons: the Dean of Humanities, Ed and Connie Tavares (Mission Lanes). By phone/text: Maria, Nonna, Frank, Gina; Lena's Tue text; Skye's Sun text. Named only: Celeste, Walter J. Pruszynski, Danny, Mémère. Dropped from the S2E20 pack: the maître d' and waiter (Le Marin), Margot's feature thread, Theo's jacket thread.)

**Jack [bible §6]** [bible.md L265]
**Voice.** Wry, allusive, Rust Belt blunt. Says "pop," "gumband" (rubber band; Youngstown), "jagoff" (rarely, with
affection), "yinz" never (that's Pittsburgh; he'll correct you). Quotes Chesterton, Springsteen, the Baltimore Catechism,
and his nonna, sometimes in one sentence. Jokes as deflection — when someone gets close, he gets funnier. Under real
pressure, he gets very quiet and very plain. Never says "I'm fine"; says "I'm good," which is worse.
- *"I'm not quitting. I'm tapering. Like a saint, but with Marlboros."*
- *"In Youngstown we don't say 'I love you.' We say 'Text me when you get there,' and then we don't sleep."*

**Lena [bible §7]** [bible.md L350]
**Voice.** Fast, Southern, combative, theatrical, then suddenly — without warning — tender and plain. Long sentences that
build to a verdict. Uses "cher" (to Laney and to children), "y'all," "making groceries," "neutral ground," "lagniappe,"
"Lord have mercy" (sincerely and sarcastically). Swears creatively and Catholic-ly: "Sweet suffering Saint Sebastian."
Cites Aquinas like a lawyer cites precedent. Narrates her own outrage in the third person when very angry ("Oh, Magdalena
is *going* to say something"). When hurt she goes formal and polite, which is terrifying.
- *"I'm not against fun. I'm against fun that wants your car keys and your name."*
- *"You're carrying a New Orleans novel to California. That's either a pickup line or a cry for help, and I need to know
  which before I decide how to be disappointed."*

**Theo [bible §8.1]** [bible.md L508]
**Voice.** Epigrammatic, luxurious, cinematic. Speaks in loglines and pitches ("Picture it: a Catholic, a keg, a
cliffside — "). Movie references constantly (Kubrick, Altman, Truffaut, *Point Break* unironically). Calls everyone by
their last name or an invented title ("Costigan," "Father Jack," "Professor," "my moral compass," "Pruitt the Destroyer").
Never says "sorry"; says "I owe you a kidney." When he's lying he gets *more* specific. When he's telling the truth he
gets short.
- *"I'm not a bad influence, Costigan. I'm an influence. The bad is your contribution."*
- *"Pray for me. Preemptively. Like a flu shot."*

**Laney [bible §8.2]** Dallas pageant-Texan, filthy timing, sugar-coated threats ("Sugar," "y'all," "bless your heart" weaponized); narrates her life like a pageant host. **Margot [bible §8.3]** Deadpan, polysyllabic, merciless, footnoted; insults as diagnoses; kind only when pretending it's research. **Kevin [bible §8.4]** Sunny, dad-joke, team-captain; medical vocabulary as comedy; a scalpel under the sunshine; "Respectfully, bro…".

**Skye [bible §10.2, Voice (brief)]** [bible.md L1287]
**Voice (brief): playful and performative.** Always a little "on": voices, bits, characters, banter like a scene partner (she'll play his
mother, his confessor, a Youngstown waitress, Hale, the Pope); she answers questions as somebody else first. You never quite know when she's
being real, and **when she drops it, it's devastating** — short, flat, no music. Her humor is **a professional's improv** (status games,
yes-and, a callback three scenes later) — distinct from **Laney's** Southern pageant chaos and from **Theo's** lying-by-over-specifying. She
never uses Laney's "sugar" or Theo's loglines.
- *"Yes, and — your God is the Father, the Son and a bird. I've worked with worse ensembles."*
- *"You put* now *on it. Now is the most specific date there is."* / *"Visual aids."* (S1E21 — the argument; supersedes the struck "Say no again. Slower.")

**Skye, further — THE CAMPAIGN BEGINS (digest; sources bible §10.2 S2E20–S2E21 notes, plan §6):** she answers as herself first ("Hi." — her Lent: she gave up the first take on every call and doesn't know who for; REVEALED to Jack in the Saab, E20 s09a; the Personal move in `cat1` round 3 throws it back at her); she DIRECTS the scene ("Slower." "Again." "What does he *want* in this scene?"); status games, yes-and, a callback three scenes later; at most one voice (a bishop on a balcony, a Shakespearean Hippo, a casting director), then dropped to short, flat, no music; humor at herself; her objections to the faith are real (she went to Mass; learned both endings of the Our Father in a car; what kind of God takes the happy thing away?) and Jack does not win them all.  Texts: lowercase, no apostrophes (*hi. 31. did you do the reading*). Sex appeal frank and literary, described once, never an inventory; **she never touches him**. NOT on the page: "Ted"/Theo (🔒), "Mary Kate", "I knew", **"I can work with that"**, anything showing she knows Lena's condition, the "side of the road" bit, any mockery of Lena (she does not name her), the flannel at a session. Showbiz register in her dialogue only (#224, #269), never the narration.

**Skye on faith and on Jack [bible §10.2, L1292–1300, verbatim]:**
**Her pull on Jack (brief).** **She dares him** — the reckless Costigan comes alive around her (the harbor ladder at 1 a.m., the Point
break at dawn, a drive to LA on a school night). **She out-argues him** — not philosophy; *people*: she reads a room the way he reads a
book, and she is usually right about who wants what. **She sees him** — and it means a great deal, but it isn't Lena's kind of seeing:
Lena shares the faith, so she almost always knows *what* she's looking at; Skye sees Jack clearly and, missing the one fundamental thing,
**doesn't always interpret it right** (she reads his restraint as fear, his guilt as Catholic decor, his prayer as a breathing exercise).
**Faith.** She can follow his prayer life to a point — she likens it to yoga and meditation, sincerely ("You sit still and listen for
something. I do that. I just don't expect anybody to answer.") — and she can follow his God as philosophy, which genuinely attracts her
(the First Mover as a plot problem; the Incarnation as "the best twist anyone ever wrote"). **She never truly gets it.** The logic on paper,
never the thing itself. That is why they never click at the deepest level, and the show never makes her stupid for it.

**Fr. Gabriel Osei [bible §8.5]** [bible.md L817–849; the seal canon is in §4]
**Voice.** Ghanaian English, unhurried, proverbial, mischievous; drops the occasional Twi word ("Ɛyɛ" — it is well;
"Me da wo ase" — thank you). Physician's metaphors. Asks questions instead of giving answers. Never preaches in
conversation; saves it for the pulpit and keeps it short there.
- *"The Church is a hospital, my friend. Nobody is embarrassed to be sick in a hospital. Only here."*
- *"When a man jokes that much, it is because the truth is heavy and he is carrying it alone."*


**Prof. Adrian Hale [bible §8.6, L896–935]**
**Voice.** Cut-glass Oxbridge with Yorkshire underneath (the vowels come out when he's drunk or angry: "bath" goes short). Gutter vocabulary deployed with precision. Epigrams. Calls students by surname. Says "darling" to men and women equally when drunk. Quotes Larkin, Housman, Hume and the Book of Common Prayer — the last without noticing.
- *"Prove to me you have a soul, Mr. Costigan. You have ninety minutes and I've had lunch."*
- *"Faith, Miss Broussard, is what we call it when a clever girl stops asking questions on purpose."*
- *"I don't hate God. One can't hate a fictional character. One can only hate his fans."*
- *"Come and say it to my face."*

**Hale, further (S2E21):** funny at his own expense; refuses the lavalier; "Pick a horn, Miss Broussard."; "The motion is defeated. Deservedly."; to Lena: **"You were very kind to my third row." / "I know. It was unforgivable."**; Mon forbids the word *Thursday*; to Jack: **"A man may miss a Thursday and still be in the story."** / "Sit where she can see you. Not where I can." / [hale] "You armed her." / "She was always going to win it. I wanted to be the one she beat." / "Don't tell her I said so. She'll know." After Thursday: Waugh. 🔒 Nora, the postcard, Compline: nothing.

**Caleb Hargrove [bible §10.10]** — Central Valley twang, rapid, King James cadence used ironically; self-deprecating; "dude" in moments of terror. Clip-on tie, Hale's book on his knee; the card he wrote in advance ("if God is the creditor, why doesn't he collect?") that turns, halfway, into his own question (a treasurer; a building fund; a father who stood at the front of an empty church and smiled); two cards in his lap face down; [caleb] "She didn't make him the bad guy… My dad would have prayed for him. That's worse." / "My dad never answered either. He just smiled." (fresh on this save) / gives Jack the red card for Lena. **Yusuf Noorzai:** Bay Area understatement; deadpan; "inshallah" only when he means it; engineering metaphors ("load-bearing," (sunflower seeds at the Forum). **Evan Marsh** (TA, the roster at Hollis; the card boxes at Sandoval; 🔒 untouched; no look with Theo; one pen click — vary it, #266).

**Dr. Dale Fenner (Oceanography 1; Morro 1100, TTh 11:00–12:15):** cheerful, knows nothing; Tue on tides ("spring… is the water *springing* up"), partner conferences ("Both halves. Good."); Pair 41 = Jack and Skye (why the Point breaks). **Gloria Mendes** — rates everything like pie; "hon"; feeds before she asks (the coconut cream on the house: "Don't argue with me, I'm older than your mother."). **Rudy Salcedo** — soft, "mijo"; radio in Spanish. **Clare Dominguez** (Newman sophomore, violin; ends it with Kevin Tue Mar 9: "a very good man who's never in the room"). **Gus Ferreira** (organist): Stabat Mater at the Stations; Laetare lets the organ out. **The Dean of Humanities** (walk-on, woman in her sixties, glasses on a chain): "Miss Broussard has the floor." **Ed and Connie Tavares** (Mission Lanes): "Sixteen. Told you. The return sticks — kick it." / "You're the boy who came Monday and asked me about shrimp." **Costigans:** Ma ("Your father took me bowling. Our second date. I bowled a forty-one and he married me anyway."), Nonna (*"Lei lo sa?"*; fava beans), Frank (ALL CAPS: *2 OT. TURNER 31. FINAL TOMORROW.* / *CHAMPS.* / *90-61.*), Gina (*bowling?? u are SO old* / *proud of u tho*).

### 3.1 Voice notes for this episode (digest; sources: plan §2/§5–§8/§14, bible S2E21 notes, room tics #269–#291)
- **Lena**: full strength; happiest on the page Saturday; Tue calm and not calm (the lavalier cord; one silence before "Promise me."); no therapy-speak (#5); no joke about Skye; "Laney."; "Then it's Wednesday."; "You bought me *socks*."; "Nobody has ever thought this hard about me for two dollars and fifty cents."; "Leave it with me."; "Then do the reading." Texts "—L." Never "love", "girlfriend", "official"; "Mine." ≤4; "Youngstown" ≤3; "cher" ≤1.
- **Jack** (Sincerity 261 · Candor 153 · Wit 133): wry, plain under pressure; tells her things now; texts lowercase; promises without bargaining; never defends Skye; the sealed pack (one paragraph, s07c).
- **Theo**: loglines ("A girl, a gown, and two thousand eight hundred paragraphs."); "Be careful with her, Costigan. Not for you."; 🔒 surprised in the right places, no knowing look. **Laney**: "for a war, not a date"; "He's in the *Carhartt*."; "Go. Be *poor* together."; her rude Skye line is stopped by "Laney." **Kevin**: "Respectfully" ≤2; "a very good man who's never in the room"; 🔒 nothing implied. **Margot**: "That's the headline." **Osei**: "a pilgrimage"; "Read the page."; homily two sentences.

---

# 4. HIDDEN CANON THAT CONSTRAINS THIS EPISODE (🔒 — verbatim; plant, never surface in a cue, key, previously, logline, nextTime or choice text. §4.1 = the plan's specs, copied exact (plan §5 THE CONDITION, §6 THE FIRST SESSION, §7.2–§7.6 the Forum; §8 date #2 follows as §4.1b); §4.2 = bible S2E21 notes, THE CATECHISM CAMPAIGN — DESIGN OF RECORD, registry rows #92–#93; §4.3 = the seal and room-only truths. The plan's §0 (dates/shape/entering state), §2 (beats and the romance ladder: ladder pasted in §5.4), §4 (previously/nextTime/end card), §10 (chunks), §11 (state), §12 (save-dependencies), §13 (knowledge), §14 (tics), §15 (period) are NOT pasted — read them in `outlines/s2e21.md`.)

## 4.1 THE PLAN'S SPECS [outlines/s2e21.md §5, §6, §7.2–§7.6, verbatim]

## 5. THE CONDITION — THE SPEC (s05, Tue Mar 9, 4:30 p.m., Sandoval Hall 1; Romance Writer, Opus; the Voice Editor, the Knowledge Auditor and the Standards & Spoiler Guard sign it)
### 5.0 Rules
1. **He tells her first, before anything else, the same day** — within four hours of the pitch; he says it in the first exchange, not after small talk. He tells her **the facts**: Skye bought a Catechism; she wants to read it from page one and argue it with him; Wednesdays at four, Low Tide, in public; for as long as it takes; she wants to understand it, or talk him out of it. **He does not tell her anything that is Skye's** (the "rest of my life" line; the voice dropped) — E20's "Keep hers" holds without being said again (tic #280).
2. **Lena's three questions, and no more:** *When?* (tomorrow; every Wednesday) · *Where?* (Low Tide — "the surf shop with the menu on a board"; she knows it) · *What does she want?* ("To understand it. Or to talk me out of it." — **"She can't."** — "No." — said by Lena as a fact about faith, not a boast about him).
3. **The condition, VERBATIM, every path, ungated, in this order:** **"Then here's mine."** · **"If she ever makes a move, it stops. The coffees, the book, all of it. Promise me."** · Jack: **"I promise."** — no choice may alter, shorten, paraphrase or precede these words; the choice comes after. (Bible #93 records them; Jack will quote the second line to Skye word for word, much later.)
4. **Calm, and she isn't calm.** Her voice is level; she does not raise it, does not cry, does not threaten, does not make a speech about Skye. **The not-calm is in her hands** (§5.3) **and in one silence** before "Promise me." Never narrated as feeling (#114: infer; never explain).
5. **Not thrilled; doesn't make it a thing.** She doesn't forbid it, doesn't ask him not to go, doesn't ask what Skye will wear, doesn't ask to be told what Skye says. She sets the one line that matters to her and then **turns the scene, on purpose, to Thursday.**
6. **No joke about Skye** — not a sharp one dressed as a joke, not "the actress," not "Hollywood." (Laney may joke Thursday; Lena stops her.) **She doesn't say Skye's name at all if she can help it; if she must, once, plainly.**
7. **No "love," no "girlfriend," no "jealous."** No therapy-speak ("boundary," "comfortable," "I need you to…") — tic #5.
### 5.1 Staging
Sandoval Hall 1 at 4:30, house lights at half, the stage worklight on; four hundred orange flip-down seats; two lecterns and a table between them, no pitcher yet (Thursday's). The building manager gave her an hour. **She's on the stage in her socks** (her flats on the stage edge), walking the boards to learn which one creaks, Hale's three pages and her cards on her lectern. **He sits in the front row** (not the third — she corrects that at the end). The lavalier mic Hale refuses to wear is coiled on Hale's lectern — that's what her hands find.
### 5.2 Beats, in order
1. "You came." — "I have to tell you something first." (He doesn't let her start on the Forum.)
2. He tells it plainly, in order, in his words (§5.0.1). She listens standing at her lectern, very still.
3. Her three questions (§5.0.2), one at a time, each answered in a sentence.
4. **The silence.** She looks out at the empty seats. **She says what it's made of, once, in her register** — e.g., *"You told me Thursday she said it isn't done. I heard you."* [`s2e20_tell=="candor"` ✓ — else: *"She was always going to want more than a car."*] — the hinge to the condition, plain, not bitter.
5. **The condition, VERBATIM** (§5.0.3).
6. **The choice** (`s2e21_promise`) — what Jack says after "I promise." (§5.5).
7. She comes down the stage steps and sits beside him in the front row — not touching, then touching (her shoulder against his) — and **makes it about Thursday**: she runs her first sentence at the empty hall, from the seat, without standing, and it's better than this morning.
8. **"Thursday. Third row. Aisle."** — "Why the third row?" — "Because that's where the good one sits." She picks up her flats. She leaves first (she has an hour to give back).
### 5.3 Her hands (the only place the not-calm shows — the Writer picks one and keeps it to one)
The lavalier's cord, wound round two fingers until the tips go white, then unwound and laid back exactly as it was. (Not folding; not thumb-licking — tic #272; not a held-back laugh — #277.)
### 5.4 What Jack never does
Bargain ("What counts as a move?"), defend Skye, promise more than she asked ("I'll stop going"), promise less ("I'll try"), reassure her about his feelings in words that aren't hers to need, joke, or say "love." He doesn't touch her until she comes down off the stage.
### 5.5 The choice `s2e21_promise` (all after "I promise."; **key every option; cue every option: "Lena will remember that."**)
- **[Sincerity]** "You'd have heard about the book before anybody. You did." — Lena: "I know. That's why I can stand up here." · set `trait.sincerity +1`, `rel.lena.trust +1`. Key: *"On the empty stage, you told Lena about Skye's Catechism before anyone else could, and promised that if Skye ever made a move, the meetings would stop."*
- **[Candor]** "She's going to try to argue me out of it. Not — that. The faith." — Lena: "Let her try." (one beat; not a boast) · `trait.candor +1`, `soul.honesty +1`. Key: *"…and told Lena plainly that Skye meant to argue you out of your faith."*
- **[Restraint]** *Say nothing more. Let the promise stand by itself.* — she looks at him a long moment and nods once · `trait.control +1`, `soul.restraint +1`. Key: *"…and let the promise stand without another word."*
- **[Wit → Thursday]** "Do your first two minutes for me. I'll be the room." — she does, from the stage, to him alone, and it's the best yet · `trait.wit +1`, `rel.lena.warmth +1`. Key: *"…and then asked her to give you her first two minutes, and she did."*
*(Every key names the promise in spoiler-safe words; none names a condition "on Skye," none quotes Lena's line — the line is for the reveal.)*
### 5.6 Length and register
≈1,400. The quietest scene in the episode. No music. No bystander. No button. It ends on her, not on an object.

## 6. THE FIRST SESSION — THE SPEC (s04 the pitch; s07–s07d the session and duel `cat1`; Romance Writer, Opus; the Voice Editor and the Knowledge Auditor sign it)
### 6.0 Rules
1. **Skye is magnificent, funny, brilliant and unbeaten in spirit.** Brief "After S2E18": honor her at this level. The session must make the player glad she's back (brief "After S2E20": "Good to have Skye back.").
2. **The whole mix** (brief, standing): intellect (the duel at full strength), wit/play (the binder, the bits, the barista), sex appeal (the gown — frank, literary, described once), fun (she enjoys this; so does he) — **and one dropped voice per scene she's in.**
3. **She never touches him; he never touches her.** Not a hand, not a sleeve, not the coffee handed across (set down). The narration notes it **once**, at the end of s07d.
4. **She does not know Lena's condition exists.** No line of hers can be read as reacting to it; no line of Jack's in her hearing mentions a promise or terms; the narration of her scenes does not wink at it. **"I can work with that" is not said by anyone.**
5. **Never a strawman.** Her arguments are real philosophy (§6.4) — the kind a working philosopher would recognize — made in an actor's terms. **Jack doesn't always win**; she takes rounds 1 and 2 by writer-set points, and the session on many paths.
6. **Never cruel; never at Lena's expense; never "Ted"/Theo; never "I knew."** She doesn't ask about Lena, doesn't name her, doesn't learn of the dates.
7. **Distinct register from Jack–Lena duels:** Lena argues from inside the tradition (Thomas, Anscombe, the debt); Skye argues from outside it and from the craft — *what does the character want; what's the scene about; is the line true or is it a line* — and from status games and voices, dropped into plain sincerity at the turn.
### 6.1 The pitch (s04) — beats
1. Fenner; tides; "spring" means springing. 2. Her "Hi." in person; the narration does not explain it. 3. **The refraction project, excellent** — she has done her half and some of his; Fenner's "Both halves. Good." 4. 12:15 — the paperback set on his notebook (the sale sticker; the receipt moved to page one). 5. **Her pitch** (§6.2). 6. `s2e21_terms`. 7. She goes first.
### 6.2 The pitch — her lines (VERBATIM CORE in bold; the Writer orders and connects)
- **"You said what you're for. I want to read the manual."** (his E20 s09 "It's about what I'm for.")
- **"From the beginning. In order. One section at a time."** *(E20 nextTime — verbatim.)*
- "I read the overture already. The prologue. On Sol's porch. It's mostly about why the book exists, which every book should have to explain."
- "Either you talk me into it or I talk you out of it. I'm not picky which."
- "Wednesdays. Four. Low Tide — the surf shop with the menu on a board. We were always going to study for this anyway."
- **"Daylight. In public."** + [`s2e8_noon=="candor"` ✓] **"The daylight column. Your priest's."** (else: "Nobody can say a word about four in the afternoon.")
- "It's two thousand eight hundred and sixty-five paragraphs. I counted the last one. I did the math. It's years." — "And?" — **"I've got till May in this class and the rest of my life after that."** *(the dropped voice)*
### 6.3 Low Tide and the gown (s07)
- **Low Tide** (new canon): an old surf shop a block in from Seacliff Road where the bike path comes out of the Grove — board racks still up the walls, a plywood counter, the menu on a longboard, an espresso machine with a name on a Post-it, mismatched chairs, a back table by the window onto the bike path. Surfers at eight; nobody at four. **Her choice:** neither of their territories (not the Commons, not Bastille, not the Anchor), daylight, public.
- **The gown** (described once, literary, never an inventory): **black silk, a column cut for a premiere; backless to the waist; a slit to the hip; thin straps; paste diamonds at her ears from *Sweetwater*'s wedding episode ("Wardrobe never asked for them back."); her hair up and done; her feet in the gold heels she'll take off under the table and not mention.** The barista misses the cup with the milk; a kid with a skateboard stops in the doorway, reverses out; two surfers lose their argument about a swell. It is **obvious and funny** and it is also exactly what it is: she hasn't given up. She knows; he knows; **she says so**: **"Yes. It's a strategy. It isn't a subtle strategy. I'm committed to it."** — then **"Sit down. Page one."**
- **The binder:** a tab for every section in her capitals (DESIRE · KNOWING · SPEAKING · REVELATION · …); highlighters by color (yellow = she agrees; pink = she doesn't; green = "this is a good line, which isn't the same thing"). The CCC's cover logo (the shepherd with pan pipes from the catacomb [R]): "Your mascot plays the flute."
- **Ten minutes of the tide homework first** — she is businesslike about the grade (the class is real; the brief's "studying for the class").
- **Jack, honestly:** he looks; his body notices (one plain sentence, frank, not a paragraph; never "he wants her" — that's Lena's register and tic #274); then he looks at the page. `resolve.jack −1` on scene entry.
### 6.4 The duel `cat1` — DESIGN (three rounds + verdict; opponent Skye; real philosophy on both sides; her points writer-set)
**Round 1 — s07a, ¶27 ("The desire for God is written in the human heart…").** *Her move:* reads the first sentence like a casting director reading a breakdown. **Actor's logic:** every script starts with what the character wants; this book gives every character in the world the *same* want — "That's not a character. That's a casting call." Then the real arguments: **(a) projection** — wanting a father in the sky is the most human thing there is, which is exactly why she doesn't trust it; "I wanted a lot of things when I was four that didn't come back"; **(b) unfalsifiability** — "Whatever I want, you get to say what I *really* want is God. A cheeseburger: God. You: God. Winning this: God. You can't lose. That's how I know it's a trick." *(Writer-set: `duel.cat1.skye +1`, `skye_cat_skye +1`.)* *Jack's moves* (`s2e21_c1`; no key):
- **[Press]** *The argument from desire: nobody's born hungry in a world without food.* — "You don't get a want with nothing on the other end of it. Thirst, water. Hunger, food. Lonely, people." — she: "People want to fly." — he: "And there's air." · `duel.cat1.rigor +1`, `skye_cat_jack +1`.
- **[Reframe]** *It doesn't say the cheeseburger is secretly God. It says the cheeseburger doesn't finish the job.* — "You eat it and you want the next thing. That's the line — 'never stops searching.' Not that you want God *instead*. That nothing you get is the end of wanting." · `duel.cat1.rigor +1`, `skye_cat_jack +1`.
- **[Riposte]** "You've read a script where everyone wants the same thing. It's called a love story." · `duel.cat1.wit +1`, `rel.skye.warmth +1`.
- **[Concede]** "You're right that wanting doesn't prove it. The book doesn't say it does. It says it's where you start looking." (true to ¶31's "converging and convincing arguments") · `duel.cat1.heart +1`, `skye_cat_skye +1`, `rel.skye.trust +1`.
**Round 2 — s07b, ¶29 (the bond "forgotten, overlooked, or even explicitly rejected" — and the list of reasons).** *Her move:* reads ¶29's list like a casting breakdown in a voice (revolt against evil in the world; ignorance or indifference; the cares and riches of this world; **"the scandal of bad example on the part of believers"**; currents of thought hostile to religion; and hiding from God, like Adam in the garden) — **"Number four. 'The scandal of bad example on the part of believers.' I'd like you to sit with that."** — then drops the voice. **The real argument — divine hiddenness, in actor's terms:** it's honest that the Church lists itself among the reasons people leave; but *every* reason on the list is something wrong with the one who leaves — "Nowhere does it say *some people looked, and nobody was there.* You've written the reviews before the show opens." · **"I'm not hiding in the bushes. I'm standing in the middle of the yard, waving. If he never stops calling, why can't I hear him?"** *(Writer-set: `duel.cat1.skye +1`, `skye_cat_skye +1`.)* *Jack's moves* (`s2e21_c2`; no key; cue on [Personal] only):
- **[Press]** *A God who showed up like a billboard wouldn't leave you free to say no.* — "You'd believe in him the way you believe in gravity, and you'd love him the way you love gravity." (the freedom response; Pascal's hidden God — Jack may name Pascal) · `duel.cat1.rigor +1`, `skye_cat_jack +1`.
- **[Reframe]** *Waving in the middle of the yard is looking. The book's whole bet is that the looking is him.* (¶30: he never ceases to call every man to seek him) · `duel.cat1.rigor +1`, `skye_cat_jack +1`.
- **[Concede]** "It's written from the inside. You're right. It can't tell you what it looks like from the yard." · `duel.cat1.heart +1`, `skye_cat_skye +1`, `rel.skye.trust +1`.
- **[Personal]** *"You weren't in the yard. The night we met you told me you sit still and listen for something, and you don't expect anybody to answer."* (her own words, S1E16 — "You sit still and listen for something. I do that. I just don't expect anybody to answer." — true; it wins the point and it hurts) · `duel.cat1.rigor +1`, `skye_cat_jack +1`, `rel.skye.friction +1`, `rel.skye.trust −1` · **cue "Skye will remember that."** — her response: still for a second; then, level: "That's a good one. That's going in the binder." (no tears; she banks it).
- *(optional fifth, if the Architect wants wit available: **[Riposte]** "Adam hid in a bush. You'd have asked for a better bush." · `duel.cat1.wit +1`, `rel.skye.warmth +1`.)*
**Round 3 — s07c, ¶30 ("Let the hearts of those who seek the LORD rejoice"; Augustine: "our heart is restless until it rests in you").** *Her move:* reads Augustine aloud in a grand voice — a bishop on a balcony, a Shakespearean Hippo — and gets a laugh out of the barista; then **drops it (the dropped voice of the session):** she has been restless since she was eleven; she called it ambition; her mother called it a career; **"You're telling me it's somebody calling. That's the most romantic line in the book, and I don't trust it, because it's the line every man has ever used on me. *What you're really looking for is me.*"** [`e17_faith=="sincerity"` ✓ add: **"You told me at the Starlite it's true first. Show me where it's true first, and not just the line."**] *(No writer-set point: round 3 is open.)* **The pack paragraph** (one; tic #276) while she reads. *Jack's moves* (`s2e21_c3`; **key every option**; cue on [Personal] only):
- **[Press]** *Augustine isn't a guy at a bar. He tried everything else first and wrote every one of them down.* — "He's not selling it. He's confessing it. Thirteen books of 'I tried that too.'" · `duel.cat1.rigor +1`, `skye_cat_jack +1`. Key: *"When Skye called Augustine's restless heart a line, you told her he'd tried everything else first and written it all down."*
- **[Concede]** "I can't prove the restlessness is him. I believe it. That's the difference between us, and it's the whole thing." · `duel.cat1.heart +1`, `skye_cat_skye +1`, `rel.skye.trust +1`, `rel.skye.warmth +1`. Key: *"…you told her you couldn't prove it, only believe it, and that this was the whole difference between you."*
- **[Reframe]** *The difference between a line and the truth is whether the one saying it needs you to believe it.* — "Every man who used it on you needed something. He doesn't. He'll be there if you say no." · `duel.cat1.rigor +1`, `skye_cat_jack +1`. Key: *"…you told her a line is something the speaker needs you to believe, and that God doesn't need it."*
- **[Personal]** *"You answer every call with 'hi' and you don't know who it's for."* (her Lent, told him in confidence in the Saab — E20 s09a; true; wins; costs) · `duel.cat1.rigor +1`, `skye_cat_jack +1`, `rel.skye.friction +1`, `rel.skye.trust −1` · **cue "Skye will remember that."** — she goes absolutely still; she doesn't do a voice; "I told you that in my car." — "I know." — "Okay." She writes something in the margin he can't read. Key: *"…you threw her own Lent back at her — that she says hi to every call and doesn't know who for."*
- **[Riposte]** "If it's a line, it's the oldest one in the book. It's on page eleven." · `duel.cat1.wit +1`, `rel.skye.warmth +1`. Key: *"…you told her that if it was a line, it was the oldest one in the book — page eleven."*
### 6.5 The verdict (s07d) — by score, **exhaustive, never nested** (her points are 2 from rounds 1–2 on every path)
- **`duel.cat1.heart>=2`** → **a draw**, and she hates draws: **"Draw. I hate draws. Draws are what you get when both actors are good and the director's asleep."** — she writes *DRAW* inside the back cover.
- **`duel.cat1.heart<=1 && duel.cat1.rigor>=2`** → **his**: **"Fine. Chapter One, Article One, to you. Don't get used to it."** — and one honest note in her own voice about his best move (the air; the billboard; Augustine's thirteen books — by which he used: gate on the round flags).
- **`duel.cat1.heart<=1 && duel.cat1.rigor<=1`** → **hers**: **"Mine. Write it down."** — she writes *SKYE 1 — COSTIGAN 0* inside the back cover of her book in green ("green is for good lines").
- **[`s2e21_c2=="personal" || s2e21_c3=="personal"`]** an added line on any verdict: **"That was a cheap shot. It was also a good one. I'm keeping it."** (the binder; she banks it for a later session).
- Then, every path: she moves the receipt to ¶31 — **"'Ways of Coming to Know God.' Next Wednesday. Bring proofs. You've got five, I looked ahead. That isn't cheating; that's the table of contents."** (Aquinas's ways sit behind ¶31–35's "ways"; [R] — keep it "proofs," not "five ways," if the Researcher flags the count). **She goes out first, through the whole shop, in silk, and doesn't look back once** (not barefoot with the heels in hand — that's Lena's wharf, tic #290: she puts the gold heels back on at the door, with a hand on the doorframe, not on him). **The narration, once: she never touched him.** Then the fork (`s2e21_wed`).
### 6.6 Counters (on the choices and scenes above; the Architect writes them exactly)
- Writer-set on s07a and s07b: `duel.cat1.skye +1` and `skye_cat_skye +1` each.
- On each choice: [Press]/[Reframe]/[Personal] `skye_cat_jack +1`; [Concede] `skye_cat_skye +1`; [Riposte] none.
- On s07d (scene set): `cat_section: 1` (absolute), `cat_sessions: "+1"`, `cat1_done: true`.
- **Ranges this episode:** `skye_cat_jack` 0–3; `skye_cat_skye` 2–5. **Neither is ever shown or named on the page.**
### 6.7 Length and register
s07–s07d ≈4,150 (s07 1,100 · each round ≈800–850 · verdict ≈550). Comic and sharp on the surface; serious underneath; **it must be fun to read** — the player should want next Wednesday. **Skye's showbiz register never leaks into the narration** (tic #269). Her bits are hers; the narration stays Jack's.

## 7 (excerpt). THE FORUM — §7.2–§7.6 [outlines/s2e21.md]
### 7.2 "How was Wednesday?" (s10 — the hall outside 217)
Lena asks it, low, with the door half shut and Laney humming inside. **He tells her plainly, in three sentences:** they argued the first four paragraphs; [verdict-gated] who took it; **"She wore a gown. To a coffee shop. On purpose."** Lena's face does nothing for one second. **"Did she keep her hands to herself?" — "Yes." — "Then it's Wednesday."** (Played dead straight — a verdict, not a joke; tic check: not funny.) She turns back to tonight before he can add anything. Then Laney's rude line through the door (her route: "Lena told me about Wednesdays") and **"Laney."** — and silence from 217.
### 7.3 Hale's opening (s11) — his best, given generously
He grants her strongest point first: *ought* has the shape of a debt, and debts have creditors; he doesn't deny the shape; he denies the creditor must be divine — the creditors are sitting in this room (Scanlon, softened), and "the good man in the third row" doesn't need a ghost to collect from him; morality grown from what we are (Foot's natural goodness, which he credits to her own Monday: he heard about the wolf); Euthyphro kept back as a weapon. He is funny about himself ("I have been told I am the Church's most useful atheist. I have never been paid.") and the room adores him. Refuses the lavalier. Ends: **"…and then Miss Broussard has the floor, and I have the rest of my life."**
### 7.4 Lena's opening (s11a)
- The Dean: **"Miss Broussard has the floor."**
- **She starts with the debt** (`s2e20_floor=="sincerity"` — the note she circled). We hear her first sentence (new — e.g., *"Professor Hale has just told you that you owe each other everything. He's right. I want to ask him one question about the word."*) and then **the room in Jack's eyes**: faces turning, the sophomores who came for Hale leaning in, Caleb's pen stopping — **a minute forty** (he checks the clock over the stage; it pays s13's Candor).
- **The good man in the third row**, addressed straight down the aisle — Laney's elbow; Jack's ears; she doesn't look at him while she says it, which is how he knows she means it.
- **The wolf with attribution** [`duel.anscombe.rigor>=2 && s2e20_d2` press ✓ / reframe]: **"A wolf can be damaged. Only a person can be wronged."** — **"I got that from a dishwasher from Youngstown who plays Professor Hale better than Professor Hale."** (laugh; Hale inclines his head; four hundred people do not know who she means and Theo does — he points at Jack from two rows back) · [creditor branch]: "I found my creditor sitting across a table from me on Monday last, and I owe him the argument." · [heart branch]: "Somebody gave me my case on Monday, playing my opponent, and couldn't help it." · [low branch]: she answers Hale's own question from Monday — what she says to the good atheist in the third row.
- [`s2e19_d3=="reframe"` ✓] one sentence: "Professor Hale's motion is a silence about who is owed."
### 7.5 Euthyphro and the third horn (s11b)
Hale: either God commands the good because it's good (then the good is above God, and the atheist can go straight to it) or it's good because he commands it (then it's whim). **"Pick a horn, Miss Broussard."** She falters one second (eyes to the third row; `s2e21_row`). Then: **neither horn** — the good isn't a rule above God, and it isn't his mood; **it's what he is**; commands come out of a nature, the way a promise comes out of a person and not out of a rulebook; "you don't ask whether my mother's love is good because she loves or loves because it's good — you ask whether it's *her*." (Aquinas; later analytic philosophy names it — paraphrase only; [R]). Hale, delighted, concedes the exchange with a look, not words.
### 7.6 Caleb's question (s11b)
He stands with a card he wrote in advance — the question Hale's fans ask (*if God is the creditor, why doesn't he collect?*) — and **halfway the voice changes** and it becomes his own, in pieces: a treasurer; a building fund; a father who stood at the front of an empty church and smiled. He doesn't finish. **Lena answers him kindly and doesn't win off him:** **"I don't know what happened to that man. I know the debt didn't go away when nobody came to collect it. You know it didn't. That's why you asked."** Caleb sits. Hale, at his lectern, looking at Caleb: **one clause, no gloss** (🔒).

## 4.1b DATE #2 — "SOMETHING SMALL, AND HIS" [outlines/s2e21.md §8, verbatim]
## 8. DATE #2 — "SOMETHING SMALL, AND HIS" — THE SPEC (s14–s15c; Romance Writer, Opus)
### 8.1 Rules (brief "After S2E12", binding)
1. **Youngstown-humble; something small and his.** No jacket, no list, no tablecloth, no cab, no flowers. The Carhartt; the 11 bus; a bowling alley on lower Mission; about thirty dollars all in.
2. **Nothing he did with Becca or Skye** (bowling appears nowhere in either thread — checked).
3. **Lena undone by how much thought went into so little** — **three times**, each a small specific thing she discovers (§8.3), and once she says it (§8.6). The narration shows her undone; it never explains why (#114).
4. **Completely at ease; the first evening with no significant others looming.** **No Skye** — no text, no mention, no thought in the narration Friday or Saturday. **Nobody's phone goes off all night** (noticed once).
5. **Kissing only.** Heat very slow. No making out. No "love."
6. **Saturday, not Friday** (Lent).
### 8.2 Plants (Mon–Fri; each pays)
Mon s01 "Mine." / s03 the call ("Sixteen. By the wall.") and "Ask Connie" and the 11 at four (the visit itself off-page) · Fri s14 the Rite Aid (socks; a Barq's) · Fri s14 "Jeans. Something warm."
### 8.3 The three undoings (s15a–s15b)
1. **The socks** — new, white, in the package, from the Carhartt pocket: **"Ma's rule. You never put a bare foot in a rented shoe."** She holds the package and can't say anything; then **"You bought me *socks*."** (Laney's E20 "wear socks that match" — unremarked; let the player hear it.)
2. **The Barq's, unopened, on the scoring table** — [`s2e19_roux=="sincerity"` ✓] **"For my hands."** (her father's Dixie on the back of the stove, from the roux night; she knows exactly what it is and doesn't explain it to him).
3. **The record** — a quarter he's carried since Monday; the one New Orleans record on a California jukebox; Fats Domino (title only) — **"How much *thought* —" / "It's two-fifty a game." / "That is *not* what I'm talking about and you know it."**
*(Also, unforced: BROUSSARD in his capitals on the projector sheet; Connie's "You're the boy who came Monday" revealing there was a Monday; the shrimp-on-a-hoagie "dressed" — "It's a crime against my people.")*
### 8.4 His (the Youngstown in it — said plainly, never mourned)
Frank bowled the **UAW Local 1112 league** for about twenty years at a house on Route 422 (the Writer names it; fictional); average in the 180s; **the league folded last spring, after the layoffs**; Frank's ball is in its bag in the basement on Glenwood next to the Stroh's fridge. Jack learned to keep score by hand at nine, on Frank's sheet, with a grease pencil. That's the whole of it — two or three sentences, in s15a or [candor] s15b.
### 8.5 The ease (what "completely at ease" looks like on the page)
They argue for fun (whether bowling is a sport; Brennan's; Hale's "unforgivable" — what he meant; whether a strike is grace or work); she trash-talks; he laughs at himself; they eat off each other's plates; neither is careful. **No nerves** (the opposite of Le Marin, never said). The narration notices once that no phone goes off — the way you notice a sound that's stopped — and never names whose phone it would have been.
### 8.6 Her line and the lost hour (s15c)
On her landing at 1:59 the RAZR between them goes from **1:59 to 3:00** ([R]). "Where'd it go?" — "Arizona." Then, plainly, **"Nobody has ever thought this hard about me for two dollars and fifty cents."** — `s2e21_hour` — a kiss (hers or his by option), still only a kiss.
### 8.7 Length and register
s14 ≈650 · s15 ≈500 · s15a ≈1,450 · s15b ≈1,300 · s15c ≈950 → ≈4,850 (date proper ≈4,200). Warm, funny, unhurried; the happiest Lena has been on the page all season. No music beyond the jukebox.

## 4.2 HIDDEN CANON THAT TOUCHES THIS EPISODE [bible S2E21 notes, verbatim: §7 Lena L394 · §8.1 Theo L546 · §8.2 Laney L664 · §8.3 Margot L748 · §8.4 Kevin L828 · §8.5 Osei L905 · §8.6 Hale L1010 · §10.10 Caleb L1941 · §10.2 Skye L1368–1377 (incl. THE CATECHISM CAMPAIGN — DESIGN OF RECORD) · §21 rows #92–#93 L3065–3066]

*(Bible §7 Lena L394 omitted: it restates plan §5, §7 and §8 above — Monday landing, the condition, 217 "for a war", "How was Wednesday?", the Forum, date #2, rose; read it in the bible if needed.)*

**(S2E21 plan:)** Mon 7:10 a.m. counting the Oscar pool in a coffee can. **The quiet about Skye ends only because Jack breaks it** — [theo fork Wed ≈9:10 p.m., 412] Jack tells him plainly: Skye is reading the Catechism from page one and arguing it with him every Wednesday. Theo's register: performance first ("The *whole* thing?"), then what only a childhood friend would know — **she finishes things** (she once read all of Stanislavski in a weekend at fourteen to win an argument with a director, and won it) — then the one true short line: **"Be careful with her, Costigan. Not for you."** "Does Lena know?" — "Yesterday. Before anybody." — "Good." 🔒 **He shows no prior knowledge that she came back or why; nothing hints at his call (no "I know," no "she told me," no look, no pause that reads as knowing).** He is surprised in the right places. Thu: runs a book on the Forum swing out of the Oscar coffee can (Broussard, heavy); collects. Sat: nothing (the date is theirs). No look with Kevin; no look with Evan at the doors.

**(S2E21 plan:)** Learns of the Catechism Wednesdays from Lena (Tue night; her route on the page — "Lena told me about Wednesdays"). **Thu 5:40 p.m., 217: dresses Lena for the Forum "for a war, not a date"** ("Pearls are a *threat*."); one rude line about Skye (she's allowed; she's rude to all of Jack's girls and privately likes this one) — and **Lena stops her: "Laney."** — Laney stops. In the third row beside Jack at the Forum; screams at the swing. **Sat 5:40 p.m., 217's door: "He's in the *Carhartt*."** — "Where are you *taking* her?" — "Mine." — "That is not a *place*." 🔒 No pill on the page. "Laney will remember that." (`s2e19_tabloid`) still held.

**(S2E21 plan:)** Covers the Forum for the *Tide* (press badge; a quote from Lena in 217 — "Are you going to win?" — "Yes." — "Good. That's the headline."); at the Forum, she hands Fr. Osei a card at the back of the hall (the anniversary feature, unremarked; theo path — Jack has no context). 🔒 Nothing of Lena's April surfaces; nothing about Kevin from her (she knows; she gives no look).

**(S2E21 plan:)** **Clare ends it — Tue Mar 9**, in the Newman kitchen by the dish rack, kindly (she deserved better and knew it; nobody is a villain). **Tue ≈11:40 p.m., the Anchor counter** — Kevin, who never comes to the Anchor, alone; Gloria reads him and brings pie without being asked; to Jack: **"Clare ended it. Tonight. By the dish rack." … "She said I'm a very good man who's never in the room." … "Respectfully — she's right."**; "Don't tell Laney. She'll organize something." 🔒 **Nothing of §8.4's private truth is said, implied or glossed** — no "where are you, then," no deflection that invites a guess; the narration infers nothing about why. Thu: at the Forum alone; Clare across the aisle with the Newman band kids; a raised hand each way, no more. Sun: alone two pews up; at the sign of peace he turns round to the old man behind him. "Respectfully" ≤2. No look between Kevin and Theo.

**(S2E21 plan:)** [osei fork Wed ≈8:00 p.m., his office — **not confession; the seal untouched**] Jack asks whether the Wednesdays are right. **Osei speaks to the real good in it** (brief: love wills the good of the other): **she wants to understand what took him from her — "That is not an attack. It is a pilgrimage, though I would not use the word to her face."**; on the gown, a laugh — "Read the page."; on the promise to Lena — keep it to the letter, and keep it out loud; daylight was her choice and it was well chosen. Highlife on the office turntable. **Thu:** at the back of Sandoval by the doors, in his collar; claps three times at the swing; a nod across the emptying hall to Hale (the long wary respect, §8.5 E10 note). **Sun, Laetare: rose vestments** ("Rose, for one Sunday."), flowers back on the stands, Gus allowed the full organ; Joshua 5 (the manna ceases) and **Luke 15** (the prodigal and the elder brother); homily two sentences, never aimed (the father goes out twice — once to the son who ran, once to the son who stayed and is angry; the second walk is the longer). 🔒 The seal: nothing knowing.

**(S2E21 plan:)** **Mon Mar 8, Hollis 302 — the last seminar before the Forum:** nobody at his table may say the word *Thursday*; after the Forum, Waugh (fresh copies; Berkeley restrained). **After class, Hollis 302: "Mr. Costigan. Thursday last. I'm told you were in Ohio."** (`s2e21_ohio`) — whatever Jack answers, the last of it is **"Sit where she can see you."** **Thu: 109H cancelled by a note on 302's door** ("Miss Broussard is excused the burden of being taught today; the rest of you are excused the burden of me. —A.H."). **7:00 p.m., Sandoval Hall 1: proposes the motion and loses** — magnificent, generous, grants her best point first, refuses the wireless mic, gets laughs; the swing goes against him; **"The motion is defeated. Deservedly."**; shakes her hand and says the sentence only she hears ("You were very kind to my third row." / "I know. It was unforgivable."). **At Caleb's question his face does one thing, once** (🔒 he recognizes his own wound a generation down; no gloss). [hale fork] the loading dock, a flask he doesn't offer: **"Mr. Costigan. You armed her."** (the wolf [d2 press/reframe] / the creditor [else]) — proud, wounded, possessive; "Don't tell her I said so. She'll know." **Loves her more for it** (§8.6 arc: S2 debates Lena publicly and loses). 🔒 Nora, the postcard, the forty-one seconds, Compline: nothing.

**(S2E21 plan — #41 cracks):** Thu Mar 11, the Forum, front row in a clip-on tie with Hale's book on his knee. **At the floor questions he stands to ask Lena the question Hale's fans ask, and halfway his voice changes and the question becomes his own** (a treasurer, a building fund, a father who only smiled — said in pieces, never the whole story); **Lena answers kindly and doesn't win off him** ("I don't know what happened to that man. I know the debt didn't go away when nobody came to collect it. You know it didn't. That's why you asked."). **At the vote his cards stay in his lap, both of them, face down** — Jack sees it. [caleb fork] the Sandoval front steps: "She didn't make him the bad guy. … My dad would have prayed for him. That's worse." ([`e14_vile` routed Jack to the Shipwreck stairs in S1E14]: "Like I told you on the stairs." — else he says the father line fresh). Never a strawman: his unbelief is honest grief.

### Skye [bible §10.2, L1368–1377]
*(Bible §10.2 Skye L1368 omitted: it restates plan §6 above (pitch, gown, rounds, ¶31 receipt, Post-it, Sunday text) and the held list. The DESIGN OF RECORD follows.)*
**THE CATECHISM CAMPAIGN — DESIGN OF RECORD (registry #92; S2E21 on; every later planner continues it IN ORDER):**
- **Frame.** Standing **Wednesdays, 4:00 p.m., Low Tide** (Las Olas; daylight; public; her choice) plus Oceanography Tue/Thu (Pair 41, the refraction project, partners till May) — "their regular coffees and studying for the class." Holy Week, finals and summer may move or pause a session; she never skips a section to make up time. Summer 2010: by letter or phone (the room's call).
- **Text.** *Catechism of the Catholic Church*, 2nd ed., paperback (hers, new, from the Borders on Mission; his, used, $4 from Driftwood Books, a stranger's pencil in it). **She starts at the beginning and goes in order, never skipping** (she read the Prologue, ¶1–25, on her own as "the overture" before session 1 and says so in one line). **One section or theme per session.** Each session is a short **duel vs Skye** (`catN`: three rounds + a verdict scene), scored rigor/wit/heart, her points writer-set as `duel.catN.skye`; **she takes at least one round every session and the whole session on a real share of paths; never a strawman; real philosophy on both sides; Jack doesn't always win.** Distinct register from Jack–Lena duels: improv, actor's logic (want, objective, the scene's "about"), status games, voices dropped into sincerity; Lena argues from inside the tradition, Skye from outside it and from the craft.
- **Counters.** `skye_cat_jack` — +1 for each point Jack lands that moves her (Press/Reframe/Personal): a step in her understanding (the road to Flannery; **never a conversion counter**). `skye_cat_skye` — +1 for each round she takes (writer-set on her move scenes) and each honest Concede: a point he had to grant (**never a deconversion counter** — brief: bent, never broken). `cat_section` — absolute, the last section argued. `cat_sessions` — +1 a session. A session's verdict reads from `duel.catN.*`, exhaustive and non-nested: `heart>=2` → draw; `heart<=1 && rigor>=2` → Jack's; `heart<=1 && rigor<=1` → hers.
- **The map (her binder's tabs; continue in order; a planner may pair two short sections):** 1 ¶27–30 The Desire for God (**S2E21, Wed Mar 10**) · 2 ¶31–38 Ways of Coming to Know God (the world and the human person; "converging and convincing arguments"; reason can know God; St. Patrick's Day, **S2E22, Wed Mar 17**) · 3 ¶39–49 How Can We Speak about God? (analogy; the greater dissimilitude) · 4 ¶50–73 Revelation (the plan; the covenants; Christ the fullness) · 5 ¶74–100 The Transmission (Tradition, Scripture, Magisterium) · 6 ¶101–141 Sacred Scripture (inspiration; interpretation; the canon) · 7 ¶142–175 Faith (the obedience of faith; Abraham, Mary; faith and reason) · 8 ¶176–184 the Creeds · then **Section Two, article by article**: God the Father; **the Trinity** (her voice-block line "the Father, the Son and a bird" — first on the page in S2E21 s04 [wit], if chosen); the Almighty; **Creator, and providence and evil (¶309–314 — her hardest, "everybody I've ever loved had a call time" territory; never decoration)**; heaven and earth; the angels; man; **the Fall**; the Son… through the Creed; Part Two (the Sacraments; **the Eucharist** — the Communion she watched him walk to; **Penance** — the box she sat outside; **Matrimony** — loaded); Part Three (Life in Christ; **the sixth commandment, ¶2331–2400 — the most dangerous session; place it late**); Part Four (Prayer; the Our Father — "both endings," learned on the 101). Years, not weeks; she knows it and doesn't care.
- **Dressing.** Provocative, **never touches him** (and he never touches her). The first session obvious and funny (the gown). **Each later session a different strategy, never repeated** — subtler and more dangerous each time (escalation in kind and nerve, not a ladder of skin): a costume that's a joke on the section, something borrowed from a set, something plain that is somehow worse. Within the literary standard; described once each.
- **The whole mix** every session (brief, standing): intellect, wit/play, the sex appeal, the fun — and once a session, the voice dropped.
- *(Lena's condition (registry #93) omitted here: the verbatim lines and the "Skye unaware" rule are in §4.1 plan §5 and §1.0.)*
- **Ends in friendship** by the end of the spring semester (still part of her fight to get him back; never joins the group; makes time for Jack and Theo); the Flannery O'Connor biopic in a later season grows out of it; Lena's dislike honest; Lena's Skye joke (#80) only after the campaign ends.

### Registry rows #92 and #93 [bible §21, L3065–3066]
| 92 | **The Catechism campaign** (brief "SKYE'S BREAKUP AND AFTER" steps 6 and 8; "After S2E20 — S2E21 answers"; player-approved mechanic) — Skye reads the *Catechism of the Catholic Church* from the beginning, in order, and argues it with Jack one section at a time, each session a duel vs Skye; her aim: argue into understanding, so either she's persuaded of his faith or he's dissuaded | MS (S2E21 → S3+) | **S2E21** (Tue Mar 9 the pitch, Pair 41; **Wed Mar 10 session 1, Low Tide, ¶27–30, the gown**) | weekly Wednesdays; counters `skye_cat_jack` / `skye_cat_skye` / `cat_section` / `cat_sessions`; the map in §10.2 ("THE CATECHISM CAMPAIGN — DESIGN OF RECORD"); the condition revealed to her (#93, after several meetings); friendship by the end of S2 (still part of her fight) | the friendship (S2 end) → close friends later; **the Flannery O'Connor biopic** (a later season) grows out of it; Lena's Skye joke (#80) only once it's over | **S2E21 plan:** opens — session 1 (¶27–30); `cat_section` 1 |
| 93 | **Lena's condition / "I can work with that"** (brief "After S2E20" + the CORRECTION; echoes #91, S1E20) | ME | **S2E21 s05** (Tue Mar 9, Sandoval Hall 1, the empty stage): Lena to Jack, verbatim — **"If she ever makes a move, it stops. The coffees, the book, all of it. Promise me."** — "I promise." (every path) | **Skye doesn't know it exists** until the reveal (S2E22 at the earliest; the room recommends not before session 4, S2E24–S2E26, after Easter strongest): right before a kiss — "Don't. If you do that, I have to stop meeting you for this. I promised." / "You promised?" / he quotes Lena exactly / "So I'm the one not allowed to make a move?" / "You know that's not what she meant." / the ghost of a grin, the familiar expression — **"I can work with that."** | she works the loophole (the move must be his); the line holds; the meet-ups end only if someone moves, or when the campaign ends | **S2E21 plan:** the promise made; Skye unaware |


## 4.3 THE SEAL AND THE ROOM-ONLY PRIVATE TRUTHS (bible; for the room, so the Writer knows what silence holds and never spends it)

### Osei [bible §8.5, L822–836 and the S2E18 plan note L887]
**Private truth. 🔒** He was married. **Abena Osei** (née Mensah), a schoolteacher, died on November 14, 1997, on the
Accra–Tema motorway, when Gabriel, driving her to the hospital in labor with their second child, swerved to avoid an
overturned tro-tro. The baby girl (they had named her Esi) died with her. His left leg was crushed; hence the limp. He
was the doctor in the car and could do nothing. Their son **Kwame**, then eight, was sent to Abena's sister in London
(Peckham) while Gabriel recovered — and then Gabriel went to seminary instead of bringing him home. Kwame, now 20, at the
London School of Economics, has not spoken to his father in four years. Gabriel writes him every month.

He holds two sealed confessions about the same night at the Point (🔒 §20): Lena's (April 26, 2009) and Theo's (July
2009). He knows more about Nora Calloway's death than anyone alive except Theo, and he will never say a word of it. Not
to Jack, not to police, not to a judge. The show honors the seal absolutely; it costs him, publicly, in S5.

**Wound.** Abena, Esi, Kwame. The choice of the altar over his son.

**Want vs. need.** *Want:* to save them all. *Need:* to let God do it, and to be forgiven by his son.

### Theo [bible §8.1, L494–507; S2E18 note L540]
**Private truth. 🔒** Theo was at Marisol on the night of April 25–26, 2009 (Preview Weekend). He is the one who was on the
cliff when Nora Calloway fell. (§20.) He has not slept more than four hours at a time since. His hedonism is
self-punishment wearing a party hat. He chose Marisol over USC *because* of the Point — he could not be anywhere else. He
leaves fresh flowers at the Point cross every Sunday before dawn. In July 2009, during freshman orientation, he walked into
St. Brendan's Newman Center for the first time in his life and made his first confession since he was eight. Fr. Osei
has known since July what his new parishioner's roommate did.

He latches onto Jack the moment he sees the crucifix go up on the wall. Jack is the nearest thing to grace he can stand
to be near without being looked at by it.

**Wound.** The girl's jacket in his hands. Under that: a father who taught him that every problem has a fixer.

**Want vs. need.** *Want:* to be punished without being known. *Need:* to be known and survive it.

### Kevin [bible §8.4, L749–760]
**Private truth. 🔒** Kevin is gay and out to exactly one person, Margot (week four of S1 — before that, no one). He came to
Marisol's Preview Weekend in April 2009, met a blond LA kid on the beach stairs behind the Lighthouse, and kissed a boy
for the first time; they had about an hour. That boy was Theo. Around 12:45 a.m. Theo knocked on the door of Kevin's
host's room in Serra Hall, soaked to the knees, his hands scraped raw, holding a woman's denim jacket, and said, "You
never saw me." Kevin let him sleep on the floor. In the morning a girl was dead. Kevin has never asked. He has never told.
He pretends, when they "meet" on Jack's first night, that he's never seen Theo before. Theo pretends too.

**Wound.** The family's sacrifice is a debt he can't repay and can't refuse. Being loved for a person he isn't.

**Want vs. need.** *Want:* to be good — perfectly, visibly good — so that nothing else can be seen. *Need:* to be loved as
he is by someone who isn't lying either.


### Hale [bible §8.6 L908–917, L989; the S2E19 note is in §4.2]
**Private truth. 🔒** Son of an Anglican vicar in a mining town. Served at the altar until seventeen. Lost his faith the
winter his mother died of ovarian cancer, slowly, while his father remained serene; he has never forgiven the serenity.
He still says Compline, drunk, alone, from his father's prayer book, and would rather die than be caught. On his worst nights
he drinks alone in the Anchor's back booth after midnight, orders pie he doesn't eat, recites Housman to the harbor window,
tips "like he's apologizing," and lets Gloria call him a cab (first on-page: Nora's birthday night, S1E04). He collects
believers: for years he has written one-line postcards to devout high-school students who send him rebuttals of his book —
"Come and say it to my face. —A.H." He wrote one to Jack (2008). He wrote one to Lena (2008). He wrote one to Nora
Calloway (2007). On the night of April 25, 2009, at 11:52 p.m., Nora called him from the Point path. He was drunk. The call
lasted forty-one seconds. He said: *"Go home, Nora. You're drunk and you're boring me."* He told the police she'd called
upset about a paper and he'd told her to sleep on it. That's not quite a lie. It's worse.

### Lena §18 A (the Preview Weekend; digest — the seal is honored) [bible §18 A, L2500–2529]
🔒 Lena (17) was Nora Calloway's Preview Weekend guest, April 24–26, 2009 (Serra 3B); Nora left at 11:40 p.m. ("Cover for me, Magdalena"); Lena saw the pregnancy test in the bathroom trash, heard a boy crying in the corridor ~12:45 a.m., threw the test in the dumpster behind Serra before the police came, lied to Det. Ochoa ("fine, a little sad, normal sad"), and confessed it to Fr. Osei on April 26 at 2:00 p.m. (sealed). The autopsy already showed the pregnancy; her sin hid nothing; her guilt is real. Hale's 2007 postcard (*Come and say it to my face. —A.H.*) hung over Nora's desk; Lena has the same card in her missal. NOTHING of this surfaces this episode.

### The elision rule [bible §15, L2400–2409]
## (bible §15) The elision rule (how close third keeps Jack's secret honestly)

Jack is the POV and the player *is* Jack, so the narration must never lie about what Jack did. It may **elide**: it can
decline to narrate a memory. Jack thinks about Danny constantly; the narration says so. It shows Jack flinching from the
scar story, smoking when Danny's name comes up, sending money orders to a "D. Kostelnik" (S1E05, a detail with no
explanation), writing letters he doesn't send. It never says "Danny did it" in Jack's voice; it never says "Jack did it"
until the reveal. When the truth comes out (S2E22), every earlier scene must read as honest in retrospect: the player
should feel *Jack was carrying this the whole time and I was carrying it with him without knowing.*
- Allowed: "Jack doesn't think about that night. He's good at it."
- Not allowed: "Jack has never hurt anyone."

### Secrets register [bible §14]: Skye's real name (Mary Catherine Callender, baptized Catholic) and her Theo ties stay off the page; Kevin gay (Margot only); Theo and the Point (Osei's seal; Kevin partial); Osei's Abena, Esi, Kwame; the alliance is visible but never said aloud.

---


---

# 5. ARCS AND SEASON MAP

### 5.1 Status after S2E20 (played; bible §21 "Status after S2E20" L3327, verbatim; the full entering state and S2E20 path are in plan §0)
**Status after S2E20 (played path; added by the S2E21 Showrunner plan, 2026-11-02; real `saves/after-s2e20.json`):** #1 — **date #1 played: Le Marin, the fire, "I've been terrified of you all night." — "Oh, thank God. Me too." [Candor]; her kiss at her landing; "Tomorrow."; the second ask on Ocean Road ("Will you let me take you out again? Saturday. I'm planning it." — "Where?" — "Mine." — "Then yes."; "That's two. There's one left.").** **Lena trust 136 · warmth 130 · heat 89 · friction 37.** #21 Skye — **step 5 played**: the folder held out [Sincerity]; "As long as it takes." [cue]; "I noticed. Every time."; **the parade answered "There wasn't a contest… some of the best months of my life, and I still did this."** [cue]; "this isn't done"; she keeps the flannel; **the Catechism on her dash**. **Skye trust 79 · warmth 88 · heat 80 · friction 11.** **Lena heard "She says it isn't done."** (`s2e20_tell=candor`; "Saturday stands."). Theo 29 · 39 · 2 ([theo] dinner school, "Thanks for this, Theo."; the pitch Sunday) · Laney 7 · 23 · 3 · Kevin 9 · 15 · Margot 6 · 16 · 3 (feature unseen: theo path) · Hale warmth 15 · trust 2 · friction 3 · Osei 15 · 10. Soul **grace 84 · honesty 108 · restraint −31**. Traits **sincerity 261 · candor 153 · wit 133 · reckless 75 · control 53 · charm 29**. **resolve.jack 10** (clamped) · **resolve.lena 5** (pinned). `jack_cigs` 17 · `jack_cigs_jf` 6 · `reliquary` 17 · `pack_unopened` (its worst hour survived; [candor] he turned the phone back on). Duel `anscombe` **rigor 3 · lena 2** (press / press / reframe — **Lena granted the wolf** and will use it "with attribution"). The jacket: **Walter's $9 herringbone** (the card in the pocket; a Requiem at the register and another at Le Marin). Station: the ninth (he falls the third time). `s2e20_floor=sincerity` ("2 MIN"). #74 date #2 set Sat Mar 13 (his). #80 not started. #57 "There's an asterisk."; the Veuve corked. #11 Kevin and Clare at the 11:30 ("Kevin lets her."). #32 Gloria "Don't order the duck."

### 5.2 Registry rows touched (bible §21 "Registry notes (S2E21 plan)" L3328, verbatim; plan §3 has the arc-by-arc detail)
**Registry notes (S2E21 plan, digest):** #1 date #2 Mission Lanes (kissing only; Lena trust +4–6 · warmth +4–6 · heat +2–3 · friction 0 to −1) · **#92 (new)** the Catechism campaign opens (pitch Tue; session 1 ¶27–30 Wed, duel `cat1`; counters begin) · **#93 (new)** Lena's condition, verbatim, every path; Skye unaware · #21 Skye step 6 (trust +1–2 · warmth +1–2 · heat +1 · friction 0 to +2) · #8/#7/#41 the Forum: Lena wins (211/98/63 → 149/201/22), Hale "Deservedly.", Caleb's cards stay in his lap · #11 Clare ends it Tue; the Anchor at 11:40 · #80 not started ("Laney.") · #57 Theo's Forum book; still secret · #38/#84 Frank's league; "Your father took me bowling."; CHAMPS. · #29 the pack sealed · #9 [osei] "a pilgrimage"; Laetare rose.

- **HELD (do not spend; plan §3.1):** "I love you" between Jack and Lena (S3 summer) · making out (S3) · "Then ask me." / the Facebook status / official (Easter Vigil, S2E24) · the alliance reveal and the champagne (Easter dinner) · **"I can work with that" and the condition told to Skye (#93)** · Skye's "side of the road" bit · Lena's Skye joke (#80; after the campaign) · Theo's admission of the Skye call (much later) · the pack's fate (Easter, into her tin) · Laney's "Laney will remember that." (`s2e19_tabloid`) · "That's how much I like you, Costigan." (S2E22) · Josie's "Ask me at Easter." · Lena's second candle ("One's not your business") · Skye's birthday text (Easter Sunday) · Danny's truth · Lena's April 2009 · Kevin's and Theo's truths · Hale's Nora · Skye's real name to Lena (never) · "I knew" (retired for good). **SEEDS to plant (plan §3.1):** the St. Joseph altar ("Leave it with me."; Nonna's fava beans; Mémère's "le 19 mars" card) · session 2 ¶31–38 Wed Mar 17 ("Bring proofs.") · Waugh after the Forum · Caleb's red card in Lena's missal [caleb] · Kevin alone · Margot's card to Osei · Frank's ball in the basement · the score sheet with BROUSSARD · Walter's card (can come back).

### 5.3 Season map: this and the next two [bible §23.2 L4232–4243 (S2E21 entry + the S2E21 plan rev. 1 note), L4244+ (S2E22, S2E23); digest]
**S2E21 "Laetare"** (Mar 8–14, Laetare; rose vestments): the bible's old map text (date #1; the laptop story) is SUPERSEDED; plan of record = plan §2 (Mon landing and Hale; Tue pitch, empty stage, the Anchor; Wed session 1 + fork Theo/Osei; Thu the Forum + fork Hale/Caleb; Fri Stations; Sat Mission Lanes; Sun rose, Joseph seed, Ma, Skye's text).

**S2E22 "St. Joseph"** (Mar 15–21): Fri Mar 19 Jack's 19th — Lena took it ("Leave it with me."), the St. Joseph altar in the Delgado kitchen, a feast with everyone, "That's how much I like you, Costigan." unspent; Mémère's "le 19 mars" card due; **Catechism session 2 Wed Mar 17 (St. Patrick's Day), ¶31–38 "Ways of Coming to Know God", duel `cat2`**, a new dressing strategy (never the gown), never a touch, she still does not know the condition (reveal not before session 4); Sun Mar 21 the House votes. **S2E23** (Mar 22–28): date #3 Thu Mar 25. **S2E24** (Mar 29–Apr 4): the Easter Vigil, official; Easter dinner (champagne, the alliance reveal); Skye's birthday text.

### 5.4 Romance roadmap, current state [bible §24; the plan's §2 ROMANCE LADDER and SKYE LADDER (ten and six rungs) are in `outlines/s2e21.md` L88–108 — read there]
S2E19 "No." + the first kiss → S2E20 date #1 "Properly" (Le Marin; the second ask) → **S2E21 date #2 Sat Mar 13 (his; Mission Lanes; the lost hour)** → S2E23 date #3 → Easter Vigil official (Apr 3) → Easter dinner → first "I love you" on a SUMMER 2010 visit (S3); heat VERY slow (kissing only until the S3 summer visits). Skye: porch (E18) → silence (E19) → return (E20, step 5) → **the Catechism campaign opens (E21, step 6)** → the condition revealed to her much later (S2E22 at the earliest; the room recommends after session 4) → friends by the end of the semester.



---

# 6. LEDGERS (digest: continuity.md §1 + the S2E18–S2E20 entries + plan objects; knowledge.md "LIVE RISKS carried out of S2E20" + plan §13 who-knows-what; the played save wins over branch notes)

## 6.1 Standing facts [continuity.md §1; save `after-s2e20.json`]
- Jack (b. Mar 19 1991, Youngstown; turns 19 Fri Mar 19 = St. Joseph; RAZR V3 cracked hinge; Danny's Carhartt, breast pocket holds the RAZR and the sealed Lent pack; St. Michael medal). Lena (b. Jul 22 1991; LG enV2; Grandmère Lucille's Miraculous Medal; the tin; 217). Theo (iPhone 3GS; sleeps ≤4 h). Laney (pink BlackBerry Curve; Coco the coconut). Margot (Nokia). Kevin (BlackBerry Bold; his mother's Odyssey). Hale (Hollis 314; PHIL 109H Mon/Thu 1:00, Hollis 302; fountain pen, tall hand leaning backward). Skye (white 3GS; white Saab; the flannel (hers); the binder; Sol's house on Del Playa).
- Costigans: Frank (Lordstown, laid off; ALL CAPS; Silverado; UAW Local 1112 league), Maria (Ma; St. Brigid's school secretary), Danny (Trumbull), Gina (Denver), Nonna (Calabrese). Tallies: `jack_cigs` 17, `jack_cigs_jf` 6 (none lit since Feb 5; Lent pack Marlboro Reds, sealed — day 20 Mon Mar 8 → day 26 Sun Mar 14); the tin 17 (Lena's); `confession_owed` 0; resolve.jack 10 (clamped), resolve.lena 5 (pinned). Entering axes: Lena 136 / 130 / 89 / 37; Skye 79 / 88 / 80 / 11.
- **Places:** Delgado 412 and 217; the east stairwell (Lena's landing between 2 and 3; Jack's step third down from four); Hollis 302 (Jack door end under the clock, Lena window end); St. Brendan the Navigator (front steps onto Ocean Road; Stations Fri 7:00; Sunday 11:30; olive tree); Morro 1100 (back row under the exit sign); the Anchor. **NEW CANON this episode (plan §15; Continuity confirms after drafting):** **Low Tide** (Las Olas coffee bar in an old surf shop a block in from Seacliff Road where the bike path comes out of the Grove; board racks, plywood counter, menu on a longboard; Skye's Wednesdays 4:00) · **Mission Lanes** (sixteen lanes, lower Mission, built 1961; neon pin with its head burned out; overhead projectors and grease pencils; Ed and Connie Tavares; lane sixteen "the return sticks") · **Sandoval Hall 1** (the Forum hall, ≈400 orange seats) · Driftwood Books (Jack's used CCC, $4) · Frank's league (Local 1112, folded last spring; his ball in its bag in the basement on Glenwood) · Ma bowled a 41 on her second date with Frank (1979).

## 6.2 Last three episodes [continuity.md; knowledge.md]
- **S2E18 "Honestly" (Feb 21–24):** Lena ended it with Julian (off page); **the porch (Del Playa, Tue Feb 23)**: Jack ended it with Skye to her face, told her everything, wouldn't say "love" about Lena, said "I love *you*. That's the one I can say."; she concluded he cheated; "Get off my porch." / "You were never a bit."
- **S2E19 "No." (Wed Feb 24 – Sun Feb 28):** Skye removed the Facebook relationship status herself; the halves of the alliance joined; **the asking on St. Brendan's steps: "No." — "Ask me to dinner, Costigan. Then ask me again. Then ask me." — the first kiss**; the wake in 412 (the Veuve corked "until there's a yes without an asterisk"); "Never. Not with anyone." (both, to each other alone); the roux (her father's Dixie "for his hands"); dinner asked: "Then yes." (`date1_set`); Lena's kiss on his step: "There. That's for the donut."
- **S2E20 "Properly" (Mon Mar 1 – Sun Mar 7):** Mon the Forum motion announced (Thu Mar 11; Hale for, Lena against; "That one can be good without God"); Jack plays Hale in 109H (duel `anscombe`: rigor 3 / lena 2; the wolf granted); Hale gives Lena three pages and keeps her; Wed Lena's rehearsal (**"You win it in the first two minutes or not at all. Start with the debt."**), Jack's jacket = Walter's $9 herringbone; **Thu Mar 4 Skye returns** (the Saab in Lot 22; "Tuesday and before"; her Lent; the parade line; "this isn't done"; she keeps the flannel; a Catechism on her dash; "Get out of my car, Costigan."); Lena heard "She says it isn't done." ("I mind… Saturday stands."); **Sat date #1 at Le Marin** (the fire; "I've been terrified of you all night." — "Oh, thank God. Me too."; her kiss at her landing: "That was one. Ask me again tomorrow."); **Sun "Will you let me take you out again? Saturday. I'm planning it." — "Where?" — "Mine." — "Then yes."**; Ma and Nonna know the fire; Laney: "Is there an asterisk?" — "There is."
- **Ledger error to ignore:** continuity.md S2E20 "Owed payoffs" misglosses two nextTime lines (birthday; Margot's feature): "Something small, and his." = date #2; "One section at a time." = the Catechism. **Carried and untouched:** page 233; Mémère's "le 19 mars" card; the cedar-chest ring; Luc's gas-leak file; `promised_skye_truth`; Cabazon postcard and swing print; Clovis holds the pack (eight left); Kevin's 35:15 sheet; the Wes line; Margot's list (Julian, Priya, Magdalena Broussard) and Preview Weekend; Lena's second candle ("One's not your business").

## 6.3 Objects the plan carries [plan §0, §2, §6, §8]
Hale's three pages; Lena's index cards (**2 MIN**) · the lavalier Hale refuses · Skye's paperback CCC (Borders sale sticker; receipt moved to page one, then ¶31; the binder; highlighters yellow/pink/green) · Jack's used CCC (Driftwood, $4, a stranger's pencil, *yes* at ¶30) · the Post-it *¶31. PROOFS. WED.* · the gown (black silk column, backless, slit to the hip, paste diamonds from *Sweetwater*, gold heels) · the sealed Lent pack · the Forum flyer; Hale's door note; the colored cards (Caleb's red card to Lena) · the Oscar coffee can · the Carhartt · white women's socks, a Barq's · lane sixteen, the projector sheet (BROUSSARD) · a quarter for the jukebox · the RAZR (1:59 → 3:00) · rose vestments · the Veuve still corked.

## 6.4 Knowledge — LIVE RISKS and who-knows-what [knowledge.md "LIVE RISKS carried out of S2E20" + plan §13]
- **Out of S2E20:** Jack and Lena know date #1 (the fire, the list, the laptop night), the kisses, and date #2 on Sat Mar 13; 412 (Theo, Laney, Kevin, Margot) knows by Sunday night; the lounge saw Lena's head on Jack's shoulder; Ma and Nonna know the fire and the date; **Skye knows only the Thursday conversation — nothing of the steps, the kiss, Le Marin or Lena's Forum thread**; Hale knows Lena said "Ohio"; Margot knows nothing of Preview Weekend. Skye keeps the flannel; "this isn't done" is open.
- **This episode — Skye knows:** Tuesday-and-before and the S2E20 car; she learns the campaign is accepted, [`s2e21_terms=="candor"`] that he'll tell Lena, that he looked at the gown, his arguments. **She does NOT know: Lena's condition (any part of it), the dates, the kisses, the Forum beyond a public flyer, that Jack told Lena about the gown. She never says "Ted" or mentions Theo (🔒 the call).**
- **Lena knows:** the campaign (s05, from Jack first), Wednesday's result and the gown (s10, from Jack), "it isn't done" (E20), Skye's Sunday text (s19, shown unasked). She does not hear Skye's own words beyond those; learns of Kevin and Clare only if told (not on the page); reads Hale's loading-dock words off Jack's face [hale].
- **Laney** knows the campaign from Lena (Tue night, off-page; "Lena told me about Wednesdays"), not Kevin's news. **Theo** [theo] learns of the campaign and that Skye came back to class — 🔒 nothing shows prior knowledge. **Osei** [osei] learns of the campaign and the promise from Jack, not in confession. **Kevin** tells Jack of Clare, asks him not to tell Laney. **Hale** learns what Jack chose to say about "Ohio". **Ma/Nonna** learn "bowling". **Connie/Ed** know Jack from Monday (off-page).
- **Banned:** knowledge-then-deflection (#2); any hint of Theo's call; any implication about Kevin's private truth (no "where are you, then?"); any Skye line that could read as knowing the condition; Lena joking about Skye; "love".
- **Knowledge Auditor checklist:** see §7 (verbatim).

---

# 7. TIC REGISTRY AND KNOWLEDGE CHECKLIST [room.md L29–587 verbatim, re-copied (registry changed): Knowledge Auditor checklist + full tic registry #1–#291, incl. #283–#291 (new since the S2E20 pack: the discreet stranger who looks away, the kiss-tail quip "against his mouth", "her hand finds his", a tender beat deflected to a window/lapel/thread, conditional jacket recap lines, a set-piece speech performed in full twice, "in my life" superlatives, the rival borrowing the heroine's gestures, one identical exchange pasted under every option)]

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
202. **The caught-and-covered alliance ladder** (S2E10 reviewers). Jack catches the conspirators, they cover with a cheerful lie, and he lets it go: once an episode, with a rung that changes.
203. **Hand-staging for scrutiny** (S2E10). Characters arrange hands or props for an observer: at most 2 an episode.
204. **The silent laugh as an intimacy button** (S2E10). At most 2 an episode, in different scenes.
205. **The offstage laugh as an exit** (S2E10). At most 2 an episode (Theo's laugh into the pillow in s14 owns this one).
206. **Profession-voice bits** (S2E10). A character speaking in a weather-girl, tourism-board, golf-announcer or lector voice: at most 2 an episode, each owned by one character.
207. **The kiss meant to be short that runs long** (S2E10). Once an episode; vary the s13 branches.
208. **The bystander reaction to a kiss** (S2E10). Once an episode (S2E10 kept one: the row-nine kid).
209. **The narrator's tell-gloss** (S2E10: "Theo is telling the truth" cut three times). Never gloss a character's honesty in narration; let the scene show it.
210. **A clock number echoed across scenes** (S2E10: "thirty-eight seconds"). One echo, only with a change.
211. **"X, and nothing else" closing a gesture** (S2E10). Once a scene.
212. **Cumulative journal cards repeating a scene's last line word for word** (S2E10). Once an episode.
213. **"Item." as a list engine for Theo** (S2E10). Once a duel.
214. **"Arithmetic" as a word several characters share** (S2E11). Once an episode.
215. **Scenes closing on a spoken clock time** (S2E11). Two an episode.
216. **A dripping or ticking object as the silence marker** (S2E11). One source, used twice at most.
217. **"Stays where it is" / "stay stopped"** (S2E11). Once.
218. **Call-and-response callback pairs** (S2E11). Three an episode.
219. **Repeated prop tags** (S2E11: the pie carried "level" and "grease pencil"). "Level" twice; grease pencil six times in prose.
220. **Shared text after a multi-way choice that assumes one option's wording** (S2E11: "you said yes"). Gate it by the flag or make it neutral.
221. **A hand left on a switch (or lever, latch, dial) as a regret beat** (S2E12: Kevin's hand on the map light in s07 and again in s11). Once per character per episode.
222. **"Since [waypoint]" as a clock device** ("since Picacho," "since the Rincon," "since Sonora"). At most 4 an episode.
223. **"The dark" doing things, or "the van" reacting as a chorus** (S2E12). At most 2 each an episode.
224. **Lena and Skye sharing stage and wardrobe figures** (S2E12: the fight let Lena talk in Skye's showbiz register). Give Lena church and kitchen figures, and Jack mill figures.
225. **A "found somebody else" callback for a crowd extra** (S2E13: the woman in the nightgown at s10). Once only.
226. **"Hears it over [instrument]" as a loudness marker** (S2E13: "a laugh he can hear over the trumpet"). Max 1.
227. **"At a volume that carries to [place]"** (S2E13). Max 1.
228. **The network "letting go of everything it has been holding"** (S2E13, the jammed phone network). Once per episode.
229. **"A look he has only ever had from one other Broussard"** (S2E13). Once.
230. **Tony squaring the transistor to his face** (S2E13). Max 3 per episode.
231. **"Since [waypoint]" in narration, where the narration (not a character) marks time from an earlier moment** (S2E13; the narration cousin of #222). Max 4 an episode.
232. **Averted-eyes chorus: a bystander caught looking, then looking away** (S2E14). At most 3 per path.
233. **Lena's sleeves as all-purpose body language** (S2E14; about eight cut). At most 2 per path.
234. **Bank-side chorus: an indifferent-world coda (fisherman, dog, child) after a duel point** (S2E14). Banned inside duels.
235. **Withheld explanation: "doesn't explain / does not discuss"** (S2E14). At most 2 an episode.
236. **Jack's Wit templates:** "In Youngstown we'd…" at most once an episode; relay jokes ("Tell X…") at most once an episode (S2E14: the Youngstown, relay and pawn jokes were recast).
237. **Knocking wood as the jinx ritual** (S2E14: spent twice, Laney at s11 and Theo at s16). Retired until the reveal.
238. **Withheld translation as a gag** (S2E15: the speaker is not translated for the player). At most 1 an episode.
239. **A bystander's "goes back to [task]" as a scene button** (S2E15). At most 2 an episode.
240. **A crowd surge as the engine for touch** (S2E15: Endymion). Once per episode, and not as the default way to put Jack and Lena in contact.
241. **Julian's roses in the lit window as a scene closer** (S2E15). One scene or branch closer per episode.
242. **Past-tense backfill openers that flip to present** (S2E15). At most 2 an episode.
243. **Comic "like a man / woman" simile density** (S2E15: queen, boy, baby, ward round, football, fork trimmed). At most 3 an episode.
244. **Skye's real drop announced by negation** ("doesn't make a joke of it") (S2E15). Once an episode.
245. **"He hears her sit down" as the device for Skye going serious on the phone** (S2E15). Once an episode.
246. **Chest-hand gestures** (S2E16 levee: 46+ in a draft, 17 after trim). Capped at 6 an episode, counted across all branches.
247. **River furniture as a beat marker** (S2E16: ferry, towboat, fog, Algiers disappearing). Ferry at most 3 an episode; the fog arrives once.
248. **"He wants her." as a paragraph opener** (S2E16). Once per episode.
249. **Announced motif tags** ("space kept," "on purpose") (S2E16). Trim; never label a motif the scene already shows.
250. **Runs of save-flag recap lines** (S2E16). Do not stack consecutive lines whose only job is to acknowledge earlier choices.
251. **Pasted branch tails** (S2E16: the same reaction under all three options). Give each option its own voice and run the shared reaction once at the start of the next scene.
252. **A character narrating her own action** (S2E16: Lena). Let the action stand; no self-description in her mouth.
253. **Truth-stamps** (S2E17): "and it's true", "He meant it", "and he does". Let the line carry its own sincerity; do not vouch for it.
254. **Recycled symptom lists** (S2E17): the same withdrawal symptoms restated on each day. State the list once; later days show only what changed.
255. **One table for every count before lock** (S2E17): days, hours, miles and heads. Check every count in a scene against one table before locking.
256. **Pocket and pack stamps** (S2E17). At most 8 per path.
257. **Gray as the default** for dawn and sorrow (S2E17). Name a different color or a different light.
258. **Branch tails** (S2E17): several responses to one choice ending on the same destination phrase. Give each response its own last beat (cousin of #251).
259. **Confession items** (S2E17). Every sin Jack confesses must be a beat the player actually saw.
260. **"keeps X where it is" as a restraint stamp** (S2E18). Narration naming Jack's restraint is announced once an episode, not four times; same for "the one thing left he can do" and "nothing that's his to say" (#114 cousin).
261. **Lena's exit as a chain of sounds** (S2E18): push bar, corridor, the 217 door. One exit sound at most per scene.
262. **Skye's asides about herself** (S2E18: "I don't know why I'm telling you about Kyle"). Once an episode.
263. **Offstage stairwell noises** (S2E18): one a scene, never a stack of bystander sounds.
264. **Scenes ending on a closed phone in Jack's hand** (S2E18). Once an episode; give the others their own last beat (cousin of #258).
265. **A recurring walk-on extra in the same hoodie** (S2E18). Once, not as a running gag.
266. **Duel responses ending on a bystander or Hale's verdict** (S2E18). Vary the last beat (cousin of #258).
267. **"its one note" for the tube light** (S2E18). Once an episode (#176).
268. **Narrator restating Jack's restraint** (S2E18). See #260; show it, do not label it.
269. **Skye's showbiz register leaking into narration** (S2E18, a repeat of the S1E21 note). Keep genre voice in her dialogue, not the narrator's figures.
270. **Ma's phone sounds as punctuation between lines** (S2E19: taps, cord). Mostly cut; one a call.
271. **A walk-on's identical stage business** (S2E19: Mrs. Fitch's gloves and the look). Extends #265; vary or cut on repeat appearances.
272. **Lena's folding ("in half, and in half again") and thumb-licking** (S2E19). Lace plus one thumb-lick an episode, no more.
273. **"Had it worked out" as Jack's rehearsal tag** (S2E19). Two uses an episode.
274. **A "he wants her" paragraph in every Lena scene** (S2E19). Extends #248; show it, one scene at most.
275. **Scenes ending on an inanimate sound or object** (S2E19: object codas). End on people; cousin of #258/#264.
276. **"Hands want something to do" as Lent shorthand** (S2E19), spreading into other characters' dialogue. Once, in one mouth.
277. **Lena's held-back-laugh tells** (S2E19: mouth corner, shoulders, library laugh). Extends #14/#183/#204; one a scene.
278. **Every bystander getting a one-line button at the end of a group scene** (S2E19). Let the scene end on its centre; cousin of #266.
279. **"The look / face / voice she keeps for [situation]"** (S2E19). Cut in s02, s03, s08b, s13; one kept in s12a.
280. **A coined phrase repeated as a callback** (S2E19). Spend a coinage once as a callback, not as a running label.
281. **Church similes as the courtroom replacement** (S2E19: "like a nun...", 2 uses). To watch; do not let it become the new stock figure.
282. **A composure beat where a laugh was cut** (S2E19: "looks very hard at the creamer / the grain of the oak / with great composure", 3 uses). Once an episode.
283. **The discreet stranger who looks away** (S2E20: dog-walker, cab driver, bus driver, desk sophomore, coat-check girl). At most 3 per path.
284. **The kiss-tail quip delivered "against his mouth"** (S2E20). Once per path.
285. **"Her hand finds his" as the closing touch** (S2E20). Once per episode.
286. **A tender beat deflected to a window, lapel or thread** (S2E20). Once per character per episode.
287. **Conditional jacket recap lines** (S2E20: s15a tails). At most 3 scenes carry them.
288. **A set-piece speech performed in full twice** (S2E20: Lena's Forum case in s03 and s07). Show what changed instead.
289. **"In my life" superlatives** ("never in his life", "best of my life"; S2E20 had five "never in his life"). At most 2 per episode.
290. **The rival borrowing the heroine's gestures** (S2E20). Add to #64: Skye's shoved sleeves, lifted pen and mouth-corner were Lena's; Skye keeps the chewed pen cap and the Kleenex ball, Lena keeps the rest.
291. **One identical exchange pasted under every option of a choice** (S2E20: Lena's 2:36 text under all three s09c options; the s11 "wear what I like" exchange). Hoist it into shared text or the next scene.
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


---

# 8. PERIOD (digest of `period/s2e21-mar8-14-2010.md`; [V] verified there, UNV = unverified; hedge UNV; no beat may rest on UNV. The Researcher's [R] items (plan §15) are NOT yet appended to the sheet: hedge or paraphrase until confirmed; titles only for songs, never a lyric; paraphrase only for philosophy texts; no real-person quotes. **ERRORS on the sheet (flagged in its §8), do not use:** §1 trap 5 and §6 "quarter math… week 10… finals Mar 15–19" are WRONG — Marisol runs a SEMESTER; PHIL 109H meets Mon/Thu 1:00 in Hollis 302; Oceanography 1 meets Tue/Thu 11:00–12:15 in Morro 1100; no finals in March; spring break unset (do not mention); header "Clare/Jack end" means **Kevin and Clare**.)
- **Light/dates:** Mon Mar 8 – Sat Mar 13 PST; **DST begins Sun Mar 14, 2:00 a.m. → 3:00** (the 11:30 is new time; everyone an hour short; Sun sunset ≈7:05 p.m. PDT). Sunset ≈5:59 p.m. PST Mon, ≈6:04 Sat. **Moon: new moon Mon Mar 15 (UT), so Saturday evening is MOONLESS — say "no moon", never "new moon".** Weather UNV: wet El Niño winter, showers possible early/mid week, clearing by the weekend; 60s days, upper-40s nights (name a color, not gray, #257). Jack's Lent: day 20 (Mon) → day 26 (Sun).
- **Liturgy (weekdays recalled; Sunday by pattern):** Mon Lk 4:24–30 · Tue Mt 18:21–35 · Wed Mt 5:17–19 · Thu Lk 11:14–23 (never aimed at Hale) · **Fri Mar 12** Mk 12:28–34; abstinence; Stations 7:00, fourth Friday · Sat Lk 18:9–14 · **Sun Mar 14 LAETARE, Year C:** Josh 5:9a, 10–12 · Ps 34 · 2 Cor 5:17–21 · **Lk 15:1–3, 11–32**. Rose vestments, flowers, the organ let out; no Gloria/Alleluia. End card Lk 15:32 (NAB [R]).
- **News (flavor only):** health-care reform dominates; **House vote not until Sun Mar 21 (OUT)**; Oscars aftermath results only; Chile and Roethlisberger OUT.
- **Sports:** Ohio State men's basketball, Big Ten tournament, Indianapolis [V]: **Sat Mar 13 semifinal 88–81 2OT over Illinois, Turner 31** (first multi-OT game in B1G tournament history; do not state OSU's seed); Fri quarterfinal opponent/score UNV (do not use); **Final Sun Mar 14: OSU 90–61 over Minnesota, Turner MOP** [V] — Frank's *CHAMPS.* only Sun evening; OSU is NOT champion before Sun. [R] semifinal tip time (Pacific) so Frank's text lands before 5:30 p.m. PST. Saints are Super Bowl XLIV champions (leave out).
- **Songs (titles only; never a lyric; nobody says "number one"):** the S2E20 pool (TiK ToK, Imma Be, Break Your Heart, Bad Romance, Hey, Soul Sister, In My Head, Nothin' on You, OMG, Rude Boy); OUT: California Gurls, Teenage Dream, Dynamite, Airplanes. Plan cues [R]: Beach House "Norway" (Jan 26 2010) or Train "Hey, Soul Sister" at Low Tide; Fats Domino "Blueberry Hill" (1956) on the jukebox — **not** "Walking to New Orleans" (S2E13's); a bolero on Rudy's radio (optional). Grep published `music` fields first.
- **[R] to verify:** CCC 2nd ed. ¶27, ¶29 (the list), ¶30 (Ps 105:3; Augustine, *Confessions* 1,1,1) exact wording (≤1 sentence a round), 2,865 paragraphs, the paperback cover logo (shepherd with pan pipes), "page eleven" for ¶30, whether ¶31–35 support "proofs"; Borders SALE banner (safe; no closure date); Barq's in glass in 2010 California (else a can); RAZR auto-updating at DST (else "his phone says 3:00"); Lewis's argument from desire, Pascal's hidden God, the Euthyphro third horn (Aquinas, later Alston) — paraphrase only; an overhead-projector alley is plausible for a fictional 1961 house.
- **Period words/tech:** no "selfie," "viral," "trending," "DM," "ghosted," "closure," "toxic," "boundaries," "Uber," "foodie." RAZR, LG enV2, pink BlackBerry, iPhone 3GS, BlackBerry Bold, the Nokia.
- **Never:** a song lyric; a real person's quote (athletes, officials, broadcasters, actors, directors); anything after Sun Mar 14 evening; a real Las Olas business (Low Tide, Mission Lanes are fictional); the health-care vote before Mar 21.
