import { component$ } from '@builder.io/qwik';
import { useCounter } from '~/hooks/useCounter';

export default component$(() => {
  const counter = useCounter(20)

  return (
    <>
      <span class='text-2xl'>Counter</span>
      <span class='text-7xl'>{counter.counter.value}</span>

      <div class='flex gap-x-3 mt-3'>
        <button class='btn btn_primary' onClick$={() => counter.decrease()}>-1</button>
        <button class='btn btn_primary' onClick$={() => counter.increase()}>+1</button>
      </div>
    </>
  )
});