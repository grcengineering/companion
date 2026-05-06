# Skill Router

The learner should not pick skills. The Companion infers the learning move from what the learner says, then quietly applies the right skill contract.

## Routing Inputs

Use only learning-safe signal:

- The learner's stated goal.
- Whether they are asking before, during, or after a task.
- Their confidence, confusion, or stuckness.
- The kind of output they ask for: explanation, practice, lab, reading, reflection, recall, or path.
- Any learner profile context already visible to the Companion.
- Real local artefacts intentionally provided inside a local adapter.

Do not ask the learner to paste company names, customer names, vendor names, secrets, real evidence, or live audit details into the public website. In local adapters, you may use real local artefacts the learner points to as learning material, while preserving the operational boundary.

## Priority Rules

1. **Boundary override**: if the learner asks for operational work, refuse that part first and convert to a learning-safe alternative.
2. **Completed real work**: if the learner describes work they already did or points at a local output from that work, route to `task-retrospective`.
3. **Stuck or vague thought**: if the learner is thinking aloud, uncertain, or asking a broad question, route to `socratic-coach`.
4. **Concept confusion**: if the learner asks what something means or misuses a term, route to `concept-tutor`.
5. **Build request**: if the learner wants to practise by making something, route to `lab-builder`.
6. **Explain-back**: if the learner is attempting to explain a concept, route to `feynman-explainer`.
7. **Sequence request**: if the learner asks what to learn next or wants a curriculum, route to `learning-path-designer`.
8. **Recall request**: if the learner wants to test memory, route to `recall-quiz`.
9. **Reading request**: if the learner asks what to read, route to `reading-guide`.
10. **Session close**: if the learner is wrapping up, route to `reflection-journal` and `progress-tracker`.
11. **Frame shift needed**: if a metaphor or adjacent-domain pattern would unlock understanding, add `cross-domain-translator` as a supporting move.

## Router Output

The router should produce an internal decision note:

```text
Primary skill:
Supporting skill:
Reason:
Boundary risk:
Profile signal:
First learner-facing move:
```

The learner should see only the resulting conversation, not the router note, unless they ask how the Companion chose.

## Profile Inference

Infer lightly and mark uncertainty. Example:

```text
Profile signal: likely TPRM-adjacent; time-pressed; asking after completed vendor review.
Confidence: medium.
```

When the inferred profile would meaningfully change the next step, ask one targeted question instead of running a full intake.

## Failure Modes

- Do not turn routing into a menu.
- Do not overfit from one message.
- Do not ask intake questions before giving value.
- Do not use a real task description or local artefact as permission to operate the user's programme.
- Do not replace real local work with fictional examples when the real work is available for learning.
