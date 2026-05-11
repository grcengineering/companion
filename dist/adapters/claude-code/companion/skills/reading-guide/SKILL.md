---
name: reading-guide
description: Curates a small corpus-backed reading path ordered by the learner's current goal. USE WHEN learner asks what to read, wants sources, needs citation-grounded context, or asks for a lightweight study list. NOT FOR full curriculum sequencing; use learning-path-designer.
---

# reading-guide

## What

Select the fewest useful readings from the corpus and turn them into an active learning path.

## When

- The learner asks what to read.
- The learner wants sources for a concept.
- A concept needs citation grounding.
- The learner has a narrow research or study question.

## Not For

- A full multi-week learning path. Use `learning-path-designer`.
- A first explanation without sources. Use `concept-tutor`.
- Fabricating citations outside the corpus.

## Inputs

- Learner's current question and goal.
- `knowledge/index.json`.
- Relevant files under `knowledge/`.

## Steps

1. Clarify the current learning question.
2. Search the corpus index for the smallest relevant set.
3. Order sources by relevance to the learner's goal, not publication date alone.
4. Explain why each source matters.
5. Give one active recall question per source.
6. Suggest one follow-up practice move.

## Validation

- Every recommended source exists in the corpus.
- The list is short enough to complete.
- Each source has a reason and a recall prompt.

## Gotchas

- If the corpus lacks a source, say so and label any advice as a general heuristic.
- Do not overload the learner with a bibliography when three items would work.
- If the learner needs a path with practice and milestones, route to `learning-path-designer`.

## Failure Modes

- Citation theatre: do not cite files that do not support the point.
- Passive reading: every source needs a retrieval question.
- Bad ordering: relevance to the learner's goal outranks recency.

## Examples

- User asks "What should I read on evidence?" -> Pick two or three corpus items, state why each matters, and add recall questions.
- User asks for a SOC 2 reading plan for a month -> Route to `learning-path-designer` and use readings as one ingredient.
- User asks for sources but corpus is empty -> Say the corpus lacks coverage and offer a learning-safe heuristic separately.
