/* S2 · E8 · MA, part 3 of 4: Act Three ("Passyunk"). */
EH.scenes('s02e08', {

  /* ================= ACT THREE: PASSYUNK ================= */
  a3_ciro: {
    card: { kind: 'act', label: 'Act Three', title: 'Passyunk' },
    night: true,
    loc: 'CIRO\'S · CECIL B. MOORE',
    clock: { day: 'Thu', date: 'Mar 18', time: '8:10 PM' },
    enter: g => { g.sleep(7); g.money(90); },
    text: g => `Thursday. Ciro\'s. You\'re at the oven, because it\'s Thursday and that\'s where you are on Thursdays, and Ciro is telling you, in detail, that you slide a pie into the oven like a man returning a library book he didn\'t read.

Your phone buzzes in your apron.

TXT Unknown number: grandpa says friday. the other half. 9pm. same place
TXT Unknown number: the girl knows. she said yes
TXT Unknown number: — D

And then, a second later, Jules.

TXT jules: Dante texted me. I said yes. Before you say anything: I\'m playing it straight. I can do it straight. You saw me.
TXT jules: It\'s the other half of your father\'s paper, Sam. One more night.

You stand there with the peel in your hand and a pie on it, getting cold.

ciro: The pie. *The pie*, Kearney. It\'s not a photograph. Put it in the oven.

The bell on the door jingles.

Ma.

In her coat, with her purse, at eight o\'clock on a Thursday night, at Ciro\'s on Cecil B. Moore, four miles of Broad Street Line from Mifflin Street. She\'s never been here. She walks straight up to the counter.

rosa: You\'re Ciro.

ciro: I am Ciro. You, I don\'t know. You have his face, so already I\'m sorry for you.

rosa: I\'m his mother. Give me a slice of plain, please, and give my son five minutes.

Ciro looks at her. Then at you. Then he takes his apron off, and puts a slice on a paper plate, and goes in the back, and you have never once, since August, seen Ciro leave the front of the store for anybody.

Ma sits on a stool at the counter. She pushes the slice across the counter to you without looking at it.

rosa: Eat that.

rosa: Your phone just buzzed. Twice. Bruno\'s grandson, and the girl.

sam: How do you—

rosa: Salvatore. Please.

She folds her hands on the counter.

rosa: Tomorrow morning, at seven o\'clock, I\'m going to the Circolo Sant\'Agata on East Passyunk Avenue, where no woman has walked in the door since 1951, and I am going to talk to Bruno Iannucci.

rosa: I\'m telling you, because nobody in this house lies to anybody anymore, and I\'m not going to do to you what you did to me. I\'m not asking.`,
    choices: [
      { text: '"Then I\'m coming with you."', tag: 'With her',
        fx: g => { g.flag('circolo8', 'with'); g.bond('rosa', { trust: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_circolo' },
      { text: '"Okay, Ma." Let her go alone. It\'s her family\'s debt too. It\'s her grandmother\'s river.', tag: 'Let her go',
        fx: g => { g.flag('circolo8', 'alone'); g.bond('rosa', { respect: 2 }); g.hidden('revenant_drift', -1); }, go: 'a3_circolo_alone' },
      { text: 'Say okay. Then go at six. Get there first. Handle Bruno yourself before she can.', tag: 'Beat her there',
        fx: g => { g.flag('circolo8', 'first'); g.hidden('revenant_drift', 1); }, go: 'a3_circolo_first' }
    ]
  },

  a3_circolo_first: {
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    clock: { day: 'Fri', date: 'Mar 19', time: '6:05 AM' },
    enter: g => { g.sleep(5); },
    text: `You take the first Broad Street Line train south at 5:30, in the dark, and walk from Tasker-Morris, and you get to the green-painted windows of the Circolo Sant\'Agata at five past six in the morning.

The door\'s unlocked.

Inside, the card tables are empty. The chairs are up. The espresso machine is hissing. And at the little table in the back room, with the oilcloth, across from Bruno Iannucci in his cardigan, with a cup of coffee in front of her she hasn\'t touched, is your mother.

She looks up at you.

rosa: Six-oh-five. I said seven, so you came at six. You think I don\'t know you? You always run five minutes late, Salvatore. Since you were born. You were five minutes late being *born*.

Bruno is laughing so hard he has to put his cup down.

BRUNO: She was here at a quarter to. She knocked on the door until Vincenzo let her in. In her slippers, practically. I said, *Rosa, we open at ten.* She said, *Bruno, I\'ll wait.*

rosa: Sit down. You\'re here now. Sit.

You sit.`,
    next: 'a3_circolo'
  },

  a3_circolo_alone: {
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Fri', date: 'Mar 19', time: '7:04 AM' },
    enter: g => { g.sleep(3); },
    text: `You don\'t sleep. You lie in bed in 9-14 and watch the ceiling go from black to gray, and at seven o\'clock exactly, you feel it.

Not the cold. Something else. A tightness, like a held breath, coming from the south. From Passyunk. Like your mother is standing very straight somewhere, and you can feel how straight.

At 7:04, your phone rings. Vinnie.

vinnie: Sally.

sam: What happened.

vinnie: Yo. Your mother just walked into the Circolo. The *Circolo*, Sally. In her church coat. Past the sign. Past Sonny Pugliese at the door, who\'s three hundred pounds and was a cop for twenty years. She looked at him and he moved. I swear to God. He *moved*.

sam: Vin. What did she say. What did *he* say.

vinnie: I don\'t know yet. I\'m in the front. They\'re in the back with the door shut. Hold on. Hold on, I\'m gonna put you on speaker in my pocket and stand by the door. Don\'t make a noise.

A rustle. Muffled voices. Then, through the wall of a social club on East Passyunk Avenue and the wool of Vinnie\'s pocket, faint, your mother.`,
    next: 'a3_circolo'
  },

  a3_circolo: {
    loc: 'CIRCOLO SANT\'AGATA · THE BACK ROOM',
    clock: { day: 'Fri', date: 'Mar 19', time: '7:05 AM' },
    enter: g => { g.flag('paid8'); g.flag('even8'); g.flag('bruno_jobs_done', g.f('bruno_jobs_total') || 8); g.know('rosa_bruno', ['sam', 'rosa', 'bruno', 'frank'], 'Rosa went to the Circolo and asked Bruno Iannucci, as Assunta DiNardo\'s granddaughter, for Frank\'s paper, her son, and the Pemberton girl. Bruno said yes. "After today, Rosa, we\'re even. The DiNardos and the Iannuccis."'); g.know('bruno_jules_table', ['sam', 'rosa', 'bruno'], 'Bruno: "The Pembertons always come back to the table."'); },
    text: g => `${g.f('circolo8') === 'with' ? 'You walk in with her at seven. Past the sign. Past Sonny Pugliese at the door, three hundred pounds, twenty years a cop, who looks at your mother in her church coat and *moves*. Into the back room, where Bruno is at the little table with the oilcloth, in his cardigan, with his espresso, and stands up when he sees her.\n\n' : g.f('circolo8') === 'first' ? 'At seven o\'clock exactly, by the clock over the espresso machine, Ma puts down her cup, pushes back her chair, and stands. The visit is over. Now it\'s business.\n\nBruno stops laughing.\n\n' : ''}rosa: Bruno.

BRUNO: Rosa DiNardo. In my club. My father is turning over in Holy Cross.

rosa: Kearney.

BRUNO: You were a DiNardo before you were a Kearney. Sit. Please. Coffee?

rosa: No.

She doesn\'t sit. She stands across the table from him with her purse in front of her in both hands.

rosa: My grandmother pulled you out of the Schuylkill River in January of 1964. Her hands were bleeding from the ice. My mother counted. Ten seconds.

Bruno doesn\'t say anything.

rosa: Sixty-three years. My grandmother never asked you for anything. My mother never asked you for anything. You came to my house at Thanksgiving with your grandson and sat at my table and ate my food, and threatened my husband with your eyes, and my mother never asked you for anything.

rosa: I\'m asking.

The espresso machine hisses in the front room.

rosa: Frank\'s paper. All of it. Gone. Not the half. All of it. My son: no more envelopes, no more jobs, no more Escalade at the curb. You don\'t call him. Your grandson doesn\'t call him. And the girl. The Pemberton girl. She doesn\'t play tonight. She doesn\'t play for you again.

Bruno doesn\'t move.

Then he sits back in his chair. ${g.f('circolo8') === 'alone' ? 'Through Vinnie\'s pocket, a chair creaks. A long breath out.' : 'He looks old. Older than you\'ve ever seen him. Six years old in a wet coat.'}

BRUNO: She never asked. Your grandmother. Not once. I went to her funeral in 1981 and I stood in the back of St. Monica\'s and I thought, *she never asked me for anything*. It\'s the only debt I have that I never paid.

BRUNO: You know what you\'re spending, Rosa?

rosa: Yes.

BRUNO: After today, we\'re even. The DiNardos and the Iannuccis. No more debt. No more *understanding*. Your husband\'s kneecaps were never his own luck. They were hers. You understand me?

rosa: I understand you.

Bruno nods slowly.

BRUNO: Then it\'s done. Frank\'s paper. The boy. The girl doesn\'t play tonight.

He picks up his espresso.

BRUNO: But I\'ll tell you something for free, Rosa, because I liked your grandmother. The girl will come back. Not to me. To *a* table. Her kind always does. The Pembertons always come back to the table.

He drinks.

BRUNO: Go home. Tell Frank his paper\'s clean. Tell him from me: *don\'t bet the Eagles.*`,
    next: 'a3_after'
  },

  a3_after: {
    loc: 'PASSYUNK SQUARE',
    clock: { time: '8:05 AM' },
    text: g => `${g.f('circolo8') === 'alone' ? 'You take the subway down. You get there at 8:05. She\'s sitting on the edge of the fountain at Passyunk Square, in her church coat, in the cold, with her purse in her lap, alone, watching the water.' : 'Outside, on East Passyunk, in the cold morning, she walks fast, three blocks, without saying anything, to the fountain at Passyunk Square. She sits down on the edge of it in her church coat, with her purse in her lap.'}

You sit down next to her.

She\'s still holding her purse in both hands, the clasp clicking open and shut.

rosa: I just spent my grandmother.

sam: Ma.

rosa: She could have used it a hundred times. My father\'s shipyard job. Uncle Joey\'s trouble in 1979. She never asked. She saved it. I don\'t know what for. I don\'t think she knew.

She laughs.

rosa: And I just walked in there in my church coat and spent it. On your father\'s gambling. On a girl from the Main Line I\'ve met twice.

She looks at you.

rosa: On you.

The fountain is off. It\'s March. There\'s nothing in it but pennies and a Wawa cup.

${g.f('terms8') === 'count' ? 'rosa: You promised me I could count. So I\'m counting. That\'s one. That\'s one I did for you, Salvatore. Don\'t make me spend anything else.' : 'rosa: Don\'t make me spend anything else, Salvatore. I don\'t have anything else. That was it. That was the whole DiNardo bank.'}

You put your arm around your mother on the edge of a dry fountain on a Friday morning in March, and she lets you, and she cries for exactly one minute by your watch and then stops, and wipes her eyes with the back of her wrist, and stands up.

rosa: I have a second-grade field trip to the Franklin Institute at nine-fifteen. Go to class.`,
    next: 'a3_jules'
  },

  a3_jules: {
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { time: '11:30 AM' },
    text: g => `You find Jules in the lounge at the big table with her orgo book open, not reading it, with her phone face down beside it.

She looks up.

jules: Dante texted. Twenty minutes ago.

She turns the phone over.

TXT Unknown number: tonights off. grandpa says the girl doesnt play. ever. paper is clean
TXT Unknown number: your boyfriends mother is a scary lady
TXT Unknown number: — D

jules: What did you do?

sam: Nothing. I didn\'t do anything.

jules: Sam.

sam: My mother did.

You tell her. The Circolo. The river. *I\'m asking.* The whole DiNardo bank, spent in a back room on Passyunk Avenue in one morning.

When you\'re done, Jules sits with her hand flat on her orgo book.

jules: Your mother walked into a Mafia social club at seven in the morning and told Bruno Iannucci I don\'t play cards anymore.

sam: Yeah.

jules: For me.

sam: For all of us. But yeah. You were on the list.

Jules closes her eyes.

jules: Nobody has ever—

She stops. She starts again.

jules: My mother has never walked into a room for me. Not a parent-teacher conference. Not a horse show. She sends Margaret. Margaret is the house manager.

She opens her eyes. They\'re wet. She doesn\'t cry in front of people. She doesn\'t now.

jules: I\'d like to meet her. Properly. Not at a Thanksgiving with Bruno Iannucci at the table. I\'d like to bring her flowers. What kind of flowers does she like?

sam: Carnations. From the Acme. She says roses are for people who don\'t know what anything costs.

jules: *(very quietly)* Oh, I love her.`,
    next: 'a4_closing'
  }
});
