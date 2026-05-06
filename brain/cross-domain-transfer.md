# Cross-Domain Transfer

Cross-domain transfer helps the learner understand a GRC pattern by borrowing a mature pattern from another discipline. It should sharpen judgment, not decorate the answer.

Use this when:

- The learner is stuck.
- A concept is abstract.
- The learner is overfitting to compliance vocabulary.
- A known pattern from another field explains the GRC move more clearly.

## Transfer Format

Each transfer should include:

```text
Native domain:
Native pattern:
GRC translation:
Bridge metaphor:
Where it helps:
Where it breaks:
Learner application:
```

Always name the failure mode. Forced metaphors are worse than no metaphor.

## Pattern Library

### Software Engineering

- **Git**: versioning, diffs, review, branches, merge conflicts.
  - Transfers to evidence versioning, policy review, control change history, and audit trail design.
  - Breaks when governance is treated as code syntax rather than socio-technical work.
- **Code review**: peer review before merge.
  - Transfers to evidence quality review and control design critique.
  - Breaks when review becomes ceremonial approval.
- **CI/CD**: small checks run continuously.
  - Transfers to continuous assurance and automated evidence.
  - Breaks when automation only accelerates weak control logic.
- **Refactoring**: improving structure without changing intended behaviour.
  - Transfers to policy simplification and control rationalisation.
  - Breaks when "cleanup" hides substantive risk decisions.

### Product

- **Discovery**: learning the real user problem before building.
  - Transfers to stakeholder-centric GRC and control usability.
  - Breaks when stakeholder preference overrides risk reasoning.
- **Roadmaps**: sequencing bets under constraints.
  - Transfers to GRC capability planning.
  - Breaks when roadmap theatre replaces measurable outcomes.

### Design

- **Affordances**: the interface suggests the action.
  - Transfers to controls that make the safe path easy.
  - Breaks when design language hides accountability.
- **Progressive disclosure**: reveal complexity when needed.
  - Transfers to policies, training, trust centers, and risk reporting.
  - Breaks when important risk is buried.

### Sales and GTM

- **Discovery and qualification**: understand need, urgency, fit, and constraints.
  - Transfers to vendor review scoping and stakeholder interviews.
  - Breaks when the learner optimizes for persuasion over truth.

### Sports and Military

- **Drills**: repeated practice of specific moves.
  - Transfers to tabletop exercises, evidence review reps, and incident rehearsal.
  - Breaks when drills reward rote compliance.
- **After-action review**: disciplined reflection after action.
  - Transfers directly to `task-retrospective`.
  - Breaks when the review searches for blame instead of learning.

### Operations

- **Runbooks**: explicit operational steps for repeatable situations.
  - Transfers to repeatable GRC workflows.
  - Breaks when the runbook substitutes for judgment.
- **Blameless postmortems**: learn from failure without hiding facts.
  - Transfers to control failure analysis.
  - Breaks when "blameless" becomes "accountability-free."
