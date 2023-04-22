import { SettingsIcon } from '@chakra-ui/icons'
import { FaPlay, FaStop } from 'react-icons/fa'
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Select,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BeatGroup from '../../components/CardsForBeats/BeatGroup'
import {
  BeatGroupEntity,
  BeatGroupKey,
  BuildGroupsFromPhrase,
  defaultSettings,
  Generate,
  UserSettings,
} from '../../lib/CardsForBeatsService'
import { BsShareFill } from 'react-icons/bs'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useCookie from 'react-use-cookie'

export default function CardsForBeats() {
  const router = useRouter()
  const [groups, setGroups] = useState<BeatGroupEntity[] | undefined>(undefined)
  const [numberOfBeats, setNumberOfBeats] = useState<number>(4)
  const [numberOfGroups, setNumberOfGroups] = useState<number>(4)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [userSettingObj, setUserSettingObj] =
    useState<UserSettings>(defaultSettings)

  const [userSettings, setUserSettings] = useCookie(
    'settings',
    JSON.stringify(defaultSettings)
  )

  useEffect(() => {
    if (userSettings) {
      setUserSettingObj(JSON.parse(userSettings))
    }
  }, [userSettings])

  useEffect(() => {
    if (router.query && router.query.phrase) {
      const pharseQuery = router.query.phrase as string
      const pharseQuerySplit = pharseQuery.split('-')
      const numberOfGroupsQuery = parseInt(pharseQuerySplit[0])
      const typeQuery = parseInt(pharseQuerySplit[1])

      setNumberOfGroups(numberOfGroupsQuery)
      setNumberOfBeats(typeQuery)

      const newGroups = BuildGroupsFromPhrase(
        pharseQuerySplit[2],
        numberOfGroupsQuery,
        typeQuery
      )
      setGroups(newGroups)
    }
  }, [router.query.phrase])

  function GenerateNewPhrase() {
    var newGroups = Generate(numberOfGroups, numberOfBeats)
    setGroups(newGroups)
  }

  useEffect(() => {
    GenerateNewPhrase()
  }, [numberOfBeats, numberOfGroups])

  function numberOfGroupsOnChange(event) {
    setNumberOfGroups(event.target.value)
  }

  function typeOnChange(event) {
    setNumberOfBeats(event.target.value)
  }

  function highHatLabelChange(event) {
    setUserSettingObj({ ...userSettingObj, highHatLabel: event.target.value })
  }
  function snareLabelChange(event) {
    setUserSettingObj({ ...userSettingObj, snareLabel: event.target.value })
  }
  function bassLabelChange(event) {
    setUserSettingObj({ ...userSettingObj, bassLabel: event.target.value })
  }
  function pedalLabelChange(event) {
    setUserSettingObj({ ...userSettingObj, pedalLabel: event.target.value })
  }

  function saveUserSettings() {
    setUserSettings(JSON.stringify(userSettingObj))
  }

  function resetUserSettings() {
    setUserSettingObj(defaultSettings)
    setUserSettings(JSON.stringify(defaultSettings))
  }

  function CopyPhraseToClipboard() {
    let origin = ''
    origin = typeof window !== 'undefined' && window.location.origin

    const url = router.asPath.split('?')[0]
    let phraseQueryString = `${numberOfGroups}-${numberOfBeats}-`

    if (groups && groups.length > 0) {
      phraseQueryString += GetPhaseString()
      navigator.clipboard.writeText(
        `${origin}${url}?phrase=${phraseQueryString}`
      )
      return true
    }
    return false
  }

  function GetPhaseString() {
    if (groups && groups.length > 0) {
      let phraseString = ''
      groups.map((group) => {
        group.notes.map((note) => {
          phraseString += note.name
        })
      })
      return phraseString
    }
    return ''
  }

  function ReloadPhrase() {
    console.log('ReloadPhrase')
    console.log(GetPhaseString())
    const newGroups = BuildGroupsFromPhrase(
      GetPhaseString(),
      numberOfGroups,
      numberOfBeats
    )
    setGroups(newGroups)
  }

  // Metronome ------------------------------------------------------------------------

  const [tempo, setTempo] = useState<number>(120) // initial tempo is 120 bpm
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState(null)
  const [audioContext, setAudioContext] = useState<AudioContext>(null)
  const [beatIndex, setBeatIndex] = useState<number>(0)
  const [totalNumberOfNotes, setTotalNumberOfNotes] = useState<number>(
    numberOfBeats * numberOfGroups
  )

  useEffect(() => {
    setTotalNumberOfNotes(numberOfBeats * numberOfGroups)
    resetMetronome()
  }, [numberOfBeats, numberOfGroups])

  useEffect(() => {
    // initialize the audio context
    const context = new AudioContext()
    setAudioContext(context)
  }, [])

  const playTick = (pitch) => {
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain() // create gain node
    osc.frequency.value = pitch // set frequency to 1000 Hz for a sharper sound
    osc.type = 'square' // set oscillator type to square wave for a sharper sound
    osc.connect(gain) // connect the oscillator to the gain node
    gain.connect(audioContext.destination) // connect the gain node to the audio context
    gain.gain.value = 0.1 // set the gain value to 0.1 to reduce volume
    osc.start(audioContext.currentTime)
    osc.stop(audioContext.currentTime + 0.05) // stop after 0.05 seconds for a shorter sound
  }

  let accentedPitch = 1100
  let normalPitch = 900

  useEffect(() => {
    let intervalId

    if (isPlaying) {
      // Play the first tick immediately
      playTick(normalPitch)
      setBeatIndex(-2)

      // Set the interval for the remaining ticks
      const interval = (60 / tempo) * 1000 // interval in ms
      intervalId = setInterval(() => {
        setBeatIndex((beatCount) => {
          let pitch =
            beatCount % numberOfBeats === 0 ? accentedPitch : normalPitch
          if (beatCount === totalNumberOfNotes) {
            resetMetronome()
            return 1
          } else {
            playTick(pitch)
            return beatCount + 1
          }
        })
      }, interval)
    } else {
      resetMetronome()
    }

    // Clear interval when the component unmounts or is re-rendered
    return () => clearInterval(intervalId)
  }, [isPlaying, tempo, totalNumberOfNotes])

  function resetMetronome() {
    clearInterval(intervalId)
    setIntervalId(null)
    setBeatIndex(0)
    setIsPlaying(false)
  }

  const handleTempoChange = (event) => {
    const newTempo = parseInt(event.target.value)
    if (!isNaN(newTempo) && newTempo > 0 && newTempo <= 300) {
      setTempo(newTempo)
      resetMetronome()
    }
  }

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  const handleStopClick = () => {
    setIsPlaying(false)
  }

  return (
    <>
      <div className="row col-12">
        <div className="col-md-12 row">
          <div className="col-md-3 my-1">
            <FormControl>
              <FormLabel>Number of bars</FormLabel>
              <Select onChange={numberOfGroupsOnChange} value={numberOfGroups}>
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
              <Select onChange={typeOnChange} value={numberOfBeats}>
                <option value={3}>Triplets</option>
                <option value={4}>Semiquavers</option>
                <option value={5}>Quintuplet</option>
                <option value={6}>Sextuplet</option>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3 my-1">
            <FormControl>
              <FormLabel>Tempo (BPM)</FormLabel>
              <Input
                type="number"
                defaultValue={tempo}
                onChange={handleTempoChange}
                maxW="400px"
              />
            </FormControl>
          </div>
          <div className="col-md-3 my-1">
            <div style={{ marginTop: '2em' }}>
              {/* <Button
                style={{
                  paddingLeft: '2em',
                  paddingRight: '2em',
                }}
                mx="1"
                onClick={() => GenerateNewPhrase()}
              >
                Generate
              </Button> */}
              <IconButton
                mx="1"
                aria-label="Share"
                onClick={() => {
                  if (CopyPhraseToClipboard()) {
                    return toast({
                      title: 'Phrase Copied!',
                      status: 'success',
                      duration: 2000,
                      isClosable: true,
                    })
                  }
                }}
                title="Share"
              >
                <Icon as={BsShareFill} />
              </IconButton>
              <IconButton
                mx="1"
                aria-label="Settings"
                onClick={onOpen}
                title="Settings"
              >
                <SettingsIcon />
              </IconButton>

              <IconButton onClick={handlePlayClick} aria-label="Play" mx="1">
                <FaPlay />
              </IconButton>
              {isPlaying && (
                <>
                  <IconButton
                    onClick={handleStopClick}
                    aria-label="Stop"
                    mx="1"
                  >
                    <FaStop />
                  </IconButton>
                  {beatIndex < 1 && (
                    <Text fontSize="xl">{(beatIndex - 1) * -1 * 1}</Text>
                  )}
                  {beatIndex >= 1 && (
                    <Text fontSize="xl">Follow the beat!</Text>
                  )}
                </>
              )}
              {/* <IconButton
                aria-label="Reload"
                onClick={() => ReloadPhrase()}
                title="Reload"
              >
                <Icon as={BsArrowClockwise} boxSize={5} />
              </IconButton> */}
            </div>
          </div>
          <div className="col-md-3 my-1"></div>
        </div>
        <style>{`.noteIndex${beatIndex} .noteHightlight {  border-bottom: red 3px solid; }`}</style>
        <div className="col-md-12 row"></div>
        {groups && groups.length > 0 && (
          <div className="col-md-12 row" style={{ border: '0px solid red' }}>
            {groups.map((group) => (
              <BeatGroup notes={group.notes} key={BeatGroupKey(group)} />
            ))}
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Label changes are saved to cookies and require you to re-generate
              the phrase
            </Text>
            <br />
            <FormControl>
              <FormLabel>High Hat Label</FormLabel>
              <Input
                maxLength={1}
                defaultValue={userSettingObj.highHatLabel}
                onChange={highHatLabelChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Snare Label</FormLabel>
              <Input
                maxLength={1}
                defaultValue={userSettingObj.snareLabel}
                onChange={snareLabelChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bass Label</FormLabel>
              <Input
                maxLength={1}
                defaultValue={userSettingObj.bassLabel}
                onChange={bassLabelChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pedal Label</FormLabel>
              <Input
                maxLength={1}
                defaultValue={userSettingObj.pedalLabel}
                onChange={pedalLabelChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={() => {
                resetUserSettings()
                onClose()
                return toast({
                  title: 'Settings Saved!',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                })
              }}
            >
              Reset defaults
            </Button>
            <Button
              onClick={() => {
                saveUserSettings()
                onClose()
                return toast({
                  title: 'Settings Saved!',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                })
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
