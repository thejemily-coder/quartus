/* S1 · E4 · SUTURES, part 1 of 3: meta, cold open, Act One ("Normal"). */
EH.episode({
  id: 's01e04', season: 1, number: 4, title: 'Sutures', look: 's1',
  cast: ['sam', 'jules', 'nik', 'simone', 'grace', 'femi', 'teddy', 'bree', 'heck', 'mikey', 'ciro'],
  start: 'cold_open',
  xp: 5,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'CARDONE HALL · 9TH FLOOR BATHROOM',
      clock: { day: 'Sat', date: 'Sep 12', time: '3:07 AM' },
      text: `The tile is cold against your back, which is the only good thing about it.

You're on the floor of the ninth-floor bathroom, between the last shower stall and the radiator, in a puddle of your own blood that's bigger than you'd like. Somebody's lime-green shower caddy is still sitting on the bench. A paper sign over the sinks says **PLEASE DO NOT LEAVE HAIR IN THE DRAINS — G.** with a frowny face.

G. is kneeling over you in a Temple Med sweatshirt and one fuzzy sock, threading a curved needle by the light of her phone.

grace: Hold still.

sam: I am holding still.

grace: You're shaking.

sam: That's different from moving.

grace: It is not different from moving to a *needle*.

She tears open a little foil packet with her teeth. The smell of iodine hits you, sharp and yellow. Down the hall, a door opens and closes. Somebody's walking toward the bathroom in slippers, not hurrying, which means they don't know yet.

grace: Have you ever had stitches?

sam: Twice. Chin, from a shopping cart. Eyebrow, from Vinnie. Have you ever *done* stitches?

grace: Forty times.

sam: On people?

Grace looks at you over the needle. Her eyes are very tired and very steady.

grace: On bananas.

She doesn't wait for you to react. She just puts the needle in.`,
      choices: [
        { text: 'Laugh. It hurts like hell. Laugh anyway.', tag: 'Laugh',
          fx: g => { g.flag('cold', 'laugh'); g.bond('grace', { affection: 1 }); }, go: 'cold_after' },
        { text: 'Grab her wrist. "Don\'t call anybody. Please. Nobody."', tag: 'Nobody',
          fx: g => { g.flag('cold', 'nobody'); g.bond('grace', { tension: 1 }); }, go: 'cold_after' },
        { text: 'Look at the ceiling. Count the tiles. Don\'t make a sound.', tag: 'Silent',
          fx: g => { g.flag('cold', 'silent'); g.bond('grace', { respect: 1 }); }, go: 'cold_after' }
      ]
    },
    cold_after: {
      night: true,
      text: g => `${{
        laugh: 'You laugh. It comes out of you in pieces, wet and stupid, and every piece of it hurts something.\n\ngrace: Okay. Good. Laughing means you\'re not in shock. Or it means you\'re in shock. It\'s one of those.',
        nobody: 'Your hand closes around her wrist before you decide to do it. Her pulse is going fast under your fingers. Faster than yours, which isn\'t saying much, because you don\'t have that much blood left to push around.\n\ngrace: Let go of the hand with the needle in it, Sam.\n\nYou let go.\n\ngrace: Okay.',
        silent: 'You look at the ceiling. Forty-one tiles in the row over your head. Forty-one, like the beds. You don\'t make a sound. Grace notices that you don\'t make a sound, and something about it makes her mouth go thin.\n\ngrace: You can yell. It\'s three in the morning. Nobody\'s going to think it\'s weird. This floor yells at three in the morning.'
      }[g.f('cold')]}

The footsteps stop outside the bathroom door.

The door starts to open.

> TWO DAYS EARLIER.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_week' },

    /* ================= ACT ONE: NORMAL ================= */
    a1_week: {
      card: { kind: 'act', label: 'Act One', title: 'Normal' },
      loc: 'CARDONE HALL · ROOM 9-14',
      clock: { day: 'Thu', date: 'Sep 10', time: '7:50 AM' },
      text: g => `It's been five days since the roof.

Here is what has happened in five days. The heat broke on Tuesday like a fever, all at once, with a thunderstorm that flooded the Broad Street Line at Cecil B. Moore and turned the steps of the Bell Tower into a waterfall. It's sixty-eight degrees this morning. People are wearing *sweaters*, out of pure relief. Nik wore a scarf to Psych and got made fun of and didn't care.

Callum came back on Wednesday with two more iced coffees and took Jules to dinner at a place in Rittenhouse with no sign on the door. She came back at eleven and her lamp stayed on until two. You know because your door faces her door. You know because you were awake.

You've seen her eleven times since Sunday morning. You've counted. In the hallway, at the elevator, in Calc, at the kitchen sink at midnight both reaching for the same sponge. Eleven times, and every single time she's said *Kearney* in exactly the voice she used the day you carried her refrigerator up nine flights. Polite. Dry. Perfectly, deliberately normal.

As if it didn't happen.

${g.f('roof_end') === 'lean' ? 'Except you were there. You were close enough to feel her breathe. *Not like this,* she said, with her forehead against yours. Not *no*. *Not like this.* You\'ve thought about the difference between those two things more than you\'ve thought about anything in your life, including calculus, including God.' : 'Except you were there.'}

And then there's the other thing. Every night since Sunday, when you close your eyes, you hear it: a crowd breathing, a clock running the wrong way, and very far up, somebody laughing.

Bree texts you on Tuesday at 3 a.m.: *u hear it too now dont u.* You didn't answer. She sent a skull emoji. Then: *welcome to the club wawa. it doesnt have jackets.*`,
      next: 'a1_simone'
    },

    a1_simone: {
      loc: 'CARDONE HALL · 9TH FLOOR KITCHEN',
      clock: { time: '8:15 AM' },
      text: `The ninth-floor kitchen has one working burner, a microwave with a note taped to it that reads **FISH IS A HATE CRIME**, and Simone Okonkwo-Hayes, sitting on the counter in a silk headscarf and a Spelman sweatshirt, eating dry cereal out of the box and waiting for you. She was obviously waiting for you.

simone: Salvatore Kearney.

sam: Morning.

simone: Sit *down*.

There's nowhere to sit. You lean against the fridge. She points at you with a Froot Loop.

simone: I'm going to say this once, because I'm a generous woman and I was raised right. Juliet Pemberton came down off that roof on Sunday morning, and she walked past my door, and she was *humming*. Juliet doesn't hum. In four years of boarding school, I am told, she never once hummed. Now she's back to being a Victorian ghost, and you look like somebody ran you over with a Zamboni.

She crunches the Froot Loop.

simone: So. What happened on that roof?`,
      choices: [
        { text: '"We talked. All night. That\'s it. That\'s all."', tag: 'Half true',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['simone'], label: 'Keep the roof private', on: { strong: 'a1_sim_lie_strong', weak: 'a1_sim_lie_weak', miss: 'a1_sim_lie_miss' } } },
        { text: '"I leaned in. She said, *not like this.*" Tell her the truth. Somebody should know.', tag: 'The truth',
          fx: g => { g.flag('simone_roof', 'truth'); g.bond('simone', { trust: 2, affection: 1 }); g.know('almost_kiss', ['simone']); }, go: 'a1_sim_truth' },
        { text: '"Simone. I love you. I\'m not doing this before coffee."', tag: 'Dodge',
          check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Get out alive', on: { strong: 'a1_sim_dodge', weak: 'a1_sim_dodge', miss: 'a1_sim_dodge_miss' } } }
      ]
    },
    a1_sim_lie_strong: {
      enter: g => { g.flag('simone_roof', 'lied'); },
      text: `sam: We talked. All night. That's it.

Simone studies you for a long, terrible second, the way she studies a cold read before an audition.

simone: Hm.

She hands you the cereal box. You take it, because you're hungry, because you're always hungry now.

simone: I believe that you talked. I believe it was all night. I'm going to choose to believe the third thing for now, Salvatore, because I like you, and because I have a nine a.m.

She hops down off the counter.

simone: But I keep a list.`,
      next: 'a1_calc'
    },
    a1_sim_lie_weak: {
      enter: g => { g.flag('simone_roof', 'lied'); g.bond('simone', { tension: 1 }); },
      text: `sam: We talked. All night. That's it.

simone: Mm-hm. And did you touch your ear, just now? Because you did. Juliet told the whole floor about that ear the first week. Juliet tells nobody *anything*, and she made an announcement about your ear.

You put your hand down.

simone: I'm not going to push. I'm going to *watch*. It's much worse.`,
      next: 'a1_calc'
    },
    a1_sim_lie_miss: {
      enter: g => { g.flag('simone_roof', 'caught'); g.bond('simone', { tension: 1, trust: -1 }); },
      text: `Simone puts the cereal box down.

simone: Okay. So here's my problem. You're a terrible liar, and she's a *wonderful* liar, and between the two of you I've got one whole lie and no truth. And I am sitting in the middle of it, being *loyal* to both of you, for free.

She slides off the counter and stops in the doorway.

simone: I give everyone one chance to tell me themselves, Sam. That was yours. It's fine. I'll find out the other way. I always do.`,
      next: 'a1_calc'
    },
    a1_sim_dodge: {
      enter: g => { g.flag('simone_roof', 'dodged'); g.bond('simone', { affection: 1 }); },
      text: `sam: Simone. I love you. I'm not doing this before coffee.

She stares at you. Then she laughs, the big one, the one that carries down the hallway.

simone: Fine. *Fine.* You get one coffee. I'll be at Saxbys at four. Bring the truth and a muffin.

She hops down and pats your cheek on her way out, twice, like an aunt.

simone: Blueberry. Don't you dare bring me bran.`,
      next: 'a1_calc'
    },
    a1_sim_dodge_miss: {
      enter: g => { g.flag('simone_roof', 'dodged'); g.bond('simone', { tension: 1 }); },
      text: `sam: Simone. I love you. I'm not doing this before coffee.

simone: Don't you *I love you* me, Salvatore. I've been I-love-you'd by professionals.

She hops down off the counter and stops in the doorway, with the cereal box under her arm like a clutch.

simone: I give everyone one chance to tell me themselves. You just spent yours on a joke. That's fine. That's very *you*. I'll find out the other way. I always do.`,
      next: 'a1_calc'
    },
    a1_sim_truth: {
      text: `sam: I leaned in. She said, *not like this.*

Simone doesn't say anything at all. For Simone, that's a medical event. She puts the Froot Loops down very carefully on the counter.

simone: She said *not like this*.

sam: Yeah.

simone: Not *no*.

sam: That's what I keep— yeah.

simone: Oh, *Salvatore*.

She hops down off the counter and hugs you, hard, cereal crumbs and all. She smells like coconut oil and Froot Loops. When she lets go, she holds you at arm's length by both shoulders, and her face is not joking at all.

simone: Okay. Listen to me. She's going to be cold to you for a while. That's not because she doesn't mean it. It's because she *does*, and she has no idea what to do with that, and Juliet Pemberton has never in her life not known what to do. Don't take it personally. Take it seriously.

sam: What's the difference?

simone: About four years of therapy.

She picks the cereal back up.

simone: And Sam? Callum's a sweetheart. He's going to get hurt, and it's not going to be his fault. Don't you ever make him the bad guy. Not even in your head.`,
      next: 'a1_calc'
    },

    /* ---------- Calc ---------- */
    a1_calc: {
      loc: 'WACHMAN HALL · ROOM 015',
      clock: { time: '2:00 PM' },
      text: g => `Calc recitation. The ventilation finally works now that nobody needs it, and the room is so cold that Jules is wearing a navy cardigan with the sleeves pulled down over her hands.

She's in her usual seat. The seat next to her is empty. It's always empty. It's *your* seat; it's been your seat since the day the TA paired you as study partners and she looked at you like you were a parking ticket.

You sit in it.

jules: Kearney.

sam: Pemberton.

jules: You did the problem set.

sam: I did *most* of the problem set.

jules: You did the first four problems and then drew a horse.

sam: That's a *dog*.

jules: It has hooves.

She slides her problem set over without looking at you, so you can see number seven. It's the most generous thing she's done all week. Up at the front, the TA is writing the squeeze theorem on the board, and Femi Ojo is leaning against the wall by the door, where he always is, where nobody but you ever looks.

Halfway through, she writes something in the margin of her notes and tilts the page toward you, just enough.

*We should be normal.*

You look at it. You look at her. She's looking very hard at the squeeze theorem.

${g.f('roof_end') === 'lean' ? 'You know what she means. *Not like this.* Not while she\'s someone else\'s.' : 'You know what she means. You just don\'t know if she\'s right.'}`,
      choices: [
        { text: 'Write back: *Okay.* Mean it. Give her the room.', tag: 'Okay',
          fx: g => { g.flag('normal', 'okay'); g.bond('jules', { respect: 2, trust: 1 }); }, go: 'a1_calc_okay' },
        { text: 'Write back: *Define normal.* Then draw a little squeeze theorem with two hearts squeezing a sad face.', tag: 'Banter',
          check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', near: ['jules'], label: 'Make her break', on: { strong: 'a1_calc_banter_strong', weak: 'a1_calc_banter_weak', miss: 'a1_calc_banter_miss' } } },
        { text: 'Write back: *I\'d do it again.*', tag: 'The truth',
          fx: g => { g.flag('normal', 'again'); g.bond('jules', { affection: 1, tension: 1 }); }, go: 'a1_calc_again' }
      ]
    },
    a1_calc_okay: {
      text: `You write *Okay* under her line, small, in pencil.

She reads it. She doesn't look at you. But the pen in her hand stops moving for a second, and then she turns the page, and her shoulder, which has been an inch from yours for forty minutes without touching it, settles.

It's not nothing. It's the exact size of nothing, and you know her well enough by now to know that's on purpose.`,
      next: 'a1_femi'
    },
    a1_calc_banter_strong: {
      enter: g => { g.flag('normal', 'banter'); g.bond('jules', { affection: 1, respect: 1 }); },
      text: `You write *Define normal*, and underneath it you draw the squeeze theorem: two little hearts, one on each side, squeezing a frowny face that is very clearly having a terrible time.

She looks at it.

She puts the back of her wrist against her mouth, hard. Her shoulders shake once. The TA turns around, and she's suddenly *fascinated* by her calculator.

When the TA turns back, she writes underneath, very neatly:

*The limit of that face is still you.*

And then, smaller:

*Shut up. Do number seven.*

You do number seven. You've never done a calc problem so happily in your life.`,
      next: 'a1_femi'
    },
    a1_calc_banter_weak: {
      enter: g => { g.flag('normal', 'banter'); },
      text: `You write *Define normal* and draw two hearts squeezing a sad face.

She looks at it for a long moment. Then she very carefully erases the frowny face with the end of her pencil, and draws in its place a perfectly neutral line.

*Normal,* she writes.

It's funny. It's also not a joke. You can't tell which part she wants you to see.`,
      next: 'a1_femi'
    },
    a1_calc_banter_miss: {
      enter: g => { g.flag('normal', 'banter'); g.bond('jules', { tension: 1, respect: -1 }); },
      text: `You write *Define normal* and draw two hearts squeezing a sad face.

She looks at it. Her face does nothing at all.

Then she tears the corner off the page, folds it in half, and puts it in her cardigan pocket, and for the rest of the hour she works with her notes angled away from you.

It's the folding that gets you. She didn't throw it away. She *kept* it, where you can't see it. You don't know what that means, and you spend the rest of recitation not knowing.`,
      next: 'a1_femi'
    },
    a1_calc_again: {
      text: `You write *I'd do it again* under her line.

She reads it, and the pen in her hand goes perfectly still.

For a long moment, nothing. Up front, the TA drops a marker, and half the room laughs, and she doesn't. Then she writes, without looking at you, in handwriting slightly less neat than usual:

*I know. That's the problem.*

She turns the page. She doesn't look at you again for the rest of the hour. But when recitation ends and everyone stands, she leaves her cardigan on the back of the chair, and you have to run it down the hall to her, and when she takes it from you, your fingers touch for exactly as long as they have to and not one second longer, and you both know exactly how long that was.`,
      next: 'a1_femi'
    },

    /* ---------- Femi ---------- */
    a1_femi: {
      loc: 'WACHMAN HALL · HALLWAY',
      clock: { time: '2:55 PM' },
      text: g => `Femi catches you in the hallway after, falling into step beside you like a guy who's used to nobody noticing when he does.

femi: You look like you got hit by a SEPTA bus.

sam: You should see the bus.

femi: I *did* see the bus. That's sort of my whole thing now.

He's thinner than he was two weeks ago. His Temple Econ hoodie hangs off him. There's a white plastic hospital band on his left wrist, the kind they give you at the ER, and he catches you looking and pulls his sleeve down over it.

sam: Femi. What's that?

He doesn't answer right away. A girl from your Psych section walks straight into his shoulder, says *sorry* to the air three feet to his left, and keeps going.

femi: ${g.f('femi_warned') ? 'I know what you said. I *know*. But' : 'The wellness study. Halcyon. The flyers were everywhere,'} they called it a cohort. I went Tuesday. Five hundred dollars, cash, in an envelope, Sam. They took eight vials of blood. A woman did an eye test where she sat across from me and wrote down how long it took her to *forget I was there*. Eleven seconds. She was so *excited*.

He laughs. It's a thin sound.

femi: She looked at me. For eleven seconds, somebody actually looked at me like I was interesting. Do you know how long it's been?

He holds up his wrist and pulls the sleeve back. The band reads **HCW-COHORT 2 · 031 · F/U 09/22**.

femi: Follow-up's the twenty-second. They said they can help. They said there's a *name* for what I have.`,
      choices: [
        { text: '"Don\'t go back. They took a girl in Fishtown, Femi. Marisol Reyes. She went to their study and never came home."', if: g => g.knows('marisol'), tag: 'Marisol',
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', bonus: 1, bonusLabel: 'You know about Marisol', label: 'Keep Femi away from Halcyon', on: { strong: 'a1_femi_strong', weak: 'a1_femi_weak', miss: 'a1_femi_miss' } } },
        { text: '"Don\'t go back. Please. I can\'t tell you how I know. Just don\'t."', if: g => !g.knows('marisol'),
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', label: 'Keep Femi away from Halcyon', on: { strong: 'a1_femi_strong', weak: 'a1_femi_weak', miss: 'a1_femi_miss' } } },
        { text: '"I see you. I always see you. You don\'t need them for that."', tag: 'See him',
          fx: g => { g.flag('femi4', 'seen'); g.bond('femi', { affection: 2, trust: 1 }); }, go: 'a1_femi_seen' }
      ]
    },
    a1_femi_strong: {
      enter: g => { g.flag('femi4', 'warned'); g.flag('femi_warned', 'strong'); g.bond('femi', { trust: 2 }); if (g.knows('marisol')) g.know('marisol', ['femi']); },
      text: g => `${g.knows('marisol') ? 'sam: Marisol Reyes. Nineteen. She popped lightbulbs. She went to their study and her mother got a text from her phone that said *im fine*, and nobody\'s seen her since. Femi. They\'re not studying people. They\'re *collecting* them.' : 'sam: I can\'t tell you how I know. I just do. Please.'}

Femi stops walking. Somebody behind him walks into him, swears at nobody, and steps around.

femi: …Okay.

sam: Okay?

femi: You're the only person who's looked me in the eye in three weeks. If you tell me not to go, I won't go.

He pulls the sleeve back down over the band.

femi: But I'm keeping the five hundred. I'm invisible, not stupid.`,
      next: 'a1_hub'
    },
    a1_femi_weak: {
      enter: g => { g.flag('femi4', 'maybe'); g.flag('femi_warned', 'weak'); g.bond('femi', { trust: 1 }); },
      text: `Femi listens. He really does. That's the thing about Femi: he listens to everything, because he's got nothing else to do.

femi: I hear you.

sam: But?

femi: But you're asking me to stay invisible, man. You get to be the Broad Street Blur. *I'm* not anybody. They're the first people in three weeks who think I'm *something*.

He shrugs his backpack higher on his shoulder.

femi: I'll think about it. That's honest. That's the most honest I can be.`,
      next: 'a1_hub'
    },
    a1_femi_miss: {
      enter: g => { g.flag('femi4', 'going'); g.bond('femi', { tension: 1 }); },
      text: `femi: Come on.

He says it gently, which is worse.

femi: You don't get to tell me what to be scared of, Sam. You don't even know what it's *like*. Nobody's forgotten *you* in eleven seconds.

He's already walking away. Within ten feet, the hallway has closed around him like water, and even you have to look twice to find him again.`,
      next: 'a1_hub'
    },
    a1_femi_seen: {
      text: `sam: I see you. I always see you. You don't need them for that.

Femi looks at you for a long second. His eyes go bright, and he looks down at his sneakers, fast.

femi: That's really corny, man.

sam: Yeah.

femi: Like, *really* corny.

sam: I know.

femi: …Thank you.

He doesn't say whether he's going back on the twenty-second. You don't ask him. Maybe you should have.`,
      next: 'a1_hub'
    },

    /* ---------- Thursday hub ---------- */
    a1_hub: {
      loc: 'THURSDAY · SEPTEMBER 10',
      clock: { time: '4:00 PM' },
      text: `The afternoon goes gold and cool over Broad Street. You have the evening. Not all of it: you've got a Psych reading, a sleep debt you can feel in your teeth, and a city that won't stop happening.`,
      hub: {
        slots: 2, label: 'Thursday evening',
        blurb: 'Choose two. The rest will happen without you.',
        options: [
          { id: 'thu_nik', text: 'Roof with Nik. He says he\'s "found something" in the Kensington data and won\'t say what over text.', cost: 1, tag: 'Nik', go: 'a1_nik' },
          { id: 'thu_teddy', text: 'Text Teddy. You haven\'t heard from him since the alley. You haven\'t heard anything about Heck.', cost: 1, tag: 'Teddy', go: 'a1_teddy' },
          { id: 'thu_mikey', text: 'Mikey\'s been calling. Three missed calls. Call him back.', cost: 1, tag: 'Mikey', go: 'a1_mikey' },
          { id: 'thu_ciro', text: 'Pick up a dinner shift at Ciro\'s. The cash is starting to look thin.', cost: 1, tag: 'Money', go: 'a1_ciro' },
          { id: 'thu_sleep', text: 'Go to bed at nine like a grandmother. Actually sleep.', cost: 1, tag: 'Rest', go: 'a1_sleep' }
        ],
        done: 'a1_friday'
      }
    },

    a1_nik: {
      loc: 'CARDONE HALL · ROOF',
      clock: { time: '8:30 PM' },
      enter: g => { g.mastery(3); g.bond('nik', { trust: 1 }); g.know('mcpherson', ['sam', 'nik'], 'Nik mapped it: the shimmer you saw in the Slip and the sound Bree heard come from the same place. The sky over McPherson Square, Kensington.'); },
      text: g => `Nik has a map.

It's a printout of a satellite image of Kensington, taped together from six sheets of paper, weighted at the corners with a Pepsi can, his laptop, a rock, and his own sneaker. He's drawn on it in red Sharpie.

nik: Okay. So. Trial forty-four. You were on this roof, facing this way, and you said the shimmer was *past the El, past Kensington*. I got the bearing off the stars, which, you're welcome, I learned celestial navigation in four days from a YouTube channel run by a retired Coast Guard guy named Dale.

He draws a red line from Cardone Hall out across the map, northeast.

nik: Then Bree. She said she was on the El platform at Girard, and the sound came from *up*, *over Kensington*. So I took Girard station, and I drew every line that's *up and over Kensington* from there…

He draws a second red line. It crosses the first.

nik: …and they meet. Here.

He taps the paper. Under his finger, between Kensington Avenue and F Street, there's a square of green with a building in the middle.

nik: McPherson Square. There's a library. It's the size of one city block. Your shimmer was the size of one city block.

sam: So what's there?

nik: Nothing! That's the thing! It's a *library*! It's a library and some benches and a lot of people having the worst day of their lives. But whatever you saw breathing in the Slip, and whatever Bree heard laughing in the Hitch, it was right *over* it.

He sits back on his heels. In the headlamp, his face looks young and very scared and very, very interested.

nik: Bro. I think something's *in* the sky there. Like, in the time of the sky. I don't have words for it yet. Dale doesn't have a video for it.

You run Slip drills with him until eleven. You can hold it a little longer now. Seventy-five seconds. You're getting better at it. You try not to think about what *better* means.`,
      next: '@hub'
    },

    a1_teddy: {
      enter: g => { g.flag('teddy_check'); g.know('heck_burning', ['sam', 'teddy', 'bree', 'heck'], 'Heck hasn\'t cooled down since the fire on 15th Street. The heat broke Tuesday. He didn\'t.'); g.know('teddy_mother', ['sam'], 'Teddy\'s mother, Halina Kowal, needs a kidney. The robbery money was for her transplant evaluation at Jefferson.'); g.bond('teddy', { trust: 1 }); },
      text: `You text him: *hows the hand.*

Twenty minutes. Then:

TXT teddy: bad. bree wrapped it. it looks like a ham
TXT teddy: thats not why youre texting

TXT sam: hows heck

A long pause. The three dots appear and disappear four times.

TXT teddy: not good
TXT teddy: he hasnt cooled down. not since saturday. its 68 out and hes at 104. his tia made him sleep in the bathtub with the cold water running. the water came out of the drain warm
TXT teddy: he wont go to a doctor. a doctor would put him in a computer. a computer is a list
TXT teddy: he keeps saying hes going to hurt somebody

TXT sam: what do you need

The dots again. Then a longer message, the longest he's ever sent you.

TXT teddy: listen. jefferson wants 40k before they put my mom on the list. thats what the truck was. bree cant sleep. heck is turning into a stove. if i call you its because i dont have anybody else to call

TXT teddy: thats all

You read it three times. Then you put the phone face down on your desk, and you don't sleep for a while.`,
      next: '@hub'
    },

    a1_mikey: {
      enter: g => { g.bond('mikey', { affection: 1 }); },
      text: g => `Mikey picks up on the first ring.

mikey: *Sammy.* Jesus. I was about to send a car.

sam: You can't send a car, you're a car.

mikey: I'm a car with a radio. Listen. Tomorrow's the eleventh. They're doing the thing at Engine 46, on Reed Street, the bell. Pop's coming. Ma's making the cookies with the pignoli. You should come down.

sam: I've got class.

mikey: Yeah. Okay.

He doesn't say anything for a second. You can hear the city behind him: a siren, a guy yelling about a parking spot, Mikey's partner chewing.

mikey: Hey, so, unrelated. The task group's got a statement from a lady at 15th and Lehigh. Saturday night, the fire. Says a kid in a black hoodie came across the roof from next door and pulled her and the babies out the back. Says he had a Philly accent. Says he said *youse.*

He lets that sit.

mikey: Called the baby *the little guy*. Called her *ma'am*. Ran so fast she thought he was two people. ${g.f('costume') === 'hoodie' ? 'And she says he had an Eagles cap on backward, which, I mean, every guy in Philly, but.' : ''}

mikey: Where were you Saturday night, Sammy?`,
      choices: [
        { text: '"On the dorm roof. The power was out. Ask anybody on my floor."', tag: 'True enough',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', bonus: 1, bonusLabel: 'It\'s mostly true', liesTo: ['mikey'], label: 'Lie to Mikey', on: { strong: 'a1_mikey_ok', weak: 'a1_mikey_meh', miss: 'a1_mikey_bad' } } },
        { text: '"Mikey. If it was me, would you want to know?"', tag: 'Ask him',
          fx: g => { g.flag('mikey4', 'asked'); g.heat('mikey', 2); g.bond('mikey', { trust: 1 }); }, go: 'a1_mikey_ask' }
      ]
    },
    a1_mikey_ok: {
      enter: g => { g.flag('mikey4', 'lied'); },
      text: `sam: On the dorm roof. The power was out. Ask anybody on my floor.

mikey: Yeah, yeah. I saw the blackout on the news.

A pause. He sounds almost relieved.

mikey: It's just, the task group, they're putting together a profile. Young male, local, athletic, *works nights*. And I keep reading it and thinking, that's half the guys I grew up with. That's *you*. And I hate it. I hate that I think it.

mikey: Come down Sunday. Eat something. You sound thin.`,
      next: '@hub'
    },
    a1_mikey_meh: {
      enter: g => { g.flag('mikey4', 'lied'); },
      text: `sam: On the dorm roof. The power was out. Ask anybody on my floor.

mikey: I might.

He says it lightly. He doesn't say it like a joke.

mikey: Love you, Sammy. Don't do anything stupid. And if you're doing something stupid, do it in a different neighborhood than the one where *I* work.`,
      next: '@hub'
    },
    a1_mikey_bad: {
      enter: g => { g.flag('mikey4', 'caught'); g.bond('mikey', { tension: 1 }); },
      text: `sam: On the dorm roof. The power was out. Ask anybody on my floor.

Mikey's quiet for a long time.

mikey: You know you used to do this thing when you were a kid? When you broke something. You'd tell me where you were before I asked. Every time. *I was in the yard.* Nobody asked about the yard, Sammy.

mikey: I'm not doing this on the phone.

He hangs up. He doesn't say *love you*. He always says *love you*.`,
      next: '@hub'
    },
    a1_mikey_ask: {
      text: `sam: Mikey. If it was me, would you want to know?

The siren behind him fades. His partner stops chewing. You hear a car door close, and then it's just your brother, breathing, somewhere in South Philly.

mikey: …That's not a fair question.

sam: I know.

mikey: I'm a cop, Sammy.

sam: I know.

mikey: If it was you, I'd want to know so I could *stop* you. Because that kid on 15th Street is gonna get himself killed. Because the guys in the polo shirts asking about him in my captain's office aren't asking so they can give him a medal.

A long breath.

mikey: So no. Don't tell me. Don't tell me anything. Just… if it's you, be *careful*. And if it's not you, forget I called.

He hangs up. Neither of you said yes. Neither of you said no.`,
      next: '@hub'
    },

    a1_ciro: {
      loc: 'CIRO\'S PIZZA · CECIL B. MOORE AVE',
      enter: g => { g.money(14 * 3 + 22); g.bond('ciro', { affection: 1 }); },
      text: `Ciro's is slammed, because the heat broke and everybody in North Philly remembered they like hot food.

ciro: Salvatore. You're late. You're late like the Septa. You're late like my *wife*.

He's not mad. He hands you a bag of garlic knots for yourself before you even get your jacket off, and watches you eat four standing up, and shakes his head like a man watching his own son do something stupid.

ciro: You eat like a wolf now. Like a wolf in winter. Where does it go? You're skinny like a *rake*.

You run eleven deliveries in four hours. You get a twenty-two-dollar tip from a nurse at Temple Hospital who says you remind her of her nephew. You don't Slip once. It feels like being a person.`,
      next: '@hub'
    },

    a1_sleep: {
      enter: g => { g.flag('thu_slept'); },
      text: `You go to bed at nine, like a grandmother. You put your phone in your desk drawer, under your Calc textbook, like it's a dangerous animal.

Across the hall, under Jules's door, her lamp is on. You lie in the dark and look at the line of light under your own door, and you think about it being on, and you think about a seven-year-old girl in a stone chapel, and somewhere around the thought of her face, you fall asleep.

You don't dream about the laughing.

You sleep eleven hours. You wake up starving, sore, and almost human.`,
      next: '@hub'
    },

    /* ---------- Friday ---------- */
    a1_friday: {
      loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
      clock: { day: 'Fri', date: 'Sep 11', time: '10:52 PM' },
      enter: g => { if (g.f('thu_slept')) g.sleep(11); else g.sleep(5); },
      text: g => `Friday goes by like a train you're watching from the platform.

At 8:46 in the morning, the whole campus goes quiet for a minute, and the bell in the Bell Tower rings once, and you stand on the steps of Charles Library with a coffee in your hand and think about your brother, who was one year old that day and doesn't remember it, and who enlisted anyway, years later, because of a day he doesn't remember. You text him a picture of the Bell Tower. He sends back a flag emoji and *love you sammy* in all lowercase like Gigi.

${g.f('mikey4') === 'caught' ? 'It\'s the first time he\'s said it since he hung up on you. You read it a few times.\n\n' : ''}At night, the ninth floor does movie night in the lounge, because the heat's gone and everybody's alive and nineteen. Simone picks *Moonstruck*, "for Sam's people." Nik brings two bags of popcorn and his entire heart. Devontae falls asleep in fifteen minutes.

Jules comes. Callum isn't with her. She sits on the other end of the couch from you, with Simone between you like a demilitarized zone, and she watches Cher slap Nicolas Cage and say *snap out of it*, and she laughs once, quietly, and when you look over, she's already looking at you.

She doesn't look away.

At 10:52, your phone buzzes against your leg.

TXT teddy: hes going to them
TXT teddy: they texted his tia from marisols phone. "its marisol. they helped me. they can help u. mcpherson sq. 11 tonite. come alone"
TXT teddy: its not her. he knows its not her. he went anyway
TXT teddy: im at kensington and somerset. i cant get close. he put bree on the ground for trying
TXT teddy: please

McPherson Square.${g.knows('mcpherson') ? ' Nik\'s red X. The place the sky is wrong.' : ''}

On the screen, Cher is telling her whole family the truth at the kitchen table. On the couch, Jules has turned her head, and she's watching you read your phone.`,
      choices: [
        { text: 'Get up. Don\'t say anything. Just go.', tag: 'Go',
          fx: g => { g.flag('fri_leave', 'silent'); g.bond('jules', { tension: 1, trust: -1 }); g.heat('jules', 1); }, go: 'a2_go' },
        { text: 'Lean over Simone and say to Jules, quietly: "I have to go. I\'ll be back. I promise I\'ll be back."', tag: 'Promise',
          fx: g => { g.flag('fri_leave', 'promise'); g.bond('jules', { trust: 1 }); g.heat('jules', 1); }, go: 'a2_go' },
        { text: 'Put the phone face down. Not tonight. You promised yourself one normal night.', tag: 'Stay',
          fx: g => { g.flag('fri_leave', 'stayed'); g.hidden('revenant_drift', -0.5); }, go: 'a1_stay' }
      ]
    },
    a1_stay: {
      text: `You put the phone face down on your thigh.

One normal night. Cher and Nicolas Cage and the moon over Brooklyn and Jules Pemberton laughing once, quietly, on the other end of the couch. You've earned one. You've *earned* it.

The phone buzzes again. And again. You don't turn it over. Simone looks down at your leg, then at your face, and says nothing, in a very loud way.

At 11:09, it starts ringing.

You turn it over. **TEDDY**. You let it go to voicemail. It rings again immediately.

sam: Sorry. One sec.

In the hallway, you pick up, and you don't hear Teddy. You hear Bree, screaming, very far from the phone, not words. And under it a sound like a gas burner turned all the way up, and a man's voice, calm, saying *easy, easy, son*.

Then Teddy, close, out of breath:

teddy: He's in the square. They've got a tent. Sam. *Sam*. I can't—

The call drops.

You're already running.`,
      next: 'a2_go'
    }
  }
});
