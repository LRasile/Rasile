import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function CityTime({ city, utcTime, timeZone }) {
  const localDateTime = convertTZ(utcTime, timeZone).toLocaleString()

  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === 'string' ? new Date(date) : date).toLocaleString(
        'en-GB',
        {
          timeZone: tzString,
        }
      )
    )
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Text px={4} py={2}>
        {city}
      </Text>
      <Text px={4} py={2}>
        {localDateTime}
      </Text>
    </Box>
  )
}
