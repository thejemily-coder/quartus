/* S2 · E7 · BAD TIMING, part 1 of 4: meta, cold open, Act One ("March"). */
EH.episode({
  id: 's02e07', season: 2, number: 7, title: 'Bad Timing', look: 's2',
  cast: ['sam', 'jules', 'hugh', 'callum', 'simone', 'bree', 'nik', 'mikey', 'vinnie'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Teddy Kowal died at the bottom of the dry dock at the Navy Yard.',
    'Bruno sat with Halina at Jefferson. He knows her surgeon.',
    g.f('building6') === 'true' ? 'You gave Bruno the map of Building 7. One of his men was found on the bottom step of the dry dock with his hair gone white.' : g.f('building6') === 'refuse' ? 'You refused to give Bruno the building. Halina\'s appointment moved to April.' : 'You gave Bruno a false map of Building 7.',
    g.f('jules6') === 'girlfriend' ? 'Dante: "Bring her to Sunday dinner at Grandpa\'s. In March."' : 'Dante asked who the blonde across the street was. Bruno noticed her.',
    g.f('note6') === 'told' ? 'You gave Jules the card. "Don\'t trust the lucky one." She keeps it in her coat.' : 'You still have the card. "Don\'t trust the lucky one."',
    g.f('first6') === 'yes' ? 'Valentine\'s Day. "It\'s just us."' : 'Valentine\'s Day. "Soon, Kearney."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'RAVENSCOURT · THE BILLIARD ROOM',
      clock: { day: 'Sat', date: 'Feb 27', time: '10:40 PM' },
      text: `> THE CAMERA.

The billiard room at Ravenscourt. Green baize, brass lamps, a fire nobody needs. Hugh Pemberton is alone at the table in his shirtsleeves, running the rack by himself, every Saturday night now.

He sinks the nine. He sets up the rack again.

Since Christmas, he hasn\'t lost a game. He hasn\'t played anyone.

The door opens. His father, in a cardigan, with a glass of Scotch. And behind him, in a gray dress, a small woman with her glasses pushed up on her head.

whitney: Hughie. You remember Dr. Achterberg. From the party.

hugh: The piano teacher.

ACHTERBERG: I\'ve been called worse. May I?

She picks up a cue from the rack on the wall, chalks it, and breaks. Badly. The balls go everywhere and nothing goes in.

ACHTERBERG: I\'m terrible at this. I\'ve always been terrible at this. Your sister, I\'m told, is very good.

hugh: My sister\'s good at everything.

ACHTERBERG: Is she? Your father tells me you\'ve been keeping score since you were six.

Hugh doesn\'t say anything. He lines up a shot and misses it.

ACHTERBERG: And then, the night after the chapel, you watched her through her bedroom door. With the dice.

He straightens up.

ACHTERBERG: Sixes, Hugh. Every time. You counted. I would have counted too.

hugh: How do you—

ACHTERBERG: It\'s my job to know who\'s counting.

She puts the cue back in the rack, very precisely, in its slot.

ACHTERBERG: Your sister carries a handkerchief. White, monogrammed, in the inside pocket of a camel coat. It has someone else\'s blood on it. I\'d like it. That\'s all. Nobody gets hurt by a handkerchief.

hugh: Sorry—you want me to pick my sister\'s pocket. For a *hankie*. Why on earth would I do that?

ACHTERBERG: Because you\'ve been playing pool by yourself every Saturday for two months, trying to work out what she is. And I\'m the only person in this house who\'ll tell you.

She looks at Whitney. Whitney raises his glass a quarter of an inch, like a toast, and leaves.

The door closes.

Hugh looks at the table. At the scattered balls. At the cue ball, sitting by itself in the middle of the green.

hugh: What *is* she?

ACHTERBERG: Bring me the handkerchief, and I\'ll show you.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_march' },

    /* ================= ACT ONE: MARCH ================= */
    a1_march: {
      card: { kind: 'act', label: 'Act One', title: 'March' },
      loc: 'CARDONE HALL · 9-14',
      clock: { day: 'Mon', date: 'Mar 1', time: '7:20 AM' },
      enter: g => { g.sleep(7); },
      text: g => `March comes in like it\'s angry about something.

Sleet on the windows of 9-14. The radiator knocking. Nik\'s alarm going off for the fourth time across the room, and Nik, under a pile of blankets, saying *no* to it in a calm, reasonable voice, like a man declining a timeshare.

And Jules, in your bed, in your Temple hoodie, reading your phone.

${g.f('first6') === 'yes' ? 'She sleeps here most nights now. The whole ninth floor knows. Devontae has started calling 9-14 *the embassy*. Grace has put a box of condoms in the lounge with a Post-it on it in her handwriting: *FOR EVERYONE. NOT A COMMENTARY. — G.* Nobody believes the Post-it.' : 'She sleeps here most nights now. On top of the covers, some nights. Under them, some nights. You haven\'t talked about *soon*. You both know it\'s coming. The whole floor knows it\'s coming. Devontae has a pool.'}

jules: You have a text.

sam: You\'re reading my texts?

jules: It was face up on your chest. I\'m a reader, Kearney. It\'s not a choice.

She turns the phone around.

TXT Unknown number: sunday march 7. grandpas house. 1610 s. 9th. 5pm. bring the blonde
TXT Unknown number: grandpa says hope shes not allergic to nothing
TXT Unknown number: — D

Sleet on the window.

jules: Am I the blonde?

sam: You\'re the blonde.

jules: I\'ve never been called *the blonde* in my life. It\'s actually rather thrilling.

She doesn\'t look thrilled. She looks the way she looks at a card table, when somebody across from her has just pushed in all their chips.

jules: You told him I was your girlfriend.

sam: He asked.

jules: In a car. In front of Vinnie. And now Bruno Iannucci, who sat next to Teddy\'s mother at Jefferson with a pastry, would like me to come to dinner.

She puts the phone down on your chest, face down.

jules: I\'m going.

sam: Jules—

jules: I\'ve been to dinners with worse men, Sam. My father has dinner with worse men twice a week. I know which fork. I know how to smile at someone who\'s pricing me.

jules: And if I don\'t go, he\'ll come and find out why. You know he will.`,
      choices: [
        { text: '"Okay. Together. I\'m not letting you walk into that house alone."', tag: 'Together',
          fx: g => { g.flag('dinner7', 'together'); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_march_end' },
        { text: '"No. Not you. Not Bruno. I\'ll go alone and tell him you\'re sick."', tag: 'No',
          fx: g => { g.flag('dinner7', 'refused'); g.bond('jules', { tension: 2 }); g.hidden('revenant_drift', 1); }, go: 'a1_march_end' }
      ]
    },
    a1_march_end: {
      loc: 'CARDONE HALL · 9-14',
      text: g => `${g.f('dinner7') === 'together' ? `sam: Okay. Together. I\'m not letting you walk into that house by yourself.

jules: I wasn\'t going to walk in by myself. I was going to walk in with you. I just wanted to hear you say it.

She lies back down with her head on your chest.

jules: What do I wear to dinner with a Mafia don?

sam: He\'s not a—

jules: Sam.

sam: Something with sleeves. His sister will judge you.` : `sam: No. Not you. I\'ll go by myself and tell him you\'ve got the flu.

She sits up. All the way.

jules: Say that again.

sam: Jules. He *collects* people. Vinnie said—

jules: I heard what Vinnie said. You told me. And you don\'t get to *no* me, Kearney. Not about this. Not about anything. You get to say *I\'m scared*, and then you get to come with me.

You open your mouth.

jules: Everyone in my life has decided where I go. My father. My grandmother. Callum, very politely. I chose Temple. I chose this floor. I chose *you*. I\'m choosing this.

She gets out of bed and starts getting dressed, fast, angry, precise.

jules: Sunday. Five o\'clock. You\'re coming. I\'ll wear sleeves.

She leaves for her nine o\'clock without kissing you. It\'s the first time since Valentine\'s Day.

Across the room, under the blankets, Nik says, very quietly:

nik: Bro.

sam: I know.

nik: *Bro.*`}

You have a week. It goes fast.`,
      next: 'a1_week'
    },

    a1_week: {
      loc: 'TEMPLE · MAIN CAMPUS',
      clock: { day: 'Tue', date: 'Mar 2', time: '12:00 PM' },
      text: `Midterms in two weeks. Psych, Calc II, a history gen-ed on the Silk Road you have not opened the book for. Ciro has you on three nights. The sleet turns to rain and the rain turns back to sleet.

You have two days before Thursday, when Jules\'s brother is coming up from Penn to *meet the boyfriend*. You have five before Sunday.`,
      hub: {
        slots: 2, label: 'The first week of March',
        blurb: 'Thursday, Hugh. Sunday, Bruno.',
        options: [
          { id: 'w7_simone', text: 'Simone. *Mummers: The Musical* opens Friday the twelfth. She\'s put a ticket under your door with no note. Go find her.', cost: 1, tag: 'Simone', go: 'a1_simone' },
          { id: 'w7_bree', text: 'Bree. She texted: *can u come by. its about my aunt. its good news. i hate it.*', cost: 1, tag: 'Bree', go: 'a1_bree' },
          { id: 'w7_nik', text: 'Nik. He\'s been weird since the Navy Yard. Weirder. He keeps closing his laptop when you walk in.', cost: 1, tag: 'Nik', go: 'a1_nik', if: g => !g.knows('nik_frame') },
          { id: 'w7_mikey', text: 'Mikey. He wants to get a beer. Mikey never wants to get a beer.', cost: 1, tag: 'Mikey', go: 'a1_mikey' }
        ],
        done: 'a1_hugh'
      }
    },

    a1_simone: {
      loc: 'TOMLINSON THEATER · REHEARSAL',
      text: g => `She\'s in the house of the Tomlinson Theater at nine at night with a clipboard and a headset, in a feathered hat for no reason anybody has explained, watching twelve freshmen in sequins try to do a strut in unison and fail.

simone: *Again.* Again from *the top of the strut*, Kyle, the strut is a *philosophy*.

You sit down in the seat next to her.

She doesn\'t look at you.

simone: You got the ticket.

sam: I got the ticket.

simone: Row C. Seat nine. Opening night. Friday the twelfth. Seven-thirty curtain.

sam: I\'ll be there.

Now she looks at you.

simone: Salvatore Kearney. I have been lied to by you since September. I have been lied to by your girlfriend since August, beautifully. I\'m not asking you for the truth anymore. I gave up on the truth around Valentine\'s.

simone: I\'m asking you for one seat. Row C, nine. For two hours and ten minutes, including intermission. I\'m asking you to be a person who is *where he said he\'d be*.

${g.f('simone10') === 'mended' ? 'She says it gently. You\'re friends again. That\'s why it matters.' : 'She says it the way you\'d say the last thing you were going to ask somebody.'}`,
      choices: [
        { text: '"Row C. Seat nine. Seven-thirty. I swear to God, Simone."', tag: 'Promise',
          fx: g => { g.flag('simone7', 'promised'); g.bond('simone', { trust: 1 }); }, go: 'a1_simone_end' },
        { text: '"I\'ll try. I really will. But things happen to me, Simone. I don\'t want to promise and not be there."', tag: 'I\'ll try',
          fx: g => { g.flag('simone7', 'try'); g.bond('simone', { respect: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_simone_end' }
      ]
    },
    a1_simone_end: {
      loc: 'TOMLINSON THEATER · REHEARSAL',
      text: g => `${g.f('simone7') === 'promised' ? `simone: Don\'t swear to God. God\'s not coming. Swear to me.

sam: I swear to you.

She turns back to the stage.

simone: *Again*, Kyle. Like you *mean* it. Like the Mummers are a *calling*.

She doesn\'t look at you again. But when you get up to leave, she reaches out without turning her head, and squeezes your wrist, once.` : `Simone looks at you for a moment. Then she laughs, short.

simone: That\'s the most honest thing you\'ve ever said to me. *Things happen to me.* God. Yes. They do.

She turns back to the stage.

simone: Try, then. Row C. If you\'re not in it, I\'ll know something happened to you. That\'s almost better.

simone: *Again*, Kyle!`}`,
      next: '@hub'
    },

    a1_bree: {
      loc: 'EDGEMONT STREET · PORT RICHMOND',
      enter: g => { g.know('halina_moved_up', ['sam', 'bree'], 'Halina Kowal\'s transplant evaluation was moved up to March 11. Dr. Feingold\'s office called. Bruno called ten minutes later.'); g.bond('bree', { trust: 1 }); },
      text: g => `Bree meets you on the stoop. She won\'t go inside. Through the window, Halina is in the recliner, and the machine is humming, and the TV is on.

bree: Feingold\'s office called. Yesterday. Seven in the morning. The evaluation\'s moved *up*. March eleventh. Next Thursday. "A cancellation."

She lights a cigarette. You\'ve never seen Bree smoke. She doesn\'t seem to know how. She holds it like a pencil.

bree: Bruno called ten minutes after. He didn\'t say anything about it. He asked how she was feeling. He asked if we needed a ride.

bree: Wawa, if she gets a kidney, I\'m his. That\'s the deal nobody said out loud. I know it. She knows it. She cried for an hour and then she said *we take it*.

She looks at the cigarette.

bree: And then he asked me something else. On the phone. At the end. Like it was nothing.

bree: He asked what the Pemberton girl sounds like.

The cigarette burns down.

bree: I heard her once. At the Navy Yard. On the seventh floor. *Hello.* That\'s all she said. One word. I could do it right now. I could do it perfect.

bree: I told him I didn\'t remember. He laughed. He said—

For half a second it\'s Bruno coming out of her mouth, warm and old and amused: *Sure, sweetheart.*

She stops, like she touched a stove.

She drops the cigarette and steps on it.

bree: Whatever he wants her for, it\'s Sunday. Isn\'t it. Dante told the whole Circolo.`,
      next: '@hub'
    },

    a1_nik: {
      loc: 'CARDONE HALL · 9-14',
      enter: g => { g.know('man_across_street', ['nik']); g.know('nik_frame', ['sam', 'nik'], 'Nik saved the Navy Yard camera feed from 00:51:04. In one frame, across the dry dock, a gray-haired man with his left hand raised. He\'s in no other frame.'); g.bond('nik', { trust: 1 }); g.hidden('revenant_drift', -0.5); },
      text: g => `You close the door behind you. Nik closes the laptop.

sam: Nik.

nik: It\'s nothing.

sam: Nik, you closed it so fast it bounced.

He looks at you for a long moment. Then he opens it again.

nik: I recorded the feeds. That night. All four. I hit record when you said *Broad and Intrepid*. It\'s a reflex. And I\'ve been—I keep watching one part. Not him falling. I can\'t watch that. The frame *before*.

*00:51:04.* The dry dock. Teddy on the lip. And across the water, under the light, a man in a long coat with one hand raised, like he\'s waving at somebody in a window.

One frame. Nik clicks forward. Gone. Back. There.

nik: Thirty-three milliseconds. He\'s not in the frame before. He\'s not in the frame after. He\'s not on the other three cameras. Bro, a person can\'t be in one frame.

He zooms in. The hand. Three gaps between the fingers where there should be four.

You tell him. The man across Broad Street in the rain. The finger to his lips. Your face.

Nik listens with both hands over his mouth.

nik: Salvatore. That\'s *you*.

sam: You don\'t know that.

nik: I know you wave like that. Like a guy at a window. You do it to Grace across the lounge. I have it on my phone. Don\'t ask why I have it on my phone.

He closes the laptop, gently this time.

nik: He was there. When Teddy fell. ${g.f('jules_blames5') ? 'Bro, does Jules know? She thinks it was—' : ''}

sam: She knows I saw someone.

nik: That\'s not the same as *this*.

He holds out a thumb drive.

nik: It\'s on there. The frame. The whole night. I made you a copy. I don\'t want to be the only one who has it.`,
      next: '@hub'
    },

    a1_mikey: {
      loc: 'THE PEN & PENCIL CLUB',
      clock: { day: 'Wed', date: 'Mar 3', time: '9:40 PM' },
      enter: g => { g.know('mikey_sal', ['sam', 'mikey'], 'Mikey: Sal Russo, the Iannucci soldier with the white hair, is at Friends Hospital. He says "eleven fifty-one" and nothing else. Dante told the 3rd District it was a stroke.'); g.bond('mikey', { trust: 1, affection: 1 }); },
      text: g => `The Pen & Pencil Club is the oldest press club in America, an unmarked door in an alley off 15th Street, and cops drink there because reporters drink there and everybody wants to know what everybody else knows.

Mikey has a Yuengling and a basket of fries he isn\'t eating.

mikey: There\'s a guy at Friends Hospital. Sal Russo. Fifty-four. Iannucci soldier, been with Bruno since the eighties. Two weeks ago he walked into the Navy Yard on a Saturday night and walked out Sunday morning with white hair. All of it. Like an old man.

${g.knows('sal_white') ? 'You knew. You read it on your phone in Jules\'s bed on Valentine\'s Day. You don\'t say so.' : 'You didn\'t know. You find out you\'re holding the edge of the bar.'}

mikey: He doesn\'t talk. He says one thing. *Eleven fifty-one.* Over and over. Dante told the 3rd District it was a stroke. A stroke doesn\'t turn your hair white overnight, Sammy.

He eats a fry finally. Doesn\'t taste it.

mikey: Brannigan\'s guy in the Camry stopped sitting outside my place. Two weeks ago. The same night.

mikey: You know what that means? It means they don\'t need to watch me anymore. It means they\'ve got eyes on something better.

He looks at you.

mikey: Bruno Iannucci\'s telling the whole Circolo a Pemberton is coming to Sunday dinner. A *Pemberton*, Sammy. Do you have any idea what that name means to a man like Bruno? My lieutenant\'s father used to say, in this city, there\'s three families you don\'t play cards with. The Pembertons are two of them.

He finishes his beer.

mikey: Don\'t take her there.

sam: She\'s going whether I take her or not.

Mikey looks at you.

mikey: Then I\'ll be parked on 9th Street. In my own car. Like a guy who likes cannoli.`,
      next: '@hub'
    },

    a1_hugh: {
      loc: 'CARDONE HALL · 9TH FLOOR LOUNGE',
      clock: { day: 'Thu', date: 'Mar 4', time: '7:10 PM' },
      enter: g => { g.meet('hugh'); g.flag('hugh_coat7'); g.know('hugh_visit', ['sam', 'jules'], 'Hugh Pemberton came to Cardone Hall on March 4 to meet you. He brought Callum. He used the bathroom in 9-04.'); },
      text: g => `Jules\'s brother is exactly what you expected and also not at all.

He\'s her face, but wider. Her eyes, but warmer and less careful. Golden, the way she\'s silver. A Penn crew jacket, a good haircut, and the easy, unbothered way of standing in a room that you only get from never once being told to leave one.

hugh: So you\'re the boyfriend.

sam: So you\'re the twin.

hugh: I\'m the *older* twin. By six minutes. She\'s never forgiven me.

He shakes your hand. Firm, friendly, a little too long. He\'s looking at your hair. At the white at your temple.

hugh: Huh. She said you were eighteen.

And behind him, in the lounge doorway, holding a box of Federal Donuts like a peace offering, tall and broad-shouldered and visibly wishing he were anywhere else, is Callum Whitford.

callum: Hi. Sorry. Hi. Hugh said—Hugh said it would be fine.

jules: *Hugh.*

hugh: What? He\'s my roommate\'s best friend. He was coming up anyway. And he wanted to see you were okay. That\'s allowed, Jubilee. People are allowed to want that.

Callum puts the donuts on the big table like they might go off.

callum: I can go. I should go. I\'ll go.

jules: Sit down, Callum. Have a donut. You brought them.

It\'s the most awkward forty minutes of your life.

Hugh talks. Hugh is good at talking. Penn, crew, their father\'s new boat, Gran\'s birthday in April. He talks to Jules the way you talk to Gigi, half-teasing, half-checking. And every so often, when he thinks nobody\'s looking, he looks at her hands. At what she does with them. Like he\'s waiting for something.

Callum doesn\'t talk. Callum eats one donut in very small bites and looks at you, and looks at Jules, and looks at the way she sits with her knee touching yours under the table.

At one point Hugh asks to use the bathroom in 9-04. Jules says *it\'s Simone\'s side too, don\'t touch the feathers*. He\'s gone a while. When he comes back, he\'s smiling.

When they finally go, Callum hangs back. In the hallway, by the elevator, while Hugh is holding the door.

callum: Hey. Sam. Can I—just one thing.

He looks at his shoes. Then at you.

callum: Is she happy?`,
      choices: [
        { text: '"Yeah. I think so. I think she\'s happy."', tag: 'Yeah',
          fx: g => { g.flag('callum7', 'yes'); g.bond('callum', { respect: 2, affection: 1 }); }, go: 'a1_callum' },
        { text: '"I don\'t know. Some days. It\'s a hard year. Ask her."', tag: 'Ask her',
          fx: g => { g.flag('callum7', 'ask'); g.bond('callum', { respect: 3 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_callum' }
      ]
    },
    a1_callum: {
      loc: 'CARDONE HALL · 9TH FLOOR',
      text: g => `${g.f('callum7') === 'yes' ? 'sam: Yeah. I think so. I think she\'s happy.\n\nCallum nods. Something in his face loosens. He looks like a guy who rowed four miles on the Schuylkill this morning in the sleet to not think about something, and is going to row four more tomorrow.\n\ncallum: Good. That\'s good. That\'s all I wanted.' : 'sam: I don\'t know. Some days. It\'s been a hard year. You should ask her.\n\nCallum looks at you for a second, surprised.\n\ncallum: Huh. I thought you\'d say yes. Anybody would say yes.\n\nsam: She\'d know I was lying.\n\ncallum: Yeah. She would.\n\nHe almost smiles.'}

callum: She never touched my knee under a table. Not once. Two years.

He gets in the elevator. Hugh lets the door go. The last thing you see is Hugh, golden, smiling, with his hand in the pocket of his crew jacket, holding something.

The doors close.

Jules is standing behind you in the hallway.

jules: That was the worst evening of my life, and I\'ve been to a Pemberton Christmas.

sam: Your brother likes me.

jules: My brother likes *everyone*. That\'s the problem with Hugh. He likes everyone, and he wants everything they have.`,
      next: 'a2_dinner'
    }
  }
});
