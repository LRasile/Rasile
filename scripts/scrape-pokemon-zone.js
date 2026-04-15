/* eslint-disable */
const { chromium } = require('playwright')
const fs = require('fs')

function parseBuildFromText(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
  const moves = []
  const items = []
  let ability = null
  let section = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line === 'Most Common Moves') { section = 'moves'; continue }
    if (line === 'Most Common Items') { section = 'items'; continue }
    if (line === 'Most Common Abilities') { section = 'abilities'; continue }
    if (line === 'Learnable Moves' || line === 'Common Teammates' || line === 'COMMON TEAMMATES') { section = null; continue }

    const nextLine = lines[i + 1] || ''
    const isFollowedByUsage = /^\d[\d,]*\s*\([\d.]+%\)$/.test(nextLine)

    if (section === 'moves' && isFollowedByUsage && moves.length < 6) {
      moves.push(line)
    } else if (section === 'items' && isFollowedByUsage && items.length < 2) {
      items.push(line)
    } else if (section === 'abilities' && isFollowedByUsage && !ability) {
      ability = line
    }
  }

  return { moves, items, ability }
}

async function scrapeOnePokemon(url) {
  // Each Pokemon gets its own fresh browser context to avoid Cloudflare session blocks
  const { chromium } = require('playwright')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  })
  const page = await context.newPage()

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForTimeout(4000)
    const text = await page.evaluate(() => document.body.innerText)
    return text
  } finally {
    await browser.close()
  }
}

;(async () => {
  // Step 1: Collect Pokemon URLs from list (use one browser session)
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  })
  const page = await context.newPage()

  const pokemonUrls = []
  let pageNum = 1
  let hasMore = true

  while (hasMore) {
    const url =
      pageNum === 1
        ? 'https://www.pokemon-zone.com/champions/pokemon/'
        : `https://www.pokemon-zone.com/champions/pokemon/?page=${pageNum}`

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForTimeout(2000)

    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href]'))
        .map((a) => a.href)
        .filter((href) => /\/champions\/pokemon\/[^/]+\/$/.test(href))
    })

    const uniqueLinks = [...new Set(links)]
    if (uniqueLinks.length === 0) { hasMore = false; break }
    pokemonUrls.push(...uniqueLinks)

    const hasNext = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a')).some((el) => el.textContent.trim() === 'NEXT')
    )
    hasMore = hasNext
    pageNum++
    if (pageNum > 20) break // safety
  }

  await browser.close()

  const uniqueUrls = [...new Set(pokemonUrls)]
  console.log(`Found ${uniqueUrls.length} Pokemon pages`)

  // Step 2: Scrape each Pokemon in a fresh browser context
  const builds = {}

  for (const pokemonUrl of uniqueUrls) {
    const slugMatch = pokemonUrl.match(/\/champions\/pokemon\/([^/]+)\/$/)
    if (!slugMatch) continue
    const slug = slugMatch[1]

    try {
      const bodyText = await scrapeOnePokemon(pokemonUrl)

      if (!bodyText.includes('Most Common')) {
        console.log(`✗ ${slug}: Cloudflare blocked (${bodyText.length} chars)`)
        continue
      }

      const buildData = parseBuildFromText(bodyText)
      builds[slug] = buildData
      console.log(`✓ ${slug}: ${buildData.ability} | [${buildData.items.join(', ')}] | [${buildData.moves.join(', ')}]`)
    } catch (err) {
      console.log(`✗ ${slug}: ERROR ${err.message}`)
    }

    // Brief pause between requests
    await new Promise((r) => setTimeout(r, 500))
  }

  fs.writeFileSync('public/json/PokemonBuilds.json', JSON.stringify(builds, null, 2))
  console.log(`\nSaved ${Object.keys(builds).length} Pokemon builds to public/json/PokemonBuilds.json`)
})()
