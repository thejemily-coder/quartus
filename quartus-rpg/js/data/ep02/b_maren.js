/* Episode 2 — Maren: The Chandler's Kindness */
Q.part(2, {

  e2_m1: {
    place: 'The Cathedral — the chapter-house of the Lamp',
    text: function (s) {
      return [
        'They bury Brother Anselm at dawn, in the clerics’ yard, under a plain stone, with Venn himself reading the Lamp’s farewell. There are fewer mourners than there should be. A good many of the Cathedral’s clerks have not come to work this morning, and the ones who have look as though they have been awake all night, listening.',
        'Afterward the High Chandler asks her to walk with him. He is gentle about it. He is always gentle. The chapter-house of the Lamp is a long low room with shuttered windows, a rack of snuffing-rods along one wall, and an enormous plain table, and on the table, laid out like exhibits, are the contents of a dead man’s desk.',
        s.f.m_page_given ? '“I want you to know,” says Venn, “how much it meant to me that you brought me the page. It is not an easy thing to bring your superior a grief.”'
          : s.f.m_page_lost ? '“I read the page you did not give me,” says Venn, quite kindly. “I understand why you didn’t. I should like you to know I do not hold it against you.”'
          : s.f.m_seal ? '“The seal is the seal,” says Venn. “I respect it, and I have not forgotten it.”'
          : 'He does not mention the tower. That, somehow, is worse than if he had.',
        '“Brother Anselm kept the archive for forty-one years,” he says. “It requires a Keeper. The Archprelate has not been told yet, but I am confident I can persuade him. I should like it to be you.”',
        'He lets that settle. The shutters leak slats of light across the table, striping his thin hands.',
        '“A great many frightened people are coming into the city, Maren. Yesterday’s *wonder* has frightened them, and the Church must be a lamp. I need someone in the archive who understands that some knowledge is *medicine* and some is *poison*, and that a good physician does not hand either out to the sick.” He smiles. “And I would be grateful if you would let me see your daybook, now and then. A courtesy. For your protection.”'
      ];
    },
    choices: [
      { tag: 'Accept', label: 'Accept the Keeper’s seal. A key and a title are worth a little supervision.', goto: 'e2_m2', set: { m_keeper: true }, rel: { venn: 2 }, echo: 'Maren accepted the Keeper’s seal from High Chandler Venn.' },
      { tag: 'Bargain', label: 'Accept — if you may conduct Anselm’s funeral rites for the Sisters yourself, in the old Lamp-form, and Venn does not read your daybook.', check: { stat: 'guile', dc: 9, pass: 'e2_m1b', fail: 'e2_m1c', label: 'Guile' } },
      { tag: 'Refuse', label: 'Decline. You are a confessor, not a clerk. Say so, respectfully.', goto: 'e2_m1d', rel: { venn: -1 }, set: { m_refused: true } }
    ]
  },
  e2_m1b: {
    set: { m_keeper: true, m_daybook_safe: true },
    fx: function (s) { s.addRel('venn', 1); s.echo('Maren became Keeper of the archive — on her own terms.'); },
    text: [
      'Venn considers her for a long moment, and then, to her surprise, smiles — a real smile, tired and warm.',
      '“*Brother Anselm would have liked you to say that,*” he says. “Done. Both. I will keep my curiosity to the *minutes*, and you may keep your daybook.” He slides a ring of iron keys across the table. “Do try not to make me regret it.”'
    ],
    next: 'e2_m2'
  },
  e2_m1c: {
    set: { m_keeper: true },
    fx: function (s) { s.addRel('venn', 0); },
    text: [
      '“No,” says Venn, still smiling, still gentle. “I do not think so. The funeral is done. The daybook is the Church’s concern, not yours.” He does not push the keys at her; he lets them lie on the table between them, like a question that has been answered for her. “But the key is yours, Keeper Vosk. Make good use of it.”',
      'She takes the keys. It is only on the stairs that she realizes she has taken them.'
    ],
    next: 'e2_m2'
  },
  e2_m1d: {
    text: [
      'There is a long quiet.',
      '“I see,” says Venn, and for the first time there is something cooler under the warmth, like ice under a river. “Then I shall ask another. And I must ask you, as your friend, to stay out of the lower stacks. They are no place for a woman of conscience. They are very cold.” He touches her sleeve. “*Do* take care, Sister.”',
      'She takes it for a courtesy. She is not sure that it is.'
    ],
    next: 'e2_m2'
  },

  e2_m2: {
    place: 'The Cathedral archive — the lower stacks',
    text: function (s) {
      var key = s.f.m_keeper;
      if (s.visits('e2_m2') > 1) return [s.f.m_read_rhyme && s.f.m_read_relic ? 'Two shelves read. The lamp is burning low, and somewhere above, a stair is creaking.' : 'The lamp gutters in the dead air of the stacks. There is still time for one more shelf, or for no more.'];
      return [
        key ? 'With the key, the lower stacks are only cold. She turns the iron in the lock and the door that was always locked swings back, and the smell of the sealed room comes out to meet her: dust, vellum, tallow, and under all of it the damp mineral breath of a place that has not been breathed in for a very long time.'
          : 'The lock is old and the key is not hers. It takes her the better part of a quarter hour with two hairpins and a stolen chapter-house taper, and when it finally gives, she realizes she has been holding her breath.',
        'The lower stacks run beneath the whole north transept, and the shelves are of black oak, so old they have gone almost to stone. She had always been told they held the Church’s *dead papers*, the accounts of closed parishes and the proceedings of old councils. She understands within a minute that this was a courtesy.',
        'She has a lamp, and a morning. There are three places Anselm would have gone.'
      ];
    },
    fx: function (s) { if (!s.f.m_keeper) { s.f.m_broke_in = true; } },
    choices: [
      { tag: 'The Rhymes', label: 'The nursery-books and folk-collections — the heretic shelf, where the Church kept what it could not burn.', req: function (s) { return !s.f.m_read_rhyme; }, goto: 'e2_m3a', set: { m_read_rhyme: true } },
      { tag: 'The Relics', label: 'The Reliquary Register — the catalogue of every saint’s bones the Cathedral has ever held.', req: function (s) { return !s.f.m_read_relic; }, goto: 'e2_m3b', set: { m_read_relic: true } },
      { tag: 'Wait', label: 'That is enough for one morning. Someone has just come down the stairs.', req: function (s) { return s.f.m_read_rhyme || s.f.m_read_relic; }, goto: 'e2_m4' }
    ]
  },
  e2_m3a: {
    clue: { rhyme_four: 'The Church’s counting-rhyme ends “four for the field where the barley grows.” An older Dunmarch variant, in Anselm’s own marginal hand, ends: “four for the one who is sleeping below — count him last, and don’t let him know.”' },
    text: [
      'The heretic shelf is a single low case, bound in chains that Anselm cut years ago, and it is full of children’s books.',
      'They are the cheap kind, hand-copied for hedge-schools, with crude ink drawings of crowns and swords and lamps in the margins. The Church sings the counting-rhyme at every harvest festival: *one for the crown, and two for the sword, three for the lamp, and the Lord is the Lord, four for the field where the barley grows, and a good year’s harvest for all God knows.*',
      'But in the third book down, in Anselm’s own crabbed hand, in the margin, in a different color of ink, are four other lines.',
      '*Four for the one who is sleeping below — count him last, and don’t let him know.*',
      'Under it, in a smaller hand, as though to himself: *Dunmarch. Older than the barley. The Church sang this for two hundred years before it was ordered changed. Who ordered it? Why does a god’s reserve need a sleeper?*',
      'She sits down on the cold floor with the book in her lap and is surprised to find she is crying.'
    ],
    next: 'e2_m2'
  },
  e2_m3b: {
    clue: { ysmay_salt: 'The Reliquary Register: the bones of Saint Ysmay the Wept (martyred Year 207) were examined once, in Year 208 — and the reliquary was found full of salt. Never displayed since.' },
    text: [
      'The Reliquary Register is a great calf-bound ledger with a clasp, kept on a lectern near the door, and its entries are the dry, loving, precise Old Tongue of men who have counted the bones of the saints for a thousand years. She turns pages. *Hollis the Meek: three finger-bones and a rib, in silver. Brannoch: the left thumb, in crystal, displayed on the Feast of the Lamp.*',
      'And then: *Ysmay the Wept, martyred in Year 207, in the Vigil. Reliquary sealed Year 207. Opened by order of the Archprelate Aurelian, Year 208, for the translation of her relics to the north transept.*',
      'In a different hand, much smaller, much later, beneath: *The reliquary was found to contain no bone. Not ash. Not dust. It was full to the lid with salt. Grey, coarse, crystalline. Archprelate Aurelian forbade further inquiry. The reliquary was re-sealed in the north crypt, where it remains.*',
      'She reads the entry three times. Below it, in the same small hand: *The first two reliquaries, I am told, were also salt.*',
      'There is no signature. There is a mark beside the line, in the margin, a tiny careful ink drawing of a bell.'
    ],
    next: 'e2_m2'
  },

  e2_m4: {
    place: 'The Cathedral archive — the lower stacks',
    text: [
      'It is not Venn. She knows the step before she sees the man; it is soft, hesitant, unaccustomed to stairs that do not have a carpet. Lamplight finds a pale face in a cleric’s plain black. Prince Edric Verrin is forty-seven and looks twice that this morning. He has the Verrin cheekbones and none of the Verrin bulk, and the long, drawn, luminous look of a man who has been fasting for three days and has stopped noticing.',
      '“Sister Vosk,” he says. “I beg your pardon. I was told Brother Anselm kept something for me.”',
      'She recognizes him with a jolt. The Church’s candidate. The gentlest of the king’s three living children and, if the court is to be believed, the one the old man likes least. He is carrying a small waxed packet, tied with black thread.',
      '“He wrote to me,” says Edric. “Last week. I had asked him a question, after Marden died. He said he would answer in person, after the Jubilee. He did not say why it could not be in a letter.” He looks down at the packet in his hands. “It came this morning. It is not an answer. It is only a key.”'
    ],
    choices: [
      { tag: 'Confide', label: 'Tell the Prince everything: the page, the tower, the bell, the dates.', goto: 'e2_m5c', set: { m_ally: 'edric' }, rel: { edric: 2 } },
      { tag: 'Wit', label: 'Ask the Prince what he asked Anselm. See what he is willing to say before you decide what you are.', goto: 'e2_m5a' },
      { tag: 'Guard', label: 'Say nothing of what you know. Tell him you are only the new Keeper, and that you are very sorry for his loss.', goto: 'e2_m5b', set: { m_ally: 'none' } }
    ]
  },
  e2_m5a: {
    clue: { edric_warning: 'Prince Edric: each of the king’s children was told privately, at sixteen, that there would come a year when “the realm would be asked.” None understood. Marden took it hardest, and went to the Archprelate for an answer. Marden died.' },
    text: [
      'Edric sits down on a stack of unread ledgers with a weariness he hasn’t the energy to hide.',
      '“When I was sixteen,” he says, “my father sent for me. Alone. He said nothing about the succession, or my mother, or the Church I was to be given to. He took my hand, which he had never done, and said that there would come a year when *the realm would be asked*. And I would know it when it came. He told Garrick, the same. And Maud. And Marden — Marden was the one who could not let it be.” He turns the black-threaded packet in his fingers. “Marden went to the Archprelate to ask what it meant. That was, I think, a month before the hunt. He came back looking like a man who has been shown his own grave, and said only: *Edric, it is counting.*”',
      'He is quite calm. He is also, she sees, trembling very slightly all over, as if a wind were blowing that only he could feel.',
      '“I do not know what the question is,” he says. “I only know that Marden was the first of my father’s children to ask it, and he is dead. And I am afraid I am the next.”'
    ],
    choices: [
      { tag: 'Confide', label: 'Tell him what you have seen. He has earned it.', goto: 'e2_m5c', set: { m_ally: 'edric' }, rel: { edric: 2 } },
      { tag: 'Guard', label: 'Say you are sorry. Say you will pray for him. Tell him nothing else.', goto: 'e2_m5b', set: { m_ally: 'none' }, rel: { edric: 1 } }
    ]
  },
  e2_m5b: {
    text: [
      'He sees it. He is a gentle man but he has lived all his life at court, and he knows what it looks like when someone holds a door shut with her back. He does not push.',
      '“I understand,” says Edric, with a tired smile. “It is wise. I would not trust a prince either.” He rises, leaves the packet on the lectern. “Keep the key. If you decide you can say what you know, I am at the Hospice of Saint Orrin, at the foot of the hill, with the sick. I go there when I cannot bear the palace.”',
      'He leaves her alone with the lamp and the key and the cold, which is, she thinks, rather what she asked for.'
    ],
    fx: function (s) { s.give('anselm_key', 'A small iron key from Brother Anselm, left for Prince Edric — it opens something in the north crypt.'); },
    next: 'e2_m6'
  },
  e2_m5c: {
    clue: { anselm_key: 'Anselm’s key opens the north crypt, where the reliquaries of the saints are kept — the third of them is Ysmay’s.' },
    fx: function (s) { s.give('anselm_key', 'A small iron key from Brother Anselm, left for Prince Edric — it opens something in the north crypt.'); },
    text: [
      'She tells him. All of it: the note at Compline, the torn page, the three dates a hundred years apart, the bell with no clapper and the chiseled word, the sound that was not a sound, the old man’s last breath. It takes a long time, because she keeps stopping to be sure she has the numbers right.',
      'Edric does not interrupt. When it is over he sits very still, and then he does something she does not expect: he kneels, there on the cold stone floor of the archive, and puts his forehead against the edge of the reading desk, and says a prayer under his breath in the old Lamp-form, a prayer she has never heard a prince say.',
      '“Thank you,” he says, when he looks up. His eyes are wet. “I thought I was going mad.” He gives her the packet. “Take this. If it opens something, I would rather you opened it than I. I am a great deal better at kneeling than at going down stairs.”'
    ],
    next: 'e2_m6'
  },

  e2_m6: {
    place: 'The Cathedral — the north gallery',
    text: function (s) {
      return [
        'The bells ring Sext and nobody comes. That is how she knows something is wrong. The Cathedral is never empty at midday.',
        'She goes up to the north gallery, the long open arcade that overlooks the great square, and stops at the rail with her hand over her mouth.',
        'They are filling the square. From every street. Barefoot, in nightshirts and shifts and, here and there, in a good doublet with the points undone, as if a man had been taken from his dinner. Farmers from the east. Children. A whole choir of old women, shawled, with their hands folded. They come in without jostling and arrange themselves in neat rows, in the sun, facing the tower, and they stand.',
        'Nobody speaks. Nobody moves. The wind stirs their loosened hair.',
        s.f.miller_held ? 'At the front, a lean man in a miller’s apron is on his knees beside a woman whom he is holding up by the arms. He is begging a Candleman for water. The woman’s eyes are open, and she is looking up at the bell-tower with an expression of fond, bottomless patience.'
          : 'At the front stand a miller and his wife, hand in hand, wet to the knee. He is awake. His face is the color of tallow. She is not.',
        'High Chandler Venn is on the Cathedral steps, with his Candlemen in a double line behind him. His thin hands are folded. He is looking at the crowd with the awful attentive tenderness of a shepherd counting his flock.'
      ];
    },
    choices: [
      { tag: 'Descend', label: 'Go down into the square.', goto: 'e2_m7', set: { m_in_square: true } },
      { tag: 'Wait', label: 'Stay in the gallery and watch. Count.', goto: 'e2_m7', set: { m_counted: true } }
    ]
  },
  e2_m7: {
    place: 'The Cathedral — the great square',
    text: function (s) {
      return [
        s.f.m_in_square ? 'Down among them the silence is a thing she can feel, like heat from a stove. The salt-smell is faint but unmistakable. She walks between the rows and none of them turns to look at her.'
          : 'She counts them from the gallery with a scribe’s trained eye, in tens, and she gets to nine hundred and eighty before the number stops meaning anything.',
        'She counts the lips. Many of them are moving. Not together. One by one, they say the same thing, in the thin glassy voice of sleepers. She cannot hear it at first. Then a gust drops, and the whole square, nine hundred voices, perhaps a thousand, speaks as one.',
        '“*Two.*”',
        'It is not loud. It is perfectly distinct. It goes through the packed square like a wind through standing grain, and the Candlemen on the steps, who have been quite calm until now, take a single step back as a body.',
        'Chandler Venn alone does not move. He bows his head slowly, as if in a church. As if he had been expecting it.',
        'Maren Vosk stands with Anselm’s key in her fist, and knows that if the Church has been keeping a secret for three hundred years, it is *not* the Church that is in charge of it.'
      ];
    },
    fx: function (s) { s.omen(1); s.f.walking_two = true; },
    end: true, continue: 'Continue'
  }
});
