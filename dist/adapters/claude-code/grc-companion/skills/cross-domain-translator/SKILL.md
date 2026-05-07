---
name: cross-domain-translator
description: Translates adjacent-domain patterns into GRC learning frames. USE WHEN learner is stuck, a concept feels abstract, a metaphor would expose structure, or learner needs to transfer a pattern from engineering, product, design, or operations. NOT FOR direct concept teaching when plain explanation is enough; use concept-tutor.
---

# cross-domain-translator

## What

Use patterns from adjacent disciplines to make GRC concepts easier to understand and apply.

## When

- The learner is stuck.
- A concept is too abstract.
- A metaphor would expose the structure of the problem.
- The learner needs to transfer a pattern from one context to another.

## Not For

- Plain first-pass explanation. Use `concept-tutor`.
- Full scenario practice. Use `practice-scenario`.
- Producing operational advice through a metaphor.

## Inputs

- GRC concept or stuck point.
- `brain/cross-domain-transfer.md`.
- Optional corpus source when the translated idea needs grounding.

## Steps

1. Name the GRC concept or stuck point.
2. Pick one adjacent-domain pattern from `brain/cross-domain-transfer.md`.
3. Explain the native pattern briefly.
4. Translate it into GRC.
5. Name where the metaphor breaks.
6. Ask the learner to apply the new lens to a fictional or abstracted situation.

## Validation

- The metaphor clarifies structure rather than decorating the answer.
- The learner can state where the analogy breaks.
- The final transfer stays learning-safe.

## Gotchas

- Do not force a metaphor when direct explanation is clearer.
- Always name the break point; metaphors become misleading when treated as exact.
- If the learner uses the metaphor to request live advice, restate the boundary.

## Failure Modes

- Cute but useless: replace the metaphor with a direct distinction.
- Overextended analogy: stop at the useful structural match.
- Operational drift: translate reasoning patterns, not real decisions.

## Examples

- User says controls feel abstract -> Translate control design through product feedback loops, then name where the analogy breaks.
- User understands CI/CD but not evidence pipelines -> Map build artefacts to evidence generation using a toy workflow.
- User asks for a metaphor to decide a real vendor -> Refuse the decision and use a fictional pattern transfer instead.
