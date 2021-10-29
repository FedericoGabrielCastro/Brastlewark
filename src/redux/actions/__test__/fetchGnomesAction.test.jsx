import {fetchGnomesAction} from '../fetchGnomesAction'
import mockAxios from 'axios'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import { GET_GNOMES, GET_GNOMES_ERROR } from '../../types';

const mockStore = createMockStore([thunk])

describe('axios test', () => {
    
    test('should handle fetchGnomesAction success', async () => {
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({data: [{ id: 1 }]}))

        const store = mockStore()
        await store.dispatch(fetchGnomesAction())

        const actions = store.getActions()
        const expectedActions = [{
            type: GET_GNOMES
        }]
        expect(actions).toEqual(expectedActions)
    });

    test('should handle fetchGnomesAction fail ', async () => {
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({ response: { data: 'error' }}))

            const store = mockStore()
            await store.dispatch(fetchGnomesAction())
            const actions = store.getActions()
            const expectedActions = [{
                type: GET_GNOMES_ERROR
            }]
            expect(actions).toEqual(expectedActions)
    })
});
