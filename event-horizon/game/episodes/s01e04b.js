/* S1 · E4 · SUTURES, part 2 of 3: Act Two ("Kensington Avenue"), Act Three ("Southpaw"). */
/* Situational bonuses as mutually exclusive choice variants (checks are static objects). */
function e4v(choice, mods) {
  const out = [];
  for (let m = 0; m < (1 << mods.length); m++) {
    const act = mods.filter((_, i) => m & (1 << i));
    const bonus = act.reduce((a, x) => a + x.n, 0);
    const check = Object.assign({}, choice.check);
    if (act.length) { check.bonus = (choice.check.bonus || 0) + bonus; check.bonusLabel = [choice.check.bonusLabel, ...act.map(x => x.label)].filter(Boolean).join(' · '); }
    out.push(Object.assign({}, choice, { check, if: g => mods.every((x, i) => !!x.when(g) === !!(m & (1 << i))) }));
  }
  return out;
}
const e4late = g => g.f('arrive') === 'late' || g.f('fri_leave') === 'stayed';

EH.scenes('s01e04', {

  /* ================= ACT TWO: KENSINGTON AVENUE ================= */
  a2_go: {
    card: { kind: 'act', label: 'Act Two', title: 'Kensington Avenue' },
    night: true,
    loc: 'BROAD & CECIL B. MOORE',
    clock: { time: '10:56 PM' },
    text: g => `${{
      silent: 'You get up in the middle of the movie and you go. You don\'t look back at the couch. You feel her watching you all the way to the stairwell door anyway, like a hand between your shoulder blades.',
      promise: 'You lean across Simone, who goes very still, and you say it low, close to Jules\'s ear: *I have to go. I\'ll be back. I promise.* She doesn\'t say anything. She just looks at you, and then down at your phone, and then back at you, and nods, once, like she\'s signing something.',
      stayed: 'You don\'t remember the stairs. You remember the side door banging open onto Broad, and the cold air, and your own breath.'
    }[g.f('fri_leave')]}

${{ hoodie: 'The hoodie\'s in your backpack where it lives now. Gaiter up. Pop\'s cap backward.', windbreaker: 'Ciro\'s windbreaker, inside out, zipped to the chin.', helmet: 'The helmet, the visor down, the world gone amber.', none: 'No hood. No mask. Just you.' }[g.f('costume') || 'hoodie']} McPherson Square is three miles east and a little north, up Lehigh to Kensington Avenue, under the El. ${g.f('fri_leave') === 'stayed' ? 'It\'s 11:11. Whatever\'s happening there is already happening.' : 'It\'s 10:56. Four minutes until the text said eleven.'}`,
    choices: [
      { text: 'The bike. Lehigh Avenue, flat out, every light.', tag: 'Ride',
        check: { kind: 'pool', attr: 'reflex', skill: 'ride', diff: 2, label: 'Three miles, no brakes', physical: true, on: { crit: 'a2_ride_fast', success: 'a2_ride_fast', partial: 'a2_ride_fast', fail: 'a2_ride_slow', botch: 'a2_ride_slow' } } },
      { text: 'Slip. Run it between the seconds. Three miles of stopped city.', slip: true,
        fx: g => { g.flag('arrive', 'slip'); }, go: 'a2_square' }
    ]
  },
  a2_ride_fast: {
    night: true,
    enter: g => g.flag('arrive', 'ride'),
    text: `Lehigh Avenue at night is a long straight runway of dead factories and live corner stores. You take it standing on the pedals, through every light, past a cop car parked at Germantown with its windows down and both officers eating cheesesteaks, who watch you go by like a weather event.

At Kensington Avenue the El comes over you like a ceiling, and the world goes dark and loud and striped with light through the tracks.`,
    next: 'a2_square'
  },
  a2_ride_slow: {
    night: true,
    enter: g => { g.flag('arrive', 'late'); g.pool('stamina', -1); },
    text: `A car door opens in front of you at 5th Street, and you go over it.

You don't really go *over* it. You go *into* it, then over it, then across forty feet of Lehigh Avenue on your side, and the bike goes somewhere else. The guy who opened the door yells *you okay?* in the voice of a man who is mostly yelling *don't sue me*.

You're okay. Your hip says you're not. You get the bike, and the front wheel's bent like a taco, and you ride it anyway, wobbling, under the El at Kensington Avenue, eleven minutes late.`,
    next: 'a2_square'
  },

  a2_square: {
    night: true,
    loc: 'MCPHERSON SQUARE · KENSINGTON',
    enter: g => { g.clock({ time: e4late(g) ? '11:14 PM' : g.f('arrive') === 'slip' ? '10:58 PM' : '11:03 PM' }); g.meet('teddy'); g.meet('bree'); g.meet('heck'); g.hidden('halcyon_heat', 1); g.know('halcyon_clinic', ['sam', 'teddy', 'bree', 'heck'], 'Halcyon set up a "cooling clinic" tent in McPherson Square and lured Heck there with a text from Marisol\'s phone.'); },
    text: g => `${g.f('arrive') === 'slip' ? 'You come out of the Slip at the corner of Kensington and Indiana, and your nose is already bleeding, and the cold of it falls off you like a coat.\n\n' : ''}McPherson Square is one city block of grass and old trees and benches, with a library in the middle, an old stone Carnegie library, like something that wandered over from a nicer century and couldn't find its way home. The El runs along one side of it, black iron, rattling. People sleep on the benches. People who aren't sleeping are standing very still in the half-dark under the trees, the way people stand on this block at this hour.

Tonight there's a tent on the grass.

It's white, clean, lit from inside like a lantern. A generator hums behind it. A banner across the front reads **HALCYON COMMUNITY WELLNESS · FREE COOLING & SYMPTOM CLINIC · ALL WELCOME**. There are misting fans at the entrance, spraying fine cold water into the September night for nobody. Behind the tent, backed up onto the sidewalk on F Street, there's a white box truck with a refrigeration unit on the roof and **BLUE RIBBON FOODS** stenciled on the side.

Four men in gray polo shirts are standing around the tent like dads at a Little League game.

On the library steps, a fifth man is holding a tablet. Forties. Close-cropped gray hair. Calm. The same calm man who swept Broad Street with a tablet the night of the Hitch. *Brannigan.* You've never heard his voice. You've seen his face once before, on Broad Street, the night of the Hitch.

And down Indiana Avenue, under the El, walking toward the square in the middle of the street:

Heck.

He's shirtless. It's sixty-five degrees and he's *steaming*, a white plume coming off his shoulders and his shaved head like a horse in winter. His knuckles are glowing faintly orange, like stove coils just turned on. Cars are swerving around him. A man on the corner backs into a doorway and crosses himself.

As Heck walks into the square, the streetlamps along the path pop. One, then the next, then the next, each one a little *tink* of glass and then dark, in a line, leading him toward the tent like somebody's turning them off ahead of him on purpose.

${g.f('arrive') === 'late' || g.f('fri_leave') === 'stayed' ? 'You\'re late. You can see you\'re late. Teddy\'s at the corner of Somerset, his bandaged hand cradled against his chest like a broken wing, and Bree is sitting on the curb beside him holding her wrist, and Heck is already halfway across the grass.' : 'Teddy\'s at the corner of Somerset, his bandaged hand cradled against his chest like a broken wing. Bree\'s on the curb beside him holding her wrist. They both see you at the same time. Bree mouths something that might be *wawa* and might be *finally*.'}

Heck is forty yards from the tent.`,
    choices: [
      ...e4v({ text: 'Get in front of him. Hands up, open. Talk to him. "Heck. Hey. It\'s me. It\'s the nene."', tag: 'Talk',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'persuade', label: 'Reach Heck', on: { strong: 'a2_talk_strong', weak: 'a2_talk_weak', miss: 'a2_talk_miss' } } }, [
        { when: g => g.f('teddy_check'), n: 1, label: 'You know what\'s wrong' },
        { when: g => g.f('arrive') === 'slip' && !e4late(g), n: 1, label: 'You got there first' },
        { when: e4late, n: -1, label: 'You\'re late' }]),
      { text: 'Plant yourself in his path. Make him go through you to get to them.', tag: 'Block',
        check: { kind: 'pool', attr: 'nerve', skill: 'brawl', diff: 2, label: 'Stand your ground', physical: true, on: { crit: 'a2_block_good', success: 'a2_block_good', partial: 'a2_block_shove', fail: 'a2_block_shove', botch: 'a2_block_shove' } } },
      { text: 'Slip. Get eyes inside that tent and that truck before anybody moves.', slip: true, tag: 'Look',
        fx: g => { g.flag('tent_seen'); g.know('halcyon_truck', ['sam'], 'Inside the Halcyon truck at McPherson Square: a steel bed with restraints rated to 600 pounds, an ice bath, and an IV bag labeled with Heck\'s name and weight. On the tablet, Marisol\'s photo marked RECOVERED.'); }, go: 'a2_look' }
    ]
  },

  a2_look: {
    night: true,
    text: g => `You step through.

The square stops. A moth stops. The misting fans stop, and their spray hangs in the air outside the tent like a beaded curtain, every droplet a tiny frozen lens with the lantern-light in it. Heck stops mid-stride, steam standing off his shoulders in a still white mane.

And it's warm near him. That's the first wrong thing. In the Slip, everything is cold, always, January cold. But walking past Heck is like walking past an open oven. He's the only warm thing in the stopped world.

You go into the tent. Folding chairs. A cooler of Gatorade. A table with clipboards and a stack of flyers: *Were you in North Philadelphia on Aug. 22? Experiencing unusual symptoms?* Behind a curtain, a second room, cold, with a stretcher.

You go out the back to the truck. The rear doors are open, and the refrigeration unit is breathing white fog that's frozen into a cloud in the dark.

Inside, it's not a clinic.

It's a steel bed bolted to the floor with restraints on it: wrists, ankles, chest, thick as seatbelts, with a stamped tag on the buckle reading **RATED 600 LB**. A long tub of water with ice floating in it, frozen mid-bob. An IV pole. The bag on the pole is labeled in neat printer type: **RAMOS, H. · 260 LB · PROTOCOL C**.

Somebody made a bed for Heck. Somebody *measured* him.

You go back out. On the library steps, Brannigan's tablet glows in his stopped hands. On the screen, there's a list. Most of it's codes. At the top, a photo of a girl with dark curly hair and a gap in her teeth, smiling at somebody off-camera, and beneath it: **REYES, M. · RECOVERED.**

*Recovered.*

Your nose is pouring. You step back out where you started, on the corner, and the cold falls off you, and Heck takes the next step he was always going to take, thirty yards from the tent now, and you're already moving.`,
    next: 'a2_dart'
  },

  a2_talk_strong: {
    night: true,
    enter: g => { g.flag('heck_reach', 'strong'); g.bond('heck', { trust: 2, affection: 1 }); },
    text: `You get in front of him with your hands up and open.

sam: Heck. Hey. Hey. It's me. It's the nene.

He stops.

Up close, the heat comes off him like a car engine after a long drive. His eyes are bloodshot and wet and enormous. He looks at your gaiter, your hood, your eyes over the top of them, and you watch him find you in there.

heck: Nene.

sam: Yeah.

heck: Papa, I can't sleep. I burned my tía's sheets. I held my sobrina, and she *cried*, papa, she cried because I was hot, and she's two, she don't know why.

His voice cracks right down the middle.

heck: They said they can help. Marisol said—

sam: That wasn't Marisol.

heck: I *know* it wasn't Marisol.

He wipes his face with the back of his wrist, and his tears hiss on his skin.

heck: But what if they can? What if they can make it stop? What do I do, nene? What do I do if it never stops?

You don't have an answer. You have a hand, open, held out. You don't know if you can touch him without burning. You hold it out anyway.

He looks at it. He takes one step backward, toward Teddy, away from the tent.

And then something hits him in the side of the neck with a sound like a staple gun.`,
    next: 'a2_dart'
  },
  a2_talk_weak: {
    night: true,
    enter: g => { g.flag('heck_reach', 'weak'); g.bond('heck', { trust: 1 }); },
    text: `You get in front of him with your hands up.

sam: Heck. Hey. It's me. It's the nene.

He slows. He doesn't stop.

heck: Move, nene.

sam: That text wasn't from Marisol.

heck: I know. *I know.* Move.

He's not angry. He's just *tired*, the kind of tired that's already made its decision. He steps around you. When his shoulder passes yours, the heat is like opening an oven, and your gaiter starts to smell like a scorched iron.

sam: Heck—

He takes two more steps toward the tent.

Then something hits him in the side of the neck with a sound like a staple gun.`,
    next: 'a2_dart'
  },
  a2_talk_miss: {
    night: true,
    enter: g => { g.flag('heck_reach', 'miss'); g.injure({ id: 'handprint', name: 'Burned chest (handprint)', pen: 0, heal: 2 }); },
    text: `You get in front of him with your hands up.

sam: Heck. Hey. It's me—

He doesn't hear you. Or he hears you and it doesn't matter. He puts one hand flat on your chest, almost gently, the way you'd move a curtain, and *pushes*.

It isn't a punch. It's barely a push. It moves you nine feet, onto your back on the grass, and when you look down, there's a handprint scorched into the front of your hoodie, and under it, through the hole, a handprint scorched into *you*. Pink-white. Perfect. Five fingers and a palm.

heck: Lo siento, nene.

He keeps walking.

And something hits him in the side of the neck with a sound like a staple gun.`,
    next: 'a2_dart'
  },
  a2_block_good: {
    night: true,
    enter: g => { g.flag('heck_reach', 'weak'); g.bond('heck', { respect: 2 }); },
    text: `You plant yourself in the middle of the path, between Heck and the tent, feet wide, and you don't move.

He comes right up to you. He stops six inches from your face. The heat off him dries your eyes.

heck: You gonna stop me, nene? With what?

sam: With *me*.

He looks down at you, all six-foot-four of him, and for one second, something like a laugh moves in his face, the old Heck, the gentle one from Port Richmond, eating pierogi off a paper plate.

heck: Mira. The nene's got cojones.

And then something hits him in the side of the neck with a sound like a staple gun.`,
    next: 'a2_dart'
  },
  a2_block_shove: {
    night: true,
    enter: g => { g.flag('heck_reach', 'miss'); g.injure({ id: 'handprint', name: 'Burned chest (handprint)', pen: 0, heal: 2 }); },
    text: `You plant yourself in his path. He doesn't slow down.

He just puts one hand flat on your chest and moves you, the way a bouncer moves a drunk, nine feet backward onto the grass. When you look down, there's a handprint scorched into your hoodie, and through the hole, a handprint scorched into *you*.

heck: Lo siento, nene. Lo siento.

He keeps walking.

And something hits him in the side of the neck with a sound like a staple gun.`,
    next: 'a2_dart'
  },

  a2_dart: {
    night: true,
    clock: { time: '11:16 PM' },
    text: g => `A dart. Red-feathered, stuck in the side of his neck. One of the polo men is down on one knee by the misting fans with a rifle against his shoulder, a long black thing with a scope, calm as a guy at a carnival booth.

Heck reaches up and pulls it out. The plastic barrel melts in his fingers and drips.

For a second, nothing.

Then whatever was in that dart hits him. It was dosed for a man at ninety-eight point six. Heck is at a hundred and six, and it boils through him like a match in a gas can. You watch it happen. His pupils go wide and black. The glow at his knuckles runs up his forearms in orange threads, like veins lit from inside. The steam coming off him goes from white to *clear*, the air around him rippling like the air over a highway in August.

He turns his head, slowly, the way a bull turns its head.

He's looking for whoever did this to him. And between Heck and the tent, ${g.f('costume') === 'none' ? 'with your face bare and your hands up' : 'with your face covered, right where the men with the darts want him to look'}, there's you.

${{ strong: 'heck: …Nene? Why, nene? Why\'d you bring them?', weak: 'heck: You. *You* brought them.', miss: 'heck: *You.*' }[g.f('heck_reach') || 'weak']}

sam: Heck, no, I didn't—

Behind him, across the square, Brannigan lowers his tablet and says something into his collar. You can't hear it. You don't need to. All four polo men are moving now, spreading out around the edge of the grass, unhurried, like they've done this before.

Heck raises his hands. Not like a man in a fight. Like a boxer. Chin down. Right hand forward.

Southpaw.

You remember, one full second too late, the way he stood in the kitchen in Port Richmond. The flattened nose. The scar tissue over both eyes, shiny and thick. *Heck boxed.*`,
    next: 'a3_f1'
  },

  /* ================= ACT THREE: SOUTHPAW ================= */
  a3_f1: {
    card: { kind: 'act', label: 'Act Three', title: 'Southpaw' },
    night: true,
    text: `He comes at you.

People think big men are slow. People are wrong. Heck crosses six feet of grass in the time it takes you to think the word *wait*, and the right jab comes first, not hard, just there, a hot fist the size of a cantaloupe snapping at your face to see what you do.

What you do is flinch.

Behind it, already coming, low and from the outside, the left.`,
    choices: [
      { text: 'Move. Get your body out of the way of that left hand.', tag: 'Dodge',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, label: 'Get out of the way', physical: true, power: true, on: { crit: 'a3_f1_clean', success: 'a3_f1_clean', partial: 'a3_f1_graze', fail: 'a3_f1_hit', botch: 'a3_f1_hit' } } },
      { text: 'Slip. Step out of the second and just walk around it.', slip: true, tag: 'Slip it',
        fx: g => g.flag('f1', 'slip'), go: 'a3_f1_slip' }
    ]
  },
  a3_f1_clean: {
    night: true,
    enter: g => g.flag('f1', 'clean'),
    text: `You drop under it. You don't know how. Your body knows how: four years of Vinnie throwing hooks at you in the alley behind the Acme on Passyunk for fun, and a hundred fights you started and a hundred more you finished. You drop and roll left, and his fist goes over your head close enough that the heat curls the hair on your neck, and you come up on the outside of him with nothing broken.

Heck turns, slow and fast at once, and resets. Chin down. Right hand forward.

He's not done. He's barely started.`,
    next: 'a3_f2'
  },
  a3_f1_slip: {
    night: true,
    text: `You step through.

The world stops. Heck's fist hangs a foot from your ribs, glowing orange, and around it the air is *bent*, shimmering, rippling, still moving the way nothing in the Slip moves. Even stopped, he's burning.

You walk around his fist like it's a parked car. You walk around *him*. You stand behind him, at his left shoulder, and look at the back of his neck, where the dart went in, where the skin is already blistering around the hole.

*He's not your enemy,* you think. *He's the one they're here for.*

You step back out. His fist hits nothing, and he stumbles a half step into empty air, and wheels around, and finds you behind him, and for the first time something in his drugged face looks *afraid*.

Your nose is bleeding into your gaiter. You can taste it.`,
    next: 'a3_f2'
  },
  a3_f1_graze: {
    night: true,
    enter: g => { g.flag('f1', 'graze'); g.injure({ id: 'cracked_ribs', name: 'Cracked ribs', pen: 1, heal: 3, affects: ['body', 'reflex'] }); },
    text: `You move. Almost enough.

His left hook catches you on the way out, along the ribs on your right side, and it's not a full hit, it's the *edge* of a hit, and the edge is plenty. You hear a dull wet *crack* inside your body, like stepping on a stick under snow.

Then you feel it.

You stay on your feet. You have no idea how you stay on your feet. Your whole right side is a bell somebody rang, and every breath rings it again.

Heck resets. Chin down. Right hand forward.`,
    next: 'a3_f2'
  },
  a3_f1_hit: {
    night: true,
    enter: g => { g.flag('f1', 'hit'); g.injure({ id: 'cracked_ribs', name: 'Cracked ribs', pen: 1, heal: 3, affects: ['body', 'reflex'] }); g.pool('stamina', -2); },
    text: `You don't move enough.

The left hook comes in under your elbow and lands flush on your ribs, and it lifts you off your feet. Not an expression. Your sneakers leave the grass. You fly sideways four feet and come down on your shoulder, and something in your right side goes *crack* like a branch, and for three or four seconds you can't breathe at all, you just lie on the grass with your mouth open like a fish, looking up at the El.

Somewhere far away, Bree is yelling your name. Not your name. *Wawa.* It's close enough.

You get up the way you always get up, because there's somebody behind you, even if right now the somebody is the guy you're getting up to fight.`,
    next: 'a3_f2'
  },

  a3_f2: {
    night: true,
    text: g => `${g.hurt('cracked_ribs') ? 'Every breath is a knife now. Short breaths. Short. ' : ''}He's driven you off the grass onto the Kensington Avenue sidewalk, under the El, your back to a bus shelter. You've got maybe two seconds before he comes again. The polo men are closing in on the edges of the grass, rifles low. Teddy's yelling something at Bree. Heck's eyes are black from edge to edge.

You need to make him stop. You need to make him stop without killing him, without him killing you, and without either of you ending up in that truck.`,
    choices: [
      { text: 'Hit him. Hard, right on the chin. You\'re a fighter. Fight.', tag: 'Hit him',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 3, label: 'Land one', physical: true, on: { crit: 'a3_f2_hit', success: 'a3_f2_hit', partial: 'a3_f2_hit_bad', fail: 'a3_f2_miss', botch: 'a3_f2_miss' } } },
      { text: 'The bodega on the corner has a chest freezer full of bagged ice out front. Cold. Get him cold.', tag: 'Ice',
        check: { kind: 'd20', attr: 'wits', skill: 'streetwise', dc: 12, label: 'Use the street', on: { crit: 'a3_f2_ice', success: 'a3_f2_ice', fail: 'a3_f2_ice_bad', fumble: 'a3_f2_ice_bad' } } },
      ...e4v({ text: 'Keep talking. Underneath the drug, he\'s still Heck. "Heck. Your sobrina. Think about your sobrina."', tag: 'Talk',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'empathy', label: 'Reach him through it', bonus: -1, bonusLabel: 'He\'s drugged', on: { strong: 'a3_f2_talk', weak: 'a3_f2_talk_weak', miss: 'a3_f2_talk_miss' } } }, [
        { when: g => g.f('heck_reach') === 'strong', n: 1, label: 'He found you once' }])
    ]
  },
  a3_f2_hit: {
    night: true,
    enter: g => { g.flag('f2', 'hit'); g.injure({ id: 'broken_hand', name: 'Broken hand (boxer\'s fracture)', pen: 1, heal: 3, affects: ['body', 'reflex'] }); },
    text: `You step inside his right hand and throw everything you have at his chin.

It lands. It lands perfectly, the one Vinnie spent four years trying to teach you: hips first, then shoulder, then fist, the whole of you behind it.

It's like punching a radiator.

His head snaps sideways. He staggers. And your hand *breaks*. You feel it go, the outside of it, the bone under your pinky knuckle, a crunch like a chicken wing, and then the heat of his jaw comes through after it, and your knuckles are blistering inside your fist before you can open it.

You don't scream. You don't have enough air to scream.

Heck shakes his head like a dog coming out of water. Spits. Blood hisses on the grass. Resets.

He's still coming.`,
    next: 'a3_f3'
  },
  a3_f2_hit_bad: {
    night: true,
    enter: g => { g.flag('f2', 'hit'); g.injure({ id: 'broken_hand', name: 'Broken hand (boxer\'s fracture)', pen: 1, heal: 3, affects: ['body', 'reflex'] }); g.pool('stamina', -1); },
    text: `You throw it. It lands on his cheekbone instead of his chin, high and wrong, and his head barely moves.

Your hand breaks anyway. The outside of it, the bone under your pinky knuckle, a crunch you feel all the way up into your teeth. The skin across your knuckles bubbles, right there, under your eyes. You've never seen your own skin do that.

Heck doesn't even step back. He looks at you with those black eyes like you're a fly that landed on him.`,
    next: 'a3_f3'
  },
  a3_f2_miss: {
    night: true,
    enter: g => { g.flag('f2', 'miss'); g.injure({ id: 'burned_arm', name: 'Burned forearm', pen: 1, heal: 2, affects: ['body'] }); },
    text: `You throw it. He isn't there.

He slides his head six inches to the left, lazily, the way a guy who's been hit by professionals slides away from an amateur, and your fist goes past his ear, and his right hand comes up and catches your forearm on the way back.

He just *holds* it. For one second.

You smell it before you feel it. Then you feel it. Your hoodie sleeve smokes and blackens and sticks to you, and underneath it, the skin of your forearm goes white, then red, then something worse, and you scream into your gaiter, and he lets go. Not because you made him. Because something in him, somewhere under the drug, flinched at the sound.`,
    next: 'a3_f3'
  },
  a3_f2_ice: {
    night: true,
    enter: g => { g.flag('f2', 'ice'); g.bond('heck', { trust: 1 }); },
    text: `You know this corner. Not *this* corner, but this *kind* of corner: every bodega in Philly keeps a chest freezer of bagged ice out front, chained shut, the chain looped through the handle and a padlock that's been broken since 2016.

It's there. Five feet from the El pillar. **ICE · HIELO · $2.99**. The padlock's broken.

You get the lid up and get two ten-pound bags out, one in each hand, and you turn around just as Heck comes at you, and you swing both bags at his chest like a pair of sandbags.

They don't hit him. They *explode*. Twenty pounds of ice turns to steam on contact with a sound like a fire hose hitting a burning car, *WHUMP*, and suddenly the whole corner is a white cloud, and Heck is in the middle of it roaring, blind, staggering back, his skin hissing everywhere the steam touches.

The bodega guy is standing in his doorway with his mouth open.

You grab two more bags. You leave a ten on the freezer, because you're your mother's son.`,
    next: 'a3_f3'
  },
  a3_f2_ice_bad: {
    night: true,
    enter: g => { g.flag('f2', 'ice_bad'); g.injure({ id: 'burned_arm', name: 'Burned forearm', pen: 1, heal: 2, affects: ['body'] }); },
    text: `You know there'll be a bodega with a chest freezer of ice on the corner. There always is.

There is. It's empty. Somebody's taken the last bag, and somebody else has used the freezer as a trash can. You've got your head inside a freezer full of Utz bags when Heck reaches you, and his hand comes down on the back of your forearm on the lid, and holds.

You smell it before you feel it.`,
    next: 'a3_f3'
  },
  a3_f2_talk: {
    night: true,
    enter: g => { g.flag('f2', 'talk'); g.bond('heck', { trust: 2, affection: 2 }); },
    text: `You don't put your hands up. You put them down.

sam: Heck. Your sobrina. What's her name?

He's coming at you. He stops. It's like watching a truck brake on ice: everything in him keeps going for a second after he's decided not to.

heck: …Yesenia.

sam: Yesenia. How old?

heck: Two. Two and a half. She says *half*. She's very…

He blinks. His eyes are still black, but for a second, way down in them, there's a light on in a back room.

heck: She's very serious about the half.

He drops his hands an inch. Just an inch.

And then behind you, one of the polo men fires a second dart, and it hits Heck in the chest, and the light in the back room goes out.`,
    next: 'a3_f3'
  },
  a3_f2_talk_weak: {
    night: true,
    enter: g => { g.flag('f2', 'talk_weak'); g.bond('heck', { trust: 1 }); },
    text: `sam: Heck. Your sobrina. Think about her.

For one second he hesitates. One second, the hands come down an inch.

Then he shakes his head hard, like there's a wasp in it, and comes at you again. But slower. A half step slower than he was.

You'll take a half step. A half step is a lot.`,
    next: 'a3_f3'
  },
  a3_f2_talk_miss: {
    night: true,
    enter: g => { g.flag('f2', 'talk_miss'); g.injure({ id: 'burned_arm', name: 'Burned forearm', pen: 1, heal: 2, affects: ['body'] }); },
    text: `sam: Heck. Your sobrina—

He's not listening. He's not *in* there to listen. He grabs your forearm while you're still talking and holds it for one long second, and the sleeve of your hoodie smokes and sticks to you, and the skin under it goes white, then red, then something worse.

You scream into your gaiter. He lets go. Not because you made him.`,
    next: 'a3_f3'
  },

  a3_f3: {
    night: true,
    text: `Here's the thing about boxers. They set you up.

Everything he's done so far, the jab, the lazy step, the slow reset, every single thing has been teaching you where his left hand *is*, and where it isn't, and how long it takes to get there. And you learned. You learned perfectly. And now he throws the left hook from somewhere you learned it couldn't come from, the punch he must have won fights with, and you see it coming from a very, very long way away, which is how you know you can't stop it.

It lands.

You don't feel it, really. It's too big to feel. Your cheekbone. The El. The ground, coming up. Your teeth, and the copper taste, and the lights going long and smeared.

And then something happens that has only ever happened to you on one night before, on Broad Street, the night of the Hitch, with a bus.

The difference is, this time *you do it*.

You don't decide. You don't think *rewind*. You just *want it not to have happened*, so badly and so completely that the wanting has a shape, and you reach out with the shape of it and *pull*.

The world runs backward.

The ground falls away from your face. Your body unfolds off the grass. The blood goes back up into your nose. The hook comes back out of your cheek and draws back, slow, glowing, a fist reversing down its own arc, into his shoulder, into its starting place.

The world lets go, like a held breath, and you're standing in front of Heck again, half a second before, watching his left shoulder dip.

You did that.

You did that *on purpose*.`,
    enter: g => { g.unlock('rewind'); g.drift(1); if (g.S.pools.focus < 3) g.pool('focus', 3 - g.S.pools.focus); g.hidden('revenant_drift', 1); g.flag('first_voluntary_rewind'); g.know('rewind_voluntary', ['sam'], 'You can rewind on purpose now. You reach for the moment you want back, and pull.'); },
    choices: [
      { text: 'Now you know where it\'s coming from. Slip the hook. Come back with everything you have left.', tag: 'Slip the hook',
        check: { kind: 'pool', attr: 'reflex', skill: 'brawl', diff: 3, label: 'Beat the hook', physical: true, power: true, on: { crit: 'a3_f3_good', success: 'a3_f3_good', partial: 'a3_f3_partial', fail: 'a3_f3_bad', botch: 'a3_f3_bad' } } }
    ]
  },
  a3_f3_good: {
    night: true,
    enter: g => { g.flag('f3', 'good'); g.injure({ id: 'laceration', name: 'Laceration (forearm, stitched)', pen: 0, heal: 2 }); if (!g.hurt('broken_hand')) g.injure({ id: 'broken_hand', name: 'Broken hand (boxer\'s fracture)', pen: 1, heal: 3, affects: ['body', 'reflex'] }); g.bond('heck', { respect: 1 }); },
    text: g => `This time you're already gone.

You duck under the hook, and it goes over you, and with nothing to stop it, Heck's fist and all of the weight behind it go right on through into the glass wall of the SEPTA bus shelter behind you.

The glass doesn't break. It *explodes*. The heat and the punch hit it at the same time, and it comes apart into a hundred thousand pieces that rain down over both of you, glittering, in the light from the El. The torn steel frame catches your left forearm on the way past and opens it, six inches, below the elbow, and you don't even feel it yet.

${g.f('f2') === 'hit' ? 'And you come up inside his reach with your good hand and put it into his liver, the way Vinnie taught you, the punch nobody sees, and he folds.' : 'And you come up inside his reach and hit him, liver shot, the way Vinnie taught you, the punch nobody sees, and your right hand breaks on his ribs, and he folds.'}

Heck goes down on one knee on the sidewalk, in the glass, steaming, gasping.

You stand over him, bleeding from your arm onto the concrete. You can hear your own heartbeat. You can hear the El. You can hear the misting fans, still hissing cold water at nobody.`,
    next: 'a3_f4'
  },
  a3_f3_partial: {
    night: true,
    enter: g => { g.flag('f3', 'partial'); g.injure({ id: 'laceration', name: 'Laceration (forearm, stitched)', pen: 0, heal: 2 }); if (!g.hurt('broken_hand')) g.injure({ id: 'broken_hand', name: 'Broken hand (boxer\'s fracture)', pen: 1, heal: 3, affects: ['body', 'reflex'] }); g.pool('stamina', -1); },
    text: `You move. Most of the way.

The hook catches your shoulder instead of your face, and spins you, and drives you back into the glass wall of the SEPTA bus shelter, and the glass doesn't break so much as *give up*. It comes down on you in a glittering sheet, and the torn steel frame opens your left forearm, six inches, below the elbow.

You come off the shelter swinging. You don't decide to. You put everything into his body, the liver shot Vinnie taught you, and your right hand comes apart on his ribs, and he folds.

Heck goes down on one knee on the sidewalk, in the glass, steaming, gasping. You stay up. Barely. Your blood is running off your fingers in a steady patter onto the concrete, like a faucet somebody didn't turn all the way off.`,
    next: 'a3_f4'
  },
  a3_f3_bad: {
    night: true,
    enter: g => { g.flag('f3', 'bad'); g.injure({ id: 'laceration', name: 'Laceration (eyebrow, stitched)', pen: 0, heal: 2 }); g.injure({ id: 'cheekbone', name: 'Cracked cheekbone', pen: 1, heal: 3, affects: ['wits', 'reflex'] }); g.pool('stamina', -2); },
    text: `You knew where it was coming from. It didn't matter. Knowing where a train is coming from doesn't get you off the tracks.

It lands. Not the whole of it; you took the worst of it off by turning, but enough. Your cheekbone. The curb. The edge of the curb opens your eyebrow to the bone, and the blood sheets down into your left eye, and the world goes red on one side and black on the other.

You lie there. The El rattles over you. You think: *if I rewind again, I'll lose something.* You don't know how you know that. You don't know what. It's just there in you, like a word on the tip of your tongue in a language you don't speak.

Heck stands over you, steaming. He raises his fist.

And then he stops. He just *stops*, fist up, and looks at it, the glowing thing at the end of his own arm, like it belongs to somebody else. He sways. Whatever was in the darts is finally, finally winning. He goes down on one knee beside you, on the sidewalk, gasping.

You get as far as one elbow.`,
    next: 'a3_f4'
  },

  a3_f4: {
    night: true,
    clock: { time: '11:21 PM' },
    text: g => `Then Bree's car comes up onto the sidewalk.

It's a 2009 Corolla with one blue door, and it comes up over the curb on F Street and across the grass and stops ten feet from you with the passenger door already open and Teddy hanging out of it. Bree's driving with one hand. She leans across Teddy and opens her mouth, and what comes out isn't her voice.

It's sirens. *Police sirens*, six or seven of them, layered, close, coming from everywhere at once, and under them, perfectly, a dispatcher's flat bored voice: *all units, McPherson Square, shots fired, shots fired, units responding.*

Every polo man in the square stops.

On the library steps, Brannigan holds up one hand. *Wait.* He's looking toward Kensington Avenue, toward the sirens that aren't coming, trying to see the lights. He's careful. He's very, very careful. It buys you a minute. Maybe less.

teddy: Get him in the car! Sam! *Get him in the car!*

Heck's on one knee in front of you, steaming, swaying, half-gone. He's two hundred and sixty pounds of burning man. He's still dangerous. He's still Heck.

${g.hurt('broken_hand') ? 'Your right hand is useless. ' : ''}${g.hurt('cracked_ribs') ? 'You can\'t take a full breath. ' : ''}${g.hurt('laceration') ? 'You\'re bleeding a lot. ' : ''}You've got one more thing in you. Maybe.`,
    choices: [
      ...e4v({ text: g => 'Get down on the sidewalk with him. Get close. "Heck. ' + (g.f('f2') === 'talk' ? 'Yesenia\'s' : 'Your sobrina\'s') + ' waiting. Let\'s go home."', tag: 'Bring him back',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'heart', skill: 'empathy', label: 'Bring Heck home', on: { strong: 'a3_end_talk', weak: 'a3_end_talk_hot', miss: 'a3_end_taken' } } }, [
        { when: g => g.f('tent_seen'), n: 1, label: 'You saw the truck' },
        { when: g => g.f('heck_reach') === 'strong' || g.f('f2') === 'talk', n: 1, label: 'He knows your voice' }]),
      { text: 'Put him to sleep. One more punch, right on the button. Then carry him.', tag: 'Knock him out',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 2, label: 'Lights out', physical: true, on: { crit: 'a3_end_ko', success: 'a3_end_ko', partial: 'a3_end_ko_hot', fail: 'a3_end_taken', botch: 'a3_end_taken' } } },
      { text: 'Slip. Carry two hundred and sixty pounds of burning man to that car between the seconds.', slip: true, tag: 'Slip him out',
        fx: g => { g.flag('end', 'slip'); }, go: 'a3_end_slip' }
    ]
  },

  a3_end_talk: {
    night: true,
    enter: g => { g.flag('heck_fate', 'saved'); g.flag('end', 'talk'); g.bond('heck', { trust: 3, affection: 3 }); g.bond('teddy', { trust: 2, respect: 2 }); g.bond('bree', { trust: 2 }); },
    text: g => `You get down on the sidewalk with him, in the glass. You're close enough that your eyes water from the heat. You don't touch him. You just get your face where he can see it, and you pull the gaiter down so he can see *all* of it.

sam: Heck. It's me. It's the nene. ${g.f('f2') === 'talk' ? 'Yesenia\'s waiting. She\'s very serious about the half.' : 'Your sobrina\'s waiting.'} Let's go home.

He looks at you with those black drugged eyes, and you watch them find you. Slowly. Like somebody walking back up a long hallway toward a door with a light under it.

heck: …Nene.

sam: Yeah.

heck: I hit you.

sam: Yeah. A lot.

heck: Lo siento. *Lo siento*, nene. Dios. Your *face*.

And the heat goes out of him.

Not all of it. Not even most. But you feel it go, like a tide pulling back off a beach, and the orange threads in his arms fade to a dull red, and the air around him stops rippling, and when he puts his hand on your shoulder to lean on you, it's hot like a mug of coffee, not like a stove.

You and Teddy get him into the back seat. It takes both of you and his own legs and a lot of Polish swearing. The Corolla's springs groan. Bree's crying and driving at the same time and doing both very well.`,
    next: 'a3_after'
  },
  a3_end_talk_hot: {
    night: true,
    enter: g => { g.flag('heck_fate', 'saved'); g.flag('end', 'talk'); g.heal('burned_arm'); g.injure({ id: 'burned_arms', name: 'Burned arms', pen: 1, heal: 2, affects: ['body'] }); g.bond('heck', { trust: 2, affection: 2 }); g.bond('teddy', { trust: 2, respect: 1 }); g.bond('bree', { trust: 1 }); },
    text: g => `You get down on the sidewalk with him and pull your gaiter down so he can see your face.

sam: Heck. It's me. ${g.f('f2') === 'talk' ? 'Yesenia\'s' : 'Your sobrina\'s'} waiting. Let's go home.

He hears you. You see him hear you. But he's too far down, and his legs won't work, and his eyes keep rolling up, and when he starts to tip over sideways toward the glass, you catch him.

You catch him with both arms. You hold on.

It's like hugging a radiator in a burning house. Your sleeves smoke. The skin of your forearms goes and goes and you hold on anyway, and you get him up, and Teddy gets his good shoulder under Heck's other arm, and the three of you lurch to the car together like the world's worst three-legged race.

heck: Nene, your arms, nene, *let go*—

sam: Shut up and walk.

You get him in. You let go. You look at your arms, and then you don't look at them again.`,
    next: 'a3_after'
  },
  a3_end_ko: {
    night: true,
    enter: g => { g.flag('heck_fate', 'saved'); g.flag('end', 'ko'); g.bond('teddy', { trust: 1, respect: 2 }); g.bond('heck', { respect: 1 }); },
    text: g => `${g.hurt('broken_hand') ? 'You throw it with your left, because your right hand is broken already.' : 'You throw it.'} Short. Clean. Right on the point of his chin, where every boxing coach on Front Street tells you the off switch is.

It works.

His eyes roll up and his whole body just *lets go*, all at once, two hundred and sixty pounds tipping over like a tree, and you and Teddy get under him before he hits the glass.

You and Teddy get him into the back seat. It takes both of you and a lot of Polish swearing, and he's hot as a pizza stone the whole way, and when the door slams, Teddy looks at you over the roof of the car.

teddy: You knocked out Hector Ramos.

sam: Yeah.

teddy: Nobody's ever knocked out Hector Ramos.

sam: He was drugged.

teddy: Don't tell him that. Ever. Let him think you're a *monster*.`,
    next: 'a3_after'
  },
  a3_end_ko_hot: {
    night: true,
    enter: g => { g.flag('heck_fate', 'saved'); g.flag('end', 'ko'); g.heal('burned_arm'); g.injure({ id: 'burned_arms', name: 'Burned arms', pen: 1, heal: 2, affects: ['body'] }); g.bond('teddy', { trust: 1, respect: 1 }); },
    text: `You hit him. It isn't clean. It takes two, and the second one is mostly elbow and mostly desperation, and he goes down anyway, sideways, toward the glass.

You catch him. You shouldn't. It's like catching a burning car door. Your sleeves smoke and you hear the skin of your forearms go, a sound like bacon on a flat-top, and you hold on, because the glass is there, because you're you.

Teddy gets under his other side. The two of you get him to the car together. When the door slams, you look at your arms, and then you don't look at them again.`,
    next: 'a3_after'
  },
  a3_end_slip: {
    night: true,
    enter: g => { g.flag('heck_fate', 'saved'); g.flag('brannigan_saw'); g.hidden('halcyon_heat', 2); g.heal('burned_arm'); g.injure({ id: 'burned_arms', name: 'Burned arms', pen: 1, heal: 2, affects: ['body'] }); g.bond('heck', { trust: 2 }); g.bond('teddy', { trust: 2, respect: 2 }); },
    text: `You step through.

The sirens stop mid-wail. The El stops mid-rattle. The cloud of breath coming out of Bree's mouth stops, and the misting fans stop, and the whole square becomes a photograph of itself.

Except Heck. Heck is still hot.

You get your arms around him. In the Slip it's January, it's the dead middle of winter, your breath is smoking, and holding him is like holding the sun. He's two hundred and sixty pounds, and in here he's two hundred and sixty pounds of *stopped*, of dead weight that won't help you, and you lift him anyway, with your broken parts and your good parts and every part, and you *carry* him.

Ten feet. Your sleeves start to smoke.

Twenty feet. They're not smoking anymore. They're gone.

Thirty feet. You can't feel your forearms. You think that's probably bad.

You put him in the back seat of the Corolla like a sleeping kid. You step back out.

Time comes back like a slammed door. The sirens. The El. Bree, staring at Heck, who's suddenly in her back seat, and then at you, standing by her bumper with your arms held out from your sides because you can't stand to let them touch anything.

On the library steps, Brannigan is looking down at his tablet.

Then he looks up at you. Not at the car. At *you*.`,
    next: 'a3_after'
  },

  a3_end_taken: {
    night: true,
    enter: g => { g.flag('end', 'lost'); },
    text: `It's not enough.

Whatever you had left, it's not enough. Heck lurches up off the sidewalk and away from you, toward the polo men, toward the tent, roaring, and the polo men aren't careful anymore. Two darts. Three. They go into his back like a row of buttons, and he goes down on his face on the grass, and this time he doesn't get up.

They come in with heat gloves, silver, like oven mitts from a nightmare. Four of them. They've got him by the arms. They're dragging him toward the truck, and his feet are leaving two long burned stripes in the grass.

teddy: *No!* No, no, Heck, *HECK—*

Bree's sirens stop. She's just screaming now, in her own voice.

You're bleeding. You're broken in at least one place. You've got maybe one more step between the seconds in you, and maybe not.`,
    choices: [
      { text: 'Slip. Take him back. Whatever it costs.', slip: true, tag: 'Take him back',
        fx: g => { g.flag('heck_fate', 'saved'); g.flag('end', 'rescue'); g.flag('brannigan_saw'); g.hidden('halcyon_heat', 3); g.heal('burned_arm'); g.injure({ id: 'burned_arms', name: 'Burned arms', pen: 1, heal: 2, affects: ['body'] }); g.bond('teddy', { trust: 3, respect: 3 }); g.bond('heck', { trust: 2 }); g.bond('bree', { trust: 2 }); }, go: 'a3_rescue' },
      { text: 'You can\'t. You *can\'t*. You stand there, and you watch.', tag: 'Let him go',
        fx: g => { g.flag('heck_fate', 'taken'); g.hidden('revenant_drift', -0.5); g.bond('teddy', { trust: -3, tension: 2 }); g.bond('bree', { trust: -2 }); g.know('heck_taken', ['sam', 'teddy', 'bree'], 'Halcyon took Heck from McPherson Square on September 11. They put him in a white box truck that said BLUE RIBBON FOODS.'); }, go: 'a3_heck_taken' }
    ]
  },
  a3_rescue: {
    night: true,
    text: `You step through.

The square stops, and the polo men stop, four of them leaning back against Heck's dead weight with their silver gloves sunk into his arms. One of them has his mouth open, mid-shout. Up close, he's just a guy. Thirty. A wedding ring. A sunburned nose. A little sweat on his upper lip.

You pull their hands off Heck one finger at a time. It takes forever. In here, everything takes forever, and you don't have forever. You have a minute.

Then you lift him.

Holding him in here is like holding the sun. Your sleeves smoke, and then they're not smoking anymore, because they're gone, and you carry him across forty yards of frozen grass and glass with your broken parts and your good parts and every part, and you put him in the back of Bree's Corolla, and you step back out.

Time comes back like a slammed door.

Four polo men fall over backward onto the grass, holding nothing. Bree is staring at Heck in her back seat, and then at you, by her bumper, with your arms held out from your sides.

On the library steps, Brannigan is very still. He looks at his tablet. Then he looks up at you, not at the car, at *you*, for a long, calm second, the way a man looks at a thing he's going to buy.`,
    next: 'a3_after'
  },

  a3_heck_taken: {
    night: true,
    text: `You stand there. You watch.

They lift him into the truck. It takes all four of them. One of them slips on the ramp and swears and laughs at himself, a normal laugh, a guy-at-work laugh. The rear doors close. *Clunk.* The refrigeration unit on the roof kicks on with a shudder.

**BLUE RIBBON FOODS** pulls off the curb onto F Street, signals left, a good citizen, and turns onto Indiana Avenue, and is gone.

The misting fans are still going. They spray cold water into the empty night.

Teddy doesn't scream anymore. He's sitting on the curb with his bandaged hand in his lap, staring at the place where the truck was. When you limp over to him, he doesn't look up.

teddy: You had a step left. I saw it. I saw you think about it.

You don't say anything.

teddy: Go home, cold guy.

Bree doesn't look at you at all. She starts the Corolla, and Teddy gets in, and they drive away the same way the truck went, slower, like a funeral. On the library steps, Brannigan watches them go. Then he looks at you.`,
    next: 'a3_after'
  },

  a3_after: {
    night: true,
    clock: { time: '11:26 PM' },
    enter: g => { g.know('brannigan_voice', ['sam'], 'Brannigan spoke to you at McPherson Square: "When the nosebleeds start lasting longer than the minute, you call us. We\'re the only ones who\'ll know what to do."'); },
    text: g => `${g.f('heck_fate') === 'saved' ? 'The Corolla goes off the curb backward with a crunch, and spins, and goes, and Bree\'s sirens go with it, Doppler-fading down Kensington Avenue toward Port Richmond. Through the back window you can see the top of Heck\'s head against the glass, steaming the window white.\n\nAnd then it\'s just you, in the square, in the glass, bleeding.\n\n' : ''}Brannigan comes down the library steps.

He doesn't hurry. He doesn't look at the polo men, who've stopped at the edge of the grass like dogs that know the word *stay*. He stops twenty feet from you, with the tablet held loosely at his side, the way another man would hold a newspaper.

His voice is nothing like you expected. It's kind. A youth pastor's voice. A pediatrician's.

BRANNIGAN: You're hurt, son.

You don't answer.

BRANNIGAN: ${g.hurt('cheekbone') ? 'That face needs a surgeon. ' : 'That arm needs a surgeon. '}${g.hurt('broken_hand') ? 'That hand needs setting. ' : ''}We've got a doctor in that tent who doesn't ask names. Nobody would ever have to know.

He waits. He's very good at waiting.

BRANNIGAN: No? Okay.

He nods, like you've answered a question he only asked to be polite.

BRANNIGAN: Then I'll just say this one thing, and you can do what you want with it. When the nosebleeds start lasting longer than the minute, you call us. We're the only ones who'll know what to do.

*The minute.*

He knows about the minute.

You run. You don't decide to; you're just running, under the El, your blood leaving a trail on Kensington Avenue that anybody could follow, and nobody does. Behind you, Brannigan doesn't move. He doesn't have to.`,
    next: 'a4_ride'
  }
});
