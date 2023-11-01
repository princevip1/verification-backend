import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import path from 'path'

const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp).toLocaleDateString()
  const time = new Date(timestamp).toLocaleTimeString()
  return `${date} ${time} [${label}] ${level}: ${message}`
})
const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'Sms Backend' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'success',
        'success-%DATE%.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'Sms Backend' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'error', 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { logger, errorLogger }
