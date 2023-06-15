import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function CityTime({ city, utcTime, timeZone }) {
  const localDateTime = convertTZ(utcTime, timeZone).toLocaleString()

  function convertTZ(date: string | Date, tzString: string): Date {
    const inputDate = typeof date === 'string' ? new Date(date) : date
    const localDateString = inputDate.toLocaleString('en', { timeZone: tzString })
    const convertedDate = new Date(localDateString)

    return convertedDate
  }

  function calculateDifference(): string {
    const date1: number = Date.parse(utcTime)

    const [datePart, timePart]: string[] = localDateTime.split(', ')
    const [day, month, year]: number[] = datePart.split('/').map(Number)
    const [hour, minute, second]: number[] = timePart.split(':').map(Number)

    const date2: Date = new Date(year, month - 1, day, hour, minute, second)
    const differenceInHours: number = (date2.getTime() - date1) / (1000 * 60 * 60)

    const roundedDifference: string = differenceInHours.toFixed(1)
    const formattedDifference: number = parseFloat(roundedDifference)

    if (formattedDifference >= 0) {
      return `+${formattedDifference}`
    }
    return formattedDifference.toString()
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Text px={4} py={2}>
        {city}
      </Text>
      <Text px={4} py={2}>
        {localDateTime} {calculateDifference()}
      </Text>
    </Box>
  )
}
