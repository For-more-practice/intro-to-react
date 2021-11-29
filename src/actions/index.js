import axios from 'axios';

export const FETCH_RICKANDMORTY_START = 'FETCH_RICKANDMORTY_START';
export const FETCH_RICKANDMORTY_SUCCESS = 'ETCH_RICKANDMORTY_SUCCESS';
export const FETCH_RICKANDMORTY_FAIL = 'FETCH_RICKANDMORTY_FAIL';


export const fetchCharacters = () => dispatch => {
    var page = 1
    dispatch({ type: FETCH_RICKANDMORTY_START });
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => dispatch({ type: FETCH_RICKANDMORTY_SUCCESS, payload: res.data.results }))
        .catch(err => dispatch({ type: FETCH_RICKANDMORTY_FAIL, payload: err }));
    page += 1;

    if (page < 43) {
        fetchCharacters(page + 1);
    }

};
