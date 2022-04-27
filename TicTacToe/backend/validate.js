const Joi = require('@hapi/joi');

const registerValidation = userData => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(100).required(),
        password: Joi.string().min(8).max(1024).required()

    });
    return schema.validate(userData);
};
const loginValidation = userData => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(100).required(),
        password: Joi.string().min(8).max(1024).required()

    });
    return schema.validate(userData);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;