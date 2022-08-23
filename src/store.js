import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './reducer/productReducer'

const reducers = combineReducers({
  productReducer:productListReducer
})

const middleware = [thunk]


const store = createStore(reducers,applyMiddleware(...middleware))

export default store 