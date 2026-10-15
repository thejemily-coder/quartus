/* S3 · E1 · ONE YEAR, part 4 of 4: Act Four ("11:51"), tag, polls, recap. */
EH.scenes('s03e01', {

  /* ================= ACT FOUR: 11:51 ================= */
  a4_corner: {
    card: { kind: 'act', label: 'Act Four', title: '11:51' },
    night: true,
    loc: 'BROAD & SPRING GARDEN',
    clock: { day: 'Sun', date: 'Aug 22', time: '11:40 PM' },
    text: g => `Broad and Spring Garden, at 11:40 on a Sunday night.

The same corner. The bank on one side, with the same clock over the door. The bus shelter, rebuilt; the old one was crushed. The traffic light that was red a year ago and is red now. It\'s not raining. It was raining then.

Jules is next to you with her hands in her hoodie pocket. ${g.f('watch1') === 'lounge' || g.f('watch1') === 'hall' ? 'Nik is in your ear from the seventh floor of 1300, a mile north, with his four monitors.' : 'Nik is in your ear from the seventh floor of 1300, where he\'s been since four, with his four monitors and the rest of the wedding cake.'}

nik: *(in your ear)* I got the traffic cams. I got the bank cam. I got a seismograph at Penn, don\'t ask. I got a guy on Reddit in Fishtown with a ham radio. If anything happens at 11:51, I will know about it in four different formats.

You\'re not the only ones here.

You didn\'t expect that. Up and down the four corners, standing apart from each other, not talking: people. A dozen. Maybe fifteen. A woman in scrubs. Two guys in Temple football shirts. An old man with a cane. A girl about your age in a black hoodie, alone, on the far corner, with her hands jammed in her pockets.

All of them, every one, with their hands in their pockets. In August.

jules: *(very quietly)* They\'re cold.

sam: Yeah.

jules: They\'re all cold. They didn\'t know where else to go. *(beat)* Sam. They\'re the *sixty-one*.

Parked at the curb in front of the bank: a white van with the kingfisher on the side and a banner on a frame on the roof. *BROAD STREET REGISTRY · WE\'RE HERE · 24/7.* The side door is open. A folding table. Bottled water. Pamphlets. Hugh, in his navy polo, sitting on the step of the van in the yellow light, with a clipboard on his knee, looking at his phone, golden and bored.

He hasn\'t seen you yet.

11:47.`,
    choices: [
      { text: 'Stay where you are. Take Jules\'s hand. Whatever happens at 11:51, it happens to both of you.', tag: 'Her hand',
        fx: g => { g.flag('corner1', 'hand'); g.bond('jules', { affection: 1, trust: 1 }); g.hidden('revenant_drift', -1); }, go: 'a4_minute' },
      { text: 'Walk over to the van. Four minutes is enough time to say something to Hugh Pemberton.', tag: 'Hugh',
        fx: g => { g.flag('corner1', 'hugh'); g.meet('hugh'); }, go: 'a4_hugh' },
      { text: 'Get ready to Slip at 11:51 exactly. Whatever happens in that second, you want to see it from the inside.', tag: 'Look inside', slip: true,
        fx: g => { g.flag('corner1', 'slip'); g.hidden('revenant_drift', 0.5); }, go: 'a4_minute' }
    ]
  },

  a4_hugh: {
    night: true,
    loc: 'BROAD & SPRING GARDEN · THE REGISTRY VAN',
    clock: { time: '11:48 PM' },
    enter: g => { g.know('hugh_registry1', ['sam', 'jules', 'hugh'], 'Hugh, at the Registry van on the anniversary: "You think I\'m the villain. I\'m handing out water." Jules: "You\'re handing out *me*."'); },
    text: `You cross the street. Jules comes with you. She doesn\'t let go of your hand.

Hugh looks up from his phone. The smile arrives fully formed, like it was waiting in a drawer.

hugh: Jubilee. And the *boyfriend*. Happy anniversary. Water?

He holds out a bottle. Nobody takes it. He sets it on the step.

hugh: You\'re looking at me like I\'m the villain. I\'m handing out *water*, Kearney. There are fifteen frightened people on these corners whose hands haven\'t been warm in a year, and nobody in this city ever told them why, and tonight somebody is sitting in a van with a pamphlet that says *you are not alone*. That\'s me. That\'s what I\'m doing.

jules: You\'re handing out *me*.

Hugh\'s smile doesn\'t move. Something behind it does.

jules: You took my handkerchief out of my coat. You gave it to them in a Ziploc bag. You\'ve been reporting on me since March. Since *before* March. You\'re not handing out water, Hugh. You\'re handing out your sister.

Hugh looks at her.

hugh: *(lightly)* Somebody has to keep an eye on you, Jubilee. You\'ve been so *lucky* lately.

He looks at you.

hugh: And you. *(he picks up the clipboard, flips a page, doesn\'t read it)* I\'ve been doing outreach for eleven hours. Do you know what every single one of them asks me, Kearney? The same question. *Is there a cure.*

hugh: Nobody asks if there\'s a cure for being *lucky*.

11:50.

He looks at the bank clock. Then back at you. Something flickers across his face that isn\'t charming at all. It looks, for a second, like a kid who wants to be picked.

hugh: You should go back to your corner. It\'s almost time. *(beat)* I want to see what happens too.`,
    next: 'a4_minute'
  },

  a4_minute: {
    night: true,
    loc: 'BROAD & SPRING GARDEN',
    clock: { time: '11:51 PM' },
    enter: g => { g.know('skip1', ['sam', 'jules', 'nik', 'jayden'], 'At 11:51:04 on Aug 22, 2027, the anniversary, every clock and phone in North Philadelphia showed 11:51:04 for two seconds instead of one. The streetlights dimmed and came back. Nik\'s seismograph at Penn registered nothing. The bank clock at Broad and Spring Garden stopped for exactly one second.'); },
    text: g => `11:51:00.

Jules\'s hand in yours. Cold.

11:51:01. :02. :03.

Across the street, the girl in the black hoodie takes her hands out of her pockets.

11:51:04.

The streetlights dim. All of them, up and down Broad, at once, like a breath. They come back.

The bank clock\'s second hand stops.

And it stays stopped. For exactly one second. You watch it hang there on the four, one tick too long, like it forgot what comes next, and then it remembers and goes on to five.

Every phone on every corner shows the same thing. You look at yours. *11:51:04.* Then *11:51:04.* Twice.

nik: *(in your ear, barely a voice)* Salvatore. Every clock I have just did that. Every one. The traffic cams. The bank. The atomic clock app on my phone, which syncs to *Boulder, Colorado*. They all skipped. Or. Not skipped. *Stuttered.* They all said four twice.

nik: The seismograph didn\'t move. Nothing *moved*. Time just... hiccuped.

${g.f('corner1') === 'slip' ? '' : 'You felt it. Cold, the way Jayden said, everywhere at once. Not the Slip. Something under your feet, under the asphalt, under the subway, like a door somewhere far below you took one breath in and one breath out.'}

${g.f('corner1') === 'hand' ? 'Jules felt it too. Her hand jerks in yours, hard, like something pulled on it.\n\njules: *(barely)* Did you feel that?\n\nsam: Yeah.\n\njules: My luck. It went *that way*. *(she points down, at the street, at the middle of Broad)* All of it. Like a tide going out. Like something down there was pulling on it.\n\nShe holds on with both hands.\n\njules: And then you held on, and it came back.' : g.f('corner1') === 'hugh' ? 'At the van, Hugh is on his feet, staring at his phone, at the two fours. For the first time since you\'ve known him, he looks nineteen.\n\nJules\'s hand jerks in yours, hard, like something pulled on it.\n\njules: *(barely)* My luck. It went *that way*. Down. Into the street.' : ''}`,
    next: g => g.f('corner1') === 'slip' ? 'a4_inside' : 'a4_after',
    nextTargets: ['a4_inside', 'a4_after']
  },

  a4_inside: {
    night: true,
    loc: 'BROAD & SPRING GARDEN · BETWEEN',
    enter: g => { if (g.unsticks()) g.unstick('unstick_s3e1c', 'Time debt (the anniversary)'); g.flag('saw_seam1'); g.know('seam1', ['sam'], 'In the Slip at 11:51:04 on the anniversary, Sam saw a hairline of white light running down the center of Broad Street, from the corner at Spring Garden south toward City Hall, like a crack in a plate. Across the street, a girl in a black hoodie was not stopped. Her eyes moved. She looked at him.'); g.hidden('halcyon_heat', 1); },
    text: g => `That second, 11:51:04, the one that happened twice: you spent it inside.

${g.unsticks() ? 'The cold grabs.' : 'The pool. Still.'}

And it\'s different.

Broad Street, stopped. Streetlights held at half. The bank clock with its second hand on the four. Fifteen people on four corners, frozen with their hands half out of their pockets. Hugh at the van, mid-stand, his water bottle tipping.

And down the middle of Broad Street, along the double yellow line, a crack.

A hairline of white light. Thinner than a thread. Running straight down the center of the road from your feet, south, past the bank, past Callowhill, toward City Hall, as far as you can see. Like somebody took a plate and dropped it, once, and it didn\'t break, it just *cracked*, and the crack is full of light.

It\'s humming. Not a sound. A feeling in your teeth.

You crouch down. You don\'t touch it.

It\'s wider than it was. You don\'t know how you know that. You\'ve never seen it before. But you know, the way you know your own handwriting, that a year ago this was narrower, and a year from now it\'ll be wider still.

You look up.

On the far corner, the girl in the black hoodie.

She isn\'t stopped.

She\'s standing very still, with her hands at her sides, and her eyes are moving. Following you. She looks at you crouched in the middle of Broad Street next to a crack full of light, and she doesn\'t look surprised. She looks like someone who\'s been waiting a year for somebody else to show up.

She lifts one hand. Not a wave. Just: *I see you.*

Then she turns around and walks up Spring Garden into the stopped city, and you lose her behind the bus shelter.

You step back out.

Jules is looking at you.

jules: You went in.

sam: There\'s a crack in Broad Street.

jules: *(very calmly)* Of course there is.`,
    next: 'a4_after'
  },

  a4_after: {
    night: true,
    loc: 'BROAD STREET, WALKING NORTH',
    clock: { time: '12:20 AM' },
    text: g => `Afterward, the fifteen people on the four corners go home, one at a time, without talking to each other, the way people leave a funeral for somebody they didn\'t know well. A few of them stop at the van for water. Most don\'t.

You and Jules walk north on Broad. A mile. Past the Divine Lorraine, past the place on Girard that sells the good cheesesteaks, closed now. It\'s hot. Her hand in yours is cold again, her ordinary cold.

${g.f('mother1') === 'ask' ? 'jules: I\'m going to start the letter tonight. *Dear Mother.* No. *Mother.* No. I\'ll figure it out. I have four hundred sheets of Crane\'s.' : g.f('mother1') === 'call' ? 'Her phone has buzzed thirty-one times since noon. She hasn\'t turned it over once.\n\njules: She\'s going to come to campus. Tomorrow. I know her. She\'ll come in the car and stand in the lobby of 1300 in her cream jacket and say *Juliet* until I come down.' : 'jules: Tomorrow I\'ll call her. Tomorrow. Today was ours. I wanted one thing to be ours.'}

${g.knows('seam1') ? 'jules: A crack.\n\nsam: Down the middle of the road. Full of light. It\'s getting wider.\n\njules: *(after a long time)* We were standing in a door, Sam. A year ago. I always thought a door closes behind you.' : 'jules: Something pulled on me. Down there. Under the street.\n\nsam: I felt it too.\n\njules: *(after a long time)* We were standing in a door, Sam. A year ago. I always thought a door closes behind you.'}

At the corner of Broad and Cecil B. Moore, outside 1300, under the big Temple T, she stops.

jules: One year.

sam: One year.

jules: A year ago, I didn\'t know your name. I thought you were the minifridge boy. *(she almost laughs)* You still are.

${g.f('roof10') === 'love' ? 'She goes up on her toes and kisses you, on Broad Street, under the T, in front of a bus.\n\njules: I love you. Happy Hitch Day. That\'s what Nik\'s calling it. I\'m afraid it\'s stuck.' : 'She goes up on her toes and kisses you, on Broad Street, under the T, in front of a bus.\n\njules: Happy Hitch Day. That\'s what Nik\'s calling it. I\'m afraid it\'s stuck.'}

Upstairs, on the seventh floor, Nik has left the last slice of wedding cake on a paper plate outside your door, with a Post-it.

*HAPPY HITCH DAY. I ATE MOST OF THE CAKE. IT WAS A WEDDING. -N*`,
    next: 'tag_catherine'
  },

  /* ================= TAG ================= */
  tag_catherine: {
    card: { kind: 'tag' },
    night: true,
    loc: 'RAVENSCOURT · CATHERINE\'S STUDY',
    clock: { day: 'Mon', date: 'Aug 23', time: '1:10 AM' },
    text: g => `> THE CAMERA.

Ravenscourt, on the Main Line. One lamp on, in a study lined with medical journals bound in green.

Dr. Catherine Pemberton sits at her desk, still in the cream jacket from City Hall. ${g.f('mother1') === 'call' ? 'Her phone is on the blotter, face up. Thirty-one calls to *Juliet*. Unanswered. She stopped calling at nine.' : 'Her phone is on the blotter, face up. No calls.'}

On the laptop: a login screen. *BROAD STREET REGISTRY · CLINICAL PORTAL.* A field for her credentials as medical advisor. She types them with two fingers, precisely.

A search box.

She types: *PEMBERTON*.

Her finger hovers over the key. Then she presses it.

One result.

*ES-44 · PEMBERTON, JULIET L. · AGE 19 · STATUS: OBSERVE · DO NOT RECOVER*
*HANDLER: H. PEMBERTON (OUTREACH)*
*NOTES: Subject unaware. Exceptional. See Director.*

She reads it four times. She doesn\'t move.

Then she reads the line about the handler again.

She closes the laptop very gently. She sits in the lamplight with her hands flat on the closed lid, the way you\'d hold a door shut against something on the other side.

After a while she gets up, and walks down the long dark hall in her stocking feet, past the portraits, to the door at the end, where there\'s a line of light underneath. She doesn\'t knock.

Constance Pemberton is in a wingback chair in her dressing gown, with a book she isn\'t reading and a glass of something amber. She doesn\'t look surprised. She looks like she\'s been sitting up waiting for this exact door to open, for a very long time.

catherine: Did you know?

Constance closes the book.

constance: Sit down, Catherine.

catherine: *Did you know.*

constance: Yes. *(she pours a second glass and holds it out)* Since before she was born. Sit. You\'ll want this.

Catherine looks at the glass.

She sits down.`,
    end: true
  }
});

Object.assign(EH.episodes.s03e01, {
  polls: [
    { q: 'The press conference', opts: [
      { label: 'City Hall, in person', pct: 34, if: g => g.f('watch1') === 'hall' },
      { label: 'Mifflin Street', pct: 41, if: g => g.f('watch1') === 'home' },
      { label: 'The 1300 lounge', pct: 25, if: g => g.f('watch1') === 'lounge' }
    ] },
    { q: 'Jules\'s mother', opts: [
      { label: '"Call her"', pct: 22, if: g => g.f('mother1') === 'call' },
      { label: '"Not today"', pct: 31, if: g => g.f('mother1') === 'wait' },
      { label: '"What do you want?"', pct: 47, if: g => g.f('mother1') === 'ask' }
    ] },
    { q: 'Carmen\'s stoop', opts: [
      { label: 'Asked Carmen', pct: 38, if: g => g.f('wellness1') === 'carmen' },
      { label: 'Talked them off', pct: 21, if: g => g.f('wellness1') === 'talk' },
      { label: 'Called Mikey', pct: 18, if: g => g.f('wellness1') === 'mikey' },
      { label: 'Read the clipboard', pct: 23, if: g => g.f('wellness1') === 'clipboard' }
    ] },
    { q: '11:51', opts: [
      { label: 'Held her hand', pct: 44, if: g => g.f('corner1') === 'hand' },
      { label: 'Talked to Hugh', pct: 24, if: g => g.f('corner1') === 'hugh' },
      { label: 'Looked inside', pct: 32, if: g => g.f('corner1') === 'slip' }
    ] }
  ],
  onEnd: g => {
    g.recap('On the anniversary, the City and Halcyon opened the Broad Street Exposure Registry. Jules\'s mother stood at the podium.');
    g.recap(g.f('mother1') === 'call' ? 'Jules called her mother. "Are you cold, Juliet?" She hung up.' : g.f('mother1') === 'ask' ? 'Jules decided to write her mother a letter. "She can\'t interrupt a letter."' : 'Jules didn\'t call her mother. "She can have tomorrow."');
    g.recap('Registry outreach came to Carmen Torres\'s door for Jayden.' + (g.f('wellness1') === 'carmen' ? ' Carmen told them no herself.' : g.f('wellness1') === 'mikey' ? ' Mikey sent them away. "Next it\'s cops."' : g.f('wellness1') === 'clipboard' ? ' Their route sheet had Bree and Heck on it.' : ''));
    if (g.f('dhs_threat1')) g.recap('The city inspector said he would refer Carmen to DHS.');
    g.recap('Jayden: "It\'s gonna get cold tonight. Everywhere. At the time."');
    g.recap('One year after the Hitch, at 11:51:04, every clock in North Philadelphia said four twice.');
    if (g.f('saw_seam1')) g.recap('In the Slip, a crack of light ran down the middle of Broad Street. A girl in a black hoodie wasn\'t stopped.');
    g.recap('Catherine Pemberton found ES-44 in the Registry. Handler: H. Pemberton. Constance: "I\'ve known since before she was born."');
  }
});
