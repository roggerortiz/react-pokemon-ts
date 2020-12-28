export const POKEMON_LIST_LOADING = 'POKEMON_LIST_LOADING';
export const POKEMON_LIST_SUCCESS = 'POKEMON_LIST_SUCCESS';
export const POKEMON_LIST_FAIL = 'POKEMON_LIST_FAIL';
export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_FAIL = 'POKEMON_FAIL';

export type TPokemonList = {
    name: string,
    url: string
}

export type TPokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type TPokemonSprites =  {
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string
}

export type TPokemonStat = {
    base_stat: string,
    stat: {
        name: string
    }
}

export type TPokemonInfo = {
    abilities: TPokemonAbility[],
    sprites: TPokemonSprites,
    stats: TPokemonStat[]
}

export interface IPokemonListLoading {
    type: typeof POKEMON_LIST_LOADING
}

export interface IPokemonListSuccess {
    type: typeof POKEMON_LIST_SUCCESS,
    payload: {
        results: TPokemonList[],
        count: number
    }
}

export interface IPokemonListFail {
    type: typeof POKEMON_LIST_FAIL
}

export interface IPokemonLoading {
    type: typeof POKEMON_LOADING
}

export interface IPokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: TPokemonInfo
}

export interface IPokemonFail {
    type: typeof POKEMON_FAIL
}

export type TPokemonDispatchTypes =
    IPokemonListLoading | IPokemonListSuccess | IPokemonListFail |
    IPokemonLoading | IPokemonSuccess | IPokemonFail