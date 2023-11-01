import { Model } from 'mongoose'

export type ICountry = {
  country: string
  isoCode: string
  countryCode: number
}

// Create a new Model type that knows about IUserMethods...
export type CountryModel = Model<ICountry, object, Record<string, never>>
