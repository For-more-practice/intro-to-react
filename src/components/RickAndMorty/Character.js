import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import CharacterCard from "./CharacterCard";
import styled from "styled-components";



function Character({ info, open }) {
    return (
        <div className="character">
            <div>
                <h3>{info.name}</h3>
                <div>
                    <img src={info.image} />
                </div>

                <div>
                    <button onCLick={() => open = (info.id)}>See Deatils</button>
                </div>
            </div>
        </div>
    );
}

export default Character;