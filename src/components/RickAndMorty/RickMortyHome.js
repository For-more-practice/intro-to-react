import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { fetchCharacters } from '../../actions';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;
  background-color: rgba(255, 255, 255, 0.6);
  .list {
    width: 50%;
    display: flex;
    text-align: center;
  }
  .details {
    width: 30%;
    justify-content: flex-end;
  }
`;
const RickMortyHome = (props) => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    const getCharacters = e => {
        e.preventDefault();
        props.fetchCharacters();
    }

    return (
        <>
            <h2>Welcome to Rick And Morty World!</h2>
            {props.isFetching && <p>Fetching your Characters</p>}
            <StyledContainer>
                <div clasName='list'>
                    {props.characters.map((ch) => (
                        <CharacterCard key={ch.id} character={ch} />
                    ))}
                </div>
            </StyledContainer>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={getCharacters}>Fetch Characters!</button>
        </>
    );
}

const mapStateToProps = (state) => ({
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { fetchCharacters })(RickMortyHome);
