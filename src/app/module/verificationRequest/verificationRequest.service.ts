import { IVerificationRequest } from "./verificationRequest.interface"
import VerificationRequest from "./verificationRequest.model"



const getVerificationRequests = async (): Promise<IVerificationRequest[] | null> => {
    const result = await VerificationRequest.find({})
    return result
}

const createVerificationRequest = async (payload: Partial<IVerificationRequest>): Promise<IVerificationRequest | null> => {
    const result = await VerificationRequest.create(payload)
    return result
}

const updateVerificationRequest = async (_id: string, payload: Partial<IVerificationRequest>): Promise<IVerificationRequest | null> => {
    const result = await VerificationRequest.findOneAndUpdate({ _id }, payload, { new: true })
    return result
}

const deleteVerificationRequest = async (_id: string): Promise<IVerificationRequest | null> => {
    const result = await VerificationRequest.findOneAndDelete({ _id })
    return result
}

const getVerificationRequestById = async (_id: string): Promise<IVerificationRequest | null> => {
    const result = await VerificationRequest.findOne({ _id })
    return result
}


export const VerificationRequestService = {
    getVerificationRequests,
    createVerificationRequest,
    updateVerificationRequest,
    deleteVerificationRequest,
    getVerificationRequestById
}
