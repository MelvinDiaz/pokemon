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

export { getPokemons}