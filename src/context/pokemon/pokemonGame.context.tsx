import { createContextId } from "@builder.io/qwik"

export interface IPokemonGameState {
  pokeId : number
  frontSide : boolean
  showImage : boolean
}

export const PokemonGameContext = createContextId<IPokemonGameState>('pokemonGame.context')