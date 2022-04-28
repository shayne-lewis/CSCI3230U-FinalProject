const Joi = require('@hapi/joi');

// Validate user data with Joi for registration
const registerValidation = userData => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(100).required(),
        password: Joi.string().min(8).max(1024).required()

    });
    return schema.validate(userData);
};
// Validate user data with Joi for login
const loginValidation = userData => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(100).required(),
        password: Joi.string().min(8).max(1024).required()

    });
    return schema.validate(userData);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;