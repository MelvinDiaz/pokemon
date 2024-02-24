import { Pokemon } from "../types";
import { capitalizeFirstLetter } from "../../../helpers/stringManagement";
import { Card, Text, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function CardPokemon(pokemon: Pokemon) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      key={pokemon.id}
      borderRadius="lg"
      overflow="hidden"
      _hover={{ shadow: "lg", cursor: "pointer" }}
      transition={"all 0.3s"}
      className="h-80 w-72"
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
          objectFit="cover"
          className="rounded-full bg-white w-32 my-9"
        />
        <Text className="font-bold font-inter text-lg">
          {capitalizeFirstLetter(pokemon.name)}
        </Text>
        <Text className="font-inter text-lg my-4">
          {capitalizeFirstLetter(pokemon.type)}
        </Text>
      </Flex>
    </Card>
  );
}
