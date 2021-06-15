import {FETCH_FRUITS_ERROR, FETCH_FRUITS_SUCCESS} from "../actions/fruits";
import {ADD_USER_INFOS, REMOVE_USER} from "../actions/user";

const initialState = {
    user: {},
    error: null,
};

export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_USER_INFOS : {
            return {
                ...state,
                user: action.payload.infos
            };
        }
        case REMOVE_USER: {
            return {
                ...state,
                user: {}
            };
        }
        default: {
            return state;
        }
    }
}