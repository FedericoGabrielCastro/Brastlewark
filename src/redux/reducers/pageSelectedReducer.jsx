import {
    PAGE_SELECTED,
    NEXT_PAGE,
    PREV_PAGE
} from '../types/index'

const initialState = {
    currentPage: 1
}

export const pageSelectReducer = (state = initialState, action) => {
    switch (action.type) {

    case PAGE_SELECTED:
        return { 
            currentPage: action.currentPage, 
            
        }
    case NEXT_PAGE:
        return { 
            ...state,
            currentPage: state.currentPage + 1, 
            
        }
    case PREV_PAGE:
        return { 
            ...state,
            currentPage: state.currentPage - 1, 
            
        }
    default:
        return state
    }
}
