import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger' // to see redux on the console
import {composeWithDevTools} from "redux-devtools-extension";

import fetchGnomesReducer from './reducers/fetchGnomesReducer'
import {saveSearchReducer} from './reducers/saveSearchDataReducer'
import {currentSlideReducers} from './reducers/currentPageSlideReducer'
import {orderGnomesReducers} from './reducers/orderGnomesReducer'

const rootReducer = combineReducers ({
    fetchGnomesReducer: fetchGnomesReducer,
    saveSearchReducer: saveSearchReducer,
    currentSlideReducers: currentSlideReducers,
    orderGnomesReducers: orderGnomesReducers
})

// Create store to use in App.jsx inside the Provider
const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(logger,thunk)),
)

export default store