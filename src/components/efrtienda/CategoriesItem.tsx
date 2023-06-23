import { component$ } from "@builder.io/qwik";
import { type IEfrTiendaCategoriesDatum } from "~/interface/efrTiendaCategories";
import { ProductsList } from "./ProductsList";

interface IProps {
  category: IEfrTiendaCategoriesDatum
}
export const CategoriesItem = component$(({ category }: IProps) => {
  const products = category.attributes.products

  console.log(products)

  return (
    <div>
      <div class="text-orange-600 text-[34px] pl-[0.3em] font-[100] font-serif pb-4">
        {category.attributes.name}
      </div>
      {
        (!products.data.length)
          ? <div class="pl-4">No hay productos disponibles</div>
          : <ProductsList products={products} />
      }
    </div>
  )
});