import { URL_CATEGORIES } from "~/components/efrtienda/data"
import { type IEfrTiendaCategories } from "~/interface/efrTiendaCategories"

const URL_BASE = URL_CATEGORIES

export const getEfrTiendaCategories = async(): Promise<IEfrTiendaCategories> => {
  const resp = await fetch(`${URL_BASE}`)
  const data = await resp.json() as IEfrTiendaCategories
  console.log(data)
  return data
}