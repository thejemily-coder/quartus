/* S2 · E6 · WHAT IF IT WAS, part 3 of 4: Act Three ("Valentine's"). */
EH.scenes('s02e06', {

  /* ================= ACT THREE: VALENTINE'S ================= */
  a3_quiz: {
    card: { kind: 'act', label: 'Act Three', title: 'Valentine\'s' },
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { day: 'Fri', date: 'Feb 12', time: '9:40 PM' },
    enter: g => { g.sleep(7); },
    text: g => `Friday night. The lounge.

Jules is sitting at the big table with a sheet of paper in front of her, face down, and both hands flat on top of it like it might get up and leave.

jules: Monday\'s quiz. Orgo. Dr. Okafor hands them back face down. He thinks it\'s kind.

sam: And?

She turns it over.

In red pen, at the top, circled: *71.*

She looks at it. You look at her looking at it. You\'ve never seen a number below ninety-four anywhere near her.

jules: Seventy-one.

sam: Jules—

jules: I got number four wrong. I *knew* number four. I knew it, and I second-guessed it, and I changed it, and I was wrong, the way people are wrong. The way everyone in that room is wrong, all the time, every day of their lives.

She puts one finger on the 71, very gently.

jules: Nobody helped. Nothing helped. It\'s just mine.

And then she laughs. Not small. Her whole body. She puts her forehead down on the quiz and laughs until Devontae looks in from the hallway, alarmed, and backs out again.

jules: It\'s *wonderful*, Sam. I\'m going to frame it.

You sit down next to her.

${g.hv('jules_debt') >= 5 ? 'She has a tissue in her sleeve. She\'s had a tissue in her sleeve all week. When she laughs, she checks her nose with the back of her wrist without thinking about it. It\'s clean. This time.' : ''}

jules: Tomorrow\'s the thirteenth.

sam: Yeah.

jules: And then at midnight it\'s the fourteenth.

sam: I\'m aware of the calendar, Pemberton.

jules: I want one night.

She turns the quiz face down again.

jules: One normal night. No luck. No Slip. No Halcyon, no Bruno, no men with your face, no beds with my number on them. Two people from the same floor who like each other, going somewhere and doing something stupid. I\'ve never had one. Not one, in my whole life. Every night I\'ve ever had, something was going my way.

sam: What do you want to do?

She thinks about it. She thinks about it very seriously, the way she thinks about everything.

jules: I want to fall down.

sam: You want to—

jules: I have never fallen down, Sam. Not once. Not off a bike, not on ice, not down stairs. Mercutio fell. I landed on my feet. I want to *fall down*. In front of people. And get up. And have it be nobody\'s fault.

sam: Penn\'s Landing. The rink. They have skates. Everybody falls down at the rink. It\'s, like, the whole point of the rink.

jules: Everybody falls down.

sam: Everybody.

jules: *(very quietly)* That\'s the nicest thing anyone\'s ever said to me.

jules: Eight o\'clock. Don\'t be late. I won\'t be lucky.`,
    next: 'a3_rink'
  },

  a3_rink: {
    night: true,
    loc: 'BLUE CROSS RIVERRINK · PENN\'S LANDING',
    clock: { day: 'Sat', date: 'Feb 13', time: '8:20 PM' },
    text: `The RiverRink on a Saturday night in February is the whole city on ice. Teenagers in packs. Dads holding the hands of little kids in helmets. A couple in their seventies doing a slow, perfect waltz in the middle, like they\'ve been doing it since 1970. String lights over everything, and the Ben Franklin Bridge lit up blue across the river, and the Delaware black and moving under it.

Jules is holding the rail with both hands.

She has rented skates on, brown and scuffed, a size too big. A hat. Mittens. Her cheeks are pink. She looks about twelve.

jules: How do you stop.

sam: You mostly don\'t.

jules: That\'s not an answer.

sam: It\'s the only answer. You fall into the wall. Or a stranger.

She lets go of the rail with one hand. She holds her breath. You can see her do it, see her shoulders come up and stay up, see her decide.

She lets go with the other hand.

She stands there. Wobbling. For one second. Two.

Then her feet go out from under her in two different directions, and she sits down on the ice, hard, *whump*, on her backside, with her legs out in front of her like a toddler.

She looks up at you.

Her face is the most astonished thing you\'ve ever seen.

jules: I fell down.

sam: You fell down.

jules: *I fell down.*

And she starts to laugh. Sitting on the ice. A kid in a Flyers jersey has to swerve around her. She doesn\'t care. She\'s laughing with her head back, her hat falling off, steam coming out of her mouth.

You hold out your hand to pull her up.`,
    choices: [
      { text: 'Pull her up and skate with her. Straight. Just your legs and hers and the ice. No luck, no Slip, nothing.', tag: 'Skate it straight',
        check: { kind: 'move', move: 'Skate It Straight', attr: 'reflex', skill: 'athletics', label: 'Keep you both up', noLuck: true,
          on: { strong: 'a3_rink_strong', weak: 'a3_rink_weak', miss: 'a3_rink_miss' } },
        fx: g => { g.hidden('jules_debt', -1); g.bond('jules', { affection: 1 }); } }
    ]
  },

  a3_rink_strong: {
    night: true,
    enter: g => { g.flag('rink6', 'strong'); },
    text: `You pull her up. She grabs your coat with both mittens.

sam: Don\'t look at your feet.

jules: Where else would I look?

sam: At me.

So she does. And you skate backward, slowly, the way your cousin Anthony taught you at the old rink on Oregon Avenue when you were nine, holding both her hands, pulling her along, and she wobbles and wobbles and doesn\'t fall.

Once around. Twice. The old couple waltzes past and the woman winks at Jules.

By the third time around she lets go of one of your hands. By the fourth she lets go of the other. She\'s skating. Badly. Arms out like a scarecrow, knees locked, terrified, *skating*, three feet in front of you, by herself.

jules: Sam. Sam. Look. I\'m *doing* it. Nobody\'s helping.

sam: I\'m looking.

jules: I\'m doing it *badly*!

sam: You\'re doing it so badly. It\'s beautiful.

She falls down twice more before they close the rink. Both times she lies on the ice and laughs until somebody has to help her up. Both times it\'s you.`,
    next: 'a3_walk'
  },

  a3_rink_weak: {
    night: true,
    enter: g => { g.flag('rink6', 'weak'); },
    text: `You pull her up. She grabs your coat with both mittens. You get about four feet.

Then her left skate goes one way and your right skate goes the other, and you both go down in a pile, your elbow, her knee, a mitten in your mouth, at the exact moment a pack of eighth graders comes around the turn and has to part around you.

ONE OF THE EIGHTH GRADERS: *Get a room!*

Jules is lying on top of you on the ice, laughing so hard she can\'t breathe.

jules: We fell down.

sam: We fell down.

jules: *Together*. Both of us. Nobody\'s fault.

She doesn\'t get up. She lies there on your chest, on the ice, in the middle of the RiverRink, with the string lights over her head and the Ben Franklin Bridge blue behind her, and kisses you.

The eighth graders scream.

You do get up, eventually. You fall down six more times before they close. Every single time, she laughs like it\'s the first.`,
    next: 'a3_walk'
  },

  a3_rink_miss: {
    night: true,
    enter: g => { g.flag('rink6', 'miss'); g.flag('jules_cried6'); g.bond('jules', { trust: 1 }); },
    text: `You pull her up. She grabs your coat. You push off.

And you go down. Not her. *You*. Hard. Your skate catches a rut in the ice and you go over sideways like a folding chair and crack your hip on the ice and slide four feet into the boards on your back, and lie there, looking up at the string lights, with all the wind knocked out of you.

Jules is still standing. Wobbling. Holding the rail. Somehow.

She looks at you, flat on your back on the ice.

You look at her.

sam: *(wheezing)* I\'m fine. It\'s fine. This happens.

And she starts to laugh.

And then she starts to cry.

Both. At once. Standing at the rail at the RiverRink on a Saturday night in front of the whole city, she\'s laughing and crying so hard she has to hold onto the rail with both hands, tears running down her pink cheeks, and she can\'t stop, and she doesn\'t try.

You\'ve never seen her cry. Nobody has. She doesn\'t, in front of people.

You crawl over. You get up, holding the rail next to her. She puts her face in your coat.

jules: *(into your coat)* You fell. You fell, and I didn\'t do anything, and it wasn\'t me, and nobody died. You just *fell*. Like a person.

sam: Yeah.

jules: It\'s been three weeks, Sam. It\'s been three weeks and every single thing that happened near me, I thought, *was that me*. Every single thing. Every bus that was late. Every person who tripped on the stairs.

She laughs into your coat, wet.

jules: You fell down on the ice and I didn\'t do it.

You stand at the rail and hold her while she cries. The old couple waltzes past. The woman doesn\'t wink this time. She just nods at you, very gently, like she knows.`,
    next: 'a3_walk'
  },

  a3_walk: {
    night: true,
    loc: 'PENN\'S LANDING · THE RIVER',
    clock: { time: '11:40 PM' },
    text: g => `After, you walk along the river. Past the Moshulu, the big old ship with the restaurant in it, all lit up. Past the Seaport Museum. To the end of the pier, where there\'s nothing but a railing and the black Delaware and Camden glittering on the other side.

She\'s holding your hand. Your cold hand in her warm one. She doesn\'t mention it anymore. Neither do you.

jules: I have to tell you something. The thing I kept. On the roof.

sam: You don\'t have to.

jules: I do. It\'s been sitting in my chest for three weeks and it\'s heavy.

She looks at the water.

jules: On New Year\'s Day, in the chapel, Gran told me some families are lucky, and some families are *early*. She said the early ones always go in for somebody else.

She squeezes your hand.

jules: She said, *Keep him close, child. And don\'t let the house collect from him.*

The river moves under the pier.

jules: She knew. On New Year\'s Day. Before I did, before you told me anything. She knew what you were, and she knew what I was, and she knew what I would cost you.

She turns and looks at you.

jules: I\'ve been afraid for three weeks that it already has. That Teddy was a payment that was supposed to be you, and the house took him instead because he was closer.

sam: That\'s not—

jules: You don\'t know that. Neither do I. That\'s what\'s unbearable. Nobody knows.

${g.knows('revenant_push', 'jules') ? 'She doesn\'t say *except you*. You both think it. The man on the lip of the dock, the two fingers. You told her. She knows it wasn\'t the house. She\'s afraid of something else now: that a man with your face would do that, for her.' : 'You think about the man across the water, under the dead spotlight, one hand raised, for one frame. You told her you saw him. You told her you don\'t know.'}

She\'s quiet for a while.

jules: That night in September, on the stoop on Mifflin Street. Your brother said he was looking for the Blur, and I said something about it, and you said, *What if it was?*

sam: I remember.

jules: I\'ve been thinking about it all week. Turning it around. *What if it was.*

She looks out at Camden. At the bridge, blue.

jules: What if it was you, Sam. The man. What if it\'s you, someday. Older. With nobody left.

You don\'t say anything. You can feel the note in your wallet like it\'s hot. The index card. Her handwriting: *When I know, you\'ll be the first.* And under it, in yours, a line you never wrote:

*Don\'t trust the lucky one.*

She told you hers. She gave you the last thing. It\'s your turn.

It\'s 11:59.`,
    choices: [
      { text: 'Give her the card. The last thing. "He wrote this. In my handwriting. Before I ever knew what you were."', tag: 'The card',
        fx: g => { g.flag('note6', 'told'); g.know('revenant_note', ['jules']); g.know('gran_sam', ['sam']); g.bond('jules', { trust: 2 }); g.hidden('revenant_drift', -1.5); g.hidden('jules_debt', -1); }, go: 'a3_card' },
      { text: 'Keep it. She just took a weight off her chest. Don\'t put a heavier one there tonight. Kiss her at midnight instead.', tag: 'Keep it',
        fx: g => { g.flag('note6', 'kept'); g.know('gran_sam', ['sam']); g.hidden('revenant_drift', 0.5); }, go: 'a3_midnight' }
    ]
  },

  a3_card: {
    night: true,
    clock: { day: 'Sun', date: 'Feb 14', time: '12:00 AM' },
    text: `You take out your wallet. You take out the index card. You hold it out to her.

She knows it. Your pencil on the front, from the study night: *What did you mean?* Her own handwriting on the back: *When I know, you\'ll be the first.* She almost laughs. She remembers writing it.

Then she sees the third line.

*Don\'t trust the lucky one.*

She reads it. She reads it again.

sam: It fell out of my Calc book in November. I didn\'t write it. It\'s my handwriting. Exactly. The way Sister Margaret made me cross my Ts.

sam: I\'ve had it for three months. I almost threw it in the river a hundred times. I kept it from you on the roof. I don\'t know why. I think I was scared you\'d read it and think I believed it.

Across the river, in Camden, somebody sets off fireworks. Midnight. Valentine\'s. Little pink and white bursts over the water, cheap ones, from a backyard.

jules: He doesn\'t trust me.

She says it slowly, working it out.

jules: He watched Teddy fall. Or he did it. And then he goes and sits by girls\' beds and cries. And he doesn\'t trust me.

She laughs. It\'s not a happy laugh. It\'s not an unhappy one either. It\'s the sound of somebody who has just been handed the last piece of a puzzle, and found that it\'s a different puzzle.

jules: Do you?

sam: Yeah.

She looks at you in the light of somebody\'s backyard fireworks. Pink. White. Pink.

jules: You\'re not touching your ear.

sam: I know.

She folds the card in half. She doesn\'t give it back. She puts it in the inside pocket of her camel coat and buttons it.

jules: Then he\'s wrong about something. Good. I\'ve been waiting three weeks for somebody to be wrong about something.

She kisses you. The fireworks keep going, badly, cheaply, beautifully, over Camden.`,
    next: 'a3_door'
  },

  a3_midnight: {
    night: true,
    clock: { day: 'Sun', date: 'Feb 14', time: '12:00 AM' },
    text: `You don\'t take out your wallet.

Across the river, in Camden, somebody sets off fireworks. Midnight. Valentine\'s. Little pink and white bursts over the water, cheap ones, from a backyard.

jules: Oh.

sam: Happy Valentine\'s Day, Pemberton.

jules: Happy Valentine\'s Day, Kearney.

You kiss her. The fireworks keep going, badly, cheaply, beautifully, over Camden.

The card stays in your wallet. You can feel it there, the whole time, the way you\'d feel a stone in your shoe. You\'ll give it to her. Soon. Not tonight.

You tell yourself that\'s kindness. Some of it is.`,
    next: 'a3_door'
  },

  a3_door: {
    night: true,
    loc: 'CARDONE HALL · 9-04',
    clock: { time: '12:50 AM' },
    text: `You walk her to her door. 9-04, with Simone\'s *Mummers: The Musical* poster on it and a whiteboard that says, in Simone\'s handwriting, *AT GRACE\'S. DON\'T ASK. DO NOT WAIT UP. — S.*

Jules reads the whiteboard. She reads it twice.

jules: Huh.

sam: Huh?

jules: Simone. And Grace. I *knew* it. I had it on the list. Number eleven.

She has her key out. She doesn\'t put it in the lock.

The hallway is quiet. Somebody\'s music, far away. The radiator ticking. The single pink paper heart on the lounge door at the end of the hall, *GRIEF IS A SOCIAL CONSTRUCT*.

She turns around and leans her back against her own door and looks at you.

jules: Sam.

sam: Yeah.

jules: I\'ve been sleeping in your bed for three weeks. In the dark. On top of the covers, half the time, like a guest. And you haven\'t once—

She stops. She starts again. She\'s blushing, and she\'s furious about blushing, and she doesn\'t look away.

jules: I want you to come in. Not to sleep. I want—

She stops again.

jules: I\'m very bad at this. I\'ve been bad at things all week. I got a seventy-one. I fell down in front of half of Philadelphia. This is worse. I\'ve never had to *ask*. Things just went my way.

jules: I\'m asking.`,
    choices: [
      { text: 'Go in.', tag: 'Go in',
        fx: g => { g.flag('first6', 'yes'); g.bond('jules', { affection: 2, trust: 1, tension: -4 }); g.hidden('revenant_drift', -1); }, go: 'a3_night' },
      { text: '"Not tonight. Not because I don\'t want to. Because I want it to be the night it\'s only that." Kiss her goodnight.', tag: 'Not yet',
        fx: g => { g.flag('first6', 'wait'); g.bond('jules', { respect: 1, tension: 1 }); }, go: 'a3_wait' }
    ]
  },

  a3_night: {
    night: true,
    loc: 'CARDONE HALL · 9-04',
    enter: g => { g.know('first_night', ['sam', 'jules'], 'Valentine\'s Day, 2027, in 9-04, after the rink. The first time.'); },
    text: `She lets you in.

Her side of the room is exactly what you\'d think. Books in order by height. A desk with nothing on it. The camel coat on a wooden hanger on the back of the closet door, buttoned to the collar, even on a hanger. Simone\'s side looks like a costume shop exploded in it, sequins on everything, a feather boa on the lamp.

Jules turns off the lamp. Then she stops with her hand on it.

jules: Is that okay? The dark?

sam: It\'s your dark. I just live here.

She laughs. Her hand is shaking a little. So is yours.

Your jacket zipper sticks. She fixes it, frowning, with both hands. Then she starts on the rest of you with exactly the same frown. You bang your knee on the bed frame and say a word you don\'t say in front of Nonna. She stops in the middle of a kiss to say, very seriously, *Wait. Are you sure?* You say *Yes.* She says *Good.* You say *Are YOU sure?* and she laughs so hard the bed knocks the wall, and somebody in 9-06 knocks back.

Her hands are warm. Yours are cold. Every time you touch her she flinches and laughs and says *Kearney, your hands*, and then pulls them back to her, and holds them there, on her skin, until they\'re not cold anymore. It takes a while. She doesn\'t mind the while.

There\'s a bruise coming up on her hip from the ice, the size of a plum. She takes your hand and puts it there. *Feel that,* she says. *That\'s mine.* The first one she\'s ever had. You\'re careful of it. She tells you not to be.

She finds the white at your temple by touch, in the dark, and doesn\'t ask about it. She just keeps her hand there.

You run out of jokes somewhere around then. You don\'t miss them.

At some point, in the dark, she goes very still.

sam: What?

jules: I\'m checking.

sam: Checking what?

jules: If it\'s going my way. If I\'m *doing* it. The luck. I don\'t want this to be luck. I want this to be exactly as good or as bad as it actually is.

sam: And?

A pause. You can feel her listening to herself, holding her breath, letting it out.

jules: I\'m not doing anything.

sam: Okay.

jules: It\'s just us.

sam: Okay.

jules: *Sam*. It\'s just *us*.

And it is. It\'s clumsy, and then it isn\'t. It\'s slow, because she wants to know what everything is and says so, precisely, out loud, and then it isn\'t slow at all, and neither of you is saying anything precise.

After, she lies with her head on your chest, in the dark, in a narrow dorm bed built for one person, with Simone\'s feather boa throwing faint shadows from the window, and taps on your ribs with one finger. Slow. It takes you a while to understand she\'s counting. She gets to ninety. She stops. Nothing lets go. She doesn\'t seem to mind.

jules: Your heart is very slow.

sam: I\'ve been told.

jules: I like it. It\'s like listening to someone walk home.

She falls asleep first. In the dark. Without asking for the light.

You lie there and listen to her breathe, and for the first time since the bottom step at the Navy Yard, you don\'t count.`,
    next: 'a4_sunday'
  },

  a3_wait: {
    night: true,
    loc: 'CARDONE HALL · 9-04',
    text: `sam: Not tonight.

Her face starts to close. You catch it before it does.

sam: Not because I don\'t want to. God. Jules. Look at me. I want to so bad I can\'t see straight.

She looks at you.

sam: It\'s just—three weeks ago we were at the bottom of a dry dock. Tonight\'s the first night since that\'s been just us. I don\'t want the first time to be the night we finally got okay. I want it to be its own night. Nothing else in it. No Teddy. No him. Just us.

She considers it. You can watch her check the work.

jules: That\'s very annoying.

sam: I know.

jules: It\'s also correct. Which is more annoying.

She puts her key in the lock. Then she turns back and kisses you, long, against her own door, under the whiteboard that says *DO NOT WAIT UP*, until somebody down the hall opens a door and closes it again very fast.

jules: Soon, Kearney.

sam: Soon.

jules: I\'m going to hold you to that. I\'m going to hold you to it *precisely*.

She goes in. You stand in the hallway for a minute with your forehead against her door, and from the other side, very quietly, you hear her laugh.`,
    next: 'a4_sunday'
  }
});
