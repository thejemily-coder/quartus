/* S1 · E7 · DEBT SERVICE, part 2 of 3: Act Two ("Saturday Is Saturday"), Act Three ("Under 95"). */
EH.scenes('s01e07', {

  /* ================= ACT TWO: SATURDAY IS SATURDAY ================= */
  a2_saturday: {
    card: { kind: 'act', label: 'Act Two', title: 'Saturday Is Saturday' },
    loc: 'CARDONE HALL · ROOM 9-14',
    clock: { day: 'Sat', date: 'Oct 17', time: '2:15 PM' },
    enter: g => { g.sleep(6); },
    text: g => `You call Pop four times on Saturday. He doesn\'t pick up. The fifth time, it goes straight to voicemail. *You\'ve reached Frank Kearney, Liberty Cab, leave a message, God bless.*

You call Ma. You say you\'re just checking in. She says Pop\'s sleeping, he\'s doing a double tonight, the convention. She says it normally. Then she says, *Salvatore, what\'s wrong*, in the voice, and you say *nothing, Ma*, and she lets it go, and you know she didn\'t.

At 2:15, your phone buzzes.

TXT bree: wawa
TXT bree: teddy took a job
TXT bree: from south philly guys. fancy car. a guy with a jacket
TXT bree: its tonight. hes being weird. he wont look at me
TXT bree: i heard him on the phone. i hear everything. "a cab. under 95. delaware ave at snyder. 10:30. i just hold it"
TXT bree: heck says ur not supposed to know. im telling u anyway
TXT bree: i dont like it

You read it three times.

*A cab. A friend who keeps things still.*

${g.f('ciro7') === 'read' ? 'Dante, at the counter: *My friend\'s very good at keeping things still while people talk.*' : 'Dante, at the counter: *Saturday is Saturday.*'}

You sit down on your bed. Across the room, Nik looks up from his laptop and sees your face and takes his headphones off.

nik: What.

You show him. He reads it. He reads it again.

nik: Your dad drives a cab.

sam: Yeah.

nik: *Oh*. Oh no.`,
    choices: [
      { text: 'Text Teddy. *dont do it. its my father. frank kearney is my father.*', tag: 'Tell Teddy',
        fx: g => { g.flag('teddy7', 'told'); g.know('sam_name', ['teddy', 'bree'], 'Teddy knows your name now. Sam Kearney. Frank Kearney\'s son.'); }, go: 'a2_teddy_told' },
      { text: 'Text Teddy. *dont take this job. please.* Nothing else.', tag: 'Just ask',
        fx: g => { g.flag('teddy7', 'asked'); }, go: 'a2_teddy_asked' },
      { text: 'Don\'t text anyone. Just be there at 10:30.', tag: 'Just go',
        fx: g => { g.flag('teddy7', 'none'); }, go: 'a2_nik' }
    ]
  },
  a2_teddy_told: {
    text: `TXT sam: dont do it. its my father. frank kearney is my father.

The dots appear immediately. Then they disappear. Then nothing, for a long time. Twenty minutes. Half an hour.

Then:

TXT teddy: i didnt know
TXT teddy: i swear to god i didnt know. they gave me a name and a cab number. i didnt know your name. i never knew your name
TXT teddy: listen
TXT teddy: my mom goes on the list or she doesnt. 40k. thats the number. i dont get another number
TXT teddy: im sorry cold guy
TXT teddy: sam

That\'s all. He doesn\'t say he won\'t. He doesn\'t say he will.`,
    next: 'a2_nik'
  },
  a2_teddy_asked: {
    text: `TXT sam: dont take this job. please.

TXT teddy: listen. i dont have a choice
TXT teddy: nobody gets hurt. i just hold a cab. guy talks to another guy. done
TXT teddy: stay out of it cold guy. its not your business

You stare at *its not your business* for a long time.`,
    next: 'a2_nik'
  },
  a2_nik: {
    text: g => `Nik closes his laptop.

nik: Okay. Okay. So. Here\'s the thing. I\'m gonna say something, and you\'re not gonna like it.

sam: Nik.

nik: You\'re going. I know you\'re going. I\'m not stupid. It\'s your *dad*. I\'d go. I\'d go and I can\'t even do a pull-up.

He takes a breath.

nik: But it\'s been two weeks. Your temperature\'s normal. Your nose isn\'t bleeding. You haven\'t lost a single minute since the roof. ${g.S.drift >= 7 ? 'You\'re still high. You\'re still really high, Sam.' : 'You\'re *better*.'} If you go in there and Slip, I don\'t know what happens. Nobody knows. *Brannigan* knows, maybe, and that\'s the scariest sentence I\'ve ever said.

He holds up one finger.

nik: So go. But try everything else first. Talk. Punch. Yell. Call your brother. *Everything*. And Slip last.

He looks at you very seriously, the headlamp pushed up on his forehead, even though it\'s two in the afternoon.

nik: Also, you have a study date with Jules Pemberton at seven, and if you blow that off without telling her, she\'s going to kill you, and I\'m going to help.`,
    next: 'a2_study'
  },

  /* ---------- Study night ---------- */
  a2_study: {
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { time: '7:00 PM' },
    text: g => `She\'s already there when you come in, at the big table in the ninth-floor lounge, with two highlighters, a stack of index cards held with a binder clip, a thermos of tea, and every Calc problem set from the semester laid out in a grid like evidence at a trial.

She\'s wearing a gray cardigan and her hair is up in a pencil. ${g.f('roof_want') ? '' : ''}The pink-and-green bracelet is on her wrist.

jules: You\'re on time.

sam: I\'m always on time.

jules: You\'ve been on time twice since August. I wrote it down.

You sit. She slides an index card across the table. On it, in her perfect handwriting: *d/dx [sin(x²)]*.

jules: Go.

You look at it. Two weeks ago, you would have drawn a horse on it.

sam: Cos of x squared, times two x.

She looks at you. She looks at the card. She looks at you again.

jules: Who are you.

sam: ${g.f('pre_study') ? 'I went to the library yesterday. Two hours. The chain rule clicked.' : 'I don\'t know. It just made sense.'}

jules: *Clicked.*

She says it in a strange voice. She looks down at her cards. For a second you could swear her hand goes to her chest, to her breastbone, and then she puts it back on the table.

jules: Fine. Next one.

You study for two and a half hours. It\'s the best two and a half hours you\'ve had in a month. She\'s merciless and precise and twice she laughs, once at a dumb joke and once when you get an integral right and pump your fist like you hit a home run. At one point her foot is touching yours under the table. Neither of you moves it.

She doesn\'t mention the text. You don\'t mention the text. It sits on the table between you with the index cards, the biggest thing in the room.

At 9:40, your phone buzzes against your leg.

TXT bree: theyre leaving now
TXT bree: wawa please

Jules sees your face change. She puts down her highlighter.

jules: What is it.`,
    choices: [
      { text: '"I have to go. It\'s my father. I can\'t tell you more." Look at her when you say it.', tag: 'The truth',
        fx: g => { g.flag('bail', 'truth'); g.bond('jules', { trust: 1 }); g.know('jules_pop', ['jules'], 'Sam left the study night to help his father. He said he couldn\'t say more.'); }, go: 'a2_bail_truth' },
      { text: '"Nonna\'s sick. Ma called. I gotta go to South Philly." Lie. A good one.', tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['jules'], near: ['jules'], label: 'Lie to Jules', on: { strong: 'a2_bail_lie', weak: 'a2_bail_lie', miss: 'a2_bail_lie_bad' } } },
      { text: '"I got your text. Two weeks ago. I should have answered." Say that first. Then: "I have to go."', tag: 'The text',
        fx: g => { g.flag('bail', 'text'); g.bond('jules', { affection: 1, trust: 1 }); }, go: 'a2_bail_text' }
    ]
  },
  a2_bail_truth: {
    text: `sam: I have to go. It\'s my father. I can\'t tell you more.

You look at her when you say it. It\'s the hardest thing you\'ve done all day.

She looks back at you for a long moment. She doesn\'t ask. She looks at your hand on the table, nowhere near your ear.

jules: Is he in danger?

sam: …Yeah.

jules: Go.

You\'re standing. You\'re at the door.

jules: Sam.

You turn around. She\'s holding the index card. *d/dx [sin(x²)]*.

jules: You\'re going to pass on Monday. I\'m not going to let you not.

You go.`,
    next: 'a3_under95'
  },
  a2_bail_lie: {
    enter: g => { g.flag('bail', 'lie'); },
    text: `sam: Nonna\'s sick. Ma called. I gotta go to South Philly.

It\'s a good lie. Your hand stays on the table. Your voice stays steady. It\'s got a grandmother in it and a mother and a direction, and it\'s the kind of lie that would work on anyone.

Jules looks at you.

jules: Your grandmother.

sam: Yeah.

jules: Is sick.

sam: Yeah. I\'m sorry. I\'m really sorry, Pemberton, I wanted to—

jules: Go.

She says it flatly. She picks up her highlighter. She uncaps it and caps it again.

jules: Give her my love.

You go. You don\'t look back. If you\'d looked back, you\'d have seen her sitting perfectly still at the table with the highlighter in her fist, looking at the door, the way she looks at a card she knows is a bluff.`,
    next: 'a3_under95'
  },
  a2_bail_lie_bad: {
    enter: g => { g.flag('bail', 'lie'); g.bond('jules', { trust: -1 }); },
    text: `sam: Nonna\'s sick. Ma called. I gotta—

You stop. Your hand is on your ear. You don\'t remember putting it there.

Jules watches you take it down.

jules: Go.

sam: Jules—

jules: I said go. Whatever it is. Wherever. You were always going to go.

She starts gathering the index cards into a neat stack, squaring the edges, very precisely.

jules: I\'ll be here.

She doesn\'t say for how long.`,
    next: 'a3_under95'
  },
  a2_bail_text: {
    enter: g => { g.know('sam_got_text', ['sam', 'jules'], 'Sam told Jules he got her text, "What if it was me," and that he should have answered.'); },
    text: `sam: I got your text. Two weeks ago. I should have answered.

She goes completely still.

sam: I didn\'t know what to say. I typed like nine things. I didn\'t send any of them. I\'m sorry. That\'s not— you deserved an answer.

jules: …What were they?

sam: What?

jules: The nine things.

Your phone buzzes again against your leg. *wawa please.* You stand up.

sam: I have to go. It\'s my father. I can\'t— I\'ll tell you. The nine things. I\'ll tell you all nine. I promise. When I get back.

She looks up at you. Her face is doing something you\'ve never seen it do. It\'s open. Wide open, like a door.

jules: Go.

You go.

Behind you, very quietly, so quietly you almost don\'t hear it:

jules: I\'ll hold you to the nine.`,
    next: 'a3_under95'
  },

  /* ================= ACT THREE: UNDER 95 ================= */
  a3_under95: {
    card: { kind: 'act', label: 'Act Three', title: 'Under 95' },
    night: true,
    loc: 'DELAWARE AVE & SNYDER · UNDER I-95',
    clock: { time: '10:31 PM' },
    text: g => `${g.f('costume') === 'hoodie' || !g.f('costume') ? 'Black hoodie. Gaiter up to your eyes. Pop\'s Eagles cap, backward. *Pop\'s* cap.' : 'The costume. Your face covered.'} You ride the bike down Columbus Boulevard from Spring Garden, past the casinos and the big-box stores and the empty lots, with the river on your left black and wide, and under the highway at Snyder, in a gravel lot where the trucks park overnight between the concrete pillars of I-95, you find it.

A Liberty Cab. Yellow and green. **418** on the roof light. Pop\'s cab.

It\'s sitting perfectly still in the middle of the lot with the driver\'s door open. Not parked. *Stopped*, the way the armored car on Girard was stopped: dust motes frozen in the headlight beams, a moth hanging in the air an inch from the windshield, the exhaust from the tailpipe standing in a gray curl like a sculpture.

Teddy is standing beside it with his hand flat on the hood.

Twenty feet away, between the pillars, two men in dark jackets are holding your father by the arms. Pop\'s on his knees on the gravel. His good shirt is torn at the shoulder. There\'s blood on his lip.

Dante Iannucci is standing in front of him with his hands in the pockets of his beautiful jacket, talking. Calm. Reasonable. You can\'t hear what he\'s saying.

Behind them all, at the edge of the lot, the black Escalade, engine running. The driver\'s door is closed. You can see Vinnie\'s shape behind the wheel. He\'s not getting out.

${g.S.drift >= 7 ? 'Your fingertips are cold. They\'ve been cold since you got on the bike.' : 'Your hands are steady. Two weeks of sleep. Two weeks of being a person.'}

You leave the bike against a pillar and walk into the light.

Teddy sees you first. His face does something terrible. He doesn\'t take his hand off the cab.

Dante turns. He sees a kid in a hoodie with his face covered, walking toward him out of the dark under I-95, alone.

DANTE: Can I help you?`,
    choices: [
      { text: 'Walk past Dante. Straight to Teddy. "Let go of it, Teddy. That\'s my father."', tag: 'Teddy',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', bonus: 1, bonusLabel: 'He owes you Heck', label: 'Reach Teddy', on: { strong: 'a3_teddy_lets_go', weak: 'a3_teddy_weak', miss: 'a3_teddy_no' } } },
      { text: 'The two men holding Pop. Take them. Now. Before anybody decides anything.', tag: 'Fight',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 3, label: 'Two men, one of you', physical: true, power: true, on: { crit: 'a3_fight_win', success: 'a3_fight_win', partial: 'a3_fight_ugly', fail: 'a3_fight_lose', botch: 'a3_fight_lose' } } },
      { text: 'Walk to the Escalade. Knock on the driver\'s window. "Vin. I need you."', if: g => g.f('called_vinnie') || g.knows('sam_slip', 'vinnie'), tag: 'Vinnie',
        fx: g => { g.flag('vinnie7', 'asked'); }, go: 'a3_vinnie' },
      { text: 'Slip. Get Pop out of their hands and away before anyone sees you move.', slip: true, tag: 'Slip',
        fx: g => { g.flag('under95', 'slip'); if (g.S.drift >= 9) g.flag('unstick'); g.hidden('halcyon_heat', 1); }, go: 'a3_slip' }
    ]
  },

  a3_teddy_lets_go: {
    night: true,
    enter: g => { g.flag('under95', 'teddy'); g.flag('teddy_quit'); g.bond('teddy', { trust: 2, respect: 2 }); g.know('teddy_lost_40k', ['sam', 'teddy', 'bree', 'heck'], 'Teddy let go of Frank Kearney\'s cab under I-95 and walked away from the Iannucci job. $40,000 for his mother\'s transplant evaluation, gone.'); },
    text: g => `You walk past Dante like he isn\'t there. You walk right up to Teddy, at the cab, close enough to see the bandage on his hand and the sweat at his hairline in the cold.

sam: Let go of it, Teddy. That\'s my father.

${g.f('teddy7') === 'told' ? 'teddy: I know. You told me. I *know*.' : 'Teddy stares at you. Then at the man on his knees. Then at you again, at your eyes over the gaiter. And you watch him do the math.\n\nteddy: …Oh, God.'}

sam: You held Heck. In the fire. You burned your own hand holding him so they couldn\'t take him. You remember?

teddy: Don\'t.

sam: That\'s what you do. You hold on to people so nobody can take them. That\'s *you*. Not this.

His hand is shaking on the hood. The moth in the headlight beam trembles, just barely, like the air around it is trying to start again.

teddy: My mom, Sam.

sam: I know.

teddy: Forty thousand dollars.

sam: I know. I\'ll help. I don\'t know how. I\'ll help.

He looks at you for a long time over his own hand. Then he lifts it off the hood.

The world comes back to the cab. The moth flies into the windshield and bounces off. The exhaust curl breaks up and drifts. The engine, which was idling when Teddy touched it, picks up again in the middle of a cylinder, a rough cough and then the steady rumble.

teddy: Job\'s off, Mr. Iannucci.

Dante looks at Teddy. At you. Back at Teddy.

DANTE: Then you owe *me* the forty, Kowal. You understand that? You took my retainer.

teddy: Yeah. I understand.

Dante sighs, like a teacher with a disappointing class. He nods to his men. They let go of Pop. Pop sits back on his heels on the gravel, holding his ribs.`,
    next: 'a3_dante'
  },
  a3_teddy_weak: {
    night: true,
    enter: g => { g.flag('under95', 'teddy'); g.flag('teddy_quit'); g.bond('teddy', { trust: 1 }); g.injure({ id: 'cracked_ribs7', name: 'Cracked ribs', pen: 1, heal: 2, affects: ['body', 'reflex'] }); },
    text: `You walk past Dante, straight to Teddy.

sam: Let go of it, Teddy. That\'s my father.

You get the words out. That\'s all you get out, because one of Dante\'s men lets go of Pop and comes at you from the side, and he\'s big, and he\'s done this before, and he hits you in the ribs with something that isn\'t a fist. A sap. Leather and lead.

You go down on one knee on the gravel. Something cracks.

Teddy watches it happen. His hand is shaking on the hood.

And then he takes it off.

He lets go of the cab and walks over and puts his hand flat on the chest of the man standing over you, almost gently, and the man *stops*. Mid-swing. The sap frozen over his head, his face frozen in a grimace, a statue in a Members Only jacket.

teddy: Job\'s off, Mr. Iannucci.

DANTE: Kowal. You took my *retainer*.

teddy: I know.

He takes his hand off the man. The man finishes the swing into empty air and staggers. Dante holds up a hand. *Enough.* His other man lets go of Pop.`,
    next: 'a3_dante'
  },
  a3_teddy_no: {
    night: true,
    enter: g => { g.flag('teddy_refused'); g.bond('teddy', { tension: 2 }); },
    text: `You walk past Dante, straight to Teddy.

sam: Let go of it, Teddy. That\'s my father.

Teddy looks at you. He doesn\'t take his hand off the cab.

teddy: Listen. Listen to me. Nobody\'s getting hurt. I hold the cab, he talks, your dad agrees to something, everybody goes home. That\'s *it*, Sam. That\'s all it is.

sam: He\'s bleeding.

teddy: He fell.

sam: *Teddy.*

teddy: My mother is going to die without that money! Do you get that? You get to be the *hero*, you get to save people, because you don\'t *need* anything! Some of us *need* things!

He\'s crying. His hand stays on the cab.

You\'ve got seconds. You can see it in Dante\'s shoulders. He\'s decided you\'re a problem.`,
    choices: [
      { text: 'The two men holding Pop. Now.', tag: 'Fight',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 3, label: 'Two men, one of you', physical: true, power: true, on: { crit: 'a3_fight_win', success: 'a3_fight_win', partial: 'a3_fight_ugly', fail: 'a3_fight_lose', botch: 'a3_fight_lose' } } },
      { text: 'Slip. Nik said last. This is last.', slip: true, tag: 'Slip',
        fx: g => { g.flag('under95', 'slip'); if (g.S.drift >= 9) g.flag('unstick'); g.hidden('halcyon_heat', 1); }, go: 'a3_slip' }
    ]
  },

  a3_fight_win: {
    night: true,
    enter: g => { g.flag('under95', 'fight'); g.injure({ id: 'split_brow7', name: 'Split eyebrow', pen: 0, heal: 2 }); },
    text: `You don\'t stop to think. You hit the first one before he knows you\'re coming, a hook to the kidney from behind, the dirtiest punch Vinnie ever taught you, and he folds and lets go of Pop\'s arm.

The second one is faster. He gets a hand on your hood and a fist into your eyebrow, and the world goes white on one side, and you feel the skin split. You get your forehead into his nose. You hear it go. He sits down on the gravel holding his face.

It\'s over in nine seconds. Real fights take nine seconds.

Pop is on his hands and knees on the gravel between the two men, looking up at you. Blood from your eyebrow is running into your gaiter.

Teddy is still standing by the cab with his hand on the hood, staring at you. Then, slowly, deliberately, he takes it off.

teddy: Job\'s off, Mr. Iannucci.`,
    next: 'a3_dante'
  },
  a3_fight_ugly: {
    night: true,
    enter: g => { g.flag('under95', 'fight'); g.injure({ id: 'cracked_ribs7', name: 'Cracked ribs', pen: 1, heal: 2, affects: ['body', 'reflex'] }); g.injure({ id: 'split_brow7', name: 'Split eyebrow', pen: 0, heal: 2 }); },
    text: `You take the first one from behind and he goes down. The second one gets you. A sap, leather and lead, into your ribs, and you feel them go. You get your forehead into his nose anyway. You both go down on the gravel.

You get up first. Barely.

The second man is getting up too. And behind him, Dante has taken his hand out of his jacket pocket, and there\'s something in it, small and black and matte, pointed at the ground. Not at you. Not yet.

Then Teddy takes his hand off the cab and walks over and puts it flat on Dante\'s wrist.

Dante\'s hand stops. The gun stops. Dante\'s whole arm stops, from the elbow down, a statue\'s arm on a living man. He looks at it in disbelief.

teddy: Job\'s off, Mr. Iannucci.`,
    next: 'a3_dante'
  },
  a3_fight_lose: {
    night: true,
    enter: g => { g.flag('under95', 'fight_lost'); g.injure({ id: 'cracked_ribs7', name: 'Cracked ribs', pen: 1, heal: 2, affects: ['body', 'reflex'] }); g.injure({ id: 'concussion7', name: 'Concussion', pen: 1, heal: 1, affects: ['wits'] }); },
    text: `You go for the first one, and he\'s ready for you. He\'s been ready for you since you walked out of the dark. He hits you with a sap, leather and lead, behind the ear, and the gravel comes up and hits you in the face.

You hear Pop yell. You hear your own name. *Sam!* Not *kid*. *Sam.* He knows. He saw you go down and he *knows*.

You try to get up. The world tilts like a boat.

Somebody puts a hand on your back. It\'s warm and steady. It\'s Teddy. He\'s crouched over you, his hand flat between your shoulder blades, and everything around the two of you is stopped, the gravel, the dust, the man with the sap mid-step. *Stopped*. He\'s holding the space around you still with his other hand on the man\'s chest.

teddy: Stay down. *Stay down*, Sam.

He stands up. He takes his hand off the man with the sap, who stumbles, confused.

teddy: Job\'s off, Mr. Iannucci.`,
    next: 'a3_dante'
  },

  a3_vinnie: {
    night: true,
    enter: g => { g.bond('vinnie', { trust: 3, affection: 2 }); g.flag('vinnie_stood'); g.know('vinnie_stood', ['sam', 'vinnie', 'dante'], 'Under I-95, Vinnie got out of Dante\'s Escalade and stood with you. In front of Dante.'); },
    text: g => `You don\'t go to Dante. You don\'t go to Teddy. You walk to the Escalade, past everyone, and you knock on the driver\'s window with one knuckle, twice, the way you used to knock on his bedroom window when you were eleven.

The window comes down.

Vinnie looks at you. At the gaiter. At the cap. At your eyes.

vinnie: Sally.

sam: Vin. I need you.

He looks past you, through the windshield, at Pop on his knees on the gravel. He looks for a long time. His hands are at ten and two on the wheel. His knuckles are white.

vinnie: You know what you\'re asking me.

sam: Yeah.

vinnie: You know what it costs.

sam: Yeah.

He closes his eyes. He breathes in. He breathes out.

Then he turns off the engine, and gets out of the car, and walks across the gravel under I-95 in his two-hundred-dollar Jordans and his leather jacket, and stands next to you.

vinnie: Dante. That\'s Frank Kearney. That\'s my *uncle*. I grew up in his kitchen. Mrs. K fed me every Sunday of my life.

DANTE: Vincenzo. Get back in the car.

vinnie: No.

The word sits there in the cold under the highway.

vinnie: You want to talk to Frank, you talk to Frank. You don\'t put him on his *knees*. Not in front of me. I don\'t care what he owes. Not in front of me.

Dante looks at Vinnie for a very long time. He looks at him the way you\'d look at a piece of furniture that just told you no.

Then he laughs. Softly.

DANTE: Okay, Vincenzo. Okay. Loyalty. My grandfather loves loyalty.

He nods to his men. They let go of Pop.

Teddy, by the cab, looks at Vinnie, and at you, and takes his hand off the hood.

teddy: Job\'s off.`,
    next: 'a3_dante'
  },

  a3_slip: {
    night: true,
    text: g => `You step through.

${g.f('unstick') ? 'And something goes wrong.' : 'The lot stops.'}

${g.f('unstick') ? `It\'s cold, colder than it\'s ever been, January, February, the dead heart of the year, and the world stops around you the way it always does: the dust, the men, the moth, Pop\'s face.

Then you try to step back out, and you can\'t.

You try again. It\'s like pushing on a wall. Like the surface of the pool has frozen over above you, and you\'re underneath it, and you can see the light through the ice, and you can\'t get *up*.

You don\'t know how long you\'re in there. There\'s no way to know. Nothing moves. You walk. You walk to Pop and you pull him out of the men\'s hands, gently, and you walk him all the way to the other side of the lot and set him down against a pillar, kneeling, still frozen, and then you try to step out again, and you can\'t.

You sit down on the gravel. You wait. You get hungry. Then you get past hungry, into a place that\'s cold and clear and enormous.

You walk to the river. The Delaware is stopped, a sheet of black glass with the lights of Camden frozen on it. You walk back. You count the pillars under 95. Two hundred and twelve, between Snyder and Oregon. You count them again.

And on the third count, you find footprints in the frost on the gravel. Not yours. Bigger than yours, a little. The same stride. Walking away from you, toward the river, and stopping at the water\'s edge, as if whoever made them stepped onto the stopped Delaware and kept going.

Nonna, at her kitchen window: *If you ever see somebody else moving in there, somebody who shouldn\'t be, you come out.*

You can\'t come out.

You put your back against a pillar and close your eyes and you think about the warmest thing you know, which is, it turns out, a girl\'s foot touching yours under a study table, and you *pull*, the way you pulled the hook back out of your cheek in Kensington, and the ice cracks.

You come out on your knees, gasping, beside your father.` : `It\'s January in there. The dust hangs in the headlights. Dante\'s mouth is open on a word. The two men holding Pop have their fingers sunk in his arms.

You walk over. You peel their fingers off him one by one. You get your arms under your father\'s, the way he used to get his under yours when you fell asleep in the cab as a kid, and you lift him, and you walk him all the way across the gravel to the far pillar, and you set him down against it, sitting.

You stand there in the stopped cold and look at him. His lip is split. His eyes are open, looking at where the men were. He\'s fifty-two years old. He looks seventy.

You step back out.`}

Time comes back. The two men are holding nothing. They stumble into each other. Dante turns, looking for Pop, and finds him forty yards away against a pillar, gasping, holding his ribs, staring at the kid in the hoodie standing next to him.

Your nose is pouring.

Teddy, by the cab, has seen it. He\'s seen it before. He closes his eyes, and lifts his hand off the hood.

teddy: Job\'s off, Mr. Iannucci.`,
    enter: g => { if (g.f('unstick')) { g.drift(1); g.hidden('revenant_drift', 1.5); g.injure({ id: 'hypothermia7', name: 'Slip-cold (hypothermia)', pen: 1, heal: 1, affects: ['body', 'reflex', 'wits'] }); g.know('unstick', ['sam'], 'Under I-95 you got stuck in the Slip. You couldn\'t get out. You found someone else\'s footprints in the frost, walking onto the stopped Delaware. You pulled yourself out thinking about Jules.'); } g.know('slip_rescue_pop', ['sam'], 'You Slipped and carried Pop away from Dante\'s men under I-95.'); },
    next: 'a3_dante'
  },

  a3_dante: {
    night: true,
    clock: { time: '10:52 PM' },
    enter: g => { g.flag('teddy_quit'); g.know('teddy_lost_40k', ['sam', 'teddy', 'bree', 'heck'], 'Teddy let go of Frank Kearney\'s cab under I-95 and walked away from the Iannucci job. $40,000 for his mother\'s transplant evaluation, gone.'); g.know('dante_thanksgiving', ['sam', 'frank', 'teddy'], 'Dante Iannucci: "Forty-one thousand. Thanksgiving. Or we have this conversation again, with the whole family at the table."'); },
    text: g => `Dante takes it all in. His men. Teddy. ${g.f('vinnie_stood') ? 'Vinnie, standing next to you. ' : ''}${g.f('under95') === 'slip' ? 'Frank Kearney, forty yards away, against a pillar, where nobody put him.' : 'Frank Kearney, on his knees on the gravel, free.'} And you, in your hood, with your face covered.

He doesn\'t look angry. That\'s the thing about him. He looks *interested*.

DANTE: Okay. Okay. So tonight\'s not the night.

He walks over to Pop, unhurried, and crouches down in front of him, and straightens the torn collar of Pop\'s shirt with two fingers, like a son fixing his father\'s tie at a wedding.

DANTE: Forty-one, Frank. Thanksgiving. That\'s very generous, and you know it is. My grandfather says Thanksgiving, because family\'s important, and he wants you to have one more with yours.

He stands. He looks at you, in your hood.

DANTE: And you. I don\'t know who you are. But I know this neighborhood, and I\'m going to find out, and when I do, you and I are going to be friends. Everybody in this city ends up friends with my family, one way or the other.

He walks back to the Escalade. ${g.f('vinnie_stood') ? 'He stops beside Vinnie.\n\nDANTE: You drive me home, Vincenzo. We\'ll talk on the way.\n\nVinnie looks at you. Then he gets back in the driver\'s seat. You don\'t know if you\'ll ever see him again as the person who got out of that car.' : 'He gets in the back. The Escalade pulls out from under the highway, Vinnie at the wheel, eyes front.'} His men follow, one of them holding his nose.

${g.f('teddy_quit') || g.f('under95') ? 'Teddy stands by the cab for a second. He looks at you.\n\nteddy: I\'m going home to tell my mother. Don\'t follow me.\n\nHe walks away under the highway, toward Snyder, alone, with his bandaged hand in his pocket.' : ''}

And then it\'s just you and your father, under I-95, in the dark, with his cab idling and the river going by.`,
    next: 'a3_pop'
  },

  a3_pop: {
    night: true,
    text: g => `Pop gets up. Slowly. He\'s holding his ribs, and his lip is bleeding into his collar, and he walks over to you, across the gravel, one step at a time.

He stops in front of you. Close. You\'re the same height now. You\'ve been the same height since you were sixteen, and he still looks bigger.

He looks at you. At the hood. The cap. *His* cap, backward. At your eyes over the gaiter.

frank: …Kid?

${g.f('under95') === 'fight_lost' ? 'He already knows. He heard himself yell *Sam*. He watched you go down.' : 'You don\'t say anything.'}`,
    choices: [
      { text: 'Pull the gaiter down. Let him see your face.', tag: 'Show him',
        fx: g => { g.flag('pop_knows'); g.know('sam_slip', ['frank']); g.know('sam_blur_pop', ['sam', 'frank'], 'Pop saw your face under I-95. He knows you\'re the Blur.'); g.bond('frank', { trust: 3, affection: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_pop_show' },
      { text: 'Don\'t. Turn around. Get on the bike. Go.', if: g => g.f('under95') !== 'fight_lost', tag: 'Leave',
        fx: g => { g.flag('pop_knows', 'suspects'); g.bond('frank', { tension: 1 }); }, go: 'a3_pop_leave' }
    ]
  },
  a3_pop_show: {
    night: true,
    text: `You pull the gaiter down.

He looks at your face for a long time. Your father. In the light of his own headlights, under the highway, with the river going by.

He doesn\'t say anything. He doesn\'t ask. He reaches out, and puts his hand on the back of your neck, the way he did when you were small and fell asleep in the front seat of the cab, and pulls your forehead against his.

frank: Okay. Okay, kid.

His voice is shaking. You\'ve never heard it shake.

frank: The bus. On Spring Garden. That was you.

sam: Yeah.

frank: Your mother\'s gonna kill both of us.

You laugh. It comes out wet. He laughs too, holding his ribs, and then he\'s not laughing, and neither are you, and you stand there under I-95 with your foreheads together for a long time.

frank: I\'m sorry, kid. Forty-one thousand. 2009. I had a bad year. I had a bad few years. Your mother doesn\'t know. Nobody knows. I thought I could—

sam: I know, Pop.

frank: I\'m gonna fix it.

sam: *We\'re* gonna fix it.

He pulls back and looks at you. He wipes his lip with the back of his hand.

frank: Don\'t tell your brother. About any of it. About *you*. You hear me? He\'s a cop, Sam. He\'d have to choose. Don\'t make him choose.

He gets in his cab. He rolls down the window.

frank: Get in. I\'ll drive you home. It\'s a long way on a bike.

You put the bike in the trunk. You ride up Columbus Boulevard in the front seat of your father\'s cab, the way you did when you were six, and neither of you says anything, and the meter isn\'t running, and it\'s the best ride of your life.`,
    next: 'a4_covering'
  },
  a3_pop_leave: {
    night: true,
    text: `You don\'t say anything. You turn around and walk to your bike and get on it.

frank: *Kid.*

You don\'t stop. You ride out from under the highway into the cold, up Columbus Boulevard, and you don\'t look back, because if you look back he\'ll see you, and he\'ll *know*, and you can\'t do that to him tonight, not on top of everything.

Behind you, you hear his voice once more, over the noise of the traffic above:

frank: Your cap\'s on backward.

You ride faster.`,
    next: 'a4_covering'
  }
});
