import express from 'express'
import checkAUth from '../../middleware/checkAuth'
import { VerificationRequestController } from './verificationRequest.controller'
import { videoUpload } from '../../middleware/uploadVideo'


const router = express.Router()

router.route('/').get(checkAUth, VerificationRequestController.getVerificationRequests).post(videoUpload, VerificationRequestController.createVerificationRequest)
router.route('/:id').put(checkAUth, VerificationRequestController.updateVerificationRequest).delete(checkAUth, VerificationRequestController.deleteVerificationRequest).get(checkAUth, VerificationRequestController.getVerificationRequestById)

export const VerificationRequestRoutes = router
