import React, { useEffect, useState } from 'react'
import CityTime from '../../components/Timezones/CityTime'

export default function Timezones() {
  const [utcTime, setUtcTime] = useState(new Date().toISOString())

  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(new Date().toISOString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleDotHover = (e) => {
    e.target.style.zIndex = 999 // Ensure the dot is on top of other elements
  }

  const handleDotLeave = (e) => {
    e.target.style.zIndex = 'auto' // Restore the default z-index
  }

  const cities = [
    { name: 'Auckland', timeZone: 'Pacific/Auckland', top: 540, left: 1120 },
    { name: 'Tokyo', timeZone: 'Asia/Tokyo', top: 240, left: 995 },
    { name: 'Beijing', timeZone: 'Asia/Shanghai', top: 230, left: 900 },
    { name: 'Moscow', timeZone: 'Europe/Moscow', top: 160, left: 620 },
    { name: 'Athens', timeZone: 'Europe/Athens', top: 230, left: 585 },
    { name: 'Paris', timeZone: 'Europe/Paris', top: 195, left: 520 },
    { name: 'London', timeZone: 'Europe/London', top: 175, left: 505 },
    { name: 'New York', timeZone: 'America/New_York', top: 230, left: 240 },
    { name: 'Chicago', timeZone: 'America/Chicago', top: 220, left: 210 },
    { name: 'Denver', timeZone: 'America/Denver', top: 230, left: 130 },
    {
      name: 'Los Angeles',
      timeZone: 'America/Los_Angeles',
      top: 245,
      left: 90,
    },
  ]

  return (
    <>
      <h1>UTC Time</h1>
      <h2>{utcTime}</h2>
      <div style={{ position: 'relative', width: '100%' }}>
        <img style={{ left: 0, top: 0, position: 'absolute' }} width="100%" src="../images/worldMap.jpg" />
        {cities.map((city) => (
          <div key={city.name} style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'red',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                top: city.top,
                left: city.left,
              }}
              onMouseEnter={handleDotHover}
              onMouseLeave={handleDotLeave}
              title={`${city.name}: ${utcTime}`}
            />
          </div>
        ))}
      </div>
    </>
  )
}
