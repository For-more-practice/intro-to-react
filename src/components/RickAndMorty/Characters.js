
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RickAndMorty_BASE_URL, RickAndMorty_API_KEY } from '../index'
import RickAndMortyCharacters from './RickAndMortyCharacters'
import RickAndMortyCharacterCard from './RickAndMortyCharacterCard'

const Characters = (props) => {
    const [characters, setCharacters] = useState([])
    const [currentCharacter, setCurrentCharacter] = useState(null)

    const openDetails = id => {
        setCurrentCharacter(id);
    }

    const closeDetails = () => {
        setCurrentCharacter(null);
    }

    useEffect(() => {
        const fetchCharacter = () => {
            axios.get('https://rickandmortyapi.com/api/character')
                .then(res => { setCharacters(res.data.results) })
                .catch(err => { console.log(err) })
        };

        fetchCharacter()
    }, []);

    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            {
                characters.map((ch) => (
                    <RickAndMortyCharacters key={ch.id} info={ch} actiion={openDetails} />
                ))
            }
            {
                currentCharacter && (
                    <RickAndMortyCharacterCard characterId={currentCharacter} close={closeDetails} />
                )
            }
        </div>
    );
}

export default Characters;