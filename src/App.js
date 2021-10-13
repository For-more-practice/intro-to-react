import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import RickAndMortyHome from './components/RickAndMorty/RickMortyHome'
import styled from 'styled-components'
import './App.css';
import { getCharacters } from 'rickmortyapi';
import axios from 'axios';
import Character from './components/RickAndMorty/Character'

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const openDetails = (id) => {
    setCurrentCharacter(id);
  }

  const closeDetails = () => {
    setCurrentCharacter(null);
  }

  useEffect(() => {
    const fetchCharacters = () => {
      axios.get(`https://rickandmortyapi.com/api/character`)
        .then((res) => {
          setCharacters(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCharacters();
  }, [])

  return (
    <>
      <Route path='/'>
        <RickAndMortyHome characters={characters} open={openDetails} />
      </Route>

      <Route path='/rickandmorty/:id'>
        <Character />
      </Route>

    </>
  );
}

