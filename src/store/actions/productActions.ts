import { IProduct } from 'components/models/productInterface'
import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../constants/productConstants'

interface SetProducts {
  type: typeof SET_PRODUCTS
  payload: IProduct[]
}

interface updateProduct {
  type: typeof UPDATE_PRODUCT
  payload: IProduct
}

interface addProduct {
  type: typeof ADD_PRODUCT
  payload: IProduct
}

interface deleteProduct {
  type: typeof DELETE_PRODUCT
  payload: string
}

export type ProductActions =
  | SetProducts
  | updateProduct
  | addProduct
  | deleteProduct
