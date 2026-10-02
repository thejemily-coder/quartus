/* Episode 1 — Maren: Compline */
Q.part(1, {

  e1_m1: {
    place: 'Highgarrow — Cathedral of the Threefold Hand',
    text: [
      'Compline on the night of the Jubilee, and the Cathedral of the Hand is so full that the wax drips on the penitents.',
      'Sister Maren Vosk stands in the choir stalls with her psalter open to a page she is not reading and watches the nave fill with the realm’s best and worst: guildsmen in their chains, ladies of the court under veils, wool-merchants, knights, a hundred foreign envoys who have clearly never been inside a church with a ceiling this high. Three hundred candles burn above the altar. And over all of it hangs the Threefold Hand, forty feet of gilded oak: the first three fingers raised in blessing — Maker, Warden, Lamp — and the fourth, as always, folded down into the palm. *The Hidden Hand*, the catechism says. *That which God keeps for Himself.* She has recited that line ten thousand times. She has never before wondered what a god would need to keep.',
      'High above the vault, in the cathedral tower, the three great bells hang in their cradles — Maker, Warden, Lamp — and beside them a fourth cradle, empty of rope and clapper, as it has been for as long as there have been records. The Silent Bell, they call it. The bell that waits. A child’s joke, a mason’s oddity, a kind of fossil in the stone.',
      'At the Kiss of Peace, a bent, ink-stained hand takes hers in the crowd and presses something into it.',
      'Brother Anselm is seventy-one and nearly blind and has kept the Cathedral’s archive since before she took her vows. He is the one man in the building who has ever answered her questions as if they were questions. He does not look at her. He moves on down the row, murmuring, “Peace, Sister. Peace.”',
      'She waits until the Gloria to unfold the paper. His handwriting, always crabbed, is a spider’s scrawl tonight.',
      '*The archive. After the third bell of night. Bring your key. Tell no one — not even the Chandler.*'
    ],
    choices: [
      { tag: 'Secrecy', label: 'Burn the note in the nearest candle. Tell no one.', goto: 'e1_m2' },
      { tag: 'Obedience', label: 'Tell High Chandler Venn, as the Rule requires of any Sister who is asked to keep a secret from her superiors.', goto: 'e1_m1v', set: { m_told_venn: true }, rel: { venn: 1 } }
    ]
  },
  e1_m1v: {
    text: [
      'High Chandler Orsolo Venn is seated in the first stall of the Order of the Lamp, a spare, soft-spoken man of fifty with a tonsure like a pale coin and a way of listening that makes you feel unburdened. He is the head of the Candlemen: the Lamp’s inquisitors, the men who carry the taper to the hedge-witch’s door and to the heretic’s pyre. He has never once, in her hearing, raised his voice.',
      'She whispers it in the lull before the Nunc Dimittis. He nods slowly, and his eyes are warm and tired. “How tender of Anselm,” he says. “Go, child. He is old, and the old grow fond of mysteries. Listen to what he shows you, and come to me after. We will not scold him.” He touches her sleeve, lightly. “You were right to tell me.”',
      'It is only on the stair, afterward, that she realizes he did not ask her what it was about.'
    ],
    next: 'e1_m2'
  },

  e1_m2: {
    place: 'The Cathedral archive — the lower stacks',
    text: [
      'The Cathedral’s archive is a long vaulted cellar under the north transept, and it is always cold, and tonight it smells of beeswax and old vellum and something under both, like wet stone. Anselm is waiting at the end of the third aisle in the light of one candle. He has the look of a man who has not slept, and has not been warm, and has not decided whether to be afraid.',
      '“Lock the door, Sister. Both bolts.”',
      'She locks it. He does not speak until she has done so. Then he lays a single sheet of vellum on the reading-desk, torn at one edge as though ripped from a bound book, and holds the candle over it with a trembling hand.',
      'It is a page from the *Roll of the Saints*, the oldest of the Church’s calendars. Three names are written in a monk’s clear hand, each with a title and a date.',
      '*Hollis the Meek, Year 7.*',
      '*Brannoch of the Marsh, Year 107.*',
      '*Saint Ysmay the Wept, Year 207.*',
      'Beneath the third name, the line below is torn clean away. Above the three names, four words in faded red: *The Vigils of the Hand.*',
      '“A hundred years apart,” whispers Anselm. “Every one. Each time a saint — each time a *martyr*, recorded in the canon, with feast days, with relics. And each time the following year the harvest in three shires fails and then *recovers*, and a stipend is paid to this Cathedral for it. I found the entry in a ledger forty years ago and thought it a clerk’s joke. I have spent forty years finding it was not.” His blind eyes find hers. “There is a place for a fourth name, Maren. Under the third. The page is torn there, and I do not know *who* tore it. I think someone has been tearing it for three hundred years.”',
      'The candle gutters. She does the sum without wanting to. Seven. A hundred and seven. Two hundred and seven.',
      'She does not say the next number. It is already in the room.'
    ],
    clue: { roll_dates: 'A torn page of the Roll of the Saints, headed “The Vigils of the Hand”: three martyrs recorded at Year 7, 107 and 207 — a hundred years apart. The next name has been torn off.' },
    choices: [
      { tag: 'Wit', label: 'Ask what he is afraid of — and why he is asking *you*, not the Archprelate.', goto: 'e1_m2a' },
      { tag: 'Faith', label: '“Brother. Whatever it is. Show me.”', goto: 'e1_m3' }
    ]
  },
  e1_m2a: {
    clue: { anselm_retired: 'Brother Anselm was to be “retired” to a country cell tomorrow, on the Archprelate’s order, after the Jubilee.' },
    text: [
      'Anselm’s laugh is thin as a thread. “The Archprelate sent me a letter this morning thanking me for my forty years of service. I am to retire to the cell at Thornmere, tomorrow, after the Jubilee. A kind letter. It will be a very quiet cell.” He touches the page. “I am not afraid of the Archprelate. I am afraid that I have been right. Come. I will show you the thing that the page is about, and then you can decide whether I am an old fool.”'
    ],
    next: 'e1_m3'
  },

  e1_m3: {
    place: 'The cathedral tower — the bell-chamber',
    text: [
      'It is four hundred and twelve steps to the bell-chamber. Anselm climbs them without stopping, one hand on the wall, one hand clutching the page to his chest, a blind old man who knows every stone in his body’s bell. Maren climbs behind him with the candle, counting out of habit. By the three hundredth step the walls have begun to *hum*, a faint, high singing in the stone, like a finger on the rim of a glass.',
      'The bell-chamber is open to the night on four sides, louvered with slats of black oak. The wind is cold and smells of woodsmoke and sea. The city lies beyond like a spilled treasure; the Jubilee roars far below.',
      'Maker, Warden, Lamp hang in their great cradles, three green-bronze mouths each as wide as a cart. The ropes dangle to the floor below.',
      'And the fourth.',
      'It hangs a little apart, in its own cradle, in the darkest corner. It is bigger than the others. It is older: she knows it before she can say why. The metal is nearly black and webbed with verdigris like a drowned thing; no rope comes from it, and when she lifts the candle and looks up into the hollow of the mouth she sees where the clapper was, a stub of corroded iron, cut clean.',
      '“Look at the lip,” says Anselm. “Where I cannot.”',
      'Cast into the rim of the bell, in letters worn almost smooth by three centuries of weather, is a single line of Old Tongue.',
      '*QUARTUS TACET DONEC*',
      'She has enough Old Tongue to read it. She does, and her mouth goes dry.',
      '“*The Fourth is silent until*—” Maren says.',
      'Beneath the word *donec*, the bronze has been chiseled away. Not worn. *Chiseled*. A deep, deliberate, careful scar where the rest of the sentence should be.',
      'The old man’s hand is on her arm. “It is nearly midnight,” he says. “I have not yet decided whether I am afraid of what happens at midnight, or of what will not.”'
    ],
    clue: { quartus_bell: 'The silent fourth bell in the Cathedral tower is cast “QUARTUS TACET DONEC” — “The Fourth is silent until—” — and the rest of the sentence has been chiseled off.' },
    fx: function (s) { s.omen(1); },
    next: 'e1_m4'
  },

  e1_m4: {
    place: 'The cathedral tower — the bell-chamber',
    text: [
      'It begins as a pressure.',
      'The air in the bell-chamber thickens, the way a room thickens before a storm. The wind, which was loud, stops, not dying away but stopped like a thing that has been told to be quiet. The three great bells begin to hum, softly, in sympathy, a chord she can feel in her fillings. The candle-flame leans toward the fourth bell and does not move back.',
      'And the Silent Bell, with no rope, with no clapper, with no hand on it in all the three hundred years of its keeping, *rings*.',
      'It is not a sound. It is a *fact*, delivered to the bones. It passes through the tower, through the stones, through her body like a nail through cloth. A single deep tone, enormous and unhurried, with something under it like a great breath being drawn. Below, on the roofs, ten thousand drunken people go silent. Then, in the cold quiet that follows, every dog in Highgarrow begins to howl.',
      'Brother Anselm is standing perfectly straight. His blind eyes are wide open. His mouth is moving.',
      '“One,” he says.',
      'And then, with horrifying calm, the old man’s knees give way, and he falls into her arms.'
    ],
    fx: function (s) { s.omen(1); s.f.bell_one = true; },
    next: 'e1_m5'
  },

  e1_m5: {
    place: 'The cathedral tower — the bell-chamber',
    text: [
      'He weighs almost nothing. His face has gone the grey of tallow, and along his lips there is a *bloom*, a white, glittering, crystalline crust, spreading as she watches, like frost across a window. She touches it without thinking. It is wet, and gritty, and tastes — when she puts her finger to her tongue in some mad reflex of the nursery — of the sea.',
      'He is dying. She has sat at enough deathbeds to know. Below, boots are already ringing on the stairs, many boots, and light, and the voices of men in a hurry. The page is still in his clenched fist. There are about forty heartbeats of time, and there is only enough in them for one thing.'
    ],
    choices: [
      { tag: 'Mercy', label: 'Kneel. Hold his head. Say the Warden’s Rite for the dying and ask him, gently, what he wants you to know.', goto: 'e1_m5a', set: { m_page_in_fist: true } },
      { tag: 'Secret', label: 'Pry the page out of his fingers before the Candlemen arrive.', goto: 'e1_m5b' }
    ]
  },
  e1_m5a: {
    set: { m_last_words: true },
    clue: { anselm_owed: 'Brother Anselm’s dying words: “It’s not the dead, Maren. It’s owed. Don’t let them pay it with—” He did not finish.' },
    text: [
      'She says the words. She has said them over thirty-one people and she has never said them more steadily. *Warden at the gate. Warden at the wall. Let the road be short, and the door be open, and the one who waits be kind.*',
      'His mouth works. She bends her ear to the white crust.',
      '“It isn’t the dead,” he whispers. The salt is cracking on his lips. “It’s *owed*, Maren. It’s been owed all along. Don’t let them pay it with—”',
      'His hand loosens on the page. His eyes, which have been seeing nothing for ten years, fix on something behind her left shoulder, and she knows without looking that there is nothing there, and she is afraid to look.',
      'Then Brother Anselm is not there anymore.'
    ],
    next: 'e1_m6'
  },
  e1_m5b: {
    set: { m_has_page: true },
    give: { roll_page: 'The torn page of the Roll of the Saints — “The Vigils of the Hand.” Three names, three dates, a hundred years apart.' },
    text: [
      'It is a monstrous thing to do and she does it quickly. The old fingers are stiff and cold as cord. She works them open one at a time, and the page comes free with a soft dry sound, and she is already pushing it deep into the folds of her habit when the old man draws his last breath and says something that is not quite a word.',
      'She will spend a long time trying to decide what it was. *Owed*. *Own*. *Alone.* In the end she has a feeling it was her name.'
    ],
    next: 'e1_m6'
  },

  e1_m6: {
    place: 'The cathedral tower — the bell-chamber',
    text: function (s) {
      return [
        'The Candlemen come up the last turn of the stairs with lamps and tapers, a dozen of them, grey-hooded, quiet. It is the quiet that frightens her. They are not shouting. They do not ask what has happened. They arrive as if a bell had rung that they had all been waiting for.',
        'High Chandler Venn is the last man up. He kneels at once beside Anselm’s body and, with unmistakable tenderness, closes the old man’s staring eyes with two fingers and murmurs the Lamp’s farewell. There is nothing performed in it. He loved him; she can see it. It does not make her feel any safer.',
        s.f.m_page_in_fist
          ? 'The page is still in the dead man’s fist. Venn’s hands are an inch from it.'
          : 'She can feel the page pressed against her ribs, a small hard rectangle like a second heart.',
        '“You were with him, Maren,” Venn says, gently, without looking up. “When it rang.”'
      ];
    },
    choices: [
      { tag: 'Sleight', label: 'While Venn is closing Anselm’s eyes, slip the page out of the dead man’s hand.', req: function (s) { return s.f.m_page_in_fist; }, check: { stat: 'guile', dc: 10, pass: 'e1_m6k', fail: 'e1_m6l', label: 'Sleight of hand', passFx: { give: { roll_page: 'The torn page of the Roll of the Saints — “The Vigils of the Hand.” Three names, three dates, a hundred years apart.' } } } },
      { tag: 'Yield', label: 'Say nothing. Let him find it.', req: function (s) { return s.f.m_page_in_fist; }, goto: 'e1_m6l' },
      { tag: 'Obedience', label: 'Take the page from your habit and hand it to him. “He gave me this. I don’t understand it.”', req: function (s) { return s.has('roll_page'); }, goto: 'e1_m6g', rel: { venn: 2 } },
      { tag: 'Guile', label: 'Tell him Anselm collapsed at the bell and said nothing. Keep the page.', req: function (s) { return s.has('roll_page'); }, check: { stat: 'guile', dc: 9, pass: 'e1_m6k', fail: 'e1_m6l', label: 'Guile' } },
      { tag: 'Faith', label: '“He confessed to me, Chandler. The seal binds me, even from you.”', req: function (s) { return s.f.m_last_words; }, check: { stat: 'faith', dc: 9, pass: 'e1_m6s', fail: 'e1_m6l', label: 'Faith' } }
    ]
  },

  e1_m6k: {
    set: { m_page_kept: true },
    fx: function (s) { s.addRel('venn', 0); },
    text: [
      'Venn finishes the farewell. He does not look at the old man’s hand, or at her habit. He rises with the slow, careful grace of a man whose knees are older than he is, and he smiles at her, and it is a very kind smile.',
      '“You are shaking,” he says. “Go and sit, child. Sister Perpetua will bring you wine. We shall speak in the morning, once you have had time to grieve.”',
      'It is not a dismissal. It is a *promise*. She walks down four hundred and twelve steps with a stolen page against her ribs, and every Candleman on the stair stands aside to let her pass, and every one of them watches her go.'
    ],
    next: 'e1_m7'
  },
  e1_m6l: {
    set: { m_page_lost: true, m_suspected: true },
    fx: function (s) {
      s.addRel('venn', -1);
      if (s.has('roll_page')) s.take('roll_page');
    },
    text: function (s) { return [
      'Venn finishes the farewell. Then, gently, as one might straighten a child’s collar, ' + (s.f.m_page_in_fist ? 'he opens the dead man’s fist' : 'he folds back the edge of her habit') + '. The page comes out into the lamplight, and he reads it, all of it, with the same patient attention he gave the old man’s eyes.',
      '“Ah,” he says softly. “He found this.”',
      'He folds it into his sleeve. His face does not change.',
      '“You are shaking,” says Chandler Venn. “Go and sit, Maren. We shall speak in the morning.”',
      'There is no unkindness in it. That is the terrible part. She has been judged by a man who was never going to be unkind.'
    ]; },
    next: 'e1_m7'
  },
  e1_m6g: {
    set: { m_page_given: true },
    fx: function (s) { s.take('roll_page'); },
    text: [
      'Venn takes the page between two fingers, as though it might still be warm. He reads it. He reads it for rather longer than there is on it to read.',
      '“Thank you,” he says. “You have done the Lamp a service tonight. And Brother Anselm one, I think.” He folds it into his sleeve. “Not everyone would have known to bring it to me. Rest, child. You are not in any difficulty.”',
      'It is, she thinks, the second time tonight that he has said exactly what she most wanted to hear.'
    ],
    next: 'e1_m7'
  },
  e1_m6s: {
    set: { m_seal: true },
    fx: function (s) { s.addRel('venn', 1); if (s.f.m_page_in_fist) s.f.m_page_lost = true; },
    text: [
      'For a long moment the High Chandler studies her, and she holds the look as steadily as she can. The Seal of the Confessional is the oldest of the Church’s laws. Even a Lord of the Lamp must bow to it.',
      '“Of course,” says Venn at last, quietly. “A seal is a seal. I would not ask you to break it.” He rises. “The *paper*, however, is the Church’s property. A seal covers words, not vellum.” He opens the old man’s fist, and takes the page, and folds it into his sleeve. “You are very quick, Sister Maren. I shall remember that.”',
      'It is the first time he has ever said her name as if it were an entry in a ledger.'
    ],
    next: 'e1_m7'
  },

  e1_m7: {
    place: 'The Cathedral — the Sisters’ cloister',
    text: function (s) {
      return [
        'The cloister garden is cold, and the fountain has stopped. She sits on its rim in the dark and watches the Jubilee go silent in the streets below, the bonfires guttering, the drunken songs dying one by one, like children who have remembered the word *bedtime*.',
        'Seven. A hundred and seven. Two hundred and seven.',
        s.f.m_page_kept ? 'The page is a small, light weight against her ribs. She does not take it out. She does not need to; she has it by heart.' : 'The page is gone. She does not need it. She has it by heart.',
        'The Church teaches that there are three Hands and a Hidden One. It teaches that the saints die for the realm. It teaches that the Silent Bell is God’s reserve, the sign that He holds something back. She has never once thought that a god’s reserve might have a *price*, or a *date*, or that it might be written in a ledger.',
        'It is the three hundred and seventh year of the Crown. She does not do the arithmetic aloud. She does not have to.',
        'Beyond the cloister wall, in the lower city, someone is singing. A child’s voice, thin and sweet and counting something out on the cold stones.'
      ];
    },
    end: true, continue: 'Continue'
  }
});
