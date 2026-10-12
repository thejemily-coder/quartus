/* S1 · E2 · FRAME RATE, part 3 of 3: Act Three ("The Broad Street Blur") and the Tag. */
EH.scenes('s01e02', {

  a3_article: {
    card: { kind: 'act', label: 'Act Four', title: 'The Broad Street Blur' },
    loc: 'CARDONE HALL · ROOM 9-14',
    clock: { day: 'Thu', date: 'Aug 27', time: '6:15 PM' },
    enter: g => {
      if (g.f('heist') !== 'stayed') g.hidden('halcyon_heat', 2);
      if (g.f('dana') === 'quote') g.hidden('halcyon_heat', 1);
      g.heat('press', g.f('heist') === 'stayed' ? 0 : 2);
      g.recap('The Inquirer has a new name for you: the Broad Street Blur.');
    },
    text: g => `${g.f('lost_minutes') ? 'You walk all the way back from Ridge Avenue. It takes an hour. Ciro texts you twice: **WHERE IS MY BIKE**, and then, forty minutes later, **A COP BROUGHT MY BIKE. WHAT HAPPENED. DONT TELL ME.**\n\n' : ''}${g.hurt('burn') ? 'Grace finds you in the hallway with your forearm wrapped in a Ciro\'s napkin and blood on your shirt. She doesn\'t say a word. She just takes you into the RA room, unwraps it, looks at the handprint (a perfect, blistered *handprint*) and then at you, and doesn\'t blink.\n\ngrace: That\'s a second-degree burn in the shape of a hand.\n\nsam: Pizza oven.\n\ngrace: Pizza ovens don\'t have fingers, Kearney.\n\nShe cleans it, dresses it with silver sulfadiazine from a tube in her desk, and wraps it in gauze, and she writes something in her black notebook, and she doesn\'t ask again.\n\n' : ''}At 6:15, your phone buzzes with an Inquirer alert. Then Nik's phone buzzes. Then, from across the hall, Simone's, and then a scream of pure joy from 9-11.

> THE BROAD STREET BLUR: VIDEOS SHOW MYSTERY FIGURE AT ARMORED-CAR ROBBERY, BUS CRASH AND WAWA · by Dana Fiorillo

${g.f('heist') === 'stayed' ? 'It\'s mostly about the Grittys: "the Freeze Frame Gang," some genius on Twitter has already called them, and it\'s stuck. There\'s footage from a dozen phones. Some of it is yours; you gave it to the police. It ends with a paragraph about the Blur: *Whoever the Broad Street Blur is, he wasn\'t at Girard Avenue on Thursday. Witnesses there say they wish he had been.*' : 'There\'s footage from a dozen phones. The Grittys, "the Freeze Frame Gang," which some genius on Twitter has already named them, and it\'s stuck. The truck, impossibly stopped. ' + (g.f('burst_late') ? 'And in four of the videos, a kid in a Ciro\'s shirt sprinting across Broad Street, too late, dodging a cab. ' : 'And in four of the videos, a smear of motion in a Ciro\'s shirt that crosses Broad Street between one frame and the next. ') + (g.f('fight_result') === 'tackle' ? 'One of the clips is just a white sneaker, standing upright, alone in the middle of Broad Street, for ninety seconds. It has more views than anything else in the story.' : g.f('fight_result') === 'money' || g.f('fight_result') === 'money_burn' ? 'In one clip, the smear resolves for half a second into a kid on the asphalt hugging a bag of money like a recovered fumble. His face is turned away. Thank God, his face is turned away.' : g.f('fight_result') === 'touched' ? 'In one clip, a kid in a Ciro\'s shirt stands on the corner with his arm stuck straight up in the air, rigid, for a minute and a half, while everyone else runs. Twitter thinks he\'s hailing a cab.' : 'In one clip, a kid in a Ciro\'s shirt kneels on the sidewalk with his hand on a bleeding guard\'s back, and doesn\'t look up once.')}

${g.f('dana') === 'quote' ? 'The last line of the story is a quote. *"Somebody has to," the young man said, and walked away south on Broad.*\n\n' : ''}By seven, the Broad Street Blur has its own hashtag, a fan account, and a mural petition. By morning, a guy on Passyunk will be selling bootleg T-shirts.

simone: *(across the hall, door flung open)* THE BROAD STREET BLUR! *THE BROAD STREET BLUR!* SALVATORE KEARNEY, THE BLUR IS WEARING *YOUR SHIRT*. I'M NOT SAYING ANYTHING. I'M JUST SAYING IT *LOUDLY*.

${g.knows('sam_slip', 'nik') ? 'Nik looks up from his monitors with an expression of total, ecstatic terror.\n\nnik: You\'re *trending*. You\'re trending above the Eagles. Sam. During *training camp*. In *Philadelphia*.' : 'Nik doesn\'t look up from his monitors. He\'s watching the Girard clips frame by frame, with his headphones on, very still.'}

It's 7:40. Mikey's picking you up at eight. You need a shirt with a collar.`,
    next: 'a3_mikey'
  },

  a3_mikey: {
    loc: 'MAX\'S STEAKS · GERMANTOWN & ERIE',
    clock: { time: '8:20 PM' },
    enter: g => { g.meet('mikey'); g.bond('mikey', { affection: 2 }); },
    text: g => `Mikey picks you up in his Charger, the one he bought used and talks to like a horse. He's in an Eagles quarter-zip and jeans, and he looks bigger than you remember, which isn't possible, because you saw him the night before move-in. He gets out of the car and hugs you in the middle of Broad Street, and lifts you off the ground, and you let him.

mikey: *Sammy.* College man. Look at you. You look like garbage.

sam: Thanks.

mikey: You look like garbage that's been through a lot. Get in.

He drives you to Max's, the steak place on Erie that's been there since before either of you were born, with its glowing sign and its bulletproof window and its line of people who don't care about either. Mikey orders for both of you at the window without asking: two wit, wiz on his, provolone on yours. You eat on the hood of the Charger at the curb because the counter's packed and because that's what you used to do when he picked you up from detention.

He waits until you're halfway through.

mikey: So. News. They borrowed me.

sam: Borrowed you?

mikey: Off patrol. Couple weeks. There's a task group on the Hitch, Incident Zero-Eight-Two-Two. The guys call it the Second Hand Unit, because of the clocks. Two detectives, a sergeant with a bad hip, a lot of whiteboards, and me, knocking on doors. I'm on the Gritty crew, the Freeze Frame, whatever. Officially. Unofficially, everybody in that room keeps talking about the *other* thing.

He wipes his hands. He takes out his phone. He turns the screen around.

It's a still frame from the Girard footage, blown up and grainy: ${g.f('heist') === 'stayed' ? 'a kid in a Ciro\'s shirt on the corner of Broad and Girard, holding up a phone, filming. Not running. Not fighting. Just standing there.' : g.f('burst_late') ? 'a kid in a Ciro\'s shirt running across Broad between two parked cars, a cab swerving behind him.' : g.f('heist') === 'guard' ? 'a kid in a Ciro\'s shirt kneeling on the sidewalk with his hand on the guard\'s back. His face is mostly turned away. Mostly.' : 'a smear of motion in a Ciro\'s shirt, crossing Broad Street between two parked cars. It\'s not a person. It\'s a stroke of paint in the shape of one.'}

mikey: Ciro's, Sammy.

He doesn't say anything else. He just eats a bite of his cheesesteak and looks at you, the way he used to look at you over the dinner table when you were nine and the cookie jar was empty.

${g.f('did_wed_ma') ? 'mikey: And here\'s the thing I didn\'t want to say on the phone with Ma holding it.' : 'mikey: And here\'s the thing I didn\'t want to put in a text.'} There's a guy. Not a cop. Gray polo shirt, very nice manners, from Halcyon. Name's Brannigan. He's been in our captain's office twice this week. He doesn't care about the Grittys. Doesn't ask one question about them. He wants the fast kid. Wants to know if we have a name. Wants us to call *him*, personally, before we call anybody else, if we get one.

He chews.

mikey: Think about that, Sammy. A battery company that doesn't care about armored-car robbers. ${g.f('heist') === 'stayed' ? 'That only cares about the kid in the pizza shirt.' : 'That only cares about the kid who tried to stop \'em.'}

He puts the phone away.

mikey: So I'm going to ask you once. Only once, because you're my brother and I love you and I'm going to believe whatever you say. Is it you?`,
    choices: [
      { text: '"It\'s not me, Mike." Look him right in the eye.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['mikey'], label: 'Lie to your brother', on: { strong: 'a3_mikey_lie', weak: 'a3_mikey_lie', miss: 'a3_mikey_lie_miss' } },
        fx: g => g.flag('mikey2', 'lied') },
      { text: '"I was there. I deliver up and down Broad, Mike, I was *there*. I saw it. That\'s all." Not a lie. Not the truth.', tag: 'Half',
        fx: g => { g.flag('mikey2', 'half'); g.heat('mikey', 2); g.bond('mikey', { trust: 1 }); g.know('sam_at_girard', ['sam', 'mikey'], 'Who knows you were at Broad & Girard during the robbery', { track: true }); }, go: 'a3_mikey_half' },
      { text: '"What\'s going on with Pop, Mike?" Change the subject to the thing that\'s actually scaring you.', tag: 'Pop',
        fx: g => { g.flag('mikey2', 'pop'); g.heat('mikey', 1); g.bond('mikey', { trust: 1, tension: 1 }); }, go: 'a3_mikey_pop' }
    ]
  },
  a3_mikey_lie: {
    enter: g => g.know('brannigan_name', ['sam', 'mikey'], 'The Halcyon man in the gray polo is named Brannigan. He\'s asking the police for the fast kid\'s name, not the robbers\'.'),
    text: `sam: It's not me, Mike.

You look him right in the eye. You keep your hands on your cheesesteak where he can see them.

Mikey looks at you until your cheesesteak goes cold. Then he nods.

mikey: Okay.

He believes you. No: he *chooses* to. You watch him choose it, and you watch what it costs, and he pays without a word.

mikey: Okay. Then if you see the kid, you tell him something from me. You tell him there's a guy in a polo shirt who wants him more than the cops do, and that's never a good sign, and he should be careful who he saves. Saving people is how they find you.`,
    next: 'a3_mikey_end'
  },
  a3_mikey_lie_miss: {
    enter: g => { g.bond('mikey', { trust: -1 }); g.know('ear_tell', ['mikey']); g.know('brannigan_name', ['sam', 'mikey'], 'The Halcyon man in the gray polo is named Brannigan. He\'s asking the police for the fast kid\'s name, not the robbers\'.'); },
    text: `sam: It's not me, Mike.

Mikey looks at your hand. You look at your hand. It's on your left ear.

mikey: You did that when you were six. When you told Ma the dog broke the lamp. We didn't *have* a dog, Sammy.

He doesn't laugh. He puts his cheesesteak down on the hood of the Charger.

mikey: Okay. I said I'd believe whatever you said, and I will. Officially. Officially, it's not you.

He looks out at Erie Avenue, at the bus shelter and the check-cashing place, like they might help.

mikey: Unofficially, there's a guy named Brannigan in a polo shirt who wants you more than the cops do. And that is never, ever a good sign. You be careful who you save, Sammy. Saving people is how they find you.`,
    next: 'a3_mikey_end'
  },
  a3_mikey_half: {
    enter: g => g.know('brannigan_name', ['sam', 'mikey'], 'The Halcyon man in the gray polo is named Brannigan. He\'s asking the police for the fast kid\'s name, not the robbers\'.'),
    text: `sam: I was there. I deliver up and down Broad, Mike. I was *there*. I saw it. That's all.

It isn't a lie. You watch Mikey hear that it isn't a lie, and you watch him hear that it isn't the whole truth either.

mikey: Okay.

He folds his cheesesteak paper into a square, then a smaller square.

mikey: Then here's what I need from you. If you're *there* again, you get out of the way. You don't be a witness, you don't be a hero, you don't stop for a selfie. Because there's a guy named Brannigan in a polo shirt who wants the fast kid more than the cops do, and if he decides you look like the fast kid—

He doesn't finish.

mikey: Be careful who you save, Sammy. Saving people is how they find you.`,
    next: 'a3_mikey_end'
  },
  a3_mikey_pop: {
    enter: g => { g.know('brannigan_name', ['sam', 'mikey'], 'The Halcyon man in the gray polo is named Brannigan. He\'s asking the police for the fast kid\'s name, not the robbers\'.'); g.know('pop_mikey_worried', ['sam', 'mikey'], 'Mikey says Pop is taking night shifts, sleeping in the cab, and won\'t talk to him either.'); },
    text: g => `sam: What's going on with Pop, Mike?

Mikey stops chewing. For a second the cop goes out of his face, and he's just your brother.

mikey: I don't know.

He puts the cheesesteak down.

mikey: He's taking night shifts. He sleeps in the cab sometimes, Ma says, in the lot on Oregon Avenue. He's lost weight. He jumps when his phone rings. I asked him, man to man, and he told me to mind my business. *Mind my business.* Me.

${g.knows('pop_unknown_calls') ? 'You think about the number. 215-555-4471. Twice in the cab, declined twice.\n\n' : ''}${g.knows('pop_jacket') ? 'You think about Vinnie\'s back booth at the Melrose. The jacket that paid.\n\n' : ''}mikey: You noticed that I noticed you changed the subject, right? I'm a cop. That's my whole job, noticing.

sam: Yeah.

mikey: Okay. I'm letting it go. Tonight. But there's a guy named Brannigan in a polo shirt who's been in my captain's office twice, asking for the fast kid. Not the robbers. The kid. And that is never a good sign.

He picks his cheesesteak back up.

mikey: Be careful who you save, Sammy. Saving people is how they find you.`,
    next: 'a3_mikey_end'
  },
  a3_mikey_end: {
    text: g => `${g.knows('weisz_card') ? 'You think about the back of Dr. Weisz\'s card. *Be careful who you save.* Two men who\'ve never met, the same sentence, word for word, in the same week. Like they\'re both reading from something you can\'t see.\n\n' : ''}He drives you home. At the curb outside Cardone, he leans across you and opens your door, the way Pop used to, and then grabs the back of your neck before you can get out and pulls your forehead against his.

mikey: Call Ma. And don't do anything stupid.

sam: You always say that.

mikey: You always do something stupid.

The Charger pulls away down Broad. You stand on the sidewalk and watch the taillights until they're gone, and only then do you realize your nose is bleeding again.`,
    next: 'a3_study'
  },

  /* ---------------- study night ---------------- */
  a3_study: {
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { time: '11:10 PM' },
    text: g => `At 11:10, there's a knock on the door of 9-14.

It's Jules, in sweatpants and an Episcopal Academy Crew sweatshirt that is obviously Callum's and that she obviously considers hers. She has a laptop under one arm, a highlighter behind her ear, and the expression of a woman who has been forced into something by a syllabus.

jules: The quiz is at nine. Recitation pairs share a participation grade. Your participation is my grade. Lounge. Now.

She doesn't wait. She turns and walks down the hall, and you follow, because it's not really a question.

The lounge is empty except for a guy asleep under a blanket on the far couch who Grace says has been there since Tuesday. Jules sets up at the round table under the bolted-on TV, opens her laptop, uncaps her highlighter, and looks at you. And keeps looking.

${g.hurt('burn') ? 'Her eyes go to your forearm. The gauze. The edge of a red, blistered *something* poking out from under it, in a shape that is very hard to explain.\n\njules: What happened to your arm?' : g.hurt('stasis_arm') ? 'Her eyes go to your right arm, which you\'re holding stiffly against your side because it still feels like it belongs to someone else.\n\njules: What happened to your arm?' : 'jules: You look terrible.\n\nsam: Everybody keeps saying that.\n\njules: Everybody keeps being right. What happened today?'}`,
    choices: [
      { text: g => (g.hurt('burn') || g.hurt('stasis_arm')) ? 'Lie. "Ciro\'s. Pizza oven. I\'m an idiot." Smile. Hands still.' : 'Lie. "Long shift. Bad tips. I\'m fine." Smile. Hands still.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['jules'], near: ['jules'], label: 'Lie to Jules', on: { strong: 'a3_study_lie', weak: 'a3_study_lie', miss: 'a3_study_lie_miss' } },
        fx: g => g.flag('study1', 'lied') },
      { text: '"I was at Broad and Girard today. When it happened. I tried to help." Leave out the rest.', tag: 'Some of it',
        fx: g => { g.flag('study1', 'girard'); g.know('sam_at_girard', ['sam', 'jules'], 'Who knows you were at Broad & Girard during the robbery', { track: true }); g.bond('jules', { trust: 2 }); g.heat('jules', 2); }, go: 'a3_study_girard' },
      { text: '"I can\'t talk about it." Just that. Look at her when you say it.', tag: 'Honest wall',
        fx: g => { g.flag('study1', 'wall'); g.bond('jules', { respect: 1 }); g.heat('jules', 1); }, go: 'a3_study_wall' }
    ]
  },
  a3_study_lie: {
    text: g => `${g.hurt('burn') || g.hurt('stasis_arm') ? 'sam: Ciro\'s. Pizza oven. I\'m an idiot.' : 'sam: Long shift. Bad tips. I\'m fine.'}

You smile. You keep both hands flat on the table. You think so hard about your left ear that it practically itches.

She looks at you the way she looked at you across the pool table: a long, flat, professional look, the look of someone counting cards.

jules: Okay.

She doesn't buy it. She decides it isn't her business instead, right in front of you, neatly, like folding a napkin.

jules: Limits. Page forty-one.`,
    next: 'a3_study_calc'
  },
  a3_study_lie_miss: {
    enter: g => g.bond('jules', { trust: -1 }),
    text: g => `${g.hurt('burn') || g.hurt('stasis_arm') ? 'sam: Ciro\'s. Pizza oven. I\'m an—' : 'sam: Long shift. Bad tips. I\'m—'}

jules: Ear.

You put your hand down. She doesn't smile. She doesn't seem angry, either. She just looks tired, suddenly, the way Ma looks tired when the bill comes in.

jules: You don't have to tell me. You really don't. I'm not entitled to it. But you don't have to *lie* to me, either. It's insulting to both of us.

She turns to her laptop.

jules: Limits. Page forty-one.`,
    next: 'a3_study_calc'
  },
  a3_study_girard: {
    text: `sam: I was at Broad and Girard today. When it happened. I tried to help.

She doesn't say anything for a moment.

jules: You tried to help.

sam: There was a guard. He was hurt.

jules: And you're a pizza delivery boy with a nosebleed, and three people in mascot masks were tearing an armored truck open with their hands, and you tried to *help*.

She says it flatly. Then her face does something complicated, and she looks down at her highlighter.

jules: That's either the stupidest or the bravest thing I've ever heard. I can't tell which. I don't think there's a difference.

She doesn't ask anything else. She doesn't ask *how*. You notice that. You'll keep noticing it.

jules: Limits. Page forty-one.`,
    next: 'a3_study_calc'
  },
  a3_study_wall: {
    text: `sam: I can't talk about it.

You say it looking right at her. No smile. No joke. Your hands are flat on the table.

She holds your eyes. Her face doesn't soften. It sharpens, like a lens finding focus.

jules: Okay.

Then, after a pause:

jules: Thank you for not lying.

sam: How do you know I wasn't going to?

jules: Because you didn't touch your ear. And because you said "can't," not "won't." People who say "won't" are protecting themselves. People who say "can't" are protecting something else.

She uncaps her highlighter.

jules: Limits. Page forty-one.`,
    next: 'a3_study_calc'
  },
  a3_study_calc: {
    text: `For an hour and a half, it's just math.

She's merciless and very good, and somewhere around midnight you stop noticing that you're tired and start noticing that you understand things. Limits. Continuity. The squeeze theorem, which she explains using Hugh, her twin, and Callum, her boyfriend, as the two functions, and herself as the one being squeezed. She says it without a flicker. You decide not to laugh, then don't have to decide, because she moves on so fast.

Her phone lights up on the table three times. **CALLUM**. **CALLUM**. **CALLUM ❤️**, with a heart she clearly didn't put there. The third time, without looking at it, she turns it face down.`,
    choices: [
      { text: 'Lock in. Do the practice quiz like it\'s the real one.',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, bonus: 2, bonusLabel: 'Jules tutoring', label: 'Practice quiz', on: { crit: 'a3_study_calc_good', success: 'a3_study_calc_good', fail: 'a3_study_calc_bad', fumble: 'a3_study_calc_bad' } } }
    ]
  },
  a3_study_calc_good: { enter: g => { g.flag('quiz_ready'); g.grade('calc', 2); }, text: `You get nine out of ten on her practice quiz. She marks it with her highlighter, pink, a little check on each right answer, and an X on the one you missed, and next to the X she writes, in small neat letters: *close*.`, next: 'a3_study_talk' },
  a3_study_calc_bad: { enter: g => g.grade('calc', 1), text: `You get six out of ten. She marks it with her highlighter in silence. Next to the fourth X she writes, in small neat letters, *how*, and underlines it twice.`, next: 'a3_study_talk' },
  a3_study_talk: {
    text: g => `It's almost one. The guy under the blanket on the far couch is snoring. Jules is rolling something between her fingers while she reads, absently, the way some people play with a ring. It's the ivory die.

She tosses it onto the table without looking. It clicks across the Formica and stops. Six.

She picks it up fast and pockets it, like a card player covering a bad hand. Except it was a six. You file that away.

${g.f('rec_laugh') ? 'You think about the sound she made in recitation. The *ha*. You want to hear it again, mostly to prove it wasn\'t a fluke.' : 'She hasn\'t laughed all night. She hasn\'t laughed all week, as far as you can tell.'}`,
    choices: [
      { text: '"Why Temple? Honestly. You could\'ve gone anywhere."',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', near: ['jules'], label: 'Ask her for real', on: { strong: 'a3_talk_temple_strong', weak: 'a3_talk_temple_weak', miss: 'a3_talk_temple_miss' } },
        fx: g => g.flag('study2', 'temple') },
      { text: '"So the boyfriend texts you with his own heart emoji?"', tag: 'Callum',
        fx: g => { g.flag('study2', 'callum'); g.bond('jules', { tension: 1 }); }, go: 'a3_talk_callum' },
      { text: 'Do Ciro explaining the squeeze theorem. Get the laugh. You need it.',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', near: ['jules'], label: 'Make her laugh', on: { strong: 'a3_talk_laugh', weak: 'a3_talk_laugh_weak', miss: 'a3_talk_laugh_weak' } },
        fx: g => g.flag('study2', 'laugh') }
    ]
  },
  a3_talk_temple_strong: {
    enter: g => { g.bond('jules', { trust: 2, affection: 1, tension: -1 }); g.know('jules_why_temple', ['sam', 'jules'], 'Jules chose Temple because it wasn\'t Penn. Hugh is at Penn, and her mother is Chief of Surgery there. "I wanted to be somewhere I wasn\'t already finished."'); },
    text: g => `She doesn't answer right away. She caps her highlighter. She uncaps it.

jules: Because it wasn't Penn.

sam: That's not a reason. That's a direction.

${g.f('rec') === 'drive' ? 'She looks up sharply. It\'s her own line from recitation, *a limit isn\'t a place, it\'s a direction*, and you watch her hear it.' : 'She looks up sharply, like you\'ve caught her using the wrong formula.'}

jules: My mother is Chief of Surgery at Penn. My twin is at Wharton. Gran has a building at Penn with our name on it. If I'd gone to Penn, I would have walked into a life that was already finished. Every hallway. Every professor. Every person would have known exactly who I was before I opened my mouth.

She's quiet.

jules: I wanted to be somewhere I wasn't already finished.

She doesn't look at you when she says it. She looks at the dark window, where the lounge is reflected, the two of you at a round table under a bad light, and you watch her hear how much she just said.

jules: That was a loan, Kearney. Not a gift. Don't bring it up again.`,
    next: 'a3_study_end'
  },
  a3_talk_temple_weak: {
    enter: g => { g.bond('jules', { trust: 1, tension: -1 }); },
    text: `jules: Because it wasn't Penn.

That's all she gives you, but she gives it to you straight, without a joke on it, and she looks at you while she says it. Then she uncaps her highlighter again, and the door closes, gently.

jules: Ask me again sometime. Not at one in the morning.`,
    next: 'a3_study_end'
  },
  a3_talk_temple_miss: {
    enter: g => { g.bond('jules', { tension: 1 }); },
    text: `jules: Because I wanted to.

She says it in the voice she uses on waiters and her mother, the one with no doors in it.

jules: That's a very personal question for a calculus study session, Kearney.`,
    next: 'a3_study_end'
  },
  a3_talk_callum: {
    text: `sam: So the boyfriend texts you with his own heart emoji?

jules: He put it in his own contact. On my phone. At graduation.

sam: That's a lot.

jules: It's *sweet*.

She says *sweet* the way Simone says *nice*. Then she hears herself say it, and her jaw tightens.

jules: He's kind. He's genuinely kind, which is rarer than you'd think in Gladwyne. He remembers my mother's birthday. He rows at five in the morning and texts me a picture of the river. Every morning. The same river.

She turns the phone a little further face down, which isn't physically possible, and somehow she does it anyway.

jules: It's not your business.

sam: You brought up the river.`,
    next: 'a3_study_end'
  },
  a3_talk_laugh: {
    enter: g => { g.bond('jules', { affection: 1, tension: -1 }); g.flag('study_laugh'); },
    text: g => `You do Ciro. You do Ciro explaining the squeeze theorem, with the hands and the insults: *"Two cousins. One on the left, one on the right. They're both going to the wedding. So YOU, in the middle, you are going to the wedding whether you like it or not. That's the squeeze. That's family. Now give me nine dollars."*

She makes it to *"That's family."*

Then she breaks. Not out loud: she presses her mouth into the back of her wrist and her shoulders go, silently, twice, like something trying to get out of a locked room. The guy under the blanket on the far couch says *"What?"* in his sleep, and that nearly finishes her, and she bites down on her knuckle until it passes.

When it's over, she lowers her hand and looks at you, furious.

jules: *I hate that.*

${g.f('rec_laugh') ? 'sam: You keep saying that.\n\njules: I keep *meaning* it.' : 'sam: You laughed.\n\njules: I\'m aware I laughed. I was *there*.'}`,
    next: 'a3_study_end'
  },
  a3_talk_laugh_weak: {
    text: `You do Ciro explaining the squeeze theorem. She listens to the whole thing with her chin on her hand and no expression at all.

jules: You do him well.

But she doesn't go back to the laptop right away. She sits there for a second with her chin on her hand, looking at you, like she's trying to figure out what you're for.`,
    next: 'a3_study_end'
  },
  a3_study_end: {
    enter: g => { g.sleep(6); },
    text: g => `You don't remember falling asleep.

You remember the lounge, and her highlighter, and problem nine. And then it's 6:40 in the morning, gray light in the window, and you're lying on the lounge couch with your sneakers still on and a blanket over you that you didn't put there. It's not hers. It's the gross lounge blanket the guy on the far couch abandoned. But somebody put it on you.

On the round table, weighed down by your phone, there's a page of practice problems in her small perfect handwriting, every one of them worked out step by step, the kind of answer key you could actually learn from. At the bottom:

*Sleep. You're worse at math tired, which I didn't think was possible. This is for our participation grade. Not for you. —J.P.*

${g.f('fight_result') === 'tackle' ? 'And under that, smaller, in the same pen:\n\n*P.S. Nice sneakers.*' : ''}`,
    next: 'a3_quiz'
  },
  a3_quiz: {
    loc: 'WACHMAN HALL · ROOM 413',
    clock: { day: 'Fri', date: 'Aug 28', time: '9:00 AM' },
    text: g => `Quiz one. Ten questions, twenty minutes. Femi hands them out, walking up and down the rows, and nobody looks at him, and nobody notices the paper appearing on their desk. When he gets to you, he stops, and nods, and you nod back.

Jules is in the back corner by the radiator. She doesn't look at you. You don't look at her. Both of you are very aware of not looking.

${g.f('quiz_ready') ? 'You know this. You actually know it. Her handwriting is in your head.' : 'You recognize half of it. You think.'}`,
    choices: [
      { text: 'Take the quiz. Her handwriting is in your head.', if: g => g.f('quiz_ready'),
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, bonus: 2, bonusLabel: 'Studied with Jules', label: 'MATH 1041 · Quiz 1', on: { crit: 'a3_quiz_good', success: 'a3_quiz_good', fail: 'a3_quiz_bad', fumble: 'a3_quiz_bad' } },
        fx: (g, t) => { if (!EH.isGood(t)) g.grade('calc', 1); } },
      { text: 'Take the quiz.', if: g => !g.f('quiz_ready'),
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, label: 'MATH 1041 · Quiz 1', on: { crit: 'a3_quiz_good', success: 'a3_quiz_good', fail: 'a3_quiz_bad', fumble: 'a3_quiz_bad' } } }
    ]
  },
  a3_quiz_good: { enter: g => { g.grade('calc', 4); g.flag('quiz1', 'pass'); g.bond('jules', { respect: 1 }); }, text: `You walk out of Wachman Hall into the morning feeling, for the first time in a week, like a person who did a normal thing correctly.

On Monday the quiz comes back with a **9/10** circled in red. Jules sees it on your desk. She doesn't say anything. She just nods, once, like a coach.`, next: 'tag_teddy' },
  a3_quiz_bad: { enter: g => { g.grade('calc', -2); g.flag('quiz1', 'fail'); }, text: `You walk out of Wachman Hall feeling like you've been mugged by a number.

On Monday the quiz comes back with a **5/10** circled in red. Jules sees it on your desk. She doesn't say anything. She just takes out her highlighter and starts writing on the back of it.`, next: 'tag_teddy' },

  /* ================= TAG ================= */
  tag_teddy: {
    card: { kind: 'tag' },
    night: true,
    loc: 'A ROWHOUSE ON E. ALLEGHENY AVE · PORT RICHMOND',
    clock: { day: 'Fri', date: 'Aug 28', time: '11:52 PM' },
    enter: g => { g.know('teddy_mother', ['teddy', 'bree', 'heck'], 'Teddy\'s mother, Halina Kowal, needs a kidney. The robbery money is for her transplant evaluation at Jefferson.'); },
    text: g => `> NOT YOU. THE CAMERA.

A kitchen in Port Richmond. Linoleum, a Virgin Mary on the windowsill, a church calendar from St. Adalbert's with the dialysis days circled in red: Monday, Wednesday, Friday.

In the next room, an older woman is asleep in a recliner under a crocheted blanket, the TV on mute, gauze taped over the fistula in her forearm. Friday was a dialysis day.

At the kitchen table, Teddy Kowal is counting money into a manila envelope. Twenties, in neat stacks of fifty. On the front of the envelope, in careful block capitals: **JEFFERSON · TRANSPLANT EVAL · H. KOWAL**.

The big man, Heck, is sitting on the floor against the fridge with both hands in a bucket of ice. The ice is boiling. Steam rolls up off it into the ceiling light.

The cousin, Bree, is sitting on the counter eating Cap'n Crunch out of the box.

bree: You want to hear him again?

teddy: No.

bree: You're gonna want to hear him again.

She presses her lips together and opens them, and out of her mouth comes your voice, perfect, crackling, the way the phone heard it: *"${g.f('fight_result') === 'deal' ? 'I swear to God.' : g.f('fight_result') === 'why' ? 'I just want to know why.' : g.f('heist') === 'guard' ? 'Stay with me. Stay with me.' : g.f('heist') === 'stayed' ? 'Broad and Girard. A guard. Please hurry.' : 'Somebody has to.'}"*

Teddy stops counting.

teddy: Again.

She does it again.

Teddy looks at the envelope. Then he looks through the doorway at his mother asleep in the recliner.

teddy: He means it.

bree: Yeah. That's the problem.

teddy: No. That's not the problem.

He licks his thumb and goes back to counting.

teddy: The problem is so do I.`,
    next: 'tag_van'
  },
  tag_van: {
    night: true,
    loc: 'N. BROAD ST · OUTSIDE CARDONE HALL',
    clock: { day: 'Sat', date: 'Aug 29', time: '2:40 AM' },
    enter: g => { g.know('brannigan_list', [], 'Brannigan has a provisional file on the Blur.'); },
    text: g => `A white van with no logo is parked across Broad from Cardone Hall, engine off, under a dead streetlight.

A man is standing beside it on the sidewalk in a gray polo shirt, at 2:40 in the morning, like it's the most natural thing in the world. Calm as a lifeguard. He's holding a tablet.

On the tablet, side by side, are three images. The Wawa blur. ${g.f('heist') === 'stayed' ? 'A kid in a Ciro\'s shirt on the corner of Broad and Girard, filming with his phone, his face half turned toward the camera.' : g.f('fight_result') === 'tackle' ? 'A single white Air Force 1, upright and alone in the middle of Broad Street.' : g.f('burst_late') ? 'A kid in a Ciro\'s shirt, running across Broad at Girard.' : 'The Girard smear, a stroke of paint in the shape of a person.'} And a third: a still from a hospital security camera, sixth floor, Temple University Hospital. ${g.f('did_wed_carmen') ? 'A kid in a Ciro\'s shirt, walking out of room 612.' : 'An empty hallway outside room 612, where the kid in the Ciro\'s shirt has never come.'}

He types with one thumb, under the images: **ES-17 (PROVISIONAL)**.

Then he looks up, slowly, at the ninth floor.

Most of the windows are dark. One isn't. In room 9-11, across the hall from yours, a desk lamp is on, angled low, the way it's been on every night this week.

He looks at the lit window. He's in no hurry.

He makes a note.

Then he gets back into the van, and it pulls away up Broad without its headlights.

On the ninth floor, the lamp in 9-11 stays on.`,
    end: true
  }
});
