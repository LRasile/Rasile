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
  'espathra', 'tinkaton', 'palafin', 'palafin-zero', 'palafin-hero', 'orthworm', 'glimmora', 'farigiraf', 'kingambit',
  'sinistcha', 'archaludon', 'hydrapple',
  // Regional variants available in Pokémon Champions
  'raichu-alola', 'ninetales-alola', 'arcanine-hisui',
  'slowbro-galar', 'slowking-galar', 'tauros-paldea-combat',
  'typhlosion-hisui', 'samurott-hisui', 'zoroark-hisui',
  'stunfisk-galar', 'goodra-hisui', 'avalugg-hisui', 'decidueye-hisui',
])

// Maps PokeAPI names whose ID ≠ national dex number to their Serebii sprite filename.
// Covers: standard megas (IDs 10033+), regional forms (IDs 10xxx), Champions-exclusive megas.
const CHAMPIONS_SPRITE_MAP: Record<string, string> = {
  // Standard megas
  'venusaur-mega': '003-m.png', 'charizard-mega-x': '006-mx.png', 'charizard-mega-y': '006-my.png',
  'blastoise-mega': '009-m.png', 'beedrill-mega': '015-m.png', 'pidgeot-mega': '018-m.png',
  'alakazam-mega': '065-m.png', 'slowbro-mega': '080-m.png', 'gengar-mega': '094-m.png',
  'kangaskhan-mega': '115-m.png', 'pinsir-mega': '127-m.png', 'gyarados-mega': '130-m.png',
  'aerodactyl-mega': '142-m.png', 'ampharos-mega': '181-m.png', 'steelix-mega': '208-m.png',
  'scizor-mega': '212-m.png', 'heracross-mega': '214-m.png', 'houndoom-mega': '229-m.png',
  'tyranitar-mega': '248-m.png', 'gardevoir-mega': '282-m.png', 'sableye-mega': '302-m.png',
  'aggron-mega': '306-m.png', 'medicham-mega': '308-m.png', 'manectric-mega': '310-m.png',
  'sharpedo-mega': '319-m.png', 'camerupt-mega': '323-m.png', 'altaria-mega': '334-m.png',
  'banette-mega': '354-m.png', 'absol-mega': '359-m.png', 'glalie-mega': '362-m.png',
  'lopunny-mega': '428-m.png', 'garchomp-mega': '445-m.png', 'lucario-mega': '448-m.png',
  'abomasnow-mega': '460-m.png', 'gallade-mega': '475-m.png', 'audino-mega': '531-m.png',
  // Champions-exclusive megas
  'clefable-mega': '036-m.png', 'victreebel-mega': '071-m.png', 'starmie-mega': '121-m.png',
  'dragonite-mega': '149-m.png', 'meganium-mega': '154-m.png', 'feraligatr-mega': '160-m.png',
  'skarmory-mega': '227-m.png', 'chimecho-mega': '358-m.png', 'froslass-mega': '478-m.png',
  'emboar-mega': '500-m.png', 'excadrill-mega': '530-m.png', 'chandelure-mega': '609-m.png',
  'golurk-mega': '623-m.png', 'chesnaught-mega': '652-m.png', 'delphox-mega': '655-m.png',
  'greninja-mega': '658-m.png', 'floette-mega': '670-m.png', 'meowstic-mega': '678-m.png',
  'hawlucha-mega': '701-m.png', 'crabominable-mega': '740-m.png', 'drampa-mega': '780-m.png',
  'scovillain-mega': '952-m.png', 'glimmora-mega': '970-m.png',
  // Regional forms (PokeAPI assigns these IDs in the 10xxx range, not the national dex)
  'palafin-hero': '964-h.png',
  'raichu-alola': '026-a.png', 'ninetales-alola': '038-a.png', 'arcanine-hisui': '059-h.png',
  'slowbro-galar': '080-g.png', 'tauros-paldea-combat': '128-p.png',
  'typhlosion-hisui': '157-h.png', 'samurott-hisui': '503-h.png', 'zoroark-hisui': '571-h.png',
  'stunfisk-galar': '618-g.png', 'goodra-hisui': '706-h.png', 'avalugg-hisui': '713-h.png',
  'decidueye-hisui': '724-h.png', 'slowking-galar': '199-g.png',
}

export function getChampionsSprite(name: string, id: number): string {
  const file = CHAMPIONS_SPRITE_MAP[name]
    ?? (id < 1000 ? String(id).padStart(3, '0') : String(id)) + '.png'
  return `/images/champions/${file}`
}

export function isChampionsPokemon(name: string): boolean {
  if (CHAMPIONS_NAMES.has(name)) return true
  // Include mega forms of Champions Pokémon (e.g. charizard-mega-x, venusaur-mega)
  if (name.includes('mega')) {
    const baseName = name.split('-mega')[0]
    return CHAMPIONS_NAMES.has(baseName)
  }
  // Form variants: progressively strip trailing segments to find a Champions base name
  // e.g. 'aegislash-shield' → 'aegislash', 'morpeko-full-belly' → 'morpeko-full' → 'morpeko'
  const parts = name.split('-')
  for (let i = parts.length - 1; i >= 1; i--) {
    const candidate = parts.slice(0, i).join('-')
    if (CHAMPIONS_NAMES.has(candidate)) return true
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
