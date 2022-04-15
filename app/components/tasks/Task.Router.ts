import { Router } from 'express'
import { TaskController } from '.'
import { isProtectedHandler, validatorHandler } from '../../middlewares'
import { postTask } from './Task.Schema'

const router = Router()

// --- Protected Routes ---

router.use(isProtectedHandler)

router
    .post('/', validatorHandler(postTask, 'body') , TaskController.postTask)

export default router