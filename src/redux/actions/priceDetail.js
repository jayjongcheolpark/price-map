import { GET_PRICE_DETAIL, CLOSE_PRICE_DETAIL } from '../constants'

export const getPriceDetail = data => ({
  type: GET_PRICE_DETAIL,
  data,
})

export const closePriceDetail = () => ({
  type: CLOSE_PRICE_DETAIL,
})
