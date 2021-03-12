import types from '../constants/like';

const addToken = (token) => {
    return {
        type: types.LIKE_CHARACTER,
        payload: {
            token
        }
    };
};

const removeToken = () => {
    return {
        type: types.DISLIKE_CHARACTER
    };
};

const actions = {
    addToken,
    removeToken
};

export default actions;
