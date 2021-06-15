export const ADD_USER_INFOS = 'ADD_USER_INFOS';
export const REMOVE_USER = 'REMOVE_USER';

export const addUserInfos = infos => ({
    type: ADD_USER_INFOS,
    payload: {infos}
});

export const removeUser = () => ({
    type: REMOVE_USER
})