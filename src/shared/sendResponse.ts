import { Response } from "express";

type IApiResponse<T> = {
    statusCode: number;
    message?: string;
    success: boolean;
    data?: T | null
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {

    const responseData: IApiResponse<T> = {
        success: true,
        message: data.message,
        data: data.data,
        statusCode: data.statusCode
    }

    res.status(data.statusCode).json(responseData)

}


export default sendResponse