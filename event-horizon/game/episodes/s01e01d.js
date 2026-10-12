/* S1 · E1 · PILOT, part 4 of 4: Act Four ("Wawa Guy") and the Tag. */
EH.scenes('s01e01', {

  a4_morning: {
    card: { kind: 'act', label: 'Act Four', title: 'Wawa Guy' },
    loc: 'CARDONE HALL · ROOM 9-14',
    clock: { day: 'Sun', date: 'Aug 23', time: '6:08 AM' },
    enter: g => { g.sleep(3); },
    text: g => `You barely sleep. You lie on the bare mattress with Jules's handkerchief in your fist and watch the ceiling, and everything is wrong in a way you can't name.

You called Ma back at 1:30 and let her cry at you for forty minutes. You told her you were at the concert, nowhere near Spring Garden, totally fine. ${g.f('after') === 'stayed' ? 'You know it won\'t hold. That cop from the 6th District is going to tell Mikey, and Mikey is going to tell Ma, and you\'ll have to have the conversation again with a different lie in it.' : 'It\'s the second lie in two hours. You\'re starting to notice them stacking up, like plates.'}

Around five, the faucet in the corner sink starts dripping. You watch a drop gather on the lip of the tap. It swells, it hangs, it lets go.

It falls *slowly*.

Not slow motion, exactly. It falls at the speed you're *paying attention to it*. When you focus, it drifts down like a feather. When you blink, it's gone. Your heart is going hard. You do it again with the next drop. And the next.

At 6:08, Nik's alarm goes off. His phone, buzzing on his desk across the room, shimmies right to the edge and tips over.

You catch it.

You're standing at Nik's desk holding Nik's phone a half inch above the floor. You were in your bed. Your bed is across the room. You were *in your bed*.

Nik sits up. He doesn't have his glasses on. He squints at the blurry shape of you standing over his desk.

nik: …Bro? Were you just… over there?`,
    choices: [
      { text: 'Tell him. All of it. The light, the bus, the cold. You can\'t carry this alone.', tag: 'Tell Nik',
        fx: g => { g.flag('nik_told', 'told'); g.know('sam_slip', ['nik']); g.bond('nik', { trust: 3, affection: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_tell' },
      { text: 'Lie. "I was getting water. You were dreaming, man."',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to Nik', on: { strong: 'a4_lie_strong', weak: 'a4_lie_weak', miss: 'a4_lie_miss' } },
        fx: g => g.flag('nik_told', 'lied') },
      { text: '"Go back to sleep, Nik." Put the phone down. Get out of the room before you have to answer anything.', tag: 'Not yet',
        fx: g => { g.flag('nik_told', 'waited'); g.heat('nik', 1); }, go: 'a4_wait' }
    ]
  },
  a4_tell: {
    text: `You sit down on the end of his bed. You don't plan the words. They just come out, in order: the Halcyon screen, the light, the rain that hung in the air, the cold. The bus. The boy. The way the world tore and ran backward. *No. Again.*

You keep waiting for him to laugh.

Nik puts his glasses on. He takes them off. He cleans them on his taco boxers. He puts them back on. Then he looks at you for a long, long time, and you watch eighteen years of comic books, video games, and late-night Wikipedia holes assemble themselves behind his eyes into one gigantic, shaking, incandescent idea.

nik: Okay. Okay. Okay okay okay. So. First: I believe you. Second: my hands are doing a thing, ignore the hands, the hands are unrelated, the hands are a *me* thing. Third—

He grabs your wrist like a doctor taking a pulse.

nik: Third. You need a guy.

sam: A guy?

nik: A *guy in the chair*. Every— Okay, every single one of these, there's a guy. Who's in a chair. With computers. And he's like, *"Take a left, there's a guard,"* and he's always, like, the comic relief, but secretly he's the heart of the whole thing, and he never gets the girl until season four. Sam. Sam, look at me. I've been training for this my *entire life* and I didn't know it.

His eyes are full of tears. He's dead serious.

nik: Please let me be your guy.`,
    choices: [
      { text: '"Yeah. Yeah, Nik. You\'re my guy."', fx: g => { g.bond('nik', { affection: 2, trust: 1 }); g.flag('nik_guy'); g.recap('You told Nik everything. He wants to be your guy in the chair.'); }, go: 'a4_test' },
      { text: '"This isn\'t a comic, man. Somebody almost died." (But let him come.)', fx: g => { g.bond('nik', { respect: 1, tension: 1 }); g.flag('nik_guy', 'reluctant'); }, go: 'a4_test' }
    ]
  },
  a4_lie_strong: {
    enter: g => { g.heat('nik', 1); g.know('lied_nik', ['sam'], 'You lied to Nik about the Slip. He believed you.'); },
    text: `sam: Getting water, man. You were dreaming. Go back to sleep.

You say it easy and bored, with a big fake yawn at the end. You don't touch your ear. You think about your ear so hard you might pull a muscle.

Nik blinks at you, blind and trusting.

nik: …Okay. Yeah. I had the weirdest dream. You were, like, a *blur*. Like the Flash, but Catholic.

He flops back down. He's asleep in thirty seconds.

You stand there holding his phone. Somehow it's worse that it worked.`,
    next: 'a4_test'
  },
  a4_lie_weak: {
    enter: g => { g.heat('nik', 2); g.know('lied_nik', ['sam'], 'You lied to Nik about the Slip. He mostly believed you.'); },
    text: `sam: Getting water. You were dreaming.

nik: You don't have any water.

sam: I was *getting* it. That's what getting means.

Nik squints at you a beat too long. Then he puts his glasses on and looks at you for a beat longer.

nik: …Okay, bro.

He lies back down. He doesn't go back to sleep. You can hear him not sleeping all the way out the door.`,
    next: 'a4_test'
  },
  a4_lie_miss: {
    enter: g => { g.heat('nik', 3); g.bond('nik', { trust: -1 }); g.know('lied_nik', ['sam'], 'You lied to Nik about the Slip. He didn\'t buy it.'); },
    text: `sam: Getting water. You were dreaming, man.

Nik puts his glasses on. He looks at you. He looks at his phone in your hand. He looks at your bed, eleven feet away, the sheets still holding the shape of you.

nik: Your hand is on your ear.

It is. It *is*. Damn Juliet Pemberton to hell.

nik: Salvatore. My phone was falling. I heard it fall. It was *falling*, and then you were here.

sam: Go back to sleep, Nik.

He doesn't. He sits up in bed with his knees to his chest and watches you leave, and when you close the door you hear him say, very quietly, to nobody, *"…okay."*`,
    next: 'a4_test'
  },
  a4_wait: {
    text: `sam: Go back to sleep, Nik.

You set his phone gently on his desk, face down, like it's something that might go off. You grab your hoodie and your shoes and you're out the door before he can find his glasses.

In the hall the floor is silent, everyone sleeping off the night. Across the hall, under the door of 9-11, there's a line of light. It's six in the morning, and somebody in there never turned the lamp off.`,
    next: 'a4_test'
  },

  a4_test: {
    loc: 'GEASEY FIELD · TEMPLE UNIVERSITY',
    clock: { time: '6:41 AM' },
    enter: g => { if (g.f('nik_told') === 'told') g.flag('test_with_nik'); },
    text: g => `Geasey Field is empty at this hour, just the turf steaming in the early sun, a track around it, the city humming on the other side of the fence, and a lone groundskeeper on a riding mower way out at the far end, wearing headphones and minding his own business.

${g.f('test_with_nik') ? 'Nik is in the bleachers in a hoodie with three phones, a laptop, and a borrowed tripod. One phone is set to film at 240 frames per second. One is running a stopwatch. One is open to a Google Doc already titled **SAM: OBSERVATIONS (CONFIDENTIAL) (VERY CONFIDENTIAL)**.\n\nnik: Okay. Okay. Hundred meters. Just run. Like, normal-run first. And then less normal.' : 'You\'re alone. You set your phone against the fence, recording, and walk out to the hundred-meter line. You feel ridiculous, like a kid in the backyard playing a game nobody else can see.'}

${g.hurt('bruised_ribs') ? 'Your ribs grab every time you breathe in. ' : ''}You put your toe on the line. You take a breath.

You think about the cold.`,
    choices: [
      { text: 'Run. Just run, as fast as you can, and see what happens.',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, power: true, bonus: 1, bonusLabel: 'Adrenaline', label: 'Hundred meters', on: { crit: 'a4_run_crit', success: 'a4_run_good', partial: 'a4_run_partial', fail: 'a4_run_fail', botch: 'a4_run_fail' } } }
    ]
  },
  a4_run_crit: {
    enter: g => { g.mastery(4); g.flag('run', 'crit'); },
    text: g => `You go, and the world goes *thin*.

It isn't the full freeze from Saturday night. It's a gear between gears. The mower out at the end of the field slows to a crawl. A pigeon taking off from the fence hangs with its wings at the top of a stroke. The air presses against your face like water, then gives, then *parts*. Your feet barely kiss the turf.

You hit the far line and stop, and the world catches up with a sound like a door slamming down the hall.

${g.f('test_with_nik') ? 'nik: TWO POINT ONE SECONDS. TWO POINT ONE. Usain Bolt is NINE POINT FIVE EIGHT. I— Sam. On the 240 you don\'t even *move*. You\'re at one end and then you\'re at the other end and there\'s, like, a *smear*. Like a ghost. Like a ghost made of you.' : 'Your phone, when you check it, shows you standing on the start line for a frame, a smear like a ghost, and then you standing on the finish line. 2.1 seconds, give or take.'}

The pigeon lands on the fence. It looks offended.`,
    next: 'a4_test2'
  },
  a4_run_good: {
    enter: g => { g.mastery(3); g.flag('run', 'good'); },
    text: g => `You go. For the first twenty meters you're just fast, Neumann-Goretti fast, nothing special. Then something catches, like a bike chain finding a gear, and the world *thins*. The mower slows. The air goes thick, then parts.

You stop at the far line, breathing hard, and the world snaps back into place.

${g.f('test_with_nik') ? 'nik: Four point… four point *three*. Bro. That\'s twice as fast as Usain Bolt. That\'s… I need to sit down. I *am* sitting down. I need to sit down *more*.' : 'The video shows a blur where you should be. 4.3 seconds, give or take. More than twice as fast as anyone has ever run. You sit down on the turf for a while.'}`,
    next: 'a4_test2'
  },
  a4_run_partial: {
    enter: g => { g.mastery(2); g.pool('stamina', -1); g.flag('run', 'partial'); },
    text: g => `You go, and halfway down the track it kicks in, the thinning, the gear between gears, and then it *slips*. Your feet get ahead of the rest of you, and the world lurches, and you go down hard on the turf and roll three times like a dropped bag of groceries.

${g.f('test_with_nik') ? 'nik: You okay? YOU OKAY? That was eight seconds, which is still insane, but also you fell down like a baby giraffe.' : 'You lie on your back on the warm turf and laugh until it hurts. Eight seconds, the video says. A blur, and then a heap.'}`,
    next: 'a4_test2'
  },
  a4_run_fail: {
    enter: g => { g.pool('stamina', -1); g.flag('run', 'fail'); },
    text: g => `You run. You run as hard as you've ever run, every scrap of you, and the world stays stubbornly, normally the world. Eleven-point-something seconds. Good for a kid from Mifflin Street. Nothing for a miracle.

You stand at the far line with your hands on your knees, gasping.

${g.f('test_with_nik') ? 'nik: Okay. Okay, that\'s data too. Null results are still results. Science is mostly being wrong in a spreadsheet.' : 'Maybe you dreamed it. Maybe it was the heat. Maybe—'}

But when you close your eyes, you can still feel it, right there, like a word on the tip of your tongue. A door you know is in the wall, even if you can't see the handle.`,
    next: 'a4_test2'
  },
  a4_test2: {
    text: g => `Running isn't what happened Saturday night, though. Saturday night the world *stopped*. You walked around inside a single second like it was a room.

You stand on the line again. You think about the cold. You think about the drop of water from the faucet, falling at the speed of your attention.

It's right there. You can feel the edge of it, like the edge of a step in the dark.`,
    choices: [
      { text: 'Step through. On purpose this time. Between the seconds.', slip: true,
        fx: g => { g.flag('first_slip'); g.know('slip_rules', ['sam'], 'When you Slip: the world stops, it\'s freezing, you\'re starving after, and your nose bleeds.'); }, go: 'a4_slip' },
      { text: 'No. Not yet. Not until you understand what this is.', tag: 'Hold back',
        fx: g => { g.flag('first_slip', false); g.hidden('revenant_drift', -0.3); }, go: 'a4_noslip' }
    ]
  },
  a4_slip: {
    night: false,
    text: g => `You step.

There's no light this time, no colors, no tearing. It's just *quiet*. The mower stops mid-sputter. The pigeon on the fence is caught with one foot raised. Out on the field, the sprinkler heads have come on, and every arc of water is a frozen string of beads, glittering, each one holding a tiny upside-down copy of the sun.

It's cold again. Your breath smokes.

${g.f('test_with_nik') ? 'Nik is in the bleachers, mouth open mid-word, one hand raised, pointing at you. You walk over and look at him from a foot away. There\'s a single frozen tear halfway down his cheek, and under it he is grinning so hard it looks like it hurts.\n\nYou don\'t know why, but you take his hand and turn it so he\'s giving a thumbs-up. Then you walk back to the line.' : 'You walk across the frozen field and touch one of the beads of water. It bursts against your fingertip like a cold soap bubble.'}

Then it's like holding your breath underwater. Something in your chest starts to *pull*, and you know without being told that you can't stay. You step back.

!! ~WHUMP

The world comes back. Your nose is bleeding. You're so hungry your hands are shaking.

${g.f('test_with_nik') ? 'nik: —how did my hand— WHY IS MY HAND DOING THIS? SAM. SAM. DID YOU DO THIS?\n\nHe stares at his own thumbs-up like it\'s a live grenade.\n\nnik: Okay. Okay. You\'re not fast. You\'re not fast, Sam. Fast is— Fast is *moving* quicker. You\'re *between*. You\'re slipping between the frames. Like— like the frames of a movie, and you\'re in the black part in between, where nobody\'s looking.\n\nHe says it again, slowly, like he\'s tasting it.\n\nnik: *The Slip.*' : 'You lie down on the turf and look up at the sky and say it out loud, because you need to call it something, because otherwise it\'s too big.\n\nsam: The Slip.\n\nThat\'s what it feels like. Like slipping on a wet step, except you don\'t fall. You fall *through*.'}`,
    next: 'a4_test_end'
  },
  a4_noslip: {
    text: g => `You step back off the line.

${g.f('test_with_nik') ? 'nik: You\'re not gonna try?\n\nsam: Somebody almost got killed Saturday, Nik. I don\'t know what this is. I don\'t know what it costs.\n\nNik looks at you for a long moment, and then he closes his laptop.\n\nnik: …That\'s actually really smart. That\'s smarter than every single person in every single comic. They always just *jump*.' : 'You don\'t know what it is. You don\'t know what it costs. Saturday night a voice that sounded like yours said *No. Again*, and you don\'t know whose it was.\n\nYou\'re a Kearney. Kearneys jump. You don\'t jump.'}`,
    next: 'a4_test_end'
  },
  a4_test_end: {
    enter: g => { g.money(-12); if (g.f('test_with_nik')) g.know('nik_named_slip', ['sam', 'nik'], 'Nik named it: the Slip.'); },
    text: g => `On the way back, you eat three breakfast sandwiches from the food truck on 12th, then a fourth, while ${g.f('test_with_nik') ? 'Nik takes notes about the sandwiches in the Google Doc under a header titled CALORIC LOAD (???)' : 'the truck guy watches you with real concern'}.${g.f('first_slip') ? '\n\nBehind you, out on the field, the groundskeeper has stopped his mower. He\'s staring at the sprinklers. Every one of them, all down the field, is crusted with a thin white rime of frost, melting fast in the August sun.' : ''}`,
    next: 'a4_sunday'
  },

  /* ---------------- Sunday hub ---------------- */
  a4_sunday: {
    loc: 'SUNDAY · AUGUST 23',
    clock: { time: '11:30 AM' },
    text: g => `The city wakes up hungover from the Hitch. The Inquirer's website runs it top of the page: **"THE HITCH": BLACKOUT, SKY GLOW, AND A STRANGE SECOND OVER NORTH PHILADELPHIA**. Halcyon Dynamics has issued a statement about a "transformer cascade" and "atmospheric ionization." Two dead, one heart attack and one fall down a flight of stairs in the dark. Dozens hurt. Halcyon will "fully support affected residents." A city councilman is already holding a press conference about it in front of the Uptown Theater, because the cameras are already there.

${g.f('promise_sundays') ? 'Your phone buzzes.\n\nTXT gigi: sunday!!!!!!! u swore\nTXT gigi: on the EAGLES\nTXT gigi: nonna made the braciole' : 'Ma texts a photo of the gravy pot with no caption. It\'s a threat.'}

You have the rest of Sunday. Classes start tomorrow.`,
    hub: {
      slots: 2, label: 'Sunday, August 23',
      blurb: 'You\'re running on three hours of sleep. Choose carefully.',
      options: [
        { id: 'dinner', text: 'Sunday dinner on Mifflin Street. The whole family. Nonna\'s braciole.', cost: 2, tag: 'Family', go: 'a4_dinner' },
        { id: 'hospital', text: 'Temple University Hospital. Check on Carmen Torres.', cost: 1, tag: 'Carmen', if: g => g.f('carmen') !== 'safe', go: 'a4_hospital' },
        { id: 'nap', text: 'Sleep. Just sleep. Six hours, minimum.', cost: 1, tag: 'Rest', go: 'a4_nap' },
        { id: 'practice', text: 'The roof. Practice the Slip in private where nobody can see.', cost: 1, tag: 'Power', if: g => g.f('first_slip'), go: 'a4_practice' },
        { id: 'study', text: 'Read the first two chapters for ENG 0802 before anybody else does.', cost: 1, tag: 'Grades', go: 'a4_study' },
        { id: 'books', text: 'Temple bookstore. Buy the ENG reader and the Calc access code before Monday. ($96)', cost: 1, tag: 'Money', go: 'a4_books' }
      ],
      done: 'a4_sunday_after'
    }
  },
  a4_dinner: {
    loc: 'THE KEARNEY HOUSE · MIFFLIN STREET',
    enter: g => { g.meet('nonna'); g.meet('mikey'); g.bond('gigi', { trust: 1, affection: 1 }); g.bond('rosa', { affection: 1 }); g.money(-5); },
    text: g => `You take the Broad Street Line south, nine stops of humming orange seats and a guy selling phone chargers out of a duffel. You come up into South Philly sunlight at Tasker-Morris and walk the four blocks, and Mifflin Street is exactly the same as it was three days ago, which feels impossible. The same stoops, the same plastic chairs, the same Mrs. Iacobucci hosing down the same piece of sidewalk she's been hosing down since 1974.

Nonna is on the stoop. She watches you come down the block. She doesn't wave. She just stands up, slowly, holding the railing, and waits.

When you get to her, she takes your face in both hands, the melon check, and looks at you for a long time. Her hands are cold. It's ninety degrees.

nonna: You moved.

sam: What?

nonna: Saturday. You moved. I felt it. Here.

She taps her chest, over her heart, twice.

sam: Nonna, what are you—

nonna: Not now. Not in front of your mother. Later we talk. *Mangia*, Salvatò.

And she lets go of your face and goes inside, like she's said nothing stranger than *wipe your feet.*

Dinner is dinner: gravy, meatballs, braciole tied with string, the good bread from Sarcone's, the TV on in the next room with nobody watching it. Gigi sits next to you and leans against your arm the whole time, like you might leave again mid-meatball. Pop isn't there.

rosa: He picked up a shift. A Sunday shift. Since when does your father pick up Sunday shifts?

She says it lightly, and nobody answers, and Gigi's hand finds your sleeve under the table.

Mikey's there in a T-shirt, off duty, big and loud, eating like a man who's going back to war in the morning. He waits until Ma's in the kitchen.

mikey: So. Crazy thing. ${g.f('after') === 'stayed' ? 'Kowalczyk from the 6th was up at that bus wreck on Spring Garden Saturday night. He says *my baby brother* was there. Says you pulled a kid out of the street. Says you were sitting on the curb bleeding like a stuck pig and gave him a statement like a little gentleman.' : 'Guys from the 6th were up at that bus wreck on Spring Garden Saturday night. Witnesses say some kid in a pizza shirt ' + (g.f('hitch_choice') === 'wheel' ? 'was suddenly standing there holding the little boy\'s hand.' : 'pulled a little boy out of the street.') + ' Then he vanished. Like, *vanished*. Kowalczyk says nobody can find him.'}

He tears off a piece of bread and looks at you over it.

mikey: ${g.f('after') === 'stayed' ? 'Ma doesn\'t know yet. You were "at the concert." Wanna tell me why you lied to Ma?' : 'You work for Ciro, right? On Cecil B.? Pizza shirt?'}`,
    choices: [
      { text: 'Lie to Mikey. Cop to cop-brother. Make it airtight.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['mikey'], label: 'Lie to Mikey', on: { strong: 'a4_mikey_lie_ok', weak: 'a4_mikey_lie_meh', miss: 'a4_mikey_lie_bad' } } },
      { text: 'Tell him part of it. You were there, you grabbed the kid, you didn\'t want Ma to freak. No powers.', tag: 'Half-truth',
        fx: g => { g.heat('mikey', 1); g.bond('mikey', { trust: 1, respect: 2 }); g.know('sam_at_crash', ['sam', 'mikey'], 'Mikey knows you were at the Spring Garden crash and pulled the kid out. He doesn\'t know how.'); g.flag('mikey', 'half'); }, go: 'a4_mikey_half' }
    ]
  },
  a4_mikey_lie_ok: {
    enter: g => { g.flag('mikey', 'lied'); if (g.f('after') === 'stayed') g.know('sam_at_crash', ['sam', 'mikey'], 'Mikey knows you were at the Spring Garden crash.'); },
    text: g => `sam: ${g.f('after') === 'stayed' ? 'Okay, I was there. I was *near* there. I was on a delivery. I saw the kid, I yelled, I ran over after. Kowalczyk\'s making it a whole thing. I didn\'t tell Ma \'cause she\'d have put me in bubble wrap and moved me back home by Tuesday.' : 'Mike. Half of North Philly works delivery. You think I\'m the only kid on Broad in a pizza shirt? I was on Liacouras with two thousand people looking at the sky.'}

You hold his eye. You don't touch your ear. Mikey looks at you the way he looks at people through a car window during a traffic stop.

mikey: …Yeah. Okay.

He goes back to his braciole. It worked. You're pretty sure it worked.

He says *"Don't do anything stupid,"* on his way out the door, though. And he says it like he means something specific.`,
    next: 'a4_dinner_end'
  },
  a4_mikey_lie_meh: {
    enter: g => { g.flag('mikey', 'lied'); if (g.f('after') === 'stayed') g.know('sam_at_crash', ['sam', 'mikey'], 'Mikey knows you were at the Spring Garden crash.'); },
    text: `You give him the story. It comes out a little too smooth, a little too rehearsed, a little too *Ma*.

Mikey chews. Swallows. Wipes his mouth.

mikey: Okay.

He doesn't believe you. He doesn't *not* believe you. He just files it. You know the drawer. You've got one too.`,
    next: 'a4_dinner_end'
  },
  a4_mikey_lie_bad: {
    enter: g => { g.bond('mikey', { trust: -1 }); g.flag('mikey', 'lied_bad'); if (g.f('after') === 'stayed') g.know('sam_at_crash', ['sam', 'mikey'], 'Mikey knows you were at the Spring Garden crash.'); },
    text: `You start talking and keep talking, and somewhere in the middle of it you hear yourself say *"and anyway, who even orders pizza at midnight,"* which is insane, because you're the one who delivers pizza at midnight.

Mikey puts the bread down.

mikey: Sammy. I've been a cop four years. I can tell when a guy's lying. You're touching your ear.

You are. You *are*.

mikey: I'm not gonna tell Ma. Whatever this is, I'm not gonna tell Ma. Yet. But you're gonna tell *me*. Not tonight. But you're gonna.`,
    next: 'a4_dinner_end'
  },
  a4_mikey_half: {
    text: `sam: I was there. I grabbed the kid. I didn't tell Ma because she'd have bubble-wrapped me and moved me home by Tuesday.

Mikey studies you, then breaks into a grin, the big stupid one, the one from when he came home from his deployment and lifted Ma off the ground in the airport.

mikey: My baby brother. *Hero.*

sam: Don't.

mikey: *Hero of Spring Garden.*

sam: I swear to God, Mike—

mikey: I'm not gonna tell her. I'm gonna tell *everybody else*.

He rubs your head like you're nine. Under the table, Gigi kicks you in the shin out of pure jealousy. It's the happiest you've been all weekend.

Then Mikey leans in closer, quieter.

mikey: How'd you get there in time, though? Kowalczyk said it was, like, *no* time.

sam: Adrenaline.

mikey: Mm.`,
    next: 'a4_dinner_end'
  },
  a4_dinner_end: {
    text: `After dinner, while Ma packs you four days of leftovers in mismatched Tupperware, Nonna catches your wrist in the hallway by the coats. Her grip is like a crab's.

She doesn't say anything. She pulls you down so she can reach, presses her dry lips to your forehead, and puts something in your hand: an old iron key on a faded ribbon, cold, and heavier than it looks.

nonna: Not yet. You keep it. When it's time, I tell you what it opens.

sam: Nonna—

nonna: *Va.* Go. You'll miss the train.`,
    enter: g => { g.know('nonna_key', ['sam', 'nonna'], 'Nonna gave you an old iron key on a ribbon. "When it\'s time, I tell you what it opens."'); g.know('nonna_felt', ['sam', 'nonna'], 'Nonna says she felt you "move" on Saturday night.'); g.bond('nonna', { trust: 2, affection: 1 }); },
    next: '@hub'
  },
  a4_hospital: {
    loc: 'TEMPLE UNIVERSITY HOSPITAL · 6TH FLOOR',
    enter: g => { g.meet('carmen'); g.bond('carmen', { trust: 1, affection: 2 }); g.know('halcyon_settles', ['sam'], 'Halcyon is paying Hitch victims fast, with papers to sign.'); },
    text: g => `Carmen Torres is in a room on the sixth floor with ${g.f('carmen') === 'hip' ? 'a brand-new hip, a morphine drip, and a view of Broad and Ontario' : 'her wrist in a fresh purple cast up to the elbow, being kept for observation because of her blood pressure'}. Jayden is on the end of the bed playing a Nintendo Switch with the sound off. When you come in, he looks up and doesn't seem surprised at all.

jayden: Abuela, the cold man.

Carmen looks at you, and her whole face breaks open.

There's someone else in the room: a woman in a navy blazer, very clean, a Halcyon lanyard, with a gift basket the size of a carry-on and a leather folder open on the tray table. She's holding a pen out toward Carmen like it's a bouquet.

HALCYON LADY: —and of course this is just to make sure Ms. Torres is fully supported, with no need for any lengthy *process*.

carmen: Señora, más despacio. I read English fine. I read it *slow*.

HALCYON LADY: That's fine! I can summarize. It basically says that Halcyon cares.`,
    choices: [
      { text: '"She\'s not signing anything today." Take the folder. Hand it back. Smile like Ma smiles at a nun.', tag: 'Step in',
        check: { kind: 'move', move: 'Hold the Line', bonus: 1, bonusLabel: 'Ma raised you', attr: 'nerve', skill: 'persuade', label: 'Stand up to Halcyon', on: { strong: 'a4_hosp_strong', weak: 'a4_hosp_weak', miss: 'a4_hosp_miss' } },
        fx: g => g.hidden('halcyon_heat', 1) },
      { text: 'It\'s not your business. Just sit with Jayden and play Mario Kart while the adults talk.', tag: 'Jayden',
        fx: g => { g.bond('jayden', { affection: 3 }); g.flag('hosp', 'jayden'); g.flag('carmen_signed'); }, go: 'a4_hosp_jayden' }
    ]
  },
  a4_hosp_strong: {
    enter: g => { g.flag('hosp', 'stopped'); g.bond('carmen', { trust: 2, respect: 2 }); },
    text: g => `sam: She's not signing anything today. She's on painkillers. My ma's a nurse, she'd have your whole lanyard.

You close the folder, gently, and hand it back with Ma's nun smile. The Halcyon lady holds it for a second, like it's hot, and you can see her decide this isn't worth a scene on a Sunday.

HALCYON LADY: Of course. Of *course*. I'll leave my card.

She leaves the card. She leaves the basket. On her way out, she looks at your face for one second too long, ${g.f('tablet_saw_you') ? 'the way the tablet guy did, ' : ''}like she's matching it to something.

Carmen grips your hand.

carmen: Mijo. Thank you. *Again.*`,
    next: 'a4_hosp_end'
  },
  a4_hosp_weak: {
    enter: g => { g.flag('hosp', 'delayed'); g.bond('carmen', { trust: 1 }); },
    text: `You tell her Carmen should have someone read it first. She says *of course, of course*, and smiles, and leaves the folder *right there* on the tray table, open to the signature page, with the pen on top.

HALCYON LADY: Whenever she's ready. No rush. The offer's very generous. It *is* time-sensitive.

She leaves. The folder doesn't.`,
    next: 'a4_hosp_end'
  },
  a4_hosp_miss: {
    enter: g => { g.flag('hosp', 'failed'); g.flag('carmen_signed'); g.hidden('halcyon_heat', 1); },
    text: `You start in on her, and she turns the smile on you, and it's a much better smile than yours. In ninety seconds she's somehow gotten your name, your dorm, and a promise that you'll "reach out if you remember anything unusual about the incident." Carmen signs while you're still blinking.

HALCYON LADY: Wonderful. Mr. Kearney, it was *such* a pleasure.

You never told her your last name.`,
    next: 'a4_hosp_end'
  },
  a4_hosp_jayden: {
    text: g => `You sit on the end of the bed with Jayden. He hands you the second Joy-Con without a word. You play Rainbow Road, and he destroys you, and the whole time you can hear the soft murmur of the Halcyon lady explaining what *caring* means, and the scratch of a pen.

When she's gone, Jayden says without looking up from the screen:

jayden: You were cold. In the air. ${g.f('hitch_choice') === 'wheel' ? 'When you held my hand.' : 'When you picked me up.'} Your hands were like ice cream.

sam: Yeah?

jayden: And then you were warm again. Like a light turned on.

He crosses the finish line in first.

jayden: Can you teach me?`,
    next: 'a4_hosp_end'
  },
  a4_hosp_end: {
    enter: g => { g.know('carmen_medal', ['sam', 'carmen'], 'Carmen Torres gave you a San Judas Tadeo medal. Saint Jude, patron of lost causes.'); },
    text: `When you leave, Carmen calls you back. She reaches up with her good hand and works a thin gold chain over her head, a little oval medal swinging from it, and presses it into your palm.

carmen: San Judas Tadeo. For the hopeless. For the lost causes.

sam: I can't take—

carmen: Es para ti. You go where it's hopeless. I saw you. You *go*.

It's still warm from her skin. You put it around your neck. You don't take it off.`,
    next: '@hub'
  },
  a4_books: {
    loc: 'TEMPLE UNIVERSITY BOOKSTORE',
    enter: g => g.money(-96),
    text: `The line at the bookstore snakes past the hoodie wall and the forty-dollar Owl mugs. The ENG 0802 reader is a stack of photocopies with a spiral binding, and it costs fifty-one dollars. The Calc "access code" is a piece of cardboard with a number on it, and it costs forty-five.

You pay. The cashier, a junior with a septum ring and the soul of a war correspondent, looks at the cardboard and then at you.

CASHIER: Welcome to college.`,
    next: '@hub'
  },
  a4_nap: {
    loc: 'CARDONE HALL · ROOM 9-14',
    enter: g => g.nap(6),
    text: `You sleep like you've been shot. No dreams. Or one dream, almost: a man standing in the rain, too far away to see his face, holding up one hand.

When you wake up, the light in the window has gone gold and slanted, and Nik has put a blanket over you, and there's a sticky note on your forehead that says, in his tiny neat handwriting, *u snore too.*`,
    next: '@hub'
  },
  a4_practice: {
    loc: 'CARDONE HALL · ROOF',
    enter: g => { g.mastery(8); g.drift(1); g.pool('focus', -2); g.xp(1); },
    text: g => `The roof door has an alarm on it that hasn't worked since 2009, according to a Reddit thread Nik found. The roof itself is gravel and HVAC units and the whole of Philadelphia spread out around you: Center City glittering to the south, the Delaware a black ribbon to the east, the Hitch-sky long gone and only a regular orange city haze left behind.

You practice. Slip, and the city stops. Step back, and it starts. Slip. The hum of a million air conditioners cuts off like a breath held. Step back.

Every time, it's a little easier to find the edge, like finding a light switch in your own house in the dark.

Every time, it's a little harder to come back, like climbing out of a pool with your clothes on.

When you finally stop, there's frost on the gravel in a perfect ring around your feet, and your nose is bleeding, and ${g.knows('carmen_medal') ? 'the San Judas medal against your chest is' : 'the skin over your heart is'} cold as a coin in January.`,
    next: '@hub'
  },
  a4_study: {
    loc: 'CHARLES LIBRARY · 4TH FLOOR',
    text: g => `${g.f('did_library') ? 'You find the quiet room on the fourth floor, east corner, just like Femi said. It\'s empty and silent, a beanbag chair and a window looking at a brick wall. Best nap in Philadelphia. You don\'t nap.' : 'You wander the fourth floor until you find a quiet room in the east corner that nobody seems to know about: a beanbag chair and a window looking at a brick wall.'} You read.`,
    choices: [
      { text: 'Push through Baldwin and Didion like your future depends on it.',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, label: 'ENG 0802 reading', on: { crit: 'a4_study_good', success: 'a4_study_good', fail: 'a4_study_bad', fumble: 'a4_study_bad' } } }
    ]
  },
  a4_study_good: {
    enter: g => g.grade('eng', 4),
    text: `It takes. James Baldwin in *Notes of a Native Son* writes about his father's funeral and the Harlem riot happening at the same time, and the whole world feeling like it's coming apart at the seams. You read it twice. You underline a line, then the line after it, then give up and underline the whole page.

You leave feeling like you're supposed to be here. It's the first time all weekend.`,
    next: '@hub'
  },
  a4_study_bad: {
    enter: g => g.grade('eng', 1),
    text: g => `You read the same paragraph of Didion nine times. Every word makes sense and none of them stay. You fall asleep on the beanbag with the book on your face and wake up hours later with a crease from the spine across your cheek.

${g.f('did_library') ? 'Best nap in Philadelphia, though. Femi wasn\'t lying.' : 'Best nap in Philadelphia, though.'}`,
    next: '@hub'
  },
  a4_sunday_after: {
    loc: 'CARDONE HALL · ROOM 9-14',
    clock: { time: '11:58 PM' },
    enter: g => {
      if (g.f('promise_sundays') && !g.f('did_dinner')) { g.bond('gigi', { trust: -2, affection: -1 }); g.flag('broke_sunday_promise'); g.know('broke_sunday_promise', ['sam', 'gigi'], 'You missed the first Sunday dinner you swore to Gigi you\'d make.'); }
      else if (!g.f('did_dinner')) { g.bond('rosa', { tension: 1 }); }
    },
    text: g => `${g.f('promise_sundays') && !g.f('did_dinner') ? 'Gigi\'s last text came at 6:12 p.m.\n\nTXT gigi: its fine\nTXT gigi: nonna saved u braciole\nTXT gigi: its FINE\n\nIt is not fine. You swore on the Eagles.' : g.f('did_dinner') ? 'The leftovers are in Nik\'s minifridge, because your minifridge is the windowsill. Nik has already eaten a meatball standing up in the dark like a raccoon and doesn\'t regret it.' : 'Ma\'s last text is a photo of an empty chair at the dinner table. No caption. She doesn\'t need one.'}

Tomorrow is the first day of classes. You set three alarms. You lie down. You don't sleep for a long time.

${g.f('first_slip') ? 'You keep thinking about the sprinklers at Geasey: every one of them crusted with frost in August.' : 'You keep thinking about the door in the wall, the one you didn\'t open.'}`,
    next: 'a4_monday'
  },

  /* ---------------- Monday ---------------- */
  a4_monday: {
    loc: 'ANDERSON HALL · ROOM 17 · GU 1003: PHILADELPHIA NEIGHBORHOODS',
    clock: { day: 'Mon', date: 'Aug 24', time: '11:00 AM' },
    enter: g => { g.sleep(g.f('did_nap') ? 7 : 5); g.meet('weisz'); g.money(-4); },
    text: g => `Your first college class is a hundred and twenty freshmen in a sloped lecture hall that smells like dry-erase marker. It's taught by a small, rumpled man in a corduroy jacket in August, with a beard like a startled bird's nest.

DR. WEISZ: Philadelphia is not a city. It is a *stack* of cities. Lenape, Swedish, Quaker, industrial, ruined, renewed. They lie on top of one another like pages in a book someone keeps writing in without erasing. You are walking, every day, on top of all of them at once.

He paces. He doesn't use slides. He doesn't seem to blink.

DR. WEISZ: Here is a fun fact for the drowsy. On May 10th, 1876, at the opening of the Centennial Exposition in Fairmount Park, President Grant and the Emperor of Brazil turned on the Corliss Engine, the largest steam engine in the world, to power the entire fair. And it ran. And at 1:22 p.m., according to three separate newspapers and the diary of a very bored telegraph clerk, it *stopped*. For what one witness called "the length of a heartbeat." Every clock in the hall. Then everything started again, and nobody could explain it, so everyone agreed it hadn't happened.

He stops pacing.

DR. WEISZ: Some of you were in North Philadelphia on Saturday night.

He's looking at the room, but for a second his eyes land on you and *stay*, like a finger stopping on a line of text.

That's when the door at the top of the hall opens, and Jules comes in, four minutes late, which you'd have bet your life she has never been for anything. She looks at the packed rows. There's exactly one empty seat left in the entire lecture hall.

It's next to you.

She looks at it for a long moment, as if it arranged itself there to inconvenience her. Then she comes down the steps and sits, and she smells like cedar, and she doesn't look at you.

jules: Not a word.

sam: I didn't—

jules: *Not a word*, Kearney.`,
    choices: [
      { text: 'Slide her handkerchief across the desk. Washed. Folded. Ironed, even. You borrowed Grace\'s iron.', tag: 'Handkerchief',
        fx: g => { g.bond('jules', { affection: 1, tension: 1 }); g.flag('monday', 'hanky'); }, go: 'a4_mon_hanky' },
      { text: 'Lean over and whisper: "How\'s the hand?"', tag: 'Ask',
        fx: g => { g.bond('jules', { trust: 1 }); g.flag('monday', 'hand'); }, go: 'a4_mon_hand' },
      { text: g => 'Whisper: "Bird\'s-nest guy is staring at me. Do I have something on my face?' + (g.f('door') === 'charm_miss' ? ' Sort of everywhere?' : '') + '"', tag: 'Banter',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Make her break', near: ['jules'], on: { strong: 'a4_mon_banter_strong', weak: 'a4_mon_banter_weak', miss: 'a4_mon_banter_miss' } },
        fx: g => g.flag('monday', 'banter') }
    ]
  },
  a4_mon_hanky: {
    text: `She looks at it for a long time. Washed. Ironed into a perfect square, the JLP facing up, centered. It took you forty minutes and you burned your thumb twice.

jules: I said keep it.

sam: I know.

jules: Then why are you giving it back?

sam: I'm not. I just wanted you to see I took care of it.

She doesn't say anything. After a while, she slides it back across the desk to you with one finger, and she goes on not looking at you.\n\njules: You ironed the crease the wrong way.\n\nShe says it to the lecture. It's the longest sentence she's said to you all day.`,
    next: 'a4_mon_after'
  },
  a4_mon_hand: {
    text: `She glances at the back of her hand. The tiny cut is already almost gone.

jules: Fine.

A pause.

jules: How's your nose?

sam: Fine.

sam: And the… the window thing?

jules: It was a window. It fell. I was lucky.

She says *lucky* like it's a word in a language she's decided not to learn. She's looking at Dr. Weisz with total, attentive concentration, the way you'd look at the road during a fight in the car.

You don't say anything. Neither does she. Down at the front, Dr. Weisz writes **1876** on the board and circles it three times.`,
    next: 'a4_mon_after'
  },
  a4_mon_banter_strong: {
    enter: g => { g.bond('jules', { affection: 1, tension: 1, respect: 1 }); g.flag('weisz_name'); },
    text: `She doesn't look at you. She looks straight ahead at Dr. Weisz, who is now drawing the city's original grid on the board like it's a treasure map.

jules: You do have something on your face.

sam: Yeah?

jules: Your expression.

It's a good line. It's a *great* line. And she says it so dry that it takes you a second, and when it lands you laugh out loud in the middle of Dr. Weisz's sentence about William Penn. A hundred and twenty heads turn. Dr. Weisz stops.

DR. WEISZ: Something amusing about the Quaker grid, Mr.…?

sam: Kearney. No. Sorry.

He looks at you for a beat too long again. Beside you, Jules is writing down every word of the lecture in beautiful handwriting, and she underlines the word *grid* hard enough to tear the page, which you decide to take personally.`,
    next: 'a4_mon_after'
  },
  a4_mon_banter_weak: {
    text: `jules: Yes. Sort of everywhere.

She says it without looking at you, and keeps writing. Fair. You walked into that one. You walked into it with a minifridge.`,
    next: 'a4_mon_after'
  },
  a4_mon_banter_miss: {
    enter: g => g.bond('jules', { respect: -1 }),
    text: `jules: I said *not a word*.

She shifts her whole body six degrees away from you, which in Pemberton is roughly equivalent to moving to a different state.`,
    next: 'a4_mon_after'
  },
  a4_mon_after: {
    enter: g => g.know('weisz_strange', ['sam'], 'Dr. Weisz told the class the Corliss Engine stopped "for a heartbeat" in 1876. After class he told you your edges were blurry.'),
    text: g => `After class, as the hall empties, Dr. Weisz is waiting at the bottom of the steps. Jules is already gone, up and out the door before the last word of the lecture lands.

${g.f('weisz_name') ? 'DR. WEISZ: Mr. Kearney. A moment.' : 'DR. WEISZ: You. Fourth row. A moment.'}

He looks at you the way an optometrist looks at an eye chart.

DR. WEISZ: Were you, by any chance, in the field? On Saturday?

sam: The field?

DR. WEISZ: The blackout zone. North of Vine.

sam: …I was on a delivery.

DR. WEISZ: Hm.

He tilts his head one way, then the other, exactly the way Jules does, which you find extremely unsettling.

DR. WEISZ: Your edges are blurry.

sam: My *what*?

DR. WEISZ: Office hours are Tuesdays and Thursdays. Bring a question about the reading. Or about anything at all.

He picks up his battered briefcase and walks out, humming something, leaving you alone in the empty lecture hall, looking down at your own hands.`,
    next: 'a4_wawa'
  },

  a4_wawa: {
    loc: 'WAWA · N. BROAD & CECIL B. MOORE',
    night: true,
    clock: { time: '9:48 PM' },
    enter: g => { if (g.f('met_ciro')) g.money(14 * 4 + 18); g.money(-7); },
    text: g => `After your shift at Ciro's${g.f('met_ciro') ? ' (four hours, eighteen in tips, and Ciro\'s assessment that you deliver "like a man who has seen God")' : ''}, you're at the Wawa on Broad, because there is no problem in the world a Wawa can't make briefly better.

The Wawa on Broad at ten p.m. on the first night of classes is the most Philadelphia room on earth. Nursing students in scrubs. Two SEPTA drivers on break arguing about the Sixers. A guy in a full Gritty costume, head under his arm, buying a single banana. Freshmen in packs of six all holding hoagie tickets like lottery numbers. Somebody's grandmother paying for coffee entirely in nickels.

You get a Shorti ($7): Italian, extra oil, hots. It's the one thing in your life right now that makes total sense.

You're stepping out the door, unwrapping the end of it, when it happens: a grad student with a laptop bag is standing on the corner on her phone, and a kid in a black hoodie on a bike swings past and *rips* it out of her hand. He's off down Broad, fast, standing on the pedals, her phone in his fist.

GRAD STUDENT: *HEY! HEY—* My thesis is on that. My whole— *HEY!*

Twelve people are on that corner. Ten of them are already filming.

And the world is right there at the edge of your attention, thin as a page, waiting.`,
    choices: [
      { text: 'Slip.', slip: true,
        fx: g => { g.flag('wawa', 'slip'); g.mastery(4); g.hidden('revenant_drift', 0.2); }, go: 'a4_wawa_slip' },
      { text: 'Run him down. Fast, but human-fast. Mostly.',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, power: true, label: 'Catch the bike', on: { crit: 'a4_wawa_chase_good', success: 'a4_wawa_chase_good', partial: 'a4_wawa_chase_partial', fail: 'a4_wawa_chase_fail', botch: 'a4_wawa_chase_fail' } },
        fx: g => g.flag('wawa', 'chase') },
      { text: 'Don\'t move your feet. Just stick out your leg as he rides past the trash can.',
        check: { kind: 'pool', attr: 'reflex', skill: 'brawl', diff: 2, label: 'One leg', on: { crit: 'a4_wawa_trip_good', success: 'a4_wawa_trip_good', partial: 'a4_wawa_trip_good', fail: 'a4_wawa_trip_fail', botch: 'a4_wawa_trip_fail' } },
        fx: g => g.flag('wawa', 'trip') },
      { text: 'Don\'t. Ten people are filming. It\'s a phone. Call it in and stay out of it.', tag: 'Stay out',
        fx: g => { g.flag('wawa', 'stayed'); g.hidden('revenant_drift', -1); }, go: 'a4_wawa_stay' }
    ]
  },
  a4_wawa_slip: {
    night: true,
    enter: g => { g.flag('video'); g.money(-14); g.heat('press', 2); g.recap('A nine-second video went viral. The internet calls you WAWA GUY.'); g.know('wawa_guy', ['sam'], 'A video of you at the Wawa on Broad went viral. The internet calls you WAWA GUY.'); },
    text: `You step through.

Broad Street stops. The bike is frozen thirty feet away with the kid standing on the pedals, hoodie flapping, mouth open in a grin. The grad student's hand is still reaching for where her phone used to be. Twelve people, twelve phones up, twelve little red RECORD dots, all of them pointed at the empty place where nothing has happened yet.

It's cold. You walk.

You walk up to the bike. You pull the phone out of the kid's fist, which is like pulling a pencil out of a block of Jell-O. You look at his face. He's maybe fifteen. He's got a cold sore and a Phillies chain.

You look at your Shorti.

You put the Shorti in his hand.

Then you walk back, put the phone in the grad student's outstretched palm, close her fingers around it, walk back to the Wawa door, and step back into the world.

!! ~SHHHK

Thirty feet down Broad, a fifteen-year-old on a bike looks down at his hand, sees that he's holding a hoagie, screams, and rides straight into a bus shelter.

The grad student looks down at her phone in her hand. She looks up. She looks at *everyone*.

Ten phones are still recording. On every one of them, in the space of a single frame, there's a blur. Just a smear of motion, about the size of a person, in a Ciro's shirt.

Your nose is bleeding. You're starving. You've given away your Shorti.

You go back in the Wawa and buy two more.`,
    next: 'a4_lounge'
  },
  a4_wawa_chase_good: {
    night: true,
    enter: g => { g.flag('video'); g.heat('press', 2); g.mastery(3); g.recap('A nine-second video went viral. The internet calls you WAWA GUY.'); g.know('wawa_guy', ['sam'], 'A video of you at the Wawa on Broad went viral. The internet calls you WAWA GUY.'); },
    text: `You go. You don't step all the way through, just to the edge, the thinning. Broad Street goes soft, and the bike is suddenly *slow*, and you're on it in a dozen strides. You snag the back of the kid's hoodie and pluck him off the bike like a cat by its scruff. The bike goes clattering on without him into a bus shelter.

He's maybe fifteen, with a cold sore and a Phillies chain. He stares at you like you've come out of the ground.

KID: How did you— You were *at the Wawa*.

You take the phone. You let him go. He runs. You let him run.

You walk the phone back. The grad student takes it with both hands, shaking. Ten people are still filming. On every phone, you're going to find out later, the chase is a smear of motion so fast that the video software doesn't know what to do with it. Just a blur in a Ciro's shirt, holding a Shorti in one hand the whole time.

You didn't drop the Shorti. That's what people will talk about.`,
    next: 'a4_lounge'
  },
  a4_wawa_chase_partial: {
    night: true,
    enter: g => { g.flag('video'); g.heat('press', 3); g.heat('police', 1); g.mastery(2); g.recap('A nine-second video went viral. The internet calls you WAWA GUY.'); g.know('wawa_guy', ['sam'], 'A video of you at the Wawa on Broad went viral. The internet calls you WAWA GUY. Your face is half-visible in one of them.'); },
    text: `You go, and you catch him, but it's sloppy. You come up beside the bike too fast, too *visibly*, and the thinning snaps out from under you halfway through, and you end up tackling him into a bus shelter in a tangle of bike and boy and plexiglass.

You get the phone. You get up. You turn around.

Twelve phones. And this time, in at least one of the videos, there's a frame where the blur stops being a blur for a fraction of a second, and it has a face. Half a face. Your half.`,
    next: 'a4_lounge'
  },
  a4_wawa_chase_fail: {
    night: true,
    enter: g => { g.flag('video'); g.heat('press', 1); g.flag('wawa_lost'); g.recap('A nine-second video went viral. The internet calls you WAWA GUY.'); g.know('wawa_guy', ['sam'], 'A video of you chasing a phone thief went viral. You didn\'t catch him. The internet calls you WAWA GUY anyway.'); },
    text: `You go, and nothing happens. Or not enough happens. You're fast, *Neumann-Goretti* fast, but you're not *Saturday-night* fast, and the bike is faster. You chase it four blocks down Broad in front of God and everyone and lose it at Girard, where the kid cuts through traffic and is gone.

You stand there on the corner, bent over, holding your Shorti. You didn't drop the Shorti. You'll take what you can get.

When you walk back, the grad student is sitting on the curb crying. Ten people filmed you. In the videos, you'll find out later, there's a moment, a single half-second, where you're impossibly fast before you aren't.`,
    next: 'a4_lounge'
  },
  a4_wawa_trip_good: {
    night: true,
    enter: g => { g.flag('video'); g.heat('press', 1); g.recap('A video of you tripping a phone thief went viral. The internet calls you WAWA GUY.'); g.know('wawa_guy', ['sam'], 'A video of you tripping a phone thief went viral. The internet calls you WAWA GUY.'); },
    text: `You don't run. You barely move. You just shift your weight, let the world thin for an instant, the tiniest sliver of a Slip, and slide one foot out at exactly the right moment as he pumps past the trash can.

The front wheel hits your sneaker. The kid goes over the handlebars in a beautiful arc and lands in a pile of Wawa bags. The phone skitters across the sidewalk and stops at the grad student's feet like a dog returning a ball.

You never even took a step. You're standing there unwrapping your Shorti.

GRAD STUDENT: Did— Did you just—

sam: He tripped.

Ten people filmed it. In slow motion, your foot moves faster than the frame rate. It's a tiny thing, a foot, a blur. It's enough.`,
    next: 'a4_lounge'
  },
  a4_wawa_trip_fail: {
    night: true,
    enter: g => { g.flag('wawa_lost'); g.injure({ id: 'sore_ankle', name: 'Twisted ankle', pen: 1, heal: 1, affects: ['reflex'] }); },
    text: `You stick your foot out. The front wheel hits your ankle at full speed and keeps going, and so does the kid, and so does the phone, and you go spinning backward through the Wawa doors into a rack of Tastykakes.

You lie on the floor in a drift of Butterscotch Krimpets. A SEPTA driver looks down at you.

SEPTA DRIVER: That was brave, young man. That was very, very stupid. But it was brave.`,
    next: 'a4_lounge'
  },
  a4_wawa_stay: {
    night: true,
    enter: g => { g.flag('wawa_lost'); g.know('let_thief_go', ['sam'], 'You stood still while a kid stole a grad student\'s phone at the Wawa. You could have stopped it.'); },
    text: `You don't move.

You stand there and let it happen. Every part of you is screaming. But there are twelve phones up on that corner, and you're a kid in a Ciro's shirt, and if you go, everybody sees.

You call 911 instead. You give them the description: black hoodie, bike, Phillies chain. You stay with the grad student while she cries on the curb about her thesis, and you buy her a coffee and a soft pretzel, and she tells you about her research (*urban heat islands*), and you nod like a person who has never once been cold in August.

The cops come forty minutes later and take a report. The phone is gone.

You walk home. You feel sick. You feel like you swallowed something that's still alive.

Something in you, down where the cold lives, says you did the right thing. Something else says you'll spend the rest of your life finding out which of them is lying.`,
    next: 'a4_lounge'
  },

  a4_lounge: {
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { time: '11:34 PM' },
    enter: g => { g.meet('dana'); },
    text: g => `The lounge TV is on the news. Half the floor is lying on the carpet so they can see it at the bolted-on angle. It's about the Hitch: Inquirer reporter Dana Fiorillo on the steps of the Halcyon building, sharp as a tack in a blazer, asking a Halcyon spokesman in a quarter-zip why the building had lights on when the whole of North Philly was dark. The spokesman says *"backup systems"* four times in ninety seconds.

${g.f('wawa') === 'chase' && g.f('wawa_lost') ? 'Somebody\'s showing a video on their phone of a kid on Broad chasing a bike thief and losing, and the caption on it says **WAWA GUY (almost)**, and it has thirty thousand views, and Philly Twitter is being *mean* about it. There\'s one half-second in the middle where the kid is impossibly fast. Nobody\'s talking about that part. Yet.\n\nsimone: Wawa Guy. Poor Wawa Guy. He tried. Bless his heart.' : g.f('video') ? 'And then, before the weather, a segment: **"Philly\'s Newest Mystery: WAWA GUY."** Nine seconds of phone footage from the corner of Broad and Cecil B. Moore. A blur. A thief. ' + (g.f('wawa') === 'slip' ? 'A fifteen-year-old riding into a bus shelter holding a hoagie he didn\'t buy.' : g.f('wawa') === 'trip' ? 'A foot that moves faster than the frame rate.' : 'A smear of motion holding a Shorti.') + ' It has four hundred thousand views. Philly Twitter has already made it a meme. It\'s been set to *Gonna Fly Now*. It\'s been set to *Fly, Eagles Fly*. It\'s been set to Gritty\'s goal song.\n\nThe anchor, chuckling: *"Whoever you are, Wawa Guy, Philadelphia salutes you. Please, call your mother."*\n\nThe whole lounge is screaming.\n\nsimone: WAWA GUY. Y\'all. Somebody got a superpower and used it to do a *bit*. That\'s a theater kid\'s soul in a pizza shirt. …Salvatore, you look pale.' : 'Somebody\'s showing a video of a kid on a bike snatching a grad student\'s phone outside the Wawa on Broad. Thirty thousand views.' + (g.f('wawa') === 'trip' ? ' At the very end, a guy in a Ciro\'s shirt flies backward into a rack of Tastykakes. That part has its own meme.' : '') + '\n\nsimone: Twelve people on that corner, and nobody did a thing. Philadelphia.'}

${g.f('nik_told') === 'told' ? 'Nik is next to you on the couch, completely rigid, staring straight ahead with the face of a man trying to keep a live bird in his mouth. When the video plays, he kicks you, hard, in the ankle.' : 'Nik is watching the video over and over on his phone, slowing it down, frame by frame, with an expression you don\'t love.'}

${g.f('video') ? 'Jules is on the far couch with a seltzer. She watches the video once. Then again. Then a third time on Simone\'s phone. She doesn\'t look at you. She very carefully doesn\'t look at you.' : 'Jules is on the far couch with a seltzer, not watching the TV, watching the window, like she\'s waiting for something to fall out of the sky.'}`,
    choices: [
      { text: '"Wawa Guy? That\'s the worst name I ever heard. Philly can do better."', tag: 'Mock it', if: g => g.f('video'),
        fx: g => { g.flag('lounge', 'mock'); }, go: 'a4_lounge_mock' },
      { text: '"Probably some track guy. Those freaks are fast." Cover Story, nice and casual.', if: g => g.f('video'),
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['simone', 'jules'], label: 'Cover in the lounge', on: { strong: 'a4_lounge_lie_ok', weak: 'a4_lounge_lie_meh', miss: 'a4_lounge_lie_bad' } },
        fx: (g, t) => { g.flag('lounge', 'lie'); if (g.f('nik_told') !== 'told') g.heat('nik', t === 'miss' ? 2 : 1); } },
      { text: g => g.f('video') ? 'Say nothing. Get up. Go to bed before your face does anything.' : 'Say nothing. Go to bed. You\'ve had enough of Broad Street for one night.', tag: 'Leave',
        fx: g => { g.flag('lounge', 'left'); if (g.f('video')) g.heat('simone', 1); }, go: 'a4_lounge_left' }
    ]
  },
  a4_lounge_mock: {
    enter: g => g.bond('jules', { tension: 1 }),
    text: `sam: Wawa Guy? That's the worst name I ever heard. Philly can do better than *Wawa Guy*.

From the far couch, without looking up from Simone's phone:

jules: It's perfect.

sam: It's— How is that perfect?

jules: It's exactly what he deserves.

She takes a sip of seltzer. Simone looks at her, then at you, then back at her, like she's watching a tennis match only she knows is happening.

Somewhere deep in your chest, a small South Philly voice is outraged on behalf of your own blurry alter ego. You'll be thinking of better names for weeks. You'll never get to use any of them. The internet doesn't take requests.`,
    next: 'tag_jules'
  },
  a4_lounge_lie_ok: {
    text: `sam: Probably some track guy. Those freaks are fast. They eat, like, raw eggs.

It goes over fine. Nobody blinks. Devontae from down the hall says he heard it's a guy from Penn on steroids. A girl from 9-02 says it's a marketing stunt for Wawa. Somebody's theory involves the Illuminati and the Eagles' secondary.

Simone says nothing. Jules says nothing.

Nobody looks at your ear.`,
    next: 'tag_jules'
  },
  a4_lounge_lie_meh: {
    
    text: `sam: Probably some track guy. Those freaks are fast.

simone: Mmhm.

That's all she says. *Mmhm.* Then she takes her phone back from Jules and types something into her Notes app.

Jules is looking at the screen. Then, very briefly, at your hands.`,
    next: 'tag_jules'
  },
  a4_lounge_lie_bad: {
    
    text: `sam: Probably some track guy. Those freaks are fast. They're like, built different. Probably eats, like, a dozen raw eggs. Probably from, like, Jersey—

jules: Your ear.

You yank your hand down. The whole lounge laughs, because it's a running bit now, *Sam's ear*, and only three people in the room wonder why.

Simone stops laughing first.`,
    next: 'tag_jules'
  },
  a4_lounge_left: {
    text: g => `You get up. You say *"night"* to nobody in particular. You walk down the hall to 9-14 with your face very carefully arranged, and you close the door, and you lean on it in the dark.

Behind you, through the door, you can hear the lounge still laughing. You can hear somebody playing the video again.

${g.f('video') ? 'And you can hear Simone, not laughing,' : 'And you can hear Simone,'} saying something low that you can't make out, and Jules answering her, just as low.`,
    next: 'tag_jules'
  },

  /* ================= TAG ================= */
  tag_jules: {
    card: { kind: 'tag' },
    night: true,
    loc: 'CARDONE HALL · ROOM 9-11',
    clock: { day: 'Tue', date: 'Aug 25', time: '1:14 AM' },
    enter: g => { g.know('jules_die_sixes', ['jules'], 'Jules\'s ivory die rolls nothing but sixes now.'); },
    text: `> NOT YOU. THE CAMERA.

Room 9-11. Simone asleep on her stomach under a tapestry of Black theater legends, one arm hanging off the bed. The beverage center hums under the window. Its dent, if it has one, has been turned to face the wall.

Jules is sitting at her desk in an oversized Episcopal Academy Crew sweatshirt. Callum's, you'd guess. She'd say it isn't. The desk lamp is on, angled low.

She takes the ivory die out of a small velvet pouch and holds it a while.

She rolls it on the desk.

Six.

She picks it up. Rolls it again.

Six.

Again. Six. Again. Six. Six. Six. She stops picking it up gently. She starts throwing it, harder, off the wall, off the lamp, off a textbook. Six. Six. Six. Six. Six. Six. Six. Six. Six. Six. Twenty times. Twenty sixes.

Her hand is shaking.

She whispers, to nobody, so quietly it's barely a breath:

jules: One in three quadrillion.

Then she closes her eyes and rolls it one more time, and this time she *wants* a one. She wants to lose, just once, to know she still can.

The die hits the desk, spins on one corner for a long, long time, and falls.

Six.

She puts it back in the pouch. She pulls the drawstring tight. She puts the pouch in the very back of the desk drawer, under her passport, and closes the drawer.

She doesn't turn off the lamp.`,
    next: 'tag_sam'
  },
  tag_sam: {
    night: true,
    loc: 'N. BROAD STREET · OUTSIDE THE WAWA',
    clock: { day: 'Tue', date: 'Aug 25', time: '1:40 AM' },
    text: g => `You can't sleep. Third night running.

You've ${g.hurt('sore_ankle') ? 'limped' : 'walked'} down to Broad, because Broad is where you go. The heat has finally broken. It's raining for real now, warm and steady, washing the whole city clean, steam rising off the sidewalks, the gutters running. You stand under the Wawa's awning in your ${g.f('jacket') ? 'Ciro\'s windbreaker' : 'hoodie'} with ${g.knows('carmen_medal') ? 'Carmen\'s medal around your neck, ' : ''}${g.knows('nonna_key') ? 'Nonna\'s key on its ribbon, ' : ''}Jules's handkerchief in your pocket, and a fresh Shorti you're not even hungry for.

You did it. Whatever it is, you did it. A kid named Jayden is alive. A grandmother named Carmen is alive. ${g.f('wawa') && !g.f('wawa_lost') ? 'A grad student has her thesis back. ' : ''}${g.f('video') ? 'The internet has a name for you, and it\'s terrible, and some' : 'Some'} small, stupid, eighteen-year-old part of you is so proud you could throw up, like Ma said.

The light changes at Cecil B. Moore. The street empties.

Across Broad Street, under the dead marquee of an old movie theater, a man is standing in the rain.

He's your height. He's wearing a jacket like Ciro's windbreaker, but faded almost to gray, the letters on the back long gone. He isn't sheltering. He's just standing there in the downpour, letting it run off him, like rain is something that happens to other people.

He's looking at you.

The streetlight catches his face. He's older: forty, forty-five. Gray at the temples. A scar runs from the corner of his left eye down into his jaw, white and old. He's looking at you the way you'd look at a photograph of someone who died.

Something in his face snags on you, the way your own voice does on a recording: wrong, and yours.

He raises his left hand, slowly, and puts one finger to his lips. *Shh.*

The hand is missing a finger. The ring finger, gone at the knuckle.

Then the 16 comes down Broad between you, a long bright wall of windows and light, rain sheeting off its roof.

When it passes, he's gone.

There's nothing there but the dead marquee and the rain. No one running. Just the faintest smell, carried across six lanes of Broad Street, of ozone and wet pennies.`,
    choices: [
      { text: 'Cross the street. Now. Find him.', tag: 'Chase',
        fx: g => { g.flag('tag', 'crossed'); g.hidden('revenant_drift', 0.2); }, go: 'tag_end' },
      { text: 'Stay where you are. Don\'t move. Breathe.', tag: 'Stay',
        fx: g => { g.flag('tag', 'stayed'); }, go: 'tag_end' }
    ]
  },
  tag_end: {
    night: true,
    enter: g => { g.know('man_across_street', ['sam'], 'A man across Broad Street had your face, older, scarred, missing his left ring finger. He put a finger to his lips. Then he was gone.'); },
    text: g => `${g.f('tag') === 'crossed' ? 'You run across Broad against the light, through the rain, to the dead marquee. There\'s nobody. The doorway behind it is chained shut. The sidewalk is wet and empty.\n\nBut there, in the exact spot where he was standing, the puddle on the pavement is *frozen*. It\'s a thin, perfect disc of ice, in August, melting fast in the warm rain.\n\nYou crouch and touch it. It\'s so cold it burns.' : 'You don\'t move. You make yourself not move. You stand under the awning with your heart slamming and watch the empty place across the street until the rain fills it in.\n\nAfter a while, you notice your breath is coming out white. Just for a moment. Just for one breath. Then it\'s August again.'}

Your phone buzzes in your pocket. You take it out. It's nothing: a Wawa app notification. *Your order is ready!*

You look at the time.

> 1:51:04 AM

You keep looking at it.

It doesn't change.

It doesn't change.

> 1:51:05 AM`,
    end: true
  }
});
