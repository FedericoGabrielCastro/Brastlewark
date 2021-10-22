import {
    ORDER_GNOMES_FOR_NAME,
    ORDER_GNOMES_FOR_AGE,
    ORDER_GNOMES_FOR_HAIR
} from '../types/index'

const initialState = "name"

export const orderGnomesReducers = (state = initialState, action) => {
    
    switch (action.type) {
        case ORDER_GNOMES_FOR_NAME:
            return "name"
        case ORDER_GNOMES_FOR_AGE:
            return "age"
        case ORDER_GNOMES_FOR_HAIR:
            return "hair"
        default:
            return state
    }
}
