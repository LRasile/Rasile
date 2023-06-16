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
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Box,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
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
  const [userSettingObj, setUserSettingObj] = useState<UserSettings>(defaultSettings)

  const [userSettings, setUserSettings] = useCookie('settings', JSON.stringify(defaultSettings))

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

      const newGroups = BuildGroupsFromPhrase(pharseQuerySplit[2], numberOfGroupsQuery, typeQuery)
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
      navigator.clipboard.writeText(`${origin}${url}?phrase=${phraseQueryString}`)
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
    const newGroups = BuildGroupsFromPhrase(GetPhaseString(), numberOfGroups, numberOfBeats)
    setGroups(newGroups)
  }

  // Metronome ------------------------------------------------------------------------
  const [tempo, setTempo] = useState<number>(120) // initial tempo is 120 bpm
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null) // Use a ref for AudioContext
  const oscillatorRef = useRef<OscillatorNode | null>(null) // Use a ref for OscillatorNode

  const [beatIndex, setBeatIndex] = useState<number>(0)
  const [totalNumberOfNotes, setTotalNumberOfNotes] = useState<number>(numberOfBeats * numberOfGroups)

  useEffect(() => {
    let context = null

    // Check for AudioContext availability and fallback if needed
    if (typeof window.AudioContext !== 'undefined') {
      context = new AudioContext()
    } else {
      // Web Audio API is not supported
      console.error('Web Audio API is not supported in this environment.')
      return
    }

    audioContextRef.current = context

    const osc = audioContextRef.current.createOscillator() // Use the ref to access AudioContext
    osc.type = 'square' // Set oscillator type to square wave
    oscillatorRef.current = osc
  }, [])

  const playTick = (isAccent) => {
    const osc = audioContextRef.current.createOscillator()
    const amp = audioContextRef.current.createGain()

    osc.connect(amp) // Connect the oscillator to the gain node
    amp.connect(audioContextRef.current.destination) // Connect the gain node to the audio context destination

    const baseFrequency = isAccent ? 600 : 500
    const clickDuration = 0.05 // Duration of the click sound

    // Set up the click noise by rapidly changing the oscillator frequency
    const clickFrequency = 5000 // Frequency for the click noise
    const clickInterval = 0.001 // Interval between frequency changes
    const numClicks = Math.ceil(clickDuration / clickInterval)

    // Schedule frequency changes to create the click noise
    for (let i = 0; i < numClicks; i++) {
      const startTime = audioContextRef.current.currentTime + i * clickInterval
      const endTime = startTime + clickInterval

      osc.frequency.setValueAtTime(baseFrequency, startTime)
      osc.frequency.setValueAtTime(clickFrequency, endTime)
    }

    // Set the final frequency at the end of the click noise
    const finalTime = audioContextRef.current.currentTime + clickDuration
    osc.frequency.setValueAtTime(baseFrequency, finalTime)

    // Configure gain node for the click noise
    const clickAttackTime = 0.001 // Duration of the attack (ramp up)
    const clickReleaseTime = 0.01 // Duration of the release (ramp down)

    amp.gain.setValueAtTime(0, audioContextRef.current.currentTime) // Set initial gain to 0

    // Apply envelope shaping for the click noise
    amp.gain.linearRampToValueAtTime(1, audioContextRef.current.currentTime + clickAttackTime) // Ramp up the gain to 1
    amp.gain.linearRampToValueAtTime(0, finalTime + clickReleaseTime) // Ramp down the gain to 0

    // Start and stop the oscillator for the duration of the click noise
    osc.start(audioContextRef.current.currentTime)
    osc.stop(finalTime + clickReleaseTime)
  }

  useEffect(() => {
    setTotalNumberOfNotes(numberOfBeats * numberOfGroups)
    resetMetronome()
  }, [numberOfBeats, numberOfGroups])

  useEffect(() => {
    let timeoutId = null // Add this variable to keep track of the timeout

    if (isPlaying) {
      // Play the count-in ticks
      playTick(false)
      playTick(false)
      playTick(false)

      setBeatIndex(-3) // Adjust the beat index for the count-in

      // Set the interval for the regular ticks
      const interval = 60 / tempo / numberOfBeats // Calculate the interval based on the tempo and beats per measure
      let nextTickTime = audioContextRef.current.currentTime + interval

      function scheduleTick() {
        setBeatIndex((beatCount) => {
          let isAccent = beatCount % numberOfBeats === 0
          if (beatCount === totalNumberOfNotes) {
            resetMetronome()
            return 1
          } else {
            playTick(isAccent)
            return beatCount + 1
          }
        })

        nextTickTime += interval

        // Schedule the next tick
        if (isPlaying) {
          timeoutId = setTimeout(scheduleTick, (nextTickTime - audioContextRef.current.currentTime) * 1000)
        }
      }

      scheduleTick()
    } else {
      resetMetronome()
    }

    // Clear timeout when the component unmounts or is re-rendered
    return () => clearTimeout(timeoutId)
  }, [isPlaying, tempo, totalNumberOfNotes])

  function resetMetronome() {
    clearTimeout(intervalId)
    setIntervalId(null)
    setBeatIndex(0)
    setIsPlaying(false)
  }

  const handleTempoChange = (value) => {
    const newTempo = parseInt(value)
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
              <Box display="flex" alignItems="center">
                <Slider
                  defaultValue={tempo}
                  onChange={(value) => handleTempoChange(value)}
                  min={1}
                  max={300}
                  step={1}
                  colorScheme="blue"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Box ml={4}>{tempo} BPM</Box>
              </Box>
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
              <IconButton mx="1" aria-label="Settings" onClick={onOpen} title="Settings">
                <SettingsIcon />
              </IconButton>

              <IconButton onClick={handlePlayClick} aria-label="Play" mx="1">
                <FaPlay />
              </IconButton>
              {isPlaying && (
                <>
                  <IconButton onClick={handleStopClick} aria-label="Stop" mx="1">
                    <FaStop />
                  </IconButton>
                  {beatIndex < 1 && <Text fontSize="xl">{(beatIndex - 1) * -1 * 1}</Text>}
                  {beatIndex >= 1 && <Text fontSize="xl">Follow the beat!</Text>}
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
            <Text>Label changes are saved to cookies and require you to re-generate the phrase</Text>
            <br />
            <FormControl>
              <FormLabel>High Hat Label</FormLabel>
              <Input maxLength={1} defaultValue={userSettingObj.highHatLabel} onChange={highHatLabelChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Snare Label</FormLabel>
              <Input maxLength={1} defaultValue={userSettingObj.snareLabel} onChange={snareLabelChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Bass Label</FormLabel>
              <Input maxLength={1} defaultValue={userSettingObj.bassLabel} onChange={bassLabelChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Pedal Label</FormLabel>
              <Input maxLength={1} defaultValue={userSettingObj.pedalLabel} onChange={pedalLabelChange} />
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
