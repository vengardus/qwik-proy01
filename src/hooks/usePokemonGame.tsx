import { useContext, $, useComputed$ } from "@builder.io/qwik"
import { PokemonGameContext } from "~/context"

export const usePokemonGame = () => {
  const pokemonGame = useContext(PokemonGameContext)

  const changeId = $((value:number) => {
    if ( pokemonGame.pokeId + value < 1) return
    pokemonGame.pokeId += value
  })

  const changeName = $((value:string) => {
    pokemonGame.pokeName = value
  })

  const changeImageSide = $(() => {
    pokemonGame.frontSide = !pokemonGame.frontSide
  })

  const changeImageShow = $(() => {
    pokemonGame.showImage = !pokemonGame.showImage
  })

  return {
    pokeId    : useComputed$(() => pokemonGame.pokeId),
    pokeName  : useComputed$(() => pokemonGame.pokeName),
    frontSide : useComputed$(() => pokemonGame.frontSide),
    showImage : useComputed$(() => pokemonGame.showImage),
    changeId,
    changeName,
    changeImageShow,
    changeImageSide
  }
}