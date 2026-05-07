# The GRC Companion

A learning companion for GRC practitioners, built from the original GRC Engineering Lab Builder.

The companion helps users learn, practise, and internalise GRC engineering thinking from both synthetic labs and their actual day-to-day GRC work. In local adapters, the learner can intentionally point it at review notes, drafts, files, diffs, terminal output, questionnaires, policies, controls, and other work artefacts so the Companion can extract learning opportunities.

It is not an operational GRC decision-maker: it does not approve vendors, certify audit positions, author final production policies, run controls, or operate a user's programme. It helps the practitioner get better at doing those things.

## Public Surface

Target URL:

```text
https://grc.engineering/companion/
```

Legacy project-site URL:

```text
https://grc.engineering/grc-companion/
```

Because this is hosted on GitHub Pages, the public website stays static. It is an installer and orientation wizard, not the Companion runtime.

## Architecture

```text
grc-companion/
├── brain/          Companion persona, voice, learning method, primitives
├── knowledge/      Structured corpus and case studies for citation grounding
├── profile/        Learner-owned profile schema and examples
├── skills/         Learning skills only
├── commands/       Portable learning-only command contracts
├── demos/          Behavioural examples and terminal transcripts
├── webapp/         Tier 0 product surface notes/source spec
├── adapters/       Tier 1 and Tier 2 distribution targets
├── docs/           GitHub Pages deployable static landing page
└── scripts/        Corpus and adapter build entry points
```

## Tiers

**Tier 0: Static Setup Wizard**

The first shipped surface. Static and GitHub Pages-compatible. It helps a learner pick Claude Code, Claude Projects, Cursor, Codex, or the raw files, then generates setup instructions and a system prompt.

**Tier 1: Portable Skill Pack**

Platform-specific adapters: Claude Code, Codex, Cursor, and Claude Projects.

**Tier 2: PAI Pack**

Roadmap. Ships only after Tier 0 has active learners and Tier 1 stabilises.

## Sprint 1 Scope

- Repo restructured around `brain`, `knowledge`, `skills`, `webapp`, and `adapters`
- Companion brain populated with persona, voice, learning method, and primitives
- Existing lab-builder prompts migrated into `skills/lab-builder`
- Profile wizard and refresher skills added for learner-owned context
- SOC 2 parsing example migrated into `knowledge/case-studies`
- Tier 0 static setup wizard scaffolded in `docs`

## Redesign Scope

- Skills are invisible by default through `brain/skill-router.md`.
- `task-retrospective` extracts learning from work the learner already completed.
- `cross-domain-translator` uses adjacent-domain patterns to clarify GRC concepts.
- The website routes users toward the right package and system prompt instead of pretending to run the Companion.
- Local adapters can learn from real local work artefacts the learner intentionally provides; the public website does not upload those artefacts.
- The actual Companion behaviour runs through generated adapters and canonical repo contracts.

Deferred:

- Real signed-in cross-device profile
- Scheduler/reminder infrastructure
- Tier 1 adapters
- Tier 2 PAI Pack
- Operational GRC skills

## Local Preview

Open [docs/index.html](docs/index.html) directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080 --directory docs
```

Then visit:

```text
http://localhost:8080/
```

## Build Derived Context

The canonical files live in `brain/`, `skills/`, `commands/`, and `knowledge/`. Generated surfaces are rebuilt with:

```bash
scripts/build-knowledge-index
scripts/sync-skill-manifests
scripts/build-webapp-context
scripts/build-adapters
scripts/verify-structure
scripts/run-evals
```

Generated outputs:

- `knowledge/index.json`
- `skills/*/manifest.json`
- `docs/data/companion-context.json`
- `dist/adapters/`

## Behaviour Demo

Run the terminal transcript:

```bash
demos/run-terminal-demo
```

The demo shows the expected boundary pattern: the Companion can use real local review notes as learning material, but it does not make the vendor approval decision.

## Non-Goals

The companion refuses operational work. It may teach a user how to think through a vendor review, audit prep pattern, policy design principle, or trust-center architecture, but it should not perform those activities on behalf of the user.
