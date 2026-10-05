/* TITHE — static game data: cast, items, enemies, skills, recipes, regions, codex.
   Episodes register themselves via TITHE.episode({...}) in src/episodes/*.js. */
var TITHE = window.TITHE = window.TITHE || {};
TITHE.EPISODES = TITHE.EPISODES || {};
TITHE.episode = function (def) { TITHE.EPISODES[def.n] = def; };

TITHE.STATS = {
  might:    { name: 'Might',    blurb: 'Force, intimidation, breaking things.' },
  finesse:  { name: 'Finesse',  blurb: 'Speed, stealth, aim, locks, hands.' },
  grit:     { name: 'Grit',     blurb: 'Endurance, willpower, drink, pain, fear.' },
  wits:     { name: 'Wits',     blurb: 'Perception, knowledge, tactics, reading people.' },
  presence: { name: 'Presence', blurb: 'Persuasion, command, seduction, lies.' }
};

/* Cast. color = UI accent for dialogue. bond:true means a bond meter is tracked. */
TITHE.CAST = {
  ansel:    { name: 'Ansel',    full: 'Ansel Dray', color: '#d8c7a3', role: 'The Sellsword',
    bio: 'Thirty-one. Once a sergeant of the Red Company, four hundred spears. Died at Corran\'s Ford six years ago, and woke up anyway. Drinks to sleep. Hates the sky.' },
  tamsin:   { name: 'Tamsin',   full: 'Tamsin Vell', color: '#d98a4e', role: 'The Thief', bond: true,
    bio: 'Twenty-four. Fen-born archer, picklock, liar. Copper hair hacked short with a knife, a chipped front tooth, a laugh that is always a little too loud. Calls you Sergeant.' },
  isolde:   { name: 'Isolde',   full: 'Lady Isolde Varane', color: '#9fb4d6', role: 'The Heir', bond: true,
    bio: 'Twenty-three. Only child of the Lord of Harrowgate. Keeps her father\'s books and knows exactly how bankrupt the March is. Courteous the way a blade is sharp.' },
  brannagh: { name: 'Brannagh', full: 'Lampwarden Brannagh Vey', color: '#e8e4da', role: 'The Hunter', bond: true,
    bio: 'Twenty-seven. Warrior-inquisitor of the Lamp. White-blonde crop, a starfire burn down her throat, the best blade in her chapter. She believes. She is not stupid. That is her tragedy.' },
  oriel:    { name: 'Oriel',    full: 'Oriel', color: '#b8c8ff', role: 'The Oracle', bond: true,
    bio: 'Twenty-one. The Lamp\'s caged oracle. Born blind; hears the stars. Shaven head tattooed with star-charts. Speaks, sometimes, in a voice that is not hers.' },
  hob:      { name: 'Hob',      full: 'Hob Fenner', color: '#a8c27a', role: 'The Stable Boy', bond: true,
    bio: 'Eighteen. Harrowgate stable boy. Gangly, freckled, brave in the stupid way. Thinks you are a legend.' },
  pell:     { name: 'Pell',     full: 'Brother Pell', color: '#c4a35a', role: 'The Defrocked Priest', bond: true,
    bio: 'Fifty-four. Pellam Ashe, once a Lamplighter of the Lanternhold, expelled for asking what happens in the crypt. Scholar, drunk, coward, kind.' },
  ulla:     { name: 'Ulla',     full: 'Ulla Stonehand', color: '#c96a5a', role: 'The Shieldmaiden', bond: true,
    bio: 'Thirty-eight. Nordvik exile, six and a half feet of braids, scars and appetite. Killed her chieftain\'s son for what he did to her sister. Does not regret it.' },
  mags:     { name: 'Mags',     full: 'Mags Halloran', color: '#d6a07a', role: 'The Innkeeper', bond: true,
    bio: 'Forty-one. Widow, owner of the Gutted Hen. Big laugh, forearms like a smith\'s. Has buried two husbands and a son and is not interested in burying anyone else.' },
  hask:     { name: 'Hask',     full: 'Ser Konrad Hask', color: '#c25b4a', role: 'The Marshal',
    bio: 'Forty-six. Former captain of the Red Company. Sold it at Corran\'s Ford. Now Marshal of Harrowgate. Warm, funny, generous to his men. Believes in nothing but the next deal.' },
  abbess:   { name: 'The Abbess', full: 'Abbess Morwenna Sallow', color: '#e0c48a', role: 'The Abbess',
    bio: 'Sixty-two. Head of the Lanternhold: hospital, orphanage, chapterhouse. Smells of honey and lamp oil. Beloved.' },
  varane:   { name: 'Lord Varane', full: 'Lord Aurel Varane', color: '#8fa3b8', role: 'The Lord',
    bio: 'Fifty-five. Lord of Harrowgate. Gouty, kind, weak. Gambled the March\'s money on a canal that was never finished.' },
  cassius:  { name: 'Cassius',  full: 'Prince Cassius Aldermere', color: '#e2c35f', role: 'The Prince',
    bio: 'Thirty. Heir to the dying king. Golden, amused, intelligent, cruel without heat. Collects things that should not exist.' },
  gall:     { name: 'Mother Gall', full: 'Mother Gall', color: '#7fa36a', role: 'The Fen-Witch',
    bio: 'Older than anyone can say. Tiny, toothless, bright-eyed. Midwife, curse-maker, keeper of the old burials. Her house stands over her "sleepers."' },
  tallyman: { name: 'The Tallyman', full: 'The Tallyman', color: '#9aa0a6', role: '—',
    bio: 'A tall grey man in a rain-dark coat, with a ledger. He appears where death is close. He counts.' },
  rusk:     { name: 'Rusk',     full: 'Rusk of the Thornwood', color: '#b07a4a', role: 'The Bandit Queen', bond: true,
    bio: 'Thirty-five. Once Lady Ermengarde Rusk, disinherited. Bandit queen of the Thornwood. Wit, scars, and a crossbow called Husband.' },
  delphine: { name: 'Delphine', full: 'Delphine', color: '#d58fb0', role: 'The Courtesan',
    bio: 'Twenty-six. Travels with the Prince. Clever, warm, and paid by the word.' },
  moll:     { name: 'Moll',     full: 'Sergeant Dunstan Moll', color: '#9a8f7a', role: 'The Gate Sergeant',
    bio: 'Fifty. Sergeant of the Harrowgate gate. Hask\'s man, but honest, which may yet matter.' },
  odo:      { name: 'Odo',      full: 'Odo Pettibone', color: '#b9a37c', role: 'The Merchant',
    bio: 'Cloth merchant. Fat, frightened, and owed money by half the March.' },
  wat:      { name: 'Wat',      full: 'Wat', color: '#a09080', role: 'The Deserter',
    bio: 'Seventeen. A starving deserter on the Kingsroad.' },
  edda:     { name: 'Edda',     full: 'Edda Moss', color: '#9cb08a', role: 'The Accused',
    bio: 'Nineteen. A fen girl who buried her father in the earth.' },
  gideon:   { name: 'Ser Gideon', full: 'Ser Gideon Vail', color: '#c9c9c9', role: 'The Champion',
    bio: 'The Prince\'s champion and the finest lance in the realm. A gentleman, which is rarer.' },
  hollin:   { name: 'Hollin',   full: 'Barrow-King Hollin', color: '#8f9f7f', role: 'The First King',
    bio: 'A king who lay down alive in his tomb a thousand years ago.' },
  gerta:    { name: 'Gerta',    full: 'Gerta Ironside', color: '#a88f6f', role: 'The Smith', bio: 'Harrowgate\'s smith. Few words, all of them prices.' },
  silas:    { name: 'Silas',    full: 'Silas Wyck', color: '#8fae9b', role: 'The Apothecary', bio: 'Apothecary of the Market Stair. Nervous, precise, smells of vinegar.' },
  tibb:     { name: 'Old Tibb', full: 'Old Tibb', color: '#a39a86', role: 'The Crier', bio: 'Reads the notice board aloud for those who can\'t, for a penny.' },
  narrator: { name: '', full: '', color: '#d8c7a3', role: '' }
};

/* Items. type: weapon | armor | trinket | consumable | material | quest.
   weapon: dmg [min,max], hit, stat ('might'|'finesse'), pierce, tags (e.g. silver), price.
   armor: arm, price. trinket: mods {stat:n} or special. consumable: use effect. */
TITHE.ITEMS = {
  // weapons
  widow:        { name: 'Widow', type: 'weapon', dmg: [5, 9], hit: 0, stat: 'might', price: 0, desc: 'A battered bastard sword taken from a dead knight at Corran\'s Ford. The edge has been ground back so many times it is narrower than it should be. It has never failed you.' },
  hand_axe:     { name: 'Hand Axe', type: 'weapon', dmg: [4, 8], hit: 1, stat: 'might', price: 30, desc: 'A woodsman\'s axe. Honest work.' },
  arming_sword: { name: 'Arming Sword', type: 'weapon', dmg: [4, 8], hit: 2, stat: 'finesse', price: 90, desc: 'A light knightly sword, quick in the hand.' },
  war_axe:      { name: 'Nordvik War-Axe', type: 'weapon', dmg: [6, 13], hit: -1, stat: 'might', price: 160, desc: 'Heavy, bearded, cruel. Bites through mail.' , pierce: 1},
  mace:         { name: 'Flanged Mace', type: 'weapon', dmg: [5, 9], hit: 0, stat: 'might', pierce: 2, tags: ['blunt'], price: 120, desc: 'Ignores most armor. Breaks bones the dead still need.' },
  silver_sword: { name: 'Silvered Longsword', type: 'weapon', dmg: [6, 10], hit: 1, stat: 'might', tags: ['silver'], price: 320, desc: 'A longsword with a silver-chased edge. Wights and fen-things fear it.' },
  hask_blade:   { name: 'Kingsmercy', type: 'weapon', dmg: [7, 12], hit: 2, stat: 'might', pierce: 1, price: 0, desc: 'Konrad Hask\'s sword. Beautiful Corvane steel bought with four hundred lives.' },
  barrow_blade: { name: 'Barrow Bronze', type: 'weapon', dmg: [6, 11], hit: 1, stat: 'might', tags: ['under'], price: 0, desc: 'A leaf-bladed bronze sword from the barrow. Warm to the touch. Ghouls will not meet your eyes.' },
  // armor
  leather_jack: { name: 'Leather Jack', type: 'armor', arm: 1, price: 0, desc: 'Boiled leather, sweat-black, patched twice.' },
  brigandine:   { name: 'Brigandine', type: 'armor', arm: 2, price: 140, desc: 'Steel plates riveted inside canvas.' },
  mail:         { name: 'Mail Hauberk', type: 'armor', arm: 3, price: 260, desc: 'Knee-length riveted mail. Heavy; worth it.' },
  warden_plate: { name: 'Lampwarden Plate', type: 'armor', arm: 4, price: 0, desc: 'White-enamelled plate with the seven-point star on the breast. It does not feel holy on you.' },
  // trinkets
  roll_case:    { name: 'The Company Roll', type: 'trinket', mods: { grit: 1 }, price: 0, desc: 'A waxed leather case holding four hundred names in your own hand. You read it some nights.' },
  luck_knot:    { name: 'Tamsin\'s Luck-Knot', type: 'trinket', mods: { finesse: 1 }, price: 0, desc: 'A knot of red thread she tied around your wrist "so you\'d stop dying near me."' },
  gall_charm:   { name: 'Gall\'s Charm', type: 'trinket', mods: { wits: 1 }, price: 0, desc: 'A knot of hair and finger-bone. It is warm. It is listening.' },
  saint_knuckle:{ name: 'Saint\'s Knuckle', type: 'trinket', mods: { grit: 1, presence: 1 }, price: 180, desc: 'A relic. Probably a pig.' },
  barrow_ring:  { name: 'Barrow-King\'s Ring', type: 'trinket', mods: { wits: 1, might: 1 }, price: 0, desc: 'Bronze, heavy, too large for any living finger but yours. You hear the earth breathing when you wear it.' },
  star_glass:   { name: 'Oriel\'s Star-Glass', type: 'trinket', mods: { wits: 2 }, price: 0, desc: 'A lens of black glass. Through it the stars look like eyes.' },
  // consumables
  poultice:     { name: 'Poultice', type: 'consumable', heal: 14, price: 12, desc: 'Bog-myrtle and honey in linen. Restores 14 HP.' },
  black_draught:{ name: 'Black Draught', type: 'consumable', heal: 32, price: 40, desc: 'A witch\'s brew. Tastes of grave dirt. Restores 32 HP.' },
  spirits:      { name: 'Strong Spirits', type: 'consumable', heal: 5, st: 1, cure: ['fear'], price: 6, desc: 'Fen poitín. Restores 5 HP and 1 Stamina; cures Fear.' },
  firebomb:     { name: 'Firebomb', type: 'consumable', combat: 'firebomb', price: 25, desc: 'A clay pot of lamp oil and saltpeter. 7–12 fire damage to all foes.' },
  silver_oil:   { name: 'Silver Oil', type: 'consumable', combat: 'silveroil', price: 30, desc: 'Coat your blade: it counts as silver for the rest of the fight.' },
  witch_salt:   { name: 'Witch-Salt', type: 'consumable', combat: 'witchsalt', price: 20, desc: 'Thrown, it burns fey and Under-things (10–16) and stuns them.' },
  knives:       { name: 'Throwing Knives', type: 'consumable', combat: 'knives', price: 8, desc: 'A brace of knives. 5–9 damage, never misses.' },
  tonic:        { name: 'Myrtle Tonic', type: 'consumable', st: 3, price: 15, desc: 'Restores 3 Stamina.' },
  surgeon_kit:  { name: 'Surgeon\'s Kit', type: 'consumable', cureWound: true, price: 35, desc: 'Needle, gut, a bottle of something. Treats one Wound (outside combat).' },
  // materials
  ghoul_gristle:{ name: 'Ghoul Gristle', type: 'material', price: 4, desc: 'Grey, rubbery, smells of a cellar.' },
  wolf_pelt:    { name: 'Wolf Pelt', type: 'material', price: 6, desc: 'Thick winter fur.' },
  wyrm_scale:   { name: 'Wyrm Scale', type: 'material', price: 40, desc: 'Salt-white, hard as a plate.' },
  bog_myrtle:   { name: 'Bog Myrtle', type: 'material', price: 2, desc: 'Sweet, resinous fen herb.' },
  silver_dust:  { name: 'Silver Dust', type: 'material', price: 12, desc: 'Filings from the Saltdown seams.' },
  saltpeter:    { name: 'Saltpeter', type: 'material', price: 3, desc: 'Scraped from cellar walls.' },
  grave_moss:   { name: 'Grave-Moss', type: 'material', price: 3, desc: 'Grows only on barrow stone.' },
  lamp_oil:     { name: 'Lamp Oil', type: 'material', price: 3, desc: 'Lanternhold oil. Burns blue.' },
  linen:        { name: 'Linen', type: 'material', price: 2, desc: 'Clean strips.' },
  iron_scrap:   { name: 'Iron Scrap', type: 'material', price: 4, desc: 'Broken mail rings, nails, a buckle.' },
  wight_dust:   { name: 'Wight Dust', type: 'material', price: 15, desc: 'What is left of a barrow-guard. It moves when you are not looking.' },
  hag_hair:     { name: 'Hag Hair', type: 'material', price: 20, desc: 'Coarse, green-black, wet forever.' },
  rat_tail:     { name: 'Knotted Rat-Tails', type: 'material', price: 5, desc: 'From the Wedded Rats. Alchemists pay for these.' },
  // quest
  ledger:       { name: 'The Saltdown Ledger', type: 'quest', desc: 'Deliveries "from the Lanternhold", in an overseer\'s careful hand. Names. Prices.' },
  annet_ribbon: { name: 'Annet\'s Ribbon', type: 'quest', desc: 'A blue ribbon, Isolde\'s gift to her maid.' },
  tithe_chalk:  { name: 'Tithe-Chalk', type: 'quest', desc: 'Blessed chalk used to mark Lamp tithe-doors.' },
  writ:         { name: 'Brannagh\'s Writ', type: 'quest', desc: 'A Lamp writ of inquisition, sealed in white wax.' }
};

TITHE.RECIPES = {
  poultice:     { out: 'poultice', n: 2, needs: { bog_myrtle: 2, linen: 1 }, where: 'apothecary' },
  black_draught:{ out: 'black_draught', n: 1, needs: { ghoul_gristle: 1, bog_myrtle: 2, grave_moss: 1 }, where: 'apothecary' },
  firebomb:     { out: 'firebomb', n: 2, needs: { lamp_oil: 2, saltpeter: 1 }, where: 'apothecary' },
  silver_oil:   { out: 'silver_oil', n: 1, needs: { silver_dust: 1, lamp_oil: 1 }, where: 'apothecary' },
  witch_salt:   { out: 'witch_salt', n: 2, needs: { saltpeter: 1, grave_moss: 1 }, where: 'apothecary' },
  tonic:        { out: 'tonic', n: 1, needs: { bog_myrtle: 2, rat_tail: 1 }, where: 'apothecary' },
  surgeon_kit:  { out: 'surgeon_kit', n: 1, needs: { linen: 2, ghoul_gristle: 1 }, where: 'apothecary' },
  hone:         { upgrade: 'weapon', n: 1, needs: { iron_scrap: 3 }, silver: 20, where: 'smith', name: 'Hone & Rebalance (+1 weapon damage, max +3)' },
  rivet:        { upgrade: 'armor', n: 1, needs: { iron_scrap: 2, wolf_pelt: 2 }, silver: 25, where: 'smith', name: 'Reinforce Armor (+1 armor, max +2)' },
  wyrmplate:    { upgrade: 'armor', n: 1, needs: { wyrm_scale: 2, iron_scrap: 2 }, silver: 60, where: 'smith', name: 'Wyrm-Scale Plates (+1 armor, max +2)' },
  silvering:    { upgrade: 'silver', n: 1, needs: { silver_dust: 4 }, silver: 80, where: 'smith', name: 'Silver-Chase Your Blade (weapon counts as silver)' }
};

/* Skills. kind: passive | active. cost = stamina. branch gating: tier n needs (n-1) skills in branch. */
TITHE.SKILLS = {
  blade: { name: 'Blade', blurb: 'Twenty years of killing for money.', list: [
    { id: 'b1', name: 'Old Soldier\'s Edge', kind: 'passive', desc: '+1 to hit and +1 damage.' },
    { id: 'b2', name: 'Riposte', kind: 'passive', desc: 'While Guarding, strike back at anyone who hits you in melee (60% damage).' },
    { id: 'b3', name: 'Cleave', kind: 'active', cost: 2, desc: 'Hit every foe for 70% damage.' },
    { id: 'b4', name: 'Hamstring', kind: 'active', cost: 2, desc: 'Strike that Weakens the target (−40% damage, 3 turns).' },
    { id: 'b5', name: 'Execute', kind: 'active', cost: 3, desc: 'Against a foe under 35% health: triple damage, cannot miss.' }
  ] },
  survivor: { name: 'Survivor', blurb: 'You did not die. Twice.', list: [
    { id: 's1', name: 'Hard to Kill', kind: 'passive', desc: '+10 maximum HP.' },
    { id: 's2', name: 'Second Wind', kind: 'active', cost: 2, desc: 'Once per fight, heal 30% of max HP.' },
    { id: 's3', name: 'Dirty Fighting', kind: 'active', cost: 1, desc: 'Sand, knee, thumb. Light damage; 60% chance to Stun.' },
    { id: 's4', name: 'Iron Hide', kind: 'passive', desc: '+1 armor; immune to Bleed.' },
    { id: 's5', name: 'Dead Man\'s Stubbornness', kind: 'passive', desc: 'Once per fight, a killing blow leaves you at 1 HP instead.' }
  ] },
  captain: { name: 'Captain', blurb: 'Once, four hundred men did what you said.', list: [
    { id: 'c1', name: 'Rally', kind: 'active', cost: 1, desc: 'Companions deal +3 damage for 3 turns; clears Fear from the party.' },
    { id: 'c2', name: 'Commanding Voice', kind: 'passive', desc: '+2 to Presence checks; +1 to Might checks to intimidate.' },
    { id: 'c3', name: 'Hold the Line', kind: 'passive', desc: 'When you Guard, companions take 40% less damage that turn.' },
    { id: 'c4', name: 'Command', kind: 'active', cost: 2, desc: 'A chosen companion acts twice this round.' },
    { id: 'c5', name: 'Dread Reputation', kind: 'passive', desc: 'Human foes below half health may break and surrender. +2 to intimidate.' }
  ] },
  unreckoned: { name: 'Unreckoned', blurb: 'The stars cannot see you. Something else can.', hidden: 'unreckoned', list: [
    { id: 'u1', name: 'Grave-Sense', kind: 'passive', desc: 'See the next two enemy intentions; +2 Wits checks against the uncanny.' },
    { id: 'u2', name: 'Starless', kind: 'passive', desc: 'Choir-touched foes and starfire miss you far more often. Hollowed hesitate.' },
    { id: 'u3', name: 'The Dead Remember', kind: 'passive', desc: '+50% damage against undead and Under-things.' },
    { id: 'u4', name: 'Unseen Step', kind: 'active', cost: 2, desc: 'Step where nothing is watching. Your next attack is a guaranteed critical.' },
    { id: 'u5', name: 'Uncount', kind: 'active', cost: 3, desc: 'Lay your burned palm on it. Massive damage to Choir-touched and Hollowed foes.', req: 'uncount' }
  ] }
};

/* Wounds */
TITHE.WOUNDS = {
  ribs:      { name: 'Cracked Ribs', mods: { grit: -1 }, desc: 'Every breath is a knife.' },
  arm:       { name: 'Gashed Sword-Arm', mods: { might: -1 }, desc: 'Stitched badly. It pulls.' },
  head:      { name: 'Concussed', mods: { wits: -1 }, desc: 'The world has a ringing edge.' },
  hamstring: { name: 'Torn Hamstring', mods: { finesse: -1 }, desc: 'You limp. Everyone can see it.' },
  face:      { name: 'Ruined Face', mods: { presence: -1 }, desc: 'A fresh cut across the cheek, still weeping.' }
};

/* Companion combat kits */
TITHE.ALLIES = {
  tamsin:   { name: 'Tamsin', hp: 26, hpLvl: 3, dmg: [4, 8], hit: 6, act: 'Looses an arrow', special: { name: 'Pinning Shot', every: 3, effect: 'stun', note: 'pins it in place' } },
  hob:      { name: 'Hob', hp: 18, hpLvl: 2, dmg: [2, 6], hit: 2, act: 'Swings a pitchfork', special: { name: 'Lucky Jab', every: 4, effect: 'bleed', note: 'opens a vein, more by luck than skill' } },
  pell:     { name: 'Pell', hp: 20, hpLvl: 2, dmg: [2, 5], hit: 2, act: 'Clubs with his cudgel', special: { name: 'Litany', every: 0, once: 'heal', amount: 14, note: 'recites the Litany of the Lit Road, and your wounds close a little' } },
  ulla:     { name: 'Ulla', hp: 40, hpLvl: 4, dmg: [6, 11], hit: 5, act: 'Hews with her axe', taunt: true, special: { name: 'Shield-Bash', every: 3, effect: 'stun', note: 'slams her shield into its face' } },
  brannagh: { name: 'Brannagh', hp: 34, hpLvl: 4, dmg: [6, 10], hit: 7, act: 'Cuts with her blade', special: { name: 'Starfire', every: 2, effect: 'starfire', note: 'her blade burns cold blue' } },
  oriel:    { name: 'Oriel', hp: 14, hpLvl: 1, dmg: [0, 0], hit: 0, act: 'whispers what is coming', special: { name: 'Foresight', every: 1, effect: 'foresee', note: 'tells you where it will strike' } },
  mags:     { name: 'Mags', hp: 24, hpLvl: 2, dmg: [3, 7], hit: 3, act: 'Swings a cleaver', special: { name: 'Bottle', every: 3, effect: 'stun', note: 'breaks a bottle over its skull' } },
  rusk:     { name: 'Rusk', hp: 26, hpLvl: 3, dmg: [5, 10], hit: 6, act: 'Shoots Husband', special: { name: 'Bolt to the Knee', every: 3, effect: 'weaken', note: 'puts a bolt through its knee' } }
};

/* Enemies.
   hp, def (to-hit target), arm (flat reduction), dmg [min,max], acc (bonus to hit you), xp, silver [min,max],
   tags: human | beast | undead | under | fey | choir | hollow | boss
   weak: ['fire','silver','starfire',...]  resist: [...]
   moves: [{ n: name, w: weight, m: damage multiplier, heavy, fx: 'bleed'|'stun'|'fear'|'weaken'|'drain'|'burn', aoe, tele: telegraph text, self: 'heal'|'guard'|'summon:id' }]
   loot: [[itemId, chance, count]] */
TITHE.ENEMIES = {
  deserter:     { name: 'Starving Deserter', hp: 14, def: 9, arm: 0, dmg: [2, 5], acc: 1, xp: 15, silver: [0, 3], tags: ['human'],
    moves: [{ n: 'Wild Swing', w: 3, m: 1, tele: 'raises a rusted billhook' }, { n: 'Desperate Lunge', w: 1, m: 1.6, heavy: true, tele: 'braces to lunge, eyes wet' }],
    loot: [['iron_scrap', .5, 1], ['spirits', .2, 1]],
    lore: 'Men who ran from one lord\'s war into another lord\'s winter. Most of them would rather be farming. All of them would rather be eating.' },
  bandit:       { name: 'Kingsroad Bandit', hp: 20, def: 10, arm: 1, dmg: [3, 7], acc: 2, xp: 22, silver: [2, 8], tags: ['human'],
    moves: [{ n: 'Hack', w: 3, m: 1, tele: 'hefts a notched sword' }, { n: 'Overhead Chop', w: 1, m: 1.7, heavy: true, tele: 'lifts the sword high over his head' }, { n: 'Kick', w: 1, m: .5, fx: 'stun', tele: 'shifts his weight to kick' }],
    loot: [['iron_scrap', .5, 1], ['poultice', .2, 1], ['knives', .15, 1]],
    lore: 'The Kingsroad is the King\'s in name only. The gibbets are the King\'s; the road belongs to whoever is hungriest that week.' },
  bandit_archer:{ name: 'Bandit Archer', hp: 15, def: 11, arm: 0, dmg: [3, 6], acc: 3, xp: 22, silver: [1, 6], tags: ['human'],
    moves: [{ n: 'Loose', w: 3, m: 1, tele: 'nocks an arrow' }, { n: 'Aimed Shot', w: 1, m: 1.8, heavy: true, tele: 'draws to the ear and holds, aiming' }],
    loot: [['linen', .4, 1]],
    lore: 'Poachers, mostly. A man who can put an arrow in a deer at sixty yards can put one in you at thirty.' },
  bandit_captain:{ name: 'Bandit Captain', hp: 38, def: 12, arm: 2, dmg: [5, 9], acc: 3, xp: 60, silver: [10, 25], tags: ['human', 'boss'],
    moves: [{ n: 'Cut', w: 3, m: 1, tele: 'circles with a good sword' }, { n: 'Feint and Thrust', w: 2, m: 1.4, tele: 'feints high' }, { n: 'Rallying Roar', w: 1, m: 0, self: 'guard', tele: 'bellows for his men' }],
    loot: [['brigandine', .25, 1], ['poultice', .6, 1]],
    lore: 'Usually a former sergeant. Usually knows it.' },
  wolf:         { name: 'Grey Wolf', hp: 16, def: 11, arm: 0, dmg: [3, 6], acc: 3, xp: 18, silver: [0, 0], tags: ['beast'],
    moves: [{ n: 'Snap', w: 3, m: 1, tele: 'circles, low' }, { n: 'Throat Lunge', w: 1, m: 1.6, heavy: true, fx: 'bleed', tele: 'flattens its ears and crouches' }],
    loot: [['wolf_pelt', .8, 1]],
    lore: 'Hungrier every winter, braver every year. They follow the armies.' },
  dire_wolf:    { name: 'Dire Wolf', hp: 34, def: 11, arm: 1, dmg: [5, 10], acc: 3, xp: 50, silver: [0, 0], tags: ['beast'],
    moves: [{ n: 'Maul', w: 3, m: 1, tele: 'pads in, head low' }, { n: 'Drag Down', w: 1, m: 1.8, heavy: true, fx: 'stun', tele: 'gathers itself, hackles up' }],
    loot: [['wolf_pelt', 1, 2]],
    lore: 'The size of a pony. The fen-folk say they are what wolves become when they eat the drowned.' },
  boar:         { name: 'Thornwood Boar', hp: 30, def: 9, arm: 2, dmg: [5, 9], acc: 2, xp: 40, silver: [0, 0], tags: ['beast'],
    moves: [{ n: 'Gore', w: 2, m: 1, fx: 'bleed', tele: 'paws the ground' }, { n: 'Charge', w: 1, m: 2, heavy: true, tele: 'lowers its tusks and backs up, snorting' }],
    loot: [['wolf_pelt', .3, 1]],
    lore: 'Kills more hunters than wolves do. Tastes better.' },
  ghoul:        { name: 'Ghoul', hp: 18, def: 10, arm: 0, dmg: [3, 7], acc: 2, xp: 25, silver: [0, 2], tags: ['under'], weak: ['fire'],
    moves: [{ n: 'Claw', w: 3, m: 1, fx: 'bleed', tele: 'spreads its long grey fingers' }, { n: 'Pounce', w: 1, m: 1.6, heavy: true, tele: 'drops to all fours, hindquarters twitching' }, { n: 'Feed', w: 1, m: 0, self: 'heal', tele: 'turns toward a corpse, mouth opening' }],
    loot: [['ghoul_gristle', .8, 1], ['grave_moss', .3, 1]],
    lore: 'Long, grey, eyeless, wet. They come where the dead are left unburned and eat them down to the marrow. The Lamp calls them abominations. The fen-folk call them gleaners, and leave them be.' },
  ghoul_brute:  { name: 'Ghoul Matriarch', hp: 55, def: 10, arm: 1, dmg: [5, 10], acc: 3, xp: 90, silver: [0, 0], tags: ['under', 'boss'], weak: ['fire'],
    moves: [{ n: 'Rake', w: 3, m: 1, fx: 'bleed', tele: 'sways, belly swinging' }, { n: 'Crushing Embrace', w: 1, m: 2, heavy: true, tele: 'opens her arms wide, wider than arms go' }, { n: 'Keening', w: 1, m: 0, fx: 'fear', aoe: true, tele: 'lifts her blind face and draws breath' }],
    loot: [['ghoul_gristle', 1, 3], ['grave_moss', 1, 2]],
    lore: 'Bloated, slow, the size of a plough-ox. Mother of a nest. She sings to them, they say. Nobody who has heard her has wanted to describe the tune.' },
  hollowed:     { name: 'Hollowed', hp: 16, def: 8, arm: 0, dmg: [3, 6], acc: 1, xp: 15, silver: [0, 1], tags: ['hollow', 'human'],
    moves: [{ n: 'Silent Flailing', w: 3, m: 1, tele: 'stares through you' }, { n: 'Clutch', w: 1, m: 1.3, heavy: true, fx: 'drain', tele: 'reaches for you with both hands, mouth open, no sound' }],
    loot: [],
    lore: 'Breathing, eating, walking. No speech. No memory. No one home. When frightened they attack without a sound, and they do not stop.' },
  rat_swarm:    { name: 'Rat Swarm', hp: 14, def: 12, arm: 0, dmg: [2, 5], acc: 4, xp: 14, silver: [0, 0], tags: ['beast'], weak: ['fire'],
    moves: [{ n: 'Swarm', w: 3, m: 1, fx: 'bleed', tele: 'pours across the stones' }],
    loot: [['rat_tail', .4, 1]],
    lore: 'The cisterns under Harrowgate are older than the town. So are some of the rats.' },
  rat_king:     { name: 'The Wedded Rats', hp: 70, def: 10, arm: 1, dmg: [5, 9], acc: 4, xp: 140, silver: [0, 0], tags: ['beast', 'boss'], weak: ['fire'],
    moves: [{ n: 'Gnawing Tide', w: 3, m: 1, fx: 'bleed', aoe: true, tele: 'a hundred heads turn toward you at once' }, { n: 'Crush', w: 1, m: 1.9, heavy: true, tele: 'the whole knotted mass heaves itself up like a wave' }, { n: 'Shed Swarm', w: 1, m: 0, self: 'summon:rat_swarm', tele: 'begins to shudder and tear at its own edges' }],
    loot: [['rat_tail', 1, 4]],
    lore: 'Hundreds of rats knotted together at the tail by filth, blood and time into one body with one hunger. It thinks. It remembers. It was fattened on whatever has been thrown into the cisterns, and something has been throwing in a great deal.' },
  lantern_man:  { name: 'Lantern Man', hp: 26, def: 13, arm: 0, dmg: [4, 8], acc: 4, xp: 55, silver: [0, 0], tags: ['fey'], weak: ['silver', 'witchsalt'], resist: ['fire'],
    moves: [{ n: 'Cold Touch', w: 2, m: 1, fx: 'drain', tele: 'flickers closer, gently' }, { n: 'Drowning Light', w: 1, m: 1.7, heavy: true, fx: 'stun', tele: 'brightens until you cannot look away' }, { n: 'Beckon', w: 1, m: 0, fx: 'fear', tele: 'takes the shape of someone you lost' }],
    loot: [['hag_hair', .2, 1]],
    lore: 'A light out on the fen where no one is carrying one. It looks like a lantern. It is a hole in the world shaped like a man holding a lantern. It wants you to follow.' },
  drowned:      { name: 'Drowned', hp: 24, def: 9, arm: 1, dmg: [4, 8], acc: 2, xp: 32, silver: [0, 3], tags: ['undead', 'under'], weak: ['fire', 'witchsalt'],
    moves: [{ n: 'Grasp', w: 3, m: 1, tele: 'slops forward, dripping peat' }, { n: 'Drag Under', w: 1, m: 1.6, heavy: true, fx: 'stun', tele: 'sinks to its knees in the bog and reaches for your ankles' }],
    loot: [['bog_myrtle', .6, 2], ['iron_scrap', .3, 1]],
    lore: 'Bog-bodies, leather-brown, perfectly kept, the noose still around their necks. Mother Gall calls them her sleepers. Sometimes they wake.' },
  bog_hag:      { name: 'Bog Hag', hp: 60, def: 12, arm: 1, dmg: [6, 11], acc: 4, xp: 130, silver: [5, 20], tags: ['under', 'fey', 'boss'], weak: ['fire', 'witchsalt'],
    moves: [{ n: 'Talons', w: 3, m: 1, fx: 'bleed', tele: 'drags her talons through the water' }, { n: 'Hag\'s Curse', w: 1, m: .6, fx: 'weaken', tele: 'spits into her palm and whispers your name into it' }, { n: 'Drown', w: 1, m: 2, heavy: true, tele: 'rises out of the water, jaws unhinging' }],
    loot: [['hag_hair', 1, 2], ['black_draught', .5, 1]],
    lore: 'Gall\'s sisters, or her daughters, or what Gall will be. They eat travellers and keep the bones in tidy piles by kind.' },
  sorrowhound:  { name: 'The Sorrowhound', hp: 58, def: 12, arm: 1, dmg: [6, 11], acc: 4, xp: 130, silver: [0, 0], tags: ['beast', 'under', 'boss'], weak: ['silver'],
    moves: [{ n: 'Rending Bite', w: 3, m: 1, fx: 'bleed', tele: 'circles, weeping' }, { n: 'Grief-Howl', w: 1, m: 0, fx: 'fear', aoe: true, tele: 'throws back its head; the sound is almost words' }, { n: 'Savage Leap', w: 1, m: 2, heavy: true, tele: 'backs away, coiling' }],
    loot: [['wolf_pelt', 1, 2]],
    lore: 'A wolf-shaped man, or a man-shaped wolf. It cries real tears. The woodsmen leave it be because it never kills children.' },
  troll:        { name: 'Bridge Troll', hp: 80, def: 8, arm: 3, dmg: [7, 13], acc: 2, xp: 150, silver: [20, 40], tags: ['under', 'boss'], weak: ['fire'],
    moves: [{ n: 'Club', w: 3, m: 1, tele: 'swings a tree-trunk idly' }, { n: 'Stone Fist', w: 1, m: 2, heavy: true, fx: 'stun', tele: 'raises both fists, grinning' }, { n: 'Regrow', w: 1, m: 0, self: 'heal', tele: 'pauses to scratch, wounds knitting' }],
    loot: [['iron_scrap', 1, 3]],
    lore: 'Old as the bridge, which is old as the road, which is older than the kingdom. Fond of riddles. Fonder of goats. Fonder still of people.' },
  salt_wyrm:    { name: 'The Salt Wyrm', hp: 120, def: 11, arm: 3, dmg: [8, 14], acc: 4, xp: 260, silver: [0, 0], tags: ['beast', 'boss'], weak: ['fire'],
    moves: [{ n: 'Bite', w: 3, m: 1, fx: 'bleed', tele: 'its blind head sways, tasting the air' }, { n: 'Coil Crush', w: 1, m: 2.1, heavy: true, tele: 'the salt walls shift as its body draws around you' }, { n: 'Brine Spit', w: 1, m: .7, aoe: true, fx: 'burn', tele: 'its throat swells' }],
    loot: [['wyrm_scale', 1, 4], ['silver_dust', 1, 3]],
    lore: 'Blind, white, wingless, longer than a church. It has lived in the deep salt since before there were miners. It ate them rarely, until the new miners came: the ones who do not run.' },
  wight:        { name: 'Barrow Wight', hp: 30, def: 12, arm: 3, dmg: [5, 9], acc: 3, xp: 55, silver: [3, 12], tags: ['undead'], weak: ['silver', 'starfire'], resist: ['blunt'],
    moves: [{ n: 'Bronze Blade', w: 3, m: 1, tele: 'lifts a leaf-shaped sword' }, { n: 'Grave Chill', w: 1, m: .8, fx: 'drain', tele: 'breathes out frost' }, { n: 'Oath-Strike', w: 1, m: 1.8, heavy: true, tele: 'raises its blade in salute' }],
    loot: [['wight_dust', .7, 1], ['grave_moss', .6, 2]],
    lore: 'The sworn retainers of the First Kings, still keeping their oaths a thousand years on. Their eyes are pits of cold light. They salute before they kill you.' },
  hollin:       { name: 'Barrow-King Hollin', hp: 130, def: 12, arm: 3, dmg: [8, 13], acc: 4, xp: 300, silver: [0, 0], tags: ['undead', 'under', 'boss'], weak: ['silver', 'starfire'],
    moves: [{ n: 'Crown-Blade', w: 3, m: 1, tele: 'grinds his bronze sword along the floor' }, { n: 'The Weight of the Earth', w: 1, m: 1.9, heavy: true, fx: 'stun', tele: 'presses his palm to the floor; the barrow groans' }, { n: 'Call the Retinue', w: 1, m: 0, self: 'summon:wight', tele: 'calls a name no one has spoken in a thousand years' }],
    loot: [['wight_dust', 1, 3]],
    lore: 'A First King, who lay down alive so his tomb would be a lock. A thousand years holding something down in the dark. It is not surprising he is mad. It is surprising he can still speak.' },
  man_at_arms:  { name: 'Harrowgate Man-at-Arms', hp: 26, def: 12, arm: 2, dmg: [4, 8], acc: 3, xp: 35, silver: [3, 10], tags: ['human'],
    moves: [{ n: 'Spear Thrust', w: 3, m: 1, tele: 'levels his spear' }, { n: 'Shield Rush', w: 1, m: 1.2, fx: 'stun', tele: 'drops his shoulder behind his shield' }, { n: 'Two-Hand Drive', w: 1, m: 1.7, heavy: true, tele: 'sets his feet and draws the spear back' }],
    loot: [['iron_scrap', .6, 1], ['poultice', .25, 1]],
    lore: 'Varane livery, Hask\'s orders. Decent men, mostly, which has never once stopped a soldier from doing what he is told.' },
  crossbowman:  { name: 'Crossbowman', hp: 20, def: 11, arm: 1, dmg: [5, 9], acc: 4, xp: 32, silver: [2, 8], tags: ['human'],
    moves: [{ n: 'Bolt', w: 2, m: 1, tele: 'levels his crossbow' }, { n: 'Reload', w: 1, m: 0, self: 'guard', tele: 'cranks the windlass' }, { n: 'Point-Blank', w: 1, m: 1.8, heavy: true, tele: 'steadies the bow on a merlon, sighting' }],
    loot: [['iron_scrap', .4, 1]],
    lore: 'A crossbow takes a week to learn and a moment to make a widow.' },
  zealot:       { name: 'Lampwarden Zealot', hp: 32, def: 13, arm: 3, dmg: [5, 9], acc: 4, xp: 55, silver: [5, 12], tags: ['human', 'choir'],
    moves: [{ n: 'Holy Cut', w: 3, m: 1, tele: 'raises a white-enamelled blade' }, { n: 'Starfire Blade', w: 1, m: 1.7, heavy: true, fx: 'burn', starfire: true, tele: 'his blade begins to burn with cold blue light' }, { n: 'Litany of Wrath', w: 1, m: 0, self: 'guard', tele: 'begins to chant' }],
    loot: [['lamp_oil', .6, 1], ['poultice', .3, 1]],
    lore: 'The Lamp\'s sword-hand. Trained from childhood, sworn to celibacy, poverty and fire. Their starfire burns the undead, and heretics, and anything else they point it at.' },
  cultist:      { name: 'Tithe-Acolyte', hp: 18, def: 10, arm: 1, dmg: [3, 7], acc: 2, xp: 25, silver: [2, 6], tags: ['human', 'choir'],
    moves: [{ n: 'Censer Swing', w: 3, m: 1, fx: 'burn', tele: 'swings a smoking censer' }, { n: 'Hymn', w: 1, m: 0, fx: 'fear', tele: 'sings a note too pure for a human throat' }],
    loot: [['lamp_oil', .7, 1], ['tithe_chalk', .2, 1]],
    lore: 'The Abbess\'s own: orphans she raised, who love her.' },
  sleeper:      { name: 'Gall\'s Sleeper', hp: 28, def: 9, arm: 2, dmg: [5, 9], acc: 2, xp: 40, silver: [0, 2], tags: ['undead', 'under'], weak: ['fire', 'witchsalt'],
    moves: [{ n: 'Peat-Fist', w: 3, m: 1, tele: 'turns its leather face toward you' }, { n: 'Drag Down', w: 1, m: 1.7, heavy: true, fx: 'stun', tele: 'sinks into the mud, arms out' }],
    loot: [['bog_myrtle', .5, 1]],
    lore: 'The oldest of the bog-dead. They have been waiting a thousand years for someone to bury.' },
  hask:         { name: 'Ser Konrad Hask', hp: 110, def: 14, arm: 3, dmg: [7, 12], acc: 5, xp: 320, silver: [40, 60], tags: ['human', 'boss'],
    moves: [{ n: 'Corvane Cut', w: 3, m: 1, tele: 'smiles and comes in light on his feet' }, { n: 'Red Company Feint', w: 2, m: 1.3, fx: 'bleed', tele: 'drops his guard. He taught you this one. It\'s a lie' }, { n: 'Kingsmercy', w: 1, m: 2.1, heavy: true, tele: 'takes a two-hand grip and breathes out slowly' }, { n: 'Talk', w: 1, m: 0, self: 'guard', tele: 'steps back and starts talking about the old days' }],
    loot: [['hask_blade', 1, 1]],
    lore: 'He trained you. He sold you. He is the best swordsman in the March and he has never once fought fair.' },
  lantern_saint:{ name: 'The Lantern Saint', hp: 160, def: 12, arm: 2, dmg: [8, 14], acc: 5, xp: 450, silver: [0, 0], tags: ['choir', 'boss'], resist: ['starfire', 'fire'],
    moves: [{ n: 'Choir-Note', w: 3, m: 1, fx: 'fear', tele: 'the faces inside the light begin to sing one note' }, { n: 'Harvest', w: 1, m: 1.8, heavy: true, fx: 'drain', starfire: true, tele: 'reaches toward the children with a hand made of other hands' }, { n: 'Light Without Mercy', w: 1, m: .8, aoe: true, fx: 'burn', starfire: true, tele: 'brightens until the crypt has no shadows' }],
    loot: [],
    lore: 'A sliver of the Choir called down into the crypt by the Small Tithe: a column of white singing light full of faces. Some of them are faces you know.' },
  gideon:       { name: 'Ser Gideon Vail', hp: 70, def: 14, arm: 3, dmg: [5, 9], acc: 5, xp: 150, silver: [0, 0], tags: ['human', 'boss'], nonlethal: true,
    moves: [{ n: 'Clean Cut', w: 3, m: 1, tele: 'salutes, and comes on' }, { n: 'Bind and Strike', w: 1, m: 1.6, heavy: true, tele: 'binds your blade with his and steps in' }, { n: 'Measure', w: 1, m: 0, self: 'guard', tele: 'circles, reading you' }],
    loot: [],
    lore: 'The Prince\'s champion. He fights the way good men pray.' },
  brannagh_foe: { name: 'Lampwarden Brannagh', hp: 60, def: 14, arm: 3, dmg: [5, 9], acc: 5, xp: 120, silver: [0, 0], tags: ['human', 'boss'], nonlethal: true,
    moves: [{ n: 'Practice Cut', w: 3, m: 1, tele: 'turns her wooden blade in her hand' }, { n: 'Pommel to the Mouth', w: 1, m: 1.3, fx: 'stun', tele: 'steps inside your guard' }, { n: 'Full Force', w: 1, m: 1.7, heavy: true, tele: 'stops smiling' }],
    loot: [],
    lore: 'Twenty years of drill and one night of not sleeping.' }
};

/* Regions for the Wilds (between episodes). unlock: expression. */
TITHE.REGIONS = {
  kingsroad: { name: 'The Kingsroad', unlock: 'true', desc: 'Mud, gibbets, burned farms, and men who used to be soldiers.',
    foes: [['bandit', 'bandit'], ['bandit', 'bandit_archer'], ['wolf', 'wolf'], ['ghoul', 'ghoul'], ['deserter', 'deserter', 'deserter'], ['bandit_captain', 'bandit', 'bandit_archer']],
    forage: ['bog_myrtle', 'linen', 'iron_scrap', 'saltpeter'] },
  thornwood: { name: 'The Thornwood', unlock: 'ep>=2', desc: 'Old oak and blackthorn, boar trails, and the bandit queen\'s tolls.',
    foes: [['boar'], ['wolf', 'wolf', 'wolf'], ['bandit', 'bandit_archer', 'bandit_archer'], ['dire_wolf'], ['dire_wolf', 'wolf']],
    forage: ['wolf_pelt', 'bog_myrtle', 'saltpeter', 'grave_moss'] },
  fen:       { name: 'Gallowmere Fen', unlock: 'ep>=3', desc: 'Black water, reed islands, eel-weirs and lights that should not be there.',
    foes: [['drowned', 'drowned'], ['lantern_man'], ['dire_wolf'], ['drowned', 'lantern_man'], ['bog_hag']],
    forage: ['bog_myrtle', 'bog_myrtle', 'hag_hair', 'grave_moss'] },
  saltdown:  { name: 'Saltdown Hills', unlock: 'ep>=4', desc: 'Chalk downs pocked with mine-mouths. Abandoned galleries go a long way down.',
    foes: [['hollowed', 'hollowed', 'hollowed'], ['rat_swarm', 'rat_swarm'], ['bandit', 'crossbowman', 'bandit'], ['dire_wolf', 'wolf']],
    forage: ['silver_dust', 'saltpeter', 'iron_scrap', 'silver_dust'] },
  barrows:   { name: 'The Barrowfields', unlock: 'ep>=6', desc: 'Grass-crowned graves of the First Kings, and the crows that know them.',
    foes: [['wight', 'wight'], ['ghoul', 'ghoul', 'ghoul'], ['wight', 'ghoul'], ['ghoul_brute', 'ghoul']],
    forage: ['grave_moss', 'grave_moss', 'wight_dust', 'iron_scrap'] }
};

/* Small authored vignettes for the Wilds. text with optional fx. */
TITHE.WILD_EVENTS = [
  { if: 'true', t: 'A gibbet creaks at a crossroads. The man in it has been there long enough that the crows have lost interest. Someone has tucked a sprig of bog myrtle into his rags, which is either mercy or a joke.', fx: { give: { bog_myrtle: 1 } } },
  { if: 'true', t: 'An abandoned camp: cold ashes, a torn tent, a child\'s wooden horse. Nothing else. You don\'t look for long.', fx: { give: { linen: 2 } } },
  { if: 'true', t: 'A peddler with a handcart full of saints\' bones offers you a deal on a toe. You decline. He throws in a twist of saltpeter for free, "for the conversation."', fx: { give: { saltpeter: 2 } } },
  { if: 'ep>=3', t: 'Out on the fen, a light. You stand still until it goes away. It takes a long time.', fx: {} },
  { if: 'ep>=2', t: 'A woodcutter\'s wife sells you bread and won\'t take your money. "My man came back from Corran\'s Ford," she says. "Most didn\'t." She doesn\'t ask which side you were on.', fx: { heal: 8 } },
  { if: 'true', t: 'You sleep under a hedge. You wake with the stars still out and the certain feeling that something up there turned to look. You don\'t sleep again.', fx: { st: -1 } },
  { if: 'ep>=4', t: 'A miner\'s widow at a shrine, praying to a saint you\'ve never heard of. She asks if you\'ve seen her husband. She describes him for a long time. You haven\'t.', fx: {} },
  { if: 'ep>=6', t: 'On the downs, a barrow with its door stone rolled back. Inside, a smell like turned earth and old honey, and a coin on the threshold. You take the coin. Something inside exhales.', fx: { silver: 12 } }
];

/* Codex entries (lore), unlocked with fx.know.codex */
TITHE.CODEX = {
  lamp:      { title: 'The Lamp', text: 'The church of Aldermere. The stars are the Saints who ascended; the dead rise to sing among them in eternal light. Lamplighters tend the faith; Lampwardens enforce it. Every soul owes the Lamp a tithe of silver, and every body owes it a pyre.' },
  kindling:  { title: 'The Kindling', text: 'The Lamp\'s funeral: the body is burned on a pyre so the smoke may carry the soul up to the Saints. Without the Kindling, the Lamp teaches, the soul is lost in the dark.' },
  earthburial:{ title: 'Earth-Burial', text: 'The oldest heresy in Aldermere: putting the dead in the ground. Punishable by burning. The fen-folk still do it, quietly, and leave a bowl of milk by the water.' },
  corransford:{ title: 'Corran\'s Ford', text: 'A river crossing two days east. Six years ago, the Red Company, four hundred spears, was destroyed there in a crossfire. There is an old standing stone on the near bank, carved with a seven-pointed star, older than the kingdom.' },
  redcompany: { title: 'The Red Company', text: 'A free company of four hundred spears, the best in the March. Captain: Konrad Hask. Sergeant: Ansel Dray. Destroyed at Corran\'s Ford. The survivors could be counted on one hand. The roll is in your saddlebag.' },
  hollowing: { title: 'The Hollowing', text: 'People found alive, breathing, walking, eating — and empty. No speech, no memory, no self. Harrowgate calls it a sickness. It does not spread like one.' },
  tallyman:  { title: 'The Grey Man', text: 'A tall man in a rain-dark coat with a ledger, glimpsed where people are about to die. The dying describe him. No one else does.' },
  starless:  { title: 'The Starless One', text: 'A Lamp prophecy from the Book of Embers: "And in the last days there shall walk one whom Heaven cannot number; and the Lamp shall gutter at his passing." Most Lamplighters think it is a metaphor.' },
  barrows:   { title: 'The Barrows', text: 'The grass-crowned graves of the First Kings, who ruled before the Lamp. Nobody opens them. Grave-robbers who do are found in the morning sitting very still.' },
  compact:   { title: 'The Carvings', text: 'In the Barrow of the Nine Crowns: kings kneeling before seven-pointed stars. The stars have mouths. Beneath the kings, under the floor of the carving, something vast, curled, sleeping, chained.' },
  smalltithe:{ title: 'The Small Tithe', text: 'A rite performed in the crypt of the Lanternhold. The soul is drawn up out of a living body through the mouth, as light. What remains walks, eats and works. The Abbess keeps very careful books.' },
  unreckoned:{ title: 'Unreckoned', text: 'The Tallyman looked for you in his ledger and could not find you. Every soul is written down. Every soul but one.' },
  mothers:   { title: 'The Deep Mothers', text: 'The fen-witches pray to "the Mothers below." You assumed it was a figure of speech. In the bog, in the dark, something very large turned over in its sleep, and said a word.' }
};

/* Shops. stock: item ids. */
TITHE.SHOPS = {
  market:     { name: 'The Market Stair', who: 'tibb', stock: ['poultice', 'spirits', 'knives', 'linen', 'lamp_oil', 'bog_myrtle', 'saltpeter', 'hand_axe'] },
  smith:      { name: 'Gerta\'s Forge', who: 'gerta', stock: ['arming_sword', 'mace', 'war_axe', 'silver_sword', 'brigandine', 'mail', 'iron_scrap'] },
  apothecary: { name: 'Wyck\'s Apothecary', who: 'silas', stock: ['poultice', 'black_draught', 'firebomb', 'silver_oil', 'witch_salt', 'tonic', 'surgeon_kit', 'saint_knuckle'] }
};
