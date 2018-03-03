import { GET_PRICE_DETAIL, CLOSE_PRICE_DETAIL } from '../constants'
import { data as arrayData } from '../../components/data'

const priceDetailReducer = (state = { isOpen: false, data: [] }, action) => {
  switch (action.type) {
    case GET_PRICE_DETAIL: {
      const data = arrayData.filter(el => el.address1 === action.data.address1)
      return { isOpen: true, data: [...data] }
    }
    case CLOSE_PRICE_DETAIL: {
      return { isOpen: false, data: [] }
    }
    default:
      return state
  }
}

export default priceDetailReducer
