import { 
    WORKORDER_LIST_REQUEST,
    WORKORDER_LIST_SUCCESS,
    WORKORDER_LIST_FAIL,
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