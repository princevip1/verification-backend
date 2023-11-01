import { NextFunction, Request, Response } from "express"
import catchAsync from "../../shared/catchAsync"
import sendResponse from "../../shared/sendResponse"
import httpStatus from "http-status"
import jwt from "jsonwebtoken"
import { UserService } from "../module/user/user.service"

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        interface Request {
            user?: unknown
        }
    }
}

const checkAUth = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        sendResponse(res, {
            statusCode: httpStatus.UNAUTHORIZED,
            success: false,
            message: "Unauthorized",
        })
        return
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY as string, async (err, decoded) => {
        if (err) {
            sendResponse(res, {
                statusCode: httpStatus.UNAUTHORIZED,
                success: false,
                message: "Unauthorized",
            })
            return
        }
        const { email } = decoded as { email: string }
        const user = await UserService.getUser({ email })
        if (!user) {
            sendResponse(res, {
                statusCode: httpStatus.UNAUTHORIZED,
                success: false,
                message: "Unauthorized",
            })
            return
        }
        req.user = user
        next()
    }
    )
}
)

export default checkAUth