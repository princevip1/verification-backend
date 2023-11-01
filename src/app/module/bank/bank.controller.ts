import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { BankService } from './bank.service'

const getBanks = catchAsync(async (req: Request, res: Response) => {
    const result = await BankService.getBanks()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor List",
        data: result
    })
})

const createBank = catchAsync(async (req: Request, res: Response) => {
    const result = await BankService.createBank(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor Created",
        data: result
    })
})

const updateBank = catchAsync(async (req: Request, res: Response) => {
    const result = await BankService.updateBank(req.params.id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor Updated",
        data: result
    })
}
)


const deleteBank = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body, req.params.id)
    const result = await BankService.deleteBank(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Vendor Deleted",
        data: result
    })
})


export const BankController = {
    getBanks,
    createBank,
    updateBank,
    deleteBank
}
