import { test, expect } from '@playwright/test'
import { CHAMPIONS_NAMES, formatPokemonName } from '../lib/PokemonService'

// Deduplicate champions for search testing:
// If a base name exists in the set (e.g. 'basculegion'), skip its hyphenated variants
// ('basculegion-male', 'basculegion-female') since searching the base matches all of them.
// Exception: keep hyphenated names whose base is NOT in the set (e.g. 'mr-rime', 'kommo-o').
const championsToTest = Array.from(CHAMPIONS_NAMES).filter((name) => {
  const base = name.split('-')[0]
  return base === name || !CHAMPIONS_NAMES.has(base)
})

test.describe('Pokémon Effectiveness — search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/Prototypes/Pokedex', { timeout: 60000 })
    await expect(page.locator('text=Pokédex')).toBeVisible({ timeout: 30000 })
  })

  // --- Champions mode ---

  test('champions mode is on by default', async ({ page }) => {
    await expect(page.locator('button', { hasText: 'Champions ✓' })).toBeVisible()
  })

  test('toggling champions off changes button label', async ({ page }) => {
    await page.locator('button', { hasText: 'Champions ✓' }).click()
    await expect(page.locator('button', { hasText: 'Champions only' })).toBeVisible()
  })

  test('non-champions Pokémon do not appear with champions mode on', async ({ page }) => {
    await page.locator('.tag-input-box input').fill('caterpie')
    await expect(page.locator('.pokemon-dropdown-box')).not.toBeVisible()
  })

  // --- Tag interactions ---

  test('selecting a Pokémon from dropdown adds it as a tag', async ({ page }) => {
    await page.locator('.tag-input-box input').fill('gyarados')
    await page.locator('.pokemon-dropdown-item').first().click()
    await expect(page.locator('.tag-input-box')).toContainText('Gyarados')
  })

  test('tag can be removed with the × button', async ({ page }) => {
    await page.locator('.tag-input-box input').fill('snorlax')
    await page.locator('.pokemon-dropdown-item').first().click()
    await expect(page.locator('.tag-input-box')).toContainText('Snorlax')
    await page.locator('.tag-input-box button').click()
    await expect(page.locator('.tag-input-box')).not.toContainText('Snorlax')
  })

  // --- Search by dex number ---

  test('search by bare number finds the correct Pokémon', async ({ page }) => {
    // Charizard is #6
    await page.locator('.tag-input-box input').fill('6')
    await expect(page.locator('.pokemon-dropdown-box')).toContainText('Charizard')
  })

  test('search by #-prefixed number finds the correct Pokémon', async ({ page }) => {
    // Pikachu is #25
    await page.locator('.tag-input-box input').fill('#25')
    await expect(page.locator('.pokemon-dropdown-box')).toContainText('Pikachu')
  })

  test('search with 3-digit zero-padded number finds the correct Pokémon', async ({ page }) => {
    // Venusaur is #3 — "003" should match
    await page.locator('.tag-input-box input').fill('003')
    await expect(page.locator('.pokemon-dropdown-box')).toContainText('Venusaur')
  })

  test('search with 4-digit zero-padded number finds the correct Pokémon', async ({ page }) => {
    // Palafin is #964 — "0964" should match
    await page.locator('.tag-input-box input').fill('0964')
    await expect(page.locator('.pokemon-dropdown-box')).toContainText('Palafin')
  })

  // --- Image loading ---

  test('all Champions-exclusive mega Pokémon images load without error', async ({ page }) => {
    // All 23 Champions-exclusive megas — sprites served from local /images/champions/
    const newMegaBases = [
      'clefable', 'victreebel', 'starmie', 'dragonite', 'meganium', 'feraligatr',
      'skarmory', 'chimecho', 'froslass', 'emboar', 'excadrill', 'chandelure',
      'golurk', 'chesnaught', 'delphox', 'greninja', 'floette', 'meowstic',
      'hawlucha', 'crabominable', 'drampa', 'scovillain', 'glimmora',
    ]
    const input = page.locator('.tag-input-box input')

    for (const base of newMegaBases) {
      await input.fill(`mega ${base}`)
      const item = page.locator('.pokemon-dropdown-item').first()
      await expect(item).toBeVisible({ timeout: 5000 })
      await item.click()

      const entry = page.locator('.flex-item').last()
      const img = entry.locator('img').first()

      // Wait for the image to finish loading (naturalWidth > 0 means it loaded successfully)
      await expect.poll(
        () => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0),
        { message: `Image for Mega ${base} did not load`, timeout: 8000 }
      ).toBe(true)

      await page.locator('.tag-input-box button').last().click()
    }
  })

  // --- Regional variants ---

  test('regional variants of champions Pokémon are findable in the search dropdown', async ({ page }) => {
    const regionalForms: [search: string, display: string][] = [
      ['raichu-alola', 'Raichu Alola'],
      ['ninetales-alola', 'Ninetales Alola'],
      ['arcanine-hisui', 'Arcanine Hisui'],
      ['slowbro-galar', 'Slowbro Galar'],
      ['slowking-galar', 'Slowking Galar'],
      ['tauros-paldea-combat', 'Tauros Paldea Combat'],
      ['typhlosion-hisui', 'Typhlosion Hisui'],
      ['samurott-hisui', 'Samurott Hisui'],
      ['zoroark-hisui', 'Zoroark Hisui'],
      ['stunfisk-galar', 'Stunfisk Galar'],
      ['goodra-hisui', 'Goodra Hisui'],
      ['avalugg-hisui', 'Avalugg Hisui'],
      ['decidueye-hisui', 'Decidueye Hisui'],
    ]
    const input = page.locator('.tag-input-box input')
    const dropdown = page.locator('.pokemon-dropdown-box')

    for (const [search, display] of regionalForms) {
      await input.fill(search)
      await expect(dropdown).toContainText(display, { timeout: 5000 }).catch(() => {
        throw new Error(`Regional form "${search}" (display: "${display}") not found in search dropdown`)
      })
      await input.fill('')
      await dropdown.waitFor({ state: 'hidden', timeout: 2000 }).catch(() => {})
    }
  })

  // --- Comprehensive champions list ---

  test('all champions Pokémon are findable in the search dropdown', async ({ page }) => {
    const input = page.locator('.tag-input-box input')
    const dropdown = page.locator('.pokemon-dropdown-box')

    for (const name of championsToTest) {
      const displayName = formatPokemonName(name)

      await input.fill(name)

      await expect(dropdown).toContainText(displayName, { timeout: 5000 }).catch(() => {
        throw new Error(`Champion "${name}" (display: "${displayName}") not found in search dropdown`)
      })

      await input.fill('')
      await dropdown.waitFor({ state: 'hidden', timeout: 2000 }).catch(() => {})
    }
  })
})
