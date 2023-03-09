import { SET_USER_NAME, SET_USER_EMAIL } from './../constants/userConstants'

export interface SetUserNameAction {
  type: typeof SET_USER_NAME
  payload: string
}

export interface SetEmailAction {
  type: typeof SET_USER_EMAIL
  payload: string
}

export type UserActions = SetUserNameAction | SetEmailAction
