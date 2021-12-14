import axios from 'axios'
import {
    ORDER_ADD_ITEM, 
    ORDER_REMOVE_ITEM,

    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL,

    // ORDER_LIST_REQUEST,
    // ORDER_LIST_SUCCESS,
    // ORDER_LIST_FAIL,
} from '../constants/orderConstants'

export const addToOrder = (id, quantity, mold, cast, paint, complete,) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: ORDER_ADD_ITEM,
        payload: {
            product: data._id,
            number: data.number,
            name: data.name,
            brand: data.brand,
            category: data.category,
            price: data.price,
            image: data.image,
            description: data.description,
            stock: data.stock,
            quantity,
            mold,
            cast,
            paint,
            complete
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

export const updateOrder = (order) => async (dispatch) => {
    try {
        dispatch({type: ORDER_UPDATE_REQUEST})

        const {data} = axios.put(`/api/workorders/${order.id}/edit`, order)

        dispatch({
            type: ORDER_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        dispatch({
            type: ORDER_UPDATE_FAIL,
            payload: message
        })
    }
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