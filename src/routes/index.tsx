import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const launchId = useSignal(1)
  return (
    <>
      <span class='text-xl'>Buscador simple</span>
      <span>{launchId} </span>

      <div></div>

      <div class='mt-3'>
        <button class='btn'>Anterior</button>
        <button class='btn btn_primary'>Siguiente</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'SpaceX Launch Logo',
  meta: [
    {
      name: 'qwik-proy01',
      content: 'this is my first app in qwik',
    },
  ],
};
