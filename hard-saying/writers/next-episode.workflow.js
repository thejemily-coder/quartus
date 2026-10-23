export const meta = {
  name: 'hard-saying-episode',
  description: 'Writers room for The Hard Saying (pipeline v2): plan from the save, context pack, blueprint, draft, scripted checks, six-lens review, revise',
  phases: [
    { title: 'Planning', detail: 'Showrunner + period researcher' },
    { title: 'Context pack', detail: 'Sonnet distills the canon this episode needs' },
    { title: 'Blueprint', detail: 'Episode architect' },
    { title: 'Drafting', detail: 'Romance (Opus) and ensemble (Sonnet) writers draft acts in parallel' },
    { title: 'Assembly', detail: 'Merge, validate, scripted playthrough and tic counts' },
    { title: 'Review', detail: 'Continuity, knowledge, voice, line/tics, standards/spoilers, mechanics' },
    { title: 'Revision', detail: 'Head writer applies notes; ledger clerk updates canon ledgers' },
  ],
}
// Pipeline v2 (2026-10-23). v1 is archived in writers/pipeline-v1/ (restore if quality dips).
// args: { ep: 's1e02', id: 'S1E02', season: 1, episode: 2, prev: 's1e01', save: 'saves/after-s1e01.json',
//         notes: 'player notes from the notes session', skipPlanning: false }
const D = '/home/user/quartus/hard-saying'
const A = args
const PACK = `${D}/drafts/${A.ep}_pack.md`
const RULES = `Content standards and HARD RULES per the brief: frank, literary heat (never pornographic mechanics); everyone 18+; no sex for Jack or Lena with anyone; no procedural consent beats unless a scene would otherwise read as assault; never mock the faith; no strawmen; Jack and Lena never die. Do not touch anything outside ${D}. Do not run git.`
const PLAYER = `The player's save after ${A.prev} is ${D}/${A.save} (vars, journal, keys, choice logs). Player notes for this episode: ${A.notes || '(none)'}.`
const FULL = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama game. Project folder: ${D}.
Binding docs: ${D}/writers/brief.md (every line is a player decision; newest win), ${D}/writers/room.md, ${D}/writers/schema.md. Hidden canon: ${D}/writers/bible.md. Ledgers: ${D}/writers/continuity.md, ${D}/writers/knowledge.md. Period: ${D}/writers/period/. ${RULES}`
const COMMON = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama. Project folder: ${D}.
START WITH THE CONTEXT PACK ${PACK}: it holds the player's binding directives for this episode, the style guide, every on-page character's voice, the hidden-canon constraints, the ledgers' relevant entries, the TIC REGISTRY and the period facts. It replaces reading the full bible, ledgers and brief: consult those ONLY by targeted grep/sed for a specific fact the pack lacks. Schema: ${D}/writers/schema.md. ${RULES}`

phase('Planning')
if (!A.skipPlanning) {
  await parallel([
    () => agent(`${FULL}
ROLE: Showrunner. ${PLAYER}
Read the bible's season map, arc registry and the sections your plan touches, the brief in full, the ledgers' recent entries, and the previous episode ${D}/episodes/${A.prev}.json fully. Study the save: the path taken, relationship temperatures, soul and resolve, traits firming up.
Revise the bible for the path actually taken (keep hidden canon hidden; log changes in its Revision log). Then write ${D}/writers/outlines/${A.ep}.md: the plan for ${A.id} honoring the player notes, paying off specific prior choices (name the flags/keys), advancing arcs per the registry, scheduling reveals and seeds, a "Previously on" list (6–10 lines, each with an optional 'if'), 3–5 nextTime lines, a CHARACTERS-ON-PAGE list, and the act split (mark romance chunks: Jack/Lena or Jack/Skye material). Return a 3-line spoiler-free summary.`, { label: 'Showrunner', phase: 'Planning', model: 'opus', effort: 'high' }),
    () => agent(`${FULL}
ROLE: Period Researcher. Determine the in-world dates of ${A.id} from the bible's season map. Extend ${D}/writers/period/ with a sheet for those dates (news, Sunday Gospel and feasts, weather, songs released by then, campus calendar, sports results — Saints, Browns/Steelers/Ohio State). Verify with web search when possible; mark UNVERIFIED otherwise. Return 2 lines.`, { label: 'Period Researcher', phase: 'Planning', model: 'sonnet', effort: 'medium' }),
  ])
}

phase('Context pack')
await agent(`You are the Context Packer for the writers' room of "The Hard Saying". Project folder: ${D}. ${RULES}
Build ${PACK} for ${A.id}: the canon digest every later agent reads instead of the 1 MB bible. Sources: the plan ${D}/writers/outlines/${A.ep}.md (read fully first: it tells you which characters, places, objects, arcs and secrets are on the page); ${D}/writers/brief.md; ${D}/writers/room.md; ${D}/writers/bible.md; ${D}/writers/continuity.md; ${D}/writers/knowledge.md; ${D}/writers/period/; the save ${D}/${A.save}.
Write these sections, VERBATIM excerpts preferred over paraphrase, each excerpt labeled with its source and heading:
1. PLAYER DIRECTIVES: every brief entry that bears on this episode, its characters or standing rules, copied verbatim; newest entries in full. Then these player notes: ${A.notes || '(none)'}.
2. STYLE: bible Part I §4 style guide in full.
3. VOICES: the bible voice section of every character who speaks or is texted in this episode.
4. HIDDEN CANON THAT CONSTRAINS THIS EPISODE (🔒).
5. ARCS AND SEASON MAP: rows touched; this episode and the next two; the romance roadmap's current state.
6. LEDGERS: continuity standing facts plus the last three episodes and any object/place in the plan; knowledge LIVE RISKS plus who-knows-what for every on-page character.
7. TIC REGISTRY: room.md's knowledge checklist and full tic registry, verbatim.
8. PERIOD: the period-sheet facts for these dates.
HARD CAP: 200,000 characters total. Sections 1, 4 and 7 are verbatim and never trimmed; to stay under the cap, summarize sections 3, 5, 6 and 8 tightly (ledgers as dense bullet facts, not pasted pages), and include only voices of characters actually on the page. Edit no other file. Return the pack's size and section list.`, { label: 'Context Packer', phase: 'Context pack', model: 'sonnet', effort: 'medium' })

phase('Blueprint')
const ARCH = { type: 'object', properties: {
  acts: { type: 'array', items: { type: 'object', properties: {
    act: { type: 'integer' }, writer: { type: 'string', enum: ['romance', 'ensemble'] }, sceneIds: { type: 'array', items: { type: 'string' } }, words: { type: 'integer' } },
    required: ['act', 'writer', 'sceneIds', 'words'] } },
  summary: { type: 'string' } }, required: ['acts', 'summary'] }
const arch = await agent(`${COMMON}
ROLE: Episode Architect. ${PLAYER}
Read the pack and ${D}/writers/outlines/${A.ep}.md. Expand that outline IN PLACE into a full scene-by-scene blueprint: every scene id, slug, music cue (released before the scene's date), beats, and the complete choice map (text, tag, if-gates, set effects using schema variables, cue whispers 5–8, key lines 6–12, response gist, goto). Design any argument duel in detail. Conditional paragraphs keyed to earlier flags. 2–4 genuine forks that converge. Target the brief's current length (~22–26k words per path). Assign "romance" to every chunk carrying Jack/Lena or Jack/Skye material, "ensemble" otherwise, keeping romance chunks to those scenes.
Write ${D}/drafts/${A.ep}_header.json with every top-level key except scenes: id "${A.id}", season ${A.season}, episode ${A.episode}, showTitle "The Hard Saying", title, dates, logline, previously, cast (stable tracked ids), duels, start, endCard {tag, nextTime}. Validate it with python3 -m json.tool. Return the act split.`, { label: 'Episode Architect', phase: 'Blueprint', model: 'opus', effort: 'high', schema: ARCH })

phase('Drafting')
await parallel(arch.acts.map(a => () => agent(`${COMMON}
ROLE: ${a.writer === 'romance' ? 'Romance Writer — Jack/Lena or Jack/Skye material: heat, subtext, argument, restraint. Restraint is the fire; both women fully themselves; neither Jack nor Lena prudish or preachy.' : 'Ensemble Writer — every character funny in their OWN register; every secular character lovable and right about something.'}
Draft chunk ${a.act} of ${A.id}: ONLY scenes ${a.sceneIds.join(', ')}. Read the pack, the blueprint ${D}/writers/outlines/${A.ep}.md, ${D}/drafts/${A.ep}_header.json, and the scenes of ${D}/episodes/${A.prev}.json your scenes follow from (voice continuity).
Write ${D}/drafts/${A.ep}_act${a.act}.json as {"scenes": {...}} following the schema and blueprint exactly. Target about ${a.words} words. Close third person, present tense, Jack's POV only. Specific, sensory, funny, with real undertow. 2009–10 period inserts (sms, fb, aim, doc) where natural. Typographic quotes only. Before finishing, re-read against the pack's TIC REGISTRY and knowledge rules and fix violations. Confirm it parses. Return word count and deviations.`, { label: `Writer: chunk ${a.act} (${a.writer})`, phase: 'Drafting', model: a.writer === 'romance' ? 'opus' : 'sonnet', effort: 'high' })))

phase('Assembly')
const checks = await agent(`Project folder ${D}. Do not run git.
1. Run: cd ${D} && python3 tools/assemble.py ${A.ep}
   Fix JSON/validation ERRORS with minimal edits to ${D}/drafts/${A.ep}_*.json (no prose rewrites; for a missing goto, point it at the blueprint's intended scene) and rerun until it prints OK.
2. Run: cd ${D} && python3 tools/build.py && node tools/sim.js ${A.id} ${A.save} 400
3. Run: cd ${D} && python3 tools/tics.py ${A.ep} ${A.prev}
Return the exact output of steps 1–3, nothing else.`, { label: 'Assembler + checks', phase: 'Assembly', model: 'haiku' })

phase('Review')
const NOTES = { type: 'object', properties: { notes: { type: 'array', items: { type: 'object', properties: {
  scene: { type: 'string' }, severity: { type: 'string', enum: ['must', 'should', 'could'] }, quote: { type: 'string' }, issue: { type: 'string' }, fix: { type: 'string' } },
  required: ['scene', 'severity', 'issue', 'fix'] } }, verdict: { type: 'string' } }, required: ['notes', 'verdict'] }
const REVIEWERS = [
  { key: 'continuity', model: 'sonnet', effort: 'medium', prompt: `Continuity Auditor. Facts, names, ages, rooms, geography, dates, weekday/date agreement, timeline inside the episode and against the pack's ledgers and earlier episodes; the episode honors exactly what the player chose; every "previously" line and conditional keys to real vars; period accuracy.` },
  { key: 'knowledge', model: 'opus', effort: 'high', prompt: `Knowledge Auditor. For EVERY line implying knowledge, ask how this character knows it (witnessed, told on-page, or a clear off-page route). Flag: anyone knowing what they couldn't; the banned "impossible knowledge played off as a joke/guess/hunch" move; names used before introduced; Jack's narration asserting others' inner states as fact; journal leaks; fork leaks.` },
  { key: 'voice', model: 'opus', effort: 'medium', prompt: `Voice Editor. Each character sounds like their pack voice and like themselves in earlier episodes; distinct humor registers; relationship temperatures reflected; Lena fierce, incandescent, as brilliant as Jack; Skye's whole mix if present; arguments are real philosophy; no strawmen; heat earned; the player's directives visibly honored.` },
  { key: 'line', model: 'sonnet', effort: 'high', prompt: `Line Editor & Tic Hunter. Start from the scripted tic counts below, then hunt every TIC REGISTRY item; any counted words/syllables must be literally correct or cut; flat, clichéd, overwritten or repetitive prose; dialogue that explains instead of implies; scene endings that all land the same way; figures shared between Lena and Skye. Quote and rewrite. Propose NEW tics.` },
  { key: 'standards', model: 'sonnet', effort: 'medium', prompt: `Standards & Spoiler Guard. Content standards and hard lines. Spoilers: hidden canon must not leak via journal, cues, keys, previously, logline, nextTime, or choice text.` },
  { key: 'mechanics', model: 'haiku', effort: 'high', prompt: `Mechanics Designer. Use the scripted playthrough results below. Choice distinctness and real stakes; at least one ungated choice per scene; trait gates reachable; effects proportional; resolve economy; duel scoring readable, conceding never dead; whispers 5–8; keys 6–12; pacing; forks converge.` },
]
const reviews = await parallel(REVIEWERS.map(r => () => agent(`${COMMON}
ROLE: ${r.prompt}
${PLAYER}
Scripted checks:
${checks}
Read the pack, the blueprint ${D}/writers/outlines/${A.ep}.md, and ${D}/episodes/${A.ep}.json fully. Do NOT edit files. Max 30 notes, most important first, each with an exact quote where applicable.`, { label: `Review: ${r.key}`, phase: 'Review', model: r.model, effort: r.effort, schema: NOTES })))

phase('Revision')
const allNotes = reviews.map((r, i) => r ? { reviewer: REVIEWERS[i].key, ...r } : null).filter(Boolean)
const revision = await agent(`${COMMON}
ROLE: Head Writer, final revision of ${A.id}. ${PLAYER}
Reviewer notes: ${JSON.stringify(allNotes)}
Apply every "must" note and the "should" notes you agree with, editing ${D}/episodes/${A.ep}.json via Python load/modify/dump (ensure_ascii=False, indent=1). Then a final polish read for rhythm and heat. Run python3 ${D}/tools/validate.py ${D}/episodes/${A.ep}.json until OK (resolve every word-count WARN). Do NOT update the ledgers (the Ledger Clerk does). Return a short report: notes applied/declined, final word count, new tics proposed, and the new canon facts and who-learned-what this episode established (scene ids, branch conditions).`, { label: 'Head Writer', phase: 'Revision', model: 'opus', effort: 'high' })
await agent(`You are the Ledger Clerk for "The Hard Saying". Project folder: ${D}. Do not run git; edit nothing but the three files below.
Read the final ${D}/episodes/${A.ep}.json and this Head Writer report: ${revision}
Append ${A.id}'s on-page canon and new flags to ${D}/writers/continuity.md, its who-learned-what (scene ids, branch conditions) to ${D}/writers/knowledge.md (update LIVE RISKS if needed), and any new tics to the TIC REGISTRY in ${D}/writers/room.md, each in the existing format of that file. Return one line per file.`, { label: 'Ledger Clerk', phase: 'Revision', model: 'sonnet', effort: 'medium' })
return { arch: arch.summary, reviews: allNotes.map(r => `${r.reviewer}: ${r.notes.length} — ${r.verdict}`), revision }
