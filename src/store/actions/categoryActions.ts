import {
  SET_CATEGORY_ID,
  SET_CATELOG_NAME
} from '../constants/categoryConstants'

export interface SetCategoryId {
  type: typeof SET_CATEGORY_ID
  payload: string
}

export interface SetCategoryName {
  type: typeof SET_CATELOG_NAME
  payload: string
}

export type CategoryActions = SetCategoryId | SetCategoryName
