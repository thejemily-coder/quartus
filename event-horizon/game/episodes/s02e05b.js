/* S2 · E5 · THE OPEN DOOR, part 2 of 4: Act Two ("Building Seven"). */
EH.scenes('s02e05', {

  /* ================= ACT TWO: BUILDING SEVEN ================= */
  a2_seven: {
    card: { kind: 'act', label: 'Act Two', title: 'Building Seven' },
    night: true,
    loc: 'NAVY YARD · BUILDING 7 · SEVENTH FLOOR',
    clock: { time: '12:22 AM' },
    text: g => `${g.f('call5') === 'nik' ? 'nik: Left. Left at the anchor. There\'s a giant anchor, you can\'t miss it, it\'s the size of a car. Now straight. The truck\'s still behind Building 10. They haven\'t moved. Nobody\'s moved. Bro, I hate this.' : g.f('call5') === 'vinnie' ? 'Your phone buzzes as you cross the yard. *south gate. 10 min. flashing twice.* A car door, very far off. Vinnie, somewhere in the dark, coming.' : g.f('call5') === 'mikey' ? 'Your phone buzzes as you cross the yard. *on 95. 15 min. DO NOT GO IN.* You put the phone away.' : ''}

You cross the yard, the two of you, past the dry dock with its great stone steps going down into black water, past a giant anchor set in the grass like a monument to something, to a brick building with new windows. Seven rows of them.

Stair B. The fire door on the ground floor is propped open with a folded piece of cardboard. Somebody wanted to make sure you could find it.

You go up. One. Two. Three. Jules is behind you, her hand on the rail, breathing hard and not saying anything. Six.

Seven.

The stair door is propped open with a fire extinguisher, just like Bree said. The hallway is white and lit and smells like a new car.

And on the floor outside 714, three people.

Heck sees you first. He gets up off his knees, slowly, like an old man, steam still coming off his shoulders in the cold hallway.

heck: *Papa.*

He grabs you and lifts you off the ground and holds you there, and he\'s so hot you can feel it through your coat, and he doesn\'t put you down for a long time.

heck: You came. Bree said you wouldn\'t. I said you would.

Teddy doesn\'t get up. He\'s sitting against the wall with his arms on his knees, and his arms are gray from the fingertips to the elbows, the dead flat gray of a pigeon on a statue.

teddy: Cold guy.

sam: What happened to your arms?

teddy: Eleven fifty-one happened. Whatever that was, it *pulled*. Like the floor had a drain in it and we were the water. I can still use them. I think. They just don\'t feel like mine.

Bree looks up at you. She opens her mouth. And out of it, perfectly, comes your own voice, from a phone call two hours ago, from your own bed:

*"Bree."*

She shuts her mouth. She looks at you, furious and terrified, and taps her throat twice.

teddy: Her voice is gone. Hers. She\'s got everybody else\'s. Mine, yours, the guy from the Wawa. Not hers.

Bree types on her phone and holds it up to your face.

*IT TOOK MY VOICE WAWA. IT TOOK THE ONE THAT WAS MINE.*

Then she looks past you, at Jules, standing in the doorway in a camel coat with a dart hole in it, and her eyebrows go all the way up.

Bree opens her mouth, and what comes out is Teddy\'s voice, flat and dry:

*"Who\'s this?"*

sam: Jules.

jules: Hello.

teddy: The girl from the Parkway. The one the darts missed.

He looks at her for a long moment, and then at you, and something in his tired face almost becomes a smile.

teddy: Huh. Okay. That explains some things.

${g.f('call5') === 'nik' ? 'nik: Is that Teddy? Tell Teddy I said hi. No. Don\'t. Tell him nothing. Bro, ask him about the floor.' : ''}

sam: Bree said there were more floors.

teddy: One more. Eight. It\'s not on the drawings and it doesn\'t have a number on the door. Marisol\'s up there, Kearney. She\'s alive. We saw her through the glass. Her and maybe twenty others, in beds, asleep. But that door\'s shut. Card reader. Red light. We looked for two hours for a card and found a bowl of fruit.

He tips his head down the hall. At the far end, the elevator stands open, lit, empty. Waiting.

teddy: And that\'s been open since 11:52. It doesn\'t close. I pushed the button. It doesn\'t go anywhere. It just stands there with its mouth open.

teddy: Listen. It\'s not for us. Nobody wanted us. We\'re the cheese.

sam: Then let\'s get Marisol and go before the mouse shows up.

heck: How? The door\'s locked, papa.

Everybody is looking at you. Jules too.`,
    choices: [
      { text: 'Heck burns it. Melt the lock and go. It\'ll be loud. Everything about tonight is loud.', tag: 'Burn it',
        fx: g => { g.flag('door5', 'burn'); g.hidden('halcyon_heat', 1); g.bond('heck', { trust: 1 }); }, go: 'a2_burn' },
      { text: 'Look at Jules. She\'s already looking at the card reader.', tag: 'Jules',
        fx: g => { g.flag('door5', 'luck'); g.hidden('jules_debt', 1); g.hidden('jules_open', 1); }, go: 'a2_luck' },
      { text: 'The glass room at the end of the hall. Whoever watches this floor sits in there. Whoever watches has a key.', tag: 'The glass room',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 12, label: 'Search the glass room',
          on: { crit: 'a2_glass', success: 'a2_glass', fail: 'a2_glass_slow', fumble: 'a2_glass_slow' } },
        fx: g => { g.flag('door5', 'glass'); } }
    ]
  },

  a2_burn: {
    night: true,
    loc: 'BUILDING 7 · STAIR B · THE EIGHTH LANDING',
    text: `Heck puts both hands flat on the steel door, one on each side of the card reader, and closes his eyes.

It takes about four seconds for the paint to blister, and ten for it to burn, and then the steel starts to glow. Dull red at first, like a stove coil. Then orange. The heat in the stairwell is so bad you have to back down a flight. Jules covers her face with her sleeve. Teddy stands his ground with his gray arms crossed, watching, and doesn\'t sweat at all.

The card reader melts and runs down the door like candle wax.

Somewhere above you, very quietly, an alarm starts. Not a bell. A tone. Polite. Like an elevator telling you which floor.

Heck pulls the door off its top hinge with one hand, the steel bending like a cookie sheet, and steps through it.

teddy: Well. They know we\'re here.

sam: They knew we were here before we got here.

teddy: Now they know we\'re *rude*.`,
    next: 'a2_ward'
  },

  a2_luck: {
    night: true,
    loc: 'BUILDING 7 · STAIR B · THE EIGHTH LANDING',
    text: g => `Jules goes up the last flight ahead of all of you, and stops in front of the steel door with no number, and looks at the card reader the way she looks at a dealer.

jules: I\'ve never done this on purpose.

sam: You just did it to twenty traffic lights.

jules: That was *traffic*. This is a lock.

She doesn\'t touch it. She stands in front of it with her hands at her sides and breathes out. Long and slow. Letting it go. You can see her shoulders come down.

Nothing happens.

She breathes out again.

And somewhere inside the wall there\'s a click, the small soft click of a system rebooting, and the little red light on the card reader blinks, and blinks, and goes green.

The door hisses and swings open an inch.

Behind you, on the landing below, the light fixture on the ceiling pops. Just pops, a sharp little bang, and glass sprinkles down the stairs onto Teddy\'s shoulders. He brushes it off and looks up at the dead bulb, and then at her.

teddy: Huh.

Jules is standing very still with blood on her lip.

jules: Near us. It\'s always near us.

${g.hv('jules_debt') >= 6 ? 'She says it so quietly you\'re not sure she meant to say it out loud. She\'s pale. She looks like someone doing arithmetic and not liking the answer.' : 'She says it like a fact she\'s reminding herself of. Then she pushes the door open.'}`,
    next: 'a2_ward'
  },

  a2_glass: {
    night: true,
    loc: 'BUILDING 7 · THE GLASS ROOM',
    enter: g => { g.know('es_screen', ['sam', 'jules'], 'In the glass room on the seventh floor of Building 7, the screens listed Halcyon\'s subjects by number. ES-17: KEARNEY, SALVATORE. ES-44: PEMBERTON, JULIET. "PRIORITY. DO NOT RECOVER. OBSERVE." A second pulse was scheduled for 00:51:04.'); g.flag('badge5'); },
    text: `The door at the end of the hall has dark glass in it and a lock you could open with a credit card. You open it with a credit card. Grace taught the whole ninth floor in September, for when Devontae locks himself out.

Inside: a small dim room, two chairs, a bank of monitors, a desk. A mug on the desk, still warm. Earl Grey. The tea bag is folded neatly on a napkin beside it.

And on the back of the chair, hanging by its lanyard, like somebody forgot it, or wanted it found: a white key card. *HALCYON DYNAMICS · VISITOR.*

You take it.

Then you look at the monitors.

One of them is thermal: the seventh floor, gray and black, and five shapes in the hallway, three of them blue. Another shows the eighth floor, rows of beds, people in them, still. Another is a list.

A long list, in a small clean font, of numbers and names.

*ES-09 · KOWAL, THEODORE · ACTIVE · DRAW 31%*
*ES-10 · KOWAL, BRIANNA · ACTIVE · DRAW 40%*
*ES-17 · KEARNEY, SALVATORE · PRIORITY · NOT PRESENT 23:51*
*ES-22 · RAMOS, HECTOR · ACTIVE · DRAW 18%*
*ES-26 · REYES, MARISOL · RESIDENT · 8-03*

And, near the bottom, highlighted in pale yellow:

*ES-44 · PEMBERTON, JULIET · PRIORITY · DO NOT RECOVER · OBSERVE*

Jules is standing behind you. You hear her stop breathing.

jules: Forty-four.

She says it the way you\'d read your own name on a gravestone.

jules: I\'m forty-four. You\'re seventeen. We\'re *numbers*, Sam. Somebody typed us.

At the bottom of the screen, a single line, blinking:

*SECOND DRAW · 00:51:04 · STANDBY*

You look at the clock in the corner of the monitor. 12:27.

sam: Twenty-four minutes.

jules: Until what?

sam: Until it happens again.

She takes the card out of your hand, turns it over, looks at it, and gives it back.

jules: Then we have twenty-four minutes. Let\'s not spend them reading about ourselves.`,
    next: 'a2_ward'
  },

  a2_glass_slow: {
    night: true,
    loc: 'BUILDING 7 · THE GLASS ROOM',
    enter: g => { g.flag('badge5'); g.flag('late5'); g.hidden('halcyon_heat', 1); g.know('es_screen', ['sam', 'jules'], 'In the glass room on the seventh floor of Building 7, the screens listed Halcyon\'s subjects by number. ES-17: KEARNEY, SALVATORE. ES-44: PEMBERTON, JULIET. "PRIORITY. DO NOT RECOVER. OBSERVE." A second pulse was scheduled for 00:51:04.'); },
    text: `The door at the end of the hall has dark glass in it and a lock that doesn\'t want to open. You try a credit card, the way Grace taught the ninth floor in September. It doesn\'t work. You try it again. Heck offers to burn it and you say no, and Teddy says *just let him*, and Bree says, in your own voice, *"Marisol first,"* and you get it open on the fifth try with your hands shaking.

Inside: two chairs, a bank of monitors, a mug of Earl Grey gone cold. The tea bag is folded on a napkin. A white key card hangs from the back of a chair. *HALCYON DYNAMICS · VISITOR.*

You find it on the second pass. You\'d looked right at it. It\'s the kind of thing that\'s easy to miss when somebody wants you to take your time.

On the monitors: a list of names and numbers.

*ES-17 · KEARNEY, SALVATORE · PRIORITY · NOT PRESENT 23:51*

And at the bottom, in pale yellow:

*ES-44 · PEMBERTON, JULIET · PRIORITY · DO NOT RECOVER · OBSERVE*

Jules reads it over your shoulder. She doesn\'t say anything at all. She reaches past you and touches the screen, her own name, with one fingertip, like she\'s checking whether it\'s real.

At the bottom of the screen, blinking:

*SECOND DRAW · 00:51:04 · STANDBY*

The clock in the corner says 12:36.

sam: Fifteen minutes.

From down the hall, Teddy\'s voice:

teddy: Kearney. The elevator just closed.

You look up. Down the hall, the elevator doors are shut. The little arrow above them is lit. *Down.*

teddy: It\'s going to get somebody.`,
    next: 'a2_ward'
  },

  a2_ward: {
    night: true,
    loc: 'BUILDING 7 · THE EIGHTH FLOOR',
    text: g => `${g.f('door5') === 'glass' ? 'The card reader on the door with no number takes the visitor card and blinks green, politely, as if you\'re expected. Of course you are.\n\n' : ''}The eighth floor is cold.

Not your cold. Air-conditioning cold, hospital cold, the cold of a place where somebody decided the people in the beds would keep better. The light is dim blue. The machines blink green. Somewhere a pump sighs, every four seconds, like something breathing for somebody.

Twenty-two beds. You count. Twenty-two people, on their backs, with their hands folded on the blankets. Old and young. A man in his seventies with a beard. A girl younger than Gigi. A woman in a hijab with her mouth slightly open. Each one with a whiteboard at the foot of the bed, the kind they have in hospitals, *YOUR NURSE TODAY IS:*, and on each whiteboard, in neat blue marker, a number. *ES-03. ES-14. ES-38.*

Heck is already at the third bed on the left.

She\'s smaller than you expected. Nineteen. Her head is shaved and there are little round marks on her scalp where something was stuck to it. A lightbulb on the inside of her wrist.

*ES-26.*

Heck kneels down beside the bed. He doesn\'t touch her. He\'s afraid of his own hands.

heck: Mari. Mari, it\'s me. It\'s Heck. From Lehigh Avenue. You texted me in September. You said come to McPherson.

Nothing. The pump sighs.

heck: It wasn\'t you that texted. I know it wasn\'t you. I came anyway.

Teddy is at the IV pole. He looks at the bag, at the line, at the tape on her arm.

teddy: Listen. We pull this, she wakes up in an hour, maybe two. Heck carries her. We go down the stairs. That\'s the plan. That\'s the whole plan.

sam: There are twenty-one other people in here, Teddy.

teddy: I can count.

The girl who is younger than Gigi has a stuffed rabbit tucked under her arm. Somebody gave her that. Somebody here.

${g.f('call5') === 'nik' ? 'nik: Bro. The truck. The truck\'s engine just changed. They\'re not idling anymore. I don\'t know what that means. I think it means something.' : ''}

Jules is standing at the foot of an empty bed. On the whiteboard, in the same neat blue marker, a number, and nothing else. No name. No person. Just the bed, made, waiting, with the corner of the blanket turned down.

*ES-44.*

${g.knows('es_screen', 'jules') ? 'She doesn\'t move. She knew already. Knowing doesn\'t help.' : 'She reads it. You watch her read it. You watch her understand what it means, all at once, standing there in her camel coat.\n\njules: Is that—\n\nsam: Yeah.\n\njules: They made my bed.'}`,
    choices: [
      { text: 'Marisol. Just Marisol. That\'s the promise. You can\'t carry twenty-two people down seven flights, and you know it, and so does he.', tag: 'Just Marisol',
        fx: g => { g.flag('ward5', 'one'); g.hidden('revenant_drift', -1); g.bond('teddy', { respect: 1 }); }, go: 'a2_ward_one' },
      { text: 'Marisol. And every bed, every face, every number, on your phone. Somebody at the Inquirer is waiting for proof.', tag: 'Photograph them',
        fx: g => { g.flag('ward5', 'photos'); g.flag('late5'); g.hidden('halcyon_heat', 1); }, go: 'a2_ward_photos', if: g => g.f('dana4') === 'halcyon' },
      { text: 'Everybody. Pull every line. Wake them up. Nobody stays on this floor tonight. Not one.', tag: 'Everybody',
        fx: g => { g.flag('ward5', 'all'); g.flag('late5'); g.hidden('revenant_drift', 1); }, go: 'a2_ward_all' }
    ]
  },

  a2_ward_one: {
    night: true,
    enter: g => { g.flag('marisol_out'); },
    text: `sam: Marisol.

Teddy looks at you, and nods once, like you passed something.

He pulls the tape off her arm with his gray fingers, gently, and slides the line out, and presses his thumb on the place where it was. Heck lifts her off the bed, blanket and all, the way you\'d lift a sleeping kid out of a car, and holds her against his chest.

She weighs nothing. Her head falls against his shoulder.

heck: I got you, Mari. I got you.

You look back once, from the door. Twenty-one people in beds. The girl with the rabbit. The man with the beard.

Jules is looking back too.

jules: We\'ll come back.

sam: Yeah.

Neither of you says it like you believe it. You say it anyway. You have to say something to the beds.`,
    next: 'a3_elevator'
  },

  a2_ward_photos: {
    night: true,
    enter: g => { g.flag('marisol_out'); g.flag('photos5'); g.know('ward_photos', ['sam', 'jules'], 'You photographed every bed on the eighth floor of Building 7: twenty-two sedated Changed, each with an ES number on a whiteboard. One empty bed was made up for ES-44.'); },
    text: `sam: Marisol. Go. Give me ninety seconds.

You go down the rows with your phone.

Every bed. Every face. Every whiteboard. *ES-03. ES-14. ES-38.* The old man\'s beard, the woman in the hijab, the girl with the rabbit. The IV bags with their printed labels. The pump on the wall with *HALCYON DYNAMICS · CLINICAL* stamped on its side. The flash goes off every time and lights up a face that doesn\'t flinch.

You do the empty bed last. *ES-44.* The blanket turned down.

Jules watches you take it and doesn\'t say anything.

Behind you, Teddy has the line out of Marisol\'s arm, and Heck has her, blanket and all, against his chest.

teddy: Kearney. Ninety seconds was a minute ago.

sam: I\'m done.

You\'ve got two hundred and six photos. Your hands are shaking so badly half of them are going to be blurry.

You think about Dana Fiorillo saying *I\'ll find something I can print.*`,
    next: 'a3_elevator'
  },

  a2_ward_all: {
    night: true,
    enter: g => { g.flag('marisol_out'); g.know('revenant_ward', ['sam', 'jules'], 'On the eighth floor of Building 7, an old woman, ES-03, woke long enough to say: "The old man comes at night. He sits with us. He has your face."'); },
    text: `sam: All of them.

teddy: Kearney—

sam: *All* of them. Pull the lines. Every one.

You start at the end of the row. Tape, line, thumb. The way Teddy did it. Your hands aren\'t as steady. The man with the beard. The woman in the hijab. The girl with the rabbit. Jules is doing the other row, fast, precise, like she\'s done this, like she grew up in her mother\'s hospital, which she did.

Nobody wakes up.

You do six. Eight. Ten. Nobody wakes up. The pump keeps sighing. You can\'t carry ten people down seven flights. You can\'t carry two. You knew that. You know that.

At the eleventh bed, an old woman, eighty if she\'s a day, *ES-03*, opens her eyes.

She looks at you. Her eyes are very clear.

ES-03: Not tonight, sweetheart.

sam: Ma\'am, we\'re getting you out—

ES-03: You can\'t. Not tonight. Tonight you run.

She takes your hand in her dry old hand.

ES-03: The old man comes at night. He sits in that chair. He has your face. He cries, sometimes.

Her eyes close.

You stand there holding her hand.

teddy: *Kearney.* We have Marisol. We have to go. Now.

Ten lines out. Ten people who won\'t wake for hours, and who will wake up here, in these beds, with somebody\'s hand on the tape again.

You did it anyway. You don\'t know if that\'s brave or if it\'s the other thing.`,
    next: 'a3_elevator'
  }
});
