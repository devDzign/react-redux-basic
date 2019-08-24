import * as actionTypes from '../actions/actionTypes';

const initialState = null;

const reducerSelectedUser = (state= initialState , action) => {

    switch (action.type) {
        case actionTypes.USER_SELECTED:
            return action.user
        default:
            return state;
    }
};

export default reducerSelectedUser;