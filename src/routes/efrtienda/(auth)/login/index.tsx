import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Form, routeAction$, zod$, z } from '@builder.io/qwik-city';
import styles from '../login.css?inline';
import { supabaseClient } from '~/utils/supabase';


export const useLoginUserAction = routeAction$(async (dataForm, requestEvent) => {
  const { email } = dataForm
  const auth: {
    success: boolean,
    message: string
  } = {
    success: false,
    message: ''
  }

  const lastPos = requestEvent.url.href.lastIndexOf('/')
  const url = requestEvent.url.href.substring(0, lastPos) + '/staging'

  // SignIn on supabase
  const supabase = supabaseClient(requestEvent)
  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: url
    }
  })

  if (error)
    auth.message = 'Ocurrió algún error. ' + error
  else {
    auth.message = 'Operación exitosa. Por favor verifique su bandeja de correo (folder recibidos o spam).'
    auth.success = true
  }

  return {
    success: true,
    auth: auth
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
      class="login-form mt-7"
    >
      <div class="relative">
        <input name="email" type="text" placeholder="Email address" />
        <label for="email">Email Address</label>
      </div>

      <div class="relative">
        <button type='submit'>Ingresar</button>
      </div>

      {
        action.isRunning
          ? <div class='p2'>validando...</div>
          : action.value?.failed
            ? <div class='text-red-800 border border-red-800 p-2'>{action.value.fieldErrors?.email}</div>
            : (action.value?.success === undefined)
              ? <></>
              : (action.value?.auth?.success)
                ? <div class='text-green-800 border border-green-900 p-2'>{action.value?.auth?.message}</div>
                : <div class='text-red-800 border border-red-800 p-2'>{action.value?.auth?.message}</div>
      }

    </Form>
  )
});