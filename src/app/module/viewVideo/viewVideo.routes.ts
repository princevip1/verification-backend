import express from 'express'
import { VideoController } from './viewVideo.controller'


const router = express.Router()

router.route('/:vid').get(VideoController.getVideo)


export const ViewVideoRoutes = router
