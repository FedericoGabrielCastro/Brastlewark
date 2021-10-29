import {paginationReducer, initialState} from '../paginationReducers'
import {SET_MIN_PAGE_NUMBER, SET_MAX_PAGE_NUMBER} from '../../types/index'

// Test initial State
describe('paginationReducer initial state test', () => {
    
    test('should return the initial state', () => {
        expect(paginationReducer(undefined, {})).toEqual(initialState)
    })
    
});

// Test Cases 
describe('paginationReducer cases test', () => {

    test('case SET_MAX_PAGE_NUMBER', () => {
        
        
        expect(paginationReducer(undefined, {
            type: SET_MAX_PAGE_NUMBER,
            maxPageNumberLimit: initialState.maxPageNumberLimit - initialState.pageNumberLimit,
            minPageNumberLimit: initialState.minPageNumberLimit - initialState.pageNumberLimit
        })).toEqual(
            {
                maxPageNumberLimit: 10,
                minPageNumberLimit: 5,
                pageNumberLimit: 5,
                itemsPerPage: 30
            },
        )
    });

    test('case SET_MIN_PAGE_NUMBER', () => {
        
        expect(paginationReducer(undefined, {
            type: SET_MIN_PAGE_NUMBER,
            maxPageNumberLimit: initialState.maxPageNumberLimit - initialState.pageNumberLimit,
            minPageNumberLimit: initialState.minPageNumberLimit - initialState.pageNumberLimit
        })).toEqual(
            {
                maxPageNumberLimit: 0,
                minPageNumberLimit: -5,
                pageNumberLimit: 5,
                itemsPerPage: 30
            },
        )
    });
});