import { 
    WORKORDER_LIST_REQUEST,
    WORKORDER_LIST_SUCCESS,
    WORKORDER_LIST_FAIL,

    WORKORDER_DETAILS_REQUEST,
    WORKORDER_DETAILS_SUCCESS,
    WORKORDER_DETAILS_FAIL,
    WORKORDER_DETAILS_RESET,

    WORKORDER_CREATE_REQUEST,
    WORKORDER_CREATE_SUCCESS,
    WORKORDER_CREATE_FAIL,
    WORKORDER_CREATE_RESET,
} from "../constants/workorderConstants"

export const workorderListReducer = (state = {workorders: []}, action) => {
    switch (action.type) {
        case WORKORDER_LIST_REQUEST:
            return {loading: true, workorders: []}
        case WORKORDER_LIST_SUCCESS:
            return {loading: false, workorders: action.payload}
        case WORKORDER_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const workorderDetailsReducer = (state = {workorder: {orders: []}}, action) => {
    switch(action.type) {
        case WORKORDER_DETAILS_REQUEST:
            return {loading: true, ...state}
        case WORKORDER_DETAILS_SUCCESS:
            return {loading: false, workorder: action.payload}
        case WORKORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        case WORKORDER_DETAILS_RESET:
            return {workorder: {}}
        default:
            return state
    }
}

export const workorderCreateReducer = ( state = { }, action) => {
    switch(action.type) {
        case WORKORDER_CREATE_REQUEST:
            return {loading: true}
        case WORKORDER_CREATE_SUCCESS:
            return {
                loading: false,
                workorder: action.payload,
            }
        case WORKORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}