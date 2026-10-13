/* S1 · E5 · SUNDAY GRAVY, part 3 of 3: Act Four ("The Stoop"), tag, polls. */
EH.scenes('s01e05', {

  /* ================= ACT FOUR: THE STOOP ================= */
  a4_stoop: {
    card: { kind: 'act', label: 'Act Four', title: 'The Stoop' },
    loc: 'MIFFLIN STREET',
    clock: { time: '6:41 PM' },
    text: g => `By a quarter to seven, the light on Mifflin Street has gone long and gold and slanting, the way it only does in September, when the sun comes in low down the row and lights up every brick on the north side of the street like the inside of an oven.

Jules has been in the kitchen with Ma for an hour. You don't know what they talked about. When she comes out onto the stoop, she's holding a foil-covered paper plate of leftovers the size of a hubcap, and she has a friendship bracelet on her left wrist, pink and green, that wasn't there at lunch, and she has flour on the front of the dark green dress.

jules: Your mother showed me how she ties the braciole.

sam: She doesn't show anybody that. She didn't show *me* that.

jules: She said you'd burn the house down.

sam: That's fair.

She sits down next to you on the top step. Not close. Not far. The Range Rover's due at seven. Up and down the block, people are on their stoops in lawn chairs, and every single one of them is pretending not to look at you.

${g.hurt('black_eye5') ? 'She looks at your eye, which is swelling purple from Vinnie, and doesn\'t ask. She reaches into her cardigan pocket and hands you a white handkerchief, ironed, monogrammed JLP in navy thread. You have one of these already. You don\'t tell her that.\n\n' : ''}jules: Your family interrupts each other.

sam: Sorry.

jules: No. That's not—

She stops. Starts again.

jules: At my house, nobody interrupts. Ever. You wait until the other person's finished, and then you say the thing you were going to say anyway. Your family interrupts because they want to hear what the other person says *next*. Your father asked me four questions about the Eagles and listened to every answer. Your grandmother handed me the macaroni first. Your sister made me a *bracelet*.

She turns her wrist in the gold light. The bracelet's very badly made. She's looking at it like it's from Tiffany's.

jules: I've never been anywhere like this.

sam: It's just Mifflin Street.

jules: I know. That's what I mean.

The light moves a little further up the bricks. Down the block, a little kid is riding a Big Wheel in circles, very slowly, watching you.

jules: Your brother is looking for the Blur.

She says it to the street, not to you.`,
    next: 'a4_jules'
  },

  a4_jules: {
    text: g => `jules: A boy in a black hoodie. Who was at the fire on 15th Street the night you left the roof. Who was in Kensington the night you left the movie. Who carried a man who was on fire. Whose arms, your brother says, are *cooked*.

She looks down at your arms. Your sleeves are buttoned.

jules: Your mother made me promise not to let you lift anything heavy for a week. She didn't say why. She just said it, like she'd already decided I was somebody who'd be around to stop you.

The Big Wheel goes around. Somewhere a radio is playing the Phillies.

jules: I'm not asking.

sam: You're not?

jules: No. I'm telling you what I see. You can do what you want with it. I've noticed you always do.

${g.h('jules') >= 9 ? 'She\'s not guessing. You can hear it. She *knows*. She\'s just waiting to see what you do with her knowing.' : 'She\'s close. You can see her standing at the edge of it, deciding whether to step off.'}`,
    choices: [
      { text: '"It\'s not me, Pemberton." Look her in the eye when you say it.', tag: 'Deny',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['jules'], near: ['jules'], label: 'Lie to Jules', on: { strong: 'a4_deny_ok', weak: 'a4_deny_seen', miss: 'a4_deny_seen' } } },
      { text: '"What if it was?" Say it. Just that much.', tag: 'What if',
        fx: g => { g.flag('stoop', 'whatif'); g.heat('jules', 1); g.bond('jules', { trust: 2, affection: 1 }); g.know('whatif', ['sam', 'jules'], 'On the stoop on Mifflin Street, Jules said your brother was looking for the Blur. You said, "What if it was?"'); }, go: 'a4_whatif' },
      { text: 'Don\'t say anything. Reach over and take her hand. The one with the bracelet.', tag: 'Her hand',
        fx: g => { g.flag('stoop', 'hand'); g.bond('jules', { affection: 2 }); }, go: 'a4_hand' }
    ]
  },
  a4_deny_ok: {
    enter: g => { g.flag('stoop', 'deny'); },
    text: `sam: It's not me, Pemberton.

You look her right in the eye when you say it. Your hand stays on your knee. It's a good lie.

She studies you in the gold light, the way she studies a table before the break.

jules: Okay.

There it is again. *Okay.*

She looks back at the street.

jules: That's good. That's good, Kearney. Because whoever he is, he's going to get himself killed, and your mother would never survive it.

She smooths the flour on her dress.

jules: And neither, I think, would I.

She says it so quietly, and so fast, that by the time you understand what she said, the Range Rover is turning onto Mifflin Street.`,
    next: 'a4_goodbye'
  },
  a4_deny_seen: {
    enter: g => { g.flag('stoop', 'deny'); g.bond('jules', { trust: -1 }); },
    text: `sam: It's not me, Pemberton.

She looks at you. She looks at your left hand, resting on your knee, nowhere near your ear. You did everything right. You kept your voice flat. You didn't blink.

jules: You know what's funny? You didn't touch your ear.

sam: Because it's not a lie.

jules: Because you've gotten *better*.

She looks back at the street.

jules: You're going to get yourself killed. And you're going to do it lying to everyone who'd have helped.

She stands up and brushes off the back of her dress.

jules: Your mother would never survive it.

She doesn't say who else wouldn't. The Range Rover turns onto Mifflin Street.`,
    next: 'a4_goodbye'
  },
  a4_whatif: {
    text: `sam: What if it was?

It's very quiet on the stoop. Even the Big Wheel stops.

Jules doesn't look at you. She looks at the bracelet on her wrist. She turns it once, slowly, all the way around.

jules: Then I'd want to know why he keeps coming back to the ninth floor at all. Why he does calc problems with somebody who's mean to him. Why he goes to the movies. Why he came back up to that roof at four in the morning when there's a whole city that needs him.

She looks up at you.

jules: Hypothetically.

sam: Hypothetically.

jules: I'd want to know if he comes back because he wants to be here. Or because he doesn't trust anyone to miss him.

You don't have an answer. You open your mouth anyway, and she puts two fingers on your wrist, on your buttoned cuff, on top of the burns, very lightly.

jules: Not tonight. You said it. *Not tonight.*

She takes her fingers away.

jules: But I can count, Sam. And I'm not going anywhere.

*I'm not going anywhere.* You hear it all the way down.

At the end of the block, the Range Rover turns onto Mifflin Street.`,
    next: 'a4_goodbye'
  },
  a4_hand: {
    text: `You don't say anything. You reach over and take her left hand, the one with the bracelet, on the step between you.

She goes completely still. Up and down Mifflin Street, every lawn chair stops creaking. Mrs. Gallo, on the next stoop, puts her hand over her heart. The Big Wheel kid stops pedaling.

Jules looks down at your hand on hers. Her hand is cold. Yours isn't.

She doesn't pull it away.

jules: That's not an answer.

sam: I know.

jules: It's a very *South Philadelphia* non-answer.

sam: I know.

She turns her hand over under yours, so it's palm to palm. She doesn't lace her fingers. She just lets it lie there, palm to palm, on the warm stone step, in the last of the gold light, for thirty seconds. You count.

At thirty-one, the Range Rover turns onto Mifflin Street, and she takes her hand back, and puts it in her lap, and holds it with the other one, like it's something she doesn't want to drop.`,
    next: 'a4_goodbye'
  },

  a4_goodbye: {
    clock: { time: '7:00 PM' },
    enter: g => { if (g.h('jules') >= 10) g.flag('jules_suspects'); },
    text: g => `Mr. Abernathy gets out and opens the back door at seven exactly.

The whole family comes out to say goodbye. That's the only way it happens on Mifflin Street. Ma hugs Jules and tells her to come back, and means it, and Jules says *I will*, and you can see she means it too, and it scares you how much. Pop shakes her hand. Mikey says *nice to meet you, Jules* and looks at you with an expression that says *we will be discussing this* for the rest of your natural life. Gigi hugs her around the middle and won't let go until Ma peels her off.

Nonna stays on her own top step, three doors down. Jules goes to her. She goes up the steps without being asked, and takes both of Nonna's hands in hers, and says something you can't hear.

Nonna says something back. In Italian. You can't hear that either.

Then Jules gets in the Range Rover, with the hubcap of leftovers on her lap, and the window comes down.

jules: Tell your mother the note will arrive on Tuesday. It'll be on Crane's paper. My mother will have written it. Please don't let her read it as an insult.

sam: Everything's an insult to my mother. It's how she knows she's alive.

jules: Then she'll love it.

The window starts to go up. It stops halfway.

jules: Kearney.

sam: Yeah.

jules: Thank you for the Kearneys.

The window goes up. The Range Rover pulls away down Mifflin Street, slow and smooth as a hearse, and every head on every stoop turns to follow it to the corner, and then every head turns back to look at you.

MRS. GALLO: *Salvatore. Who is* she?

Your phone buzzes.

TXT gigi: SAMMMMM
TXT gigi: is she coming back
TXT gigi: say yes

Gigi is twelve feet away, inside, watching you through the front window.

You go sit on Nonna's step, because it's the only place on the block nobody will follow you.`,
    next: 'tag_revenant'
  },

  /* ================= TAG ================= */
  tag_revenant: {
    card: { kind: 'tag' },
    night: true,
    loc: 'MIFFLIN STREET',
    clock: { time: '7:24 PM' },
    enter: g => { g.know('revenant2', ['sam', 'nonna'], 'At dusk on Mifflin Street, the man who stands the way you stand waited under the streetlight at the end of the block. Nonna saw him too. She crossed herself.'); },
    text: g => `Nonna comes out with her rosary and sits down next to you on her top step, slowly, one hand on the rail and one on your shoulder, the way she's sat down next to you on this step ten thousand times.

She doesn't say anything for a while. She just runs the beads through her fingers. The streetlights come on one by one down Mifflin Street, *tink, tink, tink*, orange.

nonna: The tall one.

sam: Jules.

nonna: *Giulia.* Bella. Good manners. Eats like a person. Her hands are cold.

sam: You said yours are too.

nonna: Mine are cold because I'm old. Hers are cold because—

She stops. The beads stop.

nonna: Bring her back. She needs feeding.

That's not the end of the sentence she started. You turn to ask her.

And Nonna's not looking at you. She's looking down the block, toward the corner at the end of the row, where the last streetlight on the block has just come on.

There's a man standing under it.

He's tall. He's wearing a dark coat, too heavy for September. His hair is gray at the temples. From almost a block away, in the orange light, you can't make out his face. You don't need to. The way he's standing, the way he holds his weight on his left foot with his right shoulder dropped, is the way you stand. It's the way you've stood your whole life. Ma's always telling you to stand up straight.

He's looking at you. Not at the street. At *you*, on Nonna's step.

${g.S.drift >= 7 ? 'The air goes cold. Not September cold. *Slip* cold, January cold, and you\'re not in the Slip. Your breath smokes in front of your face. Nonna\'s breath smokes too.' : 'The air goes cold for a second, like a door opened somewhere.'}

Nonna's hand closes on your wrist. Her grip is iron. You didn't know she still had a grip like that.

nonna: *Gesù, Giuseppe e Maria.*

She crosses herself. Forehead, heart, left shoulder, right. Slowly. Her eyes never leave him.

nonna: Don't look at him, Salvatò. *Non guardarlo.* Don't look.

You look.

The man under the streetlight looks past you, at Nonna. He nods to her once, small and polite, the way men on this block have nodded to old women on their steps for a hundred years.

Nonna's grip tightens. You look down at it. You look back.

He's gone.

The streetlight is still on. There's nobody under it. On the sidewalk where he was standing, there's something white, catching the orange light, and you know without walking down there that it's frost.

Nonna lets go of your wrist. Her hand is shaking.

${g.knows('nonna_key') ? 'nonna: The key I gave you. You have it?\n\nYou touch your chest. It\'s on the ribbon, under your shirt. You haven\'t taken it off since she gave it to you.\n\nnonna: Good. Keep it on you.\n\nShe looks back at the empty corner.\n\nnonna: It\'s almost time, Salvatò. I didn\'t think it would be so soon.' : 'nonna: My mother told me, from 1918, from the night the bells stopped. *When the cold comes and nobody moves, you don\'t look.*\n\nnonna: Come inside. Come inside now.'}

She stands up, with your arm, and you help her through her front door, and before she closes it she turns on every light in the front room, and then she lights a candle on the windowsill, a tall glass one with the Sacred Heart on it.

You stay on the step outside. You look at the corner until the frost melts.

In September, frost should be gone in a minute. You watch it for twenty.`,
    end: true
  }
});

Object.assign(EH.episodes.s01e05, {
  polls: [
    { q: 'Jules\'s cannoli', opts: [
      { label: 'Handed to Ma', pct: 44, if: g => g.f('cannoli') === 'ma' },
      { label: 'Told her Nonna would love them', pct: 21, if: g => g.f('cannoli') === 'lie' },
      { label: '"Good, not mine"', pct: 35, if: g => g.f('cannoli') === 'truth' }
    ] },
    { q: 'Vinnie, in the alley', opts: [
      { label: 'Told him everything', pct: 22, if: g => g.f('vinnie5') === 'told' },
      { label: 'Let him land one', pct: 31, if: g => g.f('vinnie5') === 'took' },
      { label: 'Fought him', pct: 19, if: g => g.f('vinnie5') === 'fought' },
      { label: 'Slipped it', pct: 11, if: g => g.f('vinnie5') === 'slipped' },
      { label: 'Lied about the burns', pct: 17, if: g => g.f('vinnie5') === 'lied' || g.f('vinnie5') === 'called' }
    ] },
    { q: 'On the stoop', opts: [
      { label: '"It\'s not me"', pct: 27, if: g => g.f('stoop') === 'deny' },
      { label: '"What if it was?"', pct: 45, if: g => g.f('stoop') === 'whatif' },
      { label: 'Took her hand', pct: 28, if: g => g.f('stoop') === 'hand' }
    ] }
  ],
  onEnd: g => {
    g.recap('Jules came to Sunday dinner on Mifflin Street. Nonna handed her the macaroni first.');
    g.recap('Mikey is on the Blur task group now. Brannigan asked for him by name.');
    g.recap('Vinnie drives for a man named Dante, the jacket from the Melrose.');
    g.recap('A man who stands the way you do stood at the end of Mifflin Street. Nonna saw him too.');
  }
});
