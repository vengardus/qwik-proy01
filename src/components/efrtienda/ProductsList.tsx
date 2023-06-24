import { component$ } from "@builder.io/qwik";
import { type Products } from "~/interface/efrTiendaCategories";
import { ProductsItem } from "./ProductsItem";

interface IProps {
  products: Products
}

export const ProductsList = component$(({products}:IProps) => {
  return (
    <div class="flex flex-wrap w-full p-5 justify-around ">
      {
        products.data.map(product => (
          <ProductsItem
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
});