import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Form, routeAction$, zod$, z } from '@builder.io/qwik-city';

import styles from './login.css?inline';

export const useLoginUserAction = routeAction$((data, {cookie, redirect}) => {
  const { email, password } = data
  console.log(email, password)

  if (email == 'ismytv@gmail.com' && password == '1234567') {
    cookie.set('jwt', 'my_jwt', {secure:true, path:'/'})
    redirect(302, '/')
  }

  return {
    success: false,
  }
}, zod$({
  email: z.string().email('Email no válido'),
  password: z.string().min(7, 'Minimo 7 caracteres')
}))

export default component$(() => {
  const action = useLoginUserAction()

  useStylesScoped$(styles);

  return (
    <Form
      action={action}
      class="login-form mt-7">
      <div class="relative">
        <input name="email" type="text" placeholder="Email address" />
        <label for="email">Email Address</label>
      </div>
      <div class="relative">
        <input name="password" type="password" placeholder="Password" />
        <label for="password">Password</label>
      </div>
      <div class="relative">
        <button type='submit'>Ingresar</button>
      </div>

      <>
        { action.value?.success && <div>{`Usuario autenticado`}</div>}
      </>

      <code>
        {JSON.stringify(action.value, undefined, 2)}
      </code>
    </Form>
  )
});