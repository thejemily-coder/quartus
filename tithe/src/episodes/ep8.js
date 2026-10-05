/* TITHE — Season One, Episode 8: "The Tithe" (Season One finale) */

/* ---- E8 additions to static data ---- */
TITHE.ENEMIES.e8_ember = { name: 'Saint\'s Ember', hp: 48, def: 12, arm: 1, dmg: [5, 9], acc: 4, xp: 120, silver: [0, 0], tags: ['choir', 'boss'], resist: ['starfire', 'fire'],
  moves: [{ n: 'A Small Song', w: 3, m: 1, fx: 'fear', tele: 'the light hums a nursery tune in a child\'s voice' }, { n: 'Reach', w: 1, m: 1.7, heavy: true, fx: 'drain', starfire: true, tele: 'stretches toward you like a hand toward a candle' }, { n: 'Gutter', w: 1, m: 0, self: 'guard', tele: 'dims, and draws itself in' }],
  loot: [['lamp_oil', 1, 2]],
  lore: 'What was left in the deep crypt after the Saint went out: a coal of the Choir no bigger than a lantern-flame, still hungry, still singing to itself in the voices it ate.' };
TITHE.ITEMS.e8_new_roll = { name: 'The Dead Men\'s Roll', type: 'quest', desc: 'A fresh sheet of Brother Pell\'s good paper, pasted to the end of the old roll. New names, in your own square hand. Not the dead, this time. The ones who came.' };
TITHE.CODEX.e8_star = { title: 'The Missing Star', text: 'Over Harrowgate, a little east of the Lanternhold\'s tower, there is a gap in the sky where a star used to be. The old women say it was always there. The children of the Lanternhold say it went out the night the Dead Men came, and that they heard it go: like a hymn stopping in the middle of a word.' };
TITHE.CODEX.e8_deadmen = { title: 'The Dead Men', text: 'The sworn company of Harrowgate, chartered by Lady Isolde Varane in her own name. Captain: Ansel Dray. Its roll of the living begins on a fresh sheet pasted to the end of an older one: the Red Company\'s, four hundred and six lines long, a captain\'s name at the head of it and four hundred and five dead below, and after them the few added since. The town calls them the Dead Men. So do they.' };

TITHE.episode({
  n: 8, title: 'The Tithe',
  logline: 'Dug out of the bog by the woman who put him in it, Ansel Dray has one night to retake a murdered lord\'s keep, stop a rite that will empty fourteen children, and settle the oldest debt he owns.',
  start: 'cold1',
  credits: ['ansel', 'tamsin', 'brannagh', 'isolde', 'oriel', 'hask', 'abbess', 'gall', 'pell', 'ulla', 'hob', 'mags', 'moll', 'cassius', 'tallyman'],
  previously: [
    { t: 'Konrad Hask poured Lord Varane a drink, opened his throat with a letter knife, and called for the guard, weeping.' },
    { t: 'Harrowgate was told the dead sergeant did it.' },
    { if: "f.e7_hob==='dead'", t: 'Hob Fenner died in the coup, being brave in the stupid way.' },
    { if: "f.e7_hob==='alive'", t: 'Hob Fenner ran through a hunted town to warn Lady Isolde. He lived.' },
    { if: "f.e7_hob==='none'", t: 'A stable boy Ansel had sent home went at the Marshal\'s men with a pitchfork, shouting that the dead sergeant didn\'t do it.' },
    { if: "f.e7_told_crypt", t: '"Go down past the ossuary door, Warden. Then you\'ll know what to pray for."' },
    { t: 'Lampwarden Brannagh laid a burning blade over his heart. Nothing happened. Something in her broke.' },
    { t: '"They can\'t see him," said the oracle, in her own voice.' },
    { t: 'Tamsin broke him out. Tamsin took him home to the fen. Tamsin had been Mother Gall\'s all along.' },
    { if: "f.e7_last_words==='curse'", t: '"I hope they choke on me," he told her. Then the mud closed over his face.' },
    { if: "f.e7_last_words==='forgive'", t: '"It\'s all right, Tam," he told her. Then the mud closed over his face.' },
    { if: "f.e7_last_words==='silence' || !f.e7_last_words", t: 'He said nothing to her at all. Then the mud closed over his face.' },
    { t: 'Something underneath it said: *Door.*' }
  ],
  nextTime: [
    'Corvane. A city of a hundred bells, and every one of them rung for a wedding.',
    '"The Hierarch has read your name, Captain. He would very much like to read it aloud."',
    'In the archive under the palace, a grey man turns a page, and waits.'
  ],
  recap: [
    { if: "f.e1_spared_wat", t: 'You let a starving boy called Wat walk away from Gorse Ford. He remembered.' },
    { if: "f.e1_killed_wat", t: 'You killed a starving boy at Gorse Ford, quickly, because you knew how.' },
    { if: "f.e1_ashby==='led'", t: 'You led thirty-one of the Emptied of Ashby down the Kingsroad by the hand.' },
    { if: "f.e1_ashby==='mercy'", t: 'You gave the Emptied of Ashby mercy in the rain, one by one.' },
    { if: "f.e1_ashby==='left'", t: 'You left the Emptied of Ashby standing in the rain.' },
    { if: "f.e1_hask_meeting==='swallowed'", t: 'At the East Gate you took your hand off your sword and let Konrad Hask clap you on the shoulder.' },
    { if: "f.e1_hask_meeting==='spat'", t: 'At the East Gate you spat on Konrad Hask\'s boot and told him the number.' },
    { if: "f.e1_hask_meeting==='drew'", t: 'At the East Gate you drew on Konrad Hask, and he called you his sergeant.' },
    { if: "f.e3_edda==='saved'", t: 'You took Edda Moss off a Lamp pyre alive.' },
    { if: "f.e3_edda==='burned'", t: 'Edda Moss burned on a Lamp pyre in the market, and you watched.' },
    { if: "f.e3_edda==='mercy'", t: 'Edda Moss died on a Lamp pyre with Tamsin\'s arrow in her heart, before the fire could reach her.' },
    { if: "f.e3_rusk==='allied' || f.e3_rusk==='bedded'", t: 'You made a friend of the bandit queen of the Thornwood, and she came when it counted.' },
    { if: "f.e4_miners==='saved'", t: 'You led the Hollowed miners up out of the Saltdown dark.' },
    { if: "f.e4_miners==='left'", t: 'You left the Hollowed miners working in the Saltdown dark.' },
    { if: "f.e5_isolde_kiss==='kissed'", t: 'You kissed Lady Isolde in her father\'s archive, once, and stopped.' },
    { if: "f.e5_isolde_kiss==='almost'", t: 'You almost kissed Lady Isolde in her father\'s archive.' },
    { if: "f.e6_companion==='pell'", t: 'In the dark of the barrow it was Pell who read the kings\' walls to you, and stopped reading before the end.' },
    { if: "f.e6_companion==='ulla'", t: 'In the dark of the barrow it was Ulla at your back, singing her sister\'s song to keep the walls up.' },
    { if: "f.e6_companion==='hob'", t: 'In the dark of the barrow it was Hob who held the torch, and did not drop it once.' },
    { if: "f.e6_ring", t: 'You took a dead king\'s ring off his finger in the Barrow of the Nine Crowns. Somewhere under the downs, a lock is a little looser.' },
    { if: "f.e7_hob==='alive'", t: 'Hob Fenner lived through the coup because you taught him how.' },
    { if: "f.e7_hob==='dead'", t: 'Hob Fenner died at the postern, asking to be put on the roll. You put him on the roll. His pitchfork stands in the corner of the Hen\'s cellar, and nobody moves it.' },
    { if: "f.e7_hob==='none'", t: 'You sent a stable boy called Hob Fenner home. He died at the Keep anyway, shouting your name. You learned it too late.' },
    { if: "f.e8_gall==='killed'", t: 'You killed Mother Gall in the shallows at the foot of her own ladder, and Tamsin buried her in the bog.' },
    { if: "f.e8_gall==='spared'", t: 'You spared Mother Gall. She is still out there in the fen, waiting for Tamsin to come home.' },
    { if: "f.e8_gall==='drowned'", t: 'You left Mother Gall to the sleepers she woke. She went down singing.' },
    { if: "f.e8_pell==='alive'", t: 'Brother Pell opened the crypt door, and walked back out of it.' },
    { if: "f.e8_pell==='dead'", t: 'Brother Pell opened the crypt door and held it with his body until you came through.' },
    { if: "f.e8_hask==='killed'", t: 'You killed Konrad Hask on the crypt stair. His name still heads the roll. You didn\'t strike it out.' },
    { if: "f.e8_hask==='hollowed'", t: 'You sent Konrad Hask to dig salt beside the Hollowed he sold, for as long as he lasts.' },
    { if: "f.e8_hask==='justice'", t: 'You gave Konrad Hask to Lady Isolde\'s justice, alive.' },
    { if: "f.e8_abbess==='dead'", t: 'The Abbess was taken by her own Saint. Her books balanced, at the last.' },
    { if: "f.e8_abbess==='arrested'", t: 'Brannagh Vey arrested the Abbess of the Lanternhold in front of the children she had meant to empty.' },
    { if: "f.e8_tam==='sent'", t: 'You told Tamsin Vell to go home. She walked a hundred yards behind you all the way to Harrowgate, and stayed.' },
    { if: "f.e8_tam && f.e8_tam!=='sent' && f.e8_roll_tam==='mark'", t: 'Tamsin Vell dug you out of the bog with her hands, and made her own mark on the roll.' },
    { if: "f.e8_tam && f.e8_tam!=='sent' && f.e8_roll_tam!=='mark'", t: 'Tamsin Vell dug you out of the bog with her hands. On the wall at dawn she sang you the heron, and you didn\'t look away from the sky.' },
    { t: 'Fourteen children woke up. Over Harrowgate, a star went out.' }
  ],
  nodes: {

    /* ======================= COLD OPEN ======================= */
    cold1: {
      loc: 'Under Gallowmere — no time at all',
      fx: { party: { remove: ['tamsin', 'pell', 'ulla', 'hob', 'brannagh', 'oriel', 'mags', 'rusk'] } },
      text: [
        `It is dark, and it is warm, and you are not breathing, and none of that is frightening.`,
        `You are lying in something that holds you the way water holds a drowned man: all over, evenly, without opinion. Peat in your mouth. Peat in your ears. A root through the fingers of your right hand like a lover's.`,
        `Something is dreaming, and you are inside the dream.`,
        `There is no sky in it. That is the first thing. There has never been a sky. There is a roof of good black earth, and the world is a long low room under it, lit by nothing, warm as the inside of a loaf. People live up near the roof. When they are old they lie down, and the earth opens a little to take them, the way a bed gives, and they go *down*.`,
        `You watch them go down. Thousands. Grandmothers. Babies who never breathed. A man still holding his spade. They sink like rain into a field, slow and steady, and the warm thing at the bottom of everything receives them, and is glad, and is a little larger.`
      ],
      choices: [
        { t: 'Go down with them. It\'s so warm.', go: 'cold1a', fx: { set: { e8_dream: 'deeper' } } },
        { t: 'Hold on to your name. *Ansel Dray. Sergeant. Lowmarch.*', go: 'cold1b', fx: { set: { e8_dream: 'name' } } }
      ]
    },
    cold1a: {
      text: [
        `You let go. You sink. The warmth comes up around you like a bath your mother drew when you were small, before the tannery, before anything.`,
        `Far below, something vast turns its attention toward you, the way a sleeper turns toward a draught. It is not kind. It is not cruel. It is enormously, patiently *hungry*, the way a field is hungry for rain.`,
        { if: "f.e6_hollin==='talked'", t: `Somewhere above you, far off, a dead king is weeping in a barrow. *I told you,* says Hollin. *I told you what you are.*` },
        { if: "f.e6_ring", t: `The bronze ring on your finger is hot as a coal. Down here, it is not a ring. It is a key that has been turned a quarter of the way.` },
        `It does not take you. It *looks* at you. Then it makes room.`
      ],
      next: 'cold2'
    },
    cold1b: {
      text: [
        `*Ansel Dray. Sergeant. Lowmarch.* You say it into the peat with no breath to say it with.`,
        `The warmth does not mind. It is not trying to take your name. It is trying to take *you*, the whole shape of you, and fit you into a hole in itself that has been waiting a thousand years for something exactly your size.`,
        { if: "f.e6_hollin==='talked'", t: `Far off, a dead king is weeping in a barrow. *I told you,* says Hollin. *I told you what you are.*` },
        { if: "f.e6_ring", t: `The bronze ring on your finger is hot as a coal. Down here, it is not a ring. It is a key that has been turned a quarter of the way.` },
        `You hold on to your name. It is the only thing down here with edges.`
      ],
      next: 'cold2'
    },
    cold2: {
      loc: 'Corran\'s Ford — under it',
      text: [
        `And then you are at the Ford. Not on the bank. *Under* it. Under the river and the stone and the six years, in the dark, with the roll open in your hands, and you are counting.`,
        `*Abel Crane, spearman, of Wick. Aldo Marsh, spearman, of Lowmarch. Tom Ashe, corporal, of Lowmarch.* You can't see the paper. You don't need to. You have read it so many times the names are worn into you like the star is worn into your palm.`,
        `The dark counts with you. You can feel it listening, name by name, the way a priest listens to a confession, the way a mother listens for a child's breathing.`,
        `*Four hundred and three. Four hundred and four. Four hundred and five.*`,
        `And one line above them all, at the head of the sheet, still breathing.`,
        `The warmth is quiet a long moment. Then it says, very gently, in a voice like a hillside settling:`,
        `*Not here.*`,
        `*Not any of them.*`,
        `You do not understand. You understand perfectly. They burned the bodies on the far bank, after; you saw the smoke from the stone, the morning you woke. Your men did not come down into the warm. They went somewhere else. They went *up*.`
      ],
      next: 'cold3'
    },
    cold3: {
      text: [
        `Something scrapes your face.`,
        `Not a root. Fingers. Fingers in the peat above you, clawing, tearing, the nails going, you can hear the nails going. A hand closes in your hair and *pulls*, and the bog does not want to give you up and makes a sound about it, a long sucking groan, and the hand does not let go.`,
        `Air. Cold. Black. The sky.`,
        `You come up out of the mud the way a calf comes out of a cow: all at once, slick, wrong, choking. Someone is screaming your name. Someone else is just screaming.`
      ],
      next: 'cold4'
    },
    cold4: {
      loc: 'Gallowmere Fen — Mother Gall\'s house, before dawn',
      text: [
        `Tamsin is on her knees in the bog to the waist, hauling you by the collar with both hands. Her fingers are black with peat and red underneath. Three of her nails are gone. She is crying the way children cry, with her whole face, without any idea that she is doing it.`,
        `@tamsin: "Get up, Sergeant. Get *up*. I'm not burying you. I won't." She's hitting your back with the flat of her ruined hand. "*Breathe*, you bastard—"`,
        `You vomit black water onto her chest. She laughs, or sobs. It is hard to tell.`,
        `Above you on the stilt-house walkway, small and terrible in the lantern-light, Mother Gall is tearing at her own hair.`,
        `@gall: "What have you *done*? What have you done, girl, he was nearly *through*, they had him, they had him by the *heart*—"`,
        `All around the house, in the black water, the bog begins to move. Leather faces. Leather shoulders. Nooses still round their necks. The sleepers are waking, and they are not looking at Gall.`,
        `They are looking at you.`
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { codex: ['mothers'], cast: ['gall'] } },
      next: 'bog1'
    },

    /* ======================= ACT ONE: THE BOG ======================= */
    bog1: {
      loc: 'Gallowmere Fen — the bog below the stilt-house',
      fx: { party: { add: ['tamsin'] }, quest: { id: 'e8_tithe', title: 'The Tithe', state: 'active', note: 'Tamsin dug you out of Mother Gall\'s bog with her hands. The sleepers are waking.' } },
      text: [
        `Tamsin gets you onto the reed-bank. Your legs do not work. She drags you by the armpits the last yard and drops you, and falls down beside you, and gets up again, because she has to.`,
        `Wrapped in her cloak on the bank, where she must have left it before she started digging: Widow, in her scabbard. Your waxed leather case, the sergeant's cord still knotted round it. She went and got them. Before she came for you, she went and got them.`,
        `She shoves the sword at you, hilt first.`,
        `@tamsin: "Can you stand? You have to stand. They're coming, Sergeant, you have to—"`
      ],
      choices: [
        { t: 'Take Widow out of her hands. Don\'t look at her.', go: 'bog_widow' },
        { t: 'Shove her away from you. Hard.', go: 'bog_shove' },
        { t: '"Why?" It\'s all you can get out.', go: 'bog_why' }
      ]
    },
    bog_widow: {
      text: [
        `You take it. Your fingers close round the grip and for a moment that is the only real thing in the world: old leather, the dent where your thumb goes.`,
        `You don't look at her. You can feel her looking at you, and you don't.`,
        `@tamsin: "Fine," she says. Her voice cracks straight down the middle. "Fine. Good. Stand up."`
      ],
      next: 'bog_rise'
    },
    bog_shove: {
      text: [
        `You put your hand flat on her chest and shove, and she goes over backward into the reeds, and she lets it happen. She doesn't even put her hands out.`,
        `She lies there a moment looking at the sky. Then she gets up, wet to the skin, and picks up her bow.`,
        `@tamsin: "Yes," she says. "All right. That's fair. Now stand *up*."`
      ],
      next: 'bog_rise'
    },
    bog_why: {
      text: [
        `It comes out of you as a croak, with peat in it.`,
        `She opens her mouth. Shuts it. For a second the whole of it is in her face, every word she has, crowding to get out.`,
        `@tamsin: "Later." She jams the sword into your hand and closes your fingers round it with her ruined ones. "Ask me later. I'll tell you. I'll tell you all of it, I swear on my mam, if you live long enough to ask."`
      ],
      next: 'bog_rise'
    },
    bog_rise: {
      text: [
        `You stand. It is the hardest thing you have done since the morning at the Ford.`,
        `The first sleeper comes up out of the black water ten feet away. A woman, once. Brown as a saddle, her skin tanned by a thousand years of peat into something that creaks. Her hair is still braided. Someone braided it for her before they put her down.`,
        `Behind her, a man with his throat cut in a smile, and the cord still in the wound.`,
        `@gall: "Take him back!" Gall is shrieking at them from the walkway. "Take him *down*, my darlings, he's *ours*—"`,
        `@tamsin: "They're not listening to her." Tamsin nocks an arrow with fingers that leave blood on the fletching. "Mothers below. They're not listening to anyone."`
      ],
      next: 'bog_fight'
    },
    bog_fight: {
      fight: { foes: ['sleeper', 'drowned'], title: 'Gall\'s Sleepers', win: 'bog_gall1', allies: ['tamsin'],
        intro: 'They have been waiting a thousand years for someone to bury. Fire and witch-salt hurt them.' }
    },
    bog_gall1: {
      text: [
        `The braided woman goes down with Widow through the hollow of her collarbone and does not make a sound. The other one takes three of Tamsin's arrows in the face and keeps coming until you take his legs, and then he just lies in the shallows and *reaches* for you, patiently, with a hand like an old glove, until you put your heel on his skull and push it under.`,
        `The bog goes still. Not quiet. Still, the way a held breath is still.`,
        `Mother Gall comes down the ladder from her walkway, slowly, one rung at a time, like a grandmother coming down to supper. She is so small. You had forgotten how small she is.`,
        `@gall: "Well," she says. "Well, well, well. Look at you, up and walking."`
      ],
      next: 'bog_gall_hub'
    },
    bog_gall_hub: {
      text: [
        `She stands at the bottom of the ladder with the black water round her ankles, and her bright little eyes go from you to Tamsin and back.`,
        `@gall: "You don't know what you've done, girl. You don't. A thousand years, we've kept the old ways. Buried our dead in the soft ground with milk by the water and the Lamp burning us for it. And then *he* comes, the one they can't count, a door walking about on two legs, and I send my best girl to fetch him, and she *fetches* him—" Her voice breaks, high and genuine. "—and then she digs him up again with her *fingernails*."`
      ],
      choices: [
        { t: '"Why me?"', go: 'bog_gall_why', once: true },
        { t: '"You raised her to do this."', go: 'bog_gall_tam', once: true },
        { t: '"What did they want me for? The things down there."', go: 'bog_gall_door', once: true },
        { t: 'Enough.', go: 'bog_gall_decide' }
      ]
    },
    bog_gall_why: {
      text: [
        `@gall: "Because you died on the stone, love." She says it the way she would explain weather to a child. "The Ford stone. The oldest stone in the March. Something was sworn on it once, by folk who should've known better, before there was ever a Lamp. And you bled into it and lay there a whole night, and in the morning you got up again." She cackles. "Nobody gets up again. Nobody. Not in a thousand years."`,
        `@gall: "I felt you. The night it happened. Felt you through the ground like a bell rung under water. I've been waiting six years for you to come close enough to catch."`
      ],
      next: 'bog_gall_hub'
    },
    bog_gall_tam: {
      text: [
        `@gall: "I raised her because the Lamp burned her mam and nobody else would." The old woman's chin comes up. "Nine years old, standing in the market with her face all black from the smoke, because they make the children watch. I took her home. I fed her. I taught her the bow and the knots and the songs. I gave her a *mother*, which is more than your stars ever gave anyone."`,
        `Beside you, Tamsin makes a small sound, like something stepped on.`,
        `@gall: "And I sent her to fetch you. Yes. Because she's the best I've got. And she was." The bright eyes go to Tamsin. "Weren't you, my duck. Right up until you weren't."`
      ],
      next: 'bog_gall_hub'
    },
    bog_gall_door: {
      text: [
        `@gall: "To open." She spreads her small brown hands. "You've seen the barrows, love. You've been in one. Dead kings lying on top of something, holding it down. You're the one key that isn't on anybody's ring. Put you in the soft ground alive, and they'd have had a way *through*."`,
        `@ansel: "And then what?"`,
        `She considers it honestly. That is the worst part. She actually considers it.`,
        `@gall: "Then the lights go hungry for once," she says. "And the Mothers wake. And I don't know, love. I don't know. I'm old. I only know it'd be *ours* again."`
      ],
      fx: { set: { e8_gall_door: 1 } },
      next: 'bog_gall_hub'
    },
    bog_gall_decide: {
      text: [
        `Out on the black water, more heads are rising. Ten. Twenty. They do not come closer. They are waiting, the way the bog is waiting, to see what you will do.`,
        `Gall sees them too. For the first time, something in her old face goes uncertain.`,
        `@gall: "Now, my darlings," she says, softly, to the water. "Now. Mind who you're looking at."`,
        `They are not looking at you any more. They are looking at her.`,
        `Tamsin is standing very still with an arrow on the string and no idea who to point it at.`
      ],
      choices: [
        { t: 'Kill her. Now, cleanly, before the sleepers decide for you.', go: 'bog_kill', fx: { set: { e8_gall: 'killed' }, rep: { fen: -2, lamp: 1 } } },
        { t: 'Lower your sword. "Go back up your ladder, old woman. Stay in your fen. If I ever feel you in the ground again, I\'ll come back."', go: 'bog_spare', fx: { set: { e8_gall: 'spared' }, rep: { fen: 1 } } },
        { t: 'Turn your back on her. Let the sleepers have what they\'ve decided they want.', go: 'bog_drown', fx: { set: { e8_gall: 'drowned' }, rep: { fen: -1 } } }
      ]
    },
    bog_kill: {
      text: [
        `You do it the way you do the things you know how to do: one step, one cut, no speech.`,
        `She is so small that Widow nearly goes through her and into the ladder behind. She looks down at the steel in her with an expression of enormous, offended surprise, as if you have trodden mud on a clean floor.`,
        `@gall: "Oh," she says. "Oh, *you*."`,
        `Then she looks past you, at Tamsin, and her face changes, goes soft and young and terrible, and she says a word you have never heard in any language, a fen word, a baby word, and dies.`
      ],
      next: 'bog_kill2'
    },
    bog_kill2: {
      text: [
        `Tamsin screams.`,
        `It isn't a word. It comes out of her the way blood comes out of a wound, and she drops the bow and goes past you into the water and catches the old woman before she slides under and holds her, rocks her, *Mam, Mam, Mam*, her ruined fingers in the thin white hair.`,
        `You stand there with the blood running off your sword into the bog and you wait for her to come at you. You would let her.`,
        `She doesn't. After a long time she looks up at you, and her face is a stranger's.`,
        `@tamsin: "You had the right," she says. "You had every right. I'd have done it. I'd never have done it." She laughs, horribly. "Go and stand over there. I'm burying her. In the *ground*, where she wanted. And you're going to stand there and let me."`,
        `You stand there and let her. She sinks the old woman into the soft black bank with her own hands and presses the peat over her face, and the sleepers watch from the water, and when it's done they sink, one by one, as if a prayer has been said that they were waiting for.`,
        `@tamsin: "Go down easy," she says to the mud. And then, to nobody: "I'm sorry. I'm sorry. I'm sorry."`
      ],
      fx: { bond: { tamsin: -1 }, quiet: true },
      next: 'confront1'
    },
    bog_spare: {
      text: [
        `You lower Widow.`,
        `Gall looks at the sword, and at you, and at the sleepers waiting in the water, and works it out faster than anyone you have ever met. She laughs, a dry delighted little cough.`,
        `@gall: "Merciful. Saints, he's merciful." She starts back up her ladder, one rung at a time. "That'll cost you, love. Mercy always costs the ones who come after."`,
        `At the top she turns and looks down. Not at you. At Tamsin.`,
        `@gall: "You'll come home, my duck. When he's done with you. They all come home in the end, and I'll be here. I'll keep your bed made."`
      ],
      next: 'bog_spare2'
    },
    bog_spare2: {
      text: [
        `Tamsin stares up at her. Her mouth is shaking. You watch fifteen years of *yes, Gran* rise up in her throat and stick there.`,
        `@tamsin: "No," she says.`,
        `It is barely a word. Gall hears it anyway. Something goes over the old face that might be grief, and might be respect, and might just be the lantern-light. Then the door of the stilt-house closes, and out on the water the sleepers sink, one by one, back into the dark.`,
        `Tamsin turns away from the house and does not look back at it. She is shaking so hard her teeth knock.`,
        `@tamsin: "Thank you," she says to the reeds. "I'm not— that wasn't for me. I know it wasn't. Thank you anyway."`
      ],
      fx: { set: { e8_tam_said_no: 1 } },
      next: 'confront1'
    },
    bog_drown: {
      text: [
        `You turn your back on her. You walk two steps up the bank. It is the longest walk of your life and you do it on legs that don't work.`,
        `Behind you, the water moves.`,
        `@gall: "No— no, my darlings, no, not *me*, I'm your— I *kept* you— I kept you all these years—"`,
        `You hear them take her. It isn't fast. They are very old and they are in no hurry. Leather hands on her ankles, her wrists, her skirts.`,
        `And then, as the black water comes up round her, Mother Gall begins to sing. High and cracked and sweet. A fen song. An eel who married a heron.`
      ],
      next: 'bog_drown2'
    },
    bog_drown2: {
      text: [
        `Tamsin moves. You knew she would. She's past you and into the shallows with her knife out, going for the sleepers, going for the old woman's reaching hand—`,
        `You catch her round the waist and haul her back. She fights you like a cat in a sack. She gets her teeth into your forearm, through the sleeve, to the meat, and bites down, and you hold on.`,
        `Gall gets to the eleventh verse. The one where the heron dies. Then the water closes, and there are bubbles, and then there are not.`,
        `Tamsin goes limp in your arms. Her teeth come out of your arm. She is sobbing against your chest, and you are holding her, and neither of you can work out who is the one being held.`,
        `@tamsin: "She taught me that," she says into your coat. "That song. She taught me that song. I never got the words right."`,
        `The sleepers sink, one by one. The fen goes quiet.`
      ],
      fx: { hp: -6, set: { e8_tam_bite: 1 } },
      next: 'confront1'
    },

    confront1: {
      loc: 'Gallowmere — the causeway, first light',
      text: [
        `Dawn comes up over Gallowmere the colour of a bruise going yellow. You are sitting on the old corduroy causeway, a road of rotten logs laid across the bog by people dead a thousand years. Tamsin is on the next log along. Not close. Not far.`,
        `She's washing her hands in the bog-water. Over and over. It doesn't help. The peat is in the cuts.`,
        { if: "f.e7_last_words==='curse'", t: `@tamsin: "You said you hoped they'd choke on you." She doesn't look up. "I've been hearing it all night. While I dug. Every time I got a handful out, it came back. *Choke on me.* I thought, good. Good, he should. I'd say it."` },
        { if: "f.e7_last_words==='forgive'", t: `@tamsin: "You *forgave* me." She says it like an accusation. She doesn't look up. "With mud in your mouth. You said it was all right. You didn't get to do that, Sergeant. I hadn't done anything to earn it yet. I've been digging all night trying to earn it, and I still haven't."` },
        { if: "f.e7_last_words==='silence' || !f.e7_last_words", t: `@tamsin: "You didn't say anything." She doesn't look up. "When they took you. You just looked at me. I'd have taken anything. A curse. Spit. You just looked, and then the mud came up, and I stood there with nothing to hold."` }
      ],
      choices: [
        { t: '"Why did you come back for me?"', go: 'conf_why' },
        { t: '"Was any of it true? Any of it?"', go: 'conf_true' },
        { t: '"Don\'t. Don\'t talk to me yet."', go: 'conf_dont' }
      ]
    },
    conf_why: {
      text: [
        `She stops washing her hands.`,
        `@tamsin: "I stood there and watched the mud close on your face. And Gall was singing. And the sleepers were taking you down, slow, the way they do. And I thought, that's it, then. That's done. I did what I promised."`,
        `@tamsin: "And then I started counting." She holds up her ruined hands and looks at them. "I can't read much. You know I can't. But I know the number. Four hundred and six lines. I counted to four hundred and six, and when I got there I thought, *he'd have finished the roll by now*, and I started digging."`,
        { if: "f.e7_tam_promise==='keep'", t: `@tamsin: "You said you'd keep it and hate yourself and do it anyway. On the wall. That's what promises are, you said." She looks at her hands. "So I kept it. And then I was done keeping it."` }
      ],
      next: 'conf2'
    },
    conf_true: {
      text: [
        `She turns her head and looks at you, finally, and she doesn't let herself look away.`,
        `@tamsin: "The apples were true. The song was true. My mam was true; they did burn her, I did watch." Her voice is very steady and very quiet. "The crows weren't. My gran was Gall. Every night I sent her a crow and I told her where you were and how you slept and whether you'd drunk. I told her you sleep under the wagon. I told her about the roll."`,
        `@tamsin: "The rest of it." She swallows. "I don't know, Sergeant. I don't know what was true. I kept waiting for it to stop being."`
      ],
      next: 'conf2'
    },
    conf_dont: {
      text: [
        `She nods. She goes back to washing her hands.`,
        `For a long time there is nothing but the fen waking up: a bittern booming somewhere, eel-weirs clicking in the current, the long wet hush of reeds.`,
        `Then, because she has never once in her life been able to leave a silence alone, she says it anyway, to the water.`,
        `@tamsin: "I'm not going to say sorry. Sorry's for spilling beer. There isn't a word for this. I looked."`
      ],
      next: 'conf2'
    },
    conf2: {
      text: [
        `@tamsin: "She sent me to find you. Before the Crooked Mile. Before Pettibone. I bribed my way onto that wagon because she told me which road you'd be on." A breath. "She felt you through the ground. She said you were a door. I thought she meant it like a saying."`,
        { if: "f.e3_tam_promise==='yes'", t: `@tamsin: "You said you'd do it for me. In the fen, that night. If it was ever me on one of those, you'd put an arrow in me before the fire got there." Her jaw works. "And I stood on Gran's landing with your sword in my arms and didn't even do that much for you."` },
        { if: "f.e6_tam_stopped", t: `@tamsin: "In the barrow. When you— when I stopped you." Her jaw works. "That's why. I wasn't going to do that with you and then do *this*. I had that much left. That's all I had left."` },
        { if: "!f.e6_tam_stopped", t: `@tamsin: "In the barrow, in the dark. I nearly— " She stops. "I had that much sense left, anyway. Not much else."` },
        `@tamsin: "I'm not asking you for anything. I want that clear. I dug you out because I couldn't not. What you do now is yours."`,
        `She stands. She waits. The causeway runs north toward Harrowgate, and she's standing on it, and she isn't going anywhere unless you send her.`
      ],
      choices: [
        { t: '"Walk behind me. Where I can see you."', go: 'conf_behind', fx: { set: { e8_tam: 'behind' } } },
        { t: '"I don\'t forgive you. I want that clear, too."', go: 'conf_unforgiven', fx: { set: { e8_tam: 'unforgiven' } } },
        { t: '"I don\'t know what you are to me now."', go: 'conf_unknown', fx: { set: { e8_tam: 'unknown' } } },
        { t: '"Go home, Tamsin. Wherever that is now."', go: 'conf_sent', fx: { set: { e8_tam: 'sent' }, bond: { tamsin: -1 } } }
      ]
    },
    conf_behind: {
      text: [
        `@tamsin: "Behind you." She nods, once, like a soldier taking an order. "Where you can see me."`,
        `You start walking north. After a few steps you hear her boots on the logs behind you. She keeps exactly the distance you'd keep from a horse that kicks.`,
        `You look back once. She is there. She doesn't smile. Neither do you.`
      ],
      next: 'road1'
    },
    conf_unforgiven: {
      text: [
        `@tamsin: "Good," she says, and means it. "I don't either."`,
        `She picks up her bow and slings it. Neither of you moves for a moment.`,
        `@tamsin: "There's a lot of people in Harrowgate who are about to need someone who can shoot," she says. "Unforgiven's fine. I can shoot unforgiven."`
      ],
      next: 'road1'
    },
    conf_unknown: {
      text: [
        `She takes that like a blow and like a gift, both, and you can see her not knowing which to answer.`,
        `@tamsin: "No," she says at last. "Me neither. I used to know." She wipes her face with the back of her wrist, which only moves the peat around. "Let's find out on the way, then. It's a long way to Harrowgate."`
      ],
      next: 'road1'
    },
    conf_sent: {
      text: [
        `She looks at the stilt-house, down the causeway. Then back at you.`,
        `@tamsin: "No," she says.`,
        `@ansel: "Tamsin—"`,
        `@tamsin: "You can make me leave. You can put that sword in me, you've the right. You can't make me *go*." She shoulders her bow. "I'll walk a hundred yards back. You won't have to look at me. But I'm walking the same way you are, Sergeant, and that's the end of it."`,
        `She does. A hundred yards back, all the way. Every time you turn round, she is there, small against the sky.`
      ],
      next: 'road1'
    },

    /* ======================= ACT TWO: THE DESERTER ======================= */
    road1: {
      loc: 'The fen edge — morning',
      text: [
        `Ox is tied to an eel-weir post at the edge of the fen, up to his hocks in mud and furious about it. He sees you and screams like a mule and nearly pulls the post out.`,
        `@tamsin: "He bit me twice when I tied him." A pause. "I deserved both."`,
        `You put your face against his ugly ewe neck and stand there. He smells of horse and fen and himself. He lips at your collar, then bites it, gently, and keeps hold of it, as if you might go back in the bog if he lets go.`,
        `Then you ride north, and the mist comes off the water in sheets, and out of the mist comes a white horse.`
      ],
      next: 'bran1'
    },
    bran1: {
      text: [
        `She rides like someone who hasn't slept, because she hasn't. The white enamel plate is gone. She's in a padded jack and a cloak, and the seven-point star has been cut off the breast of her surcoat with a knife, leaving a pale ghost of it where the sun never got. Her sword is across her saddle-bow. There is a heavy satchel at her hip.`,
        `Lampwarden Brannagh Vey. The last time you saw her in the light, she was pressing a burning blade over your heart and bleeding from the throat because nothing happened.`,
        { if: "f.e7_brannagh_moment==='hand'", t: `She looks at your left hand before she looks at your face. Then she looks away from both.` },
        `Tamsin has an arrow on the string before the horse stops. Drawn to the ear. Pointed at Brannagh's throat, at the scar there.`,
        `@tamsin: "The Lamp," Tamsin says, very softly, "burned my mother."`,
        `@brannagh: "I know." Brannagh doesn't reach for her sword. "I've burned other people's."`
      ],
      choices: [
        { t: '"Tamsin. Lower it."', go: 'bran2', fx: { set: { e8_bran_meet: 'lower' } } },
        { t: 'Say nothing. Let the two of them settle it.', go: 'bran2', fx: { set: { e8_bran_meet: 'settle' } } },
        { t: 'Draw Widow and put yourself between them, facing Brannagh.', go: 'bran2', fx: { set: { e8_bran_meet: 'drew' } } }
      ]
    },
    bran2: {
      text: [
        { if: "f.e8_bran_meet==='lower'", t: `Tamsin holds it a long breath. Then she lets the string down slowly, the arrow still nocked. "Lowered," she says. "Not put away."` },
        { if: "f.e8_bran_meet==='settle'", t: `Nobody moves. The mist moves. Then Brannagh swings down off her horse, slow, into the mud, right in front of the arrow, and stands there with her hands open. Tamsin's bow-arm starts to shake. After a while she lowers it, because the alternative is shooting someone who is simply standing still and waiting for it.` },
        { if: "f.e8_bran_meet==='drew'", t: `Brannagh looks at the point of Widow, a hand from her face, and almost smiles. "That's fair," she says. "I'd do the same. Better." She takes her own sword off her saddle by the scabbard and drops it in the mud at your horse's feet.` },
        `@brannagh: "I'm not here for you, Dray. Not the way I was." She unslings the satchel and holds it up. "I'm here because I went down the stairs I wasn't supposed to go down. And I don't have anyone else to tell."`,
        `@brannagh: "The oracle told me where to ride. She said she could hear the hole where you are, out in the fen, like a dropped stitch. I left at dawn with these, and nobody stopped me. Nobody ever thinks to stop a Warden."`
      ],
      next: 'bran3'
    },
    bran3: {
      text: [
        `She tells it standing in the mud with her horse's reins wrapped round her fist, and her voice doesn't change once, which is how you know what it costs her.`,
        { if: 'f.e7_told_crypt', t: `@brannagh: "You told me to go past the ossuary door. I went that night, and the door with two locks was locked, and I stood in front of it until the candle went out. In the morning I went to the Abbess. For counsel. She gave me honey cake and held my hand and told me the Saints test us." Her mouth twists. "And when she'd gone to the Evening Lamp I took the key off its nail in her cell and went back down."`, else: `@brannagh: "After I had you in the cell. After the fire did nothing. I went to the Abbess. For counsel. She gave me honey cake and sat with me and held my hand and told me the Saints test us." Her mouth twists. "And when she'd gone to the Evening Lamp I went down into the crypt, past the ossuary, because she'd told me three times not to."` },
        `@brannagh: "There are cells under the crypt, Dray. Old ones. And there are children in them. Lamp orphans, the ones in grey who spoon the soup in the white ward. Sitting on straw in rows. Breathing. Empty." She swallows. "Hollowed. Some of them a year ago. Some last month. I knew one of them. She gave me a cup of water on my first day in Harrowgate and told me I had a nice horse."`
      ],
      fx: { know: { codex: ['smalltithe'] } },
      next: 'bran4'
    },
    bran4: {
      text: [
        `She opens the satchel. Ledgers, bound in white calf, stamped with the Lanternhold seal. She hands one up to you.`,
        `It is beautifully kept. Columns. Dates. Names, and where each name was found: *the Tanners' Bottom; the Kingsroad, Ashby; the cisterns; the fen.* Ages. And in the last column, in a round, kind, motherly hand: a tick. Hundreds of ticks. Pages of them. It goes back forty years, and the hand changes only once.`,
        { if: "f.e4_ledger", t: `You know the shape of it. You've seen its little brother: the Saltdown overseer's book, deliveries *from the Lanternhold*. This is the other half of that sum.` },
        { if: "f.e5_ledger_to==='brannagh'", t: `@brannagh: "You gave me the Saltdown ledger at the Feast. I read it. I told myself it was forged." She doesn't look away. "I'm good at telling myself things."` },
        { if: "f.e3_edda==='burned' || f.e3_edda==='mercy'", t: `@brannagh: "I burned a girl in your market square for putting her father in the ground." Flatly. "And all the while, a hundred yards up the hill—" She stops. She doesn't finish it.` },
        `@brannagh: "It's called the Small Tithe. It's in her hand on the first page. Like a recipe."`
      ],
      choices: [
        { t: '"Why bring it to me?"', go: 'bran_why', once: true },
        { t: '"You put fire on my heart and watched."', go: 'bran_fire', once: true },
        { t: '"Where\'s the oracle? Where\'s Oriel?"', go: 'bran_oriel', once: true },
        { t: '"When?"', go: 'bran_plan' }
      ]
    },
    bran_why: {
      text: [
        `@brannagh: "Because I went to my own chaplain first, and he told me to burn the books and pray. And I went to the Marshal, because the March is his to keep, and Hask laughed and poured me a drink and told me the Abbess and he were old friends." Her knuckles are white on the reins.`,
        `@brannagh: "And because the oracle says the Saints can't see you. And I have spent nineteen years doing what the Saints can see." She looks at you, finally, all the way. "I wanted to stand next to something they can't."`
      ],
      fx: { set: { e8_bran_why: 1 } },
      next: 'bran4b'
    },
    bran_fire: {
      text: [
        `@brannagh: "Yes."`,
        `She doesn't defend it. She lifts her own right hand and turns it over, and the palm is blistered white straight across the middle, a fresh burn the width of a blade.`,
        `@brannagh: "After you'd gone, I lit it again and took it by the edge. To see if it still worked." A muscle moves in her cheek. "It still works. On me."`
      ],
      next: 'bran4b'
    },
    bran_oriel: {
      text: [
        `@brannagh: "In her cage. In the Lanternhold yard, under the tower. Where the Abbess wanted her." A pause. "She told me where to find you, and then she started singing, and she hasn't stopped. Not her own voice. The other one. She hasn't eaten. The Lamplighters say it's an honour."`,
        `@brannagh: "I couldn't get her out alone. I tried. I have the key to the cage, and not the key to the yard." She touches the iron key on a cord at her neck. "That's the other reason I came."`
      ],
      next: 'bran4b'
    },
    bran4b: {
      text: [`Behind you, Tamsin hasn't moved. Neither has the arrow on her string.`],
      choices: [
        { t: '"Why bring it to me?"', go: 'bran_why', once: true },
        { t: '"You put fire on my heart and watched."', go: 'bran_fire', once: true },
        { t: '"Where\'s the oracle?"', go: 'bran_oriel', once: true },
        { t: '"When?"', go: 'bran_plan' }
      ]
    },
    bran_plan: {
      text: [
        `@brannagh: "Tonight."`,
        `She pulls a letter out of the satchel. Heavy paper. A broken seal in gold wax: a sunburst, and a crown over it.`,
        `@brannagh: "From Corvane, from the Hierarch's own chancery. With a note in the Prince's hand pinned to it. Ser Konrad Hask is to be blessed as Lord Protector of the March of Harrowgate, *the Lanternhold's tithe being paid in full by Saint Corran's Eve*." She folds it again with great care. "Saint Corran's Eve is tonight. Fourteen orphans were moved down into the crypt at noon yesterday. They're all that's left in grey."`,
        `@brannagh: "She's going to empty fourteen children to buy Konrad Hask a title. And she'll weep while she does it. I've seen her weep. It's real."`
      ],
      fx: { set: { e8_brannagh: 'ally' }, party: { add: ['brannagh'] }, know: { cast: ['brannagh'] },
        quest: { id: 'e8_tithe', note: 'Tonight, Saint Corran\'s Eve, the Abbess will perform the Small Tithe on fourteen Lanternhold orphans to pay for Hask\'s elevation. Brannagh Vey has deserted the Lamp to stop it.' } },
      next: 'bran_tam'
    },
    bran_tam: {
      text: [
        `Brannagh turns to Tamsin. The arrow is still there between them.`,
        `@brannagh: "Your mother. When?"`,
        `@tamsin: "Fifteen years. The market at Gallowmere. A Lampwarden called Hesk lit it."`,
        `@brannagh: "Hesk trained me." Brannagh says it like a confession, because it is one. "He's dead now. I'd tell you he was a hard man, but kind. I'd have believed it a week ago."`,
        `They look at each other: the girl the Lamp burned, and the girl the Lamp made. You can see how badly each of them would like a reason.`
      ],
      choices: [
        { t: 'Step between them. "Later. You can kill each other after. Tonight I need you both."', go: 'bran_tam2', fx: { set: { e8_bt: 'between' } } },
        { t: 'Let them have it out. Say nothing.', go: 'bran_tam2', fx: { set: { e8_bt: 'out' } } },
        { t: '"Tamsin. She came here alone, with her sword in the mud. That\'s more than you did."', go: 'bran_tam2', fx: { set: { e8_bt: 'cruel' }, bond: { tamsin: -1 } } }
      ]
    },
    bran_tam2: {
      text: [
        { if: "f.e8_bt==='between'", t: `Tamsin lets the string down. Brannagh nods, once, as if a treaty has been signed. Nobody shakes hands.` },
        { if: "f.e8_bt==='out'", t: `Brannagh walks forward until the arrowhead is touching the scar on her throat. Stops there. Tamsin's hand shakes. "Do it or don't," says Brannagh. "I've been waiting for someone to since the cell." Tamsin lowers the bow. "No," she says. "You don't get to be let off that easy either." Something passes between them that isn't friendship and isn't far off.` },
        { if: "f.e8_bt==='cruel'", t: `Tamsin flinches as if you'd hit her. Then she lowers the bow, carefully, and slings it, and walks to the back of the line, and doesn't say anything at all. Brannagh looks at you sidelong. "That was cruel," she says. "It was also true," you say. "Yes," she says. "That's what made it cruel."` },
        `You turn Ox's head toward Harrowgate. On the hill to the north, above the mist, the Lanternhold's tower is burning blue in daylight.`
      ],
      next: 'hen_in'
    },

    hen_in: {
      loc: 'Harrowgate — the tannery drains, noon',
      text: [
        `Harrowgate's gates are shut and Hask's men are on the walls, but the Tanners' Bottom has been smuggling things out of Harrowgate since before there was a Harrowgate. There is a culvert under the wall where the tannery pits drain into the river: the lime-stink of your childhood, thick enough to chew.`,
        `You go through it on your hands and knees with Widow on your back, through a foot of grey water that burns your cuts, and you think, *of course. Of course it ends here.*`,
        `At the other end, a grating. On the other side of the grating, a big woman with her sleeves rolled up and a cleaver in her fist.`,
        `@mags: "Well," says Mags Halloran. "You smell like a man who's been buried."`
      ],
      next: 'hen1'
    },
    hen1: {
      loc: 'The Gutted Hen — the cellar',
      fx: { party: { add: ['ulla', 'pell'] }, know: { cast: ['mags', 'ulla', 'pell'] } },
      text: [
        `The Hen's cellar is full. Barrels, smoke, a lamp, and people.`,
        `Ulla Stonehand gets to you first. She doesn't say anything. She picks you up off the floor, bodily, peat and all, and hugs you until something in your back goes *click*, and puts you down, and hits you in the shoulder hard enough to bruise.`,
        `@ulla: "We burned a candle for you. A *Lamp* candle. Mags made us. I said, he'll hate that. She said, then he can come back and complain."`,
        `Brother Pell is sitting on a barrel with his hands round a cup of water. Water. He's shaved. His eyes are clear and red-rimmed and absolutely terrified.`,
        { if: "bond.pell>=4", t: `@pell: "Ansel. Oh, thank the— thank *whoever*." He grips your hand in both of his. "I've been sober for two days. It's horrible. Everything's so *loud*."` },
        { if: "!(bond.pell>=4)", t: `@pell: "Dray." He nods at you from the barrel, and doesn't get up, as if he isn't sure he's allowed. "They said you were dead. I'm— I'm very glad they're wrong. I'm sober, you'll notice. Two days. I don't recommend it."` },
        { if: "f.e2_mags", t: `Mags kisses you on the mouth in front of everybody, hard and brief, and then wipes her lips and makes a face. "*Peat*," she says. "Saints. Go and wash, you're not coming in my bed like that." Somebody laughs. It's the first laugh in that cellar in two days.` },
        { if: "!f.e2_mags", t: `Mags puts a cup of brown spirits in your hand without asking and folds your fingers round it. "Drink that. Then talk. Then wash. In that order or I'll put you through the window."` }
      ],
      next: 'hen_hob_route'
    },
    hen_hob_route: {
      route: [
        { if: "f.e7_hob==='alive'", go: 'hen_hob_alive' },
        { go: 'hen_hob_dead' }
      ]
    },
    hen_hob_alive: {
      fx: { party: { add: ['hob'] }, know: { cast: ['hob'] } },
      text: [
        `And Hob. Gangly, freckled, a fresh red line of stitches from his eyebrow into his hair, standing at the back by the stair with a borrowed spear because his pitchfork broke in somebody.`,
        `He doesn't run to you. He's grown out of running to you, in two days. He comes over and stands in front of you like a soldier.`,
        `@hob: "I warned her, Sergeant. Lady Isolde. Like you told me. I went to the Keep, not the gate." His chin shakes and he gets it under control. "They put her under guard anyway. But she knew. She had time to burn her father's letters before they came in."`,
        `You put your hand on the back of his neck. You don't say anything. You don't trust your voice.`
      ],
      next: 'hen_council'
    },
    hen_hob_dead: {
      text: [
        { if: "f.e7_hob==='dead'", t: `In the corner by the stair, leaning against the wall where somebody has put it carefully, is a pitchfork with a broken haft. Nobody has moved it. Nobody's going to.` },
        { if: "f.e7_hob==='dead'", t: `Mags sees you looking. "His mam came for him," she says quietly. "She wanted him in the ground. We did it in the tannery yard, under the lime, where the Lamp won't look." She doesn't ask if that was right. You nod anyway.` },
        { if: "f.e7_hob==='none'", t: `Mags sees you looking at the stable door. "Hob," she says. "My stable lad. You sent him home, the first week, d'you remember? He went up the Keep with a load of hay the night of the bell and went at the Marshal's men with a pitchfork, shouting it weren't you." She wipes the same clean mug twice. "We put him in the ground in the tannery yard. Where the Lamp won't look."` },
        { if: "f.e7_hob!=='dead'", t: `Somebody has lit a second candle on a barrel-head, beside the one for you. For the ones who didn't get to the cellar. There are a lot of them, Mags says. The town has had a bad two days.` }
      ],
      next: 'hen_council'
    },
    hen_council: {
      loc: 'The Gutted Hen — the cellar, afternoon',
      text: [
        `Brannagh spreads a Lanternhold plan on a barrel-head, drawn from memory on the back of a tavern bill. Pell corrects it in three places with a shaking finger: the crypt stair, the old ossuary chute, the door to the cells. He knows the building better than she does. He was there twenty-two years.`,
        `You count who you have. You can't help it. It's what you do.`,
        `Ulla. Pell. Brannagh. Tamsin.`,
        { if: "f.e7_hob==='alive'", t: `Hob.` },
        `Mags, and the Tanners' Bottom: forty men and women with skinning knives and grudges, and every one of them has buried someone the Marshal's men brought home "from bandits."`,
        { if: "f.e7_moll_turned", t: `Sergeant Dunstan Moll comes down the cellar stair in the middle of the afternoon in a cloak over his Varane livery, stoops under the beam, and stands in front of you like a man reporting for a hanging. "Gate watch is mine from the Evening Lamp," he says. "Eleven men. Seven of them will do as I say. Four I'll have to hit." He takes off his helmet. "I owe you, Dray. I owe that girl upstairs in the Keep more."` },
        { if: "f.e1_spared_wat", t: `Wat sends word by a pot-boy: he's been moved to the Keep's own postern, and he's on it tonight. He says to tell the sergeant he's still square.` },
        { if: "f.e3_rusk==='allied' || f.e3_rusk==='bedded'", t: `A charcoal-burner's boy comes down the cellar steps black to the elbows, with a note in a lady's educated hand: *Husband and I are in the Thornwood with thirty friends. Light a fire on the Lanternhold wall and we'll come and see what's burning. R.*` },
        { if: "f.e3_edda==='saved'", t: `Edda Moss is in the corner, rolling bandages, her cropped hair grown back like goose-fuzz.` },
        { if: "f.e3_edda==='saved' && f.e3_edda_after!=='cellar'", t: `She came in from the fen at noon, when the word went round, with a sack of witch-salt on her back. Nobody asked her to.` },
        { if: "f.e3_edda==='saved' && f.e3_edda_route==='argued'", t: `There is a Lamp star-brand on her right palm, healed shiny. She keeps that hand in her lap.` },
        { if: "f.e3_edda==='saved'", t: `She doesn't say much. She doesn't need to. Every time Brannagh looks at her, Brannagh looks away first.` },
        { if: "f.e4_miners==='saved'", t: `And Mags says, strangely: "Your miners are back." The Hollowed you led out of Saltdown.` },
        { if: "f.e4_miners==='saved' && f.e4_miners_ward==='lanternhold'", t: `Lord Varane gave them to the Abbess's white ward, *for proper care*, and she wept over every one. Somebody opened the ward doors in the coup.` },
        { if: "f.e4_miners==='saved' && f.e4_miners_ward!=='lanternhold'", t: `They were kept in the Keep's old barracks, by your asking. The Marshal's men turned them out into the street on the night of the bell.` },
        { if: "f.e4_miners==='saved'", t: `They walked down to the Tanners' Bottom by themselves and stood in the street outside the Hen, in a line, facing the door. They're there now. They haven't moved since. "Like they were waiting for orders," Mags says, and shivers.` },
        { if: 'f.e4_miners_some', t: `And the thirteen from Saltdown you left in the Keep's laundry are still there, Mags hears. The washerwoman has kept them fed right through the coup, and barred the door, and told the Marshal's men it was the plague in there. Nobody has gone in.` }
      ],
      next: 'hen_plan'
    },
    hen_plan: {
      text: [
        `Two things tonight, and one of them can't wait for the other.`,
        `Isolde is in the Keep under guard. While Hask holds the Keep, he holds Harrowgate, and the Varane household men won't move against him without someone of the blood to move for. Free her and the town has a lord again.`,
        `And at midnight, in the crypt under the Lanternhold, fourteen children.`,
        `@ulla: "Keep at dusk, Lanternhold at midnight," says Ulla. "Easy. I've done harder before breakfast." She hasn't.`,
        `@brannagh: "How do we get into the Keep?"`,
        `Everybody looks at you.`
      ],
      choices: [
        { t: '"Moll has the gate from the Evening Lamp. We walk in through the front."', if: "f.e7_moll_turned", go: 'hen_roll', fx: { set: { e8_keep_way: 'gate' } } },
        { t: '"Wat has the postern. He opened it for me once. He\'ll open it again."', if: "f.e1_spared_wat", go: 'hen_roll', fx: { set: { e8_keep_way: 'postern' } } },
        { t: '"Over the wall at the kitchen yard. Tamsin, how are your grapples?"', go: 'hen_roll', fx: { set: { e8_keep_way: 'wall' } } }
      ]
    },
    hen_roll: {
      text: [
        `Afterward, when the plan is made and remade and there's nothing left to do but wait for dusk, you sit on a barrel with the case open on your knees.`,
        `The roll. Four hundred and six lines: a captain's name at the head of it, and four hundred and five dead below. The cord. Peat in the creases of the leather.`,
        { if: "f.e4_jory_written || f.e7_hob==='dead'", t: `And under the line you ruled six years ago, in fresher ink, the ones you've added since.` },
        `You ask Pell for paper. He has a good sheet in his satchel, Lanternhold paper, stolen out of the archive the morning they threw him out and never used: *I was saving it for something worth saying.* You paste it to the end of the roll with flour and water from Mags's kitchen. You sharpen a quill.`,
        `You've never written a name on the roll for anyone living. At the top of the clean sheet, small, you write a *1*. It looks strange there. Everything on the old sheets has been counting down.`,
        `*Ulla Stonehand, of Nordvik.* She reads it over your shoulder and goes quiet, which nobody has ever seen. *Pellam Orme, of Harrowgate.* Pell has to go and stand in the corner for a bit. *Brannagh Vey.* She watches you write it with no expression at all. *Mags Halloran.*`,
        { if: "f.e7_hob==='alive'", t: `*Hob Fenner, of Harrowgate.* He makes you show him which mark is the H.` },
        `Then you stop, with the quill over the paper.`,
        `Tamsin is sitting on the cellar steps, watching you. She can't read it. She knows exactly what it is.`
      ],
      fx: { give: { e8_new_roll: 1 }, know: { codex: ['redcompany'] } },
      choices: [
        { t: 'Write it. *Tamsin Vell, of Gallowmere.*', go: 'hen_roll_tam', fx: { set: { e8_roll_tam: 'written' } } },
        { t: 'Hold out the quill to her. "You make your mark. I\'m not doing it for you."', go: 'hen_roll_mark', fx: { set: { e8_roll_tam: 'mark' }, bond: { tamsin: 1 } } },
        { t: 'Roll it up. Not yet.', go: 'hen_roll_not', fx: { set: { e8_roll_tam: 'not' } } }
      ]
    },
    hen_roll_tam: {
      text: [
        `You write it. The quill scratches. The whole cellar can hear it.`,
        `She doesn't come over. She doesn't need to see it. She watched your hand make the shape.`,
        { if: 'f.e6_tam_name', t: `@tamsin: "It's got a lot of corners," she says, from the stairs. "I remember."`, else: `@tamsin: "That's me?" she says, from the stairs.` },
        { if: '!f.e6_tam_name', t: `@ansel: "That's you."` },
        `She nods. She looks at the floor for a while.`
      ],
      next: 'night_hub'
    },
    hen_roll_mark: {
      text: [
        `She looks at the quill for a long moment like it might bite. Then she comes down the steps and takes it, and her ruined fingers can barely hold it.`,
        { if: 'f.e6_tam_wrote', t: `She doesn't ask. She writes it whole, the name you once walked her hand through in the dust of a barrow, and this time nobody's hand is on hers: T, A, M, the S backwards, I, N, and then VELL, which nobody has ever shown her, guessed at and nearly right. Then the crooked fen-knot she ties on her crows, because a name on its own looks naked to her. It blots. She blows on it, and doesn't look at you, and her ears go red.` },
        { if: '!f.e6_tam_wrote && (f.e5_tam_letters || f.e6_tam_name)', t: `She doesn't ask. She makes the T herself, bad-tempered and square. A. M. The S comes out backwards, the way it always does, a snake going home the wrong way; she glares at it and leaves it. Then, after the name, the crooked fen-knot she ties on her crows, because a name on its own looks naked to her. It blots. She blows on it.`, else: `@tamsin: "Show me," she says, very low, so nobody else can hear. "Which is the T." You put your hand over hers. You make the T. Then she pushes your hand away and makes the rest of the mark herself, a crooked fen-knot, the one she ties on her crows. It blots. She stares at it as if it is the first thing she has ever made that will last.` }
      ],
      next: 'night_hub'
    },
    hen_roll_not: {
      text: [
        `You roll it up. You tie the cord.`,
        `She watches you do it. Nothing moves in her face. Then she nods, very slightly, as if you've said something she agrees with, and goes upstairs.`,
        `Ulla looks at you. "Hm," she says, and nothing else, and that's worse than anything else she could have said.`
      ],
      next: 'night_hub'
    },

    /* ======================= THE HOUR BEFORE ======================= */
    night_hub: {
      card: { kind: 'act', title: 'The Hour Before', sub: 'The Gutted Hen · Saint Corran\'s Eve' },
      loc: 'The Gutted Hen — late afternoon',
      text: [
        `The light goes long and gold through the cellar grating. Two hours to the Evening Lamp. Nobody can eat. Ulla eats.`,
        `It's the hour before. You know this hour. You had it at the Ford, in the grey, with Tom Ashe telling his joke. Men spend it in a lot of ways. You only get to spend it once.`,
        `> Saint Corran's Eve. Six years tonight.`
      ],
      choices: [
        { t: 'Find Brannagh. She went up to the back room alone.', go: 'night_bran1', fx: { set: { e8_night: 'brannagh' } } },
        { t: 'Find Tamsin. She\'s up on the old town wall behind the tannery.', go: 'night_tam1', fx: { set: { e8_night: 'tamsin' } } },
        { t: 'Write to Isolde. If you can get a letter into the Keep.', go: 'night_iso1', fx: { set: { e8_night: 'isolde' } } },
        { t: 'Sit with Pell. He\'s shaking.', go: 'night_pell1', fx: { set: { e8_night: 'pell' } } },
        { t: 'Hob is hovering at the foot of the stairs with something to say.', if: "f.e7_hob==='alive'", go: 'night_hob1', fx: { set: { e8_night: 'hob' } } },
        { t: 'Sleep. Alone, in the dark, under a roof. You\'ve earned that much.', go: 'night_sleep', fx: { set: { e8_night: 'sleep' }, rest: true } }
      ]
    },
    night_hob1: {
      text: [
        `He's been working himself up to it all afternoon. You can tell by his ears, which have gone red.`,
        `@hob: "Sergeant. On the new roll. You put *of Harrowgate*." He swallows. "The old ones say *of the Company*. Tom Ashe, corporal, of the Company. I've heard you read it."`,
        `@hob: "I'd like mine to say that. If it's allowed. I don't want to be of Harrowgate. Everybody's of Harrowgate."`
      ],
      choices: [
        { t: 'Get the roll out. Strike *of Harrowgate*. Write *of the Company*. Let him watch.', go: 'night_hob2', fx: { set: { e8_hob_company: 'now' }, bond: { hob: 1 } } },
        { t: '"You earn that tonight, Hob. Ask me after."', go: 'night_hob2', fx: { set: { e8_hob_company: 'after' } } }
      ]
    },
    night_hob2: {
      text: [
        { if: "f.e8_hob_company==='now'", t: `He watches every letter go down. When you blot it he lets out a breath he's been holding since the stable yard. "Of the Company," he says, trying it. Then, very seriously: "I'll not let it down, Sergeant."` },
        { if: "f.e8_hob_company==='after'", t: `He nods, hard, like a man taking an order. "After," he says. "Right. After." He goes off to sharpen a spear that is already sharp.` },
        `You sit on the stair a while after. You were fifteen when Konrad Hask wrote you into a roll. You'd have died for him that night, too.`
      ],
      next: 'night_end'
    },
    night_bran1: {
      loc: 'The Gutted Hen — the back room',
      text: [
        `She's sitting on the edge of Mags's spare bed, stripped out of jack and shirt to her breastband, with the knotted cord in her lap.`,
        `You've heard about the cord. You've never seen it. Three knots, hard as acorns, dark with old blood. Her back, turned half toward the door, is a map of it: white welts on white skin, years of them, laid down neat as ploughing.`,
        `She doesn't cover herself. She looks at you in the doorway the way she looked at you across the practice yard, measuring reach.`,
        { if: "f.e5_brannagh_spar", t: `@brannagh: "You've seen me with bruises before," she says. "In the yard. You gave me most of them."` },
        `@brannagh: "I do it before a fight. Have done since I was nine. It clears the head." She turns the cord over in her blistered hand. "I was sitting here trying to think of a reason to. I can't find one. I don't know who I'd be doing it for."`
      ],
      choices: [
        { t: 'Take the cord out of her hand. Gently.', go: 'night_bran2', fx: { set: { e8_took_cord: 1 } } },
        { t: '"Then don\'t."', go: 'night_bran2' },
        { t: 'Sit down beside her. Not touching. Wait.', go: 'night_bran2', fx: { set: { e8_sat_by: 1 } } }
      ]
    },
    night_bran2: {
      text: [
        `She looks at the cord a long time. Then she leans over and drops it into the brazier in the corner. It smokes, and stinks, and catches.`,
        `@brannagh: "I took vows at sixteen," she says, watching it burn. "Poverty. Obedience. Fire. And the other one." She doesn't look at you. "I've never broken one. Not one. Not ever. I'm twenty-seven years old."`,
        `@brannagh: "I've broken all the rest this week. I'm thinking about the last one."`,
        `She turns her head. Her face like a church carving, and the burn down her throat, and her pupils huge in the dim. Her breathing isn't steady. She isn't asking. She's telling you where she's standing, and waiting to see where you stand.`
      ],
      choices: [
        { t: 'Kiss her. Let her decide what happens after that.', if: "bond.brannagh>=5 && f.e7_brannagh_moment==='hand'", go: 'night_bran_lovers', fx: { set: { e8_brannagh_night: 'lovers' }, bond: { brannagh: 1 } } },
        { t: '"Not tonight. Not because you\'re running from something. Ask me again when you\'re running toward it."', go: 'night_bran_restrained', fx: { set: { e8_brannagh_night: 'restrained' }, bond: { brannagh: 1 } } },
        { t: '"It\'s yours to break, Brannagh. Not mine. Whatever you choose, I\'m here."', go: 'night_bran_choice' }
      ]
    },
    night_bran_choice: {
      route: [
        { if: "bond.brannagh>=5 && f.e7_brannagh_moment==='hand'", fx: { set: { e8_brannagh_night: 'lovers' }, bond: { brannagh: 1 } }, go: 'night_bran_choice_yes' },
        { fx: { set: { e8_brannagh_night: 'restrained' }, bond: { brannagh: 1 } }, go: 'night_bran_waits' }
      ]
    },
    night_bran_choice_yes: {
      text: [
        `She looks at you like you've said something in a language she was raised to think didn't exist. *Yours.*`,
        `@brannagh: "Mine," she says, slowly, trying it.`,
        `Then she reaches up and takes your face in both hands, the blistered one and the whole one, and kisses you as if she's charging a line.`
      ],
      next: 'night_bran_lovers'
    },
    night_bran_waits: {
      text: [
        `She looks at you like you've said something in a language she was raised to think didn't exist. *Yours.*`,
        `@brannagh: "Mine," she says, slowly, trying it. She turns it over the way she turned the cord.`,
        `Then she shakes her head, once. Not at you.`,
        `@brannagh: "Then it's mine to keep a while longer." She reaches for her shirt. "I've spent my whole life doing what someone else decided in a dark room, Dray. I'll not start my new one the same way. Not the night before a fight. Not with a man I had in chains two days since."`,
        `She pulls the shirt over her head. When it comes down she's almost smiling.`,
        `@brannagh: "Ask me after. If we're both still here. I'll have an answer. I'll even tell you what it is."`
      ],
      next: 'night_end'
    },
    night_bran_lovers: {
      text: [
        `She kisses like she fights: all in, no feints, slightly too hard. Her teeth catch your lip. She tastes of road and of the smoke from the cord.`,
        `She has no idea what she's doing and absolutely no intention of letting that stop her. She pulls your shirt over your head and stops dead at the scar from collarbone to ear and puts her mouth on it, and you hear yourself make a sound you didn't know you had.`,
        `Her body is all hard angles and drill-yard muscle and there is nowhere on it that isn't marked by something. She guides your hands to the welts on her back and makes you feel them, all of them, one after the other, as if she wants you to know exactly what you're holding. Then she pushes you down on Mags's bed and climbs on top of you as if taking a wall, and the bed complains, and she laughs, out loud, astonished, the first time you've ever heard her laugh—`,
        `~ LATER.`,
        `The brazier's down to coals. She's lying on her front with her chin on her crossed arms, and you're tracing the welts, and she's letting you.`,
        `@brannagh: "That's it, then," she says, to the wall. "That's all of them. Every vow I ever made." A silence. "I thought I'd feel damned. I feel—" She can't find it. "Hungry. I feel hungry. Is that normal?"`,
        `@ansel: "Ulla's left some of the pie."`,
        `She hits you. Not hard. Then she puts her face in the pillow and her shoulders shake, and it takes you a moment to work out it isn't crying.`
      ],
      next: 'night_end'
    },
    night_bran_restrained: {
      text: [
        `She goes very still. For a second you think you've shamed her, and you'd rather take a spear.`,
        `Then something in her shoulders lets go.`,
        `@brannagh: "Toward it," she says. "Yes. All right." She almost smiles. "That's the first time anyone's told me no and meant it as a kindness."`,
        `She puts her shirt back on. Then she leans over and puts her forehead against yours, once, hard, the way soldiers do before a line, and holds it there long enough to count to ten.`,
        `@brannagh: "Ask me again," she says. "I'll be running toward it. You'll see."`
      ],
      next: 'night_end'
    },

    night_tam1: {
      loc: 'The old town wall above the tanneries — sunset',
      text: [
        `The old wall behind the tanneries is half fallen, ivy and lime-scale, a stretch of it nobody's guarded in a hundred years because there's nothing on the other side but the river. She's sitting on it with her legs dangling over a forty-foot drop, with a stoppered flask of Mags's eel-broth that she is plainly not drinking.`,
        `You climb up. You sit. There's a yard of old stone between you. Neither of you closes it.`,
        `The sun is going down over the fen. You can see Gallowmere from here: a long silver-black smear in the south, and somewhere in it, a stilt-house.`,
        `@tamsin: "Don't," she says, before you've said anything.`
      ],
      choices: [
        { t: '"Don\'t what?"', go: 'night_tam2' },
        { t: 'Say nothing. Watch the sun go.', go: 'night_tam2b' },
        { t: '"Tamsin. Whatever happens tonight—"', go: 'night_tam2c' }
      ]
    },
    night_tam2: {
      text: [
        `@tamsin: "Don't say anything nice. Not tonight. Not before." She turns the flask in her fingers. "If you say anything nice tonight I'll believe it, and then if you die I'll have to carry it, and I'm carrying enough. And if you live, I'll know you only said it because you thought you were going to die."`,
        `@ansel: "That's very complicated."`,
        `@tamsin: "I'm complicated, Sergeant. I've been in a bog."`,
        `You laugh. You don't mean to. It comes out of you sideways, and she looks at you startled, and then she's laughing too, helplessly, on the edge of a forty-foot drop, until she has to hold on to the stone.`
      ],
      next: 'night_tam3'
    },
    night_tam2b: {
      text: [
        `You watch it go. It takes a long time, the way it does in the west country: red, then copper, then the colour of her hair, then nothing.`,
        `She unstoppers the flask, takes a swallow of Mags's eel-broth, shudders all over like a wet dog, and hands it to you without looking. You drink. It's vile. You hand it back. She drinks again, because you did. You pass it back and forth until it's gone, and she drops the empty flask over the wall, and you both listen to it hit the river.`,
        `It's the longest conversation you've ever had with anyone.`
      ],
      fx: { set: { e8_tam_flask: 1 } },
      next: 'night_tam3'
    },
    night_tam2c: {
      text: [
        `@tamsin: "*Don't*." Sharp. Then softer: "Please. Whatever it is. Say it after."`,
        `@ansel: "And if there isn't an after?"`,
        `She looks at you then. In the last light her face is all copper and shadow and the chip in her tooth.`,
        `@tamsin: "Then I'll know what it was," she says. "I'll know, Sergeant. You don't have to say it. I've been listening to you not say things for three months. I'm fluent."`
      ],
      next: 'night_tam3'
    },
    night_tam3: {
      text: [
        `The stars are coming out. You feel them the way you always do: the prickle at the back of the neck, the weight, the attention.`,
        `You don't go down off the wall. You make yourself sit under them.`,
        `She notices. She doesn't say anything about it. She starts to sing instead, very quietly, under her breath: the eel and the heron. Only the first verse. She gets one of the words wrong, the way she always does, and stops.`,
        `Your hand is on the stone. Hers is on the stone. There's an inch between them, and the inch stays an inch, and it is the loudest thing on the wall.`,
        `When the Lanternhold bell rings for the Evening Lamp, she gets up first.`,
        `@tamsin: "Come on, then. Let's go and kill something."`
      ],
      next: 'night_end'
    },

    night_iso1: {
      text: [
        `Mags finds you paper. Not Pell's good paper; tavern-bill paper, with a beer ring on it. You sit at a barrel with a stub of quill and look at it until the beer ring starts to look like a face.`,
        { if: 'f.e5_iso_letter', t: `You've written to her once. A few lines, carried up the hill by an old nurse who complained about every stair. This one has to be longer.`, else: `You've never written a letter to a woman. You've written four hundred and six lines of names and a great many reports of casualties.` },
        { if: "f.e5_isolde_kiss==='kissed'", t: `You think about the archive. Dust and lamp-smoke and her mouth, once, and then her hand flat on your chest, not pushing. Just stopping.` },
        { if: "f.e5_isolde_kiss==='almost'", t: `You think about the archive. Dust and lamp-smoke and her face an inch from yours, and the door, and the steward coughing.` },
        { if: "f.e5_isolde_kiss!=='kissed' && f.e5_isolde_kiss!=='almost'", t: `You think about the wall-walk, the first morning. Grey cloak. Hair pinned up anyhow. She didn't look away.` },
        `What do you write?`
      ],
      choices: [
        { t: 'The truth. *Hask killed your father. I\'m coming tonight. Be ready. I would come if it were only for you.*', go: 'night_iso2', fx: { set: { e8_letter: 'true' }, bond: { isolde: 1 } } },
        { t: 'Orders. *At the Evening Lamp. Bar your door from inside. Keep away from the window. A.D.*', go: 'night_iso2', fx: { set: { e8_letter: 'orders' } } },
        { t: 'Four words. *I\'m not dead. Yet.*', go: 'night_iso2', fx: { set: { e8_letter: 'short' } } }
      ]
    },
    night_iso2: {
      text: [`Now you need someone to carry it into a keep full of Hask's men.`],
      choices: [
        { t: 'Hob. He knows every stable door in the Keep.', if: "f.e7_hob==='alive'", go: 'night_iso3', fx: { set: { e8_letter_by: 'hob' } } },
        { t: 'Moll. He\'s inside the walls already.', if: "f.e7_moll_turned", go: 'night_iso3', fx: { set: { e8_letter_by: 'moll' } } },
        { t: 'Wat, at the postern.', if: "f.e1_spared_wat", go: 'night_iso3', fx: { set: { e8_letter_by: 'wat' } } },
        { t: 'Tamsin. She can get in anywhere. She can\'t read it, either.', go: 'night_iso3', fx: { set: { e8_letter_by: 'tamsin' } } }
      ]
    },
    night_iso3: {
      text: [
        { if: "f.e8_letter_by==='tamsin'", t: `Tamsin takes the folded paper without a word, and turns it over once in her fingers as if she might be able to feel the words through it. Then she tucks it in her shirt and goes. She's back in an hour, scratched from a kitchen-yard wall, with a different paper. "She cried," she says flatly. "Not much. Ladies don't." She hands it over and goes back up to the roof without another word.` },
        { if: "f.e8_letter_by!=='tamsin'", t: `It goes. An hour later it comes back: a different paper, folded small, smelling of sealing wax and, faintly, of the lavender she keeps in her books.` },
        `Her hand is small and fast and absolutely level. Not a shake in it.`,
        { if: "f.e8_letter==='true'", t: `*I know who killed him. I watched them wash the floor. I have been keeping my father's books in my head for two days so that I would not go mad. Come tonight. Come for the town. And — I will not write the rest. You will have to come and hear it. — I.*` },
        { if: "f.e8_letter==='orders'", t: `*Door barred. Window shuttered. Knife under the pillow, since the night they washed the floor. You might have said please, Sergeant. You might also have said you were alive, which I gathered. Come quickly. — I.V.*` },
        { if: "f.e8_letter==='short'", t: `*Good. Don't start. — I.* And then, under it, smaller, as if added after the ink had dried and she had thought about it: *Come and get me, then.*` },
        `You read it twice. Then you put it inside your shirt, against the skin, where the roll goes when it rains.`
      ],
      next: 'night_end'
    },

    night_pell1: {
      text: [
        `Pell is sitting on the bottom step of the cellar with his hands clamped between his knees to stop them shaking. You know the shake. You've got it.`,
        `You sit next to him and put the flask of Mags's spirits between you on the step. He looks at it like a man looking at a woman he used to be married to.`,
        `@pell: "Don't," he says. "Please. Not tonight. I need to know that whatever I do tonight, I *did* it."`
      ],
      choices: [
        { t: 'Put the flask away. "Tell me about the night they threw you out."', go: 'night_pell2', fx: { bond: { pell: 1 } } },
        { t: '"You don\'t have to come. Nobody would blame you."', go: 'night_pell2b' },
        { t: 'Take the flask. Pour it out on the cellar floor. Both of you watch it go.', go: 'night_pell2', fx: { bond: { pell: 1 }, set: { e8_pell_flask: 1 } } }
      ]
    },
    night_pell2: {
      text: [
        { if: "f.e8_pell_flask", t: `He watches it soak into the dirt like a man watching a funeral. Then he laughs, shakily. "That was *good* spirits. Mags will kill us both."` },
        `@pell: "Twenty-two years I was in that house. I kept the archive. I taught the orphans their letters." He laughs, unhappily. "There was a boy, once, who went into the white ward with a fever and came out with nothing behind his eyes. I asked what had been done for him. That was my first question. I was good. I only asked the once."`,
        `@pell: "And then, two years ago, I was down in the crypt fetching a register, and I stood by the door with the two locks, and I heard breathing. Through the iron. Lots of it. Slow. Like a dormitory." He stares at his hands. "So I asked again. At chapter. In front of everyone. *What is in the crypt, Mother?*"`,
        `@pell: "She smiled at me. She said, *Prayer, Pellam.* And I was in the gutter by noon with my habit torn and every Lamplighter in Harrowgate swearing I'd been drunk at the altar." He wipes his eyes. "I had been, a bit. But that's not why. I never went back. I knew where the answer was, Ansel. I just drank until I didn't."`
      ],
      choices: [
        { t: '"You\'re going back tonight. That\'s what counts."', go: 'night_pell3', fx: { bond: { pell: 1 } } },
        { t: 'Give him the roll to hold. "Keep that for me. Till after."', go: 'night_pell3', fx: { bond: { pell: 1 }, set: { e8_pell_roll: 1 } } }
      ]
    },
    night_pell2b: {
      text: [
        `@pell: "*I* would blame me." He says it fiercely, for him. "I would. For the rest of my very short life. I have been a coward in this town for two years, Ansel, and for twenty before that I was a coward who didn't know it. I know where the crypt chute comes out. Nobody else does. I'm coming."`,
        `He picks the flask up, looks at it, and hands it back to you.`,
        `@pell: "But you can hold that. In case I'm wrong about everything."`
      ],
      next: 'night_pell3'
    },
    night_pell3: {
      text: [
        { if: "f.e8_pell_roll", t: `He takes the case in both hands like the Book of Embers. He doesn't open it. He holds it on his knees with his palms flat on the leather, and the shaking in his hands stops. You both notice. Neither of you says so.` },
        `@pell: "I was a priest, you know. Once. Properly. I believed all of it." He looks up at the grating, at the first stars. "I still believe some of it. I believe you should be kind to the dying. I believe someone should say the words. I'm just not sure, any more, who's listening."`,
        `@ansel: "Say them anyway."`,
        `@pell: "Yes," he says. "Yes. I think that's the whole of the job, really. I just took twenty-two years to ask the right question."`
      ],
      next: 'night_end'
    },

    night_sleep: {
      text: [
        `You find the top room, the one with the shutters that stick. You close them. You lie down on the bed under the roof, with Widow on the floor beside you and the case under your head.`,
        `You don't sleep. You lie in the dark and read the roll from memory instead. All four hundred and six. Then the new names on the end, the living ones.`,
        `It's the first time you've ever gone past four hundred and six. It feels like walking off the edge of a map.`,
        `Somewhere around the Evening Lamp, you realise you've stopped shaking. You don't know when.`
      ],
      next: 'night_end'
    },
    night_end: {
      loc: 'The Gutted Hen — the Evening Lamp',
      text: [
        `All over Harrowgate, the bells of the Lanternhold ring the Evening Lamp, and people stop in the streets and touch their hearts and look up at the blue tower.`,
        `In the cellar of the Gutted Hen, nobody touches anything. Ulla checks her shield-straps. Brannagh buckles on a plain steel breastplate with the paint scraped off. Tamsin strings her bow with fingers wrapped in strips of Mags's linen. Pell holds a cudgel like it's a snake.`,
        { if: "f.e4_miners==='saved'", t: `Outside in the street, the Hollowed miners have all turned their heads, together, toward the Lanternhold.` },
        `@mags: "Go on, then," says Mags. "I'll keep the good mugs out."`
      ],
      fx: { heal: 20 },
      next: 'keep0'
    },

    /* ======================= ACT THREE: THE KEEP ======================= */
    keep0: {
      card: { kind: 'act', title: 'Part Three', sub: 'Varane Keep · dusk' },
      loc: 'Harrowgate — the streets, dusk',
      text: [
        `You go up through the town in the blue hour, in twos and threes, hoods up, the way you'd move through enemy country. It is enemy country. Hask's men are on every corner of the Market Stair with torches, and every one of them has been told the dead sergeant murdered Lord Varane.`,
        `Shutters crack an inch as you pass. Faces at them. Nobody calls the watch.`,
        `On the wall of a chandler's, somebody has chalked a seven-pointed star, and then, over it, crossing it out, a crude skull with a sprig of bog myrtle in its teeth. You don't know who. You don't know what it means. You find that you like it.`
      ],
      next: 'keep1'
    },
    keep1: {
      route: [
        { if: "f.e8_keep_way==='gate'", go: 'keep_gate' },
        { if: "f.e8_keep_way==='postern'", go: 'keep_postern' },
        { go: 'keep_wall' }
      ]
    },
    keep_gate: {
      loc: 'Varane Keep — the main gate, dusk',
      text: [
        `Moll does it the way honest men do everything: plainly, in front of witnesses. He walks out to the middle of the gate passage with his helmet under his arm and says to his eleven men, "Lads. The Marshal killed his lordship. I've known it two days. I'm opening this gate for her ladyship. Any man who wants to stop me, now's the time."`,
        `Seven of them lean on their spears and look at the ground. Four don't. Moll hits the first one himself, a big round-arm punch like a man swinging a sack of meal.`,
        `Then the gate is open and you're through it, and up in the inner ward somebody is shouting for the Marshal's crossbows.`
      ],
      fx: { rep: { varane: 1 } },
      next: 'keep_fight'
    },
    keep_postern: {
      loc: 'Varane Keep — the postern, dusk',
      text: [
        `The postern opens before you knock. Wat stands in it with a lantern, taller than you remember, a fuzz of beard, a Varane tabard that fits him.`,
        `@wat: "Sergeant Dray." He grins, and it's the boy in the river again for a second. "Still square, Sergeant. Come on, quick, they change the inner watch at the bell—"`,
        `You're three steps into the kitchen yard when the inner watch comes round the corner early, and the first of them sees Wat's face, and understands.`
      ],
      fx: { know: { cast: ['wat'] } },
      next: 'keep_fight'
    },
    keep_wall: {
      loc: 'Varane Keep — the kitchen-yard wall, dusk',
      text: [
        `Tamsin's grapple goes over the kitchen-yard wall on the second throw and bites. She's up the rope like a cat with her bow on her back, and she lets it down for you, and you climb, with your arm and your back and your whole body reminding you it was in a bog this morning.`
      ],
      choices: [
        { t: 'Climb fast and quiet.', check: { stat: 'finesse', dc: 14, pass: 'keep_wall_ok', fail: 'keep_wall_fail' } },
        { t: 'Climb slow and sure. It\'s a long way down.', check: { stat: 'grit', dc: 13, pass: 'keep_wall_ok', fail: 'keep_wall_fail' } }
      ]
    },
    keep_wall_ok: {
      text: [
        `You go over the top and drop into the kitchen yard among the bins and the startled cats, and the others come after you one by one, Ulla last and swearing at the rope. Nobody has seen. For about a minute.`,
        `Then a scullion comes out with a slop-bucket and stops and screams, and the inner watch comes round the corner at a run.`
      ],
      fx: { xp: 30 },
      next: 'keep_fight'
    },
    keep_wall_fail: {
      text: [
        `Halfway up, the rope swings, and you slam into the wall and lose a handful of skin and most of your breath. Above you, a sentry looks over the parapet straight into your face.`,
        `Tamsin puts an arrow through his open mouth before he can shout. He falls past you, all the way down, and hits the kitchen-yard cobbles like a dropped sack. It's loud enough. The inner watch comes running.`
      ],
      fx: { hp: -6 },
      next: 'keep_fight'
    },
    keep_fight: {
      fight: { foes: ['man_at_arms', 'man_at_arms', 'crossbowman'], title: 'The Inner Ward', win: 'keep_after', allies: ['ulla', 'brannagh', 'tamsin'],
        intro: 'Varane livery, Hask\'s orders. Kill the crossbow first if you can.' }
    },
    keep_after: {
      text: [
        `The last man-at-arms goes down on the steps of the hall with Ulla's axe in his collarbone, and sits there looking at it, and says "Oh, *bugger*," quite clearly, and dies.`,
        `The rest of the household guard, the old Varane men, come out of the barracks in their shirts with their swords in their hands and stand and look at you, and at the dead Marshal's men, and at each other.`,
        `@ansel: "Her ladyship," you say. "Where?"`,
        `An old sergeant with a white beard points up, at the solar tower. He doesn't say anything. He doesn't need to.`,
        `On the gallery above the hall door, a man in gold-embroidered black is leaning on the rail with a cup of wine, watching all of this with the polite attention of a man at someone else's wedding.`
      ],
      next: 'cassius1'
    },
    cassius1: {
      text: [
        `Prince Cassius Aldermere raises his cup to you.`,
        `@cassius: "Sergeant. Don't mind me. I'm neutral." He drinks. "I'm *extremely* neutral. I've been neutral all week. It's exhausting."`,
        { if: "f.e5_melee==='won'", t: `@cassius: "Gideon's been asking after you, you know. He's never been put on his back in a melee before. He's insufferable about it. He says it was a privilege."` },
        { if: "f.e5_delphine", t: `Behind him, in the shadow of the gallery arch, a woman with dark curls and a silk robe is watching you too. Delphine. She lifts two fingers from the rail, very slightly, and you can't tell if it's a greeting or a warning.` },
        `@cassius: "Do carry on. I'll be down for the ending."`
      ],
      choices: [
        { t: '"Whose side are you on, Highness?"', go: 'cassius2', fx: { set: { e8_cass: 'asked' } } },
        { t: '"Stay up there. If you come down before I say, I\'ll assume you\'re Hask\'s."', go: 'cassius2', fx: { set: { e8_cass: 'threat' } } },
        { t: 'Ignore him. Go up the tower.', go: 'isolde1', fx: { set: { e8_cass: 'ignored' } } }
      ]
    },
    cassius2: {
      text: [
        { if: "f.e8_cass==='asked'", t: `@cassius: "Whoever's standing at the end, naturally." He smiles, entirely without shame. "That's not cynicism, Sergeant, it's *statecraft*. Ask Konrad. Actually, don't ask Konrad. I suspect he's about to learn it the hard way."` },
        { if: "f.e8_cass==='threat'", t: `Cassius laughs, delighted. A couple of his own guards, behind him in the gallery, put their hands on their swords. He waves them off. "You'd assume correctly about half the time," he says. "Go on. Fetch my bride. I'll stay exactly here. I'm very good at staying exactly here."` },
        `You go up the tower stairs two at a time.`
      ],
      next: 'isolde1'
    },
    isolde1: {
      loc: 'Varane Keep — Lady Isolde\'s rooms',
      text: [
        `Her door is barred from inside. When you say your name through it there is a long silence, and then the bar scrapes, and the door opens.`,
        `She's in black. Mourning black, plain wool, buttoned to the throat. Her hair is pinned up anyhow, the way it was the first morning, and there's a little knife in her right hand, a fruit knife, held exactly the way someone has told her to hold it. On the desk behind her, the ledgers of Harrowgate are open, and a candle has burned down to the stub.`,
        `Lady Isolde Varane looks at you, covered in peat and lime and somebody else's blood, and doesn't say anything at all.`,
        { if: "f.e8_letter", t: `The corner of a beer-ringed piece of tavern paper is showing at the neck of her dress.` },
        { if: "f.e5_ledger_to==='isolde'", t: `@isolde: "They found your Saltdown ledger in my father's desk," she says. "That's how Konrad knew we knew. I don't regret giving it to him. I want you to know I don't."` },
        { if: "f.e5_ledger_to==='kept'", t: `@isolde: "And this was in Konrad's tower." She lifts a book with a broken clasp off the desk: the Saltdown ledger, the one you kept, the one the Marshal's man took off Brannagh's table. On the last page, in a different hand, bold and neat: *Fifth share to K.H.* "He added himself," she says. "He couldn't help it. He likes to see his name in a column."` },
        `@isolde: "You're alive," she says. Her voice is perfectly level. Her hand with the knife in it is not.`
      ],
      choices: [
        { t: '"My lady." Bow. Properly.', go: 'isolde2', fx: { set: { e8_iso_greet: 'lady' }, rep: { varane: 1 } } },
        { t: '"Isolde." Just that.', go: 'isolde2', fx: { set: { e8_iso_greet: 'name' } } },
        { t: 'Take the knife out of her hand. Gently. "You can put that down now."', go: 'isolde2', fx: { set: { e8_iso_greet: 'knife' } } }
      ]
    },
    isolde2: {
      text: [
        { if: "f.e8_iso_greet==='lady'", t: `Something flickers in her face: relief, and a kind of disappointment, both. "Sergeant Dray," she says, and curtseys, exactly as deep as the occasion requires. "How very correct of you. My father would have liked that."` },
        { if: "f.e8_iso_greet==='name'", t: `She closes her eyes. Just for a breath. Nobody has called her that since her father died. You can see it go into her and land somewhere.` },
        { if: "f.e8_iso_greet==='knife'", t: `She lets you take it. Her fingers are cold and have been clenched so long they've gone white at the knuckles, and she looks at them, after, as if they belong to someone else. "I've been holding it since the night they washed the floor," she says. "I was afraid that if I put it down I'd forget how."` },
        { if: "f.e5_isolde_kiss==='kissed'", t: `For a second she sways toward you, and you remember the archive, and so does she. Then she stops herself, a hand's breadth away, and you watch her decide, with enormous effort, that this is not the moment, and that there may never be one.` },
        `@isolde: "They washed the floor of his solar," she says. "Twice. Konrad stood in the doorway and wept and told me you'd done it, and I said *of course*, and *how terrible*, and *thank you, Marshal*, and then I went to my room and I counted. I counted every silver penny the March owes, to the shilling. It took all day and all night. It was the only thing that kept me in my head."`,
        `@isolde: "I'm the Lady of Harrowgate now. Not my husband's, not the Crown's. Mine. Until somebody takes it away." She picks up her father's seal-ring from the desk and puts it on her thumb, the only finger it fits. "Where is he?"`
      ],
      next: 'isolde3'
    },
    isolde3: {
      text: [
        `@ansel: "The Lanternhold. With the Abbess. Tonight she empties fourteen children to buy him a title."`,
        `It goes through her like a blade. You watch her take it, and file it, and go cold.`,
        `@isolde: "Then go." She turns to the window: the blue tower, burning above the town. "Take my father's men. The old ones, the ones who loved him. Say it's my order and see if they move."`,
        `@isolde: "And Ansel." She doesn't turn round. "Bring me Konrad Hask alive, if you can. I want to hang him in my own name, in my own square, in front of my own people, so they know whose town it is. But if you can't—" A breath. "I'll not hold it against you. I know what he owes you. I know it isn't mine to collect."`
      ],
      choices: [
        { t: '"If I can, my lady. I promise."', go: 'lant1', fx: { set: { e8_iso_ask: 'promised' } } },
        { t: '"I won\'t promise you that. I won\'t lie to you."', go: 'lant1', fx: { set: { e8_iso_ask: 'honest' } } },
        { t: '"He\'s mine. He\'s been mine for six years."', go: 'lant1', fx: { set: { e8_iso_ask: 'mine' } } }
      ]
    },

    /* ======================= ACT FOUR: THE LANTERNHOLD ======================= */
    lant1: {
      card: { kind: 'act', title: 'Part Four', sub: 'The Lanternhold · midnight' },
      loc: 'The Lanternhold — the gate, midnight',
      text: [
        `Midnight on Saint Corran's Eve, and the whole of Harrowgate is awake and pretending not to be. Shutters cracked an inch. Faces at them.`,
        `You come up the hill with forty tanners and the old Varane household and a deserter of the Lamp and a defrocked priest and a Nordvik exile, and none of you are pretending anything.`,
        { if: "f.e7_moll_turned", t: `Moll's spearmen hold the bottom of the hill, so Hask's men in the town can't come up behind you. Moll stands in the middle of the street with his helmet on and his arms folded and doesn't let anyone past, and nobody tries very hard.` },
        { if: "f.e4_miners==='saved'", t: `And ahead of you all, the miners. Nobody led them. They walked up the hill in a silent column a quarter-hour before you, the Hollowed of Saltdown, and now they are standing in front of the Lanternhold gate in a long grey line, facing it, the way they stood outside the Hen. The crossbowmen on the gatehouse have their bows levelled at them and are not shooting. You can see one of them crying. They look like his neighbours. They *are* his neighbours.` },
        { if: "f.e7_hob==='alive'", t: `Hob walks beside you carrying the Varane boar on a pole, because Isolde's old sergeant handed it to him and he hasn't worked out how to give it back. His face is white. He doesn't drop it.` },
        `Above the gatehouse, the lantern-tower is burning a blue so bright it hurts, and from somewhere far down inside the building, under the stone, you can hear singing.`
      ],
      next: 'lant_route'
    },
    lant_route: {
      route: [
        { if: "f.e3_rusk==='allied' || f.e3_rusk==='bedded'", go: 'lant_rusk' },
        { go: 'lant_norusk' }
      ]
    },
    lant_rusk: {
      text: [
        `Mags's tanners roll a hay-wain full of lamp oil against the Lanternhold gate and Tamsin puts a fire-arrow into it, and it goes up with a sound like a great breath drawn in.`,
        `And out of the dark on the western road, as if the fire was a summons, which it was, comes a crossbow bolt that takes the gatehouse sergeant through the eye. Then thirty more.`,
        `Rusk of the Thornwood steps out of the smoke with Husband on her shoulder and her scarred face lit up orange.`,
        { if: "f.e3_rusk==='bedded'", t: `@rusk: "You never write," she says, and kisses you on the cheek, quick and hot, as she goes past. "Shall we?"` },
        { if: "f.e3_rusk==='allied'", t: `@rusk: "You lit a fire," she says. "I came to see what was burning. Is it a church? Tell me it's a church."` },
        `The gate burns through and falls in, and behind it, in the yard, the Abbess's own are waiting: white robes, censers, and Brother Cade in full plate, a Lampwarden who didn't desert, looking at Brannagh across the fire with pure hatred.`
      ],
      fx: { know: { cast: ['rusk'] } },
      next: 'lant_fight_rusk'
    },
    lant_norusk: {
      text: [
        `Mags's tanners roll a hay-wain full of lamp oil against the Lanternhold gate and Tamsin puts a fire-arrow into it, and it goes up with a sound like a great breath drawn in.`,
        `The gate burns through and falls in. Behind it, in the yard, the Abbess's own are waiting: white robes, censers, faces you've seen spooning soup in the white ward. And a Lampwarden in full plate who didn't desert, and who looks at Brannagh across the burning gate with pure hatred.`,
        `@brannagh: "Brother Cade," says Brannagh. "I'm sorry."`,
        `He spits.`
      ],
      next: 'lant_fight'
    },
    lant_fight_rusk: {
      fight: { foes: ['zealot', 'cultist', 'cultist'], title: 'The Lanternhold Gate', win: 'lant_yard', allies: ['rusk', 'ulla', 'brannagh'],
        intro: 'The Abbess\'s own. They love her. They will not stop.' }
    },
    lant_fight: {
      fight: { foes: ['zealot', 'cultist', 'cultist'], title: 'The Lanternhold Gate', win: 'lant_yard', allies: ['ulla', 'brannagh', 'tamsin'],
        intro: 'The Abbess\'s own. They love her. They will not stop.' }
    },
    lant_yard: {
      loc: 'The Lanternhold — the yard under the tower',
      text: [
        `The acolytes die singing. Every one of them. It is the worst sound you have ever heard men die to, and you have heard most.`,
        `In the middle of the yard, under the blue tower, stands the iron-and-glass carriage-cage. It has been unhitched and chained to the flagstones. The glass is fogged from inside.`,
        `In it, Oriel is standing with her shaven tattooed head tipped back and her silver eyes open on the sky, and she is singing in a voice that is not hers. A great voice, made of many, pouring out of a body as thin as a wire. There is blood at the corners of her mouth. She has been singing since yesterday.`,
        `The lock on the cage door is a Lamp lock, seven wards.`
      ],
      choices: [
        { t: '"Brannagh. The key."', go: 'oriel1', fx: { set: { e8_cage: 'key' } } },
        { t: '"Tamsin. Can you pick it?"', go: 'oriel_pick' },
        { t: 'Take Widow to the glass.', check: { stat: 'might', dc: 14, pass: 'oriel_smash', fail: 'oriel_smash_fail' } }
      ]
    },
    oriel_pick: {
      text: [
        `@tamsin: "Seven wards." She's already kneeling at it with her picks in her bandaged fingers. "Lamp locksmiths. Proud bastards. Hold the lantern— *there*."`,
        `It takes her eleven heartbeats. You count. She'll tell you, later, that it was nine.`
      ],
      fx: { set: { e8_cage: 'pick' } },
      next: 'oriel1'
    },
    oriel_smash: {
      text: [
        `You put Widow's pommel through the glass. It doesn't shatter so much as *give up*, the whole pane at once, a long shriek of cracking, and falls in sheets around her feet.`,
        `The singing doesn't stop. She doesn't even flinch.`
      ],
      fx: { set: { e8_cage: 'smash' } },
      next: 'oriel1'
    },
    oriel_smash_fail: {
      text: [
        `Widow's pommel bounces off the glass and jars your arm to the shoulder. The glass is thicker than it looks. Lamp glass. Of course it is.`,
        `@brannagh: "Here," says Brannagh, and pulls the key on its cord over her head and puts it in the lock, and turns it, and it's that simple.`
      ],
      fx: { set: { e8_cage: 'key' } },
      next: 'oriel1'
    },
    oriel1: {
      text: [
        `You step into the cage, and the singing stops.`,
        `Not trails off. *Stops*, mid-word, the way a bell stops when you put your hand on it. Oriel sways. Her silver eyes come down off the sky and find nothing, and keep looking for nothing, and then, slowly, her face does something you have never seen it do. It relaxes.`,
        `@oriel: "Oh," she says, in her own voice. Small and cracked and dry. "Oh. *There* you are. It's so quiet."`,
        `She reaches out blindly and finds your coat, and holds it, and leans her forehead against your chest, and breathes. Just breathes. You can feel her ribs through the shift.`
      ],
      fx: { set: { e8_oriel: 'freed' }, party: { add: ['oriel'] }, know: { cast: ['oriel'] } },
      choices: [
        { t: 'Hold her. Just hold her a moment.', go: 'oriel2', fx: { bond: { oriel: 1 }, set: { e8_held_oriel: 1 } } },
        { t: '"Can you walk?"', go: 'oriel2' },
        { t: '"What were you singing?"', go: 'oriel2b' }
      ]
    },
    oriel2: {
      text: [
        `She stays there, her forehead against you, for exactly as long as she needs. Then she lifts her head.`,
        `@oriel: "They've been singing through me since yesterday," she says. "Calling. The Abbess asked me to. She said it was a hymn. It wasn't a hymn." Her blind eyes turn to the tower. "It was a *bell*. The kind you ring at the end of a long table."`,
        `@oriel: "They're coming down, Ansel. One of them. A little one. A *piece*. It's coming down the tower for the children, and it's very close now, and it's so *hungry*." Her fingers tighten in your coat. "But it can't see you. It doesn't know you're here. You're the only thing in the whole building it can't see."`
      ],
      next: 'ward1'
    },
    oriel2b: {
      text: [
        `@oriel: "A bell," she says. "The kind you ring at the end of a long table."`,
        `She lets go of your coat and stands on her own, swaying, and turns her blind face to the tower.`,
        `@oriel: "The Abbess said it was a hymn. It isn't. It's an *invitation*. They're coming down, Ansel. A piece of them. It's coming down the tower for the children, and it's so close now, and it's so *hungry*." She tilts her head, listening to something you'll never hear. "It can't see you. It doesn't know you're here. You're the only thing in the whole building it can't see."`
      ],
      next: 'ward1'
    },
    ward1: {
      loc: 'The Lanternhold — the white ward',
      text: [
        `The way to the crypt is through the white ward.`,
        `It is just as you remember from the gate, the first morning: long, white, clean, beds in rows. The Emptied of Harrowgate sit up in them, or lie, with their eyes open. Someone has fed them supper tonight. Someone has tucked them in.`,
        { if: "f.e1_ashby==='led'", t: `Halfway down, the smith from Ashby. And in the next bed, a girl of ten with a doll in her lap, still held by one leg. She turns her head as you pass, slowly, and watches you go, the way she watched you in the square.` },
        `At the far end of the ward are fourteen small beds, made up neatly with grey blankets. All of them empty.`,
        `Brannagh stops at the first one. She puts her hand on the pillow. There is a little straw doll on it, made by a child, for a child.`,
        `@brannagh: "Martje," she says. "Her name was Martje. She told me I had a nice horse."`
      ],
      next: 'door1'
    },
    door1: {
      loc: 'The Lanternhold — the crypt door',
      text: [
        `The crypt door is iron, black, with the seven-point star cast into it as high as a man. It is barred from the other side. Ulla puts her shoulder to it and it doesn't so much as rattle.`,
        `Under your feet, through the stone, the singing has got louder.`,
        `@pell: "There's another way." Pell's voice is thin and high and very steady. "The ossuary chute. Where they used to tip the bones down, before the Kindling was mandatory. It comes out behind the crypt door, on the stair. It's too narrow for any of you." He smiles horribly. "Two years of drink and I've still got the shoulders of a choirboy. I'll go down and lift the bar."`,
        `@ansel: "Pell—"`,
        `@pell: "I asked the question, Ansel. *What is in the crypt, Mother?* I'm going down to get the answer."`
      ],
      next: 'door_route'
    },
    door_route: {
      route: [
        { if: "bond.pell>=4", go: 'pell_live' },
        { go: 'pell_die' }
      ]
    },
    pell_live: {
      text: [
        `He goes into the chute head-first, with his cudgel in his teeth, and his boots disappear, kicking, and then there's nothing for a while but a scraping, and a thump, and swearing in High Lampish.`,
        `Then shouting, on the far side of the door. Pell's voice: *"No, no, Brother Simeon, I know you, I taught you your letters, put that down—"* A crack of wood on bone. Another.`,
        `The bar scrapes. The door swings inward.`,
        `Pell is standing on the crypt stair with his cudgel broken in half, blood running down his face from his scalp, and two acolytes groaning at his feet, and he is laughing and crying at once.`,
        `@pell: "I *did* it," he says. "I did it, Ansel. I asked the question and I came back and I— oh, I think I'm going to be sick."`,
        `He is. Then he wipes his mouth and picks up half a cudgel and turns round and starts down the stair ahead of you, toward the singing.`
      ],
      fx: { set: { e8_pell: 'alive' } },
      next: 'door_fight'
    },
    pell_die: {
      text: [
        `He goes into the chute head-first, with his cudgel in his teeth, and his boots disappear, kicking, and then there's nothing but a scraping, and a thump.`,
        `Then shouting, on the far side of the door. Pell's voice: *"No, no, Brother Simeon, I know you, I taught you your letters—"* A sound you know. A blade going in. Pell's voice again, higher. Another blade.`,
        `And under it, unbelievably, the bar scraping. Inch by inch. Somebody is lifting it who shouldn't be able to lift anything.`,
        `The door swings inward.`,
        `Pell is on the crypt stair with his back against the bar he has just lifted, holding it up with his shoulders, because if he lets go it will fall back into its brackets. There are three knives in him. Two acolytes are hacking at him and he is not letting go.`
      ],
      fx: { set: { e8_pell: 'dead' } },
      next: 'pell_die_fight'
    },
    pell_die_fight: {
      fight: { foes: ['cultist', 'cultist'], title: 'The Crypt Door', win: 'pell_die2', allies: ['ulla', 'tamsin', 'brannagh'],
        intro: 'Pell is holding the door with his body. Get to him.' }
    },
    pell_die2: {
      text: [
        `You kill them on top of him. Then he lets go of the bar, and it falls into its brackets with a clang, behind you now, and he slides down the wall and sits on the stair.`,
        `You kneel. You know how this goes. You've seen four hundred and five of them.`,
        `@pell: "I asked," he says. His mouth is full of blood. "Didn't I. I asked the question."`,
        { if: "f.e8_pell_roll", t: `He fumbles inside his robe. The roll-case. He's kept it dry. He pushes it at you with both hands. "Kept it," he says. "Didn't open it. Wasn't mine."` }
      ],
      choices: [
        { t: 'Take his hand. "You asked. You got the answer. You opened the door."', go: 'pell_die3' },
        { t: '"Say the words, Pell. Say them for yourself. I\'ll listen."', go: 'pell_die3b' },
        { t: '"I\'ll put your name on the roll. The next line. In ink."', go: 'pell_die3c' }
      ]
    },
    pell_die3: {
      text: [
        `He grips your hand. His is cold already.`,
        `@pell: "Not the answer I wanted," he says. "Still. A scholar takes what the footnote gives him."`,
        `He laughs, and it turns into something else, and then he is looking past you up the stair at something you can't see. His face goes mild and polite, the way a man's face goes when someone he doesn't know very well comes into the room.`,
        `@pell: "Oh," he says, to the air beside you. "It's you. You've got a book." A pause. "Am I in it?"`,
        `He listens. Then he smiles, an enormous, private, delighted smile, as if he has been told a very good joke.`,
        `And he's gone.`
      ],
      next: 'pell_die4'
    },
    pell_die3b: {
      text: [
        `He starts the Litany of the Lit Road. *Saints keep me on the road; Saints light the dark before me; Saints—* He stops. He thinks about it.`,
        `@pell: "No," he says. "Not that one. Not any more." And instead, very softly, in a fen accent he must have picked up somewhere in two years of gutters, from a woman in the Tanners' Bottom maybe, from a drinking companion:`,
        `@pell: "Go down easy."`,
        `He says it to himself. Then he does.`
      ],
      fx: { rep: { fen: 1 } },
      next: 'pell_die4'
    },
    pell_die3c: {
      text: [
        `@pell: "With the soldiers?" He coughs, a wet, ghastly laugh. "Oh, they'll *hate* that. A priest at the end of the line. They'll never let me hear the last of it."`,
        `@pell: "Pellam Orme. Two Ls in Pellam. People always get it wrong." His eyes are going. "Doorkeeper. Put *doorkeeper*. I always wanted a proper title."`,
        `@ansel: "Doorkeeper."`,
        `@pell: "Good," he says. "Good. That's—"`,
        `He doesn't finish. Pell never could finish a sentence when there was a better one coming. There isn't, this time.`
      ],
      fx: { set: { e8_pell_title: 1 } },
      next: 'pell_die4'
    },
    pell_die4: {
      text: [
        `You close his eyes. Ulla picks him up in her arms like a child and lays him on the step out of the way, and puts his broken cudgel on his chest, and his hands over it.`,
        `Below you, down the stair, the singing has got so loud the stones are humming with it. And under the singing, a man's voice, cheerful, warm, the voice that taught you how to hold a sword.`,
        `@hask: "That'll be my sergeant."`
      ],
      fx: { party: { remove: ['pell'] } },
      next: 'hask1'
    },
    door_fight: {
      fight: { foes: ['cultist', 'cultist'], title: 'The Crypt Stair', win: 'door_after', allies: ['ulla', 'tamsin', 'pell'],
        intro: 'More of the Abbess\'s own, coming up the stair.' }
    },
    door_after: {
      text: [
        `Two more on the stair, white-robed, singing, and then not singing.`,
        `Below you, the singing has got so loud the stones are humming with it. And under the singing, a man's voice, cheerful, warm, the voice that taught you how to hold a sword.`,
        `@hask: "That'll be my sergeant."`
      ],
      next: 'hask1'
    },

    /* ======================= THE CRYPT STAIR ======================= */
    hask1: {
      loc: 'The Lanternhold — the crypt stair',
      fx: { heal: 40, st: 3 },
      text: [
        `He is sitting on the stair halfway down, where it turns, with Kingsmercy across his knees and a cup of wine beside him on the step, like a man waiting for a friend outside a tavern.`,
        `He's in a good blue coat. His beard is trimmed. He has, you realise, dressed for this.`,
        `Behind him, below, the stair opens into a great vaulted dark full of white light and singing. You can't look at it straight.`,
        `@hask: "Ansel." He spreads his hands. "Dead *twice*. You're getting greedy."`,
        { if: "f.e1_hask_meeting==='spat'", t: `@hask: "You spat on my boot, at the gate. I've still got the boot. I couldn't bring myself to clean it. Isn't that odd?"` },
        { if: "f.e1_hask_meeting==='drew'", t: `@hask: "You drew on me at the gate. I said *not today*. Well." He looks round the stair. "It's today, isn't it."` },
        { if: "f.e1_hask_meeting==='swallowed'", t: `@hask: "You took your hand off your sword at the gate, one finger at a time. I watched you do it. I thought, *there's the cleverest man I ever trained.* I thought you'd come round."` },
        { if: 'f.e1_hask_meeting', t: `@hask: "Six years tonight, Dray. Saint Corran's Eve. I brought a bottle. I always do." He lifts the cup to you, and drinks, and sets it down on the step with care.` },
        `He stands, and stretches, and his knees crack. He's forty-six. He's still the best swordsman in the March.`,
        `@ulla: "We take him together," says Ulla, behind you. "Four on one. No shame in it."`
      ],
      choices: [
        { t: '"No. Go down. Stop the rite. He\'s mine."', go: 'hask2', fx: { set: { e8_duel: 'alone' } } },
        { t: '"We were never the same, Konrad."', go: 'hask2', fx: { set: { e8_duel: 'never' } } },
        { t: '"Tell me why. Once. All of it."', go: 'hask2', fx: { set: { e8_duel: 'why' } } }
      ]
    },
    hask2: {
      text: [
        { if: "f.e8_duel==='alone'", t: `Hask steps aside on the stair, courteously, to let them pass. Ulla looks at you. Brannagh looks at you. Then they go down past him, into the light, and he doesn't lift a finger to stop them. "Let them go," he says. "They can't stop it. Nobody can. But I'd rather it was just us. I always would."` },
        { if: "f.e8_duel!=='alone'", t: `Hask nods past you at the others. "Send them down. Go on. They can't stop it, but they can try, and you and I have something to finish that isn't any of their business." After a moment, you nod. They go down past him into the light. He doesn't lift a finger.` },
        `@hask: "We were the same, Dray." He says it gently, as if breaking bad news. "That's what you've never forgiven me for. Not the Ford. *That*."`,
        `@hask: "My father was a tanner too, did you know? Corvane, the Lime Street pits. Paid the Lamp every penny it asked for, every year of his life, and the winter he came up short the tithe-wardens flogged him at the edge of his own pit, and he died of it inside the week. I was nine. I stood in the lime and watched. And I promised myself I'd never stand in lime again as long as I lived, and never pay a debt I could sell instead." He smiles. "You know that promise. You made it too. Different words."`,
        `@hask: "At the Ford, the Duke of Ashwick offered me four thousand in gold and a pardon. And I counted. Four hundred men who'd be dead in a year anyway, of flux, of the next war, of drink, of a lord who'd hang them for poaching. Or four hundred men dead on a Tuesday and one man who'd never stand in lime again." He shrugs. "I did the arithmetic, Ansel. Everybody sells. I just got a good price."`,
        { if: "f.e8_duel==='never'", t: `@hask: "Never the same? You'd have done it. If you'd been captain. If the gold had been offered to you. You'd have hated yourself, and you'd have done it, and you'd have kept a roll." He smiles. "I just didn't bother with the roll."` },
        { if: "f.e8_duel==='why'", t: `@hask: "That's all of it. There's no secret. I'm sorry. I think you wanted there to be a secret." He looks genuinely sad. "You always wanted things to mean more than they do."` },
        `He brings Kingsmercy up, two-handed, the guard he taught you when you were fifteen.`,
        `@hask: "Come on, then, sergeant. Show me what I made."`
      ],
      next: 'hask_fight'
    },
    hask_fight: {
      fight: { foes: ['hask'], title: 'The Crypt Stair', win: 'hask_down', solo: true, noLoot: true,
        intro: 'He taught you every move he is about to use. He taught you the feint is a lie. Guard against Kingsmercy.' }
    },
    hask_down: {
      text: [
        `It is not like a song. It is two men on a narrow stair, hacking and shoving and slipping, breath sawing, the old tricks failing because both of you know them. He opens your cheek. You break two of his fingers with Widow's cross-guard. He gets inside your reach and you headbutt him, which he never taught you, which you learned in a pit-fight in a Lowmarch barn, and his nose goes, and he staggers.`,
        `And then you do the thing he did teach you: drop the guard, the Red Company feint, the lie. He knows it's a lie. He's forty-six and his eyes are full of blood and for one half-heartbeat he forgets.`,
        `Widow goes in under his arm, through the good blue coat, through the ribs. Not to the heart. Not quite.`,
        `Kingsmercy rings down the stair, step by step by step, into the light.`,
        `Konrad Hask sits down on the crypt stair, where he was sitting when you came, and puts his hand over the wound, and looks at the blood with professional interest.`,
        `@hask: "There he is," he says. "There's my sergeant."`
      ],
      fx: { quest: { id: 'hask', state: 'done', note: 'You beat Konrad Hask on the crypt stair under the Lanternhold.' } },
      choices: [
        { t: 'Kill him. Here. On the stair. *Konrad Hask, Captain. Of Corvane.*', go: 'hask_kill', fx: { set: { e8_hask: 'killed' } } },
        { t: '"You\'ll go to Saltdown. You\'ll dig salt beside the people you sold, as long as you last. In lime, Konrad. Up to the knees."', go: 'hask_salt', fx: { set: { e8_hask: 'hollowed' } } },
        { t: '"You belong to her ladyship. She\'s going to hang you in her own name."', go: 'hask_justice', fx: { set: { e8_hask: 'justice' }, rep: { varane: 2, town: 1 } } }
      ]
    },
    hask_kill: {
      text: [
        `He sees it in your face. He doesn't beg. You'd have bet your life he would beg, and you'd have lost.`,
        `@hask: "Go on, then." He tips his head back against the wall, exposing his throat, like a man at the barber's. "I've been on your list six years. First line, top of the sheet, in your best hand. You were just waiting for me to catch up with the rest of it."`,
        `You put Widow's point in the hollow of his throat, where he put the letter knife in Lord Varane's.`,
        `@ansel: "Konrad Hask," you say. "Captain. Of Corvane."`,
        `@hask: "Don't strike me out," he says, and smiles. "I'd hate that." And you push.`,
        `It's quick. You know how to make it quick. Afterward you sit on the step beside him for a while with your sword across your knees, the way he was sitting when you came, and you find, to your astonishment, that you are not angry any more. You are just very, very tired.`
      ],
      next: 'hask_blade'
    },
    hask_salt: {
      text: [
        `He goes white. Whiter than the wound has made him. For the first time all night, Konrad Hask is afraid.`,
        `@hask: "Ansel. *Ansel*. Kill me. You can't— not lime, I told you about the lime, I told you about my *father*—"`,
        `@ansel: "You did."`,
        `@hask: "It's not *mercy*. Don't you dare call it mercy—"`,
        `@ansel: "I didn't. I don't think it's mercy either."`,
        `You bind his ribs yourself, tight, the way a field surgeon would, so he'll live long enough. He weeps the whole time. Real tears. You've seen him do it before, in Lord Varane's solar. You didn't believe them then either.`
      ],
      fx: { rep: { town: 1 } },
      next: 'hask_blade'
    },
    hask_justice: {
      text: [
        `He laughs, and it hurts him, and he does it anyway.`,
        `@hask: "Isolde. Little Isolde, with her ledgers." He wipes his mouth. "She'll do it properly, too. Trial. Witnesses. A good rope. She'll make a speech." He shakes his head. "You're giving me to a *clerk*, Ansel. After all this."`,
        `@ansel: "I'm giving you to the Lady of Harrowgate."`,
        `@hask: "Same thing, these days." He looks at you a long moment. "You've changed. You'd never have done that, before. You'd have just killed me and gone and got drunk."`,
        `You bind his ribs so he'll live to hang. He lets you.`
      ],
      next: 'hask_blade'
    },
    hask_blade: {
      text: [
        `Kingsmercy is lying three steps down, where it fell, half in the white light from the crypt below. Corvane steel. Beautiful. Balanced like a wish. You've wanted it since you were fifteen and watched him clean it by a campfire.`,
        `It was paid for with four hundred and five lives.`
      ],
      choices: [
        { t: 'Take it. It\'s owed.', go: 'rite1', fx: { give: { hask_blade: 1 }, equip: 'hask_blade', set: { e8_kingsmercy: 'taken' } } },
        { t: 'Take it, but keep Widow in your hand. Kingsmercy goes on your back.', go: 'rite1', fx: { give: { hask_blade: 1 }, set: { e8_kingsmercy: 'kept' } } },
        { t: 'Leave it on the stair. Widow has never failed you.', go: 'rite1', fx: { set: { e8_kingsmercy: 'left' } } }
      ]
    },

    /* ======================= THE RITE ======================= */
    rite1: {
      loc: 'The Lanternhold — the crypt',
      text: [
        `The crypt is older than the Lanternhold. Older than the Lamp, maybe. A round vault of grey stone, and in the centre of the roof a shaft, a perfect circle, going straight up into the dark: the inside of the lantern-tower. A chimney to the sky.`,
        `Down the shaft, very slowly, the light is coming.`,
        `On the floor beneath it, chalked in tithe-chalk, a seven-pointed star as wide as a threshing floor. On each point of the star, and between the points, on cold stone slabs, the children lie. Fourteen of them in grey shifts, hands folded, eyes open, mouths open. Breathing. Waiting. Some drug in them; they don't move. One of them is crying without making a sound.`,
        `And in the middle of the star, in her white wimple, her arms raised to the light, humming, the Abbess.`,
        `Morwenna Sallow is sixty-two years old and smells of honey and lamp oil, and she is singing the children up to heaven in a sweet, cracked, motherly alto, and tears are running down her face.`,
        `Brannagh and Ulla and Tamsin are on the edge of the star, and they cannot get any closer. The light is pressing them back like a gale.`
      ],
      next: 'rite2'
    },
    rite2: {
      text: [
        `It comes down the shaft and into the crypt, and it is not a light.`,
        `It is a column of white, singing brightness, taller than a church door, and it is *full of faces*. They move in it like fish in a stream, rising and turning, mouths open, all singing the same note. Hundreds. Thousands. Old men. Babies. Soldiers.`,
        `You know some of them.`,
        `A girl of twenty with a blue ribbon in her hair: Annet, Isolde's maid, whose body is sitting in a white ward upstairs. A little girl from Ashby, still holding, somehow, in the light, a doll by one leg.`,
        { if: "f.e3_edda==='burned' || f.e3_edda==='mercy'", t: `Edda Moss. Nineteen. She went up from the pyre before her uncle could gather the ash. The smoke was quicker. She is singing with the rest.` },
        { if: "f.e1_odo==='pyre'", t: `Odo Pettibone. Fat and frightened and singing like a choirboy. You built his pyre yourself, by the Kingsroad, and watched the smoke go up. You watched it all the way up.` },
        { if: "f.e1_mags_son", t: `A boy with Mags's jaw. Tom Halloran, who came home from the Thornwood with wounds in his back, and Hask paid for the pyre.` },
        `@oriel: "I can hear every one of them," says Oriel, beside you, very quietly. She can't see it. "Every name. They're all singing the same note. None of them chose it."`,
        `The light turns toward the children on the slabs. A hand comes out of it, a hand made of other hands, and reaches, gently, for the nearest small open mouth.`
      ],
      next: 'rite3'
    },
    rite3: {
      text: [
        `Brannagh shouts something in High Lampish and lifts her sword, and starfire runs up the blade, cold and blue and blinding, and she drives it into the column.`,
        `The column takes the starfire into itself like a river takes rain. It doesn't notice. The blue fire goes in and becomes part of the singing. Brannagh is thrown back across the floor, her sword smoking.`,
        `@brannagh: "It's the *same*," she shouts. "It's the same fire, it's *ours*, it's— Dray, it's the same *fire*—"`,
        `You walk forward.`,
        `The light that is pressing everyone else back like a gale doesn't press on you. It doesn't know you're there. You walk through it the way you'd walk through an empty room.`,
        `Your left palm is burning inside the glove. Worse than at Ashby. Worse than in the deep at Saltdown. Worse than the morning you woke at the Ford.`,
        `@oriel: "Ansel." Oriel's voice, from the edge of the star, as clear as a bell. "Take off the glove. Put your hand on it. Your burned hand. It counts everything it touches, and you're *not written down*. It can't count you. It can't stand it. Put your hand *on* it."`,
        `You pull off the glove with your teeth. The star on your palm is glowing like a coal.`
      ],
      fx: { set: { uncount: 1 }, skill: 'u5', heal: 'full', rest: true, know: { codex: ['unreckoned', 'starless'] } },
      next: 'rite4'
    },
    rite4: {
      text: [
        `> *Uncount.* The word arrives in your head the way the name of a dead friend does: all at once, as if it was always there.`,
        `The faces in the column turn. All of them. For the first time, something in the light is looking for you, the way you look for a sound in the dark: and it can't find you, and it is confused, and then it is *afraid*.`,
        `It turns from the children. It rises up over you, the hands of it spreading, and sings at you, one vast note, and the Abbess's voice is in it, and Annet's, and the Ashby girl's.`,
        `Someone has to stand with you. The light will crush anyone it can see, and it can see everyone but you. Two, at most, can hold close enough to your shadow to live.`,
        `@ulla: "Me," says Ulla, already walking into it with her shield up, her braids lifting in the gale. "Obviously. *Me*."`,
        `One more name. You have time for one more.`
      ],
      choices: [
        { t: '"Tamsin." Bow, and the best eye in the March.', go: 'saint_tam', fx: { set: { e8_saint_with: 'tamsin' } } },
        { t: '"Brannagh." Starfire can\'t hurt it. Steel might.', go: 'saint_bran', fx: { set: { e8_saint_with: 'brannagh' } } },
        { t: '"Oriel. Tell me where it\'s going to strike."', go: 'saint_oriel', fx: { set: { e8_saint_with: 'oriel' } } }
      ]
    },
    saint_tam: {
      fight: { foes: ['lantern_saint'], title: 'The Lantern Saint', win: 'saint_win', allies: ['ulla', 'tamsin'],
        intro: 'You have learned UNCOUNT. Tamsin\'s arrows won\'t kill it, but they can make it flinch. Lay your burned palm on it.' }
    },
    saint_bran: {
      fight: { foes: ['lantern_saint'], title: 'The Lantern Saint', win: 'saint_win', allies: ['ulla', 'brannagh'],
        intro: 'You have learned UNCOUNT. Brannagh\'s fire only feeds it; her steel can keep its hands off you. Lay your burned palm on it.' }
    },
    saint_oriel: {
      fight: { foes: ['lantern_saint'], title: 'The Lantern Saint', win: 'saint_win', allies: ['ulla', 'oriel'],
        intro: 'You have learned UNCOUNT. Oriel hears every note before it lands. Listen to her. Lay your burned palm on it.' }
    },
    saint_win: {
      text: [
        `In the end it's simple. It's a hand on a face.`,
        `You push through the singing, through the light, through Annet and the Ashby girl and a thousand strangers, until you are standing in the very heart of the column where the note is born, and you put your burned left hand flat against it, the way you'd put your hand on a horse's neck to calm it.`,
        `It tries to count you.`,
        `You feel it try. You feel the whole vast sum of it, every name it has ever taken, turn toward your palm like a ledger turning to the right page. And there is no page. There is no line. There is nowhere to put you.`,
        `It can't stop looking. It can't find you. It keeps looking. It keeps looking until there is nothing left of it but the looking.`,
        `The note breaks.`,
        `The faces come apart. For one moment, every one of them is not singing. Annet looks at you, with her own eyes, and frowns slightly, as if she has woken in a strange room. Then they are going: not up. Not down. Somewhere. You don't know where. Your palm knows. It isn't telling.`,
        `The light goes back up the shaft like water down a drain, all at once, with a long, falling sigh.`,
        `It is dark in the crypt. Somebody lights a lamp.`,
        `On the slabs, fourteen children close their mouths. One of them coughs. One of them sits up, rubbing her eyes, and looks round at the chalk and the dead acolytes and the filthy, bloody grown-ups, and says, in a small cross voice:`,
        `"Is it morning?"`
      ],
      fx: { quest: { id: 'e8_tithe', note: 'You laid your palm on the Lantern Saint and it went out. The fourteen children woke.' }, xp: 100 },
      next: 'star_out'
    },
    star_out: {
      loc: 'Harrowgate — the same moment',
      text: [
        `~ CUT TO: THE TANNERS' BOTTOM.`,
        `In the street outside the Gutted Hen, Mags Halloran is standing with a cleaver in her hand and her head tipped back.`,
        { if: "f.e7_moll_turned", t: `At the foot of the Lanternhold hill, Sergeant Moll takes off his helmet, slowly, and looks up.` },
        { if: "f.e4_miners==='saved'", t: `At the Lanternhold gate, the long grey line of the Hollowed miners lifts their faces to the sky, all together, like sunflowers.` },
        { if: "f.e3_rusk==='allied' || f.e3_rusk==='bedded'", t: `On the burning gatehouse, Rusk of the Thornwood lowers Husband and says, "Huh."` },
        `On the wall-walk of Varane Keep, Lady Isolde Varane stands in her mourning black with her father's ring on her thumb, and sees it go.`,
        `Above Harrowgate, a little east of the Lanternhold's tower, a star goes out.`,
        `It doesn't fall. It doesn't flicker. One moment it is there, a small white star like a thousand others, and the next, there is a place where it is not, and the dark around that place is very slightly darker than the rest of the sky.`,
        `All over the town, people who were not looking up will swear for the rest of their lives that they heard it go: like a hymn stopping in the middle of a word.`
      ],
      fx: { know: { codex: ['e8_star'] } },
      next: 'abbess1'
    },

    abbess1: {
      loc: 'The Lanternhold — the crypt',
      text: [
        `The Abbess is on her knees in the middle of the chalk star, where the column stood. Her wimple has come off. Her hair is thin and white and short, like a baby's. She looks very small.`,
        `She is not looking at you. She is looking up the shaft, at the little circle of night at the top of the tower, with one star missing from it.`,
        `@abbess: "Oh," she says. "Oh, what have you done. What have you *done*, Sergeant."`,
        `She turns her head. Her face is soft, wet, kind. The face that bends over the beds in the white ward.`,
        `@abbess: "Do you know what that cost? Do you know what *you* will cost? Sit down, dear. Sit. You've been in a fight. Let me tell you the sum."`
      ],
      next: 'abbess_hub'
    },
    abbess_hub: {
      text: [
        `Brannagh stands over her with her sword drawn and smoking. Tamsin is going from slab to slab, lifting children down. The Abbess folds her hands in her lap.`
      ],
      choices: [
        { t: '"Fourteen children. Tell me the sum."', go: 'abbess_sum', once: true },
        { t: '"How long?"', go: 'abbess_long', once: true },
        { t: '"Did you ever enjoy it?"', go: 'abbess_enjoy', once: true },
        { t: '"That\'s enough."', go: 'abbess_end' }
      ]
    },
    abbess_sum: {
      text: [
        `@abbess: "There is a debt," she says. "It is very old. Older than the Lamp. And debts come due, dear. All at once, if nobody pays them down. That's all I've ever done. Paid it down, a little at a time, so it doesn't come due all at once on people who never knew they owed it."`,
        `@abbess: "The ones nobody will miss, the ones who will die in a ditch by winter anyway; the drunk, the mad, the orphaned. I take one, and I write it down, and the sum is a little smaller." Her eyes are wet and steady. "Forty years I've kept the books. For thirty-five of them it was one or two a winter. Then Konrad came, and the sum came due faster. Seven hundred and twelve. I have saved, by my arithmetic, a great many more than that."`,
        `It almost makes sense. That is the horror of it. For one long breath in the dark crypt, with the chalk star under your boots, it almost makes sense.`,
        `@abbess: "If I am wrong," she says gently, "I am the worst woman who has ever lived. If I am right, I have saved this town. Tell me which, dear. You are the only one in this room they cannot count."`
      ],
      next: 'abbess_hub'
    },
    abbess_long: {
      text: [
        `@abbess: "Forty years. I was given the books by Mother Aldith, who was given them by Mother Cressa, who—" She smiles. "It goes back. The Lanternhold has always kept the Small Tithe. We have always been very careful. We have always kept very good books."`,
        `@abbess: "Konrad was a gift. Before Konrad we had to be so slow. One here. One there. A beggar. A fen-girl. He brought them in carts." Her face crumples, just for a moment. "I hated him. I want you to know that. I needed him and I hated him. He *liked* the money."`
      ],
      next: 'abbess_hub'
    },
    abbess_enjoy: {
      text: [
        `She looks at you as if you have slapped her.`,
        `@abbess: "Never," she says. "Not once. Not one of them." Her voice cracks. "I held their hands. Every one. I sang to them. I know their names; ask me, I'll tell you all seven hundred and twelve. I go down to the ward every night and feed what's left with my own spoon."`,
        `@abbess: "You keep a roll, I hear. Of your dead." She almost smiles. "So do I, Sergeant. So do I. We're not so very different, you and I. We both count."`
      ],
      next: 'abbess_hub'
    },
    abbess_end: {
      text: [
        `Above you, up the shaft, something moves in the little circle of sky.`,
        `A last thread of light. A remnant. Thin as a hair, cold, coming back down the tower toward the crypt, slow and blind and hungry. It wants something to take back up with it. It can't find the children; they're awake now, they're Tamsin's, they're behind Ulla's shield. It can't find you.`,
        `It finds the Abbess.`,
        `She sees it coming. She doesn't move. She lifts her face to it, and her expression is one you have seen on men at the Ford, in the last moment, when they understood: not fear. *Recognition.*`,
        `@abbess: "Ah," she says softly. "There you are. I wondered when you'd want paying."`
      ],
      choices: [
        { t: 'Let it take her. Her books should balance.', go: 'abbess_dead', fx: { set: { e8_abbess: 'dead' }, rep: { lamp: -1 } } },
        { t: 'Drag her out of the star. "Brannagh. She\'s yours."', go: 'abbess_arrest', fx: { set: { e8_abbess: 'arrested' }, rep: { lamp: -2, town: 1 } } }
      ]
    },
    abbess_dead: {
      text: [
        `You don't move. Nobody moves.`,
        `The thread of light touches her open mouth like a kiss, and draws something out of her: a bead of brightness, small, the size of a pearl, and very beautiful. It goes up the shaft, wobbling, like a lantern let go at the Feast.`,
        `The Abbess sits in the chalk star with her hands in her lap and her eyes open and her mouth slightly open, breathing. Warm. Empty.`,
        `Then, because she is sixty-two and there was very little holding her together but the work, she sighs, once, and topples sideways, and stops breathing too.`,
        `@brannagh: "Light take her," says Brannagh, and then, as if hearing the words for the first time, shuts her mouth hard.`
      ],
      next: 'abbess_after'
    },
    abbess_arrest: {
      text: [
        `You grab the Abbess by the back of her habit and haul her out of the chalk star like a sack of meal, and the thread of light goes through the place where she was and finds nothing, and wavers, and goes back up the shaft, empty, and is gone.`,
        `She stares at you. She is shaking.`,
        `@abbess: "Why?" she says. She genuinely wants to know. "Why would you—"`,
        `@ansel: "Because it'd be a mercy. You'll answer for it in a room full of people, in daylight, with your books open on the table."`,
        `Brannagh puts the point of her sword under the old woman's chin and her other hand on her shoulder.`,
        `Oriel, at the edge of the chalk, turns her blind face toward the old woman. "You lit the candle by my face," she says, "the night I was born. Here. At Saint Ysolt's. I didn't cry. You told me so, every year." The Abbess shuts her eyes.`,
        `@brannagh: "Morwenna Sallow," she says. Her voice is shaking too, and she lets it. "Abbess of the Lanternhold. I am a Lampwarden of the Lamp, Saints help me, for one more hour, and I arrest you for murder. Seven hundred and twelve counts." A breath. "Seven hundred and twenty-six. Counting the children you tried."`
      ],
      next: 'abbess_after'
    },
    abbess_after: {
      text: [
        `Tamsin comes through the crypt with a child on each hip and three more holding on to her belt. Her bandaged fingers are bleeding again. She doesn't seem to notice.`,
        `@tamsin: "There's fourteen," she says. "I counted. Twice. There's fourteen, Sergeant. Every one."`,
        `You look at her, over the children. She looks at you. Neither of you says anything. Then she turns round and carries them up the stair into the dark, toward the white ward and Mags and soup, and you follow, with the light of a lamp somebody's holding, and your palm cooling in the air like a horseshoe out of the forge.`
      ],
      fx: { quest: { id: 'e8_tithe', state: 'done', note: 'Fourteen children of the Lanternhold walked up out of the crypt on Saint Corran\'s Eve.' } },
      next: 'dawn1'
    },

    /* ======================= RESOLUTION ======================= */
    dawn1: {
      card: { kind: 'cut', title: 'Dawn', sub: 'Varane Keep' },
      loc: 'Varane Keep — the courtyard, dawn',
      text: [
        `Prince Cassius's carriages are being loaded in the courtyard at first light: trunks, falcons, a harpsichord wrapped in blankets. His guards are mounted. They look like men who would very much like to be somewhere else.`,
        `Cassius himself is on the steps in a riding cloak, drinking a cup of something hot, watching the sky. He sees you come in through the gate, filthy, the burned hand bare, and his whole face brightens, delighted, the way other men's faces do at the sight of a good horse.`,
        `@cassius: "Sergeant Dray. *There* you are. Did you do that?" He points up with his cup, at the place in the sky above the Lanternhold where nothing is. "Don't answer. You did. Of course you did."`,
        { if: "f.e8_hask==='killed'", t: `@cassius: "And poor Konrad's dead, I hear. On a staircase. How very *Lowmarch*. He always did lack a sense of occasion."` },
        { if: "f.e8_hask==='hollowed'", t: `@cassius: "And poor Konrad's off to the salt mines, I hear, in chains. That's almost poetic. I didn't think you had it in you."` },
        { if: "f.e8_hask==='justice'", t: `@cassius: "And poor Konrad's in my bride's cellar waiting for a rope. Well. I did tell him she was cleverer than he was. He laughed. They always laugh."` },
        { if: "f.e6_crown==='taken'", t: `A servant goes past with a velvet box, and Cassius stops him, and opens it to show you: a circlet of dark bronze set with yellowed river-pearls, cold enough that the velvet has frosted. "Your barrow-crown. My wedding gift to Isolde. A dead king's, they tell me." He shuts the box. "She'll hate it. She'll wear it anyway. That's what I like about her."` },
        `@cassius: "I backed the wrong horse. It happens. A prince must back several horses, it's practically the job." He sips. "I'm going home."`
      ],
      choices: [
        { t: '"You backed him. Everyone in this town knows it."', go: 'dawn2', fx: { set: { e8_cass_end: 'accuse' } } },
        { t: '"Safe travels, Highness." Nothing else.', go: 'dawn2', fx: { set: { e8_cass_end: 'polite' } } },
        { t: '"If you come back with an army, I\'ll be on the wall."', go: 'dawn2', fx: { set: { e8_cass_end: 'threat' }, rep: { town: 1 } } }
      ]
    },
    dawn2: {
      text: [
        { if: "f.e8_cass_end==='accuse'", t: `@cassius: "Knows it, yes. Can *prove* it, no. That's the whole of politics, Sergeant, in one breath. You'll learn." He smiles. "You might even be good at it."` },
        { if: "f.e8_cass_end==='polite'", t: `@cassius: "Oh, very good. Very dry. You and Isolde are going to get on terribly."` },
        { if: "f.e8_cass_end==='threat'", t: `@cassius: "Oh, I'm sure you will. That's rather the point of you." He looks genuinely pleased. "I'll bring a bigger army. You'll find a bigger wall. We'll have a lovely time."` },
        { if: "f.e5_melee==='won'", t: `@cassius: "Gideon sends his regards. He's sulking in the carriage. You put him on his back once in front of the whole March; he wants a rematch in front of the whole kingdom. I've said I'll think about it."` },
        { if: "f.e5_melee==='threw'", t: `@cassius: "You know, I never did work out why you let Gideon win that melee. Nobody else noticed. I noticed. I notice things I can use."` },
        { if: "f.e5_melee==='lost'", t: `@cassius: "Gideon says you fought him fair and lost fair and he's never respected a man more. Gideon is a sentimentalist. I keep him for the contrast."` },
        { if: "f.e5_delphine", t: `In the window of the first carriage, Delphine pushes the curtain back with one finger and looks at you. Cassius sees you see her. "Delphine sends her love," he says. "Well. She sends a *report*. Her love she keeps for herself, I'm told. Very professional."` },
        `He hands his cup to a servant and swings up into the saddle with the easy grace of somebody who has been doing it his whole life. He looks down at you, and at the Keep, and at the town, and at the hole in the sky.`,
        `@cassius: "Charming town," says Prince Cassius. "I'll be back for my bride."`,
        `And he rides out of Harrowgate with his harpsichord, and does not look back once, and you know, the way you knew about the treeline at the Ford, that he is thinking about you the whole way.`
      ],
      next: 'hall1'
    },
    hall1: {
      loc: 'Varane Keep — the great hall, morning',
      text: [
        `The great hall of Varane Keep is full. The household, the old sergeants, the Tanners' Bottom, Mags in her apron. The children from the Lanternhold in a row at the front in borrowed cloaks, eating bread. Nobody has told them to be quiet and they are not being quiet.`,
        `Isolde Varane sits in her father's chair. Not on the throne-seat at the high table: in his old leather chair, the one by the fire with the dent in the cushion, dragged out into the middle of the hall. She's still in black. She has slept, perhaps, an hour.`,
        `@isolde: "Harrowgate has no marshal," she says. Her voice carries without her raising it. "Harrowgate's marshal murdered its lord, and sold its poor to the salt-mines, and bought a title with its children."`,
        `@isolde: "Harrowgate will not have a marshal again. Harrowgate will have a sworn company, sworn to the town and to the house, paid from my own purse and answerable to me. And it will have a captain I have seen tell the truth in a polite room."`,
        `She looks at you.`,
        { if: 'f.e5_keep_sergeant', t: `@isolde: "My father wanted ten men in this house who were not the Marshal's. He found four, and gave them to you. I am going to do better."` },
        `@isolde: "Ansel Dray. Kneel, if you would. Or don't. I'm told you're not good at it."`
      ],
      choices: [
        { t: 'Kneel. Properly, on both knees, the old way.', go: 'hall2', fx: { set: { e8_kneel: 'knelt' }, rep: { varane: 2 } } },
        { t: 'Kneel on one knee, like a soldier, not a vassal.', go: 'hall2', fx: { set: { e8_kneel: 'soldier' }, rep: { varane: 1, town: 1 } } },
        { t: 'Stay standing. "I\'ll serve you, my lady. I don\'t kneel. I\'ve been on the ground enough."', go: 'hall2', fx: { set: { e8_kneel: 'stood' }, rep: { town: 2 } } }
      ]
    },
    hall2: {
      text: [
        { if: "f.e8_kneel==='knelt'", t: `A murmur goes round the hall. Isolde's face doesn't move, but her hand tightens on the arm of her father's chair.` },
        { if: "f.e8_kneel==='soldier'", t: `The old sergeants at the back nod, all together, the way old soldiers nod at a thing done right.` },
        { if: "f.e8_kneel==='stood'", t: `Somebody at the back of the hall laughs. It's Mags. Isolde's mouth twitches. "No," she says. "I don't suppose you do. Very well. Stand, then. Stand for the town."` },
        `@isolde: "Ansel Dray. I name you Captain of the sworn company of Harrowgate, to keep its walls and roads and people, by my own seal and in my own name." She presses her father's ring into a disc of red wax on a charter and holds it up for the hall to see.`,
        `@isolde: "A company needs a name, Captain. What will you call it?"`,
        `You think of the roll. Four hundred and six names. And on the end, on Pell's good paper, the new ones. People who have been in the ground, and in the bog, and in the crypt, and came back up.`
      ],
      choices: [
        { t: '"The Dead Men. We\'ve all died once. It gets easier."', go: 'hall3', fx: { set: { e8_name_line: 'easier' } } },
        { t: '"The Dead Men. For the four hundred and five."', go: 'hall3', fx: { set: { e8_name_line: 'roll' } } },
        { t: '"The Dead Men. So nobody ever expects us to come home, and we always do."', go: 'hall3', fx: { set: { e8_name_line: 'home' } } }
      ]
    },
    hall3: {
      text: [
        `Silence in the hall. Then Ulla Stonehand starts to bang her axe-haft on the flagstones, slow, *thud, thud, thud*, and the old sergeants pick it up, and the tanners, and the children, who don't know what it means and love it.`,
        `@isolde: "The Dead Men," says Isolde, over the noise. Her grey eyes on yours. "So written."`,
        { if: "f.e8_hask==='justice'", t: `@isolde: "And Konrad Hask will stand trial in this hall in a month, before the whole town, and then he will hang in the market square where the Lamp burns witches. In my name." She looks at you. "Thank you for bringing him to me. I know what it cost."` },
        { if: "f.e8_hask==='justice' && f.e5_ledger_to==='kept'", t: `@isolde: "I will read his own ledger aloud at the trial. Every line. Including the fifth share." The children at the front don't understand why the old sergeants laugh.` },
        { if: "f.e8_hask==='hollowed'", t: `@isolde: "And Konrad Hask has gone north in a salt-cart. I am told he wept the whole way." A pause. "I'd have hanged him. I think yours is worse. I'm not sure what that says about either of us."` },
        { if: "f.e8_hask==='killed'", t: `@isolde: "And Konrad Hask is dead. I'd have liked to hang him." She lets out a breath. "I find I don't mind as much as I thought I would."` },
        { if: "f.e8_pell==='dead'", t: `@isolde: "And Brother Pellam Orme, who opened the crypt door, will be buried—" she stops, and looks at you, and at Mags, and at Tamsin, and chooses her words very carefully— "wherever his friends think best. With honour. The Lady of Harrowgate will not ask where."` },
        { if: "f.e8_pell==='alive'", t: `At the end of the hall, Pell is standing with a cup of water and a bandage round his head, being congratulated by a tanner, and looking as if he might faint from happiness or terror or both.` }
      ],
      fx: { know: { codex: ['e8_deadmen'] }, rep: { town: 2, varane: 2 }, quest: { id: 'e8_deadmen', title: 'The Dead Men', state: 'done', note: 'Lady Isolde Varane named you Captain of Harrowgate\'s sworn company. You named it the Dead Men.' } },
      next: 'oriel_steps'
    },
    oriel_steps: {
      loc: 'The Lanternhold steps — morning',
      text: [
        `Oriel is sitting on the Lanternhold steps in the sun with a borrowed cloak round her and her bare feet on the warm stone, eating bread very slowly, a crumb at a time, as if she's never been sure before that there'd be more.`,
        `You sit down beside her. She knows it's you. She always will; you're the silence.`,
        `@oriel: "It's quiet," she says. "Up there. Where you put your hand. There's a gap now. I can hear the whole Choir, all the time, every hour of my life, and now there's a gap in it, a little one, like a missing tooth." She tilts her face up to the morning sky. "They keep touching it. With their tongues. Like you do with a tooth."`,
        `@ansel: "Is that bad?"`,
        `She thinks about it seriously.`,
        `@oriel: "Before last night they couldn't see you," she says. "You were a hole in the singing. A nothing. You can't hunt a nothing."`,
        `She turns her silver eyes toward you, and for a moment, just a moment, you could swear they find you.`,
        `@oriel: "They've seen you now."`
      ],
      choices: [
        { t: '"Then let them look."', go: 'oriel_steps2' },
        { t: 'Take her hand. Say nothing.', go: 'oriel_steps2', fx: { set: { e8_oriel_hand: 1 } } },
        { t: '"Will you come with us? With the company?"', go: 'oriel_steps2', fx: { set: { e8_oriel_asked: 1 } } }
      ]
    },
    oriel_steps2: {
      text: [
        `@oriel: "Yes," she says, to whatever you said. To all of it. "I'm not going back in a cage. And I'm not going anywhere you aren't. I couldn't stand the noise."`,
        `She finishes the bread. She licks her fingers. Then she leans her shaven, star-charted head against your shoulder, in the sun, on the steps of the Lanternhold, and falls asleep for the first time in two days.`
      ],
      next: 'wall1'
    },
    wall1: {
      loc: 'The wall-walk above the East Gate — the next dawn',
      text: [
        `The next dawn. You haven't slept. You go up onto the wall-walk above the East Gate, where Isolde stood the first morning with her ledger, and look out at the Kingsroad, coming up the hill out of the mist.`,
        `Tamsin's already there. Of course she is.`,
        `She's sitting in an embrasure with her knees up, eating an apple, her fingers bound in clean linen now, a fresh cut on her cheek from the crypt. She doesn't look round.`,
        `You lean on the parapet a yard from her. The sun comes up. Under you, the gate opens, and the first carts of the day come in: turnips, a tinker, a woman with geese. Nobody looks up.`,
        { if: "f.e8_tam==='sent'", t: `@tamsin: "Still here," she says. "You'll notice."` },
        { if: "f.e8_tam==='behind'", t: `@tamsin: "Where you can see me," she says. "Like you said."` },
        { if: "f.e8_tam!=='sent' && f.e8_tam!=='behind'", t: `@tamsin: "Morning, Sergeant."` }
      ],
      choices: [
        { t: '"Captain."', go: 'wall2a' },
        { t: '"I haven\'t forgiven you."', go: 'wall2b' },
        { t: 'Hold out your hand for the apple.', go: 'wall2c' }
      ]
    },
    wall2a: {
      text: [
        `She snorts. It's almost a laugh.`,
        `@tamsin: "No," she says. "You're not. Not to me. You can make me call you it in front of people. Up here, you're Sergeant." She bites the apple. "Captain's someone *they* made. Sergeant's mine."`,
        `You don't argue. You find, a bit to your surprise, that you don't want to.`
      ],
      next: 'wall3'
    },
    wall2b: {
      text: [
        `@tamsin: "I know," she says. She doesn't look away from the road. "I haven't either. Forgiven me." She turns the apple. "I don't think it's a thing you do. I think it's a thing that happens, or doesn't, while you're busy."`,
        `@tamsin: "So I'll be busy," she says. "Here. Where you can see."`
      ],
      next: 'wall3'
    },
    wall2c: {
      text: [
        `She looks at your hand. The left one. Bare, now, the star on the palm healed to a silver scar, quiet in the morning air.`,
        `She puts the apple in it. It's half eaten. You eat the other half.`,
        { if: 'f.e8_tam_flask', t: `Neither of you says anything. It is, again, the longest conversation you've ever had with anyone.`, else: `Neither of you says anything. It is the longest conversation you've ever had with anyone.` }
      ],
      next: 'wall3'
    },
    wall3: {
      text: [
        `@tamsin: "I'm still going to be here," she says, after a while. "I want you to know. Whatever you decide about me. If you go to Corvane for the wedding, if you go north, if you go down a well. You don't have to forgive me to have me behind you. I'm not asking for the one. I'm just telling you about the other."`,
        `The sun is fully up. Below, the town is waking: smoke, bells, gulls over the Tanners' Bottom, the lime-stink coming up on the wind. Up the hill, the Lanternhold's tower is dark for the first time in two hundred years.`,
        `And up there, very faint now in the brightening sky, the stars are going out one by one the way they do every morning: except for one place, a little east of the tower, where there is nothing to go out.`,
        `You look up at it. You don't look away.`,
        `Beside you, not touching, not far, Tamsin starts, under her breath, to sing about an eel who married a heron. She gets the second verse wrong.`,
        `You correct her.`,
        `She stops. She looks at you, astonished.`,
        `Then she starts again from the beginning.`,
        { if: 'f.e7_heron_verse', t: `When she gets to the eleventh verse, the one where the heron dies, she stops. You sing the twelfth for her instead, her one, badly, in a voice that hasn't sung since the Ford: *and he never came up, and he never was cold.* She doesn't say anything. She doesn't need to.` }
      ],
      fx: { xp: 150, set: { e8_wall: 1 } },
      next: 'tally1'
    },
    tally1: {
      card: { kind: 'cut', title: 'Corvane', sub: 'The capital · beneath the Hierarch\'s palace' },
      loc: 'Corvane — an archive under the Hierarch\'s palace',
      text: [
        `Corvane. A hundred bells. A river the colour of pewter. A palace of white stone with a seven-pointed star on every gate, and under it, below the cellars, below the wine, below the old prisons, a long low room that nobody living has been in for a very long time.`,
        `Candles. Thousands. Shelves to the vaulted ceiling, and on the shelves, ledgers: bound in something pale and supple that is not quite calf. They go back into the dark further than the candlelight reaches.`,
        `At a high clerk's desk at the end of the room, a tall grey man in a rain-dark coat is sitting very still. His wide hat is on the desk beside him. His hands are clean and pale.`,
        `He is looking at a ledger. He turns a page back. He turns it forward. He has been doing this for some time.`,
        `Then, with the air of a man who has finally made up his mind about a difficult sum, he closes it.`,
        `He takes down a new ledger from the shelf. The leather creaks. He opens it to the first page, which is blank, and dips his pen, and in a fine, old-fashioned, perfectly level clerk's hand, he writes a heading:`,
        `**ANSEL DRAY.**`,
        `Below it, nothing. A long time of nothing. The candles burn down a little. Somewhere above, in the palace, a bell rings for the Morning Lamp.`,
        `Then, slowly, as if it costs him something, the Tallyman writes one word.`,
        `*Owed.*`
      ],
      fx: { xp: 100, party: { add: ['tamsin', 'brannagh', 'ulla', 'oriel'] } },
      end: true
    },

    /* ======================= SIDE: CONTRACTS (post-season) ======================= */
    c_crypt_1: {
      loc: 'The Lanternhold — the deep crypt',
      text: [
        `The notice is pinned to the board in Isolde's own fast, level hand: *The Lady of Harrowgate requires the Captain of the sworn company to clear and seal the lower crypts of the Lanternhold. The Lamplighters will not go down. They say something is singing.*`,
        `Below the chalk star, below the cells where Brannagh found the children, there is a lower stair. It goes down a long way. The air gets warmer as you go, not colder, which is wrong.`,
        `At the bottom: the Abbess's archive. Shelves of white calf ledgers, two hundred years of them, maybe more. And in the middle of the floor, hovering a hand's breadth above the stone like a candle-flame with no candle, a little coal of white light, humming a nursery tune.`,
        `Three Lamplighters in grey are kneeling round it with their hands clasped, singing along. Young men. The Abbess's own. They look up at you with wet, adoring, terrible eyes.`,
        `@narrator: "It's what's left of her Saint," says the eldest. "It's *ours*. You can't have it. It sings us her voice."`
      ],
      choices: [
        { t: '"Go upstairs, lads. Now. Before I stop asking."', check: { stat: 'presence', dc: 14, pass: 'c_crypt_2a', fail: 'c_crypt_2b' } },
        { t: 'Draw. Walk toward the light.', go: 'c_crypt_2b' }
      ]
    },
    c_crypt_2a: {
      text: [
        `Two of them go, weeping, up the stair. The third, the eldest, puts himself between you and the coal of light with his arms spread.`,
        `The light goes *in* to him, through the back of his neck, the way a moth goes into a lamp. He turns round. His eyes are white and shining. He opens his mouth and the Abbess's voice comes out of it, humming.`
      ],
      next: 'c_crypt_fight'
    },
    c_crypt_2b: {
      text: [
        `They come at you with their censers, singing. And behind them, the coal of light lifts off the floor and swells, hungry, and comes too.`
      ],
      next: 'c_crypt_fight'
    },
    c_crypt_fight: {
      fight: { foes: ['e8_ember', 'cultist'], title: 'The Deep Crypt', win: 'c_crypt_3',
        intro: 'A coal of the Choir, still hungry. Uncount will finish it.' }
    },
    c_crypt_3: {
      text: [
        `You put your palm on the ember and it goes out the way a candle goes out when you pinch it: a tiny hiss, a thread of smoke that smells of honey.`,
        `Then there's just you, and a dead boy in grey, and the archive.`,
        `You take a ledger down at random. *The Year of the Wet Harvest.* The same round, kind hand. Not the Abbess's; her teacher's, or her teacher's teacher. The same columns. The same ticks.`,
        `Tucked into the back of the most recent, a letter on heavy paper with a broken seal in gold wax: a sunburst, and a crown over it. *Our Holiness the Hierarch thanks the Lanternhold of Harrowgate for its continued diligence in the matter of the debt, and reminds the Mother Abbess that it does not grow smaller by waiting. The Crown is informed.*`,
        `*The Crown is informed.*`
      ],
      choices: [
        { t: 'Box it all up for Isolde. She knows what to do with books.', go: 'c_crypt_4', fx: { set: { e8_crypt_ledgers: 'isolde' }, rep: { varane: 2 } } },
        { t: 'Burn the archive. Every page. Nobody should ever be able to do this sum again.', go: 'c_crypt_4', fx: { set: { e8_crypt_ledgers: 'burned' }, rep: { fen: 1, lamp: -1 } } },
        { t: 'Keep the Hierarch\'s letter. Burn the rest.', go: 'c_crypt_4', fx: { set: { e8_crypt_ledgers: 'letter' }, xp: 20 } }
      ]
    },
    c_crypt_4: {
      text: [
        { if: "f.e8_crypt_ledgers==='isolde'", t: `Isolde reads all night. In the morning she is grey-faced and very calm. "The Crown is informed," she says. "The Crown. Which means the King. Which means my betrothed." She closes the ledger. "I am going to Corvane to marry a man who knew. I'd like you to come with me, Captain. Bring your sword. Bring these."` },
        { if: "f.e8_crypt_ledgers==='burned'", t: `It burns for a day and a night. The smoke goes up the lantern-shaft in a long grey column, and you stand at the bottom and watch it go, and wonder, for a long time, whose names are in it, and where the smoke is taking them.` },
        { if: "f.e8_crypt_ledgers==='letter'", t: `The archive burns. The letter goes in your coat, beside the roll, where it rustles every time you breathe. *The Crown is informed.* One day you are going to put it on a table in Corvane in front of someone, and watch their face.` },
        `You seal the lower stair with mortar and an iron gate. On the gate, in tithe-chalk, out of some instinct you can't name, you draw nothing at all.`
      ],
      fx: { silver: 80, xp: 120, give: { silver_oil: 1, black_draught: 1 } },
      end: true
    },

    c_salt_1: {
      loc: 'Saltdown — the old pithead',
      text: [
        `Ulla brings the notice herself, folded small. It isn't a notice. It's a letter from an old friend of hers among the Saltdown guards.`,
        `@ulla: "Hask's overseer at Saltdown, Grebe, never got word the Marshal fell. Or got it and didn't care. He's still got forty Hollowed in the north galleries and he's selling them. Tonight. To a man from Corvane with a letter of credit." She cracks her knuckles one at a time. "I used to guard those galleries. I used to take that man's pay. I'd like to give it back."`,
        `Saltdown, at dusk: chalk, wind, the mine-mouths like open graves on the downs. At the north pithead, a line of carts, and the Hollowed being loaded into them by the wrist, silent, unresisting. A man in a good grey travelling coat with a Corvane accent is counting them off on a tablet. Grebe the overseer is counting the silver.`,
        { if: "f.e8_hask==='hollowed'", t: `And among the Saltdown workers watching from the pithead, chained at the ankle, filthy to the eyes with salt and lime, a man with a neat grey beard grown ragged. Konrad Hask. He sees you. He doesn't look away. He doesn't say anything at all.` }
      ],
      choices: [
        { t: 'Walk straight down to the carts.', go: 'c_salt_2' },
        { t: '"Grebe! The Captain of Harrowgate would like a word about your ledger."', check: { stat: 'presence', dc: 15, pass: 'c_salt_2b', fail: 'c_salt_2' } }
      ]
    },
    c_salt_2b: {
      text: [
        `Grebe looks at you, and at Ulla, and at the burned hand, bare now, and his face goes the colour of the chalk. Half his guards drop their crossbows and walk off into the dark without being asked.`,
        `The man from Corvane does not run. He sighs, like a clerk interrupted, and nods to the three hard men standing by the last cart.`
      ],
      next: 'c_salt_fight'
    },
    c_salt_2: {
      text: [
        `Grebe shouts. His crossbowmen turn round. The man from Corvane steps back behind the carts with his tablet, unhurried, like a man stepping back from a puddle, and nods to the three hard men by the last cart.`
      ],
      next: 'c_salt_fight'
    },
    c_salt_fight: {
      fight: { foes: ['bandit_captain', 'crossbowman', 'man_at_arms'], title: 'The North Pithead', win: 'c_salt_3', allies: ['ulla', 'tamsin'],
        intro: 'Slavers with a Corvane letter of credit. Ulla knows them all by name.' }
    },
    c_salt_3: {
      text: [
        `Grebe dies under a cart. The man from Corvane is sitting on the tail of it, unarmed, writing, when you get to him. He finishes his line before he looks up.`,
        `@narrator: "Captain Dray," he says. "The dead sergeant. How nice. My principal will be so interested to hear I met you." He tucks the tablet inside his coat. "I'm only a buyer, you understand. There is a great deal of work to be done in Corvane, and the new labour doesn't complain. Whose work, you may ask?" He smiles. "Ask at the wedding."`,
        `Behind you, forty Hollowed are standing in the chalk in the dusk, in a long patient line, waiting to be told what to do.`
      ],
      choices: [
        { t: 'Let the buyer go. Make him carry a message. "Tell your principal the Dead Men are coming to the wedding."', go: 'c_salt_4', fx: { set: { e8_salt_buyer: 'message' } } },
        { t: 'Take him back to Isolde in chains.', go: 'c_salt_4', fx: { set: { e8_salt_buyer: 'prisoner' }, rep: { varane: 1 } } },
        { t: 'Kill him. Some messages don\'t need a messenger.', go: 'c_salt_4', fx: { set: { e8_salt_buyer: 'killed' }, rep: { town: 1 } } }
      ]
    },
    c_salt_4: {
      text: [
        { if: "f.e8_salt_buyer==='message'", t: `He bows, unhurried, and walks off down the Kingsroad into the dark with his tablet under his arm. You have a feeling you'll see the tablet again.` },
        { if: "f.e8_salt_buyer==='prisoner'", t: `He comes quietly. He chats the whole way to Harrowgate about the price of salt. In Isolde's cell, he asks for paper, and writes a letter to someone in Corvane, and hands it to the gaoler, and smiles, as if he expects to be out by the end of the month. He is not wrong to expect it.` },
        { if: "f.e8_salt_buyer==='killed'", t: `He doesn't fight. He just closes his eyes, like a man waiting for a sneeze. In his coat, a letter of credit on a Corvane bank, signed with a flourish you'll learn, later, to recognise: a crown, and a sunburst.` },
        `You walk the forty Hollowed down to Harrowgate yourselves, Ulla at the front and you at the back, by the hand, the way you learned at Ashby. They don't speak. They don't let go.`,
        { if: "f.e8_hask==='hollowed'", t: `When you pass the pithead, Hask is still standing there in his chains, up to the shins in salt-slurry. He watches you lead them away. He opens his mouth once, as if to say something. Then he closes it, and bends, and picks up his shovel.` }
      ],
      fx: { silver: 60, xp: 140, rep: { town: 2 }, bond: { ulla: 1 }, give: { silver_dust: 3 } },
      end: true
    },

    /* ======================= SIDE: TALKS (post-season) ======================= */
    t_tam_1: {
      loc: 'The Keep barracks — the Dead Men\'s table, night',
      text: [
        `The Dead Men have a table now, in the Keep barracks: a long scarred one, with a candle and a jug and too many elbows. Tonight it's just Tamsin, alone at the end, with the roll unrolled in front of her and her bound finger on a line.`,
        `She hears you, and doesn't hide it. That's new.`,
        `@tamsin: "Which one's me?" she says. "On the end. I know it's there. I can't find it again."`
      ],
      choices: [
        { t: 'Show her. Put her finger on it.', go: 't_tam_2' },
        { t: '"Learn your letters and you\'ll find it yourself."', go: 't_tam_3' }
      ]
    },
    t_tam_2: {
      text: [
        `You put her finger on it. *Tamsin Vell, of Gallowmere* — or the crooked fen-knot, or the place on the paper where her name isn't yet, depending.`,
        { if: "f.e8_roll_tam==='not'", t: `@tamsin: "Oh," she says, looking at the empty paper under her finger. Very quietly. "There's nothing there." She doesn't take her finger away. "That's all right. That's fair. I'll just keep my finger on it till there is."` },
        { if: "f.e8_roll_tam!=='not'", t: `She looks at it. "It looks like a fence," she says. "With a gate in it." Then: "Show me the T again."` }
      ],
      next: 't_tam_3'
    },
    t_tam_3: {
      text: [
        `@tamsin: "Teach me," she says. Abruptly, as if it's been in her mouth for weeks. "Reading. Properly. Not now. Not if you don't want. But Pell says the Lady's going to Corvane for the wedding and taking her Dead Men, and Corvane's all signs and letters and contracts, and I'll be damned if I go to the capital and have to ask some lordling what a tavern's called."`,
        `@ansel: "You're coming to Corvane, then."`,
        `@tamsin: "Don't argue," she says. "I'm not asking that one either."`,
        { if: 'f.e6_tam_wrote', t: `@tamsin: "Teach me the *rest*, I mean. I've got two words. One's yours and one's mine, and I'm sick of the both of them." She takes the pen and writes ANSEL and TAMSIN side by side from memory, both S's backwards, quick, before you can watch her do it. Then she pushes it at you. "Go on, then. Next one."` },
        { if: '!f.e6_tam_wrote && (f.e5_tam_letters || f.e6_tam_name)', t: `@tamsin: "Teach me the *rest*, I mean. I've got five letters and they're all yours." She takes the pen and writes ANSEL on the scrap from memory, the S backwards, quick, before you can watch her do it. Then she pushes it at you. "Go on, then. Next one."`, else: `You pull the candle closer. You take a scrap of paper from your coat. You write an A.` },
        { if: 'f.e5_tam_letters || f.e6_tam_name', t: `You pull the candle closer. You write the first letter she hasn't got. It's a B. She glares at it like it owes her money.` },
        `She leans in. Her shoulder is an inch from yours. The inch stays an inch. She doesn't seem to mind it, tonight. Neither do you.`
      ],
      fx: { bond: { tamsin: 1 }, set: { e8_tam_letters: 1 } },
      end: true
    },

    t_iso_1: {
      loc: 'Varane Keep — the solar',
      text: [
        `Her father's solar. They washed the floor twice, and then she had them take up the boards and lay new ones. It still smells of new oak. She works in here anyway. She says it's the best light in the Keep, which is true, and that she's not afraid of a room, which isn't.`,
        `She's at the desk with the books of the March open in front of her. She doesn't look up when you come in.`,
        `@isolde: "We're bankrupt," she says pleasantly. "I want you to know, as Captain. Your company's wages come out of the Crown's bride-price for me. So, technically, Captain, Cassius is paying you." She turns a page. "I thought that would amuse you."`
      ],
      choices: [
        { t: '"You\'re still going to marry him."', go: 't_iso_2' },
        { t: '"It doesn\'t amuse me."', go: 't_iso_2' }
      ]
    },
    t_iso_2: {
      text: [
        `She puts down her pen.`,
        `@isolde: "I'm going to marry him in Corvane at Midwinter, in the Hierarch's own cathedral, in front of the whole court," she says. "Because if I don't, the Crown takes the March for debt, and gives it to a man like Konrad. And because there are things in the Abbess's books that point up the hill, Ansel. To Corvane. To the palace. I can't reach them from here."`,
        `@isolde: "I can reach them from his bed." She says it flatly, as a sum. Then she looks at you, and for a moment the sum isn't flat at all.`,
        { if: "f.e8_letter==='true' && f.e5_iso_letter==='truth'", t: `@isolde: "I kept your letter. The one with the beer ring. It's under the third board from the window, with the other one. I'm taking the board to Corvane." A small, dry smile. "I'll have it put under the bed."` },
        { if: "f.e8_letter==='true' && f.e5_iso_letter!=='truth'", t: `@isolde: "I kept your letter. The one with the beer ring. I'm going to take it to Corvane in my jewel-box." A small, dry smile. "Under the jewels."` },
        { if: "f.e5_isolde_kiss==='kissed'", t: `@isolde: "The archive," she says. "I think about it more than is useful." She picks up the pen again. "I'm going to keep thinking about it in Corvane. I wanted you to know that. That's all. That's all it can be."` }
      ],
      choices: [
        { t: '"Then I\'ll come to Corvane. As your Captain."', go: 't_iso_3', fx: { set: { e8_iso_corvane: 'captain' } } },
        { t: '"Then I\'ll come to Corvane. Not as your Captain."', go: 't_iso_3', fx: { bond: { isolde: 1 }, set: { e8_iso_corvane: 'more' } } }
      ]
    },
    t_iso_3: {
      text: [
        `She looks at you a long moment. Then she nods, once, the way she nodded the first morning on the wall, and goes back to her books.`,
        `@isolde: "Bring warm clothes," she says, without looking up. "Corvane is very cold at Midwinter. And everyone there smiles, Captain. You'll hate it."`,
        `At the door you look back. She's not writing. She's sitting with the pen above the page, very still, and she doesn't put it down until you've gone.`
      ],
      end: true
    },

    t_bran_1: {
      loc: 'Harrowgate — the practice yard, night',
      text: [
        `Brannagh is in the Keep practice yard at midnight, alone, running drills with a borrowed sword under a torch. No plate. No star. A plain grey surcoat with the Dead Men's mark Mags stitched on it: a skull, badly, with a sprig of bog myrtle in its teeth.`,
        `She sees you and doesn't stop.`,
        `@brannagh: "There's a writ coming," she says between cuts. "From the Hierarch. Heresy, desertion, the murder of Brother Cade. They'll send a Lampwarden-Captain to bring me back to Corvane for trial." *Cut.* "Probably Ser Hallam. He trained Hesk. He's the best there is." *Cut.* "I'm practising."`
      ],
      choices: [
        { t: 'Pick up a practice sword. "Practise on me."', go: 't_bran_2' },
        { t: '"They\'ll have to come through the Dead Men."', go: 't_bran_3' }
      ]
    },
    t_bran_2: {
      text: [
        `It isn't like the yard at the Feast. She isn't angry, this time; she's *free*, and it makes her terrifying. She puts you on your back twice, and you put her on hers once, and the third time you both go down together in a tangle and lie there on the cold cobbles under the torch, breathing hard.`,
        { if: "f.e8_brannagh_night==='lovers'", t: `She rolls over on top of you, and pins your wrists, and looks down at you with her white-blonde hair stuck to her forehead. "You still owe me a pie," she says, and kisses you, slowly this time, like she has all the time in the world. Like nobody is coming for her at all.` },
        { if: "f.e8_brannagh_night==='restrained'", t: `She sits up and looks down at you, with her hair stuck to her forehead. "I'm running toward it," she says. "I told you you'd see." And she waits. She's very good at waiting, now. She's had practice.` },
        { if: "!f.e8_brannagh_night", t: `@brannagh: "Again," she says, and gets up, and offers you her hand, and you take it.` }
      ],
      fx: { bond: { brannagh: 1 } },
      next: 't_bran_3'
    },
    t_bran_3: {
      text: [
        `@brannagh: "I still pray," she says, after a while. "At night. Out of habit. I don't know who to." She looks up at the sky, at the gap. "I used to think they were listening. Now I know they were. That's worse."`,
        `@brannagh: "When Hallam comes, I won't run. I'll go to Corvane and stand trial in front of the Hierarch and I'll put those ledgers on his altar and make him read them aloud." She almost smiles. "And you'll be in the back of the cathedral. Won't you. Being uncounted."`,
        `@ansel: "Somebody has to be."`
      ],
      fx: { set: { e8_bran_trial: 1 } },
      end: true
    },

    t_oriel_1: {
      loc: 'The Keep — the roof, night',
      text: [
        `Oriel lives on the Keep roof now. Not all the time. She sleeps in a real bed, under a real ceiling, and says it's the strangest thing that's ever happened to her. But at night she comes up here and sits with her back against the chimney-stack, with her face turned up to the sky, listening.`,
        `@oriel: "Sit," she says. "Sit near. It's so loud tonight."`,
        `You sit. The singing she hears goes quiet, the way it does when you're near. She sighs, the way you'd sigh taking off wet boots.`
      ],
      choices: [
        { t: '"What are they saying?"', go: 't_oriel_2' },
        { t: 'Just sit with her.', go: 't_oriel_3' }
      ]
    },
    t_oriel_2: {
      text: [
        `@oriel: "Your name," she says. "They didn't have it before. Now they have it. They don't know what it *means*; it's like a word in a language they don't speak. They keep saying it to each other. Passing it round." She tilts her head. "And one of them, a very big one, a very old one, over Corvane, is saying it the most."`,
        `@oriel: "There's a man in Corvane who dreams of you," she says. "I think he's a priest. A very high one. He dreams of you every night now, and wakes up afraid, and goes to his window and looks at the gap in the sky." She smiles, a little. "I like that he's afraid. Is that wicked?"`
      ],
      fx: { set: { e8_oriel_hierarch: 1 } },
      next: 't_oriel_3'
    },
    t_oriel_3: {
      text: [
        { if: 'f.e7_oriel_close', t: `She reaches out, blind, and finds your face with her fingertips, the way she did through the bars. Slower this time. Nobody is going to carry her away.`, else: `She reaches out, blind, and finds your face with her fingertips. She reads it, slowly, the way the blind do: brow, the broken nose, the rope of scar from collarbone to ear.` },
        { if: 'f.e7_oriel_close', t: `@oriel: "I wanted to do that again," she says. "Properly. Without a Warden watching." Her fingers rest on your mouth a moment. "You're older than I thought, the first time. And sadder. And you've a new cut, here."`, else: `@oriel: "So that's what you look like," she says. "I've wondered. I could never see you, even in the singing. You were just the place where it stopped." Her fingers rest on your mouth a moment. "You're older than I thought. And sadder."` },
        `@oriel: "I'm glad it's you," she says. "Whatever you are. I'm glad it's you and not someone who'd enjoy it."`,
        `She takes her hand back and turns her face to the sky again, and the two of you sit there under the stars with a gap in them, and for once, neither of you feels watched.`
      ],
      fx: { bond: { oriel: 1 } },
      end: true
    },

    t_mags_1: {
      loc: 'The Gutted Hen — after closing',
      text: [
        `Mags has hung Pell's broken cudgel over the bar of the Gutted Hen, next to the window she put her second husband through.`,
        { if: "f.e8_pell==='alive'", t: `Pell is underneath it, nursing a cup of water and telling a table of tanners about the crypt. It's longer every night. In tonight's version he lifted the bar with one hand.` },
        { if: "f.e8_pell==='dead'", t: `Underneath it, a cup of water is set out every night, untouched. Nobody sits there. Nobody ever will.` },
        `@mags: "Well, Captain," she says, sitting down across from you with two cups of brown. "You did the stupid thing about the Marshal. You didn't tell me first. I had to get the good mugs down myself."`
      ],
      choices: [
        { t: '"I\'m sorry about Tom. I saw him, Mags. In the light."', go: 't_mags_2', if: "f.e1_mags_son" },
        { t: '"Come to Corvane. The company needs a cook."', go: 't_mags_3' },
        { t: 'Just drink with her.', go: 't_mags_3' }
      ]
    },
    t_mags_2: {
      text: [
        `She goes still. Then she puts her cup down very carefully.`,
        `@mags: "Was he— " She can't. She tries again. "Was he all right? In there?"`,
        `You think about lying. You think about the faces in the column, singing one note.`,
        `@ansel: "He was singing."`,
        `@mags: "He never could carry a tune," she says, and laughs, and puts her face in her big forearms on the table, and doesn't lift it. You sit with her. That's all. That's the whole job.`
      ],
      fx: { set: { e8_mags_tom: 1 } },
      next: 't_mags_3'
    },
    t_mags_3: {
      text: [
        `@mags: "Corvane?" She snorts. "I've got a Hen to run, love. Somebody has to be here when you all come back with holes in you." She pours again. "But I'll tell you what. When the lady marries her prince, you send me a letter. Somebody can read it to me. And if she's unhappy, you tell her there's a room at the top of the stairs with shutters that stick, and nobody up there ever asks who you are."`,
        { if: "f.e2_mags", t: `She puts her hand on the back of your neck on her way past, warm and heavy and frank about it, the way she did the first night. It stays a beat longer, this time. "Good shoulders, Captain," she says. "Shame about the rest."` }
      ],
      fx: { bond: { mags: 1 } },
      end: true
    }
  },
  side: [
    { id: 'e8_c_crypt', kind: 'contract', title: 'What the Crypt Kept', desc: 'The Lady of Harrowgate requires the lower crypts of the Lanternhold cleared and sealed. The Lamplighters say something down there is still singing.', level: 9, start: 'c_crypt_1' },
    { id: 'e8_c_salt', kind: 'contract', title: 'The Last Cart from Saltdown', desc: 'Hask\'s overseer at Saltdown is selling forty Hollowed to a buyer from Corvane. Ulla would like a word with him.', level: 9, start: 'c_salt_1', if: "inParty('ulla')" },
    { id: 'e8_t_tamsin', kind: 'talk', who: 'tamsin', title: 'Letters at the Dead Men\'s table', start: 't_tam_1', if: "inParty('tamsin')" },
    { id: 'e8_t_isolde', kind: 'talk', who: 'isolde', title: 'The books of the March', start: 't_iso_1' },
    { id: 'e8_t_brannagh', kind: 'talk', who: 'brannagh', title: 'The writ from Corvane', start: 't_bran_1', if: "inParty('brannagh')" },
    { id: 'e8_t_oriel', kind: 'talk', who: 'oriel', title: 'The gap in the singing', start: 't_oriel_1', if: "inParty('oriel')" },
    { id: 'e8_t_mags', kind: 'talk', who: 'mags', title: 'The good mugs', start: 't_mags_1' }
  ]
});
