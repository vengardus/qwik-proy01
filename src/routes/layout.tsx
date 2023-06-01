import { component$, Slot, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';
import Navbar from '~/components/shared/navbar/navbar';
import styles from './styles.css?inline';
import { PokemonGameContext, type IPokemonGameState } from '~/context';


export default component$(() => {
  useStyles$(styles);

  const pokemonGame = useStore<IPokemonGameState>({
    pokeId: 4,
    showImage: false,
    frontSide: true
  })

  useContextProvider(PokemonGameContext, pokemonGame)

  return (
    <>
      <Navbar />
      <main class='flex flex-col items-center'>
        <Slot />
      </main>
    </>
  );
});
