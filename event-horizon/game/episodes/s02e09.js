/* S2 · E9 · DOLLAR NIGHT, part 1 of 4: meta, cold open, Act One ("April"). */
EH.episode({
  id: 's02e09', season: 2, number: 9, title: 'Dollar Night', look: 's2',
  cast: ['sam', 'jules', 'vinnie', 'rosa', 'mikey', 'nik', 'bree', 'grace', 'heck'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Ma knows. "Are you the Blur?"',
    g.f('terms8') === 'count' ? 'You promised Ma: every time, you tell her. She counts.' : g.f('terms8') === 'only' ? 'You promised Ma you\'d stop. Unless somebody\'s going to die.' : 'You promised Ma no more lying.',
    'Ma walked into the Circolo and spent the DiNardo debt. Pop\'s paper is clean. "After today, we\'re even."',
    g.f('building6') === 'true' ? 'You gave Bruno the map of Building 7. Halcyon answered with Sal Russo\'s white hair.' : 'Bruno Iannucci and Halcyon are circling each other.',
    'Vinnie is Dante Iannucci\'s right hand.'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'PHỞ THANH · WASHINGTON AVENUE',
      clock: { day: 'Fri', date: 'Apr 2', time: '11:40 PM' },
      text: `> THE CAMERA.

Phở Thanh after closing. Chairs up on the tables. The koi in the tank by the register, orange and white, turning slowly in the blue light of the filter.

Thomas Nguyen is mopping. He mops every night. He has mopped this floor every night since 1994.

He stops.

He tilts his head. Listening. To the roof. To the alley. To the street. To the sound of four people breathing very carefully on the other side of a brick wall, and a fifth sitting in a gray car across Washington Avenue, drinking tea.

He leans the mop against the counter.

NGUYEN: Mai.

His daughter is at the back table with her laptop and her earbuds, doing organic chemistry at midnight because the restaurant is quieter than the apartment upstairs. She doesn\'t hear him. He crosses the room and takes one earbud out of her ear, gently.

NGUYEN: The back. The alley. Go to your aunt\'s on Snyder. Don\'t take your phone.

MAI: Ba, what—

NGUYEN: *Now*, con.

She goes. She knows that voice. She\'s out the kitchen door in five seconds, into the alley, gone.

He listens to her go. Down the alley. Across 7th. Running. Good girl. Running.

Then he goes back to the front, and takes the chairs down off one table, and sets out two, and sits in one, and waits.

The front door opens. It was locked. It opens anyway.

Three people in gray. A fourth behind them, a woman with a tablet. Nobody draws anything. Nobody needs to.

NGUYEN: You want tea? I have tea.

The woman with the tablet looks at it. She looks at him.

WOMAN: Mr. Nguyen. You\'ve been listening to us for a week.

NGUYEN: Two weeks. You\'re very loud. Mr. Iannucci\'s people are louder, but you are louder in a different way. Like a refrigerator. Always on.

He stands up. He takes his apron off and folds it, and puts it on the counter by the register.

He looks at the koi.

NGUYEN: Somebody feed them. Tomorrow. Twice a day. Not too much.

They take him out the front door, gently, like an old man going to a doctor\'s appointment.

The koi turn in the blue light.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_april' },

    /* ================= ACT ONE: APRIL ================= */
    a1_april: {
      card: { kind: 'act', label: 'Act One', title: 'April' },
      loc: 'CARDONE HALL · 9-14',
      clock: { day: 'Mon', date: 'Apr 5', time: '7:30 AM' },
      enter: g => { g.sleep(8); },
      text: g => `April comes in warm. Somebody on the ninth floor props the stairwell door open with a cinderblock, and somebody else takes it away, and somebody else props it open again, and this goes on for a week like a slow game of chess.

You wake up at 7:30 to a text.

${g.f('terms8') === 'count' ? 'TXT rosa: count?\nTXT sam: zero\nTXT rosa: good. eat breakfast\n\nEvery morning. Since March. Every morning she asks and every morning you answer, and it\'s been zero for three weeks, and every time you type it you feel something in your chest let go a little, like a knot being worked loose by somebody patient.' : 'TXT rosa: eat breakfast\nTXT rosa: I know you\'re not eating breakfast\n\nEvery morning. Since March.'}

${g.hv('revenant_drift') < 10 ? 'Something has changed. You noticed it a week ago, waiting for the light at Broad and Cecil B. Moore, when a car ran the red and a kid on a bike was in the crosswalk, and you felt the second open, the door right there, and you *didn\'t go*. You let the kid see the car. You let him stop. He stopped. Nobody needed you.\n\nAnd the cold, when you reached for it, just to check, just to touch it the way you\'d touch a sore tooth, felt different. Not a river. A pool. Something you could get into, and get out of.' : 'The cold is still there when you reach for it. A river. It still grabs.'}

Jules is asleep in your bed with the lamp off. She sleeps with the lamp off now. Most nights.

Across the room Nik is already up, which is unprecedented, in front of his four monitors, eating dry Froot Loops out of the box, frowning.

nik: Bro. Something\'s wrong with the map.`,
      hub: {
        slots: 2, label: 'The first week of April',
        blurb: 'Something is happening to Bruno\'s people.',
        options: [
          { id: 'ap9_nik', text: 'Nik\'s map. Something\'s wrong with it.', cost: 1, tag: 'Nik', go: 'a1_nik' },
          { id: 'ap9_grace', text: 'Grace has been asking to look at your hair for a month. Let her.', cost: 1, tag: 'Grace', go: 'a1_grace' },
          { id: 'ap9_bree', text: 'Bree. Halina\'s surgery is on the calendar. Bree hasn\'t answered a text in four days.', cost: 1, tag: 'Bree', go: 'a1_bree' },
          { id: 'ap9_mikey', text: 'Mikey. He left a voicemail that just says *call me* in his cop voice.', cost: 1, tag: 'Mikey', go: 'a1_mikey' }
        ],
        done: 'a2_vinnie'
      }
    },

    a1_nik: {
      loc: 'CARDONE HALL · 9-14',
      enter: g => { g.know('nik_dots', ['sam', 'nik'], 'Nik\'s map: since April 2, the cold dots in South Philly and the Northeast are going dark, one a night. Washington Avenue first. Every one of them near an Iannucci business.'); g.bond('nik', { trust: 1 }); },
      text: `nik: Okay. So. You know the map. Every time somebody posts *cold* with a location, it pings. And over the winter I started tagging the dots that ping every *day*. Same place, same time. People. Changed people, bro, living their lives, making their coffee, whatever, being cold at it.

He turns the monitor toward you.

South Philly. Passyunk. The Northeast. Little steady blue dots, maybe fifteen of them, scattered across the city like pilot lights.

nik: Watch.

He scrubs the timeline back to April first. Then forward.

April second, 11:51 at night. The dot on Washington Avenue goes dark.

April third. A dot on Bustleton Avenue. Dark.

April fourth. Two. One by the Italian Market, one in Fishtown.

nik: One a night. Sometimes two. They don\'t move first. They don\'t go to work, they don\'t go home. They just *stop*. Like somebody switched them off.

He looks at you.

nik: The first one was Washington Avenue, bro. The pho place. Where you—

sam: Where I talked a man into working for Bruno.

nik: Yeah.

He scrolls the map. Each dark dot has a little gray ring around it now, where Nik marked it.

nik: I cross-referenced. Every dot that went dark is within two blocks of something with *Iannucci* on the paperwork. A bakery. A car wash. That bathhouse on Bustleton.

sam: Bruno\'s people.

nik: Halcyon\'s taking Bruno\'s people, Salvatore. One a night. Like they\'re *collecting*.`,
      next: '@hub'
    },

    a1_grace: {
      loc: 'CARDONE HALL · RA OFFICE',
      enter: g => { g.know('grace_hair9', ['sam', 'grace'], g.hv('revenant_drift') < 10 ? 'Grace counted your white hairs in April: the same as March. "You stopped."' : 'Grace counted your white hairs in April: more than March.'); g.bond('grace', { trust: 1, affection: 1 }); },
      text: g => `Grace has a desk lamp with a magnifier on it, the kind jewelers use, that she says she bought for *splinters* and nobody believes.

She sits you down under it. She goes through your hair at the temple with a fine-tooth comb and a clicker, the kind they use at the door of a club, counting.

grace: Okay.

Click. Click.

grace: Okay.

${g.hv('revenant_drift') < 10 ? 'She sits back. She turns the clicker around and shows you.\n\ngrace: Same as March.\n\nsam: What?\n\ngrace: Same number. I\'ve counted you on the first of every month since December, Kearney. You don\'t know that, because you were asleep in the lounge the first time and I\'m very quiet. Every month, more. Every month. And today it\'s the same as March.\n\nShe puts the clicker down.\n\ngrace: You stopped.\n\nYou don\'t know what to say.\n\ngrace: Whatever you\'re doing differently. Keep doing it. That\'s medical advice. That\'s the only medical advice I\'ve ever given you that you might actually take.' : 'She sits back. She turns the clicker around and shows you the number. It\'s higher than March.\n\ngrace: I\'ve been counting you every month since December, Kearney. Every month, more.\n\nShe puts the clicker down.\n\ngrace: Whatever you\'re doing, stop doing it.'}`,
      next: '@hub'
    },

    a1_bree: {
      loc: 'EDGEMONT STREET · PORT RICHMOND',
      enter: g => { g.know('bree_payroll', ['sam', 'bree'], 'Bree works for Bruno now. Since March. Halina\'s transplant is scheduled for April 20 at Jefferson. "That\'s the deal nobody said out loud."'); g.bond('bree', { trust: 1 }); },
      text: g => `The plaster Virgin Mary has a new scarf. Spring colors. Yellow.

Bree doesn\'t come to the door. Heck does, filling it, in an apron. He looks at you, and then up and down the street, both ways, the way you look before you cross.

heck: Inside, papa. Quick.

Bree is at the kitchen table with Teddy\'s phone in front of her. It\'s still charged.

bree: The twentieth. Her surgery. Jefferson. April twentieth. Feingold called himself. There\'s a kidney.

She says it like a weather report.

bree: And I work for Bruno. Since March. Since the evaluation. I do phone calls. I call people in their wives\' voices and their bosses\' voices, and I tell them things, and they believe me. That\'s my job now. That\'s the deal nobody said out loud.

She turns Teddy\'s phone over.

bree: And now people who work for Bruno are disappearing. The pho man. A lady in Fishtown who did something with plants. A guy on Bustleton. One a night, Wawa. You can hear it on the street.

Heck, at the stove, doesn\'t turn around.

heck: I stay here now. On the couch. Every night. Nobody comes in this house.

bree: Heck thinks he can stop them by being big.

heck: I *am* big.

Bree almost laughs.

bree: If they come for me before the twentieth, she doesn\'t get the kidney. That\'s all I can think about. That\'s all I can think about all day.

She looks at you.

bree: Teddy would have known what to do.`,
      next: '@hub'
    },

    a1_mikey: {
      loc: 'MIFFLIN STREET · THE STOOP',
      enter: g => { g.know('mikey_missing9', ['sam', 'mikey'], 'Mikey: four missing-persons reports in South Philly and the Northeast since April 2. All four connected to Iannucci businesses. The 3rd District was told to "let the federal partners handle it."'); g.bond('mikey', { trust: 1 }); },
      text: `Mikey meets you on the stoop on Mifflin Street with two Yuenglings, which he opens with his badge, which he has been doing since the academy and Ma hates.

mikey: Four missing-persons reports since the second. All four connected to the Iannuccis. A guy who owns a pho place. A woman who works at a florist on Frankford that Bruno\'s cousin owns. Two guys from the Northeast.

He drinks.

mikey: My lieutenant pulled me in this morning. Not about me. About all of them. He said the 3rd District is to let *the federal partners* handle it. I asked him which federal partners. He said, *Michael, don\'t.*

sam: Halcyon.

mikey: There\'s no such thing as a federal partner named Halcyon, Sammy. There\'s a private company with a lot of money and a man with a scar on his eyebrow who drinks tea in my district like he pays taxes in it.

He looks down Mifflin Street at the streetlight, which is off, because it\'s daytime.

mikey: It\'s a war. Bruno hit their building, and now they\'re taking his people back, one at a time. And when they run out of his people, they\'re gonna start on his *businesses*, and his businesses are this whole neighborhood. And Ma spent the only thing that kept this house out of it.

He finishes his beer.

mikey: I\'m not telling you to do anything. I\'m telling you I\'m off the case, and the case is coming to Mifflin Street.`,
      next: '@hub'
    }
  }
});
