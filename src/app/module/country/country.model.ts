import { Schema, model } from 'mongoose'
import { CountryModel, ICountry } from './country.interface';

const countrySchema = new Schema<ICountry, CountryModel, Record<string, never>>(
  {
    country: {
      type: String,
      required: true,
    },
    isoCode: {
      type: String,
      required: true,
    },
    countryCode: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)





const Country = model<ICountry, CountryModel>('Country', countrySchema)

export default Country
