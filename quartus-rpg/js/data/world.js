/* QUARTUS — cast and world registry. Spoiler-free. */
(function () {
  var Q = (typeof window !== 'undefined' ? window : globalThis).Q;

  Q.GAME_TITLE = 'QUARTUS';
  Q.SEASON_NAME = 'Season One — The Counting';

  Q.chars = {
    narrator: { name: 'Prologue', guest: true, color: '#8a8378' },
    miller: { name: 'The Miller', guest: true, color: '#8a8378' },
    wystan: {
      name: 'Ser Wystan Hale', short: 'Wystan', color: '#8fa9c4', hp: 12, coin: 6,
      stats: { blade: 4, wit: 2, guile: 1, faith: 3 },
      epithet: 'The Bastard of Greyfen',
      blurb: 'Born on the wrong side of a Marcher lord\'s blanket, knighted on a bloody field, sworn to the prince who saw his worth. Honor is the only inheritance he was ever given, and he intends to spend it.'
    },
    ysolde: {
      name: 'Lady Ysolde Carrow', short: 'Ysolde', color: '#c0627a', hp: 8, coin: 40,
      stats: { blade: 1, wit: 3, guile: 5, faith: 1 },
      epithet: 'The Twice-Widowed',
      blurb: 'Heir by attrition to House Carrow\'s wool, silver and salt. Two husbands buried, a mistress who owns her leash, and a talent for being the most useful person in any room she would rather be leaving.'
    },
    maren: {
      name: 'Sister Maren Vosk', short: 'Maren', color: '#d3ad55', hp: 8, coin: 2,
      stats: { blade: 0, wit: 4, guile: 2, faith: 4 },
      epithet: 'Archivist-Confessor',
      blurb: 'Raised by the Threefold Church after the sweating plague emptied her village, and rewarded for it with ink, candles and other people\'s sins. She has believed everything she was taught. She is beginning to read the margins.'
    },
    corr: {
      name: 'Corr Anwen', short: 'Corr', color: '#7fa56f', hp: 9, coin: 5,
      stats: { blade: 2, wit: 3, guile: 3, faith: 2 },
      epithet: 'The Bonesetter',
      blurb: 'A marsh-born healer from the Dunmarch, where the old counting is still taught to children and the Church is still a rumor. He sets bones, reads what the dead leave behind, and has been running for as long as he can remember.'
    }
  };
  Q.POVS = ['wystan', 'ysolde', 'maren', 'corr'];

  function npc(id, name, role) { Q.npcs[id] = { name: name, role: role }; }

  npc('aldous', 'King Aldous the Long', 'Ninety-five, and reigning for seventy-one years');
  npc('garrick', 'Prince Garrick', 'Lord Marcher of the North');
  npc('maud', 'Princess Maud', 'The realm\'s steady hand');
  npc('edric', 'Prince Edric', 'The pious prince');
  npc('marden', 'Prince Marden', 'The late heir');
  npc('alys', 'Lady Alys', 'Marden\'s daughter');
  npc('doran', 'Sir Doran Fenwick', 'Garrick\'s captain');
  npc('corbin', 'Sir Corbin Dray', 'The Princess\'s champion');
  npc('perrin', 'Lord Perrin Ashby', 'Master of the King\'s Coin');
  npc('cressida', 'Lady Cressida Fane', 'A lady of the court');
  npc('quill', 'Physician Quill', 'Physician to the king');
  npc('lucan', 'Archprelate Lucan', 'Head of the Threefold Church');
  npc('venn', 'High Chandler Venn', 'Chief of the Candlemen');
  npc('anselm', 'Brother Anselm', 'Keeper of the Cathedral archive');
  npc('piers', 'Piers', 'Prince Marden\'s squire');
  npc('tamsin', 'Tamsin', 'A kitchen girl with sharp ears');
  npc('hob', 'Hob', 'A name Corr does not say aloud');
  npc('hale', 'Lord Hale of Greyfen', 'Wystan\'s father');
})();
