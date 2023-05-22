import { component$ } from "@builder.io/qwik";

interface Props {
  id: number,
  frontSide: boolean
  size?: number,
}

export const PokemonImage = component$(({ id, size = 200, frontSide = true }: Props) => {
  const urlBase = (frontSide)
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'

  return (
    <img
      src={`${urlBase}${id}.png`}
      alt="logo"
      width={`${size}px`}
      height={`${size}px`}
    />
  )
}
);