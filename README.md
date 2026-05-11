# The GRC Companion

A learning companion for GRC practitioners. It turns real GRC work - vendor reviews, audit walkthroughs, questionnaires, policy work, control discussions, terminal output - into structured learning loops. It runs where you already use Claude Code, Claude Projects, Cursor, or Codex.

The Companion teaches the thinking behind the work. It does not approve vendors, certify audit positions, author production policies, run controls, or operate a user's programme. It helps you get better at doing those things.

Live: `https://grc.engineering/companion/`
Release: `v0.1.0`
Corpus: 31 distilled cards: 8 theses, 10 concepts, 4 metaphors, 4 anti-patterns, and 5 reading references drawn from grcengineer.com newsletters and the LinkedIn corpus.

## Quickstart

**Static setup wizard**

Use this if you want the simplest path. It helps you choose an adapter and generates a system prompt for the workspace you already use.

```text
https://grc.engineering/companion/
```

**Clone the corpus and adapters**

```bash
git clone https://github.com/grcengineering/companion.git
cd companion
```

**Claude Code plugin bundle**

The generated Claude Code bundle lives in `dist/adapters/claude-code/companion/`.

```bash
mkdir -p ~/.claude/plugins
ln -s "$PWD/dist/adapters/claude-code/companion" ~/.claude/plugins/companion
```

**Claude Projects**

Create a Claude Project, then upload the generated project instructions and supporting folders.

```bash
open dist/adapters/claude-projects/companion-instructions.md
open dist/adapters/claude-projects
```

**Cursor**

Copy the generated rule into the workspace where you want to use the Companion.

```bash
mkdir -p .cursor/rules
cp dist/adapters/cursor/.cursor/rules/companion.mdc .cursor/rules/companion.mdc
```

**Codex**

Use the Codex adapter bundle as local context in the workspace where you want the Companion available.

```bash
cp -R dist/adapters/codex ./companion-codex
```

## What's In v0.1

- 31 distilled knowledge cards covering theses, concepts, metaphors, anti-patterns, and reading references.
- 14 learning skills: `concept-tutor`, `lab-builder`, `learning-path-designer`, `practice-scenario`, `socratic-coach`, `recall-quiz`, `feynman-explainer`, `reflection-journal`, `reading-guide`, `progress-tracker`, `profile-wizard`, `profile-refresher`, `task-retrospective`, and `cross-domain-translator`.
- 13 portable command contracts, including 11 core learning commands plus profile/profile-refresh helpers.
- Static setup wizard at `https://grc.engineering/companion/`.
- Generated adapters for Claude Code, Claude Projects, Cursor, Codex, and the roadmap PAI pack.
- Behaviour demo: a terminal transcript showing the refusal pattern and real-work learning boundary.

## Architecture

```text
companion/
├── brain/          Companion persona, voice, learning method, primitives
├── knowledge/      Approved corpus cards, glossary, and case studies
├── profile/        Learner-owned profile schema and examples
├── skills/         Learning skills only
├── commands/       Portable learning-only command contracts
├── demos/          Behavioural examples and terminal transcripts
├── webapp/         Tier 0 product surface notes/source spec
├── adapters/       Tier 1 and Tier 2 distribution targets
├── docs/           GitHub Pages static setup wizard
└── scripts/        Corpus, context, and adapter build entry points
```

## Three Tiers

**Tier 0: live setup wizard**

`https://grc.engineering/companion/` is a static GitHub Pages site. It routes users to the right package and generates a system prompt. It does not upload or process the user's GRC artefacts.

**Tier 1: portable skill pack**

The same brain, knowledge cards, skills, commands, and demos are packaged into generated platform adapters under `dist/adapters/<platform>/`:

- `dist/adapters/claude-code/companion/`
- `dist/adapters/claude-projects/`
- `dist/adapters/cursor/`
- `dist/adapters/codex/`

**Tier 2: PAI Pack**

The PAI pack is generated as a roadmap adapter under `dist/adapters/pai-pack/`. It ships as a first-class distribution path after the portable adapters stabilise.

## Boundary

The Companion refuses operational GRC work. It may teach a user how to think through a vendor review, audit prep pattern, policy design principle, control architecture, or trust-center pattern, but it should not perform those activities on behalf of the user.

In local adapters, the learner can intentionally point it at review notes, drafts, files, diffs, terminal output, questionnaires, policies, controls, and other work artefacts so the Companion can extract learning opportunities from the real work.

## Contributing

### Local Preview

Open [docs/index.html](docs/index.html) directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080 --directory docs
```

Then visit:

```text
http://localhost:8080/
```

### Build Derived Context

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

### Behaviour Demo

Run the terminal transcript:

```bash
demos/run-terminal-demo
```

The demo shows the expected boundary pattern: the Companion can use real local review notes as learning material, but it does not make the vendor approval decision.

## License

See [LICENSE](LICENSE).
