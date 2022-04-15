import { Request, Response, NextFunction } from 'express'

export const createTask = (req: Request, res: Response, next: NextFunction) => {

    const body = {...req.body}

    res.send({
        message: 'This is the create task route',
        body
    })
}

export default {
    createTask
}