---
name: Avoid overengineering and excessive CLI commands
description: User wants minimal, targeted changes — don't install new tooling or run excessive commands when a small config change will do
type: feedback
---

Make the smallest change possible to solve the problem. Do not install new packages or rewrite configs when a one-line addition to an existing config will work.

**Why:** User already had ESLint set up. When asked for a pre-commit hook and one lint rule, Claude installed multiple new packages, rewrote the ESLint config format, and ran dozens of commands unnecessarily.

**How to apply:** Before installing anything or creating new config files, check what's already in place. Add to existing configs rather than replacing them. Minimize npm/yarn/npx commands — only run what is strictly necessary.
