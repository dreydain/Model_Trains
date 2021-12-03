import axios from 'axios'
import {
    ORDER_ADD_ITEM, 
    ORDER_REMOVE_ITEM,

    // ORDER_LIST_REQUEST,
    // ORDER_LIST_SUCCESS,
    // ORDER_LIST_FAIL,
} from '../constants/orderConstants'

export const addToOrder = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: ORDER_ADD_ITEM,
        payload: {
            product: data._id,
            
            quantity
        }
    })

    localStorage.setItem('orderItems', JSON.stringify(getState().order.orderItems))
}

export const removeFromOrder = (id) => (dispatch, getState) => {
    dispatch({
        type: ORDER_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('orderItems', JSON.stringify(getState().order.orderItems))
}

// export const listOrders = () => async (dispatch) => {
//     try {
//         dispatch({type: ORDER_LIST_REQUEST})

//         const {data} = await axios.get('/api/orders')

//         dispatch({
//             type: ORDER_LIST_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: ORDER_LIST_FAIL,
//             payload: error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message
//         })
//     }

// }