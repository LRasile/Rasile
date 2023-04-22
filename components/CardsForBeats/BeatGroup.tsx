import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import { BeatGroupEntity, BeatNoteKey } from '../../lib/CardsForBeatsService'
import BeatNote from './BeatNotes'

export default function BeatGroup({ notes }: BeatGroupEntity) {
  const { colorMode } = useColorMode()
  const noteColour = colorMode === 'light' ? '#111' : '#eee'
  return (
    <div className="beatGroup">
      <div
        className="beatGroupTopLine"
        style={{ background: noteColour }}
      ></div>
      {notes && notes.length >= 4 && (
        <div
          className="beatGroupTopLine"
          style={{ background: noteColour, marginTop: '-.8em' }}
        ></div>
      )}
      <div className="row">
        {notes.map((note) => (
          <BeatNote
            key={BeatNoteKey(note)}
            name={note.name}
            position={note.position}
            type={note.type}
          />
        ))}
      </div>
    </div>
  )
}
