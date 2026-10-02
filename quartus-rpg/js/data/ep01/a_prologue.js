/* Episode 1 — Cold open */
Q.part(1, {

  e1_p1: {
    pov: 'miller', place: 'Hollin Weir — the Eastmarch',
    text: [
      { card: 'In the three hundred and seventh year of the Crown' },
      'Osric Tull wakes because the wheel has stopped.',
      'Not the sound of it — the lack of the sound. Forty years at the weir and he has never slept through the silence of it; it wakes him the way a missing tooth wakes a tongue. He lies in the dark and listens to the river go on without work to do.',
      'Then he feels the cold side of the bed, and the draft.',
      'His wife is standing in the open doorway with her back to him. Hild. Barefoot on the flagstones, nightshift soaked to the knee, black hair loose down her spine. The yard behind her is lit by a moon the color of tallow, too low and too large, and the well-rope in the yard hangs dripping, as though something has just been drawn up and put back.',
      '“Hild?”',
      'She does not turn. Her lips are moving. For a moment he takes it for a prayer. Then she says it again, clear in the quiet, in the voice of a child reciting a lesson she has been beaten for forgetting.',
      '“Four.”'
    ],
    choices: [
      { tag: 'Hold', label: 'Take her by the shoulders and turn her around.', goto: 'e1_p2h', set: { miller_grabbed: true } },
      { tag: 'Gentle', label: 'Say her name again, softly — the way you wake someone on a cliff edge.', goto: 'e1_p2h' },
      { tag: 'Follow', label: 'Pull on your boots. If she is going somewhere, you are going with her.', goto: 'e1_p2f' }
    ]
  },

  e1_p2h: {
    pov: 'miller', place: 'Hollin Weir — the Eastmarch',
    fx: function (s) { s.f.miller_held = true; s.omen(1); },
    text: function (s) {
      return [
        s.f.miller_grabbed
          ? 'She turns as easily as a door on a good hinge. Her eyes are open and there is nothing behind them. Then she leans toward the road, and she weighs nothing, and then she weighs as much as the mill itself, and Osric is dragged a full yard across the flagstones before he gets his arms around her and his heels against the sill.'
          : 'She hesitates at her own name, the way a dreamer does at a voice from the waking world. Her shoulders flinch. She leans toward the road, and then toward him, and he crosses the floor in three steps and gets his arms around her before the leaning wins.',
        'He holds her until the sky goes gray. She does not struggle, exactly. She only strains west, steadily, like a boat on a tether, while the cold of her goes through his shirt. Once, with his face pressed into her wet hair, he tastes it on his lips — salt. Sea-salt, forty miles from any sea.',
        'At dawn she sags and he catches her, and she wakes with her cheek against his collarbone, weeping before she knows why.',
        '“Where did I go, Osric?” she whispers. “It was so far. There was so much water. And someone was counting.”',
        'Beyond the yard, in the dust of the king’s road, there are footprints. Bare, small and large, wet in the dry dust, dozens of them, side by side like the print of a congregation. Every one of them points west. Toward Highgarrow.'
      ];
    },
    end: true, continue: 'Continue'
  },

  e1_p2f: {
    pov: 'miller', place: 'The King’s Road',
    fx: function (s) { s.f.miller_followed = true; s.omen(2); },
    text: [
      'He follows her barefoot in his boots, which feels like a joke he does not understand. She does not look back. She walks like water finding its level.',
      'At the crossroads the road is full.',
      'Forty. Sixty. More arriving from the dark fields as he watches: Harl the smith in his drawers, the midwife with her braid undone, a boy of six led by the hand by a sister who walks with her eyes wide open and does not blink. All of them barefoot. All of them wet to the knee. Nobody speaks. The only sound is the whisper of bare feet in dust and, now and then, a single soft word passed down the line like a coin hand to hand.',
      '“Four.”',
      'He takes Hild’s hand. It is cold as river-stone and her fingers close on his hard, not out of love but the way a latch closes. He walks with them, west, for what he will later swear was a mile and cannot have been less than twelve.',
      'When the sun clears the hills they stop all at once, like starlings that have heard a hawk, and then the knees go out of them, one after another. They wake in a field in the wrong parish with salt crusting the corners of their mouths, and nobody remembers anything.',
      'Nobody but Osric. He remembers all of it. He remembers that wherever they were walking toward, it had not been in any hurry. It had simply been counting, and it could wait.'
    ],
    end: true, continue: 'Continue'
  }
});
