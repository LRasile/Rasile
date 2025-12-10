import { baseTypeArray, GetUrlName as GetUrlName, Pokemon, PokemonTypeEfficacy } from '../../lib/PokemonService'

export interface PokemonEntryProps {
  pokemon: Pokemon
  typeEfficacy: PokemonTypeEfficacy[]
}

export default function PokemonEntry({ pokemon, typeEfficacy }: PokemonEntryProps) {
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
    <div className="flex-item" key={pokemon.name + pokemon.id}>
      <div
        style={{
          textTransform: 'capitalize',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        <a className="pokemon-link" href={`https://bulbapedia.bulbagarden.net/wiki/${GetUrlName(pokemon)}_(Pokémon)`}>
          #{pokemon.id} {pokemon.name}
        </a>{' '}
        <div className={`pokemonType pokemonType${pokemon.types[0]}`}>{pokemon.types[0]}</div>
        {pokemon.types[1] && <div className={`pokemonType pokemonType${pokemon.types[1]}`}>{pokemon.types[1]}</div>}
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
