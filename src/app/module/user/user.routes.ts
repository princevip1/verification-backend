import express from 'express'
import { UserController } from './user.controller'
import zodSchemaValidation from '../../middleware/zodValidation'
import { userZodSchemaValidation } from './user.validation'

const router = express.Router()

router.route('/').get().post(zodSchemaValidation(userZodSchemaValidation.userZodSchema), UserController.createUser)

export const UserRoutes = router
