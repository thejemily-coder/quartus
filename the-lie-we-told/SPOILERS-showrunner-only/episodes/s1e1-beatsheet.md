# S1E1 — "SOMEBODY TOLD ME" — BEAT SHEET (STORY ROOM; SHOWRUNNER ONLY)

**Title credit:** "Somebody Told Me" — The Killers (2004). (*Hot Fuss*, June 2004. The song drifts from Elm Row in Act Three as they go over the garden wall. It is a song about hearing something secondhand and choosing what to believe, sung over a party; it also hums, for those who know, under Teddy's night.)

**In-world span:** Saturday, August 27, 2005, 6:50 a.m. (South Station) → Sunday, August 28, 2005, ~6:45 a.m. (Sutter 304).
**Weather:** hot, hazy, 86°F, thunderheads that never break; a big moon after midnight.
**Katrina:** Category 3 in the Gulf all Saturday (TVs in the background; nobody at Hollis is paying attention). Upgraded overnight (Category 4 by the small hours of Sunday; the period checker should confirm the exact category shown on a 5:40 a.m. EDT broadcast before the number is printed — if in doubt, the depot TV says "upgraded overnight" and shows the cone, and the number stays out of frame).

**Binding sources:** `canon/series-canon.md` (hard lines), `room/episode-format.md` (.ep spec), `SPOILERS-showrunner-only/season-plans/s1.md` → PILOT REQUIREMENTS (this beat sheet implements them), `knowledge-ledger.md`, `room/period/2005-fall-opening.md`.

**Header (part 01 carries it):**
```
@id s1e1
@season 1
@episode 1
@title Somebody Told Me
@title_credit "Somebody Told Me" — The Killers (2004)
@date Saturday, August 27, 2005
@start cold_open
```
(No `@previously` for the pilot. `@teaser` lines are added at assembly by the room, not by the part writers.)

---

## 1. THE EPISODE IN ONE BREATH

A Southie scholarship kid takes his rich roommate's dare and walks into the Corinthian Club's First Light wearing the roommate's name. A girl who is working the same party in a dead girl's apron changes into a dress worth more than his mother's car. In a service corridor each catches the other mid-con. They swear silence, steal a bottle, dare each other up the walls of the place, go over the last one, and end up at the river where a man in a club blazer throws away someone's apology. "We were never here." By two they are in his bed. By dawn she has called home from a pay phone and left him a photograph. By 6:45 someone has slid an envelope under his door that says *he* was never there either.

## 2. EMOTIONAL THROUGHLINE

**Cal's question:** *Do I belong here?* Sloane's toast names it: "The first lie Hollis will tell you is that you belong here. The second is that you don't." All day Cal is mistaken for the help (the curb), measured by his shoes (Kit), told he won't get through the door (Julian). He gets through it as somebody else. The only person at the party who sees *him* is the one person who is also somebody else.

**Del's question (seen only in cutaways and in her face):** *Will the costume hold?* She came to test it against one man (Graham). It holds against everyone but a boy in the wrong tie who said thank you to a server.

**The turn:** a shared lie is the first true thing either of them has had with another person in a long time. The pact is intimacy. The night in Sutter 304 is them trying to tell each other the truth with their bodies because their mouths are compromised — and both still hold something back (his summer; her everything).

**The sting:** the lie that bound them is, by morning, a leash in someone else's hand.

**Tonal map:** cold open and Act One are Gilmore-fast and Entourage-bright (class comedy with a blade in it). Act Two is the party as a social machine (Greek/final-club swagger, Sloane's charisma). Act Three is screwball heist. Act Four drops the music out: the river is quiet, the figure is a horror-film beat played at walking pace. The night is hot, funny, specific, tender, a little frightening for both. The tag is cold light.

## 3. ACT STRUCTURE (times are in-world)

| Act | Span | Nodes | Part |
|---|---|---|---|
| COLD OPEN | 6:50 a.m. South Station → ~10:15 a.m. Sutter curb | cold_open, curb_after | 01 |
| ACT ONE | 11 a.m. move-in → 8:40 p.m. card handoff | movein_304, commons, floor_meeting, julian_reply, convocation, matriculation, kit_reply · evening_fork, ev_race / ev_teddy / ev_henry, card_handoff | 01, 02 |
| ACT TWO | 9:10 p.m. → 10:30 p.m., the Corinthian | corinthian_door, owen_bar, owen_reply, party_upstairs / party_terrace, **del_kitchen** + one of four del_kitchen_* (Del POV), sloane_toast, sloane_reply | 03, 04 |
| ACT THREE | 10:40 p.m. → 11:40 p.m., the catch, the pact, the dares | corridor_catch, corridor_after, cellar_pact, cellar_krug, dare_terrace, dare_result, library_graham, garden_wall | 05 |
| ACT FOUR | 12:05 a.m. → ~4 a.m., the town, the river, the night | town_diner, river_walk, river_shrine, **del_shrine_name** (Del POV), river_fence, river_figure, river_never · night_room, night_she_leads / night_he_leads / night_slow, night_scar, night_truth, night_last | 06, 04, 07 |
| TAG | 5:40 a.m. → 6:45 a.m. | **del_depot** + del_depot_spoke / del_depot_silent (Del POV), morning_wake, morning_envelope `[end]` | 04, 07 |

## 4. PART MAP (parallel drafting; files in `src/s1e1/`)

| File | Seat | Nodes owned | Entry from | Exits to |
|---|---|---|---|---|
| `01-cold-open.ep` | head | cold_open, curb_after, movein_304, commons, floor_meeting, julian_reply, convocation, matriculation, kit_reply | `@start` | evening_fork (02) |
| `02-early-evening.ep` | head | evening_fork, ev_race, ev_teddy, ev_henry, card_handoff | kit_reply (01) | corinthian_door (03) |
| `03-first-light.ep` | head | corinthian_door, owen_bar, owen_reply, party_upstairs, party_terrace, sloane_toast, sloane_reply | card_handoff (02); del_kitchen_* (04) → sloane_toast | del_kitchen (04); corridor_catch (05) |
| `04-del-cutaways.ep` | **del** | del_kitchen, del_kitchen_jo, del_kitchen_work, del_kitchen_list, del_kitchen_library, del_shrine_name, del_depot, del_depot_spoke, del_depot_silent | party_upstairs / party_terrace (03); river_shrine (06); night_last (07) | sloane_toast (03); river_fence (06); morning_wake (07) |
| `05-the-catch.ep` | head | corridor_catch, corridor_after, cellar_pact, cellar_krug, dare_terrace, dare_result, library_graham, garden_wall | sloane_reply (03) | town_diner (06) |
| `06-the-river.ep` | head | town_diner, river_walk, river_shrine, river_fence, river_figure, river_never | garden_wall (05); del_shrine_name (04) → river_fence | del_shrine_name (04); night_room (07) |
| `07-night-one.ep` | head | night_room, night_she_leads, night_he_leads, night_slow, night_scar, night_truth, night_last, morning_wake, morning_envelope | river_never (06); del_depot_* (04) → morning_wake | del_depot (04); `[end]` |

53 nodes. 18 choice nodes on every path (all branches are the same depth). Typical path ≈ 10,600 words (see per-node targets).

## 5. GRAPH

```
cold_open* ─► curb_after ─► movein_304 ─► commons ─► floor_meeting* ─► julian_reply ─► convocation ─► matriculation* ─► kit_reply
  ─► evening_fork* ─┬► ev_race  ─┐
                    ├► ev_teddy ─┼► card_handoff ─► corinthian_door ─► owen_bar* ─► owen_reply* ─┬► party_upstairs ─┐
                    └► ev_henry ─┘                                                               └► party_terrace  ─┴► del_kitchen*(DEL)
  del_kitchen* ─┬► del_kitchen_jo ─────┐
                ├► del_kitchen_work ───┤
                ├► del_kitchen_list ───┼► sloane_toast* ─► sloane_reply ─► corridor_catch* ─► corridor_after ─► cellar_pact* ─► cellar_krug
                └► del_kitchen_library ┘
  ─► dare_terrace* ─► dare_result ─► library_graham* ─► garden_wall ─► town_diner ─► river_walk ─► river_shrine ─► del_shrine_name*(DEL)
  ─► river_fence ─► river_figure* ─► river_never ─► night_room* ─┬► night_she_leads ─┐
                                                                ├► night_he_leads  ─┼► night_scar* ─► night_truth* ─► night_last ─► del_depot*(DEL)
                                                                └► night_slow      ─┘
  del_depot* ─┬► del_depot_spoke  ─┐
              └► del_depot_silent ─┴► morning_wake ─► morning_envelope ─► [end]
```
`*` = choice node. Choices that share a target differ by the flags they set; the next node reflects them with `{if}`.

**Choice tally on any path (18):** cold_open, floor_meeting, matriculation, evening_fork, owen_bar, owen_reply, del_kitchen (Del), sloane_toast, corridor_catch, cellar_pact, dare_terrace, library_graham, del_shrine_name (Del), river_figure, night_room, night_scar, night_truth, del_depot (Del).
Mix: dialogue tone (curb, Julian, Kit, Owen, Sloane, corridor), where-to-go / lock-out (evening fork, party fork, Del kitchen), moral (river_figure report; Del's apron; Del's call), dare/action (dare, lantern), intimate physical-direction (night_room), intimate emotional (night_scar, night_truth). **Writers must not add or remove choice nodes.** Inside a node, writers may vary prose freely.

**Lock-outs:** the evening fork (three mutually exclusive scenes: the Race / Teddy / Henry); the party fork (Rafe upstairs / the terrace); Del's kitchen (four mutually exclusive actions); the night's opening (three different ways in). Off-screen consequences are recorded in flags.

---

## 6. NODE-BY-NODE BEATS

Word targets are along-path prose. `{if}`-only alternates don't count twice. POV is Cal unless marked.

### PART 01 — `01-cold-open.ep` (head) — target ≈ 1,800 words on path

**cold_open** — `@act COLD OPEN` · `@slug SOUTH STATION, BOSTON — 6:50 A.M.` · ~400w
- Deck dropped him at South Station at six in his uncle Jimmy's truck. Deck's goodbye, in Deck's way: a shove, a huge laugh, "Don't come back talking like them," and then, quieter, through the truck window: "We're good, Cal. We're good." (Seed of the summer. No explanation.) Patty didn't come; she'd worked a double at the Quiet Man; she left forty dollars and a note on the fridge (*Knock em dead, kid. Call your mother. —Ma*). The $212 in his sock includes her forty.
- The 6:50 Peter Pan. Deck's mother's plaid suitcase with the broken wheel; his duffel; his Discman. `[needle] The Dirty Glass | Dropkick Murphys | Cal's Discman on the Peter Pan`. A heavy man in a Sox cap across the aisle reading the *Herald* (Frank Mulry; never named). Pike west, then Route 2 / 91 north, Cal watching Massachusetts thin out into farm stands.
- Calder Falls depot ~9:15 a.m.: pay-phone bank, a TV over the ticket counter on CNN, the storm in the Gulf on the screen, nobody watching. The Sox-cap man gets off too.
- The walk: a mile up Main Street (Hollis Bookstore, the diner, St. Anne's, the dead brick mill), the broken wheel clacking. Hollis's gates. The Sox-cap man, behind him, lifts a disposable camera and takes a picture of the gates as Cal walks through. Cal half-notices: tourists. `[sms from="Deck" time="9:41 AM"]` something Deck-funny on T9 (e.g. *u there yet. dont let them tie a sweater on u*). Cal's reply `[sms to="Deck"]` short and dry.
- Sutter Hall's curb: a black Range Rover, tailgate up; a Saab 9-3 behind it; a woman in a silk scarf directing (Bunny Vanderhoef); a man on a cell phone (Theodore Vanderhoef III) who, without lowering the phone, points Cal at a box and holds out a folded twenty: dorm crew, he assumes. The scar through Cal's eyebrow is seven weeks old and still pink; Theodore III's eyes go to it and away.
- **CHOICE (dialogue tone / class):**
  - `Carry the box. Say nothing.` → curb_after | set: s1e1_curb="carried"
  - `"I'm the roommate, sir."` → curb_after | set: s1e1_curb="corrected"
  - `Carry the box. Keep the twenty.` → curb_after | set: s1e1_curb="tipped"

**curb_after** — ~220w — continuous
- Theodore III's reaction per `s1e1_curb` (carried: he never finds out, and Cal lets him; corrected: a beat of practiced, frictionless recovery — "Of course you are" — that's worse than the mistake; tipped: Cal pockets it with a smile so polite it's an insult, and Teddy sees).
- Teddy Vanderhoef IV comes down the steps, sees Cal wrestling the plaid suitcase, grabs the other end. That's it: friends in eight seconds. "Reardon?" then "Cal," then, by the second landing, "roomie." Teddy asks about the eyebrow; Cal says "Bar fight. I won." (First version of the scar story.) Theodore III, behind them: "Bear, the rug." Teddy's shoulders, at "Bear." Cal files it.
- → movein_304

**movein_304** — `@act ACT ONE` · `@slug SUTTER HALL 304 — 11:20 A.M.` · ~380w
- The room: Teddy's half a catalog (Ralph Lauren duvet, a PowerBook, a framed rowing photo with his father, a mini stereo, a lacrosse stick he doesn't play); Cal's half: a Sox pennant, a photo of the twins (Siobhan and Patrick, 12, at Castle Island, Sully's ice cream), and a crucifix from Patty he hangs over the bed without thinking and then can't take down because Teddy has seen him do it. Teddy doesn't make it weird. Teddy makes it nice, which is harder.
- Sutter's common room TV on CNN: a Category 3 storm in the Gulf, the cone; a freshman changes it to MTV.
- On the stairs: Henry Oduya-Clarke (wire glasses, notebook in his back pocket) and his father Joseph, in a Hollis-green groundskeeper's shirt, carrying a mini-fridge. Cal takes a corner. At the third-floor window Henry, unprompted, looking at the river: "The river's that way. They fenced the dam two weeks ago. A girl drowned." Joseph: "Henry." Henry stops. Joseph's hands on the fridge. Then Henry, to fill the silence, points at a dark granite cube on the bluff at the end of River Street: "That's the Ferryhouse. It's a club for dead people." Joseph almost smiles. (Cal will repeat this line to Del at 1:30 a.m.)
- → commons

**commons** — `@slug THE COMMONS — 2:40 P.M.` · ~170w — no choice
- Cal crossing the Commons for his ID photo. `[needle] Mr. Brightside | The Killers | a Bramwell Hall window, on repeat`. Bramwell's lawn: a sun-streaked blonde girl alone, no parents, dragging a monogrammed steamer trunk (brass corners, **E.A.**) up the steps herself; a boy offers help and is refused with a smile that could cut glass. On the steps a girl in pearls and a ribbon (Caro) holds the door with her mother (Annabelle, enormous hat). Caro gets one line, warm, Charleston (it must NOT say Del's name within Cal's hearing). The blonde catches Cal watching, raises one eyebrow. Gone inside. Cal: *rich girl, too rich to need parents.*
- → floor_meeting

**floor_meeting** — `@slug SUTTER HALL, THIRD-FLOOR LOUNGE — 5:00 P.M.` · ~300w
- Julian Thorne, RA, gray suit in August, consignment-perfect. Rules to the floor, delivered as a stand-up set with a knife in it (quiet hours, the fire doors, "If you're going to vomit, vomit in your own room; I'm an RA, not a priest").
- Julian to Cal alone, after: "You're the Haverford Scholar. Don't look surprised; I'm your RA, I read files." "You're my second. The first is giving the welcome at Convocation in an hour; watch him, he's what this place does to people like you when it likes them." Then: "Frats are beneath real power. Real power is behind a door on Prospect Street tonight, and you won't get through it."
- **CHOICE (tone):**
  - `"Watch me."` → julian_reply | set: s1e1_julian_reply="watch_me"
  - `"Who says I want through it?"` → julian_reply | set: s1e1_julian_reply="who_says"
  - `"Why tell me?"` → julian_reply | set: s1e1_julian_reply="why_me"

**julian_reply** — ~100w
- Julian's answer per flag (watch_me: "I intend to." — he means it literally; who_says: "Your shoes." ; why_me: "Because you'll try anyway, and I'd like to know how it goes.") Then, all paths, lower: "Also. There's a bar in town called the Mill Race. The owner needs a barback. Tell him Julian sent you. Don't tell anyone else I did." He walks off. Cal has a job lead and a dare and doesn't know which one he was given.
- → convocation

**convocation** — `@slug FOUNDERS' CHAPEL — 6:00 P.M.` · ~220w
- Founders' Chapel, white steeple, the bell tower (the Beacon). President Pyne is forgettable. Dean Carrow on the dais (silver hair, green bow tie, a gold signet ring he turns on his finger) — one sentence, no more.
- **Owen Tierney**, Student Assembly President: funny, Dorchester under the polish, "My mother cleaned houses in Milton; if I can be standing here…" The room loves him. Cal loves him; it's the first time all day he's heard home in a voice at Hollis. Owen ends with a line of *The Parting Glass* — "Of all the harm that e'er I've done, alas it was to none but me" — as a joke about freshman year. Laughter. (Plant the song. No emphasis.)
- → matriculation

**matriculation** — `@slug FOUNDERS' CHAPEL, THE NARTHEX — 7:05 P.M.` · ~160w
- The Matriculation Book (1791, open on a lectern since noon), a steel-nib pen, a line of freshmen. Henry is behind Cal. Kit Brennan is ahead; turns around. She's read the printed Freshman Register (hometowns, high schools, photos) and she has looked at his shoes. "You're the scholarship boy from Boston. Brennan. Columbus. Debate. We'll be enemies." (She must NOT say "Haverford"; she learns that in E4.)
- **CHOICE (tone):**
  - `Flirt. It'll infuriate her.` → kit_reply | set: s1e1_kit_opening="charm"
  - `Go for the throat.` → kit_reply | set: s1e1_kit_opening="cut"
  - `Agree with her.` → kit_reply | set: s1e1_kit_opening="agree"

**kit_reply** — ~150w
- Four delicious lines, per flag (charm: she's annoyed that it lands; cut: she smiles like she's found a sparring partner; agree — "Good. I've never had a real one." — disarms her and she hates it). She signs *Katherine Anne Brennan*. Cal signs *Callum Patrick Reardon* on the same page, three lines below **Delphine E. Ashcombe** in a careful upright hand. Henry, peering: "She signed like she was copying it." And: "She came in at four, in black pants and a white shirt. She didn't read the plaque. Everybody reads the plaque." (Fair-play: the server's uniform.) Cal doesn't connect the name to the blonde on Bramwell's steps; why would he.
- → evening_fork

### PART 02 — `02-early-evening.ep` (head) — target ≈ 1,000 words on path (≈2,200 written)

**evening_fork** — `@slug THE COMMONS — 7:25 P.M.` · ~120w
- Teddy jogs off to dress for "Sig Rho with Dad's friends." Henry hovers with his notebook. Julian's tip is in Cal's pocket. An hour of daylight left, hot and gold. Where does he spend it?
- **CHOICE (lock-out; each a full scene):**
  - `Walk into town and find the Mill Race.` → ev_race | set: s1e1_evening="race", s1e1_saw_jo_photo=true, s1e1_saw_wall_of_shame=true
  - `Go back to 304. Teddy's losing a fight with a tie.` → ev_teddy | set: s1e1_evening="teddy", s1e1_teddy_coached=true, s1e1_saw_teddy_directions=true
  - `Let Henry show you the river.` → ev_henry | set: s1e1_evening="henry", s1e1_henry_tour=true, s1e1_knows_josette_name=true

**ev_race** — `@slug THE MILL RACE, 1 CANAL STREET — 7:45 P.M.` · ~600w
- Down Main to Canal Street along the old mill race. The Race: tin ceiling, forty-foot mahogany bar, the race roaring under a glass panel in the floor, Narragansett and PBR, a pickled-egg jar no one has opened since Carter, the Sox shrine and a 2004 pennant with FINALLY in marker. TV on The Weather Channel: the cone. A regular: "That's going into New Orleans, watch." Nobody watches. `[needle] The River | Bruce Springsteen | the Race's jukebox`.
- Augie isn't down (he doesn't come down Saturdays till ten; bartender Bonnie: "Come back tomorrow before four. He'll want to look at you."). **Augie must not appear** (he meets Cal Sunday, E2).
- The Wall of Shame: framed unpaid tabs of Hollis boys who became somebody. **T. VANDERHOEF '80 — $212.00** (Cal has $212 in his sock; he laughs out loud). **N. SLOANE '87 — $46.50** (just a name to Cal; the writer gives it no weight). R. ASHFORD '74 — $9.25 + one window.
- Beside the register: a graduation photo of a dark-haired, freckled, gap-toothed girl laughing with her whole face, and a pickle jar: **FOR JO**. Bonnie: "Augie's granddaughter." "What happened?" "She went swimming." Bonnie's face says the rest and then closes. `{if s1e1_curb == "tipped"}` Cal feels Theodore III's twenty in his pocket and puts it in the jar. (Prose only; no flag needed — derived from curb=="tipped" && evening=="race".) `{/if}`
- Katrina, Southie and Jo in one room; Cal thinks of the Quiet Man and Patty behind a bar like this one. He leaves with the job half-promised.
- → card_handoff

**ev_teddy** — `@slug SUTTER 304 — 7:40 P.M.` · ~600w
- Teddy has changed shirts three times for a "frat dinner." `[needle] Since U Been Gone | Kelly Clarkson | Teddy's iPod speakers` — Teddy sings the chorus into a hairbrush, unashamed, and is very good. Cal ties Teddy's tie for him (Cal learned knots for First Communions and wakes).
- Theodore III calls Teddy's Razr: "Bear." Teddy, on the phone, gets smaller. After he hangs up, Teddy coaches Cal on being Teddy, as a bit, for fun, because he's already planning to give away the card: mother Bunny, her hip ("titanium and furious"), the Lab named Commodore, the Round Hill Club, "never say Greenwich, Connecticut, just Greenwich," "say 'the city' and mean New York." Libby (the hometown girlfriend) calls; Teddy's "love you, Lib" is warm and flat at once.
- A folded MapQuest printout falls from Teddy's blazer: directions ending in **Pleasant St, Northampton, MA**. Teddy pockets it fast: "Sig Rho alumni dinner. It's in Northampton. Don't ask, it's a whole thing." Cal doesn't ask. He knows what it looks like when someone is lying to protect something soft.
- → card_handoff

**ev_henry** — `@slug RIVER STREET — 7:40 P.M.` · ~600w
- Henry walks Cal down River Street toward the bluff. `[needle] Gold Digger | Kanye West feat. Jamie Foxx | a Kappa window on Elm Row`. Henry's notebook; Henry talks like an archivist and a little like a kid who's never had a friend his own age on this campus (he grew up summering here; his father has worked the grounds since 1976).
- The Ferryhouse up close: windowless granite, an Egyptian lintel, an iron door with a carved oar, **OBLIVIO FIDES**. Henry translates: "Forgetting is faith." "Some of the seniors at the Corinthian tonight have keys to that door." (Public rumor-level only.)
- From the bluff: the Calder coming over the Ladder (the 1840 mill dam and its iron fish ladder) into the Connecticut; the new chain-link around the swimming pull-off, bright as tinfoil; a small cluster of color on the fence that Cal can't make out from here. Mid-river, Gallows Island, a lodge's lights in the trees. "The island's private." "Whose?" "Theirs."
- Henry gives the drowned girl's name: "Josette Lavoie. Jo. She was twenty. Nursing at Holyoke Community. The *Gazette* said she went swimming at the Ladder." "You don't think so." "I don't think things. I write them down." **Henry must not mention his father, the boat, blood, Julian, or any other death.** He can say his father says the river "keeps what it takes."
- → card_handoff

**card_handoff** — `@slug SUTTER 304 — 8:40 P.M.` · ~280w
- Teddy, ready, laughing, presses his engraved First Light card into Cal's hand: "Go be me. I dare you. Just don't fuck anyone I'm related to." He's going "to Sig Rho with Dad's friends." `{if s1e1_saw_teddy_directions}` Cal thinks *Northampton* and says nothing. `{/if}`
- Cal dresses: his dead grandfather's navy blazer, sleeves an inch short; Teddy's Sig Rho navy-and-white stripe tie (`{if s1e1_evening == "teddy"}` already knotted by Cal's own hands an hour ago `{/if}`). Teddy's PowerBook on the desk, AIM up: `[away name="TVanderhoef4"]` an away message that is itself a lie (e.g. *sig rho w/ the old man. dont wait up roomie*) `[/away]`.
- Cal's phone (a prepaid Nokia with a cracked faceplate) has a voicemail from home, left during Convocation: `[voicemail from="Siobhan (home)" time="6:14 PM"]` Siobhan, twelve, a planner, running the house in Patty's absence: Patrick says hi (he didn't, she's saying it for him), Mom's at work, did he meet any Kennedys, and: "Have you seen the professors yet? Are any of them famous?" (Fair-play for E6. Do not lean on it.) `[/voicemail]` He looks at the twins' photo. He goes.
- → corinthian_door

### PART 03 — `03-first-light.ep` (head) — target ≈ 1,500 words on path (≈2,000 written)

**corinthian_door** — `@act ACT TWO` · `@slug 14 PROSPECT STREET — 9:10 P.M.` · ~250w
- The Corinthian: Greek Revival, a walled garden lit with hurricane lanterns, a boxwood parterre, a terrace, a library, a cellar. Members in **bottle-green blazers with brass buttons** (establish clearly; the figure at the dam wears one). `[needle] Night and Day | Cole Porter (jazz trio) | the terrace`. A member at the door reads the engraved card, reads Cal's face, reads the tie: "Vanderhoef. Welcome home."
- Archie Whitby (president, plummy, already drunk) roars "**Vanderhoef!**" across the terrace. It takes Cal a full second to turn. (Somebody — we don't see who — notices.)
- → owen_bar

**owen_bar** — `@slug THE CORINTHIAN, THE BAR — 9:30 P.M.` · ~330w · sets `s1e1_owen_poured=true`
- Owen behind the members' bar pouring for himself and the freshmen, humming *The Parting Glass*. Pours Cal a Jameson. Calls him "Teddy" with a grin that says *I know exactly who you are and I think it's great*. "You're a St. Brigid's kid — no, sorry. You remind me of a kid I knew." (Cal IS St. Brigid's parish. He feels the floor tilt and then decides it's coincidence, because Owen is lovely.) A white rope-burn across Owen's right palm when he hands the glass over. Owen's eyes go to Cal's scar for half a second. Owen: he can't stay late, early meeting.
- **CHOICE (tone / risk):**
  - `Drop the act. He's from home.` → owen_reply | set: s1e1_owen_response="admitted"
  - `Stay Teddy. Make him work for it.` → owen_reply | set: s1e1_owen_response="stayed_teddy"
  - `Ask about his hand.` → owen_reply | set: s1e1_owen_response="asked_hand"

**owen_reply** — ~140w
- admitted: "Haverford Scholars find each other. Julian said there'd be a new one." (A smooth lie: Owen knows from elsewhere.) "Your secret's safe. Be Teddy. Teddy could use the help." · stayed_teddy: Owen plays along, delighted, asks after "your father," winks. · asked_hand: "Sailing. I'm terrible." (E3 may echo this exact lie.) Owen moves off to glad-hand.
- Upstairs, music; out on the terrace, money.
- **CHOICE (lock-out):**
  - `Follow the music upstairs.` → party_upstairs | set: s1e1_party_branch="upstairs", s1e1_heard_rafe_call=true
  - `Stay on the terrace. Work the money.` → party_terrace | set: s1e1_party_branch="terrace", s1e1_watched_del_work=true, s1e1_heard_lantern_lore=true

**party_upstairs** — `@slug THE CORINTHIAN, SECOND FLOOR — 9:40 P.M.` · ~450w
- A second-floor bathroom with a line out the door and a Bose SoundDock on the tank: `[needle] Take Me Out | Franz Ferdinand | Rafe's SoundDock`. Rafe Delacroix-Moore: chipped black nail polish, Strokes jacket, selling from the sink like a pharmacist. "Teddy Vanderhoef? I've met Teddy Vanderhoef. He's taller and sadder." He finds the con hilarious and keeps it ("I will tell no one, because no one deserves this but me").
- Rafe's Razr: his grandmother in New Orleans. On speaker for a moment, mid-party, he's hysterical about it: the mayor called a voluntary evacuation, "Mémère, voluntary means YOU, voluntarily," she's refusing, "she says she's been through Betsy and Camille and she'll be through this one with a bottle of Sazerac and a rosary," he laughs, and under the laugh his hand is shaking. He hangs up and sells a gram to a sophomore. Offers Cal a bump; Cal passes with a joke (Teddy is a lightweight); "Rain check, Theodore." (No drug choice in the pilot; Cal does not use tonight.)
- → del_kitchen (04)

**party_terrace** — `@slug THE CORINTHIAN, THE TERRACE — 9:40 P.M.` · ~450w
- Cal works the money: Sig Rho legacies, Archie and his court. They ask him to tell "the one about your father and the Danforth boathouse"; Cal invents a Vanderhoef legend on the spot and it kills (Entourage swagger; it should be very funny and a little dangerous — Archie will repeat it). Archie tells him the lore of the **founders' brass lantern** on the library mantel ("lit once a year, at First Light; the first Corinthian carried it out of the 1832 fire and has never let anyone forget it") — sets up the lantern dare.
- Cal watches a server in a **JO** apron work the terrace: four flutes one-handed, stacking plates for a busboy without being asked, catching a tipping tray with a hip. She works like someone who has done it for money, not like someone doing it for a lark. He recognizes the work the way you recognize your own accent in a foreign city. He doesn't see her face clearly; she's always turned away from the bright end of the terrace.
- → del_kitchen (04)

*(Part 04's del_kitchen cutaway plays here, 9:55 p.m., then returns to sloane_toast.)*

**sloane_toast** — `@slug THE TERRACE — 10:15 P.M.` · ~320w
- Professor Nathaniel Sloane (honorary member; lean gone soft, rumpled tweed, black hair silvering, a dead father's watch, glass in his **left** hand) gives the First Light toast: "The first lie Hollis will tell you is that you belong here. The second is that you don't. Spend four years deciding which one to believe." Describe his eyes: pale, gray-blue, the color of the river under haze. **Do not connect them to Cal's.**
- A server comes through with the toast tray. Cal takes a glass and, looking her in the eye, says "**Thanks, Jo.**" (He read the apron.) She freezes for a reason he can't know (the player, fresh from the kitchen, does). `{if s1e1_saw_jo_photo}` the name was on a pickle jar three hours ago; it catches in him and passes `{/if}` `{if s1e1_watched_del_work}` it's the four-flute girl; up close she is the blonde from Bramwell's steps; he almost says so `{/if}` `{if !s1e1_watched_del_work}` up close, something about her is familiar and he can't place it `{/if}`. Archie: "Vanderhoef!" — the full-second delay — and she sees it. She's gone.
- Cal ends up at the bar beside Sloane. Sloane, not looking at him: "Vanderhoef. You don't sound like Greenwich."
- **CHOICE (tone; huge for the series):**
  - `Keep lying. Do it well.` → sloane_reply | set: s1e1_sloane_response="lied"
  - `Tell him your real name.` → sloane_reply | set: s1e1_sloane_response="truth", s1e1_told_sloane_truth=true | echo: You told a stranger your real name.
  - `Make it a joke about lying.` → sloane_reply | set: s1e1_sloane_response="joke"

**sloane_reply** — ~150w
- lied: Sloane, amused: "Then you're better at this than your father." · truth: "I'm Cal Reardon. South Boston. I'm not supposed to be here." Long pause. "I knew a Reardon once. Long time ago." Then: "Nobody here is supposed to be here. Enjoy it." · joke: "Take my seminar." (HUM 117, The Uses of Lying; Sloane names it.) The player should feel Sloane's eyes on Cal a moment longer than a stranger's. Then Sloane is swallowed by members.
- → corridor_catch (05)

### PART 04 — `04-del-cutaways.ep` (**del seat**) — target ≈ 1,200 words on path (≈2,000 written)

**Del-side rules:** `@pov del` on every node. Close third, past tense, on Del; narration calls her "Del." Gold grade is applied by the engine. Her cutaways reveal **competence** and **fear**, never **origin**: no Biloxi, no Mississippi, no Nantucket-as-staff, no Nell by name, no "Della," no age, no brother, no mother by name, no Starlite, no money amounts. Her interior can be profane, fast, funny, practical; it can circle the edge of a secret without naming it ("she had rehearsed this face for a year"). Southern vowels only in the depot dialogue.

**del_kitchen** — `@pov del` · `@slug THE CORINTHIAN KITCHEN — 9:55 P.M.` · ~450w
- PVC kitchen at full tilt; dish-pit radio `[needle] We Belong Together | Mariah Carey | the dish-pit radio`. Del is "Dee" here (PVC hired her Thursday; they're short "since the Lavoie girl"). Captain Bev Szalinski (50s, smoker's laugh) handed her a spare apron from the van at six; the name tape says **JO**. Del has noticed it. She's decided not to think about it.
- Servers over the dish pit (give two of them names, e.g. Tina and Marco): Jo worked "the island thing" for PVC that night; "they're saying she went swimming at the Ladder — Jo couldn't swim for shit, she'd never"; "she was seeing somebody up here"; "Bev, they didn't even send flowers." Bev: "Lower your voices." Tina's eyes snag on Del's apron tape and slide off.
- Competence: she's the best server in the room in four minutes and it shows (trays, timing, invisibility).
- Fear: through the swinging door, across the hall, the library: a tall dark-blond young man alone at the window with a club soda and a bandaged left hand (Graham Ashford; she knows his name and his face; the cutaway must not say how). Her hands go still on the tray. That's all the player gets.
- **CHOICE (Del; lock-out):**
  - `Ask whose apron this was.` → del_kitchen_jo | set: s1e1_del_kitchen="asked_jo", s1e1_del_asked_about_jo=true
  - `Head down. Be the best one here.` → del_kitchen_work | set: s1e1_del_kitchen="head_down", s1e1_del_impressed_bev=true
  - `Lift the guest list off Bev's clipboard.` → del_kitchen_list | set: s1e1_del_kitchen="guest_list", s1e1_del_took_guest_list=true
  - `Take the library tray. Walk right past him.` → del_kitchen_library | set: s1e1_del_kitchen="library_tray", s1e1_del_served_graham=true

**del_kitchen_jo** — ~230w — Del asks, lightly, whose apron. Tina: "That's—" Bev: "Van spare. Terrace, Dee." Later, at the walk-in, Tina tells her quick and low: Jo took pictures of everything with a drugstore camera, "the Hollis kids thought it was cute." Jo was seeing "a Hollis boy, she wouldn't say who." Del understands she is wearing a dead girl's name and doesn't take it off, because taking it off would be noticed. Ends lifting the toast tray. → sloane_toast
**del_kitchen_work** — ~230w — Del is magnificent. Bev, lighting a cigarette at the back door: "Where'd PVC find you?" "Thursday." "You've done this before." "Never," with a smile. Bev: "Kid, you hold four flutes like my mother." Bev marks her. Ends lifting the toast tray. → sloane_toast
**del_kitchen_list** — ~230w — The clipboard on the steel counter; Del slides the typed First Light guest list under her tray and into the canvas tote she's stashed in the second-floor linen closet. She reads it in the closet's light for ten seconds: Ashford, G. · Tierney, O. · Sloane, N. (Hon.) · Whitby, A. · **Vanderhoef, T. IV (legacy)**. She learns which freshman is supposed to be here. Ends lifting the toast tray. → sloane_toast
**del_kitchen_library** — ~230w — She takes the club soda into the library herself: brass lantern on the mantel, leather, the river black in the window. Graham says "Thank you" to the window and never looks at her. Relief and insult in the same breath: *nobody here looks at the staff.* She notes the lantern. Ends lifting the toast tray. → sloane_toast
*(All four end with Bev: "Sloane's toast. Terrace. Go." — the player then sees "Thanks, Jo" from Cal's side, knowing what Del knows.)*

**del_shrine_name** — `@pov del` · no slug (continuous with river_shrine) · ~180w
- At the shrine, among the candles, a PVC Catering name tag in the same block letters as the tape on the apron she wore all night: **JO**. Confirmation. Del's body understanding before her mind: she wore a drowned girl's name to serve the people who — she doesn't finish the thought. She feels Cal beside her, the boy who said *Thanks, Jo.*
- **CHOICE (Del; moral/intimacy):**
  - `Tell him whose name you wore.` → river_fence | set: s1e1_del_told_cal_apron=true | echo: You told him whose name you wore.
  - `Say nothing. Let him wonder.` → river_fence | set: s1e1_del_told_cal_apron=false | echo: You let him wonder whose name you wore.

**del_depot** — `@act TAG` · `@pov del` · `@slug PETER PAN DEPOT, CALDER FALLS — 5:40 A.M.` · ~320w
- Open with a few lines of *before*: 5:10 a.m., Sutter 304, him asleep; she took one photograph (we don't see the words she wrote on it), his laundry quarters from the desk, his gray hoodie, her shoes in her hand. She did not wake him. Nobody needs to see her face in daylight yet.
- The depot: green silk under a Southie hoodie, heels in her hand, the pay-phone bank. The TV over the ticket counter: the storm, upgraded overnight, the cone laid over the central Gulf Coast. She stands under it longer than she means to. (Ledger: this is where she learns it's aimed at home.)
- She feeds quarters. The player sees the digits begin **228**. Rings. A sleepy boy: "'Lo?" (He is not named. Del's interior does not think his name or his relation. "She did not let herself think his name.")
- **CHOICE (Del):**
  - `Speak.` → del_depot_spoke | set: s1e1_del_called_home=true | echo: You called home. Someone answered.
  - `Listen. Say nothing.` → del_depot_silent | set: s1e1_del_called_home=false | echo: You called home and couldn't say a word.

**del_depot_spoke** — ~150w — Her voice drops into a drawl the player has never heard: "It's me. Y'all need to go north. Tonight. Tell her I said. Tell her I'll send money." "Where are you?" "Someplace cold." She hangs up. She turns the watch on her wrist. → morning_wake
**del_depot_silent** — ~150w — The boy: "'Lo? …Hello?" Breathing. Then, quieter, "…Is that you?" She puts the receiver back like it's hot. She turns the watch on her wrist. The money promise stays in her mouth. → morning_wake

### PART 05 — `05-the-catch.ep` (head) — target ≈ 1,800 words on path

**corridor_catch** — `@act ACT THREE` · `@slug THE CORINTHIAN, SERVICE CORRIDOR — 10:40 P.M.` · ~400w · sets `s1e1_kip_voicemail=true`
- Near-catch: Kip Lyman, Hollis '80, Theodore III's freshman roommate, corners "Teddy": "How's your mother's hip?" `{if s1e1_teddy_coached}` "Titanium and furious." Kip, delighted, wants more — the Lab, the club — Cal has it all `{else}` Cal improvises badly and Kip squints `{/if}`. Either way Kip pulls out his Razr: "Let's ring your father!" It goes to voicemail; Kip leaves one: *"Theo, I'm with your boy at First Light, he's got your chin."* (Consequence later: Teddy wasn't there.) Cal ducks into the service corridor.
- The linen-closet door opens: the server from the terrace, now in green silk (Nell's 1961 Balenciaga, altered — narration just says *green silk* and lets it be extraordinary), pearls, a gold tank watch, hair down, a canvas tote and a beaded evening bag, mid-zip. Both: *oh.* "Zip me or leave." He zips her. "You're Jo." "And you're Teddy Vanderhoef." "How'd you know I'm not?"
- Her tells, fast and devastating: you thanked the help; you hold your glass by the bowl; Teddy Vanderhoef's tie is on a boy whose shoes were resoled in a basement; "you answer to Teddy like it's a dog you're walking." `{if s1e1_del_took_guest_list}` + "and Teddy Vanderhoef is on the list as a legacy, which means half the old men here have met him" `{/if}`. Optional color (no flag): she may place him as the boy who watched her on the Commons.
- **CHOICE (tone / power):**
  - `Read her back, tell for tell.` → corridor_after | set: s1e1_corridor_play="hit_back"
  - `Laugh. Give her the win.` → corridor_after | set: s1e1_corridor_play="conceded"
  - `Deny everything. Badly.` → corridor_after | set: s1e1_corridor_play="denied"

**corridor_after** — ~250w
- hit_back: his list — the apron; "you came out of a closet in a dress that costs more than my mother's car"; "nobody who belongs here knows where the linen closet is" — and she is delighted to be read. · conceded: his laugh disarms her more than a counterattack would; she gives him one of his own tells back for free. · denied: so bad it's charming; she corrects his Greenwich vowels; he does Greenwich worse on purpose.
- Mutual rescue: Bev comes looking for "Dee" — looks straight through the girl in green (the costume holds) — and asks "Teddy" if he's seen a blonde server; Cal, in his best Teddy, sends Bev to fetch "my father's coat from the car." Archie barrels up, "Vanderhoef! Greenwich!" — and Del hooks Cal's arm: "Teddy, *darling*, you promised you'd introduce me to your mother," and walks him away, through the pantry and down the back stairs.
- → cellar_pact

**cellar_pact** — `@slug THE WINE CELLAR — 10:55 P.M.` · ~200w
- Stone, cold after the heat, racks to the ceiling, one bulb. They are laughing and furious and close. "I never saw you. You never saw me." "Swear." "On what?" "On whatever you've got."
- **CHOICE (what he swears on):**
  - `Swear on your mother.` → cellar_krug | set: s1e1_swore_on="mother" | echo: You swore on your mother.
  - `Swear on Siobhan and Patrick.` → cellar_krug | set: s1e1_swore_on="twins", s1e1_del_knows_twins_exist=true | echo: You gave a stranger two names you never give anyone.
  - `Swear on nothing.` → cellar_krug | set: s1e1_swore_on="nothing" | echo: You swore on nothing, and she believed you more for it.

**cellar_krug** — ~300w · sets `s1e1_rafe_saw_both=true`
- Her reaction per `s1e1_swore_on` (mother: she studies him — he means it; twins: "Who are Siobhan and Patrick?" "People I don't swear on lightly." — she lets it go and files it; nothing: "I don't swear on things I love." She likes him for it more than she'd like to). Then her addition, rule two: "**Whoever gets caught first owes the other one true thing.**" (Running device; it pays in bed.)
- She pulls a bottle from the rack without looking at labels like someone who's read the cellar book: **1985 Krug**. "'85 was a good year." (Fair-play; do not underline.)
- Names, for real: "Cal." "Del." "Del what?" "Ashcombe." He remembers the name in the Matriculation Book; "You signed the book at four." "Everybody signs the book." Why the apron? "**Honestly?** I was bored." She turns the watch on her wrist. (Two tells in one breath; Cal believes the name and doubts the reason: ledger — he knows she's lying about *something*.)
- Rafe on the cellar stairs, who watched them lift the Krug, holding a bottle of the members' Lagavulin he came down to steal. To Del: "I know you from somewhere." Del: "Rehab?" Rafe: "Oh, I *like* you." `{if s1e1_party_branch == "terrace"}` To Cal: "Teddy Vanderhoef? I've met Teddy Vanderhoef. He's taller and sadder." His Razr buzzes — *Mémère* — he silences it: "My grandmother. She's being brave at a hurricane." `{else}` "Theodore. You found a friend." `{/if}` Rafe decides they are the best thing that has happened to him all year and keeps it.
- → dare_terrace

**dare_terrace** — `@slug THE TERRACE — 11:10 P.M.` · ~160w
- Back up into the heat with the Krug under his blazer. Sloane is at the edge of the terrace with Archie. A flash goes off somewhere among the lanterns; **Del turns her face from it like it's a slap** (her no-photo tell; also, unseen, the moment the antagonist's photograph is taken: Cal laughing, Sloane's shoulder at the edge, a blonde in green out of focus. Do not say any of that). She says: "Prove you're good at this."
- **CHOICE (dare; sets the first-kiss location):**
  - `Dare her to dance with Archie.` → dare_result | set: s1e1_dare_to_del="archie", s1e1_first_kiss_at="shrine"
  - `Dare her to kiss you. Right here.` → dare_result | set: s1e1_dare_to_del="kiss", s1e1_first_kiss_at="terrace"
  - `Dare her over the garden wall. In that dress.` → dare_result | set: s1e1_dare_to_del="wall", s1e1_first_kiss_at="wall"

**dare_result** — ~200w
- archie: she dances with Archie to the trio and owns him in thirty seconds ("Whose cousin's friend are you?" "Archie's." "I'm Archie." "I know, darling, that's how close we are."). · kiss: she kisses him in the middle of the terrace in front of the people who run Hollis, to "Night and Day"; a member whistles; it is the first kiss and it is a dare and it is not only a dare. · wall: "Later. I don't do dares on credit." She holds it.
- Her dare back: "Steal me something of theirs." `{if s1e1_heard_lantern_lore || s1e1_del_served_graham}` the lantern is named (by him or by her) `{/if}`. In the hall: **Owen** leaving with his car keys, ~11:25 — "Early meeting. Be good, Teddy." A polite nod to Del (he does not know her). They go to the library.
- → library_graham

**library_graham** — `@slug THE LIBRARY — 11:25 P.M.` · ~300w
- Leather, portraits, the founders' brass lantern on the mantel, the river black in the window. Someone's in it: Graham Ashford, alone at the window, club soda, left hand bandaged. He looks at Del a beat too long: "Have we met?" Del: "Everyone says that." (He does not place her — fixed. `{if s1e1_del_served_graham}` Cal feels her hand tighten on his arm `{/if}`.) To Cal: "You're not Teddy Vanderhoef. I taught Teddy to sail when he was nine." Cal braces. Graham: "Nobody here is who they say. Take the bottle. Go out through the garden — the wall's lower by the fig tree." He turns back to the river. As they go, without turning: "**Stay away from the river tonight.**"
- **CHOICE (action):**
  - `Lift the lantern off the mantel.` → garden_wall | set: s1e1_stole_lantern=true
  - `Leave it. You've stolen enough tonight.` → garden_wall | set: s1e1_stole_lantern=false

**garden_wall** — `@slug THE GARDEN — 11:35 P.M.` · ~190w
- The boxwood parterre, the hurricane lanterns, the fig tree, the wall. `[needle] Somebody Told Me | The Killers | drifting from Elm Row`. `{if s1e1_stole_lantern}` the lantern under his blazer, warm brass, making him walk like a man with a bad hip `{/if}`. Del goes up the wall in green silk and bare feet like someone who has climbed things for reasons other than fun (dock-rat agility; don't explain). `{if s1e1_dare_to_del == "wall"}` she pays the dare on top of the wall: she kisses him from above, first kiss, the party behind them and the town in front `{/if}`. Down into the alley, laughing.
- → town_diner (06)

### PART 06 — `06-the-river.ep` (head) — target ≈ 1,400 words on path

**town_diner** — `@act ACT FOUR` · `@slug MAIN STREET, CALDER FALLS — 12:05 A.M.` · ~300w
- Main Street, hot and empty. They pass the Hollis Bookstore: the vestibule lit, a hand-lettered sign, **24-HOUR PHOTO KIOSK — MOVE-IN WEEKEND**. Nobody inside. (Plant only. No person, no car, no emphasis.)
- The Calder Falls Diner (open till two on move-in weekend): a booth, the Krug in a paper bag, fries, a townie waitress who clocks the dress. Gilmore-speed banter. Del's tells, unremarked or lightly remarked: she says she missed "supper"; she stacks their plates for the waitress; she leaves a ten on a seven-dollar check. Cal notices all three and doesn't know what they add up to yet.
- She takes a photograph of him with her camera (a secondhand Polaroid she keeps in the canvas tote): `[polaroid id="p_s1e1_teddy_allegedly" caption="Teddy Vanderhoef, allegedly."]` Cal in the booth, Teddy's tie loosened, the Krug in a paper bag, the diner's neon behind him. `[/polaroid]` He asks for one of her. "I don't photograph well." She does not allow it.
- → river_walk

**river_walk** — `@slug RIVER STREET — 1:30 A.M.` · ~200w
- River Street to the bluff. The Ferryhouse, dark. "What's that?" "A tomb." "For who?" "For whoever they want." `{if s1e1_henry_tour}` he can tell her the motto and what it means `{else}` "A kid with a notebook told me it's a club for dead people." `{/if}` Down the dam road; the Ladder's roar grows. Del wants to swim: "Bet I can beat you to the island." (Gallows Island; she has no idea what it is.) `{if s1e1_henry_tour}` "That's Gallows Island." "Charming." `{/if}` The chain-link: **NO SWIMMING — DANGER — CALDER FALLS POLICE**.
- → river_shrine

**river_shrine** — `@slug THE LADDER — 1:40 A.M.` · ~270w
- The shrine on the fence: Jo's graduation photo in a Ziploc, candles in jars, a Red Sox cap, plastic roses, a rosary, a PVC Catering name tag, a card (*we love you Jo-Jo — HCC Nursing*), and propped against the fence a **crew oar blade, Hollis green, hand-painted in white: "J. — I'm sorry. — G."**
- `{if s1e1_saw_jo_photo}` Cal knows the face: behind a bar, three hours ago, next to a pickle jar `{/if}` `{if s1e1_knows_josette_name}` Josette Lavoie; Henry's voice `{/if}`. Cal tells Del what Henry said at the window: they fenced the dam; a girl drowned.
- He sees Del go still at the name tag.
- → del_shrine_name (04)

**river_fence** — ~180w
- `{if s1e1_del_told_cal_apron}` "I wore her name tonight." Plain. He'd called her by it. He says so; she says she knows. `{else}` She says nothing. He looks at the name tag, then at her, and understands she knows exactly what she wore; neither of them says it. `{/if}`
- Drunk, sobered, close. `{if s1e1_first_kiss_at == "shrine"}` They kiss against the fence — the first kiss — chain-link printing her back, the candles guttering. `{else}` He kisses her again, and it is different from the first one; it costs more. `{/if}`
- → river_figure

**river_figure** — `@slug THE LADDER — 1:50 A.M.` · ~350w
- Headlights off, a boxy car rolls into the pull-off and stops. They drop behind the bushes by the fence. A man in a **Corinthian blazer** (bottle green, brass buttons — they've seen thirty tonight) walks to the shrine with a penlight, reads the oar blade, stands very still. He hums a few bars. **Cal knows the tune: *The Parting Glass*. They played it at Ricky Dolan's wake in July.** (One line of interiority. No explanation of Ricky. Cal does not think of Convocation or the bar; half of Irish Boston knows that song.) The man pulls the blade off the fence and throws it, hard, into the mill race; it goes over the Ladder and is gone. He stands a long time. The penlight swings once across the bushes — across them? — and away. He drives off with no lights until the bridge. They never see his face. **Height, build, blazer, hum, car. Nothing more.**
- Shaking, crouched in the bushes. Del: "We weren't here."
- **CHOICE (moral):**
  - `"We were never here."` → river_never | set: s1e1_cal_wanted_to_report=false, s1e1_pact_river=true
  - `"We should tell someone."` → river_never | set: s1e1_cal_wanted_to_report=true, s1e1_pact_river=true

**river_never** — ~200w
- `{if s1e1_cal_wanted_to_report}` Del: "Tell them what? That Teddy Vanderhoef and a waitress named Jo saw a man throw away a sorry note?" He hears how it sounds. He agrees anyway, and hates how easy it is. `{/if}` Then, all paths: "We were never here." "Not at the party. Not at the river." "Not anywhere." It's a joke and an oath. (They don't know what they just protected. Neither does the player. Do not wink.)
- The run home up the hill, laughing and terrified, the Beacon striking two, her shoes in her hand, the Krug finished, the town asleep.
- → night_room (07)

### PART 07 — `07-night-one.ep` (head) — target ≈ 1,900 words on path (≈2,800 written)

**Intimate-scene rules:** fully explicit and detailed, with literary control; about these two specifically (what each is hiding, testing, daring, giving); bodies, sensation, dialogue during, humor, awkwardness, power shifting. Enthusiastic, legible consent inside the heat: they are both into it, loudly. Never a catalogue. This first scene sets a baseline later scenes must not repeat.

**night_room** — `@slug SUTTER 304 — 2:10 A.M.` · ~280w
- Teddy's bed made and empty. Cal's half bare (Sox pennant, twins' photo, Patty's crucifix — which he suddenly, comically cannot be in a room with). `{if s1e1_stole_lantern}` the lantern on his desk, absurd `{/if}`. Del finds Teddy's stereo and puts on `[needle] This Must Be the Place (Naive Melody) | Talking Heads | Teddy's stereo, which Del turns on`. She looks at the twins' photo. `{if s1e1_swore_on == "twins"}` "Siobhan and Patrick." He doesn't answer; she doesn't push. `{else}` "Who're they?" "Later." `{/if}`
- She takes off the gold watch and sets it **face down** on his desk — the only time all night she removes anything she isn't asked to.
- **CHOICE (physical direction — who leads):**
  - `Let her lead.` → night_she_leads | set: s1e1_lead="del"
  - `Lead. She's waiting to see if you will.` → night_he_leads | set: s1e1_lead="cal"
  - `Slow it down. Make her wait.` → night_slow | set: s1e1_lead="slow"

**night_she_leads / night_he_leads / night_slow** — ~420w each (one on path)
- Each a distinct opening of the same night: undressing (the zip he did up at 10:40, undone), the green silk on Teddy's rug, the narrow extra-long twin, the radiator, the open window, the race audible from up here. Her condom comes out of the beaded evening bag ("Grandmother's bag." "Your grandmother carried—" "Different era."). Explicit. Humor and nerve. Cal's body from summer construction; Del's long dancer's body; both of them better at this than they let on and worse at being looked at. Power: she-leads (Del's control, Cal's pleasure in surrendering it, and the moment he sees she needs the control); he-leads (Cal's confidence with an edge of performance; she tests it and then lets herself be taken somewhere); slow (the dare inverted — making her wait undoes her more than speed; she swears at him for it and loves it). All three → night_scar.

**night_scar** — ~230w
- In the middle of it, she touches the pink scar through his eyebrow. "Hockey." "Liar." "Takes one." She stops moving entirely, on purpose: "**Rule two. You got caught. You owe me one true thing.**"
- **CHOICE (emotional — what he pays):**
  - `Tell her who's in the photograph.` → night_truth | set: s1e1_truth_paid="twins", s1e1_told_del_about_twins=true | echo: You paid her with the only true thing you had.
  - `Pay her something smaller.` → night_truth | set: s1e1_truth_paid="small"
  - `Run a tab.` → night_truth | set: s1e1_truth_paid="tab", s1e1_cal_owes_del=true | echo: You still owe her one true thing.
- **Never the summer.** The scar's real story stays buried on every path.

**night_truth** — ~450w
- twins: Siobhan and Patrick, twelve, Gold Street; he half-raised them; leaving them is a guilt he carries every day; he says it badly and it's the best thing he's said all night. She goes very quiet and very gentle and, for a second, looks like she's somewhere else entirely (don't say where). · small: something true and cheap — e.g. "I've never been in a room like that before tonight" or "I wanted you since the eyebrow" — she knows it's the cheap one and takes it, amused, keeping the change. · tab: "I'm good for it." "You'd better be." She likes being owed.
- Then the rest of the scene to climax, all paths: at the peak her vowels slide — "**Lord**" — and he notices and files it. He says her name and she flinches very slightly at "Del." Afterward: the window, the race, sweat, the Beacon's quarter-hour, Teddy's stereo clicking to silence.
- **CHOICE (emotional — after; what they promise / what she lies about):**
  - `Promise her a second night.` → night_last | set: s1e1_promise="second_night"
  - `Ask her where the "Lord" came from.` → night_last | set: s1e1_promise="asked_lord", s1e1_asked_about_lord=true
  - `Promise nothing. Let her think you're asleep.` → night_last | set: s1e1_promise="nothing"

**night_last** — ~170w
- second_night: "We were never here, Teddy. You can't have a second night of never." — but she doesn't say no. · asked_lord: her lie, instant and smooth: "Grandmother's cook was from Savannah. I spent every summer in her kitchen." She turns her wrist where the watch isn't. (He clocks the reach.) · nothing: he hears her breathing change; she thinks he's asleep; she says something too quiet to make out, to the ceiling. (Writer: one sentence, unheard. The player hears no words.)
- She falls asleep first, which surprises her. Or she pretends to. Near four, half-dreaming, he hears someone in the hall, the stairwell door's sigh. Sutter is full of drunk freshmen.
- → del_depot (04)

*(Part 04's del_depot plays here, 5:40 a.m., then returns to morning_wake.)*

**morning_wake** — `@slug SUTTER 304 — 6:40 A.M.` · ~220w
- He wakes alone. The watch is gone from the desk. His gray hoodie is gone. His laundry quarters are gone (six dollars in quarters; he'll wonder about that). On the pillow: `[polaroid id="p_s1e1_never_here" caption="We were never here. — D."]` Cal asleep, one arm over his face, morning light that hasn't happened yet in the frame — it's the lamp. `[/polaroid]` The handwriting on the back is careful, upright, copied-looking; he has seen it before, in the Matriculation Book, and doesn't make the connection consciously. `{if s1e1_stole_lantern}` The lantern on the desk with her lipstick on the glass chimney. `{/if}`
- → morning_envelope

**morning_envelope** — ~300w
- Teddy comes in at 6:40 in last night's shirt, smelling of a cologne that isn't his, a little high on something private. "How was I?" "You were magnificent." `{if s1e1_saw_teddy_directions}` Cal thinks *Northampton* and lets him have it `{/if}`. `{if s1e1_stole_lantern}` Teddy sees the lantern: "Is that—oh my God. Oh my *God*, Reardon." `{/if}`
- Teddy steps on something by the door: a plain white envelope, typed capitals: **THEODORE VANDERHOEF IV — 304.** "You got mail, Theodore." He tosses it to Cal and goes to shower ("I smell like a decision"). Teddy never sees inside.
- Inside: a glossy print. Cal-as-Teddy on the Corinthian terrace, laughing; Sloane's shoulder at the edge of the frame; out of focus behind him, a blonde in green silk. A white index card, typed: **"You weren't at the dam last night. Neither was I. —"**
- Cal looks at the window. The river. Cut to black. (End on the image, not on a thought.)
- `[end]`

---

## 7. FLAG REGISTRY (S1E1)

| Flag | Values | Meaning (one line) | Set in | Tested in |
|---|---|---|---|---|
| `s1e1_curb` | "carried" / "corrected" / "tipped" | How Cal handled Theodore Vanderhoef III mistaking him for dorm crew at the Sutter curb ("tipped" = Cal kept III's $20). | cold_open | curb_after, ev_race |
| `s1e1_julian_reply` | "watch_me" / "who_says" / "why_me" | Cal's answer to Julian's "you won't get through it." | floor_meeting | julian_reply |
| `s1e1_kit_opening` | "charm" / "cut" / "agree" | Register of Cal's first exchange with Kit at the Matriculation Book. | matriculation | kit_reply |
| `s1e1_evening` | "race" / "teddy" / "henry" | Where Cal spent 7:30–8:30 p.m. (the other two scenes happened without him). | evening_fork | card_handoff, others |
| `s1e1_saw_jo_photo` | true | Cal saw Jo's photo and the FOR JO jar at the Race (and met bartender Bonnie, not Augie). | evening_fork | sloane_toast, river_shrine |
| `s1e1_saw_wall_of_shame` | true | Cal saw the Race's framed unpaid tabs, incl. T. Vanderhoef '80 ($212) and N. Sloane '87. | evening_fork | (later eps) |
| `s1e1_teddy_coached` | true | Teddy drilled Cal on Greenwich facts (Bunny's hip, Commodore the Lab, Round Hill). | evening_fork | corridor_catch |
| `s1e1_saw_teddy_directions` | true | Cal saw Teddy's MapQuest printout to Northampton; Cal knows the "Sig Rho" story has a hole. | evening_fork | card_handoff, morning_envelope |
| `s1e1_henry_tour` | true | Henry walked Cal to the Ferryhouse (OBLIVIO FIDES) and the bluff over the Ladder; Cal knows "Gallows Island." | evening_fork | river_walk |
| `s1e1_knows_josette_name` | true | Henry told Cal the drowned girl's full name, Josette Lavoie. | evening_fork | river_shrine |
| `s1e1_owen_response` | "admitted" / "stayed_teddy" / "asked_hand" | How Cal played Owen at the bar ("admitted" = Cal told Owen he isn't Teddy; "asked_hand" = Owen gave the "Sailing" lie). | owen_bar | owen_reply |
| `s1e1_owen_poured` | true (always) | Owen poured Cal a Jameson and called him Teddy. | owen_bar | — |
| `s1e1_party_branch` | "upstairs" / "terrace" | Where Cal spent 9:40–10:10 at the Corinthian. | owen_reply | cellar_krug |
| `s1e1_heard_rafe_call` | true | Cal heard Rafe's call with his grandmother in New Orleans (upstairs). | owen_reply | (E2) |
| `s1e1_watched_del_work` | true | Cal watched the JO server work the terrace before the catch (terrace). | owen_reply | sloane_toast |
| `s1e1_heard_lantern_lore` | true | Archie told Cal the founders' lantern story (terrace). | owen_reply | dare_result |
| `s1e1_del_kitchen` | "asked_jo" / "head_down" / "guest_list" / "library_tray" | What Del did in the PVC kitchen cutaway. | del_kitchen | — |
| `s1e1_del_asked_about_jo` | true | Del asked whose apron; Tina told her Jo had a camera and "a Hollis boy." | del_kitchen | (later) |
| `s1e1_del_impressed_bev` | true | Bev marked "Dee" as a natural (Bev keeps Dee's unpaid envelope, S2 egg). | del_kitchen | (later) |
| `s1e1_del_took_guest_list` | true | Del has the typed First Light guest list in her tote (incl. Vanderhoef, T. IV). | del_kitchen | corridor_catch |
| `s1e1_del_served_graham` | true | Del served Graham in the library as staff; he never looked at her. | del_kitchen | dare_result, library_graham |
| `s1e1_sloane_response` | "lied" / "truth" / "joke" | How Cal answered Sloane's "You don't sound like Greenwich." | sloane_toast | sloane_reply |
| `s1e1_told_sloane_truth` | true | Cal told Sloane "Cal Reardon, South Boston"; Sloane said "I knew a Reardon once." | sloane_toast | (E3, E7) |
| `s1e1_kip_voicemail` | true (always) | Kip Lyman '80 left Theodore III a voicemail: "I'm with your boy at First Light." (Teddy wasn't there.) | corridor_catch | (E4/E6) |
| `s1e1_corridor_play` | "hit_back" / "conceded" / "denied" | How Cal answered Del's list of his tells (sets the power texture of their first exchange). | corridor_catch | corridor_after |
| `s1e1_swore_on` | "mother" / "twins" / "nothing" | What Cal swore the pact of silence on. | cellar_pact | cellar_krug, night_room |
| `s1e1_del_knows_twins_exist` | true | Del heard the names Siobhan and Patrick (swore on them); she knows nothing else. | cellar_pact | — |
| `s1e1_rafe_saw_both` | true (always) | Rafe saw Cal-as-Teddy and the server-turned-guest together and is keeping it. | cellar_krug | — |
| `s1e1_dare_to_del` | "archie" / "kiss" / "wall" | Cal's dare to Del on the terrace. | dare_terrace | dare_result, garden_wall |
| `s1e1_first_kiss_at` | "terrace" / "wall" / "shrine" | Where they first kissed. | dare_terrace | river_fence |
| `s1e1_stole_lantern` | true / false | Cal stole the Corinthian's founders' brass lantern (it's in 304; the club will want it back — MS-17). | library_graham | garden_wall, night_room, morning_* |
| `s1e1_del_told_cal_apron` | true / false | Del told Cal she wore the drowned girl's apron ("I wore her name tonight"). If false, Cal suspects. | del_shrine_name | river_fence |
| `s1e1_pact_river` | true (always) | "We were never here" sworn at the Ladder after the figure. | river_figure | — |
| `s1e1_cal_wanted_to_report` | true / false | Cal said "we should tell someone" and let Del talk him out of it. | river_figure | river_never |
| `s1e1_lead` | "del" / "cal" / "slow" | Who set the pace on Night One. | night_room | night_scar |
| `s1e1_truth_paid` | "twins" / "small" / "tab" | What Cal paid under rule two after the scar lie. | night_scar | night_truth |
| `s1e1_told_del_about_twins` | true | Cal told Del about Siobhan and Patrick and half-raising them. | night_scar | (E2+) |
| `s1e1_cal_owes_del` | true | Cal still owes Del one true thing (rule two debt outstanding into E2/E3). | night_scar | (E3 rules) |
| `s1e1_promise` | "second_night" / "asked_lord" / "nothing" | How Cal ended Night One. | night_truth | night_last |
| `s1e1_asked_about_lord` | true | Cal asked about "Lord"; Del lied (a grandmother's cook from Savannah). | night_truth | (later) |
| `s1e1_del_called_home` | true / false | Del spoke on the 228 call ("Y'all need to go north"). | del_depot | (E2) |

Always-true facts every later episode may assume (no flag needed): Cal impersonated Teddy at First Light; Del worked it as "Dee" in a JO apron and passed as a guest in green; Graham asked "Have we met?" and told them to stay away from the river; Owen left ~11:25 for an "early meeting"; Del took Cal's hoodie and quarters; the envelope came.

## 8. ECHOES (end card; 3 guaranteed, up to 5)
- cellar_pact (every option): "You swore on your mother." / "You gave a stranger two names you never give anyone." / "You swore on nothing, and she believed you more for it."
- sloane_toast (truth only): "You told a stranger your real name."
- del_shrine_name (both): "You told him whose name you wore." / "You let him wonder whose name you wore."
- night_scar (twins, tab): "You paid her with the only true thing you had." / "You still owe her one true thing."
- del_depot (both): "You called home. Someone answered." / "You called home and couldn't say a word."

## 9. NEEDLE DROPS, EXTRAS, POLAROIDS
**Tracklist (path-dependent ones in brackets):** The Dirty Glass — Dropkick Murphys (bus) · Mr. Brightside — The Killers (Bramwell window) · [The River — Bruce Springsteen (Race jukebox)] · [Since U Been Gone — Kelly Clarkson (Teddy's iPod)] · [Gold Digger — Kanye West feat. Jamie Foxx (Kappa window)] · Night and Day — Cole Porter (jazz trio, terrace) · [Take Me Out — Franz Ferdinand (Rafe's SoundDock)] · We Belong Together — Mariah Carey (PVC dish-pit radio) · Somebody Told Me — The Killers (Elm Row, the wall) · This Must Be the Place (Naive Melody) — Talking Heads (Teddy's stereo). The river: no music. The depot: the TV, and nothing.
**Period extras:** Deck SMS + Cal reply (cold_open); Teddy's AIM away message (card_handoff); Siobhan's voicemail (card_handoff).
**Polaroids:** `p_s1e1_teddy_allegedly` (town_diner); `p_s1e1_never_here` (morning_wake). Both Del's camera. No other polaroid ids in this episode.

## 10. KNOWLEDGE DISCIPLINE (continuity editor's checklist)
- Cal never learns Jo's full name except via `s1e1_knows_josette_name`; never meets Augie; never hears "Lethe" by name.
- Cal does not learn Del's real anything. He learns: she worked the party as staff; "'85 was a good year"; "honestly"; she turns her watch; "supper"; plate-stacking; over-tipping; "Lord"; she flinches at "Del"; she won't be photographed; (if asked) the Savannah cook lie.
- Del learns Cal's name, that he's a scholarship kid impersonating Teddy, the scar is new and he lies about it; twins only per flags. Never the summer.
- Kit does not say "Haverford." Julian does. Owen knows Cal (never says how; his "Julian said there'd be a new one" is a lie).
- Graham does not place Del. Rafe does not place Del ("I know you from somewhere" only).
- Henry does not mention his father's night of Aug 13–14, the boat, Julian, or other drownings.
- Del's cutaways: no origin facts at all (see Part 04 rules). The boy on the phone is unnamed and unrelated in narration.
- The figure: no face, no name, nothing pointing at Owen beyond what's fixed (blazer, hum, boxy car). Cal's interior goes to Ricky's wake, not to Convocation.
- Teddy never sees inside the envelope. Teddy's Northampton night is not shown or explained.
- Sexual content: both 18+ (Cal 18; Del presents 18 and is older). Enthusiastic consent legible throughout.

## 11. FINAL TAG
Sutter 304, 6:45 a.m., Sunday, August 28, 2005. A glossy print of Cal-as-Teddy laughing on the Corinthian terrace, Sloane's shoulder at the edge, a blonde in green out of focus behind him. A typed index card: **"You weren't at the dam last night. Neither was I. —"** Cal at the window. The river. Black. End card (echoes), tracklist, scrapbook.

## 12. EXPECTED LEDGER DELTAS (for the showrunner pass)
As planned in `knowledge-ledger.md` → "Planned S1E1 deltas," plus: Theodore III has Kip's voicemail; Bonnie at the Race has seen Cal (race path); Henry has walked Cal to the bluff (henry path); Teddy knows Cal saw the Northampton printout (teddy path) — Teddy does NOT know Cal noticed its meaning; Sloane knows "Cal Reardon, South Boston" (truth path); Owen saw Del's face in the hall at 11:25 and at the shrine (penlight) — still doesn't know her name; Rafe has seen both, keeps it; Bev looked straight through Del in green.
