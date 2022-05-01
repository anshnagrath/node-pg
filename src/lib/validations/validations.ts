import express, { NextFunction } from 'express';
import Joi from 'joi';
import { CustomResponse } from '../../utils';
export { CustomResponse as Response } from '../../utils'

export function ValidateRequest(validationSchema: Joi.Schema) {
    return function (req: express.Request, res: express.Response, next: NextFunction) {
        let result = validationSchema.validate(req.body);
        if (result.error) {
            return res.status(400).send(new CustomResponse({}, result.error.message, 400));
        } else {
            next();
        }
    }
}
