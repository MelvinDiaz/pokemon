
interface Pokemon {
  name: string;
  url: string;
  imageUrl: string;
  type: string;
  id: number;
  abilities: string[];
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
  };
  moves: string[];
  message: string;
}



export type { Pokemon};