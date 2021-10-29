import { setMaxPageAction, setMinPageAction } from "../paginationActions";
import { SET_MAX_PAGE_NUMBER, SET_MIN_PAGE_NUMBER } from "../../types";

describe('paginationActions type test', () => {
    
    test('setMaxPageAction type test', () => {

        const action = setMaxPageAction()

        expect(action.type).toEqual(SET_MAX_PAGE_NUMBER)
    });

    test('setMinPageAction type test', () => {

        const action = setMinPageAction()

        expect(action.type).toEqual(SET_MIN_PAGE_NUMBER)
    });
    
});