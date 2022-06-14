import type { GetStaticPaths } from "next";
import { PokemonApi } from "api/pokemon.api";
export { default, getStaticProps } from "pages/index";

export const getStaticPaths: GetStaticPaths = async () => {
  const listOfPokemon = await PokemonApi.getAll();
  const paths = listOfPokemon.results.map(({ name }) => ({ params: { name } }));

  return {
    paths,
    fallback: false,
  };
};
