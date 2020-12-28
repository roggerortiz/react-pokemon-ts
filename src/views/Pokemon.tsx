import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/PokemonActions';
import { TPokemonAbility, TPokemonStat } from '../actions/PokemonActionTypes';
import { RootStore } from '../store';
import _ from "lodash";

const Pokemon = (props: any) => {
    const dispatch = useDispatch()
    const pokemonName = props.match.params.pokemon
    const pokemonState = useSelector((state: RootStore) => state.pokemon)
    const showData = () => {
        if(pokemonState.loading)
            return <p>Loading...</p>

        if(pokemonState.errorMsg !== "")
            return <p>{pokemonState.errorMsg}</p>

        if(!_.isEmpty(pokemonState.pokemon) && pokemonState.pokemon) {
            const pokemonData = pokemonState.pokemon

            return (
                <div className={"pokemon-wrapper"}>
                    <div className={"item"}>
                        <h1>Sprites</h1>
                        <img src={pokemonData.sprites.front_default} alt=""/>
                        <img src={pokemonData.sprites.back_default} alt=""/>
                        <img src={pokemonData.sprites.front_shiny} alt=""/>
                        <img src={pokemonData.sprites.back_shiny} alt=""/>
                    </div>
                    <div className={"item"}>
                        <h1>Stats</h1>
                        {pokemonData.stats.map((el: TPokemonStat, index: number) => {
                            return <p key={`stat-${index}`}>{el.stat.name}: {el.base_stat}</p>
                        })}
                    </div>
                    <div className={"item"}>
                        <h1>Abilities</h1>
                        {pokemonData.abilities.map((ability: TPokemonAbility, index: number) => {
                            return <p key={`ability-${index}`}>{ability.ability.name}</p>
                        })}
                    </div>
                </div>
            )
        }

        return <p>unable to get pokemon</p>
    }

    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={"pokemon"}>
            <h1>{pokemonName}</h1>
            {showData()}
        </div>
    );
}

export default Pokemon;
