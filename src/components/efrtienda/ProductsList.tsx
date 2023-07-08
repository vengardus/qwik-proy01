import { component$ } from "@builder.io/qwik";
import { type Product } from "~/interface/efrTiendaCategories";
import { ProductsItem } from "./ProductsItem";

interface IProps {
  products: Product[]
}

export const ProductsList = component$(({products}:IProps) => {
  console.log('PRODU!!', )
  return (
    <div class="flex flex-wrap w-full p-5 justify-around ">
      {
        products?.map(product => (
          <ProductsItem
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
});