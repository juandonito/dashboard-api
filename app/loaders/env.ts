import * as dotenv from 'dotenv'

dotenv.config()

interface env {
    PORT: number,
    DB_URI: string,
    JWT_SECRET: string,
}

export default <env>{
    PORT: process.env.PORT ?? 0,
    DB_URI: process.env.DB_URI ?? '',
    JWT_SECRET: process.env.JWT_SECRET
}