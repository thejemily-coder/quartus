/* S2 · E9 · DOLLAR NIGHT, part 4 of 4: Act Four ("Mifflin Street"), tag, polls. */
EH.scenes('s02e09', {

  /* ================= ACT FOUR: MIFFLIN STREET ================= */
  a4_after: {
    card: { kind: 'act', label: 'Act Four', title: 'Mifflin Street' },
    night: true,
    loc: 'PATTISON AVENUE',
    clock: { time: '10:40 PM' },
    text: g => `Outside, Pattison Avenue is a river of red jerseys heading for the subway. Somebody is still carrying an armful of hot dogs. The Phillies lost, six to one. Nobody cares.

Jules finds you by the Harry Kalas statue. She walks straight up to you through the crowd.

${g.f('slip9b') === 'jules' ? 'jules: You put me in a *closet*.\n\nsam: It was a coat room.\n\njules: You walked me backward into my father\'s coat room like a *mannequin* and you *closed the door*, Sam.\n\nShe\'s furious. She\'s shaking. She grabs the front of your hoodie in both fists.\n\njules: I saw you do it. I was *in there*. I could see. I watched you walk me in, and close the door, and I couldn\'t do anything but *watch*.\n\nsam: I know.\n\njules: Don\'t ever do that again. Don\'t you ever decide where I stand.\n\nThen she puts her forehead against your chest, in the middle of Pattison Avenue, with forty thousand people walking around you.\n\njules: Thank you. Don\'t ever do it again. Thank you.' : g.f('slip9') === 'talk' ? 'jules: You walked into the middle of five guns with your hands up.\n\nsam: Yeah.\n\njules: And *talked*.\n\nsam: I talk. It\'s my whole thing. Ask anybody.\n\nShe stares at you. Then she laughs, and it breaks, and she grabs your hoodie in both fists and holds on.\n\njules: You didn\'t go in. You could have, and you didn\'t.\n\nsam: There were people to talk to.' : 'jules: Sam.\n\nShe stops in front of you. She looks at you like she\'s seeing you for the first time. Or the second.\n\njules: I saw you.\n\nsam: What?\n\njules: In there. When it stopped. I couldn\'t move, but I could see. I watched you walk down the hallway and take the gun out of Dante\'s hand like you were taking a fork from a toddler. I watched you put it in the *sauerkraut*.\n\nShe\'s shaking.\n\njules: My eyes moved, Sam. Like Gran\'s, in the car. Nonna said—\n\nsam: I know. I saw you see me.\n\nShe grabs the front of your hoodie in both fists and holds on.'}

${g.f('jules_saw9') ? '\nAnd you think: *every time*. Every time you\'ve been in the second near her. The Parkway. Every time. Maybe she was always watching. Maybe you just never looked back.' : ''}

Your phone buzzes.

${g.f('slip9') === 'told' ? 'TXT rosa: 4\nTXT rosa: four seconds. I counted. come home sunday\n\nYou look at it for a long time. Four. Your mother counted to four at her kitchen sink, two miles away, and got it exactly right.' : g.f('broke_count9') ? 'TXT rosa: you went in. I felt it. 9:21\nTXT rosa: you promised me before\n\nYou don\'t know what to write back. You write *I\'m sorry*. She doesn\'t answer for an hour. Then: *come home sunday.*' : 'TXT rosa: count?\nTXT sam: zero\nTXT rosa: good. come home sunday'}`,
    next: 'a4_sunday'
  },

  a4_sunday: {
    loc: 'MIFFLIN STREET',
    clock: { day: 'Sun', date: 'Apr 18', time: '3:00 PM' },
    enter: g => { g.sleep(7); },
    text: g => `${g.f('vinnie9') === 'stayed' ? `Sunday. Gravy since nine.

Vinnie is at the table on Mifflin Street.

He\'s been there since Thursday. He sleeps on the couch in the front room with his feet hanging off the end. Ma found him on the stoop at two in the morning on Thursday, sitting on Nonna\'s cushion three doors down with his head in his hands, and walked him back to the house in her bathrobe, and made him eggs, and didn\'t ask him one question.

rosa: There\'s a plate. There\'s always a plate.

His mother came over Friday. Mrs. Russo. Tiny, furious, crying, in her work scrubs from the nursing home. She and Ma sat at the kitchen table for two hours with the door closed and came out holding hands.

Nobody says Dante\'s name at dinner.

Halfway through, the doorbell rings. Pop gets it. It\'s an old woman in black, eighty-two, with a tray of pizzelles under a dish towel.

Philomena Iannucci.

She hands the tray to Ma. She says something in Calabrese. Ma doesn\'t speak Calabrese, but Nonna, at the end of the table, does, and Nonna stops eating.

nonna: *(translating, slowly)* She says: her brother says Vincenzo is welcome home whenever he wants. Nobody will touch him. Nobody will touch this house.

nonna: She says: this is not a debt. This is a gift. A DiNardo gave without asking, so an Iannucci gives without asking. Now we\'re even *and* even.

Philomena nods once, sharply, and goes back down the steps to a black Escalade at the curb, and the Escalade leaves.

Vinnie is staring at the pizzelles.

vinnie: He never gave nothing to nobody without asking. Never. Fifty years.

rosa: Eat your macaroni, Vincenzo.` : g.f('vinnie9') === 'chose' ? `Sunday. Gravy since nine.

There\'s an empty chair at the table. Ma set it without asking anybody. A plate, a fork, a glass.

At 3:30 the doorbell rings.

Vinnie. In a Phillies T-shirt, not a black cashmere coat. Holding a box of cannoli from Termini.

vinnie: Mrs. K.

rosa: Vincenzo. Sit. You\'re late.

vinnie: I had to give a guy back his coat.

He sits. He eats two plates of macaroni without stopping. Nobody asks him anything.

After, on the stoop, he tells you. He drove Dante home Wednesday night and put him in bed. He called Bruno and said *he\'s okay, he\'s sleeping*. Thursday morning he drove to the Circolo and left the keys to the Escalade and the black cashmere coat folded on the oilcloth table in the back room, and walked out past Sonny\'s empty stool.

Bruno was sitting at the table. He watched him do it. He didn\'t say a word.

At the door, Bruno said one thing.

vinnie: He said, *Vincenzo. You picked by yourself.* Like that. Like he was proud.

vinnie: He said, *Nobody touches you. Nobody touches Mifflin Street.* And then he went back to his espresso.

He looks at his hands.

vinnie: I\'m going back to the Local Monday. The laborers. Nine hundred a week. It\'s nothing. It\'s *mine*.` : `Sunday. Gravy since nine.

There\'s an empty chair at the table. Ma set it without asking anybody, and nobody asks why.

Vinnie doesn\'t come.

At 3:30 your phone buzzes.

TXT vinnie: tell your mother thanks for the chair
TXT vinnie: i know she set one. she always sets one
TXT vinnie: im ok sally. D is ok. grandpa says mifflin street is off limits. to everybody. his words. i asked him
TXT vinnie: never ratted. not once. not even for you
TXT vinnie: but i asked him for you

You read it at the table. You pass the phone to Ma. She reads it. She doesn\'t say anything. She gets up and puts a plate of macaroni in a Tupperware and writes *VINCENZO* on the lid in Sharpie and puts it in the freezer, next to six others with the same name.`}

${g.f('slip9b') === 'guns' ? 'Late that night, a text from a number you don\'t have.\n\nTXT Unknown number: You were very kind to me on Wednesday, Mr. Kearney. I\'m not used to kindness from people I\'ve frightened. I won\'t forget it. — M.A.\n\nYou don\'t answer. You don\'t delete it either.' : ''}`,
    next: 'tag_stoop'
  },

  /* ================= TAG ================= */
  tag_stoop: {
    card: { kind: 'tag' },
    night: true,
    loc: 'MIFFLIN STREET',
    clock: { day: 'Mon', date: 'Apr 19', time: '4:00 PM' },
    text: `> THE CAMERA.

Mifflin Street at four in the afternoon on a Monday. School out. Kids on bikes. A man hosing down his steps.

Halfway down the block, a car stops. Not a black Escalade. A dark green Bentley, twenty years old, immaculate, with a driver in a gray cap who gets out and opens the back door and stands beside it like a soldier.

An old woman gets out. Eighty-four. A camel hair coat older than her grandchildren. A cane she doesn\'t lean on.

She walks down Mifflin Street, past the kids on bikes, past the man with the hose, who turns it off and stares.

She stops in front of a rowhouse three doors down from the Kearneys\'. On the stoop, on a kitchen chair with a cushion on it, an old woman in a black cardigan is shelling peas into a bowl.

The two of them look at each other.

Sixty-three years. A river. A black car on East River Drive. Two pairs of eyes moving while the bells stopped.

TERESA: *(not getting up)* Constance.

constance: Teresa.

Teresa DiNardo looks at her a long time over the bowl of peas.

TERESA: You got old.

constance: So did you. I came anyway.

Teresa moves the bowl of peas off the second chair.

TERESA: Sit. It\'s four o\'clock. You smoke one now, don\'t you. At four. I read about you.

Constance Pemberton sits down on a kitchen chair on a stoop on Mifflin Street in South Philadelphia, and takes a silver cigarette case out of her coat, and lights one, and the two of them sit side by side and watch the street.

Neither of them says anything for a while.

constance: Our grandchildren.

TERESA: Yes.

constance: We should talk about what happens to them.

TERESA: Yes.

Teresa hands her a pea pod.

TERESA: Shell. You can talk and shell. Even a Pemberton.`,
    end: true
  }
});

Object.assign(EH.episodes.s02e09, {
  polls: [
    { q: 'Vinnie\'s secret', opts: [
      { label: 'You and me', pct: 48, if: g => g.f('plan9') === 'us' },
      { label: 'Told Mikey', pct: 19, if: g => g.f('plan9') === 'mikey' },
      { label: 'Told Jules', pct: 33, if: g => g.f('plan9') === 'jules' }
    ] },
    { q: 'The corridor', opts: [
      { label: 'Told Ma, then Slipped', pct: 41, if: g => g.f('slip9') === 'told' },
      { label: 'Slipped', pct: 27, if: g => g.f('slip9') === 'silent' },
      { label: 'Talked', pct: 32, if: g => g.f('slip9') === 'talk' }
    ] },
    { q: 'The freight elevator', opts: [
      { label: '"Go."', pct: 22, if: g => g.f('vinnie9') === 'went' },
      { label: '"Stay."', pct: 35, if: g => g.f('vinnie9') === 'stayed' },
      { label: 'Let him pick', pct: 43, if: g => g.f('vinnie9') === 'chose' }
    ] }
  ],
  onEnd: g => {
    g.recap('Halcyon is taking Bruno\'s people. One a night. Thomas Nguyen was the first.');
    g.recap('Dollar Dog Night: Dante tried to take Dr. Achterberg from the Pemberton suite.');
    if (g.f('jules_saw9')) g.recap('In the Slip, Jules\'s eyes moved. She saw you.');
    g.recap(g.f('vinnie9') === 'stayed' ? 'Vinnie stayed. Dante: "You\'re done."' : g.f('vinnie9') === 'chose' ? 'Vinnie picked by himself. He gave Dante back his coat.' : 'Vinnie went with Dante. "Never ratted. Not once."');
    g.recap('Constance Pemberton came to Mifflin Street and sat on Teresa DiNardo\'s stoop.');
  }
});
