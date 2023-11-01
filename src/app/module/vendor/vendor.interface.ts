import { Model } from 'mongoose'

export type IVendor = {
  name: string
  code: string
}

// Create a new Model type that knows about IUserMethods...
export type VendorModel = Model<IVendor, object, Record<string, never>>
