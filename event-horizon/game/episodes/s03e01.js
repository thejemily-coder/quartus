/* S3 · E1 · ONE YEAR (season premiere), part 1 of 4: meta, cold open, Act One ("Sophomore"). */
EH.episode({
  id: 's03e01', season: 3, number: 1, title: 'One Year', look: 's3', runtime: 'premiere',
  cast: ['sam', 'jules', 'nik', 'simone', 'rosa', 'frank', 'gigi', 'nonna', 'mikey', 'jayden', 'carmen', 'catherine', 'hugh', 'constance'],
  start: 'cold_open',
  xp: 6,
  previously: g => [
    g.f('plan10') === 'deal' ? 'You took Achterberg\'s deal. Eleven people walked out. You walked in. She kept her word.' : 'On 9th Street, in front of the whole neighborhood and Saint Anthony, Bruno\'s people came home.',
    g.f('saw_revenant10') ? 'In the Slip, the old man with your face lowered his hand and walked away.' : 'The old man with your face was in the crowd.',
    g.f('hero_name') === 'secondhand' ? 'The Inquirer, A1: SECOND HAND.' : g.f('hero_name') === 'wawa' ? 'The Inquirer, A1: WAWA.' : g.f('hero_name') === 'blur' ? 'The Inquirer, A1: THE BLUR.' : 'The city still doesn\'t know what to call you.',
    'Bruno Iannucci: "Now it\'s a war. Mine."',
    g.f('roof10') === 'love' ? 'On the roof on Mifflin Street, you told Jules you love her. She said it back.' : 'On the roof on Mifflin Street, at 11:51, nothing happened.',
    'Hugh Pemberton took a Halcyon badge. "Let\'s talk about your sister."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: 'CITY HALL · THE MAYOR\'S RECEPTION ROOM',
      clock: { day: 'Sun', date: 'Aug 22', time: '9:40 AM' },
      text: `> THE CAMERA.

The Mayor\'s Reception Room at City Hall, on a Sunday morning, with the chandeliers on and nobody in it but a makeup artist, a woman in a gray cardigan, and the Chief of Surgery at the Hospital of the University of Pennsylvania.

Dr. Catherine Pemberton sits very straight in a folding chair while a girl with a brush does something to her cheekbones that she clearly considers unnecessary. She is reading a single typed page. She has read it four times. She is marking it with a fountain pen.

ACHTERBERG: You don\'t have to say all of it. Just the part about care.

catherine: I\'m correcting your Latin.

ACHTERBERG: It isn\'t my Latin. It\'s the Health Department\'s.

catherine: Then I\'m correcting the Health Department.

She caps the pen.

catherine: Sixty-one patients.

ACHTERBERG: Sixty-one confirmed. There may be more. That\'s rather the point of a registry.

catherine: Symptoms. Cold extremities. Episodes of lost time. Perceptual anomalies. *(she looks up)* That\'s a very wide net, Miriam.

ACHTERBERG: It was a very strange night.

A door opens at the far end of the room. A young man in a navy polo shirt with a lanyard around his neck, carrying a cardboard tray of coffees, golden, perfectly at ease.

The polo shirt says *BROAD STREET REGISTRY · OUTREACH* over the heart.

hugh: Mother. You take it black. I remembered.

Catherine looks at him for a long moment.

catherine: Hugh. You\'re in Boston.

hugh: I was never in Boston.

catherine: *(to Achterberg)* You hired my son.

ACHTERBERG: He applied. He has a gift for outreach. People trust a Pemberton.

Catherine takes the coffee. She doesn\'t drink it.

catherine: One question, and then I\'ll go out there and say your sentences with the Latin fixed. Is there anyone on this list I know?

Achterberg smiles. Small, kind.

ACHTERBERG: Catherine. I would never discuss a patient with you. You of all people. Privacy is the whole foundation of trust.

Catherine holds her gaze.

catherine: That isn\'t an answer.

ACHTERBERG: No. It isn\'t.

Somewhere above them, the bell in the City Hall tower starts to ring ten.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_mirror' },

    /* ================= ACT ONE: SOPHOMORE ================= */
    a1_mirror: {
      card: { kind: 'act', label: 'Act One', title: 'Sophomore' },
      loc: '1300 RESIDENCE HALL · 7-07',
      clock: { day: 'Sun', date: 'Aug 22', time: '8:00 AM' },
      enter: g => { g.sleep(8); },
      text: g => `One year.

A year ago tonight, at 11:51 and four seconds, every clock in North Philadelphia stopped, and you didn\'t.

You\'re in the bathroom of a sophomore apartment in 1300, the tall one on Broad, seventh floor, a two-bedroom with a kitchenette that smells like the last tenants\' curry and a window that looks straight down Broad Street, all the way south to City Hall. You and Nik moved in on Friday. He has already put a sticker on the microwave that says *THIS MICROWAVE IS NOT A PORTAL.* You didn\'t ask.

You look in the mirror over the sink.

${g.f('count10') ? 'The white at your temple is still there, the streak from the winter. It hasn\'t spread since the spring. Grace measured it in May and said *same* and looked almost disappointed.' : 'The white at your temple is still there. It hasn\'t spread since the spring.'}

The rest of you has changed. It took the summer to notice. You\'re a year older, and you look it, and somewhere in there you look like someone who has decided some things.

What did the year make you?`,
      choices: [
        { text: 'Stronger. You carried eleven people\'s worth of guns across 9th Street in two armloads. Your back remembers. (Body +1)', tag: 'Body',
          fx: g => { g.attr('body', 1); g.flag('s3_attr', 'body'); }, go: 'a1_nik' },
        { text: 'Faster. Not the Slip. You. Every delivery all summer, Ciro\'s e-bike, Passyunk to Fishtown, beating the app\'s times. (Reflex +1)', tag: 'Reflex',
          fx: g => { g.attr('reflex', 1); g.flag('s3_attr', 'reflex'); }, go: 'a1_nik' },
        { text: 'Sharper. Femi\'s notebook, read cover to cover over the summer. *Outside first.* You notice the shape of things now. (Wits +1)', tag: 'Wits',
          fx: g => { g.attr('wits', 1); g.flag('s3_attr', 'wits'); }, go: 'a1_nik' },
        { text: 'Easier with people. A summer of Sunday gravy with Jules at the table, Ma and Nonna and a Pemberton. You learned to talk to anybody. (Charm +1)', tag: 'Charm',
          fx: g => { g.attr('charm', 1); g.flag('s3_attr', 'charm'); }, go: 'a1_nik' },
        { text: 'Softer. Ma counting. Vinnie\'s *save this number*. You let more in than you used to. (Heart +1)', tag: 'Heart',
          fx: g => { g.attr('heart', 1); g.flag('s3_attr', 'heart'); }, go: 'a1_nik' },
        { text: 'Steadier. You walked into a truck that was going to Delaware and didn\'t shake. (Nerve +1)', tag: 'Nerve',
          fx: g => { g.attr('nerve', 1); g.flag('s3_attr', 'nerve'); }, go: 'a1_nik' }
      ]
    },

    a1_nik: {
      loc: '1300 RESIDENCE HALL · 7-07',
      clock: { time: '8:30 AM' },
      enter: g => { g.know('registry_advisory', ['sam', 'nik'], 'A city press advisory for Sunday, August 22, noon, City Hall: "Broad Street Anniversary Announcement. City of Philadelphia, Department of Public Health, and Halcyon Dynamics."'); },
      text: g => `Nik is in the living room in a bathrobe with his four monitors set up on a card table, because the desk in his room is "load-bearing for snacks."

nik: Bro. Good morning. Happy anniversary. I didn\'t get you anything. That\'s a lie, I got you a cake, it\'s in the fridge, it says *HAPPY HITCH DAY* and the lady at the ShopRite asked me what a hitch was and I panicked and said it was a wedding.

sam: Thank you, Nik.

nik: It\'s a wedding cake now, technically. Spiritually.

He spins his chair.

nik: Okay. Summer patch notes. Real quick. You missed some of it because you were busy being in love on a roof.

He pulls up a folder.

nik: One. ${g.f('hero_name') === 'secondhand' ? 'Second Hand. *Second Hand*, bro. It stuck. It\'s on T-shirts. There\'s a guy at the Italian Market selling them next to the cannoli, a clock with no numbers, just the second hand, red. Your sister owns three. There\'s a mural. On the side of a pizza place on Passyunk. Not Ciro\'s. A *rival* pizza place. Ciro is beside himself.' : g.f('hero_name') === 'wawa' ? 'Wawa. *Wawa*, bro. It stuck. Wawa\'s lawyers sent the Inquirer a letter. The Inquirer printed the letter. It made it worse. There are shirts. Your sister owns three.' : g.f('hero_name') === 'blur' ? 'The Blur. Still the Blur. There are shirts now. Your sister owns three.' : 'Saint Sonic. Dana did it. She said she was joking. She wasn\'t joking. There are shirts. Your sister owns three, and she\'s furious about the name.'}

nik: Two. The map was quiet all summer. Like, *quiet* quiet. No dots going dark. Nobody taken. Halcyon didn\'t touch anybody for three months. Which, as a gamer, I want to say: that is not a peace. That is a *loading screen*.

He clicks again. A PDF on letterhead. The city seal. The Department of Public Health. And a logo you know: a small blue kingfisher.

nik: Three. This came out Friday night at 11 p.m., which is when you put out something you don\'t want anybody to read. Press advisory. Today. Noon. City Hall. *Broad Street Anniversary Announcement.* The City of Philadelphia, the Department of Public Health, and, quote, *Halcyon Dynamics*.

You read it twice.

nik: They\'re going *public*, bro. On the anniversary. At noon. With the *city*.

Your phone buzzes.

TXT jules: are you seeing this
TXT jules: my mother is listed as a speaker
TXT jules: my MOTHER
${g.f('terms8') === 'count' ? '\nTXT rosa: happy anniversary. count?\nTXT sam: zero\nTXT rosa: good. gravy at 2. bring her.' : ''}`,
      choices: [
        { text: 'Go. City Hall, in person, with Jules. If her mother is going to stand at a podium, Jules should get to look her in the eye.', tag: 'City Hall',
          fx: g => { g.flag('watch1', 'hall'); g.bond('jules', { trust: 1 }); g.hidden('halcyon_heat', 1); }, go: 'a2_hall' },
        { text: 'Mifflin Street. Watch it on Pop\'s TV with the whole family and a plate of gravy. Whatever this is, you want your people around you for it.', tag: 'Mifflin Street',
          fx: g => { g.flag('watch1', 'home'); g.bond('rosa', { affection: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_home' },
        { text: 'Here. The 1300 lounge, with Nik\'s four monitors and Simone, who has opinions. Close enough to Broad Street to get anywhere fast.', tag: 'The lounge',
          fx: g => { g.flag('watch1', 'lounge'); g.bond('nik', { affection: 1 }); g.bond('simone', { affection: 1 }); }, go: 'a2_lounge' }
      ]
    }
  }
});
