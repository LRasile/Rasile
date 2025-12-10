import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa'
import { useState } from 'react'

export default function LoopHeroSolver() {
  const [rotated, setRotated] = useState(false)
  const [mirrored, setMirrored] = useState(false)

  const imageStyle = {
    height: 600,
    margin: 'auto',
    transition: 'all 0.4s ease',
    transform: (rotated ? 'rotate(180deg) ' : 'rotate(0deg) ') + (mirrored ? 'rotateY(180deg)' : 'rotateY(0deg)'),
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setMirrored(!mirrored)}>
          {!mirrored ? (
            <>
              Mirror
              <FaArrowRight />
            </>
          ) : (
            <>
              Un-Mirror
              <FaArrowLeft />
            </>
          )}
        </button>
        <button onClick={() => setRotated(!rotated)}>
          {!rotated ? 'Rotate' : 'Un-Rotate'}
          <FaSpinner />
        </button>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          {' '}
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem' }}>234% Attack Speed</p>
            <p style={{ fontSize: '1rem' }}>22 Thickets</p>
            <p style={{ fontSize: '1rem' }}>38 Rivers</p>
          </div>
          <img style={imageStyle} src="../images/5by12.jpg" title="234% Attack Speed" />
        </div>
        <div className="flex-item">
          {' '}
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem' }}>176% Attack Speed</p>
            <p style={{ fontSize: '1rem' }}> 14 Thickets </p>
            <p style={{ fontSize: '1rem' }}> 34 Rivers</p>
          </div>
          <img style={imageStyle} src="../images/4by12.jpg" title="176% Attack Speed" />
        </div>
      </div>
    </>
  )
}
