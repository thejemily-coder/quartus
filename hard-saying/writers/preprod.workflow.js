export const meta = {
  name: 'hard-saying-preprod',
  description: 'Pre-production for upcoming episodes of The Hard Saying (pipeline v2): plan + research for each; context pack, blueprint + drafts for the first (save-agnostic). No assembly or review.',
  phases: [
    { title: 'Planning', detail: 'Showrunner + Period Researcher per episode' },
    { title: 'Context pack', detail: 'Sonnet distills the canon the next episode needs' },
    { title: 'Blueprint', detail: 'Architect for the next episode' },
    { title: 'Drafting', detail: 'Romance (Opus) and ensemble (Sonnet) writers draft the next episode' },
  ],
}
// Pipeline v2 (2026-10-23). v1 is archived in writers/pipeline-v1/ (restore if quality dips).
// args: { prevPlayed: 's1e14', lastSave: 'saves/after-s1e13.json', eps: [{ep:'s1e15', id:'S1E15', season:1, episode:15}, ...], notes: '...' }
const D = '/home/user/quartus/hard-saying'
const A = args
const first = A.eps[0]
const PACK = `${D}/drafts/${first.ep}_pack.md`
const RULES = `Content standards and HARD RULES per the brief: frank, literary heat (never pornographic mechanics); everyone 18+; ALTERNATE TIMELINE: Jack and Skye may have sex (fork directive at the top of the brief; same frank literary standard, faith stakes real); no sex for Lena with anyone, and no one else for Jack; no procedural consent beats unless a scene would otherwise read as assault; never mock the faith; no strawmen; Jack and Lena never die. Do not touch anything outside ${D}. Do not run git.`
const PREPROD = `PRE-PRODUCTION MODE: the player has NOT yet finished ${A.prevPlayed}; the latest save available is ${D}/${A.lastSave} (state before ${A.prevPlayed}). The episode ${D}/episodes/${A.prevPlayed}.json is published; read it fully. Any reference to a choice made in ${A.prevPlayed} or later must be written as conditional text/gates covering EVERY possible value of that choice's flag (read the choice map in ${A.prevPlayed}). Never assume which way the player chose. Player notes: ${A.notes || '(none)'}.`
const FULL = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama game. Project folder: ${D}.
Binding docs: ${D}/writers/brief.md (the player's creative brief; newest directives at the end win), ${D}/writers/room.md (roles, knowledge rules, TIC REGISTRY), ${D}/writers/schema.md. Hidden canon: ${D}/writers/bible.md. Ledgers: ${D}/writers/continuity.md, ${D}/writers/knowledge.md. Period facts: ${D}/writers/period/. ${RULES}
${PREPROD}`
const PACKED = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama game. Project folder: ${D}.
START WITH THE CONTEXT PACK ${PACK}: it holds the player's binding directives, the style guide, every on-page character's voice, the hidden-canon constraints, the ledgers' relevant entries, the TIC REGISTRY and the period facts. It replaces reading the full bible, ledgers and brief: consult those ONLY by targeted grep/sed for a specific fact the pack lacks. Schema: ${D}/writers/schema.md. ${RULES}
${PREPROD}`

phase('Planning')
const SKETCH = A.eps.slice(1)
await parallel([
  () => agent(`${FULL}
ROLE: Showrunner (pre-production). Plan ${first.id}. Read the bible's season map and arc registry, the brief in full (newest entries carefully), the ledgers' recent entries, and ${A.prevPlayed} plus the episode immediately before ${first.id} if it exists in ${D}/writers/outlines/ (a plan) or ${D}/episodes/ (published). Write ${D}/writers/outlines/${first.ep}.md: the plan for ${first.id} honoring every brief directive due in it, the beats, arcs advanced, reveals/seeds, a Previously list (4–6 lines, gated on flags), 3–5 nextTime lines, the act split (mark romance chunks: Jack/Lena or Jack/Skye material), a CHARACTERS-ON-PAGE list, and a "SAVE-DEPENDENCIES" section listing every place the plan depends on an unplayed choice and how each variant plays. Update the bible only if the plan requires it, logging in the Revision log. Return a 3-line spoiler-free summary.`, { label: `Showrunner ${first.id}`, phase: 'Planning', model: 'opus', effort: 'high' }),
  ...A.eps.map(e => () => agent(`${FULL}
ROLE: Period Researcher. Determine ${e.id}'s in-world dates from the bible's season map. If ${D}/writers/period/ lacks a sheet for those dates, write one (news, Sunday Gospel and feasts, weather, songs released by then, campus calendar, sports incl. Saints/Browns/Steelers/Ohio State). Verify with web search when possible; mark UNVERIFIED otherwise. Return 2 lines.`, { label: `Researcher ${e.id}`, phase: 'Planning', model: 'sonnet', effort: 'medium' })),
])
// Look-ahead episodes get a cheap sketch; their full plan is written by the Opus Showrunner on the next run.
for (const e of SKETCH) await agent(`${FULL}
ROLE: Story Editor (look-ahead sketch). Write or revise ${D}/writers/outlines/${e.ep}.md as a SKETCH for ${e.id} (it will be fully planned later): dates, the brief directives due in it, 8–15 beats, seeds and payoffs, and the flags it expects from ${first.id} (read ${D}/writers/outlines/${first.ep}.md). Keep any existing fuller plan's decisions unless the brief's newest entries override them. Do not edit the bible. Return 2 lines.`, { label: `Sketch ${e.id}`, phase: 'Planning', model: 'sonnet', effort: 'medium' })

phase('Context pack')
await agent(`You are the Context Packer for the writers' room of "The Hard Saying". Project folder: ${D}. ${RULES}
Build ${PACK} for ${first.id}: the canon digest every later agent reads instead of the 1 MB bible. Sources: the plan ${D}/writers/outlines/${first.ep}.md (read fully first: it tells you which characters, places, objects, arcs and secrets are on the page); ${D}/writers/brief.md; ${D}/writers/room.md; ${D}/writers/bible.md; ${D}/writers/continuity.md; ${D}/writers/knowledge.md; ${D}/writers/period/ (the sheet for this episode's dates).
Write these sections, VERBATIM excerpts preferred over paraphrase, each excerpt labeled with its source and heading:
1. PLAYER DIRECTIVES: every brief entry that bears on this episode, its characters or standing rules (hard rules, consent, heat ladder, Skye's mix, double state, knowledge tics, length), copied verbatim; newest entries win and must be included in full. Then these player notes: ${A.notes || '(none)'}.
2. STYLE: bible Part I §4 style guide in full.
3. VOICES: the bible dossier/voice section of every character who speaks or is texted in this episode.
4. HIDDEN CANON THAT CONSTRAINS THIS EPISODE (🔒): secrets, mystery beats, knowledge ceilings and planned reveals touching anything on the page.
5. ARCS AND SEASON MAP: arc-registry rows touched; the season-map entries for this episode and the next two; the romance roadmap's current state.
6. LEDGERS: continuity.md standing facts plus entries for the last three episodes and any object/place in the plan; knowledge.md LIVE RISKS plus the who-knows-what for every on-page character.
7. TIC REGISTRY: room.md's knowledge checklist and full tic registry, verbatim.
8. PERIOD: the period-sheet facts for these dates.
HARD CAP: 200,000 characters total. Sections 1, 4 and 7 are verbatim and never trimmed; to stay under the cap, summarize sections 3, 5, 6 and 8 tightly (ledgers as dense bullet facts, not pasted pages), and include only voices of characters actually on the page. BEFORE RETURNING: run wc -c on the pack; if it is over 200000, cut sections 3, 5, 6 and 8 further (summaries, not pastes) and re-run wc -c until it is under 200000. A pack over the cap is a failed task. Edit no other file. Return the pack's final byte count and section list.`, { label: `Context Packer ${first.id}`, phase: 'Context pack', model: 'sonnet', effort: 'medium' })

phase('Blueprint')
const ARCH = { type: 'object', properties: { acts: { type: 'array', items: { type: 'object', properties: { act: { type: 'integer' }, writer: { type: 'string', enum: ['romance', 'ensemble'] }, sceneIds: { type: 'array', items: { type: 'string' } }, words: { type: 'integer' } }, required: ['act', 'writer', 'sceneIds', 'words'] } }, summary: { type: 'string' } }, required: ['acts', 'summary'] }
const arch = await agent(`${PACKED}
ROLE: Episode Architect (pre-production) for ${first.id}. Read the pack and ${D}/writers/outlines/${first.ep}.md. Expand that outline IN PLACE into the full scene-by-scene blueprint per the room's usual standard (slugs, music, beats, full choice maps with gates/sets/cues/keys/gotos, duels if any, conditional paragraphs, every text and picture insert written out). Every dependency on ${A.prevPlayed} choices must be covered for ALL possible flag values. Target the brief's current length (~22–26k words per path; Skye time on top of Lena and the ensemble). Assign "romance" to every chunk carrying Jack/Lena or Jack/Skye material, "ensemble" otherwise; keep romance chunks to those scenes so ensemble chunks can run on a lighter model. Write ${D}/drafts/${first.ep}_header.json (all keys except scenes; id "${first.id}", season ${first.season}, episode ${first.episode}; previously lines gated). Validate JSON. Return the act split.`, { label: `Architect ${first.id}`, phase: 'Blueprint', model: 'opus', effort: 'high', schema: ARCH })

phase('Drafting')
await parallel(arch.acts.map(a => () => agent(`${PACKED}
ROLE: ${a.writer === 'romance' ? 'Romance Writer (Jack/Lena or Jack/Skye material): heat, subtext, argument, restraint; both women fully themselves.' : 'Ensemble Writer: every character funny in their OWN register; every secular character lovable and right about something.'} Draft chunk ${a.act} of ${first.id}: ONLY scenes ${a.sceneIds.join(', ')}. Read the pack, the blueprint ${D}/writers/outlines/${first.ep}.md, ${D}/drafts/${first.ep}_header.json, and the scenes of ${D}/episodes/${A.prevPlayed}.json that your scenes follow from (for voice continuity). Write ${D}/drafts/${first.ep}_act${a.act}.json as {"scenes": {...}} per the schema, following the blueprint exactly. Cover every ${A.prevPlayed} choice variant with conditional text. Target ~${a.words} words. Re-read against the pack's TIC REGISTRY and knowledge rules before finishing. Confirm it parses. Return word count and deviations.`, { label: `Writer ${first.id} chunk ${a.act} (${a.writer})`, phase: 'Drafting', model: a.writer === 'romance' ? 'opus' : 'sonnet', effort: 'high' })))
return { arch: arch.summary, planned: A.eps.map(e => e.id) }
