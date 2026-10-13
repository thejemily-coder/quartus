/* S1 · E8 · ALL HALLOWS, part 3 of 3: Act Four ("All Saints"), tag, polls. */
EH.scenes('s01e08', {

  /* ================= ACT FOUR: ALL SAINTS ================= */
  a4_saints: {
    card: { kind: 'act', label: 'Act Four', title: 'All Saints' },
    night: true,
    loc: 'CARDONE HALL · 9TH FLOOR',
    clock: { day: 'Sun', date: 'Nov 1', time: '1:35 AM' },
    enter: g => { g.meet('mikey'); },
    text: g => `By one-thirty, the ninth floor is a crime scene.

Temple police first, then Philly PD, then two homicide detectives in rumpled coats who look like they were asleep forty minutes ago. Yellow tape across the ${g.f('femi_end') === 'arms' ? 'door to Stairwell B' : 'hallway outside 9-14'}. A woman from the medical examiner\'s office with a kit. Everybody on the floor has been herded into the lounge, still in costume, and the lounge is full of Blurs and Barbies and a T-rex sitting on the floor with his inflatable head in his lap, and nobody\'s talking. A girl dressed as a traffic cone is crying in a way that doesn\'t stop.

At 1:35, the elevator opens, and your brother walks out.

He\'s in plainclothes. Jeans, a Birds hoodie, his badge on a chain around his neck. His hair\'s still flat on one side from his pillow. He heard it on the radio. *Cardone Hall, ninth floor.* He doesn\'t stop to talk to the detectives. He walks straight into the lounge and finds you on the floor against the wall with ${g.f('femi_end') === 'arms' ? 'Femi\'s blood on your shirt' : 'your hands in your lap'}, and he crouches down in front of you and puts both hands on your face, the way Ma does, and looks at you.

mikey: Sammy. Are you hurt?

sam: No.

mikey: Is any of this yours?

sam: No. It\'s his.

He holds your face a second longer. Then he pulls you in, hard, the way he did at the airport when he came home from Afghanistan, and you let him.

And over his shoulder, through the lounge doorway, you watch the elevator open again.

Two men in gray polo shirts. And between them, in a dark overcoat, with a tablet under his arm, calm as a man arriving at a dinner party: Brannigan.

He shakes the lead detective\'s hand like they\'re old friends. You can\'t hear what he says. You can see the detective nodding. You can see Brannigan gesture, gently, sadly, toward the ${g.f('femi_end') === 'arms' ? 'stairwell' : 'hallway'}. You catch pieces of it between the radios:

*study participant. left against medical advice. experimental compound. adverse reaction. such a tragedy.*

The detective writes it down.

Then Brannigan turns, and looks through the lounge doorway, past the Blurs and the Barbies and the crying traffic cone, and finds you. On the floor. In your brother\'s arms.

He walks over. Mikey stands up. Mikey knows him.

mikey: Mr. Brannigan.

BRANNIGAN: Officer Kearney. I\'m so sorry we\'re meeting like this.

He looks down at you. His face is kind. His voice is kind.

BRANNIGAN: You must be Sam. I\'m so sorry about your friend. He talked about you, you know, at the facility. He said you were the only one who ever really saw him.`,
    choices: [
      { text: 'Get up. Go for his throat. In front of everyone.', tag: 'Go for him',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 2, label: 'Get to Brannigan', physical: true, on: { crit: 'a4_lunge', success: 'a4_lunge', partial: 'a4_lunge', fail: 'a4_lunge_stopped', botch: 'a4_lunge_stopped' } } },
      { text: 'Stay on the floor. Look up at him. Say it quietly, so only he hears: "I know what you did."', tag: 'I know',
        fx: g => { g.flag('brannigan8', 'know'); g.hidden('halcyon_heat', 1); }, go: 'a4_iknow' },
      { text: 'Say nothing. Look at his face. Memorize it. Every line. You\'re going to need it.', tag: 'Memorize',
        check: { kind: 'move', move: 'Hold the Line', attr: 'nerve', skill: 'empathy', label: 'Don\'t break', on: { strong: 'a4_memorize', weak: 'a4_memorize', miss: 'a4_memorize_crack' } } }
    ]
  },
  a4_lunge: {
    night: true,
    enter: g => { g.flag('brannigan8', 'lunge'); g.heat('mikey', 2); g.bond('mikey', { tension: 1 }); g.hidden('halcyon_heat', 1); },
    text: `You\'re up before you decide to be. You\'re past Mikey before he can turn. You get one hand on Brannigan\'s overcoat, on his collar, and you shove him back against the lounge wall hard enough that the framed floor-rules poster falls and the glass breaks.

He doesn\'t fight back. He doesn\'t raise a hand. He just lets you pin him there, looking at you with that kind, patient face, while the room goes silent and every Blur on the ninth floor watches.

BRANNIGAN: It\'s all right. It\'s all right, son. Grief does this.

Then Mikey\'s arms are around you from behind, and he\'s pulling you off, and the polo men are stepping forward, and Brannigan holds up one hand: *stay*. They stay.

BRANNIGAN: No harm done, Officer. He\'s in shock. They were close.

He straightens his collar. He looks at you over Mikey\'s arm, and for one second, just one, the kindness goes out of his eyes, and what\'s left is flat and patient.

BRANNIGAN: Get some rest, Sam.

He goes back to the detectives.

Mikey doesn\'t let go of you for a long time. When he does, he turns you around and looks at you. His face is pale.

mikey: Sammy. How does a Halcyon man know your *name*?`,
    next: 'a4_lounge'
  },
  a4_lunge_stopped: {
    night: true,
    enter: g => { g.flag('brannigan8', 'lunge'); g.heat('mikey', 1); },
    text: `You start to get up. Mikey\'s hand is on your shoulder before you\'re halfway, pushing you back down, hard, the way he used to hold you down when you were nine and wanted to fight a kid twice your size.

mikey: Don\'t.

You fight him. He doesn\'t let go.

mikey: Sammy. *Don\'t.*

Brannigan watches the whole thing with polite concern.

BRANNIGAN: It\'s all right. Grief does this.

He goes back to the detectives. Mikey keeps his hand on your shoulder until Brannigan\'s gone, and then a while longer.

mikey: How does a Halcyon man know your *name*, Sammy?`,
    next: 'a4_lounge'
  },
  a4_iknow: {
    night: true,
    enter: g => { g.know('brannigan_threat', ['sam'], 'On Halloween night, Brannigan told you: "Then you know what happens to the ones who are on their own. Come in, Sam. Before it\'s somebody you can\'t carry."'); },
    text: `You don\'t get up. You look at him from the floor, and you say it so quietly that Mikey, standing right beside him, doesn\'t hear.

sam: I know what you did.

Brannigan crouches down, so his face is level with yours. To everyone in the lounge, it looks like a kind older man comforting a grieving kid. He even puts a hand on your knee.

BRANNIGAN: Then you know what happens to the ones who are on their own.

His voice is so soft. So gentle.

BRANNIGAN: Come in, Sam. Before it\'s somebody you can\'t carry.

He pats your knee twice and stands up.

BRANNIGAN: Officer. Take care of your brother. He\'s had a terrible night.

He goes back to the detectives. Mikey watches him go. Then he looks down at you.

mikey: What did he say to you?

sam: He said he was sorry.

mikey: Sammy. How does a Halcyon man know your *name*?`,
    next: 'a4_lounge'
  },
  a4_memorize: {
    night: true,
    enter: g => { g.flag('brannigan8', 'memorize'); g.know('brannigan_face', ['sam'], 'You memorized Brannigan\'s face on Halloween night. A scar through the left eyebrow. A chipped canine. A wedding ring on a chain around his neck, not his finger. He doesn\'t blink enough.'); },
    text: `You don\'t say anything. You look up at him.

You look at his face the way Jules looks at a card table. Every line. A thin white scar through the outside of his left eyebrow. A chipped lower canine. Reading glasses folded in the overcoat\'s breast pocket. A wedding ring, but not on his finger: on a thin chain around his neck, just visible at the open collar. He doesn\'t blink enough. He blinks about once every twenty seconds, like a man who taught himself to stop.

He waits for you to say something. You don\'t. He waits a little longer.

Something flickers in his face. Not much. A man noticing that a thing he expected to break hasn\'t.

BRANNIGAN: Get some rest, son.

He goes back to the detectives.

Mikey watches him go. Then he looks down at you.

mikey: Sammy. How does a Halcyon man know your *name*?`,
    next: 'a4_lounge'
  },
  a4_memorize_crack: {
    night: true,
    enter: g => { g.flag('brannigan8', 'memorize'); },
    text: `You try. You try to look at him and memorize him and not break.

You break. Your face goes, all of it, at once, and you put your head down on your knees on the lounge floor in front of the man who killed Femi Ojo and you shake.

Brannigan stands there for a moment, watching. Then he puts a hand, very lightly, on the top of your head. Like a priest.

BRANNIGAN: I know, son. I know.

He goes back to the detectives.

When you can lift your head again, Mikey\'s crouched in front of you.

mikey: Sammy. How does a Halcyon man know your *name*?`,
    next: 'a4_lounge'
  },

  a4_lounge: {
    night: true,
    clock: { time: '4:10 AM' },
    text: g => `You don\'t answer Mikey. He doesn\'t make you. He gets called away by a detective at two, and he squeezes the back of your neck and says *I\'m right down the hall*, and he is, all night.

By four, the police have let most of the floor go to bed. Nobody goes to bed. The ones who live here sit in the lounge, still in their costumes, because nobody can make themselves take them off and nobody can make themselves leave.

It\'s just the five of you, in the end. You. Nik, in his Ghostbusters jumpsuit, with his proton pack on the floor beside him, rocking a little, breathing in for four. Grace, in her scrubs, sitting very straight with her hands folded, staring at nothing. Simone, in her Van Helsing coat, with her makeup in black rivers down her face. And Jules, in the Liberty Bell dress, the gold paint gone streaky and dull, ${g.f('costume8') === 'cabbie' ? 'your father\'s jacket' : 'your hoodie'} still around her shoulders.

Grace talks first. She talks the way she talks when she\'s scared: clinically.

grace: The holes in his hip. I saw them, when the ME was working. Three of them. Iliac crest. That\'s where you take bone marrow.

She stops.

grace: You do one. For a marrow sample, you do one. You numb it first. They did three. And there\'s no sign they numbed anything. There\'s bruising around all three. Hematoma. That means his heart was beating. That means he was—

She stops again. Her hands are shaking. She doesn\'t hide them.

grace: He was awake for it. Sam. He was *awake*. That\'s why the paralytic. So he couldn\'t move. Not so he couldn\'t feel it.

Simone makes a sound and puts her hand over her mouth.

Nik stops rocking.

Nobody says anything for a long time.

${g.f('kissed') ? 'Beside you, very quietly, so only you can hear, Jules says:\n\njules: I was kissing you.\n\nsam: I know.\n\njules: While he was— on the other side of the door— I was—\n\nsam: *I* was. Not you. Me. I didn\'t look at the phone.\n\nShe doesn\'t say anything. Her hand finds yours on the carpet. Her fingers are cold. She holds on.' : 'Beside you, Jules hasn\'t said anything in two hours. Her hand finds yours on the carpet. Her fingers are cold. She holds on.'}`,
    choices: [
      { text: 'Let it come. Whatever it is. You haven\'t cried in front of anyone since graduation, in the car. Let it come.', tag: 'Break',
        fx: g => { g.flag('grief', 'break'); g.bond('jules', { trust: 1, affection: 1 }); g.bond('nik', { trust: 2, affection: 2 }); g.bond('simone', { trust: 2, affection: 1 }); g.bond('grace', { trust: 2 }); g.hidden('revenant_drift', -1); }, go: 'a4_break' },
      { text: 'Stand up. "Room 714. Building 7. The Navy Yard. I\'m going. Tonight."', tag: 'Rage',
        fx: g => { g.flag('grief', 'rage'); g.hidden('revenant_drift', 1); }, go: 'a4_rage' },
      { text: 'Go quiet. Go all the way down, to the bottom, where nothing can reach you. Stay there.', tag: 'Numb',
        fx: g => { g.flag('grief', 'numb'); g.hidden('revenant_drift', 0.5); }, go: 'a4_numb' }
    ]
  },
  a4_break: {
    night: true,
    text: `You let it come.

It comes up out of you like something that\'s been waiting since August. Since the bus. Since Carmen\'s hip. Since Heck\'s fists and the steel bed in the truck and your father on his knees on the gravel. Since every single person you didn\'t get to fast enough.

You cry on the floor of the ninth-floor lounge at four in the morning on All Saints' Day, in front of four people, and none of them look away.

Nik comes over and sits on your other side and puts his head on your shoulder and cries too, ugly, snotty, the way Nik does everything, completely. Simone gets down on the carpet in front of you in her Van Helsing coat and puts both hands on your knees. Grace doesn\'t move from her chair, but after a while she gets up and brings you a cup of water, and stands there holding it until you can take it.

And Jules holds onto your hand, and doesn\'t say anything, and doesn\'t let go, and when you finally look at her, her eyes are wet. She doesn\'t cry. She doesn\'t. But her eyes are wet, and she lets you see it, and you understand that that is the most she has ever let anyone see.

nik: He was nice to me once. In the library. In September. I dropped my calculator and it rolled under a table and somebody handed it back to me, and I said thanks, and I looked up, and there was nobody there.

He wipes his face on his jumpsuit sleeve.

nik: I thought I was losing it. It was him. It was him, wasn\'t it.

sam: Yeah. It was him.`,
    next: 'tag_bells'
  },
  a4_rage: {
    night: true,
    text: g => `You stand up.

sam: Room 714. Building 7. The Navy Yard. I\'m going. Tonight.

Nik is up before you finish the sentence, standing in front of the door in his Ghostbusters jumpsuit.

nik: No.

sam: Move, Nik.

nik: *No.* Salvatore. You\'re on the *list*. You heard him. *They call you 17.* You walk into that building, and you\'re the next one in a laundry cart.

sam: Move.

Simone stands up next to Nik. Then Grace. The three of them, in a jumpsuit and a Van Helsing coat and scrubs, between you and the door.

And Jules doesn\'t stand up. She stays on the floor. She just says, very quietly, to your back:

jules: Not tonight.

You stop.

jules: You said it to me. On the bathroom floor. *Not tonight.* I\'m saying it to you.

You stand there with your fists closed, in front of three people who love you, with the fourth one on the floor behind you, and the whole ninth floor smelling like candy corn and fear.

${g.S.drift >= 7 ? 'The air around your hands has gone cold. Nik sees it. He sees your breath smoke in a warm room.' : ''}

You sit back down.

You don\'t cry. You don\'t say anything. You sit on the floor with your fists closed until the sun comes up, and Jules sits beside you with her shoulder against yours, holding on to your arm with both hands, like she\'s holding a door shut.`,
    next: 'tag_bells'
  },
  a4_numb: {
    night: true,
    text: `You go quiet. You go all the way down.

There\'s a place under everything, under the noise and the guilt and the sound Simone keeps making, where it\'s very cold and very still. It\'s like the Slip. It\'s the Slip without the Slip. Nothing moves there. Nothing reaches you.

You sit there. You stay there.

Nik talks to you. You don\'t hear what he says. Grace puts a cup of water in your hand. You hold it. Simone says your full name twice, *Salvatore Kearney*, the way she says it to make you look up, and you don\'t look up.

And Jules doesn\'t say anything. She just sits beside you, with her shoulder against yours, holding your hand, and she doesn\'t let go, and every few minutes she squeezes, once, like she\'s checking that you\'re still in there.

You are. Barely. Somewhere at the bottom of the cold, you can feel her squeeze.

It\'s the only thing you can feel.`,
    next: 'tag_bells'
  },

  /* ================= TAG ================= */
  tag_bells: {
    card: { kind: 'tag' },
    loc: 'CARDONE HALL · ROOF',
    clock: { time: '6:58 AM' },
    enter: g => { g.sleep(0); g.know('femi_card', ['sam'], 'Femi\'s last message: "M.R. ALIVE. RM 714. THEY CALL YOU 17."'); g.know('sam_es17', ['sam'], 'Halcyon calls you 17.'); },
    text: g => `You go up to the roof at dawn, because it\'s the only place left.

It\'s cold. November cold, the real thing, not the Slip. The sky over the Delaware is going from gray to pale gold. Somebody\'s left a Solo cup on the parapet from last night, half full, with a skin of frost on it.

${g.f('femi_pocket') || g.f('femi_end') === 'found' ? 'You take the sticky note out of your pocket. You unfold it. You read it again, in the first light, in Femi\'s small, neat, hurried handwriting.' : 'Grace gave it to you at five. She took it out of his hoodie pocket before the ME bagged him and pressed it into your hand without a word. You unfold it on the roof, in the first light.'}

*M.R. ALIVE. RM 714.*
*THEY CALL YOU 17.*

Marisol is alive. And you have a number.

*17.*

You think about the APERTURE screen you saw through the glass on the night of the Hitch. *SUBJECT FIELD.* You think about Brannigan\'s tablet. A list of codes. You think about Femi\'s wristband. *031.* You think about how many other people in this city have a number they don\'t know about.

You think: *they call you 17*, and you think about the fact that Femi knew that, that he *saw* it, on a screen or a file or a door, and he walked six miles in the dark to tell you, and you ${g.f('femi_end') === 'found' ? 'were on the roof' : 'were too late anyway'}.

At seven o\'clock, the bells at St. Malachy\'s, on 11th Street, start ringing for All Saints' Day. You\'ve never heard them from the roof before. You didn\'t know you could.

You stand there and you count them.

You don\'t know what else to do.

${g.f('grief') === 'numb' ? 'You count to twenty-one. You don\'t feel anything. You keep counting.' : g.f('grief') === 'rage' ? 'You count to twenty-one. Your hands are cold. You keep counting.' : 'You count to twenty-one. You\'re crying again. You keep counting.'}

Behind you, the roof door opens. You don\'t turn around. You know the footsteps. They stop beside you, and a cold hand finds yours on the parapet, and holds on, and the bells keep ringing.`,
    end: true
  }
});

Object.assign(EH.episodes.s01e08, {
  polls: [
    { q: 'On the roof, 11:47 p.m.', opts: [
      { label: 'Looked at the phone', pct: 38, if: g => g.f('roof8') === 'phone' },
      { label: 'Kissed her', pct: 62, if: g => g.f('roof8') === 'kiss' }
    ] },
    { q: 'Brannigan, in the lounge', opts: [
      { label: 'Went for him', pct: 29, if: g => g.f('brannigan8') === 'lunge' },
      { label: '"I know what you did."', pct: 44, if: g => g.f('brannigan8') === 'know' },
      { label: 'Memorized his face', pct: 27, if: g => g.f('brannigan8') === 'memorize' }
    ] },
    { q: 'At 4 a.m.', opts: [
      { label: 'Broke', pct: 46, if: g => g.f('grief') === 'break' },
      { label: 'Raged', pct: 31, if: g => g.f('grief') === 'rage' },
      { label: 'Went numb', pct: 23, if: g => g.f('grief') === 'numb' }
    ] }
  ],
  onEnd: g => {
    g.recap('On Halloween, Halcyon\'s cleaners killed Femi Ojo.');
    g.recap(g.f('femi_end') === 'arms' ? 'He died in your arms in Stairwell B. When he died, everyone could finally see him.' : 'He died alone outside your door while the party went on around him. You were on the roof.');
    if (g.f('kissed')) g.recap('You kissed Jules on the roof at 11:47. You didn\'t look at your phone.');
    g.recap('Brannigan knows your name.');
    g.recap('Femi\'s last message: "M.R. ALIVE. RM 714. THEY CALL YOU 17."');
  }
});
