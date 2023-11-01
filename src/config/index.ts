import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.join(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
  ),
})

export const config = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,
  mongoUri: process.env.MONGO_URI,
  mongoOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}
