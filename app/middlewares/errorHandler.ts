import { Request, Response, NextFunction} from 'express'
import { AppError } from '../errors'

const errorHandler = (err:Error ,req:Request, res: Response, next: NextFunction) => {

    if(err instanceof AppError){
        res.status(err.httpCode)
        res.send({
            name: err.name,
            description: err.description,
            isOperational: err.isOperational
        })
    }else if(err instanceof SyntaxError){
        res.status(400)
        res.send({
            name: err.name,
            description: err.message
        })
    }else{
        res.status(500)
        res.send()
    }

}

export default errorHandler