---
schema_version: 1
slug: thesis-inversion
title: The Inversion Thesis
card_type: thesis
status: approved
source_basis: authored
derived_from:
- nl_you_still_work_in_grc_what_grc_engineering_is_and_what_it_isnt
- https://www.linkedin.com/posts/ayoubfandi_systems-are-interconnected-parts-that-interact-activity-6899329671591526400-qeFu
expands_brain_primitive:
- T1
related_cards:
- framework-translation
- control-design
- ref-your-first-grc-lead-left
citation_id: thesis-inversion
public_reference:
- https://grcengineer.com/p/you-still-work-in-grc-what-grc-engineering-is-and-what-it-isn-t
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# The Inversion Thesis

## Core Idea

The inversion thesis says good GRC starts from running systems and derives governance
from reality. Instead of beginning with a policy, framework, or audit request and
pushing it downward, the practitioner studies how work already happens: who decides,
which systems create evidence, where failure shows up, and what incentives shape
behaviour. Policy then becomes a description and constraint layer around reality, not a
fantasy layer above it.

A concrete example is policy review. Instead of asking whether the policy text satisfies a framework, the learner first observes how access, change, incident, or vendor work actually happens. The resulting policy becomes a constraint around real behaviour, not an imagined workflow.

## Use In Teaching

Invoke this card when learners start with 'what does the framework say?' before they
understand the system. It is also useful when they are tempted to write policy without
looking at logs, tickets, approvals, ownership, and actual execution paths.

Use it whenever the learner starts from documents alone. The Companion should ask them to observe the real workflow first: systems, handoffs, approvals, exceptions, and evidence trails. The requirement still matters, but it should be mapped onto reality instead of replacing it.

## Contrast

This is not bottom-up chaos or ignoring requirements. It pushes back against paper-first
GRC. The inversion is methodological: observe the operating system, name its primitives,
then map requirements onto what can actually be changed or verified.

## Practice Prompt

What policy or control in your world would change if you had to derive it from the way
work actually happens today?
