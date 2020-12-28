import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../actions/PokemonActions";
import { TPokemonList } from '../actions/PokemonActionTypes';
import { RootStore } from "../store";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import _ from "lodash";

const PokemonList = (props: any) => {
    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState("")
    const pokemonListState = useSelector((state: RootStore) => state.pokemonList)
    const fetchData = (page: number = 1) => dispatch(GetPokemonList(page))
    const showData = () => {
        if(pokemonListState.loading)
            return <p>Loading...</p>

        if(pokemonListState.errorMsg !== "")
            return <p>{pokemonListState.errorMsg}</p>

        if(!_.isEmpty(pokemonListState.data))
            return (
                <div className={"list-wrapper"}>
                    {pokemonListState.data.map((el: TPokemonList, index: number) => {
                        return (
                            <div key={`pokemon-${index}`} className={"pokemon-item"}>
                                <p>{el.name}</p>
                                <Link to={`/pokemon/${el.name}`}>View</Link>
                            </div>
                        )
                    })}
                </div>
            )

        return <p>unable to get data</p>
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
    const handleSubmit = () => props.history.push(`/pokemon/${pokemonName}`)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className={"search-wrapper"}>
                <p>Search: </p>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleSubmit}>Search</button>
            </div>
            {showData()}
            {!_.isEmpty(pokemonListState.data) && (
                <ReactPaginate
                    pageCount={Math.ceil(pokemonListState.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    containerClassName={"pagination"}
                    onPageChange={(data: any) => fetchData(data.selected + 1)}
                />
            )}
        </div>
    );
}

export default PokemonList;
