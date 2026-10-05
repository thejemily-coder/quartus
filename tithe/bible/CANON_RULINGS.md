# TITHE Season One — Showrunner's Canon Rulings (binding for Phase C)

These settle every cross-episode conflict found in Phase A. Where a ruling names an episode, the owner of that episode makes the edit. If you find a NEW cross-episode conflict, resolve it toward these rulings and the bible, and mention it in your report.

## A. Names (rename everywhere in YOUR episodes; grep for stray uses)
- **Jory Pask** (E4 tally-boy, dies, may be written into the Roll) is the only Jory. E2's Jory -> **Piers**. E6's Jory Tench -> **Perkin Tench**. E6's Wat Mallow -> **Hew Mallow**.
- **Tamsin's mother: Nessa Vell** (E6 "Brid" -> Nessa).
- **Ulla's sister: Sigrun** (E6 "Hild" -> Sigrun).
- **Isolde's old nurse: Nurse Brisket** (E5 "Wenna" -> Brisket). E2's **Wenna Hamm** keeps her name; E4's Wenna Cray -> **Bet Cray**; E3's Old Wenna -> **Old Sukey**.
- E2's **Brother Aldo Cauley** keeps his name; E4's Aldo Cray -> **Ambrose Cray**.
- E5's **Kit Carrow** keeps the name; E6's Kit -> **Robin**. E5's Col Thrale -> **Garth Thrale** (E2/E3 Cols keep theirs only if they are different minor people in different places; otherwise rename the E3 one **Hamo**).
- E1's **Tom Ashe** (died at the Ford telling the miller's-wife joke) keeps his name. **Brother Pell's full name is now Pellam Orme** (was Ashe). Fix any "Ashe" for Pell.
- Mags's son is **Tom Halloran** (distinct from Tom Ashe). Fine as is.
- Other duplicate minor names (Dickon, Ivo, Aldous etc.): the later episode renames its minor character.

## B. Facts
- **Hask was Ansel's captain for ten years** (Ansel joined the Red Company at 15; the Ford was at 25). E1 cold2 "Eight years" -> "Ten years".
- **Hask has served Lord Varane about five years** (since soon after the Ford). Fix "eight years" in E5.
- **Hask's father** was a tanner on Lime Street in Corvane, flogged by Lamp tithe-wardens for a short tithe; he died of it. (Merges E7 and E8: E7 cold2 must say Corvane tanner, not Lowmarch reeve. Hask and Ansel are both tanners' sons: "We were the same.")
- **Mags:** buried ONE husband (Davey, drowned in the tannery pit) and her son Tom; put the other (Gil) through a window — he lives in Corvane. Any "buried two husbands" -> "buried a husband and a son".
- **Pell:** a Lamplighter of the Lanternhold for twenty-two years; expelled **two years ago** for asking what happens in the crypt (the Abbess said "Prayer, Pellam" and had him out by noon). He heard breathing through the crypt door. E3/E4/E6 versions must conform (E6 "forty years" -> "twenty-two years"; E4 "nine years ago" -> "two years ago").
- **Varane's livery is blue** with the silver boar (fix any "Varane grey").
- **Annet:** whatever Ansel told Isolde in E2, by E3 Annet is in the Lanternhold white ward. If e2_annet_where==='keep', Lord Varane overruled Isolde a few days later and sent her up "for proper care" — Isolde visits her daily and it is a wound between father and daughter. E4 `isolde_door` must not show Annet in Isolde's room. E8 may show Annet in the white ward/among the Saint's faces in all branches.
- **Saltdown:** output has COLLAPSED (bible) even though more carts go up — that is the mystery Varane hires Ansel for in E4. Any E2 arithmetic saying output went up must say the reverse (more mouths, less salt).
- **Hob works at the Gutted Hen's stable** (E2). In E7 he may be at the Keep only because he was sent there with a message, or hiding in its hayloft.
- **Wat** reaches Harrowgate if spared (e1_spared_wat), whatever Ansel told him; if Ansel told him to say "Sergeant Dray sent you", Wat says so.
- **Isolde's wedding:** E5 is the betrothal SIGNING. The wedding is set for **Midwinter in Corvane**. Fix "tomorrow"/"midsummer".
- **Season & time:** E1 early autumn rain (October). E2 a week later. E3 mid-autumn. E4 late autumn. E5 the Feast of Lanterns (the night of the dead, end of autumn). E6 first hard frosts. E7 early winter. E8 begins the dawn after the bog and the rite is THAT night. Avoid naming calendar months; use seasonal texture. (Fix E5 "July/September".)
- **Brannagh's interrogation (canon = E7):** she lays a starfire-burning blade flat over Ansel's heart; it does nothing; her own throat-scar bleeds. E8 references must match (no "hand over a brazier").
- **E8 timeline:** Brannagh finds them because Oriel told her where the silence was ("the hole where he is"); she deserted at dawn with the ledgers.
- **The heron song:** eleven verses; the heron dies in the eleventh. In E6 Tamsin invents a twelfth verse in which the heron lives — that is the "happy last verse" E7 refers to. E8 Gall sings "the eleventh verse, where the heron dies."
- **"Tam":** Ansel first calls her "Tam" in E6, in the dark. He must not call her Tam before E6. After E6 he may.
- **Tamsin's letters:** E5 Ansel begins teaching her letters (her mother's name; the snakes of the S's). E6: in the dust she writes ANSEL — "the first word she has written that nobody showed her."

## C. The Company Roll
- The Roll has **406 lines**: Hask's name heads it (line 1, "Konrad Hask, Captain. Of Corvane." — written from a sergeant's habit, never struck through) and **405 dead** below. Ansel is not on it. Hask is NOT dead and is never "counted" among the dead by anyone but Ansel's E1 gesture.
- Names added after the Ford continue the numbering: **Jory Pask = 407** if e4_jory_written. **Hob Fenner = 408 if e4_jory_written, else 407** (use a conditional text object). Anyone added in E8 continues from there; phrase as "the next line" where exact numbers would require complex branching.
- Hask never says "four hundred and seven". Fix E2 toast / E8 hask_kill / pell_die3c / recap / e8_deadmen / night_sleep to obey this.
- E8's new "roll of the living" is separate and starts at 1.

## D. Reveal ladder (Season One may reveal ONLY this much)
- YES in S1: the Hollowing is man-made (the Abbess's Small Tithe rite; Hask's carts sell the Hollowed); the Tallyman cannot count Ansel ("You're not here"); earth-burial vs. pyre matters to "something below"; barrow carvings show kings kneeling to stars with mouths and something vast chained below; a living lock (Hollin) calls Ansel "a door"; the Mothers' voice says *Door*; the Saint is full of faces of the Hollowed/dead; a star goes out.
- NOT in S1 (hint only, fragments, never explained): that the Choir EATS souls; the word "Compact" or its terms; the Reckoning/Great Tithe as doctrine; what the stars are. Characters may say "a bargain", "a debt", "something is owed", "the lights are hungry" as fragments or in madness; nobody lays out the system. The Abbess may speak of "paying down a debt so it does not come due all at once" without naming it.
- Trim: E2 (Cauley's "the rite"; Pell's "Saints have mouths… what do they eat?"; keep Pell's crypt-breathing; make Hask's ledger line oblique), E4 troll's "little door / they're listening for you down there" (change to something about him smelling wrong, "like a grave with no one in it"), E6 Pell's near-verbatim Compact (make it fragments he can't finish reading), E7/E8 explicit Compact/eating/Reckoning lines (keep the images).
- Milestones belong where the bible puts them: Ansel's **first laugh of the show is E3 (fen, Tamsin's singing)** — remove/alter earlier "first time he's laughed in six years" or "really laughing" claims in E1/E2 (a short surprised bark at Mags is OK if not framed as the first). His **first dream-free night is also E3** — fix E1 camp_pretend.

## E. Bonds (rebalance — the meters are saturating)
Bond cap is 12. Target totals at the end of E8 for a player who fully pursues a relationship: Tamsin 9–10; Isolde 7–8; Brannagh 7–8; Oriel 5–6; Pell 6–7; Ulla 6–7; Mags 5–6; Hob 4–5 by E7. A neglectful player should end most relationships at 0–3.
Per-episode budget (max gain if the player picks every warm option, main + side): Tamsin +2 (E6: +3); Isolde +2 (E5: +3); Brannagh +2; Oriel +1–2; Pell +1–2; Ulla +2 (E4 joining: +2); Mags +1; Hob +1 per episode (E2–E6, so only a player who engages him every time reaches the E7 gate of 3 — consider allowing +2 in E2 via the training talk).
Rules: (1) no bond grants on mandatory/unconditional nodes except a single small defining moment; (2) within a choice set, NOT every option grants — the cold or selfish option gives 0 or −1; (3) prefer setting a flag and using conditional lines for flavor over granting bond; (4) side talks grant at most +1 each; (5) never grant bond to a character who isn't present.
Gates: Hob survives E7 only if e2_hob_hired && bond.hob >= 3 && sent to warn Isolde (keep). Pell survives E8 if bond.pell >= 4 (raise from 3). Brannagh's E8 lovers option requires bond.brannagh >= 5 && f.e7_brannagh_moment==='hand' (or her equivalent flag) and must never be the only/forced option; it stays frank and adult, written as her choice as much as his.

## F. Flags to wire up (payoffs)
- E7 reads e5_hask_knows (Hask moved the coup forward because he knew the evidence existed), e6_hob_trained / e2_hob_trained / e4_hob_trained (Hob fights better; flavor), e4_jory_written (roll numbering).
- E8 reads e7_told_crypt, e7_brannagh_moment, e7_oriel_close, e6_crown (if the barrow crown went to Cassius as a wedding gift, he wears it/mentions it), e4_miners_some, e3_tam_promise where natural.
- E5: if no ledger exists, set **e5_ledger_to = 'none'** (new registry value) instead of 'kept'. E6/E7/E8 must handle 'none' (no ledger lines; Ulla's testimony instead).
- E8 recap: fix the four wrong lines (Gall dies in the shallows at the foot of her ladder; Hob's pitchfork; split Edda 'mercy' from 'burned'; Hask/roll) and add lines for e7_hob==='none' and for Tamsin (based on e8_tam / e8_roll_tam / e8_wall).

## G. Prose & content standards
- Anachronisms out: "heart attack", years like "1712", "God" (use Saints/Lamp/Mothers), "okay", modern slang/idioms ("jack off" -> period-appropriate frank vulgarity). Keep profanity earthy and medieval.
- Cut verbal tics: "not X but Y" constructions, repeated signature images (count your uses of "like a knife", "the colour of", "something in him/her", "for a long time"), em-dash overuse.
- Keep violence specific and graphic; keep sex frank, adult and character-revealing, cutting before catalogue. No sexual violence on-screen; all adults.
- Each character must sound like themself (see bible). Tamsin's slow burn stays hidden in plain sight: in E5 reduce the jealousy beats to at most two, and let them be oblique.
