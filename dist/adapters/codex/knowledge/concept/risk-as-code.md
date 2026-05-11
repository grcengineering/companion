---
schema_version: 1
slug: risk-as-code
title: Risk as Code
card_type: concept
status: approved
source_basis: derived
derived_from:
- nl_the_grc_engineering_implementation_framework_that_works_for_enterprises_no_more_diy_failures
- nl_the_technical_foundations_every_grc_professional_needs
- nl_risk_registers_reimagined_from_static_inventories_to_action_engines
- nl_the_grc_engineering_maturity_model_v10
- nl_vibe_coding_for_grc_engineering_a_practitioners_guide
expands_brain_primitive:
- T6
- T5
related_cards:
- tool-first-automation
- control-design
- compliance-theatre
citation_id: risk-as-code
public_reference: []
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# Risk as Code

## Core Idea

Risk as code means making risk assumptions explicit enough that they can be inspected,
challenged, versioned, and reused. It is less about turning judgement into Python and
more about refusing to hide judgement inside vague heat maps or inherited scoring
rituals.

A concrete example is a risk rating whose assumptions are written as explicit factors: asset exposure, exploitability, business impact, control strength, and confidence. The learner can then debate the factors instead of arguing over whether "high" feels too dramatic. during a review session.

## Use In Teaching

Invoke this card when learners discuss risk matrices, risk quantification, automation,
FAIR, scoring, or risk registers. It helps them ask what assumptions are being encoded
and who can challenge them.

Use it to expose hidden assumptions in risk work. The Companion can ask the learner to turn one risk rating into explicit variables, confidence levels, and decision rules. Once the reasoning is visible, the learner can improve the model instead of defending a colour.

A reviewer should check that Risk as Code leaves the learner with one artefact to inspect, one assumption to test, and one behaviour to observe in their local context. That keeps the concept practical instead of turning it into vocabulary.

## Contrast

This is not pretending risk is perfectly computable. It pushes back against both
spreadsheet mysticism and fake precision. The goal is traceable reasoning, not
decorative numbers.

## Practice Prompt

What is one risk score in your programme whose assumptions could be written down and
tested like logic?
