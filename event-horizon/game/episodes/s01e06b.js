/* S1 · E6 · THE HOUSE ALWAYS WINS (Jules POV), part 2 of 2: Act Two ("The Game"), Act Three ("Half Past Midnight"), tag ("The Chapel"). */
EH.scenes('s01e06', {

  /* ================= ACT TWO: THE GAME ================= */
  a2_game: {
    card: { kind: 'act', label: 'Act Two', title: 'The Game' },
    night: true,
    loc: 'RAVENSCOURT · THE LIBRARY',
    clock: { time: '8:00 PM' },
    enter: g => { g.meet('hugh'); g.meet('whitney'); g.meet('catherine'); g.meet('constance'); g.meet('callum'); },
    text: g => `The library at Ravenscourt has a fireplace you could park a car in, two thousand books nobody reads, and a round mahogany card table that has been in the family since 1880 and has a cigarette burn on one edge from 1944 that nobody is allowed to mention.

You\'re wearing the blue. It\'s a long dark blue silk thing with no sleeves, and you\'ve put your hair up, and on your left wrist, where your mother can see it and has visibly decided to say nothing, there\'s a pink-and-green friendship bracelet.

The table:

**Gran**, at the head, dealing. She deals every hand and plays none of them. She says her card-playing days ended in 1962, and when you asked her once why, she said *because I won, child*.

**Father**, Whitney Pemberton, in a velvet smoking jacket, warm and handsome and silver at the temples, with his phone face down beside his chips and buzzing every four minutes. *Jules-bug!* he said when you came down, and kissed your forehead, and then took a call.

**Hugh**, in a dinner jacket, ${g.f('hugh6') === 'throw' ? 'not looking at you, his jaw tight, a new racket-shaped grudge sitting behind his eyes' : g.f('hugh6') === 'win' ? 'already two drinks in, still sore about tennis' : 'already two drinks in, golden and loud'}.

**Callum**, beside you, in his father\'s old dinner jacket, a little short in the sleeves, beaming, delighted to be here, delighted by the fire and the books and the chips and you.

**Judge Ellison**, eighty, a friend of Gran\'s from the Cricket Club, who falls asleep between hands and wins a surprising amount.

And a woman you don\'t know. Late fifties, Dutch by the accent, with steel-gray hair cut very short and a black suit and no jewelry at all, sitting very straight, with her hands folded on the table in front of her like someone waiting for a result.

whitney: Everybody, this is Miriam. Dr. Achterberg. She\'s a physicist. A friend from the energy thing. Miriam, my daughter Juliet, the one I told you about.

DR. ACHTERBERG: He did. At length.

She says it pleasantly. She\'s looking right at you.

Your mother, who doesn\'t play, sits by the fire with a glass of white wine and a medical journal, turning pages at perfectly regular intervals, not reading.

Gran shuffles. Her old hands move like a magician\'s.

constance: Hundred-dollar chips. Real money. A card game without stakes is a conversation, and I don\'t like conversations.

She deals.`,
    next: 'a2_hand1'
  },

  a2_hand1: {
    night: true,
    text: `Texas Hold\'em. Two cards each, face down. Five on the table, shared, three then one then one.

You look at your two cards. Jack of clubs, nine of clubs. A pretty hand. Not a strong one.

Across the table, Father calls without looking at his cards, because he\'s on his phone. Hugh raises. Callum calls, because Callum always calls, because folding feels rude to him. The judge is asleep. Dr. Achterberg folds without hesitation, without looking at her cards either.

She\'s looking at you.

The flop comes: ten of clubs, two of hearts, eight of clubs. Four to a flush. You need one more club.

Hugh bets big. He\'s got something. You can see it in his shoulders.`,
    choices: [
      { text: 'Play it properly. Read Hugh. Count the odds. Make the right bet.', tag: 'Play',
        check: { kind: 'pool', attr: 'wits', skill: 'hustle', diff: 3, label: 'Read the table', on: { crit: 'a2_hand1_win', success: 'a2_hand1_win', partial: 'a2_hand1_win', fail: 'a2_hand1_win', botch: 'a2_hand1_win' } } },
      { text: 'Don\'t think. Push your chips in. You know how this ends.', tag: 'Push',
        check: { kind: 'move', move: 'Bluff', attr: 'nerve', skill: 'hustle', label: 'All of it', on: { strong: 'a2_hand1_win', weak: 'a2_hand1_win', miss: 'a2_hand1_win' } } }
    ]
  },
  a2_hand1_win: {
    night: true,
    enter: g => { g.inc('hands_won'); },
    text: g => `The turn is the king of hearts. Nothing for you.

Hugh bets again. You call. Callum, beside you, says *ooh* under his breath, like it\'s a movie.

The river.

Gran\'s hand pauses over the deck, just for an instant, the way it always does on the last card, and you watch her face, and her face doesn\'t move, and she turns it over.

Queen of clubs.

Not just the flush. The *straight* flush. Eight, nine, ten, jack, queen of clubs, and the king doesn\'t matter, nothing matters. The odds of that are something like one in three thousand. You\'ve had four in your life. ${g.last && g.last.nudged ? 'You watched the card come off the deck and you felt it, the way you always feel it now: a little click, somewhere behind your breastbone, like a lock turning.' : 'You felt it coming before Gran\'s hand moved: a little click, somewhere behind your breastbone, like a lock turning.'}

Hugh turns over his cards. Two kings. With the king on the turn, that\'s three of a kind. A great hand. On any other night at any other table, a winning hand.

hugh: Oh, come *on*.

whitney: Jules-bug! *Look* at that!

Father\'s off his phone for the first time all night, laughing, delighted. Callum\'s clapping. The judge wakes up and says *what happened*.

Dr. Achterberg doesn\'t clap. She takes a small black notebook out of her jacket pocket and writes something in it, one line, and puts it away.

Gran, at the head of the table, gathers the cards and shuffles them and doesn\'t look at you at all.`,
    next: 'a2_achterberg'
  },

  a2_achterberg: {
    night: true,
    clock: { time: '9:15 PM' },
    text: `During the break, while Father\'s on the terrace on a call and Hugh\'s at the bar cart, Dr. Achterberg comes and stands next to you by the fire.

She has a glass of water. She doesn\'t drink from it.

DR. ACHTERBERG: Your father tells me you\'re at Temple University.

jules: Yes.

DR. ACHTERBERG: Against your mother\'s wishes.

jules: Most things are.

She smiles, a small precise smile, like a measurement.

DR. ACHTERBERG: I was at Temple once. For a concert. In August. The Welcome Week concert on Liacouras Walk, the night of the power failure.

She turns the water glass a quarter turn on its coaster.

DR. ACHTERBERG: Were you there? That night? At eleven fifty-one?

Her voice is perfectly casual. Her eyes are not.

Behind your breastbone, the lock turns, and turns again.`,
    choices: [
      { text: '"Yes. A window came down. Every piece of glass missed me." Tell her the truth. What could it hurt?', tag: 'The truth',
        fx: g => { g.flag('achterberg6', 'truth'); g.hidden('halcyon_jules', 3); g.know('achterberg_glass', ['jules'], 'You told Dr. Achterberg about the window. Every piece of glass missed you. She said, "How very fortunate."'); }, go: 'a2_ach_truth' },
      { text: '"No. I was home in Gladwyne that weekend." Lie, perfectly.', tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to a stranger', on: { strong: 'a2_ach_lie', weak: 'a2_ach_lie', miss: 'a2_ach_lie' } } },
      { text: '"Why would a physicist go to a student concert?"', tag: 'Turn it',
        check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'investigate', label: 'Read her', on: { strong: 'a2_ach_turn', weak: 'a2_ach_turn', miss: 'a2_ach_turn' } } }
    ]
  },
  a2_ach_truth: {
    night: true,
    text: `jules: Yes. A window came down. Every piece of glass missed me.

DR. ACHTERBERG: Every piece.

jules: Every piece. There was a circle on the ground with me in it.

She looks at you. Then she nods, slowly, like a woman hearing that an experiment has gone exactly as predicted.

DR. ACHTERBERG: How very fortunate.

She touches your arm, once, lightly, two cool fingertips just above the bracelet, and goes back to the table.

You stand by the fire. You realize your heart is going very fast. You can\'t remember the last time your heart went fast because of something that wasn\'t Sam Kearney.`,
    next: 'a2_test'
  },
  a2_ach_lie: {
    night: true,
    enter: g => { g.flag('achterberg6', 'lie'); g.hidden('halcyon_jules', 1); },
    text: `jules: No. I was home in Gladwyne that weekend.

It\'s perfect. You\'ve been lying to people at parties since you were nine.

DR. ACHTERBERG: Ah. Pity. It was quite a night.

She nods pleasantly and goes back to the table.

And then, halfway there, without turning around, she says:

DR. ACHTERBERG: Your father showed me the photograph. From the newspaper. The girl sitting on the curb outside the bubble-tea shop with the tall Black girl holding her hand. It was in the *Inquirer*, page three. He was very proud. *My Jules-bug, cool as a cucumber.*

She sits down. She folds her hands on the table.

You stand by the fire. You just lied to a woman who already knew the answer, and she let you. You know that move. You\'ve been letting Kearney make it for six weeks.`,
    next: 'a2_test'
  },
  a2_ach_turn: {
    night: true,
    enter: g => { g.flag('achterberg6', 'turn'); g.know('achterberg_concert', ['jules'], 'Dr. Miriam Achterberg, a physicist and a friend of your father\'s, asked whether you were on Liacouras Walk at 11:51 on August 22. She was there. She said she was "taking measurements."'); },
    text: `jules: Why would a physicist go to a student concert?

Dr. Achterberg looks at you. For the first time all evening, something real moves in her face: surprise, and then, very clearly, *pleasure*. The look of a chess player whose opponent has finally made an interesting move.

DR. ACHTERBERG: Very good.

She turns the water glass another quarter turn.

DR. ACHTERBERG: I wasn\'t there for the music. I was taking measurements. It was a very good night for it.

jules: And did you get what you were looking for?

DR. ACHTERBERG: Oh, my dear.

She smiles. It\'s not a measurement anymore.

DR. ACHTERBERG: I\'m looking at it.

She goes back to the table before you can answer.`,
    next: 'a2_test'
  },

  /* ---------- The test ---------- */
  a2_test: {
    night: true,
    clock: { time: '10:30 PM' },
    text: g => `By ten-thirty, you have most of the chips on the table.

You\'ve won eleven hands in a row. You\'ve stopped looking at your cards before you bet. You\'ve stopped needing to. Every time, the cards come the way they come, and every time, they come for you: the flush on the river, the third queen on the turn, the one card in the deck that fills an inside straight. Callum has lost four thousand dollars and keeps apologizing to you for it. Father keeps laughing. Hugh has stopped talking.

And every time: *click*.

Somewhere in your head, very quietly, a seven-year-old girl in a stone chapel is saying: *something\'s in here with me*.

${g.f('horse6') === 'letgo' ? 'You think about Mercutio, standing in his stall on three legs.' : g.f('hugh6') === 'throw' ? 'You think about Hugh\'s cracked racket lying on the grass.' : 'You think about every game you\'ve ever played. You can\'t remember a single loss. Not one.'}

You want to see what it does when you give it nothing to work with.

Gran deals. You look at your cards without picking them up.

Seven of diamonds. Two of spades.

The worst hand in poker.`,
    choices: [
      { text: 'Go all in. Seven-deuce. The worst hand there is. Let\'s see what it does.', tag: 'All in',
        fx: g => { g.flag('test6', 'allin'); g.hidden('jules_debt', 1); }, go: 'a2_allin' },
      { text: 'Fold. And fold the next one, and the next. Fold everything until somebody else wins.', tag: 'Fold',
        fx: g => { g.flag('test6', 'fold'); g.hidden('jules_debt', 1); }, go: 'a2_fold' },
      { text: 'Don\'t test it. Don\'t touch it. Play the hand like a person, and lose it like a person.', tag: 'Play it straight', fx: g => { g.flag('test6', 'straight'); },
        check: { kind: 'pool', attr: 'wits', skill: 'hustle', diff: 3, label: 'Play it straight', on: { crit: 'a2_straight', success: 'a2_straight', partial: 'a2_straight', fail: 'a2_straight', botch: 'a2_straight' } } }
    ]
  },
  a2_allin: {
    night: true,
    enter: g => { g.inc('hands_won'); g.know('jules_allin', ['jules'], 'Jules went all in with seven-deuce at Ravenscourt to see if she could lose. She hit a full house on the flop.'); },
    text: `You push everything into the middle. Every chip. Forty thousand dollars of your father\'s friends' money, on a seven and a two.

The table goes silent.

whitney: Jules-bug…

hugh: She\'s *bluffing*. She\'s bluffing. Call. *Everybody* call.

Hugh calls. Callum calls, because Callum always calls. Father calls, laughing, off his phone, eyes bright. Dr. Achterberg folds without looking. The judge is asleep.

Gran turns the flop.

Seven of hearts. Seven of clubs. Two of hearts.

You feel the lock turn. *Click.* Behind your breastbone. Hard. So hard it almost hurts.

Full house. Sevens full of twos. Off the worst hand in poker, on the flop. You don\'t need the turn or the river. You don\'t need anything. You never have.

Hugh throws his cards across the table. They hit the fire screen.

hugh: *That\'s not possible.* That\'s not *possible*, Gran, that\'s—she\'s cheating, she *has* to be—

constance: Hugh.

One word. Hugh stops.

Father is laughing so hard he\'s crying. Callum is clapping again, slowly, amazed. *Jules, that\'s insane!*

Dr. Achterberg takes out her notebook and writes one line.

And Gran looks at you over the table, over the cards, over the forty thousand dollars.

She doesn\'t look surprised. She looks like a woman who has just heard a bell ring that she\'s been waiting sixty years to hear.`,
    next: 'a2_hugh'
  },
  a2_fold: {
    night: true,
    enter: g => { g.know('jules_fold', ['jules'], 'Jules tried to fold every hand at Ravenscourt so someone else would win. The deck kept refusing to let her.'); },
    text: `You fold.

You fold the seven-deuce. Fine. That\'s normal. Anyone would.

Next hand. Two aces. You fold them too.

Gran pauses, holding the deck. Then she deals the flop, and the turn, and the river, and Hugh wins with two pair, and he looks at you suspiciously, and takes the pot.

Next hand. Gran deals. You fold without looking.

And Judge Ellison, waking up, knocks over his whiskey, and it floods across the table, and the cards are soaked, and Gran says *misdeal* and calls for a new deck.

New deck. New deal. You fold without looking.

The lights go out.

Not the whole house. Just the library. Just for a second, a hiccup of dark, and in it you feel the thing behind your breastbone *turn*, hard, impatient, and when the lights come back up, Gran is holding the deck very still, and every card on the table, every card that had been dealt, is face up.

All of them. Every player\'s. Face up on the green felt.

And yours, the hand you folded without looking, is the ace and king of hearts. Beside it, slid off the top of the deck face up: queen, jack, ten of hearts. A royal flush. The best hand there is. You threw it away, and it came back anyway.

Nobody says anything. Callum laughs nervously. Father says *well, that\'s a new one*. Hugh stares at the cards.

Dr. Achterberg doesn\'t write in her notebook this time. She just looks at you, with her hands folded.

Gran gathers up the cards. Very slowly. She looks at you.

constance: Child. Play your cards.

It\'s not a request.`,
    next: 'a2_hugh'
  },
  a2_straight: {
    night: true,
    enter: g => { g.inc('hands_won'); },
    text: g => `You don\'t test it. You play it like a person.

You fold the seven-deuce, like a person would. Next hand, you get two queens and play them carefully, correctly, the way Gran taught you on peppermints when you were seven. You bet the right amount. You read Hugh. You fold to a raise when the board gets scary, like a careful, sensible person who knows how to lose.

You fold, and Hugh shows his cards to rub it in, and he had nothing. A bluff.

Next hand, you play properly again. You bet small. You fold to Callum\'s raise, because Callum has, for once, raised, and you want him to have it.

Callum shows his cards, grinning. A pair of fours.

And Gran turns over the cards you folded, like she does sometimes, to teach. A seven and a three. Nothing. His fours had you beat all along. You didn\'t give him anything. The fold was just correct.

You keep playing properly. You keep making the correct, careful, ordinary decisions. And somehow, every time, the correct decision is the one that wins. When you fold, the hand you folded would have lost. When you call, it wins. When you bet the careful amount, everyone folds to exactly that amount.

You\'re not doing anything. You\'re just *sitting there*, being a person, and the cards keep finding you anyway.

${g.last && g.last.nudged ? 'Every time, behind your breastbone: *click*.' : ''}

By eleven, you have nearly every chip on the table, and you haven\'t tried once.`,
    next: 'a2_hugh'
  },

  a2_hugh: {
    night: true,
    clock: { time: '11:20 PM' },
    text: g => `Last hand.

It\'s just you and Hugh. Father went out to the terrace on a call twenty minutes ago and never came back. Callum busted out an hour ago and is sitting beside you, cheerfully watching, holding your hand under the table. The judge went home. Dr. Achterberg sits back from the table with her water and her notebook, watching.

Hugh has the last of his chips stacked in front of him, two thousand dollars, and his face is red, and his tie is undone, and he is pushing them in.

hugh: All of it. All in. Come on, Jubilee. Come *on*. One time. Just once in your life, lose to me *once*.

He says it like a joke. It isn\'t a joke. You can hear eighteen years in it, every board game and every tennis match and every swim race at the club.${g.f('hugh6') === 'win' ? ' *Some Pembertons are lucky, Hugh, and some are just rich.*' : ''}

You look at your cards. You already know what they are. You knew before Gran dealt them.

Two kings.

The flop is already out. King of spades. Four of hearts. Nine of diamonds. Three kings. You can\'t lose this hand. You couldn\'t lose it if you tried.

Hugh is looking at you. Underneath the red face and the tie and the drinks, he\'s eleven minutes older than you and looking at you the way he looked at you when you were seven, on the day Gran first let you play, and he cried because you won all his peppermints.`,
    choices: [
      { text: 'Call. Win. It\'s what happens. It\'s what always happens.', tag: 'Call',
        check: { kind: 'pool', attr: 'nerve', skill: 'hustle', diff: 2, label: 'Take it', on: { crit: 'a2_hugh_call', success: 'a2_hugh_call', partial: 'a2_hugh_call', fail: 'a2_hugh_call', botch: 'a2_hugh_call' } } },
      { text: 'Fold. Push your three kings into the middle face down. Give it to him. *Give* it.', tag: 'Give it to him',
        fx: g => { g.flag('hugh_hand', 'gave'); g.bond('hugh', { trust: 2, affection: 2, tension: -2 }); g.know('jules_gave', ['jules', 'constance'], 'At Ravenscourt, Jules folded three kings and gave the last hand to Hugh. It was the first hand she\'d lost since she was seven. She chose to.'); }, go: 'a2_hugh_gave' }
    ]
  },
  a2_hugh_call: {
    night: true,
    enter: g => { g.flag('hugh_hand', 'won'); g.inc('hands_won'); g.bond('hugh', { tension: 2 }); },
    text: `jules: Call.

Hugh turns over his cards. Two nines. Three nines. A great hand.

You turn over yours. Three kings.

The turn: a two. The river: a two. You both make a full house. Yours is bigger. Kings full of twos.

Hugh sits there looking at the cards. Then he stands up, very carefully, the way drunk people stand up when they\'re trying not to look drunk.

hugh: Okay. Okay. Good game, everybody.

He goes out through the French doors onto the terrace. Through the glass, you watch him walk to the stone wall above the river and stand there with his back to the house, and his shoulders do something, and you look away, because you know what Hugh looks like when he cries, and he\'d never forgive you for seeing it.

Callum squeezes your hand under the table.

callum: That was *amazing*. You\'re amazing.

You have forty-six thousand dollars in chips in front of you, and your brother is crying on the terrace, and your boyfriend is holding your hand and telling you you\'re amazing.

Gran stands. She doesn\'t say anything. She looks at the chips, and at the French doors, and at you, and her face is very tired and very old.

constance: Leave the chips, child. Then come and find me.`,
    next: 'a3_terrace'
  },
  a2_hugh_gave: {
    night: true,
    text: `You don\'t call. You fold.

You push your three kings into the middle face down, gently, and you sit back.

jules: Fold.

Hugh stares at you.

hugh: You\'re folding.

jules: I\'m folding.

hugh: You never fold to me. You\'ve *never*—

He grabs the pot with both hands like it might disappear. Then he stops, with the chips half pulled toward him, and looks at your cards, face down in the middle of the table, and you watch him think about turning them over.

He doesn\'t. He\'s eleven minutes older, and he knows you, and he doesn\'t turn them over.

hugh: …Thanks, Jubilee.

It\'s very quiet. It\'s the most honest thing he\'s said to you since you were twelve.

Across the table, Gran is looking at you. Not at your cards, not at Hugh. At *you*. And her face is doing something you have never once in eighteen years seen it do: it\'s surprised.

You\'ve folded hands before tonight. This is the first time since you were seven that losing was your idea. Nothing stopped you.

*Click*, behind your breastbone. But softer this time. Puzzled, almost. As if it reached for something and found you\'d already given it away.

Dr. Achterberg writes in her notebook. Two lines this time.

constance: Leave the chips, child. Then come and find me.`,
    next: 'a3_terrace'
  },

  /* ================= ACT THREE: HALF PAST MIDNIGHT ================= */
  a3_terrace: {
    card: { kind: 'act', label: 'Act Three', title: 'Half Past Midnight' },
    night: true,
    loc: 'RAVENSCOURT · THE TERRACE',
    clock: { time: '12:31 AM' },
    text: g => `Callum finds you on the terrace, at the stone wall above the river, where Hugh stood an hour ago. It\'s cold. Your breath smokes. Below, the Schuylkill moves in the dark, and across it, very far off, there\'s the faint orange glow of the city.

He puts his jacket around your shoulders without asking. It smells like him, like clean laundry and boathouse.

callum: There you are.

jules: Here I am.

He stands next to you, close, looking at the river. He\'s quiet for a while, which isn\'t like him.

callum: Jules. Can I say something?

jules: Of course.

callum: I know I\'m not… exciting. I row and I study and I like my parents. I\'m not dumb. I know what I am. But I think about you all the time. Like, *all* the time. Even at five in the morning on the river.

He turns and looks at you, and his face in the dark is open and earnest and terrified.

callum: I love you. I\'ve said it before. I don\'t think I ever said it right. I love you, Jules.

Across the river, the city glows. Somewhere in it, ten miles east, there\'s a boy on a ninth floor who lies to you with his whole face.

You\'ve told Callum you love him before. You\'ve said it back, when he signed cards, when he hung up the phone. You\'ve never said it first, and he\'s never said it like *this*, like it costs something.`,
    choices: [
      { text: '"I love you too." It\'s what you say. It\'s what you\'ve always said.', tag: 'Say it back',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Say it', on: { strong: 'a3_ily_too', weak: 'a3_ily_too', miss: 'a3_ily_too' } } },
      { text: '"Thank you, Callum." Just that. You won\'t lie to him about this one.', tag: 'Thank you',
        fx: g => { g.flag('ily', 'thanks'); g.bond('callum', { tension: 2 }); g.bond('jules', { respect: 1 }); }, go: 'a3_ily_thanks' },
      { text: '"Callum, I don\'t think I know what that means. I don\'t think I ever have."', tag: 'The truth',
        fx: g => { g.flag('ily', 'truth'); g.bond('callum', { trust: 1, tension: 3 }); g.bond('jules', { trust: 1 }); }, go: 'a3_ily_truth' }
    ]
  },
  a3_ily_too: {
    night: true,
    enter: g => { g.flag('ily', 'too'); g.bond('callum', { affection: 2 }); },
    text: `jules: I love you too.

It comes out perfectly. Warm and certain and a little shy, exactly the way it should. He believes it completely. Everyone always does.

He kisses you. Gently, carefully, the way he does everything, holding your face in his warm callused hands, and you kiss him back, and you close your eyes, and you think about a roof at 4:12 in the morning, and a boy who never touched your face at all.

callum: Okay. Okay. Wow. Okay.

He laughs at himself. He\'s so happy. He\'s so happy it\'s like watching someone stand in the sun.

callum: I should go. I\'ve got erg at six. The car\'s coming at one. Text me when you\'re up?

jules: Of course.

He kisses your forehead and goes in. You stand at the wall with his jacket around your shoulders and you say it to yourself once, in your head, to see how it sounds, now that you\'ve said it.

*I love you too.*

It sounds perfect. It sounds like every other thing you\'ve ever won.`,
    next: 'a3_phone'
  },
  a3_ily_thanks: {
    night: true,
    text: `jules: Thank you, Callum.

He waits. He waits for the rest of it. You watch him wait, and you watch him realize there isn\'t any more.

callum: …Oh.

jules: I mean it. Thank you. Nobody\'s ever said it like that to me.

callum: But you don\'t—

jules: I don\'t know. I\'m not going to say something I don\'t know. Not to you. You\'re the only person who\'s never once lied to me.

He looks at you in the dark. Then he nods. He\'s hurt. You can see it. He\'s trying very hard not to let it be your problem. He\'s always been good at that.

callum: Okay. That\'s okay. That\'s honest. I\'d rather have honest.

He takes your hand and squeezes it once.

callum: I\'ve got erg at six. The car\'s coming at one. I\'ll text you.

He goes in. He leaves his jacket on your shoulders. He doesn\'t ask for it back.`,
    next: 'a3_phone'
  },
  a3_ily_truth: {
    night: true,
    text: `jules: Callum, I don\'t think I know what that means. I don\'t think I ever have.

He stares at you.

jules: I\'ve said it to you. I know I have. I said it because you said it, and because it was the next thing to say. I\'m sorry. You don\'t deserve that. You deserve somebody who knows what it means.

callum: Are you breaking up with me?

jules: No. I don\'t know. I\'m telling you the truth, for once. I thought you should have that, at least, before anything else.

He looks out at the river. When he talks again, his voice is very quiet.

callum: Is it him?

jules: Who?

callum: The guy from your hall. With the pizza shirt. At the dorm that morning, with the coffee. He looked at you like I look at you.

You don\'t answer. You can\'t. You\'ve never been asked a question you couldn\'t answer before.

Callum nods, slowly. He reaches for the jacket on your shoulders, like he\'s going to take it back. He fixes the collar instead.

callum: Okay. I\'ve got erg at six. The car\'s coming at one. I\'ll… I\'ll call you.

He goes in. You stand at the wall in his jacket. It\'s worse than the cold would have been.`,
    next: 'a3_phone'
  },

  a3_phone: {
    night: true,
    clock: { time: '12:58 AM' },
    text: g => `You take your phone out.

You think about the elevator. *Two of him.*

You open your messages. You scroll past Mother and Father and Simone and Hugh and Callum, and you stop on a name you saved in August, the first week, out of spite, and never changed:

**WAWA GUY**

You\'ve texted him eleven times in six weeks. All of them about calculus.

You type: *I won everything tonight*

You delete it.

You type: *Are you awake*

You delete it.

You type: *What if it was me.*

Your thumb is over the button. Behind your breastbone, nothing clicks. Nothing turns. For the first time all night, whatever has been watching you is perfectly, completely quiet, like it\'s leaning in to see what you\'ll do.`,
    choices: [
      { text: 'Delete it. All of it. Put the phone face down on the cold stone.', tag: 'Delete',
        fx: g => { g.flag('text6', 'none'); }, go: 'a3_phone_none' },
      { text: 'Send something small instead: *how\'s the arm*', tag: 'Small',
        fx: g => { g.flag('text6', 'arm'); g.know('jules_text_arm', ['sam', 'jules'], 'At 12:58 a.m. on October 4, Jules texted you: "how\'s the arm."'); g.bond('jules', { affection: 1 }); }, go: 'a3_phone_arm' },
      { text: 'Send it. *What if it was me.*', tag: 'Send it',
        fx: g => { g.flag('text6', 'whatif'); g.know('jules_text_whatif', ['sam', 'jules'], 'At 12:58 a.m. on October 4, Jules texted you: "What if it was me." Nothing else.'); g.bond('jules', { affection: 1, trust: 1 }); }, go: 'a3_phone_whatif' }
    ]
  },
  a3_phone_none: {
    night: true,
    text: `You delete it. Letter by letter, backward, the way you\'d unpick a stitch.

You put the phone face down on the stone wall.

Ten miles east, a boy on a ninth floor is asleep, or isn\'t. For thirty seconds tonight, you almost asked him a question.

You think that\'s probably for the best. You think that\'s what *for the best* means: the thing that happens when you don\'t do anything.

You\'re not sure anymore that you\'ve ever once done anything at all.`,
    next: 'tag_chapel'
  },
  a3_phone_arm: {
    night: true,
    text: `TXT jules: how\'s the arm

You send it before you can think. The little *whoosh*. Delivered.

It\'s one in the morning. He\'s asleep. Of course he\'s asleep. Normal people are asleep at one in the morning, and he\'s a very normal guy, with his cereal and his doorway.

The three dots appear.

They disappear.

They appear again. For a long time.

TXT sam: healed. weirdly fast lol
TXT sam: how was the castle

TXT jules: i won
TXT sam: obviously
TXT sam: did you have fun

You look at that for a long time. *did you have fun.* Nobody\'s ever asked you that about a card game. Nobody\'s ever thought to.

TXT jules: no
TXT jules: goodnight kearney

TXT sam: goodnight pemberton

You hold the phone against your chest on the cold terrace, with the city glowing ten miles away, and it\'s warm, from your hand.`,
    next: 'tag_chapel'
  },
  a3_phone_whatif: {
    night: true,
    text: `TXT jules: What if it was me.

You send it.

The little *whoosh*. Delivered.

You stand there. Your heart is going. You can\'t believe you did it. You\'ve never once in your life done something you couldn\'t take back, and you just did, with your thumb, at one in the morning, to a boy saved in your phone as WAWA GUY.

The three dots appear.

They disappear.

They don\'t come back.

One minute. Five. Ten. You stand at the wall in the cold holding the phone, and it says *Delivered*, and then, at 1:09, it says *Read*.

And nothing else.

All you know is *Read*, and the cold, and the thing behind your breastbone, perfectly silent.`,
    next: 'tag_chapel'
  },

  /* ================= TAG ================= */
  tag_chapel: {
    card: { kind: 'tag' },
    night: true,
    loc: 'RAVENSCOURT · THE CHAPEL',
    clock: { time: '1:20 AM' },
    enter: g => { g.know('constance_started', ['jules', 'constance'], 'In the chapel at Ravenscourt, Gran had Jules roll the ivory die on the altar. Six. "How many times?" "Every time." Gran said: "It\'s started, then."'); g.bond('constance', { trust: 2 }); },
    text: g => `Gran is waiting for you at the end of the boxwood path, in a black wool coat, holding an old brass lantern with a real candle in it.

She doesn\'t say anything. She turns and walks, and you follow her, the way you followed her everywhere when you were small, down the path between the dark hedges, toward the chapel.

The chapel at Ravenscourt is small and gray and very old, built in 1891 by your grandfather\'s grandfather, with a slate roof and a bell nobody rings and a single stained-glass window over the altar. You haven\'t been inside since you were seven years old. Since the night Hugh locked you in it, as a joke, and went to bed, and forgot.

Gran opens the door. It isn\'t locked. It\'s never locked. It wasn\'t locked that night either. You never tried it. You were seven, and you could have walked out at any time. You sat in the dark all night anyway, because you were sure that if you moved, something would notice.

Inside: cold stone, old wood, the smell of candle wax and dust and January. Gran sets the lantern on the altar. In its light, the stained-glass window glows dimly above you. You\'d forgotten the window. It shows a tall figure in white standing in a doorway, one hand resting on the edge of the door, and behind the figure there\'s nothing, not sky, not stars, just a deep blue dark, and a single word on a ribbon at the bottom, in gold: **TENEO**.

constance: Sit down, child.

You sit in the front pew. Gran stays standing. She holds out her hand, palm up.

constance: The die.

You take it out of your pocket. Her die. Small, yellowed ivory, older than anyone alive, the pips worn almost smooth. She gave it to you on your sixteenth birthday and told you *it isn\'t lucky. Luck isn\'t real.* You\'ve carried it every day since.

You put it in her palm. She closes her hand around it, and holds it for a moment, eyes closed, the way she held cards when you were small. Then she gives it back.

constance: Roll it. On the altar.

You stand. You go to the altar. You roll it on the old stone, under the window, in the candlelight.

It tumbles. It stops.

Six.

constance: Again.

Six.

constance: Again.

Six.

You don\'t wait for her to ask. You roll it ten more times, faster and faster, and the sound of ivory on stone fills the chapel like a clock, and every time it\'s six, and six, and six, and you\'re breathing hard, and your hands are shaking, and you stop.

constance: How many times?

jules: Every time. Since August. Every single time.

constance: And before August?

jules: …Most times.

Gran is quiet for a long while. The candle flame in the lantern stands perfectly straight, perfectly still, not a flicker. ${g.hv('jules_debt') >= 4 ? 'You think about every loss tonight that was somebody else\'s. *It has to go somewhere, child.*' : ''}

She looks up at the window. At the figure in the doorway. At the word on the ribbon.

When she speaks, it\'s so quietly that you almost don\'t hear it, and she isn\'t saying it to you.

constance: It\'s started, then.

She picks up the lantern. The light swings, and the shadows of the pews swing with it, and for one second, in the moving dark behind the altar, you feel it, the thing you\'ve felt your whole life, the room-behind-you feeling.

It isn\'t behind you now.

It\'s *in front* of you. In the window. Looking down.

${g.f('hugh_hand') === 'gave' ? 'And, very faintly, so faintly you\'ll spend the rest of the night deciding whether you imagined it, it seems *puzzled*.' : 'And, very faintly, so faintly you\'ll spend the rest of the night deciding whether you imagined it, it seems *pleased*.'}`,
    end: true
  }
});

Object.assign(EH.episodes.s01e06, {
  polls: [
    { q: 'The worst hand in poker', opts: [
      { label: 'Went all in', pct: 46, if: g => g.f('test6') === 'allin' },
      { label: 'Folded everything', pct: 31, if: g => g.f('test6') === 'fold' },
      { label: 'Played it straight', pct: 23, if: g => g.f('test6') === 'straight' || !g.f('test6') }
    ] },
    { q: 'The last hand, against Hugh', opts: [
      { label: 'Called. Won.', pct: 38, if: g => g.f('hugh_hand') === 'won' },
      { label: 'Gave it to him', pct: 62, if: g => g.f('hugh_hand') === 'gave' }
    ] },
    { q: 'At 12:58 a.m.', opts: [
      { label: 'Deleted it', pct: 33, if: g => g.f('text6') === 'none' },
      { label: '"how\'s the arm"', pct: 41, if: g => g.f('text6') === 'arm' },
      { label: '"What if it was me."', pct: 26, if: g => g.f('text6') === 'whatif' }
    ] }
  ],
  onEnd: g => {
    g.recap(g.f('hugh_hand') === 'gave' ? 'At Ravenscourt, Jules couldn\'t lose a hand of cards, until she gave one away.' : 'At Ravenscourt, Jules couldn\'t lose a hand of cards, no matter what she did.');
    g.recap('A physicist named Dr. Achterberg asked where Jules was at 11:51 on August 22.');
    g.recap(g.f('ily') === 'too' ? 'Callum said "I love you." Jules said it back.' : g.f('ily') === 'thanks' ? 'Callum said "I love you." Jules said "Thank you."' : 'Callum said "I love you." Jules told him she didn\'t know what it meant.');
    g.recap('In the chapel at Ravenscourt, Constance watched the die come up six, and said, "It\'s started, then."');
  }
});
