# Rasile Portfolio Site

Personal portfolio and interactive prototypes site for Leonardo Rasile — full-stack developer specialising in .NET Core, Azure, and React.

**Live site:** https://rasile.vercel.app/

## Stack

- **Next.js** (TypeScript) + React 18
- **Bootstrap CSS** + custom dark theme
- **Apollo Client** (GraphQL / PokéAPI)
- **Axios** (Google Sheets API)
- Deployed on **Vercel**

## Getting Started

```bash
yarn install
yarn dev      # http://localhost:3000
```

### Other commands

```bash
yarn build    # Production build
yarn start    # Start production server
yarn lint     # Run ESLint
```

### Committing

```powershell
.\git.ps1 -m "feat: your message here"
```

Uses conventional commit prefixes: `feat` / `fix` / `chore` / `docs` / `style` / `refactor`

## Environment Variables

Create a `.env.local` file (never commit this):

```
GOOGLE_API_KEY=...       # JungleClears — Google Sheets API
RIOT_API_KEY=...         # MatchHistory — Riot Games API
NEXT_PUBLIC_DEBUG=...    # Client-side debug flag
```

## Project Structure

```
pages/
  index.tsx                    # Home — profile + prototype tiles
  Blog.tsx                     # Blog listing
  Blog/                        # Individual blog posts
  Prototypes/                  # Interactive tools
    PokemonEffectiveness.jsx   # Type calculator (GraphQL / PokéAPI)
    JungleClears.tsx           # LoL jungle route planner (Google Sheets)
    Menu.tsx                   # Recipe tool
    ...
  api/                         # Next.js API routes
components/                    # Reusable React components
lib/                           # Service logic + interfaces
public/
  images/                      # Profile photos, icons, SVGs
  json/Recipes.json            # Static recipe data
styles/                        # Bootstrap + custom CSS modules
```

## Adding Content

### New blog post

1. Create `/pages/Blog/MyPost.tsx`
2. Add a link to it in `/pages/Blog.tsx`

```tsx
import Layout from '../../components/Layout'

export default function MyPost() {
  return (
    <div>
      <h1>Title</h1>
      <b>A summary of what this post is about.</b>
      <p><small>5 mins · 27 Mar 2026</small></p>
      <div style={{ borderTop: '1px solid', margin: '1rem' }}></div>
      <p>Body content...</p>
    </div>
  )
}
```

### New prototype

1. Create `/pages/Prototypes/MyTool.tsx`
2. Add a tile to the grid in `/pages/index.tsx`
3. For multi-component tools, add a `/components/MyTool/` directory
