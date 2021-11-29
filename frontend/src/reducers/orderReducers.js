import { 
    ORDER_ADD_ITEM, 
    ORDER_REMOVE_ITEM, 
    ORDER_RESET,
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