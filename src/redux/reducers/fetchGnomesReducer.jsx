import { GET_GNOMES } from '../types/index'

// Set initial state reducer
const initialState = {
    gnomes: [],
}

const fetchGnomesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_GNOMES:
            return {
                ...state,
                gnomes: action.payload,
            }
        default:
            return state
    }
}

export default fetchGnomesReducer