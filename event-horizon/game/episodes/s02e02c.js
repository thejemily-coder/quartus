/* S2 · E2 · SEVEN FISHES, part 3 of 3: Act Three ("The Feast"), Act Four ("The Key"), tag, polls. */
EH.scenes('s02e02', {

  /* ================= ACT THREE: THE FEAST ================= */
  a3_feast: {
    card: { kind: 'act', label: 'Act Three', title: 'The Feast' },
    night: true,
    loc: 'MIFFLIN STREET · THE DINING ROOM',
    clock: { time: '8:02 PM' },
    text: g => `You come in the door at 8:02 with snow in your hair ${g.S.injuries.some(i => i.id === 'ice_s2e2' || i.id === 'unstick_s2e2') ? 'and a limp you try to hide and can\'t' : 'and your face red from the cold'}, and nobody says anything about the two minutes, because Nonna is already at the head of the table, and when Nonna is at the head of the table, the Feast has begun.

The dining room table with both leaves in. The card table on the end for Gigi, who calls it the cool table. Ma\'s good tablecloth, the white one with the lace that comes out twice a year. Candles. The seven fishes in a row down the middle like a parade: fried smelts in a mountain, the baccalà salad with olives and lemon, calamari in red sauce, shrimp, linguine with white clam sauce in the big bowl, the flounder (Kevin, rest in peace), and, in a little dish by itself at Nonna\'s elbow, the eel, which nobody but Nonna will touch.

Mikey is there, in uniform, with his hat on the hutch. He came straight from his shift in the 3rd. He looks at you across the table when you sit down. He doesn\'t ask where you were. He just looks.

${g.f('card_s2') === 'told' ? 'Pop is at the other end of the table, not on the couch, for the first time in a month. Ma made him. He looks at you too. Everybody at this table who knows is looking at you.' : 'Pop is at the other end of the table.'}

Nonna says grace. In Italian, the long one. At the end, where she names the dead, she says her mother, Assunta. Her husband, Gennaro. Her sister, Lucia.

Then, for the first time you can remember, she says one more.

nonna: E Salvatore.

She doesn\'t explain. She crosses herself and picks up her fork, and the Feast begins.

It\'s loud. It\'s always loud. Gigi tells the whole table the flounder\'s name was Kevin, and Mikey says *you ate Kevin*, and Gigi screams. Pop tells the story about the year the baccalà went bad in 1999 and Ma made everybody eat it anyway. Ma says that never happened. Pop says she was wearing the green sweater. Ma says she never owned a green sweater. Nonna says *the green sweater from Strawbridge\'s* without looking up from her eel, and Ma puts her face in her hands.

You laugh. It surprises you. You laugh until your eyes water, at your mother\'s table, ${g.f('saw_list') ? 'with twenty-six names in your head' : 'with your legs still shaking from Broad Street'}${g.f('manila') === 'burned' ? ' and a phone in your pocket that Dante hasn\'t called back.' : ' and a man in a gray sedan who knows your grandmother eats at eight.'}

Your phone buzzes under the table.

TXT jules: The soup course is a consommé. It is clear. It tastes of nothing. My mother sent it back.
TXT jules: Hugh is drunk. Callum\'s parents are here. Callum is not. I am grateful.
TXT jules: Gran just told the table, apropos of nothing, that "the bells will ring again soon, and some of us had better be ready." Nobody knew what to say. My father changed the subject to municipal bonds.
TXT jules: Tell me something true about your fish.

You look at the table. Gigi stealing calamari off Mikey\'s plate. Pop with his arm on the back of Ma\'s chair. Nonna, eating her eel alone, slowly, the way she does every Christmas Eve.`,
    choices: [
      { text: 'Text Jules: "my grandmother just said a name at grace ive never heard before. i think its mine"', tag: 'Jules',
        fx: g => { g.flag('feast_text', 'name'); g.bond('jules', { respect: 1 }); }, go: 'a3_text' },
      { text: 'Go to the bathroom. Call Carmen. Tell her to take Jayden somewhere tonight. Anywhere.', tag: 'Call Carmen',
        if: g => g.f('saw_list'),
        fx: g => { g.flag('feast_text', 'carmen'); g.flag('carmen_warned'); g.bond('carmen', { trust: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_carmen' },
      { text: 'Put the phone face down. Eat. Be here. It\'s Christmas Eve.', tag: 'Be here',
        fx: g => { g.flag('feast_text', 'here'); g.bond('rosa', { affection: 1 }); g.bond('gigi', { affection: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_here' }
    ]
  },
  a3_text: {
    night: true,
    text: `TXT sam: my grandmother just said a name at grace ive never heard before. i think its mine

The dots come up right away. Go away. Come up.

TXT jules: Salvatore?

TXT sam: yeah

TXT jules: Then somebody was Salvatore before you.

TXT jules: My grandmother says names in this family are "heavier than they look." I always assumed she meant the monograms.

TXT jules: Ask her. Tonight. Don\'t wait. Some families wait too long to tell you things, Kearney. I\'m beginning to think mine is one of them.

You look up. Nonna is looking at you down the length of the table, over the eel. She saw you look at your phone. She sees everything.

She nods. Once. Like she heard every word.`,
    next: 'a3_mass'
  },
  a3_carmen: {
    night: true,
    text: g => `You go to the bathroom. You lock the door. You sit on the edge of the tub, where the fish were this morning, and call.

She picks up on the second ring. Behind her, a TV, a Spanish-language Christmas special, and Jayden singing along, badly, at the top of his lungs.

carmen: ¿Mijo?

sam: Carmen. Listen to me. I can\'t explain. Somebody wrote Jayden\'s name on a list for the people from the Navy Yard. The people from the Parkway. With your address.

Silence. Then, very calm, the calm of a woman who has buried people:

carmen: How long?

sam: I don\'t know. Not tonight, probably. It\'s Christmas. But soon. Is there somewhere you can go? Family? Out of the city?

carmen: My sister. In Reading.

sam: Go there. Tomorrow. Take him. Don\'t tell anybody. Don\'t post anything. Don\'t sign anything anybody brings you.

carmen: The hip. I can\'t do the stairs fast.

sam: Then go slow. But go.

Behind her, Jayden stops singing.

jayden: *Abuela? Is it the cold man?*

carmen: Sí, mijo. It\'s the cold man.

jayden: *Tell him it\'s getting cold!*

Carmen is quiet for a moment.

carmen: He says it\'s getting cold.

sam: I know. Tell him I know.

${['tore_jayden', 'burned'].includes(g.f('manila')) ? 'You hang up. You take the torn strip of paper out of your pocket. *Torres, Jayden, 8.* You read it twice. Then you flush it.' : 'You hang up and sit on the edge of the tub for a minute, until you can make your face do something normal.'}`,
    next: 'a3_mass'
  },
  a3_here: {
    night: true,
    text: `You put the phone face down on the tablecloth next to your plate.

You eat. The smelts, hot and salty, with lemon. The linguine. Ma\'s baccalà salad, which you have never liked and eat two helpings of. You let Gigi steal your calamari. You let Pop tell the story about the year the Eagles won the Super Bowl and he cried in the cab for three hours.

At one point, Ma reaches over and picks a crumb of smelt batter off your sleeve, and then, since her hand is there anyway, leaves it on your arm for a second, and takes it away.

You don\'t look at your phone for two hours.

When you finally turn it over, there are eleven messages from Jules. The last one says:

TXT jules: You\'re with your family. Good. Stay there. Tell me about it tomorrow. Merry Christmas, Kearney.`,
    next: 'a3_mass'
  },

  a3_mass: {
    night: true,
    loc: 'ST. MONICA\'S · MIDNIGHT MASS',
    clock: { time: '11:51 PM' },
    text: g => `Midnight Mass at St. Monica\'s. The church is full the way it\'s only full twice a year. Poinsettias on every step of the altar. The choir up in the loft doing the Latin one. Incense. Old women in fur coats that smell like mothballs. Kids asleep on their fathers\' shoulders.

You sit in the pew with Nonna on one side and ${g.f('ma_told') === 's2e2' ? 'Ma on the other, holding your hand, which she hasn\'t done in church since you were seven' : 'Gigi on the other, asleep against you'}.

At 11:51, the bells in the tower start to ring for Christmas.

And for one second, one, they stop.

Not finish. *Stop.* Mid-swing. Like a hand on the rope.

The cold comes up out of the marble floor through the soles of your shoes. The candle flames on the altar stand straight and still, not flickering. The incense smoke hangs in the air in a gray ribbon. You feel it. You *feel* it: the edge of the Slip, opening under you like ice, without you doing anything at all.

Then the bells start again.

Nobody in the church noticed. Nobody.

Except Nonna. Her hand is on your arm. Her small hand, gripping hard enough to hurt. She\'s looking straight ahead at the altar, and her lips are moving, and she isn\'t praying.

nonna: *Ancora. Ancora.* Again.

${g.f('ma_told') === 's2e2' ? 'On your other side, Ma\'s hand has gone tight on yours. She felt it too. You look at her. She\'s white.' : ''}

After Mass, on the steps, in the snow, Nonna doesn\'t let go of your arm.

nonna: Come to my house. Now. ${g.f('ma_told') === 's2e2' ? 'Your mother comes too. She knows. I can see it on her.' : 'Just you.'} Bring the key.`,
    next: 'a4_key'
  },

  /* ================= ACT FOUR: THE KEY ================= */
  a4_key: {
    card: { kind: 'act', label: 'Act Four', title: 'The Key' },
    night: true,
    loc: 'NONNA\'S HOUSE · THREE DOORS DOWN',
    clock: { day: 'Fri', date: 'Dec 25', time: '1:10 AM' },
    enter: g => { const w = g.f('ma_told') === 's2e2' ? ['sam', 'nonna', 'rosa'] : ['sam', 'nonna']; g.know('salvatore_dinardo', w, 'Nonna\'s older brother was Salvatore DiNardo (1931–1961). Once, in 1961, at a fire, it woke in him. He went in after three children and came back an old man. He died on Christmas Eve at 11:51. You are named for him.'); g.know('assunta_diary', w, 'Assunta DiNardo\'s diary: she did it more than once. Every time she came back a little older. On September 28, 1918, there was a man up the street who moved too, and raised his hand to her like a man at a window.'); },
    text: g => `Nonna\'s house smells like her house: mothballs and gravy and Jean Naté. The plastic is still on the living room couch from 1987. The Sacred Heart on the wall with the little red bulb in front of it, always on. The cedar chest at the foot of her bed, which nobody has ever been allowed to touch, which Mikey once got smacked with a wooden spoon for sitting on.

${g.f('ma_told') === 's2e2' ? 'Ma sits on the edge of the bed with her coat still on and her hands in her lap. She doesn\'t say anything. She watches her mother.' : ''}

Nonna kneels in front of the chest. She doesn\'t ask for help kneeling. She holds out her hand.

You take the iron key off its ribbon around your neck, where it\'s been since she gave it to you. You give it to her.

She opens the chest. Old blankets. A wedding dress in a plastic bag. Baby shoes, bronzed. And at the bottom, a tin box, a cookie tin, Danish butter cookies, older than Ma, with a little padlock on it.

The key opens the padlock.

Inside: a notebook, a leather diary, cracked, with a ribbon. A pocket watch on a chain. And a photograph.

The photograph is a young man in a suit in front of the Reading Terminal, in black and white, with a cigarette and a grin. Late twenties. Black hair. A nose you know from the mirror. A way of standing, weight on one foot, chin up, that Ma has been yelling at you about since you were twelve.

nonna: My brother. Salvatore.

She sits back on her heels.

nonna: I lied to you, Salvatò. In September. In my kitchen. I said it was in the women. Never a boy, never in a hundred years. I lied.

nonna: There was a boy. There was my brother.

nonna: And my mother. I told you once, never again. Che bugiarda. She did it her whole life.

She opens the diary. The pages are full of a cramped, faded, old-fashioned handwriting, in Italian, in ink that\'s gone brown. She turns to a page near the back and runs her finger along a line and translates, slow, flat, the way you read something you\'ve read a thousand times:

nonna: *December 18, 1961. Salvatore went in after the children at the fire on Arch Street. Three children. He brought them out, all three. He was in the cold a long time. He came back old.*

She turns the page.

nonna: *My son came back an old man. Thirty years old, and his hair white as mine. His hands shaking. His heart.*

She turns the page.

nonna: *He died tonight at the table, at the Feast, in his chair, at 11:51, with the eel on his plate. Teresa was sixteen.*

She closes the diary.

nonna: I was sitting next to him.

She picks up the pocket watch. Gold, old, dented. She opens the case. The hands say 11:51. They\'ve said 11:51 for sixty-five years.

nonna: His watch. It stopped when he stopped. Every Christmas Eve, I eat the eel, because he loved it and nobody else does. Every Christmas Eve I say his name at grace in my head. Tonight it came out loud. I didn\'t know why. Then the bells stopped, and I knew.

She looks at you.

nonna: I named you for him. Your father wanted Francis, for himself, and I said no, this one is Salvatore. I don\'t know why. I prayed it would skip you. I lit a candle every week for eighteen years that it would skip you.

nonna: God doesn\'t listen to old women from Mifflin Street.

${g.f('ma_told') === 's2e2' ? 'On the bed, Ma makes a sound. Nonna doesn\'t look at her. Ma gets up and kneels on the floor next to her mother and puts her arms around her from behind, and Nonna lets her, and they stay like that, the two of them, on the floor by the cedar chest.' : ''}`,
    choices: [
      { text: '"Nonna. Bruno Iannucci wrote your name on a list tonight. And next to it he wrote no. Why?"', tag: 'Bruno',
        if: g => g.f('saw_list'),
        fx: g => { g.flag('key_q', 'bruno'); }, go: 'a4_bruno' },
      { text: '"What happened to him? In the cold? Why couldn\'t he get out?"', tag: 'Ask about him',
        fx: g => { g.flag('key_q', 'him'); }, go: 'a4_him' }
    ]
  },
  a4_bruno: {
    night: true,
    enter: g => { g.know('bruno_debt_dinardo', ['sam', 'nonna'], 'In January 1964, Bruno Iannucci, six years old, fell through the ice on the Schuylkill at Boathouse Row. Assunta DiNardo, sixty-one, went in and got him. His mother told him. Bruno has owed the DiNardos his life for sixty-two years.'); },
    text: `Nonna looks at you. Then she laughs, a dry old laugh, almost a cough.

nonna: Bruno. Madonna. Bruno.

nonna: January, 1964. Boathouse Row. Very cold. The river froze, and the children went out on it, like idiots, like every year. A little boy went through the ice. Six years old. Everybody on the bank screaming. The fire department ten minutes away.

nonna: My mother was sixty-one years old. She was on the bank, with me, with a thermos of coffee. She put the thermos in my hands. And then she was not on the bank anymore. And then she was, and she was wet to the shoulders, and there was a little boy on the grass, coughing up the Schuylkill.

nonna: She was sick for a month after. She never got warm again, not really. She died in \'68.

She closes the diary.

nonna: The little boy was Bruno Iannucci. His mother, Filomena, came to our house every Christmas with a tray of pizzelles until she died. She made him come. She made him kneel and thank my mother. He knows. He has always known what we are.

nonna: So he came to Thanksgiving with his hat off. So he writes *no* next to my name. That\'s not mercy, Salvatò. That\'s a debt. Bruno Iannucci pays his debts. It\'s the only good thing about him.

She looks at you hard.

nonna: And he knows exactly what *you* are. He knew before you sat down at his table. Remember that.`,
    next: 'a4_watch'
  },
  a4_him: {
    night: true,
    text: `Nonna turns the watch over in her hands.

nonna: My mother says, in here.

She taps the diary.

nonna: She says the cold has a door. You go in, and the door is behind you, and as long as you know where the door is, you can come out. She says the longer you\'re in, the farther the door gets. And if you go in too many times, it gets far even when you\'re only in for a minute.

nonna: She says Salvatore went in at the fire, and he was looking for three children in the smoke, and he forgot where the door was. He was in there so long. Years, she says. *Years*, in there, walking around in the cold looking for the door, while out here it was ten minutes.

nonna: She says when he came out, he told her: *Ma, I could hear your watch. That\'s how I found the door. In there, nothing ticks. Nothing. But I could hear your watch ticking in your pocket on Arch Street, and I walked toward it for a year.*

She looks at the watch in her hand.

nonna: She gave it to him after. So he would always have it. So he would always hear it.

nonna: He wore it for six days. Then he died.`,
    next: 'a4_watch'
  },
  a4_watch: {
    night: true,
    text: `Nonna holds out the watch to you. The gold case is cold. The hands say 11:51.

nonna: Take it.

sam: It doesn\'t tick, Nonna. It stopped.

nonna: Out here, it stopped. In there, nothing stops. In there, it\'s the only thing that ticks.

She closes your fingers around it.

nonna: When you go in, you hold it. You hold it and you listen. You don\'t go looking for anybody until you can hear it. And you walk toward it. Always toward it.

nonna: And Salvatò.

She takes your face in both her hands.

nonna: You don\'t go in so much. You hear me? You don\'t go in for every bus and every fire and every bad man\'s errand. You go in when you have to. Only. My mother learned. My brother never learned. Which one are you?`,
    choices: [
      { text: 'Take the watch. "I\'ll learn, Nonna."', tag: 'Take it',
        fx: g => { g.flag('assunta_watch'); g.flag('key_promise', 'learn'); g.know('watch', ['sam', 'nonna'], 'Salvatore DiNardo\'s pocket watch, stopped at 11:51. Nonna says in the Slip it\'s the only thing that ticks. Hold it, and walk toward it.'); g.hidden('revenant_drift', -2); }, go: 'a4_take' },
      { text: 'Take the watch. Don\'t promise. You can\'t promise that, and she\'d know.', tag: 'Take it, no promise',
        fx: g => { g.flag('assunta_watch'); g.know('watch', ['sam', 'nonna'], 'Salvatore DiNardo\'s pocket watch, stopped at 11:51. Nonna says in the Slip it\'s the only thing that ticks. Hold it, and walk toward it.'); g.hidden('revenant_drift', -0.5); g.flag('key_promise', 'honest'); g.bond('nonna', { respect: 2 }); }, go: 'a4_take_honest' }
    ]
  },
  a4_take: {
    night: true,
    text: `You take it.

sam: I\'ll learn, Nonna.

She looks at you. You can see her deciding whether to believe you. You can see her wanting to.

nonna: Good. Good boy.

She lets go of your face. She puts the diary back in the tin, and the photograph, and closes the lid, and leaves the padlock open on the floor beside it, for the first time in sixty-five years.

You put the watch in the pocket of your jeans, against your leg. It\'s cold.

On the walk home, three doors, in the snow, at two in the morning on Christmas, you put your hand in your pocket and hold it.

For one second, you think you hear it tick.`,
    next: 'tag_list'
  },
  a4_take_honest: {
    night: true,
    text: `You take it. You don\'t say anything.

Nonna watches you not say anything. Something in her face settles.

nonna: Good. You don\'t lie to me. My brother lied to my mother every time. *I\'ll be careful, Ma.* Every time.

nonna: You don\'t lie. That\'s something. That\'s a start.

She puts the diary back in the tin, and the photograph, and closes the lid, and leaves the padlock open on the floor beside it, for the first time in sixty-five years.

You put the watch in your pocket. On the walk home, three doors, in the snow, at two in the morning on Christmas, you put your hand in your pocket and hold it.

For one second, you think you hear it tick.`,
    next: 'tag_list'
  },

  /* ================= TAG ================= */
  tag_list: {
    card: { kind: 'tag' },
    night: true,
    loc: 'NAVY YARD · BUILDING 7',
    clock: { time: '3:00 AM' },
    text: g => `> THE CAMERA.

${g.f('manila') === 'burned' ? `Brannigan sits alone in the dim room behind the glass on the seventh floor of Building 7 with his tea and his phone.

He dials.

BRANNIGAN: Mr. Iannucci. Merry Christmas. I\'m sorry to call so late. Your envelope didn\'t arrive.

A pause. A voice on the line, old, unhurried.

BRANNIGAN: The boy says he dropped it in the snow.

Another pause.

BRANNIGAN: Of course. After the holiday.

He hangs up. He sets the phone down on the desk, beside his tablet. On the tablet, a photograph, taken from a parked car on Mifflin Street: an old woman in a black coat on her stoop, sprinkling salt on the top step.

He looks at it until the screen goes dark.` : `Brannigan sits alone in the dim room behind the glass on the seventh floor of Building 7 with his tea and three typed sheets of paper spread on the desk.

He reads them slowly. Twenty-six names. He makes small notes in the margins in pencil.

${g.f('manila') === 'tore_jayden' ? 'Halfway down the second page, he stops. There\'s a gap. A line has been torn out, neatly, along a fold. He runs his thumb along the tear. Then he takes out his tablet and calls up the thermal footage from the Parkway, and freezes it on a little boy in a puffy coat beside a wheelchair, and writes, in pencil, in the margin where the torn line was: *Torres?*' : ''}

At the bottom of the last page, he comes to the handwritten line in blue fountain pen.

*DiNardo, T. — Mifflin St. — NO.*

He reads it twice. He picks up his pencil.

He circles it.`}

> ELSEWHERE.

Mifflin Street, 3:00 a.m. on Christmas morning. All the windows dark but one.

In Sam Kearney\'s old room, under the glow-in-the-dark stars, he\'s asleep in his clothes on top of the covers with his hand in his pocket.

On the nightstand beside him, a phone lights up.

TXT jules: It\'s 3 a.m. I can\'t sleep. Gran says New Year\'s Day, in the chapel. She says I\'ll understand everything then. She says it like a threat and a present at the same time.
TXT jules: Merry Christmas, Sam.
TXT jules: January.

He doesn\'t wake up.

In his pocket, against his leg, very faintly, a watch that has said 11:51 for sixty-five years ticks once.`,
    end: true
  }
});

Object.assign(EH.episodes.s02e02, {
  polls: [
    { q: 'Bruno\'s envelope for the Navy Yard', opts: [
      { label: 'Delivered it sealed', pct: 29, if: g => g.f('manila') === 'sealed' },
      { label: 'Tore out Jayden\'s name', pct: 31, if: g => g.f('manila') === 'tore_jayden' },
      { label: 'Delivered it, then warned them', pct: 22, if: g => g.f('manila') === 'warn' },
      { label: 'Burned it', pct: 18, if: g => g.f('manila') === 'burned' }
    ] },
    { q: 'At the Feast', opts: [
      { label: 'Texted Jules', pct: 34, if: g => g.f('feast_text') === 'name' },
      { label: 'Called Carmen', pct: 27, if: g => g.f('feast_text') === 'carmen' },
      { label: 'Put the phone down', pct: 39, if: g => g.f('feast_text') === 'here' }
    ] },
    { q: 'Salvatore\'s watch', opts: [
      { label: '"I\'ll learn, Nonna."', pct: 61, if: g => g.f('key_promise') === 'learn' },
      { label: 'Took it without promising', pct: 39, if: g => g.f('key_promise') === 'honest' }
    ] }
  ],
  onEnd: g => {
    g.recap('Nonna lied. There was a boy: her brother, Salvatore. In 1961 he came back old, and died at the Feast at 11:51.');
    g.recap('You have his watch. Nonna says in the cold it\'s the only thing that ticks.');
    if (g.f('saw_list')) g.recap('Bruno sent Brannigan a list of twenty-six people. Jayden was on it. At the bottom: "DiNardo, T. — NO."');
    g.recap('Brannigan, at the Navy Yard gate: "When you get tired of being somebody\'s errand boy, I\'m hiring."');
    g.recap('At 11:51 on Christmas Eve, the bells at St. Monica\'s stopped for one second.');
  }
});
