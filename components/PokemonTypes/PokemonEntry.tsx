import { useState, useEffect, useRef } from 'react'
import { baseTypeArray, GetUrlName as GetUrlName, Pokemon, PokemonBuild, PokemonTypeEfficacy } from '../../lib/PokemonService'

export interface PokemonEntryProps {
  pokemon: Pokemon
  typeEfficacy: PokemonTypeEfficacy[]
  build?: PokemonBuild | null
  eager?: boolean
}

export default function PokemonEntry({ pokemon, typeEfficacy, build, eager }: PokemonEntryProps) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [showBuild, setShowBuild] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImgLoaded(true)
    }
  }, [])
  let pokemonEfficacyArray = []

  baseTypeArray.map((type) => {
    const attackingType = type.Name.toLowerCase()

    let firstTypingDamageFactor = typeEfficacy.filter(
      (t) => t.attackingType == attackingType && t.defendingType == pokemon.types[0].toLowerCase()
    )[0].damageFactor

    let secondTypingDamageFactor = 1
    if (pokemon.types[1]) {
      secondTypingDamageFactor = typeEfficacy.filter(
        (t) => t.attackingType == attackingType && t.defendingType == pokemon.types[1].toLowerCase()
      )[0].damageFactor
    }

    const typeEff = {
      name: `${attackingType[0].toUpperCase()}${attackingType.slice(1)}`,
      damageFactor: 1 * firstTypingDamageFactor * secondTypingDamageFactor,
    }

    pokemonEfficacyArray.push(typeEff)
  })

  //var pokemonUrlName = pokemon.name.replace('-', '_')

  return (
    <div className="flex-item" key={pokemon.name + pokemon.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>

      {/* Col 1: image, name, types, abilities */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, position: 'relative' }}>
          {!imgLoaded && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', borderTop: '2px solid #63b3ed', animation: 'spin 0.8s linear infinite' }} />
            </div>
          )}
          <img
            ref={imgRef}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
            width={64}
            height={64}
            loading={eager ? 'eager' : 'lazy'}
            onLoad={() => setImgLoaded(true)}
            style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
          />
        </div>
        <a className="pokemon-link" href={`https://bulbapedia.bulbagarden.net/wiki/${GetUrlName(pokemon)}_(Pokémon)`} style={{ fontSize: 17, fontWeight: 'bold', textTransform: 'capitalize', display: 'block' }}>
          #{pokemon.id} {pokemon.name}
        </a>
        <div style={{ marginTop: 2 }}>
          <div className={`pokemonType pokemonType${pokemon.types[0]}`}>{pokemon.types[0]}</div>
          {pokemon.types[1] && <div className={`pokemonType pokemonType${pokemon.types[1]}`}>{pokemon.types[1]}</div>}
        </div>
        <div style={{ fontSize: '0.86rem', marginTop: '0.3rem' }}>
          {pokemon.abilities.map((a) => (
            <a
              key={a.name}
              title={a.flavorText}
              href={`https://bulbapedia.bulbagarden.net/wiki/${a.name.replace(/ /g, '_')}_(Ability)`}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'block', fontStyle: a.isHidden ? 'italic' : 'normal', opacity: a.isHidden ? 0.55 : 0.85, color: 'inherit', textDecoration: 'none' }}
            >
              {a.name}{a.isHidden ? ' (H)' : ''}
            </a>
          ))}
        </div>
        {build && (
          <button
            onClick={() => setShowBuild(true)}
            style={{ marginTop: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, padding: '0.2rem 0.6rem', cursor: 'pointer', fontSize: '0.75rem', color: 'inherit' }}
          >
            Build
          </button>
        )}
      </div>

      {/* Build modal */}
      {showBuild && build && (
        <div
          onClick={() => setShowBuild(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#2d3748', borderRadius: 10, padding: '1.5rem', minWidth: 280, maxWidth: 400, position: 'relative', fontSize: '0.95rem' }}
          >
            <button
              onClick={() => setShowBuild(false)}
              style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', opacity: 0.5, color: 'inherit' }}
            >
              ✕
            </button>
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'capitalize', marginBottom: '1rem' }}>
              {pokemon.name} — Build
            </div>
            {build.ability && (
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ opacity: 0.5, fontSize: '0.75rem', marginBottom: 2 }}>Ability</div>
                <span style={{ fontWeight: 'bold', color: '#90cdf4' }}>{build.ability}</span>
              </div>
            )}
            {build.items.length > 0 && (
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ opacity: 0.5, fontSize: '0.75rem', marginBottom: 2 }}>Items</div>
                {build.items.map((item) => <div key={item}>{item}</div>)}
              </div>
            )}
            {build.moves.length > 0 && (
              <div>
                <div style={{ opacity: 0.5, fontSize: '0.75rem', marginBottom: 2 }}>Moves</div>
                {build.moves.map((move) => <div key={move}>{move}</div>)}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Col 3: stats */}
      {pokemon.stats && (
        <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '3px', flex: 1, minWidth: 0 }}>
          {[
            { label: 'HP', value: pokemon.stats.hp },
            { label: 'Atk', value: pokemon.stats.attack },
            { label: 'Def', value: pokemon.stats.defense },
            { label: 'SpA', value: pokemon.stats.specialAttack },
            { label: 'SpD', value: pokemon.stats.specialDefense },
            { label: 'Spe', value: pokemon.stats.speed },
          ].map(({ label, value }) => {
            const color = value >= 110 ? '#63b3ed' : value >= 80 ? '#68d391' : value >= 55 ? '#f6e05e' : value >= 35 ? '#f6ad55' : '#fc8181'
            return (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ opacity: 0.5, width: 26, textAlign: 'right', flexShrink: 0 }}>{label}</span>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 3, height: 6, overflow: 'hidden' }}>
                  <div style={{ width: `${Math.min(value / 200, 1) * 100}%`, background: color, height: '100%', borderRadius: 3 }} />
                </div>
                <span style={{ color, fontWeight: 'bold', width: 26, flexShrink: 0 }}>{value}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Col 4: weaknesses & resistances — 5 mini columns */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', gap: 4 }}>
        {[
          { label: '4', factor: 4, bg: 'rgba(252,129,129,0.2)' },
          { label: '2', factor: 2, bg: 'rgba(252,129,129,0.1)' },
          { label: '0.5', factor: 0.5, bg: null },
          { label: '0.25', factor: 0.25, bg: 'rgba(104,211,145,0.08)' },
          { label: '0', factor: 0, bg: 'rgba(104,211,145,0.14)' },
        ].map(({ label, factor, bg }) => {
          const types = pokemonEfficacyArray.filter((i) => i.damageFactor === factor)
          return (
            <div key={label} style={{ flex: 1, minWidth: 0, background: bg, borderRadius: 6, padding: '4px 4px 4px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.5, marginBottom: 2 }}>{label}</span>
              {types.map((t) => (
                <div key={pokemon.id + ':' + t.name} className={`pokemonType pokemonType${t.name}`} style={{}}>{t.name}</div>
              ))}
            </div>
          )
        })}
      </div>


    </div>
  )
}
