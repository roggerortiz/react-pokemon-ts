import {
    TPokemonDispatchTypes,
    TPokemonInfo,
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS
} from "../actions/PokemonActionTypes"

export interface IPokemonState {
    loading: boolean,
    pokemon?: TPokemonInfo,
    errorMsg: string
}

const defaultState : IPokemonState = {
    loading: false,
    errorMsg: ""
}

const pokemonReducer = (state : IPokemonState = defaultState, action: TPokemonDispatchTypes) : IPokemonState => {
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