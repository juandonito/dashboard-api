import { Request, Response, NextFunction} from 'express'
import { AppError } from '../errors'

const errorHandler = (err:AppError ,req:Request, res: Response, next: NextFunction) => {

    res.status(err.httpCode)
    res.send({
        name: err.name,
        description: err.description,
        isOperational: err.isOperational
    })

}

export default errorHandler