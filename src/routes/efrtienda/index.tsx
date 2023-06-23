import { component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { About } from '~/components/efrtienda/About';
import { CategoriesList } from '~/components/efrtienda/CategoriesList';
import { getEfrTiendaCategories } from '~/helpers/getEfrTiendaCategories';
import { type IEfrTiendaCategories } from '~/interface/efrTiendaCategories';

export const useEfrTiendaCategories = routeLoader$<IEfrTiendaCategories>(async () => {
  return await getEfrTiendaCategories()
})

export default component$(() => {
  const location = useLocation()
  const categories = useEfrTiendaCategories().value 
  console.log('index', categories)
  console.log('item', categories?.data[0].attributes.name)

  return (
    <div class='bg-white text-black'>
      <About />
      {
        location.isNavigating
        ? <div>Loading...</div>
        : <CategoriesList categories={categories}/>
      }
    </div>
  )
});