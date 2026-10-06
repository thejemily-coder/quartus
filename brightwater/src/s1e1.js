/* ===================== SEASON ONE · EPISODE 1 · GLASS NIGHT ===================== */
EP_START[1]='cold1'; EP_TITLE[1]='Glass Night';

/* ---------- COLD OPEN ---------- */
SC.cold1=[
 ['act','Cold Open'],
 slug('EXT. BSU RESEARCH PIER — 11:52 P.M.'),
 n(`The first thing you notice is that the gulls have stopped.`),
 n(`Brightwater Harbor has gulls the way other cities have pigeons: loud, constant, unbothered by human dignity. Every night of your life there has been one screaming somewhere. Right now there are none. The water under the pier has gone flat as a plate.`),
 n(`The girl next to you says something. You don’t hear it. There is a hum coming up through the boards, through your sneakers, into your back teeth, and the white thing at the end of the pier, the thing they lit up two hours ago with a ribbon and a string quartet, is getting brighter in a way that light isn’t supposed to.`),
 s('walt',`Get back! Both of you, off the pier, right now —`),
 n(`The guard is running toward you. He’s an older guy, heavy, with a Corvane Dynamics patch on his shoulder and a flashlight he’s forgotten to turn on. You remember thinking that’s funny. You remember thinking you’ll tell somebody about it later.`),
 n(`Then the sky over Brightwater turns white.`),
 PANEL('','Not lightning. Not fire. Every shadow in the city disappears at once.','light'),
 n(`There’s no sound. That’s the part you’ll never be able to explain to anybody. A thing that big should be loud. Instead the world goes quiet as a held breath, and the boards under your feet start to rise like the pier is taking a breath of its own, and somewhere to your left, closer than the reactor, impossibly close, something else is shining.`),
 n(`You reach for her hand.`),
 ['card','Twelve hours earlier','BRIGHTWATER<em>Glass Night</em>','Season One · Episode One','glow'],
 go('home1')
];

/* ---------- ACT ONE · THE NARROWS ---------- */
SC.home1=[
 ['act','Act One · The Narrows'],
 slug('INT. THE COSTA HOUSE, TOLEDO STREET, THE NARROWS — 11:40 A.M.'),
 n(`The house smells like onions, bleach, and salt cod, which is to say it smells like every important day of your life.`),
 n(`Your mother has been cooking since five. She came home from a twelve-hour shift at Mercy General, slept for ninety minutes in her scrubs, and got up to make bacalhau à Brás for a dorm room six miles away, because God forbid her son should eat a cafeteria egg.`),
 s('teresa',`I put the bacalhau in the blue one and the rice in the one with the crack. Don’t microwave the one with the crack. It’ll explode and kill you and then what do I tell people? My son went to college and died of rice.`),
 s('eli',`Mãe. It’s Brightwater State. I can see the house from the library.`),
 s('teresa',`Good. Then I can see you.`),
 n(`She doesn’t look up from the Tupperware. She has been not looking up from things all week. Teresa Costa is five foot one, has not cried in front of anyone since 2019, and is currently packing enough food for a family of nine with a precision you’ve only ever seen in an ER.`),
 n(`Your sister Bia is at the kitchen table, filming all of it.`),
 s('bia',`For the archive. When you get famous for something stupid, the documentary people are going to need B-roll.`),
 s('eli',`Put the phone down.`),
 s('bia',`Final question. What are you going to be at college? Like, who? New school, new people. Nobody there knows you got suspended for biting Kevin Medeiros.`),
 s('eli',`He bit me first.`),
 s('bia',`That’s not the defense you think it is. Answer the question.`),
 ch('What are you going to be at college?',[
  o(`“Somebody nobody leans on.”`,{tag:['Nerve +1'],fx:{nerve:1},led:'Told Bia he wants to be somebody nobody leans on.',then:[
    s('bia',`Ooh. Ominous. That’s going in the trailer.`),
    n(`It comes out harder than you mean it. Bia hears that too; she lowers the phone half an inch.`)]}),
  o(`“The funny one. Obviously. Look at this face.”`,{tag:['Wit +1'],fx:{wit:1},led:'Told Bia he plans to be the funny one.',then:[
    s('bia',`The funny one is me. You’re the one who gets hit.`),
    s('eli',`Different school, different brand.`)]}),
  o(`“Same as here. Just closer to the bus.”`,{tag:['Heart +1'],fx:{heart:1,'rel.teresa.trust':1},led:'Told Bia he wants to stay who he is.',then:[
    n(`Behind you, your mother stops moving for exactly one second. Then she goes back to the rice.`),
    s('bia',`Boring. Accurate. I’ll allow it.`)]}),
  o(`“Whoever gets me out of the Narrows.”`,{tag:['Charm +1'],fx:{charm:1,'trk.hood':-1},led:'Told Bia he wants out of the Narrows.',then:[
    s('bia',`Wow. Say that louder, Vó Lurdes can’t hear you from the cemetery.`),
    n(`Your mother says nothing. That’s worse.`)]}),
 ]),
 n(`On the fridge, under a magnet from Lisbon none of you have ever been to, is a photo of your brother Danny at nineteen, shirtless on Gull Point with a beer and his arm around your neck. Under it is his latest letter from Cedar Ridge, handwriting slanted like it’s trying to leave. <i>Proud of you, little man. Don’t be a hero.</i>`),
 n(`Danny is doing eight years for a job you were supposed to be the lookout on. You were fourteen. He told you to go home. You went.`),
 n(`You have read the letter eleven times.`),
 slug('INT. COSTA HOUSE — FRONT HALL'),
 n(`Your father is in the front hall with his phone held against his chest like it might start a fight. Joe Costa is a big man folded down by a bad back: a longshoreman on disability for three years, a charmer for fifty, and a bettor for as long as you’ve been alive. He smiles too fast when he sees you.`),
 s('joe',`There he is! The scholar! You want me to carry something? I’ll carry something.`),
 s('eli',`Your back, Pai.`),
 s('joe',`My back’s fine. My back is a — it’s a weather system. Today it’s sunny.`),
 n(`His phone buzzes against his shirt. He doesn’t look at it. You do. The preview lights up the screen for two seconds before he flips it:`),
 T('TF',[['them','Friday. Don’t make me come to the house, Joe.']]),
 n(`TF. There is exactly one TF in the Narrows. Teddy Ferro collects for the Varga book on Fourth Street, and Teddy Ferro does not text people twice.`),
 ch('Your father is pretending you didn’t see that.',[
  o(`“How much do you owe Teddy, Pai?”`,{tag:['Nerve'],fx:{'rel.joe.trust':-1,'flag:confrontedJoe':true},led:'Asked his father point-blank how much he owes Teddy Ferro.',then:[
    n(`His face does three things in one second: hurt, offended, then very, very tired.`),
    s('joe',`It’s handled.`),
    s('eli',`That’s not a number.`),
    s('joe',`It’s a number between me and Teddy. Today is about you. Don’t take this from me, Eli. Please.`),
    n(`The “please” is what gets you. Your father has never said please to you in your life.`)]}),
  o(`Let it go. Today, anyway.`,{tag:['Heart'],fx:{'rel.joe.loyalty':1},led:'Saw Teddy Ferro’s text on his father’s phone and let it go.',then:[
    n(`You let it go. You file it in the place where you keep the things your family doesn’t talk about. It’s a big place. It has a sublet.`),
    s('joe',`Come on. Your mother packed a whole cow. Help me with the cow.`)]}),
  o(`Take a picture of the number when he isn’t looking.`,{tag:['Wit'],fx:{wit:1,'flag:teddyNumber':true},led:'Quietly saved Teddy Ferro’s number from his father’s phone.',then:[
    n(`He sets the phone on the hall table to lift a box. You lift it before he can, and while he’s complaining about his own back, you thumb the screen and memorize the number. You’re not sure what you’ll do with it. You just know you want to be holding something.`)]}),
 ]),
 slug('EXT. TOLEDO STREET — CONTINUOUS'),
 n(`A black Lincoln is idling at the curb with the windows down and Sinatra coming out of it, which on Toledo Street is how you know your uncle has arrived.`),
 n(`Rui Costa is your father’s younger brother and everything your father isn’t: lean, pressed, smelling of good cologne and the inside of a nice car. He works for Sal Varga. Nobody in your family has ever said that sentence out loud. He’s holding a white envelope.`),
 s('rui',`Professor! Come here. Come here, let me look at you. Look at this, a Costa with a student ID. Your avó is doing cartwheels in the ground.`),
 n(`He hugs you hard enough to pop your spine, and when he lets go the envelope is in your hand. It’s thick. You can feel the edges of the bills.`),
 s('rui',`For books. Books are a scam, I looked it up. Two thousand. Don’t tell your father, he’ll get emotional and then he’ll get ideas.`),
 n(`Over Rui’s shoulder, sitting on the hood of the Lincoln in a gold chain he couldn’t afford a year ago, is Joey Rizzo, who you have known since you were both four and ate a crayon together on a dare. He gives you the chin. You give it back. It feels like a sentence neither of you finishes.`),
 ch('Two thousand dollars from a Varga capo, for books.',[
  o(`Take it. Hug him. Say thank you, Tio.`,{tag:['Charm'],fx:{'rel.rui.trust':1,'rel.rui.loyalty':1,'flag:tookRuiMoney':true},led:'Took Tio Rui’s $2,000 envelope “for books.”',then:[
    s('rui',`That’s my boy. You need anything up there, anybody gives you trouble, you call your uncle. I mean it. Anything.`),
    n(`He means it. That’s the problem with Rui. He always means it.`)]}),
  o(`Take it, and quietly give it to Mãe for Pai’s problem.`,{tag:['Heart'],fx:{heart:1,'rel.rui.trust':1,'flag:tookRuiMoney':true,'flag:gaveMoneyToMae':true,debt:-2000},led:'Took Tio Rui’s $2,000 and slipped it to his mother toward his father’s debt.',then:[
    n(`Later, in the kitchen, you fold the envelope into your mother’s cardigan pocket. She feels the weight of it and goes very still.`),
    s('teresa',`Where did this come from?`),
    s('eli',`Books are a scam. I looked it up.`),
    n(`She doesn’t ask again. She knows exactly where it came from. She also knows exactly where it’s going. She kisses your forehead and says nothing at all, which in your family is a speech.`)]}),
  o(`Hand it back. “I’m good, Tio. Really.”`,{tag:['Nerve'],fx:{nerve:1,'rel.rui.trust':-1,'rel.teresa.trust':1,'flag:refusedRuiMoney':true},led:'Gave Tio Rui’s $2,000 back.',then:[
    n(`Rui looks at the envelope in his hand like it’s a dog that came back to him. Then he laughs, big, and tucks it into his jacket.`),
    s('rui',`Proud. The Costa disease. Your father had it too, before he caught the other one.`),
    n(`From the hood of the car, Joey watches you like you just did something either very brave or very stupid, and he hasn’t decided which.`)]}),
 ]),
 s('joey',`So you’re really doing it. College boy.`),
 s('eli',`Six miles, Joey. You can visit.`),
 s('joey',`Yeah? What do I wear, a sweater?`),
 n(`He says it like a joke. Then he looks at the house, and at your uncle, and at the box of Tupperware in your arms, and it isn’t one.`),
 s('joey',`Hey. Teddy’s been asking where your pops drinks now. Just, you know. FYI.`),
 fx({'rel.joey.trust':1},'Joey warned him that Teddy Ferro is looking for his father.'),
 n(`Then Rui whistles, and Joey slides off the hood and gets in the Lincoln, and they’re gone in a cloud of Sinatra.`),
 go('drive1')
];

/* ---------- THE DRIVE ---------- */
SC.drive1=[
 slug('INT. JOE’S ’04 BUICK LESABRE — CROSSING THE HARBOR BRIDGE — 1:15 P.M.'),
 n(`From the top of the Harbor Bridge you can see the whole city at once, which is the only time it ever looks like it’s on purpose.`),
 n(`To the west, the Heights: brick mansions and old money climbing the hill, the Corvane tower on top of it like a glass syringe. To the east, the Narrows, your whole life in triple-deckers and laundry lines. In between, the harbor: tankers, ferries, cranes, and at the end of a long concrete finger off the university campus, the new white dome of the Corvane Lumen Array, catching the sun like a pearl somebody dropped.`),
 n(`The radio is on WBRW. The radio is always on WBRW.`),
 NEWS('WBRW 1080 NEWS',['Corvane Dynamics to activate Lumen Array tonight at BSU orientation “First Light” ceremony','CEO Vivian Corvane: “Clean energy, made in Brightwater”','Protesters cite 1991 Kettle Point incident; Corvane calls comparison “irresponsible”','Gulls 0, Larkport 3 in preseason scrimmage']),
 s('joe',`Thirty years they talk about that reactor. Clean energy. You know what clean energy means? Means somebody else gets the dirty part.`),
 s('eli',`That’s actually kind of smart, Pai.`),
 s('joe',`I have my moments. Your mother married me during one.`),
 n(`He drives with one wrist and his whole heart, the way he always has. At the light on Commercial Street he clears his throat in the voice he uses for important things, which you have heard four times: your First Communion, your grandmother’s funeral, the day Danny got sentenced, and now.`),
 s('joe',`Listen. Up there they’re gonna look at you a certain way. The Narrows way. Like you’re there to fix the boiler. You let them. You let them think it, and then you beat them. That’s all. That’s the speech.`),
 s('eli',`That’s a good speech.`),
 s('joe',`I practiced in the shower. Your mother said cut the part about the Portuguese navy.`),
 ch('Your father is trying.',[
  o(`“Pai. Whatever’s going on with Teddy, let me help.”`,{tag:['Heart'],fx:{'rel.joe.trust':1,'flag:offeredJoeHelp':true},led:'Offered to help his father with the Teddy Ferro debt.',then:[
    n(`He laughs, and it cracks halfway through.`),
    s('joe',`You want to help? Graduate. Get rich. Buy me a boat.`),
    s('eli',`I’m serious.`),
    s('joe',`So am I. It’s a nice boat. Has a little bathroom.`),
    n(`He doesn’t say no. He doesn’t say yes. He just turns the radio up.`)]}),
  o(`Make him laugh. Do the Portuguese navy part.`,{tag:['Wit'],fx:{'rel.joe.loyalty':1},then:[
    n(`You do ninety seconds on the Portuguese navy in your grandmother’s voice, and your father laughs so hard he misses the light and a cab driver calls him a name that rhymes with nothing.`),
    s('joe',`See, that. That’s the Costa thing. Keep that. Up there, that’s worth more than money.`)]}),
  o(`Say nothing. Watch the city.`,{fx:{'flag:quietDrive':true},then:[
    n(`You watch the city go by and say nothing, and he lets you, and for six blocks it’s the most comfortable either of you has ever been.`)]}),
 ]),
 go('suite1')
];

/* ---------- SUITE 4C ---------- */
SC.suite1=[
 slug('INT. HALLORAN HALL, SUITE 4C — 2:05 P.M.'),
 n(`Halloran Hall was built in 1971 by someone who hated students and loved cinderblock. Suite 4C has two bedrooms, four beds, one bathroom, a common room the size of a confessional, and a window with a view of the harbor that somebody has already taped a Texas flag over.`),
 n(`The somebody is standing on a chair.`),
 s('tucker',`You must be Costa! Tucker Boone, Fort Worth, business major, future everything. That’s a joke. It’s not a joke. Grab a corner of this, would you?`),
 n(`Tucker Boone is six-two, sunburned, wearing boat shoes without a boat, and radiating the confidence of a man who has never once been told no in a way that stuck. He’s brought a mini-fridge, a Keurig, a framed photo of himself shaking hands with a Dallas Cowboy, and a laminated chore wheel with his own name conspicuously absent.`),
 n(`In the bedroom doorway, a slight guy in a pressed oxford is holding his phone at arm’s length. On it, two worried parents are looking at a ceiling.`),
 s('dev',`— I can’t show you the bathroom, Ma, there are people in it. No. No, I haven’t met them. One of them has a flag. Yes, a whole one.`),
 s('Dev’s dad (FaceTime)',`DEVESH. ARE THE OTHER BOYS PRE-MED.`),
 s('dev',`I’ll ask them, Papa. Love you. Bye. Bye. Bye. Love you. Bye.`),
 n(`He hangs up, takes a breath like he just surfaced from a pool, and turns to you with his hand out.`),
 s('dev',`Dev Banerjee. Edison, New Jersey. Pre-med, involuntarily. I’ve already unpacked by color and I can tell from your face that I need to apologize for that.`),
 s('eli',`Eli Costa. The Narrows.`),
 s('dev',`The Narrows! The neighborhood? The one my orientation packet told me not to walk through at night?`),
 s('eli',`It says that?`),
 s('dev',`It says “exercise situational awareness.” I read between the lines. It’s what I do. Nobody’s ever wanted me to, but I do it.`),
 n(`Your third roommate is on the floor of the second bedroom assembling something with eleven hundred parts. He has not looked up since you came in. He has a soldering iron, a laptop running three terminal windows, and the posture of someone who would like everybody to leave.`),
 s('kwame',`Kwame. Mechanical engineering. If anybody touches this, I will know, and I will tell your mother.`),
 s('eli',`What is it?`),
 s('kwame',`A 3D printer. I’m building it because the one they sell is bad, and I don’t like things that are bad.`),
 s('tucker',`He’s gonna print us a beer bong.`),
 s('kwame',`I am going to print a replacement hinge for the bathroom door, which is broken, which none of you noticed, because you’re animals.`),
 n(`You like him immediately.`),
 slug('INT. SUITE 4C — LATER'),
 n(`Move-in day unfolds like a hostage situation run by parents. Your mother inspects the bathroom with a face she usually saves for gunshot wounds and then cleans it, fully, with a bottle of bleach she brought in her purse. Your father finds Tucker’s father in the hallway, and within ten minutes two men who sell things for a living have recognized each other the way wolves do and are standing too close, talking about “opportunities.”`),
 s('dev',`Is your dad selling my dad a car? My dad doesn’t need a car. My dad has a Camry and a pacemaker.`),
 s('eli',`My dad doesn’t have a car to sell.`),
 s('dev',`That’s what worries me.`),
 n(`Then the RA arrives, and the temperature of the hallway goes up three degrees.`),
 n(`Lainey Fitzgerald is a senior, a psych major, and the kind of pretty that’s mostly velocity. She has a buzzed undercut, glitter on her collarbones at two in the afternoon, a lanyard with forty keys on it, and pupils a fraction too big for the light. She leans in the doorway like she owns the building and is thinking about selling it.`),
 s('lainey',`4C! My boys. I’m Lainey, I’m your RA, I’ve been on this floor three years and I have seen things that would turn your hair white. Floor rules. Rule One: no candles, they’re a fire hazard and they’re tacky. Rule Two: if you bring someone home, put a sock on the door, and I mean a sock, not a vibe. Rule Zero.`),
 s('tucker',`Why is Zero after Two?`),
 s('lainey',`Because it’s the important one, Texas. Rule Zero: don’t make me feel things. I’ve had a long summer.`),
 n(`She looks at each of you in turn like she’s reading your chart. On Dev, she lingers. Dev visibly forgets how to stand.`),
 s('lainey',`Pregame in 4A tonight before the First Light thing. It’s an educational program. Bring something to drink and a good attitude, in that order.`),
 n(`She winks, and is gone. Dev sits down on a bed that is not his.`),
 s('dev',`I think I’m going to need to be moved to a different floor. For health reasons. Mine.`),
 slug('INT. SUITE 4C — 4:30 P.M.'),
 n(`And then it’s time, and nobody wants it to be.`),
 n(`Your father hugs you with both arms and his whole back, which costs him something, you can tell. He tells you he’s proud of you in English and then again in Portuguese, the second time quieter, like it was for him. Bia gives you a hug that is mostly an elbow, and a USB stick labeled EMERGENCY, which she refuses to explain.`),
 n(`Your mother waits until the others are in the hallway.`),
 s('teresa',`I’m on nights all week. Mercy. If anything happens, anything, you come to the ER and you ask for me. Not the front desk. Me.`),
 s('eli',`Nothing’s going to happen, Mãe. It’s college.`),
 s('teresa',`You know what I see every night? College.`),
 n(`She puts her hand on your face. Her palm smells like bleach and onions. She has been steady all day, steady all week, steady your entire life, and for one second her chin goes.`),
 ch('Your mother is about to cry for the first time since 2019.',[
  o(`Hold her. Let her.`,{tag:['Heart +1'],fx:{heart:1,'rel.teresa.trust':1,'rel.teresa.loyalty':1},led:'Held his mother when she cried on move-in day.',then:[
    n(`You hold her, and she lets herself, for about four seconds, into your shirt. Then she pulls back and wipes her face with the back of her wrist like she’s scrubbing in.`),
    s('teresa',`Allergies. It’s the cinderblock.`),
    s('eli',`Sure, Mãe.`)]}),
  o(`Make her laugh before it happens.`,{tag:['Wit'],fx:{'rel.teresa.loyalty':1},then:[
    s('eli',`If I die of rice, tell people it was the rice’s fault.`),
    n(`She laughs, wet, and smacks your arm, hard.`),
    s('teresa',`Idiota. Don’t microwave the cracked one.`)]}),
  o(`Promise her. “I’ll come to you. If anything happens.”`,{tag:['Heart'],fx:{'rel.teresa.trust':2,'flag:promisedMae':true},led:'Promised his mother he’d come to her at Mercy if anything happened.',then:[
    n(`She looks at you for a long time, reading something on your face only she can read.`),
    s('teresa',`Promise me in Portuguese.`),
    n(`You do. She nods once, like she’s signed for a delivery.`)]}),
 ]),
 n(`Then they’re gone, and the room is suddenly very quiet and very full of Tucker.`),
 T('Group chat · 4C 👑 KINGS OF HALLORAN 👑',[
  ['tucker','welcome to the kingdom boys'],
  ['dev','I’m not comfortable with the name'],
  ['tucker','name is locked. i’m admin'],
  ['kwame','Dev Banerjee renamed the group “4C Hinge Committee”'],
  ['tucker','HOW'],
  ['kwame','I gave Dev admin. Dinner?'],
 ]),
 ch('Dinner. You know a place.',[
  o(`“I know a place. Trust me.”`,{tag:['Charm'],fx:{'rel.dev.trust':1,'rel.kwame.trust':1},then:[]}),
 ]),
 go('albatross1')
];

/* ---------- THE ALBATROSS ---------- */
SC.albatross1=[
 ['act','Act Two · The Albatross'],
 slug('INT. THE ALBATROSS — PIER 9, THE NARROWS — 6:10 P.M.'),
 n(`The Albatross has been on Pier 9 since 1958 and looks it. Diner by day, bar by night, and in the hour between, both at once: eggs on one side, Narragansett on the other, a jukebox that only plays songs about leaving, and a mounted albatross over the register that someone shot in 1961 and nobody has forgiven.`),
 n(`The booth in the back corner has your initials carved into it from when you were nine. It has Danny’s from when he was twelve. It has Joey’s, misspelled.`),
 s('dev',`I want to be clear that I love it here and I believe I will be murdered.`),
 s('tucker',`This is so authentic. Is that a real harpoon?`),
 s('nanda',`It’s a real harpoon, and it’s for people who ask if it’s a real harpoon.`),
 n(`Fernanda Pires comes out from behind the bar wiping her hands on a dishrag. Sixty-something, built like a mooring post, voice like a cigarette that’s been through a war. She was a fishing captain for thirty years and your godmother for eighteen. She grabs your face with both hands and turns it left and right like she’s checking a fish for freshness.`),
 s('nanda',`You look thin.`),
 s('eli',`I ate four hours ago, Nanda.`),
 s('nanda',`Four hours. Listen to him. Sit. All of you sit. I’m bringing food, you’re eating it, nobody orders, ordering is for tourists.`),
 n(`She brings food. It is, in order: caldo verde, a plate of linguiça and peppers, fried clams, a basket of bread the size of a toddler, and four Cokes she has opened and spiked from a flask without asking anybody, while staring directly at Tucker, daring him.`),
 n(`Tucker is in love. Kwame eats with the focus of a man defusing a bomb. Dev tries everything and narrates it.`),
 s('dev',`The soup is green. It’s supposed to be green? This is incredible. I’ve never eaten a sausage that had a story.`),
 slug('INT. THE ALBATROSS — LATER'),
 n(`By the time the bread is gone, the room has turned over from families to longshoremen, and the longshoremen have turned over to the kind of guys who come to the Albatross because nobody looks at you twice there.`),
 n(`One of them is looking at Dev three times.`),
 n(`He’s a big man in a Varga Seafood windbreaker, drunk at a level you can smell from the booth. He’s been watching your table since Tucker said “authentic.” Now he walks over, sets both fists on the edge of the table, and leans in until his face is a foot from Dev’s.`),
 s('Dockhand',`You lost, Gandhi? This ain’t a college bar.`),
 n(`Dev goes very still in the way you go still when this has happened before, a lot, and you’ve learned exactly how still to be.`),
 s('dev',`Just eating soup, sir. Very good soup.`),
 s('Dockhand',`Yeah? You like our soup?`),
 n(`He picks up Dev’s bowl and slowly pours what’s left of it into Dev’s lap.`),
 n(`Tucker half stands. Kwame’s hand closes around his fork. Behind the bar, Nanda’s right hand has gone under the counter, where the shotgun lives.`),
 n(`You know this guy. Not his name, but his kind. You grew up between his kind. And you know exactly how this goes if a college kid swings first in the Albatross.`),
 BEAT('The man is waiting for someone to do something.',[
  o(`Stand up. Get in his face. Make him back down.`,{ap:'Force',stat:'nerve',dc:9,id:'albatross',fx:{'flag:albatrossForce':true},out:{
    clean:[n(`You stand up slow, so he can see how tall you are, and you say four words to him in Portuguese that your grandmother would have slapped you for. His eyes go from Dev to you. He sees the Narrows on you. He sees Rui Costa’s nephew, because everybody in the Varga windbreaker knows whose nephew you are.`),
      n(`He puts the bowl down. He says “Relax, it’s a joke,” to nobody, and goes back to the bar.`),
      fx({'trk.hood':1,'rel.dev.loyalty':1,'rel.dev.trust':1},'Faced down a drunk Varga dockhand who humiliated Dev at the Albatross.')],
    costly:[n(`You stand. He shoves you. You don’t go down, but the booth edge catches you right in the kidney and white pain blooms up your back. You get back in his face anyway. It’s a standoff long enough for Nanda to say his name, one word, like a gun cocking, and he leaves.`),
      fx({'rel.dev.loyalty':1,'trk.hood':1},'Got shoved into a booth facing down a drunk Varga dockhand for Dev.')],
    collateral:[n(`You stand. He swings. You duck, and his fist goes through the framed 1974 photo of the Albatross softball team, which explodes in glass across three tables. He howls. Nanda comes over the bar like a woman half her age with a shotgun pointed at the ceiling, and the night is over.`),
      s('nanda',`OUT. You, out. You — sit. Pay for my softball team.`),
      fx({'rel.nanda.trust':-1,'rel.dev.loyalty':1},'Started a fight at the Albatross that broke Nanda’s 1974 softball photo.')],
    fail:[n(`You stand. He hits you. It’s a professional punch, a guy who’s been hitting people since before you were born, and it lands right on your cheekbone and the world goes sideways. You end up on the floor of the Albatross looking at gum under a table. Nanda drags him out by the collar. Dev holds a bag of frozen clams to your face, shaking.`),
      s('dev',`That was very brave and extremely stupid, and I want you to know I’m going to remember it for the rest of my life.`),
      fx({'rel.dev.loyalty':2,strain:1},'Got knocked down defending Dev at the Albatross.')]}}),
  o(`Defuse it. Talk to him like a neighbor.`,{ap:'Talk',stat:'charm',dc:8,id:'albatross',out:{
    clean:[n(`You ask him how his shift was. You ask if he’s at Pier 6 with Manny Teixeira. You say your father worked Pier 6 for twenty years, Joe Costa, you know Joe? And the anger runs out of him like water from a cracked bucket, because he does know Joe, everybody knows Joe, and now he’s a guy who poured soup on a friend of Joe’s kid.`),
      s('Dockhand',`Ah, shit, kid. I didn’t — tell your pops Sully says hi.`),
      n(`He leaves twenty bucks on the table for Dev’s dry cleaning. Dev stares at it like it’s a live animal.`),
      fx({'trk.hood':1,'rel.dev.trust':1,'rel.nanda.trust':1},'Talked down a drunk dockhand named Sully at the Albatross.')],
    costly:[n(`It mostly works. He calls you a college faggot on his way out, which is the kind of thing you hear in the Narrows the way you hear gulls, and you let it go, and you hate that you let it go. Kwame watches you let it go.`),
      fx({'rel.kwame.trust':-1,'rel.dev.trust':1},'Talked down a drunk dockhand and let his slur slide.')],
    collateral:[n(`You say the wrong name. You say your uncle’s name, Rui Costa, and the guy’s face changes from drunk to scared, and he leaves fast, and Dev looks at you like he’s figuring something out about you.`),
      s('dev',`Who’s Rui Costa?`),
      s('eli',`My uncle. He’s, uh. In seafood.`),
      fx({'rel.dev.trust':-1,'trk.hood':1,'flag:usedRuiName':true},'Used Tio Rui’s name to scare off a drunk at the Albatross.')]}}),
  o(`Grab Dev and get your friends out.`,{ap:'Escape',stat:'wit',dc:7,id:'albatross',out:{
    clean:[n(`“We’re late for a thing,” you announce, and you have Dev up and moving and Tucker by the collar and Kwame already at the door, and you’re outside in the salt air before the guy finishes deciding what to do. Nanda shakes her head at you through the window: not disappointed. Approving. The Narrows rule: live to eat soup another day.`),
      fx({'rel.nanda.trust':1,'rel.dev.trust':1},'Got his roommates out of a bad situation at the Albatross.')],
    costly:[n(`You get everybody out, but Tucker turns around in the doorway to say something Texan and heroic and the man throws a beer bottle, which hits the doorframe an inch from Tucker’s head and showers you all with glass and Narragansett.`),
      s('tucker',`I think I want to go home. Not home home. The dorm. Mommy.`)]}}),
 ]),
 slug('EXT. PIER 9 — DUSK'),
 n(`Outside, the harbor is going pink and gold. Across the water, on the end of the BSU research pier, the Lumen Array’s dome has started to glow faintly, a soft white like a lamp left on in another room. Long lines of students are already walking toward it.`),
 n(`Dev is wringing soup out of his pants. Tucker is on the phone telling someone in Texas he “just survived a bar fight in the hood.” Kwame comes up next to you at the railing.`),
 s('kwame',`Your neighborhood is very honest.`),
 s('eli',`That’s one word for it.`),
 s('kwame',`It’s a compliment. Where I grew up, people pour the soup on you with a smile.`),
 IF(()=>F('albatrossForce')||G.flags['tier:albatross']==='fail',[
   s('kwame',`For the record, you’re an idiot. A useful idiot. Those are rarer than people think.`),
   fx({'rel.kwame.trust':1})]),
 n(`Behind you, Nanda has come out onto the pier for a cigarette. She isn’t smoking it. She’s staring across the water at the glowing dome, and her hand is wrapped around her own left wrist, where she has a scar like a white bracelet you’ve never once heard her explain.`),
 s('nanda',`Weather’s coming.`),
 s('eli',`It’s clear, Nanda. Not a cloud.`),
 s('nanda',`I didn’t say clouds.`),
 n(`She stubs out the cigarette she never lit and goes back inside without another word.`),
 go('pregame1')
];

/* ---------- PREGAME ---------- */
SC.pregame1=[
 slug('INT. HALLORAN HALL, ROOM 4A — 8:40 P.M.'),
 n(`Room 4A is a single, technically. Tonight it has forty people in it, a strobe light from Amazon, a kiddie pool full of ice and White Claw, and a Bluetooth speaker playing something with a bass line you can feel in your fillings.`),
 n(`Lainey is everywhere at once. She dances with a girl from 4D, takes a shot with a guy from 4F, fixes someone’s eyeliner, kicks someone out for vaping wrong, and somewhere in between, presses something into the palm of anyone who holds a hand out. She is the center of the room the way a drain is the center of a sink.`),
 n(`A girl you’ve never seen before is standing on Lainey’s desk chair, filming the whole party with a phone on a gimbal and narrating into a clip-on mic.`),
 s('rosie',`— the freshman pregame, a sacred rite in which the children of the upper middle class pretend they’ve done this before. Note the White Claw. Note the boy in the boat shoes approaching me with intent —`),
 s('tucker',`Hey. I’m Tucker. I’m in business.`),
 s('rosie',`You’re eighteen.`),
 s('tucker',`In spirit.`),
 s('rosie',`Rosie Kim. Journalism. I write for The Beacon, and everything you say to me can and will be used in my debut piece about the moral bankruptcy of Greek life.`),
 s('tucker',`I’m not even in Greek life.`),
 s('rosie',`You will be. You have the face of a man who’s going to be paddled.`),
 n(`Tucker, who has never in his life been spoken to like this, looks like he’s been hit with a sock full of quarters and loved it.`),
 n(`In the corner, Dev is standing very close to Lainey, who is telling him something with one hand flat on his chest. Dev has the expression of a hostage who has fallen in love with the bank.`),
 n(`Lainey sees you looking. She detaches from Dev, slides through the crowd, and stops in front of you, close, closer than a stranger stands. She smells like vanilla vodka and something chemical underneath.`),
 s('lainey',`The Narrows kid. You’re the one who looks like he’s waiting for the cops.`),
 s('eli',`It’s my natural face.`),
 s('lainey',`It’s a good face. Very “I’ll fix your car and ruin your life.”`),
 n(`She holds up her hand, palm down, between you. Under it, when she turns it, are two small white pills.`),
 s('lainey',`Molly. Clean, I tested it, I’m not a monster. Tonight’s the night. The sky’s gonna light up and the whole harbor’s gonna be watching and I want everybody I love to feel it.`),
 s('eli',`You just met me.`),
 s('lainey',`I fall in love fast. It’s a medical condition.`),
 ch('The pill sits in her palm. The bass sits in your teeth.',[
  o(`Take it. Tonight’s the night.`,{tag:['Nerve'],fx:{'flag:tookMolly':true,'rel.lainey.desire':1,'rel.lainey.trust':1},led:'Took a hit of molly from Lainey at the First Light pregame.',then:[
    n(`You put it on your tongue. It tastes like chalk and a decision. Lainey grins like you just told her a secret, takes the other one herself, and kisses you on the cheek, wet and quick.`),
    s('lainey',`Forty-five minutes. Then everything’s beautiful.`),
    n(`You’ll remember, later, that she was right about the forty-five minutes, and wrong about everything else.`)]}),
  o(`“I’m good. I want to remember tonight.”`,{tag:['Control'],fx:{control:1,'flag:soberGlassNight':true},led:'Turned down molly at the pregame. Was sober on Glass Night.',then:[
    n(`She looks at you for a second longer than you’d expect, and something passes over her face that isn’t party at all.`),
    s('lainey',`Smart. Stay smart, Narrows. Somebody on this floor has to.`),
    n(`She closes her hand and takes both of them herself, one after the other, like aspirin.`)]}),
  o(`Take it from her hand and put it in your pocket. Save it.`,{tag:['Wit'],fx:{'flag:pocketedMolly':true,'rel.lainey.trust':1},led:'Took Lainey’s molly and pocketed it instead of taking it.',then:[
    n(`You take it and slide it into your jeans with a wink you hope reads as “later” and not “narc.”`),
    s('lainey',`A man with a plan. I respect it.`)]}),
 ]),
 n(`Someone kills the music. Someone else opens the window. From across the campus, down at the water, you can hear the string quartet starting.`),
 s('lainey',`Let’s go see the light, babies.`),
 go('pier1')
];

/* ---------- THE PIER ---------- */
SC.pier1=[
 ['act','Act Three · First Light'],
 slug('EXT. BSU RESEARCH PIER — 10:15 P.M.'),
 n(`Three thousand people on a concrete pier built for three hundred. Freshmen in orientation T-shirts. Faculty in rented tuxes. Donors in real ones. News vans, a drone, a string quartet sawing through Vivaldi on a riser, and at the far end, behind a chain-link fence and a line of Corvane security in navy polos, the Lumen Array: a white dome four stories high, sitting on the water like an egg in a nest of cable.`),
 n(`On a stage under the dome, a woman in a white suit is talking into a microphone without notes.`),
 s('corvane',`Brightwater’s motto is carved over City Hall: <i>Lux ex aqua.</i> Light out of the water. For a hundred and fifty years we thought that was poetry. Tonight it becomes engineering.`),
 n(`Vivian Corvane is in her fifties and looks like a magazine’s idea of a scientist: silver bob, no jewelry, a voice so warm you want to lend her money. The crowd loves her. You can feel it from the back.`),
 s('corvane',`To the class of 2030: you are the first students on Earth who will study next to a star. I can’t wait to see what you become.`),
 n(`Applause. Phones up. You’re standing near the edge of the crowd with your roommates, and near you, half-hidden by a light tower, two people are not applauding.`),
 n(`One is a tall man in a corduroy jacket with a lanyard that says BSU PHYSICS · DR. E. THORNE. The other is a Corvane technician holding a tablet against his chest like a shield.`),
 s('thorne',`— the resonance numbers were not stable at four o’clock, and they are not stable now, and you are going to run it at full aperture in front of three thousand children —`),
 s('Corvane tech',`Dr. Corvane signed off on the —`),
 s('thorne',`I know exactly what Vivian signed.`),
 n(`The technician walks away. Thorne stands there with his hands in his pockets, watching the dome. Then he notices you noticing him. He holds your gaze for a second, and then, to your surprise, he walks over.`),
 s('thorne',`You’re a freshman?`),
 s('eli',`Kinesiology.`),
 s('thorne',`Well. Do me a favor, Kinesiology. When they turn it on, watch from the back.`),
 ch('A physics professor just told you to stand back from a nuclear-adjacent thing.',[
  o(`“Is it dangerous?”`,{tag:['Wit'],fx:{'rel.thorne.trust':1,'flag:askedThorne':true},then:[
    s('thorne',`Everything worth doing is dangerous. Most dangerous things are not worth doing. The difficulty is telling them apart before rather than after.`),
    s('eli',`That’s not an answer.`),
    s('thorne',`No. It’s a syllabus. Physics 101, Tuesdays and Thursdays. Come find out.`)]}),
  o(`“Then why are you here?”`,{tag:['Nerve'],fx:{'rel.thorne.trust':1,'flag:challengedThorne':true},then:[
    n(`He considers you with something like respect.`),
    s('thorne',`Because I helped build it, and a man should watch his own mistakes.`)]}),
  o(`Laugh it off. “Sure thing, Doc.”`,{then:[
    n(`He nods like he expected that, and goes back to watching the dome.`)]}),
 ]),
 n(`When you turn back, Dev is gone (following Lainey toward the front, in what he will later describe as “a tractor beam situation”), Tucker is following Rosie, who is following a donor, and Kwame is arguing with a Corvane engineer about cable gauges. The crowd is a wall of bodies and bass and phone light.`),
 IF(()=>F('tookMolly'),[n(`And the molly is starting to come up. Everything is softening at the edges. The string quartet sounds like it’s playing directly into your spine. A stranger touches your arm and it feels like a sunrise. You need air. You need the edge of something.`)],
   [n(`You need air. You need the edge of something. You always do, in crowds. The Narrows teaches you to know where the exits are.`)]),
 n(`So you walk out along the side of the pier, past the light towers, past the end of the crowd, past a sawhorse that says AUTHORIZED PERSONNEL ONLY, out to where the railing runs along the water in the dark and the dome is close enough that you can hear it humming.`),
 n(`Somebody’s already there.`),
 slug('EXT. RESEARCH PIER — THE RAIL — 11:20 P.M.'),
 n(`She’s sitting on the bottom rung of the railing with her legs through it, dangling over the harbor, a camera with an actual film canister in it pressed to her eye, pointed at the dome. Two tallboys of Narragansett are sweating on the boards next to her.`),
 n(`She’s small, dark-haired, in a too-big BSU hoodie and black jeans with the knees gone. She takes the picture, winds the film with her thumb, and says without looking at you:`),
 s('iris',`If you’re security, I’m a journalism student. If you’re a journalism student, I’m security.`),
 s('eli',`What if I’m neither?`),
 s('iris',`Then you’re trespassing. Same as me. Sit down, you’re in my light.`),
 n(`You sit. She hands you a beer without asking. The can is cold and sweating, and her fingers touch yours for half a second, and that half-second is, for reasons you won’t understand for years, the most important thing that happens to you tonight.`),
 s('iris',`Iris.`),
 s('eli',`Eli.`),
 s('iris',`Eli what?`),
 s('eli',`Costa. From the Narrows.`),
 s('iris',`Navarro. From Coldharbor. Which is the Narrows if the Narrows gave up.`),
 n(`You know Coldharbor. Everybody knows Coldharbor. It’s an hour up the coast, a mill town where the mills closed in the eighties and the town forgot to. You say so. She laughs, short, surprised, like she wasn’t planning to.`),
 ch('She’s pointing a film camera at a fusion reactor.',[
  o(`“Film? What year do you think it is?”`,{tag:['Wit'],fx:{'rel.iris.desire':1},then:[
    s('iris',`Digital lies. Film is chemistry. Light hits the silver, the silver changes forever. There’s no undo.`),
    s('eli',`That sounds terrifying.`),
    s('iris',`It’s the only honest thing I own.`)]}),
  o(`“What are you hoping to catch?”`,{tag:['Heart'],fx:{'rel.iris.trust':1,'rel.iris.seen':1},then:[
    n(`She lowers the camera and looks at you for the first time, really looks, like she’s deciding what kind of question it was.`),
    s('iris',`The moment right before something happens. Everybody photographs the explosion. Nobody photographs the second before, when it’s still possible it won’t.`)]}),
  o(`Just watch her work. Don’t say anything.`,{tag:['Control'],fx:{'rel.iris.seen':1,'rel.iris.trust':1},then:[
    n(`You don’t say anything. She takes three more shots, winding between each one, and the silence isn’t awkward. It’s the kind of silence you only get with people you’ve known a long time, or people you’re about to.`),
    s('iris',`You’re very quiet for a guy from the Narrows.`),
    s('eli',`We’re loud in groups. Alone we just look at stuff.`)]}),
 ]),
 n(`You talk. It’s easy, the way it almost never is. She’s astrophysics and photography, which she describes as “the same major with different debt.” She’s on the Presidential Scholarship, which means she has to keep a 3.7 or go home, and she says “home” the way people say “prison.” Her grandmother raised her. She doesn’t mention her mother, and the way she doesn’t mention her is so precise you can see the outline of the hole.`),
 n(`You tell her about Danny. You don’t know why. You haven’t told anyone at BSU about Danny, and you’ve been here eleven hours, and you tell her about the lookout and going home and the eleven times you’ve read the letter, and she doesn’t say anything stupid. She doesn’t say she’s sorry. She just nods, like you told her the time.`),
 s('iris',`You know the light from stars is old? You look up and see a star, but you’re seeing what it was a thousand years ago. It could be dead. Everything you see is old news.`),
 s('eli',`That’s depressing.`),
 s('iris',`No. It means you’re always looking at the past. So you can stop being scared of it. It already happened. The light’s already on its way.`),
 IF(()=>F('tookMolly'),[n(`The molly takes that sentence and puts it somewhere very deep in you, and you feel your eyes get hot, and you look at the water so she won’t see. She sees anyway. She doesn’t say anything about that either.`)]),
 n(`There’s a moment, then. You both feel it. The dome humming behind you, the crowd a quarter-mile off like a radio in another room, her shoulder an inch from yours on the railing, her face turned toward you in the white glow.`),
 ch('The moment right before something happens.',[
  o(`Kiss her.`,{tag:['Nerve'],req:['nerve',2],fx:{'rel.iris.desire':2,'flag:kissedIrisPier':true},led:'Kissed Iris Navarro on the research pier minutes before Glass Night.',then:[
    n(`You kiss her. Or she kisses you; later neither of you will agree. Her mouth tastes like cheap beer and cold air and something electric, like licking a battery, and her hand comes up and fists in the front of your shirt like she’s keeping you from going somewhere.`),
    n(`It lasts about six seconds. Then she pulls back, eyes wide, not upset, startled, the way you’d look if you’d touched a stove you thought was off.`),
    s('iris',`That was —`),
    s('eli',`Yeah.`),
    s('iris',`I have a — there’s a guy. Sort of. A TA. It’s new. It’s — I don’t know what it is.`),
    s('eli',`Okay.`),
    s('iris',`I’m not saying I’m sorry.`),
    s('eli',`I didn’t ask you to.`)]}),
  o(`Tell her the truth: “I’m really glad I walked out here.”`,{tag:['Heart'],fx:{'rel.iris.trust':2,'rel.iris.seen':1,'flag:honestIrisPier':true},led:'Told Iris he was glad he found her on the pier.',then:[
    n(`She looks at you for a long, long second, and for one moment you think she’s going to kiss you. Then she looks down at her camera instead and smiles at it, small and private, like the camera told her a joke.`),
    s('iris',`Me too, Narrows. Me too.`),
    s('iris',`I should tell you, I’m sort of seeing someone. It’s new. It might be nothing.`),
    s('eli',`Might be nothing is my favorite kind of something.`),
    s('iris',`Oh, you’re trouble.`)]}),
  o(`Make a joke. Let the moment pass.`,{tag:['Wit'],fx:{'rel.iris.trust':1,'flag:jokedIrisPier':true},then:[
    s('eli',`So, uh. Do you come to illegal reactor sites often?`),
    n(`She laughs, and the moment goes out like a tide. You both feel it go. Neither of you reaches for it.`),
    s('iris',`Only on first dates.`),
    n(`She says it as a joke. She hears it, after, and so do you. She goes a little red in the white light.`)]}),
 ]),
 n(`That’s when you notice the gulls have stopped.`),
 go('glass1')
];

/* ---------- GLASS NIGHT ---------- */
SC.glass1=[
 slug('EXT. RESEARCH PIER — THE RAIL — 11:52 P.M.'),
 n(`The hum comes up through the boards. Into your sneakers. Into your back teeth. The harbor has gone flat as glass. Behind you, three thousand people are counting down from ten, and somewhere in the count the dome stops being white and starts being <i>bright</i>, in a way that hurts to look at even sideways.`),
 n(`Iris is on her feet with the camera up.`),
 s('iris',`Something’s wrong. Eli, that’s not — the light’s coming from inside the water —`),
 s('walt',`Get back! Both of you, off the pier, right now —`),
 n(`The guard is running toward you from the fence. Older, heavy, Corvane patch, a flashlight he’s forgotten to turn on. His name tag says W. DEMPSEY. You’ll learn that later from the news.`),
 n(`The countdown hits zero.`),
 PANEL('','11:52 P.M. Every light in Brightwater goes out. One light comes on.','light'),
 n(`The sky over the harbor turns white.`),
 n(`It isn’t lightning. Lightning is a line. This is everything. The whole sky, horizon to horizon, as white as a sheet of paper, and every shadow in the city vanishing at once, so for a second Brightwater looks like a drawing of itself that nobody finished.`),
 n(`There’s no sound. That’s the part you’ll never be able to explain. Your phone is dead in your pocket. The quartet has stopped. The countdown has stopped. Three thousand people have stopped breathing at once, and the silence is so total you can hear your own heart, and then you can’t, because something is wrong with your heart. It’s going too fast and too slow. It feels like it belongs to someone else.`),
 n(`Then the pier lifts.`),
 n(`The concrete under you rises like a breath, a foot, two, and the railing Iris is holding tears out of its bolts with a scream of metal you feel more than hear, and she goes over the side toward the black water with her camera still in her hand.`),
 BEAT('Iris is going over. The pier is coming apart. The guard is ten feet away.',[
  o(`Lunge for her. Grab whatever you can reach.`,{ap:'Force',stat:'nerve',dc:8,id:'glass',fx:{'flag:grabbedIris':true},out:{
    clean:[n(`You get her wrist. You get it clean, your hand around her forearm, your body flat on the heaving concrete, and her full weight comes onto your shoulder with a pop you’ll feel for a month. She’s hanging over nothing. The water below is glowing.`)],
    costly:[n(`You get her hoodie, then her wrist. The concrete edge takes a strip of skin off your forearm from elbow to wrist as you slide, and you stop with your chest hanging over the edge and her whole weight on your arm and the water below glowing.`),fx({scar:'Glass Night forearm, elbow to wrist'})],
    collateral:[n(`You get her wrist, but the slide takes you with her. You go over the edge to your waist, then your hips, your free hand clawing at a cable that cuts into your palm. Below you, the water is glowing.`)],
    fail:[n(`You miss. Your hand closes on air and on the strap of her camera, which snaps. She goes over. You go over after her, headfirst, toward water that is glowing.`)]}}),
  o(`Grab the guard. Get him back, and get her too.`,{ap:'Improvise',stat:'heart',dc:9,id:'glass',fx:{'flag:triedSaveWalt':true},led:'On Glass Night, he tried to save the guard too.',out:{
    clean:[n(`You get one hand in the guard’s jacket, and he gets one hand on Iris’s hood, and for a second the three of you are a chain over the edge. The water below is glowing. Dempsey is looking past you at something. He’s saying something you can’t hear.`)],
    costly:[n(`You reach for the guard and he reaches for her, and his weight comes onto your arm, and something in your shoulder tears with a wet pop, and the three of you are hanging off the pier in a chain. The water below is glowing.`)],
    collateral:[n(`You get the guard. He gets her. You’re all three going over together, the concrete slab tipping under you like the deck of a sinking ship.`)],
    fail:[n(`You reach for both of them and get neither, and the slab tips, and all three of you go into the light.`)]}}),
  o(`Throw yourself over her. Shield her from whatever this is.`,{ap:'Finesse',stat:'control',dc:8,id:'glass',fx:{'flag:shieldedIris':true},out:{
    clean:[n(`You get your body between her and the dome, both arms around her, and you go over the side together with your back to the light. You feel it on your spine like a hand made of noon.`)],
    costly:[n(`You get your body over hers, and the light hits your back like the sun leaning on you with its whole weight. You smell your hoodie burning. You go over the side together.`)],
    fail:[n(`You get to her too late. You both go over, tangled, not a rescue, just two people falling.`)]}}),
 ]),
 n(`And then the second light.`),
 n(`It’s close. Impossibly close. It isn’t from the dome. It’s from somewhere right in front of you, below you, between you, and it comes out of nowhere like a flashbulb the size of a house. In the whiteness of everything, it is whiter. You can’t look at it. You can’t not. You think it’s the reactor. You think it’s the end of the world. You think, for no reason, of your mother saying <i>you come to the ER and you ask for me</i>.`),
 n(`Behind you, there’s a sound. It’s the only sound you hear the whole time, and it’s a man screaming, and then it isn’t.`),
 n(`Then something hits you.`),
 n(`It’s like being hit by the whole world. Every ton of the collapsing pier, every foot of the fall, every bit of force in the light, all of it, at once, coming into your body like water into a drain. You should be dead. You are absolutely, physically certain you should be dead, and instead you feel it go <i>into</i> you. Into your bones. Into your blood. You are full of it. You are a glass filled past the rim and the meniscus is holding.`),
 PANEL('KRAKOOM','The pier comes apart. Eli Costa does not.','red'),
 n(`Then black water. Then black.`),
 ['card','11:53 P.M.','<em>Nine minutes</em>','Every phone in Brightwater is dead for nine minutes. On Gull Point Beach, the sand turns to glass.'],
 go('hospital1')
];

/* ---------- MERCY GENERAL ---------- */
SC.hospital1=[
 ['act','Act Four · Mercy'],
 slug('INT. MERCY GENERAL HOSPITAL, EMERGENCY DEPARTMENT — 2:40 A.M.'),
 n(`You wake up to your mother’s voice saying your name like a code.`),
 s('teresa',`Eli. Eli. Look at me. Follow my finger. Don’t talk. Follow it. Good. Good boy. What’s your name?`),
 s('eli',`You just said it.`),
 s('teresa',`Don’t be a smartass, I’m doing a neuro check.`),
 n(`You’re on a gurney in a hallway because every room is full. The ER is the loudest place you’ve ever been: alarms, crying, a man shouting in Haitian Creole for his daughter, a dozen nurses moving in the controlled sprint of a mass-casualty night. Every TV on every wall is showing the harbor. Your mother is in blue scrubs with somebody else’s blood on her sleeve, shining a penlight in your eyes, and her hands are perfectly steady and her face is not.`),
 s('teresa',`They pulled you out of the water under the research pier. You were holding onto a girl. You wouldn’t let go. It took two EMTs to get your fingers open.`),
 n(`You try to sit up and she pushes you flat with one hand, without effort, like she’s done it to a thousand men.`),
 s('teresa',`Your CT is clean. Your X-rays are clean. You fell forty feet onto broken concrete and you have a bruise on your hip. Do you understand that I don’t understand that?`),
 IF(()=>G.scars.length>0,[n(`She turns your arm over. The long raw stripe from your elbow to your wrist is there, red, ugly. It’s the only thing on you. She looks at it like it’s the only thing on you that makes sense.`)]),
 n(`You feel fine. That’s the problem. You feel better than fine. You feel like you drank a pot of coffee and won a fight. Your skin is buzzing. Your hands want to hold something. There’s a fullness in your chest like a breath you can’t let out, and when you ball your fist on the gurney rail, the steel creaks.`),
 n(`You open your hand fast. Your mother doesn’t notice. She’s looking at the TV.`),
 NEWS('BRIGHTWATER 7 · BREAKING',['“GLASS NIGHT”: Lumen Array malfunction causes citywide blackout, pier collapse','3 confirmed dead: BPD Sgt. Paul Brandt, 44; BSU freshman Kayla Moss, 18; Corvane security officer Walter Dempsey, 61','Dozens injured, hundreds treated for shock','All phones and electronics citywide dead for 9 minutes, cause unknown','Gull Point Beach sand fused into glass “flowers”','Corvane Dynamics: “We are heartbroken. We will find out what happened.”']),
 n(`Walter Dempsey, 61. The guard with the flashlight he never turned on.`),
 n(`You remember the screaming. You remember it stopped.`),
 n(`Kayla Moss, 18, was a freshman from Larkport who was standing at the front of the crowd. Later you will read that a sheet of glass from the dome came down across the stage like a guillotine, and that Kayla’s roommate was holding her hand when it happened, and walked into this ER still holding it. You won’t ever be able to unread it.`),
 s('teresa',`I have to go back on the floor. Don’t move. If you move, I’ll know. There’s a girl in bed nine who keeps asking for you.`),
 slug('INT. MERCY GENERAL — BED NINE — 3:15 A.M.'),
 n(`You move. Obviously.`),
 n(`Bed nine is behind a curtain at the end of the hall. You pull it back an inch. Iris is sitting up on the bed with a shock blanket around her shoulders and both of her hands wrapped in white gauze to the wrist. Her hair is still wet with harbor. She looks like someone who has seen something and is trying very hard to decide that she didn’t.`),
 n(`When she sees you, her whole body jolts like she touched a live wire.`),
 s('iris',`You’re okay.`),
 s('eli',`I’m okay. Are you — your hands —`),
 s('iris',`Burns. From the — from the rail. It was hot. Or the light. I don’t know.`),
 n(`She says it too fast. She’s holding her wrapped hands in her lap the way you’d hold something you were scared would go off.`),
 s('iris',`You held on. They said you held on to me the whole way down. You saved my life.`),
 n(`You don’t remember holding on. You remember the light, the second light, so close. You remember being full. But she’s looking at you like you’re the only solid thing in the building, and her voice is shaking, and you’re a Costa, and Costas don’t say “I don’t remember” to a girl who says you saved her life.`),
 ch('She says you saved her life.',[
  o(`“I don’t really remember. I just didn’t let go.”`,{tag:['Heart'],fx:{'rel.iris.trust':2,'rel.iris.seen':1,'flag:honestHospital':true},led:'Told Iris he didn’t really remember saving her.',then:[
    n(`Something crosses her face that you can’t read: relief, guilt, grief, something with all three in it.`),
    s('iris',`That’s enough. Not letting go is enough.`)]}),
  o(`“Anytime, Coldharbor.”`,{tag:['Charm'],fx:{'rel.iris.desire':1,'flag:herohospital':true},led:'Let Iris believe he saved her on Glass Night.',then:[
    n(`She laughs, a broken sound, and puts her wrapped hand over her mouth. When she takes it away, she’s almost crying.`),
    s('iris',`Don’t make me laugh. Everything hurts.`)]}),
  o(`Sit down next to her. Don’t say anything.`,{tag:['Control'],fx:{'rel.iris.trust':1,'rel.iris.loyalty':1},then:[
    n(`You sit on the edge of the bed. After a while she leans, just slightly, until her shoulder is against your arm. Neither of you says anything for eleven minutes. You count.`)]}),
 ]),
 n(`Her camera is on the bedside table. The lens is cracked. The back has popped open, and the film is hanging out of it in a long ruined curl, exposed. Every frame blown out white.`),
 s('iris',`Everything I shot tonight. Gone.`),
 s('eli',`The moment right before.`),
 s('iris',`Yeah. I missed it.`),
 n(`She’s looking at the film. You’re looking at her. Neither of you is looking at the gauze on her hands, which, in the dim light behind the curtain, for a second, you could swear is glowing faintly from inside, like a lamp under a blanket.`),
 n(`You blink, and it isn’t.`),
 fx({'flag:sawGauzeGlow':true}),
 slug('INT. MERCY GENERAL — HALLWAY — 3:50 A.M.'),
 n(`There are people in the hallway who aren’t hospital. Navy polos, Corvane lanyards, rolling carts with sealed plastic kits. A young woman with a clipboard and a sympathetic voice is going bed to bed.`),
 s('Corvane rep',`Hi there. Corvane Dynamics is offering free toxicology screening to everyone who was on the pier. Totally voluntary, just a blood draw. We want to make sure nobody was exposed to anything harmful. Can I put you down?`),
 n(`Behind her, a man in a suit is reading a list on a tablet. Your name is on it. You can see it from here. <i>COSTA, ELIAS. DISTANCE FROM ARRAY AT T-ZERO: 31 M.</i> There’s a red dot next to it. There are red dots next to only six names on the screen.`),
 n(`One of them is NAVARRO, IRIS.`),
 ch('A Corvane rep wants your blood.',[
  o(`“Sure.” Let them take it. You want to know too.`,{fx:{'flag:gaveCorvaneBlood':true,'trk.exposure':1},led:'Let Corvane Dynamics draw his blood on Glass Night.',then:[
    n(`She’s quick and gentle and it barely hurts. She labels the vial with a barcode, not a name. When she walks away, the man with the tablet taps the screen once, and your red dot turns green.`)]}),
  o(`“I’m good, thanks.” Refuse.`,{tag:['Nerve'],fx:{'flag:refusedCorvaneBlood':true,'rel.corvane.trust':-1},led:'Refused Corvane’s blood draw on Glass Night.',then:[
    n(`She smiles like it doesn’t matter at all and makes a note. The man with the tablet looks up, finds you, and looks at you for exactly as long as it takes to remember your face.`)]}),
  o(`Refuse, and tell Iris to refuse too.`,{tag:['Wit'],req:['wit',2],fx:{'flag:refusedCorvaneBlood':true,'flag:warnedIrisCorvane':true,'rel.iris.trust':1,'rel.iris.loyalty':1},led:'Refused Corvane’s blood draw and warned Iris to refuse too.',then:[
    n(`You lean back through the curtain. “Corvane’s doing blood draws. They have a list. You’re on it. Don’t let them.”`),
    n(`Iris looks at you for a long second, then pulls her wrapped hands under the blanket.`),
    s('iris',`Okay.`),
    n(`She doesn’t ask why. That’s the second thing you notice about her that you’ll think about for years.`)]}),
 ]),
 slug('INT. MERCY GENERAL — FAMILY ROOM — 4:20 A.M.'),
 n(`The detective who finds you there is short, fortyish, with a gray streak in her black hair and a BPD jacket over a dress like she came from somewhere nice and will never go back to it. Her eyes are red-rimmed and absolutely dry.`),
 s('ruiz',`Elias Costa? Detective Carmen Ruiz, Brightwater PD. You were at the end of the pier, past the barrier. The guard was trying to get you off it.`),
 s('eli',`Yes, ma’am.`),
 s('ruiz',`Sergeant Paul Brandt was my partner. He was working the security detail at the stage. Fourteen years.`),
 n(`She says it like a fact, like an address. She doesn’t sit.`),
 s('ruiz',`I’m asking everyone who was close. What did you see? Before the pier went? Anything. Doesn’t matter if it sounds crazy. Tonight nothing sounds crazy.`),
 ch('What do you tell her about the second light?',[
  o(`The truth. “There was a second light. Closer than the dome. Right next to us.”`,{tag:['Heart'],fx:{'rel.ruiz.trust':2,'flag:toldRuizSecondLight':true,'trk.heat':1},led:'Told Det. Ruiz about the second light on the pier.',then:[
    n(`She stops writing.`),
    s('ruiz',`Next to you. Next to who? You and the girl?`),
    s('eli',`I don’t know. It was all white. It could’ve been the reactor. It could have been anything.`),
    n(`She looks at you for a long time. Then she writes something down and underlines it twice.`),
    s('ruiz',`You’re the second person who’s said that.`)]}),
  o(`“It was all white. I don’t remember.”`,{tag:['Control'],fx:{'rel.ruiz.trust':-1,'flag:liedToRuiz':true},led:'Told Det. Ruiz he didn’t remember anything from the pier.',then:[
    n(`She nods like she expected it. Everybody tonight says that.`),
    s('ruiz',`If you remember, you call me.`),
    n(`She hands you a card. On the back she’s written a cell number in pen. She’s handed out a hundred of them tonight. Her hand doesn’t shake once.`)]}),
  o(`Tell her about the guard instead. “He was trying to save us. He died trying to save us.”`,{tag:['Heart'],fx:{heart:1,'rel.ruiz.trust':1,'flag:honoredWalt':true},led:'Told Det. Ruiz the guard, Walt Dempsey, died trying to save them.',then:[
    n(`Something in her face cracks, a hairline fracture, there and gone.`),
    s('ruiz',`Then somebody should tell his family that. Since it’s true.`),
    s('eli',`I can.`),
    s('ruiz',`Maybe you should.`)]}),
 ]),
 IF(()=>F('tookMolly'),[n(`Somewhere around five a.m. the molly finishes leaving your body, and it takes your floor with it. You sit in a plastic chair in the family room and shake. Not from fear. From the comedown, and the cold, and the thing in your chest that’s still full and humming, and the knowledge that a man died ten feet from you while you were high. You will carry that one a long time.`),fx({strain:1},'Was high on molly when Walt Dempsey died ten feet away.')]),
 T('4C Hinge Committee',[
  ['dev','ELI WHERE ARE YOU'],['dev','PLEASE ANSWER'],['dev','we’re at the dorm, everyone’s okay, Lainey is ok, Rosie is ok, Tucker is crying'],
  ['tucker','i’m not crying i got glass in my eye'],['kwame','Phones came back at 12:01. Eli’s last location was the pier.'],['kwame','Eli.'],
  ['me','mercy general. i’m ok. long story'],['dev','OH THANK GOD'],['tucker','KING'],['kwame','Come home. I fixed the hinge.']]),
 CUT([`<b>CORVANE TOWER, 61ST FLOOR.</b> A wall of screens shows the pier from forty angles, all of them white. A woman in a white suit stands in front of them with her shoes off and a glass of water she hasn’t touched.`,
   `On one screen, in a frame from the third second, two figures are going over the edge of the pier. Between them, a point of light brighter than the Array.`,
   `“Find the ones who were closest,” Vivian Corvane says. “All six of them. Quietly. And find out what it did to them.”`,
   `A man behind her asks how many people died tonight. She tells him three, without looking away from the screen. Then she says, softly, as if to someone who isn’t in the room: “It worked.”`]),
 CUT([`<b>MERCY GENERAL. A STAFF BATHROOM.</b> The door is locked. The light is off.`,
   `It doesn’t matter. A pair of hands is unwinding gauze over the sink. The palms underneath aren’t burned. They’re glowing: a soft, steady white, like a lamp under skin, bright enough to throw shadows on the ceiling.`,
   `The hands go under the faucet. The water runs over them and comes out shining.`,
   `Someone is crying without making a sound. Above the sink, the mirror has been covered with paper towels, carefully, all the way to the edges, so that no one can see a face.`],'MEANWHILE'),
 go('tag1')
];

/* ---------- TAG ---------- */
SC.tag1=[
 ['act','Tag'],
 slug('INT. HALLORAN HALL, SUITE 4C — 6:02 A.M.'),
 n(`They’ve waited up. All three of them, in the common room, in the gray of first light, on a couch nobody owns.`),
 n(`Tucker hugs you first, without asking, hard, and you smell his tears and his Polo and his fear. Kwame shakes your hand, holds it a second too long, and says “Good,” once, like a verdict. Dev just looks at you. Then he says he’s going to make toast, and he goes and makes toast, and his hands are shaking so badly he drops the first two pieces.`),
 n(`Then they’re asleep. Tucker on the couch, Dev in a chair, Kwame on the floor next to his half-built printer with the soldering iron still in his hand. You can’t sleep. You can’t even sit. The fullness in your chest hasn’t gone anywhere. It’s worse. It hums when you breathe.`),
 n(`You stand in the tiny kitchenette and make yourself tea, because your mother would. You don’t want tea. You want something to do with your hands.`),
 n(`Your phone buzzes. A text from a number you don’t have saved.`),
 T('Unknown number',[['them','It’s Iris. I got your number from your mom. She’s terrifying.'],['them','Thank you for not letting go.'],['them','I don’t think I’m going to sleep for a year.']]),
 ch('Reply to Iris.',[
  o(`“Me neither. Thursday. Coffee. Promise me.”`,{tag:['Nerve'],fx:{'rel.iris.desire':1,'flag:irisCoffee':true},led:'Asked Iris for coffee on Thursday.',then:[
    T('Iris',[['me','me neither. thursday. coffee. promise me.'],['them','The TA, remember.'],['me','coffee isn’t a TA thing. coffee is a survivor thing'],['them','…okay. Thursday. Survivor coffee.']])]}),
  o(`“Thank you for sitting on that rail.”`,{tag:['Heart'],fx:{'rel.iris.seen':1,'rel.iris.trust':1,'flag:irisRailText':true},led:'Thanked Iris for being on the pier.',then:[
    T('Iris',[['me','thank you for sitting on that rail'],['them','Why?'],['me','because otherwise i would’ve been alone out there'],['them','You would have been fine.'],['them','You’re very hard to break, Narrows.']])]}),
  o(`“Anytime, Coldharbor. Get some sleep.”`,{tag:['Charm'],fx:{'rel.iris.desire':1},then:[
    T('Iris',[['me','anytime, coldharbor. get some sleep'],['them','You first.'],['them','…goodnight, Eli.']])]}),
 ]),
 n(`You put the phone down on the counter, and you pick up your mug, and you think about the gauze, and the film blown white, and a guard named Walter Dempsey who was sixty-one years old and never turned on his flashlight, and your fingers are shaking, and the mug slips.`),
 n(`It falls. You watch it fall. It should break.`),
 n(`It stops.`),
 n(`One inch off the linoleum, in the gray light, the mug hangs in the air. Tea hangs around it in a frozen splash like a crown. Your hand is out, palm down, and you can <i>feel</i> it: the falling, all the falling in it, the whole little force of a mug going to the floor, sitting in your palm like a coin.`),
 n(`You don’t know what you’re doing. You do it anyway. You close your hand.`),
 PANEL('KRAK','The force goes somewhere. Somewhere is the floor.'),
 n(`The mug drops the last inch and breaks like a normal mug. The floor under it doesn’t. The floor under it cracks: one long jagged line straight across the linoleum and the concrete underneath, from the kitchenette to the couch, fine as a hair and deep as your thumb.`),
 n(`Tucker sleeps through it. Kwame doesn’t. He’s sitting up on the floor, soldering iron in his hand, looking at the crack, and then up at you.`),
 s('kwame',`…Eli.`),
 ch('Kwame saw. You have about two seconds.',[
  o(`“I don’t know what that was.” Tell him the truth.`,{tag:['Heart'],fx:{'knows:kwame':true,'rel.kwame.trust':2,'trk.exposure':1},led:'Kwame saw the floor crack. Eli told him the truth: he doesn’t know what’s happening to him.',then:[
    n(`Kwame looks at the crack. Looks at you. Looks at the crack. Then he sets the soldering iron down very carefully, the way you’d set down something you don’t want to set off.`),
    s('kwame',`Okay. Okay. Don’t touch anything. I’m going to get a notebook.`),
    s('eli',`A notebook?`),
    s('kwame',`I don’t know what that was either. So we’re going to find out. That’s how it works.`)]}),
  o(`“Building’s old. Settling.” Lie.`,{tag:['Charm'],fx:{'rel.kwame.trust':-1,'flag:liedToKwame':true},led:'Lied to Kwame about the cracked floor.',then:[
    s('kwame',`Settling.`),
    s('eli',`Seventies construction. Cinderblock. You said it yourself.`),
    n(`Kwame looks at the crack for a long time. Then he lies back down and turns his face to the wall. You know he isn’t asleep. You know he knows you know.`)]}),
  o(`Say nothing. Pick up the pieces.`,{tag:['Control'],fx:{'flag:silentKwame':true},then:[
    n(`You kneel and pick up the pieces of the mug one by one. Kwame watches you do it. Neither of you says a word. When you finish, he’s still watching. You both know this conversation isn’t over. It hasn’t started.`)]}),
 ]),
 n(`You go into the bathroom and lock the door, which now has a perfect new hinge, and you put your hands flat on the sink and look in the mirror. Your face looks the same. Your eyes look the same. Inside, the fullness hums, the tide of the whole night held in you like a breath.`),
 n(`It didn’t go away when you broke the floor. It went down. A little. Like a glass you finally took one sip from.`),
 n(`You have the thing you’ve wanted your whole life. You can feel it in your hands.`),
 fx({'flag:powered':true,power:1,bt:1},'On the morning after Glass Night, Eli stopped a falling mug in midair and cracked the floor of Suite 4C.'),
 ['tree','Breakthrough: what was the first thing you felt your power do?'],
 IF(()=>G.tree.impact>0,[n(`You think about the floor. The force came in, and it went back out, harder. You think about Teddy Ferro. You think about the man in the Varga windbreaker. You think about every hand that has ever leaned on the Narrows. You flex your fingers, and something in them answers.`)]),
 IF(()=>G.tree.bulwark>0,[n(`You think about the pier. Forty feet of falling concrete, and a bruise on your hip. Whatever this is, the world hit you as hard as it could last night, and you took it. You think: <i>let them try again.</i>`)]),
 IF(()=>G.tree.rush>0,[n(`You think about the mug hanging in the air, and the feeling of all its falling sitting in your palm like a coin. Something you could spend. On yourself. You look at the window, four floors up, and for one crazy second you know you could jump it.`)]),
 IF(()=>G.tree.pull>0,[n(`You reach for the toothbrush on the far side of the sink without touching it, and it twitches. It slides an inch toward you. It stops. You stare at it until your eyes water. Something in the world just leaned your way.`)]),
 IF(()=>G.tree.resonance>0,[n(`You put your palm flat on the sink and close your eyes, and you can feel them. Tucker snoring in the next room, a deep slow drum. Kwame’s heart, fast, awake. Dev, three doors down a hall, shifting in his chair. The building itself, ticking, full of people breathing. You can feel all of them through the porcelain.`)]),
 n(`On the other side of the city, the sun comes up over Gull Point, where the beach has turned to glass, and for a few minutes, before the police tape and the news vans and the first pilgrims with candles, ten thousand glass flowers catch the light at once and the whole shore burns white.`),
 n(`It’s the most beautiful thing anyone in Brightwater has ever seen. Nobody is there to see it.`,true),
 ['end',1]
];

/* ---------- END OF EPISODE ---------- */
FINISH[1]=async function(){
  G.flags.ep1done=true;await lockEpisode(1);
  const w=el('div','end');
  w.append(el('div','day','End of Episode One<small>Glass Night</small>'));log.append(w);
  const lines=[];
  lines.push(`Overheard at the Albatross, in the bathroom line at Mercy General, and in the group chat of everyone I know: on Glass Night, the sky over Brightwater turned white for nine minutes, and the most expensive light bulb in the history of New England went out with three people underneath it. Sgt. Paul Brandt. Walter Dempsey. Kayla Moss, eighteen, who came here from Larkport to study marine biology and was standing at the front because she wanted a good view. Say their names before you say anything else about this night. I’m saying them first.`);
  lines.push(`Now the rest. Six students were found within forty meters of the Array when it went. Corvane would like their blood. Corvane, as of this writing, has not said why. A physics professor was seen shouting at Corvane technicians before the countdown. A detective was seen not crying at Mercy General for six straight hours. And a boy from the Narrows was pulled out of the harbor holding on to a girl from Coldharbor so tightly that two EMTs had to pry his fingers apart.`);
  lines.push(F('kissedIrisPier')?`Witnesses on the pier (me) report that the boy and the girl were, ten minutes before the end of the world, kissing. Make of that what you will. I make of it a second column.`:`Witnesses on the pier (me) report that the boy and the girl had been sitting on the railing for an hour before the end of the world, talking like old friends. Make of that what you will. I make of it a second column.`);
  lines.push(`And one more thing. At 6:14 a.m., a jogger on Gull Point filmed the sunrise through ten thousand flowers of glass. In the video, at the far end of the beach, there is a person standing in the light. Except the light is coming from them. Watch it frame by frame. I have, forty times. Then tell me Glass Night was an accident.`);
  gull('THE GULL REPORT','Anonymous · The Beacon · Volume I, Issue 1',lines);
  const sc=el('div','score');
  const cell=(k,v)=>{const d=el('div','');d.append(el('small','',k));d.append(el('span','',v));sc.append(d)};
  cell('Iris · Trust',String(R('iris','trust')));cell('Iris · Desire',String(R('iris','desire')));cell('Iris · Seen',String(R('iris','seen')));
  cell('Strain',G.strain+'/10');cell('The Narrows',(G.trk.hood>0?'+':'')+G.trk.hood);cell('Family debt','$'+G.trk.debt.toLocaleString());
  cell('Who knows',G.knows.length?G.knows.map(p=>NAMES[p]).join(', '):'No one');
  const node=Object.entries(G.tree).find(([k,v])=>v>0);cell('Power',node?TREE[node[0]].nodes[0]:'—');
  w.append(sc);
  w.append(el('p','n em','Next time on <b>Brightwater</b>: Your power shows up at the worst possible moments. Teddy Ferro comes to Toledo Street. And at a campus party, somebody is selling little vials of something that glows.'));
  w.append(el('p','n','Episode One is now canon. Your choices are saved to this artifact, and Episode Two will be written from them.'));
  const row=el('div','intro');const r2=el('div','row');
  const nb=el('button','btn','Open notebook');nb.type='button';nb.onclick=()=>openNotebook('prev');r2.append(nb);
  row.append(r2);w.append(row);
  $('actLabel').textContent='Season One · Episode One complete';save(true);scroll();setDock(null);
};
