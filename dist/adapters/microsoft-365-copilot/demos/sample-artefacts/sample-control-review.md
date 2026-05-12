---
artefact_type: control_review
synthetic: true
intended_learning_moves: [task-retrospective, concept-tutor]
---

▎ Synthetic artefact. This file is fictional. Use it with /companion:retro to practise without bringing real work.

# Sample Quarterly Access Review Notes

Control: Quarterly review of privileged production access.

Period: Q1.

Evidence collected:

- Export from identity provider for production admin groups.
- Ticket showing the review was launched on March 28.
- Manager approvals from Engineering, Data, and Infrastructure.
- Screenshot showing removal of two inactive administrator accounts.
- Pull request that updated the access review runbook.

Healthy signal:

The review found two stale admin accounts and removed both within two business days. The Infrastructure manager added a note explaining why the accounts existed and how the team will prevent recurrence.

Gap:

One temporary exception remained open for a database migration contractor. The reviewer wrote "approved by Sarah in Slack" but did not link the approval, capture the channel, or record an expiry date.

Open question:

The Data team approved access for one service account without confirming whether the account is still used. The account has not authenticated in 96 days.

Suggested next action:

Update the access review checklist with fields for exception approver, evidence link, expiry date, and service account usage signal.
