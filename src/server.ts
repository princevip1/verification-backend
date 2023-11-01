import mongoose from 'mongoose'
import { Server } from 'http'

import app from './app'
import { config } from './config'
import { errorLogger, logger } from './shared/logger'

let server: Server

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

const bootStrap = async () => {
  try {
    await mongoose.connect(
      config.mongoUri as string,
      config.mongoOptions as mongoose.ConnectOptions,
    )
    logger.info('Connected to MongoDB')
    server = app.listen(config.port, () => {
      logger.info(`Server is running on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(error)
    process.exit(1)
  }

  process.on('unhandledRejection', (reason, promise) => {
    if (server) {
      server.close(() => {
        errorLogger.error(
          `Unhandled Rejection at: ${promise} reason: ${reason}`,
        )
        process.exit(1)
      })
    } else {
      errorLogger.error(`Unhandled Rejection at: ${promise} reason: ${reason}`)
      process.exit(1)
    }
  })
}

bootStrap()
