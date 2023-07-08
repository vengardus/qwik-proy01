import { component$ } from "@builder.io/qwik";
import { type IEfrTiendaCategories } from "~/interface/efrTiendaCategories";
import { CategoriesItem } from "./CategoriesItem";

interface IProps {
  categories: IEfrTiendaCategories
}

export const CategoriesList = component$(({categories}:IProps) => {

  return (
    <div id='about' class="flex flex-col w-full p-0 space-y-7 pt-14">
      {
        categories?.data?.map(category => (
          <CategoriesItem
            key={ category.id } 
            category={ category } 
          />
        ))
      }
    </div>
  )
});