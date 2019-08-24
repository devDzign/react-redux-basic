import * as actionType from './actionTypes'

export const userSelected = (user) => {
    return {
        type: actionType.USER_SELECTED,
        user: user
    }
}

export const userAll = () => {
    return {
        type: actionType.USER_ALL,
    }
}

