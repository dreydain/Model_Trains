import axios from 'axios'
import { 
    WORKORDER_LIST_REQUEST,
    WORKORDER_LIST_SUCCESS,
    WORKORDER_LIST_FAIL,

    WORKORDER_DETAILS_REQUEST,
    WORKORDER_DETAILS_SUCCESS,
    WORKORDER_DETAILS_FAIL,
} from "../constants/workorderConstants"

export const listWorkorders = () => async (dispatch) => {
    try {
        dispatch({type: WORKORDER_LIST_REQUEST})

        const {data} = await axios.get('/api/workorders')

        dispatch({
            type: WORKORDER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: WORKORDER_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }

}

export const getWorkorderDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: WORKORDER_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/workorders/${id}`)

        dispatch({
            type: WORKORDER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: WORKORDER_DETAILS_FAIL,
            payload: error.response && error.reaponse.data.message
            ? error.response.data.message
            : error.message
        })
    }
}