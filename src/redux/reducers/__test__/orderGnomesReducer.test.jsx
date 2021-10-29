import {orderGnomesReducers, initialState} from '../orderGnomesReducer'
import {
    ORDER_GNOMES_FOR_NAME,
    ORDER_GNOMES_FOR_AGE,
    ORDER_GNOMES_FOR_HAIR
} from '../../types/index'

// Test initial State
describe('orderGnomesReducers initial state test', () => {
    
    test('should return the initial state', () => {
        expect(orderGnomesReducers(undefined, {})).toEqual(initialState)
    })
    
});

// Test Cases 
describe('orderGnomesReducer cases test', () => {

    test('case ORDER_GNOMES_FOR_NAME', () => {
        
        expect(orderGnomesReducers(undefined, {
            type: ORDER_GNOMES_FOR_NAME,
            initialState: "name"
        })).toEqual( initialState )
    });

    test('case ORDER_GNOMES_FOR_AGE', () => {

        const initialState = "age"
        
        expect(orderGnomesReducers(undefined, {
            type: ORDER_GNOMES_FOR_AGE,
            initialState: "age"
        })).toEqual( initialState )
    });

    test('case ORDER_GNOMES_FOR_HAIR', () => {

        const initialState = "weight"
        
        expect(orderGnomesReducers(undefined, {
            type: ORDER_GNOMES_FOR_HAIR,
            initialState: "weight"
        })).toEqual( initialState )
    });
        
});