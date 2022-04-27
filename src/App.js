import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RickMortyHome from './components/RickAndMorty/RickMortyHome';
import Home from './components/Home';
import './App.css';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/RickMorty'>
          <RickMortyHome />
        </Route>
      </Switch>
    </div>
  );
}