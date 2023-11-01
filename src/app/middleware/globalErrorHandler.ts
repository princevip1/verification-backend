import { ErrorRequestHandler } from 'express'
import { IGenericErrorMessage } from '../../interface/error'
import ApiError from '../../error/apiError'
import handleValidationError from '../../error/handleValidationError'
import { ZodError } from 'zod'
import handleZodError from '../../error/handleZodError'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    let statusCode = 500
    let message = 'Something went wrong'
    let errors: IGenericErrorMessage[] = []

    if (error instanceof ZodError) {
        const simplyfiedError = handleZodError(error)
        statusCode = simplyfiedError.statusCode
        message = simplyfiedError.message
        errors = simplyfiedError.errorMessages
    } else if (error.name === 'ValidationError') {
        const simplyfiedError = handleValidationError(error)
            ; (statusCode = simplyfiedError.statusCode),
                (message = simplyfiedError.message),
                (errors = simplyfiedError.errorMessages)
    } else if (error instanceof ApiError) {
        statusCode = error.statusCode
        message = error.message
        errors = error.message
            ? [{ message: error.message, path: '' }]
            : [{ message: 'Something went wrong', path: '' }]
    } else if (error instanceof Error) {
        message = error.message
        errors = error.message
            ? [{ message: error.message, path: '' }]
            : [{ message: 'Something went wrong', path: '' }]
    }

    res.status(statusCode).json({
        success: false,
        message,
        errors,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    })

    next()
}

export default globalErrorHandler
