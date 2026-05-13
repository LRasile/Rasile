import { useState } from 'react'
import LogoLoading from '../../components/LogoLoading'

// ─── Demo page ────────────────────────────────────────────────────────────────

const BACKGROUNDS = [
  { label: 'White', value: '#ffffff' },
  { label: 'Transparent', value: 'transparent' },
  { label: 'Dark', value: '#1a1a2e' },
]

export default function LRLoader() {
  const [size, setSize] = useState(240)
  const [duration, setDuration] = useState(5.33)
  const [showDots, setShowDots] = useState(true)
  const [dotColor, setDotColor] = useState('#000000')
  const [bg, setBg] = useState('#ffffff')

  return (
    <div className="pageWrapper">
      <div className="pageHeader">
        <p className="pageEyebrow">Prototype</p>
        <h1 className="pageTitle">Logo Loader</h1>
        <p className="pageSubtitle">Animated rainbow gradient loading indicator using the Rasile logo.</p>
      </div>

      {/* Preview */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 320,
          borderRadius: 16,
          background: 'transparent',
          marginBottom: '2rem',
          transition: 'background 0.3s',
        }}
      >
        <LogoLoading />
      </div>

    </div>
  )
}
