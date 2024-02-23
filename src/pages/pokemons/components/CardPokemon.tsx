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
      maxW="md"
      maxH="md"
      borderWidth={2}
      _hover={{ shadow: "lg", cursor: "pointer" }}
      transition={"all 0.3s"}
      backgroundColor={obtainTypeColor(pokemon.type)}
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
  );
}
