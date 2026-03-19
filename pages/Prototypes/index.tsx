import { useRouter } from 'next/router'

const prototypes = [
  { href: 'Prototypes/JungleClears', icon: '🌲', label: 'Jungle Clears', description: 'League of Legends jungle route planner pulled live from Google Sheets' },
  { href: 'Prototypes/PokemonEffectiveness', icon: null, label: 'Pokemon Effectiveness', description: 'Look up type matchups and damage multipliers for any Pokémon' },
  { href: 'Prototypes/LoopHeroSolver', icon: '🔁', label: 'Loop Hero', description: 'Tile placement helper and strategy guide for Loop Hero runs' },
  { href: 'Prototypes/CardsForBeats', icon: '🥁', label: 'Cards For Beats', description: 'Card-based game for generating beat patterns and rhythm ideas' },
  { href: 'Prototypes/Menu', icon: '🍝', label: 'Menu', description: 'Weekly meal planner and recipe browser for home cooking' },
  { href: 'Prototypes/Timezones', icon: '⏰', label: 'Timezones', description: 'Compare current times across multiple cities at a glance' },
  { href: 'Prototypes/HtmlColors', icon: '🎨', label: 'HTML Colors', description: 'Browse and search all named HTML/CSS colours with hex values' },
  { href: 'Prototypes/ContractionTimer', icon: '👶', label: 'Contraction Timer', description: 'Time and track contractions during labour with duration and frequency' },
  { href: 'Prototypes/PhpMigration', icon: '🐘', label: 'PHP Gotchas', description: 'Common PHP pitfalls and migration gotchas for .NET developers' },
  { href: 'Prototypes/StoryGenerator', icon: '📖', label: 'Story Generator', description: 'Build a bedtime story one choice at a time — hero, world, quest and more' },
  { href: 'Prototypes/Sourdough', icon: '🍞', label: 'Sourdough Guide', description: 'Complete guide to sourdough — starter care, feeding schedule, and baking a loaf' },
  { href: 'Prototypes/VegPatch', icon: '🥦', label: 'Veg Patch', description: 'Plan and track your vegetable garden beds' },
]

export default function Prototypes() {
  const router = useRouter()

  return (
    <div className="pageWrapper">

      <div className="pageHeader">
        <p className="pageEyebrow">Lab</p>
        <h1 className="pageTitle">Prototypes.</h1>
        <p className="pageSubtitle">Interactive tools and experiments — built to explore ideas and solve problems.</p>
      </div>

      <div className="row justify-content-center g-3">
        {prototypes.map((p) => (
          <div key={p.href} className="col-lg-4 col-md-6 my-2">
            <div className="tile" onClick={() => router.push(p.href)} style={{ cursor: 'pointer', textAlign: 'center' }}>
              {p.icon ? (
                <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>{p.icon}</span>
              ) : (
                <div style={{ height: 150, paddingTop: 20 }}>
                  <div className="Pokeball" style={{ margin: 'auto' }}>
                    <div className="PokeballLine"></div>
                    <div className="PokeballDot"></div>
                  </div>
                </div>
              )}
              <div className="tileText">{p.label}</div>
              <div className="tileDescription">{p.description}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
