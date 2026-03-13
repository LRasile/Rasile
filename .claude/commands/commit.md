# Commit

Create a git commit for the current changes using the project's commit script.

1. Run `git status` and `git diff` to review all staged and unstaged changes
2. Stage all modified tracked files with `git add -u` (never use `git add -A` to avoid accidentally committing `.env.local`)
3. Write a concise conventional commit message (feat/fix/chore/docs/style/refactor) that describes *why*, not just *what*
4. Run the commit using: `powershell -File git.ps1 -m "<message>"`
5. Show the final `git log --oneline -3` to confirm

Never commit `.env.local` or any file containing secrets.
