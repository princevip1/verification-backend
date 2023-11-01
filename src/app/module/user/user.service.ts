import { IUser } from './user.interface'
import User from './user.model'

const createUser = async (payload: IUser): Promise<IUser> => {
    const result = await User.create(payload)
    return result
}

const getUser = async (payload: Partial<IUser>): Promise<IUser | null> => {
    const result = await User.findOne(payload)
    return result
}

export const UserService = {
    createUser,
    getUser
}
