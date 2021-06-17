export const FETCH_FRUITS_SUCCESS = 'FETCH_FRUITS_SUCCESS';
export const FETCH_FRUITS_ERROR = 'FETCH_FRUITS_ERROR';
export const UPDATE_FRUITS = 'UPDATE_FRUITS'

export const fetchFruitsSuccess = fruits => ({
    type : FETCH_FRUITS_SUCCESS,
    payload: {fruits}
});

export const fetchFruitsError = error => ({
    type: FETCH_FRUITS_ERROR,
    payload: { error }
})

export const updateFruits = fruits => ({
    type: UPDATE_FRUITS,
    payload: {fruits}
})