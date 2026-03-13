# CLAUDE.md — Rasile Portfolio Site

## Project Overview

Personal portfolio and project showcase website for Leonardo Rasile (full-stack developer specializing in .NET Core, Azure, and React). The site is hosted at https://rasile.vercel.app/ and serves as a consulting hub and host for interactive prototypes/tools.

**Stack:** Next.js (v16) + TypeScript + React 18 + Bootstrap CSS

## Development Commands

```bash
yarn dev      # Start dev server (localhost:3000)
yarn build    # Production build
yarn start    # Start production server
yarn lint     # Run ESLint
```

Git commits use a custom PowerShell script:
```powershell
.\git.ps1 -m "commit message"
```

## Project Structure

```
/
├── pages/                    # Next.js file-based routing
│   ├── index.tsx             # Home page with profile and prototype tiles
│   ├── Blog.tsx              # Blog listing
│   ├── Blog/                 # Individual blog posts (TSX files)
│   ├── Prototypes/           # Interactive tools/demos
│   │   ├── JungleClears.tsx         # LoL jungle route planner (Google Sheets API)
│   │   ├── PokemonEffectiveness.jsx # Pokemon type calculator (GraphQL/PokéAPI)
│   │   ├── CardsForBeats.tsx
│   │   ├── LoopHeroSolver.tsx
│   │   ├── Menu.tsx                 # Recipe tool (data from /public/json/Recipes.json)
│   │   ├── Timezones.tsx
│   │   ├── HtmlColors.tsx
│   │   ├── ContractionTimer.tsx
│   │   └── PhpMigration.tsx
│   ├── api/                  # API routes
│   │   ├── employees.tsx     # POST endpoint for employee data validation
│   │   └── mirror.tsx
│   ├── _app.tsx              # App wrapper with Layout
│   └── _document.tsx         # Custom HTML document
├── components/               # Reusable React components
│   ├── Layout.tsx            # Main layout (Header + Footer + children)
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx
│   ├── BuyMeACoffee.tsx
│   ├── ScrollToTopButton.tsx
│   ├── VideoEmbed.tsx
│   ├── CardsForBeats/
│   ├── JungleClears/         # ChampRow.tsx
│   ├── PokemonTypes/         # PokemonTypes.tsx, PokemonEntry.tsx
│   ├── Menu/                 # RecipeCard.tsx
│   └── Timezones/            # CityTime.tsx
├── lib/                      # Service/logic files
│   ├── PokemonService.ts     # Pokemon data parsing + type arrays + interfaces
│   ├── JungleClearService.ts # Google Sheets data parsing
│   ├── CardsForBeatsService.ts
│   ├── JungleClear.ts        # JungleClear interface
│   └── Recipe.ts             # Recipe interface
├── public/
│   ├── bloonsStrats/         # Bloons TD 6 strategy .txt files
│   ├── images/               # Profile photos, game logos, SVG type icons
│   ├── json/Recipes.json     # Recipe data
│   └── logos/                # Favicon and PWA icons
├── styles/                   # CSS files (Bootstrap + custom global + module CSS)
└── .prettierrc               # Code formatting config
```

## Code Conventions

### Formatting (Prettier)
- **Tab width:** 2 spaces
- **Quotes:** Single quotes
- **Line width:** 120 characters
- **Semicolons:** None (no trailing semicolons)

### Naming
- **Components/Interfaces:** PascalCase (`Layout.tsx`, `JungleClear`)
- **Functions/variables:** camelCase (`parseDataToJungleClears`, `baseTypeArray`)
- **Files:** PascalCase for components and pages, camelCase for service files

### TypeScript
- Strict mode is **disabled** — loose typing is acceptable
- Interfaces defined in `lib/` service files alongside their parsing logic
- Mix of `.tsx` (TypeScript React) and `.jsx` (plain JS React) — prefer `.tsx` for new files

### React Patterns
- Functional components with hooks (`useState`, `useEffect`, `useRef`)
- Use `getStaticProps` for data fetching at build time where possible
- Layout wraps all pages via `_app.tsx` — no need to add Layout in individual pages
- Inline styles are common alongside Bootstrap classes — acceptable pattern

### Data Fetching
- **GraphQL:** Apollo Client (used in PokemonEffectiveness)
- **REST:** Axios (used for Google Sheets API in JungleClears)
- **Static JSON:** Loaded via `getStaticProps` from `/public/json/`

### Styling
- Bootstrap CSS imported globally
- Dark theme: background `#1a202c`, light text
- `Home.module.css` for homepage-specific styles
- Inline styles acceptable for one-off component styles

## Adding New Content

### New Blog Post
Create a new `.tsx` file in `/pages/Blog/`:
```tsx
import Layout from '../../components/Layout'

export default function MyPost() {
  return (
    <Layout>
      <h1>Post Title</h1>
      {/* content */}
    </Layout>
  )
}
```
Then add a link to it in `/pages/Blog.tsx`.

### New Prototype
1. Create page in `/pages/Prototypes/YourTool.tsx`
2. Add a tile/card to `/pages/index.tsx`
3. If the prototype has multiple components, create `/components/YourTool/` directory

## Environment Variables

Required in `.env.local`:
```
GOOGLE_API_KEY=...       # Used in JungleClears (Google Sheets API)
RIOT_API_KEY=...         # Used in MatchHistory (Riot Games API)
NEXT_PUBLIC_DEBUG=...    # Client-side debug flag
```

**Note:** `.env.local` must never be committed to git. Ensure it remains in `.gitignore`.

## Key Dependencies

| Package | Purpose |
|---|---|
| `next` | Framework (routing, SSR/SSG, API routes) |
| `react` / `react-dom` | UI library |
| `@apollo/client` + `graphql` | GraphQL client (PokéAPI) |
| `axios` | HTTP client (Google Sheets API) |
| `next-themes` | Dark/light theme switching |
| `react-icons` | Icon library |
| `@emotion/react` | CSS-in-JS (used in some components) |
| `react-use-cookie` | Cookie state management |

## Deployment

Deployed on **Vercel**. Pushes to `main` trigger automatic deployments. No CI/CD pipeline — lint locally before pushing.
