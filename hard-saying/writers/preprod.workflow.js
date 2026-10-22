export const meta = {
  name: 'hard-saying-preprod',
  description: 'Pre-production for upcoming episodes of The Hard Saying: plan + period research for each; blueprint + drafts for the first (save-agnostic). No assembly or review.',
  phases: [
    { title: 'Planning', detail: 'Showrunner + Period Researcher per episode' },
    { title: 'Blueprint', detail: 'Architect for the next episode' },
    { title: 'Drafting', detail: 'Writers draft the next episode (save-agnostic)' },
  ],
}
// args: { prevPlayed: 's1e14', lastSave: 'saves/after-s1e13.json', eps: [{ep:'s1e15', id:'S1E15', season:1, episode:15}, ...], notes: '...' }
const D = '/home/user/quartus/hard-saying'
const A = args
const COMMON = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama game. Project folder: ${D}.
Binding docs: ${D}/writers/brief.md (the player's creative brief; newest directives at the end win), ${D}/writers/room.md (roles, knowledge rules, TIC REGISTRY), ${D}/writers/schema.md (episode JSON format). Hidden canon: ${D}/writers/bible.md. Ledgers: ${D}/writers/continuity.md, ${D}/writers/knowledge.md. Period facts: ${D}/writers/period/.
Content standards and HARD RULES per the brief. Do not touch anything outside ${D}. Do not run git.
PRE-PRODUCTION MODE: the player has NOT yet finished ${A.prevPlayed}; the latest save available is ${D}/${A.lastSave} (state before ${A.prevPlayed}). The episode ${D}/episodes/${A.prevPlayed}.json is published; read it fully. Any reference to a choice made in ${A.prevPlayed} or later must be written as conditional text/gates covering EVERY possible value of that choice's flag (read the choice map in ${A.prevPlayed}). Never assume which way the player chose. Player notes: ${A.notes || '(none)'}.`

phase('Planning')
for (const e of A.eps) await parallel([
  () => agent(`${COMMON}
ROLE: Showrunner (pre-production). Plan ${e.id}. Read the bible (especially the Season 1 map and the accelerated sequence), the brief in full, both ledgers, and ${A.prevPlayed} plus the episode immediately before ${e.id} if it exists in ${D}/writers/outlines/ (a plan) or ${D}/episodes/ (published). Write ${D}/writers/outlines/${e.ep}.md: the plan for ${e.id} honoring every brief directive due in it, the beats, arcs advanced, reveals/seeds, a Previously list (4–6 lines, gated on flags), 3–5 nextTime lines, the act split, and a "SAVE-DEPENDENCIES" section listing every place the plan depends on an unplayed choice and how each variant plays. Update the bible only if the plan requires it, logging in the Revision log. Return a 3-line spoiler-free summary.`, { label: `Showrunner ${e.id}`, phase: 'Planning', model: 'opus', effort: 'high' }),
  () => agent(`${COMMON}
ROLE: Period Researcher. Determine ${e.id}'s in-world dates from the bible's Season 1 map. If ${D}/writers/period/ lacks a sheet for those dates, write one (news, Sunday Gospel and feasts, weather, songs released by then, campus calendar, sports incl. Saints/Browns/Steelers/Ohio State). Verify with web search when possible; mark UNVERIFIED otherwise. Return 2 lines.`, { label: `Researcher ${e.id}`, phase: 'Planning', model: 'sonnet' }),
])

const first = A.eps[0]
phase('Blueprint')
const ARCH = { type: 'object', properties: { acts: { type: 'array', items: { type: 'object', properties: { act: { type: 'integer' }, writer: { type: 'string', enum: ['romance', 'ensemble'] }, sceneIds: { type: 'array', items: { type: 'string' } }, words: { type: 'integer' } }, required: ['act', 'writer', 'sceneIds', 'words'] } }, summary: { type: 'string' } }, required: ['acts', 'summary'] }
const arch = await agent(`${COMMON}
ROLE: Episode Architect (pre-production) for ${first.id}. Read the bible, both ledgers, the period sheets, and ${D}/writers/outlines/${first.ep}.md. Expand that outline IN PLACE into the full scene-by-scene blueprint per the room's usual standard (slugs, music, beats, full choice maps with gates/sets/cues/keys/gotos, duels if any, conditional paragraphs). Every dependency on ${A.prevPlayed} choices must be covered for ALL possible flag values. Target 14,000–18,000 words per path (Skye episodes may run to ~22k per the brief). Write ${D}/drafts/${first.ep}_header.json (all keys except scenes; id "${first.id}", season ${first.season}, episode ${first.episode}; previously lines gated). Validate JSON. Return the act split.`, { label: `Architect ${first.id}`, model: 'opus', effort: 'high', schema: ARCH })

phase('Drafting')
await parallel(arch.acts.map(a => () => agent(`${COMMON}
ROLE: ${a.writer === 'romance' ? 'Romance Writer (Jack/Lena or Jack/Skye material).' : 'Ensemble Writer.'} Draft chunk ${a.act} of ${first.id}: ONLY scenes ${a.sceneIds.join(', ')}. Read the bible's style guide and voices, both ledgers, the blueprint ${D}/writers/outlines/${first.ep}.md, ${D}/drafts/${first.ep}_header.json, and ${D}/episodes/${A.prevPlayed}.json for voice continuity. Write ${D}/drafts/${first.ep}_act${a.act}.json as {"scenes": {...}} per the schema, following the blueprint exactly. Cover every ${A.prevPlayed} choice variant with conditional text. Target ~${a.words} words. Re-read against the TIC REGISTRY and knowledge rules before finishing. Confirm it parses. Return word count and deviations.`, { label: `Writer ${first.id} chunk ${a.act}`, phase: 'Drafting', model: 'opus', effort: 'high' })))
return { arch: arch.summary, planned: A.eps.map(e => e.id) }
