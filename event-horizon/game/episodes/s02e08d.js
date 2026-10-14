/* S2 · E8 · MA, part 4 of 4: Act Four ("Sunday Again"), tag, polls. */
EH.scenes('s02e08', {

  /* ================= ACT FOUR: SUNDAY AGAIN ================= */
  a4_closing: {
    card: { kind: 'act', label: 'Act Four', title: 'Sunday Again' },
    night: true,
    loc: 'TOMLINSON THEATER',
    clock: { day: 'Sat', date: 'Mar 20', time: '7:20 PM' },
    enter: g => { g.sleep(8); },
    text: g => `Saturday is closing night of *Mummers: The Musical*.

${g.f('friday7') === 'slip' ? 'You were there on opening night. Every song. She left a heart on your door.' : g.f('friday7') === 'half' ? 'You saw half of it on opening night. She watched you leave at intermission. She hasn\'t said a word to you since that wasn\'t about the weather.' : 'You weren\'t there on opening night. Row C, seat nine, empty, in the middle of the third row, where the whole cast could see it. She hasn\'t said a word to you since.'}

There\'s a box office window at the Tomlinson with a sophomore in it doing calculus homework. You have Thursday\'s ninety dollars from Ciro\'s in your pocket.

sam: One for tonight. Row C, if you have it. Seat nine.

The sophomore looks it up.

SOPHOMORE: Row C, nine, is held. *Comp. Do not sell.* It\'s been held all run.

sam: Held for who?

He turns the screen around. In the notes field, in all caps, typed by somebody who types like she talks:

*FOR SALVATORE KEARNEY. IF HE EVER SHOWS UP. — S.O.H.*`,
    choices: [
      { text: 'Sit in it. Every song. And after, find her backstage, and tell her the true thing you\'ve been afraid to tell her since September.', tag: 'Row C',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Make it right with Simone', on: { strong: 'a4_simone_yes', weak: 'a4_simone_yes', miss: 'a4_simone_partial' } },
        fx: g => { g.flag('closing8', 'went'); } },
      { text: 'Sit in it. Every song. Then leave before the lights come up. Let the seat be the apology.', tag: 'Just the seat',
        fx: g => { g.flag('closing8', 'seat'); g.bond('simone', { trust: 1 }); }, go: 'a4_simone_seat' }
    ]
  },

  a4_simone_yes: {
    night: true,
    loc: 'TOMLINSON THEATER · BACKSTAGE',
    enter: g => { g.flag('simone10', 'mended'); g.flag('simone8', 'told'); g.bond('simone', { trust: 4, respect: 2, affection: 2 }); g.hidden('revenant_drift', -1); },
    text: g => `Backstage after closing is a riot of sequins and crying freshmen and somebody\'s mother with a sheet cake. Kyle is holding the feathered hat over his head like a trophy.

Simone is in the wings in her headset, alone, coiling cable.

She sees you. She doesn\'t stop coiling.

simone: Row C. Nine.

sam: Every song.

simone: I saw.

She coils.

sam: Simone. ${g.f('friday7') === 'slip' ? 'Opening night, I was there, but I wasn\'t *there*, because' : g.f('friday7') === 'half' ? 'Opening night, I left at intermission because' : 'Opening night, I wasn\'t there because'} a man from the Mafia asked my girlfriend to play poker for a pier on Columbus Boulevard, and I had to be in the room so she could look at me. That\'s true. It sounds insane. It\'s true.

She stops coiling.

sam: And in September, when you asked me in the theater, and I lied, I lied because I can stop time. Not like a metaphor. When the world stops, I don\'t. It\'s why my hair\'s white. It\'s why Femi came to my door. It\'s why I bleed. ${g.knows('sam_slip', 'simone') ? 'You knew. You figured it out before I ever said it. I know you did. I\'m saying it anyway, because you deserved to hear it from me.' : ''}

The cable is hanging from her hand.

Simone Okonkwo-Hayes, who always has a line, doesn\'t have one.

Then she does.

simone: *Thank* you.

She drops the cable. She grabs the front of your jacket in both fists and holds on.

simone: Salvatore Kearney. That is the first time in six months anyone on that floor has told me the whole truth. I had it on a *list*. I had it on a list in September and I had to sit with it alone for six months while two people I love lied to my face.

simone: Do you know what that *does* to a person?

sam: I\'m sorry.

simone: I know you are. You\'ve been sorry since October. Sorry is cheap, baby. *This* is what costs.

She lets go of your face. She picks the cable back up.

simone: Now go away. Grace is taking me for pancakes at the Melrose, and she\'s been waiting by the stage door for twenty minutes in the cold, and that woman *hates* waiting.`,
    next: 'a4_dinner'
  },

  a4_simone_partial: {
    night: true,
    loc: 'TOMLINSON THEATER · BACKSTAGE',
    enter: g => { g.flag('simone8', 'tried'); g.bond('simone', { trust: 2 }); },
    text: `Backstage after closing. Sequins, crying freshmen, a sheet cake. Simone in the wings in her headset, coiling cable.

You open your mouth to tell her.

And it doesn\'t come. The whole true thing, the bus, the cold, the stopped world, it gets as far as the back of your throat and stops there.

sam: I— Simone. I can\'t—

She watches you try. She watches you fail. She doesn\'t rescue you.

simone: You came to closing.

sam: Yeah.

simone: Every song?

sam: Every song.

She coils the cable. She doesn\'t look at you.

simone: That\'s not nothing. I\'m not saying it\'s enough. I\'m saying it\'s not nothing.

She hangs the cable on its hook.

simone: Try again sometime, Salvatore. When it\'ll come out.`,
    next: 'a4_dinner'
  },

  a4_simone_seat: {
    night: true,
    loc: 'TOMLINSON THEATER',
    text: `You sit in Row C, seat nine, and watch every song.

The strut. The man in the feathered hat. The second act, about the Mummers captain whose brother died, and the girl in the sequined cape singing alone in a spotlight about a man who went into the cold for somebody and didn\'t come back.

You cry. In Row C. You don\'t try not to.

At the curtain call, before the lights come up, you get up and go.

On Sunday morning, there\'s a Post-it on your door in her handwriting.

*I SAW YOU CRY AT THE CAPTAIN SONG. THAT\'S ONE. — S.*

It\'s not forgiveness. It\'s a receipt.`,
    next: 'a4_dinner'
  },

  a4_dinner: {
    loc: 'MIFFLIN STREET',
    clock: { day: 'Sun', date: 'Mar 21', time: '3:00 PM' },
    enter: g => { g.know('constance_1964', ['jules']); g.know('nonna_constance', ['sam', 'jules', 'nonna'], 'Nonna to Jules: "Tell your grandmother Teresa DiNardo says hello. From the Boathouse. She\'ll know."'); g.bond('rosa', { affection: 2 }); g.bond('jules', { affection: 1 }); g.meet('gigi'); },
    text: g => `Sunday. Mifflin Street. Gravy since nine.

Jules is on the stoop at five to three in a navy dress with sleeves, holding a bouquet of carnations from the Acme on Passyunk, pink and white, eleven dollars and ninety-nine cents. She\'s been standing there for ten minutes, you find out later from Gigi, who watched from the window. She was holding her breath.

Ma opens the door before she knocks.

They look at each other.

rosa: You lied to me. In October. On the phone. *He fell asleep on the lounge couch with his calculus book on his face.*

jules: Yes, Mrs. Kearney.

rosa: You put a blanket on him.

jules: I said I did. There wasn\'t a blanket. He was under I-95.

Ma looks at her a long moment.

rosa: Good. Somebody should have been lying for him. Better you than him. You\'re better at it.

She takes the carnations.

rosa: Carnations. Who told you?

jules: He did. He said roses are for people who don\'t know what anything costs.

rosa: *(over her shoulder, into the house)* Frank! She brought carnations!

frank: *(from the living room)* Good girl!

Dinner is loud. It\'s the loudest dinner on Mifflin Street since Christmas. Gigi asks Jules forty questions about Gladwyne and whether she has a horse, and Jules says she *had* a horse, and something in her face changes, and Gigi, who is thirteen and notices everything, changes the subject to Taylor Swift. Pop, whose paper is clean, eats two plates and talks about the Phillies\' bullpen. Mikey watches Jules the way a cop watches people, and then, halfway through, laughs at something she says and stops watching.

Nonna sits at the end of the table and doesn\'t say anything until the cannoli.

Then she leans over to Jules. Very close. In a voice just for her, and you, sitting between them.

nonna: Your grandmother. Constance.

Jules goes still.

nonna: I saw her once. In 1964. At the Boathouse, on the Drive, in a black car, with a fur collar. When the bells stopped. Her eyes moved. Mine too.

jules: *(barely)* Her eyes—

nonna: You tell her something for me. Tell her Teresa DiNardo says hello. From the Boathouse. She\'ll know.

She pats Jules\'s hand.

nonna: Now eat. You\'re too skinny. All of you are too skinny. Madonna, the young people.

${g.f('terms8') === 'count' ? 'After dinner, on the stoop, in the cold, Ma sits down next to you on Nonna\'s cushion. She doesn\'t say anything. She holds out her hand, palm up, the way she did when you were six and had something in your pocket you weren\'t supposed to have.\n\nrosa: Since Sunday.\n\nsam: None, Ma. I haven\'t gone in once.\n\nShe nods. She closes her hand.\n\nrosa: Zero. Good. I\'m writing it down.' : 'After dinner, on the stoop, in the cold, Ma sits down next to you on Nonna\'s cushion and doesn\'t say anything. Through the window behind you, you can hear Jules and Gigi doing the dishes, and Jules laughing at something, short, surprised out of her.\n\nrosa: She laughs like you.\n\nsam: Yeah?\n\nrosa: Like it costs her something. Like she\'s paying for it.'}`,
    next: 'tag_lab'
  },

  /* ================= TAG ================= */
  tag_lab: {
    card: { kind: 'tag' },
    night: true,
    loc: 'NAVY YARD · BUILDING 10 · THE LAB',
    clock: { day: 'Mon', date: 'Mar 22', time: '6:00 AM' },
    text: g => `> THE CAMERA.

A lab. White, cold, humming. A technician in a paper mask is sitting at a screen with a printout in her hand, and Dr. Achterberg is standing behind her, reading over her shoulder.

TECHNICIAN: Two samples on the handkerchief. Same donor. Male. One from late August, maybe. One from late November.

ACHTERBERG: And?

TECHNICIAN: The August sample\'s telomere length is consistent with a man of eighteen or nineteen.

ACHTERBERG: And November?

The technician looks at the printout again. She\'s run it three times. You can see on her face that she\'s run it three times.

TECHNICIAN: Thirty-one.

Achterberg doesn\'t say anything.

TECHNICIAN: Three months. Twelve years of cellular aging in three months. That\'s not— Doctor, that\'s not a thing that happens.

ACHTERBERG: *(quietly)* He\'s spending himself.

She takes the printout. She folds it in half.

ACHTERBERG: Every time he stops the clock, he pays for it in years. The old reports say the brother did the same, in 1961.

She walks to the window. The dry dock below, gray in the dawn.

ACHTERBERG: At this rate he\'ll be forty by Christmas.

> ELSEWHERE.

Ravenscourt. The terrace. Four in the afternoon, the one cigarette.

Constance Pemberton in a camel hair coat older than her grandchildren, at the stone balustrade, looking at the lawn.

Hugh comes out through the French doors with his hands in the pockets of his crew jacket.

hugh: Gran.

constance: Hugh.

${g.f('note6') === 'told' ? 'He takes his hand out of his pocket. He holds out an index card, folded in half, soft at the corners.\n\nhugh: Found this in Jubilee\'s coat. Thought you\'d want it before she did.\n\nConstance takes the card without looking at him. She unfolds it. She reads the front. She reads the back.\n\n*Don\'t trust the lucky one.*\n\nHer cigarette burns down while she reads it.\n\nhugh: Who wrote it? Is it the boyfriend? It\'s his writing, I think. Is he—\n\nconstance: No.\n\nShe folds the card. She puts it in the pocket of her coat.\n\nconstance: Someone who loved her very much. And was wrong.\n\nhugh: About what?\n\nconstance: About which of us to be afraid of.' : 'He stands beside her at the balustrade. He doesn\'t say anything for a long time.\n\nhugh: Gran. What is she?\n\nConstance doesn\'t look at him.\n\nconstance: Who have you been talking to, Hugh?\n\nHe doesn\'t answer. That\'s an answer.'}

She stubs out the cigarette on the stone.

constance: Go inside. Your father wants you. He always does. That\'s worth something, Hugh. Not much.

He goes.

She stands alone on the terrace and looks east, toward the city, toward a river, toward a Boathouse sixty-three years ago, and her lips move.

*Teresa.*`,
    end: true
  }
});

Object.assign(EH.episodes.s02e08, {
  polls: [
    { q: '"Are you the Blur?"', opts: [
      { label: 'Told her', pct: 58, if: g => g.f('ma8') === 'told' },
      { label: 'Showed her', pct: 29, if: g => g.f('ma8') === 'shown' },
      { label: 'Said no', pct: 13, if: g => g.f('ma8') === 'lied' }
    ] },
    { q: 'What you promised Ma', opts: [
      { label: 'She counts', pct: 54, if: g => g.f('terms8') === 'count' },
      { label: 'Only if somebody\'s dying', pct: 31, if: g => g.f('terms8') === 'only' },
      { label: 'No promises', pct: 15, if: g => g.f('terms8') === 'none' }
    ] },
    { q: 'The Circolo', opts: [
      { label: 'Went with her', pct: 49, if: g => g.f('circolo8') === 'with' },
      { label: 'Let her go alone', pct: 23, if: g => g.f('circolo8') === 'alone' },
      { label: 'Tried to beat her there', pct: 28, if: g => g.f('circolo8') === 'first' }
    ] }
  ],
  onEnd: g => {
    g.recap('Ma knows. "Are you the Blur?"');
    g.recap('The DiNardo women count. When the clocks stop, their eyes still move.');
    g.recap('Nonna saw a Pemberton girl in a black car at the Boathouse in 1964. Her eyes moved too.');
    g.recap('Ma walked into the Circolo and spent the DiNardo debt. Pop\'s paper is clean. Jules doesn\'t play. "After today, we\'re even."');
    if (g.f('simone8') === 'told') g.recap('You told Simone the whole truth, backstage, on closing night.');
    g.recap('Halcyon tested your blood. Three months, twelve years.');
  }
});
