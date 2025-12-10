import { useState, useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

export default function ContractionTimer() {
  const [isSurging, setIsSurging] = useState(false)
  const [surgeCount, setSurgeCount] = useState(0)
  const [surgeTimes, setSurgeTimes] = useState<{ start: Date; end: Date; duration: number }[]>([])
  const [lastSurgeStart, setLastSurgeStart] = useState<Date | null>(null)
  const [lastSurgeEnd, setLastSurgeEnd] = useState<Date | null>(null)
  const [surgeTimer, setSurgeTimer] = useState(0)
  const [warning, setWarning] = useState(false)
  const [timeSinceLastSurge, setTimeSinceLastSurge] = useState(0)
  const [timeSinceFirstSurge, setTimeSinceFirstSurge] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  // Load data from sessionStorage on initial render
  useEffect(() => {
    const storedSurgeTimes = sessionStorage.getItem('surgeTimes')
    const storedSurgeCount = sessionStorage.getItem('surgeCount')

    if (storedSurgeTimes) {
      const parsedSurgeTimes = JSON.parse(storedSurgeTimes).map((surge: any) => ({
        start: new Date(surge.start),
        end: new Date(surge.end),
        duration: surge.duration,
      }))
      setSurgeTimes(parsedSurgeTimes)
    }

    if (storedSurgeCount) {
      setSurgeCount(parseInt(storedSurgeCount, 10))
    }
  }, [])

  // Save data to sessionStorage whenever surgeTimes or surgeCount changes
  useEffect(() => {
    sessionStorage.setItem('surgeTimes', JSON.stringify(surgeTimes))
    sessionStorage.setItem('surgeCount', surgeCount.toString())
  }, [surgeTimes, surgeCount])

  // Update surge timer every second while surging
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isSurging && lastSurgeStart) {
      interval = setInterval(() => {
        setSurgeTimer(Date.now() - lastSurgeStart.getTime())
      }, 1000)
    } else {
      if (interval) clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isSurging, lastSurgeStart])

  // Update timeSinceLastSurge and timeSinceFirstSurge every minute
  useEffect(() => {
    const updateTimes = () => {
      if (lastSurgeEnd) {
        setTimeSinceLastSurge(Date.now() - lastSurgeEnd.getTime())
      }
      if (surgeTimes.length > 0) {
        setTimeSinceFirstSurge(Date.now() - surgeTimes[0].start.getTime())
      }
    }

    updateTimes()

    const interval = setInterval(() => {
      updateTimes()
    }, 60000)

    return () => clearInterval(interval)
  }, [lastSurgeEnd, surgeTimes])

  // Check for 3 surges within 10 minutes, each lasting at least 45 seconds
  useEffect(() => {
    if (surgeTimes.length >= 3) {
      const recentSurges = surgeTimes.slice(-3)
      const timeDiff = (recentSurges[2].start.getTime() - recentSurges[0].start.getTime()) / 60000 // in minutes
      if (timeDiff <= 10 && recentSurges.every((surge) => surge.duration >= 45000)) {
        setWarning(true)
      } else {
        setWarning(false)
      }
    }
  }, [surgeTimes])

  // Surge button on click
  const handleClick = () => {
    const currentTime = new Date()

    if (isSurging) {
      // End surge
      const surgeDuration = currentTime.getTime() - (lastSurgeStart?.getTime() ?? 0)

      setSurgeTimes([
        ...surgeTimes,
        {
          start: lastSurgeStart as Date,
          end: currentTime,
          duration: surgeDuration,
        },
      ])

      setLastSurgeEnd(currentTime)
      setIsSurging(false)
    } else {
      // Start surge
      setLastSurgeStart(currentTime)
      setSurgeCount(surgeCount + 1)
      setIsSurging(true)
    }
  }

  // Reset button on click
  const handleReset = () => {
    // Clear sessionStorage and reset state
    sessionStorage.removeItem('surgeTimes')
    sessionStorage.removeItem('surgeCount')
    setSurgeTimes([])
    setSurgeCount(0)
    setLastSurgeStart(null)
    setLastSurgeEnd(null)
    setIsSurging(false)
    setSurgeTimer(0)
    setWarning(false)
    setTimeSinceLastSurge(0)
    setTimeSinceFirstSurge(0)
  }

  const formatDurationToSeconds = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000)
    return `${seconds}`
  }

  const formatDurationToMinutes = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000)
    return `${minutes}`
  }

  const formatDurationToHours = (milliseconds: number) => {
    const hours = Math.floor(milliseconds / 3600000)
    return `${hours}`
  }

  const lastSurgeDuration = surgeTimes.length > 0 ? surgeTimes[surgeTimes.length - 1].duration : 0

  return (
    <div style={{ padding: '1.25rem', textAlign: 'center', marginTop: -70 }}>
      <div>
        <button
          style={{
            marginRight: -200,
            marginBottom: -50,
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Open info popup"
          onClick={onOpen}
        >
          <FaInfoCircle />
        </button>

        {isOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '500px', width: '90%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>Information</h2>
                <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
              </div>
              <div>
                Before calling the midwife you are aiming for <b>3</b> surges within <b>10</b> minutes each lasting at
                least <b>45</b> seconds
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleClick}
        style={{
          height: 200,
          width: 200,
          borderRadius: 200,
          backgroundColor: isSurging ? '#ED64A6' : '#319795',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <div>
          <div style={{ fontSize: '3rem' }}>{isSurging ? 'Finish ' : 'Start'}</div>
          {isSurging && (
            <div style={{ fontSize: '1.5rem', marginTop: '0.75rem' }}>
              {formatDurationToSeconds(surgeTimer)}
            </div>
          )}
        </div>
      </button>
      {warning && (
        <div style={{ color: 'tomato', fontSize: '3rem', marginTop: '0.75rem' }}>
          Call the midwife
        </div>
      )}

      <div className="row">
        <div className="col-6">
          <div style={{ fontSize: '3rem', marginTop: '1.25rem' }}>
            {formatDurationToSeconds(lastSurgeDuration)}
            <div style={{ fontSize: '0.875rem' }}>Last Surge Duration</div>
            <div style={{ fontSize: '0.75rem' }}>
              <i>Seconds</i>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div style={{ fontSize: '3rem', marginTop: '1.25rem' }}>
            {formatDurationToMinutes(timeSinceLastSurge)}
            <div style={{ fontSize: '0.875rem' }}>Time Since Last Surge</div>
            <div style={{ fontSize: '0.75rem' }}>
              <i>Minutes</i>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div style={{ fontSize: '3rem', marginTop: '1.25rem' }}>
            {surgeCount}
            <div style={{ fontSize: '0.875rem' }}>Total Surges</div>
          </div>
        </div>
        <div className="col-6">
          <div style={{ fontSize: '3rem', marginTop: '1.25rem' }}>
            {formatDurationToHours(timeSinceFirstSurge)}
            <div style={{ fontSize: '0.875rem' }}>Time Since First Surge</div>
            <div style={{ fontSize: '0.75rem' }}>
              <i>Hours</i>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {surgeTimes
            .slice()
            .reverse()
            .map((surge, index, reversedSurges) => {
              const previousSurge = reversedSurges[index - 1]
              const timeDifference = previousSurge
                ? formatDurationToMinutes(previousSurge.start.getTime() - surge.start.getTime())
                : 'N/A'

              return (
                <li key={index} style={{ marginBottom: '2.5rem' }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '300px',
                      background: 'rgba(100,100,100,0.1)',
                      borderRadius: 20,
                    }}
                  >
                    {previousSurge && (
                      <div style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem', position: 'absolute', top: -40, left: 70 }}>
                        {timeDifference} minutes between surges
                      </div>
                    )}
                    <div style={{ fontSize: '1.25rem', margin: '0.5rem', padding: '1rem', textAlign: 'left' }}>
                      {formatDurationToSeconds(surge.duration)} seconds
                    </div>
                    <div style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem', position: 'absolute', top: 0, right: 0 }}>
                      {surge.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </div>
                    <div style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem', position: 'absolute', bottom: 0, right: 0 }}>
                      Surge {surgeTimes.length - index}
                    </div>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>

      {/* Reset Button */}
      <button style={{ marginTop: '1.25rem', backgroundColor: '#3182CE', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
