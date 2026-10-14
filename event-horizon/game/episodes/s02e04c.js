/* S2 · E4 · MADE MEN, part 3 of 3: Act Four ("Friday"), tag, polls. */
EH.scenes('s02e04', {

  /* ================= ACT FOUR: FRIDAY ================= */
  a4_friday: {
    card: { kind: 'act', label: 'Act Four', title: 'Friday' },
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Fri', date: 'Jan 22', time: '6:05 PM' },
    enter: g => { g.sleep(7); },
    text: g => `Friday.

You shower. You change your shirt three times. Nik watches from his bed and says nothing, which for Nik is a symphony.

At six, your phone rings. Bree.

bree: Wawa.

sam: Bree.

bree: It\'s tonight.

You sit down on the bed.

bree: Heck\'s been watching the Navy Yard for two weeks. Every night at 11:51, the lights on the seventh floor of Building 7 go bright, like a camera flash. And tonight the guard on the stair door went home sick at four. Heck saw him go. Nobody came to replace him.

bree: Teddy says it\'s a gift. Heck says it\'s Marisol. I say it\'s a *trap*, Wawa. I say it\'s so obviously a trap that it\'s insulting.

bree: They\'re going anyway. Nine o\'clock, at the gate on Broad. Teddy\'s not telling Bruno. Bruno\'d kill him for breaking the understanding. They\'re going anyway.

She\'s quiet a second.

bree: You promised. In my aunt\'s kitchen. Marisol first. Then whatever. You said you\'d be there for Marisol.

bree: I\'m not asking you to come. I\'m telling you where we\'ll be. Nine o\'clock. Broad and Intrepid.

She hangs up.

You sit on the edge of the bed with the phone in your hand.

Nine o\'clock. Broad and Intrepid. Teddy and Heck and Bree going into a building where Femi Ojo had three holes drilled in his hip, through a door somebody left open on purpose.

Nine o\'clock. The roof. Jules, who said *I\'m not going to be lucky about this, I\'m going to be brave about it. Please be there.*

${g.f('nik_navy4') ? 'On Nik\'s fourth monitor, the Navy Yard dot is pulsing, bright, dim, bright, a pilot light waiting for 11:51.' : ''}

Nik is looking at you.

nik: Bro. Whatever it is. You can\'t be in two places.

He hears himself. He closes his eyes.

nik: Okay, you *can*. But you *shouldn\'t*. Grace said. Your hair said.`,
    choices: [
      { text: 'The roof. You promised Jules first. You\'ve been running toward everybody else since August. Tonight you stay.', tag: 'The roof',
        fx: g => { g.flag('friday4', 'roof'); g.hidden('revenant_drift', -1.5); g.bond('bree', { trust: -2 }); }, go: 'a4_roof' },
      { text: 'The Navy Yard. You promised Marisol. Three people are walking into a trap tonight, and you\'re the only one who can get them out.', tag: 'The Navy Yard',
        fx: g => { g.flag('friday4', 'navy'); g.hidden('revenant_drift', 1); g.bond('heck', { trust: 2 }); g.bond('teddy', { trust: 1 }); }, go: 'a4_navy' }
    ]
  },

  /* ---------- the roof ---------- */
  a4_roof: {
    night: true,
    loc: 'CARDONE HALL · ROOF',
    clock: { time: '9:00 PM' },
    text: g => `You text Bree before you go up. *im sorry. i cant tonight. please dont go.* She doesn\'t answer. It says *Read*.

You go up the stairs at 8:57. The roof door alarm has been broken since September.

She\'s there already. Of course she is. At the parapet, in the camel coat with the dart hole, with two coffees from the Wawa on the corner, the one where you became famous. She hands you one.

jules: You came.

sam: I said I would.

jules: You also said you\'d tell me in January. It\'s January twenty-second. I\'ve been counting.

The city is cold and clear. You can see all the way down Broad, to City Hall with Billy Penn on top, and past it, in the dark at the bottom of the city, a faint glow where the Navy Yard is.

You don\'t look at the glow.

She takes a breath. You watch her take it. You watch her decide to be brave, the way you\'d watch somebody decide to jump off a high dive.

jules: Here\'s my question. One question. You can only answer it with the truth.

jules: On the Parkway, I was holding your hand. And then I wasn\'t, and you were across the street, and nobody saw you move. On the roof in September, you went down the stairs and came back from a fire on 15th Street in less time than it takes to walk there. You bleed when nobody hit you. Your hands are always cold. You have white in your hair.

jules: And at midnight on New Year\'s, you asked me if I heard the bells.

She looks at you.

jules: What are you, Sam?`,
    choices: [
      { text: 'Tell her. All of it. August, the bus, the cold, the Slip. Everything. The deal is the deal.', tag: 'All of it',
        fx: g => { g.flag('roof4', 'all'); g.know('sam_slip', ['jules']); g.heat('jules', 10 - g.h('jules')); g.hidden('revenant_drift', -1); }, go: 'a4_reveal' },
      { text: 'Tell her the true part you can say. "When the world stops, I don\'t." And then stop. Let her decide if that\'s enough.', tag: 'The true part',
        fx: g => { g.flag('roof4', 'part'); g.hidden('revenant_drift', -0.5); }, go: 'a4_part' }
    ]
  },
  a4_reveal: {
    night: true,
    enter: g => { g.flag('mutual_reveal'); g.know('jules_changed', ['sam']); g.know('mutual_reveal', ['sam', 'jules'], 'On the roof of Cardone Hall on January 22, you told each other everything.'); },
    text: g => `You tell her.

August twenty-second, 11:51:04, Broad and Spring Garden, the bus, the boy, the cold like January, and you moving when nothing moved. Jayden. Carmen\'s hip. The Wawa. The armored car you couldn\'t move. Girard, and the lost minutes, and the frost on your sneakers. Kensington and Heck\'s fists and the bathroom floor where she sewed you up and you lied. The fire on 15th Street. Under 95, and Pop on his knees. Femi, who you could see. The Parkway: you didn\'t run, you *went*. Four minutes. The white hair.

The watch. ${g.f('assunta_watch') ? 'You take it out of your pocket and show her. Salvatore\'s watch, stopped at 11:51.' : ''} Your great-grandmother on Broad Street in 1918. Nonna\'s brother, who came back old.

Bruno. ${g.f('bruno_jobs_total') ? 'The jobs.' : ''} Teddy\'s hands on a bar in Fishtown.

The man across Broad Street with your face.

You tell her everything except one thing. The note. *Don\'t trust the lucky one.* You keep that. You don\'t know why. You keep it.

It takes an hour. She doesn\'t interrupt you once. She stands at the parapet with her coffee going cold in her hands and listens to all of it, the way she listened to a teacher in October, completely, like she\'s going to be tested on it.

When you\'re done, the city is very quiet.

jules: Okay.

She puts her coffee down on the parapet.

jules: My turn. Deal is a deal.

And she tells you.

The window in August, and every piece of glass missing her. The pool ball that stopped. The sixes, two hundred and twelve of them on a pink marble floor. A horse named Mercutio. A grandmother in a cold chapel with no cross. A clerk named Josiah who stood beside an engine when it stopped and said yes to something that liked him. *The house always collects. Not from us. Near us.* The four darts on the Parkway.

And a die, in the chapel, coming up one.

jules: I can turn it off now. Not always. It\'s like holding my breath. But I can lose. On purpose.${g.f('hugh3') === 'lost' ? ' I lost at billiards to Hugh at Christmas. He picked me up and swung me around the room.' : ''}

She looks at you.

jules: *Don\'t trust the lucky one.* I know there\'s something you didn\'t say. I could hear the shape of it. You can keep it. I kept something too.

You stand on the roof of Cardone Hall, the two of you, at ten o\'clock on a Friday in January, and you look at each other, and you both know, finally, completely, what the other one is.

She laughs. Very small. Then not small.

jules: We\'re ridiculous. Do you know that? We\'ve been circling each other on this roof since *September*. With our hands in our pockets.

sam: Simone said that.

jules: Simone says everything first. It\'s infuriating.

She reaches over and takes your cold hand in her warm one, and for once, for the first time, neither of you is hiding why.`,
    next: 'a4_roof_late'
  },
  a4_part: {
    night: true,
    text: `You look at her. At the city. At your own hands.

sam: When the world stops, I don\'t.

That\'s all. You say it, and you stop, and the cold air sits between you.

She doesn\'t say anything for a long time. Then she nods, slowly, like a doctor who\'s been given one symptom and can see the whole disease from it.

jules: Okay.

sam: That\'s not all of it.

jules: I know it isn\'t. I can hear the shape of the rest.

She picks up her coffee.

jules: Then here\'s mine. The same size. *Things go my way.* Always. Everything. Except when I hold my breath.

She looks at you.

jules: That\'s the true part I can say. The rest is seven pages long, and it\'s in my coat, and you can have it when you can give me the rest of yours.

sam: That\'s fair.

jules: It\'s the only fair thing either of us has done since September.

She puts her shoulder against yours on the parapet, and you stand there in the cold, the two of you, each holding half of something.`,
    next: 'a4_roof_late'
  },
  a4_roof_late: {
    night: true,
    clock: { time: '11:51 PM' },
    text: g => `At 11:51, you\'re still on the roof. ${g.f('roof4') === 'all' ? 'She has her back against your chest and your arms around her, inside your coat, and she\'s telling you about Ravenscourt at Christmas, the pink marble bathroom, the swans on the taps, and you\'re laughing.' : 'Shoulder to shoulder at the parapet. Not talking. Not needing to.'}

And you feel it.

Down at the bottom of the city, where the Navy Yard is, the faint glow goes white. For one second. Like a camera flash.

The cold comes up out of the roof, through your sneakers. Your nose starts to bleed. Beside you, Jules goes stiff, and grabs your arm, and you know she feels it too, something leaning, very close, from the south.

Then it\'s gone.

Your phone buzzes. Bree.

TXT bree: were in
TXT bree: the door on 7 was OPEN wawa. propped. with a fire extinguisher
TXT bree: theres nobody here. theres NOBODY here. every door is open. every light is on
TXT bree: heck found 714. shes not in it. theres a turkey dinner on a tray. cold. from november
TXT bree: teddy says keep going. theres more floors than there should be

Then nothing.

You stand on the roof with your phone in your hand and blood on your lip and Jules Pemberton holding your arm, looking south, at the dark where the Navy Yard is.

jules: Sam. What is that?

sam: My friends.`,
    next: 'tag_door'
  },

  /* ---------- the Navy Yard ---------- */
  a4_navy: {
    night: true,
    loc: 'BROAD & INTREPID · NAVY YARD GATE',
    clock: { time: '9:00 PM' },
    text: g => `You text Jules before you go. You type it five times.

TXT sam: something happened. friends in trouble. i cant tonight. im so sorry. i will explain. i swear i will explain

She doesn\'t answer.

At nine o\'clock at Broad and Intrepid, in the dark at the bottom of the city, Teddy and Heck and Bree are standing in the shadow of the guard shack at the Navy Yard gate. The guard shack is empty. The striped arm is up.

Heck sees you first. His whole face opens.

heck: *Papa.* You came.

teddy: Cold guy.

He looks at you. He looks tired, and thin, in a nice wool coat that Bruno bought him.

teddy: Bruno finds out I\'m here, I\'m done. Mom\'s done. The transplant list, all of it. You understand? I\'m putting all of that on the table to get a girl out of a room.

sam: Then why are you here?

teddy: Because you saved my life on the Parkway, and I owe somebody, and it\'s not gonna be Bruno.

Bree is looking at the empty guard shack, at the raised arm.

bree: Somebody\'s inviting us in, Wawa. That\'s an RSVP.

They go. You go. Across the dark Navy Yard, past the dry dock with its great stone steps going down into black water, past warehouses with their windows lit, to a brick building with new windows. Seven rows of them.

Building 7.

You go up the fire stairs. One. Two. Three. Six.

Seven.

The stair door on seven has a card reader on it with a little red light.

The door is propped open. With a fire extinguisher.

The hallway beyond is white and empty and lit, and very clean, and smells like a new car.

${g.f('assunta_watch') ? 'In your pocket, Salvatore\'s watch is cold. Colder than it\'s ever been.' : ''}

Heck pushes past you, toward the hallway, toward the doors with the narrow windows and the numbers on them.

heck: Marisol. *Marisol.*

Teddy grabs his arm. Heck shakes him off like he\'s nothing.

Bree is looking at you. Everybody is looking at you.`,
    choices: [
      { text: 'Go in. Behind Heck. Fast. Find 714 before whoever left the door open comes back to close it.', tag: 'Go in',
        fx: g => { g.flag('navy4', 'in'); g.hidden('halcyon_heat', 1); }, go: 'a4_navy_in' },
      { text: 'Stop Heck. Hold the line in the doorway. "It\'s a trap. She\'s not here. They want us in there."', tag: 'Hold the door',
        check: { kind: 'move', move: 'Hold the Line', attr: 'nerve', skill: 'persuade', label: 'Stop Heck at the door', on: { strong: 'a4_navy_hold', weak: 'a4_navy_hold_weak', miss: 'a4_navy_in' } } }
    ]
  },
  a4_navy_in: {
    night: true,
    enter: g => { g.flag('navy4', 'in'); },
    text: `You go in.

Down the white hallway behind Heck, past door after door with narrow windows. 701. 702. Empty rooms. Good beds with good sheets. A bowl of fruit nobody has touched. A television on with the sound off, showing a cooking show.

Every door is open. Every light is on. There\'s nobody here. Nobody at all.

714.

Heck gets there first. He stops in the doorway. You come up behind him.

The room is empty. The bed is made. On the desk, on a tray, under a silver dome, there\'s a turkey dinner. Turkey, stuffing, cranberry sauce, mashed potatoes, a dinner roll. Cold. Gray. It\'s been there since November. A little card on the tray, in neat handwriting: *Happy Thanksgiving, Marisol.*

The ceiling light has a new bulb in it.

Heck makes a sound like an animal.

And then, at 11:51, every light on the seventh floor of Building 7 goes white.

You feel it. The cold. Not your cold. *Theirs.* Something in the walls, in the floor, something running, like the Hitch run backward, pulling at you, pulling at the cold inside you like a hand on a rope. Your nose pours. Your knees go. Beside you, Teddy\'s hands go gray to the wrist without him touching anything. Heck starts to smoke. Bree screams, and her scream comes out in a dozen voices at once.

Then it stops. The lights go back to normal.

And at the end of the hallway, the stair door you came in through, the one propped open with a fire extinguisher, swings shut on its own, slowly, with a soft pneumatic hiss, and clicks.

The little red light on the card reader goes green. Then red again.

Teddy looks at you.

teddy: Cold guy.

sam: Yeah.

teddy: I think we\'re the dinner.`,
    next: 'tag_door'
  },
  a4_navy_hold: {
    night: true,
    enter: g => { g.flag('navy4', 'held'); g.bond('heck', { respect: 2 }); g.bond('bree', { trust: 2 }); g.hidden('revenant_drift', -1); },
    text: `You step into the doorway in front of Heck and put both hands on his chest. He\'s hot. He\'s so hot your palms sting.

sam: Heck. *Heck.* Look at me.

He looks at you.

sam: It\'s a trap. Bree\'s right. Every door\'s open. Every light\'s on. There\'s nobody here. She\'s not here, Heck. They moved her. They want *us* in there. They want us in there at 11:51.

His face is wet. He\'s crying, and the tears are steaming.

heck: She\'s my friend, papa. She texted me. In September. To come to McPherson. It wasn\'t her. It was them, on her phone. But she was my *friend*.

sam: I know. I know. And if we go in there, there\'s nobody left to find her.

He looks past you down the white hallway. At the doors. At 714, halfway down, with its narrow window, its light on.

Then he puts his big hot hand on the back of your head, gently, like you\'re one of his little cousins, and steps back.

heck: Okay. Okay, papa.

You back down the stairs, all four of you, fast, in the dark.

At the bottom, as you come out into the cold of the Navy Yard, at 11:51, every window on the seventh floor of Building 7 goes white. Like a camera flash. The cold comes through the brick and the ground and your sneakers and your nose pours and Heck steams and Bree gasps in a dozen voices.

Then it\'s dark.

Up on seven, through the window, you see the stair door swing shut on its own.

Bree looks at it. Then at you.

bree: That was for us.

sam: Yeah.

bree: You were right.

sam: I wish I wasn\'t.

You get them out through the gate. Nobody stops you. Nobody\'s there to stop you. That\'s the worst part.`,
    next: 'tag_door'
  },
  a4_navy_hold_weak: {
    night: true,
    enter: g => { g.flag('navy4', 'split'); g.bond('bree', { trust: 2 }); },
    text: `You step into the doorway and put your hands on Heck\'s chest.

sam: It\'s a trap. She\'s not here. They want us in there.

Heck stops. He looks at you. He looks down the hallway.

heck: I\'m sorry, papa.

He picks you up by the shoulders, gently, like a box he\'s moving, and sets you down to one side, and goes in.

Teddy swears and goes after him.

Bree stays with you on the landing. She grabs your arm.

bree: Wawa. Wawa, *do something*.

You can see them, down the white hallway, Heck in front, Teddy behind, getting smaller. 708. 710. 712.

At 11:51, every light on the seventh floor goes white.

The cold comes through the walls like a tide going out, pulling. Your nose pours. Bree screams in a dozen voices. Down the hallway, you see Teddy\'s hands go gray and Heck start to burn.

Then the lights are normal. And the stair door, the one you\'re standing in, starts to swing shut on its own, slow, with a soft pneumatic hiss.

You have about three seconds to choose which side of it you\'re on.`,
    next: 'tag_door'
  },

  /* ================= TAG ================= */
  tag_door: {
    card: { kind: 'tag' },
    night: true,
    loc: 'NAVY YARD · BUILDING 7 · THE GLASS ROOM',
    clock: { time: '11:52 PM' },
    text: g => `> THE CAMERA.

Behind the glass at the end of the white hallway, in the dim room with the screens, Dr. Achterberg is standing very close to a monitor with her glasses pushed up on her head.

On the monitor: thermal. The seventh floor. ${g.f('navy4') === 'in' ? 'Four blue shapes in the hallway, by 714. One of them very blue.' : g.f('navy4') === 'split' ? 'Two blue shapes in the hallway by 714. Two more on the landing, by the closing door.' : g.f('navy4') === 'held' ? 'Nothing on seven. Down in the yard, four blue shapes, running for the gate.' : 'Three blue shapes in the hallway, by 714. Only three.'}

Brannigan stands behind her with his tea.

ACHTERBERG: ${g.f('friday4') === 'roof' ? 'Seventeen didn\'t come.' : g.f('navy4') === 'held' ? 'He pulled them out.' : 'He came.'}

BRANNIGAN: ${g.f('friday4') === 'roof' ? 'No. He was on a roof on North Broad. With forty-four. The Gladwyne post had them both on thermal at 11:51. One of them very cold. One of them nothing at all.' : g.f('navy4') === 'held' ? 'He did. At the door. He stopped the big one with his hands.' : 'He did. He always does. I told you.'}

Achterberg is quiet. She takes her glasses down and cleans them on her cardigan.

ACHTERBERG: ${g.f('friday4') === 'roof' ? 'Interesting. He chose her.' : g.f('navy4') === 'held' ? 'Interesting. He chose to stop.' : 'Of course he did.'}

She puts the glasses back on.

ACHTERBERG: The pulse at 11:51. Did it reach him?

BRANNIGAN: Nik Bhattacharya\'s map has had a dot on this building every night for two weeks. He\'s watching us watch him. I imagine it reached everyone who was looking.

Achterberg nods slowly.

ACHTERBERG: Then the experiment worked. Leave the door ${g.f('navy4') === 'in' ? 'shut' : 'open'}, Cole.

> ELSEWHERE.

A pho restaurant on Washington Avenue, dark, the chairs up on the tables. ${g.f('job4') === 'warned' ? 'A sign in the window: CLOSED FOR FAMILY EMERGENCY. The koi tank empty.' : 'Thomas Nguyen, alone, in his apron, sitting at a table in the dark, with his head tilted. Listening. To something very far away, to the south, that went quiet at 11:51 and hasn\'t made a sound since.'}

> ELSEWHERE.

Dana Fiorillo\'s corkboard at the Inquirer, two in the morning. She\'s moved the masking tape. It doesn\'t say *BLUR = IANNUCCI?* anymore.

${g.f('dana4') === 'halcyon' ? 'It says: *HALCYON. FEMI OJO. FELD. WHO PAID?*' : 'It says: *BLUR + IANNUCCI + ???*'}`,
    end: true
  }
});

Object.assign(EH.episodes.s02e04, {
  polls: [
    { q: 'Phở Thanh', opts: [
      { label: 'Talked him in', pct: 41, if: g => g.f('job4') === 'talked' || g.f('job4') === 'smashed' },
      { label: 'Warned him to run', pct: 37, if: g => g.f('job4') === 'warned' },
      { label: 'Let Dante handle it', pct: 22, if: g => g.f('job4') === 'dante' }
    ] },
    { q: 'Dana Fiorillo', opts: [
      { label: 'Lied', pct: 31, if: g => g.f('dana4') === 'lied' },
      { label: 'Gave her Halcyon', pct: 48, if: g => g.f('dana4') === 'halcyon' },
      { label: 'Walked away', pct: 21, if: g => g.f('dana4') === 'walked' }
    ] },
    { q: 'Friday, nine o\'clock', opts: [
      { label: 'The roof', pct: 53, if: g => g.f('friday4') === 'roof' },
      { label: 'The Navy Yard', pct: 47, if: g => g.f('friday4') === 'navy' }
    ] }
  ],
  onEnd: g => {
    g.recap('Vinnie is Dante Iannucci\'s right hand now.');
    if (g.f('dana4') === 'halcyon') g.recap('You gave Dana Fiorillo the Navy Yard. Off the record.');
    else g.recap('Dana Fiorillo has a photo of an Iannucci car, and a kid in a hoodie.');
    if (g.f('friday4') === 'roof') g.recap(g.f('roof4') === 'all' ? 'On the roof, on January 22, you and Jules told each other everything.' : 'On the roof, you told Jules the true part: when the world stops, you don\'t. She told you hers.');
    if (g.f('friday4') === 'roof') g.recap('Teddy, Heck, and Bree went into Building 7 without you. The door was open.');
    else g.recap(g.f('navy4') === 'held' ? 'You stopped Heck at the door of the seventh floor. At 11:51, the floor went white, and the door closed on nothing.' : 'You went into Building 7. Marisol\'s room was empty. At 11:51, the floor went white, and the door closed.');
  }
});
