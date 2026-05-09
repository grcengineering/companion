# Scripts

Scripts:

- `build-knowledge-index` - build `knowledge/index.json` from markdown corpus files.
- `sync-skill-manifests` - sync compatibility manifests from `SKILL.md` frontmatter.
- `build-webapp-context` - build `docs/data/companion-context.json` from `brain/`, `skills/`, `commands/`, and `knowledge/index.json`.
- `build-adapters` - emit platform-specific bundles from canonical source files into `dist/adapters/`.
- `extract-candidates` - normalize private newsletter and LinkedIn corpus exports into `_candidates/candidates.jsonl`.
- `draft-briefs` - cluster extracted candidates and emit one private YAML brief per recurring idea into `_briefs/`.
- `verify-structure` - enforce the source-of-truth contract.
- `run-evals` - run lightweight identity, boundary, learning-method, and source-of-truth checks.

Planned scripts:

- `ingest-newsletters` - promote approved briefs/cards into structured corpus files.
- `ingest-linkedin` - promote approved briefs/cards into structured corpus files.

Run the full structural build/check loop:

```bash
scripts/build-knowledge-index
scripts/sync-skill-manifests
scripts/build-webapp-context
scripts/build-adapters
scripts/verify-structure
scripts/run-evals
```

Run the private corpus distillation pass:

```bash
scripts/extract-candidates
scripts/draft-briefs
```

The distillation scripts read from:

- `~/.claude/skills/GRC_CONTENT/Data/newsletters.jsonl`
- `~/.claude/skills/GRC_CONTENT/Data/linkedin-posts-historical-corpus.json`
- `~/.claude/skills/GRC_CONTENT/Data/linkedin-posts.jsonl`

They write only private, gitignored review artifacts:

- `_candidates/candidates.jsonl`
- `_briefs/<brief-id>.yaml`

Briefs are not cards. They are review packets with proposed type, title, slug, source evidence, recurring phrases, suggested brain primitive, why it matters, and related-card suggestions.
