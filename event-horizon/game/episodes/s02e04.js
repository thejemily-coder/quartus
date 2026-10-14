/* S2 · E4 · MADE MEN, part 1 of 3: meta, cold open, Act One ("Spring"). */
EH.episode({
  id: 's02e04', season: 2, number: 4, title: 'Made Men', look: 's2',
  cast: ['sam', 'jules', 'vinnie', 'dana', 'nik', 'simone', 'bree', 'teddy', 'heck'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'You work for Bruno Iannucci. ' + (g.f('bruno_jobs_done') || 0) + ' jobs down. ' + ({ 5: 'Five', 8: 'Eight', 10: 'Ten', 12: 'Twelve' }[g.f('bruno_jobs_total')] || 'Ten') + ' to clear Pop\'s debt.',
    'In Fishtown, Teddy froze a man\'s hands to his own bar until he paid.',
    'Marisol Reyes is alive, in Room 714. After the job, the crew goes for her. You promised.',
    g.f('assunta_watch') ? 'Nonna gave you her brother\'s watch. In the cold, it\'s the only thing that ticks.' : 'Nonna told you about her brother. He came back old.',
    g.f('bells_reply') === 'yes' ? 'At midnight on New Year\'s, the bells stopped. You asked Jules if she heard them. She said yes.' : 'At midnight on New Year\'s, the bells stopped for one second.',
    'January. She asks, you answer. Then you ask, and she answers.'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'THE INQUIRER · 801 MARKET STREET',
      clock: { day: 'Mon', date: 'Jan 18', time: '1:50 AM' },
      text: `> THE CAMERA.

The Inquirer newsroom at two in the morning is forty empty desks and one lamp.

Under the lamp, Dana Fiorillo, thirty-six, in a Penn State sweatshirt with the sleeves pushed up, is standing in front of a corkboard with a cup of coffee that went cold at eleven.

The corkboard is her whole fall.

A map of Philadelphia with pushpins. Red for Blur sightings: Broad and Spring Garden, the Wawa, Girard, Kensington, under I-95, the Parkway. Blue for things that don\'t add up: a Temple student dead in a dorm hallway, ruled an adverse reaction by a deputy ME who retired to Boca the following Monday. A city councilman\'s office that got a Christmas card it won\'t talk about.

And a new one. Green. Pinned this afternoon.

A doorbell camera still, grainy, black and white, from a rowhouse on Girard Avenue in Fishtown. December 4, 2:41 a.m. A black Escalade at the curb. A kid in a dark hoodie on the sidewalk beside it, face turned away, hands in his pockets, waiting for the back window to come down.

Beside it, a photocopy of an ER intake form from Penn Presbyterian, December 4, 4:12 a.m., a name blacked out, a diagnosis circled in red pen:

*Frostbite, bilateral hands, second degree. Patient states injury occurred indoors.*

She looks at the Escalade. She looks at the hoodie. She takes a fat black marker and, under the photo, on a strip of masking tape, writes:

*BLUR = IANNUCCI?*

Her editor\'s voice, from the doorway, where he\'s been standing for a minute in his coat, on his way home:

EDITOR: Dana. You can\'t print that.

DANA: I know.

EDITOR: You can\'t print *anything* like that. The Iannuccis have lawyers who have lawyers.

DANA: I know.

She caps the marker. She looks at the hoodie on the sidewalk.

DANA: Not yet.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_spring' },

    /* ================= ACT ONE: SPRING ================= */
    a1_spring: {
      card: { kind: 'act', label: 'Act One', title: 'Spring' },
      loc: 'CARDONE HALL · 9TH FLOOR',
      clock: { day: 'Tue', date: 'Jan 19', time: '8:10 AM' },
      enter: g => { g.sleep(7); if (g.S.drift > 0) g.drift(-1); },
      text: g => `Spring semester on the ninth floor of Cardone Hall starts the way fall did: with somebody\'s minifridge in the elevator.

Everyone\'s back. Devontae has a mustache he grew over break that nobody has the heart to tell him about. Kyle the T-rex has a girlfriend. Grace has a new clipboard, and a new look on her face, a kind of terrible calm, like someone who has decided to stop wishing for things. There\'s a new sign on the lounge door in her handwriting: *THE STROBE LIGHT IS DEAD. LET IT REST.*

Nik is back from Edison with twelve Tupperware containers of his mother\'s food and a new monitor, his fourth, which he has mounted on the wall above his desk with a bracket from Home Depot and a lot of hope.

nik: Bro. Bro. Look at it. It\'s the *map*. It\'s live now. I wrote a scraper. Every time somebody in Philly posts the word *cold* with a location, it pings. It\'s like a seismograph, but for whatever you are.

The map is mostly quiet. A few blue dots. Kensington, faint. The Navy Yard, bright, steady, like a pilot light.

And Jules.

${g.f('jules_decision') === 'call' ? 'You talked to her on New Year\'s for seven hours and fifty-one minutes. You fell asleep on the phone. You woke up and she was still there, and you could hear her breathing, and you didn\'t hang up for another hour.\n\nYou haven\'t seen her since. She came back Sunday night. She texted one word from the stairwell, the way she did in December.' : 'She came back Sunday night. She texted one word from the stairwell, the way she did in December.'}

TXT jules: Kearney.

And then, Monday, a second text. Precise. Like an appointment.

TXT jules: Friday. The roof. Nine o\'clock. I ask, you answer. Then you ask, and I answer.
TXT jules: I\'m not going to be lucky about this. I\'m going to be brave about it. Please be there.

You\'ve read it forty times. You have four days.

${g.f('simone_j3') === 'lied' ? 'Simone is back. She\'s cold to Jules. Not mean, Simone is never mean, but cold, polite, *Juliet*, the way she\'s polite to you. Something happened over break. Neither of them will say what.' : 'Simone is back.'}`,
      hub: {
        slots: 2, label: 'The first week',
        blurb: 'Friday, nine o\'clock, the roof.',
        options: [
          { id: 'sp4_simone', text: 'Simone. You still haven\'t fixed it. Try again. In person this time.', cost: 1, tag: 'Simone', go: 'a1_simone', if: g => g.f('simone10') !== 'mended' },
          { id: 'sp4_jules', text: 'Jules is in the lounge at the big table. Not Friday. Just lunch. Just to see her.', cost: 1, tag: 'Jules', go: 'a1_jules' },
          { id: 'sp4_nik', text: 'Nik has been staring at his live map for three days. Something on it is bothering him.', cost: 1, tag: 'Nik', go: 'a1_nik' },
          { id: 'sp4_ciro', text: 'Work a double at Ciro\'s. You\'re down to three hundred dollars.', cost: 1, tag: 'Ciro\'s', go: 'a1_ciro' }
        ],
        done: 'a2_dante'
      }
    },

    a1_simone: {
      text: g => `She\'s in her room with the door open, gluing sequins onto a vest for a show called *Mummers: The Musical* that the student theater company is staging in March and that she describes, to anyone who will listen, as *a war crime with a horn section*.

You knock on the doorframe.

simone: Salvatore Kearney.

sam: I tried on Christmas Eve. On the phone. I made excuses. I\'m not making any now. I lied to you in the theater, and you were right, and I\'m sorry.

She puts down the glue gun.

simone: Do you know how many people have lied to me since September, Salvatore?

sam: Me.

simone: Two. You. And somebody else, over break, who lied *beautifully*. Better than you. Much, much better. Like a professional.

She looks at you over the vest.

simone: I keep thinking: what\'s so dangerous about the truth that the two people I love most on this floor would rather lie to me than give it to me?`,
      choices: [
        { text: '"Because it\'s dangerous to know. Not to tell. To know. They killed Femi for knowing." Open up.', tag: 'Open Up',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Fix it with Simone', on: { strong: 'a1_simone_yes', weak: 'a1_simone_yes', miss: 'a1_simone_no' } } }
      ]
    },
    a1_simone_yes: {
      enter: g => { g.flag('simone10', 'mended'); g.bond('simone', { trust: 3, respect: 2, affection: 1 }); g.hidden('revenant_drift', -0.5); },
      text: `sam: Because it\'s dangerous to know. Not to tell. To *know*. They killed Femi because he knew something and walked six miles to tell me. I don\'t want you to be somebody who knows things, Simone. I want you to be somebody who\'s alive in May.

She looks at you for a long time.

simone: That\'s the first true thing you\'ve said to me since the theater.

sam: Yeah.

simone: It\'s also stupid. You understand that? It\'s *stupid*, Salvatore. I already know. Not knowing isn\'t on the menu for me anymore.

She picks up the glue gun. Puts it down again.

simone: Third chance. There will not be a fourth. I want that in writing, but I\'ll take it in sequins.

She holds up the vest. On the back, in silver sequins she\'s been gluing all morning, it says *MUMMERS*. She hands you the glue gun.

simone: Do the second M. Badly. It\'s for the chorus.`,
      next: '@hub'
    },
    a1_simone_no: {
      enter: g => { g.bond('simone', { trust: 1 }); },
      text: `sam: Because it\'s dangerous to know. They killed Femi for— I don\'t want you—

It comes out in pieces. You can hear yourself making it about you again, your fear, your guilt, and you stop.

Simone watches you stop.

simone: You keep almost saying it, Salvatore. You keep almost.

She picks up the glue gun.

simone: When you\'re ready to finish a sentence, I\'ll be in here. With the sequins.`,
      next: '@hub'
    },

    a1_jules: {
      enter: g => { g.bond('jules', { trust: 1 }); g.flag('jules_lunch4'); },
      text: g => `She\'s at the big table in the lounge with a salad she isn\'t eating and a copy of *Middlemarch* she is.

You sit down across from her. She doesn\'t look up.

jules: It isn\'t Friday.

sam: I know.

jules: We said Friday.

sam: I just wanted to see you.

She looks up. She looks at you for a while over the book.

jules: You look different.

sam: More white hair?

jules: No. Well, yes. Two more, behind your ear. No. You look like you\'ve been carrying something heavy, and you put it down, and you haven\'t picked it back up yet.

${g.f('assunta_watch') ? 'You put your hand in your pocket without meaning to. The watch is there. Cold. You carry it everywhere now.' : ''}

She closes *Middlemarch*.

jules: ${g.f('jules_decision') === 'call' ? 'I fell asleep on the phone with you. I\'ve never fallen asleep on anyone. Not even Callum. Not once in two years. I want you to know that before Friday. I don\'t know why I want you to know. I just do.' : 'I want you to know I\'m frightened of Friday. I\'ve never been frightened of a conversation in my life.'}

sam: Me too.

jules: Good. Then we\'ll be frightened together. Like adults.

She pushes her salad across the table to you.

jules: Eat this. You look like you haven\'t eaten since Christmas. And don\'t tell me about it. Friday.`,
      next: '@hub'
    },

    a1_nik: {
      enter: g => { g.flag('nik_navy4'); g.bond('nik', { trust: 1 }); g.know('navy_yard_cold', ['sam', 'nik'], 'Nik\'s map: since January 10, the Navy Yard cluster has been getting colder every night at 11:51. Somebody there is running something on a schedule.'); },
      text: `Nik doesn\'t say anything when you come in. He just points at the fourth monitor.

The Navy Yard dot.

nik: Watch.

He scrubs the timeline back a week. The dot pulses. Bright, dim, bright, dim. Then, every night, at the same moment, it flares, white-blue, for about a second.

nik: Every night since January tenth. At 11:51. It flares. Like somebody\'s turning something on. Like a test.

He zooms in. The flare is centered on a single building by the dry dock.

nik: That\'s Building 7. That\'s Vinnie\'s building. The one with the seventh floor that isn\'t on the drawings.

He turns his chair around. He looks scared. He looks the way he looked in the stairwell in September.

nik: Bro. I\'m the guy in the chair. The guy in the chair is supposed to tell the hero when the bad guy\'s doing something. The bad guy is doing something. Every night. On a *schedule*.

nik: And I think they\'re doing it so somebody will notice.`,
      next: '@hub'
    },

    a1_ciro: {
      enter: g => { g.money(14 * 10 + 85); g.bond('ciro', { affection: 1 }); },
      text: `Ciro\'s on a Tuesday in January is cold and slow and smells like burnt cornmeal. You work the oven and the e-bike, ten hours, deliveries up and down Cecil B. Moore in the slush.

At closing, Ciro puts a slice in front of you and doesn\'t say anything, which means something\'s coming.

ciro: Your friend. The big one. Vincenzo.

sam: Vinnie?

ciro: He come in Saturday. With the Iannucci boy. Dante. They sit in the corner. The Iannucci boy talk, Vincenzo listen, nod, nod, nod. Like a priest.

ciro: Then the Iannucci boy go to the bathroom, and Vincenzo look at the wall where your picture is.

He points with his rag. On the wall by the register, among the photos of Ciro with Phillies players and a signed picture of Rocky that is definitely not signed by Stallone, there\'s a Polaroid from September. You, in a Ciro\'s shirt, with flour on your face, giving the camera the finger.

ciro: He look at it a long time. Then the Iannucci boy come back, and he stop looking.

He throws the rag in the sink.

ciro: Two hundred twenty-five dollar. Go home. Call your friend.`,
      next: '@hub'
    }
  }
});
