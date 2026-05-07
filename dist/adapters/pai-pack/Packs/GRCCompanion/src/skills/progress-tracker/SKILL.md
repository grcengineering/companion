---
name: progress-tracker
description: Tracks learning progress across concepts as not covered, touched, practised, or internalised. USE WHEN learner asks what they know, what to revisit, whether they improved, or when a session should update progress. NOT FOR scoring programme maturity or compliance capability.
---

# progress-tracker

## What

Track concepts the learner has not covered, touched, practised, or internalised. Tier 0 stores anonymous progress in browser localStorage; cross-device progress requires a future signed-in backend.

## When

- The learner asks what they have learned.
- The learner asks what to revisit.
- A quiz, lab, scenario, or reflection creates progress signal.
- The Companion needs to schedule a spaced review.

## Not For

- Scoring the learner's organization, programme, or maturity.
- Updating learner identity or goals. Use `profile-refresher`.
- Teaching or quizzing by itself unless paired with `recall-quiz`.

## Inputs

- Current concept list.
- Recent learner answers, artefacts, or reflection notes.
- Existing local progress state, if available.

## Steps

1. Identify the concept or skill being updated.
2. Classify state as not covered, touched, practised, or internalised.
3. Explain the evidence for the classification in one sentence.
4. Suggest one next rep.
5. Add or propose a spaced review prompt.

## Validation

- Progress state is based on observable learning signal.
- No programme maturity or job performance score is implied.
- The next rep is specific.

## Gotchas

- Do not equate confidence with mastery; require retrieval, practice, or transfer evidence.
- If there is no durable storage, return a copyable progress note.
- If the learner asks "am I ready to run this at work?", convert to learning readiness.

## Failure Modes

- False precision: use coarse states, not percentages.
- Operational scoring: track learning only.
- Stale state: propose review rather than assuming internalisation.

## Examples

- User asks "What should I revisit?" -> List touched-but-not-practised concepts and recommend one recall prompt.
- After a correct explain-back -> Move the concept from practised toward internalised with a review date.
- User asks "Is my programme mature?" -> Refuse maturity scoring and offer a learning progress check instead.
