import express from 'express'
import { CountryController } from './country.controller'
import checkAUth from '../../middleware/checkAuth'


const router = express.Router()

router.route('/').get(checkAUth, CountryController.getCountries)

export const CountryRoutes = router
