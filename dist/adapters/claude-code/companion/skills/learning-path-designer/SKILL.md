---
name: learning-path-designer
description: Designs a custom learning path based on role, gaps, goals, and time available. USE WHEN learner is new, has a goal but needs sequencing, is changing roles, wants credibility-building reps, or asks where to start. NOT FOR curating sources only; use reading-guide.
---

# learning-path-designer

## What

Sequence the learner's next few reps. The output is a learning path, not a programme plan.

## When

- The learner is new and does not know where to start.
- The learner has a target role, task, or credibility goal but needs sequencing.
- The learner is changing roles or trying to build confidence.
- The learner asks for a curriculum, roadmap, or next steps.

## Not For

- A corpus reading list without practice. Use `reading-guide`.
- A hands-on lab spec. Use `lab-builder`.
- Operational maturity planning or control remediation.

## Inputs

- Role or target role.
- Current level and known gaps.
- Goal and time available.
- Optional learner profile from `profile/`.

## Steps

1. Ask for role, current skill level, goal, and weekly timebox.
2. Ask one retrieval question: "What do you already understand about this area?"
3. Identify the next three milestones, each one step harder than the current level.
4. Mix concept study, practice scenario, small build, recall, and reflection.
5. Assign one small artefact per milestone.
6. Add a spaced review prompt.

## Validation

- The path has exactly enough scope for the timebox.
- Each milestone has a visible learning artefact.
- The learner knows what to do first without needing a menu of skills.

## Gotchas

- If the learner asks for a 90-day operational programme plan, convert it into a 90-day learning plan.
- If the goal is vague, propose a short diagnostic question before sequencing.
- If the learner has too little time, reduce milestone depth instead of creating a heroic schedule.

## Failure Modes

- Path is too generic: anchor each step to the learner's role or target role.
- Path is too passive: add practice, build, or explain-back reps.
- Path becomes advice: remove live programme actions and use fictional or sanitized practice.

## Examples

- User asks "I am new to TPRM, where do I start?" -> Ask current understanding, then create three milestones covering concepts, a fictional review scenario, and recall.
- User wants to move from IT audit to GRC engineering -> Sequence control ownership, evidence pipelines, policy-as-code concepts, and a toy build.
- User has four hours this week -> Produce one small milestone, one reading, one recall check, and one reflection prompt.
