import {
    ORDER_GNOMES_FOR_NAME,
    ORDER_GNOMES_FOR_AGE,
    ORDER_GNOMES_FOR_HAIR
} from '../types/index'

export const orderGnomesNameAction = () => ({
    type: ORDER_GNOMES_FOR_NAME,
})

export const orderGnomesAgeAction = () => ({
    type: ORDER_GNOMES_FOR_AGE,
})

export const orderGnomesHairAction = () => ({
    type: ORDER_GNOMES_FOR_HAIR,
})