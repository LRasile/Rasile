export const baseTypeArray = [
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
  { Name: 'Ice', Search: 'Snorunt' },
  { Name: 'Bug', Search: 'Caterpie' },
  { Name: 'Dragon', Search: 'Dragonair' },
  { Name: 'Ghost', Search: 'Banette' },
  { Name: 'Dark', Search: 'Zorua' },
  { Name: 'Steel', Search: 'Registeel' },
  { Name: 'Fairy', Search: 'Clefairy' },
]

export interface PokemonBuild {
  moves: string[]
  items: string[]
  ability: string | null
}

// Maps PokeAPI names to pokemon-zone.com slugs where they differ
const POKEAPI_TO_ZONE_SLUG: Record<string, string> = {
  'rotom-wash': 'rotom-wash-rotom',
  'rotom-heat': 'rotom-heat-rotom',
  'rotom-frost': 'rotom-frost-rotom',
  'rotom-fan': 'rotom-fan-rotom',
  'rotom-mow': 'rotom-mow-rotom',
  'floette-eternal': 'floette-eternal-flower',
}

export function getPokemonBuild(name: string, builds: Record<string, PokemonBuild>): PokemonBuild | null {
  if (!builds) return null
  if (builds[name]) return builds[name]
  const slug = POKEAPI_TO_ZONE_SLUG[name]
  if (slug && builds[slug]) return builds[slug]
  return null
}

export interface PokemonAbility {
  name: string
  isHidden: boolean
  flavorText: string
}

export interface PokemonStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface Pokemon {
  id: number
  name: string
  types: string[]
  abilities: PokemonAbility[]
  stats: PokemonStats
}

// Pokémon available in Pokémon Champions (launched April 2026)
export const CHAMPIONS_NAMES = new Set([
  'venusaur', 'charizard', 'blastoise', 'beedrill', 'pidgeot', 'arbok', 'pikachu', 'raichu',
  'clefable', 'ninetales', 'arcanine', 'alakazam', 'machamp', 'victreebel', 'slowbro', 'gengar',
  'kangaskhan', 'starmie', 'pinsir', 'tauros', 'gyarados', 'ditto', 'vaporeon', 'jolteon',
  'flareon', 'aerodactyl', 'snorlax', 'dragonite', 'meganium', 'typhlosion', 'feraligatr',
  'ariados', 'ampharos', 'azumarill', 'politoed', 'espeon', 'umbreon', 'slowking', 'forretress',
  'steelix', 'scizor', 'heracross', 'skarmory', 'houndoom', 'tyranitar', 'pelipper', 'gardevoir',
  'sableye', 'aggron', 'medicham', 'manectric', 'sharpedo', 'camerupt', 'torkoal', 'altaria',
  'milotic', 'castform', 'banette', 'chimecho', 'absol', 'glalie', 'torterra', 'infernape',
  'empoleon', 'luxray', 'roserade', 'rampardos', 'bastiodon', 'lopunny', 'spiritomb', 'garchomp',
  'lucario', 'hippowdon', 'toxicroak', 'abomasnow', 'weavile', 'rhyperior', 'leafeon', 'glaceon',
  'gliscor', 'mamoswine', 'gallade', 'froslass', 'rotom', 'serperior', 'emboar', 'samurott',
  'watchog', 'liepard', 'simisage', 'simisear', 'simipour', 'excadrill', 'audino', 'conkeldurr',
  'whimsicott', 'krookodile', 'cofagrigus', 'garbodor', 'zoroark', 'reuniclus', 'vanilluxe',
  'emolga', 'chandelure', 'beartic', 'stunfisk', 'golurk', 'hydreigon', 'volcarona', 'chesnaught',
  'delphox', 'greninja', 'diggersby', 'talonflame', 'vivillon', 'floette', 'florges', 'pangoro',
  'furfrou', 'meowstic', 'aegislash', 'aromatisse', 'slurpuff', 'clawitzer', 'heliolisk',
  'tyrantrum', 'aurorus', 'sylveon', 'hawlucha', 'dedenne', 'goodra', 'klefki', 'trevenant',
  'gourgeist', 'avalugg', 'noivern', 'decidueye', 'incineroar', 'primarina', 'toucannon',
  'crabominable', 'lycanroc', 'toxapex', 'mudsdale', 'araquanid', 'salazzle', 'tsareena',
  'oranguru', 'passimian', 'mimikyu', 'drampa', 'kommo-o', 'corviknight', 'flapple', 'appletun',
  'sandaconda', 'polteageist', 'hatterene', 'mr-rime', 'runerigus', 'alcremie', 'morpeko',
  'dragapult', 'wyrdeer', 'kleavor', 'basculegion', 'basculegion-male', 'basculegion-female', 'sneasler', 'meowscarada', 'skeledirge',
  'quaquaval', 'maushold', 'garganacl', 'armarouge', 'ceruledge', 'bellibolt', 'scovillain',
  'espathra', 'tinkaton', 'palafin', 'orthworm', 'glimmora', 'farigiraf', 'kingambit',
  'sinistcha', 'archaludon', 'hydrapple',
])

export function isChampionsPokemon(name: string): boolean {
  if (CHAMPIONS_NAMES.has(name)) return true
  // Include mega forms of Champions Pokémon (e.g. charizard-mega-x, venusaur-mega)
  if (name.includes('mega')) {
    const baseName = name.split('-mega')[0]
    return CHAMPIONS_NAMES.has(baseName)
  }
  return false
}

export function GetUrlName(pokemon: Pokemon) {
  var nameParts = pokemon.name.split('-')
  if (nameParts.length === 1) {
    return capitalizedString(nameParts[0])
  }
  return `${capitalizedString(nameParts[0])}_${capitalizedString(nameParts[1])}`
}

export function capitalizedString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatPokemonName(name: string): string {
  const parts = name.split('-')
  const megaIndex = parts.indexOf('mega')
  if (megaIndex !== -1) {
    const base = parts.slice(0, megaIndex).map(capitalizedString).join(' ')
    const suffix = parts.slice(megaIndex + 1).map((s) => s.toUpperCase()).join(' ')
    return `Mega ${base}${suffix ? ' ' + suffix : ''}`
  }
  return parts.map(capitalizedString).join(' ')
}

export interface PokemonTypeEfficacy {
  damageFactor: number
  attackingType: string
  defendingType: string
}

export function parseTypeEfficacy(
  pokemon_v2_typeefficacy
): PokemonTypeEfficacy[] {
  let typeEfficacyArray = []

  pokemon_v2_typeefficacy.map((item) => {
    typeEfficacyArray.push(parseType(item))
  })

  return typeEfficacyArray
}

function parseType(itemJson): PokemonTypeEfficacy {
  const damageFactor =
    itemJson.damage_factor == 0 ? 0 : itemJson.damage_factor / 100

  const typeEfficacy: PokemonTypeEfficacy = {
    damageFactor: damageFactor,
    attackingType: itemJson.pokemon_v2_type.name,
    defendingType: itemJson.pokemonV2TypeByTargetTypeId.name,
  }

  return typeEfficacy
}

export function parsePokemonGraphQL(pokemon_v2_pokemon): Pokemon[] {
  let pokemonArray = []

  pokemon_v2_pokemon.map((item) => {
    pokemonArray.push(parsePokemon(item))
  })

  return pokemonArray
}

function parsePokemon(itemJson): Pokemon {
  let typeArray: string[] = []

  itemJson.pokemon_v2_pokemontypes.map((type) => {
    typeArray.push(type.pokemon_v2_type.pokemon_v2_typenames[0].name)
  })

  let abilityArray: PokemonAbility[] = []

  itemJson.pokemon_v2_pokemonabilities.map((a) => {
    const names = a.pokemon_v2_ability.pokemon_v2_abilitynames
    const flavorTexts = a.pokemon_v2_ability.pokemon_v2_abilityflavortexts
    abilityArray.push({
      name: names.length > 0 ? names[0].name : a.pokemon_v2_ability.name,
      isHidden: a.is_hidden,
      flavorText: flavorTexts.length > 0 ? flavorTexts[0].flavor_text : '',
    })
  })

  const statMap: Record<number, keyof PokemonStats> = { 1: 'hp', 2: 'attack', 3: 'defense', 4: 'specialAttack', 5: 'specialDefense', 6: 'speed' }
  const stats: PokemonStats = { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0 }
  if (itemJson.pokemon_v2_pokemonstats) {
    itemJson.pokemon_v2_pokemonstats.forEach((s) => {
      const key = statMap[s.stat_id]
      if (key) stats[key] = s.base_stat
    })
  }

  const pokemon: Pokemon = {
    id: itemJson.id,
    name: itemJson.name,
    types: typeArray,
    abilities: abilityArray,
    stats,
  }

  return pokemon
}
