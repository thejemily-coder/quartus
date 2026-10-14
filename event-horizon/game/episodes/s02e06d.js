/* S2 · E6 · WHAT IF IT WAS, part 4 of 4: Act Four ("Sunday"), tag, polls. */
EH.scenes('s02e06', {

  /* ================= ACT FOUR: SUNDAY ================= */
  a4_sunday: {
    card: { kind: 'act', label: 'Act Four', title: 'Sunday' },
    loc: 'CARDONE HALL · 9TH FLOOR',
    clock: { day: 'Sun', date: 'Feb 14', time: '8:10 AM' },
    enter: g => { g.sleep(7); },
    text: g => `Valentine\'s Day.

${g.f('first6') === 'yes' ? 'You wake up in a narrow bed that isn\'t yours, with a feather boa on the lamp and Jules Pemberton asleep on your arm, which you can no longer feel. Gray light through the window. She\'s smiling in her sleep. You didn\'t know people actually did that.' : 'You wake up in your own bed, alone, with your face in the pillow, and the first thing you think is *soon*, and the second thing you think is her laugh through the door.'}

Your phone is buzzing on the floor. It\'s been buzzing for a while.

${g.f('building6') === 'refuse' ? `TXT bree: wawa
TXT bree: feingolds office called my aunt at 7am. ON A SUNDAY
TXT bree: her eval is moved. to APRIL. "scheduling conflict"
TXT bree: then bruno called. 7:15. he said "its a shame about the schedule halina. these things can change"
TXT bree: she hung up on him. she HUNG UP on bruno iannucci
TXT bree: then she cried for an hour
TXT bree: this is the third thing isnt it. this is what the third thing costs` : g.f('false6') === 'doubted' ? `TXT nik: bro. 6abc. "break-in at navy yard office building overnight, no injuries, halcyon dynamics declined to comment"
TXT nik: building 7
TXT nik: BRO

And under it, from a number you don\'t have saved:

TXT 267-555-0143: grandpas guys went in last night
TXT 267-555-0143: theres a second stair sam. and an 8th floor. no number on the door. beds all stripped. empty
TXT 267-555-0143: grandpa says hes very interested in long hallways
TXT 267-555-0143: sunday dinner. march. bring the blonde
TXT 267-555-0143: — D` : `TXT nik: bro. 6abc. "break-in at navy yard office building overnight, no injuries, halcyon dynamics declined to comment"
TXT nik: building 7
TXT nik: BRO

${g.f('building6') === 'true' ? 'TXT 267-555-0143: grandpas guys went in last night. 8th floor. all the beds stripped. they moved everybody. grandpa says thanks anyway. it counts\nTXT 267-555-0143: — D' : 'TXT 267-555-0143: grandpas guys went in last night. offices. a lab. a turkey lol. you were right. grandpa says they must have moved the beds somewhere else\nTXT 267-555-0143: — D'}

And then, twenty minutes later, from Bree:

TXT bree: wawa. one of brunos guys. sal russo. no relation to vinnie
TXT bree: they found him at 6 this morning sitting on the bottom step of the dry dock. where teddy was
TXT bree: alive. his hair went white. all of it. overnight
TXT bree: he doesnt know what day it is. he keeps asking what time it is. he keeps saying "eleven fifty one"
TXT bree: halcyon answered`}

${g.f('false6') === 'clean' ? 'You read Dante\'s text again. *Offices. A lab. A turkey.* They went in on your map. They walked right past a door with no number on it, and the twenty-two people behind it, because you told them there was no door.\n\nYou lied to Bruno Iannucci, and the lie held, and it might have saved twenty-two people. You don\'t know. You\'ll never know.' : ''}

You sit up.

${g.f('first6') === 'yes' ? 'Jules opens her eyes. She sees your face. She doesn\'t ask if you\'re okay. She can see you\'re not.' : 'Down the hall, a door opens. Jules, in your Temple hoodie, the one she stole in January, with a coffee in each hand, because she always knows. She sees your face in the doorway and stops.'}

jules: What happened.`,
    choices: [
      { text: 'Show her the phone. All of it. Whatever it is, it\'s both of yours now.', tag: 'Show her',
        fx: g => { g.flag('sunday6', 'shared'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -1); if (g.f('building6') === 'refuse') g.know('halina_april', ['sam', 'jules', 'bree'], 'Halina\'s transplant evaluation was moved to April. Bruno called right after: "It\'s a shame about the schedule."'); else g.know('sal_white', ['sam', 'jules', 'bree'], 'One of Bruno\'s men was found on the bottom step of the dry dock with his hair gone white overnight, saying "eleven fifty-one." Halcyon answered.'); }, go: 'a4_shared' },
      { text: '"Nothing. Bruno stuff. I\'ll handle it." It\'s Valentine\'s Day. Give her one more day.', tag: 'I\'ll handle it',
        fx: g => { g.flag('sunday6', 'alone'); g.hidden('revenant_drift', 1); g.bond('jules', { tension: 1 }); if (g.f('building6') === 'refuse') g.know('halina_april', ['sam', 'bree'], 'Halina\'s transplant evaluation was moved to April. Bruno called right after: "It\'s a shame about the schedule."'); else g.know('sal_white', ['sam', 'bree'], 'One of Bruno\'s men was found on the bottom step of the dry dock with his hair gone white overnight, saying "eleven fifty-one." Halcyon answered.'); }, go: 'a4_alone' }
    ]
  },

  a4_shared: {
    text: g => `You hand her the phone.

She reads it. All of it. Slowly, the way she reads everything, and then again. You watch her face go still in that way it does, like a room where somebody\'s turned off the music.

jules: ${g.f('building6') === 'refuse' ? 'He moved her appointment.' : 'His hair went white.'}

sam: Yeah.

jules: ${g.f('building6') === 'refuse' ? 'Because you said no.' : 'Because of the building.'}

sam: ${g.f('building6') === 'refuse' ? 'Because I said no.' : g.f('building6') === 'true' ? 'Because I told Bruno where it was.' : 'Because I told Bruno a building, and he went in anyway.'}

She gives you back the phone. She sits there for a minute.

jules: Okay.

She gets up. ${g.f('first6') === 'yes' ? 'She finds your shirt on the floor and puts it on, and then finds her own, and puts that on too, over it, and then her coat.' : 'She puts the coffees down on your desk.'}

jules: Get dressed.

sam: Where are we going?

jules: I don\'t know yet. Edgemont Street, probably. To sit with Bree. Or to Jefferson, to find out who Dr. Feingold is and what he\'s afraid of. Everyone\'s afraid of something. My father taught me that at dinner when I was seven.

She looks at you.

jules: You thought I\'d want one more day. Didn\'t you. You were going to say *nothing*.

sam: I thought about it.

jules: I know. I could hear the shape of it.

She puts her hand on your face, warm, and holds it there.

jules: I don\'t want one more day, Sam. I want all of them. Including the bad ones. Especially the bad ones. I\'ve had eighteen years of good ones and they were all fake.

jules: Happy Valentine\'s Day. Get dressed.`,
    next: 'tag_wall'
  },

  a4_alone: {
    text: g => `sam: Nothing. Bruno stuff. I\'ll handle it.

You put the phone face down.

She looks at it. Then at you. For a long moment, she doesn\'t say anything.

jules: You touched your ear.

sam: I didn\'t.

jules: You thought about it. You always think about it.

She ${g.f('first6') === 'yes' ? 'sits up, and pulls the sheet around her, and' : 'puts the coffees down on your desk, and'} looks at you with an expression you haven\'t seen on her since September. Not angry. Careful. Like she\'s standing at a card table, reading a hand.

jules: Okay. I\'ll let you have it. Today.

jules: But I\'m going to tell you something, and I want you to remember I said it, on Valentine\'s Day, in February, before anything else happened.

jules: The man with your face doesn\'t tell anyone anything either.

She kisses your forehead and goes to take a shower.

You sit on the edge of the bed with your phone face down in your hand, and you think about that for a long time.`,
    next: 'tag_wall'
  },

  /* ================= TAG ================= */
  tag_wall: {
    card: { kind: 'tag' },
    loc: 'NAVY YARD · BUILDING 10',
    clock: { time: '11:00 AM' },
    text: g => `> THE CAMERA.

A different building. Building 10. A conference room with the blinds down.

One wall is covered with photographs.

Printouts, black and white and color, pinned in neat rows. Security stills. Traffic cameras. A doorbell camera. A dashcam. Each one with a white label in the corner, in Achterberg\'s small clean hand.

*BROAD & SPRING GARDEN · AUG 22 · 11:51:06.* A man across the street in the rain. A finger to his lips.

*MIFFLIN ST · DUSK.* A doorbell camera. A streetlight at the end of the block. A man under it.

*BENJ. FRANKLIN PKWY · NOV 26 · 09:41:12.* A smear between two parade floats.

*DRY DOCK · JAN 23 · 00:51:04.* A man across the water, one hand raised.

Eleven photographs. Eleven places. The same long coat.

Dr. Achterberg is standing in front of the wall with her glasses on her head and a phone at her ear.

ACHTERBERG: They know, Whitney.

A voice on the phone. Warm. Easy. Somewhere with wind.

WHITNEY: *(on the phone)* Know what, Miriam?

ACHTERBERG: Each other. Everything. Seventeen and forty-four read their own file on my screen on the twenty-third. I watched them do it. And last night they went ice skating at Penn\'s Landing. She fell down. On purpose. I have it on thermal.

A pause.

WHITNEY: *(on the phone)* Is that bad?

ACHTERBERG: It\'s wonderful. A pair is so much more interesting than two singles. Everything she does now, she does near him. Everything he does, he does for her.

She hangs up without saying goodbye.

Brannigan is at the end of the conference table with his tea, looking at the wall.

BRANNIGAN: Sal Russo.

ACHTERBERG: An Iannucci soldier was found on the bottom step of the dry dock with his hair gone white. That\'s a story about the Iannuccis. Let them tell it.

She turns back to the wall. To the eleven photographs.

ACHTERBERG: Every place seventeen has been, Cole. Every one. *He* was there first.

BRANNIGAN: Or seventeen goes where he\'s been.

Achterberg is quiet for a moment. She takes off her glasses and cleans them on her cardigan. Her hands are steady again.

ACHTERBERG: Get me something with the boy\'s blood on it.

BRANNIGAN: There\'s a handkerchief. White. Monogrammed. *J.L.P.* She gave it to him in August, the night of the light. He bled on it in October, in recitation. He carries it in his left back pocket.

Achterberg puts her glasses back on.

ACHTERBERG: Of course he does.`,
    end: true
  }
});

Object.assign(EH.episodes.s02e06, {
  polls: [
    { q: 'Bruno\'s map', opts: [
      { label: 'Told him the truth', pct: 24, if: g => g.f('building6') === 'true' },
      { label: 'Refused', pct: 43, if: g => g.f('building6') === 'refuse' },
      { label: 'Drew a false map', pct: 33, if: g => g.f('building6') === 'false' }
    ] },
    { q: '"Who is she?"', opts: [
      { label: '"My girlfriend."', pct: 47, if: g => g.f('jules6') === 'girlfriend' },
      { label: '"Nobody."', pct: 38, if: g => g.f('jules6') === 'nobody' },
      { label: '"A reporter."', pct: 15, if: g => g.f('jules6') === 'reporter' }
    ] },
    { q: 'The card', opts: [
      { label: 'Gave it to her', pct: 61, if: g => g.f('note6') === 'told' },
      { label: 'Kept it', pct: 39, if: g => g.f('note6') === 'kept' }
    ] },
    { q: 'Valentine\'s night', opts: [
      { label: 'Went in', pct: 72, if: g => g.f('first6') === 'yes' },
      { label: 'Not yet', pct: 28, if: g => g.f('first6') === 'wait' }
    ] }
  ],
  onEnd: g => {
    g.recap('Bruno sat with Halina at Jefferson. He knows her surgeon.');
    g.recap(g.f('building6') === 'true' ? 'You gave Bruno the map of Building 7.' : g.f('building6') === 'refuse' ? 'You refused to give Bruno the building. Halina\'s appointment moved to April.' : 'You gave Bruno a false map of Building 7.');
    if (g.f('building6') !== 'refuse') g.recap('One of Bruno\'s men was found on the bottom step of the dry dock with his hair gone white. Halcyon answered.');
    if (g.f('jules6') === 'girlfriend') g.recap('Dante: "Bring her to Sunday dinner at Grandpa\'s. In March."');
    else if (g.f('jules6') === 'reporter') g.recap('You told Dante the woman across the street was Dana Fiorillo.');
    else g.recap('Dante asked who the blonde across the street was. Bruno noticed her.');
    if (g.f('note6') === 'told') g.recap('You gave Jules the card. "Don\'t trust the lucky one." She kept it.');
    g.recap(g.f('first6') === 'yes' ? 'Valentine\'s Day. The first time. "It\'s just us."' : 'Valentine\'s Day. "Soon, Kearney."');
  }
});
