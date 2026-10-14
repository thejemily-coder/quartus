# Season 2: MADE MEN (SEALED)

Freshman spring at Temple, 10 episodes. Late Nov 2026 to May 2027. The look is Silver Age with heavier inks (`look: 's2'`).

**Season engine:** Philadelphia now has two buyers for the Changed. Halcyon puts them in beds; Bruno Iannucci puts them on payroll. Pop's debt (now $29,600) makes Sam a made man's errand boy. The mirror this season is Teddy: Sam saved him, and Bruno bought him. Mid-season, Sam and Jules learn each other's secrets, and then timing ruins it. Rosa finds out. Vinnie goes in deep with the Iannuccis.

**Season's one-line arc:** a kid learns that every save sends a bill.

**Hidden pressures carried from S1:**
- revenant_drift is 21.7, so every Slip Unsticks. The season gives Sam a way to start coming down:
  - Nonna's key opens the tin box: Assunta's diary and a pocket watch stopped at 11:51.
  - The watch is an anchor. It lets him find his way out, but it doesn't stop the drift.
  - Choices that trust, accept or share the weight lower revenant_drift.
- Mikey knows. He is off the task group, and Brannigan is watching him.
- Simone knows and was lied to. Her trust is −2 until it's repaired.
- Halcyon: "Let's make sure the door is open." Building 7, room 714, is bait.

| Ep | Title | Dates | A-plot | Romance | Shadow |
|---|---|---|---|---|---|
| 1 | **After the Holiday** (premiere) | Nov 27 – Dec 18 | A season-break attribute choice. Pop and the card. Mikey off the task group. Bruno's club: Teddy works for Bruno now, because Bruno paid Halina's Jefferson deposit. The offer: jobs against the debt. First job: a Fishtown pickup with Teddy. Finals. | After the Water Works kiss: are they or aren't they. Jules leaves for break: "January." | Brannigan sits down with Bruno. |
| 2 | **Seven Fishes** | Christmas Eve | Mifflin Street on Christmas Eve. Nonna opens the tin: Assunta's diary and the watch at 11:51. A Bruno job on Christmas Eve. | Jules at Ravenscourt texts all night. | The diary's last entry: "He came back old." |
| 3 | **Old Money** (Jules POV) | New Year's | Ravenscourt New Year's. Constance teaches Jules what the luck costs. Whitney and Achterberg talk about "forty-four." Jules's Nudge becomes player-facing. | Jules decides to tell Sam. | Hugh sees her die roll. |
| 4 | **Made Men** | Late Jan | Spring semester. Bigger jobs. Vinnie is now Dante's right hand. The Iannuccis "recruit" a third Changed. | The almost, with bad timing. | Dana Fiorillo connects the Blur to the Iannuccis. |
| 5 | **The Open Door** | Feb | The Building 7 raid for Marisol with the crew. It's a trap. Somebody pays. | Jules nudges for Sam, openly. | The Revenant intervenes, and someone dies who shouldn't. |
| 6 | **What If It Was** | Valentine's week | **The mutual reveal.** | They tell each other everything. | Achterberg learns they know. |
| 7 | **Bad Timing** | Late Feb – Mar | Fallout: Bruno wants Jules, because luck is worth more than speed. | Together and apart. | Callum is back, with Hugh. |
| 8 | **Ma** | Mar | Rosa finds out. DiNardo women. | — | Nonna: "Now it's time." |
| 9 | **Dollar Night** | Apr | The Iannuccis' war with Halcyon reaches South Philly. Vinnie has to choose. | — | — |
| 10 | **The Italian Market** (finale) | May | Finale. Sam picks his own hero name. | — | A Season 3 hook: Hugh joins Halcyon. |

Write each episode to the save. The plan bends; the save doesn't.

## Production notes (as played)
- **S2E1 "After the Holiday"** was written for this playthrough's S1E10 save (both + Unstick, Mikey knows, no cap, took the card, kissed Jules, Simone not mended).
  - **Shape:**
    - **Cold open:** Brannigan pulls Mikey off the task group ("Loyalty… a terrible one in a witness").
    - **Act One:** white hair. Season-break +1 attribute (no Charm option). Bruno's card at breakfast: give / keep / tell Pop. Telling Pop sets Frank to knowing; **Rosa overhears, heat 8**, so E8 "Ma" still works. Mikey on the stoop with the clementine: catch / Slip / open up. If `mikey_knows` was unset, he learns here.
    - **Act Two:** the Circolo Sant'Agata. Bruno paid Halina's Jefferson deposit on the day after Thanksgiving, and Teddy works for him. The deal is jobs at 10% each: ten / five / eight / twelve / forced via the Gigi photo. Vinnie's real reason is Pop.
    - **Act Three:** Szymanski's (Eddie, daughter Krysia in Sam's Psych lecture). Teddy freezes Eddie's hands to the bar. Mercy (job doesn't count) / watch (counts) / pay (`eddie_paid`, `eddie_owed`; Sam told Dante the rest is coming).
    - **Act Four:** finals hub, Dec 14–17: study / Jules ("January") / Simone repair / Grace (eleven white hairs; "in places, thirty") / Nik's cold map / Ciro. Calc final d20. The snowy roof: Constance's "what we are."
    - **Tag:** Brannigan and Bruno over pizzelles. Constance rolls a six: "Come home, child. It's time."
  - **Known gap:** the `teddy_taken10` branch still has Teddy at Szymanski's in Act Three. Rewrite it if a non-canon save ever plays this.
  - **For later episodes:**
    - `bruno_jobs_done` is a counter; `bruno_jobs_total` is the deal size.
    - Treat `pop_knows === 'told'` as knowing.
- **S2E2 "Seven Fishes"** was written for this playthrough's S2E1 save. Shape:
  - **Cold open:** 1918. Assunta, 16, at Broad & Wharton; the trolley; the bells stop. A distant man at Broad & Federal raises his hand "like a man at a window" (the Revenant across time).
  - **Christmas Eve hub:** Ma (tell her: `ma_told` = 's2e2', Rosa knows) / Jayden & Carmen (LEGO trolley; Jayden "feels it coming") / Pop (offered himself to Dante; laughed at) / Gigi on Passyunk / Simone repair call.
  - **Job:** 12 envelopes before 8, including a police captain, a priest and a councilman. The 12th, a manila envelope for Brannigan at the Navy Yard gate, holds Bruno's list of 26 Changed not on his payroll. Jayden is on it, and at the bottom: "DiNardo, T. — NO." Options: sealed / tear out Jayden / deliver then warn / burn (job doesn't count).
    - Brannigan: "When you get tired of being somebody's errand boy, I'm hiring." He knows Nonna eats at eight.
  - **The Feast:** Nonna adds "E Salvatore" at grace. At Midnight Mass the bells stop for one second at 11:51.
  - **The key:**
    - **Nonna lied twice.** Assunta did it her whole life, and there was a boy: her brother **Salvatore DiNardo** (1931–1961). He went in after three children at an Arch Street fire on Dec 18, 1961, came back old, and died at the Feast on Dec 24 at 11:51. Sam is named for him.
    - In January 1964 Assunta pulled six-year-old **Bruno Iannucci** out of the Schuylkill ice. That is Bruno's debt to the DiNardos.
    - **Salvatore's watch** (stopped at 11:51; `assunta_watch`): Unsticks no longer injure. Rule is in MECHANICS; engine helpers are `g.unsticks()` and `g.unstick()`.
  - **Tag:** Brannigan circles "DiNardo, T." (or, on the burned path, looks at a surveillance photo of Nonna). Jules's 3 a.m. texts: Gran's chapel on New Year's Day.
  - SERIES_BIBLE §3 is updated for the Salvatore retcon.
- **E3 (Jules POV) prep:**
  - Gate Burst and Slip by `!S.pov` in the engine.
  - Jules's auto-nudge debt is near its cap (5).
  - Decide on the player-facing Nudge.
  - Jules hasn't seen any of the DiNardo facts.
- **S2E3 "Old Money" (Jules POV)** was written for this playthrough's S2E2 save. Shape:
  - **Cold open:** 211 sixes in the pink bathroom. Sam's Christmas text about Salvatore (`feast_text` = name).
  - **Hub:**
    - Hugh's billiards: luck / **play it straight** (`noLuck`; win or lose; jules_debt −1).
    - Mother at HUP: Catherine's Halcyon advisory badge.
    - Simone: "one chance" about her Jules list (tell / lie).
    - Gran on the terrace: "Some families are lucky. Some are *early*."
    - Father: "Clean energy! A small position."
  - **NYE:**
    - Overhear Achterberg and Whitney: "forty-four… leave the boy to Cole."
    - Or Achterberg's card (44).
    - Or text Sam.
    - At midnight the bells stop for one second. Sam texts "did you hear the bells"; Jules answers "Yes" or "Happy New Year."
  - **Chapel (Jan 1):**
    - Three questions: where / cost / why me / Sam. Josiah at 31 by a great engine ("it liked me"), with 1876 and the Corliss kept unnamed. The house collects "near us." Choosing to lose stops it. "It likes you."
    - The riverbank: Constance saw Assunta in 1964.
    - Gran's kept die rolls **one**.
  - **Decision:** letter for January / distance / call (471 minutes).
  - **Tag:** Hugh watches the dice through the door. Achterberg: "*She can turn it off.*"
  - **Seal trims:** no Audience thesis, no Centennial name, and the early families' mechanics are not stated. "Seventeen" became "leave the boy to Cole."
- **Engine changes:**
  - POV locks Burst and Slip.
  - `noLuck` checks.
  - `knows()` defaults to the POV character.
  - Summarize before `povExit`. The S1E6 episode summary in the save is still polluted, which is harmless.
  - `jules_debt` is clamped to 0–10.
- **E4–E5:** the letter (if written) stays undelivered until the E6 reveal.
- **S2E4 "Made Men"** was written for this playthrough's S2E3 save (Jules called Sam; bells "yes"). Shape:
  - **Cold open:** Dana's corkboard: "BLUR = IANNUCCI?" (Girard doorbell cam, Eddie's frostbite ER form).
  - **Spring hub:** Simone, third chance / Jules at lunch / Nik's live map (Navy Yard flares nightly at 11:51 since Jan 10) / Ciro (Vinnie stared at Sam's Polaroid).
  - **Job 3 at Phở Thanh:** Thomas Nguyen (52, hears through walls; daughter Mai). Talk him in / warn him to run (Vinnie covers for Sam with Dante) / let Dante do it. Vinnie, in a black cashmere overcoat, is now Dante's right hand. "Every time I say yes to save somebody, I owe him more."
  - **Dana Fiorillo** on Liacouras Walk: lie (press heat) / redirect her to Halcyon, Femi and Feld / walk away.
  - **Friday:** Bree says the raid on Building 7 is tonight; the guard went home "sick." Jules's appointment is the roof at nine. **The roof** (tell all = MUTUAL REVEAL, moved up from E6 if chosen; or the true part) / **the Navy Yard** (the door is propped open; 714 holds only a cold Thanksgiving turkey; the 11:51 pulse; the door shuts).
  - **Tag:** Achterberg: "the experiment worked."
- **E5 must resolve:**
  - **Roof path:** the crew is inside Building 7 without Sam (Bree's texts stop).
  - **Navy Yard path:** `navy4` = in (all four locked on seven) / held (all out) / split (Sam at the closing door).
  - **Revealed path:** with `mutual_reveal` set, E6 "What If It Was" becomes the aftermath, not the reveal.
- **S2E4 QA (3 passes):**
  - **Knowledge leaks fixed:**
    - Jules no longer quotes the Revenant note.
    - The seven-page letter is gated on `jules_decision==='tell'`.
    - Nik's Building 7 intel is gated on `knows('building7')`.
    - Vinnie's slow-heart line is gated on talked plus `knows('nguyen')`.
    - "Simone said that" is gated on `simone_j3`.
    - Bree's replay of "Marisol first" is gated on `teddy9==='marisol'`.
    - "forty-four / leave the boy to Cole" is added to Jules's tell-all when she knows it.
  - **Mechanics:**
    - The weak or missed Dana lie (press 10) gets a "she's sure now" line, and the tag corkboard reads BLUR = KEARNEY.
    - Missing Hold the Line now adds Halcyon heat on entry.
    - Smashed: Nguyen agrees on Friday ("Done.").
    - The Simone hub option requires `simone9==='lied'`.
    - The mutual reveal shares the fact ledger: josiah_1876, luck_cost, constance_started, jules_die_sixes and jules_fall_test go to Sam; assunta, assunta_diary, salvatore_dinardo, watch, femi_halcyon, man_across_street and bruno go to Jules.
    - "True part" now gives Jules +1 heat, which sets heat_max_jules from 9.
    - The split recap is fixed.
    - The double drift drop in a1_spring stays (a quiet episode, −2).
  - **Canon:**
    - The Inquirer is at 100 Independence Mall West.
    - Femi was "a kid I knew" and died at Cardone, not the Navy Yard.
    - "No anesthetic" is cut.
    - Halcyon's tag post is "our van on Broad".
    - Jules's dice count is 211.
    - Grace counts 12 white hairs.
  - **Voice:** Nik says "Salvatore" when scared; Ciro gets an insult; Vinnie says "college" and swears; Teddy says "Listen"; Heck says "Viniste"; Nguyen says "I'm fifty-two."
  - **Open for other saves (not gated yet):**
    - Simone's "Christmas Eve phone" line needs did_x2_simone.
    - Simone's "lied beautifully" needs `simone_j3==='lied'`.
    - Jules's warmth on the distance path.
    - Dana's frostbite evidence assumes `job1==='watched'`.
- **S2E5 "The Open Door"** was written for this playthrough's S2E4 save (roof, all of it, mutual reveal; crew inside Building 7 without Sam). Only the roof path is supported. **Known gap:** a Navy Yard save (`friday4` 'navy') needs its own E5.
  - **Cold open:** the crew finds an 8th floor that isn't on the drawings (Marisol is ES-26 in bed 8-03). They spend two hours looking for a card. At the 11:51 pulse, Teddy goes gray to the elbows, Heck burns, and **Bree loses her own voice** (she has only replayed voices). The elevator stands open: "It's for him."
  - **Act One "Southbound":** Jules: "I'm coming." Either a cab on Jules's luck (every light on Broad green; she bleeds) or Sam Slips ahead (Unstick with the watch; Jules follows in the cab). **One call** (slots 1): Nik (in the ear; spoofs a 911 call at 12:52) / Vinnie (Dante's Escalade at the south gate; "I never told nobody nothing") / Mikey (off duty, badge; Brannigan has a Camry outside his apartment).
  - **Act Two "Building Seven":** reunion. The eighth-floor door: Heck burns it / Jules opens it with luck (a stairwell bulb pops: "near us") / the glass room (d20; a visitor card left on purpose; the screen lists **ES-17 KEARNEY, ES-44 PEMBERTON "DO NOT RECOVER · OBSERVE"**; SECOND DRAW 00:51:04). The ward: 22 sedated Changed with ES numbers, plus **an empty bed made up for ES-44**. Just Marisol / photos for Dana (only if `dana4` 'halcyon') / all of them (ES-03: "The old man comes at night… He has your face").
  - **Act Three "Somebody Pays":** Brannigan comes up Stair B. Teddy freezes the stair door ("Ninety seconds after I let go") and the others go (trust or stay; staying gives the GoFundMe/Bruno confession). The yard is a move check; **"Jules's luck" uses the new `luck:'jules'`**. At the dry dock, Brannigan names Halina's Jefferson appointment. 00:51:04: no dart is aimed at Jules or Sam.
    - **Slip:** the Revenant is beside Teddy. "He's the one who takes her to Bruno. In March. He won't want to. He'll do it anyway… I tried the other ways." (QA trimmed the loop count and the fate line; see the seal note.) Two fingers push Teddy, and he closes the second on Sam. Last move: Teddy's coat / grab his wrist ("You still think you can carry all of them.") / all four darts.
    - **Her hand:** the luck goes absurd (spotlight, a seagull). Teddy slips on ice nobody saw. One frame of a man with his hand raised across the dock. Jules swears for the first time ("Near us"), and `jules_blames5` is set.
    - **Teddy dies** on the bottom step, 12:53 a.m., Jan 23, age 20. Last words: "Listen." His stasis holds a circle of river still for 90 seconds after. Bree's own voice comes back to scream his name. Sam's response: promise to tell Halina / Marisol's out / hold his hand.
    - The truck withdraws. Carry him home (Heck) / leave him for police (Mikey's "a cop who heard a noise").
  - **Act Four "Port Richmond":**
    - Halina (Edgemont St) asks for his last words: his version (the warehouse, the GoFundMe) / the truth (Bruno; she already knew, he brought a ham at Christmas).
    - **Marisol:** the old man sat by her bed every night and cried; last night he said "Not you. You get to go home."
    - **Funeral** Thu Jan 28 at St. Adalbert, paid for by Bruno (plot at Our Lady of Grace). Bruno: "Who?" Halcyon ("Then they owe me a boy") / "He fell" / silence (Assunta's face).
    - Photos to Dana (sent / one: the ES-44 bed / held).
    - **Jules in 9-14:** she counted every use of the luck. Tell her all (slip paths give her `revenant_push`: he killed Teddy for her; "Whoever he is, Sam, he isn't a stranger." Identity is not stated) / "not you" (Sam keeps it: two secrets now) / hold her.
    - **She asks him to turn off the light**, and sleeps in the dark for the first time.
  - **Tag:** Achterberg finds **one frame** at 00:51:04 of a man with a missing left ring finger: "Pull everything… Him." ELSEWHERE: the Melrose Diner at 4 a.m., a placemat column of names, one more crossed out with the left hand, frost in the shape of a hand.
- **E6 "What If It Was" (Valentine's week), re-planned for this save:**
  - The reveal already happened, so E6 is the **aftermath**: grief for Teddy (bible: "the next episode lives in it"), Jules and Sam as an open secret to each other, and the first night together if earned.
  - Bree, with her voice back, on Edgemont Street: who carries Halina now?
  - Heck and Marisol.
  - Achterberg learns they know each other's secrets (the season plan's shadow). Now she also has "Him."
  - Bruno's response depends on `bruno5`.
- **E7 adjusts:** the Revenant says Teddy "takes her to Bruno in March." With Teddy dead, Bruno still wants Jules (luck is worth more than speed), and someone else must become the vector: Dante or Vinnie? Use `call5` and `bruno5`. Halina's transplant and Bruno's leverage over the Kowals remain.
- **S2E5 QA:**
  - **Seals:** the Revenant never states a loop count or fate. Jules asks "Who is he?" and doesn't assert it. The scar runs from the left eye to the jaw (per S1E9).
  - **Ledger:** `gran_sam` is withheld for E6. `assunta_bruno` is added when Bruno tells it. `halina_bruno` is Sam only.
  - **Voice:**
    - Teddy says "cold guy" or "Sam", never "Kearney".
    - Bruno calls him "Teodoro".
    - Jules's single "Fuck" is unexplained.
    - Bree does the second reading at the funeral.
  - **Tag:** gated on the luck path, the frame shows him across the dock with his hand raised.
  - **Mechanics:**
    - Open luck now charges debt even when the raw roll is already clean.
    - A reload re-applies the open nudge.
    - The tray shows 100% and offers no Push for `luck:'jules'`.
    - Funeral week is slept off (`sleep 8/7/7`), so S2E6 starts at sleep debt 3 and Drift is lowered.
    - Sending all the photos adds no press heat (it's evidence about Halcyon, not suspicion of Sam).
  - **Going into S2E6:**
    - jules_debt is 3–9 and `jules_open` is 1–4.
    - halcyon_heat is 10–15 (unclamped).
    - Possible injury: `dart_s2e5` on a yard miss.
- **S2E6 "What If It Was"** (Valentine's week, Feb 8–14) was written for this playthrough's S2E5 save (luck at the dock, `jules_blames5`, glimpse only, told Bruno "Halcyon", promise kept). It is the aftermath, not the reveal.
  - **Cold open (Tue Feb 2):** Bruno sits with Halina at Jefferson's transplant clinic. He knows her surgeon (Dr. Feingold, whose daughter married at the Bellevue). "Five years on the list." He asks about **Bree's voice**. This is the **E7 vector**: with Teddy dead, Bruno moves through Halina, then Bree, toward Jules.
  - **Act One "Ninety":** Teddy's voicemail at 3:12 a.m. Counting to ninety. Jules counts with him. She plays everything straight; her nosebleeds scale with debt.
  - **Hub (2 of 4):**
    - **Nik:** he recorded every feed; the single 00:51:04 frame. Nik now knows the man across the street: "That's you, bro."
    - **Bree:** Teddy's phone kept charged; Bruno at Jefferson; she has stopped doing voices. "Did he say anything about me?" (close enough / the truth.)
    - **Simone:** "Tell me who he was." The Open Up check mends `simone10`.
    - **Ma:** Tuesday meatballs. "Did you know that boy?" Answering "I knew him" or lying both put Rosa's heat at 9, not 10; she keeps the reveal for E8. Nonna: "Soon she asks you a question you can't answer with *no*."
  - **Act Two "Debts":** Bruno wants the layout of Building 7, and it counts as a job.
    - Options: true (+1 job) / refuse (Halina's evaluation is moved to April) / false map (lie check; a clean lie means Bruno's men walk past the unnumbered door; a doubted lie means Dante finds the 8th floor).
    - **Dante: "Who's the blonde across the street?"**
      - Girlfriend: "Sunday dinner at Grandpa's. **In March.**"
      - Nobody: Vinnie covers.
      - Reporter: Dante answers "Fiorillo." Dana is now on Dante's list.
    - Vinnie on the corner: "He collects people who can do things."
  - **Act Three "Valentine's":**
    - Jules's first 71 ("It's wonderful").
    - "I want to fall down": the RiverRink, a `noLuck` skate check. On a miss Sam falls and **Jules cries in public** (`jules_cried6`).
    - The pier: Jules finally gives **gran_sam** ("don't let the house collect from him"), and "What if it was you?"
    - Sam can give her **the card** ("Don't trust the lucky one"); she keeps it in her coat. "Then he's wrong about something."
    - 9-04 (Simone is at Grace's: **Simone/Grace confirmed**, Jules's list item 11). **First night** (`first6` yes/wait): "It's just us." / "Soon, Kearney."
  - **Act Four "Sunday":** the fallout from Bruno's map.
    - Refuse: Halina's evaluation moves to April.
    - Otherwise: Bruno's men hit Building 7 and **Sal Russo** is found on the bottom step of the dry dock with white hair, saying "eleven fifty-one" (Halcyon's answer).
    - Show Jules (shared) / "I'll handle it": "The man with your face doesn't tell anyone anything either."
  - **Tag:** Building 10 has a wall of 11 frames of the Revenant. Achterberg to Whitney: "They know… A pair is more interesting." "Every place seventeen has been, *he* was there first." **"Get me something with the boy's blood on it."** It's the JLP handkerchief, in his left back pocket. This seeds a theft in E7 or E8, and an eventual blood match (keep it sealed; don't pay it off before S3).
  - **S2E6 QA:**
    - Knowledge gates on Nik, Feingold, Sal and the tag.
    - The ward count is 21.
    - `assunta_bruno` is added on refuse.
    - The TXT unknown number renders as a text bubble.
    - `gran_sam` has its text.
    - "Nobody" and "reporter" are gated on `jules_blames5`.
    - Rosa and Nonna use lowercase speaker ids.
    - The orgo professor is renamed Adeyemi.
    - Going into E7: `revenant_drift` >= 10, so every Slip Unsticks (the watch is held). Rosa heat is 9 if Sam visited.
