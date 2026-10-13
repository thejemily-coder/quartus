/* S2 · E1 · AFTER THE HOLIDAY, part 2 of 4: Act Two ("The Club"). */
EH.scenes('s02e01', {

  /* ================= ACT TWO: THE CLUB ================= */
  a2_club: {
    card: { kind: 'act', label: 'Act Two', title: 'The Club' },
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    clock: { day: 'Sat', date: 'Nov 28', time: '2:00 PM' },
    text: g => `The Circolo Sant\'Agata is a storefront on a side street off East Passyunk with the windows painted green to shoulder height so nobody can see in. There\'s a hand-lettered sign in the door that says *MEMBERS ONLY*, and under it, smaller, *NO CREDIT CARDS*, and under that, smaller still, in different handwriting, *NO EAGLES TALK DURING BRISCOLA*.

You walked past it a thousand times as a kid. You never looked at the door.

Vinnie is leaning on the wall beside it in a black peacoat you\'ve never seen, smoking a cigarette he doesn\'t inhale.

vinnie: Sally.

sam: Vin.

He looks at you. At your temple. He doesn\'t say anything about the hair.

vinnie: Yo. You don\'t gotta go in there, bol.

sam: Yeah, I do.

He drops the cigarette and steps on it.

vinnie: Then don\'t eat nothing. Don\'t sign nothing. Don\'t say yes to the first thing.

sam: Mikey said the same thing.

Vinnie stops with his hand on the door.

sam: He said to tell you he always liked you. He said you\'d know what it means.

Vinnie stands there with his hand on the door for a second longer than he needs to. Then he opens it.

vinnie: Yeah. I know what it means.

TXT sam: in

Inside, it\'s warm and dim and smells like espresso and anisette and old men. A long room with a pressed-tin ceiling. A bar at one end with a chrome espresso machine the size of a motorcycle. A TV in the corner with a soccer game from Italy on and the sound off. Six card tables, four of them full, old men in cardigans slapping down cards and yelling at each other in Calabrese.

At the back table, by himself, with a demitasse and a plate of pizzelles, Bruno Iannucci.

He doesn\'t get up. He gestures at the chair across from him. Dante is standing behind him, against the wall, in a different beautiful jacket.

BRUNO: Sam. Sit. Have a pizzelle. My sister makes them.

You sit. You don\'t take a pizzelle.

He notices. He smiles.

BRUNO: Your brother told you not to eat anything.

sam: My best friend did.

BRUNO: Vincenzo\'s a good boy. You have good people around you, Sam. That\'s rare. That\'s worth more than money.

He sips his coffee. He sets it down.

BRUNO: Teodoro. Come say hello.

A door at the back opens. ${g.f('teddy_taken10') ? 'It isn\'t Teddy. It\'s Bree, in a nice blouse, with her hair pulled back, carrying a tray with two more espressos on it. She looks at you and then at the floor.' : 'Teddy comes out carrying a tray with two more espressos on it.\n\nHe\'s wearing a pressed white shirt. His hair is cut. His knuckles have new Band-Aids on them. He puts an espresso in front of you and one in front of Bruno, and he doesn\'t look at you, and he goes back and stands against the wall next to Dante.'}

${g.f('teddy_taken10') ? 'BRUNO: Your friend in the ambulance. The one who stops things. Halcyon has him. His cousin came to me yesterday and asked me to get him back. I said I would try. In the meantime, she works for me. She has a very useful voice.' : 'BRUNO: His mother\'s evaluation at Jefferson costs forty thousand dollars. I paid it yesterday. In cash. To a very surprised woman in Patient Accounts.\n\nBRUNO: Halina Kowal goes on the transplant list in January. Teodoro is very grateful. He works for me now.'}

You look at ${g.f('teddy_taken10') ? 'Bree' : 'Teddy'}. ${g.f('teddy_taken10') ? 'She won\'t look at you.' : 'He looks back at you, finally. His face doesn\'t do anything at all.'}

${g.f('teddy_taken10') ? '' : 'You pulled him out of an ambulance on the Parkway. You went into the cold for him.\n\nAnd you saved him for this.'}

Bruno spreads his hands.

BRUNO: You see what I\'m telling you, Sam. There are people in this city, since August, who can do things. You. Teodoro. Others. There\'s a company at the Navy Yard that wants them. They put them in beds. They put needles in them. I know what they do, Sam. I know about your friend at Temple. The quiet one.

He shakes his head.

BRUNO: That\'s not how we do things in South Philadelphia. In South Philadelphia, if a man has a talent, you give him a job.

He leans back.

BRUNO: Your father owes me twenty-nine thousand six hundred dollars. That\'s what it is. That\'s not personal. That\'s arithmetic.

BRUNO: So here\'s what I propose. You do me a favor. One job, here and there, when I call. Nothing terrible. Pickups. Deliveries. Things that need to get somewhere fast. Each job, I take ten percent off your father\'s paper. Ten jobs, he\'s clear. Your mother sleeps at night.

BRUNO: And while you work for me, the people from the Navy Yard don\'t come into South Philadelphia. I have an understanding with a great many people in this city. I\'ll have one with them.

He picks up a pizzelle and breaks it in half.

BRUNO: That\'s the offer.`,
    choices: [
      { text: '"Ten jobs. Then we\'re done. And you never call my father again. Never come to the house again."', tag: 'Accept',
        fx: g => { g.flag('bruno_deal', 'ten'); g.flag('bruno_jobs_total', 10); g.hidden('revenant_drift', 0.5); }, go: 'a2_deal_accept' },
      { text: 'Don\'t say yes to the first thing. "Five. Five jobs, and the whole thing\'s gone."', tag: 'Negotiate',
        check: { kind: 'move', move: 'Hold the Line', attr: 'nerve', skill: 'persuade', label: 'Haggle with Bruno Iannucci', on: { strong: 'a2_deal_five', weak: 'a2_deal_eight', miss: 'a2_deal_twelve' } } },
      { text: '"No."', tag: 'Refuse',
        fx: g => { g.flag('bruno_deal', 'refused'); g.hidden('revenant_drift', -0.5); }, go: 'a2_deal_refuse' }
    ]
  },
  a2_deal_accept: {
    text: `sam: Ten jobs. Then we\'re done. And you never call my father again. You never come to the house again. Not for Thanksgiving. Not for anything.

Bruno looks at you. Then he nods, slowly, and holds out his hand across the table.

BRUNO: Done.

You shake it. His hand is soft and dry and strong, an old man\'s hand that has never done a day of work it didn\'t want to.

BRUNO: Dante will call you. Not me. I don\'t call people. Welcome, Sam.`,
    next: 'a2_vinnie'
  },
  a2_deal_five: {
    enter: g => { g.flag('bruno_deal', 'five'); g.flag('bruno_jobs_total', 5); g.bond('teddy', { respect: 1 }); },
    text: `sam: Five.

Bruno raises his eyebrows.

sam: Five jobs. Fast ones. Things nobody else in this city can do. Five, and the whole thing\'s gone. You don\'t need ten. You know what I am. You saw the Parkway on Channel 6. You know what one job from me is worth.

You don\'t blink. You think about Brannigan in the lounge on All Saints\' Day, and how you didn\'t blink then either.

Behind Bruno, Dante opens his mouth. Bruno lifts one finger without looking, and Dante closes it.

Bruno studies you a while. Then he laughs. The real laugh, the one from Thanksgiving.

BRUNO: Five. Okay. Five. For the young man who doesn\'t eat pizzelles.

He holds out his hand. You shake it.

BRUNO: Dante will call you. Welcome, Sam.`,
    next: 'a2_vinnie'
  },
  a2_deal_eight: {
    enter: g => { g.flag('bruno_deal', 'eight'); g.flag('bruno_jobs_total', 8); },
    text: `sam: Five. Five jobs, and it\'s gone.

Bruno smiles at you like you\'re a nephew who asked for the car.

BRUNO: Eight.

sam: Six.

BRUNO: Eight. Because I like you. Because you didn\'t eat the pizzelle. Eight, and that\'s the end of the discussion.

He holds out his hand. You shake it.

BRUNO: Dante will call you.`,
    next: 'a2_vinnie'
  },
  a2_deal_twelve: {
    enter: g => { g.flag('bruno_deal', 'twelve'); g.flag('bruno_jobs_total', 12); },
    text: `sam: Five. Five jobs, and the whole thing\'s gone.

It comes out too fast, and your voice goes up at the end, like a kid asking. You hear it. So does he.

Bruno looks at you with something like pity.

BRUNO: Sam. Sam. You don\'t negotiate at a man\'s own table. Not in his club. Not with his coffee in front of you.

He sets his cup down.

BRUNO: Twelve. Because you tried, and you shouldn\'t have. That\'s the lesson. It\'s a cheap one, for what it is.

He holds out his hand. You look at it. You shake it.`,
    next: 'a2_vinnie'
  },
  a2_deal_refuse: {
    text: `sam: No.

Bruno doesn\'t look surprised. He doesn\'t look anything. He nods, like you told him the time.

BRUNO: Okay.

He reaches into his cardigan and takes out a phone, and turns it around, and slides it across the table to you.

It\'s a photo. A school bus stop on Passyunk Avenue, on a cold morning. A girl in a puffy coat with a pink backpack, thirteen, laughing at something on her phone, waiting for the bus to Saint Monica\'s.

BRUNO: She has your face. Around the eyes.

The cold comes up through the floor. You can feel the Slip, right there, under your skin, the easiest thing in the world.

You don\'t. You put your hands flat on the table.

BRUNO: Nobody\'s going to touch her, Sam. I want you to hear me say that. Nobody\'s ever going to touch her. I\'m not that kind of man. I\'m just showing you that I know where the bus stop is. That\'s all. That\'s information.

He takes the phone back.

BRUNO: Ten jobs. Then you\'re done.

You sit there. You can\'t say anything. Your mouth won\'t work.

Bruno holds out his hand across the table and waits.

After a while, you shake it.`,
    enter: g => { g.flag('bruno_deal', 'forced'); g.flag('bruno_jobs_total', 10); g.know('bruno_gigi', ['sam'], 'Bruno showed you a photo of Gigi at her bus stop on Passyunk Avenue. "Nobody\'s going to touch her. That\'s information."'); },
    next: 'a2_vinnie'
  },

  a2_vinnie: {
    loc: 'EAST PASSYUNK AVENUE',
    clock: { time: '2:40 PM' },
    text: g => `TXT sam: out

Vinnie walks you to Passyunk. Neither of you says anything until you\'re at the fountain in the triangle, where the old men sit in summer, empty now, the water turned off for the winter.

vinnie: How many?

sam: ${{ ten: 'Ten', five: 'Five', eight: 'Eight', twelve: 'Twelve', forced: 'Ten' }[g.f('bruno_deal')] || 'Ten'}.

vinnie: ${g.f('bruno_deal') === 'five' ? 'Five? He gave you *five*? He don\'t give nobody five. Dante asked for a raise last year and Bruno made him wash the old man\'s car for a month.' : 'Okay. Okay. That\'s doable. Ten things. You can do ten things.'}

He looks at the empty fountain.

vinnie: Teddy\'s been there since he got outta Jefferson. He don\'t talk. He just does what Dante says. He froze a guy\'s car to a fire hydrant on Snyder this morning with the guy in it, for like an hour, \'cause the guy was late on the vig. He didn\'t even look sorry. He just looked tired.

sam: How long have you been in there, Vin?

He doesn\'t answer.

sam: Vin.

vinnie: Since September. Since the Melrose. Since your pop. Dante said if I drove for him, he\'d go easier on Frankie. I figured it was the least I could do. Your pop taught me to drive stick.

You stare at him.

sam: You never told me that part.

vinnie: You never asked. You were up at Temple. You were *busy*.

He doesn\'t say it mean. He just says it.

vinnie: Go home, Sally. Do your finals. Dante\'ll call.`,
    next: 'a3_pickup'
  }
});
