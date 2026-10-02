/* Episode 1 — Corr: Mudgate */
Q.part(1, {

  e1_c1: {
    place: 'Mudgate — a cooper’s cellar, behind the tannery wall',
    text: [
      'The cellar smells of oak shavings and old hops and, underneath, the sweet rot of the tanneries, which gets into everything in Mudgate: bread, bedding, blood. Corr Anwen has lived with it for seven weeks and has stopped noticing, except at night, when he lies awake and misses the smell of peat-smoke so badly it feels like a tooth.',
      'The lad on the pallet is nineteen, perhaps. A squire’s cropped hair, a squire’s rope-callused hands; the rest of him is a wreck. Corr fished him out of the tannery sluice four nights ago, half-drowned, with three cracked ribs and a shoulder out of its socket. Those he has set. What he cannot fix is the fever.',
      'The boy’s sweat dries as it runs. That is the wrong of it. It leaves a fine pale crust on his skin, glittering in the lamplight like frost on a stone, and when Corr wipes it away with a wet cloth it tastes — he has tried it, the way he has tried most things — of the sea.',
      'There are two ways to do this. There is the way Mudgate’s bone-setters have always done it: willow-bark, cold cloths, patience, prayer. And there is the way his grandmother did it, the Dunmarch way, the way that the Church of the Threefold Hand has burned women for.',
      'The boy’s name is Piers. He has said it once, in his sleep, and then gripped Corr’s wrist and said something else, a word Corr has not heard since he was six years old.'
    ],
    choices: [
      { tag: 'The Old Way', label: 'Lay your fingers on the boy’s breastbone and count, the way the Dunmarch women taught you. Listen to what the bones are saying.', check: { stat: 'wit', dc: 9, pass: 'e1_c2a', fail: 'e1_c2b', label: 'The old counting' } },
      { tag: 'Medicine', label: 'Mix the willow-bark. Bring the fever down the way a sensible man would. And ask the boy questions when he wakes.', goto: 'e1_c2c' }
    ]
  },
  e1_c2a: {
    set: { c_counted: true },
    clue: { piers_salted: 'Corr, counting Piers’s bones: the marrow itself is “salted,” as if the boy had been steeped in brine from the inside. Something in him was counting too.' },
    fx: function (s) { s.omen(1); },
    text: [
      'He does it as she taught him, as Hob taught him after her: palm flat over the breastbone, three fingers spread, and *listen*. Not with the ear. With the inside of the wrist, the way you listen for a heartbeat in a bird. The Dunmarch people call it the *counting*. Each bone has a number. Each number has a voice, if you are quiet enough.',
      'The boy’s ribs speak first, in their small, broken voices. The shoulder, sore. The long bones of the leg. And underneath them all, in the *marrow*, the place no priest has ever thought to look, something else is speaking. Not a sound. A *rhythm*. A slow, patient, enormous beat, like a tide a thousand miles away.',
      'It is not the boy’s heartbeat. It is counting. And the boy is the number on which it has stopped.',
      'Corr snatches his hand away so quickly he knocks the lamp. Four. It is the one word the old women never taught him to say in front of strangers.',
      '*Salted*, he thinks. The word has come from nowhere. *He has been salted. As you would salt a thing to keep it.*'
    ],
    next: 'e1_c2'
  },
  e1_c2b: {
    fx: function (s) { s.hurt(1); },
    text: [
      'He does it as she taught him, palm flat, three fingers spread, and for a moment there is something there, a thin high note like a wet finger on glass. Then the cellar *tilts*. A black wave goes through his head and he is on his knees on the flagstones with a nosebleed, tasting copper and salt, and the boy’s breastbone is cold and still under his hand as if nothing had ever been there at all.',
      'He gets up slowly. Whatever the old way heard, it has not wanted to be heard back.'
    ],
    next: 'e1_c2'
  },
  e1_c2c: {
    fx: function (s) { s.heal(0); },
    text: [
      'The willow-bark does what it always does. By lamp-burn the fever has broken a hair and the boy’s breathing has deepened. It is a modest triumph and Corr is grateful for it. A sensible man’s medicine for a sensible man’s illness.',
      'It does not touch the salt.'
    ],
    next: 'e1_c2'
  },

  e1_c2: {
    place: 'Mudgate — a cooper’s cellar',
    text: [
      'Near eleven the boy opens his eyes.',
      'They are red-rimmed and enormous, and for a moment they look at nothing, and then at Corr, and the terror in them goes out in a long shudder, like a drowning man finding the bottom. “You’re the one with the cold hands,” he rasps. “From the sluice.”',
      '“Corr,” says Corr. “Easy. You’re in a cooper’s cellar. You’re safe.” He is not at all sure that is true.',
      '“Piers,” says the boy. “Squire to Prince Marden. I — He’s dead. Isn’t he. Oh, Maker. He’s been dead six months and no one will say how.”',
      'And then, in a scraped, sleepless whisper, Piers tells him. There were four riders on the hunt. A man in grey, nobody’s man, who was simply *there*, who rode beside the Prince for two days without once being introduced. At the Hollin Ford the grey man dismounted and put out his hand, and the Prince took it as a child takes a hand, and *let himself be led*. They walked into the water. They did not come up. And an hour later, Marden was walking out of the far bank with his clothes and hair completely dry, and his eyes open, and his mouth white with salt, and never said a word, and was dead before the ford was out of sight.',
      '“The Princess’s steward said, *you will say it was a fall.* Ser Corbin said it. I said it. For six months. And then I couldn’t. I ran. I ran to the sluice because the water in the sluice was *wet*.”',
      'The boy is weeping. Corr holds his shoulder. Out of his shirt, with a trembling hand, Piers pulls a ring on a cord, a heavy gold signet stamped with a sun in splendor, scratched and dented, still faintly tinged with white along the band.',
      '“Marden’s,” he whispers. “He gave it to me. At the ford. Before he went in. He said — *give it to Garrick, and tell him it’s counting.* Please. Please. It’s counting. Tell him.”',
      'He is staring past Corr now, at the cellar roof, and a thin high ringing has begun in the stone. Corr knows that sound. He has heard it in dreams.'
    ],
    clue: { piers_testimony: 'Piers saw a rider in grey lead Prince Marden into the Hollin Ford by the hand. Marden came out the far bank dry, with salt on his lips, and died. Marden’s last words to Piers: “Give it to Garrick, and tell him it’s counting.”' },
    fx: function (s) { s.give('marden_ring', 'Prince Marden’s signet ring — a sun in splendor, white with salt along the band. Piers asked you to give it to Prince Garrick.'); s.meet('piers'); s.addRel('piers', 2); },
    next: 'e1_c3'
  },

  e1_c3: {
    place: 'Mudgate — a cooper’s cellar',
    text: [
      'The bell rings.',
      'Corr is a bone-setter from the marsh, and he has been in cities long enough to know the sound of every kind of bell they make. Church bells. Guild bells. Hanging bells. Plague-bells. This is none of them. It comes up through the cobbles and the cellar floor and the legs of his stool; it comes through the *boy*, who arches off the pallet like a hooked fish and *opens his mouth*.',
      'What speaks out of Piers is not Piers.',
      'It is dry. It is level. It is a child’s voice, reciting.',
      '*“One for the crown, and two for the sword, three for the lamp, and the Lord is the Lord — four for the one who is sleeping below — count him last, and don’t let him know.”*',
      'It is the Dunmarch verse. The one with the last line. The one the Church’s version leaves out — *four for the field where the barley grows*, they sing it, in Highgarrow, with a hundred sweet voices — and which Corr has not heard in his whole life from any mouth but his grandmother’s.',
      'The white blooms across Piers’s lips and down his throat like frost on a window. His back bows. His eyes go wide with something that is not terror but an enormous, appalled *recognition*.',
      'Then he is only a boy, lying very still, and he is dead.',
      'Corr sits with his hand over his mouth. In his marrow, in the long bones of his own arms, the great slow beat that he heard in Piers’s breastbone is *answering*. He can feel it, as he has never felt anything. Somewhere under him, very far down, something has turned over in its sleep, and *noted* that he exists.',
      'And overhead, in the street, a woman begins to scream, and dogs begin to howl, and hobnails ring on stone. *Candlemen*. Boots, and the soft clink of the little brass tapers they carry, and a man’s voice saying, quite calmly, “Every door.”'
    ],
    fx: function (s) { s.omen(2); s.f.c_piers_dead = true; },
    next: 'e1_c4'
  },

  e1_c4: {
    place: 'Mudgate — a cooper’s cellar',
    text: [
      'There is one stair and one hatch. The cooper and his wife upstairs are asleep or praying or already dead of fear, and he has no way out but the sluice-drain — too narrow for a man and a body — and the sound of boots on the boards over his head is already moving toward the trapdoor.',
      'He has perhaps a minute. A lamp. A cooper’s adze on the wall, a short, hooked, heavy-bladed tool for shaping barrel-staves, wicked enough in a pinch. And a dead boy who does not need him anymore.'
    ],
    choices: [
      { tag: 'Ambush', label: 'Pinch out the lamp. Stand to the left of the hatch with the adze, in the dark. Let him come down the steps into nothing.', check: { stat: 'guile', dc: 8, pass: 'e1_c4a', fail: 'e1_c4b', label: 'Stillness' } },
      { tag: 'Fight', label: 'Take the adze and meet him at the foot of the stairs with the light behind you.', goto: 'e1_c5' }
    ]
  },
  e1_c4a: {
    set: { c_ambush: true },
    text: [
      'The dark is complete. He can hear his own pulse. The hatch lifts, and a spill of orange taper-light falls down the steps and into the room, and a hooded man comes down it slowly, with his back to the ladder and his eyes on the cold lamp, and has not yet seen what is waiting by the wall.'
    ],
    next: 'e1_c5'
  },
  e1_c4b: {
    text: [
      'His hand finds the lamp-wick but his fingers are slick and he fumbles it, and the little light gutters and flares just as the hatch lifts. A hooded man peers down the steps at him over a taper, and smiles, and says in a soft clerical voice, “Ah. *There* you are.”'
    ],
    next: 'e1_c5'
  },

  e1_c5: {
    place: 'Mudgate — a cooper’s cellar',
    text: [
      'He is a young Candleman, thin-faced, with a taper in one hand and in the other an iron snuffing-rod, a long, weighted, hook-ended tool for putting out lamps. Or, he has learned, for other things. Brother Hask. There is no malice in his face, only a kind of dreadful, patient diligence, like a gardener coming for a weed.',
      '“You have been seen tending the sick on an unlit night,” he says. “You are Dunmarch-born. You have the marsh in your speech. And you are standing over a body that is crusted with white.” He tilts his head. “It would be much kinder if you came out quietly.”'
    ],
    combat: {
      enemy: { name: 'Brother Hask', hp: 7, def: 8, cun: 8, atk: 1, dmg: 2, w: 'snuffing-rod', desc: 'A young Candleman with an iron rod and a sweet voice.' },
      pw: 'adze',
      stats: { strike: 'blade', feint: 'guile' },
      bonus: function (s) { return s.f.c_ambush ? 2 : 0; },
      win: 'e1_c6w', lose: 'e1_c6l'
    }
  },

  e1_c6w: {
    pov: 'corr', place: 'Mudgate — a cooper’s cellar',
    set: { c_hask_dead: 'corr' },
    text: [
      'It is a short, ugly, unglorious thing. When it is over, Brother Hask is sitting with his back against the wall and his mouth moving and his taper has rolled into the straw, where it is eating a slow patient black circle.',
      '“It would,” he says, with a kind of puzzled gentleness, “have been kinder.”',
      'Then he dies, and Corr stands in a cooper’s cellar with a dead boy on one side and a dead priest on the other and the oldest, most useful instinct of his people rising in him like cold water: *run*.'
    ],
    fx: function (s) { s.echo('Corr killed a Candleman in a Mudgate cellar the night the bell rang.'); },
    next: 'e1_c7'
  },
  e1_c6l: {
    pov: 'corr', place: 'Mudgate — a cooper’s cellar',
    set: { c_hask_dead: 'wystan' },
    text: [
      'The rod takes him across the ribs and the world goes white. He is on the floor and Brother Hask is above him, weighing the iron in his hands with a kind of sorrowful care, saying, “It will be quick, I promise you. The Lamp does not enjoy this.”',
      'Then the hatch *bursts*.',
      'It does not lift; it bursts, off its hinges, with a crash of splintered oak. Something comes down the steps in a rush of black cloak and steel. There is a single sound, wet and ugly, and Brother Hask falls sideways with a startled look and does not get up, and above Corr, in the light of a burning taper, there is a man with a sword in his hand and a Marcher’s badge on his shoulder, breathing hard.'
    ],
    next: 'e1_c7'
  },

  e1_c7: {
    place: 'Mudgate — a cooper’s cellar',
    text: function (s) {
      var by = s.f.c_hask_dead;
      return [
        by === 'corr'
          ? 'The hatch bursts off its hinges while he is still standing over the Candleman’s body.'
          : 'The man with the sword is still breathing hard from the stairs.',
        'He is big, young, bareheaded, with a fresh-split lip and a bruise coming up under one eye, a face that has never learned to hide what it thinks. The Marcher black. A bastard-sinister on his shield. He stops dead on the bottom step and he looks at the dead boy on the pallet, whom he was sent to find, crusted white and cooling. He looks at the dead Candleman. He looks at the bonesetter, the Dunmarch-born outlander, standing in the middle of it all, red to the elbows, with a ring in his fist and an adze at his feet.',
        'He is not stupid; that is the worst of it. He can see how it looks.',
        'Above them the street is full of boots, and a Candleman’s whistle is shrilling. There are, at the most, a few breaths.',
        '“Don’t,” says Ser Wystan Hale, very quietly, to no one in particular. His sword has not moved, but it has not lowered either. “Whatever you’re about to do. *Don’t.*”'
      ];
    },
    choices: [
      { tag: 'Surrender', label: 'Raise your hands slowly. Show him they’re empty.', goto: 'e1_c8', set: { c_stance: 'hands' } },
      { tag: 'Truth', label: 'Hold out the ring. “Prince Marden gave this to the boy. The boy gave it to me. It’s for Garrick.”', req: function (s) { return s.has('marden_ring'); }, goto: 'e1_c8', set: { c_stance: 'ring' } },
      { tag: 'Defiance', label: 'Stoop. Pick up the adze.', goto: 'e1_c8', set: { c_stance: 'adze' } }
    ]
  },

  e1_c8: {
    place: 'Mudgate — a cooper’s cellar',
    text: function (s) {
      var st = s.f.c_stance;
      return [
        st === 'hands' ? 'Your hands come up empty and trembling. The sword-point follows them, a hand’s breadth from your throat, and for a long second neither of you moves.'
          : st === 'ring' ? 'The ring lies in your open palm, gold, scratched, white along the band. You see the knight’s eyes drop to it — to the sun in splendor — and see the color go out of his face.'
          : 'The adze is heavy and cold, and it is a ridiculous weapon, and your hand closes on it like a promise. You see the knight’s weight shift, a fighter’s weight, onto the balls of his feet.',
        'Overhead the whistle shrills again, nearer. Boots are on the cooper’s stairs.',
        'Somewhere very far above them, in the dark tower of the Hand, a bell that has never rung has rung once, and the cooper’s dog is howling, and the dead boy lies with his white lips still parted, as if about to speak.',
        'And Wystan Hale, who has never in his life been in less control of an evening, says: “*Tell me what you saw.*”'
      ];
    },
    end: true, continue: 'End of the episode'
  }
});
