import { test, expect } from '@playwright/test'

// --- Core pages ---

test('home page renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Rasile')
  await expect(page.locator('.homeWrapper')).toBeVisible()
})

test('about page renders', async ({ page }) => {
  await page.goto('/About')
  await expect(page.locator('h1')).toContainText('Built to deliver software')
})

test('services page renders', async ({ page }) => {
  await page.goto('/Services')
  await expect(page.locator('h1')).toContainText('What we build.')
})

test('projects page renders', async ({ page }) => {
  await page.goto('/Projects')
  await expect(page.locator('h1')).toContainText('Projects.')
})

test('404 page renders', async ({ page }) => {
  await page.goto('/this-page-does-not-exist')
  await expect(page).toHaveURL(/this-page-does-not-exist/)
  await expect(page.locator('body')).toBeVisible()
})

// --- Prototypes index ---

test('prototypes index renders', async ({ page }) => {
  await page.goto('/Prototypes')
  await expect(page.locator('h1')).toContainText('Prototypes.')
})

// --- Prototypes ---

test('Pokemon Effectiveness renders', async ({ page }) => {
  await page.goto('/Prototypes/PokemonEffectiveness', { timeout: 60000 })
  await expect(page.locator('text=Pokémon Search')).toBeVisible({ timeout: 30000 })
})

test('Champions Team Builder renders', async ({ page }) => {
  await page.goto('/Prototypes/ChampionsTeamBuilder', { timeout: 60000 })
  await expect(page.locator('h2.pokemon-title')).toContainText('Champions Team Builder')
})

test('Jungle Clears renders', async ({ page }) => {
  await page.goto('/Prototypes/JungleClears')
  await expect(page.locator('input[placeholder*="Champion name"]')).toBeVisible()
})

test('Menu renders', async ({ page }) => {
  await page.goto('/Prototypes/Menu')
  await expect(page.locator('input[placeholder*="Recipe name"]')).toBeVisible()
})

test('Timezones renders', async ({ page }) => {
  await page.goto('/Prototypes/Timezones')
  await expect(page.locator('.panel')).toBeVisible()
  await expect(page.locator('button').first()).toBeVisible()
})

test('HTML Colors renders', async ({ page }) => {
  await page.goto('/Prototypes/HtmlColors')
  await expect(page.locator('.colorTableCard')).toBeVisible()
  await expect(page.locator('table.colorTable')).toBeVisible()
})

test('Contraction Timer renders', async ({ page }) => {
  await page.goto('/Prototypes/ContractionTimer')
  await expect(page.locator('.panel')).toBeVisible()
  // The surge button is always present on load
  await expect(page.locator('button').first()).toBeVisible()
})

test('PHP Migration renders', async ({ page }) => {
  await page.goto('/Prototypes/PhpMigration')
  await expect(page.locator('h1')).toBeVisible()
})

test('Loop Hero Solver renders', async ({ page }) => {
  await page.goto('/Prototypes/LoopHeroSolver')
  await expect(page.locator('.panel')).toBeVisible()
})

test('Cards For Beats renders', async ({ page }) => {
  await page.goto('/Prototypes/CardsForBeats')
  await expect(page.locator('.panel')).toBeVisible()
  await expect(page.locator('button[aria-label="Settings"]')).toBeVisible()
})

test('Story Generator renders', async ({ page }) => {
  await page.goto('/Prototypes/StoryGenerator')
  await expect(page.locator('text=Story Generator')).toBeVisible()
})

test('Sourdough Guide renders', async ({ page }) => {
  await page.goto('/Prototypes/Sourdough')
  await expect(page.locator('h2').first()).toBeVisible()
})

test('Veg Patch renders', async ({ page }) => {
  await page.goto('/Prototypes/VegPatch')
  await expect(page.locator('h1').first()).toBeVisible()
})

// --- Nav smoke test: clicking through from home ---

test('nav links reach correct pages', async ({ page }) => {
  await page.goto('/')

  await page.locator('nav').getByText('About').click()
  await page.waitForURL(/\/About/)
  await expect(page.locator('h1')).toBeVisible()

  await page.locator('nav').getByText('Services').click()
  await page.waitForURL(/\/Services/)
  await expect(page.locator('h1')).toBeVisible()

  await page.locator('nav').getByText('Projects').click()
  await page.waitForURL(/\/Projects/)
  await expect(page.locator('h1')).toBeVisible()

  await page.locator('nav').getByText('Prototypes').click()
  await page.waitForURL(/\/Prototypes/)
  await expect(page.locator('h1')).toBeVisible()
})
