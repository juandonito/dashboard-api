import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { UserService } from '../components/users'
import { AppError, CommonError, HttpCode } from '../errors'

import env from '../loaders/env'

const isProtectedHandler = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = <{ _id: string }>jwt.verify(req.cookies.at, env.JWT_SECRET)
        const user = await UserService.findById(token._id)

        if(!user) throw CommonError.HttpUnauthenticated()

        res.locals.user = user
        next()
    } catch (err) {
        throw new AppError('Unauthorized', HttpCode.UNAUTHORIZED, 'User should be authenticated to access this endpoint', true)
    }

}

export default isProtectedHandler