import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { PortafolioList } from '~/components/portafolio/PortafolioList';

export default component$(() => {
  return (
    <PortafolioList/>
  )
});

export const head: DocumentHead = {
  title: 'Qwik: Project-01',
  meta: [
    {
      name: 'qwik-proy01',
      content: 'this is my first app in qwik',
    },
  ],
};