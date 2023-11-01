import { Schema, model } from 'mongoose'
import { IVendor, VendorModel } from './vendor.interface';

const vendorSchema = new Schema<IVendor, VendorModel, Record<string, never>>(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)





const Vendor = model<IVendor, VendorModel>('Vendor', vendorSchema)

export default Vendor
