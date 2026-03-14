export default function CityTime({ city, timeZone, now }: { city: string; timeZone: string; now: Date }) {
  const localTime = now.toLocaleTimeString('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' })

  const utcMs = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' })).getTime()
  const tzMs = new Date(now.toLocaleString('en-US', { timeZone })).getTime()
  const diffH = (tzMs - utcMs) / (1000 * 60 * 60)
  const sign = diffH >= 0 ? '+' : '-'
  const absH = Math.abs(diffH)
  const hours = Math.floor(absH)
  const minutes = Math.round((absH - hours) * 60)
  const offset = `UTC${sign}${hours}${minutes > 0 ? ':' + String(minutes).padStart(2, '0') : ''}`

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
      <div style={{ fontWeight: 600 }}>{city}</div>
      <div style={{ fontFamily: 'monospace' }}>
        {localTime} <span style={{ color: '#718096', fontSize: '0.85rem' }}>{offset}</span>
      </div>
    </div>
  )
}
