import { useState } from 'react'

const categories = [
  {
    id: 'hero',
    label: 'Who is the hero?',
    options: [
      { id: 'princess', emoji: '👸', label: 'Brave Princess' },
      { id: 'wizard', emoji: '🧙', label: 'Tiny Wizard' },
      { id: 'dragon', emoji: '🐉', label: 'Friendly Dragon' },
      { id: 'astronaut', emoji: '🚀', label: 'Lost Astronaut' },
      { id: 'fox', emoji: '🦊', label: 'Clever Fox' },
    ],
  },
  {
    id: 'world',
    label: 'Where do they go?',
    options: [
      { id: 'forest', emoji: '🌲', label: 'Enchanted Forest' },
      { id: 'castle', emoji: '🏰', label: 'Magical Castle' },
      { id: 'ocean', emoji: '🌊', label: 'Underwater Kingdom' },
      { id: 'space', emoji: '🌌', label: 'Outer Space' },
      { id: 'clouds', emoji: '☁️', label: 'Cloud Kingdom' },
    ],
  },
  {
    id: 'companion',
    label: 'Who helps them?',
    options: [
      { id: 'owl', emoji: '🦉', label: 'Wise Owl' },
      { id: 'elephant', emoji: '🐘', label: 'Baby Elephant' },
      { id: 'butterfly', emoji: '🦋', label: 'Magic Butterfly' },
      { id: 'tortoise', emoji: '🐢', label: 'Ancient Tortoise' },
      { id: 'unicorn', emoji: '🦄', label: 'Tiny Unicorn' },
    ],
  },
  {
    id: 'quest',
    label: 'What is the quest?',
    options: [
      { id: 'star', emoji: '⭐', label: 'Find a Missing Star' },
      { id: 'rainbow', emoji: '🌈', label: 'Rescue the Rainbow' },
      { id: 'treasure', emoji: '🗝️', label: 'Discover Lost Treasure' },
      { id: 'garden', emoji: '🌸', label: 'Save the Magic Garden' },
      { id: 'melody', emoji: '🎵', label: 'Find the Lost Melody' },
    ],
  },
  {
    id: 'item',
    label: 'What magic item helps?',
    options: [
      { id: 'map', emoji: '🗺️', label: 'Magic Map' },
      { id: 'crystal', emoji: '🔮', label: 'Crystal Ball' },
      { id: 'shoes', emoji: '👟', label: 'Flying Shoes' },
      { id: 'lantern', emoji: '🏮', label: 'Glowing Lantern' },
      { id: 'wand', emoji: '🪄', label: 'Wishing Wand' },
    ],
  },
  {
    id: 'ending',
    label: 'How does it end?',
    options: [
      { id: 'celebration', emoji: '🎉', label: 'Grand Celebration' },
      { id: 'home', emoji: '🏠', label: 'Cosy at Home' },
      { id: 'friend', emoji: '🤝', label: 'A New Friend' },
      { id: 'discovery', emoji: '🌟', label: 'A Wonderful Discovery' },
      { id: 'sleep', emoji: '😴', label: 'Drifting Off to Sleep' },
    ],
  },
]

type Picks = Record<string, string>

export default function StoryGenerator() {
  const [picks, setPicks] = useState<Picks>({})

  const pick = (categoryId: string, optionId: string) => {
    setPicks((prev) => {
      if (prev[categoryId] === optionId) {
        const next = { ...prev }
        delete next[categoryId]
        return next
      }
      return { ...prev, [categoryId]: optionId }
    })
  }

  const allPicked = categories.every((c) => picks[c.id])
  const pickedCount = Object.keys(picks).length

  const summaryParts = categories
    .filter((c) => picks[c.id])
    .map((c) => {
      const opt = c.options.find((o) => o.id === picks[c.id])
      return opt ? `${opt.emoji} ${opt.label}` : null
    })
    .filter(Boolean)

  return (
    <div className="panel" style={{ margin: '1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.25rem' }}>Story Generator</h1>
        <p style={{ color: '#a0aec0', margin: 0 }}>Make your choices, then bring the story to life.</p>
      </div>

      {/* Category sections */}
      {categories.map((cat) => (
        <div key={cat.id} style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <h5 style={{ margin: 0, color: '#e2e8f0' }}>{cat.label}</h5>
            {picks[cat.id] && (
              <span style={{ fontSize: '0.72rem', color: '#68d391', background: 'rgba(104,211,145,0.1)', border: '1px solid rgba(104,211,145,0.3)', borderRadius: '10px', padding: '0.1rem 0.5rem' }}>
                ✓ chosen
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {cat.options.map((opt) => {
              const isSelected = picks[cat.id] === opt.id
              return (
                <button
                  key={opt.id}
                  onClick={() => pick(cat.id, opt.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    width: 100,
                    padding: '0.75rem 0.5rem',
                    borderRadius: '8px',
                    border: `1px solid ${isSelected ? 'rgba(99,179,237,0.7)' : 'rgba(255,255,255,0.12)'}`,
                    background: isSelected ? 'rgba(99,179,237,0.12)' : 'rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    color: isSelected ? '#63b3ed' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{opt.emoji}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.2 }}>{opt.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {/* Summary */}
      <div
        className="tile"
        style={{
          marginTop: '1rem',
          borderColor: allPicked ? 'rgba(99,179,237,0.4)' : 'rgba(255,255,255,0.1)',
          transition: 'border-color 0.3s ease',
        }}
      >
        <h5 style={{ marginBottom: '0.75rem', color: '#e2e8f0' }}>
          Your Story &nbsp;
          <span style={{ fontSize: '0.78rem', color: '#718096', fontWeight: 400 }}>
            {pickedCount}/{categories.length} choices made
          </span>
        </h5>

        {pickedCount === 0 ? (
          <p style={{ color: '#4a5568', margin: 0, fontSize: '0.9rem' }}>Start picking above to build your story…</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {summaryParts.map((part, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(99,179,237,0.1)',
                  border: '1px solid rgba(99,179,237,0.25)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.85rem',
                  color: '#90cdf4',
                }}
              >
                {part}
              </span>
            ))}
          </div>
        )}

        <button
          disabled={!allPicked}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.4rem',
            borderRadius: '6px',
            border: `1px solid ${allPicked ? 'rgba(99,179,237,0.7)' : 'rgba(255,255,255,0.1)'}`,
            background: allPicked ? 'rgba(99,179,237,0.2)' : 'rgba(255,255,255,0.03)',
            color: allPicked ? '#63b3ed' : '#4a5568',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: allPicked ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
          }}
          title={!allPicked ? `Pick ${categories.length - pickedCount} more choice${categories.length - pickedCount !== 1 ? 's' : ''} to continue` : 'Generate your story'}
        >
          ✨ Tell me this story
          {!allPicked && (
            <span style={{ fontSize: '0.75rem', fontWeight: 400 }}>
              ({categories.length - pickedCount} left)
            </span>
          )}
        </button>
        {allPicked && (
          <p style={{ marginTop: '0.6rem', color: '#718096', fontSize: '0.8rem', marginBottom: 0 }}>
            AI story generation coming soon — your choices are ready to go!
          </p>
        )}
      </div>
    </div>
  )
}
