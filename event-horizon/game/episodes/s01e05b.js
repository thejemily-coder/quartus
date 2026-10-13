/* S1 · E5 · SUNDAY GRAVY, part 2 of 3: Act Two ("The Table"), Act Three ("The Alley"). */
EH.scenes('s01e05', {

  /* ================= ACT TWO: THE TABLE ================= */
  a2_table: {
    card: { kind: 'act', label: 'Act Two', title: 'The Table' },
    loc: 'THE KEARNEY HOUSE · DINING ROOM',
    clock: { time: '1:00 PM' },
    text: g => `Dinner is at one. Dinner has been at one since 1962.

The dining room table has both leaves in it and still isn't big enough, so the end of it runs into the front room, and Gigi sits on the piano bench. There's the good tablecloth, the lace one from Nonna's wedding, with the plastic over it, and the good dishes with the gold edges that only come out on Christmas and Easter and, apparently, for Jules Pemberton.

${g.f('did_sun_grace') ? 'Your sleeves are buttoned at the wrist. Grace\'s gauze is a soft lump under the left one.' : 'Your sleeves are buttoned at the wrist. Under the left one, nine stitches pull every time you reach for something.'}

Jules sits at the corner, at Nonna's right hand, with you beside her. Nobody told her where to sit. Nonna pointed.

Before anybody eats, Nonna holds out her hands, one to Pop on her left and one across the corner of the table to Jules on her right, and the whole table joins hands, and Jules, after a half second, takes Nonna's hand and yours.

Her hand is cold. It always is.

Nonna says grace in Italian, fast and low, the way she's said it every Sunday of your life, *Benedici, Signore, noi e questi tuoi doni*. Halfway through, she stops.

She just stops, in the middle of a word, with her eyes closed. Her hand is still holding Jules's. The table waits. Pop opens one eye. Gigi opens both.

Then Nonna finishes the prayer like nothing happened. *Amen.* She lets go of Jules's hand last, slowly, and looks at her.

nonna: Your hands are cold.

jules: They always are, Mrs. DiNardo.

nonna: Mine too. Since I was a girl.

She picks up the bowl of rigatoni and hands it to Jules first.

nonna: Mangia. Too skinny, this one.

She served her before Pop. Before *Mikey*. The table notices. Mikey looks at you with his eyebrows all the way up. Ma very carefully doesn't look at anybody.

And then it's Sunday dinner, the way it always is: everything at once, the rigatoni and the meatballs and the braciole tied with string and the sausage with fennel and the bread from Sarcone's, and the Eagles on in the front room with the sound off, and everybody talking over everybody, Pop about whether the Birds can run the ball, Mikey about a guy in his district who stole a whole ATM with a forklift, Ma about the Gallos' daughter's wedding, Gigi about a TikTok, and Nonna about none of it, eating slowly, watching Jules.

Jules eats everything. She eats *seconds*. When Ma offers thirds, she says *I really couldn't*, and Ma puts thirds on her plate anyway, and she eats those too, slowly, with a kind of grim, polite determination, like a soldier.

You watch her laugh at something Pop says, a real laugh, surprised out of her. Pop looks so pleased he turns red.

Then Mikey taps his glass with a fork.`,
    next: 'a2_mikey'
  },

  a2_mikey: {
    enter: g => { g.know('mikey_task', ['sam', 'jules', 'rosa', 'frank', 'gigi', 'nonna', 'mikey'], 'Mikey has been assigned full-time to the PPD task group hunting the Broad Street Blur. A Halcyon consultant named Brannigan asked for him by name.'); },
    text: g => `mikey: So. Okay. I wasn't gonna say anything till it was official. It's official.

He stands up. He's grinning, trying not to, failing.

mikey: Starting tomorrow, I'm not borrowed anymore. They split the Second Hand Unit. Major Crimes takes the Grittys, and the rest of us go full-time on the Blur. Me included.

The table goes up like a stadium. Ma puts both hands over her mouth. Gigi screams. Pop reaches over and grips Mikey's shoulder and doesn't say anything at all, which for Pop is a speech. Nonna says *bravo* without looking up from her plate.

mikey: It's a big deal, Ma. Same two detectives, the sergeant with the bad hip, me, and now a guy from the FBI field office who mostly drinks coffee. And a private consultant.

rosa: A *private* consultant?

mikey: Yeah. Halcyon. The energy company from the Navy Yard. They've been doing health stuff since the blackout, outreach, a study. Their recovery guy sits in on the briefings.

Under the table, your hand goes still on your knee.

mikey: Brannigan. The polo guy. Turns out he's ex-Army, like me; he was at Bagram the year before I was. He's the one who asked for me, actually. Asked the captain for me *by name*. Said he heard I knew South Philly better than anybody, and the Blur's a South Philly kid.

He says it to the table like it's good news. Then he looks at you, just you, one second longer than good news needs. He's the one who told you to be careful of this man.

mikey: So far we've got the bus on Spring Garden, the Wawa, the truck on Girard, the rowhouse at 15th and Lehigh, and then the big one. The Friday before last, McPherson Square, up in Kensington. Witnesses say a guy *on fire*, I'm not making this up, a guy literally on fire, and a kid in a black hoodie fought under the El for like five minutes. Kid broke a bus shelter with the burning guy's face, or the other way around. And then the kid *carried* the burning guy to a car. Forty yards. And three witnesses swear he didn't move. He was there, and then he was at the car, and the burning guy was in the back seat.

gigi: *That's so cool.*

mikey: It's not cool, Gige. That kid's gonna get somebody killed. Probably himself.

Beside you, Jules has stopped eating.

You don't look at her. You can feel her not looking at you. She's very still, holding her fork, looking at Mikey, and you've seen that stillness before, at a pool table. She's counting.

mikey: Brannigan says he thinks the kid's hurt. Says whoever carried a guy that hot that far, his arms are cooked.

He takes a big bite of braciole.

mikey: So if any of youse see a guy around the neighborhood with burns on his arms, call your brother.`,
    choices: [
      { text: 'Keep your face still. Chew. Swallow. Reach for the bread like a man who has never been on fire in his life.', tag: 'Poker face',
        check: { kind: 'pool', attr: 'nerve', skill: 'lie', diff: 2, near: ['jules'], label: 'Don\'t react', on: { crit: 'a2_face_good', success: 'a2_face_good', partial: 'a2_face_crack', fail: 'a2_face_crack', botch: 'a2_face_crack' } } },
      { text: '"Mikey. That Brannigan guy. Be careful with him."', tag: 'Warn him',
        fx: g => { g.flag('mikey5', 'warned'); g.know('halcyon_outreach', ['mikey', 'jules', 'rosa']); g.heat('mikey', 2); g.bond('mikey', { trust: 1 }); }, go: 'a2_warn' },
      { text: '"Excuse me. Bathroom." Get up. Go. Right now.', tag: 'Leave',
        fx: g => { g.flag('mikey5', 'left'); g.heat('jules', 1); g.heat('rosa', 1); }, go: 'a2_bathroom' }
    ]
  },
  a2_face_good: {
    enter: g => g.flag('mikey5', 'face'),
    text: `You chew. You swallow. You reach for the bread.

sam: Five minutes? No way. Nobody fights for five minutes. Real fights take, like, nine seconds.

mikey: That's what *I* said.

sam: And *carrying* a guy on fire? That's a TikTok, Mike. That's a guy with an app.

mikey: Witnesses—

sam: Witnesses in *Kensington*. At eleven at night. On *9/11*.

Pop snorts into his wine. Mikey points his fork at you.

mikey: You're a cynical little punk, Sammy, you know that?

sam: I'm just saying, if I could carry a guy on fire, I'd be in the NFL.

The table laughs. Mikey laughs. Ma laughs. Gigi says *you can't even carry groceries*. It's perfect.

Beside you, Jules picks her fork back up and eats a bite of rigatoni and doesn't laugh at all.`,
    next: 'a2_gigi'
  },
  a2_face_crack: {
    enter: g => { g.flag('mikey5', 'crack'); g.heat('jules', 1); g.heat('mikey', 1); },
    text: `You reach for the bread, and your sleeve rides up an inch, and you pull it back down too fast.

It's nothing. It's an inch. It's half a second.

Mikey sees it. You watch him see it, the way you've watched him see things your whole life: a quick little flick of the eyes, cop eyes, *older brother* eyes, from your wrist up to your face and back to his plate.

He doesn't say anything. He just keeps eating braciole, slowly.

And on your right, you feel Jules turn her head and look, for one second, at your buttoned cuff.

Then she looks down at her plate again and cuts a meatball into four exact quarters.`,
    next: 'a2_gigi'
  },
  a2_warn: {
    text: `sam: Mikey. That Brannigan guy. Be careful with him.

The table goes quiet. Not all the way. Ma's still passing the sausage. But Mikey looks at you across the table, and his fork stops halfway to his mouth.

mikey: Careful how?

sam: I don't know. I just—there's something about those Halcyon guys. They've been asking around Temple. My RA said. They're asking about *kids*, Mike.

mikey: They're running a health study. Kids got sick after the blackout.

sam: Then why does their recovery guy need a *cop*?

Mikey puts his fork down.

mikey: You met him? Brannigan?

sam: No.

mikey: You *met* him, Sammy.

sam: I know *of* him. From you. That's all. Just watch him. That's all I'm saying.

Mikey looks at you the way he looks at guys in the back of the car. Then he picks the fork back up.

mikey: Okay. I'll watch him. I'll watch everybody.

He says it lightly. He's looking at your sleeve.

Beside you, Jules hasn't said a word. She's cut her braciole into very small, very even pieces, and she isn't eating any of them.`,
    next: 'a2_gigi'
  },
  a2_bathroom: {
    loc: 'THE KEARNEY HOUSE · UPSTAIRS BATHROOM',
    text: `You go upstairs to the bathroom, the one with the pink tile and the little crocheted poodle over the spare toilet paper, and you lock the door, and you sit on the edge of the tub, and you put your face in your hands.

*Asked for me by name.*

Brannigan saw you at McPherson Square. He saw you carry Heck. He looked at you the way a man looks at a thing he's going to buy. And sometime since, he walked into a police captain's office and asked for *your brother*.

He knows. Or he's close enough to knowing that it doesn't matter. He's not hunting you. He's sitting at your family's dinner table, through Mikey, eating Ma's braciole.

You run the cold water and hold your wrists under it until your heartbeat slows down.

When you come back down, everyone has moved on to the Gallos' wedding. Jules looks up at you as you sit. She doesn't say anything. She just moves her water glass an inch, so it's closer to your plate than hers.`,
    next: 'a2_gigi'
  },

  a2_gigi: {
    text: g => `Salad comes after. It always does. Jules doesn't understand why the salad comes *after*, and is too polite to ask, and you watch her not ask it for a full minute, which almost makes up for the morning.

And then Gigi, who has been staring at Jules for an hour with the uncomplicated adoration she used to save for Jalen Hurts, puts her fork down, and says, very loud, in the voice she uses for maximum devastation:

gigi: Are you Sam's girlfriend?

The table stops.

Pop stops chewing. Mikey stops with the bread halfway to his mouth, delighted. Ma says *Gianna*. Nonna doesn't say anything. Nonna leans forward an inch.

Jules looks at Gigi. Her face doesn't move. You've seen this face in recitation, right before she corrects the TA. It's the face she makes before she does something perfect.`,
    choices: [
      { text: 'Save her. "Gige. Eat your salad. She\'s my calculus partner, and I\'m bad at calculus, and that\'s the whole story."', tag: 'Rescue',
        fx: g => { g.flag('gigi_q', 'rescue'); g.bond('jules', { trust: 1 }); }, go: 'a2_gigi_rescue' },
      { text: 'Don\'t say anything. Let her answer. You want to hear it too.', tag: 'Let her answer',
        fx: g => { g.flag('gigi_q', 'her'); g.bond('jules', { respect: 1 }); }, go: 'a2_gigi_her' }
    ]
  },
  a2_gigi_rescue: {
    text: `sam: Gige. Eat your salad. She's my calculus partner, and I'm bad at calculus, and that's the whole story.

gigi: You're bad at *everything* except fighting and pizza.

sam: Thank you, Gianna.

gigi: Only *she* can call me Gianna.

The table laughs, and the moment passes, and you breathe.

Then Jules leans over to Gigi, just a little, and says in a low, conspiratorial voice that's somehow still perfectly audible to the whole table:

jules: He's not *that* bad at calculus.

gigi: Really?

jules: No. He's very bad at calculus.

Gigi shrieks with joy. Pop laughs so hard he has to put his napkin over his face. Nonna, at the head of the table, makes a small sound that you realize, with something like terror, is a *laugh*.

Under the table, Jules's foot touches yours. Once. Then it's gone.`,
    next: 'a2_pop'
  },
  a2_gigi_her: {
    text: g => `You don't say anything. You look at your salad. You can feel your ears going red, which is a thing they do, which Gigi knows, which is why she's grinning.

Jules puts down her fork. She folds her hands on the lace tablecloth.

jules: No, Gianna. I'm not.

A little pause.

jules: I have a boyfriend. His name is Callum. He rows.

gigi: Oh.

Gigi is so visibly crushed that Ma reaches over and pats her hand.

jules: But your brother carried my refrigerator up nine flights of stairs on move-in day without asking, and I was very rude to him about it, and he has only brought it up since to call me *Your Highness*.

She says it to Gigi. She doesn't look at you.

jules: So I don't know what that makes him. But it's not *nothing*.

The table is silent.

Nonna, at the head of the table, picks up her wine glass, and drinks, and puts it down.

nonna: Hm.

${g.f('roof_end') === 'lean' ? 'You think about a roof at 4:12 in the morning and a forehead against yours. *Not like this.* Not *no*.' : ''}

She picks her fork back up. She doesn't look at you for the rest of the salad.`,
    next: 'a2_pop'
  },

  a2_pop: {
    clock: { time: '2:40 PM' },
    text: g => `During the salad, Pop's phone buzzes on the table next to his plate.

He looks at it. You look at it. You can read it upside down from where you're sitting, because you've been reading things upside down on the table since you were four: **(215) 555-4471**.

${g.knows('pop_unknown_calls') ? 'The same number. The one he kept declining on move-in day.' : ''}

Pop doesn't decline it this time. He looks at it for a second, and something goes out of his face, and he picks up the phone and stands up.

frank: Sorry. Work. One minute.

He goes out through the front room to the vestibule and closes the inner door behind him. Ma watches him go. She doesn't say anything. She picks up the salad tongs and serves Mikey more salad that he didn't ask for.

Through the frosted glass of the vestibule door, you can see Pop's shape, his back to the house, his head down.`,
    choices: [
      { text: 'Get up. "Gonna get more bread." Go stand in the front room, where you can hear.', tag: 'Listen',
        check: { kind: 'pool', attr: 'reflex', skill: 'stealth', diff: 2, label: 'Hear without being seen', on: { crit: 'a2_pop_hear', success: 'a2_pop_hear', partial: 'a2_pop_seen', fail: 'a2_pop_seen', botch: 'a2_pop_seen' } } },
      { text: 'Stay. It\'s his business. It\'s Sunday. Let him have it.', tag: 'Stay',
        fx: g => { g.flag('pop5', 'stayed'); g.hidden('revenant_drift', -0.3); }, go: 'a2_pop_stay' }
    ]
  },
  a2_pop_hear: {
    enter: g => { g.flag('pop5', 'heard'); g.know('pop_owes', ['sam'], 'You heard Pop on the phone in the vestibule: "I said Friday. I\'ll have it Friday. Don\'t come to the house. My kid\'s got nothing to do with this." Pop owes somebody money.'); },
    text: `You get up and go to the bread basket on the sideboard in the front room, which is the right distance from the vestibule door, which you've known since you were eight and eavesdropping on Christmas presents.

Pop's voice through the glass is low. You've never heard it like this.

frank: I said Friday. I'll have it Friday.

A pause.

frank: No. No. Don't come to the house. You don't come to my *house*.

A longer pause.

frank: My kid's got nothing to do with this. You leave my kids out of it. You hear me? You leave my—

He stops. A long time. Then, very quietly, a voice you don't recognize, a voice you've never heard come out of your father:

frank: Yeah. Okay. Okay. Friday. Thank you.

*Thank you.*

You get the bread and go back to the table before the vestibule door opens. When Pop sits down, he smiles at Jules and asks her if she follows the Eagles, and she says *I'm learning*, and he laughs, and he cuts the same piece of braciole smaller and smaller and never eats any of it.`,
    next: 'a2_dessert'
  },
  a2_pop_seen: {
    enter: g => { g.flag('pop5', 'seen'); g.bond('frank', { tension: 1 }); },
    text: `You get up and go to the sideboard in the front room, near the vestibule.

You hear one word, *Friday*, low and flat, before the floorboard by the radiator does what it's done since 1962 and *groans*.

The voice behind the glass stops.

The inner door opens. Pop looks at you, standing at the sideboard with a bread basket you don't need. He's still holding the phone against his chest.

frank: You need something, kid?

sam: Bread.

frank: The bread's on the table.

You both look at the bread basket in your hands.

frank: Go sit down, Sam.

He doesn't say it angry. He says it tired. He goes back into the vestibule and closes the door, and you go sit down, and you don't hear anything else.`,
    next: 'a2_dessert'
  },
  a2_pop_stay: {
    text: `You stay. You eat your salad. It's his business, and it's Sunday.

He comes back in four minutes. He sits down and puts the phone face down next to his plate and smiles at Jules and asks her if she follows the Eagles. She says *I'm learning*. He laughs.

His food sits there. He doesn't touch it again. You've never once seen your father leave food on a plate.`,
    next: 'a2_dessert'
  },

  a2_dessert: {
    clock: { time: '3:30 PM' },
    text: g => `Dessert is coffee and anisette and Nonna's cannoli and ${g.f('cannoli') === 'lie' ? 'Termini\'s cannoli on a separate plate, at the far end of the table, like a guest who isn\'t sure they were invited' : 'Termini\'s cannoli on the good plate, side by side with Nonna\'s, which is a historic event'}.

And Vinnie.

He comes in the front door without knocking, the way he's come into this house since kindergarten, yelling *Yo, Mrs. K!* and carrying a tray of his mother's pizzelles. But he looks different. You see it from across the room. New Jordans, the gray ones that cost two hundred dollars. A leather jacket, black, soft, *real*, the kind of jacket nobody from Local 57 can afford. A gold chain you've never seen.

He kisses Ma. He kisses Nonna on both cheeks and calls her *Nonna* like she's his. He shakes Pop's hand, and Pop looks at the jacket for one second too long.

Then he sees Jules.

vinnie: Whoa. *Whoa.* College. Look at you. You holding out on me?

jules: Hello. I'm Jules.

vinnie: Vincenzo. Vinnie. *Enchanted.*

He bows, from the waist, like a jackass, and Gigi laughs, and Jules smiles the smile she uses on doormen. Then Vinnie turns to you, and the grin stays on his face, and it doesn't reach his eyes at all.

vinnie: Sally. Long time.

sam: Vin.

vinnie: Three weeks. Four calls. You see 'em?

You did see them. You let all four go to voicemail. One of them was the night of the blackout. One was the night of Kensington. You didn't listen to any of them.

vinnie: Come outside. I gotta show you something on my phone.

Nobody has ever said *I gotta show you something on my phone* and meant it.`,
    next: 'a3_alley'
  },

  /* ================= ACT THREE: THE ALLEY ================= */
  a3_alley: {
    card: { kind: 'act', label: 'Act Three', title: 'The Alley' },
    loc: 'THE ALLEY BEHIND MIFFLIN STREET',
    clock: { time: '3:41 PM' },
    enter: g => { g.know('vinnie_dante', ['sam', 'vinnie'], 'Vinnie drives nights for "Dante from Passyunk." Twelve hundred a week, cash.'); },
    text: g => `The alley behind Mifflin Street is four feet wide and two hundred feet long and has been the center of the universe since you were six. Trash cans. Back gates. Clotheslines. A basketball hoop with no net bolted to the Gallos' back wall in 1994. You learned to ride a bike back here. You had your first fight back here. With Vinnie.

He lights a cigarette. He never used to smoke.

vinnie: So.

sam: So.

vinnie: Yo. So I got a new job.

He holds out his arms, presenting the jacket, the chain, the Jordans.

vinnie: Still at the Local, days. Nights, I drive for a guy. Pick up, drop off, wait in the car. Twelve hundred a week, Sally. *Cash*. My mom paid the PGW bill for the first time since my pop went inside. We got heat this winter. You know what that is?

sam: What guy?

vinnie: Just a guy. From the neighborhood.

sam: What guy, Vin.

He takes a drag. Blows it out the side of his mouth, away from you, a courtesy from childhood.

vinnie: Dante. From Passyunk. You don't need his last name.

${g.knows('pop_jacket') ? `Dante. You think about the Melrose Diner. The back booth. A young guy in a real nice jacket. *Not a cab guy.*\n\nsam: The guy from the Melrose. With my pop. The jacket.\n\nVinnie doesn't say yes. He doesn't say no. He looks at the end of his cigarette.\n\nvinnie: I asked around, like you didn't ask me to. Then somebody asked around about *me*. Then I got a job.` : 'You don\'t know any Dante from Passyunk. You know the type.'}

${g.f('pop5') === 'heard' ? 'You think about Pop in the vestibule. *Don\'t come to my house. Thank you.*' : ''}

vinnie: Don't look at me like that. Don't you *dare* look at me like that, college. You don't live here anymore.

Then he looks at your wrists.

You've rolled your sleeves up in the alley, because it's warm, because you forgot, because it's *Vinnie*. The burns are right there. ${g.f('did_sun_grace') ? 'Grace\'s gauze on one arm, the shiny new pink skin above and below it.' : 'The stitches. The pink and white and angry skin.'}

vinnie: What the hell is that?`,
    choices: [
      { text: g => '"Ciro\'s oven."' + (['lied', 'caught'].includes(g.f('ma5')) ? ' You\'ve told it once today already.' : ''), tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', liesTo: ['vinnie'], label: 'Lie to Vinnie', on: { strong: 'a3_v_lie_ok', weak: 'a3_v_lie_ok', miss: 'a3_v_called' } } },
      { text: '"You first. Who is Dante, Vin? And what does he want with my father?"', tag: 'Turn it around',
        fx: g => { g.flag('vinnie5', 'pushed'); g.bond('vinnie', { tension: 2 }); }, go: 'a3_v_push' },
      { text: 'Tell him. All of it. He\'s Vinnie. He\'s been Vinnie since you were five.', tag: 'Tell him', slip: true,
        fx: g => { g.flag('vinnie5', 'told'); if (g.S.drift >= 10) g.flag('unstick_risk'); g.know('sam_slip', ['vinnie']); g.know('sam_at_girard', ['vinnie']); g.bond('vinnie', { trust: 3 }); g.hidden('revenant_drift', -0.3); }, go: 'a3_v_told' }
    ]
  },

  a3_v_lie_ok: {
    enter: g => { g.flag('vinnie5', 'lied'); g.bond('vinnie', { tension: 1 }); },
    text: `sam: Ciro's oven. I grabbed a pan without the towel.

Vinnie takes a drag. He looks at the burns, not at you.

vinnie: Okay.

That's all he says. *Okay.* The way Grace says it. The way everybody's started saying it to you.

vinnie: Okay, Sally. You got your stuff. I got my stuff. That's how it is now, I guess.

He drops the cigarette and steps on it.

vinnie: Just so you know. When you need me. And you're gonna need me. I'm gonna say *okay* too.

He goes back inside. You hear him in the kitchen, loud, making Ma laugh, kissing Nonna goodbye. You stay in the alley with your sleeves rolled up and the burns in the sun.`,
    next: 'a4_stoop'
  },
  a3_v_called: {
    enter: g => { g.flag('vinnie5', 'called'); g.bond('vinnie', { tension: 2, trust: -1 }); },
    text: `sam: Ciro's oven. I grabbed a pan—

vinnie: Don't.

He flicks the cigarette into the gutter.

vinnie: Don't *do* that. Don't do the ear. I've known you since you were five years old, Sally. I know every lie you got. That's the Ciro's one. That's the one you use on your *mother*.

He steps closer. You're the same height. You have been since seventh grade.

vinnie: I saw the lady from the fire on Lehigh on 6abc. *He called the baby the little guy.* You call every baby the little guy! You called *my brother* the little guy till he was nine!

He's not loud. He's worse than loud. He's hurt.

vinnie: I'm not stupid. I was never the stupid one. You were just the one who *left*.`,
    next: 'a3_fight'
  },
  a3_v_push: {
    text: `sam: You first. Who is Dante, Vin? And what does he want with my father?

Vinnie's face goes very still.

vinnie: Oh. Oh, *okay*. So I tell you my stuff, and you get to keep yours. That's how it works now? You go up Broad Street to your little castle with your little rich girlfriend, and you come back once a month to ask *me* questions?

sam: She's not my—

vinnie: I don't *care*, Sally!

That one's loud. Somewhere up the alley, a back window goes up and Mrs. Gallo looks out, and then goes back in, because this is Mifflin Street, and this is Vinnie and Sam, and Mrs. Gallo has been watching you two yell at each other in this alley since before either of you could spell *alley*.

vinnie: You left. You went up Broad Street, and you *left* me here with all of it. And I didn't say nothing. I didn't say *nothing*, I said congratulations, I came to your *party*.

He shoves you. Two hands, flat on your chest, right on the handprint.`,
    next: 'a3_fight'
  },
  a3_v_told: {
    enter: g => { if (g.f('nik_rule')) g.flag('broke_nik_rule'); g.know('vinnie_dante', ['sam', 'vinnie'], 'Vinnie drives for "Dante from Passyunk." Twelve hundred a week, cash. Dante is the jacket from the Melrose.'); },
    text: `You tell him.

Not all of it. Some of it you don't have words for yet. But you tell him about the cold at 11:51, and the bus, and the world stopping, and you not stopping with it. You tell him about the Wawa. The truck on Girard. The fire. Kensington. You roll your sleeves all the way up and show him.

Vinnie listens to the whole thing with the cigarette burning down in his fingers, forgotten, until it burns him and he swears and drops it.

Then he doesn't say anything at all, which for Vinnie is a medical event.

vinnie: Show me.

sam: Vin—

vinnie: Show me, or you're full of it, and I'm going back inside to eat a cannoli.

So you step through.

The alley stops. A sparrow stops on the clothesline. Vinnie stops mid-blink, one eye half closed, like a guy in a photo somebody took at a bad time. You walk around behind him. You take the Phillies cap off the nail on the Gallos' back gate, the one that's been there since 2008, and you put it on his head.

You step back out.

Vinnie blinks. Reaches up. Takes the cap off his head. Looks at it.

vinnie: Oh, *f—*

He sits down on a trash can. It's a full trash can, and it's not a good idea, and he does it anyway.

vinnie: That's the Gallos' hat.

sam: Yeah.

vinnie: You *moved*.

sam: Yeah.

He looks at you, and for a second, he's six years old, sitting on this same trash can after you both got caught stealing Tastykakes from the Acme.

vinnie: You stupid son of a bitch. You absolute idiot. You're gonna get yourself *killed*.

He stands up and grabs you in a hug so hard it hurts your arms. He doesn't let go.

vinnie: I applied too. You know that? To Temple. I never told you. Waitlisted. I never told nobody.

You didn't know. Thirteen years, and you didn't know.

vinnie: Dante's the jacket from the Melrose. Twelve hundred a week. I don't ask what's in the bags. I don't ask about your father. And I'm not gonna stop, Sally. I can't. My mom's got heat this winter.

He lets go and puts the Gallos' cap back on the nail, carefully, exactly where it was.

vinnie: But I'm gonna keep my eyes open. For you. Okay? That's what I got.`,
    next: 'a4_stoop'
  },

  a3_fight: {
    text: g => `He swings.

It's not a real swing. It's a Vinnie swing, wide and slow and telegraphed from the shoulder, the same right hand he's been throwing at you since second grade. You've seen it a thousand times. You could block it in your sleep. You could ${g.has('rewind') ? 'take it back, if it landed. You could ' : ''}step out of the second and be on the other end of the alley before it got halfway there.${g.f('nik_rule') ? ' *Seven days,* Nik said.' : ''}

Or you could let it land.`,
    choices: [
      { text: 'Let it land. He needs to hit somebody, and you\'re the one who owes him.', tag: 'Take it',
        fx: g => { g.flag('vinnie5', 'took'); g.bond('vinnie', { trust: 2, affection: 2, tension: -2 }); g.injure({ id: 'black_eye5', name: 'Black eye (Vinnie)', pen: 0, heal: 2 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_took' },
      { text: 'Block it and put him on the ground, the way you did in sixth grade. Show him you\'re still you.', tag: 'Fight back',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 2, label: 'Put Vinnie down', physical: true, on: { crit: 'a3_fought', success: 'a3_fought', partial: 'a3_fought_ugly', fail: 'a3_fought_ugly', botch: 'a3_fought_ugly' } } },
      { text: 'Slip. Just be somewhere else when it gets there. Let him see it.', slip: true, tag: 'Slip it',
        fx: g => { g.flag('vinnie5', 'slipped'); if (g.S.drift >= 10) g.flag('unstick_risk'); g.know('sam_slip', ['vinnie']); g.bond('vinnie', { tension: 2 }); if (g.f('nik_rule')) g.flag('broke_nik_rule'); }, go: 'a3_slipped' }
    ]
  },
  a3_took: {
    text: `You let it land.

It's a good punch, actually. Better than it used to be. He's been working. It catches you on the cheekbone and snaps your head around and you taste blood, and you stay standing, and you look back at him.

Vinnie stares at you, his fist still up.

vinnie: Why didn't you block it?

sam: 'Cause I deserved it.

vinnie: You don't get to *decide* that.

sam: Yeah, I do. I didn't call you back. Four times. That's one punch.

Vinnie lowers his hand. He looks at it like it's somebody else's. Then he sits down on the Gallos' trash can, hard.

vinnie: I applied too. You know that? To Temple. I never told you. Waitlisted.

You didn't know. Thirteen years, and you didn't know.

vinnie: My mom cried for a week. Not 'cause I didn't get in. 'Cause I *applied*. She didn't know I wanted it.

He wipes his nose on his jacket sleeve, the two-hundred-dollar jacket.

vinnie: I'm not gonna stop driving for Dante. I'm not. My mom's got heat this winter. But I'll keep my eyes open. And you, you stupid son of a bitch, you call me back. Every time. Even if you can't tell me nothing. *Every time.*

sam: Every time.

He holds out his hand from the trash can. You pull him up. He doesn't let go of your hand right away.`,
    next: 'a4_stoop'
  },
  a3_fought: {
    enter: g => { g.flag('vinnie5', 'fought'); g.bond('vinnie', { respect: 2, tension: 1 }); },
    text: `You block it with your forearm, which hurts like hell, because it's your burned forearm. You hook his ankle with yours and put a hand on his chest and push, and Vinnie goes down on his back on the alley concrete, the way he did in sixth grade outside the Acme, with all his breath going *whoof*.

You stand over him. He lies there and looks up at you.

vinnie: …Okay. Okay. You're still you.

sam: I'm still me.

vinnie: You're still a jerk.

He holds his hand up. You pull him to his feet. He dusts off the leather jacket, carefully, and looks at you for a long second.

vinnie: You got faster, Sally. You were never that fast.

He doesn't wait for an answer. He goes back inside. You hear him in the kitchen, loud, making Ma laugh, kissing Nonna goodbye, *Ciao, Nonna, ti voglio bene*, and the front door closing behind him. He doesn't say goodbye to you.`,
    next: 'a4_stoop'
  },
  a3_fought_ugly: {
    enter: g => { g.flag('vinnie5', 'fought'); g.bond('vinnie', { tension: 2, trust: -1 }); g.injure({ id: 'black_eye5', name: 'Black eye (Vinnie)', pen: 0, heal: 2 }); },
    text: `You block it, but your burned arm screams when it takes the hit, and you hesitate, and Vinnie doesn't. His left catches you under the eye. You catch his jacket. You both go down into the trash cans, and it's not a fight anymore, it's two eighteen-year-olds rolling in the garbage behind their mothers' houses, the way it was when you were eleven.

Mrs. Gallo's window goes up.

MRS. GALLO: *Vincenzo! Salvatore!* I'm calling your mothers!

She is. Thirty feet away, through your kitchen screen, you hear the phone ring, and Ma pick up, and Ma say, *What alley?*

You both stop. You're lying in coffee grounds. Vinnie's new jacket has a banana peel on it.

You start laughing. You can't help it. After a second, so does he, lying on his back in the garbage, laughing at the sky.

Then he stops laughing.

vinnie: I'm not gonna stop driving for Dante.

sam: I know.

vinnie: You're not gonna tell me what's on your arms.

sam: No.

vinnie: Okay.

He gets up. He doesn't help you up. He picks the banana peel off his jacket, and he goes back inside, and you lie there in the coffee grounds for a while, looking up at the clotheslines.`,
    next: 'a4_stoop'
  },
  a3_slipped: {
    text: g => `You step through.

The alley stops. Vinnie's fist hangs in the air two feet from your face. A sparrow stops on the clothesline. The cigarette smoke stops in a gray ribbon from Vinnie's lips. ${g.f('nik_rule') ? 'Somewhere in the back of your head, Nik says *seven days*. You don\'t listen.' : ''}

You walk around him. You stand behind him, forty feet down, by the Gallos' back gate.

You step back out.

His fist goes through the place you were. He stumbles. He turns around, and you're forty feet away, and you watch his face go through every single emotion a face can have, one after another, like a slot machine.

vinnie: …Sally?

You don't say anything.

vinnie: Sally, what the *hell*—

He walks toward you slowly, the way you'd walk toward a dog you don't know. He stops a foot away. He reaches out and pokes you in the chest, once, like he's checking you're real.

vinnie: That's you. That's *you*. On the news.

sam: Yeah.

He sits down on a trash can.

vinnie: You stupid son of a bitch. You're gonna get yourself *killed*.

He stays there until the sparrow comes back. When he finally talks again, it's quiet.

vinnie: I'm not gonna stop driving for Dante. I can't. And now I know a thing about you that Dante would *pay* for. You get that? You just made me the most dangerous friend you got.

He stands up. He holds out his fist. After a second, you bump it.

vinnie: I'm never gonna tell him. But you gotta stop showing people, Sally. You gotta stop *showing* people.`,
    next: 'a4_stoop'
  }
});
