import { FETCH_JOKE_HAPPY, FETCH_JOKE_START } from "../actions/jokeAction";

const initialState = {
    joke: 'Initial test joke',
};

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKE_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_JOKE_HAPPY:
            return {
                ...state,
                joke: action.payload,
            }
        default:
            return state;
    }
}