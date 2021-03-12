import types from '../constants/like';

const like = (id) => {
    return {
        type: types.LIKE_CHARACTER,
        payload: {
            id, 'status': types.LIKED
        }
    };
};

const dislike = (id) => {
    return {
        type: types.DISLIKE_CHARACTER,
        payload: {
            id, status: types.DISLIKED
        }
    };
};

const actions = { like, dislike };

export default actions;
