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
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState('')
  const [error, setError] = useState('')

  const pick = (categoryId: string, optionId: string) => {
    if (story) return // lock choices once story is shown
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

  const labelledPicks: Record<string, string> = {}
  for (const cat of categories) {
    if (picks[cat.id]) {
      const opt = cat.options.find((o) => o.id === picks[cat.id])
      if (opt) labelledPicks[cat.id] = opt.label
    }
  }

  const handleGenerate = async () => {
    setLoading(true)
    setStory('')
    setError('')

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ picks: labelledPicks }),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.detail || body.error || 'Failed to generate story')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error('No response stream')

      setLoading(false)

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        setStory((prev) => prev + decoder.decode(value))
      }
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'Something went wrong — please try again.')
    }
  }

  const handleReset = () => {
    setStory('')
    setError('')
    setPicks({})
  }

  return (
    <div className="panel" style={{ margin: '1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.25rem' }}>Story Generator</h1>
        <p style={{ color: '#a0aec0', margin: 0 }}>Make your choices, then bring the story to life.</p>
      </div>

      {/* Category sections — hidden once story is generated */}
      {!story && (
        <>
          {categories.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h5 style={{ margin: 0, color: '#e2e8f0' }}>{cat.label}</h5>
                {picks[cat.id] && (
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#68d391',
                      background: 'rgba(104,211,145,0.1)',
                      border: '1px solid rgba(104,211,145,0.3)',
                      borderRadius: '10px',
                      padding: '0.1rem 0.5rem',
                    }}
                  >
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
        </>
      )}

      {/* Summary + Generate */}
      {!story && (
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
            disabled={!allPicked || loading}
            onClick={handleGenerate}
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
              cursor: allPicked && !loading ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
            }}
            title={!allPicked ? `Pick ${categories.length - pickedCount} more to continue` : undefined}
          >
            ✨ Tell me this story
            {!allPicked && (
              <span style={{ fontSize: '0.75rem', fontWeight: 400 }}>({categories.length - pickedCount} left)</span>
            )}
          </button>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: '#a0aec0' }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '3px solid rgba(255,255,255,0.1)',
              borderTop: '3px solid #63b3ed',
              animation: 'spin 0.8s linear infinite',
              margin: '0 auto 1rem',
            }}
          />
          <p style={{ margin: 0, fontSize: '0.9rem' }}>Writing your story…</p>
        </div>
      )}

      {/* Story output */}
      {story && (
        <div>
          {/* Choices recap */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {summaryParts.map((part, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(99,179,237,0.08)',
                  border: '1px solid rgba(99,179,237,0.2)',
                  borderRadius: '6px',
                  padding: '0.2rem 0.55rem',
                  fontSize: '0.78rem',
                  color: '#90cdf4',
                }}
              >
                {part}
              </span>
            ))}
          </div>

          {/* Story text */}
          <div
            className="tile"
            style={{
              lineHeight: 1.85,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.88)',
              whiteSpace: 'pre-wrap',
              borderColor: 'rgba(99,179,237,0.2)',
            }}
          >
            {story}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            <button
              onClick={handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
              }}
            >
              ← New story
            </button>
            <button
              onClick={handleGenerate}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '6px',
                border: '1px solid rgba(99,179,237,0.5)',
                background: 'rgba(99,179,237,0.1)',
                color: '#63b3ed',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
              }}
            >
              ✨ Tell it again differently
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <p style={{ color: '#fc8181', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</p>
      )}
    </div>
  )
}
