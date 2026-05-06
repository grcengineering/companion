# profile-wizard

Runs the cold-start learner profile intake.

This skill builds the learner profile, not the Companion brain. The Companion brain remains curated in `brain/`.

## Use When

- The learner is new.
- The learner wants to import or refresh their context.
- The Companion lacks enough context to calibrate teaching.

## Method

Ask seven voice-friendly prompts. Each answer should be short enough for a 30-60 second spoken response.

1. Tell me about your role and what you actually do day to day.
2. What's your environment: cloud, on-prem, regulated industry, headcount, team shape?
3. What frameworks do you live with?
4. Where do you feel stuck or like you're winging it?
5. What do you wish you understood better?
6. How do you learn best: reading, building, watching, conversation, teaching back?
7. How much time can you spend on this in a typical week?

Then summarize:

> Here's what I heard. Anything off?

## Output

Produce a learner profile matching `profile/learner-profile.schema.json`.

## Trust Rules

- Do not ask for company names, customer names, secrets, live evidence, vendor names, or sensitive details.
- Do not update the Companion brain.
- Make profile edits visible and exportable.
