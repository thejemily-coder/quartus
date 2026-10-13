/* S2 · E1 · AFTER THE HOLIDAY (season premiere), part 1 of 4: meta, cold open, Act One ("Leftovers"). */
EH.episode({
  id: 's02e01', season: 2, number: 1, title: 'After the Holiday', look: 's2', runtime: 'premiere',
  cast: ['sam', 'jules', 'mikey', 'frank', 'rosa', 'vinnie', 'teddy', 'nik', 'simone', 'grace'],
  start: 'cold_open',
  xp: 6,
  previously: g => [
    'Pop owes the Iannucci family $41,000. He paid $11,400 on Thanksgiving.',
    g.f('choice10') === 'both' ? 'On the Parkway you Slipped and saved them all. You got stuck. You lost four minutes.' : g.f('choice10') === 'jayden' ? 'On the Parkway you saved Jayden and Carmen. Halcyon took Teddy.' : 'On the Parkway you pulled Teddy out of an ambulance. Halcyon took Heck.',
    g.f('mikey_knows') ? 'Mikey saw you come back. "It\'s you. The Blur."' : 'Mikey saw you on the Parkway, bleeding.',
    'Jules walked through four darts. Every one of them missed.',
    g.f('bruno10') === 'card' ? 'Bruno Iannucci left his card at Thanksgiving dinner. You put it in your pocket.' : 'Bruno Iannucci left his card at Thanksgiving dinner. "After the holiday. Come see me. Alone."',
    'Dr. Achterberg: "ES-17 is confirmed."'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      loc: '400 NORTH BROAD · POLICE HEADQUARTERS',
      clock: { day: 'Fri', date: 'Nov 27', time: '8:15 AM' },
      text: g => `> THE CAMERA.

The new police headquarters used to be the Inquirer building. It still has the white clock tower over North Broad.

On the sixth floor, in a conference room with a view of North Broad and a coffee machine that doesn\'t work, Officer Michael Kearney sits across a table from Cole Brannigan.

There\'s a laptop between them. On the screen, thermal footage of the Parkway, frozen on a single frame. Half a million orange bodies. And in the middle of the street, a long blue smear, like somebody dragged a wet finger across a painting. At the end of the smear, a small orange shape, kneeling, with its arms around something blue.

BRANNIGAN: That\'s you, Officer. The orange one.

mikey: Okay.

BRANNIGAN: And that, in your arms. What\'s that?

mikey: That\'s my brother. He had a nosebleed. He gets \'em.

Brannigan nods slowly, like that\'s an interesting answer to a question he didn\'t ask.

BRANNIGAN: He does, doesn\'t he. He gets them a lot.

He advances the footage one frame. The blue smear is gone. There\'s just the orange shape, kneeling, holding a shape that\'s turning slowly from blue at the edges to orange, like a stove coil cooling backward.

BRANNIGAN: In this frame, your brother is thirty-one degrees Fahrenheit. In the next, he\'s ninety-four. Do you have any idea how that happens, Officer?

mikey: I\'m a patrol cop, Mr. Brannigan. I don\'t know how a microwave happens.

Brannigan smiles. He closes the laptop.

BRANNIGAN: You were very helpful on the task group. Very diligent. I want you to know that I asked for you specifically, and I\'ve enjoyed working with you.

mikey: Past tense.

BRANNIGAN: As of Monday, you\'re back in a car in the Third District. Your captain agrees it\'s for the best. Family situation.

He stands. He buttons his coat.

BRANNIGAN: Loyalty is a lovely quality in a family, Officer. It\'s a terrible one in a witness.

He leaves. Mikey sits alone in the conference room, looking out the window at North Broad.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_mirror' },

    /* ================= ACT ONE: LEFTOVERS ================= */
    a1_mirror: {
      card: { kind: 'act', label: 'Act One', title: 'Leftovers' },
      loc: 'MIFFLIN STREET · THE BATHROOM',
      clock: { day: 'Fri', date: 'Nov 27', time: '9:40 AM' },
      text: g => `You wake up in your old bed under the glow-in-the-dark stars at nine-forty on the day after Thanksgiving, and your whole body hurts the way it hurt after you fell off the Brennans\' garage roof in fourth grade, a deep ache, in the bones.

You go to the bathroom. You run the water. You look in the mirror over the sink.

There\'s a white hair at your left temple.

Not gray. White. One. You pull it straight between two fingers and look at it in the light. It\'s the color of the frost on the Art Museum steps.

${g.knows('revenant3') ? 'You think about the man Nonna saw under the streetlight at the end of Mifflin Street. Crying.' : 'You think about a man across Broad Street in the rain, with his finger to his lips.'}

${g.f('unstick10') ? 'You think: *four minutes*.' : 'You think about the cold, and how much longer it holds you every time.'}

You don\'t pull it out. You don\'t know why. You let it go and it curls back against your head, and you stand there, eighteen years old, with your hands on the sink.

It\'s been three months since the clocks stopped on Broad Street. You\'re not the same kid who carried a minifridge up nine flights in August. You look in the mirror and try to decide what the fall made you.`,
      choices: [
        { text: 'Stronger. You carried people. Pop. Teddy. Carmen. Your back remembers every one. (Body +1)', tag: 'Body',
          fx: g => { g.attr('body', 1); g.flag('s2_attr', 'body'); }, go: 'a1_breakfast' },
        { text: 'Faster. Not the Slip. You. The kid who got through half a million people on the Parkway on his own legs. (Reflex +1)', tag: 'Reflex',
          fx: g => { g.attr('reflex', 1); g.flag('s2_attr', 'reflex'); }, go: 'a1_breakfast' },
        { text: 'Sharper. Femi\'s notebook. Weisz\'s maps. The thermal cameras on the lampposts. You notice things now. (Wits +1)', tag: 'Wits',
          fx: g => { g.attr('wits', 1); g.flag('s2_attr', 'wits'); }, go: 'a1_breakfast' },
        { text: 'Softer, somehow. Femi. Tolu. Gigi asleep on your arm. You feel more than you used to, not less. (Heart +1)', tag: 'Heart',
          fx: g => { g.attr('heart', 1); g.flag('s2_attr', 'heart'); }, go: 'a1_breakfast' },
        { text: 'Harder. Brannigan\'s face. Bruno at the table. You didn\'t break. (Nerve +1)', tag: 'Nerve',
          fx: g => { g.attr('nerve', 1); g.flag('s2_attr', 'nerve'); }, go: 'a1_breakfast' }
      ]
    },

    a1_breakfast: {
      loc: 'MIFFLIN STREET · THE KITCHEN',
      clock: { time: '10:00 AM' },
      text: g => `Pop is at the kitchen table with coffee and the Daily News, which he isn\'t reading. Ma is at the stove making eggs out of leftover stuffing, which is a thing she does once a year and nobody else in America has ever heard of.

Gigi is at the table in her Blur T-shirt. She looks at you, and her eyes go straight to your temple.

gigi: You have an old-man hair.

rosa: Gianna.

gigi: He *does*. Look. Sam. *Sam.* You have a grandpa hair.

sam: It\'s from stress.

gigi: From *college*?

sam: Calc.

She accepts this. Gigi has heard terrible things about Calc.

Ma puts a plate in front of you. She touches the white hair with one finger, lightly, and doesn\'t say anything, and goes back to the stove. Her back is very straight.

Pop waits until Gigi takes her plate to the front room to watch the parade rerun, which she does every year, which this year nobody stops her from doing even though it ends in a bent lamppost.

Then he puts his hand flat on the table and slides something across it toward you.

It\'s Bruno\'s card. Cream. Heavy. A name and a number.

frank: You left this on the dresser.

${g.f('bruno10') === 'card' ? 'You didn\'t. It was in the pocket of your jeans. Which are on the floor of your room. Which means Ma went through your pockets this morning' : 'You didn\'t. You don\'t remember picking it up at all. Which means somebody did, and Ma went through your pockets this morning'}, the way she\'s gone through them every day you\'ve lived in this house, and gave it to Pop.

${g.f('bruno10') === 'card' ? 'frank: You picked it up. In front of your mother. In front of your sister. You put it in your pocket like a man taking a tip.' : 'frank: He left it on the tablecloth. Next to your hand. And you\'re gonna tell me you didn\'t pick it up after.'}

He doesn\'t raise his voice. He never has.

frank: Give it to me, kid.`,
      choices: [
        { text: 'Give it to him. Let him tear it up. Let him think it\'s over.', tag: 'Give it',
          fx: g => { g.flag('card_s2', 'gave'); g.bond('frank', { tension: -2, trust: 1 }); }, go: 'a1_card_gave' },
        { text: '"No, Pop. It\'s twenty-nine thousand six hundred dollars. You can\'t pay it. I can."', tag: 'Keep it',
          fx: g => { g.flag('card_s2', 'kept'); g.bond('frank', { tension: 1, respect: 1 }); g.hidden('revenant_drift', 0.5); }, go: 'a1_card_kept' },
        { text: 'Tell him. All of it. Under 95. The Parkway. Why Bruno wants you. He already knows. Say it out loud.', tag: 'Tell him',
          fx: g => { g.flag('card_s2', 'told'); g.flag('pop_knows', 'told'); g.know('sam_slip', ['frank']); g.bond('frank', { tension: -3, trust: 3 }); g.heat('frank', 10 - g.h('frank')); g.know('sam_slip', ['rosa']); g.heat('rosa', 10 - g.h('rosa')); g.flag('rosa_overheard'); g.hidden('revenant_drift', -1); }, go: 'a1_card_told' }
      ]
    },
    a1_card_gave: {
      text: `You give it to him.

He looks at it. He tears it in half, and in half again, and puts the pieces in his coffee, where they sink.

frank: That\'s done. You hear me? That\'s *done*.

sam: Yeah, Pop.

He nods. He drinks the coffee, pieces and all, without seeming to notice, and gets up and goes out the back door to the yard, where his cab isn\'t, because it\'s at the garage on Oregon Avenue getting its windows looked at again.

You sit at the table with your stuffing eggs.

You know the number by heart. You looked at it on the Broad Street Line all the way home last night until you couldn\'t not know it.

You don\'t need the card.`,
      next: 'a1_mikey'
    },
    a1_card_kept: {
      text: `You don\'t move.

sam: No, Pop.

He looks at you.

sam: It\'s twenty-nine thousand six hundred dollars. I did the math on the subway. You drive a cab. You cashed out your whole retirement and it bought you till summer. You can\'t pay it. And they\'re not gonna wait till summer. You saw him. He liked it here.

frank: That\'s my mess.

sam: It\'s *our* house.

The kitchen is very quiet. At the stove, Ma has stopped moving.

Pop takes his hand off the table. He looks at your hands, then your face, like he\'s checking which one of you said it.

frank: You don\'t know what those people are.

sam: I know exactly what they are. I\'ve seen them under a highway.

That lands. You see it land. His face goes gray.

He gets up and goes out the back door to the yard without another word, and stands out there in the cold in his undershirt, looking at the fence.

Ma turns off the burner. She doesn\'t turn around.

rosa: Salvatore. Eat your eggs.`,
      next: 'a1_mikey'
    },
    a1_card_told: {
      text: `You tell him.

At the kitchen table, with Gigi in the front room watching a giant balloon dog hit a lamppost on a forty-second loop, you tell your father about the clocks on Broad Street in August. About the bus. About the cold, and the Slip, and the armored car, and under 95, how you carried him, how his cap was on your head. About the Parkway yesterday, and four minutes you can\'t account for.

About why a man like Bruno Iannucci would want a kid like you.

You say it all in a low voice, fast, so Gigi can\'t hear.

Ma doesn\'t turn around from the stove. She doesn\'t make a sound. But she stops stirring.

When you\'re done, Pop is quiet.

frank: I knew.

sam: I know you knew.

frank: Under 95. I knew. I knew in the cab, and I let you lie to me, \'cause I didn\'t want to know what I knew.

He picks up the card. He looks at it. He puts it down again.

frank: I did this. Not you. Me. Two thousand nine. A Monday night game. I put it all on the Giants, \'cause the guy at the bar said. And now my son—

He can\'t finish. He puts his hand over his eyes, his big cab-driver\'s hand with the wedding ring, and sits there.

You get up. You don\'t know what to do. You put your hand on his shoulder, the way he did to you on Broad Street. He puts his hand over yours. It\'s shaking.

At the stove, Ma puts down the spoon. She walks out of the kitchen, past you both, into the front room, and sits on the couch next to Gigi, and puts her arm around her, and watches the balloon dog hit the lamppost, again and again, with her face perfectly still.

She heard every word. You know she did.`,
      next: 'a1_mikey'
    },

    a1_mikey: {
      night: true,
      loc: 'THE STOOP',
      clock: { time: '9:15 PM' },
      text: g => `Mikey comes at nine. He doesn\'t text. He just sits down on the step next to you in his Birds hoodie, without beer this time, and looks at the street.

mikey: They took me off the task group.

sam: Because of me.

mikey: Because of me. Because I said you had a nosebleed. Brannigan showed me the thermal. You were thirty-one degrees, Sammy. Thirty-one. That\'s *frozen*. That\'s a turkey in the freezer.

He turns his head and looks at your temple.

mikey: What happened to your hair.

sam: ${g.f('unstick10') ? 'The four minutes.' : 'The cold.'}

mikey: What does that mean.

sam: I don\'t know. I think when I get stuck in there, I get older. A little. I don\'t know how much.

He looks at the white hair.

mikey: Show me.

sam: What?

mikey: I never saw it. I saw you be one place and then be another place. I never *saw* it. You\'re my little brother. I taught you to ride a bike on this street. I gotta see it.

He holds up a clementine. He must have taken it from the bowl on Ma\'s table on the way out. He tosses it in his hand.`,
      choices: [
        { text: 'Don\'t Slip. Just be fast. The regular kind. Catch the clementine behind your back before he finishes throwing it.', tag: 'Regular fast',
          check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 1, label: 'Catch it', physical: true, on: { crit: 'a1_clem_catch', success: 'a1_clem_catch', partial: 'a1_clem_fumble', fail: 'a1_clem_fumble', botch: 'a1_clem_fumble' } } },
        { text: 'Show him the real thing. Slip. You know what\'s in there now. Show him anyway.', tag: 'Slip', slip: true,
          fx: g => { g.flag('mikey_slip_s2'); if (g.S.drift >= 9 || g.hv('revenant_drift') >= 10) g.flag('unstick_s2e1'); }, go: 'a1_clem_slip' },
        { text: '"I can\'t, Mikey. It\'s getting worse. Every time I go in, it\'s harder to get out." Tell him the truth about it.', tag: 'Open Up',
          check: { kind: 'move', move: 'Open Up', attr: 'heart', skill: 'empathy', label: 'Tell Mikey what it costs', on: { strong: 'a1_clem_open', weak: 'a1_clem_open', miss: 'a1_clem_open_miss' } } }
      ]
    },
    a1_clem_catch: {
      enter: g => { g.flag('mikey_s2', 'catch'); g.bond('mikey', { affection: 1 }); },
      text: `He throws it at your head. Not hard. Not soft either. A big brother throw.

You don\'t Slip. You don\'t need to. You lean six inches left and put your hand up behind your own head and the clementine smacks into your palm, and you peel it with your thumb in one long spiral and hand him half.

Mikey looks at the clementine. He looks at you.

mikey: That\'s not it.

sam: That\'s not it.

mikey: That\'s just you being a show-off.

sam: That\'s just me.

He eats his half. He shakes his head.

mikey: You were always fast, you little prick. Since you were six. You always got to the door first.`,
      next: 'a1_mikey_end'
    },
    a1_clem_fumble: {
      enter: g => { g.flag('mikey_s2', 'fumble'); g.bond('mikey', { affection: 1 }); },
      text: `He throws it at your head. A big brother throw.

You reach for it, and your body is slow, slower than it\'s been since August, the ache in your bones like wet sand. The clementine bounces off your fingers and off your forehead and rolls down the step into the gutter.

Mikey stares at it. Then he starts laughing. Really laughing, the first time since Halloween, with his head back.

mikey: *That\'s* the Blur? *That\'s* the guy Brannigan\'s got a task group for?

sam: I\'m tired, man.

mikey: The Broad Street Blur, everybody. Can\'t catch a clementine.

He goes down and picks it up out of the gutter and wipes it on his hoodie and peels it and gives you half anyway.

mikey: Okay. Okay. Good. I\'m glad you\'re tired. Tired means you\'re a person.`,
      next: 'a1_mikey_end'
    },
    a1_clem_slip: {
      enter: g => { g.flag('mikey_s2', 'slip'); g.bond('mikey', { trust: 1 }); if (g.f('unstick_s2e1')) { g.drift(1); g.hidden('revenant_drift', 1); g.injure({ id: 'cold_s2e1', name: 'Slip-cold (stoop)', pen: 1, heal: 1, affects: ['reflex'] }); } },
      text: g => `He throws it.

You step through.

It\'s January on Mifflin Street. The clementine hangs in the air a foot from your face, turning so slowly you can count the dimples in the peel. Mikey\'s hand is still out from the throw. A car on Broad, at the end of the block, is stopped with its headlights making two long frozen cones in the mist.

${g.f('unstick_s2e1') ? `And the cold closes. Right away. Not like August, when you could stay in the Slip for what felt like an hour and walk out whenever you wanted. Now it grabs. It\'s thick, like stepping into a river in December. You feel the walls of the second already starting to come in.

You take the clementine out of the air. You take three steps up the street, to Nonna\'s stoop, and set it on her top step, on the salt.

The cold is at your waist.

You reach back for the sound of Mikey\'s voice, *show me*, and you pull, and it\'s like pulling a boot out of mud, and it takes everything, and you come out on your knees on the sidewalk in front of your house with your nose pouring blood onto the concrete.` : `You take the clementine out of the air. You take three steps up the street, to Nonna\'s stoop, and set it on her top step, on the salt.

You step back out.`}

Mikey\'s hand is still out. He looks at it. Empty.

He looks up the street. At Nonna\'s top step. At a clementine sitting on the salt, thirty feet away.

He looks at you.

mikey: …Jesus Christ.

He doesn\'t say anything else for a while. He sits with his hand still half out, the way it was when he threw.

mikey: ${g.f('unstick_s2e1') ? 'And that costs you. That. I just watched it cost you. Look at you.' : 'Okay. Okay. I saw it. I saw it, Sammy.'}`,
      next: 'a1_mikey_end'
    },
    a1_clem_open: {
      enter: g => { g.flag('mikey_s2', 'open'); g.bond('mikey', { trust: 2 }); g.hidden('revenant_drift', -1); g.know('slip_cost', ['sam', 'mikey'], 'The Slip is getting harder to leave. Every time, the cold closes faster. The white hair came from the four minutes on the Parkway.'); },
      text: `sam: I can\'t, Mikey.

He waits, clementine in his hand.

sam: It\'s getting worse. In August I could go in there and stay for what felt like an hour and walk out whenever I wanted. Now, every time I go in, it grabs. Like a river. Under 95 I got stuck. On the Parkway I got stuck, and I lost four minutes, and I came out with this.

You touch your temple.

sam: I think if I go in too many more times, I don\'t come out. Or I come out old. Or I come out somebody else.

You\'ve never said it out loud. Not to Nik. Not to anybody. It sounds worse out loud.

Mikey puts the clementine down on the step between you, carefully, stem up.

mikey: Then don\'t.

sam: People were gonna die.

mikey: People die, Sammy. I see \'em every week. I zip the bags. You know what I don\'t see every week? My brother.

He knocks his knee into yours. Hard. On purpose.

mikey: Then you find another way. You hear me? You find another way, or you call me, and we find it together. That\'s the deal now. That\'s the new deal.`,
      next: 'a1_mikey_end'
    },
    a1_clem_open_miss: {
      enter: g => { g.flag('mikey_s2', 'open'); g.bond('mikey', { trust: 1 }); g.know('slip_cost', ['sam', 'mikey'], 'The Slip is getting harder to leave. The white hair came from the four minutes on the Parkway.'); },
      text: `sam: I can\'t, Mikey. It\'s— it\'s getting—

It comes out wrong. Out of order. The river and the cold and four minutes and the hair, and you can hear how crazy it sounds, and you stop.

Mikey waits. Then he puts the clementine down between you.

mikey: Okay. Okay, Sammy. It costs something. I got that much.

He leans his shoulder into yours and leaves it there.

mikey: Then don\'t do it for me. I don\'t need to see it. I believe you.`,
      next: 'a1_mikey_end'
    },
    a1_mikey_end: {
      night: true,
      enter: g => { g.sleep(8); },
      text: g => `You sit there a while longer.

mikey: You\'re gonna go see him. Bruno.

sam: Tomorrow. Two o\'clock.

mikey: I can\'t stop you.

sam: No.

mikey: I can\'t come with you. I\'m a cop. If I walk into that club with you, it\'s a whole different thing, for both of us.

sam: I know.

mikey: Then listen to me. You don\'t eat anything he gives you. You don\'t sign anything. You don\'t say yes to the first thing. And you text me when you walk in and when you walk out. *Both.*

He stands up. He looks down at you on the step.

mikey: And if Vinnie\'s there, you tell him from me: I always liked him. Tell him that. He\'ll know what it means.

He goes. You sit on the stoop with the cold coming up out of the concrete, and ${g.f('mikey_s2') === 'slip' ? 'up the street, on Nonna\'s top step, a clementine sits on the salt, where you left it. In the morning it\'s gone. Nonna doesn\'t say anything about it. She doesn\'t have to.' : 'up the street, Nonna\'s window is lit, the way it always is, and the salt is still on her step.'}`,
      next: 'a2_club'
    }
  }
});
