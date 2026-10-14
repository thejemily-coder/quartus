/* S2 · E7 · BAD TIMING, part 4 of 4: Act Four ("The Coat"), tag, polls. */
EH.scenes('s02e07', {

  /* ================= ACT FOUR: THE COAT ================= */
  a4_call: {
    card: { kind: 'act', label: 'Act Four', title: 'The Coat' },
    night: true,
    loc: 'BUSTLETON AVENUE',
    clock: { time: '10:14 PM' },
    text: g => `${g.f('pop7') === 'safe' ? `Outside on Bustleton Avenue, it\'s raining. Vinnie has the Escalade running. Jules is standing under the bathhouse awning with her hands in her coat pockets, looking up at the rain like she\'s never seen it before.

Nothing happens.

You keep waiting for it to. You stand on the sidewalk with your phone in your hand for twenty minutes, waiting for it to ring, for Mikey, for Ma, for Bree. For the bill.

It doesn\'t ring.` : `Outside on Bustleton Avenue, it\'s raining. Vinnie has the Escalade running. Jules is standing under the bathhouse awning with her hands in her coat pockets.

At 10:14, your phone rings.

Mikey.

mikey: Sammy. Where are you.

sam: The Northeast. Why. What.

mikey: It\'s Pop.

The rain on the awning.

mikey: ${g.f('pop7') === 'crash' ? 'He\'s alive. He\'s alive, okay? A box truck ran the light on Columbus Boulevard at 9:51 and T-boned the cab. Driver\'s side. Columbus and Washington. Outside one of the piers. Collarbone, three ribs, his head\'s cut open. They took him to Jefferson. Ma\'s on her way. Get there.' : 'He\'s alive. He\'s alive, okay? Two guys came up to the cab at the airport taxi line at ten o\'clock. Pulled him out. They didn\'t take anything. They didn\'t say anything. They broke his right hand, Sammy. His driving hand. With the car door. And they did his face. Jefferson. Ma\'s on her way. Get there.'}

The line goes dead.

You\'re standing on the sidewalk. Jules is looking at you. She heard. ${g.f('pop7') === 'crash' ? 'Her face goes gray. You watch her do the arithmetic. 9:51. The pier.\n\njules: That was me.\n\nsam: Jules—\n\njules: *That was me*, Sam. I felt it go. I felt it go somewhere, and it went to your *father*.' : 'Her face goes white.\n\njules: Bruno.\n\nsam: Bruno.\n\njules: Because I ' + (g.f('folded7') ? 'folded' : 'called') + '. Because we—\n\nsam: Because he said somebody pays for a pier.'}`}`,
    next: g => g.f('pop7') === 'safe' ? 'a4_quiet' : 'a4_jefferson',
    nextTargets: ['a4_quiet', 'a4_jefferson']
  },

  a4_jefferson: {
    night: true,
    loc: 'JEFFERSON · TRAUMA BAY 4',
    clock: { time: '11:20 PM' },
    enter: g => { g.flag('pop_hurt7'); g.know('pop_hurt7', ['sam', 'jules', 'rosa', 'mikey', 'nonna', 'gigi'], g.f('pop7') === 'crash' ? 'Pop\'s cab was T-boned by a box truck on Columbus Boulevard at 9:51 p.m. on March 12, in front of Pier 53. Collarbone, three ribs, a concussion. Jefferson.' : 'On March 12, two men pulled Pop out of his cab at the airport taxi line and broke his right hand in the car door. Jefferson.'); g.bond('frank', { affection: 2 }); },
    text: g => `Jefferson, again. The same building. Eleven floors up from here, Halina Kowal is on a list.

Pop is in Trauma Bay 4 behind a curtain. ${g.f('pop7') === 'crash' ? 'Neck brace. Arm strapped across his chest. A line of black stitches across his forehead into his hair. He\'s awake. He\'s groggy. He\'s complaining about the cab, which is totaled, which was *paid off*, Rosa, it was *paid off*.' : 'His right hand is in a splint the size of a boxing glove. Both eyes are swollen shut. His lip is split. He\'s awake. He keeps saying he doesn\'t know who they were, and he keeps not looking at anybody when he says it.'}

He hears your voice before the curtain moves.

frank: Kid.

That\'s all. Ma is sitting beside the bed holding his good hand. Nonna is in the plastic chair in the corner in her black coat, with her rosary. Gigi is asleep across two waiting-room chairs out in the hall with her head on Mikey\'s jacket.

Mikey is standing by the curtain. He looks at you when you come in. He looks at Jules behind you. He doesn\'t say anything.

Ma looks up.

She looks at the white at your temple the way she looks at a kid in her nurse\'s office who says he fell off the monkey bars. Then she looks away.

You\'re bleeding. Your nose. You didn\'t notice. ${g.f('friday7') === 'slip' ? 'You never stopped, after the Boulevard.' : 'You don\'t know when it started.'}

Jules sees it. She reaches into the inside pocket of her camel coat for the handkerchief. She hasn\'t needed it since Valentine\'s.

Her hand stops.

She checks the pocket again. The other pocket. The outside ones.

jules: It\'s gone.

sam: What?

jules: The handkerchief. It\'s *gone*. ${g.f('note6') === 'told' ? 'And the card. Sam. The card\'s gone.' : ''} I keep it in this pocket. I always keep it in this pocket. I button it.

She looks at you, and you can see her go back through every day since Valentine\'s. Every room the coat has been in. Every hanger.

jules: Someone was in my coat.

You think about a golden boy in a crew jacket, smiling, coming out of the bathroom in 9-04 with his hand in his pocket.

Behind you, Ma stands up.

rosa: Salvatore.

You turn around.

She\'s looking at the blood on your lip. At the white in your hair. At the girl in the camel coat checking her pockets for a handkerchief. At your father in the bed. At the clock on the wall.

rosa: Outside. Now.

Nonna, in the corner, stops moving her rosary.

nonna: *(very quietly)* Ecco. Now it\'s time.`,
    next: 'tag_hugh'
  },

  a4_quiet: {
    night: true,
    loc: 'CARDONE HALL · 9-14',
    clock: { time: '11:51 PM' },
    enter: g => { g.know('pop_call7', ['sam'], 'At 11:51 on March 12, Pop called just to say goodnight. He never calls.'); g.bond('frank', { affection: 2, trust: 1 }); },
    text: g => `Back on the ninth floor. ${g.f('friday7') !== 'jules' ? 'There\'s a sticky note on your door in Simone\'s handwriting. ' + (g.f('friday7') === 'slip' ? '*ROW C. NINE. I SAW YOU. I SAW YOU, SALVATORE. — S.* With a heart. A real one.' : '*ROW C. NINE. FIRST ACT ONLY. I\'M NOT DONE BEING ANGRY. — S.*') : 'There\'s nothing on your door. No note from Simone. That\'s worse.'}

Jules sits on your bed in her coat. She hasn\'t taken it off. She\'s looking at the wall.

jules: Nothing happened.

sam: Nothing happened.

jules: I keep waiting.

At 11:51, your phone rings.

Pop.

Pop never calls. Pop has called you four times in your life, and three of them were to ask where the cab keys were.

sam: Pop?

frank: Kid.

A long pause. You can hear the TV. The Flyers, losing.

frank: Nothing. I just— I don\'t know. I was sitting here and I thought, I\'ll call the kid. Your mother\'s asleep. I don\'t know.

sam: You okay?

frank: Yeah. I\'m good. Something weird today. Dante Iannucci called me. Said, and I\'m quoting here, *your paper\'s clean, Frank.* Then he hung up. ${g.f('split7') ? 'Then he called back and said *half clean*. Then he hung up again.' : ''} I don\'t know what that means, kid. I been sitting here two hours not knowing what that means.

You close your eyes.

frank: You know what that means?

sam: Yeah, Pop. I know what it means.

A long pause.

frank: Okay. Okay. Don\'t tell me. Your mother wants you home Sunday. Alone, she said. Don\'t ask me. She\'s been weird all week.

frank: Goodnight, kid.

He hangs up.

Jules is looking at you. She puts her hand in the inside pocket of her camel coat, for the handkerchief, to give her hand something to hold.

Her hand stops.

She checks the pocket again. The other pocket.

jules: It\'s gone.

sam: What?

jules: The handkerchief. ${g.f('note6') === 'told' ? 'And the card. Sam. The card\'s gone.' : ''} I button this pocket. I always button it.

She looks at you. You can see her going back through every room the coat has been in.

jules: Someone was in my coat.

You think about a golden boy in a crew jacket, smiling, coming out of the bathroom in 9-04 with his hand in his pocket.`,
    next: 'tag_hugh'
  },

  /* ================= TAG ================= */
  tag_hugh: {
    card: { kind: 'tag' },
    night: true,
    loc: 'WAWA · CITY AVENUE',
    clock: { day: 'Sat', date: 'Mar 13', time: '1:15 AM' },
    text: g => `> THE CAMERA.

A Wawa parking lot on City Avenue at one in the morning. The only lit thing for a mile.

A silver Volvo, Penn parking sticker in the windshield. Hugh Pemberton behind the wheel, in his crew jacket.

A gray Camry pulls in beside him. The passenger window comes down.

Cole Brannigan, with a Wawa coffee.

BRANNIGAN: Mr. Pemberton.

Hugh holds out a Ziploc bag. Inside it, folded neatly, a white handkerchief. *JLP* in navy thread. Brown stains on it, old and new.

Brannigan takes it. He looks at it in the parking lot light. He doesn\'t open the bag.

BRANNIGAN: Thank you. Dr. Achterberg will be in touch.

He starts to roll up the window. Stops.

BRANNIGAN: Was there anything else in the pocket?

Hugh looks at him.

hugh: No.

BRANNIGAN: Mm.

The window goes up. The Camry pulls out onto City Avenue and is gone.

Hugh sits in his Volvo with the engine off.

${g.f('note6') === 'told' ? 'After a minute, he takes something out of the inside pocket of his crew jacket. An index card, soft at the corners, folded in half. He unfolds it.\n\nOn the front, in pencil, in a hand he doesn\'t know: *What did you mean?*\n\nOn the back, in his sister\'s handwriting: *I don\'t know yet. When I know, you\'ll be the first.*\n\nAnd under that, in black ballpoint, in the same stranger\'s hand, pressed so hard it tore the card:\n\n*Don\'t trust the lucky one.*\n\nHugh reads it twice, in the light from the Wawa.\n\nThen he smiles. Not a nice smile. He has come second for eighteen years to a sister six minutes younger than he is, and he has just found out he isn\'t the only one who doesn\'t trust her luck.' : 'He sits there, looking at the empty space where the Camry was.\n\nThen he looks at his own hands on the steering wheel. Turns them over. Looks at them, like he\'s waiting for something to happen.\n\nNothing does.'}`,
    end: true
  }
});

Object.assign(EH.episodes.s02e07, {
  polls: [
    { q: 'Briscola', opts: [
      { label: 'Lose', pct: 34, if: g => g.f('briscola7') === 'lost' },
      { label: 'Let her win', pct: 21, if: g => g.f('briscola7') === 'luck' },
      { label: 'Her call', pct: 45, if: g => g.f('briscola7') === 'skill' }
    ] },
    { q: 'Friday night', opts: [
      { label: 'Half and half', pct: 38, if: g => g.f('friday7') === 'half' },
      { label: 'Jules', pct: 29, if: g => g.f('friday7') === 'jules' },
      { label: 'Slipped for both', pct: 33, if: g => g.f('friday7') === 'slip' }
    ] },
    { q: 'The last hand', opts: [
      { label: 'Let it go her way', pct: 31, if: g => g.f('game7') === 'luck' },
      { label: 'Read him for her', pct: 52, if: g => g.f('game7') === 'read' },
      { label: 'Fold', pct: 17, if: g => g.f('game7') === 'fold' }
    ] }
  ],
  onEnd: g => {
    g.recap('Hugh came to Cardone Hall with Callum. He used the bathroom in 9-04.');
    g.recap('Jules played cards for Bruno Iannucci. For Pier 53.');
    if (g.f('paid7')) g.recap('Pop\'s debt to the Iannuccis is paid. "Your paper\'s clean, Frank."');
    else if (g.f('split7')) g.recap('A split pot. Pop\'s debt is half paid. Bruno wants to see her play again.');
    if (g.f('pop7') === 'crash') g.recap('At 9:51, a box truck hit Pop\'s cab in front of Pier 53. Jules felt it go.');
    else if (g.f('pop7') === 'beaten') g.recap('Somebody paid for the pier. Bruno\'s men broke Pop\'s driving hand.');
    g.recap('The handkerchief is gone from Jules\'s coat.' + (g.f('note6') === 'told' ? ' So is the card.' : ''));
    g.recap(g.f('pop7') === 'safe' ? 'Ma wants you home Sunday. Alone.' : 'At Jefferson, Ma looked at your hair. "Salvatore. Outside. Now."');
  }
});
