/* S2 · E10 · THE ITALIAN MARKET (season finale), part 1 of 4: meta, cold open, Act One ("May"). */
EH.episode({
  id: 's02e10', season: 2, number: 10, title: 'The Italian Market', look: 's2',
  cast: ['sam', 'jules', 'rosa', 'nonna', 'constance', 'nik', 'bree', 'heck', 'vinnie', 'mikey', 'dana', 'hugh'],
  start: 'cold_open',
  xp: 8,
  previously: g => [
    'Halcyon is taking Bruno\'s people. Thomas Nguyen. Sonny Pugliese. One a night.',
    g.f('slip9b') === 'guns' ? 'At the ballpark you took Dante\'s gun from two feet behind Dr. Achterberg\'s head. "Thank you, Mr. Kearney."' : 'At the ballpark, Dante tried to take Dr. Achterberg from the Pemberton suite.',
    g.f('jules_saw9') ? 'In the Slip, Jules\'s eyes moved. She saw you.' : 'Jules was in the corridor.',
    g.f('vinnie9') === 'stayed' ? 'Vinnie stayed. He sleeps on your couch.' : g.f('vinnie9') === 'chose' ? 'Vinnie gave Dante back his coat.' : 'Vinnie went with Dante. "But I asked him for you."',
    g.f('terms8') === 'count' ? 'Ma counts. Every morning: count? Zero.' : 'Ma knows.',
    'Constance Pemberton came to Mifflin Street and sat on Teresa DiNardo\'s stoop.'
  ],
  scenes: {

    /* ================= COLD OPEN ================= */
    cold_open: {
      card: { kind: 'cold' },
      night: true,
      loc: 'MIFFLIN STREET · THE STOOP',
      clock: { day: 'Mon', date: 'Apr 19', time: '7:50 PM' },
      text: `> THE CAMERA.

Later. The streetlights are on. The peas are shelled, the bowl full of green and the paper bag full of empty pods. The Bentley is still halfway down Mifflin Street with its driver standing beside it like he\'s been there since the Korean War.

Two old women on kitchen chairs on a stoop. They have been talking for four hours. Neither of them has raised her voice once.

constance: There\'s one more thing.

She takes something out of the pocket of her camel hair coat. An index card, folded in half, soft at the corners.

constance: My grandson took it from my granddaughter\'s coat. He thought I\'d want it. He was right, which I find I resent.

Teresa takes it. She unfolds it under the porch light. She reads the front. She reads the back.

*Don\'t trust the lucky one.*

She reads it again. Her thumb moves over the letters. The *t*\'s. Crossed low, like little crucifixes.

constance: Hugh thinks it\'s the boy\'s hand. Your grandson.

Teresa doesn\'t answer for a long time.

TERESA: Sister Margaret taught that *t* at St. Monica\'s. To every boy in that school. For fifty years.

She holds the card closer to the light.

TERESA: She taught it to my brother.

Constance looks at her.

TERESA: This isn\'t Salvatò\'s hand, Constance. It\'s close. It\'s very close. But my grandson presses light, like his father. This one pressed so hard he tore the card.

TERESA: My brother pressed like that. Salvatore. When he was angry, when he was frightened. He tore the paper. I have his letters from the Navy. Every one of them is torn.

The street is very quiet.

constance: Your brother died in 1961.

TERESA: Yes.

constance: Teresa. This card is from November.

Teresa folds the card. She doesn\'t give it back. She puts it in the pocket of her black cardigan, next to her rosary.

TERESA: Then somebody in my family has been writing letters from somewhere I can\'t go.

She stands up. She picks up the bowl of peas.

TERESA: Come Sunday. The sixteenth. The Market festival. They carry the saints up 9th Street. You\'ll sit with me on the curb at Christian Street and watch our grandchildren.

constance: Why?

TERESA: Because I counted. And something is going to happen on the sixteenth. And I want somebody next to me whose eyes move.`,
      next: 'titles'
    },

    titles: { card: { kind: 'title' }, next: 'a1_may' },

    /* ================= ACT ONE: MAY ================= */
    a1_may: {
      card: { kind: 'act', label: 'Act One', title: 'May' },
      loc: 'CARDONE HALL · 9-14',
      clock: { day: 'Mon', date: 'May 3', time: '8:00 AM' },
      enter: g => { g.sleep(8); g.know('halina_kidney', ['sam', 'bree'], 'Halina Kowal\'s transplant on April 20 worked. The kidney took. Bree still works for Bruno.'); },
      text: g => `May. The last two weeks of freshman year.

Finals on the twelfth, thirteenth and fourteenth. Move-out on the sixteenth. The ninth floor is half boxes and half panic. Somebody has written *DAYS UNTIL WE ARE FREE* on the lounge whiteboard and is counting down in Sharpie, and somebody else keeps adding a day.

${g.f('terms8') === 'count' ? 'TXT rosa: count?\nTXT sam: zero\nTXT rosa: good. eat breakfast\n\nIt\'s been zero since the ballpark. Ma counted four seconds that night and wrote it on the St. Monica\'s calendar, and that\'s the last red mark.' : 'TXT rosa: eat breakfast'}

Halina Kowal\'s new kidney took. Bree sent you a photo on April twenty-second: Halina in a hospital bed at Jefferson, gray, furious, giving the camera the finger. *SHE\'S FINE*, Bree wrote. *SHE\'S FURIOUS. SHE\'S FINE.*

Jules is asleep in your bed with the lamp off. She has an organic chemistry final in nine days and claims she\'s studying in her sleep.

You haven\'t gone in since the ballpark. You haven\'t needed to. Grace counted your hair on the first of May and said *same* and went back to her desk without another word, which from Grace is a standing ovation.

And at 8:04 on Monday morning, your phone buzzes with a number you saved in April as *M.A. — DON\'T*.

TXT M.A. — DON\'T: Good morning, Mr. Kearney. I hope your finals are going well.
TXT M.A. — DON\'T: I\'d like to show you something. The Franklin Institute, Saturday, ten a.m. By the Giant Heart. Bring anyone you like.
TXT M.A. — DON\'T: I promise to tell you the truth. Nobody else in your life can.

You read it four times.

Across the room, Nik is already up, in front of his four monitors.

nik: Bro. Is that her? Is that *her*? Don\'t answer. Your face answered.`,
      choices: [
        { text: 'Go. Alone. Whatever she\'s going to say, you\'d rather hear it without anyone else having to.', tag: 'Alone',
          fx: g => { g.flag('institute10', 'alone'); g.hidden('revenant_drift', 0.5); }, go: 'a1_institute' },
        { text: 'Go. With Jules. *Bring anyone you like.* Bring the one with the number.', tag: 'With Jules',
          fx: g => { g.flag('institute10', 'jules'); g.bond('jules', { trust: 1 }); }, go: 'a1_institute' },
        { text: 'Go. And let Nik wire you. Every word, for Dana Fiorillo. *The truth*, she said. Let the city have it too.', tag: 'Wired',
          fx: g => { g.flag('institute10', 'wired'); g.bond('nik', { respect: 2 }); g.hidden('halcyon_heat', 1); }, go: 'a1_institute', if: g => g.f('dana4') === 'halcyon' || g.f('dana5') },
        { text: 'Don\'t go. Delete it. You know what she is.', tag: 'Don\'t go',
          fx: g => { g.flag('institute10', 'none'); }, go: 'a1_noinstitute' }
      ]
    },

    a1_institute: {
      loc: 'THE FRANKLIN INSTITUTE · THE GIANT HEART',
      clock: { day: 'Sat', date: 'May 8', time: '10:00 AM' },
      enter: g => { g.know('aperture_truth', ['sam'].concat(g.f('institute10') === 'jules' ? ['jules'] : []), 'Dr. Achterberg, at the Franklin Institute: on August 22 at 11:51:04, Halcyon opened something under Broad Street for seven-tenths of a second. It was called APERTURE. Sixty-one people in the radius changed. "We didn\'t make you, Mr. Kearney. We opened a door. You were standing in it."'); g.know('achterberg_offer', ['sam'].concat(g.f('institute10') === 'jules' ? ['jules'] : []), 'Achterberg offered: come in voluntarily, and she releases Bruno\'s people. She is moving them on Sunday, May 16, to a new site out of state.'); g.hidden('halcyon_heat', 1); },
      text: g => `The Giant Heart at the Franklin Institute is a heart you can walk through, two stories tall, pink and red, with a recorded heartbeat booming through it that you can feel in your sneakers. Every kid in Philadelphia has walked through it on a field trip. You walked through it in third grade and threw up in the left ventricle.

${g.f('institute10') === 'jules' ? 'Jules is beside you in sunglasses, holding your hand.' : g.f('institute10') === 'wired' ? 'Nik\'s earbud is in your ear. Under your hoodie, taped to your ribs, there\'s a microphone the size of a dime that Nik ordered from a website he won\'t name. *Recording*, he says in your ear. *Bro. Recording. Don\'t say anything incriminating. Wait. That\'s the opposite of the plan.*' : 'You came alone.'}

She\'s sitting on a bench at the exit of the right atrium, in a gray cardigan, with her glasses on her head, watching a class of second graders in matching yellow T-shirts scream their way through the aorta.

ACHTERBERG: Mr. Kearney. ${g.f('institute10') === 'jules' ? 'And Juliet. I\'m so glad.' : ''} Sit down. I\'ll be brief. I know you have a Calc final.

You don\'t sit. She doesn\'t seem to mind.

ACHTERBERG: On August twenty-second, at 11:51 and four seconds, my company opened a door under Broad Street. I won\'t bore you with the physics. We called it APERTURE. It was open for seven-tenths of a second.

The heart beats. *Boom-boom. Boom-boom.*

ACHTERBERG: Sixty-one people were standing close enough. Sixty-one people changed. The young man who stops things. The young woman with the voices. A boy named Jayden. A girl who pops lightbulbs. ${g.f('institute10') === 'jules' ? 'Juliet.' : 'A girl from the Main Line.'} You.

ACHTERBERG: It wasn\'t an accident, Mr. Kearney. I want you to hear that from me, because nobody else is ever going to tell you, and you deserve to know. We didn\'t make you. We opened a door. You happened to be standing in it.

${g.f('institute10') === 'jules' ? 'Jules\'s hand tightens on yours until it hurts.' : ''}

sam: Femi was standing in it.

ACHTERBERG: Yes.

sam: You killed him.

ACHTERBERG: Mr. Brannigan\'s people killed him. I signed the paper that let them. I won\'t pretend otherwise. I don\'t lie to people I respect, and I respect you, because at a baseball game last month you took a gun away from a man who was about to shoot me, and you didn\'t have to.

She stands. She\'s shorter than you remembered.

ACHTERBERG: Here\'s my offer. Sunday the sixteenth, I\'m moving Mr. Iannucci\'s people out of the city. Mr. Nguyen. Mr. Pugliese. The others. Out of his reach, before he does something stupid that gets someone killed.

ACHTERBERG: Or. You come in. Voluntarily. Not to a bed. To a lab, with a door that opens from the inside. You let me study what happens to you when you stop the clock. And I let them all go home. Sunday. To their families. To their koi.

She holds out a white card. *HALCYON DYNAMICS.* A number on the back. No name.

ACHTERBERG: Think about it until Sunday. You have more time than anyone.`,
      choices: [
        { text: 'Take the card. Say nothing. Walk out through the heart.', tag: 'Take the card',
          fx: g => { g.flag('offer10', 'card'); }, go: 'a1_after' },
        { text: '"Let them go first. All of them. Then we talk."', tag: 'Them first',
          fx: g => { g.flag('offer10', 'first'); g.hidden('revenant_drift', 0.5); }, go: 'a1_after' },
        { text: '"No." To her face. In front of the second graders.', tag: 'No',
          fx: g => { g.flag('offer10', 'no'); g.hidden('revenant_drift', -0.5); }, go: 'a1_after' }
      ]
    },

    a1_after: {
      loc: 'THE FRANKLIN INSTITUTE',
      text: g => `${g.f('offer10') === 'card' ? 'You take the card. You don\'t say anything. You walk out through the left ventricle, where you threw up in third grade, and the heart beats behind you like it\'s laughing.' : g.f('offer10') === 'first' ? 'sam: Let them go first. All of them. Then we talk.\n\nACHTERBERG: *(smiling)* You\'re your mother\'s son. I\'ve read about her. She walked into a social club in her church coat.\n\nShe puts the card in your hand anyway.\n\nACHTERBERG: No. But I admire the instinct.' : 'sam: No.\n\nA second grader in a yellow T-shirt stops and stares at you. Achterberg doesn\'t flinch.\n\nACHTERBERG: I thought you\'d say that. I\'d have been disappointed if you didn\'t.\n\nShe puts the card on the bench beside her and leaves it there. You don\'t pick it up. On your way out, you look back. A second grader has picked it up and is using it as a fan.'}

${g.f('institute10') === 'wired' ? 'Outside on the steps, by the Ben Franklin statue, Nik is in your ear, hyperventilating.\n\nnik: I got it. I got *all* of it. "We opened a door. You happened to be standing in it." Bro. Bro. That\'s a *front page*. That\'s a Pulitzer. That\'s a *subpoena*.' : g.f('institute10') === 'jules' ? 'Outside on the steps, by the Ben Franklin statue, Jules sits down very suddenly, like her legs have stopped working.\n\njules: We were standing in a door.\n\nsam: Yeah.\n\njules: My father paid for the door, Sam. Pemberton Lyle Capital. I\'ve seen the name on his desk. *Halcyon.* I thought it was a *boat*.' : 'Outside on the steps, by the Ben Franklin statue, you sit down and put your head between your knees and breathe, the way Grace taught you, until the steps stop moving.'}

Sunday the sixteenth. Move-out day. The Italian Market festival.

They\'re moving Bruno\'s people on Sunday.

And Bruno is going to find out.`,
      next: 'a2_vinnie'
    },

    a1_noinstitute: {
      loc: 'CARDONE HALL',
      clock: { day: 'Sat', date: 'May 8', time: '10:00 AM' },
      text: `You delete the text. You don\'t go.

Saturday at ten you\'re in the basement of Paley Library with Femi\'s green notebook open in front of you, *NOTES FOR SAM K.*, doing the last of the Calc review the way he wrote it out for you, *outside first*.

At 10:40, your phone buzzes.

TXT M.A. — DON\'T: That\'s all right. I\'ll tell you anyway, since you won\'t come to me.
TXT M.A. — DON\'T: On August 22 at 11:51:04, we opened a door under Broad Street. Seven-tenths of a second. You happened to be standing in it.
TXT M.A. — DON\'T: Sunday the 16th I\'m moving Mr. Iannucci\'s people out of the city. I thought you\'d want to know. You\'re the only one who might stop him from doing something foolish.

You look at it for a long time, with Femi\'s handwriting under your other hand.

*We opened a door.*`,
      enter: g => { g.know('aperture_truth', ['sam'], 'Dr. Achterberg, by text: on August 22 at 11:51:04, Halcyon opened a door under Broad Street for seven-tenths of a second. "You happened to be standing in it."'); },
      next: 'a2_vinnie'
    }
  }
});
