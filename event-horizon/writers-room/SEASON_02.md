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
