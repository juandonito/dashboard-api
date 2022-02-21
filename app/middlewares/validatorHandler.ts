import { Request, Response, NextFunction } from 'express'
import { Schema } from 'joi'
import { AppError, HttpCode } from '../errors'

const validatorHandler = ( schema: Schema, type: 'body' ) => {
    return (req: Request, res: Response, next: NextFunction ) => {

        const content = req[type]

        const result = schema.validate(content)

        if (result.error) {
            throw new AppError(
                'Validation error',
                HttpCode.BAD_REQUEST,
                result.error.message,
                true
            )
        }else{
            next()
        }

    }
}

export default validatorHandler