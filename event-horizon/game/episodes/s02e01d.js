/* S2 · E1 · AFTER THE HOLIDAY, part 4 of 4: Act Four ("Finals"), tag, polls. */
EH.scenes('s02e01', {

  /* ================= ACT FOUR: FINALS ================= */
  a4_finals: {
    card: { kind: 'act', label: 'Act Four', title: 'Finals' },
    loc: 'CARDONE HALL · 9TH FLOOR',
    clock: { day: 'Mon', date: 'Dec 7', time: '9:00 AM' },
    enter: g => { g.sleep(6); },
    text: g => `Finals week on the ninth floor of Cardone Hall smells like instant ramen and Red Bull and a radiator somebody put a sock on.

Everybody\'s back. Nik is in the lounge with three monitors and a sign on his back that says *DO NOT SPEAK TO ME UNLESS YOU ARE A DATA STRUCTURE*. Grace is doing rounds with a clipboard and a face like a war. Simone is back from Atlanta with a new coat and ${g.f('simone10') === 'mended' ? 'a hug for you in the hallway that lifts you off your feet' : 'a polite nod for you in the hallway, the way you\'d nod at somebody\'s cousin'}.

And Jules.

Jules is back. She came back Sunday night. She texted you one word, from the stairwell:

TXT jules: Kearney.

And when you opened your door she was standing there in her camel coat with the dart hole in it, which she hasn\'t had fixed, and she looked at your temple, at the white hair, and didn\'t ask. She just put her hand on it.

Your Calc final is Thursday at eight a.m. You have Femi\'s green notebook. You have four days.

You have time for three things.`,
    hub: {
      slots: 3, label: 'Finals week',
      blurb: 'Calc final Thursday, 8 a.m.',
      options: [
        { id: 's2f_study', text: 'Study Calc. Femi\'s notebook, every page, *outside first*. Do it right.', cost: 1, tag: 'Study', go: 'a4_study' },
        { id: 's2f_jules', text: 'Jules is in the lounge at the big table with index cards. There\'s a chair across from her with nobody in it.', cost: 1, tag: 'Jules', go: 'a4_jules' },
        { id: 's2f_simone', text: 'Simone. You lied to her face in a theater. Say it. Say you\'re sorry.', cost: 1, tag: 'Simone', go: 'a4_simone', if: g => g.f('simone9') === 'lied' && g.f('simone10') !== 'mended' },
        { id: 's2f_grace', text: 'Grace has a penlight and a medical encyclopedia. Show her the hair.', cost: 1, tag: 'Grace', go: 'a4_grace' },
        { id: 's2f_nik', text: 'Nik has been building something on those three monitors since Thanksgiving. He keeps looking at you.', cost: 1, tag: 'Nik', go: 'a4_nik' },
        { id: 's2f_ciro', text: 'Work doubles at Ciro\'s. You owe somebody money now.', cost: 1, tag: 'Ciro\'s', go: 'a4_ciro', if: g => g.f('job1') === 'paid' }
      ],
      done: 'a4_final'
    }
  },

  a4_study: {
    enter: g => { g.flag('calc_study_s2'); },
    text: `You take Femi\'s notebook to the third floor of Charles Library and sit at the carrel next to the one with the sticky note. *THIS CARREL IS TAKEN · F.O.* Somebody has put a little plastic poinsettia on the desk under it.

You do every problem. Limits. Derivatives. The chain rule, outside first. Related rates. Optimization: a farmer with 400 feet of fence who wants the biggest pen, a problem you\'ve gotten wrong every time since September.

On the margin of the optimization page, in Femi\'s neat hand: *Sam, the trick is you set it up first. You always want to start solving before you know what you\'re solving. Set it up. Then solve.*

You set it up. Then you solve it.

You get it right.

You sit there in the quiet with the green notebook open and the plastic poinsettia next to you, and you don\'t cry, quite.`,
    next: '@hub'
  },

  a4_jules: {
    enter: g => { g.bond('jules', { trust: 1 }); g.flag('jules_s2e1', 'study'); },
    text: g => `You sit down in the chair across from her.

She doesn\'t look up. She slides an index card across the table. On it, in her perfect handwriting: *d/dx [ln(cos x)]*.

sam: Negative tan x.

She looks up.

jules: That was *fast*.

sam: I studied.

jules: You *studied*.

sam: I have a notebook.

She takes the card back. She looks at you over it.

jules: We haven\'t talked about the Water Works.

sam: No.

jules: Or the Parkway.

sam: No.

jules: Or the roof. Or the bathroom floor. Or Halloween. Or any of the eleven times I have watched you come back from somewhere with blood on your face and nothing to say about it.

She slides another card across. *∫ sec²x dx*.

sam: Tan x plus C.

jules: I\'m not going to ask you now.

sam: Okay.

jules: I\'m going to Ravenscourt for the break. Christmas, and then New Year\'s, and then my grandmother has something she wants to tell me, she says, *when the year turns*. She\'s been saying it since Thanksgiving. She\'s very dramatic about it, like a governess in a Brontë novel.

She slides another card across. You look at it. It doesn\'t have a problem on it.

*January.*

jules: When I come back. In January. I ask, you answer. And then you ask, and I answer.

She looks at you.

jules: Deal?

sam: Deal.

She takes the card back. She puts it in her coat pocket, the one with the dart hole, and goes back to her own studying, and her foot finds yours under the table, the way it did in October, and stays.`,
    next: '@hub'
  },

  a4_simone: {
    text: `She\'s in her room with the door open, running lines for something for next semester, walking back and forth with the script held up.

You knock on the open door.

She stops. She doesn\'t lower the script.

simone: Salvatore Kearney.

sam: I lied to you. In the theater. You gave me one chance and I lied, and you were right, and I\'m sorry. That\'s all. You don\'t have to say anything.`,
    choices: [
      { text: 'Stand there. Let her decide. Don\'t fill the silence.', tag: 'Open Up',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Apologize to Simone', on: { strong: 'a4_simone_yes', weak: 'a4_simone_yes', miss: 'a4_simone_no' } } }
    ]
  },
  a4_simone_yes: {
    enter: g => { g.flag('simone10', 'mended'); g.bond('simone', { trust: 3, respect: 2, affection: 1 }); },
    text: `You stand there. You don\'t say anything else. You let her decide.

She looks at you over the script.

simone: That\'s two chances, Salvatore. I don\'t give two chances. Ask anybody in Decatur.

sam: I know.

simone: I\'m giving you two chances.

She puts the script down. She comes across the room and hugs you, hard, one arm, and says into your shoulder:

simone: I watched the Parkway on my grandmother\'s TV and had to go sit in the car. If you die, I will fly to wherever they bury you and do a *monologue*. A long one. With *props*.`,
    next: '@hub'
  },
  a4_simone_no: {
    enter: g => { g.flag('simone10', 'cool'); g.bond('simone', { trust: 1 }); },
    text: `You stand there. And the silence goes too long, and you can\'t stand it, and you start to fill it, *I just, I didn\'t want you in it, it\'s dangerous, people*, and you can hear yourself making excuses, and you stop.

Simone lowers the script.

simone: I heard you, Salvatore. I heard the part before the excuses. That part was good.

simone: I need a little more time. That\'s all. That\'s not no.

She raises the script again.`,
    next: '@hub'
  },

  a4_grace: {
    enter: g => { g.know('time_debt2', ['sam', 'grace'], 'Grace: your hair, your gums, your bone density. You\'re eighteen. In places, your body is thirty.'); g.bond('grace', { trust: 1 }); },
    text: `Grace sits you on the edge of her desk under her desk lamp and looks at the white hair through a magnifying glass she says she uses for splinters. Then at your gums with a penlight. Then she presses on your shins, hard, one at a time, and makes you tell her where it hurts.

grace: Okay.

She sits back.

grace: One white hair at eighteen is nothing. Stress. Genetics. Whatever. Except it isn\'t one. You\'ve got eleven. Look.

She holds up a hand mirror. Behind your ear, where you can\'t see, a little scatter of white in the dark.

grace: And your gums are receding like a forty-year-old smoker. And your shins are tender where shins are tender in people whose bone density is going.

grace: Your x-ray in September showed fractures that were ten days old in a body that broke them the night before. I thought that was healing. I think now it was *time*. I think when you do whatever it is you do, your body keeps the clock running. And the longer you\'re in there, the more it runs.

She clicks off the penlight.

grace: In places, you\'re eighteen. In places, I\'d say thirty.

You don\'t say anything.

grace: I\'m not a doctor yet. I\'m a pre-med with an MCAT book and a magnifying glass. But if I were you, I would stop getting *stuck*. Okay? Whatever stuck means. Stop.`,
    next: '@hub'
  },

  a4_nik: {
    enter: g => { g.flag('nik_map_s2'); g.bond('nik', { trust: 1, affection: 1 }); g.know('nik_tracker', ['sam', 'nik'], 'Nik built a map of every place in the city where people reported "the cold" since August. It clusters around Kensington, the Navy Yard, Ravenscourt, and Mifflin Street.'); },
    text: `Nik turns one of his three monitors toward you without a word.

It\'s a map of Philadelphia. Covered in dots. Hundreds of them, in blue.

nik: Every post on Reddit, Twitter, Nextdoor, and the Philly subreddit since August twenty-second where somebody says they felt *cold* for no reason. *Weird cold. Ghost cold. My dog freaked out.* I scraped all of it. Then I geocoded it. Then I did a heat map, which, ironically, is a cold map.

The dots are everywhere. But they cluster. Four places, bright blue, like bruises.

Kensington. McPherson Square. Where the shimmer was.

The Navy Yard.

A blue cluster in South Philly that you don\'t have to zoom in on, because you know every block of it. Mifflin Street.

And way out on the Main Line, in Gladwyne, by itself, a single bright point, on a property that on the satellite view is all trees and a big stone house.

nik: That one\'s weird, right? Gladwyne? That\'s like four posts, total. From the same address. A *housekeeper*. On Nextdoor. *The chapel is cold again, does anyone know a good HVAC guy.*

He looks at you.

nik: I don\'t know what any of it means. Okay, that\'s a lie, I have like four theories and three of them are bad and one of them is the plot of a Konami game. But you come home cold, bro. Since August. I\'m not stupid, I\'m just polite. So. I\'m the guy in the chair. The guy in the chair makes maps.`,
    next: '@hub'
  },

  a4_ciro: {
    enter: g => { g.money(14 * 8 + 160); g.bond('ciro', { affection: 1 }); },
    text: `You work two doubles at Ciro\'s. Lunch and dinner, Tuesday and Wednesday, the oven and the e-bike and the oven again, until your arms smell like garlic down to the elbow.

Ciro watches you for two days without saying anything. On Wednesday night, closing, he puts a slice in front of you and says:

ciro: You owe somebody money.

sam: How\'d you know?

ciro: You deliver like a man who owes somebody money. Fast and sad.

He wipes the counter.

ciro: Is the Iannuccis?

You don\'t say anything. He nods, like you did.

ciro: In 1987 I owe Bruno\'s father six hundred dollar. For the oven. That oven.

He points at it with his rag.

ciro: Thirty-nine years. I still make pizza in it. I still say *grazie* to Bruno when he comes in for the white pie. That\'s how it works, with them. You pay. And then you keep saying *grazie*.

He throws the rag in the sink.

ciro: Two hundred seventy-two dollar. Go home.`,
    next: '@hub'
  },

  a4_final: {
    loc: 'MATH 1041 · FINAL EXAM · TUTTLEMAN',
    clock: { day: 'Thu', date: 'Dec 17', time: '8:00 AM' },
    text: g => `Calc final. Two hundred people. Two hours. Blue books.

You sit down and open it. Problem one is a limit. Problem two is a chain rule, outside first.

Problem eleven is a farmer with 400 feet of fence.`,
    choices: [
      { text: 'Set it up first. Then solve.', tag: 'Final',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 15, bonus: 2, bonusLabel: 'Femi\'s notebook', label: 'MATH 1041 final', on: { crit: 'a4_final_good', success: 'a4_final_good', fail: 'a4_final_bad', fumble: 'a4_final_bad' } },
        if: g => !g.f('calc_study_s2') },
      { text: 'Set it up first. Then solve. You did this problem in the library under a plastic poinsettia.', tag: 'Final',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 15, bonus: 5, bonusLabel: 'Femi\'s notebook, studied', label: 'MATH 1041 final', on: { crit: 'a4_final_good', success: 'a4_final_good', fail: 'a4_final_bad', fumble: 'a4_final_bad' } },
        if: g => g.f('calc_study_s2') }
    ]
  },
  a4_final_good: {
    enter: g => { g.flag('calc_final', 'good'); g.grade('calc', 9); },
    text: `You set it up. You solve it. Every problem, all the way through, with forty minutes left that you spend checking.

When you hand in the blue book, the TA glances at it and does a small double take at your name, because she\'s seen your name on a lot of quizzes, and none of them looked like this.

**MATH 1041 final: 88. Course grade: B.**

You walk out onto Liacouras Walk into the cold, and the sky is very blue, and you think: *Femi, I set it up first.*`,
    next: 'a4_roof'
  },
  a4_final_bad: {
    enter: g => { g.flag('calc_final', 'bad'); g.grade('calc', -2); },
    text: `You set it up. You get halfway through solving it, and then your hand starts to shake, a fine tremor you\'ve never had, and the numbers swim, and you lose twenty minutes staring at the farmer\'s fence.

You finish. Barely.

**MATH 1041 final: 69. Course grade: C.**

It\'s a pass. It\'s a C in Calculus at Temple University, and in August that would have been the best thing that ever happened to a Kearney.

You look at your hand on Liacouras Walk. It\'s stopped shaking.`,
    next: 'a4_roof'
  },

  a4_roof: {
    night: true,
    loc: 'CARDONE HALL · ROOF',
    clock: { day: 'Fri', date: 'Dec 18', time: '11:40 PM' },
    enter: g => { g.sleep(7); },
    text: g => `The last night before break. Everybody\'s gone but you and Jules. Her car comes at nine in the morning. Your Pop is picking you up at ten.

It\'s snowing on the roof of Cardone Hall. Real snow this time, the kind that sticks, big wet flakes coming out of an orange sky and piling up on the parapet.

She\'s standing at the parapet where she stood in September, in the camel coat with the dart hole, with snow in her hair.

You stand next to her. Down on Broad, the snow is coming down in the streetlights, and a SEPTA bus goes by, slow, and nobody\'s on it.

jules: My grandmother called again tonight.

sam: The dramatic one.

jules: She\'s never dramatic. That\'s what\'s frightening. She said, *Child, when you come home, we\'ll go to the chapel. It\'s time you knew what you are.*

She laughs, very small.

jules: *What* I am. Not who. What.

She puts her hand on the parapet in the snow.

jules: Do you ever feel like something\'s been watching you your whole life? Not a person. Something that\'s pleased with you.

You think about the bus. The cold. The man on the steps with his finger to his lips.

You think about a card in your own handwriting: *Don\'t trust the lucky one.*`,
    choices: [
      { text: '"Yeah. All the time." Tell her that much. Nothing more.', tag: 'Yeah',
        fx: g => { g.flag('roof_s2e1', 'yeah'); g.bond('jules', { trust: 1 }); }, go: 'a4_roof_yeah' },
      { text: 'Don\'t answer. Kiss her in the snow. Let the watching thing watch.', tag: 'Kiss her',
        fx: g => { g.flag('roof_s2e1', 'kiss'); }, go: 'a4_roof_kiss' },
      { text: '"Jules. Whatever she tells you in that chapel. Call me after. Whatever time it is."', tag: 'Call me',
        fx: g => { g.flag('roof_s2e1', 'call'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_roof_call' }
    ]
  },
  a4_roof_yeah: {
    text: `sam: Yeah. All the time.

She turns and looks at you. Snow in her eyelashes.

jules: Really.

sam: Really.

She looks at you. You can see her wanting to ask the next question. You can see her not asking it. *January.* A deal is a deal.

She takes your hand on the parapet in the snow. She flinches, just slightly, at how cold your hand is. She doesn\'t let go.

jules: Then at least it\'s not just me.`,
    next: 'tag_bruno'
  },
  a4_roof_kiss: {
    text: `You don\'t answer. You kiss her.

In the snow, on the roof, with the flakes landing on both of you, and her hands cold on your face, and the city orange and quiet below you, and nobody down there needing anything.

When you pull back, she has snow in her eyelashes. She doesn\'t brush it away.

jules: That isn\'t an answer.

sam: January.

jules: January.

She puts her forehead against yours.

jules: If something is watching, Kearney, I hope it enjoyed that. I hope it got its money\'s worth.`,
    next: 'tag_bruno'
  },
  a4_roof_call: {
    enter: g => { g.know('jules_chapel_call', ['sam', 'jules'], 'Jules promised to call you after Constance takes her to the chapel at Ravenscourt. Whatever time it is.'); },
    text: `sam: Jules. Whatever she tells you in that chapel. Call me after. Whatever time it is. Three in the morning, I don\'t care.

She looks at you. Something in her face goes very still.

jules: Why would it be something I\'d need to call you about?

sam: Because she said *what*. Not who.

She doesn\'t answer for a while. Snow lands on both of you.

jules: Okay. I\'ll call. Whatever time it is.

She takes your hand on the parapet.

jules: And you\'ll pick up.

sam: I always pick up.

jules: You never pick up, Kearney. You\'re the worst person I know at picking up.

sam: I\'ll pick up for you.

She squeezes your hand once, hard.`,
    next: 'tag_bruno'
  },

  /* ================= TAG ================= */
  tag_bruno: {
    card: { kind: 'tag' },
    night: true,
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    clock: { time: '11:58 PM' },
    text: g => `> THE CAMERA.

The Circolo Sant\'Agata, after midnight. The briscola tables are empty. The soccer game on the TV is a rerun. The espresso machine ticks as it cools.

Bruno Iannucci sits at his back table alone with a demitasse and the last of his sister\'s pizzelles.

The bell over the door rings.

A man comes in out of the snow in a dark overcoat, with snow on his shoulders, and takes off his gloves, and stands by the door looking at the pressed-tin ceiling like a tourist in a church.

BRUNO: We\'re closed.

BRANNIGAN: I know. I\'m sorry. I won\'t keep you.

He walks down the long room between the card tables. He doesn\'t sit until Bruno gestures at the chair. Then he sits.

BRANNIGAN: My name is Cole Brannigan. I work for Halcyon Dynamics.

BRUNO: I know who you work for.

BRANNIGAN: Then I won\'t waste your time. You have something of ours. ${g.f('teddy_taken10') ? 'A young woman with a remarkable voice.' : 'A young man named Kowal.'} And, as of Saturday, I believe, another. A young man from Mifflin Street.

Bruno breaks a pizzelle in half.

BRUNO: I don\'t have anything of yours, Mr. Brannigan. I have employees. They\'re citizens of South Philadelphia. They come and go as they please.

BRANNIGAN: Of course.

He looks at the pizzelles.

BRANNIGAN: Mr. Iannucci. You\'ve been in business in this city for fifty years. I\'ve been in business in this city for six months. I would very much like to learn from you. I would like us to have an *understanding*. I hear you\'re very good at those.

Bruno studies him.

BRUNO: Have a pizzelle, Mr. Brannigan.

Brannigan takes one. He eats it. He says it\'s very good.

Neither of them says another word. They sit across from each other in the empty club with the snow coming down outside on Passyunk, two men who make arrangements, finishing the pizzelles.

> ELSEWHERE.

Gladwyne. Ravenscourt. The family chapel no one enters, at the end of a snowy path, with a light on in it.

Inside, at the altar, an old woman in a fur coat, tomorrow\'s cigarette unlit between two fingers, rolls an ivory die on the stone.

Six.

CONSTANCE: Come home, child. It\'s time.`,
    end: true
  }
});

Object.assign(EH.episodes.s02e01, {
  polls: [
    { q: 'What the fall made you', opts: [
      { label: 'Body', pct: 14, if: g => g.f('s2_attr') === 'body' },
      { label: 'Reflex', pct: 22, if: g => g.f('s2_attr') === 'reflex' },
      { label: 'Wits', pct: 27, if: g => g.f('s2_attr') === 'wits' },
      { label: 'Heart', pct: 21, if: g => g.f('s2_attr') === 'heart' },
      { label: 'Nerve', pct: 16, if: g => g.f('s2_attr') === 'nerve' }
    ] },
    { q: 'Bruno\'s card, at the kitchen table', opts: [
      { label: 'Gave it to Pop', pct: 34, if: g => g.f('card_s2') === 'gave' },
      { label: 'Kept it', pct: 39, if: g => g.f('card_s2') === 'kept' },
      { label: 'Told Pop everything', pct: 27, if: g => g.f('card_s2') === 'told' }
    ] },
    { q: 'Szymanski\'s, 2 a.m.', opts: [
      { label: 'Let Eddie go', pct: 45, if: g => g.f('job1') === 'mercy' },
      { label: 'Let Teddy do the job', pct: 21, if: g => g.f('job1') === 'watched' },
      { label: 'Paid it yourself', pct: 34, if: g => g.f('job1') === 'paid' }
    ] }
  ],
  onEnd: g => {
    g.recap('After the Parkway, you have a white hair. Grace says in places your body is thirty.');
    g.recap('Bruno Iannucci paid for Teddy\'s mother\'s transplant evaluation. Teddy works for him now.');
    g.recap('You work for him too. ' + ({ ten: 'Ten jobs', five: 'Five jobs', eight: 'Eight jobs', twelve: 'Twelve jobs', forced: 'Ten jobs' }[g.f('bruno_deal')] || 'Ten jobs') + ' to clear Pop\'s debt.');
    g.recap('Jules: "When I come back. In January. I ask, you answer."');
    g.recap('Brannigan sat down with Bruno Iannucci and asked for an understanding.');
  }
});
