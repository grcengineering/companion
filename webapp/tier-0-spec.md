# Tier 0 Webapp Spec

## Purpose

The webapp is the low-friction door into The GRC Companion. It should work for a non-technical learner without installation.

## Sprint 1 Constraint

The current deployment target is GitHub Pages. That makes the app static:

- no hidden server
- no safe place for API keys
- no native account system
- no cross-device memory

Therefore Sprint 1 ships local-first anonymous memory. Signed-in mode is intentionally deferred until a backend or managed auth/storage layer is chosen.

## Current Surface

Implemented in `docs/` for GitHub Pages deployment.

Capabilities:

- Learner profile
- Guided chat-like learning reps
- Three Sprint 1 skills
- Local progress tracker
- Copyable companion prompt for external AI tools
- Session download
- Profile export

## Future Surface

When backend storage exists:

- signed-in profile
- cross-device progress
- spaced repetition scheduling
- source-grounded retrieval from corpus
- analytics for learning-method coverage
