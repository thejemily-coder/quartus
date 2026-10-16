/* S3 · E2 · OUTREACH, part 1 of 4: meta, cold open, Act One ("Add/Drop"). */
EH.episode({
  id: 's03e02', season: 3, number: 2, title: 'Outreach', look: 's3',
  cast: ['sam', 'jules', 'nik', 'bree', 'heck', 'grace', 'mikey', 'carmen', 'jayden', 'hugh', 'simone'],
  start: 'cold_open',
  xp: 6,
  previously: g => [
    'On the anniversary, the City and Halcyon opened the Broad Street Exposure Registry. Free care. Five hundred dollars. Jules\'s mother stood at the podium.',
    g.f('wellness1') === 'talk' && g.f('talk_s3e1') === 'weak' ? 'On Carmen\'s stoop, you gave the Registry nurse a fake name. She took your face anyway. "We have a lot of days."' : 'Registry outreach came to Carmen\'s door for Jayden.',
    g.f('mother1') === 'ask' ? 'Jules decided to write her mother a letter. "She can\'t interrupt a letter."' : g.f('mother1') === 'call' ? 'Jules called her mother. "Are you cold, Juliet?"' : 'Jules didn\'t call her mother. "She can have tomorrow."',
    'At 11:51:04, one year later, every clock in North Philadelphia said four twice.',
    'Catherine Pemberton found her daughter in the Registry. Handler: H. Pemberton.'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'PORT RICHMOND · THE KOWALS\' KITCHEN',
      clock: { day: 'Mon', date: 'Sep 6', time: '6:15 PM' },
      text: `> THE CAMERA.

Labor Day in Port Richmond. Somebody on the block is grilling kielbasa. The Kowals\' kitchen has the window open and a fan going and a stack of mail on the table, most of it from Jefferson Hospital, most of it with the word *BALANCE* on it in red.

Halina Kowal sits at the table in a housecoat with her new kidney and her pill organizer. Seven compartments. Morning and night. Fourteen little doors.

Across from her, a gray-haired woman in a navy polo shirt that says *BROAD STREET REGISTRY* over the heart, with a tote bag and a tablet. Her lanyard says *LINDA*. She has been offered tea and accepted it, which in this kitchen is a kind of passport.

LINDA: The medication assistance program covers transplant medications for household members of registered participants. Tacrolimus. Mycophenolate. All of it. No copay.

HALINA: Eleven hundred dollars a month.

LINDA: *(gently)* Not anymore.

Halina looks at the pill organizer. She opens the Monday-night door and closes it again.

HALINA: The Italian was paying. Since the spring. Then in June, he stopped answering. Everybody who works for him, they don\'t answer anymore. Like they all went under the water.

LINDA: I\'m so sorry.

HALINA: Don\'t be sorry. Be specific. What do you want from my niece?

Bree is in the doorway to the living room with her arms folded. She hasn\'t said a word since Linda came in.

LINDA: Just an intake. An hour at the clinic. A few questions. Some tests. Your niece was near Broad Street that night, Mrs. Kowal. We\'d like to make sure she\'s all right.

HALINA: *(to Bree, in Polish, sharp)* Well?

Bree looks at the pill organizer. At the stack of red *BALANCE* envelopes. At the empty square on the linoleum where the dialysis machine used to sit.

She unfolds her arms.

bree: Give me the pen.

LINDA: Oh, it\'s a tablet, honey. You just sign with your finger.

Bree signs with her finger. It doesn\'t look like her name. She signs like someone trying to look like they don\'t care.

LINDA: Welcome to the Registry, Bree. Saturday at ten. Bring someone, if you\'d like. A support person. Lots of people do.

She smiles. It\'s a real smile. That\'s still the worst part.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_tuesday' },

    /* ================= ACT ONE: ADD/DROP ================= */
    a1_tuesday: {
      card: { kind: 'act', label: 'Act One', title: 'Add/Drop' },
      loc: '1300 RESIDENCE HALL · 7-07',
      clock: { day: 'Tue', date: 'Sep 7', time: '7:40 AM' },
      enter: g => { g.sleep(8); g.know('registry_counter', ['sam', 'nik'], 'The Registry\'s public website has a live counter: REGISTERED PARTICIPANTS. It started at 0 on Aug 22. By Sep 7 it says 19 of 61.'); },
      text: g => `The second week of sophomore year. Add/drop ends Friday. You\'ve added nothing and dropped nothing, and your schedule is a list of rooms you can\'t find.

Nik is at the card table with his four monitors, eating dry Cheerios out of a mug, watching a number.

nik: Nineteen.

sam: Nineteen what?

He turns a monitor toward you. The Registry\'s website. Clean, blue, the little kingfisher. A photo of smiling nurses. And in the corner, a counter, like a donation thermometer, like the ones on telethons.

*REGISTERED PARTICIPANTS: 19 of 61.*

nik: It was zero on the twenty-second. It\'s gone up every day. Two yesterday. Labor Day, bro. People spent Labor Day registering.

He scrolls. The number blinks. *20 of 61.*

nik: *(very quietly)* And that\'s live.

You watch it for a while. You don\'t know who number twenty is. Somebody with cold hands. Somebody who needed five hundred dollars more than they needed to not be on a list.

${g.f('mother1') === 'ask' ? 'Your phone buzzes.\n\nTXT jules: she wrote back\nTXT jules: by COURIER. a man in a hat just handed it to simone. simone signed for it like it was a summons\nTXT jules: come up. please. i don\'t want to open it alone. i also don\'t want anyone else to open it. i want you to sit there while i open it' : g.f('mother1') === 'call' ? 'Your phone buzzes.\n\nTXT jules: she came to campus. like i said she would. she stood in the lobby of 1300 in the cream jacket for two hours yesterday. the RA asked her to leave\nTXT jules: she left a card at the desk\nTXT jules: come up. please. i haven\'t opened it' : 'Your phone buzzes.\n\nTXT jules: i called her. like i said i would\nTXT jules: she didn\'t pick up on the second ring. she didn\'t pick up at all. she sent a card by courier instead\nTXT jules: come up. please. i haven\'t opened it'}`,
      next: 'a1_card'
    },

    a1_card: {
      loc: '1300 RESIDENCE HALL · 11-03',
      clock: { time: '7:55 AM' },
      enter: g => { g.know('catherine_invite2', ['sam', 'jules'], 'Catherine\'s card to Jules: "I would like to talk. Not about the Registry. About us. Ravenscourt, Sunday the 19th. Your grandmother will be there. I think she should be." Signed "Mother." Under it, crossed out but readable: "Catherine."'); },
      text: g => `Jules and Simone\'s apartment is on eleven and is already, in two weeks, nicer than anywhere you\'ve ever lived. There are plants. There is a rug. Simone has hung a framed playbill in the bathroom.

simone: *(from the kitchenette, not looking up)* Salvatore. She\'s on the bed. She\'s been holding it for twenty minutes like a live grenade. Do something.

Jules is cross-legged on her bed with a heavy cream envelope in both hands. The handwriting on it is perfect. *Juliet.*

${g.f('mother1') === 'ask' ? 'jules: I sent the letter on the twenty-fourth. Eleven pages. I used both sides. My mother taught me never to use both sides, so I used both sides.' : ''}

She hands it to you.

jules: You open it. You read it first. Then tell me if I should.

You open it. One card. Same perfect hand. Short.

*Juliet,*

*${g.f('mother1') === 'ask' ? 'I have read your letter four times. You were right that I could not interrupt it. I tried.' : 'I have started this card eleven times.'}*

*I would like to talk. Not about the Registry. About us, and about what I did not know, and what I should have known.*

*Ravenscourt. Sunday the 19th. Dinner. Your grandmother will be there. I think she should be.*

*Mother*

And under that, crossed out with a single neat line, but not so hard you can\'t read it: *Catherine.*

She signed her name first. Then she crossed it out and wrote *Mother*.

You look up. Jules is watching your face.

jules: Well?`,
      choices: [
        { text: '"Read it. It\'s okay. It\'s... actually okay. She crossed out her own name, Jules."', tag: 'Read it',
          fx: g => { g.flag('card2', 'read'); g.bond('jules', { trust: 1 }); }, go: 'a1_card_end' },
        { text: '"She wants you at Ravenscourt with Constance. On her ground. Read it, but read it carefully."', tag: 'Careful',
          fx: g => { g.flag('card2', 'careful'); g.bond('jules', { respect: 1 }); }, go: 'a1_card_end' },
        { text: 'Hand it back unopened, almost. "I\'m not going to tell you. You\'re going to want to read this one yourself."', tag: 'Hand it back',
          fx: g => { g.flag('card2', 'back'); g.bond('jules', { trust: 1, respect: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_card_end' }
      ]
    },

    a1_card_end: {
      loc: '1300 RESIDENCE HALL · 11-03',
      text: g => `She reads it. Twice. Her thumb stops on the crossed-out *Catherine*.

jules: She\'s never done that. Crossed out. My mother doesn\'t cross out. She writes it right the first time or she throws away the card and starts over. She had a *box* of cards.

jules: She left this one. On purpose. So I\'d see.

She puts the card on her nightstand, standing up, the way you\'d put a photo.

jules: The nineteenth. *(she looks at you)* ${g.f('card2') === 'careful' ? 'You\'re right. It\'s her ground. And Gran\'s. I\'ll go anyway. I\'m going to go and be very, very careful.' : 'I\'m going to go.'}

jules: I don\'t think you can come to this one.

sam: I know.

jules: I want you to. I want you in the car outside like a getaway driver. But I think she has to say whatever she has to say to just me.

From the kitchenette, Simone:

simone: For the record, I\'m available as a getaway driver. I have a learner\'s permit and an enormous amount of confidence.

On your way out, Jules catches your hand at the door.

jules: Sam. Since the corner. Since 11:51. ${g.f('corner1') === 'hand' ? 'The thing that pulled on me. Under the street. It hasn\'t stopped. It\'s just quieter. Like a tide that\'s always going out a little.' : 'Something under the street pulled on me. It hasn\'t stopped. It\'s just quieter.'}

jules: I didn\'t want to put it in a text.

She lets go.`,
      next: 'a1_walk'
    },

    a1_walk: {
      loc: 'LIACOURAS WALK',
      clock: { time: '10:50 AM' },
      enter: g => { g.know('registry_table', ['sam'], 'There is a Registry outreach table on Liacouras Walk at Temple, under a blue pop-up tent, between the a cappella group and the club that gives out free pancakes. Students line up for it.'); },
      text: g => `Liacouras Walk at ten to eleven on a Tuesday. The spine of campus. Every club in the university has a folding table out for the second week, and every one of them is yelling.

Free pancakes. An a cappella group doing a Beyoncé song badly. The Ski Club, in September. The Young Republicans, at a table nobody is standing near.

And between the pancakes and the a cappella, under a blue pop-up tent with a kingfisher on it: *BROAD STREET REGISTRY · WERE YOU ON CAMPUS AUG 22, 2026? YOU MAY BE ELIGIBLE.*

There\'s a line.

Not a long one. Six students. Seven. Standing the way people stand in line at the clinic, not looking at each other. One of them is wearing gloves. It\'s eighty-four degrees.

Behind the table: two nurses in navy polos. And a tall, golden, smiling sophomore from Penn in a Registry polo, who has crossed the city to work a table at Temple, who has a stack of glossy folders and a sign-up tablet, and who is very, very good at this.

Hugh sees you. He lifts a folder a quarter of an inch.

You keep walking. ${g.f('talk_s3e1') === 'weak' ? 'You keep walking fast, because one of the nurses has gray hair and a kind face and a tablet, and her name is Linda, and she wrote down a name on Carmen\'s stoop that wasn\'t yours.' : 'You keep walking.'}

You get to the corner of 13th before you let yourself breathe.

The week has five days in it. You can\'t be everywhere.`,
      next: 'a2_week'
    }
  }
});
