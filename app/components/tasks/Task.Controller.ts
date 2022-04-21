import { Request, Response, NextFunction } from 'express'
import { AppError, HttpCode } from '../../errors'
import { UserService } from '../users'

import TaskService from './Task.Service'

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

            const createdTask = await TaskService.createTask(user._id.toString() ,{ description, period, done})
    
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

export const getTasks = async (req: Request, res: Response, next: NextFunction ) => {

    try {
        
        const userToken = res.locals.user

        const user = await UserService.findById(userToken._id)

        if(user){

            const tasks = await TaskService.fetchOwnTasks(user._id.toString())

            res.status(HttpCode.OK)
            res.send({
                message: 'Tasks found',
                data: tasks
            })

        }

    } catch (err) {
        next(err)
    }

}

export default {
    postTask,
    getTasks
}