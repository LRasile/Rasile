import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import {
  parsePokemonGraphQL,
  parseTypeEfficacy,
  Pokemon,
} from "../lib/PokemonService";
import PokemonEntry from "../components/PokemonEntry";

export default function PokemonEffectiveness({ pokedex, typeEfficacy }) {
  const [data, setData] = useState<Pokemon[]>(pokedex);
  const originalData: Pokemon[] = pokedex;

  console.log(typeEfficacy);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (originalData) {
      setData(
        originalData.filter(
          (pokemon) => pokemon.name.search(search.toLowerCase()) != -1
        )
      );
    }
  }, [search]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="col-12 px-5 m-2">
        <InputGroup>
          <InputLeftElement
            fontSize="1.5em"
            margin="1"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            placeholder="Pokemon"
            size="lg"
            value={search}
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div className="">
        {data &&
          data.map((pokemon) => (
            <PokemonEntry pokemon={pokemon} typeEfficacy={typeEfficacy} />
          ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

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
  });

  return {
    props: {
      pokedex: parsePokemonGraphQL(result.data.pokemon_v2_pokemon),
      typeEfficacy: parseTypeEfficacy(result.data.pokemon_v2_typeefficacy),
    },
  };
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
