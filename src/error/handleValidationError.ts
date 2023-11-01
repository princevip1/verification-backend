import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interface/error'
import { IGenericErrorResponse } from '../interface/common'

const handleValidationError = (
    error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
        (err: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
            return {
                message: err.message,
                path: err.path,
            }
        },
    )

    return {
        statusCode: 400,
        message: 'Validation error',
        errorMessages: errors,
    }
}

export default handleValidationError
