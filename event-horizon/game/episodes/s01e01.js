/* S1 · E1 · PILOT, part 1 of 4: meta, cold open, Act One ("Move-In"). */
EH.episode({
  id: 's01e01', season: 1, number: 1, title: 'Pilot', runtime: 'premiere', look: 's1',
  cast: ['sam', 'jules', 'nik', 'simone', 'vinnie', 'grace', 'rosa', 'frank', 'nonna', 'mikey', 'gigi'],
  start: 'cold_open',
  xp: 4,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'BROAD & SPRING GARDEN',
      clock: { day: 'Sat', date: 'Aug 22', time: '11:51 PM' },
      text: `The order slip in your pocket says **500 N. BROAD · LOADING DOCK · ASK FOR MARCO**. The pizza bag on your back is still warm. The heat on Broad Street at ten to midnight sits on your chest like a cat that won't move. It started drizzling around eleven, which didn't help. It just made the whole city smell like a hot sidewalk somebody had hosed down.

You're stopped at the light at Spring Garden with one foot down and the e-bike humming under you. Northbound, a SEPTA bus, the 16, is coming down Broad way too fast on wet asphalt. In the crosswalk there's a little boy in a Spider-Man backpack holding his grandmother's hand. The grandmother is looking at her phone. You have exactly enough time to think *oh, no*.

Then the light comes.

It isn't white. It's every color at once, the colors you see on the inside of your eyelids when you rub them too hard. It comes from everywhere at once. Then it comes from nowhere.

The sound stops.

It doesn't go quiet. It *stops*: the bus engine, the cicadas in the vacant lot, the hum of the bike, the bass from somebody's car three blocks north. It's like somebody pulled the plug on Philadelphia.

The rain hangs in the air. It isn't falling. It's *hanging*, every drop a little bead of streetlight, a whole curtain of them between you and the bus. The bus isn't moving. The boy isn't moving. The grandmother's thumb is frozen in the middle of a scroll.

It's cold, *so* cold. Your breath comes out white in August. Frost is crawling up the handlebars of your bike like it's late for something.

You're the only thing on Broad Street that's moving.

Your body figures out what to do before you do. It always has. Before Temple, before tonight, before any of this, you were the kind of kid who—`,
      choices: [
        { text: '…got to every ball. Neumann-Goretti shortstop, two years varsity, the fastest first step in the Catholic League.', tag: '+1 Reflex · +1 Athletics',
          fx: g => { g.attr('reflex', 1); g.skill('athletics', 1); g.flag('origin', 'shortstop'); }, go: 'cold_cut' },
        { text: '…worked the flat-top at Dolores\' Luncheonette at six in the morning, forty eggs at a time, burns up both forearms.', tag: '+1 Body · +1 Cook',
          fx: g => { g.attr('body', 1); g.skill('cook', 1); g.flag('origin', 'line'); }, go: 'cold_cut' },
        { text: '…could talk his way out of anything. Detention, a traffic stop, one of Ma\'s moods.', tag: '+1 Charm · +1 Persuade',
          fx: g => { g.attr('charm', 1); g.skill('persuade', 1); g.flag('origin', 'talker'); }, go: 'cold_cut' },
        { text: '…hid library books inside a Madden case so nobody on the block would know he read.', tag: '+1 Wits · +1 Study',
          fx: g => { g.attr('wits', 1); g.skill('study', 1); g.flag('origin', 'reader'); }, go: 'cold_cut' },
        { text: '…stepped into every schoolyard fight that wasn\'t his.', tag: '+1 Nerve · +1 Brawl',
          fx: g => { g.attr('nerve', 1); g.skill('brawl', 1); g.flag('origin', 'fighter'); }, go: 'cold_cut' },
        { text: '…took care of Nonna after her fall. Pills, stairs, the nights she woke up screaming in Italian.', tag: '+1 Heart · +1 Medicine',
          fx: g => { g.attr('heart', 1); g.skill('medicine', 1); g.flag('origin', 'caretaker'); }, go: 'cold_cut' }
      ]
    },

    cold_cut: {
      night: true,
      text: g => `${{
        shortstop: 'It\'s the first step, the one Coach Dimarco used to clock with a stopwatch and swear at. Your weight drops and your knees go, and you\'re off the bike before you decide to be.',
        line: 'It\'s the flat-top feeling: eight tickets up, the grease spitting, and you just *move*, hands before head. You\'re off the bike before you decide to be.',
        talker: 'It\'s the feeling right before a teacher\'s about to write you up, when the world slows down and you can see every exit. You\'re off the bike before you decide to be.',
        reader: 'Some part of you is already doing the math: distance, angle, the bus\'s line. You read it like a page. Then you\'re off the bike before you decide to be.',
        fighter: 'It\'s the schoolyard feeling, the half-second where everybody else is deciding whether to get involved and you already have. You\'re off the bike before you decide to be.',
        caretaker: 'It\'s three in the morning on Mifflin Street, Nonna\'s voice through the wall, and your feet hitting the floor before you\'re awake. You\'re off the bike before you decide to be.'
      }[g.f('origin')]}

The rain that isn't falling bursts cold against your face, drop after drop, like running through a bead curtain made of ice. The bus is still coming, slow as a glacier, slow as a thought. The boy's sneaker is lifted halfway through a step.

You realize, with a feeling like missing a stair in the dark, that you might actually make it.

> FOUR DAYS EARLIER`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_cab' },

    /* ================= ACT ONE: MOVE-IN ================= */
    a1_cab: {
      card: { kind: 'act', label: 'Act One', title: 'Move-In' },
      loc: 'LIBERTY CAB #2207 · NORTHBOUND ON BROAD',
      clock: { day: 'Thu', date: 'Aug 20', time: '9:12 AM' },
      enter: g => { g.meet('rosa'); g.meet('frank'); g.meet('gigi'); g.bond('gigi', { affection: 3, trust: 2 }); g.bond('rosa', { affection: 3 }); g.bond('frank', { affection: 2 }); },
      text: `Your father's cab smells like pine tree air freshener and the ghost of ten thousand fares. He's driving with the meter off, which in Frank Kearney's language is roughly equivalent to weeping openly.

Ma is in the front seat with a foil tray of lasagna on her lap, the size of a manhole cover. It's for "the RA," a person none of you have met. Ma believes in getting to the authorities early.

You're in the back with your sister, a laundry hamper, a box labeled SAM STUFF DO NOT TOUCH (GIGI), and a lamp that has already hit you in the face twice.

frank: Your back okay back there?

sam: You're asking me about backs?

frank: I'm asking about the lamp.

Gigi is thirteen and texting you from eleven inches away.

TXT gigi: r u nervous
TXT gigi: u look nervous
TXT gigi: ur doing the jaw thing
TXT gigi: SAMMMMMM

City Hall slides past, William Penn up top in his hat, looking down at the whole city like he's disappointed in it. Then Broad Street opens up north: the Divine Lorraine with its sign lit even in daylight, the rowhouses, the vacant lots, the new glass buildings that went up so fast nobody's sure who lives in them.

Three miles. That's all it is from Mifflin Street to Temple. You've been making the trip your whole life, for Owls games with Pop, Mikey's graduation, the time Vinnie's cousin got stabbed and everybody went to Temple Hospital to sit in the waiting room in solidarity. Three miles, and somehow it feels like you're being launched into space.

This morning on the stoop, Nonna held your face in both hands the way she does, like she's checking a melon. She said: *"Salvatò. Saturday, you wear a jacket."*

You said, *"Nonna, it's gonna be ninety-four on Saturday."*

She said, *"Near midnight. The clocks. You wear a jacket."* Then she went back inside without explaining, which is her whole thing.

rosa: You're gonna call. Every day.

sam: Ma.

rosa: Every *other* day. I'm reasonable.

Pop's phone buzzes in the cupholder. UNKNOWN NUMBER. He declines it without looking. It buzzes again. He declines it again.

Gigi has stopped texting and is staring out the window with her arms crossed, which means she's about to cry and would rather die.`,
      choices: [
        { text: 'Bump Gigi\'s shoulder. "Sunday dinners. Every week. I\'ll be there. Swear on Nonna."', tag: 'A promise',
          fx: g => { g.bond('gigi', { trust: 2, affection: 1 }); g.flag('promise_sundays'); g.know('promise_sundays', ['sam', 'gigi'], 'You swore to Gigi you\'d come home for Sunday dinner every week.'); }, go: 'a1_cab_gigi' },
        { text: '"Everybody relax. I\'m going three miles. Mikey went to *Afghanistan*."', tag: 'Deflect',
          fx: g => { g.bond('rosa', { tension: 1 }); g.bond('gigi', { affection: -1 }); g.flag('cab_joke'); }, go: 'a1_cab_joke' },
        { text: 'Watch Pop. The phone. The jaw. Something\'s up with him.',
          check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'empathy', label: 'Read Pop',
            on: { strong: 'a1_cab_pop_strong', weak: 'a1_cab_pop_weak', miss: 'a1_cab_pop_miss' } } }
      ]
    },

    a1_cab_gigi: {
      text: `Gigi doesn't look at you. She holds out her pinky without turning her head.

You hook it.

gigi: Swear on Nonna *and* on the Eagles.

sam: That's a big swear.

gigi: That's why.

You swear on the Eagles. Pop makes a small noise in the front seat, like it's the most serious thing anybody's said in this cab since he bought it. Ma turns around and looks at both of you, and her eyes do the shiny thing. She turns back around fast and adjusts the lasagna like it insulted her.`,
      next: 'a1_arrive'
    },
    a1_cab_joke: {
      text: `sam: Mikey went to *Afghanistan*. Nobody brought a lasagna to Afghanistan.

rosa: I sent *eleven* lasagnas to Afghanistan.

sam: And how many came back?

rosa: Your brother came back. That's how many.

That shuts the cab up for a full block. Gigi puts her earbuds in and turns to the window. Ma's hands are flat on the foil, very still.

Pop catches your eye in the rearview mirror. It isn't angry. It's the look he gives a bad fare: *you didn't know better, and now you do.*

sam: …Sorry, Ma.

rosa: I know you are. Sit up, you'll ruin your spine.`,
      next: 'a1_arrive'
    },
    a1_cab_pop_strong: {
      enter: g => { g.know('pop_unknown_calls', ['sam'], 'Pop keeps declining calls from the same unknown number: a 215 number ending in 4471.'); g.bond('frank', { trust: 1 }); },
      text: `You watch him in the rearview mirror. Frank Kearney has two settings: quiet, and quieter. This is a third setting you've never seen.

His hands sit at ten and two like a driving-school poster, and that's wrong too. Pop drives with one wrist and a coffee. And the number on the screen isn't really unknown. It flashes for half a second before the caller ID gives up: **215-555-4471**. Same number both times.

He catches you looking.

frank: Spam. Extended warranty.

sam: On the cab?

frank: On my *life*, kid. They want to extend my life.

He's joking, and Pop never jokes. You file that away in the drawer where you keep things you don't want to look at.`,
      next: 'a1_arrive'
    },
    a1_cab_pop_weak: {
      enter: g => { g.know('pop_distracted', ['sam'], 'Pop is distracted, and he\'s ignoring a lot of calls.'); },
      text: `Pop is somewhere else. His eyes go to the phone, then the road, then the phone. He hits a pothole on Broad & Fairmount that he has personally avoided every day for twenty-two years.

sam: You good, Pop?

frank: Good. Back. Pothole.

He says it in that order, like those three words are a full sentence. You let it go, mostly because Ma is turning around to tell you that the RA is going to love the lasagna.`,
      next: 'a1_arrive'
    },
    a1_cab_pop_miss: {
      text: `You try to read him. All you get is your father's face doing what it always does, which is nothing.

sam: Pop, you good?

frank: I'm driving, kid.

Then the lamp hits you in the face a third time, Gigi laughs so hard she snorts, and the moment is gone.`,
      next: 'a1_arrive'
    },

    a1_arrive: {
      loc: 'CARDONE HALL · N. BROAD ST',
      clock: { time: '9:40 AM' },
      text: `Cardone Hall is fourteen stories of 1970s beige concrete, the kind of building that looks like it was designed by somebody who'd heard about joy and disapproved. Across its face, someone has hung a banner: **WELCOME HOME, OWLS!** Someone else, overnight, has spray-painted a small but anatomically ambitious drawing in one corner. Facilities is up on a ladder scrubbing it with the haunted look of a man who has done this before.

The line for the elevators goes out the door, down the block, and around the corner onto Cecil B. Moore. A girl in a Temple Crew shirt walks the line with a clipboard announcing that the estimated wait is **ninety minutes** in a voice that's clearly tried to say it cheerfully ninety times.

Pop is double-parked with his hazards on, and a Temple police officer is already walking toward him with the slow, inevitable confidence of the tide.

frank: Go. Go, go, go. Grab the hamper.

You're on nine. You've got young knees, a hamper, two duffels, and a lamp with a personal vendetta. You're taking the stairs.

That's when you see the minifridge.

A black Range Rover is pulled in behind Pop's cab, nose to bumper, like a panther behind a cat. An older man in a gray suit, sixties, white-haired, built like he used to row in college sometime during the Eisenhower administration, is wrestling a black minifridge out of the back. It's the nice kind with a glass door. He gets it to the curb, straightens, and puts one hand to his lower back with a wince you know intimately, because it's your father's wince.

Standing beside him is a girl your age. White sneakers that have never touched a Philadelphia puddle. Hair up in the kind of messy bun that took forty minutes. A phone to her ear, and a voice like something poured carefully out of a cut-glass decanter:

jules[FRIDGE GIRL]: No, Mother, I'm not being dramatic. I'm being *practical*. Practical is the opposite of— No. *No.* It has an Honors program. It has a *good* Honors program. Mr. Abernathy is right here, he can confirm the Honors program is— I'm hanging up. I'm hanging up now. I love you. I'm hanging up.

She doesn't hang up. She closes her eyes and listens to whatever her mother says next, and her face goes completely, carefully blank. You've seen that face before. You've made it. It's the face of a kid who's learned that the worst thing you can do is let them see it land.

Mr. Abernathy bends for the fridge again. The wince comes back.`,
      choices: [
        { text: 'Grab the fridge. "I got it. I\'m going up anyway." Don\'t wait for an answer.', tag: 'The reflex',
          fx: g => { g.flag('fridge', 'grabbed'); g.hidden('revenant_drift', 0.3); g.meet('jules'); g.bond('jules', { affection: -1, tension: 1 }); }, go: 'a1_fridge_grab' },
        { text: 'Ask first. "You want a hand with that?"', tag: 'Ask',
          fx: g => { g.flag('fridge', 'asked'); g.meet('jules'); g.bond('jules', { respect: 1, tension: 1 }); }, go: 'a1_fridge_ask' },
        { text: 'Not your fridge. Not your business. Get your hamper and head for the stairs.', tag: 'Walk away',
          fx: g => { g.flag('fridge', 'walked'); g.hidden('revenant_drift', -0.3); g.meet('jules'); }, go: 'a1_fridge_walk' }
      ]
    },

    a1_fridge_grab: {
      text: `You drop the hamper on the curb next to Pop's cab, step around the Range Rover, and get the minifridge in a bear hug before Mr. Abernathy can straighten up.

sam: I got it! I'm going up anyway. What floor?

The girl's eyes open. She looks at you the way you'd look at a raccoon that walked into a restaurant: not scared, just deeply, personally offended on behalf of civilization.

jules[FRIDGE GIRL]: Mother, I'll call you back. A boy is stealing my refrigerator.

She actually hangs up this time.

jules[FRIDGE GIRL]: Put that down.

sam: It's fine, I'm going up anyway—

jules[FRIDGE GIRL]: You said that. What floor are *you* going to?

sam: Nine.

Something passes across her face, very fast. Later you'll decide it was horror.

jules[FRIDGE GIRL]: …Nine.

sam: Hey, what are the odds.

Mr. Abernathy looks at you with an expression of profound gratitude, which he immediately hides behind an expression of profound professional neutrality. The girl looks at the elevator line, at you, at the fridge, and makes a calculation you can actually *watch* her make.

jules[FRIDGE GIRL]: Fine. I'm coming with you.

sam: You don't have to—

jules[FRIDGE GIRL]: It's *my* refrigerator.`,
      next: 'a1_stairs'
    },
    a1_fridge_ask: {
      text: `sam: Hey. You want a hand with that?

The girl lowers the phone half an inch.

jules[FRIDGE GIRL]: No. Thank you.

It comes out perfectly polite, the way a door can be closed perfectly politely.

Mr. Abernathy bends for the fridge again. His face goes the color of a hospital wall. You look at him, not at her.

sam: I'm not asking you, I'm asking him. Sir, you want a hand with that?

Mr. Abernathy looks at the girl. The girl looks at Mr. Abernathy. Something passes between them, an entire conversation in a dialect of rich people you don't speak.

MR. ABERNATHY: I would be grateful, young man.

jules[FRIDGE GIRL]: Mother, I'll call you back. I'm being overruled by staff.

She hangs up and looks at you properly for the first time. It's a long look, top to bottom, the kind that inventories you.

jules[FRIDGE GIRL]: What floor?

sam: Nine.

jules[FRIDGE GIRL]: Of course it is.`,
      next: 'a1_stairs'
    },
    a1_fridge_walk: {
      text: `Not your fridge. You grab the hamper and the duffels and the lamp of your enemies, and you head for the stairwell door at the side of the building, propped open with a cinderblock.

You make it exactly two steps into the stairwell before you hear it: a grunt, and a scrape of glass on concrete, and an old man saying, very quietly and with tremendous dignity, *"Christ on a bicycle."*

You stop.

You look back.

Mr. Abernathy has gotten the fridge as far as the stairwell door, apparently also defeated by the elevator line, and he's standing with both hands on his lower back, bent at the angle of a question mark. The girl is beside him trying to lift her end. She's stronger than she looks, but it's a two-person fridge, and one of the two people is pushing seventy.

You put your hamper down on the landing.

sam: Sir. Lemme.

jules[FRIDGE GIRL]: We're fine.

sam: I'm not talking to you. Sir?

MR. ABERNATHY: …I would be grateful, young man.

The girl looks at you like you've just personally taken something from her. You won't figure out for a long time that you did.

jules[FRIDGE GIRL]: What floor?

sam: Nine.

jules[FRIDGE GIRL]: Of *course* it is.`,
      next: 'a1_stairs'
    },

    a1_stairs: {
      loc: 'CARDONE HALL · STAIRWELL B',
      text: `Nine floors. A hundred and sixty-two steps. You'll count them later, many times, at speeds you can't imagine yet.

Right now you're counting them at the speed of a South Philly kid carrying a sixty-pound glass-door minifridge while a girl in white sneakers follows four steps behind you carrying your lamp. She took it without asking. She holds it in front of her like evidence.

jules[FRIDGE GIRL]: You're breathing very loudly.

sam: I'm carrying. A *refrigerator*.

jules[FRIDGE GIRL]: It's a beverage center.

sam: It's a— What's the difference?

jules[FRIDGE GIRL]: About four hundred dollars.

The stairwell is hot as an oven. Somebody on six has propped their door open and is blasting Meek Mill. Somebody on seven is crying on the phone. Somebody on eight is crying on the phone *and* blasting Meek Mill, a real Philadelphia combo.`,
      choices: [
        { text: 'Take the stairs at a dead sprint. Show her.',
          check: { kind: 'pool', attr: 'body', skill: 'athletics', diff: 3, label: 'Nine flights, sixty pounds', on: { crit: 'a1_stairs_crit', success: 'a1_stairs_win', partial: 'a1_stairs_partial', fail: 'a1_stairs_fail' } },
          fx: g => g.flag('stairs_showoff') },
        { text: 'Steady pace. Breathe. Don\'t die.',
          check: { kind: 'pool', attr: 'body', skill: 'athletics', diff: 2, label: 'Nine flights, sixty pounds', on: { crit: 'a1_stairs_crit', success: 'a1_stairs_win', partial: 'a1_stairs_partial', fail: 'a1_stairs_fail' } } }
      ]
    },
    a1_stairs_crit: {
      enter: g => { g.bond('jules', { respect: 2 }); g.flag('stairs_result', 'crit'); },
      text: `Something kicks in around the fourth floor, some kind of second wind, the shortstop-on-a-double-play feeling. You stop breathing like a dying accordion and start *climbing*. Five. Six (Meek Mill). Seven (sobbing). Eight (both). You hit nine and set the fridge down in the hallway like it's a carton of eggs, and you turn around.

She comes around the landing ten full seconds later, holding your lamp, and stops.

She looks at you. She looks at the fridge. She looks at you again, like she's recalculating something and doesn't like the new number.

jules[FRIDGE GIRL]: Hm.

That's all. *Hm.* But you've heard a thousand kinds of *hm* from a thousand nuns, and this one is a rare species. It's the *hm* of someone who has just been, against her will, a little bit impressed.`,
      next: 'a1_door'
    },
    a1_stairs_win: {
      enter: g => { g.bond('jules', { respect: 1 }); g.flag('stairs_result', 'success'); },
      text: `You make it. You make it the way a car with a check-engine light makes it: loudly, damply, and with real questions about the future. You set the fridge down in the ninth-floor hallway and lean on the cinderblock wall and try to look like a person who does this for fun.

She comes around the landing right behind you. She is not winded. She isn't sweating. You suspect, briefly and with real hatred, that she has never sweated in her life.

jules[FRIDGE GIRL]: You're the color of a ham.

sam: Thank you.

jules[FRIDGE GIRL]: It wasn't a compliment.

sam: I know. I'm from South Philly. That's how we say thank you to insults.`,
      next: 'a1_door'
    },
    a1_stairs_partial: {
      enter: g => { g.pool('stamina', -1); g.flag('stairs_result', 'partial'); g.bond('jules', { tension: 1 }); },
      text: `Seventh-floor landing. Your arms have stopped being arms and become two long bags of hot sand. You set the fridge down. Just for a second. Just to readjust.

She stops two steps below you and looks at the fridge, then at you.

jules[FRIDGE GIRL]: Give me a corner.

sam: I got it.

jules[FRIDGE GIRL]: You *clearly* don't have it. Give me a corner.

sam: I said I got it—

She sets your lamp down on the step, takes one end of the beverage center without asking, and lifts. You lift the other end, because the alternative is letting a girl in white sneakers carry it alone, and you'd rather die on this staircase.

The two of you carry it up the last two flights together, not talking, sweating (well, you're sweating), with the grim focus of people defusing a bomb.

At the top, she lets go first. She doesn't say *you're welcome*. Somehow that's worse.`,
      next: 'a1_door'
    },
    a1_stairs_fail: {
      enter: g => { g.pool('stamina', -2); g.flag('stairs_result', 'fail'); g.flag('fridge_dented'); g.bond('jules', { tension: 1, respect: -1 }); },
      text: `Sixth floor. Meek Mill is going *dreams and nightmares*, your grip goes, and the beverage center goes with it.

It doesn't fall far, maybe eight inches. But eight inches of glass-door minifridge onto a concrete step makes a sound like a car accident in a church. Somewhere above you, the crying girl on seven stops crying to listen.

There's a dent now: a small, perfect crescent in the stainless-steel corner. It looks exactly like a frown.

jules[FRIDGE GIRL]: …

sam: That was there before.

jules[FRIDGE GIRL]: It was not.

sam: It's a— It gives it character.

jules[FRIDGE GIRL]: It's a *beverage center*. It doesn't need *character*.

You pick it back up. Your arms are shaking. She doesn't offer to help. You understand, with total clarity, that this is because she knows you'd refuse, and she'd rather watch you suffer than watch you refuse.

You make it to nine on pure Kearney spite. That's a renewable resource.`,
      next: 'a1_door'
    },

    a1_door: {
      loc: 'CARDONE HALL · 9TH FLOOR',
      clock: { time: '10:05 AM' },
      text: g => `The ninth floor smells like fresh paint over old paint over something that happened in 1983. Down the hall, somebody's dad is assembling a futon with the despair of a man who has lost a war.

She stops in front of **9-11**, directly across from **9-14**. That's the room number on your housing email.

She notices you noticing.

jules[FRIDGE GIRL]: Please tell me you're not 9-14.

sam: I'm 9-14.

jules[FRIDGE GIRL]: *Of course* you are.

She says it the way you'd say it about weather in Philadelphia: not personally, just as a general fact about the universe and its contempt for her. She unlocks her door, and you carry the fridge in and set it down in the only spot it fits, under a window with a view of a shuttered Rite Aid and, beyond it, the whole of North Philly in the August haze. It's beautiful, if you squint, and if you're from here.

${g.f('stairs_result') === 'fail' ? 'The dent faces the room. Neither of you mentions it. It\'s the loudest thing in there.\n\n' : ''}She sets your lamp down on her desk. Then she seems to realize what she's done, picks it back up, and hands it to you like returning a library book.

jules[FRIDGE GIRL]: You didn't have to do that.

sam: I know.

jules[FRIDGE GIRL]: No. I mean you *didn't have to*. Mr. Abernathy is paid to do it. He's paid quite well. If you do it, he feels he's failed my mother, and then he worries all the way back to Gladwyne, and I get a text about it tonight. He uses complete sentences. It's devastating.

From where you're standing, that sounds exactly like a rich girl explaining that the help has feelings. You're too sweaty and too South Philly to hear the other thing underneath it: *I was going to carry it myself. I wanted to carry it myself. I wanted to do one thing today without someone doing it for me.*

You won't hear that for a long time.`,
      choices: [
        { text: 'Turn it on. Smile. "Sam Kearney. Nice to meet you, neighbor."',
          check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Charm her', near: [],
            on: { strong: 'a1_door_charm_strong', weak: 'a1_door_charm_weak', miss: 'a1_door_charm_miss' } } },
        { text: '"You\'re welcome, Your Highness."', tag: 'Bite',
          fx: g => { g.bond('jules', { tension: 2, respect: 1, affection: -1 }); g.flag('door', 'highness'); }, go: 'a1_door_highness' },
        { text: 'Say nothing. Set her lamp... your lamp. Take your lamp. Leave.', tag: 'Silence',
          fx: g => { g.bond('jules', { respect: 1, tension: 1 }); g.flag('door', 'silent'); }, go: 'a1_door_silent' }
      ]
    },
    a1_door_charm_strong: {
      enter: g => { g.bond('jules', { affection: 1, tension: 1 }); g.flag('door', 'charm_strong'); },
      text: `You turn it on: the whole Kearney thing, the grin that got you out of a three-day suspension in tenth grade, the one Ma calls *the menace*.

sam: Sam Kearney. Nice to meet you, neighbor. Sorry about your beverage center. Welcome to Philadelphia.

And for half a second, a single frame, the corner of her mouth goes. It's not a smile. It's the place a smile would be if she weren't currently suppressing it with the full force of her upbringing.

jules[FRIDGE GIRL]: Juliet Pemberton.

She doesn't offer to shake. She holds the door.

jules: People call me Jules. My mother calls me Juliet, and so do people who are about to disappoint me.

sam: Which am I?

jules: It's ten in the morning. Let's not rush to conclusions.

She closes the door. You stand in the hallway holding your lamp, with the distinct and unfamiliar feeling of having *almost* won something.`,
      next: 'a1_room'
    },
    a1_door_charm_weak: {
      enter: g => { g.bond('jules', { tension: 1 }); g.flag('door', 'charm_weak'); },
      text: `sam: Sam Kearney. Nice to meet you, neighbor. Welcome to Philadelphia.

She looks at the grin. You can tell she's seen better grins, on boys with sailboats.

jules[FRIDGE GIRL]: Cute.

She says it flatly, like reading a word off a vocab list.

jules[FRIDGE GIRL]: Juliet Pemberton. People call me Jules. My mother calls me Juliet, and so do people who are about to disappoint me.

sam: Which am I?

jules: Unclear.

The door closes. Not a slam. A firm, final *click*, like a jewelry box.`,
      next: 'a1_room'
    },
    a1_door_charm_miss: {
      enter: g => { g.bond('jules', { tension: 1, respect: -1 }); g.flag('door', 'charm_miss'); },
      text: `You go for the grin. It's the menace, Ma's least favorite, your best weapon.

sam: Sam Kearney. Nice to meet you, neigh—

jules[FRIDGE GIRL]: You have something on your face.

sam: What?

She gestures vaguely at all of your face.

jules[FRIDGE GIRL]: Sort of… everywhere.

It's sweat. It's the whole of the stairwell, running down your forehead in a sheet. You wipe it with your forearm, which is also sweaty, which makes it worse, which she watches with the polite interest of a scientist observing a failed experiment.

jules[FRIDGE GIRL]: Juliet Pemberton. People call me Jules. My mother calls me Juliet, and so do people who are about to disappoint me.

sam: …Which am I?

She just closes the door.`,
      next: 'a1_room'
    },
    a1_door_highness: {
      text: `sam: You're welcome, Your Highness.

Silence. Then she tilts her head, like you're a crossword clue that just got interesting.

jules[FRIDGE GIRL]: Juliet Pemberton. People call me Jules. My mother calls me Juliet, and so do people who are about to disappoint me.

sam: And what do people call people who carry their beverage centers up nine flights?

jules: Mr. Abernathy.

The door closes in your face. Through it, very faintly, you hear what might be a laugh, or might be the beverage center turning on.`,
      next: 'a1_room'
    },
    a1_door_silent: {
      text: `You don't say anything. You just pick up your lamp, nod at her once, the way Pop nods at other cab drivers at red lights, and turn to go.

jules[FRIDGE GIRL]: Wait.

You stop.

jules[FRIDGE GIRL]: Juliet Pemberton.

sam: Sam.

jules: People call me Jules. My mother calls me Juliet, and so do people who are about to disappoint me.

sam: Good to know.

You walk across the hall. You don't look back. You can feel her watching you do it, and you can feel her filing it under something. You don't know what yet.`,
      next: 'a1_room'
    },

    a1_room: {
      loc: 'CARDONE HALL · ROOM 9-14',
      clock: { time: '10:20 AM' },
      enter: g => { g.meet('nik'); g.meet('simone'); g.meet('grace'); },
      text: g => `Your roommate is already here, and he has brought three monitors.

That's the first thing. The second thing is that he's on FaceTime with his mother, holding the phone up and slowly panning it around the room, narrating like a realtor.

NIK'S PHONE: —and the window, Nikhil, show me the window, is there a lock—

nik: Ma, it's the ninth floor, the window doesn't— Oh! Oh, hi. Hi. Ma, my roommate is here. My *roommate*. Say hi.

He turns the phone toward you. On it is a small, fierce woman in reading glasses, with a face that's going to remember yours forever.

sam: Hi, Mrs.—

nik: Bhattacharya.

sam: Mrs. Bhattacharya. Hi. Sam.

MRS. BHATTACHARYA: Are you a good boy, Sam?

sam: …Most days?

MRS. BHATTACHARYA: "Most days." That's an honest answer. Nikhil, he's honest, I like him. Has he eaten? Have *you* eaten?

nik: Ma, haan, haan, I ate, he ate, everybody ate, I've been here two hours—

He finally gets her off the phone, and his whole body unclenches like a fist. He's skinny and nervous, with a Rutgers hoodie (*"It was my cousin's, it's ironic, it's a long story"*), glasses he pushes up roughly every four seconds, and the general vibe of a guy who's been rehearsing this conversation since June.

nik: Okay, so, hi. Nikhil. Nik. Edison, New Jersey, which I know, I *know*, but it's actually a really diverse community with a— You don't care. Computer science. I game. A lot. I'll use headphones, I swear. I'm a very respectful gamer. I snore sometimes, my mom says, but my mom also says I'm going to marry a doctor, so her credibility is mixed. Are you— What are you? Like, as a person.

You open your mouth.

That's when Ma arrives, having taken the elevator line, gotten to the front of it through methods nobody will ever explain, and come up eight floors with a lasagna the size of a manhole cover. She takes one look at Nik and *adopts him*. You watch it happen in real time. By the time Pop comes up, red-faced from his fight with the Temple police officer (*"We agreed to disagree"*), Ma has learned Nik's allergies, his mother's name, and his opinion on garlic.

And then there's a knock on your open door, and a girl leans in, tall, Black, gold hoops, a Decatur High Theatre shirt cut into something more ambitious. She looks at you like you're a show she bought tickets to.

simone: Hi. Sorry. Hi. Simone. Okonkwo-Hayes. I live across the hall. I'm looking for the boy who carried Juliet Pemberton's refrigerator up nine flights of stairs.

sam: Beverage center.

simone: Oh my *God*, she told you about the four hundred dollars.

She steps in, sees Ma, sees the lasagna, and you watch her decide on the spot that she lives here now.

simone: Ma'am, is that a lasagna?

rosa: It's for the RA.

simone: I'll take it to her.

rosa: Sit down, you'll take it to her later.

A minute later the actual RA appears in the doorway: a Korean-American girl in scrubs, three highlighters clipped to her collar, a clipboard, and the deep, permanent exhaustion of a woman who is a pre-med senior *and* responsible for forty freshmen.

grace: Grace Lim. Your RA. Floor meeting tonight, nine o'clock, lounge, mandatory, I'll know. Fire code says no minifridges over 4.4 cubic feet. Somebody on this floor brought a 4.5. I'm not going to say who.

Across the hall, you hear a door open, and Jules's voice, crisp as a cracker:

jules[JULES (O.S.)]: *It's a beverage center.*

grace: It's a 4.5.

Ma presses the lasagna into Grace's arms. Grace looks at it for a long time, like nobody's ever given her anything.

grace: …Okay.

${g.f('promise_sundays') ? 'Gigi has wandered over to Nik\'s monitors and is asking him whether he\'s "actually good or just has a lot of stuff." He looks at her like she\'s shot him, and they\'re friends instantly.' : 'Gigi sits on your bare mattress with her earbuds still in, pretending she isn\'t listening to everything.'}`,
      choices: [
        { text: 'Give Nik the full handshake: the slap, the grip, the snap. Welcome to Philly.', tag: 'Nik',
          fx: g => { g.bond('nik', { affection: 2 }); g.flag('nik_greet', 'handshake'); }, go: 'a1_room_nik' },
        { text: '"Three monitors. What are you, NASA? Show me."', tag: 'Nik',
          fx: g => { g.bond('nik', { respect: 2 }); g.flag('nik_greet', 'monitors'); }, go: 'a1_room_nik' },
        { text: '"Fair warning. My mother\'s gonna feed you till you die. Sunday gravy, Wednesday gravy. You can\'t stop it. Nobody can."', tag: 'Nik',
          fx: g => { g.bond('nik', { affection: 1, trust: 1 }); g.flag('nik_greet', 'warning'); }, go: 'a1_room_nik' }
      ]
    },
    a1_room_nik: {
      text: g => `${{
        handshake: 'You go in for it: the slap, the grip, the snap. Nik doesn\'t know the handshake. Nik doesn\'t know *any* handshakes. He follows along a half beat behind, like a man learning a dance at a wedding, and when you hit the snap he actually gasps. "Oh, that\'s *good*," he says. "That\'s really good. Can we do that every time? Is that a thing we can do?" You tell him it\'s a thing. His face does something that tells you nobody in Edison ever let him have a thing.',
        monitors: 'Nik lights up like a scoreboard. Within forty-five seconds you\'ve learned what a refresh rate is, why one monitor is vertical ("for *code*, bro, you read code *down*"), and that he built the computer himself out of parts he bought with three summers of Kumon tutoring money. He talks faster and faster until he hears himself, stops, and pushes up his glasses. "Sorry. I\'m a lot." You tell him a lot is fine. You grew up in a house where a lot is the minimum.',
        warning: 'Nik looks at Ma, who is cutting the RA\'s lasagna into squares and wrapping a stack in foil labeled NIKHIL in Sharpie. "I don\'t think I want it to stop," he says, very quietly. Then louder: "I mean. Respectfully. My mom feeds me but it\'s, like, *aggressive* love, it comes with a quiz." Ma, without turning around: "There\'s a quiz with mine too, honey." Nik looks at you with real fear. You nod. There\'s a quiz.'
      }[g.f('nik_greet')]}

You'll remember this later, when everything gets so much bigger than this room. The first hour: Ma and the lasagna, Pop testing the window lock three times, Gigi and Nik arguing about a video game you've never heard of, Simone sitting on the radiator saying "and *then* what" to every story like she's paying for them. Grace standing in the doorway holding a foil tray, like she can't remember the last time somebody took care of her.

The first hour, before anything happened.`,
      next: 'a1_goodbye'
    },

    a1_goodbye: {
      loc: 'N. BROAD ST · OUTSIDE CARDONE HALL',
      clock: { time: '12:30 PM' },
      text: `The goodbye happens on the sidewalk, because the Temple police officer has come back and is standing next to Pop's cab with his arms folded and the tired face of a man who knows he's going to lose.

Ma hugs you like she's trying to fold you up and put you back inside her. She smells like garlic and Jean Naté. She says *"Call"* into your shoulder, and *"Eat,"* and *"Your brother says don't do anything stupid,"* and then, without moving her mouth from your shirt, *"Salvatore, I am so proud of you I could throw up."*

Gigi doesn't cry. Gigi cries. Gigi punches you in the arm, hard, and then cries some more and gets into the cab and slams the door and puts her face against the window, which leaves a smudge you're going to think about at 3 a.m. for no reason.

Pop shakes your hand.

That's the Kearney men's way. He shakes your hand like you're a fare who tipped well, and when he pulls his hand back there's an envelope in yours. It's thick. You can feel twenties in there, a lot of them.

frank: Don't tell your mother.

sam: Pop—

frank: Books. Food. Whatever. Don't tell your mother.

His phone buzzes in his pocket. He doesn't look at it. You know he doesn't have this money. You know exactly how many hours of driving it is. You know because you've done the math on his fares since you were eleven, sitting in the passenger seat on summer Saturdays, watching the meter like it was a heartbeat.`,
      choices: [
        { text: 'Take it. Hug him, even though Kearney men don\'t. "Thanks, Pop."', tag: '+$200',
          fx: g => { g.money(200); g.bond('frank', { affection: 2 }); g.flag('pop_money', 'took'); }, go: 'a1_goodbye_end' },
        { text: 'Push it back into his jacket. "I got the job at Ciro\'s, Pop. I\'m good. Keep it."', tag: 'Refuse',
          fx: g => { g.bond('frank', { respect: 2, trust: 1 }); g.flag('pop_money', 'refused'); }, go: 'a1_goodbye_refuse' },
        { text: 'Take it. Then, while Ma is hugging Nik goodbye (she\'s hugging Nik goodbye), slip half into Gigi\'s backpack.', tag: '+$100',
          fx: g => { g.money(100); g.bond('gigi', { affection: 1 }); g.flag('pop_money', 'split'); g.know('gigi_money', ['sam'], 'You slipped $100 of Pop\'s money into Gigi\'s backpack.'); }, go: 'a1_goodbye_end' }
      ]
    },
    a1_goodbye_refuse: {
      text: `You push it back into the inside pocket of his windbreaker, the one with LIBERTY CAB across the back, and pat it twice.

frank: Sam.

sam: I got the job at Ciro's. Delivery. Cash tips. I'm good, Pop. Swear to God.

He looks at you for a long time. Pop's eyes are the most Irish thing about him: pale, watery, like the sky over the Delaware in January.

frank: …Okay, kid.

He doesn't argue. That's how you know he really needed it, and you'll think about that later too.`,
      next: 'a1_goodbye_end'
    },
    a1_goodbye_end: {
      text: g => `The cab pulls out onto Broad with its hazards still blinking, like it isn't sure it's allowed to leave. You stand on the sidewalk and watch it go south toward City Hall until it's just one more yellow car in a river of them.

Your phone buzzes.

TXT gigi: dont get cool
TXT gigi: if u get cool im telling nonna
${g.f('pop_money') === 'split' ? 'TXT gigi: WHY IS THERE MONEY IN MY BAG\nTXT gigi: sam\nTXT gigi: SAM\nTXT gigi: ok im keeping it\nTXT gigi: ilu' : 'TXT gigi: ilu. dont tell anyone i said that'}

You look up at Cardone Hall, fourteen stories of beige. Nine floors up, across the hall from your window, someone has already hung a white curtain, and it moves, just slightly, like somebody stepped away from it.`,
      next: 'a2_floor_meeting'
    }
  },

  polls: [
    { q: 'The minifridge', opts: [
      { label: 'Grabbed it without asking', pct: 58, if: g => g.f('fridge') === 'grabbed' },
      { label: 'Asked first, then helped Mr. Abernathy', pct: 27, if: g => g.f('fridge') === 'asked' },
      { label: 'Walked away… and then helped anyway', pct: 15, if: g => g.f('fridge') === 'walked' }
    ] },
    { q: 'Saturday, 11:51 PM, Broad & Spring Garden', opts: [
      { label: 'Ran straight for the kid', pct: 61, if: g => g.f('hitch_choice') === 'kid' },
      { label: 'Went for the bus driver\'s wheel', pct: 17, if: g => g.f('hitch_choice') === 'wheel' },
      { label: 'Stopped and looked at the whole street first', pct: 22, if: g => g.f('hitch_choice') === 'look' }
    ] },
    { q: 'Sunday morning: Nik', opts: [
      { label: 'Told him everything', pct: 44, if: g => g.f('nik_told') === 'told' },
      { label: 'Lied to his face', pct: 31, if: g => g.f('nik_told') === 'lied' },
      { label: 'Kept it to yourself for now', pct: 25, if: g => g.f('nik_told') === 'waited' }
    ] },
    { q: 'The Wawa on Broad', opts: [
      { label: 'Slipped and took the phone back', pct: 47, if: g => g.f('wawa') === 'slip' },
      { label: 'Ran him down', pct: 24, if: g => g.f('wawa') === 'chase' },
      { label: 'Tripped him from where you stood', pct: 14, if: g => g.f('wawa') === 'trip' },
      { label: 'Called it in and stayed out of it', pct: 15, if: g => g.f('wawa') === 'stayed' }
    ] }
  ],

  onEnd: g => {
    g.recap('A man across Broad Street put a finger to his lips. Then a bus passed, and he was gone.');
  }
});
