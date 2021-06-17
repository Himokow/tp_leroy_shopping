import {FETCH_FRUITS_ERROR, FETCH_FRUITS_SUCCESS, UPDATE_FRUITS} from "../actions/fruits";

const initialState = {
    fruits: [],
    error: null,
};

export default function fruitsReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_FRUITS_SUCCESS : {
            const {fruits} = action.payload;
            if(state.fruits.length > 0){
                return {
                    ...state
                }
            }
            fruits.forEach(f => f.stock = Math.floor(Math.random() * 10));
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

        case UPDATE_FRUITS: {
            return {
                ...state,
                fruits: action.payload.fruits
            }
        }
        default: {
            return state;
        }
    }
}