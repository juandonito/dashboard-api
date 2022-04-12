import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError, HttpCode } from '../errors'

import env from '../loaders/env'

const isProtectedHandler = (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = <{ _id: string }>jwt.verify(req.cookies.at, env.JWT_SECRET)
        res.locals.user = user
        next()
    } catch (err) {
        throw new AppError('Unauthorized', HttpCode.UNAUTHORIZED, 'User should be authenticated to access this endpoint', true)
    }

}

export default isProtectedHandler