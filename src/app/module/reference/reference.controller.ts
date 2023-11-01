import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ReferenceService } from './reference.service'
import { BankService } from '../bank/bank.service'

const getReferences = catchAsync(async (req: Request, res: Response) => {
    const result = await ReferenceService.getReferences()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reference List",
        data: result
    })
})

const createReference = catchAsync(async (req: Request, res: Response) => {
    const result = await ReferenceService.createReference(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reference Created",
        data: result
    })
})

const updateReference = catchAsync(async (req: Request, res: Response) => {
    const result = await ReferenceService.updateReference(req.params.id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reference Updated",
        data: result
    })
}
)


const deleteReference = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body, req.params.id)
    const result = await ReferenceService.deleteReference(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reference Deleted",
        data: result
    })
})

const checkReference = catchAsync(async (req: Request, res: Response) => {
    const data = {
        _id: req.body.reference,
        bank: req.body.bank,
    }
    const result = await ReferenceService.getReference(data)
    if (!result) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Reference Not Found",
        })
    }


    const bank = await BankService.getBank({ _id: req.body.bank })
    if (!bank) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Bank Not Found",
        })
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reference List",
        data: {
            bank,
            reference: result
        }
    })
}
)

export const ReferenceController = {
    getReferences,
    createReference,
    updateReference,
    deleteReference,
    checkReference
}
