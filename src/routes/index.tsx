import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';

export default component$(() => {
  const pokeId = useSignal(1)
  const frontSide = useSignal(true)

  const changeId = $((value) => {
    if ( pokeId.value + value < 1) return
    pokeId.value += value
  })

  const changeImageSide = $(() => {
    frontSide.value = !frontSide.value
  })

  return (
    <>
      <span class='text-xl'>Buscador simple</span>
      <span>{pokeId} </span>

      <PokemonImage id={pokeId.value} frontSide={frontSide.value} />

      <div>
        <button class='btn btn_primary' onClick$={() => changeImageSide() }>Cambiar lado</button>
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
