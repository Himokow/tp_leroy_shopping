import {FETCH_FRUITS_ERROR, FETCH_FRUITS_SUCCESS} from "../actions/fruits";
import {ADD_ORDER} from "../actions/order";

const initialState = {
    orders: [],
    error: null,
};

export default function fruitsReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_ORDER : {
            const orders = [...state.orders];
            orders.push(action.payload.order);
            return {
                ...state,
                orders: orders
            };
        }
        default: {
            return state;
        }
    }
}