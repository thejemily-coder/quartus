/* S1 · E9 · THINGS THAT DON\'T ADD UP, part 3 of 3: Act Three ("Ghost Light"), Act Four ("The Last Job"), tag, polls. */
EH.scenes('s01e09', {

  /* ================= ACT THREE: GHOST LIGHT ================= */
  a3_strike: {
    card: { kind: 'act', label: 'Act Three', title: 'Ghost Light' },
    night: true,
    loc: 'RANDALL THEATER · TEMPLE UNIVERSITY',
    clock: { day: 'Fri', date: 'Nov 6', time: '10:30 PM' },
    enter: g => { g.sleep(6); if (!g.f('did_hub_weisz')) { g.flag('phl_paper9', 'late'); g.grade('phl', -3); } },
    text: g => `Simone texts you Friday afternoon.

TXT simone: Salvatore. Strike is tonight. We are short two bodies who can lift a flat. You have a body. Randall, 7pm. Wear shoes you hate.

You go. Of course you go.

Striking a set is taking it apart: the castle walls of *DRACULA: A Musical (Unauthorized)*, which turn out to be plywood flats painted gray on one side and blank on the other, and the staircase to the crypt, which turns out to be three rolling platforms bolted together, and a coffin with a hinged lid that the stage manager tells you to *be careful with, that\'s our good coffin*. You carry flats to the dock with a sophomore named Marcus who sings the Van Helsing ballad the whole time under his breath. By ten-thirty, the stage is bare black boards, and everybody\'s gone home but you and Simone.

She goes into the wings and comes back out wheeling a tall metal pole on casters, with a bare bulb in a little wire cage on top. She sets it down at the center of the empty stage and plugs it in.

The bulb comes on. Everything else is dark.

simone: Do you know what that is?

sam: A lamp.

simone: It\'s a *ghost light*. Every theater in the world leaves one on, center stage, when everybody goes home. Some people say it\'s so nobody falls into the pit in the dark. That\'s the boring answer.

She sits down on the edge of the stage, with her legs hanging over where the band was. You sit beside her.

simone: The real answer is it\'s for the ghosts. Every theater has them. So you leave them a light, so they can do their shows when we\'re gone.

She looks at the bulb.

${g.f('femi_end') === 'found' ? 'simone: He was sitting against your door for ten minutes, Salvatore. I walked past your door twice. To the bathroom and back. Twice.' : 'simone: I was ten feet from him, Salvatore. In the stairwell door, in my Van Helsing coat. Ten feet.'} I\'m supposed to be the one who sees things. That\'s my *whole personality*.

simone: Turns out I only see things about my friends.

She takes out her phone. She unlocks it and opens the Notes app, and turns it around, and holds it out to you.

**Things That Don\'t Add Up About Salvatore Kearney**

*1. Nosebleeds. Since August 22. Nineteen that I have personally witnessed. Nobody gets nineteen nosebleeds.*
*2. The Wawa Guy video. Left sneaker, split at the toe. Your left sneaker is split at the toe.*
*3. You eat like a man who has been lost in the woods for a week. Every day.*
${g.f('fire') === 'stayed' ? '*4. Labor Day weekend, the blackout: you and Juliet on the roof until sunrise. Then Callum showed up with iced coffee and you looked like he\'d hit you with the cup.*' : '*4. Labor Day weekend, the blackout: Juliet told Grace you were in the bathroom. For an hour. You came back up nine flights smelling like the fire on 15th Street. Juliet tells me things. She doesn\'t know she\'s telling me.*'}
*5. September. You came home at 3 a.m. with a face like a dropped pie, and Grace and Juliet sewed you up on the bathroom floor. Juliet came back to our room with your blood on her cuffs and didn\'t say one word. Juliet ALWAYS says words.*
*6. Your hands are cold. All the time. In October.*
*7. You saw him. Nobody saw him. You knew his name.*
${g.f('grief') === 'rage' ? '*8. Nik: "Whatever they did to him, they want to do to you." Nik is the worst liar in North America. He wasn\'t lying.*' : '*8. Nik won\'t look at me when your name comes up. Nik can\'t keep a secret to save his life. He\'s keeping one.*'}

You read it twice. She lets you.

simone: I don\'t let a lie slide forever. You know that about me. I give people exactly one chance to tell me themselves.

simone: This is yours.`,
    choices: [
      { text: 'Tell her. All of it. The Hitch, the Slip, the bus, the cold. Femi.', tag: 'Open Up',
        check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Tell Simone', on: { strong: 'a3_tell', weak: 'a3_tell', miss: 'a3_tell_rough' } } },
      { text: 'Don\'t tell her. Show her.', tag: 'Show her', slip: true,
        fx: g => { g.flag('simone9', 'show'); if (g.S.drift >= 9 || g.hv('revenant_drift') >= 10) g.flag('unstick9'); }, go: 'a3_show' },
      { text: '"Simone. I get nosebleeds. I eat a lot. I knew a guy from Calc. That\'s the list."', tag: 'Lie',
        check: { kind: 'move', move: 'Cover Story', attr: 'charm', skill: 'lie', label: 'Lie to Simone', on: { strong: 'a3_lie', weak: 'a3_lie', miss: 'a3_lie' } } }
    ]
  },
  a3_tell: {
    night: true,
    enter: g => { g.flag('simone9', 'told'); g.heat('simone', 10); g.know('sam_slip', ['simone']); g.bond('simone', { trust: 3, affection: 2 }); g.hidden('revenant_drift', -1); },
    text: `You tell her.

You tell her about 11:51 and the cold and the bus on Broad and Jayden. The Wawa. The armored car on Broad that you couldn\'t move. Girard and the frost. Kensington and Heck\'s fists. Under 95 and Pop on his knees. The Slip and how it feels, which is like January, and how you come out of it starving, and how your nose bleeds.

You tell her about Femi. How you could see him. How he came to find you.

You don\'t tell her about Room 714. You don\'t tell her about *17*. You don\'t know why you keep those. You keep them.

It takes forty minutes. She doesn\'t interrupt once, which for Simone Okonkwo-Hayes is a physical feat on the order of holding her breath underwater.

When you\'re done, she\'s quiet. The ghost light buzzes.

simone: Okay.

She nods.

simone: Okay.

She nods again. Then she reaches over and hits you on the arm, hard, with a closed fist.

sam: *Ow.*

simone: That\'s for August. And September. And the bathroom floor. And for letting me find out from a *list*.

She hits you again, softer.

simone: That\'s for Femi. I know it\'s not your fault. I\'m doing it anyway.

Then she puts her arms around your neck and holds on, and she smells like stage makeup and sawdust, and she says into your shoulder:

simone: Salvatore Kearney. If you die, I will kill you.`,
    next: 'a3_lists'
  },
  a3_tell_rough: {
    night: true,
    enter: g => { g.flag('simone9', 'told'); g.heat('simone', 10); g.know('sam_slip', ['simone']); g.bond('simone', { trust: 2, affection: 1 }); g.hidden('revenant_drift', -1); },
    text: `You try to tell her. You start at the beginning, at 11:51, and you get as far as the bus on Broad before your voice goes.

So it comes out wrong. Out of order. The Slip and then Femi and then the bus again, Jayden, the cold, Pop on his knees under 95, Femi\'s eyes, open. You say *I was on the roof* four times. You don\'t know you\'re crying until she hands you a tissue from the pocket of her coat, and then another, and then the whole packet.

She doesn\'t interrupt. When you run out, she\'s quiet for a while. The ghost light buzzes.

simone: Okay.

She takes the tissue packet back, looks at it, and gives it back to you.

simone: Okay. I\'ve got it. I\'ve got the shape of it. You can do the details later. You can do the details for *weeks*.

She puts her arm around your shoulders.

simone: Salvatore Kearney. If you die, I will kill you.`,
    next: 'a3_lists'
  },
  a3_show: {
    night: true,
    enter: g => { g.flag('simone9', 'show'); g.heat('simone', 10); g.know('sam_slip', ['simone']); g.bond('simone', { trust: 2, respect: 2 }); if (g.f('unstick9')) { g.drift(1); g.hidden('revenant_drift', 1); g.injure({ id: 'frostnip9', name: 'Frostnipped fingers', pen: 1, heal: 2, affects: ['reflex'] }); g.know('revenant4', ['sam'], 'In the Slip, in the empty Randall Theater, the man who stands like you was sitting in row M. He was moving. He said, in your voice: "Get out before it closes."'); } },
    text: g => `You don\'t say anything. You stand up.

You step through.

It\'s January. The ghost light stops buzzing. Its bulb stays lit, but the light doesn\'t move anymore. It hangs in the air like something poured. Simone is frozen on the edge of the stage with her phone held out, her mouth half-open on whatever she was going to say next.

${g.f('unstick9') ? `You turn to walk down into the house, and the cold gets *colder*.

You know this cold. Under 95. The frozen river. The ice closing over your head.

You can feel it start to close. You can feel the walls of the second getting thick.

And in the dark, in the empty theater, in row M, something moves.

There\'s a man sitting in the middle of row M with his hands folded in his lap, the way people sit at a show they\'ve paid for. He\'s watching the stage. He\'s watching Simone under the ghost light. Then he turns his head, slowly, and he looks at you.

Nothing moves in the Slip but you. He moves.

Your face. Older. Gray at the temples. A scar through his lip. His left hand on the armrest with a gap where the ring finger should be. His eyes are red. Not from tonight. From years.

He speaks. It\'s your voice, worn down to the wire.

old_sam: Get out before it closes.

You blink. The seat is empty. There\'s frost on the armrest in the shape of a hand.

The ice is at your chest. You grab for anything, and what you grab is the sound of Simone\'s voice two minutes ago, *Salvatore, I give people one chance*, and you pull on it like a rope, and you pull, and you pull—` : `You walk down the stage steps into the house. Up the aisle. Your footsteps don\'t echo. Nothing echoes in here.

You sit down in row M, in the middle, in the seat with the best view of the ghost light. You fold your hands in your lap like you paid for a ticket.

You step back out.`}

The ghost light buzzes.

simone: —this is yours, Salv—

She stops. She\'s looking at the empty space beside her on the edge of the stage. Then she\'s looking out into the house, into the dark, because something in the dark said her name.

simone: …Salvatore?

You\'re sitting in row M. ${g.f('unstick9') ? 'Your fingers are white to the second knuckle. There\'s frost in your eyebrows. Your nose is bleeding onto your shirt, and you can\'t stop shaking.' : 'There\'s frost on the armrest under your hand. Your nose is bleeding a little.'}

Simone stands up on the stage. She looks at the empty edge where you were sitting. She looks at you, forty feet away, in the dark.

She doesn\'t scream. She doesn\'t say *oh my God*. She puts her hand flat on her chest, over her heart, the way she does at the end of the Van Helsing ballad.

simone: Okay.

simone: Okay. Okay. Okay.

She sits back down on the edge of the stage, hard.

simone: That\'s— okay. I\'m going to need you to come back up here and explain that to me at a normal human speed.`,
    next: 'a3_lists'
  },
  a3_lie: {
    night: true,
    enter: g => { g.flag('simone9', 'lied'); g.heat('simone', 10); g.know('sam_slip', ['simone']); g.bond('simone', { trust: -2, respect: -1 }); },
    text: `sam: Simone. I get nosebleeds. I eat a lot. I knew a guy from Calc. That\'s the list.

She looks at you. She doesn\'t say anything for a moment. Then she takes the phone back, and turns it around, and types something, and turns it back to you.

*9. He lied when I gave him the chance.*

simone: That was your one.

She puts the phone in her coat.

simone: I know, Salvatore. I *know*. I\'ve known since about number four. I wanted you to tell me. That\'s all. I wanted to be somebody you\'d tell.

She stands up, and brushes the sawdust off the back of her coat.

simone: I\'m not going to say anything to anybody. Don\'t insult me by asking.`,
    next: 'a3_lists'
  },
  a3_lists: {
    night: true,
    enter: g => { g.know('simone_two_lists', ['sam', 'simone'], 'Simone has two lists. One was about you. The other one, she says, "isn\'t mine to tell."'); },
    text: g => `Later, when the theater is locked and you\'re walking back up Liacouras Walk in the cold, she says it.

simone: Does Juliet know?

sam: No.

simone: Hm.

She walks a few more steps.

sam: What does *hm* mean?

simone: It means I have two lists.

You stop walking.

sam: Two?

simone: Things That Don\'t Add Up. One is about you. Now it\'s closed. Well. It\'s *mostly* closed.

sam: What\'s the other one?

simone: That one\'s not mine to tell, Salvatore.

She keeps walking. You catch up.

simone: I gave you your chance. I\'m going to give her hers.

sam: *Her.*

simone: I didn\'t say *her*. You said *her*. Goodnight.

She goes into Cardone ahead of you, and swipes in, and doesn\'t look back, and you stand on Broad Street under the streetlight with *her* in your head and nowhere to put it.`,
    next: 'a4_portrichmond'
  },

  /* ================= ACT FOUR: THE LAST JOB ================= */
  a4_portrichmond: {
    card: { kind: 'act', label: 'Act Four', title: 'The Last Job' },
    loc: 'EDGEMONT STREET · PORT RICHMOND',
    clock: { day: 'Sat', date: 'Nov 7', time: '5:30 PM' },
    enter: g => { g.sleep(7); g.meet('teddy'); g.meet('bree'); g.meet('heck'); },
    text: g => `Bree texted Saturday at noon.

TXT bree: wawa. pierogi. tonight. 5:30. teddy wants to see you. he said "the deal." he said it like a cop show
TXT bree: also my aunt wants to meet you. dont ask. just come

The Kowals live in a rowhouse on Edgemont Street with a Polish flag in the window and a plaster Virgin Mary in the six-foot front yard wearing a little knit scarf somebody made her. Bree opens the door before you knock.

Inside, it\'s warm, and it smells like onions frying in butter, and there\'s a machine in the living room.

It\'s the size of a carry-on suitcase, on a cart beside the recliner, with a screen and two clear tubes, and it hums. Halina Kowal is in the recliner under a crocheted blanket, a small woman with Teddy\'s tired eyes, and the tubes go under the blanket. She has a rosary in one hand and a TV remote in the other, and a *Wheel of Fortune* rerun is on.

HALINA: You\'re the Wawa boy.

sam: Yes, ma\'am.

HALINA: Theodore says you are a good boy. Theodore does not say this about anybody. Sit. Eat. You are too skinny.

Heck is in the kitchen, enormous, at the stove in an apron that says *KISS THE COOK* in Polish, turning pierogi in a cast-iron pan with his bare fingers. A two-year-old in a bumblebee costume is sitting on the counter beside him, eating a pierogi with both hands. When he sees you, he grins his whole face.

heck: Papa! You came. Sit, sit. Yesenia, say hi to Sam.

Yesenia throws a piece of pierogi at you.

Teddy is at the kitchen table with a laptop and a legal pad and a mug of tea. He doesn\'t get up. He looks at you the way he looks at everything, like he\'s already tired of what you\'re about to say.

teddy: Listen. Sit down.

You sit. Bree puts a plate in front of you: six pierogi, potato and cheese, fried in onions, with sour cream. You eat all six before anybody says anything. Heck puts six more on your plate without asking.

Then you tell them.

About Femi. About the stairwell, and the marrow. About the note.

sam: Marisol\'s alive. Room 714. ${g.knows('building7') || g.knows('femi_left_b7') || g.f('kissed') ? 'Building 7, at the Navy Yard.' : 'Somewhere in Halcyon\'s buildings at the Navy Yard.'}${g.knows('building7') ? ' On a floor that isn\'t on the drawings.' : ''}

Heck puts down the spatula.

heck: Marisol.

He says it quietly. The pan sizzles.

heck: They used her phone. To get me to McPherson. I thought she was dead. I lit a candle. My tía lit a candle.

heck: We go get her. Tonight.

teddy: No.

heck: Teddy—

teddy: *No.* Not tonight.

He turns the laptop around. It\'s a spreadsheet. Numbers. Halina\'s name at the top. *JEFFERSON TRANSPLANT EVAL · DEPOSIT · $40,000*. A column of zeroes, and one line that says *ShopRite (T+B) · $1,140*.

teddy: You know what this is? This is my mother. I had forty grand in October. I had it in my *hand*, under 95, and I let it go, because it was your father on his knees, and it was ${g.f('under95') === 'slip' ? 'you' : 'you asking'}.

He doesn\'t raise his voice. Teddy never raises his voice.

teddy: I\'m not asking you for it. I\'m telling you why. One more job. The last one. Then we have Mom\'s money, and enough to get out of this city, and *then* we go get Marisol. All of us. I promise you, Heck. After.

Behind him, on the refrigerator, under a magnet shaped like a pierogi, there\'s a printout. A map. Something with a route drawn on it in yellow highlighter, and a date circled in red.`,
    choices: [
      { text: '"Don\'t. Whatever it is. Halcyon\'s watching all of us now. Come with me and get Marisol instead."', tag: 'Talk him down',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Talk Teddy out of it', on: { strong: 'a4_teddy_strong', weak: 'a4_teddy_weak', miss: 'a4_teddy_miss' } } },
      { text: 'Don\'t argue. Eat. Get up for a glass of water. Read the map on the fridge.', tag: 'Read the fridge',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 10, label: 'Read the map', on: { crit: 'a4_map_good', success: 'a4_map_good', fail: 'a4_map_bad', fumble: 'a4_map_bad' } } },
      { text: '"Marisol first. Then whatever you want. I\'ll be there for Marisol."', tag: 'Marisol first',
        fx: g => { g.flag('teddy9', 'marisol'); g.flag('crew_marisol'); g.bond('heck', { trust: 2, affection: 1 }); g.bond('teddy', { respect: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a4_marisol' }
    ]
  },
  a4_teddy_strong: {
    enter: g => { g.flag('teddy9', 'wavering'); g.flag('crew_marisol'); g.bond('teddy', { trust: 2, respect: 1 }); g.know('teddy_offer', ['sam', 'teddy'], 'Teddy: "Find me forty grand by the 26th, and I\'ll think about it."'); },
    text: `sam: Don\'t. Whatever it is. Halcyon was at my door a week ago. They\'re watching all of us, Teddy. Every one of us they can find. You pull a job now, you\'re not robbing a truck. You\'re putting up a flare.

sam: Come with me and get Marisol instead. Heck\'s right. Before they do to her what they did to Femi.

Teddy looks at you a long time. He looks at the spreadsheet. He looks across the room at his mother in the recliner, who is watching *Wheel of Fortune* and pretending not to listen and mouthing *Sam is right* at the TV.

teddy: Find me forty grand by the twenty-sixth, cold guy.

sam: Teddy—

teddy: Find me forty grand by the twenty-sixth, and I\'ll think about it. That\'s the best I got.

He closes the laptop.

teddy: And yes. Marisol. Heck\'s right. We do that together. That\'s the deal. Halcyon comes for one of us, we call the others. Halcyon already came.`,
    next: 'a4_bree'
  },
  a4_teddy_weak: {
    enter: g => { g.flag('teddy9', 'firm'); g.flag('crew_marisol'); g.bond('heck', { trust: 1 }); },
    text: `sam: Don\'t. Halcyon\'s watching all of us now. You pull something, you\'re putting up a flare. Come get Marisol with me instead.

Teddy shakes his head.

teddy: You don\'t get to tell me no, cold guy. You don\'t know what it\'s like to watch your mother hooked up to a suitcase.

Heck puts his big hand on the table between you.

heck: Teddy. Marisol.

Teddy is quiet. Then:

teddy: After. I swear on Mom. After the job, we go get Marisol. All of us. Sam too.

He looks at you.

teddy: That\'s the deal. You want in on Marisol, you wait till after.`,
    next: 'a4_bree'
  },
  a4_teddy_miss: {
    enter: g => { g.flag('teddy9', 'angry'); g.bond('teddy', { trust: -1, tension: 2 }); },
    text: `sam: Don\'t. Whatever it is. You\'re gonna get somebody killed.

It comes out wrong. It comes out like a cop. Like Mikey.

Teddy goes very still.

teddy: Somebody already got killed. Somebody gets killed every day. My mother is getting killed in that chair, slow, three days a week.

He stands up.

teddy: You ate. That\'s good. Now you should go.

HALINA: Theodore.

teddy: Mom, he\'s going.

Bree gets your coat.`,
    next: 'a4_bree'
  },
  a4_map_good: {
    enter: g => { g.flag('teddy9', 'map'); g.know('teddy_parade', ['sam'], 'On Teddy\'s refrigerator: a map of the Thanksgiving Day Parade route, JFK Boulevard to the Art Museum steps, with the Parkway highlighted. November 26 is circled in red.'); },
    text: `You don\'t argue. You get up for a glass of water.

At the sink, with your back to the table, you look at the refrigerator.

It\'s a map of Center City printed off a website. A route in yellow highlighter, starting at 20th and JFK, running up the Benjamin Franklin Parkway to the steps of the Art Museum. Little circles drawn at the intersections, numbered one to six, in Teddy\'s small careful handwriting. A logo at the top corner, half torn off: *6abc Dunkin\'*.

And under the pierogi magnet, the date, circled twice in red. **THU NOV 26.**

Thanksgiving. The parade.

Hundreds of thousands of people standing on the sidewalk in the cold, watching balloons.

You drink your water. You come back and sit down. Teddy watches you sit down, and you can\'t tell if he saw you look.

teddy: After the job, we get Marisol. All of us. That\'s the deal.`,
    next: 'a4_bree'
  },
  a4_map_bad: {
    enter: g => { g.flag('teddy9', 'nomap'); },
    text: `You get up for a glass of water. At the sink, you try to read the refrigerator without looking like you\'re reading it.

A map, printed off a website. Yellow highlighter. You can\'t make out the streets from here without turning around, and Teddy is watching you. You get the date, circled twice in red under the magnet: **26**.

The twenty-sixth. Of November.

You come back and sit down.

teddy: After the job, we get Marisol. All of us. That\'s the deal.`,
    next: 'a4_bree'
  },
  a4_marisol: {
    text: `sam: Marisol first. Then whatever you want. I\'ll be there for Marisol.

Heck looks at you like you handed him something.

Teddy doesn\'t say anything for a while.

teddy: You\'re not gonna try to talk me out of the other thing.

sam: Would it work?

teddy: No.

sam: Then Marisol.

Teddy almost smiles. It\'s the first time you\'ve seen it. His chipped front tooth.

teddy: After, cold guy. After the job, we go get her. I swear on my mother. You, me, Heck, Bree. That\'s the deal.

heck: After.

He says it like a man putting his hand on a stove on purpose.`,
    next: 'a4_bree'
  },

  a4_bree: {
    night: true,
    loc: 'ALLEGHENY STATION · MARKET-FRANKFORD LINE',
    clock: { time: '8:10 PM' },
    text: g => `Bree walks you to the El.

It\'s cold and clear, and the El is roaring overhead on Kensington Avenue, and under it the street is all sneaker stores and check-cashing places with the grates down. She walks with her hands in her coat pockets and doesn\'t say anything for three blocks.

At the foot of the station stairs, she stops.

bree: It\'s a lot of people, Wawa.

sam: What is?

bree: The job. He won\'t tell me what. He\'s never not told me what. He said, *a lot of people, standing still*. He said it like it was funny. Like a joke.

She looks up at the station. A train comes in overhead and shakes the stairs.

bree: He thinks if he freezes something big enough, nobody gets hurt. Everybody just stands there a while longer, and somebody pays, and then he lets go. He thinks it\'s gentle.

bree: Stop him. Please. I can\'t. I\'ve tried. He doesn\'t hear me.

She laughs, small and awful.

bree: I can do anybody\'s voice in the world, perfect. I can\'t do mine so he\'ll hear it.

Then, without any warning, out of her mouth, a voice you heard an hour ago over *Wheel of Fortune*. Halina\'s voice, old, Polish, tired, kind:

*Theodore. Theodore, come and sit with me. I don\'t need the money. I need you to sit with me.*

bree: That\'s my aunt. Last Tuesday. He was in the kitchen. He didn\'t hear it.

She heads back toward Edgemont Street. You stand under the El until the next train comes.`,
    next: 'tag_card'
  },

  /* ================= TAG ================= */
  tag_card: {
    card: { kind: 'tag' },
    night: true,
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Sun', date: 'Nov 8', time: '11:51 PM' },
    enter: g => { g.sleep(7); g.know('revenant_note', ['sam'], g.f('nine') === 'ask' ? 'On the back of Jules\'s index card, under "When I know, you\'ll be the first," someone wrote in your handwriting: "Don\'t trust the lucky one." You didn\'t write it.' : 'On the back of one of Jules\'s Calc index cards, someone wrote in your handwriting: "Don\'t trust the lucky one." You didn\'t write it.'); },
    text: g => `Sunday night, late, you finally open your Calc textbook.

Nik is asleep with his headphones on. The radiator is knocking. You have Femi\'s green notebook open on the desk next to the textbook, *NOTES FOR SAM K.*, and you\'re going to do it, you\'re going to go back to chapter three and do every problem, the way he wrote them out, *outside first*, because you promised Femi\'s phone that you would, and somebody read it.

You open the textbook, and an index card falls out onto the desk.

${g.f('nine') === 'ask' ? `It\'s the card from the lounge. From the study night, from problem nine. You forgot you kept it. On the front, in your handwriting, in pencil: *What did you mean?*

You turn it over. Her perfect handwriting.

*I don\'t know yet.*
*When I know, you\'ll be the first.*

And under that, there\'s a third line.` : `It\'s one of her cards from the lounge. From the study night. On the front, in her perfect handwriting: *d/dx [sin(x²)]*. You don\'t remember keeping it.

You turn it over. The back was blank.

It isn\'t now. There\'s a line.`}

It wasn\'t there before. You know it wasn\'t there before. It\'s in black ballpoint, pressed so hard into the card that it\'s torn through in two places. And it\'s in your handwriting.

Not *like* your handwriting. *Yours.* The *t*\'s crossed low, like little crucifixes, the way Sister Margaret made you do them in second grade at St. Monica\'s. The hook on the *y* you\'ve never been able to stop.

*Don\'t trust the lucky one.*

The card is cold. Colder than the room. It smells, very faintly, like ozone and wet pennies.

You sit there with it in your hand.

*Lucky.* You think about a girl who says nothing ever happens to her. Who says *luck is the wrong word*. Who says *things always go my way*. You think about Teddy, who let go. You think about yourself, alive in a building where Femi Ojo isn\'t.

You don\'t know who the lucky one is. You don\'t know who wrote it.

Yes, you do. You know exactly who wrote it. You just don\'t know who he is.

Behind you, the radiator knocks.

The window over your desk has frost on it.

On the *inside*. In November, in a room where the radiator\'s been going since October. A thin white skin of frost across the bottom of the glass, and in the frost, at the height of a man leaning on the sill to look in, a handprint.

A left hand. Thumb. Index. Middle.

A gap.

Pinky.

You turn around. The room is empty. Nik is asleep. The door to the hall is shut, and under it is a thin line of light from the hallway, and across the hall, under the door of 9-11, another line of light, the way there always is, all night, every night.

Jules sleeps with the light on. She has since she was seven.

You turn back to the window. The frost is already going. You watch the handprint melt from the edges in, the four marks running down the glass in thin lines${g.f('femi_end') === 'found' ? ', like the marks on your door' : ''}.

The card is still in your hand.

You don\'t throw it away.`,
    end: true
  }
});

Object.assign(EH.episodes.s01e09, {
  polls: [
    { q: 'In the cab, on Broad Street', opts: [
      { label: 'Told Pop', pct: 41, if: g => g.f('pop9') === 'told' },
      { label: '"Not today"', pct: 44, if: g => g.f('pop9') === 'later' },
      { label: 'Lied to Pop', pct: 15, if: g => g.f('pop9') === 'lied' }
    ] },
    { q: 'Monday night, Jules', opts: [
      { label: '"Stay."', pct: 52, if: g => g.f('jules9') === 'stay' },
      { label: '"Not yet."', pct: 17, if: g => g.f('jules9') === 'notyet' },
      { label: 'Kissed her', pct: 31, if: g => g.f('jules9') === 'kiss' }
    ] },
    { q: 'Tolu asked: was it an accident?', opts: [
      { label: '"No."', pct: 63, if: g => g.f('tolu9') === 'truth' },
      { label: '"Sign it."', pct: 22, if: g => g.f('tolu9') === 'sign' },
      { label: '"I don\'t know."', pct: 15, if: g => g.f('tolu9') === 'dodge' }
    ] },
    { q: 'Simone\'s one chance', opts: [
      { label: 'Told her', pct: 49, if: g => g.f('simone9') === 'told' },
      { label: 'Showed her', pct: 38, if: g => g.f('simone9') === 'show' },
      { label: 'Lied', pct: 13, if: g => g.f('simone9') === 'lied' }
    ] }
  ],
  onEnd: g => {
    if (g.f('pop9') === 'told') g.recap('You told Pop. "That money\'s mine. You don\'t go near Dante."');
    g.recap('Femi\'s phone read your messages. Someone has it.');
    g.recap(g.f('simone9') === 'lied' ? 'Simone knows. You lied when she gave you the chance.' : 'Simone knows. She has two lists. The other one "isn\'t mine to tell."');
    g.recap(g.f('teddy9') === 'map' ? 'Teddy\'s last job is the Thanksgiving Day Parade.' : 'Teddy is planning one last job. November 26.');
    g.recap('On the back of Jules\'s index card, in your handwriting: "Don\'t trust the lucky one."');
  }
});
