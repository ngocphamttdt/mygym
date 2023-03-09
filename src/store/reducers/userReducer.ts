import { SET_USER_NAME, SET_USER_EMAIL } from '../constants/userConstants'
import { UserActions } from './../actions/useActions'

export interface State {
  user: {
    name: string
    email: string
  }
}

export const userReducer = (
  state = { name: '', email: '' },
  action: UserActions
) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload }

    case SET_USER_EMAIL:
      return { ...state, email: action.payload }
    default:
      return state
  }
}
