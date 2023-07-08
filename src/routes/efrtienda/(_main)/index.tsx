import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { About } from '~/components/efrtienda/About';
import { CategoriesList } from '~/components/efrtienda/CategoriesList';
import { type IEfrTiendaCategories } from '~/interface/efrTiendaCategories';
import { supabaseClient } from '~/utils/supabase';


export const useEfrTiendaCategories = routeLoader$<IEfrTiendaCategories>(async (requestEv) => {
  const supabase = supabaseClient(requestEv)
  const data = await supabase.from('categories').select(`*, products (*)`)

  return data as IEfrTiendaCategories
});


export default component$(() => {
  const location = useLocation()
  const categories = useEfrTiendaCategories().value

  return (
    <div class='bg-white text-black'>
      <About />
      {
        (location.isNavigating)
          ? <div class='text-5xl'>Loading...</div>
          : categories?.data === null ? <></> : <CategoriesList categories={categories} />
      }
    </div>
  )
});