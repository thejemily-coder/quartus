export const meta = {
  name: 'writers-room-next-episode',
  description: 'Write the next episode from the player save: planning, parallel drafting, multi-lens continuity/voice/prose/mechanics review, revision',
  phases: [
    { title: 'Planning', detail: 'Showrunner reads the save and plans the episode; architect outlines it' },
    { title: 'Drafting', detail: 'Writers draft acts in parallel' },
    { title: 'Assembly', detail: 'Merge and validate' },
    { title: 'Review', detail: 'Continuity, voice, prose, mechanics, guardrails' },
    { title: 'Revision', detail: 'Apply notes, update canon' },
  ],
}
// args: { ep: 's1e02', id: 'S1E02', season: 1, episode: 2, prev: 's1e01', save: 'saves/after-s1e01.json', pitch: 'b', notes: 'optional player notes' }
const D = '/home/user/quartus/dynasty'
const A = args
const COMMON = `You are part of the writers' room for an interactive prestige-TV drama game. Project folder: ${D}.
Read ${D}/writers/brief.md (binding creative brief) and ${D}/writers/schema.md (episode JSON format) first.
Content limits (non-negotiable): all romantic/sexual characters are adults; intimate scenes are frank and charged in lead-in and aftermath but the act itself is off the page — never graphic or explicit; the protagonist's child is never seriously hurt or endangered; no dream fake-outs.
Do not touch anything outside ${D}. Do not run git.`
const PLAYER = `The player's save after ${A.prev} is ${D}/${A.save} (flags, tones, ledger, choice log, chosen pitch). The player picked pitch "${A.pitch}" from the end card of ${A.prev} (see ${D}/episodes/${A.prev}.json endCard). Player notes: ${A.notes || '(none)'}.`

phase('Planning')
await agent(`${COMMON}
ROLE: Showrunner. ${PLAYER}
Read ${D}/writers/bible.md, ${D}/writers/continuity.md, and every episode in ${D}/episodes/ (at least skim; read ${A.prev} fully). Study the save: which path the player took, what they protected, what they risked, the relationship temperatures.
Update the bible for the path actually taken (adjust upcoming arcs; keep hidden canon hidden; log changes in a "Revision log" section at the end of the bible). Then write ${D}/writers/outlines/${A.ep}.md: the plan for ${A.id} honoring the picked pitch, paying off the player's specific choices (name the flags/ledger lines you pay off), advancing arcs of each duration class per the arc registry, and including 1–2 reveals/twists scheduled for this episode. Include a "Previously on" list (6–10 recap lines, each with an optional 'if' expression keyed to real flags in the save) and 3 new spoiler-free pitches.
Return a 5-line summary.`, { label: 'Showrunner (plan)', model: 'opus', effort: 'high' })

const ARCH_SCHEMA = { type: 'object', properties: { acts: { type: 'array', items: { type: 'object', properties: { act: { type: 'integer' }, sceneIds: { type: 'array', items: { type: 'string' } } }, required: ['act', 'sceneIds'] } }, summary: { type: 'string' } }, required: ['acts', 'summary'] }
const arch = await agent(`${COMMON}
ROLE: Episode architect. ${PLAYER}
Read the bible, continuity.md, the save, and ${D}/writers/outlines/${A.ep}.md. Expand that outline in place into a scene-by-scene blueprint: 13–16 scenes in exactly 3 acts, full choice maps (text, flags, tones using tracked cast ids, cue, ledger, response gist, goto), conditional paragraphs keyed to flags from earlier episodes, 1–2 cutaways max, 2–3 genuine forks, 16,000–20,000 words target. Flags from earlier episodes keep their names; new flags prefixed e${A.episode}_.
Write ${D}/drafts/${A.ep}_header.json (all top-level keys except scenes: id "${A.id}", season ${A.season}, episode ${A.episode}, same showTitle, title, logline, previously (from the outline), cast (carry over tracked ids; add new characters), dossier (only what the player now knows), start "s01", endCard with 3 pitches). Validate with python3 -m json.tool. Return the act split.`, { label: 'Episode architect', model: 'opus', effort: 'high', schema: ARCH_SCHEMA })

phase('Drafting')
await parallel(arch.acts.map(a => () => agent(`${COMMON}
ROLE: Staff writer, Act ${a.act} of ${A.id}. Read the bible's style guide and voices, continuity.md, the full outline ${D}/writers/outlines/${A.ep}.md, ${D}/drafts/${A.ep}_header.json, and skim ${D}/episodes/${A.prev}.json for voice continuity.
Write ONLY scenes ${a.sceneIds.join(', ')} to ${D}/drafts/${A.ep}_act${a.act}.json as {"scenes": {...}}. Target ~${Math.round(18000 / arch.acts.length)} words. Prestige television in prose; satire at the sentence level; real undertow. Follow the blueprint's choices/flags/gotos exactly. Use typographic quotes. Confirm it parses with python3 -m json.tool. Return word count and deviations.`, { label: `Writer: Act ${a.act}`, phase: 'Drafting', model: 'opus', effort: 'high' })))

phase('Assembly')
await agent(`Project folder ${D}. Run: cd ${D} && python3 tools/assemble.py ${A.ep}
Fix any JSON/validation errors with minimal edits to ${D}/drafts/ files (no prose rewrites) until it prints OK. Do not run git. Return the validator output.`, { label: 'Assembler', model: 'haiku' })

phase('Review')
const NOTES = { type: 'object', properties: { notes: { type: 'array', items: { type: 'object', properties: { scene: { type: 'string' }, severity: { type: 'string', enum: ['must', 'should', 'could'] }, issue: { type: 'string' }, fix: { type: 'string' } }, required: ['scene', 'severity', 'issue', 'fix'] } }, verdict: { type: 'string' } }, required: ['notes', 'verdict'] }
const REVIEWERS = [
  { key: 'continuity', model: 'sonnet', prompt: `Continuity editor. Check against continuity.md, earlier episodes, and the player's save: facts, names, timeline, who knows what; every "previously on" line and conditional paragraph must match flags that actually exist in the save or this episode; the episode must honor what the player chose (no character acting as if a choice went the other way); no hidden-canon leaks in cutaways, dossier, cues, ledger, pitches.` },
  { key: 'voice', model: 'opus', prompt: `Character voice & tone editor. Each character consistent with their bible voice AND with how they spoke in earlier episodes; relationship temperatures in the save reflected in how characters treat the protagonist; satire sharp; romance slow-burn and earned within the content limits.` },
  { key: 'prose', model: 'sonnet', prompt: `Line editor. Flat, repetitive, clichéd or overwritten prose; banned words; repeated tics across this AND the previous episode; dialogue that explains instead of implies. Quote text and give rewrites.` },
  { key: 'mechanics', model: 'sonnet', prompt: `Game-design editor. Choice quality and distinctness, visible consequence, cue restraint, ledger lines in-world, tone deltas proportional, pacing for 45+ minutes, at least one always-available choice per scene, spoiler-free distinct pitches.` },
  { key: 'guardrails', model: 'haiku', prompt: `Standards check. Verify content limits: adults only in romantic/sexual content; intimacy off-page at the act itself, no graphic sexual description; the child never seriously hurt or endangered; no dream fake-outs. Report only violations.` },
]
const reviews = await parallel(REVIEWERS.map(r => () => agent(`${COMMON}
ROLE: ${r.prompt}
${PLAYER}
Read the bible, continuity.md, the outline, and ${D}/episodes/${A.ep}.json fully. Do NOT edit files. Max 25 notes, most important first.`, { label: `Reviewer: ${r.key}`, phase: 'Review', model: r.model, schema: NOTES })))

phase('Revision')
const allNotes = reviews.map((r, i) => r ? { reviewer: REVIEWERS[i].key, ...r } : null).filter(Boolean)
const revision = await agent(`${COMMON}
ROLE: Head writer, final revision of ${A.id}. ${PLAYER}
Reviewer notes: ${JSON.stringify(allNotes)}
Apply all "must" notes and the "should" notes you agree with, editing ${D}/episodes/${A.ep}.json via a Python load/modify/dump (ensure_ascii=False, indent=1). Run python3 ${D}/tools/validate.py ${D}/episodes/${A.ep}.json until OK. Append this episode's on-page canon and new flags to ${D}/writers/continuity.md. Return a short report.`, { label: 'Head writer (revision)', model: 'opus', effort: 'high' })
return { arch: arch.summary, reviews: allNotes.map(r => `${r.reviewer}: ${r.notes.length} — ${r.verdict}`), revision }
