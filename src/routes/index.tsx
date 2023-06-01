import { $, component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/PokemonImage';
import { PokemonGameContext } from '~/context';

export default component$(() => {
  // const pokeId = useSignal(1)
  // const frontSide = useSignal(true)
  // const showImage = useSignal(true)

  const pokemonGame = useContext(PokemonGameContext)

  const changeId = $((value:number) => {
    if ( pokemonGame.pokeId + value < 1) return
    pokemonGame.pokeId += value
  })

  const changeImageSide = $(() => {
    pokemonGame.frontSide = !pokemonGame.frontSide
  })

  const changeImageShow = $(() => {
    pokemonGame.showImage = !pokemonGame.showImage
  })

  return (
    <>
      <span class='text-xl'>Buscador simple</span>
      <span>{pokemonGame.pokeId} </span>

      <PokemonImage 
        id={pokemonGame.pokeId} 
        frontSide={pokemonGame.frontSide} 
        showImage={pokemonGame.showImage} />

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
