import { IBank } from "./bank.interface"
import Bank from "./bank.model"





const getBanks = async (): Promise<IBank[] | null> => {
    const result = await Bank.find({}).populate('country').populate('vendor')
    return result
}

const createBank = async (payload: Partial<IBank>): Promise<IBank | null> => {
    const result = await Bank.create(payload)
    return result
}

const updateBank = async (_id: string, payload: Partial<IBank>): Promise<IBank | null> => {
    const result = await Bank.findOneAndUpdate({ _id }, payload, { new: true })
    return result
}

const deleteBank = async (_id: string): Promise<IBank | null> => {
    const result = await Bank.findOneAndDelete({ _id })
    return result
}

const getBank = async (payload: Partial<IBank>): Promise<IBank | null> => {
    const result = await Bank.findOne(payload)
    return result
}


export const BankService = {
    getBanks,
    createBank,
    updateBank,
    deleteBank,
    getBank
}
