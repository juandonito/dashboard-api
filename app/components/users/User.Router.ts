import { Router } from 'express'
import { UserController } from '.'
import { validatorHandler } from '../../middlewares'

import { auth, postUser } from './User.Schema'

const router = Router()

router
    .post('/', validatorHandler(postUser, 'body'), UserController.postUser)

router
    .post('/login', validatorHandler(auth, 'body'), UserController.authUser)

export default router