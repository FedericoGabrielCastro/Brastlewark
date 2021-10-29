import {
    CURRENT_NUMBER_SLIDE,
    NEXT_PAGE, 
    PREV_PAGE
} from '../types/index'

export const initialState = {
    initialCurrent: 0,
    finishCurrent: 30,
}

export const currentSlideReducers = (state = initialState, action) => {
    switch (action.type) {

    case CURRENT_NUMBER_SLIDE:
        return { 
            initialCurrent: state.initialCurrent ,
            finishCurrent: state.finishCurrent,
        }
    case NEXT_PAGE:
        return { 
            ...state,
            initialCurrent: state.initialCurrent + 30 ,
            finishCurrent: state.finishCurrent + 30,   
        }
    case PREV_PAGE:
        return { 
            ...state,
            initialCurrent: state.initialCurrent - 30,
            finishCurrent: state.finishCurrent - 30,   
        }        
    default:
        return state
    }
}
