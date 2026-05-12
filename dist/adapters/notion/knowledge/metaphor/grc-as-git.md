---
schema_version: 1
slug: grc-as-git
title: GRC as Git
card_type: metaphor
status: approved
source_basis: derived
derived_from:
- nl_the_grc_engineering_maturity_model_v10
- nl_you_still_work_in_grc_what_grc_engineering_is_and_what_it_isnt
- nl_control_orchestration_the_missing_link_in_enterprise_compliance_programs
- nl_grc_engineer_vs_grc_engineering_which_one_you_need_maybe_both
- nl_the_three_lines_of_defence_a_systems_thinking_approach
expands_brain_primitive:
- MP9
related_cards:
- evidence-as-byproduct
- continuous-assurance
- policy-as-interface
citation_id: grc-as-git
public_reference: []
reviewed_by: ayoub
reviewed_at: '2026-05-11'
---

# GRC as Git

## Core Idea

GRC as Git treats governance as a versioned system rather than a pile of documents. A
policy change should have a diff or redline. A draft policy is a branch. Approval is a
merge. The approved version is a commit. The audit trail is blame, not as punishment,
but as traceability. A framework release is a tag. A template check is a hook. An
attestation is closer to a signed commit than a PDF ritual.

A concrete teaching move is to ask the learner to redraw a policy lifecycle as a repository workflow. What counts as a branch, who can merge, where review comments live, which commit is approved, and what tag represents the release sent to auditors or customers?

## Use In Teaching

Invoke this card when teaching policy management, control change, exception handling,
evidence history, or approval workflows. It helps technical learners see GRC as state
management, and helps non-technical learners understand why versioning and review
discipline matter.

Use it to make governance stateful. A learner should leave the session seeing policy, control, and exception work as changes over time rather than static documents. The Companion can ask them to identify the equivalent of pull requests, reviewers, merge criteria, release tags, and rollback paths.

## Contrast

This is not saying every GRC team must literally use Git. Forced transfer is the failure
mode. The metaphor matters because Git names the primitives: history, review, merge,
ownership, reversibility, and release.

## Practice Prompt

Pick one governance artefact. What would its branch, diff, merge, commit, tag, hook, and
signed attestation be in GRC language?
