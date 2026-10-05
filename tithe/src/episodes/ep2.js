/* TITHE — Season One, Episode 2: "Harrowgate" */

/* ---------- Episode 2 data additions ---------- */
TITHE.CAST.e2_brisket = { name: 'Nurse Brisket', full: 'Nurse Brisket', color: '#c9a9a0', role: 'The Old Nurse',
  bio: 'Seventy if she is a day. Lady Isolde\'s nurse since the cradle. Four foot ten of starch and opinions. Carries eggs as a disguise.' };
TITHE.CAST.e2_nan = { name: 'Nan Fitch', full: 'Nan Fitch', color: '#8f9aa6', role: 'The Smuggler',
  bio: 'Brandy-runner of the Harrowgate cisterns. Has not been above ground for three days and has opinions about rats.' };
TITHE.CAST.e2_crouch = { name: 'Abel Crouch', full: 'Master Abel Crouch', color: '#a59b78', role: 'The Tanner',
  bio: 'Master of the Tanners\' Guild. His hands are stained the colour of strong tea to the wrist.' };

TITHE.ENEMIES.e2_ratking_burning = { name: 'The Wedded Rats, Burning', hp: 48, def: 9, arm: 0, dmg: [5, 9], acc: 3, xp: 140, silver: [0, 0], tags: ['beast', 'boss'], weak: ['fire'],
  moves: [{ n: 'Burning Tide', w: 3, m: 1, fx: 'burn', aoe: true, tele: 'a hundred burning heads turn toward you at once' }, { n: 'Crush', w: 1, m: 1.8, heavy: true, tele: 'the whole blazing mass heaves itself up like a wave' }, { n: 'Shriek', w: 1, m: 0, fx: 'fear', aoe: true, tele: 'every mouth in it opens at once' }],
  loot: [['rat_tail', 1, 2]],
  lore: 'The rat-king, on fire, which has not made it any less hungry. It has made it faster.' };
TITHE.ENEMIES.e2_pit_eel = { name: 'The Lime-Pit Eel', hp: 58, def: 11, arm: 1, dmg: [5, 10], acc: 3, xp: 130, silver: [0, 0], tags: ['beast', 'boss'], weak: ['fire'],
  moves: [{ n: 'Bite', w: 3, m: 1, fx: 'bleed', tele: 'its blind white head sways at the edge of the pit' }, { n: 'Drag Under', w: 1, m: 1.8, heavy: true, fx: 'stun', tele: 'sinks into the lime-milk until only a ripple shows' }, { n: 'Lime-Thrash', w: 1, m: .8, aoe: true, fx: 'burn', tele: 'begins to thrash, slinging caustic white slurry' }],
  loot: [['rat_tail', .5, 1], ['saltpeter', 1, 2]],
  lore: 'A cistern eel, white and blind and thick as a man, that has lived under Harrowgate since before Harrowgate. It came up into the tannery pits when the rats stopped coming down.' };

TITHE.ITEMS.e2_boar_token = { name: 'The Marshal\'s Token', type: 'quest', desc: 'A brass token stamped with the Varane boar. It means you are Ser Konrad\'s man. Doors open. You hate how easily.' };
TITHE.ITEMS.e2_archive_key = { name: 'The Archive Key', type: 'quest', desc: 'A small iron key on a blue thread. Lady Isolde\'s. "The servants\' door. After dark. Knock twice."' };

TITHE.CODEX.e2_cisterns = { title: 'The Cisterns', text: 'Under the old town: vaulted tanks and channels cut by people who were here before the Varanes, before the Lamp. Smugglers use them. Rats live in them. Something has been throwing a great deal down into them.' };

TITHE.episode({
  n: 2, title: 'Harrowgate',
  logline: 'Lady Isolde hires the dead sergeant to find her missing maid; the trail runs under the town, through the rats, to a girl sitting alone in the dark.',
  start: 'cold1',
  credits: ['ansel', 'isolde', 'hask', 'pell', 'tamsin', 'hob', 'mags', 'abbess', 'e2_brisket', 'e2_nan', 'moll', 'tallyman'],
  previously: [
    { t: 'Six years ago, at Corran\'s Ford, Ansel Dray died on an old stone carved with a star. In the morning he woke up.' },
    { t: 'A grey man with a ledger looked for him among the dead, and could not find him. "Hm."' },
    { if: "f.e1_ashby==='led'", t: 'At Ashby a whole village stood in the rain, emptied. Ansel walked them to Harrowgate, and the Lanternhold took them in.' },
    { if: "f.e1_ashby==='mercy'", t: 'At Ashby a whole village stood in the rain, emptied. Ansel gave them mercy, one by one. They made no sound.' },
    { if: "f.e1_ashby==='left'", t: 'At Ashby a whole village stood in the rain, emptied. Ansel left them there. A little girl with a doll watched him go.' },
    { if: 'f.e1_chalk', t: 'Every door in Ashby was marked with the Lamp\'s tithe-star. On the inside.' },
    { t: 'On the downs, ghouls took Odo Pettibone in the night. Ansel brought his wagon in anyway.' },
    { if: "f.e1_hask_meeting==='swallowed'", t: 'At the gate of Harrowgate: Konrad Hask, the captain who sold the Red Company. "Sergeant Dray. You\'re dead." Ansel took his hand off his sword.' },
    { if: "f.e1_hask_meeting==='spat'", t: 'At the gate of Harrowgate: Konrad Hask, the captain who sold the Red Company. "Four hundred and six, Captain. I wrote them all down."' },
    { if: "f.e1_hask_meeting==='drew'", t: 'At the gate of Harrowgate: Konrad Hask, the captain who sold the Red Company. Ansel drew. Hask smiled. "There\'s my sergeant."' },
    { if: 'f.e1_saw_crow', t: 'In the dead of night, Tamsin tied a knot of red thread to a crow\'s leg and sent it south.' },
    { t: 'On the wall above the gate, a young woman with a ledger was counting the carts. She counted his, and then she looked at him.' },
    { if: 'f.e1_hask_bottle', t: 'That night the Marshal sent up a bottle of Corvane red. *To the Red Company.*' }
  ],
  nextTime: [
    'Twelve riders in white enamel, the seven-point star on every breast.',
    '"By its authority I am to seek out, in the March of Harrowgate, a soul that Heaven cannot number."',
    'In a carriage of black iron and green glass, a blind girl whispers through the rain: "He\'s here."'
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    cold1: {
      loc: 'Harrowgate — Lantern Lane, the Tanners\' Bottom — night',
      fx: { party: { remove: ['tamsin', 'pell', 'hob', 'ulla'] } },
      text: [
        `Dickon Pye has had nine pints and a dispute with his wife, and he has won neither. He comes down Lantern Lane in the rain singing the one about the bishop's goat, and stops at the old iron grate in the gutter, because a man has to stop somewhere.`,
        `He pisses through the bars into the dark. It takes a long time to hit anything.`,
        `@narrator: "Deep," says Dickon Pye, to nobody, impressed.`,
        `The grate shifts under his boots. The iron has been rusting for three hundred years and has chosen tonight. There is a noise like a cart-axle snapping, and Dickon Pye goes down into the dark with his breeches open and his mouth still full of the bishop's goat.`
      ],
      next: 'cold2'
    },
    cold2: {
      loc: 'The cisterns under Harrowgate — the same moment',
      text: [
        `He lands in water to the waist, cold enough to stop his heart for a beat. Stone vaulting overhead, a ragged hole of rain-grey sky twelve feet up. Old brick. A smell like a cellar where something has been dying slowly for a long time.`,
        `He laughs. That's the drink. He's alive, and the drink thinks that's funny.`,
        `Then the water around him is full of small warm bodies.`,
        `They come along the ledges first, then off them, plopping in like dropped stones. Dozens. The first bite is on his hand, almost polite. The second takes the lobe of his ear. He's still laughing when the third goes into the soft of his neck, and then he isn't, and then he's trying to climb a wall that has no handholds with forty rats hanging from his coat like burrs.`
      ],
      next: 'cold3'
    },
    cold3: {
      text: [
        `He gets one hand on the lip of the hole. Someone up in Lantern Lane might hear him, if anyone were in Lantern Lane.`,
        `Behind him, further in, the water rises in a long, slow swell, the way water rises in front of something very large moving underneath it.`,
        `The rats on his coat stop biting. They go still. All of them. They turn their heads the same way, together, like a congregation when the priest comes in.`,
        `Then they let go and swim away from him as fast as they can.`,
        `Dickon Pye has a moment to understand that this is worse.`,
        `In the dark at the far end of the cistern, past the thing in the water, someone is sitting very still on a stone ledge. A girl, by the shape of her. She doesn't scream when Dickon Pye starts screaming. She doesn't turn her head. She doesn't do anything at all.`
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { codex: ['e2_cisterns'] } },
      next: 'morn1'
    },

    /* ======================= ACT ONE: THE OFFER ======================= */
    morn1: {
      loc: 'The Gutted Hen — the top room, morning',
      text: [
        `You wake with the shakes and the lime-stink of the tanneries in your nose, which for one terrible moment makes you fifteen again, in your father's yard, with your hands in the pits.`,
        `Then you remember where you are. Harrowgate. The Hen. Konrad Hask, alive, a quarter-mile up the hill, eating his breakfast.`,
        `Across the landing, Tamsin's door stands open. The bed is made, badly. An apple core sits on the windowsill like a note. She said a few days. Her gran's, in the fen.`,
        `Your purse is lighter than you'd like.`,
        { if: "f.e1_hask_bottle==='drank'", t: `Hask's Corvane red stands on the washstand with two fingers left in it. You don't remember drinking that much. You remember the names.` },
        { if: "f.e1_hask_bottle==='kept'", t: `Hask's bottle stands on the washstand, still corked, catching the light like a guest who won't leave. Beside it, your own: two fingers of poitín.` },
        { if: "!f.e1_hask_bottle || f.e1_hask_bottle==='poured'", t: `There's a bottle on the washstand with two fingers of poitín in it.` }
      ],
      choices: [
        { t: `Drink it. Steady the hands. Hask will be watching your hands.`, go: 'morn2', fx: { set: { e2_drank: 1 }, heal: 3 } },
        { t: `Leave it. You want to be sober when you see him.`, go: 'morn2', fx: { set: { e2_sober: 1 }, st: 1 } },
        { t: `Read the roll first. Just the first line.`, go: 'morn_roll' }
      ]
    },
    morn_roll: {
      text: [
        `You untie the sergeant's cord and unroll the first hand's-breadth of it on the blanket.`,
        `*Konrad Hask, Captain. Of Corvane.*`,
        `Last night you read it aloud. This morning it looks wrong in the light, like a word you've written so often it has stopped meaning anything. The ink is six years old. The man is not dead.`,
        `You roll it up, tie it, and leave the bottle where it is. Not out of virtue. Out of spite.`
      ],
      fx: { set: { e2_sober: 1 }, st: 1 },
      next: 'morn2'
    },
    morn2: {
      loc: 'The Gutted Hen — the kitchen',
      text: [
        `Mags is in the kitchen gutting a pike with a knife the length of your forearm. She doesn't look up.`,
        { if: 'f.e2_drank', t: `@mags: "Morning. Bread's on the board, and you can tell me what that bottle did for you that the bread couldn't."` },
        { if: '!f.e2_drank', t: `@mags: "Morning. You look like a man who's decided to be brave before breakfast. Bread's on the board."` },
        `She jerks her chin at the table. There's a folded paper on it, sealed in blue wax with a boar.`,
        `@mags: "Marshal's man brought that at cockcrow. Very polite. Wiped his feet." She takes the pike's guts out in one pull. "And Hettie Pye's been in twice asking if anyone's seen her Dickon. He went home drunk down Lantern Lane last night and never got there. There's a hole in the lane this morning where the old grate was. Cisterns under there, older than the walls. Rats now. Big ones." She wipes the knife. "Nobody goes down there, love."`
      ],
      choices: [
        { t: `Open the letter.`, go: 'morn_letter' },
        { t: `"You gut a fish like a sergeant."`, go: 'morn_mags' }
      ]
    },
    morn_mags: {
      text: [
        `@mags: "I was married to a soldier's son and then a fisherman's. You pick things up." She points the knife at you, friendly. "You hold a spoon like a sergeant. Sit down and use it."`,
        `You sit. The bread is good. It is extremely good. You eat two slices before you notice she's watching you eat with an expression you can't read, something between a cook's satisfaction and something less simple.`
      ],
      fx: { heal: 4 },
      next: 'morn_letter'
    },
    morn_letter: {
      text: [
        `The hand is neat and fast. A captain's hand. You'd know it anywhere; you used to copy out his orders.`,
        `*Ansel. My door is open. Come up when you've slept and had a bath, in that order, and we'll talk like the old days. There's wine. There's work. There's a great deal I want to say to you and none of it should be said at a gate. — K.*`,
        `Under it, as an afterthought: *Bring the case if you like. I'd like to see it.*`
      ],
      choices: [
        { t: `Go up to the Keep.`, go: 'yard1' }
      ]
    },
    yard1: {
      loc: 'The Gutted Hen — the stable yard',
      text: [
        `In the yard, a gangly boy with a thatch of straw-coloured hair and more freckles than face is grooming Ox, which is impossible, because nobody grooms Ox.`,
        `The boy's left hand is bleeding freely. Ox has clearly bitten it. The boy doesn't seem to mind. He's talking to the horse in a low steady voice, the way you talk to a frightened child, and Ox, who has never in his life leaned into anything but a bite, is leaning into the brush.`,
        `He sees you. He goes red to the ears.`,
        `@hob: "Sir! Sergeant. Sir. I'm Hob. Fenner. I do the horses here, for Mistress Halloran. I saw you bring the wagon in. With the claw-marks on the canvas. Moll says it was ghouls. Was it ghouls? Was it a *mother*?"`
      ],
      fx: { know: { cast: ['hob'] } },
      choices: [
        { t: `"It was. Bandage that hand before it goes bad."`, go: 'yard_kind' },
        { t: `"He bit you."`, go: 'yard_bit' },
        { t: `"Don't call me sir." Walk on.`, go: 'yard_walk' }
      ]
    },
    yard_kind: {
      text: [
        `@hob: "It was a *mother*." He looks at his hand as if he's only just noticed it. "Oh. Right. Yes, Sergeant."`,
        `You show him how: clean water, tight linen, the end tucked under so it won't snag. He watches your hands like they're doing a card trick. When you're done he holds the bandage up to the light as if you gave him a medal.`,
        `@hob: "Nobody ever showed me anything properly before. They just shout."`
      ],
      next: 'yard_end'
    },
    yard_bit: {
      text: [
        `@hob: "Four times." With enormous pride. "First horse in this yard ever *let* me. The others all bite once and then they like me. He keeps biting. I think it means he respects me."`,
        `@ansel: "It means he's a horse who bites."`,
        `@hob: "Yes, Sergeant." He doesn't believe you. Ox, behind him, looks at you with the smug half-closed eyes of a creature who has found a new idiot to love him.`
      ],
      next: 'yard_end'
    },
    yard_walk: {
      text: [
        `@hob: "Yes, sir. Sergeant. Yes."`,
        `You walk out of the yard. You don't look back, which means you don't see him watching you go, but you know he is, the way you always knew when a recruit was watching you, because it itches between the shoulders.`
      ],
      next: 'yard_end'
    },
    yard_end: {
      text: [
        { if: 'f.e1_spared_wat && f.e1_wat_dray', t: `@hob: "Sergeant! There's a new lad on the Keep gate. Wat. From Hobb's End. He came in saying *Sergeant Dray sent me*, and they laughed at him, and then they gave him a spear anyway because the Marshal said a man with a story like that was a man who'd keep his mouth shut." Hob grins. "Was that you? Are you the dead sergeant?"` },
        { if: 'f.e1_spared_wat && !f.e1_wat_dray', t: `@hob: "Sergeant! There's a new lad on the Keep gate. Wat. From Hobb's End. Says a man on the Kingsroad could have killed him and didn't, so he burned his coat and came to ask for work, and the Marshal gave him a spear." Hob grins. "He says the man had a sergeant's knot. Was that you?"` },
        { if: 'f.e1_spared_wat', t: `You don't answer. You find you're walking a little easier up the hill.` },
        { if: '!f.e1_spared_wat', t: `@hob: "Sergeant! If you need anything. Anything. I'm Hob. Fenner. I'm *here*."` }
      ],
      next: 'keep1'
    },

    keep1: {
      loc: 'Varane Keep — the Marshal\'s tower',
      text: [
        `Varane Keep is older and smaller and poorer than it looks from the road. Patched slates. A bailey full of mud and chickens. Men-at-arms in good blue cloaks with darned elbows. Everything a lord can afford to keep up appearances and nothing he can afford behind them.`,
        `Except here. The Marshal's tower has new glass in the windows.`,
        `In the yard below it, a covered cart stands loaded and lashed, mules in the traces, canvas pegged down tight. A clerk sits on the tail with a slate. When you pass, the wind lifts the corner of the canvas and you smell something you know and can't place for a moment. Honey. Lamp oil.`,
        `@narrator: "Salt-picks and rope for Saltdown," says the clerk, before you've asked. He smiles. He has very good teeth.`,
        `Under the canvas, something shifts, and is still.`
      ],
      choices: [
        { t: `Keep walking. One fight at a time.`, go: 'keep2' },
        { t: `Put a hand on the canvas as you pass.`, check: { stat: 'wits', dc: 13, pass: 'keep_cart_pass', fail: 'keep_cart_fail' } }
      ]
    },
    keep_cart_pass: {
      text: [
        `Under your palm, through the oilcloth: warmth. A shoulder, maybe. Breathing, slow and even, the breathing of a sleeper. Not salt-picks. Not rope.`,
        `The clerk's smile doesn't move. His eyes do.`,
        `@narrator: "Mind the load, friend. It's spoken for."`,
        `> Debtors, maybe. Convicts for the mines. That's legal. That's the March. You've seen worse go north in carts.`,
        `> You've never seen any of it sleep so quietly.`
      ],
      fx: { set: { e2_cart_felt: 1 } },
      next: 'keep2'
    },
    keep_cart_fail: {
      text: [
        `The clerk is off the tail of the cart before your hand lands, quick for a man with a slate.`,
        `@narrator: "Marshal's goods, friend. Upstairs is where you want." He's pleasant about it. Two men-at-arms by the well are suddenly paying attention to nothing in your direction.`,
        `You go upstairs.`
      ],
      next: 'keep2'
    },
    keep2: {
      loc: 'Varane Keep — the Marshal\'s office',
      text: [
        `The office is warm. That's the first thing. A brazier of good sea-coal, a carpet from somewhere south, maps on every wall pinned with coloured thread: the March, the Kingsroad, the Thornwood, the fen, Saltdown. Over the fireplace, the Varane boar in faded red, tusks like scythes.`,
        `Konrad Hask is standing at the window with his back to you, in his shirtsleeves, with a cup in his hand. He turns.`,
        { if: "f.e1_hask_meeting==='swallowed'", t: `@hask: "Ansel." Pure pleasure. "You came. I said to Moll, he'll come, he's the clever one, he'll come and look at me before he decides anything. Sit. Sit down, for the Saints' sake, you're making the room nervous."` },
        { if: "f.e1_hask_meeting==='spat'", t: `@hask: "Ansel." He lifts his boot an inch, looks at it, smiles. "I had them cleaned. Sit down. You can spit on the carpet if you need to; it's Lord Varane's, and he's never liked it."` },
        { if: "f.e1_hask_meeting==='drew'", t: `@hask: "Ansel." He looks at Widow on your hip, and then, pointedly, at his own sword hanging on a peg across the room, out of reach. "I've put it over there. As a courtesy. Sit down. If you want to try again, try after the wine; it's a very good wine and I'd hate to waste it."` },
        `He pours. Real Corvane red, dark as a bruise, in two glass cups. Glass. You haven't drunk from glass since the Company's last good winter.`
      ],
      fx: { set: { e2_met_hask: 1 } },
      next: 'hask_hub'
    },
    hask_hub: {
      text: [
        `He sits on the edge of the desk, one boot swinging, the way he used to sit on the tail of the supply wagon telling the recruits lies about Corvane whores. On the desk behind him, an open ledger, columns of figures in that same quick captain's hand.`
      ],
      choices: [
        { t: `"Tell me about the Ford."`, go: 'hask_ford', once: true },
        { t: `"What's the work?"`, go: 'hask_work', once: true },
        { t: `"Why haven't you had me killed?"`, go: 'hask_why', once: true },
        { t: `Read the ledger upside down while he talks.`, if: '!f.e2_hask_ledger && !f.e2_hask_ledger_tried', check: { stat: 'wits', dc: 14, pass: 'hask_ledger_pass', fail: 'hask_ledger_fail' } },
        { t: `"Enough. Here's my answer."`, if: 'f.e2_hask_ford', go: 'hask_decide' }
      ]
    },
    hask_ford: {
      text: [
        `He doesn't flinch. You'd hoped he would. He sets his cup down and folds his hands, and for a moment he is your captain again, giving a briefing.`,
        `@hask: "Ashwick had three thousand crossbows coming down out of the north. You didn't know that. I didn't tell you, because there was nothing you could do with it. The Crown had already signed us away in the treaty: four hundred spears, a line item. Whatever happened at that river, the Red Company was finished. Finished, Ansel. Either the Duke's bolts or the King's hangman, a month later, for the crime of being on the wrong side of a peace."`,
        `@hask: "The Duke offered gold. And a pardon. One pardon. Mine. I asked for four hundred. I want you to know that I asked. The lads who rode with me that morning bought theirs later, with what they did for me after."`,
        `He looks you in the eye. He has always been able to do that. It was the first thing he taught you: look them in the eye and they'll believe the rest.`,
        `@hask: "The Company was finished either way. I chose which of us walked away."`
      ],
      fx: { set: { e2_hask_ford: 1 } },
      choices: [
        { t: `"You could have told us. We could have run."`, go: 'hask_ford_run' },
        { t: `"*Which of us.* You mean you."`, go: 'hask_ford_you' },
        { t: `Say nothing. Drink his wine. Let him keep talking.`, go: 'hask_ford_silent' }
      ]
    },
    hask_ford_run: {
      text: [
        `@hask: "Run where? Four hundred men in red cloaks, in the middle of a war, with no pay and no lord? They'd have hunted us down the length of the March like wolves, and every village we passed through would have paid for it. You know what a free company does when it starves. You've seen it. You saw it on the Kingsroad this week, if what Moll tells me is true."`,
        `He shakes his head, slowly, almost tender.`,
        `@hask: "I gave them one clean morning instead of a year of dying ugly. That's what I tell myself, on Saint Corran's day, with the bottle. Some years I even believe it."`,
        `> The worst of it is that it's nearly true. You can feel the shape of the lie in it, but you can't find the edge to pull.`
      ],
      next: 'hask_hub'
    },
    hask_ford_you: {
      text: [
        `@hask: "Yes." Simply. "I mean me."`,
        `He spreads his hands, and for once he doesn't smile.`,
        `@hask: "I'm not going to pretend I'm a better man than I am. You'd know. You always knew. I wanted to live, Ansel. I wanted to live more than I wanted to be loved by four hundred men who were going to die anyway. That's the whole of it. Everything else is trimming."`,
        `He picks his cup back up.`,
        `@hask: "And then you didn't die. Which nobody planned for. Least of all you, by the look of you."`
      ],
      next: 'hask_hub'
    },
    hask_ford_silent: {
      text: [
        `You drink. It's very good wine. He watches you drink it, and something in his shoulders settles, the way a man settles when a horse he thought would buck takes the saddle.`,
        `@hask: "That's right. You always were the listener. Tom Ashe used to say you were the only man in the Company who could hear a lie over the sound of his own voice." A little laugh. "Saints, Tom. That joke about the miller's wife. Did he ever finish it?"`,
        `@ansel: "No."`,
        `The word comes out of you like a stone. Hask hears the weight of it and, for just a breath, has nothing to say.`
      ],
      fx: { set: { e2_hask_silent: 1 } },
      next: 'hask_hub'
    },
    hask_work: {
      text: [
        `@hask: "I need a town sword. Not a man-at-arms; I've got forty of those and they wear the livery and everybody can see them coming. I need a man who drinks in the Hen and hears things, who can lean on a moneylender or walk a debtor up to the Keep without it being a *matter*. Odd jobs. Quiet jobs. Two silver a day and found, and a token that opens doors."`,
        `He grins.`,
        `@hask: "And you'd be close to me, which is what you want. Don't insult us both by pretending it isn't. You want to watch me. Watch me on my coin. Better at my table counting my spoons than out in the rain counting my men."`,
        { if: "f.e1_hask_meeting==='spat'", t: `@hask: "Again."` }
      ],
      next: 'hask_hub'
    },
    hask_why: {
      text: [
        `He laughs. It's a good laugh, warm all the way down. It always was.`,
        `@hask: "Because I like you. Is that so hard to believe? I *trained* you, Ansel. You were a fifteen-year-old tanner's brat with a broken nose and a temper like a wet cat, and I made you the best sergeant in the March. You're the only thing I ever built that was worth anything."`,
        `He drinks.`,
        `@hask: "And because killing you would be stupid. You're the dead sergeant. Half the Kingsroad's heard about you already. A man in my position doesn't murder a war hero in his first week in town. He hires him."`,
        `> Both of those are true. That's what makes him dangerous. He never needs to lie when two truths will do.`
      ],
      next: 'hask_hub'
    },
    hask_ledger_pass: {
      text: [
        `Upside down, his hand is no harder to read than right way up; you spent four years reading it over his shoulder.`,
        `Grain from Coldbrook. Arrears from the Thornwood charcoal-burners. Wages. And near the bottom, in the same neat hand, a line with no goods in it at all: *L.H. — eight — paid in full.*`,
        `Eight what, he doesn't say. Eight casks. Eight loads. The Lanternhold buys a great deal; everyone knows that.`,
        `He closes the ledger with one finger, without looking down at it, still talking. He hasn't noticed. Or he wants you to think he hasn't.`
      ],
      fx: { set: { e2_hask_ledger: 1 } },
      next: 'hask_hub'
    },
    hask_ledger_fail: {
      text: [
        `You get as far as *Coldbrook* before he reaches behind him and closes the ledger with one finger, not looking, still smiling.`,
        `@hask: "Accounts. Saints, the accounts. Varane's daughter goes through them like a ferret through a warren, I swear she counts the candle-ends." He says *Varane's daughter* the way a man says the name of a dog that bites.`
      ],
      fx: { set: { e2_hask_ledger_tried: 1 } },
      next: 'hask_hub'
    },
    hask_decide: {
      text: [
        `Hask sets his cup down and waits. He's good at waiting. He taught you that too.`,
        `Through the new glass you can see the whole of Harrowgate going down the hill: the market, the slate roofs, the long pale Lanternhold with its tower. A thread of smoke from the Tanners' Bottom. Somewhere down there a woman called Hettie Pye is looking for her husband.`,
        `@hask: "Well, Sergeant?"`
      ],
      choices: [
        { t: `"I'll take your coin." Stay close. Watch him on his own silver.`, go: 'hask_took', fx: { set: { e2_hask_job: 'took' } } },
        { t: `"No." Stand up. Leave the wine.`, go: 'hask_refused', fx: { set: { e2_hask_job: 'refused' } } },
        { t: `"No. And Captain? I read your name with the dead last night. Out loud. Every name after it, too."`, go: 'hask_refused_roll', fx: { set: { e2_hask_job: 'refused' } } }
      ]
    },
    hask_took: {
      text: [
        `@hask: "Ha!" He slaps the desk. "Good man. Good man."`,
        `He comes round the desk and presses a brass token into your hand: the boar, stamped deep. Then twenty silver, counted out of a strongbox with the casual speed of a man who has never once in his life worried about twenty silver.`,
        `@hask: "An advance. Buy a bath. Buy a shirt. Odd jobs will come to the Hen by runner." He claps you on the shoulder, and leaves his hand there. "It's good to have you back, Ansel. You've no idea. It's good to have *someone* back."`,
        `You let his hand stay there. That's the price. You knew it would be.`
      ],
      fx: { give: { e2_boar_token: 1 }, silver: 20, rep: { varane: 1 }, quest: { id: 'hask', note: 'You took Hask\'s coin: a "town sword" on the Marshal\'s payroll. Close enough to watch him. Close enough to be watched.' } },
      next: 'hask_parting'
    },
    hask_refused: {
      text: [
        `He doesn't stop smiling. That's the thing about Hask: he never stops smiling. He just lets the smile go cold from the middle outward, like a pond in November.`,
        `@hask: "Pity. You'll come back. Not this week, maybe. But Harrowgate's a small town and you're a poor man, and one day you'll need a door opened, and you'll remember mine was."`,
        `He lifts his cup to you.`,
        `@hask: "To the Red Company."`
      ],
      fx: { rep: { town: 1 }, quest: { id: 'hask', note: 'You refused Hask\'s work. He took it well. That worries you more than if he hadn\'t.' } },
      next: 'hask_parting'
    },
    hask_refused_roll: {
      text: [
        `For the first time since the gate, the smile slips. Not much. A tile sliding off a roof.`,
        `@hask: "Did you." Very quietly. "Did you, now."`,
        `He looks at the leather case on your hip for a long moment. Then he laughs again, and the laugh is almost right.`,
        `@hask: "Well. I've been dead before. Corvane, the fever winter; ask anyone. It didn't take then either." He lifts his cup. "To the Red Company, then. Every line of it. Even the one at the top."`
      ],
      fx: { rep: { town: 1, varane: -1 }, set: { e2_hask_named: 1 }, quest: { id: 'hask', note: 'You refused Hask\'s work, and told him you had read his name among the dead. "Every line of it," he toasted. "Even the one at the top."' } },
      next: 'hask_parting'
    },
    hask_parting: {
      text: [
        `At the door he calls you back.`,
        `@hask: "Oh, Ansel. If you want something to do with your hands that isn't strangling me: go and see the Lanternhold. Morwenna Sallow. The Abbess." His face goes soft in a way you have never once seen it go for a living person. "Lord, there's a woman. Feeds half this town on my tithe-silver and the other half on her own sweat. If I were a better man I'd marry her. As it is, I just pay for her soup."`,
        `He says her name as if he's tasting it.`,
        `@hask: "Tell her I sent you. She likes strays."`
      ],
      fx: { know: { cast: ['abbess'] } },
      next: 'brisket1'
    },

    /* ======================= ACT TWO: THE LADY ======================= */
    brisket1: {
      loc: 'Varane Keep — the kitchen passage',
      text: [
        `You don't get as far as the gate.`,
        `In the kitchen passage, an old woman steps out of a doorway directly into your path, the way a cat steps into the one place you were about to put your foot. She is perhaps four foot ten. She is starched from wimple to hem. She is carrying a basket of eggs as if it were a weapon, and you have the strong impression that in her hands it could be.`,
        `@e2_brisket: "You. The dead one. Pettibone's wagon."`,
        `@ansel: "Who's asking?"`,
        `@e2_brisket: "Nurse Brisket. I wiped her ladyship's bottom for eleven years and I'll thank you not to look at me like I'm the laundry." She looks you up and down, as if pricing you by the pound. "Her ladyship would like a word. Quietly."`
      ],
      fx: { know: { cast: ['e2_brisket'] } },
      choices: [
        { t: `"Why quietly?"`, go: 'brisket_why' },
        { t: `"Tell her ladyship I'm busy."`, go: 'brisket_busy' }
      ]
    },
    brisket_why: {
      text: [
        `Brisket's eyes go up and down the passage. Nobody. She lowers her voice anyway.`,
        `@e2_brisket: "Because everything said in this castle above a whisper goes up to the Marshal's tower by supper, and everything said below it goes up by breakfast. Her ladyship's had a loss. She'd like it found. She'd like it found by someone who isn't on his payroll."`,
        { if: "f.e2_hask_job==='took'", t: `She looks at the brass token in your hand. Her mouth goes very thin. "Which I'll grant you don't look like, as of a quarter-hour ago. She said you'd say yes to him. She said send for you anyway."` }
      ],
      next: 'brisket_end'
    },
    brisket_busy: {
      text: [
        `Brisket considers you the way a heron considers a frog.`,
        `@e2_brisket: "Busy. Doing what? Drinking? Brooding on the Marshal? You can brood in the archive; it's got chairs." She puts an egg into your hand. A whole raw egg, warm from the hen. "That's for your trouble. There's a silver purse for the rest of it. Sundown."`,
        `You stand there holding an egg. She's already walking away.`
      ],
      next: 'brisket_end'
    },
    brisket_end: {
      text: [
        `@e2_brisket: "Lady Isolde Varane. Tall. Grey cloak. Looked at you on the wall like you were a sum that didn't add up."`,
        `@e2_brisket: "Sundown. Servants' door at the back of the chapel yard. Knock twice and say you've come about the candles." She hands you a small iron key on a loop of blue thread. "And for pity's sake have a wash. She's a lady, not a pig-farmer."`,
        `She goes back into the kitchen. Somebody inside yelps.`
      ],
      fx: { give: { e2_archive_key: 1 } },
      next: 'isolde1'
    },

    isolde1: {
      loc: 'Varane Keep — the archive, sundown',
      card: { kind: 'cut', title: 'Sundown', sub: 'The archive of Varane Keep' },
      text: [
        `The archive is a long low room under the chapel, all books. Not holy books: account books. Hundreds of them, calf-bound and cracking, shelved by year back to before anyone's grandfather. Tallies, tithes, rents, debts. The whole history of Harrowgate, written down in what it cost.`,
        `There is one candle, and a woman sitting under it with three ledgers open at once and ink on the side of her hand.`,
        `She doesn't get up. She finishes the line she is writing, blots it, and only then looks at you. Grey eyes. Dark hair coming down out of its pins on one side. A face that has been told since birth that it is valuable and has decided to be useful instead.`,
        `@isolde: "Master Dray. Sit. Not that one; the leg's going. That one."`,
        `You sit. She looks at you for a moment longer than is polite, the way she did from the wall.`,
        `@isolde: "Harrowgate owes the Crown eleven thousand four hundred silver. It owes the bankers of Corvane six thousand and eighty, at a rate of interest that would embarrass a pirate. It owes its own men-at-arms two quarters' wages, which the Marshal pays them out of a purse I cannot find the bottom of. The canal my father dug to make us rich is a ditch full of frogs four miles long."`,
        `She closes one ledger.`,
        `@isolde: "I'm telling you this so that you understand I have no money to waste, and I am about to give some of it to you."`
      ],
      fx: { know: { cast: ['isolde'] } },
      choices: [
        { t: `"Why are you telling a stranger how broke you are?"`, go: 'isolde_why_tell' },
        { t: `"The only solvent house in this town is the Lanternhold. Isn't it." (Wits)`, check: { stat: 'wits', dc: 13, pass: 'isolde_solvent', fail: 'isolde_solvent_fail' } },
        { t: `"What do you want found?"`, go: 'isolde_annet' }
      ]
    },
    isolde_why_tell: {
      text: [
        `@isolde: "Because everyone in Harrowgate who matters already knows, and the people who don't matter guess. And because I've read about you."`,
        `@ansel: "Read."`,
        `@isolde: "The year the Red Company was broken, its pay-books came through Harrowgate for the Crown's auditors, and nobody ever sent for them back. Sergeant A. Dray, fourteen silver a quarter, docked twice for brawling, once for 'insolence to a knight', commended four times. Your handwriting is in some of them. You used to correct the clerk's arithmetic in the margins." The ghost of something that is nearly a smile. "I liked you before I met you, Master Dray. It's a weakness of mine. I trust people whose sums are right."`
      ],
      next: 'isolde_annet'
    },
    isolde_solvent: {
      text: [
        `She goes still. Then she turns the ledger around so you can see it, and puts her finger on a column. Tithe-silver, ten percent of everything in the March. And under it, smaller: *Loan, the Lanternhold, against the spring rents*.`,
        `@isolde: "Most men see a lady with a ledger and assume she's doing the household linens." Her voice is very level. "Yes. The Abbess lends my father money at no interest at all. She is the kindest creditor in Aldermere. I lie awake some nights wondering what she is buying."`,
        `She looks at you differently now. Like a woman who has been alone in a room for years and has just heard someone else breathing.`
      ],
      fx: { set: { e2_isolde_solvent: 1 } },
      next: 'isolde_annet'
    },
    isolde_solvent_fail: {
      text: [
        `@isolde: "The Marshal, you mean?" A little dry. "No. The Marshal is very rich, which is not at all the same thing as solvent. One day someone will explain that to him." She lets it go. You have the feeling you have been weighed, and not found wanting exactly, but not found anything yet either.`
      ],
      next: 'isolde_annet'
    },
    isolde_annet: {
      text: [
        `She takes a breath. It's the first thing she's done that looks like it cost her.`,
        `@isolde: "My maid. Annet Wale. Twenty years old. Her mother is a fuller's widow on the Tanners' Bottom; Annet sends her half her wages. Eight days ago she went home on her half-day, and she did not come back."`,
        `@isolde: "I went to the Marshal. He was very kind. He said girls from the Tanners' Bottom run off with soldiers. He said it *kindly*." Her hand flattens on the ledger. "Annet does not run off with soldiers. Annet reads to me when my eyes are tired. She has a laugh like a goose. She wears a blue ribbon that I gave her because it was the only present I could afford that my father's creditors wouldn't notice."`,
        `@isolde: "Find her. Off the books. Whatever you learn comes to me, and only me. Not my father. Not the Marshal. Not the Lamp."`
      ],
      fx: { quest: { id: 'e2_annet', title: 'The Missing Maid', state: 'active', note: 'Lady Isolde\'s maid, Annet Wale, twenty, vanished eight days ago on her half-day home to the Tanners\' Bottom. A blue ribbon. Off the books.' } },
      choices: [
        { t: `"Why me?"`, go: 'isolde_whyme' },
        { t: `"Whose man do you think I am, my lady?"`, if: "f.e2_hask_job==='took'", go: 'isolde_whose', once: true },
        { t: `"Name a price."`, go: 'isolde_price' }
      ]
    },
    isolde_whyme: {
      text: [
        `@isolde: "Because you have nothing to lose, and nobody to sell me to." She says it without cruelty, the way she'd read out a figure. "You came up that road with a dead man's wagon and a face like the end of a war. You have no lord, no house, no wife, no debts I could find, and one enemy in this castle who is also mine."`,
        `@isolde: "And because when you looked up at me on the wall, you didn't look at me like a prize or a problem. You looked at me like a sentry. Like you were wondering whether I'd seen the road."`,
        `@ansel: "Had you?"`,
        `@isolde: "I always see the road, Master Dray. It's the only thing in Harrowgate I'm allowed to watch."`
      ],
      fx: { set: { e2_isolde_whyme: 1 } },
      next: 'isolde_annet_more'
    },
    isolde_whose: {
      text: [
        `@isolde: "You're on the Marshal's payroll since this morning. Two silver a day and found." A pause, exactly long enough. "I keep the books, Master Dray. Your first two silver came out of my father's purse at noon."`,
        `It lands like a slap. She lets it.`,
        `@isolde: "I don't think you're his man. I think you're a man who's decided to stand very close to a fire to see what's burning. That's either very brave or very stupid, and I need someone who's one or the other."`
      ],
      fx: { set: { e2_isolde_knew_job: 1 } },
      choices: [
        { t: `"Brave. Stupid. I've never been able to tell them apart either."`, go: 'isolde_annet_more' },
        { t: `"I'm standing close to him so I can kill him when it's time."`, go: 'isolde_kill' },
        { t: `"I'm nobody's man, my lady. Including yours."`, go: 'isolde_annet_more' }
      ]
    },
    isolde_kill: {
      text: [
        `She doesn't startle. She doesn't call for a guard. She looks at you across the candle for a long moment with those grey eyes, and you realise that she has thought about it too. Many times. In detail. With figures.`,
        `@isolde: "Not yet," she says at last. "Not while my father needs his sword. Not while the Prince's letters come to his tower and not to mine. When it's time, Master Dray, I'll be the one to tell you."`,
        `It's the most dangerous thing anyone has said to you in Harrowgate. She says it like a woman reading out the price of candles.`
      ],
      fx: { set: { e2_isolde_kill: 1 } },
      next: 'isolde_annet_more'
    },
    isolde_annet_more: {
      choices: [
        { t: `"Why me?"`, if: '!f.e2_isolde_whyme', go: 'isolde_whyme' },
        { t: `"Name a price."`, go: 'isolde_price' }
      ]
    },
    isolde_price: {
      text: [
        `@isolde: "Thirty silver now. A hundred when she's found." A beat. "Alive or not."`,
        `She says *or not* without her voice changing at all, and her hand goes to the ledger and grips the edge of it, and doesn't let go.`
      ],
      choices: [
        { t: `Take the thirty.`, go: 'isolde_close', fx: { silver: 30, set: { e2_isolde_paid: 1 } } },
        { t: `"Keep it. Your father needs it more than I do. Pay me when I bring her back."`, go: 'isolde_close', fx: { set: { e2_isolde_nopay: 1 } } },
        { t: `"Fifty now. A hundred costs you nothing if I'm dead in a ditch."`, check: { stat: 'presence', dc: 13, pass: 'isolde_haggle_ok', fail: 'isolde_haggle_no' } }
      ]
    },
    isolde_haggle_ok: {
      text: [
        `She almost laughs. She very nearly does.`,
        `@isolde: "That is *exactly* the argument I'd have made." She counts out fifty, coin by coin, writing each one down. "There. You're in the books now, Master Dray. Under 'candles'."`
      ],
      fx: { silver: 50, set: { e2_isolde_paid: 1 } },
      next: 'isolde_close'
    },
    isolde_haggle_no: {
      text: [
        `@isolde: "Thirty. I've done the sums on you. I'm not sentimental about my own money; I can't afford to be." But she pushes the purse across with two fingers, and it's heavier than thirty, and when you look up she's already writing something else.`
      ],
      fx: { silver: 35, set: { e2_isolde_paid: 1 } },
      next: 'isolde_close'
    },
    isolde_close: {
      text: [
        { if: 'f.e2_isolde_nopay', t: `She looks at you over the purse she was about to push across, and very slowly draws it back. Something in her face rearranges itself. "No one," she says, "has ever refused my money for my father's sake. They usually refuse my father for my money's sake."` },
        `@isolde: "Start with her mother. Jenet Wale, the fuller's yard by the third lime-pit. She'll talk to you if you don't wear that sword like you mean it."`,
        `She's already turning back to the ledgers. Then she stops, with her back to you.`,
        `@isolde: "Master Dray. If you find her and it's bad. Tell me anyway. Everyone in this castle tells me the version they think I can carry. I can carry a great deal more than they think."`
      ],
      choices: [
        { t: `"I'll tell you the truth, my lady. Whatever it is."`, go: 'hen_night1', fx: { set: { e2_promised_truth: 1 } } },
        { t: `"I'll tell you what I find."`, go: 'hen_night1' },
        { t: `"Nobody can carry everything."`, go: 'isolde_carry' }
      ]
    },
    isolde_carry: {
      text: [
        `She turns around.`,
        `@isolde: "No," she agrees. "But somebody has to keep the books."`,
        `She holds your eye a moment longer than she needs to. Then the candle gutters, and she bends to trim it, and the moment goes wherever those moments go.`
      ],
      next: 'hen_night1'
    },

    /* ======================= THE GUTTED HEN: BROTHER PELL ======================= */
    hen_night1: {
      loc: 'The Gutted Hen — the common room, night',
      text: [
        `The Hen at night is a different animal: full, loud, steaming, forty people and a fiddler who knows three tunes. Tanners with stained hands, drovers in from the Kingsroad, a pair of Lamplighters in grey drinking small beer in the corner and pretending not to listen.`,
        `In the middle of it, standing on a bench with a cup in one hand and a tattered prayer-book in the other, is a fat, bald, red-faced man of about fifty-five in the remains of a Lamplighter's grey, with the star unpicked from the breast so that only the needle-holes show.`,
        `@pell: "—and I say unto you, as it is written in the Book of Embers, *the smoke goeth up*. Up, brothers! To whom? Why must every one of us go on the fire? What can a Saint in eternal light want with our *smoke*?"`,
        `@mags: "Pell," says Mags from behind the bar, in the voice of a woman who has said it a thousand times. "Get down off my bench."`,
        `Three drovers by the fire are good Lamp men, and drunk. The biggest stands up. He has a neck like a bull and a face like a bull's opinion of you.`,
        `@narrator: "That's blasphemy, that is. My mam went up off the pyre at harvest. You saying my mam's smoke is *for* somebody?"`,
        `The drover pulls him off the bench by the front of his robe. The prayer-book goes into the fire. Pell doesn't raise a hand to the drover. He reaches into the flames after the book with it instead.`,
        `Mags has put down her cloth. Her eyes go to the window. It is, as she said, a long way down to the tannery pits.`
      ],
      fx: { know: { cast: ['pell'] } },
      choices: [
        { t: `Get between them. "Sit down. He's a drunk old man and you're making a fool of your mam."`, check: { stat: 'might', dc: 13, intimidate: true, pass: 'hen_brawl_scare', fail: 'hen_brawl_fight' } },
        { t: `Pull the book out of the fire first. Then deal with the drover.`, go: 'hen_brawl_book' },
        { t: `Stay out of it. Mags said no fighting in her common room.`, go: 'hen_brawl_stay' }
      ]
    },
    hen_brawl_scare: {
      text: [
        `You stand up. You don't hurry. You let the drover see the scar, and the shoulders, and the sergeant's knot on the scabbard.`,
        `He looks at you. He looks at his two friends, who are suddenly very interested in their beer. He lets go of Pell's robe.`,
        `@narrator: "...Didn't mean nothing by it."`,
        `@ansel: "No. Neither did he."`,
        `The drover sits down. Mags picks her cloth back up and gives you a look across the room that is equal parts thanks and warning, and wholly approving.`
      ],
      fx: { rep: { town: 1 }, xp: 20 },
      next: 'hen_book'
    },
    hen_brawl_book: {
      text: [
        `You put your gloved hand into the fire and pull the prayer-book out by its spine. The glove smokes and the heat comes through it like teeth. You'll have blisters across the knuckles tomorrow. You've had worse for less.`,
        `By the time you turn around, the drover has hit Pell once, and is drawing back to do it again, and his two friends are on their feet.`,
        `@narrator: "Oh, you want some as well, do you?"`
      ],
      fx: { set: { e2_saved_book: 1 }, bond: { pell: 1 }, quiet: true },
      next: 'hen_brawl_fight'
    },
    hen_brawl_stay: {
      text: [
        `You stay in your seat. The drover hits Pell once, a short ugly punch that splits his lip, and draws back to do it again.`,
        `Mags comes over the bar.`,
        `She doesn't come round it. She comes *over* it, one hand on the wood, skirts and all, like a horse taking a hedge. She takes the drover by the collar and the belt, and you will tell this story for the rest of your life and no one will believe you: she puts him through the window.`,
        `Glass, shutter, drover. A long silence. A distant, wet *thump* from the direction of the tannery pits.`,
        `@mags: "Anyone else?"`,
        `His two friends would like to fight somebody. It isn't going to be Mags. They look around for someone smaller, and their eyes land on you, the stranger who sat and watched.`
      ],
      fx: { set: { e2_mags_window: 1 } },
      next: 'hen_brawl_fight'
    },
    hen_brawl_fight: {
      fight: { foes: ['bandit', 'bandit'], title: 'The Common Room', win: 'hen_brawl_won', noWound: true,
        intro: 'Drunk drovers with fists, stools and a broken bottle. Mags is watching. So is the window.' }
    },
    hen_brawl_won: {
      text: [
        `It's a tavern fight, which means it's short and stupid and somebody's tooth ends up in the stew. When it's done, one drover is asleep under a table and the other is holding his nose together with both hands.`,
        { if: '!f.e2_mags_window', t: `Mags walks over, takes the one with the broken nose by the collar and the belt, and, without any particular hurry, puts him through the window. Glass, shutter, drover. A long silence. A wet *thump* from the direction of the tannery pits.` },
        `@mags: "That's the fifth window this year," she says to the room. "Everybody's paying for it." Then, to you, lower: "You did that nicely. Don't do it again."`,
        `The fiddler starts up again. Life in the Hen resumes, as it always does, over the bodies.`
      ],
      fx: { rep: { town: 1 } },
      next: 'hen_book'
    },
    hen_book: {
      text: [
        `Brother Pell is sitting on the floor with his back against the bar, holding his split lip, looking at his burnt hand as if it belongs to a stranger.`,
        { if: 'f.e2_saved_book', t: `You hand him the prayer-book. The cover is charred and the spine is cracked, but the pages are whole. He holds it in both hands and his eyes fill with tears, and he is drunk enough not to be ashamed of it.` },
        { if: '!f.e2_saved_book', t: `The prayer-book is ashes. He looks at the grate. "That was my mother's," he says, to nobody. "She couldn't read it either."` },
        `@pell: "Pellam Orme. Brother Pell, as was. Defrocked, debauched, and, as of this evening, deeply in your debt." He tries to get up and fails. "Would you buy a defrocked man a drink? I'd buy you one, but the Lamp took my stipend and the dice took everything else."`
      ],
      choices: [
        { t: `Buy him a drink. Buy two.`, go: 'pell_hub', cost: 2, fx: { set: { e2_pell_drink: 1 } } },
        { t: `"Buy you soup. You've had enough."`, go: 'pell_hub', cost: 1, fx: { set: { e2_pell_soup: 1 } } },
        { t: `"Tell me what you were saying about smoke."`, go: 'pell_hub' }
      ]
    },
    pell_hub: {
      loc: 'The Gutted Hen — a corner table',
      text: [
        { if: 'f.e2_pell_soup', t: `He looks at the soup with deep sorrow and then eats every drop, and then the bread, and then the bread you didn't finish. You realise, watching him, that he hasn't eaten in two days.` },
        { if: 'f.e2_pell_drink', t: `He drinks the first one in a long swallow, like a man putting out a fire, and the second one slowly, like a man who knows there won't be a third.` },
        `@pell: "Ask, then. Everybody wants something from a defrocked priest. Absolution. Gossip. A curse on a neighbour's goat. I'm cheap, and I'm bad at all of it."`
      ],
      choices: [
        { t: `"Why did they throw you out?"`, go: 'pell_expelled', once: true },
        { t: `"The Lamp burns its dead. The fen buries theirs. Why does it matter so much?"`, go: 'pell_kindling', once: true },
        { t: `Put the stub of tithe-chalk from Ashby on the table.`, if: "has('tithe_chalk')", go: 'pell_chalk', once: true },
        { t: `"A maid called Annet Wale went missing from the Tanners' Bottom. Know anything?"`, go: 'pell_annet', if: '!f.e2_pell_annet' }
      ]
    },
    pell_expelled: {
      text: [
        `@pell: "I asked a question." He turns his cup. "Twenty-two years a Lamplighter of the Lanternhold. I kept the library. I taught the orphans their letters. I was not a good priest, but I was a happy one, and I was devoted to the Abbess, truly. Everyone is."`,
        `@pell: "Then one winter I went down to the undercroft to fetch lamp oil, and I took the wrong stair. There's a door down there. Old iron. A seven-pointed star on it. And it was warm, the way a door is warm when there's a great fire on the other side. And I could hear—"`,
        `He stops. He drinks.`,
        `@pell: "I asked the Abbess what was in the crypt. She smiled at me and said, *Prayer, Pellam.* By noon I was outside the gate with my star unpicked and my stipend stopped. Twenty-two years." He touches the needle-holes on his breast. "You can still see where it was. Like a scar you didn't get in a fight."`,
        `@pell: "And here's a thing. Do you know how many beds there are in the white ward? Forty. I counted. And how many the Lanternhold has *taken in* these two years? Nobody knows. More than forty, my friend. A great many more than forty." He smiles, horribly. "They go *up*, the Abbess would say. To the Saints."`
      ],
      fx: { set: { e2_pell_crypt: 1, e2_pell_takesin: 1 } },
      next: 'pell_hub'
    },
    pell_kindling: {
      text: [
        `Pell brightens: a scholar with a question, even drunk, even bleeding.`,
        `@pell: "Ah! *The Kindling.* The pyre, so the smoke may carry the soul up to sing among the Saints in eternal light. And earth-burial, the oldest heresy in Aldermere, because the buried soul goes *down*, into the dark, where the Lamp cannot reach it. Burned for it. Women burned for it in my lifetime, in this town."`,
        `He leans in. His breath could strip paint.`,
        `@pell: "But here's the thing the novices are never taught. Why would the Lamp *care*? If the buried soul is lost in the dark, that's the soul's loss, surely? Why burn the mother for it? You don't burn a man for spilling milk. You burn a man for *stealing*."`,
        `@pell: "Somebody up there is very particular, my friend, that every single one of us goes on the fire. As if we were owed."`
      ],
      fx: { know: { codex: ['kindling', 'earthburial'] } },
      next: 'pell_starless'
    },
    pell_starless: {
      text: [
        `@pell: "There's a verse. They don't preach it. Book of Embers, the very end, the part the Hierarchs call 'apocalyptic poetry' so nobody has to read it." He closes his eyes and recites, and his voice changes, and for a moment you can hear the priest he was.`,
        `@pell: "*And in the last days there shall walk one whom Heaven cannot number; and the Lamp shall gutter at his passing; and the stars shall look for him, and not find him, and be afraid.*"`,
        `He opens his eyes.`,
        `@pell: "The Starless One. Most Lamplighters think it's a metaphor. I used to think it was a metaphor. These days I think about it more than is healthy."`,
        `Under your glove, your palm is very warm. You put your hand flat on the table and keep it there.`
      ],
      fx: { know: { codex: ['starless'] }, set: { e2_heard_starless: 1 } },
      next: 'pell_hub'
    },
    pell_chalk: {
      text: [
        `He looks at the chalk. He doesn't touch it. All the drink goes out of his face at once, like water out of a cracked jug.`,
        `@pell: "Where did you get that?"`,
        `@ansel: "Ashby. On a windowsill. Every door in the village had a tithe-star on it. On the inside."`,
        `@pell: "That's Lanternhold chalk. That's the Abbess's own seal stamped in it, look, the little lamp. It's not for tithe-doors; any Lamplighter can chalk a tithe-door. This is the Almoners' chalk. The ones who go out with the bread-carts." He pushes it back toward you with one finger, as if it might bite. "Put it away, please. Put it away."`
      ],
      fx: { set: { e2_pell_chalk: 1 } },
      next: 'pell_hub'
    },
    pell_annet: {
      text: [
        `@pell: "Annet." He frowns, rummaging through the drink. "Annet. Goose-laugh. Reads well, for a fuller's girl; I taught her her letters, at the orphans' school, before— before. Saints. Annet."`,
        `@pell: "If she's gone from the Bottom, she's not the first. There's been chalk on doors down there all autumn. People don't talk about it, because the chalk's the Lamp's, and the Lamp is kind, and if you complain about a kindness people look at you like you've grown a second head."`,
        `He grips your wrist suddenly, hard, with his burnt hand.`,
        `@pell: "You're going to look for her. I can see it on you. Let me come. I know the town. I know the Lanternhold. I know the old Lamplighters' stair under Saint Ember's that goes down into the cisterns, and I know where every door in the undercroft goes, except one."`
      ],
      fx: { set: { e2_pell_annet: 1 } },
      choices: [
        { t: `"You're a drunk and a coward, Brother. You'll get us both killed." (But you'll take him.)`, go: 'pell_joins', fx: { set: { e2_pell_hard: 1 } } },
        { t: `"Be at the Hen at first light. Sober."`, go: 'pell_joins' },
        { t: `"Why do you want to come?"`, go: 'pell_why' }
      ]
    },
    pell_why: {
      text: [
        `He lets go of your wrist. He looks at the burnt hand, then at the needle-holes on his breast.`,
        `@pell: "Because I asked a question once, and when they threw me out for it, I stopped asking. I went to the Hen instead. Two years, I've been going to the Hen instead." His voice cracks, very slightly. "I'd like to be the sort of man who asks it again. I'm not. But I'd like to be. I thought perhaps if I stood next to you, it might rub off."`
      ],
      fx: { set: { e2_pell_why: 1 } },
      next: 'pell_joins'
    },
    pell_joins: {
      text: [
        { if: 'f.e2_pell_hard', t: `@pell: "Oh, almost certainly," he says, delighted. "But I'll be a very *learned* corpse."` },
        { if: 'f.e2_saved_book', t: `He falls asleep shortly after, at the table, with his head on his arms and the scorched prayer-book under his cheek. Mags throws a blanket over him without breaking stride, the way you'd cover a birdcage.`, else: `He falls asleep shortly after, at the table, with his head on his arms and a fist closed round a pinch of the book's ash. Mags throws a blanket over him without breaking stride, the way you'd cover a birdcage.` },
        `@mags: "He'll be here in the morning. He's always here in the morning. It's the afternoons he goes missing."`,
        `You go up to bed. You don't drink. You lie awake a long time listening to the town settle, and once, very late, you think you hear something underneath it: a long low scraping, like a great many small claws on stone, a long way down.`
      ],
      fx: { heal: 'full', rest: true },
      next: 'day2'
    },

    /* ======================= ACT THREE: THE TOWN ======================= */
    day2: {
      loc: 'The Gutted Hen — first light',
      card: { kind: 'act', title: 'Part Two', sub: 'The Tanners\' Bottom' },
      text: [
        `Pell is waiting at the foot of the stairs with a cup of water in a hand that shakes worse than yours, and a cudgel he has borrowed from somewhere, and an expression of terrible resolve.`,
        `@pell: "Sober," he announces. "Technically. It's a very fine distinction, and I'm standing right on the edge of it."`,
        `And in the yard, holding Ox's halter and a pitchfork, wearing what is clearly his father's old leather jerkin with the sleeves rolled up four times, is Hob Fenner.`,
        `@hob: "Sergeant. I heard you're looking for Annet Wale. I know Annet. Everybody knows Annet. I know the Bottom, every yard and alley, and I can carry things, and I'm not afraid of rats, and I'm not afraid of *anything*." He swallows. "I want to come."`
      ],
      fx: { party: { add: ['pell'] }, set: { e2_pell_joined: 1 } },
      choices: [
        { t: `"All right, Hob. You carry, you watch, you do what I say, when I say it." Take him on.`, go: 'hob_hired', fx: { set: { e2_hob_hired: 1 }, party: { add: ['hob'] } } },
        { t: `"Go home, Hob. This isn't a game."`, go: 'hob_sent' },
        { t: `"What do you know that I don't?"`, go: 'hob_know' }
      ]
    },
    hob_know: {
      text: [
        `@hob: "Annet's mam lives by the third lime-pit. Annet's little brother Pip says the night she went, there were lights in the lane and singing. Nobody believes him because he's six. I believe him." He hesitates. "And the Marshal's men don't come down the Bottom after dark any more. They used to. Now they don't. Like they've been told not to."`,
        `That's more than anyone else has told you. From a stable boy with a pitchfork.`
      ],
      fx: { set: { e2_hob_lights: 1 } },
      choices: [
        { t: `"All right. You're hired. Carry, watch, do what I say."`, go: 'hob_hired', fx: { set: { e2_hob_hired: 1 }, party: { add: ['hob'] } } },
        { t: `"Thank you, Hob. Now go home."`, go: 'hob_sent' }
      ]
    },
    hob_hired: {
      text: [
        `His face does something you haven't seen a face do in years. It lights. It just lights up, like someone opened a shutter.`,
        `@hob: "Yes, Sergeant. *Yes*, Sergeant."`,
        `@pell: "Saints preserve us," says Pell, not unkindly. "A drunk, a child and a dead man. The Lamp will tremble."`,
        `> You know exactly what you've done. You've done it four hundred and five times. You put a boy in a line.`
      ],
      next: 'town_r'
    },
    hob_sent: {
      text: [
        `His face falls so far you almost hear it land.`,
        `@hob: "Yes, Sergeant."`,
        `He goes back into the stable. He doesn't argue. That's worse, somehow, than if he had.`,
        `@pell: "Very wise," says Pell. Then, after a moment: "He'll follow us, you know. Boys like that always follow."`
      ],
      fx: { set: { e2_hob_sent: 1 } },
      next: 'town_r'
    },

    town_r: {
      route: [
        { if: "(f.e2_leads||0)>=2 && !f.e2_tam_back", go: 'tam_back1' },
        { go: 'town_hub' }
      ]
    },
    town_hub: {
      loc: 'Harrowgate — the town',
      text: [
        { if: '!f.e2_leads', t: `Harrowgate in daylight: the Keep at the top, the Lanternhold below it, the Market Stair tumbling down from both, and at the bottom of everything, in the lime-smoke by the river, the Tanners' Bottom. Somewhere in all of it is a girl with a blue ribbon.` },
        { if: 'f.e2_leads', t: `The bells of the Lanternhold mark the hour. The day is getting on. Somewhere in this town is a girl with a blue ribbon, and every hour she is somewhere else.` }
      ],
      choices: [
        { t: `The Tanners' Bottom. Annet's mother.`, if: '!f.e2_tb_done', go: 'tb1' },
        { t: `The Market Stair. Gossip, and whoever's selling it.`, if: '!f.e2_ms_done', go: 'ms1' },
        { t: `The Lanternhold. Hask said she likes strays.`, if: '!f.e2_lh_done', go: 'lh1' },
        { t: `The Lantern Lane grate. Go down into the cisterns.`, if: 'f.e2_ribbon && f.e2_tam_back', go: 'cis_gate' }
      ]
    },

    /* ---------- The Tanners' Bottom ---------- */
    tb1: {
      loc: 'The Tanners\' Bottom — the lime-pits',
      text: [
        `The smell hits you at the top of the steps and gets into your teeth. Lime and dog-dung and rotting hide, the stink of the trade: your father's smell, your childhood's smell. Men stand thigh-deep in the pits treading skins, their legs bleached white to the knee. A boy no older than you were is scraping a hide on a beam with a two-handled knife, and his forearms are stained the colour of strong tea.`,
        `You were that boy. You ran. Most of them don't.`,
        { if: 'f.e2_hob_hired', t: `Hob walks in front, nodding to people by name. They nod back. They look at you over his head, and then at your sword, and then away.` },
        `The fuller's yard by the third pit is small and very clean. A woman of forty with arms like knotted rope is beating cloth in a trough as though it owes her money. A little boy sits on the step with a wooden horse.`
      ],
      choices: [
        { t: `"Mistress Wale? Lady Isolde sent me."`, go: 'tb_jenet' },
        { t: `Crouch down to the boy first. "That's a good horse. What's his name?"`, go: 'tb_pip' }
      ]
    },
    tb_pip: {
      text: [
        `@narrator: "Bishop," says the boy. "He bites."`,
        `@ansel: "So does mine."`,
        `The boy considers this, and you, and decides you're acceptable. He holds the horse up so you can see where someone carved its teeth.`,
        `@narrator: "Annet's gone," he says. "The star-men came and sang and she went out to see and she didn't come back. Mam says I dreamed it. I didn't dream it. They had lights."`,
        `His mother has stopped beating cloth.`
      ],
      fx: { set: { e2_pip: 1 } },
      next: 'tb_jenet'
    },
    tb_jenet: {
      text: [
        `@narrator: "You're from her ladyship." Jenet Wale wipes her hands on her apron, slowly, one finger at a time. "She sent a man. Well. That's more than the Marshal did."`,
        `She takes you inside. One room. A bed, a hearth, a table with two bowls. And on the back of the door, on the inside, at the height of a man's chest, chalked in white: a seven-pointed star in a circle.`,
        `@narrator: "It was there in the morning," says Jenet. "After. I never saw who drew it. I scrubbed it with lye and it came back the next night. I scrubbed it again and it came back again." Her voice doesn't shake at all. "So I stopped scrubbing. I thought, if it's the Lamp's, it's a blessing, isn't it? It's a *blessing*."`,
        { if: 'f.e1_chalk', t: `> Ashby. Every door in Ashby. You put your hand in your pocket and close it around the stub of chalk, and it is cold.` }
      ],
      fx: { set: { e2_saw_star: 1 } },
      choices: [
        { t: `"Are there others? Other doors?"`, go: 'tb_doors' },
        { t: `"Tell me about the night she went."`, go: 'tb_night' },
        { t: `"It's not a blessing, Mistress Wale."`, go: 'tb_blessing' }
      ]
    },
    tb_blessing: {
      text: [
        `She looks at you.`,
        `@narrator: "No," she says at last. "No, I didn't think it was." And then, finally, very quietly, her face goes, all of it, all at once, and she sits down on the bed and puts her red hands over it, and you stand in a fuller's one room with a sword on your hip that is no use to anyone.`,
        { if: 'f.e2_hob_hired', t: `Hob sits beside her and puts his arm round her shoulders like it's the most natural thing in the world. Maybe, for him, it is.` },
        { if: '!f.e2_hob_hired', t: `Pell sits beside her, and takes one of her hands, and says something in the old liturgy, low, and for once his voice doesn't shake.` }
      ],
      fx: { rep: { town: 1 } },
      next: 'tb_doors'
    },
    tb_night: {
      text: [
        `@narrator: "Her half-day. She brought a basket from the castle kitchens, bless her ladyship, a whole ham-bone. We ate. Pip was asleep. Late, there was a sound in the lane. Like singing. Not drunk singing. Church singing, but soft, like under your breath." Jenet's hands twist in her apron. "Annet said, *That's pretty*, and she went to the door to look. And I was tired, and I turned over, and I went back to sleep."`,
        `@narrator: "I went back to sleep."`
      ],
      next: 'tb_doors'
    },
    tb_doors: {
      text: [
        `@narrator: "Others." Jenet laughs, short, without any humour in it. "Go and look. The cooper's lad, Wilm. Old Tansy who sold eels. The Hobday twins. Dickon Pye, last night, though everyone says that was the grate." She looks at the star. "You'll find the mark on the inside of every door, if they'll let you in. They mostly won't. Folk don't like to say the Lamp's been to their house. It sounds like boasting, or it sounds like heresy, and either way the neighbours talk."`,
        `@narrator: "Annet's ribbon. If you find her. She never took it off. She'd want it back."`
      ],
      choices: [
        { t: `Go door to door down the lane. Look for the stars.`, go: 'tb_lane' }
      ]
    },
    tb_lane: {
      loc: 'The Tanners\' Bottom — Lantern Lane',
      text: [
        `It takes an hour. Most doors don't open. The ones that do open a crack, and close again when you say *star*. But you see enough. A cooper's shop, a chalk star inside the door. An eel-seller's shack, the same. A house with two of everything, two cots, two stools, two little pairs of clogs by the hearth, and a star.`,
        `Lantern Lane runs down to the river, and halfway down it, where the old grate was, there's a hole: ragged, black, breathing out cold air that smells of wet stone and something sweeter underneath. Somebody has put a hurdle across it and a warning daubed in tar: DANGER. KEEP OFF. BY ORDER OF THE MARSHAL.`,
        `Caught on a snag of rusted iron at the lip of the hole, where the grate's old bars still jut, is a blue ribbon. A week of rain has darkened it. It has been hanging there since before the grate gave way, in a lane that runs down to the river and the old chapel, waiting for somebody to look down.`
      ],
      choices: [
        { t: `Lie flat and reach for it.`, check: { stat: 'finesse', dc: 12, pass: 'tb_ribbon', fail: 'tb_ribbon_slip' } },
        { t: `Hook it out with Widow's point. Slowly.`, go: 'tb_ribbon' }
      ]
    },
    tb_ribbon_slip: {
      text: [
        `The lip crumbles under your chest. For one sick moment you're hanging over the dark by one elbow and the cold air is pouring up past your face and you can hear water down there, and something moving in it, a lot of something.`,
        { if: 'f.e2_hob_hired', t: `Hob has your belt in both fists before you've finished slipping. He hauls. He's stronger than he looks. You come up out of the hole with the ribbon in your fingers and lime-mud down your front, and Hob is white as paper and grinning.` },
        { if: '!f.e2_hob_hired', t: `Pell has your belt in both fists, red-faced and wheezing, hauling like a man pulling a cow out of a ditch. You come up out of the hole with the ribbon in your fingers and lime-mud down your front.` }
      ],
      fx: { hp: -3 },
      next: 'tb_ribbon'
    },
    tb_ribbon: {
      text: [
        `Blue silk, good quality, the kind of blue that costs. Frayed at one end where it tore. Still faintly sweet with somebody's hair-oil.`,
        `> A present a lady could afford that her father's creditors wouldn't notice.`,
        `You put it inside your coat, against your shirt, next to the roll.`
      ],
      fx: { give: { annet_ribbon: 1 }, set: { e2_ribbon: 1, e2_tb_done: 1 }, add: { e2_leads: 1 }, xp: 25, quest: { id: 'e2_annet', note: 'Tithe-chalk stars inside the doors of the missing on the Tanners\' Bottom. Annet\'s ribbon, caught a week ago on the bars of the Lantern Lane grate. Whoever took her came this way, toward the river and the old chapel.' } },
      next: 'tb_bullies'
    },
    tb_bullies: {
      text: [
        `When you straighten up there are four men at the top of the lane. Tanners' journeymen by their legs, bleached to the knee, and they've brought the tools of the trade: fleshing knives, a hide-hook, a mallet.`,
        `@narrator: "You've been knocking on a lot of doors, friend," says the biggest. "Folk on the Bottom don't like strangers asking about the Lamp's business. Upsets people."`,
        `@narrator: "So here's what. You go back up the hill, and we don't put you down the hole after the ribbon."`,
        `His purse is new. His boots are new. Nobody on the Bottom has new boots.`
      ],
      choices: [
        { t: `Draw Widow. "Try it."`, go: 'tb_bullies_fight' },
        { t: `"I'm a tanner's son. Lowmarch. I know what a fleshing knife's for. It's not for this."`, check: { stat: 'presence', dc: 12, pass: 'tb_bullies_tanner', fail: 'tb_bullies_fight' } }
      ]
    },
    tb_bullies_tanner: {
      text: [
        `Something changes in the big one's face. He looks at your hands, the old scars across the knuckles where the beam-knife slips, the ones every tanner's boy has.`,
        `@narrator: "Lowmarch," he says. "My da was Lowmarch." He looks at the knife in his own hand as if he's surprised to find it there.`,
        `@narrator: "Man came with silver. New silver, Lanternhold mint, the little lamp on it. Said scare off anybody asking about the doors. Didn't say who he was." He spits. "Didn't have to. Clean hands. You don't get hands that clean anywhere on the Bottom."`,
        `They go. The big one, passing you, says without looking at you: "Third pit's deep. Mind yourself."`
      ],
      fx: { set: { e2_lamp_silver: 1 }, rep: { town: 1 }, xp: 25 },
      next: 'town_r'
    },
    tb_bullies_fight: {
      fight: { foes: ['bandit', 'bandit', 'deserter'], title: 'Lantern Lane', win: 'tb_bullies_won',
        intro: 'Journeymen with fleshing knives and a mallet. They fight like men who have been paid, not like men who mean it.' }
    },
    tb_bullies_won: {
      text: [
        `Two of them run. One lies in the lane holding his knee and swearing. You crouch beside him and take the purse off his belt and tip it into your palm.`,
        `New silver. Every coin stamped with a little lamp: the Lanternhold mint, that strikes its own pennies from the tithe.`,
        `@pell: "Oh," says Pell, very quietly, behind you. "Oh, no."`
      ],
      fx: { set: { e2_lamp_silver: 1 }, silver: 12 },
      next: 'town_r'
    },

    /* ---------- Tamsin returns ---------- */
    tam_back1: {
      loc: 'The Market Stair — noon',
      text: [
        `You hear her before you see her. Somebody is singing the eel and the heron, the ninth verse, the one where the heron's mother comes to dinner, very loudly and quite badly, coming up the Market Stair from the river gate.`,
        `Tamsin Vell is mud to the knees. Black fen mud, drying grey on top. She has a sack over one shoulder, her bow over the other, a duck's feather in her hair that she seems unaware of, and the expression of a cat that has been somewhere it shouldn't and enjoyed it.`,
        `She sees you. She stops singing. The chipped tooth shows.`,
        `@tamsin: "Sergeant. You didn't die."`,
        `@ansel: "You told me not to."`,
        `@tamsin: "I did, didn't I." She looks at Pell, and at the bruises on your knuckles.`,
        { if: 'f.e2_hob_hired', t: `She looks at Hob, who is looking at her with his mouth open, and at his pitchfork. "Three days. Three days I leave you alone in a strange town, and you've got a *priest* and a *farmhand*."`, else: `@tamsin: "Three days. Three days I leave you alone in a strange town, and you've got a *priest*."` }
      ],
      fx: { party: { add: ['tamsin'] }, set: { e2_tam_back: 1 } },
      choices: [
        { t: `"How was your gran?"`, go: 'tam_back_gran' },
        { t: `"What's the gossip in the fen?"`, go: 'tam_back_gossip' },
        { t: `"I missed you." (Say it plainly. See what she does.)`, go: 'tam_back_missed' }
      ]
    },
    tam_back_gran: {
      text: [
        `@tamsin: "Mean. Old. Alive. Sends her regards, which in Gran is a curse with the sharp bits filed off." She digs in the sack and comes up with a twist of greased paper. "She sent you this. Eel. Smoked. Don't ask what she smoked it over."`,
        `@ansel: "She sent *me* something? She's never met me."`,
        `Tamsin's grin doesn't flicker. Her eyes do, just slightly, the way a candle does when a door opens somewhere in the house.`,
        `@tamsin: "I talk about you. Don't get excited. I talk about the weather too."`
      ],
      fx: { heal: 6, set: { e2_gran_eel: 1 } },
      next: 'tam_back_end'
    },
    tam_back_gossip: {
      text: [
        `@tamsin: "Lantern Men are bad this autumn. Three eel-men drowned off the Gallowmere weirs since harvest, following lights. Nobody follows lights in autumn; everybody knows not to." She spits, neatly, off the Stair. "And folk going up to Harrowgate for work and not coming back. Old Fen-Margery's two sons. A girl from Coot's Ferry. Went up the causeway in the spring and their mams have had no word."`,
        `@tamsin: "Fen-folk say the town eats people. Always have. Only this year they're saying it like they mean it."`
      ],
      fx: { set: { e2_fen_gossip: 1 } },
      next: 'tam_back_end'
    },
    tam_back_missed: {
      text: [
        `She opens her mouth to say something clever. Nothing comes out. For one whole breath, Tamsin Vell has nothing to say, and she looks at you with the fen-mud drying on her knees, and her face is entirely unguarded and very young.`,
        `Then she shoves you in the chest, hard, with one hand.`,
        `@tamsin: "Soft." But her ears have gone pink. "Mothers below. You *are* soft. Don't say things like that in the street, people'll think you've been hit on the head."`,
        { if: 'f.e1_saw_crow', t: `On the roof of the cordwainer's across the Stair, a big glossy crow is sitting, watching the two of you with its head on one side. It's probably nothing. There are a lot of crows in Harrowgate.` }
      ],
      fx: { bond: { tamsin: 1 }, set: { e2_tam_missed: 1 } },
      next: 'tam_back_end'
    },
    tam_back_end: {
      text: [
        `You tell her. Annet. The stars inside the doors. The ribbon at the grate. She listens with her head down, and when you get to the stars she goes very still, the way she went still in the square at Ashby.`,
        `@tamsin: "Inside the doors." Flat. "Again."`,
        `@tamsin: "Right. Well. I'm not letting you go down a hole full of rats with a priest and a stable boy. You'd be eaten by supper." She hitches the bow higher. "Where are we going?"`
      ],
      next: 'town_hub'
    },

    /* ---------- The Market Stair ---------- */
    ms1: {
      loc: 'The Market Stair',
      text: [
        `The Market Stair is three hundred steps of shops, stalls, shouting and spilled things, climbing from the river gate to the Lanternhold's front wall. Fish at the bottom, cloth in the middle, candles and relics at the top, closest to the Saints.`,
        { if: "f.e1_cloth==='deliver'", t: `Halfway up, PETTIBONE & DAUGHTERS has its shutters open and both daughters behind the counter in mourning grey. The elder sees you and comes out wiping her hands. "Sergeant. Father's man." She means it as a title.` },
        { if: "f.e1_cloth!=='deliver'", t: `Halfway up, the Pettibone shop has its shutters closed and a black ribbon on the door. On the step below it, Old Tibb, the crier, is reading the notice board aloud to a knot of people who can't, a penny a notice.` },
        { if: "f.e2_hask_job==='took'", t: `People notice the brass boar on your belt. Prices go up a little, and voices go down. A Marshal's man on the Stair is a man people are polite to, the way they're polite to weather.` }
      ],
      choices: [
        { t: `"Who's buying what, lately? Who's buying a lot?"`, go: 'ms_gossip' },
        { t: `Open Crake's ledger. Find the Lamplighter who owes him money.`, if: "f.e1_crake==='kept'", go: 'ms_crake' },
        { t: `Find Silas Wyck the apothecary. You'll want fire, if there are rats.`, go: 'ms_silas' }
      ]
    },
    ms_gossip: {
      text: [
        { if: "f.e1_cloth==='deliver'", t: `@narrator: "Who's buying?" Bess Pettibone snorts. "The Lanternhold. Same as always, only more. Forty ells of grey linen this month, the cheap stuff, the stuff you'd wrap a ham in. Father always said the Almoners order shrouds by the bolt, but forty ells, Sergeant. That's a lot of shrouds or a lot of hams."` },
        { if: "f.e1_cloth!=='deliver'", t: `@tibb: "Who's buying?" Old Tibb cackles. "The Lanternhold, friend, the Lanternhold. Grey linen by the bolt. Lamp oil by the cask. Honey by the barrel. Feeds half the town, bless her, and buries the other half." He catches himself. "*Burns.* I mean burns. Saints. You know what I mean."` },
        `@narrator: "And the oddest thing," the voice goes on, lower. "All that oil. They burn the dead, the Lamp does, every one; that's what the oil's for. But you'd think, with all the poor souls they take in and all the oil they buy, the pyre-yard behind the Lanternhold would be smoking day and night." A shrug. "It isn't. Not more than usual. Not hardly at all."`
      ],
      fx: { set: { e2_ms_linen: 1, e2_ms_done: 1 }, add: { e2_leads: 1 }, xp: 20, quest: { id: 'e2_annet', note: 'The Lanternhold buys grey linen by the bolt and lamp oil by the cask. Its pyre-yard hardly smokes.' } },
      next: 'town_r'
    },
    ms_crake: {
      text: [
        `You sit on the step and turn the pages of the moneylender's ledger until you find it. *Br. Aldo Cauley, Almoner, the Lanternhold. 30s. at a penny the shilling. Dice. Overdue.*`,
        `An Almoner. One of the ones with the bread-carts.`,
        `@pell: "Aldo." Pell reads it over your shoulder and his mouth twists. "Aldo Cauley. He took my place in the library. Lovely singing voice. Couldn't keep away from the dice to save his soul, and, well." He taps the page. "He'll be at the Lanternhold gate at noon with the bread. He'll be very frightened of that book."`
      ],
      fx: { set: { e2_cauley: 1, e2_ms_done: 1 }, add: { e2_leads: 1 }, xp: 20 },
      next: 'town_r'
    },
    ms_silas: {
      loc: 'Wyck\'s Apothecary — the Market Stair',
      text: [
        `Silas Wyck is a thin nervous man in a vinegar-smelling apron who weighs everything twice. His shelves are half empty.`,
        `@silas: "Firebombs, yes, lamp oil and saltpeter in a clay pot, very reliable, very— they're twenty-five, I'm afraid. The Lanternhold has been buying up all the oil. And the poppy. And the honey. I can barely keep a poultice in stock." He looks at you. "Rats, did you say? In the cisterns? I'd take two."`
      ],
      fx: { know: { cast: ['silas'] } },
      choices: [
        { t: `Buy two firebombs.`, cost: 40, go: 'town_r', fx: { give: { firebomb: 2 }, set: { e2_ms_done: 1 }, add: { e2_leads: 1 }, xp: 15 } },
        { t: `Buy a poultice and some spirits.`, cost: 15, go: 'town_r', fx: { give: { poultice: 1, spirits: 1 }, set: { e2_ms_done: 1 }, add: { e2_leads: 1 }, xp: 15 } },
        { t: `"Who at the Lanternhold buys the poppy?"`, go: 'ms_silas_poppy' }
      ]
    },
    ms_silas_poppy: {
      text: [
        `Silas's hands stop over his scales.`,
        `@silas: "The Abbess's own people. Brother Aldo signs for it. Enough poppy to put a regiment to sleep, every month, since the spring." He licks his lips. "For the dying, they say. To ease them. It's a hospital. It's a *hospital*, sir; they have a great many dying."`,
        `He gives you a poultice for nothing, and you understand that it's so you'll leave.`,
        `Out on the Stair, a Lanternhold cart goes by, pulled by two lay brothers in grey, piled with casks that slosh. Lamp oil. The crowd parts for it and people touch their hearts as it passes.`
      ],
      fx: { give: { poultice: 1 }, set: { e2_poppy: 1, e2_ms_done: 1 }, add: { e2_leads: 1 }, xp: 15 },
      next: 'town_r'
    },

    /* ---------- The Lanternhold ---------- */
    lh1: {
      loc: 'The Lanternhold — the gate court, noon',
      text: [
        `The Lanternhold is the most beautiful building in Harrowgate, and the only one with new paint. White walls, a gate court swept clean, and at the top of the lantern-tower, even at noon, a blue flame in a cage of glass. Two hundred people stand in the bread line with their hands out, silent, while young Lamplighters in grey go down it giving every one a loaf and touching every forehead.`,
        `Moving among them, slow, humming, is a plump old woman in a white wimple, with flour on her sleeves and a child on her hip. She sees you. She sets the child down and comes across the court with her hands out as if you were a son back from the wars.`,
        `@abbess: "You're the sergeant. The one who came in with Master Pettibone's wagon, Saints rest him." She smells of honey and lamp oil and bread. Her eyes are blue and kind and very, very tired. "Morwenna Sallow. Everyone calls me Mother, I'm afraid, and you'll have to as well, it's simpler."`,
        { if: "f.e1_ashby==='led'", t: `@abbess: "And you brought me the Ashby folk." She takes your gloved hand in both of hers. "Thirty-one souls. You walked them in. Do you know how rare that is, my son? Most men would have left them in the rain. Or worse." Her thumbs press, gently. "Thank you."` },
        { if: "f.e2_hask_job==='took'", t: `Her eyes find the brass boar on your belt, and her smile deepens, fond and amused. "Ah. You're one of Konrad's. He said he'd found an old friend. He was like a boy at a fair."` },
        `@abbess: "What can the Lanternhold do for you?"`
      ],
      choices: [
        { t: `"I'm looking for a girl. Annet Wale."`, go: 'lh_annet' },
        { t: `"Show me the white ward, Mother."`, go: 'lh_ward' },
        { t: `"Somebody's chalking the Lamp's star on the inside of doors on the Tanners' Bottom."`, go: 'lh_chalk' }
      ]
    },
    lh_annet: {
      text: [
        `@abbess: "Lady Isolde's Annet." No hesitation at all. Her face fills with sorrow, real sorrow, you would swear to it on the roll. "Her mother came to us. We've prayed for her every Evening Lamp. The girls in the kitchen loved her; she used to bring them ribbons-ends from the castle." She shakes her head. "So many go missing, my son. The river. The roads. Men. This is a hard town for girls."`,
        `@abbess: "If she's found, bring her to me. Whatever state she's in. Whatever's been done to her. We take everyone. That's what we're for."`
      ],
      next: 'lh_after'
    },
    lh_chalk: {
      text: [
        `For a heartbeat, nothing at all happens in her face. It's the most perfectly nothing you have ever seen, like still water.`,
        `@abbess: "Oh, the poor souls." Then, gently: "The Almoners chalk the doors of the households we've helped, so the brothers know where the bread's needed. On the outside, usually. Perhaps some of the newer ones are confused. I'll speak to them." She lays a hand on your arm. "Folk on the Bottom have had so little kindness, my son, they see a plot in every loaf."`,
        `It's a good answer. It's a very good answer. It is exactly as good as an answer someone has had ready for a while.`,
        { if: 'f.e1_chalk', t: `> You don't take out the stub from Ashby. Something tells you to keep that one in your pocket.` }
      ],
      fx: { set: { e2_asked_abbess_chalk: 1 } },
      next: 'lh_after'
    },
    lh_ward: {
      loc: 'The Lanternhold — the white ward',
      text: [
        `@abbess: "Of course. Come and see. People should see; they'd give more."`,
        `She takes you through a cloister of whitewashed arches into a long, high room full of light. Forty beds. White linen, white walls, clean straw, a candle at every head. In every bed, or sitting on the edge of it, an Emptied one: eyes open, breathing, gone. Orphans in grey go up and down the rows with bowls, spooning soup into mouths that open when the spoon touches them and close when it's taken away.`,
        `It is clean and warm and quiet, and it is the most frightening room you have ever stood in, including the one at Corran's Ford with no roof.`,
        { if: "f.e1_ashby==='led'", t: `Near the end of the ward, sitting on a bed with her feet not touching the floor, is the little girl from Ashby. Someone has washed her and brushed her hair. She is still holding the doll by one leg. As you pass, her head turns, slowly, and follows you, the way it did in the square. Not at your face. At your left hand.` },
        { if: "f.e1_ashby!=='led'", t: `None of them look at you. One old man is humming, very softly, the same four notes over and over, the way the Abbess hums.` },
        `@abbess: "We wash them. We feed them. We sing to them." Her voice is soft with love. "And when they go up, my son, they go up gently, in their sleep, and we give them to the Saints."`
      ],
      fx: { set: { e2_saw_ward: 1 }, rep: { lamp: 1 } },
      choices: [
        { t: `"Where do they go? The ones who aren't in these forty beds?"`, go: 'lh_ward_where' },
        { t: `Say nothing. Look at them. Count them.`, go: 'lh_ward_count' }
      ]
    },
    lh_ward_where: {
      text: [
        `@abbess: "Up," she says, simply, and looks at the ceiling, and beyond it, and smiles. "The Kindling-yard is behind the chapel. Would you like to see it? Not many visitors ask."`,
        `She's not lying, exactly. You know what lying looks like. This is something else: a woman so sure of the shape of the world that every question has already been answered, a long time ago, in a room you'll never see.`,
        `She reaches up and, very gently, touches your forehead in blessing. Her fingers stop an inch short. Her brow creases very slightly, the way a woman's might who has reached for a cup she was sure was on the table, and found nothing.`,
        `@abbess: "You're feverish, my son." She lets her hand fall. "Get some rest."`
      ],
      fx: { set: { e2_abbess_touch: 1 } },
      next: 'lh_after'
    },
    lh_ward_count: {
      text: [
        `Forty beds. Thirty-eight people. Two beds stripped, the straw fresh, waiting.`,
        `@pell: "Forty," Pell says, behind you, under his breath. He's gone grey to the lips. He hasn't been inside these walls in two years and you can see every one of those years on him. "Still forty."`,
        `The Abbess turns and sees him for the first time, and her face lights with real, uncomplicated joy.`,
        `@abbess: "*Pellam.* Oh, Pellam, you came home." She takes his face in both her hands. He shakes, from head to foot, like a horse in a thunderstorm. "You look so thin. Come to supper. Come any night."`,
        `@pell: "Mother," Pell says. Only that. It sounds like it hurts.`
      ],
      fx: { set: { e2_pell_mother: 1 } },
      next: 'lh_after'
    },
    lh_after: {
      text: [
        `The bells ring the noon Lamp. The Abbess is called away to a dying man. She goes with her hands already out to him.`,
        `Behind the Abbess the bread line shuffles forward in silence, two hundred hands held out, and the young Lamplighters go down it, touching every forehead, gentle, gentle.`,
        { if: 'f.e2_cauley', t: `By the gate, a young Almoner with a fine singing voice and a bread-basket on his arm is handing out loaves. Brother Aldo Cauley. He sees Crake's ledger under your arm and recognises it from across the court. The basket starts to shake.` }
      ],
      choices: [
        { t: `Take Brother Aldo aside. Show him his page.`, if: 'f.e2_cauley', go: 'lh_cauley' },
        { t: `Leave.`, go: 'town_r', fx: { set: { e2_lh_done: 1 }, add: { e2_leads: 1 }, xp: 20, know: { codex: ['lamp'] } } }
      ]
    },
    lh_cauley: {
      text: [
        `You walk him round the corner of the gatehouse with a hand on his elbow, friendly as a cousin. You open the ledger at his page.`,
        `@narrator: "Please," he whispers. "Please, the Abbess, if she knew I gambled, if she knew I owed, I'd be— I'd be sent down. Please."`,
        `@ansel: "Sent down where?"`,
        `He looks at you like a rabbit looks at a stoat. He looks back at the Lanternhold. He whispers very fast, the words falling over each other.`,
        `@narrator: "The north end of the cisterns. There's a chute from the undercroft. Old, from the plague years. We put the— the ones who don't go up gently. The ones the rite— the ones who *spoil*. They go down the chute in linen, at night, and the rats— and the Marshal's carts take the rest, the good ones, out the river-tunnel, and I don't know where, I swear I don't know where, I only push the cart."`,
        `He stops. He's said far too much and he knows it. He goes white, then green.`,
        `@narrator: "I never said that. I never said any of that. Burn it. Burn my page. *Please.*"`
      ],
      choices: [
        { t: `Tear out his page and give it to him. "Go and pray, Brother."`, go: 'lh_cauley_free', fx: { rep: { lamp: 1 }, set: { e2_cauley_told: 1 } } },
        { t: `Keep the page. "I might need you again."`, go: 'lh_cauley_keep', fx: { set: { e2_cauley_told: 1, e2_cauley_owned: 1 } } }
      ]
    },
    lh_cauley_free: {
      text: [
        `He takes the page in both hands and crushes it against his chest and goes back into the Lanternhold without his bread-basket, almost running.`,
        `@pell: "*Spoil*," says Pell, beside you, very softly. "He said *spoil*. As if they were milk."`
      ],
      fx: { quest: { id: 'e2_annet', note: 'Brother Aldo Cauley, an Almoner: a chute from the Lanternhold undercroft into the north end of the cisterns. "The ones who spoil."' }, set: { e2_lh_done: 1 }, add: { e2_leads: 1 }, xp: 20, know: { codex: ['lamp'] } },
      next: 'town_r'
    },
    lh_cauley_keep: {
      text: [
        `You fold his page back into the ledger and close it. He watches the cover close like a man watching a coffin lid.`,
        `> You've just become Crake. You know you have. You decide you can live with it for now. Most things, you can live with for now.`
      ],
      fx: { quest: { id: 'e2_annet', note: 'Brother Aldo Cauley, an Almoner: a chute from the Lanternhold undercroft into the north end of the cisterns. "The ones who spoil." You kept his page.' }, set: { e2_lh_done: 1 }, add: { e2_leads: 1 }, xp: 20, know: { codex: ['lamp'] } },
      next: 'town_r'
    },

    /* ======================= ACT FOUR: THE CISTERNS ======================= */
    cis_gate: {
      loc: 'Lantern Lane — dusk',
      card: { kind: 'act', title: 'Part Three', sub: 'Under the Town' },
      text: [
        `Dusk, and the lamps coming on along the river. You stand at the hurdle across the hole in Lantern Lane with rope, a lantern, and everything you've got.`,
        `@tamsin: "There's two ways down," says Tamsin. "The hole. Or the priest's way."`,
        `@pell: "Saint Ember's. The old chapel at the foot of the Stair; the Lanternhold keeps it for funerals now. There's a stair in the undercroft that goes down to the cisterns, from the plague years, when they—" He stops. "When they needed to move things about quietly. I've a key. I never gave it back. I'm a terrible priest."`
      ],
      choices: [
        { t: `The hole. Rope and nerve.`, check: { stat: 'grit', dc: 12, pass: 'cis_hole', fail: 'cis_hole_fall' } },
        { t: `Pell's stair.`, go: 'cis_stair' }
      ]
    },
    cis_hole: {
      text: [
        `You tie off on the hurdle and go down hand over hand into the cold. The rope burns. The air changes at the bottom: wet stone, rot, something sweet underneath like a pantry where the honey's gone bad.`,
        `Your boots find water. Knee-deep. Cold enough to make your teeth hurt.`,
        `The others come down after you, Tamsin like a cat, Pell like a sack of flour.`
      ],
      next: 'cis_hob'
    },
    cis_hole_fall: {
      text: [
        `Halfway down, the hurdle shifts above you and the rope jerks and you drop the last eight feet into the black water flat on your back.`,
        `It closes over your face. Cold, total, and full of things that brush past you, soft, many. You come up spitting and swinging, and there's nothing there, and the lantern-light Tamsin is lowering shows you only rings on the water spreading outward toward the dark.`,
        `@tamsin: "Graceful," she calls down. Her voice isn't as light as she wants it to be.`
      ],
      fx: { hp: -4 },
      next: 'cis_hob'
    },
    cis_stair: {
      loc: 'Saint Ember\'s — the undercroft',
      text: [
        `Saint Ember's is small and cold and smells of old smoke. Pell's key turns in a door behind the altar. Stone steps go down, worn into dips by centuries of feet.`,
        `At the bottom, a passage. One way, a long slope down into the dark and the sound of water: the cisterns. The other way, an archway that was bricked up once. Someone has unbricked it, recently: the mortar dust is still fresh on the floor. Beyond it, the passage climbs north toward the hill. Toward the Lanternhold.`,
        `In the silt on the floor, two shallow ruts. Handcart wheels. And on the arch's keystone, in white chalk, a seven-pointed star.`,
        `@pell: "That wasn't open," Pell whispers. "In my day. That was *never* open."`
      ],
      fx: { set: { e2_saw_arch: 1 } },
      next: 'cis_hob'
    },
    cis_hob: {
      route: [
        { if: 'f.e2_hob_sent && !f.e2_hob_hired', go: 'cis_hob_follow' },
        { go: 'cis1' }
      ]
    },
    cis_hob_follow: {
      text: [
        `Behind you, a splash, a stifled curse, and a light.`,
        `Hob Fenner, soaked to the waist, holding a stable lantern in one hand and his pitchfork in the other, his teeth chattering so hard you can hear them.`,
        `@hob: "I know you said go home." He swallows. "I went home. And then I came back. Annet used to give me the heels off the castle bread. She said they were the best bit. They weren't. She just said it."`
      ],
      choices: [
        { t: `"Stay behind me. Hold the light. If I say run, you run."`, go: 'cis1', fx: { set: { e2_hob_hired: 1 }, party: { add: ['hob'] } } },
        { t: `"Go back up. Now. That's an order, Hob." Watch him until he's gone.`, go: 'cis_hob_back' }
      ]
    },
    cis_hob_back: {
      text: [
        `He looks at you a long time. Then he goes, back up into the dark, the stable lantern bobbing.`,
        `@tamsin: "That was kind," says Tamsin quietly. "In a horrible way."`,
        `@ansel: "That's the only way I know how to do it."`
      ],
      fx: { set: { e2_hob_refused: 1 } },
      next: 'cis1'
    },
    cis1: {
      loc: 'The cisterns under Harrowgate',
      text: [
        `The cisterns are older than the town above them. You can tell from the brick: thin, flat, laid in herringbone by people who built for a thousand years. Vault after vault, each a dark hall half-full of black water, joined by low arches you have to stoop under. Your lantern lights a ring of ten feet. Beyond it, the dark goes on.`,
        `Tide-marks at the height of a man's chest. Droppings on the ledges, piled like grain. A rat's skull the size of a cat's.`,
        `And under the drip and the slosh, so constant you stop hearing it and then hear it again, a soft rustling, like a great many dry leaves, in every direction at once.`,
        { if: 'f.e2_hob_hired', t: `Hob holds the light high, the way you told him, and his arm doesn't shake. Much.` },
        `@tamsin: "Sergeant." Tamsin's voice is very calm. "Look at the water."`,
        `It's moving. Not in ripples: in a carpet. The surface is solid with swimming bodies, and the ledges on both sides are pouring with them, grey and brown and black, a sound now like rain on a roof. They come at you like an army.`
      ],
      fight: { foes: ['rat_swarm', 'rat_swarm', 'rat_swarm'], title: 'The First Vault', win: 'cis2',
        intro: 'They bleed you a little at a time. Fire scatters them.' }
    },
    cis2: {
      text: [
        `When it's over, there are dead rats floating in the water around you like bobbing apples at a fair, and you are bitten in a dozen places, ankles, wrists, the back of your neck, and Pell is reciting something low and fast and plucking a rat off his own shoulder with an expression of bottomless disgust.`,
        `Twenty yards on, under the hole where the grate gave way, you find Dickon Pye.`,
        `What there is of him. They've had him two nights. His face is gone to the bone. His fingers are gone to the second knuckle, and you realise, looking at the brick above him, that the marks there are his nails. One hand is still clenched round the neck of a broken bottle.`
      ],
      choices: [
        { t: `"Pell. Say something over him."`, go: 'cis_pye_pell' },
        { t: `Close what's left of his eyes and move on.`, go: 'cis_pye_on' },
        { t: `Watch Tamsin.`, go: 'cis_pye_tam' }
      ]
    },
    cis_pye_pell: {
      text: [
        { if: 'f.e2_saved_book', t: `Pell opens his mother's scorched prayer-book and starts the Litany of the Lit Road, the one they say at the Kindling. He gets three lines in and stops.`, else: `Pell starts the Litany of the Lit Road from memory, the one they say at the Kindling. He gets three lines in and stops.` },
        `@pell: "*And the smoke shall carry him up to sing among—*" He closes his mouth. He looks up at the brick vault over his head, and at the water, and at what the rats have left.`,
        `@pell: "No smoke down here," he says. "No pyre. Nobody to carry him anywhere." He kneels in the cold water, which is the bravest thing you've seen him do, and he puts his hand on Dickon Pye's chest. "Dickon Pye. Who was drunk, and loved his wife, and sang badly. Somebody saw you. Somebody's sorry." He gets up. "That's all I've got. It's not in the book."`
      ],
      next: 'cis3'
    },
    cis_pye_on: {
      text: [
        `You crouch and do what you can with the eyelids, which isn't much. Then you stand up, because the living have a long walk, and you've said that before, and you'll say it again.`,
        `> Hettie Pye. You'll have to tell Hettie Pye. Add it to the list.`
      ],
      next: 'cis3'
    },
    cis_pye_tam: {
      text: [
        `She's crouched by the body with her hand flat on the bricks beside it, not touching him. Her lips are moving. You don't need to hear it. *Go down easy.*`,
        `Then she looks at the water, and the vaults, and the dark going on in every direction, and frowns, as if she's listening for something that should be there and isn't.`,
        `@tamsin: "There's no earth down here," she says, mostly to herself. "It's all brick. Brick and water. Nowhere for him to go."`,
        `She wipes her hand on her thigh, hard, the way she did in the sheepfold.`
      ],
      fx: { set: { e2_tam_nowhere: 1 } },
      next: 'cis3'
    },
    cis3: {
      loc: 'The cisterns — the smugglers\' vault',
      text: [
        `Deeper in, the vaults get bigger and drier. In one, up on a broad brick ledge above the waterline, there's a camp: casks and crates under oilcloth, a cold brazier, bedrolls. A smugglers' cache. Corvane brandy, by the stencils. And a dozen casks with the Lanternhold's little lamp burned into the staves.`,
        `And a crossbow, pointing at you from behind the casks, held in two very shaky hands.`,
        `@e2_nan: "That's far enough. That's far *enough*. You're not the Marshal's. The Marshal's don't come down this end any more. Who are you?"`
      ],
      fx: { know: { cast: ['e2_nan'] } },
      choices: [
        { t: `"Lower it. We're looking for a girl, not your brandy."`, check: { stat: 'presence', dc: 12, pass: 'cis_nan_talk', fail: 'cis_nan_shot' } },
        { t: `"Tamsin."`, if: "inParty('tamsin')", go: 'cis_nan_tam' },
        { t: `Walk straight at her. "You've been down here three days. You won't shoot the first face that isn't a rat's."`, check: { stat: 'grit', dc: 13, pass: 'cis_nan_talk', fail: 'cis_nan_shot' } }
      ]
    },
    cis_nan_tam: {
      text: [
        `There's a *thock*, and the crossbow jumps out of the woman's hands and clatters off the ledge into the water with an arrow through its stock.`,
        `@tamsin: "Sorry," says Tamsin, nocking another. "Reflex."`
      ],
      next: 'cis_nan_talk'
    },
    cis_nan_shot: {
      text: [
        `The bolt goes into the brick an inch from your ear and spits chips into your cheek. She starts, with sobbing breaths, to crank the windlass for another.`,
        `You get there before she does. You take the crossbow off her, quite gently, and she sits down on a brandy cask and puts her face in her hands.`
      ],
      fx: { hp: -3 },
      next: 'cis_nan_talk'
    },
    cis_nan_talk: {
      text: [
        `Her name is Nan Fitch. Forty, wiry, a brandy-runner's weathered face gone the colour of tallow from three days in the dark. She has run Corvane brandy and Lanternhold oil through these tunnels for eleven years, from the river-gate under the walls to a cellar on the Stair, and never had trouble she couldn't pay off.`,
        `@e2_nan: "Then this spring it got big." She doesn't need to say what. "The rats always had a king, down the north end. Every cistern does. Little one, knotted up, a dozen tails, nothing. But it got *fed*. Got fat. Got clever." She shudders. "My brother Rafe went to look three days ago. I heard him. I've been up on this ledge since, because they don't come up the ledge while the brazier's lit, and the brazier went out this morning."`
      ],
      choices: [
        { t: `"Fed on what?"`, go: 'cis_nan_fed' },
        { t: `"Have you seen a girl down here? Blue ribbon, twenty, alone?"`, go: 'cis_nan_girl' }
      ]
    },
    cis_nan_fed: {
      text: [
        `@e2_nan: "Bundles." She won't look at you. "Down the old chute at the north end, from up the hill. Wrapped in grey linen. Once a week since spring, sometimes twice. I never looked close. You don't look close, in my trade. You see a thing, it's not your thing, you get on."`,
        `@pell: "The Lamp," Pell says. His voice is dry as paper. "The Lamp that burns everyone. Every one of us goes on the fire, every one, it's the *law*—" He stops. "They're not burning them. They're putting them down a hole for the rats."`,
        { if: 'f.e2_ms_linen', t: `> Forty ells of grey linen. A pyre-yard that hardly smokes.` }
      ],
      fx: { set: { e2_nan_bundles: 1 }, quest: { id: 'e2_annet', note: 'A smuggler, Nan Fitch: bundles in grey linen down a chute from up the hill, once a week since spring. The rats got fat.' } },
      next: 'cis_nan_girl'
    },
    cis_nan_girl: {
      text: [
        `@e2_nan: "A girl." She thinks. "There's somebody past the king's nest. In the old well-room at the north end. I saw a light there once, a week back, people singing, soft, and then the light went away and the singing went away and somebody stayed." She rubs her arms. "Never moved. Never called out. Never once called out, with all that down there with her. I thought she was a ghost."`,
        `@e2_nan: "If you're going past the king, you'll want fire. Rats hate fire. It hates it worse." She jerks her head at the Lanternhold casks. "That's lamp oil. Blue-burning, the good stuff. Pour it down the north channel and touch it off and it'll go like a pitch-house. Course, it'll go up through my whole cache and all. Eleven years' work." She laughs, a bad, cracked laugh. "Still. Rafe's not using his share."`
      ],
      next: 'cis_method'
    },
    cis_method: {
      text: [
        `Beyond the smugglers' ledge, the vaults run north toward a great black arch. From the other side of it comes the rustling, louder now, and under the rustling a sound you don't like at all: a slow, wet, heavy dragging, as of something too big for its own legs.`,
        `And a smell. Carrion and musk and that honey-sweetness again, so thick you can taste it.`,
        { if: 'f.e2_hob_hired', t: `Hob is standing very close to your elbow. He isn't shaking any more. He's gone past shaking into something very still.` }
      ],
      choices: [
        { t: `Fire. Roll the oil down the north channel and burn the nest out. (The cache goes with it.)`, go: 'cis_fire', fx: { set: { e2_ratking: 'burned' } } },
        { t: `Steel. Go in and kill it. Leave Nan her cache.`, go: 'cis_fight', fx: { set: { e2_ratking: 'fought' } } }
      ]
    },
    cis_fire: {
      text: [
        `You roll six casks down to the north channel and stave them in with Widow's pommel. The oil goes out across the black water in a slick that shines blue-green in the lantern-light, and runs under the great arch, following the current, into the dark.`,
        `Nan watches eleven years go into the water. She doesn't say anything.`,
        `Tamsin nocks an arrow wrapped in oil-rag and holds it to your lantern until it catches.`,
        `@tamsin: "Say when, Sergeant."`,
        `@ansel: "When."`,
        `The arrow goes under the arch like a falling star. For a heartbeat, nothing. Then the whole north vault *goes up*, a sheet of blue fire from wall to wall, roaring, and in the roar a sound like a thousand babies screaming at once.`,
        `And out of the fire, burning, comes the king.`
      ],
      fx: { xp: 20 },
      next: 'cis_boss_fire'
    },
    cis_boss_fire: {
      text: [
        `It's the size of a cart: a wheel of rats, hundreds of them, knotted together at the tails into one writhing mass, every one facing outward, every mouth open. Some of the rats in the knot are long dead, rotted to skin and bone and still carried along. It moves by heaving, by all of them pulling at once.`,
        `Half of it is on fire, and the burning half is screaming, and the other half is dragging it toward you through the water anyway, because it has been taught that what comes down into the dark is food.`,
        { if: 'f.e2_hob_hired', t: `@ansel: "Hob. Stand. Hold the light. Don't run."`, else: `@ansel: "On me."` }
      ],
      fx: { know: { beast: ['rat_king'] } },
      fight: { foes: ['e2_ratking_burning'], title: 'The Wedded Rats', win: 'cis_after',
        intro: 'It is burning, and it is faster for it. Watch for the heave.' }
    },
    cis_fight: {
      text: [
        `You leave the lantern with Nan, take a torch from her brazier, and go under the great arch with Widow drawn.`,
        `The north vault is a cathedral of brick, ankle-deep over a floor of bones: rat-gnawed, split for marrow, piled in drifts against the walls. Shreds of grey linen caught among them like rags on a gibbet. High in the far wall, a black square mouth: the chute.`,
        `In the middle of the vault, on a mound of bones and filth and linen, the Wedded Rats are waiting. It's the size of a cart: a wheel of rats, hundreds of them, knotted at the tails into one writhing mass, every mouth facing outward. Some of the rats in the knot are long dead, rotted to skin and still carried along.`,
        `A hundred heads turn toward your torch at once. It has one mind, and it has been fed on what came down that chute for half a year. You can feel it thinking about you.`,
        { if: 'f.e2_hob_hired', t: `@ansel: "Hob. Stand. Hold the light. Don't run."`, else: `@ansel: "On me."` }
      ],
      fx: { set: { e2_saw_chute: 1 }, know: { beast: ['rat_king'] } },
      fight: { foes: ['rat_king'], title: 'The Wedded Rats', win: 'cis_after',
        intro: 'When it shudders and tears at its own edges, it is about to shed a swarm. Fire hurts it badly.' }
    },
    cis_after: {
      loc: 'The cisterns — the north vault',
      text: [
        { if: "f.e2_ratking==='burned'", t: `It dies in the shallows with its fur burned off, a great black smoking wheel, still twitching, every one of its hundreds of mouths opening and closing on nothing. The blue fire burns down to a low flicker on the water. The north vault stinks of scorched hair and roast meat and lamp oil.` },
        { if: "f.e2_ratking==='fought'", t: `It dies in pieces. You have to cut it apart, in the end, rat by rat, knot by knot, while the pieces keep trying to bite. When it's done you're standing ankle-deep in a soup of rat and bone, and your arms are bloody to the shoulder, and you don't know how much of it is yours.` },
        { if: 'f.e2_hob_hired', t: `Hob is still standing where you put him, still holding the light up. His face is speckled with blood. He didn't run. He looks at you, and his mouth works, and nothing comes out.` }
      ],
      fx: { xp: 40, rep: { town: 1 } },
      choices: [
        { t: `"Hob. You held. Good lad."`, if: 'f.e2_hob_hired', go: 'cis_after_hob', fx: { bond: { hob: 1 } } },
        { t: `Say nothing. Find the girl.`, go: 'cis_wellroom' }
      ]
    },
    cis_after_hob: {
      text: [
        `@hob: "I held." He says it like a man trying out a new word. "I *held*, Sergeant."`,
        `Then he turns round and is sick in the water, thoroughly, and Tamsin pats him on the back the whole time and says *there you go, there you go, better out than in*, and when he straightens up his face is shining.`
      ],
      next: 'cis_wellroom'
    },
    cis_wellroom: {
      loc: 'The cisterns — the old well-room',
      text: [
        `Past the nest, up three worn steps, there's a small dry room with a domed roof and a capped well in the middle. Stone benches round the walls. A smell of old candle-wax and honey.`,
        `The walls are covered in chalk. Seven-pointed stars in circles, the Lamp's tithe-star, row after row of them, dozens, scores, neat as a tally in a ledger. Some of them have a single line drawn through.`,
        `And on the bench at the far end, with her hands in her lap and her bare feet in a little puddle, sits a girl of twenty in a castle maid's grey dress.`,
        `She doesn't turn her head when your light falls on her. She doesn't blink. Her hair is loose down her back, and there's a frayed place on one lock where something was torn out of it.`,
        `There are no rats in this room. There are rat-tracks all through the dust right up to the door, and then they stop. As if the rats came this far and turned around. As if there was nothing in here worth eating.`
      ],
      fx: { set: { e2_found_annet: 1 }, know: { codex: ['hollowing'] } },
      next: 'cis_annet'
    },
    cis_annet: {
      text: [
        { if: 'f.e2_hob_hired', t: `@hob: "Annet?"` },
        { if: 'f.e2_hob_hired', t: `Hob is past you before you can stop him, crouching in front of her, putting his face where her eyes are. "Annet, it's Hob. From the Hen. You give me the bread-heels. Annet?" Nothing. He looks up at you, and he is eighteen, and he has just learned something nobody should learn at eighteen.` },
        { if: '!f.e2_hob_hired', t: `It's Pell who says it, not Hob. He sits down heavily on the bench beside her. "Annet. It's Brother Pell. I taught you your letters. You were the best in the class. You used to laugh at my jokes, which nobody does." Nothing. He takes her hand. She lets him. She'd let anyone.` },
        `Annet Wale breathes, slow and even. She is warm. Someone has fed her, a little, not lately. Her lips are cracked. Her eyes are open and clear and there is nobody behind them at all.`,
        `@tamsin: "Mothers below," Tamsin says, very quietly. She's looking at the walls. At the stars. At the lines through them. "It's a tally. Look at it, Sergeant. They're *counting*."`
      ],
      choices: [
        { t: `Kneel in front of her. Take off your glove. Touch her face with the burned hand.`, go: 'cis_annet_palm' },
        { t: `Look closer at the chalk on the walls.`, check: { stat: 'wits', dc: 13, pass: 'cis_annet_wall', fail: 'cis_annet_wall_fail' } },
        { t: `"Get her up. We're leaving."`, go: 'cis_annet_out' }
      ]
    },
    cis_annet_palm: {
      text: [
        `You don't know why you do it. You pull the glove off with your teeth and lay your palm, the star-shaped burn, against her cheek.`,
        `Nothing. For a long moment, nothing.`,
        `Then her head turns. Slowly, the way the little girl's did at Ashby. Toward your hand. Toward the burn. Her cheek presses into your palm, very slightly, the way a cat's does, the way a plant leans toward a window. Her lips part.`,
        `And then whatever it was goes out of her again, like a tide going out, and she's looking through you at the wall.`,
        `Behind you, Tamsin has gone absolutely silent. When you look round, she's staring at your bare hand with an expression you have never seen on her face before and cannot read at all.`,
        `You put the glove back on.`
      ],
      fx: { set: { e2_annet_palm: 1 } },
      next: 'cis_annet_out'
    },
    cis_annet_wall: {
      text: [
        `Pell holds the lantern up while you look. Stars in rows. Under each row, in tiny, careful, clerk's letters, a date. The earliest is last spring. The latest is eight days ago.`,
        `Most of the stars have a line through them. Annet's row, the last, has seven stars. Six have lines.`,
        `@pell: "Those are the ones who went down the chute." His voice is barely there. "The ones who spoiled. And the ones without lines are the ones who—" He looks at Annet. "The ones who kept. Who were good enough. For whatever they're good for."`,
        `> Someone sat in this room with a stick of chalk and kept the books. Neatly. Like a quartermaster.`
      ],
      fx: { set: { e2_tally_read: 1 }, quest: { id: 'e2_annet', note: 'In the old well-room: tithe-stars in rows on the wall, dated, like a tally. Lines through most of them.' } },
      next: 'cis_annet_out'
    },
    cis_annet_wall_fail: {
      text: [
        `Stars and stars and stars. Some crossed through, some not. The pattern swims in the lantern-light and won't sit still for you. It means something. Somebody made it mean something. But your head is full of rats and the smell of honey and you can't make it come out.`,
        { if: 'f.e2_saved_book', t: `Pell copies a corner of it into the back of his scorched prayer-book with a stub of charcoal, his lips moving.`, else: `Pell copies a corner of it onto the inside of his own wrist with a stub of charcoal, his lips moving.` }
      ],
      fx: { set: { e2_pell_copied: 1 } },
      next: 'cis_annet_out'
    },
    cis_annet_out: {
      text: [
        `You put a hand on her arm, gently, the way you learned at Ashby, and pull. She stands. She walks. She doesn't hold your hand, and she doesn't let go of it either.`,
        { if: "f.e2_ratking==='fought'", t: `On the way back through the smugglers' vault, Nan Fitch is sitting on her brandy casks with her crossbow in her lap. She looks at the girl for a long moment. Then she presses a purse into your hand without a word. Rafe's share, you think. She doesn't say.` },
        { if: "f.e2_ratking==='burned'", t: `On the way back through the smugglers' vault, Nan Fitch is sitting on the scorched ledge where her cache was, looking at the black water. She looks at the girl for a long moment. "Worth it," she says, to nobody. "I suppose."` },
        `You climb up out of the dark into Lantern Lane at midnight, filthy, bleeding, stinking of rat and smoke, with a girl in a maid's grey dress walking silently behind you, barefoot on the cobbles.`
      ],
      fx: { quest: { id: 'e2_annet', note: 'You found Annet Wale in the cisterns, sitting in the dark. Alive. Hollowed.' } },
      next: 'cis_out_route'
    },
    cis_out_route: {
      route: [
        { if: "f.e2_ratking==='fought'", fx: { silver: 30, give: { poultice: 1 } }, go: 'isolde3' },
        { go: 'isolde3' }
      ]
    },

    /* ======================= ACT FIVE: WHAT IS OWED ======================= */
    isolde3: {
      loc: 'Varane Keep — the chapel yard postern, past midnight',
      text: [
        `You send the others back to the Hen. This is a door for one.`,
        `You knock twice. You say you've come about the candles. Nurse Brisket opens the door in her nightcap with a candle in one hand and a poker in the other, looks at you, looks at what's behind you, and says nothing whatsoever, which is the most frightening thing she has done yet.`,
        `She takes you through dark passages to a small cold room off the archive. She goes away. A long minute.`,
        `Then Lady Isolde comes in fast, in a cloak thrown over her nightgown, her hair down her back in a dark rope, barefoot on the stone. She stops in the doorway.`,
        `@isolde: "Annet."`,
        `Annet Wale stands in the middle of the room where you've put her, looking at the wall.`
      ],
      fx: { quest: { id: 'e2_annet', state: 'done', note: 'You brought Annet Wale home to Lady Isolde, at midnight, by the servants\' door.' } },
      next: 'isolde4'
    },
    isolde4: {
      text: [
        `Isolde crosses the room. She takes Annet's face in both her hands, the way you'd hold a cup you were afraid of spilling, and looks into her eyes from six inches away.`,
        `@isolde: "Annet. It's me. It's— Annet, I've got the Hollin book, the one with the bear in it, you wanted to finish it. You wanted to know how it ends." Her voice is perfectly level. "Annet. Read to me. My eyes are tired."`,
        `Annet breathes. Annet looks through her.`,
        `Lady Isolde Varane, who can recite her father's debts to the penny and has never once in your hearing raised her voice, makes a sound. It isn't a sob. It's smaller than that, and worse: a short sharp catch of breath, like someone who has put her hand flat on a hot stove and is trying very hard not to take it away.`,
        `Her hands are shaking. She looks down at them, astonished, as if they belong to someone else.`
      ],
      choices: [
        { t: `Take the blue ribbon out of your coat and hold it out to her.`, go: 'isolde_ribbon' },
        { t: `Say nothing. Stand a sentry's distance away and let her have this.`, go: 'isolde_sentry' },
        { t: `"My lady. Sit down."`, go: 'isolde_sit' }
      ]
    },
    isolde_sentry: {
      text: [
        `You stand by the door with your back to the room, the way you'd stand a watch, and look at the wall, and give her the only privacy you have to give.`,
        `It takes a long time. When she speaks again her voice is level, but it has been somewhere and come back.`,
        `@isolde: "Thank you." A pause. "You do that very well. Not looking."`,
        `@ansel: "I've had practice, my lady. You learn to give people their faces back."`
      ],
      next: 'isolde_ribbon'
    },
    isolde_sit: {
      text: [
        `@isolde: "I don't need to sit down." She sits down. On the edge of a chest, abruptly, as if her knees have made the decision without consulting her. She doesn't let go of Annet's hand.`,
        `@isolde: "I'm sorry. That was— I'm not usually—" She stops. "No. I *am* usually. I'm usually exactly this. I just don't usually let anybody see it."`
      ],
      next: 'isolde_ribbon'
    },
    isolde_ribbon: {
      fx: { take: { annet_ribbon: 1 } },
      text: [
        `You hold out the ribbon. Blue silk, frayed at one end, still faintly sweet.`,
        `She takes it. She stands behind Annet and gathers her hair in one hand and tries to tie it, the way she must have watched it tied a thousand mornings. Her fingers won't do it. The silk slips. She tries again. It slips.`,
        `@isolde: "I can tell you what this March owes to the penny," she says, very quietly, to the back of Annet's neck, "and I cannot tie a—"`
      ],
      choices: [
        { t: `Step in. Put your hands over hers. Tie it for her: a sergeant's knot, tight and neat.`, go: 'isolde_knot', fx: { set: { e2_tied_ribbon: 1 } } },
        { t: `"Take your time, my lady. She's not going anywhere."`, go: 'isolde_ownknot' },
        { t: `"Nurse Brisket's outside the door. She'll know how."`, go: 'isolde_brisket' }
      ]
    },
    isolde_knot: {
      text: [
        `Your hands over hers. Your fingers are scarred and filthy with the cisterns and hers are long and ink-stained and cold, and for a moment neither of you moves.`,
        `Then you tie it. A sergeant's knot: round, through, back, and pull. The same knot that's on the case at your hip. Tight and neat and it'll never come undone on its own.`,
        `She doesn't take her hands away immediately. Neither do you. She's very close. She smells of ink and candle-smoke and sleep.`,
        `@isolde: "Thank you," she says. She's looking at the knot, not at you. Then she is looking at you. The look goes on longer than it ought to, over the head of the empty girl between you, and then she steps back, and it's over, and it isn't.`
      ],
      next: 'isolde_where'
    },
    isolde_ownknot: {
      text: [
        `She breathes in. Out. On the third try the knot holds: a small, plain bow, a little crooked.`,
        `@isolde: "There." She smooths Annet's hair down over it. "There. You look very fine, Annet. You look like Annet."`,
        `She doesn't look at you while she does it. You're grateful, and you think she knows you are.`
      ],
      next: 'isolde_where'
    },
    isolde_brisket: {
      text: [
        `Isolde's face goes perfectly still. Then she calls, without turning: "Brisket."`,
        `Brisket comes in and takes the ribbon and ties it in two quick movements, and pats Annet's cheek, and pats Isolde's, and goes out again, and none of them says a word.`,
        `@isolde: "Practical," Isolde says to you, after. It's hard to tell if it's praise.`
      ],
      next: 'isolde_where'
    },
    isolde_where: {
      text: [
        `She turns to you. She's put herself back together, piece by piece; you watched her do it, like a man buckling on armour in the dark by feel. Only her eyes haven't come all the way back.`,
        `@isolde: "Where did you find her, Master Dray?"`,
        { if: 'f.e2_promised_truth', t: `> You told her you'd tell her the truth. Whatever it was.` }
      ],
      choices: [
        { t: `Tell her everything. The cisterns. The rats. The chalk stars on the doors and on the wall, in rows, like a tally. Whatever else you found.`, go: 'isolde_truth', fx: { set: { e2_told_isolde_truth: 1, e2_annet_where: 'keep' }, rep: { varane: 1 } } },
        { t: `Tell her the truth, and then tell her: "Whatever you do, my lady, don't send her up to the Lanternhold."`, go: 'isolde_truth_warn', fx: { set: { e2_told_isolde_truth: 1, e2_warned_isolde: 1, e2_annet_where: 'keep' }, rep: { varane: 1 } } },
        { t: `Soften it. "Wandering by the river, my lady. Lost. The sickness, like Ashby." Spare her the rest.`, go: 'isolde_soft', fx: { set: { e2_told_isolde_truth: 0, e2_annet_where: 'lanternhold' } } }
      ]
    },
    isolde_truth: {
      text: [
        `You tell her. All of it, in order, the way you'd make a report: what you saw, where, how many. The stars on the inside of the doors. The ribbon at the grate. The rats, the size of the king. The well-room. The tally on the wall.`,
        { if: 'f.e2_lamp_silver', t: `The journeymen paid in new silver with the little lamp on it.` },
        { if: 'f.e2_nan_bundles || f.e2_cauley_told', t: `Bundles in grey linen, down a chute from up the hill, once a week since spring.` },
        `She listens without interrupting once. When you're done she's quiet until the candle gutters.`,
        `@isolde: "Thank you," she says. "Nobody in this castle has made me a report in my life. They make me *reassurances*." She looks at Annet. "She'll stay here. In my rooms. Brisket and I will see to her. Nobody from the Lanternhold comes near her."`,
        `@isolde: "If the Lamp is doing this, Master Dray, then the Lamp holds a loan against my father's spring rents, and a seat at his table, and the love of every soul in this town. And I am a girl with a ledger." A thin smile. "Well. I've started with less."`
      ],
      fx: { bond: { isolde: 1 } },
      next: 'isolde_hire'
    },
    isolde_truth_warn: {
      text: [
        `You tell her. All of it, in order, the way you'd make a report. The stars. The ribbon. The rats. The tally on the wall.`,
        `Then: "Whatever you do, my lady, don't send her up to the Lanternhold."`,
        `@isolde: "The Abbess asked for her," she says slowly. "This morning. Before you found her. She sent a brother to say, *if Annet is found, whatever her state, send her to us, we take everyone*." She looks at you, and you watch her do the sum. You watch her get the answer. "She asked *before* you found her."`,
        `@isolde: "She stays here. In my rooms. Brisket and I will see to her. If anyone in a grey robe comes to this door, Brisket will deal with them, and you have *met* Brisket."`
      ],
      fx: { bond: { isolde: 1 }, set: { e2_isolde_suspects: 1 } },
      next: 'isolde_hire'
    },
    isolde_soft: {
      text: [
        `@ansel: "By the river, my lady. Wandering. Lost. Like Ashby. The sickness."`,
        `She has a face for figures, and you can see her checking yours, and you can see her decide, out of tiredness or kindness or because she simply can't carry one more thing tonight, to let the sum stand.`,
        `@isolde: "The sickness." She nods. "Then the Lanternhold. The Abbess asked for her already; she sent a brother this morning. They know how to care for them. I don't. I'd only— I'd only sit with her and talk to her and she'd starve while I read her the end of the bear book."`,
        `@isolde: "She'll go up tomorrow. Brisket will take her."`,
        `> The girl at Ashby, washed and brushed, holding her doll by one leg. Forty beds. Two stripped.`,
        { if: 'f.e2_promised_truth', t: `> You said you'd tell her the truth. Whatever it was. You're a liar now as well, then. Add it to the list.` }
      ],
      choices: [
        { t: `Let it stand.`, go: 'isolde_hire' },
        { t: `"My lady— wait. That's not all of it." Tell her the truth after all.`, go: 'isolde_truth_late', fx: { set: { e2_told_isolde_truth: 1, e2_annet_where: 'keep' } } }
      ]
    },
    isolde_truth_late: {
      text: [
        `@ansel: "That's not all of it."`,
        `You tell her the rest. She listens with her arms folded tight across her body. At the end of it, she doesn't thank you.`,
        `@isolde: "You were going to let me send her up there." Very quiet. "To be kind to me."`,
        `@ansel: "Yes."`,
        `@isolde: "Don't do that again." Then, after a moment, less hard: "But you stopped. Most men don't stop. I'll remember that you stopped." She looks at Annet. "She stays here."`
      ],
      next: 'isolde_hire'
    },
    isolde_hire: {
      text: [
        `She takes a purse from the chest she was sitting on. It's already counted. Of course it is.`,
        `@isolde: "A hundred. As agreed." She holds it out, then doesn't let go when you take hold of it. "And another thing, which is not in the agreement. There's a tally on a wall under my town, and Annet was one line of it. I want the rest of the lines. Names, if they have names. Who holds the chalk. Who pushes the cart."`,
        `@isolde: "Keep looking, Master Dray. Quietly. Off the books. Report to me and only me." The faintest pause. "Please."`,
        `You've never heard her say please. You suspect very few people have.`
      ],
      choices: [
        { t: `"I'll keep looking, my lady."`, go: 'isolde_end', fx: { set: { e2_isolde_hired: 1 }, silver: 100, quest: { id: 'e2_tally', title: 'The Tally on the Wall', state: 'active', note: 'Lady Isolde wants the rest of the lines: who chalks the stars, who pushes the cart. Off the books.' } } },
        { t: `"Keep the hundred. I'll keep looking anyway. Not for silver. For Annet."`, go: 'isolde_end', fx: { set: { e2_isolde_hired: 1, e2_isolde_free: 1 }, rep: { varane: 1 }, quest: { id: 'e2_tally', title: 'The Tally on the Wall', state: 'active', note: 'Lady Isolde wants the rest of the lines: who chalks the stars, who pushes the cart. You said you\'d do it for nothing.' } } },
        { t: `"No, my lady. I found your maid. I'm done. This is a fight for lords and priests."`, go: 'isolde_decline', fx: { set: { e2_isolde_hired: 0 }, silver: 100 } }
      ]
    },
    isolde_decline: {
      text: [
        `She lets go of the purse.`,
        `@isolde: "Of course." Perfectly courteous; a blade is courteous too. "You've been paid. You owe the March nothing." She turns back to Annet. "Brisket will see you out."`,
        `At the door, without turning round, she says: "If you change your mind, the key still works."`
      ],
      next: 'mags1'
    },
    isolde_end: {
      text: [
        { if: 'f.e2_isolde_free', t: `She looks at the purse in her hand for a long moment, and then at you, as if you were a column in a ledger that has just come out to a number she didn't expect. "You keep doing that," she says. "Refusing to be bought. It's very inconvenient. I'm going to have to think of something else to give you."` },
        `@isolde: "Thank you, Ansel."`,
        `It's the first time she's used your name. She doesn't seem to notice she's done it. You notice.`,
        `She sits down by Annet, takes the girl's limp hand in her lap, and opens a book from the shelf at random, and begins, very steadily, to read aloud. Some dry thing about tithe-law. It doesn't matter. Her voice in the cold room, and the empty girl with the blue ribbon in her hair, listening to nothing.`,
        `You go. At the door you look back once. She's looking up from the page, straight at you, over Annet's head, and she doesn't look away. Neither do you.`
      ],
      next: 'mags1'
    },

    /* ======================= THE GUTTED HEN: MAGS ======================= */
    mags1: {
      loc: 'The Gutted Hen — the wash-house, before dawn',
      text: [
        `Brisket lets you out into the chapel yard. The stars are out over the Keep, hard and bright and close. You walk down through the sleeping town with your eyes on the cobbles, all the way to the Hen.`,
        `The Hen is dark and shut. You go round the back. There's a light in the wash-house, and steam coming out of the shutters, and Mags Halloran in the doorway in her shift with a shawl round her shoulders and her hair down, grey-shot auburn, much longer than you'd have guessed.`,
        `She looks at you. Then she pinches her nose.`,
        `@mags: "Lamp and Saints. You are *not* coming into my common room like that. Tamsin came in an hour ago smelling like a dead rat and I put her in the copper first. She's up in the hayloft with the priest; wouldn't take her room. Says she likes the company."`,
        { if: 'f.e2_hob_hired', t: `@mags: "And the boy's asleep on the priest."` },
        `@mags: "Water's still hot. Get in."`
      ],
      choices: [
        { t: `"Mags. I can wash at the pump."`, go: 'mags_bath', fx: { set: { e2_mags_pump: 1 } } },
        { t: `Strip off and get in. You're too tired to be shy.`, go: 'mags_bath' }
      ]
    },
    mags_bath: {
      text: [
        { if: 'f.e2_mags_pump', t: `@mags: "You can freeze at the pump, is what you can do, and then you'll be ill in my best room and I'll have to nurse you, and I've done enough of that for one life." She holds the door open. "I've seen a man's arse before, love. I was married twice. Get in."` },
        `The copper is a great dented tub on the flagstones, full to the brim, steaming. You get out of your clothes, which takes a while, because some of them are stuck to you with blood and worse. Mags takes them away at arm's length with the tongs and drops them in a bucket of lye.`,
        `You get in. The heat goes into every bite and cut and bruise at once, and you hear yourself make a sound you didn't know you had in you, low and helpless, like a horse rolling in the grass.`,
        `Mags laughs. Not unkindly. She pulls a stool up behind the tub and sits, and picks up a cake of soap that smells of lavender, and without asking she starts scrubbing your back.`,
        `You let her. Her hands are big and strong and they know what they're doing. They find every knot in your shoulders like a woman reading a map. They go over the rope of scar at your collarbone, and stop, and go on.`,
        `@mags: "Corran's Ford?"`,
        `@ansel: "That one's older. Corran's Ford is lower down."`,
        `Her hand goes lower down, slowly, across your ribs, and finds the puckered purple seam below them where the spear went in. She rests her palm flat on it and doesn't say anything at all.`
      ],
      fx: { heal: 'full' },
      next: 'mags_offer'
    },
    mags_offer: {
      text: [
        `@mags: "I'm forty-one," she says at last, conversationally, still with her hand on the scar. "I've buried a husband and a son, and I've a tavern to open in three hours. I'm not looking for a husband. I'm not looking for anything that lasts past breakfast."`,
        `@mags: "But it's a long time since anybody's been in this wash-house with me who wasn't paying for the bath. And you've good shoulders. I told you that."`,
        `She takes her hand off your ribs. She stands up. The shawl slides off one shoulder and she lets it.`,
        `@mags: "Your choice, sergeant. No hard feelings either way. I'll still do you breakfast."`
      ],
      choices: [
        { t: `Reach up and take her hand.`, go: 'mags_yes', fx: { set: { e2_mags: 1 }, bond: { mags: 1 } } },
        { t: `"Not tonight, Mags. Not because of you."`, go: 'mags_no' },
        { t: `"Stay and talk. Just talk. I don't want to be alone yet."`, go: 'mags_talk', fx: { bond: { mags: 1 }, set: { e2_mags_talk: 1 } } }
      ]
    },
    mags_yes: {
      text: [
        `Her hand is warm and wet with soapsuds. You pull, and she laughs, and says *oh, not in the tub, you great fool, I'm forty-one, my back*, and gets in anyway, shift and all, and half the water goes over the side onto the flagstones.`,
        `It is not graceful. Your knee finds the side of the copper. Her elbow finds your eye. The shift is a sodden nuisance and takes the both of you to get off over her head, and she swears at it the whole time, and something comes out of you that is nearly a laugh, a short surprised bark that hurts your bitten ribs and startles you both.`,
        `Then neither of you is laughing. She's big and soft and strong, freckled across the shoulders, heavy-breasted, a silver stretch-mark low on her belly from the son she buried, and she looks at you looking at her with her chin up, daring you to find any of it wanting. You don't. You put your mouth to the hollow of her throat and she takes a fistful of your hair and says your name, your actual name, *Ansel*, low and rough, and the tub isn't big enough for this and neither of you cares.`,
        `She doesn't ask about the glove you've still got on your left hand. She looks at it, once. Then she takes your gloved hand and puts it where she wants it, and that is the last thing either of you says for some time.`
      ],
      next: 'mags_after'
    },
    mags_after: {
      loc: 'The Gutted Hen — Mags\'s room, first light',
      text: [
        `Later, in her bed, which is big and sags in the middle and smells of lavender and woodsmoke, she lies with her head on your chest and draws idle circles on the spear-scar with one finger.`,
        `@mags: "This isn't anything," she says. "You know that."`,
        `@ansel: "I know."`,
        `@mags: "It's something. It's a bath that got out of hand." She yawns hugely. "You snore, by the way. You snored for a quarter-hour before I kicked you. You sleep like a man who's never slept in a bed."`,
        `> You did sleep. Without the bottle, without the roll. With somebody breathing next to you. You'd forgotten how.`,
        `The shutters go grey, then gold. Downstairs, someone is banging on the door for beer. Mags groans, gets up, stands naked in the dawn light stretching her back until it cracks, entirely unembarrassed, and throws your clean shirt at your head.`,
        `@mags: "Breakfast in a quarter-hour. Don't go moon-eyed over the porridge."`
      ],
      fx: { rest: true, heal: 'full', st: 2 },
      next: 'tam_tease'
    },
    mags_no: {
      text: [
        `She looks at you a moment, then nods, and pulls the shawl back up, and sits back down on her stool as if nothing has happened. It's a kindness. You both know it is.`,
        `@mags: "Somebody else, is it?" Before you can answer: "No. Don't tell me. It's better I guess." She picks the soap back up. "Lean forward. You've got rat in your hair."`,
        `She washes your hair. It's the most tender thing anybody has done for you in six years, and neither of you says another word.`
      ],
      fx: { rest: true },
      next: 'tam_tease'
    },
    mags_talk: {
      text: [
        `She looks at you a moment. Then she pulls the shawl back up and sits down, and takes your hand over the rim of the tub, soap and all.`,
        `@mags: "All right, love. All right."`,
        `You don't talk about much. She tells you about Davey, the first husband, who could whistle like a blackbird and couldn't swim. You tell her about Tom Ashe and the miller's wife. She asks how it ends. You tell her you never found out. She says that's the best kind of joke, the ones that don't end, and she laughs, and then for some reason she's crying, quietly, and then so are you, and the water goes cold, and neither of you moves to get out.`
      ],
      fx: { rest: true, heal: 'full' },
      next: 'tam_tease'
    },
    tam_tease: {
      loc: 'The Gutted Hen — the back step, morning',
      text: [
        `Tamsin is on the back step with her feet on the rain barrel and an apple, which is where she was always going to be.`,
        `She looks at you as you come out. She looks at your clean shirt, your wet hair. She sniffs, elaborately.`,
        { if: 'f.e2_mags', t: `@tamsin: "Lavender." She takes a bite of apple. "And you're walking like a man who got some *sleep*, Sergeant. Strange. Me and the priest and the boy were all up in the hayloft, and none of us heard you come up to your room. Not one creak." She chews. "Not one."`, else: `@tamsin: "Lavender. Mags's good soap. She never lets anybody have the good soap." A suspicious squint. "She gave *me* the soap that smells of goose-fat."` }
      ],
      choices: [
        { t: `"Mind your own business, thief."`, go: 'tam_tease_mind' },
        { t: `Sit down next to her. Steal her apple.`, go: 'tam_tease_apple' },
        { t: `"Jealous?"`, if: 'f.e2_mags', go: 'tam_tease_jealous' }
      ]
    },
    tam_tease_mind: {
      text: [
        { if: 'f.e2_mags', t: `@tamsin: "I *am* minding it. I'm minding it very carefully." She grins, chipped tooth and all, delighted. "Good for you, Sergeant. Honestly. Good for *her*. She's been looking at you like a ham since the day we walked in."`, else: `@tamsin: "Everything's my business. I'm a thief. It's a professional interest."` },
        `She throws the apple core into the rain barrel. It's a perfectly ordinary thing to do. She does it a little harder than she needs to.`
      ],
      next: 'gossip1'
    },
    tam_tease_apple: {
      text: [
        `You sit down. The step's still too narrow. You take the apple out of her hand and bite it.`,
        `@tamsin: "Thief."`,
        `@ansel: "I learned from the best."`,
        { if: 'f.e2_mags', t: `@tamsin: "Mm." She leans her shoulder against yours. It's a perfectly ordinary thing to do; she's done it before. Only this time she takes it away again a moment sooner than she did on the step that first evening, and looks at the yard, and says, too brightly: "She's nice, Mags. She's good. I like her. I'm glad." She means every word. That's what makes the small silence after it so strange.`, else: `@tamsin: "Mm." She leans her shoulder against yours, and leaves it there, and you sit together on the step while the town wakes up, and the apple goes back and forth between you until it's a core.` }
      ],
      next: 'gossip1'
    },
    tam_tease_jealous: {
      text: [
        `@tamsin: "Of *you*?" She laughs, loud, too loud, the laugh that's always a little too loud. "Saints. I'd sooner be jealous of Ox."`,
        `She takes another bite of apple. She looks out across the yard, at the stables, at nothing.`,
        `@tamsin: "Anyway. You couldn't afford me."`,
        `It's a joke. It comes out wrong, somehow, a little flat, and she hears it come out wrong, and she gets up and goes in without finishing the apple.`
      ],
      fx: { set: { e2_tam_flicker: 1 } },
      next: 'gossip1'
    },

    /* ======================= ACT SIX: DUSK ======================= */
    gossip1: {
      loc: 'Harrowgate — the Market Stair, afternoon',
      text: [
        `By noon the whole town knows. By afternoon the story has grown in the telling the way stories do in a town with nothing else to talk about: the rat-king was the size of a house, the size of a church; the dead sergeant killed it with his bare hands; he went down into the dark and came up carrying a girl.`,
        `Children on the Market Stair are playing it. One of them is the rat-king, rolling on the steps with five others clinging to his ankles, squealing. One of them is you. He has a stick for a sword and his mother's glove on his left hand.`,
        `@tibb: "*The man who killed the rat-king!*" Old Tibb cries it from the notice board for free, which is unheard of. "*Drinks on him at the Hen!*"`,
        `@tamsin: "Drinks are not on you," Tamsin says. "I want that clear."`,
        { if: "f.e2_ratking==='burned'", t: `Up and down the Bottom, people stop you to say they saw the smoke come out of the grates last night, blue, all along Lantern Lane, like the town was breathing fire. An old woman kisses your hand. You let her.` },
        { if: "f.e2_hask_job==='took'", t: `A Keep runner finds you on the Stair with a purse and a note in that quick captain's hand. *My town sword kills a rat-king in his first week. Good for my name, and better for yours. Here's a bonus; buy the Hen a round. Don't go down holes without telling me again. — K.* The purse has twenty silver in it. The bit about the holes is underlined.` },
        { if: "f.e2_hask_job!=='took'", t: `Sergeant Moll finds you on the Stair. He has the look of a man carrying a message he doesn't like. "Marshal says well done," he says. "Marshal says the cisterns are the town's business and the town's had men down there since the spring, looking after things, and next time you go down a hole you'll ask first." He pauses. "And I say well done. For myself. Hettie Pye's at the Hen, crying. Somebody ought to tell her properly."` },
        `@pell: "*Since the spring*," Pell repeats, when the messenger's gone. "Looking after things."`
      ],
      fx: { rep: { town: 2 }, set: { e2_ratking_famous: 1 } },
      choices: [
        { t: `Go to the Hen. Tell Hettie Pye about Dickon yourself.`, go: 'gossip_hettie' },
        { t: `Find Hob. He hasn't said a word since the cisterns.`, if: 'f.e2_hob_hired', go: 'gossip_hob' },
        { t: `Walk up to the Lanternhold. It's nearly the Evening Lamp.`, go: 'final1' }
      ]
    },
    gossip_hettie: {
      text: [
        `Hettie Pye is a small round woman with a red face and a dishcloth she's twisted into a rope. You sit across from her at the Hen and tell her, as plainly as you can, leaving out what you can.`,
        `@narrator: "Was it quick?" she asks.`,
        `You've been asked that a hundred times. You've answered it a hundred times. You've never once told the truth.`,
        `@ansel: "Yes."`,
        `She nods. She unwinds the dishcloth. She says he was a useless drunk and she'll miss him every day of her life, and both of those are true, and she goes home.`
      ],
      fx: { rep: { town: 1 }, set: { e2_told_hettie: 1 } },
      next: 'final1'
    },
    gossip_hob: {
      loc: 'The Gutted Hen — the stable',
      text: [
        `Hob is in Ox's stall, doing nothing, with the brush in his hand. Ox is eating his hair.`,
        `@hob: "I keep seeing her face," he says, without turning round. "Annet's. Not the rats. I thought it'd be the rats. It's her face." He swallows. "Is that what it's like? Being a soldier? You keep seeing the faces?"`
      ],
      choices: [
        { t: `"Yes. Every one. That's what the roll is for. So you don't have to carry them all in your head."`, go: 'gossip_hob_roll' },
        { t: `"That's why you should go home, Hob. While you still only see the one."`, go: 'gossip_hob_home' }
      ]
    },
    gossip_hob_roll: {
      text: [
        `You show him. Not the whole thing; the first hand's-breadth. Names. Rank, home, the date.`,
        `@hob: "You wrote them all? All of them?"`,
        `@ansel: "The morning after. Before I forgot any."`,
        `He reads a few, his lips moving. He reads slowly, but he reads. Then he hands it back, very carefully, rolled the way you roll it.`,
        `@hob: "I'll remember Annet, then," he says. "I'll be her roll." He goes back to brushing Ox, and Ox, for once, doesn't bite him.`
      ],
      fx: { set: { e2_hob_roll: 1 } },
      next: 'final1'
    },
    gossip_hob_home: {
      text: [
        `He turns round. His chin comes up, and for a moment he looks very like you did at fifteen, with your father's belt in his hand, deciding to run.`,
        `@hob: "No, Sergeant. Respectfully. No."`,
        `> You'd have said the same. You did say the same. Look where it got you.`
      ],
      next: 'final1'
    },

    final1: {
      loc: 'The Lanternhold steps — dusk',
      card: { kind: 'cut', title: 'The Evening Lamp', sub: 'The Lanternhold' },
      text: [
        `The whole town comes to the Evening Lamp on a fine night. The Lanternhold steps are crowded from the gate to the street: the Bottom and the Stair and the river, the tanners and the fullers and the fishwives, standing shoulder to shoulder in the last of the light with their faces turned up.`,
        `Up on the top step, under the arch, the Abbess stands with her arms open, blessing the poor. She moves down the line of them one by one, touching every forehead, giving every one a word. A child. A cripple. A fishwife with a goitre. She kisses the goitre. The crowd sighs like one animal.`,
        `Above her, the lantern-tower burns blue against a green sky. The first stars are coming out behind it.`,
        { if: "f.e2_annet_where==='lanternhold'", t: `And up the steps, through the crowd, which parts for them, comes Nurse Brisket in her best black, leading a girl in a maid's grey dress by the hand. Annet walks the way they all walk. There's a blue ribbon in her hair. Two young Lamplighters come down to meet them, gentle-voiced, and take Annet's hand from Brisket's, and lead her up and in under the arch. Brisket stands on the step a long time after, alone, looking at the door.` }
      ],
      next: 'final2'
    },
    final2: {
      text: [
        `Beside the Abbess, a step behind her, in his good blue cloak with the boar on the clasp, stands Ser Konrad Hask.`,
        `He's handing out silver. A penny to every hand she blesses. The Marshal's charity: everybody knows it, everybody loves him for it. He catches a child's dropped penny before it hits the step and gives it back with a bow, and the crowd laughs.`,
        `Then the Abbess finishes with the last of the line, and straightens, and puts her hand to the small of her back, an old woman's gesture. And she turns, and looks at Hask.`,
        `And Hask looks at her.`,
        `It isn't much. It's a second. It isn't a lover's look or a conspirator's look. It's the look two people give each other across a counting-house table at the end of a long day, when the sums have come out right. Satisfied. Tired. Fond. *Done.*`
      ],
      next: 'final3'
    },
    final3: {
      text: [
        `You're standing at the bottom of the steps, at the back of the crowd, with Tamsin on one side and Pell on the other.`,
        { if: 'f.e2_hob_hired', t: `Hob is behind you, his pitchfork traded for a borrowed spear that's too long for him, standing the way you showed him.` },
        `Hask sees you. Over the heads of the whole town, he sees you, and smiles, wide and warm and glad, and lifts a hand.`,
        { if: "f.e2_hask_job==='took'", t: `You lift yours back. You're his town sword. That's what town swords do.`, else: `You don't lift yours. He doesn't seem to mind. He never minds.` },
        `@tamsin: "Sergeant," Tamsin says, very low, not looking at you. "Your hand."`,
        `You look down. You've taken your left glove off without knowing it. The star on your palm is red and angry, as if it's just been burned there, and it hurts, it *hurts*, a deep pulsing ache like a tooth going bad.`,
        `The bells stop. The crowd lifts its hands to its hearts. Up on the tower, in its cage of glass, the blue flame of the Lanternhold leans, very slightly, away from where you stand, the way a candle leans from a door left open.`,
        `The Abbess is blessing a child. Hask is laughing. You put your glove back on.`
      ],
      fx: { xp: 60, quest: [{ id: 'hask', note: 'At the Evening Lamp, Hask stood beside the Abbess on the Lanternhold steps. They looked at each other like two people whose sums had come out right.' }] },
      end: true
    },

    /* ======================= SIDE: CONTRACTS (unlocked after E2) ======================= */
    c_pits_1: {
      loc: 'The Tanners\' Bottom — the Guild yard',
      text: [
        `The notice is in a clerk's hand, with a tanner's thumbprint in brown for a seal: *MASTER CROUCH of the Tanners' Guild will pay FORTY SILVER to the man who clears the OLD PIT of what is in it. Apply at the Guild yard. No priests.*`,
        `Master Abel Crouch is a square, bald, sour man whose hands are stained the colour of strong tea to the wrist. He looks at your knuckles before he looks at your face, the way a horse-dealer looks at teeth.`,
        `@e2_crouch: "Tanner's boy." Not a question. "Where?"`,
        `@ansel: "Lowmarch."`,
        `@e2_crouch: "Lowmarch lime's cheap and it burns. Your da'd have used too much." He jerks his head. "Two of my journeymen went to the old pit after dark, to dump scraps where they shouldn't. One came back without a foot. The other didn't come back. Since you killed that rat-thing, something's been coming *up*."`
      ],
      fx: { know: { cast: ['e2_crouch'] } },
      choices: [
        { t: `"What kind of something?"`, go: 'c_pits_2' },
        { t: `"He did use too much. He used it on me, when I was slow."`, go: 'c_pits_da' },
        { t: `"Forty's thin for a thing that eats feet. Sixty."`, check: { stat: 'presence', dc: 13, pass: 'c_pits_haggle', fail: 'c_pits_2' } }
      ]
    },
    c_pits_da: {
      text: [
        `Crouch looks at you properly for the first time.`,
        `@e2_crouch: "Aye. They did that, in Lowmarch. Lime on the backs of the legs. Teaches you to tread faster." He spits into the gutter. "I never did that to a boy of mine. I want you to know. I've done a lot of things, but not that."`,
        `> You never ran from the work. You ran from the man. You'd forgotten there were other kinds of tanner.`
      ],
      fx: { set: { e2_crouch_da: 1 } },
      next: 'c_pits_2'
    },
    c_pits_haggle: {
      text: [
        `@e2_crouch: "Sixty." He looks like he's swallowed a beam-knife. "Sixty, and you bring back my journeyman's other boot. His mam'll want something to burn."`
      ],
      fx: { set: { e2_crouch_sixty: 1 } },
      next: 'c_pits_2'
    },
    c_pits_2: {
      loc: 'The Tanners\' Bottom — the old pit, night',
      text: [
        `The old pit is at the river end of the Bottom, a great round lime-pit forty feet across, disused for a generation, half full of slaked lime gone to a milky grey sludge. At its far side, a brick culvert opens into the hill: an overflow from the cisterns, older than the Guild.`,
        `It stinks. Of course it stinks. It stinks of your whole childhood, and you stand at the lip of it with Widow drawn and your stomach turning over, and you are fifteen, and your father is standing behind you.`,
        `Something is clinging to the bars of the culvert, up out of the sludge. A man. The other journeyman. Alive. His legs are white to the hip and the skin is coming off them in sheets.`,
        `@narrator: "Help," he says, very conversationally, the way men talk when they're past screaming. "It's under me. It's right under me. Please."`,
        `The milk-grey surface of the pit bulges, very gently, beneath his feet.`
      ],
      choices: [
        { t: `Go in after him. Wade the lime. Get him out first, then fight.`, go: 'c_pits_wade', fx: { hp: -6, set: { e2_piers: 'saved' } } },
        { t: `Stay on the lip. Make it come to you. He'll have to hold on.`, go: 'c_pits_lip', fx: { set: { e2_piers: 'lost' } } }
      ]
    },
    c_pits_wade: {
      text: [
        `You go in. The lime closes over your boots, your shins, your knees: it's warm, warm as blood, and then it starts to burn, a slow bright ache through the leather as if you're wading through nettles that go on forever.`,
        `> Faster. Tread faster. Your father's voice. You tread faster.`,
        `You reach the culvert. You take the journeyman by the belt and haul him off the bars and onto your shoulder like a sack, and turn, and the pit erupts behind you.`
      ],
      next: 'c_pits_fight'
    },
    c_pits_lip: {
      text: [
        `You stay where the ground is solid. You call to him to hold on. He holds on.`,
        `The surface bulges higher. He looks down at it. He looks at you, on the lip, with your sword, not coming.`,
        `@narrator: "Oh," he says. He understands. He lets go of the bars before it can take him; you think, afterward, that he wanted to choose it. The pit takes him with hardly a ripple.`,
        `Then it erupts.`
      ],
      next: 'c_pits_fight'
    },
    c_pits_fight: {
      text: [
        `It comes up out of the lime like a white tree falling upward: an eel, thick as a man, longer than the pit is wide, blind, its skin bleached the dead white of everything that lives in lime, its mouth a round red wound full of backward teeth. Lime-milk sheets off it. It turns its blind head toward the warmth of you.`
      ],
      fx: { know: { beast: ['e2_pit_eel'] } },
      fight: { foes: ['e2_pit_eel'], title: 'The Old Pit', win: 'c_pits_3',
        intro: 'When it sinks out of sight, it is coming for your legs. Guard.' }
    },
    c_pits_3: {
      text: [
        `It dies thrashing, and its thrashing empties half the pit over the Guild yard in a grey wave. When it's still, it lies across the lip like a felled birch, and steam comes off it, and the whole Bottom has come out in their nightshirts to look.`,
        { if: "f.e2_piers==='saved'", t: `The journeyman, Piers, is lying on the cobbles with Crouch kneeling beside him pouring vinegar on his legs, which is the right thing to do, and Piers screaming, which is the right thing too. He'll walk again. Badly. But he'll walk.` },
        { if: "f.e2_piers==='lost'", t: `They find what's left of the journeyman inside it, later, when Crouch has it opened. Crouch doesn't say anything to you about it. He doesn't have to.` },
        `@e2_crouch: "Well." Crouch looks at the eel. Then at your boots, which the lime has eaten through. Then at you. "That's a hide. That's a hide and a half, that is. The Guild could tan that. Make a hundred pairs of boots out of that."`
      ],
      choices: [
        { t: `"Give it to the widows on the Bottom. Let them tan it and sell it."`, go: 'c_pits_4', fx: { rep: { town: 2 }, set: { e2_eel_hide: 'widows' } } },
        { t: `"It's mine. Silas Wyck will pay for the oil in it." Sell it.`, go: 'c_pits_4', fx: { silver: 30, set: { e2_eel_hide: 'sold' } } }
      ]
    },
    c_pits_4: {
      text: [
        `Crouch pays. He counts it out on the Guild yard table with his brown hands, coin by coin.`,
        { if: 'f.e2_crouch_sixty', t: `Sixty. He doesn't complain. He adds a pair of good boots, his own make, to replace the ones the lime ate.` },
        { if: 'f.e2_crouch_da', t: `@e2_crouch: "Come by the yard sometime," he says, not looking at you. "Not to work. Just to see it done right."` },
        `You walk home with the lime-stink in your clothes and, for once, it doesn't make you fifteen. It just makes you tired.`
      ],
      fx: { silver: 40, xp: 70 },
      end: true
    },

    c_mill_r: {
      route: [
        { if: "f.e2_hask_job==='took'", go: 'c_mill_took1' },
        { go: 'c_mill_ref1' }
      ]
    },
    c_mill_took1: {
      loc: 'Coldbrook Mill — the Thornwood road',
      text: [
        `A Keep page in a blue tabard brings it to the Hen at cockcrow, sealed with the boar: *Town sword. Coldbrook Mill, two hours west on the Thornwood road. Miller Hamm owes the March sixty silver in arrears of mill-dues, three years running. Collect it, or bring him to the Keep and he can work it off at Saltdown like the rest. Keep a tenth. — K.*`,
        `Six silver for an old man's mill, or an old man. By noon you're in the yard.`,
        `Coldbrook Mill is a squat grey building over a fast brown stream, with a wheel that groans and a yard full of geese. Miller Hamm is seventy, bent, flour in every crease of him. His two sons are standing in front of the door with threshing flails, and they've seen the boar on your belt.`,
        `@narrator: "Sixty silver," says the old man. "Three years. You know why three years? Because three years ago the Marshal's men took my hired man, Col, for *his* debts, to Saltdown, to work them off. Col was the one who knew the wheel. Since then the wheel's been grinding half what it did. And I owe more every quarter, and the more I owe the more they'll take."`,
        `@narrator: "Col never came back. Nobody comes back from Saltdown. So you tell me, Marshal's man. What happens to me?"`
      ],
      fx: { set: { e2_heard_saltdown: 1 } },
      choices: [
        { t: `"Pay, or come with me. I'm sorry. It's the law."`, go: 'c_mill_force' },
        { t: `Pay the sixty yourself. Tell Hask you collected.`, cost: 60, go: 'c_mill_paid', fx: { set: { e2_miller: 'paid' }, rep: { town: 1 } } },
        { t: `Tear the writ in half. "Tell anyone who asks that the Marshal's man never came."`, go: 'c_mill_torn', fx: { set: { e2_miller: 'torn' }, rep: { town: 2, varane: -1 } } }
      ]
    },
    c_mill_force: {
      text: [
        `The sons look at each other. The elder spits on his hands and takes a fresh grip on his flail.`,
        `@narrator: "No," he says. "Not Da. You'll have to go through us."`
      ],
      fight: { foes: ['bandit', 'bandit'], title: 'Coldbrook Mill', win: 'c_mill_force2',
        intro: 'Miller\'s sons with threshing flails. They are not fighting for silver.' }
    },
    c_mill_force2: {
      text: [
        `The sons are on the ground in the goose-yard, bloody, alive. The old man comes out of the mill with his coat on and his hat in his hand.`,
        `@narrator: "I'll come," he says. "Don't hurt them any more. I'll come."`,
        `You take him to the Keep. Hask's clerk with the good teeth writes him into a ledger. You get your six silver. On the ride back down through the town, you don't read the roll. You don't drink. You just sit in the dark in your room at the Hen and look at your hands.`
      ],
      fx: { set: { e2_miller: 'collected' }, silver: 6, xp: 50, rep: { town: -2, varane: 1 } },
      end: true
    },
    c_mill_paid: {
      text: [
        `You count it out on the miller's table. Sixty silver. It's most of what you have.`,
        `The old man looks at the coins as if they might be a trick. Then he looks at you.`,
        `@narrator: "Why?"`,
        `@ansel: "A man I knew had a hired man taken to Saltdown, once. Never got him back."`,
        `It isn't true. It doesn't need to be. The sons walk you to the road and the younger one gives you a sack of flour for Mags, and on the way home you find you're not sorry at all.`
      ],
      fx: { xp: 50, give: { poultice: 1 } },
      end: true
    },
    c_mill_torn: {
      text: [
        `The paper tears very easily. They always do.`,
        `@narrator: "He'll know," says the old man. "The Marshal. He knows everything that happens in the March."`,
        `@ansel: "Then he'll know I couldn't find the mill. I'm new. I'm a drunk. Everyone says so."`,
        `The sons laugh. The old man doesn't. He takes your hand in both of his floury ones and holds it, and that's all.`,
        `Three days later a note comes to the Hen in that quick captain's hand. *Couldn't find Coldbrook? It's on the map, Ansel. I'll let it go once.* Under it: *Once.*`
      ],
      fx: { xp: 50, set: { e2_hask_warned: 1 } },
      end: true
    },

    c_mill_ref1: {
      loc: 'The Gutted Hen — morning',
      text: [
        `She's maybe sixteen, with flour in her hair and a face set like a fist, and she's waited at the Hen since cockcrow to see the man who killed the rat-king.`,
        `@narrator: "Wenna Hamm. Coldbrook Mill. The Marshal's men are coming today for my da. Sixty silver in arrears, and if he can't pay they'll take him to Saltdown, like they took Col, and Col never came back." She puts a purse on the table. It's very light. "Twenty-five. It's all of it. Everybody says you went down into the dark when nobody else would. I want you to stand in our yard when they come."`
      ],
      choices: [
        { t: `Take her purse. Ride to Coldbrook.`, go: 'c_mill_ref2', fx: { silver: 25 } },
        { t: `Push the purse back. Ride to Coldbrook anyway.`, go: 'c_mill_ref2', fx: { rep: { town: 1 }, set: { e2_wenna_free: 1 } } }
      ]
    },
    c_mill_ref2: {
      loc: 'Coldbrook Mill — the Thornwood road',
      text: [
        `You're in the goose-yard when they come: a corporal and two men-at-arms in Varane blue, and a cart with a cage in the back, the kind for moving pigs to market.`,
        `@narrator: "Corporal Snell, Marshal's warrant." He sees you, and the sword, and knows exactly who you are; everyone does this week. "Ah. The rat-catcher. This isn't your business, friend. Old Hamm owes the March. The March collects."`,
        `Behind you, in the door of the mill, old Hamm is standing with his hat in his hands and his two sons holding flails, and they're all looking at you.`
      ],
      fx: { set: { e2_heard_saltdown: 1 } },
      choices: [
        { t: `Pay the corporal the sixty yourself.`, cost: 60, go: 'c_mill_ref_paid', fx: { set: { e2_miller: 'paid' } } },
        { t: `"The Marshal's an old friend. He'll want to hear you put a man in a pig-cage in front of the rat-catcher. Shall I tell him tonight?"`, check: { stat: 'presence', dc: 14, pass: 'c_mill_ref_bluff', fail: 'c_mill_ref_fight' } },
        { t: `Step between the cart and the mill. "No."`, go: 'c_mill_ref_fight' }
      ]
    },
    c_mill_ref_paid: {
      text: [
        `Snell weighs the purse in his hand, surprised, then almost sorry.`,
        `@narrator: "Paid in full," he says, and writes it in his little book, and turns the cart round. At the gate he says, over his shoulder, not unkindly: "You can't pay for all of them, you know. There's a lot of mills."`,
        `@ansel: "I know."`,
        `Wenna Hamm stands in the yard with her arms round her father and watches the cart go, and doesn't cry until it's out of sight.`
      ],
      fx: { xp: 50, rep: { town: 1 } },
      end: true
    },
    c_mill_ref_bluff: {
      text: [
        `Snell weighs you, doing sums of his own. A man who went down the hole and came back. The Marshal's old sergeant, everybody says. Maybe friends, maybe not.`,
        `@narrator: "Next quarter," he says at last, to the miller, not to you. "Next quarter, Hamm, and the Saints help you." He turns the cart around. As it goes, he gives you a look: the look of a man who will remember your face in a report.`
      ],
      fx: { set: { e2_miller: 'bluffed' }, xp: 50, rep: { town: 1 } },
      end: true
    },
    c_mill_ref_fight: {
      text: [
        `@narrator: "Have it your way." Snell draws. "Take him."`
      ],
      fight: { foes: ['man_at_arms', 'man_at_arms'], title: 'Coldbrook Mill', win: 'c_mill_ref_won',
        intro: 'Varane men-at-arms, Hask\'s orders. Trained, armoured, and doing their jobs.' }
    },
    c_mill_ref_won: {
      text: [
        `You don't kill them. You go to a lot of trouble not to kill them, which is harder than killing them, and leaves you bleeding. They're in the goose-yard with the geese standing on them. Snell is holding his broken wrist.`,
        `@narrator: "He'll hear about this," Snell says, very quietly. "You know he will."`,
        `@ansel: "Tell him Sergeant Dray says the Red Company sends its regards."`,
        `They go. The cart goes. Wenna Hamm brings you a cup of milk and a heel of bread and stands watching you eat it, and her father sits on the mounting block with his head in his hands, and you all know this is only next quarter's problem now. But next quarter is a long way off.`
      ],
      fx: { set: { e2_miller: 'fought' }, xp: 60, rep: { town: 2, varane: -2 } },
      end: true
    },

    /* ======================= SIDE: TALKS ======================= */
    t_pell_1: {
      loc: 'The Gutted Hen — a corner table, late',
      text: [
        `Pell has been sober for four days, which he announces to you every evening as though it were a military campaign. Tonight he's sitting in the corner with a cup of small beer he hasn't touched, and a book open on the table that he's not reading.`,
        { if: 'f.e2_saved_book', t: `It's his mother's prayer-book, scorched at the edges. He keeps his hand on it the way you keep yours on the roll-case.`, else: `It's a cheap Book of Embers Mags bought him off a pedlar, which he hates. "The binding's wrong," he says. "The verses are all there. The binding's wrong."` },
        `@pell: "I keep thinking about the forty beds," he says when you sit down. "Forty beds and the line in the gate court going on for ever."`,
        { if: "f.e1_ashby==='led'", t: `@pell: "You brought thirty-one in from Ashby. I've counted the ward three times since. I can't find thirty-one new faces." He turns the cup. "I found the little girl with the doll. I couldn't find the rest."` },
        { if: "f.e1_ashby==='mercy'", t: `@pell: "Tamsin told me about Ashby. What you did there. I keep trying to work out whether it was a sin." He turns the cup. "And I keep thinking that if you'd brought them here instead, I wouldn't have to wonder where they'd gone."` },
        { if: "f.e1_ashby==='left'", t: `@pell: "You left the Ashby folk in the rain, Tamsin says. Don't look at her like that, she didn't say it unkindly. The Almoners' carts went out that way two days later. I asked a carter. He said they came back full."` }
      ],
      choices: [
        { t: `"Tell me about the night they threw you out. All of it."`, go: 't_pell_2' },
        { t: `"You haven't touched your beer."`, go: 't_pell_beer' }
      ]
    },
    t_pell_beer: {
      text: [
        `@pell: "No." He looks at it as if it were a dog he used to own. "I pour one every night. I look at it. Then I give it to Hob, and he drinks it and goes red and tells me about horses." He smiles, crookedly. "It's a sort of liturgy. You need a liturgy, when you've stopped believing in the first one."`
      ],
      next: 't_pell_2'
    },
    t_pell_2: {
      text: [
        `@pell: "It was Saint Corran's Eve." He doesn't seem to notice you flinch at the name. "The first night of winter. The whole Lanternhold was at the Evening Lamp but me, because I was drunk in the oil-store. I took the wrong stair. I told you that part."`,
        `@pell: "The door was warm. I put my ear to it. They were singing on the other side. Voices I knew; Almoners, I think. The Litany of the Lit Road, the funeral hymn, very soft. And under the singing there was another sound."`,
        `He stops. He picks up the beer. He puts it down again.`,
        `@pell: "Do you know what a child sounds like when they're breathing out for a very long time? Longer than lungs go. As if something were drawing it out of them, like thread off a spool?" His hands are flat on the table. "It went on for the length of the hymn. And then the singing stopped, and so did the breathing, and a woman said, quite cheerfully, *There. That's another*. The way you'd say it shelling peas." He looks at his hands. "I have spent two years telling myself I didn't know the voice."`,
        `@pell: "I went back up the stair. I got very drunk. And in the morning I asked the Abbess what was behind that door. Like a fool. Like a *priest*."`
      ],
      fx: { set: { e2_pell_heard: 1 } },
      choices: [
        { t: `"You've been carrying that alone for two years."`, go: 't_pell_3', fx: { bond: { pell: 1 } } },
        { t: `"Why didn't you go to the Marshal? Lord Varane? Anyone?"`, go: 't_pell_3b' }
      ]
    },
    t_pell_3b: {
      text: [
        `@pell: "I did." He laughs. "That same afternoon, with my star already unpicked and in my pocket. The Marshal was very kind. He gave me a silver and told me to sleep it off, and by evening every tavern on the Stair knew Brother Pell had been put out for drink. Ser Konrad works very fast when he's being kind."`,
        `He looks at you.`,
        `@pell: "You took his coin, or you didn't; it's none of my business. But I'd count your fingers after you shake his hand."`
      ],
      fx: { set: { e2_pell_hask: 1 } },
      next: 't_pell_3'
    },
    t_pell_3: {
      text: [
        `He pushes the beer across the table to you.`,
        `@pell: "There. I've said it out loud to somebody now. It's yours as much as mine." He sits back. He looks ten years younger and very tired. "Do you know, I feel better? Isn't that awful. A child breathes out for the length of a hymn and I feel *better* because I told a sellsword about it in a tavern."`,
        `@ansel: "It's not awful. It's a report."`,
        `@pell: "A report." He tries the word. "Yes. All right. I'll write it down, then. All of it. In the back of the book, where the pages are blank." He smiles. "Somebody ought to keep the roll."`
      ],
      fx: { set: { e2_pell_report: 1 } },
      end: true
    },

    t_hob_1: {
      loc: 'The Gutted Hen — the stable yard, dawn',
      text: [
        `Hob is in the yard at dawn with a borrowed spear, practising, badly. He's doing everything wrong: feet together, elbows out, holding the shaft like a broom. He's also been doing it for an hour, by the sweat on him, and he hasn't stopped.`,
        `He sees you. He goes red. He keeps going.`
      ],
      choices: [
        { t: `Take the spear off him. "Again. Properly. Feet first."`, go: 't_hob_2', fx: { bond: { hob: 1 } } },
        { t: `Watch him a while without saying anything.`, go: 't_hob_watch' }
      ]
    },
    t_hob_watch: {
      text: [
        `You lean on the stable door and watch. After a while he notices you're not going to say anything, and gets worse, and then, slowly, as he forgets you're there, better. He works out on his own to put one foot forward. It takes him twenty minutes. It took you a week.`,
        `@ansel: "Feet," you say at last. "You worked out the feet. Now the hands."`,
        `He looks at you like you've knighted him.`
      ],
      fx: { bond: { hob: 1 } },
      next: 't_hob_2'
    },
    t_hob_2: {
      text: [
        `You show him. Left foot forward. Weight low, like you're about to be pushed and you've decided not to be. Hands apart on the shaft, the back one at the hip, the front one loose. The point at the throat, always at the throat, because a man can live with a spear in his belly long enough to kill you.`,
        `He's terrible. He's eager and clumsy and he trips over his own feet twice and nearly takes Ox's eye out once. But he listens. He listens the way the good ones used to, with his whole body, and when you tell him something once he doesn't need telling again.`,
        `After an hour, he puts the point where you tell him, three times in a row.`,
        `@hob: "Sergeant. Can I ask you something? What were they like? The Red Company? Before."`
      ],
      choices: [
        { t: `Tell him the truth. Mostly hungry, mostly frightened, mostly kind to each other. The best men you ever knew.`, go: 't_hob_3' },
        { t: `"Dead, Hob. That's what they're like. Mind your feet."`, go: 't_hob_3b' }
      ]
    },
    t_hob_3: {
      text: [
        `You tell him about Tom Ashe and the miller's wife. About Big Rolf who could carry a pony and cried at weddings. About the boy from Lowmarch you were going to make corporal. You hadn't meant to tell him any of it. It comes out like water out of a cracked cistern.`,
        `Hob listens with the spear across his knees and his mouth open.`,
        `@hob: "I'd have liked to be in it," he says. "The Company. I'd have liked to be one of the names."`,
        `@ansel: "No you wouldn't."`,
        `@hob: "No," he agrees, after a moment, quieter. "But I'd have liked them to be alive so I could ask to be."`
      ],
      fx: { set: { e2_hob_trained: 1 } },
      next: 't_hob_4'
    },
    t_hob_3b: {
      text: [
        `He minds his feet. He doesn't ask again. But that evening you find he's polished Widow's scabbard and re-stitched the frayed place on the sergeant's knot, very neatly, with red thread from Mags's sewing basket. He doesn't mention it. Neither do you.`
      ],
      fx: { set: { e2_hob_trained: 1 } },
      next: 't_hob_4'
    },
    t_hob_4: {
      text: [
        `@ansel: "Same time tomorrow. And the day after. Every day, Hob, until you can do it asleep."`,
        `@hob: "Yes, Sergeant." Then, unable to help it, he grins so wide it looks like it hurts. "Every day. Yes, *Sergeant*."`,
        `> You're making a soldier. You swore you'd never make another one. Hob puts the point at the throat of the stable door, three times, four, five, and you don't stop him.`
      ],
      end: true
    },

    t_tam_1: {
      loc: 'The Harrowgate wall-walk — evening',
      text: [
        `Tamsin finds you on the town wall at sunset, where you've gone to be alone and not look at the sky. She has two apples and a small sack and mud still under her fingernails from the fen.`,
        `@tamsin: "You missed the good bit of my trip. Want to hear it? It's mostly about eels."`
      ],
      choices: [
        { t: `"Tell me about your gran."`, go: 't_tam_gran' },
        { t: `"Tell me about the eels."`, go: 't_tam_eels' }
      ]
    },
    t_tam_gran: {
      text: [
        `@tamsin: "Gran's..." She takes a long time choosing the word. "Gran's the fen. You know? She's been there longer than the weirs. She knows every eel by its first name. She pulled half the babies in Gallowmere into the world and she's buried most of the old folk, quiet, the old way, and she's never once been caught." Pride, and something under it. "She raised me, after Mam."`,
        { if: 'f.e1_tam_mother', t: `She doesn't say *after Mam was burned*. She doesn't need to. You were under the wagon that night when she told you.` },
        `@tamsin: "She asked about you. A lot. What you look like, what you eat, if you sleep." A quick sideways glance. "I told her you snore like a pig with a cold. She laughed so hard she fell off her stool."`,
        `@ansel: "Why's a fen-witch so interested in a sellsword?"`,
        `It's a joke. She laughs at it. A beat late, but she laughs.`,
        `@tamsin: "She's not a witch. She's a *midwife*. And everybody's interested in you, Sergeant. You came back from the dead. That's gossip for a year in the fen."`
      ],
      fx: { set: { e2_tam_gran: 1 } },
      next: 't_tam_3'
    },
    t_tam_eels: {
      text: [
        `@tamsin: "Right. So. My cousin Abb has a weir off Coot's Ferry, and this year he caught an eel so big it ate his dog. Not a little dog. A *proper* dog. And Abb, who is an idiot, decides he's going to get the dog back."`,
        `It goes on for some time. It involves a borrowed boat, a priest from Coot's Ferry, a pig-bladder, the eel, the dog (alive, deeply offended), and a lot of shouting in fen-talk which she does all the voices for. By the end you're leaning on the parapet with your face in your hand and something shaking in your chest that hasn't got out yet. It gets as far as your throat. Then it stops, the way it always stops, and you're only breathing hard.`,
        `She watches it not happen. She doesn't look disappointed. She looks like a poacher who has seen the deer and is in no hurry at all.`,
        `@tamsin: "Nearly," she says. "I'll get you yet, Sergeant."`
      ],
      fx: { set: { e2_tam_laugh: 1 } },
      next: 't_tam_3'
    },
    t_tam_3: {
      text: [
        `She hands you an apple. She looks out over the wall, south, to where the land goes flat and silver and the fen begins, and the light is going out of it.`,
        `@tamsin: "Sergeant. That thing you did. With your hand. On Annet's face." She doesn't look at you. "Has it always done that? The burn?"`
      ],
      choices: [
        { t: `"I don't know what it does, Tamsin. I don't know what I am."`, go: 't_tam_4', fx: { bond: { tamsin: 1 }, set: { e2_tam_told_dont_know: 1 } } },
        { t: `"It's a burn. It's just a burn."`, go: 't_tam_4b' }
      ]
    },
    t_tam_4: {
      text: [
        `It's the truest thing you've said to anyone in six years, and you say it to the side of her face, on a wall, at dusk, holding an apple.`,
        `She's quiet a long time. When she speaks her voice is careful, as if she's carrying something full to the brim across a room.`,
        `@tamsin: "Well. Nobody knows what they are. Most people just get to not find out." She bumps her shoulder against yours. "I'll find out for you, if you like. I'm nosy."`,
        `The stars are coming out. You keep your eyes on the fen. So does she. You stay there until it's dark, the two of you, and she doesn't sing, and you're glad, and you'd never tell her.`
      ],
      end: true
    },
    t_tam_4b: {
      text: [
        `@tamsin: "Mm." She bites her apple. She doesn't believe you; she makes no attempt to look as if she does. "Just a burn. Right."`,
        `She stays anyway, until it's dark. When she goes, she leaves you the sack. Inside: a pair of fen-wool gloves, thick, grey, clumsily knitted, the left one with an extra layer sewn into the palm.`,
        `> She noticed. Of course she noticed. She notices things. It's a curse.`
      ],
      end: true
    },

    t_isolde_1: {
      loc: 'Varane Keep — the archive, after dark',
      text: [
        `You knock twice. You say you've come about the candles. Brisket lets you in with a look that could curdle milk and goes away muttering about *men in the archive at all hours*.`,
        `Isolde is where she always is: under the one candle, three ledgers open. She doesn't look up until she's blotted the line.`,
        { if: "f.e2_annet_where!=='lanternhold'", t: `@isolde: "Annet ate a whole bowl of porridge three days ago," she says. "By herself. Brisket put the spoon in her hand and she lifted it, and Brisket wept." She turns a page she isn't reading. "The next night the Abbess came to supper and spoke to my father about *proper care*, very kindly. Yesterday he signed the paper. She is in the white ward now. I go every morning. My father and I are being extremely polite to one another."` },
        { if: "f.e2_annet_where==='lanternhold'", t: `@isolde: "Annet is eating well," she says. "That's what the Lamplighters tell me, at any rate. I'm not allowed to see her. The ward is closed to visitors this month. A fever." She turns a page she isn't reading. "Brisket goes up every morning and stands at the gate anyway."` }
      ],
      choices: [
        { t: `"What are you working on?"`, go: 't_iso_2' },
        { t: `"You should sleep, my lady."`, go: 't_iso_sleep' }
      ]
    },
    t_iso_sleep: {
      text: [
        `@isolde: "I should do a great many things. Marry a prince, for one." She says it lightly, and the lightness is a knife laid flat on the table. "Prince Cassius. It was agreed when I was nineteen. He comes for the Feast of Lanterns to sign it. Then the Crown takes the March's debts, and the March, and me, in that order."`,
        `@isolde: "So no. I don't sleep much. I count."`
      ],
      fx: { set: { e2_iso_cassius: 1 } },
      next: 't_iso_2'
    },
    t_iso_2: {
      text: [
        `She turns a ledger toward you. The Lanternhold's accounts with the house, three years of them.`,
        `@isolde: "I've been looking for your tally. Look. Every spring and every autumn, the Lanternhold forgives a little more of my father's loan. It costs them hundreds. And every spring and every autumn, the Marshal's men take carts north to Saltdown with 'labour for the mines'. More carts every year. More mouths. And *less* salt." She traces the columns with an ink-stained finger. "It's not proof. It's arithmetic. But it's very tidy arithmetic."`,
        `She looks up at you.`,
        `@isolde: "I don't have anyone else to say that to. Do you understand? I've had this sum in my head for a year, and there was nobody in the whole of Harrowgate I could say it to out loud."`
      ],
      choices: [
        { t: `"Say it to me. Any time. That's what I'm for."`, go: 't_iso_3', fx: { bond: { isolde: 1 } } },
        { t: `"Be careful who else sees that ledger, my lady."`, go: 't_iso_3b' },
        { t: `"Show me how you read them. The ledgers."`, go: 't_iso_3c', fx: { set: { e2_iso_lesson: 1 } } }
      ]
    },
    t_iso_3: {
      text: [
        `@isolde: "Is it," she says. Not quite a question. She looks at you for a long moment across the candle.`,
        `@isolde: "Then you'll have to come back. Regularly. For the arithmetic." She bends to the ledger again, and there's colour in her face, and she's trying very hard not to let you see it, and failing, and she knows she's failing, and you both let it go.`
      ],
      end: true
    },
    t_iso_3b: {
      text: [
        `@isolde: "I'm always careful." She closes it. "I've been careful since I was nine. It's the only thing they taught me that I'm better at than my father."`,
        `At the door she says, without looking up: "Thank you for worrying. Nobody does. They worry *about* me. It isn't the same thing."`
      ],
      end: true
    },
    t_iso_3c: {
      text: [
        `She looks surprised, then pleased, then businesslike. She pulls the candle closer and your chair beside hers and shows you: how the columns run, how a debt walks from one page to another, how you can see a lie in a ledger the way you'd see a limp in a horse, because the numbers have to favour one leg to hide it.`,
        `Her shoulder is against yours. Her hair is coming out of its pins. Her finger moves down the columns and yours follows it.`,
        `@isolde: "There," she says, very softly. "Do you see it? Where it limps?"`,
        `You see it. You aren't looking at the ledger.`
      ],
      end: true
    }
  },
  side: [
    { id: 'e2_c_pits', kind: 'contract', title: 'The Thing in the Tannery Pits', desc: 'Master Crouch of the Tanners\' Guild will pay forty silver to the man who clears the old pit of what is in it. No priests.', level: 3, start: 'c_pits_1' },
    { id: 'e2_c_mill', kind: 'contract', title: 'Coldbrook Mill', desc: 'An old miller on the Thornwood road owes the March sixty silver, and the Marshal is collecting.', level: 3, start: 'c_mill_r' },
    { id: 'e2_t_pell', kind: 'talk', who: 'pell', title: 'What he heard through the door', start: 't_pell_1', if: "inParty('pell')" },
    { id: 'e2_t_hob', kind: 'talk', who: 'hob', title: 'Feet first', start: 't_hob_1', if: 'f.e2_hob_hired' },
    { id: 'e2_t_tamsin', kind: 'talk', who: 'tamsin', title: 'Eels, and a gran in the fen', start: 't_tam_1', if: "inParty('tamsin')" },
    { id: 'e2_t_isolde', kind: 'talk', who: 'isolde', title: 'Tidy arithmetic', start: 't_isolde_1', if: 'f.e2_isolde_hired' }
  ]
});
