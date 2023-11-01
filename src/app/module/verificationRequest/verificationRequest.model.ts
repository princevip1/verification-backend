import { Schema, model } from 'mongoose'
import { IVerificationRequest, IVerificationRequestModel } from './verificationRequest.interface'

const verificationRequestSchema = new Schema<IVerificationRequest, IVerificationRequestModel, Record<string, never>>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    backSideOfId: {
      type: String,
      required: true,
    },
    companyAddress: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    depositSlip: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    frontSideOfId: {
      type: String,
      required: true,
    },
    idType: {
      type: String,
      required: true,
    },
    paymentPerpose: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    selfieWithId: {
      type: String,
      required: true,
    },
    senderBankName: {
      type: String,
      required: true,
    },
    senderBusinessType: {
      type: String,
      required: true,
    },
    videoAuthorization: {
      type: String,
      required: true,
    },
    reference: {
      type: Schema.Types.ObjectId,
      ref: 'Reference',
      required: true,
    },
    

  },
  {
    timestamps: true,
  },
)





const VerificationRequest = model<IVerificationRequest, IVerificationRequestModel>('VerificationRequest', verificationRequestSchema)

export default VerificationRequest
