/* Episode 1 — Wystan: The Lists */
Q.part(1, {

  e1_w1: {
    place: 'Highgarrow — the Tilt-yard',
    text: [
      'Forty thousand people have come to Highgarrow to watch an old man refuse to die.',
      'They fill the stands and the rooftops and the scaffolds hung with bunting; they hang from the city wall by their elbows. Seventy-one years on the throne, ninety-five years in the world, and Aldous Verrin has never looked so much like a rumor. They have not seen him this morning. They will see him tonight. But the banners say THE LONG KING in gold thread, and when the heralds say it the crowd roars as if it were the name of a god.',
      'Wystan Hale stands in the sand in a dead man’s brigandine, two sizes too wide in the shoulder, and tries not to think about the word *bastard*.',
      '“Ser Wystan,” cries the herald, a plump man with a voice made for cathedrals, “*called* Hale, of Greyfen — the Marcher’s lord’s own son, *by the left hand* — sworn sword to Prince Garrick Verrin, Lord of the North!”',
      'Somewhere in the stands, someone laughs. It spreads, as such things do. A lordling’s voice floats down from the high benches, bright with wine: “Which half of him is the Hale?”',
      'Across the sand, Ser Corbin Dray — the Princess’s champion, golden-haired, perfect-toothed, thirty-three and unbeaten in six Jubilees — lifts his helm and smiles, not unkindly. That is the worst of it. He feels sorry for him.'
    ],
    choices: [
      { tag: 'Restraint', label: 'Say nothing. Let the heralds have their joke.', goto: 'e1_w2', set: { w_temper: 'cool' } },
      { tag: 'Wit', label: 'Call back across the sand: “The half that’s holding the sword!”', check: { stat: 'wit', dc: 9, pass: 'e1_w1p', fail: 'e1_w1f', label: 'Wit' } },
      { tag: 'Menace', label: 'Fix your eyes on Corbin Dray and do not look away.', check: { stat: 'blade', dc: 7, pass: 'e1_w1s', fail: 'e1_w2', label: 'Nerve' } }
    ]
  },

  e1_w1p: {
    set: { w_crowd: 1 },
    text: [
      'There is a breath of silence. Then the Marcher contingent in the east stands bellows its approval, and the sound rolls through the yard like a wave breaking the wrong way. Even the lordling’s friends are laughing at the lordling now.',
      'Corbin Dray’s smile widens, a little rueful. He inclines his head — one swordsman acknowledging another’s opening gambit — and for the first time Wystan feels the weight of the brigandine settle where it belongs.'
    ],
    next: 'e1_w2'
  },
  e1_w1f: {
    set: { w_temper: 'hot' },
    text: [
      'It comes out half a beat late and an octave too high, and the pause that follows is a terrible, listening thing. Then the lordling shouts back, “Which sword? You’ll want to be sure — it’s his father’s kitchens you’ll be wanting!” and this time the laugh is louder, and it has teeth.',
      'Wystan’s ears burn. Under the borrowed steel his heart goes hard and fast, and he knows, with the clarity of long practice, exactly how that will help him and exactly how it will not.'
    ],
    next: 'e1_w2'
  },
  e1_w1s: {
    set: { w_stare: true },
    text: [
      'It is not a thing he does often. He lets the silence go out of him like heat off a forge. The laughter nearest the sand dies first, the way gossip dies when a door opens.',
      'Dray holds his eyes for three long breaths. Then, almost imperceptibly, he looks at his own sword-hand, as though checking it is still there. A small thing. Wystan files it away like a coin.'
    ],
    next: 'e1_w2'
  },

  e1_w2: {
    place: 'Highgarrow — the Tilt-yard',
    text: [
      'Sir Doran Fenwick is waiting at the rail, and looks, as always, like a man who has been chewing something sour for thirty years and found it useful. He was Garrick’s captain before Wystan was born. He has taught Wystan most of what Wystan knows about swords and all of what he knows about the lords who wield them.',
      '“Two bouts to the yield, war-blades with the edges blunted to a thumb’s breadth,” Doran says. “Which is to say it will not kill him unless he is very unlucky. Or you are.” He spits. “The Princess wants this bout, lad. Her champion carries her colors in front of the whole realm. Win, and Prince Garrick keeps the Jubilee crown. Lose, and she’ll be wearing it by supper.”',
      'There is time for one thing before the horn.'
    ],
    choices: [
      { tag: 'Learn', label: 'Ask Doran what he has seen of Dray’s fighting.', goto: 'e1_w2a' },
      { tag: 'Faith', label: 'Whisper the Warden’s prayer. You were taught it by a stable-boy and an old woman and it has never failed you, quite.', check: { stat: 'faith', dc: 8, pass: 'e1_w2b', fail: 'e1_w3', label: 'Faith' } },
      { tag: 'Look', label: 'Find Prince Garrick in the stands and see what is written on his face.', goto: 'e1_w2c' }
    ]
  },
  e1_w2a: {
    set: { w_tell: true },
    text: [
      'Doran scratches at his jaw. “He’s fast. He’s better than fast; he’s *tidy*. But the Princess’s man never learned to lose, so he never learned what a high guard costs him. Watch the left shoulder. He drops it a hair after a strike from above. Give him one at the head and you’ll see.” He pauses. “Don’t thank me. I’m owed three of your ales for that.”'
    ],
    next: 'e1_w3'
  },
  e1_w2b: {
    set: { w_blessed: true },
    text: [
      'It is not a long prayer. *Warden at the gate, Warden at the wall, keep the hand that holds, keep the one that falls.* Somewhere inside it, the clamor in the yard goes thin and far, and Wystan’s own heartbeat comes to the front, slow as a drum under a hill.',
      'He opens his eyes and the day is very clear.'
    ],
    next: 'e1_w3'
  },
  e1_w2c: {
    fx: function (s) { s.addRel('garrick', 1); },
    text: [
      'Prince Garrick Verrin sits in the Marcher box, a big man gone heavy at fifty-eight, with a face like a plowed field and a grey-shot beard cut square. He is not looking at the sand. He is looking up the tiers at the Princess’s pavilion, where his sister Maud sits in a gown the color of old pewter, beautifully still.',
      'Then he feels Wystan’s eyes. And he winks — slow, solemn, one fighting man to another — and lifts two fingers from his cup in salute.',
      'It is a small thing. It is one of the reasons Wystan would follow him through a burning city.'
    ],
    next: 'e1_w3'
  },

  e1_w3: {
    place: 'Highgarrow — the Tilt-yard',
    text: [
      'The horn sounds.',
      'They come together in the middle of the sand with forty thousand people holding their breath. Dray’s blade is a bright running line; he is as good as his name, and he fights as though the world were obliged to hold still while he did it. The first strokes are a conversation, polite and deadly. Then the conversation ends.'
    ],
    combat: {
      enemy: { name: 'Ser Corbin Dray', hp: 8, def: 9, cun: 9, atk: 1, dmg: 2, w: 'war-blade', desc: 'The Princess’s champion. Unbeaten in six Jubilees.' },
      pw: 'war-blade',
      bonus: function (s) { return (s.f.w_tell ? 1 : 0) + (s.f.w_blessed ? 1 : 0) + (s.f.w_stare ? 1 : 0) + (s.f.w_crowd ? 1 : 0); },
      win: 'e1_w4w', lose: 'e1_w4l'
    }
  },

  e1_w4w: {
    pov: 'wystan', place: 'Highgarrow — the Tilt-yard',
    set: { w_corbin: 'won' },
    text: [
      'Dray goes to one knee in the sand, and then, when the point of Wystan’s blade finds the hollow of his throat, the other. His breath is ragged. There is blood on his teeth from where his own helm split his lip.',
      'The sound the crowd makes is not a cheer. It is something older, an animal gasp that rises into a roar. Across the field, in the Princess’s pavilion, no one moves at all.',
      '“Yield,” Wystan says, and means it as a courtesy.',
      'Dray looks up at him — the broad bruised face of a man who has never once had to look up — and says nothing. His eyes go to the Princess’s box. Whatever he sees there makes him look suddenly, terribly tired.'
    ],
    choices: [
      { tag: 'Mercy', label: 'Lower the blade. Offer him a hand up.', goto: 'e1_w5', set: { w_corbin_fate: 'spared' }, rel: { corbin: 2 }, echo: 'Wystan beat the Princess’s champion in the Jubilee lists — and helped him to his feet.' },
      { tag: 'Cruelty', label: 'Hold the point at his throat. “Say it. Say you yield to the bastard.”', goto: 'e1_w5', set: { w_corbin_fate: 'shamed' }, rel: { corbin: -3, garrick: 1 }, echo: 'Wystan beat the Princess’s champion in the lists and made him say it before forty thousand people.' },
      { tag: 'Cold', label: 'Take your blade away, give a single nod, and walk off the field without looking back.', goto: 'e1_w5', set: { w_corbin_fate: 'ignored' }, rel: { corbin: -1 }, echo: 'Wystan beat the Princess’s champion in the Jubilee lists and walked away from him.' }
    ]
  },

  e1_w4l: {
    pov: 'wystan', place: 'Highgarrow — the Tilt-yard',
    set: { w_corbin: 'lost' },
    text: [
      'The sand comes up to meet his face. There is a taste of iron, and a bright, spinning, ridiculous pain behind his eye, and above him the sky is the color of a fresh bruise.',
      'A pair of boots, perfectly polished, steps into his sight. A gloved hand is held out. Dray is breathing hard; his smile is gone, and what is left is almost kind.',
      '“Not bad for a stable-cousin,” he says, loud enough for the stands, and lower, only for Wystan: “You nearly had me in the third. Stay down a breath. They won’t think less of you.”'
    ],
    choices: [
      { tag: 'Grace', label: 'Take the hand and let him haul you to your feet.', goto: 'e1_w5', rel: { corbin: 1 }, echo: 'Wystan lost the Jubilee bout to Ser Corbin Dray, and took the hand he was offered.' },
      { tag: 'Pride', label: 'Spit blood on his boot and get up on your own.', goto: 'e1_w5', rel: { corbin: -1, garrick: 1 }, echo: 'Wystan lost the Jubilee bout to Ser Corbin Dray and spat on his boot.' }
    ]
  },

  e1_w5: {
    place: 'Highgarrow — the Marcher pavilion',
    text: function (s) {
      var won = s.f.w_corbin === 'won';
      return [
        'Prince Garrick’s tent smells of wet wool and spilled beer and the oil he rubs on his bad knee. He is pouring wine before Wystan is through the flap.',
        won ? '“You’ve made me a king’s brother twice in one day, bastard,” he says. “First by winning, and then by being so damnably polite about it. Don’t look at me like that. Drink.”'
            : '“A loss in the lists is cheaper than a loss in a field,” Garrick says, pressing the cup into his hand. “You’ll spit blood for a week and I’ll buy the beer. Drink, boy. I need you sober in an hour, so drink slow.”',
        'He waves the pages out. Doran hovers at the flap with his arms folded and then, at a look, follows them. When the canvas drops, the roar of the Jubilee grows muffled and distant, like a thing in another country.',
        'Prince Garrick does not sit. He stands at the pavilion pole, looking at nothing.',
        '“My brother Marden did not fall from his horse,” he says.',
        'He has said it before, to the wine, to the dark. Not once to anyone who could do something about it.',
        '“Six months dead. The hunt-party carried him home across a saddle and the physicians said an apoplexy of the heart, and my sister said grief, and my father—” His mouth twists. “My father said *Marden?* as if he had to think about who that was. Marden had a heart like a bull. I hunted with him forty years.” He swallows. “His squire, a lad called Piers, was at the ford. He ran the night they brought the body in. Maud’s people have called him a thief. I think he is a witness. I think he’s in Mudgate, hiding among the tanners, and I think if my sister’s men find him first he will not live to say what he saw.”',
        'He turns. His eyes in the lamplight are the eyes of a man who has made up his mind, and is asking whether he is mad.',
        '“Find him. Bring him to me alive. Not to Maud, not to the Church, not to my father’s physicians. To me.”'
      ];
    },
    choices: [
      { tag: 'Oath', label: 'Kneel. “On my sword, my lord. Alive, and to you alone.”', goto: 'e1_w6', set: { w_oath_garrick: true }, rel: { garrick: 2 }, echo: 'Wystan swore on his sword to bring Prince Marden’s squire to Garrick alive.' },
      { tag: 'Wit', label: 'Ask: “Why me? You have Doran. You have a hundred swords.”', goto: 'e1_w5b' },
      { tag: 'Honesty', label: '“If the boy says it was the Princess, I’ll bring his words to you. I won’t bring his words *shaped* to you.”', goto: 'e1_w6', set: { w_honest: true }, rel: { garrick: -1 }, echo: 'Wystan told Prince Garrick he would carry the truth, not his wishes.' }
    ]
  },
  e1_w5b: {
    clue: { garrick_distrust: 'Prince Garrick trusts almost no one in his own household — he sent a bastard knight rather than his captain.' },
    text: [
      'Garrick’s laugh is short and has no humor in it. “Because Doran’s people are my people, and half of mine have a cousin at my sister’s table, and I can’t tell which half.” He looks at Wystan over the rim of his cup. “You have no cousins, boy. Nobody has ever given you anything. That’s what makes you a safe pair of hands.”',
      'It is not a compliment. It is also, Wystan understands, the most honest thing the Prince has ever said to him.'
    ],
    choices: [
      { tag: 'Oath', label: 'Kneel. “On my sword, my lord. Alive, and to you alone.”', goto: 'e1_w6', set: { w_oath_garrick: true }, rel: { garrick: 2 }, echo: 'Wystan swore on his sword to bring Prince Marden’s squire to Garrick alive.' },
      { tag: 'Honesty', label: '“I’ll bring him. But whatever he says, I carry it as he said it.”', goto: 'e1_w6', set: { w_honest: true }, rel: { garrick: -1 } }
    ]
  },

  e1_w6: {
    place: 'Highgarrow — the Marcher pavilion',
    text: [
      'A page is waiting outside the tent, a freckled boy in Greyfen black with a muddy hem. He holds out a letter sealed with a ram’s head in dark wax, and the instant Wystan sees it his stomach turns over, because he knows the hand on the outside and it is shaking.',
      '*Wystan.* Only that. His father has never in twenty-seven years written the word *son* on a letter, and never once failed to write the name beneath it.',
      'Doran has come up behind him. He does not look at the seal; he is far too well-bred for that. But he says, gruff and gentle, “The lord of Greyfen is dying, then.”',
      '“How would you—”',
      '“The page rode three days without changing his shirt. A man does not send a shirtless boy to the Jubilee over a rent-dispute.”'
    ],
    choices: [
      { tag: 'Read', label: 'Break the seal and read it, here, in the mud.', goto: 'e1_w6r' },
      { tag: 'Defy', label: 'Put it unread inside your coat. The living have first claim on the day.', goto: 'e1_w7', set: { w_letter: 'unread' } }
    ]
  },
  e1_w6r: {
    set: { w_letter: 'read' },
    clue: { hale_mother: 'Lord Hale’s dying letter: there are things about Wystan’s mother “which I swore to the Church I would never tell,” and he wants Wystan home before the barley.' },
    text: [
      'It is four lines, and the last two are so crabbed with illness that he has to read them twice.',
      '*Come home before the barley is cut. There are things about your mother which I swore to the Church I would never tell, and I am dying with the oath in my mouth like a stone. Edmund will say you are not wanted. You are wanted.*',
      'He reads *swore to the Church* three times, and each time it means something else.',
      'His mother is a name and a pair of hands. He has no face for her. He was told she was a Dunmarch serving-girl who died of a fever the winter he was weaned, and that was the whole story, and it was always told quickly, and he never once asked why the Church would care about the death of a serving-girl.'
    ],
    next: 'e1_w7'
  },

  e1_w7: {
    place: 'Highgarrow — the road down to Mudgate',
    text: [
      'By dusk the city is drunk.',
      'Fires have been lit at every crossing; the sugar-sellers and the pie-women do roaring trade; somewhere a child is singing. Wystan walks down toward the lower city with Doran at his elbow and his sword loose in the scabbard, through crowds that part for the Marcher black and close up again behind him.',
      'Over the gate that leads to Mudgate, someone has chalked three short strokes and a space, and left the space bare.',
      '“Candlemen’s work,” Doran says, following his look. “The High Chandler’s lads have been marking doors for a week. I asked one what for. He said, ‘so the Lamp knows its own.’ That was all. Seemed an odd thing to say about a door.”',
      'Above them the cathedral tower is a black shape against a wine-dark sky. Compline is sounding; one bell, then two, then three, the old counting — Maker, Warden, Lamp — each tone rolling out over the roofs.',
      'And for one idiotic half-heartbeat, as the third fades, Wystan has the sure and utterly senseless feeling that a fourth ought to have answered.'
    ],
    end: true, continue: 'Continue'
  }
});
