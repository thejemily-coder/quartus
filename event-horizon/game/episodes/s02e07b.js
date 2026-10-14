/* S2 · E7 · BAD TIMING, part 2 of 4: Act Two ("Sunday Dinner"). */
EH.scenes('s02e07', {

  /* ================= ACT TWO: SUNDAY DINNER ================= */
  a2_dinner: {
    card: { kind: 'act', label: 'Act Two', title: 'Sunday Dinner' },
    loc: '1610 S. 9TH STREET',
    clock: { day: 'Sun', date: 'Mar 7', time: '5:00 PM' },
    enter: g => { g.sleep(7); },
    text: g => `Bruno Iannucci lives four blocks from the Italian Market in a rowhouse that looks like every other rowhouse on 9th Street, except that the steps are marble and somebody scrubs them every morning, and there\'s an Infant of Prague in the front window in a red velvet robe, and the black Escalade is parked in front of the fire hydrant and nobody has ever given it a ticket.

${g.f('did_w7_mikey') ? 'Halfway down the block, a gray Honda Accord with a man in it eating a cannoli. Mikey doesn\'t look at you. You don\'t look at him.' : ''}

Jules is wearing sleeves. Navy, high-necked, a cardigan over it, pearls, her hair back. She looks like she\'s going to a christening. She\'s holding a box of pastries from Termini Brothers that she insisted on buying herself and wouldn\'t let you carry.

${g.f('dinner7') === 'refused' ? 'She hasn\'t said much to you since Monday. She\'s not angry anymore, exactly. She\'s *precise*. Every word measured, like she\'s paying for them.' : 'She squeezes your hand once on the marble steps. Then she lets go, because you\'re about to be looked at.'}

Vinnie opens the door. In an apron.

vinnie: Sally. Miss.

jules: Vincenzo. Hello again.

He blinks. He didn\'t think she\'d remember his name. Nobody remembers his name.

Inside, it\'s 1974. Plastic on the good couch. A crucifix over every door. A wall of framed photographs, weddings and christenings and first communions going back to black and white, and one, near the top, of a boy of about six in a heavy coat on a riverbank in winter, held by a woman of sixty with her gray hair plastered flat to her skull, both of them soaking wet.

You stop in front of that one.

BRUNO: *(behind you)* January 1964. My father took that. He was crying so hard it\'s a miracle it\'s in focus.

He comes down the hall on his cane in a cardigan and slippers. He looks at the photo. Then at you.

BRUNO: You have her eyes, Sam. I noticed it at Thanksgiving. Assunta DiNardo\'s eyes.

Then he turns to Jules. And something happens to his face, a small change, like a man at an auction when the lot he came for comes up.

BRUNO: And you are Miss Pemberton.

jules: Juliet. Thank you for having me, Mr. Iannucci.

BRUNO: Bruno. Please. Come. My sister has been cooking since Thursday. If you don\'t eat, she\'ll put a curse on you. A real one. She\'s from Calabria.

Dinner is eleven courses and four hours.

Philomena, his sister, eighty-two, in black, makes the gravy and the braciole and the pizzelles, and sits at the end of the table watching Jules eat with the intensity of a scientist. Dante tells a long story about a boat. Vinnie serves and clears and doesn\'t sit down once.

Bruno is charming. Bruno is *wonderful*. He asks Jules about Temple, about pre-med, about her grandmother, whom he says he met once at a fundraiser for the Academy of Music in 1988 and has been afraid of ever since. Jules laughs at the right times. She uses the right fork. She asks Philomena for the braciole recipe and Philomena tells her, in Calabrese, and Bruno translates, and everybody laughs.

You don\'t eat much. You watch.

At the end, over espresso and Sambuca and the Termini cannoli, Bruno sits back.

BRUNO: My grandfather, Carmine Iannucci, God rest him, had a produce stall at the Reading Terminal. In 1931 he lost it. In one hand of cards. At a club on Walnut Street. To a man named Pemberton.

He smiles at Jules.

BRUNO: He told that story every Christmas until he died. *Never play cards with a Pemberton. They don\'t lose. They don\'t know how.*

jules: That sounds like my family.

BRUNO: Mm. Do you play, Juliet?

jules: A little.

Bruno reaches into the pocket of his cardigan and takes out a deck of Neapolitan cards. Old, soft, the corners round. Coins, cups, swords, clubs.

BRUNO: Briscola. My grandfather\'s game. I\'ll teach you. One hand. For fun.

He deals.

Jules picks up her three cards and looks at them. Then she looks at you. Across the table, over the cannoli, the way she looks at you on the roof. A question.

*How do you want me to play this?*`,
    choices: [
      { text: 'Touch your ear. Your tell. Her signal. *Lose.*', tag: 'Lose',
        fx: g => { g.flag('briscola7', 'lost'); g.hidden('jules_debt', -1); }, go: 'a2_briscola' },
      { text: 'Nod. *Let it go your way.* Let him see what he came to see, and get it over with.', tag: 'Let her win',
        fx: g => { g.flag('briscola7', 'luck'); g.hidden('jules_debt', 1); g.hidden('jules_open', 1); }, go: 'a2_briscola' },
      { text: 'Don\'t signal anything. It\'s her hand. It\'s always been her hand.', tag: 'Her call',
        fx: g => { g.flag('briscola7', 'skill'); g.bond('jules', { respect: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_briscola' }
    ]
  },

  a2_briscola: {
    loc: '1610 S. 9TH STREET',
    text: g => `${g.f('briscola7') === 'lost' ? `She sees you touch your ear. She looks back at her cards.

She holds her breath. You watch her do it. Then she plays.

She loses. Not badly. Beautifully. Like a girl who\'s played twice in her life and is enjoying herself. She takes a trick she shouldn\'t have and throws away a three of coins she should have kept, and Bruno takes the last trick with the ace of cups, and laughs, and pats her hand.

BRUNO: Beginner\'s bad luck.

jules: I\'m afraid I\'m hopeless.

BRUNO: Mm.

He gathers the cards. He shuffles them, slowly, with his old hands. He doesn\'t take his eyes off her.

BRUNO: You threw the three of coins, Juliet. With the briscola in coins. Even a child knows to keep the three.

Silence at the table.

BRUNO: You lost *on purpose*. Which is a very interesting thing to be able to do. Most people can\'t lose on purpose. Most people just lose.` : g.f('briscola7') === 'luck' ? `She sees you nod. She looks back at her cards.

She breathes out. Long and slow. You feel it from across the table, the little tilt, the whole room leaning a quarter inch toward her.

She doesn\'t look at her cards again. She doesn\'t have to. She plays them in order, left to right, like she\'s reading a sentence, and every card is the right card. The ace of coins when coins are trump. The three when Bruno leads the king. Every trick. All of them. Bruno doesn\'t take one.

Philomena crosses herself.

Bruno sits back. He looks at the cards on the table. Then at Jules. And his face does a thing you\'ve never seen it do. It goes young. Six years old, on a riverbank, in a wet coat.

BRUNO: There it is.

He says it so softly only the table hears.

BRUNO: My grandfather wasn\'t lying.

There\'s a single drop of blood on the white tablecloth, by Jules\'s plate. She covers it with her napkin before anyone else sees it. You see it.` : `She looks at you. You don\'t move. You don\'t touch your ear. You don\'t nod. You just look back.

Something in her face settles.

She looks at her cards. She holds her breath, the way she does now, every time, to keep the luck out. And then she plays briscola like a girl who has run a high-stakes poker game for Main Line kids since she was fifteen and has never once needed to cheat at it.

She counts every card. She knows the three is worth ten. She lets Bruno take two cheap tricks to bleed his trump, and then she takes the last four, one after another, clean.

Bruno looks at the cards. Then he laughs, a big real laugh, and slaps the table, and Philomena\'s espresso cup jumps.

BRUNO: *Brava!* Brava. That wasn\'t luck. That was *counting*.

jules: I also run a card game, Mr. Iannucci. On the side. Since I was fifteen.

BRUNO: Do you. Do you. Did you hear that, Dante? Fifteen.

He wipes his eyes.

BRUNO: The luck, I could buy anywhere. If I could find it. That? *That*, you can\'t buy.`}

He puts the deck back in his cardigan pocket.

BRUNO: Juliet. I\'m going to ask you something. And Sam is going to want to say no for you. And I\'m going to ask him to let you answer.

BRUNO: Friday night, there is a card game. On Bustleton Avenue. In the back room of a bathhouse owned by a man named Pavel Orlov, who came here from Odessa in 1991 with one suitcase and now owns half of Northeast Philadelphia. Pavel and I have a disagreement about a pier. Pier 53. On Columbus Boulevard. We\'ve agreed to settle it like gentlemen, with one game, so nobody has to settle it any other way.

BRUNO: I would like you to play for me.

The clock on the wall ticks.

BRUNO: In return. Sam\'s father\'s paper. All of it. Gone. ${g.f('bruno_jobs_total') ? 'No more jobs, Sam. No more envelopes. You\'re free.' : ''} And Mrs. Kowal\'s doctor stays a friend of mine for as long as she needs one.

BRUNO: One night. One game. And then you go back to your chemistry, and your boyfriend, and you never have to sit in my house again unless you want the braciole.

Jules doesn\'t answer. She looks at you.

Everybody at the table looks at you.`,
    choices: [
      { text: '"It\'s her call." And mean it. Let her answer.', tag: 'Her call',
        fx: g => { g.flag('offer7', 'hers'); g.bond('jules', { trust: 1, respect: 1 }); g.hidden('revenant_drift', -1); }, go: 'a2_answer' },
      { text: '"No. Not her. Never her." Say it to Bruno\'s face, at his own table.', tag: 'No',
        fx: g => { g.flag('offer7', 'no'); g.bond('jules', { tension: 2 }); g.hidden('revenant_drift', 1); }, go: 'a2_answer' },
      { text: '"Me instead. Give me the jobs. Give me ten more. Leave her out of it."', tag: 'Me instead',
        fx: g => { g.flag('offer7', 'me'); g.hidden('revenant_drift', 1); }, go: 'a2_answer' }
    ]
  },

  a2_answer: {
    loc: '1610 S. 9TH STREET',
    text: g => `${g.f('offer7') === 'hers' ? `sam: It\'s her call.

Bruno nods slowly, approving, like you\'ve passed something.

BRUNO: Good boy.` : g.f('offer7') === 'no' ? `sam: No. Not her. Never her.

The table goes quiet. Dante puts his fork down. Philomena says something under her breath in Calabrese that makes Vinnie, by the sideboard, flinch.

Bruno doesn\'t get angry. That\'s the worst part. He looks at you with something like sympathy.

BRUNO: That\'s love, Sam. I understand. I was eighteen once. But I didn\'t ask you.

And Jules, beside you, puts her hand on your arm. Not gently.` : `sam: Me instead. Give me the jobs. Ten more. Twenty. Leave her out of it.

Bruno smiles at you like you\'re a nephew who said something sweet at a wedding.

BRUNO: You\'re fast, Sam. I know you\'re fast. Your great-grandmother was fast. But fast doesn\'t win a card game. She does. They\'re different things.

He turns back to Jules.`}

jules: Yes.

She says it to Bruno. Clearly. Precisely. The way she\'d accept a seat at a dinner.

jules: One game. Friday. Pier 53. Sam\'s father\'s debt, all of it, in writing. And Mrs. Kowal\'s surgeon stays your friend until she has a kidney and it takes.

BRUNO: In *writing*?

jules: I\'m a Pemberton, Mr. Iannucci. If it isn\'t in writing, it didn\'t happen.

Bruno stares at her. Then he laughs until he coughs, and Philomena has to bring him water.

BRUNO: *Madonna.* In writing. Dante, get a pen.

${g.f('offer7') === 'no' ? 'She doesn\'t look at you while Dante writes it out on the back of a Termini receipt. You don\'t think she can.' : 'Under the table, while Dante writes it out on the back of a Termini receipt, she finds your hand and holds it so hard it hurts.'}`,
    next: 'a2_ninth'
  },

  a2_ninth: {
    night: true,
    loc: '9TH STREET',
    clock: { time: '9:20 PM' },
    text: g => `Outside, the Italian Market is dark. The awnings rolled up, the fires in the barrels out, the street wet and empty and smelling like old produce and the river.

You walk. Neither of you says anything until Washington Avenue.

${g.f('did_w7_mikey') ? 'Behind you, half a block back, a gray Honda Accord pulls out from the curb with its lights off, and follows at a walking pace.' : ''}

sam: Why.

jules: Your father has paid Bruno Iannucci everything he had, Sam. You\'ve been doing his jobs since December. You told me what they were. And Halina Kowal is on a machine in her living room. I saw it, on Valentine\'s Day.

jules: One night. I can end all of it in one night.

sam: And the house collects.

She stops walking.

jules: Yes. It does. Near us.

jules: Unless I don\'t let it go. Unless I play it straight. I *can* play it straight now. ${g.f('briscola7') === 'skill' ? 'You saw me. I beat him straight.' : g.f('briscola7') === 'lost' ? 'You saw me. I lost on purpose and held my breath the whole hand.' : 'Tonight was for him. He wanted to see it, and he saw it. Friday, I hold my breath.'}

${g.f('briscola7') === 'skill' ? 'sam: You beat an old man at briscola. At his own table.' : 'sam: Jules.'}

jules: And on Friday I\'ll be playing a man from Odessa who owns half the Northeast, for a pier, with Bruno Iannucci watching. I know. I know exactly what I said yes to.

She takes your cold hand in both of hers on the corner of 9th and Washington, under a streetlight, outside a closed pho restaurant.

jules: I need you there. Not to stop me. Not to save me. To sit across the room where I can see you, so I know which way is up.

jules: Friday. Nine o\'clock. Bustleton Avenue.

You remember something. A seat. Row C, nine. Seven-thirty. Friday the twelfth.

${g.f('simone7') === 'promised' ? '*Swear to me.*\n\nYou swore.' : g.f('simone7') === 'try' ? '*If you\'re not in it, I\'ll know something happened to you.*' : 'There\'s a ticket under your door. You never went to find her about it. She put it there anyway.'}

Friday is going to be a bad night to be one person.`,
    next: 'a3_friday'
  }
});
