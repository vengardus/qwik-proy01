import { createContextId } from "@builder.io/qwik"

export interface IPokemonGameState {
  pokeId    : number
  pokeName  : string
  frontSide : boolean
  showImage : boolean
}

export const PokemonGameContext = createContextId<IPokemonGameState>('pokemonGame.context')