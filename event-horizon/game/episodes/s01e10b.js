/* S1 · E10 · BROAD STREET, part 2 of 4: Act Two ("The Parade"). */
EH.scenes('s01e10', {

  /* ================= ACT TWO: THE PARADE ================= */
  a2_morning: {
    card: { kind: 'act', label: 'Act Two', title: 'The Parade' },
    loc: 'CARDONE HALL · 9-14',
    clock: { day: 'Thu', date: 'Nov 26', time: '6:00 AM' },
    text: g => `Thanksgiving. Thirty-four degrees. The sky over the Delaware is the color of a dirty nickel.

You get dressed in the dark. Black hoodie. Gaiter. Sneakers, the left one split at the toe.

On the hook on the back of the door, Pop\'s old Eagles cap, the one you took from the hall closet in September. Faded green. Sweat stain on the brim. ${g.knows('dante_cap') ? '*Don\'t wear the hat,* Vinnie said.' : 'You\'ve worn it every time.'}

${g.f('nik_chair') ? 'Nik\'s earbuds are on your desk in their little white box.' : ''}

You stand there with your hand on the doorknob.`,
    choices: [
      { text: 'Call Mikey first. Tell him something\'s going to happen on the Parkway. Don\'t tell him how you know.', tag: 'Call Mikey',
        fx: g => { g.flag('called_mikey10'); g.heat('mikey', 1); g.bond('mikey', { trust: 1 }); g.hidden('revenant_drift', -0.5); }, go: 'a2_call_mikey' },
      { text: 'Don\'t call anyone. Mikey will try to stop you. Go.', tag: 'Just go',
        fx: g => { g.flag('called_mikey10', false); g.hidden('revenant_drift', 0.5); }, go: 'a2_cap' }
    ]
  },
  a2_call_mikey: {
    text: `He picks up on the first ring. He\'s already awake. Of course he is.

mikey: Sammy. What.

sam: Something\'s gonna happen today. On the Parkway. Around the Art Museum end.

Silence.

mikey: How do you know that?

sam: I can\'t tell you that.

mikey: Sammy—

sam: Those ambulances. On the Parkway. Six of them, no unit numbers. They\'re not PFD. Look at them. That\'s all. Just look at them.

A long breath on the other end.

mikey: You\'re coming. Aren\'t you.

You don\'t say anything.

mikey: Goddammit. Okay. Okay. I\'ll look at the ambulances. And if I see you, I\'m gonna put you in the back of my car myself. You hear me?

sam: I hear you.

mikey: I love you, you idiot.

He hangs up before you can say it back.`,
    next: 'a2_cap'
  },
  a2_cap: {
    text: g => `You look at the cap on the hook.`,
    choices: [
      { text: 'Wear it. Backward. It\'s Pop\'s. It\'s the only part of this that feels like you.', tag: 'The cap',
        fx: g => { g.flag('cap10', true); g.hidden('revenant_drift', 0.5); }, go: 'a2_parkway' },
      { text: 'Leave it on the hook. Hood up. Nobody\'s face. Nobody\'s hat.', tag: 'No cap',
        fx: g => { g.flag('cap10', false); }, go: 'a2_parkway' }
    ]
  },

  a2_parkway: {
    loc: 'BENJAMIN FRANKLIN PARKWAY · 20TH STREET',
    clock: { time: '8:40 AM' },
    enter: g => { g.know('six_ambulances', ['sam'], 'Six ambulances without unit numbers, staged on the Parkway on Thanksgiving morning.'); },
    text: g => `${g.f('nik_chair') ? `You put one of the earbuds in on the subway. Tap twice.

nik: *—hello? Hello? Is it working? Bro. BRO. Are you— oh my God, it works. It\'s 7:40 in the morning. Why is it working. Where are you.*

sam: Broad Street Line. Going to the parade.

nik: *…Okay. Okay. Hold on.*

You hear a door. You hear a television, loud, and a lot of people speaking Bengali, and somebody saying *Nikhil, the turkey biryani!*, and then the door closes and it\'s quiet.

nik: *I\'m in my aunt\'s bathroom. I have the 6abc stream on my phone. I have a tablet. I have Google Maps. I have forty-five relatives who think I have diarrhea. I am the guy in the chair. Go.*` : 'You don\'t call anybody. You take the Broad Street Line south to City Hall with your hood up and your hands in your pockets and nobody looks at you, because nobody looks at anyone on the Broad Street Line.'}

The Parkway on Thanksgiving morning is a river of people.

Half a million, the news says later. Families in Eagles jackets and Santa hats, kids on shoulders, grandmothers in folding chairs they brought from home and set up at five in the morning, Mummers in full sequins warming up on the side streets with their saxophones. The smell of coffee and pretzels and cold. The flags of the world down both sides of the Parkway, snapping in the wind.

And the wind. That\'s the first thing you notice. It\'s gusting. Hard. Twenty miles an hour, then nothing, then twenty again, coming down the Parkway off the river like it\'s looking for something.

Up the Parkway, at the end, the Art Museum sits on its hill like a temple, with the grandstand built across the bottom of the steps, red-white-and-blue bunting, a big banner: **PEMBERTON LYLE CAPITAL · PROUD SPONSOR**.

Somewhere in the second row, on the aisle, ${g.f('jules_box') ? 'Jules is sitting so she can leave.' : 'you don\'t know who\'s sitting.'}

The first balloons are coming. You can see them over the crowd, back toward City Hall, five stories tall, bobbing in the gusts with fifty handlers each hanging on to the ropes: a turkey in a pilgrim hat, a cartoon dog with a red bowtie, a giant gingerbread man. When the wind hits them, they lean, and the handlers lean back, and the crowd goes *ohhh*.

At the corner of 20th, in a line along the curb, are the ambulances.

Six of them. White and orange, with *MEDIC* on the side in reflective letters. No unit numbers. No *Philadelphia Fire Department* on the doors. The men standing beside them are wearing EMS jackets over gray polo shirts.

${g.f('nik_chair') ? 'nik: *I see them. On the stream. The wide shot from the helicopter. Bro. Real PFD medic units have numbers on the roof. Big ones. For the helicopters. Those have nothing on the roof. Those are blank.*' : ''}`,
    choices: [
      { text: 'Look closer. What are they carrying? What are they watching?', tag: 'Read the street',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 13, bonus: 0, label: 'Read the Parkway', on: { crit: 'a2_scout_good', success: 'a2_scout_good', fail: 'a2_scout_bad', fumble: 'a2_scout_bad' } },
        if: g => !g.f('nik_chair') },
      { text: 'Look closer. What are they carrying? What are they watching? Nik has the helicopter shot.', tag: 'Read the street',
        check: { kind: 'd20', attr: 'wits', skill: 'investigate', dc: 13, bonus: 3, bonusLabel: 'Nik in your ear', label: 'Read the Parkway', on: { crit: 'a2_scout_good', success: 'a2_scout_good', fail: 'a2_scout_bad', fumble: 'a2_scout_bad' } },
        if: g => g.f('nik_chair') }
    ]
  },
  a2_scout_good: {
    enter: g => { g.flag('thermal10'); g.know('thermal', ['sam'], 'Halcyon put thermal cameras on the Parkway lampposts. The Changed run cold. They\'re looking for cold.'); },
    text: g => `You look at the lampposts.

Every lamppost from 20th to the Art Museum has a banner on it. *HAPPY THANKSGIVING PHILADELPHIA.* And above every banner, zip-tied to the pole, a small gray box the size of a paperback with a black glass eye.

Not security cameras. Security cameras are white, and they\'re on the buildings.

You watch one of the men in the EMS jackets. He\'s holding a tablet low, by his hip. On the screen, the crowd in false color: oranges and reds and yellows, half a million warm bodies.

Looking for blue.

${g.f('nik_chair') ? 'nik: *Thermal. That\'s thermal. Bro, that\'s FLIR, those are like four grand each. They\'re looking for— oh. Oh no. You run cold. You said. When you Slip, you run cold.*\n\nsam: Yeah.\n\nnik: *Then don\'t Slip near the lampposts. Don\'t Slip anywhere. Stay warm. Drink something hot. I\'m serious, buy a hot chocolate.*' : 'They\'re looking for cold. For somebody whose body is a few degrees wrong.\n\nYou buy a hot chocolate from a cart on the corner and drink it too fast and burn your tongue.'}

You pull your hood up and keep your face down and move with the crowd, toward 21st.`,
    next: 'a2_freeze'
  },
  a2_scout_bad: {
    text: `You try to get a look at the men by the ambulances, but the crowd is too thick and too tall, and every time you get close a family with a stroller cuts you off.

You get one glimpse: a man in an EMS jacket holding something low by his hip, a tablet, looking at the crowd instead of the balloons. Everybody else on the Parkway is looking at the balloons.

You pull your hood up and keep your face down and move with the crowd, toward 21st.`,
    next: 'a2_freeze'
  },

  a2_freeze: {
    loc: 'BENJAMIN FRANKLIN PARKWAY · 21ST STREET',
    clock: { time: '9:41 AM' },
    enter: g => { g.know('parade_freeze', ['sam'], 'At 9:41 on Thanksgiving morning, Teddy Kowal froze the Benjamin Franklin Parkway.'); },
    text: g => `At 9:41, the cartoon dog with the red bowtie is passing 21st Street. Five stories of him, leaning in the gust, fifty handlers in matching blue jackets leaning back on the ropes, the crowd going *ohhh*.

And you feel it before you see it.

The cold.

It comes up through the soles of your sneakers, through the asphalt, the way it did on Broad Street in September with the armored car. Your nose starts to bleed. You taste pennies.

Then the Parkway stops.

Not the people. The *Parkway*. Everything on it. The asphalt from 20th to 22nd goes a strange flat gray, like a photograph of asphalt. The metal barricades along both curbs stop, and when a man leans on one, it doesn\'t give, not a millimeter, like leaning on a mountain. The float behind the dog, a giant papier-mâché pumpkin pie with a high school choir on it, stops dead, and the choir kids lurch forward and grab the railings. The ropes go rigid in the handlers\' hands.

And the dog stops.

Five stories of balloon, leaning thirty degrees in a gust that\'s already gone, frozen in the air like a still from a movie. The handlers pull. The ropes don\'t move. The balloon doesn\'t move. A handler lets go of her rope, and it stays exactly where it was, hanging in the air in a stiff curve, pointing at nothing.

Half a million people go quiet at once. It\'s the loudest silence you\'ve ever heard.

Then somebody screams.

Then the pushing starts.

There are four thousand people in the parade, between 20th and 22nd: marchers, band kids, choir kids, balloon handlers, clowns, a troupe of eight-year-old Irish step dancers in green velvet. They can\'t get out. The barricades won\'t move. The floats won\'t move. People on the sidewalks are pushing forward to see, and people in the street are pushing back to get out, and in between them is a frozen steel fence, and in about two minutes somebody is going to get crushed against it.

${g.f('nik_chair') ? 'nik: *Oh my God. Oh my God. The stream just went to a wide shot. The whole— Sam. The whole Parkway is stopped. The anchor is saying "technical difficulties." The anchor is LYING, Sam, I can SEE it.*' : ''}

And there, at the curb at 21st, between a frozen barricade and a frozen pumpkin pie, in a gray Port Richmond Little League hoodie, on one knee on a folding chair cushion, with his bare right hand flat on the asphalt and blood running from both nostrils into his mouth:

Teddy.

Behind him, eight feet tall in a Carhartt jacket with steam rising off his shoulders into the cold air: Heck. Standing guard. Not looking at the crowd. Looking at the ambulances.

Your phone buzzes. And every phone around you buzzes. You look. A push alert, from the Inquirer, from Dana Fiorillo\'s byline, the first line of a story nobody has written yet:

*BREAKING: Group claiming responsibility for Parkway "freeze" demands $5 million from parade sponsor Pemberton Lyle Capital. "Pay by noon and the parade goes on." Video below.*

You don\'t watch the video. You look at the grandstand at the top of the Parkway. **PEMBERTON LYLE CAPITAL · PROUD SPONSOR.**

You look at the crowd at the barricade at 20th, pushing.

You have to get to Teddy.`,
    choices: [
      { text: 'Go through the crowd. Shoulders, elbows, sorry, sorry. Fast but human.', tag: 'Push through',
        check: { kind: 'pool', attr: 'reflex', skill: 'athletics', diff: 2, label: 'Get to Teddy', physical: true, power: true, on: { crit: 'a2_reach_fast', success: 'a2_reach_fast', partial: 'a2_reach_slow', fail: 'a2_reach_slow', botch: 'a2_reach_slow' } } },
      { text: 'Stop. The barricade at 20th. A kid is pinned against it. Help her first.', tag: 'The barricade',
        fx: g => { g.flag('barricade10'); g.hidden('revenant_drift', 0.5); }, go: 'a2_barricade' }
    ]
  },
  a2_barricade: {
    text: `It\'s one of the step dancers. Eight years old, in green velvet, pressed against the frozen barricade by the crowd behind her, her face going white, her mouth open, not screaming, because there\'s no air in her to scream with.

You put your back to the crowd and your arms out on either side of her, hands on the frozen steel, and you push back. Your shoulders take it. Twenty people leaning on you. Thirty. Your ribs creak.

sam: *BACK UP! THERE\'S KIDS! BACK UP!*

Your voice is louder than you knew it could be. It cracks the silence. A man in an Eagles jacket next to you hears it, and turns around, and puts *his* back to the crowd too, arms out, the way you are. Then a woman. Then two teenagers.

The crowd gives. A foot. Two feet. Enough.

The little girl breathes in, a huge whooping breath, and starts to cry, and her mother is there, grabbing her over the barricade, and you\'re already moving.

By the time you get to 21st, the men in the EMS jackets are already there.`,
    next: 'a3_teddy'
  },
  a2_reach_fast: {
    enter: g => { g.flag('reach10', 'fast'); },
    text: `You go through the crowd like you went through traffic on the e-bike in August: gaps that open for half a second, a shoulder, a duck under somebody\'s arm, a vault over a stroller, *sorry, sorry, sorry*. You don\'t Slip. You don\'t have to. You\'re just fast, the human kind of fast, a South Philly kid who\'s been cutting through crowds at Eagles games since he was six.

You come out at the curb at 21st, four feet from Teddy, before anybody in an EMS jacket gets there.

Heck sees you first. His face splits open.

heck: *Papa.*`,
    next: 'a3_teddy'
  },
  a2_reach_slow: {
    enter: g => { g.flag('reach10', 'slow'); g.injure({ id: 'elbow10', name: 'Elbow to the face (Parkway crowd)', pen: 0, heal: 1 }); },
    text: `The crowd doesn\'t open. It closes. Somebody\'s elbow catches you in the mouth, and somebody else\'s stroller runs over your foot, and for a long, panicked half a minute you\'re pinned in place between a man in a Santa hat and a woman holding a baby over her head, going nowhere.

You get out. You go around, down 21st and back up through a gap by a Wawa coffee truck, and you come out at the curb with blood in your mouth.

The men in the EMS jackets are already moving. Two of them. Thirty feet away, coming down the curb toward Teddy with a stretcher between them that nobody is lying on.`,
    next: 'a3_teddy'
  }
});
