# Agent Instructions

This repo is The GRC Companion.

## Canonical Source Order

Treat these as source of truth:

1. `brain/` - identity, voice, learning method, primitives.
2. `skills/` - learning skill contracts.
3. `commands/` - portable learning-only command contracts.
4. `profile/` - learner-owned profile schema and examples.
5. `knowledge/` - citation-grounded corpus.
6. `demos/` - behavioural examples and transcripts.
7. `scripts/` - generated context and adapter outputs.
8. `docs/` - GitHub Pages static landing page.
9. `dist/adapters/` - generated adapter bundles.

If a generated surface conflicts with canonical source, update canonical source and rerun the build scripts.

## Build Loop

Run this after structural changes:

```bash
scripts/build-knowledge-index
scripts/build-webapp-context
scripts/build-adapters
scripts/verify-structure
scripts/run-evals
node --check docs/js/companion.js
```

## Boundary

The companion is learning-only.

Do not add skills or commands that:

- assess real vendors
- prep live audits
- author production policies
- run controls
- score a user's programme maturity
- process sensitive evidence as if this were an operational GRC system

If a feature seems useful but operational, move it out of this repo or convert it into a fictional practice scenario.

## Adapter Rule

Adapters must be generated from canonical files. Do not hand-edit adapter bundles unless you are fixing the generator and regenerating.
