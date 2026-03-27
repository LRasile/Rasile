import { FaArrowsAltH, FaSyncAlt } from 'react-icons/fa'
import { useState } from 'react'

const btn = (active: boolean): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.45rem 1rem',
  borderRadius: '6px',
  border: `1px solid ${active ? 'rgba(59,130,246,0.5)' : 'rgba(15,23,42,0.15)'}`,
  background: active ? 'rgba(59,130,246,0.1)' : 'rgba(15,23,42,0.04)',
  color: active ? '#3b82f6' : 'rgba(15,23,42,0.7)',
  fontSize: '0.88rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
})

export default function LoopHeroSolver() {
  const [rotated, setRotated] = useState(false)
  const [mirrored, setMirrored] = useState(false)

  const imageStyle: React.CSSProperties = {
    height: 600,
    margin: 'auto',
    transition: 'all 0.4s ease',
    transform: (rotated ? 'rotate(180deg) ' : '') + (mirrored ? 'rotateY(180deg)' : ''),
  }

  return (
    <div className="panel" style={{ margin: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button style={btn(mirrored)} onClick={() => setMirrored(!mirrored)}>
          <FaArrowsAltH />
          Mirror
        </button>
        <button style={btn(rotated)} onClick={() => setRotated(!rotated)}>
          <FaSyncAlt style={{ transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.4s ease' }} />
          Rotate
        </button>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>234% Attack Speed</p>
            <p style={{ fontSize: '0.9rem', color: '#a0aec0' }}>22 Thickets · 38 Rivers</p>
          </div>
          <img style={imageStyle} src="../images/5by12.jpg" title="234% Attack Speed" alt="5x12 loop layout" />
        </div>
        <div className="flex-item">
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>176% Attack Speed</p>
            <p style={{ fontSize: '0.9rem', color: '#a0aec0' }}>14 Thickets · 34 Rivers</p>
          </div>
          <img style={imageStyle} src="../images/4by12.jpg" title="176% Attack Speed" alt="4x12 loop layout" />
        </div>
      </div>
    </div>
  )
}
