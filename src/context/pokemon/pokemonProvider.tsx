import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { type IPokemonGameState, PokemonGameContext } from "./pokemonGame.context";
import { type IPokemonListSate, PokemonListContext } from "./pokemonList.context";


export const PokemonProvider = component$(() => {
  const pokemonGame = useStore<IPokemonGameState>({
    pokeId: 1,
    pokeName: '',
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

  // Recordar:
  // Los useVisibleTasks se ejecutan en orden y siempre en el cliente
  // Seejcuta solo una vez antes de reenderizar o cuando cambia una variable del track

  useVisibleTask$(() => {
    // Leer del localStorage
    if ( ! localStorage.getItem('pokemonGame') )
      return
    
    const data = JSON.parse(localStorage.getItem('pokemonGame')!) as IPokemonGameState
    pokemonGame.pokeId = data.pokeId
    pokemonGame.frontSide = data.frontSide
    pokemonGame.showImage = data.showImage
  })

  useVisibleTask$(({ track }) => {
    track( () => {
      pokemonGame.pokeId, 
      pokemonGame.frontSide,
      pokemonGame.showImage
    })

    localStorage.setItem('pokemonGame', JSON.stringify(pokemonGame))
  })

  return (
    <Slot />
  )
});
