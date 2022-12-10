import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const cards = ['LSBL', 'LSLS', 'RBLS', 'SBBS']

export default function CardsForBeats() {
  const [pattern, setPattern] = useState<string[] | undefined>(undefined)

  function Generate() {
    var newPattern = []
    for (let index = 0; index < 4; index++) {
      newPattern.push(cards[GetRandomNumber()])
    }
    setPattern(newPattern)
  }

  function GetRandomNumber() {
    return Math.floor(Math.random() * cards.length)
  }

  const imageStyle = {
    margin: 'auto',
  }

  return (
    <>
      <Button onClick={() => Generate()}>Generate</Button>

      <div className="col-12 m-2 p-2 row">
        {pattern &&
          pattern.map((card) => (
            <div className="col-6 p-1">
              <img src={`../images/cardsForBeats/${card}.png`} title={card} />
            </div>
          ))}
      </div>
    </>
  )
}
