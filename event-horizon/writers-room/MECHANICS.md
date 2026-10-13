# Mechanics & Engine Spec (SEALED)

The engine (`game/src/engine.js`) implements exactly this document. Episodes are authored as data in `game/episodes/sXXeYY.js`. Change the rules here first, then in the engine.

---

## 1. Three dice, one diceless economy

| Domain | System | When |
|---|---|---|
| Physical action, fights, chases, stunts | **d10 dice pool** | Anything where the body decides it |
| Social and emotional scenes | **2d6 moves** (PbtA) | Talking, lying, comforting, flirting, confronting |
| Knowledge, investigation, school | **d20 checks** | Exams, research, clue-reading, hacking, medicine |
| Powers | **Diceless resource spending** | Stamina / Focus / Nerve pools spent to modify or override rolls |

### 1a. d10 Pool
- **Dice** = Attribute + Skill + modifiers (powers, gear, help). Minimum 1 die.
- Each die showing **7–9 = 1 success, 10 = 2 successes**.
- **Difficulty** = successes needed: 1 Easy · 2 Standard · 3 Hard · 4 Heroic · 5 Legendary.
- **Outcome tiers:**
  - successes ≥ diff + 2 → **Critical**
  - successes ≥ diff → **Success**
  - successes = diff − 1 and > 0 → **Partial** (success at a cost)
  - otherwise → **Fail**
  - zero successes plus any 1s → **Botch**: fail plus a complication. The author may route `botch` separately; if not, it goes to `fail` with a stated complication.
- **Sleep Debt penalty:** −1 die per full 3 points of Sleep Debt.
- **Injury penalty:** each active injury carries a penalty (−1 or −2 dice) to pools using the attributes in its `affects` list (all physical pools if no list). `heal` counts down by 1 at the start of each episode, and the injury is removed at 0.

### 1b. 2d6 Move
- Roll **2d6 + Attribute modifier + Skill bonus**.
  - Attribute modifier: rating 1 → −1, 2 → 0, 3 → +1, 4 → +2, 5 → +3.
  - Skill bonus: +1 if skill ≥ 2, +2 if skill ≥ 4.
- **10+ Strong hit · 7–9 Weak hit · ≤6 Miss.**
- Sleep Debt: −1 per full 4 points.
- Named moves (always shown on the check):
  - **Open Up** (Heart + Empathy): be honest about how you feel.
  - **Read the Room** (Wits + Empathy): learn what someone really wants.
  - **Sweet-Talk** (Charm + Banter): charm, flirt, defuse.
  - **Talk Them Down** (Charm/Heart + Persuade): de-escalate.
  - **Lean On** (Nerve + Intimidate): threaten.
  - **Cover Story** (Charm/Wits + Lie): lie. Every Cover Story adds Heat to the person you lie to: +1 on a strong hit, +2 on a weak hit, +3 and possible discovery on a miss.
  - **Hold the Line** (Nerve + Persuade): stand firm against pressure.

### 1c. d20 Check
- **d20 + Attribute + Skill vs DC**: 10 Easy · 15 Standard · 20 Hard · 25 Brutal.
- A natural 20 always succeeds (crit), and a natural 1 always fails (fumble).
- Sleep Debt: −1 per full 2 points.

### 1d. Pushing (diceless)
Before rolling, the player may spend resources:
- **Push** (any check): spend 1 **Nerve** to add +1 die (pool), +1 (move), or +2 (d20).
- **Burst** (Slip power, physical pools with `power:true`): spend 1 **Stamina** to add +2 dice.
- **Slip** (story-gated, offered as a special choice rather than a modifier): spend 2 **Focus** for an automatic narrative success on options marked `slip:true`. Adds Drift.

- **Dig Deep** (any Body or Reflex pool): spend 1 **Stamina** to reroll every die showing 1, once, before the result is read.
- **Concentrate** (any d20 check): spend 1 **Focus** for +2.

After rolling, the player may spend:
- **Rewind** (power node `rewind`): after a failed or partial **pool**, spend 3 Focus and gain 2 Drift to reroll the whole pool. The screen visibly runs backward. Usable once per check. *In the pilot, Rewind fires once involuntarily during the Event (`forceRewind`). It triggers on any non-clean result (including after a Jules nudge), costs no Focus, adds +2 Drift and +1 hidden `revenant_drift`, and rerolls with **+2 dice**.*

### 1f. Failing forward and lies
- A failed, missed, botched or fumbled roll that used a skill grants **+1 XP** (at most 2 per episode).
- A check with `liesTo: [ids]` automatically adds Cover Story Heat to each listed watcher (+1 strong, +2 weak, +3 miss). Authors who handle Heat manually must not also set `liesTo`.
- **Named move variants** with off-sheet skills are allowed and shown on the check: *Bluff* (a party-game lie, no Heat), *Work the Door* (Charm + Hustle, tips), *Read the Street* (Wits + Streetwise).

### 1e. Diegetic dice (the strangeness)
- **Jules's Nudge (hidden in Season 1):** if a pool or move check lists `near:['jules']` and the result is Fail or Partial, the engine rolls against `hidden.jules_luck` (default 35%) plus 1% per point of Jules's (Affection + Trust) toward Sam. On a hit, the lowest non-success die (pool) or lowest die (move) turns to **10 / 6**, drawn in **gold with a flicker**. The tooltip shows only "?". This increments `hidden.nudges` and logs it. Jules does not know she's doing it, and neither does Sam. The writers use the nudge count as a clue meter: Sam may "notice" in later episodes once `nudges ≥ 3`.
- **Rewind** (above) is visible time reversal.
- **Later seasons:** Jules gains a player-facing **Nudge** (Season 2+), Sam gains **Echo** (rolling twice and choosing), and the Audience may roll back at the player. Leave room for these.

## 2. Character Sheet

### Attributes (1–5)
**Body** (strength, endurance; sets max Stamina) · **Reflex** (speed, coordination) · **Wits** (thinking, noticing; sets max Focus) · **Heart** (empathy, resilience, love) · **Nerve** (guts, composure; sets max Nerve) · **Charm** (presence, humor, persuasion).

**Pool maxima:** Stamina = Body×2 + 2 · Focus = Wits×2 + 2 · Nerve = Nerve×2 + 2. Pools refill on sleep (full night ≥ 7 h refills Stamina and Focus; Nerve refills 2 per good night and fully at episode start).

### Skills (0–5)
| Physical | Mental | Social | Life |
|---|---|---|---|
| Athletics | Study | Banter | Cook |
| Brawl | Investigate | Persuade | Hustle (money, work) |
| Parkour | Tech | Lie | Streetwise |
| Ride (bikes, driving) | Medicine | Empathy | Perform |
| Stealth | | Intimidate | |

That's 18 skills.

### Advancement (use-based plus XP)
- Using a skill in any check **marks** it.
- At episode end, XP is awarded (base 3, plus bonuses the author sets for milestones).
- **Raise a marked skill:** cost = new rating × 2 XP. Marks clear after an advancement screen.
- **Raise an attribute:** cost = new rating × 5 XP. Allowed only at season breaks or story gates.
- **Power nodes:** bought with XP once story-unlocked (see §3).

### Sam's starting sheet (before origin choice)
Body 2 · Reflex 3 · Wits 2 · Heart 3 · Nerve 2 · Charm 3.
Skills: Athletics 1 · Brawl 1 · Ride 2 · Banter 2 · Cook 1 · Hustle 1 · Streetwise 2 · Empathy 1.
**Origin choice (pilot cold open):** +1 attribute and +1 skill:
- `origin_shortstop`: Reflex +1, Athletics +1 (Neumann-Goretti shortstop)
- `origin_line`: Body +1, Cook +1 (the line at Dolores' Luncheonette)
- `origin_talker`: Charm +1, Persuade +1 (talked his way out of everything)
- `origin_reader`: Wits +1, Study +1 (secretly read everything)
- `origin_fighter`: Nerve +1, Brawl +1 (stepped into every fight)
- `origin_caretaker`: Heart +1, Medicine +1 (took care of Nonna after her fall)

## 3. Powers

### Sam: THE SLIP (time masquerading as speed)
Mastery (0–100) grows with use. Nodes unlock by story gate, then cost XP.

| Node | Gate | XP | Effect | Cost per use |
|---|---|---|---|---|
| **Burst** | Pilot (after the Event) | 0 | +2 dice to a physical pool | 1 Stamina |
| **Slip** | Pilot (after the Event) | 0 | Auto-success on `slip:true` options | 2 Focus, +1 Drift |
| **Rewind** | Pilot, involuntary; voluntary from Season 1 Episode 4 | 6 | Reroll a failed or partial pool | 3 Focus, +2 Drift |
| **Afterimage** | Season 1 Episode 6 | 8 | +2 to Stealth and Lie when fleeing | 1 Focus |
| **Freeze** | Season 2 | 12 | Stop a moment for others (narrative) | 4 Focus, +3 Drift |
| **Echo** | Season 3 | 15 | Roll twice and keep either result | 3 Focus, +2 Drift |
| **Traverse / Anchor** | Season 7+ | — | Time travel, then fixed points | — |

**Drift (0–10):** temporal strain. It falls by 1 per full night's sleep and by 2 per quiet episode. Thresholds:
- **3+:** déjà vu (narration glitches, repeated lines)
- **5+:** nosebleeds, −1 die to Wits pools
- **7+:** lost minutes (engine skips forward)
- **9+:** Sam is briefly seen in two places, and the next Slip risks a full **Unstick** (a story event)
  - The Unstick also triggers when hidden `revenant_drift` is 10 or more (E7 onward). This is the Revenant's pull, not Sam's drift. Guilt counts: in E8, choices that leave someone to die add revenant_drift as well.

Every Drift point Sam takes **also** feeds hidden `revenant_drift` (+0.5 per point, +1 for each forced rewind), and authored choices add more when Sam "fixes" something other people had chosen. *Engine status: thresholds 3+ (visual glitch) and 5+ (−1 die on Wits pools) are implemented. 7+ and 9+ are story events the writers trigger by hand until Season 2.*

### Jules: probability (hidden in Season 1)
- `hidden.jules_luck`: starts at 0.35 and grows with the bond Affection and Trust she has toward Sam (the Audience likes the pairing).
- In Jules-POV episodes she has her own sheet: Body 2 · Reflex 3 · Wits 4 · Heart 2 · Nerve 3 · Charm 4. Powers: **Luck** (passive rerolls of 1s), **Nudge** (Season 2+), **Jinx**, **Branch**, **Fate**. Backlash meter: **Debt** (0–10). Bad luck comes back around.
- **POV engine (from E6):** an episode with `pov:'jules'` calls `EH.povEnter` at start. It parks Sam's sheet (attrs, skills, pools, injuries, drift, sleepDebt, marked, bonds) in `S.samSheet` and loads `S.julesSheet` (default `EH.JULES_SHEET`) and `S.julesBonds`. The Jules↔Sam bond (`bonds.jules`) carries both ways.
- **Season 1 Luck in POV:** every unclean roll is nudged clean, shown with a gold die. Each save adds +1 to `hidden.jules_debt`, capped at 10. POV nudges don't count toward Sam's `hidden.nudges`.
- **Ending a POV episode:** `EH.povExit` runs after `onEnd` and restores Sam's sheet. Episode XP goes to Sam.

## 4. Life Sim

- **Clock:** each scene may set `clock: {day, date, time}`. The HUD shows it.
- **Time slots:** free-time **hubs** offer activities, and each costs 1–2 slots. You can't do everything. Unchosen activities are logged as `skipped_*` flags for later callbacks ("you didn't come to the floor meeting").
- **Sleep:** `sleep(hours)` adds (7 − hours) to Sleep Debt below 7 hours, and subtracts (hours − 6) at 7 or more (a 7-hour night pays off 1, 8 hours pays off 2). *(Changed after E1: the old formula never let debt recover.)* `nap(hours)` subtracts ceil(hours/2) and restores Stamina and Focus by `hours`. Debt runs 0–10 and penalizes all rolls (see §1). At Debt 6+, the next episode starts with 1 less Nerve. The HUD shows "Tired −N".
- **Money:** cash and bank. Ciro's pays $14/hr plus tips (tips are a Hustle or Banter check). Costs: phone bill, books, food, gear, Nonna's birthday, costume (later).
- **Grades:** courses carry a standing (0–100) built from attendance, assignments, and exams (d20). GPA is computed at midterms and finals. Sam's Season 1 courses are **ENG 0802 Analytical Reading & Writing**, **MATH 1041 Calculus I**, **PSY 1001 Intro to Psychology**, and **GU 1003 Philadelphia Neighborhoods** (the professor is Dr. Alan Weisz, a geographer who is secretly ES-50 and can see seams).
- **Heat (0–10 per watcher):** suspicion of the secret. Watchers: everyone in the bond list plus `press`, `police`, and the hidden `halcyon`. At 10, that person learns the secret (a story event the writers must honor) unless the episode handles it first. The engine sets flag `heat_max_<id>` the moment it happens. Halcyon's suspicion lives only in `hidden.halcyon_heat`. Lies (Cover Story) and close calls raise Heat. Distance and good alibis lower it.

## 5. Bonds (multi-axis)
Each major character has **Trust**, **Affection**, **Respect** (each −10 to +10) and **Tension** (0–10). Tension means unresolved friction. Romantic and sexual tension use the same axis, and the writers read the context: with Jules in Season 1, Tension *is* the romance.
- The HUD shows only characters Sam has met (`met:true`).
- Scenes check specific axes: `g.b('jules').affection >= 3`.
- **Jules, Season 1:** after the minifridge she sits at about Trust 0, Affection −1/0, Respect 0/+1, Tension 1 (0 if you walked). Failure outcomes cost Respect, not Tension; Tension is attraction-adjacent friction and should end the pilot around 4–6. The canonical dislike for about three episodes is enforced by authoring, not by locking stats. Stats determine *how* the fall happens and how fast she admits it.

## 6. The Ledger (continuity backbone)
The engine records:
- **`log`:** every choice taken, as `{ep, scene, choice text, t}`.
- **`rolls`:** every roll, as `{ep, label, kind, dice, result, pushes, nudged, rewound}`.
- **`facts`:** a knowledge graph. `know(id, [who...], text)` adds people to a fact's `knownBy` list. **Writers must never let a character reference a fact they're not on.** "sam" is always implicit for facts Sam witnessed.
- **`flags`:** booleans and values for branching.
- **`recap`:** one-line "Previously on" candidates, written by the author at key beats with `g.recap("...")`. The next episode's "Previously on" pulls the last 4–6 relevant ones.
- **`hidden`:** stats the player never sees: `revenant_drift`, `jules_luck`, `nudges`, `halcyon_heat`, and per-arc secrets.
- **`eps`:** a per-episode summary, written at episode end: stat deltas, choices, and outcomes.

- **`lastRoll`:** the most recent roll result, readable in the next scene as `g.last`. Prefer setting a flag in the choice's `fx(g, tier, res)` for anything that matters later.
- **`pending`:** a roll made but not yet resolved (protects against reloading to reroll).

The save syncs to the artifact database (`playthrough/state`, plus one `playthrough/ep_<id>` doc per finished episode) and to localStorage. Writers read it with `ArtifactData`.

## 7. Episode Authoring Format

```js
EH.episode({
  id: 's01e01', season: 1, number: 1, title: 'Pilot', runtime: 'premiere',
  look: 's1',                        // theme
  cast: ['sam','jules',...],         // main-title credits
  start: 'cold_open',
  xp: 4,                             // base XP at the end
  scenes: {
    cold_open: {
      card: { kind:'cold' },         // 'cold' | 'act' | 'title' | 'tag'
      clock: { day:'Sat', date:'Aug 22', time:'11:51 PM' },
      loc: 'BROAD & SPRING GARDEN',
      night: true,                   // ink-dark panel
      enter: g => { ... },           // effects on entering
      text: g => `markup...`,        // or a plain string
      choices: [
        { text:'...', go:'next', fx: g => {...}, if: g => cond, tag:'Sweet-Talk' },
        { text:'...', check:{ kind:'pool', attr:'reflex', skill:'athletics', diff:2, label:'…',
                              power:true, near:['jules'], forceRewind:false,
                              on:{ crit:'a', success:'a', partial:'b', fail:'c' } } },
        { text:'...', slip:true, go:'x' }      // costs 2 Focus, needs the 'slip' node
      ],
      next: 'scene_id'               // Continue button if there are no choices
    },
    hub_friday: { hub:{ slots:3, label:'Friday Night', options:[
        { id:'party', text:'...', cost:1, go:'party_1', once:true, if:g=>... } ], done:'after_friday' } },
  }
});
```

**Markup in `text`:**
- Paragraphs are separated by blank lines.
- `id: line` at the start of a line → a dialogue block in the speaker's color (ids from CHARACTERS.md).
- `> text` → a comic caption box.
- `!! WORD` → SFX lettering.
- `@ SLUG LINE` → a screenplay-style slug.
- `TXT id: message` → a phone text bubble.
- `~~` → a beat break.
- `*em*`, `**strong**`.

**Effect API (`g`):** `flag(k,v=true)`, `f(k)`, `bond(id,{trust,affection,respect,tension})`, `b(id)`, `meet(id)`, `heat(id,n)`, `know(fact,[who],text)`, `knows(fact,who)`, `money(n)`, `grade(course,n)`, `sleep(h)`, `pool(name,n)`, `drift(n)`, `hidden(k,n)`, `injure({id,name,sev,pen,heal})`, `heal(id)`, `xp(n)`, `unlock(node)`, `mastery(n)`, `attr(k,n)`, `skill(k,n)`, `recap(text)`, `log(text)`, `stat(k)`.

Scenes can also return to the current hub with `go:'@hub'`.
