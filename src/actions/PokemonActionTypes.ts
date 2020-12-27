export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_FAIL = 'POKEMON_FAIL';

export type PokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type PokemonSprites =  {
    front_default: string
}

export type PokemonStat = {
    base_stat: string,
    stat: {
        name: string
    }
}

export type PokemonInfo = {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[]
}

export interface PokemonLoading {
    type: typeof POKEMON_LOADING
}

export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: PokemonInfo
}

export interface PokemonFail {
    type: typeof POKEMON_FAIL
}

export type PokemonDispatchTypes = PokemonLoading | PokemonSuccess | PokemonFail