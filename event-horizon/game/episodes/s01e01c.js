/* S1 · E1 · PILOT, part 3 of 4: Act Three ("The Hitch"). */
EH.scenes('s01e01', {

  a3_day: {
    card: { kind: 'act', label: 'Act Three', title: 'The Hitch' },
    loc: 'CIRO\'S PIZZA · CECIL B. MOORE AVE',
    clock: { day: 'Sat', date: 'Aug 22', time: '4:58 PM' },
    enter: g => { if (!g.met('ciro')) { g.meet('ciro'); g.flag('met_ciro'); } },
    text: g => `Saturday is ninety-four degrees, with humidity like a wet wool blanket. Everybody on the ninth floor is going to the Welcome Week concert on Liacouras Walk tonight: free, outdoors, some Philly rapper you're pretty sure went to Central with Mikey. Simone is going with Jules. She mentions this to you three separate times in the hallway, unprompted, each time watching your face like a nature documentarian.

You have a shift.

${g.f('met_ciro') && g.f('did_ciro') ? 'Ciro sees you come in and points at the clock with a meat-cleaver hand.\n\nciro: Two minutes early. Who are you trying to impress? Go. Saturday is a war.' : 'Ciro\'s Pizza is a narrow storefront between a phone repair shop and a church that used to be a bank, and Ciro Bianchi is sixty-something and Neapolitan, with forearms like hams and an apron that has seen the fall of empires. He looks you up and down exactly once.\n\nciro: You\'re Rosa\'s boy. She called me. Twice. Once to say you\'re a good boy, once to say if anything happens to you, she burns my store down. Fourteen an hour plus tips. You deliver like a funeral, I fire you. Go. Saturday is a war.'}

He isn't exaggerating. Saturday of Welcome Week is a war. You run pies until your thighs are screaming: up and down Broad, through the medical campus, into rowhouse living rooms where whole families are watching the Phillies with the sound off and salsa music on. A girl on Norris Street tips you in Rita's gift cards. A man on 16th tips you in advice (*"Never trust a guy who says 'trust me'"*), and then says *"Trust me"* about something else.

At eleven-eighteen p.m., the phone on the wall rings, and Ciro answers it and frowns.

ciro: Halcyon. Spring Garden. The battery people, the ones in the old locomotive works. Two large plain, one buffalo chicken. Loading dock, ask for Marco.

He hangs up and looks at the slip like it smells funny.

ciro: They tip like Protestants. Go anyway.

Out the back door, Ciro's old windbreaker hangs on the hook, the green one with *CIRO'S* across the back in cracked white letters. It's ninety degrees outside. The air sits on the street like a hand.

*Saturday, you wear a jacket. Near midnight. The clocks.*${g.f('did_home') ? '\n\n*You don\'t be on Broad Street.*' : ''}`,
    choices: [
      { text: 'Take the windbreaker. You don\'t believe it. You take it anyway. Nonna said.', tag: 'Jacket',
        fx: g => { g.flag('jacket'); g.bond('nonna', { trust: 1 }); }, go: 'a3_ride' },
      { text: 'It\'s ninety degrees. Leave it. Nonna also thinks the microwave gives you thoughts.', tag: 'No jacket',
        fx: g => g.flag('jacket', false), go: 'a3_ride' }
    ]
  },

  a3_ride: {
    loc: 'BROAD STREET · SOUTHBOUND',
    night: true,
    clock: { time: '11:41 PM' },
    text: g => `Broad Street at night is the best road in the world, and nobody can tell you otherwise.

You ride south with the bag warm on your back${g.f('jacket') ? ' and the windbreaker tied around your waist like a dad at a barbecue' : ''}, and the whole city is lit up for you. The Divine Lorraine's sign burns red against the haze. The Met glows gold at Broad and Poplar, every bulb on its marquee burning. There are rowhouses with every window open and every fan on, bodega cats in doorways, a kid doing wheelies on a dirt bike down the center line with a dozen more behind him, riding like a flock of birds. Heat lightning flickers silently out over Jersey. It's drizzling, barely. Steam comes up off the asphalt.

South of Girard, the rowhouses give way to warehouses and new glass. At Spring Garden there's the Baldwin Locomotive Works, a huge brick machine shop from the 1800s with windows twenty feet tall, restored so perfectly it looks fake. A sign on the lawn says **HALCYON DYNAMICS** in thin silver letters, under a logo of a bird made out of a circle.

Every window is lit. At ten to midnight. On a Saturday.

The loading dock is around back. A security guard is waiting under a caged bulb: fifties, Puerto Rican, a gray mustache, a lanyard, the tired, kind face of a man who's worked every overnight shift God ever made.

MARCO: Ciro's? God bless. They got us here all night. Some big test. Nobody tells me nothing.

He takes the pies. He's fishing out his wallet, and the steel door behind him is propped open on a fire extinguisher, and through the gap you can see a long white corridor, a glass wall, and beyond it a room full of people in lab coats who aren't moving. They're all standing very still and looking up at one big screen.

The screen says:

> APERTURE · T−00:00:58`,
    choices: [
      { text: 'Lean. Look past Marco. What *is* that?',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 14, label: 'Look inside', on: { crit: 'a3_look_in_good', success: 'a3_look_in_good', fail: 'a3_look_in_bad', fumble: 'a3_look_in_bad' } } },
      { text: 'Take the tip. Don\'t be nosy. Get back on the bike.', tag: 'Leave',
        fx: g => g.flag('halcyon_peek', false), go: 'a3_tip' }
    ]
  },
  a3_look_in_good: {
    night: true,
    enter: g => { g.hidden('halcyon_heat', 1); g.flag('halcyon_peek', 'full'); g.know('halcyon_aperture', ['sam'], 'Inside Halcyon, a screen read APERTURE, counting down to 11:51. Below it: SUBJECT FIELD 1.9 MI · CONTAINMENT NOMINAL.'); },
    text: `You lean a half step. You see more than you should.

The countdown takes up the whole top of the screen. Below it, smaller lines are scrolling:

> CONTAINMENT · NOMINAL
> SUBJECT FIELD · 1.9 MI
> SEAM COHERENCE · 0.997

And down at the front of the room, right up against the glass, a woman with silver hair cut short as a man's, in a gray cardigan, stands with her palms pressed together in front of her mouth. It's the way Nonna holds her hands at Mass, during the part where the bread becomes something else.

A man beside her (gray polo, no lab coat, a tablet in his hand) turns his head and looks straight down the corridor. Through the glass, through the gap in the door, he looks right at you.

He doesn't look angry. He looks like he's memorizing you.

Marco steps sideways into your view, smooth as a church usher.

MARCO: Okay, papa. Here. Twenty. Go home. Go home, okay?`,
    next: 'a3_tip'
  },
  a3_look_in_bad: {
    night: true,
    enter: g => { g.hidden('halcyon_heat', 1); g.flag('halcyon_peek', 'partial'); g.know('halcyon_aperture', ['sam'], 'Inside Halcyon, a screen read APERTURE, counting down toward midnight.'); },
    text: `You lean. Marco leans with you, easily, a big friendly body filling the doorway, and all you get is the word one more time, huge and white, before the steel door swings shut on its own:

> APERTURE

Above the dock, a camera in a black dome turns, slowly, to look at you.

MARCO: Okay, papa. Here. Twenty. Go home. Go home, okay?`,
    next: 'a3_tip'
  },
  a3_tip: {
    night: true,
    enter: g => { g.money(20); if (!g.f('halcyon_peek')) g.hidden('halcyon_heat', 0.5); },
    text: g => `He presses a twenty into your hand. Protestants, Ciro said. Ciro was wrong.

You coast back out to Broad Street and stop at the light at Spring Garden. One foot down. The e-bike hums under you. It's 11:50 by the bank clock on the corner. Your phone says the same.

Northbound, a SEPTA bus, the 16, is coming down Broad way too fast on the wet asphalt.

In the crosswalk, a little boy in a Spider-Man backpack holds his grandmother's hand. She's looking at her phone.

${g.f('jacket') ? 'For no reason you can name, you untie the windbreaker from your waist and put it on. It\'s ninety degrees. You zip it to your chin.' : 'A drop of sweat runs down your spine. It\'s ninety degrees. You think, for no reason, of your grandmother\'s hands on your face.'}

You know this part.`,
    next: 'a3_light'
  },

  a3_light: {
    night: true,
    loc: 'BROAD & SPRING GARDEN',
    clock: { time: '11:51:04 PM' },
    sfx: 'whoosh',
    enter: g => {
      g.recap('At 11:51:04 on Saturday night, every clock in North Philadelphia stopped. You didn\'t.');
      if (!g.f('jacket')) g.injure({ id: 'frostnip', name: 'Frostnip (hands)', pen: 1, heal: 1 });
    },
    text: g => `The light. The silence. The rain hanging in the air like beads on a curtain.

It's colder than anything you've ever felt, colder than the walk-in at Ciro's, colder than the January the pipes burst on Mifflin Street. ${g.f('jacket') ? 'Ciro\'s windbreaker crackles with frost across your shoulders, and inside it you\'re okay, you\'re *okay*. Nonna. Nonna, how did you know.' : 'Your bare arms go white, then red, then numb. Your fingers won\'t close all the way around anything. Nonna. *Nonna.*'}

You're off the bike. You're running into the rain that isn't falling, and each drop breaks against you like a tiny bulb of ice.

The bus is moving. That's the thing. It isn't stopped like everything else. It's *slow*, slow as the minute hand on a clock, but it's coming, a wall of white metal with an ad for a personal-injury lawyer on the side, its front tire already skidding sideways on the wet. The driver is frozen behind the windshield with her mouth open in a perfect O.

The boy is in the middle of the crosswalk, one sneaker lifted. The grandmother is a step behind him, her thumb paused mid-scroll on her phone screen, which shows a photo of the boy, blowing out candles.

You have no idea how long this lasts. You have no idea what this is. You only know one thing, with total certainty, the way you know your own name:

*Somebody has to.*`,
    choices: [
      { text: 'The kid. Go for the kid. *Now.*',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 3, label: 'Reach him', forceRewind: true, on: { crit: 'a3_out_clean', success: 'a3_out_clean', partial: 'a3_out_partial', fail: 'a3_out_fail', botch: 'a3_out_fail' } },
        fx: g => { g.flag('hitch_choice', 'kid'); g.hidden('revenant_drift', 0.3); } },
      { text: 'The bus. Get to the driver. Get the wheel.',
        check: { kind: 'pool', attr: 'body', skill: 'athletics', diff: 3, label: 'Turn the bus', forceRewind: true, on: { crit: 'a3_out_clean', success: 'a3_out_clean', partial: 'a3_out_partial', fail: 'a3_out_fail', botch: 'a3_out_fail' } },
        fx: g => { g.flag('hitch_choice', 'wheel'); g.hidden('revenant_drift', 0.3); } },
      { text: 'Stop. Breathe. *Look at the whole street first.* You\'ve got time. Maybe. Use it.',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 12, label: 'See it all', on: { crit: 'a3_look_good', success: 'a3_look_good', fail: 'a3_look_bad', fumble: 'a3_look_bad' } },
        fx: g => { g.flag('hitch_choice', 'look'); g.hidden('revenant_drift', -0.6); } }
    ]
  },
  a3_look_good: {
    night: true,
    enter: g => g.flag('look_result', 'good'),
    text: `You stop.

It's the hardest thing your body has ever done. Every muscle is screaming *go*, and you stand in the frozen rain and make yourself *look*, the way Pop reads traffic three lights ahead.

The bus's front wheel is skidding left. The grandmother is a half step behind the boy, out of the bus's line if she stays where she is. The boy isn't. And on the far curb, there's a parked white van with its hazards frozen mid-blink: a big, empty, unbreakable thing.

You see it all at once, like a diagram. *Kid first. Then the wheel. Into the van.*

You've got time to do both, if you don't waste a single step.`,
    choices: [
      { text: 'Both. The kid, then the wheel. Every step counts.',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 3, bonus: 2, bonusLabel: 'You saw it all', label: 'Kid, then wheel', forceRewind: true, on: { crit: 'a3_out_clean', success: 'a3_out_clean', partial: 'a3_out_partial', fail: 'a3_out_fail', botch: 'a3_out_fail' } } }
    ]
  },
  a3_look_bad: {
    night: true,
    enter: g => g.flag('look_result', 'bad'),
    text: `You stop, and you look, and the street is too big. Your brain can't hold it. It's like trying to read a page while someone's ripping it out of your hands. The bus. The kid. The grandmother. The van. The frost crawling up a lamppost. Everything is important, and nothing makes sense.

And the bus is still moving.

You've wasted steps. You know it, the way you know when you've overrun a grounder. Now it's going to be close.`,
    choices: [
      { text: 'Go. *Go.* The kid.',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 4, label: 'Make up the time', forceRewind: true, on: { crit: 'a3_out_clean', success: 'a3_out_clean', partial: 'a3_out_partial', fail: 'a3_out_fail', botch: 'a3_out_fail' } } }
    ]
  },

  a3_out_clean: {
    night: true,
    enter: g => {
      g.flag('hitch_result', 'clean'); g.flag('carmen', 'safe');
      g.unlock('burst'); g.unlock('slip'); g.drift(2); g.mastery(5); g.xp(1);
      if (g.last && g.last.rewound) g.know('first_rewind', ['sam'], 'In the frozen moment, you failed, and then time ran backward and gave you another try. You didn\'t choose that. It just happened.');
      g.meet('jayden');
    },
    text: g => `${g.last && g.last.rewound ? 'For a second you *fail*. You feel it happen. You\'re a step short and the bus is there, it\'s *there*. Then the world tears down the middle like a page, and everything runs backward. The frozen rain falls *up*. Your footsteps un-happen behind you. You\'re back at the curb with your heart going like a jackhammer, and something in the back of your skull says, in a voice that sounds a lot like yours, *No. Again.*\n\nAgain.\n\n' : ''}${g.f('hitch_choice') === 'wheel' ? 'You hit the bus door at a dead run. It\'s locked, folded shut, but the driver\'s side window is open a crack for air, and you get your arm through the gap up to the shoulder and get your hand on the wheel, and you *pull*. It turns. It turns like moving a car with your bare hands through wet cement. The front of the bus swings slowly away from the crosswalk, toward the parked van, and you let go and drop and roll.' : 'You get to the boy. You scoop him up, backpack and all, like a grounder you were always going to get, and keep going. Your feet barely touch. Three steps, four, then the curb. You set him down on the far sidewalk under the bank clock and turn around.\n\nThe grandmother is still a half step back, out of the bus\'s line. ' + (g.f('hitch_choice') === 'look' ? 'And you\'re already moving again. Back across. Up onto the bus\'s bumper. Your arm through the driver\'s cracked-open window to the wheel. You *pull*, and it turns like cement, and the bus swings away from her toward the empty van, and you drop and roll.' : 'You were right. The line of the bus misses her by a foot. It\'s going to miss her by a foot. You stand there and shake.')}

And then.

!! ~SLAM

Sound comes back like a door slammed in your face: the engine, the rain hitting the street all at once, an enormous crunch of metal as the 16 bus skids into the side of the empty van and stops dead. Glass. A car alarm. A woman screaming in Spanish, *¡Jayden! ¡JAYDEN!*

The boy is standing on the sidewalk beside you, holding your hand. You don't remember taking his hand.

Nobody is hurt. Nobody is *hurt*.

The rain is falling again, warm and ordinary. Your breath isn't white anymore. Your nose is bleeding, a lot, down your lip and onto your Ciro's shirt, and you're so hungry you could eat the bus.

The boy looks up at you with enormous, calm eyes.

jayden: You were the cold man.`,
    next: 'a3_after'
  },
  a3_out_partial: {
    night: true,
    enter: g => {
      g.flag('hitch_result', 'partial'); g.flag('carmen', 'wrist');
      g.unlock('burst'); g.unlock('slip'); g.drift(3); g.mastery(4);
      if (g.f('hitch_choice') === 'wheel') g.injure({ id: 'bruised_ribs', name: 'Bruised ribs', pen: 1, heal: 2 });
      if (g.last && g.last.rewound) g.know('first_rewind', ['sam'], 'In the frozen moment, you failed, and then time ran backward and gave you another try. You didn\'t choose that. It just happened.');
    },
    text: g => `${g.last && g.last.rewound ? 'You fail. You feel it happen. And then the world tears down the middle like a page, and the rain falls *up*, and your footsteps un-happen, and a voice in the back of your skull that sounds like yours says, *No. Again.* You\'re back at the curb. You go again.\n\n' : ''}You get there. Almost.

${g.f('hitch_choice') === 'wheel' ? 'You get your arm through the driver\'s window and haul the wheel, and the bus turns, but not enough. You feel something in your side go *pop* against the window frame. The bumper clips the grandmother\'s outstretched arm as it swings past.' : 'You get the boy. You scoop him up and run, and the bus comes through the crosswalk where he was standing. But the grandmother has stepped forward after him. Of course she has. Its side mirror catches her arm as it goes past.'}

!! ~SLAM

Sound comes back like a slammed door: the engine, the rain, the crunch of metal as the bus hits the parked van, a car alarm. The grandmother is on her knees on the wet asphalt holding her wrist, which is bent in a way wrists don't bend. She's not screaming for herself. She's screaming for the boy, *¡Jayden! ¡JAYDEN!*, until she sees him on the sidewalk, holding your hand, and then she just sobs.

She's hurt. She's alive. He's alive.

Your nose is pouring blood down your chin. ${g.f('hitch_choice') === 'wheel' ? 'Every breath stabs you in the ribs. ' : ''}You're so hungry you're shaking.

The boy looks up at you.

jayden: You were the cold man.`,
    next: 'a3_after'
  },
  a3_out_fail: {
    night: true,
    enter: g => {
      g.flag('hitch_result', 'fail'); g.flag('carmen', 'hip');
      g.unlock('burst'); g.unlock('slip'); g.drift(3); g.mastery(3);
      g.injure({ id: 'bruised_ribs', name: 'Bruised ribs', pen: 1, heal: 2 });
      g.hidden('revenant_drift', 0.5);
      g.know('first_rewind', ['sam'], 'In the frozen moment, you failed, and time ran backward to give you another try. You failed again anyway.');
    },
    text: g => `You fail.

Then the world tears down the middle like a page. The rain falls up. Your footsteps un-happen. A voice in the back of your skull that sounds exactly like you says *No. Again.* You're back at the curb, and you go again, faster, harder.

And you fail again.

${g.f('hitch_choice') === 'wheel' ? 'You get your arm through the window and haul, and the bus barely turns, and you\'re thrown off the bumper into the side of the van hard enough to hear something in your chest crack.' : 'You get the boy. You get him, you\'ve got him in your arms and you\'re running, but your shoulder clips the bus\'s front corner and you\'re spun into the side of the van hard enough to hear something in your chest crack.'} The bus comes on through the crosswalk.

The grandmother had stepped forward after him. Of course she had.

!! SLAM

Sound comes back all at once. Metal. A car alarm. Glass. Then, worst of all, a silence where the grandmother's voice should be.

She's lying in the street, crumpled at the hip, ten feet from where she was standing. She's breathing. You can see her breathing. She's looking at the sky, and her lips are moving, and when you crawl over to her on your hands and knees, you hear what she's saying. She's praying, in Spanish, for the boy.

The boy is sitting on the curb where you dropped him, unhurt, not crying, just staring at you.

jayden: You were the cold man.

He's alive. She's alive. You did it, and you didn't, and your nose is pouring blood down your chin, and you have never been so hungry or so cold or so sure that you *should have been faster*.`,
    next: 'a3_after'
  },

  a3_after: {
    night: true,
    loc: 'BROAD & SPRING GARDEN · 11:51:05 PM',
    enter: g => {
      g.know('jayden_cold_man', ['sam'], 'The boy, Jayden, called you "the cold man."');
      g.know('sam_slip', ['sam'], 'Your secret: when the world stopped, you didn\'t.', { track: true });
      g.recap('You pulled a little boy named Jayden out from in front of the 16 bus. He called you "the cold man."');
    },
    text: g => `North Philadelphia is dark.

Not *dim*: dark. Every streetlight on Broad is out, every window, every traffic signal, all the way up to the Divine Lorraine, whose red sign is gone like somebody blew out a candle. The only light comes from car headlights, and from the Halcyon building, which is still blazing, every window white, like it's the only thing in the city that got the memo.

And from above. There's something in the sky over the city: a slow ripple of color, green and violet, folding over itself like a curtain in a draft. Like the Northern Lights, if they'd never heard of the North.

Up and down Broad Street, people are stopping. Getting out of their cars. Holding up their phones to film the sky. A woman on the corner is saying, over and over, *"Did you feel that? Did you feel that? Like the world skipped?"*

You look at your phone. 11:51:05. The second before it, 11:51:04, is just *gone*. You'll learn later that every phone in North Philly lost the same 0.7 seconds, and for a while it's the only thing anybody in the city talks about.

${g.f('carmen') === 'hip' ? 'You\'re kneeling next to the grandmother in the street. Her name is Carmen, she tells you, Carmen Torres, and the boy is Jayden, he\'s eight, his birthday was Tuesday. She keeps saying it like it\'s important that someone knows. Someone\'s calling 911. Someone else is directing traffic around her with their phone flashlight.' : g.f('carmen') === 'wrist' ? 'The grandmother, Carmen Torres, is sitting on the curb with her wrist held against her chest and Jayden in her lap, rocking him, rocking herself. She keeps looking at you like she\'s trying to remember where she knows you from.' : 'The grandmother, Carmen Torres, has Jayden in her arms on the curb and won\'t let go of him. She looks up at you and says, very clearly, "Gracias, mijo. Gracias. Gracias." She doesn\'t know what she\'s thanking you for. Neither do you.'}

Then you see him.

A man has come out of the Halcyon building: gray polo, khakis, a tablet in one hand. He's calm, the only calm person on Broad Street, calm as a lifeguard. He walks slowly along the sidewalk, sweeping the tablet back and forth in front of him like a metal detector on a beach. He's looking at the screen, not at people. As he gets closer to the crosswalk, closer to *you*, his walk slows down, like the tablet is telling him he's getting warm.

Sirens are coming from the south. Your nose won't stop bleeding.`,
    choices: [
      { text: 'Stay with Jayden and Carmen until the ambulance comes. You\'re not leaving them.', tag: 'Stay',
        fx: g => { g.flag('after', 'stayed'); g.hidden('halcyon_heat', 2); g.heat('police', 1); g.know('gave_name_police', ['sam'], 'You gave your name to a PPD officer at the Spring Garden crash.'); g.bond('carmen', { trust: 3 }); }, go: 'a3_after_stay' },
      { text: 'Get out. Now. Before tablet guy gets any warmer.',
        check: { kind: 'pool', attr: 'reflex', skill: 'stealth', diff: 2, label: 'Disappear into the crowd', on: { crit: 'a3_after_gone', success: 'a3_after_gone', partial: 'a3_after_seen', fail: 'a3_after_seen', botch: 'a3_after_seen' } },
        fx: g => g.flag('after', 'fled') },
      { text: 'Flag down the first ambulance yourself, point them to Carmen, *then* disappear.',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Hand off, slip away', on: { strong: 'a3_after_gone', weak: 'a3_after_seen', miss: 'a3_after_seen' } },
        fx: g => { g.flag('after', 'handoff'); g.bond('carmen', { trust: 1 }); } }
    ]
  },
  a3_after_stay: {
    night: true,
    enter: g => g.know('halcyon_tablet_man', ['sam'], 'A calm man from Halcyon in a gray polo swept Broad Street with a tablet after the light. He stopped right next to you.'),
    text: g => `You stay. You sit down on the wet curb and put your arm around Jayden, and you hold Carmen's good hand, and you bleed politely into a napkin from the pizza bag while the sirens get louder.

Tablet Guy walks right up to the crosswalk. He stops six feet from you. He looks at his screen, and then, very slowly, he looks at you. His face is pleasant, forgettable, the face of a man who manages a Best Buy. His eyes take a picture.

TABLET GUY: Hell of a thing. You okay, son? You're bleeding.

sam: Nosebleed. The heat.

TABLET GUY: Sure. The heat.

He smiles, nods, and moves on down the block, sweeping, sweeping.

A Philly cop takes your statement for the crash report: young guy, sunburned, from the 6th District, sent up because everyone is being sent up. You give your name, your real name. Kearney. He looks up.

COP: Kearney? Like Mikey Kearney, the 3rd?

sam: …My brother.

COP: No shit. Small world. I'll tell him you're a hero.

sam: Please don't.

He's already writing it down.${g.f('carmen') === 'hip' ? '\n\nWhen the ambulance takes Carmen, she grabs your sleeve with surprising strength and says, "Temple Hospital. You come see. You come see Jayden." You promise. You don\'t know yet if it\'s a promise you can keep.' : ''}`,
    next: 'a3_jules'
  },
  a3_after_gone: {
    night: true,
    enter: g => g.know('halcyon_tablet_man', ['sam'], 'A calm man from Halcyon in a gray polo swept Broad Street with a tablet after the light.'),
    text: g => `${g.f('after') === 'handoff' ? 'You step out in front of the first ambulance with both arms up, and it stops, and you lean in the window and point. "Older lady, hip or wrist, she\'s in the crosswalk, the kid\'s fine, the driver\'s shook." You talk like Mikey talks on his radio, calm and quick, and the EMT nods like you\'re a cop, and the doors swing open, and while everybody\'s looking at the doors, you aren\'t there anymore.' : 'You let the crowd take you. Phones up, faces up to the sky. You become one more kid in a pizza shirt staring at the lights, and you drift, drift, drift north, and Tablet Guy walks right past the place where you were standing.'}

From half a block up, you look back. Tablet Guy has stopped at the crosswalk, where the frost is still melting off the lamppost in a perfect ring. He crouches. He touches the wet asphalt with two fingers. Then he looks north, up Broad, in your direction.

But you're just a silhouette in a crowd of silhouettes. He doesn't find you.

Not tonight.`,
    next: 'a3_jules'
  },
  a3_after_seen: {
    night: true,
    enter: g => { g.hidden('halcyon_heat', 2); g.know('halcyon_tablet_man', ['sam'], 'A calm man from Halcyon in a gray polo swept Broad Street with a tablet after the light. He photographed you.'); },
    text: g => `${g.f('after') === 'handoff' ? 'You flag down the ambulance. The EMT wants to know who you are and whether you saw it happen, and the questions keep coming, and you\'re stuck, smiling and bleeding and nodding.' : 'You try to drift into the crowd, but your legs are jelly and your nose is a faucet, and you stumble on the curb in front of everybody.'}

Tablet Guy is right there.

He doesn't grab you. He doesn't say anything. He just lifts the tablet, the camera side, and takes your picture. It's polite, like a tourist. The little artificial shutter sound is somehow the loudest thing on Broad Street.

TABLET GUY: Get that nose looked at, son.

Then he walks on, sweeping, sweeping, as if he got what he came for.`,
    next: 'a3_jules'
  },

  a3_jules: {
    night: true,
    loc: 'LIACOURAS WALK · TEMPLE UNIVERSITY',
    clock: { time: '12:26 AM' },
    enter: g => { g.heal('frostnip'); },
    text: g => `You walk the bike home because you don't trust yourself to ride it. Your hands won't stop shaking. Every few steps the world seems to *hitch*, a hiccup in the corner of your eye, like the city's a video buffering. You eat both granola bars from the bottom of the pizza bag and the emergency Tastykake you keep for emergencies, and you're still starving.

Liacouras Walk is a sea of phone flashlights. The concert stopped mid-song when the power went, and now two thousand students are milling around in the dark, looking up at the colors folding across the sky and talking about it in hushed, thrilled voices, the way people talk at a fire.

And there, on the curb outside the bubble-tea place, you see them.

Simone is crouched on the sidewalk, holding Jules's hand in both of hers. Jules is sitting very straight on the curb with her knees together, perfectly still, staring at nothing.

All around her, in a rough circle on the pavement, is glass.

The whole front window of the bubble-tea place, a pane the size of a garage door, has come down. It blew out in the Hitch, everybody will say later, from the pressure change, the heat, the cold. It's in ten thousand pieces across the sidewalk, glittering in the flashlights. And in the center of it there's a clean space, maybe three feet across, without a single shard. She's sitting right in the middle of it.

Simone sees you and her eyes go huge.

simone: Sam. *Sam.* It came down right on her. The entire window. I *watched* it. And every piece missed her. Every piece. Look at it. *Look at it.*

Jules doesn't look up. Up close, you can see she's shaking. It's tiny and constant, like a phone set to vibrate. There's a single drop of blood on the back of her hand, maybe a nick, and she keeps looking at it like it belongs to someone else.

She says, very quietly, to nobody:

jules: I was counting the bass. Four to a bar. One of them didn't happen.

You did feel it. You felt more than that. You were *inside* the skip, walking around in it.

sam: Transformer, probably. Happens.

It's the first lie you tell her.`,
    choices: [
      { text: 'Sit down next to her on the curb. Don\'t say anything. Just be there.', tag: 'Stay close',
        fx: g => { g.flag('curb', 'sat'); g.bond('jules', { trust: 1, affection: 1, tension: 1 }); }, go: 'a3_jules_sat' },
      { text: 'Make her laugh. That\'s what you\'re for. That\'s what you do.',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Get a laugh', near: ['jules'], on: { strong: 'a3_jules_laugh', weak: 'a3_jules_laugh_weak', miss: 'a3_jules_laugh_miss' } },
        fx: g => g.flag('curb', 'joke') },
      { text: 'Crouch down and check her hand. Make sure she\'s actually okay.',
        check: { kind: 'd20', attr: 'wits', skill: 'medicine', dc: 11, label: 'Check her over', on: { crit: 'a3_jules_check', success: 'a3_jules_check', fail: 'a3_jules_check_bad', fumble: 'a3_jules_check_bad' } },
        fx: g => g.flag('curb', 'checked') }
    ]
  },
  a3_jules_sat: {
    night: true,
    text: `You sit down on the curb next to her, at the edge of the clean circle, careful of the glass. You don't touch her. You don't say anything. Up above, the sky folds green over violet over green.

Thirty seconds. A minute. Simone looks between the two of you and, for once in her life, says nothing at all.

Then Jules says, without looking at you:

jules: You're bleeding.

Your nose. You forgot. You wipe it with the back of your hand and make it so much worse.

She reaches into the little bag she's carrying and takes out a handkerchief. It's an actual cloth handkerchief, white, ironed, with three initials stitched in the corner in navy thread: **JLP**. She holds it out without turning her head.

sam: I'm not gonna bleed on your—

jules: Take it.

You take it. You hold it to your nose. It smells like her bag, like cedar and something expensive.

jules: Keep it. I don't want it back.

You don't know yet that that's the nicest thing she's said to anyone in a week.`,
    next: 'a3_jules_end'
  },
  a3_jules_laugh: {
    night: true,
    enter: g => g.bond('jules', { affection: 2, tension: 1 }),
    text: `You crouch down at the edge of the clean circle and survey the destruction with the grave face of a home inspector.

sam: Okay. So. I'm not saying the bubble tea place is a front. I'm just saying nobody's ever *bought* a bubble tea there. And now this. Feels like insurance.

Simone snorts so hard she has to let go of Jules's hand.

And Jules laughs.

It isn't much: one breath, out through her nose, and a crack in her composure that's there and gone. But it's a real laugh. It's the first one you've gotten out of her, and you feel it in your chest like a fist unclenching.

She looks at you then, like she's annoyed it worked.

jules: You're bleeding.

Your nose. You'd forgotten. She reaches into her little bag and takes out a white handkerchief, an actual cloth one, ironed, with **JLP** stitched in the corner in navy thread.

jules: Here. Keep it.`,
    next: 'a3_jules_end'
  },
  a3_jules_laugh_weak: {
    night: true,
    enter: g => { g.bond('simone', { affection: 1 }); },
    text: `sam: Okay, so I'm not saying the bubble tea place is a front, but—

Simone cracks up. Jules doesn't. She just looks at you, and then at the blood running down your lip.

jules: You're bleeding.

She takes a white handkerchief out of her bag, ironed, with **JLP** stitched in the corner, and holds it out without a word. You take it. It smells like cedar.

jules: Keep it.`,
    next: 'a3_jules_end'
  },
  a3_jules_laugh_miss: {
    night: true,
    enter: g => { g.bond('jules', { tension: 1 }); },
    text: `sam: So, uh, bright side, you're getting your daily glass intake—

jules: Read the room, Kearney.

She doesn't even look at you when she says it. It lands like a slap.

Then she looks at you, and her face changes.

jules: …You're bleeding.

She hands you a white handkerchief from her bag, ironed, with **JLP** stitched in the corner, and holds it there until you take it.

jules: Keep it. I don't want it back.`,
    next: 'a3_jules_end'
  },
  a3_jules_check: {
    night: true,
    enter: g => g.bond('jules', { trust: 2 }),
    text: g => `You crouch at the edge of the clean circle.

sam: Can I see?

She doesn't answer. But she holds out her hand, the one with the nick on it, and lets you turn it over in the flashlight. ${g.f('origin') === 'caretaker' ? 'You\'ve done this a hundred times for Nonna: the quick look, the gentle pressure, the voice that says *it\'s nothing, it\'s nothing*.' : 'You don\'t really know what you\'re doing, but you\'ve watched Ma do it on every scraped knee on Mifflin Street.'} It's nothing. It's a paper cut, barely. Out of ten thousand pieces of glass, one touched her, and it barely touched her.

sam: You're okay. You're okay. It's nothing.

She takes her hand back slowly.

jules: You're bleeding.

Your nose, of course. She hands you a white handkerchief, ironed, with **JLP** stitched in navy in the corner.

jules: Keep it.`,
    next: 'a3_jules_end'
  },
  a3_jules_check_bad: {
    night: true,
    text: `You crouch down and reach for her hand, and she pulls it back, not hard, just firmly, like a cat deciding it doesn't want to be held.

jules: I'm fine.

sam: You're shaking.

jules: So are you.

You are. You hadn't noticed. She looks at your face, and something changes in hers.

jules: You're bleeding.

She gives you a white handkerchief, ironed, with **JLP** stitched in the corner.

jules: Keep it. I don't want it back.`,
    next: 'a3_jules_end'
  },
  a3_jules_end: {
    night: true,
    enter: g => {
      g.know('jules_glass', ['sam', 'simone', 'jules'], 'The window came down on Jules in the Hitch, and every piece of glass missed her.');
      g.know('jules_handkerchief', ['sam', 'jules'], 'You have Jules\'s handkerchief: white, ironed, JLP in navy thread. "Keep it."');
      g.heat('simone', 1);
      g.know('jules_changed', ['jules'], 'Jules was changed in the Hitch.');
    },
    text: g => `Simone is looking at you. Not at your nose, at your *face*. She has a look like someone doing math on a napkin.

simone: Why is *your* nose bleeding, Salvatore?

sam: Heat.

simone: Mm.

She doesn't push. Not tonight. But you see her take out her phone and type something into the Notes app, quick and private, and put it away.

A little after one, the power comes back on all at once, the whole of North Philly lighting up block by block like somebody running a hand down a piano. Two thousand people cheer. The colors in the sky are fading. Jules stands up out of the circle of glass, careful, careful, and Simone takes her arm, and they walk back toward Cardone together.

At the corner, Jules looks back once. You can't tell whether she's looking at you or at the empty circle where she was sitting.

You stand there holding her handkerchief to your face. Your phone is vibrating so hard it's practically walking out of your pocket: twenty-three missed calls from Ma, nine from Gigi, one from Mikey, one from Vinnie.

One text from Nonna, who doesn't text. Who has never, in your entire life, sent a text.

${g.f('jacket') ? 'TXT nonna: you wore it' : 'TXT nonna: next time you wear it'}`,
    next: 'a4_morning'
  }
});
