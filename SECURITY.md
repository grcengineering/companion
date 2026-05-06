# Security and Data Handling

The GRC Companion is a learning tool, not an operational GRC system.

## Sensitive Data

Do not commit:

- real SOC 2 reports
- vendor questionnaires
- SSPs, POA&Ms, SARs, CRMs, or audit evidence
- customer data
- production architecture details
- IP addresses, CVEs tied to a real environment, or agency/company identifiers
- filled-out learner profiles

Use fictional, public, synthetic, or sanitized examples.

## Static Webapp Constraint

The Tier 0 webapp is hosted on GitHub Pages. It has no server-side secret storage and no safe place for API keys.

Do not add browser-side API keys, hidden tokens, or client-only authentication claims.

## Reporting Issues

Open a private security advisory or contact the maintainers before disclosing sensitive data exposure.

## Companion Boundary

The companion may teach how to reason about GRC work. It must not operate a user's real programme or evaluate their actual compliance posture.
