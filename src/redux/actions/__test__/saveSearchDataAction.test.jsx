import { saveSearchAction } from "../saveSearchDataAction";
import { SET_SEARCH } from "../../types";

describe('saveSearchDataAction type test', () => {
    
    test('saveSearchAction type test', () => {

        const action = saveSearchAction()

        expect(action.type).toEqual(SET_SEARCH)
    });

});