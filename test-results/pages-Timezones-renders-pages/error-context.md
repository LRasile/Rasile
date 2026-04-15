# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages.spec.ts >> Timezones renders
- Location: tests\pages.spec.ts:61:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.panel')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.panel')
    8 × locator resolved to <div class="panel">…</div>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]: DEBUG MODE
    - navigation [ref=e4]:
      - generic [ref=e5] [cursor=pointer]: Rasile Consulting
      - generic [ref=e6]:
        - generic [ref=e7] [cursor=pointer]: Home
        - generic [ref=e8] [cursor=pointer]: Services
        - generic [ref=e9] [cursor=pointer]: About
        - generic [ref=e10] [cursor=pointer]: Projects
        - generic [ref=e11] [cursor=pointer]: Prototypes
      - button "Toggle theme" [ref=e13] [cursor=pointer]:
        - img [ref=e14]
    - link "Buy me a coffee" [ref=e16] [cursor=pointer]:
      - /url: https://www.buymeacoffee.com/rasile
      - img "Buy me a coffee" [ref=e17]
    - generic [ref=e19]:
      - main [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: Coordinated Universal Time
            - generic [ref=e24]: 20:18:47 UTC
            - generic [ref=e25]: Wednesday, 15 April 2026
          - generic [ref=e26]:
            - img "World map" [ref=e27]
            - button "Los Angeles — 13:18:47" [ref=e28] [cursor=pointer]
            - button "Denver — 14:18:47" [ref=e29] [cursor=pointer]
            - button "Chicago — 15:18:47" [ref=e30] [cursor=pointer]
            - button "New York — 16:18:47" [ref=e31] [cursor=pointer]
            - button "London — 21:18:47" [ref=e32] [cursor=pointer]
            - button "Paris — 22:18:47" [ref=e33] [cursor=pointer]
            - button "Athens — 23:18:47" [ref=e34] [cursor=pointer]
            - button "Moscow — 23:18:47" [ref=e35] [cursor=pointer]
            - button "Beijing — 04:18:47" [ref=e36] [cursor=pointer]
            - button "Tokyo — 05:18:47" [ref=e37] [cursor=pointer]
            - button "Auckland — 08:18:47" [ref=e38] [cursor=pointer]
          - generic [ref=e39]:
            - generic [ref=e41] [cursor=pointer]:
              - generic [ref=e42]:
                - generic [ref=e43]: Los Angeles
                - generic "Daytime" [ref=e44]: ☀️
              - generic [ref=e45]: 13:18:47
              - generic [ref=e46]: UTC-7
            - generic [ref=e48] [cursor=pointer]:
              - generic [ref=e49]:
                - generic [ref=e50]: Denver
                - generic "Daytime" [ref=e51]: ☀️
              - generic [ref=e52]: 14:18:47
              - generic [ref=e53]: UTC-6
            - generic [ref=e55] [cursor=pointer]:
              - generic [ref=e56]:
                - generic [ref=e57]: Chicago
                - generic "Daytime" [ref=e58]: ☀️
              - generic [ref=e59]: 15:18:47
              - generic [ref=e60]: UTC-5
            - generic [ref=e62] [cursor=pointer]:
              - generic [ref=e63]:
                - generic [ref=e64]: New York
                - generic "Daytime" [ref=e65]: ☀️
              - generic [ref=e66]: 16:18:47
              - generic [ref=e67]: UTC-4
            - generic [ref=e69] [cursor=pointer]:
              - generic [ref=e70]:
                - generic [ref=e71]: London
                - generic "Nighttime" [ref=e72]: 🌙
              - generic [ref=e73]: 21:18:47
              - generic [ref=e74]: UTC+1
            - generic [ref=e76] [cursor=pointer]:
              - generic [ref=e77]:
                - generic [ref=e78]: Paris
                - generic "Nighttime" [ref=e79]: 🌙
              - generic [ref=e80]: 22:18:47
              - generic [ref=e81]: UTC+2
            - generic [ref=e83] [cursor=pointer]:
              - generic [ref=e84]:
                - generic [ref=e85]: Athens
                - generic "Nighttime" [ref=e86]: 🌙
              - generic [ref=e87]: 23:18:47
              - generic [ref=e88]: UTC+3
            - generic [ref=e90] [cursor=pointer]:
              - generic [ref=e91]:
                - generic [ref=e92]: Moscow
                - generic "Nighttime" [ref=e93]: 🌙
              - generic [ref=e94]: 23:18:47
              - generic [ref=e95]: UTC+3
            - generic [ref=e97] [cursor=pointer]:
              - generic [ref=e98]:
                - generic [ref=e99]: Beijing
                - generic "Nighttime" [ref=e100]: 🌙
              - generic [ref=e101]: 04:18:47
              - generic [ref=e102]: UTC+8
            - generic [ref=e104] [cursor=pointer]:
              - generic [ref=e105]:
                - generic [ref=e106]: Tokyo
                - generic "Nighttime" [ref=e107]: 🌙
              - generic [ref=e108]: 05:18:47
              - generic [ref=e109]: UTC+9
            - generic [ref=e111] [cursor=pointer]:
              - generic [ref=e112]:
                - generic [ref=e113]: Auckland
                - generic "Daytime" [ref=e114]: ☀️
              - generic [ref=e115]: 08:18:47
              - generic [ref=e116]: UTC+12
          - generic [ref=e117]:
            - generic [ref=e118]: Daytime
            - generic [ref=e120]: Nighttime
            - generic [ref=e122]: Selected
      - contentinfo [ref=e124]
  - generic [active]:
    - generic [ref=e127]:
      - generic [ref=e128]:
        - generic [ref=e129]:
          - navigation [ref=e130]:
            - button "previous" [disabled] [ref=e131]:
              - img "previous" [ref=e132]
            - generic [ref=e134]:
              - generic [ref=e135]: 1/
              - text: "3"
            - button "next" [ref=e136] [cursor=pointer]:
              - img "next" [ref=e137]
          - img
        - generic [ref=e139]:
          - link "Next.js 16.1.6 (stale) Turbopack" [ref=e140] [cursor=pointer]:
            - /url: https://nextjs.org/docs/messages/version-staleness
            - img [ref=e141]
            - generic "There is a newer version (16.2.3) available, upgrade recommended!" [ref=e143]: Next.js 16.1.6 (stale)
            - generic [ref=e144]: Turbopack
          - img
      - dialog "Recoverable Error" [ref=e146]:
        - generic [ref=e149]:
          - generic [ref=e150]:
            - generic [ref=e151]:
              - generic [ref=e153]: Recoverable Error
              - generic [ref=e154]:
                - button "Copy Error Info" [ref=e155] [cursor=pointer]:
                  - img [ref=e156]
                - button "No related documentation found" [disabled] [ref=e158]:
                  - img [ref=e159]
                - button "Attach Node.js inspector" [ref=e161] [cursor=pointer]:
                  - img [ref=e162]
            - generic [ref=e171]: "Text content did not match. Server: \"20:18:42\" Client: \"20:18:47\""
          - generic [ref=e172]:
            - paragraph [ref=e174]:
              - text: "See more info here:"
              - link "https://nextjs.org/docs/messages/react-hydration-error" [ref=e175] [cursor=pointer]:
                - /url: https://nextjs.org/docs/messages/react-hydration-error
            - generic [ref=e176]:
              - button "complete Component Stack" [ref=e177] [cursor=pointer]:
                - img [ref=e178]
              - code [ref=e181]:
                - generic [ref=e182]: <div>
                - generic [ref=e183]: <main>
                - generic [ref=e184]: <div>
                - generic [ref=e185]: <div>
                - generic [ref=e186]: <div>
                - generic [ref=e188]: + "20:18:42"
                - generic [ref=e190]: "- \"20:18:47\""
            - generic [ref=e193]:
              - paragraph [ref=e194]:
                - text: Call Stack
                - generic [ref=e195]: "12"
              - button "Show 12 ignore-listed frame(s)" [ref=e196] [cursor=pointer]:
                - text: Show 12 ignore-listed frame(s)
                - img [ref=e197]
        - generic [ref=e199]: "1"
        - generic [ref=e200]: "2"
    - generic [ref=e205] [cursor=pointer]:
      - button "Open Next.js Dev Tools" [ref=e206]:
        - img [ref=e207]
      - generic [ref=e210]:
        - button "Open issues overlay" [ref=e211]:
          - generic [ref=e212]:
            - generic [ref=e213]: "2"
            - generic [ref=e214]: "3"
          - generic [ref=e215]:
            - text: Issue
            - generic [ref=e216]: s
        - button "Collapse issues badge" [ref=e217]:
          - img [ref=e218]
  - alert [ref=e220]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | // --- Core pages ---
  4   | 
  5   | test('home page renders', async ({ page }) => {
  6   |   await page.goto('/')
  7   |   await expect(page.locator('h1')).toContainText('Rasile')
  8   |   await expect(page.locator('.homeWrapper')).toBeVisible()
  9   | })
  10  | 
  11  | test('about page renders', async ({ page }) => {
  12  |   await page.goto('/About')
  13  |   await expect(page.locator('h1')).toContainText('Built to deliver software')
  14  | })
  15  | 
  16  | test('services page renders', async ({ page }) => {
  17  |   await page.goto('/Services')
  18  |   await expect(page.locator('h1')).toContainText('What we build.')
  19  | })
  20  | 
  21  | test('projects page renders', async ({ page }) => {
  22  |   await page.goto('/Projects')
  23  |   await expect(page.locator('h1')).toContainText('Projects.')
  24  | })
  25  | 
  26  | test('404 page renders', async ({ page }) => {
  27  |   await page.goto('/this-page-does-not-exist')
  28  |   await expect(page).toHaveURL(/this-page-does-not-exist/)
  29  |   await expect(page.locator('body')).toBeVisible()
  30  | })
  31  | 
  32  | // --- Prototypes index ---
  33  | 
  34  | test('prototypes index renders', async ({ page }) => {
  35  |   await page.goto('/Prototypes')
  36  |   await expect(page.locator('h1')).toContainText('Prototypes.')
  37  | })
  38  | 
  39  | // --- Prototypes ---
  40  | 
  41  | test('Pokemon Effectiveness renders', async ({ page }) => {
  42  |   await page.goto('/Prototypes/PokemonEffectiveness', { timeout: 60000 })
  43  |   await expect(page.locator('text=Pokémon Search')).toBeVisible({ timeout: 30000 })
  44  | })
  45  | 
  46  | test('Champions Team Builder renders', async ({ page }) => {
  47  |   await page.goto('/Prototypes/ChampionsTeamBuilder', { timeout: 60000 })
  48  |   await expect(page.locator('h2.pokemon-title')).toContainText('Champions Team Builder')
  49  | })
  50  | 
  51  | test('Jungle Clears renders', async ({ page }) => {
  52  |   await page.goto('/Prototypes/JungleClears')
  53  |   await expect(page.locator('input[placeholder*="Champion name"]')).toBeVisible()
  54  | })
  55  | 
  56  | test('Menu renders', async ({ page }) => {
  57  |   await page.goto('/Prototypes/Menu')
  58  |   await expect(page.locator('input[placeholder*="Recipe name"]')).toBeVisible()
  59  | })
  60  | 
  61  | test('Timezones renders', async ({ page }) => {
  62  |   await page.goto('/Prototypes/Timezones')
> 63  |   await expect(page.locator('.panel')).toBeVisible()
      |                                        ^ Error: expect(locator).toBeVisible() failed
  64  |   await expect(page.locator('button').first()).toBeVisible()
  65  | })
  66  | 
  67  | test('HTML Colors renders', async ({ page }) => {
  68  |   await page.goto('/Prototypes/HtmlColors')
  69  |   await expect(page.locator('.colorTableCard')).toBeVisible()
  70  |   await expect(page.locator('table.colorTable')).toBeVisible()
  71  | })
  72  | 
  73  | test('Contraction Timer renders', async ({ page }) => {
  74  |   await page.goto('/Prototypes/ContractionTimer')
  75  |   await expect(page.locator('.panel')).toBeVisible()
  76  |   // The surge button is always present on load
  77  |   await expect(page.locator('button').first()).toBeVisible()
  78  | })
  79  | 
  80  | test('PHP Migration renders', async ({ page }) => {
  81  |   await page.goto('/Prototypes/PhpMigration')
  82  |   await expect(page.locator('h1')).toBeVisible()
  83  | })
  84  | 
  85  | test('Loop Hero Solver renders', async ({ page }) => {
  86  |   await page.goto('/Prototypes/LoopHeroSolver')
  87  |   await expect(page.locator('.panel')).toBeVisible()
  88  | })
  89  | 
  90  | test('Cards For Beats renders', async ({ page }) => {
  91  |   await page.goto('/Prototypes/CardsForBeats')
  92  |   await expect(page.locator('.panel')).toBeVisible()
  93  |   await expect(page.locator('button[aria-label="Settings"]')).toBeVisible()
  94  | })
  95  | 
  96  | test('Story Generator renders', async ({ page }) => {
  97  |   await page.goto('/Prototypes/StoryGenerator')
  98  |   await expect(page.locator('text=Story Generator')).toBeVisible()
  99  | })
  100 | 
  101 | test('Sourdough Guide renders', async ({ page }) => {
  102 |   await page.goto('/Prototypes/Sourdough')
  103 |   await expect(page.locator('h2').first()).toBeVisible()
  104 | })
  105 | 
  106 | test('Veg Patch renders', async ({ page }) => {
  107 |   await page.goto('/Prototypes/VegPatch')
  108 |   await expect(page.locator('h1').first()).toBeVisible()
  109 | })
  110 | 
  111 | // --- Nav smoke test: clicking through from home ---
  112 | 
  113 | test('nav links reach correct pages', async ({ page }) => {
  114 |   await page.goto('/')
  115 | 
  116 |   await page.locator('nav').getByText('About').click()
  117 |   await page.waitForURL(/\/About/)
  118 |   await expect(page.locator('h1')).toBeVisible()
  119 | 
  120 |   await page.locator('nav').getByText('Services').click()
  121 |   await page.waitForURL(/\/Services/)
  122 |   await expect(page.locator('h1')).toBeVisible()
  123 | 
  124 |   await page.locator('nav').getByText('Projects').click()
  125 |   await page.waitForURL(/\/Projects/)
  126 |   await expect(page.locator('h1')).toBeVisible()
  127 | 
  128 |   await page.locator('nav').getByText('Prototypes').click()
  129 |   await page.waitForURL(/\/Prototypes/)
  130 |   await expect(page.locator('h1')).toBeVisible()
  131 | })
  132 | 
```