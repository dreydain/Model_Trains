import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    productListReducer,
} from './reducers/productReducer'
import {userListReducer, userCreateReducer} from './reducers/userReducers'
import { workorderListReducer } from './reducers/workorderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    userList: userListReducer,
    userCreate: userCreateReducer,
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