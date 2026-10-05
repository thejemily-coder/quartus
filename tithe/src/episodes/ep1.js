/* TITHE — Season One, Episode 1: "The Dead Don't Pay" */
TITHE.episode({
  n: 1, title: 'The Dead Don\'t Pay',
  logline: 'A drunk sellsword takes a job guarding a cloth wagon to Harrowgate, and finds the man who sold his company to the slaughter waiting at the gate.',
  start: 'cold1',
  credits: ['ansel', 'tamsin', 'hask', 'odo', 'mags', 'moll', 'wat', 'isolde', 'tallyman'],
  nextTime: [
    '"You. The dead one. Pettibone\'s wagon. Her ladyship would like a word. Quietly."',
    'Something under the town is eating well.',
    '"I asked the Abbess what was in the crypt. She smiled at me and said, *Prayer, Pellam.*"'
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    cold1: {
      loc: 'Corran\'s Ford — six years ago, Saint Corran\'s Eve',
      text: [
        'The river is the colour of a knife. Four hundred spears of the Red Company stand on the near bank in the grey before dawn, breath smoking, waiting for the order to cross.',
        'You are twenty-five years old and a sergeant, and you have never been afraid in a line before. You are not afraid now. You are cold, and you need to piss, and the man beside you, Tom Ashe, is telling a joke about a miller\'s wife that you have heard nine times.',
        'Behind the line stands an old grey stone, taller than a man, cut with a seven-pointed star worn almost smooth. The lads touch it for luck as they pass.',
        'Across the water, on a white horse, Captain Konrad Hask raises his hand.'
      ],
      choices: [
        { t: 'Watch the captain.', go: 'cold2' },
        { t: 'Watch the far treeline.', go: 'cold2b' }
      ]
    },
    cold2: {
      text: [
        'He is too far away to read, but you know him the way you know your own hands. Ten years he has been your captain. He taught you to hold a sword. He stood for you at your trial in Lowmarch when you were sixteen and had broken a man\'s jaw over a girl.',
        'He lowers his hand. He does not give the order to cross.',
        'He turns his horse around.'
      ],
      next: 'cold3'
    },
    cold2b: {
      text: [
        'Too quiet. No birds. A treeline at the turn of winter ought to be loud with them.',
        'Then you see the glint, and another, and a hundred: crossbows, laid flat in the bracken on both flanks, already spanned. Someone told them exactly where to lie.',
        'You turn to shout. On the far bank, Captain Hask is riding away at a walk.'
      ],
      next: 'cold3'
    },
    cold3: {
      text: [
        'The first volley sounds like hail on a barn roof.',
        'Tom Ashe takes a bolt through the cheek and keeps telling his joke for a moment, wetly, before he sits down. The line folds like wet paper. Men try to cross and the river takes them. Men try to run and the second volley takes them. Somebody is screaming for his mother in the Lowmarch accent, and you realise it is the boy you were going to make corporal.',
        'You get your back to the old stone. You get Widow out. A knight in Ashwick colours comes down the bank at you on foot, and you kill him, and the one after him. The third puts a spear in you below the ribs and leans on it, and you feel it grate against the stone behind you.',
        'Your blood runs into the carved star. It fills the lines like ink.'
      ],
      next: 'cold4'
    },
    cold4: {
      loc: 'Corran\'s Ford — that night',
      text: [
        'You die.',
        'It is not very interesting. It is cold, and then it is not anything.',
        'Then it is night, and you are looking up. You cannot blink. The stars are out over the ford, more of them than you have ever seen, and they are very bright, and they are very close, and they are *looking*.',
        'A man is walking among the bodies. Tall. A rain-dark coat, a wide hat. He carries an open ledger and a pen, and at each body he pauses, and writes, and moves on. He is humming.',
        'He reaches you. He looks down. He looks at his book. He turns a page back. He turns it forward again.',
        'He frowns, very slightly, the way a clerk frowns at a sum that will not come out.',
        '@tallyman: "Hm."',
        'He stands there a long time. Then he walks on.'
      ],
      next: 'cold5'
    },
    cold5: {
      text: [
        'Dawn. A crow is standing on your chest, considering your left eye.',
        'You open it.',
        'The crow leaves. You lie there among four hundred dead men with a hole in you that has closed into a puckered purple seam, and your left palm burning where it lay against the stone. When you finally lift your hand to look, the burn is in the shape of a star.',
        'Fresh hoofprints in the mud between you and Tom Ashe, made after the rain. Someone has closed Tom\'s eyes.'
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { codex: ['corransford', 'redcompany'], cast: ['tallyman'] } },
      next: 'six'
    },
    six: {
      card: { kind: 'cut', title: 'Six years later', sub: 'The Crooked Mile · the Kingsroad' },
      next: 'loft1'
    },

    /* ======================= ACT ONE: THE CROOKED MILE ======================= */
    loft1: {
      loc: 'The Crooked Mile waystation — stable loft, morning',
      text: [
        'You wake in the hay with a bottle in your fist and the shakes already in your hands. The rain on the roof is the only thing in the world that doesn\'t hurt.',
        'Below you, Ox shifts in his stall and blows through his lips, which is his way of saying you smell. He\'s an ugly dun gelding with a ewe neck and a bite like a mantrap, and he is the only creature living that has never once been disappointed in you.',
        'Your purse holds twelve silver. The waystation keeper wants eight for the loft and the oats. There is a finger of fen poitín left in the bottle.'
      ],
      choices: [
        { t: 'Finish the bottle. It\'s the only thing that stops the hands.', go: 'loft2', fx: { set: { e1_drank: 1 }, heal: 3 } },
        { t: 'Pour it out through the floorboards. Not today.', go: 'loft2', fx: { set: { e1_poured: 1 }, st: 1 } },
        { t: 'Cork it and keep it. For later. There\'s always a later.', go: 'loft2', fx: { give: 'spirits' } }
      ]
    },
    loft2: {
      text: [
        { if: 'f.e1_drank', t: 'It goes down like a hot coal and lands like a kind word. Your hands steady. You hate how well that works.' },
        { if: 'f.e1_poured', t: 'You listen to it drip onto the horse below. Ox looks up, offended. Your hands keep shaking, but your head is clearer than it has been in a week.' },
        { if: '!f.e1_drank && !f.e1_poured', t: 'You tuck it into your coat. A man needs a reason to get to the end of the day.' },
        'You go down the ladder, buckle Widow on, and walk out into the yard to find out who\'s hiring.'
      ],
      next: 'yard1'
    },
    yard1: {
      loc: 'The Crooked Mile — the yard',
      text: [
        'A covered wagon stands in the mud with two miserable mules in the traces. Bolts of dyed wool under the oilcloth: madder red, woad blue. Somebody\'s fortune, or somebody\'s debt.',
        'A very fat man in a very good coat is shouting at a stable boy.',
        '@odo: "—*gone*, what do you mean he\'s *gone*, I paid him half in advance, I paid him half in advance on the express understanding that— You. You there. You\'re armed. Are you for hire?"',
        'He looks you up and down. The look goes from hope to doubt to arithmetic.',
        '@odo: "Odo Pettibone. Cloth. I need this wagon in Harrowgate in two days and the man I hired has run off with my money and, I suspect, my cook. The road\'s bad. Deserters. Worse. Ten silver now, ten at the gate."'
      ],
      choices: [
        { t: '"Twenty now. Twenty at the gate. You said yourself the road\'s bad."', check: { stat: 'presence', dc: 12, pass: 'yard_haggle_ok', fail: 'yard_haggle_no' } },
        { t: '"Done." (Take the ten.)', go: 'yard2', fx: { silver: 10, set: { e1_pay: 10 } } },
        { t: '"What\'s worse than deserters?"', go: 'yard_worse' }
      ]
    },
    yard_worse: {
      text: [
        'Odo lowers his voice, as if the mules might talk.',
        '@odo: "The sickness. Out past Ashby. They say whole families just— stop. Sit down by the fire and don\'t get up. Eyes open. Breathing. Nobody home. The Lanternhold takes them in, bless the Abbess, but—" He makes the sign of the seven-point star over his belly. "Ten now, ten at the gate. That\'s my price."'
      ],
      choices: [
        { t: '"Twenty and twenty. For the sickness."', check: { stat: 'presence', dc: 11, pass: 'yard_haggle_ok', fail: 'yard_haggle_no' } },
        { t: '"Done."', go: 'yard2', fx: { silver: 10, set: { e1_pay: 10 } } }
      ]
    },
    yard_haggle_ok: {
      text: [
        'Odo looks at your face, at your scar, at the sword, and at the empty road beyond the gate. He sighs like a punctured bellows.',
        '@odo: "Fifteen and fifteen. And may the Saints forgive you, because I won\'t."'
      ],
      fx: { silver: 15, set: { e1_pay: 15 } },
      next: 'yard2'
    },
    yard_haggle_no: {
      text: [
        '@odo: "Twenty! For a man who smells like a still? I\'ll take my chances with the stable boy." He pauses. The stable boy is eleven. "Ten and ten. Final."',
        'You take it.'
      ],
      fx: { silver: 10, set: { e1_pay: 10 } },
      next: 'yard2'
    },
    yard2: {
      text: [
        'Sitting on the wagon\'s tail, swinging her boots, eating an apple, is a young woman you hadn\'t noticed. Which is, you suspect, the point.',
        'Freckles. A sunburn in October. Copper hair hacked short, as if with a knife in the dark. A longbow unstrung across her knees, and the kind of quiver you don\'t see on poachers: good arrows, fletched with grey goose. A chipped front tooth that shows when she grins, which she does now.',
        '@tamsin: "Afternoon, Sergeant." It is barely past breakfast. She says it the way you\'d tell a drunk the time.',
        '@odo: "Ah. Yes. This is— ah—"',
        '@tamsin: "Tamsin. I\'m also hired. Aren\'t I, Master Pettibone?"',
        'Odo opens his mouth, looks at the bow, and closes it again.',
        '@odo: "...Apparently."'
      ],
      fx: { know: { cast: ['tamsin', 'odo'] } },
      choices: [
        { t: '"Why\'d you call me Sergeant?"', go: 'tam_sergeant' },
        { t: '"That\'s his apple."', go: 'tam_apple' },
        { t: 'Say nothing. Look at her until she looks away.', go: 'tam_stare' }
      ]
    },
    tam_sergeant: {
      text: [
        '@tamsin: "You stand like one. Feet apart, thumbs in your belt, looking at the gate before you look at me. Also you\'ve got a sergeant\'s knot on your scabbard, and you\'ve tried to cut it off and couldn\'t make yourself do it."',
        'You look down. She\'s right. The red cord is frayed where the knife went, and stopped.',
        '@tamsin: "I notice things. It\'s a curse. Want a bite?"'
      ],
      next: 'tam_after'
    },
    tam_apple: {
      text: [
        '@tamsin: "It was. Now it\'s a moral lesson." She takes another bite. "He\'s got a barrel of them under the wool. He\'s taking them to Harrowgate to sell at twice the price to people who are hungry. I\'m redistributing."',
        '@odo: "I can *hear* you."',
        '@tamsin: "I know, Master Pettibone. That\'s the lesson."'
      ],
      next: 'tam_after'
    },
    tam_stare: {
      text: [
        'She doesn\'t look away. She chews. She swallows. She tilts her head and studies you right back, frankly, the way a horse-coper studies a horse: teeth, legs, temper.',
        '@tamsin: "You\'re going to be hard work, aren\'t you."',
        'It isn\'t a question. Then she grins, chipped tooth and all, and something in your chest that has been clenched for six years unclenches by about the width of a hair.'
      ],
      next: 'tam_after'
    },
    tam_after: {
      text: [
        '@odo: "If we\'re all quite finished being *charming*, the road is waiting and so is my creditor."',
        'You bring Ox out. Tamsin looks him over.',
        '@tamsin: "That is the ugliest horse I have ever seen in my life."',
        'Ox bites her. Not hard. She laughs, delighted, and scratches him under the jaw, and he lets her, the traitor.'
      ],
      fx: { party: { add: ['tamsin'] }, quest: { id: 'e1_wagon', title: 'The Cloth Wagon', state: 'active', note: 'Guard Odo Pettibone\'s wagon to Harrowgate. Two days on the Kingsroad.' } },
      next: 'road1'
    },

    /* ======================= ACT TWO: THE KINGSROAD ======================= */
    road1: {
      loc: 'The Kingsroad — noon',
      text: [
        'The Kingsroad runs west through wet brown country under a sky like a dirty fleece. Burned farms. A mill with no roof. Every crossroads has a gibbet and every gibbet has a tenant.',
        'Odo talks. He talks about the price of madder, about his wife\'s sister in Corvane, about the Lamp\'s new tithe on cloth. He talks about Harrowgate: old Lord Varane, broke as a dropped plate; his clever daughter; the Lanternhold, where the Abbess feeds the poor. A new Marshal who hangs bandits at the crossroads "and good riddance."',
        'Tamsin walks beside the wagon, bow strung now, never quite looking at the hedges and never quite not.',
        'Around noon she drops back beside Ox.'
      ],
      choices: [
        { t: '"Where are you from, Tamsin?"', go: 'road_from' },
        { t: '"Why are you really on this wagon?"', go: 'road_why' },
        { t: 'Ride on in silence. You\'re not here to make friends.', go: 'road_silence' }
      ]
    },
    road_from: {
      text: [
        '@tamsin: "The fen. Gallowmere, south of Harrowgate. Eel-weirs and reed-houses and my gran, who\'s a hundred and mean." She considers. "And a hundred other places. I left when I was fourteen. Went where the work was."',
        '@ansel: "What work?"',
        '@tamsin: "Whatever didn\'t involve a man telling me to lie down." She shrugs the bow higher. "Archery, mostly. Some of it was even legal."'
      ],
      next: 'road2'
    },
    road_why: {
      text: [
        '@tamsin: "Free ride home. Harrowgate\'s a day\'s walk from my gran\'s." The answer comes easily. Too easily, maybe, or maybe you\'ve forgotten what easy sounds like. "And Pettibone\'s going to get himself killed without someone who can shoot. And you\'re clearly going to fall off that horse the first time you sneeze."',
        '@ansel: "I\'ve been sneezing on horses for twenty years."',
        '@tamsin: "Then you\'re due."'
      ],
      fx: { set: { e1_asked_why: 1 } },
      next: 'road2'
    },
    road_silence: {
      text: [
        'She takes the hint. She walks ahead. After a mile she starts to sing, very loudly and very badly, a fen song about an eel who married a heron. It has eleven verses. She sings all of them.',
        'You find, at the end, that you know how the heron dies.'
      ],
      next: 'road2'
    },
    road2: {
      loc: 'The Kingsroad — Gorse Ford, afternoon',
      text: [
        'The road dips to a ford through a stand of alder. The water is brown and fast. Odo\'s mules balk, and while he curses them, Tamsin goes very still.',
        '@tamsin: "Sergeant. Left bank. Four."',
        'They come out of the alders: ragged men with a billhook, a woodaxe, a rusted sword. Old Ashwick tabards worn to the colour of mud. Deserters from a war that ended six years ago and never told them. Their faces are all cheekbone.',
        'The one in front, the oldest, raises the billhook.',
        '@narrator: "The wagon. The mules. And whatever\'s in your purses. Nobody has to die on a Tuesday."',
        'Behind him, the youngest can\'t be more than seventeen. His sword is shaking worse than your hands did this morning.'
      ],
      choices: [
        { t: 'Draw Widow and step forward. "You\'re Ashwick. I was Red Company. You know how that went for us. Run."', check: { stat: 'might', dc: 12, intimidate: true, pass: 'ford_scare', fail: 'ford_fight' } },
        { t: '"Pettibone. Throw them a sack of those apples."', go: 'ford_apples' },
        { t: 'No talking. Kill the leader before he finishes his sentence.', go: 'ford_fight', fx: { set: { e1_ford_first: 1 } } }
      ]
    },
    ford_scare: {
      text: [
        'You let them see your face. You let them see the scar, and the sword, and the thing behind your eyes that most people only see once.',
        'The oldest one looks at the Red Company knot on your scabbard. Something in him collapses.',
        '@narrator: "Corran\'s Ford," he says. "I was there. Other bank." He lowers the billhook. "We didn\'t know they\'d— nobody told us it was going to be like that."',
        'They go back into the alders. All but the youngest, who stands frozen in the river, sword out, crying without seeming to know it.'
      ],
      fx: { xp: 20 },
      next: 'ford_wat'
    },
    ford_apples: {
      text: [
        '@odo: "My— those are *Corvane pippins*—"',
        'Tamsin is already dragging the sack out from under the wool. She throws it into the shallows. It splits. Apples bob away downstream, red and gold, and the deserters forget you entirely and go into the water after them like boys.',
        'The oldest one stands on the bank with an apple in each fist and tears in his eyes. He doesn\'t say thank you. He does nod.',
        '@odo: "That was *nine silver* of fruit."',
        '@tamsin: "Put it on my account."'
      ],
      fx: { set: { e1_apples: 1 }, rep: { town: 1 } },
      next: 'ford_wat_apples'
    },
    ford_wat_apples: {
      text: [
        'The youngest stays on the bank after the others go. He\'s got an apple in each hand and he\'s looking at you.',
        '@wat: "You\'re Red Company. Truly?"',
        '@ansel: "Was."',
        '@wat: "My da said the Red Company were the best in the world." He wipes his nose. "My name\'s Wat. If I go to Harrowgate, will they hang me?"'
      ],
      choices: [
        { t: '"Not if you burn that tabard. Ask for work at the castle. Tell them Sergeant Dray sent you." Give him a silver.', go: 'ford_end', fx: { set: { e1_spared_wat: 1, e1_wat_dray: 1 }, silver: -1, know: { cast: ['wat'] } } },
        { t: '"Probably. Go home, Wat."', go: 'ford_end', fx: { set: { e1_spared_wat: 1 }, know: { cast: ['wat'] } } }
      ]
    },
    ford_fight: {
      fight: { foes: ['deserter', 'deserter', 'deserter'], title: 'Gorse Ford', win: 'ford_won',
        intro: 'Watch what each enemy is about to do. When you see HEAVY, Guard or kill it first.' }
    },
    ford_won: {
      text: [
        'It is fast and it is ugly. Starving men fight like starving dogs: all teeth, no wind. The water runs red for twenty yards downstream.',
        'Three of them in the river. The fourth, the youngest, is on his knees in the shallows with Tamsin\'s arrow through his forearm and his sword gone downstream. He is maybe seventeen. He looks up at you, and he is not afraid of dying so much as he is ashamed of how much he wants not to.',
        '@narrator: "Please. Please, I\'m Wat, I\'m from Hobb\'s End, my mam—"'
      ],
      choices: [
        { t: 'Let him go. "Burn the tabard. Find honest work. If I see you on this road again, I won\'t ask your name."', go: 'ford_spare', fx: { set: { e1_spared_wat: 1 }, know: { cast: ['wat'] } } },
        { t: 'Kill him. Men who rob wagons once rob wagons twice.', go: 'ford_kill' },
        { t: 'Look at Tamsin. Let her decide.', go: 'ford_tam_decides' }
      ]
    },
    ford_tam_decides: {
      text: [
        'She looks at you, surprised, and then at the boy.',
        '@tamsin: "Go home, Wat from Hobb\'s End."',
        'She snaps the arrow-shaft and pulls it through his arm in one motion. He screams. She ties the wound with a strip of her own shirt.',
        '@tamsin: "There. Now you\'ve got a story." She turns to you. "Don\'t do that again. Don\'t make me hold it."'
      ],
      fx: { set: { e1_spared_wat: 1 }, know: { cast: ['wat'] } },
      next: 'ford_end'
    },
    ford_spare: {
      text: [
        'He runs. Falls in the river, gets up, runs.',
        'Tamsin watches him go, then looks at you sidelong.',
        '@tamsin: "Soft."',
        '@ansel: "Tired."',
        '@tamsin: "Mm." But she says it the way people say *yes*.'
      ],
      next: 'ford_end'
    },
    ford_kill: {
      text: [
        'It\'s quick. You know how to make it quick. That\'s the worst thing you know.',
        'Tamsin says nothing at all for two miles. When she does speak, it\'s to Odo, about the mules.'
      ],
      fx: { set: { e1_killed_wat: 1 }, bond: { tamsin: -1 } },
      next: 'ford_end'
    },
    ford_wat: {
      text: [
        '@ansel: "Put it down, son."',
        'He drops the sword in the water like it\'s burned him.',
        '@narrator: "I\'m Wat," he says, as if that explains anything. "Hobb\'s End. I just— they said there\'d be food."'
      ],
      choices: [
        { t: '"Burn the tabard. Ask for work at Harrowgate castle. Tell them Sergeant Dray sent you." Give him a silver.', go: 'ford_end', fx: { set: { e1_spared_wat: 1, e1_wat_dray: 1 }, silver: -1, know: { cast: ['wat'] } } },
        { t: '"Then go and find some. Not on this road."', go: 'ford_end', fx: { set: { e1_spared_wat: 1 }, know: { cast: ['wat'] } } }
      ]
    },
    ford_end: {
      text: [
        'You cross the ford. The mules complain. On the far bank you look back once and the alders are empty, as if nothing happened there, which, in this country, is roughly true.'
      ],
      next: 'ashby1'
    },

    ashby1: {
      loc: 'Ashby — late afternoon, rain',
      text: [
        'Ashby is a village of forty houses around a well, two miles off the road. Odo wants to go around it. You need water for the mules.',
        'It is very quiet.',
        'There are people in the square. Thirty or more: men, women, two children, an old woman in a shawl. They are standing in the rain. Not sheltering. Not talking. Just standing, facing different ways, the way cattle stand in a field.',
        'Their eyes are open. Rain runs into them, and they don\'t blink.',
        '@odo: "Saints and lamps. Saints and *lamps*. Turn the wagon. Turn the wagon *round*—"',
        '@tamsin: "Quiet." Her voice has gone very flat. "Don\'t startle them."'
      ],
      fx: { know: { codex: ['hollowing'], beast: ['hollowed'] }, quest: { id: 'e1_hollow', title: 'The Emptied', state: 'active', note: 'At Ashby, a whole village standing in the rain. Breathing. Empty.' } },
      choices: [
        { t: 'Walk among them. Look closely.', go: 'ashby_look' },
        { t: 'Check the houses.', go: 'ashby_houses' },
        { t: 'Go to the well for water and get out.', go: 'ashby_well' }
      ]
    },
    ashby_look: {
      text: [
        'You walk slowly among them. A man in a smith\'s apron, burn-scars on his forearms, smelling of the forge. A girl of ten with a doll hanging from her hand by one leg. The old woman\'s lips are moving, very slightly, as if she has forgotten everything but the shape of a prayer.',
        'You wave a hand in front of the smith\'s eyes. Nothing. You put two fingers to his throat: a strong, slow pulse. He is warm. Someone has been feeding him: there are crumbs in his beard.',
        'He turns his head, slowly, and looks at you. Not at you. Through you. As if you were a window and there was something interesting on the far side.',
        '> Everybody looks at you like that, these days. Usually they have the decency to be drunk.'
      ],
      choices: [
        { t: 'Check the houses.', go: 'ashby_houses', once: true },
        { t: 'Go to the well.', go: 'ashby_well' }
      ]
    },
    ashby_houses: {
      text: [
        'The doors are open. Fires out, pots cold. In one house, a table laid for supper, the bread gone green.',
        'Painted on the lintel of every door, in white chalk, a seven-pointed star in a circle. The Lamp\'s tithe-mark: the sign a Lamplighter makes when a household has paid its tithe-silver. You\'ve seen a thousand of them.',
        'You\'ve never seen one drawn on the *inside* of a door before.',
        'On the windowsill, a stub of the chalk itself, blessed and stamped with the Lanternhold seal. You pocket it without quite knowing why.'
      ],
      fx: { give: { tithe_chalk: 1 }, set: { e1_chalk: 1 }, quest: { id: 'e1_hollow', note: 'Every door in Ashby carries a Lamp tithe-mark, chalked on the inside.' } },
      choices: [
        { t: 'Go to the well.', go: 'ashby_well' }
      ]
    },
    ashby_well: {
      text: [
        'The rope is wet and good. You haul up the bucket and fill Odo\'s cask while the mules drink.',
        'Then you look up.',
        'On the far side of the well, under the dripping eaves of the smithy, a man is standing. Tall. A rain-dark coat. A wide hat. Something under his arm, held flat like a book.',
        'He is looking at the villagers the way a farmer looks at a field after harvest.',
        'You blink rain out of your eyes, and he is not there.',
        'Your left palm is burning inside the glove.'
      ],
      fx: { set: { e1_saw_grey: 1 }, know: { codex: ['tallyman'] } },
      choices: [
        { t: '"Tamsin. Did you see that? Under the eaves."', go: 'ashby_ask' },
        { t: 'Say nothing. You know what men who see things become.', go: 'ashby_choice' }
      ]
    },
    ashby_ask: {
      text: [
        'She looks. There\'s nothing there but rain.',
        '@tamsin: "See what?"',
        '@ansel: "A man. Tall. Grey coat."',
        'She looks at you for a beat too long. Not like you\'re mad. Like she\'s putting something away carefully, in a box, to think about later.',
        '@tamsin: "No, Sergeant. Just them."'
      ],
      next: 'ashby_choice'
    },
    ashby_choice: {
      text: [
        'Odo is already back on the wagon, white as lard.',
        '@odo: "The Lanternhold will send for them. That\'s what they do. Lamplighters come with carts, and the Abbess takes them in. There\'s nothing *we* can do."',
        'The girl with the doll has turned to face you. Her lips are cracked. Somebody stopped feeding her, a day or two ago, and she has not had the wit to find food.',
        'They will stand here until they starve, or the wolves come, or the carts do.'
      ],
      choices: [
        { t: 'Lead them. Walk them down the road toward Harrowgate. It\'ll slow the wagon to a crawl.', go: 'ashby_lead' },
        { t: 'Give them mercy. Quick, one by one. You\'ve done worse for less reason.', go: 'ashby_mercy' },
        { t: 'Leave them. Get the water and go. They\'re past help.', go: 'ashby_leave' }
      ]
    },
    ashby_lead: {
      text: [
        'It takes an hour to learn how. They don\'t respond to voices. They do respond to a hand on the arm, a gentle pull, the way you\'d lead a blind horse. And once one is walking, the others follow, slowly, like sheep after the bellwether.',
        'Odo screams himself hoarse about time. Tamsin walks at the back of the line with the little girl\'s hand in hers. The girl doesn\'t hold back. She doesn\'t let go, either.',
        'Thirty-one empty people walk down the Kingsroad behind a cloth wagon in the rain.'
      ],
      fx: { set: { e1_ashby: 'led' }, rep: { town: 1 }, quest: { id: 'e1_hollow', note: 'You led thirty-one of the Emptied of Ashby toward Harrowgate.' } },
      next: 'camp1'
    },
    ashby_mercy: {
      text: [
        'Tamsin catches your arm.',
        '@tamsin: "Sergeant—"',
        '@ansel: "Look at them. Look at the girl. Nobody\'s coming. Or worse, somebody is."',
        'She lets go.',
        'You start with the smith, because he\'s the biggest, and because he\'s the one who looked through you. You put your hand on his shoulder, almost kindly, and Widow under his ribs.',
        'He doesn\'t cry out. But the moment the steel goes in, every head in the square turns to you at once. Thirty pairs of open eyes. And then, without a sound, they come.'
      ],
      fx: { set: { e1_ashby: 'mercy' }, rep: { lamp: -1 } },
      next: 'ashby_fight'
    },
    ashby_fight: {
      fight: { foes: ['hollowed', 'hollowed', 'hollowed'], title: 'The Square at Ashby', win: 'ashby_mercy2',
        intro: 'They make no sound at all. Not even when they die.' }
    },
    ashby_mercy2: {
      text: [
        'When it\'s done, you are standing in the square in the rain with Widow in your hand and blood to the elbow, and the others are still coming, slowly, unarmed, mouths open, and you keep going because to stop now would make it murder instead of mercy, and you are not sure there is any difference.',
        'It takes a long time. Tamsin helps, with her knife, after the first ten. She doesn\'t look at you while she does it.',
        'The little girl is last. She doesn\'t come at you. She just stands there with her doll.',
        'Afterward, Tamsin goes behind the smithy and is sick, and comes back, and wipes her mouth, and says:',
        '@tamsin: "Do we burn them? Or bury them?" A pause, carefully casual. "Fen-folk would bury them."'
      ],
      choices: [
        { t: '"Burn them. That\'s the law."', go: 'camp1', fx: { rep: { lamp: 1 }, set: { e1_ashby_rite: 'burned' } } },
        { t: '"Bury them. Quickly. Nobody needs to know."', go: 'camp1', fx: { rep: { fen: 1 }, set: { e1_ashby_rite: 'buried' }, quiet: true, know: { codex: ['earthburial'] } } },
        { t: '"Neither. We\'re out of time."', go: 'camp1', fx: { set: { e1_ashby_rite: 'left' } } }
      ]
    },
    ashby_leave: {
      text: [
        'You fill the cask. You get back on Ox. As the wagon rolls out of the square, the girl with the doll turns, slowly, to watch you go.',
        'Tamsin walks beside the wagon and does not look back. Her jaw is tight.',
        '@tamsin: "There\'s nothing we could have done."',
        'You can\'t tell which of you she\'s saying it to.'
      ],
      fx: { set: { e1_ashby: 'left' }, quest: { id: 'e1_hollow', note: 'You left the Emptied of Ashby standing in the rain.' } },
      next: 'camp1'
    },

    /* ======================= NIGHT ======================= */
    camp1: {
      loc: 'A shepherd\'s fold on the downs — night',
      text: [
        { if: "f.e1_ashby==='led'", t: 'You make camp in a drystone sheepfold off the road, with the thirty-one sitting in rows against the wall where you put them, like children at chapel. They don\'t sleep. You check. They just sit, eyes open, and the firelight moves in them.' },
        { if: "f.e1_ashby!=='led'", t: 'You make camp in a drystone sheepfold off the road. Odo eats three suppers and falls asleep inside the wagon among his cloth, snoring like a sow.' },
        'The rain stops. The clouds tear open. The stars come out.',
        'You get up from the fire without a word and take your blanket under the wagon, where the boards hide the sky.',
        'Tamsin watches you go. A while later she crawls under too, with her bow and a skin of something, and sits cross-legged with her back to the wheel.',
        '@tamsin: "First watch is mine. You can sleep. Or you can talk."'
      ],
      choices: [
        { t: '"Why does it matter to you what I do?"', go: 'camp_why' },
        { t: '"You first. Tell me something true."', go: 'camp_true' },
        { t: 'Roll over and pretend to sleep.', go: 'camp_pretend' }
      ]
    },
    camp_why: {
      text: [
        '@tamsin: "It doesn\'t." She drinks. "But you sleep under a cart like a dog in a thunderstorm, and you won\'t look up, and you carry that case everywhere like it\'s full of gold. I told you. I notice things."',
        'The case. Waxed leather, cracked at the corners, tied with a sergeant\'s cord. It\'s under your head now, as a pillow. It\'s always under your head.',
        '@tamsin: "What\'s in it?"'
      ],
      next: 'camp_case'
    },
    camp_true: {
      text: [
        'She thinks about it longer than you expected.',
        '@tamsin: "My mam was burned by the Lamp when I was nine. For putting my baby brother in the ground instead of on a pyre. He was born dead. She just wanted him... somewhere soft." She says it to the wheel-spokes, very evenly, as if she has practised. "They made me watch. They make the children watch. So we learn."',
        'You don\'t say you\'re sorry. She would hate it. You can see she would hate it.',
        '@tamsin: "Your turn. What\'s in the case?"'
      ],
      fx: { set: { e1_tam_mother: 1 } },
      next: 'camp_case'
    },
    camp_pretend: {
      text: [
        'You roll over. You breathe slow.',
        'After a while she says, very quietly, to no one:',
        '@tamsin: "You\'re a terrible liar, Sergeant."',
        'Then she starts humming. The eel and the heron. Under her breath, all eleven verses. You fall asleep somewhere around the eighth. You still dream about the river, but you come up out of it sooner than usual, and she is still humming.'
      ],
      next: 'crow1'
    },
    camp_case: {
      choices: [
        { t: 'Open it. Show her the roll. Four hundred names, in your hand.', go: 'camp_roll' },
        { t: '"Debts."', go: 'camp_debts' }
      ]
    },
    camp_roll: {
      text: [
        'You untie the cord. Inside, wrapped in oilcloth, a long scroll of cheap paper pasted end to end, and on it, in your sergeant\'s square careful hand, names. The captain\'s at the head, where a company roll puts it. Then the dead. Four hundred and six lines. Rank, home, the date.',
        '@ansel: "The Red Company. Corran\'s Ford. I wrote them down the morning after. Before I forgot any."',
        'She can\'t read. You realise it from the way she looks at the page: like a picture, not like words. She runs a fingertip down the column, very lightly, as if the ink might still be wet.',
        '@tamsin: "Which one\'s you?"',
        '@ansel: "I\'m not on it. I didn\'t die."',
        'You don\'t tell her about the first line. The first line is a different matter.',
        'She looks at you a long time.',
        '@tamsin: "Didn\'t you?"',
        'Before you can answer, she rolls the scroll up again, carefully, the way you do it, and ties the knot, and hands it back.'
      ],
      fx: { set: { e1_told_tam_roll: 1 }, bond: { tamsin: 1 } },
      next: 'crow1'
    },
    camp_debts: {
      text: [
        '@tamsin: "Must be a lot of them."',
        '@ansel: "Four hundred and six."',
        'She doesn\'t ask anything else. She just nods, as if that\'s a perfectly reasonable number of debts for a man to carry in a box under his head, and passes you the skin. It\'s blackberry wine, sour and strong.'
      ],
      next: 'crow1'
    },
    crow1: {
      loc: 'The sheepfold — the dead of night',
      text: [
        'You wake. You don\'t know why. The fire is down to coals.',
        'Tamsin isn\'t under the wagon.'
      ],
      choices: [
        { t: 'Lie still. Listen. Look.', check: { stat: 'wits', dc: 13, pass: 'crow_seen', fail: 'crow_missed' } },
        { t: 'Get up and look for her.', go: 'crow_missed' }
      ]
    },
    crow_seen: {
      text: [
        'There. At the edge of the firelight, by the wall. She is crouched with a crow on her wrist, a big one, glossy, absolutely calm. She is tying something to its leg: a twist of hair, a knot of red thread. She whispers to it. You can\'t hear what.',
        'The crow goes up into the dark without a sound.',
        'She stands a while looking after it. Then she comes back to the wagon and crawls under and lies down, a careful arm\'s length from you, and you keep your breathing slow.',
        '> Fen-folk and their crows. Talking to her gran, maybe. Everybody has someone.',
        '> Almost everybody.'
      ],
      fx: { set: { e1_saw_crow: 1 } },
      next: 'ghoul1'
    },
    crow_missed: {
      text: [
        'You sit up, and she\'s there, coming back from the wall, lacing her breeches.',
        '@tamsin: "Even thieves have to piss, Sergeant. Go back to sleep."',
        'You lie back down. The night is very quiet. Too quiet, the way the treeline at the ford was quiet.'
      ],
      next: 'ghoul1'
    },
    ghoul1: {
      text: [
        'Then the mules start screaming.',
        { if: "f.e1_ashby==='led'", t: 'Against the wall, the thirty-one Emptied have all turned their heads the same way. Toward the dark beyond the fold. As if listening.' },
        'Odo, half asleep, blunders out of the back of the wagon with his breeches round his knees.',
        '@odo: "What— what is it, is it wolves, is it—"',
        'Something long and grey comes over the wall behind him on all fours, faster than anything that size should move, and takes him by the head.',
        'He has time for one scream. It is a very high scream for such a large man. Then he is over the wall and gone into the dark, and the scream goes with him, getting further away, and then it stops.'
      ],
      choices: [
        { t: 'Go over the wall after him. Now.', go: 'ghoul_chase' },
        { t: '"Tamsin, on me. Hold the wagon." There\'s more than one. There\'s always more than one.', go: 'ghoul_hold' }
      ]
    },
    ghoul_chase: {
      text: [
        'You\'re over the wall with Widow out and Tamsin swearing behind you. Twenty yards into the gorse, you find him.',
        'You find most of him.',
        'There are three of them crouched over the body: long, grey, hairless, their skin wet like the inside of a mushroom. No eyes. Just smooth skin where the eyes should be, and under it, mouths that open sideways. One has Odo\'s arm and is cracking it, carefully, at the elbow, to get at the marrow. They are making a sound like contented pigeons.',
        'They turn their blind faces up toward you, together.'
      ],
      fx: { set: { e1_chased: 1 } },
      next: 'ghoul_fight1'
    },
    ghoul_hold: {
      text: [
        'You put your back to the wagon. Tamsin is up on the box with an arrow nocked. The mules are going mad in the traces.',
        'Out in the dark, Odo has stopped screaming. Now there is another sound, a wet cracking sound, and a cooing like pigeons.',
        'Then they come over the wall: long, grey, hairless, skin wet like the inside of a mushroom. No eyes. Mouths that open sideways. They come for the warm ones next.'
      ],
      next: 'ghoul_fight1'
    },
    ghoul_fight1: {
      fight: { foes: ['ghoul', 'ghoul'], title: 'The Sheepfold', win: 'ghoul_brute1',
        intro: 'Ghouls fear fire. If one turns to feed, kill it before it heals.' }
    },
    ghoul_brute1: {
      text: [
        'The second one dies with Tamsin\'s arrow in its open mouth and your sword in its back. You stand there blowing like a horse.',
        'Then the ground shakes.',
        'She comes out of the dark slowly, because she doesn\'t need to hurry. Bigger than an ox, belly swinging low, breasts like empty sacks, the same blind smooth face but wider, much wider, and when she opens her mouth sideways it goes all the way back to where her ears should be.',
        'She lifts her head and sings. A long, wavering note with no music in it.',
        { if: "f.e1_ashby==='led'", t: 'Against the wall, the Emptied of Ashby sit and listen to her song with mild, polite interest, the way you\'d listen to a fiddler at a fair.' },
        '@tamsin: "Mothers below," Tamsin breathes. "That\'s the mother."'
      ],
      next: 'ghoul_fight2'
    },
    ghoul_fight2: {
      fight: { foes: ['ghoul_brute'], title: 'The Matriarch', win: 'ghoul_after',
        intro: 'She will try to crush you. Watch her arms.' }
    },
    ghoul_after: {
      text: [
        'She dies hard. When it\'s done she lies in the sheepfold like a capsized boat, and the stink of her is like a cellar where something has drowned.',
        'Your hands are shaking again. Not from the drink.',
        'Tamsin comes down off the wagon. She walks over to the dead matriarch and does something strange: she crouches, and touches its blind face, and whispers.',
        'Then she goes over the wall and comes back a while later with what\'s left of Odo Pettibone in a wool blanket from his own stock. Madder red. It hides the worst of it.'
      ],
      fx: { quest: { id: 'e1_wagon', state: 'failed', note: 'Ghouls took Odo Pettibone in the night on the downs.' }, know: { codex: ['kindling'] } },
      choices: [
        { t: '"What did you say to it?"', go: 'odo_ask' },
        { t: 'Deal with Odo.', go: 'odo_rite' }
      ]
    },
    odo_ask: {
      text: [
        '@tamsin: "Old words. My gran\'s." She doesn\'t look up. "They\'re not wicked, you know. Ghouls. In the fen we call them gleaners. They eat the dead nobody burned. The Lamp says that damns them. Gran says it sends them down where it\'s warm." A breath. "It\'s just something you say. Like *bless you*."',
        'She wipes her hand on her thigh, hard, as if something won\'t come off.'
      ],
      fx: { set: { e1_asked_gleaners: 1 } },
      next: 'odo_rite'
    },
    odo_rite: {
      text: [
        'Odo Pettibone. Cloth. He owed money to half the March and he talked too much and he made the sign of the star over his belly when he was frightened. He paid you in advance. That\'s more than most.',
        '@tamsin: "Well, Sergeant? Pyre, or ground? Or leave him for the gleaners. They\'ll be back."'
      ],
      choices: [
        { t: 'Build him a pyre. He was a Lamp man. Let him go up.', go: 'odo_pyre', fx: { set: { e1_odo: 'pyre' }, rep: { lamp: 1 } } },
        { t: 'Dig him a grave in the gorse. Quietly. He\'s past caring about the law.', go: 'odo_grave', fx: { set: { e1_odo: 'grave' }, rep: { fen: 1 }, know: { codex: ['earthburial'] } } },
        { t: 'Leave him. The living have a long walk tomorrow.', go: 'odo_leave', fx: { set: { e1_odo: 'left' } } }
      ]
    },
    odo_pyre: {
      text: [
        'You burn him on a pyre of gorse and sheepfold timbers and lamp oil from the wagon. It takes most of the night. Fat men burn well and slowly, which is a thing you know and wish you didn\'t.',
        'You watch the smoke go up toward the stars. You can\'t help it. You watch it all the way up.',
        'Tamsin sits with her back to the fire and doesn\'t watch at all.'
      ],
      next: 'dawn1'
    },
    odo_grave: {
      text: [
        'The ground is soft. You dig with a spade from the wagon until the hole is deep enough to keep the gleaners off, and you put him in it wrapped in madder red, and fill it in, and Tamsin presses the turf back down with her hands as neatly as a seamstress.',
        'She says something over it. Old words again. *Go down easy.*',
        'You feel it under your feet. You will swear later that you imagined it: the faintest warmth, coming up through the earth, like the ground had let out a breath.'
      ],
      fx: { set: { e1_felt_earth: 1 } },
      next: 'dawn1'
    },
    odo_leave: {
      text: [
        'You put the blanket back over his face and leave him in the fold.',
        'Before dawn, you hear them come back for him: the soft cooing, the wet sounds, very gentle. Tamsin lies under the wagon with her eyes open, listening, and you can\'t tell from her face if she is grieving or relieved.'
      ],
      next: 'dawn1'
    },

    /* ======================= ACT THREE: HARROWGATE ======================= */
    dawn1: {
      loc: 'The Kingsroad — dawn',
      text: [
        'You drive the wagon yourself, Ox tied behind and furious about it. Tamsin sits beside you on the box with her feet up.',
        '@tamsin: "So. Whose cloth is it now?"',
        '@ansel: "Odo\'s creditors\'."',
        '@tamsin: "Odo\'s creditors aren\'t here. We are." She lets that sit. "Two hundred silver of Corvane wool, easy. More. Nobody in Harrowgate knows what he was carrying."'
      ],
      choices: [
        { t: '"We deliver it. He had a factor in Harrowgate. They get it."', go: 'dawn_honest', fx: { set: { e1_cloth: 'deliver' } } },
        { t: '"We sell it. Quietly. Split it."', go: 'dawn_sell', fx: { set: { e1_cloth: 'sell' } } },
        { t: '"We decide when we get there."', go: 'dawn_undecided', fx: { set: { e1_cloth: 'undecided' } } }
      ]
    },
    dawn_honest: {
      text: [
        '@tamsin: "Honest man. Saints." She sounds disgusted. She also, very briefly, looks pleased. "There\'ll be a reward, at least. Factors always pay a reward. It\'s cheaper than being robbed."'
      ],
      next: 'gate1'
    },
    dawn_sell: {
      text: [
        '@tamsin: "Now you\'re talking like a man who\'s going to live." She grins. "I know a fence on the Tanners\' Bottom. Old Joss. Cheats you by a third and keeps his mouth shut. That\'s what a third buys."'
      ],
      next: 'gate1'
    },
    dawn_undecided: {
      text: [
        '@tamsin: "Fence-sitter."',
        '@ansel: "Sergeant. We sit on fences professionally."'
      ],
      next: 'gate1'
    },
    gate1: {
      loc: 'Harrowgate — the East Gate, sunrise',
      text: [
        'Harrowgate rises out of the morning mist on its hill like something in a story: grey walls, slate roofs, smoke from a thousand chimneys, the square keep on the summit. Below the keep, the long pale bulk of the Lanternhold, its lantern-tower still burning blue in the dawn.',
        { if: "f.e1_ashby==='led'", t: 'Behind the wagon, the thirty-one walk in their silent line. People on the road stop to stare. A woman draws the star over her heart and hurries her children away.' },
        'Up on the wall-walk above the gate, a young woman stands alone in a grey cloak with a ledger open on the parapet. Tall. Dark hair pinned up anyhow, as if she did it herself in the dark. Her pen moves each time a cart passes under the arch: a turnip cart, a drover\'s float, a priest on a mule. She is counting the road.',
        'She counts your wagon. Then her eyes go to the long claw-marks down the canvas, and the pen stops.',
        { if: "f.e1_ashby==='led'", t: 'When the thirty-one come up behind you, she writes one stroke for each of them. Then she lays the pen down on the parapet and does not pick it up again.' },
        'She looks at you. She doesn\'t look away when you look back.'
      ],
      fx: { set: { e1_isolde_glimpse: 1 } },
      choices: [
        { t: 'Give her a sergeant\'s nod. The one you\'d give an officer on a wall.', go: 'gate1b', fx: { set: { e1_isolde_look: 'nod' } } },
        { t: 'Look away first. She\'s a lady and you smell like a ghoul pit.', go: 'gate1b', fx: { set: { e1_isolde_look: 'away' } } },
        { t: 'Hold her eye.', go: 'gate1b', fx: { set: { e1_isolde_look: 'held' } } }
      ]
    },
    gate1b: {
      text: [
        { if: "f.e1_isolde_look==='nod'", t: 'After a moment she inclines her head, by exactly the same amount, and writes something down that is not a cart.' },
        { if: "f.e1_isolde_look==='away'", t: 'You look at the gate instead. When you look back she is writing again, and you have the distinct feeling you have just been entered in a column.' },
        { if: "f.e1_isolde_look==='held'", t: 'You hold it. So does she. It goes on until it stops being a look and becomes a contest, and neither of you knows how to end it. In the end the pen does it for her: she looks down to write.' },
        'A gate sergeant steps out from under the arch, following your eyes up the wall.',
        '@moll: "Don\'t mind her ladyship. She counts the carts. Every cart, every morning. Tolls, she says." He doesn\'t sound as if he believes that\'s all it is. "Hold there. Whose wagon is this? That\'s Pettibone\'s mark."'
      ],
      fx: { know: { cast: ['moll'] } },
      choices: [
        { t: 'Tell him the truth. Ghouls on the downs. Pettibone\'s dead.', go: 'gate_truth' },
        { t: '"Pettibone hired us. He\'s dead. Bandits." (Simpler.)', go: 'gate_lie' }
      ]
    },
    gate_truth: {
      text: [
        'Sergeant Moll is fifty, grey-moustached, built like a water barrel, with an honest, heavy face. He listens. When you say *ghouls* he doesn\'t laugh.',
        '@moll: "Third time this month. They\'re bold this year. Hungry." He looks past you at the wagon. ',
        { if: "f.e1_ashby==='led'", t: '@moll: "And *them*? Saints. Ashby folk? Right. Right. I\'ll send to the Lanternhold. The Abbess will take them. She takes them all." He says it like a man repeating a comfort he\'s stopped believing.' },
        '@moll: "A merchant dead on the King\'s road. The Marshal will want to hear it himself. Wait here."'
      ],
      fx: { rep: { town: 1 } },
      next: 'gate2'
    },
    gate_lie: {
      text: [
        'Sergeant Moll is fifty, grey-moustached, built like a water barrel, with an honest, heavy face. He looks at the long grey claw-marks across the wagon\'s canvas. He looks at you.',
        '@moll: "Bandits."',
        '@ansel: "Bandits."',
        '@moll: "Bandits with *claws*." He sighs. "Fine. A merchant dead on the King\'s road. The Marshal will want to hear it himself. Wait here."'
      ],
      next: 'gate2'
    },
    gate2: {
      text: [
        'You wait. Tamsin sits on the wagon box and eats one of Odo\'s apples. The sun comes up properly. The bells of the Lanternhold ring for the morning Lamp.',
        'Then hooves on the cobbles, a grey horse, and a man swinging down from it with the easy grace of somebody who has been doing it his whole life.',
        'Older. Heavier in the shoulders. A neat grey beard where there wasn\'t one. A good blue cloak with the Varane boar on the clasp, and a beautiful Corvane sword at his hip.',
        'Konrad Hask.',
        'He sees you. He stops.',
        'And then, slowly, his whole face opens up with something that looks so much like joy that it is almost the worst thing that has ever happened to you.'
      ],
      fx: { know: { cast: ['hask'] } },
      next: 'hask1'
    },
    hask1: {
      text: [
        '@hask: "Sergeant Dray."',
        'He laughs. He actually laughs, and spreads his hands.',
        '@hask: "Ansel Dray, by all the Saints and lamps. You\'re dead. I\'ve been drinking to you every Saint Corran\'s day for six years. You\'re *dead*."',
        'Your hand is on Widow\'s hilt. You don\'t remember putting it there. Behind Hask, Sergeant Moll has noticed, and so have the two spearmen at the gate.',
        'Hask has noticed too. He doesn\'t stop smiling.',
        '@hask: "You\'ve got questions. Of course you have. And I\'ve got answers, and you won\'t like them, and we\'ll have a drink and you can hit me if you like. Not here. Not in front of the lads."',
        'Tamsin has gone very still on the wagon box. Her hand has drifted to her bow.'
      ],
      choices: [
        { t: 'Take your hand off the sword. Swallow it. Not here. Not yet.', go: 'hask_swallow', fx: { set: { e1_hask_meeting: 'swallowed' } } },
        { t: 'Spit at his feet. "Four hundred and six, Captain. I wrote them all down."', go: 'hask_spit', fx: { set: { e1_hask_meeting: 'spat' } } },
        { t: 'Draw.', go: 'hask_draw', fx: { set: { e1_hask_meeting: 'drew' } } }
      ]
    },
    hask_swallow: {
      text: [
        'It is the hardest thing you have done in six years. Harder than the morning at the ford. You take your hand off the hilt one finger at a time.',
        'Hask watches it happen. Something like respect, or relief, or appetite, goes over his face.',
        '@hask: "Good man. You always were the clever one. Clever enough to know when." He claps you on the shoulder. You let him. "Come and see me at the Keep, when you\'ve slept. I\'ve work for a man like you. Good work. Good money."'
      ],
      fx: { rep: { varane: 1 } },
      next: 'hask_after'
    },
    hask_spit: {
      text: [
        'It lands on his good boot. The spearmen bristle. Hask lifts a hand and they stop.',
        'He looks down at the spit for a long moment. When he looks up, the smile is still there, but something underneath it has moved, like a fish under ice.',
        '@hask: "Four hundred and six. You always did keep the roll." Softly. "I kept my own count, Ansel. Different numbers. One day I\'ll show you." He wipes his boot on the cobbles. "Come to the Keep when you\'ve slept. I\'ve work for you. You\'ll take it, because you\'re broke and because you want to be near me. Both good reasons."'
      ],
      fx: { rep: { town: 1 } },
      next: 'hask_after'
    },
    hask_draw: {
      text: [
        'Widow comes out with that old sound, like a breath.',
        'Three spears are at your throat before it clears the scabbard. Moll\'s is the closest, and his eyes say he really, truly doesn\'t want to.',
        'Hask hasn\'t moved. He hasn\'t touched his own sword.',
        '@hask: "There he is." Almost tenderly. "There\'s my sergeant."',
        'He nods to Moll. The spears go up. He steps close enough that you could still do it, if you were fast, and he knows you won\'t, and you hate that he\'s right.',
        '@hask: "Not today, Ansel. You\'re tired and you\'re drunk and you\'d lose, and then I\'d have to hang you, and I\'d feel terrible. Come to the Keep when you\'ve slept. I\'ve work for you."'
      ],
      fx: { rep: { town: 2, varane: -1 } },
      next: 'hask_after'
    },
    hask_after: {
      text: [
        'He looks past you at the wagon, then at Tamsin, and gives her a little bow, courtly, amused.',
        '@hask: "Miss."',
        'She doesn\'t answer. He mounts and rides up the hill toward the Keep, and the morning crowd parts for him, and people call out his name. They like him. They like him very much.',
        '@moll: "...You knew the Marshal, then," says Moll eventually.',
        '@ansel: "No," you say. "I don\'t think I ever did."'
      ],
      fx: { quest: [{ id: 'hask', title: 'The Captain', state: 'active', note: 'Konrad Hask, who sold the Red Company at Corran\'s Ford, is alive. He is Marshal of Harrowgate. He offered you work.' }, { id: 'e1_wagon', note: 'You brought the wagon into Harrowgate without its owner.' }] },
      next: 'hask_route'
    },
    hask_route: {
      route: [
        { if: "f.e1_ashby==='led'", go: 'gate_ashby' },
        { go: 'cloth' }
      ]
    },
    gate_ashby: {
      text: [
        'Before you go through the gate, two Lamplighters come down from the Lanternhold with a handcart and a basket of bread. Young men in grey with white stars on their breasts, gentle-voiced. They lead the Emptied of Ashby away up the hill one by one, by the hand, exactly the way you learned to.',
        'The little girl with the doll goes last. She doesn\'t look back. Of course she doesn\'t.',
        '@tamsin: "Well," says Tamsin. "That\'s them seen to." Her voice is wrong.'
      ],
      fx: { quest: { id: 'e1_hollow', note: 'The Lamplighters took the Emptied of Ashby up to the Lanternhold.' } },
      next: 'cloth'
    },
    cloth: {
      loc: 'Harrowgate — the Market Stair, morning',
      route: [
        { if: "f.e1_cloth==='undecided'", go: 'cloth_decide' },
        { if: "f.e1_cloth==='deliver'", go: 'cloth_deliver' },
        { go: 'cloth_sell' }
      ]
    },
    cloth_decide: {
      text: [
        'Odo\'s factor is a narrow house on the Market Stair with *PETTIBONE & DAUGHTERS* on a sign. Old Joss the fence has a shed on the Tanners\' Bottom with no sign at all.',
        '@tamsin: "Well, fence-sitter? Get off the fence."'
      ],
      choices: [
        { t: 'The factor\'s. Odo\'s daughters should have their father\'s cloth.', go: 'cloth_deliver', fx: { set: { e1_cloth: 'deliver' } } },
        { t: 'Old Joss. The dead don\'t pay, and they don\'t collect either.', go: 'cloth_sell', fx: { set: { e1_cloth: 'sell' } } }
      ]
    },
    cloth_deliver: {
      text: [
        'PETTIBONE & DAUGHTERS turns out to be exactly that: two daughters, plump and fierce and red-eyed, who take the news in the doorway and the wagon into the yard. The younger one holds onto the madder-red bolt for a long time.',
        'The elder counts out a reward without being asked. She gives you the balance of what Odo owed you, too, to the penny, and then she gives Tamsin an apple from the barrel, and Tamsin, astonishingly, blushes.',
        '@narrator: "He talked about you," says the elder daughter, "in his letter. He said he\'d hired a sergeant who smelled like a still, and he felt safer than he had in years."'
      ],
      fx: { silver: 35, rep: { town: 2 }, quest: { id: 'e1_wagon', state: 'done', note: 'You delivered the cloth to Odo\'s daughters.' } },
      next: 'hen1'
    },
    cloth_sell: {
      text: [
        'Old Joss is a little man with no teeth and a lot of rings who goes through the bolts like a priest counting sins. He offers sixty. Tamsin says a word in fen-talk that makes him flinch, and he offers a hundred and ten.',
        'Split two ways, it\'s more silver than you\'ve held in a year.',
        'You don\'t feel as good about it as you expected. Then you have a drink, and you do.'
      ],
      fx: { silver: 55, quest: { id: 'e1_wagon', state: 'done', note: 'You sold Odo\'s cloth to a fence on the Tanners\' Bottom.' } },
      next: 'hen1'
    },
    hen1: {
      loc: 'The Gutted Hen — noon',
      text: [
        'The Gutted Hen is a long low tavern on the Tanners\' Bottom with a sign showing a hen, split and roasted, looking surprisingly cheerful about it. It smells of beer and woodsmoke and, faintly, of the tanneries. The lime-stink, the stink of your childhood. Your stomach turns over.',
        'Behind the bar stands a big woman of forty with grey-shot auburn hair tied up in a cloth, sleeves rolled over forearms like a smith\'s. She looks at you, then at Tamsin, then back at you.',
        '@mags: "Mags Halloran. It\'s my Hen. You\'ll be wanting a room."',
        '@ansel: "Two."',
        '@mags: "Two." A slight lift of the eyebrow, filed away. "Five a night each, with supper, and the supper\'s good. Bath\'s extra. Fight in my common room and I\'ll put you through the window, and it\'s a long way down to the tannery pits."'
      ],
      fx: { know: { cast: ['mags'] }, silver: -5 },
      choices: [
        { t: '"You\'ve done that before."', go: 'hen_mags1' },
        { t: '"What do you know about the Marshal?"', go: 'hen_mags2' },
        { t: 'Pay. Go up. Sleep.', go: 'hen_room' }
      ]
    },
    hen_mags1: {
      text: [
        '@mags: "Twice. One of them was my second husband." She hands you a key on a loop of leather. "He survived. The marriage didn\'t."',
        'She laughs at your face. It\'s a big laugh, the kind that fills a room, and three drinkers by the fire laugh along without knowing why.'
      ],
      next: 'hen_room'
    },
    hen_mags2: {
      text: [
        'Her face does something careful.',
        '@mags: "Ser Konrad? He drinks here, sometimes. Pays for the whole room. Hangs bandits, keeps the roads clear, gave my pot-boy a silver for his mam\'s funeral." She wipes a mug that doesn\'t need wiping. "Everybody loves the Marshal."',
        '@ansel: "Do you?"',
        '@mags: "I\'ve buried a husband and a son, love. I don\'t love anybody that easily." She hands you the key. "Room at the top of the stairs. Shutters stick. Mind your head."'
      ],
      fx: { set: { e1_asked_mags_hask: 1 } },
      next: 'hen_room'
    },
    hen_room: {
      loc: 'The Gutted Hen — the top room, night',
      text: [
        'You sleep through the afternoon. You wake after dark, and the first thing you do, before you light the candle, is check the shutters are closed. They stick. Mags was right.',
        'Across the narrow landing you can hear Tamsin singing to herself. The heron, again. Getting the words wrong.',
        'The singing stops. Then one knock on your door, and her voice through it, not opening it.',
        '@tamsin: "Sergeant. I\'m off to my gran\'s at first light. Few days."',
        { if: 'f.e1_told_tam_roll', t: '@tamsin: "Your names. Which one do you start at?" You tell her the second. A pause on the other side of the wood. "Huh," she says. "Start at the first one tonight." Her door closes before you can ask what she means.', else: '@tamsin: "Don\'t drink the Hen dry while I\'m gone. Mags\'ll put you through the window and I\'ll miss it."' }
      ],
      next: 'hen_bottle'
    },
    hen_bottle: {
      text: [
        'You have the candle lit and the case on your knees when Mags\'s pot-boy knocks. He has a bottle in both arms like a baby: Corvane red, the good glass, a seal of blue wax with a boar in it. Tied to the neck, a folded note in a hand you used to copy out orders in.',
        '*To the Red Company. — K.*',
        'The boy waits to see if there\'s an answer. There isn\'t one he could carry. He goes.'
      ],
      choices: [
        { t: 'Drink to them. They\'d have wanted the wine, if not the company it came from.', go: 'hen_roll', fx: { set: { e1_hask_bottle: 'drank' }, heal: 3 } },
        { t: 'Open the shutters, eyes down, and pour it out into the tannery pits. All of it.', go: 'hen_roll', fx: { set: { e1_hask_bottle: 'poured' } } },
        { t: 'Cork it. Stand it on the washstand. You\'ll open it the day he dies.', go: 'hen_roll', fx: { set: { e1_hask_bottle: 'kept' } } }
      ]
    },
    hen_roll: {
      text: [
        { if: "f.e1_hask_bottle==='drank'", t: 'It is the best wine you have tasted in six years. That is the worst thing about it.' },
        { if: "f.e1_hask_bottle==='poured'", t: 'It goes down into the dark with a sound like a man pissing off a wall. Somewhere below, a dog starts barking at the smell. You close the shutters again without once looking up.' },
        { if: "f.e1_hask_bottle==='kept'", t: 'The bottle stands on the washstand and catches the candle. It looks like a guest.' },
        'You unroll the scroll on the bed, all four hundred and six lines, the way you do on the bad nights.',
        'You always start at the second line. You have started at the second line for six years.',
        'Tonight you start at the first.',
        '*Konrad Hask, Captain. Of Corvane.*',
        'You read his name aloud, very quietly, so it\'s on the list of the dead in your own voice. Then you read all the rest.'
      ],
      next: 'final'
    },
    final: {
      loc: 'The Lanternhold — the same hour',
      text: [
        '~ CUT TO: THE LANTERNHOLD.',
        'Up the hill, beneath the blue lantern-tower, the Emptied of Harrowgate sit in rows in a long white ward, being spooned soup by orphans in grey. An old woman in a white wimple moves between the beds, touching foreheads. She smells of honey and lamp oil. She is humming.',
        { if: "f.e1_ashby==='led'", t: 'In the last bed, washed and brushed, sits the little girl from Ashby with her doll. As the old woman passes, the girl turns her head away from her, slowly, toward the window and the wet dark town below it. Toward the Tanners\' Bottom.', else: 'In the last bed, an old man who has not moved in a week turns his head, slowly, toward the window and the wet dark town below it. Toward the Tanners\' Bottom.' },
        'The old woman follows the look. She stops humming. She stands at the window with a hand in the small of her back, looking down at the lit windows of the Bottom, one by one, as if she were counting them.',
        'Then she closes the shutter, gently, and goes on to the next bed.'
      ],
      fx: { xp: 50, quest: { id: 'e1_hollow', note: 'The Emptied are kept at the Lanternhold, under the Abbess.' } },
      end: true
    },

    /* ======================= SIDE: CONTRACTS (unlocked after E1) ======================= */
    c_gibbet_1: {
      loc: 'The Kingsroad — Hangman\'s Cross',
      text: [
        'The notice is in a careful farmer\'s hand: *WOLVES at Hangman\'s Cross. Ate the hanged and now my ewes. 20 silver for the pack. Ask for Dobbin Rush.*',
        'Dobbin Rush is a stooped, sorrowful man with a fold of forty ewes and now thirty-one. He takes you to the crossroads. Three gibbets. The cages are empty except for scraps of rag and a jawbone.',
        '@narrator: "The Marshal hangs them and leaves them," says Dobbin. "Says it\'s a lesson. Wolves learned it, all right. Learned there\'s free supper at the Cross." He spits. "Now they come for mine."',
        'At dusk, they come.'
      ],
      fight: { foes: ['wolf', 'wolf', 'wolf'], title: 'Hangman\'s Cross', win: 'c_gibbet_2' }
    },
    c_gibbet_2: {
      text: [
        'The last wolf drags itself into the bracken to die. Dobbin counts out twenty silver, coin by coin, as if each one hurts.',
        'Then he looks up at the empty gibbets.',
        '@narrator: "They\'ll be back, you know. Long as he hangs men up there to rot, there\'ll be wolves. You can\'t kill hungry."'
      ],
      choices: [
        { t: 'Take down the cages. Throw them in the ditch. Let the Marshal hang his lessons somewhere else.', go: 'c_gibbet_3', fx: { set: { e1_cages_down: 1 }, rep: { town: 1, varane: -1 }, silver: 20, xp: 30 } },
        { t: 'Take the silver and go. Not your fight.', go: 'c_gibbet_4', fx: { silver: 20, xp: 20 } }
      ]
    },
    c_gibbet_3: {
      text: [
        'It takes an hour and a borrowed horse. Dobbin watches with his mouth open, then helps. When the last cage goes in the ditch, he shakes your hand with both of his.',
        'Word gets round Harrowgate by the next morning that the dead sergeant pulled down the Marshal\'s gibbets. Some people think it\'s funny. Some people don\'t.'
      ],
      end: true
    },
    c_gibbet_4: {
      text: [
        'You ride back past the gibbets in the dark. The cages swing a little in the wind, empty, waiting.'
      ],
      end: true
    },

    c_joss_1: {
      loc: 'The Tanners\' Bottom — a shed with no sign',
      text: [
        'Old Joss the fence sends a boy with a message: he has work for a man who doesn\'t ask questions. The boy is eight and says it like he\'s practised.',
        'In the shed, Joss turns his rings.',
        '@narrator: "Moneylender name of Crake. Lends to the poor at a penny on the shilling a week, and when they can\'t pay, he sends his boys. Last week his boys put a widow\'s hand in a mangle." Joss\'s face doesn\'t move. "My sister\'s hand. I want his ledger. The one with the debts in. Burn it, and half the Tanners\' Bottom walks free. Thirty silver."'
      ],
      choices: [
        { t: '"Where is he?"', go: 'c_joss_2' },
        { t: '"Forty. Mangles are extra."', check: { stat: 'presence', dc: 12, pass: 'c_joss_2b', fail: 'c_joss_2' } }
      ]
    },
    c_joss_2b: {
      text: [
        'Joss looks at you a long while, then laughs, a dry little cough of a laugh.',
        '@narrator: "Forty. And you\'ll do it nicely."'
      ],
      fx: { set: { e1_joss_forty: 1 } },
      next: 'c_joss_2'
    },
    c_joss_2: {
      loc: 'Crake\'s counting-house — night',
      text: [
        'Crake keeps a counting-house over a cooper\'s, with a lamp burning late. Two of his boys at the bottom of the stair, big lads with cudgels and the sleepy confidence of men who have only ever hit people who couldn\'t hit back.',
        'Upstairs, a scratching pen.'
      ],
      choices: [
        { t: 'Go straight through them.', go: 'c_joss_fight' },
        { t: 'Up the back. Over the cooper\'s roof, through the window.', check: { stat: 'finesse', dc: 13, pass: 'c_joss_window', fail: 'c_joss_fall' } },
        { t: '"Evening, lads. The Marshal sent me. Says you\'re to go home."', check: { stat: 'presence', dc: 14, pass: 'c_joss_bluff', fail: 'c_joss_fight' } }
      ]
    },
    c_joss_bluff: {
      text: [
        'They look at each other. They look at your sword. One of them says, "The *Marshal*?" in the voice of a man who very much does not want to be on the wrong side of the Marshal. They go home.',
        'Upstairs, Crake looks up from his ledger into your face and starts to cry.'
      ],
      next: 'c_joss_crake'
    },
    c_joss_window: {
      text: [
        'You go up the cooper\'s stack of barrels like a ladder and over the roof-ridge on your belly, and in through Crake\'s back window while he\'s still counting. He turns around with his pen in his hand and a blot spreading on the page.'
      ],
      next: 'c_joss_crake'
    },
    c_joss_fall: {
      text: [
        'The third barrel rolls. You come down in the cooper\'s yard with a noise like a bell tower falling over, and Crake\'s boys come round the corner with their cudgels.'
      ],
      fx: { hp: -4 },
      next: 'c_joss_fight'
    },
    c_joss_fight: {
      fight: { foes: ['bandit', 'bandit'], title: 'Crake\'s Boys', win: 'c_joss_crake' }
    },
    c_joss_crake: {
      text: [
        'Crake is a thin man in a good wool gown with ink on his fingers. He holds the ledger against his chest like a baby.',
        '@narrator: "Please. It\'s all I have. They *borrowed*. They signed. It\'s *lawful*—"',
        'The ledger is thick. Two hundred names, maybe more. The Tanners\' Bottom, written down, priced.'
      ],
      choices: [
        { t: 'Burn it in his own lamp. Let him watch.', go: 'c_joss_burn', fx: { rep: { town: 2 }, set: { e1_crake: 'burned' } } },
        { t: 'Burn it, and break his fingers. For the widow.', go: 'c_joss_fingers', fx: { rep: { town: 2 }, set: { e1_crake: 'broken' } } },
        { t: 'Keep the ledger. A list of who owes what in this town is worth more than Joss\'s silver.', go: 'c_joss_keep', fx: { set: { e1_crake: 'kept' } } }
      ]
    },
    c_joss_burn: {
      text: [
        'It catches slowly, then all at once. Crake makes a sound like a kicked dog. You hold the ledger until it\'s too hot to hold and drop it on his floor and watch the names curl up and go.',
        'Joss pays you without a word, and the next morning a woman with a bandaged hand leaves a pie on the Hen\'s doorstep with your name on it, spelled wrong.'
      ],
      fx: { silver: 30, xp: 40, give: { poultice: 1 } },
      next: 'c_joss_pay'
    },
    c_joss_fingers: {
      text: [
        'You burn the ledger. Then you take his right hand, the pen hand, and lay it flat on the desk.',
        'You do it the way you\'d snap kindling. One, two, three, four. He screams on the first and faints on the third.',
        'Joss pays you, and looks at you differently afterward. The next morning a woman with a bandaged hand leaves a pie on the Hen\'s doorstep with your name on it, spelled wrong.'
      ],
      fx: { silver: 30, xp: 40, give: { poultice: 1 } },
      next: 'c_joss_pay'
    },
    c_joss_keep: {
      text: [
        'You tuck it under your arm. Crake stares at you, then laughs: an ugly, relieved laugh, because he thinks you\'re one of him.',
        'Joss doesn\'t pay, when you tell him. He just looks at you for a long time and says, "Huh," and shuts his door.',
        'The ledger, though. The ledger is very interesting reading. Half the Market Stair owes Crake money. So does Sergeant Moll. So, surprisingly, does a Lamplighter of the Lanternhold.'
      ],
      fx: { silver: 0, xp: 40, rep: { town: -1 } },
      next: 'c_joss_end'
    },
    c_joss_pay: { route: [{ if: 'f.e1_joss_forty', fx: { silver: 10 }, go: 'c_joss_end' }, { go: 'c_joss_end' }] },
    c_joss_end: { text: ['You walk back to the Hen through streets that smell of lime and rain.'], end: true },

    /* ======================= SIDE: TALKS ======================= */
    t_tam_1: {
      loc: 'The Gutted Hen — the back step',
      text: [
        'Tamsin is on the back step of the Hen in the evening, feet up on the rain barrel, peeling an apple with her knife in one long unbroken curl. The peel hangs nearly to the ground.',
        '@tamsin: "If it doesn\'t break, you get a wish. Fen rule."',
        'It breaks. She swears, then laughs, and eats the bit that fell.'
      ],
      choices: [
        { t: '"What would you have wished?"', go: 't_tam_2' },
        { t: 'Sit down beside her. Say nothing.', go: 't_tam_3' }
      ]
    },
    t_tam_2: {
      text: [
        '@tamsin: "Not telling. That\'s the other fen rule." She cuts a slice and hands it to you on the knife-point. "What would you wish for, Sergeant? And don\'t say a drink. That\'s not a wish, that\'s a habit."',
        'You think about it longer than you mean to.',
        '@ansel: "To sleep outside. Once. Just once, without feeling watched."',
        'She stops chewing. Something passes over her face that you can\'t read.',
        '@tamsin: "That\'s a good wish." Quietly. "That\'s a better wish than mine."'
      ],
      fx: { bond: { tamsin: 1 }, set: { e1_tam_wish: 1 } },
      next: 't_tam_4'
    },
    t_tam_3: {
      text: [
        'You sit. The step\'s too narrow. Her shoulder is against yours. Neither of you moves it.',
        'The bells of the Lanternhold ring the Evening Lamp, and all over the town people stop and touch their hearts. Tamsin doesn\'t. Neither do you.',
        '@tamsin: "Huh," she says. "Look at us. A pair of heathens."'
      ],
      fx: { bond: { tamsin: 1 } },
      next: 't_tam_4'
    },
    t_tam_4: {
      text: [
        'She gets up, brushes the peel off her lap, and stretches until her back cracks.',
        '@tamsin: "Gran\'s, first light. I told you." She says it lightly. "Don\'t die while I\'m gone. You\'d be no use to anybody dead."',
        'She goes in. She leaves the rest of the apple on the step beside you.'
      ],
      end: true
    },
    t_mags_1: {
      loc: 'The Gutted Hen — after closing',
      text: [
        'After the last drinker is put out into the rain, Mags pours two cups of something brown and sits down across from you with a groan, like a ship settling.',
        '@mags: "Right. House rules. You drink here, you don\'t drink alone, because I\'ve seen what that does. You pay on time. And if you\'re going to do something stupid about the Marshal, you tell me first, so I can get the good mugs off the shelf."'
      ],
      choices: [
        { t: '"What makes you think I\'d do something about the Marshal?"', go: 't_mags_2' },
        { t: '"Tell me about your husbands."', go: 't_mags_3' }
      ]
    },
    t_mags_2: {
      text: [
        '@mags: "Love. I watched your face when his name came up. I\'ve seen that face before. My son had it, the week before he joined the Marshal\'s men to go and fight bandits in the Thornwood." She drinks. "They brought him home in a cart. Ser Konrad paid for the pyre. Very handsome of him."',
        '@ansel: "How did he die?"',
        '@mags: "They said bandits." She turns her cup. "His wounds were in the back. I washed him. I know what I saw."'
      ],
      fx: { bond: { mags: 1 }, set: { e1_mags_son: 1 } },
      next: 't_mags_4'
    },
    t_mags_3: {
      text: [
        '@mags: "First one, Davey, was a sweet idiot who drowned drunk in the tannery pit. Second, Gil, was a clever bastard who hit me once, and I put him through the window, like I said." She smiles, not nicely. "He moved to Corvane. Married a baker. I hear he\'s very well-behaved now."',
        '@mags: "And I had a boy. Tom. He\'s dead too." She says it plainly and doesn\'t elaborate, and you don\'t ask, and she nods, as if you\'ve passed something.'
      ],
      fx: { set: { e1_mags_husbands: 1 } },
      next: 't_mags_4'
    },
    t_mags_4: {
      text: [
        'She finishes her cup and stands, and on her way past she puts a hand on the back of your neck for just a moment, warm and heavy and frank about it.',
        '@mags: "You\'ve good shoulders, sergeant. Shame about the rest." She grins. "Go to bed."'
      ],
      end: true
    }
  },
  side: [
    { id: 'e1_c_gibbet', kind: 'contract', title: 'Wolves at Hangman\'s Cross', desc: 'A shepherd will pay 20 silver to be rid of the wolves eating the Marshal\'s hanged men, and now his ewes.', level: 1, start: 'c_gibbet_1' },
    { id: 'e1_c_joss', kind: 'contract', title: 'The Moneylender\'s Ledger', desc: 'Old Joss the fence wants a moneylender\'s debt-book burned. No questions.', level: 2, start: 'c_joss_1' },
    { id: 'e1_t_tamsin', kind: 'talk', who: 'tamsin', title: 'An apple on the back step', start: 't_tam_1' },
    { id: 'e1_t_mags', kind: 'talk', who: 'mags', title: 'House rules, after closing', start: 't_mags_1' }
  ]
});
