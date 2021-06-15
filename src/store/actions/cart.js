export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const RESET_CART = 'RESET_CART';

export const addToCart = product => ({
    type : ADD_TO_CART,
    payload: {product}
});

export const removeToCart = product => ({
    type : REMOVE_TO_CART,
    payload: {product}
})

export const updateCart = product => ({
    type: UPDATE_CART,
    payload: {product}
})

export const resetCart = () => ({
    type: RESET_CART,
})