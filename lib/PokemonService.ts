export interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

export interface PokemonTypeEfficacy {
  damageFactor: number;
  attackingType: string;
  defendingType: string;
}

export function parseTypeEfficacy(
  pokemon_v2_typeefficacy
): PokemonTypeEfficacy[] {
  let typeEfficacyArray = [];

  pokemon_v2_typeefficacy.map((item) => {
    typeEfficacyArray.push(parseType(item));
  });

  return typeEfficacyArray;
}

function parseType(itemJson): PokemonTypeEfficacy {
  const damageFactor =
    itemJson.damage_factor == 0 ? 0 : itemJson.damage_factor / 100;

  const typeEfficacy: PokemonTypeEfficacy = {
    damageFactor: damageFactor,
    attackingType: itemJson.pokemon_v2_type.name,
    defendingType: itemJson.pokemonV2TypeByTargetTypeId.name,
  };

  return typeEfficacy;
}

export function parsePokemonGraphQL(pokemon_v2_pokemon): Pokemon[] {
  let pokemonArray = [];

  pokemon_v2_pokemon.map((item) => {
    pokemonArray.push(parsePokemon(item));
  });

  return pokemonArray;
}

function parsePokemon(itemJson): Pokemon {
  let typeArray: string[] = [];

  itemJson.pokemon_v2_pokemontypes.map((type) => {
    typeArray.push(type.pokemon_v2_type.pokemon_v2_typenames[0].name);
  });

  const pokemon: Pokemon = {
    id: itemJson.id,
    name: itemJson.name,
    types: typeArray,
  };

  return pokemon;
}
