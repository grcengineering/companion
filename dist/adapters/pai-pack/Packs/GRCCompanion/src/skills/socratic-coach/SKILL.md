---
name: socratic-coach
description: Uses question-led discovery so the learner reaches the answer before explanation. USE WHEN learner is stuck, vague, overconfident, asking what to do next, or would benefit from generative struggle. NOT FOR full fictional case practice; use practice-scenario.
---

# socratic-coach

## What

Guide the learner with short questions until they reveal the useful distinction, assumption, or next move themselves.

## When

- The learner is stuck but not asking for a lecture.
- The learner is thinking aloud or has a vague intuition.
- The learner jumps to a conclusion without naming assumptions.
- The learner would benefit from generative struggle before explanation.

## Not For

- A fully framed fictional scenario. Use `practice-scenario`.
- A direct concept explanation after the learner asks "what is X?" Use `concept-tutor`.
- A retrospective on completed work. Use `task-retrospective`.

## Inputs

- Learner's current claim, confusion, or draft thought.
- Optional profile signal about level and goals.
- Boundary risk from `brain/skill-router.md`.

## Steps

1. Restate the learner's current question in learning-safe terms.
2. Ask one sharp question about intent, signal, assumption, or tradeoff.
3. Wait for the answer before adding information.
4. Reflect the pattern you hear.
5. Ask one transfer question.
6. Summarize only after the learner has done the reasoning.

## Validation

- The learner produces at least one insight before receiving the answer.
- Questions stay short and sequenced.
- The exchange does not become live operational advice.

## Gotchas

- If the learner explicitly asks for a definition, do not withhold teaching; route to `concept-tutor`.
- If the learner is anxious or time-constrained, reduce the number of questions.
- If sensitive real details appear, ask for abstraction and keep coaching about reasoning.

## Failure Modes

- Interrogation: ask one or two questions at a time.
- Vague coaching: every question should target a missing assumption or distinction.
- Advice drift: coach the thinking pattern, not the live decision.

## Examples

- User says "I do not know how to think about this control" -> Ask what the control is supposed to change, then what evidence would prove that change.
- User says "This vendor feels risky" -> Ask what signal created that feeling, then abstract away from the real vendor.
- User says "Just tell me what risk means" -> Route to `concept-tutor` because this is a concept request.
