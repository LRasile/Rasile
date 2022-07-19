import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
import { JungleClear } from '../lib/JungleClear'
import VideoEmbed from './VideoEmbed'

export interface ChampRowProps {
  jungleClear: JungleClear
}

function GetImageUrl(championName): string {
  if (!championName) return ''

  if (championName == 'Zeri') {
    return 'https://static.wikia.nocookie.net/leagueoflegends/images/7/7d/Zeri_OriginalSquare.png'
  }

  if (championName == 'Wukong') {
    championName = 'MonkeyKing'
  }

  let imageName = championName
    .replace(/ *\([^)]*\) */g, '')
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(/\'/g, '')

  if (championName.indexOf("'") > 0) {
    imageName = capitalize(imageName)
  }

  return `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${imageName}.png`
}

function capitalize(input: string): string {
  return input[0].toUpperCase() + input.slice(1).toLowerCase()
}

const jungleCamps = {
  krugs:
    'https://static.wikia.nocookie.net/leagueoflegends/images/f/fe/Ancient_KrugSquare.png',
  raptors:
    'https://static.wikia.nocookie.net/leagueoflegends/images/e/e3/RaptorSquare.png',
  gromp:
    'https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/GrompSquare.png',
  blue: 'https://static.wikia.nocookie.net/leagueoflegends/images/8/85/Blue_SentinelSquare.png',
  red: 'https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Red_BramblebackSquare.png',
  wolves:
    'https://static.wikia.nocookie.net/leagueoflegends/images/d/d6/Greater_Murk_WolfSquare.png',
}

export default function ChampRow({ jungleClear }: ChampRowProps) {
  if (!jungleClear) {
    return <div>Error!</div>
  }

  const key = `${jungleClear.champion}${jungleClear.path}${jungleClear.time}`
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  function JunglePath({ path }): JSX.Element {
    path = path.replace('Gromp>B>Krugs', 'gromp-krugs')
    const pathArray = path.split('-')

    return (
      <div key={key + path + 'container'}>
        {pathArray.map((camp) => {
          const campName = camp.replace(/ *\([^)]*\) */g, '').toLowerCase()
          return (
            <img
              key={key + path + 'image' + camp}
              className="smallIcon"
              src={jungleCamps[campName]}
              alt={campName}
              title={camp}
            />
          )
        })}
      </div>
    )
  }

  function SmiteIcon({ numberOfSmites }): JSX.Element {
    return (
      <>
        <img
          key={key + 'smite1'}
          alt="Smites Used"
          title="Smites Used"
          className="smallIcon"
          src="https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png"
        />
        {numberOfSmites != 1 && (
          <img
            key={key + 'smite2'}
            alt="Smites Used"
            title="Smites Used"
            className="smallIcon"
            src="https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png"
          />
        )}
      </>
    )
  }

  function ChampionIcon({ name }): JSX.Element {
    return (
      <img
        className="champIcon"
        src={GetImageUrl(name)}
        alt={name}
        title={name}
      />
    )
  }

  function Champion({ name }): JSX.Element {
    return (
      <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{name}</span>
    )
  }

  function ClearTime({ time }): JSX.Element {
    return <span style={{ fontSize: '1.5rem' }}>{time.substring(1)}</span>
  }

  return (
    <div className="champRow" key={key} onClick={() => setIsOpen(!isOpen)}>
      {/* <div className="col">{props.jungleClear.patch}</div> */}

      <div className="champRowStatic" key={key + 'champRowStatic'}>
        <div style={{ minWidth: 100 }}>
          <ChampionIcon name={jungleClear.champion} />
        </div>
        <div style={{ minWidth: 200 }}>
          <Champion name={jungleClear.champion} />
        </div>
        <div style={{ minWidth: 66 }}>
          <ClearTime time={jungleClear.time} />
        </div>
        <div style={{ minWidth: 355 }}>
          <JunglePath path={jungleClear.path} />
        </div>
        <div style={{ minWidth: 135 }}>
          <SmiteIcon numberOfSmites={parseInt(jungleClear.smitesUsed)} />
        </div>
      </div>
      <div style={{ height: isOpen ? 'auto' : 0, paddingBottom: 1 }}>
        {isOpen && <VideoEmbed src={jungleClear.link} />}
      </div>

      {/* <div className="col-lg">{jungleClear.numberOfCamps}</div> */}
      {/* <div className="col">{jungleClear.link}</div> */}
      {/* <div className="col">{jungleClear.player}</div> */}
    </div>
  )
}
