/* S1 · E10 · BROAD STREET (season finale), part 1 of 4: meta, cold open, Act One ("Wednesday"). */
EH.episode({
  id: 's01e10', season: 1, number: 10, title: 'Broad Street', look: 's1', runtime: 'finale',
  cast: ['sam', 'jules', 'nik', 'mikey', 'teddy', 'bree', 'heck', 'frank', 'rosa', 'nonna', 'gigi', 'vinnie', 'simone', 'jayden'],
  start: 'cold_open',
  xp: 6,
  previously: g => [
    'Pop owes the Iannucci family $41,000. Dante says: by Thanksgiving.',
    'Femi\'s last message: "M.R. ALIVE. RM 714. THEY CALL YOU 17."',
    'Teddy is planning one last job. After it, the crew goes for Marisol. All of them.',
    'Bree: "A lot of people, standing still. Stop him."',
    g.f('simone9') === 'lied' ? 'Simone knows. You lied when she gave you the chance.' : 'Simone knows. She has two lists.',
    'On the back of Jules\'s index card, in your handwriting: "Don\'t trust the lucky one."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'NAVY YARD · BUILDING 7 · SEVENTH FLOOR',
      clock: { day: 'Wed', date: 'Nov 25', time: '11:40 PM' },
      text: `> THE CAMERA.

There is no seventh floor of Building 7. It isn\'t on the drawings. The elevator doesn\'t stop there.

It\'s very quiet, and very clean, and it smells like a new car. A long white hallway with doors on both sides, each door with a narrow window and a number. At the end of the hallway, behind glass, a dim room full of screens.

Cole Brannigan stands in front of the screens with a mug of tea. Beside him, in a cardigan, with reading glasses pushed up into gray hair, is a small woman in her late fifties who looks like a retired piano teacher.

On the screens: a map of Center City. The Benjamin Franklin Parkway, drawn in white, from City Hall to the Art Museum. Dozens of small red dots scattered across the city. A few of them are moving.

BRANNIGAN: Kowal left Port Richmond at four this morning. He\'s sleeping in a van on 23rd Street. He\'s bought a thermos and a folding chair. He\'s very organized.

ACHTERBERG: He\'s going to freeze the parade.

BRANNIGAN: He\'s going to freeze the Parkway. The parade\'s on it.

ACHTERBERG: Then let him.

She takes off her glasses and cleans them on her cardigan.

ACHTERBERG: When he does it, every one of them within a mile will feel it. The cold. The nosebleeds. And every one of them will come running toward it, Cole. They can\'t help it. That\'s what the Event selected for. Not strength. Not speed. The ones who run *toward*.

BRANNIGAN: We\'ll have six units on the Parkway. Medic markings. Thermal on every lamppost from 18th to the steps.

ACHTERBERG: And seventeen?

Brannigan sips his tea.

BRANNIGAN: Seventeen will come. He can\'t help it either. He\'s the worst of them for that.

Achterberg puts her glasses back on. She looks through the glass, down the white hallway, at a door with **714** stenciled on it in gray.

Through its narrow window, a girl with dark curly hair is sitting on a bed, staring at the ceiling light. The light is flickering, faster and faster.

ACHTERBERG: And give Miss Reyes a turkey dinner tomorrow. With all the trimmings. She\'s earned it.

The bulb in 714 pops. The girl doesn\'t flinch.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_mikey' },

    /* ================= ACT ONE: WEDNESDAY ================= */
    a1_mikey: {
      card: { kind: 'act', label: 'Act One', title: 'Wednesday' },
      loc: 'MELROSE DINER · SOUTH PHILADELPHIA',
      clock: { day: 'Wed', date: 'Nov 25', time: '7:15 AM' },
      text: g => `Two and a half weeks go by. You go to class. You do Femi\'s Calc problems in Femi\'s green notebook, every one of them, *outside first*. You turn in Weisz\'s paper late and get it back with a B-minus and one comment: *Blurry.* It might not be about the paper.

${g.f('jules9') === 'stay' ? 'Jules sleeps in your bed four nights out of fourteen, with the lamp on, in her clothes. Nobody on the floor says a word about it, which is how you know Simone has said something to all of them.' : 'You see Jules every day. You don\'t talk about the roof.'} Simone ${g.f('simone9') === 'lied' ? 'nods at you in the hallway like a stranger who\'s been polite to you once. It\'s worse than yelling.' : 'sits with you at dinner and calls you Salvatore, and doesn\'t ask you anything in public.'}

Teddy doesn\'t answer his phone. Bree answers once, says *not yet, Wawa*, and hangs up.

On the Wednesday before Thanksgiving, at seven in the morning, Mikey texts you *Melrose. 7:15. I\'m buying.* And you take the Broad Street Line all the way down to Snyder in the dark.

He\'s in a back booth, in plainclothes, with two coffees and a plate of scrapple he\'s not eating. ${g.f('mikey9') === 'open' ? 'He looks like he hasn\'t slept since you told him.' : 'He looks like he hasn\'t slept since Femi.'}

mikey: The ME who signed the report. Dr. Gerald Feld. Deputy medical examiner, twenty-two years.

He slides his phone across the table. A photo of a man in a fishing hat on a dock, smiling.

mikey: He retired. Monday. The Monday after. He\'s fifty-one. He bought a condo in Boca Raton for cash, and the HOA newsletter says he\'s *thrilled to join the Seabreeze family*.

He takes the phone back.

mikey: ${g.f('mikey9') === 'open' ? 'So you were right.' : 'So something\'s wrong.'} And I can\'t prove a thing. And my sergeant told me to stop asking, and the guy who told my sergeant was a captain I never met, and the guy who told *him*—

He stops.

mikey: Tomorrow\'s the parade. The task group\'s on plainclothes detail on the Parkway. Brannigan\'s *advising*. He asked for me at the Art Museum end. Specifically me.

He looks at you.

mikey: Then he asked me if my little brother\'s coming to the parade. Just friendly. Just making conversation.

mikey: Don\'t come, Sammy.

sam: I wasn\'t gonna.

mikey: Don\'t touch your ear. I\'m serious. Don\'t come. Stay on Mifflin Street. Help Ma with the bird. Watch it on TV like a normal person.

He pushes the scrapple at you. You eat it. He watches you eat it like Ma does.

mikey: Dinner\'s at four. Pop says he\'s *handling* the other thing. You know what that means?

sam: No.

mikey: Me neither. That\'s what scares me.`,
      next: 'a1_hub'
    },

    a1_hub: {
      loc: 'WEDNESDAY · NOVEMBER 25',
      clock: { time: '10:00 AM' },
      text: `The dorm is emptying out for the holiday. Suitcases bumping down the stairwell. Somebody\'s dad double-parked on Broad with the hazards on.

You have the rest of Wednesday. Time for two things.`,
      hub: {
        slots: 2, label: 'The day before Thanksgiving',
        blurb: 'Everybody\'s leaving.',
        options: [
          { id: 'w10_jules', text: 'Jules is packing for Ravenscourt. Her door is open. Go in.', cost: 1, tag: 'Jules', go: 'a1_jules' },
          { id: 'w10_nik', text: 'Nik\'s dad is picking him up at noon for Edison. He keeps saying he has "a thing" to give you.', cost: 1, tag: 'Nik', go: 'a1_nik' },
          { id: 'w10_simone', text: 'Simone has a 1:10 train to Atlanta from 30th Street. Carry her bag. Try.', cost: 1, tag: 'Simone', go: 'a1_simone' },
          { id: 'w10_pop', text: 'Go home early. Find out what Pop means by *handling it*.', cost: 1, tag: 'Pop', go: 'a1_pop' },
          { id: 'w10_vinnie', text: 'Vinnie\'s been texting you *call me* since Monday. Call him.', cost: 1, tag: 'Vinnie', go: 'a1_vinnie' }
        ],
        done: 'a1_bree'
      }
    },

    a1_jules: {
      enter: g => { g.flag('jules_box'); g.know('jules_parade', ['sam', 'jules'], 'Jules will be in the sponsors\' grandstand at the Art Museum steps on Thanksgiving morning. Her father\'s firm sponsors the parade.'); },
      text: g => `Her room is chaos, which is wrong. Jules Pemberton\'s side of 9-11 is always a magazine spread, and today there are three garment bags on the bed and clothes on the floor and a pair of riding boots standing in the middle of the room by themselves like they\'re waiting for someone.

Simone\'s side is already stripped, her bags by the door. ${g.f('simone9') === 'lied' ? 'She went down the hall when she heard your voice.' : 'There was a note on your door at eight: *Salvatore. Behave. —S.*'}

jules: Don\'t look at anything.

sam: I\'m looking at the boots.

jules: Don\'t look at the boots.

She\'s folding a sweater with great precision, and refolding it.

jules: We do the parade. Every year. My father\'s firm sponsors it, so we sit in the grandstand at the Art Museum steps from eight-thirty until the last balloon, and my mother says something cutting about every float, and Hugh drinks from a flask he thinks no one knows about, and then we drive to Gladwyne and Gran carves a turkey with a knife older than the state of Oklahoma.

sam: That sounds terrible.

jules: It\'s *wonderful*. It\'s the only day of the year all of us are in one place and none of us can leave.

She puts the sweater in a bag.

jules: Come.

sam: To Gladwyne?

jules: God, no. To the parade. The grandstand. I can get you a pass. You\'d sit beside me and be rude about the floats, and my mother would look at you like you\'re a stain, and it would be the best Thanksgiving I\'ve ever had.

You think about Mikey in the back booth. *Don\'t come, Sammy.*

sam: My brother says stay home.

jules: Your brother\'s very wise.

She stops folding.

jules: If you change your mind, I\'ll be in the second row. On the aisle. I always sit on the aisle.

jules: So I can leave.`,
      next: '@hub'
    },

    a1_nik: {
      enter: g => { g.flag('nik_chair'); g.bond('nik', { affection: 1 }); },
      text: `Nik is sitting on his suitcase to close it. He gets off it when you come in, and the suitcase springs open, and a shirt falls out.

nik: Okay. Okay. Sit down. Close the door.

He goes to his desk and opens a drawer and takes out a small white box. Inside, nestled in foam, two tiny wireless earbuds.

nik: These are the good ones. Bone conduction. Forty-hour battery. Waterproof to a meter. I bought them in September and I never told you because I didn\'t want you to think I was being weird.

sam: Nik.

nik: I know it\'s weird. Okay. Patch notes. I have this app. It patches into my phone. If you wear one of these, and you\'re anywhere, and something is happening, you tap it twice, and it calls me. And I pick up. Wherever I am. Even at my aunt\'s house in Edison with forty-five Bengali people eating turkey biryani.

He holds the box out.

nik: I\'m not saying anything is going to happen. I\'m saying I\'m the guy in the chair. The guy in the chair has to have a *chair*.

You take the box.

nik: Tap twice. That\'s all. Tap twice and I\'m there.

His dad honks from Broad Street. Nik sits on his suitcase again, hard, and it closes.`,
      next: '@hub'
    },

    a1_simone: {
      enter: g => { if (g.f('simone9') === 'lied') { g.bond('simone', { trust: 2, respect: 1 }); g.flag('simone10', 'mended'); } else { g.bond('simone', { affection: 1 }); g.flag('simone10', 'warm'); } },
      text: g => `30th Street Station is the inside of a cathedral full of people with roller bags. The big board clacks. The bronze angel holds the dead soldier up toward the ceiling the way it has since 1952.

You carry her bag. She lets you.

${g.f('simone9') === 'lied' ? `She doesn\'t say anything until you\'re standing under the board, and her train is *ON TIME*, and there\'s nothing left to do but leave.

simone: Why\'d you come?

sam: Because I lied to you.

She waits.

sam: You gave me one chance, and I lied, and you were right, and I\'m sorry. That\'s all I came to say. You don\'t have to say anything back.

She looks at you for a while.

simone: That\'s two chances, Salvatore. I don\'t give two chances.

sam: I know.

simone: I\'m giving you two chances.

She takes her bag out of your hand. She hugs you, one arm, fast and fierce, and says into your shoulder:

simone: If you die while I\'m in Georgia, I\'ll never forgive you. I\'ll fly back for the funeral and do a *monologue*.` : `She talks the whole way across the station. About Atlanta. About her mother\'s sweet potato pie, which she says is a religious experience, and her grandmother, who doesn\'t approve of theater, and her little cousins, who think she\'s famous.

Under the board, she stops.

simone: You\'re going to do something stupid tomorrow.

sam: What?

simone: I don\'t know what. I have no information. I can see it on you. You\'ve got stupid all over you.

She takes her bag.

simone: Don\'t.

She hugs you, one arm, fast and fierce.

simone: Salvatore. If you die while I\'m in Georgia, I will fly back for the funeral and do a *monologue*.`}

She goes down the stairs to the platform without looking back, which is the Simone way: she exits.`,
      next: '@hub'
    },

    a1_pop: {
      enter: g => { g.know('pop_plan', ['sam', 'frank', 'rosa'], 'Pop has $11,400: his 401(k) from Liberty, cashed out. He\'s going to give it to the Iannuccis on Thanksgiving and ask for more time.'); g.bond('frank', { trust: 1 }); },
      text: g => `Mifflin Street smells like celery and onions frying in butter. Ma is making the stuffing a day early, the way Nonna taught her, in the big roasting pan.

Pop is at the kitchen table with a shoebox.

He doesn\'t hide it when you come in. That\'s how you know it\'s bad.

frank: Sit down, kid.

The shoebox is full of cash. Rubber-banded stacks of twenties and fifties.

frank: Eleven thousand four hundred. My 401(k) from Liberty. Twenty-six years. I cashed it out Monday. The penalty was a joke. Your mother cried at the bank.

Ma doesn\'t turn around from the stove.

rosa: I didn\'t cry at the bank. I cried in the car.

frank: She cried in the car.

He puts the lid on the box.

frank: Tomorrow they\'re coming. Dante called. Him and the old man, Bruno. To the house. On Thanksgiving. They said they wanna *talk*. So I give them this, and I tell them the rest by summer, and I ask nice.

sam: And if they say no?

He doesn\'t answer.

${g.f('pop9') === 'lied' ? 'He looks at you for a second too long. The way he looked at you in the cab. Like he\'s waiting for you to touch your ear.' : 'He looks at you.'}

frank: Dinner\'s at four. You\'re gonna be here. You\'re gonna sit next to your grandmother and eat, and say grace, and you\'re not gonna say one word to those men. That\'s all I need from you. You hear me?

sam: Yeah, Pop.

Ma puts a spoonful of stuffing in front of you, on a saucer, to taste.

rosa: Eat.`,
      next: '@hub'
    },

    a1_vinnie: {
      enter: g => { g.bond('vinnie', { trust: 1, tension: -1 }); g.know('dante_cap', ['sam', 'vinnie'], 'Vinnie: Dante remembers the cap. Pop\'s Eagles cap, on backward, on the kid under I-95.'); },
      text: `vinnie: Sally. Finally. Where are you?

sam: Temple. What\'s wrong?

vinnie: I\'m driving \'em tomorrow. Dante and the old man. To your house. Thanksgiving. Four o\'clock. I wanted you to hear it from me.

You don\'t say anything.

vinnie: And listen. Dante\'s been talking. In the car. He thinks I don\'t listen \'cause I\'m the driver. He keeps talking about under 95. The kid. He says the kid had an Eagles cap on backward, old, from like the Reid years, with a sweat stain on the brim.

vinnie: He says he seen that cap before. On your pop. At the Melrose, in September.

The phone is cold against your ear.

vinnie: He ain\'t sure. He\'s a smart guy, he likes to be sure. But he\'s close, Sally. He\'s real close.

vinnie: Don\'t wear the hat.`,
      next: '@hub'
    },

    a1_bree: {
      night: true,
      loc: 'CARDONE HALL · 9-14',
      clock: { time: '11:58 PM' },
      enter: g => { g.sleep(6); g.know('bree_parade', ['sam', 'bree'], 'Bree: the job is the Thanksgiving Day Parade. Teddy left at 4 a.m. Wednesday.'); },
      text: g => `The ninth floor is dark and empty, all the doors closed, the hallway light buzzing. You\'re the only one left on the floor. You can hear the elevator cables moving in the shaft.

At 11:58, your phone lights up.

TXT bree: wawa
TXT bree: its the parade
TXT bree: tomorrow. the parkway. he left this morning at 4 with heck. he took a folding chair. a FOLDING CHAIR
TXT bree: he thinks if he holds it long enough someone pays and nobody gets hurt
TXT bree: theres 6 ambulances on the parkway already. tonight. parked. no numbers on them
TXT bree: im going. i cant not go
TXT bree: please

You read it twice.

Then you look at the window over your desk. No frost. Just your own face in the black glass, and behind it, Broad Street, empty, the traffic lights changing for nobody.

*Don\'t come, Sammy.*

*Stay on Mifflin Street.*

*A lot of people, standing still.*

You set an alarm for 6:00. You lie down in your clothes. ${g.f('jules9') === 'stay' ? 'Across the hall, 9-11 is dark for the first time all semester. You didn\'t know you\'d miss the light.' : ''}

You don\'t sleep much.`,
      next: 'a2_morning'
    }
  }
});
