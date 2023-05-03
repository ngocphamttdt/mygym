import { combineReducers } from 'redux'
import { categoryReducer } from './reducers/categoryReducer'
import { productReducer } from './reducers/productReducer'
import { userReducer } from './reducers/userReducer'
import { authReducer } from './reducers/authReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  products: productReducer,
  auth: authReducer
})
