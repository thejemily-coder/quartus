/* S1 · E4 · SUTURES, part 3 of 3: Act Four ("Sutures"), tag, polls. */
EH.scenes('s01e04', {

  /* ================= ACT FOUR: SUTURES ================= */
  a4_ride: {
    card: { kind: 'act', label: 'Act Four', title: 'Sutures' },
    night: true,
    loc: 'CARDONE HALL · STAIRWELL B',
    clock: { day: 'Sat', date: 'Sep 12', time: '2:38 AM' },
    text: g => `You get home somehow. Some of it on the El, in the last car, where a man asleep across three seats opens one eye at the blood and closes it again. Some of it walking. The last six blocks, leaning on a parked car every half block like you're saying goodbye to each one.

You don't go to your room. You can't go to your room. Nik's in your room.

You go to the top of Stairwell B, the landing outside the roof door, where nobody comes, and you sit down on the concrete with your back to the wall. You wrap your arm in your own T-shirt and hold it up over your head, because you saw that in a movie once. You sit there for two hours trying to figure out how to be a person who walks into a dorm at three in the morning looking like this.

You don't figure it out.

${g.f('heck_fate') === 'saved' ? 'At 1:15, your phone buzzes. *Bree.* A photo: Heck asleep in a bathtub in a tiled bathroom somewhere in Port Richmond, cold water running, a two-year-old\'s rubber duck on the edge of the tub. The steam coming off him is faint now. Barely there.\n\nTXT bree: 101.2 and dropping\nTXT bree: he woke up and said lo siento for ur face and went back to sleep\nTXT bree: teddy says ur an idiot\nTXT bree: teddy says thank u. he wont text it so im texting it\n\nYou look at the duck for a long time.' : 'At 1:15, you text Teddy: *im sorry.*\n\nDelivered.\n\nIt doesn\'t say *Read*. You watch it not say *Read* for a long time.'}

At 2:38, the stairwell door bangs open two floors down, and you hear Nik, in socks, taking the stairs two at a time and saying your name, and then your *full* name, which means he's scared.

nik: Sam? *Salvatore?* Bro, I swear to God, your phone pinged on this staircase, I can *see* you on Find My, if you're up there—

He comes around the landing and sees you.

He stops.

You watch it happen. You watch all the blood go out of his face at once. He grabs the railing. His breathing changes: fast, then faster, high in his chest, like he's trying to drink the air through a straw. His hand on the railing is shaking so hard the railing rattles.

nik: I'm fine. I'm fine. I'm fine, I'm, this is, this happens, I'm—

He's not fine. He sits down hard on the step, folded over his own knees, and he can't get a breath in, and he's looking at your arm and can't stop looking at it.`,
    choices: [
      { text: 'Get down there with him. Your arm can wait two minutes. "Nik. Look at me. Breathe with me. In for four."', tag: 'Him first',
        fx: g => { g.flag('nik_panic', 'helped'); g.bond('nik', { trust: 2, affection: 2 }); g.know('nik_panic', ['sam', 'nik'], 'Nik has panic attacks. He had one on the stairwell when he saw you bleeding. He\'s had them since he was eleven.'); }, go: 'a4_nik_help' },
      { text: '"Nik. Nik. I need Grace. Go get Grace. Go."', tag: 'Get Grace',
        fx: g => { g.flag('nik_panic', 'sent'); g.bond('nik', { trust: 1 }); g.know('nik_panic', ['sam', 'nik'], 'Nik has panic attacks. He had one on the stairwell when he saw you bleeding.'); }, go: 'a4_nik_send' }
    ]
  },
  a4_nik_help: {
    night: true,
    text: `You get down the four steps on your butt, one at a time, holding your arm up, and you sit next to him. You don't touch him. You just get your face where he can see it, the way you did with Heck three hours ago, three miles away.

sam: Nik. Look at me. Not the arm. Me. In for four.

He looks at you. He breathes in, ragged, a hiccup in the middle of it.

sam: Hold it. Out for four. Yeah. Like that. Again.

You do it with him eight times. Nine. On the tenth, his hand stops rattling the railing.

nik: Sorry. *Sorry.* I'm sorry, this is so stupid, you're the one who's *bleeding*—

sam: How long?

nik: …Since I was eleven. My mom calls them my *nerves*. Like I'm a Victorian lady. Like I need a *fainting couch*.

He wipes his face with both hands.

nik: Okay. Okay. I'm good. I'm getting Grace. Don't argue. You'll lose. I'm the guy in the chair, and the guy in the chair gets to make *one call*.`,
    next: 'a4_grace'
  },
  a4_nik_send: {
    night: true,
    text: `sam: Nik. Nik. I need Grace. Go get Grace. Go.

It works. Not because it helps him breathe. It doesn't help him breathe. But it gives him something to *do*, and Nik Bhattacharya has never in his life been able to not do something somebody needed.

He goes down the stairs gasping, holding the rail, one floor, two, and you hear him in the ninth-floor hallway, banging on Grace's door with the flat of his hand like there's a fire.

You sit there holding your arm up. You think: *I didn't know. Three weeks, and I didn't know he did that.* You think: *What else don't I know about the people I keep almost getting killed in front of?*`,
    next: 'a4_grace'
  },

  a4_grace: {
    night: true,
    loc: 'CARDONE HALL · 9TH FLOOR BATHROOM',
    clock: { time: '3:07 AM' },
    text: g => `Which is how you end up on the floor of the ninth-floor bathroom, between the last shower stall and the radiator, with Grace Lim kneeling over you with a curved needle and her MCAT practice kit, which she keeps under her bed in a tackle box that says **NOT A TACKLE BOX** in label-maker tape.

Nik's sitting outside the door on the hallway carpet, guarding it. You can hear him breathing. In for four.

${{ laugh: 'You laughed when she put the needle in. You\'re still sort of laughing, in little hiccups, every time she pulls the thread through.', nobody: 'You grabbed her wrist and made her promise. She promised. She\'s still a little pale about it.', silent: 'You haven\'t made a sound. Forty-one tiles over your head. You\'ve counted them nine times.' }[g.f('cold')]}

Grace works fast and neat and doesn't talk. She cleaned the ${g.hurt('laceration') && g.f('f3') === 'bad' ? 'cut over your eye' : 'cut on your arm'} with a whole bottle of saline and most of a bottle of iodine. She's looked at everything else, too. ${g.hurt('broken_hand') ? 'Your hand, which is swelling up like a latex glove somebody blew into. ' : ''}${g.hurt('cracked_ribs') ? 'Your ribs, which she pressed once and you nearly went through the ceiling. ' : ''}${g.hurt('cheekbone') ? 'Your face, which she won\'t let you see. ' : ''}${g.hurt('burned_arms') || g.hurt('burned_arm') ? 'The burns, which she looked at for a very long time without saying anything. ' : ''}${g.hurt('handprint') ? 'The handprint on your chest. Five fingers and a palm. She put two fingers next to one of the burned fingers, measuring, and then took her hand away fast. ' : ''}

She ties off the fourth stitch. Then she sits back on her heels and looks at you.

grace: Okay.

It's not *okay* like everything's okay. It's *okay* like a door closing.

grace: I'm going to ask you once. I'm pre-med. I've been your RA for three weeks. You came back from the blackout zone bleeding out of your face, and a man in a polo shirt asked me about your *floor*, and you just walked in at three in the morning ${g.hurt('handprint') ? 'with burns in the shape of a human hand' : 'looking like you lost a fight with a building'}.

She holds up the needle, threaded, for the next stitch.

grace: Who did this to you, Sam?`,
    choices: [
      { text: 'Tell her. All of it. The Slip, the cold, the Hitch, Heck, the truck. Somebody who isn\'t Nik should know.', tag: 'Tell Grace',
        fx: g => { g.flag('grace4', 'told'); g.know('sam_slip', ['grace']); g.know('sam_at_girard', ['grace']); g.know('halcyon_clinic', ['grace']); if (g.knows('halcyon_truck')) g.know('halcyon_truck', ['grace']); g.bond('grace', { trust: 3, respect: 2 }); g.hidden('revenant_drift', -0.3); }, go: 'a4_grace_told' },
      { text: '"A guy who was on fire." Beat. "I\'m not joking."', tag: 'Some of it',
        fx: g => { g.flag('grace4', 'some'); g.bond('grace', { trust: 1 }); g.know('heck_fire_grace', ['sam', 'grace'], 'You told Grace a man who was on fire did this to you.'); }, go: 'a4_grace_some' },
      { text: '"Grace. Please don\'t ask me that."', tag: 'Don\'t ask',
        fx: g => { g.flag('grace4', 'refused'); g.bond('grace', { tension: 1 }); }, go: 'a4_grace_refused' }
    ]
  },
  a4_grace_told: {
    night: true,
    text: `You tell her.

You tell her about the cold at 11:51 and the bus on Spring Garden and the kid and the light. The world stopping, and you not stopping with it. The minute that's four seconds. The armored truck on Girard. The rowhouse on 15th Street. Heck, and his sobrina, and the truck with the steel bed rated six hundred pounds. You tell her in a flat, quiet voice, staring at the ceiling, and Grace keeps stitching while you talk. She doesn't stop once. Her hands are steady the whole time.

When you're done, she ties off the last knot and cuts the thread with a pair of tiny curved scissors.

grace: Okay.

sam: That's it? *Okay?*

grace: This was supposed to be my MCAT year. That was the whole plan.

She snaps off her gloves.

grace: Okay means I believe you. Okay means I'm in. Okay means you're going to the ER tomorrow and I'm driving, and if you argue, I'm calling the emergency contact on your housing form, which is your *mother*, Sam, and I've *met* her, and she scares me.`,
    next: 'a4_door'
  },
  a4_grace_some: {
    night: true,
    text: `sam: A guy who was on fire.

Grace looks at you.

sam: I'm not joking.

grace: I know you're not joking. I'm the one sewing you shut.

She bends back over your arm and puts the needle in, and pulls it through, and ties it off.

grace: Okay. Here's the deal. You don't have to tell me the rest tonight. But you're going to the ER tomorrow, and I'm driving. And when you're ready to tell me how a man was on fire, and how you were *close enough to him* for that, you're going to tell *me*, and not some guy in a polo shirt with a clipboard. Deal?

sam: Deal.

grace: Okay.`,
    next: 'a4_door'
  },
  a4_grace_refused: {
    night: true,
    text: `sam: Grace. Please don't ask me that.

She doesn't say anything. She bends back over your arm and finishes the stitch, and ties it, and cuts it, and starts another one, and her mouth is very thin.

grace: Okay.

This time it's the other kind of *okay*. The one that means *I heard you, and I'm writing it down somewhere*.

grace: You're going to the ER tomorrow. I'm driving. That part's not a question.`,
    next: 'a4_door'
  },

  /* ---------- Jules ---------- */
  a4_door: {
    night: true,
    clock: { time: '3:24 AM' },
    enter: g => { g.know('jules_saw_hurt', ['sam', 'jules'], 'Jules saw you bleeding on the bathroom floor at 3 a.m. after Kensington. She saw the injuries.'); g.heat('jules', 1); },
    text: g => `Out in the hallway, Nik says *hey—no—Jules, wait—* and then the bathroom door opens.

It's Jules. In plaid pajama pants and a gray cardigan and slippers, her hair down, her face scrubbed and bare and very young. Behind her, all the way down the hall, her door is open, and her lamp is on, a long yellow rectangle of light across the hallway carpet.

She sees you. You watch her see all of it, one thing after another: the blood on the tile, ${g.hurt('cheekbone') ? 'your face, ' : ''}the arm, ${g.hurt('broken_hand') ? 'the hand, ' : ''}${g.hurt('handprint') ? 'the handprint, ' : ''}${g.hurt('burned_arms') || g.hurt('burned_arm') ? 'the burns, ' : ''}Grace's bloody gloves, the needle.

${g.f('fri_leave') === 'promise' ? 'jules: You said you\'d be back.\n\nsam: I came back.\n\nShe looks at the floor. At the blood on it.\n\njules: *This* is back?' : g.f('fri_leave') === 'silent' ? 'jules: You just *left*. In the middle of the movie. You didn\'t say anything.\n\nsam: I know.' : 'jules: You went out in the hallway to take a call. You never came back in.\n\nsam: I know.'}

grace: Pemberton. Go back to bed.

jules: No.

She comes in. She closes the door behind her. She kneels down on the tile on your other side, opposite Grace, in her pajamas, in your blood, and looks at Grace's hands.

jules: Your hands are shaking.

grace: They are not.

They are. They weren't five minutes ago. They are now.

jules: Give it to me.

grace: Do *you* know how?

jules: My mother let me practice on oranges at the kitchen table. I was six.

Grace looks at her for a long second. Then she hands over the needle.

Jules threads it without looking. She takes your ${g.f('f3') === 'bad' ? 'face in one hand, turning it to the light, her thumb along your jaw' : 'arm in her lap, across her pajama knees, palm up'}, and she puts the needle in, and her hands are perfectly, perfectly steady.

Every stitch is a question. You can feel her asking it.

On the fourth one, she asks it out loud. She doesn't look up.

jules: What happened to you?`,
    choices: [
      { text: '"Bike. Car door on Lehigh. I went through a bus shelter." Keep your hand away from your ear.', tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['jules'], near: ['jules'], label: 'Lie to Jules', on: { strong: 'a4_lie_strong', weak: 'a4_lie_weak', miss: 'a4_lie_miss' } } },
      { text: '"Somebody I know was in trouble. I helped. It went bad." True. Every word of it. Not one word more.', tag: 'Some of it',
        fx: g => { g.flag('jules4', 'some'); g.heat('jules', 2); g.bond('jules', { trust: 1 }); }, go: 'a4_jules_some' },
      { text: '"I can\'t tell you, Jules." The second time you\'ve said it to her. "I\'m sorry."', tag: 'Can\'t',
        fx: g => { g.flag('jules4', 'cant'); g.heat('jules', 1); g.bond('jules', { respect: 1, trust: -1 }); }, go: 'a4_jules_cant' }
    ]
  },
  a4_lie_strong: {
    night: true,
    enter: g => { g.flag('jules4', 'lie'); g.bond('jules', { trust: -1 }); g.know('lie_bike', ['sam'], 'You told Jules you hit a car door on Lehigh and went through a bus shelter. She said "Okay."'); },
    text: g => `sam: Bike. Car door on Lehigh. I went through a bus shelter.

It's a good lie. It's the best lie you've ever told. It's ninety percent true: there *was* a car door, there *was* a bus shelter. Your hand stays in your lap. Your voice stays flat.

She ties off the stitch.

jules: Okay.

Just that. She doesn't look up. She starts the next stitch.

${g.hurt('handprint') ? 'She doesn\'t look at the handprint on your chest. She very carefully doesn\'t look at it, the whole time, the way you don\'t look at somebody crying on a train.' : 'She doesn\'t ask about the burns. She doesn\'t ask about anything.'}

When she's done, she cuts the thread, and lays your ${g.f('f3') === 'bad' ? 'face back against the wall like it\'s something breakable' : 'arm down on your knee like it\'s something breakable'}, and stands up.

jules: Keep it dry. Forty-eight hours. Then soap and water.

She goes to the door. With her hand on the handle, she stops.

jules: Kearney. You're getting better at that.

She doesn't say at what. She doesn't have to.`,
    next: 'a4_after'
  },
  a4_lie_weak: {
    night: true,
    enter: g => { g.flag('jules4', 'lie'); g.bond('jules', { trust: -2 }); g.know('lie_bike', ['sam', 'jules'], 'You told Jules you hit a car door on Lehigh. She knew it wasn\'t true.'); },
    text: g => `sam: Bike. Car door on Lehigh. I went through a bus shelter.

She ties off the stitch.

jules: A bus shelter.

sam: Yeah.

jules: And the bus shelter was on fire.

You don't say anything. She doesn't look up.

jules: ${g.hurt('handprint') ? 'The bus shelter had *five fingers*, Kearney.' : 'Bus shelters don\'t burn people.'}

She finishes the last stitch in silence, and cuts the thread, and puts the needle down on the tile, very precisely, parallel to the grout line.

jules: The night of the Hitch, you came up Liacouras Walk shaking like you'd been somewhere. Then the fire. Now this. You're always *there*. Every time something happens in this city, you're there, and you come back looking like *this*, and you lie to me about it with your whole face.

She stands up.

jules: I'm not asking you to tell me. I'm asking you to stop insulting me.`,
    next: 'a4_after'
  },
  a4_lie_miss: {
    night: true,
    enter: g => { g.flag('jules4', 'lie'); g.bond('jules', { trust: -2, respect: -1 }); g.know('lie_bike', ['sam', 'jules'], 'You told Jules you hit a car door on Lehigh. She caught it immediately.'); },
    text: `sam: Bike. Car door on Lehigh. I went through a—

Your hand is on your ear. You don't know how it got there. You take it down.

Jules pulls the stitch tight. Not cruelly. Just *tight*, exactly as tight as it should be and not a hair looser, and you feel it all the way up your arm.

She ties it off. She cuts the thread. She stands up, and looks down at you on the floor, in your blood, and her face isn't angry. That's the worst part. It isn't angry at all.

jules: I sat on a roof with you for six hours. I told you about the chapel.

She opens the door.

jules: Keep it dry for forty-eight hours.`,
    next: 'a4_after'
  },
  a4_jules_some: {
    night: true,
    text: `sam: Somebody I know was in trouble. I helped. It went bad.

She stops with the needle halfway through.

Then she finishes the stitch. Ties it. Starts the next one.

jules: Somebody you know.

sam: Yeah.

jules: The same somebody as the fire?

You don't answer. That's an answer. She knows it's an answer.

She finishes the last stitch and cuts the thread and sits back on her heels on the bathroom tile, with your blood on her pajama knees, and looks at you for the first time since she walked in.

jules: The night of the Hitch, you came up Liacouras Walk shaking like you'd been somewhere. Then the fire. Now this. You keep being *there*, Kearney.

sam: I know.

jules: Are you going to tell me why?

sam: Not tonight.

She nods slowly, like she's agreeing to the terms of something.

jules: *Not tonight.*

She hears herself say it, the way she said *not like this* on the roof, and something in her face changes, and she looks away. She stands up.

jules: Keep it dry for forty-eight hours. And Sam—

She stops in the doorway, her back to you.

jules: I was awake when you came in. I'd like it on the record that I hate that.`,
    next: 'a4_after'
  },
  a4_jules_cant: {
    night: true,
    text: `sam: I can't tell you, Jules.

You hear yourself. *Jules.* Not *Pemberton*. It just came out.

sam: I'm sorry.

She finishes the stitch. Ties it. She doesn't say anything for the rest of them, four more, five, and the only sound is the radiator ticking and Nik breathing out in the hallway and the thread pulling through.

When she's done, she cuts it and puts the needle down on the tile.

jules: That's twice.

sam: I know.

jules: You know what's strange? I believe you. That you can't. I believe that it's *can't*, and not *won't*.

She stands up.

jules: I just don't know how many times I can believe it.`,
    next: 'a4_after'
  },

  a4_after: {
    night: true,
    clock: { time: '3:51 AM' },
    enter: g => { g.sleep(4); },
    text: g => `When the door closes behind her, Grace lets out a long breath and sits down against the radiator next to you, with her bloody gloves still on, like she's too tired to take them off.

grace: Okay. So that's a whole thing.

sam: That's a whole thing.

grace: Does she know you're—

${g.f('grace4') === 'told' ? 'sam: No.\n\ngrace: Okay.\n\nShe doesn\'t ask why not. She just sits there with you, shoulder to shoulder, the two of you looking at the lime-green shower caddy on the bench.' : 'sam: Does she know I\'m what?\n\ngrace: …I genuinely don\'t know how I was going to finish that sentence.\n\nShe sits there with you, shoulder to shoulder, the two of you looking at the lime-green shower caddy on the bench.'}

Out in the hall, Nik has fallen asleep sitting up against the bathroom door. When you open it, he falls over backward into the room and lies there looking up at you.

nik: Is it over?

sam: Yeah.

nik: Did we win?

You think about the truck. The steel bed. ${g.f('heck_fate') === 'saved' ? 'The duck on the edge of the bathtub.' : 'The misting fans spraying cold water into an empty square.'} Brannigan's kind voice. *The minute.*

${g.f('heck_fate') === 'saved' ? 'sam: Yeah. This time.' : 'sam: No.'}

You sleep four hours, like a stone. Your body is busy with something.`,
    next: 'tag_xray'
  },

  /* ================= TAG ================= */
  tag_xray: {
    card: { kind: 'tag' },
    loc: 'TEMPLE UNIVERSITY HOSPITAL · EMERGENCY DEPT',
    clock: { day: 'Sat', date: 'Sep 12', time: '4:40 PM' },
    enter: g => {
      g.S.injuries.forEach(i => { if (['broken_hand', 'cracked_ribs', 'cheekbone'].includes(i.id)) i.heal = Math.min(i.heal, 2); });
      g.flag('xray_healed');
      g.know('xray', ['sam', 'grace'], 'The x-ray at Temple ER showed fractures that were ten days into healing. You broke them the night before.');
    },
    text: g => `The ER at Temple University Hospital on a Saturday afternoon is a city of its own: a guy holding his own finger in a bag of ice, a grandmother in a wheelchair praying the rosary out loud, two cops eating Tastykakes, a baby screaming in a way that sounds personal. Grace sits next to you with an MCAT prep book the size of a cinderblock and a highlighter, and every twenty minutes, without looking up, she says *you're fine, stop looking at it*.

You tell triage you fell off your bike. Triage writes it down without looking at you. Everybody at Temple ER on a Saturday fell off their bike.

At 4:40, a resident named Dr. Ferrante, thirty, Italian-American, with a South Jersey accent and the exhausted cheer of a man thirty-one hours into a shift, puts your film up on the light box. It's your ${g.hurt('broken_hand') ? 'right hand. The five long bones fanning out from your wrist like a hand of cards' : g.hurt('cheekbone') ? 'skull, from the side. Your own face, as a ghost' : 'ribcage. Your own ribs, white curves like a bird cage'}.

Dr. Ferrante looks at it. He tilts his head. He looks at it some more.

DR. FERRANTE: Huh.

He taps the film with his pen, at the ${g.hurt('broken_hand') ? 'bone under your pinky knuckle' : g.hurt('cheekbone') ? 'curve under your eye' : 'sixth rib, on the right side'}. There's a line across it, faint. And around the line, a soft gray cloud, like smoke frozen around the break.

DR. FERRANTE: So, that's a fracture. ${g.hurt('broken_hand') ? 'Boxer\'s fracture, classic, you see a lot of guys who punched a wall. ' : ''}But see this? The fuzzy stuff? That's callus. That's new bone. That's your body *patching* it.

sam: Okay.

DR. FERRANTE: So when did you do this?

sam: Last night.

He laughs, like you made a joke.

DR. FERRANTE: No, seriously.

sam: Last night. Like, eleven-thirty.

He stops laughing. He looks at the film. He looks at you, at your stitched arm, at the date on your intake form.

DR. FERRANTE: Callus like this takes ten days, minimum. This is a fracture that's ten days into healing. Did you have a fall a couple weeks ago? Maybe you didn't notice?

You look at the ghost of your own bones on the light box, glowing. Broken, and already halfway mended. Healed in a time you didn't live.

sam: …Yeah. Maybe. A couple weeks ago.

DR. FERRANTE: There you go. Mystery solved. You heal like a twelve-year-old, kid. Count yourself lucky.

He writes something down and leaves to go save somebody's finger.

Grace doesn't say anything. She's put the MCAT book down. She stands up and walks to the light box and looks at the film for a long time, close, with her arms crossed, the way she looks at a problem set she's going to get right no matter how long it takes.

grace: That's not okay.

She says it quietly.

grace: Sam. That's not *okay*. A callus takes ten days. You didn't *have* ten days.

You look at the light box. You think about the cold in there, and how long a minute always feels.

grace: Sam?

On the light box, your bones glow white, and patient, and older than they should be.`,
    end: true
  }
});

Object.assign(EH.episodes.s01e04, {
  polls: [
    { q: 'Heck, in McPherson Square', opts: [
      { label: 'Brought him home', pct: 71, if: g => g.f('heck_fate') === 'saved' },
      { label: 'Watched the truck pull away', pct: 29, if: g => g.f('heck_fate') === 'taken' }
    ] },
    { q: 'Grace asked who did this', opts: [
      { label: 'Told her everything', pct: 34, if: g => g.f('grace4') === 'told' },
      { label: '"A guy who was on fire"', pct: 48, if: g => g.f('grace4') === 'some' },
      { label: '"Please don\'t ask"', pct: 18, if: g => g.f('grace4') === 'refused' }
    ] },
    { q: 'Jules, with the needle', opts: [
      { label: 'Lied: the bike, the car door', pct: 39, if: g => g.f('jules4') === 'lie' },
      { label: 'Told her some of it', pct: 42, if: g => g.f('jules4') === 'some' },
      { label: '"I can\'t tell you"', pct: 19, if: g => g.f('jules4') === 'cant' }
    ] }
  ],
  onEnd: g => {
    g.recap(g.f('heck_fate') === 'saved' ? 'Halcyon lured Heck to McPherson Square. You fought him to bring him home, and you did.' : 'Halcyon lured Heck to McPherson Square. You fought him, and they took him anyway.');
    g.recap('For the first time, you rewound time on purpose.');
    g.recap('Brannigan knows about the minute.');
    g.recap('Jules stitched you up on the bathroom floor at 3 a.m.');
    g.recap('Your x-ray showed ten days of healing. You broke it the night before.');
  }
});
