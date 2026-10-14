/* S2 · E2 · SEVEN FISHES, part 2 of 3: Act Two ("Envelopes"). */
EH.scenes('s02e02', {

  /* ================= ACT TWO: ENVELOPES ================= */
  a2_call: {
    card: { kind: 'act', label: 'Act Two', title: 'Envelopes' },
    loc: 'MIFFLIN STREET',
    clock: { time: '4:10 PM' },
    text: g => `At 4:10 on Christmas Eve, your phone rings. A number you\'ve saved as *D*.

DANTE: Merry Christmas, Sam.

sam: It\'s Christmas Eve.

DANTE: I know what day it is. My grandfather has a tradition. Every Christmas Eve, he sends envelopes. To friends. People who helped this year. Twelve envelopes. They need to be delivered before the Feast, because it\'s rude to interrupt a man\'s Feast. That\'s eight o\'clock.

DANTE: Usually somebody drives them. Takes all afternoon, with the traffic on Christmas Eve. Grandpa thought, this year, why not try the fast way.

DANTE: Come to the club. The envelopes are on the bar. Twelve addresses. The last one is special. You\'ll see.

He hangs up.

Job ${['one', 'two', 'three', 'four'][g.f('bruno_jobs_done') || 0] || 'whatever'} of ${({ 5: 'five', 8: 'eight', 10: 'ten', 12: 'twelve' })[g.f('bruno_jobs_total')] || 'ten'}. You stand in the hallway with the phone in your hand and the whole house smelling like fried smelts.

Ma is looking at you from the kitchen doorway with the wooden spoon in her hand.

rosa: Where are you going?

sam: Ciro needs me. Christmas Eve rush. I\'ll be back by eight.

${g.f('ma_told') === 's2e2' ? 'She knows you\'re lying. You told her everything this morning. She looks at you, and you look at her, and she says, very quietly: *Be back by eight, Salvatore. Your grandmother is waiting.*' : 'She looks at you for a second too long. Then she nods.\n\nrosa: Eight. Not eight-oh-five. Your grandmother eats at eight.'}`,
    next: 'a2_club'
  },

  a2_club: {
    loc: 'CIRCOLO SANT\'AGATA',
    clock: { time: '4:40 PM' },
    text: g => `The club is dressed for Christmas. A crooked tree in the corner with old glass ornaments and tinsel from the Kennedy years. A presepio on the bar, the whole Nativity, carved, with a Vesuvius in the background and little shepherds and a pizza maker, because it\'s a Neapolitan presepio and every Neapolitan presepio has a pizza maker.

On the bar beside it, twelve envelopes in a neat stack, tied with red ribbon. Christmas cards. Thick ones.

Vinnie is behind the bar with a dish towel. He hands you the stack and a folded sheet of paper with twelve addresses in Dante\'s neat handwriting.

vinnie: Snyder. Ritner. Moyamensing. Two on Passyunk. A church rectory on Christian Street. A captain\'s house on Shunk. Councilman\'s office on Broad. A guy at the produce terminal. You know.

He taps the last line.

*12. NAVY YARD · GATE 3 (Broad & Intrepid) · GRAY SEDAN · 7:45 SHARP. DO NOT OPEN.*

The twelfth envelope is different from the others. Not a card. A plain manila envelope, letter-size, thin, sealed with tape. Paper inside. A few sheets.

vinnie: That one goes to the Navy Yard. You know who\'s at the Navy Yard.

sam: Yeah.

vinnie: Then you know what kinda Christmas card that is.

He doesn\'t say anything else. He wipes the bar where there\'s nothing to wipe.

vinnie: It\'s snowing. Roads are a mess. Twelve stops, three hours. Me in the car, it takes four. Bruno wants to see what you can do.

vinnie: Yo. Don\'t do the cold thing, Sally. Okay? Just run. Just be fast. You\'re fast enough.`,
    choices: [
      { text: 'Run it. Twelve stops in the snow on your own legs. Fast, but human.', tag: 'Run',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, label: 'Twelve envelopes before eight', physical: true, power: true, on: { crit: 'a2_run_good', success: 'a2_run_good', partial: 'a2_run_late', fail: 'a2_run_late', botch: 'a2_run_late' } } },
      { text: 'Borrow Ciro\'s e-bike. You know these streets. Ride it.', tag: 'Ride',
        check: { kind: 'pool', attr: 'reflex', skill: 'ride', diff: 2, label: 'Twelve envelopes before eight', physical: true, power: true, on: { crit: 'a2_run_good', success: 'a2_run_good', partial: 'a2_run_late', fail: 'a2_run_late', botch: 'a2_run_late' } } }
    ]
  },
  a2_run_good: {
    enter: g => { g.flag('envelopes', 'fast'); },
    text: `You go.

Down Passyunk in the snow, the Christmas lights smeared in it. Snyder Avenue, a rowhouse with an inflatable Santa, a woman in a housecoat who takes the card and says *tell Bruno God bless*. Ritner. Moyamensing. A man in his undershirt at a door on Shunk Street who takes the card without a word and closes the door, and you realize from the cruiser at the curb that he\'s a police captain. A rectory on Christian Street, where a priest in a cardigan takes it and puts it in his breast pocket and says *Merry Christmas, son*, and doesn\'t ask your name. A councilman\'s office on Broad with a guard who knows you were coming.

Eleven envelopes in two hours and ten minutes, in the snow, on Christmas Eve. You don\'t step all the way into the cold. Not once. You\'re just fast. You\'re a kid who grew up on these blocks, cutting through the alleys and the driveways and the backyards, over the fences, the way you did when you were nine and late for dinner.

At 6:55, you\'re standing under the streetlight at Broad and Oregon, steaming, with one envelope left. Plain manila. Thin. Sealed with tape.

*DO NOT OPEN.*

You have fifty minutes to go a mile and a half.`,
    next: 'a2_manila'
  },
  a2_run_late: {
    enter: g => { g.flag('envelopes', 'late'); g.injure({ id: 'ice_s2e2', name: 'Bad fall on the ice (Moyamensing)', pen: 1, heal: 1, affects: ['body', 'reflex'] }); },
    text: `You go.

Down Passyunk in the snow. Snyder. Ritner. On Moyamensing, cutting through an alley, you hit a patch of black ice behind a garage and go down hard on your hip and your elbow and lie there in the slush for a second with the wind knocked out of you, looking up at the snow coming down out of the orange sky.

You get up. You keep going. A police captain on Shunk who closes the door without a word. A priest on Christian Street who says *Merry Christmas, son* and doesn\'t ask your name. A councilman\'s office on Broad. Your hip is screaming.

Eleven envelopes. Two hours and forty-five minutes. You\'re late on two of them. Somebody\'s going to tell Dante.

At 7:25, you\'re limping under the streetlight at Broad and Oregon with one envelope left. Plain manila. Thin. Sealed with tape.

*DO NOT OPEN.*

You have twenty minutes to go a mile and a half. On this hip.

You could do it in no time at all. You know you could. It\'s right there under your skin. It always is now.`,
    choices: [
      { text: 'Limp it. Run on the hip. Be late if you\'re late.', tag: 'Limp it',
        fx: g => { g.flag('envelopes_late', true); }, go: 'a2_manila' },
      { text: 'Slip. Just for the mile. You know what\'s in there. Go anyway.', tag: 'Slip', slip: true,
        fx: g => { g.flag('slip_s2e2'); if (g.S.drift >= 9 || g.hv('revenant_drift') >= 10) g.flag('unstick_s2e2'); }, go: 'a2_slip' }
    ]
  },
  a2_slip: {
    enter: g => { if (g.f('unstick_s2e2')) { g.drift(1); g.hidden('revenant_drift', 1); g.injure({ id: 'unstick_s2e2', name: 'Time debt (Broad Street)', pen: 1, heal: 2, affects: ['body', 'reflex', 'wits'] }); g.know('revenant_watch', ['sam'], 'In the Slip on South Broad Street on Christmas Eve, the man who stands like you was standing in the middle of Broad Street behind you, back at Oregon. He raised one hand, like a man at a window.'); } },
    text: g => `You step through.

It\'s January on South Broad Street. The snow stops in the air, every flake, a whole city of white dots hanging in the orange light like stars somebody spilled. A SEPTA bus is stopped at the light with its wipers mid-sweep. A man in a Santa hat is stopped on the median, mid-step, with a tray of cookies.

${g.f('unstick_s2e2') ? `The cold grabs you immediately. Like a river. Like every time now. You can feel the walls of the second coming in.

You run anyway. Down Broad, between the frozen flakes, which you break with your face, each one a tiny cold sting.

And behind you, back at Broad and Oregon where you started, you feel something, and you turn.

There\'s a man standing in the middle of Broad Street in the frozen snow. In a long coat. Too far to see his face. He raises one hand to you. Not a wave. Like a man at a window.

You know that gesture. You don\'t know how you know it.

You turn and run. The ice is at your chest. At the Navy Yard gate you reach for something, anything, *the smell of fried smelts*, Ma\'s kitchen, and you pull, and you come out on your knees in the snow at Broad and Intrepid with your nose pouring and your hands white.` : `You run down Broad between the frozen flakes. It takes no time at all. At the Navy Yard gate, you step back out.`}`,
    next: 'a2_manila'
  },

  a2_manila: {
    night: true,
    loc: 'BROAD STREET · SOUTH OF OREGON',
    clock: { time: '7:30 PM' },
    text: g => `${g.f('slip_s2e2') ? 'You\'re at the Navy Yard gate early. You stand in the dark beside the guard shack, shaking, with the envelope in your hand.' : 'You stop under a streetlight on South Broad, past the stadiums, with the snow coming down and the envelope in your hand.'}

It\'s thin. A few sheets of paper. You can feel the edge of them through the manila. You could open it. The tape is cheap, the kind that lifts if you\'re careful.

*DO NOT OPEN.*

Bruno Iannucci told you he\'d have an understanding with the people from the Navy Yard. This is what an understanding looks like. Paper in an envelope, on Christmas Eve, carried by a kid who doesn\'t ask.

You could not ask.`,
    choices: [
      { text: 'Open it. Carefully. Lift the tape with your thumbnail.', tag: 'Open it',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 12, label: 'Open it clean', on: { crit: 'a2_open_clean', success: 'a2_open_clean', fail: 'a2_open_torn', fumble: 'a2_open_torn' } } },
      { text: 'Don\'t open it. Don\'t ask. Deliver it. Get home for the fish.', tag: 'Don\'t open it',
        fx: g => { g.flag('manila', 'sealed'); g.hidden('revenant_drift', 0.5); }, go: 'a2_gate' }
    ]
  },
  a2_open_clean: {
    enter: g => { g.flag('manila_open', 'clean'); },
    text: `You lift the tape with your thumbnail, a millimeter at a time, the way you used to open your Christmas presents early when you were eight and Ma was at work. It comes up clean.`,
    next: 'a2_list'
  },
  a2_open_torn: {
    enter: g => { g.flag('manila_open', 'torn'); },
    text: `You lift the tape with your thumbnail, and your hands are cold and shaking, and the tape tears, and a strip of manila comes up with it. It\'s going to show. Anybody who looks is going to see that somebody opened it.

You open it anyway. It\'s already open.`,
    next: 'a2_list'
  },
  a2_list: {
    night: true,
    enter: g => { g.know('bruno_list', ['sam'], 'Bruno\'s Christmas envelope for the Navy Yard: a list of people in Philadelphia who changed in August and aren\'t on his payroll. Names, addresses, what they can do. Jayden Torres was on it. At the bottom, in Bruno\'s handwriting: "DiNardo, T. — Mifflin St. — NO."'); g.flag('saw_list'); },
    text: g => `Three typed sheets. A list. Names, ages, addresses, and a short note after each one, typed in capitals.

*Rizzo, Angela, 34 · Morris St · HANDS GET HOT. NOT ON PAYROLL.*
*Nguyen, Thomas, 52 · Washington Ave · HEARS THROUGH WALLS. DECLINED OFFER.*
*Pham, Linh, 19 · 7th St · SOMETHING WITH LIGHTBULBS. MOTHER SAYS NO.*
*Okafor, David, 61 · Ritner · CAN\'T BE PHOTOGRAPHED. RETIRED. HARMLESS.*

Twenty-six names. Twenty-six people in South and North Philadelphia who changed on August 22 and said *no* to Bruno Iannucci. Bruno is giving them to the Navy Yard for Christmas, so the Navy Yard will leave his own people alone.

Halfway down the second page:

*Torres, Jayden, 8 · N. 15th St (2nd fl) · FEELS IT COMING. GRANDMOTHER WON\'T TALK. LATENT?*

Your whole body goes cold, and it isn\'t the Slip.

${g.f('jayden_xmas') ? 'You were in that living room this morning. You watched him build a trolley on the carpet. Carmen wrote your number on the inside of the cabinet door.' : 'You pulled him off Broad Street in August. You pulled him out from under a lamppost a month ago. He calls you the cold man.'}

At the very bottom of the last page, under the typed list, there\'s one more line. Not typed. Handwritten, in blue fountain pen, in an old man\'s careful Catholic-school hand.

*DiNardo, T. — Mifflin St. — NO.*

Nonna.

Bruno Iannucci knows about your grandmother. And he wrote her name at the bottom of a list he\'s giving to the people who killed Femi, and next to it he wrote *no*.

You stand under the streetlight in the snow with the list in your hands. It\'s 7:38.`,
    choices: [
      { text: 'Tear Jayden\'s line off the page. Fold it. Put it in your pocket. Deliver the rest.', tag: 'Tear it',
        fx: g => { g.flag('manila', 'tore_jayden'); g.bond('jayden', { trust: 1 }); g.hidden('revenant_drift', 0.5); g.hidden('halcyon_heat', 1); }, go: 'a2_gate' },
      { text: 'Put it all back. Seal it. Deliver it. Then warn Carmen tonight. Then warn the others.', tag: 'Deliver it, then warn them',
        fx: g => { g.flag('manila', 'warn'); g.hidden('revenant_drift', -0.5); }, go: 'a2_gate' },
      { text: 'Don\'t deliver it. Burn it. Tell Dante you dropped it in the snow.', tag: 'Burn it',
        fx: g => { g.flag('manila', 'burned'); g.hidden('revenant_drift', 1); g.flag('bruno_angry_s2e2'); }, go: 'a2_burn' }
    ]
  },
  a2_burn: {
    night: true,
    text: `You don\'t deliver it.

There\'s a trash can on the corner by the bus stop, the city kind, with a fire in somebody\'s cigarette butt smoldering in the bottom of it. You drop the three sheets in. You strike a match from the Melrose matchbook in your coat pocket and hold it to the corner of the last page. *DiNardo, T. — Mifflin St. — NO.* It catches.

You watch twenty-six names go up in a city trash can on South Broad Street in the snow on Christmas Eve.

One line didn\'t go in. *Torres, Jayden, 8.* You tore it off before you struck the match. It\'s in your pocket. You don\'t know why.

Then you call Dante.

sam: I dropped it. The last one. In the snow, on Broad. I went back. It\'s gone. It\'s soaked. I\'m sorry.

Silence on the phone.

DANTE: You dropped it.

sam: Yeah.

DANTE: The one envelope that said *do not open*.

sam: Yeah.

Another silence.

DANTE: Merry Christmas, Sam. Go eat your fish.

He hangs up. It doesn\'t count. You know it doesn\'t count. You know something worse than *it doesn\'t count* is coming, after the holiday.

Somewhere on the far side of the Navy Yard gate, a gray sedan sits in the snow, waiting, until eight o\'clock, and then drives away.`,
    next: 'a3_feast'
  },

  a2_gate: {
    night: true,
    loc: 'NAVY YARD · GATE 3 · BROAD & INTREPID',
    clock: { time: '7:45 PM' },
    enter: g => { if (g.f('manila') !== 'burned') g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + (g.f('envelopes') === 'late' && !g.f('slip_s2e2') ? 0 : 1)); },
    text: g => `At the end of Broad Street, where the city runs out and the Navy Yard begins, there\'s a gate with a guard shack and a striped arm and, beyond it, the big empty dark of the old shipyard, the cranes against the sky, the snow coming down on the dry docks.

A gray sedan is parked on the shoulder outside the gate with its engine running and its lights off.

The back window comes down.

BRANNIGAN: Sam. Merry Christmas.

He\'s wearing the dark overcoat and a red scarf. There\'s a thermos in the cupholder. He holds out his hand for the envelope, and you give it to him, and he doesn\'t look at it. He puts it on the seat beside him.

${g.f('manila_open') === 'torn' ? 'Then he looks at it. At the torn strip on the flap, where the tape came up with the manila.\n\nHe looks at you.\n\nBRANNIGAN: Hm.\n\nThat\'s all. *Hm.* He doesn\'t say anything else about it. He doesn\'t have to.' : ''}

BRANNIGAN: ${g.f('envelopes_late') ? 'Seven fifty-one. Mr. Iannucci said seven forty-five. He counts minutes, Sam. I don\'t. I waited.' : g.f('slip_s2e2') ? 'You made good time. In the snow. Very good time. Our cameras on Broad Street went a little strange about twenty minutes ago. Thirty-one degrees on the thermal, a streak a mile long. I imagine you\'re cold.' : 'You made good time. In the snow. Mr. Iannucci said you would.'}

He takes something out of his coat pocket and holds it out the window. A candy cane. In cellophane.

BRANNIGAN: For your sister.

You don\'t take it. He doesn\'t seem offended. He puts it on the dashboard.

BRANNIGAN: Mr. Iannucci is a businessman. He gives you jobs, and he takes a piece off a debt, and he tells you he\'s protecting you. And then on Christmas Eve, he sends you to me with an envelope.

He taps it, on the seat beside him, without looking down.

BRANNIGAN: When you get tired of being somebody\'s errand boy, I\'m hiring. Real work. Real money. Your father\'s debt gone in a phone call. And the hair. We can help with the hair.

He rolls the window up halfway. Stops.

BRANNIGAN: Go home, son. Your grandmother eats at eight.

The window goes up. The sedan pulls away into the Navy Yard, past the guard, who lifts the striped arm without looking.

You stand at the gate in the snow.

He knows Nonna eats at eight.`,
    next: 'a3_feast'
  }
});
