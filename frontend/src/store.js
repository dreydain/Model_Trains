import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productUpdateReducer,
} from './reducers/productReducer'
import {userListReducer, userCreateReducer, userDetailsReducer, userUpdateReducer, userDeleteReducer} from './reducers/userReducers'
import { workorderListReducer } from './reducers/workorderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
    userCreate: userCreateReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    workorderList: workorderListReducer,

})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store