# Knowledge Corpus

This folder is the citation-grounded source material for The GRC Companion.

## Structure

- `newsletters/` - structured exports from grcengineer.com.
- `linkedin/` - structured posts from the existing JSONL corpus.
- `frameworks/` - framework reference material used for learning context.
- `glossary/` - plain-language GRC concepts.
- `case-studies/` - anonymised or public examples.
- `research/` - product and learning research that informs the companion experience.

## Corpus Contract

Every corpus item should eventually include:

```yaml
id:
title:
source:
source_url:
published_at:
type:
topics: []
summary:
key_ideas: []
learning_uses: []
```

Sprint 1 keeps this lightweight and file-based. A later sprint should add a generated index for retrieval.
