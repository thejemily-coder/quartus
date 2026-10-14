/* S2 · E4 · MADE MEN, part 2 of 3: Act Two ("The Recruiter"), Act Three ("Dana"). */
EH.scenes('s02e04', {

  /* ================= ACT TWO: THE RECRUITER ================= */
  a2_dante: {
    card: { kind: 'act', label: 'Act Two', title: 'The Recruiter' },
    night: true,
    loc: 'WASHINGTON AVENUE',
    clock: { day: 'Wed', date: 'Jan 20', time: '9:30 PM' },
    enter: g => { g.sleep(6); },
    text: g => `The Escalade picks you up on Broad at nine. Vinnie is driving. Dante is in the back with his phone.

Vinnie is wearing a camel coat. Not a peacoat, not a Carhartt. A camel coat, the long kind, with a scarf, and his hair is cut short on the sides like Dante\'s. He looks like somebody dressed him. He looks good. He looks like somebody else.

vinnie: Sally.

sam: Vin.

He doesn\'t look at you in the mirror. He pulls out into Broad.

DANTE: Vincenzo got a promotion. Tell him, Vin.

vinnie: I\'m Dante\'s guy now. Number two.

DANTE: He\'s modest. He\'s my *right hand*. Grandpa\'s idea. Vincenzo never talks, and he never forgets, and he knows every street in South Philly. That\'s rare. That\'s worth something.

He puts his phone away.

DANTE: Tonight\'s simple. There\'s a man on Washington Avenue. Thomas Nguyen. Fifty-two. He owns a pho place by Seventh Street. Since August, he can hear through walls. Every wall in the block. Every word.

DANTE: Grandpa offered him a job in October. Very generous. He said no. He said it politely, which Grandpa appreciated.

DANTE: But since Christmas, his name is on a list in a building at the Navy Yard. Grandpa knows this because Grandpa put it there.

He says it without any expression at all.

DANTE: Grandpa\'s very sorry about that. So now he\'s offering again. Work for us, and the Navy Yard leaves you alone. Don\'t, and you\'re on the list. Tonight, Mr. Nguyen gets one more chance to be our friend.

DANTE: You\'re going to help him see it.

The Escalade pulls up on Washington Avenue in front of a narrow storefront with a hand-painted sign. *PHỞ THANH · SINCE 1994.* The lights are on inside. An old man is mopping. A girl about your age is wiping down tables, with earbuds in.

${g.f('manila') === 'sealed' ? 'You carried that list. On Christmas Eve. In a manila envelope, through the snow, to a gray sedan at the Navy Yard gate. *Do not open.* You didn\'t open it.' : 'You know about the list. You know exactly whose names are on it.'}

Dante gets out. Vinnie gets out. You get out.

Inside, the old man stops mopping. He looks at Dante. Then at you. Then at the wall, as if he can hear something through it.

MR. NGUYEN: I heard you coming from the corner. All three. I heard you talking about me.

He leans the mop against a table.

MR. NGUYEN: Mai. Go in the back.

The girl takes out her earbuds. She doesn\'t go in the back.`,
    choices: [
      { text: 'Talk to him. Tell him the truth: the Navy Yard is worse. Much worse. You know a kid who died there.', tag: 'Talk him in',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Make Mr. Nguyen see it', on: { strong: 'a2_nguyen_strong', weak: 'a2_nguyen_weak', miss: 'a2_nguyen_miss' } } },
      { text: 'Get him alone. In the back, by the stockpots. Tell him to take Mai and leave the city tonight. Tonight.', tag: 'Warn him',
        fx: g => { g.flag('job4', 'warned'); g.hidden('revenant_drift', 0.5); }, go: 'a2_nguyen_warn' },
      { text: 'Stand by the door. Let Dante handle it. This is the job.', tag: 'Let Dante',
        fx: g => { g.flag('job4', 'dante'); g.hidden('revenant_drift', 1); }, go: 'a2_nguyen_dante' }
    ]
  },
  a2_nguyen_strong: {
    enter: g => { g.flag('job4', 'talked'); g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); g.know('nguyen', ['sam'], 'Thomas Nguyen, 52, Phở Thanh on Washington Ave. Hears through walls. He joined Bruno after you told him what happened to Femi. On one condition: his daughter Mai stays out.'); },
    text: `You step past Dante before he can say anything.

sam: Mr. Nguyen. My name\'s Sam. I go to Temple. In October, a kid on my floor named Femi was in a study at the Navy Yard. Paid study. Good money. He couldn\'t be seen. That was his thing. Nobody could see him.

sam: They put needles in his hip. Three. No anesthetic. He walked six miles to tell me something, and he died at my door.

The old man is very still. Behind him, Mai has her hand over her mouth.

sam: I don\'t like these guys either. I\'m not gonna stand here and tell you Bruno Iannucci is a nice man. But he puts people on payroll. The Navy Yard puts them in beds. Your name\'s on their list now. I\'m sorry. I didn\'t put it there.

Mr. Nguyen looks at you. Then at the wall. Listening, maybe, to something none of you can hear.

MR. NGUYEN: You\'re telling the truth.

sam: Yeah.

MR. NGUYEN: I can hear it. Liars\' hearts go fast. Yours is slow. Very slow. Too slow. Like an old man\'s.

He looks at Dante.

MR. NGUYEN: I\'ll work for your grandfather. One condition. My daughter stays out. She never comes to your club. She never carries your envelopes. You never say her name.

Dante smiles. He holds out his hand.

DANTE: Done. You see, Mr. Nguyen? We\'re friends.

Mr. Nguyen doesn\'t take Dante\'s hand. He looks at you while Dante holds it out, waiting, until Dante puts it back in his pocket.`,
    next: 'a2_car'
  },
  a2_nguyen_weak: {
    enter: g => { g.flag('job4', 'talked'); g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); },
    text: `You tell him about Femi. About the Navy Yard. About the list.

He listens. He believes you. You can see that he believes you. But it isn\'t enough, and Dante can see it isn\'t enough, and Dante steps forward and puts one hand, gently, on the counter by the register, next to a photo of Mai at her high school graduation.

DANTE: Pretty girl. Penn State?

MR. NGUYEN: Temple.

DANTE: Temple. Same as Sam. Isn\'t that nice.

That\'s all he says. That\'s all he has to say.

Mr. Nguyen looks at the photo. He looks at his daughter, standing by the tables with her earbuds in her hand.

MR. NGUYEN: Fine. Fine. Whatever your grandfather wants.

Dante smiles and takes his hand off the counter. You stand there with the truth still in your mouth, and it didn\'t do anything. The photo did.`,
    next: 'a2_car'
  },
  a2_nguyen_miss: {
    enter: g => { g.flag('job4', 'smashed'); g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); g.hidden('revenant_drift', 0.5); },
    text: `You start to tell him about Femi, and it comes out wrong, too fast, too much, *needles* and *hip* and *they\'re watching you*, and you can see him decide you\'re a kid who\'s been told to scare him.

MR. NGUYEN: Get out of my restaurant.

Dante sighs.

DANTE: Vin.

Vinnie walks over to the fish tank by the door. It\'s a big one, two hundred gallons, with koi in it, orange and white, the kind of tank that\'s been in a restaurant for thirty years. He puts both hands on the top of it, and he looks at you, for one second, and then he pulls.

It comes down. Two hundred gallons of water across the tile floor of Phở Thanh, and glass, and gravel, and a dozen koi flopping in the wet, gasping.

Mai screams. Mr. Nguyen goes down on his knees in the water, scooping fish into his hands, into the mop bucket, one by one, with his face perfectly blank.

DANTE: We\'ll come back Friday, Mr. Nguyen. Think about it.

On the way out, you stop and pick up a koi from the floor by the door, orange and white, flopping, and put it in the bucket. Mr. Nguyen looks up at you.

He doesn\'t say anything. He doesn\'t have to.`,
    next: 'a2_car'
  },
  a2_nguyen_warn: {
    enter: g => { g.know('nguyen', ['sam'], 'Thomas Nguyen, 52, Phở Thanh on Washington Ave. Hears through walls. You warned him to take his daughter and leave the city.'); g.bond('vinnie', { trust: 2 }); },
    text: `sam: Mr. Nguyen. Can I— the bathroom? Is it in the back?

He looks at you. He points.

You go. In the narrow kitchen behind the swinging door, between the stockpots, he follows you, because he heard you mean it, and he stands there in his apron with his hands at his sides.

You talk fast and quiet.

sam: Take your daughter. Leave tonight. Not to a cousin in the city. Out. Jersey, Delaware, Virginia. Your name\'s on a list at the Navy Yard. If you work for Bruno, he owns you. If you don\'t, the Navy Yard takes you. A kid on my floor died there in October. They put needles in his hip.

MR. NGUYEN: Why are you telling me this?

sam: Because I\'m supposed to scare you, and I don\'t want to be the guy who does that.

He looks at you. He tilts his head, listening to something.

MR. NGUYEN: Your heart is very slow. Too slow. Like an old man\'s.

He nods, once.

MR. NGUYEN: Go back out. Tell them I said I\'ll think about it.

You go back out. Dante is waiting by the register. Vinnie is by the door.

sam: He says he\'ll think about it.

Dante looks at you. Then at the kitchen door. Then at Vinnie.

DANTE: Did he.

vinnie: He said it to me too, D. When you were in the car. Guy\'s scared. Let him sleep on it.

Dante looks at Vinnie. Vinnie looks back, steady, the way he looks at a foreman.

DANTE: Friday, then. Friday, Mr. Nguyen.

On Friday, Phở Thanh is dark. There\'s a sign in the window in Vietnamese and English. *CLOSED FOR FAMILY EMERGENCY.* The koi are gone from the tank.

It doesn\'t count. You know it doesn\'t count. You know Vinnie lied to Dante\'s face for you, and you know what that costs, in a car with Dante.`,
    next: 'a2_car'
  },
  a2_nguyen_dante: {
    enter: g => { g.flag('bruno_jobs_done', (g.f('bruno_jobs_done') || 0) + 1); },
    text: `You stand by the door. You put your hands in your pockets. You let Dante handle it.

Dante handles it.

He doesn\'t yell. He sits down at one of the tables, uninvited, and asks for a bowl of pho, and when Mai brings it, shaking, he thanks her, and eats it, and tells Mr. Nguyen it\'s the best he\'s had in years, and then he talks, for twenty minutes, very pleasantly, about the Navy Yard, and beds, and needles, and the list, and his grandfather\'s generosity, and Temple University, and how many students walk home alone down Washington Avenue at night.

At the end, Mr. Nguyen says yes. He says it to the table. He doesn\'t look up.

On the way out, Vinnie stops beside you at the door.

vinnie: That\'s the job, Sally.

He says it like Teddy said it in Fishtown. *This is what the job is.* Like he\'s been saying it to himself in the mirror for a month.`,
    next: 'a2_car'
  },

  a2_car: {
    night: true,
    loc: 'THE ESCALADE · BROAD STREET',
    clock: { time: '10:40 PM' },
    text: g => `Dante gets out at the club. Vinnie drives you up Broad alone. The heat is on too high. Neither of you says anything until City Hall.

vinnie: You notice anything about Nguyen?

sam: He hears through walls.

vinnie: He\'s scared of *you*. Not Dante. Not me. You. He heard your heart. Said it was slow. Like an old man.

He drives.

vinnie: You still got that white hair?

sam: Twelve now.

vinnie: Jesus, Sally.

At Girard, at the light, he says, without looking:

vinnie: I took it \'cause Dante said he\'d go easy on your pop. That was September. Then he said if I took the promotion he\'d go easy on *you*. That was last week. You see how that works? Every time I say yes to save somebody, I owe him more.

sam: Vin. Get out.

vinnie: Out where? I\'m eighteen, I got a mother and two brothers and a father at Curran-Fromhold, and I make four grand a week now. You know what I made at the Local? Nine hundred. Out *where*?

The light changes. He goes.

vinnie: You\'re the one went to college. You figure it out. Then come tell me.

He drops you at Cardone. He doesn\'t say goodnight. The camel coat looks wrong on him the whole way, like a costume, and then, in the light of the lobby doors, for one second, it doesn\'t.`,
    next: 'a3_dana'
  },

  /* ================= ACT THREE: DANA ================= */
  a3_dana: {
    card: { kind: 'act', label: 'Act Three', title: 'Dana' },
    loc: 'ANNENBERG HALL · LIACOURAS WALK',
    clock: { day: 'Thu', date: 'Jan 21', time: '2:50 PM' },
    enter: g => { g.sleep(6); g.meet('dana'); },
    text: g => `She\'s waiting outside Annenberg after your lecture, leaning on the railing in a puffer jacket with a reporter\'s notebook in her back pocket and a coffee in each hand.

You know her face. Everybody in Philly knows her face; she\'s on the side of a SEPTA bus, *DANA FIORILLO · THE INQUIRER · THE STORIES BEHIND THE STORY*. She named you. *The Broad Street Blur.*

She holds out one of the coffees.

DANA: Sam Kearney. You look like you could use one.

You don\'t take it.

DANA: That\'s fine. I\'ll hold it. I\'m going to be very honest with you, because I think you\'re a kid who\'s had enough people lie to him lately.

She takes out her phone and turns it around.

The doorbell camera still. Girard Avenue. December 4, 2:41 a.m. A black Escalade at the curb. A kid in a dark hoodie on the sidewalk, face turned away.

DANA: I can\'t see your face. Nobody can. I\'m not here to tell you this is you. I\'m here to tell you I know this is an Iannucci car, and I know a man in Fishtown went to the ER that night with frostbite on both hands from inside his own bar, and I know Frank Kearney drives a Liberty cab and owes somebody money, because I talk to cab drivers, and cab drivers talk.

She puts the phone away.

DANA: And I know that in August, a kid pulled a little boy off Broad Street faster than a camera could see. And in November, the same kid was on the Parkway. And now I think the same kid is getting in the back of the Iannuccis\' car at three in the morning.

DANA: I don\'t think you\'re a bad guy, Sam. I think you\'re a kid in a bad spot. I\'d like to hear about it. On the record, off the record, on background. Your call.`,
    choices: [
      { text: '"I don\'t know what you\'re talking about. I deliver pizza." Lie to her face.', tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['press'], label: 'Lie to Dana Fiorillo', on: { strong: 'a3_dana_lie', weak: 'a3_dana_lie', miss: 'a3_dana_lie_bad' } } },
      { text: 'Give her something else. Off the record. Not the Iannuccis. The Navy Yard. Femi. The ME who retired to Boca.', tag: 'Redirect',
        fx: g => { g.flag('dana4', 'halcyon'); g.heat('press', 1); g.hidden('halcyon_heat', 1); g.know('dana_halcyon', ['sam', 'dana'], 'You gave Dana Fiorillo the Navy Yard story, off the record: Femi Ojo, the study, the three holes in his hip, the deputy ME who retired to Boca.'); }, go: 'a3_dana_redirect' },
      { text: 'Don\'t say anything. Walk away.', tag: 'Walk',
        fx: g => { g.flag('dana4', 'walked'); g.heat('press', 1); }, go: 'a3_dana_walk' }
    ]
  },
  a3_dana_lie: {
    enter: g => { g.flag('dana4', 'lied'); },
    text: `sam: I don\'t know what you\'re talking about. I deliver pizza. Ciro\'s, on Cecil B. Moore. Large plain, twelve ninety-nine.

It comes out easy. It always comes out easy now.

Dana smiles. Not like she believes you. Like she respects the effort.

DANA: Okay.

She holds out the coffee again. This time you take it.

DANA: Here\'s my card. My cell\'s on the back. When you\'re ready to stop delivering pizza, call me.

She walks away up Liacouras Walk. She doesn\'t look back. You\'ve got her card in one hand and her coffee in the other, and both of them feel like evidence.`,
    next: 'a4_friday'
  },
  a3_dana_lie_bad: {
    enter: g => { g.flag('dana4', 'lied'); },
    text: g => `sam: I don\'t know what you\'re talking about. I deliver pizza.

Your hand goes to your left ear. You feel it go.

Dana watches it go.

DANA: You touched your ear.

sam: It\'s cold.

DANA: It\'s thirty-eight degrees, and you\'re wearing a T-shirt under that hoodie, Sam. You\'re not cold. You haven\'t been cold a day since August, have you?

${g.f('heat_max_press') ? 'You can see it land. You can see her be sure.\n\nDANA: Okay. Okay.\n\nShe puts her notebook away. She doesn\'t write anything down. That\'s somehow worse.\n\nDANA: I\'m not going to print your name. Not now. I want you to know that. I\'m not in the business of getting kids killed. But I know, Sam. I *know*. And when you\'re ready, I\'m the only person in this city who can tell your side.' : 'She holds out the coffee. You don\'t take it.\n\nDANA: Here\'s my card. When you\'re ready.'}

She walks away up Liacouras Walk.`,
    next: 'a4_friday'
  },
  a3_dana_redirect: {
    text: `sam: Off the record.

DANA: Off the record.

sam: You\'re looking at the wrong car.

You tell her about the Navy Yard. About Femi Ojo, Econ, who reshelved books at Charles and couldn\'t be seen. About the paid study. About the three holes in his hip. About a deputy medical examiner named Feld who signed *adverse reaction* at nine in the morning and bought a condo in Boca by Monday.

You don\'t tell her about the Slip. You don\'t tell her about Bruno. You don\'t tell her about yourself at all.

She listens. She doesn\'t write anything down. When you\'re done, she\'s quiet.

DANA: You know what you just did.

sam: What?

DANA: You pointed me at something bigger so I\'d stop looking at you.

She looks at you over her coffee.

DANA: It\'s a good trick. I\'ve seen senators do it. It works, too. Because now I want the bigger thing more.

She hands you the coffee and her card.

DANA: Femi Ojo. Okay. I\'ll start with the sister.

sam: Tolu. Be careful with her.

DANA: I\'m always careful, Sam. That\'s the job.`,
    next: 'a4_friday'
  },
  a3_dana_walk: {
    text: `You don\'t say anything. You walk away.

DANA: Sam.

You keep walking.

DANA: The thing about walking away, Sam, is it\'s also an answer.

You don\'t turn around. Halfway up Liacouras Walk, you realize she put her card in the pocket of your hoodie at some point, and you didn\'t feel it. She\'s good.`,
    next: 'a4_friday'
  }
});
