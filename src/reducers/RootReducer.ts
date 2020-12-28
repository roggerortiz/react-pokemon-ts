import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonListReducer";
import pokemonReducer from "./PokemonReducer";

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonList: pokemonListReducer
})

export default rootReducer