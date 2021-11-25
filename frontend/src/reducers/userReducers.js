import { 
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
} from "../constants/userConstants"

export const userListReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {loading: true, users: []}
        case USER_LIST_SUCCESS:
            return {loading: false, users: action.payload}
        case USER_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const userDetailsReducer = (state = {user: {}}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {loading: true, ...state}
        case USER_DETAILS_SUCCESS:
            return {loading: false, user: action.payload}
        case USER_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        case USER_DETAILS_RESET:
            return { user: {}}
        default:
            return state
    }
}

export const userCreateReducer = (state = { }, action) => {
    switch(action.type) {
        case USER_CREATE_REQUEST:
            return {loading: true}
        case USER_CREATE_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_CREATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const userUpdateReducer = (state = {user: {} }, action) => {
    switch(action.type) {
        case USER_UPDATE_REQUEST:
            return {loading: true}
        case USER_UPDATE_SUCCESS:
            return {loading: false, success: true}
        case USER_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        case USER_UPDATE_RESET:
            return {users: {}}
        default:
            return state
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DELETE_REQUEST:
            return {loading: true}
        case USER_DELETE_SUCCESS:
            return {loading: false, success: true}
        case USER_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}