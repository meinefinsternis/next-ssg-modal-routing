export type ListOfPokemon = {
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

export type CurrentPokemon = {
  sprites: {
    front_shiny: string;
  };
  name: string;
};
