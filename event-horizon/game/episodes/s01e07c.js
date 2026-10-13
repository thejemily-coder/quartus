/* S1 · E7 · DEBT SERVICE, part 3 of 3: Act Four ("Covering"), tag ("Monday"), polls. */
EH.scenes('s01e07', {

  /* ================= ACT FOUR: COVERING ================= */
  a4_covering: {
    card: { kind: 'act', label: 'Act Four', title: 'Covering' },
    night: true,
    loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
    clock: { day: 'Sun', date: 'Oct 18', time: '1:12 AM' },
    enter: g => { g.flag('jules_covered'); g.know('jules_covered', ['sam', 'jules', 'rosa'], 'While Sam was under I-95, Rosa called Jules. Jules told her Sam had fallen asleep on the lounge couch with his calculus book on his face, and that she\'d put a blanket on him.'); },
    text: g => `The lounge light is still on.

She\'s still there. At the big table, with the index cards and the thermos and the problem sets in their grid. She\'s got her cardigan pulled around her and her feet up on the chair you were sitting in, and she\'s doing problem set nine, by herself, at one in the morning, in pencil.

She looks up when you come in. She looks at you from your sneakers to your hair. ${g.hurt('split_brow7') ? 'At the split eyebrow, crusted over.' : ''}${g.hurt('cracked_ribs7') ? ' At the way you\'re holding your side.' : ''}${g.hurt('hypothermia7') ? ' At your lips, which you know are blue, because Nik screamed when he saw them in the stairwell.' : ''}${!g.hurt('split_brow7') && !g.hurt('cracked_ribs7') && !g.hurt('hypothermia7') ? 'You\'re fine. Not a scratch. You watch her notice that, and not know what to make of it.' : ''}

She doesn\'t ask if you\'re okay.

jules: Your mother called me.

sam: …What?

jules: At 10:40. She got my number from your sister, who got it from me, at dinner, because I gave her my number and told her she could text me about Main Line horse culture, which she has, eleven times.

She puts the pencil down.

jules: Your mother said she\'d called you four times and you didn\'t answer. She said she had a *feeling*. She said, *Is he with you, sweetheart?*

sam: What\'d you say?

jules: I said yes.

She says it simply. Like it\'s a calculus answer.

jules: I said you were right here. I said you\'d fallen asleep on the lounge couch with your calculus book on your face, and that you were snoring, and that I\'d put a blanket on you. She asked me to take a picture. I told her I didn\'t want to wake you with the flash.

She looks at you.

jules: She said *thank you, Jules. You\'re a good girl. Make sure he eats.*

You stand there in the lounge doorway.

jules: I\'ve never lied to a mother before. Other people\'s mothers. I lie to mine all the time; it\'s practically a sport. But I\'ve never lied to someone else\'s mother, in her voice, while she was *worried*.

She picks the pencil back up. She doesn\'t write anything.

jules: It was very easy. I didn\'t like how easy it was.`,
    choices: [
      { text: '"Thank you." Sit down across from her. "I owe you."', tag: 'Thank her',
        fx: g => { g.flag('cover7', 'thanks'); g.bond('jules', { affection: 1 }); }, go: 'a4_owe' },
      { text: '"Why did you do that?"', tag: 'Why',
        fx: g => { g.flag('cover7', 'why'); }, go: 'a4_why' }
    ]
  },
  a4_owe: {
    night: true,
    text: g => `sam: Thank you. I owe you.

You sit down across from her, in your chair, the one her feet were on. She moved them when you came in. You don\'t know when.

jules: You already owe me a favor.

sam: Then I owe you two.

jules: You can\'t owe two favors. That isn\'t how favors work.

sam: How do favors work?

jules: You owe one. And you live in fear of it. That\'s the whole point.

${g.knows('owe_jules_favor') ? 'She doesn\'t smile, but something at the corner of her mouth goes off duty for a second.' : ''}

She slides an index card across the table to you, face down.

jules: You said you\'d tell me. The nine things.`,
    next: 'a4_nine'
  },
  a4_why: {
    night: true,
    text: `sam: Why did you do that?

She looks at you like you\'ve asked her why the sky is up.

jules: Because she was scared. And because you\'d gone somewhere, and I didn\'t know where, and I didn\'t know if you were coming back, and if you didn\'t come back, I wasn\'t going to be the person who\'d told her.

She stops. She hears herself.

jules: And because I wanted to. That\'s the honest answer. I wanted to be on your side of something, just once, and not just watching it.

She looks down at her problem set.

jules: That\'s not a good reason. I\'m aware.

sam: It\'s the best reason anyone\'s ever had for anything.

jules: You\'re very tired.

sam: I\'m very tired.

She slides an index card across the table to you, face down.

jules: You said you\'d tell me. The nine things.`,
    next: 'a4_nine'
  },

  a4_nine: {
    night: true,
    text: g => `You turn the card over. It\'s blank.

jules: Write them down. If you can\'t say them.

${g.f('bail') === 'text' ? 'You promised her. You promised her all nine.' : 'You never promised her anything. She\'s asking anyway.'}

You pick up her pencil. It\'s warm from her hand.

You think about the nine things you typed and deleted at 1:09 in the morning two weeks ago. *what do you mean.* *are you okay.* *then id want to know why you keep coming back to the ninth floor.* ${g.f('typed') === 'hope' ? '*i hope it is*, three times, and three times backward.' : ''}

You think about what she meant. You still don\'t know what she meant. *What if it was me.* What if it was her who what?

You think about the footprints in the frost${g.f('unstick') ? ' at the edge of the stopped river' : ''}. You think about Dante\'s interested face. You think about the people who know about you, and how many of them were on their knees on the gravel tonight.`,
    choices: [
      { text: 'Write: *I hope it is.* Slide it back.', tag: 'I hope it is',
        fx: g => { g.flag('nine', 'hope'); g.bond('jules', { affection: 2, trust: 1 }); g.know('i_hope_it_is', ['sam', 'jules'], 'At 1:30 a.m. in the lounge, you wrote on an index card for Jules: "I hope it is." In answer to "What if it was me."'); }, go: 'a4_nine_hope' },
      { text: 'Write: *What did you mean?* Slide it back.', tag: 'Ask',
        fx: g => { g.flag('nine', 'ask'); g.bond('jules', { trust: 1 }); }, go: 'a4_nine_ask' },
      { text: 'Write nothing. Turn the card over and do problem nine with her, in pencil, until it\'s light out.', tag: 'Problem nine',
        fx: g => { g.flag('nine', 'nine'); g.grade('calc', 3); g.bond('jules', { affection: 1 }); }, go: 'a4_nine_nine' }
    ]
  },
  a4_nine_hope: {
    night: true,
    text: `You write it. Four words, in pencil, on an index card at 1:30 in the morning in the ninth-floor lounge.

*I hope it is.*

You slide it back across the table.

She reads it. She reads it for a long time. She doesn\'t ask what it means. She doesn\'t ask what it\'s answering. She knows exactly what it\'s answering. You can see it on her face: you can see her realize that you don\'t know what her question meant either, and that you answered it anyway, the way you answer everything, by running straight at it.

She puts the card in her cardigan pocket. The one over her heart. She doesn\'t say anything.

Then she reaches across the table and takes the pencil out of your hand, and her fingers are cold, and she holds onto your hand for one second longer than it takes to get a pencil.

jules: Problem nine. You\'re going to fail it on Monday if you don\'t.

sam: Pemberton.

jules: Problem nine, Sam.

You do problem nine. Her foot finds yours under the table. Neither of you moves it.`,
    next: 'tag_monday'
  },
  a4_nine_ask: {
    night: true,
    text: `You write it. *What did you mean?*

You slide it back.

She reads it. She looks at it for a long time. Then she turns it over and writes on the back, and slides it back to you.

*I don\'t know yet.*

And under that, smaller:

*When I know, you\'ll be the first.*

You look at her. She\'s looking at the problem set, very hard.

jules: That\'s not an answer. I know. It\'s the only one I\'ve got.

sam: It\'s a good answer.

jules: It\'s a terrible answer. Problem nine.

You do problem nine. Around three, she falls asleep sitting up with her cheek on her fist, and you take the blanket off the back of the couch, the one she told your mother she\'d put on you, and you put it on her.`,
    next: 'tag_monday'
  },
  a4_nine_nine: {
    night: true,
    text: `You don\'t write anything. You turn the card back over, blank side down, and pull problem set nine toward you, and pick up her pencil.

sam: Number one.

She looks at you. For a second you think she\'s going to say something. Then she pulls her chair around the table so she\'s next to you, shoulder to shoulder, looking at the same page.

jules: You\'re doing it wrong already.

sam: I haven\'t *started*.

jules: You\'re holding the pencil wrong.

You do problem set nine together, all fourteen problems, in pencil, until the window over the lounge couch goes gray. Neither of you says anything about the text. Neither of you says anything about anything. Her shoulder is against yours the whole time.

It isn\'t an answer. It\'s something better than an answer. You think she knows that. You think that\'s why she let you.`,
    next: 'tag_monday'
  },

  /* ================= TAG ================= */
  tag_monday: {
    card: { kind: 'tag' },
    loc: 'WACHMAN HALL · ROOM 413',
    clock: { day: 'Mon', date: 'Oct 19', time: '9:00 AM' },
    enter: g => { g.sleep(5); },
    text: g => `The Calc midterm is ten problems in ninety minutes, and Jules sits two rows ahead of you, and doesn\'t look back once, and you can feel her not looking back the whole time.`,
    choices: [
      { text: 'Take the test. Problem one. You know this.', tag: 'Midterm',
        check: { kind: 'd20', attr: 'wits', skill: 'study', dc: 13, bonus: 0, label: 'Calc midterm', on: { crit: 'tag_mid_good', success: 'tag_mid_good', fail: 'tag_mid_bad', fumble: 'tag_mid_bad' } } }
    ]
  },
  tag_mid_good: {
    enter: g => { g.grade('calc', 8); g.flag('midterm', 'pass'); },
    text: g => `You know it. You actually know it. Problem seven is the chain rule wearing a hat, and you see through the hat.

When you hand it in, the TA looks at your paper and then at you, surprised, like a guy whose dog just did his taxes.

On your way out, Jules is waiting by the stairwell. She doesn\'t say *how\'d it go*. She just looks at your face, and reads it, and nods once.

jules: Told you.

${g.f('nine') === 'hope' ? 'Her hand goes to her cardigan pocket. The one over her heart. You don\'t think she knows she\'s doing it.' : ''}

At 2:10, your phone rings. **MIKEY.**`,
    next: 'tag_cab'
  },
  tag_mid_bad: {
    enter: g => { g.grade('calc', -4); g.flag('midterm', 'shaky'); },
    text: g => `You know some of it. You know more than you would have two weeks ago. But you slept five hours, and your ribs hurt, and problem seven is the chain rule in a disguise you don\'t see through until there are four minutes left.

When you hand it in, you\'re not sure. You\'re not sure of anything.

Jules is waiting by the stairwell. She reads your face.

jules: It\'s one test.

sam: I know.

jules: You\'ll be fine. You\'re going to retake the final with me every night for a week.

sam: Is that a threat?

jules: It\'s a *plan*.

At 2:10, your phone rings. **MIKEY.**`,
    next: 'tag_cab'
  },
  tag_cab: {
    night: false,
    loc: 'LIACOURAS WALK',
    clock: { time: '2:10 PM' },
    enter: g => { g.know('cab_smashed', ['sam', 'mikey', 'frank', 'rosa'], 'Monday morning, Pop\'s cab, Liberty 418, was found under I-95 at Delaware Ave with every window smashed. Pop says it was kids.'); },
    text: g => `mikey: Sammy. Hey. You sitting down?

sam: I\'m on Liacouras Walk.

mikey: Sit down on Liacouras Walk.

You don\'t sit down.

mikey: Pop\'s okay. I want to say that first. Pop\'s okay. He\'s at home. Ma\'s with him. He\'s okay.

sam: Mikey.

mikey: His cab got hit. Last night, or this morning, nobody knows. They found it at six a.m. under 95, at Delaware and Snyder, in that truck lot. Every window. *Every* window, Sammy. The windshield, the back, the sides. They didn\'t take anything. They didn\'t touch the radio, they didn\'t take the cash box. They just broke every piece of glass on it and left it there.

He breathes.

mikey: Pop says it was kids. Pop says he parked it there to take a leak and some kids from the projects must\'ve done it.

A long silence.

mikey: Pop doesn\'t park in truck lots under 95 to take a leak, Sammy. Pop drives eleven blocks home to take a leak. Pop\'s been driving a cab for twenty-six years and he\'s never once been anywhere near Delaware and Snyder at night.

You look at the trees on Liacouras Walk. They\'ve gone completely gold this week. People are walking under them in sweaters, laughing, carrying coffee.

${g.f('pop_knows') === true ? 'Pop knows about you now. Pop knows you were under 95. And he didn\'t tell Mikey that you were there. He told Mikey it was kids. *Don\'t make him choose.*' : 'Pop doesn\'t know you were there. Or he does, and he isn\'t saying.'}

mikey: He\'s lying to me. My own father\'s sitting in his kitchen with a cut lip, lying to my face, and I\'m a cop, and I can\'t do anything.

His voice changes. It goes low and careful, the way it goes when he\'s talking to somebody in the back of his patrol car.

mikey: Sammy. Do you know something?`,
    choices: [
      { text: '"No, Mike. I don\'t know anything." Lie to your brother.', tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['mikey'], label: 'Lie to Mikey', on: { strong: 'tag_end_lie', weak: 'tag_end_lie', miss: 'tag_end_lie_bad' } } },
      { text: '"Ask Pop about Dante Iannucci." Give him that much.', tag: 'Dante',
        fx: g => { g.flag('mikey7', 'dante'); g.know('dante', ['mikey']); g.know('pop_owes', ['mikey']); g.bond('mikey', { trust: 2 }); g.bond('frank', { tension: 2 }); }, go: 'tag_end_dante' }
    ]
  },
  tag_end_lie: {
    enter: g => { g.flag('mikey7', 'lied'); },
    text: `sam: No, Mike. I don\'t know anything.

A long silence on the line.

mikey: Okay.

*Okay.* He says it like everybody says it to you now.

mikey: Come home Sunday. Ma wants everybody home Sunday. She lit a candle the size of a fire hydrant. Nonna\'s lit three.

He hangs up.

You stand on Liacouras Walk under the gold trees with the phone in your hand, and you think about forty-one thousand dollars, and Thanksgiving, and a man in a beautiful jacket straightening your father\'s collar.

You think about every window in a yellow-and-green cab, broken, one at a time, carefully, so there\'d be nothing left. Not a robbery. Not a warning.

A message. *Everybody in this city ends up friends with my family, one way or the other.*`,
    end: true
  },
  tag_end_lie_bad: {
    enter: g => { g.flag('mikey7', 'caught'); g.bond('mikey', { tension: 2 }); },
    text: `sam: No, Mike. I don\'t—

Your hand is on your ear. He can\'t see it. He doesn\'t need to.

mikey: Sammy. You\'re doing the thing. I can *hear* you doing the thing.

You don\'t say anything.

mikey: Okay. Okay. So my father\'s lying to me, and my brother\'s lying to me, and my mother\'s lighting candles, and I\'m a cop on a task group with a guy in a polo shirt who asked for me by name.

His voice is very quiet.

mikey: Come home Sunday, Sammy. Everybody\'s coming home Sunday. And when you come home, you\'re gonna look at me.

He hangs up.

You stand on Liacouras Walk under the gold trees, and you think about every window in a yellow-and-green cab, broken one at a time, so there\'d be nothing left.`,
    end: true
  },
  tag_end_dante: {
    text: `sam: Ask Pop about Dante Iannucci.

The silence on the line is so long you check to see if the call dropped.

mikey: …Iannucci.

sam: Yeah.

mikey: *Bruno* Iannucci?

sam: His grandson.

mikey: How do *you* know that name, Sammy?

sam: Ask Pop. Not me. Pop.

You hear him breathe in and out, slowly, the way he taught you to breathe when you were eight and couldn\'t stop crying after a nightmare.

mikey: Okay. Okay. I\'m gonna ask him. Tonight.

A pause.

mikey: And then I\'m gonna ask *you*. Sunday. Everybody\'s coming home Sunday.

He hangs up.

You stand on Liacouras Walk under the gold trees, and you think about Pop saying *don\'t make him choose*. You think you just made him choose. You don\'t know yet what he\'s going to pick.`,
    end: true
  }
});

Object.assign(EH.episodes.s01e07, {
  polls: [
    { q: 'Under 95', opts: [
      { label: 'Talked Teddy down', pct: 41, if: g => g.f('under95') === 'teddy' },
      { label: 'Fought Dante\'s men', pct: 22, if: g => g.f('under95') === 'fight' || g.f('under95') === 'fight_lost' },
      { label: 'Asked Vinnie to get out of the car', pct: 19, if: g => g.f('vinnie_stood') },
      { label: 'Slipped', pct: 18, if: g => g.f('under95') === 'slip' }
    ] },
    { q: 'Pop, under the highway', opts: [
      { label: 'Showed him your face', pct: 58, if: g => g.f('pop_knows') === true },
      { label: 'Rode away', pct: 42, if: g => g.f('pop_knows') !== true }
    ] },
    { q: 'The index card', opts: [
      { label: '"I hope it is."', pct: 47, if: g => g.f('nine') === 'hope' },
      { label: '"What did you mean?"', pct: 21, if: g => g.f('nine') === 'ask' },
      { label: 'Problem nine', pct: 32, if: g => g.f('nine') === 'nine' }
    ] }
  ],
  onEnd: g => {
    g.recap('Pop owes the Iannucci family $41,000. Dante says: by Thanksgiving.');
    g.recap(g.f('teddy_quit') ? 'Teddy walked away from the job, and his mother\'s forty thousand dollars, for you.' : 'Under I-95, you got your father away from Dante\'s men.');
    g.recap('Jules lied to your mother for you.');
    g.recap('Monday morning, Pop\'s cab was found with every window broken.');
  }
});
