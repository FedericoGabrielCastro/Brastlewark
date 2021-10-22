import {CURRENT_NUMBER} from '../types/index'

export const currentSlideAction = (initialCurrent, finishCurrent) => ({
    type: CURRENT_NUMBER,
    initialCurrent,
    finishCurrent
})
