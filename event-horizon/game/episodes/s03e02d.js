/* S3 · E2 · OUTREACH, part 4 of 4: Act Four ("Intake"), tag, polls, recap. */
EH.scenes('s03e02', {

  /* ================= ACT FOUR: INTAKE ================= */
  a4_saturday: {
    card: { kind: 'act', label: 'Act Four', title: 'Intake' },
    loc: '1300 RESIDENCE HALL · 7-07',
    clock: { day: 'Sat', date: 'Sep 11', time: '8:30 AM' },
    enter: g => { g.sleep(8); },
    text: g => `Saturday. You have a delivery shift at Ciro\'s at noon.

${g.f('bree2') === 'come' ? 'You told Bree you\'d be there. You put on a clean shirt, like it\'s a job interview, which it sort of is, except you\'re not sure who\'s interviewing whom.' : g.f('bree2') === 'dont' ? 'You told Bree not to go. She\'s going anyway. *come or dont.*' : 'Bree\'s text is still on your screen. *come or dont.* You didn\'t even know she\'d signed until last night.'}

${g.f('hugh2') === 'think' ? 'The folder Hugh gave you is on your desk. *YOU ARE NOT ALONE. Saturday. Front door. -H*' : ''}

The Broad Street Line goes all the way to the Navy Yard now. You could be there by ten.`,
    choices: [
      { text: 'Go. Support person. Whatever that turns out to mean.', tag: 'Go',
        fx: g => { g.flag('intake2', 'went'); g.bond('bree', { trust: 1 }); }, go: 'a4_clinic' },
      { text: 'Don\'t go. You can\'t walk into that building in daylight with your face. Not with Linda\'s tablet. Not this week.', tag: 'Don\'t go', if: g => g.f('bree2') !== 'come',
        fx: g => { g.flag('intake2', 'stayed'); g.bond('bree', { trust: -1, tension: 2 }); }, go: 'a4_ciro' }
    ]
  },

  a4_ciro: {
    loc: 'CIRO\'S PIZZA · WASHINGTON AVENUE',
    clock: { time: '3:40 PM' },
    enter: g => { g.know('bree_intake2', ['sam', 'bree'], 'Bree\'s intake at the Registry clinic: an hour in a soundproof booth. They asked for her own voice, then any voices she could do. She gave them all of them. Including Teddy\'s.'); g.hidden('halcyon_heat', 1); },
    text: `You work your shift. You fold boxes. Ciro tells you a story about his cousin in Avellino that you\'ve heard nine times, and you laugh in the right places.

At 3:40, between deliveries, your phone.

TXT bree: done
TXT bree: they put me in a booth. soundproof. a guy with headphones. he said say this sentence in your own voice. then he said now any voices you can do
TXT bree: i did all of them wawa. i dont know why. he was so nice. he kept saying amazing. amazing
TXT bree: i did teddy
TXT bree: i did teddy for a man with headphones in a building where you can see the steps

You read it standing in the back of Ciro\'s, between the walk-in and the flour.

TXT bree: dont answer. im fine. halinas pills are covered. thats the whole math

You don\'t answer. She asked you not to. That\'s the worst part, that you\'re able to do what she asked.`,
    next: 'tag_ghost'
  },

  a4_clinic: {
    loc: 'THE NAVY YARD · BUILDING 1 · REGISTRY CLINIC',
    clock: { time: '9:55 AM' },
    enter: g => { g.know('clinic_inside', ['sam', 'bree'], 'The Registry clinic in Building 1 at the Navy Yard: a bright lobby, a children\'s corner, a water feature, nurses who mean it. Achterberg walked through the lobby while Sam was there and greeted him by name.'); g.hidden('halcyon_heat', 1); },
    text: g => `Building 1 at the Navy Yard. Not Building 7. Building 1 is new: glass and pale wood, a lobby with a living wall of ferns and a water feature that sounds like rain. A children\'s corner with a train table. Hydrangeas at the front desk. It smells like a nice hotel.

From the parking lot, if you turn around, you can see the steps of Building 7, a quarter mile away across the yard. You don\'t turn around.

Bree is in a chair by the ferns with her knees pulled up. ${g.f('bree2') === 'dont' ? 'She sees you come in. Her face doesn\'t change, but her shoulders come down about an inch.\n\nbree: You came.\n\nsam: I came.\n\nbree: I\'m still mad.\n\nsam: I know.' : 'She sees you come in and lets out a breath.\n\nbree: Support person.\n\nsam: Support person.'}

You sit down next to her.

The waiting room has eight other people in it. A man in a FedEx uniform. A mother with a toddler who keeps touching the toddler\'s hands to see if they\'re cold. An old man asleep. They all have the same look: like they\'ve been told it\'s going to be okay so many times that they\'ve started to believe it, and are a little ashamed of believing it.

${g.f('grace2') ? 'Behind the glass of the intake office, at a computer, in navy scrubs, typing: Grace. She sees you. She doesn\'t wave. She looks back at her screen and types something, and you have the feeling that whatever it is, it isn\'t what the doctor said.' : ''}

${g.knows('linda_name') ? 'At the front desk, Linda looks up, sees you, and smiles. *Mr. Kearney.* She says it like you\'re a regular.' : ''}

And then the door at the far end of the lobby opens, and a small woman in a gray cardigan walks through on her way somewhere else, with a coffee and a folder, with her glasses on her head.

She sees you. She doesn\'t stop. She changes course by about four degrees, enough to pass your chair.

ACHTERBERG: Mr. Kearney. Welcome.

She keeps walking. Through the opposite door. Gone.

The whole thing took four seconds. You didn\'t need to count them.

bree: *(very quietly)* Was that her?

sam: That was her.

bree: She\'s *tiny*.

A nurse at the inner door, with a tablet:

NURSE: Bree Kowal? We\'re ready for you.`,
    next: 'a4_booth'
  },

  a4_booth: {
    loc: 'BUILDING 1 · THE AUDIO SUITE',
    clock: { time: '10:20 AM' },
    text: `They let you come as far as the window.

It\'s a recording booth. A real one, like a radio station: foam on the walls, a microphone on a boom, a window of double glass. On your side of the glass, a technician in a fleece vest with big headphones and a mixing board, who is genuinely, boyishly excited, who has clearly never been this excited about anything at work.

TECH: Okay, Bree. We\'re going to start easy. Can you read the card in front of you, in your own voice?

Through the glass, Bree reads it. *The quick brown fox.* Her own voice. Flat.

TECH: Amazing. Okay. And now, and this is totally optional, anything you\'re comfortable with: any *other* voices you can do? People you\'ve heard. Famous ones, family, anybody.

Bree looks up from the card. Not at the technician.

At you. Through the glass.

She\'s waiting.

You know what she can do. She can do anyone. Brannigan. Bruno. You. Teddy.

The technician\'s finger is on the record button. He hasn\'t noticed that she\'s looking at you instead of him.`,
    choices: [
      { text: 'Shake your head. Small. *Nothing. Give them nothing.*', tag: 'Nothing',
        fx: g => { g.flag('booth2', 'nothing'); g.bond('bree', { trust: 1 }); g.hidden('halcyon_heat', -1); g.hidden('revenant_drift', 0.5); }, go: 'a4_booth_end' },
      { text: 'Don\'t move. Don\'t nod, don\'t shake. It\'s her voice. Let her pick.', tag: 'Let her pick',
        fx: g => { g.flag('booth2', 'hers'); g.bond('bree', { respect: 2, trust: 1 }); g.hidden('revenant_drift', -1); }, go: 'a4_booth_end' },
      { text: 'Nod. *Give them something. Not everything. Enough to keep the pills coming.*', tag: 'Something',
        fx: g => { g.flag('booth2', 'some'); g.bond('bree', { trust: 1 }); }, go: 'a4_booth_end' }
    ]
  },

  a4_booth_end: {
    loc: 'BUILDING 1 · THE AUDIO SUITE',
    enter: g => { g.know('bree_intake2', ['sam', 'bree'], g.f('booth2') === 'nothing' ? 'At her intake, Bree pretended she could only do bad impressions. The technician was disappointed. She gave them nothing real.' : g.f('booth2') === 'some' ? 'At her intake, Bree gave the Registry a handful of celebrity voices and her own. Not Brannigan. Not Teddy.' : 'At her intake, Bree chose: she gave them everyone but Teddy. Then she did Brannigan, perfectly, into their own microphone, and asked if they recognized him.'); },
    text: g => `${g.f('booth2') === 'nothing' ? `You shake your head. Barely. A quarter inch.

Bree looks back at the technician and smiles a big, dumb, embarrassed smile.

bree: Uh. I can do, like, a really bad Kermit?

She does a really bad Kermit. It is genuinely terrible. Then a really bad Christopher Walken. Then she says she\'s sorry, she\'s nervous, she\'s not usually like this.

The technician\'s face falls by degrees, like a kid on Christmas finding socks.

TECH: No, no, that\'s— that\'s great. Totally normal. Lots of people have, you know. Variable presentation.

He types something. You can see it on his screen. *ECHO: LOW / INCONSISTENT. RETEST?*` : g.f('booth2') === 'some' ? `You nod. Small.

Bree does Morgan Freeman. Then Gritty, which is not a voice so much as a feeling. Then Jim Kenney at a press conference. Then the SEPTA announcer: *The next stop is: Walnut-Locust.* The technician actually claps.

She doesn\'t do Brannigan. She doesn\'t do Bruno. She doesn\'t do Teddy.

TECH: *(beaming, typing)* Amazing. Amazing. That\'s amazing.

On his screen: *ECHO: CONFIRMED. HIGH FIDELITY. RANGE: RETEST.*` : `You don\'t move. You just look back at her.

She looks at you for a long time. Then she nods, once, to herself.

She does Morgan Freeman. The SEPTA announcer. Her aunt, scolding, in Polish. The technician is practically vibrating.

Then she leans into the microphone and says, in a calm, polite, terrible voice that makes the hair stand up on your arms:

bree: *(Brannigan, perfect)* "All units. Hold position."

The technician stops vibrating. He takes off his headphones. He looks at the door like someone might come through it.

bree: *(her own voice, sweetly)* You know who that is?

TECH: *(very carefully)* No.

bree: You should ask around.

She doesn\'t do Teddy. You know she won\'t. She sits back in the chair with her arms folded and waits for him to put his headphones back on.`}

After, in the lobby, the nurse with the tablet comes over to you. Friendly. Efficient.

NURSE: And you\'re the support person? Since you\'re already here: were you near Broad Street that night? It only takes ten minutes. There\'s a stipend.

${g.f('hugh2') === 'think' ? 'The folder from Hugh is in your backpack. *Front door.*' : ''}

Bree, beside you, goes very still.`,
    choices: [
      { text: '"No, thanks. I was in South Philly that night." It isn\'t true. It doesn\'t have to be.', tag: 'No thanks',
        fx: g => { g.flag('register2', 'no'); }, go: 'a4_lobby_end' },
      { text: 'Register. Ten minutes. Your name on their tablet, for Jules\'s off it. If Hugh was telling the truth.', tag: 'Register', if: g => g.f('hugh2') === 'think',
        fx: g => { g.flag('register2', 'yes'); g.flag('registered'); g.hidden('halcyon_heat', 3); g.hidden('revenant_drift', 1); g.bond('bree', { tension: 2 }); g.know('sam_registered', ['sam', 'bree', 'hugh'], 'Sam registered with the Broad Street Registry on Sep 11, at the Navy Yard, as ES-17. Participant number 29.'); }, go: 'a4_registered' },
      { text: '"Actually, is Dr. Achterberg still here? I\'d like to ask her one question."', tag: 'Ask Achterberg',
        fx: g => { g.flag('register2', 'ask'); g.hidden('halcyon_heat', 1); }, go: 'a4_ask' }
    ]
  },

  a4_lobby_end: {
    loc: 'THE NAVY YARD · THE PARKING LOT',
    clock: { time: '11:15 AM' },
    text: g => `NURSE: *(not pushing)* Well, if you ever change your mind. *(she gives you a pamphlet. YOU ARE NOT ALONE.)*

Outside, in the parking lot, in the September sun, Bree walks fast to the bus stop with her hands jammed in her hoodie and doesn\'t talk until you\'re past the gate.

bree: ${g.f('booth2') === 'nothing' ? 'A bad Kermit. I gave them a *bad Kermit*, Wawa.\n\nShe starts laughing. She can\'t stop. She laughs so hard she has to sit down on the curb at the bus stop.\n\nbree: Halina\'s pills are covered and I gave them a bad Kermit.' : g.f('booth2') === 'some' ? 'Gritty. I gave the evil science company Gritty.\n\nShe laughs. It cracks in the middle.\n\nbree: Halina\'s pills are covered. That\'s the whole math.' : 'I gave them Brannigan. In his own building.\n\nShe\'s shaking. She\'s grinning.\n\nbree: Teddy would\'ve *loved* that. *(the grin goes)* Teddy would\'ve loved that.'}

${g.f('hugh2') === 'think' ? 'In your backpack, the folder from Hugh. You throw it in the trash can at the bus stop. Then you take it back out, because it has your name on the sticky note, and you tear the sticky note into very small pieces and throw *that* away.' : ''}`,
    next: 'tag_ghost'
  },

  a4_ask: {
    loc: 'BUILDING 1 · THE LOBBY',
    clock: { time: '11:05 AM' },
    enter: g => { g.know('achterberg_hugh2', ['sam'], 'Achterberg, in the Registry lobby: Hugh has no authority to move Jules off OBSERVE. "Only I can. And I won\'t, Mr. Kearney. Not for a signature. I don\'t trade in people\'s daughters."'); },
    text: g => `The nurse blinks. Then she goes and makes a call. Two minutes later, the far door opens.

Achterberg has a fresh coffee. She sits down in the chair next to you, by the ferns, as though this is the most natural thing in the world, as though you\'re two people waiting for the same bus.

ACHTERBERG: One question. I\'m honored.

${g.f('hugh2') === 'think' || g.f('hugh2') === 'jules' ? 'sam: Hugh says if I register, he can get Jules moved off *Observe*.\n\nShe drinks her coffee.\n\nACHTERBERG: Hugh doesn\'t have that authority. Only I do.\n\nsam: And?\n\nACHTERBERG: And I won\'t. Not for a signature. I don\'t trade in people\'s daughters, Mr. Kearney. *(she sets the cup down)* I\'m sorry he told you that. He\'s young, and he wants very badly to be the one who fixes things. You\'d understand that better than anyone.' : 'sam: Why her? Out of sixty-one. Why is Jules the one you watch?\n\nShe drinks her coffee.\n\nACHTERBERG: That\'s two questions.\n\nsam: Same question.\n\nACHTERBERG: *(after a moment)* Because she\'s the only one who didn\'t *change* that night, Mr. Kearney. She was already like that. The night just turned the volume up.\n\nShe lets that land.\n\nACHTERBERG: I\'ve answered honestly. I always will. You might think about why that frightens you more than if I lied.'}

She stands. She picks up her coffee.

ACHTERBERG: Give my regards to your mother.

She goes back through the door.

Bree is staring at you.

bree: You just *talked* to her. Like at a bus stop.

sam: She sat down.

bree: Wawa. She knows your *mother*.`,
    next: 'tag_ghost'
  },

  a4_registered: {
    loc: 'BUILDING 1 · INTAKE ROOM 4',
    clock: { time: '11:30 AM' },
    text: `Ten minutes. She was right about that.

A small bright room with a window. A blood pressure cuff. A questionnaire on a tablet. *Were you within two miles of Broad and Spring Garden at 11:51 p.m. on August 22, 2026? Have you experienced episodes of lost time? Cold extremities? Unexplained healing?*

You answer them. Not all of them truthfully. It doesn\'t matter. You\'ve signed.

The nurse prints a little card for your wallet. Your name. A number.

*PARTICIPANT #29 · ES-17.*

They already had the second number. They\'ve had it for a year. You just signed underneath it.

Out in the lobby, Bree is waiting with her arms folded. She looks at the card in your hand.

bree: Why.

sam: Hugh said he could get Jules off the list.

bree: *Hugh said.*

She looks at you for a long time.

bree: Wawa. You just traded yourself for a rich boy\'s *promise*.

That night, Nik\'s counter says *29 of 61*. He doesn\'t say anything. He doesn\'t have to. He just turns the monitor so you can see it, and then turns it back.`,
    next: 'tag_ghost'
  },

  /* ================= TAG ================= */
  tag_ghost: {
    card: { kind: 'tag' },
    night: true,
    loc: 'THE NAVY YARD · BUILDING 7 · RECOVERY OPERATIONS',
    clock: { day: 'Sat', date: 'Sep 11', time: '11:50 PM' },
    text: g => `> THE CAMERA.

A room without windows on the fourth floor of Building 7. A wall of screens. On the big one, the Registry counter: *${g.f('register2') === 'yes' ? '29' : '28'} of 61.* On the others: faces. Sixty-one of them, in a grid. ${g.f('register2') === 'yes' ? 'Twenty-nine of them lit green.' : 'Twenty-eight of them lit green.'}

Cole Brannigan stands in front of the wall with his hands in the pockets of a tan windbreaker. An analyst sits at a desk, a young woman with her hair in a bun, eating almonds out of a bag one at a time.

On the center screen: the bank camera at Broad and Spring Garden. The anniversary. 11:51:04, and 11:51:04 again.

The analyst rocks the two frames back and forth. Back and forth. A girl in a black hoodie on the northwest corner. Looking at the clock. Looking at a boy holding a girl\'s hand.

ANALYST: Facial recognition, all sixty-one: no match. DMV: no match. School IDs, the hospitals, SEPTA Key cards: no match. Partial gait match to a figure on the Parkway last Thanksgiving, sixty-one percent confidence, which is basically a coin.

BRANNIGAN: She moved in the stutter.

ANALYST: She moved in the stutter. Everyone else on that corner is two identical frames. *(she points at the boy)* Even ES-17. She isn\'t anybody.

Brannigan looks at the frozen girl for a long time.

BRANNIGAN: Sixty-two.

ANALYST: Sir?

BRANNIGAN: There were sixty-two people in that door.

He takes out his phone. He dials. It\'s answered on the first ring. He doesn\'t say hello.

BRANNIGAN: Doctor. There\'s one we didn\'t count.

A pause. A small, dry voice on the line, too faint to make out the words.

Brannigan listens. He nods, though she can\'t see him.

BRANNIGAN: Understood.

He hangs up. He looks at the girl on the screen.

BRANNIGAN: *(to the analyst, politely)* Find her.`,
    end: true
  }
});

Object.assign(EH.episodes.s03e02, {
  polls: [
    { q: 'Jules\'s card', opts: [
      { label: '"Read it"', pct: 37, if: g => g.f('card2') === 'read' },
      { label: '"Read it carefully"', pct: 24, if: g => g.f('card2') === 'careful' },
      { label: 'Handed it back', pct: 39, if: g => g.f('card2') === 'back' }
    ] },
    { q: 'Rae, in line', opts: [
      { label: 'Told her', pct: 41, if: g => g.f('rae2') === 'truth' },
      { label: 'Asked her', pct: 36, if: g => g.f('rae2') === 'ask' },
      { label: 'Kept walking', pct: 23, if: g => g.f('rae2') === 'walk' }
    ] },
    { q: 'Hugh\'s offer', opts: [
      { label: '"No."', pct: 46, if: g => g.f('hugh2') === 'no' },
      { label: '"I\'ll think about it."', pct: 21, if: g => g.f('hugh2') === 'think' },
      { label: '"Does Jules know?"', pct: 33, if: g => g.f('hugh2') === 'jules' }
    ] },
    { q: 'The booth', opts: [
      { label: 'Nothing', pct: 28, if: g => g.f('booth2') === 'nothing' },
      { label: 'Let her pick', pct: 47, if: g => g.f('booth2') === 'hers' },
      { label: 'Something', pct: 25, if: g => g.f('booth2') === 'some' }
    ] }
  ],
  onEnd: g => {
    g.recap('Bree signed up for the Registry. It pays for Halina\'s pills. Bruno stopped in June.');
    g.recap('Catherine Pemberton invited Jules to Ravenscourt on the 19th. She signed it "Catherine," then crossed it out and wrote "Mother."');
    if (g.f('mikey2')) g.recap(g.f('mikey2') === 'no' ? 'Mikey turned down the Registry detail.' : 'Mikey took the Registry wellness-check detail. It starts October 1.');
    if (g.f('grace2')) g.recap('Grace is a scribe at the Registry clinic. There\'s a column in the files: O, R, H.');
    if (g.f('rae2') === 'truth') g.recap('You told Rae Delgado the truth in line. She walked away.'); else if (g.f('rae2') === 'ask') g.recap('Rae Delgado registered. She has your number.');
    g.recap(g.f('hugh2') === 'no' ? 'Hugh offered: register, and he\'d get Jules off the list. You said no.' : 'Hugh offered: register, and he\'d get Jules off the list.');
    if (g.f('intake2') === 'went') g.recap('At the Navy Yard clinic, Achterberg walked past and said, "Mr. Kearney. Welcome."');
    if (g.f('register2') === 'yes') g.recap('You registered. Participant #29. ES-17.');
    if (g.f('register2') === 'ask') g.recap('Achterberg: "I don\'t trade in people\'s daughters."');
    g.recap('Brannigan: "There were sixty-two people in that door. Find her."');
  }
});
