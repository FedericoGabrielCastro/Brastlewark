import axios from 'axios'
import {
  GET_GNOMES,
  GET_GNOMES_ERROR
} from '../types/index'

// Api gnomes
const API_GNOMES = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`

export const fetchGnomesAction = () => async (dispatch) => {

    const data = await axios.get(API_GNOMES)
    try {
      dispatch({
        type: GET_GNOMES,
        payload: data.data.Brastlewark, 
      })
    } catch (error) {
      dispatch({
        type: GET_GNOMES_ERROR,
        payload: data.error
      })
    }
}
