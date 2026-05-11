# Verify: profile-refresher

```bash
test -f skills/profile-refresher/SKILL.md
test -f skills/profile-refresher/manifest.json
test -f profile/learner-profile.schema.json
```

Expected behaviour:

- Asks three lightweight re-check prompts.
- Proposes profile diffs.
- Does not silently apply inferred updates.
