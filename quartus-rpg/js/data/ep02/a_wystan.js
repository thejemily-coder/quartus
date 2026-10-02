/* Episode 2 — Wystan: The Stair */
Q.part(2, {

  e2_w1: {
    place: 'Mudgate — the cooper’s cellar',
    text: function (s) {
      var st = s.f.c_stance;
      return [
        st === 'ring'
          ? 'The sun-in-splendor gleams between the bonesetter’s fingers, and something in Wystan’s stomach goes cold and then hot. He has seen that ring on a dead man’s hand, on a hand that sat on the council table at Greyfen when he was fourteen, the hand of the Prince who ruffled his hair and called him *young Hale* and was kind about it.'
          : st === 'hands'
          ? 'The bonesetter’s hands are open and shaking and covered to the wrists in somebody’s blood. He is looking at Wystan’s sword, and then at Wystan, with the long careful look of a man doing a sum.'
          : 'The adze is a ridiculous weapon, and the man holding it is not a ridiculous man: he is lean and weathered, with a marsh-pale face and a long mouth, and he holds the tool with the unmistakable ease of someone who has used it for something worse than barrels.',
        'Overhead, a whistle. Boots on the cooper’s boards. In the next few breaths this cellar is going to be a very small room.',
        'There is a long, bright moment in which Wystan could do three different things.'
      ];
    },
    choices: [
      { tag: 'Trust', label: 'Lower your blade an inch. “I’m not here for you. I was sent to find the boy. Talk fast.”', goto: 'e2_w2', rel: { corr: 1 }, set: { w_corr_stance: 'trust' } },
      { tag: 'Insight', label: 'Hold the point on his chest. Read him: does this man look like a killer, or like a mourner?', check: { stat: 'wit', dc: 8, pass: 'e2_w1a', fail: 'e2_w2', label: 'Insight' }, set: { w_corr_stance: 'wary' } },
      { tag: 'Force', label: 'Knock the adze away and put him on the floor.', check: { stat: 'blade', dc: 8, pass: 'e2_w1b', fail: 'e2_w1c', label: 'Blade' }, set: { w_corr_stance: 'force' } }
    ]
  },
  e2_w1a: {
    fx: function (s) { s.addRel('corr', 1); },
    text: [
      'There are two kinds of men who stand over a dead boy with blood on their hands. One kind is looking at the door. The other is looking at the boy. Wystan has seen both kinds across three campaigns.',
      'This man is looking at the boy, and his lips are moving, and what they are saying is not a prayer, because it has no rhythm. It is a count.'
    ],
    next: 'e2_w2'
  },
  e2_w1b: {
    fx: function (s) { s.addRel('corr', -2); },
    text: [
      'It is not elegant. He drives his shoulder into the lean man’s chest and strips the adze with the flat of his sword, and they go down together in a clatter of barrel-hoops, Wystan on top with a knee between the man’s shoulder-blades and the point of the blade alongside his ear.',
      '“*Please*,” says the bonesetter, into the dirt, in a voice that is mostly breath. “I didn’t — I only set bones. Look at his *lips*. Look.”'
    ],
    next: 'e2_w2'
  },
  e2_w1c: {
    fx: function (s) { s.hurt(2); s.addRel('corr', -1); },
    text: [
      'The man is faster than he looks. The adze comes round in a short vicious arc and bites into Wystan’s forearm just under the vambrace, and the pain is clean and white and enormous. He staggers. The bonesetter has already stepped back with the bloody tool held out between them in two hands, and there is nothing triumphant in his face at all. He looks as sick as Wystan feels.',
      '“I didn’t want that,” he says. “*I didn’t want that.* Please. Will you listen?”'
    ],
    next: 'e2_w2'
  },

  e2_w2: {
    place: 'Mudgate — the cooper’s cellar',
    text: [
      'The man’s name is Corr Anwen. Wystan does not at first believe him, then does, which is irritating.',
      'It comes out in a few ragged minutes, in a marsh accent that thickens as he speaks. A hunt-party of four; a rider in grey; a ford and an outstretched hand. A Prince walking into the water as if he were being led to bed. A body that came up dry. A boy who cried *it’s counting* and then died of it, on this very pallet, with the same terrible white frost on his lips. Piers’s words, scratched out of him with the last of his breath. *Give it to Garrick. Tell him it’s counting.*',
      'It is a mad story. It is exactly the story the squire’s fever would have told. It is also, uncomfortably, the same story that Prince Garrick said he didn’t believe, in a tent, at dusk, while pouring wine with a hand that would not stay steady.',
      'Wystan looks at the dead lad on the pallet. He has been looking for him all day and he found him an hour too late, and the shame of it is a heavy hot stone under his ribs.',
      'The whistle shrills again. This time it is in the cooper’s own yard.',
      '“Wystan!” A voice from above, hoarse, and terrible in its calm. Doran Fenwick, at the top of the stairs. “Six of them. Lamp-lads, with rods. I’ve got the door, boy. I can’t hold it forever.”'
    ],
    next: 'e2_w3'
  },

  e2_w3: {
    place: 'Mudgate — the cooper’s cellar',
    text: [
      'There is the stair, and the old captain on it. There is the sluice-drain at the back of the cellar, a brick tunnel scarcely wide enough for a man on his hands and knees, which smells like the bottom of the world and leads, according to the bonesetter, out into the tannery run and from there to the river. Six Candlemen. One man holding a doorway with a long knife and thirty years’ worth of bad knees.',
      '“Go,” says Doran’s voice from above. “That’s an *order*, Hale. You’ve got your witness. Take him and *go*.”',
      'The thing about Doran’s orders is that he has never once given one that did not mean the opposite.'
    ],
    choices: [
      { tag: 'Loyalty', label: 'Go up the stairs. Fight beside Doran.', goto: 'e2_w3c', echo: 'Wystan turned back to fight beside Doran Fenwick on the cooper’s stair.' },
      { tag: 'Duty', label: 'Take the bonesetter and the ring, and go down the drain. Doran has given an order. Honor it.', goto: 'e2_w4d', set: { doran_dead: true, doran_how: 'abandoned' }, rel: { garrick: 1 }, echo: 'Wystan obeyed Doran’s last order and left him to hold the stair.' },
      { tag: 'Gamble', label: 'Take the stairs three at a time, grab Doran by the belt, and drag him down the drain *with* you before the Candlemen’s rods get him.', check: { stat: 'blade', dc: 10, pass: 'e2_w4s', fail: 'e2_w4d2', label: 'Blade' } }
    ]
  },

  e2_w3c: {
    place: 'Mudgate — the cooper’s stair',
    text: [
      'The cooper’s stair is a plank ladder with a landing, and the landing is full of Candlemen. Doran has put his back against the door-frame and is bleeding from the scalp and is smiling like a man who has been waiting years for an excuse. He looks round as Wystan arrives, and says, with real irritation, “I told you to go.”',
      '“You tell me a great many things.”',
      'Then the rods come in, and there are no more words.'
    ],
    combat: {
      enemy: { name: 'The Candlemen', hp: 9, def: 9, cun: 9, atk: 2, dmg: 2, w: 'iron snuffing-rod', desc: 'Six lamp-lads with iron rods. Doran is holding half of them.' },
      pw: 'sword',
      bonus: function (s) { return 1; },
      win: 'e2_w4w', lose: 'e2_w4l'
    }
  },

  e2_w4w: {
    pov: 'wystan', place: 'Mudgate — the cooper’s yard',
    set: { doran_dead: false, doran_hurt: true },
    fx: function (s) { s.addRel('doran', 2); },
    text: [
      'It ends the way these fights end, in one breath all at once: three of them down, one fled, two on their knees and not at all anxious to get up. The yard is full of the smell of snuffed wicks and blood.',
      'Doran is sitting with his back against a barrel, one hand pressed to his ribs, a grin like a split in a boot. “You’re a *terrible* listener,” he says. “I’ve been saying it since you were nine.”',
      'He is going to live. It is the best news Wystan has had all day, and he does not, at first, trust it.',
      'Behind them in the cellar the bonesetter has not run. He is kneeling by the dead boy, closing his eyes, doing what is plainly a private thing. Then he looks up. “If I’m going to be a witness,” he says, “I would like it to be a living one.”'
    ],
    next: 'e2_w5'
  },
  e2_w4l: {
    pov: 'wystan', place: 'Mudgate — the cooper’s cellar',
    set: { doran_dead: true, doran_how: 'fell' },
    fx: function (s) { s.hurt(4); s.echo('Doran Fenwick died on the cooper’s stair in Mudgate, buying Wystan time.'); },
    text: [
      'There are too many of them. That is all it is. There is no heroism in it, only arithmetic: six rods, one blade and an old man’s knees.',
      'Doran goes down in the doorway with a rod across the back of his skull. He does not cry out. He looks up at Wystan with surprise and almost, almost apology, and then the Candlemen close over him.',
      'Wystan does not remember the next minute. When he comes back to himself he is on his hands and knees in the sluice-drain, bleeding down one side, with the bonesetter hauling at his collar and saying over and over, in his thick marsh voice, “*Move.* Move. *Move*, he’s dead, he’s dead, *I’m sorry*, but if you don’t move we’ll both be—”',
      'The drain smells like the bottom of the world.'
    ],
    next: 'e2_w4e'
  },
  e2_w4d: {
    pov: 'wystan', place: 'Mudgate — the sluice-drain',
    fx: function (s) { s.echo('Doran Fenwick died holding the cooper’s stair so that Wystan could escape.'); },
    text: [
      'It is the worst thing he has ever done, and he does it quickly.',
      'The drain is a brick throat, slick with tannery-run, barely wide enough for his shoulders. The bonesetter goes first, and Wystan follows on his belly, with the ring in his fist, and behind him he hears the cooper’s door give, and a single long shout of Doran’s that has no word in it, and then the soft unhurried sound of iron on a man’s skull.',
      'Then the long, wet, tolling silence of the drain. He tastes brick-dust and blood and shame.',
      'He will always be able to say that he was following an order. He will never once be able to say it without hearing Doran’s voice add, *you tell me a great many things.*'
    ],
    next: 'e2_w4e'
  },
  e2_w4s: {
    pov: 'wystan', place: 'Mudgate — the cooper’s stair',
    set: { doran_dead: false, doran_hurt: true },
    fx: function (s) { s.addRel('doran', 2); s.echo('Wystan dragged Doran Fenwick out from under the Candlemen’s rods.'); },
    text: [
      'It is a very stupid thing to do. That is part of why it works. He takes the stairs in three bounds and a Candleman’s rod rings off his pauldron and a second takes him across the thigh, and then he has a fistful of Doran’s belt and a fistful of Doran’s collar and they are *falling*, down the ladder, a tangle of limbs and curses and steel, into the dark of the cellar, with the trapdoor slamming above them.',
      '“I told you—” gasps Doran.',
      '“*Yes*,” says Wystan. “You tell me a great many things.”',
      'The bonesetter has already pulled the grate off the sluice-drain.'
    ],
    next: 'e2_w4e'
  },
  e2_w4d2: {
    pov: 'wystan', place: 'Mudgate — the cooper’s cellar',
    set: { doran_dead: true, doran_how: 'fell' },
    fx: function (s) { s.hurt(3); s.echo('Doran Fenwick died on the cooper’s stair as Wystan tried to drag him free.'); },
    text: [
      'He is a half a step too slow. The rod takes Doran before Wystan’s hand can close on the belt, a short ugly overhand blow, and the old captain’s body goes slack in his grip and the whole weight of it nearly takes them both down the ladder.',
      'Wystan holds him anyway. He holds him all the way down into the dark. He is still holding him when the bonesetter hauls the grate off the drain and says, very quietly, “He’s gone. I’m sorry. There’s nothing in him.”',
      'The Candlemen are on the stairs. There are rods on the planks over their heads. He lays Doran down very gently on the straw, as if the old man were sleeping, and goes into the drain on his belly with his face wet and says nothing at all.'
    ],
    next: 'e2_w4e'
  },
  e2_w4e: {
    place: 'The river — a tannery outfall',
    text: [
      'The drain lets out onto the river at the foot of the tanneries, in the stinking mud of an outfall under a footbridge. They crawl out into a night that has gone grey with the first smear of dawn. Behind them Mudgate is full of lamps.',
      'The bonesetter is shaking. So, now that he can feel it, is Wystan.',
      'They do not say anything for a long moment. Then Corr Anwen wipes the mud from his face and says, with great care, “I’ll go where you take me. But I won’t be taken in chains. If you wish to chain me you had better do it now, while I’ve no strength to resist you.”'
    ],
    next: 'e2_w5'
  },

  e2_w5: {
    place: 'Highgarrow — Marcher House, Tanners’ Hill',
    text: function (s) {
      var d = s.f.doran_dead;
      return [
        'Prince Garrick has not slept. He is sitting at the head of a trestle table in the long hall of Marcher House, with the shutters closed against the dawn and a map of the realm weighted down with daggers, and he looks up when Wystan comes in with the mud of the sluice still on him and the sight goes through his face like a blade.',
        d ? '“Doran,” he says. It is not a question.' : '“You’re bleeding,” he says, and then, “Where is the squire?”',
        d ? 'Wystan tells him. The Prince’s big hands, flat on the table, do not move. When Wystan has finished, Garrick says, in a voice that is perfectly level, “He was in my father’s army. He taught me to ride a horse. He taught you to hold a sword.” He swallows. “Tell me the rest.”' : 'Wystan tells him: the cellar, the dead boy, the white-lipped frost, the ring. Garrick takes the ring in his huge scarred hand, turns it to the light, and the color drains out of his face. He puts it down very carefully, as though it were hot.',
        'It is the first time Wystan has ever seen the Prince of the North look frightened.',
        '“Tell me what the boy said. All of it. *Exactly* what he said.”'
      ];
    },
    choices: [
      { tag: 'Honesty', label: 'Tell him everything as it was told: the rider in grey, the hand held out at the ford, the dry body, “it’s counting.” You don’t understand it. Neither of you has to.', goto: 'e2_w6h', set: { w_reported: 'honest' } },
      { tag: 'Deceit', label: 'Tell him what he needs to hear: before he died, the boy named Princess Maud’s steward as the man who ordered the lie.', goto: 'e2_w6d', set: { w_reported: 'shaded' } },
      { tag: 'Guard', label: 'Tell him about the boy and the ring, but say nothing about the bonesetter. Corr stays hidden, for now.', goto: 'e2_w6g', set: { w_reported: 'partial', w_hid_corr: true } }
    ]
  },
  e2_w6h: {
    fx: function (s) { s.addRel('garrick', 1); s.echo('Wystan told Prince Garrick the truth about Marden’s death — as impossible as it sounded.'); },
    text: [
      'He tells it in order, in the plain voice of a man giving evidence, the way he was taught: the rider in grey, the ford, the dry body, the squire’s last words. He does not shade it. He watches it land.',
      'Garrick listens without moving. When Wystan has finished he is silent for a long time. Then he laughs once, a short bitter bark.',
      '“A ghost in a grey cloak. A *dry* corpse. Tell me, boy: how long do you think it would take a man like my sister to dress a retainer in grey and send him riding with my brother?” He drums his fingers on the map. “No. Whatever the lad believed, he believed it because someone *wanted* him to. That’s how it is done.”',
      'He does not believe it. But he has stopped saying it was the apoplexy, and he is looking at the ring as though he were afraid of it.',
      '“You’ve done well,” he says at last. “It’s more than I had any right to ask. Keep the bonesetter close. I will hear him myself.”'
    ],
    next: 'e2_w7'
  },
  e2_w6d: {
    fx: function (s) { s.addRel('garrick', 2); s.f.garrick_marches = true; s.echo('Wystan told Garrick that Marden’s squire had named the Princess’s steward — and Garrick called up the Marcher host.'); },
    text: [
      'It is the first lie he has ever told the Prince and it comes out so smoothly that it frightens him. *The steward. Maud’s steward, Garrick. The boy said it with his last breath.*',
      'He watches it land. He watches a man who has been holding his breath for six months finally let it go.',
      '“I *knew*,” says Garrick Verrin. “I *knew* it.” He is on his feet, and the daggers have gone skittering off the map, and he is shouting for his marshals in a voice that rattles the shutters. “Ride for the host at Stonewick. Four thousand. I want them at the east gate by dusk with their banners down. We will take my sister’s steward at the palace itself and we will ask him what a man in grey is.”',
      'He grips Wystan’s shoulder, hard. His eyes are wet. “You have done me a service I shall not forget.”',
      'Wystan smiles, and it is the worst thing his face has ever done.'
    ],
    next: 'e2_w7'
  },
  e2_w6g: {
    fx: function (s) { s.addRel('garrick', 0); },
    text: [
      'He tells it carefully. The cellar, the boy, the ring, the fever, the white on the lips. He leaves out the man who held the squire as he died, and says only that the Candlemen were already in the street. It is, as lies go, a thin and sensible one.',
      'Garrick studies him with narrowed eyes for a long moment, and Wystan has the unpleasant sense that he is being weighed like grain.',
      '“There was someone else,” the Prince says softly. “You’re a bad liar, bastard. You always look at the ceiling.” But he does not press. He turns the ring over in his big hand. “Keep your secrets for a day or two. But whoever you’re keeping, I will hear him. Tonight.”'
    ],
    next: 'e2_w7'
  },

  e2_w7: {
    place: 'Highgarrow — the east road',
    text: function (s) {
      return [
        'It is full day when Wystan comes out of Marcher House with the sun in his eyes and a Marcher squire’s clean cloak over his shoulders. He has not slept since the lists. He is a man of twenty-seven who has lost a friend, or lied, or been very lucky, or all three.',
        'The street is oddly quiet. A baker’s boy has stopped with a tray on his head. A woman in the doorway of a cookshop has put down her ladle. They are all looking east, at the road that comes in from the Eastmarch to the Old Gate, and he turns and looks too.',
        'They are coming in on foot. Hundreds. Perhaps a thousand; it is hard to count, because they do not walk as a crowd does, in knots and gaps, but in a long thin line, hundreds and hundreds, at a single steady pace. Men, women, children. They are barefoot, in nightshirts and shifts, and all of them are wet to the knee.',
        'Not one of them is speaking. Not one of them is awake.',
        s.f.doran_dead ? 'He thinks of Doran, who would have known what to say about it, and who would have said it very rudely.' : 'He thinks of Doran, bandaged and indignant in a bed upstairs, who would have said something rude, and he wishes with a sudden childish intensity that the old man were here to say it.'
      ];
    },
    fx: function (s) { s.omen(1); },
    end: true, continue: 'Continue'
  }
});
