import { FaSearch, FaTimes } from 'react-icons/fa'
import React, { useEffect, useRef, useState } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { parsePokemonGraphQL, parseTypeEfficacy, Pokemon, baseTypeArray } from '../../lib/PokemonService'
import PokemonEntry from '../../components/PokemonTypes/PokemonEntry'
import PokemonType from '../../components/PokemonTypes/PokemonTypes'

export default function PokemonEffectiveness({ pokedex, typeEfficacy }) {
  const [data, setData] = useState<Pokemon[]>(pokedex)
  const originalData: Pokemon[] = pokedex
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

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
      if (searchString.indexOf('>') == 0 && pokemon.id >= parseInt(searchString.substring(1, searchString.length))) {
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
        <h1 style={{ fontSize: '2.25rem' }}>Pokémon Search</h1>
        <div style={{ margin: '1rem 0rem 0rem', textAlign: 'center' }}>
          {baseTypeArray.map((t) => (
            <div
              key={t.Name}
              style={{
                padding: 0,
                marginBottom: '.4rem',
                display: 'inline-block',
              }}
            >
              <button
                onClick={() => setSearch(t.Search)}
                className={`pokemonType${t.Name} pokemonTypeIcon`}
                title={t.Name}
              >
                <PokemonType typeName={t.Name.toLocaleLowerCase()} />
              </button>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative' }}>
          <FaSearch style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5em', color: '#999' }} />
          <input
            placeholder="Name or number, Rhydon or 112 or >906"
            value={search}
            onChange={handleChange}
            ref={inputRef}
            style={{ width: '100%', padding: '0.75rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', fontSize: '1.125rem' }}
          />
          {search && (
            <button
              onClick={() => {
                setSearch('')
                if (inputRef.current) {
                  inputRef.current.focus()
                }
              }}
              style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <FaTimes style={{ fontSize: '1.5em', color: '#999' }} />
            </button>
          )}
        </div>
      </div>
      <div className="col-12 m-0 p-0">
        {data &&
          data
            .slice(0, 150)
            .map((pokemon) => <PokemonEntry pokemon={pokemon} typeEfficacy={typeEfficacy} key={pokemon.id} />)}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://beta.pokeapi.co/graphql/v1beta' }),
    cache: new InMemoryCache(),
  })

  // https://beta.pokeapi.co/graphql/console/
  const result = await client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemon {
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
