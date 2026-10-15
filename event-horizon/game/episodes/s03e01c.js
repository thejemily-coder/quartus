/* S3 · E1 · ONE YEAR, part 3 of 4: Act Three ("Wellness Check"). */
EH.scenes('s03e01', {

  /* ================= ACT THREE: WELLNESS CHECK ================= */
  a3_carmen: {
    card: { kind: 'act', label: 'Act Three', title: 'Wellness Check' },
    loc: g => g.f('watch1') === 'home' ? 'MIFFLIN STREET · THE KITCHEN' : 'THE BROAD STREET LINE · SOUTHBOUND',
    clock: { day: 'Sun', date: 'Aug 22', time: '2:40 PM' },
    enter: g => { g.meet('carmen'); g.meet('jayden'); },
    text: g => `${g.f('watch1') === 'home' ? 'Gravy is on the table. Ma is serving. Jules is learning, for the eleventh Sunday in a row, that you do not say *no thank you* to Nonna\'s meatballs, you say *just one*, and then you eat four.' : 'You\'re on the Broad Street Line, the two of you, heading south for gravy, forty minutes late for a two o\'clock that Ma considers a legal deadline.'}

Your phone. ${g.f('jayden_xmas') ? 'A number you saved at Christmas, in her living room, while she wrote yours inside a cabinet door: *CARMEN TORRES.*' : 'A 215 number you don\'t know. Then a voice you do: Carmen Torres. She called the pizza place on your delivery bag, and Ciro gave her your number, and you will be hearing about that from Ciro.'}

carmen: *(fast, low, in English and then in Spanish and then English again)* Sam. Sam, mijo. There are people at my door. Nurses. Two nurses and a man from the city with a clipboard. They have a letter with Jayden\'s name on it. They know his birthday. They know which school.

carmen: They\'re very nice. They keep saying how nice. They want to take him to a clinic. *Today.* To the Navy Yard. In their car. *Free.* They keep saying *free.*

Behind her, a little boy\'s voice:

jayden: *Tell the cold man! Abuela, tell him it\'s getting cold!*

carmen: I told them he\'s sleeping. They\'re waiting on the step. They said they can wait. They said they have all afternoon.

Jules is already standing up.

jules: I\'m coming.

She gives you the address. North 15th Street, near Lehigh. Twenty minutes on the subway.

Or less. A lot less. If you go the other way.`,
    choices: [
      { text: 'The subway. With Jules. Twenty minutes. Call Carmen back and tell her to keep the door shut.', tag: 'Subway',
        fx: g => { g.flag('travel1', 'subway'); }, go: 'a3_door' },
      { text: g => (g.f('watch1') === 'home' ? 'Catch Ma\'s eye across the table. *Counting.* Then go.' : 'Text Ma. *Counting.* Then go.') + ' Up Broad Street in no time. Jules can follow on the train.', tag: 'Tell Ma, then Slip', slip: true, if: g => g.f('terms8') === 'count',
        fx: g => { g.flag('travel1', 'slip'); g.bond('rosa', { trust: 1 }); g.hidden('halcyon_heat', 1); g.know('rosa_count_s3e1', ['sam', 'rosa'], 'On the anniversary, you texted Ma "counting" and Slipped up Broad Street to Carmen\'s.'); }, go: 'a3_door' },
      { text: 'Slip. Go. Now.', tag: 'Slip', slip: true,
        fx: g => { g.flag('travel1', 'slip'); g.hidden('halcyon_heat', 1); if (g.f('terms8') === 'count') { g.flag('broke_count_s3e1'); g.bond('rosa', { trust: -1 }); g.hidden('revenant_drift', 1); } }, go: 'a3_door' }
    ]
  },

  a3_door: {
    loc: 'NORTH 15TH STREET, NEAR LEHIGH',
    clock: { time: '3:05 PM' },
    enter: g => { if (g.f('travel1') === 'slip' && g.unsticks()) g.unstick('unstick_s3e1a', 'Time debt (Broad Street, north)'); g.know('registry_outreach', ['sam', 'jules', 'carmen'], 'Registry outreach came to Carmen Torres\'s door for Jayden on the anniversary: two nurses in navy polos, a city health inspector, a typed letter with his name and birthday, and a white SUV with a man who never got out.'); },
    text: g => `${g.f('travel1') === 'slip' ? 'You step out of the Slip on the corner of 15th and Lehigh, between a parked car and a hydrant, a little cold, a little out of breath. Jules is still on a train somewhere under Broad Street. That\'s fine. That was the point.' : 'You come up out of North Philadelphia station into the heat, and walk fast, Jules half a step ahead of you, which she never is.'}

North 15th Street, near Lehigh. A block of rowhouses with awnings, and old men on folding chairs, and a kid with a hose spraying the sidewalk to cool it.

And in front of Carmen\'s: a white SUV with a city parking placard on the dash, engine running, windows tinted. Somebody in the driver\'s seat. He doesn\'t get out.

On the stoop, three people.

Two nurses in navy polos that say *BROAD STREET REGISTRY* over the heart. One older, gray-haired, kind-faced, holding a tote bag full of pamphlets. One younger, with a tablet. And a man in a short-sleeved dress shirt and a city lanyard holding a clipboard, sweating through the shirt, who looks like he\'d rather be anywhere.

Up and down the block, neighbors have come out on their stoops. Three of them are filming.

The older nurse sees you coming and smiles. It\'s a real smile. That\'s the worst part.

NURSE: Hi there! Are you family?

Through the second-floor window, a curtain moves. Carmen, in her stair chair at the top of the stairs. Behind her, a small face pressed against the glass. Jayden. Nine now. He sees you and his whole face lights up, and he mouths something.

*Cold man.*

NURSE: We\'re just trying to talk to Mrs. Torres about her grandson. He\'s on our list. It\'s nothing scary. He was near Broad Street that night, and we\'d like to get him checked out. Free of charge. There\'s a stipend. We have a car right here.

She nods at the white SUV.

The man in the driver\'s seat doesn\'t move.

INSPECTOR: *(reading off the clipboard, not looking up)* It\'s voluntary. Totally voluntary. I\'m just here for the, ah, the address verification.

${g.f('travel1') === 'slip' ? 'You\'re alone on the stoop. Jules is ten minutes out.' : 'Jules is beside you, very still. Her hands are cold. You can feel the luck in her like static before a storm.'}`,
    choices: [
      { text: 'Go past them, up the stairs. Ask Carmen what *she* wants. Then stand next to her while she says it.', tag: 'Ask Carmen',
        fx: g => { g.flag('wellness1', 'carmen'); g.bond('carmen', { trust: 2, respect: 1 }); g.hidden('revenant_drift', -1); }, go: 'a3_carmen_says' },
      { text: '"I\'m her grandson\'s friend. He\'s not going anywhere today." Talk them off the stoop.', tag: 'Talk', if: g => g.f('travel1') === 'slip',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Talk the Registry off the stoop',
          on: { strong: 'a3_talk', weak: 'a3_talk_weak', miss: 'a3_talk_miss' } },
        fx: g => { g.flag('wellness1', 'talk'); } },
      { text: '"I\'m her grandson\'s friend. He\'s not going anywhere today." Talk them off the stoop.', tag: 'Talk', if: g => g.f('travel1') !== 'slip',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Talk the Registry off the stoop', near: ['jules'],
          on: { strong: 'a3_talk', weak: 'a3_talk_weak', miss: 'a3_talk_miss' } },
        fx: g => { g.flag('wellness1', 'talk'); } },
      { text: 'Call Mikey. A cop on the stoop, asking to see the warrant they don\'t have.', tag: 'Mikey',
        fx: g => { g.flag('wellness1', 'mikey'); g.bond('mikey', { trust: 1 }); g.know('registry', ['mikey']); }, go: 'a3_mikey' },
      { text: 'Slip. The clipboard. Whatever list that man is reading from, read it too. Then put it back.', tag: 'The clipboard', slip: true,
        fx: g => { g.flag('wellness1', 'clipboard'); g.hidden('halcyon_heat', 1); g.hidden('revenant_drift', 0.5); }, go: 'a3_clipboard' }
    ]
  },

  a3_carmen_says: {
    loc: 'NORTH 15TH STREET · THE STAIRS',
    enter: g => { g.know('carmen_no1', ['sam', 'carmen', 'jayden'], 'Carmen Torres told the Registry no, on her own stoop, in front of the block. The nurse left a pamphlet. The man in the SUV photographed Sam.'); g.hidden('halcyon_heat', 1); },
    text: `sam: Excuse me.

You go past them, up the narrow stairs, and kneel on the top step next to Carmen\'s stair chair.

sam: What do you want, Carmen?

She looks at you like nobody has asked her that in a year. Maybe nobody has. Since the bus. Since her hip.

carmen: I want them to go away. I want to watch my novela. I want my grandson to stop being cold.

sam: Okay. Which one first?

She laughs, a little, surprised.

carmen: Go away. First go away.

sam: Then tell them. I\'ll be right here.

She takes a breath. She presses the button on the stair chair and rides it all the way down, slowly, with the motor whining, *eeeeeeee*, while two nurses and a city inspector and three neighbors with phones wait for her, and nobody says anything, because there\'s nothing to say to an old woman coming down a staircase on a machine.

At the bottom, she stands. With the cane. She\'s not tall.

carmen: No.

NURSE: Mrs. Torres, I really think—

carmen: *No.* In English, so you understand. *No.* Not today, not in your car. You leave me your paper. If I want, I call you. That\'s what voluntary means. My grandson\'s friend is a college boy, he looked it up.

On the stoop across the street, an old man in a Phillies cap yells, *¡Eso, Carmen!* A woman in a housecoat yells it too. The kid with the hose, very casually, turns it on the SUV\'s tires.

The older nurse looks at the clapping neighbors, and at Carmen, and her face does something complicated. She sets a pamphlet on the step. *YOU ARE NOT ALONE.*

NURSE: The number\'s on the back. Any time. I mean that.

They go. The inspector first, fast. The nurses after.

As the SUV pulls out, the tinted rear window slides down two inches. A phone camera. Pointed up the stairs.

At you.

Then the window goes up, and the SUV turns onto Lehigh, and is gone.`,
    next: 'a3_jayden'
  },

  a3_talk: {
    loc: 'NORTH 15TH STREET · THE STOOP',
    enter: g => { g.flag('talk_s3e1', 'strong'); g.bond('carmen', { trust: 1 }); },
    text: `sam: I\'m a friend of the family. Jayden\'s not going anywhere today. I know you mean well, ma\'am. I can tell you do. But you\'re three strangers with a car on an old lady\'s stoop on a Sunday, and the whole block is filming you.

You nod at the neighbors. The nurse looks. She actually looks, for the first time, at the three phones.

sam: Voluntary means she calls you. Leave her a pamphlet. She\'ll call you if she wants to. That\'s what voluntary means. Right?

INSPECTOR: *(relieved, to the nurse)* He\'s right. That\'s what it says on my sheet. *Do not insist.*

The older nurse sighs. Not at you. At something else. At whoever wrote her script.

NURSE: You\'re right. You\'re right. I\'m sorry. *(to the window, louder)* Mrs. Torres! We\'re leaving you a pamphlet! You call us any time!

She sets it on the step. *YOU ARE NOT ALONE.*

They go. The white SUV pulls out last. As it passes, the driver turns his head and looks at you through the tint, a long, flat look, and you get the feeling he\'s memorizing the shape of your face.`,
    next: 'a3_jayden'
  },

  a3_talk_weak: {
    loc: 'NORTH 15TH STREET · THE STOOP',
    enter: g => { g.flag('talk_s3e1', 'weak'); g.hidden('halcyon_heat', 1); },
    text: `sam: I\'m a friend of the family. Jayden\'s not going anywhere today.

NURSE: And you are?

sam: A friend.

NURSE: Does the friend have a name?

You give her a name. It isn\'t yours. She writes it down anyway, on the tablet, and you know from the way she does it that it doesn\'t matter what name you gave her; she\'s already got your face.

NURSE: All right. We\'ll leave her a pamphlet. We\'ll come back another day. *(she smiles)* We have a lot of days.

They go. The SUV pulls out last.`,
    next: 'a3_jayden'
  },

  a3_talk_miss: {
    loc: 'NORTH 15TH STREET · THE STOOP',
    enter: g => { g.flag('talk_s3e1', 'miss'); g.flag('dhs_threat1'); g.hidden('halcyon_heat', 1); g.know('dhs_threat1', ['sam', 'carmen'], 'The city inspector, rattled, said he would have to "make a note" that a nine-year-old with documented symptoms was being kept from care. A referral to DHS. Child services.'); },
    text: `sam: He\'s not going anywhere today. You can\'t just come to people\'s houses and—

INSPECTOR: Sir. Sir. Please lower your voice.

You didn\'t know it was raised. It was.

The inspector looks at the neighbors\' phones, and at you, and at the clipboard, and something in him decides to protect himself.

INSPECTOR: Look. If the guardian is refusing care for a minor with documented symptoms, I have to make a note. That\'s all. A note. It goes to DHS. Standard. I don\'t make the rules.

Upstairs, through the window, Carmen\'s face goes white.

DHS. Children and Youth. The people who take kids.

NURSE: *(quietly, to him)* Gary.

INSPECTOR: It\'s *policy*, Linda.

They go. The SUV pulls out last. You stand on the stoop with your fists shaking, and the kid with the hose has stopped spraying, and you understand that you just made it worse.`,
    next: 'a3_jayden'
  },

  a3_mikey: {
    loc: 'NORTH 15TH STREET · THE STOOP',
    clock: { time: '3:30 PM' },
    enter: g => { g.know('mikey_registry1', ['sam', 'mikey'], 'Mikey, off duty, on Carmen\'s stoop: the Registry had no warrant, no court order, nothing but a letter. "They\'re gonna start bringing cops, Sammy. Real ones. That\'s next."'); },
    text: g => `You call Mikey. He picks up on the first ring.

mikey: Sammy. Happy— you know. The thing. You okay?

You tell him. He says *stay there*, and *don\'t do nothing*, and *twenty minutes*, and he\'s there in fourteen, in a Phillies T-shirt and basketball shorts, off duty, with his badge on a chain around his neck, which you\'ve never seen him wear before and suspect he did for effect.

mikey: Afternoon. Officer Kearney, 3rd District. This your vehicle?

The SUV doesn\'t answer.

mikey: *(to the nurses, friendly, cop-friendly, which is a different kind)* Do we have a court order today, folks? A warrant? A DHS case number?

NURSE: It\'s voluntary, Officer. We\'re just—

mikey: Voluntary. Great. Love voluntary. Then you got your answer, \'cause she volunteered *no*. Leave her a pamphlet. Have a great Sunday.

They go. The SUV last. As it passes, Mikey looks right through the tinted window and smiles and writes down the plate on his forearm with a Sharpie, slowly, so the driver can watch him do it.

Then he stands on the sidewalk with his hands on his hips and watches the corner long after it\'s gone.

mikey: They had a city inspector, Sammy. A real one. From L&I or Health or whatever. They\'re not hiding anymore.

mikey: Today it\'s nurses. Next it\'s cops. Real ones. Mine. That\'s next. You watch.`,
    next: 'a3_jayden'
  },

  a3_clipboard: {
    loc: 'NORTH 15TH STREET · BETWEEN',
    enter: g => { if (g.unsticks()) g.unstick('unstick_s3e1b', 'Time debt (15th Street)'); g.flag('saw_route1'); g.know('route1', ['sam'], 'The Registry inspector\'s route sheet for Aug 22: nine addresses in North and South Philly. Jayden Torres was the fourth. Further down: KOWAL, B. (Port Richmond) and RAMOS, H. (Kensington). At the bottom, typed: "Recovery to accompany. Do not insist. Photograph contacts."'); },
    text: g => `You step through.

${g.unsticks() ? 'The cold grabs.' : 'The pool. Still. It lets you.'}

North 15th Street, stopped. The arc of water from the kid\'s hose, hanging in the air like glass beads. A pigeon on a wire. The neighbors\' phones, held up, their screens frozen on you, or on where you were.

You take the clipboard out of the inspector\'s sweaty hand.

A route sheet. Today\'s date. *OUTREACH · DAY 1.* Nine addresses. North Philly. Kensington. Port Richmond. South Philly. A name next to each, and an age, and a column headed *ES*.

TORRES, J. (9). 15th St. ES-29. Fourth on the list.

You keep reading.

KOWAL, B. (19). Port Richmond.

RAMOS, H. (24). Kensington.

And at the very bottom, typed, under the route:

*Recovery to accompany. Do not insist. Photograph contacts.*

Photograph contacts.

You look at the SUV. At the tinted window. You can\'t see through it, even stopped.

You put the clipboard back in his hand exactly the way it was, his thumb on the clip. You step back to where you were.

You step out.

Nothing changes. The nurse is still smiling. The inspector is still sweating. Nobody saw anything, except three neighbors whose phones are now showing, for one frame, a boy-shaped smear on the stoop.

${g.f('travel1') === 'slip' ? 'And you\'re still alone on this stoop.' : 'Beside you, Jules looks at you sideways. She felt it. She always feels it now.'}`,
    choices: [
      { text: 'Now ask Carmen what she wants. Then stand next to her.', tag: 'Ask Carmen',
        fx: g => { g.bond('carmen', { trust: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_carmen_says' },
      { text: 'Text Bree. Right now. *They\'re coming to you today. Tell Heck.*', tag: 'Warn Bree and Heck',
        fx: g => { g.flag('warned_crew1'); g.bond('bree', { trust: 2 }); g.bond('heck', { trust: 2 }); g.know('warned_crew1', ['sam', 'bree', 'heck'], 'On the anniversary, Sam texted Bree and Heck that Registry outreach was coming to their doors that day.'); }, go: 'a3_carmen_says' }
    ]
  },

  /* ---------------- Jayden ---------------- */
  a3_jayden: {
    loc: 'NORTH 15TH STREET · CARMEN\'S LIVING ROOM',
    clock: { time: '4:00 PM' },
    enter: g => { g.know('jayden_tonight1', ['sam', 'jayden', 'carmen'], 'Jayden, on the anniversary: "It\'s gonna get cold tonight. Everywhere. At the time."'); g.bond('jayden', { trust: 1, affection: 1 }); },
    text: g => `Carmen\'s living room is the same as every abuela\'s living room in Philadelphia: plastic on the good couch, a San Judas Tadeo candle, a TV the size of a garage door, and a hundred photos of one boy.

${g.f('travel1') === 'slip' ? 'Jules gets there ten minutes behind you, out of breath, and takes one look at you and doesn\'t ask.\n\n' : ''}Jayden is nine now. He\'s grown two inches and lost both front teeth and he is wearing, of course, ${g.f('hero_name') === 'secondhand' ? 'a red SECOND HAND T-shirt' : 'one of the T-shirts'}.

He walks right up to you and looks up.

jayden: You\'re him.

sam: I\'m who?

jayden: *(patiently, like you\'re slow)* You\'re the cold man. And you\'re ${g.f('hero_name') === 'secondhand' ? 'Second Hand' : g.f('hero_name') === 'wawa' ? 'Wawa' : g.f('hero_name') === 'blur' ? 'the Blur' : 'Saint Sonic'}. You\'re both. I knew it at the bus. When you were in the cold, I could feel you. Like a fan. Like a fan blowing on me.

Carmen crosses herself.

jayden: I can feel it before it comes now. The cold. Like when you know it\'s gonna rain.

He looks at the window. At the sky over 15th Street, blue, hot, normal.

jayden: It\'s gonna get cold tonight. Everywhere. At the time.

sam: What time?

jayden: You know what time.

Carmen sits down on the plastic-covered couch, slowly, with her cane between her knees. She has the pamphlet in her lap. *YOU ARE NOT ALONE.* She turns it over and over.

carmen: Five hundred dollars, Sam.

She doesn\'t look up.

carmen: Five hundred dollars and free doctors. I get eleven hundred a month. The hip took everything. Every month I choose: the light bill or my pills. They said *five hundred dollars*. They said *free*. Maybe I\'m a stupid old woman. Maybe I should call them.`,
    choices: [
      { text: 'Tell her the truth. The beds. The numbers on whiteboards. The man in the SUV. What *free* means.', tag: 'The truth',
        fx: g => { g.flag('carmen1', 'truth'); g.bond('carmen', { trust: 2 }); g.know('carmen_truth1', ['sam', 'carmen'], 'Sam told Carmen what the Registry really is: Halcyon\'s beds, the ES numbers, the people who were taken.'); }, go: 'a3_carmen_end' },
      { text: 'Give her what\'s in your wallet. Two hundred dollars. It isn\'t five hundred. It isn\'t nothing.', tag: 'The money',
        fx: g => { g.flag('carmen1', 'money'); g.money(-200); g.bond('carmen', { affection: 2, trust: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a3_carmen_end' },
      { text: '"It\'s your choice, Carmen. Whatever you pick, I\'ll help. I\'ll be there." And mean it.', tag: 'Her choice',
        fx: g => { g.flag('carmen1', 'choice'); g.bond('carmen', { respect: 2, trust: 1 }); g.hidden('revenant_drift', -1); }, go: 'a3_carmen_end' }
    ]
  },

  a3_carmen_end: {
    loc: 'NORTH 15TH STREET · CARMEN\'S LIVING ROOM',
    text: g => `${g.f('carmen1') === 'truth' ? `You tell her. Not all of it. Enough. The eighth floor of a building at the Navy Yard. Beds in rows. Numbers on whiteboards. People asleep for months. A man named Teddy, who didn\'t come home.

Carmen listens to all of it with her hand over her mouth.

When you\'re done, she gets up, slowly, with the cane, and goes into the kitchen. You hear the stove click on. When she comes back, she has the pamphlet, black and curling at the corners.

She drops it in the San Judas candle and watches it burn.

carmen: *Free.*` : g.f('carmen1') === 'money' ? `You take out your wallet. Two hundred, in twenties, from a summer of deliveries. You put it on the coffee table next to the pamphlet.

carmen: No. No, Sam. Absolutely no.

sam: For the light bill. So you don\'t have to pick.

She looks at the money for a long time.

carmen: You\'re a good boy. Your mother raised a good boy. *(she doesn\'t pick it up, but she doesn\'t give it back either)* You can\'t pay for everybody, mijo. There\'s sixty-one of them. You can\'t pay for all sixty-one.

She puts the pamphlet in a drawer. Not the trash. A drawer.` : `sam: It\'s your choice, Carmen. I mean that. Whatever you pick, I\'ll help. If you go, I\'ll go with you and sit in the waiting room. If you don\'t, I\'ll be on your stoop next time they come.

She looks at you for a long time.

carmen: Everybody tells me what to do since the hip. The doctors, the lady from Medicaid, my sister in Bayamón on the phone. Everybody has an opinion. Nobody has to live in my house.

She puts the pamphlet on top of the TV, under San Judas. Not the trash. Not the phone.

carmen: I\'ll think. *(she pats your hand)* I\'m allowed to think.`}

Jayden is at the window again, with his forehead on the glass.

jayden: Tonight. At the time. You\'ll be there, right? Where the bus was?

You hadn\'t decided until right now.

sam: Yeah, bud. I\'ll be there.`,
    next: 'a4_corner'
  }
});
