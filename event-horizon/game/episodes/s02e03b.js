/* S2 · E3 · OLD MONEY (Jules POV), part 2 of 3: Act Two ("Auld Lang Syne"). */
EH.scenes('s02e03', {

  /* ================= ACT TWO: AULD LANG SYNE ================= */
  a2_party: {
    card: { kind: 'act', label: 'Act Two', title: 'Auld Lang Syne' },
    night: true,
    loc: 'RAVENSCOURT · THE GREAT HALL',
    clock: { day: 'Thu', date: 'Dec 31', time: '10:20 PM' },
    text: g => `The Pemberton New Year\'s Eve party has been held in the great hall at Ravenscourt every year since 1894, except 1918, when there was the flu, and 2020, when there was the other one.

Two hundred people. A string quartet in the gallery playing Cole Porter. Champagne in towers. Ice sculptures of swans melting slowly into silver trays. Judges, bishops, the Lieutenant Governor, the man who owns half of King of Prussia, three members of the Philadelphia Orchestra, and a great many people whose job, as far as you can tell, is to be at things.

You\'re in black. Your mother chose it. It\'s beautiful, and it\'s the exact dress you\'d have chosen if anybody had ever let you choose anything.

${g.f('hugh3') === 'lost' ? 'Hugh catches your eye across the room, raises his glass, and mouths *I won*. He\'s done it four times tonight. It\'s become your favorite thing.' : g.f('hugh3') ? 'Hugh is by the fireplace with three of the Tuckers, watching you over his glass. He\'s been watching you since the billiard room.' : 'Hugh is by the fireplace with three of the Tuckers, already drunk, telling a story about a sailboat.'}

And by the windows, in a gray dress with no jewelry, holding a glass of champagne she isn\'t drinking, Dr. Miriam Achterberg.

She looks like a retired piano teacher. She has looked like that both times you\'ve seen her. In October, at the card table, she folded every hand without looking at her cards, and wrote one line in a little black notebook when you won.

She sees you see her. She smiles, and lifts the glass a quarter of an inch, like a toast.

At 10:40, your father crosses the room to her, puts his hand lightly on her elbow, says something, and the two of them walk out of the great hall together, toward the east wing.

Toward his study.`,
    choices: [
      { text: 'Follow them. The servants\' corridor runs behind the study. The panel by the bookcase doesn\'t close all the way. It hasn\'t since you were nine.', tag: 'Follow',
        check: { kind: 'd20', attr: 'wits', skill: 'stealth', dc: 14, label: 'The servants\' corridor', on: { crit: 'a2_overhear', success: 'a2_overhear', fail: 'a2_overhear', fumble: 'a2_overhear' } } },
      { text: 'Don\'t follow. Wait for her to come back. Then go talk to her yourself.', tag: 'Talk to her',
        fx: g => { g.flag('achterberg3', 'talk'); }, go: 'a2_achterberg' },
      { text: 'Stay with the party. Find a quiet corner. Text Sam. It\'s almost midnight.', tag: 'Text Sam',
        fx: g => { g.flag('achterberg3', 'none'); g.bond('jules', { affection: 1 }); }, go: 'a2_text' }
    ]
  },

  a2_overhear: {
    night: true,
    enter: g => { g.flag('achterberg3', 'overheard'); g.know('forty_four', ['jules'], 'In your father\'s study on New Year\'s Eve, Dr. Achterberg called you "forty-four." "The most significant subject we have." Your father said: "She\'s my daughter, Miriam." She said: "That makes it simpler."'); },
    text: `The servants\' corridor at Ravenscourt is a narrow passage behind the walls of the east wing, built in 1891 so the help could carry coal to the fireplaces without being seen. Nobody\'s used it in sixty years. It smells of dust and old plaster and mice.

You found it when you were nine, hiding from Hugh. The panel beside your father\'s bookcase has never closed all the way. There\'s a gap the width of a pencil, and through the gap, if you stand very still, you can see half of the study, and hear all of it.

You stand very still.

whitney: …don\'t like doing this at a party, Miriam.

ACHTERBERG: Parties are the only time you\'re home, Whitney.

The click of a decanter. Ice.

ACHTERBERG: Forty-four is stable. Remarkably stable. On the Parkway, under fire, she walked four hundred meters through an active recovery with a heart rate of sixty-two. The thermal shows nothing at all. She doesn\'t run cold like the others. She doesn\'t run anything. It\'s as if the world simply arranges itself.

whitney: She\'s my daughter, Miriam.

ACHTERBERG: Yes. She\'s also the most significant subject we have. And she\'s yours. That makes it simpler, not harder. We don\'t need to recover her. We don\'t need a bed. We need her to keep doing exactly what she\'s doing, near exactly the people she\'s doing it near.

whitney: And the Kearney boy?

ACHTERBERG: Leave the boy to Cole. Not yours. Not hers.

A pause.

ACHTERBERG: And your mother?

whitney: My mother has never been cooperative a day in her life. She\'s eighty-four. She\'ll be dead soon.

He says it lightly. He says it the way he says everything, warm and easy, like a man telling you the weather.

ACHTERBERG: Then we wait. I\'m very good at waiting.

The decanter again. Their glasses touch.

ACHTERBERG: Happy New Year, Whitney.

You stand in the dark in the servants\' corridor with your hand over your mouth, and you don\'t breathe until they\'re gone.

*Forty-four.*

You\'re a number.

And Sam is *Cole\'s concern*.`,
    next: 'a2_midnight'
  },
  a2_achterberg: {
    night: true,
    enter: g => { g.know('achterberg_card', ['jules'], 'Dr. Achterberg gave you her card on New Year\'s Eve. "Whenever you\'re ready to understand what you are, call me. I\'m the only one who will tell you the truth." On the back, a handwritten number, and: 44.'); },
    text: `At 11:15, Achterberg comes back into the great hall alone. Your father doesn\'t come with her.

You\'re waiting by the windows when she gets there. She doesn\'t seem surprised. She seems pleased.

ACHTERBERG: Juliet. I was hoping you\'d come over.

jules: You were at the card game. In October.

ACHTERBERG: I was. I folded every hand. I\'m a terrible card player. I always have been. I prefer games where the odds are fixed.

She looks out the window at the snow on the lawn, the dark woods, the lights of the city far off.

ACHTERBERG: May I ask you something? You don\'t have to answer. Do you ever feel *watched*?

You don\'t answer. She sees it anyway.

ACHTERBERG: Yes. I thought so.

She takes a card out of her small gray purse. White. *Miriam Achterberg, PhD. Halcyon Dynamics.* She turns it over and writes on the back with a silver pen, a phone number, and under it, a number by itself.

*44.*

ACHTERBERG: Whenever you\'re ready to understand what you are, call me. I\'m the only person in your life who will tell you the truth about it. Not your grandmother. Not your father. Me.

She puts the card in your hand and closes your fingers over it.

ACHTERBERG: Happy New Year, Juliet. It\'s going to be a remarkable one.

She walks away across the great hall. You stand by the window with the card in your fist.

*44.*`,
    next: 'a2_midnight'
  },

  a2_text: {
    night: true,
    text: g => `You find the window seat in the library, the one behind the curtain where you used to read when you were small and hiding from everyone. The party is a murmur through the wall. The quartet has moved on to Gershwin.

You take out your phone.

TXT jules: It is 11:31 p.m. There are two hundred people in my house and I would like to set all of them on fire.
TXT jules: Except the bassist. The bassist is doing his best.

The dots come right away. He was waiting.

TXT sam: theres 14 people in my nonnas living room watching the fireworks countdown on 6abc and my uncle joey is asleep in a chair with a paper hat on
TXT sam: i would trade you
TXT jules: You would not.
TXT sam: youre right. its very warm in here and theres a tray of pizzelles

You laugh out loud, alone, behind the curtain.

TXT jules: Kearney.
TXT sam: pemberton
TXT jules: Tomorrow my grandmother is taking me to the chapel. She says I\'ll understand "what we are."
TXT jules: I\'m frightened. I\'ve never told anyone I was frightened. I\'m telling you.

The dots come up. Go away. Come up. Go away.

TXT sam: whatever she tells you
TXT sam: call me after. whatever time it is
TXT sam: ill pick up

TXT jules: You never pick up.
TXT sam: i pick up for you`,
    next: 'a2_midnight'
  },

  a2_midnight: {
    night: true,
    loc: 'RAVENSCOURT · THE GRAND STAIR',
    clock: { time: '11:59 PM' },
    text: g => `At 11:59, two hundred people in the great hall count down from ten in a ragged, champagne-soaked chorus, and the quartet plays Auld Lang Syne, and everybody kisses everybody.

You aren\'t there. You\'re on the grand staircase, halfway up, sitting on the stairs in your black dress, with your phone in your hand, the way you sat on these stairs at five and watched the party through the banisters.

At midnight, exactly, the clock in the hall strikes, and the bells at the church in Gladwyne start to ring for the new year, faint, across the snow.

And for one second, they stop.

The clock\'s pendulum stops in the middle of its swing. The champagne bubbles in a glass on the step below you stop rising. The quartet stops on a single held chord, the bow frozen on the string. Two hundred people stop, mouths open on *auld*.

You don\'t stop.

You feel it. The cold. Not yours; you\'ve never run cold. Someone else\'s. Coming in like a draft under a door, from very far away, from south, from the city. And with it, the feeling. The one you\'ve had your whole life. The room when someone\'s come in behind you.

It\'s so close now. It\'s *leaning*.

Then the bells start again. The pendulum swings. The bubbles rise. Two hundred people sing *acquaintance be forgot*.

Nobody noticed. Nobody but you.

You look at your phone. 12:01. A text, timestamped 12:00.

TXT sam: happy new year pemberton
TXT sam: did you hear the bells

You stare at it.

*Did you hear the bells.* Not a joke. Not *pemberton*. Just that.

You don\'t answer. You sit on the stairs while the party sings and the snow comes down outside the tall windows, and you hold the phone in both hands, and you think about a stone wall over the Schuylkill, and *What if it was?*${g.f('gran_terrace') ? ', and Gran on the terrace saying *some families are early*' : ''}, and the thing that was *leaning*, and you think: *It\'s leaning toward him.*

*Oh, Sam.*`,
    choices: [
      { text: 'Text back: "Yes."', tag: 'Yes',
        fx: g => { g.flag('bells_reply', 'yes'); g.bond('jules', { trust: 1 }); g.know('bells_both', ['jules', 'sam'], 'At midnight on New Year\'s, the bells stopped for one second. He asked if you heard the bells. You said yes. Neither of you said what you meant.'); }, go: 'a2_yes' },
      { text: 'Text back: "Happy New Year, Kearney." Nothing else. Not yet. January.', tag: 'Not yet',
        fx: g => { g.flag('bells_reply', 'wait'); }, go: 'a2_wait' }
    ]
  },
  a2_yes: {
    night: true,
    text: `TXT jules: Yes.

You hit send before you can not hit send.

The dots come up. They go away. They come up and stay up a long time, and you watch them, holding your breath like you held it in the billiard room, like a person who doesn\'t know what\'s going to happen next.

TXT sam: ok
TXT sam: january
TXT sam: we have a lot to talk about pemberton

TXT jules: Yes.

You put the phone in your lap. Below you, in the great hall, Hugh is kissing a Tucker\'s girlfriend under the chandelier, and your mother is kissing your father\'s cheek for the photographer, and the Lieutenant Governor is crying.

You sit on the stairs and you are frightened and you are, somehow, at exactly the same time, happy.`,
    next: 'a3_chapel'
  },
  a2_wait: {
    night: true,
    text: `TXT jules: Happy New Year, Kearney.

You hit send. You turn the phone face down on the stair.

Not yet. You made a deal. January. You don\'t know what you\'d say anyway. *Yes, the bells stopped. Yes, I felt it. No, I don\'t know why. Yes, I think you do.*

The phone buzzes once against the marble.

TXT sam: happy new year jules

He\'s never called you Jules in a text before. Not once.

You sit on the stairs with that, while the party sings below you, until Hugh comes up the staircase with two glasses of champagne and sits down beside you without a word and hands you one, which is the nicest thing he\'s done since you were twelve.`,
    next: 'a3_chapel'
  }
});
