import { useEffect, useState } from 'react'

const cities = [
  { name: 'Los Angeles', timeZone: 'America/Los_Angeles', left: 7.1, top: 38.6 },
  { name: 'Denver', timeZone: 'America/Denver', left: 10.2, top: 36.2 },
  { name: 'Chicago', timeZone: 'America/Chicago', left: 16.5, top: 34.6 },
  { name: 'New York', timeZone: 'America/New_York', left: 18.9, top: 36.2 },
  { name: 'London', timeZone: 'Europe/London', left: 39.8, top: 27.6 },
  { name: 'Paris', timeZone: 'Europe/Paris', left: 40.9, top: 30.7 },
  { name: 'Athens', timeZone: 'Europe/Athens', left: 46.1, top: 36.2 },
  { name: 'Moscow', timeZone: 'Europe/Moscow', left: 48.8, top: 25.2 },
  { name: 'Beijing', timeZone: 'Asia/Shanghai', left: 70.9, top: 36.2 },
  { name: 'Tokyo', timeZone: 'Asia/Tokyo', left: 78.3, top: 37.8 },
  { name: 'Auckland', timeZone: 'Pacific/Auckland', left: 88.2, top: 85.0 },
]

function getLocalTime(timeZone: string, now: Date): string {
  return now.toLocaleTimeString('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function getUtcOffset(timeZone: string, now: Date): string {
  const utcMs = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' })).getTime()
  const tzMs = new Date(now.toLocaleString('en-US', { timeZone })).getTime()
  const diffH = (tzMs - utcMs) / (1000 * 60 * 60)
  const sign = diffH >= 0 ? '+' : '-'
  const absH = Math.abs(diffH)
  const hours = Math.floor(absH)
  const minutes = Math.round((absH - hours) * 60)
  return `UTC${sign}${hours}${minutes > 0 ? ':' + String(minutes).padStart(2, '0') : ''}`
}

function isDaytime(timeZone: string, now: Date): boolean {
  const hour = parseInt(new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', hour12: false }).format(now), 10)
  return hour >= 6 && hour < 20
}

export default function Timezones() {
  const [now, setNow] = useState(new Date())
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const utcTime = now.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const utcDate = now.toLocaleDateString('en-GB', { timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="panel" style={{ margin: '1rem' }}>
      {/* UTC Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', color: '#a0aec0', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Coordinated Universal Time
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '3rem', fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1.1 }}>
          {utcTime} <span style={{ color: '#63b3ed' }}>UTC</span>
        </div>
        <div style={{ color: '#a0aec0', fontSize: '0.9rem', marginTop: '0.25rem' }}>{utcDate}</div>
      </div>

      {/* World Map */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '50%', marginBottom: '1.5rem', borderRadius: '6px', overflow: 'hidden' }}>
        <img
          src="../images/worldMap.jpg"
          alt="World map"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
        {cities.map((city) => {
          const isDay = isDaytime(city.timeZone, now)
          const isSelected = selected === city.name
          return (
            <button
              key={city.name}
              onClick={() => setSelected(isSelected ? null : city.name)}
              title={`${city.name} — ${getLocalTime(city.timeZone, now)}`}
              style={{
                position: 'absolute',
                left: `${city.left}%`,
                top: `${city.top}%`,
                width: isSelected ? 14 : 10,
                height: isSelected ? 14 : 10,
                borderRadius: '50%',
                background: isSelected ? '#63b3ed' : isDay ? '#f6ad55' : '#76e4f7',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                border: isSelected ? '2px solid white' : '1px solid rgba(0,0,0,0.4)',
                boxShadow: isSelected ? '0 0 10px #63b3ed' : '0 1px 3px rgba(0,0,0,0.5)',
                padding: 0,
                transition: 'all 0.15s ease',
              }}
            />
          )
        })}
      </div>

      {/* City Grid */}
      <div className="row g-3">
        {cities.map((city) => {
          const localTime = getLocalTime(city.timeZone, now)
          const offset = getUtcOffset(city.timeZone, now)
          const isDay = isDaytime(city.timeZone, now)
          const isSelected = selected === city.name
          return (
            <div key={city.name} className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="tile"
                onClick={() => setSelected(isSelected ? null : city.name)}
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'rgba(99,179,237,0.7)' : undefined,
                  background: isSelected ? 'rgba(99,179,237,0.1)' : undefined,
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {city.name}
                  </span>
                  <span style={{ fontSize: '0.9rem' }} title={isDay ? 'Daytime' : 'Nighttime'}>
                    {isDay ? '☀️' : '🌙'}
                  </span>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 700 }}>{localTime}</div>
                <div style={{ fontSize: '0.72rem', color: '#718096', marginTop: '0.2rem' }}>{offset}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1.25rem', fontSize: '0.78rem', color: '#718096' }}>
        <span>
          <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#f6ad55', marginRight: '0.35rem', verticalAlign: 'middle' }} />
          Daytime
        </span>
        <span>
          <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#76e4f7', marginRight: '0.35rem', verticalAlign: 'middle' }} />
          Nighttime
        </span>
        <span>
          <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#63b3ed', marginRight: '0.35rem', verticalAlign: 'middle' }} />
          Selected
        </span>
      </div>
    </div>
  )
}
