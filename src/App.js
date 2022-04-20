
import React from 'react';
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
        <div className='Rick-Morty-cover'>
          <h2>Rick And Morty</h2>
          <button>Learn More</button>
        </div>
      </div>
      <div className='cover-container'>
        <div className='Starwars-cover'>
          <h2>Starwars</h2>
          <button>Learn More</button>
        </div>
      </div>
      <div className='cover-container'>
        <div className='Pokemon-cover'>
          <h2>Pokemon</h2>
          <button>Learn More</button>
        </div>
      </div>

    </div>
  );
}