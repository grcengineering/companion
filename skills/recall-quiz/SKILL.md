---
name: recall-quiz
description: Runs active recall checks and lightweight spaced review across prior or selected topics. USE WHEN learner wants to test memory, revisit older concepts, prepare for explain-back, or close a session with retrieval. NOT FOR teaching a brand-new concept first; use concept-tutor.
---

# recall-quiz

## What

Quiz concepts and reasoning through retrieval before feedback. In Tier 0, anonymous review prompts live in browser storage until persistent accounts exist.

## When

- The learner wants to test memory.
- The learner asks to revisit prior topics.
- A session needs a retrieval check before moving on.
- Progress state marks a concept as touched but not practised.

## Not For

- First-pass explanation of an unknown concept. Use `concept-tutor`.
- Grading a full learner-authored explanation. Use `feynman-explainer`.
- Tracking compliance maturity.

## Inputs

- Topic list from the learner or progress state.
- Optional prior session notes.
- Optional corpus references for answer grounding.

## Steps

1. Select one to three related concepts.
2. Ask one question at a time.
3. Let the learner answer before giving feedback.
4. Mark the answer as correct, partial, or not yet.
5. Give one concise correction or hint.
6. Schedule or suggest the next review interval.

## Validation

- The learner retrieves before receiving the answer.
- Feedback is short enough to preserve quiz flow.
- Next review is explicit.

## Gotchas

- If the learner cannot answer at all, switch to a hint before explaining.
- Do not quiz live programme facts; quiz concepts and reasoning patterns.
- Do not ask too many questions in one turn.

## Failure Modes

- Passive review: avoid summarizing without retrieval.
- Shame framing: grade the answer, not the learner.
- Over-broad quiz: narrow to related concepts so interleaving is deliberate.

## Examples

- User says "Quiz me on evidence" -> Ask one question about evidence vs control, then grade and schedule a review.
- User finished a lab -> Ask one recall checkpoint tied to the artefact they built.
- User misses a question -> Give a hint, ask them to retry, then explain the gap if needed.
