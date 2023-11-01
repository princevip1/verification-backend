import { ZodError } from "zod";

const handleZodError = (error: ZodError) => {
    const errors = error.errors.map((err) => {
        return {
            message: err.message,
            path: err.path.join('.'),
        };
    });
    return {
        statusCode: 400,
        message: 'Validation error',
        errorMessages: errors,
    };
}


export default handleZodError