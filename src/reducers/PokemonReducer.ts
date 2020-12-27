import {
    PokemonDispatchTypes,
    PokemonInfo,
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS
} from "../actions/PokemonActionTypes"

interface IDefaultState {
    loading: boolean,
    pokemon?: PokemonInfo
}

const defaultState : IDefaultState = {
    loading: false
}

const pokemonReducer = (state : IDefaultState = defaultState, action: PokemonDispatchTypes) : IDefaultState => {
    if (state === undefined)
        return defaultState

    switch (action.type) {
        case POKEMON_LOADING:
            return {
                loading: true
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        case POKEMON_FAIL:
            return {
                loading: false
            }
        default: return state
    }
}

export default pokemonReducer