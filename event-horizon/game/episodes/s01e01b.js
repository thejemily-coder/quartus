/* S1 · E1 · PILOT, part 2 of 4: Act Two ("Welcome Week"). */
EH.scenes('s01e01', {

  a2_floor_meeting: {
    card: { kind: 'act', label: 'Act Two', title: 'Welcome Week' },
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { day: 'Thu', date: 'Aug 20', time: '9:02 PM' },
    enter: g => g.recap('You moved into Cardone Hall, 9th floor. You carried a minifridge nobody asked you to carry.'),
    text: `The ninth-floor lounge has two couches that have each seen things, a TV bolted to the wall at an angle that only works if you lie on the floor, and a window AC unit making the sound of a small plane in distress. Forty freshmen are crammed in on the couches, the floor, and the radiator. Everyone smells like new sheets and anxiety.

Grace stands at the front with her clipboard and the lasagna tray, now empty and scraped clean. She did not share it.

grace: Okay. Fire exits are there and there. Quiet hours start at eleven on weeknights. I'm not your mom, I'm not your cop, and I'm not your therapist, but I am the person who'll find you if you choke on your own vomit, so please, for my sake, sleep on your side. Okay. Icebreaker. Two truths and a lie. I'll go first.

She doesn't even pause.

grace: I've seen a man's spleen in a Wawa parking lot. I have a cat named Duodenum. I've never pulled an all-nighter.

A boy named Devontae guesses the spleen. He's wrong, and she describes it. The lie is the all-nighter, which, looking at her, should have been obvious. She shows you a picture of Duodenum anyway. He's enormous and furious, and she loves him more than anything in this building.

It goes around the circle. Nik's three truths turn into a four-minute explanation of why one of them is technically half-true. Simone's lie is so obvious it loops back around to brilliant, and she gets a standing ovation from a girl who's going to follow her around for the rest of the year.

Jules is on the far couch with one leg folded under her and a seltzer, watching everyone the way a cat watches a bird feeder. Each time someone lies, she says the lie quietly, under her breath, before anyone else guesses. She's right every time. By the sixth person, the people around her have started watching *her* instead of the speaker.

Then Grace points the clipboard at you.

grace: Nine-fourteen. Refrigerator guy. Go.

Forty heads turn. Across the room, Jules sets down her seltzer.`,
    choices: [
      { text: 'Play it straight. "I broke my arm jumping off a garage on Mifflin Street. I\'ve never seen the ocean. I can flip an over-easy egg one-handed."',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to the room (and Jules)', on: { strong: 'a2_ttal_strong', weak: 'a2_ttal_weak', miss: 'a2_ttal_miss' } },
        fx: g => g.flag('ttal', 'straight') },
      { text: 'Play it for laughs. "I was an altar boy for four years. I\'m banned from a Rita\'s Water Ice. My grandmother owns a gun."',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'banter', label: 'Lie to the room (and Jules)', on: { strong: 'a2_ttal_strong', weak: 'a2_ttal_weak', miss: 'a2_ttal_miss' } },
        fx: g => g.flag('ttal', 'laughs') },
      { text: 'Don\'t lie at all. Three truths. "My brother\'s a cop. My dad drives a cab. I\'ve never been on a plane." See who catches it.', tag: 'Trick',
        fx: g => { g.flag('ttal', 'truths'); g.bond('jules', { respect: 2, tension: 1 }); }, go: 'a2_ttal_truths' }
    ]
  },
  a2_ttal_strong: {
    enter: g => { g.bond('jules', { respect: 2, tension: 1 }); g.flag('beat_jules_read'); },
    text: g => `You say it easily, the way you'd say it at the kitchen table: no tells, no rush, a little bored. Somebody guesses the ${g.f('ttal') === 'straight' ? 'broken arm' : 'gun'}. Somebody else guesses the ${g.f('ttal') === 'straight' ? 'egg' : 'Rita\'s'}. The room is split.

Everyone looks at Jules.

She's looking at you, hard, the way you'd look at a magic trick a second time. It's a long pause. Long enough that Simone actually leans forward.

jules: …The ${g.f('ttal') === 'straight' ? 'egg' : 'water ice'}.

sam: Nope.

A sound goes around the room, the specific *ooooh* of forty freshmen watching the hall's apex predator miss. ${g.f('ttal') === 'straight' ? 'You\'ve been down the shore every summer of your life. Wildwood, the same motel, the same sunburn.' : 'You were an altar boy for two weeks, until Father Bruno caught you drinking the wine with Vinnie.'}

Jules doesn't say anything. She picks her seltzer back up. But for the rest of the game she isn't watching the speakers anymore. She's watching you, like you're a lock she's going to come back to with better tools.`,
    next: 'a2_ttal_jules'
  },
  a2_ttal_weak: {
    enter: g => { g.bond('jules', { respect: 1 }); },
    text: g => `You get through it okay. You're a decent liar; you grew up with Ma. The room splits three ways.

Everyone looks at Jules.

She takes her time, long enough that you think you might have her, and then:

jules: ${g.f('ttal') === 'straight' ? 'You\'ve seen the ocean. You have a Wildwood T-shirt in your laundry hamper. It\'s been washed so many times the boardwalk is pink.' : 'Altar boy. Nobody who\'s been banned from a water ice store was an altar boy for four years.'}

sam: …I was an altar boy for two weeks.

jules: That I believe.

The room laughs, and it's a good laugh, *with* you mostly. Jules doesn't laugh. She looks at you for one more second, then moves on, like you're a puzzle that was harder than she expected but solved all the same.`,
    next: 'a2_ttal_jules'
  },
  a2_ttal_miss: {
    enter: g => { g.bond('jules', { tension: 1 }); g.know('ear_tell', ['sam'], 'Jules says you touch your ear when you lie.'); },
    text: g => `You haven't even finished the third one when she says it.

jules: ${g.f('ttal') === 'straight' ? 'The ocean.' : 'The altar boy.'}

sam: You didn't even let me—

jules: You touch your ear when you lie. Left ear. Right here.

She taps her own left earlobe, lightly, twice.

The room *loses it*. Simone has to put her head between her knees. Nik, who has known you for eleven hours, looks at you with deep betrayal, like he's going over every single thing you've said to him today.

You put your hand down. You didn't know you were doing it. You're going to be thinking about your left ear for the rest of your life.`,
    next: 'a2_ttal_jules'
  },
  a2_ttal_truths: {
    text: `You say all three like any one of them could be the lie, and you lean on the last one, the plane, like you're hiding something. Everybody guesses it. Then everybody guesses the cop, because who has a cop brother, honestly. The room's arguing.

Everyone looks at Jules.

She's quiet for a long time. She tilts her head one way, then the other.

jules: There isn't one.

sam: Isn't one what?

jules: There's no lie. You told three truths. You've never been on a plane, your brother is a police officer, and your father drives a cab. I watched him get a ticket this morning.

Simone, delighted, as loud as a fire alarm:

simone: *Grace, is that ALLOWED?*

grace: It's not *not* allowed.

Jules is looking at you with something that isn't a smile, but lives in the same neighborhood. You'll come to know that look. It's the look she gets across a card table when somebody does something stupid that turns out to be brave.

jules: That's cheating.

sam: You caught it.

jules: That's not the point.`,
    next: 'a2_ttal_jules'
  },
  a2_ttal_jules: {
    text: `It goes around. Then it's her turn.

Jules uncrosses her leg and sits up straight, and the room goes quiet without being asked. She has a way of doing that, you'll learn. It's not loudness. It's that she seems to expect it, so the world just does it.

jules: I've never lost a game of cards. I have a twin brother. I've never broken a rule.

She says it with absolutely nothing on her face. Not a flicker, no ear-touching. She could be reading a cereal box.

grace: Nine-fourteen. You seem invested. Guess.`,
    choices: [
      { text: '"Never lost at cards. Nobody never loses."', fx: g => { g.flag('jules_guess', 'cards'); g.bond('jules', { respect: -1 }); }, go: 'a2_ttal_reveal' },
      { text: '"The twin. You\'re an only child. You *radiate* only child."', fx: g => { g.flag('jules_guess', 'twin'); g.bond('jules', { tension: 1 }); }, go: 'a2_ttal_reveal' },
      { text: '"Never broken a rule. You\'re *here*. I heard your mother on the phone."', fx: g => { g.flag('jules_guess', 'love'); g.bond('jules', { respect: 1, tension: 1 }); }, go: 'a2_ttal_reveal' }
    ]
  },
  a2_ttal_reveal: {
    enter: g => {
      g.know('jules_never_loses', ['sam'], 'Jules says she has never lost a game of cards. It was one of her truths.');
      g.know('jules_twin', ['sam'], 'Jules has a twin brother at Penn.');
      g.know('jules_chose_temple', ['sam'], 'Jules says she\'s never broken a rule. That was the lie. She chose Temple, apparently over her mother\'s objections.');
    },
    text: g => `${{
      cards: 'Simone is already shaking her head before you finish.\n\nsimone: That one\'s true. She took forty dollars off me in gin rummy last night, and I still don\'t know what gin rummy *is*.\n\njules: I explained it twice.\n\nsimone: You explained it *while winning*.\n\nThe twin, it turns out, is real too. Hugh. Penn, Wharton. "He\'s a delight," Jules says, in the voice of someone describing a weather system. "Everyone says so."\n\nWhich leaves the lie.',
      twin: 'jules: Hugh. Penn. Wharton. He\'s a delight. Everyone says so.\n\nShe says it in the voice of someone describing a weather system. Simone confirms the cards too: forty dollars, gin rummy, last night. ("I explained it twice." "You explained it *while winning*.")\n\nWhich leaves the lie.',
      love: 'For one second, maybe less, nothing happens on her face at all. Then she picks up her seltzer and takes a sip, which, you\'ll learn, is the closest Juliet Pemberton comes to flinching.\n\njules: Correct.\n\nShe lets the room wait, exactly long enough.\n\njules: I chose Temple.\n\nThe room does a long, slow *ooooh*. Somebody whistles. Simone looks at her roommate with her eyebrows somewhere near her hairline, like she\'s just learned something she plans to bring up later in private, at length.\n\nThe cards were true (forty dollars off Simone in gin rummy, last night). The twin was true: Hugh, Penn, Wharton, "a delight, everyone says so."'
    }[g.f('jules_guess')]}

${g.f('jules_guess') !== 'love' ? 'jules: I\'ve never broken a rule.\n\nA pause, exactly long enough.\n\njules: I chose Temple.' : 'Which means the lie was the rule. Juliet Pemberton, Main Line, Honors, chose a public university on North Broad like it was a crime.'}

She chose Temple like it was a crime. She has never lost a game of cards. She has a twin brother who is a delight. You walk back to 9-14 afterward knowing three true things about Juliet Pemberton, and somehow you feel like you know less than when you started.`,
    next: 'a2_hub'
  },

  /* ---------------- Friday hub ---------------- */
  a2_hub: {
    loc: 'FRIDAY · WELCOME WEEK',
    clock: { day: 'Fri', date: 'Aug 21', time: '9:30 AM' },
    enter: g => g.sleep(7),
    text: `Friday is Welcome Week chaos: free T-shirts, a cappella ambushes on Liacouras Walk, a guy in a full Hooter the Owl costume collapsing from heatstroke outside the Bell Tower and being revived with a Gatorade, to applause. Classes don't start till Monday. You have one whole day of nothing.

Nothing, it turns out, is a lot of things. You can't do all of them.`,
    hub: {
      slots: 3, label: 'Friday, August 21', canEnd: true, endLabel: 'Call it early',
      blurb: 'Each thing costs time. Whatever you skip, people will remember.',
      options: [
        { id: 'ciro', text: 'Go meet Ciro about the delivery job, and work the Friday dinner rush.', cost: 1, tag: 'Money', go: 'a2_ciro' },
        { id: 'vinnie', text: 'FaceTime Vinnie. You haven\'t talked since the going-away thing.', cost: 1, tag: 'Vinnie', go: 'a2_vinnie' },
        { id: 'library', text: 'Get ahead on Calc at Charles Library. Nobody has to know.', cost: 1, tag: 'Grades', go: 'a2_library' },
        { id: 'home', text: 'Call home.', cost: 1, tag: 'Family', go: 'a2_home' },
        { id: 'party', text: 'Rowhouse party on Diamond Street with Nik and Simone. It runs long.', cost: 2, tag: 'Party', go: 'a2_party' }
      ],
      done: 'a2_pool'
    }
  },

  a2_ciro: {
    loc: 'CIRO\'S PIZZA · CECIL B. MOORE AVE',
    clock: { time: '4:40 PM' },
    enter: g => { g.meet('ciro'); g.bond('ciro', { affection: 1 }); g.flag('met_ciro'); },
    text: `Ciro's Pizza is a narrow storefront between a phone repair shop and a church that used to be a bank. Inside are a counter, two tables nobody sits at, a wall of signed photos of people nobody recognizes, and Ciro Bianchi himself: sixty-something, Neapolitan, forearms like hams, an apron that has seen the fall of empires.

He looks you up and down.

ciro: You're the Kearney boy. Rosa's son. She said you were handsome. Mothers lie. She called me.

sam: She— When did she call you?

ciro: Twice. Once to say you're a good boy. Once to say if anything happens to you, she'll burn my store down. I believe both. You ride?

sam: E-bike. Yeah.

ciro: You ride like you drive?

sam: I don't drive.

ciro: Good. Drivers are animals. Here.

He hands you an insulated bag, a Ciro's T-shirt two sizes too big, and a slip of paper.

ciro: Fourteen an hour plus tips. You eat what you drop. You don't eat what you don't drop. If you drop *on purpose*, I know. I always know. Go. You deliver like a funeral, I fire you.

The dinner rush is a blur of North Philly at golden hour: rowhouse stoops, grad students in high-rises, a Baptist church picnic that orders nine pies and pays in exact change, an old man on Norris Street who answers the door in a bathrobe and tells you, unprompted, that he was at the Spectrum for Dr. J's first home game in '76. Tips are a contact sport.`,
    choices: [
      { text: 'Work the doors. Smile, chat, remember names. Make them like you.',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'hustle', label: 'Tips', on: { strong: 'a2_ciro_strong', weak: 'a2_ciro_weak', miss: 'a2_ciro_miss' } } },
      { text: 'Just be fast. Fast is a tip.',
        check: { kind: 'pool', attr: 'reflex', skill: 'ride', diff: 2, label: 'Dinner rush', on: { crit: 'a2_ciro_strong', success: 'a2_ciro_strong', partial: 'a2_ciro_weak', fail: 'a2_ciro_miss' } } }
    ]
  },
  a2_ciro_strong: {
    enter: g => { g.money(70 + 46); g.bond('ciro', { respect: 2 }); g.flag('ciro_good'); },
    text: `You're good at this. You're Rosa Kearney's son. You know how to walk into a stranger's house and make them feel like they invited you. By nine o'clock you've got forty-six dollars in tips folded in your sock and three regulars who know your name, and the Baptist church lady has told you you're going to make some girl a fine husband if you lose the attitude.

Ciro counts the drawer and grunts.

ciro: You don't deliver like a funeral.

sam: Thanks, Ciro.

ciro: You deliver like a *wake*. There's still crying, but somebody brought cookies. Tomorrow, five o'clock. Saturday is a war.`,
    next: '@hub'
  },
  a2_ciro_weak: {
    enter: g => { g.money(70 + 22); },
    text: `It's fine. You get lost once in the maze behind the Temple medical campus. You give a guy on 15th the wrong pie, and he eats half of it before he notices, and you have to call Ciro, who screams for forty-five seconds in Neapolitan dialect and then says, very calmly, *"Bring him a new one. Don't charge him. You charge him, I kill you."* Twenty-two in tips.

ciro: Tomorrow. Five o'clock. Saturday is a war.`,
    next: '@hub'
  },
  a2_ciro_miss: {
    enter: g => { g.money(70 + 8); g.bond('ciro', { respect: -1 }); },
    text: `You get the address wrong twice. A pit bull named Princess chases you half a block down Diamond Street, and you're not ashamed to say you scream. A guy pays a forty-dollar order in quarters out of a pickle jar and tips you with a lecture about cryptocurrency.

Eight dollars in tips. Ciro looks at the eight dollars for a long time.

ciro: Tomorrow. Five o'clock. Saturday is a war. Try not to die in it.`,
    next: '@hub'
  },

  a2_vinnie: {
    loc: 'FACETIME · A ROOF IN SOUTH PHILLY',
    clock: { time: '6:15 PM' },
    enter: g => { g.meet('vinnie'); g.bond('vinnie', { affection: 1 }); },
    text: `Vinnie picks up on the first ring, which means he was waiting, which he'd never admit. He's on the roof of his mother's rowhouse on Moore Street in a sleeveless Local 57 shirt, with a Yuengling sweating in his fist and the whole skyline behind him going orange. He's still got drywall dust in his eyebrows from work.

vinnie: Ayyy. *College.* Look at him. Look at this guy. You get your little lanyard yet?

sam: I'm not wearing a lanyard.

vinnie: You got a lanyard, Sally, I can *feel* it.

You've known Vinnie Russo since the first day of kindergarten at St. Monica's, when he bit a kid named Brendan for you. It's the founding myth of your friendship, and he still brings it up at weddings.

He tells you about work. The union's got him on a crew at the Navy Yard building out some tech campus for "the battery people, the Halcyon guys." Fat overtime, weird security, men in polo shirts who won't let anybody near the basement. Something about the way he says *college*, every time, with a little too much air in it.

Then, casual, cracking another beer:

vinnie: Oh, yo. Saw your pop Tuesday. Melrose Diner. Back booth, with some young guy in a real nice jacket. Not a cab guy.

He says it like it's nothing. It isn't nothing. Everybody in South Philly knows that kind of jacket, the way you know which corner floods when it rains.

vinnie: Prob'ly nothing. Probably cabs or whatever. Just saying I saw him.`,
    choices: [
      { text: '"What young guy? Vin. Who? What did it look like?"', tag: 'Push',
        check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'streetwise', label: 'Get it out of Vinnie', on: { strong: 'a2_vinnie_strong', weak: 'a2_vinnie_weak', miss: 'a2_vinnie_weak' } } },
      { text: 'Let it go. Pop\'s Pop. "Whatever. How\'s your mom?"', tag: 'Let it go',
        fx: g => { g.bond('vinnie', { trust: 1 }); g.flag('vinnie_letgo'); g.know('pop_iannucci', ['sam', 'vinnie'], 'Vinnie saw Pop in a back booth at the Melrose Diner with a young guy in an expensive jacket.'); }, go: 'a2_vinnie_end' }
    ]
  },
  a2_vinnie_strong: {
    enter: g => { g.know('pop_iannucci', ['sam', 'vinnie'], 'Vinnie saw Pop in a back booth at the Melrose Diner with a young guy in an expensive jacket. The jacket did the talking and paid. Pop didn\'t eat.'); g.bond('vinnie', { trust: 1, respect: 1 }); },
    text: `Vinnie looks off the side of the roof for a second.

vinnie: Booth in the back. The jacket did all the talking. Your pop didn't eat. He had eggs in front of him and he didn't touch 'em, and then the jacket paid. For both.

He takes a long pull of the Yuengling.

vinnie: Your pop don't let *nobody* pay for him, Sally. You know that. I'm just saying. I'm just telling you what I saw.

sam: Yeah.

vinnie: You want me to ask around?

The way he says it makes you think he's already asked around, and doesn't want to tell you what he heard.`,
    next: 'a2_vinnie_end'
  },
  a2_vinnie_weak: {
    enter: g => { g.know('pop_iannucci', ['sam', 'vinnie'], 'Vinnie saw Pop in a back booth at the Melrose Diner with a young guy in an expensive jacket.'); g.bond('vinnie', { tension: 1 }); },
    text: `vinnie: Relax. It's a diner. Everybody eats at the diner.

sam: Vin.

vinnie: I said relax, *college*. What, you go up Broad Street for two days and now you gotta interrogate me? I got a mother for that.

He laughs it off, and you let him, because the alternative is fighting with Vinnie on FaceTime on your second day, and you can't afford to lose anybody right now.`,
    next: 'a2_vinnie_end'
  },
  a2_vinnie_end: {
    text: `He asks about the dorm. You tell him about the fridge girl, and he laughs so hard he has to put the beer down.

vinnie: Main Line? Oh, you're *done*. You're done, Sally. She's gonna eat you like a soft pretzel.

sam: I'm not into her. She's a whole jawn, Vin. A *beverage center* jawn.

vinnie: You said "beverage center" in her voice. You did the *voice*.

It's good. It's almost like before. Then somebody calls him from downstairs, his mom or one of his little brothers, and he says *"Gotta go, love you, don't get a lanyard,"* and he's gone. You sit there for a minute holding the phone, feeling three miles away from everything.`,
    next: '@hub'
  },

  a2_library: {
    loc: 'CHARLES LIBRARY · TEMPLE UNIVERSITY',
    clock: { time: '1:30 PM' },
    enter: g => { g.meet('femi'); g.know('met_femi', ['sam'], 'Femi Ojo works the circulation desk at Charles Library. He naps on the fourth floor.'); },
    text: `Charles Library looks like a spaceship that landed on North Broad and decided to stay: a huge wooden ceiling that swoops over you like the inside of a wave, and glass everywhere. A robot arm in the basement fetches books from a vault, which you watch for nine full minutes through a window, like it's an aquarium.

Then you sit down with the Calc syllabus and an expression of real fear.

At the circulation desk there's a guy, maybe twenty, Black, round glasses, reading a paperback of *The Wealth of Nations* like it personally owes him money. Nobody is checking anything out. He seems to like it that way.

DESK GUY: You've been on page one of that syllabus for twenty minutes.

sam: It's a hard page.

DESK GUY: It's a list of office hours.

He comes over, sits backward on the chair across from you, and introduces himself as Femi. Femi Ojo, junior, economics, desk worker, "professional furniture." He walks you through the first problem set in ten minutes flat, and he's good at it, patient in a way that makes you feel like less of an idiot.

femi: Nobody looks at the desk guy. It's restful. You can watch the whole building. People do the wildest stuff when they think nobody's looking.

sam: Like what?

femi: Fourth floor, east corner, there's a quiet room nobody ever goes in. Best nap in Philadelphia. That's the only secret I'm giving you for free.`,
    choices: [
      { text: 'Lock in. Do the problem set for real while he\'s here to help.',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, bonus: 2, bonusLabel: 'Femi helping', label: 'Calc problem set 0', on: { crit: 'a2_lib_good', success: 'a2_lib_good', fail: 'a2_lib_bad', fumble: 'a2_lib_bad' } } },
      { text: 'Talk to Femi instead. He seems like he doesn\'t get talked to much.', tag: 'Femi',
        fx: g => { g.bond('femi', { affection: 2, trust: 1 }); g.flag('femi_talked'); }, go: 'a2_lib_talk' }
    ]
  },
  a2_lib_good: {
    enter: g => { g.grade('calc', 4); g.bond('femi', { respect: 1 }); },
    text: `By three o'clock you understand limits, or at least you understand them better than the syllabus does. Femi grades your last problem with a pencil he keeps behind his ear and writes, in tiny neat handwriting: *Not bad for a pizza guy.*

sam: How'd you know I'm a pizza guy?

femi: You've got a Ciro's menu in your back pocket and sauce on your shoe. I told you. I watch.`,
    next: '@hub'
  },
  a2_lib_bad: {
    enter: g => { g.grade('calc', 1); g.bond('femi', { affection: 1 }); },
    text: `It doesn't stick. Nothing sticks. The numbers swim. Femi watches you hit the same wall four times with the patience of a man watching a Roomba.

femi: It's okay. Week zero. Come back Monday. I'm always here. Nobody notices, but I'm always here.`,
    next: '@hub'
  },
  a2_lib_talk: {
    text: `You close the syllabus, and Femi looks almost startled, like he's not used to being the more interesting option.

He grew up in Upper Darby. His parents are both nurses on opposite shifts, so he basically raised himself and his little sister in the hours between. His mother calls him Oluwafemi only when she's angry, which he says is "every time the phone bill comes, and on Nigerian Independence Day if I forget to call my grandmother in Ibadan." He works three jobs: the desk, a TA gig, weekend shifts at an Amazon warehouse in Bensalem. He's going to be an economist, the kind that *"explains to rich people why poor people are poor, using graphs, so they'll listen."*

femi: You're the first person who's sat at this desk on purpose since June. Do you know that? People walk right past me. I could set myself on fire and they'd be like, wow, warm in here.

sam: That sucks, man.

femi: Nah.

He thinks about it.

femi: Sometimes it's nice. Being invisible. You get to see how people really are.

Later, much later, you'll remember he said that.`,
    next: '@hub'
  },

  a2_home: {
    loc: 'PHONE · THE KEARNEY KITCHEN',
    clock: { time: '7:45 PM' },
    enter: g => { g.meet('nonna'); g.meet('mikey'); g.bond('rosa', { affection: 1 }); g.bond('nonna', { affection: 1 }); },
    text: `Ma picks up and immediately puts you on speaker, so you're talking to the entire Kearney kitchen at once. You can hear the gravy pot ticking. You can hear the Phillies on the radio. You can hear Gigi yelling *"IS THAT SAM"* from upstairs, and Mikey, home on his dinner break in uniform, yelling *"TELL HIM DON'T DO ANYTHING STUPID,"* which is apparently going to be his whole personality this semester.

rosa: Are you eating?

sam: I'm eating.

rosa: What are you eating?

sam: …Food.

rosa: *Salvatore.*

Then there's a rustling, and the phone changes hands, and you hear breathing, slow and old, and the specific creak of the kitchen chair by the window that only one person ever sits in.

nonna: Salvatò.

sam: Hi, Nonna.

nonna: You have a jacket?

sam: Nonna, it's August.

nonna: Tomorrow night. Near midnight. You don't be on Broad Street.

The kitchen goes quiet around her. Even the Phillies go to commercial.

sam: Nonna, I *live* on Broad Street.

nonna: Then you wear a jacket.

She hands the phone back to Ma like she's just reminded you to floss. Ma comes back on, and her voice is lighter, the way it gets when she's covering.

rosa: She's been like this all week. She had Gigi count the clocks in the house yesterday. *Count them.* Twenty-two clocks, Salvatore. I didn't know we had twenty-two clocks.

mikey: Tell him don't do anything stupid!

rosa: He knows, Michael!`,
    choices: [
      { text: '"Okay, Nonna. I\'ll wear a jacket." Mean it.', tag: 'Promise',
        fx: g => { g.flag('nonna_promise'); g.bond('nonna', { trust: 2 }); g.know('nonna_warning', ['sam'], 'Nonna said: Saturday, near midnight, don\'t be on Broad Street. Wear a jacket.'); }, go: 'a2_home_end' },
      { text: 'Laugh it off. "She\'s been watching the weather lady again."', tag: 'Laugh',
        fx: g => { g.bond('nonna', { tension: 1 }); g.know('nonna_warning', ['sam'], 'Nonna said: Saturday, near midnight, don\'t be on Broad Street. Wear a jacket.'); }, go: 'a2_home_end' }
    ]
  },
  a2_home_end: {
    text: `Gigi gets the phone last. She takes it upstairs and shuts her door so nobody can hear her miss you. She tells you about her new phone case, and a fight at the rec center, and that Pop's been "weird," sleeping in the cab, out late.

gigi: He said he's picking up night shifts. Is that a thing? Do cabs have night shifts?

sam: Cabs got all the shifts, Gi.

gigi: Okay.

You can hear her deciding not to worry. You remember being thirteen and deciding that too.`,
    next: '@hub'
  },

  a2_party: {
    loc: 'A ROWHOUSE ON W. DIAMOND ST',
    clock: { time: '9:20 PM' },
    enter: g => { g.bond('simone', { affection: 1 }); g.bond('nik', { affection: 1 }); },
    text: g => `The party is in a rowhouse on Diamond Street rented by six juniors and a dog, and it has reached the stage of the night where the line for the bathroom has its own social hierarchy. Bass through the floorboards. Jungle juice in a cleaned-out (allegedly) Home Depot bucket. Somebody's playing beer pong on a ping-pong table with one leg replaced by a stack of textbooks, mostly organic chemistry.

Simone takes over the aux cord within six minutes, by sheer force of personality. Nik clings to your elbow like he's on the deck of a sinking ship.

nik: I've never been to a party.

sam: You've never been to a party?

nik: I've been to *gatherings*. There were *parents*. There was *dal*.

At 11:00, Jules arrives.

She's in something black and simple that costs more than Pop's cab, and she comes in with a tall guy with a rower's shoulders and a Penn Crew quarter-zip, in August. He has a face like a golden retriever that went to boarding school. He kisses her on the cheek at the door, she lets him, and you feel something you decide is indigestion.

simone: Callum. The boyfriend. Main Line. Since tenth grade. He's *nice*.

She says *nice* the way you'd say *terminal*.

At 11:40, a big junior in a backwards Flyers hat backs into Nik, and Nik's jungle juice goes all over the guy's white Air Forces. There's a moment of silence that spreads out across the room like the ripple from a stone.

FLYERS HAT: The *fuck*, man.

Nik turns the color of skim milk. The guy gets in his face, then gets a hand in his chest. Nik stumbles back into the bathroom line, which parts for him like the Red Sea.

Your body's already moving.`,
    choices: [
      { text: 'Get between them. If he wants to swing, he swings at you.',
        check: { kind: 'pool', attr: 'nerve', skill: 'brawl', diff: 2, label: 'Step in', physical: true, on: { crit: 'a2_party_fight_win', success: 'a2_party_fight_win', partial: 'a2_party_fight_partial', fail: 'a2_party_fight_lose', botch: 'a2_party_fight_lose' } },
        fx: g => { g.flag('party', 'fight'); g.hidden('revenant_drift', 0.2); } },
      { text: 'Talk him down. Big smile, hands up, "Yo, yo, yo, my guy, let me buy you new sneakers."',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'De-escalate', on: { strong: 'a2_party_talk_strong', weak: 'a2_party_talk_weak', miss: 'a2_party_fight_lose' } },
        fx: g => g.flag('party', 'talk') },
      { text: 'Don\'t. Wait. Let Nik handle it. Be right behind him if he can\'t.', tag: 'Trust Nik',
        fx: g => { g.flag('party', 'trusted_nik'); g.hidden('revenant_drift', -0.5); g.bond('nik', { respect: 2, trust: 2 }); }, go: 'a2_party_nik' }
    ]
  },
  a2_party_fight_win: {
    enter: g => { g.bond('nik', { trust: 2, affection: 1 }); g.bond('jules', { tension: 1 }); },
    text: `You step in close, chest to chest, between him and Nik. Flyers Hat swings. It's a big drunk haymaker, telegraphed like a Western Union. You slip it the way Mikey taught you in the basement when you were twelve, put him into the wall with your shoulder, and hold him there.

sam: We're done. Yeah? We're done.

He thinks about it. He looks at your face, and something he sees there makes him decide he *is* done. He shoves off and stalks away to find a paper towel for his shoes.

When you turn around, Callum is standing right there, hands up, smiling.

callum: Hey, man. That was clean. You okay? Callum.

He offers his hand. You shake it. He's *nice*. It's the worst thing that's happened to you all day.

Over his shoulder, Jules is watching you, arms folded, an unreadable look on her face, like she just watched someone run a red light and make it.`,
    next: 'a2_party_end'
  },
  a2_party_fight_partial: {
    enter: g => { g.bond('nik', { trust: 2 }); g.injure({ id: 'split_lip', name: 'Split lip', pen: 0, heal: 1 }); g.bond('jules', { tension: 1 }); },
    text: `You get between them. He swings, and you mostly slip it. *Mostly.* His class ring catches your lip on the way past, and you taste pennies, and then you've got him in a clinch against the wall and it's over. His friends drag him off muttering about lawsuits.

Callum appears with a fistful of napkins and real concern.

callum: Dude, you're bleeding. Here. I'm Callum. You okay?

He's *nice*. You hold his napkins to your lip and hate him with your whole heart.

Across the room, Jules is watching, arms folded. When she sees you see her, she looks away.`,
    next: 'a2_party_end'
  },
  a2_party_fight_lose: {
    enter: g => { g.injure({ id: 'black_eye', name: 'Black eye', pen: 0, heal: 2 }); g.bond('nik', { trust: 1, affection: 2 }); g.bond('jules', { respect: -1 }); g.flag('party_lost'); },
    text: `He's bigger than you thought. He's *drunker* than you thought, which turns out to be worse: there's no fear in him, just momentum. His fist finds your eye like it has a GPS, and the room does a slow cartwheel, and then you're sitting on the floor with your back against the radiator, looking at a ceiling fan wobbling on its last screw.

The fight ends because Callum (tall, polite, Penn Crew Callum) puts one hand on the guy's shoulder and says, *"Hey, buddy. Let's get you some water,"* in the voice of a camp counselor, and the guy just *goes*.

Nik is kneeling next to you with a bag of frozen peas from somebody's freezer.

nik: That was so stupid. That was the stupidest thing I've ever seen. Thank you. Never do it again.

From across the room, Jules looks at you on the floor and then at her boyfriend, and you watch her make some kind of mental note. You don't want to know what it says.`,
    next: 'a2_party_end'
  },
  a2_party_talk_strong: {
    enter: g => { g.money(-20); g.bond('nik', { trust: 1, affection: 1 }); g.bond('jules', { respect: 1 }); },
    text: `You slide in with your hands up and the menace grin on full blast.

sam: Yo, yo, yo, my guy. My guy. That's my fault, I bumped him. Those are the Triple Whites? Those are clean, man. Here.

You pull a twenty out of your sock (it's a little damp) and press it into his hand, and before he can decide whether to be insulted you're talking about the Flyers' power play, and how the refs robbed them against the Rangers in March, and somehow, ninety seconds later, he's laughing and calling you *bro* and you're doing a shot together while Nik watches from the bathroom line like he's seen a man walk on water.

When you turn around, the tall guy in the Penn Crew quarter-zip is there, grinning.

callum: That was *slick*, man. I'm Callum.

Behind him, Jules raises one eyebrow about a millimeter. You choose to interpret it as a standing ovation.`,
    next: 'a2_party_end'
  },
  a2_party_talk_weak: {
    enter: g => { g.money(-20); g.bond('nik', { trust: 1 }); },
    text: `You talk fast. He listens slow. It works, kind of. He takes your twenty, tells you you're "lucky," and tells Nik he's "dead next time," which Nik takes very seriously and will think about every night for a month.

A tall guy in a Penn Crew quarter-zip claps you on the shoulder on the way past.

callum: Nice save, man. Callum.

He goes back to Jules. She doesn't look at you at all, and that's somehow a whole sentence.`,
    next: 'a2_party_end'
  },
  a2_party_nik: {
    text: `You don't move. It's the hardest thing you've done all week. Every muscle in you wants to go, but you plant your feet and stay one step behind Nik's shoulder, close enough to catch him.

And Nik, skinny, terrified Nik from Edison, opens his mouth.

nik: I'm so sorry. I'm *so* sorry. Those are Air Force 1 '07s, right? The Triple Whites? My cousin has those. He wipes them with a baby wipe every night. Every night. It's a whole ritual. I will personally baby-wipe your shoes. I'll do it right now. I will Venmo you the full retail price, which is a hundred and fifteen dollars before tax, which, honestly, I can't afford, but I respect the shoe. I respect it as a cultural object.

Flyers Hat stares at him. Nik stares back, shaking, glasses fogged, and does not back down. The guy's whole face cycles through confusion, irritation, and something like being disarmed by a puppy.

FLYERS HAT: …Bro, just. Just get me a paper towel.

Nik gets him a paper towel. Nik gets him four. The crowd actually applauds.

A tall guy in a Penn Crew quarter-zip leans over to you.

callum: Your boy's got *guts*. I'm Callum.

Across the room, you see Jules looking at you, specifically at you, the guy who *didn't* step in. She looks at you for a long time, like that's the most surprising thing that's happened tonight.`,
    next: 'a2_party_end'
  },
  a2_party_end: {
    enter: g => { g.meet('callum'); g.know('jules_callum', ['sam'], 'Jules has a boyfriend: Callum Whitford, Penn Crew. He\'s nice. That\'s the problem.'); g.bond('callum', { affection: 1 }); },
    text: `Later, out on the stoop, the night air's like soup and somebody is playing Drake from a phone in their back pocket. Simone shares a cigarette she doesn't actually smoke with a girl she's absolutely going to make out with by October.

simone: You know he's a rower, right? Callum. They're all like that. Bodies like Greek gods, souls like a LinkedIn.

sam: I don't care about Callum.

simone: Mmhm.

sam: I don't.

simone: Salvatore, I've known you for thirty-six hours, and you've said "I don't care about Callum" three times.`,
    next: '@hub'
  },

  /* ---------------- The pool table ---------------- */
  a2_pool: {
    loc: 'HOWARD GITTIS STUDENT CENTER · GAME ROOM',
    clock: { day: 'Fri', date: 'Aug 21', time: '11:52 PM' },
    enter: g => { if (!g.met('simone')) g.meet('simone'); },
    text: g => `${g.f('did_party') ? 'The party dies when somebody\'s neighbor calls L&I about the porch, and the herd migrates to the Student Center, which is open till two during Welcome Week and has the only air conditioning in North Philly that works.' : 'Nik and Simone drag you out at eleven-thirty. Simone has heard there\'s "a situation" in the Student Center game room, and she says it like a war correspondent.'}

The situation is Jules.

She's at the last pool table in the back, under a buzzing fluorescent light, in a crowd of about thirty people. Her cue's chalked. Her hair's still up. Across the table, two Sigma-something guys in matching salmon shorts are losing, slowly and expensively. There's a little stack of twenties on the rail next to her elbow. She's running the table the way she does everything, like it's slightly beneath her, and she's doing it anyway because no one else will do it correctly.

${g.f('did_party') ? 'Callum is nowhere. "Early practice," Simone says. "Crew. They wake up at 4:45 to sit in a boat backwards. It\'s like a cult with oars."' : ''}

simone: Nobody learns to play like that at a country club. Somebody *taught* her. Somebody mean. I've known her two days and I'd bet my whole meal plan it was a grandmother.

nik: Is that legal? Is she allowed to take their money? Is that gambling?

simone: It's *Welcome Week*, Nikhil.

Jules drops the eight ball, cleanly, in the called pocket, and the second salmon-shorts guy hands over two twenties with the face of a man who has learned something about himself.

She looks up and sees you.

jules: Ah. The refrigerator man.

sam: Beverage center.

jules: You're learning. Do you play?

You do play. Your uncle Tommy had a table in the basement of his bar on Snyder Avenue, and you spent most of sixth grade down there running racks against off-duty bartenders for quarters. You're good. You're *South Philly bar basement* good.

jules: Fifty a rack.

sam: I'm not gonna play you for fifty bucks.

jules: Then what are you going to play me for?`,
    choices: [
      { text: '"Forty. That\'s what I got."', need: { cash: 40 }, fx: g => { g.flag('pool_bet', 40); }, go: 'a2_pool_game' },
      { text: '"Twenty, and my pride."', need: { cash: 20 }, fx: g => { g.flag('pool_bet', 20); }, go: 'a2_pool_game' },
      { text: '"No money. A favor. Loser owes the winner one favor, winner\'s choosing, whenever they want."', tag: 'A favor',
        fx: g => { g.flag('pool_bet', 'favor'); g.bond('jules', { tension: 1 }); }, go: 'a2_pool_game' }
    ]
  },
  a2_pool_game: {
    text: g => `${g.f('pool_bet') === 'favor' ? 'She actually pauses. Thirty people watch Juliet Pemberton pause.\n\njules: Any favor?\n\nsam: Within reason.\n\njules: Whose reason?\n\nsam: …Mine.\n\njules: Then no. *Any* favor.\n\nThe crowd goes *ooooh*. You should say no. Every cell in your body that came from Rosa Kearney is telling you to say no.\n\nsam: Fine. Any favor.\n\njules: Rack them.' : 'jules: ' + (g.f('pool_bet') === 40 ? 'Forty is a strange number. ' : 'Twenty and your pride. Your pride is worth very little to me, but I accept. ') + 'Rack them.'}

You rack. She breaks, and the break sounds like a gunshot in a church. Two solids drop. She walks around the table the way your grandmother walks around a produce stand, and three more go down without touching a rail, and then she misses.

It's a deliberate miss, a soft little nothing shot. She leaves you the table on purpose. The crowd doesn't notice, but you do.

jules: Your shot.

She's giving you a chance, or she's showing you that she *can*. With her, it might be the same thing.`,
    choices: [
      { text: 'Run the table. Uncle Tommy\'s basement. Everything you\'ve got.',
        check: { kind: 'pool', attr: 'reflex', skill: 'hustle', diff: 3, label: 'Run the table', on: { crit: 'a2_pool_crit', success: 'a2_pool_success', partial: 'a2_pool_partial', fail: 'a2_pool_fail' } } },
      { text: 'Play it smart. Safeties. Make her work for it.',
        check: { kind: 'd20', attr: 'wits', skill: 'hustle', dc: 15, label: 'Out-think her', on: { crit: 'a2_pool_crit', success: 'a2_pool_success', fail: 'a2_pool_fail', fumble: 'a2_pool_fail' } } }
    ]
  },
  a2_pool_crit: {
    enter: g => { g.bond('jules', { respect: 3, tension: 1 }); g.flag('pool_result', 'crit'); g.know('ball_stopped', ['sam'], 'At the pool table, your perfect shot on the eight stopped dead a quarter inch from the pocket. Balls don\'t do that.'); },
    text: `It's the best game of pool you've ever played.

Uncle Tommy's basement, every Saturday of sixth grade, every quarter you ever lost to a bartender named Big Dee: it all comes up out of your hands at once. Stripe. Stripe. A bank shot off two rails that makes a salmon-shorts guy say *"oh, come ON."* Stripe. Stripe. Stripe. Seven in a row. The crowd has gone quiet in that particular way that means something's actually happening.

You line up the eight. It's an easy shot, corner pocket, the kind you could make with your eyes closed.

You hit it perfectly. You know it the second it leaves the tip. It rolls across the felt dead true, and it slows, and slows, and it stops, a quarter inch from the lip of the pocket, perfectly still, like it changed its mind.

Thirty people stare at it. There's no slope there. You *know* this table. Balls don't do that.

Jules isn't looking at the ball. She isn't looking at you either. She's looking at her own hand on the rail, like it did something without asking her.

Then she picks up her cue and runs the rest of the table in four shots without a word, drops the eight, and straightens up.

jules: You're better than you look.

sam: You're exactly as bad as you look.

She looks at you for a long second, and something in her face almost breaks into a laugh, but doesn't.

jules: I'm aware.`,
    next: 'a2_pool_after'
  },
  a2_pool_success: {
    enter: g => { g.bond('jules', { respect: 2 }); g.flag('pool_result', 'success'); },
    text: `You play well. It's Uncle Tommy's basement, the soft touch, the bank shots. You get five of yours down and leave her nothing for two turns, and a couple of salmon-shorts guys start rooting for you, which is a kind of betrayal you'll treasure forever.

It doesn't matter.

She gets the table back on a bad leave, and she cleans it like she's doing dishes: one, two, three, four, the eight. She doesn't even look at the pocket on the last one.

jules: You're better than you look.

sam: You're exactly as bad as you look.

jules: I'm aware.

Something happens at the corner of her mouth, and she puts it away like a card she doesn't want you to see.`,
    next: 'a2_pool_after'
  },
  a2_pool_partial: {
    enter: g => { g.bond('jules', { respect: 1 }); g.flag('pool_result', 'partial'); },
    text: `You get three down, then you leave yourself an impossible angle on the fourth, and try it anyway, because you're a Kearney and Kearneys don't play safe.

It doesn't go. She runs out the table in five shots, calm as a surgeon.

jules: That was an ambitious shot.

sam: Thanks.

jules: It wasn't a compliment.

sam: I know. I'm from South Philly.

jules: You keep saying that like it explains you.

sam: It does.

She considers that more seriously than you expect.

jules: Hm.`,
    next: 'a2_pool_after'
  },
  a2_pool_fail: {
    enter: g => { g.bond('jules', { tension: 1, respect: -1 }); g.flag('pool_result', 'fail'); },
    text: `It's a disaster. It's Uncle Tommy's basement played in reverse. You scratch on your first shot, and the crowd goes *ohhh*. You knock in one of *hers* on your second. On your third, the cue ball hops the rail, rolls across the floor, and stops at the feet of a security guard, who looks at it, looks at you, and goes back to his phone.

She runs the table without looking up.

jules: Well. You were very brave.

sam: Thank you.

jules: That also wasn't a compliment.`,
    next: 'a2_pool_after'
  },
  a2_pool_after: {
    enter: g => {
      const b = g.f('pool_bet');
      if (b === 'favor') g.know('owe_jules_favor', ['sam', 'jules'], 'You owe Jules Pemberton one favor. Any favor. Her choosing, whenever she wants.', { track: true });
      else g.money(-b);
      g.know('jules_ivory_die', ['sam'], 'Jules carries an old ivory die from her grandmother. "It isn\'t lucky. Luck isn\'t real."');
    },
    text: g => `${g.f('pool_bet') === 'favor' ? 'jules: One favor.\n\nShe holds out her hand to shake on it. Her grip is cool and dry and sure.\n\njules: I\'ll let you know.\n\nsam: When?\n\njules: When it\'ll hurt the most.' : 'You count out the money. ' + (g.f('pool_bet') === 40 ? 'It\'s Pop\'s money, or Ciro\'s, or both, and either way it hurts. ' : '') + 'She takes it without counting, folds it once, and puts it in the back of her phone case, and you feel like you\'ve paid a toll on a road you didn\'t mean to drive down.'}

While the crowd breaks up, you see her fidgeting with something on the rail: a small, old, yellowed die, ivory or bone, with the corners worn round. She rolls it between her fingers without looking at it, the way some people play with a ring.

sam: Lucky die?

She closes her fist around it.

jules: It was my grandmother's. It isn't lucky.

sam: How come?

jules: Luck isn't real.

She says it the way people say *I'm fine*: fast, a little too firm, like a door being held shut from the other side.

Then she's gone, out through the glass doors into the August night, with Simone hurrying after her mouthing *"I'll text you"* at you, which is bizarre, since you never gave her your number. Your phone buzzes before you even reach Broad Street.

TXT simone: It's Simone. I got your number from Nik. Nik is VERY easy.
TXT simone: Salvatore Kearney. You played Juliet Pemberton. For STAKES. In PUBLIC. Iconic. Tragic. Iconic.
TXT simone: For the record she called you "the refrigerator person" four times on the walk home. I'm not saying anything. I'm just counting.`,
    next: 'a2_night'
  },

  a2_night: {
    loc: 'CARDONE HALL · ROOM 9-14',
    clock: { day: 'Sat', date: 'Aug 22', time: '1:20 AM' },
    night: true,
    text: g => `Nik is wide awake and wired, sitting cross-legged on his bed in boxers with tiny tacos on them, all three monitors glowing like an altar.

nik: Okay, so I've decided I'm going to be a person who goes to parties now. ${g.f('did_party') ? 'That was the best night of my life. A man wanted to kill me. ' : 'I didn\'t go to the party but Simone told me about it and I feel like I was there spiritually. '}Do you want to play Elden Ring? I have a co-op build. It's a *healer*. I'm always the healer.

Your shift at Ciro's starts at five tomorrow. Saturday is a war. And through the wall, very faintly, you can hear the hum of a beverage center across the hall.`,
    choices: [
      { text: 'Co-op with Nik till four in the morning. Be his tank.', tag: 'Sleep 5h',
        fx: g => { g.sleep(5); g.bond('nik', { affection: 2, trust: 1 }); g.flag('night', 'nik'); }, go: 'a3_day' },
      { text: 'Lights out at one-thirty. Sleep like a normal person.', tag: 'Sleep 8h',
        fx: g => { g.sleep(8); g.flag('night', 'sleep'); }, go: 'a3_day' },
      { text: 'Lie in the dark and replay the eight ball. Why did it stop?', tag: 'Sleep 6h',
        fx: g => { g.sleep(6); g.flag('night', 'brooding'); g.bond('jules', { tension: 1 }); }, go: 'a3_day' }
    ]
  }
});
