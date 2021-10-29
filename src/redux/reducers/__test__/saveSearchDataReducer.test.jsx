import {saveSearchReducer, initialState} from '../saveSearchDataReducer'
import {SET_SEARCH} from '../../types/index'

// Test initial State
describe('saveSearchReducer initial state test', () => {
    
    test('should return the initial state', () => {
        expect(saveSearchReducer(undefined, {})).toEqual(initialState)
    })
    
});

// Test Cases 
describe('saveSearchDataReducer cases test', () => {

    test('case ORDER_GNOMES_FOR_AGE', () => {

        const initialState = "Tobus"
        
        expect(saveSearchReducer(undefined, {
            type: SET_SEARCH,
            search: "Tobus"
        })).toEqual( initialState )
    });

});