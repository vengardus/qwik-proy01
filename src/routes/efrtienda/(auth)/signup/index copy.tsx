import { component$, useStylesScoped$, $, useStore } from '@builder.io/qwik';
import { Form, routeAction$, zod$, z } from '@builder.io/qwik-city';
import { supabase } from '~/utils/supabase';

import styles from '../login.css?inline';

export const useLoginUserAction = routeAction$((data) => {
  const { email } = data
  console.log(email)
  return {
    success: true,
  }
}, zod$({
  email: z.string().email('Email no válido!'),
}))


export default component$(() => {
  const message = useStore({
    isError: false,
    message: '',
    isLoading: false
  })

  const handleOnSubmit = $(async (e: any, action: any) => {
    // Hay algun error en el formulario
    message.isError = false
    message.isLoading = true
    if (action.success === undefined) {
      const fieldsErrors = JSON.parse(JSON.stringify(action.fieldErrors))
      for (const x of Object.keys(fieldsErrors))
        for (const y of fieldsErrors[x])
          message.message += y
      message.isError = true
      message.isLoading = false
      return
    }

    const email = e.target.email.value

    const timestamp = Date.now()
    const password = Math.floor(Math.random() * 100000) + email + timestamp

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })

    if ( data?.user?.id )
      message.message = 'Usuario registrado satisfactoriamente'
    else {
      message.isError = true
      message.message = 'Ocurrió algún error. ' + error?.message 
    }
    message.isLoading = false
  }
  )

  const action = useLoginUserAction()

  
  useStylesScoped$(styles);

  return (
    <Form
      action={action}
      onSubmit$={(e) => handleOnSubmit(e, action.value)}
      preventdefault:submit
      class="login-form mt-7">
      <div class="relative">
        <input name="email" type="text" placeholder="Email address" />
        <label for="email">Email Address</label>
      </div>

      <div class="relative">
        <button type='submit'>Registrar</button>
      </div>

      {/* <>
        {action.value?.success && <div>{`Usuario autenticado`}</div>}
      </> */}

      {/* <code>
        {JSON.stringify(action.value, undefined, 2)}
      </code> */}
      {
        message.isLoading
        ? <div>Validando...</div>
        : <div class={`border-2 p-2 ${message.isError?'text-red-800 border-red-800':'text-green-800 border-green-800'}`}>
          {message.message}
          </div>
      }
    </Form>
  )
});