import React from 'react'
import styled from "styled-components";
import './RickMortyHome.css';

const StyledList = styled.div`
  width: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0 4px 0;
  text-align:center;
  justify-items: center;
  button {
    border-radius: 4px;
  }
`;

const CharacterCard = (props) => {
    return (
        <div className="character">
            <StyledList>
                <h3>{props.character.name}</h3>
                <div className='image-container'>
                    <img src={props.character.image} />
                </div>
            </StyledList>
        </div>
    )
}
export default CharacterCard;