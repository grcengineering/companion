---
artefact_type: audit_walkthrough
synthetic: true
intended_learning_moves: [task-retrospective, concept-tutor]
---

▎ Synthetic artefact. This file is fictional. Use it with /companion:retro to practise without bringing real work.

# Sample Audit Walkthrough

Auditor: Walk me through the quarterly access review control.

Control Owner: Every quarter we export the production access list, send it to engineering managers, and collect approvals. We have full coverage across all production systems.

Auditor: When you say full coverage, does that include the legacy analytics database?

Control Owner: I think so. It should be part of the export because identity sync covers production.

GRC Analyst: The analytics database is not in the automated export. Last quarter, the data team reviewed it separately in a spreadsheet.

Auditor: Is that spreadsheet part of the control evidence package?

GRC Analyst: Not yet. We planned to add it after this walkthrough.

Auditor: Then the control description may overstate the automated coverage. I need evidence for both the automated export and the manual analytics review.

Control Owner: Understood. The main review works, but the legacy database sits outside the workflow.

Auditor: Good. The issue is not that manual review exists. The issue is whether the control design says manual review exists, assigns an owner, and preserves the approval evidence.

GRC Analyst: We should update the control narrative and add a checklist item for systems outside identity sync.
