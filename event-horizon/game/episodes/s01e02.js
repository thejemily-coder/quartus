/* S1 · E2 · FRAME RATE, part 1 of 3: meta, cold open, Act One ("Recitation"). */
EH.episode({
  id: 's01e02', season: 1, number: 2, title: 'Frame Rate', look: 's1',
  cast: ['sam', 'jules', 'nik', 'simone', 'vinnie', 'grace', 'rosa', 'frank', 'nonna', 'mikey', 'gigi'],
  start: 'cold_open',
  xp: 4,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'CARDONE HALL · ROOM 9-14',
      clock: { day: 'Tue', date: 'Aug 25', time: '7:52 AM' },
      enter: g => { g.sleep(6); g.know('ear_tell', ['nik']); g.know('wawa_guy', ['nik']); },
      text: g => `There's blood on your pillow.

Not a lot. A rust-colored blot the size of a quarter, already dry, right where your face was. You lie there and look at it for a while. Your nose feels like it's full of pennies. Your phone is face down on the floor, vibrating against the tile in short, furious bursts, like something trying to get out.

You turn it over. **214 notifications.**

The Wawa video has 1.4 million views. Somebody has slowed it to a crawl and set it to the *Inception* horn. Somebody else has frame-by-framed it and circled the blur in red, and the blur, in a pizza shirt, is the most-watched nine seconds in Philadelphia. Barstool has it. A Sixers beat reporter has quote-tweeted it with *"we need this guy at the four."*

And there's a push alert from the Inquirer, under a byline you know from the lounge TV last night:

> WAWA GUY, A BUS, AND A "COLD MAN": IS SOMEONE SAVING PEOPLE ON BROAD STREET? · by Dana Fiorillo

The story's got a photo of the bus at Spring Garden, nose-first in the side of a white van. It's got a quote from an eight-year-old named Jayden, through his aunt: *"He was cold. Like ice cream."* And it's got a line near the bottom that makes your stomach turn over: *His grandmother, Carmen Torres, 67, remains at Temple University Hospital following surgery for a fractured hip.*

You never went. You meant to. You didn't.

Then you realize you're not alone in being awake.

Nik is sitting cross-legged on his bed in the same taco boxers, laptop open, glasses on, looking at you. He doesn't look like he slept either. On his screen, side by side: one frame of the Wawa blur, blown up so big it's just squares, and a photo he took, very obviously, about an hour ago, of your Ciro's shirt hanging on the back of your desk chair.

The colors match. The cracked white logo matches. Even the ketchup stain on the left hip matches, square for square.

nik: So I did a thing.

sam: Nik.

nik: I didn't *mean* to do a thing. I was just watching it, like everybody, and then I was watching it at quarter speed, and then I was watching it at, like, one frame at a time, and then I thought, huh, that guy's shirt has a ketchup stain on the left hip, and then I thought, *huh*, and then it was four in the morning.

He pushes up his glasses. His hand is shaking.

nik: You lied to me Sunday. You touched your ear. My phone was *falling*, Salvatore. And then you were holding it. And I said *okay*, because I'm a coward, and I've been saying *okay* to myself for two days, and I can't anymore.

He closes the laptop very carefully, like closing it wrong might break something.

nik: I'm not mad. Okay, I'm a little mad. I'm mostly scared. I don't know if I'm scared *of* you or *for* you, and I hate that I don't know.`,
      choices: [
        { text: 'Tell him. All of it. The light, the bus, the cold, the kid. Carmen. Everything.', tag: 'Come clean',
          fx: g => { g.flag('nik_told2', 'told'); g.know('sam_slip', ['nik']); g.know('halcyon_aperture', ['nik']); g.know('first_rewind', ['nik']); g.heat('nik', -3); g.bond('nik', { trust: 3, affection: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'cold_tell' },
        { text: 'Lie again. Make it good this time. "It\'s a Ciro\'s shirt, Nik. There are, like, forty of us."',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['nik'], label: 'Lie to Nik, again', on: { strong: 'cold_lie_strong', weak: 'cold_lie_weak', miss: 'cold_lie_miss' } },
          fx: g => g.flag('nik_told2', 'lied') },
        { text: '"I can\'t. Not yet. Give me a week. I won\'t lie to you again. I just can\'t tell you yet."', tag: 'A promise',
          fx: g => { g.flag('nik_told2', 'week'); g.bond('nik', { trust: 1, tension: 1 }); g.know('nik_week', ['sam', 'nik'], 'You promised Nik: no more lies. You\'ll tell him within a week.'); }, go: 'cold_week' }
      ]
    },
    cold_tell: {
      enter: g => g.recap('You told Nik everything. He wants to be your guy in the chair.'),
      text: `You sit up. You put your feet on the floor. And you tell him, in order, everything: the order slip, the APERTURE screen, the light, the rain that didn't fall, the cold. The boy. The bus. The world tearing down the middle and the voice that sounded like you saying *No. Again.* Failing anyway. Carmen in the street, praying in Spanish. The sprinklers at Geasey. The Shorti.

It takes twenty minutes. Nik doesn't interrupt once. You've known him five days, and you didn't know he could do that.

When you're finished, he takes off his glasses, cleans them on the taco boxers, and puts them back on.

nik: Okay. So. First: thank you. Second: my hands are doing a thing, ignore the hands. Third—

He opens the laptop again and turns it around. It's a Google Doc. It has a title, and the title is **SAM (???)**, and it's already eleven pages long.

nik: I started it Sunday night. I didn't know what it was about yet. I just knew it was about you.

He scrolls. Frame counts. Timestamps. A sketch map of Broad Street. A section titled **NOSEBLEEDS** with three dates.

nik: You need a guy, bro. Every single one of these, there's a guy. In a chair. With computers. And I know how that sounds. I know I'm the Ned in this. I'm aware. I've made peace with being the Ned. But I'm good at this. I'm *so* good at this. Please let me be your guy.

His eyes are wet. He means every word.`,
      choices: [
        { text: '"Yeah. You\'re my guy, Nik."', fx: g => { g.bond('nik', { affection: 2 }); g.flag('nik_guy'); }, go: 'titles' },
        { text: '"This isn\'t a comic, man. A woman\'s in the hospital because I wasn\'t fast enough." (But let him in.)', fx: g => { g.bond('nik', { respect: 2, tension: 1 }); g.flag('nik_guy', 'reluctant'); }, go: 'titles' }
      ]
    },
    cold_lie_strong: {
      enter: g => g.bond('nik', { trust: -1 }),
      text: `sam: It's a Ciro's shirt, Nik. There are, like, forty of us. Ciro buys them in bulk from a guy in Jersey. Ketchup is the house style.

You say it lightly, with a yawn and a stretch, and you keep both hands on the mattress where you can see them.

Nik looks at you. At the screen. At you. Then he nods, slowly, and closes the laptop.

nik: Yeah. Okay. Forty of you.

He believes you. Or he's decided to, which is worse, because you watch him do it. You watch him take the thing he knows and fold it up small and put it somewhere inside himself where it's going to sit and hurt.

nik: I'm gonna go to breakfast.

He goes to breakfast. He doesn't ask if you want to come.`,
      next: 'titles'
    },
    cold_lie_weak: {
      enter: g => g.bond('nik', { trust: -2 }),
      text: `sam: It's a Ciro's shirt, Nik. There are, like, forty of us—

nik: There are eleven. I called. I said I was from the Health Department.

Silence.

sam: You called Ciro and said you were from the Health Department?

nik: He hung up on me. Twice. But the first time he said "eleven guys, eleven shirts, all of them idiots."

He looks at you. You keep your hands still. You keep everything still.

nik: Okay.

He says it the way he said it Sunday: like a door closing very quietly so nobody wakes up. Then he puts on his headphones and turns to his monitors, and he doesn't take them off until you leave.`,
      next: 'titles'
    },
    cold_lie_miss: {
      enter: g => { g.bond('nik', { trust: -3, affection: -1 }); g.flag('nik_hurt'); },
      text: `sam: It's a Ciro's shirt, Nik. There are, like, forty—

nik: Your hand.

It's on your ear. Of course it is.

Nik closes the laptop. He gets up. He puts on his shoes without socks, which is something you'll learn he's never done in his life.

nik: I made you a Google Doc. Did you know that? Sunday night. It's eleven pages. It's got a section for nosebleeds. I was going to show you. I was going to be, like, your guy.

He picks up his backpack.

nik: I'm going to the library. I'm going to stay at the library. Don't text me. Actually, text me if you're dying. Only if you're dying.

The door closes. Not a slam. Nik doesn't slam doors. Somehow that's the part that gets you.`,
      next: 'titles'
    },
    cold_week: {
      text: `He thinks about it. You can see him weighing it, actually weighing it, like he's going to write it down later in a spreadsheet.

nik: One week.

sam: One week.

nik: And you don't lie to me. You can *not-tell* me. You can say "I can't tell you that, Nik." But you don't lie. Not once. Not about anything. If you lie to me about whether you ate breakfast, the deal's off.

sam: Deal.

nik: Shake on it.

You do the handshake: the slap, the grip, the snap. He's gotten good at it in five days.

nik: I made you a Google Doc, by the way. It's eleven pages. I'm not going to show it to you yet. That's *my* secret. We're even.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_recitation' },

    /* ================= ACT ONE: RECITATION ================= */
    a1_recitation: {
      card: { kind: 'act', label: 'Act One', title: 'Recitation' },
      loc: 'WACHMAN HALL · ROOM 413 · MATH 1041 RECITATION',
      clock: { time: '2:00 PM' },
      enter: g => { g.meet('femi'); },
      text: g => `Calc recitation is twenty-four freshmen in a room with no windows and a radiator that came on in August as a joke. The professor isn't here. The professor is never here. Recitation is run by a "learning assistant," and the learning assistant is standing at the whiteboard saying "Okay, everyone" for the third time, and nobody is listening.

It's not that they're ignoring him. It's stranger than that. Their eyes go past him. A girl in the front row looks right at the place where he's standing and then down at her phone like she's checked an empty chair. Two guys are having a loud conversation about fantasy football *through* him.

He's maybe twenty, Black, round glasses, a paperback of *The Wealth of Nations* sticking out of his back pocket. He says, a fourth time, with the deep, practiced patience of a man who's been doing this for days:

LEARNING ASSISTANT: Okay. Everyone.

And you hear him. Clearly. Like he's the only thing in the room in focus.

You say, before you can stop yourself:

sam: Yeah? Okay?

He looks at you. His whole face changes, like a man who's been shouting into a canyon and just heard a voice shout back.

LEARNING ASSISTANT: …You can hear me.

sam: I mean. You're talking.

LEARNING ASSISTANT: Huh.

He looks at you for a long beat. Then he picks up a marker and writes his name on the board in big block letters (**FEMI OJO · L.A.**), and taps it twice, hard, with the cap. Half the room jumps, like the name appeared out of nowhere.

femi: Great. Now that I exist. Worksheet one. Pairs. I'm counting you off, and you don't get to choose, because when people choose they sit with their friends and learn nothing.

He counts. One, two, one, two, up and down the rows. You're a two. You look across the room to find your one.

Juliet Pemberton is sitting in the back corner by the radiator, in a navy sweater, in August, with a mechanical pencil and an expression of profound resignation, looking right at you.

jules: Of course.

She doesn't move. She waits for you to come to her, and when you do, she slides exactly half the worksheet into the exact center of the desk with one finger.

jules: Your nose.

sam: What about it?

jules: Is it going to happen again? Because this is my good sweater.

${g.f('door') === 'highness' ? 'You almost say *Your Highness*. You can feel it right there in your mouth like a cough drop. You don\'t.' : ''}`,
      choices: [
        { text: 'Let her drive. She clearly knows this. Ask good questions.', tag: 'Teamwork',
          check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, bonus: 3, bonusLabel: 'Jules explains it', label: 'Worksheet 1: limits', on: { crit: 'a1_rec_drive_good', success: 'a1_rec_drive_good', fail: 'a1_rec_drive_bad', fumble: 'a1_rec_drive_bad' } },
          fx: g => { g.flag('rec', 'drive'); g.bond('jules', { respect: 1 }); } },
        { text: 'Do it yourself. You don\'t need a Main Line tutor.', tag: 'Pride',
          check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 14, label: 'Worksheet 1: limits', on: { crit: 'a1_rec_pride_good', success: 'a1_rec_pride_good', fail: 'a1_rec_pride_bad', fumble: 'a1_rec_pride_bad' } },
          fx: g => g.flag('rec', 'pride') },
        { text: 'Forget limits. See if you can make her crack before the end of class.',
          check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', near: ['jules'], label: 'Make her crack', on: { strong: 'a1_rec_banter_strong', weak: 'a1_rec_banter_weak', miss: 'a1_rec_banter_miss' } },
          fx: g => g.flag('rec', 'banter') }
      ]
    },
    a1_rec_drive_good: {
      enter: g => { g.grade('calc', 3); g.bond('jules', { respect: 1 }); },
      text: `It turns out Juliet Pemberton is a terrifyingly good teacher. She doesn't explain things twice. She explains them *once*, differently, from a new angle, until one of the angles lands. *"Don't think about the number. Think about where it's going. A limit isn't a place, it's a direction."*

You get it. You actually get it.

jules: Good.

It comes out like it surprised her. She looks at your worksheet, then at you, like you've done something mildly suspicious.

jules: You're not stupid.

sam: Thanks?

jules: You act stupid. It's a choice. I just wanted you to know I've noticed.`,
      next: 'a1_rec_nose'
    },
    a1_rec_drive_bad: {
      enter: g => { g.grade('calc', 1); },
      text: `She explains it. She explains it again, differently. She explains it a third time, using your pencil and a napkin. You nod. You nod so much. Nothing goes in. Your head feels thick and far away, like there's an inch of cold water between your brain and your skull.

jules: Are you even listening?

sam: Yeah. Direction, not a place.

She stops. Looks at you.

jules: …That's actually the part that matters. You just can't do any of the rest of it.

sam: That's me in a sentence.

She doesn't laugh. But she writes the first two steps of the next problem on your side of the paper, in her small, perfect handwriting, and slides it over without a word.`,
      next: 'a1_rec_nose'
    },
    a1_rec_pride_good: {
      enter: g => { g.grade('calc', 4); g.bond('jules', { respect: 2 }); g.flag('beat_jules_calc'); },
      text: `You pull the worksheet over to your side and put your head down and do it. Nonna's stubbornness and Pop's silence: you're a Kearney, and Kearneys don't ask for directions.

It works. It's ugly, and you erase a hole through the paper on problem three, but it *works*. You finish a minute before she does.

She looks at your page. She checks it against hers. She checks it again.

jules: You did number four differently.

sam: Is it wrong?

jules: No. It's faster.

She says it like it costs her money.`,
      next: 'a1_rec_nose'
    },
    a1_rec_pride_bad: {
      enter: g => { g.grade('calc', -1); g.bond('jules', { tension: 1 }); },
      text: `You pull the worksheet over and put your head down, and for about four minutes you think it's going fine.

It is not going fine.

jules: That's not a limit. That's a phone number.

sam: It's a work in progress.

jules: It's a crime scene.

She takes the paper back, gently, the way you'd take scissors from a toddler, and does the rest herself in about ninety seconds while you watch, and she doesn't say a single word about it, which is so much worse than anything she could have said.`,
      next: 'a1_rec_nose'
    },
    a1_rec_banter_strong: {
      enter: g => { g.bond('jules', { affection: 1, tension: -1 }); g.flag('rec_laugh'); },
      text: `You don't do the worksheet. You lean over and do Femi, in a whisper, standing at the whiteboard saying *"Okay. Everyone."* into the void. Then you do the guy in the front row having a conversation through him. Then you do the radiator.

She holds out for an impressively long time. Then you do Ciro, describing a limit: *"It's a number that gets close to the other number, like a cousin. You don't marry it. You don't even like it. You just go to its wedding."*

And she laughs, out loud, in a recitation. Not a breath through the nose. A real, startled, ugly little *ha* that comes out of her before she can stop it. She claps a hand over her mouth, and her eyes go wide and furious above it.

Femi, at the board, looks directly at you both.

femi: Something funny about limits?

jules: No.

She says it through her fingers, and then she glares at you. The glare is a war crime. Something's happening at the corner of her eyes, though, and it isn't anger.

jules: *I hate that.*

sam: You laughed.

jules: I'm aware I laughed. I was *there*.`,
      next: 'a1_rec_nose'
    },
    a1_rec_banter_weak: {
      enter: g => { g.bond('jules', { tension: 1 }); },
      text: `You do your best Femi impression. You do the radiator. You do Ciro explaining limits like they're cousins at a wedding.

She doesn't laugh. She writes the answer to problem one, very neatly, and slides it into the exact center of the desk.

jules: That one was close.

sam: Close to what?

jules: Working.`,
      next: 'a1_rec_nose'
    },
    a1_rec_banter_miss: {
      enter: g => { g.bond('jules', { respect: -1 }); },
      text: `You lean over to whisper something, and she holds up one finger without looking at you, the way Nonna stops the parish priest mid-sentence.

jules: I am getting an A in this class. If you want to be funny, be funny on someone else's transcript.

That's that. She does the worksheet. You draw a very detailed picture of a minifridge in the margin.`,
      next: 'a1_rec_nose'
    },
    a1_rec_nose: {
      enter: g => { g.know('jules_saw_nose2', ['sam', 'jules'], 'Jules saw you bleed again in recitation, onto her handkerchief.'); },
      text: g => `It happens with ten minutes left.

There's no warning. There's just a warm tickle in your upper lip and then a red drop on the worksheet, *plip*, right on top of problem five, spreading into the paper like a little flower.

You grab the first thing in your pocket. It's white cloth, ironed, with **JLP** in navy thread in the corner.

You realize what it is about half a second after she does.

She stares at her own initials, pressed to your face, going slowly red.

jules: That's mine.

sam: You said keep it.

jules: I didn't say *use* it. I didn't say *use it in front of me*.

You hold it there and lean forward, the way Ma taught you. Not back. Never back. She watches you do it for a long moment, and something in her face shifts. It isn't softer, exactly. It's more *attentive*, like a cat that's just heard something in the wall.

jules: That's three.

sam: Three what?

jules: Saturday, on the curb. Yesterday, in Weisz's class, you had dried blood in your nostril and you thought nobody could see it. Now. Three in four days. My mother would call that a symptom.

sam: Your mother's not here.

jules: My mother is always here.

She says it flatly, not like a joke, and goes back to the worksheet.

Then her pencil rolls off the desk.

You catch it. You don't decide to. It's just *in your hand*, an inch above the floor, and for a fraction of a second the world was thin and slow and cold around the falling pencil, and then it isn't.

She looks at the pencil in your hand. She looks at your hand.

jules: Good hands.

That's all. *Good hands.* But she takes the pencil back without touching your fingers, and for the rest of class you can feel her not looking at you, very precisely.`,
      next: 'a1_femi'
    },

    a1_femi: {
      loc: 'WACHMAN HALL · STAIRWELL',
      clock: { time: '2:52 PM' },
      text: `Femi catches you on the stairs. Or rather, you nearly walk into him, because he's standing in the middle of the landing and three other students have already walked into him and apologized to the wall.

femi: Hey. You. Ciro's.

You're not wearing the shirt. He must see you wonder how he knows, because he taps his nose.

femi: Sauce. On your shoe. I watch. It's sort of all I can do lately.

He looks at you very carefully, the way people look at a step they're not sure will hold.

femi: Can I ask you something weird?

sam: Everything's weird this week.

femi: Since Saturday night, nobody notices me. I don't mean metaphorically. I mean my mother called my sister on Sunday to ask where I was, and I was sitting *at the table*. Professor Okafor walked into me twice in the hallway. I went to the Chinese place on Cecil B. and stood at the counter for nine minutes. Nobody took my order. I could've taken the register. I didn't, I'm a good person, but I *could* have.

He laughs. It's not a happy laugh.

femi: And then you said "Yeah?" in recitation. Like it was nothing. Like you just heard me.

He waits.

femi: Were you in the zone Saturday night? North of Vine?

sam: Were you?

femi: Charles Library. Reshelving econ. 11:51. Every light went out and everything got *cold*, like walking into a freezer, and then the lights came back on and nobody's looked at me since.

The stairwell is quiet. Somewhere below, a door bangs.

femi: You know something. I can tell. I'm not asking you to tell me. I'm asking whether I'm crazy.`,
      choices: [
        { text: '"You\'re not crazy. It happened to me too. Something happened to a lot of people."', tag: 'Tell Femi',
          fx: g => { g.flag('femi_told'); g.know('sam_slip', ['femi']); g.bond('femi', { trust: 3, affection: 2 }); g.know('femi_changed', ['sam', 'femi'], 'Femi Ojo was in the zone at 11:51. Since then, nobody notices him. You can.'); }, go: 'a1_femi_told' },
        { text: '"You\'re not crazy. I don\'t know what it is. But I can see you fine. Here, give me your number."', tag: 'Half',
          fx: g => { g.flag('femi_number'); g.bond('femi', { trust: 2, affection: 1 }); g.know('femi_changed', ['sam', 'femi'], 'Femi Ojo was in the zone at 11:51. Since then, nobody notices him. You can.'); }, go: 'a1_femi_half' },
        { text: '"I don\'t know what you mean, man. I just heard you." Get out of there.',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['femi'], label: 'Lie to Femi', on: { strong: 'a1_femi_lie', weak: 'a1_femi_lie', miss: 'a1_femi_lie' } },
          fx: g => { g.flag('femi_lied'); g.know('femi_changed', ['sam'], 'Femi Ojo says that since Saturday, nobody notices him. You can.'); } }
      ]
    },
    a1_femi_told: {
      text: `You tell him. Not everything. Not the bus, not Carmen, not the voice. But you tell him about the cold, and the stopped rain, and the way you can *move* in it. You keep your voice low out of habit. You don't need to. Nobody on these stairs can hear Femi, and it turns out nobody much notices the guy he's talking to, either.

Femi listens with his whole face. When you're done, he sits down on the step, hard.

femi: Okay. Okay. So I'm not crazy. I'm just a… what are we? What's the word for us?

sam: I don't know. There's a guy in my class who says my edges are blurry.

femi: *Weisz?* The bird's-nest guy? He said that to me Monday. He said I was "faint." Like a pencil drawing.

You both sit with that for a second.

femi: Okay. Here's my number. If you find out what we are, you call me. If something happens to me, you'll be the only one who notices. That's a weird thing to ask a guy I've known for an hour.

sam: Everything's weird this week.

femi: You said that already. Say something new next time.`,
      next: 'a1_grace'
    },
    a1_femi_half: {
      text: `He gives you his number. You text him right there on the stairs, *it's sam (ciros)*, and his phone buzzes in his hand, and he looks at it like he's just been handed a winning lottery ticket.

femi: First text I've gotten in three days that wasn't from my mother.

sam: You're not crazy, Femi. Whatever's happening, you're not the only one.

femi: How do you know?

You don't answer that. He doesn't push.

femi: Okay. Okay. If something happens to me, you'll be the one who notices. That's a weird thing to ask a guy I've known for an hour.

sam: Everything's weird this week.

femi: Yeah. You keep saying that.`,
      next: 'a1_grace'
    },
    a1_femi_lie: {
      text: `sam: I don't know what you mean, man. I just heard you. You were talking.

Femi looks at you. Then he nods, and you watch the hope go out of his face, slow, like a tire with a nail in it.

femi: Yeah. Okay. Sorry. Weird week.

He steps aside to let you pass. Two more students come up the stairs and walk straight into him and apologize to the railing.

When you look back from the landing below, he's still standing there, alone in the middle of the stairwell, and you have the distinct and terrible feeling that if you look away for even a second, you won't be able to find him again.

You look away.`,
      next: 'a1_grace'
    },

    a1_grace: {
      loc: 'CARDONE HALL · 9TH FLOOR · RA ROOM',
      clock: { time: '8:40 PM' },
      enter: g => { g.know('halcyon_outreach', ['sam', 'grace'], 'A Halcyon man in a gray polo is asking RAs in the blackout zone to refer students with nosebleeds, migraines, or cold sensitivity. $500 a referral.'); },
      text: g => `Grace catches you in the hallway at 8:40 that night with blood on your collar. You didn't even know it was there.

grace: Kearney. In.

The RA room is a single with a desk, a mini-fridge full of Diet Coke, a cat-shaped clock, and a framed photo of an enormous orange cat that you assume is Duodenum. Grace sits you on her bed and puts on gloves from a box on the windowsill.

grace: Tilt. Forward, not back. Who taught you that?

sam: My mother. She's a school nurse.

grace: Good. Your mother's smart. You're not.

She looks up your nose with a penlight. She takes your pulse with two fingers and a watch. She takes your blood pressure with a cuff from her desk drawer. Normal RAs do not own a blood pressure cuff.

grace: That's three I know of, which means it's more. Saturday on Liacouras, according to Simone. Monday night, Devontae says, you came off the elevator holding a Wawa napkin to your face. Your collar tonight. Recurrent epistaxis in an eighteen-year-old with no trauma, no history, normal BP. Okay.

She strips off the gloves.

grace: A man came by this morning.

Your stomach drops.

grace: Gray polo. Very polite. Tablet. He said he was from Halcyon "community wellness outreach." He's going to all the RAs in the blackout zone, Temple, Drexel, the high-rises on Broad. He wants us to refer residents who've had nosebleeds, migraines, insomnia, "unusual cold sensitivity" since Saturday. Five hundred dollars to the student for "participating in a voluntary health study." A Visa gift card to the RA, for "coordination."

She says *coordination* like it's a slur.

grace: He asked about this floor specifically. He knew the floor number, Kearney. He didn't ask about eight or ten. He asked about *nine*.

She looks at you.

grace: I didn't give him anything. I'm not your mom and I'm not your cop and I'm not your therapist. But I'm also not giving a man in a polo shirt a list of my kids.`,
      choices: [
        { text: '"Thank you. Seriously." Tell her the truth, or some of it: you were in the zone, it was cold, it\'s been weird since.',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Trust Grace', on: { strong: 'a1_grace_open_strong', weak: 'a1_grace_open_weak', miss: 'a1_grace_open_weak' } },
          fx: g => g.flag('grace', 'open') },
        { text: '"It\'s the heat. I get nosebleeds every summer." Keep it simple.',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['grace'], label: 'Lie to Grace', on: { strong: 'a1_grace_lie', weak: 'a1_grace_lie', miss: 'a1_grace_lie_miss' } },
          fx: g => g.flag('grace', 'lied') },
        { text: '"What does he want with people who got nosebleeds?" Ask her what she thinks it is.', tag: 'Ask',
          check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'empathy', label: 'Read Grace', on: { strong: 'a1_grace_ask_strong', weak: 'a1_grace_ask_weak', miss: 'a1_grace_ask_weak' } },
          fx: g => g.flag('grace', 'asked') }
      ]
    },
    a1_grace_open_strong: {
      enter: g => { g.bond('grace', { trust: 3, affection: 1 }); g.know('sam_in_zone', ['sam', 'grace'], 'Who knows you were in the blackout zone at 11:51 Saturday, felt the cold, and have bled since', { track: true }); },
      text: `You tell her some of it. That you were on Broad at Spring Garden. That it got cold, really cold, and that since then you're hungry all the time and you don't sleep and your nose won't quit.

You don't tell her about the stopped rain. You don't tell her about the bus.

She listens with her arms folded. When you're done, she doesn't say anything for a while.

grace: Okay.

She opens the mini-fridge, takes out two Diet Cokes, and hands you one.

grace: You're going to come to me. Every time. Nosebleed, headache, if you can't sleep, if you're cold. Not Student Health, not urgent care. Me. I'm going to write it down in a notebook that doesn't have your name on it.

sam: Why?

grace: Because I'm pre-med, and something is happening to people, and nobody's telling the truth about it. And because a man in a polo shirt offered me a gift card for you.

She cracks her Diet Coke.

grace: I don't like being offered gift cards for people.`,
      next: 'a1_grace_end'
    },
    a1_grace_open_weak: {
      enter: g => { g.bond('grace', { trust: 1 }); g.know('sam_in_zone', ['sam', 'grace'], 'Who knows you were in the blackout zone at 11:51 Saturday, felt the cold, and have bled since', { track: true }); },
      text: `You try. You get as far as *"I was on Broad Saturday, near Spring Garden"* and then your throat closes up around the rest of it like a fist.

Grace watches you not say it.

grace: Okay.

She doesn't push. She writes something in a small black notebook, a date and a time, and puts the notebook back in her desk drawer.

grace: You come to me. Nosebleed, headache, can't sleep. Me. Not Student Health.

sam: Why?

grace: Because I said so, and I'm the RA. Get out. Sleep.`,
      next: 'a1_grace_end'
    },
    a1_grace_lie: {
      text: `sam: It's the heat. I get nosebleeds every summer. Ask my mother.

Grace looks at you the way she probably looks at an X-ray.

grace: Okay.

That *okay* isn't belief. It's a receipt: she writes something in a small black notebook, a date and a time, and puts it back in her drawer without showing you.

grace: Come to me if it happens again. Not Student Health. Me.`,
      next: 'a1_grace_end'
    },
    a1_grace_lie_miss: {
      enter: g => { g.bond('grace', { trust: -1 }); g.know('ear_tell', ['grace']); },
      text: g => `sam: It's the heat. Every summer. Ask my—

grace: You're touching your ear.

You stop.

${g.knows('ear_tell', 'grace') ? 'grace: The whole floor knows about the ear, Kearney. Pemberton announced it at my icebreaker.' : 'grace: Everybody has a tell, Kearney. My father\'s was his mustache. Yours is your left ear.'}

She writes something in a small black notebook, closes it, and points at the door.

grace: Get out. Come back when you want to tell me the truth. Or when you're bleeding. Whichever comes first.`,
      next: 'a1_grace_end'
    },
    a1_grace_ask_strong: {
      enter: g => { g.bond('grace', { respect: 2, trust: 1 }); g.know('grace_theory', ['sam', 'grace'], 'Grace thinks Halcyon is building a list of people the blackout did something to, and that a "study" is how you get people to come to you.'); },
      text: `sam: What does he want with people who got nosebleeds?

Grace looks at you, and you see her decide that you're asking for real.

grace: Okay. Here's what I think, and I'm a senior with a 3.4, so take it for what it's worth. You don't pay five hundred dollars a head for a wellness study. You pay five hundred dollars a head for a *list*. Something happened Saturday that Halcyon didn't plan for, or did. Either way, now they want to know who it happened to.

She taps the cuff on her desk.

grace: And a study is the oldest trick in medicine. You don't have to go find people when you can get them to come to you.`,
      next: 'a1_grace_end'
    },
    a1_grace_ask_weak: {
      enter: g => g.bond('grace', { respect: 1 }),
      text: `sam: What does he want with people who got nosebleeds?

grace: I don't know. That's what bothers me.

She says it simply. Then she points at the door.

grace: Go. Sleep. Come to me if it happens again, not Student Health.`,
      next: 'a1_grace_end'
    },
    a1_grace_end: {
      enter: g => { if (g.f('nik_told2') === 'told') { g.know('halcyon_outreach', ['nik']); g.know('halcyon_tablet_man', ['nik']); } },
      text: g => `On your way out, she says, without looking up:

grace: Oh, and Kearney. You look like a ghost wearing a person. Sleep.

${g.f('nik_told2') === 'told' ? 'Back in 9-14, Nik has added a new section to the Google Doc. It\'s titled **HALCYON**, and it already has a subsection called **POLO GUY**.' : g.f('nik_told2') === 'week' ? 'Back in 9-14, Nik is typing very fast and closes his laptop when you come in. That\'s fair. That\'s the deal.' : (g.f('nik_hurt') ? 'Back in 9-14, the room is dark. Nik\'s side is empty. His laptop\'s gone.' : 'Back in 9-14, Nik has his headphones on. He says "hey" without turning around.')}

You lie down. Across the hall, faintly, the beverage center hums. A mile up Broad from here, in a hospital bed you've never seen, a woman named Carmen Torres is learning to walk again because you were half a second too slow.`,
      choices: [
        { text: 'Sleep. Actually sleep. Phone across the room.', tag: 'Sleep 8h', fx: g => { g.sleep(8); g.flag('tue_night', 'sleep'); }, go: 'a2_hub' },
        { text: 'Go up to the roof. Practice. You were half a second too slow. Fix it.', tag: 'Sleep 5h · Power · +1 Drift',
          fx: g => { g.sleep(5); g.mastery(5); g.drift(1); g.pool('focus', -2); g.flag('tue_night', 'roof'); g.hidden('revenant_drift', 0.5); }, go: 'a2_hub' }
      ]
    }
  },

  polls: [
    { q: 'Tuesday morning: Nik and the frame grab', opts: [
      { label: 'Told him everything', pct: 52, if: g => g.f('nik_told2') === 'told' },
      { label: 'Lied again', pct: 21, if: g => g.f('nik_told2') === 'lied' },
      { label: 'Asked for a week, with no lies', pct: 27, if: g => g.f('nik_told2') === 'week' }
    ] },
    { q: 'Femi on the stairs', opts: [
      { label: 'Told him the truth', pct: 38, if: g => g.f('femi_told') },
      { label: 'Gave him your number', pct: 47, if: g => g.f('femi_number') },
      { label: 'Walked away', pct: 15, if: g => g.f('femi_lied') }
    ] },
    { q: 'Broad & Girard', opts: [
      { label: 'Slipped in', pct: 49, if: g => g.f('heist') === 'slip' },
      { label: 'Ran in at human speed', pct: 18, if: g => g.f('heist') === 'burst' },
      { label: 'Went for the guard', pct: 22, if: g => g.f('heist') === 'guard' },
      { label: 'Stayed out of it', pct: 11, if: g => g.f('heist') === 'stayed' }
    ] },
    { q: 'Max\'s Steaks: Mikey and the still frame', opts: [
      { label: 'Lied to your brother', pct: 44, if: g => g.f('mikey2') === 'lied' },
      { label: 'Admitted you were there, nothing more', pct: 41, if: g => g.f('mikey2') === 'half' },
      { label: 'Changed the subject to Pop', pct: 15, if: g => g.f('mikey2') === 'pop' }
    ] }
  ],

  onEnd: g => {
    g.recap('Since Saturday, nobody can see Femi Ojo. Except you.');
  }
});
