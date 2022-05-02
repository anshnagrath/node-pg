import Joi from 'joi';

export const NewCommentSchema: Joi.Schema = Joi.object({
    title: Joi.string().required(),
    attachments: Joi.array().max(5),
    post_id :Joi.string().required(),
});


export const GetCommentsByPostIdSchema : Joi.Schema = Joi.object({
    postId :Joi.string().required(),
});


export const UpdateCommentSchema: Joi.Schema = Joi.object({
    title: Joi.string().required(),
    attachments: Joi.array().max(5),
    id :Joi.string().required(),
});

export const DeleteCommentsSchema : Joi.Schema = Joi.object({
    id :Joi.string().required(),
});
