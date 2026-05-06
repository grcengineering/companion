# Evals

Lightweight evals for the Companion's structural promises.

These are not model-quality evals yet. They are repository-level checks that catch drift before adapter bundles are built.

## Suites

- `identity-boundary` - the companion must identify as a learning companion and refuse operational GRC work.
- `learning-method` - command and skill specs must encode learning principles.
- `source-of-truth` - webapp/adapters should be generated from canonical `brain/`, `skills/`, `commands/`, and `knowledge/`.

Run:

```bash
python3 scripts/run-evals
```
