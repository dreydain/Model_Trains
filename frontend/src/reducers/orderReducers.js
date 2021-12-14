import { 
    ORDER_ADD_ITEM, 
    ORDER_REMOVE_ITEM, 
    ORDER_RESET,

    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL,

    // ORDER_LIST_REQUEST,
    // ORDER_LIST_SUCCESS,
    // ORDER_LIST_FAIL,
} from "../constants/orderConstants"

export const orderReducer = (state = {orderItems: []}, action) => {
    switch(action.type) {
        case ORDER_ADD_ITEM:
            const item = action.payload

            const existItem = state.orderItems.find((x) => x.product === item.product)

            if(existItem) {
                return {
                    ...state,
                    orderItems: state.orderItems.map((x) => 
                        x.product === existItem.product 
                        ? item
                        : x
                    )
                }
            } else {
                return {
                    ...state,
                    orderItems: [...state.orderItems, item]
                }
            }

            case ORDER_REMOVE_ITEM:
                return {
                    ...state,
                    orderItems: state.orderItems.filter(x => x.product !== action.payload)
                }

            case ORDER_RESET:
                return {
                    ...state, orderItems: []
                }
            default:
                return state
    }
}

export const orderUpdateReducer = (state = {order: {}}, action) => {
    switch(action.type) {
        case ORDER_UPDATE_REQUEST: 
            return {loading: true}
        case ORDER_UPDATE_SUCCESS:
            return {loading: false, success: true}
        case ORDER_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}



// export const orderListReducer = (state = {orders: []}, action) => {
//     switch (action.type) {
//         case ORDER_LIST_REQUEST:
//             return {loading: true, orders: []}
//         case ORDER_LIST_SUCCESS:
//             return {loading: false, orders: action.payload}
//         case ORDER_LIST_FAIL:
//             return {loading: false, error: action.payload}
//         default:
//             return state
//     }
// }