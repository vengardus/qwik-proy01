import type { IPokemonListResponse, ISmallPokemon } from '~/interface';

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon'

export const getSmallPokemons= async(offset:number=0, limit:number=10): Promise<ISmallPokemon[]> => {
  const resp = await fetch(`${URL_BASE}?limit=${limit}&offset=${offset}`)
  const data = await resp.json() as IPokemonListResponse

  return data.results.map(pokemon => {
    const parse = pokemon.url.split('/')
    const id = parse.at(-2)!

    return {
      id,
      name: pokemon.name
    }
  })
}