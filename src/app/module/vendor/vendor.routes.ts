import express from 'express'
import checkAUth from '../../middleware/checkAuth'
import { VendorController } from './vendor.controller'


const router = express.Router()

router.route('/').get(checkAUth, VendorController.getVendors).post(checkAUth, VendorController.createVendor)
router.route('/:id').put(checkAUth, VendorController.updateVendor).delete(checkAUth, VendorController.deleteVendor)

export const VendorRoutes = router
