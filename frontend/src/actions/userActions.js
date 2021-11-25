
import axios from 'axios'
import { 
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
} from "../constants/userConstants"

export const listUsers = () => async (dispatch) => {
    try {
        dispatch({type: USER_LIST_REQUEST})

        const {data} = await axios.get('/api/users')

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }

}

export const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: USER_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/users/${id}`)
        
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })    
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

export const create = (firstName, lastName, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_CREATE_REQUEST
        })

        const {data} = await axios.post(
            '/api/users/new', 
            {firstName, lastName, email, password},
        )

        dispatch({
            type: USER_CREATE_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
        
    }
}

export const updateUser = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })

        const {data} = axios.put(`/api/users/${user.id}/edit`, user)
        

        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: message,
        })
    }
}