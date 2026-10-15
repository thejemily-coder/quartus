/* S2 · E10 · THE ITALIAN MARKET, part 2 of 4: Act Two ("Finals"). */
EH.scenes('s02e10', {

  /* ================= ACT TWO: FINALS ================= */
  a2_vinnie: {
    card: { kind: 'act', label: 'Act Two', title: 'Finals' },
    night: true,
    loc: 'CARDONE HALL · THE LOADING DOCK',
    clock: { day: 'Tue', date: 'May 11', time: '11:50 PM' },
    enter: g => { g.know('dante_plan10', ['sam', 'vinnie'], 'Vinnie: Halcyon is holding Bruno\'s people in the old Esposito produce warehouse at 10th and Washington. Sunday the 16th at two, a white box truck pulls out of the loading door. The saints\' procession crosses Washington at 9th at the same minute. Dante is going to hit the truck there, in front of everybody.'); },
    text: g => `${g.f('vinnie9') === 'stayed' ? 'Vinnie has been sleeping on the couch in your parents\' living room for three weeks. Tonight he texts you from it.\n\nTXT vinnie: loading dock. 20 min. taking the 17\n\n' : 'Four weeks of nothing. Not a text. Not a like. And then, at 11:31 on a Tuesday night:\n\nTXT vinnie: loading dock. dont bring nobody\n\n'}He\'s on the edge of the loading dock behind Cardone Hall, under the one working light, same spot as April. ${g.f('vinnie9') === 'went' ? 'Dante\'s black cashmere coat again. It fits him better now. That\'s the worst part.' : 'In a Phillies hoodie that used to be yours.'}

vinnie: Sally.

You sit down next to him. Your legs hang off the dock, side by side, like on the bleachers at FDR.

vinnie: ${g.f('vinnie9') === 'went' ? 'I\'m with him. I want you to know that before I say anything. I went with him in that elevator and I\'m with him. This isn\'t me coming back.' : 'My cousin Joey called me tonight. Joey still drives for Dante. Joey can\'t keep his mouth shut to save his life, which, Sally, it might come to.'}

sam: Okay.

vinnie: They found where Halcyon\'s keeping \'em. Sonny. The pho guy. The plant lady from Fishtown. Eleven people. Not the Navy Yard. A warehouse. Esposito\'s, the old produce place at Tenth and Washington, with the big fridge doors. Two blocks from the Market. Right under everybody\'s nose the whole time.

He laughs. It\'s not a laugh.

vinnie: And Sunday they\'re moving \'em. Dante\'s got a guy who details their trucks. White box truck, no name on the side, pulls out of the loading door at two o\'clock.

sam: Sunday at two.

vinnie: Sunday at two. You know what\'s Sunday at two?

You know. Everybody in South Philly knows. The Italian Market festival. The procession. They carry the saints out of St. Mary Magdalen de Pazzi and up 9th Street on their shoulders, and the whole neighborhood throws money at them, and at two o\'clock the procession crosses Washington Avenue at 9th.

vinnie: Grandpa\'s carrying. Front left pole of Saint Anthony. Sixty-eight years old with a bad hip, he carries Saint Anthony every year since he was nineteen. All the old guys carry. Everybody\'s gonna be looking at the saints.

vinnie: And Dante\'s gonna be at Tenth and Washington with six guys and a van when that truck pulls out. In front of ten thousand people. With the saints going by.

The light buzzes.

vinnie: Halcyon\'s gonna be there too. The polite guy. Brannigan. He doesn\'t do moves without being there. And the whole neighborhood\'s gonna be in the street, Sally. Ladies with strollers. Your mom. *My* mom. Old guys with hips.

He looks at his hands. The knuckles have healed. One of them healed crooked.

vinnie: ${g.f('vinnie9') === 'went' ? 'I asked Dante not to. I asked him nice. He said I could drive the van or I could go home. I\'m driving the van.' : 'Joey\'s driving the van. Joey can\'t parallel park.'}

sam: Why are you telling me?

vinnie: Because you\'re gonna do something. You always do something. I just want it to be something smart for once.

He gets up. He looks down at you.

vinnie: Saint Anthony\'s the patron saint of lost things. You know that? Grandpa says that every year. *Lost things.* Eleven of \'em in a fridge on Washington Avenue.

He goes.`,
    next: 'a2_week'
  },

  a2_week: {
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Wed', date: 'May 12', time: '7:00 AM' },
    enter: g => { g.sleep(5); },
    text: g => `Finals week. Four days until Sunday.

You have an exam this afternoon, two tomorrow, one Friday. You have a box of your stuff half-packed by the door and a box of Nik\'s that has been half-packed since April, containing exclusively cables.

You have a warehouse at Tenth and Washington, eleven people in a fridge, and a man named Brannigan who doesn\'t do moves without being there.

You can\'t do all of it. You have to pick.${g.f('terms8') === 'count' ? '\n\nTXT rosa: count?\nTXT sam: zero\nTXT rosa: good. nonna is going to the festival sunday with "a friend." she wont say who. she ironed a blouse. NONNA IRONED A BLOUSE SAM' : ''}`,
    next: 'a2_hub'
  },

  a2_hub: {
    loc: 'CARDONE HALL · 9-14',
    text: 'Four days. Three things you can actually do.',
    hub: {
      slots: 3, label: 'Finals week',
      blurb: 'Four days until Sunday.',
      options: [
        { id: 'w10b_nik', text: 'Nik. Show him the warehouse. Let him do what he does.', cost: 1, tag: 'Nik', go: 'a2_nik' },
        { id: 'w10b_bree', text: 'Bree. She works for Bruno. She also works for you, if you ask.', cost: 1, tag: 'Bree', go: 'a2_bree' },
        { id: 'w10b_heck', text: 'Heck. He\'s been waiting since January for somebody to tell him where to stand.', cost: 1, tag: 'Heck', go: 'a2_heck' },
        { id: 'w10b_mikey', text: 'Mikey. The 3rd District works the festival every year.', cost: 1, tag: 'Mikey', go: 'a2_mikey' },
        { id: 'w10b_final', text: 'Your finals. You\'re a college student. Allegedly.', cost: 1, tag: 'Finals', go: 'a2_final' },
        { id: 'w10b_jules', text: 'Jules. She has an orgo final Thursday and a number on a screen.', cost: 1, tag: 'Jules', go: 'a2_jules' }
      ],
      done: 'a2_plan'
    }
  },

  a2_nik: {
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Wed', date: 'May 12', time: '11:00 PM' },
    enter: g => { g.flag('crew_nik10'); g.bond('nik', { trust: 1 }); g.know('warehouse_layout', ['sam', 'nik'], 'Nik pulled the Esposito warehouse permits: one loading door on Washington, a fire door on the back alley that runs out to 10th Street, a walk-in fridge the size of a tennis court. And Halcyon\'s trucks re-register every Friday.'); },
    text: g => `Nik has his four monitors and a fifth one you\'ve never seen before. He won\'t say where it came from.

nik: Esposito\'s Produce. Closed 2019. Bought in 2021 by an LLC called Kingfisher Cold Storage, which is owned by an LLC called Larkspur Holdings, which, bro, guess.

sam: Halcyon.

nik: *Halcyon.* Bird names. They\'re all bird names. A halcyon\'s a *kingfisher*, it\'s the same bird, they\'re not even *trying*.

He pulls up the city permits. Floor plans, from the 1980s, scanned crooked.

nik: One loading door, on Washington. One fire door in the back, on the alley that runs out to 10th Street. That\'s it. And a walk-in fridge in the middle the size of a tennis court. That\'s where they are. That\'s where I\'d put eleven people I wanted cold and quiet.

He spins his chair to face you.

nik: I can\'t lift anything. I can\'t stop anything. I can\'t throw a punch, I tried once in sixth grade and broke my own thumb. But Sunday, I can be in your ear, with every camera on Washington Avenue on my fifth monitor, and I can tell you where everybody is *before* they get there.

nik: That\'s my thing. That\'s what I got. Okay?

sam: That\'s a lot, Nik.

nik: *(quietly)* Yeah. I know. I\'ve been practicing.${g.f('institute10') === 'wired' ? '\n\nHe taps a folder on the desktop. *GIANT_HEART.wav.*\n\nnik: And Dana Fiorillo has emailed me nine times since Saturday. Nine. The last one just says *PLEASE* in the subject line. Your call. It\'s your voice on it.' : ''}`,
    next: '@hub'
  },

  a2_bree: {
    loc: 'PORT RICHMOND · THE KOWALS\' KITCHEN',
    clock: { day: 'Thu', date: 'May 13', time: '8:30 PM' },
    enter: g => { g.flag('crew_bree10'); g.bond('bree', { trust: 1, respect: 1 }); },
    text: g => `The kitchen in Port Richmond smells like pierogi and bleach. The dialysis machine is gone from the corner. There\'s a clean square on the linoleum where it used to sit, and nobody has moved the table back over it yet.

Halina is in the next room, watching Wheel of Fortune at a volume you can feel in your teeth, shouting the answers before the contestants.

HALINA: *(off)* A BIRD IN THE HAND! IDIOT!

Bree laughs. Her own laugh. She still sounds surprised by it, every time.

bree: She\'s fine. She\'s horrible. She\'s fine.

You tell her. Esposito\'s, the truck, two o\'clock, Dante, Brannigan, Saint Anthony.

She listens with her arms folded.

bree: Bruno\'s paying for her pills, Wawa. The ones that keep her body from killing the kidney. Eleven hundred a month. Forever. You understand what I\'m saying.

sam: Yeah.

bree: Dante is Bruno\'s grandson.

sam: Dante\'s going to get somebody\'s grandmother killed in front of a saint.

She\'s quiet. In the next room, somebody buys a vowel.

bree: Brannigan talks to his people on a radio. Little earpiece. I heard him in January, on the steps. I heard him for an hour. I have him in here.

She taps her throat.

bree: *(in a calm, polite, terrible voice, a man\'s voice, perfect)* "All units, hold position. Route change. Stand by."

The hair stands up on your arms.

bree: *(her own voice)* I can get on their channel if somebody gets me on their channel. Nik could. And then for maybe thirty seconds, before they figure it out, I\'m him.

bree: Teddy would\'ve hated this plan.

sam: Yeah.

bree: Teddy would\'ve done it anyway.`,
    next: '@hub'
  },

  a2_heck: {
    loc: 'KENSINGTON · THE GYM ON FRANKFORD AVE',
    clock: { day: 'Thu', date: 'May 13', time: '6:00 AM' },
    enter: g => { g.flag('crew_heck10'); g.bond('heck', { trust: 1, affection: 1 }); },
    text: `The boxing gym on Frankford Avenue under the El, at six in the morning, when it\'s just Heck and an old man named Sal who sweeps.

Heck is working the heavy bag. Every time he hits it, the canvas smokes a little. Sal sweeps around the scorch marks without comment, like he\'s seen worse.

heck: Wawa.

He stops. Steam comes off his shoulders in the cold gym. You tell him.

He listens to the whole thing with his gloves on, breathing.

heck: Eleven.

sam: Eleven.

heck: In a fridge.

sam: A walk-in. Nik thinks.

Heck looks at his gloves. The leather on the knuckles is brown and cracked from heat.

heck: In January, on the eighth floor, they had Marisol in a bed with a number on it. And Teddy got her out. And it cost Teddy.

He pulls the gloves off with his teeth.

heck: Marisol\'s good now, gracias a Dios. She\'s back at work at the bakery. She doesn\'t sleep good. She makes me sit in the kitchen until she does.

heck: A fridge is cold, Wawa. You know what I am.

sam: You\'re hot.

heck: I\'m *very* hot.

It\'s the first joke you\'ve ever heard Heck make. He looks pleased with it.

heck: A fridge door is a big steel door with a big steel lock. Steel gets soft if you hold it long enough. You get me to the door. I\'ll get you the door.`,
    next: '@hub'
  },

  a2_mikey: {
    loc: 'THE 3RD DISTRICT · 11TH & WHARTON',
    clock: { day: 'Fri', date: 'May 14', time: '5:00 PM' },
    enter: g => { g.flag('mikey10'); g.bond('mikey', { trust: 1 }); g.know('mikey_festival', ['sam', 'mikey'], 'Mikey is on the festival detail Sunday, posted at 9th and Washington. The 3rd District has thirty officers on the route. Mikey can move them, a little.'); },
    text: g => `Mikey meets you in the parking lot of the 3rd District with two hoagies and the face he wears when he\'s about to say no.

You tell him. He eats the whole hoagie while you talk, which is how you know it\'s bad. Mikey doesn\'t eat when it\'s good news. He eats when he\'s thinking.

mikey: I\'m on the festival detail Sunday. Me and thirty other guys. They put me at Ninth and Washington because I\'m from there and I know which old ladies will hit you with a cane.

sam: That\'s the corner.

mikey: That\'s the corner.

He balls up the hoagie paper.

mikey: I can\'t raid a warehouse on a story from Vinnie Russo, Sammy. I can\'t put a SWAT team on Tenth Street on festival Sunday because my brother\'s friend\'s cousin can\'t park. You know what I can do?

sam: What?

mikey: I can be standing on that corner. And when that truck pulls out, and Dante\'s van pulls in, I can be a cop in the middle of the street with my hand up. And I can make the sergeant put six more guys on Washington Avenue, because I\'m gonna tell him I got a bad feeling, and I never once told him I got a bad feeling, so he\'ll listen.

He looks at you.

mikey: ${g.f('mikey9') === 'open' ? 'And I\'m not gonna ask what you\'re gonna be doing. Because I know what you\'re gonna be doing. And I already know I hate it.' : 'And you\'re gonna be somewhere you shouldn\'t. Right? Don\'t answer that.'}

mikey: Text Ma.

sam: I always text Ma.

mikey: Text Ma *first*.`,
    next: '@hub'
  },

  a2_final: {
    loc: 'TEMPLE · BEURY HALL',
    clock: { day: 'Fri', date: 'May 14', time: '10:30 AM' },
    text: g => `Your last final. Psych, the spring one, in a lecture hall in Beury with two hundred people and the smell of two hundred people who haven\'t slept.

Fifty multiple choice. Three short answers.

Short answer two: *Describe the difference between short-term and long-term potentiation, and give an everyday example.*

You read it twice. Somewhere in your head, the professor in February, at the front of this same room, writing it on the board in yellow chalk: *What fires together, wires together.*

${g.knows('aperture_truth') ? 'You think: sixty-one people in a door. You think: what fired together, under Broad Street, for seven-tenths of a second.' : ''}

You pick up the pencil.`,
    choices: [
      { text: 'Write it straight. The textbook answer. You read the chapter. Twice.', tag: 'Straight',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, label: 'Psych final', on: { crit: 'a2_final_good', success: 'a2_final_good', fail: 'a2_final_bad', fumble: 'a2_final_bad' } } },
      { text: 'Write it the way you\'d explain it to Gigi. Your example: the way your hand knows where the cold starts.', tag: 'Your way',
        check: { kind: 'd20', attr: 'heart', skill: 'empathy', dc: 14, label: 'Psych final, your way', on: { crit: 'a2_final_good', success: 'a2_final_good', fail: 'a2_final_bad', fumble: 'a2_final_bad' } } }
    ]
  },

  a2_final_good: {
    loc: 'TEMPLE · BEURY HALL',
    enter: g => { g.flag('psy_final10', 'good'); },
    text: `You write for twenty minutes without stopping. You hand it in. The professor takes it from you at the front and looks at the second answer for a second longer than she looks at anybody else\'s.

Outside, on the steps of Beury, it\'s seventy-one degrees and sunny and you are, as of 12:40 p.m. on Friday, May fourteenth, done with your freshman year of college.

You stand there and let that be true for a whole minute.`,
    next: '@hub'
  },

  a2_final_bad: {
    loc: 'TEMPLE · BEURY HALL',
    enter: g => { g.flag('psy_final10', 'bad'); },
    text: `You write three sentences. You cross out two. You write *see above* and there is nothing above. You hand it in at 12:38 with eleven minutes left on the clock, because the room is too warm and every time someone drops a pencil you flinch.

Outside, on the steps of Beury, it\'s seventy-one degrees and sunny and you are done with your freshman year of college.

A C-plus, probably. Femi would\'ve said *outside first*. You were thinking about a fridge.`,
    next: '@hub'
  },

  a2_jules: {
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Thu', date: 'May 13', time: '10:00 PM' },
    enter: g => { g.flag('jules10'); g.bond('jules', { affection: 1, trust: 1 }); g.know('jules_practice10', ['sam', 'jules'], 'Jules has been practicing on purpose. Coins, dice, elevators. She can feel her luck land now. It costs her something, after. She won\'t say what.'); },
    text: g => `Jules comes out of her organic chemistry final at 5:15 p.m. Thursday and goes straight to sleep in your bed for four hours with her shoes on.

At ten, she wakes up, and sits up, and takes a quarter out of her pocket.

jules: Watch.

She flips it. Heads. Flips it. Heads. Heads. Heads. Eleven times. On the twelfth, she catches it and holds it in her fist.

jules: I\'ve been practicing. Since the ballpark. Coins. Dice. Elevators, they always come now. Simone thinks I\'ve become very lucky at Uno. I can *feel* it land. Like a key going into a lock.

sam: Jules.

jules: It costs something. After. I don\'t know what yet. Something gets heavier. ${g.hv('jules_debt') >= 2 ? 'Every time I do it for you, on purpose, it gets heavier.' : ''}

She opens her hand. Heads.

You tell her about Sunday. All of it.

She doesn\'t say *don\'t go*. She doesn\'t say *I\'m coming*. She sits with it, with the quarter in her palm.

jules: In the corridor, at the ballpark. I saw you. Everything was stopped, and you were the only thing moving, and you *waved* at me.

sam: I didn\'t know what else to do.

jules: It was the nicest thing anyone\'s ever done in front of five guns.

She closes her hand over the quarter.

jules: Sunday, I\'ll be where you can see me. That\'s all I\'m promising. If you need it, look at me.`,
    next: '@hub'
  },

  /* ---------------- The plan ---------------- */
  a2_plan: {
    night: true,
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Sat', date: 'May 15', time: '11:00 PM' },
    enter: g => { g.sleep(6); },
    text: g => `Saturday night. The last night of freshman year.

The room is boxes. Nik\'s side has gone down to the mattress and four monitors. Your side is three garbage bags and Femi\'s green notebook, sitting on the windowsill because you can\'t figure out what box it goes in.

${[g.f('crew_nik10') ? 'Nik, at the monitors.' : '', g.f('crew_bree10') ? 'Bree, cross-legged on your stripped mattress, eating your Doritos.' : '', g.f('crew_heck10') ? 'Heck, in the doorway, because the doorway is the only part of the room he fits in.' : '', g.f('jules10') ? 'Jules, on the windowsill next to the notebook.' : 'Jules, on the windowsill, with her orgo notes she no longer needs.'].filter(Boolean).join(' ')}

Fifteen hours.

You lay it out. The warehouse. The truck. Two o\'clock. The saints. Dante\'s six guys and a van. Brannigan. Ten thousand people.

${g.f('mikey10') ? 'Mikey, on the corner, with his hand up. Six more cops on Washington.' : 'Mikey will be on the corner anyway. He doesn\'t know why yet.'}

Somebody has to decide what kind of thing this is going to be.`,
    choices: [
      { text: 'The crew. Get the eleven out of the fridge *before* two. Before the truck. Before Dante. Nobody sees anything.', tag: 'The crew',
        fx: g => { g.flag('plan10', 'crew'); g.bond('heck', { respect: 1 }); g.bond('bree', { respect: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a2_plan_end' },
      { text: 'Mikey. Tell him everything, tonight. Let the cops be in the street. Let Dante see blue and walk away. You just stand next to your brother.', tag: 'Mikey',
        fx: g => { g.flag('plan10', 'cops'); g.bond('mikey', { trust: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_plan_end' },
      { text: 'Dana. Send her the tape tonight. Sunday, put her on the corner with a photographer. Halcyon can\'t disappear eleven people in front of a camera and ten thousand people.', tag: 'Make it public',
        fx: g => { g.flag('plan10', 'public'); g.bond('nik', { respect: 1 }); g.hidden('halcyon_heat', 2); g.hidden('revenant_drift', -0.5); }, go: 'a2_plan_end', if: g => g.f('institute10') === 'wired' || g.f('dana4') === 'halcyon' },
      { text: 'The card. Call the number. *Come in voluntarily, and they all go home.* Walk in at two, and eleven people walk out.', tag: 'The deal',
        fx: g => { g.flag('plan10', 'deal'); g.bond('jules', { tension: 3 }); g.hidden('revenant_drift', 1); g.hidden('halcyon_heat', 3); g.know('deal10', ['sam'], 'You called Achterberg\'s card. "Two o\'clock. The loading door at Tenth and Washington. Come alone. Walk in, and they walk out."'); }, go: 'a2_plan_end', if: g => g.f('offer10') === 'card' || g.f('offer10') === 'first' }
    ]
  },

  a2_plan_end: {
    night: true,
    loc: 'CARDONE HALL · 9-14',
    text: g => `${g.f('plan10') === 'crew' ? `heck: Before two.

sam: Before two. Nik puts Bree on their radio at one-thirty. Brannigan tells everybody to hold position. Heck takes the fire door in the alley and the fridge door after it. I go in first and clear whoever\'s inside. We\'re out the back alley onto 10th Street by one-fifty with eleven people, and they walk into the festival and disappear into a whole festival eating cannoli.

nik: And at two o\'clock, a truck pulls out empty, and Dante hits an empty truck in front of thirty cops.

bree: That\'s a good plan, Wawa.

bree: *(in Teddy\'s voice, low, rough, perfect)* "That\'s a good plan. Something\'s gonna go wrong with it."

Nobody says anything for a second. Heck puts his hand on the doorframe and the paint blisters under it.` : g.f('plan10') === 'cops' ? `You call Mikey at 11:20. He picks up on the first ring, like he\'s been holding the phone.

You tell him all of it. Every part. The fridge. Brannigan. The polite voice. The cleaners. How many there were in the hallway at the ballpark.

When you\'re done, he\'s quiet for a long time.

mikey: Okay. Okay. I\'m calling my sergeant. Then I\'m calling the captain at home. Then I\'m getting yelled at. Then we\'re gonna have a lot of cops on Washington Avenue.

mikey: Sammy. Thank you.

sam: For what?

mikey: For calling me before. Not after. That\'s the whole thing, with you. You never call before.` : g.f('plan10') === 'public' ? `Nik sends the file at 11:14 p.m. *GIANT_HEART.wav*, forty-one minutes and twelve seconds.

Dana Fiorillo calls back at 11:31. Nik puts her on speaker.

dana: Is this real.

nik: It\'s real.

dana: *"We opened a door. You happened to be standing in it."* Is this—who is *you*?

nik: Can\'t tell you.

dana: Okay. Okay. My editor is going to have an aneurysm. Tenth and Washington, two o\'clock. I\'ll bring Rodriguez, he shot the Pope. If there\'s a truck and there\'s eleven people in it, it\'s on A1 Monday morning.

She hangs up. Nik looks at you.

nik: Bro. We just told the *Philadelphia Inquirer* about a door.` : `The card is soft at the corners from your wallet.

She picks up on the first ring.

ACHTERBERG: Mr. Kearney.

sam: All eleven. They walk out. I walk in.

ACHTERBERG: Two o\'clock. The loading door at Tenth and Washington. Come alone. I\'ll be there myself. You have my word, and I keep it, which I think you\'ve noticed.

She hangs up.

Jules is on the windowsill. She heard all of it.

jules: Sam.

sam: It\'s eleven people, Jules.

jules: It\'s *you*. It\'s you in a bed with a number on it. *Do not recover. Observe.* I\'ve seen the screen.

She doesn\'t cry. She just looks at you, very steadily, until you look away first.

jules: I\'ll be where you can see me.`}

You lie down on the bare mattress at one in the morning. Jules lies down next to you with her shoes on. Nobody sleeps much.

Twelve hours.`,
    next: 'a3_morning'
  }
});
