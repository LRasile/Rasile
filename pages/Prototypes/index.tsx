import React, { useState } from 'react'
import { useRouter } from 'next/router'

const ChampionsLogo = () => (
  <svg width="110" height="122" viewBox="0 0 110 122" xmlns="http://www.w3.org/2000/svg">
    {/* Crown */}
    <polygon points="18,58 18,36 33,48 55,20 77,48 92,36 92,58" fill="#FFD700" stroke="#B8860B" strokeWidth="2" strokeLinejoin="round" />
    {/* Crown gems */}
    <circle cx="55" cy="23" r="4.5" fill="#FF3333" />
    <circle cx="20.5" cy="39" r="3.5" fill="#3399FF" />
    <circle cx="89.5" cy="39" r="3.5" fill="#44CC44" />
    {/* Pokeball upper half (red) */}
    <path d="M18,90 A37,37 0 0 1 92,90 Z" fill="#E74C3C" />
    {/* Pokeball lower half (white) */}
    <path d="M18,90 A37,37 0 0 0 92,90 Z" fill="#F8F8F8" />
    {/* Pokeball outline */}
    <circle cx="55" cy="90" r="37" fill="none" stroke="#333" strokeWidth="2.5" />
    {/* Dividing line */}
    <line x1="18" y1="90" x2="92" y2="90" stroke="#333" strokeWidth="2.5" />
    {/* Center button ring */}
    <circle cx="55" cy="90" r="11" fill="white" stroke="#333" strokeWidth="2.5" />
    {/* Center button dot */}
    <circle cx="55" cy="90" r="5" fill="#444" />
  </svg>
)

const prototypes = [
  { href: '/Prototypes/PokemonEffectiveness', icon: null, label: 'Pokemon Effectiveness', description: 'Look up type matchups and damage multipliers for any Pokémon' },
  { href: '/Prototypes/ChampionsTeamBuilder', icon: <ChampionsLogo />, label: 'Champions Team Builder', description: 'Build a Pokémon Champions team — assign items and moves, analyse weaknesses and speeds' },
  { href: '/Prototypes/JungleClears', icon: '🌲', label: 'Jungle Clears', description: 'League of Legends jungle route planner pulled live from Google Sheets' },
  { href: '/Prototypes/LoopHeroSolver', icon: '🔁', label: 'Loop Hero', description: 'Tile placement helper and strategy guide for Loop Hero runs' },
  { href: '/Prototypes/CardsForBeats', icon: '🥁', label: 'Cards For Beats', description: 'Card-based game for generating beat patterns and rhythm ideas' },
  { href: '/Prototypes/Menu', icon: '🍝', label: 'Menu', description: 'Weekly meal planner and recipe browser for home cooking' },
  { href: '/Prototypes/Timezones', icon: '⏰', label: 'Timezones', description: 'Compare current times across multiple cities at a glance' },
  { href: '/Prototypes/HtmlColors', icon: '🎨', label: 'HTML Colors', description: 'Browse and search all named HTML/CSS colours with hex values' },
  { href: '/Prototypes/ContractionTimer', icon: '👶', label: 'Contraction Timer', description: 'Time and track contractions during labour with duration and frequency' },
  { href: '/Prototypes/PhpMigration', icon: '🐘', label: 'PHP Gotchas', description: 'Common PHP pitfalls and migration gotchas for .NET developers' },
  { href: '/Prototypes/StoryGenerator', icon: '📖', label: 'Story Generator', description: 'Build a bedtime story one choice at a time — hero, world, quest and more' },
  { href: '/Prototypes/Sourdough', icon: '🍞', label: 'Sourdough Guide', description: 'Complete guide to sourdough — starter care, feeding schedule, and baking a loaf' },
  { href: '/Prototypes/VegPatch', icon: '🥦', label: 'Veg Patch', description: 'Plan and track your vegetable garden beds' },
]

export default function Prototypes() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const navigate = (href: string) => {
    setLoading(true)
    router.push(href)
  }

  return (
    <div className="pageWrapper">

      {loading && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ width: 48, height: 48, border: '5px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        </div>
      )}

      <div className="pageHeader">
        <p className="pageEyebrow">Lab</p>
        <h1 className="pageTitle">Prototypes.</h1>
        <p className="pageSubtitle">Interactive tools and experiments — built to explore ideas and solve problems.</p>
      </div>

      <div className="row justify-content-center g-3">
        {prototypes.map((p) => (
          <div key={p.href} className="col-lg-4 col-md-6 my-2">
            <div className="tile" onClick={() => navigate(p.href)} style={{ cursor: 'pointer', textAlign: 'center' }}>
              {p.icon && typeof p.icon === 'string' ? (
                <span style={{ margin: 'auto', paddingTop: 10, fontSize: 100 }}>{p.icon}</span>
              ) : p.icon ? (
                <div style={{ height: 150, paddingTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{p.icon}</div>
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
