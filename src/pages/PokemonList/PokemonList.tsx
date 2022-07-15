import { useGetPokemonList } from "@api/pokemonList";
import { Spinner } from "@components";
import { Link } from "react-router-dom";
import { PaginationButtons } from "./PaginationButtons";

export const PokemonList = () => {
  const { pokemonList, isLoading, previousPage, nextPage } =
    useGetPokemonList();

  if (isLoading || !pokemonList) return <Spinner />;

  return (
    <div>
      <h2>Pokemon list</h2>
      <div>
        <PaginationButtons previous={previousPage} next={nextPage} />
        {pokemonList.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <div>{pokemon.name}</div>
          </Link>
        ))}
        <PaginationButtons previous={previousPage} next={nextPage} />
      </div>
    </div>
  );
};
