import axios from 'axios'
import {
    ORDER_ADD_ITEM, 
    ORDER_REMOVE_ITEM,
} from '../constants/orderConstants'

export const addToOrder = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: ORDER_ADD_ITEM,
        payload: {
            product: data._id,
            qty
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