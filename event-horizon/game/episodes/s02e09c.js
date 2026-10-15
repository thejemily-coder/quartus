/* S2 · E9 · DOLLAR NIGHT, part 3 of 4: Act Three ("Seventh-Inning Stretch"). */
EH.scenes('s02e09', {

  /* ================= ACT THREE: SEVENTH-INNING STRETCH ================= */
  a3_ballpark: {
    card: { kind: 'act', label: 'Act Three', title: 'Seventh-Inning Stretch' },
    night: true,
    loc: 'CITIZENS BANK PARK',
    clock: { day: 'Wed', date: 'Apr 14', time: '8:55 PM' },
    enter: g => { g.sleep(7); },
    text: g => `Dollar Dog Night at Citizens Bank Park is forty thousand people and one dollar hot dogs, and by the fifth inning it isn\'t a baseball game anymore. It\'s a weather system. Hot dogs in the air in the 300 level. A guy in a Bryce Harper jersey with eleven of them stacked in his arms like firewood. A chant going around the upper deck that you can\'t make out and don\'t want to.

The Phillies are losing to the Marlins, four to one. Nobody cares.

You\'re in the Hall of Fame Club, the level with the suites, leaning on a railing with a beer you haven\'t touched, where you can see the long glass windows of the suites behind home plate.

The Pemberton Lyle suite is the third one from the left. You can see it from here. Twenty people in good clothes, not watching the game. A man with silver hair laughing with his whole body, which you know now is how Whitney Pemberton does everything. Hugh, by the bar, golden.

Jules, at the window, in a navy dress, with a glass of sparkling water, looking out at the field.

And at the end of the room, in a gray dress, with her glasses pushed up on her head, Dr. Achterberg. Sitting down. Eating a hot dog. Very neatly, with a knife and fork.

${g.f('plan9') === 'mikey' ? 'At the end of the suite hallway, by the service door, two Philadelphia police officers in uniform are standing very casually, talking about the Eagles\' draft, in the way that cops stand when somebody\'s brother called somebody.\n\nNobody from Dante\'s crew is going to miss them.' : ''}

Your phone buzzes.

${g.f('plan9') === 'us' ? 'TXT vinnie: change of plan. D wants me on the cart not the van. he doesnt trust ritchies kid. im in the hallway 9:15\nTXT vinnie: dont do nothing stupid\nTXT vinnie: i mean it college' : 'TXT vinnie: D put me on the cart. not the van. 9:15'}

${g.f('terms8') === 'count' ? 'And then, a second later:\n\nTXT rosa: count?\n\nYou look at it until the screen goes dark.\n\nTXT sam: zero. so far\nTXT rosa: so far?\nTXT sam: ill tell you. before. i promise' : ''}

The Marlins go down in order in the top of the seventh. The organist starts playing.

*Take me out to the ball game.*

You put your beer down on the railing and walk into the service hallway behind the suites.`,
    next: 'a3_corridor'
  },

  a3_corridor: {
    night: true,
    loc: 'HALL OF FAME LEVEL · SERVICE CORRIDOR',
    clock: { time: '9:21 PM' },
    text: g => `The service corridor is white cinderblock and fluorescent lights and rolling carts of dirty glasses, and it runs behind all the suites like the back hallway of a hotel. Through the walls, faintly, forty thousand people singing *root, root, root for the Phillies*.

It happens fast.

Dr. Achterberg comes out of the Pemberton Lyle suite\'s back door with her phone at her ear, into the hallway, alone.

Not alone. Two ushers in red Phillies polos are standing ten feet away, by a stack of chairs, and they\'re not ushers. They stand like Brannigan\'s people stand. Like they\'ve been told to.

From the other direction, from the freight elevator, a hot dog cart. Stainless steel, with a striped umbrella folded down. *DANTE\'S CATERING* on the side in red script. Two men in white catering jackets pushing it. And behind it, in a white jacket too small for him, Vinnie, with his hands on the handle, his face gray.

And Dante. In a suit. Walking beside the cart like he\'s taking it for a stroll.

Achterberg looks up from her phone.

She sees the cart. She sees Dante. She doesn\'t look surprised.

ACHTERBERG: Mr. Iannucci.

DANTE: Doctor.

He takes a pistol out of his jacket. Not fast. He wants her to see it.

The two ushers move. Their hands come up, and they\'re holding things that look like staplers and aren\'t. One of the catering guys has a gun out now too. Everybody is pointing something at somebody.

And behind Achterberg, the suite door opens again.

Jules.

She stops in the doorway. She sees all of it. She doesn\'t go back in.

DANTE: Miss Pemberton. Go back in your party, sweetheart.

jules: No, I don\'t think I will.

Dante\'s gun comes up. Not at Jules. At Achterberg\'s head. Two feet away.

DANTE: Doctor. You\'re gonna get in the cart.

One of the ushers says, very calmly:

USHER: Mr. Iannucci, please put that down.

Vinnie, behind the cart, sees you at the end of the corridor.

His mouth opens. He doesn\'t say anything.

Everything is about to happen at once.

${g.hv('revenant_drift') < 10 ? 'You reach for the second. It\'s right there. It doesn\'t feel like a river. It feels like a door you could open and close.' : 'You reach for the second. It\'s right there. Cold. Grabbing.'}`,
    choices: [
      { text: 'Text Ma. One word. *Counting.* Then go.', tag: 'Tell Ma, then Slip', slip: true, if: g => g.f('terms8') === 'count',
        fx: g => { g.flag('slip9', 'told'); g.bond('rosa', { trust: 1 }); g.hidden('revenant_drift', -1); g.know('rosa_count9', ['sam', 'rosa'], 'At the ballpark, before you Slipped, you texted Ma: "counting." She counted.'); }, go: 'a3_slip' },
      { text: 'Slip. No time. Go.', tag: 'Slip', slip: true,
        fx: g => { g.flag('slip9', 'silent'); if (g.f('terms8') === 'count') { g.flag('broke_count9'); g.bond('rosa', { trust: -1 }); g.hidden('revenant_drift', 1); } }, go: 'a3_slip' },
      { text: 'Don\'t Slip. Walk into the middle of it with your hands up and *talk*. Nobody\'s shot anybody yet.', tag: 'Talk',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Talk down a hallway full of guns', near: ['jules'],
          on: { strong: 'a3_talk', weak: 'a3_talk_weak', miss: 'a3_talk_miss' } },
        fx: g => { g.flag('slip9', 'talk'); g.hidden('revenant_drift', -1); } }
    ]
  },

  a3_slip: {
    night: true,
    loc: 'THE CORRIDOR · BETWEEN',
    enter: g => { if (g.unsticks()) g.unstick('unstick_s2e9', 'Time debt (the ballpark)'); g.flag('jules_saw9'); g.know('jules_eyes9', ['sam', 'jules'], 'At the ballpark, in the Slip, Jules\'s eyes moved. She watched you the whole time.'); },
    text: g => `${g.f('slip9') === 'told' ? 'TXT sam: counting\n\nYou hit send. You step through.' : 'You step through.'}

${g.unsticks() ? 'The cold takes you. A river. It grabs.' : 'The cold comes. And then, for the first time since August, it *lets you*. Not a river. A pool. Cool and still and deep, and you\'re in it, and it isn\'t pulling. You could stay. You could leave. It\'s up to you.\n\nYou almost laugh.'}

The corridor, stopped.

The fluorescent lights hum on one held note. Forty thousand people on the other side of the wall, frozen mid-*one, two, three strikes*. Dante\'s gun two feet from Achterberg\'s temple, his finger inside the trigger guard. The usher\'s stapler-that-isn\'t, aimed at Dante\'s neck, a dart already out of it, hanging in the air a foot from his collar. The catering guy\'s gun pointed at the usher.

Jules in the doorway. Her eyes. Moving.

Following you. ${g.knows('constance_1964') ? 'Nonna said it at dinner, about a blonde girl in a black car in 1964. *Her eyes moved.* You never thought to look.' : 'You never thought to look.'} You don\'t know if they\'ve ever moved before. On the Parkway, you didn\'t look. Tonight they do. Since August, the only person who ever looked back at you in here was a man with your face. You lift a hand. You actually wave, like an idiot, in the middle of five guns.

${g.f('slip9') === 'told' ? 'Two miles away, on Mifflin Street, your mother is standing at the sink with her phone in her hand, and her eyes are moving too. Counting. You can almost feel it. One.' : ''}

Vinnie, frozen behind the cart, his hands on the handle, his mouth open on a word.

You have time. More than you need. That\'s new too.`,
    choices: [
      { text: 'Dante\'s gun. Take it out of his hand. Then the catering guy\'s. Nobody shoots anybody tonight.', tag: 'The guns',
        fx: g => { g.flag('slip9b', 'guns'); g.hidden('halcyon_heat', 1); g.hidden('revenant_drift', 0.5); }, go: 'a3_guns' },
      { text: 'Jules. Walk her back into the suite and close the door. Let the rest happen the way it\'s going to.', tag: 'Jules',
        fx: g => { g.flag('slip9b', 'jules'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_jules_in' }
    ]
  },

  a3_guns: {
    night: true,
    enter: g => { g.know('achterberg_saved9', ['sam', 'jules'], 'At the ballpark, in the Slip, you took Dante\'s gun out of his hand two feet from Dr. Achterberg\'s head.'); },
    text: g => `You take Dante\'s gun.

It isn\'t hard. His fingers are just fingers. You open them one at a time, the way you\'d take a toy from Gigi when she was two, and slide the pistol out, and pop the magazine, and drop both in the hot dog cart, in the well with the warm water and the sauerkraut.

The catering guy\'s gun. Same thing. Into the sauerkraut.

The dart, hanging in the air a foot from Dante\'s neck. You look at it. You leave it.

You walk back to the end of the corridor. Jules\'s eyes follow you the whole way.

${g.unsticks() ? 'You claw your way out.' : 'You step out. Easy. Like stepping off a curb.'}

Time comes back.

Dante\'s hand closes on nothing. He looks at it. The catering guy looks at his.

The dart hits Dante in the side of the neck. *Pfft.* He grabs at it.

DANTE: What the—

He sways. He catches himself on the cart. He\'s big, and the dart was loaded for somebody smaller, and it isn\'t enough, and he stays on his feet.

Achterberg hasn\'t moved. She\'s looking at Dante\'s empty hand. Then, slowly, down the corridor. At you. Standing at the end of it ${g.S.drift >= 5 || g.unsticks() ? 'with your nose bleeding' : 'with your hands empty'}, where you were standing a second ago, and also not.

She smiles.

ACHTERBERG: *(softly)* Thank you, Mr. Kearney.

The other catering guy grabs Dante under the arm. They\'re running. Back toward the freight elevator. Vinnie is still holding the cart.`,
    next: 'a3_elevator'
  },

  a3_jules_in: {
    night: true,
    text: g => `You go to Jules.

You take her hand. It\'s warm, even here. She can\'t move it, but her eyes are on yours, and you see the question in them, and you shake your head. *Not this one.*

You walk her backward, gently, one stopped step at a time, the way you\'d move a mannequin, into the suite, and lean her against the wall inside the door, by the coats. You close the door.

Then you go back to the end of the corridor.

${g.unsticks() ? 'You claw your way out.' : 'You step out. Easy. Like stepping off a curb.'}

Time comes back.

The dart hits Dante in the side of the neck. *Pfft.* He grabs at it. The gun goes off.

It goes into the ceiling. A fluorescent light explodes. Glass everywhere. Everybody ducks. Out in the stadium, forty thousand people sing *at the old ball game* and don\'t hear a thing.

The ushers are moving. The catering guy fires once, wild, into the stack of chairs. One usher goes down, holding her leg. The other has Achterberg by the arm and is walking her fast, the other way, toward the main concourse, not running, never running.

Dante is on one knee by the cart, the dart still in his neck, the gun hanging from his hand. The other catering guy hauls him up. They\'re running. Back toward the freight elevator.

Behind the suite door, you hear Jules hit it with her fist, once, from the inside. Furious.

Vinnie is still holding the cart.`,
    next: 'a3_elevator'
  },

  a3_talk: {
    night: true,
    enter: g => { g.bond('vinnie', { respect: 2 }); },
    text: `You walk out into the middle of the corridor with your hands up.

sam: Hey. *Hey.* Dante. It\'s Sam. From Mifflin Street. It\'s Rosa\'s kid.

Everybody looks at you. Every gun in the hallway thinks about it.

sam: There\'s forty thousand people on the other side of that wall. There\'s a cop at the end of every hallway in this building. You shoot her, you\'re not trading her for anybody. You\'re trading *you* for her, and you\'re going to Phoenix, and your grandfather\'s going to sit through another funeral mass this year, and this one\'s yours.

Dante\'s gun doesn\'t move.

sam: She\'s not worth it. Nobody in this hallway is worth what it costs. Put it down, and walk back to the elevator, and push the cart, and nobody saw anything. It\'s Dollar Dog Night. Nobody remembers anything on Dollar Dog Night.

A long, long second.

Dante laughs. Just once. Like he can\'t help it.

DANTE: *Rosa\'s kid.*

He lowers the gun.

DANTE: Your mother walked into my grandfather\'s club in her church coat. You know that? Sonny moved for her. *Sonny.* And now they got Sonny.

He puts the gun back in his jacket.

DANTE: Okay. Okay, Rosa\'s kid. Not tonight.

He looks at Achterberg.

DANTE: Not tonight, Doctor. But you got my people. And I\'m gonna get them back.

ACHTERBERG: I don\'t doubt it, Mr. Iannucci.

The ushers lower their hands. Everybody backs up, slowly, one step at a time, nobody first. Dante and the catering guys walk back toward the freight elevator.

Vinnie is still holding the cart.`,
    next: 'a3_elevator'
  },

  a3_talk_weak: {
    night: true,
    text: `You walk out into the middle of the corridor with your hands up.

sam: Hey. Dante. It\'s Sam. It\'s Rosa\'s kid. There\'s forty thousand people out there. Put it down.

Dante looks at you. Something moves in his face. Then:

DANTE: Get out of here, Rosa\'s kid.

He doesn\'t put it down.

The usher fires. The dart hits Dante in the side of the neck. He jerks, and the gun goes off, into the ceiling. A fluorescent light explodes. Glass everywhere. Out in the stadium, forty thousand people sing *at the old ball game* and don\'t hear a thing.

The other usher has Achterberg by the arm and is walking her fast the other way. Not running. Never running.

Dante is on one knee, the dart in his neck, swaying. The catering guys haul him up. They\'re running for the freight elevator.

Vinnie is still holding the cart.`,
    next: 'a3_elevator'
  },

  a3_talk_miss: {
    night: true,
    enter: g => { g.flag('shot9'); g.know('brannigan_shot9', ['sam', 'jules', 'vinnie'], 'At the ballpark, Dante Iannucci\'s shot hit an usher who wasn\'t an usher. One of Halcyon\'s people. In the shoulder.'); g.hidden('halcyon_heat', 1); },
    text: `You walk out into the middle of the corridor with your hands up.

sam: Hey. Dante. It\'s Sam—

And everybody moves at once.

The usher fires. Dante flinches. The gun goes off.

Not into the ceiling.

The other usher, the one by the chairs, spins half around and sits down hard against the cinderblock with her hand on her shoulder and blood coming through her fingers, red on the red Phillies polo. She doesn\'t make a sound. She just looks at her hand.

Out in the stadium, forty thousand people sing *at the old ball game* and don\'t hear a thing.

Achterberg looks down at the wounded woman at her feet. Then at Dante. Then, very slowly, at you.

Jules is in the doorway with both hands over her mouth.

Dante is on one knee, the dart in his neck, swaying. The catering guys haul him up. They\'re running for the freight elevator.

Vinnie is still holding the cart.`,
    next: 'a3_elevator'
  },

  a3_elevator: {
    night: true,
    loc: 'THE FREIGHT ELEVATOR',
    text: g => `The freight elevator at the end of the corridor is open. Dante is inside, propped against the back wall between the two catering guys, the dart still in his neck, his eyes going in and out.

Vinnie is standing in the hallway with his hands on the hot dog cart. Ten feet from the elevator. Ten feet from you.

DANTE: *Vin.* Vin. Get in. Leave the cart. Get in the elevator.

Vinnie doesn\'t move.

${g.f('plan9') === 'mikey' ? 'DANTE: There were *cops*, Vin. On the level. Somebody talked. Six people knew, Vin. *Six.*\n\nVinnie\'s face doesn\'t change. He doesn\'t look at you. That\'s how you know he knows exactly whose brother the cop is.\n\n' : ''}DANTE: *Vincenzo.* Get in the elevator.

Vinnie looks at you.

Not at Dante. At you. Over the hot dog cart, under the fluorescent light, in a white catering jacket that doesn\'t fit him, with his knuckles still wrapped in a bar towel. The way he looked at you at nine years old on the corner of Mifflin and 12th when Joey Castellano\'s brother was coming and somebody had to decide which way to run.

He\'s waiting for you to decide.

He\'s always waited for you to decide.`,
    choices: [
      { text: '"Go with him, Vin. Your mom. Your brothers. Go."', tag: 'Go',
        fx: g => { g.flag('vinnie9', 'went'); g.bond('vinnie', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_vinnie_went' },
      { text: '"Stay. Please. Stay."', tag: 'Stay',
        fx: g => { g.flag('vinnie9', 'stayed'); g.bond('vinnie', { trust: 2, affection: 2 }); g.hidden('revenant_drift', 0.5); }, go: 'a3_vinnie_stayed' },
      { text: 'Don\'t say anything. For once, don\'t decide for him.', tag: 'Say nothing',
        fx: g => { g.flag('vinnie9', 'chose'); g.bond('vinnie', { respect: 3, trust: 1 }); g.hidden('revenant_drift', -1.5); }, go: 'a3_vinnie_chose' }
    ]
  },

  a3_vinnie_went: {
    night: true,
    text: `sam: Go with him, Vin. Your mom. Your brothers. Go.

Vinnie looks at you for one more second.

Then he lets go of the cart, and walks into the freight elevator, and gets his shoulder under Dante\'s arm, and holds him up.

The doors start to close.

vinnie: *(through the closing gap)* Never ratted, Sally. Not once.

sam: I know.

The doors close. The numbers over them go down. G. B. B2.

You stand in the corridor alone with a hot dog cart.`,
    next: 'a4_after'
  },

  a3_vinnie_stayed: {
    night: true,
    text: g => `sam: Stay. Please. Stay.

Vinnie takes his hands off the cart.

He doesn\'t get in the elevator.

DANTE: *Vin.*

vinnie: I can\'t, D.

DANTE: You can\'t.

vinnie: I can\'t.

Dante looks at him for a long moment through the dart haze. Then at you. Then back at Vinnie. ${g.f('plan9') === 'mikey' ? 'And you see him finish counting to six.' : ''}

DANTE: You\'re done, Vin. You hear me? Done. Don\'t come to Passyunk. Don\'t come to the club. Don\'t come to my grandfather\'s funeral when he goes. You\'re *done*.

The doors close. The numbers go down. G. B. B2.

Vinnie stands in the corridor in a white catering jacket and takes it off, slowly, one arm and then the other, and drops it on the hot dog cart.

vinnie: Okay.

That\'s all he says. *Okay.*

You stand there. Then you put your arm around him, and he lets you, and he\'s shaking, in his undershirt, under the fluorescent light.

vinnie: *(into your shoulder)* Don\'t make it weird, college.

You don\'t let go.`,
    next: 'a4_after'
  },

  a3_vinnie_chose: {
    night: true,
    text: `You don\'t say anything.

You look at him. You don\'t nod. You don\'t shake your head. You just stand there and let it be his.

He sees you do it. He sees you *not* do it. His mouth opens. Nothing comes out. For once in his life, Vinnie Russo has nothing to say.

DANTE: *Vin.*

Vinnie takes his hands off the cart.

He walks to the elevator. He stops in the doorway, between the closing doors, one hand on each, holding them.

vinnie: Here\'s what I\'m gonna do, D. I\'m gonna drive you home. I\'m gonna put you in bed, and call your grandfather, and tell him you\'re okay. And then I\'m gonna give you back your coat.

DANTE: What are you—

vinnie: That\'s it. That\'s my two weeks\' notice. Tonight\'s the two weeks.

He looks back at you once over his shoulder.

vinnie: I picked, Sally. I picked by myself.

He gets in. The doors close. The numbers go down.

You stand in the corridor alone with a hot dog cart.`,
    next: 'a4_after'
  }
});
