import {
    SET_MAX_PAGE_NUMBER,
    SET_MIN_PAGE_NUMBER
} from '../types/index'

const initialState = {
    pageNumberLimit: 5,
    itemsPerPage: 30,
    maxPageNumberLimit: 5,
    minPageNumberLimit: 0
}

export const paginationReducer = (state = initialState, action) => {
    switch (action.type) {

    case SET_MAX_PAGE_NUMBER:
        return {
            ...state,
            maxPageNumberLimit: state.maxPageNumberLimit + state.pageNumberLimit,
            minPageNumberLimit: state.minPageNumberLimit + state.pageNumberLimit
        }
    case SET_MIN_PAGE_NUMBER:
        return {
            ...state,
            maxPageNumberLimit: state.maxPageNumberLimit - state.pageNumberLimit,
            minPageNumberLimit: state.minPageNumberLimit - state.pageNumberLimit
        }


    default:
        return state
    }
}
