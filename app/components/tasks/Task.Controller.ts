import { Request, Response, NextFunction } from 'express'
import { CommonError, HttpCode } from '../../errors'
import { UserService } from '../users'

import TaskService from './Task.Service'

export const postTask = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userToken = res.locals.user

        const user = await UserService.findById(userToken._id)

        const {
            description,
            period,
            done
        } = req.body

        if (!user) throw CommonError.HttpUnauthorized()

        const createdTask = await TaskService.createTask(user._id.toString(), { description, period, done })

        res.status(HttpCode.CREATED)
        res.send({
            message: 'Task created',
            data: createdTask
        })

    } catch (err) {
        next(err)
    }

}

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userToken = res.locals.user

        const user = await UserService.findById(userToken._id)

        if (!user) throw CommonError.HttpUnauthorized()

        const tasks = await TaskService.fetchOwnTasks(user._id.toString())

        res.status(HttpCode.OK)
        res.send({
            message: 'Tasks found',
            data: tasks
        })

    } catch (err) {
        next(err)
    }

}

export const putTask = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userToken = res.locals.user

        const taskUpdate = { ...req.body }

        const _taskId = req.params.taskId

        const user = await UserService.findById(userToken._id)

        if (!user) throw CommonError.HttpUnauthorized()

        const task = await TaskService.updateTask(user._id.toString(), _taskId, taskUpdate)

        if(!task) throw CommonError.HttpTaskNotFound()

        res.status(HttpCode.OK)
        res.send({
            message: 'Update applied',
            data: task
        })

    } catch (err) {
        next(err)
    }

}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userToken = res.locals.user

        const _taskId = req.params.taskId

        const user = await UserService.findById(userToken._id)

        if (!user) throw CommonError.HttpUserNotFound()

        const task = await TaskService.deleteOwnTask(user._id.toString(), _taskId)

        if (!task) throw CommonError.HttpTaskNotFound()

        res.status(HttpCode.OK)
        res.send({
            message: 'Delete success',
            data: task
        })

    } catch (err) {
        next(err)
    }

}

export default {
    postTask,
    getTasks,
    putTask,
    deleteTask
}