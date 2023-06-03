import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Navbar from '~/components/shared/navbar/navbar';
import styles from './styles.css?inline';
import { PokemonProvider } from '~/context/pokemon/pokemonProvider';

export default component$(() => {
  useStyles$(styles);

  return (
    <PokemonProvider>
      <Navbar />
      <main class='flex flex-col items-center'>
        <Slot />
      </main>
    </PokemonProvider>
  );
});
