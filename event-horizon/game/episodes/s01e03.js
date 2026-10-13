/* S1 · E3 · THE BLACKOUT FLOOR, part 1 of 3: meta, cold open, Act One ("Heat Advisory"). */
EH.episode({
  id: 's01e03', season: 1, number: 3, title: 'The Blackout Floor', look: 's1',
  cast: ['sam', 'jules', 'nik', 'simone', 'vinnie', 'grace', 'rosa', 'frank', 'nonna', 'mikey', 'gigi'],
  start: 'cold_open',
  xp: 5,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'CARDONE HALL · ROOF',
      clock: { day: 'Thu', date: 'Sep 3', time: '2:50 AM' },
      text: `It's ninety-one degrees at three in the morning, and Nik is wearing a headlamp.

nik: Okay. Trial forty-four. Ready?

He's sitting cross-legged on an HVAC unit with his laptop, a stopwatch app, a thermometer he "borrowed" from the chem lab four days ago and is now emotionally attached to, and a spiral notebook labeled **THE SLIP (VOL. 2)** because Vol. 1 ran out on Tuesday. Below you, North Philly hums in the heat like a fridge about to die. It's September, technically. Nobody told the city.

It's been a week since Girard. A week of this: every night on the roof, Nik with his stopwatch, you stepping in and out of a stopped world until your nose bleeds and he makes you stop.

You've learned things. You can stay in for about a minute, which is four seconds out here. Coming back is like surfacing from the bottom of a pool. The colder it is in there, the hungrier you are after. You eat like a linebacker now. Ciro has started leaving you a whole tray of garlic knots "so you don't die in my store."

And the Broad Street Blur is everywhere. A mural petition has nine thousand signatures. Somebody's selling **I ❤️ THE BLUR** shirts out of a van on Passyunk Avenue, eight blocks from your mother's house. A guy on a local morning show did a segment called *"Blur or Blurn't?"* that Nik has watched eleven times.

nik: Okay, so, before trial forty-four, I need to say something, and I need you to let me finish.

sam: You never let *me* finish.

nik: That's because you never have a finish, you just stop. Listen. If you keep doing this, the Girard thing, the Wawa thing, the bus, you can't keep doing it in the Ciro's shirt. That shirt is the single most identifiable piece of fabric in the city of Philadelphia right now. There's a *fan account for the shirt*.

He holds up his phone. There is a fan account for the shirt. It has four thousand followers.

nik: You need something else. I'm not saying a *costume*. I'm saying a… a professional uniform. For your, uh, nights.`,
      choices: [
        { text: 'Black hoodie, black neck gaiter pulled up to the eyes, the Eagles cap Pop gave you turned backward. Nobody looks twice at a kid in a hoodie in Philly.', tag: 'Hoodie',
          fx: g => { g.flag('costume', 'hoodie'); g.bond('nik', { respect: 1 }); }, go: 'cold_costume' },
        { text: 'Ciro\'s green windbreaker, the one from the Hitch, turned inside out so the letters are hidden. Nonna said wear a jacket.', tag: 'The jacket',
          fx: g => { g.flag('costume', 'windbreaker'); }, go: 'cold_costume' },
        { text: 'Your bike helmet with the tinted visor Ciro bought you for night deliveries. Full face, no face.', tag: 'Helmet',
          fx: g => { g.flag('costume', 'helmet'); }, go: 'cold_costume' },
        { text: '"I\'m not wearing a costume, Nik. I\'m not a superhero. I\'m just a guy who keeps being there."', tag: 'No costume',
          fx: g => { g.flag('costume', 'none'); g.bond('nik', { tension: 1 }); g.hidden('revenant_drift', 0.3); }, go: 'cold_costume' }
      ]
    },
    cold_costume: {
      night: true,
      enter: g => { g.know('costume', ['sam', 'nik'], 'Your "uniform" for nights out: ' + ({ hoodie: 'black hoodie, gaiter, Pop\'s backward Eagles cap.', windbreaker: 'Ciro\'s green windbreaker, inside out.', helmet: 'your night-delivery bike helmet with the tinted visor.', none: 'nothing. You go as yourself.' })[g.f('costume')]); },
      text: g => `${{
        hoodie: 'nik: Okay. Okay, that\'s actually smart. That\'s *so* smart, it\'s basically camouflage. The whole city is a kid in a hoodie. You\'re hiding in the Philadelphia of it all.',
        windbreaker: 'nik: Inside out? Okay. Okay, I hate that it\'s kind of iconic. That\'s like, a *gesture*. That\'s a fan-theory jacket. People are gonna write essays about why it\'s inside out.\n\nsam: Nonna said wear a jacket.\n\nnik: Then your grandmother\'s running the brand now. I\'ve made my peace with it.',
        helmet: 'nik: The *visor*. Bro. The visor is so good. It\'s like Daft Punk if Daft Punk delivered pizza. Nobody can see your face, nobody can see your nosebleeds. That\'s a two-for-one.',
        none: 'Nik looks at you for a long second, the headlamp right in your eyes.\n\nnik: You know that\'s how they get you, right? It\'s *always* the face. Every single one. The face, and then the family.\n\nYou don\'t have an answer for that. He writes something in Vol. 2 and underlines it twice.'
      }[g.f('costume')]}

Trial forty-four. You step through. The city stops. A moth hangs in Nik's headlamp beam like a flake of ash. You walk to the parapet and look out over North Philly, frozen, every window lit, every AC dripping.

Something's different tonight.

Far off to the east, past the El, past Kensington, a shimmer hangs over the rooftops like heat off a road. But it's in the *Slip*, where heat shouldn't shimmer, where nothing should move at all. A smear in the stopped air, the size of a city block. Wavering.

You stare at it until the pull takes you.

!! ~WHUMP

nik: Three point nine on my end. Times fifteen, that's fifty-eight on yours. That's a record. Why are you looking at Kensington like that?

When you look again, in the normal world, there's nothing there. Just the haze, and the El, and a sky the color of a dirty nickel.

nik: Sam?

sam: Nothing. Heat.

nik: You're lying to me. You promised you wouldn't lie to me.

sam: …I saw something. Over there. In the Slip. Something was *moving*.

Nik looks east and doesn't say anything, which for Nik is a medical event. Then he writes it down with the date and the time. Under it, in capital letters: **NOTHING SHOULD MOVE.**`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_saturday' },

    /* ================= ACT ONE: HEAT ADVISORY ================= */
    a1_saturday: {
      card: { kind: 'act', label: 'Act One', title: 'Heat Advisory' },
      loc: 'CARDONE HALL · 9TH FLOOR',
      clock: { day: 'Sat', date: 'Sep 5', time: '9:40 AM' },
      enter: g => { g.sleep(7); g.know('kensington_shimmer', ['sam', 'nik'], 'In the Slip, something over Kensington was moving. Nothing should move in the Slip.'); },
      text: `Labor Day weekend. Excessive heat warning through Monday. One hundred and four degrees forecast for Saturday afternoon, the hottest September day in Philadelphia since they started keeping track, which the woman on 6abc says with the cheerful terror of a person who knows she'll be saying it again next year.

The ninth floor is emptying like a bathtub.

Everybody with a family within two hours is going home: to Pittsburgh, to the Poconos, to the shore, to air conditioning that works. The hallway is a parade of rolling suitcases and laundry bags and parents double-parked on Broad.

Nik's mother has come down from Edison personally. She's standing in the doorway of 9-14 with her car keys in one hand and a cooler in the other, and she's looking at you with tremendous suspicion.

MRS. BHATTACHARYA: You are the honest one. Sam.

sam: Hi, Mrs. Bhattacharya.

MRS. BHATTACHARYA: Nikhil says you are on the roof every night. Doing *science*. Is that true?

Nik is behind her, frantically making a slicing motion across his throat.

sam: …It's a physics thing. For extra credit. Very safe.

She looks at you the way she must look at Nik's report cards.

MRS. BHATTACHARYA: Most days honest. Okay.

She hands you the cooler.

MRS. BHATTACHARYA: Chicken biryani. Eat it before Monday or it will kill you.

nik: *Ma.* Ma, haan, haan, he'll eat it.

At the door, Nik hugs you, fast and awkward, and says into your shoulder, very quietly:

nik: Burner's charged. Earpiece is in your sock drawer. If anything happens, I'm in Edison, and Edison has Wi-Fi.

Then he's gone, and 9-14 is very quiet, and there's a cooler of biryani on your bed.

Across the hall, 9-11's door is open. Simone is stuffing a weekend bag with the urgency of someone escaping a burning building.

simone: Fishtown. My friend Dez has a window unit and a bathtub full of ice and zero rules. I'll be back Monday. *Juliet* refuses to come.

Jules is sitting at her desk in a tank top with her hair up and a fan pointed directly at her face, reading. She doesn't look up.

jules: Juliet has work to do.

simone: Juliet's mother is throwing a Labor Day lawn party for two hundred people with a *string quartet*, and Juliet would rather die in a brick oven.

jules: Both of those things are true.

Simone looks at you over her shoulder, eyebrows halfway up her forehead, as if to say *you two are going to be alone on this floor for three days, and I'm going to miss it, and I'll never forgive either of you.*

simone: Salvatore. Don't let her die.

She's gone in a cloud of perfume and rolling wheels. It's just you and Jules, and the hallway, and the heat.

Jules's phone buzzes on the desk. She looks at the screen. **MOTHER**. She turns it face down.`,
      choices: [
        { text: '"Not going home either, huh?"', tag: 'Small talk',
          fx: g => { g.flag('sat_jules', 'talk'); }, go: 'a1_jules_door' },
        { text: 'Say nothing. Take your biryani and go. You have a shift.', tag: 'Leave it',
          fx: g => { g.flag('sat_jules', 'left'); g.bond('jules', { respect: 1 }); }, go: 'a1_hub' }
      ]
    },
    a1_jules_door: {
      text: g => `She looks up. It's the first time she's looked directly at you since she left you asleep under the lounge blanket with a note.

jules: My mother is having two hundred people to Ravenscourt for the last lawn party of the summer. My father will arrive by helicopter, which he'll pretend is a joke, which it won't be. My twin will give a toast. Everyone will ask me why I'm at Temple, in a voice that sounds like they're asking about a diagnosis.

She turns a page of her book.

jules: I would rather be here, in a hundred and four degrees, with you, across a hallway. Which is a sentence I want you to understand is not a compliment.

sam: It kind of is, though.

jules: It's a ranking. You came in above a string quartet.

${g.f('door') === 'highness' ? 'It\'s the closest she\'s come to a joke with you since you called her *Your Highness*. You decide not to point that out.' : ''}

Her phone buzzes again. **MOTHER**. She doesn't turn it over this time. She just looks at it, buzzing, until it stops.`,
      next: 'a1_hub'
    },

    /* ---------- Saturday hub ---------- */
    a1_hub: {
      loc: 'SATURDAY · SEPTEMBER 5',
      clock: { time: '10:30 AM' },
      text: `The heat sits on the city like a wet hand. By eleven, it's ninety-eight. PECO is texting everyone in North Philly to "conserve energy between 2 and 8 p.m." The El is running slow because the rails are expanding.

You have the day. Not all of it.`,
      hub: {
        slots: 3, label: 'Saturday, September 5',
        blurb: 'It\'s a hundred and four degrees. Everything takes longer than it should.',
        options: [
          { id: 'sat_ciro', text: 'Work the lunch shift at Ciro\'s. Everybody orders in when it\'s this hot.', cost: 1, tag: 'Money', go: 'a1_ciro' },
          { id: 'sat_femi', text: 'Text Femi. He wrote you at 4 a.m.: *are you awake. something is wrong with the cameras.*', cost: 1, tag: 'Femi', go: 'a1_femi' },
          { id: 'sat_pop', text: 'Call Pop. Not Ma: Pop. You haven\'t talked to him since the cab.', cost: 1, tag: 'Pop', go: 'a1_pop' },
          { id: 'sat_nonna', text: 'Take the train down to Mifflin Street. Nonna said Sunday, but Nonna is never wrong about anything, and you can\'t wait.', cost: 2, tag: 'Nonna', go: 'a1_nonna' },
          { id: 'sat_nap', text: 'The fourth floor of Charles Library has air conditioning and a beanbag. Sleep.', cost: 1, tag: 'Rest', go: 'a1_nap' }
        ],
        done: 'a1_order'
      }
    },

    a1_ciro: {
      loc: 'CIRO\'S PIZZA · CECIL B. MOORE AVE',
      enter: g => { g.money(14 * 4); },
      text: `The pizza oven is nine hundred degrees, the kitchen is a hundred and twelve, and Ciro is working in a white undershirt with a bag of frozen peas balanced on his head like a hat.

ciro: Don't look at me. You look at me like a dead fish on ice. Deliver.

Everybody in North Philly is ordering in. You ride through streets so hot the air above the asphalt wobbles. Old men sit on milk crates in the shade of rowhouse awnings with wet towels around their necks. Kids have opened a fire hydrant on Norris Street, and a cop in a squad car is pretending very hard not to see it. A woman on 17th Street tips you a cold can of Pepsi instead of money, and it's the best tip you've ever gotten.`,
      choices: [
        { text: 'Hustle. Fast and friendly. Every door is a tip.',
          check: { kind: 'move', move: 'Work the Door', attr: 'charm', skill: 'hustle', label: 'Tips', on: { strong: 'a1_ciro_good', weak: 'a1_ciro_ok', miss: 'a1_ciro_bad' } } },
        { text: 'Burn through the route. Heat be damned.',
          check: { kind: 'pool', attr: 'reflex', skill: 'ride', diff: 2, label: 'Heat-wave lunch', on: { crit: 'a1_ciro_good', success: 'a1_ciro_good', partial: 'a1_ciro_ok', fail: 'a1_ciro_bad' } } }
      ]
    },
    a1_ciro_good: { enter: g => { g.money(52); g.bond('ciro', { respect: 1 }); }, text: `Fifty-two in tips, two cold Pepsis, a popsicle, and a blessing from a church lady in a lawn chair who says you have "a delivering spirit." Ciro takes the peas off his head long enough to say *"Not bad,"* and then puts them back.`, next: '@hub' },
    a1_ciro_ok: { enter: g => g.money(24), text: `Twenty-four in tips and a mild case of heat stroke you treat with a garlic knot and the walk-in freezer. Ciro finds you sitting inside it at two-fifteen and closes the door on you for a full minute "to teach you something."`, next: '@hub' },
    a1_ciro_bad: { enter: g => { g.money(9); g.pool('stamina', -1); }, text: `Nine dollars and a flat tire on Diamond Street, which you fix by hand in a hundred and one degrees while a pit bull named Princess watches you from a porch with deep contempt. You've met Princess before. She remembers you.`, next: '@hub' },

    a1_femi: {
      loc: 'CHARLES LIBRARY · CIRCULATION DESK',
      enter: g => { g.bond('femi', { trust: 1, affection: 1 }); g.know('femi_cameras', ['sam', 'femi'], 'Femi doesn\'t show up on the library\'s security cameras anymore. The chair he sits in does, but he doesn\'t. Halcyon\'s "wellness study" is offering $500 a head on flyers all over campus.'); },
      text: g => `Charles Library is one of the only buildings on campus with air conditioning that works on a holiday weekend, so it's full of the people who stayed: grad students, international students, a guy asleep on the floor of the lobby under the big wooden wave of a ceiling, using his backpack as a pillow.

Femi is at the circulation desk. You walk straight to him, and three people in line behind you glance at the desk, see nobody, and leave.

femi: You came.

He doesn't say hi. He turns his laptop around. On it is a grid of security-camera feeds from the library: the lobby, the stacks, the circulation desk. In the circulation desk feed, there's the desk, the computer, the chair, and a pen moving, writing on a pad by itself. Nobody's holding it.

femi: That's me. Right now. Wave.

You wave at the camera. In the feed, a kid in a Ciro's shirt waves at an empty chair.

femi: I'm not on them anymore. Any of them. The library, my phone's camera, the Wawa. I took a selfie this morning and it's just the wall behind my head. I'm *disappearing*, Sam. Not, like, emotionally. Optically.

He laughs. It's a thin sound.

femi: And then there's this.

He slides a flyer across the desk. Glossy, cheerful, a sunrise over the Navy Yard. **HALCYON COMMUNITY WELLNESS STUDY · Were you in North Philadelphia on Aug. 22? Experiencing unusual symptoms? $500 for one visit. Confidential. Caring.** There are a hundred of them on bulletin boards all over campus.

femi: Five hundred dollars. That's a month of my sister's daycare.

He taps the flyer.

femi: And they've got machines, right? Scanners. Real ones. Maybe their machines can see me even if nobody else can. Maybe they can *fix* it.`,
      choices: [
        { text: '"Don\'t go, Femi. Swear to me. They\'re not studying people, they\'re making a list." You have the receipts.', tag: 'Warn him', if: g => g.knows('halcyon_beds') || g.knows('halcyon_outreach'),
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', bonus: 1, bonusLabel: 'You have proof', label: 'Keep Femi away from Halcyon', on: { strong: 'a1_femi_warn_strong', weak: 'a1_femi_warn_weak', miss: 'a1_femi_warn_miss' } } },
        { text: '"Don\'t go, Femi. Swear to me. They\'re not studying people, they\'re making a list."', tag: 'Warn him', if: g => !(g.knows('halcyon_beds') || g.knows('halcyon_outreach')),
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', label: 'Keep Femi away from Halcyon', on: { strong: 'a1_femi_warn_strong', weak: 'a1_femi_warn_weak', miss: 'a1_femi_warn_miss' } } },
        { text: 'Tell him. What you are. Why Halcyon wants people like you. Both of you.', tag: 'Tell Femi',
          fx: g => { g.flag('femi_told'); g.know('sam_slip', ['femi']); g.bond('femi', { trust: 3 }); g.flag('femi_warned', 'strong'); }, go: 'a1_femi_tell' },
        { text: '"I don\'t know, man. Maybe they can help." It\'s his life. His call.', tag: 'His call',
          fx: g => { g.flag('femi_warned', 'none'); g.hidden('revenant_drift', -0.3); }, go: 'a1_femi_none' }
      ]
    },
    a1_femi_warn_strong: {
      enter: g => { g.flag('femi_warned', 'strong'); g.bond('femi', { trust: 2 }); },
      text: g => `sam: Don't go. Femi. Swear to me. They're not studying people, they're making a list. ${g.knows('halcyon_outreach') ? 'They\'re paying RAs five hundred bucks to hand over names. My RA told me. A guy in a gray polo shirt asked about my *floor*.' : ''} ${g.knows('halcyon_beds') ? 'My friend works construction at their Navy Yard building. They just moved forty-one hospital beds into the basement.' : ''}

Femi goes very still.

femi: Forty-one.

sam: Forty-one.

He looks at the flyer for a long moment. Then he folds it in half, and in half again, and puts it in his pocket, not the trash. You notice that.

femi: Okay. Okay, I won't go. I swear. On my sister.

He means it. You can see that he means it. You can also see how much he wanted the five hundred dollars, and the scanner, and the chance that somebody, anybody, could look at him and see him.`,
      next: '@hub'
    },
    a1_femi_warn_weak: {
      enter: g => { g.flag('femi_warned', 'weak'); g.bond('femi', { trust: 1 }); },
      text: `sam: Don't go, Femi. They're not studying people. They're making a list.

femi: You don't know that.

sam: I know a guy in a polo shirt is offering my RA a gift card for my name.

He thinks about it. He folds the flyer in half, then in half again, and puts it in his pocket.

femi: I'll think about it. That's all I can do. I'll think about it.`,
      next: '@hub'
    },
    a1_femi_warn_miss: {
      enter: g => { g.flag('femi_warned', 'tried'); g.bond('femi', { tension: 1 }); },
      text: `sam: Don't go, Femi. They're making a list—

femi: You don't *get* it. You walk into a room and people look at you. People laugh at your jokes. People *film* you, Sam. I'm writing my name on whiteboards so my own students know I'm in the room.

He's not angry. That's the worst part. He just sounds tired.

femi: Five hundred dollars and a machine that might see me. You'd go too.

He puts the flyer on the desk and smooths it flat with both hands, very carefully, like a dollar bill.`,
      next: '@hub'
    },
    a1_femi_tell: {
      text: `You lean on the desk and you tell him, low, while the library hums around you: the cold, the stopped rain, the Slip, the Wawa, the truck at Girard. That the polo-shirt man's looking for the Blur. That *you're* the Blur.

Femi stares at you.

femi: You're the *Broad Street Blur*.

sam: Keep your voice down.

femi: Nobody can hear me! That's my whole thing!

He starts laughing. He laughs until he has to put his head down on the desk, and for a second you think he's crying, and then you're sure he is, a little, both at once.

femi: Okay. Okay. So they want *us*. Not to fix us. To find us.

He takes the flyer and tears it in half, slowly, then in half again.

femi: I'm not going. I swear on my sister. And if they come for you, I'll see them first. Nobody notices me, remember? I'm the best lookout in Philadelphia.`,
      next: '@hub'
    },
    a1_femi_none: {
      text: `sam: I don't know, man. Maybe they can help.

Femi nods slowly.

femi: Yeah. Maybe.

He puts the flyer in his shirt pocket, over his heart, and pats it twice. When you leave, he's sitting at the desk in the cold blue air conditioning, writing his name over and over on a sticky note, F-E-M-I, like he's trying to remember how.`,
      next: '@hub'
    },

    a1_pop: {
      loc: 'PHONE · LIBERTY CAB #2207',
      enter: g => g.bond('frank', { trust: 1 }),
      text: g => `He picks up on the fourth ring. In the background: the cab's engine idling, the AC rattling, talk radio about the Eagles' secondary.

frank: Kid.

sam: Hey, Pop.

frank: Something wrong?

sam: No. I just. Wanted to call.

A long pause. You can hear him not knowing what to do with that.

frank: Okay.

You talk about the heat. You talk about the Eagles, at length, because that's the only language you and your father have ever been fluent in together. He tells you about a fare who threw up in the back seat on Delaware Avenue and then tipped forty dollars "as an apology." You laugh. He laughs. It's the best conversation you've had with him in a year.

Then it's quiet.

${g.knows('pop_jacket') ? 'You think about the back booth at the Melrose. The jacket. The eggs he didn\'t eat.' : ''} ${g.knows('pop_unknown_calls') ? 'You think about 215-555-4471.' : ''}`,
      choices: [
        { text: '"Pop. Who\'s the guy in the nice jacket? At the Melrose?"', if: g => g.knows('pop_jacket'),
          check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'empathy', label: 'Get Pop to talk', bonus: 1, bonusLabel: 'You saw the jacket', on: { strong: 'a1_pop_strong', weak: 'a1_pop_weak', miss: 'a1_pop_miss' } } },
        { text: '"Pop. Are you okay? Like, actually?"', if: g => !g.knows('pop_jacket'),
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Get Pop to talk', on: { strong: 'a1_pop_strong', weak: 'a1_pop_weak', miss: 'a1_pop_miss' } } },
        { text: 'Let it be. This was good. Let it just be good.', tag: 'Let it be',
          fx: g => { g.bond('frank', { affection: 2 }); g.flag('pop_call', 'good'); }, go: 'a1_pop_good' }
      ]
    },
    a1_pop_strong: {
      enter: g => { g.flag('pop_call', 'admitted'); g.bond('frank', { trust: 2 }); g.know('pop_owes', ['sam', 'frank'], 'Pop admitted he owes "some people" money from "before you were born, almost." "It\'s handled. Don\'t tell your mother."'); },
      text: `The engine idles. The radio is talking about a linebacker's hamstring. Your father breathes.

frank: I owe some people some money, kid.

He says it so quietly you almost miss it.

frank: Old money. Before you were born, almost. I thought it was done. Somebody bought the paper. Now it's theirs.

sam: How much?

frank: It's handled.

sam: Pop. How much?

frank: It's *handled*, kid. Don't tell your mother. Don't tell your brother. There's nothing to do.

A long silence.

frank: I'm glad you called, kid. I mean that. Don't call about this again.

He hangs up. You sit on the edge of your bed in a hundred-degree room with the phone in your hand, and the money from the envelope he gave you on move-in day is still in your sock drawer, next to Nik's earpiece.`,
      next: '@hub'
    },
    a1_pop_weak: {
      enter: g => { g.flag('pop_call', 'deflected'); g.know('pop_owes_hint', ['sam'], 'When you asked Pop if he was okay, he said "It\'s handled." You didn\'t say what "it" was. Neither did he.'); },
      text: `frank: I'm fine.

sam: Pop.

frank: I'm *fine*, kid. It's handled.

sam: What's handled?

There's a long pause. The engine idles. A horn somewhere on Oregon Avenue.

frank: Everything. Everything's handled. Eat something. It's hot. Drink water.

He hangs up. *It's handled.* You never said there was an *it*.`,
      next: '@hub'
    },
    a1_pop_miss: {
      enter: g => { g.flag('pop_call', 'shut'); g.bond('frank', { tension: 1 }); },
      text: `frank: Don't.

Just that. One word, flat, the way he says it to drunks who try to give him directions.

frank: You worry about school. I'll worry about me. That's the deal. That's always been the deal.

The line goes dead. You stare at the phone. Your father has never hung up on you in your life.`,
      next: '@hub'
    },
    a1_pop_good: {
      text: `You let it be. You let it just be your father, in his cab, telling you that the Eagles' secondary is "a crime scene." You tell him about Ciro and the frozen peas. He laughs so hard he starts coughing.

frank: Love you, kid.

He's never said it on the phone before. He says it fast, like he's ripping off a Band-Aid, and hangs up before you can answer.

You say it anyway, to the dead line.`,
      next: '@hub'
    },

    a1_nonna: {
      loc: 'MIFFLIN STREET · SOUTH PHILADELPHIA',
      clock: { time: '1:30 PM' },
      enter: g => { g.meet('nonna'); g.bond('nonna', { trust: 2, affection: 2 }); g.know('nonna_key', ['sam', 'nonna'], 'Nonna gave you an old iron key on a ribbon. "When it\'s time, I tell you what it opens."'); g.know('assunta', ['sam', 'nonna'], 'Nonna\'s mother, Assunta DiNardo, "moved" once, in 1918, during the Liberty Loan parade. She pulled a child out from under a trolley. Nonna says it runs in the women of the family. Until you.'); },
      text: g => `The Broad Street Line south is so hot the seats are sweating. You come up at Tasker-Morris into a South Philly that has given up: every stoop has a kiddie pool on it, every rowhouse door is open with a box fan in it, and every old lady on Mifflin Street is sitting in a lawn chair on the sidewalk under an umbrella, like a row of mushrooms.

Nonna is on her stoop. She's not under an umbrella. She's wearing a cardigan.

She watches you come down the block. She doesn't look surprised.

nonna: Eh. You don't wait for Sunday. Good. Sunday is too late. *Madonna mia*, look at you. Skin and bone.

She takes your face in both hands and turns it to the light, the way she checks a cantaloupe at the Italian Market. Her hands are cold. It's a hundred and two degrees.

nonna: Inside. Your mother is at Costco. We have one hour.

The kitchen. The radio on low, the gravy pot on even in this heat, because the gravy pot is always on. Nonna sits in her chair by the window and points at the other chair. You sit.

nonna: My mother's name was Assunta. Assunta DiNardo. In 1918, she was sixteen. There was a parade on Broad Street. For the war, for the bonds. Everybody went. And the flu was coming, and nobody knew yet how bad.

She looks out the window at the street.

nonna: In the middle of the parade, all the church bells in the city stopped. All at once. Not *finished*. Stopped. Like a hand on the rope. And my mother said it got cold, like January, and everything stopped, the people, the flags, a bird in the air, and she could *move*. And there was a little boy under a trolley on Broad. And she went and got him.

She looks at you.

nonna: She did it once. Never again. She told me when I was a girl, and I didn't believe her, and then I felt it. Not like her. I just feel it, when the clocks are going to go wrong. My mother felt it. Your mother feels it a little, she doesn't know what it is, she thinks she's psychic about phone calls.

Her voice drops.

nonna: It's in the women. Always the women. Never a boy. Never, in a hundred years.

Her cold hand on your wrist.

nonna: And then Saturday night, I'm sitting right here, and I feel the clocks go, and I feel somebody *move*. And it's you, Salvatò. It's you.

She reaches into the pocket of her cardigan and puts something in your hand: a small, cold, heavy old iron key on a faded ribbon.

nonna: Not yet. You keep it. When it's time, I tell you what it opens.

sam: When's it time?

nonna: When you need it. Not before. *Mangia.* Your mother's coming back.`,
      choices: [
        { text: '"Nonna. It\'s me. I can do it. Whatever she did. I can do it whenever I want."', tag: 'Tell Nonna',
          fx: g => { g.flag('nonna_told'); g.know('sam_slip', ['nonna']); g.bond('nonna', { trust: 3 }); }, go: 'a1_nonna_told' },
        { text: 'Say nothing. Hold her hand. She already knows.', tag: 'Silence',
          fx: g => { g.flag('nonna_silent'); g.bond('nonna', { affection: 2 }); g.know('sam_slip', ['nonna']); }, go: 'a1_nonna_silent' }
      ]
    },
    a1_nonna_told: {
      text: `sam: Nonna. It's me. I can do it. Whatever she did, I can do it whenever I want.

She closes her eyes. Her mouth moves: a prayer, or a curse, in an Italian so old you can't follow it.

nonna: *Whenever you want.*

sam: Yeah.

nonna: She did it *once*. One time, and she was sick for a month after, and she was never the same, and she would never, *never* talk about what she saw when she was in there.

She opens her eyes and grips your wrist so hard it hurts.

nonna: Salvatò. You listen to me. In there, in the cold, you don't stay long. And if you ever see somebody else moving in there, somebody who shouldn't be, you *come out*. You don't talk to them. You come out.

The front door opens. Ma's voice: *"Who's here? Is that Sammy?"*

Nonna lets go of your wrist and picks up her coffee as if nothing happened.`,
      next: '@hub'
    },
    a1_nonna_silent: {
      text: `You don't say anything. You just take her hand, cold and papery and stronger than it looks, and hold it, and look at her.

She looks back at you. She nods once, very slowly, like she's confirming a diagnosis she already knew.

nonna: *Bene.* Then you listen to one thing. In the cold, you don't stay long. And if you ever see somebody else moving in there, somebody who shouldn't be, you *come out*. You don't talk to them. You come out.

The front door opens. Ma's voice: *"Who's here? Is that Sammy?"*

Nonna lets go of your hand and picks up her coffee as if nothing happened.`,
      next: '@hub'
    },

    a1_nap: {
      loc: 'CHARLES LIBRARY · 4TH FLOOR',
      enter: g => g.nap(4),
      text: `The fourth floor is cold. Cold the way Saturday-night cold was, almost: the air conditioning on full blast for six people and a robot arm. You find a corner and a chair and you're gone before your head touches your backpack.

You dream about rain that doesn't fall. In the dream, somebody is standing in it with you, very far away, wearing your jacket.`,
      next: '@hub'
    },

    /* ---------- the order ---------- */
    a1_order: {
      loc: 'CARDONE HALL · ROOM 9-14',
      clock: { time: '5:10 PM' },
      text: g => `${g.f('did_sat_ciro') ? 'At the end of your shift, Ciro calls you over to the counter with a face like a storm cloud and slaps an order slip down in front of you.' : 'At five, Ciro texts you a photo of an order slip with no message, and then, a second later: **WHO ARE YOUR FRIENDS.**'}

The slip is in Ciro's handwriting. It's a phone order. Paid in advance, cash, dropped through the mail slot in an envelope while the store was closed this morning. Twenty dollars over.

> 1 LG PLAIN · 8:00 PM SAT · E. ALLEGHENY AVE (PORT RICHMOND) · FOR: "THE COLD ONE IN THE CIRO'S SHIRT" · NOTE: "only him. please."

${g.f('did_sat_ciro') ? 'ciro: The *cold one*. In *my shirt*. I don\'t want to know. I don\'t want to *know*, Salvatore. You go, you come back, I never saw this.' : 'TXT ciro: i dont want to know\nTXT ciro: you go you come back i never saw this'}

Port Richmond. E. Allegheny Ave. You've never been to Port Richmond in your life. But only one person has ever called you *the cold one*.

*Only him. Please.*

It's 5:10. The order's for 8:00. The temperature on your phone says 103.`,
      choices: [
        { text: 'Go. Take the pizza. Whatever this is, Teddy said please.', tag: 'Go',
          fx: g => { g.flag('teddy_meet', 'go'); }, go: 'a2_port_richmond' },
        { text: 'Don\'t go. He robbed an armored truck. You pulled the guard out of it yourself. You don\'t owe him a pizza.', tag: 'Don\'t go',
          fx: g => { g.flag('teddy_meet', 'no'); g.hidden('revenant_drift', -0.2); }, go: 'a2_no_go' }
      ]
    }
  },

  polls: [
    { q: 'Your uniform for nights out', opts: [
      { label: 'Black hoodie and Pop\'s Eagles cap', pct: 38, if: g => g.f('costume') === 'hoodie' },
      { label: 'Ciro\'s windbreaker, inside out', pct: 29, if: g => g.f('costume') === 'windbreaker' },
      { label: 'The night-delivery helmet', pct: 21, if: g => g.f('costume') === 'helmet' },
      { label: 'No costume', pct: 12, if: g => g.f('costume') === 'none' }
    ] },
    { q: 'The fire on 15th Street', opts: [
      { label: 'The family on the third floor', pct: 57, if: g => g.f('fire') === 'family' },
      { label: 'Heck', pct: 26, if: g => g.f('fire') === 'heck' },
      { label: 'The men with the van', pct: 17, if: g => g.f('fire') === 'van' }
    ] },
    { q: '4:12 a.m., the roof', opts: [
      { label: 'Leaned in', pct: 41, if: g => g.f('roof_end') === 'lean' },
      { label: 'Didn\'t', pct: 33, if: g => g.f('roof_end') === 'still' },
      { label: 'Told her something true instead', pct: 26, if: g => g.f('roof_end') === 'true' }
    ] }
  ],

  onEnd: g => {
    g.recap('The night the power went out on the ninth floor, you and Jules talked until the sun came up.');
    g.recap('Then Callum came with iced coffee.');
  }
});
