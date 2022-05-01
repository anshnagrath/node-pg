import Joi from 'joi';

export const NewLeadSchema: Joi.Schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    mobile: Joi.string().required(),
    project_id: Joi.array().required(),
    source: Joi.string().required(),

});
