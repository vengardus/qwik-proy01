import { $, component$, useComputed$, useSignal, useTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface IProps {
  id: number,
  frontSide: boolean
  size?: number,
  showImage?: boolean
}


export const PokemonImage = component$(({
  id,
  size = 200,
  frontSide = true,
  showImage = true
}: IProps) => {
  const urlBase = useComputed$(() => {
    return (frontSide)
      ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'
  })
  const imageLoaded = useSignal(true)
  const nav = useNavigate()

  useTask$(({ track }) => {
    track(() => id)
    imageLoaded.value = false
  })

  const goPokemon = $(() => {
    nav(`/pokemon/${id}/`)
  })

  return (
    <div class={`flex w-[${size}px] h-[${size}px]`}>
      {!imageLoaded.value
        && <span class={`flex w-full h-full justify-center items-center  `}>Cargando..</span>
      }

      <div onClick$={() => goPokemon()}>
        <img
          alt="logo"
          class={{
            'hidden': !imageLoaded.value,
            'brightness-0': !showImage,
          }}
          height={`${size}`}
          onLoad$={() => { imageLoaded.value = true }}
          src={`${urlBase.value}${id}.png`}
          width={`${size}`}
        />
      </div>

    </div>
  )
}
);

