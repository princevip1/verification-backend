import { Schema, model } from 'mongoose'
import { BankModel, IBank } from './bank.interface'

const bankSchema = new Schema<IBank, BankModel, Record<string, never>>(
  {
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: 'Vendor',
      required: true,
    },
    bankInformetion: {
      type: String,
      required: true,
    },
    maxPaymentPerTransaction: {
      type: Number,
      required: true,
    },
    perposeOfTransaction: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)





const Bank = model<IBank, BankModel>('Bank', bankSchema)

export default Bank
