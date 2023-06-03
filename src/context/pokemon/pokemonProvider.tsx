import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { type IPokemonGameState, PokemonGameContext } from "./pokemonGame.context";
import { type IPokemonListSate, PokemonListContext } from "./pokemonList.context";


export const PokemonProvider = component$(() => {
  const pokemonGame = useStore<IPokemonGameState>({
    pokeId: 4,
    showImage: false,
    frontSide: true
  })
  
  const pokemonList = useStore<IPokemonListSate>({
    currentPage: 0,
    isLoading: false,
    isAllLoaded: false,
    pokemons: []
  })
  
  useContextProvider(PokemonGameContext, pokemonGame)
  useContextProvider(PokemonListContext, pokemonList)

  return (
    <Slot />
  )
});
