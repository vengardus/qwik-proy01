import { component$ } from '@builder.io/qwik';
import type{ DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';

export const usePokemonId = routeLoader$<number>(
  ({params, redirect}) => {
    console.log('ed')
    const id = Number(params.id)
    console.log(id, 'x')
    if ( isNaN(id) ) redirect( 301, '/')
    if ( id <= 0 ) redirect( 301, '/')
    if ( id > 1000 ) redirect( 301, '/')
    return id
  }
)

export default component$(() => {
  console.log('entra')
  // const location = useLocation()
  // const id = parseInt(location.params.id)
  const pokemonId = usePokemonId()
  return (
    <>
    Hola {pokemonId.value}
      <PokemonImage 
        id={pokemonId.value}
        frontSide={true}
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