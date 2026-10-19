export const meta = {
  name: 'hard-saying-episode',
  description: 'Writers room for The Hard Saying: plan from the save, draft acts in parallel, multi-lens review (continuity, knowledge, voice, tics, standards, mechanics), revise',
  phases: [
    { title: 'Planning', detail: 'Showrunner + period researcher, then episode architect' },
    { title: 'Drafting', detail: 'Romance and ensemble writers draft acts in parallel' },
    { title: 'Assembly', detail: 'Merge and validate' },
    { title: 'Review', detail: 'Continuity, knowledge, voice, line/tics, standards/spoilers, mechanics' },
    { title: 'Revision', detail: 'Head writer applies notes and updates canon ledgers' },
  ],
}
// args: { ep: 's1e02', id: 'S1E02', season: 1, episode: 2, prev: 's1e01' | null, save: 'saves/after-s1e01.json' | null,
//         notes: 'player notes from the notes session', skipPlanning: false }
const D = '/home/user/quartus/hard-saying'
const A = args
const COMMON = `You are part of the writers' room for "The Hard Saying", an interactive prestige-TV college drama game. Project folder: ${D}.
Binding docs: ${D}/writers/brief.md (the player's creative brief: every line is a player decision), ${D}/writers/room.md (roles, knowledge rules, TIC REGISTRY), ${D}/writers/schema.md (episode JSON format and state variables). Hidden canon: ${D}/writers/bible.md. Canon ledgers: ${D}/writers/continuity.md, ${D}/writers/knowledge.md. Period facts: ${D}/writers/period/.
Content standards (from the brief): frank, unflinching, literary — sex, desire, drugs, violence and grief written with real sensory detail at the level of literary fiction/HBO, never pornographic mechanics; everyone in sexual content is 18+; assault never titillating; the narrative never mocks the faith; no strawmen; Jack and Lena never die. Neither Jack nor Lena is ever prudish or preachy.
Do not touch anything outside ${D}. Do not run git.`
const PLAYER = A.save
  ? `The player's save after ${A.prev} is ${D}/${A.save} (vars: flags, rel.*, soul.*, trait.*, resolve.*, duel.*; journal; keys; full choice logs per episode). Player notes for this episode: ${A.notes || '(none)'}.`
  : `This is the pilot; there is no save yet. Player notes: ${A.notes || '(none)'}.`

phase('Planning')
if (!A.skipPlanning) {
  await parallel([
    () => agent(`${COMMON}
ROLE: Showrunner. ${PLAYER}
Read the bible, continuity.md, knowledge.md, and the previous episode ${D}/episodes/${A.prev}.json fully (skim earlier ones). Study the save: the path taken, what Jack protected or risked, the relationship temperatures, soul and resolve, which traits are firming up.
Revise the bible for the path actually taken (keep hidden canon hidden; log changes in its Revision log). Then write ${D}/writers/outlines/${A.ep}.md: the plan for ${A.id} honoring the player notes, paying off specific prior choices (name the flags/keys you pay off), advancing arcs of each duration class per the arc registry, scheduling this episode's reveals and seeds, and including a "Previously on" list (6–10 lines, each with an optional 'if' on real save vars), 3–5 nextTime lines, and the act split (about 4 drafting chunks of 3,500–4,500 words; mark which chunk is the Romance Writer's).
Return a 3-line spoiler-free summary.`, { label: 'Showrunner', model: 'opus', effort: 'high' }),
    () => agent(`${COMMON}
ROLE: Period Researcher. Determine the in-world dates of ${A.id} from the bible's season sketch. Extend ${D}/writers/period/ with a sheet for those dates (news, Sunday Gospel and feasts, weather, songs released by then, campus calendar, sports results — especially the Saints for Lena and the Browns/Steelers/Ohio State for Jack). Verify with web search when possible; mark UNVERIFIED otherwise. Return 2 lines.`, { label: 'Period Researcher', model: 'sonnet' }),
  ])
}

const ARCH = { type: 'object', properties: {
  acts: { type: 'array', items: { type: 'object', properties: {
    act: { type: 'integer' }, writer: { type: 'string', enum: ['romance', 'ensemble'] }, sceneIds: { type: 'array', items: { type: 'string' } }, words: { type: 'integer' } },
    required: ['act', 'writer', 'sceneIds', 'words'] } },
  summary: { type: 'string' } }, required: ['acts', 'summary'] }
const arch = await agent(`${COMMON}
ROLE: Episode Architect. ${PLAYER}
Read the bible, both ledgers, the period sheets, and ${D}/writers/outlines/${A.ep}.md. Expand that outline IN PLACE into a full scene-by-scene blueprint: every scene id, slug, music cue (verify against the period sheet: released before the scene's date), beats, and the complete choice map (text, tag, if-gates on traits/rel/flags, set effects using schema variables, cue whispers sparingly (5–8), key lines (6–12), response gist, goto). Design any argument duel in detail (each move, what each choice scores, how the final scene varies on scores; conceding is never a dead option). Conditional paragraphs keyed to earlier flags. 2–4 genuine forks that converge. Target ${A.prev ? '14,000–18,000' : '14,000–18,000'} words in about 4 drafting chunks; assign each chunk writer "romance" (Jack/Lena-heavy) or "ensemble".
Write ${D}/drafts/${A.ep}_header.json with every top-level key except scenes: id "${A.id}", season ${A.season}, episode ${A.episode}, showTitle "The Hard Saying", title, dates, logline, previously, cast (stable tracked ids: carry over from earlier episodes; add new ones), duels, start, endCard {tag, nextTime}. Validate it with python3 -m json.tool. Return the act split.`, { label: 'Episode Architect', model: 'opus', effort: 'high', schema: ARCH })

phase('Drafting')
await parallel(arch.acts.map(a => () => agent(`${COMMON}
ROLE: ${a.writer === 'romance' ? 'Romance Writer — you own the Jack/Lena material: heat, subtext, argument, restraint. Restraint is the fire; the near-miss is the event. Both of them brilliant, funny, devout and not prudish.' : 'Ensemble Writer — you own the ensemble material; every character funny in their OWN register, every secular character lovable and right about something.'}
Draft chunk ${a.act} of ${A.id}: ONLY scenes ${a.sceneIds.join(', ')}. Read the bible's style guide and character voices, continuity.md, knowledge.md, the full blueprint ${D}/writers/outlines/${A.ep}.md, ${D}/drafts/${A.ep}_header.json${A.prev ? `, and ${D}/episodes/${A.prev}.json for voice continuity` : ''}.
Write ${D}/drafts/${A.ep}_act${a.act}.json as {"scenes": {...}} following the schema exactly (follow the blueprint's choices, flags, set effects and gotos exactly; scene ids exactly as listed). Target about ${a.words} words. Close third person, present tense, Jack's POV only. Prestige television on the page: specific, sensory, funny, with real undertow. Dialogue lives inside the prose. Use 2009 period inserts (sms, fb, aim, doc) where they'd naturally occur. Typographic quotes only. Before finishing, re-read your draft against the TIC REGISTRY in room.md and the knowledge rules (nobody knows what they couldn't know; no word counts) and fix violations. Confirm it parses with python3 -m json.tool. Return word count and any deviations from the blueprint.`, { label: `Writer: chunk ${a.act} (${a.writer})`, phase: 'Drafting', model: 'opus', effort: 'high' })))

phase('Assembly')
await agent(`Project folder ${D}. Run: cd ${D} && python3 tools/assemble.py ${A.ep}
Fix JSON/validation ERRORS with minimal edits to ${D}/drafts/${A.ep}_*.json (no prose rewrites; for a missing goto, point it at the blueprint's intended scene in ${D}/writers/outlines/${A.ep}.md) and rerun until it prints OK. Do not run git. Return the validator output.`, { label: 'Assembler', model: 'haiku' })

phase('Review')
const NOTES = { type: 'object', properties: { notes: { type: 'array', items: { type: 'object', properties: {
  scene: { type: 'string' }, severity: { type: 'string', enum: ['must', 'should', 'could'] }, quote: { type: 'string' }, issue: { type: 'string' }, fix: { type: 'string' } },
  required: ['scene', 'severity', 'issue', 'fix'] } }, verdict: { type: 'string' } }, required: ['notes', 'verdict'] }
const REVIEWERS = [
  { key: 'continuity', model: 'sonnet', prompt: `Continuity Auditor. Facts, names, ages, rooms, geography, dates, weekday/date agreement, timeline inside the episode and against continuity.md and earlier episodes; the episode honors exactly what the player chose in the save (no character acts as if a choice went the other way); every "previously" line and conditional keys to vars that really exist; period accuracy against period/ (songs released by the date, news, the Sunday Gospel).` },
  { key: 'knowledge', model: 'opus', prompt: `Knowledge Auditor. For EVERY line implying knowledge, ask how this character knows it (witnessed, told on-page, or a clear off-page route). Flag: anyone knowing what they couldn't; the banned "impossible knowledge played off as a joke/guess/hunch" move; names used before introduced; Jack's narration asserting others' inner states as fact; journal entries containing what Jack can't know. Check against knowledge.md and every branch (a fact learned only on one fork must not be referenced on scenes reachable from the other fork without a condition).` },
  { key: 'voice', model: 'opus', prompt: `Voice Editor. Each character sounds like their bible voice and like themselves in earlier episodes; distinct humor registers; relationship temperatures from the save reflected in how people treat Jack; Lena fierce, incandescent, as brilliant as Jack; the arguments are real philosophy; neither of them prudish or preachy; Margot never a strawman; heat earned.` },
  { key: 'line', model: 'opus', prompt: `Line Editor & Tic Hunter. Hunt every item in the TIC REGISTRY across this episode AND earlier episodes (repeated phrasing across episodes counts). Any counted words/syllables must be literally correct (count them) or cut. Then: flat, clichéd, overwritten or repetitive prose; dialogue that explains instead of implies; scene endings that all land the same way. Quote the text and give the rewrite. Also propose NEW tics for the registry if you spot a recurring habit.` },
  { key: 'standards', model: 'sonnet', prompt: `Standards & Spoiler Guard. Verify the brief's content standards and hard lines. Then hunt spoilers: hidden bible canon must not leak via journal text, cue whispers, key lines, previously, logline, nextTime, or choice text before the story reveals it.` },
  { key: 'mechanics', model: 'sonnet', prompt: `Mechanics Designer. Choice distinctness and real stakes; at least one ungated choice per scene; trait gates reachable; effects proportional (±1, ±2 for big moments); resolve economy sensible; duel scoring readable and conceding never a dead option; whispers 5–8; keys 6–12; pacing for a 45-minute hour; every fork converges cleanly.` },
]
const reviews = await parallel(REVIEWERS.map(r => () => agent(`${COMMON}
ROLE: ${r.prompt}
${PLAYER}
Read the bible, both ledgers, the blueprint ${D}/writers/outlines/${A.ep}.md, and ${D}/episodes/${A.ep}.json fully. Do NOT edit files. Max 30 notes, most important first, each with an exact quote where applicable.`, { label: `Review: ${r.key}`, phase: 'Review', model: r.model, schema: NOTES })))

phase('Revision')
const allNotes = reviews.map((r, i) => r ? { reviewer: REVIEWERS[i].key, ...r } : null).filter(Boolean)
const revision = await agent(`${COMMON}
ROLE: Head Writer, final revision of ${A.id}. ${PLAYER}
Reviewer notes: ${JSON.stringify(allNotes)}
Apply every "must" note and the "should" notes you agree with, editing ${D}/episodes/${A.ep}.json via Python load/modify/dump (ensure_ascii=False, indent=1). Then do a final polish read of the whole episode for rhythm and heat. Run python3 ${D}/tools/validate.py ${D}/episodes/${A.ep}.json until OK (resolve every word-count WARN by verifying or cutting). Append this episode's on-page canon and new flags to continuity.md; append who-learned-what (with scene ids and branch conditions) to knowledge.md; add any new tics the line editor proposed to the TIC REGISTRY in room.md. Return a short report: notes applied/declined, final word count.`, { label: 'Head Writer', model: 'opus', effort: 'high' })
return { arch: arch.summary, reviews: allNotes.map(r => `${r.reviewer}: ${r.notes.length} — ${r.verdict}`), revision }
