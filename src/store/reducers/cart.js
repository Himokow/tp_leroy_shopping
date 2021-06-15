import {ADD_TO_CART, REMOVE_TO_CART, RESET_CART, UPDATE_CART} from "../actions/cart";

const initialState = {
    cart: [],
    error:  null
};

export default function cartReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART : {
            const cart = [...state.cart];
            cart.push(action.payload.product);
            return {
                ...state,
                cart: cart
            };
        }
        case REMOVE_TO_CART: {
            const productToRemove = action.payload.product;
            let cart = [...state.cart];
            console.log(cart.findIndex(c => c.id === productToRemove.id), cart);
            const index = cart.findIndex(c => c.id === productToRemove.id);
            cart.splice(index,1)
            return {
                ...state,
                cart: cart
            };
        }
        case UPDATE_CART: {
            const updatedProduct = action.payload.product;
            const cart = [...state.cart];
            cart.splice(cart.findIndex(c => c.id === updatedProduct.id),1, updatedProduct);
            return {
                ...state,
                cart: cart
            }
        }
        case RESET_CART : {
            return {
                ...state,
                cart: []
            }
        }
        default: {
            return state;
        }
    }
}