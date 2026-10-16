/* S3 · E2 · OUTREACH, part 3 of 4: Act Three ("The Table"). */
EH.scenes('s03e02', {

  /* ================= ACT THREE: THE TABLE ================= */
  a3_table: {
    card: { kind: 'act', label: 'Act Three', title: 'The Table' },
    loc: 'LIACOURAS WALK',
    clock: { day: 'Fri', date: 'Sep 10', time: '12:15 PM' },
    text: `Friday. Add/drop ends at five. You cut across Liacouras Walk to get to the registrar before it closes.

The Registry tent is still there between the pancakes and the a cappella. The line is longer. Eleven people.

Above the pancake table, there\'s a string of cheap white café lights hung from the tent poles, the kind every club buys from the same website.

*Pop.*

One of them goes dark. A little puff of glass, like a soap bubble.

Nobody notices. The pancake kids are flipping pancakes.

You notice, because you\'ve been noticing things for a year.

*Pop.*

Another one. Closer to the Registry tent.

Fourth in line, a girl in a Temple Owls cap and a backpack with a broken zipper, holding her own elbows. Every time the line shuffles forward a step, she flinches. And every time she flinches, a bulb goes.

*Pop.*

She sees it. She looks up at the dead bulbs and then down at her own hands like they belong to someone else, and she pulls her cap down over her eyes.

She\'s two people from the front. The nurse at the tablet is smiling.`,
    choices: [
      { text: 'Get in line behind her. Talk to her, quietly. Tell her what you know about where that tablet goes.', tag: 'Tell her',
        fx: g => { g.flag('rae2', 'truth'); g.know('rae_truth2', ['sam', 'rae'], 'Sam told Rae Delgado, in line, what the Registry really is: Halcyon, beds, numbers.'); g.hidden('halcyon_heat', 1); }, go: 'a3_rae' },
      { text: 'Get in line behind her. Ask her what she wants. Don\'t tell her what to do.', tag: 'Ask her',
        fx: g => { g.flag('rae2', 'ask'); g.hidden('revenant_drift', -0.5); }, go: 'a3_rae' },
      { text: 'Keep walking. It\'s her line. It\'s her name. You can\'t stand in front of every tablet in Philadelphia.', tag: 'Keep walking',
        fx: g => { g.flag('rae2', 'walk'); }, go: 'a3_hugh' }
    ]
  },

  a3_rae: {
    loc: 'LIACOURAS WALK · THE LINE',
    text: g => `You get in line behind her. Up close she\'s shaking, a little, a fine tremor in her hands, like she\'s been cold for a year. Because she has.

sam: Hey. The lights.

She turns around so fast her backpack hits you.

RAE: I didn\'t— that wasn\'t—

sam: I know. It\'s okay. *(quieter)* It\'s okay. I\'m cold too.

She looks at your hands. She looks at your face. Something in hers goes loose.

RAE: Rae. Delgado. I live in Morgan. I was at the concert. On the Walk. *(she laughs, horribly)* I went to a *concert*.

${g.f('rae2') === 'truth' ? `You tell her. Fast and low, with the line shuffling forward. Not everything. A building at the Navy Yard. Beds with numbers. People who went in for a checkup and didn\'t come out for months.

Her face goes gray.

RAE: But they\'re *nurses*.

sam: Most of them are real nurses. They mean every word.

The line moves. She\'s next. The nurse at the tablet smiles at her.

*Pop.* A bulb over the Registry tent itself. The nurse looks up, puzzled.

Rae looks at the tablet. Then at you.

Then she steps out of the line and walks away fast, toward Morgan, with her cap down, and doesn\'t look back. Halfway there, she turns around and walks backward three steps and mouths at you: *Thank you.*` : `sam: What do you want?

RAE: *(like nobody\'s ever asked)* I want it to stop. I want to go one week without breaking a light. I broke my mom\'s chandelier at Easter. I want somebody to tell me what\'s *wrong* with me.

sam: And you think they will?

RAE: I think they\'re the only ones offering.

The line moves. She\'s next.

She looks at you. She\'s waiting for you to tell her not to. You don\'t.

sam: Then here. *(she holds out her phone, and you take it, and put your number in it)* Whatever happens in there. Whatever they say. You call me after.

She looks at the number. *SAM. COLD TOO.*

She steps up to the tablet. She signs with her finger. The nurse beams.

Nik\'s counter, later that afternoon, will say *27 of 61*. One of those is Rae. She texts you at 4:10: *they were really nice. i have an intake tuesday. thank u for not making me feel stupid*`}`,
    enter: g => { g.know('rae', ['sam'], 'Rae Delgado, a Temple sophomore, one of the 61. When she\'s frightened, lightbulbs near her pop. She was in line at the Registry table on Liacouras Walk on Sep 10.'); if (g.f('rae2') === 'ask') { g.flag('rae_registered'); g.know('rae_number', ['sam', 'rae'], 'Rae Delgado registered on Sep 10. She has Sam\'s number, saved as "SAM. COLD TOO." Her intake is Tuesday.'); } },
    next: 'a3_hugh'
  },

  a3_hugh: {
    loc: 'LIACOURAS WALK · THE REGISTRY TENT',
    clock: { time: '12:30 PM' },
    enter: g => { g.know('hugh_offer2', ['sam', 'hugh'], 'Hugh, at the Registry tent: "Register. Voluntarily. Walk in the front door Saturday. And I get Jubilee moved off OBSERVE. Off the list."'); if (g.f('talk_s3e1') === 'weak') g.know('linda_name', ['sam'], 'Hugh told Nurse Linda Sam\'s real name in front of him: "Kearney. Sam Kearney. He\'s dating my sister."'); },
    text: g => `${g.f('rae2') === 'walk' ? 'You make it ten steps past the tent.' : 'You step out of the line.'}

hugh: Kearney.

Hugh Pemberton falls into step beside you like you\'d arranged to meet, with a Registry folder under his arm and his sunglasses on top of his head.

${g.f('talk_s3e1') === 'weak' ? `Behind him, at the table, the gray-haired nurse looks up from her tablet, and her face does something. Recognition.

LINDA: Oh! You\'re the young man from 15th Street. Mrs. Torres\'s friend. I\'m sorry, what was the name you gave me? I wrote it down, but it didn\'t come up in—

hugh: *(pleasantly, over his shoulder)* Kearney, Linda. Sam Kearney. He\'s dating my sister.

LINDA: Oh! *(she types)* Thank you, Hugh.

Hugh turns back to you and smiles.

hugh: You\'re welcome.` : 'He smiles like you\'re old friends.'}

He walks you past the pancake table to the edge of the Walk, under a tree, out of the way.

hugh: I\'m going to make you an offer. I\'ve been authorized to make it. It\'s a good offer, and you\'re going to want to hit me, so do that first if you need to and then listen.

You don\'t hit him.

hugh: Saturday. Ten a.m. Your friend Bree has her intake at the Navy Yard. You\'re going to be there anyway, I assume, being *supportive*. *(the word has a little twist in it)* While you\'re there, register. Walk in the front door. Sign the tablet. Ten minutes. No beds, no doors. A participant, like two dozen other people.

hugh: And I get Jubilee moved off *Observe*. Off the list. Her file goes in a drawer.

He lets that sit.

hugh: You want her safe. I want her safe. *(something real flickers under it, just for a second)* I\'m her *brother*, Kearney. I\'m nine minutes older than she is, and I\'ve been her brother every second since. You think I like seeing her name on a screen?

hugh: One signature. Yours, for hers.`,
    choices: [
      { text: '"No." Then walk away.', tag: 'No',
        fx: g => { g.flag('hugh2', 'no'); g.hidden('revenant_drift', -0.5); }, go: 'a3_hugh_end' },
      { text: '"I\'ll think about it."', tag: 'Think about it',
        fx: g => { g.flag('hugh2', 'think'); g.hidden('revenant_drift', 0.5); }, go: 'a3_hugh_end' },
      { text: '"Does Jules know you\'re making this offer?"', tag: 'Does she know',
        fx: g => { g.flag('hugh2', 'jules'); g.bond('jules', { trust: 1 }); }, go: 'a3_hugh_end' }
    ]
  },

  a3_hugh_end: {
    loc: 'LIACOURAS WALK',
    text: g => `${g.f('hugh2') === 'no' ? 'sam: No.\n\nhugh: *(not surprised)* You haven\'t heard the—\n\nsam: No.\n\nYou walk away. Behind you, after a second, he laughs. Not mean. Almost delighted.\n\nhugh: *(calling after you)* She said you\'d say that! Word for word!\n\nYou don\'t ask who *she* is. You already know which *she* would know you that well, and it isn\'t Jules.' : g.f('hugh2') === 'think' ? 'sam: I\'ll think about it.\n\nhugh: *(warmly)* That\'s all anybody\'s asking.\n\nHe puts a folder in your hand. On the front, in a perfect gold sans serif: *YOU ARE NOT ALONE.* Inside, a tablet code, and a sticky note in Hugh\'s handwriting: *Saturday. Front door. -H*\n\nYou put it in your backpack. You don\'t know why you don\'t throw it away.' : 'sam: Does Jules know you\'re making this offer?\n\nFor the first time since you\'ve known him, Hugh doesn\'t have the next sentence ready.\n\nhugh: She doesn\'t need to.\n\nsam: That\'s a no.\n\nhugh: It\'s a *surprise*. She\'d be off the list. She\'d never even know she was on it.\n\nsam: She knows, Hugh. She\'s known since January. She was *there*.\n\nHugh\'s face doesn\'t do anything at all.\n\nhugh: *(quietly)* Then why hasn\'t she said anything to me?\n\nYou look at him. He actually doesn\'t know.\n\nsam: You\'re standing in a Registry polo, Hugh.\n\nYou leave him under the tree.'}

At 4:58 p.m., you make it to the registrar\'s office and add nothing and drop nothing, and walk out into the late sun on Broad Street with your schedule exactly as it was.

Your phone. Bree.

${g.f('bree2') === 'come' ? 'TXT bree: tomorrow. 10. building 1. dont be late wawa' : 'TXT bree: tomorrow. 10am. building 1. navy yard. come or dont'}`,
    next: 'a4_saturday'
  }
});
