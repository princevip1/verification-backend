import mongoose, { Model } from 'mongoose'

export type IVerificationRequest = {
  amount: string;
  backSideOfId: string;
  companyAddress: string;
  companyName: string;
  depositSlip: string;
  email: string;
  frontSideOfId: string;
  idType: string;
  name: string;
  paymentPerpose: string;
  phoneNumber: string;
  selfieWithId: string;
  senderBankName: string;
  senderBusinessType: string;
  videoAuthorization: string;
  reference: mongoose.Types.ObjectId;

}

// Create a new Model type that knows about IUserMethods...
export type IVerificationRequestModel = Model<IVerificationRequest, object, Record<string, never>>
