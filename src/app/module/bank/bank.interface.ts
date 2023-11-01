import mongoose, { Model } from 'mongoose'

export type IBank = {
  _id?: mongoose.Types.ObjectId
  country: mongoose.Types.ObjectId
  vendor: mongoose.Types.ObjectId
  bankInformetion: string
  maxPaymentPerTransaction: number
  perposeOfTransaction: string
}

// Create a new Model type that knows about IUserMethods...
export type BankModel = Model<IBank, object, Record<string, never>>
