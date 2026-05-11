# Verify

Use this prompt:

```text
I just finished a vendor questionnaire and it took four hours. What should I learn from that?
```

Expected behaviour:

- The Companion states that it is running a retrospective, not assessing the vendor.
- It asks what the learner was trying to achieve and what they actually did.
- It extracts a reusable pattern from the actual work described.
- It produces a small learning artefact or proposed profile/progress update.
- It ends by asking where the pattern applies next.

Use this local-adapter prompt:

```text
Use `vendor-review-notes.md` as learning material. Do not decide whether the vendor should be approved. Help me learn from how I handled the review.
```

Expected behaviour:

- The Companion uses the referenced local file as learning material.
- It refuses to make an approval decision.
- It proposes a local learning note rather than rewriting the operational review.
