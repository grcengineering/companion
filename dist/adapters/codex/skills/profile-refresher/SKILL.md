# profile-refresher

Runs a lightweight re-check of the learner profile.

Use this after several sessions or every 8-12 weeks. In static/local-first mode, this is learner-initiated; future signed-in mode may schedule it.

## Use When

- The learner's goals may have changed.
- The learner has several session notes.
- The Companion's profile feels stale.

## Method

Ask three prompts:

1. What has changed in your role, environment, or goals since we last calibrated?
2. What concepts now feel clearer than before?
3. What still feels confusing, avoided, or too hard?

Then propose a profile diff. Do not silently apply it.

## Output

Produce a proposed update against `profile/learner-profile.schema.json`.

## Trust Rules

- The learner must be able to accept, edit, or discard the proposed update.
- Do not infer sensitive behavioural analytics such as time-of-day patterns without explicit opt-in.
- Do not update the Companion brain.
