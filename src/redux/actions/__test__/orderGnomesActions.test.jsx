import {
    orderGnomesNameAction,
    orderGnomesAgeAction,
    orderGnomesHairAction
} from '../orderGnomesActions'

import {
    ORDER_GNOMES_FOR_NAME,
    ORDER_GNOMES_FOR_AGE,
    ORDER_GNOMES_FOR_HAIR
} from '../../types/index'

describe('orderGnomesActions type test', () => {
    
    test('orderGnomesNameAction type test', () => {

        const action = orderGnomesNameAction()

        expect(action.type).toEqual(ORDER_GNOMES_FOR_NAME)
    });

    test('orderGnomesAgeAction type test', () => {

        const action = orderGnomesAgeAction()

        expect(action.type).toEqual(ORDER_GNOMES_FOR_AGE)
    });

    test('orderGnomesHairAction type test', () => {

        const action = orderGnomesHairAction()

        expect(action.type).toEqual(ORDER_GNOMES_FOR_HAIR)
    });
    
});