import { Pokemon } from "../types";
import {
  capitalizeFirstLetter,
  obtainTypeColor,
} from "../../../helpers/stringManagement";
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
      className="w-72 h-80 md:w-60 md:h-70"
      backgroundColor={obtainTypeColor(pokemon.type)}
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
