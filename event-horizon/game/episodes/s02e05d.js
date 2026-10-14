/* S2 · E5 · THE OPEN DOOR, part 4 of 4: Act Four ("Port Richmond"), tag, polls. */
EH.scenes('s02e05', {

  /* ================= ACT FOUR: PORT RICHMOND ================= */
  a4_saturday: {
    card: { kind: 'act', label: 'Act Four', title: 'Port Richmond' },
    loc: 'EDGEMONT STREET · PORT RICHMOND',
    clock: { day: 'Sat', date: 'Jan 23', time: '9:20 AM' },
    enter: g => { g.sleep(2); },
    text: g => `${g.f('body5') === 'carried' ? `You carried him home.

Heck carried him, mostly, the whole length of the yard, with Marisol over his other shoulder like a sack of flour, and wouldn\'t let anybody help. ${g.f('call5') === 'vinnie' ? 'Vinnie drove. He didn\'t say one word from the Navy Yard to Port Richmond. When you got out he stayed in the car with his hands on the wheel, and when you looked back he was crying, and he pulled away before you could see it.' : g.f('call5') === 'mikey' ? 'Mikey drove, because he wouldn\'t let you do it any other way, and swore the whole time, and then stopped swearing on I-95 and didn\'t say anything else.' : 'A cab, at two in the morning, a driver who looked in the mirror once and decided not to look again.'}

At 2:40 a.m., on Edgemont Street, Halina Kowal opened her door in her bathrobe with the dialysis line taped to her arm, and looked at Heck, and at what Heck was carrying, and didn\'t scream. She stood aside. She said, *On the couch. Gently. Gently.* She called 911 herself. She told them her son had come home hurt and died.

The police came at four, and asked questions for two hours. Bree told them the truth, mostly. Trespassing. The Navy Yard. A fall. Kids being stupid. A detective with a mustache wrote it all down and looked at you for a long time, and then at Heck, and then wrote some more.` : `The Navy Yard police found him at 1:12 a.m. ${g.f('call5') === 'mikey' ? 'A Philadelphia police officer, off duty, who said he\'d heard a noise, was standing at the top of the steps when they got there.' : g.f('call5') === 'nik' ? 'A 911 call from the Navy Yard\'s own front desk, which was empty, had told them where to look.' : 'An anonymous call from a pay phone on Oregon Avenue had told them where to look. There aren\'t any pay phones on Oregon Avenue. Nobody followed up.'}

At 5:30 a.m., two officers knocked on a door on Edgemont Street, and Halina Kowal opened it in her bathrobe with the dialysis line taped to her arm, and looked at their faces, and knew.`}

Now it\'s morning.

You haven\'t slept. You\'re sitting at the kitchen table in the Kowals\' rowhouse, where in November there were pierogi and a toddler in a bumblebee costume, and now there\'s a pot of coffee nobody\'s drinking and the plaster Virgin Mary in the front yard has snow on her little knit scarf.

Jules went home at six, in a car service she called from the Kowals\' front step. She didn\'t want to go. You made her. ${g.f('jules_blames5') ? 'She hasn\'t texted. She always texts.' : 'She texted from the Schuylkill Expressway: *I\'m here. Whenever. Whatever time it is.*'}

Bree is asleep upstairs, finally. Heck is on the floor of the living room with his back against the couch, and on the couch, wrapped in Halina\'s crocheted blanket, Marisol Reyes is awake.

She\'s been awake since seven. She doesn\'t remember much. The wellness study. A nice room on seven with a TV. Then the blue room. Then nothing, for months, except one thing.

Halina is in the recliner beside the machine, which hums. She has her rosary. She isn\'t praying. She\'s looking at you.

HALINA: You. Wawa boy. You were with him.

sam: Yes, ma\'am.

HALINA: He said anything? At the end?

She asks it like she\'s asking whether it\'s raining.

HALINA: Theodore never says anything. Twenty years, I get maybe a hundred words. So if he said something, I want it.

${g.f('promise_halina') ? 'You swore. Not to God. To her.' : ''}`,
    choices: [
      { text: '"He said to tell you he saved it. The deposit at Jefferson. Every dollar. From the warehouse. He was proud of it."', tag: 'His version',
        fx: g => { g.flag('halina5', 'his'); g.hidden('revenant_drift', -0.5); g.bond('bree', { trust: 1 }); }, go: 'a4_halina' },
      { text: 'Tell her the truth. Bruno paid. She should know who she owes, before Bruno tells her himself.', tag: 'The truth',
        fx: g => { g.flag('halina5', 'truth'); if (g.f('promise_halina')) { g.flag('broke_promise5'); g.hidden('revenant_drift', 1); } g.know('halina_bruno', ['sam', 'bree']); }, go: 'a4_halina' }
    ]
  },

  a4_halina: {
    loc: 'EDGEMONT STREET · PORT RICHMOND',
    text: g => `${g.f('halina5') === 'his' ? `sam: He said to tell you he saved it. The deposit. At Jefferson. Every dollar. From the warehouse in Bridesburg. Nights. He said to tell you he was good at something.

Halina looks at you.

She knows. You can see her know. A mother whose son works nights at a warehouse and comes home in a wool coat that costs more than her car knows. She\'s known since Christmas.

HALINA: Yes. He was very good at it. The warehouse.

She turns the rosary over in her fingers.

HALINA: Dziękuję. Thank you for bringing me this.

And that\'s the deal. The two of you, in her kitchen, agreeing on a story for a boy who isn\'t there to tell it. Upstairs, Bree is asleep. You hope she never has to know you made it.` : `${g.f('broke_promise5') ? 'You promised him. You know you promised him. You do it anyway.\n\n' : ''}sam: He worked for Bruno Iannucci. Not a warehouse. Bruno paid the deposit at Jefferson. Teddy didn\'t want you to know. He wanted you to think it was the GoFundMe.

The machine hums.

Halina doesn\'t look surprised. She looks tired. She looks exactly like her son.

HALINA: I know who paid. Mr. Iannucci came to see me himself. At Christmas. He brought a ham. He sat in that chair and told me I have a good boy.

She looks at the rosary in her hand.

HALINA: Theodore thinks I do not know things. All his life. He protects me from things I know already.

HALINA: Thank you for not doing it too.`}

On the couch, Marisol stirs. She\'s been listening.

MARISOL: You\'re Sam.

sam: Yeah.

MARISOL: Heck says you came for me. He says you promised.

She has a hoarse little voice, like she hasn\'t used it in months, because she hasn\'t.

MARISOL: There was a man. In the blue room. At night. He sat in the chair by my bed. He never touched anything. He just sat. Sometimes he cried.

You put your coffee down.

MARISOL: He was old. Older. But he had your face. Exactly your face. When you came in just now, I thought—

She stops.

MARISOL: Last night. Before they came for us. Before the lights. He leaned over me, and he said, *Not you. You get to go home.*

She pulls the blanket up to her chin.

MARISOL: I thought it was a dream. I thought he meant I was going to die.

Heck, on the floor, has his big hands over his face.

*Not you.* Which means somebody else.

He picked.`,
    next: 'a4_funeral'
  },

  a4_funeral: {
    loc: 'ST. ADALBERT · ALLEGHENY AVENUE',
    clock: { day: 'Thu', date: 'Jan 28', time: '11:40 AM' },
    enter: g => { g.sleep(5); },
    text: g => `They bury Theodore Kowal on Thursday from St. Adalbert, the big Polish church on Allegheny Avenue with the two green spires you can see from I-95.

The mass is in Polish and English. The choir sings something in Polish that has no English, that nobody needs translated. Halina sits in the front pew in a black coat with her arm in a sling over the fistula, between Bree and an old woman who keeps patting her hand. Heck is a pallbearer. He carries the front left corner and his face is wet the whole way up the aisle and his hands don\'t burn the brass handle, because he doesn\'t let them. Bree does the second reading, in her own voice, and gets through all of it. Nobody in St. Adalbert knows that for an hour on Friday night it was gone.

The casket is mahogany. The flowers are white roses, hundreds of them, more flowers than Port Richmond has seen since the old monsignor died. There\'s a wreath on a stand by the altar the size of a truck tire.

The card on the wreath says: *With deepest sympathy. The Iannucci family.*

You\'re in the back pew. ${g.f('jules_blames5') ? 'Jules is not beside you. She texted at nine: *I can\'t. I\'m sorry. I can\'t be near anyone today.*' : 'Jules is beside you, in black, very straight, holding your hand under the hymnal where nobody can see.'} ${g.f('call5') === 'nik' ? 'Nik is on your other side in a suit his mother overnighted from Edison, two sizes too big, and he\'s crying harder than anyone who didn\'t know Teddy has any right to, and you love him for it.' : ''}

After, on the church steps, in the cold, Bruno Iannucci is waiting.

He\'s in a black overcoat with a white scarf, leaning on a cane you\'ve never seen him use. Dante is beside him. Vinnie is a step behind them, in his black cashmere coat, ${g.f('call5') === 'vinnie' ? 'and when your eyes meet his he looks away, at the street, at the traffic on Allegheny, at anything.' : 'with his hands folded in front of him like a pallbearer nobody asked.'}

BRUNO: Sam. Walk with an old man.

You walk with him, slowly, down the steps, to the sidewalk, where it\'s just the two of you and the wind.

BRUNO: I paid for the box. The flowers. The mass. The lunch after at the Polish club, which you\'ll come to, and eat, because you\'re too skinny. I paid for the plot at Our Lady of Grace. That\'s what I do, when one of mine dies.

He stops walking.

BRUNO: Teodoro was mine. He broke my understanding to go into that building, and I would have had something to say to him about that, and now I don\'t get to.

He looks at you. Those old wet eyes, kind and terrible.

BRUNO: The police say he fell. Teodoro never fell in his life. Who?`,
    choices: [
      { text: '"Halcyon. The building is theirs. The truck was theirs. They left the door open, and they waited."', tag: 'Halcyon',
        fx: g => { g.flag('bruno5', 'halcyon'); g.know('bruno_halcyon5', ['sam', 'bruno'], 'At Teddy\'s funeral, you told Bruno Iannucci that Halcyon left the door open at the Navy Yard and waited. He said: "Then they owe me a boy."'); g.hidden('halcyon_heat', 1); }, go: 'a4_bruno_halcyon' },
      { text: '"He fell." Say it like the police say it. Give Bruno nothing.', tag: 'He fell',
        fx: g => { g.flag('bruno5', 'fell'); }, go: 'a4_bruno_fell' },
      { text: 'Don\'t answer. Look at him, and don\'t say anything at all.', tag: 'Silence',
        fx: g => { g.flag('bruno5', 'silent'); g.hidden('revenant_drift', -0.5); }, go: 'a4_bruno_silent' }
    ]
  },

  a4_bruno_halcyon: {
    text: `sam: Halcyon. The building\'s theirs. The truck was theirs. They left the door open on purpose, and they waited for us to walk through it.

Bruno nods slowly, like you\'ve confirmed something he already had on a list.

BRUNO: The doctor\'s people. The ones with the beds.

sam: Yeah.

BRUNO: They took a girl from Fishtown in October. Now they take one of mine.

He puts on a pair of black leather gloves, one finger at a time.

BRUNO: Fifty years I\'ve had an understanding with everybody in this city. The Irish. The Russians. The cops. City Council. Everybody knows where the lines are. Nobody walks into my house and takes a boy off the table.

He pats your cheek with one gloved hand. Gently.

BRUNO: Then they owe me a boy. Go eat, Sam. The pierogi at the Polish club are very good.

He walks back up the steps to Dante, and says something, and Dante looks at you over his grandfather\'s shoulder, and smiles.

You know that smile. You\'ve seen it under I-95. You\'ve just started something, and you don\'t know what it is.`,
    next: g => g.f('photos5') ? 'a4_photos' : 'a4_jules',
    nextTargets: ['a4_photos', 'a4_jules']
  },

  a4_bruno_fell: {
    text: `sam: He fell.

Bruno looks at you for a long time.

BRUNO: That\'s what the police say.

sam: That\'s what happened.

BRUNO: Mm.

He takes out a pair of black leather gloves and puts them on, one finger at a time.

BRUNO: You know what your great-grandmother told me, Sam? In 1964? When she pulled me out of the river with her hands bleeding? She said, *You didn\'t fall through. The ice opened.* She knew the difference.

He pats your cheek with one gloved hand.

BRUNO: You know the difference too. You\'re just not telling me. That\'s all right. I\'ll find out. I always find out. Go eat.

He walks back up the steps. Dante watches you go.`,
    next: g => g.f('photos5') ? 'a4_photos' : 'a4_jules',
    nextTargets: ['a4_photos', 'a4_jules']
  },

  a4_bruno_silent: {
    text: `You don\'t say anything.

You look at him, and he looks at you, and the wind comes down Allegheny Avenue off the river and blows his white scarf.

After a while he smiles. A small one. A real one.

BRUNO: That\'s your great-grandmother\'s face. Assunta\'s. You know that? That exact face. She looked at me just like that in 1964, on the bank of the Schuylkill, when I asked her how she did it.

He puts on his gloves, one finger at a time.

BRUNO: She didn\'t tell me either.

He pats your cheek.

BRUNO: All right. A DiNardo keeps his own counsel. I respect that. But a man who keeps quiet at a funeral is a man who knows something. And I don\'t like it when people know things I don\'t, Sam. Not in my city.

He goes back up the steps.`,
    next: g => g.f('photos5') ? 'a4_photos' : 'a4_jules',
    nextTargets: ['a4_photos', 'a4_jules']
  },

  a4_photos: {
    loc: 'CARDONE HALL · 9-14',
    clock: { time: '6:15 PM' },
    text: `That night, you sit on your bed with your phone and scroll.

Two hundred and six photos. Twenty-two beds. *ES-03. ES-14. ES-38.* The man with the beard. The woman in the hijab. The girl with the rabbit. Half of them are blurry. Half of them aren\'t.

The empty bed. *ES-44.* The blanket turned down.

Dana Fiorillo\'s card is in your wallet. *I\'ll find something I can print.*

If you send these, she prints them. And the Inquirer has a lawyer, and Halcyon has more lawyers, and somewhere in the building at 100 Independence Mall West, somebody asks *where did you get these*. And the answer is a kid in a hoodie. And the twenty-one people in those beds are either on the front page or in a different building by Monday.

If you don\'t send them, they\'re in the beds.`,
    choices: [
      { text: 'Send them. All of them. Let the city see the beds.', tag: 'Send',
        fx: g => { g.flag('dana5', 'sent'); g.know('dana_photos', ['sam', 'dana'], 'You sent Dana Fiorillo 206 photos of the eighth floor of Building 7.'); g.heat('press', 1); g.hidden('halcyon_heat', 1); }, go: 'a4_jules' },
      { text: 'Not yet. Not all of them. Send her one: the empty bed, the number, and nothing else.', tag: 'One photo',
        fx: g => { g.flag('dana5', 'one'); g.know('dana_photos', ['sam', 'dana'], 'You sent Dana Fiorillo one photo from the eighth floor of Building 7: an empty bed with ES-44 on the whiteboard.'); }, go: 'a4_jules' },
      { text: 'Keep them. Not until you know what happens to the people in the beds.', tag: 'Keep them',
        fx: g => { g.flag('dana5', 'held'); }, go: 'a4_jules' }
    ]
  },

  a4_jules: {
    night: true,
    loc: 'CARDONE HALL · 9-14',
    clock: { time: '11:20 PM' },
    text: g => `${g.f('jules_blames5') ? 'At eleven, after a whole day of nothing, there\'s a knock on your door.\n\nIt\'s Jules. Still in the black dress from a funeral she didn\'t go to. She went somewhere else instead, it turns out. She stood across Allegheny Avenue from St. Adalbert, in the cold, for the whole mass, by herself. Near enough to see. Not near enough to *collect*.' : 'At eleven, there\'s a knock on your door. Jules. Still in black from the funeral, with her coat over her arm.'}

${g.f('call5') === 'nik' ? 'Nik went home to Edison after the funeral. His mother came and got him in the Camry, and held his face in the parking lot of the Polish club, and he let her. Before he left he said, *Take the room, bro. Take the whole room. I\'ll be back Sunday.*' : 'Nik is at the library. He texted: *taking the long way home. like, sunday long.* Nik has never in his life taken the long way anywhere.'}

She sits on the end of your bed. She doesn\'t take her shoes off.

jules: I counted.

sam: Counted what?

jules: The lights on Broad. Twenty-two of them. ${g.f('door5') === 'luck' ? 'The door on the eighth floor. ' : ''}${g.f('yard5') === 'luck' ? 'The yard, every dart going wide. ' : ''}${g.f('dock5') === 'luck' ? 'And the last one. The big one. Your hand in mine and the whole Navy Yard going my way at once.' : 'Everything I let go my way in one night, after eighteen years of trying not to.'}

She looks at her hands.

jules: My grandmother said the house always collects. Not from us. Near us. Mercutio went lame because I let go of the reins. ${g.f('dock5') === 'luck' ? 'And on Friday night I let go of *everything*, as hard as I could' : 'And on Friday night I let go more than I ever have'}, and a boy who was standing ten feet from me fell forty feet onto stone.

jules: Tell me that\'s not arithmetic, Sam. You\'re good at math now. Tell me.

${g.f('dock5') !== 'luck' ? 'You saw what happened at the dry dock. You were *there*, in the second, while she was frozen with her hand out. You saw two fingers on Teddy\'s chest. You heard why.' : 'You saw a man across the dry dock, for one frame, with one hand raised. You don\'t know what you saw. You know what it looked like.'}`,
    choices: [
      { text: 'Tell her what you saw. All of it. Whatever it costs.', tag: 'All of it',
        fx: g => { g.flag('tell5', 'all'); g.hidden('jules_debt', -2); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -1); if (g.f('dock5') === 'luck') g.know('revenant_glimpse5', ['jules']); else g.know('revenant_push', ['jules']); }, go: 'a4_tell_all' },
      { text: 'Tell her it wasn\'t her. Don\'t tell her how you know.', tag: 'Not you',
        fx: g => { g.flag('tell5', 'part'); g.hidden('jules_debt', -1); }, go: 'a4_tell_part' },
      { text: 'Don\'t argue with her. She doesn\'t need an answer tonight. She needs you. Hold her.', tag: 'Hold her',
        fx: g => { g.flag('tell5', 'none'); g.bond('jules', { affection: 1 }); }, go: 'a4_tell_none' }
    ]
  },

  a4_tell_all: {
    night: true,
    text: g => `${g.f('dock5') !== 'luck' ? `sam: It wasn\'t your luck.

She starts to say something. You keep going.

sam: I was in the Slip. When the lights went white. Everything stopped, you, the darts, Teddy. And *he* was there. The man with my face. Standing next to Teddy on the edge. Not frozen. He was waiting for me.

She\'s very still.

sam: He put two fingers on Teddy\'s chest and pushed him. And then he closed the second on me so I couldn\'t catch him.

jules: Why?

You could stop. You don\'t.

sam: He said Teddy\'s the one who takes you to Bruno. In March. He said he\'s done this four hundred times. He said he tried the other ways.

sam: He looked at you when he said it, Jules. Like he was looking at somebody he\'d lost.

For a long time she doesn\'t say anything at all.

jules: So he killed Teddy for me.

sam: He killed Teddy for *him*. For whatever he thinks he\'s fixing.

jules: He\'s you.

sam: He\'s not me.

jules: Sam. He has your face, and he went back four hundred times for somebody, and he\'d push a boy off a ledge for her.

She takes your cold hand in both of hers.

jules: That\'s not a stranger. That\'s *you* with nobody left to stop you.` : `sam: I don\'t know if it was your luck.

She looks up.

sam: At the dock. When Teddy went over. For one frame, across the water, under the dead spotlight, there was a man standing there. Long coat. One hand up, like this. Like a man at a window.

jules: The man with your face.

sam: I don\'t know. I think so. He was there and then he wasn\'t.

jules: That doesn\'t mean it wasn\'t me.

sam: No. It means it might not have been.

She sits with that.

jules: That\'s worse. Do you know that\'s worse? Now I don\'t even get to know.

sam: Yeah. Welcome to my whole year.

She laughs. It breaks in the middle. She puts her forehead against your shoulder and leaves it there.`}`,
    next: 'a4_light'
  },

  a4_tell_part: {
    night: true,
    text: g => `sam: It wasn\'t you.

jules: You don\'t know that.

sam: I do.

jules: How?

${g.f('dock5') !== 'luck' ? 'You think about two fingers on Teddy\'s chest. A gap where a ring finger should be. *He\'s the one who takes her to Bruno.* You think about saying it, and what it would do to her, to know that a man with your face would kill for her.\n\nYou keep it. Like the note. Two things now.' : 'You think about a man across the water with one hand raised. You don\'t know what you saw. You don\'t want to give her a ghost to be afraid of instead of a sum to be sorry for.'}

sam: I just do. Trust me.

She hears the shape of it. She always does.

jules: You touched your ear.

sam: I didn\'t.

jules: You thought about it.

But she lets it go. She lies down on top of the covers in her funeral dress with her shoes still on, and puts her head on your chest, and lets it go.`,
    next: 'a4_light'
  },

  a4_tell_none: {
    night: true,
    text: `You don\'t argue.

You sit down next to her on the end of the bed and put your arm around her, and she turns into you like a door closing, and stays there.

She doesn\'t cry. She shakes. Like the cold is coming out of her, the way it comes out of you after a Slip.

You hold her until it stops.

jules: You\'re not going to tell me it wasn\'t me.

sam: No.

jules: Good. I\'d know you were lying. You touch your ear.

Her voice is muffled in your shirt.

jules: Thank you for not lying.

You didn\'t tell her the truth either. You don\'t say that. You hold her.`,
    next: 'a4_light'
  },

  a4_light: {
    night: true,
    clock: { time: '1:10 AM' },
    enter: g => { g.flag('light_off5'); g.bond('jules', { affection: 1, tension: -2 }); g.hidden('revenant_drift', -0.5); g.know('jules_light_off', ['sam', 'jules'], 'On the night of Teddy\'s funeral, in 9-14, Jules asked you to turn off the desk lamp. She sleeps with a light on. She didn\'t, that night.'); },
    text: g => `Later. After one.

You\'re lying on your narrow dorm bed, both of you, on top of the covers, in your clothes. She took her shoes off at some point. Her feet are cold. Your everything is cold. She doesn\'t seem to mind.

The desk lamp is on. It\'s always on when she\'s here. She asked you to leave it on in October and you never asked why. ${g.knows('jules_chapel') ? 'You didn\'t have to. Seven years old, locked in the chapel at Ravenscourt by her brother, all night, in the dark, listening to the house breathe.' : 'You figured she\'d tell you when she wanted to.'}

jules: Sam.

sam: Yeah.

jules: Turn off the light.

You look at her.

jules: I want to try. With you here. I want to see if the dark is different with somebody in it.

You reach over and turn off the lamp.

The dark comes down. Gray light from the window. The radiator ticking. Somebody\'s music, faint, through the wall, three doors down. Broad Street, out there, a bus, a siren very far off.

Her breathing is fast. Then slower. Her hand finds your shirt and holds a fistful of it.

jules: It\'s different.

sam: Good different?

jules: I don\'t know yet.

She doesn\'t ask you to turn it back on.

You lie in the dark with her and think about a boy on the bottom step with his arm in the water, and a circle of river that stopped for ninety seconds after he was gone, and a man in a long coat who sat beside a girl\'s bed every night and cried, and then went down to the dry dock and picked.

${g.f('dock5') !== 'luck' ? '*Four hundred times.*' : '*Not you.*'}

${g.f('assunta_watch') ? 'On the desk, in the dark, Salvatore\'s watch, stopped at 11:51. You can\'t hear it tick. It only ticks in the cold.' : ''}

You don\'t sleep. She does. Eventually. For the first time in her life, in the dark.`,
    next: 'tag_frame'
  },

  /* ================= TAG ================= */
  tag_frame: {
    card: { kind: 'tag' },
    night: true,
    loc: 'NAVY YARD · BUILDING 7 · THE GLASS ROOM',
    clock: { time: '3:00 AM' },
    text: g => `> THE CAMERA.

The glass room. The monitors. A fresh mug of Earl Grey, the tea bag folded on its napkin.

Dr. Achterberg is sitting very close to one screen with her glasses pushed up on her head. Brannigan is standing behind her.

On the screen: a grainy black-and-white feed from a camera on a light pole at the edge of the dry dock. The timestamp in the corner reads *00:51:03*.

She advances it one frame.

*00:51:03.*

Teddy Kowal on the lip of the dock, gray to the jaw, facing the truck. ${g.f('dock5') === 'luck' ? 'The girl holding the boy\'s hand. Four darts in the air.' : 'A blur beside him that the camera can only render as a smear of white. Seventeen.'}

She advances it one frame.

*00:51:04.*

Teddy Kowal, tipping, past balance, over forty feet of air.

${g.f('dock5') === 'luck' ? 'And across the dry dock, on the far lip, in exactly one frame, a man.\n\nLong coat. Gray at the temples. His left hand raised, palm out, like a man at a window. On the left hand, a gap.' : 'And standing beside him, in exactly one frame, a man.\n\nLong coat. Gray at the temples. His left hand raised, two fingers extended. On the left hand, a gap.'}

She advances one frame. *00:51:04.* He\'s gone. Teddy is falling.

She goes back one frame. He\'s there.

Forward. Gone.

Back. There.

BRANNIGAN: Enhance it.

ACHTERBERG: It\'s a forty-dollar camera on a light pole, Cole. There\'s nothing to enhance.

She takes her glasses off and cleans them on her cardigan. Her hands aren\'t quite steady. It\'s the first time you\'ve ever seen them not quite steady.

ACHTERBERG: Pull everything. The Parkway. Broad and Spring Garden in August. Every camera that ever had seventeen in it. Every frame, one at a time.

BRANNIGAN: Looking for what?

She puts her glasses back on and looks at the man in the single frame, at the gap where his ring finger should be.

ACHTERBERG: Him.

> ELSEWHERE.

The Melrose Diner, Snyder and Passyunk, 4:10 a.m. The counter. The rotating pie case. A waitress in her sixties doing the crossword.

In the last booth, a man sits with his back to the room, in a long coat, with a cup of coffee he hasn\'t touched.

On the paper placemat in front of him, in small careful handwriting, a column of names. Most of them crossed out.

We don\'t see the names.

He takes a pen and draws a line through one more. Neatly. With his left hand.

WAITRESS: Hon? You want a warm-up?

He doesn\'t answer. He\'s looking at the placemat.

When she comes back with the pot, the booth is empty, and the coffee is cold, and there\'s frost on the inside of the window where he was sitting, in the shape of a hand.`,
    end: true
  }
});

Object.assign(EH.episodes.s02e05, {
  polls: [
    { q: 'One call', opts: [
      { label: 'Nik', pct: 46, if: g => g.f('call5') === 'nik' },
      { label: 'Vinnie', pct: 29, if: g => g.f('call5') === 'vinnie' },
      { label: 'Mikey', pct: 25, if: g => g.f('call5') === 'mikey' }
    ] },
    { q: 'The dry dock, 00:51:04', opts: [
      { label: 'Slipped', pct: 64, if: g => g.f('dock5') && g.f('dock5') !== 'luck' },
      { label: 'Took her hand', pct: 36, if: g => g.f('dock5') === 'luck' }
    ] },
    { q: 'Teddy', opts: [
      { label: 'Carried him home', pct: 58, if: g => g.f('body5') === 'carried' },
      { label: 'Left him for the police', pct: 42, if: g => g.f('body5') === 'left' }
    ] },
    { q: 'Bruno asked who', opts: [
      { label: 'Halcyon', pct: 51, if: g => g.f('bruno5') === 'halcyon' },
      { label: '"He fell."', pct: 22, if: g => g.f('bruno5') === 'fell' },
      { label: 'Said nothing', pct: 27, if: g => g.f('bruno5') === 'silent' }
    ] }
  ],
  onEnd: g => {
    g.recap('Teddy Kowal died at the bottom of the dry dock at the Navy Yard. He was twenty.');
    g.recap(g.f('dock5') === 'luck' ? 'Jules let it all go her way at the dry dock. Teddy slipped on ice nobody saw. She thinks her luck killed him.' : 'In the Slip, the man with your face pushed Teddy off the edge. "He\'s the one who takes her to Bruno."');
    g.recap('Marisol Reyes is out. The man with your face sat by her bed every night. "Not you. You get to go home."');
    g.recap('Jules saw a bed on the eighth floor made up for ES-44.');
    if (g.f('bruno5') === 'halcyon') g.recap('You told Bruno it was Halcyon. "Then they owe me a boy."');
    else g.recap('Bruno Iannucci asked you who killed Teddy. You didn\'t tell him.');
    g.recap('Halcyon has one frame of a man with a missing finger.');
  }
});
