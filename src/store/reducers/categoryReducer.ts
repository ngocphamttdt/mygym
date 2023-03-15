import { IObject } from 'components/models/interfaceModels'
import { CategoryActions } from '../actions/categoryActions'
import {
  SET_CATEGORY_ID,
  SET_CATELOG_NAME
} from '../constants/categoryConstants'

export const categoryReducer = (state: IObject[], action: CategoryActions) => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        data: action.payload
      }

    case SET_CATELOG_NAME:
      return { ...state, name: action.payload }
    default:
      return { ...state }
  }
}
