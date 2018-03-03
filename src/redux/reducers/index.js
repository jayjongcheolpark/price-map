import { combineReducers } from 'redux'
import priceDetailReducer from './priceDetail'

export default combineReducers({
  priceDetail: priceDetailReducer,
})
