import {
    PAGE_SELECTED,
    NEXT_PAGE,
    PREV_PAGE
} from '../types/index'

export const pageSelectAction = (currentPage) => ({
    type: PAGE_SELECTED,
    currentPage,
})

export const nextPageAction = (currentPage, initialCurrent, finishCurrent) => ({
    type: NEXT_PAGE,
    currentPage,
    initialCurrent,
    finishCurrent
})

export const prevPageAction = (currentPage, initialCurrent, finishCurrent) => ({
    type: PREV_PAGE,
    currentPage,
    initialCurrent,
    finishCurrent
})
