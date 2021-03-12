import likeActions from '../constants/like';

const initialState = {
    characters: {}
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case likeActions.LIKE_CHARACTER:
            return [ ...state, { 'lambda': 1 } ]  ;

        case likeActions.DISLIKE_CHARACTER:
            return [ ...state, { 'lambda': -1 } ];

        default:
            return state;
    }
};

export default authReducer;
