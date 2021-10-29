import fetchGnomesReducer, {initialState} from '../fetchGnomesReducer'
import {GET_GNOMES, GET_GNOMES_ERROR} from '../../types/index'

// Test initial State
describe('fetchGnomesReducer initial state test', () => {
    
    test('should return the initial state', () => {
        expect(fetchGnomesReducer(undefined, {})).toEqual(initialState)
    })
    
});