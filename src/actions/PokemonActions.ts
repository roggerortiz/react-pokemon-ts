import axios from "axios";
import { Dispatch } from "redux";
import { RootState } from "../reducers/RootReducer";
import {
    TPokemonDispatchTypes,
    POKEMON_FAIL,
    POKEMON_LIST_FAIL,
    POKEMON_LIST_LOADING,
    POKEMON_LIST_SUCCESS,
    POKEMON_LOADING,
    POKEMON_SUCCESS
} from "./PokemonActionTypes";

export const GetPokemonList = (page: number) => async (dispatch: Dispatch<TPokemonDispatchTypes>, getState: () => RootState)=> {
    try{
        console.log("STATE: ", getState());
        dispatch({ type: POKEMON_LIST_LOADING })
        const perPage = 15
        const offset = (page * 15) - perPage
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)
        dispatch({ type: POKEMON_LIST_SUCCESS, payload: res.data })
    } catch (e) {
        console.log(e)
        dispatch({ type: POKEMON_LIST_FAIL })
    }
}

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<TPokemonDispatchTypes>) => {
    try{
        dispatch({ type: POKEMON_LOADING })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({ type: POKEMON_SUCCESS, payload: res.data })
    } catch (e) {
        dispatch({ type: POKEMON_FAIL })
    }
}