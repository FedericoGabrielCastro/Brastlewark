import { 
    GET_GNOMES,
    GET_GNOMES_ERROR,
} from '../types/index'

// Set initial state reducer
const initialState = {
    gnomes: [],
    error: null,
    loading: true
}

const fetchGnomesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_GNOMES:
            return {
                ...state,
                loading: false,
                gnomes: action.payload,

            }
        case GET_GNOMES_ERROR:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}

export default fetchGnomesReducer