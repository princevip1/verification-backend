import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { VerificationRequestService } from './verificationRequest.service'
import { ReferenceService } from '../reference/reference.service'
import { BankService } from '../bank/bank.service'

const getVerificationRequests = catchAsync(async (req: Request, res: Response) => {
    const result = await VerificationRequestService.getVerificationRequests()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Verification Request List",
        data: result
    })
})

const createVerificationRequest = catchAsync(async (req: Request, res: Response) => {
    const data = {
        ...req.body,
        videoAuthorization: req?.file?.path
    }
    await VerificationRequestService.createVerificationRequest(data)

    await ReferenceService.updateReference(req.body.reference, { status: "completed" })


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Verification Request Created",
    })
})

const updateVerificationRequest = catchAsync(async (req: Request, res: Response) => {
    const result = await VerificationRequestService.updateVerificationRequest
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Verification Request Updated",
        data: result
    })
}
)


const deleteVerificationRequest = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body, req.params.id)
    const result = await VerificationRequestService.deleteVerificationRequest(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Verification Request Deleted",
        data: result
    })
})

const getVerificationRequestById = catchAsync(async (req: Request, res: Response) => {
    const result = await VerificationRequestService.getVerificationRequestById(req.params.id)

    const reference = await ReferenceService.getReference({ _id: result?.reference })


    const bank = await BankService.getBank({ _id: reference?.bank })
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Verification Request",
        data: {
            result,
            bank
        }
    })
})


export const VerificationRequestController = {
    getVerificationRequests,
    createVerificationRequest,
    updateVerificationRequest,
    deleteVerificationRequest,
    getVerificationRequestById
}
