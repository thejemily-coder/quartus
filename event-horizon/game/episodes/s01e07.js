/* S1 · E7 · DEBT SERVICE, part 1 of 3: meta, cold open, Act One ("Two Weeks"). */
EH.episode({
  id: 's01e07', season: 1, number: 7, title: 'Debt Service', look: 's1',
  cast: ['sam', 'jules', 'nik', 'frank', 'rosa', 'vinnie', 'teddy', 'bree', 'ciro', 'femi', 'mikey', 'grace'],
  start: 'cold_open',
  xp: 5,
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'CARDONE HALL · ROOM 9-14',
      clock: { day: 'Sun', date: 'Oct 4', time: '1:09 AM' },
      text: `Your phone buzzes on the windowsill at 12:58 in the morning, and you\'re awake, because you\'re always awake now.

You think it\'s going to be Bree. Bree texts at one in the morning. Bree texts *u up wawa* and then a forty-second voice memo of a car alarm in the key of B-flat.

It isn\'t Bree.

**PEMBERTON**

You saved her as PEMBERTON the first week, in all caps, out of spite. You\'ve thought about changing it about four hundred times. You never have. You don\'t know what you\'d change it to.

You don\'t open it. You read it off the lock screen, in the little gray box, so it won\'t say *Read* on her end.

TXT jules: What if it was me.

That\'s all. Five words and a period. No question mark, which is wrong, because she always uses question marks. She uses them like a weapon. She sent it from Ravenscourt. From the castle. You picture her at some long table in a dress, being polite to people she can\'t stand.

*What if it was me.*

You think about the stoop on Mifflin Street, in the gold light, and you saying *what if it was?*, and her saying *hypothetically*.

You read it again. And again. You sit up in bed in the dark. Across the room, Nik is asleep with his headphones on, snoring softly into a pillow that says LOOK AT ME I\'M A PILLOW.

*What if it was me* what? What if it was her who… what? What if it was her, *instead*? What if it was her, *too*? What if it was her on the stoop, saying it to *you*?

You think about a window coming down on a girl, and every piece of glass missing her. You think about her running the pool table without missing once. You don\'t know why you think about those things. You put them away.

You hold the notification down. The reply box comes up right there on the lock screen. You start typing.`,
      choices: [
        { text: 'Type: *what do you mean*', tag: 'Ask',
          fx: g => g.flag('typed', 'mean'), go: 'cold_delete' },
        { text: 'Type: *then id want to know if you come back because you want to be here*', tag: 'Her words',
          fx: g => g.flag('typed', 'echo'), go: 'cold_delete' },
        { text: 'Type: *are you okay*', tag: 'Her',
          fx: g => g.flag('typed', 'okay'), go: 'cold_delete' },
        { text: 'Type: *i hope it is*', tag: 'The truth',
          fx: g => g.flag('typed', 'hope'), go: 'cold_delete' }
      ]
    },
    cold_delete: {
      night: true,
      text: g => `${{ mean: 'TXT sam: what do you mean', echo: 'TXT sam: then id want to know if you come back because you want to be here', okay: 'TXT sam: are you okay', hope: 'TXT sam: i hope it is' }[g.f('typed')]}

It sits there in the box, not sent, the cursor blinking after it.

You look at it. You think about her, ten miles away in a stone house in a dress, looking at *Delivered* under her message, and your three dots, waiting.

You think about everything you\'d have to say after this, if you sent it. Every next message. Every question she\'d ask, and every one you\'d have to lie about, or not lie about. You think about Brannigan\'s kind voice. *We\'re the only ones who\'ll know what to do.* You think about Mikey at the table, *his arms are cooked*. 

You delete it. Letter by letter. Backward.

${g.f('typed') === 'hope' ? 'You type it again. You delete it again. You type it a third time, and you hold your thumb over the arrow for so long the screen dims.\n\nYou delete it.' : 'You start a second one. You delete that too. Then a third. By the end you\'ve typed nine and sent none.'}

At 1:09 you open the thread, just to see her words whole. You know what that does on her end. You do it anyway, and you don\'t type anything else.

You put the phone face down on the windowsill. It\'s warm from your hand.

You lie there till the window goes gray, and you don\'t answer her, and you don\'t sleep, and ten miles west, under her five words, it says *Read*, and you let it.`,
      enter: g => { g.know('sam_no_reply', ['sam'], 'Jules texted "What if it was me." You read it at 1:09 a.m. You never answered.'); },
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_two_weeks' },

    /* ================= ACT ONE: TWO WEEKS ================= */
    a1_two_weeks: {
      card: { kind: 'act', label: 'Act One', title: 'Two Weeks' },
      loc: 'CARDONE HALL · 9TH FLOOR',
      clock: { day: 'Fri', date: 'Oct 16', time: '4:20 PM' },
      enter: g => { g.drift(-4); g.flag('nik_rule_kept'); g.sleep(8); },
      text: g => `Two weeks.

Two weeks of Nik\'s rule, for real this time. No Slips. Not for a falling coffee, not for a bus, not for anything. ${g.f('broke_nik_rule') ? 'You broke it once, in the alley with Vinnie, and Nik found out, and didn\'t yell, which was worse. He just wrote **RULE 1 (AGAIN)** in Vol. 3 and underlined it until the pen tore through.' : ''} Two weeks of being a normal guy. You go to class. You do your problem sets. You deliver pizzas at the speed of a bike. You sleep. Actually sleep.

And it helps. The cold in your fingers goes away. The nosebleeds stop. You stop losing minutes. Nik takes your temperature every night with the chem-lab thermometer he still hasn\'t returned, and it creeps back up, ninety-seven, ninety-eight, ninety-eight point six. *Normal.* He writes it down like a man recording a miracle.

And for two weeks, the city doesn\'t need you. Or it does, and you don\'t hear about it. A guy gets robbed on Diamond Street and you\'re in the library. There\'s a three-alarm fire in Frankford and you watch it on 6abc with Simone, eating Swedish Fish, and you sit on your hands. Literally sit on them.

It\'s harder than the bus was. You do it.

And Jules.

You haven\'t answered her. Two weeks. She hasn\'t mentioned it. Not once. Monday morning after Ravenscourt she was in Calc, perfectly normal, perfectly polite, *Kearney*, and she slid her problem set over to you to check your answers against, and her hand was steady, and she didn\'t look at you, and she\'s been exactly like that every day since.

Except Wednesday, when she said, packing up after recitation, not looking at you:

jules: The midterm\'s Monday. You\'re going to fail it.

sam: Probably.

jules: Saturday night. Seven. The lounge. Bring every problem set. *Every* one, Kearney, including the one with the horse.

sam: Dog.

jules: It has hooves.

Then she left. And you stood there in the hallway of Wachman Hall like a guy who\'d been handed something very fragile and told not to drop it.

It\'s Friday. You have a dinner shift at Ciro\'s tonight. Before that, you have a couple of hours.`,
      next: 'a1_hub'
    },

    /* ---------- Friday hub ---------- */
    a1_hub: {
      loc: 'FRIDAY · OCTOBER 16',
      clock: { time: '4:40 PM' },
      text: g => `You\'ve got two hours before Ciro needs you. You\'ve got ${g.S.xp} XP of things you\'ve learned, a midterm Monday, and a pile of people you owe phone calls.`,
      hub: {
        slots: 2, label: 'Friday afternoon',
        blurb: 'Ciro\'s at seven. Choose two.',
        options: [
          { id: 'fri7_vinnie', text: 'Call Vinnie. Jules told you to. "People who wait for calls never get them."', cost: 1, tag: 'Vinnie', go: 'a1_vinnie' },
          { id: 'fri7_femi', text: 'Femi hasn\'t been in Calc in a week. Even you can\'t find him. Go look.', cost: 1, tag: 'Femi', go: 'a1_femi' },
          { id: 'fri7_pop', text: 'Call Pop. He\'s been weird on the phone with Ma. She told you. She *never* tells you.', cost: 1, tag: 'Pop', go: 'a1_pop' },
          { id: 'fri7_study', text: 'Library. Start the Calc review now, so Saturday isn\'t a massacre.', cost: 1, tag: 'Study', go: 'a1_study' }
        ],
        done: 'a1_ciro'
      }
    },

    a1_vinnie: {
      enter: g => { g.flag('called_vinnie'); g.bond('vinnie', { trust: 2, tension: -2, affection: 1 }); },
      text: g => `He picks up on the second ring. He sounds surprised. He sounds like a guy who\'d stopped expecting the phone to say your name.

vinnie: …Sally?

sam: Hey, Vin.

vinnie: You called me.

sam: Somebody told me people who wait for calls never get them.

vinnie: Who told you that?

sam: Somebody smart.

A pause. You can hear a car engine, idling. You can hear the radio, low, a WIP host losing his mind about the Eagles' offensive line.

vinnie: The rich girl.

sam: …Yeah.

vinnie: Huh. Okay. I like her better now.

${g.f('vinnie5') === 'slipped' || g.f('vinnie5') === 'told' ? 'He doesn\'t mention the alley. Neither do you. But it\'s there on the line between you, like a third person, listening.' : ''}

You talk about nothing for a while. The Birds. His little brothers. A girl from the Local\'s office who told him he has nice eyelashes and he hasn\'t recovered. It\'s good. It\'s so good it hurts a little. You haven\'t talked to Vinnie about nothing in months.

Then he goes quiet.

vinnie: Yo. Sally. Your pop. You talk to him lately?

sam: Not really. Why?

vinnie: I\'m in the car. I can\'t— I\'m in the *car*, you know?

His voice drops.

vinnie: Saturday\'s a big day. For a lot of people. That\'s all I\'m saying. That\'s all I *can* say. Call your pop.

A door opens on his end. A voice, smooth, amused: *Vincenzo. Who\'s that?*

vinnie: My ma. Gotta go. Love you, Ma.

He hangs up.

You sit there holding the phone.`,
      next: '@hub'
    },

    a1_femi: {
      enter: g => { g.know('femi_residential', ['sam', 'femi'], 'Femi went back to Halcyon. They want him for a "residential phase" at the Navy Yard over Halloween weekend (Fri Oct 30 – Sun Nov 1), $2,500 stipend.'); g.bond('femi', { trust: 1 }); },
      text: g => `It takes you forty minutes to find him, and you\'re the only person in the world who can.

He\'s in the stacks on the fourth floor of Charles Library, in a carrel by the window, with a Calc textbook open that he isn\'t reading. People walk past him and don\'t look. A girl sits down in the carrel *next* to him, puts her bag on his feet, and doesn\'t notice.

He notices you. He smiles. It\'s a thin smile.

femi: Took you long enough.

sam: You haven\'t been in recitation.

femi: I *have* been in recitation. Every day. At the whiteboard. The course coordinator came to observe Tuesday, asked the room where the learning assistant was, and wrote *no-show* while I was holding the marker. I just. I stopped going after that. What\'s the point.

He\'s thinner. His hoodie hangs off his shoulders like it\'s on a hanger.

femi: ${g.f('femi_tue') === 'stay' ? 'I didn\'t go. On the twenty-second. Like you said. I ghosted them.\n\nsam: Good.\n\nfemi: They found me anyway. A woman came to my Econ lecture. She walked straight to my seat. She *saw* me, Sam, first try, like I was lit up. She gave me a card.' : 'I went. On the twenty-second. They measured me again. Eleven seconds is nine now. I\'m getting *better* at it, she says. Better at disappearing.'}

He takes something out of his hoodie pocket and puts it on the desk between you. A white card, heavy, embossed.

**HALCYON COMMUNITY WELLNESS · COHORT 2 · RESIDENTIAL PHASE**
**Friday Oct. 30 – Sunday Nov. 1 · Navy Yard Campus, Building 7**
**Meals, lodging, and $2,500 stipend provided.**

femi: Halloween weekend. Three days. They want to watch me *sleep*, Sam. They want to see if I disappear in my sleep. Twenty-five hundred dollars.

He laughs, and it isn\'t a laugh.

femi: My mom\'s been sending me money from Lagos every month for three years. Twenty-five hundred dollars is a year of what she sends. I could send it *back*.`,
      choices: [
        { text: '"Femi. Don\'t. They had a truck in Kensington with restraints rated for six hundred pounds. I saw it."', if: g => g.knows('halcyon_truck'), tag: 'The truck',
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', bonus: 2, bonusLabel: 'You saw it', label: 'Keep Femi out of Building 7', on: { strong: 'a1_femi_no', weak: 'a1_femi_maybe', miss: 'a1_femi_yes' } } },
        { text: '"Femi. Don\'t. Please. I know things about them I can\'t tell you."', if: g => !g.knows('halcyon_truck'),
          check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', label: 'Keep Femi out of Building 7', on: { strong: 'a1_femi_no', weak: 'a1_femi_maybe', miss: 'a1_femi_yes' } } },
        { text: 'Tell him. What you are. What happened to Heck. Why Halcyon wants people like you. Both of you.', tag: 'Tell him everything',
          fx: g => { g.flag('femi7', 'told'); g.know('sam_slip', ['femi']); g.know('halcyon_clinic', ['femi']); g.bond('femi', { trust: 3, affection: 2 }); g.hidden('revenant_drift', -0.3); }, go: 'a1_femi_told' }
      ]
    },
    a1_femi_no: {
      enter: g => { g.flag('femi7', 'no'); g.bond('femi', { trust: 2 }); },
      text: `He listens. He really does. And at the end of it, he takes the card and folds it in half, and in half again, and puts it in his pocket.

femi: Okay.

sam: Okay you won\'t go?

femi: Okay I won\'t go. Okay I believe you. Okay I\'m scared.

He looks out the window at the trees going orange on Liacouras Walk.

femi: But they found me in a lecture hall, Sam, with three hundred people in it. First try. If they want me in Building 7, I don\'t think *not going* is going to be the thing that decides it.`,
      next: '@hub'
    },
    a1_femi_maybe: {
      enter: g => { g.flag('femi7', 'maybe'); },
      text: `He listens. At the end, he doesn\'t say anything for a while.

femi: I\'ll think about it.

sam: Femi—

femi: That\'s honest. I\'m being honest with you. It\'s two weeks away. I\'ll think about it.

He puts the card back in his pocket, unfolded.`,
      next: '@hub'
    },
    a1_femi_yes: {
      enter: g => { g.flag('femi7', 'yes'); g.bond('femi', { tension: 1 }); },
      text: `He listens. Then he shakes his head, slowly.

femi: You keep telling me things you can\'t tell me. You know how that sounds? It sounds like everybody else. *Trust me. I can\'t explain.* At least *they* explain.

He puts the card back in his pocket.

femi: I\'m going, Sam. Twenty-five hundred dollars. And for three days, somebody\'s going to be looking at me the whole time. You don\'t know what I\'d give for that.`,
      next: '@hub'
    },
    a1_femi_told: {
      text: `You tell him.

You do it quietly, in a library carrel, while people walk past him like he\'s furniture and past you like you\'re furniture\'s friend. The Hitch. The cold. The bus. Heck in McPherson Square. Marisol. Brannigan\'s voice.

Femi doesn\'t interrupt once. When you\'re done, he looks at you the way nobody ever looks at him.

femi: You\'re the Blur.

sam: Yeah.

femi: The *Broad Street Blur*. Is in my Calc recitation. And can\'t do the chain rule.

sam: Nobody can do the chain rule.

He laughs, a real one, the first real one you\'ve heard out of him in a month. Then he stops.

femi: So we\'re the same. You and me.

sam: Kind of. Yeah.

femi: And they want *both* of us.

He takes the card out of his pocket and looks at it for a long time. Then he tears it in half, and in half again, and again, until it\'s confetti, and he drops it in the recycling bin under the desk.

femi: Okay. Okay. Then I\'m not going anywhere they can watch me sleep.

He looks up at you.

femi: You see me. You always see me. Three years at this school, and it\'s the guy who can\'t do the chain rule.

He laughs again. Smaller.`,
      next: '@hub'
    },

    a1_pop: {
      enter: g => { g.bond('frank', { trust: 1 }); },
      text: g => `Pop picks up on the sixth ring. You can hear the cab around him, the click of the turn signal, the dispatcher\'s radio, the AM station playing sports talk.

frank: Kid.

sam: Hey, Pop.

frank: Something wrong? You never call me.

sam: Nothing\'s wrong. Ma said you\'ve been… I don\'t know. She said you\'ve been quiet.

frank: I\'m always quiet.

sam: Quieter.

A long pause. The turn signal clicks. Somebody honks.

frank: I\'m fine, kid. Busy weekend. I\'m driving Saturday night, a double. There\'s a convention at the Center, all the hotels. Good money.

He says *good money* the way he says it when he\'s trying to convince himself.

${g.knows('vinnie_dante') ? 'You think about Vinnie in the alley. *Dante. From Passyunk.* You think about the jacket at the Melrose.' : 'You think about the 4471 calls he keeps declining.'}`,
      choices: [
        { text: '"Pop. Is it Dante?"', if: g => g.knows('vinnie_dante'), tag: 'Name him',
          fx: g => { g.flag('pop7', 'named'); g.bond('frank', { tension: 2 }); }, go: 'a1_pop_named' },
        { text: '"Okay, Pop. Be careful. Drive safe."', tag: 'Let it go',
          fx: g => { g.flag('pop7', 'let'); }, go: 'a1_pop_let' }
      ]
    },
    a1_pop_named: {
      text: `sam: Pop. Is it Dante?

The turn signal stops clicking. For a second, you think he\'s hung up.

frank: …Where\'d you hear that name.

sam: Around.

frank: Vinnie.

You don\'t say anything.

frank: Kid. You stay *out* of it. You hear me? I made this. It\'s not yours. It\'s not your brother\'s. It\'s *mine*.

His voice breaks on *mine*. You\'ve never heard your father\'s voice break. Not at his own mother\'s funeral. Not when Mikey shipped out.

frank: I\'ll handle it. Saturday. It\'s handled.

He hangs up.`,
      next: '@hub'
    },
    a1_pop_let: {
      text: `sam: Okay, Pop. Be careful. Drive safe.

frank: Always do, kid.

A pause.

frank: Hey. Your mother says the Pemberton girl\'s mother wrote her a card. On the *good* paper. Your mother put it on the refrigerator. Next to Gigi\'s report card.

You can hear him smiling. It\'s the first time you\'ve heard him smile in weeks.

frank: Good girl, that one. Don\'t screw it up.

He hangs up before you can say anything.`,
      next: '@hub'
    },

    a1_study: {
      enter: g => { g.flag('pre_study'); g.grade('calc', 2); },
      text: `You go to the fourth floor of Charles Library with every Calc problem set you\'ve done this semester, including the one with the horse, which is a dog, and you work through them from the beginning, one by one, for two straight hours.

It\'s terrible. You\'re terrible at it. But somewhere around the middle of problem set four, the chain rule clicks, the way a lock clicks, and you sit back in the chair and stare at it, and it\'s *simple*. It was always simple. You just had to sit still long enough to see it.

You think: that\'s what the last two weeks have been. Sitting still.

You think: Jules is going to be insufferable about this.`,
      next: '@hub'
    },

    /* ---------- Ciro\'s ---------- */
    a1_ciro: {
      night: true,
      loc: 'CIRO\'S PIZZA · CECIL B. MOORE AVE',
      clock: { time: '9:14 PM' },
      enter: g => { g.money(14 * 3); g.know('pop_owes', ['sam'], 'Dante Iannucci told you: your father owes his family $41,000, from a bad bet in 2009. "Saturday is Saturday."'); g.know('dante', ['sam'], 'Dante Iannucci, 24, from Passyunk. The jacket from the Melrose. Grandson of somebody important. Vinnie drives him.'); },
      text: `Friday night at Ciro\'s is a war. Three ovens, two phones, a line out the door of drunk kids from a party on Diamond Street, and Ciro moving through it all like a general, throwing insults.

ciro: Salvatore! You\'re slow like a *wedding*. Like a wedding in *church*. Move!

At 9:14, the bell over the door rings, and the store goes quiet.

Not all at once. In a ripple, from the door back. The drunk kids don\'t notice, but the regulars do: the old Dominican guy who comes in every night for a plain slice, the two nurses from Temple Hospital, Ciro.

*Especially* Ciro. Ciro stops with a pizza peel in his hand.

The man who\'s just walked in is twenty-four, maybe. Handsome, in the way of guys who know it. Dark hair, perfect. A jacket you could live in for a year, cognac-brown leather, soft as a glove. *A real nice jacket. Not a cab guy.*

He smiles at Ciro like they\'re old friends.

DANTE: Ciro. How\'s business.

ciro: Good. Good, Mr. Iannucci. Everything is good.

You\'ve never heard Ciro call anyone *mister*. You\'ve never heard Ciro sound *scared*.

Through the front window, at the curb on Cecil B. Moore, there\'s a black Escalade with its engine running. You can see the driver\'s silhouette behind the wheel. Broad shoulders. A gold chain catching the streetlight.

Vinnie.

Dante orders a plain slice. He pays with a hundred and tells Ciro to keep it. Then he turns around, and looks right at you, behind the counter, in your Ciro\'s shirt, with flour on your arms.

DANTE: You\'re Frank Kearney\'s kid.

It isn\'t a question.

DANTE: Sam, right? The college one. Your father talks about you. He\'s proud. He should be.

He takes a bite of the slice. Chews. Nods appreciatively at Ciro.

DANTE: So here\'s the thing, Sam. I\'m gonna tell you something, because I like your father, and I think he\'s embarrassed, and embarrassed men do stupid things. Your father made a bad bet in 2009. A lot of bad bets. My grandfather\'s been very patient. Seventeen years of patient. It\'s forty-one thousand now, with everything.

He wipes his fingers on a napkin, one at a time.

DANTE: Saturday is Saturday. Tell him that for me. He\'ll know what it means.`,
      choices: [
        { text: 'Lean over the counter. Get close. "You go near my father, and I\'ll find you."', tag: 'Threaten',
          check: { kind: 'move', move: 'Lean On', attr: 'nerve', skill: 'intimidate', label: 'Make him blink', on: { strong: 'a1_dante_threat', weak: 'a1_dante_threat_weak', miss: 'a1_dante_threat_weak' } } },
        { text: '"What happens Saturday?" Keep your voice flat. Get information.', tag: 'Ask',
          check: { kind: 'move', move: 'Read the Street', attr: 'wits', skill: 'streetwise', label: 'Read Dante', on: { strong: 'a1_dante_read', weak: 'a1_dante_read_weak', miss: 'a1_dante_read_weak' } } },
        { text: 'Say nothing. Look past him, at the Escalade. At Vinnie.', tag: 'Vinnie',
          fx: g => { g.flag('ciro7', 'vinnie'); }, go: 'a1_dante_vinnie' }
      ]
    },
    a1_dante_threat: {
      enter: g => { g.flag('ciro7', 'threat'); g.flag('dante_noticed'); },
      text: `You lean over the counter. Close. Close enough to smell his cologne, something expensive with cedar in it.

sam: You go near my father, and I\'ll find you.

Dante looks at you. For a second, something real goes across his face: not fear, not exactly. Interest.

DANTE: Huh.

He smiles. It\'s a very good smile. It\'s the smile of a man who\'s going to remember you.

DANTE: My driver says you were the one who got in fights. When you were kids.

He folds his napkin, sets it on the counter, and goes.

Through the window, as the Escalade pulls away, Vinnie doesn\'t look at you. He looks straight ahead, both hands on the wheel at ten and two, like his driving-test instructor taught him.`,
      next: 'a2_saturday'
    },
    a1_dante_threat_weak: {
      enter: g => { g.flag('ciro7', 'threat'); },
      text: `You lean over the counter.

sam: You go near my father, and I\'ll—

DANTE: You\'ll what?

He says it pleasantly. He says it like he genuinely wants to know. You don\'t finish. You realize, standing there in a pizza shirt with flour up to your elbows, that there\'s nothing you can say to this man that he hasn\'t heard from a hundred guys bigger than you.

DANTE: Tell your father. Saturday.

He goes. Ciro puts the pizza peel down very carefully and doesn\'t look at you for the rest of the night.`,
      next: 'a2_saturday'
    },
    a1_dante_read: {
      enter: g => { g.flag('ciro7', 'read'); g.know('dante_saturday', ['sam'], 'Dante let slip that Saturday is "a pickup." They\'re going to "have a conversation" with your father in his cab, somewhere quiet, with "a friend who keeps things still."'); },
      text: `sam: What happens Saturday?

You keep your voice flat. You keep your hands on the counter. You\'ve been reading guys like this since you were eleven, on Passyunk Avenue, outside the social clubs.

Dante considers you. He decides you\'re not a threat. You can see him decide it. It\'s the most useful thing he could have done.

DANTE: Nothing happens. We have a conversation. Your father and me and a friend of mine. In the cab, somewhere quiet. My friend\'s very good at keeping things still while people talk.

*Keeping things still.*

DANTE: Your father will be fine, Sam. Nobody wants a mess. We just need him to understand.

He goes. Through the window, you watch the Escalade pull away, and you think: *a friend who keeps things still.*

You only know one person in Philadelphia who keeps things still.`,
      next: 'a2_saturday'
    },
    a1_dante_read_weak: {
      enter: g => { g.flag('ciro7', 'read'); },
      text: `sam: What happens Saturday?

DANTE: Your father knows.

He smiles. He doesn\'t give you anything else. He\'s better at this than you are.

He goes. You watch the Escalade pull away from the curb, Vinnie\'s silhouette behind the wheel, and you stand there behind the counter with your hands flat on the steel so nobody can see them shake.`,
      next: 'a2_saturday'
    },
    a1_dante_vinnie: {
      text: `You don\'t look at Dante. You look past him, through the window, at the Escalade.

Vinnie is looking back at you.

He doesn\'t wave. He doesn\'t nod. He just looks at you through the windshield, under the streetlight on Cecil B. Moore, for a long second, the way you used to look at each other across the classroom at St. Monica\'s when one of you was in trouble and the other couldn\'t help.

Then he looks away.

DANTE: That\'s my driver. Vincenzo. You two know each other, right? From the old neighborhood?

He knows you do. He\'s watching your face to see how you\'ll answer.

sam: Everybody knows everybody.

DANTE: That\'s true. That\'s very true.

He goes. The Escalade pulls away. Vinnie keeps his eyes on the road.`,
      next: 'a2_saturday'
    }
  }
});
