/* Episode 2 — Ysolde: The Morning Audience */
Q.part(2, {

  e2_y1: {
    place: 'Highgarrow — the Throne Hall',
    text: [
      'The Long King holds an audience at ten of the morning, and nobody can remember when he last did that.',
      'The court assembles in a silence of fine fabrics. Ysolde stands in the second rank in a plain grey gown with her hair pinned flat, very much the dutiful widow, with Princess Maud’s cold shoulder a yard in front of her and her own sleepless night under her eyes like a bruise. She has not slept. She has bathed twice and still has the faint ghost of Corbin Dray’s soap on her skin.',
      'They bring him in on the same chair, in the same furs. In daylight he is smaller and worse: a husk with eyes in it. Physician Quill is at his shoulder. The silver salt-cellar is set on the arm of the chair, beside his hand.',
      'He does not sit still. He sits with his head cocked toward the east, listening, as though the great hall had a window onto something that the rest of them cannot see.',
      '“My children,” says Aldous the Long, and the voice is a leaf on a stone. “I have been ninety-five years in the world. I would have you know that I intend to remain in it. But the realm is owed a name, and it shall have one. At the Feast of the Lamp, at harvest-tide, I shall name the one who sits after me.” A rustle goes through the hall like a wind through a field. “And then,” says the king, with a small private smile, “the realm shall be asked.”',
      'Nobody knows what that means. Nobody asks. Garrick’s chair on the dais is empty. Prince Edric stands pale and rigid at the far end, with his eyes closed.',
      'The old man’s gaze drifts down the hall and, once again, stops on Ysolde.'
    ],
    fx: function (s) { s.omen(0); s.f.heir_deadline = true; },
    choices: [
      { tag: 'Maud', label: 'Watch Princess Maud. See what she does with her hands when the king says “asked.”', goto: 'e2_y1a' },
      { tag: 'The King', label: 'Meet the old man’s eye and don’t look away. Let him see you looking.', goto: 'e2_y1b' },
      { tag: 'Quill', label: 'Watch the physician, who has just noticed that the king noticed *you*.', goto: 'e2_y1c' }
    ]
  },
  e2_y1a: {
    clue: { maud_fear: 'When the king said “the realm shall be asked,” Princess Maud’s hand tightened on her cup until the knuckles went white — the first sign of fear Ysolde has ever seen in her.' },
    text: [
      'The Princess’s face does not move. Her hands, folded before her in a gilt cup of watered wine, tighten until the knuckles are the color of bone. It takes two heartbeats. Then she relaxes them one finger at a time, with a tremendous deliberate effort, like a woman putting down a snake.',
      'In four months of attendance Ysolde has never seen her afraid. She is not sure she knew that Maud *could* be.'
    ],
    next: 'e2_y2'
  },
  e2_y1b: {
    fx: function (s) { s.addRel('aldous', 1); },
    text: [
      'For a moment the old man’s eyes are the only thing in the room. They are wet slate; they are wet slate and there is something at the back of them she cannot name. It is not age. It is the look of a man standing at the top of a very long stair, looking down, with all the time in the world.',
      'His lips move. No sound. But she has been watching mouths all her life, and she is nearly sure what they say.',
      '*Carrow. Carry.*'
    ],
    next: 'e2_y2'
  },
  e2_y1c: {
    clue: { quill_sweat: 'Physician Quill sweated through his collar when the king noticed Ysolde. He glanced at the east window, twice, as if timing something.' },
    text: [
      'Physician Quill’s face is a mask of professional calm, and sweat has soaked through his grey collar in a dark crescent. His eyes go to the king, to the east window, to Ysolde, and back to the king, and every time they cross the window they narrow a little, as if he were timing something.',
      'It is the look of a man who knows there is going to be a deadline, and has been counting the days.'
    ],
    next: 'e2_y2'
  },

  e2_y2: {
    place: 'Highgarrow — the Princess’s solar',
    text: [
      'The Princess’s solar is the only room in the palace where the carpets are thick enough to deaden a footstep. It is small, and plain, and lit by a single north window. Maud Verrin has taken off the veil and the heavy gold chain and sits at a writing-table with a pen in her hand, writing nothing.',
      '“Tell me,” she says, “about Ser Corbin.”'
    ],
    choices: [
      { tag: 'Truth', label: 'Tell her all of it, including the fourth rider and the dry body. She is your mistress, and she holds the leash.', goto: 'e2_y2a', set: { y_told_maud: 'all' }, rel: { maud: 1 } },
      { tag: 'Guile', label: 'Tell her he was too drunk to say anything useful. Keep the fourth rider for yourself.', check: { stat: 'guile', dc: 9, pass: 'e2_y2b', fail: 'e2_y2c', label: 'Guile' } },
      { tag: 'Salt', label: 'Lay the pinch of grey salt on her desk. Say nothing. Watch her face.', req: function (s) { return s.has('kingsalt'); }, goto: 'e2_y2d', set: { y_showed_maud: true } }
    ]
  },
  e2_y2a: {
    text: [
      'Maud listens as she always does, without moving, the pen still. She does not ask a single question. When Ysolde reaches the ford, the dry body, the grey rider’s outstretched hand, the pen dips, once, onto the paper, leaving a blot like a drop of blood.',
      '“Foolish boy,” says Maud softly. “I told him to say *fall*.”',
      'Not *there was no such rider*. Not *you have been misled*. *I told him to say fall.* She has known. She has always known. She sits with her ink-stained hand and her closed face and Ysolde, who has spent her whole life reading rooms, realizes that she is looking at the most frightened woman in the palace.',
      '“Keep your mouth shut about the rider,” Maud says, finally. “For your own sake.” She does not say it as a threat.'
    ],
    next: 'e2_y3'
  },
  e2_y2b: {
    set: { y_told_maud: 'little' },
    text: [
      '“Drunk, your Grace. Drunk and self-pitying. He confessed a great deal about his feelings for the bastard, and nothing at all about hunts.” It is a good lie, bland and a little cruel. The Princess’s pen resumes moving.',
      '“Pity,” says Maud, and writes something down. “Well. I did not expect much.”',
      'Ysolde keeps her face perfectly composed. It is only afterward that she realizes the Princess, who has not asked her a single question about the hunt, had been *relieved*.'
    ],
    next: 'e2_y3'
  },
  e2_y2c: {
    set: { y_told_maud: 'little' },
    fx: function (s) { s.addRel('maud', -1); },
    text: [
      '“No,” says Maud, without looking up. “I don’t think so.” The pen sets down. “You are not usually a poor liar, Ysolde. You are a very good one. So I must conclude that you do not think I deserve the truth.”',
      'Silence. A bee blunders against the north window and falls.',
      '“I shall find it out,” says the Princess. “I always do. And then we shall have a conversation about *Master Hargreave*.”'
    ],
    next: 'e2_y3'
  },
  e2_y2d: {
    fx: function (s) { s.addRel('maud', 0); s.f.maud_saw_salt = true; s.echo('Ysolde showed Princess Maud the king’s grey salt, and watched her go white.'); },
    text: [
      'She lays the little twist of paper on the writing-table and opens it with one finger. A pinch of grey crystals, dull in the north light.',
      'The Princess goes white. It is not a dramatic thing, no gasp, no step back. It is as if someone had drawn a sheet of cold water through her. She looks at the salt for a long time and when she speaks, her voice is quite flat.',
      '“Where did you get that?”',
      '“From the king’s own cellar, your Grace.”',
      '“Put it away.” The hand that covers the twist is steady. “Put it away and do not show it to *anyone* again. Not Perrin. Not the physician. Not me.” She takes a breath. “Whatever you think you know, Ysolde, you know the wrong half of it.”'
    ],
    next: 'e2_y3'
  },

  e2_y3: {
    place: 'Highgarrow — the Lady Alys’s chambers',
    text: [
      '“There is a girl,” says the Princess, “who is going to be a problem.”',
      'Lady Alys Verrin is nineteen, motherless, the only child of the dead Prince Marden, and the only grandchild of the king. She is, in the hard arithmetic of the court, the single most valuable piece on the board: a girl with her father’s eyes and her grandfather’s blood and no friends in the palace who are not for sale. Garrick’s people are circling. Edric’s, in a different manner, are circling too.',
      '“She lives in the east wing. She does not eat. She has been writing to somebody and will not say who. Be her friend, Ysolde. I do not much care how.”',
      'The east wing smells of cold ashes and old flowers. Alys is sitting on the floor of her father’s bedchamber, which she has not let anyone redecorate, with a small black wooden box open in her lap. She is slight and fierce, brown-haired, ink-stained, with the wide, burnt-out, stubborn look of a girl who has not slept since the autumn. She looks up as Ysolde enters, and slides the lid of the box shut.',
      '“Whose are you?” she says. “Aunt Maud’s, or Uncle Garrick’s?”'
    ],
    choices: [
      { tag: 'Honesty', label: '“Your Aunt Maud’s. She sent me to be your friend. I would like to be, and not because she sent me.”', goto: 'e2_y3a', rel: { alys: 2 }, set: { y_alys: 'honest' } },
      { tag: 'Guile', label: '“Nobody’s, my lady. I found your door by accident, and I have been very lonely.” Let her think you’re another orphan.', check: { stat: 'guile', dc: 10, pass: 'e2_y3b', fail: 'e2_y3c', label: 'Guile' }, set: { y_alys: 'used' } },
      { tag: 'Wit', label: 'Sit down on the floor beside her without asking. Look at the box. Say nothing.', goto: 'e2_y3d', rel: { alys: 1 }, set: { y_alys: 'quiet' } }
    ]
  },
  e2_y3a: {
    fx: function (s) { s.f.alys_trust = true; },
    text: [
      'Alys studies her with the unblinking suspicion of a child who has been lied to by experts.',
      '“Oh,” she says at last. “That’s new.” And then, gruffly: “Well. Sit down, then, if you’re going to be honest. I’m not used to it.”'
    ],
    next: 'e2_y3e'
  },
  e2_y3b: {
    fx: function (s) { s.f.alys_trust = true; s.addRel('alys', 1); },
    text: [
      'It is an easy lie because half of it is true. The girl’s hard little face falters, and then shifts; the suspicion goes out of her like air out of a bellows, and she slides her hand across the carpet to Ysolde’s in a gesture so simple and unguarded that Ysolde has to look away from it for a moment.',
      '“Me too,” says Alys. “Sit.”'
    ],
    next: 'e2_y3e'
  },
  e2_y3c: {
    fx: function (s) { s.addRel('alys', -1); },
    text: [
      '“No,” says Alys flatly. “You’re one of Aunt Maud’s. You’ve got the walk. Everyone she sends has the walk, like they’re all on little wheels.” She puts her arm over the box. “Tell her I said I’m fine. Tell her I’m writing to my *father*. He’s dead; he won’t mind.”',
      'It is a creditable rebuff and it costs Ysolde a good deal of work to turn it into a truce. By the time she leaves, they have agreed not to hate one another. It will have to do.'
    ],
    next: 'e2_y3e'
  },
  e2_y3d: {
    fx: function (s) { s.f.alys_trust = true; },
    text: [
      'For a quarter hour neither of them speaks. The light moves across the carpet. Ysolde has had a good deal of practice at silences; hers is not a hostile one.',
      'At last Alys says, to the box on her knee, “He used to write to me. When he was away at hunts. He wasn’t very good at it. It was always about the weather.”'
    ],
    next: 'e2_y3e'
  },
  e2_y3e: {
    text: function (s) {
      var trust = s.f.alys_trust;
      return trust ? [
        'She opens the box. There are eleven letters inside, in her father’s large untidy hand, tied with a green ribbon.',
        '“The last one came three days after he died,” she says. “They were sent ahead. By the post-rider. It’s the only one I’ve never shown anyone.”',
        'She puts it into Ysolde’s hand. The paper is soft with handling.',
        '*Alys — I am writing this at the inn at Hollin Bridge, and I do not know if I shall be able to write another. If anything should happen at the water, do not let them tell you it was a fall. Go to the Dunmarch. Find the marsh-folk. They are the only ones who still remember the old count. Do not trust the Church. Do not trust your grandfather, or whoever he is by now. I love you. I am sorry, so sorry. — Papa*',
        'She reads it twice. “*Whoever he is by now,*” she says, softly.',
        '“I’ve been trying to work out,” says Alys, “what he meant by that, for six months.”'
      ] : [
        'The girl will tell her nothing. She keeps one hand on the black box and speaks of the weather and her father’s dogs, and Ysolde leaves with a pleasant, useless memory of ink-stained fingers and the lid of a box that did not open.'
      ];
    },
    fx: function (s) {
      if (s.f.alys_trust) s.clue('marden_letter', 'Prince Marden’s last letter to his daughter: “If anything should happen at the water… Go to the Dunmarch. Find the marsh-folk. They remember the old count. Do not trust the Church. Do not trust your grandfather, or whoever he is by now.”');
    },
    next: 'e2_y4'
  },

  e2_y4: {
    place: 'Highgarrow — Wax Street, the apothecaries’ row',
    text: function (s) {
      return [
        'It is dusk when she reaches Master Hargreave’s shop, and the shutters are already half up, and a hand-cart is waiting in the lane, loaded with crates.',
        'He is packing. He is a plump, pink, careful man of sixty, with the soft hands of a scholar and the nervous, darting eyes of a man who has been looking over his shoulder for a week. He drops a bottle at the sight of her. It does not break. He does not pick it up.',
        '“My lady,” he says, “I would so much rather you had not come.”',
        s.has('kingsalt') ? 'She has the pinch of grey in her sleeve. She sets it on the counter between them without a word and unfolds the paper.' : 'She has no salt, only questions. She asks them anyway.',
        s.has('kingsalt')
          ? 'Hargreave leans over it with a jeweler’s loupe and does not touch it. For a long time he says nothing. Then he straightens, and he is a different color.'
          : 'Hargreave listens, and goes grey, and sits down on a crate.',
        '“It isn’t salt,” he says. “I’ve ground salt for forty years, and I’ve never seen salt do that. Look under the glass. Every crystal is a little four-sided pyramid. *Four sides*, my lady. Salt grows in cubes. Everything that comes out of the sea grows in cubes.” He swallows. “That is not from any sea. That is not from any *mine*. It’s from—” He cannot finish it.',
        'He is trembling so badly that the loupe rattles against his teeth.',
        '“I have been asked,” he says, “to make three vials for the Princess. Nightshade, in a sweet cordial. Last winter. And a fourth in the spring. She did not tell me for whom. I knew. I thought, *he has had a good long life*. I thought, *if it is to be done, it is to be done kindly*.” His voice cracks. “The king drank every one of them. Quill tasted the cup before him, and drank the rest of it himself, and nothing — *nothing* — happened to either of them.”'
      ];
    },
    clue: { maud_poison: 'Master Hargreave made four vials of nightshade cordial for Princess Maud — to poison the king. The king drank them all and nothing happened. Physician Quill tasted each and was untouched.' },
    choices: [
      { tag: 'Mercy', label: 'Give him thirty crowns and send him north on the morning cart. The leash was never his fault.', req: function (s) { return s.S.chars.ysolde.coin >= 30; }, goto: 'e2_y5a', set: { y_hargreave: 'fled' }, coin: -30, echo: 'Ysolde paid Master Hargreave to flee the city — and kept the page that damned the Princess.' },
      { tag: 'Cold', label: 'Take the ledger page. Promise him nothing. Let him make his own luck.', goto: 'e2_y5b', set: { y_hargreave: 'left' } },
      { tag: 'Poison', label: 'Accept a cup of his cordial, and pour him one. He is the only man who can swear to what you did to Lord Thorne.', check: { stat: 'guile', dc: 9, pass: 'e2_y5c', fail: 'e2_y5d', label: 'Guile' } }
    ]
  },
  e2_y5a: {
    fx: function (s) { s.addRel('maud', 0); s.f.y_maud_ledger = true; },
    text: [
      'She counts out the coin onto the counter and watches his hand go to it like a sleepwalker’s. He does not thank her. He only says, “The ledger. I kept a copy. I always keep a copy; it’s a vice,” and takes a loose page from a drawer: three months of entries in a fine copperplate hand. *H.R.H. Princess M. — nightshade, 4 oz. — sweet cordial, to be delivered to the Princess’s own steward.* Dates, quantities, and, at the foot, a signature that is not a signature but the Princess’s unmistakable seal.',
      'It is enough to hang the second-most powerful woman in the realm. And, a small cold voice in the back of Ysolde’s head adds, it is enough to buy back a good deal of a poisoner’s freedom.',
      '“Go north,” she says. “Don’t write.” And he is the first person in her life, she realizes, whom she has ever done a kindness for that had nothing in it for her.'
    ],
    next: 'e2_y5'
  },
  e2_y5b: {
    fx: function (s) { s.f.y_maud_ledger = true; },
    text: [
      'She takes the page from the drawer before he has offered it. He does not protest. He only looks at her with his round, wet, hurt face, like a dog that has been kicked by someone it had trusted.',
      '“They’ve been asking after me,” he says. “The Lamp. They have the *list*, my lady.”',
      '“I am sure you will think of something,” says Ysolde, and goes out into the dusk with a page of damning copperplate folded in her bodice, and does not look back at the cart in the lane.'
    ],
    next: 'e2_y5'
  },
  e2_y5c: {
    set: { y_hargreave: 'dead' },
    fx: function (s) { s.f.y_maud_ledger = true; s.echo('Ysolde killed Master Hargreave — the only man who could swear to Lord Thorne.'); s.omen(0); },
    text: [
      'It is a very old trick and he does not see it. He is a poisoner; the one thing a poisoner never believes is that anyone can poison *him*. She turns her back, the cups clink, and a few drops from the vial in her glove fall into the amber. She puts the right one in his hand.',
      '“To old debts,” she says, and he drinks, because he is a polite man.',
      'It takes eleven minutes. He sits down on a crate with a puzzled expression and says, “Oh. Oh, that’s *clever*,” with real, unaffected admiration, and then does not say anything.',
      'She takes the ledger page from the drawer. She closes his eyes. She goes out into the lane and walks as slowly as she can all the way to the corner.',
      'It is a strange thing. Her hands are perfectly steady. It is the only part of her that is.'
    ],
    next: 'e2_y5'
  },
  e2_y5d: {
    set: { y_hargreave: 'knows' },
    fx: function (s) { s.f.y_maud_ledger = true; s.addRel('maud', -1); },
    text: [
      'His eyes are on her hands. That is all it takes. A poisoner never forgets what a glove looks like when it is hiding a vial. “*No*,” he says, and slaps the cup from her fingers, and it breaks across the floor in a spray of amber.',
      'He does not shout. He is not a brave man, but he is a quiet one, and he stands there with his round face crumpled in the lamplight and says, “I should have known. I *made* you.” She has the ledger page out of the drawer before he has finished the sentence. She is out the door before he has finished the thought.',
      'It is the first time in years that she has run.'
    ],
    next: 'e2_y5'
  },

  e2_y5: {
    place: 'Highgarrow — Wax Street',
    text: function (s) {
      return [
        'Night, and the streets are strangely thin. The Jubilee crowds have gone, or been taken in; shutters are closed on every side. She walks back toward the palace with the ledger page against her ribs and her mind running, running, a clerk adding sums.',
        'Maud tried to murder the king. Twice. Maud, who has run the realm for ten years like a woman keeping house, who has never done a rash thing in her life, tried to murder her own father with a nursery cordial and watched him *drink it*. What would it take, she wonders, to make a woman like that do such a thing? And the answer is a door she does not want to open.',
        s.f.y_maud_ledger ? 'The page is a leash, now, of her own. Not a strong one. But it is her own.' : '',
        'At the end of the street, under the one lit lamp, a man is standing.',
        'He is tall, hooded, in a plain grey cloak that hangs straight to the ground, and he is not doing anything. He is just standing. His face is a darkness inside the hood. His hands are folded in front of him. He has the stillness of a man who has been standing there for a very long time, and could stand a great deal longer.',
        'She blinks. The street is empty.',
        'Ysolde walks the rest of the way back to the palace very fast, and does not once look over her shoulder, and does not sleep.'
      ];
    },
    fx: function (s) { s.f.y_saw_grey = true; s.omen(1); },
    end: true, continue: 'Continue'
  }
});
