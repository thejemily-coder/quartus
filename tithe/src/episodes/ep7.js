/* TITHE — Season One, Episode 7: "Wolves at the Gate" */

/* ---- E7 additions to static data ---- */
TITHE.ENEMIES.e7_bog = { name: 'The Sleepers of Gallowmere', hp: 80, def: 8, arm: 4, dmg: [14, 20], acc: 9, xp: 0, silver: [0, 0], tags: ['undead', 'under', 'boss'], resist: ['fire'],
  moves: [
    { n: 'Many Hands', w: 3, m: 1, tele: 'leather hands come up out of the black water, more of them than there are bodies' },
    { n: 'The Weight of Peat', w: 1, m: 1.6, heavy: true, fx: 'stun', tele: 'the bog itself leans toward you' },
    { n: 'Lullaby', w: 1, m: .6, fx: 'weaken', tele: 'somewhere above you an old woman starts to hum' }
  ],
  loot: [],
  lore: 'Not one corpse but all of them: a thousand years of fen-folk laid down in the peat with their nooses and their bowls of milk, waiting for the one burial that matters. They are patient. They have never needed to be anything else.' };
TITHE.CODEX.e7_starfire = { title: 'Starfire', text: 'The cold blue fire a Lampwarden calls down into her blade. It burns the undead, the Under-things, the heretic and the hand that holds it. Brannagh Vey laid it on you to make you confess. It went through you like light through a window, looking for someone who was not there.' };
TITHE.CODEX.e7_coup = { title: 'The Night of the Letter Knife', text: 'Lord Aurel Varane died in his solar with a letter knife in his throat. Ser Konrad Hask, who held him while he died, named the killer to the guard, weeping: the dead sergeant, Ansel Dray. By midnight there was a price on your head of two hundred silver, and every door in Harrowgate had to decide what it was worth.' };

TITHE.episode({
  n: 7, title: 'Wolves at the Gate',
  logline: 'Lord Varane is murdered and the whole town hunts the man accused of it; by dawn Ansel has been caught, questioned, rescued, and delivered.',
  start: 'cold1',
  credits: ['ansel', 'hask', 'varane', 'tamsin', 'brannagh', 'oriel', 'abbess', 'gall', 'mags', 'hob', 'ulla', 'pell', 'moll', 'wat', 'isolde', 'cassius'],
  previously: [
    { t: 'Six years ago, at Corran\'s Ford, Konrad Hask sold his company to the slaughter. Four hundred and five men died on the riverbank. Ansel Dray died with them. He did not stay dead.' },
    { t: 'In the deep salt, the Tallyman looked for Ansel in his ledger. "You\'re not here."' },
    { if: "f.e5_ledger_to==='varane'", t: 'Ansel gave Lord Varane the Saltdown ledger: Hask\'s trade in Hollowed men, in an overseer\'s careful hand.' },
    { if: "f.e5_ledger_to==='isolde'", t: 'Ansel gave Lady Isolde the Saltdown ledger. She read it in one sitting and did not sleep.' },
    { if: "f.e5_ledger_to==='brannagh'", t: 'Ansel gave the Saltdown ledger to the Lampwarden. She read the word "Lanternhold" eleven times.' },
    { if: "f.e5_ledger_to==='kept'", t: 'Ansel kept the Saltdown ledger. Someone noticed it was gone.' },
    { if: "f.e5_hask_knows", t: 'Konrad Hask learned that the evidence existed. He stopped waiting for spring.' },
    { t: 'At the Feast of Lanterns, someone tried to kill Lord Varane. Ansel stopped them. Prince Cassius watched him do it with great interest.' },
    { if: "f.e5_brannagh_spar", t: 'Lampwarden Brannagh Vey fought him in the yard at midnight, and walked away breathing hard.' },
    { if: "f.e6_tam_stopped", t: 'In the Barrow of the Nine Crowns, in the dark, Tamsin stopped him. "Not like this."' },
    { if: "!f.e6_tam_stopped", t: 'In the Barrow of the Nine Crowns, in the dark, Tamsin nearly kissed him.' },
    { t: 'The Barrow-King put a hand on his chest. "You are a door."' }
  ],
  nextTime: [
    'Fingers in the peat above you, clawing. You can hear the nails going.',
    '"Get up, Sergeant. Get *up*. I\'m not burying you. I won\'t."',
    '"She\'s going to empty fourteen children to buy Konrad Hask a title."'
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    cold1: {
      loc: `Varane Keep — the Lord's solar, past midnight`,
      text: [
        `A fire gone to coals. Rain against leaded glass. Maps of a canal that was never dug, pinned over the hearth so long the corners have curled like dead leaves.`,
        `Lord Aurel Varane sits with his bad foot up on a stool, wrapped in a wet cloth that smells of vinegar. He looks older than fifty-five. He looks like a man who has been sitting in the same chair since he was born.`,
        `Ser Konrad Hask pours. He does it the way he does everything: as if it were a small kindness he had thought of himself. Two cups. The good Corvane red, the last of the cask.`,
        { if: "f.e5_ledger_to==='varane'", t: `On the desk between them lies a ledger with a broken clasp: the Saltdown overseer's book. Hask does not look at it. He puts the jug down on it, gently, as if it were any book at all.` },
        { if: "f.e5_ledger_to==='isolde'", t: `@hask: "Is Lady Isolde still up with her accounts? She works too hard, my lord. I worry for her." He says it so warmly that the old man smiles.` },
        { if: "f.e5_ledger_to==='brannagh'", t: `@hask: "The Lampwarden has been asking for the Saltdown tallies. All of them, going back three years. I told her you'd want to know."` },
        { if: "f.e5_ledger_to==='kept'", t: `@hask: "Our dead sergeant has a book that doesn't belong to him, my lord. I'd like it back. That's all. I'd just like it back."` },
        `@varane: "You didn't come up here at this hour to pour my wine, Konrad."`,
        `@hask: "No, my lord. I came to talk about my father."`
      ],
      next: 'cold2'
    },
    cold2: {
      text: [
        `He sits, uninvited, in the chair across the hearth. He leans forward with his forearms on his knees, like a man at a deathbed. His face in the coal-light is handsome and ruined and entirely sincere.`,
        `@hask: "He was a tanner in Corvane. The Lime Street pits. Honest man. Honest the way a fence-post is honest: it never occurred to him to be anything else. He paid the Lamp its tithe every year of his life, to the penny, and the winter the hides went bad and he came up short, the tithe-wardens flogged him at the edge of his own pit. In front of me. I was nine. He died of it inside the week."`,
        `@hask: "I remember thinking: he's done everything right. Every single thing. And here's what it's bought him."`,
        `He turns his cup. The wine climbs the side and falls back.`,
        `@hask: "You remind me of him, my lord. You've done everything right. You paid your tithes and kept your oaths and married your girl to a prince. And you've lost. It isn't your fault. It's just the arithmetic."`,
        `@varane: "Konrad." The old man has gone very still. "Konrad, what have you done?"`
      ],
      next: 'cold3'
    },
    cold3: {
      text: [
        `Hask stands. He picks up the letter knife from the desk: a slim silver thing, a gift from the Crown, the Aldermere stag on the hilt. He looks at it for a moment as if surprised to find it in his hand.`,
        `Then he leans down and puts it into the side of Lord Varane's throat, under the ear, all the way to the hilt, and turns it.`,
        `The sound the old man makes is not loud. It is wet and astonished. His hands come up and find Hask's wrist and hold it, the way a child holds a parent's hand on ice.`,
        `Hask does not pull away. He kneels. He gathers the old lord against his chest and holds him while the blood comes, hot, over both of them, and down the chair, and into the vinegar cloth on the gouty foot.`,
        `@hask: "There. There. I know. I know. Shh."`,
        `It takes a long time. Longer than you would think. Hask strokes the thin grey hair the whole while. His own eyes are wet. That is the worst part: none of it is a performance. He is grieving. He is grieving and he is doing it anyway.`
      ],
      next: 'cold4'
    },
    cold4: {
      text: [
        `When it is done he lays the body back in the chair, closes the eyes with his thumb, and straightens the cloth on the foot.`,
        `He wipes his face. He does not wipe his hands.`,
        `Then he goes to the door and throws it open and roars down the stair, and his voice cracks in the middle like a boy's:`,
        `@hask: "GUARD! GUARD, TO ME! My lord Varane is dead! Saints, oh Saints— my lord Varane is dead, and the man who did it is the dead sergeant! I saw him on the stair! *Ring the bell!* RING THE BELL!"`,
        `Below, in the dark, the great bell of Varane Keep begins to toll.`,
        `Hask stands in the doorway with his lord's blood drying on his hands and weeps, and weeps, and weeps.`
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { cast: ['hask', 'varane'], codex: ['e7_coup'] } },
      next: 'hen0'
    },

    /* ======================= ACT ONE: THE GUTTED HEN ======================= */
    hen0: {
      fx: {
        party: { add: ['pell', 'ulla'], remove: ['tamsin', 'brannagh', 'oriel', 'mags', 'rusk', 'hob'] },
        quest: [{ id: 'e7_night', title: 'The Night of the Letter Knife', state: 'active', note: 'Lord Varane is dead. The bell of Varane Keep is ringing, and Hask is shouting your name.' }, { id: 'hask', note: 'Hask murdered Lord Varane in his solar and named you as the killer.' }]
      },
      route: [{ if: 'f.e2_hob_hired', fx: { party: { add: ['hob'] } }, go: 'hen1' }, { go: 'hen1' }]
    },
    hen1: {
      loc: 'The Gutted Hen — the same night',
      card: { kind: 'act', title: 'Part One', sub: 'The Bell' },
      text: [
        `Late. The common room down to its dregs: two tanners asleep on their arms, a carter singing to his own cup, the fire banked. Rain on the shutters. The lime-stink of the Bottom coming in under the door like it pays rent.`,
        `Ulla is on her third supper, which she describes as her second. Pell is reading a book of heresies with his nose an inch from the candle and a cup he keeps pretending is water.`,
        { if: 'f.e2_hob_hired', t: `Hob is oiling your spare boots on the bench by the fire, very seriously, because you once said a man is only as good as his feet and he has never forgotten a single thing you have said.` },
        `Tamsin went out at dusk. Air, she said. She has been quiet since the barrow. You have been letting her be quiet, because you are a coward about some things.`,
        `The Company Roll is open on the table in front of you. You have reached the Ws.`,
        `Then the bell begins.`
      ],
      choices: [
        { t: 'Count the strokes.', go: 'hen2_count' },
        { t: 'Go to the window.', go: 'hen2_window' },
        { t: 'Roll up the Roll. Tie the cord. Buckle on Widow.', go: 'hen2_widow', fx: { st: 1 } }
      ]
    },
    hen2_count: {
      text: [
        `It isn't the hours. It isn't the Evening Lamp. It is the slow one, one stroke and a long breath and one stroke, that you have only heard rung twice in your life: once for a king, once for a bishop.`,
        `@pell: "That's a death-knell." Pell has put his book down. "That's the Keep. Lamp keep us, that's the *Keep*."`
      ],
      next: 'hen3'
    },
    hen2_window: {
      text: [
        `You crack the shutter. Up the hill the Keep is lit in every window like a lantern somebody has kicked over. Torches moving on the wall-walk. Torches pouring out of the gate and down into the town, splitting at every corner, the way water splits when it knows exactly where it is going.`,
        `They are coming downhill. Toward the Bottom.`
      ],
      next: 'hen3'
    },
    hen2_widow: {
      text: [
        `You don't know why yet. Your hands know. Sixteen years of soldiering have taught them that nothing good has ever been announced at this hour.`,
        `Ulla looks at you over a chicken leg, sees your face, and puts the chicken leg down. That, more than anything, is how you know it is bad.`
      ],
      next: 'hen3'
    },
    hen3: {
      text: [
        `The back door bangs. Mags comes in from the yard with a pot-boy from the Keep kitchens hanging off her arm like a wet cat. He is fourteen and he has run the whole way and he is crying without noticing.`,
        `@mags: "Tell him. Tell him what you told me."`,
        `@narrator: "His lordship," the boy gets out. "His lordship's dead. In his chair. The Marshal found him. There's blood all up the stair, and the Marshal come down with it all over him and he was crying, sir, he was crying like a woman, and he says—"`,
        `He stops. He looks at you. He has worked out who you are.`,
        `@mags: "Say it, Nab."`,
        `@narrator: "He says it was you. The dead sergeant. Two hundred silver. Alive or—" The boy swallows. "Or not."`,
        { if: "f.e2_hask_job==='took'", t: `@narrator: "And he says—" Nab screws his face up to get it right. "*My own town sword. I pinned the badge on him myself.*"` },
        { if: "f.e5_keep_sergeant", t: `@narrator: "And that his lordship gave you men of your own, and you did this anyway. He was crying when he said it, sir. Everybody saw."` }
      ],
      choices: [
        { t: '"I\'ve been in this room since sundown. Forty people saw me."', go: 'hen4_alibi' },
        { t: '"Hask."', go: 'hen4_hask' },
        { t: 'Say nothing. Put a coin in the boy\'s hand and close his fingers on it.', go: 'hen4_coin', fx: { rep: { town: 1 }, silver: -2, set: { e7_nab_coin: 1 } } }
      ]
    },
    hen4_alibi: {
      text: [
        `@mags: "Forty tanners and a carter who can't tell his left foot from a Lamp-day." Mags says it gently, which is how you know she is frightened. "Who do you think they'll ask, love? And who do you think they'll believe?"`,
        `@pell: "The Marshal's word against the dead sergeant's," Pell says. "With the Lord of Harrowgate's blood on the Marshal's hands. Oh, he's good. He's *good*. He's made his alibi out of the murder itself."`
      ],
      next: 'hen5'
    },
    hen4_hask: {
      text: [
        `It is the only word you say. You don't need any others. Everyone in the room who knows anything knows exactly what it means.`,
        `@ulla: "So." Ulla wipes her fingers one at a time on the table. "The pretty captain finally bites the hand. Good. Now we know where his teeth are."`,
        { if: "f.e1_hask_meeting==='spat'", t: `> Four hundred and five, Captain. And one lord. You never could leave a sum alone.` }
      ],
      next: 'hen5'
    },
    hen4_coin: {
      text: [
        `The boy stares at the silver. Then at you. Two hundred silver is more money than his whole street will see in ten years, and he has just run across the town in the rain to tell you about it.`,
        `@narrator: "I didn't see you," he says. "I'll tell 'em. I didn't see you anywhere." He goes out the back like a hare.`,
        `@mags: "Good boy," Mags says. "His mam drinks here. Best customer I've got."`
      ],
      next: 'hen5'
    },
    hen5: {
      text: [
        `Then, out in the street, boots. A lot of them. The rhythm of men who have marched together for years: Hask's men, Varane's blue, and among them something else, a heavier tread and a glint of white enamel. Lampwardens.`,
        `A fist hits the front door so hard the bar jumps in its brackets.`,
        `@narrator: "OPEN IN THE MARSHAL'S NAME!"`,
        `Mags looks at you. Ulla stands up, and keeps standing up, and the carter stops singing.`,
        `@mags: "Cellar," Mags says. "Behind the beer. Or the roof. Or you fight in my common room, and then, love, I swear by my sainted husbands I will help you."`
      ],
      choices: [
        { t: 'The cellar. Hide, and let Mags lie for you.', go: 'hen_cellar' },
        { t: 'Up and out over the roofs. Now, before they think of the back.', go: 'hen_backyard' },
        { t: '"Unbar it." Draw Widow. "Let them come to me."', go: 'hen_open' }
      ]
    },
    hen_cellar: {
      loc: 'The Gutted Hen — the cellar',
      text: [
        `Mags rolls aside a hogshead that ought to take two men and does it with her hip. Behind it, a gap in the old wall, and a dark, and the smell of earth.`,
        { if: "f.e3_edda==='saved' && f.e3_edda_after==='cellar'", t: `Someone is already in there: Edda Moss, the fen girl the Lamp never got to burn, wrapped in a blanket on a sack of barley, her eyes very big. "Sergeant," she whispers. "Is it the Lamp again?" "Not just the Lamp," you tell her. "Move up."` },
        { if: "!(f.e3_edda==='saved' && f.e3_edda_after==='cellar')", t: `Someone has slept down here recently: a blanket on a sack of barley, a candle-end, a child's wooden horse. Mags hides people. Of course she does. She just doesn't talk about it.` },
        `The hogshead rolls back. Dark. Above you, the bar comes off the door, and the common room fills with boots.`,
        `@narrator: "Mistress Halloran. We're looking for Ansel Dray."`,
        `@mags: "Then you've come to the wrong house, sergeant, because this one only serves the living."`
      ],
      next: 'hen_cellar2'
    },
    hen_cellar2: {
      text: [
        `Through the floorboards: laughter, not kind. The sound of benches going over. A crock smashing. A man's voice saying *search it all*, and another saying *the girl, what about the pot-girl, she'll know*, and a girl's voice, high and frightened, and then a slap.`,
        `Then Mags's voice, very level: "Take your hand off her."`,
        `Then a much louder slap. Then a man's yell. Then a great many things happening at once.`,
        `@ulla: "Well," Ulla breathes in the dark beside you. "That's decided, then."`
      ],
      choices: [
        { t: 'Go up. Now.', go: 'hen_fight_pre', fx: { set: { e7_mags_upstairs: 1 } } },
        { t: 'Wait. Count five. Let them commit, then hit them from behind.', check: { stat: 'wits', dc: 13, pass: 'hen_ambush', fail: 'hen_fight_pre' } }
      ]
    },
    hen_ambush: {
      text: [
        `You wait. It is the longest five of your life. You hear Mags take a punch and give back two.`,
        `Then the hogshead goes over and you come up the cellar stair into the backs of four men who are all, every one of them, looking at a forty-one-year-old innkeeper with a cleaver.`,
        `The first one never turns around.`
      ],
      fx: { xp: 25 },
      next: 'hen_fight_small'
    },
    hen_backyard: {
      text: [
        `Out the back, into the yard, into the rain. The privy, the rain barrel, the low tiled roof of the brewhouse that goes up to the eaves of the Hen and from there to the whole sloping wet staircase of Harrowgate's rooftops.`,
        `You are halfway up the barrel when the yard gate bursts in and the torches come through it.`,
        `Too late. Back in through the kitchen, and into the common room, where the front door is coming off its hinges and Mags is standing behind the bar with a cleaver in each hand.`
      ],
      next: 'hen_fight_pre'
    },
    hen_open: {
      text: [
        `Mags lifts the bar. The door slams inward and the first man through it is a Varane sergeant with a spear, and the spear finds nothing, because you are already beside the door and not in front of it.`,
        `He sees you. Behind him, the street is full of torches.`,
        `@narrator: "Dray. Ansel Dray, by order of the Marshal of—"`,
        `@ansel: "Come in and get out of the rain, sergeant. You'll catch your death."`
      ],
      next: 'hen_fight_pre'
    },
    hen_fight_pre: {
      text: [
        `@mags: "I *told* you lot," Mags says, coming over the bar like an avalanche in an apron, "I said fight in my common room and I'll put you through the window. I never said *which* of you."`
      ],
      next: 'hen_fight'
    },
    hen_fight: {
      fight: { foes: ['man_at_arms', 'man_at_arms', 'crossbowman'], allies: ['mags', 'ulla', 'pell'], title: 'The Common Room', win: 'hen_won',
        intro: 'Tables, benches, a fire, and a widow with a cleaver. Kill the crossbow before it kills someone you like.' }
    },
    hen_fight_small: {
      fight: { foes: ['man_at_arms', 'crossbowman'], allies: ['mags', 'ulla', 'pell'], title: 'The Common Room', win: 'hen_won',
        intro: 'You came up behind them. Make it count.' }
    },
    hen_won: {
      text: [
        `It ends the way bar fights end: all at once, in a silence full of breathing.`,
        `One of them is face-down in the fire and nobody is in any hurry to pull him out. One went through the window; Mags is looking at the hole with grim satisfaction, like a woman who has been proven right about the weather. The crossbowman is sitting against the wall holding his own guts in his lap and looking at them with an expression of polite disbelief.`,
        `The pot-girl is under a table with her cheek swelling purple. Mags pulls her out and holds her face in both hands and looks at it, and says nothing, and kisses her forehead, and passes her to Pell.`,
        `The last of them, a boy in Varane blue with no beard yet, is on his knees with Ulla's hand around the back of his neck like a mother cat's teeth.`
      ],
      choices: [
        { t: '"What did Hask tell you?"', go: 'hen_boy_talk' },
        { t: 'Put him through the window after his friend.', go: 'hen_boy_window' },
        { t: '"Go home. Tell them you never found me."', go: 'hen_boy_go', fx: { rep: { town: 1 } } }
      ]
    },
    hen_boy_talk: {
      text: [
        `@narrator: "That you come over the garden wall at midnight. That he saw you on the stair, plain as day, with the knife in your hand." The boy is trembling under Ulla's grip. "He held his lordship while he died. He *held* him, sir. Everybody saw the blood on him. He wouldn't wash it. Said he wanted folk to see."`,
        `@pell: "Of course he did," Pell murmurs. "A man with blood on his hands is either the killer or the mourner, and only one of them leaves it on."`,
        `@narrator: "And the Lampwarden. She's with us. She says the Lamp has a claim on you. She says she's to take you alive." He looks up at you. "Is it true you can't die?"`,
        `@ansel: "No. I'm just bad at it."`
      ],
      fx: { quest: { id: 'e7_night', note: 'Hask claims he saw you on the stair with the knife. He has kept his lord\'s blood on his hands so everyone can see it. Brannagh\'s Lampwardens ride with his men; she wants you alive.' } },
      next: 'hen_boy_go'
    },
    hen_boy_window: {
      text: [
        `Ulla doesn't even ask. She lifts him by the collar and the belt and he goes out of the window-hole into the street in a burst of glass and lead, and lands in the gutter, and lies there, and then gets up and runs. Good for him.`,
        `@mags: "I'm adding that to your slate."`
      ],
      next: 'hen_after'
    },
    hen_boy_go: {
      text: [
        `Ulla lets go. The boy goes out of the front door without picking up his spear, and stands in the street for a second as if he can't remember which way is home, and then runs uphill.`,
        `@ulla: "He'll tell them where we are."`,
        `@ansel: "They know where we are."`
      ],
      next: 'hen_after'
    },
    hen_after: {
      text: [
        `Out in the Bottom, a horn. Answered from the Market Stair, and from the Lamp Stair, and from the East Gate. Then the long iron groan of the portcullis coming down, and another, and another. Every gate in Harrowgate shut at once. The net, drawing in.`,
        `@mags: "Roof," Mags says. "Then the Bottom, then the Water Gate, then the postern by the east wall. It's how my Davey used to come home when he owed the watch money." She is tying a rag round her knuckles. "I'm staying."`,
        `@ansel: "They'll burn the place."`,
        `@mags: "Let them try. I've been burned before. I was married." She looks at you, very tired and very fond. "Go on. I didn't tip my best barrel over for you to stand in my doorway admiring the furniture."`
      ],
      choices: [
        { t: 'Kiss her. Hard and quick, the way you would in a war.', if: 'f.e2_mags', go: 'hen_mags_kiss', fx: { bond: { mags: 1 } } },
        { t: '"When this is done, I\'m paying for the window."', go: 'hen_mags_window' },
        { t: '"Hide the girl. Hide anyone who comes. I\'ll owe you."', go: 'hen_mags_owe', fx: { rep: { town: 1 } } }
      ]
    },
    hen_mags_kiss: {
      text: [
        `She tastes of beer and blood from a split lip. She grabs a fistful of your shirt and holds you there a second longer than you meant, and lets you go, and shoves you, hard, at the back door.`,
        `@mags: "Don't you dare die, you great dead lump. I've only just got you trained."`
      ],
      next: 'hen_hob'
    },
    hen_mags_window: {
      text: [
        `@mags: "You'll pay for the window and the benches and the crock and the good mugs, Ansel Dray, and you'll pay *in person*, so you'd better be alive to do it."`
      ],
      next: 'hen_hob'
    },
    hen_mags_owe: {
      text: [
        `@mags: "You already owe me." She jerks her head at the cellar. "Half this street's been down there one time or another. The Lamp's had a long list for a long while. Go."`
      ],
      next: 'hen_hob'
    },

    /* ---- Hob's errand ---- */
    hen_hob: {
      route: [{ if: 'f.e2_hob_hired', go: 'hob_choice' }, { go: 'hob_none' }]
    },
    hob_none: {
      text: [
        { if: 'f.e7_nab_coin', t: `Nab the pot-boy is crouched by the kitchen door with your coin still in his fist, not gone after all, waiting to be useful.`, else: `Nab the pot-boy is crouched by the kitchen door, not gone after all, waiting to be useful.` },
        `@narrator: "Sir. Sir, there's more. At the Keep. Mistress Halloran's stable lad was up there tonight with a cart of hay, Fenner's lad, the freckly one. When the bell went, the soldiers came into the stable yard to take the horses, and he went at them. With a pitchfork. He was shouting it weren't you. He was shouting that you killed the rat-king and you wouldn't." He wipes his nose. "They put a spear through him. He's lying in the yard still."`,
        `@mags: "Hob," Mags says, from the doorway. She has gone grey. "That's my Hob. He does my horses." She puts her hand flat on the doorframe as if the house has tilted.`,
        `You remember him, vaguely. A gangly boy at the Hen's stable door with his mouth open, staring at you like you were something out of a song. You sent him home. You never really learned his name. You learn it now.`,
        `> Hob Fenner. Somebody should write it down.`
      ],
      fx: { set: { e7_hob: 'none' } },
      next: 'roof1'
    },
    hob_choice: {
      text: [
        `Hob is on his feet with his pitchfork in his hands and his whole face shining, terrified and thrilled, a boy in a ballad.`,
        `@hob: "What do we do, Sergeant? Tell me what to do. I'll do anything."`,
        `You need someone to reach the Keep before Hask turns his grief on the only other person in Harrowgate who can name him. Lady Isolde is up there, under his guard, alone with the body.`,
        `And you need someone to run ahead to the postern in the east wall and see if it's open, or who's on it, before you lead your people into a crossbow.`,
        `Hob has carried Mags's hay and messages up to the Keep's stables a hundred times; he knows the old drain under their tack-room that the grooms use to sneak out. He is also the fastest runner you have.`,
        { if: 'bond.hob>=3', t: `He is watching your face the way he does on the practice ground, waiting for the word. He has got better. He listens now. He's learned to fall without breaking anything.`, else: `He is already bouncing on his toes, half-out of the door. He has never once done exactly what you told him. He is too brave, and he does not know yet what brave costs.` },
        { if: 'f.e2_hob_trained || f.e4_hob_trained || f.e6_hob_trained', t: `He holds the pitchfork the way you taught him, low and short, butt tucked against his hip. A month ago he held it like a boy holding a broom.` }
      ],
      choices: [
        { t: '"The Keep. Go through the stables to Lady Isolde. Tell her I didn\'t do it, and tell her not to eat or drink anything Hask gives her. Then hide. Don\'t come back for me."', go: 'hob_to_isolde', fx: { set: { e7_hob_sent: 'isolde' } } },
        { t: '"The postern. Run ahead, see who\'s on it, wait for us in the dark. Don\'t be a hero."', go: 'hob_to_gate', fx: { set: { e7_hob_sent: 'gate' } } },
        { t: '"You stay with me. Where I can see you."', go: 'hob_stay', fx: { set: { e7_hob_sent: 'stay' } } }
      ]
    },
    hob_to_isolde: {
      text: [
        `His face falls for a second. He wanted to be with you. Then he squares his narrow shoulders.`,
        `@hob: "Not to eat or drink nothing. I didn't do it. Then hide." He repeats it like a lesson. "The Marshal's men don't know the old drain under the tack-room. I do. I'll be there before they've finished crying."`,
        { if: 'bond.hob>=3', t: `He stops at the door. Comes back. Grips your forearm, soldier's grip, the way you showed him. "Don't die, Sergeant." Then he is gone into the rain, and he does not look back, because you told him once that looking back is how you trip.`, else: `He goes out of the door at a dead run, and at the corner of the yard he stops and looks back at you, at the torches coming down the hill, at you again. You can see him thinking about it. Then he goes.` }
      ],
      fx: { party: { remove: ['hob'] } },
      next: 'roof1'
    },
    hob_to_gate: {
      text: [
        `@hob: "The postern. Right. I can do that." He grins, gap-toothed and grey with fear. "I'll have it open for you, Sergeant. You'll see."`,
        `@ansel: "I said *see who's on it*. Not open it. Hob—"`,
        `But he is gone, out of the back and over the wall, pitchfork and all, his boots slapping in the wet.`
      ],
      fx: { party: { remove: ['hob'] } },
      next: 'roof1'
    },
    hob_stay: {
      text: [
        `He lights up like a lamp. He takes his place at your left shoulder, exactly where you've told him to stand a hundred times, and grips his pitchfork, and is ready to die for you, and the worst of it is that you can see that he is.`,
        `@hob: "Like the rat-king," he says. "Together."`
      ],
      next: 'roof1'
    },

    /* ======================= ACT TWO: THE HUNT ======================= */
    roof1: {
      loc: 'The rooftops of Harrowgate — night, rain',
      card: { kind: 'act', title: 'Part Two', sub: 'The Hunt' },
      text: [
        `Harrowgate from above, at night, in the rain: a staircase of wet slate and rotten thatch tipping down the hill toward the river, chimneys like broken teeth, and between them, in every street, torches.`,
        `Ulla comes up onto the brewhouse roof the way a bear comes up a tree: with total commitment and no grace whatsoever. Three slates go into the yard. Then four.`,
        `@ulla: "In Nordvik," she whispers, "we have houses on the *ground*. Like sensible people."`,
        `@pell: "In the Lanternhold we had stairs. I have never in my life wished so much to be back in the Lanternhold." Pell is lying flat on the ridge with his eyes shut, holding onto a chimney like it is his mother.`,
        `Ahead, the roofs run down to the Tanners' Bottom in a long ragged line. On the bell-tower of St. Ivo's, black against the blue glow of the Lanternhold, two shapes. The rain catches on something across their arms. Crossbows.`
      ],
      choices: [
        { t: 'Go fast and low along the ridges. Get under the tower before they see you.', check: { stat: 'finesse', dc: 14, pass: 'roof_quiet', fail: 'roof_seen' } },
        { t: 'Throw a slate into the next street. Let them look the wrong way.', check: { stat: 'wits', dc: 13, pass: 'roof_quiet', fail: 'roof_seen' } },
        { t: 'Straight at them. Rain makes a crossbow string sulk. You have a minute before they span.', go: 'roof_rush' }
      ]
    },
    roof_quiet: {
      text: [
        `You go across the roofs like a cat across a kitchen, which is to say not silently but fast enough that it doesn't matter. Ulla follows in your footprints and somehow only breaks two more slates.`,
        `The bell-tower's ladder comes down to the roof of the chandlery. You are at the top of it before the first crossbowman turns around, and he only has time to open his mouth.`,
        `The second one has his bow spanned and pointing at your belly.`
      ],
      fx: { xp: 30 },
      next: 'roof_fight_small'
    },
    roof_seen: {
      text: [
        `A slate goes. Then the gutter under your boot. You catch the edge of the roof with one hand and hang there over a forty-foot drop into a dyer's yard, and the crossbowmen on the tower look straight at you, and grin, and shout down into the street.`,
        `A bolt goes through the thatch a hand from your head. Another hits Pell's chimney and sprays him with brick.`,
        `By the time you've hauled yourself up there are three of them, and one has come up the chandlery ladder to meet you.`
      ],
      fx: { hp: -6 },
      next: 'roof_fight'
    },
    roof_rush: {
      text: [
        `You run. Over the ridge, down the slope, across a gap between two houses that you do not let yourself measure, and onto the chandlery roof with a crash that brings the chandler's wife to her window screaming.`,
        `The first bolt misses. The second takes a bite out of your shoulder on its way past. Then you are on the ladder, and they are spanning too slow, and you are among them.`
      ],
      fx: { hp: -4 },
      next: 'roof_fight'
    },
    roof_fight: {
      fight: { foes: ['crossbowman', 'crossbowman', 'man_at_arms'], allies: ['ulla', 'pell'], title: 'The Bell-Tower of St. Ivo', win: 'roof_won',
        intro: 'Wet slate, a forty-foot drop, and men who get paid by the bolt.' }
    },
    roof_fight_small: {
      fight: { foes: ['crossbowman', 'man_at_arms'], allies: ['ulla', 'pell'], title: 'The Bell-Tower of St. Ivo', win: 'roof_won',
        intro: 'One of them is still spanning. Don\'t let him finish.' }
    },
    roof_won: {
      text: [
        `The last of them goes off the tower backwards with his crossbow still in his hands and his mouth open. He lands in the dyer's yard among the vats. The rain dilutes him slowly into the madder red.`,
        `From the tower top you can see the whole town. The Keep, lit in every window. In the high window of the east tower, the one they say is Lady Isolde's, a single candle, and a shape standing in front of it, very straight, very still.`,
        `Below the Lanternhold's blue lantern, in the yard, white shapes moving. Lampwardens, mustering. And at the gate of the Keep, a white horse you'd know anywhere, its rider in a cloak, talking to a man in gold.`
      ],
      choices: [
        { t: 'Watch the Keep a moment longer.', go: 'intercut1' },
        { t: 'Move. Watching never saved anybody.', go: 'bottom1' }
      ]
    },

    /* ---- INTERCUT: THE KEEP ---- */
    intercut1: {
      loc: 'Varane Keep — the solar',
      text: [
        `~ INTERCUT: VARANE KEEP.`,
        `The body is still in the chair. Somebody has put a sheet over it and the blood has come through in a long dark map, like a coastline.`,
        `Lady Isolde Varane sits on the floor beside the chair with her father's hand in her lap, outside the sheet, holding it. She has not cried. Her hair has come down out of its pins. There are two men-at-arms at the door and they are not there to protect her.`,
        { if: "f.e7_hob_sent==='isolde'", t: `Her other hand is closed in a fist on her knee. Inside it, if anyone looked, a twist of straw from a stable floor, pressed there twenty minutes ago by a freckled boy who came up through the tack-room drain soaked to the waist, and whispered nine words, and was gone.` },
        `Hask comes in. He has still not washed his hands. He kneels across the chair from her, the way he knelt for her father.`,
        `@hask: "My lady. I'm so sorry. I am so very sorry. I was too slow on the stair. I'll never forgive myself."`,
        `@isolde: "You held him."`,
        `@hask: "I did. Until the end. He wasn't alone."`,
        `Isolde looks at his hands for a long moment. Then at his face.`,
        `@isolde: "Thank you, Ser Konrad," she says. "I won't forget it."`,
        `> You can't hear any of it. You don't need to. You've seen that look before, across a ledger on a wall-walk at dawn. She's counting.`
      ],
      next: 'intercut2'
    },
    intercut2: {
      text: [
        `In the doorway, leaning on the frame, Prince Cassius Aldermere eats a pear. He has been there throughout. He has the air of a man at a play he paid good money for and is mostly enjoying.`,
        `@cassius: "Ghastly. Simply ghastly. A dead man killing a living one; it's like something out of the Book of Embers." He wipes his fingers on a handkerchief. "Do catch him, Konrad. Alive, if you can. I'd so like to meet him again."`,
        `@hask: "The Lamp has asked for him, Highness."`,
        `@cassius: "The Lamp asks for everything. It's the most tiresome thing about it." Cassius smiles at Isolde, kindly, the way a man smiles at a horse he has bought. "My lady. My deepest condolences. We'll bring the wedding forward, I think. You'll want someone to lean on."`,
        `Isolde does not answer. Her hand tightens on her father's.`,
        `~ BACK TO: THE ROOFTOPS.`
      ],
      fx: { know: { cast: ['cassius', 'isolde'] } },
      next: 'bottom1'
    },

    /* ---- THE TANNERS' BOTTOM ---- */
    bottom1: {
      loc: 'The Tanners\' Bottom — night',
      text: [
        `You come down a drainpipe into the Bottom and the smell takes you by the throat like an old enemy. Lime. Piss. Rotting hide. Your father's trade. You were scraping fat off a calfskin in a yard just like this one when you were eight, with your knuckles cracked and bleeding from the lye, and you swore you'd never smell it again.`,
        `The tanning yard is open to the sky. Pits in rows, like graves, full of grey liquor that steams in the rain. Hides hanging on frames like flayed men.`,
        `And in the middle of it, a Lampwarden in white enamel with a drawn sword, and two Varane spears, and a tanner on his knees in the lime-mud with his wife screaming in the doorway behind him.`,
        `@narrator: "—where did he go? He's a tanner's son, they say. You people hide your own. *Where is the dead sergeant?*"`,
        `The Lampwarden lifts the sword. Its edge begins, very faintly, to glow blue.`
      ],
      choices: [
        { t: '"Here." Step out of the dark.', go: 'bottom_here', fx: { rep: { town: 1 } } },
        { t: 'Come in from behind, along the edge of the pits. Put one of them in the lime.', check: { stat: 'finesse', dc: 14, pass: 'bottom_lime', fail: 'bottom_here' } },
        { t: 'Let it happen. You can\'t save everybody, and they\'d have you.', go: 'bottom_leave' }
      ]
    },
    bottom_here: {
      text: [
        `They turn. The Lampwarden's helm is closed and his voice comes out of it flat and certain, like a bell that only knows one note.`,
        `@narrator: "Starless. The Warden said you'd come to the smell of your own kind." He kicks the tanner aside like a dog. "Kneel, and you'll be questioned. Stand, and you'll burn."`,
        `@ulla: "I like this one," Ulla says. "He talks like a skald. Badly."`
      ],
      next: 'bottom_fight'
    },
    bottom_lime: {
      text: [
        `You go round the pits in the dark, one foot in front of the other on the slick stone lip. The nearest spearman never hears you. You take him by the back of the collar and the belt and put him head-first into the lime-pit.`,
        `He comes up once. His face is already wrong: the skin of it gone white and slack and *sliding*, his eyes two boiled eggs. He doesn't scream because he can't get the air. He goes down again.`,
        `> Your father used to say lime would take a hide off a cow in a day. He was always proud of that.`,
        `The Lampwarden turns, and his sword is burning.`
      ],
      fx: { xp: 25 },
      next: 'bottom_fight_small'
    },
    bottom_leave: {
      text: [
        `You stay in the dark. You watch the sword come down. It is not a clean blow. The Lampwarden is not trying to make it clean.`,
        `The wife's screaming stops being words.`,
        `@pell: "Ansel." Pell is grey. "Ansel, for the love of anything—"`,
        `Then the Lampwarden looks up, straight at the shadow you are standing in, as if the dying man has told him something. Maybe he has.`,
        `@narrator: "There. *There!*"`
      ],
      fx: { bond: { pell: -1, ulla: -1 }, rep: { town: -1 } },
      next: 'bottom_fight'
    },
    bottom_fight: {
      fight: { foes: ['zealot', 'man_at_arms', 'man_at_arms'], title: 'The Tanning Yard', win: 'bottom_won',
        intro: 'Pits of lime on every side. Don\'t fall in. Help them fall in.' }
    },
    bottom_fight_small: {
      fight: { foes: ['zealot', 'man_at_arms'], title: 'The Tanning Yard', win: 'bottom_won',
        intro: 'His blade is burning blue. You have never stood in front of starfire. Your palm knows it before you do.' }
    },
    bottom_won: {
      text: [
        `The Lampwarden dies on his back in the mud between two pits with the blue going out of his sword like a lamp running dry. Under the helm he is maybe twenty. He has a boil on his chin. He calls for the Abbess at the end, not his mother.`,
        { if: "f.e7_hob_sent==='stay'", t: `Hob is shaking. There is blood up the tines of his pitchfork and he keeps looking at it. "I got one, Sergeant. I got one in the leg. I didn't— he was screaming—" "I know," you tell him. "I know. Breathe."` },
        { if: "f.e7_hob_sent==='stay' && (f.e2_hob_trained || f.e4_hob_trained || f.e6_hob_trained)", t: `He did it the way you showed him: in under the shield, out again, never mind the face. You wish, very badly, that you hadn't.` },
        `The tanner is alive. He crawls to his wife. He looks up at you over her shoulder, his face streaked white with lime, and doesn't say thank you, and doesn't need to.`,
        `@narrator: "Water Gate," he croaks. "They've put Dunstan Moll on the Water Gate. He's let no one through all night."`
      ],
      next: 'moll1'
    },

    /* ---- THE WATER GATE: MOLL ---- */
    moll1: {
      loc: 'The Water Gate — night',
      text: [
        `The Water Gate is not a gate so much as a low stone arch over the mill-race where the Bottom meets the east quarter. One lantern. Four spears. And in the middle of the arch, filling it like a cork fills a bottle, Sergeant Dunstan Moll.`,
        `He sees you coming. He doesn't raise the alarm. He watches you walk all the way up to the edge of his lantern-light with an expression like a man watching his own house burn.`,
        `@moll: "Sergeant Dray."`,
        `@ansel: "Sergeant Moll."`,
        { if: 'f.e5_keep_sergeant', t: `@moll: "Sergeant of the Keep," he says. "His lordship's own. I stood at the back when he gave you the four men. Two of them are dead tonight, did you know? They went to the solar when the bell rang, and the Marshal's lads met them on the stair."` },
        `@moll: "I've orders to take you. Alive if possible." He doesn't move. Nor do his men. "I've also known Aurel Varane twenty-two years. He stood godfather to my youngest. I'd like to know, before anything else happens, whether you did it."`
      ],
      choices: [
        { t: '"No. And you know who did. You saw his hands."', check: { stat: 'presence', dc: 15, pass: 'moll_turned_honest', fail: 'moll_fail' } },
        { t: '"I\'ve read Crake\'s ledger, Dunstan. All of it. Your page too." (Use the moneylender\'s book.)', if: "f.e1_crake==='kept'", go: 'moll_turned_crake' },
        { t: '"Ask anyone in the Bottom where I was tonight. Ask the tanner whose life I just saved."', req: 'rep.town>=3', reqLabel: 'Needs the town\'s trust (Town reputation 3+)', go: 'moll_turned_town' },
        { t: 'Draw Widow. "Step aside, Moll. I don\'t want to kill you. I will."', check: { stat: 'might', dc: 15, intimidate: true, pass: 'moll_stepaside', fail: 'moll_fail' } }
      ]
    },
    moll_turned_honest: {
      text: [
        `He looks at you a long time. The rain runs off his helmet-rim in a little curtain.`,
        `@moll: "I saw his hands," he says at last. "I was at the foot of the stair when he come down. Blood to the elbows, crying like a widow." He spits into the race. "And his sleeves rolled up. Rolled up *before*, Dray. Neat as you like. Man runs up a stair to save his lord, he don't stop to roll his sleeves."`,
        `He steps aside. His men look at him. He looks at them, and they step aside too.`,
        `@moll: "Postern's two hundred yards along the wall, past the ropewalk. I'll not have seen you. And when this goes the way it's going to go, you come and find me. I'm not done being a sergeant."`
      ],
      fx: { set: { e7_moll_turned: 1 }, xp: 50, quest: { id: 'e7_night', note: 'Sergeant Moll saw Hask come down the stair with his sleeves rolled up before the alarm. He has turned.' } },
      next: 'postern0'
    },
    moll_turned_crake: {
      text: [
        `His face goes still and then goes red, from the neck up, like wine poured into a cup.`,
        `@moll: "That's low."`,
        `@ansel: "It's a low night. Forty-two silver, at a rate that would make a Corvane banker blush. Crake's dead or ruined, and his book's in my saddlebag, and nobody else alive knows what's in it."`,
        `@moll: "And if I don't step aside, everyone will."`,
        `@ansel: "No," you say. "That's the thing, Dunstan. If you don't, I'll burn it anyway. I just wanted you to know I could have."`,
        `He stares at you. Then he laughs, once, a bark, without any joy in it at all.`,
        `@moll: "You're a strange bastard, Dray." He steps aside. "Postern's along the wall past the ropewalk. Go on. And when it's done, I'll want that page."`
      ],
      fx: { set: { e7_moll_turned: 1 }, xp: 50, quest: { id: 'e7_night', note: 'You had Crake\'s ledger and Moll\'s debt in it. You let him choose anyway. He turned.' } },
      next: 'postern0'
    },
    moll_turned_town: {
      text: [
        `Behind you, the tanner has come up out of the Bottom with a lantern. And his wife. And the dyer whose yard the crossbowman fell into, and two women from the ropewalk, and the boy Nab, and an old man with a mattock. More of them coming up out of the dark every second, not saying anything, just standing at your back.`,
        `Moll looks at them. They are his town. He has walked these streets thirty years.`,
        `@moll: "Well," he says, very quietly. "Well, then."`,
        `He steps aside. He takes his helmet off and holds it under his arm, the way a man does at a Kindling.`,
        `@moll: "Postern's past the ropewalk. Go on, before I think better of it. And Dray. When you come back for him, you come by the Water Gate. I'll be here."`
      ],
      fx: { set: { e7_moll_turned: 1 }, rep: { town: 1 }, xp: 50, quest: { id: 'e7_night', note: 'The Bottom came up out of the dark to stand behind you. Sergeant Moll turned.' } },
      next: 'postern0'
    },
    moll_stepaside: {
      text: [
        `You let him see the thing you used to let men see across a field before a charge. It is easier now. It is closer to the surface than it used to be.`,
        `Moll is a brave man. He is also fifty and has grandchildren. He steps back.`,
        `@moll: "I'll not die for him," he says, hoarse. "That's all you're getting, Dray. That's not me turning. That's me not dying."`,
        `He lets you pass. He does not look at you as you go.`
      ],
      fx: { xp: 25 },
      next: 'postern0'
    },
    moll_fail: {
      text: [
        `@moll: "No." He shakes his head, slowly, like an ox in a yoke. "No, I don't know anything. And neither do you, not that'd stand up in front of a Lord's justice, and there's no Lord to stand in front of, now, is there."`,
        `He looks at his men. He looks at you.`,
        `@moll: "I'll count to a hundred. Out loud. Then I do my job, and I'll not be sorry." He takes a breath. "One."`,
        `You go. Past the race, along the wall, past the ropewalk. Behind you, his voice in the rain, steady as a heartbeat: "Eleven. Twelve."`
      ],
      next: 'postern0'
    },

    /* ======================= THE POSTERN ======================= */
    postern0: {
      route: [
        { if: "f.e2_hob_hired && f.e7_hob_sent==='isolde' && bond.hob>=3", fx: { set: { e7_hob: 'alive' } }, go: 'postern1' },
        { if: "f.e2_hob_hired", fx: { set: { e7_hob: 'dead' } }, go: 'hob_dies1' },
        { go: 'postern1' }
      ]
    },
    hob_dies1: {
      loc: 'The east wall — the postern',
      text: [
        `The postern is a low iron-strapped door in the thickness of the east wall, at the end of a narrow cut between the ropewalk and the wall itself. A brazier. Two men in Varane blue.`,
        { if: "f.e7_hob_sent==='gate'", t: `And on the cobbles in front of the door, in the brazier-light, a long thin shape with a pitchfork beside it. He got here first. Of course he did. He got here first and he tried to open it for you, because you'd be pleased.` },
        { if: "f.e7_hob_sent==='isolde'", t: `And on the cobbles in front of the door, in the brazier-light, a long thin shape with a pitchfork beside it. He went to the Keep. He must have. And then he came back for you, all the way across a town full of soldiers, because in all the songs the squire comes back.` },
        { if: "f.e7_hob_sent==='stay'", t: `Hob is at your shoulder. He sees the guards before you do, and he does what you have told him a hundred times not to do. He shouts "*For the Sergeant!*" and goes past you at a run with his pitchfork levelled, and the crossbowman by the brazier turns, and shoots him, almost casually, through the chest.` },
        `The guards see you. One of them is spanning a crossbow. The other, an older man, looks at the boy on the ground and then at you, and goes white.`
      ],
      next: 'hob_dies_fight'
    },
    hob_dies_fight: {
      fight: { foes: ['crossbowman', 'man_at_arms'], allies: ['ulla', 'pell'], title: 'The Postern', win: 'hob_dies2',
        intro: 'Get to him. Get through them and get to him.' }
    },
    hob_dies2: {
      text: [
        `You don't remember killing them. You'll be told later that you did it badly, all weight and no craft, and that Ulla had to pull you off the second one.`,
        `Hob is alive when you get to him. The bolt has gone in under his collarbone and out through his back and pinned him, almost, to the cobbles. Every breath he takes makes a sound like a bellows with a hole in it. There is blood on his lips, very bright, in bubbles.`,
        `You get your arm under his shoulders and lift him into your lap. He weighs nothing. He's all elbows. He always was.`,
        `@hob: "Sergeant." He's smiling. Of course he is. "I— did I— is it open?"`
      ],
      choices: [
        { t: '"It\'s open, Hob. You did it. You opened it."', go: 'hob_dies3', fx: { set: { e7_hob_lie: 1 } } },
        { t: '"I told you not to be a hero, you stupid, stupid boy." (Your voice breaks on it.)', go: 'hob_dies3b' },
        { t: 'Don\'t answer. Hold him. Put your hand on his hair the way your mother did when you had the fever.', go: 'hob_dies3c' }
      ]
    },
    hob_dies3: {
      text: [
        `@hob: "Good." He breathes. It whistles. "Good. Told you. Told you I could."`,
        `It isn't open. It's locked and barred, and the key is on the belt of the man Ulla is holding down with her knee. He'll never know. That's the only gift you've got left to give him and you give it.`
      ],
      next: 'hob_dies4'
    },
    hob_dies3b: {
      text: [
        `@hob: "Sorry." He tries to laugh and it costs him. "Sorry, Sergeant. Thought— in the songs—"`,
        `@ansel: "Songs are lies. Songs are lies, Hob, I told you, the people in songs are all dead—"`,
        `@hob: "You're not." His hand finds your sleeve. "You're in one. You're not dead."`
      ],
      next: 'hob_dies4'
    },
    hob_dies3c: {
      text: [
        `You don't say anything. You put your gloved hand on his hair, which is wet and full of grit and sticks up at the crown the way it always has, and you stroke it back off his forehead. Again. Again.`,
        `His eyes close for a moment. Something in his face lets go.`,
        `@hob: "That's nice," he says, surprised. "That's— my mam used to—"`
      ],
      next: 'hob_dies4'
    },
    hob_dies4: {
      text: [
        `He's cold. He's shaking. His boots are scraping on the cobbles, slowly, as if he's trying to walk somewhere.`,
        `@hob: "Sergeant. Will you— the roll. The book. With the names." His eyes are wide now, very blue, looking past your shoulder at the sky. "Will you put me in it? I'd like— I'd like to be in it. With them. With the Red Company."`,
        `He's watched you read it, nights, at the corner table in the Hen, with your lips moving. You never knew he was watching. You never know who's watching.`,
        `@ansel: "You're in it, Hob. You're in it."`,
        `He smiles. He takes one more breath, and it goes in, and it doesn't come out.`,
        `Over his shoulder, at the end of the narrow cut, for no time at all, a tall man in a rain-dark coat stands with an open ledger, writing. He finishes the line. He blots it. He does not look at you. Then the cut is empty.`
      ],
      fx: { party: { remove: ['hob'] } },
      next: 'hob_dies5'
    },
    hob_dies5: {
      text: [
        `You sit in the rain with him for longer than you have. Ulla stands guard over you with her axe and doesn't say anything at all, which for Ulla is a kind of hymn.`,
        `Pell kneels on Hob's other side and starts the Litany of the Lit Road, and stops halfway through the first line, and says instead, in a cracked voice, "Go down easy, lad. Go down easy," which is the fen-folk's prayer, and a heresy, and the only one either of you can bear.`,
        { if: 'f.e4_jory_written', t: `Then you take out the Company Roll. You untie the sergeant's cord. At the bottom of the last sheet, after four hundred and six lines in a younger man's square hand and one in an older man's, *Jory Pask. Tally. Of Saltdown*, you write, with Pell's stub of pencil, in the rain:`, else: `Then you take out the Company Roll. You untie the sergeant's cord. At the bottom of the last sheet, after four hundred and six lines in a younger man's square hand, you write, with Pell's stub of pencil, in the rain:` },
        `**Hob Fenner. Stable boy. Harrowgate. Of the Company.**`,
        { if: 'f.e4_jory_written', t: `Four hundred and eight.`, else: `Four hundred and seven.` }
      ],
      fx: { quest: { id: 'e7_night', note: 'Hob Fenner died at the postern in the east wall. You wrote his name in the Roll, on the next line.' } },
      next: 'postern1'
    },
    postern1: {
      route: [
        { if: "f.e7_hob==='dead'", go: 'postern_after_hob' },
        { if: 'f.e1_spared_wat', go: 'postern_wat' },
        { if: 'f.e7_moll_turned', go: 'postern_moll' },
        { go: 'postern_locked' }
      ]
    },
    postern_after_hob: {
      text: [
        `The key is on the dead guard's belt. Ulla takes it and opens the postern herself, and the night outside the wall comes in: wet grass, the river, the smell of the fen, which after the Bottom smells almost like mercy.`,
        { if: 'f.e1_spared_wat', t: `Running feet in the cut behind you. You turn with Widow up. A thin young man in Varane blue, out of breath, a lantern swinging. You know the face before you know where from: Gorse Ford. An apple in each hand. "Sergeant Dray," Wat gasps. "I'm on the postern. I'm on the *postern*, I was coming to— oh." He sees Hob. "Oh, no." He takes off his helmet. He doesn't know why. Neither do you.` }
      ],
      next: 'partings1'
    },
    postern_wat: {
      loc: 'The east wall — the postern',
      text: [
        `A brazier. One guard. He sees you coming down the cut with a Nordvik giant and a priest at your back, and he does not shout. He puts down his spear, very carefully, and takes off his helmet, and you know the face before you know where from.`,
        `Gorse Ford. An apple in each hand. Seventeen and terrified, and older now, and fed.`,
        `@wat: "Sergeant Dray." His voice cracks. "They give me work. At the castle. I said you sent me. They laughed and give me a spear." He is already pulling the key off his belt. "I heard the bell. I heard what they're saying. I said to myself, if he comes, he'll come this way, 'cause it's the stupid way, and he's not stupid, so they won't watch it."`,
        `He turns the key. The bar lifts. The night outside the wall comes in: wet grass, the river, the smell of the fen.`,
        `@wat: "There. Now we're square." He swallows. "Aren't we?"`
      ],
      choices: [
        { t: '"We were square at the ford, Wat. This is something else. Thank you."', go: 'partings1', fx: { set: { e7_wat_postern: 1 }, xp: 20 } },
        { t: '"Come with us. They\'ll hang you for this."', go: 'postern_wat_stays', fx: { set: { e7_wat_postern: 1 } } }
      ]
    },
    postern_wat_stays: {
      text: [
        `@wat: "They'll not know. I'll bar it after, and say I never saw nothing, and I'm a deserter from Hobb's End, sir, I'm *very* good at saying I never saw nothing." He almost grins. "Besides. Somebody's got to be on the inside when you come back."`
      ],
      next: 'partings1'
    },
    postern_moll: {
      loc: 'The east wall — the postern',
      text: [
        `The postern is barred and the guard on it is asleep on his stool, or pretending to be, with a ring of keys on the floor at his feet as if they had fallen there.`,
        `They didn't fall. Moll's work, and someone who owes Moll. You pick the keys up. The guard snores a little louder, to be helpful.`,
        `The bar lifts. The night outside the wall comes in: wet grass, the river, the smell of the fen.`
      ],
      next: 'partings1'
    },
    postern_locked: {
      loc: 'The east wall — the postern',
      text: [
        `The postern is barred and padlocked, and two Varane spears stand either side of a brazier, and both of them see you at once.`,
        `@ulla: "Ah," Ulla says, pleased. "A door. I know about doors."`
      ],
      next: 'postern_fight'
    },
    postern_fight: {
      fight: { foes: ['man_at_arms', 'man_at_arms'], allies: ['ulla', 'pell'], title: 'The Postern', win: 'postern_broken' }
    },
    postern_broken: {
      text: [
        `Ulla takes the padlock off with the back of her axe in three blows that wake every dog on the east side of the river. The bar she lifts with one hand.`,
        `The night outside the wall comes in: wet grass, the river, the smell of the fen.`
      ],
      next: 'partings1'
    },

    /* ---- THE PARTING ---- */
    partings1: {
      text: [
        `Freedom is a door-width wide and smells of river-mud. Beyond it the land falls away to the water meadows, and the road, and the dark.`,
        `Behind you, up the hill, the horns are calling to each other again. Closer. They'll have found the Water Gate, or the tanning yard, or the bodies.`,
        `@ulla: "Through," Ulla says. "All of us. Now. We go to Saltdown. I know men there who owe me teeth."`,
        `You don't move.`,
        `Tamsin is still in the town. She went out at dusk for air and she hasn't come back, and she's fen-born and a thief and every Lampwarden in Harrowgate knows her face from the pyre and the market and your side.`,
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `> And she sends crows at night. To her gran. You have never asked. You are not going to start asking now, with the town on fire. You are going to find her.` }
      ],
      choices: [
        { t: '"Go. Both of you. That\'s an order." (The sergeant\'s voice.)', go: 'partings_order' },
        { t: '"If I\'m taken, somebody has to be outside to come and get me. That\'s you. That\'s the job."', go: 'partings_job', fx: { bond: { ulla: 1, pell: 1 }, quiet: true } },
        { t: '"I\'m not leaving her." (Just that. The truth.)', go: 'partings_truth', fx: { bond: { ulla: 1 }, quiet: true } }
      ]
    },
    partings_order: {
      text: [
        `It comes out of the old place, the place under the ribs where four hundred men used to live. Ulla's back straightens before she can stop it.`,
        `@ulla: "That's not fair," she says. "You don't get to use that voice on me. I'm not one of your four hundred."`,
        `@ansel: "No. You're one of mine."`,
        `She looks at you a long time, breathing hard through her nose like a bull.`,
        `@ulla: "*Fine*," she says. "But I'm not going far."`
      ],
      next: 'partings2'
    },
    partings_job: {
      text: [
        `@pell: "Oh, that's dirty," Pell says. "That's a dirty, clever argument. I taught a class on arguments like that. We called them *Saint Ivo's Snares*."`,
        `@ulla: "Is it true?"`,
        `@pell: "That's what makes them dirty."`,
        `Ulla looks at you. Then she nods once, the way her people nod at a funeral: not agreement, acknowledgement. You've said a true thing and now it has to be lived with.`
      ],
      next: 'partings2'
    },
    partings_truth: {
      text: [
        `Ulla looks at you. Pell looks at you. Neither of them says anything clever, which is how you know they heard it the way you said it.`,
        `@ulla: "Hm," Ulla says at last. Gently, for her. "Well. That is the stupidest and best reason. Go on, then. Go and find your fen-girl."`,
        `@ansel: "She's not my—"`,
        `@ulla: "Shut up, Dray."`
      ],
      next: 'partings2'
    },
    partings2: {
      text: [
        `Pell catches your sleeve as you turn. He looks very old in the brazier-light. He smells of wine and fear and wet wool.`,
        `@pell: "If they take you up the Lamp Stair," he says, "you'll go down, not up. There are cells under the Lanternhold. I know because I was in one, the night they defrocked me. There's a drain in the floor that goes to the laundry, and the laundry goes to the river." He tries to smile. "I never had the nerve to try it. You might."`,
        `Ulla doesn't say goodbye. Nordvik don't. She grips your forearm so hard the bones grind, and then she takes Pell by the scruff like a kitten and goes out through the postern into the dark.`,
        { if: "f.e1_spared_wat || f.e7_moll_turned", t: `The bar drops behind them. You are on your own inside the walls of a town that wants you dead.`, else: `You swing the broken door shut behind them and wedge it with the dead brazier. You are on your own inside the walls of a town that wants you dead.` }
      ],
      fx: { party: { remove: ['ulla', 'pell', 'hob'] }, quest: { id: 'e7_night', note: 'Ulla and Pell are out through the postern. You stayed inside the walls to find Tamsin.' } },
      next: 'lamp1'
    },

    /* ---- THE LAMP STAIR: CAPTURE ---- */
    lamp1: {
      loc: 'The Lamp Stair — before dawn',
      text: [
        `You look for her for an hour. The Hen is dark and Mags's door is barred and Mags says through it, *not here, love, not since dusk*. The market is empty. The well where she sits in the afternoons eating other people's apples is a black hole full of rain.`,
        `You are seen twice. Once by a woman emptying a pot who looks at you, and looks away, and goes in. Once by a boy with a horn.`,
        `The boy blows the horn.`,
        `After that it's running. Up alleys, through yards, over a wall with the horns behind you and ahead of you, and whichever way you turn there is a torch at the end of it, until you realise that you are not choosing your way at all. You are being driven. Like a boar. Like a stag. Uphill.`,
        `The last alley opens onto the Lamp Stair: a hundred wide white steps going up to the Lanternhold, and the blue lantern burning on its tower like a cold eye.`,
        `At the top of the stair, under the arch, alone, a woman in white enamel stands waiting with a drawn sword.`
      ],
      next: 'lamp2'
    },
    lamp2: {
      text: [
        `Brannagh Vey takes her helm off and tucks it under her arm. Her white-blonde hair is plastered flat by rain. The starfire burn on her throat is livid in the blue light.`,
        { if: "f.e5_brannagh_spar==='won'", t: `@brannagh: "Dray. You still owe me a rematch. I'd hoped for a better yard."` },
        { if: "f.e5_brannagh_spar==='lost'", t: `@brannagh: "Dray. The last time we did this, you ended on your back. I'd hoped we'd do it again. I hadn't hoped for this."` },
        { if: '!f.e5_brannagh_spar', t: `@brannagh: "Dray. I said in the market that we'd come to this. I wish, for once, that I'd been wrong."` },
        `@brannagh: "There are forty men on the stair behind you. There are twelve of mine on the walls above us with bows. I asked them to let me do this myself."`,
        `@ansel: "Why?"`,
        `@brannagh: "Because you'll fight. And I'd rather it was me."`
      ],
      choices: [
        { t: '"I didn\'t kill him, Brannagh. Hask did. You know what Hask is."', go: 'lamp_plead' },
        { t: '"Then let\'s not keep them waiting." Draw Widow.', go: 'lamp_draw' },
        { t: '"Is that what you came to Harrowgate for? Me? Look around you. Look what\'s in your Lanternhold."', go: 'lamp_accuse' }
      ]
    },
    lamp_plead: {
      text: [
        `@brannagh: "I know what the Marshal is. He's a murderer with good teeth. I knew it the day I met him." She doesn't blink. "That doesn't make you innocent. That's not what I'm here about. I don't care who killed the old lord. That's for the Crown."`,
        `@brannagh: "I'm here because Heaven can't count you. And a thing Heaven can't count is either a demon or a door, and I mean to find out which before anybody hangs you."`,
        `She lifts her sword. It is not burning. Not yet.`
      ],
      next: 'lamp_fight'
    },
    lamp_draw: {
      text: [
        `Something in her face eases. Relief. This, at least, she understands.`,
        `@brannagh: "Good," she says, and puts her helm back on.`
      ],
      next: 'lamp_fight'
    },
    lamp_accuse: {
      text: [
        { if: "f.e5_ledger_to==='brannagh'", t: `For the first time, she flinches. You see it: the Saltdown ledger, the word *Lanternhold* in an overseer's hand, eleven times. She has read it. She has read it more than once.`, else: `She frowns. It is the frown of a woman who has been hearing a sound in the walls for weeks and refusing to name it.` },
        `@brannagh: "Don't," she says. Very low. "Don't you dare, Dray. Not tonight. Not on these steps."`,
        `She comes down one step toward you. Then another.`,
        `@brannagh: "If there is rot in my house, I'll find it. I. Not a starless thing with a dead man's sword. Now *guard*."`
      ],
      fx: { set: { e7_lamp_accused: 1 } },
      next: 'lamp_fight'
    },
    lamp_fight: {
      fight: { foes: ['brannagh_foe', 'zealot'], solo: true, title: 'The Lamp Stair', win: 'lamp_win', lose: 'lamp_lose', noWound: true,
        intro: 'You are alone. She is the best blade in her chapter. Behind her the lantern burns blue.' }
    },
    lamp_win: {
      text: [
        `It is the best fight of your life and nobody will ever sing it.`,
        `At the end of it the Lampwarden at her shoulder is dead on the steps with his face open, and Brannagh Vey is on one knee in front of you with her sword arm hanging and her mouth full of blood, and Widow's point is resting in the hollow of her burned throat.`,
        `She looks up at you. She doesn't ask for anything.`,
        `Then, from the walls above, the creak of twelve bowstaves drawn at once. And from the Lanternhold's high windows, small white faces: the orphans in grey, woken by the noise, pressed against the glass. Watching.`,
        `@narrator: "Warden?" A Lampwarden's voice, from the wall. "Warden, give the word."`,
        `@brannagh: "Hold," she says, not taking her eyes off you. "*Hold.*"`
      ],
      choices: [
        { t: 'Lower Widow. Put her down on the step. Kneel.', go: 'lamp_surrender', fx: { bond: { brannagh: 1 }, set: { e7_knelt: 1 } } },
        { t: '"You owe me one now, Warden." Then lower the sword.', go: 'lamp_surrender', fx: { set: { e7_brannagh_owes: 1 } } }
      ]
    },
    lamp_surrender: {
      text: [
        `You put Widow down on the white step. The rain runs off her blade in pink threads.`,
        `Brannagh gets up slowly. She picks up your sword, and weighs it, and looks at you over it with an expression you can't read.`,
        `@brannagh: "Why?"`,
        `@ansel: "Children in the windows."`,
        `Then forty men come up the stair behind you, and someone hits you very hard on the back of the head with a spear-butt, and the steps come up to meet you, white and cold and wet as a grave.`
      ],
      next: 'cell1'
    },
    lamp_lose: {
      text: [
        `The last thing you see is her pommel, coming in under your guard the way she promised it would in the yard.`,
        `The last thing you feel is your cheek on the white wet stone of the Lamp Stair, and her hand, quite gentle, taking Widow out of your fingers.`,
        `@brannagh: "There," she says, somewhere very far above you. "There. It's done. Take him down."`
      ],
      next: 'cell1'
    },

    /* ======================= ACT THREE: THE CELL ======================= */
    cell1: {
      loc: 'Under the Lanternhold — a cell',
      card: { kind: 'act', title: 'Part Three', sub: 'The Question' },
      fx: { heal: 10, quest: { id: 'e7_night', note: 'Brannagh took you on the Lamp Stair. You are in a cell under the Lanternhold.' } },
      text: [
        `You wake on stone. Your head is a bell somebody is still ringing.`,
        `A cell cut from the living rock, ten feet by eight. Iron bars across the front. A drain in the floor, a grate the size of a dinner plate. Water running somewhere close, under your back. Your wrists are chained to a ring in the wall, with enough slack to sit up and not enough to stand.`,
        `Your gloves are gone. The star on your left palm is pale and puckered in the light of a single lamp in the passage outside.`,
        `From somewhere above, through the rock, very faint: the smell of honey and lamp oil, and a hymn, the orphans' dawn hymn, sung by children who have not been to bed.`,
        `Somebody is sitting on a stool outside the bars, watching you. He has washed his hands.`
      ],
      next: 'hask_cell1'
    },
    hask_cell1: {
      text: [
        `@hask: "There he is. There's my sergeant."`,
        `Konrad Hask leans forward on the stool with his elbows on his knees. He has changed his shirt. He looks tired, and sad, and fond, and he has brought a skin of wine, which he holds up.`,
        `@hask: "Corvane red. The last of the old man's cask. I thought you'd appreciate the joke. No? No. You never liked my jokes. You laughed at them, though. You were a good sergeant."`,
        `@hask: "They'll hang you at noon, if the Lampwarden's done with you. I tried for dawn. The Lamp has prior claim, apparently. It's very irritating."`
      ],
      choices: [
        { t: '"Why tonight?"', go: 'hask_cell_why' },
        { t: '"You held him while he died. I heard."', go: 'hask_cell_held' },
        { t: 'Say nothing. Look at him. Let him talk.', go: 'hask_cell_silence' }
      ]
    },
    hask_cell_why: {
      text: [
        { if: "f.e5_ledger_to==='varane'", t: `@hask: "Because you gave him that bloody book, Ansel. He'd have read it to the Prince by the end of the week. He'd started underlining things. Aurel *never* underlined." He shakes his head. "You did that. I'd like you to understand that. You put that knife in my hand."` },
        { if: "f.e5_ledger_to==='isolde'", t: `@hask: "Because his daughter's been reading something that keeps her up at night, and she's been asking her father to read it too, and he was nearly brave enough. Nearly. He was always nearly." He shrugs. "She'll be easier. She's practical."` },
        { if: "f.e5_ledger_to==='brannagh'", t: `@hask: "Because you gave my accounts to the Lamp, Ansel, and the Lamp has started asking questions in my lord's hearing. The old man was about to have a conscience. At his age. It's undignified."` },
        { if: "!['varane','isolde','brannagh'].includes(f.e5_ledger_to)", t: `@hask: "Because the Prince is here and the Feast is done and the old man was going to change his mind about the marriage. Tonight was the night. There's always a night. You know that. You were at Corran's Ford."` },
        { if: 'f.e5_hask_knows', t: `@hask: "I was going to wait for the spring, you know. Do it gently. Then a little bird told me there was a book going round with my name in it, and a man can only sit on a nest of knives so long."` },
        `@hask: "And because you were here, of course. A dead man to blame. I couldn't have done it without you. I mean that kindly."`
      ],
      next: 'hask_cell2'
    },
    hask_cell_held: {
      text: [
        `His face changes. It is the only time tonight you see him surprised.`,
        `@hask: "I did." Quietly. "Somebody should. You should always hold them. I held Tom Ashe, did you know that? After. I rode back across the ford when the Ashwick men were stripping the bodies, and I found him, and I held him a while. He was already cold."`,
        `@ansel: "You weren't there."`,
        `@hask: "I was. I was there at dawn. I walked right past you." He smiles. "I thought you were dead, Ansel. I said a prayer for you. I'd like you to know that."`,
        `> The crows were already working. He was there. He was *there*.`
      ],
      fx: { set: { e7_hask_held_tom: 1 } },
      next: 'hask_cell2'
    },
    hask_cell_silence: {
      text: [
        `He waits. You wait. He has always been bad at silence; it was the one thing he could never teach, because he could never learn it.`,
        `@hask: "You think I'm a monster." He says it reasonably. "I'm not. I'm the only grown man in this town. Everyone else is waiting for the Saints to save them, or the King, or a good harvest. Nobody's coming, Ansel. Nobody ever comes. There's only the next deal, and the one after."`,
        `@hask: "Corran's Ford was a deal. Varane was a deal. You'll be a deal. Isolde will be a deal. That's not wickedness. It's just being awake."`
      ],
      fx: { st: 1 },
      next: 'hask_cell2'
    },
    hask_cell2: {
      text: [
        `He stands. He puts the wineskin through the bars and lays it on the floor of your cell, just out of reach of your chain. He does it without any sign of cruelty. He probably thinks you'll manage.`,
        `@hask: "For what it's worth, I'm sorry it's you. It should have been you, six years ago, and I'd have mourned you then and been done. It's harder now. I've got used to you again."`,
        `He goes. At the end of the passage he stops and speaks to somebody you can't see, in a low warm voice, and you hear a woman answer him, warm as he is: *Go up, Konrad. Go and wash. You smell of it.*`
      ],
      next: 'abbess_cell'
    },
    abbess_cell: {
      text: [
        `She comes down the passage with a candle in one hand and a plate in the other, a little out of breath from the stairs: the Abbess of the Lanternhold, plump and white-wimpled, smelling of honey and lamp oil. She lowers herself onto Hask's stool with a small grunt, like anyone's grandmother.`,
        `@abbess: "Poor lamb. Look at you." She pushes a honey-cake through the bars on the plate, the way you'd feed a dog you were fond of. "Eat that. You won't have had anything."`,
        `She lifts her hand to bless you. It stops an inch from the bars, as it did on her steps in the autumn, the first time. She looks at her own hand, and frowns at it, as if it has forgotten a word.`,
        `@abbess: "Konrad says you'll hang at noon. I'll pray it's quick." She tucks the hand back into her sleeve. "And I'll pray they burn you after. It's kinder, dear. Truly it is. You'd not want to lie in the ground and be *found*."`
      ],
      choices: [
        { t: '"What\'s behind your crypt door, Mother?"', go: 'abbess_cell2' },
        { t: 'Eat the cake. Look at her while you do it.', go: 'abbess_cell2', fx: { set: { e7_ate_cake: 1 } } },
        { t: 'Push the plate back through the bars.', go: 'abbess_cell2', fx: { set: { e7_refused_cake: 1 } } }
      ]
    },
    abbess_cell2: {
      text: [
        { if: 'f.e7_ate_cake', t: `It's very good. Of course it is. She watches you eat it with real pleasure, the way she watches the orphans eat.` },
        { if: 'f.e7_refused_cake', t: `She takes the plate back without offence and sets it on her knee. "Pride," she says. "My father had it too. It didn't feed him either."` },
        { if: '!f.e7_ate_cake && !f.e7_refused_cake', t: `@abbess: "Bones, dear. Old ones. And account-books. Mine, and my teacher's, and hers." She smiles. "Somebody has to keep the sums. Nobody ever thanks the woman who keeps the sums."` },
        `Boots on the stair. She gets up, joint by joint, and gathers her candle.`,
        `Brannagh comes down the passage with a lamp in one hand and a knotted cord wrapped round the other. She stops when she sees who is on the stool.`,
        `@brannagh: "Mother."`,
        `@abbess: "Such a worried face, child." The Abbess pats Brannagh's cheek on her way past, and Brannagh lets her. "Don't stay down here too long. It's damp. It gets into the soul."`
      ],
      fx: { know: { cast: ['abbess'] } },
      next: 'int1'
    },
    int1: {
      text: [
        `She has taken off the white plate. Underneath it she is smaller than you'd think, in a grey shift sweated dark under the arms, and her forearms are corded and scarred, and there is blood on the cord around her knuckles. Her own.`,
        `She lets herself into the cell. She hangs the lamp on a hook. She doesn't sit.`,
        { if: 'f.e7_brannagh_owes', t: `@brannagh: "You said I owe you. I've thought about it. I don't. You surrendered to save orphans. That's not a debt. That's a confession that you've got a soul." She looks at you. "Which is the question, isn't it."` },
        `@brannagh: "The Book of Embers says: *in the last days there shall walk one whom Heaven cannot number.* The oracle says that's you. My Hierarch says find him and bring him to the light and see what burns."`,
        `@brannagh: "So I'll ask you once, plainly, as one soldier to another. What are you?"`
      ],
      fx: { know: { codex: ['starless'] } },
      choices: [
        { t: '"I died at Corran\'s Ford. On a stone with a star on it. I woke up in the morning. That\'s all I know."', go: 'int_truth', fx: { set: { e7_told_brannagh: 1 } } },
        { t: '"A tanner\'s son from Lowmarch who drinks too much. Disappointed?"', go: 'int_joke' },
        { t: '"Go and look in your own crypt, Warden, and then ask me what I am."', go: 'int_crypt', fx: { set: { e7_told_crypt: 1 } } }
      ]
    },
    int_truth: {
      text: [
        `She listens to the whole of it. The river. The bolts. The stone. Your blood running in the lines of the star. The night, and the stars looking. The morning, and the crows.`,
        `She doesn't interrupt. When you finish, the water under the floor is the only sound.`,
        `@brannagh: "That's either the truest thing I've ever heard," she says, "or the most dangerous. Show me your hand."`
      ],
      next: 'int2'
    },
    int_joke: {
      text: [
        `@brannagh: "Not yet." She almost smiles. Almost. "I've met a great many tanners' sons who drink too much. None of them had Heaven looking for them by name."`,
        `@brannagh: "Show me your hand."`
      ],
      next: 'int2'
    },
    int_crypt: {
      text: [
        `@brannagh: "There's nothing in the crypt but the honoured dead and the Abbess's account-books." The answer comes too fast. She hears it come too fast.`,
        { if: 'f.e5_bran_crypt', t: `@brannagh: "I asked her. After the Feast. She took me down herself, as far as the ossuary door, and showed me the bones of the founding sisters, and held my hand."`, else: `@brannagh: "I've been down as far as the ossuary door."` },
        { if: 'f.e3_saw_crypt_door', t: `@ansel: "And past it? The iron door with the blue light under it?"` },
        { if: '!f.e3_saw_crypt_door && (f.e2_pell_crypt || f.e4_pell_crypt)', t: `@ansel: "And past it? The door Pell heard breathing behind?"` },
        { if: '!f.e3_saw_crypt_door && !f.e2_pell_crypt && !f.e4_pell_crypt', t: `@ansel: "And past it? All the way down?"` },
        `Silence. Water running under the floor.`,
        `@brannagh: "Show me your hand," she says.`
      ],
      next: 'int2'
    },
    int2: {
      text: [
        `She takes your left wrist. Her grip is hard and dry. She turns your palm up to the lamp and looks at the burn: the seven points, the circle, the scar-tissue shiny as wax.`,
        `She goes very pale.`,
        `@brannagh: "That's the old star," she whispers. "Not ours. The *old* one. It's carved on the oldest altar in Corvane, under a cloth, and nobody's allowed to say why. Who did this to you?"`,
        `@ansel: "A rock."`,
        `She lets go. She draws the short knife at her belt, a plain Lampwarden's misericord, and holds it flat across her open palm, and closes her eyes, and begins to pray.`,
        `The blade begins to burn.`
      ],
      next: 'int3'
    },
    int3: {
      text: [
        `Starfire. Up close it is not blue, exactly. It's the colour of the gap between stars on a frost night. It makes no heat. It makes the air in the cell taste of tin, and the hairs on your arms stand up, and the lamp on its hook gutter and shrink as if ashamed of itself.`,
        `The burn on her throat is glowing too, faintly, under the skin. She is in pain. She has been in pain every time she has ever done this.`,
        `@brannagh: "In the name of the Saints who ascended. In the Light that numbers every soul. Confess what you are."`,
        `She lays the burning blade flat against your chest, over your heart.`
      ],
      choices: [
        { t: 'Brace for it.', go: 'int4' },
        { t: 'Look her in the eye while she does it.', go: 'int4', fx: { set: { e7_held_eyes: 1 } } }
      ]
    },
    int4: {
      text: [
        `Nothing.`,
        `Not nothing: there's a coldness, like a draught under a door. The starfire goes into you. You can feel it going in. It goes through your shirt and your skin and your ribs and spreads out in you like water poured on sand, and moves, quickly, *searching*, the way a hand searches a dark room for a candle. Into your chest. Into your belly. Up behind your eyes.`,
        `It is looking for someone. You can feel it, quite clearly, looking for someone who ought to be there.`,
        `It does not find them.`,
        `It comes out the other side of you and goes into the wall, and the wall frosts over in a seven-pointed star of rime, and that's all.`
      ],
      fx: { know: { codex: ['e7_starfire'] } },
      next: 'int5'
    },
    int5: {
      text: [
        `Brannagh stares at the frost on the wall.`,
        `She tries again. Harder. Her lips moving. The blade flares so bright the cell goes black-and-white, and the burn on her throat splits and begins to bleed, and she makes a sound through her teeth like a woman in childbed.`,
        `It goes through you like light through a window.`,
        `She drops the knife. It rings on the stone, going dark. She sits down, abruptly, on the floor of the cell, as if her knees have been cut. Blood is running from her throat into the neck of her shift.`,
        `@brannagh: "It burns the dead," she says. Not to you. "It burns the Under-things. It burns heretics. It burned the witch at Ellerby. It burned a man in Corvane who'd only *thought* about the Mothers. It burns *everything*."`,
        `@brannagh: "It's Heaven's fire. It sees *everything*. It's how Heaven *sees*."`,
        `She looks at you. Her face is like a church with the roof coming off.`
      ],
      fx: { set: { e7_brannagh_doubt: 1 } },
      choices: [
        { t: '"Then Heaven can\'t see me. I\'ve known that for six years. Welcome."', go: 'int6_welcome' },
        { t: 'Reach for the knife with your foot. Hand it back to her, hilt first.', go: 'int6_knife', fx: { set: { e7_gave_knife: 1 } } },
        { t: '"You\'re bleeding. Press on it. Here, give me your hand, I\'ll—" (Your chain stops you an inch short.)', go: 'int6_bleed', fx: { set: { e7_reached: 1 } } }
      ]
    },
    int6_welcome: {
      text: [
        `@brannagh: "Don't." It's barely a voice. "Don't make it a joke. I've given my whole life to it. I was eight." She presses the heel of her hand against her bleeding throat. "If it can't see you, what else can't it see? What else has it been *missing*?"`,
        `You don't answer. You don't have to. She is already looking up, at the ceiling, at the rock, at the Lanternhold over it, where the orphans are singing.`
      ],
      next: 'oriel1'
    },
    int6_knife: {
      text: [
        `You hook the knife with your heel and push it across the stone to her, hilt first. She looks at it a long time before she picks it up.`,
        `@brannagh: "You could have kept that. You could have tried."`,
        `@ansel: "I know."`,
        `She sheathes it without looking. Her hand is shaking. She notices, and holds it still with the other one, the way you do in the mornings.`
      ],
      next: 'oriel1'
    },
    int6_bleed: {
      text: [
        `The chain snaps taut. Your fingers stop an inch from her throat.`,
        `She looks at your hand, there in the air in front of her, starred palm open. She doesn't move away. For a long moment neither of you moves at all.`,
        `Then she presses her own hand to the wound, hard, and gets up off the floor, and steps back out of reach.`,
        `@brannagh: "Don't," she says. It isn't clear what she is forbidding. Possibly she isn't sure herself.`
      ],
      next: 'oriel1'
    },

    /* ---- ORIEL ---- */
    oriel1: {
      text: [
        `She leaves. She comes back. When she comes back she isn't alone.`,
        `Two Lampwardens carry a chair between them, and in the chair, chained at wrist and ankle, thin as a bundle of reeds, is the oracle. Oriel. Her shaven head is a map of the sky inked in blue. Her silver-white eyes are open and see nothing in this room.`,
        `They set her down outside the bars. Brannagh sends the wardens away with a look.`,
        `@brannagh: "Tell me what he is," she says to the oracle. "Tell me what to do."`,
        { if: 'f.e3_oriel_met', t: `Oriel's head turns toward you before anyone has said your name. Something crosses her face that you saw once before, beside her cage, on the night she told you it was quiet: relief, like a held breath let go.`, else: `Oriel's head turns, slowly, toward the bars. Toward you. Her nostrils flare like an animal's.` }
      ],
      fx: { know: { cast: ['oriel'] } },
      next: 'oriel2'
    },
    oriel2: {
      text: [
        `Then her back arches in the chair. Her mouth opens wider than a mouth should. And the voice that comes out of it is not hers. It is not anyone's. It is a hundred voices sung in one note, like a choir heard through a wall, sweet and huge and empty, and it fills the cell to the stone:`,
        `@oriel: "**BURN HIM.**"`,
        `@oriel: "**BURN HIM, WARDEN. BURN HIM IN THE FIRE OF THE SAINTS BEFORE THE DAWN. HE IS THE CRACK. HE IS THE DOOR. HE IS THE UNCOUNTED. BURN HIM, BURN HIM, BURN—**"`,
        `Brannagh has her hand on her sword. You watch her knuckles go white.`,
        `Then Oriel's body slumps. Her head hangs. When she lifts it again her face is her own: young and dry and frightened and curious, a girl's face. She speaks in her own voice, which is small and hoarse, as if she hasn't used it in days.`,
        `@oriel: "They can't see him."`
      ],
      next: 'oriel3'
    },
    oriel3: {
      text: [
        `@brannagh: "What?"`,
        `@oriel: "They can't *see* him, Warden. They're screaming because they can't see him. They've never not been able to see something. They're *frightened*." She laughs, a cracked little laugh, astonished. "I've heard them every day of my life. I've never heard them frightened before."`,
        `She turns her blind face to you.`,
        { if: 'f.e3_oriel_met', t: `@oriel: "Hello again, quiet man. It's so loud tonight. Can I— would you come closer? Only for a moment."`, else: `@oriel: "You're the quiet. I've been hearing you for weeks, like a held breath. Would you come closer? Only for a moment. I want to know what it's like."` }
      ],
      choices: [
        { t: 'Shuffle to the end of your chain, against the bars. Close enough to touch.', go: 'oriel_close', fx: { bond: { oriel: 2 }, set: { e7_oriel_close: 1 } } },
        { t: '"What are they, Oriel? The things you hear."', go: 'oriel_what', fx: { bond: { oriel: 1 } } },
        { t: '"Don\'t tell her that. She\'ll burn you for it."', go: 'oriel_warn', fx: { set: { e7_oriel_warned: 1 } } }
      ]
    },
    oriel_close: {
      text: [
        `You move as far as the chain will let you. Your shoulder against the bars. She reaches out with her chained hands, slowly, and finds your face by touch: your broken nose, the rope of scar under your ear, your mouth, your eyes.`,
        `Her fingers are very cold. She is shaking.`,
        `@oriel: "Oh," she whispers. Her forehead comes to rest against the iron, an inch from yours. "I can hear my own heart. I didn't know it sounded like that. It sounds like someone knocking."`,
        `She stays there. Brannagh watches, and doesn't stop it, and you don't know what's on her face because you're not looking at her.`
      ],
      next: 'oriel_end'
    },
    oriel_what: {
      text: [
        `@oriel: "Loud," she says at once. Simply. As if you'd asked her the colour of the sky. "Lovely. Old. They never stop. I don't think they're allowed to stop." Her head tilts. "And they're always, always *waiting* for something. Like the end of a long table before the bread comes."`,
        `@brannagh: "That's blasphemy." It comes out automatically, and weakly, like a prayer at the end of a long day.`,
        `@oriel: "Is it? You'd know better than me, Warden. I'm only the one who has to listen."`
      ],
      next: 'oriel_end'
    },
    oriel_warn: {
      text: [
        `Oriel tilts her head, curious.`,
        `@oriel: "She won't. Will you, Warden?" She turns her blind eyes toward Brannagh. "You've been crying at night. In the shrine. I can hear it through the singing. You think it's the cord that makes you cry. It isn't."`,
        `Brannagh turns her face away as if she's been struck.`
      ],
      next: 'oriel_end'
    },
    oriel_end: {
      text: [
        `Brannagh calls the wardens back. They lift the chair. Oriel's face, as they carry her away down the passage, is turned back toward you the whole way, like a flower toward a window, until the dark takes it.`,
        `@oriel: "They're looking now," she calls, faint, from far off. "Not at *you*. At the hole where you are. They'll keep looking at it. I'm sorry."`
      ],
      next: 'bars1'
    },

    /* ---- THROUGH THE BARS ---- */
    bars1: {
      loc: 'Under the Lanternhold — the last hour of the night',
      text: [
        `She locks you in again. She goes. You think she's gone.`,
        `An hour later, in the black end of the night when the lamp in the passage has burned down to a bead, she comes back alone. No lamp. No sword. She sits down on the stone outside the bars, with her back against them, and you can hear her breathing.`,
        { if: "f.e5_brannagh_spar", t: `You remember her breathing like that once before: in the castle yard, at midnight, after the sparring, bent over with her hands on her knees. Bruises coming up on both of you. Neither of you saying anything.` },
        `@brannagh: "I've been in the shrine," she says. "I couldn't pray. I've never not been able to pray."`,
        `Your back is against the bars too, from the inside. Her shoulder-blade is two inches from yours. There's iron between.`
      ],
      choices: [
        { t: 'Put your hand through the bars. Find hers in the dark.', go: 'bars_hand', fx: { set: { e7_brannagh_moment: 'hand' }, bond: { brannagh: 1 } } },
        { t: '"Go down past the ossuary door, Warden. Then you\'ll know what to pray for."', go: 'bars_crypt', fx: { set: { e7_brannagh_moment: 'crypt', e7_told_crypt: 1 } } },
        { t: '"Go to bed, Warden. It\'s no good, the dark. It makes everything sound truer than it is."', go: 'bars_bed', fx: { set: { e7_brannagh_moment: 'none' } } }
      ]
    },
    bars_hand: {
      text: [
        `You reach back through the bars. The iron is cold against your forearm. Her hand is on the stone between you, palm down, and you put yours on top of it.`,
        `She goes rigid. Then, very slowly, she turns her hand over, and her fingers close round yours. Hard. Callus against callus. A swordswoman's grip.`,
        `Neither of you says anything. Her thumb moves once over the star on your palm. You hear her breath catch. You feel her pulse, in her wrist, going like a running horse.`,
        `It is the most chaste thing you have ever done with a woman and it is not chaste at all.`,
        `After a long time she lets go. She stands up. In the dark you hear her straighten her shift.`,
        `@brannagh: "I can't," she says. Thickly. "I'm sworn. I'm— you're my prisoner. *Saints*." And then, from the end of the passage, so quietly you almost miss it: "Not through bars, anyway."`
      ],
      next: 'rescue0'
    },
    bars_crypt: {
      text: [
        `Silence. A long one.`,
        `@brannagh: "There's a second door past the ossuary," she says. "Two locks. The Abbess has the only key. She told me it was the bones of the founding sisters. Too holy for a warden's eyes."`,
        `@ansel: "Do bones need two locks?"`,
        `You hear her get to her feet. You hear her stand there in the dark, not moving, long enough to count the drips.`,
        `@brannagh: "If you're lying to me," she says, "I will burn you myself, starfire or no, with lamp oil and a tinder-box like any village witch."`,
        `@ansel: "If I'm lying to you, I'll help."`,
        `She goes. She goes up the passage, and not toward her quarters. Down. Toward the crypt stair.`
      ],
      fx: { quest: { id: 'e7_night', note: 'You told Brannagh to open the crypt door with two locks. She went down, not up.' } },
      next: 'rescue0'
    },
    bars_bed: {
      text: [
        `@brannagh: "Is that what you do? When the dark's too true? Drink until it isn't?"`,
        `@ansel: "Mostly."`,
        `@brannagh: "Does it work?"`,
        `@ansel: "No."`,
        `A sound that might, in someone less tired, have been a laugh. She gets up. She stands for a moment with her hand on the bars, just above your head.`,
        `@brannagh: "Goodnight, Dray," she says. And goes, and you hear her stop at the foot of the passage, and stand, and not go up.`
      ],
      next: 'rescue0'
    },

    /* ======================= ACT FOUR: THE FEN ======================= */
    rescue0: {
      loc: 'Under the Lanternhold — just before dawn',
      card: { kind: 'act', title: 'Part Four', sub: 'Go Down Easy' },
      text: [
        `You must have slept. You wake to a smell.`,
        `Sweet. Thick. Like burned honey and marsh-myrtle and something under it, a little rotten, a little green. Smoke, coming down the passage in a slow grey sheet along the floor. The gaoler on his stool at the end of the passage is snoring, with his chin on his chest and his mouth open, and a thread of drool silvering down onto his tabard.`,
        `Then a voice from the dark, very pleased with itself, singing very quietly and very badly:`,
        `*"Oh, the eel she wed the heron, and the heron wed the eel, and they lived beneath the bulrush on a—"*`,
        `@tamsin: "Morning, Sergeant."`
      ],
      next: 'rescue1'
    },
    rescue1: {
      text: [
        `She comes into the lamplight wearing a novice Lamplighter's robe three sizes too big for her, hood up, sleeves rolled four times, the hem tucked into her belt. There is a smudge of ash on her nose. She has a ring of keys in one hand and a candlestick in the other, and something under her arm that looks very like a gilded reliquary.`,
        `She grins at you. The chipped tooth. You had forgotten, in a single night, how much of the world that tooth holds up.`,
        `@tamsin: "Saints keep you, my son. Light take you. Lamp, um. Lamp something. I've been saying it to everyone I passed and nobody's stopped me yet. I think I've got a calling."`
      ],
      choices: [
        { t: '"Where in the *hell* have you been?"', go: 'rescue_where' },
        { t: 'Laugh. You can\'t help it. It hurts your head and you can\'t stop.', go: 'rescue_laugh', fx: { set: { e7_rescue: 'laugh' } } },
        { t: '"Tamsin." (Just her name. Your voice doesn\'t do what you want.)', go: 'rescue_name', fx: { set: { e7_rescue: 'name' } } }
      ]
    },
    rescue_where: {
      text: [
        `@tamsin: "Getting you out, ungrateful. Do you know how long it takes to steal a novice's robe off a novice who's *wearing* it? He sleeps in it. Like a dormouse. I had to wait for him to go to the privy." She's already at the lock, kneeling, two picks in her teeth. "Also I had to buy the smoke. And I had to find which cell. And I had to steal this—" the reliquary "—which I didn't have to, actually, but look at it."`,
        `She hasn't answered the question. You notice that. You notice that you notice it, and you put it away.`
      ],
      next: 'rescue2'
    },
    rescue_laugh: {
      text: [
        `You laugh. It comes up out of you like something breaking, and your head rings with it, and your ribs, and you can't stop, chained to a wall in the bottom of the Lamp's house with a price on your head and a thief in a stolen robe looking at you like you're mad.`,
        `Then she's laughing too, helplessly, with her forehead against the bars and two lock-picks in her teeth.`,
        `@tamsin: "*Shh*. Shh! You'll wake the— oh, Mothers, your *face*—"`
      ],
      next: 'rescue2'
    },
    rescue_name: {
      text: [
        `She hears it. The grin goes out of her face, just for a second, and what's under it is something you have never seen on her before and can't name.`,
        `Then she's at the lock, quick, head down.`,
        `@tamsin: "Yes, well. Me. Who else'd come, you great dead fool."`
      ],
      next: 'rescue2'
    },
    rescue2: {
      text: [
        `The lock goes with a click. The chain goes with another. She's in the cell and has your face in both her hands before you've stood up, turning it to the light, checking your eyes the way you'd check a horse that's had a fall.`,
        `@tamsin: "Did she hurt you? The Warden. Did she— your *head*—"`,
        `@ansel: "Pommel. I've had worse."`,
        `@tamsin: "You've had worse from *me*." She lets go. She doesn't quite look at you. "Right. Up. I've got your sword. And your gloves. And your roll-case: it was on the Warden's table, I nearly died of fright." She pushes them into your arms. Widow's weight on your hip again is like a hand on your shoulder.`,
        { if: "f.e5_ledger_to==='kept'", t: `@tamsin: "Your book's gone, mind. Not the roll. The other one. One of the Marshal's men came down and took it off the Warden's table while she was in the shrine. Walked out with it under his arm like a hymnal."` },
        { if: "f.e7_hob==='alive'", t: `@tamsin: "Oh, and your stable boy says to tell you he did it. He's in the hayloft over the Keep's tack-room with half a loaf and a signet ring her ladyship gave him, and he says she says, and I'm quoting, *I know*. Just that. *I know*." She shrugs. "Nobs."` },
        { if: "f.e7_hob==='dead'", t: `She sees your face when she hands you the roll-case. She looks at it, and at you. "Who?" she says. And you tell her, and she closes her eyes. "Oh, Hob," she says. "Oh, you stupid, *brave*— Mothers keep him. Go down easy." She means it. You can hear she means it.` },
        `Then, from the end of the passage, a voice: "Brother? Brother, what's that *smell*—"`
      ],
      choices: [
        { t: 'Go. Fast. Through the guard if you have to.', go: 'rescue_fight' },
        { t: '"Pell said there\'s a drain to the laundry."', go: 'rescue_drain' }
      ]
    },
    rescue_drain: {
      text: [
        `@tamsin: "I *know*. I came up it. Why do you think I smell like this?" She points at the dinner-plate grate in your own cell floor. "Not that one. That one's for— you don't want to know. The big one's at the end of the passage."`,
        `The end of the passage is where the voice is. It's a Lampwarden, a big one, with a lantern and a drawn sword, and behind him another, coming down the stair at a run.`,
        `@tamsin: "Well," Tamsin says. "Shit."`
      ],
      next: 'rescue_fight'
    },
    rescue_fight: {
      fight: { foes: ['zealot', 'zealot'], allies: ['tamsin'], title: 'The Cell Passage', win: 'rescue_won',
        intro: 'Narrow stone, low ceiling, sleep-smoke at knee height. Don\'t breathe it.' }
    },
    rescue_won: {
      text: [
        `The second Lampwarden dies with Tamsin's arrow in the eye-slit of his helm and his starfire guttering out on the stone like spilled milk.`,
        `The laundry drain is a square hole at the end of the passage with a ladder going down into roaring dark. Tamsin goes first. You go after. It's a long way down and it ends in water, fast and cold and smelling of lye, and the water takes you both and throws you through a grate somebody has already, helpfully, sawn through, and out into the river under the Lanternhold walls.`,
        `You come up gasping in the grey before dawn with the whole town behind you on its hill, the blue lantern still burning on its tower, and the bells starting again.`,
        `Tamsin is holding your collar. She's laughing, half-drowned. Then she isn't. She gets her arm round you and holds you up in the current, her cheek against your wet hair.`,
        { if: 'f.e4_luck_knot', t: `@tamsin: "*Told* you I'd stop you dying near me." Her thumb finds the red thread on your wrist, still there, sodden. She holds on to it.` },
        `@tamsin: "I've got you, Sergeant. I've got you. Come on. I know somewhere safe."`
      ],
      fx: { xp: 60, quest: { id: 'e7_night', note: 'Tamsin broke you out of the Lanternhold through the laundry drain.' } },
      next: 'fen1'
    },
    fen1: {
      loc: 'Gallowmere Fen — dawn coming',
      text: [
        `She has a punt waiting in the reeds downstream. Of course she does. She poles it out into the fen while the sky goes from black to iron to the colour of a pigeon's breast, and Harrowgate shrinks behind you until it's just a hill with a blue spark on it.`,
        `The fen at dawn: black water, white mist lying on it like milk on tea. Reed islands. Old eel-weirs leaning like drunk men. A heron standing on one leg in the shallows, watching you go past with a face like a disappointed magistrate.`,
        `You lie in the bottom of the punt with your head on a coil of rope and your sword across your chest and you can't stop shaking. Not the drink-shakes. The other kind. The kind that comes after.`,
        `Tamsin poles. She's singing again, under her breath. The eel and the heron. You know the words now.`
      ],
      choices: [
        { t: '"Where are we going?"', go: 'fen_where' },
        { t: '"Sing the last verse. The one where the heron dies."', go: 'fen_verse' },
        { t: '"Who do you send the crows to, Tamsin?"', if: 'f.e1_saw_crow || f.e3_suspect_tam', go: 'fen_crows' },
        { t: '"In the barrow. You said *not like this*. Like what?"', if: 'f.e6_tam_stopped', go: 'fen_barrow' }
      ]
    },
    fen_where: {
      text: [
        `@tamsin: "My gran's." Easily. Too easily, maybe; or maybe you've forgotten, again, what easy sounds like. "Nobody goes into the deep fen but fen-folk. Not the Lamp. Not the Marshal. You'll be safe there. Safe as houses."`,
        `@ansel: "Your gran's the witch. Mother Gall."`,
        `She doesn't stop poling.`,
        `@tamsin: "Everybody's gran is somebody's witch, Sergeant."`
      ],
      next: 'fen_drowned'
    },
    fen_verse: {
      text: [
        `She stops singing. She poles a while in silence.`,
        { if: 'f.e6_twelfth_verse', t: `@tamsin: "Which last? The eleventh, he dies. The twelfth, he doesn't. I made the twelfth. In the barrow, in the dark. You were there."`, else: `@tamsin: "The eleventh, he dies. There's a twelfth. Nobody knows it but me. I made it."` },
        `She poles. She sings it, low, not looking at you: *and the eel took him down to the house of her mother, and he never came up, and he never was cold.*`,
        `@tamsin: "It's a happy song, my way. It's a *love* song." The pole goes in. "He goes down, and it's warm, and he's not on his own. That's happy. In the fen, that's the happiest there is."`,
        `@ansel: "Everybody else's way, he dies."`,
        `@tamsin: "I lie a lot," she says. "You should know that about me."`
      ],
      fx: { set: { e7_heron_verse: 1 } },
      next: 'fen_drowned'
    },
    fen_crows: {
      text: [
        `The pole stops. Just for a beat. Then it goes in again, and comes out, and the punt glides on.`,
        `@tamsin: "My gran," she says. "I told you. She's a hundred and mean and she worries."`,
        `@ansel: "Every night?"`,
        `@tamsin: "She worries a lot." She looks down at you then, and her face is very strange in the grey light. "Don't, Sergeant. Not now. Please. Ask me tomorrow. Ask me anything you like tomorrow, and I'll tell you, I swear on my mam. Just not this morning."`,
        `> Tomorrow. You let it go. You are so tired, and the punt is rocking, and she said please.`
      ],
      fx: { set: { e7_asked_crows: 1 } },
      next: 'fen_drowned'
    },
    fen_barrow: {
      text: [
        `For a while she doesn't answer. The pole goes in and out. Water drips off it.`,
        `@tamsin: "Like— with things unsaid," she says at last. "With you not knowing things. About me. That you'd want to know before you— before."`,
        `@ansel: "Then tell me."`,
        `@tamsin: "Tomorrow." Her voice cracks on it, just a little, like ice in spring. "I'll tell you all of it tomorrow. And then if you still— then we'll see." She tries to grin. It doesn't take. "Lie back. You look like a corpse."`
      ],
      fx: { set: { e7_asked_barrow: 1 } },
      next: 'fen_drowned'
    },
    fen_drowned: {
      text: [
        `Something knocks against the bottom of the punt.`,
        `Then something else. Then the water on both sides of you starts, slowly, to rise in humps, like bread proving, and out of the humps come heads. Leather-brown. Hairless. A noose of old rope around each throat. Eyes like peeled grapes.`,
        `@tamsin: "Mothers below." She has gone white under her freckles. "They're awake. They shouldn't be awake yet, she said not till—"`,
        `She stops.`,
        `@ansel: "Till what?"`,
        `@tamsin: "*Fight*, Sergeant!"`
      ],
      next: 'fen_fight'
    },
    fen_fight: {
      fight: { foes: ['drowned', 'drowned', 'sleeper'], allies: ['tamsin'], title: 'The Black Water', win: 'fen_won',
        intro: 'A punt, a pole, and the dead coming up through the mist on every side.' }
    },
    fen_won: {
      text: [
        `The last one goes down under Widow without a sound, folding back into the black water as if it were lying down in a bed.`,
        `The odd thing: none of them went for Tamsin. Not one. They came for you, all of them, reaching. She shot them off you. They never once reached for her.`,
        { if: 'f.e3_gall_charm', t: `At your throat, under your shirt, Mother Gall's charm is warm. Warm as a living hand. It has been warm, you realise, since the river.` },
        `Tamsin is breathing hard. She won't look at you. She poles on, fast now, hard, into the mist, toward a dark shape that rises out of it on long black legs: a house on stilts, lamplit, smoking at the chimney, with a bowl of milk set out on the landing-stage, and bodies, leather-brown and patient, lying all around it under the water like fish in a pond.`
      ],
      next: 'gall1'
    },

    /* ---- MOTHER GALL ---- */
    gall1: {
      loc: 'Mother Gall\'s house — the deep fen, dawn',
      text: [
        `Inside, it is warm. That is the first thing and the worst thing: it is so *warm*. A peat fire. Eels smoking in the chimney. Bunches of herbs hung from every beam, and bones, and little knotted dolls of straw and hair. A cat. A cradle, empty, rocking very slightly on its own.`,
        `Mother Gall sits by the fire in a chair too big for her, a little old woman like a dried apple, toothless and hairy-chinned, with eyes as bright and black as a wren's.`,
        `@gall: "There he is. There's my lovely. Come in, come in, dearie, you're dripping on my floor and it's a clean floor. Tamsin, love, get the man a blanket. And the wine. The good wine, the *special* wine. He's had a night."`,
        `Tamsin gets a blanket. She puts it round your shoulders without touching you. She gets the wine.`
      ],
      fx: { know: { cast: ['gall'] } },
      next: 'gall2'
    },
    gall2: {
      text: [
        `@gall: "They'd have burned you up there, you know. The Lamp. Burned you up and sent the smoke to the sky, and the sky would have *choked* on you." She cackles with delight. "Sit. Sit by the fire. Nobody burns anybody in my house. We don't hold with burning, in the fen. Do we, Tamsin."`,
        `@tamsin: "No, Gran."`,
        `Tamsin puts a cup in your hands. Horn, old, carved with something like a woman curled round a seed. The wine in it is dark and smells of honey and blackcurrant and, under that, something green and bitter.`,
        `She doesn't let go of the cup at once. Her fingers are over yours on it, for just a moment. They're cold.`
      ],
      choices: [
        { t: 'Drink. You are so tired. You are so cold. And she brought it.', go: 'gall_drink' },
        { t: 'Smell it again. Something\'s wrong with it.', check: { stat: 'wits', dc: 14, uncanny: true, pass: 'gall_smell', fail: 'gall_drink' } },
        { t: 'Look at Tamsin. Hold her eye. "Should I drink this, Tam?"', go: 'gall_ask_tam', fx: { set: { e7_drank: 'asked' } } }
      ]
    },
    gall_drink: {
      fx: { set: { e7_drank: 'drank' } },
      text: [
        `It goes down warm and sweet and lands in you like a hand closing. Your feet are suddenly heavy. Then your knees.`,
        `@gall: "That's it. That's my good boy. That's the way."`,
        `The cup is very heavy. You put it down. You miss the table. It rolls across the clean floor and stops against Tamsin's boot, and she looks down at it, and doesn't pick it up.`
      ],
      next: 'gall_reveal1'
    },
    gall_smell: {
      text: [
        `Valerian. Hemlock-water. Poppy. Sleep-smoke, the same smell that was coming down the passage under the Lanternhold; the same smoke that put the gaoler out with his mouth open. *Her gran's smoke.* You put the cup down.`,
        `@ansel: "No."`,
        `@gall: "Oh, *dear*," Mother Gall says, regretfully, and leans forward, and blows into the fire.`,
        `The smoke comes up green. It comes up very fast. You get halfway to the door before your legs go out from under you, and you land on the clean floor on your hands, and look up, and Tamsin is standing between you and the door with her hand over her mouth and nose and her eyes wet.`,
        `She doesn't move out of the way.`
      ],
      fx: { set: { e7_drank: 'refused' } },
      next: 'gall_reveal1'
    },
    gall_ask_tam: {
      text: [
        `She looks back at you. For a moment, a long moment, the whole house holds its breath: the fire, the cradle, the cat, the old woman.`,
        `Tamsin's mouth opens. Nothing comes out.`,
        `@tamsin: "Drink it, Sergeant," she says at last, very quietly. "Please. It'll be easier."`,
        `And because it's her, because she came down a drain for you, because she said please, you do.`,
        `It goes down warm and sweet and lands in you like a hand closing.`
      ],
      fx: { bond: { tamsin: -1 }, quiet: true },
      next: 'gall_reveal1'
    },
    gall_reveal1: {
      text: [
        `You're on the floor. You don't remember getting there. The boards are warm under your cheek. The cat comes and sniffs your ear.`,
        `Mother Gall gets down from her chair, slowly, joint by joint, and comes and squats beside your head like a frog, and pats your cheek.`,
        `@gall: "I felt you die, dearie. Did you know? Six years ago. I was sat by this fire and I felt it through the ground, all the way from Corran's Ford, two days' ride. A man dying on the old stone. And I waited for him to go *down*, like a good soul, down to the Mothers. Or up, the poor lamb, up to the hungry sky." Her bright black eyes shine. "And you didn't go anywhere. You just *stopped*. Like a key in a lock."`,
        `@gall: "Six years I've waited for you to come close enough. And when you came into the March, I sent my best girl to fetch you home."`
      ],
      next: 'gall_reveal2'
    },
    gall_reveal2: {
      text: [
        `You turn your head. It takes everything you have.`,
        `Tamsin is standing by the door with her arms wrapped round herself in the novice's robe, three sizes too big, and her face is the colour of tallow.`,
        `The crossroads at the Crooked Mile. *Also hired.* The bribed wagon-master. The crows at night, every night. The way she knew the fen too well. The way she said *my gran* and never said a name. The way she stopped you in the barrow.`,
        { if: "f.e1_saw_crow || f.e3_suspect_tam || f.e7_asked_crows", t: `> You knew. You've known since the first crow. You knew and you didn't ask, because you didn't want the answer, because you wanted her to sit on the back step with you and eat apples. You wanted it more than you wanted to live.`, else: `> You didn't know. You didn't know anything. You thought she was the one thing in the March that was only what it looked like.` },
        { if: 'f.e3_gall_charm', t: `@gall: "And you wore my charm, dearie, all this while. Next your heart. I always knew where you were. I could feel you *breathe*."` },
        `@tamsin: "I'm sorry," she says. "Sergeant. I'm sorry. I gave her my word. When I was fourteen. She raised me. When the Lamp burned my mam she took me in out of the ashes. I gave her my *word*."`
      ],
      choices: [
        { t: '"How long?"', go: 'gall_how_long' },
        { t: '"I knew. I think I always knew. I came anyway."', if: "f.e1_saw_crow || f.e3_suspect_tam || f.e7_asked_crows", go: 'gall_knew', fx: { set: { e7_knew: 1 } } },
        { t: '"*Not like this.* That\'s what you meant. In the barrow."', if: 'f.e6_tam_stopped', go: 'gall_barrow' },
        { t: 'Try to get up. Try to reach Widow.', go: 'gall_reach' }
      ]
    },
    gall_how_long: {
      text: [
        `@tamsin: "From the start." She can barely say it. "The waystation. The wagon. I bribed the driver to run off so Pettibone'd need a sword. I waited in the yard for you. I knew your *face*, Sergeant. Gran showed me your face in a bowl of water when I was nineteen."`,
        `@tamsin: "Everything after that was real. Everything. I swear it. The apples. The song. The barrow. All of it was real except the reason I was there."`
      ],
      next: 'gall_why'
    },
    gall_knew: {
      text: [
        `She makes a sound. It isn't a word. It's the sound of somebody being hit somewhere that doesn't bruise.`,
        `@tamsin: "Then why— why did you *come*—"`,
        `@ansel: "You said please."`,
        `She turns her face to the wall.`
      ],
      next: 'gall_why'
    },
    gall_barrow: {
      text: [
        `@tamsin: "Yes." A whisper. "I wouldn't. I wouldn't do that to you and then do *this*. I'm a thief and a liar, Sergeant, but I'm not—" She can't finish it. "I wanted to. You should know that. Before. I wanted to so much I could hardly see."`
      ],
      next: 'gall_why'
    },
    gall_reach: {
      text: [
        `You get your hand flat on the boards. You push. Your arm shakes like a newborn foal's leg and folds, and your face hits the floor again, and Widow is on the bench by the door, six feet away, as far as the moon.`,
        `Mother Gall clucks her tongue. She picks your sword up herself, with both hands, staggering a little, and gives it to Tamsin to hold.`,
        `Tamsin holds it. She holds it like it's a baby someone has handed her at a funeral.`
      ],
      next: 'gall_why'
    },
    gall_why: {
      text: [
        `@gall: "Don't take on, girl. You did right. You did *beautifully*." Gall pats your cheek again. "Now, dearie, listen, because I'll only say it the once, and you deserve to know. It's not a cruel thing I'm doing. It's the kindest thing anybody's done in a thousand years."`,
        `@gall: "Under this fen, under all the fens, there's mothers sleeping. *Our* Mothers. The ones who took the dead down warm. And somebody chained them, long ago, somebody with crowns on, and the Lamp's been sending our dead up the smoke ever since and calling it Heaven." She spits into the fire. "Up. Up where it's cold. Where the lights are."`,
        `@gall: "You're the door, lovey. The king in the barrow told you so. I'm going to lay you down in the old way, in the peat, with milk and myrtle, the way they buried my mam and hers. And they'll come up to see who's knocking."`,
        `@gall: "Go down easy, dearie. Go down easy."`
      ],
      fx: { know: { codex: ['earthburial'] } },
      next: 'bog1'
    },

    /* ---- THE BOG ---- */
    bog1: {
      loc: 'Gallowmere — the burying-pool',
      text: [
        `They carry you out. Not Gall. Not Tamsin. *Them*: the sleepers, the leather-brown dead, up out of the black water with their nooses and their peeled-grape eyes, a dozen pairs of cold patient hands under your back and your legs and your head. They carry you gently, like pall-bearers. Like lovers.`,
        `Down the ladder from the landing-stage. Into a pool of black water ringed with white stones, with bowls of milk set on every stone, and the mist lying on it, and the sky above going pale and the last stars going out one by one.`,
        `The poison is heavy in you. But you are Ansel Dray and you have died before, and you are not going quietly twice.`,
        `You get a hand free. Then the other.`
      ],
      next: 'bog_fight'
    },
    bog_fight: {
      fight: { foes: ['e7_bog'], solo: true, title: 'The Burying-Pool', win: 'bog_win', lose: 'bog_lose', noWound: true, noLoot: true, xp: 0,
        intro: 'You are drugged, waist-deep in peat, and alone. There are more of them than there are of anything. Fight anyway.' }
    },
    bog_win: {
      text: [
        `You tear them apart. You don't know how. Leather hands, leather faces, breaking under Widow like old saddles. You put a dozen of them back in the bog in pieces.`,
        `It doesn't matter. Where there was one there are three. The black water is full of them, all the way to the bottom, and the bottom is a thousand years deep. You were never fighting them. You were fighting the fen.`,
        `Your arm stops working. Then your legs. The hands close over you again, kindly, endlessly, and draw you down.`
      ],
      next: 'bog2'
    },
    bog_lose: {
      text: [
        `It is like fighting the sea. Every one you cut down sinks and another rises in its place, the same face, the same rope, the same patience. Your arm grows heavy. Then your legs. The poison comes up over you like a tide.`,
        `The hands close over you, kindly, endlessly, and draw you down.`
      ],
      next: 'bog2'
    },
    bog2: {
      text: [
        `Peat to your chest. Cold, and then not cold: warm, under the surface, warm like a body. It holds you like a fist.`,
        `On the landing-stage above, Mother Gall is singing in a language older than the Lamp, and pouring milk onto the water in a thin white stream.`,
        `Beside her, Tamsin stands with Widow in her arms. Her face is wet. Her mouth is shut so hard you can see the bone of her jaw. She is watching you. She does not look away. She does not move. She has decided, you can see it, that the least she owes you is to watch.`,
        `She does not stop it.`,
        `Peat to your shoulders. Your chin. You have one breath left that is yours to spend.`
      ],
      choices: [
        { t: 'Curse her. "I hope the Mothers choke on me. And I hope you live a long, long time."', go: 'bog_curse', fx: { set: { e7_last_words: 'curse' }, bond: { tamsin: -1 } } },
        { t: 'Forgive her. "It\'s all right, Tam. Go down easy."', go: 'bog_forgive', fx: { set: { e7_last_words: 'forgive' }, bond: { tamsin: 1 } } },
        { t: 'Say nothing. Look at her. Make her watch.', go: 'bog_silence', fx: { set: { e7_last_words: 'silence' } } }
      ]
    },
    bog_curse: {
      text: [
        `It comes out of you black and clear across the water, and you watch it land.`,
        `She flinches as if you'd thrown a knife. She doesn't step back. She takes it, all of it, straight in the face, the way she took the Ashby rain.`,
        `@tamsin: "I know," she says. "I know. I will."`
      ],
      next: 'bog3'
    },
    bog_forgive: {
      text: [
        `Her face breaks. That's the only word for it. It breaks the way ice breaks, all at once and everywhere, and she makes a sound you will hear in your sleep for years, if you have years.`,
        `@gall: "Hush, child," Gall says, not unkindly, and puts a hand on her arm. Tamsin doesn't shake it off. She doesn't do anything. She stands there with your sword in her arms and lets the old woman hold her, and watches.`
      ],
      next: 'bog3'
    },
    bog_silence: {
      text: [
        `You say nothing. You look at her. You hold her eyes across the water and you don't let go, and she doesn't let go either, and it goes on and on: no words, no curse, no mercy. Just the look. The one you gave her the first day in the yard at the Crooked Mile, while she ate Pettibone's apple. *You're going to be hard work.*`,
        `She doesn't look away. It is the bravest thing you have ever seen her do, and the worst.`
      ],
      next: 'bog3'
    },
    bog3: {
      text: [
        `The peat comes over your mouth. It tastes of iron and old leaves and milk.`,
        `Over your nose. You hold the breath. You hold it the way you held the line at Corran's Ford, with nothing left to hold it with.`,
        `The last thing you see is the sky. Pale, now, and almost empty: one star left, low in the west, white and very bright, *looking*. Looking for you. Looking straight at the place where you are, and finding nothing there.`,
        `Then the mud closes over your face.`
      ],
      fx: { quest: [{ id: 'e7_night', state: 'failed', note: 'Tamsin brought you to Mother Gall. Gall\'s sleepers dragged you down into the burying-pool. Tamsin watched.' }] },
      next: 'dark1'
    },
    dark1: {
      loc: 'Below',
      card: { kind: 'cut', title: '', sub: '' },
      text: [
        `Black.`,
        `Not cold. You expected cold.`,
        `It's warm, down here. Warm the way a body is warm, the way a bed is warm when someone has just left it. Close. Wet. A slow pressure on every inch of you, like being held.`,
        `And under the warm, under the peat, under the bones of the fen and the clay under the bones and the rock under the clay: something.`,
        `Vast. So vast that the word is wrong. So slow that a thousand years is a breath to it. It lies curled in the dark under the world the way a child lies curled in the womb, and it is dreaming, and it has been dreaming since before there was a sky.`,
        `It feels you.`
      ],
      next: 'dark2'
    },
    dark2: {
      text: [
        `You feel it feel you. All the way down. All the way through.`,
        `It turns over in its sleep. The whole of the March shifts, a hair's breadth, like a sleeper turning toward a warm body in the night. Somewhere far above you, in a town on a hill, a bell rings once on its own and nobody is pulling the rope.`,
        `And a voice comes up through the rock and the clay and the bones and the peat and into you, a voice made of stone grinding on stone, of rivers under mountains, of every buried mouth that ever went down warm. It says one word. It says it the way you'd say the name of someone you have been waiting for all your life.`,
        `**Door.**`
      ],
      fx: { know: { codex: ['mothers'] }, xp: 150 },
      end: true
    },

    /* ======================= SIDE (memories: the week before the coup) ======================= */

    /* ---- CONTRACT: Before — The Night Cart ---- */
    c_cart_1: {
      loc: 'Before · The Saltdown road — six nights ago',
      text: [
        `~ SIX NIGHTS BEFORE THE BELL.`,
        `Old Tibb finds you at the Hen with a face like a man carrying a hot coal in his mouth. He doesn't read this one off the board. He whispers it.`,
        `@tibb: "There's a cart. Goes out the north gate Tuesdays after curfew, Marshal's seal, canvas over. Goes up the Saltdown road. My sister's boy drove it once. He says the cargo don't make a sound. Not one sound, the whole night. He won't drive it again." He swallows. "There's a widow on the Stair says her husband's on it. Says she'll give you everything she's got. It's eleven silver."`,
        `It is Tuesday.`
      ],
      choices: [
        { t: 'Take the eleven silver. Go.', go: 'c_cart_2', fx: { set: { e7_cart_paid: 1 } } },
        { t: '"Keep her money. I\'ll go anyway."', go: 'c_cart_2', fx: { rep: { town: 1 } } }
      ]
    },
    c_cart_2: {
      loc: 'Before · The Saltdown road — midnight',
      text: [
        `You wait for it at the gibbet crossroads where the Saltdown road leaves the Kingsroad, under a dead man who has been there since summer.`,
        `It comes up out of the dark with no lantern: a long ox-cart with a canvas tilt, two men on the box, two more walking alongside with spears, and a crossbowman on the tail. Marshal's men. Varane blue.`,
        `The canvas is tied down at the sides. Under it, nothing moves, nothing talks, nothing weeps. You can smell them, though. Unwashed bodies, and under that, honey and lamp oil.`
      ],
      choices: [
        { t: 'Step into the road. "Open the canvas."', go: 'c_cart_fight' },
        { t: 'Cut the oxen loose from the dark first. A cart with no oxen goes nowhere.', check: { stat: 'finesse', dc: 14, pass: 'c_cart_oxen', fail: 'c_cart_fight' } }
      ]
    },
    c_cart_oxen: {
      text: [
        `You go along the ditch, low, with your knife. The traces part under it like wet bread. The near ox looks at you with mild brown eyes and goes on chewing.`,
        `When the driver whips them on, the oxen walk forward and the cart stays exactly where it is. It is the funniest thing you have seen in a month. The driver doesn't think so.`
      ],
      fx: { xp: 20 },
      next: 'c_cart_fight'
    },
    c_cart_fight: {
      fight: { foes: ['man_at_arms', 'man_at_arms', 'crossbowman'], title: 'The Night Cart', win: 'c_cart_3' }
    },
    c_cart_3: {
      text: [
        `You cut the canvas ties and throw back the tilt.`,
        `Eleven of them. Sitting on straw in two rows, facing each other like passengers on a ferry, hands in their laps. Men and women. A boy of twelve. Their eyes are open. Every one of them has a Lamp tithe-star chalked on the back of the hand, the way a drover marks sheep.`,
        `One of them is the widow's husband. You know because she described his ears. He has very large ears. He looks through you at the stars.`,
        `The Saltdown mines are two days north. Harrowgate is four hours south, and in Harrowgate, the Lanternhold takes in the Hollowed, kindly, and the next Tuesday they go out again in a cart.`
      ],
      choices: [
        { t: 'Walk them to the fen-edge. The fen-folk take in what the Lamp throws away.', go: 'c_cart_fen', fx: { rep: { fen: 2, town: 1 }, set: { e7_cart: 'fen' } } },
        { t: 'Bring them home to Harrowgate, to their families, in daylight. Let the whole town see the Marshal\'s seal.', go: 'c_cart_town', fx: { rep: { town: 2, varane: 1 }, set: { e7_cart: 'town' } } },
        { t: 'Take the Marshal\'s seal off the cart and keep it. Leave them for someone else. Evidence matters more than eleven.', go: 'c_cart_seal', fx: { set: { e7_cart: 'seal' }, rep: { town: -1 } } }
      ]
    },
    c_cart_fen: {
      text: [
        `It takes until dawn. They walk the way the Hollowed walk, patient and blind, and you lead the first by the hand and the rest follow like a string of beads.`,
        `At the fen-edge, an old woman in a reed-boat is waiting, as if she knew. She takes them one by one into the boat, and the boat out into the mist, three at a time.`,
        `@narrator: "Mothers keep you, Sergeant," she says. "You've a friend in the fen. More than one." She looks at you oddly, as if measuring you for something. "More than you know."`,
        `> At the time, you thought it was kind.`
      ],
      fx: { silver: 11, xp: 90, give: { black_draught: 1 } },
      next: 'c_cart_end'
    },
    c_cart_town: {
      text: [
        `You bring them in through the north gate at mid-morning, fourteen Hollowed on a cart with the Marshal's seal on the tailboard, and you drive it the length of the Market Stair at a walk.`,
        `People come out of their doors. Then out of their shops. Then a woman runs down the Stair screaming a name, and the man with the large ears turns his head toward her voice, slowly, and does not know her.`,
        `By noon the whole town is talking. By evening, Hask's men have taken the cart back "for the Lanternhold's care." But the town saw. The town remembers.`,
        `> Six nights later the same town would hunt you through its streets for two hundred silver. Most of it. Not all.`
      ],
      fx: { silver: 11, xp: 90 },
      next: 'c_cart_end'
    },
    c_cart_seal: {
      text: [
        `You pry the brass seal off the tailboard with your knife: the Varane boar, the Marshal's mark beneath it. Proof.`,
        `You leave them sitting in the cart in the road with the stars on their faces. In the morning, someone will find them. Probably Hask's men. Probably they'll be in Saltdown by Thursday.`,
        `You tell yourself it's arithmetic. You've heard someone else say that.`
      ],
      fx: { xp: 70, give: { iron_scrap: 1 } },
      next: 'c_cart_end'
    },
    c_cart_end: {
      text: [
        `~ That was six nights before the bell. In the burying-pool, in the dark, you don't remember any of it. Something under you does.`
      ],
      end: true
    },

    /* ---- TALK: Before — Ulla teaches somebody to fall ---- */
    t_ulla_1: {
      loc: 'Before · The Hen\'s back yard — four days ago',
      text: [
        `~ FOUR DAYS BEFORE THE BELL.`,
        { if: 'f.e2_hob_hired', t: `Ulla has Hob in the back yard of the Hen, in the mud, and is throwing him down. Over and over. He gets up every time with mud to the eyebrows and a grin, and she throws him down again.`, else: `Ulla has Pell in the back yard of the Hen, in the mud, and is attempting to throw him down. Pell is attempting to negotiate.` },
        { if: 'f.e2_hob_hired', t: `@ulla: "No! No. You fall like a sack of turnips. Turnips break. Fall like a *cat*. Tuck the chin. Slap the ground with your arm, it takes the blow. Again."`, else: [`@pell: "I'm fifty-four, madam. I don't fall. I *descend*, with dignity, onto a chair."`, `@ulla: "In a fight there are no chairs, priest. Tuck the chin."`] },
        `You lean in the kitchen door with a cup and watch.`
      ],
      choices: [
        { t: 'Get in the mud and show them how the Red Company did it.', go: 't_ulla_2', fx: { bond: { ulla: 1 } } },
        { t: 'Heckle. Loudly. Score each fall out of ten.', go: 't_ulla_3', fx: { set: { e7_heckled: 1 } } }
      ]
    },
    t_ulla_2: {
      text: [
        `You put the cup down and come out. Ulla raises an eyebrow and then, without warning, puts you on your back in the mud so hard your teeth click.`,
        `You tucked your chin. You slapped the ground. You're fine. You lie there looking up at the grey sky and laughing, and Ulla stands over you, delighted, hands on hips.`,
        `@ulla: "You see? *That's* a fall. Thirty years of practice. Mostly drunk."`,
        { if: 'f.e2_hob_hired', t: `@hob: "Again!" Hob says. "Do it again! Do *me* like that!" And she does, and he falls like a cat, for the first time, and gets up blinking, amazed at himself. You'll remember his face. You don't know yet how much.`, else: `Pell, in the corner of the yard, applauds politely and does not volunteer.` }
      ],
      next: 't_ulla_4'
    },
    t_ulla_3: {
      text: [
        `@ansel: "Four. The landing was clean, but no artistic merit."`,
        `@ulla: "Come and say that in the mud, Dray."`,
        `@ansel: "Six. That one had pathos."`,
        { if: 'f.e2_hob_hired', t: `Hob is laughing so hard on his back in the mud that he can't get up. "What's *pathos*?" "It's when you fall over sad," Ulla says, and hauls him up by the collar. "Again."`, else: `Pell, flat on his back in the mud, raises one finger. "Pathos," he says, "is Old Corvane. And I deserved a seven."` }
      ],
      next: 't_ulla_4'
    },
    t_ulla_4: {
      text: [
        `Later, by the rain barrel, washing the mud off her forearms, Ulla says without looking at you:`,
        `@ulla: "My sister's boy was like that. All elbows and bravery. I taught him to fall too." She wrings out her braid. "He fell off a longship in a storm when he was sixteen. It didn't help."`,
        `@ulla: "But you teach them anyway. Ja? You teach them anyway. What else is there."`
      ],
      fx: { set: { e7_ulla_fall: 1 } },
      end: true
    },

    /* ---- TALK: Before — Tamsin on the wall ---- */
    t_tam7_1: {
      loc: 'Before · The town wall — two nights ago',
      text: [
        `~ TWO NIGHTS BEFORE THE BELL.`,
        `She's on the wall-walk above the Bottom, sitting in a crenel with her knees up, throwing bits of a stolen pie to a crow that sits on the next merlon and catches them. It's a big crow. It looks at you when you come up the steps. It looks at you for too long.`,
        `@tamsin: "Don't mind him. He's greedy."`,
        `The crow takes the last bit of crust and goes off into the dark, south, toward the fen.`
      ],
      choices: [
        { t: '"Friend of yours?"', go: 't_tam7_2' },
        { t: 'Sit down in the next crenel. Don\'t ask.', go: 't_tam7_3', fx: { bond: { tamsin: 1 } } }
      ]
    },
    t_tam7_2: {
      text: [
        `@tamsin: "Everybody in the fen's got a crow. Like a dog. Only more honest." She doesn't look at you. "Sergeant. Can I ask you a thing? A made-up thing."`
      ],
      next: 't_tam7_3'
    },
    t_tam7_3: {
      text: [
        `@tamsin: "Say somebody promised something. A long time ago. To somebody who saved their life. And it was a good promise, a right one, for a good reason, the best reason. And then later on, the promise meant doing a thing to someone else. A hard thing." She's picking at the stone. "Would you keep it?"`,
        `> You should have asked her who. You'll think that, later, in the dark. You should have asked her who.`
      ],
      choices: [
        { t: '"I kept every promise I made to Hask. Look where it got me."', go: 't_tam7_4a' },
        { t: '"A promise is only as good as who it\'s to."', go: 't_tam7_4b' },
        { t: '"I\'d keep it. And I\'d hate myself. And I\'d do it anyway. That\'s what promises are."', go: 't_tam7_4c' }
      ]
    },
    t_tam7_4a: {
      text: [
        `@tamsin: "That's not an answer, that's a sulk." But she's smiling, a little, sideways. "You're not much use, Sergeant."`,
        `@ansel: "Never claimed to be."`
      ],
      fx: { set: { e7_tam_promise: 'hask' } },
      next: 't_tam7_5'
    },
    t_tam7_4b: {
      text: [
        `She is quiet for a long time.`,
        `@tamsin: "She raised me," she says, so low you almost don't hear. Then, louder, brightly, wrong: "In the story. The made-up one. The person who was promised. Raised them. That's all."`
      ],
      fx: { set: { e7_tam_promise: 'who' } },
      next: 't_tam7_5'
    },
    t_tam7_4c: {
      text: [
        `She turns and looks at you properly for the first time. Something goes across her face like a cloud across the moon.`,
        `@tamsin: "Yes," she says. "Yes. That's what I thought you'd say." She sounds like she's been hit. "That's what I was afraid you'd say."`
      ],
      fx: { set: { e7_tam_promise: 'keep' } },
      next: 't_tam7_5'
    },
    t_tam7_5: {
      text: [
        `She slides down out of the crenel and dusts off her hands. Pie crumbs fall into the dark.`,
        `@tamsin: "Night, Sergeant. Sleep under something."`,
        `She goes down the wall steps. At the bottom, in the dark, she stops, the way she always stops, as if she has forgotten something, and doesn't turn round, and goes on.`,
        `~ Two nights later, the bell. You didn't know. You didn't want to.`
      ],
      end: true
    }
  },
  side: [
    { id: 'e7_c_cart', kind: 'contract', title: 'Before: The Night Cart', desc: 'A memory from six nights before the bell. A cart with the Marshal\'s seal goes up the Saltdown road on Tuesdays, and its cargo never makes a sound.', level: 7, start: 'c_cart_1' },
    { id: 'e7_t_ulla', kind: 'talk', who: 'ulla', title: 'Before: Ulla teaches somebody to fall', start: 't_ulla_1' },
    { id: 'e7_t_tamsin', kind: 'talk', who: 'tamsin', title: 'Before: A crow on the wall', start: 't_tam7_1' }
  ]
});
