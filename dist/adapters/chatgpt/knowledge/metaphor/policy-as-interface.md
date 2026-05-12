---
schema_version: 1
slug: policy-as-interface
title: Policy as Interface
card_type: metaphor
status: approved
source_basis: derived
derived_from:
- nl_the_grc_engineering_implementation_framework_that_works_for_enterprises_no_more_diy_failures
- nl_what_engineers_know_that_grc_professionals_dont
- nl_vibe_coding_for_grc_engineering_a_practitioners_guide
- nl_signal_vs_noise_the_mental_model_that_transforms_grc_effectiveness
- nl_control_orchestration_the_missing_link_in_enterprise_compliance_programs
expands_brain_primitive:
- MP10
related_cards:
- human-api
- framework-translation
- control-design
citation_id: policy-as-interface
public_reference: []
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# Policy as Interface

## Core Idea

A policy is an interface between intent and behaviour. It should help a person or system
know what to do, why it matters, where the boundary is, and how exceptions are handled.
When a policy only exists as static text, it may state intent without changing the
operating surface.

For example, an exception policy should tell a user what input is required, who reviews it, what decision can be made, how long it lasts, and what happens when it expires. The teaching consequence is to test policy by use, not by word count.

## Use In Teaching

Invoke this card when teaching policy design, standards, procedures, exceptions, or
control mapping. It is useful when a learner wants to write more policy but has not
tested whether the current policy helps people make decisions.

Use it to test policies through user behaviour. Ask the learner what someone is supposed to do after reading the policy, what input they need, where they go next, and what happens when the policy does not fit reality. That turns policy review into interface testing.

A reviewer should check that Policy as Interface transfers structure, not decoration. The learner should be able to map the metaphor back to a real GRC artefact, owner, signal, or decision, then name where the analogy stops being useful.

## Contrast

This is not policy-as-decoration and not policy-as-code maximalism. It pushes back
against policies that are legally tidy but operationally inert, and against encoding
policy before understanding the human workflow.

## Practice Prompt

Where does one of your policies behave like a broken interface: unclear inputs, hidden
assumptions, no feedback, or confusing exceptions?
