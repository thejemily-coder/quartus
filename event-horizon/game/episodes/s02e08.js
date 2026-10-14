/* S2 · E8 · MA, part 1 of 4: meta, cold open, Act One ("Sunday"). */
EH.episode({
  id: 's02e08', season: 2, number: 8, title: 'Ma', look: 's2',
  cast: ['sam', 'rosa', 'nonna', 'frank', 'mikey', 'gigi', 'jules', 'simone', 'vinnie'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Jules played cards for Bruno Iannucci. For Pier 53.',
    g.f('paid7') ? 'Pop\'s debt to the Iannuccis is paid.' : g.f('split7') ? 'A split pot. Pop\'s debt is half paid. Bruno wants to see her play again.' : 'Somebody paid for the pier.',
    'Hugh came to Cardone Hall. Now the handkerchief is gone from Jules\'s coat.' + (g.f('note6') === 'told' ? ' So is the card.' : ''),
    'Ma has known something was wrong since the fall. She has white in her own hair now, from worrying about the white in yours.',
    g.f('pop7') === 'safe' ? 'Ma wants you home Sunday. Alone.' : 'At Jefferson, Ma looked at your hair. "Salvatore. Outside. Now."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'BOATHOUSE ROW · THE SCHUYLKILL',
      clock: { day: 'Sun', date: 'Jan 19, 1964', time: '3:12 PM' },
      text: `> THE CAMERA.

January 1964. Boathouse Row in black and white, or close to it: gray sky, gray ice, the old boathouses with their gingerbread trim and no lights on them yet, because nobody has thought of that yet.

The river is frozen from bank to bank. Kids are on it. They\'re not supposed to be. There\'s a sign. There\'s always a sign.

On the bank, two women in black coats. One is sixty-one, small, with gray hair under a kerchief and a string bag of oranges from the Italian Market. The other is nineteen, dark, sharp-faced, carrying nothing, with her hands jammed in her pockets against the cold.

TERESA: Mamma, we\'ll miss the trolley.

ASSUNTA: Aspetta.

The older woman has stopped walking. She\'s looking at the ice. At a boy, six or seven, in a heavy wool coat, sliding out toward the middle, toward the dark place where the ice is thin over the current, while his friends yell at him from the bank.

ASSUNTA: *(quietly, in Italian)* Teresa. Count for me.

TERESA: Count what?

The ice opens.

There\'s no crack. No sound. One second the boy is there, and the next there\'s a black hole in the white, and his friends are screaming, and the girl on the bank opens her mouth to scream too—

And the bells stop.

Not church bells. *All* of them. The trolley bell on the Parkway. The bell on the boathouse door. The little bell on the Good Humor truck parked on East River Drive in January for no reason. The wind stops. The scream stops in the girl\'s throat.

Teresa can still move her eyes. Only her eyes. She watches her mother put down the bag of oranges, very carefully, on the frozen grass. Watches her walk out onto the ice, not running, walking, like a woman crossing her own kitchen, to the black hole, and kneel, and put both arms in up to the shoulders.

One. Teresa counts. She doesn\'t know why. Two. Three.

On the road behind them, on East River Drive, a long black car has stopped. A young woman in the back seat with the window down, in a fur collar, blonde, twenty-one or so, is also not moving. Except her eyes. Her eyes are on Assunta.

Nine. Ten.

Assunta comes back across the ice with a boy in her arms, soaking, blue, coughing, and sets him down on the grass beside the oranges.

The bells start.

The friends are still screaming. The girl on the bank finishes her scream. The boy\'s mother is running down from the drive with her arms out.

And Assunta DiNardo is sitting on the frozen grass beside her oranges with her hands bleeding from the ice, and when she looks up at her daughter, Teresa sees it. In one minute, in ten seconds, her mother has gotten older. The lines by her eyes. A new gray at her temple.

ASSUNTA: You counted?

TERESA: Ten.

ASSUNTA: Good. You\'ll always count. That\'s what we do. We count.

She picks up her oranges.

ASSUNTA: The men go in. The women count. Remember that, when it\'s your turn. Remember it when it\'s your daughter\'s turn.

Behind them, on East River Drive, the window of the black car goes up. The car pulls away.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_sunday' },

    /* ================= ACT ONE: SUNDAY ================= */
    a1_sunday: {
      card: { kind: 'act', label: 'Act One', title: 'Sunday' },
      loc: 'MIFFLIN STREET · THE KITCHEN',
      clock: { day: 'Sun', date: 'Mar 14', time: '2:00 PM' },
      enter: g => { g.sleep(7); },
      text: g => `Sunday. Alone, she said. So you come alone.

The house on Mifflin Street smells like gravy. It always smells like gravy on Sunday, from nine in the morning, the pot on the back burner, the wooden spoon standing up in it like a flag.

But nobody else is here.

Pop\'s cab isn\'t out front. Gigi\'s sneakers aren\'t by the door. Nonna\'s chair on the stoop is empty, with her cushion on it. The house is so quiet you can hear the clock over the stove, the one that\'s been five minutes fast since 1998, ticking.

Ma is at the kitchen table. Not at the stove. *At the table*, sitting down, with her hands folded in front of her on the oilcloth, in her good blouse, like she\'s waiting for a parent-teacher conference.

There\'s a second chair pulled out across from her.

rosa: Sit.

You sit.

rosa: I sent your father to the Phillies spring training thing at the Linc with Mikey. I sent Gigi to the Iacobuccis. I sent your grandmother upstairs, and I told her if she comes down I\'ll put her in a home, and she laughed at me, and she went.

She looks at you.

rosa: I\'m going to ask you something, Salvatore. And before I ask, I\'m going to tell you something, so you know what kind of question it is.

The clock over the stove ticks.

rosa: On August twenty-second, at 11:51 at night, I was standing at that sink. Washing the big pot. And the clock stopped. That clock. And the water stopped coming out of the faucet. It hung there. Like glass. For one second.

rosa: And I knew it was you.

She doesn\'t blink.

rosa: I didn\'t know what I knew. I just knew. The way I knew you were coming home from the shore a day early when you were eleven, and I made your bed. The way I knew Mikey was hurt in Afghanistan two days before they called. My mother knows things like that. Her mother knew things like that. We *count*, the women in this family. We always know when the clocks stop.

rosa: Since August, the clocks have stopped in this house eleven times. I wrote them down. Every one. On the calendar from St. Monica\'s.

She takes a folded calendar page out of her blouse pocket and puts it on the oilcloth between you. Little red marks. *Aug 22. Aug 29. Sep 19.* All the way down. *Nov 26.* A red circle around that one, gone over so many times the pen tore the paper.

rosa: Thanksgiving. The parade. You came home with white in your hair.

rosa: So here\'s my question.

She leans forward.

rosa: Are you the Blur?

It\'s not *are you okay*. It\'s not *what\'s going on*. It\'s a question you can only answer two ways.

And you remember Nonna in the doorway, a month ago, with her small dry hand on your wrist: *Soon she asks you a question you can\'t answer with no.*`,
      choices: [
        { text: '"Yeah, Ma." Tell her. All of it, from the bus on Broad Street. Look at her while you do it.', tag: 'Tell her',
          fx: g => { g.flag('ma8', 'told'); g.heat('rosa', 10 - g.h('rosa')); g.know('sam_slip', ['rosa']); g.bond('rosa', { trust: 3 }); g.hidden('revenant_drift', -1.5); }, go: 'a1_told' },
        { text: 'Don\'t tell her. Show her. Right here. The clock will stop. She\'ll see you move.', tag: 'Show her', slip: true,
          fx: g => { g.flag('ma8', 'shown'); g.heat('rosa', 10 - g.h('rosa')); g.know('sam_slip', ['rosa']); g.bond('rosa', { trust: 2 }); }, go: 'a1_shown' },
        { text: '"No, Ma." One more time. You can\'t. Not to her.', tag: 'No',
          fx: g => { g.flag('ma8', 'lied'); g.heat('rosa', 10 - g.h('rosa')); g.know('sam_slip', ['rosa']); g.bond('rosa', { trust: -3 }); g.hidden('revenant_drift', 1); }, go: 'a1_lied' }
      ]
    },

    a1_told: {
      loc: 'MIFFLIN STREET · THE KITCHEN',
      text: `sam: Yeah, Ma.

You tell her.

The bus at Broad and Spring Garden. A kid in the street. The cold. Girard and the frost on your sneakers. Kensington, the fire on 15th Street, the Wawa. Under I-95. Pop on his knees and the men with the bat. The Parkway. The darts. Building 7. Teddy, on the bottom step, with his arm in the water.

You don\'t tell her everything. Not the man with your face. Not the card. Not Bruno\'s envelopes, not yet. But you tell her the shape of it, and you tell it looking at her, and she doesn\'t look away once.

When you get to Teddy, she puts her hand over her mouth.

When you stop, the clock over the stove says 3:20. You\'ve been talking for an hour and twenty minutes.

She doesn\'t say anything for a while.

Then she gets up. She goes to the stove. She stirs the gravy. She taps the wooden spoon on the side of the pot, twice, the way she\'s done ten thousand times.

She puts the spoon down.

She comes back around the table and takes your face in both hands, the way she did at the door in February, and looks at the white in your hair.

rosa: You\'re eighteen years old.

sam: I know.

rosa: You\'re eighteen years old and you have gray hair, and a dead friend, and you carried your father out from under a highway.

Her hands are shaking.

rosa: And you did it by yourself. Since August. And you didn\'t tell your *mother*.

And that\'s when she cries. Not before. Not at the bus or the Parkway or Teddy. At *that*.`,
      next: 'a1_who'
    },

    a1_shown: {
      loc: 'MIFFLIN STREET · THE KITCHEN',
      enter: g => { g.unstick('unstick_s2e8', 'Time debt (the kitchen)'); g.know('rosa_saw', ['sam', 'rosa'], 'You Slipped in the kitchen on Mifflin Street so Ma could see. She watched. She counted to nine.'); },
      text: g => `You don\'t say anything. You look at the clock over the stove.

Then you step through.

${g.f('assunta_watch') ? 'The cold. The watch in your pocket, ticking, the only sound.' : 'The cold.'} The kitchen, stopped. The steam over the gravy pot hanging in the air like a gray cloth. The clock\'s second hand, frozen between the four and the five.

And Ma.

Ma, frozen at the table, leaning forward, in her good blouse.

Except her eyes.

Her eyes are moving. They\'re *following you.* You stand up from your chair and her eyes come up with you. You walk around the table, and her eyes come around too, the way Teresa\'s did on the riverbank, in a story nobody ever told you.

You stand beside her. You take the wooden spoon out of the gravy and put it in her hand, on the table, and fold her frozen fingers around it.

${g.f('assunta_watch') ? 'You find the door by the sound of the watch, and step back through.' : 'You claw your way out.'}

The clock ticks. The steam moves. Ma looks down at the wooden spoon in her hand, dripping gravy onto the oilcloth.

rosa: Nine.

sam: What?

rosa: I counted. Nine seconds. That\'s how long you were gone.

She looks at the spoon. Then at you. At the blood starting at your nose. ${g.unsticks() ? 'At the frost on your sneakers.' : ''}

rosa: I could see you. I couldn\'t move, and I could see you. My *eyes* could move.

She puts the spoon down very carefully.

rosa: My mother told me about that. When I was a little girl. I thought she was telling me a fairy story.

She takes a dish towel off her shoulder and holds it to your nose, the way she\'s done since you were four and got hit in the face with a wiffle ball.

rosa: Hold that. Tilt your head forward, not back, *forward*, I\'m a nurse, Salvatore.

And then she cries, holding the towel to your face. Not at what she saw. At the blood.`,
      next: 'a1_who'
    },

    a1_lied: {
      loc: 'MIFFLIN STREET · THE KITCHEN',
      text: `sam: No, Ma.

The clock ticks.

Ma looks at you for a long moment across the oilcloth.

Then she nods. Slowly. She folds the calendar page up again and puts it back in her blouse pocket.

rosa: Okay.

sam: Ma—

rosa: No. That\'s fine. That\'s your answer.

She gets up and goes to the stove and stirs the gravy.

rosa: I know you are, Salvatore. I\'ve known since August. I didn\'t need you to tell me *what*. I needed you to tell me *at all*. I needed to know that if I asked you to your face, at my own table, you would trust your mother.

She taps the spoon on the side of the pot. Twice.

rosa: Now I know.

She doesn\'t turn around.

You sit at the table. The clock over the stove is five minutes fast, and it has been since 1998, and right now you\'d give anything for it to stop.

sam: *(finally)* Yeah, Ma. I\'m the Blur.

She doesn\'t turn around.

rosa: I know you are, baby. I asked you first.`,
      next: 'a1_who'
    },

    a1_who: {
      loc: 'MIFFLIN STREET · THE KITCHEN',
      clock: { time: '4:10 PM' },
      text: g => `Later. The gravy\'s on low. She\'s made you eat a meatball standing up at the stove, because you\'re too skinny, because some things don\'t change because your son can stop time.

She\'s washing a pot that doesn\'t need washing.

rosa: Who else knows?

You don\'t answer fast enough.

She turns off the water.

rosa: Salvatore. Who else in this family knows?

${g.f('pop_knows') ? 'Pop knows. You told him, under the highway, or he saw. Mikey knows. Mikey\'s known since the fall. Nonna\'s known since before you did.' : 'Mikey knows. Nonna\'s known since before you did.'}

And Ma is standing at the sink, the last one in the house to be told, with her hands dripping.`,
      choices: [
        { text: 'Tell her the truth. All of them. Pop, Mikey, Nonna. She\'s going to find out anyway, and she should hear it from you.', tag: 'All of them',
          fx: g => { g.flag('who8', 'all'); g.bond('rosa', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_who_all' },
        { text: '"Just Nonna. She felt it. She always feels it." Keep Pop and Mikey out of it. They kept your secret. Keep theirs.', tag: 'Just Nonna',
          fx: g => { g.flag('who8', 'nonna'); g.bond('frank', { trust: 1 }); g.bond('mikey', { trust: 1 }); }, go: 'a1_who_nonna' }
      ]
    },

    a1_who_all: {
      loc: 'MIFFLIN STREET',
      enter: g => { g.know('rosa_family', ['sam', 'rosa', 'frank', 'mikey', 'nonna'], 'Ma knows everyone in the family knew before she did. Pop, Mikey, Nonna. She was the last.'); },
      text: g => `sam: Pop knows. Mikey knows. Nonna knows. ${g.knows('sam_slip', 'jules') ? 'And Jules.' : ''}

Ma stands at the sink for a long time.

rosa: Your father.

sam: Ma, it\'s not his—

rosa: Your *father*, who can\'t keep a surprise party secret, who told me what he got me for Christmas in 1997 on Christmas *Eve* because he couldn\'t stand it. Your father knew.

She dries her hands on the towel over her shoulder. Very slowly.

At six-thirty, Pop and Mikey come home from the Linc with Gigi, all three of them in red, Gigi with a foam finger. They come in loud.

They stop in the doorway of the kitchen.

Ma is sitting at the table. You\'re sitting across from her. Nonna has come down and is sitting at the end, in her black cardigan, with her hands folded, like the judge.

Pop looks at Ma\'s face. He looks at yours. He takes off his Phillies cap.

frank: Ro.

rosa: Gianna. Go upstairs.

gigi: *What?* Why? What happened? What did Sammy—

rosa: *Upstairs*, Gianna Rose.

Gigi goes. You hear her stop on the third step, the one that creaks, to listen. You hear Mikey say *Gigi* without turning around, and you hear her go the rest of the way.

Mikey stands in the doorway with the foam finger in his hand.

mikey: Ma—

rosa: Since when.

mikey: Since the fall.

rosa: *October.* And you, Francis?

Pop sits down heavily. He looks at his hands.

frank: Under 95. He carried me, Ro. I saw him do it. I didn\'t know what I saw. I didn\'t want to know.

rosa: And you didn\'t tell me.

frank: He asked me not to.

rosa: He\'s *eighteen*.

And for the first time in your whole life, you watch your father put his face in his hands at the kitchen table on Mifflin Street, and not take it out.`,
      next: 'a2_nonna'
    },

    a1_who_nonna: {
      loc: 'MIFFLIN STREET',
      enter: g => { g.know('rosa_nonna', ['sam', 'rosa', 'nonna'], 'You told Ma that only Nonna knew. You kept Pop and Mikey out of it.'); },
      text: `sam: Just Nonna. She felt it. She always feels it.

Ma looks at you for a long moment. She knows. You can see she knows. She\'s a school nurse; she has heard ten thousand children say *just me*.

rosa: Okay.

She lets you have it. That\'s worse, somehow, than if she\'d fought.

At six-thirty, Pop and Mikey come home from the Linc with Gigi, all three of them in red, Gigi with a foam finger. They come in loud.

They stop in the doorway of the kitchen.

Ma is at the stove. You\'re at the table. Nonna has come down and is sitting at the end, in her black cardigan, with her hands folded, like the judge.

Pop looks at Ma\'s back. Then at you. At the calendar page on the oilcloth with the red marks.

He takes his Phillies cap off.

frank: Ro.

rosa: Sit down, Frank. Eat. It\'s Sunday.

She doesn\'t turn around. She stirs the gravy.

Dinner is the quietest dinner in the history of the house on Mifflin Street. Gigi talks for a while about the game, and then stops, because nobody answers. Mikey looks at you twice. Pop doesn\'t look at anybody.

Nonna watches all of it from the end of the table, eating her macaroni very slowly, and after dinner, when Ma is at the sink and the men are in front of the TV not watching it, she catches your wrist in the hallway.`,
      next: 'a2_nonna'
    }
  }
});
