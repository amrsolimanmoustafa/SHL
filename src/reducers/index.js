import {combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import makeOrderReducer from './makeOrderReducer'
export default combineReducers({
    posts :postReducer,
    auth:authReducer,
    makeOrder:makeOrderReducer
})
