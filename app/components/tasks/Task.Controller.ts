import { Request, Response, NextFunction } from 'express'
import { AppError, HttpCode } from '../../errors'
import { UserService } from '../users'

import { createTask } from './Task.Service'

export const postTask = async (req: Request, res: Response, next: NextFunction) => {

    try{

        const userToken = res.locals.user

        const user = await UserService.findById(userToken._id)

        const {
            description,
            period,
            done
        } = req.body

        if(user){

            const createdTask = await createTask(user._id.toString() ,{ description, period, done})
    
            res.status(HttpCode.CREATED)
            res.send({
                message: 'Task created',
                data: createdTask
            })
            
        }else{
            throw new AppError('Unauthorized', HttpCode.UNAUTHORIZED, 'Unauthorized user', true)
        }

    }catch(err){
        next(err)
    }

}

export default {
    postTask
}