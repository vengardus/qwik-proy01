import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';
import { usePokemonGame } from '~/hooks/usePokemonGame';

export default component$(() => {
  const pokemonGame = usePokemonGame()

  return (
    <>
      <span class='text-xl'>Buscador simple</span>
      <span>{pokemonGame.pokeId.value} </span>

      <PokemonImage
        id={pokemonGame.pokeId.value}
        frontSide={pokemonGame.frontSide.value}
        showImage={pokemonGame.showImage.value} />

      <div>
        <button onClick$={pokemonGame.changeImageSide} class='btn btn_primary'>
          Cambiar lado
        </button>
        <button onClick$={pokemonGame.changeImageShow} class='btn btn_primary'>
          Mostrar
        </button>
      </div>

      <div class='mt-3'>
        <button onClick$={() => pokemonGame.changeId(-1)} class='btn'>
          Anterior
        </button>
        <button onClick$={() => pokemonGame.changeId(1)} class='btn btn_primary'>
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
