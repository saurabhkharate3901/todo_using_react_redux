import {combineReducers} from 'redux'
import { operationReducers } from "./todoApp/reducer/Operations";

export const rootReducer = combineReducers ({
     operationReducers
     // more reducers can be added here
})