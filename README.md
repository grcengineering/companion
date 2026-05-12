# The GRC Companion

[![v0.1.0](https://img.shields.io/badge/release-v0.1.0-1d5a57)](https://github.com/grcengineering/companion/releases/tag/v0.1.0)

A learning companion for GRC practitioners. It turns real GRC work into structured learning loops and grounds that work in Ayoub Fandi's GRC engineering corpus.

The public site publishes the knowledge layer. The runtime lives in your local AI workspace.

31 knowledge cards, 14 skills, 9 adapter bundles, 1 sample artefact pack.

Live pages:

- Product page: `https://grc.engineering/companion/`
- Card index: `https://grc.engineering/companion/cards/`
- Install guide: `https://grc.engineering/companion/install.html`
- Roadmap: `https://grc.engineering/companion/roadmap/`

## Quickstart

- Browse the public cards at `https://grc.engineering/companion/cards/`.
- Open the install guide at `https://grc.engineering/companion/install.html`.
- The generated install source lives at `docs/install.html`.
- Claude Code: `dist/adapters/claude-code/companion/`
- Cursor: `dist/adapters/cursor/.cursor/rules/companion.mdc`
- Claude Projects: `dist/adapters/claude-projects/`
- Codex: `dist/adapters/codex/`
- ChatGPT: `dist/adapters/chatgpt/`
- Gemini Gems: `dist/adapters/gemini-gems/`
- Claude Cowork: `dist/adapters/claude-cowork/`
- Notion Custom Agent: `dist/adapters/notion/`
- Microsoft 365 Copilot: `dist/adapters/microsoft-365-copilot/`

## What Ships

- 31 approved knowledge cards: 8 theses, 10 concepts, 4 metaphors, 4 anti-patterns, 5 reading references
- 14 learning skills
- 13 portable command contracts
- A static public site built from the card corpus
- Nine installable adapter bundles: Claude Code, Cursor, Codex, ChatGPT, Claude Projects, Gemini Gems, Claude Cowork, Notion Custom Agent, Microsoft 365 Copilot
- A sample artefact pack with synthetic GRC work for practising without real work

## Public Surface

`docs/` is a static GitHub Pages site. It has three public surfaces:

- `docs/index.html` is the product landing page.
- `docs/cards/index.html` is the filterable card index.
- `docs/cards/<slug>.html` is one public page per approved card.
- `docs/install.html` is the concrete install guide.
- `docs/roadmap.html` is the public roadmap.

The site has no backend. It does not process user artefacts.

## Repository Shape

```text
companion/
├── brain/          Companion persona, voice, learning method, primitives
├── knowledge/      Approved card corpus, glossary, frameworks, case studies
├── profile/        Learner-owned profile schema and examples
├── skills/         Learning skills only
├── commands/       Portable learning-only command contracts
├── demos/          Behavioural examples and transcripts
├── docs/           Generated public card index, card pages, and install guide
├── dist/adapters/  Generated platform bundles
└── scripts/        Build, verification, and corpus utilities
```

## Boundary

The Companion is learning-only.

It can help a user learn from real vendor reviews, audit walkthroughs, policy work, control discussions, and terminal output. It should not approve vendors, certify audit positions, author production policies, run controls, or operate a programme.

## Contributing

Local preview:

```bash
python3 -m http.server 8080 --directory docs
```

Then visit `http://localhost:8080/`.

Build and check loop:

```bash
scripts/build-knowledge-index
scripts/sync-skill-manifests
scripts/build-card-pages
scripts/build-adapters
scripts/verify-structure
scripts/run-evals
```

Generated outputs:

- `knowledge/index.json`
- `docs/cards/*.html`
- `docs/index.html`
- `docs/install.html`
- `docs/data/cards.json`
- `dist/adapters/`

Behaviour demo:

```bash
demos/run-terminal-demo
```

## Roadmap

See `https://grc.engineering/companion/roadmap/` for planned adapters, update mechanisms, Wave 2 corpus work, and install-path demos.

## License

See [LICENSE](LICENSE).
