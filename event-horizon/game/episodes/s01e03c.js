/* S1 · E3 · THE BLACKOUT FLOOR, part 3 of 3: Act Four ("4:12 A.M.") and the Tag. */
EH.scenes('s01e03', {

  a4_return: {
    card: { kind: 'act', label: 'Act Four', title: '4:12 A.M.' },
    night: true,
    loc: 'CARDONE HALL · ROOF',
    clock: { day: 'Sun', date: 'Sep 6', time: '12:52 AM' },
    text: g => g.f('fire') === 'stayed' ? `The fire's out. The trucks are still there, their lights turning slow red circles on the rowhouse fronts ten blocks away. The power isn't back. Center City still glows to the south, sealed off and bright, a city in a snow globe.

Jules is sitting with her back against the HVAC unit again, knees up, an ice pack on the back of her neck. You sit down next to her. Not two feet away this time. One.

She doesn't move away.

jules: You wanted to go.

sam: Yeah.

jules: Where?

You don't answer that. She doesn't ask again. She just hands you her ice pack, and you hold it against your face, and you would marry it if it asked.` : `You come up the stairs at 12:52 smelling like a house fire.

${g.hurt('burned_hands') ? 'Your hands are blistered from fingertips to wrists, and you\'re holding them in front of you like you\'re carrying something invisible. ' : ''}${g.S.drift >= 5 ? 'Your nose has been bleeding for an hour.' : 'Your nose bled on the way back and stopped.'} There's soot on your face, in your hair, in your teeth. ${g.f('costume') === 'none' ? 'You didn\'t even have a hood to hide behind.' : 'You stuffed the ' + ({ hoodie: 'hoodie and the cap', windbreaker: 'windbreaker', helmet: 'helmet' })[g.f('costume')] + ' in a recycling bin on Broad and came up nine flights in your undershirt.'}

She's exactly where you left her. Standing at the parapet with her arms folded, watching the fire trucks ten blocks away, the slow red circles of their lights on the rowhouse fronts. She hears the door and turns.

She looks you over by the light of Center City, top to bottom, the way her mother taught her to look at a wound.

jules: ${g.f('leave') === 'lie' ? 'That was a very long bathroom.' : 'You came back.'}

Her voice is very level.

jules: Grace came up to check on us at midnight. I told her you'd gone to the bathroom. ${g.f('leave') === 'lie' ? 'Grace' : 'She'} now believes you have a medical condition. I didn't correct her.

She looks at your face, the soot, the blood on your lip. ${g.hurt('burned_hands') ? 'She looks at your hands.' : ''}

jules: You were *there*.

Not a question.`,
    choices: [
      { text: '"There was a fire. I went to help." The truth, or most of it. No more than that.', if: g => g.f('fire') !== 'stayed', tag: 'Some of it',
        fx: g => { g.flag('ret', 'truth'); g.heat('jules', 1); g.bond('jules', { trust: 2, tension: -1 }); g.know('jules_fire', ['sam', 'jules'], 'Jules knows you ran to the 15th Street fire to help. She doesn\'t know how you got there and back so fast.'); }, go: 'a4_hands' },
      { text: '"I was helping Grace with Devontae. The elevator." Lie. Hands still.', if: g => g.f('fire') !== 'stayed',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['jules'], near: ['jules'], label: 'Lie to Jules again', on: { strong: 'a4_ret_lie', weak: 'a4_ret_lie', miss: 'a4_ret_lie_miss' } },
        fx: g => g.flag('ret', 'lie') },
      { text: '"I can\'t tell you, Jules." And then: "I\'m sorry."', if: g => g.f('fire') !== 'stayed', tag: 'Can\'t',
        fx: g => { g.flag('ret', 'cant'); g.heat('jules', 1); g.bond('jules', g.f('leave') === 'cant' ? { respect: 2, trust: 1, tension: -1 } : { respect: 1 }); }, go: 'a4_hands' },
      { text: 'Lean your head back against the HVAC unit. Close your eyes. "Thanks for the ice."', if: g => g.f('fire') === 'stayed', tag: 'Stay here',
        fx: g => { g.flag('ret', 'stayed'); g.bond('jules', { trust: 1, tension: -1 }); }, go: 'a4_talk_light' }
    ]
  },
  a4_ret_lie: {
    night: true,
    text: `sam: I was helping Grace with Devontae. The elevator. It got stuck again.

She looks at your face. The soot. The blood. Your shirt, which smells like a burning rowhouse from four feet away.

jules: Okay.

She isn't believing you. She isn't even pretending to. She's deciding to let you have it, and she lets you watch her decide.

jules: Sit down before you fall down.`,
    next: 'a4_hands'
  },
  a4_ret_lie_miss: {
    night: true,
    enter: g => g.bond('jules', { trust: -1 }),
    text: `sam: I was helping Grace with Devontae. The elevator—

jules: Don't.

One word, quiet. She doesn't say *ear*. She doesn't have to. Your hand's already halfway up.

jules: You don't have to tell me where you went. I'm not entitled to it. But you came up those stairs smelling like *that*, with your face like *that*, and you looked at me, and you tried to tell me it was an *elevator*.

She sounds tired. Not angry. Worse than angry.

jules: Sit down before you fall down.`,
    next: 'a4_hands'
  },
  a4_hands: {
    night: true,
    text: g => `You sit. Your legs give out more than you sit. She sits down next to you, close, closer than she has all night.

${g.hurt('burned_hands') ? `jules: Show me your hands.

You don't want to. She takes your wrists anyway, gently, and turns your hands over in the light of her phone. The palms are blistered white. She makes a sound in her throat.

jules: Second-degree. You need Silvadene and a doctor. You're getting neither until the power comes back.

She opens one of her lukewarm seltzers and pours it slowly over your palms, and it's not cold, but it's *wet*, and you hiss through your teeth, and she doesn't let go. Then she takes the last ice pack out of the biryani cooler, wraps it in the old gray T-shirt she's been using as a pillow, Penn Crew, three sizes too big, and folds your hands around it.

jules: My mother made me do a first-aid course every summer from eight to fourteen. She thought it would make me want to be a surgeon.

sam: Did it?

jules: It made me good at first aid.` : `She takes the last ice pack out of the biryani cooler and presses it against the side of your neck without asking, and holds it there. Her fingers are cold. Her face is very close, looking at the blood on your lip, the soot, your eyes.

jules: Pupils equal and reactive. You're not concussed. Whatever's wrong with you is pre-existing.

sam: Thanks.

jules: You'd have to be concussed to take that as a kindness.`}

Neither of you moves away. The two of you sit against the dead HVAC unit, shoulders almost touching, and watch the fire trucks' lights turn slow red circles on the rowhouses ten blocks away until, one by one, they leave.`,
    next: 'a4_talk_light'
  },

  /* ---------- the long night ---------- */
  a4_talk_light: {
    night: true,
    clock: { time: '1:40 AM' },
    enter: g => { g.know('jules_chapel', ['sam', 'jules'], 'When Jules was seven, Hugh locked her in the family chapel at Ravenscourt overnight. In the dark, she could hear the house breathing. Gran found her in the morning: "Pembertons don\'t need to be afraid of the dark. The dark should be afraid of us." She has slept with a light on ever since.'); },
    text: `sam: Is there any wooder left?

jules: *Water.*

sam: That's what I said.

She hands you the last seltzer without comment. Then, around one-forty, she starts talking. You don't ask. She just starts, looking out at the dark city.

jules: I sleep with the light on.

sam: I noticed. Your lamp. Under the door.

jules: Of course you noticed.

She pulls her knees up.

jules: When I was seven, my brother locked me in the chapel at Ravenscourt. My grandmother's house. There's a chapel, a real one, stone, from the 1890s. Nobody goes in. It was a joke. Hugh thought it was a joke. He went to bed and forgot about me.

She's quiet for a moment.

jules: It was January. There's no electricity in the chapel. I sat on the floor by the door all night. And it was so dark, the kind of dark where you can't tell if your eyes are open. And I could hear the house. Not creaking. *Breathing.* Slow. In and out. All night. Like it was asleep, and I was inside it.

You don't say anything. You don't trust your voice.

jules: In the morning, Gran found me. She opened the door, and looked at me sitting there, and she said—

She does the voice without meaning to: old, dry, very Main Line.

jules: *"Pembertons don't need to be afraid of the dark, child. The dark should be afraid of us."*

She lets out a breath.

jules: I've slept with a light on every night since. I'm eighteen years old. I'm in the Honors program. I have a lamp.`,
    choices: [
      { text: '"Your brother locked a seven-year-old in a freezing chapel *overnight*?" Let her hear how angry you are for her.', tag: 'Angry for her',
        fx: g => { g.flag('light', 'angry'); g.bond('jules', { trust: 2, affection: 1 }); }, go: 'a4_light_angry' },
      { text: '"I keep the closet door closed. Every night. Since I was a kid. Mikey told me there was a guy in there." Give her one of yours.', tag: 'Trade',
        fx: g => { g.flag('light', 'trade'); g.bond('jules', { affection: 1, trust: 1 }); }, go: 'a4_light_trade' },
      { text: 'Say nothing. Just shift your shoulder, so it\'s touching hers.', tag: 'Touch',
        fx: g => { g.flag('light', 'touch'); g.bond('jules', { affection: 1, tension: 1 }); }, go: 'a4_light_touch' }
    ]
  },
  a4_light_angry: {
    night: true,
    text: `sam: Your brother locked a seven-year-old in a freezing chapel *overnight*? And your grandmother's response was a *motivational poster*?

She looks at you, startled. Then she laughs, one breath, surprised out of her.

jules: Nobody's ever said it like that.

sam: How do people say it?

jules: They say, "Oh, *Hugh*." Like it's a funny story. At Thanksgiving. Hugh tells it. He does the voices. Everyone laughs. I laugh.

sam: Why do you laugh?

She doesn't answer for a long time.

jules: Because if I don't, I'm the only one at the table who isn't.`,
    next: 'a4_talk_him'
  },
  a4_light_trade: {
    night: true,
    text: `sam: I keep my closet door closed. Every night, since I was six. Mikey told me there was a guy who lived in there named Mr. Mustard, who ate the toes of boys who left the door open. I'm eighteen. I still check.

She turns her head and looks at you.

jules: *Mr. Mustard.*

sam: He had a whole backstory. He was from Delaware.

jules: That's the most frightening thing I've ever heard.

She's smiling. Not the corner-of-the-mouth thing. Actually smiling, with her whole face, in the dark, and you can see it because you're very close.

jules: Okay. So we're both idiots with older siblings.

sam: Twin. Hugh's not older.

jules: Hugh's *nine minutes* older. He's never let me forget a single one of them.`,
    next: 'a4_talk_him'
  },
  a4_light_touch: {
    night: true,
    text: `You don't say anything. You just shift your shoulder an inch, so it's touching hers.

She goes very still.

Then, slowly, so slowly that you could pretend later it never happened, she lets her weight settle against you. Not a lot. A little. The way you'd lean on a wall you weren't sure was there.

She doesn't say anything else for a while. Neither do you. Down on Broad, a car goes by with the windows down playing Lil Uzi Vert, and the bass fades north up the dark avenue, and she breathes out, long and slow, and you feel it through your shoulder.`,
    next: 'a4_talk_him'
  },

  a4_talk_him: {
    night: true,
    clock: { time: '2:35 AM' },
    text: g => `jules: Your turn.

sam: My turn for what?

jules: I told you about the chapel. That's a big one. That's a Thanksgiving-level one. Your turn.

You think about it. There's so much you can't tell her: the cold, the Slip, the man across the street with your face. There's so much else, under that, that you've never told anybody.`,
    choices: [
      { text: 'Carmen Torres. The bus. "I was too slow. A grandmother broke her hip because I was half a second too slow."', tag: 'Carmen',
        fx: g => { g.flag('him', 'carmen'); g.heat('jules', 1); g.bond('jules', { trust: 2 }); g.know('jules_carmen', ['sam', 'jules'], 'You told Jules about Carmen Torres. You said you were "too slow." You didn\'t say how fast you were.'); }, go: 'a4_him_carmen' },
      { text: g => 'Pop.' + (g.knows('pop_owes') ? ' The debt.' : '') + ' "My father owes money to people you don\'t owe money to."', if: g => g.knows('pop_owes') || g.knows('pop_owes_hint') || g.knows('pop_jacket'), tag: 'Pop',
        fx: g => { g.flag('him', 'pop'); g.bond('jules', { trust: 2 }); g.know('jules_pop', ['sam', 'jules'], 'You told Jules your father owes money to dangerous people.'); }, go: 'a4_him_pop' },
      { text: 'The thing you\'ve never told anyone: that you think you\'re the family afterthought. Mikey\'s the hero. Gigi\'s the baby. You\'re the one who got in fights.', tag: 'The afterthought',
        fx: g => { g.flag('him', 'afterthought'); g.bond('jules', { affection: 1, trust: 1 }); }, go: 'a4_him_after' }
    ]
  },
  a4_him_carmen: {
    night: true,
    text: g => `You tell her about the bus. Not the Slip. Not the cold. Just a bus, too fast on wet asphalt, and a boy in the crosswalk, and his grandmother on her phone, and you running, and getting there, and not getting there *enough*.

sam: She broke her hip. Sixty-seven. She's learning to walk again. Because I was half a second too slow.

Jules is quiet for a long time.

jules: The video. The Wawa. The thing on the news. The *Blur*.

Your heart stops.

jules: People keep saying he's fast. Like that's the point. Like fast is the whole thing.

She turns her head on the HVAC unit and looks at you.

jules: You know what I think the point is? Somebody *ran toward* it. Everybody else on that corner stood still. He ran toward it. Fast is just what happened after.

She looks away.

jules: Whoever got that boy out from in front of that bus, he didn't break that woman's hip. A bus did.

You can't breathe for a second. ${g.f('carmen_sorry') ? 'You think about Carmen, in the hospital bed: *You don\'t say sorry to me.*' : ''}`,
    next: 'a4_talk_her'
  },
  a4_him_pop: {
    night: true,
    text: g => `You tell her about the back booth at the Melrose Diner, and the jacket, and the phone calls${g.knows('pop_owes') ? ', and the night shifts' : ''}. You tell her about the envelope of twenties Pop gave you on move-in day, which is still in your sock drawer.

sam: ${g.knows('pop_owes') ? 'My father owes money to the kind of people you don\'t owe money to.' : 'I think my father owes money to the kind of people you don\'t owe money to. He won\'t say.'} And I can't do anything about it. I can't *fix* it.

Jules is quiet for a while.

jules: You really want to, though.

sam: What?

jules: Fix it. You said it like it physically hurts you that you can't. Like it's a bone out of place.

She pulls her knees in.

jules: My father has never owed anybody anything in his life. Everybody owes *him*. It's worse, Kearney. Trust me. It's so much worse.`,
    next: 'a4_talk_her'
  },
  a4_him_after: {
    night: true,
    text: `You tell her. You've never said it out loud. You didn't know you were going to say it until it's out.

sam: Mikey's the hero. He went to Afghanistan and came back and became a cop. He's the one Ma lights candles for. Gigi's the baby, she's the one everybody watches. And I'm the one who got in fights. I'm the one the nuns called Ma about. I'm the one who's *fine*. So I figured, if I'm not useful, if I'm not the one who shows up, then I'm…

You don't finish.

Jules doesn't say anything comforting. She doesn't tell you that's not true. She just looks at you. You can feel it on the side of your face, warmer than the night.

jules: So you carry refrigerators up nine flights of stairs for people who didn't ask.

sam: …Yeah.

jules: That's the worst reason I've ever heard to be kind.

She says it softly.

jules: It's still kind, though.`,
    next: 'a4_talk_her'
  },

  a4_talk_her: {
    night: true,
    clock: { time: '3:20 AM' },
    enter: g => { g.know('jules_nothing_happens', ['sam', 'jules'], 'Jules told you: "Nothing happens to me. I don\'t fall. I don\'t get hurt. Everyone calls it luck. I think it\'s the wrong word."'); },
    text: `At three-twenty, she says something nobody has ever said to you.

jules: Nothing happens to me.

sam: What do you mean?

jules: I mean, *nothing happens to me*. I've never broken a bone. I've never lost at cards. You know that one. When I was twelve, I fell off a horse at a jump, and I landed on my feet. Standing up. Everyone said *what luck*.

She's looking at her own hands.

jules: The window came down on me. A *whole window*. And there was a circle on the ground with me in it, and not one piece touched me.

Her voice is very steady and very quiet.

jules: Everyone calls it luck. I've started to think luck is the wrong word. I just don't know what the right one is.

She looks at you then, and her face in the city light is something you've never seen on her: not composed, not cool, not cutting. *Frightened.*

jules: I've never told anyone that. Not Simone. Not Callum. I don't know why I'm telling you.`,
    choices: [
      { text: '"That sounds lonely."',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', near: ['jules'], label: 'Hear her', on: { strong: 'a4_her_lonely', weak: 'a4_her_lonely_weak', miss: 'a4_her_lonely_weak' } },
        fx: g => g.flag('her', 'lonely') },
      { text: '"Maybe something\'s looking out for you." You mean it as comfort.', tag: 'Comfort',
        fx: g => { g.flag('her', 'looking'); g.bond('jules', { tension: 1, trust: 1 }); }, go: 'a4_her_looking' },
      { text: '"I believe you." Just that. Nothing else.', tag: 'Believe her',
        fx: g => { g.flag('her', 'believe'); g.bond('jules', { trust: 2, affection: 1 }); }, go: 'a4_her_believe' }
    ]
  },
  a4_her_lonely: {
    night: true,
    enter: g => g.bond('jules', { affection: 2, trust: 2 }),
    text: `sam: That sounds lonely.

She makes a sound. Not a laugh, not a sob. Something between, something that comes up out of her before she can stop it.

jules: Yes.

She puts the heel of her hand against one eye, hard.

jules: Yes. It is. Everyone thinks it's a *gift*. Everyone thinks I'm *lucky*. Nobody ever thinks, how would you know if anyone actually *liked* you? How would you know if you'd ever actually *won* anything? How would you know if anything you've ever done was *yours*?

She takes her hand away from her eye. It's dry. She's made sure of it, the way you hold pressure on a cut.

jules: You're the first person who's ever said lonely.`,
    next: 'a4_dawn'
  },
  a4_her_lonely_weak: {
    night: true,
    enter: g => g.bond('jules', { affection: 1, trust: 1 }),
    text: `sam: That sounds lonely.

She doesn't answer for a while.

jules: Maybe.

She pulls her knees in tighter.

jules: Everybody else says *lucky*. You said lonely. I don't know what to do with that yet.`,
    next: 'a4_dawn'
  },
  a4_her_looking: {
    night: true,
    text: `sam: Maybe something's looking out for you.

She goes very still.

jules: That's what Gran says.

She says it flatly. Something has closed in her face, a door you didn't mean to touch.

jules: *"Something is looking out for us, child. Something always has."* She says it like it's a blessing.

She looks out at the city.

jules: I never told her it sounds like a threat.`,
    next: 'a4_dawn'
  },
  a4_her_believe: {
    night: true,
    text: g => `sam: I believe you.

You don't make it smaller with a joke.

She searches your face for the joke anyway.

jules: You *do*.

sam: Yeah.

jules: Why?

You can't tell her why. *Because the world stopped and I didn't. Because time ran backward for me and said "Again." Because I've stood in rain that doesn't fall.* You can't tell her any of it.

sam: ${g.knows('ball_stopped') ? 'Because I watched a pool ball stop a quarter inch from a pocket. On a table I know.' : 'Because you said it like it scares you. People don\'t make up things that scare them.'}

She lets out a breath like she's been holding it since she was twelve.

jules: Okay.

${g.knows('ball_stopped') ? 'She doesn\'t say anything to that. She looks like you\'ve handed her the answer to a question she hasn\'t worked up the nerve to ask.' : ''}`,
    next: 'a4_dawn'
  },

  /* ---------- 4:12 ---------- */
  a4_dawn: {
    night: true,
    clock: { time: '4:12 AM' },
    enter: g => { g.flag('the_night'); },
    text: g => `It's four-twelve in the morning.

The city is so quiet you can hear a freight train somewhere out past Port Richmond, grinding along the river. The sky over the Delaware is still black. All four stars are still there. Nobody has told them about the morning yet.

You've been talking for six hours. You've talked about everything: the Iggles, which she refuses to call them; whether calculus is real; her horse, named Mercutio, who bit Callum once; Ciro and the frozen peas; Simone's ranking of everyone on the floor by how early they'd die in a horror movie (you: first, "heroically, stupidly"; Jules: last, "out of spite"); your Nonna; her Gran; the smell of the chapel, stone and candle wax and cold; ${g.f('him') === 'carmen' ? 'Carmen, and her whole other hip;' : g.f('him') === 'pop' ? 'your father, and his eggs he didn\'t eat;' : 'Mikey and Mr. Mustard;'} and nothing at all.

${g.f('light') === 'touch' ? 'Her head\'s been on your shoulder for an hour.' : 'Somewhere around three-thirty you stopped being two feet apart. You don\'t know who moved.'}${g.f('ret') === 'lie' ? ' Somewhere after three she forgave you the elevator. Or filed it, carefully, somewhere you\'ll find it later. You can\'t tell which.' : ''} Her hair smells like the roof, tar and heat, and under that like cedar.

You realize you've known her for seventeen days.

You realize you've thought about her for sixteen of them.

She lifts her head and looks at you. In the dark, her face is very close. Her eyes go to your mouth and come back, and she knows you saw it, and she doesn't pretend she didn't.

jules: Kearney.

sam: Yeah.

jules: I have a boyfriend.

sam: I know.

Nobody moves.`,
    choices: [
      { text: 'Lean in. Slowly. Leave her every chance to stop it.', tag: 'Lean in',
        fx: g => { g.flag('roof_end', 'lean'); }, go: 'a4_lean' },
      { text: 'Don\'t. Stay exactly here. Close enough to feel her breathe, and not one inch closer.', tag: 'Stay still',
        fx: g => { g.flag('roof_end', 'still'); g.bond('jules', { respect: 2, trust: 2 }); }, go: 'a4_still' },
      { text: 'Say something true instead. The truest thing you have.', tag: 'Something true',
        fx: g => { g.flag('roof_end', 'true'); }, go: 'a4_true' }
    ]
  },
  a4_lean: {
    night: true,
    enter: g => { g.bond('jules', { affection: 1, tension: 1 }); g.know('almost_kiss', ['sam', 'jules'], 'At 4:12 a.m. on the roof of Cardone Hall, you leaned in. She put her forehead against yours. She said, "Not like this." Neither of you moved until the sun came up.'); },
    text: g => `You lean in. Slowly. So slowly that she has every chance in the world.

She doesn't take any of them.

Her eyes close. Yours almost do. You're close enough to feel her breath on your lip, close enough that the space between you is warm.

And then she stops. Not away. She just *stops*, and tips her head forward, and puts her forehead against yours, and stays there.

jules: Not like this.

She says it so quietly it's almost just breath.

jules: Not while I'm someone else's. Not on a roof${g.f('fire') === 'stayed' ? ' at four in the morning with the whole city switched off' : ' with you smelling like a house fire'}. I don't want it to be one more thing that just goes my way, Sam. Everything goes my way. When it happens, I want to have *chosen* it.

Her hand finds yours on the gravel. ${g.hurt('burned_hands') ? 'She holds it very carefully, around the blisters.' : 'Her fingers are cool.'}

So you stay like that. Forehead to forehead on the roof of Cardone Hall, holding hands on the gravel, while the sky over the Delaware goes from black to gray to pink, and the first El grinds north, and neither of you moves until the sun comes up.`,
    next: 'tag_morning'
  },
  a4_still: {
    night: true,
    enter: g => { g.bond('jules', { affection: 1 }); g.know('roof_still', ['sam', 'jules'], 'At 4:12 a.m. on the roof, you didn\'t lean in. She put her head on your shoulder and fell asleep there until the sun came up.'); },
    text: g => `You don't move. It's the hardest thing you've done all night, and tonight you ${({ family: 'climbed a burning building', heck: 'opened a hydrant on a man who was on fire', van: 'walked up to two men with dart rifles', stayed: 'stood still while a block burned' })[g.f('fire')]}.

You stay exactly where you are. Close enough to feel her breathe. Not one inch closer.

She watches you not move. Something happens in her face, slowly, like the sky over the river: a lightening, a surprise.

jules: You're not going to.

sam: You have a boyfriend.

jules: I know. I said that.

sam: I heard you.

She laughs, more breath than sound, and shakes her head.

jules: Everyone takes what they want from me, Kearney. Politely. With a toast. They don't even know they're doing it.

She puts her head down on your shoulder.

jules: Thank you for not happening.

She falls asleep there, five minutes later, with her head on your shoulder and her hand on your knee, and you sit very still on the roof of Cardone Hall with a girl asleep against you and watch the sun come up over the Delaware, and you don't move until it's all the way up, and your arm has been asleep for an hour.`,
    next: 'tag_morning'
  },
  a4_true: {
    night: true,
    text: `You say something true instead. You don't plan it. It just comes out.`,
    choices: [
      { text: '"I think about you all the time, and I don\'t even like you."',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', near: ['jules'], label: 'Say it', on: { strong: 'a4_true_strong', weak: 'a4_true_weak', miss: 'a4_true_weak' } } },
      { text: '"You\'re the first person in my life who looked at me like I might be more than what I look like."',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', near: ['jules'], label: 'Say it', on: { strong: 'a4_true_strong2', weak: 'a4_true_weak', miss: 'a4_true_weak' } } }
    ]
  },
  a4_true_strong: {
    night: true,
    enter: g => { g.bond('jules', { affection: 2, tension: -1, trust: 1 }); g.know('true_thing', ['sam', 'jules'], 'At 4:12 a.m. you told Jules: "I think about you all the time, and I don\'t even like you." She said: "Same."'); },
    text: g => `sam: I think about you all the time. And I don't even like you.

For a second, nothing. Then she laughs. Not a breath, not swallowed behind a wrist: she *laughs*, helplessly, with her forehead on her knees and her shoulders shaking, and it goes on and on, and it's the best sound you've ever made happen.

When she lifts her head, her eyes are wet.

jules: Same.

sam: *Same?*

jules: I think about you constantly. It's *humiliating*. You're loud and you're sweaty and you carry other people's refrigerators and ${g.f('jules_lied_roof') || g.f('ret') === 'lie' ? 'you lie badly and you touch your *ear*' : 'you lie well enough that I can\'t always tell, which I *hate*, except for your *ear*'}, and I lie in bed with the lamp on and think about the stupid face you made when ${g.knows('ball_stopped') ? 'the eight ball stopped' : 'I sank the eight'}.

She wipes her eyes.

jules: And I have a boyfriend. Who is *kind*. Who rows on the river at five in the morning and sends me pictures of it.

She looks at the sky, which is getting lighter whether she likes it or not.

jules: So I don't know what we do with that.

sam: Nothing. Not tonight.

jules: Not tonight.

She leans her head against your shoulder, and stays there, and you watch the sun come up over the Delaware together, and neither of you says anything else, because there isn't anything else.`,
    next: 'tag_morning'
  },
  a4_true_strong2: {
    night: true,
    enter: g => { g.bond('jules', { affection: 2, tension: -1, trust: 1 }); g.know('true_thing', ['sam', 'jules'], 'At 4:12 a.m. you told Jules she was the first person who looked at you like you might be more than you look like. She said: "You are."'); },
    text: `sam: You're the first person in my life who looked at me like I might be more than what I look like.

She doesn't laugh. She looks at you until the roof goes quiet the way the world does when it stops.

jules: You are.

She says it like the answer to a limit: not where a thing is, but where it's going.

Then she leans her head against your shoulder, and you watch the sun come up over the Delaware, and you don't say anything else.`,
    next: 'tag_morning'
  },
  a4_true_weak: {
    night: true,
    enter: g => { g.bond('jules', { affection: 1, tension: -1 }); },
    text: `You say it, and it comes out wrong, too fast, half a joke, the way you say everything that matters.

She heard what you meant under it anyway. You can see her hear it.

jules: I know.

She hears herself say it and shuts her eyes, like she's just let go of something she meant to keep.

jules: That came out wrong too.

sam: No, it didn't.

She puts her head on your shoulder, and leaves it there, and you watch the sun come up over the Delaware together without saying anything else.`,
    next: 'tag_morning'
  },

  /* ================= TAG ================= */
  tag_morning: {
    card: { kind: 'tag' },
    loc: 'CARDONE HALL · LOBBY',
    clock: { day: 'Sun', date: 'Sep 6', time: '8:20 AM' },
    enter: g => { g.sleep(4); g.meet('callum'); g.bond('callum', { affection: 1 }); },
    text: g => `The power comes back at 6:02 AM with a *click* that runs through the whole building like a shiver. Somewhere below you, fourteen floors of refrigerators all start humming at once.

You wake up on the roof at eight, sunburned on one side of your face, with gravel printed into your arm. She's already awake, sitting a few feet away with her knees up, watching you sleep, and she looks away fast when you open your eyes. Neither of you mentions it.

Grace's voice comes up the stairwell, tired, echoing:

grace: *Pemberton.* There's a Callum in the lobby. He has iced coffee. He came straight from Boathouse Row.

Jules closes her eyes.

She goes down first. You give it five minutes. You give it seven. Then you go down too, because you're an idiot, and because you have to see.

The lobby is cool again, the AC roaring. Callum Whitford is standing by the front desk in a Penn Crew T-shirt and khaki shorts, holding a cardboard tray of iced coffees and a brand-new box fan, still in the box, under one arm. He has the windburned look of a guy who was on the Schuylkill at five this morning, while you were on the roof.

He's hugging her. Gently, with the coffee tray held out to the side so it won't spill on her.

callum: You weren't answering. Your mom said you weren't coming to the party, and then the news said North Philly was out, and I just… I got you an oat milk thing. And a fan. In case it goes out again.

He's so *nice*. He's so nice it's like being punched.

He sees you over her shoulder. ${g.hurt('burned_hands') ? 'He sees your hands, wrapped in a gray Penn Crew T-shirt that used to be his. He looks at it for exactly one second.' : (g.f('fire') === 'stayed' ? 'He sees the sunburn, and the gravel printed into your arm.' : 'He sees the soot still in your hairline.')} His face goes concerned, genuinely, immediately.

callum: Dude. You okay? You look rough, man. Were you near that fire?

He doesn't wait for an answer. He holds out the coffee tray.

callum: Here. I got an extra. I always get an extra.

You take the coffee. It's cold. It's exactly how you take it. You don't know how he knew.

Over Callum's shoulder, with her chin against his Penn Crew shirt, Jules looks at you.

She doesn't look away.

Your phone buzzes in your pocket. ${g.f('fire') === 'stayed' ? (g.knows('sam_number', 'teddy') ? 'It\'s Teddy.\n\nTXT teddy: they took bree\nTXT teddy: last night. 15th st. the van\nTXT teddy: i texted you six times\nTXT teddy: where were you' : 'It\'s Ciro.\n\nTXT ciro: ' + (g.f('teddy_meet') === 'no' ? 'the T' : 'your pizza friend. the cold one') + ' called the store. 7am\nTXT ciro: he was crying\nTXT ciro: he says tell you they took bree. last night. 15th st. the van\nTXT ciro: he says where were you\nTXT ciro: i dont want to know. i want to know. where were you') : g.f('fire') === 'van' ? 'It\'s a voice note from Bree. You play it with the phone pressed to your ear. It\'s the man in the polo, perfect, calm, close: *"Easy, son."* Then her own voice, small: *"thank you, wawa. heck says thank you. teddy wont say it but he means it."*' : 'It\'s a voice note from Bree. You play it with the phone pressed to your ear. It\'s you, perfect, crackling, from some moment last night you don\'t remember: *"Somebody has to."* Then her own voice, small: *"thank you, wawa."*'}`,
    end: true
  }
});
