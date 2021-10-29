import { currentAction } from '../currentPageSlideActions'
import { CURRENT_NUMBER_SLIDE } from '../../types/index'

describe('CurrentAction test', () => {
    
    test('currentAction type test', () => {

        const action = currentAction("")

        expect(action.type).toEqual(CURRENT_NUMBER_SLIDE)
    });
    
});
