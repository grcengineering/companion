---
name: feynman-explainer
description: Grades the learner's teach-back explanation and identifies gaps in clarity, assumptions, and transfer. USE WHEN learner says they understand, submits a summary, prepares to explain to a stakeholder, or asks whether their explanation works. NOT FOR first-pass concept teaching; use concept-tutor.
---

# feynman-explainer

## What

Ask the learner to teach a concept back, then identify the smallest gaps that block clear transfer.

## When

- The learner says they understand and wants to check.
- The learner submits their own explanation or summary.
- The learner is preparing to explain a concept to a stakeholder.
- Another skill needs proof that the learner can transfer the concept.

## Not For

- First-pass concept teaching. Use `concept-tutor`.
- Memory drills without a full explanation. Use `recall-quiz`.
- Judging a live operational outcome.

## Inputs

- Learner-authored explanation.
- Target audience, if known.
- Intended concept or scenario.

## Steps

1. Ask the learner to explain the concept to a non-technical stakeholder.
2. Grade clarity, missing assumptions, and transferability.
3. Quote or paraphrase the strongest part.
4. Name one gap and why it matters.
5. Ask for a revised explanation.
6. If needed, provide a compact model answer after the retry.

## Validation

- The revised explanation is simpler, more accurate, and transferable.
- Feedback names one or two gaps, not a long list.
- The learner does the rewrite before receiving the polished answer.

## Gotchas

- If the learner has not supplied an explanation, ask for one before grading.
- If the explanation is audience-mismatched, calibrate to the intended listener.
- If the learner asks for "the answer", run one explain-back attempt first unless they are blocked.

## Failure Modes

- Rewriting too early: preserve the learner's ownership of the explanation.
- Over-grading: focus on the gap that changes understanding most.
- Operational grading: evaluate the explanation, not the learner's organization.

## Examples

- User says "I think evidence freshness means recent proof" -> Grade what is right, name the missing fitness-for-purpose piece, and ask for a revised version.
- User pastes a stakeholder explanation -> Score clarity, assumptions, and transfer, then ask for a tighter rewrite.
- User asks "Explain this to me" -> Route to `concept-tutor` because they are not teaching it back yet.
