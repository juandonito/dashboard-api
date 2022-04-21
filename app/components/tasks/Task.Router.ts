import { Router } from 'express'
import { TaskController } from '.'
import { isProtectedHandler, validatorHandler } from '../../middlewares'
import { postTask, putTask } from './Task.Schema'

const router = Router()

// --- Protected Routes ---

router.use(isProtectedHandler)

router
    .post('/', validatorHandler(postTask, 'body') , TaskController.postTask)
    .get('/', TaskController.getTasks)
    .put('/:taskId', validatorHandler(putTask, 'body'), TaskController.putTask)

export default router