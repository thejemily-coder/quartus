/* S1 · E9 · THINGS THAT DON\'T ADD UP, part 1 of 3: meta, cold open, Act One ("All Souls"). */
EH.episode({
  id: 's01e09', season: 1, number: 9, title: 'Things That Don\'t Add Up', look: 's1',
  cast: ['sam', 'jules', 'simone', 'nik', 'mikey', 'frank', 'rosa', 'nonna', 'grace', 'vinnie', 'callum', 'teddy', 'bree', 'heck'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Pop owes the Iannucci family $41,000. Dante says: by Thanksgiving.',
    'Teddy let go of your father\'s cab and walked away from forty thousand dollars.',
    g.f('kissed') ? 'You kissed Jules on the roof at 11:47. You didn\'t look at your phone.' : 'On the roof, at 11:47, you looked at your phone.',
    g.f('femi_end') === 'found' ? 'Femi Ojo died alone outside your door while the party went on around him.' : 'Femi Ojo died in your arms in Stairwell B.',
    'Brannigan knows your name.',
    'Femi\'s last message: "M.R. ALIVE. RM 714. THEY CALL YOU 17."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'KELLY DRIVE · BOATHOUSE ROW',
      clock: { day: 'Sun', date: 'Nov 1', time: '3:40 PM' },
      text: g => `> THE CAMERA.

The Schuylkill is the color of a nickel. Eight rowers carry a shell up the ramp from the water on their shoulders, upside down, like pallbearers, and set it on the rack, and one of them peels away from the others and jogs up the grass toward the bench where Jules Pemberton is sitting in a long dark coat.

She hasn\'t slept. There is still a line of gold paint along her hairline that she missed in the shower. She watches him come.

callum: Jules! Hey. Hey, you came down.

He\'s wet to the knees and grinning, and he leans down to kiss her, and she turns her face so it lands on her cheek. He doesn\'t notice. Then he does.

callum: Hey. What happened? Did something happen?

jules: A boy on my floor died last night.

callum: Oh my God. Jules. I saw something on the news. The Temple thing. That was *your* floor? Are you okay? Did you know him?

jules: No. I didn\'t know him. I never saw him.

She looks at the river.

jules: Sit down, Callum.

He sits. He\'s still holding his oar gloves. He puts them on the bench between them, very neatly, a good boy from Episcopal Academy who was raised to put things down neatly, and he waits. He\'s good at waiting.

jules: I\'m ending this. Us. I\'m sorry. I wanted to tell you in person, because you deserve that, and because you would have done it in person.

He doesn\'t say anything for a moment. A goose walks past the bench and looks at them both.

callum: Is it the guy? From your hall? The one with the soot in his hair?

She doesn\'t answer. That\'s an answer, and he hears it.

callum: Okay.

He nods. He keeps nodding.

callum: I\'d have waited, you know. For whatever it was. If you\'d told me you needed time. I\'d have waited a year.

jules: I know you would.

callum: That\'s not a good thing, is it. That I would\'ve.

jules: It\'s the best thing about you. It\'s just not what I want.

He laughs once, wet, and picks up his gloves, and puts them down again.

${g.f('ily') === 'too' ? 'callum: You said it back. In October. At Ravenscourt. I said it and you said it back.\n\njules: I know. I\'m sorry. I said it because you said it.' : 'callum: At Ravenscourt I told you I loved you. I thought you\'d catch up.\n\njules: I know. I\'m sorry. I never was going to.'}

He looks at her for a second, and the camera, which has been watching them from across the path, sees him believe her.

Then he kisses the top of her head, the way you\'d kiss a sister, and he walks back down the grass to the boathouse, and he doesn\'t look back, which is the only unkind thing he does all afternoon, and it\'s not very unkind.

Jules sits on the bench.

After a while, she takes an ivory die out of her coat pocket. She rolls it on the slats of the bench beside her without looking down.

Six.

She doesn\'t look. She takes out her phone and types *its done* and deletes it. She types *are you asleep* and looks at it.

She sends it.

> ELSEWHERE.

A drawer, in a cold room, in a building at the Navy Yard. In the drawer, a clear plastic bag with a white label: **SUBJECT 031 · PERSONAL EFFECTS.** A wallet. A Charles Library staff lanyard. A phone.

The phone lights up inside the bag.

**MUMMY** · *incoming video call*

It rings until it stops. Then a message.

TXT Mummy: Femi please call me back. Tolu says you are not answering her. Femi. Please.

A gloved hand turns the bag face down and closes the drawer.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_pop' },

    /* ================= ACT ONE: ALL SOULS ================= */
    a1_pop: {
      card: { kind: 'act', label: 'Act One', title: 'All Souls' },
      loc: 'NORTH BROAD STREET',
      clock: { day: 'Sun', date: 'Nov 1', time: '4:30 PM' },
      text: g => `You sleep for three hours with your shoes on and wake up to two texts.

TXT jules: are you asleep
TXT rosa: Pop is coming to get you. Do not argue with me Salvatore. 4:30.

At 4:30 a Liberty cab pulls up on Broad in front of Cardone Hall with its hazards on, and it\'s *the* cab, #2207. It has new windows. When you get in, there is still glass in the seat tracks, little green-white cubes of it, and you can see them catching the light every time you shift your weight.

Pop doesn\'t say anything. He pulls out into Broad Street.

You ride south. Past Girard, where the frost was. Past Spring Garden, where it all started, the Baldwin building all lit up and clean behind its new glass. City Hall with Billy Penn on top. Pop drives the way he always drives, one hand at twelve o\'clock, the other hand on his knee, checking the mirrors like somebody might be following him. Maybe somebody is.

At Washington Avenue, at the light, he finally talks.

frank: Mikey called us at two in the morning.

sam: I know.

frank: Your mother sat up at midnight. Before he called. Sat straight up in bed and said *something\'s wrong with Sammy*. I thought she was having a stroke.

The light turns green. He doesn\'t go. Somebody behind you leans on the horn. Pop doesn\'t go.

frank: That night. Under 95.

He\'s looking straight ahead, through the new windshield.

${g.f('under95') === 'slip' ? 'frank: I weigh two-twenty, kid. Somebody picked me up off that gravel and carried me sixty feet, and I never felt my feet touch the ground. One second I\'m on my knees. Next second I\'m behind a pillar, and I\'m cold, I\'m so cold my teeth hurt, and there\'s a kid on a bike going up Columbus with his cap on backward. My cap.' : 'frank: I\'m on my knees on that gravel, and a kid in a hood walks out of the dark like he owns the place, and ten minutes later I\'m free and he\'s on a bike going up Columbus with his cap on backward. My cap.'}

The horn again. Pop goes. Slowly.

frank: You wear it backward. You been wearing it backward since you were six. Your mother used to turn it around in church.

${g.f('pop_knows') === true ? 'He doesn\'t ask. He saw your face that night. He doesn\'t have to ask. He just wants you to know he hasn\'t stopped seeing it.' : 'He doesn\'t ask. He drives, and he doesn\'t ask, and you can feel him not asking all the way down Broad.'}`,
      choices: [
        { text: '"Yeah, Pop. It was me."', tag: 'Tell him', if: g => g.f('pop_knows') !== true,
          fx: g => { g.flag('pop9', 'told'); g.flag('pop_knows', 'told'); g.know('sam_slip', ['frank']); g.know('sam_blur_pop', ['sam', 'frank'], 'You told Pop it was you under I-95. He knows you\'re the Blur.'); g.bond('frank', { trust: 2, tension: -2 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_pop_told' },
        { text: '"Pop. Not today. Please."', tag: 'Not today',
          fx: g => { g.flag('pop9', 'later'); g.bond('frank', { tension: -1 }); }, go: 'a1_pop_later' },
        { text: '"It wasn\'t me, Pop. I was at Temple. Ask Jules."', tag: 'Lie', if: g => g.f('pop_knows') !== true,
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['frank'], label: 'Lie to Pop', on: { strong: 'a1_pop_lie', weak: 'a1_pop_lie', miss: 'a1_pop_lie_bad' } } }
      ]
    },
    a1_pop_told: {
      text: `You say it to the windshield, because you can\'t say it to him.

sam: Yeah, Pop. It was me.

He doesn\'t say anything. He puts his blinker on, very carefully, and pulls over in front of a tire shop at Broad and Tasker, and puts it in park, and sits there with both hands on the wheel.

frank: The Blur. On the news.

sam: Yeah.

frank: The bus. In August. The kid.

sam: Yeah.

He makes a sound. It takes you a second to understand that he\'s laughing, and another second to understand that he isn\'t.

frank: Your mother bought Gigi a Blur T-shirt. At the Acme. Nine ninety-nine.

He wipes his face with the flat of his hand, hard, like he\'s mad at it.

frank: Does she know? Your mother?

sam: No. Nobody in the house. Just you.

frank: Good. Keep it that way. Till I figure out how I tell her I owe a man forty-one thousand dollars *and* my son can— whatever it is you do.

sam: I don\'t know what it is either.

He looks at you then. Really looks. The way he looks at an engine with the hood up, when he can hear something wrong and can\'t find it yet.

frank: That money\'s mine. You hear me? You don\'t go near Dante Iannucci. You don\'t go near *any* of them. That\'s my mess. I made it in 2009, I\'ll clean it up.

sam: Pop—

frank: *Mine.*

He puts the cab back in drive. Three blocks later, without looking at you, he reaches over and turns your cap around on your head, backward to forward, the way Ma used to do in church.

You let him.`,
      next: 'a1_mifflin'
    },
    a1_pop_later: {
      text: `sam: Pop. Not today. Please.

He drives half a block.

frank: Okay.

He turns the radio on. Sports talk, a man from Delco yelling about the secondary. He turns it down until it\'s just a murmur, a sound for the car to have, and he drives.

At Morris, at the light, without looking at you:

frank: But you\'re gonna tell me.

sam: Yeah.

frank: Okay.

He reaches over and puts his hand on the back of your neck, once, heavy and warm, and takes it back.`,
      next: 'a1_mifflin'
    },
    a1_pop_lie: {
      enter: g => { g.flag('pop9', 'lied'); },
      text: `sam: It wasn\'t me, Pop. I was at Temple. I was studying with Jules. Ask her. Ask Ma, Jules talked to Ma.

It comes out easy. It comes out perfectly, every word in the right place.

Pop nods.

frank: Okay. Okay. I believe you.

He doesn\'t. You can hear it in the second *okay*. But he lets you have it, the way he let Ma have a lot of things for a lot of years, and he turns on the radio, and you ride the rest of the way down Broad with a man from Delco yelling about the secondary and your father not believing you.`,
      next: 'a1_mifflin'
    },
    a1_pop_lie_bad: {
      enter: g => { g.flag('pop9', 'lied'); g.bond('frank', { trust: -1, tension: 1 }); },
      text: `sam: It wasn\'t me, Pop. I was at Temple. I was studying. Ask Jules.

Your hand goes to your left ear. You feel it go. You can\'t stop it.

Pop sees it too.

frank: You touched your ear.

sam: What?

frank: Since you were six. You told your mother the dog broke the lamp, you touched your ear. We never had a dog. You took twenty bucks out of my coat, you touched your ear.

He doesn\'t say anything else. He turns the radio on, loud, and you ride to Mifflin Street with a man from Delco yelling about the secondary, and neither of you says another word.`,
      next: 'a1_mifflin'
    },

    a1_mifflin: {
      loc: 'MIFFLIN STREET · SOUTH PHILADELPHIA',
      clock: { time: '5:30 PM' },
      text: g => `Ma is on the step before the cab stops. She doesn\'t say anything. She holds onto you on the sidewalk in front of the whole block, in front of Mrs. Iacovelli and the Brennan kids and a man walking a pit bull in a sweater, and she doesn\'t let go until Pop says *Ro, let him in the house*.

Inside, it smells like butter and chicken broth. She\'s made pastina. The tiny stars, with butter and an egg beaten in and too much Parm, in the chipped yellow bowl. It\'s what she made when you had strep in third grade, and the flu in sixth, and the time you broke your wrist falling off the Brennans\' garage roof. It\'s the food for when something is wrong with you that nobody can fix.

She puts it in front of you at the kitchen table.

rosa: Eat.

She doesn\'t ask you anything. She sits across from you with her coffee and watches you eat it, all of it, and when you\'re done, she takes the bowl and fills it again.

Gigi comes down the stairs in a Blur T-shirt and stops in the kitchen doorway. She looks at you. For once in her life she doesn\'t say *SAMMMMM*. She comes and sits in the chair next to you, pulls her knees up, and leans on your arm.

gigi: Was he your friend?

sam: Yeah.

gigi: Then I\'m sad too.

She stays there. Later, on the couch, with some baking show on that nobody\'s watching, she falls asleep against your shoulder with her mouth open, thirteen years old and drooling on your sleeve. Ma comes in and puts the afghan over both of you, the orange-and-brown one Nonna crocheted in 1979, and stands there looking at you a moment.

rosa: Midnight, I sat up in bed. I knew.

sam: Pop told me.

rosa: I always know, Salvatore. I don\'t always know *what*.

She touches your hair, once. She goes up to bed.

At eleven, Mikey\'s headlights come down Mifflin Street.`,
      next: 'a1_stoop'
    },

    a1_stoop: {
      night: true,
      loc: 'THE STOOP',
      clock: { time: '11:10 PM' },
      text: g => `He doesn\'t come in. He texts you *stoop*, and you ease out from under Gigi and go out.

He\'s sitting on the second step in his Birds hoodie with two cans of Yuengling, and he hands you one, and you sit down next to him. The block is quiet. Somebody\'s Halloween skeleton is still sitting in a lawn chair two doors down with a Phillies cap on.

mikey: Case is closed.

sam: What?

mikey: Adverse reaction to an experimental compound. ME signed it at nine this morning. Homicide closed it by noon.

He drinks.

mikey: I\'ve been a cop four years, Sammy. I never seen Homicide close *anything* by noon. They don\'t close a stolen bike by noon.

He turns the can around in his hands.

mikey: And at three in the morning, in your hallway, while you were in the lounge, Brannigan walks up to me with two coffees. Gives me one. Asks me how my brother\'s been sleeping. Whether you get nosebleeds. Whether you\'ve been, quote, *sensitive to cold*.

You put the can down on the step.

mikey: Then he asks the RA for a list of every resident on nine. I said that\'s not how a death investigation works. He said, *It is now, Officer.* Real friendly.

He looks at you.

mikey: I told you in October I was gonna ask you. On a Sunday. It\'s Sunday.

mikey: So. How does a Halcyon man know your name?`,
      choices: [
        { text: 'Give him the part you can. Femi was in their study. He was scared of them. He came to find you, to tell you something, and they killed him for it.', tag: 'Open Up',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Tell Mikey what you can', on: { strong: 'a1_mikey_open', weak: 'a1_mikey_open_weak', miss: 'a1_mikey_open_miss' } } },
        { text: '"Halcyon was handing out nosebleed flyers to RAs in September. I bled in the lounge once. I\'m on a list. That\'s all."', tag: 'Lie',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['mikey'], label: 'Lie to Mikey', on: { strong: 'a1_mikey_lie', weak: 'a1_mikey_lie', miss: 'a1_mikey_lie_bad' } } },
        { text: '"Don\'t ask me, Mikey. Please. Not tonight."', tag: 'Don\'t',
          fx: g => { g.flag('mikey9', 'dont'); g.bond('mikey', { affection: 1 }); }, go: 'a1_mikey_dont' }
      ]
    },
    a1_mikey_open: {
      enter: g => { g.flag('mikey9', 'open'); g.bond('mikey', { trust: 2 }); g.know('femi_halcyon', ['sam', 'mikey'], 'Femi was in Halcyon\'s study. He was scared of them. He came to your door to tell you something, and they killed him for it.'); },
      text: `You tell him the part you can.

That Femi was in Halcyon\'s study. That they paid him and he needed the money. That he was scared of them, and he walked out, and he walked six miles up Broad in the dark to tell you something, and he got as far as the ninth floor.

You don\'t tell him what Femi came to tell you. You don\'t tell him *17*.

Mikey listens to all of it without interrupting, which he has never done in your life. When you\'re done he sits there with the can.

mikey: Then it wasn\'t an adverse reaction.

sam: No.

mikey: Then somebody signed a lie at nine o\'clock this morning, and somebody closed a homicide by noon.

He sets the can down on the step like it might go off.

mikey: Okay. I\'m gonna find out who.

sam: Mikey. Brannigan *asked* for you. In September. By name. You said so.

mikey: I know.

sam: So be careful.

He looks at you. Then he laughs, short, and shoves your head sideways with one hand, the way he did when you were ten.

mikey: Look who\'s telling who to be careful.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_open_weak: {
      enter: g => { g.flag('mikey9', 'open'); g.bond('mikey', { trust: 1 }); g.heat('mikey', 1); g.know('femi_halcyon', ['sam', 'mikey'], 'Femi was in Halcyon\'s study. He was scared of them. He came to your door to tell you something, and they killed him for it.'); },
      text: `You tell him the part you can.

That Femi was in Halcyon\'s study. That he was scared of them. That he walked six miles up Broad in the dark to tell you something, and got as far as the ninth floor.

Mikey listens. When you\'re done, he\'s quiet.

mikey: Tell me *what*, Sammy?

sam: What?

mikey: He walked six miles to tell you something. What?

You don\'t answer. He waits. It\'s a cop thing, or a big-brother thing, or both.

mikey: Okay. Okay. That\'s yours. For now.

He picks his can back up.

mikey: But somebody signed a lie this morning. I\'m gonna find out who.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_open_miss: {
      enter: g => { g.flag('mikey9', 'open'); g.heat('mikey', 2); },
      text: `You try. You open your mouth to tell him about the study and Femi and the six miles, and what comes out is:

sam: He was my friend. He was— I could—

And then nothing. Your throat closes on it.

Mikey waits. Then he puts his hand on the back of your neck.

mikey: Okay. Okay, Sammy.

He doesn\'t push. But you see him file it, the way he files everything: *my brother can\'t say it*. You see him put it in the drawer next to the nosebleeds and the cold and *how does a Halcyon man know your name*.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_lie: {
      enter: g => { g.flag('mikey9', 'lied'); },
      text: `sam: Halcyon\'s been giving RAs flyers since September. Nosebleeds, headaches, cold. Five hundred bucks a referral. I bled in the lounge once in front of half the floor. I\'m on somebody\'s list. That\'s it.

Every word of it is true. That\'s the trick. Every word is true and the sentence is a lie.

Mikey nods slowly.

mikey: Five hundred a referral.

sam: Ask Grace.

mikey: I might.

He drinks. He lets it go. You watch him let it go, and you watch him not quite put it down.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_lie_bad: {
      enter: g => { g.flag('mikey9', 'lied'); g.bond('mikey', { trust: -1 }); },
      text: `sam: Halcyon\'s been giving RAs flyers. Nosebleeds. I bled in the lounge once. I\'m on a list. That\'s all it is.

Mikey looks at you for a long second. Then he looks at your hand.

You\'re touching your left ear.

mikey: The lamp, Sammy. The dog.

sam: Mikey—

mikey: Don\'t.

He finishes the beer. He crushes the can, slowly, in one hand.

mikey: You don\'t have to tell me. But don\'t do *that*. Not to me.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_dont: {
      text: `sam: Don\'t ask me, Mikey. Please. Not tonight.

He doesn\'t say anything for a while. Two doors down, the wind moves the skeleton\'s Phillies cap.

mikey: Okay.

sam: Okay?

mikey: Okay. Not tonight.

He puts his arm around your shoulders and pulls you sideways into him, the way he did when you were small and there was thunder.

mikey: But hear me. If Brannigan comes near you, you call me. Not 911. Not Temple police. *Me.* I don\'t care what time it is. I don\'t care what you\'re in the middle of.

sam: Yeah.

mikey: Say it.

sam: I call you.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_end: {
      night: true,
      enter: g => { g.sleep(7); g.know('brannigan_list9', ['sam', 'mikey'], 'Brannigan asked Mikey whether you get nosebleeds and feel the cold. He asked the RA for a list of every resident on the ninth floor.'); },
      text: `You sit on the stoop with him until the beers are gone. He tells you about a guy he arrested in September who tried to hide a stolen catalytic converter in his pants. You laugh. It hurts to laugh. You do it anyway.

You sleep in your old room, in your old bed, under the glow-in-the-dark stars Mikey stuck on the ceiling when you were seven, and you sleep seven hours without dreaming, the first real night since August.

When you wake up the window is barely gray, and Nonna is knocking on the front door.`,
      next: 'a1_allsouls'
    },

    a1_allsouls: {
      loc: 'ST. MONICA\'S · SOUTH PHILADELPHIA',
      clock: { day: 'Mon', date: 'Nov 2', time: '6:45 AM' },
      text: g => `She\'s on the step in her good black coat and the black lace mantilla she only wears twice a year, and she has her pocketbook over her arm, and she looks at you in your sweatpants like you\'re late.

nonna: All Souls. Get your coat, Salvatò.

St. Monica\'s at seven in the morning on All Souls\' Day is eleven old women, two old men, a priest from Nigeria who reads the names of the dead of the parish very slowly and gets every one of them right, and you.

Nonna doesn\'t make you go up for Communion. After, she takes you by the elbow to the side altar, where the votive candles are, rows of them in red glass, and she puts a five-dollar bill in the brass slot and hands you a long match.

nonna: Your friend. What was his name?

sam: Femi. Femi Ojo.

nonna: Light.

You light one. The flame takes, and holds, and the red glass goes warm.

Nonna puts another five in the slot. She takes the match out of your hand and lights a second one, next to yours.

sam: Who\'s that one for?

nonna: Him also. Your mother says nobody saw him. So. Two. One for him, and one for all the times nobody looked.

She stands there with her hands folded over her pocketbook, looking at the two candles.

nonna: Last night. At the end of the street. Under the light.

Your skin goes cold, all at once, the way it does before the Slip.

nonna: The one who stands like you. He was there again. Three o\'clock in the morning. I don\'t sleep, I look out.

She doesn\'t look at you. She looks at the candles.

nonna: He was crying, Salvatò. Grown man, under the streetlight, crying like a widow at the cemetery. Then the bus went by. Then nothing.

sam: Nonna. Who is he?

She doesn\'t answer right away. The priest from Nigeria is putting out the altar candles one by one with a brass snuffer.

nonna: I don\'t know who he is.

She takes your face in both her cold small hands and pulls it down to hers, and looks at you, close, the way she looks at a tomato at the Italian Market.

nonna: I know whose face he has.

She lets go. She crosses herself at the candles, once for each, and picks up her pocketbook.

nonna: This morning I put salt on the step. Come. I make you eggs.`,
      enter: g => { g.know('revenant3', ['sam', 'nonna'], 'On the night after Halloween, at 3 a.m., Nonna saw the man who stands like you under the streetlight at the end of Mifflin Street. He was crying.'); },
      next: 'a2_door'
    }
  }
});
