/* S3 · E1 · ONE YEAR, part 2 of 4: Act Two ("The Registry"). */
EH.scenes('s03e01', {

  /* ================= ACT TWO: THE REGISTRY ================= */
  a2_hall: {
    card: { kind: 'act', label: 'Act Two', title: 'The Registry' },
    loc: 'CITY HALL · THE NORTH APRON',
    clock: { day: 'Sun', date: 'Aug 22', time: '11:55 AM' },
    text: `The north side of City Hall, under the arch, in the heat. A podium with the city seal on it. Cameras on tripods, six deep. TV trucks double-parked on Penn Square with their masts up. A couple hundred people behind a bike-rack barricade: reporters, staffers, tourists who wandered over from the Love Park fountain to see what the fuss was.

Jules is beside you in sunglasses and a Temple hoodie with the hood up, in August, in ninety degrees. Her hand is in yours and it\'s cold, which it never is.

jules: I told her I was in Maine this weekend.

sam: Why Maine?

jules: It\'s the furthest thing I could think of that isn\'t Boston.

At the edge of the press pen, in a navy polo with a lanyard, handing out glossy folders to reporters with a smile that could sell a boat: Hugh.

He sees you. He sees Jules. The smile doesn\'t move at all. He just lifts one folder a quarter of an inch, like a toast.

Jules\'s hand tightens on yours until the bones creak.`,
    next: 'a2_presser'
  },

  a2_home: {
    card: { kind: 'act', label: 'Act Two', title: 'The Registry' },
    loc: 'MIFFLIN STREET · THE FRONT ROOM',
    clock: { day: 'Sun', date: 'Aug 22', time: '11:55 AM' },
    text: g => `Mifflin Street on a Sunday, two hours early for gravy. The front room is full.

Pop in his chair with the remote. Ma in the doorway to the kitchen with a wooden spoon. Gigi on the floor in a ${g.f('hero_name') === 'secondhand' ? 'SECOND HAND' : g.f('hero_name') === 'wawa' ? 'WAWA (NOT THAT ONE)' : g.f('hero_name') === 'blur' ? 'BLUR' : 'SAINT SONIC'} T-shirt, two sizes too big. Nonna on the good end of the couch, which nobody else is allowed to sit on, with her rosary.

And Jules, beside you on the bad end of the couch, very straight, the way her mother sits.

Gigi looks at the screen, at the empty podium with the city seal on it, at the chyron: *LIVE: CITY HALL ANNOUNCEMENT ON BROAD STREET ANNIVERSARY.*

gigi: Is this about Second Hand? Is it? Sammy, is it about—

rosa: Gianna. Quiet.

Ma doesn\'t take her eyes off the screen. Neither does Nonna.

frank: Turn it up, somebody. Where\'s the— I\'m holding it. Okay. I\'m holding it.`,
    next: 'a2_presser'
  },

  a2_lounge: {
    card: { kind: 'act', label: 'Act Two', title: 'The Registry' },
    loc: '1300 RESIDENCE HALL · THE 7TH FLOOR LOUNGE',
    clock: { day: 'Sun', date: 'Aug 22', time: '11:55 AM' },
    text: `The seventh-floor lounge in 1300: a sectional the color of a bruise, a TV bolted to the wall, Nik\'s laptop open on the coffee table running three livestreams at once, and Simone Okonkwo-Hayes in a silk headwrap with a bowl of cereal, who has been back on campus for forty-eight hours and is already the mayor of this floor.

simone: Salvatore. Juliet. Sit. I saved you the good cushions. The bad cushions have a history I will not discuss.

Jules sits down very straight, the way her mother sits.

simone: *(watching her, quietly)* Your mother\'s on the program.

jules: I know.

simone: Do you want me to talk through it or be quiet through it?

jules: Talk. Please. If you\'re quiet, I\'ll hear myself think.

simone: Done. I have a lot of thoughts about City Hall\'s architecture. It\'s the Second Empire style. It\'s *extremely* extra.`,
    next: 'a2_presser'
  },

  a2_presser: {
    loc: 'CITY HALL · LIVE',
    clock: { time: '12:00 PM' },
    enter: g => { g.know('registry', ['sam', 'jules', 'nik'], 'August 22, noon, City Hall: the City and Halcyon Dynamics announced the Broad Street Exposure Registry. Sixty-one confirmed people affected by a "neurological exposure event" near Broad and Spring Garden at 11:51 p.m. on August 22, 2026. Free care at a Registry clinic at the Navy Yard, a hotline, a $500 participation stipend, and outreach teams visiting "residents identified through public-health data." Dr. Catherine Pemberton is the Registry\'s medical advisor.'); g.know('catherine_registry', ['sam', 'jules'], 'Jules\'s mother stood at the podium beside Achterberg as the Registry\'s medical advisor.'); if (g.f('watch1') === 'home') g.know('registry', ['rosa', 'nonna', 'frank']); },
    text: g => `At noon, three people walk out to the podium.

A woman in a navy suit with a city lanyard: the Health Commissioner, Dr. Ruth Albano. A small woman in a gray cardigan with her glasses on top of her head. And Dr. Catherine Pemberton, in a cream jacket, perfectly still.

${g.f('watch1') === 'hall' ? 'Twenty feet away. Jules makes a sound beside you, very small, like something closing.' : g.f('watch1') === 'home' ? 'On Pop\'s TV, slightly green because the color has been wrong since 2019. Beside you, Jules makes a sound, very small, like something closing.' : 'On the lounge TV and on three of Nik\'s livestreams at once, from three angles. Beside you, Jules makes a sound, very small, like something closing.'}

The Commissioner goes first. A year ago tonight, near Broad and Spring Garden, the city experienced what investigators now understand to have been a "localized neurological exposure event." Brief. Unexplained. Not contagious. Not dangerous to the public. She says *not dangerous to the public* three times.

Then Achterberg.

ACHTERBERG: Good afternoon. My name is Miriam Achterberg. My company, Halcyon Dynamics, has spent the past year working quietly with the Department of Public Health to understand what happened on Broad Street, and to care for the people it happened to.

ACHTERBERG: Today we know of sixty-one. People who were within roughly half a mile of that intersection, at 11:51 p.m. on August twenty-second of last year. Many of them have had symptoms. Episodes of lost time. Cold hands and feet that don\'t warm. A sense that the world has, very briefly, paused.

${g.f('watch1') === 'home' ? 'In the front room on Mifflin Street, nobody breathes. Nonna\'s rosary has stopped moving in her fingers.' : g.f('watch1') === 'lounge' ? 'simone: *(very quietly)* Oh, she\'s good.' : 'Around you, two hundred people are writing it down.'}

ACHTERBERG: Most of these effects are mild. Some are not. And until today, the people experiencing them have been frightened and alone, and some of them have been preyed upon. *(the smallest pause)* By people who saw an opportunity.

ACHTERBERG: So today the City and Halcyon are opening the Broad Street Exposure Registry. Free, confidential care, at our clinic at the Navy Yard. A hotline, staffed around the clock. A participation stipend of five hundred dollars, because people\'s time is worth something. And outreach teams, who will be visiting residents we\'ve identified through public-health data, to let them know help exists.

ACHTERBERG: Participation is entirely voluntary.

She steps aside.

Catherine Pemberton steps up to the microphones. She doesn\'t look at the paper.

catherine: I am a surgeon. I am not a spokesperson. So I\'ll say one thing, and I\'ll say it as a mother.

catherine: If your child has been cold for a year, and no doctor has been able to tell you why, please. Bring them in.

${g.f('watch1') === 'hall' ? 'Twenty feet away, behind a bike rack, her child pulls her hood down over her eyes.' : 'Beside you, her child closes her eyes.'}

Questions. A man from 6abc asks about the clinic\'s hours. A woman from the Tribune asks about privacy. And then, from the back, a voice you know:

dana: Dana Fiorillo, Inquirer. Dr. Achterberg. Is the Registry connected in any way to the figure the city has been calling ${g.f('hero_name') === 'secondhand' ? 'Second Hand' : g.f('hero_name') === 'wawa' ? 'Wawa' : g.f('hero_name') === 'blur' ? 'the Blur' : 'Saint Sonic'}?

The cameras swing.

Achterberg considers the question as if it\'s a reasonable one.

ACHTERBERG: Ms. Fiorillo. If that person exists, and if they were on Broad Street that night, then they are one of the sixty-one, and I hope they\'ll call us. *(a beat)* I think they\'d find we have a great deal in common.

${g.f('plan10') === 'deal' ? 'She doesn\'t look at the camera when she says it. She doesn\'t have to. You walked into her truck in May. She told you she\'d remember.' : 'She looks straight down the barrel of the 6abc camera when she says it.'}

The Commissioner says *thank you all*, and they walk back inside, the three of them, and the last thing the cameras catch is Catherine Pemberton pausing in the arch, alone, for half a second, and looking back out at the crowd. As if she\'s looking for someone.`,
    next: 'a2_after'
  },

  a2_after: {
    loc: g => g.f('watch1') === 'hall' ? 'CITY HALL · THE NORTH APRON' : g.f('watch1') === 'home' ? 'MIFFLIN STREET · THE FRONT STEP' : '1300 RESIDENCE HALL · THE STAIRWELL',
    clock: { time: '12:25 PM' },
    text: g => `${g.f('watch1') === 'hall' ? 'The crowd breaks up. You walk Jules away across the plaza, past the big bronze clothespin, before Hugh can make his way through the bike racks to say something charming.\n\nShe stops on the corner of 15th and Market and leans on a newspaper box and just breathes.' : g.f('watch1') === 'home' ? 'Pop turns off the TV. Nobody says anything. Gigi looks from face to face and, for once in her life, doesn\'t ask.\n\nJules gets up and goes out the front door. You find her sitting on the front step, the one the whole family sits on, with her elbows on her knees.' : 'Simone mutes the TV. Nik closes his laptop very gently, the way you\'d close a door on someone sleeping.\n\nJules gets up and walks out of the lounge. You find her in the stairwell between seven and six, sitting on a step, under the emergency light.'}

jules: She knew.

sam: Jules—

jules: She said *if your child has been cold for a year.* She said it into the camera. To other people\'s mothers. And she never once asked me why my hands are cold.

She looks at her hands.

jules: Either she knows about me and she said it anyway. Or she doesn\'t know, and she stood next to that woman and said it anyway. I don\'t know which one is worse. I genuinely can\'t tell.

${g.knows('aperture_truth', 'jules') ? 'jules: She opened a door under Broad Street, Sam. We were standing in it. And my mother is helping her take attendance.' : 'jules: That woman has a bed with my number on it. And my mother is helping her take attendance.'}

She takes out her phone. Her thumb hovers over a contact. *Mother*, no photo.

jules: I could call her. Right now. She\'d pick up. She always picks up on the second ring, she thinks the first ring is desperate.`,
    choices: [
      { text: '"Call her. Ask her. You deserve to know which one it is."', tag: 'Call her',
        fx: g => { g.flag('mother1', 'call'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a2_mother_call' },
      { text: '"Don\'t. Not today. Not on the street. Let her come to you."', tag: 'Wait',
        fx: g => { g.flag('mother1', 'wait'); g.bond('jules', { affection: 1 }); }, go: 'a2_mother_wait' },
      { text: '"What do you want to do?" Don\'t decide for her. Just ask.', tag: 'Ask her',
        fx: g => { g.flag('mother1', 'ask'); g.bond('jules', { trust: 2, respect: 1 }); g.hidden('revenant_drift', -1); }, go: 'a2_mother_ask' }
    ]
  },

  a2_mother_call: {
    loc: g => g.f('watch1') === 'hall' ? '15TH & MARKET' : g.f('watch1') === 'home' ? 'MIFFLIN STREET · THE FRONT STEP' : '1300 RESIDENCE HALL · THE STAIRWELL',
    enter: g => { g.flag('jules_called_mother1'); g.know('catherine_call1', ['sam', 'jules'], 'Jules called her mother after the press conference. Catherine said: "Are you cold, Juliet?" Jules hung up without answering.'); },
    text: `She presses it.

One ring. Two.

catherine: *(through the phone, crisp)* Juliet. You\'re in Maine.

jules: I\'m not in Maine.

A pause on the line. A long one. City Hall noise behind it, a door, someone saying *Doctor, the car*.

catherine: Where are you?

jules: I watched you. Just now. *If your child has been cold for a year.*

Another pause.

catherine: *(quieter, and something in it has changed)* Juliet. Are you cold?

Jules takes the phone away from her ear and looks at it.

Then she hangs up.

She sits there with the phone in her lap, and her mother calls back. Once, twice, three times. *Mother. Mother. Mother.* Jules turns the phone face down.

jules: She didn\'t know.

sam: You don\'t know that.

jules: I know her voice. That was the voice she used when I fell off the horse at nine. She didn\'t know. *(very quietly)* And now she does. And I did that.`,
    next: 'a3_carmen'
  },

  a2_mother_wait: {
    loc: g => g.f('watch1') === 'hall' ? '15TH & MARKET' : g.f('watch1') === 'home' ? 'MIFFLIN STREET · THE FRONT STEP' : '1300 RESIDENCE HALL · THE STAIRWELL',
    text: `She looks at the contact for a long moment. *Mother.* No photo.

Then she puts the phone back in her pocket.

jules: Not today.

sam: Not today.

jules: Today is ours. A year ago tonight, you stopped the world for a kid on a bus and I was on Liacouras Walk at a concert, and a light went over and every pool ball in the city decided to go my way. I don\'t want to give today to her.

She takes your hand. Hers is still cold.

jules: She can have tomorrow.`,
    next: 'a3_carmen'
  },

  a2_mother_ask: {
    loc: g => g.f('watch1') === 'hall' ? '15TH & MARKET' : g.f('watch1') === 'home' ? 'MIFFLIN STREET · THE FRONT STEP' : '1300 RESIDENCE HALL · THE STAIRWELL',
    enter: g => { g.know('jules_letter1', ['sam', 'jules'], 'Jules decided to write her mother a letter instead of calling. On paper. "She can\'t interrupt a letter."'); },
    text: `sam: What do you want to do?

She looks at you. For a second, she looks almost annoyed, like you\'ve handed her something heavy. Then she doesn\'t.

jules: Nobody asks me that. Do you know that? Gran tells me. Mother tells me. Hugh tells me what I *really* want, which is always whatever he wants. You\'re the only one who asks.

She thinks.

jules: I want to write it down. A letter. On paper. Like a person in a Victorian novel. She can\'t interrupt a letter. She can\'t use the voice on a letter. She has to read all of it before she gets to say anything.

She puts the phone away.

jules: I\'ll write it tonight. After 11:51. *(she almost smiles)* I have very good stationery. My mother taught me to always have very good stationery. She\'s going to regret that.`,
    next: 'a3_carmen'
  }
});
