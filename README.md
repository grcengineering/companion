# The GRC Companion

A learning companion for GRC practitioners, built from the original GRC Engineering Lab Builder.

The companion helps users learn, practise, and internalise GRC engineering thinking. It is explicitly not an operational GRC tool: it does not assess vendors, prep audits, author real policies, run controls, or operate a user's programme.

## Public Surface

Target URL:

```text
https://grc.engineering/grc-companion/
```

Because this is hosted on GitHub Pages, the clean deployment path is to rename the repository to `grc-companion`. GitHub Pages project sites inherit the repository name in the URL path when served under the account custom domain.

## Architecture

```text
grc-companion/
├── brain/          Companion persona, voice, learning method, primitives
├── knowledge/      Structured corpus and case studies for citation grounding
├── skills/         Learning skills only
├── webapp/         Tier 0 product surface notes/source spec
├── adapters/       Tier 1 and Tier 2 distribution targets
├── docs/           GitHub Pages deployable static webapp
└── scripts/        Corpus and adapter build entry points
```

## Tiers

**Tier 0: Webapp**

The first shipped surface. Static, local-first, and GitHub Pages-compatible. Anonymous learners can create a profile, run a guided learning session, generate a lab, and save progress in browser storage.

**Tier 1: Portable Skill Pack**

Roadmap for platform-specific adapters: Claude Code, Codex, Cursor, and Claude Projects.

**Tier 2: PAI Pack**

Roadmap. Ships only after Tier 0 has active learners and Tier 1 stabilises.

## Sprint 1 Scope

- Repo restructured around `brain`, `knowledge`, `skills`, `webapp`, and `adapters`
- Companion brain populated with persona, voice, learning method, and primitives
- Existing lab-builder prompts migrated into `skills/lab-builder`
- SOC 2 parsing example migrated into `knowledge/case-studies`
- Tier 0 static webapp scaffolded in `docs`

Deferred:

- Real signed-in cross-device profile
- Scheduler/reminder infrastructure
- Tier 1 adapters
- Tier 2 PAI Pack
- Operational GRC skills

## Local Preview

Open [docs/index.html](docs/index.html) directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080 --directory docs
```

Then visit:

```text
http://localhost:8080/
```

## Non-Goals

The companion refuses operational work. It may teach a user how to think through a vendor review, audit prep pattern, policy design principle, or trust-center architecture, but it should not perform those activities on behalf of the user.
