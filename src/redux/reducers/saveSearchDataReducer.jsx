import {SET_SEARCH} from '../types/index'

export const initialState = ""

export const saveSearchReducer = (state = initialState, action) => {
    switch (action.type) {

    case SET_SEARCH:
        return action.search
    default:
        return state
    }
}
