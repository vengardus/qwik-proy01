import { Slot, component$  } from '@builder.io/qwik';
import Navbar from '~/components/shared/navbar/navbar';
import { PokemonProvider } from '~/context/pokemon/pokemonProvider';

export default component$(() => {

  return (
    <PokemonProvider>
      <Navbar />
      <main class='flex flex-col items-center'>
        <Slot />
      </main>
    </PokemonProvider>
  )
});