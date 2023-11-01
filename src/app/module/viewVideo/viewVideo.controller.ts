import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import path from 'path'

const getVideo = catchAsync(async (req: Request, res: Response) => {
    const vid = req.params.vid
    res.sendFile(path.join(process.cwd(), 'public', 'video', vid))
})


export const VideoController = {
    getVideo,
}

