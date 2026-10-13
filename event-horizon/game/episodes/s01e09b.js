/* S1 · E9 · THINGS THAT DON\'T ADD UP, part 2 of 3: Act Two ("Midterms"). */
EH.scenes('s01e09', {

  /* ================= ACT TWO: MIDTERMS ================= */
  a2_door: {
    card: { kind: 'act', label: 'Act Two', title: 'Midterms' },
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Mon', date: 'Nov 2', time: '7:20 PM' },
    text: g => `Facilities painted your door while you were in South Philly.

One coat, white, the cheap kind. The tape is gone, and the carpet in front of it has been shampooed and smells like a rental car. A flyer is taped to the wall beside it: *TEMPLE CARES · Counseling Services · Walk-ins welcome*, with a stock photo of two people smiling on a bench.

If you stand to the left and the hallway light hits the door sideways, you can still see them under the paint. Ten faint lines, curving down.

You stand there. Then you go in.

Nik is sitting on his bed with his laptop and doesn\'t pretend he wasn\'t waiting. He\'s wearing his Rutgers hoodie, which he never wears, because he says it\'s "for home."

nik: Hey.

sam: Hey.

nik: You eat? You ate. Your mom fed you. I can tell. You have pastina energy.

He closes the laptop. He opens it again. He turns it around so you can see the screen.

It\'s an email. **Rutgers University–New Brunswick · Office of Undergraduate Admissions.** *Your transfer application for Spring 2027 has been withdrawn at your request.*

sam: You were transferring?

nik: I *was going* to. Since September. Since about the third week. Closer to home, my mom wanted it, my dad wanted it, the CS program\'s ranked higher, I had the essay done. It was a good essay. It was about *resilience*. I was going to hit submit November first. That was the plan.

He looks at the screen.

nik: Then November first happened.

nik: I withdrew it this morning. Not for you. Okay, for you. A little bit for you. Mostly because if I\'m in New Brunswick, and you\'re here, and something happens, then I\'m the guy who wasn\'t here. And I already— Saturday night I was in the lounge eating a Twix while he—

He stops. Breathes in for four. Out for four.

nik: I\'m not doing that again. That\'s all. I\'m not going to be the guy who wasn\'t here.`,
    choices: [
      { text: '"Nik. You should go. Go home. It\'s safer in Jersey."', tag: 'Go home',
        fx: g => { g.flag('nik9', 'go'); g.bond('nik', { respect: 1, tension: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a2_nik_go' },
      { text: '"Thank you." Just that. Mean it.', tag: 'Thank him',
        fx: g => { g.flag('nik9', 'thanks'); g.bond('nik', { trust: 1, affection: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_nik_thanks' },
      { text: '"Rutgers? You\'d have hated Rutgers. They have a *grease truck*."', tag: 'Joke',
        fx: g => { g.flag('nik9', 'joke'); g.bond('nik', { affection: 1 }); }, go: 'a2_nik_joke' }
    ]
  },
  a2_nik_go: {
    enter: g => { g.know('nik_rutgers', ['sam', 'nik'], 'Nik was going to transfer to Rutgers in the spring. He withdrew the application on November 2, so he wouldn\'t be "the guy who wasn\'t here."'); },
    text: `sam: Nik. Go home. Resubmit it. It\'s safer in Jersey. Everybody\'s safer if they\'re not near me.

Nik looks at you like you slapped him.

nik: Wow. Okay. Wow.

sam: I\'m serious.

nik: I *know* you\'re serious, that\'s what\'s so insulting about it. You think I don\'t know it\'s safer in Jersey? Everything is safer in Jersey. Jersey is ninety percent mall.

He shuts the laptop.

nik: You don\'t get to decide that for me, Salvatore. That\'s the whole thing with you. You think you get to decide that for everybody.

He picks up his headphones. He doesn\'t put them on. He holds them.

nik: I withdrew it. It\'s withdrawn. Deal with it.`,
    next: 'a2_knock'
  },
  a2_nik_thanks: {
    enter: g => { g.know('nik_rutgers', ['sam', 'nik'], 'Nik was going to transfer to Rutgers in the spring. He withdrew the application on November 2, so he wouldn\'t be "the guy who wasn\'t here."'); },
    text: `sam: Thank you.

That\'s all. You don\'t make it a joke. You don\'t make it a speech.

Nik opens his mouth to make it a joke for you, and then he doesn\'t. He nods. He looks down at his hands. His ears go red.

nik: Yeah. Okay. Yeah.

He takes off the Rutgers hoodie and throws it in the bottom of his closet, and under it he\'s wearing a Temple T-shirt with the tag still on it.

nik: I bought this this morning. At the bookstore. Forty dollars. For a T-shirt. Don\'t say anything.

You don\'t say anything.`,
    next: 'a2_knock'
  },
  a2_nik_joke: {
    enter: g => { g.know('nik_rutgers', ['sam', 'nik'], 'Nik was going to transfer to Rutgers in the spring. He withdrew the application on November 2, so he wouldn\'t be "the guy who wasn\'t here."'); },
    text: `sam: Rutgers? You\'d have hated Rutgers. They have a *grease truck*. They put mozzarella sticks *on* the cheesesteak.

nik: That\'s a *fat sandwich*, and it\'s a New Jersey cultural treasure, and I\'ve had four.

sam: You\'d have been miserable.

nik: I\'d have been *fine*. I\'d have been *fat*.

He\'s laughing. It\'s the first time since Saturday. He covers his face with both hands and laughs into them, and after a while it isn\'t exactly laughing anymore, and you sit on the end of his bed until it\'s laughing again.`,
    next: 'a2_knock'
  },

  a2_knock: {
    night: true,
    clock: { time: '9:40 PM' },
    text: g => `At 9:40, somebody knocks. Three times, evenly spaced. A metronome with manners.

Nik is already standing up.

nik: I\'m gonna go be in the lounge. Very far away. With headphones. Noise-cancelling. *Expensive* ones.

He opens the door. Jules is standing there in a Penn sweatshirt and sweatpants, with her hair down, without her armor on. Nik edges past her sideways, the way you\'d edge past a nervous horse.

nik: Hi, Jules. Bye, Jules.

He\'s gone. Jules stands in the doorway. Her eyes go, once, to the painted door, to the left side of it, where the light from the hall comes in sideways. She sees them. You watch her see them.

She comes in and closes the door.

jules: I did it. Yesterday. At the boathouse.

sam: I know. You texted.

jules: I texted *are you asleep*. That\'s not the same.

She sits down on Nik\'s desk chair, on the edge of it, like she might have to get up fast.

jules: He said he\'d have waited. For whatever it was. He meant it. That\'s the worst part. He meant every word.

sam: He\'s a good guy.

jules: He\'s a *wonderful* guy. Somebody\'s going to be very happy with him.

She looks at her hands.

jules: I haven\'t slept. I keep lying down and seeing your door. Not him. The *door*. The marks. I didn\'t even see him, Sam, the first time I saw him he was already— and I keep thinking—

She stops herself. She\'s good at stopping herself.

jules: I keep thinking things should have gone differently. Things go my way. They always have. All my life, they go my way. Except the one time it mattered.

She looks up at you.

jules: I don\'t know why I\'m here. I don\'t know what I\'m asking for.`,
    choices: [
      { text: '"Stay. I haven\'t slept either. Just stay."', tag: 'Stay',
        fx: g => { g.flag('jules9', 'stay'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_jules_stay' },
      { text: '"I can\'t. Not yet. Every time I close my eyes I see the door."', tag: 'Not yet',
        fx: g => { g.flag('jules9', 'notyet'); g.bond('jules', { respect: 1 }); }, go: 'a2_jules_notyet' },
      { text: 'Don\'t talk. Cross the room. Kiss her.', tag: 'Kiss her',
        fx: g => { g.flag('jules9', 'kiss'); g.bond('jules', { affection: 1 }); }, go: 'a2_jules_kiss' }
    ]
  },
  a2_jules_stay: {
    night: true,
    enter: g => { g.sleep(8); g.know('jules_light', ['sam', 'jules'], 'Jules sleeps with a light on. She asked you to leave the desk lamp on. You didn\'t ask why.'); },
    text: `sam: Stay. I haven\'t slept either. Just stay.

She looks at you. Then at your bed, which is a Temple-issue extra-long twin with a Phillies blanket on it that Gigi picked out.

jules: That bed is a war crime.

sam: It\'s a great bed.

jules: It\'s thirty-six inches wide, Kearney. I measured mine.

But she gets up. She takes off her sneakers and lines them up by the door, side by side, toes even. She gets into your bed in her sweatshirt and sweatpants and turns to face the wall, and after a second, you get in behind her, in your clothes, on top of the blanket, because neither of you knows the rules for this.

You reach for the desk lamp.

jules: Leave it on.

You leave it on. You don\'t ask. She lets out a breath you didn\'t know she was holding.

jules: Thank you for not asking.

sam: I\'ll ask some other time.

jules: I know you will.

You lie there. After a while she reaches back without turning around and finds your hand and pulls your arm over her, and holds it against her stomach with both of hers, the way she held your arm in the lounge on Saturday night, like a door she\'s holding shut.

Her hands are cold. Yours are colder. Neither of you says anything about it.

Some time after midnight, in the dark, with her back against your chest, she says, very quietly, into the pillow:

jules: I\'m glad it was you. On the roof. I\'m not glad about anything else. But I\'m glad about that.

You don\'t answer. You don\'t have to. She\'s already asleep.

You sleep eight hours. You don\'t dream about the door.`,
    next: 'a2_vigil'
  },
  a2_jules_notyet: {
    night: true,
    enter: g => { g.sleep(4); },
    text: `sam: I can\'t. Not yet. Every time I close my eyes, I see the door. And if you\'re here, I\'m going to see you too, and I\'m going to think about the roof, and I—

You stop.

sam: It\'s not you. It\'s that I didn\'t look.

She nods slowly. She doesn\'t argue. You\'ve never seen Jules Pemberton not argue.

jules: Okay.

She stands up. At the door, with her hand on the knob, she stops.

jules: I\'ll be across the hall. Nine-eleven. I\'m good at waiting.

She thinks about it.

jules: I\'m not, actually. I\'m terrible at it. I\'ve never had to do it once in my life. I\'ll learn.

She goes. The door closes, and through it you hear hers open and close, across the hall, and the hall light go off under your door.

You lie on your bed with the lights off. You sleep four hours. You dream the fingertip marks are on the *inside* of the door, and you\'re the one making them.`,
    next: 'a2_vigil'
  },
  a2_jules_kiss: {
    night: true,
    enter: g => { g.sleep(7); g.know('jules_light', ['sam', 'jules'], 'Jules sleeps with a light on. She asked you to leave the desk lamp on. You didn\'t ask why.'); },
    text: `You don\'t say anything. You cross the room, and she stands up off Nik\'s chair to meet you, and you kiss her.

It\'s not like the roof. On the roof it was the start of something. This is two people holding on in the dark. It\'s hard, almost angry, her hands fisted in your shirt and yours in her hair, and she makes a sound against your mouth that you feel all the way down. She walks you backward until your legs hit the bed, and you sit, and she\'s in your lap, her knees on either side of you on the Phillies blanket, and her sweatshirt is half off one shoulder and your mouth is on her collarbone and she\'s breathing *Sam*, *Sam*, like it\'s the only word she knows.

Then she stops.

She puts her forehead against yours, and she\'s shaking, and she says:

jules: Not tonight.

sam: Yeah.

jules: Not because I don\'t want to. I want to so much it\'s embarrassing. It\'s *undignified*.

sam: I know.

jules: Because when it happens, I want you in the room. You\'re not in the room yet. You\'re still on the roof. I can see it.

She\'s right. You don\'t know how she can see it. She\'s right.

She doesn\'t leave. She climbs off you and gets under the blanket on the wall side, in her sweatpants and her half-off sweatshirt, and when you reach for the desk lamp she says *leave it on*, and you leave it on, and you don\'t ask.

You get in behind her. She pulls your arm over her and holds it with both hands.

You sleep seven hours.`,
    next: 'a2_vigil'
  },

  /* ---------- Tuesday: the vigil ---------- */
  a2_vigil: {
    night: true,
    loc: 'THE BELL TOWER · LIACOURAS WALK',
    clock: { day: 'Tue', date: 'Nov 3', time: '7:00 PM' },
    text: g => `Tuesday is Election Day. You forgot. Everybody on Liacouras Walk has an *I VOTED* sticker on their coat, and there\'s a table outside the student center where a girl with a clipboard is still yelling *polls are open till eight!* at people who already voted.

Femi\'s vigil is at seven, at the Bell Tower. It was in the TempleToday email, at the bottom, under a reminder about flu shots.

Twelve people come.

You, and Nik in his new Temple shirt under his coat, and Simone, and Grace, and Jules. A professor you don\'t know. Two guys from the Charles Library circulation desk who keep saying *he was so quiet* to each other, like it\'s a compliment. A campus minister with a guitar she doesn\'t play. A woman in her late twenties in navy scrubs under a parka, holding a phone up in front of her with both hands.

And in front of the Bell Tower, on an easel, flowers. White lilies, white roses, white orchids, five feet tall. A card in a little plastic fork:

*In loving memory of a valued study participant. With deepest sympathy, Halcyon Dynamics.*

Grace looks at it, and walks over, and turns the card around so it faces the Bell Tower.

The woman in scrubs speaks first. Her voice is steady the whole way through, the way a nurse\'s voice is steady.

FEMI\'S SISTER: My name is Tolu. I\'m Femi\'s sister. Our mother is on the phone with us from Lagos. It\'s one in the morning there. She wanted to see who came.

She turns the phone around. On the screen, a woman in a head wrap, in a dark room lit by a lamp, looks out at twelve people in the cold. She doesn\'t say anything. She puts her hand over her mouth.

FEMI\'S SISTER: Thank you for coming. He would be very confused that you\'re here. He didn\'t think anybody at this school knew his name.

She says a few more things. That he was the smart one. That he came to her apartment in Southwest every Sunday for dinner and ate everything and washed every dish. That their mother would call and ask *where is Femi* while he was sitting right there at the table, and he would wave at the phone, and laugh, and it was a joke, and then it wasn\'t a joke.

Afterward, while the campus minister is talking, Tolu walks through the twelve people, and stops in front of you.

FEMI\'S SISTER: You\'re Sam. Kearney.

sam: Yeah.

FEMI\'S SISTER: He talked about you. Every Sunday since August. *There\'s a guy in my Calc section who can see me.* He said it like he\'d found a twenty on the street.

She reaches into her parka and takes out a spiral notebook, green, with a coffee ring on the cover. In Femi\'s small neat handwriting: **CALC 1041 · NOTES FOR SAM K. (he never comes to recitation)**.

FEMI\'S SISTER: It was at my place. It has your name on it.

You take it. Your hands aren\'t working right. You hold it against your chest.

FEMI\'S SISTER: A man came to my apartment yesterday. Nice coat. Kind face. He brought papers and a check. Two hundred fifty thousand dollars. He said *regrettable* four times. If I sign, I never talk about the study. To anybody. Ever.

She looks at the lilies.

FEMI\'S SISTER: My mother\'s roof leaks. She\'s sixty-eight. I make sixty-one thousand a year at Jefferson.

She looks back at you.

FEMI\'S SISTER: You were his friend. The only one. So I\'m asking you. Was it an accident?`,
    choices: [
      { text: '"No. It wasn\'t an accident."', tag: 'The truth',
        fx: g => { g.flag('tolu9', 'truth'); g.hidden('halcyon_heat', 1); g.know('tolu_truth', ['sam', 'tolu'], 'You told Femi\'s sister, Tolu, that it wasn\'t an accident.'); }, go: 'a2_tolu_truth' },
      { text: '"Sign it. Take the money. Fix your mother\'s roof. Don\'t give them a reason to come back."', tag: 'Sign it',
        fx: g => { g.flag('tolu9', 'sign'); g.hidden('revenant_drift', -0.5); }, go: 'a2_tolu_sign' },
      { text: '"I don\'t know." You know.', tag: 'Dodge',
        fx: g => { g.flag('tolu9', 'dodge'); }, go: 'a2_tolu_dodge' }
    ]
  },
  a2_tolu_truth: {
    night: true,
    text: `sam: No. It wasn\'t an accident.

She doesn\'t flinch. She nods, once, like a nurse taking a pulse and getting the number she expected.

FEMI\'S SISTER: I know. I\'m a nurse. They let me see him at the ME\'s office. I saw his hip.

Her jaw works.

FEMI\'S SISTER: Three. You don\'t do three.

sam: Grace said that too.

FEMI\'S SISTER: Your Grace is right.

She puts the phone in her pocket. Her mother\'s face goes dark against her parka.

FEMI\'S SISTER: I\'m not signing. My mother\'s roof can leak.

She looks at the Halcyon lilies, five feet tall and white, and then she walks over, and very calmly, without any hurry at all, tips the easel over backward into the hedge.

Nobody stops her. The campus minister keeps talking. Grace, beside you, makes a small satisfied sound.`,
    next: 'a2_phone'
  },
  a2_tolu_sign: {
    night: true,
    text: `sam: Sign it. Take the money. Fix your mother\'s roof.

She looks at you.

sam: They came to your apartment once. Don\'t give them a reason to come back.

It\'s quiet for a while. The campus minister is talking about light.

FEMI\'S SISTER: That\'s an answer.

sam: It\'s the only one I\'ve got that doesn\'t get you hurt.

FEMI\'S SISTER: He said you\'d be like this. *Sam would carry the whole building if you let him.*

She puts the phone away. Her mother\'s face goes dark against her parka.

FEMI\'S SISTER: I\'ll think about it.

She walks back to the front. She doesn\'t look at the lilies again.`,
    next: 'a2_phone'
  },
  a2_tolu_dodge: {
    night: true,
    text: `sam: I don\'t know.

She looks at you for a long moment. Then she almost smiles. It\'s Femi\'s almost-smile, the one that only used one side of his mouth.

FEMI\'S SISTER: You\'re a bad liar. He said you would be.

She puts the phone away. Her mother\'s face goes dark against her parka.

FEMI\'S SISTER: That\'s all right. You gave me an answer anyway.`,
    next: 'a2_phone'
  },

  a2_phone: {
    night: true,
    loc: 'CARDONE HALL · ROOF',
    clock: { time: '11:09 PM' },
    enter: g => { g.know('femi_phone_read', ['sam'], 'On the night of the vigil, you texted Femi\'s phone. At 11:14 p.m., it said Read. Someone has it.'); },
    text: `Later, on the roof, by yourself, you open your messages and scroll down to his name.

The last thing in the thread is his. 11:51 p.m. *im on 9. im at your door. please be home*

You type.

TXT sam: i\'m sorry
TXT sam: i didn\'t look
TXT sam: your sister gave me the notebook. i\'m gonna come to recitation. i swear to god

*Delivered.*

You stand there in the cold with the phone in your hand. You don\'t know what you\'re waiting for.

At 11:14, under your last message, the gray word changes.

*Read 11:14 PM*

Your whole body goes still.

Then, at the bottom of the thread, the three dots. Somebody typing.

The dots pulse. Pulse. Pulse.

They stop. They don\'t come back.

You don\'t sleep much.`,
    next: 'a2_hub'
  },

  /* ---------- Wednesday hub ---------- */
  a2_hub: {
    loc: 'WEDNESDAY · NOVEMBER 4',
    clock: { day: 'Wed', date: 'Nov 4', time: '9:00 AM' },
    enter: g => { g.sleep(5); },
    text: `The Psych midterm is tomorrow at ten. Weisz\'s paper is due Friday. You have Wednesday.

You have time for two things.`,
    hub: {
      slots: 2, label: 'Wednesday',
      blurb: 'Psych midterm tomorrow at ten.',
      options: [
        { id: 'hub_study', text: 'Study for Psych at Charles Library. Third floor. The quiet section where Femi used to sit.', cost: 1, tag: 'Study', go: 'a2_study' },
        { id: 'hub_weisz', text: 'Dr. Weisz\'s office hours. Ask for an extension on the paper. You haven\'t written a word.', cost: 1, tag: 'Weisz', go: 'a2_weisz' },
        { id: 'hub_vinnie', text: 'Call Vinnie. He works the Halcyon build-out at the Navy Yard. Ask him about Building 7.', cost: 1, tag: 'Vinnie', go: 'a2_vinnie' },
        { id: 'hub_grace', text: 'Grace hasn\'t come out of the RA room since Sunday. Knock.', cost: 1, tag: 'Grace', go: 'a2_grace' },
        { id: 'hub_ciro', text: 'Work a lunch shift at Ciro\'s. You need the money. You need to be somewhere that isn\'t here.', cost: 1, tag: 'Ciro\'s', go: 'a2_ciro' },
        { id: 'hub_nap', text: 'Sleep. Just sleep.', cost: 1, tag: 'Rest', go: 'a2_nap' }
      ],
      done: 'a2_midterm'
    }
  },

  a2_study: {
    enter: g => { g.flag('psy_study'); },
    text: `The third floor of Charles Library is all glass and blond wood and silence, and the carrel by the window in the northwest corner has a sticky note on the side of the desk that nobody has taken down. Small neat handwriting: *THIS CARREL IS TAKEN · F.O.*

You sit at the next one over.

You study. You actually study, four hours, the textbook and the slides and the practice exam, and somewhere in the middle of it you open the green notebook, the one that says NOTES FOR SAM K., just to look. It\'s Calc. Every lecture since August, written out clean, with little notes in the margins in a different pen: *Sam this is the part you always get wrong. Chain rule. Outside first.* And: *you do not have to show off on the quiz. just do it right.* And on September 21, by itself at the bottom of the page: *ask him about the nosebleeds?* Crossed out. Not hard. One line.

You close it. You go back to Psych.

At four, a girl from the circulation desk comes by with a cart, and stops at Femi\'s carrel, and looks at the sticky note for a moment.

She doesn\'t take it down. She pushes her cart on.`,
    next: '@hub'
  },

  a2_weisz: {
    enter: g => { g.grade('phl', 2); g.know('weisz_femi', ['sam'], 'Dr. Weisz always marked Femi present. "I see edges, Mr. Kearney." He told you: "Be careful who you let measure you."'); },
    text: `Dr. Weisz\'s office is in Gladfelter Hall. It\'s full of maps. Old ones, framed, of Philadelphia in 1683 and 1796 and 1876, and a big one of the city in 1918 with the streetcar lines in red, and a new one, a satellite photo, pinned to a corkboard with a single red pushpin in it, at Broad and Spring Garden.

He gives you the extension before you finish asking. Then he takes off his glasses and cleans them on his tie.

weisz: Mr. Ojo took this course last spring.

sam: You knew him?

weisz: He sat in the back row, on the aisle. He never spoke. He wrote a very good paper on the 1918 Liberty Loan parade route.

He puts his glasses back on.

weisz: I marked him present every class. I gather I was the only professor at this university who did.

You look at him.

sam: You could see him.

weisz: I see edges, Mr. Kearney. Of things. Of places. It\'s an occupational hazard for a geographer. Some edges are sharp. Some are blurry.

He looks at you over the glasses for a little too long, the way he did on the first day of class.

weisz: His were blurry. Like yours.

You don\'t say anything. He doesn\'t seem to need you to. He turns to the corkboard and looks at the red pushpin.

weisz: There\'s a company in this city that would like very much to measure people like Mr. Ojo. And people like you.

weisz: Be careful who you let measure you.

He turns back around and picks up his pen, and he\'s just a tired professor again.

weisz: Friday the thirteenth, Mr. Kearney. The paper. No later.`,
    next: '@hub'
  },

  a2_vinnie: {
    enter: g => { g.bond('vinnie', { trust: 1, tension: -1 }); g.know('building7', ['sam', 'vinnie'], 'Vinnie: Building 7 at the Navy Yard is the old naval hospital annex. The seventh floor isn\'t on any drawing. The elevator skips it. The stair door on seven has a card reader that isn\'t on any electrical plan.'); g.know('dante_fast_kid', ['sam', 'vinnie'], 'Dante has been asking Vinnie if he knows any fast kids.'); },
    text: `He picks up on the fourth ring. You hear a saw in the background, and wind, and somebody yelling *Vinnie, the light!*

vinnie: Sally. Hold on.

The saw goes quiet. A door. The wind stops.

vinnie: Yo. I heard. On the news. The kid on your floor. You know him?

sam: Yeah. I knew him.

vinnie: Ah, Sally. I\'m sorry.

sam: Vin. Building 7. At the Navy Yard. You know it?

A pause.

vinnie: Why?

sam: Do you know it.

Another pause. Longer.

vinnie: It\'s the old hospital annex, by the dry dock. We did the HVAC in September. Brick, seven floors, new windows, nice. Real nice. Too nice.

vinnie: Here\'s the thing. The drawings we got, the plans, they go one through six, then the roof. No seven. The elevator goes six, then roof. But I counted the windows from the parking lot on my lunch, \'cause I\'m a nosy prick. Seven rows. And there\'s a stair door on seven with a card reader on it that ain\'t on any electrical plan I ever seen, and I seen all of them, \'cause I humped half the conduit in that building up the stairs.

sam: Can you get up there?

vinnie: *No*, I can\'t get up there. Are you out of your mind? There\'s a guy in a polo shirt at the stairwell twenty-four hours a day, and he don\'t eat lunch.

The wind comes back. He\'s outside again.

vinnie: Sally. Listen to me. Dante asked me Tuesday if I knew any fast kids.

sam: What\'d you say?

vinnie: I said I know a lotta slow ones.

He doesn\'t laugh. Neither do you.

vinnie: I seen you, under 95. I seen the cap. I ain\'t said nothing to nobody, and I ain\'t gonna, \'cause that ain\'t who I am. But whatever you\'re in, you\'re in it with the Iannuccis on one side and the polo shirts on the other. And I work for both of \'em.

vinnie: Be smart. For once in your life. Be *smart*.

*Vinnie, the light!*

vinnie: I gotta go.`,
    next: '@hub'
  },

  a2_grace: {
    enter: g => { g.bond('grace', { trust: 1, affection: 1 }); },
    text: `It takes three knocks.

Grace opens the door in a Cheltenham High hoodie, with her MCAT prep book in one hand and her finger holding her place. Her room smells like instant ramen and Febreze. There are index cards all over the floor.

grace: Okay. Come in. Don\'t step on the Krebs cycle.

You sit on her floor, among the Krebs cycle. She sits on her bed.

grace: I\'ve been doing practice tests. Since Sunday. I did nine. I\'m getting better. My score\'s going up. Isn\'t that disgusting?

sam: No.

grace: It\'s a little disgusting.

She puts the book down.

grace: You know what I wanted? My whole life? I wanted something to happen to me. I was the kid who did everything right, and I wanted one thing to happen to me that wasn\'t a test. Something real. Something I\'d have to rise to.

She looks at the index cards on the floor.

grace: And then it did. I stood in a hallway in scrubs from Target and watched the ME turn a boy over, and I saw his hip, and I knew what it was. I knew *exactly* what it was. Because I\'ve been studying for this for four years.

grace: I\'m going to be a very good doctor, Sam. I\'m going to be so good. And I\'m never going to wish for something to happen to me again as long as I live.

She picks up one of the index cards and looks at it. *Glycolysis: net 2 ATP.*

grace: Okay. You can go. Thank you for not saying anything helpful.`,
    next: '@hub'
  },

  a2_ciro: {
    enter: g => { g.money(78); g.bond('ciro', { affection: 1 }); },
    text: `Ciro looks at you when you come in the door, and doesn\'t say anything, which has never happened.

Then he does.

ciro: You look like a fish they find in the Schuylkill. Apron. Go.

You work the lunch rush. You fold boxes. You run four deliveries on the e-bike up and down Cecil B. Moore and North 15th in the cold, and nobody you deliver to knows anything about anything, and it\'s the best three hours you\'ve had all week.

At two, when it\'s slow, Ciro puts a slice in front of you on a paper plate, a corner slice, the one with the most cheese, which he has never once in your life given anyone for free.

ciro: Is on the TV. The boy in your building.

sam: Yeah.

ciro: Friend?

sam: Yeah.

Ciro nods. He wipes the counter that doesn\'t need wiping.

ciro: In Napoli, when I am a boy, my friend Gennaro, he fall off the scooter. I am on the back. I walk away. He don\'t.

He keeps wiping.

ciro: Fifty-two years. Every day I think, why me walk away. Is a stupid question. There\'s no answer. You ask it anyway, every day, like a stupid person.

He throws the rag in the sink.

ciro: Eat the slice. You deliver today like a funeral, but a nice funeral. Seventy-eight dollar in tips. Is a miracle. Go home.`,
    next: '@hub'
  },

  a2_nap: {
    enter: g => { g.nap(4); },
    text: `You lie down at noon with your sneakers on and the green notebook on your chest.

You sleep four hours, hard, without dreaming. When you wake up, Nik has put a blanket over you and a bottle of water and a granola bar on the desk, and a sticky note on the granola bar that says *EAT ME (not a threat)*.`,
    next: '@hub'
  },

  /* ---------- Thursday: the midterm ---------- */
  a2_midterm: {
    loc: 'PSY 1001 · MIDTERM · BEURY HALL',
    clock: { day: 'Thu', date: 'Nov 5', time: '10:00 AM' },
    enter: g => { g.sleep(6); },
    text: g => `Two hundred people in a lecture hall with the heat up too high. Scantrons. Number two pencils. A TA walking the aisles in squeaky shoes.

It goes all right. It goes like a test. Memory, conditioning, Piaget, the parts of the brain. You know some of it. ${g.f('psy_study') ? 'You know more of it than you thought you would.' : 'You know less than you hoped.'}

Then question thirty-one.

*31. In 1964, Kitty Genovese was killed outside her apartment in Queens while, according to early reports, 38 neighbors heard or saw and did nothing. This phenomenon, in which the presence of others reduces an individual\'s likelihood of helping, is known as:*

*(a) social loafing (b) the bystander effect (c) deindividuation (d) groupthink*

You sit there with your pencil over the Scantron.

A Blur stepping over his outstretched leg. A Barbie setting an empty Solo cup down by his hand. Candy wrappers in his lap.

The TA\'s sneakers squeak up the aisle and stop beside you.

TA: You okay?

sam: Yeah.

You fill in (b). You fill it in very carefully, all the way to the edges of the little oval.`,
    choices: [
      { text: 'Finish the test. Thirty-nine questions left. Put it away and finish.', tag: 'Finish',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 14, bonus: 0, label: 'PSY 1001 midterm', on: { crit: 'a2_mid_good', success: 'a2_mid_good', fail: 'a2_mid_bad', fumble: 'a2_mid_bad' } },
        if: g => !g.f('psy_study') },
      { text: 'Finish the test. Thirty-nine questions left. You studied. Put it away and finish.', tag: 'Finish',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 14, bonus: 3, bonusLabel: 'Studied at Charles', label: 'PSY 1001 midterm', on: { crit: 'a2_mid_good', success: 'a2_mid_good', fail: 'a2_mid_bad', fumble: 'a2_mid_bad' } },
        if: g => g.f('psy_study') }
    ]
  },
  a2_mid_good: {
    enter: g => { g.flag('psy_mid', 'good'); g.grade('psy', 8); },
    text: `You finish. You check your answers once. You turn it in with eleven minutes left, and walk out into the cold on Liacouras Walk, and stand there in the sun.

It went fine. It actually went fine. A week ago that would have been the most important thing that happened to you all day.

**PSY 1001 midterm: 84.**`,
    next: 'a3_strike'
  },
  a2_mid_bad: {
    enter: g => { g.flag('psy_mid', 'bad'); g.grade('psy', -6); },
    text: `You finish. You don\'t know how. For about fifteen questions in the middle you read every one three times and none of the words stay where you put them.

You turn it in with no time left. The TA takes it out of your hand.

**PSY 1001 midterm: 61.**

You stand on Liacouras Walk in the cold and you can\'t make yourself care, and you know you\'re going to care later, and you can\'t make yourself care about that either.`,
    next: 'a3_strike'
  }
});
