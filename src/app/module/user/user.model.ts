import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser, UserModel, Record<string, never>>(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
  }
  next()
})



const User = model<IUser, UserModel>('User', userSchema)

export default User
