import { Router } from 'express'
import { UserController } from '.'
import { isProtectedHandler, validatorHandler } from '../../middlewares'

import { auth, postUser } from './User.Schema'

const router = Router()

router
    .get('/', isProtectedHandler, UserController.getUser)
    .post('/', validatorHandler(postUser, 'body'), UserController.postUser)

router
    .post('/login', validatorHandler(auth, 'body'), UserController.authUser)


export default router