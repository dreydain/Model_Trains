import axios from 'axios'
import { 
    WORKORDER_LIST_REQUEST,
    WORKORDER_LIST_SUCCESS,
    WORKORDER_LIST_FAIL,

    WORKORDER_DETAILS_REQUEST,
    WORKORDER_DETAILS_SUCCESS,
    WORKORDER_DETAILS_FAIL,

    WORKORDER_CREATE_REQUEST,
    WORKORDER_CREATE_SUCCESS,
    WORKORDER_CREATE_FAIL,

    WORKORDER_UPDATE_REQUEST,
    WORKORDER_UPDATE_SUCCESS,
    WORKORDER_UPDATE_FAIL,
    WORKORDER_DETAILS_RESET,

} from "../constants/workorderConstants"

import {ORDER_RESET} from "../constants/orderConstants"

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

export const createWorkorder = (number, rush, orderDate, dueDate, name, email, phone, orders) => async (dispatch) => {
    try {
        dispatch({
            type: WORKORDER_CREATE_REQUEST
        })

        const {data} = await axios.post(
            '/api/workorders/new', 
            {number, rush, orderDate, dueDate, name, email, phone, orders},
        )

        dispatch({
            type: WORKORDER_CREATE_SUCCESS,
            payload: data
        })

        dispatch({
            type: ORDER_RESET,
            payload: data
        })

        localStorage.setItem('workorderInfo', JSON.stringify(data))
        localStorage.removeItem('orderItems')

    } catch (error) {
        dispatch({
            type: WORKORDER_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
        
    }
}

export const updateWorkorder = (workorder) => async (dispatch) => {
    try {
        dispatch({
            type: WORKORDER_UPDATE_REQUEST
        })

        const {data} = axios.put(`/api/workorders/${workorder.id}`, workorder)
        

        dispatch({
            type: WORKORDER_UPDATE_SUCCESS,
            payload: data
        })

        dispatch({ type: WORKORDER_DETAILS_RESET })

    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        dispatch({
            type: WORKORDER_UPDATE_FAIL,
            payload: message,
        })
    }
}

