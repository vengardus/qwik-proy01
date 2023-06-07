import { component$, useStore, useStylesScoped$, $, useComputed$ } from '@builder.io/qwik';

import styles from './login.css?inline';

export default component$(() => {

  const formState = useStore({
    email   : '',
    password: '',
    formPosted: false
  })

  const emailError = useComputed$(() => {
    return formState.email.includes("@")? '' : 'not-valid'
  })
  const passwordError = useComputed$(() => {
    return (formState.password.length > 6)? '' : 'not-valid'
  })

  const onSubmit = $(() => {
    formState.formPosted = true
    console.log(formState.email, formState.password)
  })

  useStylesScoped$(styles);

  return (
    <form 
      onSubmit$={onSubmit}
      class="login-form" preventdefault:submit>
      <div class="relative">
        <input 
          value={formState.email}
          class={ (formState.formPosted)? emailError.value : ''}
          onInput$={(event) => formState.email = (event.target as HTMLInputElement).value}
          name="email" type="text" placeholder="Email address" />
        <label for="email">Email Address</label>
      </div>
      <div class="relative">
        <input 
          value={formState.password} 
          class={ (formState.formPosted)? passwordError.value : ''}
          onInput$={(event) => formState.password = (event.target as HTMLInputElement).value}
          id="password" name="password" type="password" placeholder="Password" />
        <label for="password">Password</label>
      </div>
      <div class="relative">
        <button type='submit'>Ingresar</button>
      </div>


      <code>
                { JSON.stringify( formState, undefined , 2 ) }
            </code>
    </form>
  )
});