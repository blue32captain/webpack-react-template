import { combineReducers } from 'redux'
import cart from './cart'

const reducer = combineReducers({
  product: cart,
});


export default reducer
