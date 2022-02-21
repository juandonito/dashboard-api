import express, { Application, Request, Response, NextFunction } from 'express'

import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { errorHandler } from './middlewares'

import { UserRouter } from './components/users'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('Server running')
})

app.use('/user', UserRouter)

app.use(errorHandler)

export default app