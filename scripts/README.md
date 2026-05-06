# Scripts

Scripts:

- `build-knowledge-index` - build `knowledge/index.json` from markdown corpus files.
- `build-webapp-context` - build `docs/data/companion-context.json` from `brain/`, `skills/`, `commands/`, and `knowledge/index.json`.
- `build-adapters` - emit platform-specific bundles from canonical source files into `dist/adapters/`.
- `verify-structure` - enforce the source-of-truth contract.
- `run-evals` - run lightweight identity, boundary, learning-method, and source-of-truth checks.

Planned scripts:

- `ingest-newsletters` - convert newsletter exports into structured corpus files.
- `ingest-linkedin` - convert LinkedIn JSONL into structured corpus files.

Run the full structural build/check loop:

```bash
scripts/build-knowledge-index
scripts/build-webapp-context
scripts/build-adapters
scripts/verify-structure
scripts/run-evals
```
