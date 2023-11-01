import express from 'express'
import checkAUth from '../../middleware/checkAuth'
import { ReferenceController } from './reference.controller'


const router = express.Router()

router.route('/').get(checkAUth, ReferenceController.getReferences).post(checkAUth, ReferenceController.createReference)
router.route('/:id').put(checkAUth, ReferenceController.updateReference).delete(checkAUth, ReferenceController.deleteReference)

router.route('/check-reference/').post(ReferenceController.checkReference)

export const ReferenceRoutes = router
