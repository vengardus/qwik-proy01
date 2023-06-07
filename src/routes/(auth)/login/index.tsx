import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Form, routeAction$ } from '@builder.io/qwik-city';

import styles from './login.css?inline';

export const useLoginUserAction = routeAction$((data, event) => {
  const { email, password } = data
  console.log(email, password)

  if (email == 'ismytv@gmail.com' && password == '1234567') {
    return {
      success: true,
      jwt: 'my_jwt'
    }
  }

  return {
    success: false,
  }


})

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
        { action.value?.success && <div>{`Usuario autenticado con ${action.value.jwt}`}</div>}
      </>

      <code>
        {JSON.stringify(action.value, undefined, 2)}
      </code>
    </Form>
  )
});