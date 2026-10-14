/* S2 · E2 · SEVEN FISHES, part 1 of 3: meta, cold open (1918), Act One ("Vigilia"). */
EH.episode({
  id: 's02e02', season: 2, number: 2, title: 'Seven Fishes', look: 's2',
  cast: ['sam', 'nonna', 'rosa', 'frank', 'gigi', 'mikey', 'jules', 'jayden', 'carmen'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Nonna, in September: "It\'s in the women. Always the women. Never a boy. Never, in a hundred years."',
    'Nonna gave you an old iron key. "When it\'s time, I tell you what it opens."',
    g.f('card_s2') === 'told' ? 'You told Pop everything. Ma was at the stove.' : 'Bruno Iannucci\'s card. Pop wanted it torn up.',
    'You work for Bruno now. ' + ({ ten: 'Ten', five: 'Five', eight: 'Eight', twelve: 'Twelve', forced: 'Ten' }[g.f('bruno_deal')] || 'Ten') + ' jobs. Teddy works for him too.',
    'Grace: "In places, I\'d say thirty."',
    'Jules: "When I come back. In January. I ask, you answer."'
  ],
  scenes: {

    /* ================= COLD OPEN: 1918 ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'BROAD STREET · SATURDAY, SEPTEMBER 28, 1918',
      clock: { day: 'Sat', date: 'Sep 28, 1918', time: '2:14 PM' },
      text: `> THE CAMERA.

Two hundred thousand people on Broad Street, and every one of them is breathing on every other one.

Flags from every window. Bunting on every lamppost. A brass band from the Navy Yard, three thousand marchers, boy scouts with drums, nurses in white with red crosses on their caps, a float shaped like a battleship with a papier-mâché cannon. *BUY LIBERTY BONDS*. *BEAT BACK THE HUN*. Everybody\'s here. The whole city came. Nobody has told them yet about the sailors at the Navy Yard with fever, or that by next week the city will run out of coffins.

On the curb at Broad and Wharton, in a borrowed hat, sixteen years old, is Assunta DiNardo.

She came with her sisters. She lost them an hour ago. She doesn\'t mind. She\'s watching a trolley come up Broad Street behind the parade, a Number 2 car, too fast, swaying, the motorman shouting, and in the tracks in front of it, chasing a toy flag that blew out of his hand, a boy. Four, maybe. In short pants. Not looking.

People see. People scream. Nobody is close enough.

And every church bell in Philadelphia stops.

Not finishes. *Stops.* St. Rita\'s, St. Monica\'s, the Cathedral, the bells at Old Swedes on the river, mid-swing, mid-ring, like a hand closed on every rope at once.

The air goes cold. January in September. The flags stop flapping. The band stops. The boy stops, one foot in the air. The trolley stops. A pigeon over Broad Street stops with its wings up.

And Assunta DiNardo, who is sixteen and has never in her life been brave, steps off the curb.

She walks through the stopped crowd in the cold with her breath smoking. She picks the boy up out of the tracks. He weighs nothing. Nothing weighs anything. She carries him to the curb and sets him down on the cobbles and fixes his collar, because his mother will want his collar fixed.

Then she looks up the street.

At Broad and Federal, a block north, in the middle of the stopped parade, there is a man standing in the cold, the way she is standing. Moving, the way she is moving. In a long coat, with his hat off, looking straight at her across the frozen city.

He\'s too far to see his face. He raises one hand to her. Not a wave. Like a man at a window.

Then the bells start again.

> MIFFLIN STREET. 2026.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_vigilia' },

    /* ================= ACT ONE: VIGILIA ================= */
    a1_vigilia: {
      card: { kind: 'act', label: 'Act One', title: 'Vigilia' },
      loc: 'MIFFLIN STREET',
      clock: { day: 'Thu', date: 'Dec 24', time: '7:30 AM' },
      enter: g => { g.sleep(7); },
      text: g => `On the morning of Christmas Eve, the kitchen on Mifflin Street has been a fish market since five a.m.

There are three kinds of fish in the bathtub. You know this because you tried to shower. The baccalà has been soaking in the big blue pot on the back step for three days, changing the water twice a day, and the whole back of the house smells like the bottom of the Delaware. There are smelts in a colander. There are clams in the sink, alive, spitting. Ma is at the stove in her apron with her hair up and a wooden spoon, and she has the look she gets once a year, the look of a general on the morning of a battle.

Seven fishes. Every year. Since before Nonna was born. Baccalà, smelts, calamari, shrimp, clams with linguine, flounder, and the eel, which only Nonna eats, which Nonna has eaten every Christmas Eve since 1961, and which Gigi has been told since birth will put hair on her chest.

${g.f('card_s2') === 'told' ? `Pop has been sleeping on the couch since the day after Thanksgiving.

Nobody says why. Ma says it\'s his back. Pop says it\'s his back. Gigi says *it\'s not his back, I\'m not stupid*. And Ma looks at you sometimes, across the kitchen, when she thinks you aren\'t looking. Not angry. Like she\'s doing a sum in her head and keeps getting an answer she doesn\'t like.

You don\'t know how much she heard at the table that morning. With Ma, you never know.` : 'Pop is in the yard in his undershirt, scrubbing the big pot for the clams, even though it\'s thirty degrees out. Ma says it\'s good for his back.'}

Dinner is at eight. Midnight Mass at St. Monica\'s after, because Nonna has gone to midnight Mass at St. Monica\'s every Christmas Eve since the Truman administration.

Your phone buzzes.

TXT jules: It is 7:31 a.m. at Ravenscourt. My mother is already dressed for dinner. My father is on a call with Zurich. Hugh is asleep in the hall in his clothes. Gran has asked me twice if I\'ve "thought about the chapel." I have thought about nothing else. How is the fish.

TXT sam: theres fish in the bathtub

TXT jules: That cannot be true.

TXT sam: its true. three kinds. gigi named one of them

TXT jules: Which one?

TXT sam: the flounder. his name is kevin

TXT jules: I would like to formally announce that I would rather be in your bathtub than in this house.

TXT jules: That came out wrong.

TXT jules: I\'m leaving it.

You have the day before the fish. Time for two things.`,
      hub: {
        slots: 2, label: 'Christmas Eve, before dinner',
        blurb: 'Dinner at eight.',
        options: [
          { id: 'x2_ma', text: 'Stay in the kitchen. Help Ma with the baccalà. Be in the room with her.', cost: 1, tag: 'Ma', go: 'a1_ma' },
          { id: 'x2_jayden', text: 'Take the El up to North Philly with a present for Jayden. You saw him on the Parkway. You never went back.', cost: 1, tag: 'Jayden', go: 'a1_jayden' },
          { id: 'x2_pop', text: 'Pop\'s in the yard with the clam pot. Go out there.', cost: 1, tag: 'Pop', go: 'a1_pop' },
          { id: 'x2_gigi', text: 'Gigi needs a present for Ma and has eleven dollars. Take her up Passyunk.', cost: 1, tag: 'Gigi', go: 'a1_gigi' },
          { id: 'x2_simone', text: 'Call Simone in Atlanta. You never fixed it. It\'s Christmas.', cost: 1, tag: 'Simone', go: 'a1_simone', if: g => g.f('simone9') === 'lied' && g.f('simone10') !== 'mended' }
        ],
        done: 'a2_call'
      }
    },

    a1_ma: {
      enter: g => { g.bond('rosa', { affection: 1, trust: 1 }); g.flag('ma_kitchen'); },
      text: g => `She hands you a knife and a cutting board and a bowl of soaked baccalà without saying anything, and you stand next to her at the counter and pull the bones out of salt cod, the way she taught you when you were nine, with the radio on the oldies station playing Bobby Darin.

She doesn\'t say anything for two Bobby Darin songs. Then:

rosa: Your hands are cold.

sam: It\'s the fish.

rosa: It\'s not the fish. Your hands have been cold since August. I\'m a nurse, Salvatore. I hold forty children\'s hands a day. I know cold hands.

She doesn\'t look up from the cod.

rosa: Your father talks in his sleep now. Twenty-nine years, he never talked in his sleep. Now he talks. You know what he says?

sam: What?

rosa: *The cold.* He says *the cold*, and *don\'t, kid*, and once he said *Bruno*.

She pulls a bone out of the cod, a long thin one, and lays it on the side of the board, very precisely.

rosa: I\'m not asking you. I want you to know I\'m not asking. I\'m telling you I\'m your mother, and I know when something is wrong with you. I have always known. I sat up in bed at nine forty-one on Thanksgiving morning.

rosa: When you want to tell me, I\'m going to be right here. Pulling bones out of a fish. That\'s all.`,
      choices: [
        { text: 'Tell her. Now. Here. With your hands in the salt cod.', tag: 'Tell Ma',
          fx: g => { g.flag('ma_told', 's2e2'); g.know('sam_slip', ['rosa']); g.heat('rosa', 10 - g.h('rosa')); g.bond('rosa', { trust: 3 }); g.hidden('revenant_drift', -1); }, go: 'a1_ma_told' },
        { text: '"I know, Ma." Just that. Keep pulling bones.', tag: 'Not yet',
          fx: g => { g.flag('ma_told', false); g.bond('rosa', { affection: 1 }); }, go: 'a1_ma_notyet' }
      ]
    },
    a1_ma_told: {
      text: `You put the knife down.

You tell her. Standing at the counter, with the radio playing Bobby Darin and the clams spitting in the sink and the baccalà soaking in the blue pot on the back step, you tell your mother what happened on Broad Street in August, and everything after.

She doesn\'t stop working. That\'s how you can do it. She keeps pulling bones out of the cod with her quick small nurse\'s fingers, one after another, laying them in a row on the board like stitches, and she listens.

When you get to under 95, to Pop on his knees, her hands stop for one second. Then they keep going.

When you get to the Parkway, to the four minutes, to the white hair, she puts the knife down.

She turns around. She looks at your temple. She puts her hand up, slowly, and touches the white hair with one finger.

rosa: My mother\'s mother.

sam: Assunta.

rosa: She told you.

sam: Nonna told me. In September.

Ma\'s face does something you\'ve never seen it do. It goes very young, and very old, at the same time.

rosa: She told me it was a story. My whole life. A story, about the bells. She said it was in the women. She said I had a *little* of it, the phone calls, and that was all, and that was *fine*. She said it never went to a boy.

She takes her hand off your hair.

rosa: She lied to me.

She picks up the knife. She goes back to the cod. Her hands are shaking now. She keeps working anyway.

rosa: Tonight, after Mass. You and me. We go to her house. And she tells us both what that key opens. All of it.

rosa: Now cut the lemons.`,
      next: '@hub'
    },
    a1_ma_notyet: {
      text: `sam: I know, Ma.

She nods. She keeps working.

You pull bones out of the baccalà side by side at the counter for an hour, with the radio playing Bobby Darin and Dean Martin and the Ronettes, and she doesn\'t ask again, and you don\'t say anything, and it\'s the most you\'ve said to each other since August.

At the end, when the bowl is full of clean white cod, she takes your hands, both of them, cold, and holds them between hers for a moment, the way she does with a kid in the nurse\'s office who\'s been crying and is trying not to.

Then she lets go and hands you the lemons.`,
      next: '@hub'
    },

    a1_jayden: {
      enter: g => { g.flag('jayden_xmas'); g.bond('jayden', { trust: 2, affection: 2 }); g.bond('carmen', { trust: 2, affection: 1 }); g.know('jayden_cold', ['sam', 'carmen'], 'Carmen: since the Parkway, Jayden says he can feel when "it\'s about to get cold." Last week he made her stop the car on Lehigh. A minute later a truck ran the light.'); g.know('carmen_address', ['sam'], 'Carmen and Jayden Torres live on the second floor of a rowhouse on North 15th Street, near Lehigh.'); },
      text: g => `Carmen Torres lives on the second floor of a rowhouse on North 15th Street, near Lehigh, up a narrow staircase she can\'t really do anymore with her hip, which is why she has a stair chair now, a little motorized seat on a rail, which Jayden rides up and down like it\'s Six Flags.

You bring a present. You agonized over it at the Target on Columbus Boulevard for forty minutes. A LEGO set. A train. A trolley car, actually, an old-fashioned one, green and cream, which you only realize when you\'re standing in their doorway holding it.

Jayden opens it on the living room floor and loses his mind.

jayden: It\'s a *TRAIN*. It\'s a *TROLLEY*. Abuela, it\'s a *TROLLEY*.

He builds it on the carpet while Carmen makes you café con leche you can\'t say no to and sits across from you on the couch with her cane across her knees, watching you watch him.

carmen: He talks about you. Every day. *The cold man came back. The cold man was faster.*

She stirs her coffee.

carmen: Since the parade, he says he feels it. When it\'s about to get cold. Last week we were driving on Lehigh, and he said *Abuela, stop, stop, it\'s getting cold*, and I stopped. I don\'t know why. I just stopped. And a truck ran the red light. Right where we would have been.

She looks at you.

carmen: I saw you go back, that night in August. Two times. I told you that. Now he feels the cold coming.

carmen: What is happening to my grandson, mijo?

On the carpet, Jayden is running the trolley along the floorboards, making the bell noise. *Ding ding.*

You don\'t know what to tell her. You tell her the truth: you don\'t know. You tell her to call you if anybody comes asking about him. Anybody in a polo shirt. Anybody with a tablet. Anybody offering money.

She writes your number on the inside of her cabinet door, in marker, under the number for poison control.`,
      next: '@hub'
    },

    a1_pop: {
      enter: g => { g.bond('frank', { trust: 1, tension: -1 }); g.know('pop_dante_offer', ['sam', 'frank'], 'Pop went to Dante Iannucci on his own and offered to work off the debt himself so Sam wouldn\'t have to. Dante laughed at him.'); },
      text: g => `Pop is in the yard in his undershirt, in thirty degrees, scrubbing the big clam pot with steel wool like it owes him money.

You stand there. He doesn\'t look up.

frank: I went to see Dante.

sam: What?

frank: Tuesday. At the Melrose. I sat down in his booth. I said, I\'ll drive for you. I\'ll drive for you, nights, the Escalade, whatever. Take it outta my pay. Leave my kid alone.

He scrubs.

frank: He laughed. Not mean. That\'s the thing. He laughed like I told him a joke at a wedding. He said, *Frankie. Frankie. You can\'t do what he does.*

He puts the pot down in the cold grass.

frank: Twenty-six years I drove a cab in this city. I know every street. I know every light. I know how long the light is at Broad and Washington to the second. And I can\'t do what my son does.

He looks at you, finally. His hands are red and raw from the cold water.

frank: First time in my life I ever wanted to be somebody else.

You don\'t know what to say. You pick up the steel wool and the second pot, the one for the linguine, and you scrub it next to him in the cold. He lets you.

${g.f('job1') === 'watched' ? 'After a while he says, without looking: *That thing in Fishtown. Vinnie told me. The bar.* And then nothing. He doesn\'t ask. You don\'t say. You both scrub.' : ''}`,
      next: '@hub'
    },

    a1_gigi: {
      enter: g => { g.bond('gigi', { affection: 2, trust: 1 }); g.flag('gigi_passyunk'); },
      text: g => `Gigi has eleven dollars and forty cents and a very clear vision.

gigi: I want to get her something *nice*. Not a candle. She has a million candles. Something she\'d buy for herself if she wasn\'t Ma.

You walk up Passyunk with her in the cold. Christmas lights over the avenue. The fountain at the triangle with a giant wreath on it. The Singing Fountain, which doesn\'t sing in winter.

She goes into every store. The bookstore. The fancy soap place. The record store, where she holds up a Bobby Darin record and looks at you and you both know it costs forty dollars.

On the way back down Passyunk, at the corner by the Melrose, there\'s a black Escalade parked at a hydrant. Engine running. You don\'t look at it. You put yourself between it and your sister without thinking about it, walking on the street side, the way Pop always did with Ma.

Gigi notices.

gigi: Why are you walking weird?

sam: I\'m not.

gigi: You\'re doing the Pop thing. The street side thing.

sam: It\'s polite.

gigi: Since *when* are you polite.

You end up at the drugstore. She buys Ma a nail polish called *Hot Tamale* and a little bottle of the hand lotion Ma uses at school, because she says Ma\'s hands are always dry from the soap, and nobody ever buys her the lotion, they buy her candles.

You put in twenty-nine dollars so she can get the Bobby Darin record too. She says she\'ll pay you back. You say she won\'t. She says she knows.`,
      next: '@hub'
    },

    a1_simone: {
      text: `She picks up on the sixth ring. In the background: a lot of people, a TV, somebody laughing, somebody singing badly.

simone: Salvatore Kearney.

sam: Merry Christmas.

simone: Merry Christmas. I\'m in my grandmother\'s pantry. It\'s the only room in Decatur without a cousin in it.

You can hear her waiting.

sam: I lied to you. In the theater. You gave me one chance and I lied, and you were right, and I\'m sorry. That\'s all. You don\'t have to say anything back.`,
      choices: [
        { text: 'Wait. Don\'t fill the silence. Let her decide.', tag: 'Open Up',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Apologize to Simone', on: { strong: 'a1_simone_yes', weak: 'a1_simone_yes', miss: 'a1_simone_no' } } }
      ]
    },
    a1_simone_yes: {
      enter: g => { g.flag('simone10', 'mended'); g.bond('simone', { trust: 3, respect: 2, affection: 1 }); },
      text: `You wait. You don\'t fill it.

In the background, somebody in Decatur starts singing "O Holy Night" an octave too high.

simone: That\'s two chances, Salvatore. I don\'t give two chances.

sam: I know.

simone: I\'m giving you two chances. Because it\'s Christmas. And because my Aunt Bernadette is murdering "O Holy Night" right now and I need something good to happen in my life.

She laughs, wet.

simone: When I get back, you\'re telling me *everything*. Details. Diagrams. And if you die before then, I\'ll do a monologue at the funeral. With props.`,
      next: '@hub'
    },
    a1_simone_no: {
      enter: g => { g.flag('simone10', 'cool'); g.bond('simone', { trust: 1 }); },
      text: `You try to wait. You can\'t. You start explaining, *it\'s dangerous, I didn\'t want you in it*, and you hear yourself making excuses, and you stop.

simone: I heard the first part, Salvatore. The first part was good.

simone: I need a little more time. That\'s not no. It\'s Christmas. Go eat your fish.`,
      next: '@hub'
    }
  }
});
