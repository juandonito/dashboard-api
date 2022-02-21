import { Router } from 'express'
import { UserController } from '.'
import { validatorHandler } from '../../middlewares'

import { postUser } from './User.Schema'

const router = Router()

router
    .get('/', UserController.getUser)
    .post('/', validatorHandler(postUser, 'body'), UserController.postUser)


export default router