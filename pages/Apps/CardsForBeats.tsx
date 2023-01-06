import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import BeatBar, { BeatBarProps } from '../../components/BeatBar'
import BeatNote, { BeatNoteProps } from '../../components/BeatNotes'

const noteNames = ['R', 'L', 'H', 'B']

export default function CardsForBeats() {
  const [bars, setBars] = useState<BeatBarProps[] | undefined>(undefined)
  const [type, setType] = useState<number>(4)
  const [numberOfBars, setNumberOfBars] = useState<number>(16)

  function Generate() {
    let noteValidator = ''
    let newBars: BeatBarProps[] = []

    for (let i = 0; i < numberOfBars; i++) {
      let newNotes: BeatNoteProps[] = []
      for (let j = 0; j < type; j++) {
        let noteName = noteNames[GetRandomNumber(noteNames.length)]

        // validator whether or not is a valid note sequence, no 3 of the same in a row
        if (noteValidator.length >= 2) {
          let remainingNotes = noteNames.filter((x) => x != noteValidator[0])
          noteName = remainingNotes[GetRandomNumber(remainingNotes.length)]
          noteValidator = noteName
        } else if (noteValidator.indexOf(noteName) > -1) {
          noteValidator = noteValidator + noteName
        } else {
          noteValidator = noteName
        }

        var noteIndex = i * type + j
        newNotes.push({ name: noteName, type: type, position: noteIndex })
      }

      newBars.push({ notes: newNotes })
    }

    setBars(newBars)
  }

  function GetRandomNumber(length) {
    return Math.floor(Math.random() * length)
  }

  return (
    <>
      <Button onClick={() => Generate()}>Generate</Button>
      {bars && (
        <div className="col-12 row">
          {bars.map((bar) => (
            <BeatBar notes={bar.notes} />
          ))}
        </div>
      )}
    </>
  )
}
