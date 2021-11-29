import {
    FETCH_RICKANDMORTY_START,
    FETCH_RICKANDMORTY_FAIL,
    FETCH_RICKANDMORTY_SUCCESS
} from "../actions";

const initialSTate = {
    characters: [],
    error: '',
    isFetching: false
};

function reducer(state = initialSTate, action) {
    switch (action.type) {
        case FETCH_RICKANDMORTY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_RICKANDMORTY_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_RICKANDMORTY_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;