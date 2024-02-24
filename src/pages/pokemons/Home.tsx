import { Flex } from "@chakra-ui/react";
import Pokemons from "./components/Pokemons";
import Header from "./components/Header";
import InformationSection from "./components/InformationSection";
export default function Home() {
  return (
    <>
      <Header />
      <Flex direction="column" gap={10} p={10}>
        <InformationSection />
        <Pokemons />
      </Flex>
    </>
  );
}
