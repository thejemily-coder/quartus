/* S1 · E8 · ALL HALLOWS, part 2 of 3: Act Two ("The Party"), Act Three ("Ninth Floor"). */
EH.scenes('s01e08', {

  /* ================= ACT TWO: THE PARTY ================= */
  a2_party: {
    card: { kind: 'act', label: 'Act Two', title: 'The Party' },
    night: true,
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { time: '10:24 PM' },
    text: g => `By ten-thirty, the ninth floor is the loudest place in North Philadelphia.

The lounge is packed wall to wall: seven Blurs, three Barbies, a guy in a full inflatable T-rex who can\'t get through the door and is being fed candy corn through the gap, a girl from the fourth floor dressed as Gritty with a terrifying amount of commitment. Simone arrives at ten-fifteen still in her Van Helsing coat, to a standing ovation she organized herself. Grace sits on the arm of the couch with her clipboard and a juice box, judging, in scrubs, not smiling, writing things down.

And then Jules takes off her coat.

She\'s the Liberty Bell.

You don\'t understand it at first. You just see gold: a dress the color of old bronze, flared from the waist like a bell, and her shoulders and arms painted gold too, shimmering under the strobe light Grace finally stopped confiscating, and her hair pinned up into a crown of gold leaves. Then you see the crack. A long black jagged line, hand-painted, running from her collarbone down across the dress to the hem.

The lounge goes quiet. Then it goes *loud*. Devontae yells *PHILLY!* and three Blurs start chanting *JU-LES, JU-LES* for reasons nobody will ever be able to explain.

She stands there in the middle of it, very straight, with her chin up, looking like she\'s going to throw up.

She finds you in the crowd. She walks over. Up close, you can see the brushstrokes in the gold on her shoulders.

jules: Say something.

sam: You\'re the Liberty Bell.

jules: Something *else*.

sam: You\'re from Gladwyne. Before September you\'d never been south of Washington Avenue. You went as the *Liberty Bell*.

jules: I wanted to be something from here.

She says it very quietly, under the music.

jules: Your sister said nobody from the Main Line ever dresses as anything from Philly. She said it was *depressing*. So.

She looks down at the crack painted across her own body.

jules: It\'s flawed. That\'s the point of it. Everybody loves it because it\'s broken and it\'s still standing there.

You don\'t say anything. You can\'t. She looks up at you, and whatever she sees on your face makes her go pink under the gold.

jules: Stop it.

sam: I\'m not doing anything.

jules: You\'re doing it with your *face*.

In your pocket, your phone buzzes. Twice.

On the couch, Grace stands up with her clipboard and clears her throat.

grace: Okay. *Okay.* The costume contest. Everybody shut up. This is the most important decision I will make this semester, and I\'m including my MCAT.`,
    choices: [
      { text: 'Check your phone. Just for a second.', tag: 'Phone',
        fx: g => { g.flag('phone1', 'checked'); }, go: 'a2_phone_early' },
      { text: 'Not now. Grace is announcing. Jules is standing next to you, covered in gold. Not now.', tag: 'Not now',
        fx: g => { g.flag('phone1', 'ignored'); }, go: 'a2_contest' }
    ]
  },
  a2_phone_early: {
    night: true,
    enter: g => { g.know('femi_left_b7', ['sam', 'femi'], 'Femi texted you on Halloween night: he\'d gone to Halcyon\'s residential phase at Building 7, and left. He was coming to you.'); },
    text: g => `You take it out. Three texts. The first one at 9:14, during the show. When you weren\'t looking. Because nobody looks at their phone during Simone\'s show.

TXT femi: sam
TXT femi: i went. the residential thing. building 7 at the navy yard. i didnt tell you because i knew youd tell me not to
TXT femi: i left. im walking. i saw something. can i come to you

You read it twice. Your heart goes cold and fast at the same time.

*Building 7.* You didn\'t know. You didn\'t know because you didn\'t go looking. Two weeks, and you didn\'t go looking.`,
    choices: [
      { text: 'Text back right now: *yes. come. 9th floor cardone. im here. im not going anywhere*', tag: 'Come',
        fx: g => { g.flag('femi_reply', 'come'); g.bond('femi', { trust: 2 }); }, go: 'a2_phone_reply' },
      { text: 'Call him. Right now. In the middle of the lounge.', tag: 'Call',
        fx: g => { g.flag('femi_reply', 'call'); }, go: 'a2_phone_call' }
    ]
  },
  a2_phone_reply: {
    night: true,
    text: `TXT sam: yes. come. 9th floor cardone. im here. im not going anywhere

Delivered. Then, almost immediately:

TXT femi: ok
TXT femi: walking up broad. its far. ill be there by 11 something
TXT femi: dont tell anyone. not even nik. please
TXT femi: ill explain. i saw her sam. i saw marisol

*Marisol.*

You stand there with the phone in your hand in the middle of a party. Jules is looking at you. Grace is reading a list of names off a clipboard. Seven Broad Street Blurs are cheering.

TXT sam: ill be here

You put the phone in your pocket. You\'ll keep it in your hand, you think. You\'ll watch it all night.`,
    next: 'a2_contest'
  },
  a2_phone_call: {
    night: true,
    text: `You call him. You put your finger in your other ear and turn your back on the party and stand in the corner of the lounge by the fridge.

It rings. Once. Twice. Six times.

*Hey, this is Femi. If you\'re hearing this, congratulations, you found me.*

You hang up. You text instead.

TXT sam: come here. 9th floor cardone. im here. call me

Delivered. No dots. Nothing.

You stand by the fridge with the phone in your hand. Behind you, Grace has started reading names off the clipboard. You\'ll keep the phone in your hand. You\'ll watch it all night.`,
    enter: g => { g.flag('femi_reply', 'call'); },
    next: 'a2_contest'
  },

  a2_contest: {
    night: true,
    clock: { time: '10:41 PM' },
    text: g => `grace: Third place. Devontae. As the Blur. For the Wawa bag, which is the only creative choice I\'ve seen from any of the *eleven* Blurs on this floor tonight. You people need help.

Devontae accepts third place like it\'s an Oscar.

grace: Second place. Kyle in 9-08, as the T-rex, for suffering. He\'s been in that thing for four hours. He can\'t sit down. He can\'t use the bathroom. That\'s commitment.

The T-rex, through the doorway, roars with gratitude.

grace: First place.

She looks up from the clipboard. She looks right at Jules.

grace: Pemberton. As the Liberty Bell. You painted your *arms*. I don\'t even like you. First place.

The lounge erupts. Jules goes red under the gold. She stands there while seven Blurs and a Gritty and a T-rex cheer for her, and her face is doing something you\'ve never seen it do: she\'s *delighted*. Plainly, openly delighted, like a little kid, for one second, before she gets it back under control.

Then she turns around and looks at Grace.

jules: Give it to Kyle.

grace: What?

jules: The shower slot. Give it to the T-rex. He can\'t sit down. He\'s suffered more than I have.

Kyle the T-rex starts to cry inside the costume. You can hear it through the inflatable head.

${g.f('femi_reply') ? 'Your phone is in your hand. Nothing.' : 'In your pocket, your phone buzzes again. You don\'t feel it over the music.'}`,
    choices: [
      { text: 'Get up on the coffee table. Make a speech for the T-rex. The floor needs it.', tag: 'Speech',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Work the room', on: { strong: 'a2_speech', weak: 'a2_speech', miss: 'a2_speech_flop' } } },
      { text: 'Stay next to Jules. Say, under the noise: "That was a good thing you just did."', tag: 'Her',
        fx: g => { g.flag('contest', 'her'); g.bond('jules', { affection: 1 }); }, go: 'a2_her' }
    ]
  },
  a2_speech: {
    night: true,
    enter: g => { g.flag('contest', 'speech'); g.bond('simone', { affection: 1 }); },
    text: `You climb onto the coffee table. The lounge goes quiet in a ripple, the way it does when a guy in a costume gets on furniture.

sam: Ladies and gentlemen and Gritty. Tonight, a hero walks among us. He cannot sit. He cannot pee. He cannot fit through a standard door frame. And yet he *perseveres*.

A cheer.

sam: Kyle. You are the Blur we need. Not the Blur we deserve.

The lounge goes *insane*. Seven Blurs carry the T-rex down the hallway on their shoulders, which takes eleven people because he\'s inflatable and keeps tipping. Simone is laughing so hard she\'s sitting on the floor. Grace is shaking her head slowly, eyes closed, a woman watching a building she is responsible for burn down.

You climb down. Jules is waiting at the bottom. She\'s laughing, the real one, the whole-body one, gold on her shoulders.

jules: You\'re an idiot.

sam: You keep saying that.

jules: I keep meaning it.

She takes your wrist.

jules: Come with me. I want to show you something.`,
    next: 'a2_roof'
  },
  a2_speech_flop: {
    night: true,
    enter: g => { g.flag('contest', 'speech'); },
    text: `You climb onto the coffee table. The lounge goes quiet.

sam: Ladies and gentlemen. Tonight, a hero—

The coffee table, which has been structurally compromised since 2019, folds in half. You go down into a pile of candy wrappers and Solo cups. The lounge goes *insane* anyway. Seven Blurs carry *you* down the hallway on their shoulders, for no reason, chanting *TABLE, TABLE*.

When they finally put you down, Jules is waiting at the end of the hall, laughing, the real one, gold on her shoulders.

jules: You\'re an idiot.

sam: You keep saying that.

jules: I keep meaning it.

She takes your wrist.

jules: Come with me. I want to show you something.`,
    next: 'a2_roof'
  },
  a2_her: {
    night: true,
    text: `sam: That was a good thing you just did.

She doesn\'t look at you. She\'s watching Kyle the T-rex try to hug Grace, who is holding her clipboard up like a shield.

jules: It wasn\'t good. I just didn\'t want it.

sam: Pemberton. You wanted it. I watched your face. You wanted it for one whole second.

She turns and looks at you. She\'s very close. The gold on her cheekbone catches the light.

jules: You watch my face too much.

sam: Yeah.

jules: Somebody should tell you to stop.

sam: Somebody should.

She doesn\'t. She takes your wrist instead, her fingers cold and painted, leaving gold on your skin.

jules: Come with me. I want to show you something.`,
    next: 'a2_roof'
  },

  a2_roof: {
    night: true,
    loc: 'CARDONE HALL · ROOF',
    clock: { time: '11:38 PM' },
    text: g => `She takes you up the stairwell to the roof door, the one with the broken alarm, the one you went through on the night of the blackout, and she props it open with the brick, and you go out into the cold.

It\'s forty-four degrees. Halloween. The whole city is lit up below you, orange and gold and every window glowing, and somewhere out toward Fishtown somebody is setting off illegal fireworks, little green and red flowers bursting over the rooftops, very far away, with no sound.

She walks to the parapet. She stands there in her bell dress with her gold arms, shivering. You take off your ${{ blur: 'hoodie', ghostbuster: 'hoodie', cabbie: 'father\'s jacket' }[g.f('costume8')]} and put it on her shoulders. She lets you.

jules: You asked me what I meant.

sam: Yeah.

jules: On the card. *What did you mean.* And I said I didn\'t know yet.

She looks out at the city.

jules: I know now.

${g.f('femi_reply') ? 'In your hand, the phone is dark. You keep looking at it. You make yourself stop.' : ''}

jules: I\'ve been trying to work out how to say it since the lounge. Since Ravenscourt. I\'ve been trying to say it right, and I can\'t, because I\'ve never said anything to anyone that I didn\'t already know the end of.

She turns around. Her back is to the city. Her face is very close to yours, and her eyes are bright.

jules: So I\'m going to do this instead. And you\'re going to let me. And then I\'ll tell you what I meant. Okay?

sam: Okay.

She puts her cold gold hand on your face.

And your phone buzzes in your other hand. And again. And again. Three times, fast, the way a phone only buzzes when somebody is typing as fast as they can.`,
    choices: [
      { text: 'Look at the phone.', tag: 'Look',
        fx: g => { g.flag('roof8', 'phone'); }, go: 'a2_roof_phone' },
      { text: 'Don\'t look. Not now. Not this. Kiss her.', tag: 'Kiss her',
        fx: g => { g.flag('roof8', 'kiss'); g.flag('kissed'); g.bond('jules', { affection: 2, trust: 1 }); g.know('first_kiss', ['sam', 'jules'], 'On Halloween, on the roof of Cardone Hall, at 11:47 p.m., you kissed Jules Pemberton. She was dressed as the Liberty Bell.'); g.hidden('revenant_drift', 0.5); }, go: 'a2_kiss' }
    ]
  },
  a2_roof_phone: {
    night: true,
    clock: { time: '11:47 PM' },
    enter: g => { g.flag('femi_alive'); },
    text: `You look.

You don\'t decide to. Your eyes just go, the way they go to a siren.

TXT femi: here
TXT femi: stairwell b. theres someone on the stairs below me
TXT femi: sam theyre on the stairs

It\'s 11:47. They were sent at 11:39. The roof gets one bar; they all landed at once.

You look up at Jules. Her hand is still on your face. She sees your eyes. She sees whatever\'s in them.

She takes her hand away.

jules: Go.

She doesn\'t ask. She doesn\'t say *again*. She just says it, the way she\'s said it twice before, and you\'re already moving, and as you reach the roof door you hear her behind you, and it isn\'t *go*. It\'s your name.

You don\'t stop.`,
    next: 'a3_stairwell'
  },
  a2_kiss: {
    night: true,
    clock: { time: '11:47 PM' },
    text: `You don\'t look.

You put the phone in your pocket without looking, and you put your hand over hers on your face, and you lean in, and this time she doesn\'t stop.

She kisses you.

Or you kiss her. It doesn\'t matter which. It\'s not like the movies. It\'s clumsy for a second, her nose cold against yours, gold paint on your mouth, the bell dress crackling between you, and then it isn\'t clumsy at all. Her hand moves from your face into your hair. Yours is on her back, on the bare painted skin between her shoulder blades, and she\'s shaking, and so are you, and it\'s forty-four degrees on the roof of Cardone Hall and you are warm all the way through for the first time since August.

In your pocket, your phone buzzes. Again. Again.

You don\'t stop. She doesn\'t stop.

When she finally pulls back, an inch, her forehead against yours, she\'s breathing hard, and she\'s laughing, quietly, astonished, at herself.

jules: That\'s what I meant.

sam: Yeah.

jules: *What if it was me.* That\'s what I meant. Some of it. I couldn\'t— I\'ve never asked anybody for anything. I didn\'t know how to ask.

sam: It was you. It\'s been you since the minifridge.

jules: I\'m going to end it with Callum. Tomorrow. In person. He deserves that.

sam: Okay.

jules: I chose this. You understand? Nothing decided it for me. I *chose*.

Your phone buzzes again. A long buzz this time. A call.

You finally take it out of your pocket.

It\'s 11:58. Eleven minutes. **1 missed call. FEMI.** And under it, the messages.`,
    enter: g => { g.flag('femi_dead_found'); },
    next: 'a2_kiss_phone'
  },
  a2_kiss_phone: {
    night: true,
    text: g => `${g.f('phone1') === 'ignored' ? 'TXT femi: sam\nTXT femi: i went. the residential thing. building 7 at the navy yard. i didnt tell you because i knew youd tell me not to\nTXT femi: i left. im walking. i saw something. can i come to you\n' : ''}TXT femi: here
TXT femi: stairwell b. theres someone on the stairs below me
TXT femi: sam theyre on the stairs
TXT femi: im on 9. im at your door. please be home

The last one is from 11:51.

The call is from 11:52. It lasted four seconds. No voicemail. Just four seconds of somebody on the other end, and then nothing.

You look at Jules. She sees your face. Everything she just felt leaves hers, all at once.

jules: What is it.

You\'re already running.`,
    next: 'a3_found'
  },

  /* ================= ACT THREE: NINTH FLOOR ================= */
  a3_stairwell: {
    card: { kind: 'act', label: 'Act Three', title: 'Ninth Floor' },
    night: true,
    loc: 'CARDONE HALL · STAIRWELL B',
    clock: { time: '11:48 PM' },
    text: g => `You take the stairs down from the roof landing three at a time.

Stairwell B is the one nobody uses. Cinderblock painted the color of old teeth, a fire door at every floor, a light that buzzes. You swing around the rail onto the ninth-floor landing.

There are two men on the half-landing below it, between nine and eight.

They\'re wearing navy Temple Facilities jackets, the kind the custodial staff wears, and blue latex gloves. There\'s a gray laundry cart between them, the big canvas kind on wheels, and they\'re lifting something into it. Something in a Temple Econ hoodie.

Femi.

His eyes are open. You can see them from here. They\'re open and they move, they find you on the stairs above, and the rest of him doesn\'t move at all. His arms hang. His head lolls against the edge of the cart. There\'s a small dark spot on the side of his neck, under his ear, the size of a pencil eraser.

One of the men looks up and sees you. He\'s fifty, maybe. A gray mustache. A wedding ring under the latex glove. He looks at you with no expression at all, the way you\'d look at a man reading a meter.

The other one doesn\'t even look up. He finishes lowering Femi into the cart. He tucks Femi\'s arm in, carefully, so it won\'t catch on the edge.

MUSTACHE: Evening.

He has a small black pistol in his right hand, the same kind as the polo man in Kensington. Not a gun. A dart gun. It\'s pointed at the floor. Not at you. Not yet.`,
    choices: [
      { text: 'Go for them. Both of them. Now. Get Femi out of that cart.', tag: 'Fight',
        check: { kind: 'pool', attr: 'reflex', skill: 'brawl', diff: 3, label: 'Two cleaners, a dart gun, a stairwell', physical: true, power: true, on: { crit: 'a3_fight_win', success: 'a3_fight_win', partial: 'a3_fight_hurt', fail: 'a3_fight_hurt', botch: 'a3_fight_hurt' } } },
      { text: 'Slip. In the stopped world they can\'t do anything. Take him.', slip: true, tag: 'Slip',
        fx: g => { g.flag('stair_slip'); if (g.S.drift >= 9 || g.hv('revenant_drift') >= 10) g.flag('unstick8'); g.hidden('halcyon_heat', 1); }, go: 'a3_slip' },
      { text: 'Yell. Loud enough for the whole ninth floor. Bring every Blur at that party into this stairwell.', tag: 'Yell',
        fx: g => { g.flag('stair_yell'); }, go: 'a3_yell' }
    ]
  },
  a3_fight_win: {
    night: true,
    enter: g => { g.flag('stair', 'fight'); g.injure({ id: 'dart8', name: 'Dart (sedative, wearing off)', pen: 1, heal: 1, affects: ['reflex', 'wits'] }); },
    text: `You come down the last six stairs in one jump.

The mustache gets the dart gun up. You\'re faster. You hit his wrist with your forearm and the dart goes into the cinderblock with a *tick* and you hit him in the throat, not hard, hard enough, and he goes down on one knee choking.

The other one is younger. He doesn\'t fight. He pulls a second dart gun from his jacket and shoots you in the thigh from three feet away.

It goes in like a bee sting. And then a wave of warm comes up your leg, heavy and soft and sweet, and the stairwell tilts.

You don\'t stop. You can\'t stop. You grab the laundry cart and pull it over, and it goes over on its side with a crash that echoes up and down all fourteen floors, and Femi spills out onto the landing, limp, and you fall on top of him, half-protecting him, half because your leg\'s gone.

Above you, the fire door to the ninth floor bangs open, and there\'s music and light and a Blur in a green shirt yelling *yo, what the hell*, and the two men look at each other, and they go. Down the stairs. Fast and quiet. The younger one helping the older one, who\'s holding his throat. They take the cart.

They don\'t take Femi.`,
    next: 'a3_holding'
  },
  a3_fight_hurt: {
    night: true,
    enter: g => { g.flag('stair', 'fight'); g.injure({ id: 'dart8', name: 'Dart (sedative, wearing off)', pen: 1, heal: 1, affects: ['reflex', 'wits'] }); g.injure({ id: 'cracked_ribs8', name: 'Cracked ribs (stairwell rail)', pen: 1, heal: 2, affects: ['body', 'reflex'] }); },
    text: `You come down the last six stairs in one jump, and the mustache is ready for you.

He shoots you in the chest from five feet away. The dart goes in under your collarbone like a bee sting, and then a wave of warm comes up through you, heavy and soft and sweet, and your legs go, and you hit the steel railing with your ribs on the way down.

You\'re on the landing. On your side. Next to Femi. Your face is a foot from his.

His eyes are open. They move. They find yours.

You reach out. Your arm weighs two hundred pounds. You get your hand on his hoodie and you hold on.

Above you, the fire door to the ninth floor bangs open, and there\'s music and light and Devontae in a green shirt with a Wawa bag yelling *yo, YO, what the hell*, and the men look at each other, and they go. Down the stairs. Fast and quiet, taking the empty cart.

They don\'t take Femi. They don\'t need to.`,
    next: 'a3_holding'
  },
  a3_yell: {
    night: true,
    enter: g => { g.flag('stair', 'yell'); },
    text: `You yell.

Not a word. Just noise, as loud as you\'ve ever made it, the yell you used to do in the alley behind Mifflin Street to make Vinnie\'s dog bark, a yell that fills Stairwell B from the basement to the roof.

On the ninth-floor landing, the fire door bangs open. Then another one, on eight. Then music and light and a Blur in a green shirt, and two more Blurs behind him, and Simone in her Van Helsing coat, and Kyle the T-rex, somehow, wedged in the doorway.

The two men look up the stairs at you. They look at the doorway full of Blurs.

They look at each other. The older one lets go of the cart. They go down the stairs. Not running. Walking fast, the way men walk when they\'ve done this before and know exactly how fast you have to walk to not look like you\'re running.

You come down the last six stairs, and Femi is in the cart, and you lift him out, and he weighs nothing. He weighs nothing at all.`,
    next: 'a3_holding'
  },
  a3_slip: {
    night: true,
    enter: g => { g.flag('stair', 'slip'); if (g.f('unstick8')) { g.drift(1); g.hidden('revenant_drift', 1); } },
    text: g => `You step through.

It\'s January. The buzzing light stops buzzing. The two men stop, mid-motion, one with his hand on Femi\'s arm, one with the dart gun half-raised toward you.

And Femi.

Femi is still looking at you.

In the stopped world, where nothing moves, where nobody has ever moved but you, his eyes are on yours. They don\'t move. But they\'re *on* you. And you understand, standing there in the cold with your breath smoking, that it\'s the same thing it always was: you can see him. Even here. Even now.

You take the dart gun out of the older man\'s hand and throw it down the stairwell. You lift Femi out of the cart. He weighs nothing. ${g.f('unstick8') ? 'You turn to carry him up the stairs, and the cold gets *colder*, and you feel the ice start to close above you the way it did under 95, and you know, you *know*, that if you stay one more second you won\'t come out, and neither will he.\n\nYou get him up the six stairs, one at a time, with the ice closing over you. You pull. You come out on your knees on the landing.' : 'You carry him up six stairs to the ninth-floor landing and hold him against your chest.\n\nYou step back out.'}

The world comes back. The two men are holding nothing, standing over an empty cart, and when they look up and see you on the landing above them with Femi in your arms, the older one\'s face does something for the first time. It goes very still.

Then they go. Down the stairs, fast and quiet, taking the cart.

Your nose is pouring. You don\'t wipe it.`,
    next: 'a3_holding'
  },

  a3_holding: {
    night: true,
    clock: { time: '11:51 PM' },
    enter: g => { g.flag('femi_end', 'arms'); g.know('femi_dead', ['sam'], 'Femi Ojo died at 12:04 a.m. on November 1, in Stairwell B of Cardone Hall, in your arms. Halcyon\'s cleaners did it.'); },
    text: g => `You\'re on the landing. You\'ve got him across your lap. You don\'t remember sitting down.

His eyes are open. They\'re on you. The rest of him doesn\'t move at all. His hand is lying palm-up on the concrete, and his fingertips are moving, just barely, the way a sleeping person\'s fingers move.

sam: Femi. Femi. Hey. I\'m here. I\'m here, man. I see you.

His eyes are wet.

${g.hurt('dart8') ? 'Your own body is heavy and warm and slow from the dart. You fight it. You hold on to him.' : ''}

There\'s a puncture in the side of his neck, a tiny one, a dark bead of blood. And when you shift him on your lap, his hoodie rides up, and there are more: on his hip, through a neat slit somebody cut in his jeans, three small holes, deep, with the skin around them bruised purple-black. The kind of holes a needle as long as a pencil leaves.

*They took something out of him.*

Above you, the fire door is open, and people are on the landing, Devontae and Simone and Blurs, and Simone is on the phone saying *Cardone Hall, ninth floor, Stairwell B, somebody\'s hurt, I can\'t— Sam, who\'s hurt?*, and somebody is crying, and you don\'t look at any of them.

You look at Femi.

sam: Hold on. They\'re coming. Hold on.

His fingers move on the concrete. You take his hand. It\'s cold. He squeezes, barely, so little you\'d never feel it if you weren\'t holding on with everything you have.

He\'s trying to tell you something. His eyes go to his own hoodie pocket, and back to you. To his pocket. To you.`,
    choices: [
      { text: 'His pocket. Reach into it.', tag: 'His pocket',
        fx: g => { g.flag('femi_pocket'); }, go: 'a3_pocket' },
      { text: 'Don\'t look away from him. Not for a second. Not now. Hold his hand.', tag: 'Stay with him',
        fx: g => { g.flag('femi_stayed'); g.hidden('revenant_drift', -1); }, go: 'a3_stay' }
    ]
  },
  a3_pocket: {
    night: true,
    enter: g => { g.know('femi_card', ['sam'], 'In Femi\'s pocket: his Halcyon wristband, cut off, and a sticky note in his handwriting: "M.R. ALIVE. RM 714. THEY CALL YOU 17."'); },
    text: `You reach into his hoodie pocket.

His wristband, cut off. **HCW-COHORT 2 · 031 · RESIDENTIAL.** And a yellow sticky note, folded in half, in his handwriting, small and neat and hurried, the handwriting of a guy who took notes for people who never thanked him:

*M.R. ALIVE. RM 714.*
*THEY CALL YOU 17.*

You look at him.

His eyes are on yours. They\'re satisfied. That\'s the only word for it. He did it. He got it to you.

sam: I got it. I got it, man. I have it.

His fingers squeeze yours, once.`,
    next: 'a3_death'
  },
  a3_stay: {
    night: true,
    text: `You don\'t look away. You hold his hand and you look at him and you don\'t stop.

sam: I see you. I see you. You\'re not invisible. You\'re right here. I see you.

His eyes stay on yours. His fingers squeeze, once, so faint.

You talk to him. Whatever comes. You tell him about Simone\'s song, *Stake Through My Heart (Metaphorically)*. You tell him Kyle the T-rex won the shower slot. You tell him Grace gave the Liberty Bell first place and said she doesn\'t even like her. You tell him the chain rule clicked. You tell him he\'s going to be fine, which is a lie, and you\'ve gotten so good at lying that it comes out perfectly.

His eyes go to his pocket again. Once. Then back to you. Like he\'s decided it can wait.

`,
    next: 'a3_death'
  },

  a3_death: {
    night: true,
    clock: { day: 'Sun', date: 'Nov 1', time: '12:04 AM' },
    text: g => `At 12:04 in the morning on the first of November, All Saints' Day, Femi Ojo stops breathing in your lap in Stairwell B, a few steps from the ninth-floor door.

It\'s not dramatic. You keep waiting for it to be. It\'s just that his chest is moving, very slightly, and then it moves a little less, and then it doesn\'t. His fingers in yours go still. His eyes are still open. They\'re still on you.

And then something happens.

The people on the landing *see* him.

All of them. All at once. Devontae, who has been standing three feet away for ten minutes looking at you and the empty air in your lap, says *oh my God*, very small. Simone drops her phone. A girl in a Barbie costume screams. Kyle the T-rex sits down in the doorway, finally, his inflatable legs folding under him.

For ten weeks, nobody could see Femi Ojo. Now everybody can.

Simone kneels down on the concrete beside you in her Van Helsing coat. She looks at Femi\'s face. She looks at you.

simone: Who is he?

sam: His name is Femi. He\'s the Calc LA. He\'s been in Wachman every day since August. Econ. He reshelves books at Charles. He has a sister. He—

You stop. You can\'t.

simone: I never saw him. He was ten feet from me tonight, and I never once saw him.

sam: Nobody did.

Above you, on the flight down from the roof, footsteps. Running. And then, at the turn of the stairs, in a dress the color of old bronze with a black crack painted down it, with your ${{ blur: 'hoodie', ghostbuster: 'hoodie', cabbie: 'father\'s jacket' }[g.f('costume8')]} around her shoulders, Jules.

She looks at you. She looks at Femi. She doesn\'t say anything at all.

She comes down the stairs and kneels on your other side and puts her arms around you, and her gold paint comes off on your neck, and you put your face against her painted shoulder, and you make a sound you don\'t recognize.`,
    next: 'a4_saints'
  },

  /* ---------- found (didn\'t look at the phone) ---------- */
  a3_found: {
    card: { kind: 'act', label: 'Act Three', title: 'Ninth Floor' },
    night: true,
    loc: 'CARDONE HALL · 9TH FLOOR HALLWAY',
    clock: { time: '11:59 PM' },
    enter: g => { g.flag('femi_end', 'found'); g.know('femi_dead', ['sam'], 'Femi Ojo died alone outside your door, 9-14, on Halloween night, while the party went on around him. Halcyon\'s cleaners did it. You were on the roof.'); g.hidden('revenant_drift', 1.5); },
    text: g => `You come down the stairs from the roof and through the fire door into the ninth-floor hallway, and the party is still going.

It\'s louder than when you left. The music is pounding out of the lounge. The hallway is full of costumes, Blurs and Barbies and a girl dressed as a traffic cone, everybody laughing, everybody holding Solo cups, the strobe light flashing white through the open bathroom door.

You push through them. You push through them toward your door. 9-14.

There\'s someone sitting on the floor against your door.

People are walking past him. You watch them do it. A Blur steps over his outstretched leg without looking down. A Barbie sets an empty Solo cup down on the carpet next to his hand, the way you\'d set a cup on a step. There are candy wrappers in his lap, three or four, that people have dropped there, not seeing that it was a lap.

Femi is sitting with his back against your door, in his Temple Econ hoodie, with his legs out in front of him on the hallway carpet. His head is tilted back against the wood, at an angle no living person would hold. His eyes are open.

His right hand is raised. It\'s resting against your door, flat, at the level of the doorknob. There are marks on the white paint above his hand. Faint brown lines, curving down, four of them, five, ten. Fingertip marks.

He was knocking. With his fingertips. With what little he could still move. On your door. While the party went on around him and nobody saw him.

You don\'t remember kneeling. You\'re kneeling. You\'ve got his face in your hands, and it\'s cool, and it isn\'t cold yet. It isn\'t cold yet. You missed it by minutes.

His fingernails are torn. The fingertips of his right hand are raw. Under the hem of his hoodie, through a neat slit somebody cut in his jeans, there are three small holes in his hip, deep, bruised black. On the side of his neck, a tiny puncture with a single bead of dried blood.

*They took something out of him.* In the stairwell, where nobody goes. And then they let him go, and he got as far as your door. They let him. On purpose.

You look up. And for the first time all night, the hallway sees him. All of them, at once. You watch it happen: the attention landing on him like a light switching on, a girl in a Barbie costume beside you looking down and seeing him, finally, now that there\'s nothing left in him for the eye to slide off, and screaming.

The music keeps going.

Behind you, in the doorway to the stairwell, in a dress the color of old bronze, Jules stops. She looks at Femi. She looks at the marks on your door. She looks at you.

She doesn\'t come any closer. She puts her gold hand over her mouth.`,
    next: 'a3_found_pocket'
  },
  a3_found_pocket: {
    night: true,
    enter: g => { g.know('femi_card', ['sam'], 'In Femi\'s pocket: his Halcyon wristband, cut off, and a sticky note in his handwriting: "M.R. ALIVE. RM 714. THEY CALL YOU 17."'); },
    text: `His hoodie pocket is bulging. You reach in.

His wristband, cut off. **HCW-COHORT 2 · 031 · RESIDENTIAL.** And a yellow sticky note, folded in half, in his small neat hurried handwriting, the handwriting of a guy who took notes for people who never thanked him:

*M.R. ALIVE. RM 714.*
*THEY CALL YOU 17.*

He came to give you this. He walked from the Navy Yard to North Philly, six miles, at night, with people following him, to give you this.

In August he told you: *If something happens to me, you\'ll be the one who notices.*

You were on the roof.

Somebody\'s calling 911. Somebody\'s crying. Somebody turns the music off, finally. In the quiet you can hear the fan in Kyle\'s T-rex costume, still running.`,
    next: 'a4_saints'
  }
});
