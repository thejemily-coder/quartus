/* S2 · E6 · WHAT IF IT WAS, part 2 of 4: Act Two ("Debts"). */
EH.scenes('s02e06', {

  /* ================= ACT TWO: DEBTS ================= */
  a2_bruno: {
    card: { kind: 'act', label: 'Act Two', title: 'Debts' },
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    clock: { day: 'Wed', date: 'Feb 10', time: '4:30 PM' },
    text: g => `Wednesday, after Psych, the black Escalade is waiting at the curb on Broad Street outside Anderson Hall. Engine running. Back window down an inch.

Vinnie\'s driving. He doesn\'t look at you in the mirror. Dante is in the back, in a gray suit, scrolling on his phone.

DANTE: Sam. Get in. Grandpa wants to say thank you.

The Circolo smells like espresso and Sambuca and old men. The card games stop when you come in. They start again when Bruno lifts one finger.

He\'s in the back room at the little table with the oilcloth, with a plate of pizzelles and a small cup of espresso, and in front of him, spread out flat, held down at the corners by an ashtray, a sugar bowl, and two saucers, a map.

The Philadelphia Navy Yard. A real one, from the city, with the buildings numbered. Somebody has circled Building 7 in red grease pencil.

BRUNO: Sam. Sit. Have a pizzelle.

You sit.

BRUNO: You were in that building. You and Teodoro and the big one and the girl with the voice. You went in the front, so to speak, and you came out the back, and one of you didn\'t come out at all.

He taps the red circle.

BRUNO: How many floors.

sam: Mr. Iannucci—

BRUNO: How many floors, how many stairs, how many doors. Where they keep the beds. Who sits up there at night. You were *in* there, Sam. I\'ve had men watching that building for a week, and all they can tell me is the lights go on at night.

He takes a pizzelle and breaks it carefully in half.

BRUNO: This is a job. I want to be clear. It counts. It\'s worth more than an envelope or a fish man on Washington Avenue. ${g.f('bruno_jobs_total') ? 'You\'re at ' + (g.f('bruno_jobs_done') || 0) + ' of ' + g.f('bruno_jobs_total') + '. This makes it ' + ((g.f('bruno_jobs_done') || 0) + 1) + '.' : ''}

You think about twenty-one people in beds on a floor that isn\'t on the drawings. The girl with the rabbit. The old woman, ES-03, who held your hand. *Not tonight, sweetheart.*

You think about what Bruno\'s men do when they go into a building.

Dante is leaning in the doorway, watching you, smiling a little.`,
    choices: [
      { text: 'Tell him. All of it. Eight floors, two stairs, the glass room, the beds. Halcyon killed Teddy. Let Bruno do what Bruno does.', tag: 'Tell him',
        fx: g => { g.flag('building6', 'true'); g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); g.bond('vinnie', { tension: 1 }); g.hidden('revenant_drift', 1); g.hidden('halcyon_heat', 1); g.know('bruno_b7', ['sam', 'bruno', 'dante'], 'You gave Bruno Iannucci the layout of Building 7: the eighth floor, both stairs, the glass room, the ward.'); }, go: 'a2_true' },
      { text: 'Refuse. "There are twenty-one people asleep on that floor. I\'m not drawing you a map to them."', tag: 'Refuse',
        fx: g => { g.flag('building6', 'refuse'); g.hidden('revenant_drift', -1); }, go: 'a2_refuse' },
      { text: 'Give him a building. Not that one. Seven floors, one stair, no glass room, no beds. Lie to Bruno Iannucci\'s face.', tag: 'A false map',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to Bruno', on: { strong: 'a2_false', weak: 'a2_false_weak', miss: 'a2_false_weak' } },
        fx: g => { g.flag('building6', 'false'); } }
    ]
  },

  a2_true: {
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    text: g => `You tell him.

Stair B on the east side, the fire door propped with cardboard. Seven floors on the drawings and eight in the building. The door with no number. The glass room at the end of the seventh-floor hall, the visitor badge, the cold Earl Grey. The ward, dim blue, twenty-three beds. The elevator that stands open.

Bruno listens to all of it without writing anything down. When you\'re done, he nods.

BRUNO: Good. That\'s good. You have a good memory. You get that from your Nonna.

He pushes the plate of pizzelles toward you.

BRUNO: Eat.

You don\'t eat.

Dante, in the doorway, takes out his phone and types something with his thumbs. Fast. Then he puts the phone away and smiles at you again.

BRUNO: The people in the beds. I know what you\'re thinking. I\'m not an animal, Sam. Whoever is asleep in that building, they\'re somebody\'s children. Nobody touches the beds.

He says it like he means it. Maybe he does.

BRUNO: Thank you. ${g.f('bruno_jobs_done') || 0} of ${g.f('bruno_jobs_total') || 8}. Look at you.`,
    next: 'a2_car'
  },

  a2_refuse: {
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    enter: g => { g.know('assunta_bruno', ['sam'], 'In January 1964, Assunta DiNardo pulled six-year-old Bruno Iannucci out of the Schuylkill ice. He told you at the Circolo.'); },
    text: `sam: There are twenty-one people asleep on that floor. Old people. A kid younger than my sister, with a stuffed rabbit. I\'m not drawing you a map to them.

The back room goes very quiet. In the front room, somebody lays down a card and doesn\'t say anything about it.

Bruno looks at you over his espresso. He takes his time.

BRUNO: You think I would hurt a child.

sam: I think you\'d send men into a building, Mr. Iannucci, and I think men in a building at night don\'t check the beds.

Dante stops smiling.

Bruno finishes his espresso. He sets the cup down in its saucer so softly it doesn\'t make a sound.

BRUNO: Your great-grandmother pulled me out of the Schuylkill in January 1964. Did your Nonna tell you that? Her hands were bleeding from the ice. I was six years old. That is why your father still has his kneecaps, Sam. That is the only reason.

BRUNO: I respect that you said no to me. Not many people do. Teodoro never did.

He folds the map. Corner to corner. Very neat.

BRUNO: So now I find out myself. It takes longer. It costs more. And somebody pays for the time. That\'s how it works.

BRUNO: Go home. Study. You look tired.`,
    next: 'a2_car'
  },

  a2_false: {
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    enter: g => { g.flag('false6', 'clean'); g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); },
    text: g => `You give him a building.

Seven floors. One stair, the east one. Offices on two through six, a lab on seven with locked doors and a turkey dinner in a room that hasn\'t been cleaned since November. No eighth floor. No beds. The glass room becomes a supply closet. The twenty-one people asleep on the floor that isn\'t on the drawings become nothing at all.

You say it the way you say *I fell asleep in the lounge* to your mother. You keep your hands flat on the oilcloth, where you can see them.

Bruno listens. He nods.

BRUNO: A turkey. Since November.

sam: Thanksgiving. Under a silver dome.

BRUNO: Mm. These people. They have no respect for food.

He believes you. You think he believes you. He pushes the pizzelles toward you, and this time you eat one, because a man who\'s lying doesn\'t eat.

BRUNO: Good boy. ${g.f('bruno_jobs_done') || 0} of ${g.f('bruno_jobs_total') || 8}.`,
    next: 'a2_car'
  },

  a2_false_weak: {
    loc: 'CIRCOLO SANT\'AGATA · EAST PASSYUNK',
    enter: g => { g.flag('false6', 'doubted'); g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); g.bond('vinnie', { tension: 1 }); },
    text: g => `You give him a building.

Seven floors. One stair. Offices. A lab on seven. A turkey. No eighth floor. No beds.

You\'re good at it. You\'ve been lying to your mother since August. But halfway through, you hear yourself say *one stair*, and you remember that he said it himself, a minute ago, and you let it stand: *you came out the back*.

Bruno heard it too. You see him hear it. He doesn\'t say anything.

BRUNO: One stair.

sam: One stair.

BRUNO: And you came out the back.

sam: The back of the floor. It\'s a long hallway.

Bruno smiles.

BRUNO: Mm. Long hallways. I know about long hallways.

He folds the map, corner to corner.

BRUNO: Good boy. ${g.f('bruno_jobs_done') || 0} of ${g.f('bruno_jobs_total') || 8}. We\'ll see.

In the doorway, Dante is looking at you like a man looking at a horse he\'s thinking about buying.`,
    next: 'a2_car'
  },

  a2_car: {
    loc: 'THE ESCALADE · BROAD STREET',
    clock: { time: '5:40 PM' },
    text: g => `They drive you back up Broad. Dante in the back with you. Vinnie at the wheel, both hands on it, ten and two, like a kid on his driving test.

Dante scrolls his phone for twenty blocks. At City Hall, without looking up:

DANTE: The blonde.

sam: What?

${g.f('jules_blames5') ? 'DANTE: At the funeral. Across the street. Allegheny Avenue. Long coat, no hat, stood there the whole mass like a statue. Never came in. Never came closer. Grandpa noticed her. Grandpa notices everything.' : 'DANTE: At the funeral. Back pew, next to you. Long coat. Holding your hand under the hymnal like nobody could see. Grandpa could see. Grandpa sees everything.'}

He looks up from his phone.

DANTE: She was looking at you, Sam. The whole time. Not the church. You.

In the mirror, Vinnie\'s eyes come up, fast, and then go back to the road.

DANTE: Who is she?`,
    choices: [
      { text: '"My girlfriend." It\'s true. Say it like it\'s nothing.', tag: 'My girlfriend',
        fx: g => { g.flag('jules6', 'girlfriend'); g.know('dante_jules', ['sam', 'dante', 'vinnie'], 'You told Dante Iannucci the blonde across the street at Teddy\'s funeral was your girlfriend. He said: "Bring her to Sunday dinner at Grandpa\'s. In March."'); }, go: 'a2_car_gf' },
      { text: '"No idea. I didn\'t see anybody." Let Vinnie back you up.', tag: 'Nobody', if: g => g.f('jules_blames5'),
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to Dante', on: { strong: 'a2_car_nobody', weak: 'a2_car_nobody', miss: 'a2_car_nobody_bad' } },
        fx: g => { g.flag('jules6', 'nobody'); } },
      { text: '"A reporter. From the Inquirer. She\'s been following me around." Give him somebody he already hates.', tag: 'A reporter',
        fx: g => { g.flag('jules6', 'reporter'); g.hidden('revenant_drift', 1); g.know('dante_dana', ['sam', 'dante', 'vinnie'], 'You told Dante Iannucci the woman across the street at Teddy\'s funeral was a reporter from the Inquirer. He said: "Fiorillo."'); }, go: 'a2_car_reporter' }
    ]
  },

  a2_car_gf: {
    loc: 'THE ESCALADE · BROAD STREET',
    text: g => `sam: My girlfriend.

DANTE: Yeah?

He looks genuinely pleased. That\'s the worst part.

DANTE: Good for you. Main Line, right? You can tell. The coat. You can always tell by the coat.

sam: She goes to Temple.

DANTE: Sure she does.

He goes back to his phone.

DANTE: Bring her to Sunday dinner. At Grandpa\'s. Not this month, he\'s busy this month. March. He likes to meet the girls. He met my girlfriend before I did, practically.

The Escalade stops at Broad and Cecil B. Moore, in front of the Wawa.

DANTE: March, Sam. Don\'t forget.

You get out. You stand on the sidewalk in front of the Wawa where you got famous, and you think: *In March.*

${g.knows('revenant_push') ? 'You know exactly where you heard that. On the lip of the dry dock, from your own mouth, worn down to the wire. *In March.*' : 'It shouldn\'t mean anything. It\'s a month. It makes the back of your neck go cold anyway.'}`,
    next: 'a2_vinnie'
  },

  a2_car_nobody: {
    loc: 'THE ESCALADE · BROAD STREET',
    text: `sam: No idea. I didn\'t see anybody. I was kind of busy watching them bury my friend.

DANTE: Huh. Vin?

vinnie: Some lady from the parish, D. They had like nine old ladies standing around outside. She was the only one under seventy, that\'s all.

He says it without turning around. Easy. Bored. A man who has never told anybody anything in his life.

Dante looks at the back of Vinnie\'s head for a moment. Then he shrugs and goes back to his phone.

DANTE: Grandpa\'ll want to know. Grandpa always wants to know.

He types something.

The Escalade stops at Broad and Cecil B. Moore, in front of the Wawa. You get out.`,
    next: 'a2_vinnie'
  },

  a2_car_nobody_bad: {
    loc: 'THE ESCALADE · BROAD STREET',
    enter: g => { g.flag('dante_suspects6'); },
    text: `sam: No idea. I didn\'t see anybody.

You touch your ear. You feel yourself do it. Too late.

DANTE: Huh.

vinnie: Some lady from the parish, D. They had like nine old ladies—

DANTE: She wasn\'t from the parish, Vin. She was wearing a coat that cost more than the parish.

Dante looks at you for a long moment, smiling his small smile.

DANTE: That\'s okay, Sam. Everybody\'s got somebody they don\'t want Grandpa to meet. I get it. I really do.

He goes back to his phone and types something, slowly, with one thumb.

DANTE: Grandpa\'ll find her anyway. He found you.

The Escalade stops at Broad and Cecil B. Moore. You get out.`,
    next: 'a2_vinnie'
  },

  a2_car_reporter: {
    loc: 'THE ESCALADE · BROAD STREET',
    text: `sam: A reporter. From the Inquirer. She\'s been following me around since the fall. She thinks I\'m the Blur, or something. She\'s nuts.

Dante\'s face goes very still.

DANTE: Fiorillo.

sam: I don\'t know her name.

DANTE: Dana Fiorillo. Metro desk. She called Grandpa\'s lawyer in December asking about a doorbell camera on Girard Avenue.

He puts his phone away. He doesn\'t take it out again the whole rest of the ride.

DANTE: Huh. I thought she was a brunette.

sam: Maybe she dyed it.

DANTE: Maybe.

In the mirror, Vinnie\'s eyes come up and stay up.

The Escalade stops at Broad and Cecil B. Moore. You get out. You stand on the sidewalk in front of the Wawa and think about what you just did.

You just gave the Iannucci family a woman\'s name.`,
    next: 'a2_vinnie'
  },

  a2_vinnie: {
    loc: 'BROAD & CECIL B. MOORE',
    clock: { time: '5:52 PM' },
    text: g => `The Escalade pulls away. Then it stops, twenty yards up, at the light. The driver\'s door opens. Vinnie gets out and walks back to you, fast, with his hands in the pockets of Dante\'s black cashmere coat, while Dante stays in the back on his phone.

vinnie: Two seconds. I said I needed smokes.

He doesn\'t smoke. He\'s never smoked. He stands in front of you with his back to the Escalade.

vinnie: Yo. Sally. Listen to me. ${g.f('jules6') === 'reporter' ? 'That was the dumbest shit I ever heard you say, and I was there for eighth grade. You just put a lady on Dante\'s phone. You know what Dante\'s phone is? It\'s a list.' : g.f('jules6') === 'girlfriend' ? 'Don\'t bring her. In March. Don\'t bring her anywhere near Passyunk. You hear me?' : 'I covered for you. I\'ll always cover for you. But you gotta stop giving him reasons to look.'}

vinnie: I seen how Grandpa looks at things he wants, college. He looked at Teddy like that. At Thanksgiving, he came out of your house and got in the car and said *that boy*, like that. And at the funeral, I watched him look at that girl like that, for a whole mass.

He glances back at the Escalade. The light is green. Dante leans on the horn, once.

vinnie: He collects. That\'s all he does. That\'s all he ever did. Fifty years. He collects people who can do things.

vinnie: I gotta go.

sam: Vin.

He stops.

sam: Thanks.

vinnie: Yeah, yeah. You owe me a cheesesteak. Not Pat\'s. Not Geno\'s. *Real* one.

He jogs back to the Escalade. It goes. You stand on the corner and watch it go up Broad. Then you turn around and walk the half block to Cardone Hall, where a girl in a camel coat has spent all week with no luck, losing on purpose.`,
    next: 'a3_quiz'
  }
});
