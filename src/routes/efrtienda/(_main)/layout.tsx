import { Slot, component$ } from '@builder.io/qwik';
import { navigationMenu } from '~/components/efrtienda/data';
import Navbar from '~/components/shared/navbar/Navbar';

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class='flex flex-col relative top-[58px] z-0'>
        <Navbar 
          navigationMenu={navigationMenu} 
          isFixed={false}
          logo={''}
        />
        <Slot />
      </main>
    </>
  )
});