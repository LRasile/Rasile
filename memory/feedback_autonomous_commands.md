---
name: Run commands autonomously
description: User wants Claude to run npm, git, npx commands without asking for confirmation each time
type: feedback
---

Run npm, git, npx, and yarn commands directly without asking the user to approve each one.

**Why:** User finds it disruptive to be prompted for every shell command during development tasks.

**How to apply:** On this project, execute dev-related commands (git, npm, npx, yarn, lint, build) autonomously. Only pause for truly destructive actions (force push to main, dropping data, etc.).
