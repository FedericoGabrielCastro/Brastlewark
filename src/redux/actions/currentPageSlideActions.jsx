import { CURRENT_NUMBER_SLIDE } from '../types/index'

export const currentAction = ( finishCurrent, initialCurrent) => ({
    type: CURRENT_NUMBER_SLIDE,
    initialCurrent,
    finishCurrent
})