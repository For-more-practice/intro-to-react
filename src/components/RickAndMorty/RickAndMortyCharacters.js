import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { RickAndMorty_BASE_URL, RickAndMorty_API_KEY } from '..';
import RickAndMortyCharacterCard from './RickAndMortyCharacterCard';



export default function RickAndMortyCharacters({ info, action }) {
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
            axios.get(`${RickAndMorty_BASE_URL}${RickAndMorty_API_KEY}`)
                .then(res => { setCharacters(res.data) })
                .catch(err => { console.log(err) })
        };

        fetchCharacter()
    }, [characters]);
    return (
        <div className='characters'>
            <div>{info.name}</div>
            <button onClick={() => action(info.id)}>See details</button>
        </div>
    );
};
