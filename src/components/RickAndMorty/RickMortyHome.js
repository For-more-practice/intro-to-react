import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { fetchCharacters } from '../../actions';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
import './RickMortyHome.css';

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

export default function RickMortyHome() {
    const [characters, setCharacters] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

    const handleFetch = () => {
        fetch(URL)
            .then(res => res.json())
            .then(body => {
                setCharacters([...body.results]);
                setPageCount(body.info.pages);
                setIsLoaded(true);
            })
            .catch(error => console.error('Error', error));
    };

    const handlePageChange = (selectedObject) => {
        setCurrentPage(toString(selectedObject.selected));
        handleFetch();
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className='main-container'>
            <h2>Welcome to Rick And Morty World!</h2>

            {isLoaded ? (
                characters.map((ch) => {
                    return (
                        <div className='character'>
                            <CharacterCard character={ch} />
                        </div>
                    );
                })
            ) : (
                <div></div>
            )}
            <div className='paginate-containe'>
                {isLoaded ? (
                    <ReactPaginate
                        pageCount={pageCount}
                        pageRange={2}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName={'ui-container'}
                        previousLinkClassName={'page'}
                        breakClassName={'page'}
                        nextLinkClassName={'page'}
                        pageClassName={'page'}
                        disabledClassName={'disabled'}
                        activeClassName={'active'}
                    />
                ) : (
                    <duv></duv>
                )}
            </div>
        </div>
    );
}

