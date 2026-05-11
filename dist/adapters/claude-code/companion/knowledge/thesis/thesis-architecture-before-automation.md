---
schema_version: 1
slug: thesis-architecture-before-automation
title: Architecture Before Automation
card_type: thesis
status: approved
source_basis: authored
derived_from:
- nl_engineer_your_grc_process_before_you_automate_it
- https://www.linkedin.com/posts/ayoubfandi_systems-are-interconnected-parts-that-interact-activity-6899329671591526400-qeFu
expands_brain_primitive:
- T2
related_cards:
- tool-first-automation
- enterprise-grc-automation
- ref-engineer-process-before-automate
citation_id: thesis-architecture-before-automation
public_reference:
- https://grcengineer.com/p/engineer-your-grc-process-before-you-automate-it
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# Architecture Before Automation

## Core Idea

Architecture before automation means the process must be understandable before it
becomes faster. A broken control workflow does not become modern because a tool moves
it. The practitioner first identifies the trigger, owner, source of truth, decision,
evidence, exception path, and feedback loop. Only then can automation remove drag rather
than multiply confusion.

For example, automating access review reminders helps only if the population, reviewer, decision criteria, and exception handling are already coherent. The Companion should teach the learner to draw the operating model first, then decide whether a script, workflow, agent, or platform actually helps.

## Use In Teaching

Invoke this card whenever a learner wants to buy a platform, build an agent, or script a
process before describing the operating model. It should precede lab-builder exercises
that involve automation.

Use it as the first checkpoint before any build. The learner should be able to explain the manual process, its failure modes, and its decision points before choosing a tool. If they cannot, the next learning rep is process architecture, not automation design.

A reviewer should check that Architecture Before Automation connects belief to operating practice. The learner should leave with a concrete place to inspect, a question to ask of the system, and a small artefact that proves the thesis can guide real work.

## Contrast

This is not an argument for manual work. It pushes back against the fantasy that
automation supplies architecture. Good tools are accelerants. They make strong processes
scalable and weak processes noisy.

## Practice Prompt

Which process are you trying to automate before you can draw its trigger, owner,
decision, and failure path?
