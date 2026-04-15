# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages.spec.ts >> Menu renders
- Location: tests\pages.spec.ts:56:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('input[placeholder*="Recipe name"]')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[placeholder*="Recipe name"]')
    8 × locator resolved to <input value="" placeholder="Recipe name or category"/>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - generic [ref=e23]:
            - textbox "Recipe name or category" [ref=e24]
            - img [ref=e25]
          - generic [ref=e27]:
            - generic [ref=e28] [cursor=pointer]:
              - generic [ref=e29]: Asparagus Risotto
              - generic "Difficulty" [ref=e31]: 🔪🔪
              - generic "Risotto" [ref=e33]: 🍚 Risotto
              - generic [ref=e34]: Risotto with asparagus and parmesan, this can also be made with tenderstem broccoli
            - generic [ref=e36] [cursor=pointer]:
              - generic [ref=e37]: Beetroot Risotto
              - generic "Difficulty" [ref=e39]: 🔪🔪
              - generic "Risotto" [ref=e41]: 🍚 Risotto
              - generic [ref=e42]: Risotto with fresh beetroot and parmesan
            - generic [ref=e44] [cursor=pointer]:
              - generic [ref=e45]: Butter Chicken
              - generic "Difficulty" [ref=e47]: 🔪🔪🔪🔪
              - generic "Curry" [ref=e49]: 🍛 Curry
              - generic [ref=e50]: Chicken curry with a tomato and butter sauce, medium spice
            - generic [ref=e52] [cursor=pointer]:
              - generic [ref=e53]: Chicken
              - generic "Difficulty" [ref=e55]: 🔪🔪
              - generic "Meat" [ref=e57]: 🍖 Meat
              - generic [ref=e58]: Oven roasted chicken
            - generic [ref=e60] [cursor=pointer]:
              - generic [ref=e61]: Chow Mein
              - generic "Difficulty" [ref=e63]: 🔪🔪🔪
              - generic "Noodle" [ref=e65]: 🍜 Noodle
              - generic [ref=e66]: Noodles, meat and veg
            - generic [ref=e68] [cursor=pointer]:
              - generic [ref=e69]: Fajitas
              - generic "Difficulty" [ref=e71]: 🔪🔪🔪
              - generic "Wrap" [ref=e73]: 🌯 Wrap
              - generic [ref=e74]: Chicken wrap, don't forget the guacamole and sour cream
            - generic [ref=e76] [cursor=pointer]:
              - generic [ref=e77]: Lamb Rogan Josh
              - generic "Difficulty" [ref=e79]: 🔪🔪🔪🔪🔪
              - generic "Curry" [ref=e81]: 🍛 Curry
              - generic [ref=e82]: Lamb curry with a spicy tomato sauce
            - generic [ref=e84] [cursor=pointer]:
              - generic [ref=e85]: Milanese
              - generic "Difficulty" [ref=e87]: 🔪
              - generic "Risotto" [ref=e89]: 🍚 Risotto
              - generic [ref=e90]: A traditional risotto made with chicken stock and saffron
            - generic [ref=e92] [cursor=pointer]:
              - generic [ref=e93]: Mushroom Risotto
              - generic "Difficulty" [ref=e95]: 🔪🔪
              - generic "Risotto" [ref=e97]: 🍚 Risotto
              - generic [ref=e98]: Risotto made with a variety of different mushrooms
            - generic [ref=e100] [cursor=pointer]:
              - generic [ref=e101]: Pasta All’Amatriciana
              - generic "Difficulty" [ref=e103]: 🔪🔪
              - generic "Pasta" [ref=e105]: 🍝 Pasta
              - generic [ref=e106]: Pasta with pancetta, chilli and tomatoes
            - generic [ref=e108] [cursor=pointer]:
              - generic [ref=e109]: Penne All’ Arrabbiata
              - generic "Difficulty" [ref=e111]: 🔪🔪
              - generic "Pasta" [ref=e113]: 🍝 Pasta
              - generic [ref=e114]: Pasta with chillies & tomatoes
            - generic [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: Saltimbocca
              - generic "Difficulty" [ref=e119]: 🔪🔪🔪🔪🔪
              - generic "Meat" [ref=e121]: 🍖 Meat
              - generic [ref=e122]: Chicken and parma ham with sage cooked in butter and white wine
            - generic [ref=e124] [cursor=pointer]:
              - generic [ref=e125]: Spaghetti Carbonara
              - generic "Difficulty" [ref=e127]: 🔪🔪🔪🔪
              - generic "Pasta" [ref=e129]: 🍝 Pasta
              - generic [ref=e130]: Spaghetti with pancetta, cream & egg
            - generic [ref=e132] [cursor=pointer]:
              - generic [ref=e133]: Spaghetti Gamberi
              - generic "Difficulty" [ref=e135]: 🔪🔪🔪
              - generic "Pasta" [ref=e137]: 🍝 Pasta
              - generic [ref=e138]: Spaghetti with king prawns in a cream and tomato sauce
            - generic [ref=e140] [cursor=pointer]:
              - generic [ref=e141]: Spaghetti Meatballs
              - generic "Difficulty" [ref=e143]: 🔪🔪🔪
              - generic "Pasta" [ref=e145]: 🍝 Pasta
              - generic [ref=e146]: Spaghetti with meatballs in a tomato sauce
            - generic [ref=e148] [cursor=pointer]:
              - generic [ref=e149]: Steak
              - generic "Difficulty" [ref=e151]: 🔪
              - generic "Meat" [ref=e153]: 🍖 Meat
              - generic [ref=e154]: Pan-fried Sirloin steak
            - generic [ref=e156] [cursor=pointer]:
              - generic [ref=e157]: Tagliatelle Trimalcione
              - generic "Difficulty" [ref=e159]: 🔪🔪🔪🔪
              - generic "Pasta" [ref=e161]: 🍝 Pasta
              - generic [ref=e162]: Tagliatelle with fennel sausage meat in a cream and tomato sauce
      - contentinfo [ref=e164]
  - button "Open Next.js Dev Tools" [ref=e170] [cursor=pointer]:
    - img [ref=e171]
  - alert [ref=e174]
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
> 58  |   await expect(page.locator('input[placeholder*="Recipe name"]')).toBeVisible()
      |                                                                   ^ Error: expect(locator).toBeVisible() failed
  59  | })
  60  | 
  61  | test('Timezones renders', async ({ page }) => {
  62  |   await page.goto('/Prototypes/Timezones')
  63  |   await expect(page.locator('.panel')).toBeVisible()
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