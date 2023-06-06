import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';
import { Modal } from '~/components/shared/modal/modal';
import { getChatGptResponseAboutPokemon } from '~/helpers/getChatGptResponse';
import { usePokemonGame } from '~/hooks/usePokemonGame';

export const usePokemonId = routeLoader$<number>(
  ({ params, redirect }) => {
    const id = Number(params.id)

    if (isNaN(id)) redirect(301, '/')
    if (id <= 0) redirect(301, '/')
    if (id > 1000) redirect(301, '/')

    return id
  }
)



export default component$(() => {
  const pokemonId = usePokemonId()

  // const pokemonGame = useContext(PokemonGameContext)
  const pokemonGame = usePokemonGame()

  const showModal = useSignal(false)

  const chatGptResponse = useSignal('')


  useVisibleTask$(({track}) => {
    track(() => pokemonGame.pokeName.value)

    if ( pokemonGame.pokeName.value?.length > 0 ) {
      console.log(pokemonGame.pokeName.value)
      getChatGptResponseAboutPokemon( pokemonGame.pokeName.value )
      .then( resp => chatGptResponse.value = resp)
    }

  })  


  const showModalCallback = $(() => {
    showModal.value = true
  });
  
  const closeModalCallback = $(() => {
    showModal.value = false
  });


  return (
    <>
      <span class='text-3xl'>Pokemon</span> {pokemonId.value}
      <div
        id='image'
        class='flex flex-col justify-center items-center'
        preventdefault:click
        onClick$={() => {
          showModalCallback()
          // event.stopPropagation()
        }}>
        <PokemonImage
          id={pokemonId.value}
          frontSide={pokemonGame.frontSide.value}
          showImage={pokemonGame.showImage.value}
          name={pokemonGame.pokeName.value}
        />
      </div>
      <div class='mt-3 flex gap-x-3'>
        <button onClick$={pokemonGame.changeImageSide} class='btn btn_primary'>
          Cambiar lado
        </button>
        <button onClick$={pokemonGame.changeImageShow} class='btn btn_primary'>
          Mostrar
        </button>
      </div>

      <Modal 
        showModal={showModal.value} 
        closeModal={closeModalCallback}
        size='md'
      >
        <span q:slot='title' class='text-blue-700'>{pokemonGame.pokeName}</span>
        <div q:slot='content' class='flex flex-col justify-center items-center'>
          <PokemonImage 
            id={pokemonId.value} 
            frontSide={pokemonGame.frontSide.value}
          />
          <span>
            { (chatGptResponse.value != '' )
              ? `${chatGptResponse}`
              : 'Preguntando a chatGpt...'
            }
          </span>
        </div>
      </Modal>

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