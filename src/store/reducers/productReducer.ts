import { IProduct } from 'components/models/productInterface'
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS,
  UPDATE_PRODUCT
} from '../constants/productConstants'
import { ProductActions } from './../actions/productActions'

export const productReducer = (
  state: { data: IProduct[] },
  action: ProductActions
) => {
  console.log('prodState', state);

  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        data: action.payload
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        data: [
          ...state.data.filter((x) => x.id !== action.payload.id),
          action.payload
        ]
      }
    case ADD_PRODUCT:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        data: [...state.data.filter((x) => x.id !== action.payload)]
      }

    default:
      return { ...state }
  }
}
