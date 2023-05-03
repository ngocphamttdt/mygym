import { IUser } from 'components/models/userInterface'
import { AuthActions } from 'store/actions/authActions'
import { USER_SIGNIN, USER_SIGNOUT } from 'store/constants/authConstants'

export const authReducer = (state: { data: IUser }, action: AuthActions) => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        data: action.payload
      }

    case USER_SIGNOUT:
      return {
        ...state,
        data: action.payload
      }

    default:
      return { ...state }
  }
}
