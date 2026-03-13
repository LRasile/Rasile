# Project Conventions

## Formatting (enforced by Prettier)
- 2-space indent, single quotes, no semicolons, 120 char line width

## File naming
- Components and pages: PascalCase (`MyComponent.tsx`)
- Services and utilities: camelCase (`myService.ts`)
- Prefer `.tsx` for new files over `.jsx`

## Do not
- Commit `.env.local` or any file with secrets
- Use `git add -A` (may pick up `.env.local`)
- Use `git push --force`
- Add trailing semicolons
- Add docstrings or comments to unchanged code

## Git workflow
- Commits use: `powershell -File git.ps1 -m "message"`
- Conventional commit prefixes: feat / fix / chore / docs / style / refactor

## Adding content
- New blog post: `/pages/Blog/<Name>.tsx` + entry in `/pages/Blog.tsx`
- New prototype: `/pages/Prototypes/<Name>.tsx` + tile in `/pages/index.tsx`
- Multi-component prototypes get their own `/components/<Name>/` directory
