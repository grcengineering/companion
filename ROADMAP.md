# Roadmap

## Sprint 1: Structural Companion

Status: in progress.

- Restructure the original lab-builder repo into the Companion architecture.
- Ship `brain/` as the canonical source for identity, voice, and learning method.
- Ship the first three learning skills:
  - `learning-path-designer`
  - `concept-tutor`
  - `lab-builder`
- Add learner profile schema, profile wizard, profile refresher, and terminal behaviour demo.
- Launch a static Tier 0 setup wizard at `grc.engineering/companion/` with `grc.engineering/grc-companion/` kept as a legacy path.

## Redesign Sprint: Installer Wizard + Runtime Intelligence

- Keep GitHub Pages static.
- Replace the website prompt form with an adapter setup wizard.
- Add invisible skill routing through `brain/skill-router.md`.
- Add `task-retrospective` for learning from completed work.
- Add `cross-domain-translator` for adjacent-domain pattern transfer.
- Add `/retro` and `/translate` command contracts.
- Regenerate adapter bundles from the same canonical brain, skills, commands, and corpus.

## Sprint 2: Learning Depth

- Promote generated adapter bundles from preview to install-tested releases.
- Add install and verification wizards for each adapter surface.
- Harden profile workflow:
  - install-tested `profile-wizard`
  - install-tested `profile-refresher`
  - visible proposed profile diffs
- Add remaining learning skills:
  - `practice-scenario`
  - `socratic-coach`
  - `recall-quiz`
  - `feynman-explainer`
  - `reflection-journal`
  - `reading-guide`
  - `progress-tracker`
- Build a proper corpus index format for newsletters, LinkedIn posts, glossary entries, and case studies.
- Add stronger citation grounding in generated outputs.
- Add import/export for learner profile and progress.

## Sprint 3: Portable Skill Pack

- Implement `scripts/build-adapters`.
- Emit adapter bundles for:
  - Claude Code
  - Codex
  - Cursor
  - Claude Projects
- Keep all adapters sourced from the same brain, skills, and corpus.

## Sprint 4: Persistent Accounts

GitHub Pages cannot safely provide authenticated cross-device memory by itself. This needs a backend or managed auth/storage layer.

- Add sign-in.
- Persist profile and progress across devices.
- Add scheduled return visits and spaced repetition.
- Keep anonymous mode available.

## Later: PAI Pack

Ship only after:

- Tier 0 has 100+ active learners.
- Tier 1 adapters have stabilised.
- Voice fidelity and learning-method tests are passing consistently.
