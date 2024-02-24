import pokemonLogo from "../../../assets/pokemon-logo.png";

export default function Header() {
  return (
    <header className="mt-8 ">
      <img src={pokemonLogo} alt="Pokemon Logo" className="w-20 ml-36" />
    </header>
  );
}
