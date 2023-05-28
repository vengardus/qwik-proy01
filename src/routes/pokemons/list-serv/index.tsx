import { component$, useComputed$ } from '@builder.io/qwik';
import { routeLoader$, Link, useLocation } from '@builder.io/qwik-city';
import type { DocumentHead, RouteLocation } from '@builder.io/qwik-city';
import type { IPokemonListResponse, IPokemonInfo } from '~/interface';

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon'

export const usePokemonList = routeLoader$<IPokemonInfo[]>(async ({ query, redirect, pathname }) => {
  const offset = Number(query.get('offset') || '0')
  if ( offset < 0 || isNaN(offset) ) redirect(301, pathname)
  
  const resp = await fetch(`${URL_BASE}?limit=10&offset=${offset}`)
  const data = await resp.json() as IPokemonListResponse

  return data.results
})

// // Otra forma de obtebner los párametros de la url
// const getParameter = (location: RouteLocation, parm: string) => {
//   return location.url.searchParams.get(parm)
// }

export default component$(() => {
  const location = useLocation()
  const pokemonList = usePokemonList().value

  const currentOffset = useComputed$<number>(() => {
    const offSetString = new URLSearchParams(location.url.search)
    return Number(offSetString.get('offset') || 0);
  });

  return (
    <>
      <div class='flex flex-col gap-y-3 items-center mb-5'>
        <span>Status</span>
        <span>Página actual: {currentOffset}</span>
        <span>Está cargando página: {location.isNavigating? 'Si':'No'}</span>
      </div>

      <div class='flex gap-x-5 mb-5'>
        <Link
          class='btn btn_primary'
          href={`/pokemons/list-serv/?offset=${currentOffset.value - 10}`}
        >
          Anteriores
        </Link>
        <Link
          class='btn btn_primary'
          href={`/pokemons/list-serv/?offset=${currentOffset.value + 10}`}
        >
          Siguientes
        </Link>
      </div>

      <div class='mb-3 text-3xl'>Listado </div>
      <div class='flex gap-x-7 gap-y-3 w-[20rem] flex-wrap'>
        {
          pokemonList.map(pokemon => (
            <div key={pokemon.name} class='w-[5rem]'>
              <span class='capitalize'>{pokemon.name}</span>
            </div>
          ))
        }
      </div>
    </>
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