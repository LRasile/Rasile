import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import BeatBar, {
  BeatBarProps as BeatGroupProps,
} from '../../components/BeatBar'
import BeatNote, { BeatNoteProps } from '../../components/BeatNotes'

const noteNames = ['H', 'H', 'S', 'S', 'P', 'B', 'B']

export default function CardsForBeats() {
  const [groups, setGroups] = useState<BeatGroupProps[] | undefined>(undefined)
  const [type, setType] = useState<number>(4)
  const [numberOfGroups, setNumberOfGroups] = useState<number>(4)

  function Generate() {
    let phraseString = ''
    let noteValidator = ''
    let newGroups: BeatGroupProps[] = []

    let accentedSnarePositions = [type * 2, type * 6, type * 10, type * 14]

    for (let i = 0; i < numberOfGroups; i++) {
      let newNotes: BeatNoteProps[] = []
      for (let j = 0; j < type; j++) {
        let noteName = ''
        var noteIndex = i * type + j

        // we are an accented snare we should always be L
        if (accentedSnarePositions.indexOf(noteIndex) > -1) {
          noteName = 'S'
        } else {
          noteName = noteNames[GetRandomNumber(noteNames.length)]
        }

        // if we are 1 away from an accented snare we must not product a LLL patern
        if (accentedSnarePositions.indexOf(noteIndex + 1) > -1) {
          if (noteName == 'S' && noteValidator.indexOf(noteName) > -1) {
            let remainingNotes = noteNames.filter((x) => x != 'S')
            noteName = remainingNotes[GetRandomNumber(remainingNotes.length)]
          }
        }

        // validator whether or not is a valid note sequence, no 3 of the same in a row
        if (noteValidator.length >= 2) {
          if (accentedSnarePositions.indexOf(noteIndex) > -1) {
            noteName = 'S'
          } else {
            let remainingNotes = noteNames.filter((x) => x != noteValidator[0])
            noteName = remainingNotes[GetRandomNumber(remainingNotes.length)]
          }
          noteValidator = noteName
        } else if (noteValidator.indexOf(noteName) > -1) {
          noteValidator = noteValidator + noteName
        } else {
          noteValidator = noteName
        }

        phraseString += noteName
        newNotes.push({ name: noteName, type: type, position: noteIndex })
      }

      newGroups.push({ notes: newNotes })
    }

    setGroups(newGroups)
  }

  function GetRandomNumber(length) {
    return Math.floor(Math.random() * length)
  }

  function numberOfGroupsOnChange(event) {
    setNumberOfGroups(event.target.value)
  }

  function typeOnChange(event) {
    setType(event.target.value)
  }

  return (
    <>
      <div className="row col-12">
        <div className="col-md-12 row" style={{ border: '0px solid blue' }}>
          <div className="col-md-3 my-1">
            <FormControl>
              <FormLabel>Number of bars</FormLabel>
              <Select onChange={numberOfGroupsOnChange} defaultValue={4}>
                <option value={4}>1</option>
                <option value={8}>2</option>
                <option value={12}>3</option>
                <option value={16}>4</option>
                <option value={20}>5</option>
                <option value={24}>6</option>
                <option value={28}>7</option>
                <option value={32}>8</option>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 my-1">
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Select onChange={typeOnChange} defaultValue={4}>
                <option value={3}>Triplets</option>
                <option value={4}>Semiquavers</option>
                <option value={5}>Quintuplet</option>
                <option value={6}>Sextuplet</option>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 my-1">
            <Button
              style={{ width: '100%', marginTop: '2em' }}
              onClick={() => Generate()}
            >
              Generate
            </Button>
          </div>
        </div>
        {groups && groups.length > 0 && (
          <div className="col-md-12 row" style={{ border: '0px solid red' }}>
            {groups.map((bar) => (
              <BeatBar notes={bar.notes} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
