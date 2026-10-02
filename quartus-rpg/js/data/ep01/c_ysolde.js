/* Episode 1 — Ysolde: The Salt Cellar */
Q.part(1, {

  e1_y1: {
    place: 'Highgarrow — the Great Hall, Jubilee Feast',
    text: [
      'There are eight hundred places laid in the Great Hall and Lady Ysolde Carrow has counted every one, because that is what she does when she is frightened. It steadies her. Eight hundred places. Sixty-one tables. A hundred and four candelabra, three-quarters of them lit with beeswax that Carrow wool paid for.',
      'The Princess Maud’s hand is on her wrist. Not gripping — Maud Verrin does not grip; Maud *rests*, the way an anchor rests on the bed of a harbor.',
      '“Two things before the king is carried in,” says the Princess. She is fifty-four and as tall as a man, with a face like a closed door and hair braided in a single heavy rope the color of iron filings. She has never in her life raised her voice. She has never had to. “Lord Perrin Ashby has failed to deliver the salt-revenue accounts for two quarters. He is, I gather, very fond of dining beside beautiful widows. And Ser Corbin Dray lost to a bastard in front of the whole realm this morning, and is drinking in his chambers, and I would very much like to know what he says when he is drunk and humiliated and *grateful* to be comforted.”',
      'She does not blink on the last word.',
      '“Master Hargreave the apothecary sends his regards, by the way. He is well. He asks if you are.”',
      'Ysolde’s smile does not move. She has had a great deal of practice. Master Hargreave sold her a very small bottle two winters ago, which her second husband, a large and charmless man called Lord Thorne, swallowed in a cup of mulled wine and died of in a most convenient fashion. She has never once told anyone. The Princess has known from the beginning.'
    ],
    fx: function (s) { s.f.y_leash = true; s.meet('maud'); },
    choices: [
      { tag: 'Obey', label: '“As ever, your Grace.” Bow your head and let the leash lie slack.', goto: 'e1_y2', rel: { maud: 1 } },
      { tag: 'Bargain', label: '“And when I deliver, the apothecary’s letter returns to me. Not in a year. Tonight.”', check: { stat: 'guile', dc: 10, pass: 'e1_y1b', fail: 'e1_y1c', label: 'Guile' } },
      { tag: 'Ambition', label: 'Smile and say nothing. Think, very calmly, about the Princess’s throat, and about what the realm would look like if she were not standing in it.', goto: 'e1_y2', set: { y_regicidal: true } }
    ]
  },
  e1_y1b: {
    set: { y_bargain: true },
    fx: function (s) { s.addRel('maud', 1); },
    text: [
      'Something moves behind the Princess’s eyes — not anger; calculation, appreciation, the dry satisfaction of a woman who has been told the price and finds it fair.',
      '“Not tonight,” Maud says. “But before harvest-tide. If what you bring me is worth more than the paper.” She pats Ysolde’s wrist twice, like a dog’s flank. “You have a spine, Carrow. I had wondered where you kept it.”'
    ],
    next: 'e1_y2'
  },
  e1_y1c: {
    fx: function (s) { s.addRel('maud', -1); },
    text: [
      'The Princess looks at her for a long, quiet, measuring moment.',
      '“I do not trade with the leash, Ysolde,” she says, with no heat at all. “It is not an offer. It is the weather.” She releases the wrist at last. Ysolde discovers it has gone numb to the fingertips. “Go and be useful.”'
    ],
    next: 'e1_y2'
  },

  e1_y2: {
    place: 'Highgarrow — the Great Hall, Jubilee Feast',
    text: [
      'The trumpets blow, and eight hundred people rise, and the old man is carried in.',
      'He is brought in a chair on poles, like a relic, four stewards to bear him. They have wrapped him in furs although it is high summer and the hall is an oven. What shows of him is yellowed and waxen and tiny, the skin on the backs of his hands so thin it looks like candle-paper; but his eyes are open, wide-set and wet and the color of slate after rain, and they move.',
      'Behind the chair walks a thin man in grey, clutching a leather satchel against his ribs like a priest with a host. Physician Quill, who has outlived three King’s Physicians and will, if the court is right, outlive the king. Behind *him* walks a servant bearing a silver salt-cellar the size of a man’s fist, carried in both hands as if it were a sleeping child.',
      'It is set before the king with a ritual care that no one comments on. Quill leans in, murmurs. The king’s stewards do the rest. And Aldous the Long, who has eaten nothing in public for a decade, takes a pinch of whatever is in the cellar between his thumb and forefinger and touches it to his tongue, the way another man might sip a very good wine.',
      'As the high table seats, a steward touches Ysolde’s arm. Carrow salt has kept the king’s table for four reigns; she has been placed, as a courtesy, near the foot of the dais. And the old king’s head turns. Those wet slate eyes find her across the length of the table and stay.',
      '“Carrow.” The voice is paper rubbed on paper. “Your grandmother kept my salt. Does your House keep it still?”'
    ],
    choices: [
      { tag: 'Pride', label: '“Every grain, Majesty. As our House has done for three hundred years.”', goto: 'e1_y2a' },
      { tag: 'Flatter', label: '“Your Majesty’s salt, from the sea to the table. We merely carry it.”', goto: 'e1_y2b' },
      { tag: 'Probe', label: '“Majesty, I have never understood the salt. A man who eats nothing, and asks for nothing but salt. What does it do for you?”', check: { stat: 'guile', dc: 10, pass: 'e1_y2c', fail: 'e1_y2d', label: 'Guile' } }
    ]
  },
  e1_y2a: {
    fx: function (s) { s.addRel('aldous', 1); },
    text: [
      'The old man’s mouth moves. It might be a smile. “Three hundred years,” he says, tasting the number. “Yes. Longer than you know. Good.”',
      'The thin physician’s eyes snap to Ysolde, and away.'
    ],
    next: 'e1_y2e'
  },
  e1_y2b: {
    text: [
      '“Carry,” the king repeats, and for a moment his eyes are not on her at all. “Yes. That is what the salt-merchants do. They carry.” His fingers move on the arm of the chair, counting something, tip to tip.'
    ],
    next: 'e1_y2e'
  },
  e1_y2c: {
    set: { y_king_spoke: true },
    clue: { king_salt: 'King Aldous said he lives on “memory and salt.” He seemed glad to be asked.' },
    fx: function (s) { s.addRel('aldous', 2); s.omen(1); },
    text: [
      'A rustle goes down the table. Nobody asks the king questions. Nobody has for ten years.',
      'And the dry creature in the chair does something she will remember on her deathbed: he *laughs*. A tiny, brittle, wholehearted sound, like a drawer of cutlery being gently dropped.',
      '“Memory, child,” he says. “Memory and salt. One is for keeping, and the other is for the keeping of *it*.” Quill makes a small sharp movement, and the king subsides, still wheezing his glee. “Oh, she is clever. Maud, you were always the clever one, but this one is *clever*.”',
      'Princess Maud, three places up, does not turn her head. Her knuckles whiten on her cup.'
    ],
    next: 'e1_y2e'
  },
  e1_y2d: {
    fx: function (s) { s.addRel('quill', -1); },
    text: [
      'Quill is at the king’s shoulder before she has finished the sentence. “His Majesty is tired,” he says, in the gentlest voice she has ever heard anyone use to lie. “He does not take questions at table, my lady.”',
      'The old king’s eyes slide away from her, and for one second she thinks she sees *disappointment* in them. Then it is gone and she is just a woman in a wool-colored dress who has said something unwise.'
    ],
    next: 'e1_y2e'
  },
  e1_y2e: {
    text: [
      'It is while the second course is being brought that the king’s head turns, suddenly, toward the high windows and the black shape of the cathedral tower beyond them. He tilts his head the way a hound tilts it to a whistle too high for human ears. His lips shape a word. She cannot read it.',
      'Then the pheasant is served and the moment is over, and the hall is full of eight hundred people noisily pretending they saw nothing.'
    ],
    next: 'e1_y3'
  },

  e1_y3: {
    place: 'Highgarrow — the Great Hall, Jubilee Feast',
    text: function (s) {
      var done = (s.f.y_perrin ? 1 : 0) + (s.f.y_quill ? 1 : 0);
      return [
        done === 0 ? 'The feast roars on. Between the third course and the fourth, with the court well lit and half-drunk, she has time for two errands before the Princess’s second one — the champion — and she knows exactly which she wants to run first.'
          : done === 1 ? 'One thread pulled. The hall noise swells around her, a drunken sea. There is time for one more.'
          : 'Two threads pulled. The hall is beginning to thin and slur, and the Princess’s second errand is waiting in the dark above.'
      ];
    },
    choices: [
      { tag: 'Perrin', label: 'Find Lord Perrin Ashby, Master of the King’s Coin, and ask about the salt accounts.', req: function (s) { return !s.f.y_perrin; }, goto: 'e1_y3a', set: { y_perrin: true } },
      { tag: 'Quill', label: 'Follow Physician Quill out into the side-passage. A man should not need to carry his own satchel to a feast.', req: function (s) { return !s.f.y_quill; }, goto: 'e1_y3b', set: { y_quill: true } },
      { tag: 'Dray', label: 'Enough. Go up to Ser Corbin Dray.', req: function (s) { return s.f.y_perrin || s.f.y_quill; }, goto: 'e1_y4' }
    ]
  },

  e1_y3a: {
    text: [
      'Lord Perrin Ashby is thirty-eight and was beautiful at twenty-five and will not forgive the world for the difference. He is in his fourth cup when she slides onto the bench beside him, and in his fifth by the time she has made him believe the idea of the conversation is his.',
      'He talks for a long time about his horses. His hand finds her thigh beneath the table, a heavy, apologetic, very practiced hand, and stays there as if it had been left in her care.'
    ],
    choices: [
      { tag: 'Charm', label: 'Let the hand stay. Lean in. Make him think the salt is a joke between lovers.', check: { stat: 'guile', dc: 8, pass: 'e1_y3a1', fail: 'e1_y3a2', label: 'Guile' } },
      { tag: 'Menace', label: 'Let the hand stay a moment — and slip the fruit knife from beside your plate and rest the flat of it against the inside of his wrist, under the cloth.', goto: 'e1_y3a3', rel: { perrin: -1 } }
    ]
  },
  e1_y3a1: {
    clue: { vigil_stipend: 'Lord Perrin: the Crown pays the Cathedral four thousand marks a year, unaudited, called “the Vigil Stipend.” It has not changed in three hundred years.' },
    fx: function (s) { s.addRel('perrin', 1); },
    text: [
      '“Oh, the salt. The *salt*.” He laughs into her hair. “The salt’s fine. The salt’s always fine. It’s the *other* column that keeps me up. The Crown pays four thousand marks a year to the Cathedral — four *thousand*, my dear, not a copper more nor less since the founding — under a heading called the Vigil Stipend. No receipt. No audit. My grandfather asked what it was for and was told it was *an old promise*.” He drinks. “Three hundred years of old promise. You could build a cathedral every decade on it.”',
      'His hand squeezes. “Don’t tell Maud I told you. She hates it when the numbers talk.”'
    ],
    next: 'e1_y3'
  },
  e1_y3a2: {
    fx: function (s) { s.addRel('perrin', -1); },
    text: [
      'He is too drunk to be steered and too vain to be wrong. “The salt,” he says, “is a *lady’s* concern, Lady Carrow, and you should concern yourself with a lord’s,” and the hand tightens in a way that makes his meaning perfectly clear. She extricates herself with a smile that costs her nothing and leaves her with nothing.'
    ],
    next: 'e1_y3'
  },
  e1_y3a3: {
    clue: { vigil_stipend: 'Lord Perrin: the Crown pays the Cathedral four thousand marks a year, unaudited, called “the Vigil Stipend.” It has not changed in three hundred years.' },
    text: [
      'Lord Perrin Ashby stops talking about horses.',
      '“I would be so grateful,” Ysolde murmurs, with her cheek an inch from his, “if you would tell me about the *other* column.”',
      'He tells her. He tells her very quickly, in a high clear whisper, with his free hand clamped on the edge of the table. Four thousand marks a year to the Cathedral, no receipt, no audit, a heading called the Vigil Stipend, three hundred years unchanged, *an old promise*.',
      '“Thank you,” she says, and takes the knife away. His wrist has a thin white line across it that fills slowly with red. “You will find it very easy not to remember this conversation, my lord. I’m sure you are a man who forgets.”'
    ],
    next: 'e1_y3'
  },

  e1_y3b: {
    text: [
      'The side-passage behind the dais smells of smoke and tallow and the sweet stink of old men’s sickrooms. Physician Quill has set his satchel on a window-ledge and is counting servants with his eyes. A pair of stewards haul the king’s chair past them to the privy-stair; a steward carries the silver salt-cellar behind, and the physician unbuckles his satchel and takes out a small stone jar, stoppered and sealed in red wax.',
      'He breaks the seal. He tips the jar over the cellar and a little pale grey powder, not white, falls into it. He does it with enormous, loving care, the way a man feeds a captured bird.',
      'Then he sees her.'
    ],
    choices: [
      { tag: 'Guile', label: 'Palm a pinch of it from the cellar while he is distracted by a steward’s stumble.', check: { stat: 'guile', dc: 10, pass: 'e1_y3b1', fail: 'e1_y3b2', label: 'Sleight of hand' } },
      { tag: 'Wit', label: 'Ask the physician, kindly, what he feeds the king. Watch what he does with his hands.', goto: 'e1_y3b3' }
    ]
  },
  e1_y3b1: {
    give: { kingsalt: 'A pinch of the king’s salt — grey-white crystals. It tastes of the sea, and then of nothing, a cold nothing that keeps spreading.' },
    text: [
      'A steward drops a tray. It is the sort of luck she has trained herself to expect. Two fingers, a flick of the wrist, and a pinch of the grey stuff is in the fold of her sleeve before the physician has turned his head.',
      '“Lady Carrow,” says Quill, and bows with a great deal of civility. “Lost your way?”',
      '“Only temporarily,” she says, and smiles, and goes. Later, in the hall, she will touch a grain to her tongue. It tastes of the sea. Then, a moment after, of nothing — a cold, wide, patient nothing, which spreads across the roof of her mouth and does not stop at her teeth.'
    ],
    fx: function (s) { s.omen(1); },
    next: 'e1_y3'
  },
  e1_y3b2: {
    fx: function (s) { s.addRel('quill', -2); s.f.quill_knows = true; },
    text: [
      'The physician’s hand closes on her wrist before her fingers have left the silver. He does not squeeze. He is not that sort of man. But his grip is startlingly strong for a man whose arms look like kindling, and when she looks into his face the courtesy is gone, and what is behind it is something like fear.',
      '“I would not,” Quill says, very softly, “put my hands in the king’s dish, Lady Carrow. Not for any reason. Not even for love of the Crown.” He lets her go. “Do enjoy the feast.”'
    ],
    next: 'e1_y3'
  },
  e1_y3b3: {
    clue: { quill_jar: 'Physician Quill adds grey powder from a sealed stone jar to the king’s salt. His hands shook when he was asked about it.' },
    text: [
      '“A tonic, my lady,” says Quill, “of my own devising. Minerals. The king’s humors have always run cold.” His smile is perfect. His hands, which a moment ago were steady enough to pour a drop of ink into a cup of water, have begun to tremble, and he puts them behind his back.',
      'It is the first time she has ever seen a physician look at a question as though it were a cut.'
    ],
    next: 'e1_y3'
  },

  e1_y4: {
    place: 'Highgarrow — Ser Corbin Dray’s chambers',
    text: function (s) {
      var won = s.f.w_corbin === 'won';
      return [
        'He opens the door himself, in shirtsleeves, with a wine-jug in one hand and a look on his face of cheerful, precarious ruin.',
        won ? 'Ser Corbin Dray has a bruise the size of a plate coming up over his ribs and a split lip, and he is smiling like a man who has been sentenced to death and then, at the last, forgotten. “Lady Carrow,” he says. “Come to console me? Or to be seen consoling me? Either way, do come in. I’m terrible company and I have nobody else.”'
            : 'Ser Corbin Dray has a clean, unbruised, triumphant face. He is the winner. He is drinking like a man who has lost. “Lady Carrow,” he says. “Come in. Please. I’ve been *acclaimed* all day and I think I’m about to be sick.”',
        'The chambers are plain for a champion. A sword on a rack. A narrow bed. A window open on the city, where bonfires sprawl across the dark like spilled embers. He is thirty-three, golden, scarred in three places that do not show when he is dressed, and he is a better man than she has been led to believe. This does not help.',
        'There is a way to do this that is quick. There is another way, slower, which she could also enjoy.'
      ];
    },
    choices: [
      { tag: 'Seduce', label: 'Close the door behind you. Take the jug from his hand. Let this go where it is going.', check: { stat: 'guile', dc: 9, pass: 'e1_y5s', fail: 'e1_y5f', label: 'Guile' } },
      { tag: 'Listen', label: 'Take the other chair. Pour. Let him talk, and listen like a woman who has nowhere better to be.', check: { stat: 'wit', dc: 8, pass: 'e1_y5l', fail: 'e1_y5n', label: 'Wit' } },
      { tag: 'Leverage', label: 'Tell him what you know about the Vigil Stipend — and what you don’t.', req: function (s) { return s.hasClue('vigil_stipend') || s.has('kingsalt'); }, goto: 'e1_y5p' }
    ]
  },

  e1_y5s: {
    set: { y_corbin_bed: true, y_corbin_info: true },
    fx: function (s) { s.addRel('corbin', 2); s.echo('Ysolde took Ser Corbin Dray to bed and learned what he saw at the Hollin Ford.'); },
    text: [
      'She takes the jug out of his hand and sets it down on the window-ledge with the care of a woman putting down something fragile, and then she turns and puts her palm flat in the middle of his chest and feels his heart go off like a startled bird.',
      '“Ysolde—” he says, with the shocked relief of a man who has been waiting a whole day for someone to touch him on purpose.',
      'She kisses him. He tastes of wine and iron and something sweeter underneath; the split lip is warm and soft against her mouth, and he makes a low sound that is half apology. His hands are huge and shake slightly when they find the laces at her back. She lets him fumble; it is better when they fumble. She finishes the knots herself and steps out of the gown and stands in her shift in the firelight, thin-wristed and amused, and watches his breath go ragged.',
      'He is a fighter; he is graceful even in this. He lifts her onto the narrow bed as though she weighed nothing and then, a moment later, lets her take the weight of him and the control of him, rolling him under her with a hand pressed to the bruise on his ribs so that he gasps and then laughs and then stops laughing. She has done this with men for coin and men for safety and men for sport, and once, at nineteen, for love. She had forgotten the fourth kind, the kind where you are surprised to find you enjoy it. She takes her time. She learns what makes him arch and what makes him say her name in that cracked, boyish voice, and she keeps it up until the narrow bed is creaking and the window has fogged and neither of them is thinking about the Princess at all.',
      'Afterward he lies with his arm over his eyes and his chest rising and falling, and she lies propped on an elbow against the heat of him, tracing the long scar on his hip.',
      '“Whatever she asked you to ask me,” says Corbin Dray, into the crook of his arm, “you can have it. I’d have given it for the wine.”'
    ],
    next: 'e1_y6'
  },
  e1_y5f: {
    set: { y_corbin_info: true },
    fx: function (s) { s.addRel('corbin', 1); },
    text: [
      'It starts well. His mouth is warm. His hands are shaking and then not shaking. But he is too drunk, and too ashamed, and too hungry to be touched, and it ends the way such things sometimes do, clumsily and early and with a lot of apology. He lies back with his face scarlet.',
      '“I’m sorry,” he says. “I’m a — it’s been — you must think—”',
      '“I think,” says Ysolde, gently, pulling the blanket over them both, “that you have had a very long day.” It is the only truthful thing she has said all night. It is, to her profound irritation, enough. Within a quarter hour he has told her everything.'
    ],
    next: 'e1_y6'
  },
  e1_y5l: {
    set: { y_corbin_info: true },
    fx: function (s) { s.addRel('corbin', 2); },
    text: [
      'She does not touch him. That is the trick. She pours him a drink and herself half of one and sits in the plain wooden chair with her feet tucked under her and says, “Tell me about the bastard.” And he laughs, and the whole day comes out of him at once like water from a cut skin.',
      'He talks about Wystan Hale for a long time. Then about being a champion. Then about the Princess, whom he loves in a way that is neither erotic nor filial nor entirely free. By the time the bonfires have burned low, he has put his head down on his folded arms, and the true thing, the thing under all the others, comes out as softly as a confession.'
    ],
    next: 'e1_y6'
  },
  e1_y5n: {
    fx: function (s) { s.addRel('corbin', -1); },
    text: [
      'He is a man who talks about swords for an hour and horses for another. She is too tired, or too tense, and the night passes by in a blur of bad stories and expensive wine; he finally stops with a rueful shrug and “You’re being very kind and I’m being very dull.” By the time she goes, she has learned the exact weight of his sword and nothing at all that matters.'
    ],
    next: 'e1_y7'
  },
  e1_y5p: {
    set: { y_corbin_info: true },
    fx: function (s) { s.addRel('corbin', -1); },
    text: [
      '“Four thousand marks a year,” she says, pleasantly, “paid for three hundred years to a church that cannot say what it is paying for. And a king who eats a grey powder that no physician in the realm will name. I’m a wool-merchant’s daughter, Ser Corbin. I count. And I find I don’t like the sum.”',
      'The color goes out of his face. He sits down on the end of the bed.',
      '“Who sent you?” he whispers. “Was it the Princess? Was it — oh Maker. She *knows*, doesn’t she?”',
      'He does not wait for an answer. Something has broken in him. And it comes out with the dry, mechanical, stunned relief of a man reading aloud from a very long list of sins.'
    ],
    next: 'e1_y6'
  },

  e1_y6: {
    clue: { fourth_rider: 'Ser Corbin Dray: Marden’s hunting-party was FOUR riders, though none would admit it. The fourth wore grey, no one remembered him joining, and he did not come back. When they pulled Prince Marden from the Hollin Ford he was bone-dry, with white on his lips.' },
    text: [
      '“There were four of us,” says Corbin Dray. “Everybody says three. Marden, myself, Piers the squire. But there were four on the road. A man in a grey hood, riding the near-left. He had been with us two days, and I would have sworn on my sword that I had never seen him arrive. Nobody remembered him joining, and when I asked, Marden said, *Corbin, he has always been with us.* And I knew *that* was true. That was the awful thing. I knew it was true.”',
      '“At the Hollin Ford, the grey man dismounted. Marden got down too. It was as if they had agreed it. The grey man put out his hand and Marden *took* it, the way a child takes your hand to be led to bed. They walked in. We shouted. We — I could not move, Ysolde. I swear. It was not fear. It was *courtesy*. It was like interrupting prayers.”',
      '“Marden came up on the far bank, an hour after. Alone. We pulled him out and he was dry. Dry as chalk. His hair, his boots, his *eyelashes*. Not a drop on him. And white on his lips, like frost, like the crust on a salted fish. He was dead. He had been dead, I think, a long time before the ford.”',
      'He looks at his hands.',
      '“The Princess’s steward told us to say a fall. A heart. I said it. I’ve said it for six months. I have never said it without tasting salt.”'
    ],
    next: 'e1_y7'
  },

  e1_y7: {
    place: 'Highgarrow — the high gallery',
    text: function (s) {
      return [
        s.f.y_corbin_bed ? 'She dresses in the dark, with his breathing slow and deep behind her. She does not feel ashamed. She feels, instead, a clean and unsettling quiet, as if something in her has been put back in its right place and she does not know yet what it was.'
          : 'She goes out into the corridors with her hair still pinned and her face composed.',
        'The high gallery runs along the north wall of the palace, open to the night air. The city lies below like a spilled jewel-box — roofs and bonfires and the great black bulk of the cathedral tower. The Jubilee is a distant roar. She stands at the stone parapet and tries to add up the evening, and for once the numbers refuse to add.',
        'A salt-cellar the size of a fist. A sealed jar. A man who ate nothing but *memory*. A rider in grey who had always been there. *Four.*',
        'Midnight comes with the sound of a great dry rustle, ten thousand drunken revelers falling silent at the same instant, as if a hand had passed over a lamp.',
        'And from the tower of the Cathedral of the Threefold Hand — from the tower that has three bells and has always had three bells — there comes a fourth.',
        'It is not loud. It is not like a bell at all. She feels it first in the roots of her teeth and then in the bones of her hands on the stone; a single deep note that goes through the city like a finger drawn down a wineglass. Every dog in Highgarrow starts to howl. Somewhere below her, a woman begins to scream, and does not stop.',
        'In a high window of the royal apartments, one light is burning. An old man is standing there, a small bent shape against the gold. As she watches, he lifts one hand and, very slowly, lowers one finger.',
        'From this distance she cannot tell whether he is laughing, or weeping, or counting.'
      ];
    },
    end: true, continue: 'Continue'
  }
});
