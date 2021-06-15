import {FETCH_FRUITS_ERROR, FETCH_FRUITS_SUCCESS} from "../actions/fruits";

const initialState = {
    fruits: [],
    error: null,
};

export default function fruitsReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_FRUITS_SUCCESS : {
            return {
                ...state,
                fruits: action.payload.fruits
            };
        }
        case FETCH_FRUITS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}