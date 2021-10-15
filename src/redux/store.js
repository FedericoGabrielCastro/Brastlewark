import {createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger' // to see redux on the console
import {composeWithDevTools} from "redux-devtools-extension";

import fetchGnomesReducer from './reducers/fetchGnomesReducer'

const rootReducer = combineReducers ({
    fetchGnomesReducer: fetchGnomesReducer,
})

const middleware = [thunk]

// Create store to use in App.jsx inside the Provider
const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, ...middleware)),
)

export default store