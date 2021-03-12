import types from '../constants/like';

const like = (character) => {
    return {
        type: types.LIKE_CHARACTER,
        payload: {
            character
        }
    };
};

const dislike = (character) => {
    return {
        type: types.DISLIKE_CHARACTER,
        payload: {
            character
        }
    };
};

const actions = { like, dislike };

export default actions;
