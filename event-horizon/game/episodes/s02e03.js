/* S2 · E3 · OLD MONEY (Jules POV), part 1 of 3: meta, cold open, Act One ("Boxing Day"). */
EH.episode({
  id: 's02e03', season: 2, number: 3, title: 'Old Money', look: 's2', pov: 'jules',
  cast: ['jules', 'constance', 'hugh', 'catherine', 'whitney', 'simone', 'sam'],
  start: 'cold_open',
  xp: 4,
  previously: g => [
    'You have never lost a game of cards in your life.',
    'On the Parkway, four men fired at you from ten feet. Every dart missed.',
    'At the Water Works, Sam Kearney asked what you did. You told him you were lucky.',
    'You made a deal: in January, you ask, he answers. Then he asks, and you answer.',
    'Gran, on the telephone: "Come home, child. It\'s time you knew what we are."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'RAVENSCOURT · GLADWYNE',
      clock: { day: 'Sat', date: 'Dec 26', time: '3:12 AM' },
      text: g => `You are Juliet Louisa Pemberton, and you are sitting on the floor of your bathroom at Ravenscourt at three in the morning with an ivory die, trying to lose.

The bathroom is marble. Your grandmother had it done in 1971, pink and gray, with gold fixtures shaped like swans. You\'ve been in here since one-thirty. The door is locked. The fan is on, so nobody hears.

You\'ve rolled it two hundred and eleven times. You\'ve been counting in a notebook, in pencil, in neat little groups of five.

Two hundred and eleven sixes.

You tried rolling it off the edge of the sink. Six. Off the top of the toilet tank, so it bounced twice on the marble and skittered under the radiator. You had to lie on your stomach with your phone flashlight to see it. Six. You tried closing your eyes. You tried rolling it *wanting* a one, wanting it so hard your teeth hurt. Six. You tried not wanting anything at all, sitting very still, thinking about nothing, the way the yoga woman at Episcopal used to make you breathe. Six.

You tried, once, around 2:40, rolling it with your eyes closed and *wanting him*. Not the die. Just wanting. Just thinking about a stone wall over the Schuylkill and a goose and blood on both your faces.

Six.

Your phone is on the bath mat beside you. At 9:14 on Christmas morning he answered your three a.m. texts.

TXT sam: merry christmas pemberton
TXT sam: i asked her. his name was salvatore. her brother. im named after him
TXT sam: ill tell you the rest in january
TXT sam: deal is a deal

You\'ve read it eleven times. *I\'ll tell you the rest.* There\'s a rest. There\'s always a rest with him. Bleeding on the bathroom floor at Cardone. The Parkway. *I felt you go.*

You pick up the die. You hold it in your palm. It\'s warm from your hand. It\'s always warm.

You roll it one more time, across the cold pink marble, and you don\'t look.

You don\'t have to look.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_house' },

    /* ================= ACT ONE: BOXING DAY ================= */
    a1_house: {
      card: { kind: 'act', label: 'Act One', title: 'Boxing Day' },
      loc: 'RAVENSCOURT · THE MORNING ROOM',
      clock: { day: 'Sat', date: 'Dec 26', time: '10:00 AM' },
      text: g => `Ravenscourt in the week between Christmas and New Year\'s is a museum where the exhibits argue.

Your father is in his study with the door closed, on calls with London and Zurich and a man in Singapore who apparently doesn\'t observe Christmas. Your mother is at HUP; she always takes the holiday shifts, because the chief of surgery should be seen taking the holiday shifts. Hugh is asleep until noon every day, then awake until four in the morning in the billiard room with friends from Wharton whose names all seem to be Tucker.

And Gran.

Gran is everywhere. In the morning room with the *Inquirer* and black coffee. In the conservatory with the orchids she talks to in French. On the south terrace at exactly four o\'clock every afternoon, in her fur, with her one cigarette of the day, which she smokes with her eyes closed, like a prayer.

She hasn\'t said a word about the chapel since you got home. Not one. Every time you walk into a room she\'s in, she looks at you over her glasses, and smiles, and goes back to what she was doing.

*New Year\'s Day,* she told you on the phone. *Not before.*

She\'s making you wait. You think she\'s enjoying it.

You have a week. You have this house, and these people, and a week.`,
      hub: {
        slots: 3, label: 'The week between',
        blurb: 'The chapel is New Year\'s Day.',
        options: [
          { id: 'j3_hugh', text: 'Hugh has challenged you to a game of billiards. "For old times\' sake, Jubilee." He has never once beaten you.', cost: 1, tag: 'Hugh', go: 'a1_hugh' },
          { id: 'j3_mother', text: 'Your mother asked, at dinner, whether you\'d like to "see a real hospital" during your break. Go to HUP with her.', cost: 1, tag: 'Mother', go: 'a1_mother' },
          { id: 'j3_simone', text: 'Simone has texted you nine times since Christmas Eve. The last one says: *Juliet. Call me. It\'s about a list.*', cost: 1, tag: 'Simone', go: 'a1_simone' },
          { id: 'j3_gran', text: 'Four o\'clock. Gran on the terrace with her cigarette. Bring her a coat she doesn\'t need. Sit.', cost: 1, tag: 'Gran', go: 'a1_gran' },
          { id: 'j3_father', text: 'Your father\'s study door is open for once. He\'s off the phone. Knock.', cost: 1, tag: 'Father', go: 'a1_father' }
        ],
        done: 'a2_party'
      }
    },

    a1_hugh: {
      text: g => `The billiard room at Ravenscourt has a table that came from a club in London in 1902 and a ceiling painted with clouds, and Hugh in a cashmere sweater with a glass of something at eleven in the morning, chalking his cue.

hugh: Jubilee. You came. I was sure you\'d find a reason not to.

jules: I never need a reason. I just don\'t come.

hugh: Ouch.

He racks. Eight ball. He breaks, and it\'s a good break, and he sinks two solids, and he grins at you like he did when you were six and he got the bigger slice of cake.

hugh: Hundred dollars?

jules: You don\'t have a hundred dollars. You have Father\'s hundred dollars.

hugh: Then Father\'s hundred dollars.

He misses on his third shot. It\'s your table.

You\'ve never lost to Hugh. Not at billiards, not at backgammon, not at Monopoly when you were eight and he cried and Gran sent him to his room. He knows it. You know it. He keeps asking anyway, once a year, every Christmas, like a man buying a lottery ticket.

You look at the table. You could clear it. You can feel the click behind your breastbone already, getting ready.`,
      choices: [
        { text: 'Clear the table. It\'s what happens. It\'s what always happens.', tag: 'Luck',
          check: { kind: 'pool', attr: 'reflex', skill: 'hustle', diff: 3, label: 'Clear the table', on: { crit: 'a1_hugh_win', success: 'a1_hugh_win', partial: 'a1_hugh_win', fail: 'a1_hugh_win', botch: 'a1_hugh_win' } } },
        { text: 'Play it straight. Don\'t let the click happen. Just shoot, like a person, and see.', tag: 'Play it straight',
          check: { kind: 'pool', attr: 'reflex', skill: 'hustle', diff: 3, noLuck: true, label: 'Play it straight', on: { crit: 'a1_hugh_straight_win', success: 'a1_hugh_straight_win', partial: 'a1_hugh_lose', fail: 'a1_hugh_lose', botch: 'a1_hugh_lose' } },
          fx: g => { g.flag('straight_hugh'); } }
      ]
    },
    a1_hugh_win: {
      enter: g => { g.flag('hugh3', 'won'); g.bond('hugh', { tension: 1 }); },
      text: `You clear the table. Six balls and the eight, every one dead center, without seeming to aim, while Hugh watches with his glass halfway to his mouth.

The last ball drops. *Click*, behind your breastbone. Like a lock turning.

Hugh puts his glass down.

hugh: Every year.

jules: Every year.

hugh: You know what\'s funny, Jubilee? I\'m good at this. I\'m really good. I won the tournament at the Merion Cricket Club two years running. I\'ve never lost to anybody but you.

He hangs his cue on the rack, very carefully.

hugh: I\'ve never seen you miss a shot that mattered. Not once. Not since we were six.

He doesn\'t wait for an answer. He takes his glass and goes.`,
      next: '@hub'
    },
    a1_hugh_straight_win: {
      enter: g => { g.flag('hugh3', 'straight_won'); g.hidden('jules_debt', -1); g.bond('hugh', { respect: 1 }); },
      text: `You don\'t let it happen.

You feel the click getting ready behind your breastbone, and you don\'t let it. It\'s like holding your breath underwater: you just don\'t, and it doesn\'t.

And you shoot. Like a person. You line up the three ball and you think about the angle and the spin and the felt, the way Gran\'s old instructor taught you when you were nine, before you learned you didn\'t need to think.

It goes in.

The next one goes in. The next one rattles in the jaws of the pocket for a horrible second, the first time in your life a ball has ever rattled for you, and you feel your heart go, and it drops.

You clear the table. The hard way. It takes you nine minutes. Your hands are shaking.

Hugh is staring at you.

hugh: You missed.

jules: I didn\'t miss.

hugh: You *almost* missed. The seven. It almost didn\'t go.

He says it like he\'s just seen a dog talk.

hugh: I\'ve never seen anything almost not go for you.`,
      next: '@hub'
    },
    a1_hugh_lose: {
      enter: g => { g.flag('hugh3', 'lost'); g.hidden('jules_debt', -1); g.bond('hugh', { affection: 2, respect: 1, tension: -1 }); },
      text: `You don\'t let it happen.

You feel the click getting ready behind your breastbone, and you don\'t let it. It\'s like holding your breath underwater: you just don\'t, and it doesn\'t.

And you shoot. Like a person.

The three ball goes in. The five goes in. The seven rattles in the jaws of the pocket, and stops, and stays.

You missed.

You *missed*.

You stand there with the cue in your hands, looking at the seven ball sitting on the lip of the corner pocket, and you feel something you have never felt at a table. It\'s hot, and it\'s in your face, and your stomach drops, and it\'s *wonderful*.

Hugh takes the table. He clears it. He sinks the eight. He stands there with his cue, looking at the empty table, and then at you, with his mouth open.

hugh: I won.

jules: You won.

hugh: Jubilee. I *won*. Eighteen years—

And he laughs, really laughs, delighted, like he did when you were small, before he started keeping score, and he comes around the table and picks you up off your feet and swings you around in the billiard room under the painted clouds.

hugh: I won! I beat Juliet Pemberton! Somebody *write it down*!

You\'re laughing. You can\'t stop. You owe Father a hundred dollars.

You lost. You would like, very much, to do it again.`,
      next: '@hub'
    },

    a1_mother: {
      enter: g => { g.flag('jules_hup'); g.know('catherine_halcyon', ['jules'], 'In your mother\'s office at HUP, on the coat hook: a Halcyon Dynamics visitor badge on a lanyard. CATHERINE PEMBERTON, MD · MEDICAL ADVISORY BOARD.'); g.bond('catherine', { trust: 1 }); },
      text: g => `Your mother drives the Range Rover to the Hospital of the University of Pennsylvania like it\'s an emergency, which is how she drives everywhere.

She shows you the OR suites. The surgical ICU. A resident who goes white when she walks into the room and drops a tablet. She introduces you to people as *my daughter Juliet, who goes to Temple*, with no inflection whatsoever on *Temple*, which is somehow worse than if she\'d said it with disgust.

In her office, she takes a call and steps into the hall, and you\'re alone for a minute with her diplomas and the photograph of you and Hugh at six in matching sailor suits and the coat hook on the back of the door.

There\'s a lanyard on the coat hook. A visitor badge. White plastic, with a little logo: a sunrise over a horizon line.

**HALCYON DYNAMICS**
**CATHERINE PEMBERTON, MD**
**MEDICAL ADVISORY BOARD**

You look at it for a while.

The people with the ambulances. The darts. The man on the radio who said *civilian, on camera, hold*. Femi Ojo, on the floor of a hallway, with marks on a door.

Your mother comes back in.

catherine: Juliet. You look pale.

jules: What\'s Halcyon?

She doesn\'t look at the badge. She doesn\'t have to; she knows exactly where it is, the way she knows where every instrument on every tray is.

catherine: A consulting arrangement. Your father\'s firm has an interest. They\'re doing some very promising work on cellular regeneration. I review protocols. Twice a year. It\'s nothing.

jules: A boy on my floor died in one of their studies.

That stops her. Just for a second. You see it go through her, the surgeon\'s flinch, the one she\'d never let a patient see.

catherine: I read about that. An adverse reaction. It was very sad.

She picks up her bag.

catherine: Come. I\'ll show you the new cardiac wing.

You follow her out. You don\'t look back at the badge.`,
      next: '@hub'
    },

    a1_simone: {
      text: g => `You call her from the stables, because the stables are the only place at Ravenscourt where no one can hear you.

She picks up on the first ring.

simone: Juliet Louisa Pemberton.

jules: You used my middle name. Is someone dead?

simone: Not yet. Listen to me. I\'m in my grandmother\'s car in Decatur, Georgia, with the heat on, and I\'m only going to say this once, and then it\'s your turn.

You hear her breathe.

simone: I keep lists. On my phone. *Things That Don\'t Add Up.* I had one about Salvatore. That one\'s closed now. You don\'t need to know how. I have one about you. It\'s eleven items long.

simone: Number one. The window in August. Every piece of glass missed you. Number four. You\'ve never lost a game of anything. Number seven. The Parkway, Thanksgiving. On my grandmother\'s TV. Four men. Four darts. Ten feet. *Juliet.*

simone: I gave him one chance to tell me himself. He blew it. And then he got a second one, because I\'m weak and I love him, God help me.

simone: You get one. That\'s the rule. That\'s my only rule in this life. This is yours.

The horses shift in their stalls. Mercutio at the end, head over his stall door, watching you with his ears back.`,
      choices: [
        { text: 'Tell her the truth. The part you know. You\'re lucky. Impossibly. It\'s getting worse. You don\'t know what it is.', tag: 'Tell her',
          fx: g => { g.flag('simone_j3', 'told'); g.bond('simone', { trust: 3, affection: 2 }); g.know('jules_changed', ['simone']); }, go: 'a1_simone_told' },
        { text: '"I\'m a very lucky person, Simone. Everybody says so." Lie. You\'re very good at it.', tag: 'Lie',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', noLuck: true, label: 'Lie to Simone', on: { strong: 'a1_simone_lie', weak: 'a1_simone_lie', miss: 'a1_simone_lie' } } }
      ]
    },
    a1_simone_told: {
      text: `You lean your forehead against the cold brass of Mercutio\'s nameplate, and you tell her.

The window. The glass. The cards, the dice, two hundred and eleven sixes in a pink marble bathroom. Mercutio, in October, and the reins you let go of to see what would happen, and how you landed on your feet and he didn\'t. The Parkway, and the click behind your breastbone with every dart.

You\'ve never said any of it out loud. Not to anybody. It comes out in order, precise, like a case history. That\'s the only way you know how to say it.

When you\'re done, there\'s a long silence from Decatur.

simone: Okay.

jules: That\'s all? *Okay?*

simone: That\'s all for now. I\'m processing. I\'m in a Buick.

Another silence.

simone: Juliet. Does Salvatore know?

jules: No.

simone: Hm.

jules: What does *hm* mean?

simone: It means I have a policy about other people\'s secrets, and I\'m keeping it. It means you two should really have a conversation. Soon. Like a pair of grown adults instead of two people circling each other on a roof for five months with your hands in your pockets.

simone: I love you. Come back to Cardone. I\'ll make you tea.`,
      next: '@hub'
    },
    a1_simone_lie: {
      enter: g => { g.flag('simone_j3', 'lied'); g.bond('simone', { trust: -2 }); },
      text: `jules: I\'m a very lucky person, Simone. Everybody says so. My grandmother says it\'s good breeding.

It comes out perfectly. It always comes out perfectly. You\'ve been lying beautifully since you were four.

Silence from Decatur.

simone: That was your one, Juliet.

She doesn\'t sound angry. She sounds tired.

simone: I\'m not going to say anything to anybody. I want you to know that. I don\'t give up people. I just stop being somewhere they can tell me things.

She hangs up.

You stand in the stables with your forehead against the cold brass.

You\'ve never hated being good at something before.`,
      next: '@hub'
    },

    a1_gran: {
      enter: g => { g.bond('constance', { trust: 1, affection: 1 }); g.flag('gran_terrace'); },
      text: `Four o\'clock. The south terrace. The lawn going down white to the woods, and beyond the woods, the river, and beyond the river, the city, a smudge on the horizon.

Gran is in her chair in her fur with her eyes closed and her cigarette, the one cigarette, burning between two fingers. You put the coat around her shoulders anyway. She doesn\'t open her eyes.

constance: I don\'t need that.

jules: I know.

constance: Sit, then.

You sit on the stone bench beside her. Neither of you says anything for a while. She smokes. You watch the smoke go up, straight up, no wind at all, the way smoke goes up on the very coldest days.

constance: You rolled it two hundred and twelve times last night.

You turn and look at her. She still has her eyes closed.

jules: How could you possibly—

constance: Because I did the same thing, child. In 1959. In that same bathroom, before it was pink. I got to three hundred and forty before I fell asleep on the floor.

She opens her eyes. They\'re the same gray as yours.

constance: It never comes up one. You know that. You knew it at two hundred. You kept going because you wanted to find the edge of it. There isn\'t one. Not for us. That\'s the first thing.

jules: What\'s the second thing?

constance: New Year\'s Day. The chapel.

She taps the ash off her cigarette.

constance: The Kearney boy. He sent you something on Christmas morning. You smiled at your phone over breakfast. Your mother saw. Your mother sees everything that\'s none of her business and nothing that is.

jules: He\'s a friend.

constance: Of course he is.

She closes her eyes again.

constance: His mother\'s people. They\'re from the river wards, aren\'t they? South Philadelphia. Italians.

jules: How do you know that?

constance: I make it my business to know who my granddaughter smiles at.

She smokes.

constance: Some families are lucky, child. Some families are *early*. Keep him close. It\'s better to have the early ones where you can see them.

She won\'t say anything else. You ask. She smokes her cigarette down to the filter, and puts it out in the little silver dish she brings out for exactly one cigarette a day, and goes inside without another word.`,
      next: '@hub'
    },

    a1_father: {
      enter: g => { g.bond('whitney', { affection: 1 }); g.flag('father_study'); },
      text: `Your father\'s study is all leather and brass and the smell of his cologne and the hum of three monitors full of numbers in different colors. He\'s at the window with his hands in his pockets, looking at the snow, and when you knock he turns around with his whole face lighting up, the way it always does, the way it does for everyone.

whitney: Jules-bug! Come in, come in. I\'ve been hiding in here like a fugitive. How are you? How\'s Temple? How\'s the — the Calc?

jules: It\'s fine. I got an A.

whitney: Of course you did. Of course you did.

He hugs you. He smells like he always smells. He\'s the warmest man in the world for exactly as long as he\'s in the room with you.

jules: Father. What\'s Halcyon Dynamics?

He doesn\'t miss a beat. That\'s the thing about your father. He never misses a beat.

whitney: Clean energy! Very exciting stuff. Some of the smartest people I\'ve ever met. We have a small position. Why?

jules: A boy on my floor died in one of their studies.

whitney: Oh, sweetheart. I heard. I\'m so sorry. That must have been awful for you.

He means it. You can see that he means it. And you can see, at the exact same time, behind the meaning it, something closing like a door.

whitney: You know, there\'s someone from Halcyon coming to the party on New Year\'s Eve. Dr. Achterberg. You met her in October, at the card game. You should talk to her. She\'d love to meet you properly. She asked about you.

His phone buzzes on the desk. He looks at it. He looks at you.

whitney: Singapore. I\'m so sorry. Can we finish this later?

You never finish anything later, with your father. You both know that. He kisses the top of your head, and picks up the phone, and turns back to the window, and his voice changes in the middle of *hello*, and you\'re gone.`,
      next: '@hub'
    }
  }
});
