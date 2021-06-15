export const FETCH_FRUITS_SUCCESS = 'FETCH_FRUITS_SUCCESS';
export const FETCH_FRUITS_ERROR = 'FETCH_FRUITS_ERROR';

export const fetchFruitsSuccess = fruits => ({
    type : FETCH_FRUITS_SUCCESS,
    payload: {fruits}
});

export const fetchFruitsError = error => ({
    type: FETCH_FRUITS_ERROR,
    payload: { error }
})