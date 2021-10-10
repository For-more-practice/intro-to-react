import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import axios from 'axios'
import Pokemon from './components/Pokemon/PokemonCharacters'
import RickAndMorty from './components/RickAndMorty/RickAndMortyCharacters'
import StarWars from './components/StarWars'
import styled from 'styled-components'
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [pokemon, setPokemon] = useState([]);
  const [rickAndMorty, setRickAndMorty] = useState([]);
  const [starWars, setStarWars] = useState([]);


  const getPokemon = () => {
    axios
      .get("")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const getRickAndMorty = () => {
    axios
      .get("")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const getStarWars = () => {
    axios
      .get("")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getPokemon();
    getRickAndMorty();
    getStarWars();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Router>
        <div className='selection-container'>
          <Link to='/pokemon-characters'>
            <div className='selection-card'>
              <div className='image-container'>
                <img src='' />
              </div>
              <div className='selection-title'>
                <h3>
                  Pokemon
                </h3>
              </div>
            </div>
          </Link>
          <Link to='rick-and-morty-characters'>
            <div className='selection-card'>
              <div className='image-container'>
                <img src='' />
              </div>
              <div className='selection-title'>
                <h3>
                  Rick and Morty
                </h3>
              </div>
            </div>
          </Link>
          <Link to='/starwars-characters'>
            <div className='selection-card'>
              <div className='image-container'>
                <img src='' />
              </div>
              <div className='selection-title'>
                <h3>
                  Star Wars
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <Switch>
          <Route path='/pokemon-characters'>
            <PokemonCharacters />
          </Route>
          <Route path='/rick-and-morty-characters'>
            <RickAndMorty />
          </Route>
          <Route path='/starwars-characters'>
            <StarWars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
