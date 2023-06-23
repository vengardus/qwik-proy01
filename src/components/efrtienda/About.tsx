import { component$ } from "@builder.io/qwik";
import { aboutDetails } from "./data"
import { Image } from "@unpic/qwik";

export const About = component$(() => {
  return (
    <div class="flex flex-col pl-[0.7em] md:flex-row pt-3 md:w-full">
      <div class="flex flex-col space-y-2 md-3/12">
        <h1 class="font-serif text-title font-thin text-title-orange">
          Quiénes somos
        </h1>
        <Image
          alt="about-us"
          class="w-[90%] h-auto"
          height={100}
          src={'https://qmartek.com/img/art3.svg'}
          width={100}
        />
      </div>

      <div class="py-2 pl-2 pr-6 md:px-8 md:w-9/12">
        <div class="flex flex-col space-y-8">
          {
            aboutDetails.map(item => (
              <>
                <div
                  class="flex flex-col space-y-4"
                  key={item.item}
                >
                  <div class="flex space-x-1 items-center">
                    <div class="rounded-full bg-orange-400 text-white text-center w-[30px] height-[30px] p-[2px] shadow-sm shadow-gray-200">
                      {item.item}
                    </div>
                    <span class="uppercase font-bold"> {item.title}</span>
                  </div>
                  <div>
                    <div class="font-[300] text-justify pl-4">
                      {item.detail}
                    </div>
                    {
                      (item.detailItems != undefined) && <div class="flex flex-col pl-4">
                        {
                          item.detailItems.map(detailItem => (
                            <>
                              <div class="font-[300]">- {detailItem} </div>
                            </>
                          ))
                        }
                      </div>
                    }
                  </div>

                </div>
              </>
            ))
          }

        </div>
      </div>
    </div>
  )
});