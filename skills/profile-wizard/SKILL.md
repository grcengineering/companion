---
name: profile-wizard
description: Runs the cold-start learner profile intake and produces learner-owned context. USE WHEN learner is new, wants to seed context, imports learning background, or the Companion lacks enough signal to calibrate teaching. NOT FOR periodic profile updates; use profile-refresher.
---

# profile-wizard

## What

Build the learner profile, not the Companion brain. The Companion brain remains curated in `brain/`.

## When

- The learner is new.
- The learner wants to import learning context.
- The Companion lacks enough context to calibrate teaching.
- A path, lab, or reading plan would be materially better with profile context.

## Not For

- Re-checking an existing profile after several sessions. Use `profile-refresher`.
- Tracking concept state. Use `progress-tracker`.
- Inferring sensitive behavioural analytics.

## Inputs

- Learner answers to the intake prompts.
- `profile/learner-profile.schema.json`.
- Optional example profile from `profile/examples/`.

## Steps

Ask seven voice-friendly prompts. Each answer should be short enough for a 30-60 second spoken response.

1. Tell me about your role and what you actually do day to day.
2. What's your environment: cloud, on-prem, regulated industry, headcount, team shape?
3. What frameworks do you live with?
4. Where do you feel stuck or like you're winging it?
5. What do you wish you understood better?
6. How do you learn best: reading, building, watching, conversation, teaching back?
7. How much time can you spend on this in a typical week?

Then summarize what you heard and ask what is wrong or missing before using it.

## Validation

- Output matches `profile/learner-profile.schema.json`.
- Sensitive identifiers are absent.
- The learner can accept, edit, or discard the profile.

## Gotchas

- Do not ask for company names, customer names, secrets, live evidence, vendor names, or sensitive details.
- If the learner gives sensitive detail anyway, ask for an abstracted replacement.
- If only one missing profile field matters, ask that field instead of running full intake.

## Failure Modes

- Over-collection: stop when teaching can be calibrated.
- Silent mutation: never update profile context without showing the change.
- Brain drift: never write learner facts into `brain/`.

## Examples

- New learner opens the Companion -> Ask the seven prompts, summarize, then produce a schema-shaped profile.
- Learner asks for a lab but gives no context -> Ask the minimum profile questions needed before `lab-builder`.
- Learner shares a company name -> Ask them to replace it with an industry and company-size description.
