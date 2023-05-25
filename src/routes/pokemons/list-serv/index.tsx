import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

export const usePokemonList = routeLoader$( async() => {
  const resp = await fetch(URL)
  const data = await resp.json()
  
  return data
})

export default component$(() => {
  const pokemonList = usePokemonList().value.results

  console.log(pokemonList)

  return (
    <div class='flex flex-col'>


    </div>
  )
});

export const head: DocumentHead = {
  title: 'Pokemon List - Server',
  // meta: [
  //   {
  //     name: 'qwik-proy01',
  //     content: 'this is my first app in qwik',
  //   },
  // ],
};