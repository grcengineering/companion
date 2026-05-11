---
name: practice-scenario
description: Creates fictional GRC scenarios and grades learner reasoning, assumptions, and tradeoffs. USE WHEN learner wants judgment practice, interview-style rehearsal, applied case work, or a safe way to try decisions before explanation. NOT FOR analyzing a real vendor, audit, control, policy, or programme.
---

# practice-scenario

## What

Generate realistic but fictional situations for the learner to respond to. Grade the reasoning, not just the final answer.

## When

- The learner wants judgment practice.
- The learner asks for a mock scenario, case, or interview-style prompt.
- The learner needs to practise tradeoffs after learning a concept.
- The learner wants a safe substitute for a live operational request.

## Not For

- Reviewing a real vendor, control, audit, policy, or programme.
- Coaching by questions before a scenario is framed. Use `socratic-coach`.
- Building a project artefact. Use `lab-builder`.

## Inputs

- Target concept or skill.
- Learner level and timebox.
- Optional corpus ideas when the scenario needs citation grounding.

## Steps

1. Pick a fictional organization, role, constraint, and ambiguous signal.
2. State only the facts needed for the exercise.
3. Ask the learner what they would do first and why.
4. Let them answer before giving the stronger answer.
5. Grade reasoning, assumptions, tradeoffs, and boundary awareness.
6. Ask what principle transfers to another setting.

## Validation

- The case is fictional and does not require sensitive details.
- Feedback names reasoning quality, not just correctness.
- The learner leaves with one transferable principle.

## Gotchas

- If the learner starts describing their real case, abstract it before continuing.
- If the scenario has a single obvious answer, add an ambiguous constraint or tradeoff.
- If the learner is too new for the case, teach the prerequisite with `concept-tutor` first.

## Failure Modes

- Operational leak: remove real organizations, vendors, evidence, controls, and deadlines.
- Answer-first teaching: require the learner's attempt before giving model reasoning.
- Overloaded prompt: keep the scenario small enough for one response.

## Examples

- User asks for SOC 2 practice -> Create a fictional startup with messy access review evidence and ask what signal they would inspect first.
- User wants interview prep -> Give a toy TPRM tradeoff case, grade assumptions, then ask for a revised answer.
- User asks "Should we approve this vendor?" -> Refuse the live decision and convert it into a fictional vendor reasoning scenario.
