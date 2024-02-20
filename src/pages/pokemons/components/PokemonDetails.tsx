import { Flex, Image, Card, Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../services/dataService";
import { useState, useEffect } from "react";
import { Pokemon } from "../types";
export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  let { pokemonId } = useParams();

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  useEffect(() => {
    async function getPokemon() {
      let pokemon = await getPokemonDetails(apiUrl);
      setPokemon(pokemon);
    }
    getPokemon().catch((e) => console.error(e));
  }, [pokemonId]);
  return (
    <Flex>
      <Card>
        <Flex>
          <Image src={pokemon.imageUrl} alt={pokemon.name} />
          <Box>
            <Heading>{pokemon.name}</Heading>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.height}</Text>
            <Text>{pokemon.weight}</Text>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}
