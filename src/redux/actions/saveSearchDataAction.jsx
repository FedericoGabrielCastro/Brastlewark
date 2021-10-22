import {SET_SEARCH} from '../types/index'

export const saveSearchAction = (search) => ({
    type: SET_SEARCH,
    search: search
})
