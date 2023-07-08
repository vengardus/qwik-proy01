import { component$ } from "@builder.io/qwik";
import { type IProduct } from "~/interface/efrTiendaCategories";
import { ProductsItem } from "./ProductsItem";

interface IProps {
  products: IProduct[]
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