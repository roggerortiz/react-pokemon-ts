import {
    TPokemonDispatchTypes,
    TPokemonList,
    POKEMON_LIST_FAIL,
    POKEMON_LIST_LOADING,
    POKEMON_LIST_SUCCESS,
} from "../actions/PokemonActionTypes"

interface IDefaultState {
    loading: boolean,
    data: TPokemonList[],
    count: number,
    errorMsg: string
}

const defaultState : IDefaultState = {
    loading: false,
    data: [],
    count: 0,
    errorMsg: ""
}

const pokemonListReducer = (state : IDefaultState = defaultState, action: TPokemonDispatchTypes) : IDefaultState => {
    if (state === undefined)
        return defaultState

    switch (action.type) {
        case POKEMON_LIST_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case POKEMON_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                count: action.payload.count,
                errorMsg: ""
            }
        case POKEMON_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get pokemon list"
            }
        default: return state
    }
}

export default pokemonListReducer