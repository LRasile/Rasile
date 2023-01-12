import { ChevronRightIcon, SettingsIcon, SpinnerIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  toast,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BeatGroup from '../../components/BeatGroup'
import {
  BeatGroupEntity,
  BeatGroupKey,
  BuildGroupsFromPhrase,
  defaultSettings,
  Generate,
  noteNames,
  UserSettings,
} from '../../lib/CardsForBeatsService'
import { BsArrowClockwise, BsShareFill } from 'react-icons/bs'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useCookie from 'react-use-cookie'

export default function CardsForBeats() {
  const router = useRouter()
  const [groups, setGroups] = useState<BeatGroupEntity[] | undefined>(undefined)
  const [type, setType] = useState<number>(4)
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
      setType(typeQuery)

      const newGroups = BuildGroupsFromPhrase(
        pharseQuerySplit[2],
        numberOfGroupsQuery,
        typeQuery
      )
      setGroups(newGroups)
    }
  }, [router.query.phrase])

  function GenerateNewPhrase() {
    var newGroups = Generate(numberOfGroups, type)
    setGroups(newGroups)
  }

  function numberOfGroupsOnChange(event) {
    setNumberOfGroups(event.target.value)
  }

  function typeOnChange(event) {
    setType(event.target.value)
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
    let phraseQueryString = `${numberOfGroups}-${type}-`

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
      type
    )
    setGroups(newGroups)
  }

  return (
    <>
      <div className="row col-12">
        <div className="col-md-12 row" style={{ border: '0px solid blue' }}>
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
              <Select onChange={typeOnChange} value={type}>
                <option value={3}>Triplets</option>
                <option value={4}>Semiquavers</option>
                <option value={5}>Quintuplet</option>
                <option value={6}>Sextuplet</option>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-6 my-1">
            <div style={{ marginTop: '2em' }}>
              <Button
                style={{
                  paddingLeft: '2em',
                  paddingRight: '2em',
                }}
                onClick={() => GenerateNewPhrase()}
              >
                Generate
              </Button>{' '}
              <IconButton
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
              </IconButton>{' '}
              <IconButton
                aria-label="Settings"
                onClick={onOpen}
                title="Settings"
              >
                <SettingsIcon />
              </IconButton>{' '}
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
