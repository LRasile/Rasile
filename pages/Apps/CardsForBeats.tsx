import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import BeatBar, { BeatBarProps } from '../../components/BeatBar'
import BeatNote, { BeatNoteProps } from '../../components/BeatNotes'

const noteNames = ['R', 'L', 'H', 'B']

export default function CardsForBeats() {
  const [bars, setBars] = useState<BeatBarProps[] | undefined>(undefined)
  const [type, setType] = useState<number>(4)
  const [numberOfBars, setNumberOfBars] = useState<number>(16)

  function Generate() {
    let phraseString = ''
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

        phraseString += noteName
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

  function numberOfBarsOnChange(event) {
    setNumberOfBars(event.target.value)
  }
  function typeOnChange(event) {
    setType(event.target.value)
  }

  return (
    <>
      <div className="row col-12">
        <div className="col-md-12 row" style={{ border: '0px solid blue' }}>
          <div className="col-md-3 m-1">
            <FormControl>
              <FormLabel>Number of bars</FormLabel>
              <Select
                onChange={numberOfBarsOnChange}
                placeholder="Select number of bars"
                defaultValue={4}
              >
                <option>4</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 m-1">
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Select
                onChange={typeOnChange}
                placeholder="Select type"
                defaultValue={4}
              >
                <option value={3}>Triplets</option>
                <option value={4}>Quavers</option>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 m-1">
            <Button
              style={{ width: '100%', marginTop: '2em' }}
              onClick={() => Generate()}
            >
              Generate
            </Button>
          </div>
        </div>
        {bars && bars.length > 0 && (
          <div className="col-md-12 row" style={{ border: '0px solid red' }}>
            {bars.map((bar) => (
              <BeatBar notes={bar.notes} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
