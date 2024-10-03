import { useState, useEffect } from 'react'
import { Box, Button, Text, List, ListItem, VStack } from '@chakra-ui/react'

export default function ContractionTimer() {
  const [isSurging, setIsSurging] = useState(false)
  const [surgeCount, setSurgeCount] = useState(0)
  const [surgeTimes, setSurgeTimes] = useState<{ start: Date; end: Date; duration: number }[]>([])
  const [lastSurgeStart, setLastSurgeStart] = useState<Date | null>(null)
  const [lastSurgeEnd, setLastSurgeEnd] = useState<Date | null>(null)
  const [surgeTimer, setSurgeTimer] = useState(0)
  const [warning, setWarning] = useState(false)

  // Load data from sessionStorage on initial render
  useEffect(() => {
    const storedSurgeTimes = sessionStorage.getItem('surgeTimes')
    const storedSurgeCount = sessionStorage.getItem('surgeCount')

    if (storedSurgeTimes) {
      // Parse JSON and convert strings back to Date objects
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

    // Clean up interval on unmount or when surging ends
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isSurging, lastSurgeStart])

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
  const timeSinceLastSurge = lastSurgeEnd ? Date.now() - lastSurgeEnd.getTime() : 0
  const timeSinceFirstSurge = surgeTimes.length > 0 ? Date.now() - surgeTimes[0].start.getTime() : 0

  return (
    <Box p={5} textAlign="center" style={{ marginTop: -70 }}>
      <Button
        onClick={handleClick}
        colorScheme={isSurging ? 'pink' : 'teal'}
        style={{
          height: 200,
          width: 200,
          borderRadius: 200,
        }}
      >
        <div>
          <Text fontSize="5xl">{isSurging ? 'Finish ' : 'Start'}</Text>
          {isSurging && (
            <Text fontSize="2xl" mt={3}>
              {formatDurationToSeconds(surgeTimer)}
            </Text>
          )}
        </div>
      </Button>

      {warning && (
        <Text color="tomato" fontSize="5xl" mt={3}>
          Call the midwife
        </Text>
      )}

      <div className="row">
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {formatDurationToSeconds(lastSurgeDuration)}
            <Text fontSize="sm">Last Surge Duration</Text>
            <Text fontSize="xs">
              <i>Seconds</i>
            </Text>
          </Text>
        </div>
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {formatDurationToMinutes(timeSinceLastSurge)}
            <Text fontSize="sm">Time Since Last Surge</Text>
            <Text fontSize="xs">
              <i>Minutes</i>
            </Text>
          </Text>
        </div>
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {surgeCount}
            <Text fontSize="sm">Total Surges</Text>
          </Text>
        </div>
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {formatDurationToHours(timeSinceFirstSurge)}
            <Text fontSize="sm">Time Since First Surge</Text>
            <Text fontSize="xs">
              <i>Hours</i>
            </Text>
          </Text>
        </div>
      </div>
      <VStack spacing={4} mt={10}>
        <List>
          {surgeTimes
            .slice()
            .reverse()
            .map((surge, index, reversedSurges) => {
              const previousSurge = reversedSurges[index - 1]
              const timeDifference = previousSurge
                ? formatDurationToMinutes(previousSurge.start.getTime() - surge.start.getTime())
                : 'N/A'

              return (
                <ListItem key={index} mb={10}>
                  <div
                    style={{
                      position: 'relative',
                      width: '300px',
                      background: 'rgba(100,100,100,0.1)',
                      borderRadius: 20,
                    }}
                  >
                    {previousSurge && (
                      <Text fontSize="xs" px={3} py={2} style={{ position: 'absolute', top: -40, left: 70 }}>
                        {timeDifference} minutes between surges
                      </Text>
                    )}
                    <Text fontSize="xl" mx={2} my={2} px={4} py={4} textAlign="left">
                      {formatDurationToSeconds(surge.duration)} seconds
                    </Text>
                    <Text fontSize="xs" px={3} py={2} style={{ position: 'absolute', top: 0, right: 0 }}>
                      {surge.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </Text>
                    <Text fontSize="xs" px={3} py={2} style={{ position: 'absolute', bottom: 0, right: 0 }}>
                      Surge {surgeTimes.length - index}
                    </Text>
                  </div>
                </ListItem>
              )
            })}
        </List>
      </VStack>

      {/* Reset Button */}
      <Button mt={5} colorScheme="blue" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  )
}
