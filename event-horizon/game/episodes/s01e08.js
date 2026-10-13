/* S1 · E8 · ALL HALLOWS, part 1 of 3: meta, cold open, Act One ("Costumes"). */
EH.episode({
  id: 's01e08', season: 1, number: 8, title: 'All Hallows', look: 's1',
  cast: ['sam', 'jules', 'nik', 'simone', 'grace', 'femi', 'mikey', 'bree'],
  start: 'cold_open',
  xp: 5,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'NAVY YARD · BUILDING 7',
      clock: { day: 'Fri', date: 'Oct 30', time: '11:52 PM' },
      text: `> THE CAMERA.

The room is white and quiet and very clean. It has a bed with good sheets, a desk with a bowl of fruit nobody has touched, a television playing a cooking show with the sound off, and, high in the corner where the wall meets the ceiling, a small black dome with a red light in it.

Femi Ojo is sitting on the edge of the bed in a gray Halcyon sweatshirt with the tags still on it, holding a white plastic band on his wrist with his other hand, turning it around and around.

**HCW-COHORT 2 · 031 · RESIDENTIAL.**

He\'s been here since four o\'clock. At five, a woman in a lab coat brought him a tray of food and sat across from him while he ate it, with a stopwatch. *Seven seconds,* she said, delighted, when she looked down at her clipboard and then looked up and couldn\'t find him for a moment, though he hadn\'t moved. *Seven, Femi. You\'re getting so much better.*

At nine, they took more blood. Eight vials. Then a ninth, from his hip, with a needle as long as a pencil, and they gave him something first that made the room go soft and bright, and he remembers lying on his side on a paper sheet looking at the wall while somebody behind him said *again* in a calm voice.

At eleven, he went to the bathroom down the hall, and nobody walked with him. Nobody noticed him go. On the way back, he passed a door with a narrow window in it, and he looked in.

A girl was sitting on a bed. Dark curly hair. A gap in her teeth. She was looking at the ceiling light, and the ceiling light was flickering, faster and faster, the way lightbulbs flicker in the second before they pop.

She looked at the window. She looked right at him. Nobody looks right at him.

She mouthed something. Two words. He read it the way you read lips across a lecture hall.

*Get out.*

He\'s been sitting on the bed for forty minutes since then. Turning the band on his wrist.

At 11:52, he stands up. He takes off the gray sweatshirt and puts on his own hoodie, his Temple Econ hoodie, the one that hangs off him now like it\'s on a hanger. He opens the door. The hallway is empty and white and lit. He walks down it. A man in a polo shirt comes around the corner carrying a coffee, and walks right past him, close enough to touch, and doesn\'t look.

Femi keeps walking. Through a door. Down a stairwell. Out a fire exit into the cold, into the dark of the Navy Yard, toward the lights of Broad Street.

> ELSEWHERE IN BUILDING 7.

On a bank of monitors in a dim room, a small figure in a hoodie crosses a parking lot. On every screen, the cameras keep almost losing him, sliding off him, the picture going soft at the edges where he is, the way your eye slides off a word you\'ve read too many times.

A man in a gray polo shirt watches him go. He has a mug of tea in his hand. He doesn\'t put it down.

ASSISTANT: Sir. ES-31 is leaving the building.

BRANNIGAN: I see him.

ASSISTANT: Do we—

BRANNIGAN: No. Let him run.

He sips his tea.

BRANNIGAN: Let\'s see who he runs to.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_halloween' },

    /* ================= ACT ONE: COSTUMES ================= */
    a1_halloween: {
      card: { kind: 'act', label: 'Act One', title: 'Costumes' },
      loc: 'CARDONE HALL · 9TH FLOOR',
      clock: { day: 'Sat', date: 'Oct 31', time: '2:30 PM' },
      enter: g => { g.sleep(7); g.know('mikey_pop_dinner', ['sam', 'mikey', 'frank', 'rosa'], 'Sunday Oct 25: Mikey asked Pop about Dante Iannucci at the table. Pop told him. Ma found out about the $41,000 that way. Nobody ate.'); },
      text: g => `Halloween on the ninth floor of Cardone Hall is a war crime.

There are fake cobwebs on every doorframe, a strobe light in the bathroom that Grace has confiscated twice and that keeps reappearing, a bowl of candy corn outside 9-06 that nobody touches because it\'s candy corn, and a sign-up sheet on the lounge door for the costume contest, judged by Grace, with a first prize of *one (1) uncontested shower slot, 7:30–7:45 a.m., for the rest of the semester*. It\'s the most valuable prize in the history of Temple University.

And it\'s the year of the Blur.

You know this because, by two-thirty in the afternoon, you\'ve already seen *four* Broad Street Blurs on the ninth floor alone. Devontae\'s going as the Blur: a green Ciro\'s T-shirt he bought on Passyunk, a black bandana, and a Wawa bag. The twins in 9-03 are going as *the Blur and the bus*. A girl from the eighth floor came up to borrow a hair dryer dressed as the Blur in a cardboard Liberty Cab.

You stand in your doorway and watch a sophomore in a Ciro\'s shirt do a slow-motion run down the hallway making *whoosh* noises while his friends film it.

It\'s the funniest thing that\'s happened to you in your entire life, and you can\'t tell anyone.

${g.knows('mikey_pop_dinner') ? `It\'s been a strange two weeks. Last Sunday was Sunday dinner on Mifflin Street, and Mikey waited until the macaroni, and then he put his fork down and said, *Pop. Who\'s Dante Iannucci?* And Pop told him. All of it. At the table. In front of Ma.\n\nNobody ate. Ma didn\'t speak to Pop until Tuesday. Gigi texted you eleven times that night asking what *the debt* was. Nonna lit a candle the size of a hydrant and didn\'t say one word, which is how you know it\'s the worst thing that\'s happened in that house since 2009.\n\nMikey caught you on the stoop after. He said *look at me, Sammy*, and you looked at him, and he looked at you for a long time, and he didn\'t ask the second question. You don\'t know why. You think maybe he was scared of the answer. You think maybe you\'re both scared of the same thing.` : ''}

Behind you, Nik is in your room in a full Ghostbusters jumpsuit, which he ordered in August, and a proton pack made out of a vacuum cleaner and a shoebox, and he\'s been waiting for you to notice him for six minutes.

nik: Bro.

sam: I see you.

nik: You *don\'t*. You\'re looking at the Blurs. Look at *me*. I\'m Egon. I\'m the smart one. It\'s very meaningful.

He looks you up and down.

nik: What are *you* going as?`,
      choices: [
        { text: 'The Blur. Obviously. Green Ciro\'s shirt, black bandana. Hide in plain sight.', tag: 'The Blur',
          fx: g => { g.flag('costume8', 'blur'); g.bond('nik', { affection: 1 }); }, go: 'a1_costume' },
        { text: 'Ray Stantz. Nik bought you a jumpsuit too. You know he did. He\'s had it in his closet since August.', tag: 'Ghostbuster',
          fx: g => { g.flag('costume8', 'ghostbuster'); g.bond('nik', { affection: 2, trust: 1 }); }, go: 'a1_costume' },
        { text: 'A cab driver. Pop\'s old Liberty Cab jacket from the hall closet on Mifflin Street. You don\'t tell anyone why.', tag: 'Pop',
          fx: g => { g.flag('costume8', 'cabbie'); g.bond('frank', { affection: 1 }); }, go: 'a1_costume' }
      ]
    },
    a1_costume: {
      text: g => `${{
        blur: 'nik: Oh, you *absolute* psychopath.\n\nsam: There are four of them on this floor. Five, now. Nobody\'s gonna look twice.\n\nnik: That\'s either the smartest thing you\'ve ever done or the stupidest, and I genuinely cannot tell.\n\nYou put on a green Ciro\'s shirt. Your *actual* green Ciro\'s shirt, with the grease stain on the hem from August. You tie a black bandana over your nose. You look in the mirror, and the Broad Street Blur looks back, and he looks exactly like every other drunk kid in North Philly tonight.\n\nIt\'s the safest you\'ve felt in months.',
        ghostbuster: 'nik: …Wait. Are you serious?\n\nsam: You bought me one. I know you bought me one.\n\nNik goes very quiet. Then he goes to his closet and takes out a second jumpsuit, still folded in its plastic bag, *STANTZ* on the name tag in his own handwriting.\n\nnik: I bought it in August. Before. I didn\'t know if we\'d still be friends by Halloween.\n\nsam: Nik.\n\nnik: Shut up. Put it on. You\'re Ray. Ray\'s the heart. It\'s very meaningful.\n\nYou put it on. It\'s too short in the legs. You don\'t care.',
        cabbie: 'You took it from the hall closet on Mifflin Street on Sunday, when nobody was looking: Pop\'s old Liberty Cab jacket, green and yellow, from 1998, with *FRANK* on a patch over the heart. It smells like the inside of a cab. Like cigarettes and pine tree air freshener and coffee and him.\n\nnik: You\'re going as… a cab driver?\n\nsam: I\'m going as my dad.\n\nNik looks at you for a second. Then he nods, slowly, and doesn\'t make a single joke, which is how you know he understands.'
      }[g.f('costume8')]}

The day goes by in the way that Halloween days go by in a dorm: nobody does any work, everybody eats too much candy, and at five o\'clock Grace comes down the hallway in scrubs with a stethoscope and a clipboard, which is either her costume or her actual life, and nobody has the courage to ask.

You have a few hours before Simone\'s show at eight.`,
      next: 'a1_hub'
    },

    /* ---------- Saturday hub ---------- */
    a1_hub: {
      loc: 'SATURDAY · OCTOBER 31',
      clock: { time: '5:00 PM' },
      text: `Simone\'s show is at eight, in the Randall Theater. The floor party starts after. You have time for two things.`,
      hub: {
        slots: 2, label: 'Halloween afternoon',
        blurb: 'The show is at eight.',
        options: [
          { id: 'hal_femi', text: 'Text Femi. You haven\'t seen him in Calc all week. Ask if he wants to come to the party. He\'d hate it. Ask anyway.', cost: 1, tag: 'Femi', go: 'a1_femi' },
          { id: 'hal_jules', text: 'Jules\'s door is closed. Simone said she\'s been "building something" since noon. Knock.', cost: 1, tag: 'Jules', go: 'a1_jules' },
          { id: 'hal_bree', text: 'Bree texted at noon: *halloween party in port richmond. heck is a pumpkin.* Call her back.', cost: 1, tag: 'Bree', go: 'a1_bree' },
          { id: 'hal_nap', text: 'Nap. You\'re tired all the way down. Two weeks of catching up isn\'t enough.', cost: 1, tag: 'Rest', go: 'a1_nap' }
        ],
        done: 'a1_show'
      }
    },

    a1_femi: {
      enter: g => { g.flag('texted_femi'); g.know('femi_unanswered', ['sam'], 'On Halloween afternoon, you texted Femi to come to the party. The texts didn\'t deliver. His phone was off.'); },
      text: `TXT sam: yo. party on 9 tonight. floor costume contest. grace is judging. you should come
TXT sam: nobodyll see you so you can eat all the candy
TXT sam: thats a joke. come anyway

Nothing. You watch the screen. The little gray text under your messages doesn\'t say *Read*. It doesn\'t even say *Delivered*.

You call. It goes straight to voicemail.

*Hey, this is Femi. If you\'re hearing this, congratulations, you found me. Leave a message.*

You don\'t leave a message. You think: his phone\'s dead. You think: he\'s at the library, in a carrel, being invisible, with a dead phone, which is the most Femi thing in the world.

You think: you haven\'t seen him in two weeks. You think: when was the last time you went looking?

You put the phone in your pocket. You\'ll try him again tonight.`,
      next: '@hub'
    },

    a1_jules: {
      enter: g => { g.bond('jules', { affection: 1 }); },
      text: g => `You knock. Three times, evenly spaced. Like a metronome with manners.

From inside, a long pause. Then:

jules: Who is it.

sam: It\'s Kearney.

jules: Go away. I\'m busy.

sam: Simone says you\'re building something.

jules: Simone has a very large mouth for someone so small.

The door opens four inches. Jules looks at you through the gap. Her hair is pinned up in a way you\'ve never seen, and she has a smear of gold paint on her cheekbone, and she\'s wearing an old Penn sweatshirt with the sleeves pushed up and paint on both forearms.

She looks at your costume. ${{ blur: 'At the green Ciro\'s shirt. The bandana around your neck. Her eyebrows go up very slowly.\n\njules: You\'re going as the *Blur*.\n\nsam: Everybody\'s going as the Blur.\n\njules: Not everybody, Kearney.\n\nShe says it lightly. Her eyes don\'t say it lightly. You both stand there with that in the doorway for a second.', ghostbuster: 'At the jumpsuit. *STANTZ*.\n\njules: Nik made you.\n\nsam: Nik *asked* me. There\'s a difference.\n\njules: There isn\'t.\n\nBut she\'s almost smiling.', cabbie: 'At the green-and-yellow jacket. *FRANK* on the patch.\n\nShe doesn\'t say anything for a second. She knows your father\'s name. She heard it at Sunday dinner. She heard your father laugh.\n\njules: That\'s his.\n\nsam: Yeah.\n\njules: It suits you.' }[g.f('costume8')]}

sam: What are you going as?

jules: You\'ll see.

sam: Can I see now?

jules: No.

sam: Pemberton.

jules: Kearney. The answer is no. It\'s always going to be no. I\'ve been working on it since noon and I\'ve been planning it since September, and you\'re going to see it at the same time as everyone else, like a person.

She starts to close the door. She stops.

jules: Are you going to the show?

sam: Simone would kill me.

jules: Sit with me.

The door closes. You stand in the hallway with that.`,
      next: '@hub'
    },

    a1_bree: {
      enter: g => { g.bond('bree', { trust: 1, affection: 1 }); g.bond('heck', { affection: 1 }); },
      text: g => `She picks up on the first ring.

bree: Wawa.

sam: Bree.

bree: Heck\'s a pumpkin. Like, a whole pumpkin. Orange body suit, a little stem hat. He\'s been carving real pumpkins all day with his *hands*. Like, his bare hands. He gets them warm and the knife just goes through.

In the background, you hear a deep laugh, and a two-year-old shrieking with delight, and somebody yelling *Hector, not on the table!* in Spanish.

bree: Yesenia\'s a bumblebee. She bit Teddy.

sam: How\'s Teddy?

A pause.

bree: He\'s okay. He\'s not okay. He\'s okay. He got a job at the ShopRite with me. Stocking shelves, nights. My aunt\'s on dialysis three days a week now. The list\'s still forty grand away.

${g.f('teddy7') === 'none' ? 'She doesn\'t say *because of you*. She doesn\'t have to. You hear it anyway.' : ''}

bree: He says thank you, by the way. For your dad. He won\'t say it. So I\'m saying it.

Another pause.

bree: Come to Port Richmond some time, Wawa. Come eat pierogi. Heck would love it. He talks about you like you\'re a saint. It\'s very annoying.

sam: Maybe.

bree: Not maybe. *Come.* People keep dying in this city. Come while everybody\'s still here.

She hangs up. You think about that one a long time after.`,
      next: '@hub'
    },

    a1_nap: {
      enter: g => { g.nap(2); },
      text: `You lie down on your bed in your costume and close your eyes, and the ninth floor goes on around you, music through the walls and somebody running a hair dryer and Devontae yelling *WHOOSH* in the hallway.

You sleep two hours. You dream about the frozen Delaware, and about footprints, your own, going out onto the black glass of the river and not coming back.

You wake up at seven with your heart going.`,
      next: '@hub'
    },

    /* ---------- Simone\'s show ---------- */
    a1_show: {
      night: true,
      loc: 'RANDALL THEATER · TEMPLE UNIVERSITY',
      clock: { time: '8:00 PM' },
      text: g => `Simone\'s show is called *DRACULA: A Musical (Unauthorized)*, and it is the greatest thing you have ever seen.

It\'s a student production, sixteen people in costumes from the Goodwill on Lehigh, a five-piece band in the pit that\'s playing at least two different songs at once, and Simone Okonkwo-Hayes in a long black coat as Van Helsing, singing a forty-second power ballad called "Stake Through My Heart (Metaphorically)" with such total commitment that a man in the third row starts crying, possibly from laughter, possibly not.

${g.f('did_hal_jules') ? 'You sit with Jules. She asked. She\'s in a long dark coat buttoned to the throat, so you can\'t see the costume, and gold paint on her cheekbones, and she sits next to you in the dark with her shoulder against yours, and when Simone hits the high note at the end of the second act, Jules grabs your arm with both hands and squeezes so hard you\'ll have bruises.' : 'You end up sitting with Jules by accident. She\'s in a long dark coat buttoned to the throat, so you can\'t see the costume, and gold paint on her cheekbones, and when Simone hits the high note at the end of the second act, Jules grabs your arm without seeming to notice she\'s done it.'}

Nik, on your other side, is filming the whole thing on his phone with his proton pack on, which blocks the view of four people behind him, all of whom have decided to let it go.

At intermission, Simone comes out through the curtain in her Van Helsing coat and finds the three of you in the aisle, sweating, radiant, still in character.

simone: Well?

nik: You were *transcendent*.

simone: I know. Salvatore?

sam: I\'ve never seen anything like it in my life.

simone: That\'s not a compliment, that\'s a *description*.

sam: It\'s both.

Simone looks at Jules. Jules looks back.

jules: You were extraordinary.

She says it simply, plainly, without any irony at all, and Simone stops, with her mouth open, and for a second the funniest person you\'ve ever met doesn\'t have anything to say.

simone: …Juliet Pemberton just complimented me without a qualifier. Somebody write down the date.

nik: It\'s Halloween.

simone: *Perfect.*

She sweeps back through the curtain.

During the second act, your phone buzzes once in your pocket. You don\'t look at it. Nobody looks at their phone during Simone\'s show. That\'s the rule.`,
      enter: g => { g.flag('show_buzz'); },
      next: 'a2_party'
    }
  }
});
