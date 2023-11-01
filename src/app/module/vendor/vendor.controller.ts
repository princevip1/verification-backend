import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { VendorService } from './vendor.service'

const getVendors = catchAsync(async (req: Request, res: Response) => {
    const result = await VendorService.getVendors()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor List",
        data: result
    })
})

const createVendor = catchAsync(async (req: Request, res: Response) => {
    const result = await VendorService.createVendor(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor Created",
        data: result
    })
})

const updateVendor = catchAsync(async (req: Request, res: Response) => {
    const result = await VendorService.updateVendor(req.params.id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor Updated",
        data: result
    })
}
)


const deleteVendor = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body, req.params.id)
    const result = await VendorService.deleteVendor(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor Deleted",
        data: result
    })
})


export const VendorController = {
    getVendors,
    createVendor,
    updateVendor,
    deleteVendor
}
