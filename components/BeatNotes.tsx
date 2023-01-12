import {
  ChevronRightIcon,
  CloseIcon,
  MinusIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BeatNoteEntity, defaultSettings } from '../lib/CardsForBeatsService'
import useCookie from 'react-use-cookie'

export default function BeatNote({ name, position, type }: BeatNoteEntity) {
  const [isAccentedSnare, setIsAccentedSnare] = useState(false)

  useEffect(() => {
    var remainder = position % (type * 4)
    if (remainder === type * 2) {
      setIsAccentedSnare(true)
    }
  }, [])

  return (
    <div style={{ minWidth: '2em', position: 'relative' }}>
      {name == 'H' && <HighHatNote />}
      {name == 'S' && <SnareNote />}
      {name == 'B' && <BassNote />}
      {name == 'P' && <PedalNote />}
      {isAccentedSnare && (
        <>
          <div className="accentedSnare">
            <ChevronRightIcon />
          </div>
        </>
      )}
    </div>
  )
}

export function HighHatNote() {
  const [userSettings] = useCookie('settings', JSON.stringify(defaultSettings))
  const [noteLabel, setNoteLabel] = useState('H')

  useEffect(() => {
    if (userSettings) {
      setNoteLabel(JSON.parse(userSettings).highHatLabel)
    }
  }, [userSettings])
  const { colorMode } = useColorMode()
  const noteColour = colorMode === 'light' ? '#111' : '#eee'
  return (
    <div className="noteContainer">
      <div
        className="verticalLine"
        style={{ height: '1em', background: noteColour }}
      ></div>
      <div className="noteHead">
        <CloseIcon />
      </div>
      <div className="noteLetter">{noteLabel}</div>
    </div>
  )
}

export function SnareNote() {
  const [userSettings] = useCookie('settings', JSON.stringify(defaultSettings))
  const [noteLabel, setNoteLabel] = useState('S')

  useEffect(() => {
    if (userSettings) {
      setNoteLabel(JSON.parse(userSettings).snareLabel)
    }
  }, [userSettings])

  const { colorMode } = useColorMode()
  const noteColour = colorMode === 'light' ? '#111' : '#eee'
  return (
    <div className="noteContainer">
      <div
        className="verticalLine"
        style={{ height: '2em', background: noteColour }}
      ></div>
      <div className="noteHead">
        <MinusIcon />
      </div>
      <div className="noteLetter">{noteLabel}</div>
    </div>
  )
}

export function BassNote() {
  const [userSettings] = useCookie('settings', JSON.stringify(defaultSettings))
  const [noteLabel, setNoteLabel] = useState('B')

  useEffect(() => {
    if (userSettings) {
      setNoteLabel(JSON.parse(userSettings).bassLabel)
    }
  }, [userSettings])

  const { colorMode } = useColorMode()
  const noteColour = colorMode === 'light' ? '#111' : '#eee'
  return (
    <div className="noteContainer">
      <div
        className="verticalLine"
        style={{ height: '3em', background: noteColour }}
      ></div>
      <div className="noteHead">
        <TriangleUpIcon />
      </div>
      <div className="noteLetter">{noteLabel}</div>
    </div>
  )
}

export function PedalNote() {
  const [userSettings] = useCookie('settings', JSON.stringify(defaultSettings))
  const [noteLabel, setNoteLabel] = useState('P')

  useEffect(() => {
    if (userSettings) {
      setNoteLabel(JSON.parse(userSettings).pedalLabel)
    }
  }, [userSettings])

  const { colorMode } = useColorMode()
  const noteColour = colorMode === 'light' ? '#111' : '#eee'

  return (
    <div className="noteContainer">
      <div
        className="verticalLine"
        style={{ height: '4em', background: noteColour }}
      ></div>
      <div className="noteHead">
        <CloseIcon />
      </div>
      <div className="noteLetter">{noteLabel}</div>
    </div>
  )
}
