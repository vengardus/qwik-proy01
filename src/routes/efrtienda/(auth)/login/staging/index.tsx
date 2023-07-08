import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead, Link, useNavigate, type RequestHandler, type RequestEvent } from "@builder.io/qwik-city";
import { getCookie } from "~/helpers/getCookie";
import { supabase } from "~/utils/supabase";

export const onGet:RequestHandler=(requestEvent:RequestEvent) => {
  const { cookie } = requestEvent
  const key = cookie.get('sb-auth')
  console.log('ONGET:', key)
  console.log('ONGET-value:', key?.value)
  if ( key?.value ) {
     cookie.set('sb-auth-2', key.value, {secure:true, path:'/'})
  }
}

export const onGet1 = (x:string) => {
  console.log('onGet-002', x)
  onGet
  console.log('onGet-003', x)
  }

export default component$(() => {
 const nav = useNavigate()
 
  
  useVisibleTask$(async () => {
    const timeout = setTimeout(async () => {
      const {data, error} = await supabase.auth.getUser()
      console.log('data:', data)
      if (data?.user?.id && !error) {
        const cname ='sb-auth'
        const cvalue = import.meta.env.PUBLIC_APP_KEY
        console.log('cvalue', cvalue)
        // requestEv.cookie.set(cname, cvalue, {secure:true, path:'/'})
        const cother = ';secure; path=/'
        document.cookie = cname + "=" + cvalue + cother;
        console.log('listo!')
        // const resp = await supabase.auth.signOut()
        // console.log('OUT', resp)
        //onGet
        console.log('cookie-supabase:', getCookie('sb-access-token'))
        console.log('cookie-auth:', getCookie('sb-auth'))
      }
      else {
        console.log('error!!!:', error)
        nav('/login2')
      }


    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  })

  //useStaging()
  return (
    <div>
      <span>Redirecting to</span>
      <Link href="/members/dashboard">
        <button class='btn btn_primary'>Dashboard</button>
      </Link>
    </div>
  )
});

export const head: DocumentHead = {
  title: 'Staging',
  meta: [
    {
      name: 'qwik-proy01',
      content: 'Authorization check ',
    },
  ],
};




