/* S1 · E10 · BROAD STREET, part 4 of 4: Act Four ("Broad Street"), tags, polls. */
EH.scenes('s01e10', {

  /* ================= ACT FOUR: BROAD STREET ================= */
  a4_waterworks: {
    card: { kind: 'act', label: 'Act Four', title: 'Broad Street' },
    loc: 'FAIRMOUNT WATER WORKS · BEHIND THE ART MUSEUM',
    clock: { time: '11:20 AM' },
    enter: g => { g.heat('press', 1); },
    text: g => `Behind the Art Museum, down the hill, the old Water Works sits on the bank of the Schuylkill like a row of little Greek temples somebody forgot. Nobody\'s down here. Everyone in Philadelphia is up on the Parkway, or watching it on television.

The river is low and brown and in no hurry. Boathouse Row is across the water. A goose walks past.

You\'re sitting on the stone wall over the river. ${g.f('choice10') === 'teddy' || g.f('choice10') === 'both' ? 'Bree took Teddy to Jefferson in a cab, conscious, furious, alive. Heck went with them.' : 'Teddy is gone. Bree took Heck back to Port Richmond in a cab, both of them crying.'} ${g.f('mikey_knows') ? 'Mikey had to go back to the task group. He made you promise to be on Mifflin Street at four. He made you say it twice.' : 'Mikey had to go back to the task group. *Four o\'clock,* he said. *Mifflin Street. Or I come get you.*'}

Jules is sitting next to you. Her nose has stopped bleeding. There\'s a smear of dried blood on her lip she hasn\'t noticed.

You take the handkerchief out of your pocket. White, ironed, *JLP* in navy thread. You\'ve had it since September. You hold it out.

She looks at it. She laughs, once, surprised, and takes it, and wipes her lip, and looks at the blood on her own monogram.

jules: You kept it.

sam: You said keep it.

jules: People don\'t usually do what I say. They do what I *want*. It\'s different.

The goose walks back the other way.

sam: Jules. On the Parkway. The darts.

jules: Yes.

sam: All of them.

jules: Yes.

She folds the handkerchief in half. In half again.

jules: What did *you* do? You were next to me. And then you were across the street with Jayden, or in the back of an ambulance. I was holding your hand, Sam. I *felt* you go.

You don\'t answer. She doesn\'t answer. You sit on the wall over the Schuylkill with both your secrets between you, close enough to touch.`,
    choices: [
      { text: '"What if it was me?" Say it. See what she does.', tag: 'What if',
        fx: g => { g.flag('waterworks10', 'whatif'); g.bond('jules', { trust: 1 }); }, go: 'a4_whatif' },
      { text: 'Don\'t ask. Take her hand. Just sit here.', tag: 'Her hand',
        fx: g => { g.flag('waterworks10', 'hand'); g.hidden('revenant_drift', -0.5); }, go: 'a4_hand' },
      { text: 'Kiss her. On a wall by the river, in front of a goose, with blood on both your faces.', tag: 'Kiss her',
        fx: g => { g.flag('waterworks10', 'kiss'); g.bond('jules', { affection: 1 }); }, go: 'a4_kiss' }
    ]
  },
  a4_whatif: {
    text: `sam: What if it was me?

She goes very still.

It\'s her line. Her text, at 12:58 in the morning in October, the one you read at 1:09 and typed nine answers to and sent none. *What if it was me.*

She looks at you. She knows exactly what you\'re doing.

jules: What if it was?

sam: What if it was?

Neither of you says anything else. The river goes by. You both sit there, on the edge of it, looking at each other, each of you waiting for the other one to go first.

Then she takes your hand. She laces her fingers through yours, all the way, and holds on.

jules: Ask me some other time.

sam: I will.

jules: I know you will. I\'m counting on it.`,
    next: 'a4_hugh'
  },
  a4_hand: {
    text: `You don\'t ask. You take her hand.

She looks down at it. Then she laces her fingers through yours, all the way, and holds on, and puts her head on your shoulder, and the two of you sit on the wall over the Schuylkill and watch the water go by.

You don\'t say anything. She doesn\'t say anything. It\'s enough.

After a while, very quietly, into your shoulder:

jules: Someday I\'m going to tell you something. And you\'re going to tell me something. And neither of us is going to enjoy it.

sam: Yeah.

jules: Not today.

sam: Not today.`,
    next: 'a4_hugh'
  },
  a4_kiss: {
    text: `You kiss her.

On a stone wall over the Schuylkill, with a goose watching, with dried blood on her lip and fresh blood on yours, both of you shaking with cold and with whatever happened on the Parkway, and she grabs the front of your sweatshirt in both fists and kisses you back like she\'s angry about it.

When it\'s over she keeps her forehead on yours.

jules: That doesn\'t answer anything.

sam: I know.

jules: I\'m still going to ask.

sam: I know.

jules: And you\'re going to tell me.

sam: Someday.

jules: *Soon*, Kearney. I don\'t do someday.`,
    next: 'a4_hugh'
  },
  a4_hugh: {
    text: `Her phone rings. She looks at it.

jules: Hugh.

She answers.

jules: Yes. Yes. I\'m fine. Behind the museum. No. *No.* Tell her I\'ll be up in five minutes. Tell her I said *five*.

She hangs up.

jules: My mother is, quote, *having an aneurysm in public*. My father has had four phone calls with the Mayor. Gran watched the whole thing on television in Gladwyne and has asked Hugh to tell me she is, quote, *not surprised*.

She stands up off the wall. She brushes off the back of her camel coat, which has a dart hole in it.

jules: Happy Thanksgiving, Kearney.

sam: Happy Thanksgiving, Pemberton.

She starts up the hill. Halfway, she stops, and turns around, and holds up the handkerchief.

jules: I\'m keeping this one.

She goes.`,
    next: 'a4_mifflin'
  },

  a4_mifflin: {
    loc: 'MIFFLIN STREET · SOUTH PHILADELPHIA',
    clock: { time: '4:00 PM' },
    text: g => `At four o\'clock on Thanksgiving, the Kearney house on Mifflin Street is ninety degrees inside and smells like turkey and sausage stuffing and Ma\'s gravy, and the TV in the front room is on with the sound off, showing the Parkway from a helicopter, over and over. A bent lamppost. A deflated dog. Ambulances without numbers driving away.

The chyron says: **PARKWAY CHAOS: "BLUR" SIGHTED; FREEZE GROUP REMAINS AT LARGE.**

Nobody\'s watching it. Gigi turned the sound off at three-thirty and told everyone it was *a family rule now*.

Ma doesn\'t say anything about your face. She looks at it ${g.f('choice10') === 'jayden' || g.S.injuries.length ? 'and the cuts and the way you\'re holding your arm' : ''} and goes very quiet and gets the first-aid kit from under the sink, the school-nurse kit, and sits you down on the closed toilet and cleans you up without a word, the way she has since you were four. When she\'s done, she holds your face.

rosa: I sat up at nine forty-one this morning.

sam: Ma—

rosa: I\'m not asking, Salvatore. I\'m telling you. I always know. I don\'t always know what.

She kisses your forehead.

rosa: Go sit with your grandmother.

The table is the dining room table with both leaves in and the card table on the end for Gigi, because Gigi insists on sitting at the card table, she says it\'s *the cool table*. Nonna at the head, in her good black dress. Pop at the other end, not eating yet, with his hands flat on the tablecloth. Ma. Gigi. You. ${g.f('mikey_knows') ? 'Mikey, across from you, in a clean shirt, with his badge still on a chain around his neck because he forgot to take it off. He doesn\'t stop looking at you. Not once. Not like he\'s mad. Like he\'s afraid if he looks away, you\'ll be somewhere else.' : 'Mikey, across from you, in a clean shirt, with his badge still on a chain around his neck. He keeps looking at you. Adding it up.'}

Nonna says grace.

She says it in Italian, the long one. And at the end, where she always says the names of the dead, her husband and her mother and her sister, she stops. She looks at you.

nonna: E il ragazzo che nessuno vedeva.

*And the boy nobody saw.*

nonna: Amen.

Everybody says amen. Gigi says it in Italian too, badly, and looks at you to see if you noticed.

You eat. You actually eat. It\'s the best thing you\'ve ever tasted. You know that\'s not true. It\'s true.

At 4:40, somebody knocks on the front door.

Three knocks. Polite.

Pop puts his fork down.`,
    next: 'a4_bruno'
  },
  a4_bruno: {
    loc: 'MIFFLIN STREET · THE DINING ROOM',
    clock: { time: '4:40 PM' },
    enter: g => { g.know('bruno', ['sam', 'frank', 'rosa', 'mikey', 'nonna', 'gigi'], 'On Thanksgiving, Bruno Iannucci came to dinner on Mifflin Street with his grandson Dante.'); },
    text: g => `Bruno Iannucci is sixty-eight years old and wears a camel-hair overcoat and a gray fedora with a little feather in the band, and he takes the fedora off in the doorway, which is how you know he was raised right, and he smiles at Ma like a favorite uncle.

BRUNO: Rosa. Happy Thanksgiving. I won\'t stay. I know it\'s family.

Behind him, in a beautiful jacket: Dante. Twenty-four. Smiling.

Through the front window, at the curb on Mifflin Street, a black Escalade idling, and at the wheel, not looking at the house, not looking at anything, Vinnie.

Pop gets up. He gets the shoebox from the hutch. He brings it into the front room and holds it out with both hands, like it\'s heavy.

frank: Eleven thousand four hundred. The rest by summer, Bruno. I swear on my mother.

Bruno takes the box. He doesn\'t open it. He hands it to Dante without looking.

BRUNO: That\'s very good, Frank. That\'s an honest effort. I respect an honest effort.

He walks into the dining room. Nobody invited him. He looks at the table. He looks at Nonna, and Nonna looks back at him, and something passes between two people who have both lived on these blocks for seventy years, and Bruno is the one who looks away first.

BRUNO: Teresa.

nonna: Bruno. You got old.

BRUNO: We all got old, Teresa. That\'s the good news.

He looks at Mikey. At the badge on the chain. He smiles.

BRUNO: Officer.

Then he looks at you.

${g.f('cap10') ? `BRUNO: I watched the parade on the TV this morning. Channel 6. Lot of excitement. My grandson, he got very excited. A kid in a hood on the Parkway. Moving very fast. Too fast for the camera, they said. You know, like a blur.

He reaches over the table, past the gravy boat, and picks up an old Eagles cap from the chair beside you, where you dropped it when you came in. Faded green. Sweat stain on the brim. He turns it over in his hands.

BRUNO: My grandson says he saw this hat under 95. In October. He says he saw it on your father\'s head at the Melrose in September. My grandson\'s very observant. It\'s his best quality.

He puts the cap down on your plate, gently, on top of the turkey.` : `BRUNO: My grandson says your boy is interesting. Under 95, in October. He says a lot of things. He\'s usually wrong.

He looks at you a moment longer.

BRUNO: But sometimes not.`}

BRUNO: Forty-one thousand dollars is a lot of money for a cab driver. It\'s not so much money for a young man with *talents*.

He takes a card out of his coat. Cream. Heavy. Just a name and a phone number. He lays it on the tablecloth next to your hand.

BRUNO: After the holiday. Come see me. Alone. We\'ll talk about how your family settles its debts.

Pop takes a step forward.

frank: Bruno. He\'s eighteen. He\'s got nothing to do with—

BRUNO: Frank. Sit down. Eat your turkey. It\'s Thanksgiving.

The whole table is looking at you.`,
    choices: [
      { text: 'Say nothing. Pop asked you. Not one word to these men.', tag: 'Silence',
        fx: g => { g.flag('bruno10', 'silent'); g.bond('frank', { trust: 1, respect: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a4_bruno_silent' },
      { text: 'Stand up. Look him in the eye. "Get out of my mother\'s house."', tag: 'Stand up',
        check: { kind: 'move', move: 'Lean On', attr: 'nerve', skill: 'intimidate', label: 'Stare down Bruno Iannucci', on: { strong: 'a4_bruno_stand', weak: 'a4_bruno_stand_weak', miss: 'a4_bruno_stand_miss' } } },
      { text: 'Pick up the card. Put it in your pocket. Look at him so he knows you will.', tag: 'Take the card',
        fx: g => { g.flag('bruno10', 'card'); g.bond('frank', { tension: 2 }); g.hidden('revenant_drift', 1); }, go: 'a4_bruno_card' }
    ]
  },
  a4_bruno_silent: {
    text: `You don\'t say anything.

You look at your plate. You look at Pop. Pop looks at you, and something in his face lets go, just a little.

Bruno waits. When nothing happens, he smiles, like you passed something.

BRUNO: Good boy. Respectful. That\'s rare now.

He puts his fedora back on in the dining room, which is how you know he\'s finished being polite.

BRUNO: Happy Thanksgiving, everybody. Rosa, the house smells beautiful.

They go. The door closes. Through the window, the Escalade pulls away, and Vinnie still doesn\'t look at the house.

The card is still on the tablecloth next to your hand.

Nobody touches it.`,
    next: 'a4_after'
  },
  a4_bruno_stand: {
    enter: g => { g.flag('bruno10', 'stood'); g.bond('frank', { respect: 2 }); g.bond('mikey', { respect: 1 }); },
    text: `You stand up. Your chair scrapes on Ma\'s floor. You look him in the eye.

sam: Get out of my mother\'s house.

It comes out quiet. It comes out steady. You don\'t know where it comes from. Some of it comes from Pop. Some of it comes from Nonna. Some of it comes from the Parkway this morning, from four men and four darts and a woman walking down the middle of a frozen street.

Bruno looks at you. Then he laughs. A real laugh, delighted, an old man\'s laugh.

BRUNO: Oh, Frank. Oh, he\'s *wonderful*.

He puts his fedora back on.

BRUNO: After the holiday, son. The card has my number.

They go. The door closes. The Escalade pulls away.

You\'re still standing. Your knees aren\'t working right. Across the table, Mikey is looking at you like he\'s never seen you before. Gigi is looking at you like you\'re a superhero.

Pop is looking at the card.`,
    next: 'a4_after'
  },
  a4_bruno_stand_weak: {
    enter: g => { g.flag('bruno10', 'stood'); g.bond('frank', { respect: 1 }); },
    text: `You stand up. Your chair scrapes on Ma\'s floor.

sam: Get out of my mother\'s house.

Your voice cracks on *mother*. Just a little. Just enough.

Bruno lets it sit. Then he smiles, kindly, the way you\'d smile at a dog barking behind a fence.

BRUNO: You\'re a good son. That\'s nice to see.

He puts his fedora back on.

BRUNO: After the holiday. The card has my number.

They go. The door closes. You sit down before your knees decide for you.

Nobody touches the card.`,
    next: 'a4_after'
  },
  a4_bruno_stand_miss: {
    enter: g => { g.flag('bruno10', 'stood'); g.bond('frank', { tension: 1 }); },
    text: `You start to stand up, and Bruno puts one hand on your shoulder, gently, from behind, and pushes you back down into your chair. He\'s sixty-eight. He doesn\'t push hard. He doesn\'t have to.

BRUNO: Sit, son. Sit. It\'s Thanksgiving.

He pats your shoulder twice.

BRUNO: After the holiday.

He puts his fedora back on. They go. The door closes.

Your face is burning. Across the table, Pop is looking at his plate.

Nobody touches the card.`,
    next: 'a4_after'
  },
  a4_bruno_card: {
    text: `You pick up the card. You look at it. *Bruno Iannucci*, and a 215 number. You put it in your pocket.

You look at him so he knows you will.

Bruno nods slowly. He looks pleased, and a little sad, like a man who has seen this exact thing happen before, many times, on these exact blocks.

BRUNO: After the holiday.

He puts his fedora back on.

frank: *Kid.*

You don\'t look at Pop. You can\'t.

They go. The door closes. Through the window, the Escalade pulls away, and at the wheel, for one second, Vinnie looks at the house. Right at you.

Then he looks away.`,
    next: 'a4_after'
  },

  a4_after: {
    night: true,
    loc: 'THE STOOP',
    clock: { time: '9:30 PM' },
    enter: g => { g.sleep(8); },
    text: g => `Later, you sit on the stoop in the cold.

Your phone has been going all day. You look at it now, for the first time.

TXT nik: bro
TXT nik: BRO
TXT nik: my aunt thinks i have dysentery
TXT nik: are you alive. text me a word. any word
TXT simone: ${g.f('simone9') !== 'lied' || g.f('simone10') === 'mended' ? 'Salvatore Kearney. I watched a "medical emergency" on the Parkway on my grandmother\'s TV in Decatur, and my grandmother said "that boy is too fast," and I had to go sit in the car. Text me that you\'re alive. Then I\'m calling you. Then you\'re telling me EVERYTHING.' : 'I saw the news. Are you alive.'}
TXT grace: Okay. Text me when you need stitches. Not if. When.
TXT bree: ${g.f('choice10') === 'jayden' ? 'they took him. you know they took him. heck wants to go to the navy yard tonight. i said wait for you. i said you promised. you promised wawa' : 'hes at jefferson. hes awake. hes mad at you for saving him. thats how you know hes ok. heck is ' + (g.f('heck_taken10') ? 'gone. they took heck. i cant stop shaking' : 'here. heck says papa')}
TXT jules: Gran asked who you were.
TXT jules: I told her.
TXT jules: She said, "Ah."

You type *alive* to Nik. You type *alive* to Simone. You don\'t know what to type to Bree.

${g.f('mikey_knows') ? 'The door opens behind you. Mikey comes out and sits on the step next to you with two cans of Yuengling, like the night after All Souls. He hands you one.\n\nHe doesn\'t say anything.\n\nmikey: Does Pop know?\n\nsam: He thinks he knows.\n\nmikey: Ma?\n\nsam: Ma always knows. She doesn\'t know *what*.\n\nHe nods. He drinks.\n\nmikey: I\'m on the task group. Hunting you. You get that that\'s funny?\n\nHe doesn\'t laugh.\n\nmikey: Brannigan\'s gonna ask me tomorrow what I saw. On the Parkway. When you were standing next to the girl, and then you weren\'t.\n\nsam: What are you gonna say?\n\nHe looks at you. Your brother. The family hero.\n\nmikey: I\'m gonna say I didn\'t see nothing. And I\'m gonna be lying to a man who kills people. For you.\n\nHe puts his arm around your shoulders.\n\nmikey: So you better be worth it, Sammy.' : 'The door opens behind you. Mikey comes out and stands on the step above you with his hands in his pockets.\n\nmikey: You were on the Parkway.\n\nIt isn\'t a question.\n\nmikey: Next to the Pemberton girl. Bleeding. Like you get.\n\nYou don\'t say anything.\n\nmikey: Someday you\'re gonna tell me. And I\'m gonna be mad. And then I\'m gonna be something else.\n\nHe goes back in. He leaves the door open a crack, so the warm comes out.'}

Down at the end of Mifflin Street, under the streetlight, there\'s nobody.

There\'s salt on Nonna\'s step.`,
    next: 'tag_achterberg'
  },

  /* ================= TAGS ================= */
  tag_achterberg: {
    card: { kind: 'tag' },
    night: true,
    loc: 'NAVY YARD · BUILDING 7 · SEVENTH FLOOR',
    clock: { time: '11:51 PM' },
    text: g => `> THE CAMERA.

On the seventh floor of Building 7, behind glass, the screens are full of the Parkway.

Thermal footage. Half a million warm bodies in orange and red. And in the middle of them, for a single frame, a blue shape, standing beside a girl in a camel coat. In the next frame, the blue shape is gone. In the frame after that, it\'s ${g.f('choice10') === 'jayden' ? 'across the street, on the sidewalk under a falling lamppost' : g.f('choice10') === 'both' ? 'everywhere, smeared across forty feet of street in a long blue streak, like a comet' : 'at the back of an ambulance'}.

Dr. Achterberg runs it back. Runs it forward. Back. Forward.

Down the white hallway, a door with **${g.f('heck_taken10') ? '715' : '716'}** stenciled on it. Through its narrow window, ${g.f('heck_taken10') ? 'an enormous man lies strapped to a bed with ice packs piled on his chest, steam rising off him toward the ceiling.' : g.f('teddy_taken10') ? 'a young man in a gray Little League hoodie sits on the edge of a bed with both hands in thick white mittens taped at the wrists, staring at the door.' : 'an empty bed with fresh sheets, waiting.'}

Brannigan stands beside her with his tea.

ACHTERBERG: Well.

She freezes the frame on the blue shape.

ACHTERBERG: ES-17 is confirmed.

BRANNIGAN: And forty-four?

Achterberg advances the footage to a girl in a camel coat walking down the middle of the frozen Parkway through four darts. She watches it twice.

ACHTERBERG: Leave forty-four to her family. For now. They\'re very particular about their own.

She takes off her glasses. She cleans them on her cardigan.

ACHTERBERG: Seventeen is going to come here, Cole. For Miss Reyes. For the others.

ACHTERBERG: Let\'s make sure the door is open.`,
    next: 'tag_steps'
  },
  tag_steps: {
    night: true,
    loc: 'THE ART MUSEUM STEPS',
    clock: { time: '11:59 PM' },
    text: g => `> THE CAMERA.

The Parkway at midnight on Thanksgiving. The barricades are stacked on the median. The bent lamppost lies in the gutter at 21st with yellow tape around it. A city worker is sweeping up the last of the glass.

At the top of the Art Museum steps, the seventy-two steps where every tourist in the world runs up and throws their arms in the air, a man is sitting alone on the top step in the cold.

Gray at the temples. A scar through his lip. His left hand resting on his knee, with a gap where the ring finger should be. He\'s looking down the Parkway toward City Hall, toward Broad Street, at the lights.

Beside him, on the stone, there\'s frost.

Not where he\'s sitting. Next to him. A shape on the top step, in white frost, the shape of someone sitting there beside him with their knees drawn up. Someone the camera can\'t see.

He talks to it without turning his head. His voice is Sam\'s voice, worn to the wire.

old_sam: ${g.f('choice10') === 'jayden' ? 'He picked the boy. The same boy.' : g.f('choice10') === 'teddy' ? 'He picked the one in the ambulance. The big one went instead.' : (g.f('unstick10') ? 'He tried to carry all of them. He got stuck. He got out.' : 'He carried all of them. This time.')}

He listens to something.

old_sam: I know. I know he did.

He listens.

old_sam: No. Not yet. He still thinks he can carry all of them.

He looks at the frost beside him.

old_sam: So did I.

Then he turns his head and looks straight down the steps, straight into the camera, straight at *you*, and puts one finger to his lips.

A bus goes by on the Parkway.

When it\'s gone, the top step is empty, and the frost is already going to water, and there are two shapes in it, side by side.

> END OF SEASON ONE.`,
    end: true
  }
});

Object.assign(EH.episodes.s01e10, {
  polls: [
    { q: 'Thanksgiving morning', opts: [
      { label: 'Called Mikey', pct: 54, if: g => g.f('called_mikey10') === true },
      { label: 'Just went', pct: 46, if: g => g.f('called_mikey10') === false }
    ] },
    { q: 'Ninety seconds', opts: [
      { label: 'Saved Teddy', pct: 33, if: g => g.f('choice10') === 'teddy' },
      { label: 'Saved Jayden and Carmen', pct: 41, if: g => g.f('choice10') === 'jayden' },
      { label: 'Slipped for both', pct: 26, if: g => g.f('choice10') === 'both' }
    ] },
    { q: 'Bruno Iannucci, at the table', opts: [
      { label: 'Stayed silent', pct: 38, if: g => g.f('bruno10') === 'silent' },
      { label: 'Stood up', pct: 44, if: g => g.f('bruno10') === 'stood' },
      { label: 'Took the card', pct: 18, if: g => g.f('bruno10') === 'card' }
    ] }
  ],
  onEnd: g => {
    g.recap('On Thanksgiving, Teddy Kowal froze the Parkway. Halcyon came for the Changed in fake ambulances.');
    g.recap(g.f('choice10') === 'jayden' ? 'You saved Jayden and Carmen. Halcyon took Teddy.' : g.f('choice10') === 'teddy' ? 'You pulled Teddy out of the ambulance. Heck caught the lamppost, and Halcyon took him.' : 'You Slipped and saved them both. You lost four minutes. Mikey saw.');
    g.recap('Jules walked down the frozen Parkway through four darts. Every one of them missed.');
    g.recap('Bruno Iannucci came to Thanksgiving dinner. "After the holiday. Come see me. Alone."');
    g.recap('Dr. Achterberg: "ES-17 is confirmed."');
  }
});
