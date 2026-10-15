/* S2 · E10 · THE ITALIAN MARKET, part 3 of 4: Act Three ("The Procession"). */
EH.scenes('s02e10', {

  /* ================= ACT THREE: THE PROCESSION ================= */
  a3_morning: {
    card: { kind: 'act', label: 'Act Three', title: 'The Procession' },
    loc: 'CARDONE HALL · BROAD STREET',
    clock: { day: 'Sun', date: 'May 16', time: '9:00 AM' },
    enter: g => { g.sleep(5); },
    text: g => `Move-out day.

Broad Street in front of Cardone Hall is double-parked from Montgomery to Cecil B. Moore, minivans and U-Hauls with their flashers on, mothers carrying lamps, fathers carrying nothing and supervising. And in the middle of it, in the bus lane, where he is absolutely not allowed to be, your father\'s cab.

frank: KID! I got eleven minutes before a cop makes me move! Bring the heavy stuff first!

Gigi leans out the back window.

gigi: SAMMMMM. I\'m helping. I\'m carrying the light stuff. Where\'s the light stuff.

Ma gets out of the passenger side in her church clothes, because she\'s going straight to the festival after, because she goes every year, because Nonna goes every year.

She hugs you on the sidewalk on Broad Street in front of two hundred people. She holds on longer than usual.

rosa: ${g.f('terms8') === 'count' ? 'Count?' : 'You eat?'}

sam: ${g.f('terms8') === 'count' ? 'Zero.' : 'I ate.'}

rosa: *(into your shoulder, quietly)* ${g.f('terms8') === 'count' ? 'Today, it won\'t be zero. Will it.' : 'Something\'s happening today. I can feel it in my teeth, like your Nonna.'}

You don\'t answer. She lets go and fixes your collar.

rosa: ${g.f('terms8') === 'count' ? 'Then you text me first. And I\'ll count. That\'s the deal. That\'s the whole deal.' : 'Whatever it is. You come home after. To the house. For gravy. You hear me?'}

You carry three garbage bags and a box down nine flights. Pop fits all of freshman year into the trunk of a Crown Vic and closes it with his knee.

frank: Nine months. That\'s it? I thought there\'d be more.

He looks up at Cardone Hall for a while.

frank: Proud of you, kid. I don\'t say it. I\'m saying it.

Then a Temple cop knocks on his window and he says something that Nonna would slap him for and pulls out into Broad Street, and Gigi waves out the back window until the cab turns at Diamond.

It\'s 9:40. The procession steps off at one.`,
    next: g => g.f('plan10') === 'crew' ? 'a3_crew' : g.f('plan10') === 'deal' ? 'a3_deal' : 'a3_corner_wait',
    nextTargets: ['a3_crew', 'a3_deal', 'a3_corner_wait']
  },

  /* ---------------- The crew: the alley ---------------- */
  a3_crew: {
    loc: 'THE ALLEY BEHIND ESPOSITO\'S',
    clock: { day: 'Sun', date: 'May 16', time: '1:30 PM' },
    text: g => `1:30 p.m. The alley behind Esposito\'s Produce smells like eighty years of rotten lettuce. Two blocks away the brass band is warming up outside St. Mary Magdalen de Pazzi, and the drums come through the brick.

Nik, in your ear, from a folding chair in the back of Ciro\'s with his fifth monitor:

nik: Okay. Okay. I\'m on their channel. Bree, you\'re live. Go.

Bree is crouched next to you with a burner phone pressed to her mouth. She closes her eyes. When she opens her mouth, Cole Brannigan comes out of it.

bree: *(Brannigan, calm, polite)* "All units, this is Recovery. Hold position. Route change for the two o\'clock. Stand by for update. Recovery out."

Silence on the channel. Then:

VOICE: *(on the radio, tinny)* Copy, Recovery. Holding.

Bree drops the phone from her mouth and puts her hand over it like she\'s going to be sick.

heck: Door.

Heck puts both hands flat on the fire door. Steam comes up off his forearms. The paint bubbles, then blackens. The steel around the lock goes red, then orange, then it sags like wet bread, and Heck pulls the whole lock out of the door with two fingers and drops it in a puddle, where it hisses.

Inside, the warehouse is dark and cold and very big.

Two men in gray by the fridge door. Both turning.`,
    choices: [
      { text: 'Text Ma. *Counting.* Then go. Two men. Two seconds.', tag: 'Tell Ma, then Slip', slip: true, if: g => g.f('terms8') === 'count',
        fx: g => { g.flag('crew10_slip', 'told'); g.flag('count10a'); g.bond('rosa', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_crew_in' },
      { text: 'Slip. Two men. Two seconds.', tag: 'Slip', slip: true,
        fx: g => { g.flag('crew10_slip', 'silent'); if (g.f('terms8') === 'count') { g.flag('broke_count10'); g.bond('rosa', { trust: -1 }); g.hidden('revenant_drift', 0.5); } }, go: 'a3_crew_in' },
      { text: 'Don\'t Slip. Not yet. Save it. Let Heck go first. He\'s been waiting since January.', tag: 'Heck first',
        check: { kind: 'pool', attr: 'reflex', skill: 'brawl', diff: 2, label: 'Two men in gray, with Heck', physical: true,
          on: { crit: 'a3_crew_in', success: 'a3_crew_in', partial: 'a3_crew_rough', fail: 'a3_crew_rough', botch: 'a3_crew_rough' } },
        fx: g => { g.flag('crew10_slip', 'heck'); g.bond('heck', { trust: 1, respect: 1 }); g.hidden('revenant_drift', -0.5); } }
    ]
  },

  a3_crew_rough: {
    loc: 'ESPOSITO\'S PRODUCE · THE FLOOR',
    enter: g => { g.injure({ id: 'ribs_s2e10', name: 'Bruised ribs (Esposito\'s)', pen: 1, heal: 2, affects: ['body'] }); },
    text: `It\'s ugly. One of them gets a dart gun up and you take the butt of it in the ribs, hard, and something inside you makes a noise like a stepped-on Lego. Heck picks the second one up by his belt and puts him through a stack of empty pallets.

You end up on the concrete, holding your side, breathing through your teeth.

heck: Wawa?

sam: Fine. I\'m fine. Door.`,
    next: 'a3_crew_in'
  },

  a3_crew_in: {
    loc: 'ESPOSITO\'S PRODUCE · THE FRIDGE',
    enter: g => { if (g.f('crew10_slip') === 'told' || g.f('crew10_slip') === 'silent') { if (g.unsticks()) g.unstick('unstick_s2e10a', 'Time debt (the warehouse)'); } g.flag('crew_got10'); g.know('crew_four10', ['sam', 'bree', 'heck', 'nik'], 'In the Esposito fridge there were only four of the eleven, Sonny Pugliese among them. The other seven were loaded into the truck at one o\'clock. Brannigan moved the schedule up.'); },
    text: g => `${g.f('crew10_slip') === 'heck' ? 'The two men in gray are on the floor. Heck stands over them, steaming.' : `${g.f('crew10_slip') === 'told' ? 'TXT sam: counting\n\n' : ''}You step through. The cold opens, and it\'s the pool again, still and deep, not pulling.

Two men in gray, stopped mid-turn. You take the dart guns out of their hands and lay them side by side on a pallet like you\'re setting a table. You sit both men down on the concrete with their backs against the wall.

You step back out. Two seconds.

The men in gray blink at the ceiling. Heck looks at them, and then at you, and nods once, like a coach.`}

The fridge door is the size of a garage door. Heck puts his hands on it and holds them there for a long time, and the warehouse fills with steam, and the steel goes soft.

It opens.

Cold air rolls out across the floor.

There are cots in there. Eleven cots, in two rows, with gray blankets folded on the end of each one, hospital corners.

Four of them have people on them.

Sonny Pugliese, three hundred pounds, sitting up on a cot that bows under him, blinking at the light. A woman in a Fishtown Rowing Club sweatshirt. Two men you don\'t know.

Seven cots are empty. The blankets on them are still folded.

SONNY: *(hoarse)* They took the others at one. In the truck. The polite one came and said *change of schedule*.

Bree stops in the doorway.

bree: He moved it up. He moved it up an hour. Because he\'s *him*.

nik: *(in your ear)* Bro. Bro, the truck. It\'s not at the loading door. They pulled it around to Ninth Street at one-fifteen. It\'s sitting on Ninth below Washington, idling, waiting for the procession to clear. With seven people in the back.

nik: And Dante\'s van just pulled onto Washington from Eleventh.

It\'s 1:51.`,
    next: 'a3_corner'
  },

  /* ---------------- The deal: the loading door ---------------- */
  a3_deal: {
    loc: 'ESPOSITO\'S PRODUCE · THE LOADING DOOR',
    clock: { day: 'Sun', date: 'May 16', time: '1:55 PM' },
    enter: g => { g.flag('deal_kept10'); g.know('deal_walked10', ['sam'], 'At 1:55 on May 16, you walked into the Esposito loading door. Achterberg kept her word: eleven people walked out the back into the festival.'); },
    text: g => `1:55 p.m. You walk down Washington Avenue alone, against the crowd, with the whole neighborhood going the other way toward 9th Street, toward the music.

The loading door of Esposito\'s is rolled up four feet. You duck under it.

She\'s standing inside, in a gray cardigan, with her hands in her pockets. Behind her, a white box truck with its back doors open, backed up to the door.

ACHTERBERG: Mr. Kearney. You came.

sam: Them first.

ACHTERBERG: Of course.

She nods to someone you can\'t see. At the back of the warehouse, a fire door opens onto bright sunlight and the sound of a brass band. And eleven people walk out of the dark, one at a time, blinking. Sonny Pugliese, enormous, in a gray blanket. A small man in a white apron who has to be Thomas Nguyen. A woman in a rowing sweatshirt. Eight more. Into the alley, into the festival, gone.

ACHTERBERG: There. I keep my word. I told you.

She gestures at the back of the truck. There\'s a bench inside, and a seatbelt, and a man in gray sitting across from it with his hands folded.

ACHTERBERG: It\'s not a bed. It\'s a ride to Delaware. Get in.

You get in.

Your phone buzzes in your pocket. You don\'t look at it. You know who it is.

The doors close. The truck pulls out.

It turns right on Washington Avenue toward 9th Street, toward the music. Through the little window into the cab, over the driver\'s shoulder, you can see Saint Anthony coming down 9th on twelve men\'s shoulders, swaying, covered in dollar bills.

And on the other side of the intersection, a white van with *DANTE\'S CATERING* painted on the side, pulling out across Washington Avenue, sideways, blocking the street.

The truck brakes hard. The man in gray across from you says, very calmly, *Huh.*

It\'s 2:00.`,
    next: 'a3_corner'
  },

  /* ---------------- Cops / public: the corner ---------------- */
  a3_corner_wait: {
    loc: '9TH & WASHINGTON',
    clock: { day: 'Sun', date: 'May 16', time: '1:40 PM' },
    text: g => `1:40 p.m. Ninth and Washington.

The Italian Market festival, end to end. Ninth Street closed from Wharton to Fitzwater, and all of it is people: grandmothers, strollers, guys from the Pennsport clubs in their gold, kids with zeppole sugar on their faces, the cheese guy from DiBruno\'s yelling about provolone, sausage smoke rolling down the block under the awnings like weather. Somebody\'s playing Louis Prima out a second-story window. Ten thousand people, at least.

${g.f('plan10') === 'cops' ? 'And cops. Everywhere. More cops than you have ever seen on 9th Street, which is saying something. Two on every corner of Washington Avenue. A wagon on Tenth. Mikey on the yellow line in the middle of the intersection, in his uniform, in his sunglasses, with his thumbs in his belt, looking like every cop in every movie.\n\nmikey: Sammy. Stand next to me. Don\'t do nothing.' : 'Dana Fiorillo on the corner in a Phillies cap with a notebook, and next to her a heavyset guy with three cameras on straps around his neck. Rodriguez. He shot the Pope.\n\ndana: Is it you? Are you *you*?\n\nsam: Who?\n\ndana: Right. Right. Never mind. Two o\'clock?\n\nsam: Two o\'clock.\n\nMikey is on the yellow line in the middle of the intersection in his uniform. He sees you with a reporter and his face does something complicated.'}

${g.f('mikey10') && g.f('plan10') !== 'cops' ? 'Six extra cops along Washington Avenue. Mikey\'s bad feeling.' : ''}

1:52. The brass band comes around the corner from Montrose Street, and then the saints. First Our Lady, small and blue and gold. Then Saint Anthony, life-size, brown robe, a baby on his arm, on a platform on twelve men\'s shoulders, swaying, so covered in pinned dollar bills he looks like he\'s made of money.

Front left pole. A white-haired man in a black suit, sixty-eight years old, with a bad hip, carrying a saint. Bruno Iannucci. His face is gray and wet and absolutely set.

1:58. A white box truck noses up from the bottom of 9th Street, below Washington, and stops, idling, waiting for the procession to cross. No name on the side.

nik: *(in your ear)* That\'s it. That\'s the truck. Eleven heat signatures in the back. Bro. Eleven.

2:00.

A white van with *DANTE\'S CATERING* painted on the side pulls out of Washington Avenue sideways and stops across 9th Street, right in front of the truck.`,
    next: 'a3_corner'
  },

  /* ---------------- The corner (converge) ---------------- */
  a3_corner: {
    loc: '9TH & WASHINGTON',
    clock: { day: 'Sun', date: 'May 16', time: '2:00 PM' },
    enter: g => { g.meet('mikey'); },
    text: g => `${g.f('plan10') === 'crew' ? 'You come out of the alley onto Washington Avenue at a dead run, with Heck behind you, and turn the corner onto 9th at two o\'clock exactly.\n\n' : g.f('plan10') === 'deal' ? 'You can see it all through the little window in the cab. The van. The saint. The crowd. And then the back doors of the truck open from outside and the man in gray across from you is half out of his seat, and you\'re looking out the open back of a truck at 9th Street.\n\n' : ''}It all happens at once, and it\'s all happening on 9th Street.

The van\'s side door slides open. Dante Iannucci gets out, in a white shirt with the sleeves rolled, with a pistol held down by his leg. Five guys behind him. ${g.f('vinnie9') === 'went' ? 'Vinnie, behind the wheel of the van, with both hands on it, looking at nothing.' : 'Joey Russo behind the wheel of the van, chewing gum like his life depends on it.'}

The truck\'s doors open. Four men in gray get out, holding the things that look like staplers and aren\'t.

And from the sidewalk in front of the cheese shop, Cole Brannigan steps off the curb in a tan windbreaker with a festival lanyard on, like a dad who lost his kids.

BRANNIGAN: Mr. Iannucci. Don\'t.

The band has stopped. Saint Anthony has stopped in the middle of the intersection, swaying, on twelve men\'s shoulders, and the twelve men are looking at the guns. Bruno is looking at his grandson.

BRUNO: *Dante.*

Ten thousand people are starting to understand what they\'re looking at. A woman screams. A stroller tips. Somebody starts to run, and everybody else starts to want to.

Mikey is in the middle of the intersection, between the van and the truck, with his hand up, flat, the way they teach you.

mikey: POLICE. EVERYBODY PUT IT DOWN. *PUT IT DOWN.*

Dante\'s pistol comes up. Not at Mikey. At the truck. At Brannigan. At all of it.

Two blocks up 9th, at Christian Street, on two kitchen chairs on the curb, two old women are sitting very still.

And in the crowd across the street, between the sausage stand and the fish store, an old man in a gray coat too heavy for May. Gray at the temples. Scars. His left hand, the one missing a finger, coming up out of his pocket.

${g.hv('revenant_drift') < 10 ? 'You reach for the second. It\'s right there. A pool.' : 'You reach for the second. It\'s right there. It grabs.'}

And on the fire escape over the bakery on the corner, where you can see her, Jules.`,
    choices: [
      { text: 'Text Ma. *Counting.* Then go.', tag: 'Tell Ma, then Slip', slip: true, if: g => g.f('terms8') === 'count',
        fx: g => { g.flag('slip10', 'told'); g.bond('rosa', { trust: 1 }); g.hidden('revenant_drift', -1); g.know('rosa_count10', ['sam', 'rosa'], 'At 9th and Washington, before you Slipped, you texted Ma: "counting." She counted, at the festival, on 9th Street.'); }, go: 'a3_slip' },
      { text: 'Slip. Go. Now.', tag: 'Slip', slip: true,
        fx: g => { g.flag('slip10', 'silent'); if (g.f('terms8') === 'count') { g.flag('broke_count10'); g.bond('rosa', { trust: -1 }); g.hidden('revenant_drift', 1); } }, go: 'a3_slip' },
      { text: 'Look up at Jules. Just look at her. She said if you needed it, look.', tag: 'Jules\'s luck',
        check: { kind: 'move', move: 'Her Luck', attr: 'nerve', skill: 'persuade', label: 'Let it go her way, on 9th Street', luck: 'jules',
          on: { strong: 'a3_luck', weak: 'a3_luck', miss: 'a3_luck' } },
        fx: g => { g.flag('slip10', 'luck'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -1); } },
      { text: 'Don\'t Slip. Walk into the middle of 9th Street, next to your brother, with your hands up, and *talk*.', tag: 'Talk',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Talk down 9th Street', near: ['jules'], bonus: 1, bonusLabel: 'Next to Mikey',
          on: { strong: 'a3_talk', weak: 'a3_talk_weak', miss: 'a3_talk_miss' } },
        fx: g => { g.flag('slip10', 'talk'); g.hidden('revenant_drift', -1.5); } }
    ]
  },

  /* ---------------- The Slip ---------------- */
  a3_slip: {
    loc: '9TH STREET · BETWEEN',
    enter: g => { if (g.unsticks()) g.unstick('unstick_s2e10', 'Time debt (9th Street)'); g.flag('saw_revenant10'); g.know('eyes10', ['sam'], 'On 9th Street, in the Slip, four people\'s eyes moved: Jules on the fire escape, Nonna and Constance Pemberton on the curb at Christian Street, and the old man in the crowd with your face.'); },
    text: g => `${g.f('slip10') === 'told' ? 'TXT sam: counting\n\nYou hit send. You step through.' : 'You step through.'}

${g.unsticks() ? 'The cold takes you. It\'s a river. It grabs.' : 'The pool. Cool, still, deep. It lets you.'}

9th Street, stopped.

Ten thousand people, held. A dollar bill coming loose from Saint Anthony\'s robe, hanging in the air above the intersection. A little girl with powdered sugar on her chin, mid-scream, mid-laugh, you can\'t tell which. Sausage smoke stopped in a long gray ribbon under the awnings. A pigeon, wings up, a foot off the asphalt.

Dante\'s pistol, level. His finger in the guard. Four darts already out of four stapler-guns, hanging in a line across the street like beads on a wire. Mikey\'s hand up. Bruno\'s mouth open on his grandson\'s name.

And eyes.

Jules on the fire escape. Watching you. She lifts her hand an inch off the railing. You lift yours.

Two blocks up, on the curb at Christian Street, your grandmother\'s eyes. Moving. And beside her, in a camel hair coat, Constance Pemberton\'s. Following you down 9th Street, both of them, together, two old women who have done this before.

${g.f('slip10') === 'told' ? 'And somewhere in this crowd, your mother, in her church clothes, counting. You can almost hear it. *One.*' : ''}

And across the street, between the sausage stand and the fish store, the old man.

He isn\'t stopped either.

He has your face. Worn down. Gray at the temples, a scar from the left eye down to the jaw. He smells, from forty feet, like ozone and wet pennies. His left hand is up, raised toward the crowd, toward the truck, toward something, and you know without knowing how that whatever that hand is about to do, somebody dies of it.

He looks at you.

${g.hv('revenant_drift') < 6 ? `He looks at you. At you, and up at the fire escape, at Jules. At the two old women on the curb. At the phone in your hand.

Something in his face changes. You don\'t have a word for it. Like a man doing math and getting a number he didn\'t expect.

He lowers his hand.

He puts it back in his pocket. He turns around and walks away up 9th Street through the stopped crowd, between the stalls, an old man in a heavy coat, and at Carpenter Street he turns the corner and is gone.

You breathe out. It\'s the only sound on 9th Street.` : `Then he looks up at the fire escape, at Jules, for a long time.

He doesn\'t lower his hand. He doesn\'t use it either. He waits, the way you\'d wait to see what a kid does with a match.`}

You have time. More than you need.`,
    choices: [
      { text: 'The guns. Every one. Dante\'s, his five guys\', the four stapler-guns, the darts in the air. All of it, into the back of Dante\'s van.', tag: 'The guns',
        fx: g => { g.flag('slip10b', 'guns'); g.hidden('halcyon_heat', 1); g.hidden('revenant_drift', 0.5); }, go: 'a3_guns' },
      { text: 'The truck. Open the back doors. Let ten thousand people see what\'s inside. Then get Mikey out of the way, and let it play.', tag: 'Open the truck',
        fx: g => { g.flag('slip10b', 'truck'); g.hidden('revenant_drift', -1); }, go: 'a3_truck', if: g => g.f('plan10') !== 'deal' },
      { text: 'Get out of the truck. Leave the doors open. Move Mikey out of the line. Take nothing else, and let it play.', tag: 'Just get out',
        fx: g => { g.flag('slip10b', 'out'); g.hidden('revenant_drift', -1); }, go: 'a3_truck', if: g => g.f('plan10') === 'deal' }
    ]
  },

  a3_guns: {
    loc: '9TH STREET · BETWEEN',
    enter: g => { g.know('guns10', ['sam', 'jules'], 'On 9th Street, in the Slip, you took every gun out of every hand: Dante\'s men\'s and Brannigan\'s. You put all of them in the back of Dante\'s van.'); },
    text: g => `It takes a long time. It\'s supposed to.

Dante\'s pistol first. Finger by finger${g.f('slip9b') === 'guns' ? ', like at the ballpark' : ''}. Then his five guys: two pistols, a revolver older than you, a sawed-off under a windbreaker, and a can of Mace, which you also take, on principle.

The four stapler-guns. Then the darts, one by one, plucked out of the air like you\'re picking cherries, each one tiny and cold, with a little bead of something clear on the tip.

You carry it all across 9th Street in two armloads, through the stopped crowd, past Saint Anthony, and dump it in the back of Dante\'s van. Somebody\'s lunch is back there. A tray of Dante\'s grandmother\'s eggplant. You put the guns next to it.

${g.f('plan10') === 'deal' ? 'The last thing you do: you climb down out of the back of the truck that was going to Delaware, past the man in gray, stopped mid-*Huh*, and walk to the yellow line, and stand next to your brother.' : 'The last thing you do: you open the back doors of the truck.\n\n' + (g.f('plan10') === 'crew' ? 'Seven faces.' : 'Eleven faces.') + ' You count them twice. Gray blankets. A small man in a white apron. They\'re looking at the doors. Stopped.'}

You step back out.

${g.unsticks() ? '' : 'You come out of the pool easy, standing on the yellow line next to your brother. Nobody grabs.'}`,
    next: 'a3_after'
  },

  a3_truck: {
    loc: '9TH STREET · BETWEEN',
    enter: g => { g.flag('saint_shot10'); g.know('saint_shot10', ['sam', 'jules', 'mikey'], 'On 9th Street, Dante\'s one shot went into the statue of Saint Anthony. The saint took it. Nobody else was hit.'); },
    text: g => `You walk to the back of the truck. You open the doors, both of them, wide, and fold them flat against the sides.

${g.f('plan10') === 'deal' ? 'You climb down out of the back of the truck that was going to Delaware. You leave the doors open behind you, and the man in gray sitting inside, stopped mid-*Huh*.' : 'Gray blankets. A small man in a white apron. Faces. You count them twice.'}

You walk back to the middle of the street. You take Mikey by the shoulders, gently, the way you\'d move a sleeping kid, and you walk him three steps to the left, out of the line between Dante\'s pistol and the truck. He\'s heavier than he looks. He always was.

You stand where he was. You don\'t take anything else.

You step back out.

It all goes at once.

Dante\'s gun goes off. One shot. Into the space where Mikey was, past it, and up, into the chest of Saint Anthony, life-size, plaster and wood, covered in money, swaying on twelve men\'s shoulders. Splinters. Dollar bills, fluttering. The saint rocks and doesn\'t fall.

The four darts hit the side of Dante\'s van, *tik tik tik tik*.

${g.f('plan10') === 'deal' ? 'And ten thousand people look at the back of a white box truck with its doors standing wide open on 9th Street, and at the man in gray inside it, and at you, standing on the yellow line where your brother was.' : 'And ten thousand people look at the back of a white box truck with its doors standing wide open on 9th Street, and at the people inside it in gray blankets, blinking in the sun.'}`,
    next: 'a3_after'
  },

  /* ---------------- Jules's luck ---------------- */
  a3_luck: {
    loc: '9TH & WASHINGTON',
    enter: g => { g.flag('luck10'); g.know('luck10', ['sam', 'jules'], 'On 9th Street, you looked up at Jules, and her luck landed on the whole intersection at once: Dante\'s pistol jammed, the four darts missed, and the back doors of the truck swung open by themselves.'); },
    text: g => `You look up.

She\'s on the fire escape over the bakery, with both hands on the railing, and she\'s already looking at you. She doesn\'t nod. She doesn\'t do anything you can see.

She just closes her eyes.

You feel it land. Like she said. A key in a lock.

Dante pulls the trigger. *Click.* He looks at the gun. He pulls it again. *Click.*

The four stapler-guns fire. *Tik tik tik tik.* All four darts hit the side of Dante\'s van, in a perfect little row, like somebody measured.

A pigeon goes up in Brannigan\'s face. He steps back off the curb into the gutter, into a puddle of somebody\'s Italian ice, and his foot goes out from under him, and Cole Brannigan, head of Recovery, sits down hard on 9th Street.

${g.f('plan10') === 'deal' ? 'And the man in gray beside you in the truck reaches for your arm and misses, by an inch, by nothing, and you\'re out the open back doors and on the yellow line next to your brother before he finds his balance.' : 'And the back doors of the truck, which the men in gray didn\'t close all the way, swing open on their own in a little breeze off the river. Wide. Both of them.\n\nTen thousand people look at the back of a white box truck, and at the people inside it in gray blankets, blinking in the sun.'}

On the fire escape, Jules opens her eyes. She sits down on the iron steps all at once, like somebody cut a string, and puts her head on her knees.`,
    next: 'a3_after'
  },

  /* ---------------- Talk ---------------- */
  a3_talk: {
    loc: '9TH & WASHINGTON',
    enter: g => { g.flag('talk10', 'strong'); g.bond('mikey', { respect: 2 }); g.know('talk10', ['sam', 'mikey'], 'On 9th Street, you walked into the middle with your hands up and talked Dante Iannucci into lowering his gun, with his grandfather holding a saint ten feet away.'); },
    text: g => `You walk out into the middle of 9th Street with your hands up and stand next to your brother.

sam: Dante.

Dante\'s eyes flick to you. Then away. Then back.

DANTE: Kearney. Get outta the street.

sam: Your grandfather\'s holding a saint, Dante.

He doesn\'t look. He doesn\'t want to look.

sam: Look at him. He\'s sixty-eight years old with a bad hip and he\'s been holding Saint Anthony up for four blocks, and he hasn\'t put it down. Because he doesn\'t put it down. Not in front of the neighborhood. Not ever. You want to be him? That\'s him. That\'s the whole job. You hold it up in front of everybody, and you don\'t put it down.

The street is very quiet.

sam: You shoot on 9th Street, during the procession, in front of his saint, and you\'re never him. You\'re just a guy who shot at a saint.

Dante looks at his grandfather. Bruno looks back.

BRUNO: *Dante. Basta.*

Dante lowers the gun.

Mikey\'s on him in a second, and the gun is on the asphalt, and Dante\'s face is on the hood of his own van, and he doesn\'t fight. Across the street, Brannigan looks at you, and at the crowd${g.f('plan10') === 'public' ? ', and at a man with three cameras around his neck' : ''}, and makes a small motion with two fingers. His men in gray put their stapler-guns away and step back into the crowd, and are gone.

Nobody closes the truck.`,
    next: 'a3_after'
  },

  a3_talk_weak: {
    loc: '9TH & WASHINGTON',
    enter: g => { g.flag('talk10', 'weak'); g.flag('saint_shot10'); g.know('saint_shot10', ['sam', 'jules', 'mikey'], 'On 9th Street, Dante\'s one shot went into the statue of Saint Anthony. The saint took it. Nobody else was hit.'); },
    text: `You walk out into the middle of 9th Street with your hands up and stand next to your brother.

sam: Dante. Your grandfather\'s holding a saint.

He looks. He almost lowers it. He *almost*.

Then one of the men in gray moves, and Dante jerks, and the gun goes off.

One shot. Up and wide, into the chest of Saint Anthony, life-size, plaster and wood, covered in money. Splinters. Dollar bills, fluttering. The saint rocks on twelve men\'s shoulders, and Bruno Iannucci, front left pole, sixty-eight, with a bad hip, *holds it up*.

Then Mikey has Dante on the hood of the van, and the darts hit the asphalt, and Brannigan\'s men are stepping back into the crowd, and somebody, an old woman, is screaming at Dante in Italian so filthy that four old men cross themselves.

Nobody closes the truck.`,
    next: 'a3_after'
  },

  a3_talk_miss: {
    loc: '9TH & WASHINGTON',
    enter: g => { g.flag('talk10', 'miss'); g.injure({ id: 'dart_s2e10', name: 'Halcyon sedative (9th Street)', pen: 1, heal: 1, affects: ['reflex', 'wits'] }); g.hidden('halcyon_heat', 1); },
    text: g => `You walk out into the middle of 9th Street with your hands up.

sam: Dante—

Something stings your neck.

You put your hand up and there\'s a dart there, tiny, cold. You look across the street and one of the men in gray is lowering a stapler-gun and looking at you with professional regret.

The street tilts. 9th Street goes long and soft at the edges. You sit down on the yellow line, because it seems like a good idea.

From very far away: Mikey\'s voice, *POLICE*, and a gunshot, and screaming, and then a voice you know, on the fire escape, not screaming, just saying your name once, *Sam*, very clearly, and then the back doors of the truck banging open, and a lot of people saying *oh my God* at the same time.

${g.f('slip10') === 'talk' && g.f('terms8') === 'count' ? 'You didn\'t text Ma. You didn\'t Slip. It doesn\'t count. She\'s going to count anyway.' : ''}

You lie back on 9th Street and look up at the awnings and the sky, and a dollar bill comes down out of the air and lands on your face.`,
    next: 'a3_after'
  },

  /* ---------------- After ---------------- */
  a3_after: {
    loc: '9TH & WASHINGTON',
    clock: { day: 'Sun', date: 'May 16', time: '2:04 PM' },
    enter: g => { g.flag('freed10'); { let n = 0; if (g.f('crew10_slip') === 'told') n += 2; if (g.f('slip10') === 'told') n += (g.f('slip10b') === 'guns' ? 31 : 7); if (n) g.flag('count10', n); } g.know('freed10', ['sam', 'jules', 'mikey', 'nik'], 'On May 16, at 9th and Washington, in front of ten thousand people at the Italian Market festival, Bruno\'s people came out into the street. Halcyon couldn\'t take them back in public. They all went home.'); if (g.f('plan10') === 'public') g.know('photo10', ['sam', 'nik', 'dana'], 'Rodriguez of the Inquirer got the open truck, the gray blankets, and the man in the tan windbreaker walking away.'); },
    text: g => `${g.f('slip10b') === 'guns' ? 'Time comes back all at once.\n\nDante pulls a trigger on nothing. He looks at his hand. His five guys look at theirs. Four men in gray look at theirs. Somebody\'s Mace is gone. Nobody can figure out where anything went, and Mikey, who can, is the first to move. He has Dante against the hood of the van before Dante finishes looking at his empty hand.\n\n' : ''}${g.f('plan10') === 'deal' ? 'And down Washington Avenue, coming out of the alley from Tenth Street into the crowd, eleven people in gray blankets, walking toward the music.' : 'And the people in the truck start getting out.'}

Slowly. In gray blankets. Blinking. ${g.f('plan10') === 'crew' ? '' : 'Sonny Pugliese, enormous. '}A woman with dirt under her nails who did something with plants. A boy, maybe nineteen, holding his own elbows. A small man in a white apron, ${g.f('plan10') === 'deal' ? 'stepping off the curb' : 'stepping down carefully'} onto 9th Street, onto the yellow line, into the sun.

Thomas Nguyen looks around at the crowd. At the saint. At the cops.

Nobody moves for a second.

Then somebody on the sidewalk starts clapping. One person. Then a lot of people. Nobody really knows what they\'re clapping for. They clap anyway. It\'s South Philly. Something happened in the street during the procession and nobody died, and that\'s enough.

Bruno Iannucci doesn\'t let go of the pole. He stands there holding up Saint Anthony with tears running down into his collar, watching his people come home.

Brannigan is walking away. Not fast. Back up the sidewalk past the cheese shop, in his tan windbreaker with his festival lanyard, hands in his pockets. ${g.f('plan10') === 'public' ? 'Rodriguez gets him. Six frames. The back of a tan windbreaker walking away from an open truck.' : ''} At the corner of Carpenter, he stops and looks back at you, over all those heads. He nods. Polite.

Then he\'s gone.

${g.f('vinnie9') === 'went' ? 'The van is empty. The driver\'s door is open. Vinnie is gone. On the driver\'s seat, a black cashmere coat, folded.' : 'The van is empty. Joey Russo is gone, running up Washington, leaving a trail of gum.'}

${g.f('plan10') === 'crew' ? 'Heck comes around the corner from Washington with Sonny Pugliese on one arm and the woman in the rowing sweatshirt on the other, and Bree behind him, and when Bree sees the truck open, she puts her hand over her mouth and says, in Teddy\'s voice, *Look at that.*' : g.f('plan10') === 'deal' ? 'Nobody comes for you. Nobody even looks. Somewhere across the intersection, a small woman in a gray cardigan is getting into a black car. She doesn\'t look back. You\'re not sure if that\'s a promise or the opposite of one.' : ''}

${g.f('count10') ? 'TXT rosa: ok. ok. i see you. youre on the yellow line. i see you.\nTXT rosa: count was ' + g.f('count10') + '. i wrote it down' : ''}`,
    next: 'a3_curb'
  },

  a3_curb: {
    loc: '9TH & CHRISTIAN · THE CURB',
    clock: { day: 'Sun', date: 'May 16', time: '2:30 PM' },
    enter: g => { g.know('curb10', ['sam', 'nonna', 'constance'], 'Nonna and Constance Pemberton sat on kitchen chairs on the curb at 9th and Christian and watched the whole thing.' + (g.f('saw_revenant10') ? ' Both their eyes moved.' : '')); },
    text: g => `Two blocks up 9th Street, at Christian, two kitchen chairs on the curb. Teresa DiNardo, in black, with a paper bag of zeppole in her lap. Constance Pemberton, in a camel hair coat in May, with a cannoli she hasn\'t touched.

The procession has started again behind you. Saint Anthony goes by${g.f('saint_shot10') ? ' with a hole in his chest' : ''}, still covered in money, and the brass band plays the same song it has played since 1926, and Bruno is still carrying.

You stand in front of the two chairs. Your hands are shaking. Nonna hands you a zeppole without looking at you.

nonna: Eat.

You eat.

constance: Mr. Kearney.

sam: Mrs. Pemberton.

constance: I saw.

She says it simply. Like a weather report.

constance: The first time, I was twenty-one, in the back of my father\'s car on East River Drive, in January of 1964. The whole world stopped, and an old woman in a black coat walked out onto the ice at Boathouse Row and pulled a little boy out of the river.

She nods down 9th Street, at Saint Anthony, at the front left pole.

constance: That little boy. ${g.f('saw_revenant10') ? 'I\'ve waited sixty-three years to see it again. My whole life, I thought I\'d imagined it.' : 'Today he held his saint up through all of it. Sixty-three years, I thought I\'d imagined the river.'}

She looks at Teresa.

constance: She said I hadn\'t.

nonna: She hadn\'t.

${g.f('slip10') === 'luck' || g.f('slip10') === 'talk' ? 'nonna: Today you didn\'t even go in. Today you just stood there. I watched you. I thought my heart would stop.\n\nconstance: Mine did. Briefly.' : 'nonna: Today you went in, and you came out, and you didn\'t come out old. I watched your face. I watched your hair. *Niente.* Same boy.'}

Nonna takes your hand. Her fingers are cold, and then they aren\'t.

nonna: The old man in the gray coat.

You go still.

nonna: I saw him too, Salvatò. Across the street. With your face.

nonna: ${g.hv('revenant_drift') < 6 ? 'He put his hand down. I saw him put it down. I saw his face when he did it. I\'m not going to tell you what it looked like. Not today.' : 'He didn\'t put his hand down. He just watched you. I\'m going to light a candle for that. Several.'}

She lets go of your hand and gives you another zeppole.

nonna: Go find your girl. She\'s on the fire escape over the bakery at Washington. She\'s been sitting there since two o\'clock and she won\'t come down until you come get her.`,
    next: 'a4_fire_escape'
  }
});
