import { Link } from '@chakra-ui/react'
import React from 'react'
import {
  baseTypeArray,
  Pokemon,
  PokemonTypeEfficacy,
} from '../lib/PokemonService'

export interface PokemonEntryProps {
  pokemon: Pokemon
  typeEfficacy: PokemonTypeEfficacy[]
}

export default function PokemonEntry({
  pokemon,
  typeEfficacy,
}: PokemonEntryProps) {
  let pokemonEfficacyArray = []

  baseTypeArray.map((type) => {
    const attackingType = type.Name.toLowerCase()

    let firstTypingDamageFactor = typeEfficacy.filter(
      (t) =>
        t.attackingType == attackingType &&
        t.defendingType == pokemon.types[0].toLowerCase()
    )[0].damageFactor

    let secondTypingDamageFactor = 1
    if (pokemon.types[1]) {
      secondTypingDamageFactor = typeEfficacy.filter(
        (t) =>
          t.attackingType == attackingType &&
          t.defendingType == pokemon.types[1].toLowerCase()
      )[0].damageFactor
    }

    const typeEff = {
      name: `${attackingType[0].toUpperCase()}${attackingType.slice(1)}`,
      damageFactor: 1 * firstTypingDamageFactor * secondTypingDamageFactor,
    }

    pokemonEfficacyArray.push(typeEff)
  })

  //  /media/sprites/pokemon/10211.png

  return (
    <div className="flex-item" key={pokemon.name + pokemon.id}>
      <div
        style={{
          textTransform: 'capitalize',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        <Link
          href={`https://www.serebii.net/pokedex-sv/${pokemon.name.replace(
            '-',
            ''
          )}/`}
        >
          #{pokemon.id} {pokemon.name}
        </Link>{' '}
        <div className={`pokemonType pokemonType${pokemon.types[0]}`}>
          {pokemon.types[0]}
        </div>
        {pokemon.types[1] && (
          <div className={`pokemonType pokemonType${pokemon.types[1]}`}>
            {pokemon.types[1]}
          </div>
        )}
      </div>
      <div className="flex-container">
        <div className="flex-item-type">
          <div>x 0</div>
          {pokemonEfficacyArray
            .filter((i) => i.damageFactor == 0)
            .map((t) => (
              <div
                className={`pokemonType pokemonType${t.name}`}
                key={pokemon.id + ':' + t.name + ':' + t.damageFactor}
              >
                {t.name}
              </div>
            ))}
        </div>
        <div className="flex-item-type">
          <div>x 0.25</div>
          {pokemonEfficacyArray
            .filter((i) => i.damageFactor == 0.25)
            .map((t) => (
              <div
                className={`pokemonType pokemonType${t.name}`}
                key={pokemon.id + ':' + t.name + ':' + t.damageFactor}
              >
                {t.name}
              </div>
            ))}
        </div>
        <div className="flex-item-type">
          <div>x 0.5</div>
          {pokemonEfficacyArray
            .filter((i) => i.damageFactor == 0.5)
            .map((t) => (
              <div
                className={`pokemonType pokemonType${t.name}`}
                key={pokemon.id + ':' + t.name + ':' + t.damageFactor}
              >
                {t.name}
              </div>
            ))}
        </div>
        <div className="flex-item-type">
          <div>x 1</div>
          {pokemonEfficacyArray
            .filter((i) => i.damageFactor == 1)
            .map((t) => (
              <div
                className={`pokemonType pokemonType${t.name}`}
                key={pokemon.id + ':' + t.name + ':' + t.damageFactor}
              >
                {t.name}
              </div>
            ))}
        </div>
        <div className="flex-item-type">
          <div>x 2</div>
          {pokemonEfficacyArray
            .filter((i) => i.damageFactor == 2)
            .map((t) => (
              <div
                className={`pokemonType pokemonType${t.name}`}
                key={pokemon.id + ':' + t.name + ':' + t.damageFactor}
              >
                {t.name}
              </div>
            ))}
        </div>
        <div className="flex-item-type">
          <div>x 4</div>
          {pokemonEfficacyArray
            .filter((i) => i.damageFactor == 4)
            .map((t) => (
              <div
                className={`pokemonType pokemonType${t.name}`}
                key={pokemon.id + ':' + t.name + ':' + t.damageFactor}
              >
                {t.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
