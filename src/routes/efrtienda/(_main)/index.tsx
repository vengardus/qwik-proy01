import { component$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$, server$, useLocation } from "@builder.io/qwik-city";
import { About } from '~/components/efrtienda/About';
import { CategoriesList } from '~/components/efrtienda/CategoriesList';
import { type IEfrTiendaCategories } from '~/interface/efrTiendaCategories';
import { supabaseClient, supabase } from '~/utils/supabase';


// export const useEfrTiendaCategories = routeLoader$<IEfrTiendaCategories>(async (requestEv) => {
//   console.log('routeLoader EFRTienda')
//   const supabase = supabaseClient(requestEv)
//   const data = await supabase.from('categories').select(`*, products (*)`)
//   return data as IEfrTiendaCategories
//   return []
// });

/*
Probando carga de datos mediante function Server$ en lugar de routeLoader$
*/
export const getCategoriesServer = server$(async function () {
  console.log('server EFRTienda')
  const data = await supabase.from('categories').select(`*, products (*)`).then(resp => resp) as IEfrTiendaCategories
  return data
});

export default component$(() => {
  console.log('component EFRTienda')
  const location = useLocation()
  // const categories = useEfrTiendaCategories().value
  const categories = useSignal<IEfrTiendaCategories>()

  useVisibleTask$(async () => {
    categories.value = await getCategoriesServer()
    console.log('data2!:', (categories.value !== undefined) ?? 'nothing')
  })

  return (
    <div class='bg-white text-black'>
      <About />
      {
        (location.isNavigating) || (categories.value === undefined)
          ? <div class='pl-3'>Loading...</div>
          : <CategoriesList categories={categories?.value} />
      }
    </div>
  )
});