import React, { useEffect, useRef, useState } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { parsePokemonGraphQL, parseTypeEfficacy, baseTypeArray, isChampionsPokemon, getPokemonBuild, formatPokemonName, CHAMPIONS_NAMES } from '../../lib/PokemonService'
import PokemonEntry from '../../components/PokemonTypes/PokemonEntry'
import PokemonType from '../../components/PokemonTypes/PokemonTypes'

export default function PokemonEffectiveness({ pokedex, typeEfficacy, pokemonBuilds }) {
  const [tags, setTags] = useState([])
  const [inputText, setInputText] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [showTypes, setShowTypes] = useState(false)
  const [championsOnly, setChampionsOnly] = useState(true)
  const inputRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const suggestions = inputText.length > 0
    ? (pokedex ?? [])
      .filter((p) => {
        if (tags.includes(p.name)) return false
        if (championsOnly && !isChampionsPokemon(p.name)) return false
        const lc = inputText.toLowerCase()
        return p.name.includes(lc) || formatPokemonName(p.name).toLowerCase().includes(lc)
      })
      .slice(0, 8)
    : []

  function addTag(name) {
    if (!tags.includes(name)) setTags((prev) => [...prev, name])
    setInputText('')
    setShowDropdown(false)
    setHighlightedIndex(-1)
    inputRef.current?.focus()
  }

  function removeTag(name) {
    setTags((prev) => prev.filter((t) => t !== name))
    inputRef.current?.focus()
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const target = highlightedIndex >= 0 ? suggestions[highlightedIndex] : suggestions[0]
      if (target) addTag(target.name)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Escape') {
      setShowDropdown(false)
    } else if (e.key === 'Backspace' && inputText === '' && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1))
    }
  }

  const basePool = (pokedex ?? []).filter((p) => !championsOnly || isChampionsPokemon(p.name))
  const displayData = tags.length > 0 ? (pokedex ?? []).filter((p) => tags.includes(p.name)) : basePool.slice(0, 20)

  return (
    <div className="panel" style={{ margin: '-1rem', marginTop:'-3.5rem' }}>
      <div className="col-12 p-md-2" style={{ width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 className="pokemon-title" style={{ margin: 0 }}>Pokémon Search</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowTypes((s) => !s)}
              className="filter-type-btn"
              style={{ background: 'none', border: '1px solid #555', borderRadius: 6, padding: '0.3rem 0.75rem', cursor: 'pointer', fontSize: '0.85rem', whiteSpace: 'nowrap', margin: '0.5rem 0' }}
            >
              {showTypes ? 'Hide types' : 'Filter by type'}
            </button>
            <button
              onClick={() => setChampionsOnly((s) => !s)}
              style={{
                background: championsOnly ? '#4a5568' : 'none',
                border: '1px solid #555',
                borderRadius: 6,
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                margin: '0.5rem 0',
                color: championsOnly ? '#fff' : 'inherit',
                fontWeight: championsOnly ? 'bold' : 'normal',
              }}
            >
              {championsOnly ? 'Champions ✓' : 'Champions only'}
            </button>
          </div>
        </div>

        {showTypes && (
          <div style={{ margin: '1rem 0 0', textAlign: 'center' }}>
            {baseTypeArray.map((t) => (
              <div key={t.Name} style={{ padding: 0, marginBottom: '.4rem', display: 'inline-block' }}>
                <button
                  onClick={() => { setInputText(t.Search.toLowerCase()); setShowDropdown(true); inputRef.current?.focus() }}
                  className={`pokemonType${t.Name} pokemonTypeIcon`}
                  title={t.Name}
                >
                  <PokemonType typeName={t.Name.toLocaleLowerCase()} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div ref={wrapperRef} style={{ position: 'relative', marginTop: '0.75rem', padding: 5, borderRadius: 5 }}>
          <div className="tag-input-box" onClick={() => inputRef.current?.focus()}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: '#3b82f6', color: '#fff', borderRadius: 4, margin: 3,
                  padding: '0.2rem 0.5rem', fontSize: '0.88rem', display: 'inline-flex',
                  alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap', lineHeight: 1.4,
                }}
              >
                {formatPokemonName(tag)}
                <button
                  onMouseDown={(e) => { e.preventDefault(); removeTag(tag) }}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, lineHeight: 1, fontSize: '1rem', opacity: 0.75 }}
                >
                  ×
                </button>
              </span>
            ))}
            <input
              ref={inputRef}
              value={inputText}
              onChange={(e) => { setInputText(e.target.value); setShowDropdown(true); setHighlightedIndex(-1) }}
              onKeyDown={handleKeyDown}
              onFocus={() => { if (inputText) setShowDropdown(true) }}
              placeholder={tags.length === 0 ? 'Type a Pokémon name' : 'Add another…'}
              style={{ border: 'none', outline: 'none', background: 'transparent', flex: '1 1 140px', minWidth: 180, fontSize: '1rem', padding: '0.1rem 0', color: 'inherit' }}
            />
          </div>

          {showDropdown && suggestions.length > 0 && (
            <div className="pokemon-dropdown-box">
              {suggestions.map((p, i) => (
                <div
                  key={p.name}
                  className="pokemon-dropdown-item"
                  onMouseDown={(e) => { e.preventDefault(); addTag(p.name) }}
                  onMouseEnter={() => setHighlightedIndex(i)}
                  style={{
                    padding: '0.4rem 0.75rem', cursor: 'pointer', fontSize: '0.95rem',
                    display: 'flex', alignItems: 'center', gap: '0.5rem', 
                    background: i === highlightedIndex ? 'rgba(59,130,246,0.12)' : undefined,
                  }}
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                    alt=""
                    width={32}
                    height={32}
                  />
                  <span>#{p.id} {formatPokemonName(p.name)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="col-12 m-0 p-0">
        {displayData.map((pokemon) => (
          <PokemonEntry
            pokemon={pokemon}
            typeEfficacy={typeEfficacy}
            build={getPokemonBuild(pokemon.name, pokemonBuilds)}
            key={pokemon.id}
            eager={tags.length === 0}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // eslint-disable-next-line no-undef
  const fs = require('fs')
  // eslint-disable-next-line no-undef
  const path = require('path')
  const buildsPath = path.join(process.cwd(), 'public', 'json', 'PokemonBuilds.json')
  const pokemonBuilds = JSON.parse(fs.readFileSync(buildsPath, 'utf8'))

  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://beta.pokeapi.co/graphql/v1beta' }),
    cache: new InMemoryCache(),
  })

  const championNameList = Array.from(CHAMPIONS_NAMES)

  // https://beta.pokeapi.co/graphql/console/
  const result = await client.query({
    query: gql`
      query samplePokeAPIquery($names: [String!]!) {
        pokemon_v2_pokemon(where: { name: { _in: $names } }) {
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
          pokemon_v2_pokemonabilities {
            is_hidden
            pokemon_v2_ability {
              name
              pokemon_v2_abilitynames(where: { language_id: { _eq: 9 } }) {
                name
              }
              pokemon_v2_abilityflavortexts(
                where: { language_id: { _eq: 9 } }
                order_by: { version_group_id: desc }
                limit: 1
              ) {
                flavor_text
              }
            }
          }
          pokemon_v2_pokemonstats {
            base_stat
            stat_id
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
    variables: { names: championNameList },
  })

  return {
    props: {
      pokedex: parsePokemonGraphQL(result.data.pokemon_v2_pokemon).sort((a, b) => a.id - b.id),
      typeEfficacy: parseTypeEfficacy(result.data.pokemon_v2_typeefficacy),
      pokemonBuilds,
    },
    revalidate: 2592000,
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
