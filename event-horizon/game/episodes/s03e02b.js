/* S3 · E2 · OUTREACH, part 2 of 4: Act Two ("The Week"). */
EH.scenes('s03e02', {

  /* ================= ACT TWO: THE WEEK ================= */
  a2_week: {
    card: { kind: 'act', label: 'Act Two', title: 'The Week' },
    loc: '1300 RESIDENCE HALL · 7-07',
    clock: { day: 'Tue', date: 'Sep 7', time: '9:00 PM' },
    text: g => `Tuesday night. Nik\'s counter says *22 of 61*.

You have classes. You have a delivery shift at Ciro\'s Thursday and Saturday. You have a girlfriend going to Ravenscourt in twelve days, and a city that is quietly signing its name on a tablet, one cold pair of hands at a time.

Three things. Before Friday.`,
    next: 'a2_hub'
  },

  a2_hub: {
    loc: '1300 RESIDENCE HALL · 7-07',
    text: 'Wednesday, Thursday, Friday. Three things.',
    hub: {
      slots: 3, label: 'The second week',
      blurb: 'The counter keeps going up.',
      options: [
        { id: 'w2_bree', text: 'Port Richmond. Bree hasn\'t answered a text since the anniversary.', cost: 1, tag: 'Bree', go: 'a2_bree' },
        { id: 'w2_carmen', text: 'North 15th Street. Carmen said she\'d think. Jayden said it would get cold, and it did.', cost: 1, tag: 'Carmen', go: 'a2_carmen' },
        { id: 'w2_mikey', text: 'Mikey. He texted *we need to talk* and nothing else, which from Mikey is a siren.', cost: 1, tag: 'Mikey', go: 'a2_mikey' },
        { id: 'w2_grace', text: 'Grace. She\'s back for a fifth year, and she just posted a photo in scrubs. Navy scrubs.', cost: 1, tag: 'Grace', go: 'a2_grace' },
        { id: 'w2_nik', text: 'Nik has been watching anniversary footage for two weeks. He says he found something. "Someone."', cost: 1, tag: 'Nik', go: 'a2_nik' }
      ],
      done: 'a3_table'
    }
  },

  a2_bree: {
    loc: 'PORT RICHMOND · THE KOWALS\' STOOP',
    clock: { day: 'Wed', date: 'Sep 8', time: '7:30 PM' },
    enter: g => { g.flag('bree2_visit'); g.bond('bree', { trust: 1 }); g.know('bree_registered', ['sam', 'bree'], 'Bree signed up for the Registry on Labor Day. The Registry pays household members\' transplant meds. Bruno stopped paying for Halina\'s pills in June, when his people went to ground. Bree\'s intake is Saturday at ten at the Navy Yard clinic.'); },
    text: `Bree is on the stoop in Port Richmond with a Yuengling she isn\'t drinking, watching the El go by at the end of the block.

She sees you coming and doesn\'t get up.

bree: Wawa.

sam: You stopped answering.

bree: I stopped answering a lot of people.

You sit down a step below her. The El goes by again. She waits for it to pass.

bree: I signed.

You don\'t say anything. She looks at you like she expected you to.

bree: Bruno stopped paying in June. For her pills. Everybody who works for him, all the Changed, they all went under. Under the water, like my aunt says. No calls. Phones off. Heck says the Circolo\'s shut. And the pills are eleven hundred dollars a month, Wawa, and if she misses them, her body kills the kidney. That\'s how it works. That\'s the whole math.

bree: The Registry pays for household meds. If I\'m a participant. So I\'m a participant.

She turns the bottle in her hands.

bree: Saturday. Ten. The Navy Yard. *(she laughs, not really)* The Navy Yard. Where Teddy died. On the steps of a building I can see from the parking lot.

bree: The lady said bring a support person. *(she doesn\'t look at you)* Lots of people do.`,
    choices: [
      { text: '"I\'ll be there. Ten o\'clock. Support person."', tag: 'I\'ll come',
        fx: g => { g.flag('bree2', 'come'); g.bond('bree', { affection: 2, trust: 1 }); }, go: 'a2_bree_end' },
      { text: '"Don\'t go, Bree. We\'ll figure out the money. Some other way."', tag: 'Don\'t go',
        fx: g => { g.flag('bree2', 'dont'); g.bond('bree', { tension: 2 }); g.hidden('revenant_drift', 0.5); }, go: 'a2_bree_end' }
    ]
  },

  a2_bree_end: {
    loc: 'PORT RICHMOND · THE KOWALS\' STOOP',
    text: g => `${g.f('bree2') === 'come' ? 'bree: *(after a while)* Okay.\n\nShe finally drinks some of the beer.\n\nbree: Teddy would\'ve hated this.\n\nsam: Teddy would\'ve come with you.\n\nbree: Yeah. *(she wipes her nose with her wrist)* Yeah. He would\'ve. In that stupid coat.' : 'bree: *Some other way.* Wawa. With what? With your pizza money? With whatever you keep in a sock?\n\nShe stands up.\n\nbree: You don\'t get to tell me don\'t. Nobody gets to tell me don\'t. You never once had to pick between somebody\'s kidney and your own name on a list.\n\nShe goes inside. The screen door bangs. A minute later, the light in the upstairs window goes on. She doesn\'t come back out.\n\nYour phone, ten minutes later, on the El:\n\nTXT bree: 10am saturday. building 1. come or dont'}`,
    next: '@hub'
  },

  a2_carmen: {
    loc: 'NORTH 15TH STREET · CARMEN\'S LIVING ROOM',
    clock: { day: 'Wed', date: 'Sep 8', time: '5:00 PM' },
    enter: g => { g.bond('carmen', { trust: 1 }); g.bond('jayden', { affection: 1 }); g.know('carmen_waiting2', ['sam', 'carmen'], 'Carmen hasn\'t called the Registry. A Registry nurse came back Tuesday and left another pamphlet.'); },
    text: g => `Carmen\'s living room. The plastic on the couch squeaks when you sit. ${g.f('carmen1') === 'truth' ? 'The first pamphlet burned in the San Judas candle. There\'s a new one on top of the TV now.' : 'The pamphlet is still on top of the TV under San Judas. There\'s a second one next to it now.'}

carmen: They came back Tuesday. The nice one. She left another one. She said *any time* again. She says *any time* like a person who means *soon*.

Jayden is on the floor with a box of LEGO, building something long and flat and gray.

sam: What is it, bud?

jayden: Broad Street.

He shows you. A long gray road of flat LEGO tiles, all the way across the rug, with a yellow line down the middle. Little cars. A bus.

Down the yellow line, he has laid a row of clear pieces. Transparent studs, one after another, glinting.

sam: What\'s that?

jayden: *(like it\'s obvious)* The crack.

You go very still.

jayden: It\'s in the middle. It goes all the way down. It\'s got light in it. I can feel it when we drive on Broad. Abuela doesn\'t like when I say.

Carmen crosses herself without looking up from her novela.

jayden: It\'s bigger than last year.`,
    next: '@hub'
  },

  a2_mikey: {
    loc: 'THE 3RD DISTRICT · 11TH & WHARTON',
    clock: { day: 'Thu', date: 'Sep 9', time: '6:30 AM' },
    enter: g => { g.know('ppd_registry', ['sam', 'mikey'], 'A PPD directive, effective October 1: patrol officers will "assist Registry outreach staff with wellness checks on request." Mikey\'s district gets the pilot. Mikey has to decide whether he\'ll do it.'); g.bond('mikey', { trust: 1 }); },
    text: `Mikey meets you in the 3rd District parking lot at 6:30 in the morning, before roll call, with two coffees from the Wawa on Passyunk and a sheet of paper folded in quarters.

He hands you the paper without a word.

*POLICE DEPARTMENT · CITY OF PHILADELPHIA · DIRECTIVE 27-14.* *Effective October 1. Patrol officers will assist Broad Street Registry outreach staff with residential wellness checks upon request. Pilot program: 3rd, 22nd, 24th, 25th, 26th Districts.*

You read it twice.

mikey: That\'s my district. That\'s Carmen\'s district. That\'s Kensington, that\'s Port Richmond. They picked every district one of yours lives in, Sammy. They didn\'t pick Chestnut Hill.

He drinks his coffee.

mikey: I told you. Next it\'s cops.

sam: What are you going to do?

mikey: I don\'t know. That\'s why I\'m here at six in the morning instead of sleeping. *(he looks at you)* If I say no, they move me. Desk. Or the airport. Somewhere I can\'t see nothing. If I say yes, I\'m the cop standing behind the nurse on Carmen\'s stoop.

mikey: You tell me. What do you want me to do?`,
    choices: [
      { text: '"Say yes. Be the cop on the stoop. Be the one who makes sure nobody gets taken."', tag: 'Say yes',
        fx: g => { g.flag('mikey2', 'yes'); g.bond('mikey', { respect: 1 }); g.know('mikey_inside2', ['sam', 'mikey'], 'Mikey will take the Registry wellness-check detail, so he can be on the stoops when it happens.'); }, go: 'a2_mikey_end' },
      { text: '"Say no. Don\'t let them make you that guy. Not for this."', tag: 'Say no',
        fx: g => { g.flag('mikey2', 'no'); g.bond('mikey', { affection: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a2_mikey_end' },
      { text: '"I can\'t decide that for you, Mikey. You\'re the cop. What do *you* think?"', tag: 'Your call',
        fx: g => { g.flag('mikey2', 'his'); g.bond('mikey', { respect: 2, trust: 1 }); g.hidden('revenant_drift', -1); }, go: 'a2_mikey_end' }
    ]
  },

  a2_mikey_end: {
    loc: 'THE 3RD DISTRICT · 11TH & WHARTON',
    text: g => `${g.f('mikey2') === 'yes' ? 'mikey: *(slowly)* Yeah. Yeah. Somebody\'s gotta be on the stoop who knows what he\'s looking at. Okay.\n\nHe folds the directive back into quarters.\n\nmikey: You owe me, Sammy. For the rest of your life.' : g.f('mikey2') === 'no' ? 'mikey: *(slowly)* Yeah. Yeah, okay. Desk duty. Ma\'ll be thrilled. She\'s been praying for me to get desk duty since the academy.\n\nHe folds the directive back into quarters.\n\nmikey: Somebody else is gonna be on that stoop, Sammy. You know that. Somebody who doesn\'t know what he\'s looking at.' : 'Mikey looks at you for a long moment, like you said something in another language.\n\nmikey: Huh.\n\nsam: What?\n\nmikey: Nothing. You just never asked me that before. You always know what everybody should do.\n\nHe drinks his coffee. He thinks.\n\nmikey: I think I gotta be on the stoop. I think if I\'m not, I\'m gonna be sitting at a desk at the airport reading about it in the paper, and I\'m gonna hate myself. *(beat)* Yeah. I\'ll do it. My way.'}`,
    next: '@hub'
  },

  a2_grace: {
    loc: 'THE BELL TOWER',
    clock: { day: 'Thu', date: 'Sep 9', time: '4:00 PM' },
    enter: g => { g.flag('grace2'); g.bond('grace', { trust: 1, respect: 1 }); g.know('grace_registry', ['sam', 'grace'], 'Grace took a paid job as a medical scribe at the Registry clinic at the Navy Yard, Building 1, three days a week. For her med school applications. She has seen intake files.'); },
    text: `Grace is sitting on the steps of the Bell Tower in navy scrubs, eating a granola bar, with an MCAT prep book on her knee and the face of someone who has slept four hours a night since 2023.

The scrubs have a little kingfisher over the pocket.

grace: Don\'t.

sam: I didn\'t say anything.

grace: Your face said everything. Sit down. Okay.

You sit.

grace: It\'s a scribe job. I type what the doctor says while the doctor says it. It pays nineteen an hour, which is more than the RA job, and it\'s clinical hours, which I need, and it\'s the Navy Yard, which is on the Broad Street Line. That\'s why.

She takes a bite of the granola bar.

grace: That\'s the official why.

sam: What\'s the unofficial why?

She doesn\'t answer for a while.

grace: I measured your hair for a year. I measured your gums. I did the math on your shins with a library textbook and a magnifying glass. And I never got to see a *file*. *(she looks at you)* Now I see files, Sam. Every day. Intake forms. Cold extremities. Lost time. Bone density. They\'re measuring the same things I measured on you. They\'re just better at it.

grace: And there are things in the files that aren\'t medical. There\'s a column. It\'s just letters. *O*, *R*, and *H*. I asked what they meant. The doctor said *administrative*.

She finishes the granola bar.

grace: I\'m going to find out what *administrative* means. Okay?

sam: Grace—

grace: Okay.`,
    next: '@hub'
  },

  a2_nik: {
    loc: '1300 RESIDENCE HALL · 7-07',
    clock: { day: 'Fri', date: 'Sep 10', time: '1:00 AM' },
    enter: g => { g.flag('nik_ghost2'); g.bond('nik', { trust: 1 }); g.know('ghost_girl', ['sam', 'nik'], 'On the anniversary, a girl in a black hoodie stood on the northwest corner of Broad and Spring Garden. Nik\'s footage: at 11:51:04, in the stuttered second, she\'s the only person on any camera who moves. She walked away up Spring Garden. She isn\'t on the Registry counter\'s photo wall.'); },
    text: g => `One in the morning. Nik hasn\'t slept. Nik has, by your count, consumed four Celsius and a sleeve of Thin Mints from a freezer he isn\'t allowed to have.

nik: Okay. Okay okay okay. Sit. Watch. Don\'t talk.

The bank camera at Broad and Spring Garden. The anniversary. 11:51:00.

${g.f('corner1') === 'hand' ? 'You can see yourself in the corner of the frame, holding Jules\'s hand.' : 'You can see yourself in the corner of the frame.'}

nik: Okay. Here\'s the stutter. The second that happened twice. Every camera I have records it as two frames that are the same. Identical. Pixel for pixel. Because everything was stopped. Right?

He clicks forward one frame. Then back. Then forward.

nik: Except her.

Northwest corner. A girl in a black hoodie, alone, hands out of her pockets.

In the first frame, she\'s looking at the bank clock.

In the second frame, the identical second, she\'s looking at *you*.

nik: She moved, bro. In a second when nobody moved. Nobody. Not even— *(he stops himself)* Not even anybody.

He pulls up another window. The Registry\'s website. Under the counter, there\'s a photo wall: *OUR PARTICIPANTS*, with smiling faces, the ones who agreed to share.

nik: She\'s not on it. And she\'s not in any of the Temple directories, or Drexel, or CCP, and I ran her face through three things that are illegal in Illinois.

nik: Nothing. She doesn\'t exist, Salvatore.

nik: Who stands in a stopped second and looks at you?`,
    next: '@hub'
  }
});
