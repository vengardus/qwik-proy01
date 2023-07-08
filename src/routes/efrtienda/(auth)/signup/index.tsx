import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Form, routeAction$, zod$, z } from '@builder.io/qwik-city';
import { supabaseClient } from '~/utils/supabase';

import styles from '../login.css?inline';

export const useLoginUserAction = routeAction$(async (dataForm, requestEvent) => {
  const { email } = dataForm
  const auth: {
    success: boolean,
    message: string
  } = {
    success: false,
    message: ''
  }

  // SignUp
  const timestamp = Date.now()
  const password = Math.floor(Math.random() * 100000) + email + timestamp

  const supabase = supabaseClient(requestEvent)
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password
  })

  if ( error )
    auth.message = 'Ocurrió algún error. ' + error?.message 
  else {
    auth.message = auth.message = 'Operación exitosa. Por favor verifique su bandeja de correo (folder recibidos o spam).'
    auth.success = true
  }
  
  return {
    success : true,
    auth    : auth
  }
}, zod$({
  email: z.string().email('Email no válido!'),
}))


export default component$(() => {
  const action = useLoginUserAction()
  
  useStylesScoped$(styles);

  return (
    <Form
      action={action}
      preventdefault:submit
      class="login-form mt-7">
      <div class="relative">
        <input name="email" type="text" placeholder="Email address" />
        <label for="email">Email Address</label>
      </div>

      <div class="relative">
        <button type='submit'>Registrar</button>
      </div>
    </Form>
  )
});