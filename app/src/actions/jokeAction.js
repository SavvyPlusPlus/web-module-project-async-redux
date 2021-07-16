import axios from "axios";
export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_HAPPY = 'FETCH_JOKE_HAPPY';
export const FETCH_JOKE_SAD = 'FETCH_JOKE_SAD';

export const fetchJoke = (dispatch) => {
    // Hit the api (axios)
    dispatch({ type: FETCH_JOKE_START }); // loading = true, display spinner
    axios.get("https://official-joke-api.appspot.com/random_joke")

        // Then, if it's happy, save the response to state.JOKEReducer.JOKE
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_JOKE_HAPPY, payload: res.data });
        })

        // If it's sad, catch the error message and save it to state.JOKEReducer.error
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_JOKE_SAD, payload: err });
        })
}