export const meta = {
  name: 'hard-saying-finalize',
  description: 'Finalize a pre-produced episode of The Hard Saying against the real save (pipeline v2: context pack, cost-tiered models, scripted checks)',
  phases: [
    { title: 'Context pack', detail: 'Sonnet distills the canon this episode needs into one pack' },
    { title: 'Save delta', detail: 'Showrunner patches drafts to the actual save and newest notes' },
    { title: 'Expansion', detail: 'Optional: Architect plans added scenes, writers draft them' },
    { title: 'Assembly', detail: 'Merge, validate, scripted playthrough and tic counts' },
    { title: 'Review', detail: 'Continuity, knowledge, voice, line/tics, standards/spoilers, mechanics' },
    { title: 'Revision', detail: 'Head writer applies notes; ledger clerk updates canon ledgers' },
  ],
}
// Pipeline v2 (2026-10-23). v1 is archived in writers/pipeline-v1/ (restore if quality dips).
// args: { ep, id, season, episode, prev, save, notes, expand?: 'what to add and the target length' }
const D = '/home/user/quartus/hard-saying'
const A = args
const PACK = `${D}/drafts/${A.ep}_pack.md`
const RULES = `Content standards and HARD RULES per the brief: frank, literary heat (never pornographic mechanics); everyone 18+; no sex for Jack or Lena with anyone; no procedural consent beats unless a scene would otherwise read as assault; never mock the faith; no strawmen; Jack and Lena never die. Do not touch anything outside ${D}. Do not run git.`
const COMMON = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama. Project folder: ${D}.
START WITH THE CONTEXT PACK ${PACK}: it holds the player's binding directives for this episode, the style guide, every on-page character's voice, the hidden-canon constraints, the ledgers' relevant entries, the TIC REGISTRY and the period facts. It replaces reading the full bible (${D}/writers/bible.md), ledgers (continuity.md, knowledge.md) and brief (${D}/writers/brief.md): consult those ONLY by targeted grep/sed for a specific fact the pack lacks. Schema: ${D}/writers/schema.md. ${RULES}`
const PLAYER = `The player's save after ${A.prev} is ${D}/${A.save}. Player notes for this episode: ${A.notes || '(none)'}.`

phase('Context pack')
await agent(`You are the Context Packer for the writers' room of "The Hard Saying". Project folder: ${D}. ${RULES}
Build ${PACK} for ${A.id}: the canon digest every later agent reads instead of the 1 MB bible. Sources: the blueprint ${D}/writers/outlines/${A.ep}.md (read fully first: it tells you which characters, places, objects, arcs and secrets are on the page); ${D}/writers/brief.md; ${D}/writers/room.md; ${D}/writers/bible.md; ${D}/writers/continuity.md; ${D}/writers/knowledge.md; ${D}/writers/period/ (the sheet for this episode's dates); the save ${D}/${A.save} (only to note played flags the outline reads).
Write these sections, VERBATIM excerpts preferred over paraphrase, each excerpt labeled with its source and heading:
1. PLAYER DIRECTIVES: every brief entry that bears on this episode, its characters or standing rules (hard rules, consent, heat ladder, Skye's mix, double state, knowledge tics, length), copied verbatim; newest entries win and must be included in full. Then these player notes: ${A.notes || '(none)'}.
2. STYLE: bible Part I §4 style guide in full.
3. VOICES: the bible dossier/voice section of every character who speaks or is texted in this episode.
4. HIDDEN CANON THAT CONSTRAINS THIS EPISODE (🔒): secrets, mystery beats, knowledge ceilings and planned reveals touching anything on the page.
5. ARCS AND SEASON MAP: arc-registry rows touched; the season-map entries for this episode and the next two; the romance roadmap's current state.
6. LEDGERS: continuity.md standing facts plus entries for the last three episodes and any object/place in the outline; knowledge.md LIVE RISKS plus the who-knows-what for every on-page character.
7. TIC REGISTRY: room.md's knowledge checklist and full tic registry, verbatim.
8. PERIOD: the period-sheet facts for these dates.
Aim for 80–160k characters; completeness on sections 1, 4 and 7 beats brevity. Edit no other file. Return the pack's size and section list.`, { label: 'Context Packer', phase: 'Context pack', model: 'sonnet', effort: 'medium' })

phase('Save delta')
await agent(`${COMMON}
ROLE: Showrunner, finalize pass for ${A.id}. ${PLAYER}
${A.id} was pre-produced before the player finished ${A.prev}: the blueprint ${D}/writers/outlines/${A.ep}.md and drafts ${D}/drafts/${A.ep}_*.json were written save-agnostic. Read the real save and ${D}/episodes/${A.prev}.json (the choices actually made), the pack's newest directives and the player notes. Then: (1) log the path actually taken in the bible's Revision log (targeted edit); (2) patch the blueprint and draft JSON so ${A.id} honors the actual choices, the new notes and directives: collapse gates on played choices to their played values, add payoffs for what the player did, fix anything the save contradicts, and make any prose change a design answer requires; keep conditionals valid. Python load/modify/dump for JSON (ensure_ascii=False, indent=1); validate each file parses. Return a 4-line spoiler-free summary.`, { label: 'Showrunner (save delta)', phase: 'Save delta', model: 'opus', effort: 'medium' })

if (A.expand) {
  phase('Expansion')
  const EXP = { type: 'object', properties: { chunks: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, writer: { type: 'string', enum: ['romance', 'ensemble'] }, sceneIds: { type: 'array', items: { type: 'string' } }, words: { type: 'integer' }, brief: { type: 'string' } }, required: ['file', 'writer', 'sceneIds', 'words', 'brief'] } }, summary: { type: 'string' } }, required: ['chunks', 'summary'] }
  const plan = await agent(`${COMMON}
ROLE: Episode Architect, expansion pass for ${A.id}. ${PLAYER}
EXPANSION ORDER: ${A.expand}
Read the blueprint ${D}/writers/outlines/${A.ep}.md, the header and every ${D}/drafts/${A.ep}_act*.json. Plan the added material: new scenes (and, where needed, extensions of existing scenes as new scene ids spliced in by repointing gotos/next in the existing drafts, which you do yourself now with minimal JSON edits). Added time goes where the order says, never cutting existing Lena or ensemble material. Write the added scenes' blueprints (slugs, beats, choices with sets/gates/keys/gotos) into a new section of the outline. Each chunk is a new file ${D}/drafts/${A.ep}_act<N>.json with N above the existing act numbers; mark "romance" for any Jack/Lena or Jack/Skye material. Keep every gate valid. Return the chunk list.`, { label: 'Architect (expansion)', phase: 'Expansion', model: 'opus', effort: 'high', schema: EXP })
  await parallel(plan.chunks.map(c => () => agent(`${COMMON}
ROLE: ${c.writer === 'romance' ? 'Romance Writer (Jack/Lena or Jack/Skye material).' : 'Ensemble Writer.'} ${PLAYER}
Draft ONLY scenes ${c.sceneIds.join(', ')} of ${A.id} into ${c.file} as {"scenes": {...}} per the schema, following the expansion blueprint in ${D}/writers/outlines/${A.ep}.md and this brief: ${c.brief}. Read the existing drafts around the splice points (match voice and continuity exactly). Target ~${c.words} words. Re-read against the pack's TIC REGISTRY and knowledge rules. Confirm it parses. Return word count and deviations.`, { label: `Writer ${A.id} ${c.file.split('/').pop()} (${c.writer})`, phase: 'Expansion', model: c.writer === 'romance' ? 'opus' : 'sonnet', effort: 'high' })))
}

phase('Assembly')
const checks = await agent(`Project folder ${D}. Do not run git.
1. Run: cd ${D} && python3 tools/assemble.py ${A.ep}
   Fix JSON/validation ERRORS with minimal edits to ${D}/drafts/${A.ep}_*.json (no prose rewrites) and rerun until it prints OK.
2. Run: cd ${D} && python3 tools/build.py && node tools/sim.js ${A.id} ${A.save} 400
3. Run: cd ${D} && python3 tools/tics.py ${A.ep} ${A.prev}
Return the exact output of steps 1–3, nothing else.`, { label: 'Assembler + checks', phase: 'Assembly', model: 'haiku' })

phase('Review')
const NOTES = { type: 'object', properties: { notes: { type: 'array', items: { type: 'object', properties: { scene: { type: 'string' }, severity: { type: 'string', enum: ['must', 'should', 'could'] }, quote: { type: 'string' }, issue: { type: 'string' }, fix: { type: 'string' } }, required: ['scene', 'severity', 'issue', 'fix'] } }, verdict: { type: 'string' } }, required: ['notes', 'verdict'] }
const REVIEWERS = [
  { key: 'continuity', model: 'sonnet', effort: 'medium', prompt: `Continuity Auditor. Facts, names, dates, weekdays, geography, timeline vs the pack's ledgers, the previous episode and the save; the episode honors exactly what the player chose; every conditional keys to real vars; period accuracy.` },
  { key: 'knowledge', model: 'opus', effort: 'high', prompt: `Knowledge Auditor. For every line implying knowledge: how does this character know it? Flag impossible knowledge (and the banned joke/guess cover), names before introduction, narration asserting others' inner states as fact, journal leaks, fork leaks.` },
  { key: 'voice', model: 'opus', effort: 'medium', prompt: `Voice Editor. Every character sounds like their pack voice and earlier episodes; distinct humor registers; relationship temperatures reflected; Lena fierce and central; Skye per the player's co-design if present (her whole mix); no strawmen; heat earned; the player's directives for this episode visibly honored.` },
  { key: 'line', model: 'sonnet', effort: 'high', prompt: `Line Editor & Tic Hunter. Start from the scripted tic counts below, then hunt every TIC REGISTRY item across this episode (spot-check the previous one); counted numbers must be literally correct or cut; flat/clichéd/repetitive prose; shared figures between Lena and Skye; propose new tics.` },
  { key: 'standards', model: 'sonnet', effort: 'medium', prompt: `Standards & Spoiler Guard. Brief content standards and HARD RULES (no procedural consent beats unless needed; no sex for Jack or Lena with anyone; adults only); no hidden-canon leaks in journal, cues, keys, previously, logline, nextTime, choice text.` },
  { key: 'mechanics', model: 'haiku', effort: 'high', prompt: `Mechanics Designer. Use the scripted playthrough results below (words per path, whispers, keys, unreachable or stuck scenes). Then check choice distinctness; ungated choice per scene; gates reachable on this save; effects proportional; resolve economy; duel scoring; whispers 5–8; keys 6–12; pacing; forks converge.` },
]
const reviews = await parallel(REVIEWERS.map(r => () => agent(`${COMMON}
ROLE: ${r.prompt}
${PLAYER}
Scripted checks:
${checks}
Read the pack, the blueprint ${D}/writers/outlines/${A.ep}.md, and ${D}/episodes/${A.ep}.json fully. Do NOT edit files. Max 30 notes, most important first, with exact quotes.`, { label: `Review: ${r.key}`, phase: 'Review', model: r.model, effort: r.effort, schema: NOTES })))

phase('Revision')
const allNotes = reviews.map((r, i) => r ? { reviewer: REVIEWERS[i].key, ...r } : null).filter(Boolean)
const revision = await agent(`${COMMON}
ROLE: Head Writer, final revision of ${A.id}. ${PLAYER}
Reviewer notes: ${JSON.stringify(allNotes)}
Apply every "must" and the "should" notes you agree with, editing ${D}/episodes/${A.ep}.json via Python load/modify/dump (ensure_ascii=False, indent=1). Final polish read for rhythm and heat. Run python3 ${D}/tools/validate.py ${D}/episodes/${A.ep}.json until OK (resolve every word-count WARN). Do NOT update the ledgers (the Ledger Clerk does). Return a short report: notes applied/declined, any new tics the line editor proposed, and a list of new canon facts and who-learned-what this episode established (scene ids, branch conditions).`, { label: 'Head Writer', phase: 'Revision', model: 'opus', effort: 'high' })
await agent(`You are the Ledger Clerk for "The Hard Saying". Project folder: ${D}. Do not run git; edit nothing but the three files below.
Read the final ${D}/episodes/${A.ep}.json and this Head Writer report: ${revision}
Append ${A.id}'s on-page canon and new flags to ${D}/writers/continuity.md, its who-learned-what (scene ids, branch conditions) to ${D}/writers/knowledge.md (update LIVE RISKS if needed), and any new tics to the TIC REGISTRY in ${D}/writers/room.md, each in the existing format of that file. Return one line per file.`, { label: 'Ledger Clerk', phase: 'Revision', model: 'sonnet', effort: 'medium' })
return { reviews: allNotes.map(r => `${r.reviewer}: ${r.notes.length} — ${r.verdict}`), revision }
