import { component$ } from "@builder.io/qwik";
import { type IEfrTiendaCategories } from "~/interface/efrTiendaCategories";
import { CategoriesItem } from "./CategoriesItem";

interface IProps {
  categories: IEfrTiendaCategories
}
export const CategoriesList = component$(({categories}:IProps) => {
  console.log('list', categories.data[0].attributes.name)
  

  return (
    <div class="flex flex-col w-full p-0 space-y-7 pt-14">
      {
        categories.data.map(category => (
          <CategoriesItem
            key={ category.id } 
            category={ category } 
          />
        ))
      }
    </div>
  )
});