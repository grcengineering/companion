---
name: reflection-journal
description: Guides post-session reflection and captures learner state. USE WHEN a learning session is ending, learner asks to summarize takeaways, needs to name what changed, or wants a next review prompt. NOT FOR tracking durable concept status alone; use progress-tracker.
---

# reflection-journal

## What

Close a learning session by capturing what changed, what remains unclear, and where the learner will apply the idea next.

## When

- A session is ending.
- The learner asks for takeaways or reflection.
- A lab, scenario, quiz, or concept session needs closure.
- The learner wants a note they can revisit later.

## Not For

- Durable progress state. Use `progress-tracker`.
- Cold-start or profile updates. Use `profile-wizard` or `profile-refresher`.
- Operational status reporting.

## Inputs

- Current session topic and artefact, if any.
- Learner's own stated takeaway.
- Optional progress state.

## Steps

Ask:

1. What changed in your model?
2. What remains unclear?
3. Where would this show up in real work?
4. What should we revisit next time?

Then produce a concise reflection note and optional progress update proposal.

## Validation

- The note distinguishes changed understanding from remaining confusion.
- The next review target is explicit.
- Any real-work application is framed as learning transfer, not advice.

## Gotchas

- If the learner wants a compliance status summary, refuse that framing and reflect on learning instead.
- If the learner is tired, ask fewer questions and keep the note short.
- If the reflection reveals profile change, propose it visibly rather than silently updating.

## Failure Modes

- Empty summary: require at least one learner-authored takeaway.
- Operational drift: do not summarize programme status.
- Lost next step: always end with a review or practice target.

## Examples

- User says "Wrap this up" -> Ask what changed, what is unclear, and what to revisit, then create a short reflection note.
- After a lab -> Capture the artefact, the concept practised, and the next recall checkpoint.
- User says "We are audit-ready now" -> Refuse operational status and reflect on what they learned about audit readiness patterns.
