import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface IProps {
  id: number,
  frontSide: boolean
  size?: number,
  showImage?: boolean
}
const firstTime = {
  ok: true
}

export const PokemonImage = component$(({
  id,
  size = 200,
  frontSide = true,
  showImage = true
}: IProps) => {
  const urlBase = (frontSide)
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'
  const imageLoaded = useSignal(true)
  const nav = useNavigate()

  useTask$(({ track }) => {
    track(() => id)
    // if (!firstTime.ok) imageLoaded.value = false
    firstTime.ok = false
  })

  const goPokemon = $(() => {
    console.log('Va')
    nav(`/pokemon/${id}/`)
  })

  console.log(`${urlBase}${id}.png`, imageLoaded.value, firstTime, size)

  return (
    <div class='flex w-[${size}px] h-[${size}px]'>
      {!imageLoaded.value
        && <span class={`flex w-[${200}px] h-[${size}px] justify-center items-center  `}>Cargando..</span>
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
          src={`${urlBase}${id}.png`}
          width={`${size}`}
        />
      </div>

    </div>
  )
}
);

