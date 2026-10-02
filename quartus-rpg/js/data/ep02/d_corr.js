/* Episode 2 — Corr: The Walking */
Q.part(2, {

  e2_c1: {
    place: 'Highgarrow — Marcher House, Tanners’ Hill',
    text: function (s) {
      var rep = s.f.w_reported;
      return [
        'They have given him a stool, a cup of small beer, and a clean shirt, and none of it is any comfort. The long hall of Marcher House is full of big men with the Marcher black on their shoulders, and at the head of the table sits the biggest of them all: Prince Garrick Verrin, Lord of the North, with his chin on his fist and a dead boy’s ring in front of him, regarding Corr as one might regard a horse of dubious provenance.',
        'The knight is standing at the Prince’s shoulder, the one who was in the cellar, and he will not meet Corr’s eye. His left arm is bound. He looks like a man who has been awake for a day and a half and has not liked what he has done with it.',
        rep === 'shaded' ? '“Well?” says Garrick. “My man tells me the boy named my sister’s steward before he died. You were there. Say it.” He does not raise his voice. He does not need to. The knight’s knuckles have gone white on the back of a chair.'
          : rep === 'honest' ? '“My man tells me,” says Garrick, “that you were there when the lad died. That you have a story. That I am not going to like it.” He nods at the stool. “Go on, then.”'
          : '“I am told,” says Garrick, with the air of a man who has been lied to by an expert and is too tired to resent it, “that there was a *bonesetter*. Sit. Speak. I will hear it from you.”',
        'It occurs to Corr, with a faint hysterical clarity, that he has the power in this room to hang a prince or to hang himself, and that he is not at all sure which is the better bargain.'
      ];
    },
    choices: [
      { tag: 'Truth', label: 'Say it as it was. The rider in grey. The ford. The hand held out. “It’s counting.” No more, no less.', goto: 'e2_c2t', set: { c_told: 'truth' } },
      { tag: 'Lie', label: 'Say the boy named the Princess’s steward. It is what the Prince wants, and a man who is wanted is safer than a man who is not.', goto: 'e2_c2l', set: { c_told: 'lie' } },
      { tag: 'Silence', label: 'Say nothing. The Dunmarch have a word for what you saw, and you will not say it in a hall full of swords.', goto: 'e2_c2s', set: { c_told: 'silent' } }
    ]
  },
  e2_c2t: {
    text: function (s) {
      var shaded = s.f.w_reported === 'shaded';
      return shaded ? [
        'He tells it simply, in his marsh voice, to the wooden table. The ford, the hand, the dry body, the squire’s last whisper, *it’s counting*. He tells it the way you tell a thing that is true and cannot help you.',
        'When he is done there is a very long silence. Then Prince Garrick turns, slowly, to the knight at his shoulder.',
        '“*Hale.*”',
        'The knight’s face is the color of bread. “My lord—”',
        '“You told me the lad named the steward.” The Prince’s voice is perfectly quiet, which is worse than a roar. “You stood in my hall and put your hand on your heart.”',
        '“I did, my lord.”',
        '“*Why?*”',
        'The knight says nothing. He does not look away. After a long moment Garrick lets out a breath and sits back, and for a moment he looks every one of his fifty-eight years.',
        '“Because you thought it was what I wanted to hear,” he says. “Because it *was.* Maker help me.” He drags a hand down his face. “The host is already on the road. I cannot call it back in a night. But, Hale — if you ever lie to me again, I’ll have your tongue for a standard.”'
      ] : [
        'He tells it simply, in his marsh voice, to the wooden table. The ford, the hand, the dry body, the squire’s last whisper, *it’s counting*. He tells it the way you tell a thing that is true and cannot help you.',
        'When he is done Garrick says nothing for a long time. His eyes go to the ring, and the sun on the ring, and the white along the band. He is not a man who believes in ghosts; but he is a man who has hunted for forty years, and Corr can see him thinking *dry as chalk*, and turning it over, and not liking the weight.',
        '“Maud’s agent,” he says at last. “Some creature of hers, in a grey cloak. That is the sensible reading.” He does not sound as though he believes it. “But you tell it straight. I like that. I shall keep you close, bonesetter. I may have more questions.”'
      ];
    },
    fx: function (s) {
      if (s.f.w_reported === 'shaded') { s.f.garrick_knows_lie = true; s.addRel('garrick', 1, 'corr'); }
      else s.addRel('garrick', 1, 'corr');
      s.echo(s.f.w_reported === 'shaded' ? 'Corr told Garrick the truth — and exposed Wystan’s lie.' : 'Corr told Prince Garrick the truth about the ford.');
    },
    next: 'e2_c3'
  },
  e2_c2l: {
    text: function (s) {
      var shaded = s.f.w_reported === 'shaded';
      return [
        shaded ? 'It is almost too easy. “Aye, my lord. He said it plain. *The Princess’s steward.* He said it twice.”' : '“He named the Princess’s steward, my lord. In his last hour. He said it plain.”',
        'The lie slips out of him like a thing he has been waiting to say all his life. He sees it land. He sees the Prince’s whole big body unclench, and he hates himself with a thoroughness that surprises him.',
        shaded ? 'The knight at the Prince’s shoulder lets out a breath that he has been holding for some time, and for the first time looks Corr in the eye. It is not gratitude. It is a kind of horrified recognition: *we are two men who have just done something we will not forget.*'
          : 'The Prince claps him on the shoulder, hard enough to hurt. “You’ve done me a service, bonesetter. I’ll not forget it.” The knight does not look at either of them.',
        'It is not until the Prince has called for his marshals that Corr realizes what he has done. Four thousand men are going to march on a palace because a dying boy said a name he did not say.'
      ];
    },
    fx: function (s) { s.f.garrick_marches = true; s.addRel('garrick', 2, 'corr'); s.echo('Corr lied to Prince Garrick about what the squire said — and the Marcher host marched.'); },
    next: 'e2_c3'
  },
  e2_c2s: {
    text: [
      'The hall waits. A log shifts in the hearth.',
      '“You will have to forgive me, my lord,” says Corr slowly. “What I saw is not a thing my people say in rooms with swords in them. It would be like asking you to say your wife’s name in a tavern.” He folds his hands. “I will tell it to a man who will *hear* it. Not to one who has already decided.”',
      'There is a very quiet moment. A big man by the fire half-rises. And the knight at Garrick’s shoulder — Hale, the bastard — says, without any particular emphasis, “He has a point, my lord. He’s been very honest with me.”',
      'Garrick looks at him, and at Corr, and the hot red sweep of temper crosses his face and then, with an effort, recedes. “*Hale* will answer for you, then,” he says. “Which means if you run, I’ll hang *him*. Sleep on that, bonesetter.”'
    ],
    fx: function (s) { s.addRel('garrick', -1, 'corr'); s.addRel('wystan', 1, 'corr'); },
    next: 'e2_c3'
  },

  e2_c3: {
    place: 'Highgarrow — Marcher House, a back room',
    text: [
      'They give him a pallet in a store-room off the kitchens, with a guard at the door, and he lies on it with his eyes open and listens to the house settle.',
      'He cannot sleep, and it is not the guard, and it is not the pallet. It is the *count*. All day, since the cooper’s cellar, it has been there, like a tooth that aches only when you stop thinking about it: a slow low pressure, a deep patient tide, rising and falling in the long bones of his arms. He knows what it is. He has felt it once before, as a boy, when his grandmother died and the old women of the marsh sat in a ring around her bed and *counted her out*.',
      'Then it changes. It is not louder. It is *nearer*. And it has a direction, and the direction is the Cathedral.',
      'He gets up. The guard at the door glances round, a young Marcher with a pitted face, and stiffens. Corr says, “I need to go and see something. I think it will not wait.” And the guard says, uncertainly, “My lord said you were to stay.”'
    ],
    choices: [
      { tag: 'Ask', label: 'Send for Ser Wystan Hale, who is answerable for you. Ask him to come.', goto: 'e2_c3a', set: { c_with_wystan: true } },
      { tag: 'Slip', label: 'Wait until the guard looks away, and go out through the kitchens alone.', check: { stat: 'guile', dc: 9, pass: 'e2_c3b', fail: 'e2_c3c', label: 'Stealth' } }
    ]
  },
  e2_c3a: {
    fx: function (s) { s.addRel('wystan', 1, 'corr'); },
    text: function (s) {
      return [
        'It takes a quarter hour to find him. He comes in the end with his bound arm in a sling and an old cloak thrown over his shoulders, and he stands in the door and says nothing for a moment.',
        s.f.doran_dead ? '“I’ve buried my friend,” says Wystan Hale, “in an hour that did not allow for burying him. I would very much like to know why.”'
          : '“Doran’s asleep, thank the Maker,” says Wystan Hale. “So I am at a loose end.”',
        'Corr tells him. He tells him that the count is pulling at him; that it is pulling at the whole city; that there is something in the square that he needs to see. He does not say *I think I am afraid*. He does not need to.',
        '“All right,” says Wystan, simply. “I’ll come. But if you try anything—”',
        '“I know,” says Corr.'
      ];
    },
    next: 'e2_c4'
  },
  e2_c3b: {
    text: [
      'There are three kinds of silence, and Corr’s grandmother taught him all of them. He waits, and breathes, and lets the guard’s eyes slide off him like water off a marsh-duck, and when the lad turns to answer the cook’s boy, he is already a shadow in the scullery, and a smell of onions, and gone.',
      'The night is cold and clean and the hill falls away below him in a hundred crooked roofs.'
    ],
    next: 'e2_c4'
  },
  e2_c3c: {
    fx: function (s) { s.hurt(1); s.f.c_with_wystan = true; },
    text: [
      'He gets halfway across the scullery before the guard’s hand closes on his collar and throws him against the wall hard enough to knock the breath out of him. “*My lord said*—” says the lad, pale and furious. And then a different voice says, from the doorway, “Let him go, Tam.”',
      'It is the knight, the bastard, with his arm in a sling and a look on his face like a man who has made up his mind to something stupid. “He’s with me,” says Wystan Hale. “Let’s go and see what he wants to see.”'
    ],
    next: 'e2_c4'
  },

  e2_c4: {
    place: 'Highgarrow — the great square of the Cathedral',
    text: function (s) {
      var w = s.f.c_with_wystan;
      return [
        'They are still there.',
        'Nine hundred, perhaps a thousand, standing in the night in their neat unbroken rows, with the torches of the Candlemen guttering around the edge of the square like a necklace. Not one of them has sat. Not one of them has sat down in a day and a night. A few have fallen; there are little knots of Candlemen around them, lifting them onto litters, carrying them away to the hospice. The rest *stand*.',
        w ? 'Wystan stops at his shoulder and says, in a voice with no color in it, “Sweet Maker.”' : 'He has never been so alone in a crowd.',
        'And Corr can *hear* them. That is the thing he cannot explain. A thousand sleeping chests, a thousand slow tides, rising and falling together like a field of barley, and underneath, so deep it is barely a thing at all, the great slow beat that he heard in a dying boy’s marrow, now spread across a thousand bodies like a net.',
        s.f.miller_followed
          ? 'At the front, a miller sits on the cobbles with his head in his hands. His wife stands beside him, barefoot, wet to the knee. He looks up as Corr passes. “You,” he says, and then, in a whisper: “You know. Don’t you. You *know* what this is.”'
          : 'At the front, a miller kneels beside his wife, who is standing perfectly rigid with her eyes open, and he has tied his own belt around her wrist and around his, and is crying quietly, steadily, the way a man does when he has been crying for a day. He looks up at Corr and says, in a cracked voice, “Please. Can you wake her? The priests say it is a holy thing. It is not a holy thing.”',
        'The woman’s lips are moving. *Four*, she says, almost without sound. *Four. Four.*'
      ];
    },
    choices: [
      { tag: 'The Old Way', label: 'Kneel and lay your hand over her breastbone. Count her out, as your grandmother counted the dying. Wake her.', check: { stat: 'wit', dc: 10, pass: 'e2_c5a', fail: 'e2_c5b', label: 'The old counting' } },
      { tag: 'Walk on', label: 'Say you can’t. Not here, not with the Candlemen at the edge of the square. Tell him you are sorry.', goto: 'e2_c5c', set: { c_walked_on: true } }
    ]
  },
  e2_c5a: {
    set: { c_hild_woke: true },
    fx: function (s) { s.omen(1); s.addRel('hild', 1); s.echo('Corr counted the miller’s wife awake in the great square, before a thousand sleepers.'); },
    text: [
      'It is not a thing you do quickly. It is something between a prayer and a surgery. Palm flat over the breastbone, three fingers spread, listening *down* through the layers of her, past the bone and the marrow to the place where the beat begins. It is there, as it was in the boy: a great slow patient hook, set deep.',
      'He does what his grandmother taught him. He counts *against* it. One, and two, and three — he does not go to four; he *never* goes to four — and the hook slackens and the tide turns in the woman’s chest, and she draws a long, shuddering, ragged breath like a swimmer breaking the surface.',
      'Her eyes focus. She looks at the man kneeling over her and at the sky and at the miller, her husband, who is making a noise like a sob and a laugh at the same time.',
      '“Osric?” she says. “Why are we in the *street*?”',
      'And in the ground beneath them, a thousand miles down, something turns over in its sleep and takes notice, a little more clearly than before, of the name of Corr Anwen.',
      'He knows it, as he knows his own bones. He sits back on his heels, shaking, and when he lifts his head he is looking straight into the thin, patient, interested face of High Chandler Venn, on the Cathedral steps, thirty paces away, who has seen all of it.'
    ],
    next: 'e2_c6'
  },
  e2_c5b: {
    fx: function (s) { s.hurt(2); s.omen(1); },
    text: [
      'He does what he was taught, palm and fingers, and *listens*, and the hook is there, huge and patient and so deep. He tries to count against it, and it counts back.',
      'It is like putting your hand into a river and having the river put its hand in yours. The tide rises through his arm and into his chest, a vast cold slow insistence, and for one terrible heartbeat he feels the whole square count with him: a thousand voices in a thousand breasts, all a half-beat behind. He gets his hand off her chest by main force and falls backwards, and there is blood in his mouth.',
      'The woman has not stirred. Her lips go on moving. *Four.*',
      '“I’m sorry,” he says, and means it more than he has ever meant anything. “I’m so sorry. It’s too deep. I can’t.”',
      'On the Cathedral steps the High Chandler is looking at him. It takes Corr a moment to realize that the man has been looking at him for some time.'
    ],
    next: 'e2_c6'
  },
  e2_c5c: {
    fx: function (s) { s.omen(0); },
    text: [
      '“I’m sorry,” says Corr. “I can’t.” It is the most cowardly thing he has said in his life, and he says it quietly and with great sincerity, and the miller looks at him as if he had been struck.',
      'He walks away through the rows of silent sleepers with his heart pounding in his ears, and behind him the miller’s voice, small and broken, says, “*Please.*”',
      'He does not look back. He will remember that, later.',
      'On the Cathedral steps, High Chandler Venn is watching him go.'
    ],
    next: 'e2_c6'
  },

  e2_c6: {
    place: 'Highgarrow — the great square of the Cathedral',
    text: function (s) {
      var w = s.f.c_with_wystan;
      return [
        'Venn does not raise his voice. He lifts a single hand, and the nearest line of Candlemen turns as one, a dozen grey-hooded men with rods and little brass tapers, and begins to walk across the cobbles toward Corr.',
        'They are not hurrying. That is what frightens him.',
        w ? 'Wystan has his sword out. He steps in front of Corr, quite naturally, the way a man steps into a doorway, and says in an easy, carrying voice, “Good evening, Chandler. I am a sworn knight of Prince Garrick of the North, and this man is in my custody. I should be *very* sorry to make this unpleasant.”'
          : 'He does not wait to find out what they intend. He turns and walks, and then he runs.',
        w ? 'It is, Corr thinks, an enormous and idiotic bluff, and it works. The Candlemen halt, uncertain, and look to their master. Venn studies Wystan for a long moment, and the small bow he makes is the most sinister thing that has happened all night.'
          : 'Boots behind him. A whistle. He goes down a narrow wynd by the tanneries and through a cooper’s yard that he remembers, and over a wall, and he is in the dark, and nobody is following. Somebody has decided that it is not worth the trouble. That is the worst thing of all.',
        w ? '“Of course, Ser Wystan,” says the High Chandler gently. “We should not dream of interfering with a prince’s witness. Another time.”' : 'He stops, finally, at the foot of the river wall, with his hands on his knees, hearing his own breath.',
        'And across the whole length of the great square, as the bells of the city strike the middle watch, the thousand sleepers lift their heads at the same instant, like a field turning to the sun, and speak with one voice into the dark.',
        '“*Two.*”',
        'It is not a threat. It is not a prayer. It is a sound like a door closing in an empty house. And the echo of it runs away across the roofs of Highgarrow and comes back, very faint, from the direction of the Dunmarch, a hundred leagues away.'
      ];
    },
    fx: function (s) { s.omen(1); },
    next: 'e2_c7'
  },

  e2_c7: {
    place: 'Highgarrow — the river wall',
    text: function (s) {
      var w = s.f.c_with_wystan;
      return [
        w ? 'They walk back along the river wall in silence. The knight has sheathed his sword and is rubbing his bound arm as if it hurt. It is a long time before he speaks.'
          : 'He sits on the river wall in the dark, with his feet over the water, and thinks about the Dunmarch.',
        w ? '“Whatever that was,” says Wystan Hale, at last, “my prince will not believe it. He is not a stupid man. He is a man who has made a great many decisions because he did not have time to be afraid.” He is quiet for a moment. “I find that I should like to be afraid for a little while. Is that foolish?”'
          : 'He has not been home in eleven years. He swore he would not go back. The old women there still know the count; they still know the verse; and they knew, as he knew, what the bell was for, even before it rang.',
        'It occurs to him, with an unpleasant clarity, that everything that has happened in the last two days has happened in the direction of one place, and that all the roads in his life are bending, slowly, toward the marsh.'
      ];
    },
    choices: [
      { tag: 'Home', label: 'Tell Wystan the truth: that the Dunmarch is where the answers are, and that you are going, whether or not he comes.', goto: 'e2_c8', set: { c_plan: 'dunmarch' }, echo: 'Corr resolved to return to the Dunmarch, where the old count is still remembered.' },
      { tag: 'Stay', label: 'Tell Wystan you will stay in the city as Garrick’s witness. For now.', goto: 'e2_c8', set: { c_plan: 'stay' }, rel: { wystan: 1 } },
      { tag: 'Alone', label: 'Say nothing. Wait for him to sleep, and go in the morning without a word.', goto: 'e2_c8', set: { c_plan: 'alone' } }
    ]
  },
  e2_c8: {
    place: 'Highgarrow — the river wall',
    text: function (s) {
      var p = s.f.c_plan;
      return [
        p === 'dunmarch' ? (s.f.w_letter === 'read'
            ? '“Then I will come with you,” says Wystan Hale, so quickly that they are both a little surprised. “There is a letter in my coat from a dying man. It says there are things about my mother he swore to the Church never to tell. She was Dunmarch, they said. A serving-girl.” He looks at the river. “I was told a great many things.”'
            : '“Then I will come with you,” says Wystan Hale, so quickly that they are both a little surprised. “There is a letter in my coat from a dying man, which I have not had the courage to open. My mother was a Dunmarch woman, they told me. A serving-girl.” He looks at the river. “I think it is time I read it.”')
          : p === 'stay' ? '“Good,” says Wystan, with evident relief. “Then I shall do my best to see that you are not hanged, and you shall do your best to see that I am not a liar.” There is a ghost of a smile. “It is a fair bargain.”'
          : 'He does not tell him. It is not a kindness. It is only that he has been running for so long that he has forgotten that it is possible to stop.',
        'Behind them, in the great dark bulk of the Cathedral, a single lamp is burning high in the bell-tower, a small steady flame in the fourth window, where there should be no lamp, and no window, and no hand to light it.',
        'Neither of them mentions it.'
      ];
    },
    end: true, continue: 'End of the episode'
  }
});
