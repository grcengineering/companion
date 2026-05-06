# Verify: profile-wizard

```bash
test -f skills/profile-wizard/SKILL.md
test -f skills/profile-wizard/manifest.json
test -f profile/learner-profile.schema.json
```

Expected behaviour:

- Asks seven voice-friendly prompts.
- Summarizes before first use.
- Does not request sensitive company or vendor details.
