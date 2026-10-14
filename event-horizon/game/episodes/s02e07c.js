/* S2 · E7 · BAD TIMING, part 3 of 4: Act Three ("Friday"). */
EH.scenes('s02e07', {

  /* ================= ACT THREE: FRIDAY ================= */
  a3_friday: {
    card: { kind: 'act', label: 'Act Three', title: 'Friday' },
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Fri', date: 'Mar 12', time: '6:40 PM' },
    enter: g => { g.sleep(6); },
    text: g => `Friday.

Simone\'s ticket is on your desk. *TOMLINSON THEATER · MUMMERS: THE MUSICAL · OPENING NIGHT · ROW C · SEAT 9 · 7:30 PM.*

Jules\'s text is on your phone. *Vinnie picks me up at 8:15. Bustleton Avenue. Nine o\'clock. I\'ll be wearing the coat.*

The Tomlinson is a four-minute walk from Cardone. Bustleton Avenue is eleven miles, a forty-minute cab ride on a Friday night, all the way up the Boulevard into the Northeast.

The curtain comes down at nine-forty.

Nik is watching you look from one to the other.

nik: Bro. I want to say, very gently, as a friend: you can\'t be in two places.

He hears himself. He closes his eyes.

nik: Okay. You *can*. But last time you did that a lot, your hair went white.`,
    choices: [
      { text: 'The show. First act, at least. Then leave at intermission and get to Bustleton by nine. Simone gets half. Jules gets the rest.', tag: 'Half and half',
        fx: g => { g.flag('friday7', 'half'); if (g.f('simone7') === 'promised') g.bond('simone', { trust: -2 }); else g.bond('simone', { trust: -1 }); }, go: 'a3_half' },
      { text: 'Jules. All of it. From the start. Text Simone something true and terrible and go.', tag: 'Jules',
        fx: g => { g.flag('friday7', 'jules'); if (g.f('simone7') === 'promised') g.bond('simone', { trust: -3, affection: -1 }); else g.bond('simone', { trust: -2 }); }, go: 'a3_skip' },
      { text: 'Both. The whole show, every song, the curtain call. Then Slip to Bustleton. Eleven miles in no time. It\'ll cost what it costs.', tag: 'Slip', slip: true,
        fx: g => { g.flag('friday7', 'slip'); g.bond('simone', { trust: 2, affection: 1 }); g.hidden('revenant_drift', 1); }, go: 'a3_slipshow' }
    ]
  },

  a3_half: {
    loc: 'TOMLINSON THEATER',
    clock: { time: '7:30 PM' },
    text: g => `Row C, seat nine.

The lights go down. The band, two horns, a banjo and a glockenspiel, plays something that might be *Oh, Dem Golden Slippers*. Twelve freshmen in sequins strut onto the stage, in unison, more or less, and Kyle, at the end of the line, gets the strut *right*, for the first time ever, and you hear a sound from the booth at the back of the house that can only be Simone.

It\'s terrible. It\'s *wonderful*. There\'s a song about a man in a feathered hat that makes you laugh so hard the woman next to you shushes you.

At intermission, the lights come up. You stand. You look back at the booth.

Simone is looking down at you through the glass with her headset on.

You hold up your phone. You point at the door. You put your hand flat on your chest. *I\'m sorry.*

She looks at you for one second. Then she turns away from the glass.

You go. You run. You get a cab on Broad.

The second act starts without you. Row C, seat nine, empty, in the middle of the third row, where the whole cast can see it.

${g.f('simone7') === 'promised' ? 'You swore. You swore to her, not to God. You\'re in a cab on the Boulevard, and that\'s the thing you can\'t stop hearing.' : g.f('simone7') === 'try' ? 'You said you\'d try. You did. You\'re in a cab on the Boulevard, and it doesn\'t feel like trying.' : 'You never told her you\'d come. She left you the ticket anyway. You\'re in a cab on the Boulevard, and that\'s the thing you can\'t stop hearing.'}

At 9:12, your phone buzzes.

TXT simone: Row C. Nine.

That\'s all.`,
    next: 'a3_banya'
  },

  a3_skip: {
    loc: 'ROOSEVELT BOULEVARD',
    clock: { time: '8:15 PM' },
    text: g => `You text Simone before you can stop yourself. You write it four times. You send the fifth.

TXT sam: simone im so sorry. something is happening tonight to someone i love and i have to be there. i cant explain. i know thats what i always say. i know.

It says *Read* at 7:31. One minute after curtain.

She doesn\'t answer.

At 8:15, a black Escalade pulls up in front of Cardone. Vinnie at the wheel. Jules in the back, in the camel coat, her hair back, very pale, very calm. She sees you on the curb and her whole body changes. Like a held breath, letting go.

jules: You came.

sam: I said I would.

jules: ${g.f('simone7') ? 'You said you\'d be at a musical, too.' : 'Simone left you a ticket for her musical.'} Simone told me. She tells me everything she\'s angry about. It\'s a long list.

She takes your hand. It\'s cold. Hers, for once.

jules: Thank you.

Up Broad, onto the Boulevard. Twelve lanes of it, the city\'s widest street, the one everybody says is the most dangerous road in America. Car dealerships and Chinese buffets and Russian groceries with Cyrillic signs. Vinnie drives at exactly the speed limit, in the right lane, both hands on the wheel.

vinnie: *(to the mirror)* Yo. Sally. You know what you\'re walking into?

sam: No.

vinnie: Good. Me neither. That\'s how you walk in.`,
    next: 'a3_banya'
  },

  a3_slipshow: {
    loc: 'TOMLINSON THEATER',
    clock: { time: '9:40 PM' },
    enter: g => { g.unstick('unstick_s2e7', 'Time debt (the Boulevard)'); g.know('simone_curtain', ['sam', 'simone'], 'You were in Row C, seat nine, for every minute of Mummers: The Musical. You stood up first at the curtain call.'); },
    text: g => `Row C, seat nine.

You see every minute of it. The strut. The song about the man in the feathered hat. The second act, which is somehow about grief, about a Mummers captain whose brother died, and a girl in a sequined cape singing alone in a spotlight, and you sit in the dark in Row C with your hand over your mouth.

At the curtain call, you\'re the first one on your feet.

Simone comes out from the booth for the company bow, in her feathered hat, and she sees you standing in Row C, and for once in her life she doesn\'t have a line. She puts her hand over her heart. She mouths, *Salvatore Kearney.*

You mouth back, *I\'m here.*

Then you walk out of the theater at 9:41, into the alley behind the Tomlinson, and you step through.

${g.f('assunta_watch') ? 'The cold takes you like a river. The watch ticks in your fist.' : 'The cold takes you like a river.'} Broad Street, frozen. Roosevelt Boulevard, twelve lanes of stopped headlights, all the way up into the Northeast. You run. Eleven miles. The longest you\'ve ever gone. Your nose starts to pour at the Boulevard. Your knees go at Cottman.

${g.f('assunta_watch') ? 'The walls of the second come in at Bustleton Avenue. You find the door by the sound of the watch. You come out on your knees on a sidewalk in front of a bathhouse with Cyrillic on the awning, with frost on your sneakers and blood on your shirt.' : 'The walls of the second come in at Bustleton Avenue, and you claw your way out, and come out on your knees on a sidewalk with frost on your sneakers and blood on your shirt.'}

You look at your phone. 9:49.

Eight minutes gone. Somewhere between Cottman and here.

A black Escalade at the curb. Vinnie leaning on it, smoking a cigarette he doesn\'t inhale. He looks at you on your knees on the sidewalk, bleeding. He doesn\'t ask.

vinnie: Jesus, Sally. You look like a crime scene. She\'s on the last hand. Get in.`,
    next: 'a3_banya'
  },

  a3_banya: {
    night: true,
    loc: 'BUSTLETON AVENUE · THE BATHHOUSE',
    clock: { time: '9:50 PM' },
    text: g => `The back room of the bathhouse is hot, wet, and smells like eucalyptus and cigarettes. Tile walls. A drain in the floor. A green felt table under one hanging lamp.

${g.f('friday7') === 'slip' ? 'You come in at the end, bleeding into your sleeve, and nobody looks at you, because nobody in the room is looking at anything but the table.' : g.f('friday7') === 'half' ? 'You come in at 9:15, late, out of breath, and Jules looks up from the table for one half of one second, sees you against the back wall, and goes back to her cards. For the next half hour, you watch.' : 'You\'ve been here since nine, against the back wall, where she can see you. You\'ve watched every hand. You\'ve watched Orlov. You know how he breathes when he has nothing.'}

Pavel Orlov is seventy, bald, enormous, in a terrycloth robe, with a gold cross on his chest and a glass of tea in a silver holder. He looks like somebody\'s grandfather. So does Bruno, at the other end of the table, in a cardigan, with his cane across his knees. In this city, everybody who can hurt you looks like somebody\'s grandparent.

Between them, Jules. In the camel coat, buttoned, in a room where everybody else is in towels or wool.

Texas hold\'em. Heads up. Jules against Orlov\'s nephew, Grisha, a pale young man with fast hands who plays like he learned online.

It\'s been even all night. Up a little. Down a little. Jules is playing straight. You can see it. You can see her hold her breath before every bet, and let it out after.

And now the last hand.

The chips are in the middle. All of them. The pier is in the middle. Pier 53.

On the table: the king of hearts, the nine of clubs, the nine of spades, the four of hearts. One card left to come.

Grisha has pushed everything in. He\'s leaning back with his arms crossed.

Jules looks at her two cards. Then she looks up, across the hot room, over the green felt, past Bruno and Orlov and Dante, at you.

The question again. The same one from Sunday.

*How do you want me to play this?*

On the wall behind you, an old Soviet clock with a red second hand, ticking toward 9:51.`,
    choices: [
      { text: 'Nod. *Let it go your way.* End it. Free Pop, free Halina, free everybody.', tag: 'Let it go',
        fx: g => { g.flag('game7', 'luck'); g.hidden('jules_debt', 2); g.hidden('jules_open', 1); }, go: 'a3_luck' },
      { text: 'Read Grisha for her. Find his tell. Give it to her with your eyes. No luck. Just the two of you.', tag: 'Read him',
        check: { kind: 'move', move: 'Read the Street', attr: 'wits', skill: 'streetwise', label: 'Read Grisha', noLuck: true,
          on: { strong: 'a3_win', weak: 'a3_split', miss: 'a3_loss' } },
        fx: g => { g.flag('game7', 'read'); g.hidden('jules_debt', -1); }, if: g => g.f('friday7') !== 'jules' },
      { text: 'Read Grisha for her. You\'ve watched every hand tonight. You know how he breathes when he has nothing.', tag: 'Read him',
        check: { kind: 'move', move: 'Read the Street', attr: 'wits', skill: 'streetwise', label: 'Read Grisha', noLuck: true, bonus: 1, bonusLabel: 'Watched every hand',
          on: { strong: 'a3_win', weak: 'a3_split', miss: 'a3_loss' } },
        fx: g => { g.flag('game7', 'read'); g.hidden('jules_debt', -1); }, if: g => g.f('friday7') === 'jules' },
      { text: 'Touch your ear. *Fold.* Lose the pier. Lose the deal. Get her out of Bruno\'s pocket for good, whatever it costs.', tag: 'Fold',
        fx: g => { g.flag('game7', 'fold'); g.bond('jules', { trust: 1 }); }, go: 'a3_fold' }
    ]
  },

  a3_luck: {
    night: true,
    enter: g => { g.flag('paid7'); g.flag('pop7', 'crash'); g.flag('bruno_jobs_done', g.f('bruno_jobs_total') || 8); g.bond('jules', { tension: 1 }); },
    text: `You nod.

She looks back at her cards. She breathes out.

You feel it. The steam over the drain stops moving, like the room is holding its breath for her, since she won\'t.

jules: Call.

The dealer turns the last card.

The nine of hearts.

Jules turns over her two cards. The nine of diamonds. The king of spades.

Four nines. In the whole history of the world, there have only ever been four nines, and she has all of them.

Grisha stares at the table. Orlov puts his tea glass down very slowly in its silver holder. Somebody behind you says something in Russian that sounds like a prayer, or the opposite of one.

Bruno closes his eyes, smiling, like a man listening to music.

BRUNO: *My grandfather wasn\'t lying.*

The Soviet clock on the wall says 9:51.

Jules is sitting very still. There\'s blood coming from her nose, a thin line, down over her lip, onto the camel coat. She doesn\'t wipe it. She\'s looking at you, across the room. She\'s not happy. She looks like someone who just heard a door open somewhere in a dark house.

jules: *(very quietly, just to you)* Something just happened.

sam: What?

jules: I don\'t know. Somewhere. Near us. I felt it go.`,
    next: 'a4_call'
  },

  a3_win: {
    night: true,
    enter: g => { g.flag('paid7'); g.flag('pop7', 'safe'); g.flag('bruno_jobs_done', g.f('bruno_jobs_total') || 8); g.bond('jules', { trust: 1, affection: 1 }); g.hidden('revenant_drift', -1); },
    text: `You watch Grisha.

Some guys tell you everything in one hand. You know what he does with his hands when he\'s got it. He touches his chips. Stacks them, restacks them, lines up the edges. And when he doesn\'t have it, he crosses his arms. Leans back. Big. Like Pop at the kitchen table when he lost at the track.

His arms are crossed.

You look at Jules. You don\'t touch your ear. You don\'t nod. You look at Grisha\'s crossed arms, and then back at her, and you lift one shoulder, half an inch.

*He\'s got nothing.*

She sees it. You see her see it.

She holds her breath. Not to stop the luck. To stop herself from smiling.

jules: Call.

The last card: the two of diamonds. Nothing.

Grisha turns over a seven and an eight. Not even a draw. He was never anywhere.

Jules turns over the king of diamonds and the ten of spades. Kings and nines. Not luck. Just better.

Orlov laughs, a huge rumble from inside his robe, and claps Grisha on the back of the head hard enough to knock him forward.

Bruno doesn\'t close his eyes. He looks at Jules. Then at you, against the back wall.

BRUNO: Huh.

The Soviet clock says 9:51. Nothing happens. Nothing at all.

Jules gets up from the table, and walks across the hot tile room, past Bruno, past Orlov, past Dante, and puts her arms around your neck in front of all of them.

jules: *(into your ear)* That was us. That was just us. Nobody paid.`,
    next: 'a4_call'
  },

  a3_split: {
    night: true,
    enter: g => { g.flag('pop7', 'safe'); g.flag('split7'); g.flag('bruno_jobs_done', Math.min((g.f('bruno_jobs_total') || 8) - 1, (g.f('bruno_jobs_done') || 0) + 2)); g.hidden('revenant_drift', -0.5); },
    text: `You watch Grisha. His arms are crossed. He\'s leaning back.

But his foot is going. Under the table. You can see it in the drape of his towel. Tapping.

You don\'t know what that means. You look at Jules and you give her the only thing you\'ve got: a tiny shake of your head. *I don\'t know.*

She looks at her cards. She holds her breath.

jules: Call.

The last card: the four of spades.

Grisha turns over a king and a three. Two pair, kings and nines.

Jules turns over a king and a deuce. Two pair, kings and nines, and the four on the board plays for both of them. Same hand. To the card.

Split pot.

The room breathes out. Orlov laughs. Bruno doesn\'t.

BRUNO: Half a pier.

ORLOV: *(in English, delighted)* Half a pier! Bruno. We can *share*. Like brothers.

Bruno looks at Jules.

BRUNO: The paper said one game, Juliet. Half a game is half the paper.

The Soviet clock says 9:51. Nothing happens.

On the way out, in the hallway, Dante catches your arm.

DANTE: Grandpa says your father\'s half paid. And he says he\'d like to see her play again. Sometime. No rush.`,
    next: 'a4_call'
  },

  a3_loss: {
    night: true,
    enter: g => { g.flag('pop7', 'beaten'); g.flag('lost7'); g.bond('jules', { tension: 1 }); },
    text: `You watch Grisha. His arms are crossed. He\'s leaning back. You think it means nothing. You think it means he\'s *bluffing*.

You look at Jules. You lift one shoulder half an inch. *He\'s got nothing.*

She holds her breath. She trusts you.

jules: Call.

The last card: the king of clubs.

Grisha turns over a king. Full house. Kings full of nines.

He wasn\'t bluffing. He was *comfortable*.

Jules turns over a queen and a jack. Two pair off the board and a queen. Nothing.

The room explodes in Russian. Orlov stands up in his robe and hugs his nephew so hard Grisha\'s feet leave the floor.

At the other end of the table, Bruno sits very still with his cane across his knees.

The Soviet clock says 9:51.

BRUNO: *(quietly)* The paper said she plays, Sam. It didn\'t say she wins.

He stands up, slowly, on the cane. He doesn\'t look at Jules. He looks at you.

BRUNO: I don\'t blame her. She played straight. I watched her. I watched you, too, at the back of the room, telling her where to go.

He puts on his gloves, one finger at a time.

BRUNO: An understanding is an understanding. Somebody pays for a pier.

He walks out. Dante follows him. Dante is already on his phone.`,
    next: 'a4_call'
  },

  a3_fold: {
    night: true,
    enter: g => { g.flag('pop7', 'beaten'); g.flag('folded7'); g.hidden('revenant_drift', -0.5); },
    text: `You touch your ear.

She sees it. She looks at you for one long second. Your tell. The thing you do when something isn\'t true. *This isn\'t true. None of it. Fold. Get out of his pocket.*

She closes her eyes.

jules: Fold.

She puts her cards face down on the felt and pushes them away.

The room explodes in Russian. Grisha didn\'t even have to turn his cards over. Orlov laughs and slaps the table.

Bruno looks at the face-down cards in front of Jules. He reaches out with the tip of his cane and flips them over.

The nine of diamonds. The king of spades.

A full house. Nines full of kings, made on the turn. She folded it.

Silence.

Bruno looks at the cards. Then at Jules. Then, slowly, at you.

BRUNO: She folded a full house.

BRUNO: She folded a full house because you told her to.

He gets up. He puts his gloves on, one finger at a time.

BRUNO: I respect it, Sam. I want you to know that. It\'s what your great-grandmother would have done. She would have thrown the pier in the river to keep the girl.

BRUNO: But an understanding is an understanding. Somebody pays for a pier.

He goes. Dante goes with him, already on his phone.

The Soviet clock says 9:51.`,
    next: 'a4_call'
  }
});
