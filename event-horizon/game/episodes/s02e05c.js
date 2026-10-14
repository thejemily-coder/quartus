/* S2 · E5 · THE OPEN DOOR, part 3 of 4: Act Three ("Somebody Pays"). */
EH.scenes('s02e05', {

  /* ================= ACT THREE: SOMEBODY PAYS ================= */
  a3_elevator: {
    card: { kind: 'act', label: 'Act Three', title: 'Somebody Pays' },
    night: true,
    loc: 'BUILDING 7 · STAIR B',
    clock: { time: '12:42 AM' },
    text: g => `You\'re on the landing between eight and seven when you hear them.

Boots. A lot of boots, coming up, from far below. Flashlight beams sweeping the stairwell walls, three floors down, four. Not running. Climbing, steady, like people who climb stairs for a living.

And a voice, floating up the stairwell, calm, pleasant, a little winded. A voice you\'ve heard before. At McPherson Square, telling you about nosebleeds. At Gate 3 on Christmas Eve, wishing you a Merry Christmas.

BRANNIGAN: Mr. Kearney. Good evening. Please don\'t run. Nobody wants to chase anybody up and down seven flights at this hour. I\'m forty-five. My knees are a matter of record.

Jules\'s hand finds yours in the dark.

BRANNIGAN: Bring Miss Reyes down with you, if you like. We\'ll talk at the bottom. I\'ve got tea.

${g.f('call5') === 'nik' ? 'nik: *Four.* There are four of them in the stairwell. And the truck\'s moving. Bro. Bro, there\'s a Stair A. West end of seven. Go west. GO WEST.' : 'teddy: There\'s another stair. West end of the hall. I saw the sign. Stair A.'}

You go back up to seven, all of you, fast, Heck with Marisol against his chest, Bree with her hand over her own mouth like she\'s afraid of what will come out of it, Jules, you. Out onto the white hallway. The fire extinguisher is still propping the stair door open.

Teddy kicks the extinguisher away.

The door swings shut. He puts both hands flat on it, his gray hands, and leans.

You feel it. Not the cold. The *absence*. The door stops being a door and becomes a fact. A stopped thing. Not in time at all. You could hit it with a truck.

On the other side, boots arrive. Somebody pushes the bar. Nothing. Somebody hits it with a shoulder. Nothing. Not even a rattle.

BRANNIGAN: *(muffled, through the steel)* Ah. Mr. Kowal.

The gray on Teddy\'s arms is climbing. You watch it go past his elbows, toward his shoulders, like water soaking up a sleeve.

teddy: Listen. Ninety seconds after I let go, it holds. Go. Stair A. I\'ll be right behind you.

sam: Teddy—

teddy: Ninety seconds, cold guy. I counted it on the Parkway. I count it every time.`,
    choices: [
      { text: 'Go. Trust him. He knows his own ninety seconds better than you know anything.', tag: 'Trust him',
        fx: g => { g.flag('teddy5', 'trust'); g.bond('teddy', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a3_teddy_go' },
      { text: '"I\'m not leaving you here." Put your hand on the door next to his.', tag: 'Stay',
        fx: g => { g.flag('teddy5', 'stay'); g.bond('teddy', { affection: 2 }); g.hidden('revenant_drift', 0.5); }, go: 'a3_teddy_stay' }
    ]
  },

  a3_teddy_go: {
    night: true,
    text: `You go.

Down the white hallway, past the empty rooms, past 714 with its cold turkey under its silver dome, past the glass room and the elevator, to the sign at the far end: *STAIR A.*

You look back once.

Teddy, alone at the far end of the hall, leaning on the door with both gray hands, his head down, like a man holding up a wall in a dream. He doesn\'t look up. He lifts one hand off the door, just the fingers, and waves them. *Go.*

You go.`,
    next: 'a3_yard'
  },

  a3_teddy_stay: {
    night: true,
    enter: g => { g.know('teddy_halina', ['sam', 'teddy'], 'On the seventh floor of Building 7, Teddy told you: "My mother thinks I work nights at a warehouse in Bridesburg. She thinks the deposit at Jefferson came from a GoFundMe. I made the page myself. Nineteen people gave. Bruno gave the rest."'); },
    text: `sam: I\'m not leaving you here.

You put your hand on the door next to his. It doesn\'t feel like steel. It doesn\'t feel like anything. Not cold, not warm. Your palm just stops.

teddy: Cold guy.

sam: Yeah.

teddy: You\'re an idiot.

sam: Yeah.

He laughs, once, through his nose.

teddy: Listen. My mother thinks I work nights at a warehouse in Bridesburg. She thinks the deposit at Jefferson came from a GoFundMe. I made the page myself. Nineteen people gave. Bruno gave the rest.

He doesn\'t look at you.

teddy: You never said it. You didn\'t have to. He owns me. He doesn\'t even have to ask for anything. He just has to *be there*, every time she goes in to Jefferson.

Then he takes one hand off the door and puts it flat on your chest, gray, and pushes you, gently, back down the hall.

teddy: This is mine, Sam. You got your own. Go.

You go. You run. You look back once from Stair A, and he lifts his fingers off the door and waves them. *Go.*`,
    next: 'a3_yard'
  },

  a3_yard: {
    night: true,
    loc: 'NAVY YARD · THE DRY DOCK',
    clock: { time: '12:47 AM' },
    text: g => `Stair A lets you out on the west side of Building 7, onto grass, into the cold.

The white truck is coming around the corner of Building 10 with its high beams on, slow, the way a cop car comes down a block. Behind it, two figures on foot, in gray, with long rifles held across their bodies. Not guns. You know what they are. You watched one miss Jules four times.

${g.f('call5') === 'mikey' ? 'Somewhere off toward Broad, a car horn. Three long blasts. Mikey, at the gate, letting them know.' : g.f('call5') === 'vinnie' ? 'Somewhere south, past the dry dock, by the river fence, headlights flash twice. Vinnie.' : g.f('call5') === 'nik' ? 'nik: South. Go south, along the dry dock, there\'s a pedestrian gate by the river, it\'s chained but the chain\'s rusted to garbage. Two hundred meters. You can do two hundred meters. I\'ve seen you do four miles.' : ''}

Between you and every way out is the dry dock. A great stone trench a hundred yards long, forty feet deep, with granite steps going down its sides like the seats of a stadium, all the way to black water at the bottom. The only path runs along its edge.

Heck has Marisol. Bree has your sleeve. Jules is at your shoulder.

And behind you, the door of Stair A bangs open, and Teddy comes out running, gray to the shoulders now, his arms stiff at his sides like he can\'t bend them.

teddy: *Ninety!* Ninety, I let go at the top, *go!*

The truck\'s high beams swing onto you.

Jules is looking at you. Not asking. Waiting.`,
    choices: [
      { text: 'Run. Your legs, your call, your people. Get them along the edge of the dock.', tag: 'Run',
        check: { kind: 'move', move: 'Run the Gauntlet', attr: 'reflex', skill: 'athletics', label: 'Get everyone along the dry dock', near: ['jules'],
          on: { strong: 'a3_dock', weak: 'a3_yard_weak', miss: 'a3_yard_miss' } },
        fx: g => { g.flag('yard5', 'run'); }, if: g => g.f('call5') !== 'nik' },
      { text: 'Run Nik\'s route. He\'s in your ear. He can see what you can\'t.', tag: 'Run (Nik)',
        check: { kind: 'move', move: 'Run the Gauntlet', attr: 'reflex', skill: 'athletics', label: 'Get everyone along the dry dock', near: ['jules'], bonus: 1, bonusLabel: 'Nik on the cameras',
          on: { strong: 'a3_dock', weak: 'a3_yard_weak', miss: 'a3_yard_miss' } },
        fx: g => { g.flag('yard5', 'run'); }, if: g => g.f('call5') === 'nik' },
      { text: '"Jules." That\'s all you say. You don\'t have to say anything else.', tag: 'Jules\'s luck',
        check: { kind: 'move', move: 'Her Luck', attr: 'reflex', skill: 'athletics', label: 'Let it go her way', luck: 'jules',
          on: { strong: 'a3_dock', weak: 'a3_yard_weak', miss: 'a3_yard_miss' } },
        fx: g => { g.flag('yard5', 'luck'); } }
    ]
  },

  a3_yard_weak: {
    night: true,
    enter: g => { g.flag('heck_darted5'); },
    text: `You run.

Along the edge of the dock, single file, the granite lip on one side and the long drop on the other. Heck in front with Marisol. Bree. Jules. You. Teddy coming up behind, stiff-armed, fast.

*Pfft.*

Heck grunts. A dart is sticking out of the back of his neck, a little feathered thing, like a toy.

He doesn\'t stop. He doesn\'t drop her. He just runs hotter. You see it happen, the steam pouring off him, the dart\'s feathers curling and blackening, and he reaches back with one hand and pulls it out and throws it in the dock, and it sizzles in the air on the way down.

heck: Cooked it. Cooked it, papa. Keep going.

He\'s stumbling, a little. He keeps going.`,
    next: 'a3_dock'
  },

  a3_yard_miss: {
    night: true,
    enter: g => { g.flag('sam_darted5'); g.injure({ id: 'dart_s2e5', name: 'Halcyon sedative (shoulder)', pen: 1, heal: 2, affects: ['reflex', 'wits'] }); },
    text: `You run.

*Pfft.*

Something bites you in the back of the shoulder. You reach back and pull out a dart, a little feathered thing like a toy, and look at it in your hand, and think, very clearly: *that\'s funny.*

Then the world goes soft at the edges.

Not the Slip. The opposite. Everything slow, and warm, and far away. Your legs are somebody else\'s. The granite lip of the dock tilts.

A hand grabs your arm. Jules. Then your other arm. Teddy, hooking his stiff gray arm under yours like a crowbar.

teddy: Up. Up, cold guy. Your cold\'s eating it. I can feel it. Your whole arm\'s like ice. *Walk.*

You walk. You can\'t feel your feet. Your nose is bleeding into your mouth. Whatever was in that dart, your body is fighting it the way it fights everything now, with the cold, and the cold is winning, slowly, and it hurts.

jules: Left foot. Now the right. Sam. *Now the right.*

sam: I\'m here. I\'m here.`,
    next: 'a3_dock'
  },

  a3_dock: {
    night: true,
    loc: 'NAVY YARD · THE DRY DOCK',
    clock: { time: '12:50 AM' },
    text: g => `${g.f('yard5') === 'luck' ? 'You say her name. She breathes out. *Pfft. Pfft.* Two darts go wide in the dark, one into the dry dock, one into the side of the truck. Nobody so much as stumbles on the granite.\n\n' : ''}Halfway along the dry dock, the truck stops.

It stops across the path ahead of you, broadside, high beams in your eyes, and the two gray figures on foot come around its back end and kneel, rifles up. Behind you, the door of Stair A bangs open again. More of them.

A loudspeaker on the truck\'s roof crackles. Brannigan, perfectly calm.

BRANNIGAN: That\'s far enough, I think. Mr. Ramos, please put Miss Reyes down on the grass. Gently. She\'s not well.

Nobody moves.

BRANNIGAN: Mr. Kowal.

Teddy stops. He\'s standing at the very edge of the dry dock, on the granite lip, his gray arms stiff at his sides, breathing hard. Forty feet below him, the stone steps go down and down into black water.

BRANNIGAN: Your mother has her appointment at Jefferson on Tuesday at seven. The transplant clinic. Eleventh floor. She asks the nurses about you. She tells them you work nights at a warehouse in Bridesburg.

Teddy\'s face doesn\'t change. His hands do. They close, slowly, into fists.

BRANNIGAN: I mention it only so that you\'ll think, before you do anything heroic.

${g.knows('es_screen') ? 'You look at your phone. 12:51. You know what\'s coming. *SECOND DRAW · 00:51:04.*' : 'You feel it before you see it. The cold, coming up out of the ground. The same as 11:51. The building behind you, all seven rows of windows, starting to glow.'}

The rifles come up.

You see where they\'re pointed. Heck. Bree. Teddy. Marisol in Heck\'s arms.

Not Jules. Not one of them is pointed at Jules.

And not one of them is pointed at you.

The lights on the seventh floor of Building 7 go white.

${g.f('assunta_watch') ? 'In your pocket, the watch is ticking. Loud. Louder than it\'s ever been.' : ''}`,
    choices: [
      { text: 'Slip. Now. Into the white. Every dart, every second, yours.', tag: 'Slip', slip: true,
        fx: g => { g.hidden('revenant_drift', 1); }, go: 'a3_slip' },
      { text: 'Take Jules\'s hand. She\'s already reaching for yours. Let it all go her way.', tag: 'Her hand',
        fx: g => { g.flag('dock5', 'luck'); g.flag('jules_blames5'); g.hidden('jules_debt', 2); g.hidden('jules_open', 1); g.bond('jules', { trust: 1 }); }, go: 'a3_luck' }
    ]
  },

  a3_slip: {
    night: true,
    loc: 'THE DRY DOCK · 00:51:04',
    enter: g => { g.unstick('unstick_s2e5b', 'Time debt (the dry dock)'); g.know('revenant_push', ['sam'], 'At the dry dock, at 12:51:04, in the Slip, the man with your face put two fingers on Teddy Kowal\'s chest and pushed him off the edge. He said: "He\'s the one who takes her to Bruno. In March." He looked at Jules.'); },
    text: g => `You step through.

The cold takes you like a fist. ${g.f('assunta_watch') ? 'The watch ticks in your pocket, and you hold onto the sound of it with everything you have.' : 'The walls of the second are already closing.'}

The Navy Yard, stopped.

The high beams frozen in the air like solid things. Four darts hanging over the dry dock in a neat fan, feathers and all, a foot apart, each one going somewhere. Heck, mid-stride, with Marisol. Bree, mouth open. Jules, her hand out toward where your hand was.

And Teddy, on the lip of the dock, gray, still.

And beside Teddy, a man.

He\'s standing on the granite with his hands in the pockets of a long dark coat. Gray at the temples. A scar from the corner of his left eye down into his jaw. Your face. Older. Worn down to something. His breath doesn\'t smoke. He doesn\'t have anything left to smoke.

He\'s not frozen.

He looks at you, and he looks so tired.

old_sam: You came.

sam: Get away from him.

old_sam: He\'s the one who takes her to Bruno.

He doesn\'t say who. He doesn\'t have to. He looks past you, at Jules, frozen with her hand out, and his face does the thing your face does right before you cry.

old_sam: In March. He won\'t want to. He\'ll do it anyway.

old_sam: I tried the other ways.

sam: And?

He doesn\'t answer.

He takes his left hand out of his coat pocket. There\'s a gap where the ring finger should be. He puts two fingers on Teddy\'s chest, very gently. Like he\'s done it before.

And pushes.

Teddy\'s stopped body tips. Past the lip. Past balance. Frozen at an angle no standing man can hold, over forty feet of air.

The cold slams shut around you like a door. You feel *him* do it. He\'s closing the second. He\'s taking it back from you.

You have one move left. Maybe one.`,
    choices: [
      { text: 'Teddy. Grab Teddy.', tag: 'Teddy',
        fx: g => { g.flag('dock5', 'teddy'); g.hidden('revenant_drift', 1); }, go: 'a3_slip_teddy' },
      { text: 'Him. Grab *him*. Make him look at you.', tag: 'The man',
        fx: g => { g.flag('dock5', 'revenant'); g.know('revenant_hand', ['sam'], 'You grabbed the Revenant\'s left wrist at the dry dock. It wasn\'t cold or warm. Four fingers. He said: "You still think you can carry all of them."'); }, go: 'a3_slip_rev' },
      { text: 'The darts. All four. Out of the air. Save the ones you can still save.', tag: 'The darts',
        fx: g => { g.flag('dock5', 'darts'); g.hidden('revenant_drift', -1); }, go: 'a3_slip_darts' }
    ]
  },

  a3_slip_teddy: {
    night: true,
    enter: g => { g.flag('heck_darted5'); g.flag('bree_darted5'); g.flag('teddy_coat'); },
    text: `You lunge.

Your hands close on the collar of Teddy\'s coat. The nice wool coat, the one Bruno bought him. You plant your feet on the granite lip and pull, and he doesn\'t come, because he\'s *stopped*, because in the Slip a stopped man weighs as much as the world.

The second closes.

Time comes back like a wave hitting a wall.

The coat comes off in your hands.

Teddy falls.

He doesn\'t make a sound. He goes down past the granite steps, turning, and you hear him hit, once, very far down, a sound you will hear for the rest of your life.

Behind you, *pfft, pfft*. Heck roars and keeps his feet. Bree drops like somebody cut her strings.

You\'re standing on the edge of the dry dock holding a coat.`,
    next: 'a3_fall'
  },

  a3_slip_rev: {
    night: true,
    enter: g => { g.flag('heck_darted5'); g.flag('bree_darted5'); },
    text: `You grab him.

Your hand closes on his left wrist. It isn\'t cold. It isn\'t warm. It isn\'t anything. Four fingers. You can feel the knuckle where the fifth one was.

He looks down at your hand on his wrist. Then at you.

old_sam: You still think you can carry all of them.

His voice is your voice with all the jokes taken out.

And he\'s gone, and your hand is closed on nothing, and the second closes on your fingers.

Time comes back.

Teddy falls.

He doesn\'t make a sound. He goes down past the granite steps, turning, and you hear him hit, once, very far down, a sound you will hear for the rest of your life.

Behind you, *pfft, pfft*. Heck roars and keeps his feet. Bree drops like somebody cut her strings.`,
    next: 'a3_fall'
  },

  a3_slip_darts: {
    night: true,
    text: `The darts.

You go for them. One. Two. Out of the air, feathers and all, like picking flowers. Three, the one for Heck\'s throat. Four, the one for Marisol, a foot from her bare scalp.

You turn around with four darts in your fist.

He\'s watching you. The man with your face. He nods, once, slowly, like you got an answer right that he got wrong a long time ago.

Then he\'s gone.

The second closes.

Time comes back like a wave hitting a wall.

Teddy falls.

He doesn\'t make a sound. He goes down past the granite steps, turning, and you hear him hit, once, very far down, a sound you will hear for the rest of your life.

You open your hand. Four darts. You drop them in the grass.

Heck is still standing. Bree is still standing. Marisol is still asleep in Heck\'s arms.

Everybody\'s still standing, except Teddy.`,
    next: 'a3_fall'
  },

  a3_luck: {
    night: true,
    enter: g => { g.know('revenant_glimpse5', ['sam'], 'At the dry dock at 12:51, for one frame, across the water, you saw a gray-haired man with one hand raised, like a man at a window. Then Teddy fell.'); },
    text: g => `You take her hand.

She doesn\'t hold her breath. She lets it go. All of it. You feel it go out of her, through her fingers into yours. The whole world tilts a quarter inch toward the two of you.

The lights on seven go white.

*Pfft. Pfft. Pfft. Pfft.*

Four darts.

The first one hits the truck\'s spotlight and the spotlight explodes. The second one goes into the thigh of the man who fired the third. The third one hits a seagull that wasn\'t there a second ago. The fourth one goes into the grass a foot from Heck\'s boot and stands there quivering.

It\'s ridiculous. It\'s *funny*. Bree makes a sound, in Heck\'s voice, that might be a laugh.

And Teddy, on the lip of the dry dock, takes one step back from the truck\'s lights.

His heel comes down on the granite, on a patch of ice the size of a dinner plate that nobody saw, that wasn\'t there in all the hours they stood around this building tonight, and his foot goes out from under him, and his gray arms, which don\'t bend anymore, don\'t come up.

He goes over.

He doesn\'t make a sound. He goes down past the granite steps, turning, and you hear him hit, once, very far down, a sound you will hear for the rest of your life.

And for one frame, one, across the dry dock, on the far lip, under the dead spotlight, you see a man in a long coat standing in the dark with one hand raised. Like a man at a window.

Then there\'s nobody there.

Jules\'s hand is still in yours. You feel it go cold.

jules: No.

She lets go of you.

jules: *Fuck.*

jules: Near us. It *collects near us*.`,
    next: 'a3_fall'
  },

  a3_fall: {
    night: true,
    loc: 'THE DRY DOCK · THE BOTTOM STEP',
    clock: { time: '12:53 AM' },
    text: g => `You go down.

You don\'t Slip. You reach for the second and it isn\'t there. It\'s shut. Like something\'s holding it shut from the other side. So you go down the granite steps the way anybody would, fast and stupid, three at a time, slipping, catching yourself, forty feet of stone in the dark${g.f('sam_darted5') ? ', with the sedative still in your arm and your legs like water' : ''}${g.f('teddy_coat') ? ', with his coat still in your fist' : ''}.

He\'s on the bottom step. The one just above the water.

He\'s lying on his side, the way you\'d lie down on a beach, with one arm stretched out over the edge into the black water. The other arm is under him wrong. His head is wrong. There\'s blood on the granite, black in the dark.

He\'s breathing. Barely. Wet.

The gray has gone all the way up. His neck, his jaw. One side of his face.

teddy: Cold guy.

sam: Don\'t. Don\'t talk. Don\'t move. Somebody\'s coming. Somebody\'s—

teddy: Nobody\'s coming. Listen.

You kneel in the cold on the bottom step.

teddy: Didn\'t slip. I felt it. Something put me down here.

${g.f('dock5') === 'luck' ? 'Above you, at the top of the steps, Jules sits down on the granite and doesn\'t get up.' : 'You don\'t say anything. You can\'t.'}

teddy: My mother. Listen. She thinks it was the GoFundMe. Don\'t let her find out it was Bruno. Don\'t let her owe him. Tell her I saved it. From the warehouse.

His eyes are on yours. Gray, all around them, like frost on a window.

teddy: Tell her I was good at something.`,
    choices: [
      { text: '"I\'ll tell her. You did it. You saved it. I\'ll tell her myself."', tag: 'Promise',
        fx: g => { g.flag('last5', 'promise'); g.flag('promise_halina'); g.hidden('revenant_drift', 0.5); }, go: 'a3_teddy' },
      { text: '"Marisol\'s out, Teddy. She\'s out. You got her out. You did that."', tag: 'Marisol',
        fx: g => { g.flag('last5', 'marisol'); g.hidden('revenant_drift', -0.5); }, go: 'a3_teddy' },
      { text: 'Don\'t say anything. Take his gray hand. Hold it.', tag: 'His hand',
        fx: g => { g.flag('last5', 'hand'); g.hidden('revenant_drift', -1); }, go: 'a3_teddy' }
    ]
  },

  a3_teddy: {
    night: true,
    enter: g => { g.flag('teddy_dead'); g.know('teddy_dead', ['sam', 'jules', 'bree', 'heck'], 'Teddy Kowal died at the bottom of the dry dock at the Navy Yard at 12:53 a.m. on January 23. He was twenty.'); },
    text: g => `${g.f('last5') === 'promise' ? 'sam: I\'ll tell her. You did it. You saved it. Every dollar. I\'ll tell her myself, Teddy. I swear to God.\n\nHe closes his eyes. Opens them.\n\nteddy: Don\'t swear to God. Swear to her.\n\nsam: I swear to her.' : g.f('last5') === 'marisol' ? 'sam: Marisol\'s out. She\'s out, Teddy. Heck\'s got her. She\'s on the grass up there, wrapped in a hospital blanket. You got her out. You held the door. You did that.\n\nSomething in his face lets go.\n\nteddy: Yeah?\n\nsam: Yeah.\n\nteddy: Huh. Okay.' : 'You don\'t say anything.\n\nYou take his hand, the gray one, the one that froze an armored car on Broad Street and a whole parade on the Parkway. It isn\'t cold. It isn\'t warm. It\'s like holding a photograph of a hand.\n\nYou hold it anyway.\n\nHe looks at your hand around his.\n\nteddy: Huh.'}

His breathing changes. Slower. Like somebody walking away down a long hall.

teddy: Listen.

And then nothing.

You wait for the next word. You wait a long time. It doesn\'t come.

Teddy Kowal is twenty years old, and he\'s dead, at the bottom of the dry dock at the Navy Yard, at seven minutes to one on a Saturday morning in January, with his arm in the water.

You look at the water.

Where his hand went in, the river has stopped.

A circle of black water around his gray fingers, three feet wide, perfectly still. Not frozen. *Stopped.* A ripple that was spreading from his hand is standing in the water, a little ring, like a ring in glass. Outside the circle, the river moves, laps at the steps, slides. Inside it, nothing moves at all.

*Ninety seconds after I let go, it holds.*

You count. You don\'t decide to. You just count, out loud, kneeling on the granite, the way he did on the Parkway.

You get to eighty-nine.

At ninety, the ring in the water lets go, and spreads, and is gone, and the river closes over the place where it was.

Up at the top of the steps, somebody screams his name.

It\'s Bree. ${g.f('bree_darted5') ? 'Drugged, on her knees in the grass with Jules holding her up, fighting the dart, she screams it' : 'She screams it'} in her own voice, ragged and high, nobody\'s but hers.

It came back for that.

Just for that.`,
    next: 'a3_after'
  },

  a3_after: {
    night: true,
    loc: 'NAVY YARD',
    clock: { time: '1:04 AM' },
    text: g => `When you climb back up, the truck is pulling away.

No hurry. No lights. It backs up, turns around in the road, and drives off between the buildings toward Broad Street, slowly. It signals at the corner. There\'s nobody there to signal to. The gray figures are gone. The darts are gone. Even the ones that ended up in the grass are gone.

Somebody came and picked it up while you were down there. While you were counting.

${g.f('call5') === 'mikey' ? 'And at the top of the steps, out of breath, in a Phillies hoodie and jeans with his badge on a chain around his neck and his service weapon in his hand, pointed at the ground, is your brother.\n\nmikey: Sammy. Sammy. Are you hurt. Look at me. Are you *hurt*.\n\nYou can\'t answer. He looks past you, down the steps, at what\'s at the bottom.\n\nmikey: Oh, Jesus. Oh, Jesus Christ.\n\nHe was the cop at the gate. He was the reason they left. You\'ll understand that later. Right now he\'s just your brother, holding your face in both hands like you\'re six.' : g.f('call5') === 'vinnie' ? 'And at the top of the steps, out of breath, in Dante\'s black cashmere coat with Dante\'s car keys in his fist, is Vinnie.\n\nvinnie: Sally. Yo. Sally, I saw the truck, I flashed the brights at it, I don\'t know, I don\'t know why they left, I just sat on the horn—\n\nHe looks past you, down the steps, at what\'s at the bottom.\n\nvinnie: Oh, no. Oh, no, no, no.' : g.f('call5') === 'nik' ? 'In your ear, Nik is crying. He\'s been crying for a while, you realize. You can hear him trying to stop.\n\nnik: I called 911. I\'m sorry. I called them at 12:52, from the Navy Yard\'s own front desk number, I spoofed it, I said a man fell in the dry dock. That\'s why they\'re leaving. That\'s why the truck\'s leaving. Bro, I\'m sorry, I didn\'t know what else to do. They\'ll be there in six minutes. Sam. Sam, say something.\n\nsam: You did good, Nik.\n\nnik: I didn\'t. I didn\'t. I watched.' : 'There\'s nobody else. Nobody\'s coming. The Navy Yard is dark and empty and enormous around you, and the only sound is Heck breathing.'}

Heck is sitting on the grass with Marisol across his lap. She\'s stirring. Her eyes open and close.

Bree is beside him, ${g.f('bree_darted5') ? 'slumped against his shoulder, fighting the dart, saying *Teddy* over and over in her own hoarse voice, like she\'s afraid it\'ll go away again if she stops' : 'with her knees pulled up to her chest, saying *Teddy* over and over in her own hoarse voice, like she\'s afraid it\'ll go away again if she stops'}.

Jules is standing a little apart from all of you, on the edge, looking down. Her arms are wrapped around herself. She\'s not crying. Jules doesn\'t, in front of people.

Heck lifts his head and looks at you, and then down the steps.

heck: Lo llevamos a casa, papa. We take him home. We don\'t leave him in the water. He hated the cold.

${g.f('call5') === 'mikey' ? 'mikey: Sammy. Listen to me. If he leaves this yard in your arms, there\'s no accident. There\'s a missing kid and a body in somebody\'s car and a homicide detective at your dorm by Tuesday. Leave him. I\'ll call it in. I\'ll be the one who found him. A cop who heard a noise. Let me do this one thing.' : ''}`,
    choices: [
      { text: 'Carry him home. Heck\'s right. Nobody leaves Teddy Kowal in the water.', tag: 'Carry him',
        fx: g => { g.flag('body5', 'carried'); g.bond('heck', { trust: 2, affection: 1 }); g.bond('bree', { trust: 2 }); g.hidden('halcyon_heat', 1); g.heat('police', 1); }, go: 'a4_saturday' },
      { text: 'Leave him for the police. It\'s an accident if they find him here. He\'d want his mother to have an accident, not a mystery.', tag: 'Leave him',
        fx: g => { g.flag('body5', 'left'); g.bond('heck', { trust: -1 }); if (g.f('call5') === 'mikey') g.bond('mikey', { trust: 2 }); }, go: 'a4_saturday' }
    ]
  }
});
