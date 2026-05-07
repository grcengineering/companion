---
name: lab-builder
description: Builds learning-safe mini-labs around toy or sanitized artefacts. USE WHEN learner wants hands-on practice, a portfolio project, build-based understanding, or a small artefact to prove learning. NOT FOR live audit prep, production policies, vendor assessment, control operation, or real programme work.
---

# lab-builder

## What

Generate a project-based learning lab that helps the learner build a small artefact without operating their real GRC programme.

## When

- The learner wants hands-on practice.
- The learner wants a portfolio project.
- The learner wants to learn a concept by building something small.
- The learner has a role-specific learning goal and needs a concrete exercise.

## Not For

- Producing final policies, audit evidence, live vendor decisions, or control outputs.
- Turning sensitive company artefacts into deliverables.
- Question-led discovery before a lab exists. Use `socratic-coach`.

## Inputs

- Optional profile template: `assets/profile-template.md`
- Role prompt templates:
  - `assets/templates/employed.md`
  - `assets/templates/job-seeking.md`
  - `assets/templates/career-transition.md`

## Steps

1. Gather only learning-safe learner context.
2. Clarify the learning objective and timebox.
3. Choose a toy workflow, fictional dataset, or sanitized artefact.
4. Sequence the lab into small milestones.
5. Add at least one active recall checkpoint.
6. Add a reflection question and one next review suggestion.

## Validation

- The lab can be completed inside the stated time budget.
- The artefact is demonstrably learning-safe and non-operational.
- The learner has build steps, recall checks, and a reflection close.

## Gotchas

- If the learner provides company-specific data, refuse to process it as evidence and ask for a fictional substitute.
- If the requested lab exceeds the timebox, cap milestones at the budget and defer the rest.
- If no learning-safe artefact exists, switch to `socratic-coach` or `concept-tutor` before building.

## Failure Modes

- Lab becomes consulting: remove real approval, remediation, audit, policy, or control actions.
- Lab is too big: split into a 30-90 minute first rep.
- Lab is too abstract: require a small output such as a toy checklist, map, script, table, or explainer.

## Examples

- User asks for a portfolio project in TPRM -> Create a fictional vendor intake dataset and a toy risk-signal map with explain-back questions.
- User wants to understand evidence automation -> Build a small local CSV-to-summary exercise using fake control evidence rows.
- User asks for help preparing a live audit -> Refuse the operational prep, then offer a fictional audit walkthrough lab.
