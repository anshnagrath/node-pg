import Joi from 'joi';

export const NewPostSchema: Joi.Schema = Joi.object({
    title: Joi.string().required(),
    attachments : Joi.array().max(5)

});


export const UpdatePostSchema: Joi.Schema = Joi.object({
    title: Joi.string().required(),
    attachments : Joi.array().max(5),
    id : Joi.string().required()

});


export const DeletePostSchema: Joi.Schema = Joi.object({
       id: Joi.string().required()
});




