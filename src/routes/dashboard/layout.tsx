import { Slot, component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useCheckAuthCookie = routeLoader$(({cookie, redirect})=> {
  const jwtCookie = cookie.get('jwt')

  if ( jwtCookie ) {
    console.log('cookie', jwtCookie)
    return
  }

  redirect(302, '/login')
})

export default component$(() => {
  return (
    <>
      <div>Dashoard Layout</div>
      <Slot />
    </>
  )
});