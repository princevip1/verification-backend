import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CountryService } from './country.service'

const getCountries = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await CountryService.getCountries()
    next()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: " Country List",
        data: result
    })
})



export const CountryController = {
    getCountries,
}
