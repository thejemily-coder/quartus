/* S2 · E5 · THE OPEN DOOR, part 1 of 3: meta, cold open, Act One ("Southbound"). */
EH.episode({
  id: 's02e05', season: 2, number: 5, title: 'The Open Door', look: 's2',
  cast: ['sam', 'jules', 'bree', 'teddy', 'heck', 'nik', 'vinnie', 'mikey'],
  start: 'cold_open',
  xp: 5,
  previously: g => [
    'Marisol Reyes is alive, in Room 714. You promised Heck: Marisol first.',
    'Halcyon left the door on the seventh floor of Building 7 open. On purpose.',
    g.f('roof4') === 'all' ? 'On the roof, on January 22, you and Jules told each other everything.' : 'On the roof, you told Jules the true part. She told you hers.',
    'Teddy, Heck, and Bree went into Building 7 without you.',
    'At 11:51, the Navy Yard went white. You felt it from the roof.',
    'Bree\'s last text: *theres more floors than there should be.*'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'NAVY YARD · BUILDING 7 · STAIR B',
      clock: { day: 'Fri', date: 'Jan 22', time: '9:44 PM' },
      text: `> THE CAMERA.

A stairwell. Concrete, new paint, the smell of a building nobody has lived in yet.

Bree Kowal is holding her phone over her head like a lighter at a concert. One bar. None. One. She types with her thumb, fast, and hits send, and watches the little blue line crawl halfway across the top of the screen and stop.

bree: Come on. *Come on.*

Above her, Teddy is reading the numbers stenciled on the landings, the way you\'d read a menu in a language you don\'t speak.

teddy: Six. Seven.

He goes up another flight. Stops.

There\'s no number on this one. Just a steel door with a narrow window, and a card reader with a little red light, and above the door, where the number should be, a clean rectangle of paint a shade whiter than the wall around it. Like somebody took the sign down this afternoon.

teddy: Listen. The drawings say seven floors.

bree: The drawings also said there\'d be a guard.

Heck comes up the stairs past both of them, and puts his face to the narrow window, and goes still.

Through the glass: a hallway lit dark blue, like an aquarium after closing. Beds. Not rooms with beds in them, like seven. Just beds, in two long rows, with curtains on rails between them, half drawn. Machines beside each one, blinking green. Twelve. Fourteen. Bree loses count.

On the third bed on the left, a girl with her head shaved, lying on her back with her hands folded on the blanket like somebody arranged them. On the inside of her right wrist, a tattoo of a lightbulb.

Heck\'s hand is on the door. The paint under his palm starts to bubble.

heck: Mari.

Teddy grabs his wrist. It hisses. Teddy doesn\'t let go.

teddy: Not yet. You burn it, they hear. *Listen* to me. The door on seven was open for a reason. This one\'s shut for a reason.

heck: She\'s *right there*, Teddy.

teddy: I know. So we find a key. We find the room where they sit and watch, and we find a card, and we walk her out like we work here. Okay? Heck. Okay?

A long time. The paint stops bubbling.

heck: Okay.

They go back down to seven.

> 11:51 PM.

They didn\'t find a key. They found locked doors, and a room at the end of the hall with dark glass they couldn\'t see through, and a bowl of fruit nobody had touched.

They\'re standing outside 714 when the lights go white.

When it\'s over, Heck is on his knees in the hallway with steam coming off his back. Teddy is looking at his hands. They\'re gray to the elbow. He opens and closes them like they belong to somebody else.

Bree is sitting against the wall with her mouth open, trying to say something.

Nothing comes out.

She tries again. What comes out is Teddy\'s voice, perfectly, from some other day:

*"Listen."*

She claps both hands over her mouth. Her eyes are huge.

Down at the end of the hall, the elevator dings.

The doors slide open. The car is empty, lit, waiting. The doors don\'t close.

Teddy looks at the open elevator.

teddy: It\'s not for us.

He sits down on the floor next to his cousin and puts his gray arm around her.

teddy: It\'s for him.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_roof' },

    /* ================= ACT ONE: SOUTHBOUND ================= */
    a1_roof: {
      card: { kind: 'act', label: 'Act One', title: 'Southbound' },
      night: true,
      loc: 'CARDONE HALL · ROOF',
      clock: { day: 'Fri', date: 'Jan 22', time: '11:53 PM' },
      text: g => `You call Bree. It rings eleven times and stops ringing, like the call fell off the edge of something.

You call Teddy. Straight to voicemail. *It\'s Teddy. Leave it.*

You call Heck. Heck doesn\'t have a phone. Heck has never had a phone. You knew that. You call anyway, Bree\'s number again, and listen to it ring into nothing.

Jules is watching you. She hasn\'t let go of your arm.

jules: The room. Seven-fourteen. The one Bree said was empty.

sam: She\'s not in the room. Bree says the room\'s empty. They went *up*.

You look south. The glow at the bottom of the city is just a glow again. Like nothing happened. Like a building with the lights on.

sam: I have to go.

jules: I know.

sam: Jules. I mean I have to go *now*. And I can get there faster than anything in this city, and you can\'t, and that\'s not a joke, that\'s the actual—

jules: I\'m coming.

sam: You\'re not.

She doesn\'t argue. She picks her coffee up off the parapet, looks at it, and pours it out over the edge, very precisely, onto nobody, nine floors down.

jules: ${g.f('roof4') === 'all' ? 'An hour ago I told you about four darts on the Parkway, and you told me who was holding the rifles. You told me a boy you knew walked six miles to your door to tell you something, and they killed him for it. You told me your great-grandmother\'s brother went into a fire for three children and came back old.' : 'An hour ago you told me the world stops and you don\'t. You told me the true part. I heard what you left out.'}

jules: You are not going in there alone. Not tonight. Not the night I *found out*.

sam: It\'s a trap.

jules: Then they\'ll be expecting one of us.

She holds out her hand. Not for yours. Palm up, like she\'s asking for your phone.

jules: And things go my way, Sam. Let them.`,
      choices: [
        { text: 'Go together. Down to Broad. Let her get the cab, and the lights, and whatever else goes her way tonight.', tag: 'Together',
          fx: g => { g.flag('ride5', 'cab'); g.hidden('jules_debt', 1); g.hidden('jules_open', 1); g.bond('jules', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a1_cab' },
        { text: 'Slip. Be there before she reaches the street. She can follow in a cab. You can\'t make her stay, but you can be first.', tag: 'Slip', slip: true,
          fx: g => { g.flag('ride5', 'slip'); g.hidden('revenant_drift', 0.5); }, go: 'a1_slip' }
      ]
    },

    a1_cab: {
      night: true,
      loc: 'NORTH BROAD STREET',
      clock: { time: '11:58 PM' },
      text: `It\'s Friday at midnight on North Broad, and there are no cabs. There are never cabs. You have stood on this corner at this hour and watched forty Ubers go by full.

Jules steps off the curb, raises one hand, and a yellow cab pulls out of the bus lane and stops in front of her as if she\'d booked it in October.

The driver has an icon of Saint Volodymyr on the dashboard and a cup of tea in the holder.

jules: The Navy Yard. Broad and Intrepid.

DRIVER: Is closed. Is nothing there at night.

jules: Then it won\'t take long.

He shrugs, and pulls out, and the light at Cecil B. Moore turns green.

Then the light at Girard. Then Fairmount. Spring Garden, where it started, the corner where the bus stopped, green. Vine. City Hall, where Broad splits around Billy Penn, and every light on both sides turns green at once, like the city is clearing its throat.

You look at her.

She\'s sitting very straight with her hands in her lap. She isn\'t holding her breath. She\'s doing the opposite, breathing slow and even, letting it out, letting it *go*, and every time she exhales, another light goes green.

Washington. Ellsworth. Snyder. Oregon. Green, green, green.

There\'s a little blood at the edge of her nostril. She wipes it with her thumb without looking at it, the way you do.

sam: Jules.

jules: I know. It\'s fine.

sam: It\'s not.

jules: No. But it\'s *mine*, for once. I\'m choosing what it\'s for.

The driver is crossing himself.

DRIVER: Twenty-two years. Never. Never one time all green.

jules: It\'s a special night.

Eleven minutes, City Hall to the Navy Yard, at midnight on a Friday. Nobody has ever done it. You take out your phone.`,
      next: 'a1_calls'
    },

    a1_slip: {
      night: true,
      loc: 'BROAD STREET · SOUTHBOUND',
      enter: g => { g.unstick('unstick_s2e5a', 'Time debt (Broad Street, southbound)'); g.hidden('jules_debt', 1); g.hidden('jules_open', 1); },
      text: g => `You step through.

The cold comes the way it always comes now, all at once, like falling through ice. ${g.unsticks() ? 'Thick. Grabbing. The walls of the second start closing before you\'ve gone a block.' : ''}

Broad Street, stopped. A SEPTA bus at Cecil B. Moore with its doors half open and a man half off it. Headlights like pins stuck in the dark. A plastic bag in the air at Girard, hanging there, a jellyfish.

You run.

Five and a half miles. You\'ve never Slipped this far. Past City Hall, where Billy Penn looks down at you with his hat on, past the Avenue of the Arts, past the stadiums, everything gray and blue and still. Your lungs hurt. Your nose is pouring before Washington Avenue.

${g.f('assunta_watch') ? 'In your pocket, the watch is ticking. The only thing in the whole city that moves besides you. *Tick.* You hold it in your fist and run toward the sound of it, and when the cold closes on you at Oregon Avenue, you find the door, right there, by the watch, where Nonna said it would be.' : 'The cold closes on you at Oregon Avenue. You claw your way out.'}

You come out on your knees on the sidewalk at Broad and Pattison, by the stadiums, in the dark.

You look at your phone. 12:04.

Eleven minutes, gone, somewhere between Girard and here. You don\'t remember them. You have frost on your sneakers.

You get up and walk the last half mile to the gate, because you can\'t do anything else.

Your phone buzzes. Jules.

TXT jules: I\'m in a cab. Every light on Broad is green.
TXT jules: I mean every one.
TXT jules: Wait for me. Please. Four minutes.

You stand in the shadow of the empty guard shack at Broad and Intrepid with blood on your lip, and you wait for her, and you take out your phone again.`,
      next: 'a1_calls'
    },

    a1_calls: {
      night: true,
      loc: 'BROAD & INTREPID',
      clock: { day: 'Sat', date: 'Jan 23', time: '12:10 AM' },
      text: g => `${g.f('ride5') === 'cab' ? 'The cab drops you at Broad and Intrepid and pulls away fast, the driver still crossing himself.' : 'A cab comes down Broad with every light green ahead of it, and stops at the gate, and Jules gets out, and walks straight up to you and puts her thumb on the blood on your lip.\n\njules: You didn\'t wait.\n\nsam: I waited four minutes.\n\njules: You left the roof eleven minutes before that. I watched you go. You were there, and then you weren\'t, and there was frost on the parapet where you\'d been standing.'}

The guard shack is empty. The striped arm is up. Past it, the Navy Yard is a dark grid of old brick buildings and new glass ones and long empty streets with Navy names, Intrepid, Constitution, Langley, all the way down to the river.

Building 7 is the one with every window on the seventh floor lit.

There\'s nobody here. That\'s the worst part. No guard, no truck, no gray polo shirts. Just an open gate, at midnight, like a door somebody\'s holding for you.

jules: They know you\'re coming.

sam: They know I\'m *here*.

You have your phone in your hand. One call. You can feel the minutes going.`,
      hub: {
        slots: 1, label: 'One call',
        blurb: 'Whoever you call is in this now.',
        options: [
          { id: 'c5_nik', text: 'Nik. He has the map, the Navy Yard cameras he swore he wasn\'t hacking, and a headset.', cost: 1, tag: 'Nik', go: 'a1_call_nik' },
          { id: 'c5_vinnie', text: 'Vinnie. He drives for Dante. He counted the beds at the Navy Yard. He has a car nobody stops.', cost: 1, tag: 'Vinnie', go: 'a1_call_vinnie', if: g => g.knows('sam_slip', 'vinnie') },
          { id: 'c5_mikey', text: 'Mikey. A cop at the gate changes the math. Even a cop they took off the case.', cost: 1, tag: 'Mikey', go: 'a1_call_mikey', if: g => g.f('mikey_knows') }
        ],
        done: 'a2_seven'
      }
    },

    a1_call_nik: {
      night: true,
      enter: g => { g.flag('call5', 'nik'); g.bond('nik', { trust: 1, respect: 1 }); },
      text: `He picks up before it rings.

nik: I\'m watching it. I\'m watching it, bro, I watched the whole thing, the dot went *white*, it went off the scale, I thought my monitor broke, where are you, tell me you\'re not where I think you are.

sam: Broad and Intrepid.

nik: Salvatore.

sam: I need you in my ear. Can you see the yard?

A sound like Nik putting his face in his hands, and then the sound of him taking his face out of his hands and typing.

nik: Okay. Okay. Okay. The Navy Yard has a hundred and forty security cameras on a municipal network that was installed by the lowest bidder in 2014, and I want to say, for the record, for the *transcript*, that I am not looking at them. I am *aware* of them. Hold on.

nik: Okay. Building 7. Stair B, on the east side, the fire door\'s propped. There\'s a truck. A white box truck, no logo, parked behind Building 10, engine running. Four people in the cab. Bro, they\'re just *sitting* there.

sam: Waiting.

nik: Yeah. I\'ll tell you when they stop waiting. Put your earbud in. I\'m not hanging up. I\'m not hanging up until you\'re back on Broad Street, do you understand me, I don\'t care if it\'s four in the morning.

You put the earbud in. You can hear him breathing. He\'s breathing too fast. He\'s breathing anyway.`,
      next: '@hub'
    },

    a1_call_vinnie: {
      night: true,
      enter: g => { g.flag('call5', 'vinnie'); g.bond('vinnie', { trust: 2, affection: 1 }); },
      text: `It rings four times.

vinnie: Sally. It\'s midnight. I\'m outside a club on Delaware Ave holding Dante\'s coat.

sam: I\'m at the Navy Yard.

Silence. Music in the background, bass through a wall.

vinnie: The Navy Yard.

sam: The building with the beds. Some friends of mine went in. They\'re not coming out.

More silence. You can hear him walking, the music getting farther away, a door, the street.

vinnie: Yo. Listen to me. You know what you\'re asking. Dante finds out I took his car to the Navy Yard at midnight for *you*, into the one place in this city Bruno told everybody to stay out of, I\'m done. I\'m in the river.

sam: I know.

vinnie: So you\'re asking.

sam: I\'m asking.

A long breath.

vinnie: Fifteen minutes. South gate, by the dry dock, not the main one, the main one\'s got cameras. I\'ll be the black Escalade, which, you know. Every car in that lot after midnight is a black Escalade. I\'ll flash twice.

sam: Vin. Are you gonna tell Dante?

vinnie: I\'m not telling nobody. I never told nobody nothing in my life, college. That\'s the only thing I\'m good at.

He hangs up.`,
      next: '@hub'
    },

    a1_call_mikey: {
      night: true,
      enter: g => { g.flag('call5', 'mikey'); g.bond('mikey', { trust: 2, respect: 1 }); g.heat('police', 1); },
      text: `He picks up on the first ring, the way he always does, because a cop\'s phone is never off.

mikey: Sammy. What\'s wrong.

sam: I\'m at the Navy Yard. Building 7. Halcyon. Three friends of mine went in at nine, and they\'re not answering, and the gate\'s wide open, and nobody\'s here.

You hear him sit up in bed. You hear the drawer where he keeps his service weapon.

mikey: Don\'t go in.

sam: Mikey.

mikey: Don\'t go in, Sammy, I\'m twenty minutes out, I\'m off the task group, I\'m off *everything*, Brannigan has a guy sitting outside my apartment in a Camry half the nights of the week, and if I show up at the Navy Yard at one in the morning—

He stops.

mikey: Is he there? Brannigan?

sam: I don\'t know. Probably.

The sound of keys.

mikey: Okay. I\'m coming. Not in a cruiser. I\'m coming in my car, I\'m off duty, I\'m a guy with a badge who heard a noise. If anybody stops me, I\'m a guy with a badge who heard a noise. You hear me? You get them out, you come to the gate on Broad, and I\'ll be standing in it.

sam: Mikey.

mikey: What.

sam: Thanks.

mikey: Don\'t thank me. Ma\'s gonna kill both of us.`,
      next: '@hub'
    }
  }
});
