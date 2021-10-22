import {CURRENT_NUMBER} from '../types/index'

const initialState = {
    initialCurrent: 0,
    finishCurrent: 30,
}

export const currentSlideReducers = (state = initialState, action) => {
    switch (action.type) {

    case CURRENT_NUMBER:
        return { 
            initialCurrent: action.initialCurrent ,
            finishCurrent: action.finishCurrent
        }
    default:
        return state
    }
}
