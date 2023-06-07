import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <div>Dashoard Layout</div>
      <Slot />
    </>
  )
});