import { FaChevronRight, FaTimes, FaMinus, FaCaretUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { BeatNoteEntity, defaultSettings } from '../../lib/CardsForBeatsService'
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
    <div style={{ minWidth: '2em', position: 'relative' }} className={'noteIndex' + (position + 1)}>
      {name == 'H' && <HighHatNote />}
      {name == 'S' && <SnareNote />}
      {name == 'B' && <BassNote />}
      {name == 'P' && <PedalNote />}
      {isAccentedSnare && (
        <>
          <div className="accentedSnare">
            <FaChevronRight />
          </div>
        </>
      )}
      <div className="noteHightlight" style={{ marginLeft: '-.5rem', width: '1.5rem' }}></div>
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
  const noteColour = '#eee'
  return (
    <div className="noteContainer">
      <div className="verticalLine" style={{ height: '1em', background: noteColour }}></div>
      <div className="noteHead">
        <FaTimes />
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

  const noteColour = '#eee'
  return (
    <div className="noteContainer">
      <div className="verticalLine" style={{ height: '2em', background: noteColour }}></div>
      <div className="noteHead">
        <FaMinus />
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

  const noteColour = '#eee'
  return (
    <div className="noteContainer">
      <div className="verticalLine" style={{ height: '3em', background: noteColour }}></div>
      <div className="noteHead">
        <FaCaretUp />
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

  const noteColour = '#eee'

  return (
    <div className="noteContainer">
      <div className="verticalLine" style={{ height: '4em', background: noteColour }}></div>
      <div className="noteHead">
        <FaTimes />
      </div>
      <div className="noteLetter">{noteLabel}</div>
    </div>
  )
}
