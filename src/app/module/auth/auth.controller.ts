import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { UserService } from '../user/user.service'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const result = await UserService.getUser({ email })

    if (!result) {
        sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: "Invalid Credentials",
        })
        return
    }

    const isPasswordMatch = await bcrypt.compare(password, result.password)
    if (!isPasswordMatch) {
        sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: "Invalid Credentials",
        })
        return
    }

    jwt.sign({ email: result.email }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' }, (err, token) => {
        if (err) {
            sendResponse(res, {
                statusCode: httpStatus.BAD_REQUEST,
                success: false,
                message: "Invalid Credentials",
            })
            return
        }
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Login Success",
            data: {
                token
            }
        })
    }
    )
}
)


const checkAuth = catchAsync(async (req: Request, res: Response) => {
    const { email } = req.user as { email: string }
    const result = await UserService.getUser({ email })
    if (!result) {
        sendResponse(res, {
            statusCode: httpStatus.UNAUTHORIZED,
            success: false,
            message: "Unauthorized",
        })
        return
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Authorized",
        data: {
            user: result
        }
    })
}
)



export const AuthController = {
    login,
    checkAuth
}

