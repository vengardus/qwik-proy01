import { Slot, component$  } from '@builder.io/qwik';
import Navbar from '~/components/shared/navbar/Navbar';
import { PokemonProvider } from '~/context/pokemon/pokemonProvider';

export default component$(() => {

  return (
    <PokemonProvider>
      <Navbar />
      <main class='flex flex-col items-center relative top-[58px] z-0 mt-2'>
        <Slot />
      </main>
    </PokemonProvider>
  )
});