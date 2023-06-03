import { createContextId } from "@builder.io/qwik";
import { type ISmallPokemon } from "~/interface/small-pokemon";

export interface IPokemonListSate {
  currentPage : number,
  isLoading   : boolean,
  isAllLoaded : boolean,
  pokemons    : ISmallPokemon[]
}

export const PokemonListContext = createContextId<IPokemonListSate>('pokemonList.context')