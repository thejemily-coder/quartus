/* S2 · E9 · DOLLAR NIGHT, part 2 of 4: Act Two ("Vincenzo"). */
EH.scenes('s02e09', {

  /* ================= ACT TWO: VINCENZO ================= */
  a2_vinnie: {
    card: { kind: 'act', label: 'Act Two', title: 'Vincenzo' },
    night: true,
    loc: 'CARDONE HALL · THE LOADING DOCK',
    clock: { day: 'Mon', date: 'Apr 12', time: '2:10 AM' },
    enter: g => { g.sleep(5); g.know('dante_plan9', ['sam', 'vinnie'], 'Vinnie: Wednesday, Dollar Dog Night at Citizens Bank Park, Dante plans to grab Dr. Achterberg from the Pemberton Lyle suite during the seventh-inning stretch, and trade her for Bruno\'s people.'); },
    text: g => `Your phone at 2:10 in the morning.

TXT vinnie: loading dock. now. dont bring nobody

He\'s sitting on the edge of the loading dock behind Cardone Hall, under the one working light, in Dante\'s black cashmere coat, with his knuckles wrapped in a bar towel that used to be white.

vinnie: Sally.

sam: Vin. What happened to your hands?

vinnie: The Circolo. Last night. Four guys in gray came in the back at two in the morning. They took Sonny Pugliese. Three hundred pounds, Sally. Twenty years a cop. They walked him out like a dog on a leash, and he went, and he *smiled*.

He looks at his hands.

vinnie: I hit one of \'em. Yo, I hit him *good*. Best shot I threw since eighth grade. He didn\'t even look at me. Like I was weather.

He sits there. You sit down next to him on the edge of the dock.

vinnie: Grandpa\'s losing his mind. Dante\'s worse. Dante\'s got a plan.

sam: Vin.

vinnie: Shut up and listen, college, because I\'m only gonna say this once, and I\'m not *saying* it, you understand? I never said nothing to nobody my whole life. I\'m not saying it now.

He takes a breath.

vinnie: Wednesday. Dollar Dog Night at the ballpark. The Pemberton Lyle suite, on the Hall of Fame level, behind home plate. It\'s Mr. Pemberton\'s client night. Every year. Bunch of rich jerkoffs eating shrimp with their backs to the field. And this year his guest is a lady doctor in a gray dress. The one with the glasses on her head.

You go cold. Not your cold. The other kind.

vinnie: Dante\'s got a cousin who works catering at the park. Seventh-inning stretch, the lady goes to the bathroom, or takes a call, or whatever, and Dante\'s guys grab her in the service hallway behind the suites, and wheel her out the freight elevator in a hot dog cart. *A hot dog cart*, Sally. On Dollar Dog Night. Stuff a lady doctor in with the wieners. I said, D, that\'s not a plan, that\'s a porno. He didn\'t laugh. He thinks *his* version\'s the funniest thing he ever heard.

vinnie: And then they trade her. For Sonny, and the pho guy, and everybody else.

sam: Vin. Halcyon\'s going to be all over her.

vinnie: I know. I told him. He said that\'s what the guns are for.

The light buzzes over your heads.

vinnie: I\'m driving the van. Lot K. That\'s my job.

He doesn\'t look at you.

vinnie: And Dante\'s got the guest list for the suite. From his cousin. I seen it.

vinnie: *Pemberton, Juliet.*

He finally looks at you.

vinnie: Your girl\'s gonna be in that room, Sally. That\'s why I\'m here. That\'s the only reason. I\'m not a rat. I don\'t rat. But your girl\'s gonna be in that room when Dante goes in it with a gun.`,
    choices: [
      { text: '"Okay. You and me. We stop it from the inside. You drive the van. I\'ll be in the hallway."', tag: 'You and me',
        fx: g => { g.flag('plan9', 'us'); g.bond('vinnie', { trust: 3, affection: 1 }); }, go: 'a2_vinnie_end' },
      { text: '"I\'m telling Mikey. Cops on the suite level. Dante sees a uniform, he walks away."', tag: 'Mikey',
        fx: g => { g.flag('plan9', 'mikey'); g.bond('vinnie', { trust: -2, tension: 2 }); g.bond('mikey', { trust: 1 }); }, go: 'a2_vinnie_end' },
      { text: '"I\'m telling Jules. All of it. Then she decides. It\'s her father\'s suite. It\'s her number on their screen."', tag: 'Jules',
        fx: g => { g.flag('plan9', 'jules'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_vinnie_end' }
    ]
  },

  a2_vinnie_end: {
    night: true,
    loc: 'CARDONE HALL · THE LOADING DOCK',
    text: g => `${g.f('plan9') === 'us' ? `vinnie: You and me.

sam: You and me. Like Little League. You drive. I run.

He laughs. It comes out wrong, wet.

vinnie: You were a terrible shortstop.

sam: I was a great shortstop.

vinnie: You were *fast*. That\'s not the same thing. You were always fast. I always knew. Since we were nine. You think I didn\'t know?

He puts his towel-wrapped hand on the back of your neck, the way Mr. Russo used to grab you both after games at FDR, win or lose, back when Mr. Russo came to games.

vinnie: Wednesday, bol. Lot K. I\'ll be the van that says *Dante\'s Catering*. He really did that. He had it painted.` : g.f('plan9') === 'mikey' ? `vinnie: You tell your brother, and Dante sees a cop on that level, and he knows somebody talked.

sam: Vin—

vinnie: And there\'s six people who knew the plan, Sally. Six. And one of \'em bit a kid named Brendan for a cop\'s brother in kindergarten. You think Dante can\'t count to six?

He stands up.

vinnie: Do what you gotta do. You always do. I just— I wanted you to know where she\'d be.

He walks off across the parking lot toward Broad Street with his hands in Dante\'s coat, and doesn\'t look back.` : `vinnie: Your girl\'s gonna decide.

sam: It\'s her father\'s suite. It\'s her number on their screen. She\'s not a thing I protect, Vin. She\'s— she gets to know.

Vinnie looks at you. Then he looks again.

vinnie: Huh. Okay. That\'s new.

sam: What?

vinnie: You. Not deciding for somebody. Since kindergarten, you decided for everybody. Who got picked first, who went in the pool, who fought who. Who I bit. You decided for *me*.

He stands up.

vinnie: Wednesday. Lot K. If she\'s smart, she stays home. She\'s not gonna stay home, is she.

sam: No.

vinnie: Yeah. I liked her. At the dinner. *In writing.*`}`,
    next: 'a2_jules'
  },

  a2_jules: {
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Mon', date: 'Apr 12', time: '7:40 AM' },
    enter: g => { g.know('dante_plan9', ['jules']); },
    text: g => `${g.f('plan9') === 'mikey' ? 'At seven, you call Mikey. He picks up on the first ring. He listens to the whole thing without saying a word, and at the end he says, *Okay*, and *Don\'t go*, and then, *You\'re going, aren\'t you*, and then he hangs up to make phone calls.\n\n' : ''}You tell Jules in the morning, sitting on the end of the bed with the sun coming in.

She listens to all of it. Dante. The hot dog cart. Lot K. *Pemberton, Juliet.*

When you\'re done, she\'s quiet for a while.

jules: My father has done client night at the ballpark every April since I was eight. I have never missed it. If I don\'t go, he asks why. If he asks why, she hears him ask.

She looks at the window.

jules: And I want to sit across from her, Sam.

sam: Jules.

jules: She has a bed with my number on it. She has a screen with my name on it. She sat at my father\'s party on New Year\'s Eve and lifted her glass at me a quarter of an inch, like a toast. I\'ve never once been in a room with her and *known*.

She turns back to you.

jules: I\'m going. I\'m going to sit in my father\'s suite and eat cocktail shrimp and watch her watch me. And when Dante Iannucci comes through the door with a hot dog cart, I would like you to be somewhere nearby.

sam: I\'ll be in the hallway.

jules: I know you will. ${g.f('terms8') === 'count' ? 'And you\'ll tell your mother first.' : ''}

She takes your cold hand in her warm one and holds it until it isn\'t cold.`,
    next: 'a3_ballpark'
  }
});
