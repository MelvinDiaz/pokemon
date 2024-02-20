import { useState, useEffect } from "react";
import { Card, Text, Image, Grid, Flex } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../helpers/stringManagement";
import { getPokemons } from "./services/dataService";
import { Pokemon } from "./types";

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
    <Grid
      templateColumns={{
        base: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        xl: "repeat(6, 1fr)",
      }}
      gap={5}
    >
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <Card
          key={index}
          borderRadius="lg"
          overflow="hidden"
          maxW="md"
          maxH="md"
          borderWidth={2}
          _hover={{ shadow: "lg", cursor: "pointer" }}
          transition={"all 0.3s"}
          backgroundColor={
            pokemon.type === "fire"
              ? "red.200"
              : pokemon.type === "water"
              ? "blue.200"
              : pokemon.type === "grass"
              ? "green.200"
              : pokemon.type === "electric"
              ? "yellow.200"
              : pokemon.type === "psychic"
              ? "purple.200"
              : pokemon.type === "ice"
              ? "cyan.200"
              : pokemon.type === "dragon"
              ? "orange.200"
              : pokemon.type === "bug"
              ? "green.100"
              : pokemon.type === "normal"
              ? "brown.100"
              : pokemon.type === "poison"
              ? "purple.100"
              : pokemon.type === "ground"
              ? "brown.200"
              : pokemon.type === "fairy"
              ? "pink.100"
              : pokemon.type === "fighting"
              ? "red.100"
              : pokemon.type === "rock"
              ? "brown.200"
              : pokemon.type === "ghost"
              ? "gray.200"
              : pokemon.type === "steel"
              ? "gray.300"
              : pokemon.type === "flying"
              ? "gray.100"
              : pokemon.type === "dark"
              ? "gray.400"
              : pokemon.type === "shadow"
              ? "gray.500"
              : "blue.100"
          }
        >
          <Flex justifyContent="center" alignItems="center" direction="column">
            <Image
              src={pokemon.imageUrl}
              alt={pokemon.name}
              boxSize={{ base: "100px", md: "150px", xl: "200px" }}
              objectFit="cover"
            />
            <Text p={10} fontSize="xl" textAlign="center">
              {capitalizeFirstLetter(pokemon.name)}
            </Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
