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
    customerUpdateReducer,

} from './reducers/workorderReducers'

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
    customerUpdate: customerUpdateReducer,

})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store