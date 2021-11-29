import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0 4px 0;
  button {
    border-radius: 4px;
  }
`;

function Character({ info, open }) {
    const params = useParams();
    const { path, url } = useRouteMatch();

    const character = info.find(ch => ch.id === Number(params.id))
    return (
        <div className="character">
            <StyledList>
                <h3>{info.name}</h3>
                <div>
                    <button onClick={() => open(info.id)}>See details</button>
                </div>
            </StyledList>
        </div>
    );
}

export default Character;