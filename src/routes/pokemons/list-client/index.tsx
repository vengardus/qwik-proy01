import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const size = 200
  return (
    <>
    <span>Ed</span>
    <img
        alt="logo1111"
        height={`${size}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`}
        width={`${size}`}
      />
      <div>Hola</div>
    </>
  )
});