import express from 'express'
import zodSchemaValidation from '../../middleware/zodValidation'
import { AuthController } from './auth.controller'
import { authZodSchemaValidation } from './auth.validation'
import checkAUth from '../../middleware/checkAuth'

const router = express.Router()

router.route('/login').get().post(zodSchemaValidation(authZodSchemaValidation.loginZodSchema), AuthController.login)
router.route('/check-auth').get(checkAUth, AuthController.checkAuth)

export const AuthRoutes = router
