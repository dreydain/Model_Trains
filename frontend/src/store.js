import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productUpdateReducer,
    productCreateReducer,
} from './reducers/productReducer'
import {
    userListReducer, 
    userCreateReducer, 
    userDetailsReducer, 
    userUpdateReducer, 
    userDeleteReducer
} from './reducers/userReducers'
import { 
    workorderListReducer, 
    workorderDetailsReducer,
    workorderCreateReducer,
    workorderUpdateReducer,

} from './reducers/workorderReducers'

import {
    orderReducer,
    //orderListReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    productCreate: productCreateReducer,

    userList: userListReducer,
    userDetails: userDetailsReducer,
    userCreate: userCreateReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    
    workorderList: workorderListReducer,
    workorderDetails: workorderDetailsReducer,
    workorderCreate: workorderCreateReducer,
    workorderUpdate: workorderUpdateReducer,

    order: orderReducer,
    //orderList: orderListReducer,

})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store