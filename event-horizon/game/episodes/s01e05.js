/* S1 · E5 · SUNDAY GRAVY, part 1 of 3: meta, cold open, Act One ("Mifflin Street"). */
EH.episode({
  id: 's01e05', season: 1, number: 5, title: 'Sunday Gravy', look: 's1',
  cast: ['sam', 'jules', 'rosa', 'frank', 'nonna', 'mikey', 'gigi', 'vinnie', 'nik', 'grace'],
  start: 'cold_open',
  xp: 5,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'CARDONE HALL · ROOM 9-14',
      clock: { day: 'Sat', date: 'Sep 19', time: '11:40 PM' },
      text: g => `Somebody knocks on your door at 11:40 on a Saturday night, three times, evenly spaced, like a metronome with manners.

Nik's asleep with his headphones on. You open the door in a Neumann-Goretti Basketball T-shirt and pajama pants with the Phillie Phanatic on them that Gigi gave you for Christmas when you were fifteen, because they were funny then, and you are now wearing them unironically, and Jules Pemberton is standing in the hallway in a navy peacoat, holding her phone against her chest like a hand of cards.

She looks at the Phanatic. She decides, visibly, not to say anything about the Phanatic.

jules: I need to ask you something, and I need you not to make a face.

sam: I don't make faces.

jules: You're making one now.

sam: That's just my face.

She takes a breath. Behind her, down the hallway, her door is open and her lamp is on.

jules: Tomorrow, my mother is hosting a luncheon at the house in Gladwyne for Callum's parents. There's a seating chart. I'm on it, between Mrs. Whitford and a bishop. I told her I couldn't come.

sam: Okay.

jules: She asked why. And I told her I had a prior commitment. Sunday dinner. With my study partner's family.

sam: …Okay.

jules: With the *Kearneys*. Of South Philadelphia.

She says *Kearneys* like it's a word in a foreign language she's been practicing.

jules: My mother looked you up. She knows your father drives a cab. She said "how *charming*," in the voice she uses for skin conditions. And then she said she'd have Mr. Abernathy drive me down and pick me up at seven, and that she'd like the address, so she can send your mother a note. On *paper*.

She finally looks up at you.

jules: So I need there to be a Sunday dinner. With the Kearneys. Of South Philadelphia. Tomorrow.

You stare at her.

${g.knows('owe_jules_favor') ? 'You owe her a favor. Any favor, her choosing, whenever she wants. You both know it. You watch her not say it.' : ''}`,
      choices: [
        { text: '"Is this the favor? The one I owe you?"', if: g => g.knows('owe_jules_favor'), tag: 'The favor?',
          fx: g => { g.flag('ask', 'favor'); g.bond('jules', { respect: 1 }); }, go: 'cold_favor' },
        { text: '"My grandmother is going to *love* you. That\'s the problem." Yes. Obviously yes.', tag: 'Yes',
          fx: g => { g.flag('ask', 'yes'); g.bond('jules', { affection: 1 }); }, go: 'cold_yes' },
        { text: '"What do I get?"', tag: 'Negotiate',
          check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', near: ['jules'], label: 'Name your price', on: { strong: 'cold_price', weak: 'cold_price_weak', miss: 'cold_price_weak' } } }
      ]
    },
    cold_favor: {
      night: true,
      text: `sam: Is this the favor? The one I owe you?

She looks at you like you've said something faintly obscene.

jules: No.

sam: No?

jules: This is a *request*. You can say no to a request. The favor is for something much worse.

sam: Like what?

jules: I'll know it when I see it.

She says it lightly. It doesn't sound light. It sounds like a woman putting something valuable back in a safe.

sam: Then yes. Come to dinner. Nonna's going to try to feed you until you die.

jules: I've read about that. I'm prepared.`,
      next: 'cold_end'
    },
    cold_yes: {
      night: true,
      text: `sam: My grandmother is going to *love* you. That's the problem.

jules: Why is that a problem?

sam: Because she's going to love you, and then she's going to ask me every Sunday for the rest of my life where you are. When I'm forty. When I'm *married to somebody else*, Pemberton. *Where's the tall one with the nice manners?*

Something happens at the corner of her mouth that she doesn't authorize.

jules: Then I'll try to be disappointing.

sam: You don't know how.

jules: I've been practicing on you for a month.`,
      next: 'cold_end'
    },
    cold_price: {
      night: true,
      enter: g => { g.flag('ask', 'price'); g.bond('jules', { affection: 1, respect: 1 }); },
      text: `sam: What do I get?

jules: You get to be *useful*. I thought you liked that.

sam: I do. I also like problem set four being done by somebody who understands the chain rule.

She narrows her eyes.

jules: Problems one through six. You do seven through ten yourself, and I check them.

sam: One through *eight*.

jules: One through six, and I don't tell your grandmother about the Phanatic pants.

You look down at the Phanatic. The Phanatic looks back up at you.

sam: …Deal.

She holds out her hand, and you shake it, and she has a very good handshake, dry and firm, like she was taught it by a professional, which she probably was. She holds on maybe one second longer than a handshake.`,
      next: 'cold_end'
    },
    cold_price_weak: {
      night: true,
      enter: g => { g.flag('ask', 'price'); },
      text: `sam: What do I get?

jules: The satisfaction of a good deed.

sam: That's not a thing.

jules: Then you get nothing, Kearney. You'd have said yes before I finished the sentence. This negotiation is decorative.

She's right. You were going to say yes before she knocked.

sam: …Yeah. Okay. Come to dinner.`,
      next: 'cold_end'
    },
    cold_end: {
      night: true,
      text: `She nods once, like a deal closing on a trading floor, and starts to go. Then she stops.

jules: What do I bring?

sam: Nothing. Don't bring anything. If you bring something, my mother will be insulted, and if you don't bring anything, my mother will be insulted, so you might as well save the money.

jules: That's not a real answer.

sam: That's the *only* answer. That's South Philly.

jules: Noon?

sam: Twelve-thirty. Dinner's at one. Dinner is always at one. Dinner has been at one since 1962.

jules: Why is it called *dinner* if it's at *one*?

sam: Pemberton. I'm begging you. Don't ask that at the table.

Her door closes. Her lamp stays on.

You get back in bed and stare at the ceiling and think, *Jules Pemberton is coming to Sunday dinner on Mifflin Street*, and your whole body goes hot and cold at the same time, which is a thing it does now for a lot of reasons.

You don't remember falling asleep.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_roof' },

    /* ================= ACT ONE: MIFFLIN STREET ================= */
    a1_roof: {
      card: { kind: 'act', label: 'Act One', title: 'Mifflin Street' },
      loc: 'CARDONE HALL · ROOF',
      clock: { day: 'Sun', date: 'Sep 20', time: '6:14 AM' },
      enter: g => { g.know('lost_minutes2', ['sam'], 'You woke up on the Cardone roof at dawn with frost on your sneakers and no memory of going up there. Twenty-six minutes, gone.'); g.sleep(6); g.pool('focus', -1); },
      text: g => `You wake up cold.

Not dorm cold. *Slip* cold. January cold, the bottom-of-the-pool cold, and your cheek is pressed against something rough and gritty, and the sky is the color of dishwater, and there's a seagull standing about four feet from your face, looking at you with professional interest.

You're on the roof.

You're on the roof of Cardone Hall, lying on the tar paper next to the HVAC unit where you sat with Jules two weeks ago, in your Phanatic pants and bare feet, and there's frost on your feet. Actual frost. White, feathery, on the tops of your toes, melting as you watch.

It's sixty-one degrees out.

Your nose is bleeding. Not a lot. A slow, steady line down your lip into your mouth, copper, familiar.

Your phone is in your hand. You don't remember picking it up. The screen says **6:14 AM**, and below that, your last open app is the stopwatch, Nik's stopwatch, the one he uses for trials. It's stopped. It reads **26:03.41**.

You didn't go up here. You didn't time anything. You went to bed.

${g.knows('lost_minutes') ? 'The last time this happened, it was Ridge Avenue, and it was twenty-one minutes. This time it\'s twenty-six.' : 'You have no idea what happened in those twenty-six minutes. Neither does anyone.'}

The seagull leaves. You sit there with your knees pulled up, waiting for your feet to feel like feet, watching the sun come up gray over the Delaware, and you think: *it's getting worse.* You don't know what *it* is. You just know it's getting worse, the way you know a tooth is going bad before the dentist does.

Then you remember what day it is, and who's coming to dinner, and you say a word out loud that you would never say in front of Nonna.`,
      next: 'a1_hub'
    },

    /* ---------- Sunday morning hub ---------- */
    a1_hub: {
      loc: 'SUNDAY MORNING · SEPTEMBER 20',
      clock: { time: '7:30 AM' },
      text: `Mr. Abernathy is picking you both up at 11:45 in front of Cardone. That's four hours. You've got frost-burned toes, a forearm full of stitches, a chest with a handprint on it, and twenty-six minutes you can't account for.

You have time for two things. Maybe.`,
      hub: {
        slots: 2, label: 'Sunday morning',
        blurb: 'Four hours until the Range Rover.',
        options: [
          { id: 'sun_nik', text: 'Wake Nik up. Tell him about the roof. Show him the stopwatch.', cost: 1, tag: 'Nik', go: 'a1_nik' },
          { id: 'sun_grace', text: 'Knock on Grace\'s door. The stitches itch like crazy. That\'s supposed to take two weeks.', cost: 1, tag: 'Grace', go: 'a1_grace' },
          { id: 'sun_femi', text: 'Text Femi. His Halcyon follow-up is Tuesday.', cost: 1, tag: 'Femi', go: 'a1_femi' },
          { id: 'sun_heck', text: 'Call Bree. You haven\'t heard how Heck is since the duck.', cost: 1, tag: 'Heck', go: 'a1_heck' },
          { id: 'sun_sleep', text: 'Go back to bed. In your bed. With the door locked and a chair under the knob.', cost: 1, tag: 'Rest', go: 'a1_sleep' }
        ],
        done: 'a1_ride'
      }
    },

    a1_nik: {
      enter: g => { g.bond('nik', { trust: 1 }); g.know('lost_minutes2', ['nik']); g.flag('nik_rule'); },
      text: g => `Nik takes it worse than you do. That's sort of his job.

He sits up in bed with his headphones around his neck and his hair in a shape that defies physics and holds your phone in both hands and stares at **26:03.41** like it's an x-ray.

nik: You *timed* it.

sam: I didn't time anything. I was asleep.

nik: Your phone opened my stopwatch at 5:48 a.m. and stopped it at 6:14. With *your* thumb. You timed yourself, Sam. In your *sleep*.

He goes very quiet. For Nik, that's an alarm going off.

nik: ${g.knows('lost_minutes') ? 'Ridge Avenue was twenty-one. This is twenty-six. And Ridge Avenue, you\'d been Slipping all night. Last night you didn\'t Slip once. You were *asleep*.' : 'Okay. Okay. So you didn\'t Slip. And you lost twenty-six minutes anyway.'}

He opens his notebook. **THE SLIP (VOL. 3).** Vol. 2 ran out in Kensington.

nik: Okay. I'm making a rule. And you're gonna hate it. No Slipping for seven days. None. Not to catch a bus, not to grab a falling coffee, not to save a cat. Let's see if it goes away when you stop poking it.

sam: And if somebody needs help?

nik: Then *somebody else* helps. Sam. *Salvatore.* You're going places in your sleep. You're going places *without you*.

He writes **RULE 1: SEVEN DAYS** and underlines it so hard the pen goes through the paper.`,
      next: '@hub'
    },

    a1_grace: {
      enter: g => { g.heal('burned_arms'); g.heal('laceration'); g.bond('grace', { trust: 1, affection: 1 }); g.know('grace_stitches', ['sam', 'grace'], 'Grace took your stitches out eight days after Kensington. She said the cut had healed like it was a month old.'); },
      text: `Grace opens her door in a Temple Med sweatshirt with an MCAT flashcard stuck to her cheek. She peels it off. It says **GLYCOLYSIS**.

grace: It's seven-thirty on a Sunday.

sam: My stitches itch.

grace: Your stitches are eight days old. They're supposed to itch. That's *healing*. Go away.

sam: Grace. They really itch.

She looks at you for a second. Then she sighs, and goes back into her room, and comes back with the tackle box that says **NOT A TACKLE BOX**.

She sits you on the floor of the hallway and unwraps your forearm. Then she doesn't say anything at all for a while.

The cut's closed. Not *closing*. Closed. A thin pink line, flat, the stitches sitting on top of it like they're decoration. The burns on your arms, which were wet and white and terrible eight days ago, are pink and new and shiny, like skin on a baby.

grace: Okay.

She snips the first stitch and pulls it out with tweezers. Then the next. Then all of them.

grace: This is what a cut looks like at four weeks. Maybe five. I've seen it in *textbooks*.

She holds your arm up to the window light and turns it slowly, the way she turned the x-ray film.

grace: I'm going to say this once, and then I'm going to go back to sleep and pretend I dreamed it. Whatever is happening to you, it's not stopping. Healing costs calories, protein, cell divisions. Yours is running a tab. Nothing in biology is free, Sam.

She rubs Silvadene into the new pink skin on your arms, gently, with two fingers, and wraps it in fresh gauze, and pats it twice.

grace: You can't hide those from your mother forever. Long sleeves. And don't let anybody hug you hard.`,
      next: '@hub'
    },

    a1_femi: {
      text: g => `TXT sam: hey. tuesday. you going?

You stare at the screen for six minutes before the dots appear.

TXT femi: thinking about it
TXT femi: ${g.f('femi4') === 'warned' ? 'i know what i said. i said i wouldnt' : g.knows('marisol') && g.f('femi4') !== 'seen' ? 'i know what you said about marisol' : 'i know what you think about them'}
TXT femi: i want to go and tell them no. in person. to a face. i want somebody to look at me while i say no to them
TXT femi: also its another 500. ngl
TXT femi: is that stupid

You look at it a long time.`,
      choices: [
        { text: '"I\'ll come with you. Tuesday. I\'ll wait outside. If you\'re not out in twenty minutes, I\'m coming in."', tag: 'Go with him',
          fx: g => { g.flag('femi_tue', 'with'); g.bond('femi', { trust: 2, affection: 2 }); g.know('femi_tuesday', ['sam', 'femi'], 'You promised Femi you\'d go with him to the Halcyon follow-up on Tuesday 9/22 and wait outside.'); }, go: 'a1_femi_with' },
        { text: '"Don\'t go. Please. Ghost them. Let them wonder."', tag: 'Don\'t go',
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', bonus: 1, bonusLabel: 'Second time asking', label: 'Keep Femi home', on: { strong: 'a1_femi_stay', weak: 'a1_femi_maybe', miss: 'a1_femi_going' } } },
        { text: '"It\'s not stupid. Text me the second you\'re out."', tag: 'His call',
          fx: g => { g.flag('femi_tue', 'text'); g.bond('femi', { affection: 1 }); }, go: 'a1_femi_text' }
      ]
    },
    a1_femi_with: {
      text: `TXT sam: ill come with you. ill wait outside. if youre not out in 20 im coming in

The dots appear. Disappear. Appear.

TXT femi: you would do that
TXT sam: yeah
TXT femi: you have calc at 2 on tuesday
TXT sam: i have a calc partner who does problems one through six
TXT femi: lol
TXT femi: ok
TXT femi: ok. tuesday. navy yard. 3:30
TXT femi: thank you sam

You put the phone down. You feel good about it. You feel like you did something right for once, before anything happened, instead of after.`,
      next: '@hub'
    },
    a1_femi_stay: {
      enter: g => { g.flag('femi_tue', 'stay'); g.flag('femi_warned', 'strong'); g.bond('femi', { trust: 2 }); },
      text: `TXT sam: dont go. ghost them. let them wonder where you went. youre good at that
TXT femi: lmao
TXT femi: ok that was actually funny
TXT femi: ok
TXT femi: ok fine. im not going. im keeping the first 500 and buying a ps5 and ghosting a multinational corporation
TXT femi: feels like the most american thing ive ever done

You laugh out loud in an empty hallway. You hope he means it. He sounds like he means it.`,
      next: '@hub'
    },
    a1_femi_maybe: {
      enter: g => { g.flag('femi_tue', 'maybe'); },
      text: `TXT sam: dont go. please. ghost them
TXT femi: ill think about it
TXT femi: im not saying that to get you off my back. im actually going to think about it
TXT femi: thats the best i got

It's not a yes. It's not a no. You read it three times like it's going to change.`,
      next: '@hub'
    },
    a1_femi_going: {
      enter: g => { g.flag('femi_tue', 'going'); g.bond('femi', { tension: 1 }); },
      text: `TXT sam: dont go. please
TXT femi: man
TXT femi: i know youre trying. but youve got a whole life where people see you. let me have this one thing where somebody sees me
TXT femi: ill text you after

He doesn't text anything else. You start four replies and send none of them.`,
      next: '@hub'
    },
    a1_femi_text: {
      text: `TXT sam: its not stupid. text me the second youre out
TXT femi: deal
TXT femi: if i dont text you, assume ive been turned into a guy who loves gray polo shirts
TXT femi: jk
TXT femi: mostly

You send him a thumbs up. It feels like nothing. It's supposed to.`,
      next: '@hub'
    },

    a1_heck: {
      enter: g => { g.know('teddy_mother', ['sam'], 'Teddy\'s mother, Halina Kowal, needs a kidney. Jefferson wants $40,000 before they\'ll put her on the list. That was what the truck was for.'); g.know('brannigan_card', ['sam', 'teddy', 'bree', 'heck'], 'A Halcyon man left a business card at Heck\'s tía\'s house in Kensington: C. BRANNIGAN · COMMUNITY RECOVERY.'); g.bond('teddy', { trust: 1 }); g.bond('bree', { trust: 1 }); },
      text: `Bree picks up on the first ring and says, without hello:

bree: Ninety-nine point one.

sam: Is that—

bree: That's *normal*, Wawa. That's normal-person temperature. He held Yesenia yesterday. For like an hour. She fell asleep on him. He cried so hard Teddy had to leave the room so *he* didn't cry.

You sit down on the floor of the hallway. You didn't decide to; your legs did.

bree: Hold on. He wants to—

Rustling. Then Teddy, close to the phone, tired.

teddy: Listen.

sam: I'm listening.

teddy: Two things. One. My mom needs a kidney. Jefferson wants forty grand before they'll put her on the list. That's what the truck was. I'm telling you because you carried my best friend across McPherson Square while he was on fire, and I figure that buys you the truth.

sam: Teddy—

teddy: Two. A guy came to Heck's tía's house on Thursday. Polo shirt. Very polite. He left a business card in the screen door.

A pause. You can hear him turning it over in his fingers.

teddy: **C. BRANNIGAN. COMMUNITY RECOVERY.** On the back he wrote, in pen, *For when it comes back.*

teddy: It's not gonna come back. Is it, cold guy?

You don't know. You don't say anything. You can hear Teddy hear you not say anything.

teddy: Yeah. That's what I thought.`,
      next: '@hub'
    },

    a1_sleep: {
      enter: g => { g.nap(3); },
      text: `You go back to bed. You lock the door. You put your desk chair under the knob like a person in a movie about a haunted house, which you may now be.

Nik, headphones on, doesn't wake up.

You sleep three hours, hard and dreamless, and when your alarm goes off at 10:45, the light through the blinds is warm and gold and your feet are just feet, and the world feels like it's holding you a little tighter than it was at dawn.`,
      next: '@hub'
    },

    /* ---------- The ride ---------- */
    a1_ride: {
      loc: 'BROAD STREET · SOUTHBOUND',
      clock: { time: '11:52 AM' },
      text: g => `At 11:45 exactly, a black Range Rover pulls up in front of Cardone Hall, and a tall gray-haired Black man in a navy suit gets out and opens the back door, and it's Mr. Abernathy, the man whose minifridge you once stole.

He looks at you. You look at him.

MR. ABERNATHY: Mr. Kearney.

sam: Mr. Abernathy. About the refrigerator—

MR. ABERNATHY: It reached the ninth floor. That's all I ever wanted for it.

Jules comes out of Cardone at 11:46, and you forget about the refrigerator.

She's wearing a dark green dress with long sleeves and a cardigan over it and small pearl earrings and flat shoes, and her hair is pulled back in a way that's very simple and must have taken an hour. She looks like she's going to a job interview at a museum. She's carrying a white cardboard box tied with red-and-white string.

sam: What's in the box?

jules: Cannoli. From Termini Brothers. Mr. Abernathy drove down to Eighth Street at eight this morning. I read that it's the correct bakery. There's a *Philadelphia Magazine* list.

You look at the box. You think about your grandmother, who has been making cannoli shells by hand on the last Sunday of every month since the Johnson administration, and who once didn't speak to her sister-in-law for two years over a ricotta.

sam: Pemberton. You brought *store cannoli* to my *Nonna's* house.

jules: Is that bad?

sam: It's—

jules: You said bring nothing. I couldn't bring nothing. I *physically* couldn't. I tried. I stood in my room with my hands empty and I felt like I was going to faint.`,
      choices: [
        { text: '"Okay. Okay. Here\'s what we do. You give them to my *mother*. Not Nonna. Ma. Ma will love it. Ma will handle Nonna."', tag: 'Strategy',
          fx: g => { g.flag('cannoli', 'ma'); g.bond('jules', { trust: 1 }); }, go: 'a1_ride_after' },
        { text: '"It\'s fine. It\'s perfect. Nonna\'s going to love them." Lie, to make her feel better.', tag: 'Lie (kindly)',
          fx: g => { g.flag('cannoli', 'lie'); g.bond('jules', { affection: 1 }); }, go: 'a1_ride_after' },
        { text: '"Termini\'s is good. Nonna\'s going to say *good, not mine*. That\'s the highest compliment she gives anything that isn\'t hers."', tag: 'The truth',
          fx: g => { g.flag('cannoli', 'truth'); g.bond('jules', { respect: 1, trust: 1 }); }, go: 'a1_ride_after' }
      ]
    },
    a1_ride_after: {
      text: g => `${{ ma: 'jules: Your *mother*. Not your grandmother.\n\nsam: Ma handles Nonna. Everybody handles Nonna through Ma. It\'s like the UN.\n\nShe nods slowly and adjusts her grip on the box, like it\'s now a diplomatic pouch.', lie: 'jules: Really?\n\nsam: Really.\n\nShe looks at you, then at your left hand, which is in your lap and nowhere near your ear. She doesn\'t look convinced. She also looks, very slightly, relieved, and that\'s the part you hold on to.', truth: 'jules: *Good, not mine.*\n\nsam: If she says that, you won. If she says nothing, that\'s also fine. If she says *hm*, we leave the country.\n\nShe almost laughs. She puts the box on her lap like it\'s a bomb she\'s been trained to transport.' }[g.f('cannoli')]}

Mr. Abernathy drives down Broad Street the way he must have driven Jules everywhere her whole life: smoothly, silently, never once going over the limit, while the whole city honks around him like a river around a rock.

You go past City Hall, past the Academy of Music, past the Kimmel Center. Past Washington Avenue, where Broad Street starts being *yours*, where the bakeries and the funeral homes and the social clubs start, where the rowhouses close in and get shorter and the American flags and the Italian flags and the Eagles flags hang off the same porches.

Jules looks out the window the whole way. She doesn't say anything. But she looks at all of it, *all* of it, the old men on lawn chairs and the girl selling water ice out of a cooler on the corner of Tasker and the shrine to the Virgin Mary in somebody's front window surrounded by Christmas lights in September, and she looks like somebody seeing the ocean for the first time and trying to act like she's seen it before.

jules: I've never been south of Washington Avenue.

sam: You've lived here your whole life.

jules: I've lived in *Gladwyne* my whole life. We came into the city for the orchestra and the dentist.

She turns and looks at you.

jules: Is it always this loud?

sam: This is quiet. It's Sunday. Everybody's at their mother's.

Mr. Abernathy turns onto Mifflin Street, and every head on every stoop turns to look at the Range Rover, and you put your face in your hands.`,
      next: 'a1_arrive'
    },

    a1_arrive: {
      loc: 'MIFFLIN STREET · SOUTH PHILADELPHIA',
      clock: { time: '12:31 PM' },
      enter: g => { g.meet('rosa'); g.meet('frank'); g.meet('gigi'); g.meet('mikey'); g.meet('nonna'); g.know('jules_mifflin', ['sam', 'jules', 'rosa', 'frank', 'gigi', 'mikey', 'nonna'], 'Jules came to Sunday dinner on Mifflin Street.'); },
      text: `Gigi is on the stoop.

Of course Gigi is on the stoop. Gigi has been on the stoop, since 11:15, judging by the sunflower-seed shells, in her good jeans and a sweatshirt that says **NEUMANN-GORETTI SAINTS**, looking up the street every thirty seconds. When the Range Rover stops, she stands up so fast she knocks over Nonna's potted basil.

gigi: SAMMMMMM.

Then she sees Jules get out of the car, and she stops dead on the second step, and her mouth falls open, and she says, in a completely different voice, very quietly, the voice of a thirteen-year-old girl seeing a celebrity at the Acme:

gigi: Oh my God.

jules: Hello. You must be Gianna.

gigi: Nobody calls me Gianna.

jules: What should I call you?

gigi: …You can call me Gianna.

And then the whole house comes out at once. That's the only way it ever happens on Mifflin Street: nobody comes out alone. Ma first, wiping her hands on a dish towel, in her church dress with an apron over it. Pop behind her, in a pressed shirt, which means he ironed it, which means he knew company was coming, which means Ma knew. Mikey last, leaning in the doorway in an Eagles jersey with his arms crossed, wearing the face he wore when you brought Kristen Lombardo to the eighth-grade dance.

And Nonna, at her own front door three houses down, on her own top step, in black, watching.

rosa: Salvatore. You didn't tell me you were bringing somebody.

sam: I didn't— Ma, I *texted*—

rosa: You texted at *eight o'clock this morning*.

She turns to Jules, and her whole face changes, the way it does for teachers and priests and Mikey's sergeant.

rosa: Sweetheart. Come in, come in, come in. Don't stand on the street. I set a place.

sam: You set a place before I texted?

rosa: I set eight places last night. I don't know why. I just did.

She says it the way she always says things like that. Like it's nothing. Like everybody's mother just knows.

Jules looks at you. You shrug. *That's just Ma.*

Jules holds out the white box.`,
      next: 'a1_cannoli'
    },
    a1_cannoli: {
      text: g => `${{
        ma: 'jules: Mrs. Kearney. These are for you. Thank you for having me.\n\nYour mother takes the box and reads the string, red and white, and the stamp on top, **TERMINI BROS. BAKERY**, and looks at Jules like she\'s just been handed a newborn.\n\nrosa: *Termini.* Oh, you didn\'t have to. Oh, *Frank*. Look. She went to *Termini\'s*.\n\nShe holds the box up over her head so Nonna can see it from three doors down. Nonna, on her step, looks at the box. Then at Jules. Then at you.\n\nnonna: Hm.\n\nBut it\'s a *good* hm. It\'s the hm of an ambassador accepting credentials. You breathe out for the first time since Gladwyne came up.',
        lie: 'jules: These are for your grandmother. Sam said she\'d love them.\n\nThe street goes quiet. On the next stoop down, Mrs. Gallo stops sweeping.\n\nYour mother takes the box very carefully, the way you\'d take something that might go off. She looks at you over Jules\'s shoulder with an expression that says *I am going to kill you in front of God later*.\n\nNonna, on her top step, looks at the box. Looks at Jules. Looks at you.\n\nnonna: Store cannoli.\n\njules: …Yes. I\'m sorry. Sam said—\n\nnonna: Sam said.\n\nNonna comes down her steps, one at a time, holding the rail. She walks across to Jules. She takes the box out of your mother\'s hands. She opens the lid and looks inside, and the whole street holds its breath.\n\nnonna: Termini. Hm.\n\nShe closes the box.\n\nnonna: Good. Not mine. But good. *You*, I like.\n\nShe points at you without looking.\n\nnonna: Him, I\'m going to talk to. *Madonna mia.*',
        truth: 'jules: These are for the family. From Termini Brothers. I know they won\'t be as good as yours, Mrs. DiNardo.\n\nShe says it straight to Nonna, across three stoops\' worth of sidewalk, without being told which one is Nonna. She just knew. Of course she knew.\n\nNonna looks at the box. At Jules. Her face doesn\'t move at all.\n\nnonna: Good. Not mine.\n\nThen, after a long pause, the eyebrows go up, half an inch, which on Nonna is a standing ovation.\n\nnonna: But good.\n\nJules turns her head just enough that only you can see her face, and she gives you a look of triumph about the width of a dime.'
      }[g.f('cannoli')]}`,
      next: 'a1_kitchen'
    },

    a1_kitchen: {
      loc: 'THE KEARNEY HOUSE · KITCHEN',
      clock: { time: '12:50 PM' },
      text: g => `Ten minutes later, Jules is in the front room on the plastic-covered couch being interviewed by Gigi about Main Line horse culture, and Pop is showing Mikey something on his phone about the Eagles' secondary, and Ma says *Salvatore, come help me with the braciole*, in a voice that is not about braciole.

The kitchen is the kitchen. The kitchen has been the same kitchen your whole life: the yellow linoleum, the radio on the windowsill playing WIP low, the Last Supper over the doorway, the big pot on the back burner where the gravy has been going since seven this morning, red and black and slow, blooping.

Ma doesn't make you help with the braciole. She closes the kitchen door, which she never does, and turns around and takes your left wrist in her hand and pushes your sleeve up before you can stop her.

You let her.

${g.f('did_sun_grace') ? 'Grace\'s gauze is clean and white. Ma unwinds it with one hand, fast, professionally, the way she must do it forty times a week in the nurse\'s office at Our Lady of Mount Carmel. Under it, the pink new skin, the thin pink line of the cut.' : 'There are stitches in your forearm. Nine of them. And above and below them, both arms, the burns: half-healed, angry, pink and white and shiny.'}

She looks at it without saying anything. Then she turns your arm over, gently, in the light from the window.

rosa: Salvatore.

sam: Ma—

rosa: I've been a school nurse for twenty-two years. I know what a burn looks like at two days and I know what it looks like at a month. This is a month. ${g.f('did_sun_grace') ? 'And this cut was stitched. I can see the holes. They\'re almost gone.' : 'And these stitches should have come out already.'}

She looks up at you.

rosa: Two weeks ago you were fine. I saw you on FaceTime. You had your shirt off because it was hot, and you were eating cereal out of the box like an animal, and your arms were fine.

The gravy bloops on the stove. On the radio, somebody's yelling about the Phillies' bullpen.

rosa: So what happened to you? And when?`,
      choices: [
        { text: '"Ciro\'s oven, Ma. I grabbed a pan without the towel. Twice. I\'m an idiot." Keep your hand off your ear.', tag: 'Lie',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['rosa'], label: 'Lie to Ma', on: { strong: 'a1_ma_lie_ok', weak: 'a1_ma_lie_meh', miss: 'a1_ma_lie_bad' } } },
        { text: '"I pulled somebody out of a fire, Ma. That\'s all. That\'s all I can tell you. Please don\'t ask me the rest."', tag: 'Some of it',
          fx: g => { g.flag('ma5', 'some'); g.heat('rosa', 3); g.bond('rosa', { trust: 2, tension: 1 }); g.know('sam_fire_ma', ['sam', 'rosa'], 'You told Ma you pulled somebody out of a fire. You asked her not to ask the rest.'); }, go: 'a1_ma_some' },
        { text: 'Make her laugh. That\'s always worked. "Ma. You should see the other guy." Then hug her.', tag: 'Deflect',
          check: { kind: 'move', move: 'Sweet-Talk', attr: 'charm', skill: 'banter', label: 'Get Ma to laugh', on: { strong: 'a1_ma_laugh', weak: 'a1_ma_laugh_weak', miss: 'a1_ma_laugh_weak' } } }
      ]
    },
    a1_ma_lie_ok: {
      enter: g => { g.flag('ma5', 'lied'); },
      text: `sam: Ciro's oven, Ma. I grabbed a pan without the towel. Twice. I'm an idiot.

She looks at you for a long second. Then she sighs, all the way from her shoes.

rosa: You are an idiot.

She lets go of your wrist. She takes the tube of Silvadene she keeps in the junk drawer next to the rubber bands and the soy sauce packets, because of course she has Silvadene in the junk drawer, and she puts it on your arms herself, with two fingers, the way she did when you were nine and fell off the Gallos' garage.

rosa: Long sleeves at the table. I don't want your grandmother seeing that. She'll light a candle the size of a fire hydrant.

You think you got away with it. Then she says, very quietly, rubbing the cream in:

rosa: A month, Salvatore. A burn doesn't lie about how old it is. Even when the boy does.`,
      next: 'a2_table'
    },
    a1_ma_lie_meh: {
      enter: g => { g.flag('ma5', 'lied'); g.bond('rosa', { tension: 1 }); },
      text: `sam: Ciro's oven, Ma. I grabbed a pan without the towel. Twice.

rosa: Twice.

sam: Yeah.

rosa: And it healed a month's worth since I saw you on FaceTime.

You don't say anything.

She lets go of your wrist and turns back to the stove and stirs the gravy for a long time, the way she does when she's deciding whether to yell.

rosa: You know what I see at school? Kids who come in with a bruise and a story. Fell off the bike. Walked into a door. I always know. I always *know*, Salvatore. And I always have to decide whether to ask the second time.

She taps the wooden spoon on the side of the pot, twice.

rosa: I haven't decided yet. Go set the table.`,
      next: 'a2_table'
    },
    a1_ma_lie_bad: {
      enter: g => { g.flag('ma5', 'caught'); g.bond('rosa', { tension: 2, trust: -1 }); },
      text: `sam: Ciro's oven, Ma. I grabbed a—

Your left hand is on your ear. You take it down. Too late. She's seen you do that since you were four.

Ma doesn't say anything. She doesn't yell. That's worse, much worse; yelling is how Ma says *I love you* when she's scared. She just pulls your sleeve down over the burns herself, carefully, all the way to your wrist, and buttons the cuff.

rosa: Your brother lies with his whole face, like your father. You lie with your ear. You always have.

She picks up the wooden spoon.

rosa: I'm not going to ask you again today. Because there's a girl in my front room who came all the way from Gladwyne, and I'm not going to embarrass you in front of her. But I'm going to ask you again, Salvatore. And next time, you're going to look at me.`,
      next: 'a2_table'
    },
    a1_ma_some: {
      text: `sam: I pulled somebody out of a fire, Ma. That's all. That's all I can tell you. Please don't ask me the rest.

She stares at you.

For a second you think she's going to slap you. She's never slapped you in your life. Then her face does something you've only seen it do once, at Pop's mother's funeral, and she pulls you down by the back of your neck and holds your head against her shoulder, hard, the way she held you at the airport when Mikey came home.

rosa: *Somebody.*

sam: Yeah.

rosa: Are they okay?

sam: Yeah. They're okay.

She holds on a while longer. She smells like garlic and Jean Naté and church.

rosa: Okay. Okay.

She lets you go and wipes her eyes fast with the back of her wrist, the dish towel still in her hand.

rosa: I'm not going to ask you the rest. Not today. But I'm your mother, and I'm a nurse, and I have eyes. And you're going to tell me eventually, because you can't keep anything from me, you never could. You're just going to make me wait.

She turns back to the stove.

rosa: Long sleeves at the table. Don't let your grandmother see.`,
      next: 'a2_table'
    },
    a1_ma_laugh: {
      enter: g => { g.flag('ma5', 'laugh'); g.bond('rosa', { affection: 1 }); },
      text: `sam: Ma. You should see the other guy.

And before she can say anything, you hug her, the way you used to when you were little and in trouble, arms all the way around her, chin on top of her head because you passed her in height in eighth grade.

She makes a noise into your chest that's half a laugh and half something else.

rosa: You're such a *pain in my ass*.

sam: I know.

rosa: You're your father's son. You're *exactly* your father's son.

She lets go and smacks you on the arm, gently, on the side without the burns, because she knows exactly where they are.

rosa: Long sleeves. Set the table. And Salvatore. I'm letting you have this one.

She points the wooden spoon at you.

rosa: I'm not letting you have the next one.`,
      next: 'a2_table'
    },
    a1_ma_laugh_weak: {
      enter: g => { g.flag('ma5', 'laugh'); g.heat('rosa', 1); },
      text: `sam: Ma. You should see the other guy.

She doesn't laugh.

rosa: I'd like to. I'd like to see the other guy very much. I'd like to see his *mother*.

She holds onto your wrist a second longer. Then she lets go, and turns back to the stove, and stirs the gravy.

rosa: Long sleeves. Set the table.`,
      next: 'a2_table'
    }
  }
});
