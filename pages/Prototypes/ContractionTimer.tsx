import { useState, useEffect } from 'react'
import { Box, Button, Text, List, ListItem, VStack } from '@chakra-ui/react'

export default function ContractionTimer() {
  const [isSurging, setIsSurging] = useState(false)
  const [surgeCount, setSurgeCount] = useState(0)
  const [surgeTimes, setSurgeTimes] = useState<{ start: Date; end: Date; duration: number }[]>([])
  const [lastSurgeStart, setLastSurgeStart] = useState<Date | null>(null)
  const [lastSurgeEnd, setLastSurgeEnd] = useState<Date | null>(null)
  const [warning, setWarning] = useState(false)

  // Last surge duration (in ms)
  const lastSurgeDuration = surgeTimes.length > 0 ? surgeTimes[surgeTimes.length - 1].duration : 0

  // Time since last surge (in ms)
  const timeSinceLastSurge = lastSurgeEnd ? Date.now() - lastSurgeEnd.getTime() : 0

  // Time since first surge (in ms)
  const timeSinceFirstSurge = surgeTimes.length > 0 ? Date.now() - surgeTimes[0].start.getTime() : 0

  useEffect(() => {
    // Check for 3 surges within 10 minutes, each lasting at least 45 seconds
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

  const formatDuration = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000)
    const seconds = Math.floor((milliseconds % 60000) / 1000)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
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

  return (
    <Box p={5} textAlign="center">
      <Button
        onClick={handleClick}
        colorScheme={isSurging ? 'pink' : 'teal'}
        style={{
          height: 200,
          width: 200,
          borderRadius: 200,
        }}
      >
        <Text fontSize="5xl">{isSurging ? 'Finish ' : 'Start'}</Text>
      </Button>

      {warning && (
        <Text color="tomato" fontSize="5xl" mt={3}>
          Go to Hospital
        </Text>
      )}
      <div className="row">
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {formatDurationToSeconds(lastSurgeDuration)}
            <Text fontSize="md">Last Surge Duration</Text>
            <Text fontSize="xs">
              <i>Seconds</i>
            </Text>
          </Text>
        </div>
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {formatDurationToMinutes(timeSinceLastSurge)}
            <Text fontSize="md">Time Since Last Surge</Text>
            <Text fontSize="xs">
              <i>Minutes</i>
            </Text>
          </Text>
        </div>
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {surgeCount}
            <Text fontSize="md">Total Surges</Text>
          </Text>
        </div>
        <div className="col-6">
          <Text fontSize="5xl" mt={5}>
            {formatDurationToHours(timeSinceFirstSurge)}
            <Text fontSize="md">Time Since First Surge</Text>
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
            .map((surge, index) => (
              <ListItem key={index}>
                <div
                  style={{
                    position: 'relative',
                    width: '300px',
                    background: 'rgba(100,100,100,0.1)',
                    borderRadius: 20,
                  }}
                >
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
            ))}
        </List>
      </VStack>
    </Box>
  )
}
