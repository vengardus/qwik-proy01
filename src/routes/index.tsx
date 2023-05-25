import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';

export default component$(() => {
  const pokeId = useSignal(1)
  const frontSide = useSignal(true)
  const showImage = useSignal(true)

  const changeId = $((value:number) => {
    if ( pokeId.value + value < 1) return
    pokeId.value += value
  })

  const changeImageSide = $(() => {
    frontSide.value = !frontSide.value
  })

  const changeImageShow = $(() => {
    showImage.value = !showImage.value
  })

  return (
    <>
      <span class='text-xl'>Buscador simple</span>
      <span>{pokeId} </span>

      <PokemonImage 
        id={pokeId.value} 
        frontSide={frontSide.value} 
        showImage={showImage.value} />

      <div>
        <button 
          class='btn btn_primary' 
          onClick$={() => changeImageSide() }>
            Cambiar lado
        </button>
        <button 
          class='btn btn_primary' 
          onClick$={() => changeImageShow() }>
            Mostrar
        </button>
      </div>

      <div class='mt-3'>
        <button
          class='btn'
          onClick$={() => changeId(-1) }
        >
          Anterior
        </button>
        <button
          class='btn btn_primary'
          onClick$={() => changeId(1)}
        >
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'qwik-proy01',
  meta: [
    {
      name: 'qwik-proy01',
      content: 'this is my first app in qwik',
    },
  ],
};
