/* S1 · E3 · THE BLACKOUT FLOOR, part 2 of 3: Port Richmond, Act Two ("Ninth Floor"), Act Three ("Fifteenth Street"). */
EH.scenes('s01e03', {

  a2_port_richmond: {
    loc: 'E. ALLEGHENY AVE · PORT RICHMOND',
    clock: { time: '8:02 PM' },
    enter: g => { g.meet('teddy'); g.meet('bree'); g.meet('heck'); },
    text: g => `Port Richmond is all Polish bakeries and rowhouses with aluminum awnings, a church spire every four blocks, and the I-95 overpass humming along the river like a giant asleep. The address is a rowhouse with a Virgin Mary in the front window, a church calendar from St. Adalbert's, and a hand-lettered sign in the door: **PLEASE KNOCK SOFT · MOM SLEEPING**.

You knock soft.

Teddy Kowal opens the door. No mask. Up close and in daylight he's twenty, freckled, sunburned across the nose, with tired eyes, a chipped front tooth, and the same Band-Aid on his knuckles. He looks at the pizza box. He looks at you.

teddy: You came.

He says it like he's genuinely surprised. Like he'd bet against it.

teddy: Come in. Quiet. My mom's asleep. She had a bad week.

The kitchen is exactly as hot as everywhere else in Philadelphia, which is to say lethal. A box fan in the window pushes the hot air around. An older woman is asleep in a recliner in the next room under a crocheted blanket, even in this heat, and there's gauze taped over a lump in her forearm.

Heck is sitting on the kitchen floor against the fridge with both hands in a plastic tub of ice. The ice is *boiling*. Steam rolls off it in sheets. He's soaked through with sweat, and his skin has a faint glow under it, like a coal under ash.

heck: Papa. Mira, it's the nene.

He grins at you. He looks terrible.

heck: You kept your promise. You didn't follow. Bree said you wouldn't.

A girl on the counter, eighteen, with a shaved undercut, a cereal box, and a Phillies jersey cut into a tank top, presses her lips together, and your voice comes out of her mouth: *"I swear to God."* Perfect, down to the crackle.

bree: You did, though. You swore. Most people swear and don't mean it. You sound like you meant it.

She holds out the cereal box.

bree: Bree. Cousin. Want some?

teddy: Sit down. Please. I know what you think of us. I'd think it too.`,
    choices: [
      { text: 'Sit. Listen. "Why am I here, Teddy?"', tag: 'Listen',
        fx: g => { g.flag('pr', 'listen'); g.bond('teddy', { respect: 1 }); }, go: 'a2_pr_why' },
      { text: 'Stay standing by the door. "Talk fast. You froze my sneaker to Broad Street." / "You froze my arm."', tag: 'Guarded',
        fx: g => { g.flag('pr', 'guarded'); g.bond('teddy', { tension: 1 }); }, go: 'a2_pr_why' }
    ]
  },
  a2_pr_why: {
    enter: g => { g.know('marisol', ['sam', 'teddy', 'bree', 'heck'], 'A Changed girl in Fishtown, Marisol Reyes, 19, could pop lightbulbs. She went to Halcyon\'s "wellness study" Tuesday. She never came home. Her mother got a text from her phone: "im fine staying w friends." Marisol never texts in lowercase.'); g.know('heck_heat', ['sam', 'heck', 'teddy', 'bree'], 'Heck runs hotter when the weather\'s hot. He can\'t turn it off.'); },
    text: g => `Teddy doesn't sit either. He leans on the counter next to Bree.

teddy: There's a girl in Fishtown. Marisol Reyes. Nineteen. She was on Girard Avenue Saturday night, the night of the Hitch, and since then, when she gets upset, lightbulbs pop. All the lightbulbs. Whole block. She found us. People like us find each other. You'd be surprised.

He takes a breath.

teddy: Tuesday, she went to that study. The Halcyon thing. Five hundred dollars. She needed it for her mom's rent. She went in the front door of their Navy Yard building at two in the afternoon. She never came out.

bree: Her mom got a text from her phone that night. *"im fine staying w friends."* All lowercase.

teddy: Marisol texts like a lawyer. Capital letters, periods. She *corrects people's* commas.

Heck takes his hands out of the ice. The water in the tub is bubbling.

heck: And Thursday, a gray van parks across from Bree's job. At the ShopRite on Aramingo. Two guys. They sit there all day. They don't buy nothing.

teddy: I'm not asking you to like us. I know what we are. I'm asking you: have you seen them? Gray van. Polo shirts. Because if they took Marisol, they're coming for the rest of us. And I think you're at the top of their list, cold guy. You're on TV.`,
    choices: [
      { text: 'Tell him what you know: the name Brannigan, the beds, the RA bounty. Everything Halcyon.', tag: 'Share',
        fx: g => {
          g.flag('pr2', 'shared'); g.bond('teddy', { trust: 3, respect: 1 }); g.bond('heck', { trust: 2 }); g.bond('bree', { trust: 1 });
          if (g.knows('brannigan_name')) g.know('brannigan_name', ['teddy', 'bree', 'heck']);
          if (g.knows('halcyon_beds')) g.know('halcyon_beds', ['teddy', 'bree', 'heck']);
          if (g.knows('halcyon_outreach')) g.know('halcyon_outreach', ['teddy', 'bree', 'heck']);
        }, go: 'a2_pr_shared' },
      { text: '"I\'ll tell you what I know when you stop robbing armored trucks."',
        check: { kind: 'move', move: 'Hold the Line', attr: 'nerve', skill: 'persuade', label: 'Make Teddy stop', on: { strong: 'a2_pr_stop_strong', weak: 'a2_pr_stop_weak', miss: 'a2_pr_stop_miss' } },
        fx: g => g.flag('pr2', 'deal') },
      { text: '"I haven\'t seen anything." Keep it to yourself. You don\'t know these people.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['teddy'], label: 'Lie to Teddy', on: { strong: 'a2_pr_lie', weak: 'a2_pr_lie', miss: 'a2_pr_lie_miss' } },
        fx: g => g.flag('pr2', 'lied') }
    ]
  },
  a2_pr_shared: {
    text: g => `You tell them. ${g.knows('brannigan_name') ? 'Brannigan, the name your brother gave you, and the polo shirt, and the captain\'s office. ' : 'The polo shirt and the tablet. '}${g.knows('halcyon_beds') ? 'Forty-one hospital beds in a Navy Yard basement. ' : ''}${g.knows('halcyon_outreach') ? 'Five hundred dollars to an RA for a name. ' : ''}${g.knows('halcyon_aperture') ? 'APERTURE, on a screen, counting down to 11:51. ' : ''}

Nobody in the kitchen says anything for a long time. The box fan rattles. In the next room, Teddy's mother shifts in her sleep.

heck: Forty-one beds.

He says it to the tub of ice. Then he says it again in Spanish, very quietly, like a prayer.

Teddy looks at you differently now. It's not friendship. It's the look two people give each other in a hospital waiting room.

teddy: Okay. Then here's the deal, cold guy. If they come for one of us, we call the rest. All of us. Doesn't matter who likes who. Doesn't matter about the trucks.

He writes a number on the pizza box lid with a Sharpie and tears it off.

teddy: My cell. Bree's under it. Heck doesn't have a phone. He melts them.

heck: *One time.*

bree: Three times.`,
    enter: g => { g.flag('teddy_number'); g.know('teddy_number', ['sam', 'teddy'], 'You have Teddy\'s and Bree\'s numbers. The deal: if Halcyon comes for one of you, you call the others.'); },
    next: 'a2_pr_leave'
  },
  a2_pr_stop_strong: {
    enter: g => { g.flag('teddy_number'); g.flag('teddy_stop', 'promised'); g.bond('teddy', { respect: 3, trust: 1 }); g.know('teddy_number', ['sam', 'teddy'], 'You have Teddy\'s and Bree\'s numbers. Teddy promised: no more armored trucks. The deal: if Halcyon comes for one of you, you call the others.'); },
    text: `sam: I'll tell you what I know when you stop robbing armored trucks. A guard almost died at Girard. A trolley full of people.

Teddy looks at you for a long beat. Then he looks through the doorway at his mother in the recliner.

teddy: We've got enough. For the evaluation. Not the surgery. The evaluation.

sam: Teddy.

teddy: …Okay. No more trucks. I swear.

Bree presses her lips together and plays it back at him in his own voice, *"No more trucks. I swear,"* and grins.

bree: Recorded.

teddy: Yeah. I know.

So you tell them: the polo shirt, the name, the beds. Teddy writes his number on the pizza box lid with a Sharpie and tears it off.

teddy: If they come for one of us, we call the rest. All of us. That's the only deal I've got.`,
    next: 'a2_pr_leave'
  },
  a2_pr_stop_weak: {
    enter: g => { g.flag('teddy_number'); g.flag('teddy_stop', 'maybe'); g.bond('teddy', { respect: 1 }); g.know('teddy_number', ['sam', 'teddy'], 'You have Teddy\'s and Bree\'s numbers. The deal: if Halcyon comes for one of you, you call the others.'); },
    text: `sam: I'll tell you what I know when you stop robbing armored trucks.

teddy: When my mother has a kidney, I'll stop robbing armored trucks.

He says it without heat. It's just a fact.

teddy: But I'll be careful. Nobody else gets hurt. That's the best I can do.

It isn't enough. It's what there is. You tell them some of it. Teddy writes his number on the pizza box lid and tears it off.

teddy: If they come for one of us, we call the rest.`,
    next: 'a2_pr_leave'
  },
  a2_pr_stop_miss: {
    enter: g => { g.bond('teddy', { tension: 2, respect: -1 }); g.flag('teddy_stop', 'refused'); },
    text: `sam: I'll tell you what I know when you stop robbing armored trucks.

Teddy's face closes like a garage door.

teddy: You've got a mother, right? A family? A house with a roof? Must be nice to have principles.

heck: Teddy.

teddy: No. He came into *my* kitchen. In that shirt.

He opens the front door. The heat comes in like a wall.

teddy: Thanks for the pizza.`,
    next: 'a2_pr_leave'
  },
  a2_pr_lie: {
    text: `sam: I haven't seen anything. Sorry.

Teddy nods slowly.

teddy: Okay.

He doesn't believe you, but he lets it go, which is maybe the most Teddy thing you'll ever see him do. He writes a number on the pizza box lid with a Sharpie and tears it off anyway.

teddy: In case you start seeing things.`,
    enter: g => { g.flag('teddy_number'); g.know('teddy_number', ['sam', 'teddy'], 'You have Teddy\'s number. "In case you start seeing things."'); },
    next: 'a2_pr_leave'
  },
  a2_pr_lie_miss: {
    enter: g => g.bond('teddy', { trust: -1 }),
    text: `sam: I haven't seen anything.

Bree laughs. Then, in your voice, perfect: *"I haven't seen anything."* She plays it again, slower, and in the slow version you can hear it: the tiny catch before *anything*, the breath of a lie.

bree: That's a lie, cold guy. You lie in B-flat.

Teddy opens the front door.

teddy: Thanks for the pizza.`,
    next: 'a2_pr_leave'
  },
  a2_pr_leave: {
    clock: { time: '9:05 PM' },
    text: g => `On the stoop, Heck follows you out. He stands in the doorway, huge, his skin faintly glowing in the dusk like a lamp behind a lampshade.

heck: The heat, papa. It makes it worse. Every day it's hot, I run hotter. Last night I woke up and the sheets were on fire. Not smoking. *On fire.*

He holds up his hands. The air above them wobbles.

heck: If it gets bad, I don't know if I can turn it off.

He goes back inside. ${g.f('teddy_number') ? 'You ride back across North Philly with Teddy\'s number in your pocket on a piece of cardboard that smells like pizza.' : 'You ride back across North Philly with nothing in your pocket but the smell of a stranger\'s kitchen.'} The sun's going down orange and swollen behind City Hall. It's still a hundred degrees.`,
    next: 'a2_blackout'
  },
  a2_no_go: {
    clock: { time: '8:40 PM' },
    text: `You don't go. You sit on your bed in 9-14 with the window open and the box fan roaring and eat Mrs. Bhattacharya's biryani straight out of the container. It's the best thing you've eaten in your life. It's so spicy you sweat, which in a hundred-degree room is a kind of madness.

At 8:40, Ciro texts you a photo. It's a note someone has slid under the door of the closed store, written on the back of a Ciro's menu in careful block capitals:

> IF HE DIDN'T COME, TELL HIM: WATCH FOR A GRAY VAN. THEY TOOK A GIRL NAMED MARISOL. SHE WENT TO THEIR "STUDY" AND DIDN'T COME BACK. WE'RE NOT THE BAD GUYS HE SHOULD WORRY ABOUT. —T

TXT ciro: who is T
TXT ciro: dont tell me
TXT ciro: i dont want to know`,
    enter: g => { g.know('marisol', ['sam'], 'Teddy left a note: a girl named Marisol went to Halcyon\'s "study" and didn\'t come back. Watch for a gray van.'); },
    next: 'a2_blackout'
  },

  /* ================= ACT TWO: NINTH FLOOR ================= */
  a2_blackout: {
    card: { kind: 'act', label: 'Act Two', title: 'Ninth Floor' },
    night: true,
    loc: 'CARDONE HALL · 9TH FLOOR',
    clock: { time: '9:41 PM' },
    text: `At 9:41 PM, every light in Cardone Hall goes out at once.

Not a flicker. A *click*, deep in the building, like a giant switch being thrown, and then nothing: no hum of the fridge, no rattle of the box fan, no whine of the elevator motor, nothing but the sudden huge silence of fourteen floors of concrete that have stopped breathing.

You stand very still in the dark. For one second, your heart slams against your ribs, because you think it's *happening again*.

But it isn't cold. It's the opposite of cold. It's a hundred and one degrees, and getting hotter, and through the window the whole of North Broad is dark for blocks in every direction, the streetlights out, only car headlights moving. To the south, Center City is still lit up like a birthday cake. A rolling outage. PECO.

In the hallway, a phone flashlight comes on.

Jules is standing in the doorway of 9-11 in a tank top and running shorts, with a book in one hand and her phone in the other, and the white light of the flashlight throws her shadow huge against the cinderblock.

jules: Of course.

From the stairwell door at the end of the hall comes another light: a battery lantern, swinging. Grace comes through with a clipboard under her arm, sweat-soaked, in an RA polo.

grace: PECO says four to six hours. Rolling. The elevators are dead. Devontae from 9-02 is stuck in one between six and seven. He's fine. He's eating a sleeve of Oreos and doing a podcast about it. Fire department's coming for him.

She looks at the two of you, standing in your doorways across the hall from each other, the only people left on the ninth floor.

grace: It's twelve degrees cooler on the roof. I didn't say that. The alarm on the roof door doesn't work. I didn't say that either.

She goes back into the stairwell. Her lantern bobs down and away.

Jules looks at you across the hallway.

jules: Twelve degrees.

sam: That's what she didn't say.`,
    choices: [
      { text: '"I\'ve got ice packs. In a cooler of biryani. Long story." Hold up the cooler.', tag: 'Roof',
        fx: g => { g.flag('roof_why', 'biryani'); g.bond('jules', { affection: 1 }); }, go: 'a2_roof' },
      { text: '"After you, Your Highness." You\'re never going to stop.', if: g => g.f('door') === 'highness', tag: 'Roof',
        fx: g => { g.flag('roof_why', 'highness'); g.bond('jules', { respect: 1 }); }, go: 'a2_roof' },
      { text: 'Just go. Hold the stairwell door. Let her decide.', tag: 'Roof',
        fx: g => { g.flag('roof_why', 'door'); g.bond('jules', { trust: 1 }); }, go: 'a2_roof' }
    ]
  },
  a2_roof: {
    night: true,
    loc: 'CARDONE HALL · ROOF',
    clock: { time: '10:05 PM' },
    enter: g => { g.bond('jules', { tension: -1 }); },
    text: g => `${{ biryani: 'jules: Why do you have a cooler of biryani?\n\nsam: Nik\'s mom. She said eat it before Monday or it\'ll kill me.\n\njules: That\'s the most reasonable threat I\'ve heard all week.', highness: 'She looks at you for a long second.\n\njules: You\'re never going to stop.\n\nsam: Nope.\n\nShe walks past you into the stairwell. You could swear, in the flashlight, that she\'s almost smiling.', door: 'You hold the stairwell door. She looks at you, then at the dark stairs, then at you again. She goes up.' }[g.f('roof_why')]}

The roof is gravel and tar and HVAC units, all dead. It's eighty-nine degrees up here, which feels like a mercy. And North Philadelphia is *gone*.

Every streetlight, every window, every bodega sign, for half a mile in every direction, is dark. The city has been switched off around you. You can see stars, *actual stars*, three or four of them, which you've never seen from North Philly in your life. And to the south, Center City glows like a bonfire behind a hill, every tower lit, William Penn on top of City Hall in his little spotlight like he's onstage.

Jules walks to the parapet and stands there for a long time with the hot wind pulling at her hair.

jules: It looks like that night.

sam: The Hitch?

jules: The lights all going out. The city going dark around you. Like being in the eye of something.

She sits down on the gravel with her back against an HVAC unit. After a second, so do you. Not close. A careful two feet of gravel between you.

You open the cooler. Her beverage center died with everything else, so she's brought four seltzers that are already lukewarm. You trade her an ice pack. She holds it against the back of her neck and closes her eyes, and makes a sound you've never heard her make, a small, helpless sound of relief, and then opens her eyes and looks at you like she's daring you to mention it.

You don't mention it.`,
    choices: [
      { text: 'Ask about the Hitch. "Where were you? When it happened."', tag: 'The night',
        fx: g => { g.flag('roof1', 'hitch'); g.bond('jules', { trust: 1 }); }, go: 'a2_roof_hitch' },
      { text: 'Make her laugh. That\'s what you\'re for.',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', near: ['jules'], label: 'Make her laugh', on: { strong: 'a2_roof_laugh', weak: 'a2_roof_laugh_weak', miss: 'a2_roof_laugh_weak' } },
        fx: g => g.flag('roof1', 'laugh') },
      { text: 'Don\'t talk. Look at the stars. Let the quiet be enough.', tag: 'Quiet',
        fx: g => { g.flag('roof1', 'quiet'); g.bond('jules', { respect: 1, trust: 1 }); }, go: 'a2_roof_quiet' }
    ]
  },
  a2_roof_hitch: {
    night: true,
    text: `sam: Where were you? When it happened. Before the window.

She's quiet for a while.

jules: At the concert. With Simone. Standing by the bubble tea place because there was shade. I was looking at my phone. My mother had texted me a photo of my old room at Ravenscourt, with no caption. Just my room. Made up. Waiting.

She turns the seltzer can in her hands.

jules: And then it went cold, and everything stopped, and I…

She stops.

jules: I don't remember the next part. Simone says the window came down. I don't remember the window. I remember the cold, and then I was sitting on the curb, and there was glass all around me, in a circle, like a drawing of a sun.

sam: You remember the cold?

jules: Like January. Like the chapel at Gran's house in January.

She looks at you sideways.

jules: You remember it too.

It isn't a question.`,
    next: 'a2_glow'
  },
  a2_roof_laugh: {
    night: true,
    enter: g => { g.bond('jules', { affection: 2 }); g.flag('roof_laugh'); },
    text: g => `You do Devontae, stuck in the elevator, recording a podcast. *"Welcome back to Trapped, the podcast. I'm your host, and I'm in an elevator. Today's guest is an Oreo."*

${g.f('study2') === 'laugh' ? 'She already broke once this week.' : 'You\'ve been trying to make her laugh for two weeks.'} You expect nothing.

She laughs.

It isn't the shocked *ha*, and it isn't the swallowed thing she does behind her wrist. It's a real laugh, out loud, on a dark roof, with her head back against an HVAC unit and her eyes closed, and it goes on longer than the joke deserves, the way laughs do when somebody's been holding a lot of other things for a long time.

When she stops, she wipes her eyes with the back of her wrist.

jules: That wasn't even funny.

sam: You laughed for, like, a minute.

jules: I'm *tired*, Kearney. I'm tired and it's a hundred degrees and Devontae is doing a podcast in an elevator.

She looks at you. For once, she doesn't look away first.

jules: I hate that.

sam: I know.`,
    next: 'a2_glow'
  },
  a2_roof_laugh_weak: {
    night: true,
    text: `You do Devontae stuck in the elevator recording a podcast. She smiles, a little, at the gravel.

jules: You're very committed to that.

sam: I'm committed to everything.

jules: That's what worries me.

She says it lightly. It doesn't come out light.`,
    next: 'a2_glow'
  },
  a2_roof_quiet: {
    night: true,
    text: `You don't say anything. Neither does she.

You sit with your backs against a dead HVAC unit and look at the four stars over North Philadelphia, the first you've ever seen from here, and listen to the city: car alarms, a radio somewhere playing salsa off a battery, a dog, a kid laughing on a fire escape, a siren very far away.

After a long time she says, without turning her head:

jules: Thank you.

sam: For what?

jules: For not filling it.

That's all. But she moves her hand on the gravel between you, a little, a few inches. Not to you. Just closer.`,
    next: 'a2_glow'
  },

  a2_glow: {
    night: true,
    clock: { time: '11:38 PM' },
    text: g => `At 11:38, the smoke starts.

You see it first: a thin gray column rising against the bonfire glow of Center City, east of you and a little north. Then the color under it, an orange that flickers wrong. Then the sirens, three, four, five, all converging.

Jules stands up and goes to the parapet.

jules: That's close.

It's about ten blocks. Fifteenth and Lehigh, maybe. In the dark you can see the shapes of the rowhouses against the glow, and one of them is *burning*, a whole row of windows lit orange from the inside.

And then you feel it, in your chest. Not the Slip, not exactly, but something like it, an answering cold. It's like when you hear your name across a crowded room before you know you've heard it.

Your phone buzzes. ${g.f('teddy_number') ? 'A text. Not from Nik.\n\nTXT teddy: 15th & lehigh\nTXT teddy: the van came\nTXT teddy: heck cant turn it off\nTXT teddy: please' : 'The burner. Nik, from Edison.\n\nTXT nik: bro\nTXT nik: scanner. 15th & lehigh. structure fire, multiple occupants, 3rd floor\nTXT nik: and the dispatcher just said "subject on fire, WALKING"\nTXT nik: walking sam'}

Beside you, Jules is watching the fire with her arms folded. Then she's watching *you*. Watching you read your phone.

jules: What is it?`,
    choices: [
      { text: '"Bathroom. Two minutes." Go. Lie and go.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['jules'], near: ['jules'], label: 'Lie to Jules', on: { strong: 'a3_go', weak: 'a3_go', miss: 'a3_go' } },
        fx: g => { g.flag('leave', 'lie'); } },
      { text: '"I have to go. I can\'t tell you why. I\'m sorry." Look at her when you say it.', tag: 'Can\'t',
        fx: g => { g.flag('leave', 'cant'); g.heat('jules', 1); g.bond('jules', { respect: 1 }); }, go: 'a3_go' },
      { text: 'Stay. The fire department is coming. This is what the fire department is for.', tag: 'Stay',
        fx: g => { g.flag('leave', 'stay'); g.hidden('revenant_drift', -1); }, go: 'a3_stayed' }
    ]
  },

  /* ================= ACT THREE: FIFTEENTH STREET ================= */
  a3_go: {
    card: { kind: 'act', label: 'Act Three', title: 'Fifteenth Street' },
    night: true,
    loc: 'N. 15TH ST & W. LEHIGH AVE',
    clock: { time: '11:44 PM' },
    enter: g => { if (g.f('leave') === 'lie') g.flag('jules_lied_roof'); },
    text: g => `${{ lie: 'jules: Two minutes.\n\nShe says it flatly, still watching the fire. You go before she can look at you.', cant: 'She looks at you for a long moment. Something moves in her face.\n\njules: Go, then.\n\nShe doesn\'t ask. She turns back to the fire. You go.', stay: '' }[g.f('leave')]}

${{ hoodie: 'Down the stairs in the dark, nine flights. Black hoodie, gaiter up to your eyes, Pop\'s Eagles cap backward.', windbreaker: 'Down the stairs in the dark, nine flights. Ciro\'s windbreaker on, inside out, zipped to your chin, in a hundred degrees.', helmet: 'Down the stairs in the dark, nine flights. The helmet on, the visor down, the world gone amber.', none: 'Down the stairs in the dark, nine flights. No mask, no hood, no nothing. Just you.' }[g.f('costume')]} You come out the side door onto Broad, and you step through.

Ten blocks in the Slip. The burning city stopped around you, smoke hanging in frozen gray curtains. The cold is a relief so huge it's almost obscene. You run.

You step back out on the corner of 15th and Lehigh, and the heat hits you like a door.

It's a rowhouse block, narrow, both sides, with the El and the city behind it. The third house from the corner is *burning*, flames out of the first-floor windows and climbing, black smoke rolling up the brick. The house next to it has started to go. People are on the sidewalk in their underwear, screaming, filming, throwing buckets of water that turn to steam before they land.

And in the middle of the street, standing in a puddle that's boiling around his bare feet: Heck.

His clothes are mostly gone. His skin is *glowing*, not like a coal now but like a stove element, orange-white, the air around him rippling so hard he looks like he's underwater. He's crying, and the tears are steam.

heck: I can't. I can't turn it off, I can't, I can't—

At the end of the block, a gray van sits at an angle across the street with its side door open. Two men in gray polos are crouched behind it holding long black rifles. Not guns. Something with a cylinder under the barrel. *Dart* rifles. They're calm. They're waiting for Heck to cool down enough to touch.

And Teddy is standing at the van's front bumper with his bare hand on the hood. The van isn't going anywhere. It's frozen in place, as immovable as Broad Street. But Teddy can't let go. If he lets go, they drive off with whatever they came for.

Bree is on the sidewalk screaming at the men in polos in a dozen voices at once: a cop's, a firefighter's, a priest's, a mother's. They don't even look at her.

And on the third floor of the burning house, at the window, there's a woman holding a baby, and a little boy beside her, maybe six, his face pressed to the glass. The stairs behind them are gone. You can see the orange light coming up through the floor.

The fire trucks are still four blocks away. You can hear them.

You've got one Slip in you. Maybe two. You've got time to do one thing right.`,
    choices: [
      { text: 'The window. The woman, the baby, the boy. Get them out.', tag: 'The family',
        fx: g => { g.flag('fire', 'family'); g.hidden('revenant_drift', 0.3); }, go: 'a3_family' },
      { text: 'Heck. He\'s going to burn the whole block down. There\'s a hydrant on the corner.', tag: 'Heck',
        fx: g => { g.flag('fire', 'heck'); }, go: 'a3_heck' },
      { text: 'The van. The men with the dart rifles. Take them out of this before they take somebody.', tag: 'The van',
        fx: g => { g.flag('fire', 'van'); g.hidden('halcyon_heat', 3); }, go: 'a3_van' }
    ]
  },
  a3_stayed: {
    night: true,
    card: { kind: 'act', label: 'Act Three', title: 'Fifteenth Street' },
    enter: g => { g.flag('fire', 'stayed'); g.know('let_fire_burn', ['sam'], 'You stayed on the roof while 15th & Lehigh burned.'); },
    text: g => `You stay.

You put your phone face down on the gravel and you stand at the parapet next to Jules and you watch the fire, and every cell in your body that came from Assunta DiNardo screams at you to *go*.

You don't go.

The fire trucks arrive at 11:51, which you notice, and which makes your skin crawl. The orange in the windows goes from bright to dull to steam. It takes an hour. At one point the whole roof of the burning house falls in with a sound like a slow clap, and a column of sparks goes up into the dark, and Jules takes a breath and holds it.

${g.f('teddy_number') ? 'Your phone buzzes against the gravel. Once. Twice. Six times. You don\'t turn it over.' : 'The burner buzzes against the gravel. Nik. Then Nik again. You don\'t turn it over.'}

Later, you'll read about it in the Inquirer. A mother and a six-year-old boy, rescued from a third-floor window by ladder. The baby, eight months old, treated for smoke inhalation at St. Christopher's. Stable. A man witnesses describe as "glowing," who walked away from the scene before police arrived. A gray van that was there, and then wasn't.

And a girl named Bree Kowal, eighteen, of Port Richmond, reported missing by her family the next morning.

You don't know any of that yet. Right now, all you know is that you're standing on a roof next to a girl who keeps glancing at you sideways, like she's waiting for something, and you're not doing the thing you were built to do.

jules: You wanted to go.

sam: What?

jules: Just now. You looked at that fire like it was calling your name.

She doesn't push. She just says it, and lets it sit there in the hot dark between you.`,
    next: 'a4_return'
  },

  a3_family: {
    night: true,
    text: `You step through.

The fire stops. It's the strangest thing you've ever seen: flame *frozen*, orange and gold and white, solid as glass sculpture, curling out of the windows in shapes like coral. The smoke is a gray ceiling you could almost touch. And it's *cold*, so cold that the frozen flames should be impossible, and they're not, they're right there.

You go up the front of the house. Not the stairs. The stairs are gone, a hole full of frozen fire. You go up the *outside*: the window ledge, the downspout, the second-floor sill, the brick gone soft and hot even in the Slip. Your fingers burn where they touch it.

Third floor. The window. The woman's face inches from yours through the glass, mouth open, mid-scream. The baby against her chest. The boy's palms flat on the pane.

The glass is the problem.`,
    choices: [
      { text: 'Break the glass. Carry them down one at a time. Every second you have.',
        check: { kind: 'pool', attr: 'body', skill: 'athletics', diff: 3, power: true, label: 'Three trips down a burning wall', on: { crit: 'a3_family_clean', success: 'a3_family_clean', partial: 'a3_family_partial', fail: 'a3_family_fail', botch: 'a3_family_fail' } } },
      { text: 'Don\'t climb. Think. Find another way down. The house next door. The roof.',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 13, label: 'See the way out', on: { crit: 'a3_family_clean', success: 'a3_family_clean', fail: 'a3_family_partial', fumble: 'a3_family_fail' } },
        fx: g => g.hidden('revenant_drift', -0.3) }
    ]
  },
  a3_family_clean: {
    night: true,
    enter: g => { g.flag('family', 'clean'); g.drift(2); g.mastery(5); g.xp(1); },
    text: `You do it.

You'll never be able to explain to anyone how. The glass comes out of its frame in your hands in big frozen sheets. The boy first, under your arm, light as a backpack. Down the wall, across the street, set him on the far curb in the cold. Back up. The baby, so small, warm even in the Slip, pressed against your chest inside your shirt. Down. Back up. The mother, heavy, rigid, her mouth still open around a scream that hasn't happened yet. You get her down the wall a foot at a time, your arms screaming, the pull coming, *coming*—

You set her down on the far curb next to her children.

!! ~WHUMP

The world comes back. The house *roars*. The third-floor window you just emptied explodes outward in a ball of flame, right where they were standing.

The woman on the curb looks at her children. Looks at the window. Looks at her own hands. She starts screaming then, the scream she started three floors up, finishing it on a sidewalk across the street, and the boy grabs her leg, and the baby wails, and they're alive. They're *alive*.

Your nose is pouring. Your fingertips are blistered from the brick. You can't feel your arms.`,
    next: 'a3_rest'
  },
  a3_family_partial: {
    night: true,
    enter: g => { g.flag('family', 'partial'); g.drift(2); g.mastery(4); g.injure({ id: 'burned_hands', name: 'Burned hands', pen: 1, heal: 2, affects: ['body', 'reflex'] }); },
    text: `You get the boy out. You get the baby out. You get them down the wall and onto the far curb, and you go back up for the mother, and the pull takes you halfway down.

!! ~WHUMP

The world comes back with a roar. You're on the second-floor sill with the mother in your arms, and the window above you explodes, and something burning comes down across your hands and your back.

You jump.

You land in the street holding her, and your ankle goes sideways, and you both go down hard on the asphalt, and she's alive. She's screaming and crawling toward her children on the far curb, and she's alive.

Your hands are burned, both palms, blistered white. You don't feel it yet. You will.`,
    next: 'a3_rest'
  },
  a3_family_fail: {
    night: true,
    enter: g => { g.flag('family', 'fail'); g.drift(3); g.injure({ id: 'burned_hands', name: 'Burned hands', pen: 1, heal: 2, affects: ['body', 'reflex'] }); g.hidden('revenant_drift', 1); },
    text: `You get the boy. You get him down and onto the far curb, and you go back up, and your hands are blistering on the brick, and you get the baby, and you're halfway down when the pull takes you.

!! ~WHUMP

The world comes back. The fire roars. You're clinging to a second-floor sill with a baby against your chest, and above you the mother is still at the window, alone, screaming her children's names, and the glass behind her is turning orange.

You drop to the street. You put the baby in the arms of a neighbor in a bathrobe. You turn around to go back—

—and a ladder truck slews around the corner, and two firefighters are already up it, already at the window, already pulling the mother out into the air. They got her. *They* got her. Not you.

She's alive. She's burned on her arms and her back, and her hair is gone on one side, and she's alive.

You should have been faster. You keep thinking it, over and over, like a song stuck in your head. *You should have been faster.*`,
    next: 'a3_rest'
  },

  a3_heck: {
    night: true,
    text: `There's a fire hydrant on the corner. Kids opened it this afternoon to cool off, and somebody's closed it since, but the wrench is still lying in the gutter where they left it.

You grab the wrench. You put it on the hydrant's cap. You *heave*.`,
    choices: [
      { text: 'Open it. Put everything into it.',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 2, power: true, label: 'Crack the hydrant', on: { crit: 'a3_heck_good', success: 'a3_heck_good', partial: 'a3_heck_partial', fail: 'a3_heck_partial', botch: 'a3_heck_partial' } } },
      { text: 'Slip, crack it, aim the stream. Use the frozen seconds to do it right.', slip: true, go: 'a3_heck_good' }
    ]
  },
  a3_heck_good: {
    night: true,
    enter: g => { g.flag('heck_saved', 'clean'); g.bond('heck', { trust: 3, affection: 2 }); g.bond('teddy', { trust: 2 }); g.know('heck_saved', ['sam', 'heck', 'teddy', 'bree'], 'You cooled Heck with a fire hydrant at 15th & Lehigh while the Halcyon men waited with dart rifles.'); },
    text: `The cap spins off. The hydrant *screams*, and a solid column of water blasts across 15th Street. You get both hands on the nozzle and swing it, and it hits Heck square in the chest.

The street *explodes*. Steam erupts off him in a white wall that rolls down the block, so thick you can't see your own hands. People scream. Somebody's car alarm goes off. And inside the cloud, you hear Heck making a sound like a man who's been on fire for an hour and just put his face in a cold river.

When the steam thins, he's on his knees in the street, and his skin is just skin again: brown, burned in places, smoking, but *skin*. He's gasping. He's alive.

He looks up at you through the steam.

heck: …Papa.

Behind the van, one of the men in polos lowers his dart rifle. He looks at you, at the hydrant, at Heck, and then he says something into a radio on his shoulder, very calm, and you hear the van's side door slide shut.

Teddy takes his hand off the hood. The van backs away down Lehigh Avenue without its headlights and is gone.

Up on the third floor, the window is full of fire. And then a ladder truck slews around the corner, and two firefighters are up it in seconds, and they bring the woman out, and the baby, and the boy, coughing, burned, black with smoke. *Alive.* The fire department got them. You didn't. You chose, and they got them anyway, and you'll never know whether they'd have made it in time if you hadn't chosen.`,
    next: 'a3_rest'
  },
  a3_heck_partial: {
    night: true,
    enter: g => { g.flag('heck_saved', 'partial'); g.bond('heck', { trust: 2 }); g.injure({ id: 'burned_hands', name: 'Burned hands', pen: 1, heal: 2, affects: ['body', 'reflex'] }); },
    text: `The cap's rusted on. You heave, and heave, and the wrench slips, and you take the skin off two knuckles. Heck is getting hotter. The paint on the car beside him is blistering.

Then the cap *gives*, and the hydrant screams, and you get the water onto him, but you have to get *close* to aim it, close enough that the air coming off him burns your hands on the nozzle, burns them white.

The street explodes in steam.

When it clears, he's on his knees, skin again, gasping. Your hands are blistered from fingertips to wrists. You can't open them.

The van backs away down Lehigh without its headlights. On the third floor, a ladder truck is pulling a woman and a baby and a little boy out of the window, all three black with smoke, all three alive. The fire department got them. Not you.`,
    next: 'a3_rest'
  },

  a3_van: {
    night: true,
    text: g => `You step through and walk down Lehigh Avenue in the frozen dark to the van.

Two men in gray polos crouch behind it with dart rifles. Up close, they're ordinary: forties, a wedding ring on one, reading glasses pushed up on the other's head. They look like dads at a Little League game. One of them has a tablet clipped to his belt. On the screen, frozen, is a map of North Philly covered in little colored dots. One of the dots is pulsing, right here, at 15th and Lehigh.

There's a second dot, pulsing, ten blocks south. At Broad and Cecil B. Moore.

At Cardone Hall.

The pull is coming. You've got seconds.`,
    choices: [
      { text: 'Take the rifles. Strip the darts out of both. Throw them down the sewer.', tag: 'Disarm',
        fx: g => { g.flag('van_did', 'rifles'); }, go: 'a3_van_out' },
      { text: 'Take the tablet. Whatever they know, you want it.', tag: 'Tablet',
        fx: g => { g.flag('van_did', 'tablet'); g.know('halcyon_tablet_dots', ['sam'], 'The Halcyon men\'s tablet showed a map of North Philly covered in dots. One pulsed at 15th & Lehigh. Another pulsed at Cardone Hall.'); }, go: 'a3_van_out' }
    ]
  },
  a3_van_out: {
    night: true,
    enter: g => { g.drift(2); g.mastery(4); g.know('halcyon_tablet_dots', ['sam'], 'The Halcyon men\'s tablet showed a map of North Philly covered in dots. One pulsed at 15th & Lehigh. Another pulsed at Cardone Hall.'); },
    text: g => `${g.f('van_did') === 'rifles' ? 'You pull the dart cartridges out of both rifles. There are three darts in each, long, with a yellow fluid inside, and a label printed on the barrel of each one in tiny type: **HALCYON · RECOVERY · ES-SERIES**. You drop all six down the storm drain at the corner.' : 'You unclip the tablet from his belt. It\'s heavy, and cold, and in the frozen world the dot at Cardone Hall is still pulsing on the screen. You tuck it into your waistband under your shirt.'}

!! ~WHUMP

The world comes back. The man ${g.f('van_did') === 'rifles' ? 'raises his rifle and pulls the trigger on an empty chamber. *Click.* He looks at it like it betrayed him.' : 'reaches for the tablet at his belt and finds nothing. He pats himself down twice, like a man who\'s lost his keys.'}

Then he looks up. Right at you.

You're standing ten feet from him, ${g.f('costume') === 'none' ? 'with your face bare in the light of the fire' : 'in your hood and your mask, in the light of the fire'}. He doesn't reach for anything. He just looks at you, calm, the way the tablet man did on Broad, the way you'd look at a deer that walked into your yard.

POLO MAN: Easy, son.

He says it gently.

POLO MAN: We're the good guys.

Then the van door slides shut, and Teddy takes his hand off the hood, and the van backs away down Lehigh without its headlights.

And behind you, at the burning house, Heck is walking into the fire.

He walks straight in through the front door, which is a wall of flame, and the flame doesn't touch him, or it does and he doesn't care. Thirty seconds later he comes back out through it, glowing like a lantern, with the boy under one arm and the baby against his chest and the mother holding onto his back, all three screaming, all three alive.

He sets them down on the sidewalk. The baby's arm is blistered where his hand was. He looks at it. He looks at his own hand.

heck: No. No, no, no. I'm sorry. *Lo siento, mamá, I'm sorry—*

He sits down in the street and puts his face in his burning hands and sobs, and the asphalt under him begins to smoke.`,
    next: 'a3_rest'
  },

  a3_rest: {
    night: true,
    clock: { time: '12:21 AM' },
    enter: g => {
      g.recap('A rowhouse burned at 15th & Lehigh. Halcyon\'s men were waiting with dart rifles.');
      if (g.f('costume') === 'none') { g.hidden('halcyon_heat', 2); g.heat('press', 2); } else g.heat('press', 1);
      g.flag('number_was', !!g.f('teddy_number'));
      if (!g.f('teddy_number')) { g.flag('teddy_number'); g.know('teddy_number', ['sam', 'teddy'], 'Teddy wrote his number on the back of your hand. "They\'ll come back. When they do, I\'m calling you."'); }
      g.know('sam_number', ['sam', 'teddy', 'bree'], 'Teddy and Bree have your number.');
      g.know('bree_scream', ['sam', 'bree', 'teddy', 'heck'], 'Bree heard something in the cold at 11:51:04 on the night of the Hitch, something from the sky, and her power keeps it. It sounds like a crowd and a whale and a clock going backward, and under it, laughing.');
    },
    text: g => `${g.f('fire') === 'family' ? 'You find out later what happened behind you while you were on the wall. Teddy did the only thing he could think of: he let go of the van and put his hand on Heck. And Heck *stopped*. Not cooled. Stopped, a glowing statue in the middle of 15th Street, his tears frozen mid-fall, and the men in polos couldn\'t touch him or move him, and after four minutes of trying they gave up and drove away. Teddy held on until the fire trucks came. His hand is burned from palm to wrist.\n\n' : ''}Afterward, in an alley off Lehigh, behind a shuttered laundromat, the four of you. Heck sitting on an overturned milk crate under a dripping AC unit someone's run a garden hose to, letting the water run over his head. Teddy pacing. Bree sitting on the curb with her knees pulled up to her chin, shaking, not from cold.

The fire's out. The trucks are still there, pumping water into the black shell of the house, and the street's full of cops and neighbors and phones, and nobody's looking down this alley.

teddy: ${g.f('fire') === 'van' ? 'You took them out. You *saw* them.' : 'They were going to take him. They had *darts*.'} Bree. Tell him. Play it for him.

bree: Teddy, no.

teddy: *Play it.*

Bree looks at you. Her face is wet. When she speaks, it's in her own voice, very small.

bree: That night. The Hitch. I was on the El platform at Allegheny. And I always hear everything. I don't mean I'm a good listener. I mean everything I hear, I keep. Forever. Every sound since I was a baby. I can play it back.

She swallows.

bree: At 11:51, when it got cold, I heard something. Not on the street. *Up.* From the sky. I've never told anybody but Teddy. I play it in my sleep. He hears me.

She closes her eyes and opens her mouth, and the sound comes out of her.

It's not a voice. It's not anything you have a word for. It's like a stadium crowd, tens of thousands of people, heard from very far away and slowed down, and under it something enormous and low, like a whale singing in a language that runs backward, and under *that*, very faint, a clock, ticking, wrong, *tock-tick, tock-tick*. And under all of it, so faint you might be imagining it, so faint you'll lie awake trying to decide later:

Laughter.

Not cruel laughter. *Delighted.* The way an audience laughs when the show gets good.

Bree closes her mouth. The alley is silent except for the dripping AC.

The hair is standing up on your arms. In a hundred degrees.

heck: *Dios.*

teddy: She plays that in her sleep. Every night. I have to wake her up.

He looks at you. He looks younger than you've ever seen him.

teddy: What *is* that, cold guy?

You don't know. You think about Nonna, at her kitchen window, telling you: *if you ever see somebody else moving in there, somebody who shouldn't be, you come out.*

${g.f('number_was') ? 'teddy: They\'ll come back. When they do, I\'m calling you.' : 'Teddy takes a Sharpie out of his pocket and writes his number on the back of your hand.\n\nteddy: They\'ll come back. When they do, I\'m calling you.'}

You text him from the alley, right there, so he has yours: *its the cold guy.* His phone buzzes in his pocket. He doesn't look at it. He doesn't have to.`,
    next: 'a4_return'
  }
});
