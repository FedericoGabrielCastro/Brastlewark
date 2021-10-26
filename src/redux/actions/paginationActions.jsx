import {
    SET_MAX_PAGE_NUMBER,
    SET_MIN_PAGE_NUMBER
} from '../types/index'

export const setMaxPageAction = (maxPageNumberLimit, minPageNumberLimit) => ({
    type: SET_MAX_PAGE_NUMBER,
    maxPageNumberLimit,
    minPageNumberLimit
})

export const setMinPageAction = (maxPageNumberLimit, minPageNumberLimit) => ({
    type: SET_MIN_PAGE_NUMBER,
    maxPageNumberLimit,
    minPageNumberLimit
})