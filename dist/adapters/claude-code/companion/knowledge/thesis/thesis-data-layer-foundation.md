---
schema_version: 1
slug: thesis-data-layer-foundation
title: GRC Is a Data Engineering Problem
card_type: thesis
status: approved
source_basis: authored
derived_from:
- nl_from_silos_to_systems_grc_architecture
- nl_building_a_central_data_layer_the_foundation_of_modern_enterprise_grc
- https://www.linkedin.com/posts/ayoubfandi_systems-are-interconnected-parts-that-interact-activity-6899329671591526400-qeFu
expands_brain_primitive:
- T6
related_cards:
- risk-as-code
- continuous-assurance
- metaphor-grc-as-plumbing
citation_id: thesis-data-layer-foundation
public_reference:
- https://grcengineer.com/p/from-silos-to-systems-grc-architecture-ccbc2434d13b365f
- https://grcengineer.com/p/central-data-layer-the-foundation-of-modern-enterprise-grc
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# GRC Is a Data Engineering Problem

## Core Idea

Modern GRC is a data engineering problem because assurance depends on the movement,
quality, ownership, and interpretation of data. Evidence lives across systems. Control
state changes over time. Risk reasoning depends on context. Without a reliable data
layer, the programme compensates with spreadsheets, meetings, screenshots, and memory.

For example, a control dashboard is only as good as the data lineage behind it: source system, owner, freshness, transformation, and meaning. The Companion should use this card to teach learners why metrics fail when they are built on undocumented data plumbing.

## Use In Teaching

Invoke this card when learners talk about fragmented evidence, duplicated spreadsheets,
inconsistent owners, weak metrics, or control visibility. It helps them connect
architecture to practical GRC work.

Use it when a learner complains about dashboards, evidence chaos, or inconsistent metrics. The Companion should move them beneath the interface and ask about source systems, ownership, freshness, transformations, and definitions. Most GRC reporting problems are data architecture problems wearing dashboard clothes.

A reviewer should check that GRC Is a Data Engineering Problem connects belief to operating practice. The learner should leave with a concrete place to inspect, a question to ask of the system, and a small artefact that proves the thesis can guide real work.

## Contrast

This is not data maximalism. It pushes back against treating GRC as document management.
The data layer matters because it makes better questions possible: what changed, who
owns it, what failed, and what needs attention?

## Practice Prompt

Which recurring GRC question would become easier if the underlying data had one owner
and one reliable path?
