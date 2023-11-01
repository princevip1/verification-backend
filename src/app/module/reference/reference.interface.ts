import mongoose, { Model } from 'mongoose'

export type IReference = {
  _id?: mongoose.Types.ObjectId
  title: string;
  status: string;
  bank: mongoose.Types.ObjectId
}

// Create a new Model type that knows about IUserMethods...
export type IReferenceModel = Model<IReference, object, Record<string, never>>
