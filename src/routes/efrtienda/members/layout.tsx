import { component$, Slot, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { supabase } from '~/utils/supabase';


export default component$(() => {
  const nav = useNavigate()
  const user: {
    isAuth: boolean,
    email: string
  } = useStore({
    isAuth: false,
    email: ''
  })

  useVisibleTask$(async () => {
    const { data, error } = await supabase.auth.getSession()

    if (data?.session?.user?.id === undefined || error) {
      nav('/login2')
      return
    }
    user.isAuth = true
    user.email = data.session.user.email!
  })

  return (
    <div class='flex flex-col'>
      <div class='text-center'>Bienvenido: {user.email}</div>
      <div class='text-center mt-3 mb-3'>MEMBERS</div>
      <Slot />
    </div>
  );
});

