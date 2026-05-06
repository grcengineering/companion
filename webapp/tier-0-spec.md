# Tier 0 Static Setup Wizard Spec

## Purpose

The Tier 0 surface is the low-friction door into The GRC Companion. It should explain the Companion clearly, help a learner choose the right adapter, and generate the first setup prompt.

It is not the full Companion product.

## Sprint 1 Constraint

The current deployment target is GitHub Pages. That makes the surface static:

- no hidden server
- no safe place for API keys
- no native account system
- no cross-device memory
- no voice transcription backend

Therefore Sprint 1 ships a static setup wizard, not a simulated chat app.

## Current Surface

Implemented in `docs/` for GitHub Pages deployment.

Capabilities:

- Explain the Companion's learning-only boundary.
- Ask where the learner wants to use the Companion.
- Ask what the learner is working on, trying to figure out, or learning from.
- Generate adapter-specific setup instructions.
- Generate a first prompt that uses the invisible skill router.
- Show a terminal behaviour demo.
- Link to portable adapter paths.

## Future Surface

When backend storage exists:

- signed-in profile
- cross-device progress
- visible profile diffs
- optional voice-to-text intake
- spaced repetition scheduling
- source-grounded retrieval from corpus
- analytics for learning-method coverage
