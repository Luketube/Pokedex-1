import { useGetPokemonDetails } from "@api/pokemonDetails";
import { Spinner } from "@components";
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
  const { pokemonName } = useParams();

  const { isLoading, data } = useGetPokemonDetails(pokemonName);

  console.log(data);

  if (isLoading || !data) return <Spinner />;

  return (
    <div>
      <h2>{data?.name}</h2>
    </div>
  );
};
