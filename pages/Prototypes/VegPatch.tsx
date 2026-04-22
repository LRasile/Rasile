import { useState, useEffect } from 'react'

const crops: Record<string, { emoji: string; name: string; color: string; bg: string; desc: string; tip: string }> = {
  tomatoes:      { emoji: '🍅', name: 'Tomatoes',       color: '#ff8a65', bg: '#2a1810', desc: 'Cordon, on bamboo runners',       tip: 'Pinch out side shoots weekly!' },
  courgette:     { emoji: '🥒', name: 'Courgette',      color: '#81c784', bg: '#1a2b18', desc: '1 large plant',                   tip: 'Pick at 15cm for best flavour' },
  cucumber:      { emoji: '🫛', name: 'Cucumber',       color: '#a5d6a7', bg: '#1a2b1a', desc: 'Train vertically up cane ↑',      tip: 'Needs warm soil — plant late May' },
  chard:         { emoji: '🌿', name: 'Chard',          color: '#81c784', bg: '#1a2b18', desc: 'Cut-and-come-again',              tip: 'Pick outer leaves, it keeps regrowing!' },
  carrots:       { emoji: '🥕', name: 'Carrots',        color: '#ff8a50', bg: '#2a2010', desc: '3 rows, direct sow April',        tip: 'Thin to 5cm apart once sprouted' },
  beans:         { emoji: '🫘', name: 'French Beans',   color: '#8bc34a', bg: '#1e2b14', desc: 'Direct sow May',                  tip: "Sow direct — they hate being transplanted" },
  lettuce:       { emoji: '🥬', name: 'Lettuce',        color: '#aed581', bg: '#232a12', desc: 'Cut-and-come-again',              tip: 'Watch for bolting in July heat' },
  radishes:      { emoji: '🔴', name: 'Radishes',       color: '#ef5350', bg: '#2a1010', desc: 'Ready in just 4 weeks!',          tip: 'Great for little ones to watch grow 🌱' },
  springOnions:  { emoji: '🧅', name: 'Spring Onions',  color: '#d4e157', bg: '#282a12', desc: 'Easy & quick',                    tip: 'Ready in about 8 weeks' },
  cavalloNero:   { emoji: '🌿', name: 'Cavolo Nero',    color: '#7986cb', bg: '#16182a', desc: 'WINTER — sow July/Aug',           tip: 'Hardy Italian kale, very easy' },
  spinach:       { emoji: '🌱', name: 'Spinach',        color: '#64b5f6', bg: '#12182a', desc: 'WINTER — sow August',             tip: 'Loves cooler autumn weather' },
  pakChoi:       { emoji: '🥬', name: 'Pak Choi',       color: '#4db6ac', bg: '#121e1e', desc: 'WINTER — sow August',             tip: 'Ready in just 6 weeks, great in stir fries!' },
  winterLettuce: { emoji: '🍃', name: 'Winter Lettuce', color: '#81c784', bg: '#1e2b14', desc: 'WINTER — Arctic King/Valdor',     tip: 'Frost hardy varieties, sow Aug/Sept' },
}

const bedRows = [
  { cells: [{ id: 'tomatoes', span: 5 }],                                                                                             winter: false },
  { cells: [{ id: 'courgette', span: 2 }, { id: 'cucumber', span: 1 }, { id: 'chard', span: 2 }],                                    winter: false },
  { cells: [{ id: 'carrots', span: 3 }, { id: 'beans', span: 2 }],                                                                   winter: false },
  { cells: [{ id: 'lettuce', span: 2 }, { id: 'radishes', span: 1 }, { id: 'springOnions', span: 2 }],                               winter: false },
  { cells: [{ id: 'cavalloNero', span: 2 }, { id: 'spinach', span: 1 }, { id: 'pakChoi', span: 1 }, { id: 'winterLettuce', span: 1 }], winter: true },
]

const sideLabels = ['North\n(back)', '', '', '', 'South\n(front)']
const depthLabels = ['0–50cm', '50–100cm', '100–150cm', '150–200cm', '200–250cm']

const herbs = [
  { emoji: '🌿', name: 'Basil',     color: '#81c784', bg: '#1a2b18', type: 'Annual',    pair: 'Perfect with tomatoes',  tip: 'Keep warm & sunny. Pinch flowers off to keep it bushy. Bring inside in Sept.' },
  { emoji: '🌱', name: 'Mint',      color: '#4db6ac', bg: '#121e1e', type: 'Perennial', pair: 'Drinks, salads, lamb',   tip: 'The individual section is key — mint WILL take over if not contained!' },
  { emoji: '🌿', name: 'Parsley',   color: '#81c784', bg: '#1e2b14', type: 'Biennial',  pair: 'Almost everything',      tip: 'Slow to germinate (3–4 weeks). Sow indoors March, plant out May.' },
  { emoji: '🌾', name: 'Coriander', color: '#8bc34a', bg: '#232a12', type: 'Annual',    pair: 'Asian & Mexican dishes', tip: 'Bolts in heat — try sowing every 3 weeks for continuous supply. Keep slightly shaded.' },
  { emoji: '🌿', name: 'Thyme',     color: '#a1887f', bg: '#211c1a', type: 'Perennial', pair: 'Roast veg, chicken',     tip: 'Loves dry sunny conditions. Cut back after flowering to keep it compact.' },
  { emoji: '💜', name: 'Chives',    color: '#ce93d8', bg: '#1e1226', type: 'Perennial', pair: 'Eggs, salads, potato',   tip: 'Cut right down to 2cm regularly — it comes back thicker every time.' },
  { emoji: '🌿', name: 'Oregano',   color: '#ff8a50', bg: '#2a2010', type: 'Perennial', pair: 'Tomatoes, pizza, pasta', tip: 'Leaves are most flavourful just before flowering. Dry bunches for winter use.' },
  { emoji: '🌾', name: 'Dill',      color: '#d4e157', bg: '#232a12', type: 'Annual',    pair: 'Cucumber, fish, eggs',   tip: "Sow direct — it hates transplanting. Keep away from fennel (they cross-pollinate)." },
]

const legendItems = [
  { color: '#ff8a65', label: 'Back row (tallest)' },
  { color: '#81c784', label: 'Mid bed' },
  { color: '#aed581', label: 'Front bed' },
  { color: '#7986cb', label: 'Winter ❄️' },
]

export default function VegPatch() {
  const [view, setView] = useState<'summer' | 'winter'>('summer')
  const [hoveredCrop, setHoveredCrop] = useState<string | null>(null)
  const [hoveredHerb, setHoveredHerb] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(800)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 640
  const bedSize = isMobile ? windowWidth - 40 : 510

  const activeCrop = hoveredCrop ? crops[hoveredCrop] : null
  const activeHerb = hoveredHerb !== null ? herbs[hoveredHerb] : null

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '32px 20px 48px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 12, letterSpacing: 3, color: '#66bb6a', textTransform: 'uppercase', marginBottom: 6 }}>
            250cm × 250cm · South Facing · UK Garden
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 26 : 38,
              color: '#a5d6a7',
              fontWeight: 400,
              letterSpacing: '-0.5px',
              marginBottom: 6,
            }}
          >
            Your Raised Veg Bed
          </h1>
          <div style={{ width: 60, height: 3, background: '#81c784', margin: '14px auto 22px', borderRadius: 2 }} />

          {/* Season toggle */}
          <div
            style={{
              display: 'inline-flex',
              background: '#2d3748',
              borderRadius: 40,
              padding: 4,
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
              gap: 2,
            }}
          >
            {(['summer', 'winter'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  padding: '8px 24px',
                  borderRadius: 36,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                  background: view === v ? '#2e7d32' : 'transparent',
                  color: view === v ? 'white' : '#81c784',
                }}
              >
                {v === 'summer' ? '☀️ Summer' : '❄️ Winter'}
              </button>
            ))}
          </div>
        </div>

        {/* Bed layout */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', width: '100%', maxWidth: 780, marginBottom: 18 }}>
          {/* Side labels */}
          <div style={{ display: isMobile ? 'none' : 'flex', flexDirection: 'column', gap: 5, minWidth: 52, height: 510, marginTop: 36 }}>
            {sideLabels.map((label, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: 8,
                  fontSize: 10,
                  color: '#4a7c5f',
                  textAlign: 'right',
                  lineHeight: 1.3,
                  whiteSpace: 'pre-line',
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Bed */}
          <div style={{ flex: 1 }}>
            <div
              style={{ textAlign: 'center', marginBottom: 8, fontSize: 11, color: '#4a7c5f', letterSpacing: 2, textTransform: 'uppercase' }}
            >
              ← House &amp; Window →
            </div>
            <div
              style={{
                background: '#2d3748',
                borderRadius: 16,
                padding: 10,
                boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(129,199,132,0.15)',
                width: bedSize,
                height: bedSize,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
            >
              {bedRows.map((row, ri) => {
                const dimmed = (view === 'summer' && row.winter) || (view === 'winter' && !row.winter)
                return (
                  <div key={ri} style={{ display: 'flex', gap: 5, flex: 1, opacity: dimmed ? 0.15 : 1, transition: 'opacity 0.3s' }}>
                    {row.cells.map((cellDef) => {
                      const crop = crops[cellDef.id]
                      const isHovered = hoveredCrop === cellDef.id
                      return (
                        <div
                          key={cellDef.id}
                          onMouseEnter={() => setHoveredCrop(cellDef.id)}
                          onMouseLeave={() => setHoveredCrop(null)}
                          style={{
                            flex: cellDef.span,
                            borderRadius: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            padding: '6px 4px',
                            transition: 'all 0.18s ease',
                            background: isHovered ? crop.color : crop.bg,
                            boxShadow: isHovered ? `0 4px 20px ${crop.color}55` : 'none',
                            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                          }}
                        >
                          <div style={{ fontSize: ri === 0 ? 20 : 22, lineHeight: 1, marginBottom: 3 }}>{crop.emoji}</div>
                          <div
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              textAlign: 'center',
                              lineHeight: 1.2,
                              letterSpacing: 0.2,
                              color: isHovered ? '#1a202c' : '#e2e8f0',
                            }}
                          >
                            {crop.name}
                          </div>
                          {ri !== 0 && (
                            <div
                              style={{
                                fontSize: 8.5,
                                color: isHovered ? 'rgba(0,0,0,0.6)' : '#a0aec0',
                                textAlign: 'center',
                                marginTop: 2,
                                lineHeight: 1.2,
                              }}
                            >
                              {crop.desc}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            <div
              style={{ textAlign: 'center', marginTop: 8, fontSize: 11, color: '#4a7c5f', letterSpacing: 2, textTransform: 'uppercase' }}
            >
              ☀️ South — maximum sun
            </div>
          </div>

          {/* Depth labels */}
          <div style={{ display: isMobile ? 'none' : 'flex', flexDirection: 'column', gap: 5, minWidth: 56, height: 510, marginTop: 36 }}>
            {depthLabels.map((label, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', fontSize: 9, color: '#4a7c5f', lineHeight: 1.3, paddingLeft: 6 }}>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Crop info panel */}
        <div
          style={{
            width: '100%',
            maxWidth: 780,
            minHeight: 90,
            background: activeCrop ? activeCrop.bg : '#2d3748',
            borderRadius: 14,
            padding: '20px 24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            border: `2px solid ${activeCrop ? activeCrop.color + '55' : 'transparent'}`,
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 20,
          }}
        >
          {activeCrop ? (
            <>
              <div style={{ fontSize: 44 }}>{activeCrop.emoji}</div>
              <div>
                <div
                  style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 4, fontFamily: "'Playfair Display', serif", color: activeCrop.color }}
                >
                  {activeCrop.name}
                </div>
                <div style={{ fontSize: 13, color: '#a0aec0', marginBottom: 8 }}>{activeCrop.desc}</div>
                <span
                  style={{
                    display: 'inline-block',
                    color: '#1a202c',
                    background: activeCrop.color,
                    padding: '5px 14px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  💡 {activeCrop.tip}
                </span>
              </div>
            </>
          ) : (
            <div style={{ fontSize: 14, color: '#4a5568', margin: '0 auto', textAlign: 'center' }}>
              Hover over any crop to see tips 🌱
            </div>
          )}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {legendItems.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#718096' }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: item.color }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Herb Planter */}
        <div style={{ width: '100%', maxWidth: 780, marginTop: 40 }}>
          <div style={{ textAlign: 'center', marginBottom: 6 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, color: '#66bb6a', textTransform: 'uppercase', marginBottom: 4 }}>
              Separate Planter
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: '#a5d6a7', fontWeight: 400 }}>
              Your Herb Planter 🌿
            </h2>
            <div style={{ width: 40, height: 3, background: '#81c784', margin: '10px auto 6px', borderRadius: 2 }} />
            <div style={{ fontSize: 12, color: '#718096', fontFamily: "'DM Sans', sans-serif" }}>Hover to see growing tips</div>
          </div>

          <div
            style={{
              background: '#2d3748',
              borderRadius: 16,
              padding: 16,
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: 10,
            }}
          >
            {herbs.map((herb, i) => {
              const isHovered = hoveredHerb === i
              return (
                <div
                  key={herb.name}
                  onMouseEnter={() => setHoveredHerb(i)}
                  onMouseLeave={() => setHoveredHerb(null)}
                  style={{
                    borderRadius: 12,
                    background: isHovered ? herb.color : herb.bg,
                    padding: '14px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    textAlign: 'center',
                    minHeight: 110,
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    boxShadow: isHovered ? `0 4px 20px ${herb.color}55` : 'none',
                  }}
                >
                  <div style={{ fontSize: 26, marginBottom: 5 }}>{herb.emoji}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: isHovered ? '#1a202c' : '#e2e8f0', letterSpacing: 0.3, marginBottom: 3 }}>
                    {herb.name}
                  </div>
                  <div style={{ fontSize: 9, color: isHovered ? 'rgba(0,0,0,0.6)' : '#a0aec0', marginBottom: 2, fontStyle: 'italic' }}>
                    {herb.type}
                  </div>
                  <div style={{ fontSize: 9, color: isHovered ? 'rgba(0,0,0,0.5)' : '#a0aec0', lineHeight: 1.3 }}>{herb.pair}</div>
                </div>
              )
            })}
          </div>

          {/* Herb info panel */}
          <div
            style={{
              width: '100%',
              minHeight: 90,
              background: activeHerb ? activeHerb.bg : '#2d3748',
              borderRadius: 14,
              padding: '20px 24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: `2px solid ${activeHerb ? activeHerb.color + '55' : 'transparent'}`,
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 14,
            }}
          >
            {activeHerb ? (
              <>
                <div style={{ fontSize: 44 }}>{activeHerb.emoji}</div>
                <div>
                  <div
                    style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 4, fontFamily: "'Playfair Display', serif", color: activeHerb.color }}
                  >
                    {activeHerb.name}{' '}
                    <span style={{ fontSize: 13, fontWeight: 400, color: '#718096', fontFamily: "'DM Sans', sans-serif" }}>
                      {activeHerb.type}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: '#a0aec0', marginBottom: 8 }}>Great with: {activeHerb.pair}</div>
                  <span
                    style={{
                      display: 'inline-block',
                      color: '#1a202c',
                      background: activeHerb.color,
                      padding: '5px 14px',
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    💡 {activeHerb.tip}
                  </span>
                </div>
              </>
            ) : (
              <div style={{ fontSize: 14, color: '#4a5568', margin: '0 auto', textAlign: 'center' }}>
                Hover over any herb to see tips 🌿
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
