import {
  Flex,
  Image,
  Card,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../services/dataService";
import { useState, useEffect } from "react";
import { Pokemon } from "../types";

export default function PokemonDetailsCard() {
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
    <Flex
      minH="calc(100vh)"
      minW="100%"
      justify="center"
      alignItems="center"
      gap={5}
    >
      <Card
        p={10}
        borderRadius="xl"
        w="30%"
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
        <Flex justify="space-around">
          <Image
            src={pokemon.imageUrl}
            alt={pokemon.name}
            boxSize={{ base: "100px", md: "150px", xl: "200px" }}
            objectFit="cover"
            backgroundColor="gray.200"
            borderRadius="100%"
          />
          <VStack>
            <Heading>{pokemon.name}</Heading>
            <Flex gap={1}>
              <Text fontWeight="bold" fontSize="xl">
                Id:{" "}
              </Text>
              <Text fontSize="xl">{pokemon.id}</Text>
            </Flex>
            <Flex gap={1}>
              <Text fontWeight="bold" fontSize="xl">
                Types:{" "}
              </Text>
              <Text fontSize="xl">{pokemon.type}</Text>
            </Flex>
            <Flex gap={1}>
              <Text fontWeight="bold" fontSize="xl">
                Height:{" "}
              </Text>
              <Text fontSize="xl">{pokemon.height}</Text>
            </Flex>
            <Flex gap={1}>
              <Text fontWeight="bold" fontSize="xl">
                {"Weight: "}
              </Text>
              <Text fontSize="xl">{pokemon.weight}</Text>
            </Flex>
          </VStack>
        </Flex>
      </Card>
      <Card>
        <VStack>
          <Heading>Details</Heading>
          <Flex>
            <Text fontWeight="bold">Abilities: </Text>
            <VStack>
              {pokemon.abilities.map((ability: string) => {
                return <Text>{ability}</Text>;
              })}
            </VStack>
          </Flex>
        </VStack>
      </Card>
    </Flex>
  );
}
