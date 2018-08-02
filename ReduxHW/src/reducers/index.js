import { combineReducers } from 'redux'
import doMathReducer from './doMathReducer'

export default combineReducers({
    result: doMathReducer
})