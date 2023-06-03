import { $, component$, useContext, useOnDocument, useTask$} from '@builder.io/qwik';
import { PokemonImage } from '~/components/pokemons/PokemonImage';
import { PokemonListContext } from '~/context';
import { getSmallPokemons } from '~/helpers/getSmallPokemons';
// import type { ISmallPokemon } from '~/interface';

// interface IPokemonPageState {
//   currentPage : number,
//   isLoading   : boolean,
//   isAllLoaded : boolean,
//   pokemons    : ISmallPokemon[]
// }

export default component$(() => {
  // const pokemonState = useStore<IPokemonPageState>({
  //   currentPage : 0,
  //   isLoading   : false,
  //   isAllLoaded : false,
  //   pokemons    : []
  // })
  const pokemonState = useContext(PokemonListContext)
   



  // Se ejecuta al reenderizar el componente una vez, ocurre en el lado del cliente
  // useVisibleTask$(async ({track}) => {
  //   // Cada vez que cambie pokemonState.CurrentPage se ejecutará useVisibleTask$
  //   track(() => pokemonState.currentPage) 

  //   const pokemons = await getSmallPokemons(pokemonState.currentPage * 10, 10)
  //   pokemonState.pokemons = [ ...pokemonState.pokemons, ...pokemons]
  // })

  // Se ejecuta ANTES de que el componente se renderize por primera vez
  // Se ejecuta por lo menos una vez en el servidor 
  useTask$(async ({track}) => {
    // Cada vez que cambie pokemonState.CurrentPage se ejecutará useTask$
    track(() => pokemonState.currentPage) 

    pokemonState.isLoading = true
    
    const itemsByPage = 30
    const pokemonCount = 1000
    const offset = 
    ( (pokemonState.currentPage * itemsByPage + itemsByPage) <= pokemonCount ) 
      ? itemsByPage
      : ((pokemonState.currentPage * itemsByPage) <= pokemonCount)
      ? pokemonCount - (pokemonState.currentPage * itemsByPage)
      : 0
    
      // if offset=0 no hay mas items por leer
    if ( ! offset ) 
      pokemonState.isAllLoaded = true
    else {
      const pokemons = await getSmallPokemons(pokemonState.currentPage * 30, 30)
      pokemonState.pokemons = [ ...pokemonState.pokemons, ...pokemons]
    }
    pokemonState.isLoading = false

  })

  useOnDocument('scroll', $(() => {
    const maxScroll = document.body.scrollHeight
    const currentScroll = window.scrollY + window.innerHeight

    if ( currentScroll + 200 >= maxScroll && !pokemonState.isLoading ) {
      pokemonState.currentPage++
      pokemonState.isLoading = true
    }
      
  }))
  

  return (
    <>
    {
      console.log(pokemonState.isLoading)
    }
      <div class='flex flex-col gap-y-3 items-center mb-5'>
        <span class='text-2xl'>Status</span>
        <span>Página actual : {pokemonState.currentPage} </span>
        <span>Está cargando : {pokemonState.isLoading? 'Si':'No'}</span>
        <span>Todos cargados: {pokemonState.isAllLoaded? 'Si':'No'}</span>
      </div>

      <div class='flex gap-x-5 mb-5'>
        <button
          class='btn btn_primary'
          onClick$={() => pokemonState.currentPage--}
        >
          Anteriores
        </button>
        <button
          class='btn btn_primary'
          onClick$={() => pokemonState.currentPage++}
        >
          Siguientes
        </button>
      </div>

      <div class='mb-3 text-3xl'>Listado </div>
      <div class='flex gap-x-20 gap-y-3 w-[60%] flex-wrap justify-center'>
        {
          pokemonState.pokemons.map(pokemon => (
            <div key={pokemon.id} class='flex flex-col w-[5rem] items-center justify-center'>
              <PokemonImage id={Number(pokemon.id)} frontSide={true}  />
              <span class='capitalize'>{pokemon.name}</span>
            </div>
          ))
        }
      </div>
    </>
  )
});
