import { useState, useEffect } from "react";
import { getPokemons } from "../services/dataService";
import { Grid } from "@chakra-ui/react";
import { Pokemon } from "../types";
import { CardPokemon } from "./CardPokemon";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function getPokemonList() {
    let pokemonList = getPokemons(1, 30);
    pokemonList.then((pokemons: Pokemon[]) => {
      setPokemons(pokemons);
    });
  }

  useEffect(() => {
    getPokemonList().catch((e) => console.error(e));
  }, []);

  return (
    <Grid className="grid grid-cols-4 mx-60 gap-y-8 my-7 justify-items-center ">
      {pokemons.map((pokemon: Pokemon) => (
        <CardPokemon
          id={pokemon.id}
          imageUrl={pokemon.imageUrl}
          name={pokemon.name}
          url={pokemon.url}
          type={pokemon.type}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          moves={pokemon.moves}
          message={pokemon.message}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      ))}
    </Grid>
  );
}
