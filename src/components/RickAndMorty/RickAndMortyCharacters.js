import React from 'react'
import { Link } from 'react-router-dom'
import RickAndMortyCharactersCard from './RickAndMortyCharacterCard'


export default function RickAndMortyCharacters() {
    return (
        <div className='RickAndMorty'>
            <h1 className='Header'>Rick and Morty Character List</h1>
            {
                rickAndMortyCharacters.map((ch) => {
                    <Link key={rickAndMortyCharacters.id} to={`/rick-and-morty-characters/${rickAndMortyCharacters.id}`}>
                        <RickAndMortyCharactersCard characters={rickAndMortyCharacters} />
                    </Link>
                })
            }
        </div>
    )
}