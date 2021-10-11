import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import axios from 'axios'
import Pokemon from './components/Pokemon/PokemonCharacters'
import Characters from './components/RickAndMorty/Characters'
import StarWars from './components/StarWars/StarWarsCharacters'
import styled from 'styled-components'
import './App.css';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className='selection-container'>
        <Link to='/pokemon'>Pokemon</Link>
        <Link to='Rick-and-Morty'>Rick and Morty</Link>
        <Link to='Starwars'>StarWars</Link>
        <Switch>
          <Route path='/pokemon' component={Pokemon} />
          <Route path='/Rick-and-Morty' component={Characters} />
          <Route path='/Starwars' component={StarWars} />
        </Switch>
      </div>
    </div>
  );
}

