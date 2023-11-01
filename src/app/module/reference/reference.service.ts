import { IReference } from "./reference.interface"
import Reference from "./reference.model"


const getReferences = async (): Promise<IReference[] | null> => {
    const result = await Reference.find({})
    return result
}

const createReference = async (payload: Partial<IReference>): Promise<IReference | null> => {
    const result = await Reference.create(payload)
    return result
}

const updateReference = async (_id: string, payload: Partial<IReference>): Promise<IReference | null> => {
    const result = await Reference.findOneAndUpdate({ _id }, payload, { new: true })
    return result
}

const deleteReference = async (_id: string): Promise<IReference | null> => {
    const result = await Reference.findOneAndDelete({ _id })
    return result
}

const getReference = async (payload: Partial<IReference>): Promise<IReference | null> => {
    const result = await Reference.findOne(payload)
    return result
}


export const ReferenceService = {
    getReferences,
    createReference,
    updateReference,
    deleteReference,
    getReference
}
