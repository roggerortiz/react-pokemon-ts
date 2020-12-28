import {
    TPokemonDispatchTypes,
    TPokemonInfo,
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS
} from "../actions/PokemonActionTypes"

interface IDefaultState {
    loading: boolean,
    pokemon?: TPokemonInfo,
    errorMsg: string
}

const defaultState : IDefaultState = {
    loading: false,
    errorMsg: ""
}

const pokemonReducer = (state : IDefaultState = defaultState, action: TPokemonDispatchTypes) : IDefaultState => {
    if (state === undefined)
        return defaultState

    switch (action.type) {
        case POKEMON_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemon: action.payload,
                errorMsg: ""
            }
        case POKEMON_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get pokemon"
            }
        default: return state
    }
}

export default pokemonReducer