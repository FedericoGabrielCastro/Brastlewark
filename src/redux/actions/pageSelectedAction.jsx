import {
    PAGE_SELECTED,
    NEXT_PAGE,
    PREV_PAGE
} from '../types/index'

export const pageSelectAction = (currentPage) => ({
    type: PAGE_SELECTED,
    currentPage,
})

export const nextPageAction = (currentPage) => ({
    type: NEXT_PAGE,
    currentPage,
})

export const prevPageAction = (currentPage) => ({
    type: PREV_PAGE,
    currentPage,
})
