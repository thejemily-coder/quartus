/* TITHE — Season One, Episode 4: "Salt" */

/* ---- E4 data additions ---- */
TITHE.CAST.e4_grisell = { name: 'Grisell', full: 'Overseer Abel Grisell', color: '#b8b2a0', role: 'The Overseer',
  bio: 'Overseer of the Saltdown mines. Corvane spectacles, salt-cracked hands, a beautiful clerk\'s hand. He has never hit anyone. He has written a great many people down.' };
TITHE.CAST.e4_jory = { name: 'Jory', full: 'Jory Pask', color: '#a6a08c', role: 'The Tally-Boy',
  bio: 'Sixteen. A debtor\'s son working off his father\'s note at Saltdown. Carries the candle. Counts the miners.' };
TITHE.ENEMIES.e4_knocker = { name: 'Saltdown Knocker', hp: 22, def: 10, arm: 1, dmg: [3, 7], acc: 2, xp: 24, silver: [2, 7], tags: ['human'],
  moves: [{ n: 'Pick-Handle', w: 3, m: 1, tele: 'swings a pick-handle bound with wire' }, { n: 'Salt in the Eyes', w: 1, m: .5, fx: 'stun', tele: 'scoops a fistful of grit' }, { n: 'Two-Hand Clout', w: 1, m: 1.7, heavy: true, tele: 'lifts the handle over his shoulder like a maul' }],
  loot: [['iron_scrap', .5, 1], ['silver_dust', .3, 1], ['spirits', .2, 1]],
  lore: 'Mine bullies. They knock on the walls to hear if the gallery is sound, and on men to hear if they are.' };
TITHE.CODEX.e4_tags = { title: 'Tally-Tags', text: 'Strips of lead, stamped with the Lanternhold star and a number, wired round the wrists of the Hollowed sent north to Saltdown. Overseer Grisell\'s ledger matches each number to a name, a village, and a price. The usual price is forty silver.' };

TITHE.episode({
  n: 4, title: 'Salt',
  logline: 'Lord Varane sends Ansel north to find out why his salt mines have stopped paying. In the deep galleries something is eating the miners, and something else is keeping count.',
  start: 'start',
  credits: ['ansel', 'tamsin', 'ulla', 'pell', 'hob', 'varane', 'isolde', 'hask', 'e4_grisell', 'e4_jory', 'tallyman'],
  previously: [
    { t: 'At Corran\'s Ford, Ansel Dray died on a star-cut stone. A grey man with a ledger could not find him. He woke anyway.' },
    { t: 'Ser Konrad Hask, who sold the Red Company, is Marshal of Harrowgate. He likes Ansel. He always did.' },
    { if: "f.e1_ashby==='led'", t: 'Thirty-one empty people from Ashby walked behind a cloth wagon to the Lanternhold. The Lamplighters led them up the hill by the hand.' },
    { t: 'Lady Isolde\'s maid Annet was found in the cisterns, breathing, empty, with Lamp chalk on the wall.' },
    { if: 'f.e2_isolde_hired', t: 'Isolde asked Ansel to keep looking. Quietly.' },
    { if: 'f.e2_pell_joined', t: 'Brother Pell was thrown out of the Lanternhold for asking what happens in the crypt. He drinks. He came along.' },
    { t: 'The Lampwardens came to Harrowgate hunting "a soul uncounted by Heaven." Their caged oracle told Ansel: "You are not counted."' },
    { if: "f.e3_edda==='burned'", t: 'Edda Moss burned in the market for putting her father in the ground.' },
    { if: "f.e3_edda==='saved'", t: 'Edda Moss did not burn. The Lampwardens have not forgotten whose doing that was.' },
    { if: "f.e3_edda==='mercy'", t: 'Tamsin put an arrow through Edda Moss\'s heart on the pyre, before the fire reached her.' },
    { if: 'f.e3_suspect_tam', t: 'In the fen, Mother Gall knew Ansel\'s name. She and Tamsin pretended to be strangers. Not well enough.' },
    { t: 'Lord Varane noticed the dead sergeant. "I should like, one day soon, to send somebody who is not Konrad to look at the damp."' }
  ],
  nextTime: [
    '"Ten men in this castle who are not the Marshal\'s. You\'re the fourth I\'ve found."',
    'Lanterns by the thousand, rising toward the stars.',
    '"I collect things that shouldn\'t exist, Sergeant."'
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    start: {
      fx: { party: { remove: ['ulla', 'brannagh', 'oriel', 'mags', 'rusk'], add: ['tamsin', 'pell'] } },
      route: [
        { if: 'f.e2_hob_hired', fx: { party: { add: ['hob'] } }, go: 'cold1' },
        { fx: { party: { remove: ['hob'] } }, go: 'cold1' }
      ]
    },
    cold1: {
      loc: 'Saltdown — the Ninth Gallery, four hundred feet down',
      text: [
        `Dark. Not night-dark. Dark the way the inside of a fist is dark.`,
        `Then a candle: a stub of tallow in a tin cup, and behind it a boy of sixteen with a slate on a string round his neck and salt in the cracks of his knuckles. Jory Pask. His father owes a man in Harrowgate eleven silver. Jory has been down here two years working it off. The note is now fourteen silver. That is how notes work.`,
        `The gallery opens out around him, white, glittering, a cathedral cut from salt. The candle finds the walls and the walls throw it back a hundred times, like a crowd of tiny lamps.`,
        `And under the sound of his own breathing: picks. Many picks. *Tock. Tock. Tock.* Unhurried. Not quite in time.`
      ],
      next: 'cold2'
    },
    cold2: {
      text: [
        `They are working in the dark. They don't need the candle. They have never asked for it.`,
        `Men and women in salt-stiff rags, strung along the face of the gallery, swinging picks. A girl with a shaved head. A big man with a ruined ear. An old woman who hits the wall like she is beating a rug. Their eyes are open. Salt dust has crusted on their lashes and nobody has blinked it away.`,
        `Each one has a strip of lead wired round the wrist, stamped with a seven-pointed star and a number.`,
        `Jory counts them, because that is his job. He touches the chalk to the slate for each one. He doesn't look at their faces any more. That is also his job.`,
        `@e4_jory: "Fourteen."`
      ],
      next: 'cold3'
    },
    cold3: {
      text: [
        `The far wall breathes.`,
        `That is the only way he will ever be able to say it. The salt bulges, gently, like a sheet with someone sitting up under it, and cracks, and pours, and out of the white comes a white head.`,
        `It is the size of a cart. It has no eyes: just smooth pale scale where eyes should be, and two long slits that open and close, tasting. It turns, slowly, toward the sound of the picks.`,
        `The old woman is nearest. She is still swinging when it takes her. It takes her the way a heron takes a frog: one movement, almost polite. Her legs kick once. Her pick rings on the floor.`,
        `The head withdraws into the wall. Salt trickles down after it like sand in an hourglass.`
      ],
      next: 'cold4'
    },
    cold4: {
      text: [
        `*Tock. Tock. Tock.*`,
        `Nobody stopped. Nobody turned round. The girl with the shaved head steps over the fallen pick and carries on cutting the face exactly where the old woman left off.`,
        `Jory Pask stands with his candle shaking and his chalk in his fist. After a long time he wets his thumb, and rubs out the last mark on the slate.`,
        `@e4_jory: "Thirteen."`,
        `He writes it down. Somebody will want the number.`
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { cast: ['e4_jory'], beast: ['salt_wyrm'] } },
      next: 'hen1'
    },

    /* ======================= ACT ONE: HARROWGATE ======================= */
    hen1: {
      loc: 'The Gutted Hen — morning',
      text: [
        `Rain on the shutters. A headache with a heartbeat. You are sitting on the edge of the bed with your boots in your hands, waiting for your fingers to agree to do laces.`,
        { if: "f.e3_edda==='burned'", t: `There is still ash in the gutters of the Market Stair. Nobody has swept it. Nobody wants to be the one who sweeps it.` },
        { if: "f.e3_edda==='saved'", t: `Somewhere under your feet, in Mags's cellar or somewhere like it, a fen girl who should be ash is eating porridge. The Lampwardens are still kicking in doors on the Tanners' Bottom looking for her. You can hear them some mornings.` },
        { if: "f.e3_edda==='mercy'", t: `You still hear it some mornings: the thrum of Tamsin's bowstring across the market, and then the crowd going quiet all at once, like a candle pinched out.` },
        `Downstairs, Mags is shouting at somebody. Then she isn't. Then there are feet on the stairs, careful feet, a servant's feet, and a knock.`,
        `A page in the Varane blue, nine years old and terrified of you.`,
        `@narrator: "His lordship's compliments, Sergeant Dray, and would you attend him in the solar. Now. Please. And— and your people. He said your people."`
      ],
      choices: [
        { t: '"Tell his lordship I\'ll come when I\'ve had breakfast."', go: 'hen2', fx: { set: { e4_breakfast: 1 } } },
        { t: 'Give the boy a penny and get your boots on.', go: 'hen2', fx: { silver: -1, rep: { varane: 1 } } },
        { t: '"My people." Try the words out. They taste strange.', go: 'hen2', fx: { set: { e4_my_people: 1 } } }
      ]
    },
    hen2: {
      text: [
        { if: 'f.e4_breakfast', t: `The page goes white. Mags, at the foot of the stairs, goes red. You eat breakfast. It takes four minutes. You make them count.` },
        { if: 'f.e4_my_people', t: `You haven't had people in six years. You had a company once. Four hundred spears. You say it out loud to the empty room after the boy has gone: *my people.* It sounds like a lie, or a promise. You haven't decided which.` },
        `Tamsin is already in the common room, feet on a table, eating a heel of bread she did not pay for.`,
        { if: 'f.e2_pell_joined', t: `Brother Pell is under the next table. Not hiding. Asleep. He comes out when Tamsin kicks him, wincing, holding his head together with both hands like a cracked jug.` },
        { if: 'f.e2_hob_hired', t: `Hob is in the yard already, saddling Ox, and Ox is letting him, which is either love or a trap.` },
        `@tamsin: "Lord wants us? All of us? Saints. Sergeant, we're getting respectable. I'll have to stop stealing from people with titles."`,
        `@pell: "You've never stolen from anyone with a title in your life."`,
        `@tamsin: "Because I'm *careful*, Pell."`
      ],
      next: 'solar1'
    },
    solar1: {
      loc: 'Varane Keep — the Lord\'s Solar',
      text: [
        `The solar is cold. That is the first thing. There is a fire in the great hearth and it is a small one, four sticks laid with a miser's care, and the room is big enough to stable horses in.`,
        `Lord Aurel Varane sits by the fire with his right foot up on a stool, wrapped in linen like a pudding. Fifty-five, soft-jawed, kind eyes gone watery. He has the face of a man who has spent his life being disappointed apologetically.`,
        `Behind him, covering most of a wall, a map: the March of Harrowgate, inked beautifully, and across it a blue line, a canal, running from the river toward the hills. The line stops halfway. Past that point it is only pencil, and past the pencil, nothing.`,
        `By the window, at a writing-slope, Lady Isolde. Grey gown, ink on her second finger, hair pinned up with what looks like a pen. She doesn't look up when you come in. She finishes her line first.`,
        `@varane: "Sergeant Dray. Come in. Come in, come in. Forgive me not getting up. My foot and I are not on speaking terms." He waves you to a stool. "I said I would send. I find I am sending sooner than I meant."`
      ],
      fx: { know: { cast: ['varane', 'isolde'] } },
      next: 'solar2'
    },
    solar2: {
      text: [
        `@varane: "Since we spoke, I have had another letter from Saltdown. My daughter tells me you are honest, which is a thing she says about almost nobody, including me." A small, sad smile. "So I will be honest. My problem in the north has got worse."`,
        `@varane: "Saltdown. Salt and a little silver. The mines have paid for this house for two hundred years. They have paid for my roof, my men, my daughter's tutors." He doesn't look at the canal. Everyone in the room is not looking at the canal. "This year they have paid for almost nothing."`,
        `@isolde: "Three parts in five down on last year." She still doesn't look up. "Three in four on the year before. And we send more men up every month. The miners are vanishing. The overseer's letters say fever."`,
        `@varane: "And Konrad says damp." He spreads his soft hands. "They cannot even agree on it, Sergeant. That is what finally frightened me."`
      ],
      next: 'solar_hub'
    },
    solar_hub: {
      choices: [
        { t: '"Why not send the Marshal?"', go: 'solar_hask', once: true },
        { t: 'Look at Isolde. "You don\'t believe it\'s fever."', go: 'solar_isolde', once: true },
        { t: 'Look at the canal.', go: 'solar_canal', once: true },
        { t: '"What does it pay?"', go: 'solar_pay', once: true },
        { t: '"We\'ll go."', go: 'solar_accept' }
      ]
    },
    solar_hask: {
      text: [
        `Varane's face does something complicated and tired.`,
        `@varane: "Konrad is a very capable man. The town adores him. My men adore him. He tells me everything is in hand, and he is so very good at it that I find I believe him while he is in the room." He looks at his foot. "And then he leaves the room."`,
        `@varane: "I am not a clever man, Sergeant. My daughter is the clever one. But I know when I have been told the same thing too many times in too pleasant a voice."`
      ],
      fx: { rep: { varane: 1 } },
      next: 'solar_hub'
    },
    solar_isolde: {
      text: [
        `Now she looks up. Grey eyes. You had forgotten, or told yourself you had, how directly she looks at things.`,
        `@isolde: "I believe numbers. We pay for bread for three hundred and eleven miners at Saltdown. We pay for candles for forty." She turns the ledger round on the slope so you could read it if you came closer. You don't. "Either two hundred and seventy men are mining salt in the dark, Sergeant, or someone is eating their bread."`,
        { if: 'f.e2_isolde_hired', t: `@isolde: "And people are going missing in this town, as you and I have reason to know. I would like to know where they go. I would like it written down."` }
      ],
      fx: { set: { e4_bread_clue: 1 } },
      next: 'solar_hub'
    },
    solar_canal: {
      text: [
        `You look at it long enough that Varane notices.`,
        `@varane: "Yes. That." He doesn't get angry. That's the worst of it. "The Varane Cut. It was going to bring barges to the hills, salt to the sea, money back up the river. My grandfather's dream. My father's. Mine. I spent the March's treasury on it, and then the Crown's loans, and then my wife's jewels." A pause. "She was very gracious about the jewels."`,
        `@varane: "The money ran out at a place called Coldwater. There is a very fine ditch there, half a mile long. Ducks enjoy it."`,
        `@isolde: "Father."`,
        `@varane: "She thinks I shouldn't tell people. I think a man ought to know what kind of fool is hiring him."`
      ],
      fx: { set: { e4_canal: 1 } },
      next: 'solar_hub'
    },
    solar_pay: {
      text: [
        `@varane: "Isolde?"`,
        `@isolde: "A hundred silver. Half now. Bed and board at Saltdown on the house account. A writ under my father's seal letting you go anywhere in the mines and question anyone." She has the writ already written. Of course she does. "If you find something that restores the revenue, a tenth of the first year's improvement."`,
        `@tamsin: "...What's a tenth of a year's salt?"`,
        `@isolde: "About four hundred silver, Miss Vell, if the mine recovers."`,
        `Tamsin sits down rather suddenly on a footstool.`
      ],
      next: 'solar_hub'
    },
    solar_accept: {
      text: [
        `@varane: "Good. Good man." He means it. He looks almost ashamed of how relieved he is. "Konrad will be— well. Konrad will be Konrad. Leave Konrad to me."`,
        `Isolde rises, sands the writ, folds it, seals it, and brings it to you herself rather than give it to a servant. Up close she smells of ink and cold rooms. She holds onto the writ a moment after you've taken hold of it.`,
        `@isolde: "Write everything down, Sergeant. Names. Numbers. If someone is lying to my father, I want to be able to prove it in a hall full of people who would rather not know."`
      ],
      fx: { silver: 50, rep: { varane: 1 }, quest: { id: 'e4_salt', title: 'Salt', state: 'active', note: 'Lord Varane has hired you to find out why the Saltdown mines have stopped paying. The overseer says fever. Isolde says somebody is eating three hundred miners\' bread.' } },
      next: 'isolde_door'
    },
    isolde_door: {
      loc: 'Varane Keep — the gallery outside the solar',
      text: [
        `She walks you out. Her people let her; the old nurse who brought you to her the first time follows ten paces behind, being deaf.`,
        { t: `@isolde: "I was up at the white ward this morning. Annet sits at the window there. She eats if you put the spoon in her hand. If you don't, she sits with her mouth open, waiting." Her voice is perfectly level. "I put the spoon in her hand myself. The Lamplighters find it distressing."` },
        { if: "f.e2_annet_where!=='lanternhold'", t: `@isolde: "My father sent her up there. He says it is the kindest house in the March." A pause. "He is a kind man, Sergeant. Kind men are expensive. Somebody is always willing to let them pay."`, else: `@isolde: "My father is a kind man, Sergeant. Kind men are expensive. Somebody is always willing to let them pay."` },
        `She stops at the head of the stair. The light from the arrow-slit lies across her face like a bar.`,
        `@isolde: "Why do you do this? Not for the money. You'd have haggled harder."`
      ],
      choices: [
        { t: '"Because somebody sold me once. I\'d like to see what the going rate is now."', go: 'isolde_door_a', fx: { set: { e4_isolde_rate: 1 } } },
        { t: '"For the money. I\'m just bad at haggling."', go: 'isolde_door_b' },
        { t: '"Because you asked me to."', go: 'isolde_door_c', fx: { bond: { isolde: 1 }, set: { e4_isolde_asked: 1 } } }
      ]
    },
    isolde_door_a: {
      text: [
        `She takes that in. She doesn't pretend not to understand it.`,
        `@isolde: "Then we want the same ledger." A pause. "Come back alive, please. I'm told it's a habit of yours."`
      ],
      next: 'hask_yard1'
    },
    isolde_door_b: {
      text: [
        `@isolde: "Liar." Not unkindly. Almost amused. "You're very bad at that, too. I'll add it to the list."`,
        `@ansel: "There's a list?"`,
        `@isolde: "I keep lists of everything, Sergeant. It's the only way I sleep."`
      ],
      next: 'hask_yard1'
    },
    isolde_door_c: {
      text: [
        `It comes out before you've thought about it. It hangs there in the cold gallery.`,
        `Her composure doesn't crack. But it does something: it holds very still, the way water holds still when something has moved under it.`,
        `@isolde: "That," she says carefully, "is not a sound business reason."`,
        `@ansel: "No, my lady."`,
        `She goes back to the solar without another word. At the door she looks back. Only once. Only briefly. Long enough.`
      ],
      next: 'hask_yard1'
    },
    hask_yard1: {
      loc: 'Varane Keep — the stable yard',
      text: [
        `He is waiting by Ox.`,
        `Of course he is. Leaning on the stall door in his good blue cloak, feeding your horse a winter apple from the flat of his palm. Ox, who bites everyone, is eating out of Konrad Hask's hand like a lamb.`,
        `@hask: "Sergeant. You'll want to tighten this girth before you ride. He blows out when you saddle him. Always did, the cunning old sod."`,
        `He tightens it himself. Then he turns round, and he is smiling, and it is the warmest smile in Harrowgate, and his eyes are two nails.`,
        { if: "f.e2_hask_job==='took'", t: `@hask: "I gave you a job, Ansel. I gave you a *good* job. I put silver in your purse and my name over your head. And the first time the old man crooks his finger, you go creeping up his stair behind my back to look in my mines."` },
        { if: "f.e2_hask_job!=='took'", t: `@hask: "You wouldn't take my silver. Fine. Pride. I understand pride, I used to have some. But you'll take his? To go and poke about in *my* concession? Ansel. That hurts. That genuinely hurts."` }
      ],
      fx: { know: { cast: ['hask'] } },
      choices: [
        { t: '"It\'s Varane\'s mine. You\'re Varane\'s dog. Sit."', go: 'hask_yard_dog', fx: { set: { e4_hask_yard: 'dog' }, rep: { town: 1 } } },
        { t: '"Then come with us, Captain. Show me the fever yourself."', go: 'hask_yard_come', fx: { set: { e4_hask_yard: 'invite' } } },
        { t: 'Watch his hands, not his face. "What\'s in the carts, Konrad?"', check: { stat: 'wits', dc: 13, pass: 'hask_yard_read', fail: 'hask_yard_misread' } },
        { t: 'Unpin his brass boar from your coat and drop it in the straw at his feet.', if: "f.e2_hask_job==='took'", go: 'hask_yard_badge', fx: { set: { e4_hask_yard: 'badge', e4_badge_returned: 1 } } }
      ]
    },
    hask_yard_badge: {
      text: [
        `He looks down at it. He doesn't pick it up straight away. He lets you watch him not pick it up.`,
        `Then he stoops, and wipes the straw off the little boar on his sleeve, and reaches past you and pins it to Ox's headstall.`,
        `@hask: "There. He can wear it. He's the only one of you that ever did as he was told." He pats the dun neck. Ox, the traitor, leans into it. "Mind you bring my badge back, Ansel. I'll want it for the next man."`
      ],
      next: 'hask_yard2'
    },
    hask_yard_dog: {
      text: [
        `For a moment nothing happens on his face at all. Then he laughs, delighted, and slaps the stall door so Ox jumps.`,
        `@hask: "*There* he is. Saints, I missed you. Nobody talks to me like that any more. They all want something." He leans in. His breath smells of cloves. "You want something too. That's what makes you interesting, and it's what's going to get you killed."`
      ],
      next: 'hask_yard2'
    },
    hask_yard_come: {
      text: [
        `@hask: "Up to Saltdown? In autumn? With my knees?" He grins. "No, no. You go. You're Varane's man now, go and earn his money. I'll be here, keeping his town from burning down. Somebody has to."`,
        `He says *his town* the way a man says *my wife* about someone else's.`
      ],
      next: 'hask_yard2'
    },
    hask_yard_read: {
      text: [
        `Not the face. Never the face; the face is his best weapon. The hands.`,
        `When you say *carts*, his right thumb goes to the pommel of Kingsmercy and rubs it, once, the way it used to before a parley he expected to go bad. You watched that thumb for ten years. You know what it means. It means he's counting the cost.`,
        `@hask: "Carts? Supplies. Bread. Picks. Debtors working off their notes. The Lanternhold sends up the odd charity case, poor souls, the work does them good." Smooth as cream.`,
        `> He knows exactly what's in the carts. And he's not afraid you'll find it. He's afraid of what you'll do when you do.`
      ],
      fx: { set: { e4_hask_yard: 'read' }, xp: 20 },
      next: 'hask_yard2'
    },
    hask_yard_misread: {
      text: [
        `@hask: "Carts? Supplies. Bread. Picks. Debtors working off their notes." He spreads his hands. Open, easy, a man with nothing to hide. You can't see a thing behind it. You never could; that was the trick of him.`,
        `@hask: "You always did think there was a knife behind every door, Ansel. Some doors are just doors."`
      ],
      fx: { set: { e4_hask_yard: 'misread' } },
      next: 'hask_yard2'
    },
    hask_yard2: {
      text: [
        `He looks past you, at the others. At Pell, who is trying to be very interested in a hay-bale. At Tamsin, who is not trying to be anything.`,
        `@hask: "Pretty bowyer. Fen girl, isn't she? You can always tell. Something about the vowels." He smiles at her. "Brave of you, walking about in daylight, the month the Lampwardens are having. They're hunting fen girls, I hear. I'd hate for anyone to make a mistake."`,
        `Tamsin smiles back, chipped tooth and all.`,
        `@tamsin: "I'd hate that too, Marshal. Mistakes are so hard to take back."`,
        `Hask laughs again. He swings up onto his grey, gathers the reins, and looks down at you.`,
        `@hask: "Mind the deep galleries, Sergeant. There are things down there that don't care whose name is on the writ."`
      ],
      fx: { quest: { id: 'hask', note: 'Hask holds the Saltdown concession. He did not want you going north. He warned you about the deep galleries.' } },
      next: 'road1'
    },

    /* ======================= ACT TWO: THE NORTH ROAD ======================= */
    road1: {
      card: { kind: 'act', title: 'Part One', sub: 'The North Road' },
      loc: 'The Saltdown Road — afternoon',
      text: [
        `North out of Harrowgate the country lifts and pales. The mud gives way to chalk, the hedges to sheep-bitten downland, and the sky gets bigger, which you do not enjoy. Barrows on the skyline, grassed over, like sleeping animals.`,
        { if: "inParty('hob')", t: `Hob rides a borrowed mule and asks you questions about the Red Company for eleven miles. How many men in a file. How you hold a pike against horse. Whether it's true you once killed three men with a cooking pot. (Two. The third one slipped.)` },
        `Pell drinks steadily from a flask and talks about salt: how the Lamp blesses it, how it keeps meat, how the Book of Embers says the stars are salt scattered on the dark "to keep the world from rotting."`,
        `@pell: "Which is a lovely image, and theologically indefensible, and I was sent to bed without supper for pointing that out at the age of fourteen."`,
        `Toward dusk, on the long chalk climb under Gallows Down, you overtake a cart.`
      ],
      next: 'road2'
    },
    road2: {
      text: [
        `A big four-wheeled wain, ox-drawn, with an oiled canvas tilt laced down tight. Two of Hask's men walk beside it with spears on their shoulders and their collars up. On the tailboard someone has painted, neatly, a seven-pointed star.`,
        `The canvas is moving. Not much. The way a sheet moves over somebody breathing.`,
        { if: 'f.e3_rusk_carts', t: `> *People. Sitting in rows, very nicely, hands in their laps.* Rusk stopped one of these once. She let it go on.` },
        `The carter sees you coming and lifts his whip in greeting, friendly as anything.`,
        `@narrator: "Evening! Bound for Saltdown? Us too. Lanternhold's charity." He jerks a thumb at the tilt. "Poor souls. Work's good for them, the Abbess says. Gives 'em a purpose."`
      ],
      choices: [
        { t: 'Hold up Isolde\'s writ. "Under his lordship\'s seal. Unlace it."', check: { stat: 'presence', dc: 12, pass: 'road_look', fail: 'road_refuse' } },
        { t: 'Ride alongside and lift the canvas yourself with Widow\'s point.', go: 'road_look', fx: { set: { e4_cart_rough: 1 } } },
        { t: 'Let it pass. You\'ll see enough at Saltdown.', go: 'road_pass' }
      ]
    },
    road_refuse: {
      text: [
        `@narrator: "Can't read, friend," says the carter cheerfully, which may even be true. "Marshal's orders. Nobody touches the tilt."`,
        `One of the spearmen shifts his grip. Tamsin, without any fuss, has an arrow on the string. Nobody is looking at anybody.`,
        `Then you lean out of the saddle and cut the lacing with one stroke, and the canvas falls open, and it's too late for everyone.`
      ],
      fx: { set: { e4_cart_rough: 1 } },
      next: 'road_look'
    },
    road_look: {
      text: [
        `Nine people sit in the straw in two rows, facing each other, knees almost touching, like guests at a long silent supper.`,
        `A woman in a good wool dress with the hem torn. Two boys who might be brothers. A man in what was once a Harrowgate watchman's coat. A young fen-woman with bog-myrtle still twisted into her braid. Their hands lie in their laps, palms up. Round each left wrist, a strip of grey lead, wired tight, stamped with the star and a number.`,
        `None of them looks at the light. None of them looks at you.`,
        { if: "f.e1_ashby==='led'", t: `> You walked thirty-one of these up a hill and handed them to gentle young men in grey. You never asked where the hill went after that.` },
        `@pell: "Oh," says Pell, very quietly behind you. "Oh, no. Oh, Morwenna. No."`
      ],
      fx: { know: { codex: ['e4_tags'] }, quest: { id: 'e4_salt', note: 'On the Saltdown road, a Lanternhold cart full of Hollowed, each tagged at the wrist with a number. Hask\'s men escorting.' } },
      next: 'road_wolves'
    },
    road_pass: {
      text: [
        `You rein in and let the cart grind on ahead up the chalk. The canvas sways. Tamsin watches it the whole way up the hill with her mouth set.`,
        `@tamsin: "You know what's in there."`,
        `@ansel: "I know."`,
        `@tamsin: "Then why—"`,
        `@ansel: "Because if I look now, I'll do something about it now, and there are two spears and a ditch and we're four hours from anywhere."`,
        `She doesn't answer. Then the wolves decide it for you.`
      ],
      fx: { set: { e4_road_passed: 1 } },
      next: 'road_wolves'
    },
    road_wolves: {
      loc: 'Gallows Down — dusk',
      text: [
        `The oxen smell it first. They bawl and throw their heads, and the cart slews half across the road.`,
        `Out of the gorse at the top of the down come wolves: a grey bitch, lean as a whip, and behind her something that is not a wolf any more, the size of a pony, with a grey-white ruff and a mouth full of yellow.`,
        `Hask's two spearmen take one look and run. To be fair to them, they run fast.`,
        `The dire wolf goes straight for the cart. Straight past the oxen, past the screaming carter, to the tailboard, where nine people sit facing each other in the straw and do not move, do not run, do not lift their hands.`,
        `It takes the nearest boy by the shoulder and drags him out onto the chalk, and he does not make a sound.`
      ],
      fight: { foes: ['dire_wolf', 'wolf'], title: 'Gallows Down', win: 'road_after',
        intro: 'They don\'t run. That\'s why the wolves came. Kill the big one before it feeds.' }
    },
    road_after: {
      text: [
        `When it's done the dire wolf lies across the road like a fallen door, and the grey bitch has crawled into the gorse to die where you can hear her.`,
        `The boy is sitting up on the chalk. His shoulder is open to the bone. He is looking at the sky with mild interest, as if the stars, coming out now one by one, are something he has heard about but never seen. His brother is still in the cart, still sitting, hands palm-up in his lap.`,
        `@pell: "Let me— let me, I've done this, I used to do this—" Pell is on his knees with his flask, pouring it into the wound, and his hands are perfectly steady for the first time since you've known him.`,
        `The carter comes back down the hill. The spearmen do not.`,
        `@narrator: "That's— thank you, friend, that's— Marshal'll hear how you saved his property, he'll—"`,
        `@tamsin: "*Property.*"`,
        `@narrator: "Forty silver a head," the carter says, as if that explains it. And it does.`
      ],
      fx: { set: { e4_saved_boy: 1, e4_pell_steady: 1 } },
      choices: [
        { t: 'Make the carter walk ahead of you all the way to Saltdown. Let him think about what he said.', go: 'saltdown1', fx: { set: { e4_carter: 'walked' } } },
        { t: 'Ask him how many carts. How often. Since when.', go: 'road_carter', once: true },
        { t: 'Hit him. Once. Then ride on.', go: 'saltdown1', fx: { set: { e4_carter: 'hit' } } }
      ]
    },
    road_carter: {
      text: [
        `@narrator: "Since spring. A cart a week, sometimes two. From the Lanternhold yard, after dark, by the lime-kiln gate." He licks his lips. "I just drive, friend. I'm paid to drive. Overseer Grisell signs for 'em at the top and gives me a chit and I take the chit to the Marshal's clerk. That's all. That's all I know."`,
        `@pell: "A cart a week since spring." Pell is doing sums on his fingers. He stops doing them. He doesn't want the answer.`
      ],
      fx: { set: { e4_carts_since_spring: 1 }, quest: { id: 'e4_salt', note: 'A cart a week since spring, from the Lanternhold yard by the lime-kiln gate. Signed for by an Overseer Grisell.' } },
      choices: [
        { t: 'Make him walk ahead of you to Saltdown.', go: 'saltdown1', fx: { set: { e4_carter: 'walked' } } },
        { t: 'Hit him. Once.', go: 'saltdown1', fx: { set: { e4_carter: 'hit' } } }
      ]
    },

    /* ======================= ACT TWO: SALTDOWN ======================= */
    saltdown1: {
      loc: 'Saltdown — the pithead, nightfall',
      text: [
        { if: "f.e4_carter==='walked'", t: `The carter walks the last four miles in front of Ox with his whip in his hand and his head down. Ox bites him twice. You don't stop him either time.` },
        { if: "f.e4_carter==='hit'", t: `The carter drives the last four miles with a split lip and a great deal of silence.` },
        `Saltdown is a hill with its guts out. A great wooden wheel turning against the last of the light, ropes groaning over it down into a black square shaft. Around the shaft, sheds, spoil-heaps, a chapel with a tin star, and long iron salt-pans steaming over furnaces, so the whole place smells like the sea and a smithy and a sickroom at once.`,
        `Everything is white. The roofs, the ground, the men. Salt in the ruts. Salt on the dog asleep by the forge. Salt crusted at the corners of your mouth before you've got off your horse.`,
        `A man comes down the steps of the counting-house to meet you, holding a lantern up, polite as a churchwarden.`
      ],
      next: 'grisell1'
    },
    grisell1: {
      loc: 'Saltdown — the counting-house steps',
      text: [
        `Narrow, fifty, neat. A dark coat brushed clean of salt, which up here must take an hour a day. Little round Corvane spectacles. Hands cracked and raw across the knuckles, and an ink-callus on the second finger exactly like Isolde's.`,
        `He reads the writ by lantern-light twice, moving his lips slightly, then folds it along its own creases and hands it back as if returning something borrowed from a library.`,
        `@e4_grisell: "Abel Grisell. Overseer. His lordship's seal; of course. Of course. You're very welcome, Sergeant. I'll have beds made up. You'll forgive the plainness. We are a working house."`,
        `@e4_grisell: "I've written to his lordship about the fever. Several times. I'm glad he's sent someone to see. It's very bad in the lower galleries. Very bad. I've had to close them."`
      ],
      fx: { know: { cast: ['e4_grisell'] } },
      next: 'grisell_hub'
    },
    grisell_hub: {
      choices: [
        { t: '"What kind of fever?"', go: 'grisell_fever', once: true },
        { t: '"Tell me about the lead tags on their wrists."', go: 'grisell_tags', once: true, if: '!f.e4_road_passed' },
        { t: '"Forty silver a head. That\'s the price, isn\'t it?"', go: 'grisell_price', once: true },
        { t: '"I\'ll see the lower galleries tomorrow. First thing."', go: 'grisell_end' }
      ]
    },
    grisell_fever: {
      text: [
        `@e4_grisell: "A wasting. A quietness. They stop speaking, then they stop eating, then—" He makes a small, neat gesture, like closing a book. "Very sad. Very sad. Brother Lamplighters come up from Harrowgate from time to time and are a great comfort."`,
        `@pell: "Which Brothers?" Pell asks, too quickly.`,
        `Grisell looks at Pell's frayed grey robe with the star unpicked from the breast, and something in his spectacles changes.`,
        `@e4_grisell: "Ordained ones, Brother."`
      ],
      next: 'grisell_hub'
    },
    grisell_tags: {
      text: [
        `@e4_grisell: "Ah. You met Fennick's cart. Brother Fennick signs them out of the Lanternhold yard; I sign them in. We have never met. We write very nice letters." He doesn't blink. "The Lanternhold's charity cases. Poor souls with the wasting, sent up for the air and the honest work, by the Abbess's own kindness. The tags are so we can write to their families." A small smile. "Most of them haven't any. That's rather the point of charity."`,
        `> He's said it before. He's said it to himself, mostly.`
      ],
      next: 'grisell_hub'
    },
    grisell_price: {
      text: [
        `For a moment the lantern doesn't move at all.`,
        `@e4_grisell: "I'm a clerk, Sergeant. I keep the house's books. Bread, candles, rope, picks, wages." He takes his spectacles off and polishes them on a clean handkerchief. "Everything at Saltdown has a price. Salt has a price. You have a price; his lordship's paying it. I simply write it down."`,
        `He puts the spectacles back on. Behind them his eyes are the eyes of a frightened man who has decided to go on being polite until the end of the world.`
      ],
      fx: { set: { e4_grisell_warned: 1 } },
      next: 'grisell_hub'
    },
    grisell_end: {
      text: [
        `@e4_grisell: "Tomorrow. Of course." He bows. "Supper is in the guards' hall. The food is plentiful, if not distinguished. You'll want to be early. We have a guard who eats."`
      ],
      next: 'canteen1'
    },
    canteen1: {
      loc: 'Saltdown — the guards\' hall',
      text: [
        `The guards' hall is a long shed with a fire at one end and benches down the middle, full of men in salt-whitened leather who stop talking when you come in and then, at once, forget you, because something better is happening.`,
        `At the centre table, a woman is arm-wrestling two men at the same time.`,
        `One with each hand. She is enormous: six and a half feet if she's an inch, shoulders like a yoke, red hair gone grey in streaks and woven into a dozen braids with iron rings in them. Her left hand is missing the last two fingers, and she is winning with it anyway. Four empty bowls stand at her elbow. A fifth, full, steams between the two men's elbows. That is the prize.`,
        `She is singing. In Nordvik, under her breath, cheerfully, not even short of wind.`,
        `With no great sense of drama, she puts both men's hands down on the table at once, *bang*, like closing a pair of shutters, and pulls the bowl toward her.`,
        `@ulla: "Thank you, Osk. Thank you, little Benet. Next week, eh? Eat more porridge."`
      ],
      fx: { know: { cast: ['ulla'] } },
      next: 'canteen2'
    },
    canteen2: {
      text: [
        `She eats half the bowl in three swallows. Then she looks down the hall at you, and looks you over, frankly, the way a cattle-buyer looks at a bullock at the Midsummer fair: the shoulders, the scar, the sword, the way you're standing.`,
        `@ulla: "You. Varane's man with the face like an old boot." She kicks the bench opposite her out from the table. "Sit. Arm-wrestle me for your supper."`,
        `The hall is grinning. Somebody is already taking bets.`,
        `@tamsin: "Sergeant," Tamsin murmurs, "I love her."`
      ],
      choices: [
        { t: 'Sit down. Take her hand. (Might)', check: { stat: 'might', dc: 16, pass: 'ulla_win', fail: 'ulla_lose' } },
        { t: 'Sit down. "Left hand. The one with the fingers missing. Make it fair for me."', check: { stat: 'wits', dc: 13, pass: 'ulla_trick', fail: 'ulla_lose' } },
        { t: 'Put your bowl in front of her. "Save us both the trouble."', go: 'ulla_gift' }
      ]
    },
    ulla_win: {
      text: [
        `Her hand is the size of a shovel blade and as hard. You lock grips. Your elbow creaks on the planks.`,
        `It goes on for a long time. Long enough that the hall stops cheering and starts just watching. Long enough that the rope of scar up your neck goes tight and something in your shoulder makes a noise like a wet branch. Her braids swing. Her eyes are bright and delighted, inches from yours.`,
        `Then you find the place. The place every soldier finds, in the last ditch, where it isn't about strength any more but about not being the one who stops. And you don't stop.`,
        `Her knuckles touch the wood.`,
        `The hall goes mad. Ulla stares at her own hand as if it has betrayed her. Then she throws back her head and roars laughing, and reaches over and kisses you on the forehead, hard, like a blacksmith stamping a mark.`,
        `@ulla: "Ha! *Ha!* Ulla Stonehand loses her supper to an old boot! Somebody write it on the wall!"`
      ],
      fx: { set: { e4_arm: 'won' }, xp: 25, hp: -3 },
      next: 'ulla_talk'
    },
    ulla_trick: {
      text: [
        `She looks at her left hand. She looks at you. Something wicked and pleased comes into her face.`,
        `@ulla: "Clever. Cheap, but clever." She offers the three-fingered hand anyway.`,
        `It is still the strongest hand you've ever held. But a hand with two fingers missing has one place it can't close, and you find it, and you lean on it like a lever, and you win by the width of a straw.`,
        `@ulla: "*Cheat*," she says, beaming, and pushes the bowl over to you. "I like a cheat who tells me first. It is the ones who do not tell you that you have to kill."`
      ],
      fx: { set: { e4_arm: 'trick' }, xp: 20 },
      next: 'ulla_talk'
    },
    ulla_lose: {
      text: [
        `You hold her for the count of three. Then four. Then she sighs, almost apologetically, and puts your hand down on the table like a woman putting a cat off her lap.`,
        `It doesn't even hurt. That's the humiliating part.`,
        `@ulla: "Good! Good. You held. Most of them, I do it before they finish sitting down." She takes your bowl, eats it, and then, after a moment's thought, tears her own heel of bread in half and gives you the bigger piece. "Here. A man who loses should still eat. That is Nordvik law. Also I am not a monster."`
      ],
      fx: { set: { e4_arm: 'lost' } },
      next: 'ulla_talk'
    },
    ulla_gift: {
      text: [
        `She looks at the bowl. She looks at you. The hall boos.`,
        `@ulla: "No fight? Pfah. Southern men." But she eats it, every scrap, and wipes the bowl with her thumb, and something in her face has gone thoughtful.`,
        `@ulla: "You give food to a stranger who did not ask for it. Either you are very kind or you want something." She licks her thumb. "Sit. We find out which."`
      ],
      fx: { set: { e4_arm: 'gift' } },
      next: 'ulla_talk'
    },
    ulla_talk: {
      text: [
        `The hall goes back to its own noise. Ulla eats something else; you are not sure where it came from. She drinks small beer out of a jug.`,
        `@ulla: "Ulla. Stonehand, they call me, because once I punched a wall to win a bet." She shows you the knuckles of her right hand; they are a strange shape. "I won. The wall also won. Nobody lost but the hand."`,
        `@ulla: "I guard the pithead for Grisell. Eleven months. Good pay, good food, no one asks why a Nordvik woman is two hundred leagues from Nordvik." She looks at you over the jug. "You came up behind Fennick's cart, eh? So you have seen."`
      ],
      choices: [
        { t: '"You\'ve been watching them come in for eleven months. What have you done about it?"', go: 'ulla_talk_done' },
        { t: '"Why is a Nordvik woman two hundred leagues from Nordvik?"', go: 'ulla_talk_why' },
        { t: '"What\'s in the deep galleries, Ulla?"', go: 'ulla_talk_deep' }
      ]
    },
    ulla_talk_done: {
      text: [
        `She doesn't flinch. She puts the jug down.`,
        `@ulla: "Nothing." Flat and honest as a dropped stone. "I eat. I take the silver. I stand at the gate and watch them walk past me with their eyes open and I tell myself: not my country. Not my gods. Not my people." She turns the jug. "My mother would spit on me. My sister— no. My sister would not spit. That is worse."`,
        `@ulla: "So. Now you know what I am. You asked. I answered."`
      ],
      fx: { bond: { ulla: 1 }, set: { e4_ulla_shamed: 1 } },
      next: 'ulla_whisper'
    },
    ulla_talk_why: {
      text: [
        `@ulla: "Because I killed a man." She says it the way other people say *because it rained.* "My chieftain's son. He did a thing to my sister that a man does not live through, in my country, if the woman has a sister with an axe." Her eyes stay on yours, steady. "I would do it again tomorrow. Twice, if he got up."`,
        `@ulla: "So the chieftain says: Ulla Stonehand, you are no one's now. Walk until the sea is behind you. I walked. Eventually the sea was behind me." She shrugs, a movement like a hillside settling. "Then I kept walking, because I am stubborn."`
      ],
      fx: { set: { e4_ulla_exile: 1 } },
      next: 'ulla_whisper'
    },
    ulla_talk_deep: {
      text: [
        `@ulla: "The White." She says it quietly, the first quiet thing she's said. "The free miners call it that. Old men. They say it was always down there, in the deep salt, sleeping. It took a man every few years, a careless one, and they made songs about it."`,
        `@ulla: "Then the carts start. And the new miners go down, the quiet ones, and they do not run when the wall moves. They do not scream. They do not do anything." She drinks. "So the White is not sleeping now. The White has learned there is a table set for it."`
      ],
      fx: { set: { e4_heard_white: 1 } },
      next: 'ulla_whisper'
    },
    ulla_whisper: {
      text: [
        `She leans across the table. Up close she smells of woodsmoke, salt and onions.`,
        `@ulla: "You want to know where three hundred miners went? After the bell, go to the long barrack behind the chapel. Look. Then come and look at me, and tell me I am a good woman." She sits back. "Then, if you are going to do something stupid tomorrow, Varane's man, tell me first. I would like to be there."`
      ],
      next: 'barrack1'
    },
    barrack1: {
      loc: 'Saltdown — the long barrack, after the bell',
      text: [
        `The barrack is a single shed two hundred feet long, roofed with turf, floored with salt-straw. No lamps. You bring one, shuttered down to a slit.`,
        `They are lying in rows. Hundreds of them. On their backs, mostly, arms at their sides, the way you'd lay out the dead. But their chests are going up and down, and their eyes are open, and the slit of lamplight moves across a hundred open eyes and not one of them follows it.`,
        `The smell is sweat and salt and piss and the sour-milk smell of people who are fed but never washed.`,
        `At the end of the row, a boy is sitting on an upturned bucket with a slate on his knees and a tallow candle in a tin cup, counting them under his breath.`,
        `@e4_jory: "Two hundred and four. Two hundred and five." He looks up at your lamp. He doesn't seem surprised. Very little would surprise him now. "Mind your feet, sir. They don't move if you tread on them, but it's not nice."`
      ],
      fx: { quest: { id: 'e4_salt', note: 'The long barrack at Saltdown: hundreds of Hollowed, laid out in rows. A tally-boy named Jory Pask counts them every night.' } },
      next: 'jory1'
    },
    jory1: {
      text: [
        `@e4_jory: "Jory Pask. I'm the tally. I count them down in the morning and I count them up at night and I tell Mr Grisell the difference." He shows you the slate. Two columns. *Down: 211. Up: 205.* "Six today. It's mostly the Ninth. The White likes the Ninth."`,
        `@e4_jory: "Free men won't go down the Ninth any more. So they send these. They don't mind. They don't mind anything."`,
        { if: "inParty('hob')", t: `Behind you, Hob makes a small noise and goes out. You hear him being sick against the barrack wall. Then you hear him come back in, because he is Hob.` },
        `@pell: "Child, how long have you— how old are you?"`,
        `@e4_jory: "Sixteen, Brother. Two years. My da's note was eleven silver. It's fourteen now." He says it without self-pity. A sum is a sum.`
      ],
      next: 'jory_hub'
    },
    jory_hub: {
      choices: [
        { t: '"Does Grisell write all this down?"', go: 'jory_ledger', once: true },
        { t: 'Put five silver on his slate. "Toward the note."', go: 'jory_silver', cost: 5, once: true },
        { t: '"I need someone who knows the way down to the Ninth."', go: 'jory_guide' }
      ]
    },
    jory_ledger: {
      text: [
        `@e4_jory: "Mr Grisell writes everyone down." Almost proud. "He's very fair. Everyone who comes up in the carts gets a number and a line in the big book. Where they're from and what was paid. And when the White takes them he writes that too, and draws a line through, very neat, with a rule."`,
        `@e4_jory: "He keeps the big book in his counting-house. There's a little book for his lordship, with the fever in it. The big book he keeps for himself."`,
        `@tamsin: "Where in the counting-house, Jory?"`,
        `@e4_jory: "I don't know, miss." A pause. "He has a salt-crock by the desk that he never puts salt in."`
      ],
      fx: { set: { e4_crock: 1 } },
      next: 'jory_hub'
    },
    jory_silver: {
      text: [
        `He stares at the coins on the slate as if they might be a trick. Then he wipes them off into his palm, very fast, and closes his fist.`,
        `@e4_jory: "That's— sir, that's more than a third." His voice cracks. Sixteen. "Nobody's ever— thank you, sir. I'll count you in, sir. In my head. I'll put you on the up side."`
      ],
      fx: { set: { e4_jory_silver: 1 } },
      next: 'jory_hub'
    },
    jory_guide: {
      text: [
        `@e4_jory: "Down the Ninth? With the White?" He looks at you, at your sword, at Tamsin's bow. Then he looks at the rows of open eyes. "I know the way. I've carried the candle down every morning for two years."`,
        `@e4_jory: "Mr Grisell won't let you, though. He's closed the cage. He says it's the fever." He drops his voice. "It's not the fever, sir."`,
        `@ansel: "I know, Jory."`,
        `@e4_jory: "I'll come. If you're going." He holds his candle tighter. "Somebody has to count."`
      ],
      fx: { set: { e4_jory_guide: 1 } },
      next: 'counting1'
    },
    counting1: {
      loc: 'Saltdown — the counting-house, midnight',
      text: [
        `A lamp burns late in the counting-house window. Through the salt-bleared glass you can see Grisell at his desk, writing, very upright, a tankard untouched at his elbow. At midnight he puts down the pen, rubs his eyes under the spectacles, and goes out across the yard to the privy.`,
        `The door has a good Corvane lock. The window has a latch. Two knockers are dicing by the furnace forty yards away, backs to you.`,
        { if: 'f.e4_crock', t: `> A salt-crock by the desk that he never puts salt in.` },
        `@tamsin: "Well, Sergeant? We doing crimes?"`
      ],
      choices: [
        { t: 'The window latch, quick and quiet, while he\'s out. (Finesse)', check: { stat: 'finesse', dc: 14, pass: 'ledger_steal', fail: 'ledger_caught' } },
        { t: 'Wait for him to come back. Have Pell keep him talking theology while you look for the real book. (Wits)', check: { stat: 'wits', dc: 14, pass: 'ledger_wits', fail: 'ledger_caught' } },
        { t: 'Go straight to the salt-crock.', if: 'f.e4_crock', go: 'ledger_steal' },
        { t: 'Kick the door in when he comes back and take it off him.', go: 'ledger_force' }
      ]
    },
    ledger_steal: {
      text: [
        `The latch gives to the point of your knife with a click like a knuckle. You're in, and the room smells of ink and tallow and the cold mineral breath of the salt.`,
        `A tidy desk. A small ledger bound in blue, open, *To his Lordship: Accounts of the Fever,* in a clerk's lovely hand. You don't touch it.`,
        { if: 'f.e4_crock', t: `The salt-crock. Glazed brown, lidded. You lift the lid. No salt.` },
        { if: '!f.e4_crock', t: `It takes you too long. Drawers: candle-ends, string, a miniature of a plain smiling woman. Under the desk: nothing. Then the salt-crock by the chair, glazed brown, lidded, and when you tip it, no salt pours out. Something heavy slides.` },
        `A ledger. Thick as your fist. Bound in good calf, with brass corners. On the first page, in the same lovely hand: *Deliveries from the Lanternhold.*`,
        `You are back out the window with it under your coat before the privy door bangs.`
      ],
      fx: { set: { e4_ledger: 1, e4_ledger_how: 'stole' }, give: 'ledger', xp: 30 },
      next: 'ledger_read'
    },
    ledger_wits: {
      text: [
        `Pell is magnificent. You'd forgotten that he was, once, a man who argued doctrine for a living. He corners Grisell at the door with the Book of Embers' third chapter and the question of whether a soul with the wasting can still be said to *ascend*, and Grisell, who is a man who cannot leave an argument unbalanced, gets pulled in like a cart into a bog.`,
        `You stand in the corner and watch the overseer's eyes. A man who's hidden a thing looks at it when he's frightened. Grisell is frightened of Pell's question. His eyes go, twice, to a salt-crock by his chair.`,
        `When Pell finally lets him go to bed, you leave last. You take the crock's contents with you: a ledger thick as your fist, calf-bound, brass-cornered.`,
        `*Deliveries from the Lanternhold.*`
      ],
      fx: { set: { e4_ledger: 1, e4_ledger_how: 'wits' }, give: 'ledger', xp: 30 },
      next: 'ledger_read'
    },
    ledger_force: {
      text: [
        `Grisell comes back across the yard, buttoning his coat. You're standing at his door.`,
        `@e4_grisell: "Sergeant? Is something—"`,
        `You put him through it. The door was locked. It isn't now. He goes down among the splinters with his spectacles hanging off one ear, and you are across the room and tipping out drawers before he's got his breath.`,
        `@e4_grisell: "*Knockers!* Osk! *Benet!*"`,
        `The crock by the desk is heavy, and empty of salt. Inside it, a ledger thick as your fist. The yard is full of running boots.`
      ],
      fx: { set: { e4_ledger: 1, e4_ledger_how: 'force', e4_night_fight: 1 }, give: 'ledger', rep: { varane: -1 } },
      next: 'ledger_force_fight'
    },
    ledger_force_fight: {
      fight: { foes: ['e4_knocker', 'e4_knocker'], title: 'The Counting-House', win: 'ledger_force_after',
        intro: 'Two knockers in a doorway, and a clerk screaming behind you.' }
    },
    ledger_force_after: {
      text: [
        `When the second knocker goes down, Grisell is gone: out of the back, across the yard, into the guards' hall shouting for the rest.`,
        `@tamsin: "Well. That's subtle ruined." She is breathing hard and smiling. "Bring the book. Let's see what we're dying for."`
      ],
      next: 'ledger_read'
    },
    ledger_caught: {
      text: [
        `You are halfway through it when the door opens.`,
        `Grisell stands in the doorway with his lamp held up. Behind him, two knockers. He looks at you, at the open crock, at the calf-bound book in your hands, open at a page you have just had time to read.`,
        `He doesn't shout. He walks across, takes the book out of your hands as if you were a careless junior clerk, closes it, and holds it against his chest.`,
        `@e4_grisell: "This is the house's property, Sergeant. Not his lordship's. The Marshal's." Very quietly. "You'll leave in the morning. I'll write to his lordship that you were unwell."`
      ],
      fx: { set: { e4_saw_ledger: 1 } },
      next: 'ledger_glimpse'
    },
    ledger_glimpse: {
      text: [
        `But you saw the page. You'll see it for the rest of your life.`,
        `*Received of the Lanternhold, by Fennick's cart, per Ser K.H. — 9 head @ 40. Tags 301–309.*`,
        { if: "f.e1_ashby==='led'", t: `*Received of the Lanternhold, from Ashby: 31 head. 30 @ 40; 1 girl, small, @ 12.*` },
        { if: "f.e1_ashby!=='led'", t: `*Received of the Lanternhold, from the Tanners' Bottom: 6 head @ 40. 1 boy, small, @ 12.*` },
        `*Taken by the White, Ninth Gallery, this quarter: 64.* And under it, a line drawn with a rule. Very neat.`,
        `You go out past the knockers into the yard. Tamsin falls in beside you. She can't read, but she can read your face.`,
        `@tamsin: "Bad?"`,
        `@ansel: "Priced."`
      ],
      fx: { quest: { id: 'e4_salt', note: 'You saw Grisell\'s true ledger: Hollowed delivered from the Lanternhold "per Ser K.H.", at forty silver a head. He took it back.' } },
      next: 'morning1'
    },
    ledger_read: {
      loc: 'Saltdown — behind the chapel, by shuttered lamplight',
      text: [
        `You read it by a slit of lamplight behind the chapel with the others crowded close.`,
        `It is beautifully kept. That's the first horror. Every line ruled. Every sum carried.`,
        `*Received of the Lanternhold, by Fennick's cart, per Ser K.H. — 9 head @ 40. Tags 301–309.* And beneath, each one: *Tag 301. Woman, about thirty. Market Stair. Good teeth.* *Tag 302. Man, about fifty. A watchman, once.*`,
        { if: "f.e1_ashby==='led'", t: `*Received of the Lanternhold, from Ashby: 31 head. 30 @ 40. 1 girl, small, @ 12.* Your thumb is on the line. You take it away.` },
        { if: "f.e1_ashby!=='led'", t: `*Received of the Lanternhold, from the Tanners' Bottom: 6 head @ 40. 1 boy, small, @ 12.*` },
        `*Taken by the White, Ninth Gallery, this quarter: 64.* A rule through each. Very neat.`,
        `And at the foot of each quarter's page, a note: *Remitted to Ser K.H. Of which the Lord's share, per the Marshal, one fifth.*`
      ],
      fx: { quest: { id: 'e4_salt', note: 'Grisell\'s true ledger: Hollowed delivered from the Lanternhold "per Ser K.H." at forty silver a head. "The Lord\'s share, per the Marshal, one fifth."' } },
      next: 'ledger_read2'
    },
    ledger_read2: {
      text: [
        `@pell: "The Lord's share." Pell's voice is thin. "Varane? Varane *knows*?"`,
        `@ansel: "Per the Marshal. That's what it says. Not what it means."`,
        `@pell: "Can you be sure of that?"`,
        `You can't. That's the second horror.`,
        `Tamsin has been very quiet. She's been looking at the page the way she looked at the Company Roll: as a picture, not as words. Black marks in rows.`,
        `@tamsin: "Read me the fen ones," she says. "Please. If there are any."`
      ],
      choices: [
        { t: 'Find them. Read them to her, slowly, every word.', go: 'ledger_fen', fx: { set: { e4_read_fen: 1 } } },
        { t: '"There aren\'t any." (There are.)', go: 'ledger_lie', fx: { set: { e4_lied_fen: 1 } } },
        { t: 'Hand her the book. "Learn to read, and you can read them yourself. I\'ll teach you."', go: 'ledger_teach', fx: { set: { e4_teach_read: 1 } } }
      ]
    },
    ledger_fen: {
      text: [
        `There are eleven. You read them all. *Tag 188. Woman, young. Eel Weir. Myrtle in her hair.* *Tag 240. Man, old. Gallowmere. A fowler, by his hands.* Your voice stays level. You were a sergeant; you have read worse lists to worse audiences.`,
        `She listens with her eyes closed. At *Myrtle in her hair* her lips move, as if she's saying a name to herself, and you don't ask whose.`,
        `@tamsin: "Thank you," she says, when it's done. Then, very quietly, in the fen way: "Go down easy."`
      ],
      next: 'morning1'
    },
    ledger_lie: {
      text: [
        `She looks at you for a long moment. She can't read. She can count lines on a page, though, and she can read a face, and you've just turned three pages too fast.`,
        `@tamsin: "Right." She stands up. "Thanks, Sergeant." She goes off to see to the horses, and doesn't come back for a while.`
      ],
      fx: { bond: { tamsin: -1 }, quiet: true },
      next: 'morning1'
    },
    ledger_teach: {
      text: [
        `She goes red under the freckles, from the collar up. For a second you think she'll hit you.`,
        `@tamsin: "Who said I can't—" She stops. You both know. She looks at the book in her hands, the black rows. "...You'd have to be patient. I'm thick as a post."`,
        `@ansel: "You're the least thick person I've met in six years."`,
        `@tamsin: "That's not saying much, the company you keep." But she doesn't give the book back for a long time, and she keeps her finger on one line near the bottom of the page, as if holding a place.`
      ],
      next: 'morning1'
    },
    /* ======================= MORNING: THE CAGE ======================= */
    morning1: {
      loc: 'Saltdown — the winding-wheel, dawn',
      text: [
        `Dawn comes up white over white. The great wheel stands still against the sky. Under it, the cage: an iron basket on a chain, hung over the black square of the shaft, and around it a ring of knockers with pick-handles, eight or nine of them, and Grisell in the middle in his clean coat.`,
        { if: "f.e4_ledger_how==='force'", t: `His spectacles are cracked across one lens. He has a cut on his forehead from his own door. He looks at you with the terrible patience of a man who has decided that you are a sum he will make come out.` },
        { if: "f.e4_ledger_how==='stole' || f.e4_ledger_how==='wits'", t: `He knows. He found the crock empty before dawn; you can see it in the set of his mouth. He doesn't mention it. Neither do you.` },
        { if: 'f.e4_saw_ledger', t: `He has the calf-bound ledger under his arm. He is holding it the way a man holds a child in a crowd.` },
        `@e4_grisell: "The deep galleries are closed, Sergeant. Fever. I can't permit it. His lordship's writ runs to the mine; the cage is the Marshal's property, and the Marshal's orders are that no one goes down."`,
        `Behind the ring of knockers, at the gate, leaning on a great round shield with an axe through her belt, Ulla Stonehand is watching. Not you. Grisell.`
      ],
      choices: [
        { t: '"I\'m going down. Anyone between me and that cage is going down faster."', check: { stat: 'might', dc: 15, intimidate: true, pass: 'morning_scare', fail: 'morning_fight_pre' } },
        { t: 'Hold up the writ and speak to the knockers, not to him. "Varane pays your wages. Not the Marshal. Who do you work for?"', check: { stat: 'presence', dc: 15, pass: 'morning_split', fail: 'morning_fight_pre' } },
        { t: 'Look at Ulla. "Now would be the time, Stonehand."', go: 'morning_ulla' }
      ]
    },
    morning_scare: {
      text: [
        `You walk at them. You don't draw. You just walk, the way you walked at the line of Ashwick pikes at Harl's Hill when you were twenty and too stupid to be afraid, and you let them see in your face that you have killed more men than they have met.`,
        `Five of them find they have business elsewhere. That leaves three, and Grisell, who has nowhere else to go.`,
        `@e4_grisell: "Osk. Benet. *Tolly.* Please."`
      ],
      fx: { set: { e4_cage: 'scared' } },
      next: 'morning_ulla'
    },
    morning_split: {
      text: [
        `It lands. You see it land: knockers looking at each other, at the lord's seal, doing the arithmetic of whose silver spends better on the day the Marshal falls out with the lord.`,
        `Half of them lower their handles. Three don't: Grisell's three, the ones who've been here longest, the ones who have written the most down.`,
        `@e4_grisell: "Thank you, the rest of you. I shall remember your names." He means it. He always does.`
      ],
      fx: { set: { e4_cage: 'split' }, rep: { varane: 1 } },
      next: 'morning_ulla'
    },
    morning_fight_pre: {
      text: [
        `It doesn't land. Grisell lifts one cracked hand, almost apologetically, and the knockers come off the cage toward you with their pick-handles up.`,
        `And then a voice behind them, enormous and cheerful as a bell:`
      ],
      next: 'morning_ulla'
    },
    morning_ulla: {
      text: [
        `@ulla: "No."`,
        `Ulla Stonehand comes away from the gate. She doesn't hurry. She swings the great round shield onto her arm and draws the axe out of her belt, and the knockers between her and you get out of her road without being asked, like geese out of the way of a cart.`,
        `She comes and stands beside you. Close enough that her shoulder is above yours.`,
        `@ulla: "Eleven months I take your silver, little clerk. Eleven months I stand at your gate and count your carts. I am done counting." She looks at the knockers who are left. "Osk. Benet. I like you. Go and eat breakfast."`,
        `They don't. They should have.`
      ],
      fx: { party: { add: ['ulla'] }, set: { e4_ulla: 1 } },
      next: 'morning_fight'
    },
    morning_fight: {
      fight: { foes: ['e4_knocker', 'e4_knocker', 'e4_knocker'], title: 'The Winding-Wheel', win: 'morning_after',
        intro: 'Ulla draws them onto her shield. Let her. Then cut them down.' }
    },
    morning_after: {
      text: [
        `It's short. Ulla fights like weather: no fuss, no flourish, a great shield that is simply *there* wherever a blow wants to land, and an axe that comes round after it like the second half of a sentence. Benet goes down with his collarbone in two pieces. Osk drops his handle and sits in the salt and cries.`,
        `When it's over, she leans on her shield and breathes, and grins at you with blood on her teeth that isn't hers.`,
        `@ulla: "Ha. I have wanted to do that since the spring."`,
        `Grisell has backed against the cage. His hands are shaking. The ledger is against his chest.`
      ],
      next: 'grisell_fate_route'
    },
    grisell_fate_route: {
      route: [
        { if: 'f.e4_saw_ledger && !f.e4_ledger', go: 'grisell_pan' },
        { go: 'grisell_fate' }
      ]
    },
    grisell_pan: {
      text: [
        `He sees you look at the book. He turns, quick as a heron, and throws it.`,
        `Not at you. Into the nearest salt-pan, where the brine is rolling at a boil over the furnace. The calf cover hits the surface and the pages begin to curl.`
      ],
      choices: [
        { t: 'Plunge your hand into the boiling brine and drag it out. (Finesse)', check: { stat: 'finesse', dc: 12, pass: 'grisell_pan_got', fail: 'grisell_pan_lost' } },
        { t: 'Let it burn. You saw the page. You\'ll remember it.', go: 'grisell_pan_let' }
      ]
    },
    grisell_pan_got: {
      text: [
        `You don't think. You reach in up to the wrist, and the brine closes round your gloved hand like a mouth full of teeth, and you have the book by its spine and out and on the ground, steaming, before the pain arrives.`,
        `When it arrives it is enormous. You say something you learned in Lowmarch. The glove on your left hand is cooked to the skin, and under it, where the star is, it hurts in a way that has nothing to do with heat.`,
        `The book is scalded at the edges. The middle pages are wet and legible. Grisell stares at you as if you'd walked through a wall.`
      ],
      fx: { set: { e4_ledger: 1, e4_ledger_how: 'pan' }, give: 'ledger', hp: -6, xp: 25 },
      next: 'grisell_fate'
    },
    grisell_pan_lost: {
      text: [
        `You go for it and the brine gets you first: a slop of it over the wrist, boiling, and your hand jerks back on its own the way a hand does. By the time you've got Widow's point under the binding, the pages are a grey porridge.`,
        `You stand there with your scalded hand in the salt and watch the names come apart.`,
        `> You saw the page. You'll remember it. You remember all of them.`
      ],
      fx: { hp: -4, set: { e4_ledger_burned: 1 } },
      next: 'grisell_fate'
    },
    grisell_pan_let: {
      text: [
        `You watch it go. The calf cover blackens. The pages swell and come apart in the brine like bread in soup.`,
        `Grisell watches too. When it's gone he lets out a breath that he seems to have been holding since spring.`,
        `@e4_grisell: "There," he says. "Now it's only your word."`
      ],
      fx: { set: { e4_ledger_burned: 1 } },
      next: 'grisell_fate'
    },
    grisell_fate: {
      text: [
        `@e4_grisell: "I never touched one of them. You understand? Never. Not once. I wrote them down." He is talking very fast now. "Somebody has to write them down, Sergeant. If nobody writes them down, they're just *gone*—"`,
        `@ulla: "They are gone *now*, little clerk. You wrote it with a ruler."`,
        `Everyone is looking at you.`
      ],
      choices: [
        { t: 'Chain him in his own salt-store. Varane\'s men can fetch him. Let him explain it to a lord.', go: 'grisell_chain', fx: { set: { e4_grisell: 'chained' }, rep: { varane: 1 } } },
        { t: '"He knows the galleries. He comes down with us. Let him see the Ninth."', go: 'grisell_down', fx: { set: { e4_grisell: 'down' } } },
        { t: 'Kill him. Here. Now. Quick.', go: 'grisell_kill', fx: { set: { e4_grisell: 'killed' }, rep: { varane: -1 } } },
        { t: '"Run, Grisell. Run to the Marshal. Tell him I\'m coming."', go: 'grisell_run', fx: { set: { e4_grisell: 'fled' } } }
      ]
    },
    grisell_chain: {
      text: [
        `Ulla carries him to the salt-store under one arm, like a rolled carpet. He doesn't fight. At the door he asks, quite politely, if he might have a candle and some paper.`,
        `@ulla: "No."`,
        `She shuts him in the dark. It seems fair.`
      ],
      next: 'ulla_join'
    },
    grisell_down: {
      text: [
        `He goes the colour of the salt.`,
        `@e4_grisell: "I— I've never been below the Fourth. I'm a *clerk*—"`,
        `@ansel: "Then you'll find it educational."`,
        `Ulla puts a hand on his shoulder. It covers most of it. He comes.`
      ],
      next: 'ulla_join'
    },
    grisell_kill: {
      text: [
        `He sees it in your face and opens his mouth, perhaps to explain.`,
        `Widow goes in under the breastbone and up. It's quick. You know how to make it quick. He looks down at the blade with mild surprise, as if it were an error in a column, and then he sits down against the cage and takes his spectacles off, carefully, and folds them, and dies holding them.`,
        `Ulla nods once. Pell turns away. Tamsin watches the whole thing, and you can't read her face at all.`,
        { if: "inParty('hob')", t: `Hob is staring at you. He has never seen you kill a man who wasn't trying to kill you. You watch him put it away somewhere, carefully, to think about later.` }
      ],
      fx: { bond: { pell: -1 }, quiet: true },
      next: 'ulla_join'
    },
    grisell_run: {
      text: [
        `He doesn't believe it at first. Then he does, and he goes: a thin man in a clean coat running across a white yard, clutching his spectacles to his face, not looking back.`,
        `@ulla: "That," Ulla says, "was either very clever or very stupid."`,
        `@ansel: "I'll let you know."`
      ],
      fx: { quest: { id: 'hask', note: 'You let Overseer Grisell run to Hask with the news. The Marshal will know you\'re coming.' } },
      next: 'ulla_join'
    },
    ulla_join: {
      loc: 'Saltdown — by the shaft',
      text: [
        `Ulla sits down on the lip of the shaft with her legs dangling over four hundred feet of black, unbothered, and takes a hunk of cheese out of somewhere and starts on it.`,
        `@ulla: "So. Now I have no job." She chews. "I hit my employer's men with a shield, and I chose a scarred stranger over good silver. In Nordvik, that is called a marriage." She laughs, a big laugh that goes down the shaft and comes back up thinner.`,
        `@ulla: "I go down with you. After, I go wherever you go, until I am bored or dead. I am tired of eating bread I have not earned, Dray. It sits in the belly like a stone."`
      ],
      choices: [
        { t: '"Welcome, Stonehand." Offer her your hand.', go: 'ulla_join_a' },
        { t: '"Eleven months you watched. Why should I trust you now?"', go: 'ulla_join_b' },
        { t: '"Can you take orders?"', go: 'ulla_join_c' }
      ]
    },
    ulla_join_a: {
      text: [
        `She takes it. Her three-fingered hand closes over yours, all callus and warmth, and she doesn't squeeze to show you she can. She already showed you.`,
        `@ulla: "Good. And Dray. When I eat your supper, it is not personal. It is only that I am bigger."`
      ],
      fx: { quest: { id: 'e4_salt', note: 'Ulla Stonehand, Nordvik exile and pithead guard, has thrown in with you.' } },
      next: 'cage1'
    },
    ulla_join_b: {
      text: [
        `@ulla: "You shouldn't." She shrugs. "I watched. I am ashamed. Shame is a good dog, Dray. It is ugly and it bites, but it follows you home." She stands, and stands, and keeps standing until she's looking down at you. "Watch me. In a month, tell me if I am still a coward. If I am, you can say so. I will hold still."`
      ],
      fx: { quest: { id: 'e4_salt', note: 'Ulla Stonehand, Nordvik exile and pithead guard, has thrown in with you. She says you shouldn\'t trust her yet.' } },
      next: 'cage1'
    },
    ulla_join_c: {
      text: [
        `@ulla: "From a man with your face?" She considers it honestly. "Ja. Probably. If they are good orders. If they are stupid orders, I will tell you they are stupid, loudly, in front of everyone, and then I will do them anyway, because that is how a shield-wall works." She grins. "You were a sergeant. You know."`,
        `You do know. It's the most Red Company thing anyone has said to you in six years.`
      ],
      fx: { quest: { id: 'e4_salt', note: 'Ulla Stonehand, Nordvik exile and pithead guard, has thrown in with you.' } },
      next: 'cage1'
    },

    /* ======================= ACT THREE: THE DEEP ======================= */
    cage1: {
      card: { kind: 'act', title: 'Part Two', sub: 'The Deep' },
      loc: 'The Saltdown shaft — descending',
      text: [
        `The cage drops.`,
        `It's iron straps and a plank floor, and it holds six if they're friends. The chain sings over the wheel above you. The square of sky shrinks to a stamp, to a coin, to a star. And then there are no stars, and you are glad.`,
        `Jory holds his candle in his tin cup in the middle of the cage, very steady.`,
        { if: "f.e4_grisell==='down'", t: `Grisell stands pressed into the corner with his eyes shut, lips moving. Counting, you think. The galleries going past. *Second. Third. Fourth.*` },
        { if: "inParty('hob')", t: `Hob grips the iron straps so hard his knuckles are white, and grins at you whenever you look, to show he's not afraid. He's terrified. Good lad.` },
        `@pell: "Did you know," Pell says, in the high bright voice of a man who will say anything to fill the dark, "that the Book of Embers forbids mining below the depth of a well? Because the deep is *the province of the earthbound*. I always assumed it was about drainage."`
      ],
      next: 'gallery1'
    },
    gallery1: {
      loc: 'Saltdown — the Sixth Gallery',
      text: [
        `The cage bumps down onto salt. Jory leads you out into a passage cut so clean it looks poured, and then into the Sixth.`,
        `They are working here too. Forty of them, perhaps, strung along a long white face. In the dark. *Tock. Tock. Tock.* Your candle comes round the corner and the light lies across the wall, and across them, and they don't turn, and they don't stop.`,
        `Ulla walks among them with her shield on her back, looking at their faces one by one, the way you'd look for someone in a crowd at a fair.`,
        `@ulla: "That one I watched come in. In the spring. He was singing in the cart. Something about a goose." She stops beside a lanky man with a ruined ear. "He does not sing now."`,
        `Then the floor moves.`,
        `Not much. A shiver, deep down, like a big animal shifting in its sleep two floors below. Salt-dust sifts from the roof. The picks stop. All of them, all at once.`,
        `Forty heads turn toward your candle.`
      ],
      choices: [
        { t: '"Lights out. Nobody move. Nobody breathe." (Grit)', check: { stat: 'grit', dc: 14, pass: 'gallery_still', fail: 'gallery_break' } },
        { t: '"Pell. Sing. Anything. Something they might remember."', go: 'gallery_pell' },
        { t: '"Back to the passage. Now. Shields front."', go: 'gallery_break' }
      ]
    },
    gallery_still: {
      text: [
        `Jory pinches his candle out. The dark comes down like a sack over your head.`,
        `You stand in it, in a gallery full of empty people, and you listen to them breathe. You feel them come close. One brushes past you: a shoulder, salt-stiff cloth, a warm sour smell. Someone's hand closes on your sleeve and opens again.`,
        `It goes on for a very long time.`,
        `Then, one by one, unhurried, not quite in time: *tock.* *Tock.* *Tock.* They've gone back to work. All but a few, who've wandered too close to the passage mouth and are standing there in the dark, between you and the way down, and won't be led.`
      ],
      fx: { xp: 20 },
      next: 'gallery_fight_small'
    },
    gallery_pell: {
      text: [
        `Pell opens his mouth, closes it, opens it, and sings the only thing that comes: the Evening Lamp, the hymn every child in Aldermere learns before it can tie a shoe. *Light of the long road, lamp of the dead, keep us till morning, and light us to bed.* His voice cracks on *morning*. He keeps going.`,
        `And it works, almost. Some of them go still, listening. One woman's lips start moving with the words, without sound, the way the old woman's did at Ashby.`,
        `But not all. Three of them come at the sound, mouths wide, hands out, silent as falling snow.`
      ],
      fx: { bond: { pell: 1 } },
      next: 'gallery_fight_small'
    },
    gallery_break: {
      text: [
        `Someone moves. It doesn't matter who.`,
        `The nearest of them come at the candle without a sound, the way a moth comes, picks and all. Mouths open. Eyes open. Nothing behind either.`,
        `@ulla: "Do not kill more than you must!" Ulla bellows, getting her shield up. "They are only frightened!"`,
        `They don't look frightened. They don't look anything.`
      ],
      next: 'gallery_fight_big'
    },
    gallery_fight_small: {
      fight: { foes: ['hollowed', 'hollowed'], title: 'The Sixth Gallery', win: 'gallery_after',
        intro: 'They make no sound at all. Not even when they die.' }
    },
    gallery_fight_big: {
      fight: { foes: ['hollowed', 'hollowed', 'hollowed'], title: 'The Sixth Gallery', win: 'gallery_after',
        intro: 'They make no sound at all. Not even when they die.' }
    },
    gallery_after: {
      text: [
        `When it's over there are bodies on the salt, and the rest have gone back to work around them, stepping over them, cutting the face where the dead left off.`,
        `Ulla kneels by the man who sang about a goose. She closes his eyes with her thumb, which nobody else has thought to do for anyone down here. She says something in Nordvik. It sounds like an apology.`,
        `Jory relights the candle from Pell's tinderbox with steady hands. He touches his chalk to his slate. Once, twice, three times.`,
        `@e4_jory: "The Ninth's below. Through the old drift and down the ladders. That's where the White is."`
      ],
      next: 'ladders1'
    },
    ladders1: {
      loc: 'Saltdown — the old drift, the ladders',
      text: [
        `Down. Wooden ladders pegged into the salt, slick with brine, a hundred rungs and then a ledge and then a hundred more. The air gets warmer, which is wrong. It smells of the sea and of something else: a low, musky, reptile smell, like the inside of an old boot left in the sun.`,
        `On the last ledge above the Ninth, Jory stops and holds his candle out over the drop.`,
        `Below, the Ninth Gallery opens like a nave. Thirteen figures along the face, swinging picks in the dark. And the far wall, the white wall, smooth and glittering, has a hole in it the size of a cottage door, and around the hole, the salt is scored with long grooves, like a field after the plough.`,
        `@tamsin: "Sergeant. That's not a gallery. That's a *burrow.*"`
      ],
      choices: [
        { t: 'Lamp oil. Pour Pell\'s spare flasks along the ledge-foot and be ready to light it.', go: 'ladders_oil', fx: { give: { firebomb: 2 }, set: { e4_prep: 'oil' } } },
        { t: '"Pell. Whatever you\'ve got. Now, before it comes."', go: 'ladders_pray', fx: { heal: 20, st: 2, set: { e4_prep: 'pray' } } },
        { t: '"Jory. Get the thirteen back to the ladder-foot. Quietly. Before we wake it."', go: 'ladders_miners', fx: { set: { e4_prep: 'miners', e4_ninth_back: 1 } } }
      ]
    },
    ladders_oil: {
      text: [
        `Pell has three flasks of Lanternhold oil, which he swears are medicinal. Tamsin stoppers two of them with rag and wax and hands them to you like eggs.`,
        `@tamsin: "Throw them hard. It hates fire, I bet. Everything down here hates fire. That's why they work in the dark."`
      ],
      next: 'wyrm_wake'
    },
    ladders_pray: {
      text: [
        `Pell kneels on the wet ledge, puts a hand on your chest and a hand on Ulla's shield, and says the Litany of the Lit Road very fast and very quietly, like a man saying a spell he isn't sure still works.`,
        `It doesn't matter if it works. Your breath comes slower. Your hands stop shaking. You'd forgotten what it was like to have someone pray over you before a fight. You'd forgotten it helped.`
      ],
      next: 'wyrm_wake'
    },
    ladders_miners: {
      text: [
        `Jory goes down the last ladder alone, with his candle cupped in his hand, and walks along the face touching each of them on the arm. One by one they lower their picks and follow him back to the ladder-foot, slow as sleepwalkers, and stand there in a huddle with their palms turned up.`,
        `Twelve. Thirteen. He counts them twice. His candle flame doesn't shake once.`,
        `@ansel: "Good lad."`,
        `@e4_jory: "It's what I'm for, sir."`
      ],
      next: 'wyrm_wake'
    },
    wyrm_wake: {
      loc: 'Saltdown — the Ninth Gallery',
      text: [
        `You go down onto the gallery floor. The salt crunches. Ulla puts herself in front without being asked.`,
        `The hole in the far wall breathes out. Warm air, sea-stink and musk, rolls over you.`,
        `Then the White comes out of it.`,
        `First the head: as big as a cart, smooth, blind, wedge-shaped, the colour of old teeth. Two long slits in the snout open and close, tasting you. Then the neck, and the neck keeps coming, and keeps coming, pale coils sliding out of the wall over each other with a sound like a sledge dragged over gravel, until there is more of it in the gallery than there is gallery.`,
        `It has no eyes. It doesn't need them. It turns its whole head toward the warmest thing in the room, which is you.`,
        `@ulla: "Oh," says Ulla, with deep pleasure, settling her shield. "Oh, *you're* a big one."`
      ],
      fight: { foes: ['salt_wyrm'], title: 'The White', win: 'wyrm_dead',
        intro: 'When the walls shift, its coils are closing: Guard. Fire hurts it. Ulla will hold its attention if she can.' }
    },
    wyrm_dead: {
      text: [
        `It dies the way big things die: slowly, then all at once, and then slowly again.`,
        `The last blow goes in behind the skull, where the scale is thin, and the great head comes down on the salt hard enough to crack the floor. The coils keep moving for a long time after. They slide and tighten and relax against the walls like something dreaming, and grind salt to powder, and stop.`,
        `The gallery is full of dust and the smell of opened wyrm, which is like the sea at low tide in a heatwave. Ulla is on her knees, laughing and coughing. Pell is wrapping someone's arm. Tamsin is pulling an arrow out of the White's lip with her boot braced on its jaw.`,
        `And Jory Pask is sitting against the wall by the ladder-foot, very straight, with his candle still in his hand, and the whole of his left side from hip to armpit opened up like a book.`
      ],
      fx: { quest: { id: 'e4_salt', note: 'You killed the White, the Salt Wyrm of the Ninth Gallery.' }, know: { beast: ['salt_wyrm'] } },
      next: 'tally1'
    },

    /* ======================= THE TALLYMAN ======================= */
    tally1: {
      text: [
        `You kneel by him. You've seen this wound before. Everyone who has stood in a line has seen this wound. You don't bother with the poultice.`,
        `@e4_jory: "It got me on the way past," he says, surprised. "It wasn't even trying." His voice is quite clear. "Did we kill it, sir?"`,
        `@ansel: "We killed it."`,
        `@e4_jory: "Good." He looks at his slate, which is still hanging round his neck on its string, smeared with his own blood. "I should write that down. Somebody'll want the number."`,
        `Then he looks past you. Over your shoulder. His face changes.`,
        `@e4_jory: "Sir. Who's the man?"`
      ],
      next: 'tally2'
    },
    tally2: {
      text: [
        `You turn your head.`,
        `He is standing ten feet away, by the dead wyrm's jaw, where there was no one a moment ago.`,
        `Tall. Taller than Ulla. A greatcoat the colour of rain, dark at the hem as if he's walked a long way through wet grass, though there is no grass for four hundred feet in any direction. A wide hat. Under it, a long, pale, pleasant face, the face of a clerk who has been at his desk since before you were born and does not mind.`,
        `He has a ledger open on his left forearm. In his right hand, a pen.`,
        `There is no candle near him. You can see him perfectly.`,
        `Your left palm begins to burn.`
      ],
      choices: [
        { t: 'Stay where you are. Very still.', go: 'tally3', fx: { set: { e4_tally: 'still' } } },
        { t: 'Take Jory\'s hand.', go: 'tally3', fx: { set: { e4_tally: 'hand' } } },
        { t: '"Who are you?"', go: 'tally3', fx: { set: { e4_tally: 'asked' } } }
      ]
    },
    tally3: {
      text: [
        { if: "f.e4_tally==='hand'", t: `You take Jory's hand. It is cold and sticky and it grips back, hard, the way a child's does. You don't take your eyes off the grey man.` },
        { if: "f.e4_tally==='asked'", t: `Your voice comes out very small. The gallery eats it. The grey man does not look up. It is not that he is ignoring you. It's that the question was not addressed to anything in his book.` },
        { if: "f.e4_tally==='still'", t: `You don't move. You were a soldier for ten years; you know how to be furniture. It doesn't seem to matter. He isn't looking at you. He isn't looking for you.` },
        `He walks over to Jory. His boots make no sound on the salt. He looks down at the boy with an expression of mild, impersonal interest: a man checking a figure.`,
        `He writes. The pen scratches. It is the only sound in the Ninth Gallery.`,
        `@e4_jory: "Oh," Jory says, softly, watching the pen. "He's counting. He's doing my job, sir."`
      ],
      next: 'tally4'
    },
    tally4: {
      text: [
        `Then the grey man lifts his head and looks at you.`,
        `Not past you. At you. As if he has just noticed a coin on the floor, in a room he had thought was swept.`,
        `He looks down at his ledger. He turns a page back. He runs one clean pale finger down a column. He turns the page forward. He turns forward again, and again, quicker, a soft riffle of paper in the silence, a long way, through a great many names.`,
        `He stops. He looks at you again, over the book, and his face is not angry and it is not afraid. It is simply puzzled, the way a clerk is puzzled by a sum that will not come out, and has never once not come out before.`,
        `@tallyman: "You're not here."`,
        `He says it mildly, the way a clerk reads out a sum. Then he closes the ledger, carefully, with one finger keeping the place.`
      ],
      next: 'tally5'
    },
    tally5: {
      text: [
        `You blink.`,
        `He's gone. There is the dead wyrm's jaw, and the salt, and the candle-shadows, and nothing.`,
        `Jory's hand goes slack. You don't have to look. You look anyway. His eyes are open, fixed on the place where the grey man stood, and his face has the look of somebody who has just been told the answer and found it was simpler than he thought.`,
        `Your palm is on fire. You pull the glove off with your teeth. The seven-pointed star in the meat of your hand is red and raised and weeping, as fresh as the morning you woke at the Ford, and the leather of the glove has scorched brown on the inside, in the same shape.`,
        `Something in you has come open. You don't know what it is. It's like finding a room in a house you've lived in for six years, a room that was always there, with the lamp already lit.`
      ],
      fx: { set: { unreckoned: 1 }, know: { codex: ['unreckoned', 'tallyman'], cast: ['tallyman'] }, xp: 60 },
      next: 'tally6'
    },
    tally6: {
      text: [
        `~ SOMETHING HAS OPENED.`,
        `@ulla: "Dray?" Ulla, behind you, wiping her axe. "Who are you talking to?"`,
        `You don't remember speaking. Maybe you did.`,
        `@ulla: "The boy is dead, Dray. I am sorry. He was brave." She looks at the empty place by the jaw where you're staring. She sees salt. She sees a dead wyrm. "What is it? What do you look at?"`,
        `And Tamsin. Tamsin is standing ten yards off with an arrow still in her hand, and she isn't looking at the place where the grey man stood. She's looking at you. She's been looking at you the whole time. Her face is white under the freckles and absolutely still, and you have the cold, sure feeling that she saw you see him, and that she knows what it means better than you do.`
      ],
      choices: [
        { t: '"Nothing. Salt in my eyes."', go: 'tally7', fx: { set: { e4_tally_after: 'nothing' } } },
        { t: '"There was a man. Grey coat. He had a book."', go: 'tally7', fx: { set: { e4_tally_after: 'told' } } },
        { t: 'Say nothing. Close Jory\'s eyes.', go: 'tally7', fx: { set: { e4_tally_after: 'silent' } } }
      ]
    },
    tally7: {
      text: [
        { if: "f.e4_tally_after==='nothing'", t: `@ulla: "Salt," she agrees, unconvinced, and lets it go, because she is kind.` },
        { if: "f.e4_tally_after==='told'", t: `Ulla looks at the empty salt for a long moment. She doesn't laugh. In Nordvik, it seems, people are allowed to see things. "Then he is gone now," she says. "Good. I do not like men with books." Pell has gone very still.` },
        { if: "f.e4_tally_after==='silent'", t: `You close his eyes. Your burned hand leaves a smear of something on his lid. You wipe it off with your thumb.` },
        `You take the slate off Jory's neck. Under the blood, in chalk, his last count of the Ninth: *13*. And beneath it, newer, shakier: a single short upright stroke. The start of a number. A one, maybe. He was counting somebody.`,
        `You put the slate in your coat. You don't know why. Somebody will want the number.`,
        { if: "f.e4_grisell==='down'", t: `Grisell is standing at the ladder-foot. He has seen it all: the wyrm, the boy, the burrow, the thirteen Hollowed with their palms turned up. He is crying without making any noise, and you think it might be the first time since spring that he has looked at any of them.` }
      ],
      fx: { set: { e4_slate: 1 } },
      next: 'miners1'
    },

    /* ======================= THE MINERS ======================= */
    miners1: {
      text: [
        `The Ninth is quiet. The wyrm's coils have stopped twitching. The thirteen stand where they stand.`,
        { if: 'f.e4_ninth_back', t: `They're all alive, every one of them, huddled at the ladder-foot where Jory put them. The White never reached them. Jory saw to that. It's what he was for.` },
        { if: '!f.e4_ninth_back', t: `Eleven now. Two of them were too near the burrow when the White came out. Nobody counted them. Nobody needed to; you can see where they were.` },
        `And above you, in the Sixth and the Fourth and the long barrack, two hundred more. Breathing, eating, working, waiting for the next cart.`,
        `@ulla: "So. Dray." She leans on her shield. "We walk out. Do we walk out with them?"`,
        `@pell: "It'll take days. They walk at the pace of the slowest. They don't eat unless you feed them. They don't stop at a cliff edge unless you stop them. And we'd be taking two hundred of the Marshal's *property* down the chalk road in broad daylight."`,
        `@tamsin: "And where would we take them? The Lanternhold?" Her laugh has no laugh in it.`
      ],
      choices: [
        { t: '"We take them out. All of them. To Varane\'s own door. He wanted to know why his mine stopped paying. Let him count them."', go: 'miners_save' },
        { t: '"We leave them. The White\'s dead. They\'re safer here than they\'ve been since spring. We come back with a lord\'s men and carts."', go: 'miners_leave' },
        { t: '"Just the thirteen. The ones from the Ninth. We can manage thirteen."', go: 'miners_some' }
      ]
    },
    miners_save: {
      text: [
        `Nobody argues. Ulla grins like the sun coming up.`,
        `It takes the rest of the day to bring them up the shaft, six at a time in the cage, and the free miners come out of their sheds to watch, silent, caps in their hands. It takes the whole of the next day to get them moving south.`,
        `Two hundred and eighteen people walking at the pace of a funeral down the chalk road toward Harrowgate. You lead. They follow if you give them a hand on the arm, a gentle pull, and then they come, one after another, like sheep after the bellwether.`,
        { if: "f.e1_ashby==='led'", t: `> Thirty-one, at Ashby. You thought that was a lot.` },
        { if: "inParty('hob')", t: `Hob rides up and down the column on his mule all day, shepherding stragglers, catching the ones who wander toward ditches. By evening he's hoarse and sunburned and happier than you've ever seen him.` }
      ],
      fx: { set: { e4_miners: 'saved' }, rep: { town: 2, fen: 1 } },
      next: 'miners_save2'
    },
    miners_save2: {
      loc: 'The Saltdown road — the second night',
      text: [
        `On the second night it goes wrong. It was always going to.`,
        `You camp in the lee of Ketch's Barrow, a day short of Harrowgate. In the dark, without anybody to stop them, a dozen of them simply get up and walk. Toward the edge of the chalk pit by the road. Toward nothing. Not running. Just walking, the way water runs downhill.`
      ],
      choices: [
        { t: 'Run. Catch them before the edge. (Grit)', check: { stat: 'grit', dc: 14, pass: 'miners_caught', fail: 'miners_lost' } },
        { t: '"Ulla! Tamsin! The pit!" Get everyone moving.', check: { stat: 'presence', dc: 13, pass: 'miners_caught', fail: 'miners_lost' } }
      ]
    },
    miners_caught: {
      text: [
        `You get there first. You get there with your lungs on fire and your boots sliding in the chalk at the very edge, and you take the first of them by the arm and pull, and she turns, docile, and stands. Then the next. Then Ulla is there, and Tamsin, and Hob or Pell or both, linking arms in a line along the lip of the pit like a shield-wall facing the wrong way.`,
        `Not one goes over. You lie on your back in the chalk afterwards with the stars out above you, and you don't even mind them. For about a minute you don't mind them at all.`
      ],
      fx: { xp: 30, st: -1 },
      next: 'return1'
    },
    miners_lost: {
      text: [
        `You're too slow. Your legs are four hundred feet of ladder tired. You get your hands on three of them, and Ulla gets two, and Tamsin one.`,
        `Four go over. They don't cry out. You hear them land.`,
        `You go down into the pit at first light and bring them up, and Ulla digs, and Pell says the words for them, the Lamp's words, without being asked, though there's no pyre. Tamsin says other words, after, very quietly. Nobody tells anybody which words are allowed.`
      ],
      fx: { hp: -5, wound: 'hamstring', set: { e4_miners_lost: 4 } },
      next: 'return1'
    },
    miners_leave: {
      text: [
        `It's the sensible thing. You say so. You hear yourself sounding like Grisell.`,
        `Ulla says nothing. She looks at the thirteen for a long time, and then she goes to each one and puts their picks back into their hands, gently, as you'd give a child its toy, so they'll have something to do.`,
        `As you climb the last ladder you hear it start again behind you, below you, in the dark. *Tock. Tock. Tock.*`
      ],
      fx: { set: { e4_miners: 'left' }, bond: { ulla: -1 }, quiet: true },
      next: 'return1'
    },
    miners_some: {
      text: [
        `@ulla: "Thirteen." She nods slowly. "Thirteen is a number. It is better than none."`,
        `@pell: "And the other two hundred?"`,
        `@ansel: "We come back for them with a lord's men and carts. I'll make him come back."`,
        `Thirteen people walk out of the Ninth behind you, and out of the cage, and down the chalk road behind Ox, at the pace of a funeral. It's not enough. It's what you can carry.`,
        { if: "f.e4_grisell==='chained'", t: `You leave the salt-store door barred. When Varane's men come, they can count the rest.` }
      ],
      fx: { set: { e4_miners: 'left', e4_miners_some: 13 }, rep: { town: 1 } },
      next: 'return1'
    },
    /* ======================= ACT FOUR: HARROWGATE ======================= */
    return1: {
      card: { kind: 'act', title: 'Part Three', sub: 'Counted' },
      loc: 'The Saltdown road — night',
      text: [
        `You don't sleep. Of course you don't. You sit with your back to a cart-wheel and your hand in a bucket of cold water, and the stars are out, and you can feel every one of them like a draught on the back of your neck.`,
        `Tamsin comes and sits down beside you. Not touching. A careful arm's length, the way she lay down at the sheepfold that first night on the Kingsroad.`,
        `She doesn't say anything for a long time. Then:`,
        `@tamsin: "Your hand. Let me see."`,
        `You take it out of the water. She looks at the star, raw and weeping, in the moonlight. She doesn't touch it. She looks at it the way you'd look at a letter in a hand you recognised.`,
        `@tamsin: "Does it always do that? When he's near?"`,
        `> *He.* Not *it*. Not *what*. She said *he.*`
      ],
      choices: [
        { t: 'Tell her the truth. All of it. The Ford. The ledger. "You\'re not here."', go: 'return_truth', fx: { set: { e4_told_tam: 'truth' }, bond: { tamsin: 1 } } },
        { t: '"When who\'s near, Tamsin?"', go: 'return_turn', fx: { set: { e4_told_tam: 'turned' } } },
        { t: '"Leave it." Put your hand back in the water.', go: 'return_leave', fx: { set: { e4_told_tam: 'no' } } }
      ]
    },
    return_truth: {
      text: [
        `You tell her. You've never told anyone. The stone, the night, the stars looking. The grey man walking among the four hundred with his pen, and stopping at you, and turning the page back, and forward. *Hm.* Waking with the crow on your chest. Ashby, under the eaves. And today, in the salt, the book riffling through a thousand thousand names and not finding yours.`,
        `She listens without interrupting. Her knees are drawn up and her chin is on them and she doesn't take her eyes off your face once.`,
        `@tamsin: "Not here," she says, when you're done. "Not in the book." Very quietly. "Mothers below, Sergeant."`,
        { if: 'f.e3_suspect_tam', t: `It comes a beat too smoothly, the oath. Like something she has practised saying in the right place. You put that in the box with the rotten rung and the old woman's hand on her collar.` },
        `@ansel: "You knew. Didn't you. Before today."`,
        `@tamsin: "I knew you were wrong somehow. Everybody who looks at you properly knows that." She gets up, quick, too quick, and brushes chalk off her knees. "Doesn't make you bad. Just— wrong. Like a hare with a white foot. Get some sleep. If you can't, pretend. I'll watch."`,
        `She watches. All night. You know because you don't sleep either.`
      ],
      next: 'keep1'
    },
    return_turn: {
      text: [
        `She doesn't flinch. You'll think about that later: that she didn't flinch.`,
        `@tamsin: "Whoever you were looking at." Easily. "You looked at that empty bit of salt like it owed you money, Sergeant. And then your hand went up like a torch. I'm not blind." She shrugs. "Fen-folk see things. Lights. Shapes. My gran says the dying see who comes for them. Maybe you were nearly dying. Maybe you're always nearly dying. You've got the face for it."`,
        `It's a good answer. It's so good you nearly don't notice she never told you what she saw.`
      ],
      next: 'keep1'
    },
    return_leave: {
      text: [
        `She doesn't push. She sits with you anyway, a careful arm's length away, until the fire's out.`,
        `Once, near dawn, you hear her humming. Not the heron song. Something older, lower, in fen words you don't know, under her breath, like a prayer said to the ground.`
      ],
      next: 'keep1'
    },
    keep1: {
      route: [
        { if: "f.e4_miners==='saved'", go: 'keep_saved' },
        { go: 'keep_plain' }
      ]
    },
    keep_saved: {
      loc: 'Harrowgate — the Keep yard, three days later',
      text: [
        `You bring them in through the North Gate at noon, all of them who are left, and Sergeant Moll takes one look and stands aside without a word and takes his helmet off.`,
        `Up the Market Stair, past the stalls, past the Lanternhold. People come to their doors. A woman screams a name and runs out into the column and takes hold of a man in a watchman's coat and shakes him and shakes him and he looks at her with mild, polite interest.`,
        `Into the Keep yard. You stop. They stop. Two hundred people standing in the lord's yard in the rain, palms turned up.`,
        `Lord Varane comes down the steps on a stick with his foot in its pudding of linen. He stops halfway. Isolde is behind him. Her lips are moving. You know what she's doing. She's counting.`,
        `@varane: "Saints forgive me," says Lord Varane. "Saints forgive me. Are these— were these *mine*?"`
      ],
      fx: { rep: { varane: 2 } },
      next: 'keep_hask'
    },
    keep_plain: {
      loc: 'Varane Keep — the Lord\'s Solar, two days later',
      text: [
        `Varane receives you in the cold solar again. Four sticks in the grate. The unfinished canal.`,
        { if: 'f.e4_miners_some', t: `You've left thirteen of them in the Keep's laundry, under the care of a terrified washerwoman, because you couldn't think where else. Isolde went down to see them before she came up. Her hem is wet. She hasn't changed it.` },
        `You tell him. All of it. The carts, the tags, the barrack, the Ninth, the White. Two hundred people in the dark under his hills, working his salt.`,
        `He listens with his hand over his mouth.`,
        `@varane: "Saints forgive me," he says at last, through his fingers. "Two hundred. And I was writing to Grisell about *fever*."`
      ],
      next: 'keep_ledger'
    },
    keep_hask: {
      text: [
        `Hooves on the cobbles. A grey horse. Konrad Hask swings down in the gateway, in his blue cloak, and takes in the yard in one long look.`,
        `For a moment, just a moment, his face is empty. You've never seen it empty before.`,
        `Then the smile comes back. It comes back like a man putting his coat on.`,
        `@hask: "Ansel. You've brought back my labourers. How thoughtful. My lord, there's been a terrible misunderstanding, the Lanternhold sends these poor souls north for their health, and I—"`,
        `@varane: "Konrad." The old man's voice is quite quiet. "Not now."`,
        `Silence in the yard. Hask stops. He actually stops. Lord Varane has not, perhaps, said *not now* to his Marshal in a very long time.`,
        `Hask bows. He looks at you over the bow, and there is no joke in it at all.`
      ],
      fx: { quest: { id: 'hask', note: 'You brought Saltdown\'s Hollowed into Varane\'s own yard. Lord Varane told Hask "not now" in front of his men. Hask will not forget it.' } },
      next: 'keep_ledger'
    },
    keep_ledger: {
      text: [
        `Afterwards, at the head of the stair, Isolde stops you. She's very pale. Her hands are folded so tightly in front of her that the knuckles show.`,
        `@isolde: "Sergeant. I asked you to write everything down." Quietly. "Did anyone else?"`,
        { if: 'f.e4_ledger', t: `The ledger is under your coat. You can feel the brass corners against your ribs. *The Lord's share, per the Marshal, one fifth.*` },
        { if: '!f.e4_ledger', t: `You don't have it. You have a page you can recite and a scalded hand and a dead boy's slate. *The Lord's share, per the Marshal, one fifth.*` }
      ],
      choices: [
        { if: 'f.e4_ledger', t: '"Yes. I have it. I\'m keeping it, for now. Until I know whose names are in it."', go: 'keep_ledger_keep', fx: { set: { e4_told_isolde_ledger: 'keeping' }, bond: { isolde: 1 } } },
        { if: 'f.e4_ledger', t: '"No." Lie to her face.', go: 'keep_ledger_lie', fx: { set: { e4_told_isolde_ledger: 'lied' } } },
        { t: 'Ask her, carefully: "Does your father take a share of Saltdown from the Marshal?" Watch her face.', check: { stat: 'wits', dc: 13, pass: 'keep_ledger_read', fail: 'keep_ledger_cold' } },
        { if: '!f.e4_ledger', t: '"The overseer did. It\'s gone. I remember what it said."', go: 'keep_ledger_gone' }
      ]
    },
    keep_ledger_keep: {
      text: [
        `She doesn't argue. She looks at your coat, where the book is, and then at your face, and nods once, slowly.`,
        `@isolde: "Good. Don't give it to me yet." That surprises you. "I live in this house, Sergeant. Things in this house get read." A breath. "Keep it somewhere I don't know about. And when you do decide whose hands it goes into, I hope they're mine. But I will understand if they're not."`
      ],
      fx: { quest: { id: 'e4_salt', note: 'You have Grisell\'s ledger. You told Isolde you are keeping it, for now.' } },
      next: 'keep_ward_route'
    },
    keep_ledger_lie: {
      text: [
        `@ansel: "No."`,
        `@isolde: "I see." She looks at you a moment longer than she needs to. Then she nods, and goes back up the stairs, and you have the very clear feeling that she has written something down.`
      ],
      fx: { bond: { isolde: -1 } },
      next: 'keep_ward_route'
    },
    keep_ledger_read: {
      text: [
        `You ask it plainly and you watch her. Not her words: her face, the half-second before the face is arranged.`,
        `Nothing. Blank. Not the blank of a liar; the blank of someone who has been asked a question in a language she doesn't speak. Then, after the half-second, something dawns and it is horror, and then it is fury, and then it is put away.`,
        `@isolde: "A share. Of *this*." Very soft. "No, Sergeant. My father takes nothing from Saltdown but what is in the house accounts, which I keep, and which I have read every night for six years. If a ledger says otherwise, it says so because the Marshal *wrote* it so. For the day someone found it."`,
        `> She's right. You can see it now. It's a lie put there to be found, a false bottom in the box. Hask always did think two moves on.`
      ],
      fx: { set: { e4_share_lie: 1 }, bond: { isolde: 1 }, quiet: true, quest: { id: 'e4_salt', note: '"The Lord\'s share, per the Marshal": a lie, planted in the ledger for the day it was found. Varane never knew.' } },
      next: 'keep_ward_route'
    },
    keep_ledger_cold: {
      text: [
        `Her face shuts like a door.`,
        `@isolde: "You may ask my father that yourself, Sergeant. I am sure he will find it as interesting a question as I do." She turns away. Then she turns back. "No. He takes nothing. And if you ever ask me that again in that voice, I'll know you didn't believe me the first time."`
      ],
      fx: { bond: { isolde: -1 }, quiet: true },
      next: 'keep_ward_route'
    },
    keep_ledger_gone: {
      text: [
        `@isolde: "Then say it to me. Now. Word for word, before you forget."`,
        `You recite it. Tags. Prices. *1 girl, small, @ 12.* She writes it all down on the back of a laundry list in a tiny swift hand, pressing so hard the pen tears the paper at the end.`,
        `@isolde: "It isn't proof," she says. "But it's a beginning. Thank you."`
      ],
      fx: { bond: { isolde: 1 }, quiet: true },
      next: 'keep_ward_route'
    },
    keep_ward_route: {
      route: [
        { if: "f.e4_miners==='saved'", go: 'keep_ward' },
        { go: 'keep_end' }
      ]
    },
    keep_ward: {
      text: [
        `Down in the yard the miners are still standing in the rain, palms up, where you stopped them. Lord Varane is looking at them from the top of the steps with his hand over his mouth.`,
        `@varane: "The Abbess has sent down. She offers to take them into the white ward. Every one." He sounds grateful. He sounds as if someone has lifted a beam off him. "Where else would I put two hundred people, Sergeant? She has beds. She has broth. She wept, the boy said. She wept for them."`
      ],
      choices: [
        { t: '"Not the Lanternhold. Anywhere but the Lanternhold."', go: 'keep_ward_argue' },
        { t: 'Say nothing. He is right that there is nowhere else.', go: 'keep_ward_lost', fx: { set: { e4_miners_ward: 'lanternhold' } } }
      ]
    },
    keep_ward_argue: {
      route: [
        { if: 'bond.isolde >= 3', go: 'keep_ward_won' },
        { go: 'keep_ward_lost' }
      ],
      fx: { set: { e4_miners_ward: 'lanternhold', e4_ward_argued: 1 } }
    },
    keep_ward_won: {
      text: [
        `@varane: "But where—"`,
        `@isolde: "The tithe-barn by the Keep wall, Father." Isolde, behind him, before he can finish. "It is dry. It is empty, because we have nothing to tithe. I will feed them from the house account and the kitchen will hate me." She doesn't look at you. "Sergeant Dray brought them out of one cellar. I will not be the one who puts them into another."`,
        `Lord Varane looks from her to you, and back, and for once he does not ask anyone what Konrad would say.`,
        `@varane: "The tithe-barn," he says.`
      ],
      fx: { set: { e4_miners_ward: 'keep' } },
      next: 'keep_end'
    },
    keep_ward_lost: {
      text: [
        { if: 'f.e4_ward_argued', t: `You tell him. You tell him about the carts out of the lime-kiln gate, about the tags with the Lanternhold star. He listens, the way he listens to everything, and nods, and is sorry, and at the end of it there are still two hundred people standing in the rain and only one house in Harrowgate with two hundred beds.` },
        `By evening a line of young Lamplighters in grey has come down the hill, gentle-voiced, to lead them up by the hand. They go the way they came: a hand on the arm, a gentle pull. Up the Market Stair. In under the arch.`,
        `You stand in the Keep yard and watch the last of them go in.`
      ],
      next: 'keep_end'
    },
    keep_end: {
      text: [
        `Varane's steward pays you in the lower hall: fifty silver, counted twice, in a purse with the Varane boar stitched on it.`,
        `@pell: "Ansel." Pell, at the door, holding your sleeve. He's sober, and the hand on your sleeve is shaking anyway. "Whatever's in that book. Don't give it to anyone until you're sure who isn't in it. I signed for a cart once. When I was a Lamplighter. I didn't ask what was in it. I didn't want to know." He lets go. "Everybody in this town has signed for a cart."`
      ],
      fx: { silver: 50, xp: 80, quest: { id: 'e4_salt', state: 'done', note: 'You told Lord Varane what is happening at Saltdown. You were paid. Nobody has been punished.' } },
      next: 'hen_night1'
    },
    hen_night1: {
      loc: 'The Gutted Hen — night',
      text: [
        `Mags takes one look at Ulla in the doorway, all six and a half feet of her, salt in her braids, axe in her belt, and puts both fists on her hips.`,
        `@mags: "And what are you?"`,
        `@ulla: "Hungry," says Ulla.`,
        `Mags looks at her a moment longer. Then she laughs, the big laugh, and goes to the kitchen and comes back with a whole ham.`,
        `By the time the bells ring for the Evening Lamp, Ulla has eaten most of the ham and is teaching the common room a Nordvik song about a whale who fell in love with a lighthouse, and Mags is singing the chorus, and Pell is asleep on the settle with his mouth open, and the Hen is louder and warmer than you have ever heard it.`,
        `You go up to your room. You check the shutters. They stick.`,
        `And through the gap in them, in the yard below, by the rain-barrel: Tamsin.`
      ],
      next: 'crow2'
    },
    crow2: {
      loc: 'The Gutted Hen — the yard, from your window',
      text: [
        `She's crouched in the dark by the barrel with a crow on her wrist. Big, glossy, absolutely calm. She is tying something to its leg: a twist of hair, a knot of red thread. Her lips are moving close to its head.`,
        `The crow goes up into the rain without a sound, over the roofs, south. Toward the fen.`,
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `And you understand, standing at the shutter with your burned hand on the sill, that this isn't the second time. Or the third. That night on the downs, the first night, by the sheepfold wall. Every night since, maybe. Every night you didn't wake.` },
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `> Her gran. Talking to her gran. Everybody has someone.` },
        { if: "!f.e1_saw_crow && !f.e3_suspect_tam && f.e4_told_tam==='truth'", t: `> Fen-folk and their crows. Talking to her gran, maybe. On the very night you told her what you are.` },
        { if: "!f.e1_saw_crow && !f.e3_suspect_tam && f.e4_told_tam!=='truth'", t: `> Fen-folk and their crows. Talking to her gran, maybe. On the very night she watched you look at an empty patch of salt as if it had spoken.` },
        `She stands a long time looking after it, in the rain, her short hair plastered flat. Then she wipes her face with the heel of her hand. It might be the rain.`
      ],
      choices: [
        { t: 'Say nothing. Close the shutter. Let her have her secret, for now.', go: 'crow_silent', fx: { set: { e4_crow: 'silent' } } },
        { t: 'Go down. "Who are you writing to, Tamsin?"', go: 'crow_confront', fx: { set: { e4_crow: 'confront' } } },
        { t: 'Go down. Don\'t ask. Just sit on the step beside her in the rain.', go: 'crow_sit', fx: { set: { e4_crow: 'sat' } } }
      ]
    },
    crow_silent: {
      text: [
        `You close the shutter. It sticks halfway. You leave it.`,
        `You hear her come in a while later, and up the stair, and stop outside your door, for a long moment. Long enough to knock. She doesn't knock. Her door closes.`
      ],
      next: 'roll_final'
    },
    crow_confront: {
      loc: 'The Gutted Hen — the yard',
      text: [
        `She hears you on the step and turns, and her face is— nothing. Easy. Rain on it. Chipped tooth.`,
        `@ansel: "Who are you writing to, Tamsin?"`,
        `@tamsin: "My gran." No pause at all. "She worries. She's a hundred and mean and she likes to know I'm alive. Fen-folk send crows. You've seen me do it before, haven't you, Sergeant? I've seen you see me." She smiles. "You never asked before."`,
        `@ansel: "I'm asking now."`,
        `@tamsin: "And I'm telling you. My gran. She raised me after the Lamp burned my mam." She steps close, closer than the careful arm's length, and looks up at you in the rain, and her eyes are perfectly clear. "You want me to tell you what I said? I said: *I'm well. I'm in Harrowgate. The sergeant killed a dragon.*" A crooked grin. "She won't believe that last bit."`,
        `It is the truest-sounding thing anybody has ever said to you. Nearly every word of it is true.`
      ],
      fx: { set: { e4_tam_gran: 1 } },
      next: 'roll_final'
    },
    crow_sit: {
      loc: 'The Gutted Hen — the back step',
      text: [
        `You go down and sit on the back step. It's too narrow for two. She comes and sits on it anyway, and her shoulder is against yours, wet through, and neither of you moves it.`,
        `You don't ask. She doesn't tell. The rain comes down on the yard.`,
        `After a while she says, not looking at you:`,
        `@tamsin: "You should ask me things, Sergeant. You should ask me more things."`,
        `@ansel: "Would you tell me?"`,
        `A long, long pause.`,
        `@tamsin: "...No." Barely audible. "That's why you should ask."`,
        `She gets up and goes in. You sit on the step until you're as wet as she was.`
      ],
      next: 'roll_final'
    },
    roll_final: {
      loc: 'The Gutted Hen — the top room, late',
      text: [
        `You light the candle. You put the case on the bed and untie the sergeant's cord.`,
        { if: 'f.e4_ledger', t: `Next to it, the ledger. Calf and brass. *Deliveries from the Lanternhold.* Two lists of names on one blanket. One in a lovely clerk's hand, priced. One in yours.` },
        { if: '!f.e4_ledger', t: `Next to it, Jory's slate, with the chalk still on it. *13.* And the short line, unfinished.` },
        `You unroll the roll. Four hundred and six lines: the captain's name at the head, where you wrote it the day you made sergeant, and four hundred and five dead beneath. You have never added one. It's the Red Company roll. It's closed. The Company is dead.`,
        `You take the pen anyway. Under the last name, below the line you ruled six years ago, in the square careful hand of a sergeant, you write the four hundred and seventh line:`,
        `*Jory Pask. Tally. Of Saltdown. Sixteen.*`,
        `Then you sit and look at it for a long time, because you don't know what you've started, and you suspect it's a second book.`
      ],
      fx: { set: { e4_jory_written: 1 } },
      next: 'final'
    },
    final: {
      loc: 'Gallowmere Fen — the same hour',
      text: [
        `~ CUT TO: THE FEN.`,
        `Rain on black water. Reeds. A stilt-house standing over the bog on legs of bog-oak, a single window lit, the colour of a coal.`,
        `Under the house, just under the skin of the water, faces. Leather-brown, peaceful, their eyes closed, nooses still round their throats. Sleeping.`,
        `A crow comes down out of the rain onto the windowsill.`,
        `A small hand comes out to it: old, crooked, the nails long and yellow. It unties the twist of hair and the red thread from the crow's leg, gently, and holds the knot close to an ear, and listens, the way you'd listen to a shell.`,
        `A delighted, toothless whisper in the dark.`,
        `@narrator: "*Not in the book.* Oh, my clever girl. Oh, my clever, clever girl."`,
        `Under the house, in the black water, one of the sleepers opens its eyes.`
      ],
      end: true
    },

    /* ======================= SIDE: CONTRACT — THE SORROWHOUND ======================= */
    c_sorrow_1: {
      loc: 'The Thornwood — a charcoal-burner\'s clearing',
      text: [
        `The notice on the board is in a Lamplighter's tidy hand: *An EARTHBOUND BEAST in the Thornwood near Cray's Hollow. Forty silver from the Lanternhold for its pelt, and the heretic grave it guards to be opened and its occupant given to the Kindling. Saints keep you.*`,
        `Old Tibb reads it out for you and adds, for nothing: "Woodsmen say it weeps. Says it never once touched a child."`,
        `Cray's Hollow is a charcoal-burner's clearing gone to nettles. A turf hut with the roof falling in. A girl of twelve sitting on the doorstep with a heel of bread on her knees, waiting for something, the way you'd wait for a dog to come home.`,
        `@narrator: "You're here for the bounty," she says. Not a question. "Everybody is. You can't have him. He's my da."`
      ],
      choices: [
        { t: '"Tell me."', go: 'c_sorrow_2' },
        { t: '"Girl, that thing is a wolf."', go: 'c_sorrow_2' }
      ]
    },
    c_sorrow_2: {
      text: [
        `Her name is Bet Cray. Her mother, Nell, died of a fever three winters ago, and her father, Ambrose, couldn't bear to put her on a pyre. So he dug, under the big oak behind the hut, and put her in the ground in her good dress, and pressed the turf down with his hands.`,
        `@narrator: "Then he got frightened. That they'd find out. That the Lamp would dig her up and burn her anyway, and burn him after." Bet turns the bread over. "So he went to a woman in the fen and asked her to make him something that could guard Mam forever. She gave him a wolfskin. Said it'd come off when the grief did. She didn't say she'd keep the grief."`,
        `@narrator: "It never came off."`,
        `Behind the hut, under the oak, something is crying. Not howling. Crying, the way a grown man cries when he thinks nobody can hear.`
      ],
      next: 'c_sorrow_3'
    },
    c_sorrow_3: {
      loc: 'The Thornwood — under the oak',
      text: [
        `It lies on the grave with its chin on its paws. It is the size of a calf, grey-brown, rough-coated, and its eyes are a man's eyes, wet and red-rimmed, and tears have worn two dark tracks down its muzzle into the fur.`,
        `It lifts its head when it sees you, and shows its teeth, and keeps crying.`,
        `Then, from the path, voices. Four men with spades and a crossbow and a cart, and a Lamplighter's token on a string round the leader's neck. Bounty men. They've seen the notice too.`,
        `@narrator: "Oi. Sellsword. You after the beast? Fair enough, we'll split it. You kill the dog, we'll dig up the heretic. Lanternhold pays for the bones as well."`
      ],
      choices: [
        { t: 'Stand between them and the grave. "Nobody\'s digging today."', go: 'c_sorrow_diggers', fx: { rep: { lamp: -1, fen: 1 } } },
        { t: '"Fair enough." Draw on the hound. It\'s a bounty. It\'s a wolf.', go: 'c_sorrow_hound' }
      ]
    },
    c_sorrow_diggers: {
      text: [
        `@narrator: "You what? That's Lamp silver, that is. That's *holy* silver."`,
        `@ansel: "Then go and spend it on a priest."`,
        `They look at each other. They look at the hound, which has got up off the grave and is standing behind you, weeping and growling at the same time. They do the sum. They get it wrong.`
      ],
      fight: { foes: ['bandit', 'bandit', 'bandit_archer'], title: 'Cray\'s Hollow', win: 'c_sorrow_lift' }
    },
    c_sorrow_lift: {
      text: [
        `The last bounty man runs, holding his arm, and doesn't come back.`,
        `The hound lies down on the grave again. Bet comes round the hut slowly and kneels by it and puts her arms round its neck, and it lets her, and cries into her shoulder.`,
        `@narrator: "Can you take it off him?" she asks you. "The skin? The fen woman said grief. But it's been three years. How long does grief take?"`,
        { if: 'f.e3_gall_charm', t: `Under your shirt, Gall's charm is warm. It's always warm. Tonight it's warm the way a hand is warm when it's about to point.` }
      ],
      choices: [
        { t: 'Do it the fen way: a bowl of milk by the water, and Bet says his true name over the grave.', if: "f.e3_gall_charm || inParty('tamsin') || rep.fen>=2", go: 'c_sorrow_freed' },
        { t: '"I don\'t know how." Leave him guarding her. It\'s what he asked for.', go: 'c_sorrow_spared' },
        { t: 'Put him out of it. Gently. He\'s been crying for three years.', go: 'c_sorrow_mercy' }
      ]
    },
    c_sorrow_freed: {
      text: [
        { if: "inParty('tamsin')", t: `Tamsin knows. Of course Tamsin knows. She tells Bet what to do in a low voice, and doesn't look at you while she does it.` },
        { if: "!inParty('tamsin')", t: `You know, somehow. Gall's charm, or the earth, or something under the earth that knows you.` },
        `Bet fetches milk from the goat in a cracked bowl and sets it by the stream. She kneels on her mother's grave beside the hound, and takes its face in both her hands, and says his name. Not *Da*. His name. *Ambrose Cray.* Then her mother's: *Nell.* *Go down easy, Mam. He's done now. He can stop.*`,
        `The hound shudders from nose to tail like a dog coming out of water.`,
        `The skin comes off it the way wet bark comes off a log: in one long tearing piece. Underneath, on the grave, there is a thin naked grey-bearded man curled on his side, crying like a child, with his daughter holding him.`,
        `You put your coat over him and go and wait by the cart.`
      ],
      fx: { set: { e4_sorrowhound: 'freed' }, rep: { fen: 2 }, xp: 140, give: { surgeon_kit: 1, silver_dust: 2 }, know: { beast: ['sorrowhound'] } },
      next: 'c_sorrow_end_freed'
    },
    c_sorrow_end_freed: {
      text: [
        `Later, dressed in a dead bounty man's shirt, Ambrose Cray gives you what he has: a surgeon's needle-case that was his wife's, and a twist of silver filings from the Saltdown seams that he was saving for her headstone.`,
        `@narrator: "She'll not need a stone," he says, hoarse, a voice not used in three years. "We know where she is."`
      ],
      end: true
    },
    c_sorrow_spared: {
      text: [
        `You leave them there: a girl and a weeping wolf on a grave under an oak.`,
        `The bounty will be posted again. Someone else will come. But not today, and today's what you can do.`
      ],
      fx: { set: { e4_sorrowhound: 'spared' }, rep: { fen: 1 }, xp: 80 },
      end: true
    },
    c_sorrow_mercy: {
      text: [
        `Bet screams at you. Then she stops screaming and holds his head in her lap, and nods, and turns her face away.`,
        `He doesn't fight it. He lifts his chin for you, the way a tired dog does. It's quick. You know how to make it quick.`,
        `In death the wolfskin slides off him like a wet blanket, and there is a grey-bearded man lying on his wife's grave with his daughter's hand in his hair. You dig him in beside Nell, and press the turf down. You don't collect the bounty.`
      ],
      fx: { set: { e4_sorrowhound: 'mercy' }, rep: { fen: 1 }, xp: 100 },
      end: true
    },
    c_sorrow_hound: {
      text: [
        `The hound looks at you. It understands. You'd swear it understands.`,
        `It stands up off the grave and throws back its head and howls, and the howl is almost words.`
      ],
      fight: { foes: ['sorrowhound'], title: 'The Sorrowhound', win: 'c_sorrow_killed' }
    },
    c_sorrow_killed: {
      text: [
        `It dies on the grave. When it stops moving the skin slides off it like a wet blanket, and there is a thin grey-bearded man lying there, naked, his face wet.`,
        `Bet doesn't scream. She just sits down in the nettles.`,
        `The bounty men cheer and get their spades. You could stop them. You've been paid not to.`
      ],
      choices: [
        { t: 'Let them dig. Take the forty silver.', go: 'c_sorrow_paid', fx: { set: { e4_sorrowhound: 'killed' }, silver: 40, rep: { lamp: 1, fen: -2 }, xp: 120 } },
        { t: '"Not the woman. You\'ve got your beast. Leave the grave."', go: 'c_sorrow_paid2', fx: { set: { e4_sorrowhound: 'killed' }, silver: 20, rep: { fen: 1 }, xp: 120 } }
      ]
    },
    c_sorrow_paid: {
      text: [
        `They dig up Nell Cray in her good dress and put her in the cart with her husband, and drive away toward Harrowgate and the Kindling, singing.`,
        `Bet sits in the nettles under the oak and watches the hole. When you leave, she's still there. She doesn't look up.`
      ],
      end: true
    },
    c_sorrow_paid2: {
      text: [
        `They grumble and take the man and leave the grave. Half the bounty. Bet doesn't thank you. You didn't expect her to.`,
        `You hear her, as you go, pressing the turf back down over the grave with her hands.`
      ],
      end: true
    },

    /* ======================= SIDE: CONTRACT — THE TROLL BRIDGE ======================= */
    c_troll_1: {
      loc: 'The Thornwood — Stonearch Bridge',
      text: [
        `Peg Annick is a tinker with one eye, a pipe, and a grievance. Her donkey, her cart, and her entire stock of pans are on the far side of Stonearch Bridge, and under Stonearch Bridge lives a troll.`,
        `@narrator: "Took my donkey's *hat*," says Peg. "Ate it. Then said the donkey was next unless I could pay the toll, and the toll is a riddle, and I'm no good at riddles, I'm good at pans. Thirty silver if you get my Bessie back with all four legs."`,
        `The bridge is older than the road. Moss-black stone, a single high arch over a brown river. Under the arch, something shifts. A head comes up over the parapet like a boulder rolling uphill: grey, lumpy, lichened, with a nose like a turnip and small, bright, very intelligent eyes.`,
        `@narrator: "Visitors!" says the troll, delighted. "Riddle or supper? I don't mind which. Truly. Both are lovely."`
      ],
      choices: [
        { t: '"Riddles."', go: 'c_troll_r1', fx: { set: { e4_riddles: 0 } } },
        { t: 'Draw Widow. "Supper."', go: 'c_troll_fight' },
        { t: '"Ulla. You talk to him."', if: "inParty('ulla')", go: 'c_troll_ulla' }
      ]
    },
    c_troll_r1: {
      text: [
        `@narrator: "Lovely! Three riddles. Two right and the donkey walks. One or none, and you're supper. Fair? Fair." It settles its chin on the parapet. "First:"`,
        `@narrator: "*What does the rich man want, the poor man have, and the dead man eat?*"`
      ],
      choices: [
        { t: '"Nothing."', go: 'c_troll_r2', fx: { add: { e4_riddles: 1 } } },
        { t: '"Bread."', go: 'c_troll_r2' },
        { t: '"Dirt."', go: 'c_troll_r2' }
      ]
    },
    c_troll_r2: {
      text: [
        `The troll's face gives nothing away. It's a face made of rock; that helps.`,
        `@narrator: "Second. *The fen-folk plant me so I'll go down. The town-folk burn me so I'll go up. Either way, I'm never asked. What am I?*"`
      ],
      choices: [
        { t: '"A seed."', go: 'c_troll_r3' },
        { t: '"A dead man."', go: 'c_troll_r3', fx: { add: { e4_riddles: 1 } } },
        { t: '"A candle."', go: 'c_troll_r3' }
      ]
    },
    c_troll_r3: {
      text: [
        `The troll sniffs. Long and deep, its turnip nose working. Then it frowns, puzzled, and sniffs again, at you particularly.`,
        `@narrator: "Third. My own. Nobody's ever got it. *What crosses my bridge, and has no weight on my scale?*"`
      ],
      choices: [
        { t: '"A ghost."', go: 'c_troll_judge' },
        { t: '"Your shadow."', go: 'c_troll_judge' },
        { t: 'Think hard about what he\'s really asking. (Wits)', check: { stat: 'wits', dc: 15, uncanny: true, pass: 'c_troll_me', fail: 'c_troll_judge' } }
      ]
    },
    c_troll_me: {
      text: [
        `It's not a riddle. It's a question. He's been sniffing you.`,
        `@ansel: "Me."`
      ],
      fx: { add: { e4_riddles: 1 }, set: { e4_troll_me: 1 } },
      next: 'c_troll_judge'
    },
    c_troll_judge: {
      route: [
        { if: 'f.e4_riddles>=2', go: 'c_troll_win' },
        { go: 'c_troll_lose' }
      ]
    },
    c_troll_win: {
      text: [
        { if: 'f.e4_troll_me', t: `The troll goes very still. Then it leans down over the parapet until its great lumpy face is a yard from yours, and breathes you in, and its breath is cold and smells of river-bottom and old, old stone.` },
        { if: 'f.e4_troll_me', t: `@narrator: "Hrrr. Yes. You. Everything has a weight. Everything goes down or up. Not you." Softly, almost respectfully. "You smell wrong, little man. Like a grave with no one in it. Mind how you walk."` },
        `@narrator: "Well done! Oh, well done. Take the donkey. Take the pans. Here—" It rummages under the arch and comes up with a fistful of rusty mail rings and old coins, and pours them into your hands. "Toll from a cleverer age. Come back and riddle me again. Nobody ever does."`
      ],
      fx: { set: { e4_troll: 'riddled' }, silver: 50, give: { iron_scrap: 3 }, xp: 140, know: { beast: ['troll'] } },
      next: 'c_troll_end'
    },
    c_troll_lose: {
      text: [
        `@narrator: "Oh dear," says the troll, with real regret, climbing up onto the bridge. It's very large. "Oh dear, oh dear. I did so hope. Supper, then."`
      ],
      next: 'c_troll_fight'
    },
    c_troll_ulla: {
      text: [
        `Ulla walks out onto the bridge, sits down on the parapet next to the troll's head, takes out a whole wheel of cheese from somewhere, and cuts it in half with her axe.`,
        `@ulla: "In Nordvik we have bridge-trolls also. They are better company than most men. You want riddles? I know four hundred riddles. All of them are about goats. Or you want cheese?"`,
        `The troll looks at the cheese. The troll looks at Ulla.`,
        `@narrator: "...Both?"`,
        `It goes on till dusk. You sit with Peg and listen to the two of them on the bridge, riddling in two languages, roaring with laughter, eating the cheese and then most of Peg's provisions. At sunset the troll leads Bessie the donkey across the bridge itself, and gives Ulla a kiss on the forehead that leaves a smudge of lichen.`
      ],
      fx: { set: { e4_troll: 'feasted' }, silver: 30, xp: 120, know: { beast: ['troll'] } },
      next: 'c_troll_end'
    },
    c_troll_fight: {
      fight: { foes: ['troll'], title: 'Stonearch Bridge', win: 'c_troll_won',
        intro: 'It regrows what you cut. Fire stops that. Hit it while it scratches.' }
    },
    c_troll_won: {
      text: [
        `It goes down off the bridge into the river with a sound like a quarry collapsing, and lies there in the shallows, and the brown water goes round it as if it had always been a rock.`,
        `Maybe it was, once. Maybe it will be again. You feel, obscurely, that you've done something rude.`
      ],
      fx: { set: { e4_troll: 'fought' }, know: { beast: ['troll'] } },
      next: 'c_troll_end'
    },
    c_troll_end: {
      text: [
        `Peg Annick gets her donkey back with all four legs and no hat, counts out thirty silver, and gives you a frying pan for nothing.`,
        `@narrator: "Never know," she says, "when you'll need to hit something flat."`
      ],
      fx: { silver: 30 },
      end: true
    },

    /* ======================= SIDE: TALKS ======================= */
    t_ulla_1: {
      loc: 'The Gutted Hen — the kitchen, before dawn',
      text: [
        `You come down at dawn because you can't sleep, and find Ulla in Mags's kitchen eating her third breakfast. She has made it herself: six eggs, a slab of bacon, half a loaf, and an onion she is eating like an apple.`,
        `@ulla: "Dray! Sit. Eat. You are thin like a heron. Mags says I may use the kitchen if I do not eat the cat." She considers the cat. "Yet."`
      ],
      choices: [
        { t: '"Tell me about your sister."', go: 't_ulla_sister' },
        { t: '"Do you ever stop eating?"', go: 't_ulla_appetite' },
        { t: '"Sing me something from home."', go: 't_ulla_song' }
      ]
    },
    t_ulla_sister: {
      text: [
        `She puts the onion down. That's how you know it matters.`,
        `@ulla: "Sigrun. Six years younger. Small, like a sparrow; nobody believes we had the same mother. She weaves. She laughs at everything, even at me." A pause. "Laughed."`,
        `@ulla: "He was the chieftain's son. Everybody knew what he was. Everybody knew, and nobody did anything, because of whose son. And then one midsummer he did it to Sigrun, and she stopped laughing. She stopped talking. For a year." She looks at her hands, the whole one and the three-fingered one. "So at the next midsummer fire, in front of everyone, I walked up to him with my axe and I killed him. It took one stroke. I had been thinking about it for a year."`,
        `@ulla: "People say I did it for Sigrun. I tell you a true thing, Dray, because you are a man who tells true things: I did it because I could not live in a world where he sat at the same table and ate the same bread. That is not the same as doing it for her." She picks up the onion again, and doesn't eat it. "When they put me on the road, she came out to the edge of the village. She said one word. *Go.* I still do not know if it was a blessing."`
      ],
      fx: { bond: { ulla: 1 }, set: { e4_ulla_sister: 1 } },
      choices: [
        { t: '"It was a blessing."', go: 't_ulla_end' },
        { t: '"Maybe it was both."', go: 't_ulla_end' },
        { t: 'Say nothing. Pass her the bread.', go: 't_ulla_end' }
      ]
    },
    t_ulla_appetite: {
      text: [
        `@ulla: "For food? When I am dead." She grins with egg on her chin. "For fights? Also when I am dead. For women? Maybe a week after." She waggles her eyebrows. "Your innkeeper has very fine arms, Dray. Like a ship's mast. I told her so. She hit me with a ladle. I think it went well."`,
        `@ansel: "Mags hits everyone with a ladle."`,
        `@ulla: "Ja, but she hit me *slowly*." She is enormously pleased with herself. Then, more quietly: "In Nordvik we say: eat, because winter is long. I spent eleven months not tasting anything at Saltdown. Now I taste everything. Even this onion. It is a terrible onion. I love it."`
      ],
      fx: { set: { e4_ulla_flirt: 1 } },
      next: 't_ulla_end'
    },
    t_ulla_song: {
      text: [
        `She doesn't need asking twice. She wipes her mouth, plants her elbows, and sings, in a deep cracked contralto that fills the kitchen and rattles the pans on their hooks.`,
        `It's Nordvik, so you understand none of it. It's slow. It goes up at the end of each line like a question nobody answers. Somewhere in the middle her voice catches, and she keeps going through it, the way she kept going in the arm-wrestle.`,
        `@ulla: "It is about a woman who rows out to fetch her sister home from an island of the dead," she says when she's done. "She gets there. The sister will not come. So she rows home alone, and every year she rows out again." She shrugs. "It is a cheerful song, in Nordvik. Everybody dances."`,
        `@ansel: "Teach me the words."`,
        `She looks at you, surprised. Then she does, line by line, till the bread's gone and the sun's up and Mags comes in and throws you both out.`
      ],
      fx: { bond: { ulla: 1 }, set: { e4_ulla_song: 1 } },
      next: 't_ulla_end'
    },
    t_ulla_end: {
      text: [
        `She claps you on the back hard enough to rearrange your spine.`,
        `@ulla: "You are a good man to eat with, Dray. Bad at eating. But good to eat with." She hands you the last rasher of bacon on the point of her knife. "Here. Grow."`
      ],
      fx: { heal: 10 },
      end: true
    },

    t_tam_1: {
      loc: 'Harrowgate — the town wall, dusk',
      text: [
        `She finds you on the wall-walk at dusk, which is the time you like least: the stars beginning to prick through, one by one, like nails coming out of a board.`,
        `She sits on the parapet, feet dangling over the drop, eating a stolen pear.`,
        { if: "f.e4_told_tam==='truth'", t: `@tamsin: "I keep thinking about it. What you told me. A man with a book, and you not in it." She turns the pear in her fingers. "Does it frighten you?"` },
        { if: "f.e4_told_tam!=='truth'", t: `@tamsin: "You never told me what you saw. Down in the salt. I'm not asking." She is obviously asking. "I'm just saying I noticed you never told me."` }
      ],
      choices: [
        { t: '"Every night. Every night I can see the sky."', go: 't_tam_2', fx: { bond: { tamsin: 1 } } },
        { t: '"He looked at me like I was a mistake in his sums. Tamsin—what am I?"', go: 't_tam_2b' },
        { t: '"Why do you want to know so badly?"', go: 't_tam_2c' }
      ]
    },
    t_tam_2: {
      text: [
        `@tamsin: "Good," she says. "Not good. But— good that you said it." She looks up at the stars coming out, which she can look at and you can't. "My mam used to say that if you were frightened of the sky you should keep your eyes on the ground, because the ground's never once lied to anybody." A beat. "She was wrong about a lot of things. Not that."`
      ],
      next: 't_tam_knot'
    },
    t_tam_2b: {
      text: [
        `She takes a long time. Long enough that you think she isn't going to answer.`,
        `@tamsin: "A man who keeps a list of the dead in a box under his head and still remembers to feed his horse." She doesn't look at you. "That's what I know. The rest's for priests and witches. Don't let either of them tell you."`,
        `It isn't an answer. You notice it isn't. You notice, too, that her hands have gone still on the pear.`
      ],
      next: 't_tam_knot'
    },
    t_tam_2c: {
      text: [
        `@tamsin: "Because I'm nosy, Sergeant. I go through people's pockets." Easy, quick. Then, less easily: "Because you looked at that empty place like you'd seen your own grave. And I've been to a lot of graves. I didn't like seeing that look on you." She bites the pear savagely. "That's all."`
      ],
      next: 't_tam_knot'
    },
    t_tam_knot: {
      text: [
        `She finishes the pear, throws the core off the wall into somebody's garden, and holds out her hand.`,
        `@tamsin: "Wrist. Left one. Glove off."`,
        `You give it to her. She looks at the star burned into your palm and doesn't flinch. Out of her sleeve she takes a length of red thread and ties it round your wrist, above the burn: three turns, and a knot, and a fen word you don't know, said into it, very quietly.`,
        `@tamsin: "There. Luck-knot. So you'd stop dying near me. It's bad for my nerves."`,
        `You look at it. Red thread. The same red as the knot on the crow's leg in the Hen's yard. You don't say so.`,
        `@ansel: "Does it work?"`,
        `@tamsin: "No idea." She grins, chipped tooth and all, and swings her legs back over onto the wall-walk. "Never tied one for anyone before."`
      ],
      fx: { give: 'luck_knot', set: { e4_luck_knot: 1 } },
      end: true
    },

    t_pell_1: {
      loc: 'The Gutted Hen — a corner table, late',
      text: [
        `Pell is drinking. Not the steady medicinal drinking of the road; the other kind. The cup is going up and down like a pump handle.`,
        `@pell: "Ah. Ansel. Sit. Sit. Have you come to ask me about the cart? You have that face. That *sergeant's* face. *Brother Pell, report.*"`
      ],
      choices: [
        { t: '"Tell me about the cart, Pell."', go: 't_pell_2' },
        { t: 'Take the cup away from him. Gently.', go: 't_pell_2', fx: { set: { e4_pell_cup: 1 } } }
      ]
    },
    t_pell_2: {
      text: [
        { if: 'f.e4_pell_cup', t: `He lets you. He watches the cup go the way a dog watches a bone go. Then he folds his hands on the table like a man at prayer.` },
        `@pell: "Two years ago. The winter they threw me out. I was gate-brother at the Lanternhold that month: you sit in the lodge with the gate-book and write down what comes in and goes out. One night, very late, a cart came up from the crypt stair. Blankets over it. A Brother I knew driving. Bound for the lime-kiln gate." He swallows. "I signed it out. I didn't lift the blanket. It moved a little, the blanket. I told myself it was the wind."`,
        `@pell: "It took me three weeks to go down and put my ear to that door, and another day to ask her what was behind it. *Prayer, Pellam.* Out by noon." He laughs, horribly. "Three weeks. I'm told that was brave of me."`,
        `@pell: "That's the measure of Pellam Orme, Ansel. Three weeks' worth of courage, and a signature."`
      ],
      choices: [
        { t: '"You asked. Most of them never did. That\'s not nothing."', go: 't_pell_3a', fx: { set: { e4_pell_notnothing: 1 } } },
        { t: '"Then ask again. Louder. You know the Lanternhold. Help me get into that crypt."', go: 't_pell_3b', fx: { bond: { pell: 1 }, set: { e4_pell_crypt: 1 } } },
        { t: 'Tell him about Ashby. About the thirty-one you walked up the hill.', if: "f.e1_ashby==='led'", go: 't_pell_3c', fx: { bond: { pell: 1 } } }
      ]
    },
    t_pell_3a: {
      text: [
        `@pell: "That's not nothing," he repeats slowly, as if tasting it. "That's not nothing." He looks at the cup, still out of reach. "You're a kinder man than you let on, Sergeant Dray. It's very annoying. I came here to wallow."`
      ],
      next: 't_pell_end'
    },
    t_pell_3b: {
      text: [
        `He goes grey. You watch the fear go through him like a cold wind through a coat: real, physical, his hands shaking on the table.`,
        `@pell: "The crypt." A whisper. "Oh, Saints. You would, wouldn't you. You'd just walk down there." He shuts his eyes. Then he opens them. "I know the lodge-books. I know where the crypt keys hang. I know which Brothers drink." He laughs, faintly. "I'm going to regret this so very much."`
      ],
      next: 't_pell_end'
    },
    t_pell_3c: {
      text: [
        `You tell him: the girl with the doll, the gentle young men in grey, the hill. And the line in Grisell's ledger. *1 girl, small, @ 12.*`,
        `He listens. When you're done he reaches across the table and puts his hand over yours, the gloved one, and holds it there.`,
        `@pell: "So we've both signed for a cart," he says. "Well. Then we'll both have to make it right, won't we. Two old fools. That's a congregation."`
      ],
      next: 't_pell_end'
    },
    t_pell_end: {
      text: [
        `He gets up, unsteadily, and goes to bed, and on the stair he turns round and recites, very clearly, in the voice he must have used in the Lanternhold's great chapel twenty years ago:`,
        `@pell: "*And in the last days there shall walk one whom Heaven cannot number.*" He looks at you. "I'm just saying, Ansel. I'm just saying it out loud. Goodnight."`
      ],
      fx: { know: { codex: ['starless'] } },
      end: true
    },

    t_hob_1: {
      loc: 'The Gutted Hen — the stable yard, morning',
      text: [
        `Hob is in the stable yard with two broom-handles, waiting for you. He's been waiting a while; there's straw in his hair and the sweat's dried on him.`,
        `@hob: "I saw her. Ulla. At the cage. The way she just— *stood* there and they couldn't get round her." He holds out a broom-handle. "Teach me. Please. Properly. Not *go home, Hob*. I'm not going home. I've decided."`
      ],
      choices: [
        { t: 'Take the broom-handle. Teach him properly. All morning.', go: 't_hob_train', fx: { bond: { hob: 1 }, set: { e4_hob_trained: 1 } } },
        { t: '"Go home, Hob." (He won\'t.)', go: 't_hob_home', fx: { bond: { hob: -1 } } },
        { t: '"Ulla! Come and teach this boy to stand."', go: 't_hob_ulla', fx: { bond: { hob: 1 }, set: { e4_hob_trained: 1 } } }
      ]
    },
    t_hob_train: {
      text: [
        `You teach him the way Hask taught you, which is the only way you know: feet first, then hands, then everything else. Where to stand. How to stand. How not to fall over when somebody hits you, which is the whole of soldiering if you're honest.`,
        `He's terrible. Then, for about four strokes near the end, he isn't. He stops, astonished, with the broom-handle up in a perfect high guard, and looks at you.`,
        `@hob: "Did you see that? Sergeant, did you *see*—"`,
        `@ansel: "I saw it. Do it a thousand more times and you'll be shite with some style."`,
        `It's the best thing anyone has ever said to him. You can tell from his face.`
      ],
      end: true
    },
    t_hob_home: {
      text: [
        `@hob: "No." He doesn't even blink. "Hit me with it, then, if you want me to go. Go on."`,
        `You don't. He knew you wouldn't. He stands there holding out the broom-handle until you take it, and then you teach him anyway, badly, grumbling, for an hour.`
      ],
      fx: { set: { e4_hob_trained: 1 } },
      end: true
    },
    t_hob_ulla: {
      text: [
        `Ulla comes out of the kitchen door with a sausage in each hand, gives one to Hob, and spends the next hour knocking him down with her shield, very gently, until he learns to stay up.`,
        `@ulla: "Good! Good. You fall like a sack of turnips, but you get up like a man. Getting up is the whole thing. Dray, he is yours? He is good. Feed him more."`,
        `Hob, on his back in the straw for the twentieth time, is grinning like he's been knighted.`
      ],
      end: true
    }
  },
  side: [
    { id: 'e4_c_sorrow', kind: 'contract', title: 'The Sorrowhound', desc: 'The Lanternhold offers forty silver for the pelt of an "earthbound beast" in the Thornwood that weeps and will not leave a grave.', level: 5, start: 'c_sorrow_1' },
    { id: 'e4_c_troll', kind: 'contract', title: 'The Toll at Stonearch', desc: 'A one-eyed tinker will pay thirty silver to get her donkey back from the troll under Stonearch Bridge. The toll is a riddle.', level: 5, start: 'c_troll_1' },
    { id: 'e4_t_ulla', kind: 'talk', who: 'ulla', title: 'Third breakfast', start: 't_ulla_1', if: "inParty('ulla')" },
    { id: 'e4_t_tamsin', kind: 'talk', who: 'tamsin', title: 'Red thread on the wall-walk', start: 't_tam_1', if: "inParty('tamsin')" },
    { id: 'e4_t_pell', kind: 'talk', who: 'pell', title: 'A signature in the gate-book', start: 't_pell_1', if: "inParty('pell')" },
    { id: 'e4_t_hob', kind: 'talk', who: 'hob', title: 'Broom-handles at dawn', start: 't_hob_1', if: "inParty('hob')" }
  ]
});
