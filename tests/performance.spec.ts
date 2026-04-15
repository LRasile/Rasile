import { test, expect } from '@playwright/test'

const LOAD_BUDGET_MS = 3000

// Pages that call external APIs at runtime (GraphQL, Google Sheets) are excluded —
// their load time depends on network latency and can't reliably fit a local budget.
const pages = [
  '/',
  '/About',
  '/Services',
  '/Projects',
  '/Prototypes',
  '/Prototypes/Timezones',
  '/Prototypes/HtmlColors',
  '/Prototypes/ContractionTimer',
  '/Prototypes/PhpMigration',
  '/Prototypes/LoopHeroSolver',
  '/Prototypes/CardsForBeats',
  '/Prototypes/StoryGenerator',
  '/Prototypes/Sourdough',
  '/Prototypes/VegPatch',
]

for (const path of pages) {
  test(`${path} loads in under ${LOAD_BUDGET_MS}ms`, async ({ page }) => {
    const start = Date.now()
    await page.goto(path, { waitUntil: 'load' })
    const elapsed = Date.now() - start

    expect(elapsed, `${path} took ${elapsed}ms — over ${LOAD_BUDGET_MS}ms budget`).toBeLessThan(LOAD_BUDGET_MS)
  })
}
