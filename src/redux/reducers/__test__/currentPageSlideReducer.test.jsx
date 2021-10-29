import {currentSlideReducers, initialState} from '../currentPageSlideReducer'
import {
    CURRENT_NUMBER_SLIDE,
    NEXT_PAGE, 
    PREV_PAGE
} from '../../types/index'

// Test initial State
describe('currentPageSlideReducer initial state test', () => {
    
    test('should return the initial state', () => {
        expect(currentSlideReducers(undefined, {})).toEqual(initialState)
    })
    
});

// Test Cases 
describe('currentPageSlideReducer cases test', () => {

    test('case CURRENT_NUMBER_SLIDE', () => {
        
        expect(currentSlideReducers(undefined, {
            type: CURRENT_NUMBER_SLIDE,
            initialCurrent: initialState.initialCurrent,
            finishCurrent: initialState.finishCurrent,
        })).toEqual(
            {
                initialCurrent: 0,
                finishCurrent: 30,
            },
        )
    });

    test('case NEXT_PAGE', () => {
        
        expect(currentSlideReducers(undefined, {
            type: NEXT_PAGE,
            initialCurrent: initialState.initialCurrent + 30,
            finishCurrent: initialState.finishCurrent + 30,
        })).toEqual(
            {
                initialCurrent: 30,
                finishCurrent: 60,
            },
        )
    });

    test('case PREV_PAGE', () => {
        
        expect(currentSlideReducers(undefined, {
            type: PREV_PAGE,
            initialCurrent: initialState.initialCurrent - 30 ,
            finishCurrent: initialState.finishCurrent - 30,
        })).toEqual(
            {
                initialCurrent: - 30,
                finishCurrent: 0,
            },
        )
    });
        
});