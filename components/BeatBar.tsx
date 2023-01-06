import { isNetworkRequestInFlight } from '@apollo/client/core/networkStatus'
import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import BeatNote, { BeatNoteProps } from './BeatNotes'

export interface BeatBarProps {
  notes: BeatNoteProps[]
}

export default function BeatBar({ notes }: BeatBarProps) {
  const { colorMode } = useColorMode()
  const noteColour = colorMode === 'light' ? '#111' : '#eee'
  return (
    <div className="beatBar">
      <div className="beatBarTopLine" style={{ background: noteColour }}></div>
      <div className="row">
        {notes.map((note) => (
          <BeatNote
            name={note.name}
            position={note.position}
            type={note.type}
          />
        ))}
      </div>
    </div>
  )
}
