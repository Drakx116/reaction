import likeActions from '../constants/like';

const initialState = {
    characters: []
};

const likeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case likeActions.LIKE_CHARACTER:
        case likeActions.DISLIKE_CHARACTER:
            const { id, status } = payload;

            if (id in state.characters && state.characters[id] === status) {
                state.characters.splice(id, 1);
                return state;
            }

            state.characters[id] = status;
            return state;

        default:
            return state;
    }
};

export default likeReducer;
