import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { RickAndMorty_BASE_URL, RickAndMorty_API_KEY } from '../index';

export default function RickAndMortyCharacterCard(props) {
    const { characterId, close } = props.characters;
    const [details, setDetails] = useState(null);

    return (
        <div className="container">
            <h2>Details:</h2>
            {details && (
                <>
                    <div className="img-container">
                        <img src={details.image} alt={details.image} />
                    </div>
                    <p>Name: {details.name}</p>
                    <p>Status: {details.status}</p>
                    <p>Species: {details.species}</p>
                    <p>Gender: {details.gender}</p>
                    <ul>
                        {details.episode.map((ch) => (
                            <li key={ch.id}>{ch.episode}</li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={close}>Close</button>
        </div>
    );
}