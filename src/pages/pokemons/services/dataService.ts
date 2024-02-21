import axios from "axios";
import { Pokemon } from "../types";

async function getPokemonDetails(url: string): Promise<Pokemon> {
  try {
    const response = await axios.get(url);
    return {
      name: response.data.name,
      url: response.data.url,
      imageUrl: response.data.sprites.front_default,
      type: response.data.types[0].type.name,
      id: response.data.id,
      abilities: response.data.abilities.map(
        (ability: any) => ability.ability.name
      ),
      height: response.data.height,
      weight: response.data.weight,
      message: "Success",
      moves: response.data.moves.map((move: any) => move.move.name),
      stats: {
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        specialAttack: response.data.stats[3].base_stat,
        specialDefense: response.data.stats[4].base_stat,
      },

    };
  } catch (e) {
    console.error(e);
    throw e;
  }
}
// Get pokemons from the API
async function getPokemons(
  page: number = 1,
  limit: number = 20
): Promise<Pokemon[]> {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${
    (page - 1) * limit
  }&limit=${limit}`;

  try {
    const response = await axios.get(url);

    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon: Pokemon) => {
        return await getPokemonDetails(pokemon.url);
      })
    );
    return pokemons;
  } catch (e) {
    throw e;
  }
}

export { getPokemons, getPokemonDetails}