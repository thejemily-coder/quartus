/* TITHE — Season One, Episode 5: "The Feast of Lanterns" */

/* ---- Episode 5 additions to static data ---- */
TITHE.ENEMIES.e5_knifeman = { name: 'Robed Knifeman', hp: 24, def: 11, arm: 1, dmg: [4, 8], acc: 3, xp: 38, silver: [3, 9], tags: ['human'],
  moves: [{ n: 'Sleeve-Knife', w: 3, m: 1, tele: 'lets a blade slide down out of his grey sleeve' },
    { n: 'Two-Knife Rush', w: 1, m: 1.6, heavy: true, fx: 'bleed', tele: 'drops his shoulders and comes in low, both hands busy' },
    { n: 'Lamp-Oil', w: 1, m: .6, fx: 'burn', tele: 'thumbs the stopper out of a little blue bottle' }],
  loot: [['lamp_oil', .6, 1], ['knives', .3, 1]],
  lore: 'A Lamplighter\'s grey robe and a soldier\'s hands. Under the hood, a man who has hanged people at crossroads for a living and been told this is the same work, only better paid.' };
TITHE.ENEMIES.e5_hooded = { name: 'The Hooded Lamplighter', hp: 62, def: 13, arm: 2, dmg: [6, 10], acc: 5, xp: 160, silver: [15, 30], tags: ['human', 'boss'],
  moves: [{ n: 'Falchion Cut', w: 3, m: 1, tele: 'swings the short heavy blade he kept under his robe' },
    { n: 'Taper in the Eyes', w: 1, m: .7, fx: 'stun', tele: 'snatches a burning taper from the nearest hand' },
    { n: 'The Lord\'s Stroke', w: 1, m: 1.9, heavy: true, tele: 'looks past you, toward the old man on the dais, and sets his feet' },
    { n: 'Steady, Lads', w: 1, m: 0, self: 'guard', tele: 'growls a sergeant\'s word to his men' }],
  loot: [['poultice', .7, 1], ['iron_scrap', .5, 1]],
  lore: 'He was a corporal once, in a company you would have recognised. He gives orders in the old Red Company cant. Somebody taught him.' };
TITHE.ITEMS.e5_robe = { name: 'A Lamplighter\'s Robe', type: 'quest', desc: 'Grey wool, a white seven-point star on the breast, a dead man\'s blood on the hem. Under the hood, the wearer had a gibbet-crew\'s rope calluses.' };
TITHE.ITEMS.e5_gideon_glove = { name: 'Ser Gideon\'s Glove', type: 'trinket', mods: { presence: 1 }, price: 0, desc: 'A champion\'s riding glove, given freely. In a hall full of lords it says: a better man than any of you thought this one worth the courtesy.' };
TITHE.CODEX.e5_feast = { title: 'The Feast of Lanterns', text: 'The Lamp\'s holy night of the dead. Every household writes the names of its dead on paper lanterns, and at midnight the whole town lets them go, thousands at once, to carry the souls up to the Saints. Children are told to wave. The Lamplighters count the lanterns. Nobody asks why.' };

TITHE.episode({
  n: 5, title: 'The Feast of Lanterns',
  logline: 'A prince comes to Harrowgate to buy a bride, a march and a dead man, and on the holiest night of the year somebody tries to kill the old lord under the eyes of the stars.',
  start: 'start',
  credits: ['ansel', 'tamsin', 'isolde', 'cassius', 'delphine', 'hask', 'varane', 'brannagh', 'gideon', 'abbess', 'pell', 'ulla', 'mags'],
  previously: [
    { t: 'Six years ago, Konrad Hask sold the Red Company at Corran\'s Ford. Ansel Dray died on the old stone, and woke up anyway.' },
    { if: 'f.e2_isolde_hired', t: 'Lady Isolde Varane hired him, quietly, to find her missing maid. He found Annet in the cisterns: breathing, eating, empty.', else: 'He found Lady Isolde\'s missing maid in the cisterns: breathing, eating, empty.' },
    { t: 'The Lamp came to Harrowgate: Lampwarden Brannagh Vey, hunting "a soul uncounted by Heaven," with a blind oracle in an iron cage.' },
    { if: "f.e3_edda==='saved'", t: 'He pulled Edda Moss off a Lamp pyre in the market square. Brannagh Vey has not forgotten his face.' },
    { if: "f.e3_edda==='burned'", t: 'Edda Moss burned in the market square for burying her father. He watched.' },
    { if: "f.e3_edda==='mercy'", t: 'On the pyre, Tamsin put an arrow through Edda Moss\'s heart before the fire could reach her.' },
    { t: 'At Saltdown, the Marshal\'s carts were delivering Hollowed people to the mines, to work in the dark until they died.' },
    { if: 'f.e4_ledger', t: 'Ansel took the overseer\'s ledger. "Deliveries from the Lanternhold." Names. Prices. Forty silver a head.' },
    { t: 'In the deep salt, the Tallyman looked straight at him, turned the pages of his book, and said: "You\'re not here."' }
  ],
  nextTime: [
    'A storm on the downs. A barrow door that has been shut for a thousand years.',
    '"They\'re kneeling. All of them. Kneeling to the lights."',
    '"Not like this," says Tamsin, in the dark. "Not with what I— not like this."'
  ],
  nodes: {

    /* ======================= PARTY ======================= */
    start: {
      route: [
        { if: 'f.e2_hob_hired', fx: { party: { add: ['tamsin', 'pell', 'ulla', 'hob'], remove: ['brannagh', 'oriel', 'mags', 'rusk'] } }, go: 'cold1' },
        { fx: { party: { add: ['tamsin', 'pell', 'ulla'], remove: ['hob', 'brannagh', 'oriel', 'mags', 'rusk'] } }, go: 'cold1' }
      ]
    },

    /* ======================= COLD OPEN ======================= */
    cold1: {
      loc: 'The River Harrow — the Prince\'s barge, dawn',
      text: [
        `Mist on the water, thick as wool. Forty oars dip and lift together with a sound like a slow heartbeat. The barge is painted the blue of a Corvane summer and gilded wherever gilt will stick, and on its prow a carved swan holds a lantern in its beak that has been burning since the capital.`,
        `In the stern cabin, a woman is asleep on her face in a bed too large for a boat. Dark hair across the pillow. One bare shoulder, one bare foot, the sheet kicked down to the small of her back. There is a bruise on her hip the shape of a thumb, which she gave herself on the doorframe at Pelling Lock and laughed about.`,
        `At the window, in a dressing gown the colour of butter, a man is reading a letter by the grey light.`,
        `He is thirty and looks it only around the eyes. Hair like a new coin. The kind of face that has been painted on a great many things and has never once needed to be flattered.`,
        `Prince Cassius Aldermere, heir to the throne of a dying king, reads the letter twice. On the second reading, he smiles.`
      ],
      next: 'cold2'
    },
    cold2: {
      text: [
        `The hand is a soldier's: square, pressed hard, the pen dug in at the downstrokes. It begins with a compliment, because the man who wrote it knows his reader.`,
        `*...the old man drinks before noon now and has stopped pretending otherwise. His canal is a ditch full of frogs. His girl is clever, which is a pity, and keeps the books, which is a greater one. The Lamp is with us, or near enough. Highness: the March is ripe. It wants only a firm hand at the right hour, and I have two.*`,
        `*Postscript. One of my dead men has walked in at the East Gate. My old sergeant, Dray, whom I saw killed at Corran's Ford with my own eyes. He keeps his left hand gloved and will not sleep under the sky. I thought of you at once. You do collect things.*`,
        `*Your servant in all weathers. K. Hask, Marshal.*`
      ],
      next: 'cold3'
    },
    cold3: {
      text: [
        `Behind him, the woman rolls over and pushes the hair out of her face.`,
        '@delphine: "You\'re smiling at paper again. It\'s unhealthy."',
        '@cassius: "It\'s a love letter, Delphine. From a man who would sell me to the Queen-in-exile tomorrow if her price were a penny better. I find that very restful. One always knows where one is with Konrad."',
        `She sits up, unbothered by the sheet, and holds out her hand. He doesn't give her the letter. He tells her what is in it instead, which is how he gives people things.`,
        '@delphine: "And the girl? Your bride."',
        '@cassius: "Clever, he says. Pity, he says." He folds the letter into a neat square and drops it out of the window into the river. "I\'ve met stupid women. They\'re exhausting. You have to explain everything twice and they still find a way to be loyal to the wrong person."'
      ],
      next: 'cold4'
    },
    cold4: {
      text: [
        `A servant boy knocks, enters with a tray, and stops dead at the sight of the bed. Cassius takes a cup from the tray without looking at him.`,
        '@cassius: "Where\'s Aubrey? The other boy."',
        '@narrator: "Put ashore at Fennick Staithe, Highness. As you ordered. For the wine."',
        '@cassius: "Oh, yes." Mildly. "He spilled on the Hierarch\'s envoy. He\'ll find his way home, or he won\'t and he\'ll find another one. Either way he\'ll learn something, which is more than the envoy will." He sips. "This is cold. Never mind. Thank you."',
        `The boy goes out very carefully.`,
        '@delphine: "The dead sergeant," Delphine says, from the bed. "You want him."',
        '@cassius: "I want to know what he is. Wanting comes after." He turns back to the window. "Find out, would you, darling? You\'re so much better at it than I am."'
      ],
      next: 'cold5'
    },
    cold5: {
      text: [
        `The barge comes round the long bend below the water-meadows, and the mist lifts like a curtain going up.`,
        `Harrowgate stands on its hill in the low sun: grey walls, slate roofs, the square keep, the pale bulk of the Lanternhold with its tower burning blue. And everywhere, on every eave and gable and wall-walk, strung across every street, hung in every window, paper lanterns. Thousands of them. Unlit. Waiting for tonight.`,
        `From the river the whole town looks like a tree heavy with fruit that nobody has picked.`,
        '@cassius: "Ripe," says the Prince, to nobody, and goes to dress.'
      ],
      next: 'titles'
    },
    titles: {
      card: { kind: 'titles' },
      fx: { know: { cast: ['cassius', 'delphine'], codex: ['e5_feast'] } },
      next: 'act1'
    },
    act1: {
      card: { kind: 'act', title: 'Part One', sub: 'The Prince Comes' },
      next: 'a1_stair'
    },

    /* ======================= ACT ONE: THE PRINCE COMES ======================= */
    a1_stair: {
      loc: 'Harrowgate — the Water Stair, morning',
      text: [
        `You are wearing a hat.`,
        `It is a Varane household hat, blue felt with the boar badge, issued with a blue tabard that smells of the last man who sweated in it and a halberd you have no intention of using. Lord Varane himself asked for you by name, after Saltdown. *Men I can trust in the castle for the Feast*, his steward said. *His lordship can count them on one hand. He'd like you to be a finger.*`,
        { if: "f.e2_hask_job==='took'", t: `You are also, on paper, the Marshal's town sword. Two masters, one hat. Hask laughed when he heard. He laughs at most things.` },
        `Your hands are shaking. You put them behind your back, which is at least regimental.`,
        `Below you on the Water Stair, the whole of Harrowgate's better sort waits in its best clothes for the Prince's barge. Behind you, the worse sort, which is to say your people.`,
        '@tamsin: "I want it noted," says Tamsin, "that I have never respected you less, and I once watched you lose an argument to a horse."',
        '@ulla: "I like the hat," says Ulla Stonehand, who is eating a pie the size of a cartwheel. "It makes you look like a man with a pension."',
        { if: "inParty('hob')", t: `Hob is somewhere behind you, in borrowed livery that stops four inches short of his wrists, vibrating with joy. He has been told he may hold the Prince's horse. He has not slept.` },
        `Brother Pell sits on a bollard with his head in his hands, gently steaming, like a pudding.`
      ],
      choices: [
        { t: '"One more word about the hat."', go: 'a1_hat' },
        { t: '"Pell. Tell me about tonight. Properly."', go: 'a1_pell' },
        { t: '"Tamsin. Do the fen-folk let lanterns go?"', go: 'a1_tam' }
      ]
    },
    a1_hat: {
      text: [
        '@tamsin: "Hat."',
        '@ulla: "I\'d bed you in that hat."',
        '@ansel: "You don\'t bed men, Ulla."',
        '@ulla: "For the hat I\'d make an exception. I\'d close my eyes and think of the hat." She offers you the pie. You take a bite, because it would be rude not to, and it is the best pie you have ever eaten, and she watches your face with enormous satisfaction.',
        '@ulla: "Mags made it. I\'m going to marry Mags."',
        '@tamsin: "Get in line."',
        `She says it lightly. She doesn't look at you when she says it. You notice that you noticed.`
      ],
      fx: { bond: { ulla: 1, tamsin: 1 }, quiet: true },
      next: 'a1_barge'
    },
    a1_pell: {
      text: [
        `Pell lifts his head. His eyes are the colour of a bad oyster.`,
        '@pell: "The Feast of Lanterns. Holy night of the dead. Every house writes its dead on a lantern, every lantern carries a soul, and at midnight the whole town lets them go together, and the Saints reach down and count them in." He recites it in the voice he must once have used from a pulpit, and then sags. "Every name a candle, every candle a soul. Up it goes. Very pretty. You\'ve never seen it?"',
        '@ansel: "Lowmarch burned its lanterns in the street. Too poor for paper."',
        '@pell: "I write two, every year. My mother. And a boy I taught his letters, at the Lanternhold, years ago. Bright. Asked questions." He looks up the hill at the blue tower. "He went into the white ward with a fever and came out with nothing behind his eyes. I asked the Abbess what had been done for him. That was my first question. Not my last."'
      ],
      fx: { bond: { pell: 1 }, quiet: true },
      next: 'a1_barge'
    },
    a1_tam: {
      text: [
        `Tamsin takes a while to answer, which is unlike her.`,
        '@tamsin: "Fen-folk put a bowl of milk by the water and leave it. The dead come and drink if they want. Or a fox does. Either\'s fine." She shrugs. "Lanterns are for people who want their dead as far away as possible. Up there, where they can\'t come home and ask for anything."',
        '@ansel: "That\'s bitter."',
        '@tamsin: "That\'s *theology*, Sergeant." She grins, chipped tooth, and the grin goes out a bit early. "I\'m going to do one anyway. A lantern. Don\'t ask me why. I don\'t know why."'
      ],
      fx: { bond: { tamsin: 1 }, quiet: true, set: { e5_tam_lantern: 1 } },
      next: 'a1_barge'
    },
    a1_barge: {
      text: [
        `The barge comes in under oars and kisses the stair as gently as a hand finding a hand.`,
        `Up the steps they come, in an order somebody has argued about for a month. Ser Gideon Vail first, the Prince's champion: forty, grey-eyed, a plain sword, the kind of stillness in him that you only see in very good fighters and very good monks. Then a herald. Then the Prince.`,
        `He comes up the Water Stair bareheaded in a plain dark coat that cost more than the Water Stair. He is laughing at something. He has the gift, which you have seen in perhaps three men in your life, of making the person he laughs with feel they have been chosen.`,
        `At the top, gouty Lord Varane waits on a cane in his best furs, sweating. Beside him, Lady Isolde, in grey-blue, hair pinned up properly for once, her face as composed as a closed book. Behind them the Abbess with a lit lantern in her hands, humming. Beside the Abbess, in white enamelled plate, Lampwarden Brannagh Vey, who looks at the Prince the way a hawk looks at a weathervane.`,
        `And at the head of the honour guard, splendid in blue and steel, Ser Konrad Hask, Marshal of Harrowgate, who bows lowest of all.`,
        `Cassius kisses Isolde's hand and says something into her knuckles. The lady beside her laughs. Isolde doesn't.`,
        `Then his eyes come up and travel along the line of the guard, idly, the way a man reads the spines of books he already owns. They reach you. They stop.`,
        `He looks at your face, and then, unhurried, at your left hand, in its glove, on the halberd. He smiles as if you have told him a joke only the two of you will ever understand. Then he moves on.`,
        `Last off the barge, in green silk, a dark-haired woman who looks at everything, and at you twice.`
      ],
      fx: { know: { cast: ['gideon', 'varane', 'isolde', 'abbess', 'brannagh', 'hask'] } },
      next: 'a1_hask'
    },
    a1_hask: {
      text: [
        `The procession winds up into the town under the unlit lanterns. As the honour guard turns, Hask falls back half a step, which puts him at your shoulder for the length of three stairs.`,
        { if: "f.e1_hask_meeting==='drew'", t: '@hask: "No sword out today? You\'re growing up."' },
        { if: "f.e1_hask_meeting==='spat'", t: '@hask: "Mind the boots, Sergeant. They\'re new."' },
        { if: "f.e1_hask_meeting!=='drew' && f.e1_hask_meeting!=='spat'", t: '@hask: "Sergeant."' },
        '@hask: "Varane blue. It suits you. Red suited you better." He doesn\'t look at you; he is smiling at the crowd, who are calling his name. "Did you see His Highness look at you? He did that to a horse once, at the Corvane fair. Bought it that afternoon. It was a very good horse. He had it gelded."'
      ],
      choices: [
        { t: 'Say nothing. Keep your eyes front. Let him talk to the side of your face.', go: 'a1_hask_quiet' },
        { t: '"Tell your prince I\'m not for sale."', go: 'a1_hask_sale' },
        { t: '"Saltdown sends its regards, Captain. The overseer especially."', go: 'a1_hask_salt' }
      ]
    },
    a1_hask_quiet: {
      text: [
        `You keep your eyes front. It costs you something. He knows exactly what.`,
        '@hask: "That\'s the way. Old soldier\'s face. Give them nothing." Something like fondness. "I taught you that, you know. The day we hanged that horse-thief at Aldbridge and you wanted to cry. You were seventeen."',
        `He goes back to the head of the line before you can decide whether to break his jaw.`
      ],
      fx: { rep: { varane: 1 } },
      next: 'a1_varane'
    },
    a1_hask_sale: {
      text: [
        '@hask: "Everything\'s for sale, Ansel. The trick is to be expensive." He finally glances at you. "You were the most expensive thing I ever sold. Remember that, on the bad nights. It\'s a kind of compliment."',
        `He goes back to the head of the line. The crowd cheers him. A child throws a flower, and he catches it and puts it behind his ear, and they love him for it.`
      ],
      next: 'a1_varane'
    },
    a1_hask_salt: {
      text: [
        `For the length of one stair, Konrad Hask's smile stays exactly where it is and nothing behind it moves at all. It is the most frightening thing you have seen him do since a riverbank six years ago.`,
        '@hask: "Saltdown." Pleasantly. "Dull place. I\'d stay away from it, if I were you. Salt gets into everything. Wounds especially."',
        `He claps you on the shoulder, warm, generous, and goes back to the head of the line. Tamsin, two ranks back, lets out a breath through her teeth.`,
        '@tamsin: "Well. *He* knows that you know."'
      ],
      fx: { set: { e5_hask_warned: 1 }, rep: { town: 1 } },
      next: 'a1_varane'
    },

    a1_varane: {
      loc: 'Varane Keep — the Lord\'s solar, noon',
      text: [
        `Lord Aurel Varane receives you in a solar full of maps of a canal that does not exist. He has his gouty foot up on a cushion and a cup of wine he does not offer to share, then remembers himself and does.`,
        '@varane: "Dray. Good. Sit, sit. You did well at Saltdown. Better than I wanted, if I\'m honest, I didn\'t want to know half of what you told me, and I still don\'t." He laughs, and it turns into a cough. "Tomorrow night, at the Feast, I sign my daughter to the Crown. The contract, the dowry, the March as surety. I would like to be alive to do it, and I would like her to be safe while I do."',
        { if: "f.e2_hask_job==='took'", t: '@varane: "I know you take the Marshal\'s coin as well. I don\'t mind. Everybody in Harrowgate takes Konrad\'s coin. I\'ve taken it." He looks into his cup. "That\'s rather the trouble."' },
        '@varane: "Ten men in this castle who are not the Marshal\'s. That\'s all I wanted. You\'re the fourth I\'ve found."'
      ],
      fx: { quest: { id: 'e5_feast', title: 'The Feast of Lanterns', state: 'active', note: 'Lord Varane has hired you as a castle guard for the Feast of Lanterns, when he signs Isolde to Prince Cassius.' } },
      choices: [
        { t: '"Why me, my lord?"', go: 'a1_var_why', once: true },
        { t: '"Your Marshal sells people, my lord. You know it."', go: 'a1_var_hask', once: true },
        { t: '"Who am I guarding? You, or the Prince?"', go: 'a1_var_guard', once: true },
        { t: '"I\'ll keep you alive, my lord."', go: 'a1_isolde' }
      ]
    },
    a1_var_why: {
      text: [
        '@varane: "Because Konrad hates you and likes you, both at once, and I have never seen him do that with anyone else. A man the Marshal can\'t make up his mind about is the nearest thing to a free man I have." He shifts his foot and winces. "And because my daughter trusts you. She doesn\'t trust me. She\'s right not to."'
      ],
      fx: { rep: { varane: 1 } },
      next: 'a1_varane'
    },
    a1_var_hask: {
      text: [
        `The old man's face does something you have seen on a lot of faces, in taverns, at the end of the night: the face of someone who has been told the truth and is trying to find a way to have not heard it.`,
        '@varane: "Konrad has served this house for eight years. The roads are clear. The town loves him. The Crown... trusts him." He sets the cup down too carefully. "After the Feast. After the signing. Bring me what you have, after. I can\'t— not with the Prince in the house. Do you understand? I can\'t afford to know it this week."',
        `You understand. You understand that a man has just told you he will be murdered at a time of his own convenience.`
      ],
      fx: { set: { e5_told_varane: 1 } },
      next: 'a1_varane'
    },
    a1_var_guard: {
      text: [
        '@varane: "My daughter," he says, at once. Then, slower: "From everyone. From the Prince. From Konrad. From the Lamp, I suppose, these days." He looks at the canal maps. "From me, too, if you can manage it. I\'ve sold her already. I sold her with that ditch."'
      ],
      fx: { bond: { isolde: 1 }, quiet: true },
      next: 'a1_varane'
    },

    a1_isolde: {
      text: [
        `The door opens without a knock. Lady Isolde comes in with three account books under one arm and ink on two fingers, sees you, and doesn't stop.`,
        '@isolde: "Father, the Prince\'s steward wants the dowry in Corvane coin, not ours. Ours is clipped. Everyone knows ours is clipped." She sets the books down. "Mister Dray."',
        '@ansel: "My lady."',
        `She deals with her father's steward, her father's wine, her father's foot, in that order, briskly, like a woman clearing a table. Then she says she'll show you the guard-posts herself, and walks you out along the long gallery where the ancestors hang, and slows down when the door shuts behind you.`,
        { if: 'f.e2_told_isolde_truth', t: '@isolde: "I go up to the Lanternhold every Thursday to sit with Annet. You told me where she was, and how. You could have softened it. Nobody else in my life has ever not softened it." A pause. "She doesn\'t know me. I hold her hand anyway. I think that\'s for me."' },
        { if: '!f.e2_told_isolde_truth', t: '@isolde: "I go up to the Lanternhold every Thursday to sit with Annet. She doesn\'t know me. I hold her hand anyway." A pause. "I\'ve been thinking about where you found her. I don\'t think you told me all of it."' },
        '@isolde: "You went to Saltdown for my father. Did you find anything there that I should know? Not him. Me."'
      ],
      choices: [
        { t: '"Yes. Not here. Not with the Prince in the house."', go: 'a1_iso_yes' },
        { t: '"Salt. A worm. A lot of tired men." (Lie, to keep her out of it.)', go: 'a1_iso_lie' },
        { t: '"Do you want to marry him?"', go: 'a1_iso_want' }
      ]
    },
    a1_iso_yes: {
      text: [
        `She doesn't ask. You watch her not ask, which is a thing she does with her whole body, the way a rider sits a horse that wants to bolt.`,
        '@isolde: "The archive," she says. "Above the chapel. I keep the key. Nobody goes there but me and the mice." She looks at the portraits rather than at you. "Tomorrow night. When it\'s over."'
      ],
      fx: { bond: { isolde: 1 }, set: { e5_archive_invite: 1 } },
      next: 'a1_kitchen'
    },
    a1_iso_lie: {
      text: [
        `She looks at you for a long moment. She keeps the books of a bankrupt March; she has spent her life watching men give her round numbers.`,
        '@isolde: "You\'re a poor liar, Mister Dray. It\'s one of the things I like about you." A small, dry smile. "Very well. Keep me out of it. I\'ll let you think you have."'
      ],
      next: 'a1_kitchen'
    },
    a1_iso_want: {
      text: [
        `It is not a question a hired guard asks a lord's daughter. She stops walking.`,
        '@isolde: "I want Harrowgate to exist next year." Very evenly. "I want four thousand people not to find out what happens to a March when the Crown absorbs it. I want my father to die in his bed, and the mills to keep grinding, and the Lanternhold to have bread." She starts walking again. "What I *want* isn\'t one of the columns, Mister Dray. I stopped keeping that column when I was fourteen."',
        `At the end of the gallery she stops again, without turning round.`,
        '@isolde: "Nobody\'s asked me that. Not one person. Thank you."'
      ],
      fx: { bond: { isolde: 2 } },
      next: 'a1_kitchen'
    },

    a1_kitchen: {
      loc: 'Varane Keep — the great kitchens, afternoon',
      text: [
        `The kitchens are a battlefield. Sixty cooks, three oxen turning on spits, a swan being sewn back into its own feathers by a girl with her tongue between her teeth. Somebody is crying in the scullery. Somebody is always crying in the scullery.`,
        `In the middle of it, sleeves rolled to the shoulder, Mags Halloran is shouting at a Corvane pastry-cook in a voice that rattles the copper pans. The Gutted Hen has the contract for the small beer. Mags has decided this gives her authority over everything else.`,
        { if: 'f.e2_mags', t: 'She sees you, and something private crosses her face and is folded away. "Sergeant. You look like a footman. Come here and taste this, it\'s for the Prince, and if it kills you I\'ll know not to serve it."', else: '@mags: "Sergeant. You look like a footman. Come and taste this. It\'s for the Prince, and if it kills you I\'ll know not to serve it."' },
        `Tamsin is already at the pastry table, eating something shaped like a swan, with two more down her shirt.`,
        '@mags: "Here. Strange thing." She lowers her voice under the din. "Lanternhold sent up a dozen Lamplighters to help hang the lanterns and set the tapers for the Lord\'s Lantern. Grey robes, stars, very holy. Never seen one of their faces before, and I know every Lamplighter in this town because they all drink on credit." She wipes her hands. "They eat like soldiers. Hunched over the bowl, one arm round it."',
        '@ulla: "Soldiers?" says Ulla, from inside a ham.',
        '@mags: "They eat like men who think it\'s their last good dinner."'
      ],
      choices: [
        { t: '"Where are they quartered?"', go: 'a1_kit_where' },
        { t: '"Pell. You were a Lamplighter. Would you know them?"', go: 'a1_kit_pell' },
        { t: '"Tamsin. Put the swans back."', go: 'a1_kit_tam' }
      ]
    },
    a1_kit_where: {
      text: [
        '@mags: "They sleep in the lantern store under the Chapel Tower. With the lanterns. Asked for it special. Said the Abbess wanted the lanterns watched by holy men." She snorts. "Holy men don\'t ask for the room with one door."'
      ],
      fx: { set: { e5_mags_tip: 1 }, bond: { mags: 1 }, quiet: true, quest: { id: 'e5_robes', title: 'Men in Lamp Robes', state: 'active', note: 'Mags says a dozen strange Lamplighters are quartered in the lantern store under the Chapel Tower. They eat like soldiers.' } },
      next: 'a1_night'
    },
    a1_kit_pell: {
      text: [
        `Pell takes the question seriously. He goes to the scullery door and looks out across the yard to where two grey-robed figures are carrying a crate of lanterns, and watches them for a long time.`,
        '@pell: "No," he says. "And I\'d know them. I know the walk. Lamplighters walk like their feet hurt, because they do, because we— they go barefoot in the chapel. Those two walk like men in boots who\'ve taken their boots off this morning." He turns round, pale. "Those are soldiers, Ansel."'
      ],
      fx: { set: { e5_mags_tip: 1 }, bond: { pell: 1 }, quiet: true, quest: { id: 'e5_robes', title: 'Men in Lamp Robes', state: 'active', note: 'Strange Lamplighters in the Keep. Pell says they walk like soldiers. They sleep in the lantern store under the Chapel Tower.' } },
      next: 'a1_night'
    },
    a1_kit_tam: {
      text: [
        '@tamsin: "Which swans?"',
        `A swan's neck is sticking out of her collar. She looks down at it. She looks up at you, gravely.`,
        '@tamsin: "That\'s a growth, Sergeant. It\'s very rude to mention it."',
        `Mags laughs so hard she has to sit on a flour sack. The Corvane pastry-cook throws up his hands and leaves the room, and in the gap he leaves, Mags tells you the rest: the strange Lamplighters sleep in the lantern store under the Chapel Tower.`
      ],
      fx: { bond: { tamsin: 1, mags: 1 }, quiet: true, set: { e5_mags_tip: 1 }, quest: { id: 'e5_robes', title: 'Men in Lamp Robes', state: 'active', note: 'A dozen strange Lamplighters in the Keep. They sleep in the lantern store under the Chapel Tower.' } },
      next: 'a1_night'
    },

    a1_night: {
      loc: 'Under the Chapel Tower — the lantern store, night',
      text: [
        `You take the midnight watch on the chapel yard because nobody else wants it. Tamsin comes along because, she says, she wants to see you fall asleep standing up in that hat.`,
        `The lantern store is a vaulted undercroft stacked to the ribs with paper lanterns, ten thousand of them, pale and folded like moths asleep. It smells of paper and lamp oil and, faintly, of men.`,
        `A light at the far end. Two grey robes, hoods down. They have a crate of lanterns open, and they are not putting lanterns in it.`,
        `Crossbows. Short ones, cavalry pattern, wrapped in sacking. A bundle of bolts. Long knives.`,
        `Tamsin's hand closes on your sleeve.`
      ],
      choices: [
        { t: 'Hold still. Watch. Listen. Learn the plan before you spoil it.', check: { stat: 'finesse', dc: 14, pass: 'a1_watch_ok', fail: 'a1_watch_bad' } },
        { t: 'Step into the light. "Evening, brothers. Bless me, I\'ve sinned."', go: 'a1_challenge' },
        { t: '"Tamsin. Their lamp."', go: 'a1_tamshot' }
      ]
    },
    a1_watch_ok: {
      text: [
        `You don't breathe. Beside you, neither does Tamsin. The two men work quietly, the way men do when they've been told what to do by somebody who will check.`,
        '@narrator: "Four in the gatehouse crates," murmurs the older one. "Two on the roof. When the old man lifts the taper for the first lantern. Not before. The rest of us close on the dais in the crush."',
        '@narrator: "And the girl?"',
        '@narrator: "Nobody touches the girl. The girl\'s *bought*." A short laugh. "Sergeant says if anyone so much as singes her hair, he\'ll hang us at the Cross himself, and he will."',
        `*Sergeant.* Not Marshal. Somebody's sergeant. You know the cadence of it. Then the younger one turns with a lantern in his hand and looks straight at the dark where you are standing.`
      ],
      fx: { set: { e5_knew_plan: 1 }, quest: { id: 'e5_robes', note: 'Overheard: crossbows in the gatehouse crates. When Lord Varane lifts the taper for the first lantern, men on the roof shoot, and robed men close on the dais.' } },
      next: 'a1_fight'
    },
    a1_watch_bad: {
      text: [
        `You shift your weight, and a stack of folded lanterns slides off a shelf beside you with a sound like a flock of birds taking off.`,
        `Both men turn. Neither of them says *who's there*. Lamplighters say *who's there*. These two just drop the sacking and come at you, knives already out, low and quick and silent, the way you were trained to do it.`
      ],
      next: 'a1_fight'
    },
    a1_challenge: {
      text: [
        '@ansel: "Evening, brothers. Bless me, I\'ve sinned."',
        `The older one smiles at you. A good, easy, priestly smile. He has rope calluses across both palms like a gibbet crew's, and you watch them while he smiles.`,
        '@narrator: "Light keep you, son. Go back to your post."',
        '@ansel: "What\'s in the crate?"',
        '@narrator: "Lanterns," he says, and throws the knife.'
      ],
      fx: { hp: -3 },
      next: 'a1_fight'
    },
    a1_tamshot: {
      text: [
        `She has an arrow nocked before you finish the word. It goes the length of the undercroft and through the little horn lantern on the crate, and the light goes out with a pop and a hiss, and for a moment there is total dark and two men swearing in the Kingsroad accent.`,
        '@tamsin: "Now we\'re all equally blind," she whispers. "Except I\'m not."'
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'a1_fight'
    },
    a1_fight: {
      fight: { foes: ['e5_knifeman', 'e5_knifeman'], title: 'The Lantern Store', win: 'a1_after',
        intro: 'Grey robes, soldier\'s knives. Keep them off the lamp oil.' }
    },
    a1_after: {
      text: [
        `It ends among the paper. One of them is dead with Tamsin's arrow under his arm. The other is on his back on a bed of crushed lanterns, holding his belly closed with both hands, and the lanterns around him are turning red from underneath, slowly, like poppies opening.`,
        `You kneel by him. He's forty, maybe. A broken nose. The rope calluses. You've seen his face before, at Hangman's Cross, sitting on a gibbet-ladder eating bread.`,
        '@tamsin: "He\'s one of the Marshal\'s gibbet crew," says Tamsin quietly. "He hanged the Dunnock boy. I watched."',
        `The dying man isn't looking at either of you. He is looking past your shoulder, into the dark between the stacks, and his face goes slack and childish.`,
        '@narrator: "There\'s a man," he says. "Behind you. Tall. With a book." He frowns, the way a child frowns at a sum. "He\'s writing me down. He\'s not... he\'s not writing *you*. Why isn\'t he writing you?"',
        `You don't turn round. Your palm burns inside the glove like a coal.`,
        `When you look down again, he's dead, and the dark behind you is only dark.`
      ],
      fx: { give: { e5_robe: 1 }, rep: { varane: 1 }, quest: { id: 'e5_robes', note: 'Two of the robed men are dead in the lantern store. One was a gibbet-hand of the Marshal\'s. You took a robe.' } },
      choices: [
        { t: 'Raise the alarm. Bells, torches, the whole guard. Let the castle know.', go: 'a1_alarm' },
        { t: 'Hide them under the lanterns. Say nothing. Let whoever sent them think they\'re still in place.', go: 'a1_hide' },
        { t: 'Take the robe across the yard. The Lampwarden practises there at night. They\'re her church\'s robes.', go: 'a1_robe_bran' }
      ]
    },
    a1_alarm: {
      text: [
        `The bell in the Chapel Tower goes for the first time in twenty years. Torches. Shouting. Men-at-arms tumbling out of the barracks half-dressed.`,
        `And at the head of them, fully dressed, sword belted, hair combed, Ser Konrad Hask, who must sleep in his boots.`,
        `He looks at the bodies, and the crate, and the crossbows, and at you. And then he does the thing that makes him what he is: he takes it all and turns it into a story with himself at the end of it.`,
        '@hask: "Bandits in Lamp robes. In the Keep, on Feast night. Saints." He shakes your hand in front of forty men. "Good work, Sergeant. I\'ll double the guard. My best men on the gatehouse. Nobody comes near his lordship tomorrow without going through me."',
        `Forty men cheer the Marshal. You stand there with your hand still warm from his, and you understand that you have just helped him choose who guards the gatehouse.`
      ],
      fx: { set: { e5_alarm: 1 }, rep: { varane: 1, town: 1 } },
      next: 'a1_yard'
    },
    a1_hide: {
      text: [
        `You lay them out at the back of the undercroft, under a drift of spoiled lanterns, and Tamsin kicks paper over the blood until it looks like a carpet of autumn leaves. She is very good at it. You decide not to ask how.`,
        '@tamsin: "Somebody\'s going to come looking for them."',
        '@ansel: "Good. I want to see who."',
        '@tamsin: "Sergeant, that\'s the most sinister thing you\'ve ever said, and you once told me about a man you killed with a saddle."'
      ],
      fx: { set: { e5_hid_bodies: 1 } },
      next: 'a1_yard'
    },
    a1_robe_bran: {
      text: [
        `You carry the robe out across the chapel yard with the blood still wet on the hem. Tamsin stays with the bodies, unhappy about it.`,
        '@tamsin: "Go on, then. Show the nice nun your present."'
      ],
      fx: { set: { e5_robe_shown: 1 } },
      next: 'a1_yard'
    },

    a1_yard: {
      loc: 'The chapel yard — after midnight',
      text: [
        `Under the walls, by the well, in the light of a single torch, someone is drilling.`,
        `Lampwarden Brannagh Vey, out of her plate: a sweat-dark linen shirt, breeches, bare feet on the cold flags. A wooden waster in her hands. She moves through the old forms, guard and cut and turn, over and over, with a terrible patience, as though the forms were a prayer she is trying to say correctly once.`,
        `Her shirt is open at the back from the work. You can see the scars from the knotted cord, old and new. The starfire burn runs down her throat into the collar like spilled wax.`,
        `She doesn't stop.`,
        '@brannagh: "You\'ve been standing there a quarter of an hour, Dray. Either pray or fight. I don\'t care which."',
      ],
      choices: [
        { if: 'f.e5_robe_shown', t: 'Hold up the robe. Bloody hem first.', go: 'a1_bran_robe' },
        { if: '!f.e5_robe_shown', t: 'Step into the torchlight.', go: 'a1_bran_choice' }
      ]
    },
    a1_bran_robe: {
      text: [
        `She takes it from you and turns it in the torchlight. Her fingers find the white star, the stitching, the Lanternhold laundry-mark inside the collar, and then the blood.`,
        '@brannagh: "That\'s ours." Flat. "Real. Not a copy. That\'s Sister Hawise\'s mending on the cuff, I\'d know it anywhere, she does it in threes." She looks up at you, and for once there is nothing in her face but a soldier\'s question. "Who was in it?"',
        '@ansel: "A man who hangs people at crossroads for the Marshal. He had crossbows in your lantern crates."',
        `She is quiet for a long time.`,
        '@brannagh: "Robes go missing from laundries. Men steal them." She hands it back. Her hand is not quite steady. "I\'ll ask the Abbess. Tomorrow. Myself."',
        `It sounds like a vow. You suspect she means it as one.`
      ],
      fx: { set: { e5_bran_robe: 1 }, bond: { brannagh: 1 } },
      next: 'a1_bran_choice'
    },
    a1_bran_choice: {
      text: [
        `She tosses you the second waster from the well-step. You catch it without thinking. It's ash, heavy, oiled with use.`,
        { if: "f.e3_edda==='saved'", t: '@brannagh: "You took a witch off my pyre. I have wanted to hit you with something since."' },
        { if: "f.e3_edda==='mercy'", t: '@brannagh: "Your fen-girl put an arrow in my witch\'s heart. I\'ve been told it was mercy. I\'d like to hit someone about it."' },
        { if: "f.e3_edda==='burned'", t: '@brannagh: "You watched my pyre and didn\'t lift a finger. I can\'t decide if I respect that or despise it. Help me decide."' },
        '@brannagh: "They say you\'re the best blade in the March. They say that about me. One of them is wrong."'
      ],
      choices: [
        { t: 'Take your guard.', go: 'a1_spar_fight' },
        { t: '"I don\'t fight people I might have to kill one day."', go: 'a1_spar_no' },
        { t: '"Why do you whip yourself?"', go: 'a1_spar_ask' }
      ]
    },
    a1_spar_ask: {
      text: [
        `The waster stops in mid-form.`,
        '@brannagh: "Because I am a body, Dray, and bodies want things." She says it without shame, like a quartermaster listing stores. "Sleep. Meat. Warmth. Other bodies. Every want is a little rope tying you to the ground. The cord cuts the ropes." She begins the form again. "You drink. Same reason, I think. Mine leaves less of a mess."',
        `You don't have an answer to that, so you take your guard.`
      ],
      fx: { bond: { brannagh: 1 }, quiet: true },
      next: 'a1_spar_fight'
    },
    a1_spar_fight: {
      fight: { foes: ['brannagh_foe'], solo: true, noWound: true, noLoot: true, title: 'Wooden Blades', win: 'a1_spar_won', lose: 'a1_spar_lost',
        intro: 'Ash wasters. No armour. She stops smiling when she means it.' }
    },
    a1_spar_won: {
      text: [
        `It is not elegant. The forms go out of it after the first minute and what is left is two people who learned to fight in places where the loser didn't get up.`,
        `She is faster than you. She knows it, and it makes her careless once, and once is enough: you take a cut on the forearm that will be black by morning, step through it, and put her on her back on the flagstones with the point of the waster in the hollow of her throat, just over the burn.`,
        `She lies there breathing hard. So do you. Her chest rises against the wood. Neither of you moves the waster. Neither of you says anything for a while.`,
        '@brannagh: "Get off me," she says at last, very quietly. Not angrily.',
        `You do. She gets up, and picks up her waster, and her boots, and walks away across the yard without looking back. At the chapel door she stops with her hand on the iron.`,
        '@brannagh: "Same time tomorrow night, I\'d kill you," she says, to the door. Then she goes in.'
      ],
      fx: { set: { e5_brannagh_spar: 'won' }, bond: { brannagh: 2 }, xp: 60, hp: -4 },
      next: 'a1_bed'
    },
    a1_spar_lost: {
      text: [
        `She hits you in the mouth with the pommel early, just to see what you'll do, and you do the wrong thing, which is get angry.`,
        `After that it's a lesson. A precise one. Ribs, wrist, the back of the knee, and you're on your knees on the wet flags with the waster laid along your neck, light as a hand.`,
        `She's breathing hard. Her shirt is stuck to her. She stays like that, above you, longer than she needs to; you can feel the heat coming off her, and the pulse in the wood.`,
        '@brannagh: "You let your temper in," she says. "I thought you\'d be better."',
        '@ansel: "So did I."',
        `Something almost like a smile. She takes the waster away, and picks up her boots, and walks off across the yard, and at the chapel door she stops.`,
        '@brannagh: "You\'re bleeding on my yard, Dray. Put something on it." And goes in.'
      ],
      fx: { set: { e5_brannagh_spar: 'lost' }, bond: { brannagh: 1 }, xp: 30 },
      next: 'a1_bed'
    },
    a1_spar_no: {
      text: [
        '@brannagh: "Then you\'ll never fight anyone worth fighting."',
        `She takes the waster back out of your hand, not gently. For a moment you are close enough to smell her: sweat, lye soap, cold iron, the faint scorched-hair smell of the starfire scar.`,
        '@brannagh: "You think you\'re being kind. You\'re being frightened. I know the difference. I teach it to novices."',
        `She goes back to her forms. When you leave, she is still at it, guard and cut and turn, saying her prayer wrong in the torchlight.`
      ],
      next: 'a1_bed'
    },
    a1_bed: {
      loc: 'The guardroom under the gatehouse — late',
      text: [
        `You get two hours on a cot under the gatehouse, which has a stone ceiling and no windows and is therefore the best bed you have had in a month.`,
        `Tamsin is on the next cot with her boots on, awake. She looks at your face in the light of the stub candle.`,
        { if: 'f.e5_brannagh_spar', t: '@tamsin: "Who hit you?"', else: '@tamsin: "You smell like a church."' },
        { if: 'f.e5_brannagh_spar', t: '@ansel: "The Lampwarden."' },
        { if: 'f.e5_brannagh_spar', t: '@tamsin: "Huh." A pause exactly as long as it takes to decide not to say something. "With swords?"' },
        { if: 'f.e5_brannagh_spar', t: '@ansel: "Sticks."' },
        { if: 'f.e5_brannagh_spar', t: '@tamsin: "*Sticks.*" She rolls over to face the wall. "Lovely. Very wholesome. Go to sleep, Sergeant."', else: '@tamsin: "Go to sleep, Sergeant. Somebody\'s trying to kill a lord tomorrow and you\'re no good to him yawning."' },
        `You lie there and listen to her pretend to sleep, and she listens to you do the same, and somewhere above you in the dark the town's ten thousand lanterns hang waiting on their strings.`
      ],
      fx: { rest: true },
      next: 'act2'
    },

    /* ======================= ACT TWO: THE MELEE ======================= */
    act2: {
      card: { kind: 'act', title: 'Part Two', sub: 'The Melee' },
      next: 'a2_lists'
    },
    a2_lists: {
      loc: 'The tilt-yard below the Keep — Feast day, morning',
      text: [
        `The whole town has come up to the tilt-yard, and most of the countryside. Stands of raw timber hung with Varane blue and Aldermere gold. Pie-men. Pickpockets. A bear on a chain that nobody has explained.`,
        `Under a gold canopy sits the Prince, at ease, one boot up on the rail. Isolde beside him, upright as a candle. Lord Varane on his cushions with his foot wrapped. The Abbess with a basket of honey-cakes she hands down to children. Brannagh in her plate at the end of the row, not sitting.`,
        { if: "f.e5_brannagh_spar==='won'", t: `She has a mark on her throat, just over the burn, where your waster rested. She has not covered it.` },
        { if: "f.e5_brannagh_spar==='lost'", t: `Your ribs remember her every time you breathe.` },
        `The melee is the Feast's old custom: twenty swords on foot, blunted steel, no rules worth the name, the last man standing takes the purse. Harrowgate's knights and the Prince's. And, because Lord Varane put your name down at breakfast without asking you, one dead sergeant in a borrowed hauberk.`,
        `Across the yard, Ser Gideon Vail is kneeling in the sawdust with his blunted sword upright before him, praying. Not for show. His lips move. When he finishes, he kisses the cross-guard and stands, and every Harrowgate knight in the lists finds a reason to look somewhere else.`,
        '@tamsin: "I\'ve put four silver on you," says Tamsin at the rail. "At nine to one. So, you know. No pressure. Except all of it."'
      ],
      next: 'a2_asks'
    },
    a2_asks: {
      text: [
        `Two messages reach you before the trumpets.`,
        `The first comes by Isolde's old nurse, Wenna, a tiny bent woman who presses a folded paper into your hand and pats it like a grandson's cheek. One line, in a quick clean hand: *The Prince signs tonight. His champion should not be humbled in front of him today. Lose well. —I.*`,
        `The second comes in person. Hask leans on the rail beside you, chewing a straw, the picture of a man at a fair.`,
        '@hask: "Beat him." Quietly. "Put Gideon Vail in the sawdust in front of his master. I want His Highness to see what I made. What the March has. It raises the price of everything." He spits out the straw. "Lose, and you\'re just another sellsword in a borrowed shirt. Win, and you\'re mine to sell dear."',
        '@ulla: "Or," says Ulla behind you, "you could fight because it\'s a fight, and fights are good, and the purse is forty silver, and I\'ll carry you to the Hen either way."'
      ],
      choices: [
        { t: 'Fight him to win. For yourself, and for the four silver at nine to one.', go: 'a2_bout_pre' },
        { t: 'Do as Isolde asks. Lose, and make it look real.', go: 'a2_throw', fx: { set: { e5_throw_why: 'isolde' }, bond: { isolde: 1 }, quiet: true } },
        { t: 'Lose, because Hask wants you to win, and anything Hask wants is poison.', go: 'a2_throw', fx: { set: { e5_throw_why: 'spite' } } }
      ]
    },
    a2_bout_pre: {
      text: [
        `The trumpets go. Twenty men walk out onto the sawdust and start hitting each other.`,
        `It's not a battle. It's a brawl in good armour, all rattle and bellowing. You keep your back to the barrier and let them thin each other out. A Harrowgate knight comes at you swinging like a man threshing wheat; you hook his ankle and he goes down and stays there, gasping, honourably beaten. A Corvane squire tries a pretty overhand and you hit him in the helm with the pommel, and the crowd laughs, and so, under the canopy, does the Prince.`,
        `After ten minutes there are two men standing in the yard.`,
        `Ser Gideon Vail lifts his visor so you can see his face. He has kind eyes. He salutes you with the blunted sword, and he means it.`,
        '@gideon: "Sergeant Dray. They tell me you were at Corran\'s Ford. I\'m honoured." He lowers the visor. "Defend yourself."'
      ],
      fx: { know: { beast: ['gideon'] } },
      next: 'a2_bout'
    },
    a2_bout: {
      fight: { foes: ['gideon'], solo: true, noWound: true, noLoot: true, title: 'The Melee', win: 'a2_won', lose: 'a2_lost',
        intro: 'Blunted steel. He reads you while he circles. When he binds your blade, Guard.' }
    },
    a2_won: {
      text: [
        `He is better than you. You are certain of it for the whole length of the fight, and you are still certain of it when he's on his back in the sawdust with your blunted edge across his gorget.`,
        `You won because you've fought in ditches and he's fought in lists. You won because when he bound your blade you let go of it, which no knight would do, and hit him in the side of the helm with your fist in its steel glove, and kept hitting.`,
        `The yard goes silent. Then it goes mad. Harrowgate has not beaten Corvane at anything in living memory.`,
        `Gideon lifts his visor. There's blood in his teeth. He's smiling.`,
        '@gideon: "Well fought. Badly. Wonderfully." He lets you pull him up. He takes off his right riding-glove and puts it in your hand, which, you realise from the noise the stands make, is a thing that has some meaning among people with tournaments. "Wear that to the feast tonight. It will annoy some very silly men."',
        `Under the canopy, Prince Cassius is applauding slowly, his eyes on you. Hask, at the rail, has his arms folded and the face of a man watching a horse he owns win at long odds. Isolde is not looking at you at all.`,
        '@tamsin: "*Thirty-six silver!*" Tamsin screams from the rail. "Sergeant! I love you! I\'m rich!" And then, a beat late, louder: "*I mean the money!*"'
      ],
      fx: { set: { e5_melee: 'won' }, silver: 40, give: { e5_gideon_glove: 1 }, rep: { town: 2, varane: 1 }, bond: { tamsin: 1, ulla: 1 }, quiet: true, xp: 40, quest: { id: 'e5_feast', note: 'You won the Feast melee against Ser Gideon Vail, the Prince\'s champion.' } },
      next: 'a2_cassius'
    },
    a2_lost: {
      text: [
        `He takes you apart.`,
        `Not cruelly. He is the least cruel fighter you have ever faced, which is worse. He just finds every bad habit six years of taverns and ditches have taught you and shows each one to you with the flat of his sword, patiently, like a schoolmaster with a slate. The last one is the knee. You go down in the sawdust and stay there.`,
        `He kneels beside you, which nobody does, and lifts his visor.`,
        '@gideon: "You let go of the sword, twice, to hit me. No knight would ever do that." He is breathing hard; you\'re glad of it. "I\'m going to think about that for a month." He pulls off his right riding-glove and puts it in your hand. "Wear that tonight. It will annoy some very silly men."',
        `The crowd applauds both of you, generously, the way crowds applaud the losing side when it's their own.`,
        '@tamsin: "There goes my four silver," Tamsin says to Ulla, loudly. "He did look nice falling over, though."'
      ],
      fx: { set: { e5_melee: 'lost' }, give: { e5_gideon_glove: 1 }, rep: { town: 1 }, xp: 25, quest: { id: 'e5_feast', note: 'You lost the Feast melee to Ser Gideon Vail. He gave you his glove.' } },
      next: 'a2_cassius'
    },
    a2_throw: {
      text: [
        `You let the melee thin itself out, and you make sure you are one of the last two men standing, because throwing it early would be an insult to the purse and to the man.`,
        `Gideon Vail lifts his visor and salutes you. You salute back.`,
        `Then you have to lose to the finest lance in the realm in front of four thousand people in a way that four thousand people will believe.`
      ],
      choices: [
        { t: 'Make it a real fight for a minute. Then leave the door open, once, for him.', check: { stat: 'finesse', dc: 14, pass: 'a2_throw_ok', fail: 'a2_throw_bad' } },
        { t: 'Make it ugly. Take a real beating so nobody doubts it.', check: { stat: 'grit', dc: 13, pass: 'a2_throw_ok', fail: 'a2_throw_bad' } }
      ]
    },
    a2_throw_ok: {
      text: [
        `For a minute you fight him honestly, and it's a joy, the kind you'd forgotten, two good blades talking. Then on the next bind you let your guard drift a hand's width too high, the way a tired man's does.`,
        `He sees it. Of course he sees it. His blunted edge comes round into your ribs like a church bell and you go down in the sawdust, and the stands roar, and you lie there looking at the sky until it stops spinning.`,
        `Gideon kneels and lifts his visor. He looks at you for a long time with those grey eyes.`,
        '@gideon: "Thank you for the first minute," he says, too quietly for anyone else. "I\'ll pretend I didn\'t notice the rest. I\'m very good at not noticing things. It\'s most of what a prince\'s champion does." He presses his right glove into your hand. "Wear that tonight."',
        { if: "f.e5_throw_why==='isolde'", t: `Under the canopy, Isolde lets out a breath you can see from fifty yards, and does not look at you, very precisely.` },
        `At the rail, Hask has gone a dull red. He walks away before the heralds call it.`
      ],
      fx: { set: { e5_melee: 'threw' }, give: { e5_gideon_glove: 1 }, hp: -6, rep: { varane: 1 }, xp: 30, quest: { id: 'e5_feast', note: 'You threw the Feast melee to Ser Gideon Vail. He noticed. He was a gentleman about it.' } },
      next: 'a2_cassius'
    },
    a2_throw_bad: {
      text: [
        `You make it ugly. You take the flat of his blade on the shoulder and the helm and the hip, and you stagger, and you go down to one knee, and you stay down a count too long, and that's the trouble.`,
        `The crowd goes quiet in the wrong way. A Corvane knight in the stands laughs. Somebody shouts *bought!* and somebody else takes it up.`,
        `Gideon lifts his visor. He isn't angry. He looks sad, which is worse.`,
        '@gideon: "Get up, Sergeant," he says, very low. "Get up and fall properly, for both our sakes." You do. It doesn\'t help much. He gives you his glove anyway, which helps a little.',
        `Under the canopy, the Prince is laughing behind his hand, delighted. He has seen exactly what happened, and he loves it.`
      ],
      fx: { set: { e5_melee: 'threw', e5_throw_seen: 1 }, give: { e5_gideon_glove: 1 }, hp: -8, rep: { town: -1 }, xp: 15, quest: { id: 'e5_feast', note: 'You threw the Feast melee to Ser Gideon Vail. Badly. Everybody noticed.' } },
      next: 'a2_cassius'
    },

    a2_cassius: {
      loc: 'The Prince\'s canopy — noon',
      text: [
        `A page in gold comes for you before you've got the hauberk off. His Highness wishes a word.`,
        `Up close, Cassius smells of orris root and clean linen. He doesn't stand. He doesn't need to. He gestures you to the rail in front of him, like a man inviting a dog to the hearth, and looks at you with frank and total interest, as if you were a page in a book written in a language he has nearly learned.`,
        '@cassius: "You\'re the dead sergeant."',
        { if: "f.e5_melee==='won'", t: '@cassius: "You\'ve just cost me a hundred crowns, put my champion on his back, and made my betrothed\'s town very happy, all in one afternoon. I can\'t remember the last time anyone did three things at once in my presence. Konrad tells me you died."' },
        { if: "f.e5_melee==='lost'", t: '@cassius: "Gideon says you hit him with your fist. Twice. He\'s been glowing about it like a girl at her first dance. Konrad tells me you died."' },
        { if: "f.e5_melee==='threw' && !f.e5_throw_seen", t: '@cassius: "That was very nearly perfect. The guard drifting high, the tired man\'s mistake. Gideon fell for it, which he does, because he\'s good, and good men are so trusting. I didn\'t, because I\'m not. Konrad tells me you died."' },
        { if: 'f.e5_throw_seen', t: '@cassius: "That was the worst piece of theatre I have seen since my sister\'s wedding masque. I adored it. Who paid you? No, don\'t tell me, guessing is the only fun I\'m going to have in this town. Konrad tells me you died."' },
        '@ansel: "Konrad\'s often wrong, Highness."',
        '@cassius: "Konrad is never wrong. He is frequently *lying*, which is a different art." He tilts his head. "I collect things that shouldn\'t exist, Sergeant. A two-headed calf, preserved. A letter from my great-grandfather admitting he poisoned his brother. A Nordvik sword that was used to kill a saint. And now, perhaps, a man who died at Corran\'s Ford and keeps his left hand covered in July."'
      ],
      fx: { know: { cast: ['cassius'] } },
      choices: [
        { t: '"I\'m not for sale, Highness."', go: 'a2_cas_sale' },
        { t: '"What happens to the things you collect?"', go: 'a2_cas_what' },
        { t: 'Bow. Say nothing. Be furniture.', go: 'a2_cas_bow' }
      ]
    },
    a2_cas_sale: {
      text: [
        '@cassius: "Oh, I never *buy*. Buying is for merchants and Konrad." He smiles. "Things come to me. They find they\'ve nowhere else to go. One day you\'ll find you\'ve run out of places that will have you, Sergeant: no company, no lord, no church. And then you\'ll remember that there was a man who found you interesting. It\'s a long road. I\'m patient."'
      ],
      next: 'a2_cas_end'
    },
    a2_cas_what: {
      text: [
        `He thinks about it honestly. That is the thing about him that frightens you most: there is nothing in him that hurries or hides.`,
        '@cassius: "I keep them. I look at them, now and then. I take them out and show them to people I want to unsettle." A beat. "The calf rotted, in the end. The jar cracked. I was very sad. I had the servant who cleaned it flogged, and then I felt sad about that too, and gave him a farm." He shrugs. "Things that shouldn\'t exist are fragile, Sergeant. That\'s what makes them valuable."'
      ],
      fx: { set: { e5_cassius_calf: 1 } },
      next: 'a2_cas_end'
    },
    a2_cas_bow: {
      text: [
        `You bow. You say nothing. You fix your eyes on a point just over his left shoulder, the way you were taught to do for colonels.`,
        '@cassius: "Oh, that\'s *good*," he says, delighted. "That\'s very good. Konrad does that. He taught you that, didn\'t he? The furniture face." He leans back. "I\'ve made dukes cry, Sergeant. I find furniture very restful. We\'ll be friends."'
      ],
      fx: { rep: { varane: 1 } },
      next: 'a2_cas_end'
    },
    a2_cas_end: {
      text: [
        `He waves you away with two fingers, already turning to say something to Isolde that makes her smile with her mouth only.`,
        '@cassius: "Come and see me before I leave Harrowgate, Sergeant," he says, without looking back. "And bring your hand."'
      ],
      next: 'a2_delphine'
    },
    a2_delphine: {
      loc: 'Behind the stands — afternoon',
      text: [
        `Behind the stands, among the guy-ropes and the horse-piss and the discarded pie-crusts, the woman in green is waiting for you. She doesn't pretend it's chance. You like her for that before she has said a word.`,
        `Twenty-six, perhaps. Dark hair worn down, which nobody at this court does. A mouth that looks like it's about to laugh at something and is deciding whether to share it. She holds out a paper lantern, folded flat, unlit, with nothing written on it.`,
        '@delphine: "Delphine. I came with the Prince, in the way that luggage comes with a traveller." She puts the lantern in your hands. "There\'s no name on it. Write one, if you like, and let it go with the rest at midnight. Or don\'t, and bring it to the Swan Tower after the lanterns are up. I\'ll have wine. And a bath, which you need, because you smell like a man who has rolled in sawdust in front of a prince."'
      ],
      fx: { know: { cast: ['delphine'] } },
      choices: [
        { t: '"Your prince sent you."', go: 'a2_del_sent' },
        { t: 'Take the lantern. "After midnight, then."', go: 'a2_del_yes' },
        { t: 'Hand it back. "I\'m on duty, my lady. All night."', go: 'a2_del_no' }
      ]
    },
    a2_del_sent: {
      text: [
        '@delphine: "Of course he did." Not a flicker. "He sends me to people he finds interesting, and I tell him what they\'re like, and he pays me, and I spend it on dresses and my sister\'s children in Pelling." She steps closer. "Does that make me less pretty? Does it make the bath less hot?" She puts her palm flat on your chest, over the hauberk, as if listening for something. "He sent me. I came anyway. Those aren\'t the same thing."',
        `She leaves the lantern in your hands and goes, unhurried, through the guy-ropes.`
      ],
      fx: { set: { e5_delphine_invited: 1, e5_knew_delphine_spy: 1 } },
      next: 'a2_ledger'
    },
    a2_del_yes: {
      text: [
        '@delphine: "After midnight." She smiles properly for the first time, and it\'s a good smile, crooked, a little surprised. "Bring the glove. Both gloves, actually. I\'m curious about the other one."',
        `She goes through the guy-ropes without looking back, the way people do when they know they're being watched.`
      ],
      fx: { set: { e5_delphine_invited: 1 } },
      next: 'a2_ledger'
    },
    a2_del_no: {
      text: [
        `She takes it back. She doesn't look disappointed. She looks, if anything, more interested.`,
        '@delphine: "On duty. All night." She tucks the lantern under her arm. "That\'s a terribly long time to be good, Sergeant. I\'ll be in the Swan Tower if it gets dull."'
      ],
      fx: { set: { e5_delphine_invited: 1, e5_delphine_refused: 1 } },
      next: 'a2_ledger'
    },

    a2_ledger: {
      route: [
        { if: 'f.e4_ledger', go: 'a2_led_has' },
        { go: 'a2_led_none' }
      ]
    },
    a2_led_has: {
      loc: 'The Keep — the stable loft, late afternoon',
      text: [
        `In the hay loft above the Keep stables, where it is quiet and smells of horse, Pell reads you the Saltdown ledger by the light of the hay-door.`,
        `He has sobered up for it. He reads like a priest, carefully, with his finger under every line.`,
        '@pell: "*Received of the Lanternhold by the Marshal\'s carts: eleven, of whom two dead on the road.* *Received: fourteen, all sound.* *Received: six, one a child, returned as unfit.*" He stops. "Returned. Where? Returned to *where*, Ansel?"',
        `He goes on. Names, where there are names. Prices: forty silver a head, paid to the Marshal's factor. Above some entries, a little seven-pointed star, drawn in the margin, the way a clerk marks an account as settled.`,
        '@pell: "That\'s the Abbess\'s mark," he says. "On her own household accounts. I copied her ledgers for six years. That little star." He closes the book very gently, as if it were sleeping. "This is enough to hang a Marshal and burn an abbess, in a just world. We are not in one. So. Whose hands do you put it in?"'
      ],
      fx: { quest: { id: 'hask', note: 'The Saltdown ledger shows the Marshal\'s carts carried people from the Lanternhold to the mines at forty silver a head, and carries the Abbess\'s mark.' } },
      choices: [
        { t: 'Isolde. She reads numbers the way other people read faces. She\'ll know what to do with it.', go: 'a2_led_isolde' },
        { t: 'Lord Varane. It\'s his mine and his Marshal. Make him look at it.', go: 'a2_led_varane' },
        { t: 'Brannagh. It\'s her church\'s rot. She\'s the only honest instrument the Lamp has.', go: 'a2_led_brannagh' },
        { t: 'Nobody. Not yet. Keep it close, and trust no one in this castle with it.', go: 'a2_led_kept' }
      ]
    },
    a2_led_isolde: {
      text: [
        `You find her in a window-seat off the long gallery, alone for once, with her shoes off.`,
        `You hand her the book without a word. She reads the first page standing. She reads the second sitting down. On the third her lips start moving, and you realise she is adding.`,
        '@isolde: "Four hundred and twelve souls," she says at last. "Since midsummer last. At forty silver." Her voice is perfectly steady. Her hand on the page is not. "Sixteen thousand, four hundred and eighty silver, less carriage. That is the shortfall in the Marshal\'s accounts that I have been trying to find for a year. I thought he was stealing grain." She closes it. "He wasn\'t stealing grain."',
        `She holds it against her chest like a shield.`,
        '@isolde: "Not tonight. Tonight I smile at a prince. Come to the archive, after the lanterns." She looks up at you. "Don\'t let anyone kill my father before then. Please."'
      ],
      fx: { set: { e5_ledger_to: 'isolde', e5_archive_invite: 1 }, take: { ledger: 1 }, bond: { isolde: 2 }, rep: { varane: 1 }, quest: { id: 'hask', note: 'You gave the Saltdown ledger to Lady Isolde.' } },
      next: 'a2_tam'
    },
    a2_led_varane: {
      text: [
        `Lord Varane reads it in his solar with his foot up and his wine forgotten. He reads it all. You give him that.`,
        `When he finishes he sits for a long time with his hand flat on the cover.`,
        '@varane: "Konrad," he says. Just that. Then: "No. No, there\'ll be some... arrangement, some explanation, the Abbess would never—" He stops himself. He is not a stupid man. He is only a tired one.',
        '@varane: "After the Prince has gone. I\'ll deal with it after. I\'ll call the Marshal in and put it in front of him and watch his face." He locks the ledger in the drawer of his desk and puts the key on the chain around his neck. "My desk. My key. It\'s safe here."',
        `It is the most frightening thing anybody has said to you all week. The Marshal has had the run of this solar for eight years.`
      ],
      fx: { set: { e5_ledger_to: 'varane' }, take: { ledger: 1 }, rep: { varane: 2 }, quest: { id: 'hask', note: 'You gave the Saltdown ledger to Lord Varane. He locked it in his desk.' } },
      next: 'a2_tam'
    },
    a2_led_brannagh: {
      text: [
        `You find her in the Lanternhold's guest-chapel, on her knees on the stone, praying with her eyes open.`,
        `She reads it on her knees. She does not look up until she has read every page. When she does, her face is white as her plate.`,
        '@brannagh: "This is a forgery," she says, "or it is the end of the world." She gets up. "If it is a forgery, I will find who made it and I will burn him. If it is not..." She doesn\'t finish. She puts it inside her surcoat, against her body.',
        '@brannagh: "I go to the Abbess with this. Tonight, after the release. Myself. I will ask her to her face." She looks at you with something you have never seen in her before, which is fear. "Don\'t follow me, Dray. If I\'m wrong, I want no witnesses. If I\'m right, I want none either."'
      ],
      fx: { set: { e5_ledger_to: 'brannagh' }, take: { ledger: 1 }, bond: { brannagh: 2 }, rep: { lamp: 1 }, quest: { id: 'hask', note: 'You gave the Saltdown ledger to Lampwarden Brannagh. She means to put it in front of the Abbess herself.' } },
      next: 'a2_tam'
    },
    a2_led_kept: {
      text: [
        `You take the book back from Pell and wrap it in the oilcloth with the Company Roll, and tie the sergeant's cord round both.`,
        '@pell: "Four hundred and six names and four hundred and twelve," says Pell softly. "That\'s a heavy case to carry about, Ansel."',
        '@ansel: "I\'m used to it."',
        '@pell: "Yes," he says. "That\'s rather what worries me." He takes a pull from his flask, and then, deliberately, pours the rest out through the hay-door into the yard. "I\'ll make a fair copy tonight. In case. My hand\'s still good when I\'m frightened enough."'
      ],
      fx: { set: { e5_ledger_to: 'kept', e5_pell_copy: 1 }, bond: { pell: 2 }, quest: { id: 'hask', note: 'You kept the Saltdown ledger. Pell is making a fair copy.' } },
      next: 'a2_tam'
    },
    a2_led_none: {
      loc: 'The Keep — the stable loft, late afternoon',
      text: [
        `You left the overseer's ledger at Saltdown. You think about that a lot.`,
        `In the hay loft above the Keep stables, Ulla sits on a bale with her axe across her knees, sharpening it for no reason.`,
        '@ulla: "I was a guard there two years, Dray. I counted the carts in. Marshal\'s men driving, Lanternhold sacking over the tops. I didn\'t ask what was under. I was paid not to." She tests the edge on her thumb. "I\'ll say it. To anyone you like. Lords never believe a woman with eight fingers and a Nordvik accent. But I\'ll say it."',
        `It's not a book. It's a woman's word. In this country that is worth exactly as much as the person listening wants it to be.`
      ],
      choices: [
        { t: 'Take Ulla to Isolde. She\'ll listen.', go: 'a2_ulla_isolde' },
        { t: 'Take Ulla to Lord Varane. It\'s his mine.', go: 'a2_ulla_varane' },
        { t: '"Keep it, Ulla. Not yet. Not in this castle."', go: 'a2_ulla_keep' }
      ]
    },
    a2_ulla_isolde: {
      text: [
        `Isolde listens to Ulla in a window-seat off the long gallery, with her shoes off. She asks eleven questions, all of them about numbers: how many carts, how often, how many to a cart, since when. Ulla answers each one, and Isolde's lips move, adding.`,
        '@isolde: "Sixteen thousand silver, near enough," she says at last. "That is the hole in the Marshal\'s accounts I\'ve been looking for since last winter." She puts her shoes back on, slowly. "Come to the archive after the lanterns, Mister Dray. And thank you, Mistress Stonehand. I believe you. I\'m sorry nobody else will."',
        '@ulla: "You\'re all right," says Ulla afterward, surprised. "For a lady. Bit thin."'
      ],
      fx: { set: { e5_ledger_to: 'kept', e5_testimony: 'isolde', e5_archive_invite: 1 }, bond: { isolde: 1, ulla: 1 }, quest: { id: 'hask', note: 'Ulla told Lady Isolde what she saw at Saltdown.' } },
      next: 'a2_tam'
    },
    a2_ulla_varane: {
      text: [
        `Lord Varane listens to Ulla politely, the way you'd listen to a large dog that has learned to speak, and thanks her, and gives her a silver, and tells you both he will look into it after the Prince has gone.`,
        '@ulla: "He gave me a *silver*," says Ulla on the stairs, holding it up to the light. "Like I\'d sung at his table." She doesn\'t sound angry. She sounds tired. "In Nordvik we\'d have burned his hall over him by now. Not for being bad. For being *slow*."'
      ],
      fx: { set: { e5_ledger_to: 'kept', e5_testimony: 'varane' }, rep: { varane: 1 }, quest: { id: 'hask', note: 'Ulla told Lord Varane about Saltdown. He will look into it "after the Prince has gone."' } },
      next: 'a2_tam'
    },
    a2_ulla_keep: {
      text: [
        `Ulla nods, and goes back to sharpening the axe.`,
        '@ulla: "Good. I hate talking to lords. They look at my hands like they\'re counting." She holds up the eight fingers. "I tell them: two were for a man who touched my sister. Still worth it. They stop counting after that."'
      ],
      fx: { set: { e5_ledger_to: 'kept' }, bond: { ulla: 1 } },
      next: 'a2_tam'
    },

    a2_tam: {
      loc: 'The Keep walls — dusk',
      text: [
        `At dusk you find Tamsin on the wall-walk above the chapel yard, sitting with her back to a merlon and a paper lantern in her lap. A pot of lamp-black and a brush beside her. The lantern is blank.`,
        `She doesn't hide it fast enough.`,
        '@tamsin: "Don\'t."',
        '@ansel: "Didn\'t say anything."',
        '@tamsin: "You were going to." She looks at the lantern. She looks at the brush. She looks at the yard below, where Lamplighters are hanging the last strings. Then she holds the brush out to you without looking at you, handle first, as if she\'s passing a knife.',
        '@tamsin: "Nessa Vell," she says to the yard. "That\'s her name. Was. Two Ls. I think it\'s two Ls."'
      ],
      choices: [
        { t: 'Write it. Slowly, in your best hand, the sergeant\'s square letters. Then show her which marks are which.', go: 'a2_tam_write' },
        { t: '"You said lanterns are for people who want their dead far away."', go: 'a2_tam_why' },
        { t: 'Write it. Then, under it, small: *Tom Ashe.* Because she should know you have one too.', go: 'a2_tam_tom' }
      ]
    },
    a2_tam_write: {
      text: [
        `You write it. N, E, S, S, A. V, E, L, L. Two Ls. You take your time; the paper is thin and the brush is cheap.`,
        `Then you point to each letter, and say it, and she watches your finger and not your face.`,
        '@tamsin: "That one\'s the snake. The S."',
        '@ansel: "That one\'s the snake."',
        '@tamsin: "There\'s two snakes in her." Something happens to her mouth. "She\'d have liked that. She was like that. Two snakes, both friendly."',
        `She takes the lantern back, and holds it against her chest for a moment, and then she says, without any change in her voice at all:`,
        '@tamsin: "Do you like her? The lady."',
        `Before you can open your mouth she shakes her head, hard.`,
        '@tamsin: "Don\'t answer that. I don\'t care. Saints. Ignore me. It\'s the lamp-black, it goes to your head."'
      ],
      fx: { bond: { tamsin: 2 }, set: { e5_wrote_nessa: 1 } },
      next: 'a2_tam_end'
    },
    a2_tam_why: {
      text: [
        '@tamsin: "I did say that."',
        `She turns the blank lantern round in her hands.`,
        '@tamsin: "She\'d hate it. She\'d *hate* it, Sergeant. A Lamp lantern with her name on, going up to their Saints. She\'d spit." A breath. "But they burned her, and the smoke went up anyway, so she\'s up there whether she likes it or not. I want her to have something from me. Something to read." The joke goes out of her face. "Not that she could read either."',
        `You take the brush. You write it: NESSA VELL, two Ls. She watches every stroke.`,
        '@tamsin: "Do you like her?" she says, after. "The lady." Then, fast: "No. Don\'t. I don\'t want to know. That was the lamp-black talking."'
      ],
      fx: { bond: { tamsin: 2 }, set: { e5_wrote_nessa: 1 } },
      next: 'a2_tam_end'
    },
    a2_tam_tom: {
      text: [
        `You write NESSA VELL, two Ls, large and clear. Then, at the bottom, small, you write TOM ASHE.`,
        '@tamsin: "What\'s that one?"',
        '@ansel: "Man I knew. Told a joke about a miller\'s wife. Never got to the end of it."',
        `She looks at the two names together for a long time, the big and the small.`,
        '@tamsin: "They can share," she says. "She liked a joke. She\'d make him finish it." She tucks the lantern under her arm. Then, to the yard, too casually: "Do you like her? The lady." And at once, before you can breathe: "Don\'t answer that. Saints. I don\'t care. It\'s none of mine."'
      ],
      fx: { bond: { tamsin: 2 }, set: { e5_wrote_nessa: 1, e5_wrote_tom: 1 } },
      next: 'a2_tam_end'
    },
    a2_tam_end: {
      text: [
        `Below, the bell begins for the Evening Lamp. All over the castle people stop and touch their hearts.`,
        `Tamsin gets up and dusts off her breeches and goes along the wall-walk with her lantern held carefully in both hands, like something that might spill.`
      ],
      next: 'act3'
    },

    /* ======================= ACT THREE: THE FEAST ======================= */
    act3: {
      card: { kind: 'act', title: 'Part Three', sub: 'The Feast' },
      next: 'a3_hall'
    },
    a3_hall: {
      loc: 'The Great Hall of Varane Keep — evening',
      text: [
        `The Great Hall has been turned into the inside of a lantern. Paper globes hang from every beam, lit now, hundreds of them, so that the smoke-blackened roof floats over the tables in a gold haze. The tables groan: the swan sewn back into its feathers, eels in green sauce, a boar's head with an apple in its mouth and gilt on its tusks, sugar-paste lanterns the children are stealing.`,
        { if: 'has("e5_gideon_glove")', t: `You stand at your post by the dais in a clean tabard, Gideon Vail's glove tucked through your belt where everyone can see it. Several silly men are, as promised, annoyed.`, else: `You stand at your post by the dais in a clean tabard, trying to look like part of the wall.` },
        `Down the hall: Ulla in a borrowed gown that must once have been a bed-canopy, arm-wrestling a Corvane knight, and winning, and laughing like a landslide. Pell at the low table, deep in an argument about the Book of Embers with a Lanternhold canon, sober and savage and having the time of his life. Mags, in the kitchen doorway, sleeves down for once, counting barrels.`,
        { if: "inParty('hob')", t: `Hob, at the stable-boys' bench by the door, has been given his first cup of wine and is staring at the Prince with the face of a boy watching a dragon.` },
        `On the dais: Lord Varane, the Prince, Isolde between them. Hask at the Prince's right hand, laughing at his jokes a fraction before the punchline, the way good courtiers do. The Abbess, blessing the bread. Brannagh at the end of the table, in her plate, eating nothing.`,
        { if: "f.e5_ledger_to==='brannagh'", t: `Once, Brannagh looks along the table at the Abbess, and her hand goes to her surcoat, over the place where the ledger is. The Abbess smiles at her, fondly, and passes her the honey.` },
        { if: "f.e5_ledger_to==='varane'", t: `Lord Varane keeps touching the key on the chain round his neck, as if to make sure it's still there. Hask notices. Hask notices everything.` },
        { if: "f.e5_ledger_to==='isolde'", t: `Isolde laughs at the Prince's stories, refills his cup, and never once looks at you. Her left hand, under the table, is clenched so hard the knuckles are white.` }
      ],
      next: 'a3_toast'
    },
    a3_toast: {
      text: [
        `Hask rises first, cup high.`,
        '@hask: "To His Highness, who honours us. To Lady Isolde, who honours *him*, more than he deserves, and he knows it." Laughter. "And to the March of Harrowgate, and its future. Which has never looked brighter."',
        `The hall roars. Cassius rises, smiling, and lifts his cup, and waits for quiet, and gets it, because he is the kind of man who always gets quiet.`,
        '@cassius: "My grandmother used to say that on the Feast of Lanterns the stars come down close to see who\'s coming up to join them." He looks around the hall, the gold haze, the lanterns. "She was a dreadful woman. She had her own cook hanged for over-salting a capon. I adored her." Laughter, uncertain. "She also said that a man should never sign anything on a holy night, because the Saints are watching, and they read the small print."',
        `He lifts his cup to Isolde.`,
        '@cassius: "So I\'ll sign at midnight, under all of them. Let them read it. To my lady."',
        `Isolde inclines her head, and drinks, and her eyes, for less than a heartbeat, go down the hall to you.`
      ],
      next: 'a3_dance'
    },
    a3_dance: {
      text: [
        `Then the musicians start: pipes, a drum, three fiddles, the old Harrowgate tune for the Lantern Round, which everyone dances in a ring.`,
        `By custom the bride-to-be leads it with her betrothed. Cassius takes Isolde down from the dais, and they lead the ring twice round, and he dances beautifully, as you knew he would, and she dances correctly, as you knew she would.`,
        `On the third turn, when the ring breaks into pairs and the custom is to change partners, Isolde Varane lets go of the Prince of Aldermere's hand, walks out of the ring, across twenty feet of empty floor, in front of four hundred people, and stops in front of the guard at the dais.`,
        `The music doesn't stop. It falters, and then the drummer, who is either a hero or a drunk, keeps going.`,
        '@isolde: "Mister Dray," she says, clearly enough to carry. "The Lantern Round. You\'ll know it. Everyone does."',
        `Her face is perfectly calm. Her hand, held out, is shaking very slightly. Behind her, on the dais, the Prince has sat back in his chair with the expression of a man at a play that has just become interesting.`
      ],
      choices: [
        { t: 'Take her hand. Dance it as if you belonged here.', check: { stat: 'presence', dc: 14, pass: 'a3_dance_ok', fail: 'a3_dance_bad' } },
        { t: '"I only know the soldiers\' dances, my lady." "Then teach me one."', check: { stat: 'might', dc: 12, pass: 'a3_dance_stamp', fail: 'a3_dance_bad' } },
        { t: 'Refuse her. For her sake. "I\'m on duty, my lady. Forgive me."', go: 'a3_dance_no' }
      ]
    },
    a3_dance_ok: {
      text: [
        `You take her hand. Her fingers are cold and close on yours hard, like a woman taking a rope.`,
        `You haven't danced the Lantern Round since you were fifteen, at a hiring fair in Lowmarch, with a tanner's daughter who smelled of lime. Your body remembers it better than you do. Step, turn, the hand at the waist, the lift on the fourth bar. The ring opens around you without anyone deciding to.`,
        `She is a head shorter than you and dances with her chin up and her eyes on yours, and for the length of the tune she is not keeping anyone's books. She is laughing. You didn't know she could. It's a low, startled sound, like something let out of a box.`,
        '@isolde: "You can dance," she says, under the fiddles, accusingly.',
        '@ansel: "Don\'t tell anyone."',
        '@isolde: "Everyone is *watching*, Ansel." It\'s the first time she has used your name. "There\'s nobody left to tell."',
        `The music ends. You bow. She curtsies, deep, deeper than a lady curtsies to a guard, deep enough that the hall makes a sound. Then she goes back up to the dais and puts her hand in the Prince's, and the Prince kisses it, smiling, and says something to her that makes her go white.`
      ],
      fx: { set: { e5_danced: 'well' }, bond: { isolde: 2 }, rep: { town: 1, varane: -1 }, xp: 20 },
      next: 'a3_after_dance'
    },
    a3_dance_stamp: {
      text: [
        '@isolde: "Then teach me one."',
        `So you do. The Lowmarch Stamp, the one the Red Company did round the fires on pay-nights: hands on shoulders, heel-toe, a stamp on the four that shakes the floor, a roar on the eight. It is not a dance for a great hall. It is a dance for a muddy field with a barrel open.`,
        `She learns it in two turns. On the third, she stamps on the four. On the eighth, Lady Isolde Varane of Harrowgate, in silver-grey silk in front of the heir to the throne, *roars*.`,
        `And from down the hall Ulla Stonehand roars back, and comes out onto the floor, and drags the Corvane knight with her, and then the stable boys, and then, astonishingly, Mags, and then half the low tables are up, stamping, and the fiddlers give up on the Lantern Round entirely and play the Stamp, because they know it, everyone in the March knows it, it's what poor people dance.`,
        `When it ends, Isolde is flushed and her hair is coming down and she is laughing so hard she has to hold your arm.`,
        '@isolde: "That," she says, "was a *disgrace*." She looks up at you. "Thank you."'
      ],
      fx: { set: { e5_danced: 'stamp' }, bond: { isolde: 2, ulla: 1 }, rep: { town: 2, varane: -1 }, quiet: true, xp: 20 },
      next: 'a3_after_dance'
    },
    a3_dance_bad: {
      text: [
        `You take her hand, and something in your body that has walked through crossfire refuses, flatly, to remember a single step.`,
        `You tread on her hem on the first bar. On the third you turn the wrong way and the ring has to break around you. Somebody at the low tables laughs. Then more of them.`,
        `And Isolde, whose face has gone from white to red, looks up at you, at your appalled sergeant's face, and starts to laugh too. Not at you. With you. Helplessly, the way you laugh at a funeral.`,
        '@isolde: "Left," she whispers. "*Left*, Ansel. Oh, Saints. Just hold on to me. Hold on and walk."',
        `So you hold on to her and walk, in a slow circle, while the music plays and four hundred people watch the Lady of Harrowgate steer a hired sword around the floor like a woman leading a lame horse home. By the end the hall has stopped laughing. It has gone quiet, which is worse, because what everyone can see now is not the dancing.`,
        `She lets go. She curtsies. She goes back to the dais and the Prince kisses her hand and says something to her that makes her go white.`
      ],
      fx: { set: { e5_danced: 'badly' }, bond: { isolde: 1 }, rep: { varane: -1 } },
      next: 'a3_after_dance'
    },
    a3_dance_no: {
      text: [
        '@ansel: "I\'m on duty, my lady. Forgive me."',
        `You say it loudly enough to carry. You say it so the Prince can hear that the guard knew his place, and the lady did not need to be shamed, and nothing happened here.`,
        `For one moment her face is completely open, and what is in it is not anger. It's something worse. Then she closes it like a book.`,
        '@isolde: "Of course," she says. "How thoughtless of me. Thank you, Mister Dray." She turns, and takes the arm of the nearest Corvane knight, and dances the rest of the Round with him, perfectly.',
        `On the dais, the Prince looks almost disappointed.`
      ],
      fx: { set: { e5_danced: 'refused' }, bond: { isolde: -1 }, rep: { varane: 1 } },
      next: 'a3_after_dance'
    },
    a3_after_dance: {
      text: [
        { if: "f.e5_danced!=='refused'", t: `The hall's noise comes back up, slowly, like a tide, but it has a new note in it. You hear the word *guard*. You hear the word *dead*. You hear, from the Corvane tables, a word for women that you won't forget.` },
        { if: "f.e5_danced!=='refused'", t: `Lord Varane has his face in his hand. Hask is looking at you with frank and growing interest, the way a man looks at a card he did not know was in his hand. The Prince leans over to him and says something, and Hask laughs, and you will never know what it was.` },
        { if: "f.e5_danced==='refused'", t: `The hall's noise comes back up. Nothing happened. Lord Varane breathes out. Hask catches your eye down the length of the table and lifts his cup an inch: *clever boy.* It is the worst compliment you have ever been paid.` },
        `In the doorway, Delphine is leaning against the frame with a cup of wine, watching you over the rim. She raises it, very slightly.`,
        `And up in the minstrels' gallery, half behind a pillar, where nobody but a thief would think to stand, Tamsin is watching too. When you look up, she's gone.`
      ],
      next: 'a3_gallery'
    },
    a3_gallery: {
      loc: 'The minstrels\' gallery — later',
      text: [
        `You find her when your relief comes, up in the gallery behind the musicians, sitting on the boards with her legs through the balusters and a stolen goose leg.`,
        { if: "f.e5_danced==='well'", t: '@tamsin: "Look at you. Dancing like a lord. Where\'d you learn that, the Saints\' own dancing school?"' },
        { if: "f.e5_danced==='stamp'", t: '@tamsin: "You taught a lady the Stamp in front of a prince." She sounds almost reverent. "Sergeant. They\'ll be singing about that in the Bottom for a hundred years. Ulla nearly killed a man with joy."' },
        { if: "f.e5_danced==='badly'", t: '@tamsin: "You danced like a bear with a grudge." She gnaws the goose. "A bear somebody had *wronged*."' },
        { if: "f.e5_danced==='refused'", t: '@tamsin: "Well. That was the cruellest kind thing I\'ve ever seen a man do." She gnaws the goose. "She\'ll never forgive you. She\'ll thank you for it every day."' }
      ],
      choices: [
        { t: '"You were watching."', go: 'a3_gal_watch' },
        { t: '"Dance with me."', go: 'a3_gal_dance' },
        { t: 'Sit down beside her and steal the goose.', go: 'a3_gal_goose' }
      ]
    },
    a3_gal_watch: {
      text: [
        '@tamsin: "Everybody was watching, Sergeant. That was rather the point. For her." She tears off a strip of goose skin. "She\'s clever. She did it so the Prince would see she\'s not entirely his. So everyone would. You were the knife she held up." A pause. "It\'s not a bad thing to be. A knife. I\'d just want to know whose hand I was in."',
        `She says it lightly. She doesn't look at you while she says it, and then she does, and for a moment there is something in her face you can't name and she can't hide, and then she offers you the goose.`
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'act4'
    },
    a3_gal_dance: {
      text: [
        `She laughs, the too-loud laugh, the one that goes off like a dropped pan.`,
        '@tamsin: "Here? Up here with the fiddlers spitting on us?" She shakes her head. "In a kitchen, maybe. After. When there\'s nobody. I don\'t dance where people can see me, Sergeant. They can see enough."',
        `Then she gets up anyway, and takes your hands, and turns once with you, just once, in the dark behind the musicians, where nobody can see. Her hands are greasy with goose. She smells of lamp-black and the cold outside.`,
        `She lets go first.`,
        '@tamsin: "There. Now you\'ve danced with a thief. Count your fingers."'
      ],
      fx: { bond: { tamsin: 2 }, set: { e5_tam_danced: 1 } },
      next: 'act4'
    },
    a3_gal_goose: {
      text: [
        `You sit on the boards beside her, legs through the balusters, and take the goose leg out of her hand and bite it.`,
        '@tamsin: "*Thief*."',
        '@ansel: "Learned from the best."',
        `She takes it back. You take it back. Below you the Prince is laughing and Hask is laughing and the lanterns are swaying in the heat of four hundred bodies, and up here it's just grease and two people stealing a goose leg from each other in the dark, and she is grinning with her chipped tooth, and for a minute nothing else in Harrowgate is true.`
      ],
      fx: { bond: { tamsin: 1 } },
      next: 'act4'
    },

    /* ======================= ACT FOUR: THE LANTERNS ======================= */
    act4: {
      card: { kind: 'act', title: 'Part Four', sub: 'The Lanterns' },
      next: 'a4_release'
    },
    a4_release: {
      loc: 'The gatehouse platform and the chapel yard — near midnight',
      text: [
        `Near midnight the whole castle goes out into the cold.`,
        `The chapel yard is packed shoulder to shoulder, and beyond the walls the whole town is out on the streets and roofs and the Market Stair, thousands upon thousands, every one of them holding an unlit lantern with a name on it. The Lanternhold's tower burns blue above it all. The Lamp bells are ringing slow, one stroke a breath.`,
        `On the platform above the gatehouse arch, where the whole town can see him, Lord Varane stands with a lit taper in his hand, waiting for the last bell. By custom he lights the Lord's Lantern, the first, and lets it go, and then the town lets go of all the rest.`,
        `Isolde beside him. The Prince beside her, golden in the torchlight. The Abbess below the platform with her Lamplighters in a ring, grey robes, white stars, every head bowed. Singing, softly. The old hymn, the one about the lit road.`,
        { if: 'f.e5_alarm', t: `Hask's "doubled guard" lines the gatehouse stair: his best men, he said. You don't know their faces. That was the point.` },
        { if: 'f.e5_hid_bodies', t: `Twelve Lamplighters went into the lantern store last night. In the ring below the platform you count nine robes. Nobody has asked about the other two. Somebody knows not to.` },
        { if: 'f.e5_knew_plan', t: `*Four in the gatehouse crates. Two on the roof. When the old man lifts the taper.* The crates are stacked on the gatehouse roof, forty feet above you, waiting to be opened for the release.` },
        `Your post is at the foot of the platform stair. Tamsin is beside you, with her bow and a lantern. Ulla is in the crowd behind the Lamplighters, head and shoulders above everyone. Pell is with the Abbess's choir, because he still knows the words.`,
        `The bell tolls. Eleven.`
      ],
      choices: [
        { if: 'f.e5_knew_plan', t: 'Go for the gatehouse crates. Now. Before the twelfth bell.', go: 'a4_early' },
        { t: 'Watch the gatehouse roof.', go: 'a4_roof' },
        { t: 'Watch the robed Lamplighters in the ring.', go: 'a4_ring' },
        { t: 'Watch Lord Varane\'s face. Watch who watches him.', go: 'a4_varane_watch' }
      ]
    },
    a4_early: {
      text: [
        `You go up the gatehouse stair three at a time with Tamsin on your heels. A man-at-arms on the turn says *Oi—*, and then sees the Varane boar on your tabard and lets you by.`,
        `On the roof, among the stacked crates, two men in grey robes are kneeling. One has the lid off a crate. The other is spanning a crossbow, smooth and quick, cranking the little windlass. He looks up at you. He's young. He has a face you might have liked in a tavern.`,
        `The twelfth bell begins to toll below you.`
      ],
      fx: { set: { e5_early: 1 } },
      next: 'a4_early_fight'
    },
    a4_early_fight: {
      fight: { foes: ['crossbowman', 'e5_knifeman'], allies: ['tamsin'], title: 'The Gatehouse Roof', win: 'a4_early_won',
        intro: 'Get to the bow before he finishes spanning it.' }
    },
    a4_early_won: {
      text: [
        `The young one goes off the edge of the gatehouse roof with Tamsin's arrow in his neck and lands in the moat with a sound you'll remember. The other dies among the crates. The crossbow is never fired.`,
        `But there were four. Four in the crates. The other two crates are open and empty.`,
        `Below, the twelfth bell finishes. Lord Varane lifts the taper to the Lord's Lantern, and the robed ring of Lamplighters around the foot of the platform stops singing all at once, and starts to move.`
      ],
      fx: { xp: 30 },
      next: 'a4_ring_strike'
    },
    a4_roof: {
      text: [
        `You watch the gatehouse roof. The crates. The sky beyond them, very clear, very cold, the stars out by the thousand and close, the way they were at the ford.`,
        `You make yourself watch the crates and not the stars.`,
        `The twelfth bell. Varane lifts the taper. And between two crates on the roof something catches the torchlight: a short, steady glint, held level. Then another beside it.`,
        '@ansel: "*Roof!*"'
      ],
      next: 'a4_strike'
    },
    a4_ring: {
      text: [
        `You watch the Lamplighters. Grey robes, bowed heads, singing. The Abbess in the middle of them like a hen among chicks.`,
        `Nine of them, round the foot of the platform. Then you look at their feet, the way Pell taught you, and four of the nine are standing like men in boots who took their boots off this morning.`,
        `The twelfth bell. Varane lifts the taper. The four stop singing a breath before the others do. And on the gatehouse roof above them, something glints.`,
        '@ansel: "*Roof! Tamsin, the roof!*"'
      ],
      next: 'a4_strike'
    },
    a4_varane_watch: {
      text: [
        `You watch the old man. His hand shakes with the taper. He's looking out at the town, his town, the thousands of unlit lanterns, and his face is wet. He loves them. It has never done them any good.`,
        `And you watch who watches him. The Prince, amused. Isolde, afraid for him in a way she has never let him see. The Abbess, singing, eyes closed.`,
        `And Hask. Hask, at the foot of the stair, not watching his lord at all. Watching the roof of the gatehouse, like a man waiting for a pot to boil.`,
        `The twelfth bell. Varane lifts the taper. Hask, very calmly, takes one step back into the crowd.`,
        '@ansel: "*Roof!*"'
      ],
      fx: { set: { e5_saw_hask_step: 1 }, quest: { id: 'hask', note: 'At the lantern release, the Marshal stepped back from Lord Varane a heartbeat before the crossbows. You saw it. Nobody else did.' } },
      next: 'a4_strike'
    },
    a4_strike: {
      text: [
        `Tamsin's bow is up before you've finished the word. She looses, and a figure on the gatehouse roof jerks and drops his crossbow, which fires as it falls: the bolt goes into the crowd and somebody screams.`,
        `The second crossbow fires. You see the bolt. You will see it for years. It goes past the Prince's ear close enough to stir his hair, and into Lord Varane's shoulder, through the fur, and spins him round, and the taper falls, and the Lord's Lantern goes up all at once in a sheet of flame.`,
        `Isolde catches her father as he falls. The Prince doesn't move at all. He is looking at the burning lantern with interest.`,
        `You're already on the gatehouse stair. Two men in grey robes are coming down it, cranking crossbows as they come.`
      ],
      next: 'a4_roof_fight'
    },
    a4_roof_fight: {
      fight: { foes: ['crossbowman', 'crossbowman'], allies: ['tamsin'], title: 'The Gatehouse Stair', win: 'a4_roof_won',
        intro: 'Narrow stair. Two crossbows. Close the distance before they span again.' }
    },
    a4_roof_won: {
      text: [
        `The last one goes down the stairwell head first. You don't wait to see how he lands.`,
        `Below, in the yard, the screaming has changed. The ring of Lamplighters has broken. Four of them have thrown back their sleeves and there are knives in their hands, short heavy falchions too, and they are cutting their way through the choir toward the foot of the platform, where Isolde is kneeling over her father with his blood all over her silver dress.`
      ],
      next: 'a4_ring_strike'
    },
    a4_ring_strike: {
      text: [
        `The Abbess stands among it with her arms spread, as if she could shield everyone, saying *children, children*. Pell has her by the arm and is dragging her back. Somebody has knocked over a brazier and lanterns are burning on the flagstones, hundreds of names going up at once.`,
        `The biggest of the robed men throws back his hood. He's grey-haired, square, a broken nose like yours. He has a falchion and he moves like a sergeant, and when he shouts to his men it is in the old cant, the Red Company cant, *close up, close up, on the old man*.`,
        `You land at the foot of the platform stair between him and the Lord of Harrowgate. Ulla comes through the crowd behind them like a ship through reeds, shield up, roaring.`,
        '@ulla: "*NORDVIK!*"'
      ],
      next: 'a4_boss'
    },
    a4_boss: {
      fight: { foes: ['e5_hooded', 'e5_knifeman', 'e5_knifeman'], title: 'The Feast of Lanterns', win: 'a4_boss_won',
        intro: 'He will go past you for the old man if he can. When he looks toward the dais, Guard or kill him first.' }
    },
    a4_boss_won: {
      text: [
        `It ends at the foot of the stair, in the light of burning lanterns.`,
        `The sergeant in the grey robe is on his knees with Widow's edge through his collarbone and down into his chest, and he looks up at you with something like recognition and something like apology.`,
        '@narrator: "Dray," he says. "Sergeant Dray. I was... Hale. Garret Hale. Third file. I was on the far bank." He laughs, and it\'s bloody. "He took a few of us with him, when he went. The good ones. I always wondered what happened to the rest."',
        `You know the name. You left it off the roll six years ago because you never found his body on the bank. Now you know why.`,
        `And then boots on the flags, and torchlight, and men in Varane blue pouring into the yard, and at the head of them, sword drawn, face like thunder, Ser Konrad Hask.`
      ],
      choices: [
        { t: '"Hale. Who sent you? Say it. Say it loud."', go: 'a4_hale_ask' },
        { t: 'Put yourself between Hale and the Marshal.', go: 'a4_hale_guard' }
      ]
    },
    a4_hale_ask: {
      text: [
        `Hale looks past you. At Hask, coming across the yard. His mouth opens.`,
        '@narrator: "The Mar—"',
        `Hask's sword goes through his throat from the side, clean, a beautiful cut, the cut he taught you. Hale's head goes over. His blood goes across your boots.`,
        '@hask: "He was going for the Prince," says Hask, loudly, to the yard, to the torches, to everyone. "Saints. Saints and lamps, he was going for His Highness." He is breathing hard. He looks genuinely shaken. He might be. "Sergeant Dray. You saved my lord\'s life tonight. Harrowgate owes you."',
        `He puts his hand on your shoulder. It is perfectly steady.`
      ],
      fx: { set: { e5_witness: 'silenced' }, quest: { id: 'hask', note: 'The assassin was Garret Hale, once of the Red Company. He began to say "The Mar—" and the Marshal cut his throat before he could finish.' } },
      next: 'a4_after'
    },
    a4_hale_guard: {
      text: [
        `You step across Hale as Hask comes in, and the Marshal's sword, swinging, meets Widow's flat a hand's breadth from the dying man's neck. Steel rings. The whole yard hears it.`,
        `For a heartbeat you and Konrad Hask are face to face over crossed blades, the way you were a thousand times on the drill-field at Aldbridge when you were seventeen.`,
        '@hask: "He was going for the Prince, Ansel." Low. Reasonable. "Step aside."'
      ],
      choices: [
        { t: 'Hold. Don\'t move. Make him do it through you, in front of everyone.', check: { stat: 'grit', dc: 15, pass: 'a4_hale_kept', fail: 'a4_hale_lost' } },
        { t: 'Shout it to the yard: "He\'s a prisoner! Lord Varane will want him alive!"', check: { stat: 'presence', dc: 14, pass: 'a4_hale_kept', fail: 'a4_hale_lost' } }
      ]
    },
    a4_hale_kept: {
      text: [
        `You don't move. You let the whole yard look at the two of you: the Marshal with his sword out over a kneeling, dying man, and the dead sergeant in Varane blue in the way.`,
        `Hask reads it. He reads everything. He steps back, and sheathes his sword, and smiles, and raises his voice.`,
        '@hask: "Quite right. Quite right, Sergeant. Alive, for his lordship\'s justice. Take him to the cells. Gently, lads. He\'s worth more breathing."',
        `Four of his men take Hale away by the arms. Hale looks back at you once over his shoulder. He knows. You know. Men who are taken to the Marshal's cells tonight will be found hanged by their own belts in the morning, and everyone will say how sad, how guilty he must have felt.`,
        `But he'll have been alive for one more night. And four hundred people saw you make the Marshal sheathe his sword.`
      ],
      fx: { set: { e5_witness: 'cells' }, rep: { town: 2 }, xp: 20, quest: { id: 'hask', note: 'You kept the Marshal from killing the assassin, Garret Hale, once of the Red Company. Hask\'s men took him to the cells. You don\'t expect him to live till morning.' } },
      next: 'a4_after'
    },
    a4_hale_lost: {
      text: [
        `He doesn't push. He doesn't have to. He just turns his wrist, the old drill-field turn, and Widow slides off his blade, and his point goes past you into Hale's throat as neatly as a needle into cloth.`,
        '@hask: "He was going for the Prince," he says, loudly, to the yard. "I\'m sorry, Ansel. I couldn\'t take the chance." He looks genuinely sorry. He might be. "You saved my lord\'s life tonight. Harrowgate owes you."'
      ],
      fx: { set: { e5_witness: 'silenced' }, quest: { id: 'hask', note: 'The assassin was Garret Hale, once of the Red Company. The Marshal killed him before he could talk.' } },
      next: 'a4_after'
    },
    a4_after: {
      text: [
        `Lord Varane is alive.`,
        `He's sitting on the platform steps with the bolt out and a wad of Isolde's silk pressed to his shoulder, grey as ash, his foot still wrapped, breathing in great shaking gasps. The Abbess kneels beside him, her hands red to the wrist, binding it, humming the hymn under her breath.`,
        { if: "f.e5_ledger_to==='brannagh' || f.e5_bran_robe", t: `Brannagh stands over the dead men in their grey robes, turning one of the hoods with the toe of her boot. She looks at the robe, and then at the Abbess. The Abbess looks up from her bandaging and says, gently, *stolen from our laundry, the poor lost lambs*, and Brannagh says nothing at all.`, else: `Brannagh stands over the dead men in their grey robes, turning one of the hoods with the toe of her boot. The Abbess looks up from her bandaging and says, gently, *stolen from our laundry, the poor lost lambs*.` },
        `The Prince is examining the burned remains of the Lord's Lantern on the flagstones, turning a scrap of charred paper over with one gloved finger. He catches your eye, and smiles, and says, quite loudly:`,
        '@cassius: "Twice in one day, Sergeant. You\'re becoming a habit."',
        `Then Lord Varane gets up.`,
        `He shouldn't be able to. Isolde says *Father, no*, and he puts her hand aside, gently, and holds out his good hand for a taper. Somebody gives him one.`,
        '@varane: "The town has to see me standing," he says. His voice cracks. "The town has to see me *standing*."',
        `He lights a new lantern from the brazier, a plain one, with no name on it. He holds it up over the parapet where everyone can see, swaying, the blood coming through the silk at his shoulder. And he lets it go.`
      ],
      fx: { quest: [{ id: 'e5_robes', state: 'done', note: 'The men in Lamp robes tried to kill Lord Varane at the lantern release. He lives.' }, { id: 'e5_feast', note: 'Lord Varane took a crossbow bolt at the lantern release, and lived, and let the first lantern go himself.' }], rep: { varane: 2, town: 1 }, xp: 60 },
      next: 'a4_release2'
    },
    a4_release2: {
      text: [
        `It goes up. One small light, wobbling, rising over the gatehouse into the dark.`,
        `For a moment nothing else happens. Four thousand people stand in the streets of Harrowgate holding their unlit lanterns, looking up at their lord's one light.`,
        `And then someone down on the Tanners' Bottom lets theirs go. And someone on the Market Stair. And then all of them, all at once, the whole town, a sound like a great breath let out.`,
        `Ten thousand lanterns lift off Harrowgate together and go up into the night like sparks off a fire that's been waiting a year to burn.`
      ],
      next: 'act5'
    },

    /* ======================= ACT FIVE: THE ARCHIVE ======================= */
    act5: {
      card: { kind: 'act', title: 'Part Five', sub: 'The Archive' },
      next: 'a5_summons'
    },
    a5_summons: {
      loc: 'Varane Keep — the small hours',
      text: [
        `An hour after, with the lord abed and bandaged, the surgeon gone, the Prince retired to the Swan Tower and the bodies laid out under sheets in the chapel, Isolde's old nurse finds you in the guardroom washing Hale's blood off your boots.`,
        '@narrator: "Her ladyship," says Wenna, "is in the archive. She says you\'ll know." She looks at you sideways, a long, unhappy, grandmotherly look. "She\'s not to be alone tonight. And she\'s not to be *not* alone. You see the trouble."',
        { if: 'f.e5_archive_invite', t: `You see the trouble.`, else: `You've never been to the archive. Wenna takes you, through three doors she unlocks with keys from her apron, and leaves you at the fourth.` }
      ],
      next: 'a5_archive'
    },
    a5_archive: {
      loc: 'The Varane archive, above the chapel — the small hours',
      text: [
        `It's a long low room under the roof-beams, lined to the rafters with ledgers. Three hundred years of Varane accounts, the canal plans in rolls on a trestle, a desk under the window, a single candle. It smells of dust and leather and mice.`,
        `The window is full of lanterns. Thousands of them, still rising off the town in slow drifts, so that the glass is gold and moving, and the light goes over the spines of the ledgers like water.`,
        `Isolde is sitting on the floor with her back against a shelf. She's still in the silver dress. Her father's blood has dried on it in a long brown map from the breast to the hem. Her hair has come all the way down. She has a cup of wine in her hand and has not drunk any of it.`,
        { if: "f.e5_ledger_to==='isolde'", t: `The Saltdown ledger is open on the floor beside her. She has been adding in the margins in pencil, in her small fierce hand.` },
        { if: "f.e5_testimony==='isolde'", t: `There are sheets of figures on the floor around her: carts, heads, silver. She has been working out what Ulla told her, again and again, as if it might come out differently.` },
        '@isolde: "They tried to kill him," she says, without looking up. "On the Feast. In front of the Prince. In front of everyone." She laughs, a small cracked sound. "And I have to go down in the morning and smile, and sign, and thank the Marshal for his quick action."'
      ],
      choices: [
        { t: '"It was the Marshal, my lady. His men. His old sergeant. You know it."', go: 'a5_arch_hask' },
        { t: '"Don\'t marry him."', go: 'a5_arch_marry' },
        { t: 'Sit down on the floor beside her. "Are you all right?"', go: 'a5_arch_ok' }
      ]
    },
    a5_arch_hask: {
      text: [
        '@isolde: "I know it." She finally looks at you. "I know it the way I know the mill accounts are short. I can see the hole. I can\'t prove what fell in." She sets the cup down. "If I accuse the Marshal of Harrowgate tonight, with the Prince in the house, the Prince will ask for proof, and I\'ll give him a hired sword\'s word and a dead man\'s half a sentence, and he\'ll smile at me the way he smiles, and Konrad will be in the solar by morning *comforting my father*."',
        { if: 'f.e2_told_isolde_truth', t: '@isolde: "You told me the truth about Annet. You\'re telling me the truth now. I want you to know that I know the difference. It\'s the only thing I have that\'s worth anything."' },
        '@isolde: "Sit down, Ansel. You\'re looming. My whole life men have loomed."'
      ],
      fx: { bond: { isolde: 1 }, quiet: true },
      next: 'a5_arch_close'
    },
    a5_arch_marry: {
      text: [
        `She looks up at you, very slowly, as if you've spoken in a language she used to know as a child.`,
        '@isolde: "And do what? Run away with you to the Thornwood and live on squirrels?" It\'s meant to be a joke. It doesn\'t land anywhere. "If I don\'t marry him, the Crown takes the March for debt inside the year. Konrad becomes Lord Warden. My father dies of grief in a rented room in Corvane. And everyone in this town learns what *absorbed* means." She closes her eyes. "That\'s the arithmetic. I\'ve done it a hundred times. It always comes out the same."',
        `A pause.`,
        '@isolde: "Say it again, though. Nobody else ever will."',
        '@ansel: "Don\'t marry him."',
        `She breathes out, as if she's put down something heavy for a moment, knowing she'll have to pick it up again.`
      ],
      fx: { bond: { isolde: 2 }, set: { e5_said_dont: 1 } },
      next: 'a5_arch_close'
    },
    a5_arch_ok: {
      text: [
        `You sit down on the dusty boards beside her, your shoulder a hand's width from hers, your back against three hundred years of her family's debts.`,
        '@ansel: "Are you all right?"',
        `It's the simplest question in the world. It undoes her.`,
        `She doesn't cry prettily. She cries like someone who hasn't since she was fourteen and has forgotten how it's done: with her whole body, hard and ugly and silent, her hand over her mouth, her shoulders shaking against the shelf. You don't touch her. You stay. After a while, without looking, she reaches out and finds your sleeve, and holds on to it.`,
        '@isolde: "No," she says at last, wetly, furiously. "No, Ansel, I\'m not *all right*. Thank you for asking. Nobody asks. Nobody in my whole life has ever thought to ask."'
      ],
      fx: { bond: { isolde: 2 } },
      next: 'a5_arch_close'
    },
    a5_arch_close: {
      text: [
        `For a while neither of you says anything. The lanterns go past the window, gold and slow. Somewhere below, the last of the Feast is singing in the hall, drunk and tuneless. The candle gutters.`,
        `She is very close. You can smell her: wax, ink, her father's blood, something like violets under all of it, and the sweat of a woman who has been afraid for six hours.`,
        `She looks down at your left hand, lying on the boards between you in its glove.`,
        '@isolde: "You never take it off," she says. "Not to eat. Not to fight. Not tonight, washing blood off your boots, Wenna says." Her fingers rest on the back of the glove, very lightly. "Will you? For me. Just once. I don\'t like not knowing a number."'
      ],
      choices: [
        { t: 'Take the glove off. Let her see.', go: 'a5_arch_palm' },
        { t: '"Not that. Anything else. Not that."', go: 'a5_arch_glove' }
      ]
    },
    a5_arch_palm: {
      text: [
        `You pull it off, finger by finger. You haven't done this in front of anyone in six years.`,
        `The burn is in the middle of your palm, seven points, clean-edged, pink and shining as the day you woke up with it, as if it were made this morning. It never scarred over. It never will.`,
        `She doesn't flinch. She takes your hand in both of hers and turns it to the window, to the lanterns' light, the way she'd turn a coin to read the mint mark.`,
        '@isolde: "It\'s the Lamp\'s star," she whispers. "Seven points." She touches the centre of it with one fingertip, and you both feel it: it\'s warm. Warmer than skin should be. "It\'s *warm*, Ansel."',
        '@ansel: "Always."',
        `She doesn't ask what it is. She folds your fingers closed over it, gently, as if she were closing a book she means to come back to, and keeps your fist in both her hands.`
      ],
      fx: { bond: { isolde: 1 }, set: { e5_isolde_palm: 1 } },
      next: 'a5_arch_moment'
    },
    a5_arch_glove: {
      text: [
        '@ansel: "Not that. Anything else."',
        `She takes her fingers away at once, and you're sorry, and she sees that you're sorry.`,
        '@isolde: "Anything else," she repeats, softly. "That\'s a dangerous thing to say to a woman who keeps accounts." She turns your gloved hand over, palm up, and lays her own bare hand in it, and leaves it there. "There. Now you\'re holding something you can\'t see either."'
      ],
      next: 'a5_arch_moment'
    },
    a5_arch_moment: {
      text: [
        `She turns her face to you. The lantern-light goes across it from the window, gold, then shadow, then gold.`,
        `There's nothing between you now but about a hand's breadth of cold air and everything else in the world: a prince, a contract to be signed at noon, a bankrupt March, four thousand people, her father in his bed with a hole in his shoulder, a dead man's blood on her dress. You can feel her breath. She can feel yours. Neither of you is breathing very well.`,
        '@isolde: "I am going to marry him," she says, very quietly. "Tomorrow. I want you to know that I know that. Whatever happens now."'
      ],
      choices: [
        { t: 'Kiss her.', go: 'a5_kiss' },
        { t: 'Don\'t move. Let it be her choice, all the way to the end.', go: 'a5_almost' },
        { t: 'Lean back against the shelf. Give her the hand\'s breadth back. "Then don\'t."', go: 'a5_no' }
      ]
    },
    a5_kiss: {
      text: [
        `You kiss her.`,
        `For half a heartbeat she is utterly still, and you think you have made the worst mistake of a life full of them. Then her hand comes up into your hair and closes, hard, and she kisses you back like a woman drowning, like someone who has been keeping a column empty for nine years and has just found out what goes in it.`,
        `Her mouth tastes of the wine she didn't drink. Her other hand is flat on your chest, not pushing, holding on. The silver dress whispers against the boards. Somewhere far away a lantern goes past the window and lights you both up and goes on into the dark.`,
        `She pulls back first, an inch. Her forehead against yours. Both of you shaking.`,
        '@isolde: "Oh," she says, as if she\'s just added up a column and got a number she didn\'t expect. "Oh, *no*."',
        `And someone knocks at the archive door.`
      ],
      fx: { set: { e5_isolde_kiss: 'kissed' }, bond: { isolde: 2 } },
      next: 'a5_knock'
    },
    a5_almost: {
      text: [
        `You don't move. You let it be hers, the whole hand's breadth of it.`,
        `She closes it to a finger's width. Her forehead comes to rest against yours. Her eyes are shut. Her breath goes across your mouth, warm and uneven, and her hand is shaking on your chest, and you can feel how much she wants to and how much she is adding up what it will cost, every column, right to the bottom of the page.`,
        '@isolde: "If I do," she whispers, "I won\'t be able to stop. Not tonight. Not tomorrow at noon. Not ever. I *know* myself, Ansel. I know exactly how much I can afford."',
        `Her lips are so close to yours that the words touch you.`,
        `And someone knocks at the archive door.`
      ],
      fx: { set: { e5_isolde_kiss: 'almost' }, bond: { isolde: 2 } },
      next: 'a5_knock'
    },
    a5_no: {
      text: [
        `You lean back against the shelf. You give her back the hand's breadth of air, and it is the hardest single inch you have ever moved.`,
        '@ansel: "Then don\'t."',
        `She looks at you for a long moment. You see her understand it: that you are not refusing her, that you are refusing to be one more thing she'll have to pay for. You see it hurt, and you see her decide to be grateful later, when she can afford it.`,
        '@isolde: "You\'re right." Very evenly. "Of course you\'re right. You\'re always so *bloody*—"',
        `And someone knocks at the archive door.`
      ],
      fx: { set: { e5_isolde_kiss: 'no' }, bond: { isolde: 1 } },
      next: 'a5_knock'
    },
    a5_knock: {
      text: [
        `Three knocks. Measured. Polite.`,
        '@gideon: "My lady." Ser Gideon Vail\'s voice, through the oak. "Forgive me. His Highness has asked that I see you safely to your chambers. He worries, after tonight."',
        `Isolde gets up. It takes her a moment. She puts her hair up with four pins from her sleeve, by feel, without a glass, in about the time it takes to draw a breath, and it is perfect. She smooths the ruined dress. She becomes, in front of your eyes, the Lady of Harrowgate.`,
        `She doesn't look at you. At the door, with her hand on the latch, she says, very low, to the wood:`,
        { if: "f.e5_isolde_kiss==='kissed'", t: '@isolde: "I will remember that for the rest of my life. I wish to God I weren\'t so good at remembering things."' },
        { if: "f.e5_isolde_kiss==='almost'", t: '@isolde: "One more breath, Ansel. That\'s all it was. I\'ll spend the rest of my life knowing exactly how much one breath costs."' },
        { if: "f.e5_isolde_kiss==='no'", t: '@isolde: "Thank you for being kinder than I wanted. I\'ll hate you for it until I\'m old enough to be glad."' },
        `She opens the door. Gideon is standing in the passage with a candle. His eyes go past her to you, on the floor, and take in your face and your bare or gloved hand and the spilled wine, and his own face does not change by so much as a hair.`,
        '@gideon: "My lady," he says, and offers his arm.',
        '@isolde: "Thank you, Ser Gideon." Perfectly. And she\'s gone.'
      ],
      fx: { quest: { id: 'e5_feast', note: 'In the archive, after the lanterns, Isolde and you. Ser Gideon knocked.' } },
      next: 'a5_gideon'
    },
    a5_gideon: {
      text: [
        `Gideon comes back alone a few minutes later, while you are still on the floor. He stands in the doorway with the candle and looks at the ledgers, not at you.`,
        '@gideon: "I saw nothing, Sergeant," he says. "I am extremely good at it. I have been seeing nothing for my prince for nineteen years." He pauses. "Be better at it than I am. For her sake. He isn\'t a jealous man. He\'s something much worse. He\'s a *curious* one."',
        `He goes. You sit in the dark with the candle guttering and the lanterns going past the window, thousands of them, and you put your glove back on.`
      ],
      next: 'a5_where'
    },
    a5_where: {
      loc: 'Varane Keep — the small hours',
      text: [
        `The castle is full of the sounds of the very end of a feast: a dropped cup, someone singing on a stair, a couple laughing behind a door. Outside, the town is still letting lanterns go. It will go on until dawn. It always does.`,
        { if: 'f.e5_delphine_invited && !f.e5_delphine_refused', t: `In your belt, folded flat, is a paper lantern with no name on it.` },
        { if: 'f.e5_delphine_refused', t: `Across the inner ward, a light is burning at the top of the Swan Tower.` }
      ],
      choices: [
        { if: 'f.e5_delphine_invited', t: 'The Swan Tower. Delphine.', go: 'a5_del1' },
        { t: 'Up onto the walls. You need to see the sky, even if it sees you.', go: 'a5_cut' },
        { t: 'The guardroom, and the bottle you hid under the cot.', go: 'a5_bottle' }
      ]
    },
    a5_bottle: {
      text: [
        `The bottle is where you left it. You sit on the cot in the windowless dark and pull the cork with your teeth.`,
        `You don't drink it. You sit there holding it for a long time, which is new. Then a knock on the doorframe.`,
        '@tamsin: "Sergeant." Tamsin, in the door, with her lantern still in her hands, unlit. Two Ls. "I couldn\'t let it go by myself. Isn\'t that stupid?" She holds it out. "Come up on the wall. Come on. Bring that, if you have to. I won\'t tell."'
      ],
      next: 'a5_cut'
    },

    /* ---- Delphine ---- */
    a5_del1: {
      loc: 'The Swan Tower — the top room',
      text: [
        `The top room of the Swan Tower is hot as a bread oven. A fire banked high, a copper bath steaming in front of it, a bed hung with the Prince's own gold. Candles everywhere. A jug of wine. And the window open, and the lanterns going past outside, close enough to touch.`,
        `Delphine is sitting in the window in a man's shirt and nothing else, with her bare feet up on the sill, writing a name on a paper lantern.`,
        '@delphine: "My mother," she says, without turning. "She was a laundress in Pelling. She used to say the Saints must be very clean, all that light. She\'d have hated them. She hated clean people." She lights the candle inside, and lets the lantern go out of the window, and watches it rise. Then she looks at you. "You came."',
        '@ansel: "I came."',
        '@delphine: "And you\'re wondering whether the Prince is listening at the door." She swings her legs down. "He isn\'t. He\'s asleep. He sleeps like a child after a good day, and he\'s had a *wonderful* day. You gave him two of the best moments he\'s had in a year."'
      ],
      choices: [
        { t: '"You\'re going to tell him everything about tonight."', go: 'a5_del_spy' },
        { t: 'Say nothing. Cross the room. Put your hand on her face.', go: 'a5_del_touch' },
        { t: '"I can\'t. I thought I could. I can\'t."', go: 'a5_del_leave' }
      ]
    },
    a5_del_spy: {
      text: [
        '@delphine: "Not everything." She comes across the room, unhurried, and starts on the buckles of your tabard as if she has done it a thousand times, which she has, for other men. "I\'ll tell him what you\'re like. Whether you talk in your sleep. What you want. What you\'re afraid of. That\'s my trade, Sergeant. I\'m honest about it, which is more than your Marshal is about his."',
        `The tabard comes off. She starts on the shirt laces.`,
        '@delphine: "What I won\'t tell him is whether I liked it. That\'s mine. He doesn\'t pay for that." She looks up at you. Her eyes are very dark and very amused and, under the amusement, not amused at all. "So. Do you want to be told about, Sergeant, or not?"'
      ],
      choices: [
        { t: 'Kiss her.', go: 'a5_del_bed' },
        { t: '"No. Not by you, not by anyone." Pick up your tabard.', go: 'a5_del_leave' }
      ]
    },
    a5_del_touch: {
      text: [
        `You cross the room. You put your right hand on the side of her face, and she turns into it, and closes her eyes for a moment as if she's surprised by something.`,
        '@delphine: "Oh," she says. "You\'re *gentle*. Nobody told me that." She opens her eyes. "That\'s going to be very annoying to report."'
      ],
      next: 'a5_del_bed'
    },
    a5_del_bed: {
      text: [
        `She's in no hurry. That's the first surprise. She undresses you the way she'd unwrap something from a good shop, slowly, with real interest, putting each piece aside. She finds the scar under your ribs where the spear went in at the ford and puts her mouth to it, and you make a sound you haven't made in years.`,
        `The bath is too small for two. You find that out together. Water goes everywhere. She laughs, properly, a filthy delighted laugh, with her wet hair in her face, and then she stops laughing and pulls you down onto the hearth-rug by the shoulders.`,
        `Her body is warm and soft and frank and knows exactly what it wants, and tells you, plainly, in words, which no one has done before. You're clumsy at first, out of practice, too heavy, and she doesn't pretend you aren't; she just moves you where she wants you, with her hands and her knees, and says *there*, and *slower, soldier*, and *oh, yes, that, that* — and then for a while neither of you says anything coherent at all.`,
        `The lanterns go past the open window. The fire is too hot. Somewhere in the middle of it you realise you have forgotten, completely, for the first time in six years, that the sky is there.`
      ],
      next: 'a5_del_after'
    },
    a5_del_after: {
      text: [
        `After, she lies across your chest on the rug with her chin on her hands, watching you breathe. The fire has burned down. Her shirt is somewhere in the bath.`,
        `Then she reaches down without looking, and takes your left hand, and before you can stop her she has peeled the glove off it, quick and practised, a pickpocket's move.`,
        `She turns your palm up to the firelight. The seven-pointed star, pink and shining and new as the day you woke up with it.`,
        `She goes very still. Then she puts one finger in the centre of it.`,
        '@delphine: "It\'s warm," she says softly. "Why is it warm, Ansel?"'
      ],
      choices: [
        { t: 'The truth. "I died at Corran\'s Ford. I woke up with it."', go: 'a5_del_truth' },
        { t: 'A lie. "A brand. A bad debt in Lowmarch. They mark you."', go: 'a5_del_lie' },
        { t: 'Take your hand back. Say nothing at all.', go: 'a5_del_silent' }
      ]
    },
    a5_del_truth: {
      text: [
        '@ansel: "I died at Corran\'s Ford. I woke up in the morning with that."',
        `She doesn't laugh. She looks at the burn, and then at your face, for a long time.`,
        '@delphine: "I believe you," she says, and sounds as if she wishes she didn\'t. She kisses the centre of your palm, very lightly, and folds your fingers over it. "That\'s worth more than you know, Sergeant. I\'m sorry. I\'m going to sell it anyway." She lays her head down on your chest. "Stay till the bells. Please. I don\'t like waking up in this bed alone. It\'s his bed."'
      ],
      fx: { set: { e5_delphine: 1, e5_delph_told: 'truth' } },
      next: 'a5_del_report'
    },
    a5_del_lie: {
      text: [
        '@ansel: "A brand. Debt, in Lowmarch. When I was young. They mark you with whatever\'s to hand."',
        `She looks at it. She looks at you. She smiles, slowly, like a card-player who has just watched you put down a card face-up by mistake.`,
        '@delphine: "Debtors in Lowmarch," she says, "are branded on the *shoulder*, Ansel, with a D. I grew up two valleys over." She kisses your knuckles. "You lie like an honest man. It\'s adorable. It\'s also very informative." She settles against you. "Stay till the bells."'
      ],
      fx: { set: { e5_delphine: 1, e5_delph_told: 'lie' } },
      next: 'a5_del_report'
    },
    a5_del_silent: {
      text: [
        `You take your hand back. You put the glove on. You don't say anything at all.`,
        `She watches you do it, and something in her face softens and saddens at the same time.`,
        '@delphine: "That\'s fair," she says. "That\'s very fair. I\'d do the same." She lies back down against you. "But I saw it, Sergeant. I can\'t unsee it, any more than you can unwake. Stay till the bells."'
      ],
      fx: { set: { e5_delphine: 1, e5_delph_told: 'silence' } },
      next: 'a5_del_report'
    },
    a5_del_leave: {
      text: [
        `She lets you go. She doesn't sulk or plead. She sits back down in the window with her bare feet on the sill.`,
        '@delphine: "Well," she says. "That\'s interesting too. I\'ll have to tell him that." She lights another lantern. "Go and look at the sky, Sergeant. Everybody else is."'
      ],
      fx: { set: { e5_delphine_left: 1 } },
      next: 'a5_cut'
    },
    a5_del_report: {
      loc: 'The Swan Tower — the Prince\'s bedchamber, before dawn',
      text: [
        '~ LATER.',
        `Before the bells, while you are asleep on the hearth-rug with your arm over your face, Delphine pads barefoot down one flight of stairs, in your shirt, and lets herself into the Prince's bedchamber.`,
        `Cassius is awake, sitting up in bed reading, as she knew he would be.`,
        { if: "f.e5_delph_told==='truth'", t: '@delphine: "A star," she says. "Seven points, burned into the left palm. It\'s warm to the touch, warmer than skin. He says he died at Corran\'s Ford and woke up with it. He believes it." She pauses. "So do I."' },
        { if: "f.e5_delph_told==='lie'", t: '@delphine: "A star," she says. "Seven points, burned into the left palm. Warm to the touch, warmer than skin. He lied about it. Badly. He\'s frightened of it."' },
        { if: "f.e5_delph_told==='silence'", t: '@delphine: "A star," she says. "Seven points, burned into the left palm. Warm to the touch, warmer than skin. He wouldn\'t say. He put the glove back on like a man putting on armour."' },
        '@cassius: "The Lamp\'s star." He closes his book. His eyes are bright. "Oh, *Konrad*. You have no idea what you\'ve got, have you." He looks at her. "Was he good?"',
        '@delphine: "That\'s not in the price, Highness."',
        `He laughs, delighted, and pats the bed beside him. She doesn't get in. She goes back up the stairs.`
      ],
      next: 'a5_cut'
    },

    /* ---- The cutaway ---- */
    a5_cut: {
      loc: 'The Prince\'s solar in the Swan Tower — the small hours',
      text: [
        '~ CUT TO: THE PRINCE\'S SOLAR. AN HOUR EARLIER.',
        `Hask stands in front of the Prince's fire with his hat in his hands. It's the first time you have ever seen him hold his hat in his hands. Cassius sits in a chair in his butter-coloured gown, peeling an orange with a little silver knife.`,
        '@hask: "Lamp fanatics, Highness. Heretics in stolen robes. I can only apologise. The town will see them hang."',
        '@cassius: "They\'re already dead, Konrad. You killed one of them yourself, very handsomely. Everyone said so." He eats a segment. "You missed."',
        '@hask: "I—"',
        '@cassius: "I didn\'t hear that. Any of it. I came for a wedding." He wipes his fingers. "But since we\'re chatting, as friends, about nothing."',
        { if: "f.e5_ledger_to==='isolde'", t: '@cassius: "My betrothed spent the small hours in her archive with a book from your salt mine, adding things up. Her nurse is very chatty with my laundress. Clever girl. You did say."' },
        { if: "f.e5_ledger_to==='varane'", t: '@cassius: "The old man has a book from your salt mine locked in his desk, and he touches the key around his neck every time you speak. He touched it eleven times at dinner. I counted. I was bored."' },
        { if: "f.e5_ledger_to==='brannagh'", t: '@cassius: "The Lampwarden went to the Abbess after the release with a book from your salt mine. They talked for an hour with the door shut. The Abbess came out looking older. I imagine she\'ll be writing to you."' },
        { if: "f.e5_ledger_to==='kept' && f.e4_ledger", t: '@cassius: "Your dead sergeant carries a book from your salt mine in the same case as his roll of the dead. He touches it like a love letter. Delphine says. Well, Delphine will say. She always does."' },
        { if: '!f.e4_ledger', t: '@cassius: "Your Nordvik giantess has been telling people about the carts at your salt mine. Nobody believes her yet. But she\'s very large, and very loud, and your sergeant listens to her."' },
        `Hask doesn't move. The fire pops. Something behind his eyes does the sum, and gets an answer, and does not like it.`,
        '@hask: "Then it can\'t wait for the spring," he says quietly.',
        '@cassius: "I have no idea what you\'re talking about." Cassius stands, and stretches, and yawns like a cat. "I\'m going to bed. It\'s been a lovely feast. Do give my regards to your sergeant."'
      ],
      fx: { set: { e5_hask_knows: 1 }, quest: { id: 'hask', note: 'Hask knows the evidence exists. Whatever he was planning for the spring, he means to do sooner.' } },
      next: 'a5_wall'
    },

    /* ======================= FINAL ======================= */
    a5_wall: {
      loc: 'The Keep walls — before dawn',
      text: [
        `You go up onto the wall-walk above the chapel yard, where the wind is, and the sky.`,
        `The town is still letting them go. Lanterns rise out of every street of Harrowgate, out of the Tanners' Bottom and the Market Stair and the yards of the Lanternhold, in threads and drifts and slow gold rivers, up past the walls, up past the blue tower, up and up until they are so small and so high that you can't tell, any more, which are lanterns and which are stars.`,
        `Tamsin is there. Of course she is. Sitting on the parapet with her legs over the drop, her lantern in her lap, still unlit.`,
        { if: 'f.e5_wrote_nessa', t: `NESSA VELL, two Ls, in your square sergeant's letters.` },
        { if: 'f.e5_delphine', t: '@tamsin: "You smell of roses," she says, without looking round. "And bathwater. Saints, Sergeant. *Roses.*" She says it lightly. It costs her something; you can hear the exact price.' },
        { if: '!f.e5_delphine', t: '@tamsin: "Couldn\'t do it on my own," she says, without looking round. "Isn\'t that stupid. I\'ve done everything on my own since I was nine."' }
      ],
      choices: [
        { t: 'Sit down beside her. Light it for her.', go: 'a5_wall_light' },
        { t: '"Tamsin—"', go: 'a5_wall_dont' }
      ]
    },
    a5_wall_light: {
      text: [
        `You sit on the parapet beside her, legs over the drop, and take the tinderbox from your belt. Your hands are shaking. She holds the lantern steady while you light the candle inside it, and the paper goes gold, and the names glow through from the inside.`,
        `She holds it up. She doesn't let it go yet.`,
        '@tamsin: "Go up easy, Mam," she says. Then, under her breath, so low you almost miss it: "Or go down. Whichever\'s kinder. I don\'t know any more."',
        `She lets it go.`
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'final'
    },
    a5_wall_dont: {
      text: [
        '@ansel: "Tamsin—"',
        '@tamsin: "Don\'t." Not unkind. "Whatever it is. Not tonight. Just sit here and be quiet with me, Sergeant. You\'re good at that. It\'s the best thing about you."',
        `So you sit. After a while she holds the lantern out, and you light it for her, and she lets it go without a word, and you both watch it climb.`
      ],
      fx: { bond: { tamsin: 1 }, quiet: true },
      next: 'final'
    },
    final: {
      text: [
        `It joins the others. Ten thousand of them, rising. Every name in Harrowgate going up into the dark.`,
        `You don't look away. For once you don't. You sit on the wall beside Tamsin and make yourself look up, at the lanterns, and past the lanterns, at the stars.`,
        `They're very close tonight. Closer than they've been since the ford. And they are not looking at the lanterns.`,
        `They are looking at the town. At the walls. At the wall-walk above the chapel yard. At you. The way a man in a dark room looks toward a sound he can't place.`,
        { if: 'f.e3_oriel_met', t: `Down in the Lanternhold yard, in an iron-and-glass cage, a girl with a shaven head is the only other soul in Harrowgate not watching the lanterns. Her silver eyes are turned up to the same patch of sky as yours.`, else: `Down in the Lanternhold yard, in an iron-and-glass cage, a blind girl with a shaven head is the only other soul in Harrowgate not watching the lanterns. Her silver eyes are turned up to the same patch of sky as yours.` },
        `Directly overhead, one star, small and white and ordinary, one you'd never have picked out of the thousand, flickers.`,
        `Goes dim. Like a candle in a draught. Like an eye, blinking.`,
        `Then it steadies, and burns on.`,
        `Beside you, Tamsin is watching her mother's lantern climb, and doesn't see. Your palm, inside the glove, is burning.`,
        `You keep looking up. You don't know what else to do.`
      ],
      fx: { xp: 100, quest: { id: 'e5_feast', state: 'done', note: 'The Feast of Lanterns is over. Lord Varane lives. The Prince stays for the wedding. Over Harrowgate, one star flickered.' } },
      end: true
    },

    /* ======================= SIDE: CONTRACTS (unlocked after E5) ======================= */
    /* --- The Twelfth Robe --- */
    c_robe_1: {
      loc: 'The Gutted Hen — morning',
      text: [
        `Mags puts a bowl of porridge in front of you and sits down across the table, which she never does before noon.`,
        '@mags: "Twelve Lamplighters went up to the Keep for the Feast. I counted them in for their dinners. You and the Marshal between you have laid out eleven under sheets." She taps the table. "There\'s a lad on the Tanners\' Bottom since the Feast night. Hiding in Corley\'s drying-loft over the lime pits. Grey robe under his coat. Corley\'s girl brings him bread because he cries." She lowers her voice. "And this morning two of the Marshal\'s men were asking along the Bottom for a lad in a grey robe. Asking very nicely."',
        '@mags: "I\'ll give you twenty silver to get to him first. Not for him. For Corley\'s girl. She\'s eleven, and they\'ll burn the loft down round her to get him."'
      ],
      choices: [
        { t: '"Which loft?"', go: 'c_robe_2' },
        { t: '"Keep your silver, Mags. I\'d have gone anyway."', go: 'c_robe_2', fx: { bond: { mags: 1 }, set: { e5_robe_free: 1 } } }
      ]
    },
    c_robe_2: {
      loc: 'The Tanners\' Bottom — Corley\'s drying-loft',
      text: [
        `The lime pits. The stink of your childhood hits you in the back of the throat like a fist, and for a moment you are nine years old and your father is holding your arm in the vat to teach you what lime does to skin.`,
        `The loft is hung with hides like flayed men. In the far corner, behind a stack of fleshed calfskins, a boy in a grey robe is sitting with his knees drawn up and a long knife in both hands, pointed at you. Nineteen at most. Corporal's stripes cut off his sleeve, the threads still showing.`,
        '@narrator: "Don\'t," he says. "Don\'t, I\'ll— I know who you are. You\'re *him*. You killed Hale."',
        '@ansel: "Hale killed Hale. I was just there."',
        '@narrator: "Kit," he says, when you ask. "Kit Carrow. I didn\'t go in. I was on the gate with a horn. I was supposed to blow it after. I dropped it in the moat and ran." He\'s crying. "They told us it was the old man or the March. They told us the Prince wanted it. The Marshal never said it, not once, it was always *the Sergeant says*."'
      ],
      choices: [
        { t: '"Who\'s the Sergeant, Kit?"', go: 'c_robe_3' },
        { t: '"Put the knife down. Hask\'s men are on the Bottom already."', go: 'c_robe_3' }
      ]
    },
    c_robe_3: {
      text: [
        '@narrator: "Hale was. Garret Hale. And above Hale—" He stops. He looks past you, at the loft door.',
        `Boots on the ladder. A voice below, friendly as a neighbour: *Kit? Kit, lad, come down, the Marshal's not angry. He just wants a word.*`,
        `Three of them come up through the hatch: two men-at-arms in Varane blue with spears, and a crossbowman who stays on the ladder and levels his bow past you, at the boy, without a word.`
      ],
      next: 'c_robe_fight', nextLabel: 'Stand in front of the boy.'
    },
    c_robe_fight: {
      fight: { foes: ['man_at_arms', 'man_at_arms', 'crossbowman'], title: 'The Drying-Loft', win: 'c_robe_4',
        intro: 'Low beams, hanging hides, a hatch behind you. They have orders.' }
    },
    c_robe_4: {
      text: [
        `When it's over, Kit Carrow is still in his corner with his knife, staring at the Marshal's men dead among the hides. He has wet himself. He doesn't seem to notice.`,
        '@narrator: "They were going to kill me," he says, wonderingly, as if this is a new idea. "They were *our* lads."',
        `He's a witness. A frightened, half-hearted, piss-soaked witness who heard *the Sergeant says* and never once *the Marshal*. In a court, he's nothing. In the Marshal's cells, he's a hanged man by morning.`
      ],
      choices: [
        { t: 'Take him to Isolde, in secret. Let her hide him. A witness kept is better than none.', go: 'c_robe_isolde' },
        { t: 'Give him your silver and point him at the Corvane road. "Don\'t stop till the sea."', go: 'c_robe_go' },
        { t: 'He came to kill an old man on a holy night. End it here.', go: 'c_robe_kill' }
      ]
    },
    c_robe_isolde: {
      text: [
        `You walk him up to the Keep with your cloak over his robe and a basket of Mags's bread on his arm like a delivery boy. Wenna meets you at the postern and takes him without a word, as if this is a thing she does.`,
        `That evening a note comes to the Hen in a quick, clean hand. *He is in the canal office, where nobody has gone in three years because it embarrasses my father. He weeps a great deal. Thank you. —I.*`
      ],
      fx: { set: { e5_kit: 'isolde' }, bond: { isolde: 1 }, rep: { varane: 1 }, silver: 20, xp: 70, quest: { id: 'hask', note: 'Kit Carrow, the last of the robed men, is hidden in the Keep by Isolde. He heard "the Sergeant says," never "the Marshal."' } },
      next: 'c_robe_end'
    },
    c_robe_go: {
      text: [
        `You give him twelve silver and Ox's old saddle-blanket and walk him to the West Gate at dusk, past a guard who owes Mags money.`,
        '@narrator: "Why?" he says, at the gate.',
        '@ansel: "Because I was nineteen once, and a man told me it was the Prince who wanted it."',
        `He goes. You never see him again. Sometimes, later, you'll wonder whether that was mercy or just tiredness. You'll decide it doesn't matter.`
      ],
      fx: { set: { e5_kit: 'fled' }, silver: 8, rep: { town: 1 }, xp: 70 },
      next: 'c_robe_end'
    },
    c_robe_kill: {
      text: [
        `He sees it in your face before you move. He doesn't fight. He just closes his eyes and says *Mam* once, the way they all do.`,
        `It's quick. You know how to make it quick.`,
        `Mags pays you. She doesn't ask. She looks at your hands for a long time while she counts it out, and then she pours you a drink you didn't ask for and leaves the bottle.`
      ],
      fx: { set: { e5_kit: 'killed' }, silver: 20, xp: 70, bond: { mags: -1 } },
      next: 'c_robe_end'
    },
    c_robe_end: {
      text: [
        `Corley's girl leaves a calfskin purse on the Hen's step the next morning, badly stitched, with your name burned into it with a hot nail. Spelled wrong.`
      ],
      fx: { give: { poultice: 1 } },
      end: true
    },

    /* --- Diggers on the Downs --- */
    c_dig_1: {
      loc: 'The Market Stair — the notice board',
      text: [
        '@tibb: "*Lost*," reads Old Tibb, for a penny. "*On the downs past Gallowmere, my son Col Thrale, fifteen, red hair, gone with men to dig at the old graves for a Corvane gentleman who pays in silver for bronze. Four days. Fifteen silver to whoever brings him home. Agnes Thrale, the Rope Walk.*" He scratches his chin. "The Corvane gentleman\'s a collector, they say. Come up with the Prince. Buys old things off the downs. Pays well. Nobody he\'s paid has come back to spend it."'
      ],
      next: 'c_dig_2'
    },
    c_dig_2: {
      loc: 'The Barrowfields — a cut mound, dusk',
      text: [
        `You find the diggers' camp on the second day, at the foot of a long green barrow on the downs that somebody has cut into like a cake.`,
        `They're still there. Five men, sitting in a ring around a cold fire, shovels across their knees. Frost on their shoulders in September. Eyes open. Sitting very, very still. They have been dead for days and nothing has touched them: not crows, not foxes, not flies.`,
        '@pell: "*Grave-robbers who open them are found in the morning sitting very still*," Pell whispers, if he\'s with you, or you remember him saying it if he\'s not. "It\'s in every chronicle. I always thought it was a figure of speech."',
        `Beside the dead men, a crate. Bronze in it, green with age: a cup, a ring, a sword-hilt, a mask with no mouth. A Corvane factor's mark on the lid.`,
        `And from the dark of the cut in the barrow, a boy's voice, hoarse, saying the same words over and over.`
      ],
      next: 'c_dig_3'
    },
    c_dig_3: {
      text: [
        `Col Thrale is ten yards into the barrow, in the dark, wedged into a gap in a fall of chalk. Red hair grey with dust. His eyes are wide open and he's staring at something on the wall you can't see properly in the dusk: carved stone, figures in a row, kneeling.`,
        '@narrator: "They\'re kneeling," he says. "All of them. They\'re all kneeling. Kneeling to the lights. Kneeling to the lights. Kneeling—"',
        `Behind you, outside, something coos. Like a pigeon. Like a lot of pigeons.`,
        `The gleaners have found the five dead men in the ring. And they've found you, between them and the boy.`
      ],
      next: 'c_dig_fight'
    },
    c_dig_fight: {
      fight: { foes: ['ghoul_brute', 'ghoul', 'ghoul'], title: 'The Cut Barrow', win: 'c_dig_4',
        intro: 'Gleaners at the barrow mouth. Fire, if you have it. Keep them off the boy.' }
    },
    c_dig_4: {
      text: [
        `You drag Col out of the barrow by his belt. He doesn't fight you. He doesn't stop talking either, not until you're a mile away across the downs, and then he stops all at once, and goes to sleep against Ox's neck like a dropped puppet.`,
        `The crate of bronze is still back there by the cold fire, with the factor's mark on it. Forty silver of old metal, easy, to a Corvane gentleman who collects.`
      ],
      choices: [
        { t: 'Take the bronze back into the barrow and leave it where it was. Whatever it belongs to, it isn\'t a prince.', go: 'c_dig_back' },
        { t: 'Sell it to the Corvane factor. Agnes Thrale\'s fifteen silver won\'t feed a winter.', go: 'c_dig_sell' }
      ]
    },
    c_dig_back: {
      text: [
        `You carry it back in at dawn: the cup, the ring, the hilt, the mask with no mouth. You lay them inside the cut, on the chalk, as near as you can to where they must have lain.`,
        `When you put the last piece down, the ground under your boots is warm. You feel it come up through your soles like a breath let out. Your palm stops burning for the first time in two days.`,
        `You don't look at the carving on the wall. You keep your eyes on the floor. That seems important.`
      ],
      fx: { set: { e5_bronze: 'returned' }, rep: { fen: 1 }, silver: 15, xp: 80, know: { codex: ['barrows'] } },
      next: 'c_dig_end'
    },
    c_dig_sell: {
      text: [
        `The Corvane factor is a soft, pleasant man in a room above the Water Stair who looks at each piece through a lens for a long time and pays without haggling. He is especially pleased by the mask.`,
        '@narrator: "His Highness will adore this," he says. "A face with no mouth. He collects things that shouldn\'t exist." He stops. "Ah. But I expect you know that."',
        `On the way down the stair your palm burns so badly you have to put it in a horse-trough.`
      ],
      fx: { set: { e5_bronze: 'sold' }, silver: 55, xp: 80, rep: { fen: -1 }, know: { codex: ['barrows'] } },
      next: 'c_dig_end'
    },
    c_dig_end: {
      text: [
        `Agnes Thrale holds her son on the Rope Walk and weeps into his grey-dusted hair. He lets her. He looks over her shoulder at you, at nothing, and says once more, very quietly, *kneeling*. Then he asks what's for supper, and he never says it again.`
      ],
      end: true
    },

    /* --- A Gentleman's Rematch --- */
    c_gid_1: {
      loc: 'The tilt-yard — dawn, frost',
      text: [
        `A page in gold brings a letter to the Hen, sealed with a plain knight's seal, no crest. *Ser Gideon Vail presents his compliments to Sergeant Dray and asks, if it is not an imposition, the honour of a second bout. Dawn, the tilt-yard. No crowd. No prince. A purse of thirty silver, which Ser Gideon would be embarrassed to win.*`,
        `He's waiting in the frost when you get there, in a padded jack, with two blunted swords and a flask of something hot.`,
        { if: "f.e5_melee==='threw'", t: '@gideon: "You owe me a real one, Sergeant," he says, mildly. "I\'ve come to collect."' },
        { if: "f.e5_melee==='won'", t: '@gideon: "I\'ve thought about your fist every day since," he says. "I\'d like to see if I\'ve learned anything."' },
        { if: "f.e5_melee==='lost'", t: '@gideon: "You let go of the sword. Twice. I\'ve been trying to teach myself to expect it." He smiles. "Let\'s see if I can."' }
      ],
      choices: [
        { t: 'Take the sword. Salute him.', go: 'c_gid_fight' },
        { t: '"Why does a champion want a bout with a sellsword at dawn?"', go: 'c_gid_why' }
      ]
    },
    c_gid_why: {
      text: [
        '@gideon: "Because at court, Sergeant, everyone lets me win." He hands you a sword, hilt first. "His Highness\'s friends, his enemies, the men who want my place. I have not had an honest fight in six years. You are the only man in Harrowgate who has hit me as if he meant it." He takes his guard. "It is the closest thing I have to confession."'
      ],
      next: 'c_gid_fight'
    },
    c_gid_fight: {
      fight: { foes: ['gideon'], solo: true, noWound: true, noLoot: true, title: 'A Gentleman\'s Rematch', win: 'c_gid_won', lose: 'c_gid_lost',
        intro: 'No crowd. Frost. A good man who wants to be beaten honestly.' }
    },
    c_gid_won: {
      text: [
        `He goes down in the frost laughing, and lies there with his arms spread, looking at the pink sky, steam coming off him.`,
        '@gideon: "Thank you," he says. "Truly." He sits up. "A word, for the purse. His Highness has asked me twice now what I know of you. I told him you fight like a man who has nothing to lose. He said: *Everyone has something, Gideon. Find out what.*" He gets up and brushes the frost off. "I have decided I am very stupid this month, and cannot find out anything at all."'
      ],
      fx: { silver: 30, xp: 90, set: { e5_gideon_rematch: 'won' }, rep: { town: 1 } },
      end: true
    },
    c_gid_lost: {
      text: [
        `He puts you in the frost, kindly, and helps you up, and gives you the flask, which is mulled wine with too much clove.`,
        '@gideon: "You weren\'t angry this time," he says. "That\'s better. Anger is a door left open." He presses the purse into your hand anyway. "I said I\'d be embarrassed to win it. I am." He hesitates. "His Highness asks about you. I tell him I know nothing. Be careful, Sergeant. I can only be stupid for so long."'
      ],
      fx: { silver: 30, xp: 50, set: { e5_gideon_rematch: 'lost' } },
      end: true
    },

    /* ======================= SIDE: TALKS ======================= */
    /* --- Isolde: a letter --- */
    t_iso_1: {
      loc: 'The Gutted Hen — the top room, evening',
      text: [
        `Wenna brings it herself, up the Hen's stairs, complaining about each one. A letter, folded small, sealed with plain wax and no device. She gives it to you, and then sits down on your bed to wait, as if she has been told to bring back an answer and intends to.`,
        `The hand is quick and clean.`,
        { if: "f.e5_isolde_kiss==='kissed'", t: '*I have signed. You will have heard. I want you to know that I read every line before I did, as I always do, and that in the margin of the last page, where nobody will ever look, I wrote a very small number. It is the number of breaths it took. I am not going to tell you what it was. I am a terrible woman and I want you to wonder.*' },
        { if: "f.e5_isolde_kiss==='almost'", t: '*I have signed. You will have heard. I read every line first, as I always do. I have discovered that it is possible to want a thing so precisely that you can measure the distance to it in the width of a finger, and to choose not to cross it, and to be right, and to be sorry for the rest of your life. I wanted you to know that I know that. It seems important that one of us writes it down.*' },
        { if: "f.e5_isolde_kiss==='no' || !f.e5_isolde_kiss", t: '*I have signed. You will have heard. I read every line first, as I always do. You were kinder to me in the archive than I wanted, and I have been very angry with you for four days, and this morning I found I was grateful instead, which was worse. Nobody else in my life would have given me the inch back. They would have taken it and sent me the bill.*' },
        '*My father is mending. The Marshal visits him every day with grapes. I keep the books, and I watch, and I add. — I.*',
        '*P.S. Wenna will wait for an answer. She will wait until she dies. Please don\'t make her.*'
      ],
      choices: [
        { t: 'Write back. One line. "You owe me a dance. The Stamp, or the other one."', go: 't_iso_2' },
        { t: 'Write back the truth. "I think about the archive every night. I\'d do it again. All of it."', go: 't_iso_3' },
        { t: 'Write back plainly. "Watch the Marshal. Don\'t be alone with him. Keep Wenna close."', go: 't_iso_4' }
      ]
    },
    t_iso_2: {
      text: [
        `Wenna reads it upside down before you've finished folding it, and snorts, and puts it in her apron.`,
        '@narrator: "She\'ll laugh at that," she says. "She doesn\'t laugh. Not since she was small." She gets up off the bed with a groan. "You\'re a bad idea, Sergeant Dray. You\'re the best bad idea she\'s ever had."'
      ],
      fx: { bond: { isolde: 1 }, set: { e5_iso_letter: 'dance' } },
      end: true
    },
    t_iso_3: {
      text: [
        `Wenna watches you write it. She watches your hand shake. When you give it to her she holds it a moment without putting it away.`,
        '@narrator: "She\'ll keep this," she says. "She keeps everything. In a box under the third board from the window, where she thinks I don\'t know." She tucks it away. "If anybody else ever finds that box, Sergeant, they\'ll hang you, and they\'ll send her to a convent, and the Prince will laugh. Do you understand what you\'ve given her?"',
        '@ansel: "Yes."',
        '@narrator: "Good," says Wenna, and pats your cheek, hard. "So long as you know."'
      ],
      fx: { bond: { isolde: 2 }, set: { e5_iso_letter: 'truth' } },
      end: true
    },
    t_iso_4: {
      text: [
        `Wenna reads it, and her old face sets like mortar.`,
        '@narrator: "I\'ve been keeping that girl alive since before she had teeth," she says. "I\'ll keep her alive a while longer." She folds the letter into her bodice. "But it\'s a cold thing to write to a woman who wrote you *that*, Sergeant. She\'ll know why you did it. She\'ll still lie awake."'
      ],
      fx: { bond: { isolde: 1 }, rep: { varane: 1 }, set: { e5_iso_letter: 'warn' } },
      end: true
    },

    /* --- Tamsin: letters --- */
    t_tam5_1: {
      loc: 'The Gutted Hen — the back step, dusk',
      text: [
        `Tamsin is on the back step with a stick, drawing in the mud. Snakes. Two of them, side by side, over and over. When she hears you she scuffs them out with her boot, too late.`,
        '@tamsin: "Don\'t."',
        '@ansel: "Didn\'t say anything."',
        '@tamsin: "You were going to say something kind and I was going to have to kill you, and then who\'d pay for the room."'
      ],
      choices: [
        { t: 'Sit down. Take the stick. Draw an N in the mud beside the snakes.', go: 't_tam5_2' },
        { t: '"I could teach you. The rest of them. Evenings. Nobody needs to know."', go: 't_tam5_3' },
        { t: 'Leave it. Ask her instead about the fen, and her gran.', go: 't_tam5_4' }
      ]
    },
    t_tam5_2: {
      text: [
        `You draw it. N. Then you give her the stick back and don't say anything at all.`,
        `She looks at it for a long time. Then she draws one next to it, wobbling. Then another, better.`,
        '@tamsin: "N," she says. "For Nessa." A pause. "For *nosy*." She draws an E. You didn\'t show her E. She must have been looking at the lantern harder than you thought. "Shut up," she says, though you haven\'t spoken. "Shut up, Sergeant. I\'m concentrating."',
        `You sit on the step until it's too dark to see the mud, and she draws her mother's name eleven times, and on the last one gets both Ls.`
      ],
      fx: { bond: { tamsin: 2 }, set: { e5_tam_letters: 1 } },
      next: 't_tam5_end'
    },
    t_tam5_3: {
      text: [
        `Her face goes red, and then white, and for a moment you think she's going to hit you.`,
        '@tamsin: "I\'m twenty-four," she says. "I don\'t need— I get by. I\'ve always got by." She stares at the scuffed mud. "You think I\'m stupid."',
        '@ansel: "I think you can read a man\'s whole life off the way he stands at a gate. I think you\'re the cleverest person I know. I think it makes you angry that there\'s one thing you can\'t do."',
        `She doesn't say anything for a long while. Then, very low:`,
        '@tamsin: "Just her name, then. And yours. That\'s all. Two names. Don\'t make a thing of it."',
        `You don't make a thing of it. You draw them both in the mud, ANSEL under NESSA, and she copies them, and when she gets to yours she stops, and looks at it, and rubs it out with her thumb, and does it again more carefully.`
      ],
      fx: { bond: { tamsin: 2 }, set: { e5_tam_letters: 1 } },
      next: 't_tam5_end'
    },
    t_tam5_4: {
      text: [
        '@tamsin: "Gran\'s well. Mean as a heron. She asks about you." She says it easily. Too easily, maybe, or maybe you\'ve forgotten what easy sounds like. "She asks if you sleep. I told her you sleep under things, like a cat. She said that was sensible."',
        { if: 'f.e1_saw_crow || f.e3_suspect_tam', t: `You think of crows. You think of a big glossy bird going up into the dark without a sound, and a twist of red thread. You don't say anything. She watches you not say it.` },
        '@tamsin: "She says the ground\'s restless this autumn," Tamsin goes on, to the mud. "She says the barrows are breathing. She says a lot of things. She\'s a hundred."'
      ],
      fx: { bond: { tamsin: 1 } },
      next: 't_tam5_end'
    },
    t_tam5_end: {
      text: [
        `The bell rings for the Evening Lamp. All over Harrowgate people stop and touch their hearts. The two of you, on the back step of the Hen, don't.`,
        '@tamsin: "Look at us," she says. "Still a pair of heathens." And she bumps your shoulder with hers, once, and leaves it there.'
      ],
      end: true
    },

    /* --- Ulla --- */
    t_ulla_1: {
      loc: 'The Gutted Hen — the common room, late',
      text: [
        `Ulla has commandeered the big table by the fire and is eating a whole goose, methodically, with her hands, while Mags watches from the bar with the look of a woman watching a fire she has decided not to put out.`,
        '@ulla: "Sit. Eat. You\'re thin. Everyone in this town is thin except me and Mags. It\'s a scandal."',
        `She tears off a leg and puts it in front of you.`,
        '@ulla: "So. The Feast. I wore a dress. I beat a Corvane knight at arms. I kissed a laundress in the buttery. Her name was Bet. She had hands like a sailor." Enormous satisfaction. "Best feast I\'ve been to since they exiled me."'
      ],
      choices: [
        { t: '"Tell me about your sister."', go: 't_ulla_2' },
        { t: '"What do you make of Isolde?"', go: 't_ulla_3' },
        { t: 'Put your elbow on the table. "Arms. Loser buys the next goose."', go: 't_ulla_4' }
      ]
    },
    t_ulla_2: {
      text: [
        `Ulla stops eating. That alone tells you how much it costs.`,
        '@ulla: "Sigrun. Younger. Prettier, though you\'d not think it to look at me now. She sang. Not like your fen-girl. Really sang." She wipes her hands. "Chieftain\'s son wanted her. She said no. He didn\'t like the word." Her voice doesn\'t change at all. "I took my axe to his hall that night. Took two of my fingers to do it; he had a knife. Took his head. They exiled me instead of killing me because the chieftain was afraid of what the women would do."',
        '@ansel: "Where\'s Sigrun now?"',
        '@ulla: "Married. Four children. Sings to them." She picks the goose back up. "She writes to me once a year. The letters come eight months late. I don\'t mind. Eight months late is still a letter."'
      ],
      fx: { bond: { ulla: 2 }, set: { e5_ulla_sigrun: 1 } },
      next: 't_ulla_end'
    },
    t_ulla_3: {
      text: [
        '@ulla: "The lady?" She thinks about it while she chews, seriously. "She looks at you like a ledger she wants to balance. That\'s not nothing. In Nordvik we say a woman who counts your cattle is thinking of marrying you." She points a goose-bone at you. "But she\'s marrying the golden one. And you\'re not a cow, Dray, you\'re a stray dog. Strays don\'t get counted. They get fed by whoever\'s kind."',
        '@ulla: "I like strays. Strays know who fed them."'
      ],
      fx: { bond: { ulla: 1 } },
      next: 't_ulla_end'
    },
    t_ulla_4: {
      text: [
        `She grins like a split melon, wipes her hand on her breeches, and plants her elbow.`,
        `It takes her about four heartbeats. Your knuckles hit the table so hard the goose jumps. The common room cheers. Mags rolls her eyes and brings another goose and puts it on your tab.`,
        '@ulla: "You held on longer than the Corvane knight," Ulla says, generously. "He cried. You only made a face." She tears the new goose in half. "I like you, Dray. You lose like a man who\'s done it before and knows it doesn\'t kill you."'
      ],
      fx: { bond: { ulla: 1 }, silver: -6 },
      next: 't_ulla_end'
    },
    t_ulla_end: {
      text: [
        '@ulla: "Whatever comes," she says, when the goose is bones, "I\'m on your side of the shield wall. I decided at Saltdown. I don\'t decide things twice." She belches, enormously, and Mags throws a rag at her.'
      ],
      end: true
    },

    /* --- Delphine --- */
    t_del_1: {
      loc: 'The Gutted Hen — the top room, afternoon',
      text: [
        `She lets herself in. You don't know how. You never find out.`,
        `Delphine sits on the end of your bed in a plain brown travelling cloak that makes her look like a merchant's wife, which is presumably the point, and looks around the room: the stuck shutters, the case under the pillow, the bottle you didn't drink.`,
        '@delphine: "So this is where the dead sergeant sleeps. Under a roof with no window that opens." She smiles. "I told him, you know. About the hand. Of course I did. You knew I would."',
        '@delphine: "I came to tell you that myself. Nobody ever tells anybody anything to their face in Corvane. I thought I\'d try it once, to see how it felt."'
      ],
      choices: [
        { t: '"How does it feel?"', go: 't_del_2' },
        { t: '"What did he say?"', go: 't_del_3' },
        { t: '"Get out."', go: 't_del_4' }
      ]
    },
    t_del_2: {
      text: [
        '@delphine: "Terrible." She laughs. "Like walking into the street with no shift on. I don\'t know how you all bear it out here." She stands, and pulls the cloak round her. "He\'ll want more. He always wants more. I\'ll come and see you, and I\'ll enjoy it, and I\'ll tell him things. You can decide which things, if you\'re clever. Feed me lies, if you like. I\'ll know, and I\'ll pass them on anyway, and he\'ll know, and he\'ll enjoy that most of all."',
        '@delphine: "That\'s the best I can do for you, Sergeant. It\'s more than I\'ve done for anyone in years."'
      ],
      fx: { set: { e5_delph_deal: 1 } },
      end: true
    },
    t_del_3: {
      text: [
        '@delphine: "He said, *Oh, Konrad. You have no idea what you\'ve got.*" She looks at you levelly. "Then he wrote a letter to the Hierarch of the Lamp, in Corvane, in his own hand, which he never does. I didn\'t see what was in it. I saw who it was to."',
        `She goes to the door.`,
        '@delphine: "I didn\'t tell you that. I am a terrible spy, Ansel, and you are a terrible influence." She pauses. "Wear the glove. Always. Even in bed. Especially in bed."'
      ],
      fx: { set: { e5_delph_hierarch: 1 } },
      end: true
    },
    t_del_4: {
      text: [
        `She goes. She doesn't argue. At the door she stops.`,
        '@delphine: "For what it\'s worth," she says, "that was mine. Not his. The night. I\'m keeping it." And she\'s gone, and the room smells of roses for a day and a half.'
      ],
      end: true
    },

    /* --- Brannagh --- */
    t_bran_1: {
      loc: 'The Lanternhold steps — the Evening Lamp',
      text: [
        `She's on the Lanternhold steps at the Evening Lamp, in her plate, watching the poor come up for bread. When she sees you she doesn't move away. That's new.`,
        { if: "f.e5_brannagh_spar==='won'", t: `The mark on her throat has faded to yellow. She still hasn't covered it.` },
        { if: "f.e5_brannagh_spar==='lost'", t: '@brannagh: "Your ribs," she says. "Better?" It\'s the first time she\'s asked after anything of yours.' },
        { if: "f.e5_ledger_to==='brannagh'", t: '@brannagh: "I asked her," she says, before you can speak. "The Abbess. I put your book in front of her and asked her to her face." Her jaw works. "She wept. She held my hands. She said the Marshal\'s men had been forging her mark for a year and she had been too ashamed to tell anyone. She said she would pray for me for bringing it to her." A long pause. "She was very convincing. She is always very convincing."' },
        { if: "f.e5_ledger_to!=='brannagh' && f.e5_bran_robe", t: '@brannagh: "I asked her about the robes," she says, before you can speak. "She said they were stolen from the laundry. Sister Hawise says no robes were reported missing. Sister Hawise has never lied in her life. She isn\'t clever enough." A long pause. "I am going to stop thinking about this now."' }
      ],
      choices: [
        { t: '"Same time tonight? The yard?"', go: 't_bran_2' },
        { t: '"You don\'t believe her."', go: 't_bran_3' },
        { t: '"What do you pray for, Lampwarden? When you use the cord."', go: 't_bran_4' }
      ]
    },
    t_bran_2: {
      text: [
        '@brannagh: "No." Immediately. Then, after a moment, more quietly: "Not because I\'d lose."',
        `She looks at you, and then away, at the poor on the steps, very deliberately.`,
        '@brannagh: "Because I\'d *want* to, Dray. That\'s the trouble. I sat up the whole night after, with the cord, and it didn\'t help at all." She says it the way a soldier reports a casualty. "Go away now. Please."'
      ],
      fx: { bond: { brannagh: 2 }, set: { e5_bran_want: 1 } },
      end: true
    },
    t_bran_3: {
      text: [
        '@brannagh: "I believe in the Lamp," she says. "I believe in the Saints. I believe every soul goes up into the light." Each sentence is placed down like a stone on a wall. "I believe the Abbess has fed this town\'s poor for thirty years."',
        `She looks up at the blue tower.`,
        '@brannagh: "I don\'t know what I believe about the crypt. She has never once let me go down there. I have never once asked." A breath. "Tomorrow I am going to ask."'
      ],
      fx: { bond: { brannagh: 1 }, set: { e5_bran_crypt: 1 } },
      end: true
    },
    t_bran_4: {
      text: [
        `She is quiet for so long you think she won't answer.`,
        '@brannagh: "To be emptied," she says at last. "Of wanting. To be a clean blade. Nothing in me but the light." She turns her burned throat to the last of the sun. "My oracle says the Saints are hungry. She says it in her sleep, in a voice that isn\'t hers. I tell myself that\'s a blasphemy the Choir-sickness puts in her mouth."',
        '@brannagh: "And then I pray to be emptied, and I think of the white ward, and all those clean, emptied people sitting in rows." She closes her eyes. "Leave me be, Dray. You make me think. I didn\'t come here to think."'
      ],
      fx: { bond: { brannagh: 1 } },
      end: true
    }
  },
  side: [
    { id: 'e5_c_robe', kind: 'contract', title: 'The Twelfth Robe', desc: 'Mags will pay 20 silver to find the last of the robed men before the Marshal\'s people burn down a loft on the Tanners\' Bottom to get him.', level: 6, start: 'c_robe_1' },
    { id: 'e5_c_dig', kind: 'contract', title: 'Diggers on the Downs', desc: 'A widow on the Rope Walk offers 15 silver for her son, gone grave-robbing on the downs for a Corvane collector.', level: 6, start: 'c_dig_1' },
    { id: 'e5_c_gideon', kind: 'contract', title: 'A Gentleman\'s Rematch', desc: 'Ser Gideon Vail asks the honour of a second bout. Dawn, the tilt-yard. No crowd. No prince.', level: 6, start: 'c_gid_1', if: 'f.e5_melee' },
    { id: 'e5_t_isolde', kind: 'talk', who: 'isolde', title: 'A letter, sealed with plain wax', start: 't_iso_1' },
    { id: 'e5_t_tamsin', kind: 'talk', who: 'tamsin', title: 'Snakes in the mud', start: 't_tam5_1', if: "inParty('tamsin')" },
    { id: 'e5_t_ulla', kind: 'talk', who: 'ulla', title: 'A whole goose', start: 't_ulla_1', if: "inParty('ulla')" },
    { id: 'e5_t_delphine', kind: 'talk', who: 'delphine', title: 'A visitor in a brown cloak', start: 't_del_1', if: 'f.e5_delphine' },
    { id: 'e5_t_brannagh', kind: 'talk', who: 'brannagh', title: 'The Lanternhold steps', start: 't_bran_1', if: 'f.e5_brannagh_spar' }
  ]
});
