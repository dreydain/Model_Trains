import axios from 'axios'
import { 
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    // USER_UPDATE_REQUEST,
    // USER_UPDATE_SUCCESS,
    // USER_UPDATE_FAIL,
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

// export const updateUser = (user) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_UPDATE_REQUEST
//         })


//         await axios.put(`/api/users/${user._id}`, user)

//         dispatch({
//             type: USER_UPDATE_SUCCESS
//         })

//     } catch (error) {
//         const message =
//         error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message
//         dispatch({
//             type: USER_UPDATE_FAIL,
//             payload: message,
//         })
//     }
// }