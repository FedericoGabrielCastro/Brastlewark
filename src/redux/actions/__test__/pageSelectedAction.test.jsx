import { 
    pageSelectAction,
    nextPageAction,
    prevPageAction
} from '../pageSelectedAction'

import {
    PAGE_SELECTED,
    NEXT_PAGE,
    PREV_PAGE
} from '../../types/index'


describe('pageSelectedAction type test', () => {
    
    test('pageSelectAction type test', () => {

        const action = pageSelectAction()

        expect(action.type).toEqual(PAGE_SELECTED)
    });

    test('nextPageAction type test', () => {

        const action = nextPageAction()

        expect(action.type).toEqual(NEXT_PAGE)
    });

    test('prevPageAction type test', () => {

        const action = prevPageAction()

        expect(action.type).toEqual(PREV_PAGE)
    });
    
});