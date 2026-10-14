/* S2 · E8 · MA, part 2 of 4: Act Two ("The Women Count"). */
EH.scenes('s02e08', {

  /* ================= ACT TWO: THE WOMEN COUNT ================= */
  a2_nonna: {
    card: { kind: 'act', label: 'Act Two', title: 'The Women Count' },
    night: true,
    loc: 'NONNA\'S HOUSE · HER ROOM',
    clock: { time: '9:30 PM' },
    enter: g => { g.know('assunta_bruno', ['sam', 'rosa', 'nonna'], 'In January 1964, Assunta DiNardo pulled six-year-old Bruno Iannucci out of the Schuylkill ice at Boathouse Row.'); g.know('dinardo_women', ['sam', 'rosa', 'nonna'], 'Nonna: the DiNardo women count. When the clocks stop, their eyes still move. Assunta. Teresa. Rosa. "The men go in. The women count."'); g.know('constance_1964', ['sam', 'rosa', 'nonna'], 'Nonna: in January 1964, at Boathouse Row, a young blonde woman in a black car on East River Drive watched Assunta go into the ice. Her eyes moved too. "A Pemberton. I found out later."'); },
    text: g => `Three doors down, Nonna\'s room is at the top of the stairs at the front of her house, over her stoop, so she can hear the street. It smells like Jean Naté and candle wax. There\'s a crucifix, and a picture of Padre Pio, and a picture of Nonno in his Navy uniform, and on the dresser, in a frame, a photograph you\'ve never noticed: a small old woman in a kerchief, on a riverbank, in winter, with a bag of oranges.

Nonna sits on the edge of her bed. Ma sits in the chair by the window. You sit on the floor, the way you did when you were small and she told you stories about the old country that you found out later she\'d made up.

nonna: Now it\'s time.

She says it to Ma. Not to you.

nonna: I told my mother, Rosa. Your grandmother Assunta. I told her I\'d tell you when it was time. You were nine. You had a fever, a bad one, and the clock in the hall stopped, and you sat up in bed and said, *Mamma, the clock.* And I knew.

rosa: I remember the fever.

nonna: You don\'t remember the clock. I made sure.

She folds her hands.

nonna: The DiNardo women count. That\'s all. That\'s what we have. When the clocks stop, our eyes keep moving. Most of us can\'t do anything. Most of us can\'t go in. My mother could, God help her. The rest of us watch, and count, and remember.

nonna: The men go in.

She looks at you.

nonna: My brother Salvatore went in. Three children out of a fire on Arch Street. He came back old. He went in again. And again. Nobody counted for him. He wouldn\'t let us. He died at the Feast at thirty years old with his hair white, Salvatò, and I was sixteen, and I counted to eleven, and then he didn\'t get up.

Out in the hall, the clock ticks.

nonna: My mother went in once more after that. Only once. In 1964, at the Boathouse, for a little boy in the ice. I counted to ten. She came back older, with her hands bleeding from the ice. And she never went in again. Never. She said, *Teresa, I\'m done. Now I count.*

rosa: The little boy.

nonna: Bruno Iannucci.

Ma closes her eyes.

nonna: And there was a car. On the Drive. A black car, with a girl in the back seat. Blonde. Twenty, twenty-one. A fur collar. When the bells stopped, her eyes moved too. She watched my mother the whole way out and the whole way back. I saw her. And she saw me see her.

nonna: I found out later who she was. I made it my business. A Pemberton. From the Main Line.

You put your hand flat on the floor.

You think about a girl in a camel coat. A grandmother in a chapel with no cross. *Some families are lucky. Some are early.*

rosa: *Pemberton?* Salvatore. The girl. Jules.

sam: Her grandmother. Constance. She\'d be—

nonna: Eighty-four. Yes. I read the society pages, Salvatò. I\'m old, I\'m not dead.

She leans down and pinches your earlobe. Hard. You\'re eighteen and it still works.

nonna: Ask me what you want to ask me. I\'ll answer one. Then I\'m going to sleep. I\'m eighty-one.`,
    choices: [
      { text: '"How do I stop? Before I end up like him?"', tag: 'How to stop',
        fx: g => { g.flag('nonna8', 'stop'); g.know('nonna_stop', ['sam', 'rosa', 'nonna'], 'Nonna: Assunta stopped going in after 1964. "You stop when you let somebody count for you."'); g.hidden('revenant_drift', -1); }, go: 'a2_answer' },
      { text: '"The man under the streetlight. The one who cries. Who is he?"', tag: 'The man',
        fx: g => { g.flag('nonna8', 'man'); g.know('nonna_man', ['sam', 'rosa', 'nonna'], 'Nonna on the man under the streetlight: "He walks like my brother. He walks like you. He stands like a DiNardo man who never let anybody count."'); }, go: 'a2_answer' },
      { text: '"What happens to me? Honestly."', tag: 'What happens',
        fx: g => { g.flag('nonna8', 'fate'); g.know('nonna_fate', ['sam', 'rosa', 'nonna'], 'Nonna: Salvatore had his first white hair at twenty-five. "You have it at eighteen. You\'re going faster than he did."'); g.bond('nonna', { trust: 2 }); }, go: 'a2_answer' }
    ]
  },

  a2_answer: {
    night: true,
    loc: 'NONNA\'S HOUSE · HER ROOM',
    text: g => `${g.f('nonna8') === 'stop' ? `sam: How do I stop? Before I end up like him?

Nonna looks at you a long moment.

nonna: I asked my mother that, after the Feast. After Salvatore. She said: *You stop when you let somebody count for you.*

sam: What does that mean?

nonna: It means Salvatore went in alone. Every time. He never told anybody where he was going or what it cost. He came out and he carried it by himself, and every time he carried it, he got older. My mother, after the river, she let me count. She told me. Every time she *felt* it, every time she wanted to go in, she told me, and I counted with her, and she didn\'t go.

She pats your cheek.

nonna: It\'s not magic, Salvatò. It\'s just a family. You let somebody hold one end.` : g.f('nonna8') === 'man' ? `sam: The man under the streetlight. The one who cries. Who is he?

Nonna doesn\'t answer right away. She looks at the window, at the street, at the streetlight at the end of the block, which is on, and has nobody under it.

nonna: I don\'t know.

She says it simply. You believe her.

nonna: I know he walks like my brother. I know he walks like you. I know he stands the way a DiNardo man stands when he\'s been carrying something too long and doesn\'t know how to put it down.

nonna: I know he cries. I don\'t know who for.

She looks back at you.

nonna: The night after Halloween, I opened the window and I said to him, *Go home.* In Italian. He looked up at me. And he said, *I can\'t, Teresa. I don\'t have one.*

nonna: He knew my name, Salvatò. *Teresa.* The way my mother said it. Nobody alive says it like that.` : `sam: What happens to me? Honestly.

Nonna doesn\'t pretend. She never has.

nonna: Salvatore had his first white hair at twenty-five. I remember. I pulled it out for him at the kitchen table, and he laughed. He was dead at thirty.

She touches your temple.

nonna: You have it at eighteen. You\'re going faster than he did, Salvatò. Much faster.

Ma makes a sound by the window.

nonna: That\'s honest. You asked for honest. Now listen to the rest. He went faster every year because he went *alone*. You don\'t have to. Your mother is sitting right there. She can count. She\'s been counting since August. Let her.`}

Nonna lies back on her pillows. She closes her eyes.

nonna: Now go home, both of you, and fight. I can hear you wanting to. Go.`,
    next: 'a2_terms'
  },

  a2_terms: {
    night: true,
    loc: 'MIFFLIN STREET · THE STOOP',
    clock: { time: '10:40 PM' },
    text: g => `You end up on the stoop, the two of you. Ma in her cardigan with her arms crossed. You on the top step. The streetlight at the end of the block is on, and there\'s nobody under it.

Mifflin Street at night in March. Somebody\'s TV through a window. Somebody\'s dog. The smell of the Delaware when the wind\'s right.

rosa: I want you to stop.

sam: Ma.

rosa: I\'m not stupid, Salvatore. I know what I\'m asking. I know there are people who\'d be dead. That boy on the Parkway. Your father. I *know*. And I want you to stop anyway, because I\'m your mother, and that\'s my job, to want things I can\'t have.

She looks at the streetlight.

rosa: So tell me what you can promise me. Not what I want. What you can actually *do*.`,
    choices: [
      { text: '"I\'ll tell you. Every time. Before, if I can. After, if I can\'t. You count. I\'ll let you count."', tag: 'You count',
        fx: g => { g.flag('terms8', 'count'); g.bond('rosa', { trust: 3, affection: 2 }); g.hidden('revenant_drift', -2); g.know('rosa_counts', ['sam', 'rosa'], 'You promised Ma: every time you Slip, you tell her. Before if you can, after if you can\'t. She counts.'); }, go: 'a2_terms_end' },
      { text: '"I\'ll stop. Unless somebody\'s going to die. Only then."', tag: 'Only then',
        fx: g => { g.flag('terms8', 'only'); g.bond('rosa', { trust: 2 }); g.hidden('revenant_drift', -1); g.know('rosa_only', ['sam', 'rosa'], 'You promised Ma you\'d stop Slipping unless somebody was going to die.'); }, go: 'a2_terms_end' },
      { text: '"I can\'t promise anything, Ma. I won\'t lie to you again. That\'s all I\'ve got."', tag: 'No promises',
        fx: g => { g.flag('terms8', 'none'); g.bond('rosa', { respect: 2 }); }, go: 'a2_terms_end' }
    ]
  },

  a2_terms_end: {
    night: true,
    loc: 'MIFFLIN STREET · THE STOOP',
    text: g => `${g.f('terms8') === 'count' ? `sam: I\'ll tell you. Every time. Before, if I can. After, if I can\'t. You count. I\'ll let you count.

Ma doesn\'t say anything for a while.

rosa: That\'s what my mother made my grandmother promise.

sam: Yeah?

rosa: And my mother made my *father* promise it, about the shipyard, about the drinking. *You tell me. Every time.* He did, mostly. He lived to be eighty.

She uncrosses her arms.

rosa: Okay. I\'ll take it. I\'ll take it in writing, like your girlfriend. I heard about that.` : g.f('terms8') === 'only' ? `sam: I\'ll stop. Unless somebody\'s going to die. Only then.

rosa: Somebody\'s always going to die, Salvatore. That\'s Philadelphia.

sam: Ma.

rosa: No. I\'ll take it. I know what it is. It\'s a promise with a door in it. Your father\'s whole life is promises with doors in them.

She sighs.

rosa: Just tell me after. When you go through the door. You owe me that.` : `sam: I can\'t promise anything, Ma. I won\'t lie to you again. That\'s all I\'ve got.

She laughs. It surprises both of you.

rosa: That\'s the most DiNardo thing anybody\'s said on this stoop since 1964.

She shakes her head.

rosa: Fine. No lying. That\'s worth something. That\'s worth a lot, from you. You lied to me about a fight in the eighth grade for three *years*.`}

She stands up. She kisses the top of your head, on the white.

rosa: Your father told me about Bruno. ${g.f('who8') === 'all' ? 'At the table, after Gigi went up.' : 'Tonight, in our room, with the door shut.'} All of it, the money, the jobs, the girl with the cards. He cried. I\'ve been married to that man for twenty-eight years and I\'ve seen him cry twice.

rosa: Go back to school. Go to class. Eat something. I\'ll handle Bruno Iannucci.

sam: Ma, you can\'t—

rosa: *(already inside, from the hallway)* Goodnight, Salvatore!`,
    next: 'a3_ciro'
  }
});
