import { ICountry } from "./country.interface"
import Country from "./country.model"



const getCountries = async (): Promise<ICountry[] | null> => {
    const result = await Country.find({})
    return result
}

export const CountryService = {
    getCountries
}
