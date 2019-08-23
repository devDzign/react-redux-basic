import {combineReducers} from 'redux'
import ReducerUsers from './ReducerUsers'

const rootReducer =  combineReducers({
    users: ReducerUsers
})

export default rootReducer;