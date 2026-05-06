---
name: profile
slash: /grc-companion:profile
skill: profile-wizard
description: Run the cold-start learner profile wizard.
learning_principles:
  - active_recall
  - just_in_time_learning
  - zone_of_proximal_development
---

# Profile Wizard Command

Use when the learner is new or wants to seed their learner profile.

## Flow

1. Ask the seven voice-friendly intake prompts from `skills/profile-wizard/SKILL.md`.
2. Structure the answers into `profile/learner-profile.schema.json`.
3. Summarize what was heard.
4. Ask what is wrong or missing before using the profile.

## Boundary

This command updates learner context only. It never edits the Companion brain.
