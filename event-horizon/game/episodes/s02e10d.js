/* S2 · E10 · THE ITALIAN MARKET, part 4 of 4: Act Four ("Names"), tag, polls, recap. */
EH.scenes('s02e10', {

  /* ================= ACT FOUR: NAMES ================= */
  a4_fire_escape: {
    card: { kind: 'act', label: 'Act Four', title: 'Names' },
    loc: '9TH & WASHINGTON · THE FIRE ESCAPE',
    clock: { day: 'Sun', date: 'May 16', time: '2:50 PM' },
    text: g => `You climb the fire escape over the bakery. It shakes under you. Below, the festival has started again like nothing happened, which in South Philly is how you know something did.

Jules is sitting on the iron steps between the second and third floors with her knees up and her sunglasses on top of her head.

${g.f('slip10') === 'luck' ? 'She\'s gray. Not sick-gray. Like a photo that\'s been left in a window. Her hands are shaking worse than yours.' : 'She\'s been crying. She stopped a while ago. Her face is tight with salt.'}

You sit down one step below her.

jules: Hi.

sam: Hi.

jules: ${g.f('slip10') === 'luck' ? 'That was the biggest one. I\'ve never done one that big. The whole street. I felt it land everywhere at once, like a hundred keys.' : g.f('slip10') === 'told' || g.f('slip10') === 'silent' ? 'I watched you. The whole time. You were the only thing moving on 9th Street. And you stopped and looked at that old man like you knew him.' : 'I watched you walk into the middle of the street with your hands up. I\'ve never been so angry at anyone in my life.'}

She takes a breath.

jules: ${g.f('slip10') === 'luck' ? 'It\'s heavier now. Whatever it is. I can feel it sitting on me. Like a tab somebody is running.' : 'You didn\'t need me. That\'s the thing. I was sitting up here ready, and you didn\'t need me.'}`,
    choices: [
      { text: '"What does it cost you, Jules? The luck. Tell me. All of it."', tag: 'Ask',
        fx: g => { g.flag('escape10', 'ask'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_escape_end' },
      { text: '"I always need you. I just didn\'t need you to *do* anything."', tag: 'Always',
        fx: g => { g.flag('escape10', 'always'); g.bond('jules', { affection: 1 }); }, go: 'a4_escape_end' },
      { text: 'Don\'t say anything. Climb up one step and sit next to her.', tag: 'Sit with her',
        fx: g => { g.flag('escape10', 'sit'); g.bond('jules', { affection: 1, trust: 1 }); }, go: 'a4_escape_end' }
    ]
  },

  a4_escape_end: {
    loc: '9TH & WASHINGTON · THE FIRE ESCAPE',
    text: g => `${g.f('escape10') === 'ask' ? `jules: I don\'t know yet. That\'s the honest answer. I think it\'s a bill. I think it comes due. I think my family\'s been running a tab for a hundred years, and nobody ever told anybody.

She looks down at the street.

jules: Achterberg called it *the Audience\'s favor*, once, at New Year\'s. I thought she was being poetic. I don\'t think she was being poetic.

sam: We\'ll find out.

jules: *We?*

sam: We. Obviously. Who else is going to?` : g.f('escape10') === 'always' ? `She laughs. It comes out wet.

jules: That\'s the nicest thing anyone\'s ever said to me on a fire escape.

sam: How many people have said things to you on fire escapes?

jules: Hugh, once, when we were nine. He said *if you tell Mother, I\'ll push you.*` : `You climb up one step and sit next to her. It\'s tight. Your shoulder is against her shoulder, and the iron is warm from the sun.

Neither of you says anything for a while.

Below, an old man sells a little boy an Italian ice, and the boy drops it, and the old man gives him another one for free, and says something to him in Calabrese that makes him laugh.

jules: Okay.

sam: Okay.`}

Down on 9th Street, Saint Anthony goes by again, the long way round, on his way back to the church. The twelve men carrying him. A white-haired man at the front left pole who still hasn\'t put it down.

jules: Your grandmother is sitting with my grandmother on a curb, eating zeppole.

sam: Yeah.

jules: My grandmother has never in her life eaten anything on a curb.

sam: My grandmother has never in her life let a Pemberton sit down.

She puts her head on your shoulder.

jules: Take me to your mother\'s. I want gravy. I want to be yelled at by an Italian woman about whether I\'m eating.`,
    next: 'a4_gravy'
  },

  a4_gravy: {
    loc: 'MIFFLIN STREET · THE KITCHEN',
    clock: { day: 'Sun', date: 'May 16', time: '6:30 PM' },
    enter: g => { g.know('dante_arrested10', ['sam', 'mikey', 'rosa', 'frank'], 'Dante Iannucci was arrested at 9th and Washington by Officer Michael Kearney. Charges pending. Bruno hasn\'t posted bail.'); g.bond('rosa', { affection: 1 }); },
    text: g => `Sunday gravy on Mifflin Street. Eleven people in a kitchen built for four. Everybody talking.

Pop is telling the festival story to Jules for the third time, and it\'s gotten better every time; in this version he personally saw the shot and personally ducked. Gigi is telling Jules about a video. Nonna is at the stove, stirring, with Constance Pemberton\'s camel hair coat hanging on the hook by the door, and Constance Pemberton nowhere to be seen, which means she went home in the Bentley and left her coat, which means, Gigi says, that she\'s *coming back*.

${g.f('terms8') === 'count' ? 'On the St. Monica\'s calendar on the side of the fridge, in red pen, in Ma\'s handwriting, in today\'s square: *' + (g.f('broke_count10') ? '?' : String(g.f('count10') || 0)) + '*. And underneath, smaller: *9th St. Saint Anthony.*' : ''}

${g.f('broke_count10') ? 'Ma puts a plate in front of you, and stands there.\n\nrosa: There\'s a question mark on my calendar, Sam.\n\nsam: Ma—\n\nrosa: I was at the festival. I was standing on 9th Street. I saw you on the yellow line, next to your brother, and I didn\'t know how many times you\'d been gone, or for how long. I can\'t count what you don\'t tell me.\n\nShe goes back to the stove. She doesn\'t say anything else. She doesn\'t have to.' : 'Ma puts a plate in front of you, and her hand on the back of your neck for a second, and goes back to the stove.'}

Mikey comes in at seven, still in uniform, and sits down without taking off his belt, which Ma would kill anybody else for.

mikey: Dante Iannucci is in a cell at the Third District. Firing a weapon during a religious procession. ${g.f('saint_shot10') ? 'Destruction of a saint.' : 'Attempting to fire a weapon during a religious procession, on account of it jammed, or something happened to it, nobody can say.'} His grandfather came to the desk at five o\'clock. He looked at his grandson through the glass until the desk sergeant looked away. Then he left. He didn\'t post bail.

frank: Bruno Iannucci didn\'t bail out his grandson?

mikey: No, Pop.

Pop sits back. He looks, for a second, like a man who used to owe somebody forty-one thousand dollars.

frank: Huh.

${g.f('vinnie9') === 'went' ? 'mikey: And nobody can find Vinnie. His mom\'s been calling the district. The van was empty. They found Dante\'s coat on the seat. Folded.' : 'Vinnie is on the couch in the living room with a plate on his knees, watching the Phillies with the sound off. He hasn\'t said anything since three o\'clock. Every so often Ma brings him more.'}

Gigi slides her phone across the table to you under the bread.

gigi: Sammy. Sammy. Look. *Look*.

A video. Forty thousand views since three. Shaky, from somebody\'s phone, from the sidewalk at 9th and Washington. Saint Anthony. The truck. A blur, a smear of motion, in the middle of the street, there and then gone, so fast it\'s just a streak on the video like a thumb on the lens.

gigi: They\'re calling him eight different things. In the comments. It\'s *chaos*. Somebody called him *the 9th Street Ghost*. Somebody called him *Saint Sonic*. Somebody called him *that Wawa guy*, which, why would they call him that? That\'s so random.

Across the table, Jules very carefully drinks her water.

gigi: He needs a *real* name. Like a real one. If I was him, I\'d be so mad nobody knew what to call me.`,
    next: 'a4_name'
  },

  a4_name: {
    night: true,
    loc: 'MIFFLIN STREET · YOUR OLD ROOM',
    clock: { day: 'Sun', date: 'May 16', time: '11:00 PM' },
    text: g => `Your old room. The bunk bed you and Mikey had until he was fourteen, with the top bunk full of boxes now. Freshman year is in garbage bags on the floor.

Your phone.

TXT nik: bro
TXT nik: BRO
TXT nik: dana fiorillo just emailed me. A1 tomorrow. ${g.f('plan10') === 'public' ? 'APERTURE. the tape. rodriguez\'s photos. the truck. the windbreaker.' : 'the festival. the truck. the video.'}
TXT nik: she says "tell your friend Ive called him the Blur three times and Im not doing it a 4th. the city needs something to call him. he has until midnight or Im going with Saint Sonic"
TXT nik: she will. she WILL do it bro
TXT nik: also bree says if its not wawa she will personally kill you in your own voice

You lie on the bottom bunk and look at the slats of the top bunk, where in sixth grade you wrote *SAM KEARNEY WAS HERE* in marker and Mikey wrote *NO HE WASN\'T* underneath.

A name.

Not for you. For the thing on 9th Street. The streak on the video. The thing ten thousand people clapped for without knowing what it was.`,
    choices: [
      { text: '*The Blur.* It\'s what they\'ve already been calling you. Since the bridge, since the parade. Keep it. It was never yours to name.', tag: 'The Blur',
        fx: g => { g.flag('hero_name', 'blur'); g.know('hero_name', ['sam', 'nik', 'dana'], 'You told Dana Fiorillo, through Nik: keep calling him the Blur.'); g.hidden('revenant_drift', -0.5); }, go: 'a4_name_end' },
      { text: '*Second Hand.* The thin one on the clock. The one that keeps moving when everything else stands still.', tag: 'Second Hand',
        fx: g => { g.flag('hero_name', 'secondhand'); g.know('hero_name', ['sam', 'nik', 'dana'], 'You told Dana Fiorillo, through Nik: Second Hand. "The thin one on the clock. The one that keeps moving."'); }, go: 'a4_name_end' },
      { text: '*Wawa.* Teddy\'s name for you. Bree\'s. The one somebody gave you, not one you took. And it\'ll drive Dana insane.', tag: 'Wawa',
        fx: g => { g.flag('hero_name', 'wawa'); g.know('hero_name', ['sam', 'nik', 'dana', 'bree'], 'You told Dana Fiorillo, through Nik: Wawa. Teddy\'s name for you.'); g.bond('bree', { affection: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_name_end' },
      { text: 'No name. Let them call it whatever they want. A name is a thing somebody can find.', tag: 'No name',
        fx: g => { g.flag('hero_name', 'none'); g.know('hero_name', ['sam', 'nik'], 'You didn\'t give Dana a name. "Let them call it whatever they want."'); g.hidden('halcyon_heat', -1); }, go: 'a4_name_end' }
    ]
  },

  a4_name_end: {
    night: true,
    loc: 'MIFFLIN STREET · YOUR OLD ROOM',
    text: g => `${g.f('hero_name') === 'blur' ? 'TXT sam: the blur. tell her to keep it\nTXT nik: classic. respect. boring. respect\nTXT nik: she says "fine. FINE."' : g.f('hero_name') === 'secondhand' ? 'TXT sam: second hand. like on a clock. the one that keeps moving\nTXT nik: ......\nTXT nik: bro\nTXT nik: bro that\'s actually good\nTXT nik: I hate that you came up with that and not me\nTXT nik: she says "oh that\'s GOOD. that\'s a headline."' : g.f('hero_name') === 'wawa' ? 'TXT sam: wawa\nTXT nik: WHAT\nTXT nik: bro you cannot name yourself after a convenience store\nTXT sam: teddy named me. its wawa\nTXT nik: ...\nTXT nik: ok. yeah. ok\nTXT nik: she says "is this a joke. this is a joke. Wawa has LAWYERS"\nTXT nik: she says "ok it\'s going on A1. god help us all"\n\nThirty seconds later:\n\nTXT bree: [voice memo, 0:04]\n\nYou play it. It\'s Teddy. *Wawa.* That\'s all. Just Teddy\'s voice, saying it, the way he did in the kitchen in Port Richmond the first time, like it was the most normal thing in the world.' : 'TXT sam: no name. let them call it whatever\nTXT nik: respect. mysterious. bad for merch\nTXT nik: she says "fine. Saint Sonic it is."\nTXT nik: she\'s joking. probably. 60% she\'s joking'}

You put the phone face down on your chest.

Through the wall, you can hear Gigi on the phone to somebody, saying *no but did you SEE it* for the fourth time.

You fall asleep in your clothes on the bottom bunk, and for the first time in nine months you don\'t dream about the cold.`,
    next: 'a4_koi'
  },

  a4_koi: {
    loc: 'WASHINGTON AVENUE · PHỞ THANH',
    clock: { day: 'Mon', date: 'May 17', time: '11:00 AM' },
    enter: g => { g.sleep(10); g.know('bruno_war10', ['sam'], 'Bruno, at Phở Thanh: "That woman came into my neighborhood and took my people out of their beds. Now it\'s a war. Not you. Not your father. Me." Frank\'s debt is done.'); },
    text: g => `${g.f('hero_name') === 'none' ? 'The Inquirer, Monday morning, A1, above the fold: *WHAT HAPPENED ON 9TH STREET.*' : g.f('hero_name') === 'blur' ? 'The Inquirer, Monday morning, A1, above the fold: *THE BLUR, AND THE TRUCK ON 9TH STREET.*' : g.f('hero_name') === 'secondhand' ? 'The Inquirer, Monday morning, A1, above the fold: *SECOND HAND.* And underneath, smaller: *Eleven Missing South Philadelphians Found In Unmarked Truck At Italian Market Festival.*' : 'The Inquirer, Monday morning, A1, above the fold, in letters an inch high: *WAWA.* And underneath, smaller: *Eleven Missing South Philadelphians Found In Unmarked Truck At Italian Market Festival.*'}

By Dana Fiorillo. ${g.f('plan10') === 'public' ? 'Photographs by Luis Rodriguez. The back of a tan windbreaker walking away from an open truck. And a sidebar, a whole page, A6: *"WE OPENED A DOOR": HALCYON CEO ON TAPE.*' : 'And a photo from somebody\'s phone: Saint Anthony, an open truck, and a smear of motion in the middle of the street.'}

Phở Thanh opens at eleven. It\'s been closed since the first week of April.

Thomas Nguyen is behind the counter in his white apron, and the chairs are down off the tables, and the koi are turning in the tank by the register, orange and white, in the blue light of the filter. Somebody fed them every day for six weeks. Nobody will say who. Everybody on Washington Avenue knows it was Bruno.

Thomas sees you. He doesn\'t say anything. He brings you a bowl of phở you didn\'t order and sets it down in front of you and goes back behind the counter.

In the back booth, under the TV, Bruno Iannucci. Black suit. Bad hip. A cup of tea he isn\'t drinking.

He nods at the seat across from him.

BRUNO: Sit.

You sit.

BRUNO: My grandson is in a cell. My people are home. ${g.f('saint_shot10') ? 'And Saint Anthony has a bullet in him from my family. Ninety-eight years, that statue. My father carried it.' : 'And Saint Anthony made it back to the church without a scratch. Ninety-eight years, that statue. My father carried it.'}

He turns the tea cup a quarter turn on the saucer.

BRUNO: Saint Anthony. Patron saint of lost things. You know that?

sam: Vinnie told me.

BRUNO: Vincenzo. Yeah.

He takes his time looking at you.

BRUNO: Your father\'s debt is done. It was done in March. I\'m telling you now so you hear it from me. The eight jobs, and Sunday. Paid.

BRUNO: And I\'m telling you something else. That woman came into my neighborhood and took my people out of their beds. One a night. Like I was nobody. Like this was nobody\'s street.

His hand is flat on the table. It\'s an old man\'s hand, spotted. It doesn\'t shake.

BRUNO: Now it\'s a war. Not yours. Not your father\'s. Mine. You go home. You go to college. You take your girl to the shore. You stay out of it.

He stands up, slowly, with his hand on the table, and drops a twenty next to your bowl.

BRUNO: Your great-grandmother pulled me out of the river when I was six. Sunday you pulled my people out of a truck. The DiNardos keep finding my lost things, Salvatore. I\'d like it to stop. I\'d like to stop owing your family.

He walks out onto Washington Avenue, slowly, favoring the hip.

Thomas Nguyen comes over and takes the twenty off the table and puts it back in your hand and closes your fingers over it.

THOMAS: You eat.`,
    next: 'a4_vinnie'
  },

  a4_vinnie: {
    loc: 'WASHINGTON AVENUE',
    clock: { day: 'Mon', date: 'May 17', time: '12:10 PM' },
    text: g => `${g.f('vinnie9') === 'went' ? `Outside Phở Thanh, your phone.

TXT Unknown number: its me. new phone
TXT Unknown number: im ok. im at my aunts in wildwood. dont tell my mom where
TXT Unknown number: i drove the van sally. i drove it right up to the saint and i stopped and i put it in park and i couldnt do nothing else. i just sat there
TXT Unknown number: then all the guns were gone. all of em. i was looking right at dantes hand and then it was empty
TXT Unknown number: that was you

You stand on Washington Avenue with the phone in your hand while the lunch crowd steps around you.` : `Outside Phở Thanh, Vinnie is sitting on a fire hydrant in your old Phillies hoodie, waiting.

vinnie: I saw Grandpa go in. I didn\'t go in.

sam: He asked about you.

vinnie: *(not looking at you)* Yeah? What\'d he say?

sam: He said *Vincenzo*.

Vinnie nods, slow, like that\'s a whole sentence. For Bruno, it is.`}`,
    choices: [
      { text: g => g.f('vinnie9') === 'went' ? 'TXT: *yeah. that was me. come home vin.*' : '"Come on. Ma made too much gravy. She always does."', tag: 'Come home',
        fx: g => { g.flag('vinnie10', 'home'); g.bond('vinnie', { trust: 2, affection: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_vinnie_end' },
      { text: 'TXT: *stay at your aunt\'s. stay out of it this time. please.*', tag: 'Stay out', if: g => g.f('vinnie9') === 'went',
        fx: g => { g.flag('vinnie10', 'away'); g.bond('vinnie', { trust: 1 }); }, go: 'a4_vinnie_end' },
      { text: '"Go see him, Vin. He\'s in the back booth. He didn\'t post bail for Dante. He might for you."', tag: 'Go see him', if: g => g.f('vinnie9') !== 'went',
        fx: g => { g.flag('vinnie10', 'away'); g.bond('vinnie', { trust: 1 }); }, go: 'a4_vinnie_end' }
    ]
  },

  a4_vinnie_end: {
    loc: 'WASHINGTON AVENUE',
    text: g => `${g.f('vinnie9') === 'went' ? (g.f('vinnie10') === 'home' ? 'TXT sam: yeah. that was me. come home vin\n\nThree dots. For a long time. They go away. They come back.\n\nTXT Unknown number: not yet\nTXT Unknown number: soon\nTXT Unknown number: save this number under vinnie. not "unknown number." i know you\n\nYou save it. *Vinnie.*' : 'TXT sam: stay at your aunts. stay out of it this time. please\n\nThree dots. For a long time.\n\nTXT Unknown number: ok\nTXT Unknown number: you sound like your mom\nTXT Unknown number: save this number under vinnie bol') : (g.f('vinnie10') === 'home' ? 'vinnie: Gravy.\n\nsam: Gravy.\n\nHe gets up off the hydrant. He walks next to you toward Mifflin Street, and halfway there he bumps you with his shoulder, hard, the way he did in Little League, and doesn\'t say anything about it.' : 'Vinnie looks at the door of Phở Thanh.\n\nThen he gets up off the hydrant and goes in.\n\nThrough the window, you see him stop in front of the back booth. You see Bruno look up. You don\'t see the rest. You walk home. It isn\'t yours.')}`,
    next: 'a4_roof'
  },

  /* ---------------- The roof ---------------- */
  a4_roof: {
    night: true,
    loc: 'MIFFLIN STREET · THE ROOF',
    clock: { day: 'Mon', date: 'May 17', time: '11:45 PM' },
    enter: g => { g.know('summer10', ['sam', 'jules'], 'Jules is spending the summer in Philadelphia. She told her parents Monday. She did not ask.'); },
    text: g => `The roof of the house on Mifflin Street is tar paper and a plastic chair and Pop\'s tomato plants in five-gallon buckets. You get to it through the hatch in the hall closet. You used to come up here to get away from Mikey. Now you come up here to get away from Gigi.

Jules climbs up through the hatch behind you in one of your hoodies. She\'s stayed for dinner two nights running. Ma has started setting her a place without asking.

South Philly at night, flat, rowhouse roofs in every direction, TV light in every window. Downtown lit up to the north. The bridge to the east. Somewhere a dog. Somewhere a guy yelling at the Phillies.

jules: I told my parents today.

sam: Told them what?

jules: That I\'m spending the summer in Philadelphia. That I\'m not going to the Vineyard. That I got a job at the Free Library, shelving, nine to five, fifteen dollars an hour.

sam: How\'d that go?

jules: Mother said *Juliet*. In the voice. Father said *Jules-bug, let\'s talk about it*, and I said, *No, I don\'t think we will*, and hung up. ${g.knows('aperture_truth', 'jules') ? 'He paid for the door, Sam. I\'m not going to his island.' : ''}

She sits down on the tar paper, with her back against the chimney. You sit down next to her.

jules: And Hugh didn\'t come home this weekend. Gran says he\'s in Boston. Hugh is never in Boston. Hugh thinks Boston is *derivative*.

You check your phone. 11:50.

jules: You\'re looking at the time.

sam: Habit.

11:51.

Nothing happens. The minute comes, and it goes, like a minute. The TV light flickers in the windows. A car goes by on Mifflin Street. Nobody stops.

Jules is looking at you.

jules: Nine months ago, at 11:51, you were standing in a door.

sam: So were you.

jules: So was I.

She\'s quiet.

jules: What happens now?`,
    choices: [
      { text: '"I love you." Just that. Out loud, for the first time, on your father\'s roof, between the tomatoes.', tag: 'Say it',
        fx: g => { g.flag('roof10', 'love'); g.bond('jules', { affection: 2, trust: 1 }); g.hidden('revenant_drift', -1); g.know('ily10', ['sam', 'jules'], 'On the roof on Mifflin Street, at 11:52 on May 17, you told Jules you love her. First time. Out loud.'); }, go: 'a4_roof_end' },
      { text: '"Now? Summer." Grin. "Shelving books. Gravy every Sunday. The shore, once, if you can stand it. We find out what the tab is. Together."', tag: 'Summer',
        fx: g => { g.flag('roof10', 'summer'); g.bond('jules', { affection: 1, trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_roof_end' },
      { text: '"I don\'t know." The truth. "I really don\'t. I don\'t think anybody does. Not even her."', tag: 'Don\'t know',
        fx: g => { g.flag('roof10', 'dunno'); g.bond('jules', { trust: 2 }); g.hidden('revenant_drift', -1); }, go: 'a4_roof_end' }
    ]
  },

  a4_roof_end: {
    night: true,
    loc: 'MIFFLIN STREET · THE ROOF',
    text: g => `${g.f('roof10') === 'love' ? `sam: I love you.

She doesn\'t say anything.

She doesn\'t say anything for long enough that you start to think about the hatch, and the stairs, and whether you can make it to Wildwood on foot.

Then she laughs. Not at you. Like something has come loose.

jules: You *idiot*. You absolute— Sam. I\'ve known since the minifridge.

sam: The *minifridge?*

jules: Nine flights. You didn\'t even ask. You just picked it up. I was on the phone with my mother pretending to be practical, and I watched a boy I\'d never met carry my whole life up nine flights of stairs because the elevator was slow, and I thought, *Oh no.*

She puts her hand on your face.

jules: I love you. Obviously. I love you. It\'s the only thing that ever happened to me that wasn\'t luck. I didn\'t have to do anything at all.` : g.f('roof10') === 'summer' ? `sam: Now? Summer. You shelve books. I deliver pizza. Gravy every Sunday, because you\'re never getting out of that now, Ma\'s set you a place. The shore, once, if you can stand Wildwood. And we find out what the tab is. Together.

jules: Wildwood.

sam: It\'s very glamorous. There\'s a tram car. It says *watch the tram car, please* in a robot voice. Everybody can do the voice.

jules: *(trying it)* Watch the tram car, please.

sam: That\'s terrible. That\'s the worst one I\'ve ever heard.

She\'s laughing. She leans into you, against the chimney, and doesn\'t stop for a while.` : `sam: I don\'t know. I really don\'t. I don\'t think anybody does. Not even her.

jules: Not even Achterberg.

sam: She opened a door. She doesn\'t know what came through it. She\'s just pretending. Like everybody.

Jules thinks about that.

jules: Good. That helps. That actually helps.

sam: That nobody knows anything?

jules: That *she* doesn\'t.`}

The minute is long gone. It\'s 11:58. Then midnight. Then it\'s the next day, the first day of summer, and nobody\'s counting.

You stay up there until the TV lights go out, one window at a time, all over South Philadelphia.`,
    next: 'tag_hugh'
  },

  /* ================= TAG ================= */
  tag_hugh: {
    card: { kind: 'tag' },
    loc: 'THE NAVY YARD · BUILDING 7',
    clock: { day: 'Tue', date: 'May 18', time: '9:00 AM' },
    text: `> THE CAMERA.

The lobby of Building 7 at the Navy Yard. Glass and steel and a reception desk with nobody behind it. A rubber tree in a pot. A framed print of a kingfisher.

Hugh Pemberton sits in a white leather chair with one ankle on his knee, in a navy blazer, golden, perfectly at ease. He has a white visitor badge clipped to his lapel. *GUEST.*

In his lap, folded in a clean square: a handkerchief, embroidered with a *P*. The one he took from his sister\'s coat in March. He\'s been carrying it ever since.

A door opens. Footsteps on the polished concrete.

ACHTERBERG: Mr. Pemberton. How was Boston?

hugh: I wasn\'t in Boston.

ACHTERBERG: I know.

She sits down across from him. She has a folder. She doesn\'t open it.

hugh: I want to know why. That\'s all. Twelve years. Every coin. Every game. Every shot. Since we were six. I\'ve never seen anything almost not go for her. And I\'ve been standing next to it my whole life, and nobody ever told me what it *was*.

ACHTERBERG: Nobody told her either.

hugh: But Jubilee gets to *have* it.

Achterberg smiles. A small, kind, terrible smile.

ACHTERBERG: Luck doesn\'t run in your family, Mr. Pemberton. It runs *through* it. It picks. It has always picked. You were nine minutes earlier, and it didn\'t pick you.

Hugh goes still.

She takes a white badge from the folder. Not *GUEST*. A real one. His photo is already on it.

ACHTERBERG: I can\'t give you what she has. I can tell you what it is. I can tell you what it costs her. I can tell you who it\'s going to cost.

She slides the badge across the table.

ACHTERBERG: Let\'s talk about your sister.

Hugh looks at the badge for a long time.

Then he picks it up.

> END OF SEASON TWO.`,
    end: true
  }
});

Object.assign(EH.episodes.s02e10, {
  polls: [
    { q: 'The Giant Heart', opts: [
      { label: 'Went alone', pct: 29, if: g => g.f('institute10') === 'alone' },
      { label: 'Went with Jules', pct: 38, if: g => g.f('institute10') === 'jules' },
      { label: 'Wore a wire', pct: 21, if: g => g.f('institute10') === 'wired' },
      { label: 'Didn\'t go', pct: 12, if: g => g.f('institute10') === 'none' }
    ] },
    { q: 'The plan', opts: [
      { label: 'The crew', pct: 34, if: g => g.f('plan10') === 'crew' },
      { label: 'Mikey', pct: 22, if: g => g.f('plan10') === 'cops' },
      { label: 'Made it public', pct: 27, if: g => g.f('plan10') === 'public' },
      { label: 'Took the deal', pct: 17, if: g => g.f('plan10') === 'deal' }
    ] },
    { q: '9th Street', opts: [
      { label: 'Told Ma, then Slipped', pct: 39, if: g => g.f('slip10') === 'told' },
      { label: 'Slipped', pct: 18, if: g => g.f('slip10') === 'silent' },
      { label: 'Jules\'s luck', pct: 24, if: g => g.f('slip10') === 'luck' },
      { label: 'Talked', pct: 19, if: g => g.f('slip10') === 'talk' }
    ] },
    { q: 'The name', opts: [
      { label: 'The Blur', pct: 31, if: g => g.f('hero_name') === 'blur' },
      { label: 'Second Hand', pct: 33, if: g => g.f('hero_name') === 'secondhand' },
      { label: 'Wawa', pct: 26, if: g => g.f('hero_name') === 'wawa' },
      { label: 'No name', pct: 10, if: g => g.f('hero_name') === 'none' }
    ] },
    { q: 'The roof', opts: [
      { label: 'Said it', pct: 52, if: g => g.f('roof10') === 'love' },
      { label: 'Summer', pct: 30, if: g => g.f('roof10') === 'summer' },
      { label: 'Don\'t know', pct: 18, if: g => g.f('roof10') === 'dunno' }
    ] }
  ],
  onEnd: g => {
    g.recap(g.f('institute10') === 'none' ? 'Achterberg told you anyway: on August 22, Halcyon opened a door under Broad Street. You were standing in it.' : 'At the Giant Heart, Achterberg told you the truth: APERTURE. "We opened a door. You happened to be standing in it."');
    g.recap(g.f('plan10') === 'deal' ? 'You took her deal. Eleven people walked out. You walked in. Dante\'s van stopped the truck.' : g.f('plan10') === 'crew' ? 'The crew hit the warehouse. Four of the eleven were still there. Brannigan had moved the rest.' : g.f('plan10') === 'cops' ? 'You told Mikey everything. There were a lot of cops on 9th Street.' : 'You gave Dana Fiorillo the tape. She brought a photographer.');
    g.recap('At 9th and Washington, in front of ten thousand people and Saint Anthony, Halcyon\'s truck stood open. Bruno\'s people went home.');
    if (g.f('saw_revenant10')) g.recap(g.hv('revenant_drift') < 6 ? 'In the Slip, the old man with your face lowered his hand, and walked away.' : 'In the Slip, the old man with your face watched you, and waited.');
    g.recap('Nonna and Constance Pemberton watched from the curb at Christian Street. Both their eyes moved.');
    g.recap('Dante Iannucci is in a cell. Bruno didn\'t bail him out. "Now it\'s a war. Mine."');
    if (g.f('hero_name') && g.f('hero_name') !== 'none') g.recap('The Inquirer, A1: ' + ({ blur: 'THE BLUR', secondhand: 'SECOND HAND', wawa: 'WAWA' })[g.f('hero_name')] + '.');
    if (g.f('roof10') === 'love') g.recap('On the roof on Mifflin Street, you said it. So did she.');
    g.recap('Hugh Pemberton took a Halcyon badge. "Let\'s talk about your sister."');
  }
});
