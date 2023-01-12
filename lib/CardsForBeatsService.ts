export const defaultSettings: UserSettings = {
  highHatLabel: 'H',
  snareLabel: 'S',
  bassLabel: 'B',
  pedalLabel: 'P',
}

export interface UserSettings {
  highHatLabel: string
  snareLabel: string
  bassLabel: string
  pedalLabel: string
}

export interface BeatGroupEntity {
  notes: BeatNoteEntity[]
}

export interface BeatNoteEntity {
  name: string
  position: number
  type: number
}

export function BeatNoteKey({ name, position, type }: BeatNoteEntity) {
  return `${name}-${position}-${type}`
}

export function BeatGroupKey({ notes }: BeatGroupEntity) {
  let key = ''
  notes.map((note) => (key += BeatNoteKey(note)))
  return key
}

export const noteNames = ['H', 'H', 'S', 'S', 'P', 'B', 'B']

export function Generate(numberOfGroups, type): BeatGroupEntity[] {
  let phraseString = ''
  let noteValidator = ''
  let newGroups: BeatGroupEntity[] = []

  let accentedSnarePositions = [type * 2, type * 6, type * 10, type * 14]

  for (let i = 0; i < numberOfGroups; i++) {
    let newNotes: BeatNoteEntity[] = []
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

  return newGroups
}

export function BuildGroupsFromPhrase(phrase, numberOfGroups, type) {
  let newGroups: BeatGroupEntity[] = []
  for (let i = 0; i < numberOfGroups; i++) {
    let newNotes: BeatNoteEntity[] = []
    for (let j = 0; j < type; j++) {
      var noteIndex = i * type + j
      let noteName = phrase[noteIndex]
      newNotes.push({ name: noteName, type: type, position: noteIndex })
    }
    newGroups.push({ notes: newNotes })
  }
  return newGroups
}

export function GetRandomNumber(length) {
  return Math.floor(Math.random() * length)
}
