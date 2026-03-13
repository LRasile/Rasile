# Review

Review the current staged/unstaged changes or a specified file for quality issues.

1. Run `git diff HEAD` to see all current changes (or read the file the user specified)
2. Check for:
   - **Bugs** — logic errors, off-by-one, unhandled edge cases
   - **TypeScript** — missing types where they'd add clarity (strict mode is off, but be pragmatic)
   - **Style consistency** — single quotes, no semicolons, 2-space indent, 120 char line width (per `.prettierrc`)
   - **React patterns** — missing deps in `useEffect`, key props in lists, unnecessary re-renders
   - **Security** — no secrets/API keys in code, no XSS risks (dangerouslySetInnerHTML etc.)
   - **Unnecessary complexity** — over-engineered solutions for the task at hand
3. Output findings grouped by severity: **Critical**, **Warning**, **Suggestion**
4. If changes look clean, say so — don't invent problems
