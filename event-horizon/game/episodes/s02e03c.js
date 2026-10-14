/* S2 · E3 · OLD MONEY (Jules POV), part 3 of 3: Act Three ("The Chapel"), Act Four ("Resolution"), tags, polls. */
EH.scenes('s02e03', {

  /* ================= ACT THREE: THE CHAPEL ================= */
  a3_chapel: {
    card: { kind: 'act', label: 'Act Three', title: 'The Chapel' },
    loc: 'RAVENSCOURT · THE FAMILY CHAPEL',
    clock: { day: 'Fri', date: 'Jan 1', time: '4:00 PM' },
    text: g => `At four o\'clock on New Year\'s Day, Gran doesn\'t go to the terrace.

She\'s waiting at the door to the garden in her fur, with her cigarette unlit between two fingers, and when you come down she doesn\'t say anything. She just takes your arm, the way she took it when you were seven and you walked out of this same door in the morning after a night in the dark that you still don\'t talk about, and you walk together down the snowy path through the boxwoods to the chapel nobody else enters.

It\'s small. Fieldstone, 1891, with a slate roof heavy with snow and a single window over the altar, stained glass: a tall figure in white in a doorway, nothing behind it but blue dark, and on a ribbon underneath, one word.

*TENEO.* I hold.

Inside, it\'s cold. Colder than outside. Colder than it should be. Six pews. An altar of plain stone with nothing on it. No cross. You noticed that in October, by Gran\'s lantern: no cross, anywhere.

Gran lights her cigarette in the chapel. At four o\'clock exactly. She smokes it standing in front of the altar.

constance: Your great-great-great-grandfather built this. Josiah. In 1891, when he was forty-six and very rich and very frightened. He built a whole house around it. Ravenscourt is the box. This is what\'s in the box.

She takes an ivory die out of her coat. The other half of the pair she gave you at sixteen. The one she kept.

She rolls it on the stone altar without looking.

Six.

constance: You may ask me three questions, child. That\'s the rule. My grandmother gave me three. I\'ll answer them truthfully. I\'ve never lied in this room, and I won\'t start with you.

constance: Choose carefully. Most people waste the first one.`,
    next: 'a3_q1'
  },

  a3_q1: {
    text: g => `${g.f('q_where') || g.f('q_cost') || g.f('q_why') ? 'Gran taps the ash off her cigarette into her palm. She waits.' : 'Gran waits. The smoke goes straight up in the cold.'}`,
    choices: [
      { text: '"Where did it come from?"', tag: 'Where',
        if: g => !g.f('q_where'),
        fx: g => { g.flag('q_where'); g.flag('q_count', (g.f('q_count') || 0) + 1); }, go: 'a3_where' },
      { text: '"What does it cost?"', tag: 'Cost',
        if: g => !g.f('q_cost'),
        fx: g => { g.flag('q_cost'); g.flag('q_count', (g.f('q_count') || 0) + 1); }, go: 'a3_cost' },
      { text: '"Why me? Why not Hugh?"', tag: 'Why me',
        if: g => !g.f('q_why'),
        fx: g => { g.flag('q_why'); g.flag('q_count', (g.f('q_count') || 0) + 1); }, go: 'a3_why' },
      { text: '"Is Sam Kearney in danger because of me?"', tag: 'Sam',
        if: g => !g.f('q_sam') && (g.f('q_count') || 0) >= 1,
        fx: g => { g.flag('q_sam'); g.flag('q_count', (g.f('q_count') || 0) + 1); }, go: 'a3_sam' }
    ]
  },
  a3_where: {
    enter: g => { g.know('josiah_1876', ['jules', 'constance'], 'Gran: when he was thirty-one, Josiah Pemberton stood beside a great engine when it stopped "for a heartbeat," and something stood beside him. He made an agreement he didn\'t understand. Every Pemberton since has been lucky.'); },
    text: `constance: Ah. The historian. Good.

She smokes.

constance: Josiah was thirty-one. A clerk in a counting house. One spring morning he was standing in a great hall full of machines, beside the biggest of them, when it stopped.

constance: Not broke down. Stopped. For a heartbeat. Nobody else in the hall noticed. Josiah did. It went cold, and nothing moved, and something was standing beside him.

jules: What was it?

constance: That would be another question.

She looks at the window. The figure in the doorway.

constance: Something that liked him. That\'s all he ever said. *It liked me.* It asked him for something, and he said yes, because he was thirty-one and poor and it was offering him the whole world. He never told anyone what he\'d agreed to. Not even his wife. He wrote it down once, and burned it, and built this chapel over the ashes.

constance: He was a millionaire by 1880. He never lost a dollar again in his life. Neither did his son, or his son\'s son, or me. Or your father.

constance: That\'s where it came from, child. A clerk said yes to something in a cold room.`,
    next: 'a3_next'
  },
  a3_cost: {
    enter: g => { g.know('luck_cost', ['jules', 'constance'], 'Gran: the luck costs other people. "The house always collects. Not from us. Near us." Mercutio. Every time it goes your way, it goes someone else\'s way less.'); },
    text: g => `Gran looks at you. Then she nods, once.

constance: That\'s the right question. That\'s the question I asked, too. My grandmother cried when I asked it.

She smokes.

constance: It costs other people.

constance: Not us. Never us. Luck isn\'t made, child. It\'s moved. The house always collects. Not from us. Near us.

${g.f('horse6') === 'letgo' ? 'You think of the stables. A horse that went lame for a month so you could find out.\n\njules: Mercutio.\n\nconstance: Mercutio.\n\nconstance: I let go of the reins once, too. In 1961. Over the same wall. I landed on my feet, just like you. My mare was called Héloïse.' : 'constance: I let go of the reins once. In 1961. Over the wall at the end of the long field. Just to see. I landed on my feet. My mare was called Héloïse. She never jumped again.'}

She taps her ash into her palm.

${g.hv('jules_debt') >= 5 ? 'constance: And you\'ve been spending, haven\'t you. Since August. I can feel it on you, like a draft. Every time you let it, somebody near you pays a little. A broken glass. A bad night. A missed train. And it adds up.' : 'constance: You\'ve been careful. I can tell. Not as careful as you\'ll need to be.'}

jules: Can it be stopped?

constance: That\'s another question. But I\'ll give you this one, because you asked the right one first.

She looks at the cigarette burning down between her fingers.

constance: You can choose not to. Every time you feel it coming and don\'t let it, every time you lose like a person, the house doesn\'t collect. Not that time. Nobody in this family has ever been any good at it.

constance: That\'s all I have.`,
    next: 'a3_next'
  },
  a3_why: {
    enter: g => { g.know('why_jules', ['jules', 'constance'], 'Gran: it doesn\'t choose twice in a generation. It chose you, not Hugh, "because it likes you." Since August it\'s louder in you than in anyone since Josiah.'); },
    text: `constance: Because it doesn\'t choose twice in a generation. It chose your father, in his. It chose me, in mine. It chose you.

jules: But why?

constance: Because it likes you. It never says why.

She says it flat, without any irony at all.

constance: Hugh wants things. He wants them so badly. It never cared for people who get what they want. You were the one who *didn\'t* want. Who went to Temple to spite your mother. Who looks at a cab driver\'s son from South Philadelphia and not at a Whitford. Who rolls a die two hundred times in a bathroom trying to *lose*.

constance: It likes the ones who fight it, child. God knows why. Josiah never found out, and neither have I.

She looks at the window.

constance: And since August, since the night the clocks stopped on Broad Street, it\'s louder in you than it has been in anyone since Josiah. I felt it in this room. I knew it was you before you came home.`,
    next: 'a3_next'
  },
  a3_sam: {
    enter: g => { g.know('gran_sam', ['jules', 'constance'], 'Gran: "Some families are lucky. Some are early. The early ones always go in for somebody else. Keep him close, child, and don\'t let the house collect from him."'); },
    text: `Gran puts her cigarette down on the edge of the altar.

constance: You love him.

jules: That isn\'t a question.

constance: No. It\'s an answer to yours.

She looks at you.

constance: Some families are lucky. Ours. Some families are *early*. What they are isn\'t mine to tell. I\'ll tell you one thing they do: they always go in for somebody else.

constance: I knew one, once. A long time ago. On a riverbank. An old woman, soaked to the shoulders, with a child coughing up the Schuylkill on the grass. She looked at me across the snow, and I looked at her, and we both knew exactly what the other one was.

You can\'t breathe.

constance: I don\'t know what your boy is. I won\'t, until you tell me, and you won\'t, until he tells you. But I know what I saw at Thanksgiving on my television: a girl walking through four darts toward someone, and every dart turning away.

constance: Is he in danger because of you? Yes. Everyone near you is. That\'s what we are.

constance: So keep him close. Close enough that when the house comes to collect, you can feel it coming, and choose to lose.`,
    next: 'a3_next'
  },
  a3_next: {
    text: g => `${(g.f('q_count') || 0) >= 3 ? 'Gran holds up three fingers. Then she folds them down, one at a time.\n\nconstance: That\'s three.' : 'The smoke goes up in the cold.'}`,
    choices: [
      { text: 'Ask another.', tag: 'Ask', if: g => (g.f('q_count') || 0) < 3, go: 'a3_q1' },
      { text: 'Go on.', tag: 'Go on', if: g => (g.f('q_count') || 0) >= 3, go: 'a3_end' }
    ]
  },
  a3_end: {
    enter: g => { g.flag('chapel_done'); },
    text: g => `Gran picks up the die from the altar.

constance: One more thing. Not an answer. A gift.

She holds it out to you. The one she kept.

constance: Roll it. And don\'t let it.

You take it. It\'s cold. The first cold die you\'ve ever held.

You hold it over the stone altar. You feel the click coming, behind your breastbone, the way it always comes, like a lock getting ready to turn.

And you don\'t let it. ${g.f("straight_hugh") ? "You did this once, in the billiard room, with a cue to aim. There\'s nothing to aim here." : "You don\'t know how."} You just hold your breath, inside, somewhere you\'ve never held it, and you roll.

The die skitters across the stone. Tumbles. Stops.

One.

You stare at it. A single black dot, dead center, on yellowed ivory.

Behind you, very quietly, Gran laughs. A real laugh. You\'ve never heard her laugh in your life.

constance: There you are, child.`,
    next: 'a4_decide'
  },

  /* ================= ACT FOUR: RESOLUTION ================= */
  a4_decide: {
    card: { kind: 'act', label: 'Act Four', title: 'Resolution' },
    night: true,
    loc: 'RAVENSCOURT · YOUR ROOM',
    clock: { time: '11:40 PM' },
    text: g => `That night you sit on your bed at Ravenscourt with two dice in front of you on the white coverlet, yours and Gran\'s, and your phone.

You roll yours. Six. You roll Gran\'s, and you hold your breath inside, and you don\'t let it. Three.

Six. Two. Six. Five. Six. One.

You can do it. Not easily. Not every time. It\'s like holding a muscle you didn\'t know you had, and it aches, and you\'re shaking by the twentieth roll. But you can lose. On purpose.

${g.knows('forty_four') ? 'You think about the servants\' corridor. *Forty-four.* *Leave the boy to Cole.* Your father\'s glass touching hers.' : g.knows('achterberg_card') ? 'Achterberg\'s card is on the nightstand. *44.* You haven\'t thrown it away.' : ''}

${g.knows('gran_sam') ? 'You think about an old woman on a riverbank, soaked to the shoulders. *Some families are early.* The white hair at his temple, after Thanksgiving, that you put your hand on and didn\'t ask about.' : 'You think about the white hair at his temple, after Thanksgiving, that you put your hand on and didn\'t ask about.'}

You think about January. *I ask, you answer. Then you ask, and I answer.*

You pick up your phone.`,
    choices: [
      { text: 'Write it all down. Everything Gran told you. A letter, in your own hand, to give him in January. And then give it to him.', tag: 'Tell him',
        fx: g => { g.flag('jules_decision', 'tell'); g.bond('jules', { trust: 1 }); g.know('jules_letter', ['jules'], 'You wrote Sam a letter on New Year\'s night. Seven pages. Everything. You\'ll give it to him in January.'); }, go: 'a4_letter' },
      { text: 'Keep it. Not because you don\'t trust him. Because the house collects from the people near you, and you want him far enough away that it can\'t.', tag: 'Protect him',
        fx: g => { g.flag('jules_decision', 'distance'); }, go: 'a4_distance' },
      { text: 'Call him. Now. It\'s almost midnight. He said he\'d pick up.', tag: 'Call him',
        fx: g => { g.flag('jules_decision', 'call'); g.bond('jules', { affection: 1 }); }, go: 'a4_call' }
    ]
  },
  a4_letter: {
    night: true,
    text: `You get out the stationery your mother gives you every Christmas and you never use. Heavy cream. *JLP* at the top in navy.

You write until two in the morning. Seven pages. In your perfect handwriting, which is the only part of you that\'s never been lucky, because you practiced it, every letter, at that desk, when you were eight.

The window in August. The glass. The two hundred and twelve sixes. Mercutio. The Parkway. Everything Gran told you in the chapel, in the order she told it, like a case history.

And on the last page, the hardest part, you write the thing you\'ve never written or said or thought in complete sentences:

*I think whatever is watching me likes watching you too. I think that\'s why it put us on the same floor. I don\'t know if that means we should be together or if it means we absolutely shouldn\'t. I want to find out with you. I have never wanted to find anything out with anyone.*

*You go first, though. Deal is a deal.*

*J.*

You fold it in thirds. You put it in an envelope. You don\'t seal it. You put it in the inside pocket of the camel coat with the dart hole in it.

January.`,
    next: 'tag_hugh'
  },
  a4_distance: {
    night: true,
    enter: g => { g.hidden('jules_debt', -1); },
    text: `You put the phone down.

You think about Mercutio, ears back at you over his stall door. About a boy on the Parkway with blood on his face, standing next to you, and four darts turning away from you and toward somewhere else. About what the house collects, and from whom.

*Near us.*

You love him. Gran said it, and it isn\'t a question, and it isn\'t an answer either. It\'s just true, which is worse.

And the kindest thing you can do for somebody you love, if you\'re a Pemberton, might be to stand a little farther away.

You don\'t text him. You roll Gran\'s die on the coverlet and you hold your breath and you don\'t let it.

Two.

You keep rolling, losing on purpose, until three in the morning, practicing. If you\'re going to stand next to him, you\'re going to have to be very, very good at this.`,
    next: 'tag_hugh'
  },
  a4_call: {
    night: true,
    text: `He picks up on the first ring.

sam: Pemberton.

jules: You picked up.

sam: I said I would.

You don\'t say anything. You can hear him breathing. You can hear a TV, low, behind him, and a radiator knocking, and somewhere a dog.

sam: Did she tell you?

jules: Some of it. Three questions. Most people waste the first one.

sam: Did you?

jules: No.

Silence.

sam: Are you okay?

jules: I lost.

sam: What?

jules: I rolled a die in the chapel and it came up one. I did that, Sam. Not it. Me.

You\'re crying. You didn\'t know you were going to. There\'s no one in the room to see it. There\'s only him, hearing it.

He doesn\'t say anything. He just stays on the line, breathing, while you cry.

sam: That\'s good, right? Losing?

jules: Yes.

sam: Then I\'m glad. I\'m really glad, Jules.

jules: January.

sam: January.

You don\'t hang up. Neither does he. You fall asleep at three in the morning with the phone on the pillow, and when you wake up at half past seven, the call is still connected, four hundred and seventy-one minutes, and you can hear him snoring.`,
    next: 'tag_hugh'
  },

  /* ================= TAG ================= */
  tag_hugh: {
    card: { kind: 'tag' },
    night: true,
    loc: 'RAVENSCOURT · THE UPSTAIRS HALL',
    clock: { day: 'Sat', date: 'Jan 2', time: '2:20 AM' },
    text: g => `> THE CAMERA.

The upstairs hall at Ravenscourt, two in the morning. Portraits of dead Pembertons in gold frames. A runner on the floor, very old, very red.

Hugh Pemberton is walking back from the billiard room in his socks, with a glass, a little drunk, not very.

Juliet\'s door is open an inch. There\'s light under it. There\'s always light under it.

He stops. He doesn\'t know why. He looks through the gap.

His sister is sitting on her bed with her back to the door, in a T-shirt, rolling two dice on the white coverlet. One die after the other. Over and over. Her shoulders are shaking with effort, like she\'s lifting something heavy.

He watches her roll the left one. Six. He watches her roll the right one. Two.

Left. Six. Right. Four.

Left. Six. Left. Six. Left. Six.

He stands in the hall with his glass and watches the left die come up six, and six, and six, and six.

${g.f('hugh3') === 'lost' ? 'He thinks about the billiard room. The seven ball, rattling in the jaws of the pocket and stopping. *I won.* Did he?' : 'He thinks about every table, every board, every hand of cards since they were six.'}

He backs away from the door very quietly, and goes down the hall to his room, and doesn\'t sleep.

> ELSEWHERE.

The back seat of a black car on the Schuylkill Expressway, heading east toward the city, at two in the morning.

Dr. Miriam Achterberg has her little black notebook open on her knee and a silver pen in her hand, and she\'s writing, by the light of a passing streetlamp, one line at a time.

*1 Jan. 44 entered the chapel with C.P. at 16:00. Remained 52 min.*

*Thermal from the Gladwyne post: chapel interior 4°C below ambient. Consistent with prior readings.*

*At 16:41, for 0.4 seconds, chapel interior read as nothing at all.*

She looks at that line for a while. Then she writes, below it, and underlines it twice:

*She can turn it off.*`,
    end: true
  }
});

Object.assign(EH.episodes.s02e03, {
  polls: [
    { q: 'The billiard room', opts: [
      { label: 'Let the luck clear it', pct: 38, if: g => g.f('hugh3') === 'won' },
      { label: 'Played it straight and won', pct: 25, if: g => g.f('hugh3') === 'straight_won' },
      { label: 'Played it straight and lost', pct: 37, if: g => g.f('hugh3') === 'lost' }
    ] },
    { q: 'New Year\'s Eve', opts: [
      { label: 'Followed them to the study', pct: 46, if: g => g.f('achterberg3') === 'overheard' },
      { label: 'Talked to Achterberg', pct: 21, if: g => g.f('achterberg3') === 'talk' },
      { label: 'Texted Sam', pct: 33, if: g => g.f('achterberg3') === 'none' }
    ] },
    { q: 'After the chapel', opts: [
      { label: 'Wrote him a letter', pct: 44, if: g => g.f('jules_decision') === 'tell' },
      { label: 'Kept your distance', pct: 19, if: g => g.f('jules_decision') === 'distance' },
      { label: 'Called him', pct: 37, if: g => g.f('jules_decision') === 'call' }
    ] }
  ],
  onEnd: g => {
    g.recap('At Ravenscourt, Gran took Jules to the chapel and gave her three questions.');
    if (g.knows('forty_four')) g.recap('Jules heard Dr. Achterberg call her "forty-four." Then your name came up.');
    g.recap('In the chapel, Jules rolled a die and didn\'t let it. It came up one.');
    g.recap(g.f('bells_reply') === 'yes' ? 'At midnight on New Year\'s, the bells stopped for one second, for both of you. You asked if she heard them. She said yes.' : 'At midnight on New Year\'s, the bells stopped for one second. You asked Jules if she heard the bells. She said Happy New Year.');
    if (g.f('jules_decision') === 'tell') g.recap('Jules wrote you a letter. Seven pages. She\'s keeping it for January.');
  }
});
