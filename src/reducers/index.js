import {combineReducers} from 'redux'
import ReducerUsers from './ReducerUsers'
import ReducerSelectedUser from './ReducerSelectedUser'

const rootReducer = combineReducers({
    myUsers: ReducerUsers,
    userSelected: ReducerSelectedUser
})

export default rootReducer;