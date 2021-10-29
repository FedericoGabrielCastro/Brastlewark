import {pageSelectReducer, initialState} from '../pageSelectedReducer'
import {
    PAGE_SELECTED,
    NEXT_PAGE,
    PREV_PAGE
} from '../../types/index'

// Test initial State
describe('pageSelectReducer initial state test', () => {
    
    test('should return the initial state', () => {
        expect(pageSelectReducer(undefined, {})).toEqual(initialState)
    })
    
});

// Test Cases 
describe('pageSelectedReducer case test', () => {

    test('case PAGE_SELECTED', () => {
        
        expect(pageSelectReducer(undefined, {
            type: PAGE_SELECTED,
            currentPage: initialState.currentPage,
        })).toEqual(
            {
                currentPage: 1,
            }
        )
    });

    test('case NEXT_PAGE', () => {
        
        expect(pageSelectReducer(undefined, {
            type: NEXT_PAGE,
            currentPage: initialState.currentPage + 1 
        })).toEqual(
            {
                currentPage: 2
            }
        )
    });

    test('case PREV_PAGE', () => {
        
        expect(pageSelectReducer(undefined, {
            type: PREV_PAGE,
            currentPage: initialState.currentPage - 1 
        })).toEqual(
            {
                currentPage: 0
            }
        )
    });
        
});