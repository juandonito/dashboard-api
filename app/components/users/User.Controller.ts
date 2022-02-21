import { Request, Response, NextFunction } from 'express'
import { AppError, HttpCode } from '../../errors'
import UserService from './User.Service'

export const getUser = async (req: Request, res: Response, next: NextFunction) => {

    res.status(200).send({
        message: 'users found'
    })

}

export const postUser = async (req: Request, res: Response, next: NextFunction ) => {

    try {

        const user = req.body

        const newUser = await UserService.createUser(user)
    
        if(newUser !== undefined ){
    
            res.status(200).send({
                message: 'user created',
                user: newUser
            })
    
        }else{
    
            throw new AppError('Could not create user', HttpCode.BAD_REQUEST, `Impossible de créer l'utilisateur`, true)
            
        }
        
    } catch (error) {

        next(error)
        
    }

}

export default {
    getUser,
    postUser
}