import pokemonLogo from "../../../assets/pokemon-logo.png";

export default function Header() {
  return (
    <header className="mt-8 ">
      <img
        src={pokemonLogo}
        alt="Pokemon Logo"
        className="w-20  xl: ml-72 md:ml-60"
      />
    </header>
  );
}
