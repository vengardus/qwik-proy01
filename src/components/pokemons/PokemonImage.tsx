import { component$, useSignal, useTask$ } from "@builder.io/qwik";

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
  const urlBase = (frontSide)
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'
  const imageLoaded = useSignal(true)
  const firstTime = { 
    ok: true
  }

  useTask$(({ track }) => {
    track(() => id)
    if ( !firstTime.ok ) imageLoaded.value = false
    firstTime.ok = false
  })

  return (
    <div class='flex w-[${size}px] h-[${size}px]'>
      {!imageLoaded.value
        && <span class={`flex w-[${200}px] h-[${size}px] justify-center items-center  `}>Cargando..</span>
      }

      <img
        alt="logo"
        class={ {
          'hidden': !imageLoaded.value,
          'brightness-0': !showImage,
          
        }}
        height={`${size}px`}
        onLoad$={() => { imageLoaded.value = true }}
        src={`${urlBase}${id}.png`}
        width={`${size}px`}
      />

    </div>
  )
}
);

