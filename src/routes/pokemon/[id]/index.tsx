import { component$, useContext } from '@builder.io/qwik';
import type{ DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';
import { PokemonGameContext } from '~/context';

export const usePokemonId = routeLoader$<number>(
  ({params, redirect}) => {
    const id = Number(params.id)

    if ( isNaN(id) ) redirect( 301, '/')
    if ( id <= 0 ) redirect( 301, '/')
    if ( id > 1000 ) redirect( 301, '/')

    return id
  }
)

export default component$(() => {
  const pokemonId = usePokemonId()

  const pokemonGame = useContext(PokemonGameContext)

  return (
    <>
     {pokemonId.value}
      <PokemonImage 
        id={pokemonId.value}
        frontSide={pokemonGame.frontSide}
        showImage={pokemonGame.showImage}
      />
    </>)
});

export const head: DocumentHead = {
  title: 'Pokemon',
  // meta: [
  //   {
  //     name: 'qwik-proy01',
  //     content: 'this is my first app in qwik',
  //   },
  // ],
};