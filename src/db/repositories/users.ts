import { IUser } from 'components/models/userInterface'

export const getUser = (): IUser[] => {
  const users = [
    {
      name: 'user1',
      password: 'user1'
    },
    {
      name: 'user2',
      password: 'user2'
    },
    {
      name: 'user3',
      password: 'user3'
    }
  ] as IUser[]

  return users
}
