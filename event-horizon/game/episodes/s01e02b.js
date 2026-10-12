/* S1 · E2 · FRAME RATE, part 2 of 3: Act Two ("Two Kinds of Stopped"). */
EH.scenes('s01e02', {

  a2_hub: {
    card: { kind: 'act', label: 'Act Two', title: 'Visiting Hours' },
    loc: 'WEDNESDAY · AUGUST 26',
    clock: { day: 'Wed', date: 'Aug 26', time: '9:00 AM' },
    text: g => `Wednesday. Classes until noon, then nothing until tonight. The Hitch is already sliding off the front page of the Inquirer, pushed down by the Phillies and a city council fight about a parking garage. Halcyon has taken out a full-page ad: a sunrise over the Navy Yard and the words **WE'RE YOUR NEIGHBORS. WE'RE HERE TO HELP.**

${g.f('tue_night') === 'roof' ? 'You were on the roof until four. Your hands still haven\'t warmed up.' : 'You slept. Actually slept. It felt like being let out of prison.'}

You have the afternoon. You can't do everything.`,
    hub: {
      slots: 3, label: 'Wednesday, August 26',
      blurb: 'People are waiting on you. Some of them have been waiting since Saturday.',
      options: [
        { id: 'wed_carmen', text: 'Temple University Hospital. Sixth floor. Carmen Torres. You owe her this.', cost: 1, tag: 'Carmen', go: 'a2_carmen' },
        { id: 'wed_ma', text: 'Call Ma back. It\'s been three days. She\'s called eleven times.', cost: 1, tag: 'Family', go: 'a2_ma' },
        { id: 'wed_vinnie', text: 'Vinnie\'s been blowing up your phone since the Wawa video. FaceTime him.', cost: 1, tag: 'Vinnie', go: 'a2_vinnie' },
        { id: 'wed_weisz', text: 'Dr. Weisz\'s office. Gladfelter Hall. "Your edges are blurry." Ask him what that means.', cost: 1, tag: 'Answers', go: 'a2_weisz' },
        { id: 'wed_practice', text: 'The roof. Practice the Slip. Find out how long you can stay in.', cost: 1, tag: 'Power · +1 Drift', go: 'a2_practice' },
        { id: 'wed_ciro', text: 'Pick up an afternoon shift at Ciro\'s. Money is money.', cost: 1, tag: 'Money', go: 'a2_ciro' },
        { id: 'wed_nap', text: 'Charles Library, fourth floor. Find somewhere quiet. Sleep.', cost: 1, tag: 'Rest', go: 'a2_nap' }
      ],
      done: 'a2_thursday'
    }
  },

  /* ---------- Carmen ---------- */
  a2_carmen: {
    loc: 'TEMPLE UNIVERSITY HOSPITAL · 6TH FLOOR',
    enter: g => { g.bond('carmen', { trust: 1 }); },
    text: `The sixth floor smells like hand sanitizer and somebody's lunch. A nurse at the station points you down the hall without looking up: *"Torres? Six-twelve. She's popular today."*

She's popular because there's a man in a blazer coming out of her room as you go in. Clean shave, Halcyon lanyard, a leather folder under one arm. He holds the door for you with a smile like a dental ad.

Carmen Torres is sixty-seven and very small in the hospital bed, with her hair braided and a walker parked beside her like a guard dog. A long incision is taped up along her left hip under the gown. There's a gift basket on the windowsill the size of a laundry hamper: fruit, chocolate, a stuffed owl in a Temple shirt. There's a brand-new PlayStation box under it. On the tray table is another folder, left open to a page with a yellow **SIGN HERE** sticker.

Jayden is in the visitor's chair with his feet tucked under him and a Nintendo Switch. He looks up when you come in and doesn't seem surprised at all.

jayden: Abuela. It's the cold man.

Carmen turns her head. She studies your face slowly, like she's checking it against something she saw in the rain.

carmen: You.

sam: Hi, Mrs. Torres. I'm… I was there. Saturday. I'm the one who—

You don't know how to finish the sentence. *I'm the one who saved your grandson.* *I'm the one who wasn't fast enough to save you.* Both are true, and you can't say either one.

carmen: You came back for the boy.

She holds out her hand. You take it. It's warm and dry and stronger than it looks.

carmen: Siéntate. Sit.`,
    choices: [
      { text: '"I\'m sorry. I should\'ve been faster. I should have gotten you too."', tag: 'Say it',
        fx: g => { g.flag('carmen_sorry'); g.know('first_rewind', ['carmen']); g.bond('carmen', { affection: 2 }); g.hidden('revenant_drift', 0.3); }, go: 'a2_carmen_sorry' },
      { text: 'Look at the folder on the tray. "Did they ask you to sign that?"', tag: 'The papers',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 13, label: 'Read the fine print', on: { crit: 'a2_carmen_papers_good', success: 'a2_carmen_papers_good', fail: 'a2_carmen_papers_bad', fumble: 'a2_carmen_papers_bad' } } },
      { text: 'Don\'t make it about you. Ask Jayden what he\'s playing.', tag: 'Jayden',
        fx: g => { g.bond('jayden', { affection: 3, trust: 1 }); g.flag('carmen_jayden'); }, go: 'a2_carmen_jayden' }
    ]
  },
  a2_carmen_sorry: {
    text: `sam: I'm sorry. I should've been faster. I should have gotten you too. I was right there, and I—

She squeezes your hand so hard it hurts.

carmen: Escúchame. Listen to me.

Her eyes are fierce and wet.

carmen: In my whole life, nobody comes for me. My husband, no. My son-in-law, no. The city, no. Saturday, a bus comes, and a boy comes out of nowhere, out of the *cold*, and he takes my grandson out of the street. I see it. I see you go *back*. Two times. I see you go back.

You go very still. *I see you go back.*

carmen: You think I care about my hip? I have another one. I have a whole other hip.

Jayden snorts into his Switch.

carmen: You don't say sorry to me. I say *gracias, mijo*. And you say *de nada*.`,
    next: 'a2_carmen_end'
  },
  a2_carmen_papers_good: {
    enter: g => { g.flag('carmen_papers_read'); g.know('halcyon_release', ['sam', 'carmen'], 'Halcyon\'s "support agreement" for Carmen: $40,000, and a release of all claims, including any future conditions from "atmospheric ionization exposure," plus agreement to "periodic voluntary wellness assessments" for her and any minor in her care.'); g.bond('carmen', { trust: 2, respect: 2 }); },
    text: `sam: Did they ask you to sign that?

carmen: The man says it's for the hospital bill. He says Halcyon pays everything. He says, sign, and then nothing to worry.

You pick up the folder. It's eleven pages of eight-point type. You read it the way Ma reads a phone bill, slowly and suspiciously, with a finger under every line.

Page two: forty thousand dollars. Page four: *full and final release of all claims, known or unknown, including any future medical conditions arising from or related to atmospheric ionization exposure.*

Page nine, paragraph six:

*Participant further agrees, on behalf of Participant and any minor in Participant's care, to periodic voluntary wellness assessments conducted by Halcyon Dynamics or its designees, at locations and times of Halcyon's choosing.*

*Any minor in Participant's care.*

You look up at Jayden, cross-legged in the chair, tongue between his teeth, racing.

sam: Mrs. Torres. Don't sign this. Not yet. Not until somebody who isn't from Halcyon reads it. Page nine. They want to "assess" Jayden.

Carmen takes the folder out of your hands. She reads page nine with her lips moving. Then she closes the folder and puts it in the drawer of her bedside table, and shuts the drawer, and puts her hand flat on it.

carmen: My niece is a paralegal. In Kensington. She is very mean. I call her.`,
    next: 'a2_carmen_end'
  },
  a2_carmen_papers_bad: {
    enter: g => { g.flag('carmen_papers_skimmed'); },
    text: `You pick up the folder. It's eleven pages of eight-point type that reads like it was written by a vending machine. You get as far as *release of all claims* on page four before the words start sliding around, and your head is pounding, and your nose is doing the warm tickle again.

sam: I think… I think you should have somebody read this before you sign it. Somebody who's not from Halcyon.

carmen: The man says it's for the hospital.

sam: The man works for the people whose building did this.

She looks at the folder for a long time. She doesn't put it away.

carmen: I think about it.`,
    next: 'a2_carmen_end'
  },
  a2_carmen_jayden: {
    text: `sam: What're you playing?

jayden: Mario Kart. You any good?

sam: I'm from South Philly. We were born good.

He hands you the second Joy-Con without a word. You play Rainbow Road, and he destroys you, utterly, three races in a row. Carmen laughs from the bed every time you fall off the track.

On the fourth race, without looking up from the screen, Jayden says:

jayden: You were cold. When you picked me up. Your hands were like ice cream.

sam: Yeah?

jayden: And then the bus hit Abuela anyway.

He says it like it's a fact about the weather. He crosses the finish line in first.

jayden: The man from the battery company gave me a PlayStation. Abuela says it's a bribe. What's a bribe?

sam: It's when somebody gives you something nice so you'll forget something bad.

Jayden thinks about that.

jayden: I'm not gonna forget.`,
    next: 'a2_carmen_end'
  },
  a2_carmen_end: {
    enter: g => { g.know('carmen_medal', ['sam', 'carmen'], 'Carmen Torres gave you a San Judas Tadeo medal. Saint Jude, patron of lost causes.'); g.recap('You finally went to see Carmen Torres. She gave you a medal of Saint Jude, patron of lost causes.'); },
    text: `When you get up to leave, Carmen calls you back. She reaches up with both hands and works a thin gold chain over her head, a little oval medal swinging from it, and presses it into your palm.

carmen: San Judas Tadeo. For the lost causes.

sam: I can't take this.

carmen: Es para ti. You go where it's hopeless. I saw you. You *go*.

It's still warm from her skin. You put it on. You don't take it off.

On your way out, the man in the blazer is sitting in the waiting area by the elevators with his leather folder on his knee, not reading anything, not looking at his phone. He watches you all the way down the hall. He's still watching when the elevator doors close.`,
    next: '@hub'
  },

  /* ---------- Ma ---------- */
  a2_ma: {
    loc: 'PHONE · THE KEARNEY KITCHEN',
    enter: g => { g.meet('nonna'); g.meet('mikey'); g.bond('rosa', { tension: -1 }); },
    text: `She picks up before it rings.

rosa: I knew it'd be today. Three days.

sam: Ma—

rosa: Three days you don't call. Sunday you don't come. Eleven times I call. Eleven. Your sister made a chart.

In the background, very faintly: *"IT'S ON THE FRIDGE."*

rosa: You know what I'm doing instead? I'm watching the *news*, Salvatore, to see if my son is alive. A bus on Spring Garden. A woman with a broken hip. And now a boy at a Wawa on Broad, running like the devil, and everybody is laughing, and I'm in my kitchen not laughing.

She stops. You can hear the lid of the gravy pot ticking.

rosa: That boy in the video has your walk.

The line goes quiet. You can hear your own heartbeat against the phone.

sam: Ma. It's a nine-second blur.

rosa: I've been watching you walk for eighteen years. I know your walk from the back of the church.

She doesn't say anything else. She doesn't have to. She just breathes, and waits, the way she used to wait at the bottom of the stairs when you'd broken something.`,
    choices: [
      { text: '"Ma. It\'s not me. I\'m okay. I swear." Make it airtight.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['rosa'], label: 'Lie to Ma', on: { strong: 'a2_ma_lie', weak: 'a2_ma_lie', miss: 'a2_ma_lie_miss' } },
        fx: g => g.flag('ma2', 'lied') },
      { text: '"I\'m okay, Ma. I can\'t talk about the video. But I\'m okay. I\'m sorry I didn\'t come Sunday."', tag: 'Don\'t lie. Don\'t tell.',
        fx: g => { g.flag('ma2', 'deflect'); g.heat('rosa', 1); g.bond('rosa', { trust: 1, affection: 1 }); }, go: 'a2_ma_nonna' },
      { text: '"Ma, everybody in Philly has my walk. It\'s a Philly walk." Make her laugh.',
        check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Disarm Ma', on: { strong: 'a2_ma_laugh', weak: 'a2_ma_laugh', miss: 'a2_ma_lie_miss' } },
        fx: (g, t) => { g.flag('ma2', 'joke'); g.heat('rosa', t === 'miss' ? 2 : 1); } }
    ]
  },
  a2_ma_lie: {
    text: `sam: Ma. It's not me. I'm okay. I swear on Nonna.

There's a long pause.

rosa: Okay.

She doesn't believe you. You can hear her not believing you, the way you can hear the ocean in a shell. But she lets it go. That's almost worse.

rosa: You eat?

sam: I eat.

rosa: What?

sam: Food.

rosa: *Salvatore.*`,
    next: 'a2_ma_nonna'
  },
  a2_ma_lie_miss: {
    enter: g => { g.bond('rosa', { trust: -1 }); },
    text: `You talk. You talk too much, too fast. Somewhere in the middle of it you hear yourself say *"and anyway I'm not even that fast,"* which is the stupidest sentence anyone has ever said to Rosa Kearney.

She doesn't say anything for a long time.

rosa: Okay.

It's the *okay* she used when Mikey said he'd only be gone six months.`,
    next: 'a2_ma_nonna'
  },
  a2_ma_laugh: {
    text: `sam: Ma, everybody in Philly has my walk. It's a Philly walk. It's the walk of a man who's been let down by the Iggles. Half the city walks like that. Pop walks like that.

There's a pause. Then, against her will, a laugh: one short, wet, furious laugh.

rosa: Your father walks like he has a cabinet on his back.

sam: That's the Iggles, Ma.

rosa: Don't make me laugh. I'm mad at you.

But she isn't, not anymore. Or she is, and she's also something else, the way she always is.`,
    next: 'a2_ma_nonna'
  },
  a2_ma_nonna: {
    enter: g => { g.know('nonna_felt', ['sam', 'nonna'], 'Nonna says she felt you "move" on Saturday night.'); },
    text: g => `There's a rustling. The phone changes hands. You hear breathing, slow and old, and the creak of the kitchen chair by the window that only one person ever sits in.

nonna: Salvatò.

sam: Hi, Nonna.

nonna: You wore the jacket.

It's not a question. You never told anyone you wore it.

sam: …Yeah. I wore it.

nonna: Good. Madonna mia. Saturday, you moved. I feel it. Here.

You can picture her tapping her chest, twice, over her heart.

sam: Nonna, what does that—

nonna: Not on the phone. Not with your mother listening. You come Sunday. We talk. *Mangia.*

And she hands the phone back like she's told you to floss.

${g.f('ma2') === 'lied' ? 'Ma doesn\'t say anything about what Nonna said. That\'s how you know she heard all of it.' : 'Ma comes back on. Her voice is careful.'}

rosa: Your brother wants you.

mikey: *Sammy.* There he is. Shut up a sec. I'm coming up Thursday night. I'm taking you to dinner. Don't argue. I got news, and I'm not saying it on a phone Ma's holding.

sam: What news?

mikey: Thursday. Eight o'clock. Wear a shirt with a collar. Not the pizza one.

He hangs up. In the background, Gigi is yelling something that sounds like *"TELL HIM ABOUT THE CHART."*`,
    next: '@hub'
  },

  /* ---------- Vinnie ---------- */
  a2_vinnie: {
    loc: 'FACETIME · THE NAVY YARD',
    enter: g => { g.meet('vinnie'); g.bond('vinnie', { affection: 1 }); },
    text: `Vinnie picks up on the first ring with his whole face in the camera, and he's already laughing.

vinnie: SALLY. *SALLY*. Is that your Ciro's shirt? In the Wawa video? Is that you? Yo. *Yo.* Everybody at the site's been sending me this jawn. My foreman sent it to me. My *mom* sent it to me. "Isn't this your friend's pizza place?"

He's on his lunch break, sitting on an overturned bucket in a hard hat and a reflective vest, behind him a half-finished building with the silver circle-bird logo on a banner: **HALCYON · NAVY YARD CAMPUS · PHASE II**.

sam: It's not me, Vin.

vinnie: I know it's not you, you're slow as hell, you were the last guy picked at St. Monica's every year until eighth grade. I'm just saying. It's *funny*. Wawa Guy. Ha.

He takes a bite of a hoagie the size of his forearm.

vinnie: Anyway, you never call, so I gotta call you. How's college? You get your little lanyard?

It's good to see him. It's so good to see him that it hurts a little, somewhere under your ribs, next to the bruise.

He talks about the job: the overtime, the security guys in polo shirts who won't let anybody in the basement. Then he lowers his voice, glances over his shoulder.

vinnie: Weird thing. Monday, a truck comes in. Medical supply. They unload beds. Like, *hospital* beds, with the rails. I counted. Forty-one. Forty-one hospital beds into a battery company basement. Then they made us sign another NDA.

He shrugs. He doesn't look like a guy who thinks it's funny.

vinnie: Oh, and yo. Unrelated. I saw your pop last week. Melrose Diner. Back booth, with some young guy in a real nice jacket. Not a cab guy.`,
    choices: [
      { text: '"Back up. Forty-one hospital beds? In the *basement*?"', tag: 'Halcyon',
        fx: g => { g.flag('vinnie2', 'beds'); g.know('halcyon_beds', ['sam', 'vinnie'], 'Vinnie counted 41 hospital beds delivered to the basement of Halcyon\'s Navy Yard campus on Monday.'); g.bond('vinnie', { trust: 1 }); }, go: 'a2_vinnie_beds' },
      { text: '"What young guy? Vin. Who was Pop with?"',
        check: { kind: 'move', move: 'Read the Street', attr: 'wits', skill: 'streetwise', label: 'Get it out of Vinnie', on: { strong: 'a2_vinnie_pop_strong', weak: 'a2_vinnie_pop_weak', miss: 'a2_vinnie_pop_weak' } },
        fx: g => { g.flag('vinnie2', 'pop'); g.know('halcyon_beds', ['sam', 'vinnie'], 'Vinnie counted 41 hospital beds delivered to the basement of Halcyon\'s Navy Yard campus on Monday.'); } }
    ]
  },
  a2_vinnie_beds: {
    text: `vinnie: Forty-one. I counted 'em twice. My uncle Sal, rest in peace, he died in one of those beds at Methodist. I know what they look like. Rails, the little remote, the whole thing.

He wipes his mouth.

He looks at you through the phone.

vinnie: What do you think a battery company needs forty-one beds for, college?

You don't have an answer. Neither does he.

vinnie: Prob'ly nothing. Probably a "wellness center" or whatever. Don't tell nobody I said. I need this job. My mom needs this job.

Somebody yells his name from the building. He stands up.

vinnie: Oh, and the thing with your pop. Melrose. Back booth, nice jacket. Probably nothing either. Love you. Don't get a lanyard.`,
    enter: g => g.know('pop_jacket', ['sam', 'vinnie'], 'Vinnie saw Pop in a back booth at the Melrose Diner with a young guy in an expensive jacket.'),
    next: '@hub'
  },
  a2_vinnie_pop_strong: {
    enter: g => { g.bond('vinnie', { trust: 1, respect: 1 }); g.know('pop_jacket', ['sam', 'vinnie'], 'Vinnie saw Pop in a back booth at the Melrose Diner with a young guy in an expensive jacket. The jacket did the talking and paid. Pop didn\'t eat.'); },
    text: `Vinnie looks off camera for a second.

vinnie: Back booth. The jacket did all the talking. Your pop didn't eat. Had eggs in front of him and didn't touch 'em. Then the jacket paid. For both.

He takes a long breath.

vinnie: Your pop don't let *nobody* pay for him, Sally. You know that.

sam: Yeah.

vinnie: I'm just telling you what I saw. You want me to ask around?

The way he says it, you think he already has, and doesn't want to tell you what he heard.`,
    next: '@hub'
  },
  a2_vinnie_pop_weak: {
    enter: g => { g.bond('vinnie', { tension: 1 }); g.know('pop_jacket', ['sam', 'vinnie'], 'Vinnie saw Pop in a back booth at the Melrose Diner with a young guy in an expensive jacket.'); },
    text: `vinnie: Relax. It's a diner. Everybody eats at the diner.

sam: Vin.

vinnie: I said relax, *college*. You go up Broad Street for a week and now you gotta interrogate me? I got a mother for that.

He laughs it off. Then somebody yells his name, and he's gone, and you're left holding a phone with your own face reflected in it.`,
    next: '@hub'
  },

  /* ---------- Weisz ---------- */
  a2_weisz: {
    loc: 'GLADFELTER HALL · 9TH FLOOR · OFFICE 917',
    enter: g => { g.bond('weisz', { trust: 1 }); },
    text: g => `Dr. Weisz's office hours are Tuesdays and Thursdays. His door is open on a Wednesday anyway, and he's inside, sitting on the floor, surrounded by maps.

There are maps everywhere: on the walls, on the desk, taped over the window. Old ones, new ones. A 1683 Thomas Holme plan of the city, Penn's perfect little grid. A 1918 transit map. A Google Maps printout of North Broad with dozens of tiny pencil dots on it, clustered around Spring Garden like iron filings around a magnet.

${g.f('weisz_name') ? 'DR. WEISZ: Mr. Kearney. You\'re early. By a day.' : 'DR. WEISZ: Fourth row. Kearney, the roster says. You\'re early. By a day.'}

He doesn't get up.

DR. WEISZ: Sit, if you can find somewhere. Not the 1876 pile.

You sit on the 1918 pile. He doesn't seem to mind.

DR. WEISZ: I'll tell you what I see, and then you'll decide whether to tell me what you see. Fair?

He tilts his head one way, then the other.

DR. WEISZ: Since Saturday night, some people have edges that don't sit right. As if they've been traced slightly out of register. A misprint. Most people in the blackout zone are a little blurry, the way you're a little blurry after a long flight. A few are *very* blurry. You're the blurriest I've seen. The second blurriest is a learning assistant in the math department whom nobody else seems able to notice.

${g.knows('femi_changed') ? 'Femi. He means Femi.' : 'You think of the TA in recitation, the one nobody could hear.'}

DR. WEISZ: I have been counting. I'm at thirty-eight on this campus. I'm not sleeping much.

He pulls a photograph off the top of a stack and hands it to you. It's old, black and white, crisp: Broad Street, a parade, flags, a crowd in straw hats and long skirts. A handwritten caption on the back reads *Liberty Loan Parade, Sept. 28, 1918.*

At the edge of the crowd, near the curb, there's a blur: a figure caught mid-motion, too fast for the shutter, a smear in a long dark skirt, reaching for something in the street. A small child, maybe. Everyone else in the photograph is perfectly still.

DR. WEISZ: I have nine photographs like that one from 1918. I have three from 1876. I have none from any other year. Not one.

He takes the photo back, gently.

DR. WEISZ: Now. What color was the light, Mr. Kearney?`,
    choices: [
      { text: 'Tell him. "Every color. Like the inside of your eyelids. And then it was cold."', tag: 'Tell',
        fx: g => { g.flag('weisz2', 'told'); g.bond('weisz', { trust: 2, respect: 1 }); g.know('sam_in_zone', ['sam', 'weisz'], 'Who knows you were in the blackout zone at 11:51 Saturday, felt the cold, and have bled since', { track: true }); g.know('weisz_photos', ['sam', 'weisz'], 'Dr. Weisz has photographs from 1876 and 1918 with blurred figures in them, people moving too fast for the shutter. None from any other year.'); }, go: 'a2_weisz_told' },
      { text: '"What light?" Give him nothing. He\'s a stranger with a wall of maps.', tag: 'Nothing',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['weisz'], label: 'Lie to Weisz', on: { strong: 'a2_weisz_lie', weak: 'a2_weisz_lie', miss: 'a2_weisz_lie' } },
        fx: g => { g.flag('weisz2', 'lied'); g.know('weisz_photos', ['sam', 'weisz'], 'Dr. Weisz has photographs from 1876 and 1918 with blurred figures in them, people moving too fast for the shutter. None from any other year.'); } }
    ]
  },
  a2_weisz_told: {
    text: `sam: Every color. Like the inside of your eyelids when you rub them. And then it was cold. Like January. My breath was white.

Dr. Weisz closes his eyes.

DR. WEISZ: Yes. That's what the telegraph clerk wrote, in 1876. *"A light like a bruise of every color, and then the cold of the grave."* He was very dramatic. He was also right.

He opens his eyes.

DR. WEISZ: Mr. Kearney. I'm a geographer. I study where things happen and why they happen there. Philadelphia is a place where *this* happens. Three times now. I don't know why. I would very much like to know why before it happens a fourth time.

He picks up a business card from the floor and writes something on the back.

DR. WEISZ: If the people from the battery company ask you questions, you didn't come here. And if you ever see the light again, or anything like it, you call me. Any hour.

The number on the back of the card has a 215 area code. Under it he's written, in tiny careful letters: *Be careful who you save. Saving people is how they find you.*`,
    enter: g => g.know('weisz_card', ['sam', 'weisz'], 'Dr. Weisz gave you his number. On the back: "Be careful who you save. Saving people is how they find you."'),
    next: '@hub'
  },
  a2_weisz_lie: {
    text: `sam: What light? I was on a delivery. The power went out.

Dr. Weisz looks at you with no expression at all, the way he probably looks at a map someone has drawn wrong.

DR. WEISZ: Of course.

He goes back to his maps.

DR. WEISZ: Office hours are Tuesdays and Thursdays. Bring a question about the reading. Or about anything at all. The door is generally open.

On your way out, you glance at the Google Maps printout taped by the door, the one with the pencil dots. There's a new dot on it, very small, freshly drawn, at the corner of Broad and Cecil B. Moore. Next to it, in tiny letters: *Wawa.*`,
    next: '@hub'
  },

  /* ---------- Practice ---------- */
  a2_practice: {
    loc: 'CARDONE HALL · ROOF',
    enter: g => { g.mastery(8); g.drift(1); g.pool('focus', -2); g.know('slip_duration', ['sam'], 'A Slip lasts about four seconds of real time. Inside, it feels like a minute. Then something pulls you out.'); },
    text: g => `${g.knows('sam_slip', 'nik') ? 'Nik sets up on an HVAC unit with a stopwatch app, a laptop, and a borrowed thermometer from the chem lab, like a man about to launch a rocket.\n\nnik: Okay, bro. You Slip, you count in your head. I count out here. Then we compare. Science. Patch notes.' : 'You go alone. You set your phone against the HVAC unit, recording, with a stopwatch app running in the corner of the screen.'}

You step through.

The city stops. A pigeon on the parapet hangs in the middle of a scratch. A plane over the Delaware is a little silver pin stuck in the sky. The cold comes in like opening a freezer door.

You count. *One Mississippi. Two Mississippi.* At about sixty, something starts to pull. It's not a sound. It's like the feeling in your ears on a plane, if the plane were your whole body. At seventy, it's pulling hard. You let go.

!! ~WHUMP

${g.knows('sam_slip', 'nik') ? 'nik: Four point one seconds.\n\nsam: I counted to seventy.\n\nnik: Four. Point. One. Seconds.\n\nHe holds up the thermometer. The little red line has dropped eleven degrees in four seconds. On a roof. In August.\n\nnik: So in there, you get about a minute. Out here, it\'s four seconds. And then something pulls you back.\n\nHe types it into the Doc. Then he stops typing and looks at you.\n\nnik: What happens if you don\'t let it?' : 'The stopwatch on your phone says four seconds. You counted to seventy.\n\nYour nose is bleeding. You sit on the gravel and press Jules\'s handkerchief to it, and wonder what happens if you don\'t let it pull you back.'}`,
    next: '@hub'
  },

  /* ---------- Ciro ---------- */
  a2_ciro: {
    loc: 'CIRO\'S PIZZA · CECIL B. MOORE AVE',
    enter: g => { g.money(14 * 4); },
    text: g => `Ciro is behind the counter in a mood like a thunderstorm.

ciro: Some guy calls me from the "Health Department." Asking how many boys I got, how many shirts. Eleven, I tell him. Then I hang up on him. Twice. Then a *woman* comes in, yesterday, from the Inquirer. Very nice shoes. Asks which of my boys delivers on Broad Street. I tell her, all my boys deliver on Broad Street, Broad Street is the whole city. She buys a slice. She tips a dollar.

He slams a pie into the oven.

ciro: A dollar. On a slice. That's a *journalist*. And now, the internet, everybody wants a "Wawa Guy special." What is that? A hoagie? I'm a *pizza* place.

He points the peel at you.

ciro: If it's you, you don't tell me. I don't want to know. I got a business. Also, it's not you. You deliver like a funeral.

The afternoon run is fast and hot. Somebody on 16th Street asks if you're Wawa Guy, and you laugh, and they tip you five bucks for laughing.`,
    choices: [
      { text: 'Work the doors. Be charming. Lean into the Wawa Guy jokes.',
        check: { kind: 'move', move: 'Work the Door', attr: 'charm', skill: 'hustle', label: 'Tips', on: { strong: 'a2_ciro_good', weak: 'a2_ciro_ok', miss: 'a2_ciro_bad' } } },
      { text: 'Head down. Fast deliveries. Don\'t talk to anyone about anything.',
        check: { kind: 'pool', attr: 'reflex', skill: 'ride', diff: 2, label: 'Afternoon run', on: { crit: 'a2_ciro_good', success: 'a2_ciro_ok', partial: 'a2_ciro_ok', fail: 'a2_ciro_bad' } } }
    ]
  },
  a2_ciro_good: { enter: g => { g.money(48); g.bond('ciro', { respect: 1 }); g.heat('press', 1); }, text: `Forty-eight dollars in tips. Three people ask if you're Wawa Guy. Every time you say *"I wish,"* and every time they tip more. Ciro counts the drawer and grunts, and gives you a meatball for the road, which from Ciro is roughly a knighthood.`, next: '@hub' },
  a2_ciro_ok: { enter: g => g.money(22), text: `Twenty-two dollars in tips, a lukewarm Gatorade, and a near-miss with a SEPTA bus on Erie Avenue that you refuse to think about.`, next: '@hub' },
  a2_ciro_bad: { enter: g => g.money(6), text: `Six dollars in tips and a lecture from Ciro about the difference between "fast" and "on fire," which you were very briefly, a little bit, on Diamond Street, from a pie bag that touched a bus's tailpipe at a red light.`, next: '@hub' },

  /* ---------- Nap ---------- */
  a2_nap: {
    loc: 'CHARLES LIBRARY · 4TH FLOOR',
    enter: g => g.nap(4),
    text: g => `${g.f('did_library') ? 'You find the quiet room on the fourth floor, east corner.' : 'You wander the fourth floor until you find a quiet room in the east corner that nobody seems to know about.'} Somebody's left a beanbag there like a gift. You sleep four hours without dreaming.

When you wake up, there's a sticky note on your knee in small, neat handwriting: *You snore. —F.*

${g.knows('femi_changed') ? 'You never saw him come in.' : 'You don\'t know who F is. You never saw anyone come in.'}`,
    next: '@hub'
  },

  /* ================= THURSDAY: THE JOB ================= */
  a2_thursday: {
    card: { kind: 'act', label: 'Act Three', title: 'Two Kinds of Stopped' },
    loc: 'N. BROAD ST · NORTHBOUND',
    clock: { day: 'Thu', date: 'Aug 27', time: '2:09 PM' },
    enter: g => { g.sleep(7); g.money(20); if (!g.f('did_wed_ma')) g.meet('mikey'); },
    text: g => `${g.f('did_wed_ma') ? '' : 'Wednesday night, a text from a number you have saved as **MIKEY (DO NOT ANSWER WHEN AT A PARTY)**:\n\nTXT mikey: thursday 8pm. dinner. wear a collar. not the pizza shirt. got news\n\n'}Thursday afternoon. Lunch delivery to the Divine Lorraine, two large pies for a fourth-floor apartment with a ping-pong table and no furniture. You're heading back up Broad toward Girard, coasting, a twenty in your pocket, when the world does something wrong.

It isn't the light. It's a sound, or the lack of one: a deep metallic *THOOM*, like a truck hitting a wall, except there's no wall.

At the intersection of Broad and Girard, a Keystone Armored truck (big, square, blue and white, the kind with a gun port) has stopped halfway through a left turn onto Girard. It's not stopped like a truck that braked. It's stopped like a truck that *ran into the side of the air*. Its front end is crumpled around nothing. Its nose sits at a forty-degree angle across both lanes, rear wheels still smoking on the asphalt.

The 15 trolley, coming east on Girard, couldn't stop in time. It's buckled into the truck's flank. The truck hasn't moved an inch. The trolley's windshield is starred white. Passengers are screaming.

And there are three people in Gritty masks.

The orange fur. The googly eyes. Three Grittys in black hoodies, moving fast and calm, like they've done this before.

The smallest Gritty, a woman you think, stands on the corner with her phone held up to her mouth like a walkie-talkie. Out of it comes a perfect, crackling, *official* voice: *"Keystone four-one-seven, dispatch, confirm rear door release, priority one, code nine."* It's a guard's voice. It's too perfect.

The biggest Gritty is at the back doors, and his hands are *glowing*, a dull orange like stove coils, and the paint on the doors under his palms is bubbling and peeling, and he's tearing the steel open like it's a bag of chips.

The third Gritty is just standing at the front bumper, very still, with one bare hand pressed flat against the truck's grille. He's not doing anything. He's just *touching* it. And as long as he touches it, a fifteen-ton armored truck is as immovable as a building.

In the cab, a guard has gone through the windshield to the waist. He's hanging there, folded over the dash, not moving. There's blood on the glass.

Somebody on the corner is already filming.

You're thirty feet away. You feel the cold come up into your chest like a question.`,
    choices: [
      { text: 'Slip.', slip: true, fx: g => { g.flag('heist', 'slip'); g.mastery(4); }, go: 'a2_heist_slip' },
      { text: 'Go in at human speed. Fast human, Burst human. Get to the big one before he gets the money.',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, power: true, label: 'Cross Broad & Girard', on: { crit: 'a2_heist_burst', success: 'a2_heist_burst', partial: 'a2_heist_burst', fail: 'a2_heist_burst_late', botch: 'a2_heist_burst_late' } },
        fx: g => g.flag('heist', 'burst') },
      { text: 'The guard. Forget the money. The guard is bleeding through a windshield.', tag: 'The guard',
        fx: g => { g.flag('heist', 'guard'); g.hidden('revenant_drift', -0.5); }, go: 'a2_heist_guard' },
      { text: 'Stay back. Call 911. Film the masks, the plates, everything. Be a witness, not a hero.', tag: 'Stay out',
        fx: g => { g.flag('heist', 'stayed'); g.hidden('revenant_drift', -0.8); }, go: 'a2_heist_stay' }
    ]
  },

  a2_heist_slip: {
    enter: g => g.know('stasis', ['sam'], 'The touching Gritty can stop things. A stopped thing isn\'t cold or warm. It isn\'t in time at all, even in the Slip. You couldn\'t move it.'),
    text: `You step through.

The intersection freezes. Smoke hangs in a gray column over the rear tires. The trolley passengers are caught mid-scream, mouths open, hands up. A paper coffee cup is suspended in midair over the tracks, frozen at the top of its arc, its coffee spilling out in a brown sculpture.

You walk across Broad Street in the cold.

You reach the truck first, because it's the thing in the way. You put your hand on its side, and you stop.

It's *different*. Everything else in the Slip is cold, cold the way the world gets when you step outside of it. The truck isn't cold. It isn't warm. It isn't anything. Touching it is like touching a photograph of a truck. Like it's been cut out of the world with scissors and pasted back in.

You push. You put your whole body into it, your shoulder, your legs, everything Mikey taught you in the basement.

It doesn't just not move. It doesn't *notice*.

*Two kinds of stopped*, you think. Yours is a held breath. His is a photograph.

You look at the Gritty with his hand on the grille. Frozen like everybody else. Mask, hoodie, a pair of beat-up Timberlands. His bare hand on the steel has a Band-Aid across the knuckles.

The pull's already starting. You can feel it in your ears. Maybe forty seconds left in here. You can do one thing.`,
    choices: [
      { text: 'The guard. Pull him out of the windshield and lay him on the sidewalk.', tag: 'Guard',
        fx: g => { g.flag('slip_did', 'guard'); g.flag('guard_saved'); g.hidden('revenant_drift', -0.3); }, go: 'a2_slip_out' },
      { text: 'The money. Take the bags out of the big one\'s hands and drop them in the trolley.', tag: 'Money',
        fx: g => { g.flag('slip_did', 'money'); g.flag('bags_recovered'); }, go: 'a2_slip_out' },
      { text: 'The mask. Pull it off the one touching the truck. See his face.', tag: 'Mask',
        fx: g => { g.flag('slip_did', 'mask'); g.know('teddy_face', ['sam'], 'You saw the face of the one who stops things: about twenty, pale, tired eyes, a chipped front tooth, a Band-Aid on his knuckles.'); }, go: 'a2_slip_out' }
    ]
  },
  a2_slip_out: {
    text: g => `${{
      guard: 'The guard is heavy and limp, and there\'s glass in his scalp. You get him out of the windshield one inch at a time, like pulling a cork, and lay him on the sidewalk on his side. You\'ve seen Ma do this. His name tag says **L. MEDINA**. He\'s breathing.',
      money: 'The big Gritty\'s hands are glowing even frozen, and when you reach for the canvas bags he\'s holding, the heat comes off him like an open oven. You get two of them and drag them to the trolley and shove them through the broken door. It\'s heavier than you thought money would be.',
      mask: 'You reach up and peel the Gritty mask off his face. Underneath he\'s maybe twenty, pale, freckled, with tired eyes, a chipped front tooth, and stubble he hasn\'t bothered with. He doesn\'t look like a criminal. He looks like a guy who works the overnight at a Wawa.'
    }[g.f('slip_did')]}

The pull takes you.

!! ~WHUMP

The world comes back all at once, and the first thing that happens is the man at the front of the truck turns his head and looks *directly at you*. ${g.f('slip_did') === 'mask' ? 'His mask is gone. He touches his bare face with his free hand, astonished.' : ''}

Nobody else saw you move. He did. Or he felt it.

teddy[TOUCHING GRITTY]: …You're one of the cold ones.

He doesn't take his hand off the truck.

teddy[TOUCHING GRITTY]: Listen. Whatever you're doing, don't. We're almost done.`,
    next: 'a2_teddy'
  },
  a2_heist_burst: {
    text: `You go. You don't step all the way through, just to the edge, the thinning, and Broad Street goes soft and slow around you. You cross two lanes of traffic between the bumpers of stopped cars.

The big Gritty at the back of the truck sees you coming, and turns, and his glowing hands come up.

And the one at the front bumper turns his head and looks at you, and you see his eyes through the googly eyes of the mask, narrowing.

teddy[TOUCHING GRITTY]: …You're one of the cold ones.

He doesn't take his hand off the truck.

teddy[TOUCHING GRITTY]: Listen. Don't.`,
    next: 'a2_teddy'
  },
  a2_heist_burst_late: {
    enter: g => g.flag('burst_late'),
    text: `You go, and the world doesn't thin. It just stays the world, heavy and hot and ordinary. You run across Broad like a normal kid, dodging a cab and a guy on a scooter, and by the time you reach the truck, the big Gritty already has two canvas bags over his shoulder.

The one at the front bumper sees you coming. His head turns.

teddy[TOUCHING GRITTY]: Huh. You're the Wawa guy.

He sounds almost disappointed.

teddy[TOUCHING GRITTY]: Listen. Don't.`,
    next: 'a2_teddy'
  },

  /* ---------- the fight ---------- */
  a2_teddy: {
    text: g => `The big one at the back drops a bag and turns all the way around. Up close he's *huge*, six-four, and the heat coming off his hands makes the air shimmer like a road in July. His hoodie is smoking at the cuffs.

heck[BIG GRITTY]: Teddy. ¿Qué hacemos con el nene?

teddy[TOUCHING GRITTY]: Don't say my *name*, Heck.

heck[BIG GRITTY]: Don't say *mine*, then.

The small one on the corner laughs, a short, real laugh, and lowers the phone from her mouth.

bree[SMALL GRITTY]: Forty seconds, boys. Then the real cops.

*Teddy.* So that's his name. He keeps his hand on the truck and looks at you.

teddy: Listen to me. Nobody's getting hurt who isn't already hurt. It's insured. It's all insured. Go home.

${g.f('guard_saved') ? 'Behind him, on the sidewalk, the guard you pulled out is starting to move.' : 'Behind him, the guard is still folded over the dashboard, not moving.'}`,
    choices: [
      { text: 'Go for Teddy. He can\'t fight and hold the truck. Put him on the ground.',
        check: { kind: 'pool', attr: 'nerve', skill: 'brawl', diff: 3, power: true, label: 'Take Teddy down', fx: { partial: g => g.injure({ id: 'stasis_arm', name: 'Stasis-numb arm', pen: 1, heal: 1, affects: ['body', 'reflex'] }) }, on: { crit: 'a2_fight_tackle', success: 'a2_fight_tackle', partial: 'a2_fight_tackle', fail: 'a2_fight_touch', botch: 'a2_fight_touch' } },
        fx: g => g.flag('fight', 'teddy') },
      { text: 'Go for the money. Rip a bag off the big one before he can close his hands.', if: g => !g.f('bags_recovered'),
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, power: true, label: 'Snatch a bag', on: { crit: 'a2_fight_money', success: 'a2_fight_money', partial: 'a2_fight_money_burn', fail: 'a2_fight_burn', botch: 'a2_fight_burn' } },
        fx: g => g.flag('fight', 'money') },
      { text: '"There\'s a man dying in that windshield. Let me get him out, and you walk."', if: g => !g.f('guard_saved'),
        check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', label: 'Make a deal', on: { strong: 'a2_fight_deal', weak: 'a2_fight_deal', miss: 'a2_fight_touch' } },
        fx: g => g.flag('fight', 'talk') },
      { text: '"You already got what you came for. I just want to know why." Keep him talking.', if: g => g.f('guard_saved'),
        check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'empathy', label: 'Read Teddy', on: { strong: 'a2_fight_why', weak: 'a2_fight_why', miss: 'a2_fight_touch' } },
        fx: g => g.flag('fight', 'why') }
    ]
  },
  a2_fight_tackle: {
    enter: g => { g.flag('fight_result', 'tackle'); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); g.know('teddy_face', ['sam'], 'You saw the face of the one who stops things: about twenty, pale, tired eyes, a chipped front tooth, a Band-Aid on his knuckles.'); },
    text: `You hit him low, the way Mikey taught you, shoulder to hip. His hand comes off the truck as you take him down.

Behind you, fifteen tons of armored car *remembers it's moving*. It lurches forward a foot with a scream of metal, and the trolley groans against it, and every person on that corner flinches at once.

You're on top of Teddy on the asphalt. His mask is half off, and he's young, pale, and freckled, with a chipped front tooth. He doesn't punch you. He doesn't fight at all. He just reaches past you and lays his palm flat on the street next to your sneaker.

Your foot stops.

Not your leg. Not you. Just your *sneaker*, a beat-up white Air Force 1, as stuck to Broad Street as if it had been poured in concrete. You yank, and nothing happens. You yank harder, and your foot comes out of the shoe, and you go sprawling backward in one sock onto hot asphalt.

Teddy gets up. He dusts off his hoodie. He pulls his mask back down.

teddy: Ninety seconds. Then it lets go. Sorry about your shoe.

He sounds genuinely sorry.

The small one on the corner holds up her phone and presses play, and your own voice comes out of it, perfect, crackling: *"Somebody has to."* You don't remember saying it. You must have. She grins behind the mask.

bree[SMALL GRITTY]: Got you, Wawa.

And they're gone: across Girard and down the stairs into the subway, three orange Grittys disappearing into the Broad Street Line like it's a magic trick. Your sneaker sits alone in the middle of Broad Street, perfectly upright, for exactly ninety seconds. Then it falls over.`,
    next: 'a2_after_heist'
  },
  a2_fight_touch: {
    enter: g => { g.flag('fight_result', 'touched'); g.injure({ id: 'stasis_arm', name: 'Stasis-numb arm', pen: 1, heal: 1, affects: ['body', 'reflex'] }); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); g.know('stasis_touch', ['sam'], 'Teddy touched your arm and it stopped. Not paralyzed: stopped in time. For a minute and a half you couldn\'t feel it, move it, or even make it bleed.'); },
    text: `You go for him, and he's faster than he looks, or calmer, which in a fight is the same thing. He takes his hand off the truck and, almost gently, lays two fingers on your right forearm.

Your arm stops.

It isn't asleep. It isn't numb. It's *stopped*. Your arm is there, hanging in the air at the angle it was when he touched it, and it isn't yours anymore. It's not cold, it's not warm, it doesn't hurt. It just isn't in the same *now* as the rest of you. Your shoulder is pulling at it like a dog on a leash tied to a parking meter.

It's the worst thing you've ever felt. It's not pain. It's the feeling of a part of you being somewhere else.

teddy: Ninety seconds. Then it comes back. Don't fight it, you'll pull your shoulder out.

Behind you, fifteen tons of armored car lurches forward a foot with a scream of steel, because he let go of it to touch you. Every person on the corner flinches.

Heck shoulders the bags. The small one presses play on her phone, and your own voice comes out of it, crackling, perfect: *"Somebody has to."* You don't remember saying it. You must have.

bree[SMALL GRITTY]: Got you, Wawa.

And they're gone: across Girard and down into the Broad Street Line, three orange Grittys vanishing into the subway like a magic trick.

You stand on the corner with your arm stuck in the air like you're hailing a cab, for ninety seconds that are the longest of your life. Then it comes back all at once, pins and needles like a thousand bees, and you sit down hard on the curb and shake.`,
    next: 'a2_after_heist'
  },
  a2_fight_money: {
    enter: g => { g.flag('fight_result', 'money'); g.flag('bags_recovered'); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); },
    text: `You go low and fast. The big one swings a glowing hand at your head, and you're not there. You're under it, inside it, and your fingers close on a canvas strap. You *pull*.

The bag rips free. It's heavy. You roll with it across the asphalt and come up on your feet on the far side of the truck, holding forty pounds of somebody else's money against your chest like a baby.

Heck looks at his empty hand. Then at you. Then he laughs, a big, surprised, delighted laugh.

heck: Mira, el nene. Okay, papa. Okay. You keep that one.

teddy: Heck. Bags. *Now.*

The small one on the corner presses play on her phone, and your own voice comes out of it, crackling, perfect: *"Somebody has to."* You don't remember saying it.

bree[SMALL GRITTY]: Got you, Wawa.

They're gone: across Girard and down into the subway, three orange Grittys vanishing into the Broad Street Line. Teddy lets go of the truck last, and fifteen tons of steel lurch forward a foot with a scream like the end of the world.

You're standing in the middle of Broad Street holding a bag of money. Every phone on the corner is pointed at you.`,
    next: 'a2_after_heist'
  },
  a2_fight_money_burn: {
    enter: g => { g.flag('fight_result', 'money_burn'); g.flag('bags_recovered'); g.injure({ id: 'burn', name: 'Burned forearm', pen: 1, heal: 2, affects: ['body'] }); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); },
    text: `You get the strap. You also get Heck's hand, which closes around your forearm for half a second as you pull. Half a second is enough.

The smell comes first: hair, then something worse. Then the pain, white and enormous, like grabbing the handle of Nonna's cast-iron pan straight out of the oven.

You don't let go of the bag. You don't know why. You just don't.

Heck lets go of *you*, fast, almost apologetic, like he's touched a kid on a stove.

heck: Ay, perdón, perdón, papa, I don't— Teddy, we gotta go.

They go. The small one presses play on her phone as she runs, and your own voice comes out of it: *"Somebody has to."* You don't remember saying it.

You sit down in the middle of Broad Street with a bag of money in your lap and a bright red handprint blistering on your right forearm, every phone on the corner pointed at you.`,
    next: 'a2_after_heist'
  },
  a2_fight_burn: {
    enter: g => { g.flag('fight_result', 'burned'); g.injure({ id: 'burn', name: 'Burned forearm', pen: 1, heal: 2, affects: ['body'] }); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); },
    text: `You go for the bag. Heck goes for you.

His glowing hand closes on your forearm. It's like grabbing the handle of Nonna's cast-iron pan straight out of the oven: hair first, then skin, then pain so big it's a color. You hear yourself make a sound you've never made.

He lets go almost immediately, horrified, like a man who's touched a kid on a stove.

heck: Ay, Dios, perdón, papa, I didn't— *Teddy.*

teddy: Bags. Go. *Go.*

They go. The small one presses play on her phone as she runs past, and your own voice comes out of it: *"Somebody has to."* You don't remember saying it.

You're on your knees on Broad Street, holding your arm, as three orange Grittys disappear down the subway stairs at Girard, and fifteen tons of armored car lurch forward a foot with a scream of steel.`,
    next: 'a2_after_heist'
  },
  a2_fight_deal: {
    enter: g => { g.flag('fight_result', 'deal'); g.flag('guard_saved'); g.bond('teddy', { respect: 2 }); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); g.hidden('revenant_drift', -0.3); },
    text: `sam: There's a man dying in that windshield. Let me get him out, and you walk. I won't follow you. I swear to God.

Teddy looks at the cab. At the guard, folded over the dash, the blood running down the inside of the glass. Something happens behind the mask.

teddy: Heck. Help him.

heck: Teddy—

teddy: *Help him.*

And the big man, smoking hands and all, goes to the cab with you. He holds the door frame while you work the guard out of the windshield, an inch at a time, and his hands don't burn you once. He's careful. He's *gentle*. You lay the guard on the sidewalk on his side. His name tag says **L. MEDINA**. He's breathing.

Heck looks at you over the guard's body.

heck: You do this before, papa?

sam: My mom's a nurse.

heck: Mine too.

Then he picks up the bags, and they go. The small one presses play on her phone as she passes, and your own voice comes out of it, perfect: *"I swear to God."*

bree[SMALL GRITTY]: Keep your promises, Wawa.

You keep it. You don't follow them. You kneel on the sidewalk with your hand on the guard's back, feeling him breathe, while they vanish down the subway stairs at Girard.`,
    next: 'a2_after_heist'
  },
  a2_fight_why: {
    enter: g => { g.flag('fight_result', 'why'); g.bond('teddy', { respect: 1, trust: 1 }); g.know('teddy_name', ['sam'], 'The one who stops things is called Teddy. The big one with the burning hands is Heck.'); g.know('teddy_why', ['sam'], 'Teddy said, "My mother\'s on dialysis three days a week. You know what a transplant workup costs without insurance?"'); },
    text: `sam: You already got what you came for. I just want to know why.

Teddy looks at you for a long second through the mask.

teddy: My mother's on dialysis three days a week at Temple. You know what a kidney transplant workup costs when you lose your insurance? I do. I can tell you to the dollar.

He says it calmly, the way people say numbers they've said too many times.

teddy: Saturday night, God gave me something. I'm using it.

bree[SMALL GRITTY]: *Teddy.* Time.

teddy: Yeah.

He takes his hand off the truck. Fifteen tons of steel lurch forward a foot with a scream like the end of the world.

teddy: Go home, cold guy. Nobody else is coming for her. So I am.

They go. The small one presses play on her phone as she passes you, and your own voice comes out of it, perfect, crackling: *"I just want to know why."*

bree[SMALL GRITTY]: Don't we all, Wawa.`,
    next: 'a2_after_heist'
  },

  a2_heist_guard: {
    enter: g => { g.flag('guard_saved'); g.flag('fight_result', 'none'); },
    text: g => `You don't go for the masks. You go for the cab.

The guard has gone through the windshield to the waist. You climb onto the bumper, and it's *wrong*: not cold, not warm, not anything. The street is hot and loud and moving, and the truck isn't in it. You get your arms around him and pull. He comes free an inch at a time, with glass in his scalp and blood down his collar. His name tag says **L. MEDINA**. You get him onto the sidewalk on his side, the way Ma would, and press your palm hard against the worst of the bleeding.

Behind you, the Grittys work. You hear the big one tear the last of the rear door off with a shriek of metal. You don't look.

Then a pair of beat-up Timberlands stops next to you.

The one who was touching the truck is crouching on the curb beside you, mask still on, looking at the guard, then at you.

teddy[TOUCHING GRITTY]: Good. Keep pressure.

He says it like a paramedic. He touches nothing. Then he stands up.

teddy[TOUCHING GRITTY]: You're one of the cold ones. I can tell. Stay out of it. Okay? Just stay out of it.

He jogs off. Three orange Grittys disappear down the subway stairs at Girard. The small one presses play on her phone as she goes, and your own voice comes out, crackling, perfect, saying something you said a minute ago without noticing: *"Stay with me. Stay with me."*

The guard's eyes open. He looks at you.

GUARD: …Who are you?

sam: Pizza guy.

He laughs, and then he coughs, and then he's okay.`,
    next: 'a2_after_heist'
  },
  a2_heist_stay: {
    enter: g => { g.flag('fight_result', 'none'); g.know('let_heist_go', ['sam'], 'You stayed back at Broad & Girard and called it in while the guard bled.'); },
    text: `You don't go. You get off the bike, take out your phone, and call 911 with one hand while you film with the other. You give the operator everything: three people, Gritty masks, a truck, a trolley, a guard hurt badly, Broad and Girard, *hurry*. Your voice is steady. Your hands aren't.

You watch them work. You watch the big one tear the rear door off. You watch the guard hanging out of the windshield. You film it all.

The one at the front bumper turns his head and looks right at your phone. Right at you. Through the googly eyes of the mask, he holds your gaze for a long second.

He nods. Like you did the right thing. Like he's *grateful*.

The small one passes close enough to touch. She tilts her mask at your phone, at your voice saying *hurry*, like she's learning a song.

When the one at the bumper finally lets go, the truck lurches a foot with a scream of steel, and thirty feet away, something cold in your chest flinches like it recognized the sound.

Then they're gone, down into the subway at Girard, and the sirens are still four blocks away, and a man is still bleeding through a windshield, and you're still standing there holding your phone.

You did the right thing. You know you did. You'll tell yourself that tonight until you almost believe it.`,
    next: 'a2_after_heist'
  },

  a2_after_heist: {
    enter: g => { g.recap('Three people in Gritty masks robbed an armored truck at Broad & Girard. One of them could stop things just by touching them.'); g.meet('teddy'); },
    next: g => (g.S.drift >= 5 && g.f('heist') === 'slip' || g.S.drift >= 7 ? 'a2_lost' : 'a2_dana'),
    nextTargets: ['a2_lost', 'a2_dana'],
    text: g => `Sirens. Lots of them, all at once, from three directions. The trolley passengers are climbing out the back windows. Somebody's crying. Somebody's laughing the way people laugh after something terrible doesn't happen to them.

${g.f('fight_result') === 'money' || g.f('fight_result') === 'money_burn' ? 'You set the bag down on the sidewalk next to a fire hydrant, very carefully, like it might explode. A Keystone supervisor in a windbreaker runs up and looks at it, and then at you, and his mouth opens and nothing comes out.' : ''}${g.f('slip_did') === 'money' ? 'In the trolley, a woman in scrubs has found two canvas bags of money on the floor by her feet. She\'s holding them up, staring, like they fell from the sky. As far as she knows, they did.' : ''}

${g.f('fight_result') === 'tackle' ? 'Your sneaker is lying on its side in the crosswalk. You hop out between the cop cars and jam your foot back into it.\n\n' : ''}Your nose is bleeding. ${g.S.drift >= 6 ? 'It isn\'t a trickle. It\'s a *faucet*, down your lip and chin and onto your shirt, and when you tip your head forward, it patters on the asphalt like rain.' : 'You hold the handkerchief to it.'} The edges of the world are doing something strange: shimmering, a little out of sync, like a TV with the sound a half-second behind the picture.`
  },
  a2_lost: {
    enter: g => { g.heat('press', 1); g.flag('lost_minutes'); g.know('lost_minutes', ['sam'], 'After the Girard job, you lost twenty-one minutes. You woke up on a curb on Ridge Avenue with frost on your sneakers.'); g.drift(-1); g.hidden('revenant_drift', 1); },
    text: `You blink.

You're sitting on a curb.

It's not Broad and Girard. You don't know where it is. A row of rowhouses, a corner store with a hand-painted sign, a church with a chain-link fence around it. A street sign: **RIDGE AVE**. Not the end you know, down by the Divine Lorraine where you dropped two pies an hour ago. The far end, up past Girard, where Ridge goes crooked and you've never once had a reason to be.

Your phone says **2:34 PM**. It was 2:13.

Twenty-one minutes. Gone. Not forgotten: *gone*. It isn't a gap, the soft kind a dream leaves. It's a cut. A splice. One frame Girard, the next frame here.

Your bike isn't here. Your sneakers are wet, and it hasn't rained since Monday night. When you look down, there's frost on the laces, melting fast in the August heat, dripping onto the curb. Your hands smell like a struck match and wet pennies. You don't know what they've been doing.

An old man on the stoop across the street is watching you with a cigarette halfway to his mouth.

OLD MAN: You okay, young man? You just… you weren't there, and then you were.

You get up. Your knees don't work right. You walk east, toward Broad, and you don't know how you know which way east is.

Somewhere in the back of your head, very faintly, as if from another room, you think you hear someone say your name. In your own voice.`,
    next: 'a3_article'
  },
  a2_dana: {
    enter: g => { g.meet('dana'); g.bond('dana', { respect: 1 }); },
    text: g => `A woman pushes through the crowd at the corner. Thirties, sharp blazer, very nice shoes, a press badge on a lanyard, and the expression of someone who got here before the cops on purpose. She takes it all in in one sweep: the truck, the trolley, the guard, the money, you.

She stops in front of you.

DANA: Dana Fiorillo, Inquirer. You okay? Your nose is—

She looks at your shirt. Your Ciro's shirt.

DANA: Huh.

She doesn't say anything else for a second. She looks at you the way Nik looked at the frame grab.

DANA: That's the second Ciro's shirt I've seen in a viral video this week.`,
    choices: [
      { text: '"No comment." Walk away. Don\'t run. Walk.', tag: 'No comment',
        fx: g => { g.flag('dana', 'none'); g.heat('press', 1); }, go: 'a2_dana_none' },
      { text: '"I\'m a delivery guy. I was delivering. I saw what you saw." Sell it.',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['press'], label: 'Lie to a reporter', on: { strong: 'a2_dana_lie', weak: 'a2_dana_lie', miss: 'a2_dana_lie' } },
        fx: g => g.flag('dana', 'lied') },
      { text: 'Give her one line. "Somebody has to." Then go.', tag: 'Quote',
        fx: g => { g.flag('dana', 'quote'); g.heat('press', 2); g.bond('dana', { respect: 2 }); g.know('dana_quote', ['sam', 'dana'], 'You gave Dana Fiorillo a quote at Broad & Girard: "Somebody has to."'); }, go: 'a2_dana_quote' }
    ]
  },
  a2_dana_none: {
    text: `sam: No comment.

You walk away south. You don't run. You can feel her eyes on your back the whole length of the block, and when you glance back at the corner of Thompson Street, she's writing something in a notebook. An actual paper notebook, the kind people use when they don't want it on a server.`,
    next: 'a3_article'
  },
  a2_dana_lie: {
    text: `sam: I'm a delivery guy. I was delivering. I saw what you saw.

DANA: Sure.

She hands you a card anyway. **DANA FIORILLO · METRO · THE PHILADELPHIA INQUIRER**, with a cell number handwritten on the back.

DANA: If the delivery guy ever wants to talk about what he saw, off the record, on the record, whatever, I'm the one who'll get it right. The TV people won't. They'll call you something stupid.

sam: They already did.

She almost smiles.

DANA: Yeah. I'm sorry about "Wawa Guy." Twitter made it up. I just put it in a headline. I'll make it up to you.`,
    next: 'a3_article'
  },
  a2_dana_quote: {
    text: `sam: Somebody has to.

You say it without thinking. Then you walk away, south, before she can ask anything else, and you can feel her watching you go.

DANA: Hey! *Hey.* What's your name?

You don't turn around.

Behind you, very faintly, you hear her say it to herself, testing it the way a person tastes a word: *"Somebody has to."*`,
    next: 'a3_article'
  }
});
