import {
  Flex,
  Image,
  Card,
  Heading,
  Text,
  VStack,
  Box,
  Progress,
  Grid,
} from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../helpers/stringManagement";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../services/dataService";
import { useState, useEffect } from "react";
import { Pokemon } from "../types";

export default function PokemonDetailsCard() {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [isLoading, setIsLoading] = useState(true);
  let { pokemonId } = useParams();

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  useEffect(() => {
    getPokemonDetails(apiUrl).then((data) => {
      setPokemon(data);
      setIsLoading(false);
    });
  }, [pokemonId]);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Flex
        minH="calc(100vh)"
        minW="100%"
        justify="center"
        alignItems="center"
        gap={5}
      >
        <Card
          justify="center"
          p={10}
          borderRadius="xl"
          minW="400px"
          minH="300px"
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
          <Flex justify="center" alignItems="center">
            <Image
              src={pokemon.imageUrl}
              alt={pokemon.name}
              boxSize={{ base: "100px", md: "150px", xl: "200px" }}
              objectFit="cover"
              backgroundColor="gray.200"
              borderRadius="100%"
            />
            <VStack>
              <Heading>{capitalizeFirstLetter(pokemon.name)}</Heading>
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
                <Text fontSize="xl">{capitalizeFirstLetter(pokemon.type)}</Text>
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
        <Card
          minW="400px"
          h="300px"
          justify="center"
          p={10}
          borderRadius="xl"
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
          <Flex direction="column" alignItems="center" gap={10}>
            <Heading>Details</Heading>
            <Flex gap={10}>
              <Box>
                <Text fontWeight="bold">Abilities:</Text>
                <VStack>
                  {pokemon.abilities?.map((abilites: string, index: number) => {
                    return (
                      <Text key={index}>{capitalizeFirstLetter(abilites)}</Text>
                    );
                  })}
                </VStack>
              </Box>
              <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                <Box>
                  <Flex gap={5} alignItems="center" justify="space-between">
                    <Text fontWeight="bold">Hp: </Text>
                    <Progress
                      value={pokemon.stats.hp}
                      max={100}
                      size="md"
                      width="100px"
                    />
                  </Flex>
                  <Flex gap={5} alignItems="center" justify="space-between">
                    <Text fontWeight="bold">Attack: </Text>
                    <Progress
                      value={pokemon.stats.attack}
                      max={100}
                      size="md"
                      width="100px"
                    />
                  </Flex>
                  <Flex gap={5} alignItems="center" justify="space-between">
                    <Text fontWeight="bold">Speed: </Text>
                    <Progress
                      value={pokemon.stats.speed}
                      max={100}
                      size="md"
                      width="100px"
                    />
                  </Flex>
                </Box>
                <Box>
                  <Flex gap={5} alignItems="center" justify="space-between">
                    <Text fontWeight="bold">Special Attack: </Text>
                    <Progress
                      value={pokemon.stats.specialAttack}
                      max={100}
                      size="md"
                      width="100px"
                    />
                  </Flex>
                  <Flex gap={5} alignItems="center" justify="space-between">
                    <Text fontWeight="bold">Special Defense: </Text>
                    <Progress
                      value={pokemon.stats.specialDefense}
                      max={100}
                      size="md"
                      width="100px"
                    />
                  </Flex>
                  <Flex gap={5} alignItems="center" justify="space-between">
                    <Text fontWeight="bold">Defense: </Text>
                    <Progress
                      value={pokemon.stats.defense}
                      max={100}
                      size="md"
                      width="100px"
                    />
                  </Flex>
                </Box>
              </Grid>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    );
  }
}
