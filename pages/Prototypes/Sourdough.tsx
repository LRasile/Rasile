import { useState } from 'react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)

  return (
    <section style={{ marginBottom: '1rem', borderBottom: '1px solid #444' }}>
      <h2
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {title}
        <span style={{ fontSize: '1rem', opacity: 0.6 }}>{open ? '▲' : '▼'}</span>
      </h2>
      {open && <div>{children}</div>}
    </section>
  )
}

export default function Sourdough() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>🍞 The Complete Sourdough Guide</h1>
      <p>Everything you need to bake your first loaf</p>

      <Section title="Meet Your Starter">
        <p>
          Your starter is a live sourdough culture — a living mixture of wild yeast and bacteria that makes your bread
          rise naturally without commercial yeast. It needs regular feeding to stay alive and happy.
        </p>
        <p>
          It&apos;s more resilient than it looks! Don&apos;t panic if it looks flat or has a grey liquid on top —
          that&apos;s just hunger. Stir it in and feed as normal.
        </p>

        <h3>Signs of a Healthy Starter</h3>
        <ul>
          <li>Bubbles visible on the surface and sides of the jar</li>
          <li>Rises above the rubber band marker after feeding</li>
          <li>Smells pleasantly tangy and yeasty — not unpleasant</li>
          <li>Has a thick, creamy, pourable consistency</li>
        </ul>

        <h3>Storing Your Starter</h3>
        <ul>
          <li>Keep in the fridge in a jar with lid slightly ajar</li>
          <li>Feed at least once a week to keep it alive</li>
          <li>It can survive a few days without feeding — don&apos;t worry!</li>
        </ul>
      </Section>

      <Section title="What You'll Need">
        <h3>Essential Equipment</h3>
        <ul>
          <li>🫙 <strong>Large jar</strong> — at least 1L, Kilner jar is ideal</li>
          <li>⚖️ <strong>Digital scales</strong> — essential for accuracy</li>
          <li>🧺 <strong>Banneton proving basket</strong> with linen liner</li>
          <li>🔪 <strong>Lame or sharp knife</strong> for scoring</li>
          <li>🥣 <strong>Large mixing bowl</strong></li>
          <li>🧹 <strong>Plastic dough scraper</strong> for kneading</li>
          <li>🪣 <strong>Heavy lidded pot</strong> — Le Creuset or similar</li>
          <li>💧 <strong>Water sprayer</strong></li>
          <li>📏 <strong>Rubber band</strong> for marking starter level</li>
          <li>📄 <strong>Baking paper</strong></li>
        </ul>

        <h3>Ingredients to Buy</h3>
        <ul>
          <li>🌾 <strong>Strong white bread flour</strong> — Waitrose Extra Strong Canadian recommended</li>
          <li>🌾 <strong>Strong wholemeal bread flour</strong></li>
          <li>🌾 <strong>Spelt flour</strong></li>
          <li>🧂 <strong>Fine salt</strong></li>
        </ul>
        <p>💡 Bannetons and lames are available cheaply on Amazon!</p>
      </Section>

      <Section title="Feeding Your Starter">
        <h3>First Feed — Building Up Quantity</h3>
        <ol>
          <li>Take jar out of fridge</li>
          <li>Leave for <strong>1 hour</strong> to come to room temperature</li>
          <li>Add <strong>200g strong white bread flour</strong></li>
          <li>Add <strong>100ml lukewarm water</strong></li>
          <li>Stir well until fully combined</li>
          <li>Mark the level with a rubber band</li>
          <li>Leave somewhere warm until bubbly — could take 4–12 hours</li>
          <li>Back in fridge!</li>
        </ol>

        <h3>Ongoing Weekly Maintenance</h3>
        <ol>
          <li>Take jar out of fridge</li>
          <li>Leave for <strong>1 hour</strong> to come to room temperature</li>
          <li>Discard down to <strong>200g</strong></li>
          <li>Add <strong>200g strong white bread flour</strong></li>
          <li>Add <strong>100ml lukewarm water</strong></li>
          <li>Stir well until fully combined</li>
          <li>Mark the new level with rubber band</li>
          <li>Leave somewhere warm until bubbly</li>
          <li>Back in fridge!</li>
        </ol>

        <h3>After Baking</h3>
        <ol>
          <li>Take out <strong>150g</strong> for your loaf</li>
          <li>Add <strong>100g flour + 100g water</strong> back to the jar</li>
          <li>Stir, mark level, back in fridge ✅</li>
        </ol>
      </Section>

      <Section title="Single Loaf Recipe">
        <h3>Ingredients</h3>
        <ul>
          <li>Active starter — <strong>150g</strong></li>
          <li>Strong white bread flour — <strong>300g</strong></li>
          <li>Strong wholemeal bread flour — <strong>37g</strong></li>
          <li>Spelt flour — <strong>32g</strong></li>
          <li>Lukewarm water — <strong>245ml</strong></li>
          <li>Fine salt — <strong>8g</strong></li>
        </ul>

        <h3>The Evening Before</h3>
        <ol>
          <li>Take starter out of fridge <strong>2–3 hours</strong> before using to come to room temperature</li>
          <li>Weigh <strong>150g starter</strong> into your flour bowl</li>
          <li>Replenish the jar immediately with <strong>100g flour + 100g water</strong>, stir, mark, back in fridge</li>
          <li>Add <strong>245g lukewarm water</strong> to the flour and starter</li>
          <li>Mix until fully combined — rough and shaggy is completely fine!</li>
          <li>
            Tip onto a clean surface and <strong>knead vigorously for 10 minutes</strong> — no flour on surface, use
            your scraper when it sticks
          </li>
          <li>Add <strong>8g salt</strong>, knead for another <strong>5 minutes</strong></li>
          <li>
            <strong>Shape</strong> into a tight ball: fold edges into centre like an envelope, flip seam side down, then
            drag towards you to create surface tension. The surface should feel tight like a drum skin!
          </li>
          <li>Place <strong>seam side up</strong> in a well floured banneton</li>
          <li>Cover with a damp linen towel</li>
          <li>Place <strong>straight in the fridge</strong> overnight</li>
        </ol>

        <h3>🫵 The Poke Test</h3>
        <p>Always do this before baking — it&apos;s more reliable than looking at the height!</p>
        <ul>
          <li>✅ <strong>Springs back slowly</strong> — ready to bake!</li>
          <li>⏳ <strong>Springs back quickly</strong> — needs more time</li>
          <li>⚠️ <strong>Doesn&apos;t spring back</strong> — overproved, bake immediately!</li>
        </ul>

        <h3>Morning of the Bake</h3>
        <ol>
          <li>
            Preheat oven and <strong>heavy lidded pot</strong> to <strong>240°C for 30 minutes</strong> — pot goes in
            empty with lid on
          </li>
          <li>Cut baking paper to fit pot, leaving two flaps as handles to lower dough in safely</li>
          <li>Turn dough out onto the baking paper</li>
          <li>
            <strong>Score confidently 1–2cm deep</strong> with your lame or sharp knife — be bold!
          </li>
          <li>Lower dough on baking paper into the hot pot using the paper handles</li>
          <li>
            <strong>Bake 20 minutes at 240°C with the lid on</strong>
          </li>
          <li>
            Remove lid, reduce oven to <strong>200°C</strong>, bake for another <strong>20 minutes</strong> until deep
            golden
          </li>
          <li>Cool on a rack for <strong>at least 1 hour</strong> before slicing — patience is key!</li>
        </ol>
      </Section>

      <Section title="Top Tips">
        <ul>
          <li>🎯 <strong>Poke test first</strong> — don&apos;t rely on how high the dough looks in the basket</li>
          <li>💪 <strong>Knead vigorously</strong> — the dough should stretch without snapping when it&apos;s ready</li>
          <li>🔪 <strong>Confident score</strong> — a deep confident slash helps the bread rise upwards properly</li>
          <li>🌡️ <strong>Know your oven</strong> — keep an eye on colour and adjust temperature if needed</li>
          <li>❌ <strong>Never plain flour</strong> — always use strong bread flour for structure</li>
          <li>💧 <strong>Water before flour</strong> — when feeding your starter, always add water first</li>
          <li>🧊 <strong>Wait before slicing</strong> — cutting too early makes the inside gummy</li>
          <li>🥣 <strong>Mix in a bowl</strong> — mix your starter feed in a bowl first, then transfer to the jar</li>
        </ul>
      </Section>

      <Section title="Troubleshooting">
        <ul>
          <li>
            <strong>Flat loaf</strong> — likely overproved, use the poke test next time and bake a little earlier
          </li>
          <li>
            <strong>Pale crust</strong> — needs longer in the oven, leave until deep golden brown
          </li>
          <li>
            <strong>Burnt crust</strong> — oven too hot, reduce temperature for the lid-off phase
          </li>
          <li>
            <strong>Gummy inside</strong> — cut too soon, always cool for at least 1 hour before slicing
          </li>
          <li>
            <strong>No bubbles in starter</strong> — keep somewhere warmer, starter loves 21–25°C
          </li>
          <li>
            <strong>Grey liquid on top</strong> — starter is hungry! Stir it in and feed as normal
          </li>
          <li>
            <strong>Dough too sticky</strong> — use a plastic scraper instead of adding flour
          </li>
        </ul>
      </Section>
    </div>
  )
}
