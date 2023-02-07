import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import {
  parsePokemonGraphQL,
  parseTypeEfficacy,
  Pokemon,
} from '../../lib/PokemonService'
import PokemonEntry from '../../components/PokemonEntry'

const baseTypeArray = [
  { Name: 'Normal', Search: 'Eevee' },
  { Name: 'Fire', Search: 'Charmander' },
  { Name: 'Fighting', Search: 'Machamp' },
  { Name: 'Water', Search: 'Squirtle' },
  { Name: 'Flying', Search: 'Rookidee' },
  { Name: 'Grass', Search: 'Tangela' },
  { Name: 'Poison', Search: 'Arbok' },
  { Name: 'Electric', Search: 'Pikachu' },
  { Name: 'Ground', Search: 'Donphan' },
  { Name: 'Psychic', Search: 'Alakazam' },
  { Name: 'Rock', Search: 'Regirock' },
  { Name: 'Ice', Search: 'snorunt' },
  { Name: 'Bug', Search: 'Caterpie' },
  { Name: 'Dragon', Search: 'Dragonair' },
  { Name: 'Ghost', Search: 'Banette' },
  { Name: 'Dark', Search: 'Zorua' },
  { Name: 'Steel', Search: 'Registeel' },
  { Name: 'Fairy', Search: 'Clefairy' },
]

export default function PokemonEffectiveness({ pokedex, typeEfficacy }) {
  const [data, setData] = useState<Pokemon[]>(pokedex)
  const originalData: Pokemon[] = pokedex
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (originalData) {
      setData(originalData.filter(customFilter))
    }
  }, [search])

  function customFilter(pokemon) {
    var searchStrings = search.split(' ')

    for (let index = 0; index < searchStrings.length; index++) {
      const searchString = searchStrings[index]

      if (searchString == '') {
        return false
      }

      // name search
      if (pokemon.name.search(searchString.toLowerCase()) != -1) {
        return true
      }
      // exact id
      if (`${pokemon.id}` == searchString) {
        return true
      }
      // greater than a number
      if (
        searchString.indexOf('>') == 0 &&
        pokemon.id >= parseInt(searchString.substring(1, searchString.length))
      ) {
        return true
      }
    }

    return false
  }

  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <>
      <div className="col-12 p-md-2">
        <Text fontSize="4xl">Pokémon Search</Text>
        <div style={{ margin: '1rem 0rem' }}>
          {baseTypeArray.map((t) => (
            <button
              style={{
                fontSize: '1.5rem',
                width: '7rem',
                height: '2.5rem',
                margin: '0.25rem 0.25rem',
              }}
              className={`pokemonType pokemonType${t.Name}`}
              key={t.Name}
              onClick={() => setSearch(t.Search)}
            >
              {t.Name}
            </button>
          ))}
        </div>
        <InputGroup>
          <InputLeftElement
            fontSize="1.5em"
            margin="1"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            placeholder="Name or number, Rhydon or 112 or >906"
            size="lg"
            value={search}
            onChange={handleChange}
          />
          <InputRightElement
            fontSize="1.5em"
            children={
              <button>
                <CloseIcon
                  color="gray.400"
                  onClick={() => {
                    setSearch('')
                  }}
                />
              </button>
            }
          ></InputRightElement>
        </InputGroup>
      </div>
      <div className="col-12 m-0 p-0">
        {data &&
          data
            .slice(0, 150)
            .map((pokemon) => (
              <PokemonEntry
                pokemon={pokemon}
                typeEfficacy={typeEfficacy}
                key={pokemon.id}
              />
            ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })

  // https://beta.pokeapi.co/graphql/console/
  const result = await client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemon(where: { id: { _lt: 9999 } }) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              pokemon_v2_typenames(where: { language_id: { _eq: 9 } }) {
                language_id
                name
              }
            }
          }
        }
        pokemon_v2_typeefficacy {
          damage_factor
          damage_type_id
          id
          pokemon_v2_type {
            name
          }
          pokemonV2TypeByTargetTypeId {
            name
          }
        }
      }
    `,
  })

  return {
    props: {
      pokedex: parsePokemonGraphQL(result.data.pokemon_v2_pokemon),
      typeEfficacy: parseTypeEfficacy(result.data.pokemon_v2_typeefficacy),
    },
  }
}

// https://beta.pokeapi.co/graphql/console/

// https://beta.pokeapi.co/graphql/v1beta

// query samplePokeAPIquery {
//     pokemon_v2_pokemon {
//       id
//       name
//       pokemon_v2_pokemontypes {
//         pokemon_v2_type {
//           pokemon_v2_typenames(where: {language_id: {_eq: 9}}) {
//             language_id
//             name
//           }
//         }
//       }
//     }
//   }

// RESULT
// {
//     "data": {
//       "pokemon_v2_pokemon": [
//         {
//           "id": 1,
//           "name": "bulbasaur",
//           "pokemon_v2_pokemontypes": [
//             {
//               "pokemon_v2_type": {
//                 "pokemon_v2_typenames": [
//                   {
//                     "language_id": 9,
//                     "name": "Grass"
//                   }
//                 ]
//               }
//             },
//             {
//               "pokemon_v2_type": {
//                 "pokemon_v2_typenames": [
//                   {
//                     "language_id": 9,
//                     "name": "Poison"
//                   }
//                 ]
//               }
//             }
//           ]
//         }
//     ]}
// }
