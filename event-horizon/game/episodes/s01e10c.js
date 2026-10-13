/* S1 · E10 · BROAD STREET, part 3 of 4: Act Three ("Ninety Seconds"). */
EH.scenes('s01e10', {

  /* ================= ACT THREE: NINETY SECONDS ================= */
  a3_teddy: {
    card: { kind: 'act', label: 'Act Three', title: 'Ninety Seconds' },
    loc: 'THE PARKWAY · 21ST STREET',
    clock: { time: '9:52 AM' },
    text: g => `You crouch down next to him at the curb.

Up close, it\'s worse. His hand on the asphalt is gray to the wrist, the same flat photograph-gray as the street, and the gray is creeping up his forearm under the sleeve. His lips are blue. There\'s blood in his teeth. He\'s been holding the whole Parkway for eleven minutes, and it\'s eating him.

teddy: Cold guy.

He doesn\'t look at you. He looks at the dog.

teddy: Listen. Listen to me. You see the dog?

You look up. Five stories of cartoon dog, frozen at thirty degrees, leaning out over the crowd at the corner of 21st. Right above a lamppost. Right above a family on the sidewalk in folding chairs.

teddy: When I let go, everything goes back to what it was doing. That\'s how it works. Ninety seconds after I let go, it all comes back at once. That dog was falling over when I stopped it. It\'s gonna finish.

teddy: I didn\'t think about the wind. I thought about everything. The van. The chair. The money. I didn\'t think about the *wind*, Sam.

He almost never uses your name.

teddy: So I can\'t let go. Not till the handlers get back on the ropes. And they won\'t, \'cause they\'re scared, \'cause it\'s *frozen*, \'cause it\'s magic. And the money\'s not coming. Is it.

Up the Parkway, on the big screen beside the grandstand, the 6abc anchors have been replaced by a slide that says *PLEASE STAND BY*.

The cold coming up out of the asphalt is in your teeth now. Your nose is pouring.`,
    choices: [
      { text: '"Let go now. On my count. I\'ll get the handlers on the ropes. Let me fix the dog. Let go."', tag: 'Talk him down',
        check: { kind: 'move', move: 'Talk Them Down', attr: 'charm', skill: 'persuade', label: 'Get Teddy to let go', on: { strong: 'a3_teddy_yes', weak: 'a3_teddy_maybe', miss: 'a3_teddy_no' } } },
      { text: 'Don\'t argue. Get up. Get the handlers back on the ropes yourself, one by one.', tag: 'The ropes',
        fx: g => { g.flag('teddy10', 'ropes'); g.bond('teddy', { respect: 1 }); }, go: 'a3_ropes' }
    ]
  },
  a3_teddy_yes: {
    enter: g => { g.flag('teddy10', 'agreed'); g.bond('teddy', { trust: 2 }); },
    text: `sam: Let go on my count. I\'ll get the handlers back on the ropes. All fifty. You let go when I say, and the dog comes down slow, and nobody gets hurt, and you go home.

Teddy laughs, red-toothed.

teddy: Home.

sam: To your mom.

He closes his eyes. He nods, once.

teddy: Okay. Your count, cold guy. I\'m tired.

You stand up to go for the ropes, and Teddy opens his mouth to say something else.`,
    next: 'a3_darts'
  },
  a3_teddy_maybe: {
    enter: g => { g.flag('teddy10', 'maybe'); g.bond('teddy', { trust: 1 }); },
    text: `sam: Let go on my count. I\'ll get the handlers back on the ropes.

teddy: And the money?

sam: There\'s no money, Teddy.

He looks at you for a long second, blood on his lip.

teddy: There\'s gotta be. There\'s gotta be *something* for this.

He looks at the dog. He looks at the family in folding chairs under the lamppost. A little boy in a Phillies hat waving a tiny flag.

teddy: …Get the ropes. Get the ropes and I\'ll think about it. That\'s all I got.

You stand up to go for the ropes, and Teddy opens his mouth to say something else.`,
    next: 'a3_darts'
  },
  a3_teddy_no: {
    enter: g => { g.flag('teddy10', 'refused'); g.bond('teddy', { tension: 1 }); },
    text: `sam: Let go. Please. There\'s no money coming. Let go now.

teddy: You don\'t get to tell me that. Not you. You got a mom with two kidneys and a house on Mifflin Street. Get away from me.

He presses his hand down harder. The gray creeps past his elbow. He makes a sound through his teeth.

teddy: *Get away from me, Sam.*

You stand up. You don\'t go anywhere. Teddy opens his mouth to say something else.`,
    next: 'a3_darts'
  },
  a3_ropes: {
    text: `You don\'t argue. You get up.

The handlers are huddled on the median in their blue jackets, fifty of them, staring up at the dog. Their supervisor is a woman with a whistle and a clipboard and an expression like the end of the world.

sam: Get back on the ropes! When it unfreezes, it\'s gonna fall. You gotta be on the ropes when it moves!

HANDLER SUPERVISOR: It\'s *frozen*! You can\'t move the ropes!

sam: You don\'t have to move them! Just hold them! Hold on and lean back like you were doing!

She looks at you. A kid in a hoodie with blood down the front of his face, yelling. Then she blows her whistle.

HANDLER SUPERVISOR: *ROPES! Everybody on your rope! Now!*

They go. Slowly. One by one. A rope at a time. You run between them, putting hands on the rigid lines, *this one, here, hold on*.

Twenty of them. Thirty.

Behind you, at the curb, Teddy opens his mouth to say something to you.`,
    next: 'a3_darts'
  },

  a3_darts: {
    loc: 'THE PARKWAY · 21ST STREET',
    clock: { time: '9:56 AM' },
    enter: g => { g.know('teddy_darted', ['sam'], 'On the Parkway, Halcyon\'s fake medics darted Teddy Kowal. When his hand left the street, the ninety seconds started.'); },
    text: g => `A dart blooms in the side of his neck. Red fletching. *Tick.*

Teddy looks surprised. That\'s all. Just surprised, like somebody tapped him on the shoulder on the El.

His hand slides off the asphalt.

teddy: …Ninety.

He falls sideways off the folding chair cushion into the gutter.

The flat gray goes out of the street. It\'s still frozen. Everything\'s still frozen. But you can *feel* it now, under your feet, the way you can feel ice on the Delaware getting ready to break. A clock, somewhere, started.

*Ninety seconds.*

Two men in EMS jackets are already lifting Teddy onto a stretcher. Fast. Professional. Very gentle with his head.

HALCYON MEDIC: Medical emergency, folks, step back, give us room. He\'s having a seizure. We\'ve got him.

Heck roars.

It isn\'t a word. It\'s heat. The air around him goes wavy, and his Carhartt jacket starts smoking at the shoulders, and the frozen barricade beside him begins to glow a dull red where his hand is on it. The crowd scatters back from him in a ring. The two medics with Teddy\'s stretcher don\'t even look up. Three more, from the ambulance, raise what look like flashlights, and they aren\'t flashlights.

Darts. Into Heck\'s chest, his shoulder, his thigh. He pulls them out like splinters. He keeps coming.

And from up 21st Street, running, in a puffer coat, screaming:

bree: *LET HIM GO! LET HIM GO!*

But it isn\'t Bree\'s voice. It\'s Teddy\'s. It\'s Teddy\'s voice coming out of Bree\'s mouth, perfect, *Let him go*, and one of the medics actually turns around to look at the stretcher, confused, before another one shoots Bree in the shoulder and she sits down hard on the curb.

${g.f('nik_chair') ? 'nik: *Salvatore. SALVATORE. They\'re shooting people. On the stream. On LIVE TV. The anchors are saying they\'re paramedics. Sam, the anchors are saying they\'re PARAMEDICS—*' : ''}

And then the men turn to you.

You\'re standing in the street with blood running out of your nose, and your breath smoking in a way nobody else\'s breath is smoking, and on the tablet one of them is holding low by his hip, you know exactly what color you are.

Blue.

The one with the tablet looks up from it, and looks at you, and says into the collar of his jacket, very calmly:

HALCYON MEDIC: Seventeen.`,
    choices: [
      { text: 'Run. Over the frozen barricade, under the float, through the choir kids. Break the line of sight.', tag: 'Run',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, label: 'Get clear of the darts', physical: true, power: true, on: { crit: 'a3_evade', success: 'a3_evade', partial: 'a3_hit', fail: 'a3_hit', botch: 'a3_hit' } } },
      { text: 'Go at the one with the tablet. Take it. Take him down.', tag: 'Fight',
        check: { kind: 'pool', attr: 'body', skill: 'brawl', diff: 2, label: 'Take the tablet', physical: true, power: true, on: { crit: 'a3_tablet', success: 'a3_tablet', partial: 'a3_hit', fail: 'a3_hit', botch: 'a3_hit' } } }
    ]
  },
  a3_evade: {
    enter: g => { g.flag('darts10', 'evaded'); },
    text: `You go over the frozen barricade with one hand, like a hurdle at Neumann-Goretti. A dart *tinks* off the steel where your hip was. You go under the edge of the papier-mâché pumpkin pie on your knees. A dart sticks in the crust above your head, quivering. You come out among the choir kids, and they part around you, screaming, and you\'re through them and around the far side of the float, and you put your back against it and breathe.

They don\'t follow. They don\'t have to. They\'re spreading out. Four of them, in a loose ring, coming around both ends of the float, patient, unhurried, like men herding a dog into a corner.

You\'re cornered between a frozen pie and a frozen barricade with nowhere to go but up.

You could Slip. You know what\'s waiting in there. You can feel it, the way you feel a step that isn\'t there in the dark.`,
    next: 'a3_jules'
  },
  a3_tablet: {
    enter: g => { g.flag('darts10', 'tablet'); g.know('tablet10', ['sam'], 'You took a Halcyon tablet off a fake medic on the Parkway. On it, a list. Your face, labeled 17. And faces you know.'); },
    text: `You go straight at him. He doesn\'t expect it. Nobody ever expects the kid to come *at* them.

You hit him at the waist like you\'re sliding into second, and he goes down on the frozen asphalt and the asphalt doesn\'t give an inch, and his head bounces. You come up with the tablet in your hands.

On the screen, for one second, before it locks: a list. Thumbnails. Faces. Teddy. Bree. Heck. A girl with dark curly hair, *RESIDENTIAL*. Femi, with a gray line through his photo.

And you. Your Temple ID photo. *17 · CONFIRMED (PENDING)*.

The screen goes black. Somebody shoots at you. The dart goes through the hood of your sweatshirt and out the other side. You run. Over the barricade, under the edge of the frozen pie, through the choir kids, and you come around the far side of the float and put your back against it, and they don\'t follow.

They don\'t have to. They\'re spreading out. Four of them, in a loose ring, coming around both ends of the float, patient, unhurried, like men herding a dog into a corner.

You\'re cornered between a frozen pie and a frozen barricade with nowhere to go but up.`,
    next: 'a3_jules'
  },
  a3_hit: {
    enter: g => { g.flag('darts10', 'hit'); g.injure({ id: 'dart10', name: 'Dart (sedative, fighting it)', pen: 1, heal: 1, affects: ['reflex', 'wits'] }); },
    text: `You make it two steps.

The dart takes you in the back of the left shoulder. It doesn\'t hurt. That\'s the worst part. A pinch, a tick, and then a warmth that spreads down your arm like somebody poured honey in your sleeve.

You pull it out. Half the plunger\'s gone in. You keep going, on legs that feel like they belong to someone a little farther away than you, over the frozen barricade, under the edge of the frozen pumpkin pie, through the choir kids, and you come out on the far side of the float and put your back against it and slide down it until you\'re sitting.

They don\'t follow. They don\'t have to. Four of them, in a loose ring, coming around both ends of the float. Patient. Unhurried. Men walking toward a dog that\'s already lying down.

The world is getting soft at the edges. You fight it. You bite the inside of your cheek until it bleeds and the edges come back, a little.`,
    next: 'a3_jules'
  },

  a3_jules: {
    loc: 'THE PARKWAY · 21ST STREET',
    clock: { time: '9:57 AM' },
    enter: g => { g.flag('jules_walked'); g.hidden('jules_debt', 2); g.know('jules_darts', ['sam'], 'On the Parkway, Jules walked down the middle of the frozen street through Halcyon\'s darts. Every one of them missed. Her nose was bleeding. You saw it, and you don\'t know what you saw.'); },
    text: g => `And then you see her.

She\'s coming down the middle of the frozen Parkway. Not on the sidewalk. *In the street*, inside the barricades, where nobody is supposed to be, between the frozen floats, walking straight down the dotted white line in a camel coat and pearl earrings and the riding boots from her bedroom floor, like the street was built for her to walk down.

She climbed over the barricade at the grandstand. She left her seat on the aisle. She\'s been walking for fifteen minutes toward the one place in Philadelphia everybody else is running from.

The men in the EMS jackets see her too. One of them lifts the thing that isn\'t a flashlight. Not at her. At you. And she steps into the line between you without breaking stride, like she\'s stepping around a puddle.

He fires.

You watch the dart come. You can see it, slow, the way you see things now. You see it go past her ear close enough to move her hair. It hits the frozen rope of the cartoon dog behind her and *stops*, dead, in midair, stuck to the stasis like a fly on flypaper, and hangs there.

Another shot. The dart hits the pavement in front of her and stands straight up, quivering, like it\'s been planted.

Another one jams. You hear the man swear.

The fourth man fires from ten feet away, straight at her chest, and in that exact second a gust comes down the Parkway off the river, the first gust since the freeze, and it lifts the hem of her coat out like a sail, and the dart goes through the camel wool an inch from her ribs and out the back and skitters away across the asphalt.

She doesn\'t look at any of it. She doesn\'t look at the men. She doesn\'t look at the darts. She looks at you.

Her nose is bleeding. A thin red line from one nostril to her lip. She doesn\'t seem to notice it.

She gets to you. She stands between you and the four men, her back to them, and looks down at you sitting against the frozen pie.

jules: Get up, Kearney.

From somewhere behind the men, a radio crackles. A calm voice you know.

*Hold fire. All units, hold fire. That\'s the Pemberton girl. Hold.*

The four men lower their arms. They stand there. Not leaving. Waiting.

Jules holds her hand down to you. You take it. It\'s ice cold. She pulls you up, and she\'s stronger than she looks, and she doesn\'t let go.

sam: Jules. They were— the darts. They all—

jules: Nothing happens to me. I told you. On the roof.

She says it flat. Like a fact she\'s sick of. She wipes her lip with the back of her glove and looks at the blood on the leather like it belongs to somebody else.

${g.f('nik_chair') ? 'nik: *…Sam? Sam, the stream just showed— there\'s a girl walking down the— is that JULES? Sam. Sam, I just watched four guys miss Jules Pemberton from ten feet away. Sam, what am I looking at.*\n\nYou don\'t answer him. You don\'t know.' : 'You saw four darts miss her. You\'re almost sure you saw it.'}

And under your feet, the street shivers.

*Thirty seconds.*`,
    next: 'a3_choice'
  },

  a3_choice: {
    loc: 'THE PARKWAY · 21ST STREET',
    clock: { time: '9:57 AM' },
    text: g => `You can see all of it at once. That\'s the thing about how you see now. All of it, laid out, like a map.

**Teddy.** On the stretcher, unconscious, being slid into the back of the third ambulance. One medic climbing in after him. The other with his hand on the door. When those doors close, Teddy goes to the Navy Yard, to a room with a number on it, and his mother sits in her recliner on Edgemont Street with the cycler humming and waits for him to come home.

**The dog.** Five stories of balloon, frozen mid-fall, over the lamppost at the corner of 21st. When it comes back, it\'s going to hit that lamppost with all the wind in the world, and the lamppost is going to come down. And under the lamppost, on the sidewalk, in a wheelchair with a blanket over her knees, is a woman you know. Carmen Torres. Her hip, from August. From the Hitch. From the bus you were too slow for.

And standing next to her chair, in a puffy coat, eight years old, looking straight at you across the frozen Parkway, is Jayden.

He knows you. Of course he knows you. He knows the cold.

jayden: *COLD MAN!*

**Heck.** Burning on his knees by the barricade with four darts in him, too hot to touch, too slow to stand.

**Bree.** On the curb, darted, trying to crawl toward Teddy\'s ambulance on her hands.

*Twenty seconds.*

You can\'t do all of it. You\'ve known that since August.

Jules is still holding your hand.

jules: Sam. *Go.*`,
    choices: [
      { text: 'Teddy. The ambulance doors. He let go of forty thousand dollars for your father. Get him out.', tag: 'Teddy',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, label: 'Reach the ambulance', physical: true, power: true, near: ['jules'], on: { crit: 'a3_save_teddy', success: 'a3_save_teddy', partial: 'a3_save_teddy_hurt', fail: 'a3_save_teddy_hurt', botch: 'a3_save_teddy_hurt' } } },
      { text: 'Jayden and Carmen. The lamppost. You were too slow once. Not twice.', tag: 'Jayden',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, label: 'Reach the lamppost', physical: true, power: true, near: ['jules'], on: { crit: 'a3_save_jayden', success: 'a3_save_jayden', partial: 'a3_save_jayden_hurt', fail: 'a3_save_jayden_hurt', botch: 'a3_save_jayden_hurt' } } },
      { text: 'Both. Slip. You know what\'s waiting in there. Do it anyway.', tag: 'Both', slip: true,
        fx: g => { g.flag('choice10', 'both'); if (g.S.drift >= 9 || g.hv('revenant_drift') >= 10) g.flag('unstick10'); }, go: 'a3_both' }
    ]
  },

  a3_save_teddy: {
    enter: g => { g.flag('choice10', 'teddy'); g.flag('teddy_saved'); g.flag('heck_taken10'); g.bond('teddy', { trust: 3, affection: 2 }); g.bond('bree', { trust: 2 }); g.hidden('halcyon_heat', 1); },
    text: `You let go of Jules\'s hand.

You run. Not the Slip. Just running, the way you ran across Broad Street in August toward a bus, every bit of you, the frozen asphalt hard under your sneakers, and you get to the third ambulance as the medic is swinging the door shut, and you hit the door with your shoulder and it bangs back open and catches him in the face.

The one inside is reaching for something on his belt. You don\'t let him get there. You grab the stretcher by its rail and pull, and it comes out of the ambulance on its wheels and drops off the back bumper with a crash, and Teddy rolls half off it onto the street, and you get your arms under him and drag him, backward, away, ten feet, twenty, toward the crowd, toward the cameras, toward half a million people with their phones up.

The medics stop at the edge of the crowd. They look at the phones. They look at each other.

Then the street lets go.

It comes back all at once, the way Teddy said. Every sound. Every bit of wind. The barricades rattle. The pumpkin-pie float lurches forward a foot and the choir kids scream. And the dog finishes falling.

Five stories of balloon come down on the corner of 21st in the gust, and the handlers on the ropes, the ones you got back on the ropes or the ones who never left, lean back with everything they have, and it isn\'t enough. The dog hits the lamppost. You hear the steel scream. You see it start to go over, toward the sidewalk, toward a wheelchair.

And Heck catches it.

He\'s on his feet. You don\'t know how. Four darts in him, smoking, and he gets under the falling lamppost with both burning hands and *holds* it, and the steel goes soft and red where his hands are, and bends, and the whole pole folds in half over his shoulders like a drinking straw and comes down in the street behind him instead of on the sidewalk in front of him.

Jayden is screaming. Carmen has her arms around him. Nobody\'s hurt.

Heck stands there in the street with the bent pole across his back, steam coming off him in sheets.

He looks at you. He smiles. He says, very gently:

heck: Papa.

Then he falls over.

The men in the EMS jackets are on him before he hits the ground. Five of them. He doesn\'t fight. He\'s out. They get him on a stretcher with gloved hands, and you hear one of them hiss when he touches Heck\'s arm through the glove, and they have him in the back of an ambulance in eleven seconds, and the doors close, and it pulls away up 21st Street with its lights going and no siren.

Teddy is in your arms in the gutter, unconscious, breathing.

Heck is gone.`,
    next: 'a3_bree'
  },
  a3_save_teddy_hurt: {
    enter: g => { g.flag('choice10', 'teddy'); g.flag('teddy_saved'); g.flag('heck_taken10'); g.bond('teddy', { trust: 3, affection: 2 }); g.bond('bree', { trust: 2 }); g.hidden('halcyon_heat', 1); g.injure({ id: 'ribs10', name: 'Cracked ribs (ambulance door)', pen: 1, heal: 2, affects: ['body', 'reflex'] }); },
    text: `You let go of Jules\'s hand and run, and halfway there your legs remember the dart, or the cold, or three months of not sleeping, and you stumble.

You get there anyway. Late. The door is already closing. You get your arm in the gap and the medic slams it on you, twice, hard, and you feel something in your side go *crack* like a stick in a fire. You don\'t let go. You pull the door open with your broken side screaming and grab the stretcher rail and pull, and it comes out and drops off the bumper with a crash, and Teddy rolls into the street, and you drag him, backward, toward the crowd, toward the phones.

The medics stop at the edge of the crowd. They look at the phones.

Then the street lets go.

It comes back all at once. Every sound. Every bit of wind. And the dog finishes falling. It hits the lamppost, and the steel screams, and the pole starts to go over toward the sidewalk, toward a wheelchair.

And Heck catches it.

Four darts in him, smoking, and he gets under the falling lamppost with both burning hands and holds it, and the steel goes soft and red where his hands are, and folds over his shoulders like a drinking straw and comes down in the street behind him instead of on the sidewalk.

Jayden is screaming. Carmen has her arms around him. Nobody\'s hurt.

Heck looks at you across the street. He smiles.

heck: Papa.

Then he falls over, and the men in the EMS jackets are on him before he hits the ground, and they have him in the back of an ambulance in eleven seconds. It pulls away up 21st Street with its lights going and no siren.

Teddy is in your arms in the gutter, breathing. Every breath you take is a knife.

Heck is gone.`,
    next: 'a3_bree'
  },

  a3_save_jayden: {
    enter: g => { g.flag('choice10', 'jayden'); g.flag('teddy_taken10'); g.bond('jayden', { trust: 3, affection: 3 }); g.bond('carmen', { trust: 3, affection: 2 }); g.know('carmen_cold_man', ['sam', 'carmen', 'jayden'], 'On the Parkway, the cold man came back for Jayden and Carmen. This time he was fast enough.'); g.hidden('revenant_drift', -1); },
    text: `You let go of Jules\'s hand.

You run. Not toward the ambulance. Away from it. Across the frozen Parkway, between the floats, toward the corner of 21st, toward a boy in a puffy coat yelling *cold man* like it\'s your name.

Behind you, you hear the ambulance doors close. You hear Bree scream Teddy\'s name in her own voice. You don\'t turn around.

The street lets go.

It comes back all at once, the way Teddy said. Every sound. Every bit of wind. The barricades rattle. And the dog finishes falling. Five stories of balloon come down on the corner in the gust, and the handlers lean back on the ropes with everything they have, and it isn\'t enough, and it hits the lamppost, and you hear the steel scream.

You\'re already there.

You get Carmen\'s wheelchair by the handles and Jayden by the back of his coat, and you pull, the way you pulled him off Broad Street in August, and the chair tips back on its wheels and rolls, and you all go over together in a heap on the sidewalk six feet away.

The lamppost comes down where they were. It hits the folding chairs and the curb with a sound like a car crash, and the glass globe on top explodes across the sidewalk, and the cartoon dog sags over it, deflating, with its red bowtie in the gutter.

Jayden is on top of you. He\'s not crying. He\'s looking at you from six inches away with his whole face.

jayden: You came back.

sam: Yeah, buddy.

jayden: You were *faster* this time.

Carmen is on the sidewalk on her side with her bad hip, laughing or crying, holding on to your sleeve. She says something in Spanish to the sky. You only catch *San Judas*.

And behind you, on 21st Street, an ambulance with no numbers on its roof pulls away with its lights going and no siren. Teddy is in it.

Heck is on his knees in the street, steaming, roaring at the back of it. He gets up. He starts to run after it, burning, and he\'d catch it, too, he\'d tear the doors off, except Bree is hanging on his arm with both hands, darted, half-conscious, crying, *Hector, no, no, they want you too, they want you too*, and he stops. He stops for her.

He stands in the street with his hands on fire and watches it go.`,
    next: 'a3_bree'
  },
  a3_save_jayden_hurt: {
    enter: g => { g.flag('choice10', 'jayden'); g.flag('teddy_taken10'); g.bond('jayden', { trust: 3, affection: 3 }); g.bond('carmen', { trust: 3, affection: 2 }); g.know('carmen_cold_man', ['sam', 'carmen', 'jayden'], 'On the Parkway, the cold man came back for Jayden and Carmen. This time he was fast enough.'); g.hidden('revenant_drift', -1); g.injure({ id: 'glass10', name: 'Glass cuts and a wrenched shoulder (lamppost)', pen: 1, heal: 2, affects: ['body', 'reflex'] }); },
    text: `You let go of Jules\'s hand and run, across the frozen Parkway toward a boy yelling *cold man*, and halfway there your legs remember the cold and the dart and three months of no sleep, and you stumble, and you get up, and you\'re late.

Behind you, you hear the ambulance doors close. You hear Bree scream Teddy\'s name in her own voice.

The street lets go. The dog finishes falling. It hits the lamppost, and the steel screams, and the pole comes over.

You get there with nothing left. You don\'t have time to pull. You throw yourself over them, over Carmen in her chair and Jayden beside it, your arms around both of them, and the lamppost comes down beside you, close enough to feel the wind of it, and the glass globe on top explodes across all three of you.

When you lift your head, there\'s glass in your hair and your back and your hands, and your shoulder\'s wrong, and Jayden is under you, looking up from six inches away.

jayden: You came back.

sam: Yeah, buddy.

jayden: You\'re bleeding.

sam: Yeah.

jayden: You were faster this time, though.

Carmen is holding on to your sleeve, saying *San Judas, San Judas* to the sky.

And behind you, an ambulance with no numbers on its roof pulls away up 21st Street, lights going, no siren. Teddy is in it.

Heck starts to run after it, burning, and Bree hangs on his arm with both hands, darted, half-conscious, *Hector, no, they want you too*, and he stops. He stops for her.`,
    next: 'a3_bree'
  },

  a3_both: {
    enter: g => { g.flag('teddy_saved'); g.bond('teddy', { trust: 3 }); g.bond('jayden', { trust: 3, affection: 3 }); g.bond('carmen', { trust: 2 }); if (g.f('unstick10')) { g.drift(3); g.hidden('revenant_drift', 3); g.injure({ id: 'unstick10', name: 'Time debt (Unstick)', pen: 2, heal: 3, affects: ['body', 'reflex', 'wits'] }); g.know('revenant5', ['sam'], 'In the Slip on the Parkway, the man who stands like you walked toward you between the frozen balloons. "You can\'t carry all of them." You said: "Watch me."'); } },
    text: g => `You let go of Jules\'s hand.

You step through.

It\'s January. It\'s *deep* January, the kind under the river, the kind under 95. The balloons hang. The wind hangs. A dart hangs in the air beside Jules\'s ear, and Jules hangs, her hand still out where yours was. Jayden\'s mouth is open on *MAN*. Bree is a statue on the curb, reaching.

${g.f('unstick10') ? `And the cold closes over you like ice over a hole.

You know it immediately. You\'ve been here twice. Under 95 and in the stairwell. Stuck. The walls of the second getting thick around you. This time you don\'t fight it. This time you *use* it.

You go to Teddy first. Into the back of the ambulance, past the frozen medic, and you lift him off the stretcher, and he weighs nothing, nothing weighs anything here, and you carry him across the frozen Parkway and lay him down on the sidewalk on the far side of the crowd, under a hundred phones held up and frozen, and you fold his gray hand on his chest.

Then you go to the corner of 21st. You stand under the frozen dog and look at the lamppost and the angle and the wind, and you take Carmen out of her wheelchair, gently, her bad hip, and carry her thirty feet, and come back for Jayden, and then for the chair.

You\'re so cold your teeth have stopped chattering. That\'s bad. You know that\'s bad.

You turn around.

He\'s standing in the middle of the Parkway, between the frozen floats, ten feet from you.

Your face. Older. Gray at the temples. A gap where the ring finger should be. He\'s not frozen. He\'s walking toward you. His breath doesn\'t smoke. He doesn\'t have any warmth left to smoke.

old_sam: You can\'t carry all of them.

His voice is yours, with nothing left on it.

sam: Watch me.

He stops. Something moves in his face, and you know it, because it\'s your face, and it\'s the thing your face does right before you cry.

old_sam: I did. I watched. That\'s all I do.

He turns and looks at Jules, frozen beside the pumpkin pie with her hand still out where yours was, a dart hanging in the air beside her ear.

old_sam: Don\'t trust the lucky one.

Then he\'s gone, and the ice is at your mouth, and you grab for anything, and what you grab is Jules\'s hand, cold, in your hand, two seconds ago, *Get up, Kearney*, and you pull, and you pull—` : `You go to Teddy first. Into the ambulance, past the frozen medic, and you lift him off the stretcher and carry him across the frozen Parkway, and lay him on the sidewalk under a hundred frozen phones.

Then the corner of 21st. Carmen out of her chair, gently, her bad hip. Jayden. The chair.

You step back out.`}

The street lets go.

It all comes back at once. The wind. The dog falls on the lamppost, and the steel screams, and the pole comes down across an empty sidewalk. The ambulance doors slam on an empty stretcher. Half a million people scream at once, because a boy is gone from the back of an ambulance, and a woman in a wheelchair and a little boy are gone from under a lamppost, and they\'re all somewhere else now, and nobody saw them move.

${g.f('unstick10') ? `And you\'re on your knees in the middle of the Parkway.

Your nose is pouring. Your ears are bleeding. You can\'t feel your hands. You look at your watch, and it says 10:01, and it was 9:57, and you don\'t know where four minutes went.

Somebody is kneeling in front of you. Somebody is holding your face in both hands. You know the hands.

mikey: *Sammy.*

He\'s in plainclothes, with his badge on a chain, and his face is white.

mikey: Sammy. You were— I was *looking* at you. I was looking right at you. You were standing next to the girl, and then you were *here*, and you were— Jesus Christ, you\'re like ice, you\'re *ice*—

He\'s looking at your face. At the blood. At the frost in your eyebrows.

He knows. You watch him know.

mikey: It\'s you.

He doesn\'t say it like a question.

mikey: The Blur. It\'s you. It\'s been you since August.

You can\'t answer. Your teeth won\'t work. He pulls his hoodie off over his head, right there in the street, and puts it on you, over your sweatshirt, and pulls you into him.

mikey: Okay. Okay. I got you. I got you, Sammy. Nobody\'s taking you anywhere.` : 'You\'re standing beside Jules again with your nose bleeding, like you never moved.'}`,
    next: 'a3_bree'
  },

  a3_bree: {
    loc: 'THE PARKWAY · 21ST STREET',
    clock: { time: '10:03 AM' },
    enter: g => { if (g.f('unstick10')) { g.heat('mikey', 10); g.know('sam_slip', ['mikey']); g.flag('mikey_knows'); } g.know('mikey_bree', ['sam', 'mikey'], 'On the Parkway, Mikey stopped a fake ambulance from taking Bree Kowal. He made them back off on live TV.'); },
    text: g => `They try to take Bree.

Two of them get her onto a stretcher on the curb while she\'s half under from the dart, and they\'re rolling her toward the fourth ambulance when a voice comes across the street. A cop voice. A South Philly cop voice, the loudest voice in the world.

mikey: *PPD! Stop that stretcher!*

${g.f('called_mikey10') ? 'He\'s been standing beside the fourth ambulance for an hour. Since you called him. Watching it. Watching the men in the polo shirts. Writing things down.' : 'He\'s coming down 21st Street at a run, badge out, holding it over his head.'}

HALCYON MEDIC: Officer, we\'re contracted EMS, this patient is having a—

mikey: Then you won\'t mind showing me your PFD certification. And your unit number. And the name of your medical director.

He puts himself between the stretcher and the ambulance doors. He\'s not big, Mikey, not like Heck. But he\'s been a cop four years and a soldier four before that, and he stands like a wall.

mikey: And you won\'t mind if all these nice people film it.

He turns around to the crowd and holds his badge up.

mikey: *Everybody! Phones up! Get his face! Get the truck!*

Five hundred phones come up.

The man in the EMS jacket looks at the phones. He touches his ear. He listens.

Then he lets go of the stretcher, and he and his partner get back in the fourth ambulance, and it pulls away up 21st Street with its lights going and no siren. Like the others.

Bree sits up on the stretcher. She looks at Mikey. Then she says, in Mikey\'s exact voice, perfect, cracked with the same fear:

bree: *Thanks, officer.*

And she slides off the stretcher and goes to find ${g.f('choice10') === 'jayden' ? 'Heck' : 'Teddy'}.

Across the street, Mikey looks at you.

${g.f('mikey_knows') ? 'He doesn\'t say anything. He doesn\'t have to. He knows, now. You watch him put it in the drawer with everything else. You watch the drawer not close.' : 'He looks at you for a long time, standing there in the street with blood on your face, beside Jules Pemberton. Then he looks at the ambulances going away up 21st. He\'s adding it up. You watch him add it up.'}

${g.f('nik_chair') ? 'In your ear, very quietly, from a bathroom in Edison, New Jersey:\n\nnik: *…Bro. Your brother\'s a legend.*' : ''}`,
    next: 'a4_waterworks'
  }
});
