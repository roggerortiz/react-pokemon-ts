import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Pokemon from './views/Pokemon';
import PokemonList from './views/PokemonList';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route exact path={"/"} component={PokemonList} />
        <Route exact path={"/pokemon/:pokemon"} component={Pokemon} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
