# TITHE S1: Cross-Season Fix List (continuity auditor)

This list covers only problems that CANON_RULINGS.md does not already settle. Where a fix applies a ruling's principle to nodes the ruling didn't name, the item says so. Line numbers are approximate and refer to the current files.

## Season arc notes (≤300 words)

**Ansel's rise** is clean through E4 (drifter, then rat-killer, then Varane's commissioned investigator with "my people"). It **stalls in E5–E6**: he is a hired guard in livery, then a contractor on Isolde's warrant. E7 drops him to outlaw and E8 makes him Captain, so the jump to Captain arrives with no rung beneath it. Varane's E5 line "Ten men in this castle who are not the Marshal's. You're the fourth" is the missing rung. Make it a real command at E5's end (E5 #6) and pay it off in E8's hall (E8 #19).

**Tamsin's slow burn** builds well, but two beats replay instead of growing:
- The reading lesson: shame, then "you'll hit me", then "you're clever" happens in both E4 and E5.
- The back-step apple peel: E1, E3 and E6.

E8 then forgets the lessons entirely ("Teach me… you write an A"). The fixes are E5 #2, E6 #1/#3 and E8 #2/#3.

**The Abbess is silent from E3 to E7.** She is on screen in E3 and E5 with no lines, and absent from E7 even though Ansel is held in her house. The hidden antagonist needs one spoken beat in E5 and one in E7 (E5 #5, E7 #2).

**Oriel** repeats one note ("It's so quiet") in four episodes. **Hob** goes quiet in E3, E5 and E8, which undercuts the E7 gate and the reward for saving him.

**The Tallyman** appears in E1 (three times), E2, E3, E4, E7 and E8. Cut the E1 finale and E2 finale sightings to restore rarity.

**Tone** escalates E1→E4 and E6→E8, but **E5 plateaus**. It is courtly, and its one cosmic beat is a star flickering. E5's side quest also spends E6's premise. Add one uncanny image to the lantern release (E5 #10).

**Biggest logic holes:**
- Starfire's failure on Ansel is the key E7 reveal, but the engine shows it in E3 combat.
- The Abbess's lifetime total (312) is lower than Hask's sales since last midsummer (412).
- The saved Saltdown miners end up back in the Lanternhold with no on-screen reason.

---

## E1

1. **MED — cold1 / cold2b: tie the Ford to Saint Corran's Eve.** Hask drinks to Ansel "every Saint Corran's day" (hask1), and E8's rite is on Saint Corran's Eve. Make the Ford fall on that date, so the finale is the sixth anniversary.
   - cold1 loc: "Corran's Ford — six years ago, Saint Corran's Eve".
   - cold2b: "A treeline in autumn" → "A treeline at the turn of winter".
   - Pairs with E2 #2 and E8 #13.
2. **LOW — cold4: plant E7 hask_cell_held** ("I walked right past you… I held Tom Ashe"). Add one image when Ansel wakes: "Fresh hoofprints in the mud between you and Tom Ashe. Someone has closed Tom's eyes."
3. **MED — final (~l.936–937): cut the tall man at the gate turning his page.** It is E1's third Tallyman sighting, and it repeats cold4. Keep cold4 and ashby_well.
4. **LOW — "Tuesday" is a season-wide tic (10 uses).** Keep the Ford's Tuesday (E3 gall_name, E8 hask2). Here, cut it in road2 ("Nobody has to die on a Tuesday") or in t_tam_2 ("that's a Tuesday"), not both.
5. **LOW — nextTime line 3 is never spoken in E2.** Replace it with a real line from pell_expelled: `"I asked the Abbess what was in the crypt. She smiled at me and said, *Prayer, Pellam.*"`

## E2

1. **HIGH — t_iso_sleep: "The betrothal's been signed since I was nineteen. He comes for the Feast… to make it public."** This contradicts the ruling that E5 is the signing. Change to: `"It was agreed when I was nineteen. He comes for the Feast of Lanterns to sign it. Then the Crown takes the March's debts…"`
2. **MED — t_pell_2: "It was the night of Saint Corran. Midwinter."** E8 sets Saint Corran's Eve in early winter, and Midwinter is the wedding. Change to: `"It was Saint Corran's Eve. The first night of winter."` (see E1 #1).
3. **MED — Pell's mother's prayer-book is "charred" even when it burned to ashes.** It appears in cis_pye_pell, cis_annet_wall_fail, t_pell_1 and t_pell_3 regardless of `e2_saved_book`.
   - Gate each on `f.e2_saved_book`.
   - Else: "the cheap Book of Embers Mags bought him off a pedlar, which he hates". The report goes "in the back of the pedlar's book".
   - E6 depends on this (E6 #6).
4. **MED — hask_ford: "One pardon. I asked for four hundred."** This conflicts with E5 a4_boss_won, where Garret Hale was "on the far bank. He took a few of us with him." Change to: `"One pardon. Mine. I asked for four hundred. The lads who rode with me that morning bought theirs later, with what they did for me after."`
5. **MED — final4: remove the Tallyman** and keep the leaning flame and the glove. Writing at the Abbess and Hask implies their deaths are close, but they are six episodes away. The E3 cage scene should be the second sighting.
6. **MED — hob_hired: "You've done it four hundred and six times."** Change to **four hundred and five**. Ruling C says Hask is never counted among the dead; this node isn't named in it.
7. **LOW — previously: "Every door in Ashby was marked…"** is unconditional, but E1 shows the marks only if `e1_chalk`. Gate it on that flag, and gate pell_chalk's "Every door in the village had a tithe-star" the same way.
8. **LOW — mags_after: cut "It's a Tuesday."**
9. **LOW — nextTime line 2 (Brannagh's "burn every witch") doesn't occur in E3.** Use E3 keep2: `"By its authority I am to seek out, in the March of Harrowgate, a soul that Heaven cannot number."`

## E3

1. **HIGH — the key E7 reveal is spent in combat.**
   - `TITHE.ENEMIES.e3_corwin` has "Starfire Edge" with `starfire:true`. The engine (engine.js ~l.771–775) halves the damage and logs *"It feels like it is looking for someone else"*. That is nearly E7 int4's line, and here it happens at a public Ordeal in front of Brannagh.
   - Fix: remove `starfire` from Corwin. The Ordeal of Steel is steel only, so rename the move "Full Drill" (heavy, no burn).
   - jail_fight uses the stock `zealot`, which also has a starfire move. Either give it a non-starfire variant (`zealot_plain`) or see E7 #1 for an engine gate.
2. **MED — t_bran_2: knowledge leak.** "You keep four hundred and six names in a box and read them aloud when you can't sleep." She can't know the reading.
   - Gate on `f.e3_told_brannagh_roll`.
   - New line: `"You keep four hundred and six names in a box. I watched your face when you said the number. We all have our cords."`
   - Else cut the sentence.
3. **MED — Hob has one line in E3.** The ruling budgets him +1 per episode, and E3 has no Hob talk. Add a small beat with a choice: at the pyre crowd or the Hen search, Hob gets between a Warden and Mags's cellar door.
   - Warm option: "Good lad." → +1.
   - Cold option: "Get home." → 0.
   - Set `e3_hob_moment`.
4. **LOW — the previously list is in second person** ("He was so pleased to see *you*", "*You* took Hask's silver"). Every other episode's list is third person. Convert.
5. **LOW — nextTime line 2 ("carts go north full…") never occurs in E4.** Use E4 isolde (~l.166): `"Either two hundred and seventy men are mining salt in the dark, Sergeant, or someone is eating their bread."`
6. **NOTE (no edit):** end_ashes "*Ash goes down too, if you put it down*" is good mythology. E8 must honour it (E8 #5).

## E4

1. **HIGH — keep_saved / keep_end: where do the saved miners go?** E8 hen_council says they were "let out of the Lanternhold ward in the coup", so someone handed the Abbess's victims back to her. Show that choice on screen. In keep_end, if `e4_miners==='saved'`:
   > Varane: "The Abbess has offered to take them into the white ward. Where else would I put two hundred people?"
   - Add a choice: "Not the Lanternhold." Set `e4_miners_ward` = 'lanternhold' / 'keep' (Ansel argues and loses only if Isolde's bond is <3).
   - E8 then reads the flag.
2. **LOW — t_hob_1 loc "Keep stable yard" → the Gutted Hen's stable**, which follows from ruling B.
3. **LOW — nextTime lines 1 and 3 don't occur in E5** ("The Prince arrives tomorrow…"; "So you're the dead man…"). Use real lines:
   - a2_cassius: `"I collect things that shouldn't exist, Sergeant."`
   - a1_varane: `"Ten men in this castle who are not the Marshal's. You're the fourth I've found."`

## E5

1. **HIGH — a2_led_isolde: "I thought he was stealing grain."** In E4 she did the bread-and-candles sum, watched the Hollowed brought into the yard, and heard the whole account. Change to:
   > "I knew where the bread went. I didn't know what he was *paid* for them. Sixteen thousand, four hundred and eighty silver, less carriage."
2. **HIGH — Tamsin letters (t_tam5_1–3, a2_tam_write) replay E4 ledger_teach and break the E6 ruling.**
   - **(a)** If `f.e4_teach_read`, open with: `"You said at Saltdown you'd teach me. Took you long enough, Sergeant."`
   - **(b)** t_tam5_3 repeats E4 beat for beat ("goes red… you think she's going to hit you", "You think I'm stupid"/"cleverest"). Cut the shame exchange. She is past that now; she bargains instead: `"Her name. That's all. Don't make a thing of it."`
   - **(c)** Drop "ANSEL under NESSA" from t_tam5_3 so that E6's ANSEL is "the first word nobody showed her" (ruling B).
3. **MED — a3_dance_ok: "It's the first time she has used your name."** That already happened in E2 isolde_end whenever `e2_isolde_hired`. Make it conditional:
   - If hired: `"She hasn't said your name since the night you brought Annet home."`
   - Else keep.
4. **MED — a2_led_none: Ulla "I was a guard there two years" → "eleven months"** (E4 says eleven months three times).
5. **MED — the Abbess speaks no line in E5** (a2_lists, a3_hall: honey-cakes and blessing only). Give her one exchange at the hall:
   > She hands Ansel a honey-cake and lifts her hand to bless him. It stops an inch short, as in E2. "Still feverish, Sergeant? You should come up to the ward. We take in everyone."
   - In the `e5_ledger_to==='brannagh'` branch, add one line to Brannagh: "Such a worried face, child."
6. **MED — Ansel's rise stalls.** After the release (a5_cut or final), Varane formalises his own men:
   > "Sergeant of the Keep. Four men who are not Konrad's. Find me six more."
   - Set `e5_keep_sergeant`. E7 can kill or turn those four; E8 hall pays it off (E8 #19).
7. **MED — previously: "He pulled Edda Moss off a Lamp pyre."** No saved route does that (the routes are argued, jailbreak, bribe and duel). Change to: `"Edda Moss did not burn. Brannagh Vey has not forgotten whose doing that was."`
8. **MED — c_dig "Diggers on the Downs" pre-spends E6** (frozen ring, kneeling carvings) and supplies E5's nextTime "Kneeling to the lights".
   - Retool it as a setup: the boy's crew went to the Nine Crowns and he babbles of "a long table with folk sat at it". No carvings, no frozen ring.
   - Replace nextTime line 2 with an E6 line, e.g. Tamsin dk_hand: `"They'll all want you."`
9. **MED — a1_varane: if `e4_miners==='saved'`, have Varane say where the miners are**, matching E4 #1: `"Your miners are in the Abbess's white ward. She wept over every one."` Ansel's thought: "> You've seen what comes out of that ward."
10. **LOW-MED — tone plateau at a4_release.** One uncanny image: in the Lanternhold's white ward, every Hollowed face turns up toward the lanterns at once, "the way flowers turn". Optionally show Oriel's cage in the chapel yard, which fits the Lamp's holy night.
11. **LOW — "Bet", the laundress Ulla kissed (t_ulla_2 area), now clashes with E4's Bet Cray (from ruling A).** The later episode renames, so this one becomes **Alys**.
12. **LOW — add one line explaining why Brannagh's company is still here** weeks later: `"Corvane wrote. I am to stay until the Writ is answered."`

## E6

1. **HIGH — dk_name / dk_guide contradict ruling B.**
   - Ruling B: ANSEL is "the first word she has written that nobody showed her".
   - But dk_guide has Ansel guide her finger through A-N-S-E-L, and dk_hers has him write TAMSIN first.
   - Fix: in dk_name she takes the stick and writes ANSEL herself from memory of the roll-case label, S backwards, before he can show her. dk_guide becomes guiding her hand through TAMSIN.
   - final2: "two names, side by side. Hers in two hands."
2. **MED — ulla_sister: ruling A renamed Hild→Sigrun, but the details still conflict with E4/E5.** E6 says two years younger, net-mender, "laughed like a goose" (which is Annet's tag from E2), and can't write. Change to:
   > "Sigrun's. Six years younger. A weaver. She did my hair with this every morning till I was fifteen… She writes once a year, eight months late."
3. **MED — t_tam_1 / t_tam_2c: the third back-step apple-peel scene** (after E1 t_tam_1 and E3 t_tam_s1), in an episode that already has the barrow apple. Change the activity: she is darning the fen-wool gloves she gave him in E2 (or re-fletching). Keep the curl-breaking "tell" as a broken thread.
4. **MED — Oriel talk: retire the repeated notes.**
   - t_oriel_truth "They're frightened" belongs to E7 oriel3. Change to: `"They missed a note. I've never heard them miss."`
   - t_oriel_palm "It's so quiet… where you are" (fourth use; E3 owns it, E8 pays it off) → `"I can hear my own breathing. Is that what you hear all the time?"`
5. **MED — e6_pell_resolve repeats E2 t_pell_3** ("Somebody ought to keep the roll").
   - If `e2_pell_report`: pay it off instead. He shows forty pages written since the Hen: "I kept it. I didn't know what I was keeping it for."
   - Else keep the resolve.
6. **MED — the prayer-book appears unconditionally** (sealed1, h_under, wait1, ride1). Gate on `e2_saved_book`, else use the pedlar's book (E2 #3).

## E7

1. **HIGH — starfire is pre-spent inside E7.**
   - bottom_fight_small intro: "You have felt starfire before. It never quite seems to find you." → `"His blade is burning blue. You have never stood in front of starfire. Your palm knows it before you do."`
   - The zealots in bottom_lime / bottom_fight_* and rescue use stock starfire moves, and the engine prints "looking for someone else" before int4.
   - **Engine fix (preferred, covers E3 too):** at engine.js ~l.775, print that log only if `f.e7_brannagh_doubt`. Before that, print `"The blue fire gutters as it touches you. You don't stop to wonder why."`
2. **HIGH — the Abbess is absent all night although Ansel is in her cells.** Add a short scene between hask_cell and int1, or after int6:
   - She comes down with a honey-cake and a candle and sits outside the bars. She calls Ansel "poor lamb". Her blessing stops an inch short again (E2), and she frowns at her own hand.
   - She says: `"Konrad says you'll hang. I'll pray it's quick. I'll pray they burn you after; it's kinder."`
   - This feeds E8 bran3 ("She gave me honey cake…").
3. **HIGH — int_crypt / bars1: knowledge leak.** Ansel asks "Past the door with the second lock?" and offers "a door under the crypt with two locks", but no episode shows him a second lock. Brannagh introduces it in bars_crypt.
   - Branch his line:
     - `e3_saw_crypt_door` → "Past the iron door with the blue light under it?"
     - else `e2_pell_crypt || e4_pell_crypt` → "Past the door Pell heard breathing behind?"
     - else "All the way down?"
   - Also: int_crypt's "I've been down there" conflicts with bars_crypt's "too holy for a warden's eyes". Change int_crypt to: `"I've been down as far as the ossuary door."`
4. **MED — hen4_alibi / intercut: `e2_hask_job==='took'` is never read after E5.** Hask's public accusation should use it:
   > "My own town sword. I pinned the badge on him myself."
   - If `e5_keep_sergeant` (E5 #6): "…and my lord gave him men."
5. **MED — the E6 nextTime line "I've got you, Sergeant… Come on. I know somewhere safe." never occurs.** It belongs here: it is the betrayal's hinge. Add it to rescue_won or the punt into the fen, verbatim.
6. **MED — hen_cellar: Edda appears whenever `e3_edda==='saved'`, even if `e3_edda_after` is 'fen' or 'north'.** Gate on 'cellar', else use the empty-blanket variant. "the fen girl you took off the pyre" → "the fen girl the Lamp never got to burn".
7. **MED — Oriel lines.**
   - oriel3 else-branch "like a missing tooth": E8 oriel_steps owns the image. → "like a held breath".
   - oriel_close: cut "It's quiet. It's *quiet* here." and keep "I can hear my own heart" (the new escalation).
8. **MED — ledger 'kept' branch: what happens to the book at capture?** Tamsin returns the sword, gloves and roll-case (rescue2) but never mentions the ledger. Add: `"Your book's gone. Not the roll. The other one. The Marshal's man took it off the Warden's table."` That sets up E8 #10.
9. **LOW — hen4_alibi Mags: "can't tell his left foot from Tuesday"** → "from a Lamp-day". It is one Tuesday too many.

## E8

1. **HIGH — the Abbess's numbers are lower than E5's.**
   - abbess_enjoy says "all three hundred and twelve" and abbess_arrest says "Three hundred and twelve counts… twenty-six".
   - E5 has 412 sold to Saltdown since last midsummer alone, and E4's tags already run 301–309.
   - Fix: "seven hundred and twelve" and "Seven hundred and twelve counts. Seven hundred and twenty-six, counting the children you tried."
   - In abbess_sum, add the rate, which also fits ruling B (Hask ~5 years): `"Forty years I kept the books. For thirty-five of them it was one or two a winter. Then Konrad came, and the sum came due faster."`
2. **HIGH — t_tam_3 ("Teach me… You write an A") forgets E4–E6.** If `e5_tam_letters || e6_tam_name`:
   > "Teach me the *rest*. I've got five letters and they're all yours."
   - She writes ANSEL from memory, S backwards. You write the first letter she hasn't got.
   - Else keep the current text.
3. **MED — hen_roll_tam / hen_roll_mark.**
   - "That's me?" / "That's you." is verbatim from E6 dk_hers. If `e6_tam_name`: `"It's got a lot of corners," she says, from the stairs. "I remember."`
   - hen_roll_mark: if she has letters (E5/E6), she makes the T herself and the S's backwards, then the fen-knot. Cut "the first thing she has ever made that will last" in that branch.
4. **MED — roll-count sweep (applying ruling C; these nodes aren't named in it).** Hask is alive, so the dead number 405:
   - cold2: the dream count ends "*Four hundred and five.*" Then add: "And one line above them all, still breathing."
   - pell_die2: "seen four hundred and six of them" → five.
   - hask_blade: "paid for with four hundred and six lives" → five.
   - abbess_sum: "four hundred and six soldiers" → five.
   - hall2: option "For the four hundred and six" → "For the four hundred and five."
   - Keep conf_why (Tamsin counts lines, 406). Keep hall2's narration "Four hundred and six names".
5. **MED — rite2: Edda in the Saint contradicts E3 end_ashes**, where Siddy buries her ash ("Ash goes down too"). If burned or mercy:
   > "Edda Moss. Nineteen. She went up from the pyre before her uncle could gather the ash. The smoke was quicker."
6. **MED — dawn2: Cassius "I'll be back for the wedding."** The wedding is in Corvane (ruling B), so he isn't coming back for it. → `"Charming town. I'll be back for my bride."`
7. **MED — night_iso1: "You've never written a letter to a woman."** He did in E5 t_iso, which sets `e5_iso_letter`.
   - If set: `"You've written to her once. One line. She keeps it under a floorboard. This one has to be longer."`
   - t_iso_2, if `e5_iso_letter==='truth'`: "Under the third board. With the other one."
8. **MED — hen_council: Rusk sends a crow with red ribbon.** Crow plus red thread is exclusively Tamsin's and Gall's signal. Change to "a charcoal-burner's boy with a note in a lady's educated hand".
9. **MED — hen_council: Edda.**
   - Gate on `e3_edda_after==='cellar'`. Otherwise she has come back from the fen for this ("Siddy brought her in at noon").
   - "burn-scars on her wrists" fit no route. Use "the star-brand on her right palm" only if `e3_edda_route==='argued'`, else "hair grown back like goose-fuzz".
10. **MED — kept ledger is never resolved** (`e5_ledger_to==='kept'`, plus E7 #8). Hask's men took it. In c_crypt or keep_after, it turns up in Hask's tower with "Fifth share to K.H." added in Hask's hand. If `e8_hask==='justice'`, Isolde reads it aloud at his trial.
11. **MED — c_salt_3: the buyer calls Ansel "The Unreckoned."** No one in-world has used the word (it is a UI and skill name). → `"The dead sergeant. How nice."`
12. **MED — t_iso_1: "The Crown will pay my dowry to the March"** is backwards, and conflicts with E5 a1_varane ("the dowry, the March as surety"). → `"Your company's wages come out of the Crown's bride-price for me. So, technically, Captain, Cassius is paying you."`
13. **MED — Saint Corran's Eve anniversary (with E1 #1 and E2 #2).** In night_hub or lant1, add Ansel's thought: "Six years tonight." If `f.e1_hask_meeting` is set, give Hask a line on the crypt stair (hask1/hask2): "Six years tonight, Dray. I brought a bottle. I always do."
14. **MED — a surviving Hob gets about one line in E8.** If `e7_hob==='alive'`, add a short night_hub talk: he asks that his line on the new roll say "Of the Company" like the old ones, not "of Harrowgate". Grant +1. That pays off E2's "I'll be her roll".
15. **LOW — isolde2 and night_iso3: "since Tuesday"** → "since the night they washed the floor".
16. **LOW — night_tam1/2b: the apple passed back and forth until it's a core** duplicates E2 tam_tease_apple and pre-spends the wall1/wall2c finale apple. Change the object: Mags's eel-broth in a flask, which Tamsin can't stomach and drinks anyway.
17. **LOW — hen1: Pell's greeting checks `bond.pell>=3`.** Change to ≥4 so his warmth matches the new survival gate (ruling E).
18. **LOW — Wat is "18" (hen_council, keep_postern)**, but he was 17 two to three months ago. Keep 17.
19. **LOW — hall1 payoff for Varane's "ten men":** `"My father wanted ten men in this house who were not the Marshal's. He found four. I am going to do better."`
20. **LOW (optional) — Oriel was "born in the Lanternhold at Saint Ysolt's"** (E3 oriel_what). Either make it the Corvane chapterhouse in E3, or pay it off in abbess_arrest: `"I lit the candle by your face, child. You didn't cry."`
