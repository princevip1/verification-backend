import express from 'express'
import checkAUth from '../../middleware/checkAuth'
import { BankController } from './bank.controller'
import zodSchemaValidation from '../../middleware/zodValidation'
import { bankZodSchemaValidation } from './bank.validation'


const router = express.Router()

router.route('/').get(checkAUth, BankController.getBanks).post(checkAUth, zodSchemaValidation(bankZodSchemaValidation.bankZodSchema), BankController.createBank)
router.route('/:id').put(checkAUth, BankController.updateBank).delete(checkAUth, BankController.deleteBank)

export const BankRoutes = router
