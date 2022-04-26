import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import RickMortyHome from './components/RickAndMorty/RickMortyHome';
import './App.css';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <div className='cover-container'>
        <div className='container'>
          <Link to='/RickMorty'>
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
        <Switch>
          <Route path='/RickMorty'>
            <RickMortyHome />
          </Route>
        </Switch>
      </div>
    </div>
  );
}