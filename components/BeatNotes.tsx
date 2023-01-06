import {
  AddIcon,
  ChevronRightIcon,
  CloseIcon,
  MinusIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export interface BeatNoteProps {
  name: string
  position: number
  type: number
}

export default function BeatNote({ name, position, type }: BeatNoteProps) {
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
      <div className="noteLetter">H</div>
    </div>
  )
}

export function SnareNote() {
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
      <div className="noteLetter">S</div>
    </div>
  )
}

export function BassNote() {
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
      <div className="noteLetter">B</div>
    </div>
  )
}

export function PedalNote() {
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
      <div className="noteLetter">P</div>
    </div>
  )
}
