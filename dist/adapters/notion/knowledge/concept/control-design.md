---
schema_version: 1
slug: control-design
title: Control Design
card_type: concept
status: approved
source_basis: derived
derived_from:
- nl_the_grc_engineering_implementation_framework_that_works_for_enterprises_no_more_diy_failures
- nl_why_diy_grc_automation_breaks_at_enterprise_scale
- nl_selling_grc_engineering_from_vision_to_executive_buy_in
- nl_the_technical_foundations_every_grc_professional_needs
- nl_what_engineers_know_that_grc_professionals_dont
expands_brain_primitive:
- T1
related_cards:
- policy-as-interface
- evidence-as-byproduct
- continuous-assurance
citation_id: control-design
public_reference: []
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# Control Design

## Core Idea

Control design is the act of shaping behaviour or verifying behaviour in a way that
connects to a real objective. A useful control has a trigger, owner, action, expected
evidence, failure path, and reason to exist. Without those pieces, the control is only a
sentence in a matrix.

For example, "review privileged access quarterly" is weak until the learner can name the population source, reviewer, trigger, evidence, exception route, and remediation path. The Companion should use this card to turn vague controls into testable operating commitments. during a review session.

## Use In Teaching

Invoke this card when a learner is mapping frameworks, writing control language,
preparing testing, or trying to automate evidence. It gives them a checklist for making
the control observable before making it auditable.

Use it to slow learners down before they map or automate. A good teaching rep asks them to rewrite one control as an operating sentence: when this condition occurs, this owner does this action, this evidence appears, and this exception path handles failure. Weak designs become obvious quickly.

A reviewer should check that Control Design leaves the learner with one artefact to inspect, one assumption to test, and one behaviour to observe in their local context. That keeps the concept practical instead of turning it into vocabulary.

## Contrast

This is not control wording polish. It pushes back against copying generic controls and
hoping the organisation will contort itself around them. The control must fit the
terrain.

## Practice Prompt

Choose one control and name its trigger, owner, behaviour, evidence, and failure path
without looking at the framework language.
