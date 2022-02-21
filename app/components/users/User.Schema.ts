import Joi from 'joi'

export const postUser = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})