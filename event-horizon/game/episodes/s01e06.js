/* S1 · E6 · THE HOUSE ALWAYS WINS (Jules POV), part 1 of 2: meta, cold open, Act One ("Ninth Floor, Other Side"). */
EH.episode({
  id: 's01e06', season: 1, number: 6, title: 'The House Always Wins', look: 's1', pov: 'jules',
  cast: ['jules', 'sam', 'simone', 'callum', 'hugh', 'constance', 'catherine', 'whitney', 'nik', 'grace'],
  start: 'cold_open',
  xp: 4,
  previously: g => [
    'You have never lost a game of cards in your life.',
    g.f('roof_end') === 'lean' ? 'On the roof at 4:12, Sam Kearney leaned in. You said, "Not like this."' : 'On the roof at 4:12, you and Sam Kearney watched the sun come up.',
    'He came back from Kensington bleeding. You stitched him on the bathroom floor.',
    g.f('stoop') === 'whatif' ? 'On a stoop on Mifflin Street, he said, "What if it was?"' : 'You went to Sunday dinner on Mifflin Street, and his grandmother handed you the macaroni first.'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'CARDONE HALL · ROOF',
      clock: { day: 'Sun', date: 'Sep 6', time: '4:12 AM' },
      text: g => `> FOUR WEEKS EARLIER. THE OTHER SIDE OF THE ROOF.

You are Juliet Louisa Pemberton, and you have never in your life been this close to anybody on purpose.

${g.f('roof_end') === 'lean' ? 'His forehead is against yours. You put it there. You don\'t remember deciding to; you remember him leaning in, slowly, so slowly, giving you every chance in the world, and you remember that for the first time in your life there were chances, real ones, and none of them had already been decided. And you remember stopping. *Not like this.*' : g.f('roof_end') === 'still' ? 'Your head is on his shoulder. He didn\'t lean in. He sat perfectly still, close enough to feel you breathe, and didn\'t take one inch you didn\'t give him, and nobody has ever done that, and it frightens you more than the window did.' : 'Your head is on his shoulder. He said something true instead of leaning in, and you can\'t stop hearing it.'}

He smells like smoke. A house fire, ten blocks away. He went toward it. He came back with ${g.f('family') === 'clean' ? 'soot in his hairline and his hands shaking' : 'his hands burned'}, and he lied to you about almost nothing, and you let him.

Here is what you know about the world, the things you\'ve known since you were small:

You don\'t fall. When you were twelve, Mercutio refused a jump at Devon and you went over his head, and you landed on your feet. Standing up. In your good boots. Everyone said *what luck*.

You don\'t lose. Not at cards, not at tennis, not at anything with a coin or a die in it. You stopped telling people at thirteen, because they stopped wanting to play.

And something is *watching*. You\'ve never said that one out loud. Not to Gran. Not to anybody. It\'s just a feeling, the feeling of a room when someone\'s come in behind you. You\'ve had it your whole life. Since the Hitch, it\'s been louder.

And right now, on this roof, with his hand around yours on the gravel, it\'s gone quiet.

For the first time you can remember, nothing is watching.

Over the Delaware, the sky starts thinking about morning.`,
      choices: [
        { text: 'You wanted him. That\'s all. That\'s the whole terrible thing.', tag: 'Him',
          fx: g => { g.flag('roof_want', 'him'); g.bond('jules', { affection: 1 }); }, go: 'cold_end' },
        { text: 'You wanted it to be your choice. Yours. Not luck. Not the thing that watches.', tag: 'The choice',
          fx: g => { g.flag('roof_want', 'choice'); g.bond('jules', { respect: 1 }); }, go: 'cold_end' },
        { text: 'You wanted to know if he\'d still be there if you weren\'t lucky. If anyone would.', tag: 'To be kept',
          fx: g => { g.flag('roof_want', 'kept'); g.bond('jules', { trust: 1 }); }, go: 'cold_end' }
      ]
    },
    cold_end: {
      night: true,
      text: g => `${{ him: 'You wanted him. Not the idea of him, not the story of the boy from South Philly who carried your minifridge up nine flights. *Him.* The sweat and the ear and the terrible jokes. It\'s humiliating. You have never once been humiliated in your life, and you\'re finding you don\'t mind it.', choice: 'You wanted it to be a *choice*. One thing in your life that you picked and nothing picked for you. You don\'t know if that\'s possible. You don\'t know if anything you\'ve ever done has been yours.', kept: 'You wanted to know if he\'d stay if you weren\'t lucky. If you fell, and nothing caught you, and you were just a person on a roof. You\'ve never been able to test it. You\'ve never once been allowed to fall.' }[g.f('roof_want')]}

The sun comes up over the Delaware. Neither of you moves.

Four hours from now, Callum will be in the lobby with iced coffee, and you\'ll go down first, and you\'ll let him hug you with Kearney watching over his shoulder, and you\'ll look at Kearney the whole time.

You won\'t remember deciding to do that either.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_friday' },

    /* ================= ACT ONE: THE OTHER SIDE OF THE HALL ================= */
    a1_friday: {
      card: { kind: 'act', label: 'Act One', title: 'The Other Side of the Hall' },
      loc: 'CARDONE HALL · ROOM 9-11',
      clock: { day: 'Fri', date: 'Oct 2', time: '3:40 PM' },
      text: g => `It\'s October. The trees on Liacouras Walk have started to turn. The campus smells like cold coffee, leaf rot and the Chinese food truck on 12th Street. You\'ve been at Temple six weeks, and nothing in those six weeks has gone the way it was supposed to.

You are packing a weekend bag for Ravenscourt.

Your grandmother\'s house. The first Saturday of October. Every year since before you were born, Constance Pemberton hosts a card game in the library at Ravenscourt: family, two or three men from the Merion Cricket Club, whoever your father is trying to impress that year. Black tie, because Gran says a card game without black tie is just gambling. Callum\'s coming. Hugh\'s coming. Your mother is coming, although she doesn\'t play. *I don\'t gamble, Juliet. I married.*

You have never lost a hand at Ravenscourt. Not once since you were seven, the year Gran first let you sit at the table with a stack of peppermints for chips.

Simone is lying on her bed across the room in a silk bonnet with her feet up the wall, eating Swedish Fish, watching you fold a black dress into tissue paper.

simone: You fold like a serial killer.

jules: I fold like my mother\'s housekeeper taught me.

simone: That\'s what I said.

She bites the head off a Swedish Fish.

simone: You\'re gonna see Callum.

jules: He\'s my boyfriend. I see him all the time.

simone: Mm-hm. And you\'re gonna sit across a card table from him in a ball gown, and you\'re gonna think about somebody *else*, and you\'re gonna win all his money, and he\'s gonna *thank* you for it.

You stop folding.

Simone doesn\'t look at you. She looks at the ceiling, and she eats another fish, and she says, very lightly, the way she says the worst things:

simone: How was Sunday dinner, Juliet?

${g.f('stoop') === 'whatif' ? 'You think about a stoop on Mifflin Street, in gold light. *What if it was?*' : 'You think about a stoop on Mifflin Street, in gold light.'}`,
      choices: [
        { text: '"It was very nice. His mother taught me braciole." Give her nothing.', tag: 'Nothing',
          fx: g => { g.flag('sim6', 'nothing'); }, go: 'a1_simone_nothing' },
        { text: '"His sister made me a bracelet." Show her. You haven\'t taken it off.', tag: 'The bracelet',
          fx: g => { g.flag('sim6', 'bracelet'); g.bond('simone', { trust: 1, affection: 1 }); }, go: 'a1_simone_bracelet' },
        { text: '"Simone. Do you think something\'s wrong with him?"', tag: 'Ask her',
          fx: g => { g.flag('sim6', 'ask'); g.bond('simone', { trust: 2 }); }, go: 'a1_simone_ask' }
      ]
    },
    a1_simone_nothing: {
      text: `jules: It was very nice. His mother showed me how she ties the braciole.

simone: Uh-huh.

jules: His father follows the Eagles.

simone: Shocking.

jules: His grandmother said my cannoli were "good, not mine," which I\'m told is the highest honor South Philadelphia can bestow on a non-Italian.

Simone sits up. She looks at you the way she looks at a scene partner who\'s dropped a line.

simone: You\'re doing the thing.

jules: What thing?

simone: The thing where you give me a whole *paragraph* so I don\'t notice there\'s no answer in it.

She lies back down.

simone: That\'s fine. I\'ll wait. I\'m very good at waiting. I\'m in theater. Waiting is ninety percent of theater.`,
      next: 'a1_list'
    },
    a1_simone_bracelet: {
      text: `You hold up your wrist. Pink and green embroidery floss, knotted badly, a little frayed already. You\'ve worn it in the shower all week.

jules: His sister made it. Gianna. She\'s thirteen. She asked if I was his girlfriend at the table, in front of everyone.

simone: *Shut up.* What did you say?

jules: He saved me. He said I was his calculus partner and he\'s bad at calculus.

simone: He\'s *very* bad at calculus.

jules: That\'s what I said.

Simone stares at you. Then she throws a Swedish Fish at your head. It hits you in the forehead. It doesn\'t hurt, nothing ever hurts, but she meant it.

simone: Juliet Pemberton. You\'re wearing a *friendship bracelet* from a *middle schooler*. To *Ravenscourt*.

jules: It goes with the dress.

simone: It does *not* go with the dress.

It doesn\'t go with the dress. You know it doesn\'t. You\'re wearing it anyway. Neither of you says it. Simone eats another fish and lets you have it.`,
      next: 'a1_list'
    },
    a1_simone_ask: {
      text: `jules: Simone. Do you think something\'s wrong with him?

Simone stops eating Swedish Fish. That\'s how you know you\'ve said something real.

simone: Wrong like *sick*?

jules: Wrong like… he leaves. In the middle of things. He comes back with injuries that heal faster than injuries should. He touches his ear when he lies, except recently he\'s stopped. His brother is looking for a boy in a black hoodie, and he owns a black hoodie, and so does every boy in Philadelphia.

You hear yourself. You stop.

jules: That sounds insane.

simone: No.

She swings her feet down off the wall and sits on the edge of her bed, facing you, very serious, the bonnet slightly crooked.

simone: It doesn\'t sound insane. It sounds like you\'ve been keeping a *list*.

Something in the way she says *list* makes you look at her. She looks away first. Simone never looks away first.

simone: Ask him, Jules. Not me. *Him*. You get one chance to let somebody tell you themselves. That\'s my rule. Steal it.`,
      next: 'a1_list'
    },

    a1_list: {
      text: g => `Simone goes to shower. She leaves her phone on her bed, face up, unlocked, playing a Spotify playlist called **ugly crying (theatrical)**.

You don\'t mean to look at it. You\'re getting your toiletry bag off her bed, where she threw it, and the playlist ends, and the screen goes back to the last thing she had open.

It\'s the Notes app. A note titled:

**Things That Don\'t Add Up About Juliet**

You stand there with your toiletry bag in your hand, reading your own name.

*1. Never lost at anything. Ever. Not even Uno.*
*2. The window. Every piece missed her. EVERY piece.*
*3. Fell down the Cardone stairs 9/1, landed on her feet holding a full coffee. Didn\'t spill.*
*4. Sixes. Her stupid little die. Every time I\'ve seen it.*
*5. Her phone was at 1% for 3 days and never died.*
*6. Plant on her windowsill came back from dead.*
*7. Since the Hitch it\'s WORSE.*

And then, under that, a separate heading, added more recently, the font a little different because she typed it fast:

**Things That Don\'t Add Up About Sam**

*1. He was in the zone at 11:51.*
*2. Leaves. A lot.*
*3. Left movie night halfway through Moonstruck. NOBODY leaves Moonstruck.*

The shower turns off down the hall.`,
      choices: [
        { text: 'Put it down exactly where it was. Say nothing. Ever.', tag: 'Say nothing',
          fx: g => { g.flag('list', 'silent'); g.know('simone_list', ['jules', 'simone'], 'Simone keeps a list on her phone: "Things That Don\'t Add Up About Juliet." And a second one, about Sam.'); }, go: 'a1_hall' },
        { text: 'Leave it open. Let her come back and see you saw.', tag: 'Let her know',
          fx: g => { g.flag('list', 'open'); g.bond('simone', { tension: 2 }); g.know('simone_list', ['jules', 'simone'], 'Simone keeps a list on her phone: "Things That Don\'t Add Up About Juliet." And a second one, about Sam. Jules saw it, and Simone knows she saw it.'); }, go: 'a1_list_open' },
        { text: 'Add one. Type: *8. She knows about this list.* Then put it back.', tag: 'Add one',
          fx: g => { g.flag('list', 'added'); g.bond('simone', { respect: 2 }); g.know('simone_list', ['jules', 'simone'], 'Simone keeps a list on her phone about Jules, and one about Sam. Jules added a line: "8. She knows about this list."'); }, go: 'a1_hall' }
      ]
    },
    a1_list_open: {
      text: `You put the phone down on Simone\'s bed, face up, with the note still open, and you go back to folding your dress.

Simone comes back in a towel with her hair wrapped. She sees the phone. She sees the screen. She stops in the doorway.

Neither of you says anything for a while.

simone: …So.

jules: So.

simone: I wasn\'t going to show anybody.

jules: I know.

simone: It\'s not mean. It\'s not *for* anything. I just notice things. It\'s what I do instead of being normal.

She sits down on her bed and picks up the phone and looks at the list herself, like she\'s seeing it for the first time.

simone: Is any of it wrong?

You think about the stairs. The coffee. The plant on the windowsill, which you\'d watered exactly once.

jules: No.

Simone nods slowly. She closes the note. She doesn\'t delete it.

simone: Okay. Then I\'ll keep it. And you\'ll know I\'m keeping it. And when you want to tell me what it means, I\'ll be right here, eating Swedish Fish.`,
      next: 'a1_hall'
    },

    a1_hall: {
      loc: 'CARDONE HALL · 9TH FLOOR HALLWAY',
      clock: { time: '4:45 PM' },
      text: g => `Mr. Abernathy is downstairs at five. You go out into the hall with your weekend bag and your garment bag over your shoulder, and Kearney is there.

Of course he\'s there. He\'s always there. He\'s leaning in his doorway in a gray Temple T-shirt, eating a bowl of cereal at a quarter to five in the afternoon, and his arms are fine.

That\'s the first thing you see. His arms are *fine*. Three weeks ago, on the bathroom floor, they were burned and blistered, and you finished the stitches in one of them with your own hands. Now the skin is smooth and a little pink, like a scar that\'s had a year.

sam: Pemberton.

jules: Kearney.

sam: Big weekend at the castle?

jules: It isn\'t a castle. It\'s a house.

sam: Does it have a name?

jules: …Ravenscourt.

sam: That\'s a castle, Pemberton. Houses don\'t have names. Houses have *numbers*.

He grins. It\'s the grin from the pool table, from the first week, the one you wanted to slap off his face, and you realize, standing there in the hallway holding a garment bag, that you\'ve thought about that grin every single day for six weeks, and that you\'ve stopped wanting to slap it.

Behind him, in his room, Nik is on the floor with a notebook, writing furiously, and doesn\'t look up.

sam: Have fun. Win all their money.

jules: I always do.

You say it lightly. It doesn\'t come out lightly. It comes out sounding exactly like what it is, and he hears it, and something crosses his face, a flicker, there and gone.`,
      choices: [
        { text: '"What are you doing this weekend?" Ask him a normal question. Be a normal person.', tag: 'Normal',
          check: { kind: 'move', move: 'Read the Room', attr: 'charm', skill: 'banter', label: 'Be normal at him', on: { strong: 'a1_hall_normal', weak: 'a1_hall_normal', miss: 'a1_hall_normal' } } },
        { text: '"Your arms healed." Just that. Watch his face.', tag: 'His arms',
          check: { kind: 'move', move: 'Read the Room', attr: 'wits', skill: 'investigate', label: 'Watch him', on: { strong: 'a1_hall_arms', weak: 'a1_hall_arms', miss: 'a1_hall_arms' } } },
        { text: 'Say nothing else. Nod once, the way his father nodded at you across the dinner table. Go.', tag: 'Go',
          fx: g => { g.flag('hall6', 'go'); }, go: 'a1_hall_go' }
      ]
    },
    a1_hall_normal: {
      enter: g => { g.flag('hall6', 'normal'); g.bond('jules', { affection: 1 }); },
      text: `jules: What are you doing this weekend?

He blinks, like nobody\'s ever asked him that.

sam: Uh. Ciro\'s, Saturday. Calc problem set. Nik\'s making me do a thing on the roof Sunday, with a thermometer. Vinnie owes me a phone call. My Nonna wants me to come light a candle with her at St. Monica\'s, which, I don\'t know why, she\'s been weird all week.

He shrugs, holding the cereal.

sam: Normal stuff.

jules: That\'s a lot of normal stuff.

sam: I\'m a very normal guy.

You both stand there in the hallway. It\'s the longest conversation you\'ve had without anybody bleeding since Mifflin Street.

jules: Call Vinnie.

sam: What?

jules: You said he owes you a call. Don\'t wait for him. Call him. People who wait for calls never get them.

He looks at you like you\'ve said something much bigger than you meant to. Maybe you did.

sam: …Yeah. Okay. I\'ll call him.`,
      next: 'a1_drift'
    },
    a1_hall_arms: {
      enter: g => { g.flag('hall6', 'arms'); g.know('jules_saw_healed', ['jules'], 'Two weeks after the bathroom floor, Sam\'s burns were gone. Smooth, pink, like a year-old scar.'); },
      text: `jules: Your arms healed.

You watch his face. You\'re very good at watching faces; you\'ve been doing it across card tables since you were seven.

Nothing moves in it. Not one thing. He doesn\'t touch his ear. He doesn\'t blink.

sam: Yeah. I\'m a fast healer. My Nonna says it runs in the family.

jules: Does it?

sam: Ask her. She\'ll tell you about a guy in 1952 who got hit by a trolley and went back to work the next day.

It\'s a good answer. It\'s charming and specific and it has a grandmother in it. Six weeks ago, he couldn\'t have done that.

He\'s gotten better at it. You taught him. Every time you caught him, he learned.

It\'s a cold, specific feeling, like setting down a card and realizing it\'s the one your opponent needed.`,
      next: 'a1_drift'
    },
    a1_hall_go: {
      text: `You nod once, the way his father nodded at you across the dinner table at Sunday dinner, and you go.

You can feel him watching you all the way to the elevator. It\'s not the other kind of watching, the kind you\'ve felt your whole life, the room-behind-you kind. It\'s just a boy, in a doorway, with a bowl of cereal, looking at you.

You find that you can tell the difference now. You couldn\'t, before.`,
      next: 'a1_drift'
    },

    a1_drift: {
      text: g => `The elevator comes. You step in. You turn around to press the button, and the doors start to close, and through the narrowing gap you see Kearney, down the hall, coming out of the bathroom.

In a towel. With his hair wet. Holding a shower caddy.

You look past him, at his doorway. At the gray T-shirt and the bowl of cereal and Kearney, *also Kearney*, still leaning there, looking at the elevator.

*Two of him.*

The doors close.

You stand very still in the elevator, all the way down, holding your garment bag, and you don\'t breathe.

When the doors open in the lobby, you stand there and you think: *You\'re tired. You haven\'t slept properly since August. It was Nik in the towel. Nik and Kearney have the same haircut, the same build—*

Nik was on the floor of their room with a notebook. You saw him.

${g.S.samSheet && g.S.samSheet.drift >= 9 ? 'And the shower caddy. You keep seeing it. Just before the doors met, it was white with frost.' : ''}

Mr. Abernathy is holding the car door open for you. You get in. You put your hand in your coat pocket, where Gran\'s ivory die lives, and you close your fist around it so hard the corners hurt.

They don\'t hurt. They never do.`,
      enter: g => { g.know('jules_two_sams', ['jules'], 'Jules saw Sam in two places at once on the ninth floor. One in a towel, one in his doorway.'); },
      next: 'a1_mother'
    },

    /* ---------- Gladwyne ---------- */
    a1_mother: {
      loc: 'THE PEMBERTON HOUSE · GLADWYNE',
      clock: { time: '6:10 PM' },
      text: g => `Your parents\' house in Gladwyne, where you mostly didn\'t grow up (your room was always at Gran\'s), is beautiful, and enormous, and very quiet, and it has never once in your life felt like it was yours.

Your mother is in the front hall when you come in, as if she\'s been standing there, which she may have been. Dr. Catherine Pemberton, in a cream silk blouse and gray trousers and her reading glasses pushed up into her hair, holding a small white card.

catherine: Juliet.

jules: Mother.

She kisses the air beside your cheek. She smells like Chanel No. 19 and the hospital, both, always.

catherine: You look tired. That school is running you ragged.

jules: That school is fine.

catherine: Mm.

She holds up the card. It\'s a recipe card, the kind they sell at drugstores, with a cartoon strawberry in the corner. It\'s covered in ballpoint pen in a big slanting hand, and there\'s a coffee ring on one corner.

catherine: I sent your *Mrs. Kearney* a note on Tuesday. A thank-you, for having you. On the good Crane\'s.

jules: I know. You told me.

catherine: This is what came back.

She reads it aloud. She reads it in her driest voice, the voice she uses for grant applications she intends to reject.

catherine: *Dear Dr. Pemberton. Thank you for your nice card. Your daughter is a lovely girl with beautiful manners and she ate like a horse, God bless her. Here is the braciole so she can make it for you. Don\'t use the cheap cheese. Love, Rosa Kearney. P.S. She is too skinny.*

She lowers the card.

catherine: *Love.* She wrote *love*, Juliet. To a woman she\'s never met.

You look at the card. You look at the coffee ring. You think about the kitchen on Mifflin Street, the yellow linoleum, the radio, Mrs. Kearney\'s hands on yours, showing you how to tie the string.`,
      choices: [
        { text: '"That\'s just how they are, Mother. They mean it."', tag: 'Defend them',
          fx: g => { g.flag('mother6', 'defend'); g.bond('catherine', { tension: 1 }); }, go: 'a1_mother_defend' },
        { text: 'Take the card out of her hand. "Can I keep this?"', tag: 'Keep it',
          fx: g => { g.flag('mother6', 'keep'); g.flag('braciole_card'); }, go: 'a1_mother_keep' },
        { text: '"You could make it, you know. Just once. I\'d eat it."', tag: 'Ask her',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Reach Mother', on: { strong: 'a1_mother_reach', weak: 'a1_mother_reach', miss: 'a1_mother_reach' } } }
      ]
    },
    a1_mother_defend: {
      text: `jules: That\'s just how they are, Mother. They mean it.

catherine: I\'m sure they do.

She says it the way she says *I\'m sure* to residents who are wrong. Then she does something unexpected: she doesn\'t throw the card away. She props it up on the hall table against the silver bowl where the mail goes, where everyone who comes through the front door will see it.

catherine: Dinner\'s at eight. Your father\'s on a call. Your brother\'s bringing Callum from the boathouse. Wear the blue.

She goes upstairs. The card stays on the table, with its cartoon strawberry and its coffee ring, in the middle of all that silver.

You stand in the hall and look at it. You\'ve never seen anything in this house that was allowed to be crooked.`,
      next: 'a1_hub'
    },
    a1_mother_keep: {
      text: `jules: Can I keep this?

Your mother looks at you. Then at the card. Then at you again.

catherine: It\'s a recipe for braciole, Juliet. We have a cook.

jules: I know.

She hands it to you. She does it slowly, the way she hands a scalpel to a resident she isn\'t sure of.

catherine: Don\'t use the cheap cheese.

It might be a joke. You\'ve never been able to tell with her. You look up, and she\'s already turning away, going up the stairs with her hand on the banister, and you can\'t see her face.

She stops on the landing without turning around.

catherine: Wear the blue tomorrow.

You put the card in your coat pocket next to Gran\'s die.`,
      next: 'a1_hub'
    },
    a1_mother_reach: {
      enter: g => { g.flag('mother6', 'reach'); g.bond('catherine', { trust: 1 }); },
      text: `jules: You could make it, you know. Just once. I\'d eat it.

Your mother looks at you over her reading glasses.

catherine: I don\'t cook, Juliet. You know I don\'t cook.

jules: I know.

catherine: My mother didn\'t cook. Her mother didn\'t cook. My hands are insured.

jules: I know, Mother.

She looks down at the card again. At the ballpoint. *Don\'t use the cheap cheese.*

catherine: …What\'s the cheap cheese?

jules: I think she means the pre-grated Parmesan. In the green can.

catherine: *Obviously* you don\'t use the green can. Who would use the *green can*.

She says it with such sincere outrage, about a cheese, that you laugh. You laugh out loud in the front hall of the house in Gladwyne, and your mother looks at you, startled, like she\'s never heard the sound before.

Maybe she hasn\'t.

catherine: Wear the blue tomorrow. And Juliet. You look…

She stops. She looks for the word. She doesn\'t find it.

catherine: Dinner\'s at eight.`,
      next: 'a1_hub'
    },

    /* ---------- Saturday morning hub ---------- */
    a1_hub: {
      loc: 'RAVENSCOURT · SATURDAY',
      clock: { day: 'Sat', date: 'Oct 3', time: '9:30 AM' },
      text: `Ravenscourt is a mile and a half from your parents' house and a century from everywhere else: a gray stone house on forty acres above the Schuylkill, with a slate roof and too many chimneys and, down a long path through the boxwoods, a small stone chapel built in 1891 that nobody has used for a service since 1956.

You haven\'t been inside the chapel since you were seven.

The game is at eight tonight. You have the day. Gran doesn\'t come downstairs until noon, and doesn\'t smoke until four, and won\'t speak to anyone about anything important before the cigarette.`,
      hub: {
        slots: 2, label: 'Saturday at Ravenscourt',
        blurb: 'The game is at eight.',
        options: [
          { id: 'sat6_horse', text: 'Ride Mercutio. He\'s boarded at Ravenscourt now. He bit Callum once. You love him.', cost: 1, tag: 'Mercutio', go: 'a1_horse' },
          { id: 'sat6_hugh', text: 'Hugh wants tennis. Hugh always wants tennis. Hugh has never once beaten you.', cost: 1, tag: 'Hugh', go: 'a1_hugh' },
          { id: 'sat6_callum', text: 'Callum\'s walking the grounds alone. Go walk with him.', cost: 1, tag: 'Callum', go: 'a1_callum' }
        ],
        done: 'a1_gran'
      }
    },

    a1_horse: {
      text: `Mercutio is a sixteen-hand bay gelding with a white blaze, a nasty sense of humor, and an unshakable conviction that you belong to him. He sees you coming across the stable yard and puts his ears forward and screams, a horse scream, the whole barn ringing with it.

You tack him up yourself. Gran\'s groom, Mr. Ostrowski, watches you do it and doesn\'t help, because he knows better.

You take him out across the back fields, down along the line of the river, the trees going red and gold on the bluff on the other side. It\'s cold. The air smells like apples and smoke. You let him have his head on the long flat stretch by the old wall, and he goes, all of him, flat out, and you lean down over his neck and the world goes away.

There\'s a stone wall at the end of the field. Four feet. You\'ve jumped it a hundred times.

You have never, until this second, wanted to fall.`,
      choices: [
        { text: 'Take the wall. Like always.', tag: 'Jump',
          check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 3, label: 'The wall', on: { crit: 'a1_horse_jump', success: 'a1_horse_jump', partial: 'a1_horse_jump', fail: 'a1_horse_jump', botch: 'a1_horse_jump' } } },
        { text: 'Take the wall, and at the last second, let go of the reins. Just to see.', tag: 'Let go',
          fx: g => { g.flag('horse6', 'letgo'); g.hidden('jules_debt', 1); }, go: 'a1_horse_fall' }
      ]
    },
    a1_horse_jump: {
      enter: g => { g.flag('horse6', 'jump'); },
      text: `He takes it like it\'s nothing. He always does. A gather, a lift, a long beautiful moment in the air over the old stones with the river shining off to your left, and then the landing, soft as a carpet.

You pull him up in the next field. He blows and dances and tosses his head, delighted with himself.

Everything was perfect. It always is.

You sit there on him in the cold, breathing hard, and you try to think of the last time anything came up anything else.

You can\'t remember.`,
      next: '@hub'
    },
    a1_horse_fall: {
      enter: g => { g.know('jules_fall_test', ['jules'], 'At Ravenscourt, Jules let go of the reins over a four-foot wall to see what would happen. She landed on her feet. Mercutio didn\'t.'); },
      text: `You take the wall, and at the top of it, in the long beautiful moment in the air, you open your hands.

You let go of the reins. You let go of everything. Just to see.

Mercutio *twists*.

You don\'t know how. Sixteen hands of horse twists in midair like a cat, and you come off him sideways, and the stone wall comes up at you, and the ground comes up at you, and the sky goes around once—

You land on your feet.

On your feet. Standing. In the next field, in the wet grass, in your good boots, with your hands still open in front of you. Not a scratch. Not a bruise. Not a hair out of place.

Behind you, there\'s a terrible sound.

Mercutio is down on his side on the far side of the wall, and he\'s getting up, he\'s getting up, thank God, but he\'s lame on his near fore, holding it off the ground, shaking his head, and there\'s blood on the stones where his leg caught them.

You run to him. You hold his head. He shoves his nose into your coat, trusting, the way he always does, and you stand there in the field holding your horse, who is hurt, who is hurt *because of you*, and you are not hurt at all.

*Bad luck comes back around*, Gran used to say, when you were small. *It has to go somewhere, child.*

You never asked her where.

Mr. Ostrowski says it\'s a sprain, and a cut, and he\'ll be sound in a month. He says *what luck you landed on your feet, Miss Juliet*. You don\'t answer. You stand in the stall with Mercutio for an hour, holding a cold hose on his leg, and you don\'t cry, because you don\'t, but you think about it.`,
      next: '@hub'
    },

    a1_hugh: {
      text: `Hugh is already on the grass court behind the house in tennis whites, bouncing a ball on his racket, looking like a Ralph Lauren ad that\'s about to say something cruel. Your twin. Golden, glib, eleven minutes older, and he\'s never let you forget a single one of them.

hugh: *Jubilee.* There she is. The prodigal Temple Owl.

jules: Hugh.

hugh: Best of three?

jules: You\'ve never won a set against me.

hugh: That\'s why it\'s *best of three*, Jubilee. Statistically, I\'m due.

He serves. It\'s a good serve. Hugh is genuinely good at tennis. He\'s genuinely good at most things, which is the tragedy of Hugh: he would be the best at everything, in any family but this one.`,
      choices: [
        { text: 'Play to win. Like always.', tag: 'Win',
          check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 3, label: 'Beat Hugh', on: { crit: 'a1_hugh_win', success: 'a1_hugh_win', partial: 'a1_hugh_win', fail: 'a1_hugh_win', botch: 'a1_hugh_win' } } },
        { text: 'Let him win. Just once. Hit everything into the net. See what happens.', tag: 'Let him',
          fx: g => { g.flag('hugh6', 'throw'); g.hidden('jules_debt', 1); }, go: 'a1_hugh_throw' }
      ]
    },
    a1_hugh_win: {
      enter: g => { g.flag('hugh6', 'win'); g.bond('hugh', { tension: 1 }); },
      text: `Six-two, six-one. Forty minutes.

Hugh throws his racket at the fence on the last point, and it bounces off and lands in the boxwoods, and he stands there with his hands on his hips, breathing hard, looking at you over the net.

hugh: How do you *do* that?

jules: Practice.

hugh: You don\'t practice. You *never* practice. I\'m out here four mornings a week with Coach Garrity and you play twice a year and you *destroy* me.

He goes to get his racket out of the hedge. With his back to you, he says, in a different voice:

hugh: You know what Gran told me, when we were ten? I was crying because you beat me at Monopoly six times in a row. She said, *Some Pembertons are lucky, Hugh, and some are just rich. Be grateful you\'re one of them.*

He pulls the racket out and turns around, smiling, the full golden Hugh smile, the one that gets him anything he wants from anyone except you.

hugh: I\'ve been trying to figure out which one I am for eight years, Jubilee.`,
      next: '@hub'
    },
    a1_hugh_throw: {
      enter: g => { g.know('jules_throw_test', ['jules'], 'Jules tried to let Hugh win at tennis. She couldn\'t. Every bad shot went in.'); g.bond('hugh', { tension: 2 }); },
      text: `You try to lose.

You hit the first serve into the net, on purpose. It clips the tape, hangs in the air on top of the net for a full second, and falls over on Hugh\'s side. Ace.

You hit the next one long, as long as you can, way out past the baseline. The wind picks it up, a gust out of nowhere, and drops it on the line. Chalk flies up. *In.*

You swing and miss completely on a return. The ball bounces off the frame of your racket and loops up in a ridiculous rainbow and drops just over the net where Hugh can\'t get to it.

Hugh stops playing. He stands on his baseline, staring at you.

hugh: What are you *doing*?

jules: Nothing.

hugh: You\'re trying to *lose*. I can see you trying to lose, Jules, it\'s *pathetic*, it\'s the most insulting thing you\'ve ever done to me, and you *still can\'t do it*—

He throws his racket. Not at the fence. At the ground. It cracks.

hugh: Six-love. Fine. Six-love. You win. You *always* win.

He walks off the court. He doesn\'t pick up the racket. You stand there with the ball in your hand.`,
      next: '@hub'
    },

    a1_gran: {
      clock: { time: '4:00 PM' },
      enter: g => { g.meet('constance'); g.bond('constance', { trust: 1 }); },
      text: g => `At four o\'clock exactly, your grandmother comes out onto the stone terrace above the river with a cigarette and a silver lighter and sits in the wrought-iron chair that nobody else is allowed to sit in.

Constance Pemberton is eighty-four. She\'s small and straight-backed, with white hair cut like a man\'s and eyes the color of a February sky, and she is the only person in your family you have never once been able to read at a card table.

She lights the cigarette. One a day. She\'s smoked one a day since 1958.

constance: Child.

jules: Gran.

You sit on the low wall across from her. She smokes. The river goes by below, slow and brown and full of leaves.

constance: You can\'t lose anymore.

It isn\'t a question. It\'s never a question, with Gran.

${g.f('horse6') === 'letgo' ? 'constance: Ostrowski tells me Mercutio is lame.\n\nYou don\'t say anything. She looks at you through the smoke.\n\nconstance: And that you landed on your feet.\n\n' : ''}${g.f('hugh6') === 'throw' ? 'constance: Your brother broke a racket this morning.\n\njules: I tried to let him win.\n\nconstance: Yes. I imagine you did.\n\n' : ''}jules: I never lost before, either.

constance: Before, you won. Now nothing is permitted to happen to you. There\'s a difference, and you know it, or you wouldn\'t be sitting on my wall at four o\'clock.

She taps the ash over the wall into the boxwoods.

constance: Something happened to you in August.

jules: …There was a blackout. At school. I was at a concert. A window came down on me, and every piece of glass missed.

constance: Of course it did.

She says it the way you\'d say *of course it rained*.

constance: Tonight, watch yourself. Not the cards. *Yourself*. Afterward, when the house is asleep, we\'ll talk.

jules: About what?

Gran looks at you through the smoke. Then she stubs out the cigarette, exactly half smoked, the way she always does.

constance: Whatever you think to ask me. I won\'t lie to you, child. Ask well.

She stands up, with her hand on the iron chair.

constance: Wear the blue. Your mother\'s right about the blue.`,
      next: 'a2_game'
    },

    a1_callum: {
      enter: g => { g.meet('callum'); g.bond('callum', { affection: 1 }); },
      text: `Callum is walking the long path down through the boxwoods with his hands in the pockets of a navy quarter-zip, looking at everything the way he looks at everything: openly, pleasantly, a golden retriever touring a museum.

callum: Jules! Hey. This place is *insane*. Your grandmother has a *chapel*.

jules: I know.

callum: Like, a real one. With a bell. Can we go in?

jules: No.

It comes out sharper than you meant. He blinks.

callum: Okay. Sure. Sorry.

He doesn\'t ask why. He never asks why. You\'ve been dating Callum Whitford for fourteen months, since the Merion Cricket Club summer dance before senior year, and in fourteen months he has never once asked you why about anything, and for a long time you thought that was restful.

You walk together along the path. He takes your hand. His hand is warm and dry and kind, an oarsman\'s hand, callused across the palm.

callum: Hey. I was thinking. For Thanksgiving. My parents are doing the Vineyard this year, the whole family, and my mom asked if you\'d come. She really likes you. Everybody really likes you.

He squeezes your hand.

callum: I really like you.

He says it the way he says everything, plainly, gratefully, as if you\'ve done him a favor just by existing. You look down at your hand in his. Pink and green embroidery floss on your wrist, badly knotted, a little frayed.

He sees it. He smiles.

callum: Cute bracelet. Is that new?`,
      choices: [
        { text: '"A friend\'s little sister made it." True. Every word.', tag: 'True',
          fx: g => { g.flag('callum6', 'true'); }, go: 'a1_callum_end' },
        { text: '"Simone made it." Easy. He\'ll never check.', tag: 'Lie',
          check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to Callum', on: { strong: 'a1_callum_lie', weak: 'a1_callum_lie', miss: 'a1_callum_lie' } } }
      ]
    },
    a1_callum_end: {
      text: `jules: A friend\'s little sister made it.

callum: That\'s so nice. That\'s so *you*. You\'re good with kids.

You\'ve never once been good with kids. You don\'t say that. He swings your joined hands a little as you walk, like you\'re both nine.

callum: So, Thanksgiving? The Vineyard?

jules: Can I think about it?

callum: Of course! Of course. Take all the time you want.

He means it. He\'d wait forever. That\'s the worst thing about him: that he\'d wait forever, pleasantly, and never once ask you why.`,
      next: '@hub'
    },
    a1_callum_lie: {
      enter: g => { g.flag('callum6', 'lie'); g.bond('callum', { trust: 1 }); },
      text: `jules: Simone made it.

It comes out light, easy, a little fond.

callum: Aw, that\'s sweet. Simone\'s great. She\'s so funny.

He swings your joined hands as you walk.

callum: So, Thanksgiving? The Vineyard?

jules: Can I think about it?

callum: Of course! Take all the time you want.

You walk on through the boxwoods holding his hand, with another boy\'s sister\'s bracelet on your wrist, and the lie sits in your mouth like a stone. It\'s the first lie you\'ve ever told Callum that wasn\'t *I love you too*. You thought it would be harder.

It wasn\'t hard at all. Nothing ever is.`,
      next: '@hub'
    }
  }
});
