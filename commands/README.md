# Commands

Learning-only command specifications for portable adapters.

These are not runtime commands in the static webapp. They are canonical command contracts that `scripts/build-adapters` packages into Claude Code, Codex, Cursor, Claude Projects, and future PAI adapter outputs.

## Contract

Every command must:

- Teach, not operate the learner's programme.
- Name the learning skill it invokes.
- Use at least three principles from `brain/learning-method.md`.
- Convert operational requests into learning-safe retrospectives, real-work learning notes, synthetic labs, or sanitized practice as appropriate.
- End with a reflection or explain-back step.

## Commands

- `concept.md` - teach one concept.
- `lab.md` - design a project-based mini-lab.
- `path.md` - design a learning path.
- `recall.md` - run active recall.
- `reflect.md` - guide reflection.
- `feynman.md` - grade an explain-back.
- `scenario.md` - generate a fictional practice scenario.
- `reading.md` - curate corpus reading.
- `progress.md` - inspect or update learning progress.
- `profile.md` - seed learner-owned profile context.
- `refresh-profile.md` - refresh learner context after signal changes.
- `retro.md` - turn completed work into a learning retrospective.
- `translate.md` - translate adjacent-domain patterns into GRC learning frames.
