export const meta = {
  name: 'hard-saying-finalize',
  description: 'Finalize a pre-produced episode of The Hard Saying against the real save: delta pass, assembly, six-lens review, revision',
  phases: [
    { title: 'Save delta', detail: 'Showrunner checks drafts against the actual save and patches' },
    { title: 'Expansion', detail: 'Optional: Architect plans added scenes, writers draft them' },
    { title: 'Assembly', detail: 'Merge and validate' },
    { title: 'Review', detail: 'Continuity, knowledge, voice, line/tics, standards/spoilers, mechanics' },
    { title: 'Revision', detail: 'Head writer applies notes and updates canon ledgers' },
  ],
}
// args: { ep, id, season, episode, prev, save, notes, expand?: 'what to add and the target length' }
const D = '/home/user/quartus/hard-saying'
const A = args
const COMMON = `You are part of the writers' room for "The Hard Saying". Project folder: ${D}. Binding docs: ${D}/writers/brief.md (newest directives at the end win), ${D}/writers/room.md (TIC REGISTRY, knowledge rules), ${D}/writers/schema.md. Hidden canon: ${D}/writers/bible.md. Ledgers: continuity.md, knowledge.md. Period: ${D}/writers/period/. Content standards and HARD RULES per the brief. Do not touch anything outside ${D}. Do not run git.`
const PLAYER = `The player's save after ${A.prev} is ${D}/${A.save}. Player notes for this episode: ${A.notes || '(none)'}.`

phase('Save delta')
await agent(`${COMMON}
ROLE: Showrunner, finalize pass for ${A.id}. ${PLAYER}
${A.id} was pre-produced before the player finished ${A.prev}: the blueprint ${D}/writers/outlines/${A.ep}.md and drafts ${D}/drafts/${A.ep}_*.json were written save-agnostic. Now read the real save and ${D}/episodes/${A.prev}.json (the choices actually made). Also read the brief's newest directives (added after pre-production) and the player notes above. Then: (1) update the bible for the path actually taken (Revision log); (2) patch the blueprint and the draft JSON files so ${A.id} honors the actual choices, the new notes and directives: simplify branches made irrelevant only if safe, add payoffs for what the player did, fix anything the save contradicts; keep conditionals valid. Python load/modify/dump for JSON (ensure_ascii=False, indent=1); validate each file parses. Return a 4-line spoiler-free summary.`, { label: 'Showrunner (save delta)', model: 'opus', effort: 'high' })

if (A.expand) {
  phase('Expansion')
  const EXP = { type: 'object', properties: { chunks: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, writer: { type: 'string', enum: ['romance', 'ensemble'] }, sceneIds: { type: 'array', items: { type: 'string' } }, words: { type: 'integer' }, brief: { type: 'string' } }, required: ['file', 'writer', 'sceneIds', 'words', 'brief'] } }, summary: { type: 'string' } }, required: ['chunks', 'summary'] }
  const plan = await agent(`${COMMON}
ROLE: Episode Architect, expansion pass for ${A.id}. ${PLAYER}
EXPANSION ORDER: ${A.expand}
Read the blueprint ${D}/writers/outlines/${A.ep}.md, the header and every ${D}/drafts/${A.ep}_act*.json. Plan the added material: new scenes (and, where needed, extensions of existing scenes as new scene ids spliced in by repointing gotos/next in the existing drafts, which you do yourself now with minimal JSON edits). Added time goes where the order says, never cutting existing Lena or ensemble material. Write the added scenes' blueprints (slugs, beats, choices with sets/gates/keys/gotos) into a new section of the outline. Each chunk is a new file ${D}/drafts/${A.ep}_act<N>.json with N above the existing act numbers. Keep every gate valid. Return the chunk list.`, { label: 'Architect (expansion)', phase: 'Expansion', model: 'opus', effort: 'high', schema: EXP })
  await parallel(plan.chunks.map(c => () => agent(`${COMMON}
ROLE: ${c.writer === 'romance' ? 'Romance Writer (Jack/Lena or Jack/Skye material).' : 'Ensemble Writer.'} ${PLAYER}
Draft ONLY scenes ${c.sceneIds.join(', ')} of ${A.id} into ${c.file} as {"scenes": {...}} per the schema, following the expansion blueprint in ${D}/writers/outlines/${A.ep}.md and this brief: ${c.brief}. Read the bible's style guide and voices, both ledgers, the existing drafts around the splice points (match voice and continuity exactly), and ${D}/episodes/${A.prev}.json. Target ~${c.words} words. Re-read against the TIC REGISTRY and knowledge rules. Confirm it parses. Return word count and deviations.`, { label: `Writer ${A.id} ${c.file.split('/').pop()}`, phase: 'Expansion', model: 'opus', effort: 'high' })))
}

phase('Assembly')
await agent(`Project folder ${D}. Run: cd ${D} && python3 tools/assemble.py ${A.ep}
Fix JSON/validation ERRORS with minimal edits to ${D}/drafts/${A.ep}_*.json (no prose rewrites) and rerun until it prints OK. Do not run git. Return the validator output.`, { label: 'Assembler', model: 'haiku' })

phase('Review')
const NOTES = { type: 'object', properties: { notes: { type: 'array', items: { type: 'object', properties: { scene: { type: 'string' }, severity: { type: 'string', enum: ['must', 'should', 'could'] }, quote: { type: 'string' }, issue: { type: 'string' }, fix: { type: 'string' } }, required: ['scene', 'severity', 'issue', 'fix'] } }, verdict: { type: 'string' } }, required: ['notes', 'verdict'] }
const REVIEWERS = [
  { key: 'continuity', model: 'sonnet', prompt: `Continuity Auditor. Facts, names, dates, weekdays, geography, timeline vs continuity.md, earlier episodes and the save; the episode honors exactly what the player chose; every conditional keys to real vars; period accuracy.` },
  { key: 'knowledge', model: 'opus', prompt: `Knowledge Auditor. For every line implying knowledge: how does this character know it? Flag impossible knowledge (and the banned joke/guess cover), names before introduction, narration asserting others' inner states as fact, journal leaks, fork leaks.` },
  { key: 'voice', model: 'opus', prompt: `Voice Editor. Every character sounds like their bible voice and earlier episodes; distinct humor registers; relationship temperatures reflected; Lena fierce and central; Skye per the player's co-design if present; no strawmen; heat earned.` },
  { key: 'line', model: 'opus', prompt: `Line Editor & Tic Hunter. Hunt every TIC REGISTRY item across this AND earlier episodes; counted numbers must be literally correct or cut; flat/clichéd/repetitive prose; propose new tics.` },
  { key: 'standards', model: 'sonnet', prompt: `Standards & Spoiler Guard. Brief content standards and HARD RULES (incl. consent clean with Skye — but NO procedural consent beats or check-ins unless the scene would otherwise read as assault; flag gratuitous ones; no sex for Jack or Lena with anyone; adults only); no hidden-canon leaks in journal, cues, keys, previously, logline, nextTime, choice text.` },
  { key: 'mechanics', model: 'sonnet', prompt: `Mechanics Designer. Choice distinctness; ungated choice per scene; gates reachable on this save; effects proportional; resolve economy; duel scoring; whispers 5–8; keys 6–12; pacing; forks converge.` },
]
const reviews = await parallel(REVIEWERS.map(r => () => agent(`${COMMON}
ROLE: ${r.prompt}
${PLAYER}
Read the bible, both ledgers, the blueprint ${D}/writers/outlines/${A.ep}.md, and ${D}/episodes/${A.ep}.json fully. Do NOT edit files. Max 30 notes, most important first, with exact quotes.`, { label: `Review: ${r.key}`, phase: 'Review', model: r.model, schema: NOTES })))

phase('Revision')
const allNotes = reviews.map((r, i) => r ? { reviewer: REVIEWERS[i].key, ...r } : null).filter(Boolean)
const revision = await agent(`${COMMON}
ROLE: Head Writer, final revision of ${A.id}. ${PLAYER}
Reviewer notes: ${JSON.stringify(allNotes)}
Apply every "must" and the "should" notes you agree with, editing ${D}/episodes/${A.ep}.json via Python load/modify/dump (ensure_ascii=False, indent=1). Final polish read. Run python3 ${D}/tools/validate.py ${D}/episodes/${A.ep}.json until OK (resolve every word-count WARN). Append this episode's canon and flags to continuity.md, who-learned-what to knowledge.md, new tics to room.md. Return a short report.`, { label: 'Head Writer', model: 'opus', effort: 'high' })
return { reviews: allNotes.map(r => `${r.reviewer}: ${r.notes.length} — ${r.verdict}`), revision }
