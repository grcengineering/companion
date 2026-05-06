# Adapters

Adapters package the same companion brain, corpus, commands, and skills for different environments.

Canonical adapter notes live here:

- `claude-code/`
- `codex/`
- `cursor/`
- `claude-projects/`
- `pai-pack/`

All adapters should be generated from canonical files, not hand-maintained as divergent prompts.

Generated adapter bundles are emitted to `dist/adapters/` by:

```bash
scripts/build-adapters
```
