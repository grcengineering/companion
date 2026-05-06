# Roadmap

## Sprint 1: Structural Companion

Status: in progress.

- Restructure the original lab-builder repo into the Companion architecture.
- Ship `brain/` as the canonical source for identity, voice, and learning method.
- Ship the first three learning skills:
  - `learning-path-designer`
  - `concept-tutor`
  - `lab-builder`
- Launch a static Tier 0 webapp at `grc.engineering/grc-companion/`.
- Store anonymous learner profile and progress locally in the browser.

## Sprint 2: Learning Depth

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
