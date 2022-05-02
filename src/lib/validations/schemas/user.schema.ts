import Joi from 'joi';

export const NewUserSchema: Joi.Schema = Joi.object({
    name: Joi.string().required().max(50),
    email: Joi.string().required().email(),
    mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password: Joi.string().required().min(5).max(15),

});
