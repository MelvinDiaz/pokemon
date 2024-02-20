import Pokemons from "./pages/pokemons/Pokemons";
import "./App.css";
import { Flex, Text } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" gap={10} p={10} backgroundColor="blue.50">
      <Text fontSize="4xl" textAlign="center">
        Pokemon information
      </Text>
      <Text fontSize="xl" textAlign="center">
        Click on a Pokemon to see more information.
      </Text>
      <Pokemons />
    </Flex>
  );
}

export default App;
