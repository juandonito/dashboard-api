import Joi from 'joi'

export const postTask = Joi.object({
    description: Joi.string().required(),
    period: Joi.number().min(0).max(3).required()
})