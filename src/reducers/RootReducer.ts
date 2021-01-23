import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonListReducer";
import pokemonReducer, { IPokemonState } from "./PokemonReducer";

export interface RootState {
    pokemon: IPokemonState;
}

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonList: pokemonListReducer
})

export default rootReducer