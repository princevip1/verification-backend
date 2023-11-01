import { Model } from 'mongoose'

export type IUser = {
  name: string
  email: string
  password: string
}

// Create a new Model type that knows about IUserMethods...
export type UserModel = Model<IUser, object, Record<string, never>>
