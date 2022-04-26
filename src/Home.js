import React from 'react';
import { Link } from 'react-router-dom';
import RickMortyHome from './components/RickAndMorty/RickMortyHome';
import './App.css';


export default function Home() {
    return (
        <div className='Home'>
            <div className='cover-container'>
                <div className='container'>
                    <Link to={'/RickMorty'}>
                        <div className='image-container'>
                            <div className='Rick-Morty-cover'>
                                <h2>Rick and Morty</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='container'>
                    <Link to='/Pokemon'>
                        <div className='image-container'>
                            <div className='Pokemon-cover'>
                                <h2>Pokemon</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='container'>
                    <Link to='/Starwars'>
                        <div className='image-container'>
                            <div className='Starwars-cover'>
                                <h2>StarWars</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}