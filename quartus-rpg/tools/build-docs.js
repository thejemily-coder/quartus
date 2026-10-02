/* Generates the two Word documents in ../docs. Run: node tools/build-docs.js */
const fs = require('fs'), path = require('path');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Footer, PageNumber, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, LevelFormat, PageBreak } = D;

const FONT = 'Georgia';
const W = 9360; // content width (US Letter, 1" margins)

function runs(text, base) {
  // **bold** and *italic* inline markup
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  text.split(re).forEach(part => {
    if (!part) return;
    if (part.startsWith('**')) out.push(new TextRun({ text: part.slice(2, -2), bold: true, ...base }));
    else if (part.startsWith('*')) out.push(new TextRun({ text: part.slice(1, -1), italics: true, ...base }));
    else out.push(new TextRun({ text: part, ...base }));
  });
  return out;
}
const P = (t, o = {}) => new Paragraph({ children: runs(t, o.run || {}), spacing: { after: 120, line: 300 }, alignment: o.align, ...(o.p || {}) });
const H1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: t })], pageBreakBefore: false });
const H2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: t })] });
const B = t => new Paragraph({ numbering: { reference: 'bul', level: 0 }, children: runs(t, {}), spacing: { after: 60, line: 288 } });

const border = { style: BorderStyle.SINGLE, size: 4, color: 'B8AE98' };
const borders = { top: border, bottom: border, left: border, right: border };
function table(cols, rows, widths) {
  const cell = (t, w, head) => new TableCell({
    width: { size: w, type: WidthType.DXA }, borders,
    shading: head ? { fill: 'E7DFCB', type: ShadingType.CLEAR, color: 'auto' } : undefined,
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    children: [new Paragraph({ children: runs(t, head ? { bold: true, size: 20 } : { size: 20 }), spacing: { after: 0, line: 260 } })]
  });
  return new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: widths,
    rows: [new TableRow({ tableHeader: true, children: cols.map((c, i) => cell(c, widths[i], true)) })]
      .concat(rows.map(r => new TableRow({ children: r.map((c, i) => cell(c, widths[i], false)) })))
  });
}

function build(title, subtitle, note, body, file) {
  const cover = [
    new Paragraph({ spacing: { before: 2600 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: title, size: 76, font: FONT, characterSpacing: 120, color: '3A2E22' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 240 }, children: [new TextRun({ text: subtitle, size: 28, italics: true, font: FONT, color: '6B5D48' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 600 }, children: [new TextRun({ text: note, size: 20, font: FONT, color: '8A3A2C', bold: true })] }),
    new Paragraph({ children: [new PageBreak()] })
  ];
  const doc = new Document({
    creator: 'Quartus', title,
    styles: {
      default: { document: { run: { font: FONT, size: 22, color: '2A2118' } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 36, bold: true, font: FONT, color: '5A3A1C' }, paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 26, bold: true, font: FONT, color: '7A5D1E' }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } }
      ]
    },
    numbering: { config: [{ reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }] },
    sections: [{
      properties: { titlePage: true, page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: {
        default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: '6B5D48' })] })] }),
        first: new Footer({ children: [new Paragraph({ children: [] })] })
      },
      children: cover.concat(body)
    }]
  });
  return Packer.toBuffer(doc).then(buf => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, buf); console.log('wrote', file); });
}

/* =============================== PUBLIC BIBLE =============================== */
const pub = [
  H1('1. Premise'),
  P('**Quartus** is a story- and character-driven text RPG in the register of prestige television: *Game of Thrones*, *House of the Dragon*, *A Knight of the Seven Kingdoms*, *The Last Kingdom* and *Vikings*. It is played in the browser, across ten episodes in Season One, through four rotating points of view. Violence has a cost. Sex is power, and sometimes intimacy. Religion is comfort and machinery at once. The fantastical arrives as dread, not spectacle.'),
  P('**Logline.** In a realm ruled for seventy-one years by a king who will not die, a bell that has never rung begins to count. A bastard knight, a poisoner’s widow, a doubting confessor and a hunted bonesetter, scattered across one capital, discover that everyone in power has been keeping the same secret, and that the debt on it has come due.'),
  H2('Tone and principles'),
  B('**Character before spectacle.** Every scene earns its place by changing what someone wants, fears or owes.'),
  B('**Slow-burn dread.** Politics and violence carry the surface; the uncanny seeps in through omens, relics, children’s rhymes and things that are slightly wrong. Nothing is explained early.'),
  B('**Choices echo.** Decisions carry across episodes and across point-of-view characters: one character’s lie is another’s problem two episodes later.'),
  B('**Death is permanent.** Any of the four leads can die. The story continues through whoever survives. If all four die, the season ends in ash.'),
  B('**Adults only.** Fully explicit and graphic where the story calls for it, with all sexual content between adult characters, and an 18+ gate on the title screen.'),

  H1('2. Format'),
  P('A season is ten episodes. An episode usually has one chapter per lead (and sometimes a short cold open), each about ten to fifteen scenes, ending on a turn. Each chapter is a complete small drama in its own right, with its own stakes, and each feeds the season thread. An episode ends with **The realm will remember**, a list of the choices that mattered, and the survival status of the cast.'),
  table(['Episode', 'Chapters', 'Status'], [
    ['1. The Long King', 'Cold open · Wystan · Ysolde · Maren · Corr', 'Built'],
    ['2. Count Him Last', 'Wystan · Maren · Ysolde · Corr', 'Built'],
    ['3 – 10', 'See episode guide (§6)', 'Planned — delivered in batches of 2–3'],
  ], [2400, 4400, 2560]),

  H1('3. How it plays'),
  table(['System', 'How it works'], [
    ['Stats', 'Blade, Wit, Guile, Faith (0–6). Each lead is built around a different pair.'],
    ['Checks', 'Roll 2d6 + stat against a difficulty: Easy 7, Fair 8–9, Hard 10–11, Dire 12+. A double six always succeeds. A double one always fails.'],
    ['Fortune', 'One reroll of a failed check per lead per episode.'],
    ['Wounds', 'Each lead has a pool of vitality that heals partly between episodes. Below four, Blade suffers. Non-combat injuries never kill; only deliberate story beats or lethal duels do.'],
    ['Duels', 'Round-by-round. Strike, Guard, Feint (sets up an unmissable follow-up) or Reckless blow. Earlier choices, such as a tip about an opponent, change the odds.'],
    ['Bonds', 'Each lead keeps a separate standing with every person they meet, from Sworn enemy to Devoted. Bonds shape what people will do for, or to, you.'],
    ['Whispers', 'Clues and rumors you have collected. The game never tells you which matter.'],
    ['Keepsakes', 'Objects you carry. Some unlock choices later.'],
    ['Omens', 'A quiet counter of things you have seen that should not be. It colors how the world responds.'],
    ['Saving', 'Autosave on every step, three manual slots, and a copy-and-paste save code.'],
  ], [2200, 7160]),

  H1('4. The realm'),
  P('*The realm is rarely named aloud. People say “the Crown” and “the realm.” The country is Verrane; the ruling house is Verrin.*'),
  H2('As the people know it'),
  P('Three hundred and seven years ago, King Hael the Unifier bound the river-lands, the Marches and the coast under one Crown, with the Church at his shoulder. The old wars are legend now. The realm has had peace for three centuries, and a king, Aldous the Long, who has reigned for seventy-one years and is ninety-five. He has outlived four queens and three of his children. He does not appear in public. Nobody is quite sure what he looks like any more.'),
  H2('Places'),
  table(['Place', 'What to know'], [
    ['Highgarrow', 'The capital, on the river Garrow. The palace on the heights; the Cathedral of the Threefold Hand beside it; the **Mudgate** tanneries and sluices below; Wax Street, where the apothecaries keep shop.'],
    ['The North and the Marches', 'Cold, loyal, poor. Prince Garrick is its lord. Greyfen, the Hale seat, and Stonewick, where the Marcher host musters.'],
    ['The Eastmarch', 'Mill and ford country. Hollin Weir, Hollin Ford, and a road that runs straight toward the capital.'],
    ['The Salt Coast', 'House Carrow’s pans and wool-sheds. The Crown’s salt has come from here for generations.'],
    ['The Dunmarch', 'Fen and low hill to the far east. The marsh-folk keep old customs the Church calls superstition. Few outsiders go; fewer come back.'],
  ], [2200, 7160]),
  H2('The Threefold Church'),
  P('Three aspects of God: the **Maker**, the **Warden**, the **Lamp**. Their symbol is the Hand, with three fingers raised and the fourth folded into the palm: *the Hidden Hand, that which God keeps for Himself*. The Cathedral’s tower holds three great bells, and a fourth cradle, empty and silent. The **Candlemen**, the Order of the Lamp, are the Church’s inquisitors; they carry small brass tapers, and they burn heretics and hedge-folk. Saints are martyrs, and the **Roll of the Saints** is their calendar.'),
  H2('Powers'),
  table(['Faction', 'Wants'], [
    ['The Crown (Aldous, with Physician Quill)', 'Stillness. The old man’s habits must not be disturbed.'],
    ['Princess Maud', 'Order. She runs the realm in all but name and means to keep it.'],
    ['Prince Garrick and the Marcher host', 'The throne, honestly: the warrior’s claim and the soldier’s grievance.'],
    ['Prince Edric and the pious party', 'A realm that deserves its Church. A better conscience than he can afford.'],
    ['The Archprelate and the Candlemen', 'Orthodoxy, at almost any price.'],
    ['House Carrow and the merchant houses', 'Profit, and a seat at the table.'],
    ['The hedge-folk of the Dunmarch', 'To be left alone, and to be believed.'],
  ], [3800, 5560]),

  H1('5. The four leads'),
  H2('Ser Wystan Hale — The Bastard of Greyfen'),
  P('**27. Blade 4 · Wit 2 · Guile 1 · Faith 3.** Born to a Marcher lord and a mother he has no face for; raised in his father’s kitchens; knighted on a bloody field for saving Prince Garrick’s life. Honor is the only inheritance he was ever given. **Wants** to be worth the oath he swore. **Flaw:** he mistakes obedience for virtue. **Arc:** from loyalty to a man, to loyalty to the truth, and what that costs.'),
  H2('Lady Ysolde Carrow — The Twice-Widowed'),
  P('**29. Blade 1 · Wit 3 · Guile 5 · Faith 1.** Heir by attrition to House Carrow’s wool, silver and salt; two husbands buried; a mistress, Princess Maud, who owns her leash. **Wants** to be the one holding the leash. **Flaw:** she trusts nothing she cannot count. **Arc:** from survival to power, and how much of herself is left when she gets there.'),
  H2('Sister Maren Vosk — Archivist-Confessor'),
  P('**34. Blade 0 · Wit 4 · Guile 2 · Faith 4.** Raised by the Church after a plague emptied her village; has believed everything she was taught. **Wants** to keep believing. **Flaw:** obedience dressed as piety. **Arc:** from reading the text to reading the margins, and deciding what she owes God against what she owes the truth.'),
  H2('Corr Anwen — The Bonesetter'),
  P('**32. Blade 2 · Wit 3 · Guile 3 · Faith 2.** A marsh-born healer from the Dunmarch, where the old counting is still taught to children. Sets bones; reads what the dead leave behind; has been running for as long as he can remember. **Wants** to stop. **Flaw:** he leaves before he can be left. **Arc:** from flight to standing his ground, at a price he does not yet know.'),

  H1('6. Season One — episode guide'),
  P('Episodes 1 and 2 are playable now. Later titles are listed; details are withheld on purpose.'),
  table(['#', 'Title', 'Premise'], [
    ['1', 'The Long King', 'The Jubilee. A king who will not die; a bell that has never rung, rings. *(Playable)*'],
    ['2', 'Count Him Last', 'A thousand sleepers walk to the capital. A prince decides whom to blame. A deadline is set. *(Playable)*'],
    ['3', 'A Marriage of Convenience', 'A betrothal, and an army at the gate.'],
    ['4', 'The Candlemen', 'The Lamp comes for the hedge-folk.'],
    ['5', 'Greyfen', 'A dying lord’s secret.'],
    ['6', 'The Long King Is Dead', 'A funeral that does not take.'],
    ['7', 'A Feast of Knives', 'A wedding that nobody should attend.'],
    ['8', 'The Hollow Saints', 'Below the Cathedral.'],
    ['9', 'What the Water Keeps', 'The marsh remembers.'],
    ['10', 'The Fourth Vigil', 'The count ends.'],
  ], [600, 2800, 5960]),

  H1('7. Content notes'),
  B('The game contains graphic violence, explicit sexual content, torture, religious atrocity and political cruelty. All sexual content involves adult characters only.'),
  B('Sexual violence, where it exists in the world, is consequence and politics, never titillation, and is never a player-selected scene.'),
  B('A title-screen gate confirms the player is 18 or older.'),

  H1('8. Production notes'),
  P('The game is a static site in the folder **quartus-rpg**. Open **index.html** in any modern browser; no build step or server is needed.'),
  table(['Path', 'Purpose'], [
    ['js/engine.js', 'Rules, state, dice, duels, saves. No browser code, so it can be tested headlessly.'],
    ['js/ui.js · css/style.css', 'Rendering, journal, saves, settings, keyboard shortcuts (1–9 to choose).'],
    ['js/data/world.js', 'Leads, NPC registry, season title.'],
    ['js/data/epNN/', 'One folder per episode: a file per chapter plus z_episode.js, which lists the chapters.'],
    ['tools/validate.js', 'Checks every link between scenes, plays hundreds of random games, and tests permanent death. Run: `node tools/validate.js 500`.'],
    ['tools/build-docs.js', 'Regenerates these Word documents.'],
  ], [3000, 6360]),
  H2('Delivery plan'),
  table(['Batch', 'Episodes', 'State'], [
    ['1', 'Engine, series bible, Episodes 1–2', 'Done'],
    ['2', 'Episodes 3–5', 'Next'],
    ['3', 'Episodes 6–8', 'Planned'],
    ['4', 'Episodes 9–10 and season finale', 'Planned'],
  ], [1200, 5000, 3160]),
];

/* =============================== SEALED CANON =============================== */
const sealed = [
  P('**SPOILERS FOR THE ENTIRE SEASON.** This is the writers’ room document: the true answer to the mystery, who knows what, the planted-clue ledger and the beats of the unwritten episodes. It exists so that later sessions stay consistent. The player, who asked to be surprised, should not read it.', { run: { color: '8A3A2C' } }),

  H1('1. The truth in one paragraph'),
  P('Three centuries ago there were **four** kingdoms, not three. The fourth, **Quartus**, was the fen-kingdom of the Dunmarch, whose rulers kept something asleep beneath the marsh by *counting* it: a lullaby rite called the count. King Hael, unable to beat Quartus in the field, struck a bargain with the first Archprelate: they lured the Fourth King to a parley at Hollin Ford, and while he sang the count at the water they *reversed it*. They woke what lay below just enough that it consumed the Fourth Kingdom in a single night, every soul between the hills and the sea turned to grey salt. In exchange the Sleeper took Quartus’s place in the order of the realm as an unseen **Fourth Crown**, held quiet by a **Tithe**: once a century, a willing person of the Fourth’s blood is walked into the water. Everything since (the three-crown realm, the Church’s Hidden Hand, the Vigil Stipend, the Candlemen, the Long King) exists to hide and service that bargain. The Tithe is due now, and it has already been botched once.'),

  H1('2. The mechanism'),
  table(['Element', 'Truth'], [
    ['The Sleeper', 'Not a god and not strictly a demon. It is the drowned Fourth Kingdom as a single presence: its dead, its land, its grievance. It was lulled for centuries by the count and woken by its betrayal. It does not want to destroy; it wants its own to come home, and it counts the living to find them. It has only ever been fed, never answered.'],
    ['The count', 'A sung and tapped rhythm (to three, never four) that keeps the Sleeper lulled. The Dunmarch folk still know fragments. The rhyme “One for the crown… four for the one who is sleeping below — count him last, and don’t let him know” is the instruction, preserved as a nursery verse. The Church replaced the last line (“the field where the barley grows”) two centuries ago.'],
    ['The Tithe', 'Every hundred years, at the Vigil (the fourth bell), one willing person of **the Fourth’s blood** is led into the water at Hollin Ford. Their body returns as grey salt. Tithes so far: **Hollis the Meek, Year 7** (a boy); **Brannoch of the Marsh, Year 107** (a Dunmarch man); **Ysmay the Wept, Year 207** (a girl of seventeen). Each was canonised and their relics are salt. The first Tithe (Hollis) did not rest: he is **the grey rider**, the Sleeper’s usher, who walks beside the next to be taken.'],
    ['The Salting', 'The grey salt of the Tithes, and of the drowned Quartus itself, is the Church’s and Crown’s secret commodity. **House Carrow’s pans** on the Salt Coast harvest it from the old Fourth shore; Carrow salt is what Physician Quill grinds for the king. That is why Carrow kept the king’s table for four reigns.'],
    ['The Long King', 'King Aldous III is **Hael the Founder**, three hundred and forty years old, kept alive by the grey salt (the Sleeper’s ash, eaten as a tonic) and by the bargain: the Founder is its hostage, its keeper and its debtor. Every seventy years or so a staged succession makes “Aldous” a new man. The Verrin heirs are real children of his body who have died, been sacrificed to politics, or been sent away. Only the Archprelate, the Quill physician line and the Candlemen’s inner circle know.'],
    ['The bell', 'The fourth bell, **Quartus**, cast with “QUARTUS TACET DONEC” (“The Fourth is silent until—”); the end of the sentence, “— it is paid,” was chiseled off. It tolls **four times** in the Vigil year. At the fourth toll, if the Tithe is not paid, the Sleeper takes what it has counted.'],
    ['The Walking', 'The Sleeper counting the realm for its own. Those who walk to Highgarrow carry Fourth blood, thin as it has become. They gather at the Cathedral, which is built on the old parley-ground.'],
  ], [2100, 7260]),

  H1('3. What went wrong: Marden'),
  P('Prince Marden, the eldest, was told by the Archprelate in autumn that a Verrin must go to the water. He chose to go himself, to spare his daughter Alys. The grey rider came; Marden *walked into the ford willingly*. But he was Verrin blood only, not Fourth blood, and the Sleeper **rejected** him: he came out dry, salt on his lips, dead. The failed Tithe angered the Sleeper, accelerated the Vigil and set the Walking in motion. His squire Piers carried his signet: “tell Garrick it’s counting.” Corbin Dray and Piers witnessed it and were ordered by Maud’s steward to say *a fall*.'),

  H1('4. Who knows what'),
  table(['Person', 'Knows', 'Wants'], [
    ['King Aldous (Hael)', 'Everything. The pact is his.', 'To live. He has chosen who the Tithe will be, and it is not himself.'],
    ['Archprelate Lucan', 'The whole truth, and the schedule.', 'The Tithe paid, the lie intact, the Church unshaken.'],
    ['High Chandler Venn', 'Everything, and the other way.', 'To end the Tithe, not pay it. He believes the count can lull the Sleeper permanently. He needs someone who can count and a Dunmarch teacher. He is gentle, sincere and willing to burn people to get there.'],
    ['Physician Quill', 'The salt and its function.', 'To keep the king alive. His family has done so for six generations.'],
    ['Princess Maud', 'That Marden was told something and died of it; that the king cannot be poisoned; that Alys is intended.', 'To protect Alys and kill the king. She has tried twice with nightshade.'],
    ['Prince Edric', 'Almost nothing. The warning at sixteen; dreams of salt.', 'To find out whether he is the one.'],
    ['Prince Garrick', 'Nothing. He believes in treason, not ghosts.', 'The throne, and justice for Marden.'],
    ['Corbin Dray', 'The ford.', 'To stop remembering.'],
  ], [2100, 3600, 3660]),

  H1('5. The leads’ secrets'),
  table(['Lead', 'Secret'], [
    ['Wystan', 'His mother was **Lady Isaure of the Dunmarch, last of the blood of Quartus’s ruling line**: the Fourth Crown’s heir. Lord Hale swore to the Church to hide it; the Church wanted the last heir kept safe, and close, for 27 years. **Wystan is the intended Tithe.** The Candlemen have always known where he was. Garrick’s patronage was arranged.'],
    ['Corr', 'His line, the **Anwen**, were the Fourth’s counters: the rite-keepers. His grandmother’s verse is the real count. He is a distant cousin to Wystan. His lost lover Hob was taken by the Candlemen as a hedge-sorcerer.'],
    ['Ysolde', 'Her family’s fortune is the Sleeper’s ash. Her grandmother knew. The poison she gave Lord Thorne is ironically the least of her House’s sins.'],
    ['Maren', 'Her village was emptied twenty years ago by a *small, early Salting* the Church called plague. She alone was **passed over by the count**; Venn found her and has watched her since. She can count the Sleeper without being taken, which makes her the key to Venn’s plan.'],
  ], [1400, 7960]),

  H1('6. Planted-clue ledger (Episodes 1–2)'),
  table(['Clue (as the player sees it)', 'Plant', 'Payoff'], [
    ['Salt on the dead; sea-taste inland', 'Ep1 prologue, Maren, Corr', 'Ep6, Ep8: the Sleeper is the drowned kingdom'],
    ['Children counting; “Four.”', 'Ep1 prologue, bell', 'Ep10: fourth toll'],
    ['The folded fourth finger of the Hand', 'Ep1 Maren', 'Ep8: the Fourth Hand is Quartus'],
    ['Silent Bell: QUARTUS TACET DONEC; sentence chiseled off', 'Ep1 Maren', 'Ep10: the full inscription'],
    ['Roll of Saints: Years 7, 107, 207; next is 307', 'Ep1 Maren', 'Ep8: all three reliquaries are salt'],
    ['Vigil Stipend: 4000 marks a year for 300 years', 'Ep1 Ysolde (Perrin)', 'Ep8: pays the Candlemen and the saltworks'],
    ['The king eats grey salt; Quill’s sealed jar', 'Ep1 Ysolde', 'Ep6: the “funeral”; Ep8 the Carrow pans'],
    ['Salt crystals have four sides, not cubes', 'Ep2 Ysolde (Hargreave)', 'Ep8: not sea-salt but remains'],
    ['Four riders; the grey rider; Marden dry', 'Ep1 Ysolde (Dray), Ep1–2 Corr (Piers)', 'Ep7, Ep9: Hollis, the usher'],
    ['Marden: “It’s counting”; his last letter to Alys', 'Ep2 Corr, Ysolde', 'Ep9: the Dunmarch'],
    ['Edric’s warning at sixteen: “the realm would be asked”', 'Ep2 Maren, Ep2 king', 'Ep10: the Tithe is asked of someone'],
    ['Wystan’s mother was a Dunmarch woman; the Church oath', 'Ep1 Wystan letter', 'Ep5: Greyfen reveals Isaure'],
    ['Ysmay’s reliquary full of salt', 'Ep2 Maren', 'Ep8'],
    ['Maud’s nightshade; the king drank four vials', 'Ep2 Ysolde', 'Ep6: why the “death” is a lie'],
    ['“Do not trust your grandfather, or whoever he is by now”', 'Ep2 Ysolde (Alys)', 'Ep8: the Long King is the Founder'],
    ['Chalk marks: three strokes and a space', 'Ep1 Wystan', 'Ep4: the Candlemen’s list of Fourth-blooded households'],
  ], [4000, 2600, 2760]),

  H1('7. Season One — the beats of the unwritten episodes'),
  table(['#', 'Title', 'Beats'], [
    ['3', 'A Marriage of Convenience', 'Garrick’s host arrives; the palace holds. Maud proposes a betrothal for Alys to avoid war: Ysolde brokers it. The king’s appearance stops the standoff, and the sleepers form a silent wall between the armies. The first toll’s aftershock: a village in the Eastmarch is found white and standing. Wystan and Garrick’s quarrel over the lie, if it was told.'],
    ['4', 'The Candlemen', 'Venn begins a purge of Dunmarch-born households in Highgarrow, working from the chalk marks. Corr’s people are taken; Hob’s fate is revealed. Maren is forced to witness a burning; she chooses to help or inform. Wystan must choose between Garrick’s orders and a woman who may be his kin. First lethal duel.'],
    ['5', 'Greyfen', 'Wystan goes home to a dying father. Lord Hale tells him of Isaure, the last Fourth heir, and the Church’s oath. The Church comes for him in force: a siege of Greyfen. Edmund, Wystan’s legitimate half-brother, must choose a side. Real battle, real losses.'],
    ['6', 'The Long King Is Dead', 'The king collapses and is declared dead. Maud, Garrick and Edric make their moves. At the lying-in-state the **second toll** sounds; the king sits up. Ysolde learns what Quill does with the grey salt. Maud’s attempt on his life is exposed.'],
    ['7', 'A Feast of Knives', 'Alys’s betrothal feast. Maud’s plan, Garrick’s plan and the Church’s plan collide; a massacre at the high table. At least one lead dies here. Dray is forced to speak at last.'],
    ['8', 'The Hollow Saints', 'Maren and Edric open the north crypt: three reliquaries of salt, and the Archprelate’s record of every Tithe. Lucan confesses, defends and offers Maren a seat. Ysolde finds the Carrow pans. The **third toll**. Venn reveals his heresy: to end the Tithe by counting.'],
    ['9', 'What the Water Keeps', 'The leads converge on the Dunmarch. Corr’s people remember the true count and the Fourth Kingdom. Wystan’s identity is confirmed. The elders say a count cannot be sung by the Fourth’s own blood without being taken. Hollis the grey rider speaks.'],
    ['10', 'The Fourth Vigil', 'The **fourth toll**. At Hollin Ford the Tithe must be paid or the count sung. Outcomes depend on who is alive and what they know (§8). The Sleeper *answers*; the sea withdraws from the Salt Coast and a drowned city stands in the open air. Season hook: Quartus rises.'],
  ], [600, 2400, 6360]),

  H1('8. The finale — resolutions'),
  table(['Outcome', 'Conditions', 'Result'], [
    ['**The Tithe paid** (Wystan walks in willingly)', 'Wystan alive; he accepts', 'The Sleeper sated for a century; the king lives; Wystan is gone, not dead. The realm lives on a lie. Season 2: the heir returns changed.'],
    ['**The count sung** (Maren and Corr)', 'Both alive; both have mastered the count; Venn’s help optional', 'The Sleeper lulled, but not satisfied. One of the singers must stay at the water. The sea withdraws.'],
    ['**The wrong Tithe** (a Verrin: Alys, Edric or Maud)', 'The Archprelate prevails', 'Fails, as Marden did. The Sleeper takes the Walking: thousands die in a night.'],
    ['**Nothing paid**', 'All fail or die', 'The Salting: the Fourth’s old fate descends on the Eastmarch. Season 2 begins in ruins.'],
  ], [2600, 3000, 3760]),
  P('Whichever ending: the sea withdraws, a drowned city stands in the open air, and the Sleeper speaks: the last line of the season.'),

  H1('9. Later seasons (sketch)'),
  B('**Season 2 — The Fourth Crown.** The drowned city of Quartus rises; the realm has to decide whether the Fourth is an enemy, a creditor or a kingdom.'),
  B('**Season 3 — The Reckoning.** The Long King’s true age and crimes are exposed; civil war over what the Crown is.'),
  B('**Season 4 — The Count.** The Sleeper’s true nature, and the end of the bargain.'),

  H1('10. Continuity flags set so far'),
  table(['Flag', 'Meaning'], [
    ['miller_held / miller_followed', 'Prologue: Osric held his wife, or walked with the Walking. Both appear again in Ep2 (Maren, Corr).'],
    ['w_corbin (won/lost); w_corbin_fate', 'Ep1: result of the Jubilee duel; spared / shamed / ignored.'],
    ['w_oath_garrick, w_honest, w_letter (read/unread)', 'Ep1: Wystan’s promise, his candour and whether he read Lord Hale’s letter.'],
    ['y_leash, y_bargain, y_corbin_bed, y_corbin_info, kingsalt, vigil_stipend', 'Ep1 Ysolde: Maud’s hold on her; what she learned and from whom.'],
    ['m_told_venn, m_last_words, m_page_kept / m_page_lost / m_page_given, m_seal', 'Ep1 Maren: how she handled the page and Venn.'],
    ['c_stance, c_hask_dead, marden_ring', 'Ep1 Corr: how the standoff began; who killed the Candleman.'],
    ['doran_dead, doran_how, doran_hurt', 'Ep2: Doran’s fate (alive and hurt, or dead).'],
    ['w_reported (honest / shaded / partial); garrick_marches; garrick_knows_lie', 'Ep2: what Wystan told Garrick; whether the host marches; whether Corr exposed the lie.'],
    ['m_keeper, m_ally (edric / none), anselm_key', 'Ep2 Maren: her post, her ally, the crypt key.'],
    ['y_told_maud, y_maud_ledger, y_hargreave, alys_trust, marden_letter, y_saw_grey', 'Ep2 Ysolde: what Maud knows, the poison ledger, Hargreave’s fate, Alys’s trust.'],
    ['c_told, c_hild_woke, c_plan', 'Ep2 Corr: his testimony; whether Hild was woken; where he is going next.'],
  ], [3800, 5560]),
];

const out = path.join(__dirname, '..', 'docs');
Promise.all([
  build('QUARTUS', 'Series Bible — Season One: The Counting', 'Spoiler-safe edition', pub, path.join(out, 'Quartus_Series_Bible.docx')),
  build('QUARTUS', 'Sealed Canon — The Mystery', 'SPOILERS — CONTAINS THE FULL SECRET', sealed, path.join(out, 'SEALED_Mystery_Canon_SPOILERS.docx')),
]).catch(e => { console.error(e); process.exit(1); });
