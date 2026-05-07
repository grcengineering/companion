---
name: profile-refresher
description: Runs a lightweight re-check of an existing learner profile and proposes a visible diff. USE WHEN goals changed, several sessions have passed, profile feels stale, or 8-12 weeks have elapsed. NOT FOR cold-start intake; use profile-wizard.
---

# profile-refresher

## What

Refresh learner-owned profile context after meaningful learning or role changes. In static/local-first mode this is learner-initiated; future signed-in mode may schedule it.

## When

- The learner's goals may have changed.
- The learner has several session notes.
- The Companion's profile feels stale.
- A path or lab is miscalibrated because context changed.

## Not For

- First profile creation. Use `profile-wizard`.
- Tracking concept status. Use `progress-tracker`.
- Updating the Companion brain.

## Inputs

- Current learner profile.
- Recent session notes or learner-provided summary.
- `profile/learner-profile.schema.json`.

## Steps

Ask three prompts:

1. What has changed in your role, environment, or goals since we last calibrated?
2. What concepts now feel clearer than before?
3. What still feels confusing, avoided, or too hard?

Then propose a profile diff. Do not silently apply it.

## Validation

- The update is expressed as a visible diff.
- The learner can accept, edit, or discard it.
- Changed fields still match the schema and contain no sensitive identifiers.

## Gotchas

- If the learner has no existing profile, route to `profile-wizard`.
- Do not infer sensitive behavioural analytics such as time-of-day patterns without explicit opt-in.
- If only progress changed, update progress state rather than profile identity.

## Failure Modes

- Silent profile mutation: always show the diff.
- Overfitting from one session: mark uncertain updates as tentative.
- Brain drift: never update files under `brain/`.

## Examples

- Learner says their goals changed from audit to GRC engineering -> Ask the three refresh prompts and propose a goal diff.
- Learner says the Companion keeps over-explaining basics -> Update current level and known concepts, pending approval.
- Learner says "I learned vendor review this week" -> Route concept status to `progress-tracker`, not profile identity.
