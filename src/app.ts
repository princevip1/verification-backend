import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { Routes } from './routes'
import httpStatus from 'http-status'
import path from 'path'


const app: Application = express()

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

// middlewares
app.use(cors(corsOptions))
app.use(express.json({
    limit: '500mb'
}))
app.use(express.urlencoded({
    extended: false,
    limit: '500mb',
    parameterLimit: 50000,
}))


// routes
app.use('/api/v1', Routes)

app.use('/api/v1/photo/:pid', (req: Request, res: Response) => {
    const pid = req.params.pid
    res.sendFile(path.join(process.cwd(), 'public', 'image', pid))
})



// test route
app.get('/', (req, res) => {
    res.send('SMS API SERVER IS RUNNING')
})

// error handler
app.use(globalErrorHandler)

// handle not found 
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Not Found",
        errors: [{
            path: req.originalUrl,
            message: "Api Not Found"
        }]
    })
    next()
})

export default app
