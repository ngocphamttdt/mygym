import { IUser } from 'components/models/userInterface'
import { USER_SIGNIN, USER_SIGNOUT } from 'store/constants/authConstants'

export interface userSigin {
  type: typeof USER_SIGNIN
  payload: IUser
}

export interface userSignout {
  type: typeof USER_SIGNOUT
  payload: IUser
}

export type AuthActions = userSigin | userSignout
