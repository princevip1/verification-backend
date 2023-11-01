import { IVendor } from "./vendor.interface"
import Vendor from "./vendor.model"




const getVendors = async (): Promise<IVendor[] | null> => {
    const result = await Vendor.find({})
    return result
}

const createVendor = async (payload: Partial<IVendor>): Promise<IVendor | null> => {
    const result = await Vendor.create(payload)
    return result
}

const updateVendor = async (_id: string, payload: Partial<IVendor>): Promise<IVendor | null> => {
    const result = await Vendor.findOneAndUpdate({ _id }, payload, { new: true })
    return result
}

const deleteVendor = async (_id: string): Promise<IVendor | null> => {
    const result = await Vendor.findOneAndDelete({ _id })
    return result
}


export const VendorService = {
    getVendors,
    createVendor,
    updateVendor,
    deleteVendor
}
