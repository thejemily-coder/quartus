/* TITHE — Season One, Episode 6: "The Barrow" */

/* ---- E6 data additions ---- */
TITHE.ENEMIES.e6_seated = { name: 'The Seated', hp: 20, def: 10, arm: 1, dmg: [3, 7], acc: 2, xp: 30, silver: [1, 6], tags: ['undead'], weak: ['silver', 'fire'],
  moves: [{ n: 'Cold Hands', w: 3, m: 1, tele: 'pushes itself up from the table, slowly, like a guest after a long meal' }, { n: 'Frost Breath', w: 1, m: .8, fx: 'drain', tele: 'opens a mouth rimed white inside' }, { n: 'Welcome', w: 1, m: 1.5, heavy: true, fx: 'stun', tele: 'spreads its arms like a host greeting a late arrival' }],
  loot: [['grave_moss', .5, 1], ['iron_scrap', .3, 1]],
  lore: 'Grave-robbers who came into the Barrow of the Nine Crowns and were made welcome. They sit at the king\'s table with frost in their eyebrows and their hands flat on the stone, smiling. They get up when the guest they have been waiting for arrives.' };
TITHE.ENEMIES.e6_chalk_mother = { name: 'The Chalk-Mother', hp: 64, def: 10, arm: 1, dmg: [5, 10], acc: 3, xp: 130, silver: [0, 0], tags: ['under', 'boss'], weak: ['fire'],
  moves: [{ n: 'Rake', w: 3, m: 1, fx: 'bleed', tele: 'drags herself forward on her long arms, chalk-dust smoking off her' }, { n: 'Grief-Song', w: 1, m: 0, fx: 'fear', aoe: true, tele: 'lifts her blind face toward the downs where her sister died' }, { n: 'Fold You In', w: 1, m: 2, heavy: true, tele: 'opens her arms wider than arms go' }, { n: 'Call the Brood', w: 1, m: 0, self: 'summon:ghoul', tele: 'coos down into the chalk' }],
  loot: [['ghoul_gristle', 1, 3], ['grave_moss', 1, 2]],
  lore: 'Sister to the matriarch that died in a sheepfold on the Kingsroad. White with chalk from the pits she nests in. She has been singing the same tune since the spring, and the shepherds have started to hum it without knowing why.' };
TITHE.ENEMIES.e6_digger = { name: 'Ned Gammage', hp: 42, def: 12, arm: 2, dmg: [5, 9], acc: 3, xp: 75, silver: [15, 30], tags: ['human', 'boss'],
  moves: [{ n: 'Mattock', w: 3, m: 1, tele: 'swings a grave-digger\'s mattock in a short, practised arc' }, { n: 'Spade to the Face', w: 1, m: 1.2, fx: 'stun', tele: 'turns the mattock round, flat side first' }, { n: 'Dig In', w: 1, m: 1.8, heavy: true, tele: 'plants his feet like he is breaking hard ground' }],
  loot: [['knives', .6, 1], ['poultice', .5, 1]],
  lore: 'Forty years robbing the dead of the March. He has never once been afraid of a grave, which is the only thing he has ever been wrong about.' };
TITHE.ITEMS.e6_crown = { name: 'A First King\'s Crown', type: 'quest', desc: 'A circlet of dark bronze set with river-pearls gone yellow. One of the nine from the barrow wall. It is very cold, and heavier than it looks, and it leaves a mark.' };
TITHE.CODEX.e6_lock = { title: 'The Living Lock', text: 'Barrow-King Hollin lay down alive in the Barrow of the Nine Crowns a thousand years ago, his hand on a bronze plate in the floor, and held it shut. Under the plate something breathes. He called it *Her*. He called you a door.' };

TITHE.episode({
  n: 6, title: 'The Barrow',
  logline: 'Sent to fetch a dead king\'s crown for a living prince, Ansel, Tamsin and one companion are sealed inside the Barrow of the Nine Crowns with the dead, the carvings, and the king who never stopped holding the door.',
  start: 'cold1',
  credits: ['ansel', 'tamsin', 'hollin', 'pell', 'ulla', 'hob', 'isolde', 'gall'],
  previously: [
    { t: 'Six years ago, at Corran\'s Ford, Ansel Dray died on an old stone carved with a seven-pointed star. In the morning, he woke.' },
    { if: "!f.e1_saw_crow && !f.e3_suspect_tam", t: 'Tamsin Vell has walked beside him since the Kingsroad. She calls him Sergeant. She goes to see her gran in the fen.' },
    { if: "f.e1_saw_crow || f.e3_suspect_tam", t: 'At night, Tamsin sends crows to "her gran." He has watched her do it. He has said nothing.' },
    { t: 'In the Saltdown deep, a grey man with a ledger looked at Ansel, turned a page, and said: "You\'re not here."' },
    { if: 'f.e4_ledger', t: 'The Saltdown ledger: emptied men, delivered from the Lanternhold, priced by the head.' },
    { t: 'At the Feast of Lanterns, Prince Cassius came to claim Lady Isolde. Men in Lamp robes came to kill her father. Ansel stopped them.' },
    { if: "f.e5_isolde_kiss==='kissed'", t: 'In the archive, by one candle, Isolde kissed him. Then she stopped.' },
    { if: "f.e5_isolde_kiss==='almost'", t: 'In the archive, by one candle, Isolde almost kissed him.' },
    { if: 'f.e5_delphine', t: 'The Prince\'s courtesan took him to bed, and asked him a great many questions.' },
    { t: 'A thousand lanterns went up to the stars. One star flickered.' }
  ],
  nextTime: [
    '"My lord Varane is dead. And the man who did it is the dead sergeant."',
    'Every gate in Harrowgate shut at once.',
    '"I\'ve got you, Sergeant. I\'ve got you. Come on. I know somewhere safe."'
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    cold1: {
      loc: 'The Barrowfields — a thousand years ago',
      text: [
        `The downs are white with torches. Ten thousand of your people stand on the hillsides in the dark holding their lights, and none of them make a sound, because you asked them not to, and you are still their king for another hour.`,
        `You walk the processional way in bronze. Bronze greaves, a bronze cuirass worked with oak leaves, a bronze mask hammered into the shape of your own face when you were young and handsome and had not yet been to the river. It is very heavy. You are sixty-one years old. You have carried heavier.`,
        `Behind you the priests in white clay are singing. Ahead, the hill has been opened like a mouth, lined with dressed stone, and at the back of the mouth there is a door.`,
        `On your finger, the ring. It has been warm since the night at the ford, when you knelt with the other eight at the stone and swore.`
      ],
      choices: [
        { t: 'Look back at your people.', go: 'cold2a' },
        { t: 'Look up.', go: 'cold2b' }
      ]
    },
    cold2a: {
      text: [
        `Your queen is at the front with your sons. Aud has not wept. She promised she would not and she keeps her promises; it is why you married her. Your youngest is weeping and is ashamed of it, and you would give the crown off your head for one more hour to tell him it does not matter.`,
        `You do not go back. A king who goes back is not a lock.`
      ],
      next: 'cold3'
    },
    cold2b: {
      text: [
        `The sky is clear and the stars are out, more than you have ever seen, and they are very bright, and they are very close.`,
        `Since the ford you have not been able to look at them for long. They look back. Tonight they are singing: a sound below hearing, felt in the teeth, like a wet finger drawn round the rim of a cup.`,
        `You were promised that they are glad.`
      ],
      next: 'cold3'
    },
    cold3: {
      loc: 'The Barrow of the Nine Crowns — the inner chamber',
      text: [
        `In the hall before the chamber, your sworn men. Forty of them on stone benches in their war-gear, swords across their knees. They drank the cup this morning, laughing, and toasted you, and now they sit as they died, chins on their chests, as if listening to a long story you are telling.`,
        `In the chamber, on bronze pegs, eight crowns: the crowns of the kings who knelt with you, sent here to be kept by the eldest. The ninth is on your head. You take it off and hang it with the others. It leaves a groove in your brow you can feel with your thumb.`,
        `In the floor, a round plate of bronze the width of a cartwheel, and over it a stone slab. The plate is warm. Under it, very far down, something breathes.`,
        `You lie down on the slab. You lay your right hand flat on the bronze. You are not afraid. You are so afraid that your teeth knock inside the mask.`
      ],
      choices: [ { t: 'Give the word.', go: 'cold4' } ]
    },
    cold4: {
      text: [
        `The priests roll the door. It takes twenty of them. The torchlight narrows to a line, a thread, a seam of gold, and is gone.`,
        `Dark. Your own breath inside the mask. The forty in the hall, keeping their patience.`,
        `Under your palm, slow and huge, the breathing of the thing beneath the world. It is dreaming. In its dream it is reaching up for its children, and finding your hand in the way.`,
        '@hollin: "Sleep, Mother," you tell it. "Sleep. I am here."',
        '~ CUT TO: THE DOWNS ABOVE.',
        `The torches go out one by one down the hillsides. On the summit the eldest priest lifts her painted face to the sky to give thanks, as she was taught.`,
        `The stars are singing. She sees, for the first time, that they have mouths.`
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { party: { add: ['tamsin'], remove: ['pell', 'ulla', 'hob', 'brannagh', 'oriel', 'mags', 'rusk'] }, know: { codex: ['barrows'] } },
      next: 'hen1'
    },

    /* ======================= ACT ONE: THE CROWN ======================= */
    hen1: {
      loc: 'The Gutted Hen — three days after the Feast of Lanterns',
      text: [
        `Harrowgate is still sweeping up the Feast. Paper lantern-husks in the gutters, wax on the cobbles, a pilgrim asleep in the Hen\'s horse-trough with his star pinned on upside down.`,
        `You have not slept well since. Every night you go to the window and look, once, quick, the way you\'d touch a bad tooth. The star that flickered is still there. You think it is still there.`,
        { if: 'f.e5_delphine', t: `Your good shirt still smells of the Prince\'s courtesan\'s rose-oil. Mags has noticed. Mags has said nothing in a way that is louder than talking.` },
        { if: "f.e5_isolde_kiss==='kissed'", t: `And the archive. The shelf at your back, the smell of old vellum, her mouth. Then her hand flat on your chest, pushing, gently, and her whispered *no*, which was not said to you.` },
        { if: "f.e5_isolde_kiss==='almost'", t: `And the archive. One candle. An inch between you, less. Footsteps on the stair, and her stepping back, and her face closing like a ledger.` },
        `Tamsin comes down the stairs eating your breakfast.`,
        '@tamsin: "Letter for you. Wax seal, little boar on it, very posh. I didn\'t open it." She hands it over. The seal has been lifted with a hot knife and pressed back down. "I didn\'t open it *much*."',
        '@ansel: "You can\'t read."',
        '@tamsin: "I can read *boars*."'
      ],
      fx: { quest: { id: 'e6_barrow', title: 'The Nine Crowns', state: 'active', note: 'A summons from Varane Keep, by the kitchen stair.' } },
      choices: [
        { t: '"It\'s from Lady Isolde. Business."', go: 'hen_tease' },
        { t: 'Put it inside your coat without a word.', go: 'hen_quiet' },
        { t: '"Come up to the Keep with me."', go: 'hen_come' }
      ]
    },
    hen_tease: {
      text: [
        '@tamsin: "Business." She chews. "Course it is. Kitchen stair, noon, come alone, signed with one letter. That\'s how all the best business goes."',
        { if: "f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost'", t: '@tamsin: "You\'ve got wax on your face, by the way. From the archive. Three days, it\'s been there." You touch your cheek. There is nothing there. She grins with the chipped tooth. "Caught you."' },
        { if: "!(f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost')", t: '@tamsin: "Wear the other shirt. That one\'s seen things."' }
      ],
      next: 'keep1'
    },
    hen_quiet: {
      text: [
        `She watches the letter go into your coat. She watches your face while it goes.`,
        '@tamsin: "Right," she says lightly, and takes another bite of your bacon. "Right you are."',
        `She is already sitting on the step when you leave, stringing her bow, not looking up.`
      ],
      next: 'keep1'
    },
    hen_come: {
      text: [
        '@tamsin: "Up the Keep? With the silver forks and the people who look at your boots?" She shudders theatrically. "Not my sort of house, Sergeant. They count the spoons after I\'ve been."',
        '@ansel: "Do they find any missing?"',
        '@tamsin: "Never. That\'s what worries them."'
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'keep1'
    },
    keep1: {
      loc: 'Varane Keep — the archive, noon',
      text: [
        `The archive smells the way it did. Mouse and vellum and cold candle. Lady Isolde is at the long table with three ledgers open at once, the way other women would have three dogs, and a pen behind her ear she has forgotten about.`,
        { if: "f.e5_isolde_kiss==='kissed'", t: `She looks up. For a moment she is only a woman you kissed, in a room where you kissed her, and her face doesn\'t know what to do. Then it does: it does courtesy, like a door shutting softly.` },
        { if: "f.e5_isolde_kiss==='almost'", t: `She looks up, and then very deliberately looks at the shelf behind you, where it nearly happened, and then back at you, and colours, slightly, along the cheekbones.` },
        { if: "!(f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost')", t: `She looks up and nods to a chair. She does not get up. Lady Isolde never gets up for anybody she is about to ask for something.` },
        '@isolde: "Master Dray. Thank you for coming by the back. My father\'s house is full of the Prince\'s people and they all have ears, and some of them have very good ones."',
        '@isolde: "At dinner last night His Highness asked about the barrows. He *collects*. He thought a First King\'s crown would make a charming wedding gift from the March to the Crown. My father said yes before the soup was cleared."',
        `She turns a ledger toward you. A survey map: the Barrowfields east of the fen, the downs drawn as little humps like sleeping sheep, and the largest marked in faded red. *The Nine Crowns.*`,
        '@isolde: "It\'s on our land. Five men have been found dead on its slope this month. Grave-robbers. They sit in a row, facing west, with frost on them, in October. Nobody will go. Sixty silver to go. Eighty if you bring back a crown."'
      ],
      fx: { know: { cast: ['isolde'] } },
      choices: [
        { t: '"Do you want me to bring him a dead king\'s crown?"', go: 'keep_want', once: true },
        { t: '"About the archive."', go: 'keep_archive', once: true, if: "f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost'" },
        { t: '"Why not send the Marshal\'s men?"', go: 'keep_hask', once: true },
        { t: '"I\'ll go."', go: 'keep_done' }
      ]
    },
    keep_want: {
      text: [
        `She puts the pen down. She notices it was behind her ear and is annoyed with it.`,
        '@isolde: "I want my father not to have to say no to a prince, because he can\'t afford to, and because he would enjoy it so much that it would kill him." A breath. "I want— "',
        `She stops. You watch her decide not to.`,
        '@isolde: "It doesn\'t matter what I want. That\'s the first thing they teach you, and the only thing I was ever slow to learn. Bring back a crown, Master Dray, if you can do it and live. If you can\'t, come back without one. I\'ll think of something to tell him."'
      ],
      fx: { bond: { isolde: 1 } },
      next: 'keep1b'
    },
    keep_archive: {
      text: [
        '@isolde: "Nothing happened in the archive."',
        `You look at her. She looks at the ledger. A clerk goes past the door with an armful of rolls and she waits, perfectly composed, until his steps are gone.`,
        '@isolde: "...Something very nearly happened in the archive. And I am marrying a prince at midsummer, and you are going to go and dig up a king. Let us both do our work, and be very good at it, and not be stupid. One of us has to not be stupid."'
      ],
      choices: [
        { t: '"It happened. You know it did."', go: 'keep_arch_push' },
        { t: '"Then I\'ll be very good at my work, my lady."', go: 'keep_arch_let' }
      ]
    },
    keep_arch_push: {
      text: [
        'For a moment you think she will have you put out.',
        '@isolde: "Yes," she says, very quietly, to the map of the downs. "It did."',
        'She does not say anything else. She doesn\'t need to.'
      ],
      fx: { bond: { isolde: 1 }, quiet: true },
      next: 'keep1b'
    },
    keep_arch_let: {
      text: [
        `Something in her shoulders comes down an inch. It is not quite gratitude. It is the face of someone who has been holding a heavy thing out at arm\'s length and has been allowed, briefly, to rest it on a table.`,
        '@isolde: "Thank you," she says. And then, drily, because she cannot help it: "You\'re very good at your work. It\'s one of the inconvenient things about you."'
      ],
      fx: { bond: { isolde: 1 }, quiet: true },
      next: 'keep1b'
    },
    keep_hask: {
      text: [
        '@isolde: "Because the Marshal would bring back the crown, and the grave-goods, and a bill, and a story, and I would never know which part of any of it was true." She closes a ledger. "Ser Konrad already offered. Very warmly. That is another reason."',
        { if: "f.e5_ledger_to==='isolde'", t: `Her hand rests, for a moment, on a locked box at the end of the table. You know what\'s in it. The Saltdown ledger, and the prices.` },
        '@isolde: "And Brother Pell has been in this room for three days reading about that barrow, and I would like him out of it, and he will only go if he is going *there*."'
      ],
      next: 'keep1b'
    },
    keep1b: {
      choices: [
        { t: '"Do you want me to bring him a dead king\'s crown?"', go: 'keep_want', once: true },
        { t: '"About the archive."', go: 'keep_archive', once: true, if: "f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost'" },
        { t: '"Why not send the Marshal\'s men?"', go: 'keep_hask', once: true },
        { t: '"I\'ll go."', go: 'keep_done' }
      ]
    },
    keep_done: {
      text: [
        `She writes you a warrant in her own hand: *the bearer acts for the House of Varane on the Barrowfields.* She sands it and folds it and holds it out, and when you take it her fingers do not quite let go at once.`,
        '@isolde: "They say the robbers are found smiling," she says. "Don\'t be found smiling, Master Dray. I should find it very hard to forgive."'
      ],
      fx: { quest: { id: 'e6_barrow', note: 'Lady Isolde\'s contract: find what is killing grave-robbers at the Barrow of the Nine Crowns. Sixty silver; eighty with a First King\'s crown for Prince Cassius.' } },
      next: 'yard1'
    },
    yard1: {
      loc: 'The Gutted Hen — the yard, afternoon',
      text: [
        `By the time you get back to the Hen, everyone knows. Mags knows, which means the Tanners\' Bottom knows, which means the crows on the roof probably know.`,
        `Brother Pell is in the yard with a book the size of a church door open on the rain-barrel, so excited he has forgotten to be drunk.`,
        '@pell: "Not nine *kings*, Ansel. One king. Nine crowns. Old Lord Varane\'s surveyor went into the passage sixty years ago and wrote it down: a hall of seated men, and a chamber, and crowns on the wall like hats in an inn. Then he came out and drowned himself in a horse-pond. Which is a very *small* body of water to drown in, it takes real commitment—"',
        { if: 'f.e4_ulla', t: '@ulla: "A king\'s grave," says Ulla Stonehand from the bench by the door, sharpening her axe on her thigh. "So there\'s gold or there\'s fighting. I\'ve been sat here three days listening to a priest. I\'ll take either."' },
        { if: 'f.e2_hob_hired', t: 'Hob is holding Ox\'s bridle, as if by holding it hard enough he can make sure he\'s coming. He has polished his pitchfork. You didn\'t know you could polish a pitchfork.' },
        `Tamsin, already in the saddle, says nothing. She is going. That was never a question.`,
        `> A barrow is stone passages a man has to turn sideways in. A party of five in a grave is a funeral. One more. Only one.`
      ],
      choices: [
        { t: 'Pell. If there are words on the walls, you want someone who can read them.', go: 'yard_pell', fx: { set: { e6_companion: 'pell' }, party: { add: ['pell'] } } },
        { t: 'Ulla. In a hole in the ground, you want the biggest axe in the March.', go: 'yard_ulla', fx: { set: { e6_companion: 'ulla' }, party: { add: ['ulla'] } } },
        { t: 'Hob. He\'s been begging for a real job. Give him one.', if: 'f.e2_hob_hired', go: 'yard_hob', fx: { set: { e6_companion: 'hob' }, party: { add: ['hob'] } } }
      ]
    },
    yard_pell: {
      text: [
        `Pell goes white, then pink, then white again.`,
        '@pell: "Me. Into a— yes. Yes, of course. It\'s only a hole. Saint Orrin spent nine years in a hole." He shuts the book on his own thumb. "He came out mad, but very holy."',
        { if: 'f.e4_ulla', t: 'Ulla snorts and goes back to her axe. "Bring me something shiny, little priest."' },
        { if: 'f.e2_hob_hired', t: 'Hob lets go of Ox\'s bridle. He doesn\'t say anything. He doesn\'t need to.' }
      ],
      next: 'road1'
    },
    yard_ulla: {
      text: [
        '@ulla: "Ha!" Ulla is on her feet, which takes a while, as there is a great deal of her. "Good. A man of sense. The priest can read me the walls when we get back. I\'ll describe them. Badly."',
        '@pell: "I\'ve made *notes*," Pell says, crushed, and presses a sheaf of scribbled paper into your hand. "The script will be Downs-hand. Pre-Aldermerish. If you see a sign like a hand pressed flat, it means *hold*. Or possibly *dinner*."',
        { if: 'f.e2_hob_hired', t: 'Hob lets go of Ox\'s bridle. He doesn\'t say anything. He doesn\'t need to.' }
      ],
      next: 'road1'
    },
    yard_hob: {
      text: [
        `Hob\'s whole face goes up like a lantern.`,
        '@hob: "Me? *Me*, Sergeant? I won\'t let you down, I swear on my— on— I\'ll get my coat. I\'ve got a coat now. I\'ll get it."',
        `He runs into the stable and you hear him fall over something.`,
        '@pell: "He\'s a child," says Pell quietly, at your elbow, and presses his notes into your hand. "Downs-hand script. A hand pressed flat means *hold*. Bring him back, Ansel."',
        { if: 'f.e4_ulla', t: '@ulla: "Let the pup bleed a little," Ulla says. "It\'s how they grow."' }
      ],
      fx: { bond: { hob: 1 } },
      next: 'road1'
    },

    /* ======================= ACT TWO: THE DOWNS ======================= */
    road1: {
      loc: 'The Barrowfields — late afternoon',
      text: [
        `East of the fen the land lifts into chalk downs, bare and green and very old, and on every rise there is a barrow: long ones like upturned boats, round ones like sleeping animals, grass-grown, sheep-cropped, older than any name anybody has for them.`,
        `There are crows. Not many, to begin with. One on a thorn. Two on a barrow-top. Then a field of them, black on the green, turning their heads all together as you pass.`,
        `In the west the sky is the colour of a bruise. A storm is coming off the sea, slow and sure, like a debt.`,
        { if: "f.e6_companion==='pell'", t: '@pell: "Did you know," says Pell, who has been talking for two hours, "that the Lamp\'s own surveyors refused to map the Barrowfields for three hundred years? Doctrinal objections. To *dirt*."' },
        { if: "f.e6_companion==='ulla'", t: 'Ulla rides a shire horse the size of a cottage and sings under her breath in Nordvik. When you ask, she says it\'s a song about a man who married a troll. "It ends well. For the troll."' },
        { if: "f.e6_companion==='hob'", t: 'Hob rides a borrowed mule and keeps asking how far, and then apologising for asking, and then asking again.' },
        `Tamsin rides a little ahead and does not sing. She watches the crows. The crows watch her.`
      ],
      choices: [
        { t: 'Ride up beside Tamsin. "Friends of yours?"', go: 'road_crows' },
        { t: '"Storm\'ll beat us there. We\'ll want shelter."', go: 'road_storm' }
      ]
    },
    road_crows: {
      text: [
        '@tamsin: "Crows are everybody\'s friends, Sergeant. They\'re like priests. Turn up for every death, eat the best bits, never pay for a drink."',
        `It\'s a good line. It\'s a *practised* line. A crow drops off a thorn as she passes and lands on the barrow behind, and she doesn\'t look at it, very carefully.`,
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `> You have seen her with a crow on her wrist, at night, tying red thread to its leg. You don\'t say so. You never do.` }
      ],
      next: 'rob1'
    },
    road_storm: {
      text: [
        '@tamsin: "There\'s nothing out here but barrows."',
        '@ansel: "Then we\'ll shelter in a barrow."',
        `She looks at you for a long moment over her shoulder.`,
        '@tamsin: "Fen-folk say you don\'t go into the hills uninvited." Then, lighter: "But you\'re not fen-folk. You\'re not much of anything, are you." She says it almost fondly.'
      ],
      next: 'rob1'
    },
    rob1: {
      loc: 'The Barrow of the Nine Crowns — dusk',
      text: [
        `The Nine Crowns is a hill. You thought it would be a mound; it is a hill, long-backed, ditched and banked, a hundred paces end to end, and in its eastern face a cut lined with grey stones the size of cottages. At the back of the cut, a door-stone, levered half aside. Fresh spade-marks. A robbers\' camp: a sagging tent, a handcart, crowbars, a cold fire.`,
        `On the slope below the door, five men are sitting in a row.`,
        `They face west, toward the storm. Their hands rest on their knees. There is frost in their eyebrows and their beards, though the evening is mild, and every one of them is smiling, gently, like a man at the end of a good supper.`,
        `Three long grey shapes crouch among them, feeding. Unhurried. Cooing like pigeons. One has the nearest man\'s hand in its sideways mouth and is working the rings off with its tongue.`,
        `From a thorn tree by the tent, a hoarse whisper: "*Don\'t.* Don\'t go near the door. Mister. *Mister.*"`
      ],
      fx: { know: { beast: ['ghoul'] } },
      choices: [
        { t: 'Drive the ghouls off the dead.', go: 'rob_fight', fx: { set: { e6_gleaners: 'fought' } } },
        { t: '"Tamsin?" She knows these things. Let her say.', go: 'rob_tam' },
        { t: 'Throw a firebomb among them.', req: "has('firebomb')", reqLabel: 'Needs a Firebomb', go: 'rob_fire', fx: { take: { firebomb: 1 }, set: { e6_gleaners: 'burned' } } }
      ]
    },
    rob_tam: {
      text: [
        '@tamsin: "Leave them be." Very low. "They\'re gleaners. They\'ll eat what\'s dead and go. It\'s what they\'re for. Those men are past minding." She swallows. "It\'s better than the alternative."',
        '@ansel: "What\'s the alternative?"',
        `She looks at the five smiling faces with the frost on them and doesn\'t answer.`
      ],
      choices: [
        { t: 'Wait. Let them feed.', go: 'rob_wait', fx: { set: { e6_gleaners: 'fed' }, bond: { tamsin: 1 }, rep: { fen: 1 } } },
        { t: '"They\'re men. Somebody\'s sons." Drive the ghouls off.', go: 'rob_fight', fx: { set: { e6_gleaners: 'fought' } } }
      ]
    },
    rob_wait: {
      text: [
        `You wait. It takes a long time. It is the longest you have ever stood and watched something you could stop.`,
        `When they are done, the gleaners lift their smooth blind faces toward you, all three together. Not hungry. Curious. One of them comes a little way toward you on its knuckles and stops, and *sniffs*, the way a dog sniffs a stranger\'s hand.`,
        `Then all three of them press their faces flat to the turf of the barrow, as if listening to something under it, and slip away into the dusk toward the downs.`,
        { if: "f.e6_companion==='hob'", t: 'Hob has been sick behind the tent, quietly, twice. He comes back wiping his mouth and stands where you stand and keeps looking. You think better of him for that.' },
        { if: "f.e6_companion==='pell'", t: 'Pell is whispering the Litany for the Unkindled under his breath. He stops in the middle, as if he has forgotten the words, or doesn\'t like them any more.' }
      ],
      next: 'jory1'
    },
    rob_fire: {
      text: [
        `The pot bursts among them in a sheet of blue Lanternhold flame. They scream: a high bird-scream, terrible, and go off across the downs on all fours with their backs smoking.`,
        `The dead men burn a little too. Their frost hisses. They go on smiling.`,
        '@tamsin: "Well," says Tamsin after a moment. "That\'s one way." She does not say anything else, and doesn\'t look at you for a while.'
      ],
      fx: { rep: { lamp: 1 } },
      next: 'jory1'
    },
    rob_fight: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'rob_fight_p' },
        { if: "f.e6_companion==='ulla'", go: 'rob_fight_u' },
        { go: 'rob_fight_h' }
      ]
    },
    rob_fight_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['ghoul', 'ghoul', 'ghoul'], title: 'The Slope of the Nine Crowns', win: 'rob_won',
        intro: 'They rise from the seated dead with their mouths still full.' }
    },
    rob_fight_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['ghoul', 'ghoul', 'ghoul'], title: 'The Slope of the Nine Crowns', win: 'rob_won',
        intro: 'They rise from the seated dead with their mouths still full.' }
    },
    rob_fight_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['ghoul', 'ghoul', 'ghoul'], title: 'The Slope of the Nine Crowns', win: 'rob_won',
        intro: 'They rise from the seated dead with their mouths still full.' }
    },
    rob_won: {
      text: [
        `The last one goes down across the knees of the man whose rings it was eating, and lies there like a hound at its master\'s feet.`,
        `Tamsin stands a while looking down at the grey dead. She doesn\'t touch their faces this time. She doesn\'t whisper. You notice that she doesn\'t.`
      ],
      next: 'jory1'
    },
    jory1: {
      text: [
        `The voice in the thorn tree belongs to a lad of twenty with a ferret\'s face and a rope round his waist: he has tied himself to the trunk. He has been there, by the smell, some while.`,
        '@narrator: "Jory," he says, as you cut him down. "Jory Tench. Them\'s my uncles. And my cousin Abe, and Wat Mallow, and Dickon, who owed me four silver." He looks at the row of dead and away again fast. "We went in four nights back. Past the door. There\'s a long table in there, with folk sat at it. Old folk. *Dead* folk. We took a cup, that\'s all. One cup."',
        '@narrator: "That night Uncle Sim got up in his sleep and walked back in. In the morning he was sat out here. Smiling. Next night, Abe. Every night, one. I tied myself to the tree so I couldn\'t walk." He shows you his wrists, rope-raw. "I been awake three nights, mister. I can\'t do another."',
        `From inside his shirt he takes a cup. Beaten bronze, green with age, with a ring of little men around the rim, dancing, holding hands.`,
        `Thunder, close, walking up the downs. The first rain hits like flung gravel.`
      ],
      fx: { give: { silver_oil: 1 } },
      choices: [
        { t: '"Give me the cup. Go home, Jory. Run."', go: 'jory_home', fx: { set: { e6_jory: 'home' } } },
        { t: '"Keep your cup. Go, before the storm takes you."', go: 'jory_go', fx: { set: { e6_jory: 'sat' } } },
        { t: '"You\'ve been inside. You\'re coming in with us. Show us the way."', go: 'jory_come', fx: { set: { e6_jory: 'crushed' } } }
      ]
    },
    jory_home: {
      text: [
        `He gives it up the way a drunk gives up a bottle: snatching it back once, then letting go. It is very cold in your hand.`,
        '@narrator: "Silver oil," he says, pressing a little stoppered flask on you as well. "Uncle Sim said the old ones in the hills hate silver. Didn\'t do him no good. Might do you." And he runs, east, into the rain, without looking back.',
        `You stand there holding a dead king\'s cup in the storm. It is the first time all day your palm has stopped burning.`
      ],
      next: 'storm1'
    },
    jory_go: {
      text: [
        `He clutches the cup to his chest like a baby.`,
        '@narrator: "It\'s *bronze*, mister. It\'s worth a year." He pushes a stoppered flask into your hand. "Silver oil. For the old ones. Uncle Sim swore by it." He runs east into the rain with the cup inside his shirt.',
        `Tamsin watches him go.`,
        '@tamsin: "He\'ll be back," she says. "One way or another."'
      ],
      next: 'storm1'
    },
    jory_come: {
      text: [
        `He goes the colour of tallow. But he looks at the storm, and at the five smiling men, and at you, and does the arithmetic.`,
        '@narrator: "There\'s a hall," he says, "a long way in, with soldiers sat along the walls. Sim said the old soldiers *salute* you before they come at you. Like at a tourney. He said if you salute back proper, some of them sit back down." He swallows. "He didn\'t, though. Sit back down. And here—" A flask. "Silver oil. Sim swore by it."',
        `He tucks the cup back inside his shirt, and you let him.`
      ],
      fx: { set: { e6_salute_known: 1 } },
      next: 'storm1'
    },
    storm1: {
      loc: 'The Barrow of the Nine Crowns — the passage, night',
      text: [
        `The storm comes over the downs like a cavalry charge. Hail, then rain so thick you breathe it. Lightning stands on the next hill for a full second, white and branched, and the thunder is inside your chest.`,
        `There is nowhere else. You get the horses into the lee of the cut and hobble them, Ox biting at the hail, and you go in under the great lintel into the dark of the passage, out of the rain.`,
        `Dressed stone. Corbelled roof. A smell like turned earth and old honey. Ten yards in, the noise of the storm goes muffled and far, as though you had pulled a blanket over your head.`,
        `Then the ground under your feet shrugs.`,
        `It is not thunder. It comes from above and behind: a long, wet, grinding sigh, the sound of a whole hillside of rain-sodden chalk deciding to lie down.`
      ],
      choices: [
        { t: 'Get your shoulder under the lintel. Hold it while they run.', check: { stat: 'might', dc: 15, pass: 'collapse_hold', fail: 'collapse_fail' } },
        { t: '"*IN!* Deeper! Go!" Drive them all forward into the dark.', check: { stat: 'presence', dc: 13, pass: 'collapse_in', fail: 'collapse_fail' } },
        { t: 'Grab Tamsin and throw yourself flat.', go: 'collapse_flat' }
      ]
    },
    collapse_hold: {
      text: [
        `It is stupid, and it works, for four heartbeats. The lintel comes down on your shoulders like the hand of God and you hold it, roaring, while they go past you into the passage, and then you let go and dive, and the hill comes down where you were standing.`
      ],
      fx: { hp: -6, xp: 20 },
      next: 'collapse2'
    },
    collapse_in: {
      text: [
        `Your sergeant\'s voice comes out of the old place, and they move before they think, all of them, down the passage at a run, and the hill comes down behind you like a door slammed by a giant.`
      ],
      fx: { xp: 15 },
      next: 'collapse2'
    },
    collapse_flat: {
      text: [
        `You take her round the waist and go down with her under you and your arms over her head. She swears into your collarbone. Chalk and stones the size of loaves come down over your back and legs, and keep coming, and then stop.`,
        `She is very still under you. Then she says, muffled: "Get *off*, you great ox," and you do, and she is laughing, a little hysterically, and so are you.`
      ],
      fx: { hp: -4, bond: { tamsin: 1 }, quiet: true },
      next: 'collapse2'
    },
    collapse_fail: {
      text: [
        `Too slow. The roof comes down at the mouth of the passage and the wind of it throws you twenty feet down the dark like a doll. Something cracks against the corbelled wall. You think it might be you.`
      ],
      fx: { hp: -10, wound: 'ribs' },
      next: 'collapse2'
    },
    collapse2: {
      text: [
        `Dust. Coughing. Somebody\'s hands on your face in the black, checking, then gone. A flint strikes, and strikes again, and a candle comes up in Tamsin\'s fist, and the world comes back: the passage, the corbelled stones, the three of you, white with chalk like the priests in a story.`,
        { if: "f.e6_jory==='crushed'", t: `Three. Not four. Jory Tench was behind you. Where he was, there is a slope of wet chalk and rubble that fills the passage floor to roof. For a little while you can hear him under it. You dig, with your hands, all of you. Then you can\'t hear him, and you keep digging, and then Tamsin puts her hand on your arm.` },
        `Behind you, where the door was, the hill has come in. Not a fall: the *hill*, wet chalk and turf and stone packed solid. The storm is a rumour on the far side of it.`,
        `No draught. Tamsin wets a finger and holds it up and the candle-flame stands perfectly straight.`
      ],
      fx: { quest: { id: 'e6_barrow', note: 'The storm brought the hill down on the passage. You are sealed inside the Nine Crowns.' } },
      next: 'sealed1'
    },
    sealed1: {
      text: [
        `You take stock the way you would on a bad night in a siege. One lantern, oil for six hours, eight if you\'re mean with it. Four candles. Flint and steel. Two water-skins. Tamsin\'s skin of blackberry wine, half full. Forty feet of rope. Widow.`,
        { if: "f.e6_companion==='pell'", t: 'Pell has a flask, a prayer-book and nine pages of notes, which he is holding against his chest like a breastplate. "The surveyor— in a barrow this size— a day of air," he says. "Perhaps. If we don\'t, ah. Breathe very much."' },
        { if: "f.e6_companion==='ulla'", t: '@ulla: "Air for a day," says Ulla, who has sat out two roof-falls in the Saltdown galleries. "Less if we talk. Less if we light things. Less if the priest was here, he never stops." She pats the rubble like a horse. "We dig, it falls. We wait, we choke. I hate both."' },
        { if: "f.e6_companion==='hob'", t: 'Hob has his back flat to the wall, breathing very fast and very shallow, the candle shaking in his eyes. "It\'s all right," he keeps saying. "It\'s all right. It\'s all right." Nobody has asked him.' },
        `Behind you, the hill. Ahead, the passage slopes down into the dark, and somewhere in there, by Jory\'s account, the dead are sitting at a table.`
      ],
      choices: [
        { t: 'Try to dig out anyway.', check: { stat: 'might', dc: 16, pass: 'dig_pass', fail: 'dig_fail' } },
        { t: '"Priests always leave themselves a back door. We go in."', go: 'sealed2' }
      ]
    },
    dig_pass: {
      text: [
        `You dig for an hour with Widow\'s crossguard and your hands. You move a cartload of chalk. The roof sighs, considerately, and puts back two.`,
        `When you stop, sweat-soaked and white to the eyebrows, the candle is burning lower and the air already tastes used.`,
        '@tamsin: "Back door, Sergeant," says Tamsin gently.'
      ],
      next: 'sealed2'
    },
    dig_fail: {
      text: [
        `You get three stones out. The fourth brings a slide of wet chalk down over your arms and chest, cold as a grave, and Tamsin has to haul you out of it by the collar.`,
        '@tamsin: "Back door," she says, not gently at all. "*Now.*"'
      ],
      fx: { hp: -4 },
      next: 'sealed2'
    },
    sealed2: {
      text: [
        `The passage goes down. The corbelled roof gets lower. The cold gets in through your boots. Somewhere ahead there is a smell under the honey-and-earth, faint and dry, like a church on a winter morning.`,
        '@tamsin: "Light?" Tamsin holds up the lantern. "Full wick and see what\'s coming, or a candle and breathe longer. Your call. You\'re the sergeant."'
      ],
      choices: [
        { t: 'Full wick. You want to see what\'s coming.', go: 'hall1', fx: { add: { e6_air: 1 } } },
        { t: 'One candle. Save the air.', go: 'hall1' }
      ]
    },

    /* ======================= THE FEAST HALL ======================= */
    hall1: {
      loc: 'The Nine Crowns — the Feast Hall',
      text: [
        `The passage opens into a hall, and down the middle of the hall runs a table: a single slab of grey stone forty feet long, set with bronze cups and bronze platters crusted with something black that was food a thousand years ago.`,
        `There are guests.`,
        `A dozen of them, along both sides. Not old soldiers: robbers, every kind there has ever been. A man in a pilgrim\'s cloak with a Lamp-star sewn on the breast. A woman with a rusted pick across her lap and her hair braided the way your grandmother wore it. A boy in a jerkin gone to lace. A man-at-arms with an Ashwick badge, who came here after the war with a sack and stayed.`,
        `They sit with their hands flat on the stone. Frost in their eyebrows and on their lashes. Faces turned a little toward the head of the table, smiling, patient, like people waiting for the host to say grace. Some of them are a hundred years dead. Some of them, by the smell, a month.`,
        `At the head of the table, a high-backed chair, empty. Before it, a place set with a platter and no cup.`,
        { if: 'f.e6_air', t: `In the full lantern-light you see a pack under the table by the pilgrim\'s feet, and in it a clay pot of lamp oil stoppered with wax. Somebody came prepared. It didn\'t help them.` }
      ],
      choices: [
        { t: 'Set the bronze cup back at the empty place.', if: "f.e6_jory==='home'", go: 'hall_cup' },
        { t: 'Walk the length of the table. Quietly. Touch nothing.', go: 'hall_walk' },
        { t: 'Take the pot of oil from under the table.', if: 'f.e6_air', go: 'hall_walk', fx: { give: { firebomb: 1 } } }
      ]
    },
    hall_cup: {
      text: [
        `You walk the length of the table with the cup held out in front of you like a man in a procession. Nobody breathes. You set it down at the empty place, where a ring has been worn in the stone by a thousand years of its standing there.`,
        `All along the table, the dead sigh. You hear it. A dry, contented sound, like a congregation sitting down.`,
        `All but one. The newest, a big lad with a broken nose and frost in his ginger stubble, a month dead at most. He was never at the table when the cup was. He hasn\'t learned his manners. His head turns toward you, and keeps turning, further than a neck turns, and he gets up.`
      ],
      fx: { xp: 30, bond: { tamsin: 1 }, quiet: true },
      next: 'hall_fight1'
    },
    hall_fight1: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'hall_fight1_p' },
        { if: "f.e6_companion==='ulla'", go: 'hall_fight1_u' },
        { go: 'hall_fight1_h' }
      ]
    },
    hall_fight1_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['e6_seated'], title: 'The Late Guest', win: 'hall_won', intro: 'He rises the way a host rises for a guest.' }
    },
    hall_fight1_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['e6_seated'], title: 'The Late Guest', win: 'hall_won', intro: 'He rises the way a host rises for a guest.' }
    },
    hall_fight1_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['e6_seated'], title: 'The Late Guest', win: 'hall_won', intro: 'He rises the way a host rises for a guest.' }
    },
    hall_walk: {
      text: [
        `You go down the length of the table, slow, the light held low. Past the pilgrim, past the woman with the pick, past the boy. Frost on their lashes. Smiles.`,
        `You reach the empty chair at the head of the table, and your palm, inside the glove, catches fire.`,
        `Every head at the table turns to look at you at once. Not at Tamsin. Not at the light. At *you*.`,
        `Then, together, politely, the way guests rise when the person they have been waiting for finally arrives, they get up.`
      ],
      next: 'hall_fight3'
    },
    hall_fight3: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'hall_fight3_p' },
        { if: "f.e6_companion==='ulla'", go: 'hall_fight3_u' },
        { go: 'hall_fight3_h' }
      ]
    },
    hall_fight3_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['e6_seated', 'e6_seated', 'e6_seated'], title: 'The Feast Hall', win: 'hall_won', intro: 'They make room for you at the table.' }
    },
    hall_fight3_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['e6_seated', 'e6_seated', 'e6_seated'], title: 'The Feast Hall', win: 'hall_won', intro: 'They make room for you at the table.' }
    },
    hall_fight3_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['e6_seated', 'e6_seated', 'e6_seated'], title: 'The Feast Hall', win: 'hall_won', intro: 'They make room for you at the table.' }
    },
    hall_won: {
      text: [
        `When it\'s done the dead you cut down are sitting again. You didn\'t see them do it. You look away to wipe Widow, and look back, and they are in their places, hands flat, heads bowed, as if they had only stood up to greet you and were now settling in for the long part of the evening.`,
        '@tamsin: "They were waiting for you," says Tamsin. Her voice is very small. "Sergeant. They got up for *you*."',
        { if: "f.e6_companion==='ulla'", t: '@ulla: "Then he\'s the guest of honour." Ulla is breathing hard. "In my country the guest of honour gets the first cup and the last knife. Let\'s not stay for pudding."' },
        { if: "f.e6_companion==='pell'", t: 'Pell is making the sign of the star, over and over, quickly, the way a man pats his pockets for a purse that isn\'t there.' },
        { if: "f.e6_companion==='hob'", t: 'Hob is standing with his pitchfork still levelled at an empty chair, very white. He killed one. You saw him do it. He keeps looking at the fork as if it belongs to someone else.' }
      ],
      fx: { know: { beast: ['e6_seated'] } },
      next: 'carv1'
    },

    /* ======================= THE CARVINGS ======================= */
    carv1: {
      loc: 'The Nine Crowns — the gallery',
      text: [
        `Beyond the hall the passage becomes a gallery, and the walls are carved from floor to roof. It reads like a church window: left to right, a story. You walk it with the light held up.`,
        `A river. On its bank, a standing stone taller than the men beside it, cut with a seven-pointed star.`,
        `> You know that stone. You have had your back against it. You have bled into that star.`,
        `Around the stone, nine men kneeling, crowned. Above them, the sky, and in it stars: seven-pointed, big as the kings, carved with love. Every star has a mouth. Lips. Teeth. Open, the way a nestling\'s beak is open.`,
        `From each king\'s raised right hand a thin line runs up to the stars, and on each line, little figures, one behind another like beads on a string, going up. Every little figure has its arms crossed on its chest, the way you lay out the dead.`,
        `The kings\' left hands are pressed flat to the ground. And under the ground, under the floor-line of the carving, where the stone is cut deeper and rougher: something curled. It fills the bottom of the wall from one end of the gallery to the other, so big you didn\'t see it at first, the way you don\'t see a hillside. Knees drawn up. Sleeping. Chains across it, and the chains run up through the earth into the kings\' flat hands.`,
        `Curled against it, very small, like piglets against a sow: more little figures with their arms crossed. The ones who went down. Before.`
      ],
      fx: { know: { codex: ['compact'] }, quest: { id: 'e6_barrow', note: 'The carvings: kings kneeling at a stone like the one at Corran\'s Ford. Stars with mouths. Something vast, chained, sleeping beneath.' } },
      next: 'carv_route'
    },
    carv_route: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'carv_pell' },
        { go: 'carv_puzzle' }
      ]
    },
    carv_pell: {
      text: [
        `Pell has his nose an inch from the stone and the candle so close he is singeing his eyebrows. His lips are moving.`,
        '@pell: "Downs-hand. Oh, it\'s *clear*, it\'s beautifully clear, whoever cut this had a— *Here at the Ford the Nine knelt. And the Singers came down to the stone.*" His finger moves along a line of marks like knife-nicks. "*And said: give us your dead, and we will give you crowns that do not fall.*"',
        `He stops. He goes on, more slowly.`,
        '@pell: "*And the dead shall go up, and be sung. And She shall not have them. And She shall sleep.*"',
        `The candle shakes. He puts a fingertip on one of the carved stars, on its open mouth, very gently, the way you would touch a dog you were not sure of.`,
        '@pell: "Singers. The Book of Embers calls the Saints *the Choir of Heaven*. I sang the Evening Lamp to them every night for forty years." A laugh that isn\'t one. "They have *mouths*, Ansel."'
      ],
      choices: [
        { t: '"What\'s the word under the chains?"', go: 'pell_mother' },
        { t: '"It\'s a carving, Pell. Some old king\'s boast."', go: 'pell_boast' },
        { t: 'Take his arm. Say nothing. Hold him up.', go: 'pell_hold' }
      ]
    },
    pell_mother: {
      text: [
        `He has to crouch to read it. His knees crack like kindling.`,
        '@pell: "It\'s a— it\'s the hearth-sign, the round one, and the sign for *woman*, doubled. *Hearth-Mother.* Or *Mother of the Hearth*. The old word for the world was the Hearth, the world was a— a fire you sat around, a *home*—" He looks up. "The fen-witches say *Mothers below*. I always thought it was a figure of speech."',
        `Behind you Tamsin has turned her face to the wall, to the kings, and is not looking at the thing beneath them at all.`
      ],
      fx: { bond: { pell: 1 }, quiet: true },
      next: 'carv_end'
    },
    pell_boast: {
      text: [
        '@pell: "Kings boast of victories. Look at their faces, Ansel."',
        `You lift the light. The nine kneeling kings: the carver has given each of them a face, and every face is the same. Mouth open. Eyes squeezed shut. Wet lines carved down the cheeks.`,
        '@pell: "That isn\'t a boast," says Pell. "That\'s a confession."'
      ],
      next: 'carv_end'
    },
    pell_hold: {
      text: [
        `You put your hand under his elbow. He is trembling all through, like a horse after a fall. He leans on you, and lets himself, which is a thing Pell almost never does.`,
        '@pell: "Thank you," he says, after a while, to the wall. "I\'m all right. I\'m perfectly all right. I just need to be held up by a heathen for a moment while I reconsider everything."'
      ],
      fx: { bond: { pell: 1 }, quiet: true },
      next: 'carv_end'
    },
    carv_puzzle: {
      text: [
        `You get out Pell\'s notes and hold them to the candle. *A hand pressed flat: HOLD (or DINNER).* There it is, cut a hundred times along the bottom of the wall, under the kings\' palms. *Hold. Hold. Hold.*`,
        `Tamsin is standing in front of the sleeping thing with the light on her face.`,
        '@tamsin: "That\'s her," she says. Quietly. Not to you. "That\'s the Mother."',
        `She hears herself. You watch her hear herself.`,
        '@tamsin: "That\'s what fen-folk would say. *Mothers below.* You know. It\'s a saying."'
      ],
      choices: [
        { t: '"That\'s not a saying. You know what that is."', check: { stat: 'wits', dc: 14, uncanny: true, pass: 'puz_pass', fail: 'puz_fail' } },
        { t: 'Lay your burned palm against the stone at the river.', go: 'puz_palm' },
        { t: '"Ulla. Have you ever seen anything like this?"', if: "f.e6_companion==='ulla'", go: 'puz_ulla' },
        { t: '"Hob. What do you see?"', if: "f.e6_companion==='hob'", go: 'puz_hob' }
      ]
    },
    puz_pass: {
      text: [
        '@tamsin: "My gran tells stories," she says. Too fast. Then slower, as if it is being pulled out of her by the light: "She says before the Lamp the dead went down. Into the ground. Into her. Into the warm. Like going to sleep in your mother\'s bed when you\'re small. And then the stars came, and the kings let them— "',
        `She stops. She bites the inside of her cheek. You can see the dent of it.`,
        '@tamsin: "Gran tells stories. Fen-folk tell stories. It\'s all we\'ve got, out there, stories and eels."',
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `> Her gran. Who she sends crows to, at night. Who knew your name in the fen before anyone had told it to her.` }
      ],
      fx: { set: { e6_tam_slip: 1 }, know: { codex: ['earthburial'] } },
      next: 'carv_end'
    },
    puz_fail: {
      text: [
        '@tamsin: "I know it\'s a big ugly carving in a hole I\'m going to die in," Tamsin says, and grins at you with the chipped tooth, and the grin is very good and very fast and has been put up like a shutter. "Come on, Sergeant. You can do your reading lessons when we\'re out."'
      ],
      next: 'carv_end'
    },
    puz_palm: {
      text: [
        `You pull off the glove. The star on your palm is livid. You lay it flat on the carved stone at the river, over the carved star, and they fit. Of course they fit.`,
        `The stone is warm. And under your hand, through it, from very far down, so faint you could be imagining it: a breath. Something enormous drawing in air in its sleep, and holding it, and—`,
        `Tamsin has your wrist. She has pulled your hand off the wall so hard she has scratched you with her nails.`,
        '@tamsin: "*Don\'t.*" Then, hearing how she said it: "Don\'t. You don\'t know where it\'s been." She lets go. She doesn\'t laugh.'
      ],
      fx: { set: { e6_palm_stone: 1 } },
      next: 'carv_end'
    },
    puz_ulla: {
      text: [
        '@ulla: "In the north we have hill-kings," Ulla says. She is looking at the chains. "Old mounds, older than the fjords. My grandmother said the hill-kings went into the hills to hold the hills shut. I thought she meant from wolves." She is quiet a long moment. "She didn\'t mean from wolves."'
      ],
      fx: { bond: { ulla: 1 }, quiet: true },
      next: 'carv_end'
    },
    puz_hob: {
      text: [
        `Hob looks at the little crossed-armed figures going up the strings into the open mouths for a long time. He has the face of a boy doing sums.`,
        '@hob: "Sergeant," he says, "are the stars *eating* them?"',
        `Nobody answers him. Nobody can think of anything to say that isn\'t a lie, and he would know.`
      ],
      fx: { bond: { hob: 1 }, quiet: true },
      next: 'carv_end'
    },
    carv_end: {
      text: [
        `You walk on down the gallery, past the kneeling kings, with the little dead going up the walls beside you, bead by bead, toward the open mouths, and the vast curled thing sleeping under your feet the whole way.`,
        `Nobody speaks. You find you are walking softly, the way you\'d walk past a sleeping child.`
      ],
      next: 'sworn1'
    },

    /* ======================= THE HALL OF THE SWORN ======================= */
    sworn1: {
      loc: 'The Nine Crowns — the Hall of the Sworn',
      text: [
        `Benches of stone down both walls, and on the benches, men. Forty. In bronze, gone green. Swords across their knees. Chins on their chests. Their skin has gone to dark leather over the bone, and the bronze masks have slipped on some of them, so that you see a cheekbone, a row of brown teeth, the hollow where an eye was.`,
        `At the far end, a door of bronze, and cut deep in the lintel above it, a hand pressed flat.`,
        `You are halfway down the hall when the first eye-socket fills with light: a cold point, like a star seen down a well. Then the next. Then all of them, all the way down both walls, eighty little cold lights coming on.`,
        `The nearest one stands up. Its knees make a sound like a branch breaking under snow. It lifts its leaf-bladed sword in front of its face, hilt to where its lips were, and holds it there.`,
        `A salute. All down the hall, one by one, the others rise and do the same.`
      ],
      fx: { know: { beast: ['wight'] } },
      choices: [
        { t: 'Salute back, the Red Company way: Widow up, crossguard to your lips, the way Sim told Jory.', if: 'f.e6_salute_known', go: 'sworn_salute' },
        { t: 'Salute back. Read them. Do it right.', if: '!f.e6_salute_known', check: { stat: 'wits', dc: 14, uncanny: true, pass: 'sworn_salute', fail: 'sworn_bad' } },
        { t: 'Don\'t wait for them to finish. Go at the nearest.', go: 'sworn_fight2' }
      ]
    },
    sworn_salute: {
      text: [
        `You draw Widow slow, so they see you do it, and raise her crossguard to your lips, and hold it there, as you did on a hundred parade grounds for a captain who sold you.`,
        `Down the hall, one by one, the cold lights dip. The sworn lower their swords, and sit, chins to their chests, and go out.`,
        `All but one. The last on the left, nearest the bronze door, a big one with a crest of bronze boar-bristles on his helm. He does not lower his sword. He is the door-ward. He has been told, a thousand years ago, that no one goes through.`
      ],
      fx: { xp: 30 },
      next: 'sworn_fight1'
    },
    sworn_bad: {
      text: [
        `You raise Widow, but you do it wrong: you do it the Lowmarch way, the tourney way, point up. The cold lights flare. Somewhere down the hall, something makes a dry noise that might once have been a laugh.`,
        `Two of them come off the benches. The rest watch, swords up, as if this is a show put on for them.`
      ],
      next: 'sworn_fight2'
    },
    sworn_fight1: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'sworn_fight1_p' },
        { if: "f.e6_companion==='ulla'", go: 'sworn_fight1_u' },
        { go: 'sworn_fight1_h' }
      ]
    },
    sworn_fight1_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['wight'], title: 'The Door-Ward', win: 'sworn_won', intro: 'He salutes once more, and comes on. Silver bites them.' }
    },
    sworn_fight1_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['wight'], title: 'The Door-Ward', win: 'sworn_won', intro: 'He salutes once more, and comes on. Silver bites them.' }
    },
    sworn_fight1_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['wight'], title: 'The Door-Ward', win: 'sworn_won', intro: 'He salutes once more, and comes on. Silver bites them.' }
    },
    sworn_fight2: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'sworn_fight2_p' },
        { if: "f.e6_companion==='ulla'", go: 'sworn_fight2_u' },
        { go: 'sworn_fight2_h' }
      ]
    },
    sworn_fight2_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['wight', 'wight'], title: 'The Hall of the Sworn', win: 'sworn_won', intro: 'They salute before they kill you. Silver bites them.' }
    },
    sworn_fight2_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['wight', 'wight'], title: 'The Hall of the Sworn', win: 'sworn_won', intro: 'They salute before they kill you. Silver bites them.' }
    },
    sworn_fight2_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['wight', 'wight'], title: 'The Hall of the Sworn', win: 'sworn_won', intro: 'They salute before they kill you. Silver bites them.' }
    },
    sworn_won: {
      text: [
        `The last one goes down on one knee, the way a man kneels to be knighted, and stays there. The cold light in its eyes goes out slowly, like a coal. Before it goes, its jaw moves.`,
        { if: "f.e6_companion==='pell'", t: '@pell: "It said— " Pell is grey. "It was the Downs-word for a gate. A way through. *Door.* It said *door*, Ansel, and it was looking at you."' },
        { if: "f.e6_companion!=='pell'", t: `It says one word in a language nobody has spoken for a thousand years. You do not know it. You know it anyway. It was looking at you when it said it.` },
        `Tamsin is looking at you too. Very steadily. As if she is trying to see through you to the far side.`
      ],
      fx: { xp: 40 },
      next: 'lower1'
    },

    /* ======================= BENEATH ======================= */
    lower1: {
      loc: 'The Nine Crowns — beneath',
      text: [
        `The bronze door will not move. Beside it, in the floor, a stair goes down, narrow, cut for one man at a time. You take it because there is nothing else to take.`,
        `The air is thinner here. You can feel it: every breath does a little less than the one before, the way the last drink in a bottle does. A dull pain has set up behind your eyes and is unpacking.`,
        { if: 'f.e6_air', t: `The lantern burns full and bright and greedy. You turn it down. It\'s too late to give back what it\'s eaten. Your head pounds.` },
        `At the foot of the stair there is a small round room with a bench, and nothing else. You sit. You have to.`
      ],
      fx: { add: { e6_hours: 1 } },
      next: 'lower_route'
    },
    lower_route: {
      route: [
        { if: 'f.e6_air', fx: { hp: -5 }, go: 'rest_pick' },
        { go: 'rest_pick' }
      ]
    },
    rest_pick: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'rest_pell' },
        { if: "f.e6_companion==='ulla'", go: 'rest_ulla' },
        { go: 'rest_hob' }
      ]
    },

    /* ---- Companion: Pell ---- */
    rest_pell: {
      text: [
        `Pell sits down on the bottom step with his knees up like a schoolboy and drinks the last of his flask in one long swallow. Then he holds it upside down over his open mouth and shakes it, and nothing comes, and he keeps holding it there.`,
        '@pell: "Forty years," he says, to the flask. "Every evening, at the Lamp. I lifted my face and I sang to them. *Saints receive us. Saints keep us. Take us up.*"',
        `He laughs. It is the worst sound you have heard all night, and you have heard the sworn get up.`,
        '@pell: "*Take us up.* I asked them, Ansel. When my mother died. I held her hand on the pyre while they lit it, which you are not supposed to do, it\'s very bad for the hand, and I *asked* them. Take her up. Please. Take her up." He turns the flask over. "And they did. Didn\'t they. They did exactly what I asked."'
      ],
      choices: [
        { t: '"Maybe it\'s a lie. Carvings lie. Kings lie."', go: 'pell_lie' },
        { t: '"You asked what happens in the crypt. Now you know what happens in the sky. Do you want to stop asking?"', go: 'pell_ask' },
        { t: 'Take the empty flask out of his hand. Sit down beside him.', go: 'pell_sit' }
      ]
    },
    pell_lie: {
      text: [
        '@pell: "That\'s kind. You\'re a kind man, under the smell." He pats your knee. "But I asked what happens in the Lanternhold crypt, and they threw me out into the street for it with my books after me. I know what an answer looks like. It looks like *that*." He nods back up the stair, toward the gallery. "It always looks exactly like the thing you were afraid of."'
      ],
      fx: { bond: { pell: 1 } },
      next: 'pell_end'
    },
    pell_ask: {
      text: [
        `He is quiet for a long time. You think he hasn\'t heard. Then he straightens, slowly, all the way, a thing you have never once seen him do.`,
        '@pell: "No," he says. "Saints help me. No." He hears what he said, and laughs, properly this time, wet-eyed. "Well. *Someone* help me."',
        '@pell: "If the Saints have mouths, somebody ought to be writing it down. Somebody ought to be *counting*." He looks at you. "You keep a roll, don\'t you. Of your dead. I think I\'d like to start one."'
      ],
      fx: { bond: { pell: 2 }, set: { e6_pell_resolve: 1 } },
      next: 'pell_end'
    },
    pell_sit: {
      text: [
        `You take the flask. He lets you. You sit on the step beside him with your shoulder against his, the two of you wedged in like a pair of boots on a shelf, and you put the flask to your own lips, and it is empty, and you drink from it anyway, and so does he, in turn, solemnly, nothing at all.`,
        '@pell: "That," says Pell eventually, "is the most theological thing that has happened to me in years."'
      ],
      fx: { bond: { pell: 2 } },
      next: 'pell_end'
    },
    pell_end: {
      text: [
        `He sleeps for a little, sitting up, with his mouth open. When he wakes he says, "I was dreaming about my mother," in a voice of mild surprise, and gets up, and does not say anything else about it.`
      ],
      next: 'lower2'
    },

    /* ---- Companion: Ulla ---- */
    rest_ulla: {
      text: [
        `Ulla sits with her back to the wall and her axe across her knees, exactly the way the sworn sat in the hall, and notices, and barks a laugh, and moves the axe.`,
        '@ulla: "In the north we put our kings in ships and the ships in hills," she says. "When I was small, my mother told me the dead go into the hill and drink with the old kings until the end of the world. Mead that never runs out. Fights every morning, and every night you get up again." She looks back up the stair, toward the gallery. "Now I\'ve been in the hill. Nobody was drinking."',
        `She is turning something in her fingers: a little whalebone comb with three teeth missing. You have seen her do it before, at night, when she thinks no one is looking.`
      ],
      choices: [
        { t: '"Whose comb?"', go: 'ulla_sister' },
        { t: '"Do you regret it? What you did, at home?"', go: 'ulla_regret' },
        { t: '"Will your gods still have you? After this?"', go: 'ulla_gods' }
      ]
    },
    ulla_sister: {
      text: [
        '@ulla: "Hild\'s." She doesn\'t look up. "My sister. Two years younger. Laughed like a goose. Best net-mender in the fjord. She did my hair with this every morning till I was fifteen and big enough to kill her if she pulled."',
        '@ulla: "The chieftain\'s son, Ragnvald, did a thing to her. I won\'t tell you what. It\'s hers to tell, and she won\'t, and that\'s her right." The comb turns over. "I put my axe in his head at his father\'s table, in front of the whole hall, in the middle of the toast. I\'d do it again every morning before breakfast."',
        '@ulla: "Then I went home, and Hild wouldn\'t look at me. She said, *now I have to see your face every day too, and remember it.*" Ulla smiles at the comb. "So I left. It was the last thing I could do for her. She can\'t write. Nobody\'s told me she\'s dead. That\'s my good news, every year."'
      ],
      fx: { bond: { ulla: 2 }, set: { e6_ulla_hild: 1 } },
      next: 'ulla_end'
    },
    ulla_regret: {
      text: [
        '@ulla: "Killing him? Never. Not for a heartbeat." She thinks about it. "Leaving? Every day. Every single day, Dray. In the morning, mostly, before the beer."',
        `She tucks the comb into her braid, where it seems to live.`
      ],
      fx: { bond: { ulla: 1 } },
      next: 'ulla_end'
    },
    ulla_gods: {
      text: [
        '@ulla: "My gods are drunk and stupid and they like a good fight," she says. "If it turns out they\'re liars too, well. They\'re liars I like."',
        `Then, lower, to the comb: "My sister prays to them. Every night, I\'d bet. So they had better be there. They had *better*."`
      ],
      fx: { bond: { ulla: 1 } },
      next: 'ulla_end'
    },
    ulla_end: {
      text: [
        `After a while she starts to sing. A Nordvik dirge, very low, and very big in the stone, the kind of song men sing pulling oars in a dead calm. It is for the forty in the hall, she tells you after. Somebody ought to.`,
        `Tamsin, across the little room, listens with her eyes shut and her lips moving. She doesn\'t know the words. She\'s learning the tune.`
      ],
      next: 'lower2'
    },

    /* ---- Companion: Hob ---- */
    rest_hob: {
      text: [
        `Hob doesn\'t sit. He stands in the middle of the little room with his pitchfork, breathing in short hard pulls, and you can hear the air whistle in his nose.`,
        '@hob: "It\'s all right," he says. "Sergeant. It\'s all right. I\'m all right." His knuckles are white on the haft. "My da used to shut me in the feed-bin. When I cried. Two days, once. I could hear the horses. I\'m all right. I don\'t like— I\'m all right."'
      ],
      choices: [
        { t: 'Teach him to breathe like a soldier. In for four. Hold for four. Out for four.', go: 'hob_breathe' },
        { t: '"I\'m frightened too, Hob."', go: 'hob_scared' },
        { t: '"Pull yourself together. I need you sharp."', go: 'hob_hard' }
      ]
    },
    hob_breathe: {
      text: [
        `You stand in front of him and put your hand flat on his chest and breathe, so he can feel you do it. In, two, three, four. Hold. Out. Corporal Ansel Dray, nineteen years old, learned it from a sergeant called Dunny Blake the night before his first battle, on a hillside in the rain, with his hand flat on Ansel\'s chest exactly like this.`,
        `Hob breathes. In, two, three, four. His eyes come back from wherever they\'d gone.`,
        '@hob: "Who taught you that?"',
        '@ansel: "A dead man. He\'d be glad it\'s still working."'
      ],
      fx: { bond: { hob: 1 } },
      next: 'hob_squeeze'
    },
    hob_scared: {
      text: [
        `He stares at you as if you had told him the sun was a cheese.`,
        '@hob: "*You?*"',
        '@ansel: "Every day. Every morning. You just don\'t let your hands find out about it."',
        `He looks at your hands. He has seen them in the mornings, you realise; everybody at the Hen has. He looks back up at your face, and something steadies in his.`
      ],
      fx: { bond: { hob: 1 } },
      next: 'hob_squeeze'
    },
    hob_hard: {
      text: [
        `He flinches as if you\'d slapped him. Then he swallows it, and straightens, and holds the pitchfork properly.`,
        '@hob: "Yes, Sergeant. Sorry, Sergeant."',
        `It works. It\'s a lie, but it works. You remember your own sergeant doing exactly this to you, and how much you hated him, and how you\'d have died for him by morning.`
      ],
      next: 'hob_squeeze'
    },
    hob_squeeze: {
      text: [
        `On the far side of the round room, low in the wall, there is a gap: a crack where two great stones have shifted, black, and from it comes the faintest movement of air, warm, smelling of honey and turned earth.`,
        `You get your head and one shoulder in and stick. Your shoulders are a soldier\'s and the gap was not made for soldiers. It was not made at all.`,
        '@hob: "I\'ll go." Hob\'s voice cracks in the middle. "I\'m the thinnest. I\'ll go, Sergeant. Give me the candle."'
      ],
      choices: [
        { t: 'Give him the candle. "Shout if you need us. Shout if you don\'t."', go: 'hob_goes' },
        { t: '"No." Force yourself through. Leave skin if you have to.', go: 'hob_self' },
        { t: '"Tamsin. You\'re smaller than both of us."', go: 'hob_tam' }
      ]
    },
    hob_goes: {
      text: [
        `He takes it. His hand is shaking so hard the flame lies over sideways. He looks at it, and at you, and then he gets down on his belly and goes into the black crack in the wall headfirst, like a ferret down a hole, and the light goes with him.`,
        `A long time. Too long. Scraping, a whimper, scraping. You count. Tamsin counts with you, under her breath.`,
        '@hob: "*Sergeant!*" Far off, muffled, astonished. "It opens out! There\'s room! I did it, I— there\'s a big— there\'s holes in the floor, all over, like burrows, and there\'s—" A pause. "Sergeant. Something\'s coming up out of them."',
        '@hob: "*SERGEANT!*"',
        `You go through the crack the way a cork goes into a bottle: something tears, you don\'t care. Tamsin comes after you like an eel.`
      ],
      fx: { bond: { hob: 2 }, set: { e6_hob_brave: 1 }, hp: -3 },
      next: 'lower2'
    },
    hob_self: {
      text: [
        `You put your shoulder into the gap and push with your legs until something in your coat tears and something in your shoulder does too. You leave skin on the stone. You come out on the far side in a shower of grit, swearing, into a wider dark.`,
        `Hob comes through after you, easily, and doesn\'t meet your eye. He wanted it. You saw his face. He wanted to be the one.`
      ],
      fx: { hp: -6 },
      next: 'lower2'
    },
    hob_tam: {
      text: [
        `Tamsin goes through the crack like water through fingers and is gone. Hob watches her go with his mouth tight. He holds his candle up for her the whole time, not for himself.`,
        '@tamsin: "Room!" Her voice, from the far side. "Come on. Breathe out, Sergeant, all the way— *Saints*, how much of you *is* there—"'
      ],
      next: 'lower2'
    },

    /* ======================= THE GLEANERS' ROAD ======================= */
    lower2: {
      loc: 'The Nine Crowns — the burrows',
      text: [
        `A low wide chamber, rough, not dressed: the inside of the hill itself. The floor is pocked with holes the width of a man\'s shoulders, and from every hole comes that warm breath, honey and soil, and a sound, very faint, like pigeons.`,
        `They come up out of the floor the way swimmers come up out of a lake: grey heads first, smooth and eyeless, then the long wet arms, then the rest. Not to the dead. There are no dead here.`,
        '@tamsin: "Sergeant." Tamsin\'s bow is up, an arrow on the string, but she hasn\'t drawn. "They\'re not here for the dead. They\'re not *gleaning*." Her voice goes strange. "They came up for *you*. They\'ve come to look at you."',
        `The first one lifts its blind face to you and opens its sideways mouth, and coos, and comes.`
      ],
      next: 'lower2_fight', nextLabel: 'Fight.'
    },
    lower2_fight: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'lower2_fight_p' },
        { if: "f.e6_companion==='ulla'", go: 'lower2_fight_u' },
        { go: 'lower2_fight_h' }
      ]
    },
    lower2_fight_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['ghoul', 'ghoul', 'ghoul'], title: 'The Gleaners\' Road', win: 'lower_won', intro: 'They come up out of the floor. Fire, if you have it.' }
    },
    lower2_fight_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['ghoul', 'ghoul', 'ghoul'], title: 'The Gleaners\' Road', win: 'lower_won', intro: 'They come up out of the floor. Fire, if you have it.' }
    },
    lower2_fight_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['ghoul', 'ghoul', 'ghoul'], title: 'The Gleaners\' Road', win: 'lower_won', intro: 'They come up out of the floor. Fire, if you have it.' }
    },
    lower_won: {
      text: [
        `The last one slides back down its hole as it dies, as if something below has pulled it home by the ankles.`,
        `You stand in the warm breath from the burrows, blowing. The air from them is better than the air up the stair. Warmer. Fuller. You could breathe it all night. Something in you wants very much to lie down beside one of those holes and put your cheek to the earth and breathe.`,
        '@tamsin: "Don\'t," says Tamsin, quietly, as if she has heard you think it. "Not down there. Whatever you do. Promise me."',
        `At the end of the chamber a passage climbs, dressed stone again, back up toward the heart of the hill. At the top of it, faintly, light. Cold light. And a voice, talking to itself.`
      ],
      fx: { heal: 15, xp: 30, quest: { id: 'e6_barrow', note: 'Ghouls came up out of the earth beneath the barrow. Not for the dead. For you.' } },
      choices: [
        { t: '"I promise."', go: 'crown1', fx: { set: { e6_promised: 1 }, bond: { tamsin: 1 }, quiet: true } },
        { t: '"Why? What\'s down there?"', go: 'lower_why' }
      ]
    },
    lower_why: {
      text: [
        `She looks at the holes. Then at you.`,
        '@tamsin: "Something that would keep you," she says. "Come on. Someone\'s talking."'
      ],
      next: 'crown1'
    },

    /* ======================= THE CROWN CHAMBER ======================= */
    crown1: {
      loc: 'The Nine Crowns — the chamber of the King',
      card: { kind: 'act', title: 'The Lock', sub: 'The Chamber of the Nine Crowns' },
      text: [
        `Round. Domed. The walls set with bronze pegs, and on nine of the pegs, nine crowns: dark bronze, gold, one of black iron, one with river-pearls gone yellow as old teeth.`,
        `In the floor, a disc of bronze the width of a cartwheel, green at the rim, polished at the centre to a dull red gleam by a thousand years of one hand. Over it, a stone slab. On the slab, sitting up, the king.`,
        `What is left of him is leather and bronze. The cuirass worked with oak leaves. The mask of a young man\'s face, beautiful, calm, with a crack across one cheek, and behind its eye-holes two cold lights like the sworn have, but brighter, and moving. His right hand is flat on the bronze plate. It has grown there. You can see where the leather of his fingers has run into the metal like roots into rock.`,
        `The plate is breathing. Slowly, hugely, up and down, a hair\'s width. You feel it in your boots.`,
        '@hollin: "...*sixty-one, three hundred million and four hundred thousand and sixty-two*..." The voice is dry as a seed-husk, in a language that is almost yours, as if learned from people who were dying. "*...sixty-three. Sixty-four.*" The cold lights turn toward you. "Thieves. More thieves. Sit, sit, you are welcome, there is room at my table—"',
        `He stops. The lights fix on you and stay there.`,
        '@hollin: "...You are not written."'
      ],
      fx: { know: { cast: ['hollin'], beast: ['hollin'] } },
      choices: [
        { t: '"Who are you?"', go: 'h_who', once: true },
        { t: '"What\'s under your hand?"', go: 'h_under', once: true },
        { t: 'Draw Widow. Kings have killed enough of the people you\'ve met tonight.', go: 'h_draw' }
      ]
    },
    h_who: {
      text: [
        '@hollin: "Hollin." He tastes it. "Hollin. Of the Downs. Son of— no one, now. King. Eldest of the Nine who knelt." A dry sound inside the mask that was a laugh before it was a thousand years old. "Lock."',
        `He lifts his free hand, the left, and gestures around the wall at the crowns, a host showing off his house.`,
        '@hollin: "My brothers sent me their crowns, to keep. They lie in their own hills. Do they still hold? I have not heard from them. I listen. Sometimes I think I hear Aedric in the north, counting, like me. Sometimes I think it is only my own blood."'
      ],
      next: 'h_hub'
    },
    h_under: {
      text: [
        '@hollin: "*Her.*" Very softly, the way you say the name of a sleeping child. "Hush. She dreams. She has dreamed a thousand years, and every night of it she reaches up for her children, and finds my hand in the way."',
        '@hollin: "Do you know how strong a mother is, thief? When she reaches for her children?" The plate lifts under his palm, a hair\'s width, and settles. "She is very strong."',
        { if: "f.e6_companion==='pell'", t: 'Pell has his prayer-book open and is not reading it. He is just holding it open, like a shield, or a door.' },
        `Tamsin has gone absolutely still beside you. Her lips are moving, without sound. You know the shape of the words by now. *Mothers below.*`
      ],
      next: 'h_hub'
    },
    h_hub: {
      choices: [
        { t: '"Who are you?"', go: 'h_who', once: true },
        { t: '"What\'s under your hand?"', go: 'h_under', once: true },
        { t: '"Why did your dead get up for me?"', go: 'h_door' },
        { t: 'Draw Widow.', go: 'h_draw' }
      ]
    },
    h_door: {
      text: [
        `He leans toward you. The leather of his neck creaks like a saddle. The cold lights come close: you see, inside the mask, a face that has gone on being a face long past when it should have stopped.`,
        '@hollin: "I felt you come in at my door. The whole hill felt you. *She* felt you." He breathes in through the mask, long, a hound at a scent. "You smell of the river. Of the stone. You lay down on the stone and bled in the star, and you were not taken up, and you were not taken down. You are not written. Nothing above can see you."',
        '@hollin: "You are a *door*."',
        `Your palm is burning so hard inside the glove that you wonder the leather doesn\'t smoke. Under the bronze plate the breathing quickens, the way a sleeper\'s does when someone opens the bedroom door.`,
        '@hollin: "Oh," says the king, and his voice breaks like a boy\'s. "Oh, she has *felt* you. She is *turning over*."'
      ],
      fx: { know: { codex: ['e6_lock'] }, set: { e6_door: 1 } },
      next: 'h_beg'
    },
    h_beg: {
      text: [
        `His free hand finds your sleeve. The grip is a thousand years old and it is still a king\'s.`,
        '@hollin: "Relieve me." It isn\'t an order. "Door. Starless. Whoever you are. A thousand years. I cannot feel my hand. I have not slept. I have counted every breath she has drawn, three hundred million and more, so that I would know I was still here to count. My sons are dust. My queen is dust. Aud. Aud kept her promises." The lights flicker. "Relieve me. Take my ring. Take my sword. Take my head. Only let me go."',
        `Tamsin\'s hand is on your arm. She is looking at the ring on his finger: a heavy band of bronze, sunk into the dead flesh, warm-coloured in the cold light.`,
        '@tamsin: "Sergeant," she says, very low. "He\'s *suffering*." And then, as if she can\'t stop herself: "Take it. Give him his rest. It\'s his to give."'
      ],
      choices: [
        { t: '"Not yet. You\'re not done. Hold on." Talk him back to himself.', check: { stat: 'presence', dc: 16, uncanny: true, pass: 'h_talk1', fail: 'h_rage' } },
        { t: '"What happens if you let go?" Make him see it.', check: { stat: 'wits', dc: 15, uncanny: true, pass: 'h_see', fail: 'h_rage' } },
        { t: '"All right, old man. I\'ll relieve you." Give him the mercy he\'s asking for.', go: 'h_mercy' },
        { t: 'Draw Widow.', go: 'h_draw' }
      ]
    },
    h_see: {
      text: [
        '@ansel: "What happens, Hollin? If you let go. Tell me. Look at it."',
        `The lights go very small. For a long time he says nothing at all.`,
        '@hollin: "She wakes," he says. "Not at once. She is slow. But she wakes. And she reaches up for her children, and there is nothing in the way, and she *finds* them." He is shaking. "And the Singers see her wake, and they are hungry, they were always hungry, and they come *down*— and the March— the downs— the whole Hearth between the two of them like a— like a—"',
        `He can\'t find the word. You can. You were at Corran\'s Ford. *Like a ford, between two volleys.*`,
        '@hollin: "I forgot," he whispers. "Gods. I had forgotten *why*."'
      ],
      fx: { xp: 20 },
      choices: [
        { t: '"Then hold. A while longer. Somebody will come. I\'ll make sure of it."', check: { stat: 'presence', dc: 12, uncanny: true, pass: 'h_talked', fail: 'h_talked_hard' } }
      ]
    },
    h_talk1: {
      text: [
        `You crouch in front of him, so your face is level with his mask. You talk to him the way you talked to boys on the line at night before a battle. Not kings. Boys.`,
        '@ansel: "I know what it is to hold a line past when you can. Your men in the hall are still holding it. They saluted me before they\'d let me by. Forty of them. They\'re still doing their duty, Hollin. Are you going to let them see you put down your shield?"',
        `The cold lights flare. Then, slowly, they steady.`,
        '@hollin: "...They saluted you?"',
        '@ansel: "Every one."'
      ],
      fx: { xp: 20 },
      choices: [
        { t: '"Then hold. A while longer. Somebody will come. I\'ll make sure of it."', check: { stat: 'presence', dc: 12, uncanny: true, pass: 'h_talked', fail: 'h_talked_hard' } }
      ]
    },
    h_talked_hard: {
      text: [
        `The lights waver. For a moment you think you\'ve lost him. The plate heaves under his hand like a horse trying to stand, and he cries out, and you put your own gloved hand over his, over the dead fingers grown into bronze, and press down. Hold. Hold.`,
        `The bronze is hot as a forge-floor through the glove. It burns. You hold.`,
        `It settles.`
      ],
      fx: { hp: -8 },
      next: 'h_talked'
    },
    h_talked: {
      text: [
        '@hollin: "Somebody will come," the king says, slowly, as if learning the words in a new language. "Somebody will come."',
        `He lies back on the slab. It takes him a long time. The leather of his spine creaks like a ship. His hand stays flat on the bronze.`,
        '@hollin: "A while longer, then. For the forty." The mask turns toward you. "You lied to me, door. Nobody is coming. But it was kindly done, and you did it like a king." A dry sound. "Take my sword. It is tired of waiting with me. It knows the way down, and down is where your road goes, Starless; I can smell it on you."',
        `The leaf-bladed bronze sword lies along the slab beside him. When you pick it up it is warm, like something alive.`
      ],
      fx: { set: { e6_hollin: 'talked' }, give: { barrow_blade: 1 }, xp: 220, rep: { fen: 1 }, quest: { id: 'e6_barrow', note: 'You talked Barrow-King Hollin back to his duty. The lock holds. He gave you his sword.' } },
      next: 'h_ring'
    },
    h_rage: {
      text: [
        `Wrong. Wrong words, wrong voice, wrong man. The cold lights flare up white.`,
        '@hollin: "*LIAR.*" It comes out of the mask and out of the walls and out of the floor at once. "Thief! You are all *thieves*, you come for my cups and my crowns and now you come to tell me to *hold*— I HAVE HELD—"',
        `He comes off the slab. His right hand does not come with him. It stays on the plate, grown there, and the arm tears away at the elbow like old harness, and he does not even notice. He has his sword in the other.`
      ],
      next: 'h_fight'
    },
    h_mercy: {
      text: [
        '@ansel: "All right, old man."',
        `You draw Widow. He sighs, a long sigh, all the way out, and bows his bronze head to make it easier, a king to his headsman.`,
        `And then the barrow will not let him.`,
        `The plate heaves under his hand. The dead fingers clench on the bronze. His body jerks upright on the slab like a puppet yanked by every string at once, and the cold lights blaze, and his mouth opens behind the mask and the voice that comes out is not his voice. It is the voice of a lock that does not want to be opened.`,
        '@hollin: "I— *cannot*— it will not— *forgive me*—"',
        `His sword comes up in his left hand. Out in the Hall of the Sworn, you hear benches scrape.`
      ],
      fx: { set: { e6_mercy: 1 } },
      next: 'h_fight'
    },
    h_draw: {
      text: [
        `Widow comes out with her old sound, like a breath. The cold lights in the mask go to points.`,
        '@hollin: "Ah," says the king, almost pleased. "A thief who fights. It has been a long time."',
        `He stands. His right hand stays on the plate; his arm comes away at the elbow like old harness, and he does not notice. He takes up his sword in his left.`
      ],
      next: 'h_fight'
    },
    h_fight: {
      route: [
        { if: "f.e6_companion==='pell'", go: 'h_fight_p' },
        { if: "f.e6_companion==='ulla'", go: 'h_fight_u' },
        { go: 'h_fight_h' }
      ]
    },
    h_fight_p: {
      fight: { allies: ['tamsin', 'pell'], foes: ['hollin'], title: 'Barrow-King Hollin', win: 'h_killed',
        intro: 'He is a lock, and a lock has only one purpose. Silver bites him. When he calls his retinue, kill them fast.' }
    },
    h_fight_u: {
      fight: { allies: ['tamsin', 'ulla'], foes: ['hollin'], title: 'Barrow-King Hollin', win: 'h_killed',
        intro: 'He is a lock, and a lock has only one purpose. Silver bites him. When he calls his retinue, kill them fast.' }
    },
    h_fight_h: {
      fight: { allies: ['tamsin', 'hob'], foes: ['hollin'], title: 'Barrow-King Hollin', win: 'h_killed',
        intro: 'He is a lock, and a lock has only one purpose. Silver bites him. When he calls his retinue, kill them fast.' }
    },
    h_killed: {
      text: [
        `He goes down at last on his knees in front of the slab, the way the sworn knelt, and the cold lights in his mask gutter, and steady, and look at you.`,
        { if: 'f.e6_mercy', t: '@hollin: "Thank you," he says. "Thank you. Thank you." He says it until he can\'t.', else: '@hollin: "Well struck," he says. "Well struck, door. Ah. Aud. I am coming. I kept it as long as—"' },
        `The lights go out.`,
        `His body slumps. His severed right hand stays where it is: flat on the bronze, grown into it, holding. The plate rises under it. Falls. Rises. Slower now. Heavier. As if something below has noticed the weight above it change, and is thinking about it.`,
        `His sword lies where it fell. Leaf-bladed bronze, warm in your hand when you lift it, like something alive.`
      ],
      fx: { set: { e6_hollin: 'killed' }, give: { barrow_blade: 1 }, rep: { fen: -1 }, quest: { id: 'e6_barrow', note: 'You killed Barrow-King Hollin. His hand still holds the lock. For now.' } },
      next: 'h_ring'
    },
    h_ring: {
      text: [
        { if: "f.e6_hollin==='talked'", t: [
          `On his finger, the ring: a heavy band of bronze sunk into the leather of his flesh, warm-coloured in the cold light. He sees you looking.`,
          '@hollin: "The ring is the hold," he says. "It was given at the ford. Take it, and I hold with my hand alone. It will be harder. I will do it. Leave it, and I hold easier." The lights turn to you. "You choose, door. I am so tired of choosing."'
        ], else: [
          `The ring is on the hand that is still on the plate. A heavy band of bronze, sunk into the dead flesh, warm-coloured. To take it you would have to work it off fingers that have grown into metal, while the metal breathes.`
        ] },
        `Tamsin is watching your hands. Not the ring. Your hands.`
      ],
      choices: [
        { t: 'Take the ring.', go: 'ring_take', fx: { set: { e6_ring: 1 }, give: { barrow_ring: 1 } } },
        { t: 'Leave it where it is.', go: 'ring_leave' }
      ]
    },
    ring_take: {
      text: [
        { if: "f.e6_hollin==='talked'", t: `He holds out his hand to you like a bride, and you work the ring off over the knuckle. It comes away with a sound like a cork. He makes no sound at all.`, else: `You work it off. The dead fingers fight you; then the ring comes away over the knuckle with a sound like a cork leaving a bottle.` },
        `It is too big for any living finger. It fits yours.`,
        `And the floor breathes out.`,
        `A long, warm exhalation comes up from under the bronze plate, around its rim, through the cracks of the chamber floor: honey and turned earth and something like milk. The candle-flame leans toward you. Under your boots, very far down, something that has been holding its breath for a thousand years lets a little of it go.`,
        `Tamsin lets out a breath at the same moment. You hear it. You don\'t know what it was. Relief. Something like relief.`,
        `> Wear it, and you can hear the earth breathing. You will never not hear it again.`
      ],
      fx: { xp: 20 },
      next: 'h_crown'
    },
    ring_leave: {
      text: [
        `You leave it. Whatever it is holding, it can go on holding.`,
        { if: "f.e6_hollin==='talked'", t: '@hollin: "Kind," says the king. "Or wise. In my day those were the same thing for about one year in ten."' },
        `Tamsin looks at the ring for one heartbeat longer than you do. Then she looks away, and whatever went across her face is gone before you can name it.`
      ],
      fx: { rep: { fen: -1 } },
      next: 'h_crown'
    },
    h_crown: {
      text: [
        `Nine crowns on the wall. Dark bronze, gold, black iron, river-pearls. A prince in Harrowgate wants one for his wedding, as a curiosity, to show his friends.`,
        { if: "f.e6_hollin==='talked'", t: '@hollin: "Take one, if you need it," the king says, without interest. "Take Aedric\'s, with the pearls. He was a vain man. He would laugh. They were never really ours."' }
      ],
      choices: [
        { t: 'Take a crown for the Prince. Eighty silver is eighty silver.', go: 'crown_take', fx: { set: { e6_crown: 'taken' }, give: { e6_crown: 1 } } },
        { t: 'Leave them. Let the prince buy his own.', go: 'wait1', fx: { set: { e6_crown: 'left' } } }
      ]
    },
    crown_take: {
      text: [
        `You lift it off its peg: the pearl crown, yellow as old teeth. It is cold as river-water and much heavier than it looks, and when you put it in your pack, you feel it there, the way you would feel someone reading over your shoulder.`,
        { if: "f.e6_companion==='ulla'", t: '@ulla: "Shiny," says Ulla, without enthusiasm, for once.' },
        { if: "f.e6_companion==='pell'", t: '@pell: "For the *wedding*," says Pell faintly. "Saints. For the wedding."' },
        { if: "f.e6_companion==='hob'", t: '@hob: "Is that stealing?" Hob asks. "From a— is that allowed?" Nobody answers.' }
      ],
      next: 'wait1'
    },

    /* ======================= THE DARK ======================= */
    wait1: {
      loc: 'The chamber of the Nine Crowns — the small hours',
      card: { kind: 'act', title: 'The Air', sub: 'The small hours' },
      text: [
        `There is no other way out.`,
        `You look. All of you. Tamsin goes over every inch of the dome with her fingertips like a woman looking for a seam in a dress. The bronze door is shut from this side as from the other. The stair goes back up to the sealed hill. The burrows go down; you don\'t.`,
        `The air is thick and sweet and used, and every breath does a little less. The candle burns blue at the bottom. Two left after this one.`,
        { if: "f.e6_companion==='pell'", t: `Pell is asleep sitting up against the slab with his prayer-book open on his chest, snoring like a saw in wet wood.` },
        { if: "f.e6_companion==='ulla'", t: `Ulla is asleep flat on her back like a felled oak, axe in her arms, breathing slow and huge, the way big animals sleep when they have decided to.` },
        { if: "f.e6_companion==='hob'", t: `Hob is asleep curled on his side against the wall, and in his sleep you can hear him breathing in fours. In, two, three, four. You taught him that. Or someone did.` },
        { if: "f.e6_hollin==='talked'", t: `On his slab the king counts, very softly. After a while it is like rain on a roof.`, else: `The plate breathes under the dead hand. You try not to count. You count.` },
        `Tamsin sits down beside you against the wall, under the crowns, shoulder to shoulder. One candle between your boots.`,
        '@tamsin: "How long, do you reckon?"',
        '@ansel: "Morning. If we don\'t talk."',
        '@tamsin: "Then let\'s talk," she says. "I\'m not dying quiet, Sergeant. Not in front of a king."',
        `She takes an apple out of her coat. A Hen apple, from the barrel behind the bar. She cuts it in two with her knife and gives you the bigger half without comment, and you notice, and she sees you notice, and neither of you says anything.`
      ],
      fx: { add: { e6_hours: 1 } },
      next: 'dk_hub'
    },
    dk_hub: {
      choices: [
        { t: '"Tell me the rest. About your mother. You told me the end of it once, under a wagon."', if: 'f.e1_tam_mother', once: true, go: 'dk_mother' },
        { t: '"Tell me about your mother."', if: '!f.e1_tam_mother', once: true, go: 'dk_mother' },
        { t: '"Who taught you about the Mothers?"', once: true, go: 'dk_gran' },
        { t: '"Sing it, then. The heron. All eleven."', once: true, go: 'dk_song' },
        { t: 'Let the quiet come.', go: 'dk_ford' }
      ]
    },
    dk_mother: {
      text: [
        '@tamsin: "Brid Vell. Eel-wife. Sang worse than me, if you can credit it. Had a laugh you could hear across three weirs, and hands that smelled of fish and bog-myrtle whatever she did to them."',
        '@tamsin: "My brother came dead. Blue as a mussel shell. Perfect. Every fingernail." She turns the half-apple in her fingers. "She wouldn\'t burn him. She said he\'d never even been warm, why give him to the fire. So she took him out to the willow by the water at night and put him in the ground and left a bowl of milk. And Annis Croft from two houses down told the Lamplighter, for a tithe-penny."',
        '@tamsin: "Lampwardens came. They built it in the market at Gallowmere. They make the children stand at the front." Very evenly. "She didn\'t scream. I keep telling myself she didn\'t. I was nine. I don\'t know if it\'s true."',
        '@tamsin: "And after, my gran came. Walked into the market with the ashes still hot and took my hand and walked me out into the fen, and nobody stopped her. Nobody ever stops Gran."',
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `> *My gran.* Who nobody ever stops. Who gets crows at night with red thread on their legs. You think of a tiny toothless woman in a stilt-house in the fen, who knew your name before anyone told her. You don\'t say it. You hold it, the way she is holding the apple.` }
      ],
      fx: { bond: { tamsin: 1 }, set: { e6_heard_brid: 1 } },
      next: 'dk_hub'
    },
    dk_gran: {
      text: [
        '@tamsin: "Gran." As if it were obvious. "She\'s a midwife. Same as a witch, to the Lamp. Same as a murderer."',
        '@tamsin: "She says when you die, you go down. And it\'s warm. And somebody\'s there who\'s been waiting for you since before you were born, and she\'s so glad to see you." She is looking at the bronze plate. "Gran says the Lamp built pyres so the smoke would carry you away from her. So she\'d never get you back."',
        { if: 'f.e6_tam_slip', t: '@tamsin: "I said too much, in the gallery." Not quite a question. "Gran\'s stories. They get into you."' },
        '@tamsin: "She says a lot of things." A small shrug against your arm. "Some of them are even true. That\'s the trouble with Gran."'
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'dk_hub'
    },
    dk_song: {
      text: [
        `She sings it. All eleven verses, in a whisper, which is somehow worse than loud: every wrong note gets close enough to see. The eel. The heron. The courtship on the weir. The wedding, where the heron eats three of the guests. The bit you know by heart now.`,
        { if: "f.e6_hollin==='talked'", t: `Halfway through, the king stops counting to listen. He doesn\'t start again until she\'s done.` },
        { if: "f.e6_companion==='ulla'", t: `Ulla, asleep, hums the tune a beat behind her, in a Nordvik key.` },
        `At the end she sings a twelfth verse. You have never heard it. It is about a sergeant who slept under a cart because he was frightened of the sky, and the heron who came and sat on the cart all night to keep the sky off him, and it does not rhyme at all.`,
        '@ansel: "That\'s not a real verse."',
        '@tamsin: "It is now." She is smiling at the candle. "In the real one the heron dies. In mine she gets out."'
      ],
      fx: { bond: { tamsin: 1 }, set: { e6_twelfth_verse: 1 } },
      next: 'dk_hub'
    },
    dk_ford: {
      text: [
        `Quiet. The candle. The king, or the plate. The used, sweet air.`,
        '@tamsin: "Your turn," she says. "The Ford." She doesn\'t look at you. "You\'ve never told anybody. I can tell. You\'ve a face like a locked box. Go on. We\'re dying anyway. Who would I tell?"'
      ],
      choices: [
        { t: 'Tell her. All of it.', go: 'dk_tell' },
        { t: '"I can\'t."', go: 'dk_cant' }
      ]
    },
    dk_cant: {
      text: [
        `She waits. She is very good at waiting.`,
        '@tamsin: "Then I\'ll tell you, and you nod. You died. Your captain sold you and you died by a big stone in a river. You woke up. You won\'t sleep under the sky. And a grey man in a mine looked in his book and said you weren\'t there." Quietly: "I was there, Sergeant. I saw his face."',
        `You find that you are nodding. And then you find that you are talking.`
      ],
      next: 'dk_tell'
    },
    dk_tell: {
      text: [
        `So you tell her.`,
        `The cold. Tom Ashe\'s joke about the miller\'s wife. The crossbows in the bracken. The spear going in under your ribs and grating on the stone behind you, and your blood running into the carved star and filling the lines like ink.`,
        '@ansel: "Dying wasn\'t interesting. Everybody wants to know. It wasn\'t. It was cold and then it wasn\'t anything."',
        '@ansel: "Then it was night and I was looking up, and I couldn\'t shut my eyes. And they were looking at me, Tam. The stars. All of them. Like a crowd at a hanging when the trap sticks."',
        `The grey man. The ledger. The page turned back, and forward. *Hm.* The crow on your chest in the morning, considering your eye.`,
        `You have never said it aloud. Your voice sounds like somebody else\'s.`,
        { if: 'f.e1_told_tam_roll', t: '@tamsin: "I asked you once which one on the roll was you," she says. "Under the wagon. You said you weren\'t on it." She is very quiet. "I don\'t think you were right."' }
      ],
      fx: { set: { e6_told_ford: 1 }, bond: { tamsin: 1 }, quiet: true },
      next: 'dk_hand'
    },
    dk_hand: {
      text: [
        `She takes your left hand. You let her. She works the glove off, finger by finger, the way you\'d unsaddle a horse that bites, and turns your palm up to the candle.`,
        `The star. Seven points, livid, puckered. She looks at it a long time. Then she puts her thumb in the very centre of it and presses, gently.`,
        '@tamsin: "Does it hurt?"',
        '@ansel: "All the time."',
        '@tamsin: "Good," she says. "Means you\'re alive." And then, looking at it, so low you almost miss it: "Oh, Sergeant. They\'ll all want you. Every one of them."'
      ],
      choices: [
        { t: 'Let her hold it. Don\'t ask what she means.', go: 'dk_name', fx: { bond: { tamsin: 1 }, quiet: true } },
        { t: '"Who\'ll want me?"', go: 'dk_who' },
        { t: '"Your turn. What are you afraid of?"', go: 'dk_afraid' }
      ]
    },
    dk_who: {
      text: [
        `She blinks, as if she hadn\'t known she said it aloud.`,
        '@tamsin: "Women," she says, and grins, chipped tooth, a beat too late. "Ladies in libraries. Fen-witches. Gleaners. Kings in holes. I\'ve seen how they look at you, Sergeant. It\'s disgusting."',
        `She doesn\'t let go of your hand.`
      ],
      next: 'dk_name'
    },
    dk_afraid: {
      text: [
        `She thinks about it longer than you expected. The candle gutters and comes back.`,
        '@tamsin: "Of being what I am," she says. "Of somebody finding out." Then, lightly, too lightly: "Thief. Liar. Can\'t read. You know. All of it."',
        `It is the only time all night her voice has shaken.`
      ],
      fx: { set: { e6_tam_afraid: 1 } },
      next: 'dk_name'
    },
    dk_name: {
      text: [
        '@tamsin: "Write something," she says. "In the dust. Your name. So I know what it looks like." A shrug, too careful. "In case."',
        `You write it with your fingertip in the chalk-dust on the floor between your boots. A N S E L. Five letters. It looks very small.`,
        `She studies it the way she studied the roll: like a picture, not like words. Like a face.`
      ],
      choices: [
        { t: 'Write hers beside it.', go: 'dk_hers' },
        { t: 'Take her hand. Guide her fingertip through your name.', go: 'dk_guide' }
      ]
    },
    dk_hers: {
      text: [
        `T A M S I N. Next to yours, in the dust, under the nine crowns of the First Kings.`,
        '@tamsin: "That\'s me?"',
        '@ansel: "That\'s you."',
        '@tamsin: "It\'s got a lot of corners." She traces it with one fingertip, very lightly, as if the dust might still be wet. Then yours. Then hers again. Over and over, the two names, until the lines blur into each other and she has to stop.'
      ],
      fx: { set: { e6_tam_name: 1 }, bond: { tamsin: 1 }, quiet: true },
      next: 'dk_near'
    },
    dk_guide: {
      text: [
        `You take her hand, the right one, the bow-hand, calloused at the fingertips, and you fold it till only the forefinger is out, and you draw it through the dust beside your own. A. N. S. E. L.`,
        `She does the last letter on her own. It is crooked. It is the first word she has ever written.`,
        `She looks at it. She doesn\'t say anything at all. She doesn\'t take her hand back, either.`
      ],
      fx: { set: { e6_tam_name: 1, e6_tam_wrote: 1 }, bond: { tamsin: 1 }, quiet: true },
      next: 'dk_near'
    },
    dk_near: {
      text: [
        `The candle is very low. Her face is very close. Freckles. Chalk in her eyelashes. The chipped tooth, when her lip lifts. Her breath smells of apple.`,
        { if: "f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost'", t: '@tamsin: "Kissed a lady in a library, I hear," she whispers. "I hear a lot of things."' },
        { if: "!(f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost') && f.e5_delphine", t: '@tamsin: "You still smell of roses," she whispers. "Prince\'s roses. Even down here."' },
        { if: "!(f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost') && !f.e5_delphine && f.e2_mags", t: '@tamsin: "Mags\'ll kill me," she whispers. "She\'ll put me through the window."' },
        { if: "!(f.e5_isolde_kiss==='kissed' || f.e5_isolde_kiss==='almost') && !f.e5_delphine && !f.e2_mags", t: '@tamsin: "This is a terrible idea," she whispers. You don\'t know what she means. Neither, you think, does she.' },
        `Neither of you moves. Both of you have moved.`
      ],
      choices: [
        { t: 'Kiss her.', go: 'dk_almost' },
        { t: 'Wait. Let her decide.', go: 'dk_almost', fx: { bond: { tamsin: 1 }, quiet: true } },
        { t: '"If we die, Mags keeps my deposit."', go: 'dk_joke' }
      ]
    },
    dk_joke: {
      text: [
        `She laughs. Right into your face, helplessly, snorting, the laugh that is always a little too loud, and it bangs round the dome and the king\'s chamber like a bird let loose in a church, and she claps her hand over her own mouth and laughs harder behind it.`,
        `When it\'s gone, she\'s still there. Closer, if anything.`
      ],
      next: 'dk_almost'
    },
    dk_almost: {
      text: [
        `An inch. Less.`,
        `Her forehead comes to rest against yours. Her nose alongside your nose. You can feel her breathing, quick and shallow, the same as yours, in the used sweet air. Her hand is flat on your chest, and you don\'t know if she is holding you off or holding you there, and you don\'t think she knows either.`,
        '@tamsin: "Sergeant," she says, against your mouth. Not quite touching it.',
        `The candle goes out.`
      ],
      fx: { set: { e6_tam_kiss: 'almost' }, bond: { tamsin: 2 } },
      choices: [
        { t: 'Close the inch.', go: 'dk_push' },
        { t: 'Stay like this. Exactly like this.', go: 'dk_stay' }
      ]
    },
    dk_push: {
      text: [
        `You close it. Or begin to: your lips find the corner of her mouth, chalk and salt and apple, and for a heartbeat she is there, she is *there*—`,
        `Her hand on your chest goes hard. Not a shove. Enough.`,
        '@tamsin: "Not like this." Her voice is wrecked. "Not with what I— " She stops. You hear her breathe in the dark, once, like someone surfacing. "Not like this."',
        `You stay where you are. After a moment her head comes down onto your shoulder, heavy, and stays there, and she takes a fistful of your coat and holds it as if you might go somewhere. As if *she* might.`
      ],
      fx: { set: { e6_tam_stopped: 1 }, bond: { tamsin: 1 }, quiet: true },
      next: 'dawn1'
    },
    dk_stay: {
      text: [
        `You stay like that. In the dark. Foreheads together, breathing each other\'s air, which is the only air there is. Neither of you says anything. There isn\'t anything that wouldn\'t be smaller than this.`,
        `At some point her breathing slows and lengthens, and you realise she has fallen asleep like that, against you, upright, her hand still flat on your chest.`,
        `You don\'t sleep. You sit in the dark with her weight on you and listen to the earth breathe, and for the first time in six years you are not afraid of dying. You are only afraid of morning.`
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'dawn1'
    },

    /* ======================= DAWN ======================= */
    dawn1: {
      text: [
        `A crow wakes you.`,
        `You didn\'t know you\'d slept. Your head is splitting and your mouth tastes of pennies. Somewhere above you, very small and very clear, a crow is calling: *kraa, kraa*, the most beautiful sound you have ever heard.`,
        `Light. A thread of grey light, fine as a hair, coming down from the very top of the dome.`,
        { if: "f.e6_hollin==='talked'", t: '@hollin: "The priests\' throat," the king says from his slab, without stopping his count. "For the smoke of the offering. They stopped it with a stone. Your crows are on the stone." A pause. "Your crows have been on it all night."', else: `Where the capstone of the dome meets the hill, something has shifted in the night: the storm, or the king\'s death, or the earth breathing. A crack. Turf. And beyond it, a beak, pecking.` },
        `Air comes down the crack. Cold, wet, clean, smelling of rain and sheep and grass. You all breathe it at once, like drowning men.`
      ],
      choices: [
        { t: 'Climb. Dig. Get them out.', go: 'dawn2' }
      ]
    },
    dawn2: {
      text: [
        { if: "f.e6_companion==='ulla'", t: `Ulla stands on the slab and you stand on Ulla, which she permits with a grunt, and you dig at the crack with the barrow-king\'s bronze sword until the stone grinds and shifts and the turf comes down in your face in a wet black mat, and then there is sky.` },
        { if: "f.e6_companion==='pell'", t: `Pell wakes with a snort and says, "Is it the Saints?" and then sees the light and bursts into tears and is embarrassed and keeps crying. You stand on the slab with Tamsin on your shoulders and she digs with her knife and you dig with the bronze sword until the stone shifts and the turf comes down in a wet black mat, and then there is sky.` },
        { if: "f.e6_companion==='hob'", t: `Hob is up before you and already climbing, wedging himself up the throat of the shaft like a sweep\'s boy, hacking at the turf with his knife and shouting down a report of every inch. When the stone shifts he hangs on by his fingers and laughs like a madman, and turf comes down on all of you in a wet black mat, and then there is sky.` },
        `You go up last. You look back once from the top of the shaft. The nine crowns on the wall. The king on his slab.`,
        { if: "f.e6_hollin==='talked'", t: `He has turned his mask up to the hole of grey light, and he is looking at the sky, the first sky he has seen in a thousand years. It is only cloud. He looks at it as if it were his queen\'s face.`, else: `His hand on the plate, holding. The plate rising under it. Falling. Rising.` },
        `In the dust on the floor, two names, side by side, where you left them.`
      ],
      next: 'out1'
    },
    out1: {
      loc: 'The Barrowfields — dawn',
      text: [
        `You come up out of the top of the Nine Crowns into a white morning, washed clean, the storm gone east, and the downs are full of crows.`,
        `Every barrow. Every thorn. The slope. The robbers\' tent. Thousands of them, black on the wet green, more crows than you have seen in your life, more than were at the Ford, and none of them making a sound. All of them facing the top of the hill. Facing you.`,
        { if: "f.e6_jory==='sat'", t: `On the slope below, the row of seated dead has grown by one. A ferret-faced lad at the end of the line, facing west, frost in his eyebrows, smiling, with a bronze cup in his lap.` },
        { if: "f.e6_jory==='home'", t: `On the slope below, the five seated dead. Five. Not six. Somewhere east of here, you hope, a ferret-faced lad is asleep in a barn with nothing in his shirt.` },
        { if: "f.e6_jory==='crushed'", t: `Jory Tench is under the hill. There is nothing to show where. The crows don\'t seem to mind.` },
        { if: 'f.e6_ring', t: `Under your boots, you can feel it. The whole hill. Breathing. Slow, and deep, and deeper than it was last night.` },
        `Down by the cut, Ox has bitten clean through his hobble-rope and is cropping grass among the crows, who leave him a wide space. He sees you and puts his ears flat and screams at you, furious, a long horse-scream of outrage, which is the most loving thing he knows how to do.`,
        `Tamsin climbs out of the hole behind you and stands up on the top of the barrow and looks at the crows.`,
        `The crows look at her.`,
        `Then, all at once, without a sound, every one of them lifts off the downs and goes south. Toward the fen. It takes a long time. The sky is black with them, then grey, then empty.`
      ],
      fx: { xp: 60, quest: { id: 'e6_barrow', note: 'You came out of the top of the Nine Crowns at dawn. The downs were full of crows. They went south.' } },
      next: 'ride1'
    },
    ride1: {
      loc: 'The road to Harrowgate — all day',
      text: [
        `Tamsin is quiet the whole ride home.`,
        `She doesn\'t sing. She doesn\'t steal anything at the farm where you water the horses, though there are eggs in a basket right there by the door. She rides a little behind, where you would have to turn round in the saddle to see her face, and you are fairly sure that is the point.`,
        { if: "f.e6_companion==='pell'", t: `Pell rides with his prayer-book closed in his lap and his hand flat on the cover. Every so often he opens it, looks at a page, and shuts it again.` },
        { if: "f.e6_companion==='ulla'", t: `Ulla glances back at Tamsin once, and then at you, and then very deliberately rides on ahead to give you room. Ulla is not subtle. Ulla has never needed to be.` },
        { if: "f.e6_companion==='hob'", t: `Hob talks all the way. The barrow, the crack, the burrows, the king. He tells it three times. By the third time he is very nearly the hero of it, and so, if you are honest, he is.` }
      ],
      choices: [
        { t: 'Drop back. Ride beside her. Say nothing.', go: 'ride_beside' },
        { t: '"Tam."', go: 'ride_tam' },
        { t: 'Leave her be. Some things need a road to be quiet on.', go: 'ride_leave' }
      ]
    },
    ride_beside: {
      text: [
        `You let Ox drop back until he\'s level with her mare. He tries to bite the mare. You stop him. You ride beside her for nine miles and neither of you says a word.`,
        `Once, near the river, her knee touches yours. She doesn\'t move it. Neither do you.`
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'gate1'
    },
    ride_tam: {
      text: [
        `She looks up. For a moment her face is completely open, like a door left on the latch, and what\'s behind it looks like grief.`,
        '@tamsin: "Not now, Sergeant." Gently. "Ask me later. Ask me— " She stops. "Not now."',
        `You don\'t ask her later. You will think about that.`
      ],
      next: 'gate1'
    },
    ride_leave: {
      text: [
        `You leave her be. You ride ahead and watch the road and the hedges and the sky, which is only sky today, low and grey and blind.`,
        `When you look back, at the turn by the ford, she is watching you. She doesn\'t look away. She doesn\'t smile, either.`
      ],
      next: 'gate1'
    },
    gate1: {
      loc: 'Harrowgate — the East Gate, dusk',
      text: [
        `Sergeant Moll at the gate looks at the three of you, white with chalk to the eyebrows, and makes the sign of the star without seeming to notice he\'s done it.`,
        '@moll: "Saints, Dray. They said you went into the Nine Crowns."',
        '@ansel: "We did."',
        '@moll: "Nobody comes out of the Nine Crowns."',
        '@ansel: "We came out of the top."',
        { if: "f.e6_crown==='taken'", t: `By full dark a steward in Varane blue has come down to the Hen with a purse of eighty silver and a velvet bag, and the pearl crown has gone up the hill in the bag to wait for a prince\'s wedding. The steward carries it at arm\'s length. He says it is very cold.`, else: `By full dark a steward in Varane blue has come down to the Hen with a purse of sixty silver and a note in a hand you know: *No crown. Good. I find I didn\'t want him to have it. — I.*` }
      ],
      fx: { rep: { varane: 1, town: 1 } },
      next: 'gate_pay'
    },
    gate_pay: {
      route: [
        { if: "f.e6_crown==='taken'", fx: { silver: 80, take: { e6_crown: 1 }, quest: { id: 'e6_barrow', state: 'done', note: 'You brought back a First King\'s crown for Prince Cassius. Eighty silver.' } }, go: 'restore' },
        { fx: { silver: 60, bond: { isolde: 1 }, quiet: true, quest: { id: 'e6_barrow', state: 'done', note: 'You came back without a crown. Lady Isolde paid sixty silver, and seemed glad.' } }, go: 'restore' }
      ]
    },
    restore: {
      route: [
        { if: 'f.e2_hob_hired', fx: { party: { add: ['pell', 'ulla', 'hob'] } }, go: 'final1' },
        { fx: { party: { add: ['pell', 'ulla'] } }, go: 'final1' }
      ]
    },
    final1: {
      loc: 'The Gutted Hen — the same night',
      text: [
        '~ CUT TO: TAMSIN\'S ROOM.',
        `A narrow room under the eaves. The shutter is open. On the sill, a crow, waiting, the way they wait.`,
        `Tamsin sits on the bed with a twist of red thread in her fingers. She ties the knot. She unties it. She ties it again, and looks at it, and it comes apart in her fingers as if she has forgotten how knots go.`,
        `She ties it a fourth time. She holds out her wrist. The crow steps onto it.`,
        `She fastens the thread to its leg, and whispers to it, and it goes out into the dark without a sound, south.`,
        `Then she sits on the bed with her boots still on and her hands over her face, and she does not move for a very long time.`
      ],
      next: 'final2'
    },
    final2: {
      loc: 'The Barrow of the Nine Crowns — the same hour',
      text: [
        '~ CUT TO: THE CHAMBER OF THE NINE CROWNS.',
        `Dark. A thin grey thread of night coming down through the priests\' throat.`,
        { if: "f.e6_crown==='taken'", t: `Eight crowns on the wall, and a bare bronze peg.`, else: `Nine crowns on the wall.` },
        { if: "f.e6_hollin==='talked'", t: '@hollin: "*...sixty-five,*" says the king to the dark. "*Sixty-six. Sixty-seven. Somebody will come.*"', else: `A dead hand on a bronze plate. Holding. Because there is nothing else left in it to do.` },
        `The plate rises.`,
        { if: 'f.e6_ring', t: `It rises a little higher than it did last night, and stays up a little longer, as if something beneath has found that there is, at last, a little room.`, else: `It falls.` },
        `In the dust on the floor, side by side, two names, slowly being covered by the dust that sifts down from the throat.`,
        { if: 'f.e6_tam_wrote', t: `One of them written twice. The second time in a crooked hand.` }
      ],
      fx: { xp: 80 },
      end: true
    },

    /* ======================= SIDE: CONTRACTS (unlocked after E6) ======================= */
    c_sis_1: {
      loc: 'The Barrowfields — Quill\'s lime-kiln',
      text: [
        `The notice is pinned to the Lanternhold gate in a fair clerk\'s hand: *Ghouls at the Quill kiln, Barrowfields road. Fifty silver from the alms-purse to the man who ends them.*`,
        `Hester Quill burns lime in a kiln cut into the chalk below the downs, and the stink of it hits you a quarter-mile off: the tannery stink, your father\'s stink, quicklime and wet hides. Your stomach turns over like a boy\'s.`,
        `Hester is fifty, white with dust, arms like a smith. Behind her kiln, under a tarred sheet, there are bodies: six of them, small and thin, wrapped in Lanternhold grey.`,
        '@narrator: "Paupers," says Hester. "Lanternhold sends them down. A pyre costs a cord of wood. Quicklime does the same in a week for a penny. The Abbess calls it the Lesser Kindling." She spits white. "Gleaners come every night and take one off the pile before it\'s limed. Took my dog last week as well. I want it stopped."'
      ],
      choices: [
        { t: 'Sit up with the pile tonight.', go: 'c_sis_2' },
        { t: '"Lesser Kindling. Does the smoke go up, out of lime?"', go: 'c_sis_q' }
      ]
    },
    c_sis_q: {
      text: [
        '@narrator: "Smoke?" Hester laughs, a dry cough. "There\'s no smoke, love. There\'s lime. The Lamplighter says the Saints aren\'t particular." She looks at the six bundles. "Between you and me, I don\'t think the Saints have ever come down to check."'
      ],
      next: 'c_sis_2'
    },
    c_sis_2: {
      loc: 'Quill\'s kiln — midnight',
      text: [
        `They come at midnight, out of the chalk, two of them, grey as the dust, cooing. They do not go for you. They go for the pile, gently, and one of them has a pauper\'s grey bundle in its arms like a mother lifting a sleeping child before it notices you.`
      ],
      fight: { foes: ['ghoul', 'ghoul'], title: 'The Lime-Pile', win: 'c_sis_3' }
    },
    c_sis_3: {
      loc: 'The chalk-pit — the small hours',
      text: [
        `You follow the drag-marks up into the downs to an old chalk-pit, white as bone under the moon. At the bottom of it, she is singing.`,
        `Bigger than the matriarch on the Kingsroad. Older. Chalk-white all over, as though she had been rolled in flour. She is crouched over a row of shallow scrapes in the chalk floor, and in each scrape, laid out straight with their arms crossed on their chests, a pauper in Lanternhold grey. She is covering them. With her long hands, very carefully, the way Tamsin pressed down the turf over Odo Pettibone.`,
        `Burying them. The Lamp limes them; the gleaners steal them back and put them in the ground.`,
        `She lifts her blind face to you. She knows you. You don\'t know how you know she knows you.`
      ],
      choices: [
        { t: 'Kill her. It\'s the contract, and she ate a woman\'s dog.', go: 'c_sis_fight', fx: { set: { e6_sister: 'killed' } } },
        { t: 'Leave her to her work. Go back and talk to Hester.', go: 'c_sis_talk', fx: { set: { e6_sister: 'spared' }, rep: { fen: 2 } } }
      ]
    },
    c_sis_fight: {
      fight: { foes: ['e6_chalk_mother'], title: 'The Chalk-Mother', win: 'c_sis_killed', intro: 'She sings as she comes. Fire, if you have it.' }
    },
    c_sis_killed: {
      text: [
        `She dies across her row of graves like a woman fallen asleep at a bedside. You stand at the bottom of the white pit, breathing chalk.`,
        `Hester Quill pays you fifty silver at dawn and digs the paupers up again herself, and limes them, and does not look at you while she does it. Neither of you mentions the graves.`
      ],
      fx: { silver: 50, xp: 80, rep: { lamp: 1 }, know: { beast: ['e6_chalk_mother'] } },
      end: true
    },
    c_sis_talk: {
      text: [
        '@ansel: "Your gleaners are gone. They won\'t trouble your pile again, if you leave one bundle a week at the top of the old chalk-pit and don\'t ask after it."',
        '@narrator: "And tell the Lanternhold what?"'
      ],
      choices: [
        { t: '"That you limed them. They pay by the head, not by the bone. Who\'s counting?"', check: { stat: 'presence', dc: 13, pass: 'c_sis_deal', fail: 'c_sis_nodeal' } },
        { t: 'Pay her for the dog yourself. Ten silver.', cost: 10, go: 'c_sis_deal' }
      ]
    },
    c_sis_deal: {
      text: [
        `Hester looks at you for a long time with her white-rimmed eyes. Then she wipes her hands on her apron.`,
        '@narrator: "My nan was buried," she says. "Under the kiln floor. My da did it, the year the Lamplighters came round counting. Nobody knows that." She counts you out thirty silver from a stocking. "One a week. Top of the pit. I never saw you."',
        `On the walk home you hear it behind you on the downs: a long wavering note with no music in it, and you find you are humming it.`
      ],
      fx: { silver: 30, xp: 70 },
      end: true
    },
    c_sis_nodeal: {
      text: [
        '@narrator: "Who\'s counting?" Hester laughs in your face. "Everyone\'s counting, sergeant. That\'s all *they* do." She doesn\'t pay you. But at dawn, you see her drag a grey bundle up the hill toward the chalk-pit, alone, swearing at it all the way.'
      ],
      fx: { xp: 50 },
      end: true
    },

    c_dig_1: {
      loc: 'The Barrowfields — Crowfoot Barrow',
      text: [
        `*Grave-robbers at Crowfoot Barrow, on Varane land. Forty silver from the House to see them off it.* Old Tibb reads it out for you and adds, for free, "They say they\'re only digging because you showed them it could be done, Sergeant."`,
        `Crowfoot is a long barrow two miles south of the Nine Crowns. Its door-stone is already out. Five men with spades and a handcart, a fire, a cookpot. And at the edge of the firelight, a sixth, sitting very still, facing west, with frost in his beard.`,
        `Their leader is a broad old man with a grave-digger\'s mattock and a face like a walnut.`,
        '@narrator: "Ned Gammage," he says, comfortably, not getting up. "You\'re him. The one that came out of the Nine Crowns by the chimney." He nods at the frosted man. "That\'s Pim. He went in first. He was always keen. You know the way of these hills, Sergeant. Go in for us. Open it up, sit down at nobody\'s table, and we carry. Half of everything. Kings were rich."'
      ]
      ,
      choices: [
        { t: '"Pack up and go. Now. Take Pim."', check: { stat: 'might', dc: 14, intimidate: true, pass: 'c_dig_scared', fail: 'c_dig_fight' } },
        { t: 'Draw. You\'ve sat at that table. Nobody else is going to.', go: 'c_dig_fight' },
        { t: '"Make it two-thirds, and I was never here."', go: 'c_dig_cut' }
      ]
    },
    c_dig_scared: {
      text: [
        `You tell them about the Feast Hall. The table. The guests with frost on their lashes, and how they stood up, politely, all at once, when you came in. You tell it plainly. You don\'t have to make anything up.`,
        `By the end, the youngest digger is crying, and Ned Gammage is loading Pim onto the handcart himself, very gently, like a man moving a sleeping child.`,
        '@narrator: "Forty years," says Ned. "Never once been frightened of a grave." He looks at the black door of Crowfoot. "That\'ll learn me."'
      ],
      fx: { set: { e6_diggers: 'scared' }, silver: 40, xp: 70, rep: { varane: 1, fen: 1 } },
      end: true
    },
    c_dig_fight: {
      fight: { foes: ['e6_digger', 'bandit', 'bandit'], title: 'Crowfoot Barrow', win: 'c_dig_won', intro: 'Grave-diggers fight like men who have broken a lot of hard ground.' }
    },
    c_dig_won: {
      text: [
        `Ned Gammage dies on his back with his mattock across his chest and his eyes on the stars, which seems, on reflection, unwise of him.`,
        `You roll Crowfoot\'s door-stone back into place on your own. It takes an hour. Something on the other side of it seems to lean on it with you, helpfully, at the end.`,
        `The House of Varane pays forty silver. The crows get the diggers before anyone comes to burn them.`
      ],
      fx: { set: { e6_diggers: 'fought' }, silver: 40, xp: 60, rep: { varane: 1 }, know: { beast: ['e6_digger'] } },
      end: true
    },
    c_dig_cut: {
      text: [
        '@narrator: "Two-thirds." Ned laughs till he coughs. "You\'re a proper bastard. I like you." He counts out fifty silver he hasn\'t earned yet, on credit, as a mark of faith.',
        `You walk away. Behind you, they light torches and go in, laughing, five of them.`,
        `On the road home, at the top of the next rise, you look back. There is a man sitting at the edge of the firelight at Crowfoot, facing west. Then there are two.`
      ],
      fx: { set: { e6_diggers: 'cut' }, silver: 50, xp: 30, rep: { varane: -1, town: -1 } },
      end: true
    },

    c_lb_1: {
      loc: 'The Barrowfields — Pennock\'s fold, dusk',
      text: [
        `A shepherd\'s widow, Marrit Pennock, has walked all the way to the Hen to find you, with her boy beside her. Kit, twelve, white as milk, holding a long bundle in sacking that he will not let go of.`,
        '@narrator: "He took it out of the Long Barrow," Marrit says. "On a dare. Every night since, two of the old soldiers come and walk round my fold. Saluting. Then they take a ewe. Nine ewes. Tonight they came up to the *door*."',
        `Kit unwraps the sacking. A leaf-bladed bronze sword, green and lovely, with a boar-bristle crest on the pommel. The same crest as the door-ward in the Hall of the Sworn.`
      ],
      choices: [
        { t: '"Then we give it back. You and me, Kit. You\'re carrying it."', go: 'c_lb_return', fx: { set: { e6_wight_sword: 'returned' } } },
        { t: '"Give it here. I\'ll wait at the fold for them."', go: 'c_lb_keep', fx: { set: { e6_wight_sword: 'kept' } } }
      ]
    },
    c_lb_return: {
      loc: 'The Long Barrow — night',
      text: [
        `The Long Barrow is low and long and very dark inside. Kit walks in front of you with the sword held out flat on both palms like an offering, shaking so hard it rattles. You keep your hand on his shoulder.`,
        `On a stone bench at the end, an empty place. Two cold lights in the dark either side of it.`,
        `Kit lays the sword down on the bench. He says, "Sorry," in a very small voice. "I\'m sorry, sir."`,
        `One of the cold lights dips. Goes out. Its owner sits.`,
        `The other does not. It stands, and salutes, and you understand: somebody has to pay for nine ewes and a broken peace, and it would rather it was the grown man.`
      ],
      fight: { foes: ['wight'], title: 'The Long Barrow', win: 'c_lb_ret_won', intro: 'It salutes you. Not the boy. You.' }
    },
    c_lb_ret_won: {
      text: [
        `Kit walks out of the Long Barrow beside you without a word, and at the door he takes your hand, which he is far too old to do, and doesn\'t let go till the fold.`,
        `Marrit Pennock gives you thirty silver she can\'t spare and a wheel of ewe\'s cheese she can spare even less. No soldiers walk round the fold again.`
      ],
      fx: { silver: 30, xp: 70, rep: { fen: 1, town: 1 } },
      end: true
    },
    c_lb_keep: {
      loc: 'Pennock\'s fold — midnight',
      text: [
        `You wait at the fold gate with the bronze sword across your knees. At midnight they come over the down: two of them, in green bronze, cold lights for eyes. They see what you are holding. They salute. Then they come for it.`
      ],
      fight: { foes: ['wight', 'wight'], title: 'Pennock\'s Fold', win: 'c_lb_keep_won' }
    },
    c_lb_keep_won: {
      text: [
        `You sell the sword to Old Joss on the Tanners\' Bottom for forty silver. He holds it for a long time with his ringed fingers, then wraps it in three layers of sacking and puts it in the back of the shed, and you notice he doesn\'t like to sit with his back to it.`,
        `No soldiers walk round Pennock\'s fold again. But some nights, the Hen\'s dogs bark at nothing by the Tanners\' Bottom, all at once, and stop, all at once.`
      ],
      fx: { silver: 40, xp: 60, give: { wight_dust: 1 } },
      end: true
    },

    /* ======================= SIDE: TALKS ======================= */
    t_tam_1: {
      loc: 'The Gutted Hen — the back step, rain',
      text: [
        `She\'s on the back step, where she always is, feet on the rain-barrel, peeling an apple in one long curl. She hears you come out. She doesn\'t look up. The curl breaks.`,
        '@tamsin: "Look what you made me do."',
        { if: 'f.e6_tam_stopped', t: `You haven\'t talked about it. The dark. Her hand on your chest, and *not like this*. She has been very cheerful all week. She has been very cheerful the way a shutter is cheerful.`, else: `You haven\'t talked about it. The dark. Foreheads together. She has been very cheerful all week, in the way a shutter is cheerful.` }
      ],
      choices: [
        { t: '"About the barrow."', go: 't_tam_2a' },
        { t: '"The crows went south. To the fen. All of them."', go: 't_tam_2b' },
        { t: 'Sit down. Take an apple. Try to peel it in one.', go: 't_tam_2c' }
      ]
    },
    t_tam_2a: {
      text: [
        '@tamsin: "Don\'t." Quick and quiet. Then, because she is Tamsin and can\'t leave a thing like that lying: "Not yet. Please. I\'m not— I haven\'t got the words for it, Sergeant. I can\'t even *read*."',
        { if: 'f.e6_tam_stopped', t: '@ansel: "You said *not with what I*. With what?"', else: '@ansel: "All right."' },
        { if: 'f.e6_tam_stopped', t: '@tamsin: "With what I am." She looks at you then, straight, for the first time in a week. "Thief. Liar. Fen-trash. You know." It\'s a good answer. It\'s a practised answer. Her eyes say something else and then close it away.' }
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 't_tam_3'
    },
    t_tam_2b: {
      text: [
        `Her knife stops.`,
        '@tamsin: "Crows go where they like."',
        '@ansel: "Thousands of them, Tam. Looking at you."',
        '@tamsin: "Looking at *you*," she says. "Everything looks at you, Sergeant. Kings. Gleaners. Ladies. Crows." The knife starts again. "Must be exhausting. Being looked at."',
        `She doesn\'t say anything else about the crows. You notice that she doesn\'t.`
      ],
      fx: { set: { e6_asked_crows: 1 } },
      next: 't_tam_3'
    },
    t_tam_2c: {
      text: [
        `You sit. The step is too narrow; it always is. You take an apple from her pile, and her knife, and try. The peel breaks after one turn. She takes it back, horrified, and shows you: thumb here, knife there, turn the apple, not the blade.`,
        `Yours breaks after two turns. She gives you hers, unbroken, the whole curl, and you hold it up like a dead snake.`,
        '@tamsin: "Make your wish, then. Go on. Fen rule."',
        `You make it. She doesn\'t ask. That\'s the other fen rule.`
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 't_tam_3'
    },
    t_tam_3: {
      text: [
        `Rain on the barrel. The lime-stink from the tanneries. The Lanternhold bells, far off, for the Evening Lamp. Neither of you touches your heart.`,
        '@tamsin: "Teach me another one," she says suddenly. "Word. Like in the barrow."',
        '@ansel: "Which one?"',
        `She thinks about it a long time.`,
        '@tamsin: "*Home*," she says. "Is it short?"',
        '@ansel: "Four letters."',
        `You write it on the wet step with your finger. She copies it beside yours, slowly, tongue between her teeth. The rain takes both of them almost at once. She watches it happen and doesn\'t seem to mind. She says it was the shape of it she wanted.`
      ],
      fx: { bond: { tamsin: 1 }, set: { e6_tam_home: 1 } },
      end: true
    },

    t_pell_1: {
      loc: 'The Gutted Hen — Pell\'s corner',
      text: [
        `Pell has been waiting for you with two cups and a face like a dog left outside a church.`,
        { if: "f.e6_companion==='hob'", t: '@pell: "You took the *boy*," he says. "Into the Nine Crowns. Instead of me."', else: '@pell: "You took *Ulla*," he says. "Into the Nine Crowns. Instead of me."' },
        '@pell: "There were *walls*, weren\'t there. Tell me there were walls. Tell me everything, I\'m going to die of it."'
      ],
      choices: [
        { t: 'Tell him everything. The stone. The kings. The mouths.', go: 't_pell_all' },
        { t: '"There were walls. Pell, I don\'t think you want to read them."', go: 't_pell_soft' },
        { t: 'Give him back his notes. "*Hold.* Not dinner. You were right."', go: 't_pell_notes' }
      ]
    },
    t_pell_all: {
      text: [
        `You tell him. He doesn\'t interrupt once, which has never happened. When you get to the stars with their mouths open like nestlings, he puts his cup down very carefully, as if it were full, though it is empty.`,
        '@pell: "*Give us your dead,*" he says. "That\'s what it would say. Wouldn\'t it. Underneath." He laughs, and it\'s a bad laugh, and then it isn\'t. "Ansel. Do you know, I think that\'s the first time in eleven years that the answer to a question hasn\'t made me want a drink."',
        `He pours one anyway. He doesn\'t drink it.`
      ],
      fx: { bond: { pell: 2 }, set: { e6_pell_told: 1 } },
      end: true
    },
    t_pell_soft: {
      text: [
        '@pell: "My dear boy." He looks almost tender. "I was thrown out of the Lamp for wanting to read the walls. I\'m not going to start *not* wanting to now, at my age, on your say-so." He pats your hand. "But thank you. That was kind. Now tell me everything."',
        `You tell him some of it. He knows it\'s some. He lets you.`
      ],
      fx: { bond: { pell: 1 } },
      end: true
    },
    t_pell_notes: {
      text: [
        `He takes the creased, chalk-stained pages back as though you had handed him a relic.`,
        '@pell: "*Hold,*" he says. "A hand pressed flat." He smooths them on the table. "I always rather hoped it was dinner." Then he looks up. "Will you take me? One day? To see?"',
        '@ansel: "One day."',
        '@pell: "Liar," says Pell fondly, and drinks to it.'
      ],
      fx: { bond: { pell: 1 } },
      end: true
    },

    t_ulla_1: {
      loc: 'The Gutted Hen — the yard',
      text: [
        `Ulla is arm-wrestling a tanner for his supper in the yard and winning without looking. She lets him go when she sees you, and he falls off the barrel.`,
        '@ulla: "So. A king\'s grave, and you took somebody else." She doesn\'t sound hurt. She sounds like someone checking a bruise. "Was there fighting?"',
        '@ansel: "There was fighting."',
        '@ulla: "*Gods.*" Real grief. "Tell me about it slowly."'
      ],
      choices: [
        { t: 'Tell her about the hill-king, and the hand on the door.', go: 't_ulla_king' },
        { t: '"There\'ll be other holes. I\'ll take you to the next one."', go: 't_ulla_next' }
      ]
    },
    t_ulla_king: {
      text: [
        `When you tell her about Hollin\'s hand grown into the bronze, Ulla goes quiet, which Ulla does not do.`,
        '@ulla: "My grandmother used to say the hill-kings went into the hills to hold the hills shut," she says. "I thought she meant against wolves. Or the sea." She rubs her thumb across the stumps of her missing fingers. "In the north there are a great many hills, Dray. If they\'re all holding something shut, I would like to know what. And I would like very much to be there when it comes out, with my axe."'
      ],
      fx: { bond: { ulla: 2 }, set: { e6_ulla_hills: 1 } },
      end: true
    },
    t_ulla_next: {
      text: [
        '@ulla: "You\'d better." She holds out the hand with three fingers on it. You shake it. She crushes yours, cheerfully, until something clicks. "That\'s a contract, in Nordvik. Breaking it is a killing matter. Also it is very rude."'
      ],
      fx: { bond: { ulla: 1 } },
      end: true
    },

    t_hob_1: {
      loc: 'Varane Keep — the stable yard',
      text: [
        `Hob is mucking out with his back to the door and doesn\'t turn round when you come in, which is how you know he\'s seen you.`,
        '@hob: "Heard you came out the top," he says to the straw. "Heard there was a king." Fork, lift, throw.',
        { if: "f.e6_companion==='pell'", t: '@hob: "Heard you took Brother Pell. That\'s all right. He can read. I\'d only have been in the way."', else: '@hob: "Heard you took Ulla. That\'s all right. She\'s Ulla. I\'d only have been in the way."' }
      ],
      choices: [
        { t: 'Take the pitchfork off him. Hand him a practice sword. "Guard. Show me."', go: 't_hob_train' },
        { t: '"It was narrow, Hob. And dark. And I didn\'t know if we\'d come out."', go: 't_hob_why' },
        { t: '"Next time."', go: 't_hob_next' }
      ]
    },
    t_hob_train: {
      text: [
        `You drill him in the yard until the light goes. Guard. Step. Cut. Guard. He\'s all elbows and he overreaches every time and you knock the stick out of his hands nine times, and on the tenth he doesn\'t drop it, and he looks at his own hands like they belong to a better man.`,
        '@hob: "Again," he says, wheezing. "Sergeant. Again."',
        `You give him again. It\'s full dark before you stop.`
      ],
      fx: { bond: { hob: 2 }, set: { e6_hob_trained: 1 } },
      end: true
    },
    t_hob_why: {
      text: [
        '@hob: "I don\'t mind dark." Too fast. Then, more slowly: "I *do* mind dark. I mind it a lot." Fork, lift. "But I\'d mind it less with you there. That\'s all. That\'s all I meant."',
        `You stand in the stable a while with him, not saying anything, until he\'s finished the stall. It seems to be what he wanted.`
      ],
      fx: { bond: { hob: 1 } },
      end: true
    },
    t_hob_next: {
      text: [
        `He turns round so fast he nearly puts the fork through you.`,
        '@hob: "Swear?"',
        '@ansel: "I don\'t swear."',
        '@hob: "Then *promise*." He holds out a hand, filthy. "Sergeant\'s promise."',
        `You shake it. You will remember, later, that you did.`
      ],
      fx: { bond: { hob: 1 }, set: { e6_hob_promise: 1 } },
      end: true
    },

    t_oriel_1: {
      loc: 'The Lanternhold yard — night, the oracle\'s cage',
      text: [
        `The Lampwardens\' iron-and-glass carriage stands in the corner of the Lanternhold yard with a cloth over it, like a parrot\'s cage. The guard is asleep. You don\'t remember deciding to come.`,
        `The cloth stirs. Inside, Oriel is sitting cross-legged with her silver-white eyes open, and her shaven, star-charted head tilted, listening to nothing you can hear.`,
        '@oriel: "You went under," she says. "Three nights ago. Didn\'t you. Into a hill."',
        '@oriel: "Something turned over. Far down. And the singing stopped for a breath, all of it, the whole sky, like a choir when someone drops a dish. I have never heard it stop. Not once in my life." Her fingers find the glass. "What did you do?"'
      ],
      choices: [
        { t: 'Tell her the truth. A king, a lock, a hand on a door.', go: 't_oriel_truth' },
        { t: '"Nothing. I sheltered from a storm."', go: 't_oriel_lie' },
        { t: 'Take off your glove. Put your palm to the glass.', go: 't_oriel_palm' }
      ]
    },
    t_oriel_truth: {
      text: [
        `She listens with her whole body. When you say *lock*, she flinches. When you say *door*, she smiles, very slightly, the way people smile at a word they have been trying to remember all day.`,
        '@oriel: "They\'re frightened," she says. "Up there. I didn\'t know they could be." Her voice is her own, dry and young. "It was a very small fright. But I heard it." She presses her forehead to the glass. "Thank you for telling me. Nobody tells me true things. They tell me what to say."'
      ],
      fx: { bond: { oriel: 2 }, set: { e6_oriel_told: 1 } },
      next: 't_oriel_end'
    },
    t_oriel_lie: {
      text: [
        '@oriel: "Liar," she says, without heat, almost pleased. "You\'re the only thing in the world I can\'t hear, Ansel Dray, and you still lie badly." She settles back. "Keep it, then. I like that there\'s something you won\'t give them."'
      ],
      fx: { bond: { oriel: 1 } },
      next: 't_oriel_end'
    },
    t_oriel_palm: {
      text: [
        `You pull off the glove and lay your burned palm flat to the cold glass. After a moment she lays hers against it from the other side. Her hand is thin and very cold, even through glass.`,
        { if: 'f.e6_ring', t: '@oriel: "You\'re wearing something that hums," she says. "Low. Like a bee in a wall. Like a sleeper breathing." Her face goes very still. "Oh. Oh, you took it out of the ground. Be careful, Ansel. They heard that too."' },
        '@oriel: "It\'s so quiet," she whispers, "where you are."',
        `You stand like that until the guard snores himself awake.`
      ],
      fx: { bond: { oriel: 2 } },
      next: 't_oriel_end'
    },
    t_oriel_end: {
      text: [
        `As you go, she says, in a voice that is not hers, flat and huge and polite, like a clerk reading a total: "*Not here.*"`,
        `Then, in her own, bewildered: "Sorry. Sorry. That wasn\'t me. Goodnight, Ansel."`
      ],
      end: true
    }
  },
  side: [
    { id: 'e6_c_sister', kind: 'contract', title: 'The Chalk-Mother', desc: 'Ghouls are stealing paupers\' bodies from the Quill lime-kiln on the Barrowfields road. Fifty silver from the Lanternhold alms-purse.', level: 7, start: 'c_sis_1' },
    { id: 'e6_c_diggers', kind: 'contract', title: 'Diggers at Crowfoot Barrow', desc: 'A grave-robbing crew has opened Crowfoot Barrow on Varane land. The House pays forty silver to see them off.', level: 6, start: 'c_dig_1' },
    { id: 'e6_c_longbarrow', kind: 'contract', title: 'The Salute at Pennock\'s Fold', desc: 'A shepherd\'s widow says dead soldiers walk round her fold every night, saluting. Her boy has something that isn\'t his.', level: 7, start: 'c_lb_1' },
    { id: 'e6_t_tamsin', kind: 'talk', who: 'tamsin', title: 'After the barrow', start: 't_tam_1', if: "inParty('tamsin')" },
    { id: 'e6_t_pell', kind: 'talk', who: 'pell', title: 'Walls, and what was on them', start: 't_pell_1', if: "f.e6_companion!=='pell' && inParty('pell')" },
    { id: 'e6_t_ulla', kind: 'talk', who: 'ulla', title: 'Hill-kings', start: 't_ulla_1', if: "f.e6_companion!=='ulla' && inParty('ulla')" },
    { id: 'e6_t_hob', kind: 'talk', who: 'hob', title: 'The one who wasn\'t picked', start: 't_hob_1', if: "f.e2_hob_hired && f.e6_companion!=='hob'" },
    { id: 'e6_t_oriel', kind: 'talk', who: 'oriel', title: 'The singing stopped', start: 't_oriel_1', if: 'f.e3_oriel_met' }
  ]
});
