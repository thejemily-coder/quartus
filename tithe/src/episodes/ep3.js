/* TITHE — Season One, Episode 3: "The Lamp Comes" */

/* ---- New data for Episode 3 ---- */
TITHE.ENEMIES.e3_corwin = { name: 'Warden Corwin Ashlar', hp: 40, def: 13, arm: 3, dmg: [4, 8], acc: 4, xp: 110, silver: [0, 0], tags: ['human', 'choir', 'boss'], nonlethal: true,
  moves: [{ n: 'Drill Cut', w: 3, m: 1, tele: 'squares up, perfectly, the way the manuals draw it' }, { n: 'Full Drill', w: 1, m: 1.7, heavy: true, tele: 'sets his feet and comes in with the whole of the manual at once, cut, cut, thrust' }, { n: 'Litany of the Ordeal', w: 1, m: 0, self: 'guard', tele: 'steps back and begins to pray aloud' }],
  loot: [],
  lore: 'Twenty-two, Brannagh\'s second, raised in the chapterhouse at Corvane since he could walk. He has never lost a bout. He has never fought anyone who was trying to kill him.' };
TITHE.ENEMIES.e3_wisp = { name: 'Fen-Light', hp: 10, def: 12, arm: 0, dmg: [2, 5], acc: 3, xp: 12, silver: [0, 0], tags: ['fey'], weak: ['silver', 'witchsalt'], resist: ['fire'],
  moves: [{ n: 'Flicker', w: 3, m: 1, fx: 'drain', tele: 'bobs nearer, gently, like a lamp in a window' }],
  loot: [],
  lore: 'A little light on the water. A lantern with nobody holding it. The children of the fen are told never to count them, because they will count you back.' };
TITHE.ENEMIES.e3_old_jack = { name: 'Old Jack of the Mere', hp: 68, def: 12, arm: 1, dmg: [5, 9], acc: 4, xp: 170, silver: [0, 0], tags: ['fey', 'boss'], weak: ['silver', 'witchsalt'], resist: ['fire'],
  moves: [{ n: 'Cold Hand', w: 3, m: 1, fx: 'drain', tele: 'reaches for you with a hand made of fog' }, { n: 'Drowning Light', w: 1, m: 1.7, heavy: true, fx: 'stun', tele: 'brightens until the whole mere is a single white eye' }, { n: 'The Miller\'s Wife', w: 1, m: 0, fx: 'fear', aoe: true, tele: 'wears Tom Ashe\'s face, and starts to tell a joke' }, { n: 'Gather the Lights', w: 1, m: 0, self: 'summon:e3_wisp', tele: 'calls softly across the water' }],
  loot: [['hag_hair', 1, 1], ['silver_dust', .6, 2]],
  lore: 'The oldest light on Gallowmere: a Lantern Man grown fat on a month of unburied dead. It has a hundred faces and it remembers every one. The eel-men call it Old Jack, because you are polite to things you are afraid of.' };
TITHE.ENEMIES.e3_rusk = { name: 'Rusk of the Thornwood', hp: 46, def: 13, arm: 1, dmg: [5, 9], acc: 5, xp: 120, silver: [15, 30], tags: ['human', 'boss'], nonlethal: true,
  moves: [{ n: 'Husband Speaks', w: 3, m: 1, tele: 'levels Husband, one eye shut' }, { n: 'Bolt to the Knee', w: 1, m: .8, fx: 'weaken', tele: 'drops her aim, considering your legs' }, { n: 'Point Blank', w: 1, m: 1.8, heavy: true, tele: 'walks right up to you, smiling, bow at your belly' }, { n: 'Reload', w: 1, m: 0, self: 'guard', tele: 'puts a boot in the stirrup and cranks, swearing' }],
  loot: [['knives', .5, 1]],
  lore: 'Once Lady Ermengarde Rusk of Rusk Hall. Her brother inherited; she inherited a crossbow and a grievance. She is a very good shot and a worse loser.' };
TITHE.ITEMS.e3_garter = { name: 'Rusk\'s Garter', type: 'trinket', mods: { presence: 1 }, price: 0, desc: 'Black silk with a little silver buckle, given as a receipt. Show it on the Thornwood road and the trees stop aiming at you.' };
TITHE.ITEMS.e3_arrowhead = { name: 'A Blackened Arrowhead', type: 'trinket', mods: { grit: 1 }, price: 0, desc: 'Grey goose-fletched, once. Raked out of the pyre ashes on the Market Stair. You have not told her you kept it.' };
TITHE.CODEX.e3_writ = { title: 'The Writ of the Uncounted', text: 'Sealed in white wax by the Hierarch in Corvane: "Seek out the soul that Heaven cannot number, wheresoever it hides, in witch or beast or kin; and put it to the fire, that it be counted." Lampwarden Brannagh Vey carries it. She has read it every night for a month.' };
TITHE.CODEX.e3_oracle = { title: 'The Caged Oracle', text: 'The Lamp keeps a Saint-touched seer in a carriage of iron and glass. Born blind, she hears the stars. The Lampwardens follow where she points. She has never in her life been alone in her own head.' };
TITHE.CODEX.e3_lanternmen = { title: 'Lantern Men', text: 'Lights on the fen where no one is carrying one. The eel-men say they are drawn to dead that lie unburied in the water, and that a month without burials makes them fat. You do not follow them. You do not count them. You certainly do not answer when they speak in your mother\'s voice.' };

TITHE.episode({
  n: 3, title: 'The Lamp Comes',
  logline: 'The Lamp sends its hunters to Harrowgate to find a soul that Heaven cannot count, and they will burn somebody before they leave.',
  start: 'start',
  credits: ['ansel', 'tamsin', 'brannagh', 'oriel', 'edda', 'varane', 'isolde', 'gall', 'pell', 'hask', 'abbess', 'mags', 'tallyman'],
  previously: [
    { t: 'Six years ago, at Corran\'s Ford, Ansel Dray died on an old star-carved stone. In the morning he woke with the star burned into his palm.' },
    { if: "f.e1_hask_meeting==='spat'", t: '"Four hundred and six, Captain." The man who sold the Red Company is Marshal of Harrowgate now.' },
    { if: "f.e1_hask_meeting==='drew'", t: '"There\'s my sergeant." The man who sold the Red Company is Marshal of Harrowgate now.' },
    { if: "f.e1_hask_meeting!=='spat' && f.e1_hask_meeting!=='drew'", t: 'The man who sold the Red Company is Marshal of Harrowgate now. He was so pleased to see his old sergeant.' },
    { if: "f.e2_hask_job==='took'", t: 'Ansel took Hask\'s silver and wears his town-sword\'s badge. He tells himself it is to stay close.' },
    { if: "f.e2_hask_job==='refused'", t: 'Hask offered him a badge and a wage. Ansel told him where to put both.' },
    { t: 'Under Harrowgate, in the cisterns, Ansel killed the Wedded Rats, and found Lady Isolde\'s maid Annet sitting in the dark. Breathing. Empty.' },
    { if: "f.e2_isolde_hired", t: '"Find who is doing this. Quietly." Lady Isolde Varane pays you off the books.' },
    { t: 'Tithe-chalk stars, drawn on the inside of the doors of the missing.' },
    { t: '"In the last days there shall walk one whom Heaven cannot number." Brother Pell knows his scripture. He drinks to forget it.' },
    { if: "f.e2_hob_hired", t: 'A stable boy named Hob decided Ansel was a legend. Ansel could not make him go home.' }
  ],
  nextTime: [
    'Saltdown. They are working in the dark. They don\'t need the candle. They have never asked for it.',
    '"Either two hundred and seventy men are mining salt in the dark, Sergeant, or someone is eating their bread."',
    'Out of the white comes a white head.'
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    start: {
      fx: { party: { add: ['tamsin', 'pell'], remove: ['hob', 'ulla', 'mags', 'brannagh', 'oriel', 'rusk'] } },
      route: [
        { if: 'f.e2_hob_hired', fx: { party: { add: ['hob'] } }, go: 'cold1' },
        { go: 'cold1' }
      ]
    },
    cold1: {
      loc: 'A wayside shrine on the Corvane road — night',
      text: [
        'A shrine no bigger than a cowshed, at a crossroads with no gibbet. A clay Saint with a chipped nose. A lamp burning blue in a niche. Rain on the thatch.',
        'A woman kneels on the stone floor in her shift, her white enamel plate stacked neatly against the wall like a second, emptier woman. She is twenty-seven. Her hair is white-blonde and cropped to the skull. Down the left side of her throat runs a burn scar, glossy and pink, the shape of a hand that has been holding her by the neck for years.',
        'She has a cord in her right hand: three strands of hemp, knotted every finger\'s width, the knots dark and stiff.',
        'She draws the shift down off her shoulders and folds it in her lap.'
      ],
      next: 'cold2'
    },
    cold2: {
      text: [
        'Her back is a map of every other night like this one. White lines, pink lines, a few still scabbed.',
        'She brings the cord over her shoulder. It lands with a sound like a wet sail. Her breath goes out through her nose. She does not make another sound.',
        'Again. Again. She is counting under her breath, and praying in the gaps, and the two have long since become one thing. *Saint Ambrel who burned, see me. Saint Ysolt who burned, see me. Make me clean enough to carry it.*',
        'At thirty, she stops. Blood runs down into the small of her back and soaks the folded shift. She is shaking all over, the way a horse shakes after a hard gallop, and her face, lifted to the clay Saint, is perfectly calm. Almost happy.',
        'She is very good at this. She has been doing it since she was eight.'
      ],
      next: 'cold3'
    },
    cold3: {
      loc: 'The crossroads — the same hour',
      text: [
        'Outside, eleven Lampwardens sleep in their cloaks around a fire gone to embers. Their horses stand hipshot in the rain.',
        'Beyond them, on its own, stands a carriage that is not quite a carriage. Black iron ribs, and between the ribs, panes of thick green glass, and behind the glass a white curtain. Four black horses, unharnessed, will not graze near it.',
        'The curtain moves.',
        'A hand, thin as a bundle of twigs, presses flat against the inside of the glass. Then a face. A young woman\'s face, shaven head inked all over with fine blue lines: stars, and the threads between stars. Her eyes are silver-white, blind as coins.',
        'They open wide.',
        'In the shrine, the woman with the cord lifts her head as if someone has spoken her name.',
        '@oriel: "Brannagh." A whisper, through glass, through rain. "He\'s here."'
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { cast: ['brannagh', 'oriel'], codex: ['lamp', 'e3_oracle'] } },
      next: 'hen1'
    },

    /* ======================= ACT ONE: THE WRIT ======================= */
    hen1: {
      loc: 'The Gutted Hen — morning',
      text: [
        'You wake under the shutters with the shakes in your hands and a rat-bite on your forearm that has finally stopped weeping. Downstairs, the common room smells of bacon fat and wet dogs, and three tanners are arguing about you.',
        { if: "f.e2_ratking==='burned'", t: '@narrator: "—burned the whole lot, I heard, rats and all, you could smell it from the Stair—"' },
        { if: "f.e2_ratking!=='burned'", t: '@narrator: "—stood in the cistern up to his bollocks and *cut* the thing, they say, a hundred rats, one head at a time—"' },
        'They stop when you come down. One of them raises his cup. The others do too. Nobody in Harrowgate has raised a cup to you before. You don\'t know where to put your face.',
        { if: 'f.e2_mags', t: 'Mags puts a plate in front of you without asking and lets her hand rest on your shoulder a breath longer than a landlady\'s hand needs to. Neither of you mentions it. Both of you notice.' },
        { if: '!f.e2_mags', t: 'Mags puts a plate in front of you without asking. "Rat-killer\'s breakfast. Eat it before Tamsin does."' },
        'Too late. Tamsin, across the table, is already halfway through your sausage. Brother Pell sits at the end of the bench nursing small beer with both hands, as if it might escape, his eyes the colour of a bad egg.',
        { if: "inParty('hob')", t: 'Through the yard door you can hear Hob talking to Ox. Ox is not listening. Ox is trying to bite him.' },
        'Then the bells of the Lanternhold begin to ring. Not the hour. Not the Evening Lamp. A long, falling peal, over and over, like a thing being lowered down a well.'
      ],
      choices: [
        { t: '"Pell. What is that?"', go: 'hen_pell' },
        { t: 'Look at Tamsin. She has stopped chewing.', go: 'hen_tam' },
        { t: 'Leave the plate. Go and see for yourself.', go: 'stair1' }
      ]
    },
    hen_pell: {
      text: [
        'Pell has gone a colour you have seen on men about to be hanged.',
        '@pell: "That is the Warden\'s Peal. They ring it when a Writ company comes into a town." He drinks the rest of his beer in one go, which is the bravest thing you have ever seen him do. "Lampwardens. Not a pair of them on a tithe-round. A company, with a Writ. Somebody in Corvane has signed a piece of paper that says *find it and burn it*."',
        '@ansel: "Find what?"',
        '@pell: "That is the thing about Writs, my son. They never tell the town."'
      ],
      fx: { set: { e3_asked_pell_peal: 1 } },
      next: 'stair1'
    },
    hen_tam: {
      text: [
        'She puts your sausage down on your plate, half-eaten, as if she has only just noticed she was holding it.',
        '@tamsin: "Lampwardens."',
        'That\'s all. Her face goes blank and smooth as a shut door, and that is how you know. You have seen men in a line before a charge with exactly that face.',
        { if: 'f.e1_tam_mother', t: 'You think of a woman in the fen, fifteen years ago, and a child made to watch. You don\'t say it. She sees you think it.' },
        '@tamsin: "Well. Let\'s go and look at them, then. Know your enemy, my gran says." She stands. Her hand goes to the knife at her belt and stays there.'
      ],
      fx: { set: { e3_saw_tam_face: 1 } },
      next: 'stair1'
    },
    stair1: {
      loc: 'The Market Stair — morning',
      text: [
        'They come up the Market Stair in a column of twos, and the whole town comes out to watch them, the way a town comes out to watch a fire.',
        'Twelve riders in white-enamelled plate, the seven-point star on every breast, the horses white or grey and groomed till they shine. No banners. No music. Just the bells, and the iron shoes on the cobbles, and a sound you only notice when it stops: the market going quiet, stall by stall, as they pass.',
        'At their head rides a woman without a helm. Close-cropped white-blonde hair, a face like something carved over a church door, a burn scar down the side of her throat. She sits her horse like she was born on it and rides like she is carrying something fragile. She looks at everything, and at nothing for long.',
        'Behind the column, four black horses draw a carriage of black iron and green glass, curtained in white. It creaks on its springs. The crowd steps back from it without knowing why.',
        'All along the Stair, people are going down on one knee.'
      ],
      fx: { know: { codex: ['e3_writ'] } },
      choices: [
        { t: 'Kneel. It costs nothing, and you are not here to be noticed.', go: 'stair_kneel', fx: { rep: { lamp: 1 } } },
        { t: 'Stay standing. You\'ve knelt to enough people on horses.', go: 'stair_stand', fx: { set: { e3_stood: 1 } } },
        { t: 'Watch the glass carriage.', go: 'stair_cage' }
      ]
    },
    stair_kneel: {
      text: [
        'You go down on one knee in the muck beside a fishwife. Pell kneels like a man who has done it ten thousand times. Tamsin kneels last, and slowly, and you see what it costs her.',
        'The woman at the head of the column rides past six feet from you. Close enough to smell her: horse, cold iron, and under it, faint and coppery, fresh blood.',
        'Your left palm begins to burn inside the glove. It has not done that since Ashby.',
        'Beside you, Tamsin keeps her eyes on the cobbles and her lips moving. It isn\'t a prayer you know.'
      ],
      next: 'keep_call'
    },
    stair_stand: {
      text: [
        'You stay on your feet. So does Tamsin, a beat after you, as if you\'d given her permission. Around you the crowd goes down like barley in wind, and suddenly the two of you are the tallest things on the Stair.',
        'The woman at the head of the column turns her head.',
        'Grey eyes. Pale lashes. She looks at you the way a hawk looks at a field: not with anger, with attention. She looks at the sword on your hip and the way you stand, and something in her face sharpens by a hair, the way a good fencer\'s does when the man across from her takes the right guard.',
        'Then she rides on. Something under your glove has started to itch, like a burn remembering itself.'
      ],
      fx: { set: { e3_stood: 1, e3_brannagh_seen: 1 }, rep: { lamp: -1, town: 1 } },
      next: 'keep_call'
    },
    stair_cage: {
      text: [
        'The carriage rolls past. Through the green glass, through a gap in the curtain, you see a shape sitting cross-legged on the floor, very still.',
        'As it draws level with you the shape turns its head, sharply, like a bird hearing a worm. Toward you. Then past you. Then back, searching, as if you were a word on the tip of its tongue.',
        'A thin hand comes up and presses flat to the glass. The fingers spread. Then the carriage is past, and the hand is still there, flat, waiting, pointed at the place where you are standing.',
        'Your palm is hot inside the glove. You put the hand in your armpit like a man with frostbite and wait for the carriage to be gone.'
      ],
      fx: { set: { e3_saw_hand: 1 } },
      next: 'keep_call'
    },
    keep_call: {
      route: [
        { if: "f.e2_hask_job==='took'", go: 'keep_hask' },
        { go: 'keep_isolde' }
      ]
    },
    keep_hask: {
      text: [
        'A runner in Varane blue finds you before the column has reached the top of the Stair: one of Hask\'s sergeants, a bald man named Pollard with a voice like a cart going over gravel.',
        '@narrator: "Marshal wants his town-swords in the hall at noon. Clean boots. Clean face. Keep your gob shut, he says, *especially you*, he says." Pollard looks you up and down. "He likes you, you know. Saints know why."',
        'You wear Hask\'s badge on your coat. It is a small brass boar. It weighs nothing at all.'
      ],
      next: 'keep1'
    },
    keep_isolde: {
      text: [
        'A page in Varane blue finds you before the column has reached the top of the Stair: a narrow boy of twelve with an ink-stain on his lip.',
        '@narrator: "My lady says, if you\'re not otherwise engaged, a hired man might stand at the back of the hall at noon among the household guard. Nobody looks at the back of the hall, my lady says." He swallows. "She says to wear a clean shirt. She said it twice."',
        { if: 'f.e2_isolde_hired', t: 'You know what she\'s doing. She wants a pair of eyes in the room that belong to her and not to the Marshal.' },
        { if: '!f.e2_isolde_hired', t: 'You don\'t know what she wants. That\'s never stopped you taking a lady\'s silver.' }
      ],
      next: 'keep1'
    },
    keep1: {
      loc: 'Varane Keep — the great hall, noon',
      text: [
        'The great hall of Varane Keep was built for a richer family. The tapestries have been sold; you can see the clean squares on the stone where they hung. The fire is small. The rushes are old.',
        'On the dais, in a carved chair too big for him, sits Lord Aurel Varane. You have never seen him before. He is fifty-five and looks seventy: a soft, kind, ruined face, a beard gone thin, a gouty foot wrapped in red flannel and propped on a stool like a holy relic. He winces every time anyone walks near it. He has a cup of wine in his hand and he is not drinking it, the way a frightened man holds a dog by the collar.',
        'At his left elbow stands Lady Isolde in dark blue, a ledger against her hip, and it takes you less than a minute to see who rules this hall. Servants look to her before they move. The steward looks to her before he speaks. When her father begins a sentence and loses it, she finishes it for him, so smoothly that it sounds like his.',
        'At his right, at ease, one boot on the step of the dais, Ser Konrad Hask. And beside Hask, plump and white-wimpled and smiling, the Abbess of the Lanternhold, smelling of honey across the whole width of the hall.',
        'You stand at the back among the guards. The doors open.'
      ],
      fx: { know: { cast: ['varane', 'abbess', 'isolde'] } },
      next: 'keep2'
    },
    keep2: {
      text: [
        'She walks the length of the hall alone, in her plate, her helm under her arm, and the sound of her sabatons on the flags is the only sound there is.',
        'She goes down on one knee to Lord Varane, briefly, correctly, and rises before he has finished telling her to.',
        '@brannagh: "My lord. I am Lampwarden Brannagh Vey of the Chapter of Corvane. I carry the Hierarch\'s Writ." She holds it up: a roll of vellum, white wax, a seal like a frozen star. "By its authority I am to seek out, in the March of Harrowgate, a soul that Heaven cannot number. Wheresoever it hides, in witch or beast or kin. And put it to the fire, that it be counted."',
        'Pell, beside you at the back, makes a very small noise.',
        '@varane: "Of— of course." Lord Varane\'s voice is warm, and pleasant, and has nothing in it to stand on. "Of course. The house of Varane has always been a friend to the Lamp. You will want lodging. Food for your horses. Anything— anything we can—"',
        '@isolde: "—within the law of the March," says Isolde, gently, "which my father\'s justice administers. We would ask to be told before anyone in his town is taken up, Lampwarden. As a courtesy between houses."',
        '@brannagh: "The Writ supersedes the law of the March, my lady." Not unkindly. As if explaining that water is wet. "But I will tell you. As a courtesy."'
      ],
      fx: { know: { codex: ['starless'] } },
      next: 'keep3'
    },
    keep3: {
      text: [
        '@hask: "And how will you know it, Lampwarden? This uncounted soul?" Hask, smiling, pleasant. "Does it have horns? I\'d like to warn the lads."',
        '@brannagh: "The oracle will know it. It is near. She has said so." Her eyes go out across the hall, slowly, face by face. "It may wear any face, Ser Konrad. A witch. A beast. A child."',
        '@hask: "Well, if it\'s a man that ought to be dead you\'re after—" and he laughs, and turns, and points down the hall straight at you, "—I\'ve one right there. Sergeant Ansel Dray. Died at Corran\'s Ford, didn\'t you, Ansel? I drank to you for six years."',
        'Laughter, polite and thin, from the household. The Abbess chuckles, kindly, into her wimple.',
        'Lampwarden Brannagh Vey does not laugh. She looks down the length of the hall at you. Her eyes are grey. They stay on you a breath, two, three. You hold your sword-hilt to keep the left hand still.'
      ],
      choices: [
        { t: '"Not dead enough, Captain. You\'ll want to try harder next time."', go: 'keep_joke' },
        { t: 'Say nothing. Hold her eyes until she looks away.', go: 'keep_silent' },
        { t: '"If you want souls nobody counts, Lampwarden, try the white ward at the Lanternhold. Nobody counts those."', go: 'keep_jab' }
      ]
    },
    keep_joke: {
      text: [
        'More laughter, a little louder, a little more nervous. Hask laughs hardest of all and spreads his hands as if to say *see? see what I have to work with?*',
        'Brannagh\'s mouth moves. Not a smile. The place a smile would go if she allowed herself one in a lord\'s hall.',
        '@brannagh: "Corran\'s Ford," she says. "I have heard of it." She says it the way you would say *I have heard of that fever*. Then she turns back to the dais.'
      ],
      fx: { set: { e3_brannagh_seen: 1 }, rep: { town: 1 } },
      next: 'keep4'
    },
    keep_silent: {
      text: [
        'You don\'t look away. Neither does she.',
        'It goes on long enough that the laughter dies, and a servant shifts his feet, and Lord Varane coughs. It goes on the way a bout goes on between two people who are each waiting for the other to move first.',
        'In the end it is not her who looks away, and it is not you. It is Hask, stepping between, smooth, with a hand on her elbow and a remark about the stables, and she lets herself be turned. But at the door of the hall, as the audience breaks, she looks back. Once. At you.'
      ],
      fx: { set: { e3_brannagh_seen: 1, e3_held_stare: 1 } },
      next: 'keep4'
    },
    keep_jab: {
      text: [
        'The hall goes quiet in a different way.',
        'The Abbess goes on smiling. She tilts her head at you, the way a kindly grandmother tilts her head at a child who has said something rude at table, and begins, very softly, to hum.',
        'Isolde does not look at you. Her knuckles have gone white on the ledger.',
        'Hask\'s smile stays exactly where it is. Only his eyes change.',
        '@brannagh: "The Hollowed are a sickness, sergeant. Not a heresy." She considers you. "But I will remember that you said so."'
      ],
      fx: { set: { e3_brannagh_seen: 1, e3_jab: 1 }, rep: { lamp: -1 }, bond: { isolde: 1 } },
      next: 'keep4'
    },
    keep4: {
      text: [
        'When it breaks up, Lord Varane is helped from his chair by two servants. The foot touches the floor and he makes a small, high sound, like a child, and then apologises to everyone for making it.',
        'Isolde passes you on her way out, among her women, not looking at you. Her voice comes low, under the noise of the hall.',
        '@isolde: "They will need to burn someone before they leave, Master Dray. They always do. It is how they prove the Writ was worth the paper." A breath. "Be careful whose name gets said in this town this week."',
        'And she is gone, her ledger under her arm, her dark hair pinned up anyhow, as if she did it herself in the dark.'
      ],
      fx: { quest: { id: 'e3_writ', title: 'A Soul Uncounted', state: 'active', note: 'Lampwarden Brannagh Vey has come to Harrowgate with a Writ to find "a soul that Heaven cannot number," and burn it.' } },
      next: 'seize1'
    },

    /* ---- The seizure ---- */
    seize1: {
      loc: 'The Fish Shambles — afternoon',
      text: [
        'The Fish Shambles is a crooked lane below the Market Stair where the fen-folk sell eels out of tubs, live, writhing, black as wet rope. It stinks of slime and river and blood. Gulls on every gable.',
        'You hear it before you see it. A tub going over. A woman shrieking, not in fear. In accusation.',
        '@narrator: "*Her!* That one! Edda Moss! She put her da in the ground by Cutler\'s Mere, I saw the bowl of milk, I saw it with my own eyes—"',
        'A chandler\'s wife in a good apron, pointing. And at the end of her finger, a girl.',
        'Nineteen. Small, wiry, brown as a hazelnut from the sun. Hair in a fen-braid with a reed woven through it. Her hands are raw to the wrist and silver with eel-slime; she still has the skinning knife in one of them. She is looking at the chandler\'s wife with a kind of baffled hurt, as if a dog she fed has bitten her.',
        'Three Lampwardens are already coming down the lane.'
      ],
      fx: { know: { cast: ['edda'], codex: ['earthburial'] } },
      next: 'seize2'
    },
    seize2: {
      text: [
        { if: "f.e2_hask_job==='took'", t: 'Pollard is there with four of Hask\'s men, and he sees you, and points. "Dray! Keep the crowd back. Marshal\'s orders. Help the holy fathers." Your brass boar weighs nothing at all.' },
        'Edda doesn\'t run. Maybe she doesn\'t understand yet. She drops the knife when the first Warden tells her to, and when the second takes her by the braid and forces her to her knees in the eel-slime, she bites him through the gauntlet-cuff to the bone.',
        'He hits her with the gauntlet. Once. It is a professional blow: it doesn\'t break anything, and it takes all the fight out of her.',
        'Brannagh comes down the lane at a walk.',
        '@brannagh: "Edda Moss. You put your father in the earth."',
        '@edda: "He asked me." Blood on her teeth. "He *asked* me. He didn\'t want to go up. He was frightened of going up. He wanted to go *down*, where it\'s warm—"',
        'The crowd makes a sound, a long hiss through teeth, like a kettle. Beside you, Tamsin has stopped breathing.'
      ],
      choices: [
        { t: 'Step in. "She\'s a girl who sells eels, Lampwarden."', go: 'seize_step' },
        { t: 'Take Tamsin\'s wrist. Hard. Before she does something that gets her burned too.', go: 'seize_hold' },
        { t: 'Do nothing. Watch where they take her, and how many hold the door.', go: 'seize_watch' }
      ]
    },
    seize_step: {
      text: [
        'You are between the Warden and the girl before you have decided to be.',
        'Brannagh\'s sword clears its scabbard. You don\'t see it happen. One moment it is sheathed and the next the point is resting in the hollow of your throat, cold, and the blade is beginning to glow along its fuller, a faint blue, like milk with the moon in it. The skin of her own hand on the hilt reddens as you watch. She doesn\'t seem to notice.',
        '@brannagh: "The dead man." Very calm. "Sergeant Dray. Do you know what you are standing in front of?"',
        '@ansel: "A girl. Selling eels."',
        '@brannagh: "A soul. Bound for the dark, under the earth, out of the sight of Heaven, forever. Her father\'s already there. I am trying to keep her from following him." The blade does not move. "You are a soldier. You know what it is to do an ugly thing because the alternative is worse."',
        'You do. She sees that you do.',
        'She lowers the sword. The blue light goes out of it like a breath.',
        '@brannagh: "The Evening Lamp, tomorrow. In the market. Come and watch, sergeant. It may do your soul good."',
        'They take Edda up the hill. She looks back at you the whole way.'
      ],
      fx: { set: { e3_stepped_in: 1, e3_brannagh_seen: 1 }, rep: { lamp: -1, town: 1 } },
      next: 'plan1'
    },
    seize_hold: {
      text: [
        'Her wrist is like a bundle of wire. The knife is already half out. You close your hand over hers and push it back into the sheath and hold it there.',
        '@tamsin: "Let go of me." Through her teeth. Not loud. "Let go of me, Sergeant, or I swear to the Mothers—"',
        '@ansel: "They\'ll burn you next to her. Then who\'s left to do anything?"',
        'She shakes. You can feel it in the bones of her wrist. Whatever it is has been waiting fifteen years for a door to open, and it isn\'t fear.',
        'They take Edda up the hill. Tamsin watches until the white backs are out of sight, and then she pulls her hand out of yours, not roughly, and looks at it as if it belongs to someone else.',
        '@tamsin: "...Thank you." It sounds like it hurts. "Don\'t ever do that again."'
      ],
      fx: { set: { e3_held_tam: 1 } },
      next: 'plan1'
    },
    seize_watch: {
      text: [
        'You let your face go stupid and your eyes do the work. Sixteen years of soldiering, one way and another: count the spears, count the doors.',
        'They take her up the hill to the Lanternhold. Not through the great door. Round the side, under the hospital wing, to a low arched door with a grille, into what must be the undercroft. Two Wardens on the door. A Lamplighter with a ring of keys, round-shouldered, sweating, who fumbles the lock twice.',
        'The window of the cell, if it is the one you think, is a slit at the level of the street, on the alley side, behind the charity bins.',
        'Beside you Tamsin is watching too. When you glance at her she is already looking at the same window.'
      ],
      fx: { set: { e3_watched: 1 }, xp: 20 },
      next: 'plan1'
    },

    /* ---- The council at the Hen ---- */
    plan1: {
      loc: 'The Gutted Hen — evening',
      text: [
        'Mags shuts the Hen early, which she has done twice in twenty-two years: once for Davey, the night they pulled him out of the tannery pit, and once for her Tom. She puts the bar across the door and a jug on the table and sits down with you.',
        '@mags: "They\'re stacking faggots in the market. Green wood under, dry on top. So it lasts." She pours. Her hand is steady. "I knew Edda\'s da. Rafe Moss. Sold me eels for twenty years and never once short-weighted me. He used to bring a bucket of the little ones for my Tom, when Tom was small, to feed the cat." A pause. "So. What are we going to do?"',
        { if: "inParty('hob')", t: 'Hob, at the end of the table, has a pitchfork across his knees and the face of a boy who has decided this is the night he becomes a man. You don\'t like that face. You used to have it.' },
        'Pell has not touched the jug. That frightens you more than anything else today.'
      ],
      next: 'plan2'
    },
    plan2: {
      text: [
        '@pell: "There are... things in the Book of Embers." He wets his lips. "Old law. Half-forgotten. The *Lesser Kindling*: for a first offence, the Warden may burn the hair and brand the hand instead of the body, if she can be made to see mercy as a duty. And the *Ordeal of Steel*: any freeman may stand champion for the accused, and if Heaven gives him the victory, she walks." He laughs, wretchedly. "Nobody has claimed the Ordeal in sixty years. The Wardens train for it from the age of eight."',
        '@mags: "Or there\'s Brother Fennick, who keeps the undercroft keys and drinks in my back room on credit he\'s never going to pay. A man like that has a price. Usually it\'s small."',
        { if: "f.e1_crake==='kept'", t: 'Fennick. You know that name. You\'ve read it, in a moneylender\'s ledger that is still under your bed: *Br. Fennick, Lanternhold, 34s. at a penny a week, much overdue.*' },
        '@tamsin: "Or we stop talking," says Tamsin, "and tonight, when the town\'s asleep, I go in through that cell window and take her out." She looks at you. "With you. If you\'re coming."'
      ],
      next: 'plan_hub'
    },
    plan_hub: {
      text: [
        { if: 'f.e3_tried_argue || f.e3_tried_bribe', t: 'The fire has burned low. The night is getting on. Tamsin is still waiting for an answer.' },
        { if: '!f.e3_tried_argue && !f.e3_tried_bribe', t: 'They are all looking at you. You are not sure when that started.' }
      ],
      choices: [
        { t: 'Go to the Lanternhold. Argue for her life to Brannagh\'s face.', if: '!f.e3_tried_argue', go: 'argue1' },
        { t: 'Find Brother Fennick. Every lock has a price.', if: '!f.e3_tried_bribe', go: 'bribe1' },
        { t: 'Claim the Ordeal of Steel. Stand as her champion.', go: 'duel_claim' },
        { t: '"Tonight, then. You and me, Tamsin."', go: 'jail_plan' },
        { t: '"It isn\'t our fight. The Wardens leave in a week. We\'ll still be here."', go: 'nothing1' }
      ]
    },

    /* ---- Route: argue ---- */
    argue1: {
      loc: 'The Lanternhold — the Lady Chapel, Evening Lamp',
      text: [
        'The Lady Chapel of the Lanternhold is all white stone and blue glass, and it smells of lamp oil and lilies and, underneath, of the hospital wing next door: lye, and broth, and bedpans.',
        'Brannagh is alone at the rail, kneeling, out of her plate, in a plain grey gambeson. She moves stiffly when she stands, like a woman with a sore back.',
        '@brannagh: "Sergeant Dray. You\'ve come to tell me she is only a girl." She doesn\'t sound angry. She sounds tired. "Everyone always comes to tell me they are only girls. Or only old women. Or only boys. Sit, if you like. You are allowed to speak to me. You are not allowed to waste my time."'
      ],
      choices: [
        { t: 'Make the case. Mercy as a duty: the Lesser Kindling. Her hair and her hand, not her life.', check: { stat: 'presence', dc: 15, pass: 'argue_pass', fail: 'argue_fail', xp: 30 } },
        { t: 'Let Pell make it. He knows the Book of Embers better than she does.', if: "inParty('pell')", check: { stat: 'wits', dc: 13, pass: 'argue_pell', fail: 'argue_fail', xp: 30 } },
        { t: '"You\'re not stupid. You know this is murder. I can see you know it."', check: { stat: 'presence', dc: 18, pass: 'argue_pass', fail: 'argue_fail', xp: 40 } }
      ]
    },
    argue_pell: {
      text: [
        'Pell comes forward from the door with his hat crushed in his hands, and for a moment he is not a drunk. He is a Lamplighter of twenty-two years\' standing, and the words come out of him in the old cadence, chapter and verse, the Book of Embers, the Exhortation of Saint Ambrel: *let the first fire be a small fire, that the sinner may see by its light.*',
        'Brannagh listens. She corrects his citation once. He corrects her back, and he is right, and she knows it, and something like delight crosses her face before she can stop it.',
        'You stand there and keep your mouth shut and watch her face, and when Pell falters you put the question he\'s forgotten in his hand: *what does the Lamp gain from her ash that it cannot gain from her penance?*'
      ],
      fx: { bond: { pell: 1 }, set: { e3_pell_argued: 1 } },
      next: 'argue_pass'
    },
    argue_pass: {
      text: [
        'Brannagh is quiet for a long time. A moth beats itself against the blue lamp over the altar.',
        '@brannagh: "At dawn," she says at last, "she will be brought to the steps of the Lanternhold. Her hair will be cut and burned. Her right hand will be branded with the star, so that every Lamplighter in Aldermere knows her for what she is. Then she is released into your custody, sergeant, and she leaves the March."',
        'She stands. She is taller than you thought.',
        '@brannagh: "If she is in the March at the new moon, she burns. If she buries anyone else, she burns. And you will have made me a liar to my Writ, and I will remember who did it." She looks at you, very directly. "That is not a threat. I simply want you to know what you have bought, and with whose coin."'
      ],
      fx: { set: { e3_edda: 'saved', e3_edda_route: 'argued', e3_plan: 'argued' }, rep: { lamp: -1 }, xp: 40, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'done', note: 'You argued Edda Moss down from the pyre to the Lesser Kindling: her hair, and her hand.' } },
      next: 'night1'
    },
    argue_fail: {
      text: [
        'She hears you out. She does you that courtesy, all the way to the end.',
        '@brannagh: "No."',
        'Just that. She kneels again at the rail and turns her back to you, and you see her wince as the gambeson pulls across her shoulders.',
        '@brannagh: "Go home, sergeant. Pray for her, if you know how. I will."',
        'You walk back down the hill to the Hen in the dark with your hands in fists.'
      ],
      fx: { set: { e3_tried_argue: 1, e3_brannagh_seen: 1 } },
      next: 'plan_hub'
    },

    /* ---- Route: bribe ---- */
    bribe1: {
      loc: 'The Gutted Hen — the back room',
      text: [
        'Brother Fennick is a soft, sad, damp man in a grey Lamplighter\'s robe, with a cup of Mags\'s worst ale and the expression of someone who has never in his life been in a room he was glad to be in. He sees you come in and tries to stand up and sit down at the same time.',
        '@narrator: "I don\'t— I\'m not— whatever it is, sergeant, I\'m only the keys. I\'m only the *keys*."',
        '@ansel: "That\'s what I want. The keys. For an hour, tonight."',
        'He goes the colour of the ale.'
      ],
      choices: [
        { t: 'Put forty silver on the table. "One hour. The cell door unbarred. Nobody hurt."', cost: 40, go: 'bribe_ok', fx: { set: { e3_bribe: 'paid' } } },
        { t: '"Thirty-four silver at a penny a week, Brother. Crake\'s ledger. I have it. Your Abbess would love to read it."', if: "f.e1_crake==='kept'", go: 'bribe_ok', fx: { set: { e3_bribe: 'blackmail' }, rep: { town: -1 } } },
        { t: '"Twenty. And my word that it never comes back to you."', check: { stat: 'presence', dc: 13, pass: 'bribe_haggle', fail: 'bribe_fail' } }
      ]
    },
    bribe_haggle: {
      text: [
        'He looks at the coins. He looks at your face. He looks at the door, as if hoping it will open and somebody will tell him what to do.',
        'Then he puts his damp hand over the silver and pulls it toward him, slowly, like a man drawing in a fishing line.'
      ],
      fx: { silver: -20, set: { e3_bribe: 'paid' } },
      next: 'bribe_ok'
    },
    bribe_fail: {
      text: [
        '@narrator: "Your *word*?" Fennick laughs, a high, frightened, ugly sound. "Sergeant, I have heard what the Wardens do to a Lamplighter who opens a door. Your word won\'t— no. No. I\'m sorry. I\'m very sorry for her. I\'ll pray for her."',
        'He takes his ale and goes, fast, leaving his cloak. You know he won\'t talk. He\'s too frightened to talk. But that door is shut.'
      ],
      fx: { set: { e3_tried_bribe: 1 } },
      next: 'plan_hub'
    },
    bribe_ok: {
      text: [
        { if: "f.e3_bribe==='blackmail'", t: 'He sits back down, very slowly, as if his legs have been cut. You watch the sum go through him: the Abbess, the ledger, the street.' },
        '@narrator: "After the midnight bell," Fennick whispers. "The undercroft door on the alley side. I\'ll leave the bar up and the cell unlocked and I\'ll be in the chapel praying with my back to everything, and when they ask me, I was praying. I was *praying*."',
        'He goes. He forgets his cloak. Mags picks it up between finger and thumb and drops it on the fire.',
        '@mags: "Cellar\'s clean," she says. "Behind the small-beer casks. There\'s a straw tick and a bucket. I\'ve hidden worse than an eel-girl down there."'
      ],
      fx: { set: { e3_plan: 'bribe' } },
      next: 'night1'
    },

    /* ---- Route: the Ordeal ---- */
    duel_claim: {
      loc: 'The Lanternhold — the gate, night',
      text: [
        'You go up the hill and hammer on the Lanternhold gate until a Warden opens it with a drawn sword, and you say it in front of him, loud, so the town can hear it if the town is listening: you claim the Ordeal of Steel for Edda Moss, by the Book of Embers, chapter whatever-Pell-said.',
        'They fetch Brannagh. She comes in her shirtsleeves, with her hair wet, as if she has just been washing something off herself.',
        'She looks at you for a long time.',
        '@brannagh: "Nobody has claimed the Ordeal in this province since my grandmother was a girl." Something is happening at the corner of her mouth. "You understand that Heaven gives the victory. If you lose, it is not only her soul that is judged. It is yours."',
        '@ansel: "I\'ve been judged before."',
        'A young man pushes forward from behind her: twenty-two, beautiful in the way of chapel statues, with the white star on his breast and the fervour of a boy who has never been hit hard. *Warden Corwin Ashlar*, someone murmurs.',
        '@narrator: "Lampwarden. Let me answer it." His voice shakes, with eagerness. "Let me stand for the Lamp."',
        '@brannagh: "Noon," says Brannagh, still looking at you. "In the market, before the pyre. Until one yields or cannot rise." And, to you, quieter: "He is very good, sergeant. Try not to kill him. I am fond of him."'
      ],
      fx: { set: { e3_plan: 'duel', e3_brannagh_seen: 1 }, rep: { town: 1, lamp: -1 }, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'active', note: 'You claimed the Ordeal of Steel for Edda Moss. Noon tomorrow, in the market, against Warden Corwin Ashlar.' } },
      next: 'night1'
    },

    /* ---- Route: jailbreak ---- */
    jail_plan: {
      text: [
        'Tamsin lets out a breath you didn\'t know she was holding. Then she grins: the chipped tooth, the whole thing, and it is not a nice grin.',
        '@tamsin: "Right. Midnight bell. I\'ll need rope, a pry-bar, and you not to clank."',
        { if: "inParty('pell')", t: '@pell: "I\'ll— I will be at the Lady Chapel. Confessing loudly. To anyone who will listen. For some hours." He swallows. "A drunk priest weeping at the altar is the best alibi in Aldermere, my son."' },
        { if: "inParty('hob')", t: '@hob: "And me? I can— I\'ll come, I can—" "You," says Tamsin, "can stand at the end of the alley and whistle if anything in white comes round the corner." Hob looks crushed, then proud. Then crushed again.' },
        '@mags: "Bring her in by the yard," says Mags. "There\'s room in the cellar behind the small beer. I\'ve hidden worse."'
      ],
      fx: { set: { e3_plan: 'jail' }, bond: { tamsin: 1 } },
      next: 'night1'
    },

    /* ---- Route: nothing ---- */
    nothing1: {
      text: [
        'Nobody says anything.',
        'Pell looks into the jug. Mags looks at you, a long, level look, the kind she gives a man who has asked for credit, and then she gets up and takes the jug away, which is the most eloquent thing she has ever done.',
        { if: "inParty('hob')", t: 'Hob opens his mouth. Shuts it. You watch him decide that you must have a plan you aren\'t telling. It\'s worse than if he\'d shouted.' },
        'Tamsin doesn\'t say anything at all. She gets up, and takes her bow, and goes out the yard door into the dark, and doesn\'t come back.',
        '> You were right. You know you were right. You have been right like this before, at the back of a hundred crowds, in a hundred towns. It has never once made you sleep.'
      ],
      fx: { set: { e3_plan: 'none' }, bond: { tamsin: -2, mags: -1 }, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'active', note: 'Edda Moss is to be burned at the Evening Lamp tomorrow. You decided it was not your fight.' } },
      next: 'night1'
    },

    /* ======================= NIGHT: THE CAGE ======================= */
    night1: {
      loc: 'The Market Square — the dead of night',
      text: [
        'You can\'t sleep. You never can, the first night of something.',
        'You walk. The town is shut up tight, every shutter barred, the way towns are when the Lamp is in them. In the market square the pyre stands half-built in the dark: a stake as thick as a man, and around it, waist-high, the faggots, green under and dry on top. It smells of cut ash-wood and pitch.',
        'Beside it, unharnessed, the glass carriage. A single Warden sits on an upturned barrel by its wheel with his chin on his chest, snoring softly into his gorget.',
        'The curtain behind the glass is drawn back. She is awake. She is sitting cross-legged in the middle of the carriage floor, perfectly straight, her silver eyes turned up toward the roof as if she can see through it to the sky.',
        'Then her head comes down, slowly, and turns. Not toward you. Toward the place beside you. Searching.',
        '@oriel: "...Come closer," she says. Her voice is muffled by the glass. "No. Closer. I can\'t hear you."'
      ],
      fx: { quest: { id: 'e3_oriel', title: 'The Glass Carriage', state: 'active', note: 'The Lamp\'s caged oracle spoke to you in the night.' } },
      choices: [
        { t: 'Go to the glass.', go: 'oriel1' },
        { t: '"I\'m not saying anything."', go: 'oriel1b' }
      ]
    },
    oriel1b: {
      text: [
        '@oriel: "Yes. I know. That is the point." A dry little laugh, rusty, as if she doesn\'t use it much. "Everyone else in this town is *saying* something, all the time. Even asleep. Even him." She tips her head at the snoring Warden. "You\'re the only thing in Harrowgate that isn\'t. Come here."'
      ],
      next: 'oriel1'
    },
    oriel1: {
      text: [
        'You go close. Close enough to see her properly by the light of the blue lamp over the Lanternhold gate up the hill.',
        'She is twenty, perhaps, or a little over, and thin as a bundle of wires, in a white shift. Every inch of her shaven scalp is inked: fine blue lines, dots and threads, the whole sky, more stars than you have ever seen at once. Her eyes are blind and white and shining like the inside of an oyster shell.',
        'She puts her hands flat on the glass. She leans forward until her forehead touches it.',
        '@oriel: "There," she breathes. "There. Oh."',
        'For a long moment she says nothing at all. Her lips are parted. She looks like someone standing in the first warm sun after a winter.',
        '@oriel: "You are not counted," she whispers. "I can\'t hear you. It\'s so quiet."'
      ],
      fx: { set: { e3_oriel_met: 1 }, know: { cast: ['oriel'] } },
      next: 'oriel2'
    },
    oriel2: {
      text: [
        '@oriel: "They\'re always singing. Since I was born. All of them, all night and all day, every one of them, the whole sky, singing the names. Every name. His." The Warden. "The chandler\'s wife\'s. Mine. I hear mine all the time. I have never once in my life heard what I *think*." She laughs again, and it cracks in the middle. "And then you walked into the market this morning and there was a— a hole in it. A rest. Like the space between two notes. And for a moment I could hear myself."',
        'Then her head jerks back. Her mouth opens wider than a mouth should. The voice that comes out is not hers. It is many voices, perfectly together, very far away, like a choir heard through a wall in another country.',
        '@oriel: "*WHERE IS THE LINE. WHERE IS THE LINE FOR IT. THE BOOK HAS NO LINE.*"',
        'She claps both hands over her own mouth. Her whole thin body shudders. When she takes them away, it is her own voice again, small and furious.',
        '@oriel: "Sorry. Sorry. They do that."'
      ],
      choices: [
        { t: '"Who\'s singing?"', go: 'oriel_who' },
        { t: '"What are you?"', go: 'oriel_what' },
        { t: 'Put your gloved left hand flat on the glass, against hers.', go: 'oriel_hand' }
      ]
    },
    oriel_who: {
      text: [
        '@oriel: "The Saints." She says it automatically, the way a child says a catechism. Then, after a beat, in a different tone, almost to herself: "That\'s what they call them. The Saints."',
        'She turns her blind face up to the roof of the carriage again, and the starlight comes through the glass and lies on the inked stars of her scalp, and for a moment you can\'t tell which are which.',
        '@oriel: "Don\'t look up tonight, Ansel Dray. They\'re looking for you. They don\'t know what they\'re looking *for*, which makes them cross."',
        'You never told her your name.'
      ],
      fx: { set: { e3_oriel_named: 1 } },
      next: 'oriel3'
    },
    oriel_what: {
      text: [
        '@oriel: "Property of the Chapter of Corvane." Dry as dust. "Born in the Lanternhold at Saint Ysolt\'s, given to the Lamp at three days old because I didn\'t cry when they lit a candle by my face. I\'m an ear. They point me at the sky and write down what it says." She considers. "I\'m twenty-one. I like pears. I\'ve never had one. Brannagh describes them to me."',
        '@ansel: "Brannagh."',
        '@oriel: "She\'s kind to me. You won\'t believe that. She brushes my head when the ink itches." A pause. "She\'d burn you, if she knew. She wouldn\'t want to. She\'d do it anyway, and pray about it afterwards with her cord. So I won\'t tell her." Her silver eyes find a spot near your ear. "I\'ve never kept a secret before. It\'s nice. It\'s *mine*."'
      ],
      fx: { bond: { oriel: 1 }, set: { e3_oriel_secret: 1 } },
      next: 'oriel3'
    },
    oriel_hand: {
      text: [
        'You put your left hand flat on the glass. Through the leather your palm is burning like a coal.',
        'She moves her hand to meet it on the other side, exactly, without being able to see it, finger to finger. The glass is cold. Her hand is narrow and her fingers are very long.',
        'Her breath catches. Her lips move.',
        '@oriel: "Seven points," she whispers. "On your hand. A star with nobody in it."',
        'She doesn\'t take her hand away. Neither do you. The Warden snores. Up the hill the Lanternhold lamp burns blue.',
        '@oriel: "Nobody has touched me in— they wear gloves. Everyone. In case it\'s catching." A tiny laugh. "It\'s a pane of glass, I know. I know. It still counts."'
      ],
      fx: { bond: { oriel: 2 } },
      next: 'oriel3'
    },
    oriel3: {
      text: [
        'The Warden on the barrel snorts and stirs.',
        '@oriel: "Go," Oriel says. "Go, before he wakes up and wonders why I\'m smiling. I never smile. It\'s in all the reports." She takes her hands off the glass and folds them in her lap, and her face goes blank and patient, the face of an instrument waiting to be played.',
        'But as you step back into the dark, very softly, so softly you are not sure afterwards you heard it:',
        '@oriel: "Come back. Please. It\'s so loud without you."'
      ],
      next: 'oriel_end'
    },
    oriel_end: {
      route: [
        { if: "f.e3_plan==='jail'", go: 'jail1' },
        { if: "f.e3_plan==='bribe'", go: 'bribe_night' },
        { if: "f.e3_plan==='argued'", go: 'argue_dawn' },
        { go: 'day2' }
      ]
    },

    /* ---- Night routes ---- */
    jail1: {
      loc: 'The Lanternhold — the alley behind the charity bins, midnight',
      text: [
        'The midnight bell. Tamsin is a shadow in a darker shadow, a coil of rope over her shoulder, her face smeared with soot from Mags\'s chimney. She has done this before. You don\'t ask how often.',
        { if: "inParty('hob')", t: 'At the mouth of the alley Hob crouches behind a water-butt, practising his whistle under his breath, very badly. It sounds like a duck being sat on.' },
        'The cell window is a slit at the height of your knee, barred with a single iron rod set in old mortar. Inside, the dark smells of piss and straw and, faintly, of eels.',
        'Round the corner, the undercroft door. One Warden. Awake, this one, and walking.'
      ],
      choices: [
        { t: 'Work the bar out of the mortar while Tamsin watches the corner. Slow and quiet.', if: '!f.e3_watched', check: { stat: 'finesse', dc: 14, pass: 'jail_in', fail: 'jail_caught' } },
        { t: 'You counted his steps this afternoon. Forty paces, a turn, forty back. Time it.', if: 'f.e3_watched', check: { stat: 'finesse', dc: 11, pass: 'jail_in', fail: 'jail_caught' } },
        { t: 'Forget the window. Go round and put the Warden down before he can shout.', check: { stat: 'might', dc: 13, pass: 'jail_door', fail: 'jail_caught' } }
      ]
    },
    jail_door: {
      text: [
        'He turns at the end of his forty paces and you are there. You don\'t give him time to be surprised. An arm round the throat from behind, a knee in the back of his leg, and you take him down and hold him the way you\'d hold a struggling calf, your forearm across his windpipe, until he goes slack.',
        'You check he is breathing. He is. You take his keys.',
        '@tamsin: "Huh," Tamsin says, at your shoulder. "You\'re good at that."',
        '@ansel: "I\'m good at a lot of things I\'m not proud of."'
      ],
      fx: { set: { e3_warden_hurt: 1 } },
      next: 'jail_cell'
    },
    jail_in: {
      text: [
        'The mortar is old and the Lamp is cheap. You work the bar like a bad tooth, a little each way, while Tamsin breathes beside you and counts the Warden\'s steps under her breath. On *thirty-eight* it comes free in your hand with a gritty sigh.',
        'Tamsin goes through the slit like an otter into a riverbank: arms, head, shoulders, gone. A moment later the rope goes taut.',
        'You stay at the window and keep watch, and listen to the girl inside start to cry when she sees a fen face in the dark, and Tamsin hushing her in fen-talk, low and fast and tender, words you don\'t know.'
      ],
      next: 'jail_cell'
    },
    jail_caught: {
      text: [
        { if: "inParty('hob')", t: 'Hob\'s duck-whistle goes off at the mouth of the alley, loud and frantic, a heartbeat too late.' },
        'The bar shrieks in the mortar. Or your boot finds the one loose cobble in Harrowgate. Either way, the Warden comes round the corner with his sword already burning blue, and his mouth already open to shout.',
        'Tamsin\'s arrow takes him in the shoulder-joint of his plate before the shout comes out. It doesn\'t stop him. It does make him angry.'
      ],
      next: 'jail_fight'
    },
    jail_fight: {
      fight: { foes: ['zealot'], allies: ['tamsin'], title: 'The Undercroft Alley', win: 'jail_won', noLoot: true,
        intro: 'Quickly, and quietly. If he gets his breath to shout, the whole Lanternhold wakes.' }
    },
    jail_won: {
      text: [
        'He goes down on the wet cobbles with a clatter like a dropped tray. You kneel on his sword-arm and hit him in the side of the head with Widow\'s pommel until he stops trying to get up. Then once more, to be sure.',
        'He\'s breathing. Bubbling a bit, through a broken nose, but breathing. You will remember his face. He will certainly remember yours.',
        'You take his keys.'
      ],
      fx: { set: { e3_warden_hurt: 1 }, rep: { lamp: -1 } },
      next: 'jail_cell'
    },
    jail_cell: {
      loc: 'The Lanternhold — the undercroft',
      text: [
        'The undercroft is a long low vault of old stone, older than the Lanternhold above it, lit by one guttering rush. Cells along one side. Edda Moss in the last of them, on her knees in the straw, her braid hacked off at the nape already, her face swollen from the gauntlet. When she sees Tamsin she makes a small sound and grabs her by both arms.',
        'At the far end of the vault, past the last cell, a stair goes down. At its foot is a door, banded with iron, and under the door there is a line of light. Blue light. Steady. And a sound, very faint, almost below hearing: a hum. Not a voice. Like a finger run round the rim of a glass.',
        'Your left palm, which has been quiet all night, wakes and burns so hard you could weep.'
      ],
      choices: [
        { t: 'Go down. Look.', go: 'jail_door_down' },
        { t: 'Get the girl and get out. Now.', go: 'jail_out' }
      ]
    },
    jail_door_down: {
      text: [
        'You get three steps down before Tamsin\'s hand closes on the back of your belt and hauls.',
        '@tamsin: "*No*," she hisses. White to the lips. Not afraid of being caught. Afraid of the door. "Not tonight. Whatever that is, not tonight, not with her. Sergeant. *Please*."',
        'You have never heard her say please.',
        'The hum goes on, patient, under the door. You go back up.'
      ],
      fx: { set: { e3_saw_crypt_door: 1, e3_tam_please: 1 } },
      next: 'jail_out'
    },
    jail_out: {
      text: [
        'Out, the way you came. Up the alley, through the dark, the three of you, Edda between you with her bare feet bleeding on the cobbles and not making a sound about it.',
        'Through the Hen\'s yard gate. Through the kitchen, where Mags is waiting with a candle and a blanket and the face of a woman who has done this before. Down the cellar steps, behind the small-beer casks.',
        'It is two hours before dawn when you come back up. Your hands have started to shake. Tamsin\'s haven\'t. Not yet.'
      ],
      fx: { set: { e3_edda: 'saved', e3_edda_route: 'jailbreak' }, rep: { lamp: -1, fen: 1 }, xp: 60, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'done', note: 'You and Tamsin broke Edda Moss out of the Lanternhold undercroft. She is hidden in Mags\'s cellar.' } },
      next: 'cellar1'
    },
    bribe_night: {
      loc: 'The Lanternhold — the undercroft, after midnight',
      text: [
        'The alley door has its bar up, as promised. The Warden who should be on it is round the front, being talked at by a weeping Lamplighter about the state of his soul.',
        'Inside, the undercroft: a long low vault of old stone, older than the Lanternhold above it. One guttering rush. Cells along one side. The last one stands an inch ajar.',
        'Edda Moss is on her knees in the straw. Her braid has been hacked off at the nape. When she sees Tamsin she grabs her by both arms and doesn\'t let go.',
        'At the far end of the vault a stair goes down to a door banded with iron, and under it there\'s a line of steady blue light, and a hum, faint, like a wet finger round the rim of a glass. You don\'t go down. You have been paid for one door tonight and it isn\'t that one.'
      ],
      fx: { set: { e3_edda: 'saved', e3_edda_route: 'bribe', e3_saw_crypt_door: 1 }, rep: { lamp: -1 }, xp: 40, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'done', note: 'A frightened Lamplighter left a door open. Edda Moss is hidden in Mags\'s cellar.' } },
      next: 'cellar1'
    },
    argue_dawn: {
      loc: 'The Lanternhold steps — dawn',
      text: [
        'They do it on the steps, in the grey, with the town coming up the hill to watch because the town has heard there will be no burning tonight and wants to see what it got instead.',
        'Two Wardens hold Edda by the arms. Brannagh cuts off what is left of her hair with a knife, close to the scalp, in quick hard strokes, and puts it in a brazier. It goes up with a stink like a singed dog. Edda watches it burn the way you\'d watch your house burn.',
        'Then Brannagh takes the iron out of the coals. A seven-point star, the size of a silver penny, on a long handle. She takes Edda\'s right hand in her own, gently, palm up, the way a mother takes a child\'s hand to look for a splinter.',
        'It hisses. Edda screams, once, high and terrible, and then not again, though her whole body goes on screaming without her.',
        'Brannagh lets go of the hand. She looks down at her own palm, where the heat of the iron has reddened it, as if it surprises her. Then she turns to you.',
        '@brannagh: "She is yours, sergeant. Take her out of my sight before I remember my duty."'
      ],
      fx: { rep: { town: 1 } },
      next: 'cellar1'
    },
    cellar1: {
      loc: 'The Gutted Hen — the cellar',
      text: [
        'Behind the small-beer casks, on a straw tick, in the smell of yeast and damp brick, Edda Moss sits with her knees drawn up and a blanket round her. Mags kneels beside her with a bowl of broth and a pot of goose fat.',
        { if: "f.e3_edda_route==='argued'", t: 'Mags smears the goose fat over the burn on Edda\'s palm with two fingers, as gently as icing a cake. The star is already blistering. It will scar white and shiny. She will carry it for the rest of her life, and every Lamplighter who sees it will know.' },
        { if: "f.e3_edda_route!=='argued'", t: 'Mags smears the goose fat on the swelling where the gauntlet caught her. "Not pretty," she says, "but it\'s all still there. You\'ll be bonny again by Saint Corran\'s."' },
        'Tamsin crouches down in front of her. Edda looks at her, and something in her face changes: recognition, sudden and surprised.',
        '@edda: "You\'re— you\'re Gall\'s T—"',
        '@tamsin: "I\'m Tamsin," says Tamsin. Quick, light, ordinary. "Everybody in the fen knows everybody. Eat your broth."',
        'Edda eats her broth. Mags looks at you over the girl\'s shaved head. You look at Tamsin. Tamsin looks at the broth.',
        '@edda: "My uncle Siddy," Edda says, between spoonfuls, to nobody. "Somebody has to tell my uncle Siddy I didn\'t go up."'
      ],
      next: 'cellar_route'
    },
    cellar_route: {
      route: [
        { if: "f.e3_plan==='dueled'", go: 'pyre_route' },
        { go: 'day2' }
      ]
    },

    /* ======================= ACT TWO: THE PYRE ======================= */
    day2: {
      route: [
        { if: "f.e3_plan==='duel'", go: 'duel1' },
        { if: "f.e3_plan==='jail' || f.e3_plan==='bribe'", go: 'search1' },
        { go: 'pyre_route' }
      ]
    },
    search1: {
      loc: 'The Gutted Hen — morning',
      card: { kind: 'act', title: 'Part Two', sub: 'The Pyre' },
      text: [
        'They come at the breakfast hour, six of them, white plate in a brown room, and the common room empties out the front door as they come in the back.',
        'At their head, a young Warden with a face like a chapel statue and a fervour in his eyes that hasn\'t slept: Corwin Ashlar, Brannagh\'s second.',
        '@narrator: "A heretic was taken out of the Lanternhold in the night," he says, to the room, to you. "By someone who knew the undercroft. We are searching every house on the Tanners\' Bottom. Every one."',
        'Mags stands behind her bar with her forearms on it. Two feet in front of her is the trapdoor to the cellar, under a rag rug. Your boot is on the rug.',
        { if: "inParty('hob')", t: 'Hob is in the doorway to the yard with a bucket of slops in each hand, and he does not move out of it, and a Warden has to turn sideways to get past him.' }
      ],
      choices: [
        { t: '"We\'ve been drinking here since sundown, Warden. Ask anyone. Ask the Marshal; he likes me."', check: { stat: 'presence', dc: 13, pass: 'search_pass', fail: 'search_fail' } },
        { t: 'Say nothing. Stand on the rug. Let him look at your face and decide.', check: { stat: 'grit', dc: 13, intimidate: true, pass: 'search_pass', fail: 'search_fail' } },
        { t: 'Let Mags handle it. It\'s her house.', go: 'search_mags' }
      ]
    },
    search_mags: {
      text: [
        '@mags: "Search away, love." Mags doesn\'t move from the bar. "Mind the casks in the yard, they\'re Saint Corran\'s ale and they bruise. And while you\'re at it, tell your Lampwarden that Mags Halloran of the Gutted Hen has paid her tithe-silver every quarter for twenty-two years and sent her own son up on a Lamp pyre that the Marshal paid for, and if one of her lads breaks a single mug, I will walk up that hill and say so to the Abbess in her own chapel. Loudly."',
        'Corwin stares at her. Behind him, an older Warden clears his throat and murmurs something about the Abbess.',
        'They search the yard. They search the rooms upstairs. They don\'t search under the rug, because a big woman is standing six inches from it, looking at them as if they were muddy dogs.'
      ],
      fx: { bond: { mags: 1 } },
      next: 'search_after'
    },
    search_pass: {
      text: [
        'Corwin looks at you a long time. You let him. You have been looked at by better.',
        'He tells his men to search the yard and the rooms. They do. They find Pell\'s spare bottle and Tamsin\'s stolen apples and nothing else.',
        'At the door he turns back.',
        '@narrator: "Heaven sees, sergeant," Corwin says. "Even in cellars."',
        '> Not all of it, son. Not all of it.'
      ],
      next: 'search_after'
    },
    search_fail: {
      text: [
        'Corwin looks at you, and at your boot on the rug, and you see him start to understand.',
        'He takes one step toward you. Then the front door opens, and Brannagh is standing in it, in the sun, helm under her arm.',
        '@brannagh: "Warden Ashlar. Enough. They are not fools enough to keep her under their own floor." A beat. She looks at you. At your boot. At the rug. Not a muscle in her face moves. "Search the tannery pits. Fen-folk hide things in water."',
        'They go. She is last out of the door. She doesn\'t look back. She doesn\'t have to.'
      ],
      fx: { set: { e3_brannagh_knows_cellar: 1 }, rep: { lamp: -1 } },
      next: 'search_after'
    },
    search_after: {
      text: [
        'When they\'ve gone, Mags sits down very suddenly on a stool, the way a full sack sits when you let go of it, and laughs until she has to wipe her eyes.',
        '@mags: "Twenty-two years," she says. "I\'ve always wanted to say that to a Warden."'
      ],
      next: 'pyre_route'
    },

    /* ---- The Ordeal ---- */
    duel1: {
      loc: 'The Market Square — noon',
      card: { kind: 'act', title: 'Part Two', sub: 'The Ordeal' },
      text: [
        'The whole town is in the square. They have heard. A dead sergeant against a Lampwarden, for an eel-girl. Nobody has seen an Ordeal in sixty years. Nobody would miss it for the world.',
        'Edda is already tied to the stake on top of the unlit pyre, so Heaven can see her while it decides. She is watching you.',
        'Hask is at the front of the crowd with a purse in his hand, laughing, taking bets from his own men. He catches your eye and taps the purse and points at you. *My money\'s on you, sergeant.* It is the worst encouragement you have ever had.',
        { if: "inParty('pell')", t: 'Pell, beside you, mumbling, ties a scrap of grey cloth round your left arm. "A champion\'s favour. From the accused. It\'s in the Book." He wipes his eyes. "She tore it off her own shift. Don\'t you *dare* lose."' },
        'Corwin Ashlar steps into the ring in his white plate, and kneels, and prays aloud, and rises. He salutes Brannagh. He salutes you. He is beautiful and certain and he has never been hit by anyone who meant it.'
      ],
      choices: [
        { t: 'Salute him back. Do it properly. He deserves that much.', go: 'duel_fight', fx: { set: { e3_saluted: 1 } } },
        { t: 'Don\'t salute. Spit, and roll your shoulders. Let him see what he\'s fighting.', go: 'duel_fight', fx: { rep: { town: 1 } } },
        { t: 'Look up at Edda on the pyre. Nod to her. Once.', go: 'duel_fight', fx: { set: { e3_nodded_edda: 1 } } }
      ]
    },
    duel_fight: {
      fight: { foes: ['e3_corwin'], solo: true, title: 'The Ordeal of Steel', win: 'duel_won', lose: 'duel_lost', noLoot: true, noWound: true,
        intro: 'Until one yields or cannot rise. Steel only; the Ordeal forbids the fire. He is fast and he is drilled. Watch for the full drill.' }
    },
    duel_won: {
      text: [
        'He is good. He is very, very good, the way a book is good: everything in the right place. He has never fought anyone who fights like a man in a ditch.',
        'You take a cut across the ribs to get inside his guard, and then you are inside it, and you hook his ankle and drive your forehead into his face and he goes down on his back on the cobbles with his beautiful nose in a different place.',
        'Widow\'s point at his throat.',
        '@narrator: "I don\'t—" Blood in his teeth. Tears in his eyes, of pure rage. "I don\'t yield. Heaven doesn\'t yield. *I don\'t*—"',
        'The square is silent. Up on the pyre, Edda Moss has stopped breathing.'
      ],
      choices: [
        { t: '"Yes, you do, son." Press. Just enough that he feels it. Wait.', go: 'duel_yield' },
        { t: 'Look at Brannagh. It\'s her boy. Let her call it.', go: 'duel_brannagh' },
        { t: 'Cut him. Not deep. Across the cheek, so every time he looks in a glass he remembers what Heaven gave you.', go: 'duel_cut' }
      ]
    },
    duel_yield: {
      text: [
        'You lean. Just a little. A bead of blood comes up on his throat and runs sideways into his collar.',
        'He holds out for a long time. Longer than you would have. Then something goes out of him, and he turns his face away into the cobbles.',
        '@narrator: "...Yield."',
        'You take the point away. You offer him your hand. He doesn\'t take it. That\'s fair.'
      ],
      next: 'duel_after'
    },
    duel_brannagh: {
      text: [
        'You look across the ring at her. She is standing very still, her hand on her sword, her face white.',
        '@brannagh: "Heaven has judged," she says. Her voice carries to the back of the square. "Warden Ashlar. Rise."',
        'He tries to argue. She looks at him, once, and he stops. You take the point away. As you step back, her eyes meet yours over his head, and there is something in them you have seen before, in a good officer, looking at a man who did a hard thing cleanly.'
      ],
      fx: { set: { e3_let_brannagh_call: 1 } },
      next: 'duel_after'
    },
    duel_cut: {
      text: [
        'Widow flicks. It\'s nothing. A finger\'s length, cheekbone to jaw, quick as a signature.',
        'He screams more at that than at the broken nose. The crowd makes a noise like a wave going out.',
        'When you look up, Brannagh is looking at you, and whatever you saw in her face a moment ago is gone. What\'s left is very cold and very clear.',
        '@brannagh: "Heaven has judged," she says. "The girl walks." Then, to you only, not loudly: "And so have I."'
      ],
      fx: { set: { e3_scarred_corwin: 1 }, bond: { brannagh: -1 }, rep: { lamp: -1, town: 1 } },
      next: 'duel_after'
    },
    duel_after: {
      text: [
        'They cut Edda down off the pyre. She can\'t stand. You carry her out of the square through a crowd that doesn\'t know whether to cheer, and so mostly doesn\'t, except for Hask, who is cheering, and collecting.',
        '@hask: "I *told* you lads. That\'s my sergeant." He claps your shoulder as you pass. "Taught him everything."',
        'You don\'t stop. Behind you, you hear a Warden say *the fen-girl\'s been seen*, and another say *she\'ll not last the week in the March*, and you know that whatever Heaven decided, the Wardens haven\'t.',
        'Mags\'s cellar, then.'
      ],
      fx: { set: { e3_edda: 'saved', e3_edda_route: 'duel', e3_duel: 'won', e3_plan: 'dueled' }, rep: { lamp: -1, town: 2 }, xp: 60, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'done', note: 'You won the Ordeal of Steel. Heaven gave Edda Moss back. She is hidden in Mags\'s cellar.' } },
      next: 'cellar1'
    },
    duel_lost: {
      text: [
        'He is good. He is very, very good, and today he is better than you.',
        'You see it coming and can\'t stop it: a feint you\'d have read in your sleep at twenty-five, and then the flat of his blade across your temple, and the cobbles come up and hit you in the face.',
        'When the world comes back his point is at your throat, and he is weeping with joy.',
        '@narrator: "Heaven has *judged*," he is saying. "Heaven has judged, Heaven has—"',
        '@brannagh: "Enough." Brannagh, from somewhere above. "Warden Ashlar. Enough. Let him up."',
        'You lie on the cobbles. Up on the pyre, tied to the stake, Edda Moss is looking down at you. She doesn\'t look angry. She looks as if she is sorry for you.'
      ],
      fx: { set: { e3_duel: 'lost', e3_plan: 'lost' }, wound: 'head', rep: { lamp: 1 } },
      next: 'pyre_route'
    },

    /* ---- The pyre ---- */
    pyre_route: {
      route: [
        { if: "f.e3_edda==='saved'", go: 'pyre_empty' },
        { go: 'pyre_full' }
      ]
    },
    pyre_full: {
      loc: 'The Market Square — the Evening Lamp',
      text: [
        'They light the lamps all round the square at dusk, blue ones, Lanternhold oil, and the whole town stands in the blue light like people at the bottom of a pond.',
        'Edda Moss is tied to the stake by the waist and the throat. They have cut her braid off. Her face is swollen. She keeps looking out over the crowd, not frightened yet, the way you would look for someone at a fair.',
        'At the edge of the square, in a litter with the curtains back, Lord Varane sits with his foot up and his face grey, and Lady Isolde stands beside him in a dark cloak with her hand on the litter-pole, gripping it. Hask\'s men hold the crowd back with their spear-shafts. The Abbess blesses the faggots, one by one, humming.',
        { if: "f.e3_plan==='none'", t: 'Tamsin is there. You didn\'t think she would be. She is standing in the front of the crowd with her bow over her shoulder and her face like a shut door. She did not come to stand with you. She came to stand with Edda.' },
        { if: "f.e3_plan!=='none'", t: 'Tamsin is beside you with her bow over her shoulder. She has not said a word since noon.' },
        'Lampwarden Brannagh Vey stands by the pyre with a lit torch in her hand, reading the Writ aloud in a clear, carrying voice. When she is finished she rolls it up and looks out over the crowd and finds you.',
        'You find yourself walking toward her.'
      ],
      next: 'pyre_talk'
    },
    pyre_empty: {
      loc: 'The Market Square — the Evening Lamp',
      text: [
        'They light it anyway.',
        'The blue lamps go up around the square at dusk, and the whole town stands in the blue light like people at the bottom of a pond, and there is nobody tied to the stake.',
        { if: "f.e3_edda_route==='jailbreak' || f.e3_edda_route==='bribe'", t: 'Brannagh has a straw man tied up there in a dress, and a sign hung round its neck: EDDA MOSS, HERETIC. The crowd doesn\'t know whether to laugh. It is more frightening than a real girl would have been. It says: *we know her name. We will finish this later.*' },
        { if: "f.e3_edda_route==='argued' || f.e3_edda_route==='duel'", t: 'The stake stands bare. Brannagh reads the Writ to it anyway, and the rite of the Kindling, every word, and then lights it, because the Writ says there will be a fire in Harrowgate, and the Writ will be obeyed even if there is nothing to put in it.' },
        'Lord Varane watches from his litter at the edge of the square. Isolde, beside him, is watching you and not the fire.',
        'The pyre burns with nothing in it. Brannagh stands beside it with the torch, very straight, until the stake falls in. Then she looks out over the crowd and finds you.',
        'You find yourself walking toward her.'
      ],
      next: 'pyre_talk'
    },
    pyre_talk: {
      text: [
        'The heat comes off the faggots in a wall. She is standing so close to it that her eyebrows must be singeing. She doesn\'t step back.',
        { if: "f.e3_edda==='saved'", t: '@brannagh: "Sergeant Dray. Come to watch nothing burn?"' },
        { if: "f.e3_edda!=='saved'", t: '@brannagh: "Sergeant Dray. You came."' },
        'Up close, in the firelight, she looks younger than in the hall. There is a smear of soot on her cheekbone. Her eyes are very tired and very clear.'
      ],
      choices: [
        { t: '"Her father asked her to bury him. That\'s the whole crime. She loved him."', go: 'pyre_why' },
        { t: '"How many of these have you lit?"', go: 'pyre_count' },
        { t: '"I\'ll remember your face, Lampwarden."', go: 'pyre_threat' }
      ]
    },
    pyre_why: {
      text: [
        '@brannagh: "I know." Simply. "I read the deposition. Rafe Moss was frightened of the fire and he begged his daughter to put him in the mud instead, and she loved him enough to do it." She looks at the stake. "She loved him enough to damn him. Out of the sight of Heaven, sergeant, in the dark, forever, alone. That is not a small thing to do to someone you love."',
        '@ansel: "And this is?"',
        '@brannagh: "This is an hour." She doesn\'t flinch. "An hour of pain, and then light. Forever. I would give an hour for that. I *have*." Her hand goes, without her seeming to know it, to the burn down her throat.',
        'You find you have no answer. Not because she\'s right. Because she believes it so completely that there is nowhere to put an answer in.'
      ],
      fx: { bond: { brannagh: 1 }, set: { e3_pyre_talk: 'why' } },
      next: 'pyre_talk2'
    },
    pyre_count: {
      text: [
        'She doesn\'t pretend not to understand.',
        { if: "f.e3_edda==='saved'", t: '@brannagh: "Nineteen. Since I took the star." A pause; her eyes go to the empty stake, then to you. "Not twenty. Not tonight." She says it like a quartermaster. "I know all their names. I say them, at night."', else: '@brannagh: "Nineteen. Since I took the star." A pause. "Twenty, tonight." She says it like a quartermaster. "I know all their names. I say them, at night."' },
        '@ansel: "So do I."',
        'She turns her head and looks at you properly, for the first time, the way you\'d look at a man across a field when you\'ve both just noticed you\'re carrying the same kind of sword.',
        '@brannagh: "How many?"',
        '@ansel: "Four hundred and five."',
        'She takes that in. She doesn\'t say she\'s sorry. She nods, slowly, as though you have told her your rank.'
      ],
      fx: { bond: { brannagh: 1 }, set: { e3_told_brannagh_roll: 1, e3_pyre_talk: 'count' } },
      next: 'pyre_talk2'
    },
    pyre_threat: {
      text: [
        '@brannagh: "Good." She doesn\'t even look round. "Someone should."',
        'The fire cracks. A log rolls. She doesn\'t move.',
        '@brannagh: "You think I don\'t know what I look like to you. I know exactly. I have seen it in a thousand faces at the back of a thousand crowds. I see it in the glass when I wash." Quiet. "Remember my face, sergeant. Remember it well. And then go home and ask yourself what you would do, if you truly believed what I believe, and loved them as I do."'
      ],
      fx: { rep: { lamp: -1 }, set: { e3_pyre_talk: 'threat' } },
      next: 'pyre_talk2'
    },
    pyre_talk2: {
      text: [
        'She looks at you sidelong. The firelight makes her eyes almost gold.',
        '@brannagh: "You stood at the back of the hall like a man who has stood in a line. You hold that sword like you were born holding it. I have been watching you for two days, Ansel Dray, and you are the only man in this town who frightens me even slightly." A breath, not quite a laugh. "I find I don\'t mind. Who are you?"',
        '@ansel: "Nobody."',
        '@brannagh: "No," she says, thoughtfully, turning back to the fire. "I don\'t think that\'s it. I think nobody is the one thing you\'re not."'
      ],
      fx: { set: { e3_brannagh_seen: 1 }, know: { cast: ['brannagh'] } },
      next: 'pyre_after_talk'
    },
    pyre_after_talk: {
      route: [
        { if: "f.e3_edda==='saved'", go: 'pyre_empty_end' },
        { go: 'pyre_light' }
      ]
    },
    pyre_empty_end: {
      text: [
        'She hands the torch to a Warden, and turns, and goes up the hill to the Lanternhold in her white plate through the blue-lit crowd, and the crowd parts for her the way water parts for a ship.',
        'At the edge of the square she stops and says something to Oriel\'s glass carriage. The curtain moves. Nothing else.',
        'Behind you the empty stake falls in on itself in a gout of sparks. Somebody in the crowd starts, very quietly, to clap. Somebody else hushes him.'
      ],
      next: 'varane1'
    },
    pyre_light: {
      text: [
        'She goes back to the pyre. She lifts the torch. She says the last words of the Kindling, *go up, go up, and be counted*, and puts it to the dry wood.',
        'It catches fast. The dry wood on top roars up yellow, and the green wood underneath begins to smoke and hiss and spit, and through it all you can see Edda\'s face, and you watch her understand, all at once, what is happening to her.',
        'She screams for her father. Then for her uncle. Then not for anyone, just screaming, high and continuous, as the flames come up her skirt and take it and her hair, what\'s left of it, goes up in a single bright flash like a struck match. The smell reaches you. You know that smell. Everyone who has been in a war knows it. It smells like pork.',
        { if: "f.e3_plan==='none'", t: 'Tamsin has come back through the crowd to your side. You didn\'t see her come. She doesn\'t look at you.' },
        'Beside you, Tamsin has her bow in her hand. You didn\'t see her string it. There is an arrow on the string. Her face is perfectly white and perfectly calm and tears are running down it as if they belong to someone else.',
        '@tamsin: "Sergeant." Very low. Very steady. "Tell me to."'
      ],
      choices: [
        { t: '"Do it."', go: 'pyre_mercy', fx: { set: { e3_told_tam: 1 }, bond: { tamsin: 1 } } },
        { t: '"No. They\'ll hang you on the same stake."', go: 'pyre_burn' },
        { t: '"Give me the bow. I\'ll carry this one. Not you."', go: 'pyre_bow' }
      ]
    },
    pyre_bow: {
      text: [
        'You reach for it. She turns her shoulder and you get nothing but air.',
        '@tamsin: "No." Not looking at you. Drawing. "She\'s fen. It should be fen."',
        'And then she does it anyway, the thing you tried to take from her, and you understand that you couldn\'t have. That she was always going to. That she wanted you to *say* it so that it would be the two of you and not just her.'
      ],
      fx: { bond: { tamsin: 1 }, set: { e3_offered_bow: 1 } },
      next: 'pyre_mercy'
    },
    pyre_mercy: {
      text: [
        'She draws to the ear, and holds, one heartbeat, two, through the heat-shimmer and the smoke, at forty yards, at a screaming girl on fire.',
        'She looses.',
        'Grey goose-feather. You see it go in, just under the left breast, where the heart is. You see Edda\'s body jerk against the ropes, once, and then sag, her head falling forward, the scream stopping as if a door had shut on it. The fire goes on. She doesn\'t feel it any more.',
        'Nobody in the crowd understands for a moment. Then a Warden shouts, and points, and three of them start toward you through the people, swords coming out.',
        'Brannagh raises one hand. Just one. They stop.',
        'She looks across the square at Tamsin, and at the bow, for a long, long moment. Then she looks back at the pyre, at the grey feather burning on the girl\'s breast, and she bows her head.'
      ],
      fx: { set: { e3_edda: 'mercy' }, rep: { fen: 2, lamp: -1 }, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'failed', note: 'Edda Moss burned at the Evening Lamp. Tamsin put an arrow through her heart, so that she would not feel it.' } },
      next: 'pyre_mercy2'
    },
    pyre_mercy2: {
      text: [
        'Tamsin unstrings the bow. Her hands are perfectly steady. She coils the string and puts it in her pouch, and slings the bow, and turns, and walks away out of the square through the crowd, not fast, not slow.',
        'You follow her. She goes down an alley off the Stair, and three steps into it her legs go out from under her as if somebody has cut the strings, and she kneels in the filth and vomits, and vomits, and when there is nothing left she stays down on her hands, head hanging, and makes a sound you have only heard from men with their guts in their laps.',
        '@tamsin: "Mam," she says. "*Mam.* I\'m sorry. I\'m sorry. I\'m sorry I didn\'t, I was *nine*, I didn\'t have a—"',
        'You kneel down in the alley with her. You don\'t touch her. Not yet. You stay there, so she knows there is someone there, until she reaches out blindly and gets a fistful of your coat and holds it like a rope over a cliff.'
      ],
      fx: { set: { e3_tam_broke: 1 } },
      next: 'varane1'
    },
    pyre_burn: {
      text: [
        'She looks at you. For one moment you think she\'ll do it anyway.',
        'Then she lowers the bow. She takes the arrow off the string. She stands there with it in her hand and watches.',
        'It takes a long time. Green wood. That is what the green wood is for.',
        'Tamsin does not look away. Not once. Not when the screaming stops, not when it starts again, not when it stops for good. Her eyes are open and streaming and fixed on the fire, and you understand, finally, what this is for her.', { if: 'f.e1_tam_mother', t: 'Under the wagon on the downs she told you. *They make the children watch. So we learn.*' },
        'She is learning. You can see it going into her. You can see exactly where it\'s going.'
      ],
      fx: { set: { e3_edda: 'burned' }, bond: { tamsin: -1 }, rep: { lamp: 1 }, quest: { id: 'e3_edda', title: 'The Fen Girl', state: 'failed', note: 'Edda Moss burned at the Evening Lamp. It took a long time.' } },
      next: 'pyre_burn2'
    },
    pyre_burn2: {
      text: [
        'Afterward the square empties, slowly, the way a church empties after a funeral. The fire settles to a red heap. Something black in the middle of it that used to be a girl.',
        'Tamsin puts the arrow back in her quiver, carefully, point down.',
        '@tamsin: "I\'m going to keep that one," she says, to no one. Then she goes. You let her.'
      ],
      next: 'varane1'
    },

    /* ---- The lord notices ---- */
    varane1: {
      loc: 'Varane Keep — the lord\'s solar, night',
      text: [
        'The page with the ink-stain on his lip finds you at the Hen at the second bell. *His lordship.* Not her ladyship. His.',
        'Lord Varane\'s solar is a small warm room at the top of the Keep, crowded with books and with maps of a canal: the same canal, again and again, in different hands, inked and re-inked, from the Gallowmere to the Kingsroad river. On one wall someone has drawn it in red as if it were finished. It is not finished. Everyone in the March knows it is not finished.',
        'He sits by the fire with his gouty foot in a basin of cold water, in a dressing-gown with moth-holes in it, and a cup of wine he is, this time, drinking.',
        '@varane: "Sit. Please. I can\'t stand, so I\'ve made a rule that nobody else may either. It makes me feel less of a fool." He has a kind voice. It is the voice of a man who has apologised for things all his life. "You\'re Dray. The rat man. Konrad\'s dead sergeant. You stood in my hall today and looked at that woman as if you were measuring her for a coffin, and she looked back the same, and I thought: well. There\'s two people in my town who aren\'t afraid of each other."',
        { if: "f.e3_edda==='saved'", t: '@varane: "And tonight there\'s an empty stake in my market. I don\'t know how you managed it, and I would very much prefer not to."' },
        { if: "f.e3_edda==='mercy'", t: '@varane: "And tonight a girl was spared the last of it by an arrow from the crowd. I didn\'t see who loosed it. I was looking very carefully at my foot."' },
        { if: "f.e3_edda==='burned'", t: '@varane: "And tonight we burned a girl in my market for loving her father. I sat in my litter and watched it, because I am the Lord of Harrowgate and that is what I am for." He drinks. "You watched it too."' }
      ],
      fx: { set: { e3_varane_met: 1 }, know: { cast: ['varane'] } },
      choices: [
        { t: '"What do you want with me, my lord?"', go: 'varane_work' },
        { t: '"Why didn\'t you stop it? It\'s your town."', go: 'varane_why' },
        { t: '"Do you trust your Marshal?"', go: 'varane_hask' }
      ]
    },
    varane_work: {
      text: [
        '@varane: "Straight to it. Good. Isolde will like that; she says I take a quarter of an hour to ask for the salt." He shifts his foot in the basin and hisses. "Saltdown. My mines in the chalk, north. Salt and a little silver. They are the only thing in the March that pays, and this year they have paid less than half what they paid last year, though Konrad sends more men up every month, and my Marshal, who holds the concession, tells me it is the damp."',
        '@ansel: "And you don\'t believe him."',
        '@varane: "I believe everything Konrad tells me. It\'s a great weakness of mine." A small, sad smile. "I would like someone who is not Konrad to go and look at the damp. Not yet. Not with the Lamp in my town and the Prince\'s envoy writing to me about the Feast. Soon. Will you come when I send?"'
      ],
      fx: { set: { e3_varane_offer: 1 }, rep: { varane: 1 } },
      next: 'varane3'
    },
    varane_why: {
      text: [
        'He doesn\'t take offence. You almost wish he would.',
        '@varane: "Because I am a weak man, Master Dray." He says it simply, as a fact, the way he might say *because I have gout*. "Because I owe the Lamp eleven hundred crowns in tithe I could not pay in the bad years, and the Abbess forgave it, and a man who has been forgiven a debt is a man on a lead. Because if I put my spears between a Writ and a heretic, the Hierarch writes to the King, and the King is dying and his son is not, and his son would very much like an excuse to take the March off a gouty old fool who dug half a canal."',
        'He looks at the red line on the wall.',
        '@varane: "I gambled everything on a ditch. I thought it would bring the river trade to Harrowgate. It brought a ditch. My daughter keeps the books now. She is the only reason this house still stands. I know it. She knows I know it. It\'s a great comfort to us both."'
      ],
      fx: { rep: { varane: 1 }, set: { e3_varane_offer: 1 } },
      next: 'varane3'
    },
    varane_hask: {
      text: [
        'For a moment the kind, vague face goes very still, and you see something underneath it: not a fool. A tired man who has been a lord for thirty years.',
        '@varane: "Konrad is the only man in the March who has never once asked me for money." He turns the cup in his hands. "It took me four years to understand that this should worry me."',
        '@varane: "He holds my Saltdown concession. My mines. They have paid less than half this year what they paid last. He tells me it is the damp." He looks at you. "I should like, one day soon, to send somebody who is not Konrad to look at the damp. Somebody who knew him before. Who is not frightened of him."',
        '@ansel: "I\'m not frightened of him."',
        '@varane: "No," says Lord Varane, very gently. "You hate him. It isn\'t the same thing, but it will do."'
      ],
      fx: { rep: { varane: 2 }, set: { e3_varane_offer: 1 } },
      next: 'varane3'
    },
    varane3: {
      text: [
        'The door opens without a knock. Isolde, in a plain dark gown, with a sheaf of letters, stops dead on the threshold.',
        '@varane: "My dear. I\'ve been telling Master Dray all our secrets."',
        '@isolde: "Then he\'s the only man in the March who knows them all, Father, and I\'ll have to put him on the payroll." She does not quite look at you. She puts the letters by his elbow and touches his hair, briefly, as she passes, the way you\'d touch a sleeping child. "Bed. The physician said."',
        'She walks you down the stair herself, with a candle, which is not done. At the bottom she stops.',
        { if: "f.e3_edda==='saved'", t: '@isolde: "I saw the stake," she says. "I don\'t want to know. But thank you." She says *thank you* as if it costs exactly what it\'s worth.' },
        { if: "f.e3_edda!=='saved'", t: '@isolde: "I watched you walk up to her," she says. "To the Lampwarden. Nobody walks up to her." A pause. "I don\'t know if that was brave or stupid. I don\'t think you do either."' },
        { if: "f.e2_annet_where==='lanternhold'", t: '@isolde: "They let me into the white ward now. Annet eats when they spoon it. I go every morning and say her name to her." Her candle shakes, very slightly.', else: '@isolde: "My father sent Annet up to the white ward. For proper care, he said. He signed it while I was at the mill accounts." Her candle shakes, very slightly. "I go every morning and say her name to her. He and I do not talk about it."' },
        { if: 'f.e2_isolde_hired', t: '@isolde: "Keep looking, Master Dray. Especially now. Especially with *them* here."' },
        'Then she goes back up the stair, and the candle goes with her, and you stand in the dark of the hall where the tapestries used to be.'
      ],
      fx: { rep: { varane: 1 }, quest: { id: 'e3_varane', title: 'The Lord\'s Damp', state: 'active', note: 'Lord Varane suspects his Marshal\'s Saltdown mines are being bled. He means to send for you.' } },
      next: 'hob_route'
    },
    hob_route: {
      route: [
        { if: "inParty('hob')", go: 'hob1' },
        { go: 'fen_call' }
      ]
    },
    hob1: {
      loc: 'The Gutted Hen — the yard, late',
      text: [
        'Hob is sitting on the mounting-block in the Hen\'s yard with a wet rag held to his mouth. When he takes it away to grin at you, his lower lip is split like a plum.',
        { if: "f.e3_edda==='saved'", t: '@hob: "Warden came back on his own after dark. Poking round the yard. Lifting things." He spits pink. "I was mucking out right over the cellar hatch. Kept mucking. Mucked a bit on his boots, accidental. He give me the back of his gauntlet but he went."', else: '@hob: "When they pushed the crowd back with the spear-shafts. There was a fen woman with a baby, right at the front." He spits pink. "So I stood in front of her. That\'s all. Shaft caught me. Didn\'t hurt." It clearly hurt.' },
        'He looks at you the way Ox looks at you when there might be an apple.'
      ],
      choices: [
        { t: '"Good lad." Take the rag and look at the lip properly.', go: 'hob2', fx: { bond: { hob: 1 }, set: { e3_hob_moment: 'praised' } } },
        { t: '"Get home, Hob. Next time it\'s a blade, not a shaft."', go: 'hob2', fx: { set: { e3_hob_moment: 'scolded' } } },
        { t: 'Hand him your flask. Say nothing.', go: 'hob2', fx: { set: { e3_hob_moment: 'flask' } } }
      ]
    },
    hob2: {
      text: [
        { if: "f.e3_hob_moment==='praised'", t: 'You pinch the lip shut and tell him it won\'t need stitching, which is a lie, and he sits so straight on the mounting-block he nearly falls off it.' },
        { if: "f.e3_hob_moment==='scolded'", t: '@hob: "I\'m not going home." Quietly, to the rag. "You can stop saying it. It\'s like Ox. He bites everybody and everybody keeps feeding him."' },
        { if: "f.e3_hob_moment==='flask'", t: 'He takes a pull, chokes, and hands it back with his eyes streaming. "That\'s *horrible*," he says, delighted, and takes another.' }
      ],
      next: 'fen_call'
    },

    /* ======================= ACT THREE: GALLOWMERE ======================= */
    fen_call: {
      loc: 'The Gutted Hen — morning',
      card: { kind: 'act', title: 'Part Three', sub: 'Gallowmere' },
      text: [
        'He is waiting in the common room when you come down: a big, slope-shouldered man of fifty in an eel-man\'s leather apron, with hands like spades and a face like a dropped pie. He stands when he sees you.',
        { if: "f.e3_edda==='saved'", t: 'Mags brought him in through the yard before dawn, and he has been in the cellar with his niece all night, and his eyes are swollen to slits. He takes your hand in both of his and holds it and can\'t speak. "Siddy Moss," he manages at last. "Her uncle. You— Mothers below. You."' },
        { if: "f.e3_edda==='mercy'", t: '@narrator: "Siddy Moss. Edda\'s uncle." His voice is perfectly flat. "I was in the square. I saw the arrow." He looks past you, at Tamsin on the stair. He crosses the room to her, and before she can move, takes her hand, the bow-hand, and kisses the knuckles, and holds it to his forehead. Tamsin stands like a post. Her face does nothing. Her hand is shaking in his.' },
        { if: "f.e3_edda==='burned'", t: '@narrator: "Siddy Moss. Edda\'s uncle." His voice is perfectly flat. "I was in the square. You were in the square. Everybody was in the square." He doesn\'t say anything else about it. He doesn\'t need to.' },
        '@narrator: "I\'ve come about the lights," he says. "On the Drowning Mere, past Cutler\'s. Lantern Men. Seven of us gone in a month, off the weirs, at night. Good men. My Col went out after them three nights back and didn\'t come home. The Marshal says it\'s fen business. The Lamp says lights are the souls of heretics and serve us right. Forty silver and all the eels you can eat for a year. Will you come?"'
      ],
      choices: [
        { t: '"Forty and the eels. We\'ll come."', go: 'fen_call2', fx: { set: { e3_fen_fee: 1 } } },
        { t: '"Keep your silver. We\'ll come."', go: 'fen_call2', fx: { rep: { fen: 2 }, set: { e3_fen_free: 1 } } },
        { t: '"Why not ask Mother Gall? I hear she\'s the power out there."', go: 'fen_call_gall' }
      ]
    },
    fen_call_gall: {
      text: [
        'Siddy Moss makes a sign with two fingers toward the floor, quickly, the way a Lamp man would touch his heart.',
        '@narrator: "I asked. Gall says the fen takes what it\'s owed, and it\'s been owed a lot this month." He looks at his hands. "Folk are frightened to put their dead in the mud with them Wardens in town. So they\'ve left them in the water, or burned them on the quiet, or let them lie. And Gall says lights come where the dead lie unburied. And Gall says she\'s not our mam." A breath. "Forty silver. And the eels."',
        'At the foot of the stair, Tamsin has gone very quiet.'
      ],
      fx: { set: { e3_fen_fee: 1 } },
      next: 'fen_call2'
    },
    fen_call2: {
      text: [
        '@tamsin: "I know the way," says Tamsin.',
        { if: "inParty('pell')", t: '@pell: "Of course you do," says Pell, mournfully, pulling on his boots. "Of course she does. I don\'t suppose anyone has considered that I am a Lamplighter, defrocked or not, and that the fen-folk say the lights are especially fond of priests?" Nobody has. He comes anyway.' },
        { if: "inParty('hob')", t: 'Hob is already saddling Ox. Ox has already bitten him. He is grinning like a lunatic.' }
      ],
      fx: { quest: { id: 'e3_fen', title: 'Lights on the Drowning Mere', state: 'active', note: 'Lantern Men are drowning the eel-men of Gallowmere. Siddy Moss\'s son Col went after them and did not come home.' } },
      next: 'fen1'
    },
    fen1: {
      loc: 'Gallowmere Fen — afternoon',
      text: [
        'South of Harrowgate the land gives up. Fields become water-meadows become reed-beds become a flat brown country of black water and islands of sedge, under a sky so big and so low you feel it pressing on the top of your head. Herons stand in the shallows like old men waiting for a funeral. The air smells of rot and peat and myrtle, sweet and rank at once.',
        'You leave the horses at the last farm. Ox bites the farmer.',
        'Tamsin changes out here. You see it happen. She takes her boots off and ties them round her neck and goes barefoot, and her whole body loosens, as if she\'s put down something heavy. She walks the hidden causeways without looking down: a sunken post here, a tussock there, a line of old stakes under an inch of water that you\'d never see. She doesn\'t test them. She knows them.',
        { if: "inParty('pell')", t: 'Pell goes in up to the thigh twice. The second time he lies back in the water and stays there for a while, staring at the sky, and says, "I see now that this is my penance," and Tamsin hauls him out by his collar.' }
      ],
      choices: [
        { t: '"You know this ground well."', go: 'fen1_ask' },
        { t: 'Say nothing. Put your feet exactly where she puts hers.', go: 'fen1_follow' }
      ]
    },
    fen1_ask: {
      text: [
        '@tamsin: "I grew up on it." Easy. Not turning round. "Every fen kid knows the causeways. The ones who don\'t, drown. It\'s not a hard lesson. You only have to fail it once."',
        'It\'s a good answer. It\'s probably true. She doesn\'t look back at you while she gives it.'
      ],
      next: 'fen_weir'
    },
    fen1_follow: {
      text: [
        'You step where she steps. Post, tussock, stake. After a mile she notices, and glances back, and you see her almost smile.',
        '@tamsin: "Good dog."',
        '@ansel: "Woof."',
        'She laughs, surprised, and turns away quickly, as if she\'s given something away.'
      ],
      fx: { set: { e3_followed_tam: 1 } },
      next: 'fen_weir'
    },
    fen_weir: {
      loc: 'Cutler\'s Mere — the eel-weirs, dusk',
      text: [
        'Cutler\'s Mere is a long dark water fenced across with eel-weirs: wattle hurdles staked in lines, funnelling down into wicker traps. The traps are full. Nobody has emptied them in days. The eels are dying in them, slowly, in knots.',
        'On a little tump of dry ground at the water\'s edge, a fresh mound of earth, already greening. A wooden bowl beside it, upturned, with a skin of sour milk dried white in the bottom. Rafe Moss, who sold eels to Mags for twenty years and never once short-weighted her.',
        'Then the water by the furthest weir stirs.',
        'Two of them come up out of it, slowly, the way men stand up after kneeling a long time. Eel-men, in leather aprons, their faces blue and swollen, their eyes white, weed in their hair. One still has a gutting knife in his fist. They are smiling. Their smiles are much too wide.',
        '@tamsin: "Oh, no," Tamsin says softly. "Oh, Tobin. Oh, Wenn. Who left you in the water?"'
      ],
      fx: { know: { beast: ['drowned'] } },
      next: 'fen_weir_fight'
    },
    fen_weir_fight: {
      fight: { foes: ['drowned', 'drowned'], title: 'Cutler\'s Mere', win: 'fen_weir_after',
        intro: 'They were men a month ago. Fire and witch-salt hurt them. Watch for them sinking to drag you down.' }
    },
    fen_weir_after: {
      text: [
        'When they go down the second time they stay down, face-up in the shallows, and the smiles go out of their faces as the water closes, and they just look like drowned men again. Tired ones.',
        'Tamsin wades in and closes their eyes with her thumb. She doesn\'t say the old words. Not here, not with you watching. But her lips move.',
        'Far out across the fen, past the mere, past the reed-islands, as the dusk comes down, a light comes on. Then another. Then six more, low on the water, swaying, warm and yellow, like the windows of a village where no village is.',
        'They are very beautiful. You want, quite badly, to walk toward them.',
        '@tamsin: "Don\'t look at them too long." She takes your sleeve. "We\'re not going out there in the dark without asking first. There\'s someone near here who knows the lights. Come on."',
        '@ansel: "Who?"',
        'She hesitates. Only for a breath.',
        '@tamsin: "Everyone in the fen knows Mother Gall."'
      ],
      fx: { know: { codex: ['e3_lanternmen'] } },
      next: 'gall1'
    },

    /* ---- Mother Gall ---- */
    gall1: {
      loc: 'Mother Gall\'s house — night',
      text: [
        'The house stands on stilts in the middle of a black pool, a heap of reed-thatch and driftwood and old boat-planks with a crooked chimney leaking peat-smoke. A ladder goes up to the door. Lanterns hang from the eaves: real ones, honest yellow flame.',
        'And around the pool, in the water, standing, are the sleepers.',
        'Dozens of them. Up to their waists, up to their chests, a few up to their chins. Brown as old saddles, shining wet, perfectly kept: the hair on their heads, the stubble on their chins, the stitching on their tunics. Every one with a noose of plaited leather still round its neck. They are facing the house. Their eyes are closed. Some of them, you think, have been here a thousand years.',
        { if: "inParty('hob')", t: 'Hob says "Mothers," and then "sorry," and then grips his pitchfork so hard his knuckles crack.' },
        'On the porch at the top of the ladder, in a rocking chair, smoking a clay pipe, sits the smallest old woman you have ever seen. She is the size of a child of ten. Her face is a walnut, toothless, bristle-chinned, and her eyes are bright and black and wet and *delighted*.',
        '@gall: "Ansel Dray," she says, around the pipe. "Took your time, pet. Come up, come up. Mind the third rung, it\'s rotten. Mind my sleepers; they\'re dreaming."'
      ],
      fx: { know: { cast: ['gall'] } },
      next: 'gall2'
    },
    gall2: {
      text: [
        'Inside it is hot and close and smells of peat and fat and drying herbs and something under those, like a cellar after rain. Bundles of things hang from the roof-beams: herbs, bones, a dried eel, a child\'s shoe. A cat with one eye watches you from a shelf of jars.',
        'Gall pokes the fire with her bare finger, and it doesn\'t seem to bother her.',
        { if: "inParty('pell')", t: '@gall: "And Pellam Orme!" She pinches Pell\'s cheek; he flinches like a horse. "Pellam Orme, who asked the Abbess what goes on in her crypt. Good boy. Clever boy. Stupid boy. Sit by the fire, you\'re damp as a frog\'s doings."' },
        '@tamsin: "Mother Gall," says Tamsin, from the doorway, formally, eyes lowered, like any fen girl in front of the witch. "We\'ve come about the lights on the Drowning Mere."',
        '@gall: "Have you, now, dearie." Gall doesn\'t look at her. She is looking at you, with her head on one side, like a blackbird looking at a worm-cast. "Have you, now."'
      ],
      choices: [
        { t: '"How do you know my name?"', go: 'gall_name', once: true },
        { t: '"Tell me about the lights."', go: 'gall_lights', once: true },
        { t: 'Say nothing. Watch Tamsin and the old woman. Watch how they don\'t look at each other.', if: '!f.e3_gall_watched', check: { stat: 'wits', dc: 16, uncanny: true, pass: 'gall_suspect', fail: 'gall_nosuspect', xp: 25 } },
        { t: '"Enough. Will you help us or not?"', go: 'gall_charm' }
      ]
    },
    gall_name: {
      text: [
        '@gall: "Ansel Dray. Tanner\'s boy, out of Lowmarch. Ran off at fifteen with a free company. Sergeant at twenty-three." She ticks them off on fingers like little brown roots. "Died at Corran\'s Ford on a Tuesday, a bit after dawn, with a spear in your liver and your back to a stone."',
        'The fire pops. Nobody in the room breathes.',
        '@gall: "The earth\'s one great ear, pet. It hears everybody who dies. Most of them it hears go *up*, more\'s the pity, up the chimney, up the smoke. Whoosh." She makes a little flying gesture. "But you. You, it heard lie *down*." She leans forward and pats your gloved left hand with her own, small and hot and dry as a hen\'s foot.',
        'Your palm, which has been restless for two days, does not burn. It goes warm. Warm like a hearth. Warm like a hand pressed against you from the other side of a wall.',
        '@gall: "There," she says, very softly. "There, now."'
      ],
      fx: { set: { e3_gall_named: 1 }, rep: { fen: 1 } },
      next: 'gall2'
    },
    gall_lights: {
      text: [
        '@gall: "Lights." She sucks her pipe. "Lantern Men, the Lamp-folk call them, as if they knew anything. The fen has always had a few. Little hungry things. They come where dead folk lie in the water with nobody to put them down proper, and they eat what\'s left, the warm bit, the bit that ought to go down. And then they\'re lonely, so they call for company."',
        '@gall: "Well. Your Lampwarden comes to town with her fire and her Writ, and all my eel-folk get frightened to put their dead in the mud, and so they leave them in the water instead. A month of supper, pet. My little lights are fat. And the fattest of the lot is Old Jack, out on the Drowning Mere. He\'s been there since before the Lamp. He wears faces."',
        'She reaches up to a shelf without looking and takes down a twist of grey crystals in a rag, and drops it in your palm.',
        '@gall: "Witch-salt. Lights don\'t like it. Lights don\'t like silver neither, but you haven\'t any. Throw it in his face and he\'ll remember he\'s only a hole in the dark."'
      ],
      fx: { give: { witch_salt: 2 } },
      next: 'gall2'
    },
    gall_suspect: {
      text: [
        'You watch.',
        'Small things. Tamsin came up the ladder and stepped over the third rung, the rotten one, before Gall had finished warning you. In the dark. Without looking.',
        'When Tamsin sat down by the door, Gall, passing, reached out without a glance and tucked a twist of Tamsin\'s collar in, the way a woman does to a child she has dressed a thousand times. Tamsin didn\'t flinch. She leaned, very slightly, into it, then caught herself, and leaned away.',
        { if: 'f.e1_saw_crow', t: 'And up on the roof-tree, outside the little window, a big glossy crow sits fluffed against the night, and you have seen that crow before. On a wall on the downs, with a knot of red thread on its leg.' },
        '> Everyone in the fen knows Mother Gall.',
        '> Hm.',
        'You say nothing. You file it, the way Tamsin files things. In a box, to think about later.'
      ],
      fx: { set: { e3_suspect_tam: 1, e3_gall_watched: 1 } },
      next: 'gall2'
    },
    gall_nosuspect: {
      text: [
        'You watch. There is nothing much to see.',
        'Tamsin is polite and a little frightened, like any fen girl in front of the witch, and keeps her eyes down. Gall pinches her cheek once in passing and calls her *pretty thing* and forgets her, the way an old woman forgets a neighbour\'s child. The cat watches you. The sleepers outside stand in their water.',
        'You notice nothing but the cold coming up through the floorboards, and the feeling, which you can\'t shake, of being listened to through them.'
      ],
      fx: { set: { e3_gall_watched: 1 } },
      next: 'gall2'
    },
    gall_charm: {
      text: [
        '@gall: "Help you? I\'ve helped you, pet, I\'ve told you where he is and given you my salt. Go and kill my Jack. It\'ll do the fen good and it\'ll do *you* good to be useful." She rocks. "But here."',
        'She takes something out of the front of her dress, warm from her body. A little knot of hair, three colours, black and grey and copper, bound tight around a single small bone, the finger-joint of something. Maybe a child. It hangs on a thong.',
        '@gall: "For luck. Out on the water. So the lights know you\'re one of mine, and leave you be." She holds it out. "Go on. It doesn\'t bite."',
        'Behind her, by the door, Tamsin has gone perfectly still. She is looking at the charm in Gall\'s hand the way you would look at a man stepping out onto river-ice.'
      ],
      choices: [
        { t: 'Take it. Thank her. Put it round your neck.', go: 'gall_take' },
        { t: '"I\'ve had enough luck for one life. Thank you, Mother. No."', go: 'gall_refuse' },
        { t: '"What does it cost?"', go: 'gall_cost', once: true }
      ]
    },
    gall_cost: {
      text: [
        '@gall: "Cost!" She cackles, delighted, showing her gums. "Listen to him. A Lowmarch boy. *Cost.*" She wipes her eye. "Nothing you\'ll miss, Ansel Dray. A hair off your head, a drop of your spit, a bit of your warmth when you sleep. It\'s a charm, not a contract. It just wants to know where you are."',
        '@ansel: "Why?"',
        '@gall: "So it can find you, pet," Gall says, simply. "If you ever get lost."'
      ],
      next: 'gall_charm'
    },
    gall_take: {
      text: [
        'You take it. It is warm. It stays warm, against your breastbone, under your shirt, a little warmer than you are, like a small animal asleep.',
        'Gall beams.',
        'Behind her, Tamsin lets out a breath and looks at the floor, the way you look at the floor when a dice-throw goes the way you bet and you wish it hadn\'t.'
      ],
      fx: { set: { e3_gall_charm: 1 }, give: { gall_charm: 1 }, rep: { fen: 1 } },
      next: 'gall_bye'
    },
    gall_refuse: {
      text: [
        'Gall\'s hand stays out for a moment. Then she laughs, and tucks the charm back into the front of her dress, and pats it.',
        '@gall: "Clever boy. Or rude. One of the two." Her black eyes go past you, sharp, quick as a pike in a pool, to the girl by the door, and away again. "Never mind, never mind. There\'s other ways to keep a body safe."',
        'By the door, Tamsin\'s shoulders come down an inch. You don\'t know why. She doesn\'t look at you.'
      ],
      fx: { set: { e3_gall_charm: 0 } },
      next: 'gall_bye'
    },
    gall_bye: {
      text: [
        '@gall: "Off you go, then. The Drowning Mere\'s an hour east, past the three dead willows. Jack comes out before dawn; he likes the grey." She knocks out her pipe on the arm of the chair. "Camp on Hen\'s Tump tonight, it\'s dry. And come back and see old Gall, Ansel Dray. Come back and tell me all about it. I\'ll be here." The black eyes shine. "I\'m always here."',
        'You go down the ladder, over the third rung. The sleepers stand in their pool with their eyes shut and their faces turned toward the house.',
        'You could swear that one of them, as you pass, is smiling.'
      ],
      fx: { give: { witch_salt: 1 }, quest: { id: 'e3_fen', note: 'Mother Gall told you where to find Old Jack, the oldest light on the Drowning Mere. He comes before dawn.' } },
      next: 'fen_night'
    },

    /* ---- Night on the fen ---- */
    fen_night: {
      loc: 'Hen\'s Tump, Gallowmere — night',
      text: [
        'Hen\'s Tump is a hump of dry ground the size of a barn floor, with a dead thorn tree and an eel-man\'s boat drawn up and turned turtle. You make a fire of driftwood that burns green. The lights are out there on the water, far off, swaying. You don\'t look at them.',
        'The sky is clear. Every star in the world is out.',
        'You crawl under the upturned boat without a word and lie on your back in the dark with the hull a foot above your face, smelling of tar and eel. After a while Tamsin sits down outside, with her back against the boat\'s side, so you can feel her lean through the planks.',
        { if: "inParty('pell')", t: 'Pell is asleep by the fire with his mouth open, snoring like a wet saw.' },
        { if: "inParty('hob')", t: 'Hob has first watch. Hob is asleep sitting up, pitchfork across his knees.' },
        { if: "f.e3_edda==='mercy'", t: 'She has not said ten words since the square. You can hear her breathing. It isn\'t steady.' },
        'Then, very quietly, then not quietly at all, she starts to sing.',
        'The eel who married a heron. You know it now. You know all eleven verses, Saints help you. She is singing it worse than you have ever heard her sing it: flat, sharp, both at once, the tune wandering off on its own like a drunk looking for a door.'
      ],
      choices: [
        { t: '"Is there a verse where the eel wins?"', go: 'fen_verse' },
        { t: 'Lie still. Listen to all of it.', go: 'fen_listen' },
        { t: '"Tamsin. That is the worst singing I have ever heard in my life."', go: 'fen_worst' }
      ]
    },
    fen_verse: {
      text: [
        'She stops. Silence, through the planks. Then:',
        '@tamsin: "...There is now."',
        'And she makes one up, on the spot, out loud. The eel, it turns out, does not get eaten. The eel hides in the heron\'s boot. The heron, it turns out, is a sergeant. The heron puts on its boot. It does not rhyme. She tries to make *heron* rhyme with *sergeant* and it goes so badly wrong that she has to stop in the middle and start the line again, and it goes wrong again, worse, and she sings the wrong bit *louder*, as if that will fix it.'
      ],
      next: 'fen_laugh'
    },
    fen_listen: {
      text: [
        'You lie still. All eleven verses. The heron courts the eel. The eel says yes. The wedding, at which a frog gets drunk. The heron gets hungry. In the eleventh the heron chokes on its bride and dies, which the fen thinks is the funniest thing ever sung.',
        'Somewhere around the ninth verse she gets the words wrong, the way she always does, and instead of going back she just carries on, making it up, and the heron is suddenly in a tavern, and the tavern is the Gutted Hen, and Mags is putting the heron through the window, and the frog is Pell.',
        '@pell: "I *heard* that," says Pell, from the fire, not quite asleep.',
        'She sings the next verse even louder, about the frog.'
      ],
      next: 'fen_laugh'
    },
    fen_worst: {
      text: [
        '@tamsin: "Is it." Flat. "Is it really."',
        'She sings the next verse louder. Then the one after that, louder still, holding the high note, which is not a note, which is a sort of shriek, for a very long time, out across the fen, until somewhere far off on the black water a heron, a real one, answers her in disgust: *kraaak.*',
        'She stops. You both lie there and listen to the real heron complaining.',
        '@tamsin: "Critics," she says darkly.'
      ],
      next: 'fen_laugh'
    },
    fen_laugh: {
      text: [
        'And you laugh.',
        'It comes up out of you without asking. A real one, rusty, cracked, ugly, a pump-handle nobody has worked in six years. You can\'t stop. You lie under the boat with your arm over your eyes and laugh until it hurts.',
        'Outside, the singing has stopped.',
        'When you finally get your breath back, there is a silence through the planks. Then her head appears, upside down, peering in under the gunwale at you. Her face in the firelight is astonished, and pleased, and something else, something that goes across it quickly and is gone, like a bird across a window.',
        { if: "f.e3_edda==='mercy'", t: 'Then her face crumples. She is laughing too, and crying, both at once, her forehead pressed to the boat\'s cold side, and you understand that she sang it badly on purpose, the whole way through, to hear something in the world tonight that wasn\'t screaming. You reach out under the gunwale and find her hand. She holds on.' },
        '@tamsin: "Well," she says. "*Well.* Look at that. He does that."',
        '@ansel: "Don\'t tell anyone."',
        '@tamsin: "Sergeant," she says, "who would I tell? Nobody\'d believe me."'
      ],
      fx: { set: { e3_laughed: 1 } },
      choices: [
        { t: '"You know her, don\'t you. Gall. Better than you said."', if: 'f.e3_suspect_tam', go: 'fen_lie' },
        { t: '"Sing the rest. Badly. I\'ll stay awake."', go: 'fen_sleep' },
        { t: '"Goodnight, Tamsin."', go: 'fen_sleep' }
      ]
    },
    fen_lie: {
      text: [
        'The upside-down face doesn\'t change at all. That is how you know it\'s a lie before it starts.',
        '@tamsin: "Course I know her. She delivered me. She delivered half the fen." Easy, warm, a little rueful. "She was good to my mam, after. When there wasn\'t anybody else. That\'s all." A pause. "Everybody owes Gall something, Sergeant. That\'s how she likes it."',
        'Then her head goes away, back outside. After a while she starts singing again, softly this time, properly, almost in tune. It\'s the first time you\'ve heard her get all the words right.'
      ],
      fx: { set: { e3_asked_tam_gall: 1 } },
      next: 'fen_lights'
    },
    fen_sleep: {
      text: [
        'Her head goes away. After a moment she starts again from the first verse, quietly now, for you, badly, on purpose.',
        'You fall asleep somewhere around the eel\'s wedding, under an upturned boat, under every star in the world, and for the first time in six years you do not dream about the river at all.'
      ],
      next: 'fen_lights'
    },
    fen_lights: {
      loc: 'The Drowning Mere — before dawn',
      text: [
        'Grey. Mist on the water, knee-deep, thick as fleece. Three dead willows, as Gall said, and past them the Drowning Mere: a round black lake with no wind on it, perfectly still, a mirror for a sky that hasn\'t decided to be morning yet.',
        'The lights are on the water. A dozen of them, low, swaying, golden, warm, like the lanterns of a fishing fleet coming home.',
        { if: "inParty('pell')", t: '@pell: "Mother?" Pell says, in a little boy\'s voice, and takes a step toward the water, and you catch him by the collar. He looks at you, and his face is wet. "She\'s there. She\'s just there. She had a lamp like that. In the kitchen. In Saltby."' },
        { if: "inParty('hob')", t: 'Hob is staring at one particular light with his mouth open, and his feet are moving on their own. Tamsin trips him flat in the reeds and kneels on his back.' },
        'One of the lights comes toward you over the water, walking. As it comes it grows a shape around itself: a tall man\'s shape, made of absence, holding the lantern out at arm\'s length, like a host at a door. Where his face should be there\'s nothing. A dark the shape of a face.',
        'Behind it, smaller lights bob in its wake like ducklings.'
      ],
      fx: { know: { beast: ['lantern_man'] } },
      next: 'fen_lights_fight'
    },
    fen_lights_fight: {
      fight: { foes: ['lantern_man', 'e3_wisp'], title: 'The Lights on the Water', win: 'fen_jack1',
        intro: 'Do not follow it. Witch-salt and silver burn it. Fire passes through it like a hand through smoke.' }
    },
    fen_jack1: {
      text: [
        'The Lantern Man comes apart like a breath on glass, and its light drops into the mere and goes out with a hiss.',
        'All the other lights go out too. All at once. Every one.',
        'The mere is perfectly black and perfectly still.',
        'Then, from the middle of it, from under it, the water begins to glow. Pale at first, then brighter. It rises up off the surface in a column of mist and light, and it is as tall as a church, and inside it, turning slowly, like fish in a tank, are faces. Eel-men. Children. A woman with a lamp. A drowned soldier.',
        'The light comes ashore. It stands in the reeds in front of you. And it chooses one face and wears it.',
        'Tom Ashe. Twenty-four, freckled, a gap in his teeth, a bolt-hole through his cheek, grinning at you the way he grinned on the riverbank at Corran\'s Ford six years ago.',
        '@narrator: "Sarge," says Old Jack, in Tom Ashe\'s voice, wet through the hole in his cheek. "Sarge. You\'ll like this. There was a miller, see, and his wife—"'
      ],
      choices: [
        { t: '"I\'ve heard it, Tom." Draw Widow.', go: 'fen_jack_fight' },
        { t: '"Tell it, then." Let him get as far as the miller\'s wife. Then throw the salt.', go: 'fen_jack_fight', fx: { set: { e3_heard_joke: 1 } } }
      ]
    },
    fen_jack_fight: {
      fight: { foes: ['e3_old_jack'], title: 'Old Jack of the Mere', win: 'fen_jack_after',
        intro: 'The oldest light on Gallowmere. It wears the faces of the drowned and it is calling the little lights home. Witch-salt and silver bite deep.' }
    },
    fen_jack_after: {
      text: [
        'At the end, it has no face at all. It tries Tom\'s, and Pell\'s mother\'s, and a child\'s, and a heron\'s, faster and faster, flickering, and none of them will stay. Then it is only a light again. Then only a lantern, hanging in the air with nobody holding it. Then it goes out, the way a candle goes out when you pinch it: a little curl of smoke, and the smell.',
        'Dawn comes up over the Drowning Mere, grey and ordinary. Birds start.',
        'In the reeds where it stood, under the water, tangled in the roots of the dead willows, are the eel-men. Five of them, side by side, face up, as if somebody had laid them out. Their eyes are open. They are smiling.',
        'And one more, half out of the water, wedged in the fork of a root: a boy of sixteen with his uncle\'s slope shoulders. His lips are blue. His chest is moving.',
        'Col Moss is alive.'
      ],
      fx: { xp: 60, heal: 10, quest: { id: 'e3_fen', note: 'Old Jack is out. The lights are gone from the Drowning Mere. Col Moss is alive.' } },
      next: 'fen_bodies'
    },
    fen_bodies: {
      text: [
        'You get the boy out and wrap him in your coat and Tamsin rubs his hands and feet until he starts to cry, which is the best sound you have heard in days.',
        'Then you all look at the five in the water.',
        '@tamsin: "They were left," Tamsin says. "That\'s why. That\'s all this was. Nobody put them down." She doesn\'t look at you. "We could. Here. Now. The mud\'s soft. There\'s no Wardens on the Drowning Mere."',
        { if: "inParty('pell')", t: '@pell: "Or we carry them back for the Kindling," says Pell, very quietly, "and nobody in Harrowgate burns for it. Including us." He swallows. "I\'m sorry. Somebody had to say it."' }
      ],
      choices: [
        { t: 'Bury them. Here, in the fen, the old way. Tamsin knows the words.', go: 'fen_bury', fx: { set: { e3_eelmen: 'buried' }, rep: { fen: 2, lamp: -1 }, know: { codex: ['earthburial'] } } },
        { t: 'Carry them home. Their kin can choose. It isn\'t yours to decide.', go: 'fen_carry', fx: { set: { e3_eelmen: 'carried' }, rep: { fen: 1, town: 1 } } },
        { t: 'Burn them. Here. A pyre of willow. Let the Lamp have nothing to say.', go: 'fen_burnbodies', fx: { set: { e3_eelmen: 'burned' }, rep: { lamp: 1, fen: -1 }, bond: { tamsin: -1 } } }
      ]
    },
    fen_bury: {
      text: [
        'You dig with your hands and the boat-paddle in the black peat at the edge of the mere. It\'s soft. It comes up in wet slabs that smell of a thousand years.',
        'Tamsin lays them down one at a time, gently, and folds their hands, and puts a little mud on each mouth with her thumb. Then she says the words. Not quietly, this time. Out loud, in front of you.',
        '@tamsin: "*Go down easy. Go down warm. The Mothers have you. Nobody counts you now.*"',
        'You press the peat down over the last of them with your gloved hands.',
        'And you feel it. You\'re sure, this time. Under your palms, through the glove, through the peat: warmth. Coming up, slow and vast and patient, like a great animal breathing out in its sleep. Your left palm, against the earth, throbs once, like a heart.',
        'You take your hand away fast. Tamsin is watching you. She doesn\'t ask.'
      ],
      fx: { set: { e3_felt_earth: 1 } },
      next: 'fen_home'
    },
    fen_carry: {
      text: [
        'It takes all day. Five drowned men and a half-drowned boy across three miles of causeway. Pell weeps the whole way and carries his share. Tamsin says nothing at all.',
        'At Cutler\'s Mere the eel-folk come out to meet you, and see what you are carrying, and the women begin to keen, a sound like wind in a chimney. They take their men from you, one by one, and carry them away into the reeds. You don\'t see where. You don\'t ask.',
        'Siddy Moss takes his boy from your arms and sits down in the mud with him and holds him and rocks.'
      ],
      next: 'fen_home'
    },
    fen_burnbodies: {
      text: [
        'You build it of dead willow and reed, on the dry ground by the mere, and lay them on it, and light it.',
        'Tamsin helps you carry them. She doesn\'t help you light it. She walks away to the water\'s edge and stands with her back to the smoke, very straight, while it goes up, and up, grey into the grey sky.',
        'You watch the smoke go. You can\'t help it. You watch it all the way up.'
      ],
      next: 'fen_home'
    },
    fen_home: {
      loc: 'Cutler\'s Mere — evening',
      text: [
        { if: 'f.e3_fen_free', t: 'You told him to keep his silver. So Siddy Moss brings you a pail of eels, live, and his own gutting knife, bone-handled, worn to a sliver, and then his hand, held out, which is worth more than all of it.', else: 'Siddy Moss counts out forty silver on the lid of an eel-trap, and then, when you try to stop him, a pail of eels, live, and then his hand, held out, which is worth more.' },
        '@narrator: "Lights are gone," he says. "Gone right off the mere. Old Sukey at the top weir says they went out all at once, at dawn, every one, like somebody blew." He looks at you strangely. "Folk will talk about this, sergeant. Out here. For a long time."',
        { if: "f.e3_edda==='saved'", t: '@narrator: "And she\'s alive." He says it like he still can\'t believe it. "Edda. My Edda. And my Col. In two days. Mothers below. I don\'t know what you are."' }
      ],
      fx: { xp: 40, rep: { fen: 2 }, quest: { id: 'e3_fen', state: 'done', note: 'You put out Old Jack of the Drowning Mere and brought Col Moss home.' } },
      next: 'fen_pay'
    },
    fen_pay: {
      route: [
        { if: '!f.e3_fen_free', fx: { silver: 40 }, go: 'end_route' },
        { go: 'end_route' }
      ]
    },

    /* ======================= ENDING ======================= */
    end_route: {
      route: [
        { if: "f.e3_edda==='saved'", go: 'end_cellar' },
        { go: 'end_ashes' }
      ]
    },
    end_cellar: {
      loc: 'The Gutted Hen — the cellar, night',
      text: [
        'You go down with a candle, late, because you can\'t sleep, because you never can.',
        'Edda Moss is asleep on the straw tick behind the small-beer casks, curled up like a dog, her shorn head on Mags\'s second-best pillow. Somebody has put a bowl of milk on the floor beside her. Somebody else, by the look of it, has drunk half of it: there\'s a one-eyed cat asleep against her feet that you\'re certain was not in Harrowgate yesterday.',
        { if: "f.e3_edda_route==='argued'", t: 'Her right hand lies open on the blanket, greased with goose fat. The seven-point star in the middle of her palm is blistered and weeping. You look at it for a long time. Then you look at your own left hand, in its glove.' },
        'She breathes in. She breathes out. She is warm. Nobody is singing her name tonight, up there. For now.',
        'You blow out the candle and sit in the dark with her for a while, on a cask, with your back to the cold brick, listening to someone not burn.'
      ],
      next: 'end_cage'
    },
    end_ashes: {
      loc: 'The Market Square — night',
      text: [
        'The stake is a black stump in a ring of ash. They have swept most of it into the gutter already. It rained in the afternoon and the gutter ran grey.',
        'Siddy Moss is on his knees by the stump with a clay pot and his bare hands, scooping what is left of the ash out of the cracks between the cobbles. He will take it home and put it in the mud by his brother. *Ash goes down too*, he told you, *if you put it down.*',
        'You kneel beside him and help. You don\'t talk. Your gloves go grey.',
        { if: "f.e3_edda==='mercy'", t: 'In a crack by the stump, your fingers find something hard. An arrowhead, blackened, the iron warped by the heat. Grey goose, once. You look at it in your palm a long time. Then you put it in your pocket and don\'t tell Siddy, and you will not tell Tamsin either.' },
        'When the pot is full he puts the lid on it and holds it against his chest like a baby, and stands, and goes away down the Stair toward the fen gate without a word.'
      ],
      next: 'end_ashes2'
    },
    end_ashes2: {
      route: [
        { if: "f.e3_edda==='mercy'", fx: { give: { e3_arrowhead: 1 } }, go: 'end_cage' },
        { go: 'end_cage' }
      ]
    },
    end_cage: {
      loc: 'The Lanternhold yard — the same hour',
      text: [
        '~ CUT TO: THE GLASS CARRIAGE.',
        'In the Lanternhold yard, under the lantern-tower burning blue, the iron-and-glass carriage stands unharnessed with its curtain drawn back. Oriel sits cross-legged on the floor of it in her white shift, her inked head bowed. She is humming. It is not a hymn. It sounds, if you knew it, a little like the eel and the heron, badly.',
        'Beside the carriage, close enough to touch the glass, a tall man in a rain-dark coat is standing. Wide hat. Clean pale hands. An open ledger.',
        'He is writing. The pen moves steadily: a line, a line, a line. Three names from the Lanternhold\'s hospital wing today, an old man and two infants.',
        { if: "f.e3_eelmen==='buried'", t: 'Five from a black mere in the fen. He writes them, and pauses, and looks at the page as if the ink has done something it should not. Then, carefully, with the edge of a rule, he strikes all five through. He frowns down at the cobbles of the yard for a while, the way a man frowns at a floor he has heard something under.', else: 'Five from a black mere in the fen.' },
        { if: "f.e3_edda==='burned'", t: 'And one he has been carrying since the Evening Lamp. *Edda Moss, nineteen.* He blots it carefully.' },
        { if: "f.e3_edda==='mercy'", t: 'And one he has been carrying since the Evening Lamp. *Edda Moss, nineteen.* Beside it, very small, a note in the margin: *arrow.* He blots it carefully.' },
        'Oriel stops humming. She lifts her blind face to him through the glass.',
        '@oriel: "He isn\'t in there, is he," she says. "I looked too."',
        'The Tallyman stops writing.',
        'He lifts his head, slowly, and looks out of the Lanternhold yard, down the hill, over the roofs of the Market Stair, over the lime-pits of the Tanners\' Bottom, to the Gutted Hen, and one particular shuttered window.',
        'He looks at it for a long time.'
      ],
      fx: { xp: 50, know: { cast: ['tallyman'] }, quest: [{ id: 'e3_writ', note: 'The Lampwardens have burned their fire. They have not found what they came for. They are not leaving.' }, { id: 'e3_oriel', state: 'done', note: 'The oracle can\'t hear you. She is the only person who has ever been glad of it.' }] },
      end: true
    },

    /* ======================= SIDE: THE TOLL ON THORNWOOD ROAD ======================= */
    c_rusk_1: {
      loc: 'The Thornwood road — noon',
      text: [
        'The notice is nailed up by the Carters of the Market Stair: *FIFTY SILVER to any man who opens the Thornwood road. The woman RUSK takes a toll on every cart and the Marshal will not stir.*',
        'The Thornwood road runs west under old oak and blackthorn, so overgrown in places it\'s a green tunnel. Two miles in, a dead oak lies across it, neat as a gate.',
        'A crossbow bolt goes *thock* into the road six inches in front of Ox\'s near forefoot. Ox looks at it. Ox tries to bite it.',
        '@rusk: "That\'s Husband," says a voice from above. "He says good afternoon."',
        'She is sitting on the fallen oak with one boot up, reloading: a woman of thirty-five in a stolen green riding coat, dark hair in a soldier\'s queue, a scar that runs from her left eyebrow down through her lip so her smile comes out crooked. A lady\'s vowels. A poacher\'s hands. Across her knee, an arbalest with a walnut stock so polished it glows.',
        'Up in the trees, a dozen others you can see and some you can\'t.',
        '@rusk: "Rusk. Of the Thornwood, these days. Toll is ten a head, horses free, priests double."',
        { if: "inParty('pell')", t: '@pell: "I\'m defrocked," says Pell hopefully. "Then you\'re half price, darling," says Rusk.' }
      ],
      fx: { know: { cast: ['rusk'] } },
      choices: [
        { t: 'Pay. Thirty silver for the lot of you. It\'s cheaper than dying in a ditch.', cost: 30, go: 'c_rusk_paid', fx: { set: { e3_rusk: 'paid' } } },
        { t: '"Ten a head for what? You\'re not a bridge. Come down and let\'s talk about it."', check: { stat: 'presence', dc: 14, pass: 'c_rusk_talk', fail: 'c_rusk_talk_bad' } },
        { t: '"Come down here and collect it, then."', go: 'c_rusk_fight' }
      ]
    },
    c_rusk_talk_bad: {
      text: [
        'She listens to your whole speech with her chin on her fist and real interest, like a woman at a play.',
        '@rusk: "Oh, that was *dreadful*," she says warmly when you\'ve finished. "You\'re very bad at this, aren\'t you? You\'ve got a face for menacing and a mouth for drink." She settles Husband against her shoulder. "Pay or play, soldier. I haven\'t got all day. Well. I have. But you haven\'t."'
      ],
      choices: [
        { t: 'Pay. Thirty silver.', cost: 30, go: 'c_rusk_paid', fx: { set: { e3_rusk: 'paid' } } },
        { t: 'Play.', go: 'c_rusk_fight' }
      ]
    },
    c_rusk_paid: {
      text: [
        'She counts it twice, biting a coin, and looks at you with new interest.',
        '@rusk: "A man who pays. How *novel*. Nobody pays. They weep, or they fight, or they offer me their daughters, which, honestly." She tucks the purse away. "I\'ll tell you something for free, since you\'re a gentleman. You\'re Konrad Hask\'s dead sergeant, aren\'t you? Everyone\'s heard."',
        '@rusk: "His carts go north up the Saltdown track every week. Covered. I stopped one, once. Thought: silver. Pulled back the cover." Her crooked smile goes away. "People. Sitting in rows, very nicely, hands in their laps. Didn\'t make a sound. Not one of them looked at me. I let it go on. I\'ve never let a cart go in my life."',
        'She swings down off the oak.',
        '@rusk: "Tell the Carters it\'s a penny a wheel for honest carters from now on. I\'m feeling sentimental. Don\'t tell anyone why."'
      ],
      fx: { silver: 25, xp: 60, rep: { town: 1 }, set: { e3_rusk_carts: 1 }, quest: { id: 'e3_rusk', title: 'The Toll on Thornwood Road', state: 'done', note: 'You paid Rusk\'s toll. She dropped it to a penny a wheel, and told you about the Marshal\'s covered carts to Saltdown.' } },
      next: 'c_rusk_end'
    },
    c_rusk_fight: {
      text: [
        '@rusk: "Oh, *good*," says Rusk, and means it.',
        'She drops off the back of the oak, and the trees start shooting.'
      ],
      next: 'c_rusk_fight2'
    },
    c_rusk_fight2: {
      fight: { foes: ['e3_rusk', 'bandit', 'bandit_archer'], title: 'The Thornwood Toll', win: 'c_rusk_yield',
        intro: 'Husband never misses twice. Close the distance.' }
    },
    c_rusk_yield: {
      text: [
        'You find her on her back in the leaf-litter with Husband just out of reach and your boot on the stock, a cut over her eye bleeding into her hair, laughing so hard she can barely breathe.',
        '@rusk: "Yield, yield, you great *ox*, yield." She wipes blood out of her eye. "Saints. I haven\'t been put on my arse like that since my brother\'s men. They had to use six. You did it with a sword like a farm gate." She looks up at you, upside down, very bright-eyed. "Well? Hang me? The Marshal pays ten silver a bandit. He\'d pay fifty for me. He doesn\'t like me."'
      ],
      choices: [
        { t: '"The road\'s open. For the carters, for good. Then you can go."', go: 'c_rusk_go', fx: { set: { e3_rusk: 'fought' } } },
        { t: 'Pick up Husband. "The road\'s open. And I\'m keeping your husband."', go: 'c_rusk_husband', fx: { set: { e3_rusk: 'fought', e3_took_husband: 1 } } }
      ]
    },
    c_rusk_go: {
      text: [
        '@rusk: "Done." She takes your hand and you haul her up. She is lighter than you thought, and stronger. She keeps hold of your hand a beat longer than needed, and looks at it, the glove, and then at you.',
        '@rusk: "Not for the Marshal, then. Interesting. Very interesting." She whistles through her teeth and the trees go quiet. "We\'ll move west. There\'s a bishop\'s road the far side of the Holt that\'s crying out for a toll." She salutes you with two bloody fingers. "Next time, soldier, I\'ll be ready for you."'
      ],
      fx: { silver: 50, xp: 80, rep: { town: 2 }, quest: { id: 'e3_rusk', title: 'The Toll on Thornwood Road', state: 'done', note: 'You beat Rusk in the Thornwood and let her go. The road is open.' } },
      next: 'c_rusk_end'
    },
    c_rusk_husband: {
      text: [
        'Her face goes through about five things at once.',
        '@rusk: "You can\'t take Husband. He\'s— that\'s my— I *made* that stock. Do you know how long it takes to—" She stops. She looks at you. Then she starts to laugh again, helplessly, flat on her back. "Oh, you bastard. Oh, you lovely bastard. Fine. Fine! Keep him. He\'ll pine. He\'ll misfire out of spite. You\'ll see."',
        'You leave her lying in the leaves, still laughing. Halfway back to Harrowgate you leave Husband propped against a milestone, where she\'ll find him, because you\'re not a thief, and because you\'d like to see her again on terms where she isn\'t aiming it at you.'
      ],
      fx: { silver: 50, xp: 80, rep: { town: 2 }, quest: { id: 'e3_rusk', title: 'The Toll on Thornwood Road', state: 'done', note: 'You beat Rusk and took her crossbow. Then you left it on a milestone for her.' } },
      next: 'c_rusk_end'
    },
    c_rusk_talk: {
      loc: 'Saint Wendel\'s chapel, the Thornwood — night',
      text: [
        'Something in what you said makes her laugh. Not *at* you. She comes down off the oak.',
        '@rusk: "Fine. Talk. But not here, the road\'s draughty. Supper."',
        'Her camp is a ruined chapel deep in the wood, roofless, ivy on the altar, her people sleeping in the side-chapels like rooks. She has a fire in the nave and a haunch of somebody\'s deer and three bottles of wine with a bishop\'s seal on the corks.',
        '@rusk: "I was Lady Ermengarde Rusk of Rusk Hall, once," she says, filling your cup. "My brother got the hall. I got betrothed to a Corvane cloth baron of sixty-one with a wet mouth. I shot his hat off at the betrothal feast. Then his horse. Then I left." She pats the crossbow beside her. "Husband. The only husband I ever wanted. Quiet, reliable, goes off when I squeeze, never asks where I\'ve been."',
        'She looks at you over her cup, the crooked smile, the scar pulling it.',
        '@rusk: "So, Konrad Hask\'s dead sergeant. What are you offering me for my road?"'
      ],
      choices: [
        { t: '"A deal. The carters go free. The Marshal\'s carts don\'t. Tax him till he squeals."', go: 'c_rusk_ally' },
        { t: 'Lean over and kiss her. See what happens.', go: 'c_rusk_bed' },
        { t: '"Nothing. I\'ll pay your toll like everyone else, and enjoy the wine."', cost: 30, go: 'c_rusk_paid', fx: { set: { e3_rusk: 'paid' } } }
      ]
    },
    c_rusk_ally: {
      text: [
        'She goes very still, the way a cat goes still.',
        '@rusk: "Hask\'s carts." She turns the cup. "I stopped one of those once. Covered. Going north to Saltdown. People in rows, sitting quietly, hands in their laps, not one of them looking at me. I let it go on. I\'ve never let a cart go in my life." She looks up. "Yes. Oh, yes. I\'ll tax Ser Konrad. I\'ll tax him to the bone."',
        'She spits in her palm and holds it out. You spit in yours and take it.',
        '@rusk: "I owe you one, dead man," says Rusk of the Thornwood. "And I always pay. Ask anyone. Ask my brother. He\'s got a limp."'
      ],
      fx: { set: { e3_rusk: 'allied', e3_rusk_carts: 1 }, bond: { rusk: 1 }, silver: 50, xp: 80, rep: { town: 1, varane: -1 }, quest: { id: 'e3_rusk', title: 'The Toll on Thornwood Road', state: 'done', note: 'Rusk of the Thornwood will let the carters pass and tax the Marshal\'s carts instead. She owes you.' } },
      next: 'c_rusk_end'
    },
    c_rusk_bed: {
      text: [
        'She lets you. Then she puts her cup down on the altar, carefully, so as not to spill a bishop\'s wine, and kisses you back like a woman who has been thinking about it since the bolt hit the road.',
        'It is not graceful. Neither of you is built for graceful. Her coat has eleven buckles and she swears at every one. Your boots won\'t come off; she gets her foot on your arse and hauls. She has a bolt-scar in her thigh like a puckered mouth, from her brother\'s men, and a knife-scar under her ribs she won\'t explain, and she runs her thumb along the rope of scar from your collarbone to your ear with professional interest, like a farrier reading a horse\'s legs.',
        '@rusk: "Corran\'s Ford?" "Corran\'s Ford." "Hm. Sloppy stitching." "I did it myself." "It shows."',
        'Husband leans against the altar rail, watching. "He\'s the jealous type," she says, against your mouth. "Ignore him."',
        'She tries, once, to pull the glove off your left hand. You stop her. She looks at you a moment, then shrugs, bare-shouldered, in the firelight. "Everyone keeps one thing on. Mine\'s the boots." And she does, and so do you, and the ivy-hung nave of Saint Wendel\'s hears language it has not heard in two hundred years, most of it hers, some of it laughing, all of it frank as a slap.',
        'Later, the fire is down to embers and her head is on your chest and she is drawing idle patterns on your belly with one finger, and the stars are out over the roofless chapel, and you are, somehow, not afraid of them. For an hour. Then you are.'
      ],
      fx: { set: { e3_rusk: 'bedded' }, bond: { rusk: 1 } },
      next: 'c_rusk_bed2'
    },
    c_rusk_bed2: {
      text: [
        'In the morning, she\'s up first, dressed, cleaning Husband. She tosses you something without looking: a black silk garter with a little silver buckle.',
        '@rusk: "Receipt," she says. "Show it on the Thornwood road and my lads stop aiming at you. The carters go free from today. I\'d have done that for the conversation, mind." The crooked smile. "Don\'t let it go to your head, dead man. You were adequate."',
        '@ansel: "Adequate."',
        '@rusk: "Very adequate." She shoulders Husband. "And if you ever want to do something about Konrad Hask that the town would call treason, come and find me. I\'ve a dozen lads in these trees who\'d like a go."'
      ],
      fx: { give: { e3_garter: 1 }, silver: 50, xp: 80, rep: { town: 1 }, quest: { id: 'e3_rusk', title: 'The Toll on Thornwood Road', state: 'done', note: 'You spent the night with Rusk of the Thornwood. The carters go free. She has a dozen lads who would like a go at the Marshal.' } },
      next: 'c_rusk_end'
    },
    c_rusk_end: {
      text: [
        'The Carters of the Market Stair pay up on the Hen\'s doorstep, coin by grudging coin. One of them asks how you did it. You tell him you asked nicely.',
        { if: "inParty('tamsin') && f.e3_rusk==='bedded'", t: 'Tamsin looks at you over her ale for a long moment, at the leaves still in your hair, and says, "Asked *nicely*," and then nothing else at all for the rest of the evening, which is not like her.' }
      ],
      end: true
    },

    /* ======================= SIDE: BONES IN TIDY PILES ======================= */
    c_hag_1: {
      loc: 'Cutler\'s Mere — morning',
      text: [
        'The eel-wife\'s name is Nan Pike, and she has walked from the fen to the Hen in the night with her skirts wet to the thigh, and she will not sit down.',
        '@narrator: "My Lissa. Six. Gone out of the reeds by our door three days back, and the reeds bent all one way, toward the Sallow Holt." She twists her apron. "Everybody knows what\'s in the Sallow Holt. Nobody goes. Gall won\'t. Gall says it\'s family business. *Family.*" She spits. "Thirty silver. It\'s all we\'ve got. Bring her back, or bring back what\'s left, so I can put it down."'
      ],
      next: 'c_hag_2'
    },
    c_hag_2: {
      loc: 'The Sallow Holt, Gallowmere',
      text: [
        'The Sallow Holt is an island of black willows so old and so close-grown that it is dusk under them at noon. The water around it is still and brown and smells of rot.',
        'The path in is lined with bones. Not scattered. *Arranged*. Thigh-bones with thigh-bones, in a neat stack like firewood. Skulls in a pyramid. A careful little heap of finger-joints, sorted by size.',
        'From the water at the island\'s edge, two shapes rise, brown as saddles, nooses round their necks. Sleepers. Somebody has woken them to keep the door.'
      ],
      fight: { foes: ['drowned', 'drowned'], title: 'The Sallow Holt', win: 'c_hag_3' }
    },
    c_hag_3: {
      text: [
        'At the heart of the Holt, in a hollow of roots over black water, the hag is waiting for you.',
        'She is twice Gall\'s height and half her width, long and thin and bent like a heron, green-black hair hanging to the water in wet ropes, and her mouth is full of small backward-curving teeth, like a pike\'s. She is sitting on a pile of ribcages, neatly stacked, and she is knitting. With bones.',
        'Behind her, in a wicker eel-trap the size of a hen-coop, a little girl sits with her knees up, singing to herself, perfectly calm, the way children are calm when it has gone far past frightening.',
        '@narrator: "Visitors," says the hag. Her voice is lovely. That\'s the worst thing. "Gall\'s new pet. Oh, I can *smell* you, dearie. My sister\'s got her eye on you. Warm all over with it." She sets down her knitting. "You\'ll want the brat. Everyone always wants the brat. I\'ll trade. A year off your life for her. I\'ll take it off the end, where you won\'t miss it."'
      ],
      fx: { know: { beast: ['bog_hag'] } },
      choices: [
        { t: '"Done. Take your year."', go: 'c_hag_bargain', fx: { set: { e3_hag: 'bargained' } } },
        { t: '"Your sister would want to know what you\'re doing with fen children, I think. Shall I tell her?"', check: { stat: 'presence', dc: 15, pass: 'c_hag_bluff', fail: 'c_hag_fight' } },
        { t: 'No trades. Draw Widow.', go: 'c_hag_fight' }
      ]
    },
    c_hag_bargain: {
      text: [
        'She comes up out of the roots, delighted, quick, too quick for her length, and lays her long wet hand flat on your chest, over your heart. It\'s cold as the bottom of a well.',
        'She closes her eyes. She feels for something. Her lovely face frowns.',
        'She feels further. Further. Her fingers press into you like she\'s looking for a coin in a deep pocket.',
        '@narrator: "There\'s no— where\'s your *end*?" she whispers. "Everyone\'s got an end. A tally. A line. A last one. Where\'s yours? There\'s nothing to take it *from*—"',
        'She snatches her hand back as if you were a hot pan. She stares at you. Then she backs away, all the way, into the black water, until only her eyes are showing, and her eyes are frightened.',
        '@narrator: "Take the brat," says the hag from the water. "Take it. Take it and go and don\'t come back to my Holt, you *wrong* thing."'
      ],
      fx: { xp: 70, rep: { fen: 1 } },
      next: 'c_hag_end'
    },
    c_hag_bluff: {
      text: [
        'The knitting stops. All her teeth go away behind her lips at once.',
        '@narrator: "You wouldn\'t." Not lovely now. "She\'d put me in the pool. She\'d stand me in the pool with the old ones for a hundred years." She looks at you, and then, sulky as a child, flicks a long finger. The wicker cage falls open. "Take it. Go. And *don\'t tell her.*"'
      ],
      fx: { set: { e3_hag: 'bluffed' }, xp: 70, rep: { fen: 1 } },
      next: 'c_hag_end'
    },
    c_hag_fight: {
      text: [
        '@narrator: "Oh, *rude*," she says, and comes up out of the water with her jaw unhinging like a snake\'s.'
      ],
      next: 'c_hag_fight2'
    },
    c_hag_fight2: {
      fight: { foes: ['bog_hag'], title: 'The Hag of the Sallow Holt', win: 'c_hag_win',
        intro: 'She will curse you by name. Fire and witch-salt make her scream.' }
    },
    c_hag_win: {
      text: [
        'She dies in the water, thrashing, and the water goes still, and the green-black hair floats out over it like weed.',
        'Later, much later, you will hear that Mother Gall, out in her stilt-house, dropped her pipe at that exact moment, and sat for an hour without speaking, and then laughed.'
      ],
      fx: { set: { e3_hag: 'killed' }, xp: 40 },
      next: 'c_hag_end'
    },
    c_hag_end: {
      text: [
        'The little girl climbs out of the cage on her own. She looks at you, and at the bones, and at the water, and holds her arms up to be carried, the way children do, as if that\'s simply what you are for.',
        'Nan Pike sees you coming along the causeway from half a mile off, and runs, in the water, falling, getting up, falling. She doesn\'t thank you. She can\'t. She presses thirty silver and a stoppered bottle of something black into your hands and doesn\'t let go of either of them, or of her daughter, for a long time.'
      ],
      fx: { silver: 30, give: { black_draught: 1 }, quest: { id: 'e3_hag', title: 'Bones in Tidy Piles', state: 'done', note: 'You brought Lissa Pike home from the Sallow Holt.' } },
      end: true
    },

    /* ======================= SIDE: TALKS ======================= */
    t_tam_0: {
      route: [
        { if: "f.e3_edda==='mercy'", go: 't_tam_m1' },
        { if: "f.e3_edda==='burned'", go: 't_tam_b1' },
        { go: 't_tam_s1' }
      ]
    },
    t_tam_m1: {
      loc: 'The roof of the Gutted Hen — the small hours',
      text: [
        'You find her on the roof, which you didn\'t know you could get onto, sitting on the slates with her back against the chimney stack for the warmth. She has her bow across her knees. The string is in her lap. She has been trying to string it, you think, for some time. Her hands won\'t do it.',
        '@tamsin: "It\'s stupid," she says, before you can say anything. "I\'ve strung a bow every day since I was seven. I could do it asleep. I could do it *drunk*." She laughs. It\'s a terrible sound. "Look at them. Look at my hands, Sergeant."',
        'They are shaking the way yours do in the morning.'
      ],
      choices: [
        { t: 'Take the bow and the string. Brace it against your boot. String it for her. Hand it back.', go: 't_tam_m2', fx: { set: { e3_strung_bow: 1 } } },
        { t: '"It was right. What you did. It was the only kind thing anyone did for her all day."', go: 't_tam_m2' },
        { t: 'Sit down beside her against the chimney. Say nothing. Put your shoulder against hers.', go: 't_tam_m2', fx: { set: { e3_roof_shoulder: 1 } } }
      ]
    },
    t_tam_m2: {
      text: [
        'She is quiet a long time. Over the roofs, the Lanternhold tower burns blue.',
        '@tamsin: "There was a Warden," she says at last. "When they did my mam. A big one. He held my chin, so I\'d watch. He was quite gentle about it. He kept saying *there, there, it\'s nearly done*. It wasn\'t nearly done. It went on and on." She swallows. "I used to dream about having a bow. Being up on the roof of the tithe-barn with a bow. Just one arrow. Just one."',
        '@tamsin: "And now I\'ve done it, and it was somebody else\'s mam. Somebody else\'s girl. And I don\'t know if she wanted it. I never asked her. I never even *asked*." Her voice cracks straight down the middle. "What if she wanted to go up? What if she was praying for it, and I—"',
        'She stops. She turns to you. Her eyes are dry now, and that\'s worse.',
        '@tamsin: "If it\'s ever me. On one of those. Would you?"'
      ],
      choices: [
        { t: '"Yes."', go: 't_tam_m3', fx: { set: { e3_tam_promise: 'yes' }, bond: { tamsin: 1 } } },
        { t: '"It won\'t be you. I\'d cut you down first. I\'d burn the town."', go: 't_tam_m3', fx: { set: { e3_tam_promise: 'cut' } } },
        { t: '"Don\'t ask me that."', go: 't_tam_m3', fx: { set: { e3_tam_promise: 'no' } } }
      ]
    },
    t_tam_m3: {
      text: [
        { if: "f.e3_tam_promise==='yes'", t: 'She nods, slowly, as if you\'ve signed something. "Good," she says. "Good. That\'s— thank you." And then, very quietly, to her knees: "You might not want to. One day. You might not want to, and you should do it anyway. Promise me."' },
        { if: "f.e3_tam_promise==='cut'", t: 'She laughs, wetly. "You would, too. You great idiot. You\'d get yourself killed for it." She looks at you sidelong. "Don\'t. If it\'s me. Don\'t. Some people aren\'t worth burning a town for."' },
        { if: "f.e3_tam_promise==='no'", t: '"No," she says. "No, that\'s fair. That\'s not fair, what I asked. Forget it." She doesn\'t forget it. Neither do you.' },
        'She leans her head back against the warm chimney and closes her eyes. After a while, very softly, she starts to hum. Not the heron. Something else, something you don\'t know, low and old, that sounds like water going down into the ground.',
        'You stay until it\'s light.'
      ],
      end: true
    },
    t_tam_b1: {
      loc: 'The Gutted Hen — the back step, evening',
      text: [
        'She\'s on the back step, where she peeled the apple once. No apple. She has one arrow across her knees, the one she took off the string in the square, and she is turning it over and over in her fingers.',
        '@tamsin: "You told me no."',
        'She doesn\'t look up.',
        '@tamsin: "And you were right. They\'d have hanged me. Brannagh had three Wardens on the crowd, I saw them. I\'d have been on that stake by morning, and you\'d have had to watch that too." She runs a thumb along the fletching. "You were right, and she screamed for an hour, and I hate you for being right. I hate me more for listening."'
      ],
      choices: [
        { t: '"I\'m sorry."', go: 't_tam_b2' },
        { t: '"I\'d say it again. I\'d rather watch her burn than you."', go: 't_tam_b2', fx: { bond: { tamsin: 1 }, set: { e3_rather_her: 1 } } },
        { t: '"You could have done it anyway. Why didn\'t you?"', go: 't_tam_b2' }
      ]
    },
    t_tam_b2: {
      text: [
        { if: 'f.e3_rather_her', t: 'She looks at you then. Really looks. Whatever she sees, it makes her look away again, quickly, at the arrow. "That\'s a terrible thing to say," she says. "Don\'t say things like that to me, Sergeant. I\'m not— don\'t."' },
        { if: '!f.e3_rather_her', t: '"Because I wanted it to be both of us," she says. "If I did it. I wanted you to say *do it*, so it\'d be both of us, and not just me alone with it for the rest of my life. And you didn\'t. And I couldn\'t carry it alone." She laughs, short. "There. Now you know I\'m a coward."' },
        'She stands, and puts the arrow back in her quiver, point down, the way she did in the square, apart from the others.',
        '@tamsin: "I\'m keeping this one. I\'m never going to shoot it." A pause. "Next time, say yes. Whatever it is. Say yes, and we\'ll both carry it."',
        'She goes in. She doesn\'t close the door all the way behind her.'
      ],
      fx: { set: { e3_tam_next_time: 1 } },
      end: true
    },
    t_tam_s1: {
      loc: 'The Gutted Hen — the back step, evening',
      text: [
        'She\'s on the back step peeling an apple with her knife, for Edda, who is in the cellar and who likes apples, she has discovered, more than eels. One long curl, the fen way: if it doesn\'t break, you get a wish.',
        { if: "done('e1_t_tamsin')", t: 'Last time, on this same step, it broke a hand\'s length from the ground and she swore and ate the bit that fell. This time the curl gets longer and longer. It reaches the ground. It keeps going.', else: 'The curl gets longer and longer. It reaches the ground. It keeps going.' },
        'It doesn\'t break.',
        'She stares at it, with the knife still in her hand, as if it has done something remarkable. Then she looks up at you, and her face is completely open, for once, like a window with the shutters back.',
        '@tamsin: "Did you see that? Sergeant. Did you see? It didn\'t *break*."'
      ],
      choices: [
        { t: '"So what did you wish?"', go: 't_tam_s2' },
        { t: '"I saw." Sit down beside her.', go: 't_tam_s2', fx: { bond: { tamsin: 1 } } },
        { t: 'Steal a slice of the apple.', go: 't_tam_s2', fx: { set: { e3_stole_slice: 1 } } }
      ]
    },
    t_tam_s2: {
      text: [
        '@tamsin: "Not telling. Fen rule." She grins, the chipped tooth. Then, softer: "She\'s alive, Sergeant. She\'s down there eating Mags out of house and home and complaining about the cat. She\'s *alive*." She shakes her head. "We did one thing right. In this whole stinking town. You and me. We did one thing right."',
        'She says *you and me* without seeming to notice she\'s said it. You notice.',
        '@tamsin: "My mam would\'ve liked you," she says suddenly, and then looks horrified, and gets up, and takes the apple down to the cellar very fast without looking back.',
        'The peel is still lying on the step, one unbroken curl. You don\'t know why, but you pick it up. You don\'t know what to do with it. In the end you put it in the case with the roll.'
      ],
      fx: { set: { e3_kept_peel: 1 } },
      end: true
    },

    t_pell_1: {
      loc: 'The Gutted Hen — a corner table, afternoon',
      text: [
        'Brother Pell has been sober for three days. It is not going well. He sits in the corner with a full cup of brandy in front of him, untouched, both hands flat on the table either side of it, like a man keeping a dog from bolting.',
        '@pell: "Sit, my son. Sit. I need a witness." He doesn\'t look away from the cup. "I am conducting an experiment in the nature of grace."',
        'His hands are shaking so badly the brandy is shivering in rings.'
      ],
      choices: [
        { t: 'Sit. Wait with him. Don\'t touch the cup.', go: 't_pell_2', fx: { set: { e3_pell_waited: 1 } } },
        { t: 'Take the cup and drink it yourself. "Experiment\'s over."', go: 't_pell_2b' },
        { t: '"What are you so frightened of, Pell?"', go: 't_pell_2' }
      ]
    },
    t_pell_2b: {
      text: [
        'He watches it go down your throat with an expression of such naked grief that you almost apologise.',
        '@pell: "Well," he says at last. "That\'s one way to remove a temptation. Not the way Saint Ambrel recommends." Then, unexpectedly, he laughs, and wipes his eyes. "Thank you. I think. Sit down, you thief."'
      ],
      next: 't_pell_2'
    },
    t_pell_2: {
      text: [
        '@pell: "The Writ," he says. "*A soul that Heaven cannot number.* They think it\'s a witch, or a demon, or a fen girl with mud on her hands. That\'s what the Lamp always thinks. It\'s easier." He turns the cup a quarter-turn, not drinking. "But I know the Book of Embers, my son. I know the old commentary, the bit they stopped copying. *The Starless One shall walk among the living, and the Lamp shall seek him, and shall not see him, though he stand at the foot of the pyre.*"',
        'He looks, very briefly, at your gloved left hand on the table. Then away.',
        '@pell: "I am a coward and a drunk and I was thrown out of the Lanternhold for asking a question. I don\'t intend to ask another one. Not of you." His voice is very gentle. "I only wanted you to know that I\'ve read the commentary. In case it should ever be... useful to have a friend who has."',
        { if: 'f.e3_saw_crypt_door', t: 'You tell him about the undercroft. The stair going down. The iron door, and the line of blue light under it, and the hum like a wet finger round a glass. He goes grey. He goes grey all the way to his lips, and picks up the brandy, and puts it down again without drinking it. "Yes," he says. "That\'s the one. That\'s my door."' }
      ],
      choices: [
        { t: '"Thank you, Pell."', go: 't_pell_3', fx: { bond: { pell: 1 } } },
        { t: '"What was the question? The one that got you thrown out."', go: 't_pell_q' },
        { t: '"Drink your brandy, old man. You\'ve earned it."', go: 't_pell_3' }
      ]
    },
    t_pell_q: {
      text: [
        '@pell: "I put my ear to that door, one winter, two years ago. Old iron, warm as a hearthstone. And on the other side, breathing. A great many people breathing together, very slow, like a congregation asleep." He says it very quietly. "So I went up and asked the Abbess what was in her crypt. She smiled at me and said: *Prayer, Pellam.* And gave me a honey cake. And I was in the street by noon with my robe on my arm, and nobody I had known for twenty-two years would look at me." He drinks, at last. One swallow. "She was so *kind* about it. That was the worst of it. She was kind."'
      ],
      fx: { set: { e3_pell_vigil: 1 }, bond: { pell: 1 } },
      next: 't_pell_3'
    },
    t_pell_3: {
      text: [
        'He pushes the cup across the table to you, half-full. Then he pulls it back. Then he leaves it in the middle, between you, and folds his hands.',
        '@pell: "Tomorrow," he says. "I\'ll try again tomorrow." He smiles, weakly. "That\'s the whole of my theology these days, my son. Tomorrow I\'ll try again."'
      ],
      end: true
    },

    t_edda_1: {
      loc: 'The Gutted Hen — the cellar',
      text: [
        'Edda Moss is sitting cross-legged on her tick behind the small beer with the one-eyed cat in her lap, eating an apple down to the pips and then eating the pips. Her hair is growing back like the fuzz on a gosling.',
        '@edda: "I can\'t stay down here," she says, when you come down. Not ungrateful. Just certain, the way fen-folk are about weather. "I\'m going mad. I can hear the Wardens\' horses on the Stair every morning. And Mags keeps feeding me. I\'ll be the size of a heifer by Saint Corran\'s." She scratches the cat. "I want to go home. I want to go and sit by my da."'
      ],
      choices: [
        { t: '"Then go home. Gall\'s people will hide you. Wait for the Wardens to leave."', go: 't_edda_2', fx: { set: { e3_edda_after: 'fen' }, rep: { fen: 1 } } },
        { t: '"Stay. A few more weeks. They\'re watching the fen gate. Mags won\'t mind."', go: 't_edda_2', fx: { set: { e3_edda_after: 'cellar' } } },
        { t: 'Give her twenty silver. "North. Corvane. Somewhere they don\'t know your face."', cost: 20, go: 't_edda_2', fx: { set: { e3_edda_after: 'north' } } }
      ]
    },
    t_edda_2: {
      text: [
        { if: "f.e3_edda_after==='fen'", t: '@edda: "Gall hides everyone," she says. "That\'s what Gall\'s *for*." She says it with total trust, the way a child talks about her mother. You find, without knowing why, that you don\'t like it.' },
        { if: "f.e3_edda_after==='cellar'", t: '@edda: "A few weeks." She sighs enormously, theatrically, and flops back on the tick, and the cat complains. "Fine. Fine. But you have to bring me eels. Real ones. Mags\'s eels are an insult."' },
        { if: "f.e3_edda_after==='north'", t: 'She looks at the coins for a long time. "I\'ve never been further than Harrowgate," she says. "I\'ve never been anywhere they don\'t bury people." She closes her fist round the silver anyway. "I\'ll think about it. I will. I\'ll think about it."' },
        'She looks at you, then, properly, for the first time since the Fish Shambles.',
        '@edda: "My da was frightened of going up," she says. "All his life. He used to look at the stars and shiver. He said they looked *hungry*." She shrugs. "Stupid, really. They\'re only stars."',
        '@ansel: "Only stars," you agree, and do not look up at the cellar grating, where you can see three of them.'
      ],
      end: true
    },

    t_bran_1: {
      loc: 'A wayside shrine outside the walls — night',
      text: [
        'You can\'t sleep, so you walk, out of the West Gate and along the Corvane road, and a mile out, at a crossroads with no gibbet, there\'s a shrine no bigger than a cowshed, with a lamp burning blue in the niche.',
        'You hear it before you get there. A wet, flat sound, like a sail in wind. Again. Again. A breath through the nose. Counting.',
        'She\'s kneeling on the stone in her shift, pulled down to the waist, with her plate stacked against the wall. Her back is a map. She doesn\'t stop when she hears your step. She doesn\'t stop until she reaches whatever number it is. Then she sits back on her heels, breathing, and drapes the cord over her knee.',
        '@brannagh: "Sergeant Dray." Without turning. "You walk like a man who doesn\'t want to be heard. It doesn\'t work on stone."'
      ],
      choices: [
        { t: 'Wait outside. Turn your back. Give her that.', go: 't_bran_2', fx: { set: { e3_bran_turned: 1 } } },
        { t: '"Why?"', go: 't_bran_2' },
        { t: 'Sit down in the doorway. Don\'t look away.', go: 't_bran_2' }
      ]
    },
    t_bran_2: {
      text: [
        'She pulls the shift up over her shoulders, wincing, and comes and sits on the shrine step, not close, not far, with her hands hanging between her knees.',
        '@brannagh: "My mother gave me to the Lamp when I was eight, for a tithe remission. Four years\' tithe. I was a good price. I was big for my age." Flat. Not self-pitying. A quartermaster again. "The Wardens taught me that the fire I carry is Heaven\'s, and it burns me because I am not yet clean enough to carry it. So I make myself cleaner." She touches the scar on her throat. "One day I will be clean enough, and it won\'t burn."',
        '@ansel: "And if it always burns?"',
        { if: 'f.e3_told_brannagh_roll', t: '@brannagh: "Then I will be burned." She looks at you, almost amused. "You think that\'s madness. You carry four hundred and five names. I watched your face when you said the number. We all have our cords, sergeant."', else: '@brannagh: "Then I will be burned." She looks at you, almost amused. "You think that\'s madness. Everyone has something they do in the dark so they can stand up in the morning. We all have our cords, sergeant."' },
        'Her eyes go to your left hand, in its glove, resting on your knee.',
        '@brannagh: "Why the glove?"'
      ],
      choices: [
        { t: '"A burn. From a stone." (True. It means nothing to her.)', go: 't_bran_3', fx: { set: { e3_bran_glove: 'truth' } } },
        { t: '"A Lamp candle, when I was a boy. My father held my hand over it for stealing." (A lie. A good one.)', check: { stat: 'presence', dc: 12, pass: 't_bran_3', fail: 't_bran_3b' } },
        { t: '"We all have our cords, Lampwarden."', go: 't_bran_3', fx: { set: { e3_bran_glove: 'cord' } } }
      ]
    },
    t_bran_3b: {
      text: [
        'She looks at you a moment too long.',
        '@brannagh: "You lie well, sergeant. Not well enough." But she lets it lie, the way you\'d let a wounded man keep his hand over a wound he doesn\'t want you to see. "Keep your glove. I\'m too tired tonight to want to know."'
      ],
      fx: { set: { e3_bran_glove: 'lie' } },
      next: 't_bran_4'
    },
    t_bran_3: {
      text: [
        { if: "f.e3_bran_glove==='truth'", t: '@brannagh: "A stone." She considers. "Hot stones, in the Lowmarch? The smithies, I suppose." She nods, and files it away, and it means nothing to her at all. Your palm burns in the glove like a shout in an empty church.' },
        { if: "f.e3_bran_glove==='cord'", t: 'Something happens to her mouth. It\'s almost a smile. It\'s the closest you\'ve seen. "Yes," she says. "I suppose we do."' },
        { if: "f.e3_bran_glove!=='truth' && f.e3_bran_glove!=='cord'", t: '@brannagh: "Fathers," she says, and something closes in her face. "Yes." She doesn\'t ask again.' }
      ],
      next: 't_bran_4'
    },
    t_bran_4: {
      text: [
        'She reaches behind her into the shrine and comes back with a little pot of salve. Holds it out.',
        '@brannagh: "There\'s a place between the shoulder-blades I can\'t reach. Oriel usually does it. She can\'t, tonight; they\'ve shut her up for saying strange things." She looks at you steadily. "It\'s only salve, sergeant. I\'m not asking anything else of you. I don\'t know how."'
      ],
      choices: [
        { t: 'Take the pot. Do it. Gently, and only that.', go: 't_bran_5', fx: { bond: { brannagh: 1 }, set: { e3_bran_salve: 1 } } },
        { t: '"I don\'t think that\'s a good idea, Lampwarden."', go: 't_bran_5b' }
      ]
    },
    t_bran_5: {
      text: [
        'She turns her back and lowers the shift to her waist again, and sits very straight on the step, and you kneel behind her with the pot.',
        'Up close, the lines are a history. Some are years old, white and smooth. The new ones are raised and hot to the touch. You work the salve into them with two fingers, slowly, the way you\'d treat a horse\'s galls. It smells of comfrey and lard. Her skin jumps under your hand, once, then goes still.',
        'Neither of you says anything. Her breathing is very even, very controlled, like someone holding a guard. Yours isn\'t. You notice that. You hope she doesn\'t.',
        'When you\'re done she draws the shift back up without turning round.',
        '@brannagh: "Thank you," she says to the dark road. Her voice is not quite steady. "Go home, Ansel Dray. Go now, please."',
        'You go. At the bend of the road you look back. She is still sitting on the step, very straight, with her arms wrapped around herself, looking at the sky.'
      ],
      end: true
    },
    t_bran_5b: {
      text: [
        'She nods, at once, as if you\'ve confirmed something.',
        '@brannagh: "No. You\'re right. It isn\'t." She puts the pot down on the step. "Goodnight, sergeant. Thank you for being sensible. One of us should be."',
        'You walk back to Harrowgate under the stars. You don\'t look up. It doesn\'t help.'
      ],
      fx: { set: { e3_bran_declined: 1 } },
      end: true
    }
  },
  side: [
    { id: 'e3_c_rusk', kind: 'contract', title: 'The Toll on Thornwood Road', desc: 'The Carters of the Market Stair will pay 50 silver to whoever opens the Thornwood road. The bandit queen Rusk takes a toll on every wheel.', level: 4, start: 'c_rusk_1' },
    { id: 'e3_c_hag', kind: 'contract', title: 'Bones in Tidy Piles', desc: 'An eel-wife\'s daughter has been taken into the Sallow Holt, where nobody goes. Thirty silver, all she has.', level: 4, start: 'c_hag_1' },
    { id: 'e3_t_tamsin', kind: 'talk', who: 'tamsin', title: 'After the pyre', start: 't_tam_0', if: "inParty('tamsin')" },
    { id: 'e3_t_pell', kind: 'talk', who: 'pell', title: 'An experiment in grace', start: 't_pell_1', if: "inParty('pell')" },
    { id: 'e3_t_edda', kind: 'talk', who: 'edda', title: 'The girl in the cellar', start: 't_edda_1', if: "f.e3_edda==='saved'" },
    { id: 'e3_t_brannagh', kind: 'talk', who: 'brannagh', title: 'The shrine on the Corvane road', start: 't_bran_1', if: 'f.e3_brannagh_seen && !f.e3_scarred_corwin' }
  ]
});
