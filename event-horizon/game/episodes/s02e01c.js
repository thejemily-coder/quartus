/* S2 · E1 · AFTER THE HOLIDAY, part 3 of 4: Act Three ("Pickup"). */
EH.scenes('s02e01', {

  /* ================= ACT THREE: PICKUP ================= */
  a3_pickup: {
    card: { kind: 'act', label: 'Act Three', title: 'Pickup' },
    night: true,
    loc: 'GIRARD AVENUE · FISHTOWN',
    clock: { day: 'Fri', date: 'Dec 4', time: '1:50 AM' },
    enter: g => { g.sleep(5); },
    text: g => `Dante calls Thursday night at eleven. He doesn\'t say hello.

DANTE: Szymanski\'s. Girard and Marlborough. Two o\'clock, after last call. Eddie owes eight. Bring back eight. Teodoro will meet you.

He hangs up.

Szymanski\'s is a corner bar in Fishtown that\'s been a corner bar since before Fishtown had a name for itself. Neon Schmidt\'s sign in the window, a Polish eagle over the door, and inside, under the Christmas lights somebody hung in 2011 and never took down, a long wooden bar, a jukebox, and a man in his fifties in a stained apron putting chairs up on tables.

Teddy is waiting across Girard in a doorway with his hands in the pockets of a new wool coat. He doesn\'t say hello either.

teddy: Listen. He\'s gonna say he doesn\'t have it. They always say that. You let me do the talking.

sam: Teddy.

teddy: You saved my life on the Parkway. I know. My mother knows. She lights a candle for you at Saint Adalbert\'s every morning. *Every* morning. She knows you as the Wawa boy who ate twelve pierogi. Now she calls you *the cold boy*.

He looks at you, finally. His eyes are very tired.

teddy: And now I work for a man who paid her deposit in cash. So I don\'t get to have feelings about this, Sam. And neither do you. Come on.

He crosses Girard. You follow.

Inside, the man in the apron sees Teddy and stops with a chair in his hands.

EDDIE: Aw, Christ.

He puts the chair down. He wipes his hands on his apron.

EDDIE: Tell Dante I got it. I *got* it. I just need till Monday. The Eagles cover Sunday, I\'m—

teddy: Eddie.

EDDIE: Monday. I swear to God. On my mother.

Behind the bar, there\'s a photo taped to the register. A girl in a Temple sweatshirt with her arm around Eddie at a Phillies game, both of them sunburned, grinning.

You know her. She sits three rows in front of you in Psych. Krysia. She lends people pens. She lent you a pen in October.

Eddie goes to the register. He takes out an envelope from under the drawer. He holds it out with both hands, the way Pop held out the shoebox.

EDDIE: Twenty-one hundred. It\'s all I got. It\'s the Christmas money. It\'s my kid\'s spring tuition. That\'s everything in the building.

Teddy doesn\'t take it. He looks at the bar. At the long wooden bar, worn smooth by a hundred years of elbows. He puts his bare hand flat on it.

The bar goes gray. Flat, photograph gray. Eddie\'s hands, resting on it, holding the envelope, go gray to the wrist.

EDDIE: *Ah—* ah, Christ, what— what is—

He pulls. His hands don\'t move. They\'re part of the bar now. They\'re part of a stopped second.

teddy: It doesn\'t hurt, Eddie. Not yet. In about ten minutes, it\'s gonna start to feel like your hands are asleep. In about an hour, it\'s gonna feel like they\'re on fire. You know how much circulation you got in a stopped hand, Eddie? None.

teddy: So where\'s the rest.

Eddie is crying. He\'s looking at the photo on the register. At his kid.

Teddy looks at you.

teddy: This is the job, cold guy. This is what the job is.`,
    choices: [
      { text: '"Let him go, Teddy. Take the twenty-one hundred. I\'ll tell Dante that\'s all there was. It\'s on me."', tag: 'Let him go',
        fx: g => { g.flag('job1', 'mercy'); g.flag('bruno_jobs_done', 0); g.bond('teddy', { tension: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_mercy' },
      { text: 'Don\'t say anything. Let Teddy do the job. Look at the photo of Krysia on the register the whole time.', tag: 'Let it happen',
        fx: g => { g.flag('job1', 'watched'); g.flag('bruno_jobs_done', 1); g.hidden('revenant_drift', 1); }, go: 'a3_watch' },
      { text: 'Make up the difference yourself. Every dollar you have. And the rest out of next week\'s tips. Tell Dante the rest is coming, and cover it.', tag: 'Pay it',
        fx: g => { g.flag('job1', 'paid'); g.flag('bruno_jobs_done', 1); g.flag('owe_dante_eddie', 8000 - 2100 - Math.min(365, g.S.money.cash)); g.flag('eddie_paid', g.S.money.cash); g.flag('eddie_owed', Math.max(0, 5900 - g.S.money.cash)); if (g.S.money.cash > 0) g.money(-g.S.money.cash); g.hidden('revenant_drift', 0.5); }, go: 'a3_paid' }
    ]
  },
  a3_mercy: {
    text: `sam: Let him go, Teddy.

Teddy doesn\'t move his hand.

sam: Take the twenty-one hundred. I\'ll tell Dante that\'s all there was. It\'s on me. It\'s my job. Dante gave it to me, not you. Let him go.

Teddy looks at you. A long look. Then at Eddie, crying over his gray hands. Then at the photo of the girl in the Temple sweatshirt.

He takes his hand off the bar.

The gray goes out of it. Eddie stumbles back into the shelf of bottles, holding his hands against his chest, flexing his fingers, sobbing.

Teddy takes the envelope off the bar and puts it in his coat.

teddy: Dante\'s gonna say it doesn\'t count. The job. He\'s gonna say you came back short, so it doesn\'t come off your father\'s paper.

sam: I know.

teddy: And Eddie\'s gonna be short again in a month. And they\'re gonna send somebody else. Somebody who isn\'t you.

sam: I know.

He looks at you a second longer.

teddy: You can\'t carry all of them, Sam.

You don\'t say anything. Teddy goes out the door into the snow.

Eddie is still holding his hands.

EDDIE: Who *are* you?

You don\'t answer. On the way out, you take a pen out of your pocket and leave it on the bar under the photo of Krysia, so it\'ll look like she dropped it.

It\'s her pen. She lent it to you in October. You never gave it back.`,
    next: 'a3_dante'
  },
  a3_watch: {
    text: `You don\'t say anything.

You stand by the jukebox with your hands in your pockets and you look at the photo on the register. Krysia in her Temple sweatshirt. The sunburn. The Phillies game.

Eddie cries. He begs. He says *my kid* four times and *Christ* nine. At nine minutes, he starts to scream, because his hands are going to sleep, and it doesn\'t feel like sleep. At twelve, he tells Teddy about the coffee can in the walk-in freezer.

There\'s fifty-nine hundred dollars in the coffee can. Rolled in rubber bands. Some of it in ones.

Teddy lets go of the bar. Eddie falls down behind it.

On the way out, Teddy stops in the doorway and looks back at you.

teddy: Now you know.

sam: Know what?

teddy: What you saved me for.

He goes out into the snow. You follow.

Behind you, through the door, you can hear Eddie Szymanski on the floor of his bar, crying for his hands. You don\'t turn around.`,
    next: 'a3_dante'
  },
  a3_paid: {
    text: g => `sam: Wait.

Teddy looks at you.

You take out your wallet. You count it on the bar, next to Eddie\'s gray hands. Everything you have. ${g.f('eddie_paid') >= 300 ? 'Three hundred and some.' : 'Not much.'} Ciro\'s tips since September, in twenties and fives and a lot of ones.

sam: Let him go. That\'s mine. I\'ll get the rest. Tips, shifts. I\'ll have it by New Year\'s. I\'ll tell Dante Eddie paid.

Teddy looks at the money on the bar. He looks at you.

teddy: You\'re gonna lie to Dante.

sam: Yeah.

teddy: For a guy you don\'t know.

sam: I know his kid. She lent me a pen.

Teddy doesn\'t say anything. Then he takes his hand off the bar. The gray goes out of it, and Eddie stumbles back into the shelf of bottles, holding his hands to his chest.

Teddy picks up the envelope. And your money. He puts them together in his coat.

teddy: That\'s twenty-four hundred. He owes eight. You tell Dante the rest is coming, and you better make it come, cold guy. I didn\'t see nothing. That\'s all yours.

He goes out into the snow.

Eddie is looking at you over his shaking hands.

EDDIE: Why\'d you do that?

You don\'t have an answer that you could say out loud. You go out after Teddy.`,
    next: 'a3_dante'
  },

  a3_dante: {
    night: true,
    loc: 'AN ESCALADE · GIRARD AVENUE',
    clock: { time: '2:40 AM' },
    text: g => `Dante is waiting at the curb on Girard in the black Escalade, with Vinnie at the wheel. He rolls down the back window. Teddy hands him the envelope through it.

Dante counts it in the dome light, fast, a bank teller\'s hands.

${g.f('job1') === 'mercy' ? 'DANTE: Twenty-one hundred.\n\nHe looks up at you.\n\nDANTE: That\'s not eight.\n\nsam: That\'s what he had.\n\nDANTE: That\'s not how this works, Sam. You don\'t come back with what he *had*. You come back with what he *owes*.\n\nHe puts the envelope in his jacket.\n\nDANTE: It doesn\'t count. You understand? Your father\'s paper stays where it is. Grandpa\'s gonna be disappointed.\n\nHe rolls up the window. Through the glass, you see Vinnie\'s eyes in the rearview mirror. He looks at you for one second. Then the Escalade pulls away.' : g.f('job1') === 'watched' ? 'DANTE: Eight. Exactly eight.\n\nHe looks up at you, pleased.\n\nDANTE: See? You\'re a natural. Grandpa\'s gonna be happy. That\'s one.\n\nHe rolls up the window. Through the glass, you see Vinnie\'s eyes in the rearview mirror. He looks at you for one second, and then he looks away like he doesn\'t know you, and the Escalade pulls away down Girard.' : 'DANTE: Twenty-four hundred and change.\n\nsam: Rest by New Year\'s. He\'s good for it.\n\nHe counts it again. Slower. He holds up a five-dollar bill to the dome light, a soft old one, folded down the middle the way a delivery guy folds his tips.\n\nDANTE: Huh.\n\nHe looks at you over the money.\n\nDANTE: That\'s one.\n\nHe rolls up the window. The Escalade pulls away down Girard.'}

You stand on Girard Avenue at a quarter to three in the morning, in the snow.

Teddy has already gone the other way, toward Port Richmond, with his hands in the pockets of his new coat. He doesn\'t look back.

Across the street, in the window of Szymanski\'s, the Christmas lights go off.`,
    next: 'a4_finals'
  }
});
