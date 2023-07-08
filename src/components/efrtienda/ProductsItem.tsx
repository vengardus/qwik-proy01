import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { CURRENCIES, whatsappData } from "./data";
import { type IProduct } from "~/interface/efrTiendaCategories";

interface IProps {
  product: IProduct
}

export const ProductsItem = component$(({product}:IProps) => {
  const currencySymbol = (product.currency == CURRENCIES.pen.code) ? 'S/.' : 'US$'
  const whatsappMsg = `${whatsappData.msg}Estoy interesado en el modelo ${product.model}`
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappData.phone}&text='${whatsappMsg}'`

  return (
    <div class="flex flex-col w-12/12 md:w-4/12 lg:w-3/12  justify-center items-center">
      <div class="w-[60%] md:w-full h-[16rem]  rounded-2xl bg-gray-100 border-2">
        <Image
          class='h-full max-h-[25rem] object-fixed p-1.5'
          alt={product.name}
          // src={product.attributes.image.data.attributes.url}
          src={product.image_url}
          width={450}
          height={450}
        />
      </div>

      <div class="text-[15px] font-bold uppercase text-center">
        {product.name}
      </div>

      <div class="text-[17px] font-bold uppercase text-center">
        {product.model}
      </div>

      {/* <div class="text-xl text-center">
        {replaceLabels(product.attributes.description, "**", "strong")}
      </div> */}

      {
        <div class="flex space-x-3 text-[1.17em] font-bold">
          <span>{currencySymbol}</span>
          <span>{product.price.toFixed(2)}</span>
        </div>
      }

      <a 
        // itemprop="url" 
        class="flex box-border border-2 p-[10px] font-[15px] text-green-600 font-opensans shadow-gray-700 shadow-sm items-center space-x-2"
        href={whatsappUrl}
        target="_blank"
      >
        <Image
          alt="wsp"
          class="bg-green-200 w-[24px] h-[24px]"
          height={20}
          src={'/assets/img/ui/whatsapp.svg'}
          width={20}
        />
        <span class="">LO QUIERO</span>
      </a>

    </div>
  )
});