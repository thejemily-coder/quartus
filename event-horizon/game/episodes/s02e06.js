/* S2 · E6 · WHAT IF IT WAS, part 1 of 4: meta, cold open, Act One ("Ninety"). */
EH.episode({
  id: 's02e06', season: 2, number: 6, title: 'What If It Was', look: 's2',
  cast: ['sam', 'jules', 'nik', 'bree', 'simone', 'rosa', 'vinnie', 'heck'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Teddy Kowal died at the bottom of the dry dock at the Navy Yard. He was twenty.',
    g.f('dock5') === 'luck' ? 'Jules let it all go her way at the dry dock. Teddy slipped on ice nobody saw. She thinks her luck killed him.' : 'In the Slip, the man with your face pushed Teddy off the edge.',
    g.f('promise_halina') ? 'Teddy\'s last words: tell my mother I saved it. You promised.' : 'Teddy\'s last word was "Listen."',
    g.f('bruno5') === 'halcyon' ? 'You told Bruno it was Halcyon. "Then they owe me a boy."' : 'Bruno Iannucci asked you who killed Teddy. You didn\'t tell him.',
    'Jules saw a bed on the eighth floor made up for ES-44.',
    'She asked you to turn off the light. She slept in the dark for the first time in her life.'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'JEFFERSON · GIBBON BUILDING · 11TH FLOOR',
      clock: { day: 'Tue', date: 'Feb 2', time: '7:04 AM' },
      text: `> THE CAMERA.

The transplant clinic at Jefferson at seven in the morning is a waiting room with a view of the Delaware and a television nobody watches, tuned to a channel about houses.

Halina Kowal sits by the window in a black coat with her purse on her knees and her rosary in her coat pocket, where she can hold it without anybody seeing. She\'s the only one here. She\'s always the only one here at seven. Theodore used to drive her. Theodore always said, *Seven, Mama, so we beat the traffic.* There was never any traffic. He just liked the drive.

The elevator opens.

An old man comes out, slowly, with a cane, in a camel overcoat and a white scarf, carrying two coffees in a cardboard tray and a paper bag from a bakery on Passyunk.

He sits down in the chair next to her. He doesn\'t ask. He sets one coffee on the little table between them, turned so the handle faces her.

BRUNO: Light, two sugars. Teodoro told me once.

HALINA: Mr. Iannucci.

BRUNO: Bruno. Please. We buried a boy together.

He opens the bag. Two sfogliatelle. He puts one on a napkin in front of her.

They sit and watch the river.

BRUNO: Dr. Feingold. Your surgeon. Third floor of this building, the corner office, the one with the orchids. His daughter was married at the Bellevue in October. Lovely wedding. I sent a gift.

Halina doesn\'t say anything.

BRUNO: The list is a terrible thing, Halina. You know how long the list is? Five years, in this city, for a kidney. Five years of that machine in your living room. Teodoro didn\'t want you to wait five years.

He breaks his pastry in half. The crumbs go everywhere. He doesn\'t notice.

BRUNO: I don\'t want you to wait five years either.

HALINA: And what does it cost.

BRUNO: Cost? Nothing. You\'re family now. Brianna, too. Such a talented girl. Teodoro told me what she can do with her voice.

He pats her hand, the one holding the purse.

BRUNO: We\'ll talk. Eat your sfogliatella.

The nurse calls her name. Halina stands up. She doesn\'t touch the coffee.

When she\'s gone, Bruno sits by the window alone and eats his pastry and watches a barge go down the Delaware toward the Navy Yard, taking its time.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_ninety' },

    /* ================= ACT ONE: NINETY ================= */
    a1_ninety: {
      card: { kind: 'act', label: 'Act One', title: 'Ninety' },
      night: true,
      loc: 'CARDONE HALL · 9-14',
      clock: { day: 'Mon', date: 'Feb 8', time: '3:12 AM' },
      enter: g => { g.sleep(5); },
      text: g => `Three-twelve in the morning.

You\'re sitting on the floor of 9-14 with your back against the radiator and your phone against your ear.

*It\'s Teddy. Leave it.*

Beep.

You don\'t leave it. You never leave it. You hang up and listen to the radiator tick. Then you call again.

*It\'s Teddy. Leave it.*

Seventeen nights. Somebody\'s still paying his phone bill. Bree, probably. Or Bruno.

In your bed, in the dark, Jules is asleep. She\'s been here most nights since the funeral. ${g.f('light_off5') ? 'The lamp is off. It\'s been off every night. She sleeps on her side with one fist full of your sheet, like she\'s holding onto the edge of something.' : ''} Across the room, Nik\'s bed is empty. He\'s been sleeping at the library. He says it\'s for midterms. It isn\'t for midterms.

You count. You don\'t decide to. You haven\'t been able to stop. Every time it\'s quiet, you count to ninety, the way you counted on the bottom step, kneeling on the granite, with the ring in the water.

You get to ninety.

Nothing happens. Nothing lets go. That\'s the thing about ninety. In real life, nothing lets go.

jules: *(from the bed, not opening her eyes)* You\'re counting again.

sam: Sorry.

jules: Don\'t be sorry. Count out loud. I\'ll count with you.

So you do. Sitting on the floor, in the dark, at three in the morning, the two of you counting to ninety, out loud, in a whisper, like kids counting for hide-and-seek. She falls asleep again at sixty-one. You finish.

> MONDAY.

In the morning, she\'s already gone. She left a note on your desk in her precise handwriting, on an index card, because she always has index cards:

*Orgo quiz at 9. I\'m going to take it straight. No luck. Wish me badly. —J.*

She\'s been doing that for two weeks. Holding her breath through everything. Every quiz, every crosswalk, every coin flip. Losing on purpose. ${g.hv('jules_debt') >= 5 ? 'She had a nosebleed in the lounge on Thursday, and another one in the dining hall on Saturday, and she says it\'s the dry air.' : 'She says it\'s getting easier.'}

It isn\'t getting easier. You can see it in her shoulders.

It\'s Valentine\'s week. The ninth floor has hung a single pink paper heart on the lounge door, and somebody has already written *GRIEF IS A SOCIAL CONSTRUCT* on it in Sharpie. You suspect Devontae.

You have three days before anything else happens. You can feel it coming, the way you feel 11:51.`,
      hub: {
        slots: 2, label: 'Valentine\'s week',
        blurb: 'Two things before Wednesday.',
        options: [
          { id: 'v6_nik', text: 'Nik. He hasn\'t slept in his own bed since the funeral. Go find him at the library and find out why.', cost: 1, tag: 'Nik', go: 'a1_nik' },
          { id: 'v6_bree', text: 'Bree. Edgemont Street. You haven\'t been back since Saturday morning. You\'re afraid to go. Go.', cost: 1, tag: 'Bree', go: 'a1_bree' },
          { id: 'v6_simone', text: 'Simone. She left a bag of Swedish Fish outside your door the morning after the funeral, with no note. Go thank her.', cost: 1, tag: 'Simone', go: 'a1_simone', if: g => g.f('simone10') !== 'mended' },
          { id: 'v6_ma', text: 'Ma. She\'s called four times. You\'ve answered once. Go home for dinner on Tuesday.', cost: 1, tag: 'Ma', go: 'a1_ma' }
        ],
        done: 'a2_bruno'
      }
    },

    a1_nik: {
      loc: 'PALEY LIBRARY · 3RD FLOOR',
      enter: g => { g.know('man_across_street', ['nik']); g.know('nik_frame', ['sam', 'nik'], 'Nik saved the Navy Yard camera feed from 00:51:04. In one frame, across the dry dock, a gray-haired man with his left hand raised. He\'s in no other frame.'); g.bond('nik', { trust: 1, affection: 1 }); g.hidden('revenant_drift', -0.5); },
      text: g => `He\'s on the third floor of Paley, at a carrel in the back, in the same hoodie he wore to the funeral. He has his laptop open and his headphones on and four empty cans of Celsius lined up on the desk.

He doesn\'t hear you come up. On his screen: grainy black and white. A camera on a light pole. The dry dock.

He\'s watching the same three seconds. Over and over.

sam: Nik.

He jumps a foot. He slams the laptop shut. Then he opens it again, slowly, because it\'s you.

nik: I didn\'t delete it. I should\'ve deleted it. I recorded everything that night, bro, I hit record on all four feeds the second you said *Broad and Intrepid*, it\'s like a reflex, it\'s what you do in a raid, you *record*, and then afterward I couldn\'t—

He stops.

nik: I\'ve watched it four hundred times.

You sit down on the floor next to the carrel.

nik: Not him falling. I can\'t watch that part. I watch the frame *before*.

He turns the laptop around.

*00:51:04.*

Teddy on the lip of the dock. The truck\'s spotlight. The darts, little white streaks. And across the dry dock, on the far side, under the light: a man. Long coat. Gray hair. One hand raised, like he\'s waving to somebody in a window.

One frame. Nik clicks forward. Gone. Back. There.

nik: He\'s in one frame. One. Thirty-three milliseconds. He\'s not in the frame before and he\'s not in the frame after, and I checked the other three cameras and he\'s not on those either. Bro, a person can\'t be in one frame. That\'s not how *frames* work.

He zooms in. It goes to mush. A smear of gray. But the hand, raised, the fingers spread, and between them, where there should be four gaps, there are three.

nik: Who is he.

You look at the frame. Nik looks at you looking at it.

You tell him. The man across Broad Street in the rain. The one with your face. The finger to his lips.

Nik listens to the whole thing with his hands over his mouth.

nik: Okay. Okay. So, I want to say something, and I want you to know I\'m saying it as your friend and as a man who has seen every episode of *Doctor Who* including the bad years.

nik: That\'s you, Salvatore.

sam: You don\'t know that.

nik: I know you stand like that. I know you wave like that. You wave like a guy at a window. You did it to Grace across the lounge last week. I have it on my phone. Don\'t ask why I have it on my phone.

He closes the laptop. He looks at you, his eyes red, four Celsiuses deep.

nik: And he was there. When Teddy fell. He was *there*.

sam: Yeah.

nik: Then it wasn\'t ice. It wasn\'t *nobody*. Bro. Jules was right there. You have to tell Jules.

sam: ${g.knows('revenant_push', 'jules') ? 'I did. I told her everything I saw. She said that\'s worse. She said a stranger she could have hated.' : 'I did. I told her I saw someone. She said that\'s worse. She said now she doesn\'t even get to know.'}

Nik thinks about that.

nik: Yeah. Yeah, that\'s worse.

He puts his head down on the desk on his folded arms.

nik: Can I come home now? I hate the library. The library is full of people who are *studying*.

sam: Come home, Nik.`,
      next: '@hub'
    },

    a1_bree: {
      loc: 'EDGEMONT STREET · PORT RICHMOND',
      enter: g => { g.know('bruno_jefferson', ['sam', 'bree'], 'Bree: Bruno Iannucci sat with Halina at Jefferson and told her he knows her surgeon. "Five years on the list. I don\'t want you to wait five years." He asked about Bree\'s voice.'); g.bond('bree', { trust: 2, affection: 1 }); },
      text: g => `The plaster Virgin Mary in the front yard has a new scarf. Black. Somebody knitted it this week.

Bree opens the door before you knock. She always does. She looks at you for a long moment and then lets you in without a word.

The house is quiet. The machine hums in the living room. Halina is asleep in the recliner under her crocheted blanket. There\'s a framed photo of Teddy on top of the television, his high school graduation from Northeast, in a cap and gown, not smiling, the way he never smiled in photos.

Next to it, on a doily, his phone. Plugged in. Charging.

bree: Kitchen.

You sit at the kitchen table. She puts a mug of tea in front of you that you don\'t want.

bree: People still text him. Did you know that? Guys from Bruno\'s. *T where u at.* A girl from CCP he dated for like a week in 2024. The GoFundMe sends him updates. *Your campaign has 19 supporters!* Every Monday.

She sits down across from you.

bree: I keep it charged. I don\'t know why. I think if it dies, he\'s more dead.

bree: Somebody calls it. Every night. Three, three-thirty. It rings on the doily and I let it go to him. *It\'s Teddy. Leave it.*

She looks at you.

bree: I figured it was you. Nobody else is up.

Her voice is her own. Hoarse still, a little, like she\'s getting over a cold. She hasn\'t used anybody else\'s since the dry dock. You notice. She sees you notice.

bree: I don\'t do the voices anymore. Not since. Every time I open my mouth I\'m scared it\'ll be his.

The machine hums.

bree: Bruno was at Jefferson. Last Tuesday. With my aunt. He brought coffee. He knows her surgeon. He said she doesn\'t have to wait five years.

She turns her mug around and around.

bree: And then he asked about me. About my *voice*. What I can do with it.

bree: Wawa, I know what that is. I\'ve seen that movie. He\'s gonna get her a kidney, and then he\'s gonna own me, the way he owned Teddy, and I\'m gonna say yes. I\'m gonna say yes because it\'s her.

She looks at you.

bree: Did he say anything about me? At the end? Teddy.`,
      choices: [
        { text: '"He said he was in it for you. Both of you. He said *tell her I saved it.*" It\'s close enough to true.', tag: 'Close enough',
          fx: g => { g.flag('bree6', 'close'); g.bond('bree', { affection: 1 }); }, go: 'a1_bree_end' },
        { text: 'The truth. "He didn\'t. He talked about your aunt. He talked about the money. Then he said *listen*, and that was all."', tag: 'The truth',
          fx: g => { g.flag('bree6', 'truth'); g.bond('bree', { trust: 2, respect: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_bree_end' }
      ]
    },
    a1_bree_end: {
      loc: 'EDGEMONT STREET · PORT RICHMOND',
      text: g => `${g.f('bree6') === 'truth' ? `sam: He didn\'t. He talked about your aunt. The money. He made me promise something about the deposit. And then he said *listen*. And that was all.

Bree nods slowly.

bree: Yeah. That\'s him. That\'s exactly him. Twenty years, and his last word is an instruction.

She laughs. It cracks in half.

bree: Thanks for not making it pretty. Everybody\'s making it pretty. Father Wojcik made it *so* pretty.` : `sam: He said he was doing it for you. Both of you. He said *tell her I saved it.*

Bree looks at you a long time, the way she looks at people whose voices she\'s memorizing.

bree: You touch your ear when you lie. Did you know that?

sam: I\'ve been told.

bree: It\'s okay. It\'s a nice one. I\'ll keep it.`}

She takes Teddy\'s phone off the doily and holds it in her lap.

bree: I can\'t let Bruno have her, Wawa. And I can\'t let her die on that machine. Tell me there\'s a third thing. You always find a third thing. Tell me there\'s a third thing.

You don\'t have one. You sit there in the kitchen not having one.

bree: Yeah. That\'s what I thought.`,
      next: '@hub'
    },

    a1_simone: {
      loc: 'CARDONE HALL · 9-04',
      text: `Simone\'s door is open. It\'s always open. She\'s on her bed in a sea of sequins and sheet music, with a highlighter in her mouth.

*Mummers: The Musical* opens in five weeks. She has eleven songs to learn and has described every one of them to the whole floor as *a crime against the Commonwealth of Pennsylvania*.

You knock on the doorframe.

sam: Thanks for the Swedish Fish.

She takes the highlighter out of her mouth.

simone: I didn\'t know what you eat when somebody dies. My grandmother says pound cake. I couldn\'t find pound cake at the Wawa at seven in the morning. I found Swedish Fish.

sam: They were good.

simone: They\'re terrible. Sit down, Salvatore.

You sit on the end of her bed. Sequins stick to your jeans.

simone: Somebody died. Somebody I never heard of. And you came back from that funeral looking like you\'d been dug up, and Juliet came back looking like she\'d done the digging, and the two of you have been walking around this floor for two weeks like a pair of ghosts holding hands.

simone: I\'m not asking what happened. I learned. You won\'t tell me, and she\'ll lie beautifully, and I\'ll lie awake.

She caps the highlighter.

simone: I\'m asking who he was. That\'s all. Just tell me who he was. Somebody who didn\'t know him should know who he was.`,
      choices: [
        { text: 'Tell her who he was. Not what. Who. "His name was Teddy. He was twenty. He was from Port Richmond. He took care of his mother."', tag: 'Who he was',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Tell Simone who Teddy was', on: { strong: 'a1_simone_yes', weak: 'a1_simone_yes', miss: 'a1_simone_weak' } } },
        { text: '"I can\'t, Simone." And mean it as kindly as it can be meant.', tag: 'I can\'t',
          fx: g => { g.flag('simone6', 'cant'); }, go: 'a1_simone_cant' }
      ]
    },
    a1_simone_yes: {
      enter: g => { g.flag('simone6', 'told'); g.flag('simone10', 'mended'); g.bond('simone', { trust: 3, respect: 2, affection: 1 }); g.hidden('revenant_drift', -0.5); g.know('teddy_simone', ['sam', 'simone'], 'You told Simone who Teddy Kowal was. Not what happened. Who he was.'); },
      text: `sam: His name was Teddy. Teddy Kowal. He was twenty. He was from Port Richmond. His mother\'s on dialysis, and he drove her to every appointment and never once let her take the bus. He didn\'t talk. He said *listen* before everything, like you weren\'t going to, and then he\'d say the smartest thing anybody said all day.

You stop. Then you don\'t.

sam: He saved my life once. And I saved his. And it didn\'t count, in the end. It didn\'t count for anything.

Simone doesn\'t say anything. She reaches over and takes your hand, sequins and all.

simone: It counted. It counted to *him*. Don\'t do the math on people, Salvatore. That\'s Juliet\'s job, and she\'s bad at it.

She squeezes your hand.

simone: Thank you. That\'s the first true thing you\'ve given me since September. Do you know that?

sam: Yeah.

simone: I\'ll take it. I\'ll take it in sequins.

She pulls a Swedish Fish out of somewhere and hands it to you.

simone: Now get out. I have to learn a song about a man in a feathered hat, and I cannot do it while weeping.`,
      next: '@hub'
    },
    a1_simone_weak: {
      enter: g => { g.flag('simone6', 'tried'); g.bond('simone', { trust: 1 }); },
      text: `sam: His name was Teddy. He was twenty. He—

And it stops. It just stops, in your throat, like the second closing. You sit on the end of her bed with your mouth open and nothing coming out of it, and you can\'t, you physically can\'t, and you hate it.

Simone watches you try. She doesn\'t rescue you. She waits. And when it\'s clear nothing else is coming:

simone: Teddy. Twenty.

sam: Yeah.

simone: Okay. That\'s two things. That\'s two more than I had.

She goes back to her sheet music. But she doesn\'t tell you to leave, so you don\'t. You sit on the end of her bed in the sequins while she highlights, and after a while she starts humming the song about the man in the feathered hat, very quietly, and you let her.`,
      next: '@hub'
    },
    a1_simone_cant: {
      text: `sam: I can\'t, Simone.

She looks at you. Then she nods.

simone: Okay.

sam: I\'m sorry.

simone: Don\'t be sorry. Be *alive* in May. You said that to me once. Or you meant to. I\'m holding you to it.

She goes back to her sheet music. You go.`,
      next: '@hub'
    },

    a1_ma: {
      loc: 'MIFFLIN STREET',
      clock: { day: 'Tue', date: 'Feb 9', time: '6:30 PM' },
      enter: g => { g.bond('rosa', { affection: 2 }); g.hidden('revenant_drift', -0.5); },
      text: g => `Tuesday is meatball night. Tuesday has always been meatball night.

Ma opens the door before you get to it. DiNardo timing. *I knew you\'d come.* She takes your face in both hands and looks at it, hard, the way she looks at a kid in her nurse\'s office who says he fell off the monkey bars.

ROSA: You\'re not sleeping.

sam: I\'m sleeping.

ROSA: You\'re not *eating*.

sam: I\'m here, aren\'t I?

She lets go of your face and swats you on the back of the head, lightly, and lets you in.

Dinner. Gigi talks for forty minutes about a girl in her class named Ava who is *literally the worst person alive*. Pop eats in silence and then, without looking up, puts the last meatball on your plate. Nonna watches you over her glasses from the end of the table and doesn\'t eat.

After, Ma washes and you dry, the way it\'s been since you were eight.

ROSA: There was a boy who died at the Navy Yard. It was in the Daily News. Port Richmond boy. Twenty years old. Fell in the dry dock.

You dry a plate. You keep drying it.

ROSA: Mikey said it at Sunday dinner. You weren\'t at Sunday dinner. Mikey said it, and then he looked at his plate, and he didn\'t look up again. That\'s how I knew.

She hands you a glass.

ROSA: Salvatore. Did you know that boy?

The water running. Nonna in the next room with the TV on, *Jeopardy*, too loud. The window over the sink, black, with your face in it and your mother\'s face beside it.

You have white in your hair. She\'s been looking at it all night.`,
      choices: [
        { text: '"Yeah, Ma. I knew him." And nothing else. Let her have that much of the truth.', tag: 'I knew him',
          fx: g => { g.flag('ma6', 'knew'); g.heat('rosa', 1); g.bond('rosa', { trust: 2 }); }, go: 'a1_ma_end' },
        { text: '"No, Ma." Dry the glass. Put it away.', tag: 'No',
          fx: g => { g.flag('ma6', 'lied'); g.heat('rosa', 1); g.bond('rosa', { trust: -1 }); }, go: 'a1_ma_end' }
      ]
    },
    a1_ma_end: {
      loc: 'MIFFLIN STREET',
      text: g => `${g.f('ma6') === 'knew' ? `sam: Yeah, Ma. I knew him.

She doesn\'t ask anything else. She turns the water off. She dries her hands on the dish towel over her shoulder, and she puts her arms around you, standing at the sink, the way she hasn\'t since you were maybe twelve, and holds on.

ROSA: Okay. Okay.

She\'s shaking. A little.

ROSA: I\'m going to light a candle for him at St. Monica\'s. What was his name?

sam: Teddy.

ROSA: Teddy.

She holds on through the whole rest of *Jeopardy*. When she does let go, she wipes her eyes with the back of her wrist, and looks at the white in your hair, and doesn\'t say anything about it. Yet.` : `sam: No, Ma.

You dry the glass. You put it away.

She looks at you. She looks at the white in your hair.

ROSA: Okay.

She turns the water back on. She washes the pot. She doesn\'t say anything else.

On your way out, Nonna catches your wrist at the door with her small dry hand.

NONNA: Stunad. Your mother is a DiNardo, Salvatò. She knows when the clocks stop. She has always known. You think you can lie to a woman who knew you were coming before you left the train?

She lets go.

NONNA: Soon. Soon she asks you a question you can\'t answer with *no*. Be ready.`}`,
      next: '@hub'
    }
  }
});
