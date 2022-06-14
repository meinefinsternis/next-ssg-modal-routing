import axios from "axios";
import { CurrentPokemon, ListOfPokemon } from "types/Pokemon.types";

export const PokemonApi = {
  getAll: async () => {
    const res = await axios.get<ListOfPokemon>(
      "https://pokeapi.co/api/v2/pokemon"
    );
    return res.data;
  },
  getOne: async (name: string) => {
    const res = await axios.get<CurrentPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return res.data;
  },
};
