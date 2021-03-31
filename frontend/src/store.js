import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducers } from './reducers/cartReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducers
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
  (localStorage.getItem('cartItems')) : []

const intialState = {
  cart: { cartItems: 'hello' }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store