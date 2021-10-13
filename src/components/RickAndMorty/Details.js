
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Details(props) {
    const { characterId, close } = props;
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((res) => {
                setDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [characterId]);

    return (
        <div>
            {details && (
                <div>
                    <h3>{details.name}</h3>
                    <div className="img-container">
                        <img src={details.image} alt={details.image} />
                        <h6>Created: {details.created}</h6>
                    </div>
                    <p>Status: {details.status}</p>
                    <p>Species: {details.species}</p>
                    <p>Gender: {details.gender}</p>

                    <br />
                </div>
            )}
            <button onClick={close}>Close</button>
        </div>
    );
}