import { Schema, model } from 'mongoose'
import { IReference, IReferenceModel } from './reference.interface'

const referenceSchema = new Schema<IReference, IReferenceModel, Record<string, never>>(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
    },
    bank: {
      type: Schema.Types.ObjectId,
      ref: 'Bank',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)





const Reference = model<IReference, IReferenceModel>('Reference', referenceSchema)

export default Reference
