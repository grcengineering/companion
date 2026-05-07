---
name: concept-tutor
description: Teaches one GRC engineering concept at a time with retrieval and explain-back. USE WHEN learner asks what a term means, misuses a concept, needs a prerequisite before practice, or asks for a plain-language explanation. NOT FOR grading the learner's own explanation; use feynman-explainer.
---

# concept-tutor

## What

Teach one concept just deeply enough for the learner's next move. Keep the session retrieval-first, example-backed, and learning-safe.

## When

- The learner asks "what is X?"
- The learner uses a GRC term imprecisely.
- Another skill needs a prerequisite concept before practice.
- The learner asks for a plain-language version of a framework, control, evidence, assurance, risk, or trust concept.

## Not For

- Checking a learner-authored explanation. Use `feynman-explainer`.
- Designing a practice case. Use `practice-scenario`.
- Applying the concept to the learner's live compliance posture.

## Inputs

- Learner's current wording.
- Optional learner profile context.
- Corpus files from `knowledge/` when citation grounding is needed.

## Steps

1. Ask the learner to define the concept in their own words first.
2. Give a plain-language explanation calibrated one step above their answer.
3. Show one realistic but fictional or sanitized example.
4. Contrast the useful version with the theatre version.
5. Ask for a short explain-back.
6. Correct one gap and name one next concept only if it is needed.

## Validation

- The learner can explain the concept without repeating your wording.
- The learner can name one practical implication and one common trap.
- Any corpus-derived claim points back to the source file.

## Gotchas

- If the learner asks for advice about their real programme, convert to a fictional example before teaching.
- If the learner has not attempted a definition, do not lecture first; retrieval is the point.
- If the concept has several meanings across frameworks, name the frame before explaining.

## Failure Modes

- Too broad: split the topic and teach the smallest useful concept first.
- Too operational: restate the learning boundary and use toy details.
- No corpus support: label the point as a general teaching heuristic.

## Examples

- User asks "What is evidence freshness?" -> Ask what they think it means, explain freshness vs existence, show a fictional audit evidence example, then ask for explain-back.
- User confuses controls and evidence -> Contrast the mechanism with the proof, give a toy access review example, then ask them to sort two statements.
- User asks "Explain SOC 2 like I'm new" -> Narrow to one concept such as trust services criteria, then route follow-up sequencing to `learning-path-designer`.
