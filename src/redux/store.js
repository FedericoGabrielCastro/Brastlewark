import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger' // to see redux on the console
import {composeWithDevTools} from "redux-devtools-extension";

import fetchGnomesReducer from './reducers/fetchGnomesReducer'
import {saveSearchReducer} from './reducers/saveSearchDataReducer'
import {currentSlideReducers} from './reducers/currentPageSlideReducer'
import {orderGnomesReducers} from './reducers/orderGnomesReducer'
import {paginationReducer} from './reducers/paginationReducers'
import {pageSelectReducer} from './reducers/pageSelectedReducer'

const rootReducer = combineReducers ({
    fetchGnomesReducer: fetchGnomesReducer, // serching the data from api
    saveSearchReducer: saveSearchReducer, // save the data(fetchGnomesReducer) in value
    currentSlideReducers: currentSlideReducers, // Use to change the page (slice)
    orderGnomesReducers: orderGnomesReducers, // In options, use to search gnomes for order
    paginationReducer: paginationReducer, // Set info for the pagination component
    pageSelectReducer: pageSelectReducer // Need to see in what page is the user
})

// Create store to use in App.jsx inside the Provider
const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(logger,thunk)),
)

export default store